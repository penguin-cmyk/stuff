var dn = Array.isArray,
    yn = Array.prototype.indexOf,
    re = Array.from,
    se = Object.defineProperty,
    xt = Object.getOwnPropertyDescriptor,
    En = Object.getOwnPropertyDescriptors,
    le = Object.prototype,
    ae = Array.prototype,
    wn = Object.getPrototypeOf;

function ue(t) {
    return typeof t == "function"
}
const q = () => {};

function oe(t) {
    return typeof(t == null ? void 0 : t.then) == "function"
}

function ie(t) {
    return t()
}

function dt(t) {
    for (var n = 0; n < t.length; n++) t[n]()
}
const E = 2,
    St = 4,
    K = 8,
    yt = 16,
    T = 32,
    z = 64,
    Q = 128,
    R = 256,
    tt = 512,
    h = 1024,
    A = 2048,
    S = 4096,
    L = 8192,
    M = 16384,
    mn = 32768,
    Ot = 65536,
    fe = 1 << 17,
    bn = 1 << 19,
    Ct = 1 << 20,
    kt = Symbol("$state"),
    ce = Symbol("legacy props"),
    _e = Symbol("");

function Nt(t) {
    return t === this.v
}

function qt(t, n) {
    return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function"
}

function Pt(t) {
    return !qt(t, this.v)
}

