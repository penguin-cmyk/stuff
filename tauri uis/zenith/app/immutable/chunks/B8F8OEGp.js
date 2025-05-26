import {
    m as E,
    n as k,
    o as v,
    E as w,
    q as P,
    v as R,
    w as g,
    x as T,
    y as b,
    b as A,
    z as L,
    S as q
} from "./UKEfVatE.js";

function $(e, n, i) {
    E && k();
    var f = e,
        s, t;
    v(() => {
        s !== (s = n()) && (t && (g(t), t = null), s && (t = P(() => i(f, s))))
    }, w), E && (f = R)
}

function y(e, n) {
    return e === n || (e == null ? void 0 : e[q]) === n
}

function F(e = {}, n, i, f) {
    return T(() => {
        var s, t;
        return b(() => {
            s = t, t = [], A(() => {
                e !== i(...t) && (n(e, ...t), s && y(i(...s), e) && n(null, ...s))
            })
        }), () => {
            L(() => {
                t && y(i(...t), e) && n(null, ...t)
            })
        }
    }), e
}
const B = "modulepreload",
    C = function(e, n) {
        return new URL(e, n).href
    },
    m = {},
    O = function(n, i, f) {
        let s = Promise.resolve();
        if (i && i.length > 0) {
            const c = document.getElementsByTagName("link"),
                r = document.querySelector("meta[property=csp-nonce]"),
                d = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute("nonce"));
            s = Promise.allSettled(i.map(a => {
                if (a = C(a, f), a in m) return;
                m[a] = !0;
                const l = a.endsWith(".css"),
                    S = l ? '[rel="stylesheet"]' : "";
                if (!!f)
                    for (let u = c.length - 1; u >= 0; u--) {
                        const h = c[u];
                        if (h.href === a && (!l || h.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${a}"]${S}`)) return;
                const o = document.createElement("link");
                if (o.rel = l ? "stylesheet" : B, l || (o.as = "script"), o.crossOrigin = "", o.href = a, d && o.setAttribute("nonce", d), document.head.appendChild(o), l) return new Promise((u, h) => {
                    o.addEventListener("load", u), o.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${a}`)))
                })
            }))
        }

        function t(c) {
            const r = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (r.payload = c, window.dispatchEvent(r), !r.defaultPrevented) throw c
        }
        return s.then(c => {
            for (const r of c || []) r.status === "rejected" && t(r.reason);
            return n().catch(t)
        })
    };
export {
    O as _, F as b, $ as c
};