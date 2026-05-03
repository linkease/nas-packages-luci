-- Copyright 2022 xiaobao <xiaobao@linkease.com>
-- Licensed to the public under the MIT License

local http = require "luci.http"
local nixio = require "nixio"
local ltn12 = require "luci.ltn12"
local table = require "table"
local util = require "luci.util"
local fs = require "nixio.fs"
local jsonc = require "luci.jsonc"

module("luci.controller.istore_backend", package.seeall)

local BLOCKSIZE = 2048
local ISTOREOS_PORT = 3038

function index()
    entry({"istore"}, call("istore_backend")).leaf=true
end

local function sink_socket(sock, io_err) 
  if sock then 
    return function(chunk, err) 
      if not chunk then 
        return 1 
      else 
        return sock:send(chunk)
      end 
    end 
  else 
    return ltn12.sink.error(io_err or "unable to send socket") 
  end
end

local function session_retrieve(sid, allowed_users)
  local sdat = util.ubus("session", "get", { ubus_rpc_session = sid })
  if type(sdat) == "table" and
      type(sdat.values) == "table" and
      type(sdat.values.token) == "string" and
      (not allowed_users or
      util.contains(allowed_users, sdat.values.username))
  then
      return sid, sdat.values
  end
  return nil, nil
end

local function get_session()
  local sid
  local key
  local sdat
  for _, key in ipairs({"sysauth_https", "sysauth_http", "sysauth"}) do
    sid = http.getcookie(key)
    if sid then
      sid, sdat = session_retrieve(sid, nil)
      if sid and sdat then
        return sid, sdat
      end
    end
  end
  return nil, nil
end

local function round_temp(value)
  return math.floor(value * 10 + 0.5) / 10
end

local function read_cpu_temperature_from_thermal_zone()
  local fallback
  local zones = fs.glob("/sys/class/thermal/thermal_zone*")

  if not zones then
    return nil
  end

  for zone in zones do
    local raw_temp = fs.readfile(zone .. "/temp")
    if raw_temp then
      local value = tonumber(raw_temp:match("[-0-9.]+"))

      if value then
        if value > 1000 then
          value = value / 1000
        end

        local zone_type = fs.readfile(zone .. "/type") or ""
        if zone_type:lower():find("cpu", 1, true) then
          return round_temp(value)
        end

        fallback = fallback or value
      end
    end
  end

  if fallback then
    return round_temp(fallback)
  end

  return nil
end

local function read_cpu_temperature_from_luci_ubus()
  local tempinfo = util.ubus("luci", "getTempInfo", {}) or {}

  if type(tempinfo.tempinfo) == "string" then
    local value = tempinfo.tempinfo:match("CPU:%s*([0-9.]+)")
    if value then
      return round_temp(tonumber(value))
    end
  end

  return nil
end

local function read_cpu_temperature()
  return read_cpu_temperature_from_thermal_zone() or read_cpu_temperature_from_luci_ubus()
end

local function request_needs_cpu_temperature()
  local uri = http.getenv("REQUEST_URI") or ""
  return uri:match("/istore/system/status/?") ~= nil
end

local function add_cpu_temperature(body)
  local data = jsonc.parse(body or "")
  local temperature

  if type(data) ~= "table" or type(data.result) ~= "table" or data.result.cpuTemperature ~= nil then
    return body
  end

  temperature = read_cpu_temperature()
  if temperature == nil then
    return body
  end

  data.result.cpuTemperature = temperature
  return jsonc.stringify(data)
end