function gn(t) {
    throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Tn() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function An(t) {
    throw new Error("https://svelte.dev/e/effect_orphan")
}

function xn() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function ve() {
    throw new Error("https://svelte.dev/e/hydration_failed")
}

function Ft(t) {
    throw new Error("https://svelte.dev/e/lifecycle_legacy_only")
}

function pe(t) {
    throw new Error("https://svelte.dev/e/props_invalid_value")
}

function he() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function de() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function kn() {
    throw new Error("https://svelte.dev/e/state_unsafe_local_read")
}

function In() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
let Z = !1;

function ye() {
    Z = !0
}
const Ee = 1,
    we = 2,
    me = 4,
    be = 8,
    ge = 16,
    Te = 1,
    Ae = 2,
    xe = 4,
    ke = 8,
    Ie = 16,
    De = 4,
    Re = 1,
    Se = 2,
    Dn = "[",
    Rn = "[!",
    Sn = "]",
    Lt = {},
    Oe = Symbol();

function Et(t, n) {
    var e = {
        f: 0,
        v: t,
        reactions: null,
        equals: Nt,
        rv: 0,
        wv: 0
    };
    return e
}

function Ce(t) {
    return Mt(Et(t))
}

function On(t, n = !1) {
    var r;
    const e = Et(t);
    return n || (e.equals = Pt), Z && u !== null && u.l !== null && ((r = u.l).s ?? (r.s = [])).push(e), e
}

function Ne(t, n = !1) {
    return Mt(On(t, n))
}

function Mt(t) {
    return _ !== null && _.f & E && (b === null ? Vn([t]) : b.push(t)), t
}

function qe(t, n) {
    return wt(t, W(() => Tt(t))), n
}

function wt(t, n) {
    return _ !== null && at() && _.f & (E | yt) && (b === null || !b.includes(t)) && In(), Cn(t, n)
}

function Cn(t, n) {
    return t.equals(n) || (t.v, t.v = n, t.wv = sn(), Yt(t, A), at() && p !== null && p.f & h && !(p.f & (T | z)) && (g === null ? $n([t]) : g.push(t))), n
}

function Yt(t, n) {
    var e = t.reactions;
    if (e !== null)
        for (var r = at(), s = e.length, l = 0; l < s; l++) {
            var a = e[l],
                o = a.f;
            o & A || !r && a === p || (w(a, n), o & (h | R) && (o & E ? Yt(a, S) : it(a)))
        }
}

function Ht(t) {
    console.warn("https://svelte.dev/e/hydration_mismatch")
}
let I = !1;

function Pe(t) {
    I = t
}
let m;

function j(t) {
    if (t === null) throw Ht(), Lt;
    return m = t
}

function Fe() {
    return j(O(m))
}

function Le(t) {
    if (I) {
        if (O(m) !== null) throw Ht(), Lt;
        m = t
    }
}

function Me(t = 1) {
    if (I) {
        for (var n = t, e = m; n--;) e = O(e);
        m = e
    }
}

function Ye() {
    for (var t = 0, n = m;;) {
        if (n.nodeType === 8) {
            var e = n.data;
            if (e === Sn) {
                if (t === 0) return n;
                t -= 1
            } else(e === Dn || e === Rn) && (t += 1)
        }
        var r = O(n);
        n.remove(), n = r
    }
}
var It, Ut, Bt;

function He() {
    if (It === void 0) {
        It = window;
        var t = Element.prototype,
            n = Node.prototype;
        Ut = xt(n, "firstChild").get, Bt = xt(n, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0
    }
}

function ct(t = "") {
    return document.createTextNode(t)
}

function _t(t) {
    return Ut.call(t)
}

function O(t) {
    return Bt.call(t)
}

function Ue(t, n) {
    if (!I) return _t(t);
    var e = _t(m);
    if (e === null) e = m.appendChild(ct());
    else if (n && e.nodeType !== 3) {
        var r = ct();
        return e == null || e.before(r), j(r), r
    }
    return j(e), e
}

function Be(t, n) {
    if (!I) {
        var e = _t(t);
        return e instanceof Comment && e.data === "" ? O(e) : e
    }
    return m
}

function je(t, n = 1, e = !1) {
    let r = I ? m : t;
    for (var s; n--;) s = r, r = O(r);
    if (!I) return r;
    var l = r == null ? void 0 : r.nodeType;
    if (e && l !== 3) {
        var a = ct();
        return r === null ? s == null || s.after(a) : r.before(a), j(a), a
    }
    return j(r), r
}

function Ve(t) {
    t.textContent = ""
}

function Nn(t) {
    var n = E | A;
    p === null ? n |= R : p.f |= Ct;
    var e = _ !== null && _.f & E ? _ : null;
    const r = {
        children: null,
        ctx: u,
        deps: null,
        equals: Nt,
        f: n,
        fn: t,
        reactions: null,
        rv: 0,
        v: null,
        wv: 0,
        parent: e ?? p
    };
    return e !== null && (e.children ?? (e.children = [])).push(r), r
}

function $e(t) {
    const n = Nn(t);
    return n.equals = Pt, n
}

function jt(t) {
    var n = t.children;
    if (n !== null) {
        t.children = null;
        for (var e = 0; e < n.length; e += 1) {
            var r = n[e];
            r.f & E ? mt(r) : D(r)
        }
    }
}

function qn(t) {
    for (var n = t.parent; n !== null;) {
        if (!(n.f & E)) return n;
        n = n.parent
    }
    return null
}

function Vt(t) {
    var n, e = p;
    st(qn(t));
    try {
        jt(t), n = an(t)
    } finally {
        st(e)
    }
    return n
}

function $t(t) {
    var n = Vt(t),
        e = (k || t.f & R) && t.deps !== null ? S : h;
    w(t, e), t.equals(n) || (t.v = n, t.wv = sn())
}

function mt(t) {
    jt(t), G(t, 0), w(t, M), t.v = t.children = t.deps = t.ctx = t.reactions = null
}

function Gt(t) {
    p === null && _ === null && An(), _ !== null && _.f & R && Tn(), gt && gn()
}

function Pn(t, n) {
    var e = n.last;
    e === null ? n.last = n.first = t : (e.next = t, t.prev = e, n.last = t)
}

function Y(t, n, e, r = !0) {
    var s = (t & z) !== 0,
        l = p,
        a = {
            ctx: u,
            deps: null,
            deriveds: null,
            nodes_start: null,
            nodes_end: null,
            f: t | A,
            first: null,
            fn: n,
            last: null,
            next: null,
            parent: s ? null : l,
            prev: null,
            teardown: null,
            transitions: null,
            wv: 0
        };
    if (e) {
        var o = P;
        try {
            Dt(!0), ot(a), a.f |= mn
        } catch (v) {
            throw D(a), v
        } finally {
            Dt(o)
        }
    } else n !== null && it(a);
    var f = e && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Ct | Q)) === 0;
    if (!f && !s && r && (l !== null && Pn(a, l), _ !== null && _.f & E)) {
        var i = _;
        (i.children ?? (i.children = [])).push(a)
    }
    return a
}

