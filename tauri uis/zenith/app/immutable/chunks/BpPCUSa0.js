import {
    S as x,
    A as W,
    B as X,
    C as w,
    D as k,
    F as y,
    G as A,
    U as o,
    g as P,
    H as C,
    I as ee,
    J as re,
    K as ne,
    o as ae,
    m as p,
    n as ie,
    E as te,
    L as se,
    M as ue,
    N as fe,
    O as B,
    P as M,
    q as Y,
    w as K,
    v as le,
    Q as J,
    R as $,
    T as ce,
    V as de,
    W as _e,
    X as ve,
    Y as oe,
    Z as be,
    _ as Q,
    $ as he,
    b as G,
    a0 as Pe,
    a1 as ye,
    a2 as H,
    a3 as ge,
    a4 as we,
    a5 as Re,
    a6 as Ee,
    a7 as me,
    f as Z,
    a8 as Ie,
    a9 as Se,
    aa as j
} from "./UKEfVatE.js";

function I(e, r = null, c) {
    if (typeof e != "object" || e === null || x in e) return e;
    const f = re(e);
    if (f !== W && f !== X) return e;
    var s = new Map,
        d = ne(e),
        b = w(0);
    d && s.set("length", w(e.length));
    var g;
    return new Proxy(e, {
        defineProperty(u, n, a) {
            (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && k();
            var t = s.get(n);
            return t === void 0 ? (t = w(a.value), s.set(n, t)) : y(t, I(a.value, g)), !0
        },
        deleteProperty(u, n) {
            var a = s.get(n);
            if (a === void 0) n in u && s.set(n, w(o));
            else {
                if (d && typeof n == "string") {
                    var t = s.get("length"),
                        i = Number(n);
                    Number.isInteger(i) && i < t.v && y(t, i)
                }
                y(a, o), V(b)
            }
            return !0
        },
        get(u, n, a) {
            var v;
            if (n === x) return e;
            var t = s.get(n),
                i = n in u;
            if (t === void 0 && (!i || (v = A(u, n)) != null && v.writable) && (t = w(I(i ? u[n] : o, g)), s.set(n, t)), t !== void 0) {
                var l = P(t);
                return l === o ? void 0 : l
            }
            return Reflect.get(u, n, a)
        },
        getOwnPropertyDescriptor(u, n) {
            var a = Reflect.getOwnPropertyDescriptor(u, n);
            if (a && "value" in a) {
                var t = s.get(n);
                t && (a.value = P(t))
            } else if (a === void 0) {
                var i = s.get(n),
                    l = i == null ? void 0 : i.v;
                if (i !== void 0 && l !== o) return {
                    enumerable: !0,
                    configurable: !0,
                    value: l,
                    writable: !0
                }
            }
            return a
        },
        has(u, n) {
            var l;
            if (n === x) return !0;
            var a = s.get(n),
                t = a !== void 0 && a.v !== o || Reflect.has(u, n);
            if (a !== void 0 || C !== null && (!t || (l = A(u, n)) != null && l.writable)) {
                a === void 0 && (a = w(t ? I(u[n], g) : o), s.set(n, a));
                var i = P(a);
                if (i === o) return !1
            }
            return t
        },
        set(u, n, a, t) {
            var E;
            var i = s.get(n),
                l = n in u;
            if (d && n === "length")
                for (var v = a; v < i.v; v += 1) {
                    var R = s.get(v + "");
                    R !== void 0 ? y(R, o) : v in u && (R = w(o), s.set(v + "", R))
                }
            i === void 0 ? (!l || (E = A(u, n)) != null && E.writable) && (i = w(void 0), y(i, I(a, g)), s.set(n, i)) : (l = i.v !== o, y(i, I(a, g)));
            var h = Reflect.getOwnPropertyDescriptor(u, n);
            if (h != null && h.set && h.set.call(t, a), !l) {
                if (d && typeof n == "string") {
                    var S = s.get("length"),
                        O = Number(n);
                    Number.isInteger(O) && O >= S.v && y(S, O + 1)
                }
                V(b)
            }
            return !0
        },
        ownKeys(u) {
            P(b);
            var n = Reflect.ownKeys(u).filter(i => {
                var l = s.get(i);
                return l === void 0 || l.v !== o
            });
            for (var [a, t] of s) t.v !== o && !(a in u) && n.push(a);
            return n
        },
        setPrototypeOf() {
            ee()
        }
    })
}

function V(e, r = 1) {
    y(e, e.v + r)
}

function Ae(e, r, c = !1) {
    p && ie();
    var f = e,
        s = null,
        d = null,
        b = o,
        g = c ? te : 0,
        u = !1;
    const n = (t, i = !0) => {
            u = !0, a(i, t)
        },
        a = (t, i) => {
            if (b === (b = t)) return;
            let l = !1;
            if (p) {
                const v = f.data === se;
                !!b === v && (f = ue(), fe(f), B(!1), l = !0)
            }
            b ? (s ? M(s) : i && (s = Y(() => i(f))), d && K(d, () => {
                d = null
            })) : (d ? M(d) : i && (d = Y(() => i(f))), s && K(s, () => {
                s = null
            })), l && B(!0)
        };
    ae(() => {
        u = !1, r(n), u || a(null, null)
    }, g), p && (f = le)
}
let N = !1,
    F = Symbol();

function De(e, r, c) {
    const f = c[r] ?? (c[r] = {
        store: null,
        source: J(void 0),
        unsubscribe: $
    });
    if (f.store !== e && !(F in c))
        if (f.unsubscribe(), f.store = e ?? null, e == null) f.source.v = void 0, f.unsubscribe = $;
        else {
            var s = !0;
            f.unsubscribe = ce(e, d => {
                s ? f.source.v = d : y(f.source, d)
            }), s = !1
        } return e && F in c ? de(e) : P(f.source)
}

function Le() {
    const e = {};

    function r() {
        _e(() => {
            for (var c in e) e[c].unsubscribe();
            ve(e, F, {
                enumerable: !1,
                value: !0
            })
        })
    }
    return [e, r]
}

function Oe(e) {
    var r = N;
    try {
        return N = !1, [e(), N]
    } finally {
        N = r
    }
}
const Te = {
    get(e, r) {
        if (!e.exclude.includes(r)) return P(e.version), r in e.special ? e.special[r]() : e.props[r]
    },
    set(e, r, c) {
        return r in e.special || (e.special[r] = Ne({
            get [r]() {
                return e.props[r]
            }
        }, r, Q)), e.special[r](c), j(e.version), !0
    },
    getOwnPropertyDescriptor(e, r) {
        if (!e.exclude.includes(r) && r in e.props) return {
            enumerable: !0,
            configurable: !0,
            value: e.props[r]
        }
    },
    deleteProperty(e, r) {
        return e.exclude.includes(r) || (e.exclude.push(r), j(e.version)), !0
    },
    has(e, r) {
        return e.exclude.includes(r) ? !1 : r in e.props
    },
    ownKeys(e) {
        return Reflect.ownKeys(e.props).filter(r => !e.exclude.includes(r))
    }
};

function pe(e, r) {
    return new Proxy({
        props: e,
        exclude: r,
        special: {},
        version: w(0)
    }, Te)
}

function z(e) {
    for (var r = C, c = C; r !== null && !(r.f & (Pe | ye));) r = r.parent;
    try {
        return H(r), e()
    } finally {
        H(c)
    }
}

function Ne(e, r, c, f) {
    var q;
    var s = (c & ge) !== 0,
        d = !we || (c & Re) !== 0,
        b = (c & Ee) !== 0,
        g = (c & Se) !== 0,
        u = !1,
        n;
    b ? [n, u] = Oe(() => e[r]) : n = e[r];
    var a = x in e || me in e,
        t = b && (((q = A(e, r)) == null ? void 0 : q.set) ?? (a && r in e && (_ => e[r] = _))) || void 0,
        i = f,
        l = !0,
        v = !1,
        R = () => (v = !0, l && (l = !1, g ? i = G(f) : i = f), i);
    n === void 0 && f !== void 0 && (t && d && oe(), n = R(), t && t(n));
    var h;
    if (d) h = () => {
        var _ = e[r];
        return _ === void 0 ? R() : (l = !0, v = !1, _)
    };
    else {
        var S = z(() => (s ? Z : Ie)(() => e[r]));
        S.f |= be, h = () => {
            var _ = P(S);
            return _ !== void 0 && (i = void 0), _ === void 0 ? i : _
        }
    }
    if (!(c & Q)) return h;
    if (t) {
        var O = e.$$legacy;
        return function(_, m) {
            return arguments.length > 0 ? ((!d || !m || O || u) && t(m ? h() : _), _) : h()
        }
    }
    var E = !1,
        U = !1,
        D = J(n),
        T = z(() => Z(() => {
            var _ = h(),
                m = P(D);
            return E ? (E = !1, U = !0, m) : (U = !1, D.v = _)
        }));
    return s || (T.equals = he),
        function(_, m) {
            if (arguments.length > 0) {
                const L = m ? P(T) : d && b ? I(_) : _;
                return T.equals(L) || (E = !0, y(D, L), v && i !== void 0 && (i = L), G(() => P(T))), _
            }
            return P(T)
        }
}
export {
    I as a, De as b, Ae as i, pe as l, Ne as p, Le as s
};