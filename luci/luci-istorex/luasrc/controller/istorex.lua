
module("luci.controller.istorex", package.seeall)
local page_index = {"admin", "istorex","pages"}
function index()
    entry({"admin", "istorex"}, call("redirect_index"))
    entry({"admin", "istorex", "pages"}, call("istorex_template")).leaf = true
    if nixio.fs.access("/usr/lib/lua/luci/view/istorex/main_dev.htm") then
        entry({"admin", "istorex","dev"}, call("istorex_template_dev")).leaf = true
    end
end

function istorex_template()
    luci.template.render("istorex/main", {
        prefix=luci.dispatcher.build_url(unpack(page_index))
    })
end

function istorex_template_dev()
    luci.template.render("istorex/main_dev",{
        prefix=luci.dispatcher.build_url(unpack({"admin", "istorex_dev"}))
    })
end

function redirect_index()
    luci.http.redirect(luci.dispatcher.build_url(unpack(page_index)))
end