function Ge(t) {
    const n = Y(K, null, !1);
    return w(n, h), n.teardown = t, n
}

function Fn(t) {
    Gt();
    var n = p !== null && (p.f & T) !== 0 && u !== null && !u.m;
    if (n) {
        var e = u;
        (e.e ?? (e.e = [])).push({
            fn: t,
            effect: p,
            reaction: _
        })
    } else {
        var r = Kt(t);
        return r
    }
}

function Ke(t) {
    return Gt(), bt(t)
}

function ze(t) {
    const n = Y(z, t, !0);
    return (e = {}) => new Promise(r => {
        e.outro ? Yn(n, () => {
            D(n), r(void 0)
        }) : (D(n), r(void 0))
    })
}

function Kt(t) {
    return Y(St, t, !1)
}

function Ze(t, n) {
    var e = u,
        r = {
            effect: null,
            ran: !1
        };
    e.l.r1.push(r), r.effect = bt(() => {
        t(), !r.ran && (r.ran = !0, wt(e.l.r2, !0), W(n))
    })
}

function We() {
    var t = u;
    bt(() => {
        if (Tt(t.l.r2)) {
            for (var n of t.l.r1) {
                var e = n.effect;
                e.f & h && w(e, S), U(e) && ot(e), n.ran = !1
            }
            t.l.r2.v = !1
        }
    })
}

function bt(t) {
    return Y(K, t, !0)
}

function Xe(t) {
    return Ln(t)
}

function Ln(t, n = 0) {
    return Y(K | yt | n, t, !0)
}

function Je(t, n = !0) {
    return Y(K | T, t, !0, n)
}

function zt(t) {
    var n = t.teardown;
    if (n !== null) {
        const e = gt,
            r = _;
        Rt(!0), rt(null);
        try {
            n.call(null)
        } finally {
            Rt(e), rt(r)
        }
    }
}

function Zt(t) {
    var n = t.deriveds;
    if (n !== null) {
        t.deriveds = null;
        for (var e = 0; e < n.length; e += 1) mt(n[e])
    }
}

function Wt(t, n = !1) {
    var e = t.first;
    for (t.first = t.last = null; e !== null;) {
        var r = e.next;
        D(e, n), e = r
    }
}

function Mn(t) {
    for (var n = t.first; n !== null;) {
        var e = n.next;
        n.f & T || D(n), n = e
    }
}

function D(t, n = !0) {
    var e = !1;
    if ((n || t.f & bn) && t.nodes_start !== null) {
        for (var r = t.nodes_start, s = t.nodes_end; r !== null;) {
            var l = r === s ? null : O(r);
            r.remove(), r = l
        }
        e = !0
    }
    Wt(t, n && !e), Zt(t), G(t, 0), w(t, M);
    var a = t.transitions;
    if (a !== null)
        for (const f of a) f.stop();
    zt(t);
    var o = t.parent;
    o !== null && o.first !== null && Xt(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null
}

function Xt(t) {
    var n = t.parent,
        e = t.prev,
        r = t.next;
    e !== null && (e.next = r), r !== null && (r.prev = e), n !== null && (n.first === t && (n.first = r), n.last === t && (n.last = e))
}

function Yn(t, n) {
    var e = [];
    Jt(t, e, !0), Hn(e, () => {
        D(t), n && n()
    })
}

function Hn(t, n) {
    var e = t.length;
    if (e > 0) {
        var r = () => --e || n();
        for (var s of t) s.out(r)
    } else n()
}

function Jt(t, n, e) {
    if (!(t.f & L)) {
        if (t.f ^= L, t.transitions !== null)
            for (const a of t.transitions)(a.is_global || e) && n.push(a);
        for (var r = t.first; r !== null;) {
            var s = r.next,
                l = (r.f & Ot) !== 0 || (r.f & T) !== 0;
            Jt(r, n, l ? e : !1), r = s
        }
    }
}

function Qe(t) {
    Qt(t, !0)
}

function Qt(t, n) {
    if (t.f & L) {
        t.f ^= L, t.f & h || (t.f ^= h), U(t) && (w(t, A), it(t));
        for (var e = t.first; e !== null;) {
            var r = e.next,
                s = (e.f & Ot) !== 0 || (e.f & T) !== 0;
            Qt(e, s ? n : !1), e = r
        }
        if (t.transitions !== null)
            for (const l of t.transitions)(l.is_global || n) && l.in()
    }
}
const Un = typeof requestIdleCallback > "u" ? t => setTimeout(t, 1) : requestIdleCallback;
let nt = !1,
    et = !1,
    vt = [],
    pt = [];

function tn() {
    nt = !1;
    const t = vt.slice();
    vt = [], dt(t)
}

function nn() {
    et = !1;
    const t = pt.slice();
    pt = [], dt(t)
}

function tr(t) {
    nt || (nt = !0, queueMicrotask(tn)), vt.push(t)
}

function nr(t) {
    et || (et = !0, Un(nn)), pt.push(t)
}

function Bn() {
    nt && tn(), et && nn()
}

function er() {
    throw new Error("https://svelte.dev/e/invalid_default_snippet")
}

function H(t) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}
const en = 0,
    jn = 1;
