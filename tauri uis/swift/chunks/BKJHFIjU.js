var Fn = Array.isArray,
	$t = Array.prototype.indexOf,
	Ln = Array.from,
	Mn = Object.defineProperty,
	ct = Object.getOwnPropertyDescriptor,
	zt = Object.getOwnPropertyDescriptors,
	qn = Object.prototype,
	Yn = Array.prototype,
	Jt = Object.getPrototypeOf;

function Hn(t) {
	return typeof t == "function"
}
const jn = () => {};

function Bn(t) {
	return t()
}

function wt(t) {
	for(var n = 0; n < t.length; n++) t[n]()
}
const T = 2,
	yt = 4,
	Q = 8,
	ot = 16,
	x = 32,
	b = 64,
	G = 128,
	w = 256,
	K = 512,
	d = 1024,
	R = 2048,
	P = 4096,
	C = 8192,
	tt = 16384,
	Wt = 32768,
	Tt = 65536,
	Un = 1 << 17,
	Xt = 1 << 19,
	gt = 1 << 20,
	vt = Symbol("$state"),
	Vn = Symbol("legacy props"),
	Gn = Symbol("");

function At(t) {
	return t === this.v
}

function Qt(t, n) {
	return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function"
}

function mt(t) {
	return !Qt(t, this.v)
}

