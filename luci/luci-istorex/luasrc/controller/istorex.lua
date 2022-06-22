
module("luci.controller.istorex", package.seeall)
local page_index = {"admin", "istorex","pages"}
function index()
    entry({"admin", "istorex"}, call("redirect_index"))
    entry({"admin", "istorex", "pages"}, call("istorex_template")).leaf = true
end

function istorex_template()
    luci.template.render("istorex/main", {
        prefix=luci.dispatcher.build_url(unpack(page_index))
    })
end

function redirect_index()
    luci.http.redirect(luci.dispatcher.build_url(unpack(page_index)))
end