let X = !1,
    J = en,
    V = !1,
    $ = null,
    P = !1,
    gt = !1;

function Dt(t) {
    P = t
}

function Rt(t) {
    gt = t
}
let x = [],
    F = 0;
let _ = null;

function rt(t) {
    _ = t
}
let p = null;

function st(t) {
    p = t
}
let b = null;

function Vn(t) {
    b = t
}
let d = null,
    y = 0,
    g = null;

function $n(t) {
    g = t
}
let rn = 1,
    lt = 0,
    k = !1,
    u = null;

function rr(t) {
    u = t
}

function sn() {
    return ++rn
}

function at() {
    return !Z || u !== null && u.l === null
}

function U(t) {
    var i;
    var n = t.f;
    if (n & A) return !0;
    if (n & S) {
        var e = t.deps,
            r = (n & R) !== 0;
        if (e !== null) {
            var s, l, a = (n & tt) !== 0,
                o = r && p !== null && !k,
                f = e.length;
            if (a || o) {
                for (s = 0; s < f; s++) l = e[s], (a || !((i = l == null ? void 0 : l.reactions) != null && i.includes(t))) && (l.reactions ?? (l.reactions = [])).push(t);
                a && (t.f ^= tt)
            }
            for (s = 0; s < f; s++)
                if (l = e[s], U(l) && $t(l), l.wv > t.wv) return !0
        }(!r || p !== null && !k) && w(t, h)
    }
    return !1
}

function Gn(t, n) {
    for (var e = n; e !== null;) {
        if (e.f & Q) try {
            e.fn(t);
            return
        } catch {
            e.f ^= Q
        }
        e = e.parent
    }
    throw X = !1, t
}

function Kn(t) {
    return (t.f & M) === 0 && (t.parent === null || (t.parent.f & Q) === 0)
}

function ut(t, n, e, r) {
    if (X) {
        if (e === null && (X = !1), Kn(n)) throw t;
        return
    }
    e !== null && (X = !0);
    {
        Gn(t, n);
        return
    }
}

function ln(t, n, e = 0) {
    var r = t.reactions;
    if (r !== null)
        for (var s = 0; s < r.length; s++) {
            var l = r[s];
            l.f & E ? ln(l, n, e + 1) : n === l && (e === 0 ? w(l, A) : l.f & h && w(l, S), it(l))
        }
}