function tn(t) {
	throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function nn() {
	throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function rn(t) {
	throw new Error("https://svelte.dev/e/effect_orphan")
}

function en() {
	throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Kn() {
	throw new Error("https://svelte.dev/e/hydration_failed")
}

function Zn(t) {
	throw new Error("https://svelte.dev/e/props_invalid_value")
}

function $n() {
	throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function zn() {
	throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function an() {
	throw new Error("https://svelte.dev/e/state_unsafe_local_read")
}

function ln() {
	throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
let nt = !1;

function Jn() {
	nt = !0
}
const Wn = 1,
	Xn = 2,
	Qn = 4,
	tr = 8,
	nr = 16,
	rr = 1,
	er = 2,
	ar = 4,
	lr = 8,
	sr = 16,
	ur = 1,
	or = 2,
	fr = 4,
	ir = 1,
	_r = 2,
	sn = "[",
	un = "[!",
	on = "]",
	It = {},
	cr = Symbol(),
	vr = "http://www.w3.org/1999/xhtml";

function xt(t) {
	console.warn("https://svelte.dev/e/hydration_mismatch")
}
let i = null;

function pt(t) {
	i = t
}

function pr(t, n = !1, r) {
	var e = i = {
		p: i,
		c: null,
		d: !1,
		e: null,
		m: !1,
		s: t,
		x: null,
		l: null
	};
	nt && !n && (i.l = {
		s: null,
		u: null,
		r1: [],
		r2: ft(!1)
	}), En(() => {
		e.d = !0
	})
}

function hr(t) {
	const n = i;
	if(n !== null) {
		const s = n.e;
		if(s !== null) {
			var r = o,
				e = u;
			n.e = null;
			try {
				for(var l = 0; l < s.length; l++) {
					var a = s[l];
					J(a.effect), z(a.reaction), Pt(a.fn)
				}
			} finally {
				J(r), z(e)
			}
		}
		i = n.p, n.m = !0
	}
	return {}
}

function rt() {
	return !nt || i !== null && i.l === null
}
const M = new Map;

function ft(t, n) {
	var r = {
		f: 0,
		v: t,
		reactions: null,
		equals: At,
		rv: 0,
		wv: 0
	};
	return r
}

function dr(t) {
	return Ot(ft(t))
}

function fn(t, n = !1) {
	var e;
	const r = ft(t);
	return n || (r.equals = mt), nt && i !== null && i.l !== null && ((e = i.l).s ? ? (e.s = [])).push(r), r
}

function Er(t, n = !1) {
	return Ot(fn(t, n))
}

function Ot(t) {
	return u !== null && !y && (u.f & T) !== 0 && (m === null ? In([t]) : m.push(t)), t
}

function wr(t, n) {
	return _n(t, bn(() => Zt(t))), n
}

function _n(t, n) {
	return u !== null && !y && rt() && (u.f & (T | ot)) !== 0 && (m === null || !m.includes(t)) && ln(), cn(t, n)
}

function cn(t, n) {
	if(!t.equals(n)) {
		var r = t.v;
		j ? M.set(t, n) : M.set(t, r), t.v = n, t.wv = Ut(), Rt(t, R), rt() && o !== null && (o.f & d) !== 0 && (o.f & (x | b)) === 0 && (E === null ? xn([t]) : E.push(t))
	}
	return n
}

function Rt(t, n) {
	var r = t.reactions;
	if(r !== null)
		for(var e = rt(), l = r.length, a = 0; a < l; a++) {
			var s = r[a],
				f = s.f;
			(f & R) === 0 && (!e && s === o || (I(s, n), (f & (d | w)) !== 0 && ((f & T) !== 0 ? Rt(s, P) : at(s))))
		}
}
let S = !1;

function yr(t) {
	S = t
}
let g;

function q(t) {
	if(t === null) throw xt(), It;
	return g = t
}

function Tr() {
	return q(D(g))
}

function gr(t) {
	if(S) {
		if(D(g) !== null) throw xt(), It;
		g = t
	}
}

function Ar(t = 1) {
	if(S) {
		for(var n = t, r = g; n--;) r = D(r);
		g = r
	}
}

function mr() {
	for(var t = 0, n = g;;) {
		if(n.nodeType === 8) {
			var r = n.data;
			if(r === on) {
				if(t === 0) return n;
				t -= 1
			} else(r === sn || r === un) && (t += 1)
		}
		var e = D(n);
		n.remove(), n = e
	}
}
var ht, vn, Nt, St;

function Ir() {
	if(ht === void 0) {
		ht = window, vn = /Firefox/.test(navigator.userAgent);
		var t = Element.prototype,
			n = Node.prototype;
		Nt = ct(n, "firstChild").get, St = ct(n, "nextSibling").get, t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0, Text.prototype.__t = void 0
	}
}

function lt(t = "") {
	return document.createTextNode(t)
}

function st(t) {
	return Nt.call(t)
}

function D(t) {
	return St.call(t)
}

function xr(t, n) {
	if(!S) return st(t);
	var r = st(g);
	if(r === null) r = g.appendChild(lt());
	else if(n && r.nodeType !== 3) {
		var e = lt();
		return r == null || r.before(e), q(e), e
	}
	return q(r), r
}

function Or(t, n) {
	if(!S) {
		var r = st(t);
		return r instanceof Comment && r.data === "" ? D(r) : r
	}
	return g
}

function Rr(t, n = 1, r = !1) {
	let e = S ? g : t;
	for(var l; n--;) l = e, e = D(e);
	if(!S) return e;
	var a = e == null ? void 0 : e.nodeType;
	if(r && a !== 3) {
		var s = lt();
		return e === null ? l == null || l.after(s) : e.before(s), q(s), s
	}
	return q(e), e
}

function Nr(t) {
	t.textContent = ""
}

function kt(t) {
	var n = T | R,
		r = u !== null && (u.f & T) !== 0 ? u : null;
	return o === null || r !== null && (r.f & w) !== 0 ? n |= w : o.f |= gt, {
		ctx: i,
		deps: null,
		effects: null,
		equals: At,
		f: n,
		fn: t,
		reactions: null,
		rv: 0,
		v: null,
		wv: 0,
		parent: r ? ? o
	}
}

function Sr(t) {
	const n = kt(t);
	return n.equals = mt, n
}

function Dt(t) {
	var n = t.effects;
	if(n !== null) {
		t.effects = null;
		for(var r = 0; r < n.length; r += 1) k(n[r])
	}
}

function pn(t) {
	for(var n = t.parent; n !== null;) {
		if((n.f & T) === 0) return n;
		n = n.parent
	}
	return null
}

function hn(t) {
	var n, r = o;
	J(pn(t));
	try {
		Dt(t), n = Gt(t)
	} finally {
		J(r)
	}
	return n
}

function Ct(t) {
	var n = hn(t),
		r = (O || (t.f & w) !== 0) && t.deps !== null ? P : d;
	I(t, r), t.equals(n) || (t.v = n, t.wv = Ut())
}

function bt(t) {
	o === null && u === null && rn(), u !== null && (u.f & w) !== 0 && o === null && nn(), j && tn()
}

function dn(t, n) {
	var r = n.last;
	r === null ? n.last = n.first = t : (r.next = t, t.prev = r, n.last = t)
}

function F(t, n, r, e = !0) {
	var l = o,
		a = {
			ctx: i,
			deps: null,
			nodes_start: null,
			nodes_end: null,
			f: t | R,
			first: null,
			fn: n,
			last: null,
			next: null,
			parent: l,
			prev: null,
			teardown: null,
			transitions: null,
			wv: 0
		};
	if(r) try {
		it(a), a.f |= Wt
	} catch(_) {
		throw k(a), _
	} else n !== null && at(a);
	var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (gt | G)) === 0;
	if(!s && e && (l !== null && dn(a, l), u !== null && (u.f & T) !== 0)) {
		var f = u;
		(f.effects ? ? (f.effects = [])).push(a)
	}
	return a
}

function En(t) {
	const n = F(Q, null, !1);
	return I(n, d), n.teardown = t, n
}

function kr(t) {
	bt();
	var n = o !== null && (o.f & x) !== 0 && i !== null && !i.m;
	if(n) {
		var r = i;
		(r.e ? ? (r.e = [])).push({
			fn: t,
			effect: o,
			reaction: u
		})
	} else {
		var e = Pt(t);
		return e
	}
}

function Dr(t) {
	return bt(), wn(t)
}

function Cr(t) {
	const n = F(b, t, !0);
	return(r = {}) => new Promise(e => {
		r.outro ? gn(n, () => {
			k(n), e(void 0)
		}) : (k(n), e(void 0))
	})
}

function Pt(t) {
	return F(yt, t, !1)
}

function wn(t) {
	return F(Q, t, !0)
}

function br(t, n = [], r = kt) {
	const e = n.map(r);
	return yn(() => t(...e.map(Zt)))
}

function yn(t, n = 0) {
	return F(Q | ot | n, t, !0)
}

function Pr(t, n = !0) {
	return F(Q | x, t, !0, n)
}

function Ft(t) {
	var n = t.teardown;
	if(n !== null) {
		const r = j,
			e = u;
		Et(!0), z(null);
		try {
			n.call(null)
		} finally {
			Et(r), z(e)
		}
	}
}

function Lt(t, n = !1) {
	var r = t.first;
	for(t.first = t.last = null; r !== null;) {
		var e = r.next;
		(r.f & b) !== 0 ? r.parent = null : k(r, n), r = e
	}
}

function Tn(t) {
	for(var n = t.first; n !== null;) {
		var r = n.next;
		(n.f & x) === 0 && k(n), n = r
	}
}

function k(t, n = !0) {
	var r = !1;
	if((n || (t.f & Xt) !== 0) && t.nodes_start !== null) {
		for(var e = t.nodes_start, l = t.nodes_end; e !== null;) {
			var a = e === l ? null : D(e);
			e.remove(), e = a
		}
		r = !0
	}
	Lt(t, n && !r), X(t, 0), I(t, tt);
	var s = t.transitions;
	if(s !== null)
		for(const _ of s) _.stop();
	Ft(t);
	var f = t.parent;
	f !== null && f.first !== null && Mt(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null
}

function Mt(t) {
	var n = t.parent,
		r = t.prev,
		e = t.next;
	r !== null && (r.next = e), e !== null && (e.prev = r), n !== null && (n.first === t && (n.first = e), n.last === t && (n.last = r))
}

function gn(t, n) {
	var r = [];
	qt(t, r, !0), An(r, () => {
		k(t), n && n()
	})
}

function An(t, n) {
	var r = t.length;
	if(r > 0) {
		var e = () => --r || n();
		for(var l of t) l.out(e)
	} else n()
}

function qt(t, n, r) {
	if((t.f & C) === 0) {
		if(t.f ^= C, t.transitions !== null)
			for(const s of t.transitions)(s.is_global || r) && n.push(s);
		for(var e = t.first; e !== null;) {
			var l = e.next,
				a = (e.f & Tt) !== 0 || (e.f & x) !== 0;
			qt(e, n, a ? r : !1), e = l
		}
	}
}

function Fr(t) {
	Yt(t, !0)
}

function Yt(t, n) {
	if((t.f & C) !== 0) {
		t.f ^= C, (t.f & d) === 0 && (t.f ^= d), B(t) && (I(t, R), at(t));
		for(var r = t.first; r !== null;) {
			var e = r.next,
				l = (r.f & Tt) !== 0 || (r.f & x) !== 0;
			Yt(r, l ? n : !1), r = e
		}
		if(t.transitions !== null)
			for(const a of t.transitions)(a.is_global || n) && a.in()
	}
}
const mn = typeof requestIdleCallback > "u" ? t => setTimeout(t, 1) : requestIdleCallback;
let Y = [],
	H = [];

function Ht() {
	var t = Y;
	Y = [], wt(t)
}

function jt() {
	var t = H;
	H = [], wt(t)
}

function Lr(t) {
	Y.length === 0 && queueMicrotask(Ht), Y.push(t)
}

function Mr(t) {
	H.length === 0 && mn(jt), H.push(t)
}

function dt() {
	Y.length > 0 && Ht(), H.length > 0 && jt()
}
let V = !1,
	Z = !1,
	$ = null,
	N = !1,
	j = !1;

function Et(t) {
	j = t
}
let L = [];
let u = null,
	y = !1;

function z(t) {
	u = t
}
let o = null;

function J(t) {
	o = t
}
let m = null;

function In(t) {
	m = t
}
let c = null,
	h = 0,
	E = null;

function xn(t) {
	E = t
}
let Bt = 1,
	W = 0,
	O = !1;

function Ut() {
	return ++Bt
}

function B(t) {
	var v;
	var n = t.f;
	if((n & R) !== 0) return !0;
	if((n & P) !== 0) {
		var r = t.deps,
			e = (n & w) !== 0;
		if(r !== null) {
			var l, a, s = (n & K) !== 0,
				f = e && o !== null && !O,
				_ = r.length;
			if(s || f) {
				var A = t,
					U = A.parent;
				for(l = 0; l < _; l++) a = r[l], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(A))) && (a.reactions ? ? (a.reactions = [])).push(A);
				s && (A.f ^= K), f && U !== null && (U.f & w) === 0 && (A.f ^= w)
			}
			for(l = 0; l < _; l++)
				if(a = r[l], B(a) && Ct(a), a.wv > t.wv) return !0
		}(!e || o !== null && !O) && I(t, d)
	}
	return !1
}

function On(t, n) {
	for(var r = n; r !== null;) {
		if((r.f & G) !== 0) try {
			r.fn(t);
			return
		} catch {
			r.f ^= G
		}
		r = r.parent
	}
	throw V = !1, t
}

function Rn(t) {
	return(t.f & tt) === 0 && (t.parent === null || (t.parent.f & G) === 0)
}

function et(t, n, r, e) {
	if(V) {
		if(r === null && (V = !1), Rn(n)) throw t;
		return
	}
	r !== null && (V = !0); {
		On(t, n);
		return
	}
}

function Vt(t, n, r = !0) {
	var e = t.reactions;
	if(e !== null)
		for(var l = 0; l < e.length; l++) {
			var a = e[l];
			(a.f & T) !== 0 ? Vt(a, n, !1) : n === a && (r ? I(a, R) : (a.f & d) !== 0 && I(a, P), at(a))
		}
}

function Gt(t) {
	var _t;
	var n = c,
		r = h,
		e = E,
		l = u,
		a = O,
		s = m,
		f = i,
		_ = y,
		A = t.f;
	c = null, h = 0, E = null, O = (A & w) !== 0 && (y || !N || u === null), u = (A & (x | b)) === 0 ? t : null, m = null, pt(t.ctx), y = !1, W++;
	try {
		var U = (0, t.fn)(),
			v = t.deps;
		if(c !== null) {
			var p;
			if(X(t, h), v !== null && h > 0)
				for(v.length = h + c.length, p = 0; p < c.length; p++) v[h + p] = c[p];
			else t.deps = v = c;
			if(!O)
				for(p = h; p < v.length; p++)((_t = v[p]).reactions ? ? (_t.reactions = [])).push(t)
		} else v !== null && h < v.length && (X(t, h), v.length = h);
		if(rt() && E !== null && !y && v !== null && (t.f & (T | P | R)) === 0)
			for(p = 0; p < E.length; p++) Vt(E[p], t);
		return l !== null && (W++, E !== null && (e === null ? e = E : e.push(...E))), U
	} finally {
		c = n, h = r, E = e, u = l, O = a, m = s, pt(f), y = _
	}
}

function Nn(t, n) {
	let r = n.reactions;
	if(r !== null) {
		var e = $t.call(r, t);
		if(e !== -1) {
			var l = r.length - 1;
			l === 0 ? r = n.reactions = null : (r[e] = r[l], r.pop())
		}
	}
	r === null && (n.f & T) !== 0 && (c === null || !c.includes(n)) && (I(n, P), (n.f & (w | K)) === 0 && (n.f ^= K), Dt(n), X(n, 0))
}

function X(t, n) {
	var r = t.deps;
	if(r !== null)
		for(var e = n; e < r.length; e++) Nn(t, r[e])
}

function it(t) {
	var n = t.f;
	if((n & tt) === 0) {
		I(t, d);
		var r = o,
			e = i,
			l = N;
		o = t, N = !0;
		try {
			(n & ot) !== 0 ? Tn(t) : Lt(t), Ft(t);
			var a = Gt(t);
			t.teardown = typeof a == "function" ? a : null, t.wv = Bt;
			var s = t.deps,
				f
		} catch(_) {
			et(_, t, r, e || t.ctx)
		} finally {
			N = l, o = r
		}
	}
}

function Sn() {
	try {
		en()
	} catch(t) {
		if($ !== null) et(t, $, null);
		else throw t
	}
}

function Kt() {
	var t = N;
	try {
		var n = 0;
		for(N = !0; L.length > 0;) {
			n++ > 1e3 && Sn();
			var r = L,
				e = r.length;
			L = [];
			for(var l = 0; l < e; l++) {
				var a = Dn(r[l]);
				kn(a)
			}
		}
	} finally {
		Z = !1, N = t, $ = null, M.clear()
	}
}

function kn(t) {
	var n = t.length;
	if(n !== 0)
		for(var r = 0; r < n; r++) {
			var e = t[r];
			if((e.f & (tt | C)) === 0) try {
				B(e) && (it(e), e.deps === null && e.first === null && e.nodes_start === null && (e.teardown === null ? Mt(e) : e.fn = null))
			} catch(l) {
				et(l, e, null, e.ctx)
			}
		}
}

function at(t) {
	Z || (Z = !0, queueMicrotask(Kt));
	for(var n = $ = t; n.parent !== null;) {
		n = n.parent;
		var r = n.f;
		if((r & (b | x)) !== 0) {
			if((r & d) === 0) return;
			n.f ^= d
		}
	}
	L.push(n)
}

function Dn(t) {
	for(var n = [], r = t; r !== null;) {
		var e = r.f,
			l = (e & (x | b)) !== 0,
			a = l && (e & d) !== 0;
		if(!a && (e & C) === 0) {
			if((e & yt) !== 0) n.push(r);
			else if(l) r.f ^= d;
			else {
				var s = u;
				try {
					u = r, B(r) && it(r)
				} catch(A) {
					et(A, r, null, r.ctx)
				} finally {
					u = s
				}
			}
			var f = r.first;
			if(f !== null) {
				r = f;
				continue
			}
		}
		var _ = r.parent;
		for(r = r.next; r === null && _ !== null;) r = _.next, _ = _.parent
	}
	return n
}

function Cn(t) {
	var n;
	for(dt(); L.length > 0;) Z = !0, Kt(), dt();
	return n
}
async function qr() {
	await Promise.resolve(), Cn()
}

function Zt(t) {
	var n = t.f,
		r = (n & T) !== 0;
	if(u !== null && !y) {
		m !== null && m.includes(t) && an();
		var e = u.deps;
		t.rv < W && (t.rv = W, c === null && e !== null && e[h] === t ? h++ : c === null ? c = [t] : (!O || !c.includes(t)) && c.push(t))
	} else if(r && t.deps === null && t.effects === null) {
		var l = t,
			a = l.parent;
		a !== null && (a.f & w) === 0 && (l.f ^= w)
	}
	return r && (l = t, B(l) && Ct(l)), j && M.has(t) ? M.get(t) : t.v
}

function bn(t) {
	var n = y;
	try {
		return y = !0, t()
	} finally {
		y = n
	}
}
const Pn = -7169;

function I(t, n) {
	t.f = t.f & Pn | n
}

function Yr(t) {
	if(!(typeof t != "object" || !t || t instanceof EventTarget)) {
		if(vt in t) ut(t);
		else if(!Array.isArray(t))
			for(let n in t) {
				const r = t[n];
				typeof r == "object" && r && vt in r && ut(r)
			}
	}
}

function ut(t, n = new Set) {
	if(typeof t == "object" && t !== null && !(t instanceof EventTarget) && !n.has(t)) {
		n.add(t), t instanceof Date && t.getTime();
		for(let e in t) try {
			ut(t[e], n)
		} catch {}
		const r = Jt(t);
		if(r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
			const e = zt(r);
			for(let l in e) {
				const a = e[l].get;
				if(a) try {
					a.call(t)
				} catch {}
			}
		}
	}
}
export {
	C as $, lr as A, Vn as B, nt as C, er as D, rr as E, sr as F, jn as G, En as H, Mn as I, lt as J, yn as K, Un as L, Qn as M, q as N, S as O, ar as P, st as Q, Tr as R, vt as S, un as T, mr as U, yr as V, g as W, on as X, Fr as Y, Pr as Z, gn as _, hr as a, Ln as a0, o as a1, Wn as a2, cn as a3, Xn as a4, ft as a5, Fn as a6, tr as a7, qt as a8, Nr as a9, z as aA, J as aB, u as aC, ur as aD, or as aE, vn as aF, ir as aG, _r as aH, Ir as aI, Kn as aJ, Cr as aK, ht as aL, Gn as aM, vr as aN, zt as aO, Mr as aP, An as aa, k as ab, nr as ac, D as ad, dr as ae, Ar as af, xt as ag, It as ah, rt as ai, qn as aj, Yn as ak, zn as al, cr as am, $n as an, Jt as ao, Tt as ap, sn as aq, Qt as ar, Cn as as, qr as at, Er as au, wr as av, ot as aw, Wt as ax, fr as ay, Hn as az, wn as b, xr as c, i as d, Pt as e, Or as f, Dr as g, kr as h, wt as i, Bn as j, Zt as k, Yr as l, kt as m, Jn as n, ct as o, pr as p, Lr as q, gr as r, Rr as s, br as t, bn as u, Zn as v, Sr as w, mt as x, _n as y, fn as z
};