local function chunksource(sock, buffer)
	buffer = buffer or ""
	return function()
		local output
		local _, endp, count = buffer:find("^([0-9a-fA-F]+);?.-\r\n")
		while not count and #buffer <= 1024 do
			local newblock, code = sock:recv(1024 - #buffer)
			if not newblock then
				return nil, code
			end
			buffer = buffer .. newblock  
			_, endp, count = buffer:find("^([0-9a-fA-F]+);?.-\r\n")
		end
		count = tonumber(count, 16)
		if not count then
			return nil, -1, "invalid encoding"
		elseif count == 0 then
			return nil
		elseif count + 2 <= #buffer - endp then
			output = buffer:sub(endp+1, endp+count)
			buffer = buffer:sub(endp+count+3)
			return output
		else
			output = buffer:sub(endp+1, endp+count)
			buffer = ""
			if count - #output > 0 then
				local remain, code = sock:recvall(count-#output)
				if not remain then
					return nil, code
				end
				output = output .. remain
				count, code = sock:recvall(2)
			else
				count, code = sock:recvall(count+2-#buffer+endp)
			end
			if not count then
				return nil, code
			end
			return output
		end
	end
end

function istore_backend() 
  local sock = nixio.connect("127.0.0.1", ISTOREOS_PORT) 
  if not sock then
    http.status(500, "connect failed")
    return
  end
  local input = {}
  input[#input+1] = http.getenv("REQUEST_METHOD") .. " " .. http.getenv("REQUEST_URI") .. " HTTP/1.1"
  local req = http.context.request
  local start = "HTTP_"
  local start_len = string.len(start)
  local ctype = http.getenv("CONTENT_TYPE")
  if ctype then 
    input[#input+1] = "Content-Type: " .. ctype 
  end
  for k, v in pairs(req.message.env) do
    if string.sub(k, 1, start_len) == start and not string.find(k, "FORWARDED") then 
      input[#input+1] = string.sub(k, start_len+1, string.len(k)) .. ": " .. v
    end
  end
  local sid, sdat = get_session()
  if sdat ~= nil then
    input[#input+1] = "X-Forwarded-Sid: " .. sid
    input[#input+1] = "X-Forwarded-Token: " .. sdat.token
  end
  -- input[#input+1] = "X-Forwarded-For: " .. http.getenv("REMOTE_HOST") ..":".. http.getenv("REMOTE_PORT")
  local num = tonumber(http.getenv("CONTENT_LENGTH")) or 0
  input[#input+1] = "Content-Length: " .. tostring(num)
  input[#input+1] = "\r\n"
  local source = ltn12.source.cat(ltn12.source.string(table.concat(input, "\r\n")), http.source())
  local ret = ltn12.pump.all(source, sink_socket(sock, "write sock error")) 
  if ret ~= 1 then
    sock:close()
    http.status(500, "proxy error")
    return
  end

  local linesrc = sock:linesource()
  local line, code, error = linesrc()
  if not line then
    sock:close()
    http.status(500, "response parse failed")
    return
  end

  local protocol, status, msg = line:match("^([%w./]+) ([0-9]+) (.*)")
  if not protocol then
    sock:close()
    http.status(500, "response protocol error")
    return
  end
  num = tonumber(status) or 0
  http.status(num, msg)

  local chunked = 0
  line = linesrc()
  while line and line ~= "" do
    local key, val = line:match("^([%w-]+)%s?:%s?(.*)")
    if key and key ~= "Status" then
      if key == "Transfer-Encoding" and val == "chunked" then
        chunked = 1
      end
      if key ~= "Connection" and key ~= "Transfer-Encoding" and key ~= "Content-Length" then 
        http.header(key, val)
      end
    end
    line = linesrc()
  end
  if not line then
    sock:close()
    http.status(500, "parse header failed")
    return
  end

  local body_buffer = linesrc(true)
  if request_needs_cpu_temperature() then
    local body = {}
    local function body_sink(chunk)
      if chunk then
        body[#body + 1] = chunk
      end
      return 1
    end

    if chunked == 1 then
      ltn12.pump.all(chunksource(sock, body_buffer), body_sink)
    else
      local body_source = ltn12.source.cat(ltn12.source.string(body_buffer), sock:blocksource())
      ltn12.pump.all(body_source, body_sink)
    end

    http.write(add_cpu_temperature(table.concat(body)))
  elseif chunked == 1 then
    ltn12.pump.all(chunksource(sock, body_buffer), http.write)
  else
    local body_source = ltn12.source.cat(ltn12.source.string(body_buffer), sock:blocksource())
    ltn12.pump.all(body_source, http.write)
  end

  sock:close()
end