function an(t) {
    var B;
    var n = d,
        e = y,
        r = g,
        s = _,
        l = k,
        a = b,
        o = u,
        f = t.f;
    d = null, y = 0, g = null, _ = f & (T | z) ? null : t, k = !P && (f & R) !== 0, b = null, u = t.ctx, lt++;
    try {
        var i = (0, t.fn)(),
            v = t.deps;
        if (d !== null) {
            var c;
            if (G(t, y), v !== null && y > 0)
                for (v.length = y + d.length, c = 0; c < d.length; c++) v[y + c] = d[c];
            else t.deps = v = d;
            if (!k)
                for (c = y; c < v.length; c++)((B = v[c]).reactions ?? (B.reactions = [])).push(t)
        } else v !== null && y < v.length && (G(t, y), v.length = y);
        if (at() && g !== null && !(t.f & (E | S | A)))
            for (c = 0; c < g.length; c++) ln(g[c], t);
        return s !== null && lt++, i
    } finally {
        d = n, y = e, g = r, _ = s, k = l, b = a, u = o
    }
}

function zn(t, n) {
    let e = n.reactions;
    if (e !== null) {
        var r = yn.call(e, t);
        if (r !== -1) {
            var s = e.length - 1;
            s === 0 ? e = n.reactions = null : (e[r] = e[s], e.pop())
        }
    }
    e === null && n.f & E && (d === null || !d.includes(n)) && (w(n, S), n.f & (R | tt) || (n.f ^= tt), G(n, 0))
}

function G(t, n) {
    var e = t.deps;
    if (e !== null)
        for (var r = n; r < e.length; r++) zn(t, e[r])
}

function ot(t) {
    var n = t.f;
    if (!(n & M)) {
        w(t, h);
        var e = p,
            r = u;
        p = t;
        try {
            n & yt ? Mn(t) : Wt(t), Zt(t), zt(t);
            var s = an(t);
            t.teardown = typeof s == "function" ? s : null, t.wv = rn;
            var l = t.deps,
                a
        } catch (o) {
            ut(o, t, e, r || t.ctx)
        } finally {
            p = e
        }
    }
}

function un() {
    if (F > 1e3) {
        F = 0;
        try {
            xn()
        } catch (t) {
            if ($ !== null) ut(t, $, null);
            else throw t
        }
    }
    F++
}

function on(t) {
    var n = t.length;
    if (n !== 0) {
        un();
        var e = P;
        P = !0;
        try {
            for (var r = 0; r < n; r++) {
                var s = t[r];
                s.f & h || (s.f ^= h);
                var l = [];
                fn(s, l), Zn(l)
            }
        } finally {
            P = e
        }
    }
}

function Zn(t) {
    var n = t.length;
    if (n !== 0)
        for (var e = 0; e < n; e++) {
            var r = t[e];
            if (!(r.f & (M | L))) try {
                U(r) && (ot(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Xt(r) : r.fn = null))
            } catch (s) {
                ut(s, r, null, r.ctx)
            }
        }
}

function Wn() {
    if (V = !1, F > 1001) return;
    const t = x;
    x = [], on(t), V || (F = 0, $ = null)
}

function it(t) {
    J === en && (V || (V = !0, queueMicrotask(Wn))), $ = t;
    for (var n = t; n.parent !== null;) {
        n = n.parent;
        var e = n.f;
        if (e & (z | T)) {
            if (!(e & h)) return;
            n.f ^= h
        }
    }
    x.push(n)
}

function fn(t, n) {
    var e = t.first,
        r = [];
    t: for (; e !== null;) {
        var s = e.f,
            l = (s & T) !== 0,
            a = l && (s & h) !== 0,
            o = e.next;
        if (!a && !(s & L))
            if (s & K) {
                if (l) e.f ^= h;
                else try {
                    U(e) && ot(e)
                } catch (c) {
                    ut(c, e, null, e.ctx)
                }
                var f = e.first;
                if (f !== null) {
                    e = f;
                    continue
                }
            } else s & St && r.push(e);
        if (o === null) {
            let c = e.parent;
            for (; c !== null;) {
                if (t === c) break t;
                var i = c.next;
                if (i !== null) {
                    e = i;
                    continue t
                }
                c = c.parent
            }
        }
        e = o
    }
    for (var v = 0; v < r.length; v++) f = r[v], n.push(f), fn(f, n)
}

