import {
    ah as S,
    a2 as O,
    ai as q,
    H as L,
    W as z,
    z as G,
    X as K,
    K as X,
    m as c,
    aj as b,
    o as J,
    ak as Q,
    al as V,
    am as P,
    O as w,
    N,
    v as u,
    an as E,
    ao as Z,
    ap as ee,
    n as $,
    aq as C,
    ar as M,
    as as re,
    at as te,
    au as ae,
    av as ne,
    aw as ie,
    ax as oe,
    q as se,
    p as ue,
    j as fe,
    c as de
} from "./UKEfVatE.js";
const le = ["touchstart", "touchmove"];

function ce(e) {
    return le.includes(e)
}
let H = !1;

function _e() {
    H || (H = !0, document.addEventListener("reset", e => {
        Promise.resolve().then(() => {
            var r;
            if (!e.defaultPrevented)
                for (const t of e.target.elements)(r = t.__on_r) == null || r.call(t)
        })
    }, {
        capture: !0
    }))
}

function F(e) {
    var r = q,
        t = L;
    S(null), O(null);
    try {
        return e()
    } finally {
        S(r), O(t)
    }
}

function me(e, r, t, i = t) {
    e.addEventListener(r, () => F(t));
    const n = e.__on_r;
    n ? e.__on_r = () => {
        n(), i(!0)
    } : e.__on_r = () => i(!0), _e()
}
const j = new Set,
    D = new Set;

function we(e) {
    if (!c) return;
    e.onload && e.removeAttribute("onload"), e.onerror && e.removeAttribute("onerror");
    const r = e.__e;
    r !== void 0 && (e.__e = void 0, queueMicrotask(() => {
        e.isConnected && e.dispatchEvent(r)
    }))
}

function ve(e, r, t, i) {
    function n(a) {
        if (i.capture || T.call(r, a), !a.cancelBubble) return F(() => t.call(this, a))
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? G(() => {
        r.addEventListener(e, n, i)
    }) : r.addEventListener(e, n, i), n
}

function Ee(e, r, t, i, n) {
    var a = {
            capture: i,
            passive: n
        },
        o = ve(e, r, t, a);
    (r === document.body || r === window || r === document) && z(() => {
        r.removeEventListener(e, o, a)
    })
}

function Te(e) {
    for (var r = 0; r < e.length; r++) j.add(e[r]);
    for (var t of D) t(e)
}

function T(e) {
    var I;
    var r = this,
        t = r.ownerDocument,
        i = e.type,
        n = ((I = e.composedPath) == null ? void 0 : I.call(e)) || [],
        a = n[0] || e.target,
        o = 0,
        _ = e.__root;
    if (_) {
        var d = n.indexOf(_);
        if (d !== -1 && (r === document || r === window)) {
            e.__root = r;
            return
        }
        var g = n.indexOf(r);
        if (g === -1) return;
        d <= g && (o = d)
    }
    if (a = n[o] || e.target, a !== r) {
        K(e, "currentTarget", {
            configurable: !0,
            get() {
                return a || t
            }
        });
        var R = q,
            v = L;
        S(null), O(null);
        try {
            for (var s, f = []; a !== null;) {
                var p = a.assignedSlot || a.parentNode || a.host || null;
                try {
                    var y = a["__" + i];
                    if (y !== void 0 && !a.disabled)
                        if (X(y)) {
                            var [U, ...x] = y;
                            U.apply(a, [e, ...x])
                        } else y.call(a, e)
                } catch (A) {
                    s ? f.push(A) : s = A
                }
                if (e.cancelBubble || p === r || p === null) break;
                a = p
            }
            if (s) {
                for (let A of f) queueMicrotask(() => {
                    throw A
                });
                throw s
            }
        } finally {
            e.__root = r, delete e.currentTarget, S(R), O(v)
        }
    }
}
let l;

function he() {
    l = void 0
}

function be(e) {
    let r = null,
        t = c;
    var i;
    if (c) {
        for (r = u, l === void 0 && (l = E(document.head)); l !== null && (l.nodeType !== 8 || l.data !== V);) l = P(l);
        l === null ? w(!1) : l = N(P(l))
    }
    c || (i = document.head.appendChild(b()));
    try {
        J(() => e(i), Q)
    } finally {
        t && (w(!0), l = u, N(r))
    }
}

function B(e) {
    var r = document.createElement("template");
    return r.innerHTML = e, r.content
}

function h(e, r) {
    var t = L;
    t.nodes_start === null && (t.nodes_start = e, t.nodes_end = r)
}

function Ne(e, r) {
    var t = (r & Z) !== 0,
        i = (r & ee) !== 0,
        n, a = !e.startsWith("<!>");
    return () => {
        if (c) return h(u, null), u;
        n === void 0 && (n = B(a ? e : "<!>" + e), t || (n = E(n)));
        var o = i ? document.importNode(n, !0) : n.cloneNode(!0);
        if (t) {
            var _ = E(o),
                d = o.lastChild;
            h(_, d)
        } else h(o, o);
        return o
    }
}

function Le(e, r, t = "svg") {
    var i = !e.startsWith("<!>"),
        n = `<${t}>${i?e:"<!>"+e}</${t}>`,
        a;
    return () => {
        if (c) return h(u, null), u;
        if (!a) {
            var o = B(n),
                _ = E(o);
            a = E(_)
        }
        var d = a.cloneNode(!0);
        return h(d, d), d
    }
}

function Ae(e = "") {
    if (!c) {
        var r = b(e + "");
        return h(r, r), r
    }
    var t = u;
    return t.nodeType !== 3 && (t.before(t = b()), N(t)), h(t, t), t
}

function Se() {
    if (c) return h(u, null), u;
    var e = document.createDocumentFragment(),
        r = document.createComment(""),
        t = b();
    return e.append(r, t), h(r, t), e
}

function Oe(e, r) {
    if (c) {
        L.nodes_end = u, $();
        return
    }
    e !== null && e.before(r)
}
let W = !0;

function Re(e, r) {
    var t = r == null ? "" : typeof r == "object" ? r + "" : r;
    t !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = t, e.nodeValue = t == null ? "" : t + "")
}

