import { ref as s, computed as T, watch as z, onMounted as W, onUnmounted as D, openBlock as d, createElementBlock as u, createElementVNode as f, createCommentVNode as m, toDisplayString as p } from "/luci-static/quickstart/card-runtime-v1.js";
const L = ".fn-web-dialog{width:100%;min-width:0;min-height:0;display:flex;flex-direction:column;background:var(--qs-card-panel);color:var(--qs-card-text)}.fn-web-frame{position:relative;flex:1;min-height:0}.fn-web-frame iframe{display:block;border:0;width:100%;height:100%;background:var(--qs-card-panel)}.fn-web-loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:24px;text-align:center;background:var(--qs-card-panel);color:var(--qs-card-muted)}.fn-web-loading strong{color:var(--qs-card-text);font-size:16px}.fn-web-loading p{font-size:12px;line-height:1.7;max-width:360px;margin:0}.fn-web-loading button{font:inherit;color:var(--qs-card-accent);border:1px solid var(--qs-card-line);background:var(--qs-card-soft);padding:10px 20px;border-radius:8px;cursor:pointer}.fn-web-footnote{font-size:10px;color:var(--qs-card-muted);line-height:1.6;margin:0!important;padding:9px 20px;border-top:1px solid var(--qs-card-line)}@media(max-width:600px){.fn-web-footnote{padding:8px 14px}}", M = {
  class: "fn-web-dialog",
  "data-fastnet-web-dialog": ""
}, O = { class: "fn-web-frame" }, R = ["src", "title"], V = ["role"], j = { class: "fn-web-footnote" }, I = {
  __name: "WebDialog",
  props: ["context", "locale", "view"],
  emits: ["close"],
  setup(q, { emit: N }) {
    if (!document.getElementById("fastnet-web-v1-style")) {
      const e = document.createElement("style");
      e.id = "fastnet-web-v1-style", e.textContent = L, document.head.appendChild(e);
    }
    const i = q, S = N, o = (e, a) => i.locale === "en" ? a : e, r = s(null), l = s(!1), t = s(!1), g = s(0), E = T(() => "/cgi-bin/luci/admin/services/fastnet/embed?theme=" + i.context.theme.effective + (i.view === "history" ? "&view=history" : ""));
    let c;
    function v() {
      clearTimeout(c), c = setTimeout(() => {
        l.value || (t.value = !0);
      }, 15e3);
    }
    function F() {
      l.value = !1, t.value = !1, g.value++, v();
    }
    function w() {
      var e, a;
      (a = (e = r.value) == null ? void 0 : e.contentWindow) == null || a.postMessage({ type: "quickstart:theme", theme: i.context.theme.effective }, location.origin);
    }
    function h(e) {
      var a, b, x, y, k, _;
      if (!(e.origin !== location.origin || e.source !== ((a = r.value) == null ? void 0 : a.contentWindow))) {
        if (((b = e.data) == null ? void 0 : b.type) === "fastnet:ready")
          clearTimeout(c), l.value = !0, t.value = !1, w();
        else if (((x = e.data) == null ? void 0 : x.type) === "fastnet:close") S("close");
        else if (((y = e.data) == null ? void 0 : y.type) === "fastnet:focus") {
          const n = (k = r.value) == null ? void 0 : k.closest("section.network-dialog");
          (_ = (n == null ? void 0 : n.querySelector(e.data.backward ? "[data-network-dialog-close]" : "[data-network-dialog-open]")) || (n == null ? void 0 : n.querySelector("[data-network-dialog-close]"))) == null || _.focus();
        }
      }
    }
    const C = E.value, B = s(C);
    return z(() => i.context.theme.effective, w), W(() => {
      window.addEventListener("message", h), v();
    }), D(() => {
      clearTimeout(c), window.removeEventListener("message", h);
    }), (e, a) => (d(), u("div", M, [
      f("div", O, [
        t.value ? m("", !0) : (d(), u("iframe", {
          key: g.value,
          ref_key: "frame",
          ref: r,
          src: B.value,
          title: o("FastNet 完整测速界面", "FastNet speed test interface"),
          referrerpolicy: "same-origin"
        }, null, 8, R)),
        l.value ? m("", !0) : (d(), u("div", {
          key: 1,
          class: "fn-web-loading",
          role: t.value ? "alert" : "status"
        }, [
          f("strong", null, p(t.value ? o("FastNet 页面暂时无法加载", "FastNet could not be loaded") : o("正在打开 FastNet…", "Opening FastNet…")), 1),
          f("p", null, p(t.value ? o("可以重试，或在新窗口中打开。请确认插件服务已启用。", "Retry or open in a new window. Check that the plugin service is enabled.") : o("打开页面不会自动测速；请在子窗口中点击开始。", "Opening the page does not start a test. Select Start inside the window.")), 1),
          t.value ? (d(), u("button", {
            key: 0,
            onClick: F
          }, p(o("重新加载", "Reload")), 1)) : m("", !0)
        ], 8, V))
      ]),
      f("p", j, p(o("核心已接受的测速继续运行；关闭窗口将中断浏览器测量，已保存结果保留。", "Accepted core tests continue. Browser tests stop when closed; saved results remain.")), 1)
    ]));
  }
};
export {
  I as default
};