function cn(t) {
    var n = J,
        e = x;
    try {
        un();
        const s = [];
        J = jn, x = s, V = !1, on(e);
        var r = t == null ? void 0 : t();
        return Bn(), (x.length > 0 || s.length > 0) && cn(), F = 0, $ = null, r
    } finally {
        J = n, x = e
    }
}
async function sr() {
    await Promise.resolve(), cn()
}

function Tt(t) {
    var v;
    var n = t.f,
        e = (n & E) !== 0;
    if (e && n & M) {
        var r = Vt(t);
        return mt(t), r
    }
    if (_ !== null) {
        b !== null && b.includes(t) && kn();
        var s = _.deps;
        t.rv < lt && (t.rv = lt, d === null && s !== null && s[y] === t ? y++ : d === null ? d = [t] : d.push(t))
    } else if (e && t.deps === null)
        for (var l = t, a = l.parent, o = l; a !== null;)
            if (a.f & E) {
                var f = a;
                o = f, a = f.parent
            } else {
                var i = a;
                (v = i.deriveds) != null && v.includes(o) || (i.deriveds ?? (i.deriveds = [])).push(o);
                break
            } return e && (l = t, U(l) && $t(l)), t.v
}

function W(t) {
    const n = _;
    try {
        return _ = null, t()
    } finally {
        _ = n
    }
}
const Xn = -7169;

function w(t, n) {
    t.f = t.f & Xn | n
}

function lr(t) {
    return _n().get(t)
}

function ar(t, n) {
    return _n().set(t, n), n
}

function _n(t) {
    return u === null && H(), u.c ?? (u.c = new Map(Jn(u) || void 0))
}

function Jn(t) {
    let n = t.p;
    for (; n !== null;) {
        const e = n.c;
        if (e !== null) return e;
        n = n.p
    }
    return null
}

function ur(t, n = 1) {
    var e = Tt(t),
        r = n === 1 ? e++ : e--;
    return wt(t, e), r
}

function or(t, n = !1, e) {
    u = {
        p: u,
        c: null,
        e: null,
        m: !1,
        s: t,
        x: null,
        l: null
    }, Z && !n && (u.l = {
        s: null,
        u: null,
        r1: [],
        r2: Et(!1)
    })
}

function ir(t) {
    const n = u;
    if (n !== null) {
        const a = n.e;
        if (a !== null) {
            var e = p,
                r = _;
            n.e = null;
            try {
                for (var s = 0; s < a.length; s++) {
                    var l = a[s];
                    st(l.effect), rt(l.reaction), Kt(l.fn)
                }
            } finally {
                st(e), rt(r)
            }
        }
        u = n.p, n.m = !0
    }
    return {}
}

function fr(t) {
    if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
        if (kt in t) ht(t);
        else if (!Array.isArray(t))
            for (let n in t) {
                const e = t[n];
                typeof e == "object" && e && kt in e && ht(e)
            }
    }
}

function ht(t, n = new Set) {
    if (typeof t == "object" && t !== null && !(t instanceof EventTarget) && !n.has(t)) {
        n.add(t), t instanceof Date && t.getTime();
        for (let r in t) try {
            ht(t[r], n)
        } catch {}
        const e = wn(t);
        if (e !== Object.prototype && e !== Array.prototype && e !== Map.prototype && e !== Set.prototype && e !== Date.prototype) {
            const r = En(e);
            for (let s in r) {
                const l = r[s].get;
                if (l) try {
                    l.call(t)
                } catch {}
            }
        }
    }
}

function vn(t, n, e) {
    if (t == null) return n(void 0), e && e(void 0), q;
    const r = W(() => t.subscribe(n, e));
    return r.unsubscribe ? () => r.unsubscribe() : r
}
const N = [];

function Qn(t, n) {
    return {
        subscribe: te(t, n).subscribe
    }
}