function pe(e, r) {
    return Y(e, r)
}

function Me(e, r) {
    C(), r.intro = r.intro ?? !1;
    const t = r.target,
        i = c,
        n = u;
    try {
        for (var a = E(t); a && (a.nodeType !== 8 || a.data !== V);) a = P(a);
        if (!a) throw M;
        w(!0), N(a), $();
        const o = Y(e, {
            ...r,
            anchor: a
        });
        if (u === null || u.nodeType !== 8 || u.data !== re) throw te(), M;
        return w(!1), o
    } catch (o) {
        if (o === M) return r.recover === !1 && ae(), C(), ne(t), w(!1), pe(e, r);
        throw o
    } finally {
        w(i), N(n), he()
    }
}
const m = new Map;

function Y(e, {
    target: r,
    anchor: t,
    props: i = {},
    events: n,
    context: a,
    intro: o = !0
}) {
    C();
    var _ = new Set,
        d = v => {
            for (var s = 0; s < v.length; s++) {
                var f = v[s];
                if (!_.has(f)) {
                    _.add(f);
                    var p = ce(f);
                    r.addEventListener(f, T, {
                        passive: p
                    });
                    var y = m.get(f);
                    y === void 0 ? (document.addEventListener(f, T, {
                        passive: p
                    }), m.set(f, 1)) : m.set(f, y + 1)
                }
            }
        };
    d(ie(j)), D.add(d);
    var g = void 0,
        R = oe(() => {
            var v = t ?? r.appendChild(b());
            return se(() => {
                if (a) {
                    ue({});
                    var s = de;
                    s.c = a
                }
                n && (i.$$events = n), c && h(v, null), W = o, g = e(v, i) || {}, W = !0, c && (L.nodes_end = u), a && fe()
            }), () => {
                var p;
                for (var s of _) {
                    r.removeEventListener(s, T);
                    var f = m.get(s);
                    --f === 0 ? (document.removeEventListener(s, T), m.delete(s)) : m.set(s, f)
                }
                D.delete(d), v !== t && ((p = v.parentNode) == null || p.removeChild(v))
            }
        });
    return k.set(g, R), g
}
let k = new WeakMap;

function Pe(e, r) {
    const t = k.get(e);
    return t ? (k.delete(e), t(r)) : Promise.resolve()
}
const ye = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(ye);
export {
    Oe as a, Ae as b, Se as c, Te as d, Ee as e, be as f, _e as g, Me as h, W as i, me as l, pe as m, Le as n, we as r, Re as s, Ne as t, Pe as u
};