function te(t, n = q) {
    let e = null;
    const r = new Set;

    function s(o) {
        if (qt(t, o) && (t = o, e)) {
            const f = !N.length;
            for (const i of r) i[1](), N.push(i, t);
            if (f) {
                for (let i = 0; i < N.length; i += 2) N[i][0](N[i + 1]);
                N.length = 0
            }
        }
    }

    function l(o) {
        s(o(t))
    }

    function a(o, f = q) {
        const i = [o, f];
        return r.add(i), r.size === 1 && (e = n(s, l) || q), o(t), () => {
            r.delete(i), r.size === 0 && e && (e(), e = null)
        }
    }
    return {
        set: s,
        update: l,
        subscribe: a
    }
}

function cr(t, n, e) {
    const r = !Array.isArray(t),
        s = r ? [t] : t;
    if (!s.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
    const l = n.length < 2;
    return Qn(e, (a, o) => {
        let f = !1;
        const i = [];
        let v = 0,
            c = q;
        const B = () => {
                if (v) return;
                c();
                const C = n(r ? i[0] : i, a, o);
                l ? a(C) : c = typeof C == "function" ? C : q
            },
            pn = s.map((C, ft) => vn(C, hn => {
                i[ft] = hn, v &= ~(1 << ft), f && B()
            }, () => {
                v |= 1 << ft
            }));
        return f = !0, B(),
            function() {
                dt(pn), c(), f = !1
            }
    })
}

function _r(t) {
    let n;
    return vn(t, e => n = e)(), n
}

function ne(t) {
    u === null && H(), Z && u.l !== null ? At(u).m.push(t) : Fn(() => {
        const n = W(t);
        if (typeof n == "function") return n
    })
}

function vr(t) {
    u === null && H(), ne(() => () => W(t))
}

function ee(t, n, {
    bubbles: e = !1,
    cancelable: r = !1
} = {}) {
    return new CustomEvent(t, {
        detail: n,
        bubbles: e,
        cancelable: r
    })
}

function pr() {
    const t = u;
    return t === null && H(), (n, e, r) => {
        var l;
        const s = (l = t.s.$$events) == null ? void 0 : l[n];
        if (s) {
            const a = dn(s) ? s.slice() : [s],
                o = ee(n, e, r);
            for (const f of a) f.call(t.x, o);
            return !o.defaultPrevented
        }
        return !0
    }
}

function hr(t) {
    u === null && H(), u.l === null && Ft(), At(u).b.push(t)
}

function dr(t) {
    u === null && H(), u.l === null && Ft(), At(u).a.push(t)
}

function At(t) {
    var n = t.l;
    return n.u ?? (n.u = {
        a: [],
        b: [],
        m: []
    })
}
export {
    Pt as $, le as A, ae as B, Et as C, he as D, Ot as E, wt as F, xt as G, p as H, de as I, wn as J, dn as K, Rn as L, Ye as M, j as N, Pe as O, Qe as P, On as Q, q as R, kt as S, vn as T, Oe as U, _r as V, Ge as W, se as X, pe as Y, fe as Z, xe as _, Fn as a, qe as a$, T as a0, z as a1, st as a2, Te as a3, Z as a4, Ae as a5, ke as a6, ce as a7, $e as a8, Ie as a9, nr as aA, En as aB, te as aC, at as aD, oe as aE, Cn as aF, rr as aG, L as aH, Ee as aI, we as aJ, Jt as aK, Hn as aL, me as aM, be as aN, ge as aO, qt as aP, yt as aQ, mn as aR, ue as aS, De as aT, lr as aU, ar as aV, Qn as aW, cr as aX, Ne as aY, dr as aZ, Ze as a_, ur as aa, cn as ab, ne as ac, sr as ad, Ce as ae, vr as af, It as ag, rt as ah, _ as ai, ct as aj, bn as ak, Dn as al, O as am, _t as an, Re as ao, Se as ap, He as aq, Lt as ar, Sn as as, Ht as at, ve as au, Ve as av, re as aw, ze as ax, D as ay, _e as az, W as b, We as b0, er as b1, hr as b2, Me as b3, pr as b4, u as c, dt as d, fr as e, Nn as f, Tt as g, ye as h, Be as i, ir as j, Ue as k, Le as l, I as m, Fe as n, Ln as o, or as p, Je as q, ie as r, je as s, Xe as t, Ke as u, m as v, Yn as w, Kt as x, bt as y, tr as z
};