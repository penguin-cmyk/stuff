var dn = Array.isArray,
	yn = Array.prototype.indexOf,
	se = Array.from,
	ae = Object.defineProperty,
	Z = Object.getOwnPropertyDescriptor,
	wn = Object.getOwnPropertyDescriptors,
	En = Object.prototype,
	gn = Array.prototype,
	Lt = Object.getPrototypeOf,
	St = Object.isExtensible;

function le(t) {
	return typeof t == "function"
}
const U = () => {};

function ue(t) {
	return t()
}

function xt(t) {
	for(var e = 0; e < t.length; e++) t[e]()
}
const I = 2,
	qt = 4,
	vt = 8,
	It = 16,
	S = 32,
	K = 64,
	lt = 128,
	T = 256,
	ut = 512,
	w = 1024,
	D = 2048,
	F = 4096,
	V = 8192,
	pt = 16384,
	bn = 32768,
	Yt = 65536,
	fe = 1 << 17,
	Tn = 1 << 19,
	jt = 1 << 20,
	bt = 1 << 21,
	J = Symbol("$state"),
	ie = Symbol("legacy props"),
	oe = Symbol("");

function Ht(t) {
	return t === this.v
}

function Bt(t, e) {
	return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function"
}

function Ut(t) {
	return !Bt(t, this.v)
}

function mn(t) {
	throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function An() {
	throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function xn(t) {
	throw new Error("https://svelte.dev/e/effect_orphan")
}

function In() {
	throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function ce() {
	throw new Error("https://svelte.dev/e/hydration_failed")
}

function _e(t) {
	throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Rn() {
	throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function On() {
	throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function Nn() {
	throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
let et = !1;

function ve() {
	et = !0
}
const pe = 1,
	he = 2,
	de = 4,
	ye = 8,
	we = 16,
	Ee = 1,
	ge = 2,
	be = 4,
	Te = 8,
	me = 16,
	Ae = 1,
	xe = 2,
	Ie = 4,
	Re = 1,
	Oe = 2,
	Dn = "[",
	Sn = "[!",
	kn = "]",
	Vt = {},
	g = Symbol(),
	Ne = "http://www.w3.org/1999/xhtml";

function Gt(t) {
	throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}
let p = null;

function kt(t) {
	p = t
}

function De(t, e = !1, n) {
	var r = p = {
		p, c: null, d: !1, e: null, m: !1, s: t, x: null, l: null
	};
	et && !e && (p.l = {
		s: null,
		u: null,
		r1: [],
		r2: Ot(!1)
	}), Ln(() => {
		r.d = !0
	})
}

function Se(t) {
	const e = p;
	if(e !== null) {
		const i = e.e;
		if(i !== null) {
			var n = h,
				r = v;
			e.e = null;
			try {
				for(var s = 0; s < i.length; s++) {
					var a = i[s];
					ot(a.effect), G(a.reaction), tn(a.fn)
				}
			} finally {
				ot(n), G(r)
			}
		}
		p = e.p, e.m = !0
	}
	return {}
}

function ht() {
	return !et || p !== null && p.l === null
}

function B(t) {
	if(typeof t != "object" || t === null || J in t) return t;
	const e = Lt(t);
	if(e !== En && e !== gn) return t;
	var n = new Map,
		r = dn(t),
		s = P(0),
		a = v,
		i = f => {
			var l = v;
			G(a);
			var u = f();
			return G(l), u
		};
	return r && n.set("length", P(t.length)), new Proxy(t, {
		defineProperty(f, l, u) {
			(!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Rn();
			var c = n.get(l);
			return c === void 0 ? (c = i(() => P(u.value)), n.set(l, c)) : O(c, i(() => B(u.value))), !0
		}, deleteProperty(f, l) {
			var u = n.get(l);
			if(u === void 0) l in f && n.set(l, i(() => P(g)));
			else {
				if(r && typeof l == "string") {
					var c = n.get("length"),
						o = Number(l);
					Number.isInteger(o) && o < c.v && O(c, o)
				}
				O(u, g), Pt(s)
			}
			return !0
		}, get(f, l, u) {
			var E;
			if(l === J) return t;
			var c = n.get(l),
				o = l in f;
			if(c === void 0 && (!o || (E = Z(f, l)) != null && E.writable) && (c = i(() => P(B(o ? f[l] : g))), n.set(l, c)), c !== void 0) {
				var _ = M(c);
				return _ === g ? void 0 : _
			}
			return Reflect.get(f, l, u)
		}, getOwnPropertyDescriptor(f, l) {
			var u = Reflect.getOwnPropertyDescriptor(f, l);
			if(u && "value" in u) {
				var c = n.get(l);
				c && (u.value = M(c))
			} else if(u === void 0) {
				var o = n.get(l),
					_ = o == null ? void 0 : o.v;
				if(o !== void 0 && _ !== g) return {
					enumerable: !0,
					configurable: !0,
					value: _,
					writable: !0
				}
			}
			return u
		}, has(f, l) {
			var _;
			if(l === J) return !0;
			var u = n.get(l),
				c = u !== void 0 && u.v !== g || Reflect.has(f, l);
			if(u !== void 0 || h !== null && (!c || (_ = Z(f, l)) != null && _.writable)) {
				u === void 0 && (u = i(() => P(c ? B(f[l]) : g)), n.set(l, u));
				var o = M(u);
				if(o === g) return !1
			}
			return c
		}, set(f, l, u, c) {
			var Dt;
			var o = n.get(l),
				_ = l in f;
			if(r && l === "length")
				for(var E = u; E < o.v; E += 1) {
					var x = n.get(E + "");
					x !== void 0 ? O(x, g) : E in f && (x = i(() => P(g)), n.set(E + "", x))
				}
			o === void 0 ? (!_ || (Dt = Z(f, l)) != null && Dt.writable) && (o = i(() => P(void 0)), O(o, i(() => B(u))), n.set(l, o)) : (_ = o.v !== g, O(o, i(() => B(u))));
			var k = Reflect.getOwnPropertyDescriptor(f, l);
			if(k != null && k.set && k.set.call(c, u), !_) {
				if(r && typeof l == "string") {
					var st = n.get("length"),
						gt = Number(l);
					Number.isInteger(gt) && gt >= st.v && O(st, gt + 1)
				}
				Pt(s)
			}
			return !0
		}, ownKeys(f) {
			M(s);
			var l = Reflect.ownKeys(f).filter(o => {
				var _ = n.get(o);
				return _ === void 0 || _.v !== g
			});
			for(var [u, c] of n) c.v !== g && !(u in f) && l.push(u);
			return l
		}, setPrototypeOf() {
			On()
		}
	})
}

function Pt(t, e = 1) {
	O(t, t.v + e)
}

function Rt(t) {
	var e = I | D,
		n = v !== null && (v.f & I) !== 0 ? v : null;
	return h === null || n !== null && (n.f & T) !== 0 ? e |= T : h.f |= jt, {
		ctx: p,
		deps: null,
		effects: null,
		equals: Ht,
		f: e,
		fn: t,
		reactions: null,
		rv: 0,
		v: null,
		wv: 0,
		parent: n ? ? h
	}
}

function ke(t) {
	const e = Rt(t);
	return fn(e), e
}

function Pe(t) {
	const e = Rt(t);
	return e.equals = Ut, e
}

function Kt(t) {
	var e = t.effects;
	if(e !== null) {
		t.effects = null;
		for(var n = 0; n < e.length; n += 1) Y(e[n])
	}
}

function Pn(t) {
	for(var e = t.parent; e !== null;) {
		if((e.f & I) === 0) return e;
		e = e.parent
	}
	return null
}

function $t(t) {
	var e, n = h;
	ot(Pn(t));
	try {
		Kt(t), e = vn(t)
	} finally {
		ot(n)
	}
	return e
}

function zt(t) {
	var e = $t(t),
		n = (C || (t.f & T) !== 0) && t.deps !== null ? F : w;
	A(t, n), t.equals(e) || (t.v = e, t.wv = cn())
}
const W = new Map;

function Ot(t, e) {
	var n = {
		f: 0,
		v: t,
		reactions: null,
		equals: Ht,
		rv: 0,
		wv: 0
	};
	return n
}

function P(t, e) {
	const n = Ot(t);
	return fn(n), n
}

function Ce(t, e = !1) {
	var r;
	const n = Ot(t);
	return e || (n.equals = Ut), et && p !== null && p.l !== null && ((r = p.l).s ? ? (r.s = [])).push(n), n
}

function O(t, e, n = !1) {
	v !== null && !N && ht() && (v.f & (I | It)) !== 0 && !(y != null && y.includes(t)) && Nn();
	let r = n ? B(e) : e;
	return Cn(t, r)
}

function Cn(t, e) {
	if(!t.equals(e)) {
		var n = t.v;
		rt ? W.set(t, e) : W.set(t, n), t.v = e, (t.f & I) !== 0 && ((t.f & D) !== 0 && $t(t), A(t, (t.f & T) === 0 ? w : F)), t.wv = cn(), Zt(t, D), ht() && h !== null && (h.f & w) !== 0 && (h.f & (S | K)) === 0 && (m === null ? Gn([t]) : m.push(t))
	}
	return e
}

function Fe(t, e = 1) {
	var n = M(t),
		r = e === 1 ? n++ : n--;
	return O(t, n), r
}

function Zt(t, e) {
	var n = t.reactions;
	if(n !== null)
		for(var r = ht(), s = n.length, a = 0; a < s; a++) {
			var i = n[a],
				f = i.f;
			(f & D) === 0 && (!r && i === h || (A(i, e), (f & (w | T)) !== 0 && ((f & I) !== 0 ? Zt(i, F) : wt(i))))
		}
}

function Jt(t) {
	console.warn("https://svelte.dev/e/hydration_mismatch")
}
let q = !1;

function Me(t) {
	q = t
}
let R;

function X(t) {
	if(t === null) throw Jt(), Vt;
	return R = t
}

function Le() {
	return X(j(R))
}

function qe(t) {
	if(q) {
		if(j(R) !== null) throw Jt(), Vt;
		R = t
	}
}

function Ye(t = 1) {
	if(q) {
		for(var e = t, n = R; e--;) n = j(n);
		R = n
	}
}

function je() {
	for(var t = 0, e = R;;) {
		if(e.nodeType === 8) {
			var n = e.data;
			if(n === kn) {
				if(t === 0) return e;
				t -= 1
			} else(n === Dn || n === Sn) && (t += 1)
		}
		var r = j(e);
		e.remove(), e = r
	}
}
var Ct, Fn, Qt, Wt;

function He() {
	if(Ct === void 0) {
		Ct = window, Fn = /Firefox/.test(navigator.userAgent);
		var t = Element.prototype,
			e = Node.prototype,
			n = Text.prototype;
		Qt = Z(e, "firstChild").get, Wt = Z(e, "nextSibling").get, St(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), St(n) && (n.__t = void 0)
	}
}

function Tt(t = "") {
	return document.createTextNode(t)
}

function mt(t) {
	return Qt.call(t)
}

function j(t) {
	return Wt.call(t)
}

function Be(t, e) {
	if(!q) return mt(t);
	var n = mt(R);
	if(n === null) n = R.appendChild(Tt());
	else if(e && n.nodeType !== 3) {
		var r = Tt();
		return n == null || n.before(r), X(r), r
	}
	return X(n), n
}

function Ue(t, e) {
	if(!q) {
		var n = mt(t);
		return n instanceof Comment && n.data === "" ? j(n) : n
	}
	return R
}

function Ve(t, e = 1, n = !1) {
	let r = q ? R : t;
	for(var s; e--;) s = r, r = j(r);
	if(!q) return r;
	var a = r == null ? void 0 : r.nodeType;
	if(n && a !== 3) {
		var i = Tt();
		return r === null ? s == null || s.after(i) : r.before(i), X(i), i
	}
	return X(r), r
}

function Ge(t) {
	t.textContent = ""
}

function Xt(t) {
	h === null && v === null && xn(), v !== null && (v.f & T) !== 0 && h === null && An(), rt && mn()
}

function Mn(t, e) {
	var n = e.last;
	n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t)
}

function $(t, e, n, r = !0) {
	var s = h,
		a = {
			ctx: p,
			deps: null,
			nodes_start: null,
			nodes_end: null,
			f: t | D,
			first: null,
			fn: e,
			last: null,
			next: null,
			parent: s,
			prev: null,
			teardown: null,
			transitions: null,
			wv: 0
		};
	if(n) try {
		yt(a), a.f |= bn
	} catch(l) {
		throw Y(a), l
	} else e !== null && wt(a);
	var i = n && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (jt | lt)) === 0;
	if(!i && r && (s !== null && Mn(a, s), v !== null && (v.f & I) !== 0)) {
		var f = v;
		(f.effects ? ? (f.effects = [])).push(a)
	}
	return a
}

function Ln(t) {
	const e = $(vt, null, !1);
	return A(e, w), e.teardown = t, e
}

function qn(t) {
	Xt();
	var e = h !== null && (h.f & S) !== 0 && p !== null && !p.m;
	if(e) {
		var n = p;
		(n.e ? ? (n.e = [])).push({
			fn: t,
			effect: h,
			reaction: v
		})
	} else {
		var r = tn(t);
		return r
	}
}

function Ke(t) {
	return Xt(), Nt(t)
}

function $e(t) {
	const e = $(K, t, !0);
	return(n = {}) => new Promise(r => {
		n.outro ? Bn(e, () => {
			Y(e), r(void 0)
		}) : (Y(e), r(void 0))
	})
}

function tn(t) {
	return $(qt, t, !1)
}

function ze(t, e) {
	var n = p,
		r = {
			effect: null,
			ran: !1
		};
	n.l.r1.push(r), r.effect = Nt(() => {
		t(), !r.ran && (r.ran = !0, O(n.l.r2, !0), Et(e))
	})
}

function Ze() {
	var t = p;
	Nt(() => {
		if(M(t.l.r2)) {
			for(var e of t.l.r1) {
				var n = e.effect;
				(n.f & w) !== 0 && A(n, F), z(n) && yt(n), e.ran = !1
			}
			t.l.r2.v = !1
		}
	})
}

function Nt(t) {
	return $(vt, t, !0)
}

function Je(t, e = [], n = Rt) {
	const r = e.map(n);
	return Yn(() => t(...r.map(M)))
}

function Yn(t, e = 0) {
	return $(vt | It | e, t, !0)
}

function Qe(t, e = !0) {
	return $(vt | S, t, !0, e)
}

function nn(t) {
	var e = t.teardown;
	if(e !== null) {
		const n = rt,
			r = v;
		Mt(!0), G(null);
		try {
			e.call(null)
		} finally {
			Mt(n), G(r)
		}
	}
}

function en(t, e = !1) {
	var n = t.first;
	for(t.first = t.last = null; n !== null;) {
		var r = n.next;
		(n.f & K) !== 0 ? n.parent = null : Y(n, e), n = r
	}
}

function jn(t) {
	for(var e = t.first; e !== null;) {
		var n = e.next;
		(e.f & S) === 0 && Y(e), e = n
	}
}

function Y(t, e = !0) {
	var n = !1;
	(e || (t.f & Tn) !== 0) && t.nodes_start !== null && (Hn(t.nodes_start, t.nodes_end), n = !0), en(t, e && !n), _t(t, 0), A(t, pt);
	var r = t.transitions;
	if(r !== null)
		for(const a of r) a.stop();
	nn(t);
	var s = t.parent;
	s !== null && s.first !== null && rn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null
}

function Hn(t, e) {
	for(; t !== null;) {
		var n = t === e ? null : j(t);
		t.remove(), t = n
	}
}

function rn(t) {
	var e = t.parent,
		n = t.prev,
		r = t.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n))
}

function Bn(t, e) {
	var n = [];
	sn(t, n, !0), Un(n, () => {
		Y(t), e && e()
	})
}

function Un(t, e) {
	var n = t.length;
	if(n > 0) {
		var r = () => --n || e();
		for(var s of t) s.out(r)
	} else e()
}

function sn(t, e, n) {
	if((t.f & V) === 0) {
		if(t.f ^= V, t.transitions !== null)
			for(const i of t.transitions)(i.is_global || n) && e.push(i);
		for(var r = t.first; r !== null;) {
			var s = r.next,
				a = (r.f & Yt) !== 0 || (r.f & S) !== 0;
			sn(r, e, a ? n : !1), r = s
		}
	}
}

function We(t) {
	an(t, !0)
}

function an(t, e) {
	if((t.f & V) !== 0) {
		t.f ^= V, (t.f & w) === 0 && (t.f ^= w), z(t) && (A(t, D), wt(t));
		for(var n = t.first; n !== null;) {
			var r = n.next,
				s = (n.f & Yt) !== 0 || (n.f & S) !== 0;
			an(n, s ? e : !1), n = r
		}
		if(t.transitions !== null)
			for(const a of t.transitions)(a.is_global || e) && a.in()
	}
}
const Vn = typeof requestIdleCallback > "u" ? t => setTimeout(t, 1) : requestIdleCallback;
let tt = [],
	nt = [];

function ln() {
	var t = tt;
	tt = [], xt(t)
}

function un() {
	var t = nt;
	nt = [], xt(t)
}

function Xe(t) {
	tt.length === 0 && queueMicrotask(ln), tt.push(t)
}

function tr(t) {
	nt.length === 0 && Vn(un), nt.push(t)
}

function Ft() {
	tt.length > 0 && ln(), nt.length > 0 && un()
}
let at = !1,
	ft = !1,
	it = null,
	L = !1,
	rt = !1;

function Mt(t) {
	rt = t
}
let Q = [];
let v = null,
	N = !1;

function G(t) {
	v = t
}
let h = null;

function ot(t) {
	h = t
}
let y = null;

function fn(t) {
	v !== null && v.f & bt && (y === null ? y = [t] : y.push(t))
}
let d = null,
	b = 0,
	m = null;

function Gn(t) {
	m = t
}
let on = 1,
	ct = 0,
	C = !1;

function cn() {
	return ++on
}

function z(t) {
	var o;
	var e = t.f;
	if((e & D) !== 0) return !0;
	if((e & F) !== 0) {
		var n = t.deps,
			r = (e & T) !== 0;
		if(n !== null) {
			var s, a, i = (e & ut) !== 0,
				f = r && h !== null && !C,
				l = n.length;
			if(i || f) {
				var u = t,
					c = u.parent;
				for(s = 0; s < l; s++) a = n[s], (i || !((o = a == null ? void 0 : a.reactions) != null && o.includes(u))) && (a.reactions ? ? (a.reactions = [])).push(u);
				i && (u.f ^= ut), f && c !== null && (c.f & T) === 0 && (u.f ^= T)
			}
			for(s = 0; s < l; s++)
				if(a = n[s], z(a) && zt(a), a.wv > t.wv) return !0
		}(!r || h !== null && !C) && A(t, w)
	}
	return !1
}

function Kn(t, e) {
	for(var n = e; n !== null;) {
		if((n.f & lt) !== 0) try {
			n.fn(t);
			return
		} catch {
			n.f ^= lt
		}
		n = n.parent
	}
	throw at = !1, t
}

function $n(t) {
	return(t.f & pt) === 0 && (t.parent === null || (t.parent.f & lt) === 0)
}

function dt(t, e, n, r) {
	if(at) {
		if(n === null && (at = !1), $n(e)) throw t;
		return
	}
	n !== null && (at = !0); {
		Kn(t, e);
		return
	}
}

function _n(t, e, n = !0) {
	var r = t.reactions;
	if(r !== null)
		for(var s = 0; s < r.length; s++) {
			var a = r[s];
			y != null && y.includes(t) || ((a.f & I) !== 0 ? _n(a, e, !1) : e === a && (n ? A(a, D) : (a.f & w) !== 0 && A(a, F), wt(a)))
		}
}

function vn(t) {
	var E;
	var e = d,
		n = b,
		r = m,
		s = v,
		a = C,
		i = y,
		f = p,
		l = N,
		u = t.f;
	d = null, b = 0, m = null, C = (u & T) !== 0 && (N || !L || v === null), v = (u & (S | K)) === 0 ? t : null, y = null, kt(t.ctx), N = !1, ct++, t.f |= bt;
	try {
		var c = (0, t.fn)(),
			o = t.deps;
		if(d !== null) {
			var _;
			if(_t(t, b), o !== null && b > 0)
				for(o.length = b + d.length, _ = 0; _ < d.length; _++) o[b + _] = d[_];
			else t.deps = o = d;
			if(!C)
				for(_ = b; _ < o.length; _++)((E = o[_]).reactions ? ? (E.reactions = [])).push(t)
		} else o !== null && b < o.length && (_t(t, b), o.length = b);
		if(ht() && m !== null && !N && o !== null && (t.f & (I | F | D)) === 0)
			for(_ = 0; _ < m.length; _++) _n(m[_], t);
		return s !== null && s !== t && (ct++, m !== null && (r === null ? r = m : r.push(...m))), c
	} finally {
		d = e, b = n, m = r, v = s, C = a, y = i, kt(f), N = l, t.f ^= bt
	}
}

function zn(t, e) {
	let n = e.reactions;
	if(n !== null) {
		var r = yn.call(n, t);
		if(r !== -1) {
			var s = n.length - 1;
			s === 0 ? n = e.reactions = null : (n[r] = n[s], n.pop())
		}
	}
	n === null && (e.f & I) !== 0 && (d === null || !d.includes(e)) && (A(e, F), (e.f & (T | ut)) === 0 && (e.f ^= ut), Kt(e), _t(e, 0))
}

function _t(t, e) {
	var n = t.deps;
	if(n !== null)
		for(var r = e; r < n.length; r++) zn(t, n[r])
}

function yt(t) {
	var e = t.f;
	if((e & pt) === 0) {
		A(t, w);
		var n = h,
			r = p,
			s = L;
		h = t, L = !0;
		try {
			(e & It) !== 0 ? jn(t) : en(t), nn(t);
			var a = vn(t);
			t.teardown = typeof a == "function" ? a : null, t.wv = on;
			var i = t.deps,
				f
		} catch(l) {
			dt(l, t, n, r || t.ctx)
		} finally {
			L = s, h = n
		}
	}
}

function Zn() {
	try {
		In()
	} catch(t) {
		if(it !== null) dt(t, it, null);
		else throw t
	}
}

function pn() {
	var t = L;
	try {
		var e = 0;
		for(L = !0; Q.length > 0;) {
			e++ > 1e3 && Zn();
			var n = Q,
				r = n.length;
			Q = [];
			for(var s = 0; s < r; s++) {
				var a = Qn(n[s]);
				Jn(a)
			}
			W.clear()
		}
	} finally {
		ft = !1, L = t, it = null
	}
}

function Jn(t) {
	var e = t.length;
	if(e !== 0)
		for(var n = 0; n < e; n++) {
			var r = t[n];
			if((r.f & (pt | V)) === 0) try {
				z(r) && (yt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? rn(r) : r.fn = null))
			} catch(s) {
				dt(s, r, null, r.ctx)
			}
		}
}

function wt(t) {
	ft || (ft = !0, queueMicrotask(pn));
	for(var e = it = t; e.parent !== null;) {
		e = e.parent;
		var n = e.f;
		if((n & (K | S)) !== 0) {
			if((n & w) === 0) return;
			e.f ^= w
		}
	}
	Q.push(e)
}

function Qn(t) {
	for(var e = [], n = t; n !== null;) {
		var r = n.f,
			s = (r & (S | K)) !== 0,
			a = s && (r & w) !== 0;
		if(!a && (r & V) === 0) {
			if((r & qt) !== 0) e.push(n);
			else if(s) n.f ^= w;
			else {
				var i = v;
				try {
					v = n, z(n) && yt(n)
				} catch(u) {
					dt(u, n, null, n.ctx)
				} finally {
					v = i
				}
			}
			var f = n.first;
			if(f !== null) {
				n = f;
				continue
			}
		}
		var l = n.parent;
		for(n = n.next; n === null && l !== null;) n = l.next, l = l.parent
	}
	return e
}

function Wn(t) {
	var e;
	for(Ft(); Q.length > 0;) ft = !0, pn(), Ft();
	return e
}
async function nr() {
	await Promise.resolve(), Wn()
}

function M(t) {
	var e = t.f,
		n = (e & I) !== 0;
	if(v !== null && !N) {
		if(!(y != null && y.includes(t))) {
			var r = v.deps;
			t.rv < ct && (t.rv = ct, d === null && r !== null && r[b] === t ? b++ : d === null ? d = [t] : (!C || !d.includes(t)) && d.push(t))
		}
	} else if(n && t.deps === null && t.effects === null) {
		var s = t,
			a = s.parent;
		a !== null && (a.f & T) === 0 && (s.f ^= T)
	}
	return n && (s = t, z(s) && zt(s)), rt && W.has(t) ? W.get(t) : t.v
}

function Et(t) {
	var e = N;
	try {
		return N = !0, t()
	} finally {
		N = e
	}
}
const Xn = -7169;

function A(t, e) {
	t.f = t.f & Xn | e
}

function er(t) {
	if(!(typeof t != "object" || !t || t instanceof EventTarget)) {
		if(J in t) At(t);
		else if(!Array.isArray(t))
			for(let e in t) {
				const n = t[e];
				typeof n == "object" && n && J in n && At(n)
			}
	}
}

function At(t, e = new Set) {
	if(typeof t == "object" && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
		e.add(t), t instanceof Date && t.getTime();
		for(let r in t) try {
			At(t[r], e)
		} catch {}
		const n = Lt(t);
		if(n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			const r = wn(n);
			for(let s in r) {
				const a = r[s].get;
				if(a) try {
					a.call(t)
				} catch {}
			}
		}
	}
}

function hn(t, e, n) {
	if(t == null) return e(void 0), n && n(void 0), U;
	const r = Et(() => t.subscribe(e, n));
	return r.unsubscribe ? () => r.unsubscribe() : r
}
const H = [];

function te(t, e) {
	return {
		subscribe: ne(t, e).subscribe
	}
}

function ne(t, e = U) {
	let n = null;
	const r = new Set;

	function s(f) {
		if(Bt(t, f) && (t = f, n)) {
			const l = !H.length;
			for(const u of r) u[1](), H.push(u, t);
			if(l) {
				for(let u = 0; u < H.length; u += 2) H[u][0](H[u + 1]);
				H.length = 0
			}
		}
	}

	function a(f) {
		s(f(t))
	}

	function i(f, l = U) {
		const u = [f, l];
		return r.add(u), r.size === 1 && (n = e(s, a) || U), f(t), () => {
			r.delete(u), r.size === 0 && n && (n(), n = null)
		}
	}
	return {
		set: s,
		update: a,
		subscribe: i
	}
}

function rr(t, e, n) {
	const r = !Array.isArray(t),
		s = r ? [t] : t;
	if(!s.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
	const a = e.length < 2;
	return te(n, (i, f) => {
		let l = !1;
		const u = [];
		let c = 0,
			o = U;
		const _ = () => {
				if(c) return;
				o();
				const x = e(r ? u[0] : u, i, f);
				a ? i(x) : o = typeof x == "function" ? x : U
			},
			E = s.map((x, k) => hn(x, st => {
				u[k] = st, c &= ~(1 << k), l && _()
			}, () => {
				c |= 1 << k
			}));
		return l = !0, _(),
			function() {
				xt(E), o(), l = !1
			}
	})
}

function sr(t) {
	let e;
	return hn(t, n => e = n)(), e
}

function ee(t) {
	p === null && Gt(), et && p.l !== null ? re(p).m.push(t) : qn(() => {
		const e = Et(t);
		if(typeof e == "function") return e
	})
}

function ar(t) {
	p === null && Gt(), ee(() => () => Et(t))
}

function re(t) {
	var e = t.l;
	return e.u ? ? (e.u = {
		a: [],
		b: [],
		m: []
	})
}
export {
	et as $, Sn as A, je as B, X as C, Me as D, Yt as E, We as F, Ln as G, Dn as H, ae as I, U as J, Ce as K, hn as L, O as M, sr as N, Ot as O, Z as P, _e as Q, fe as R, J as S, Pe as T, g as U, be as V, Ut as W, B as X, Fe as Y, Te as Z, ie as _, qn as a, ge as a0, Ee as a1, me as a2, Wn as a3, ee as a4, P as a5, nr as a6, ke as a7, G as a8, ot as a9, ye as aA, Ne as aB, Lt as aC, oe as aD, wn as aE, tr as aF, It as aG, bn as aH, Ie as aI, Ae as aJ, xe as aK, le as aL, ze as aM, Ze as aN, ne as aO, Ye as aP, rr as aQ, ar as aR, v as aa, h as ab, dn as ac, mt as ad, Fn as ae, Re as af, Oe as ag, Tt as ah, He as ai, j as aj, Vt as ak, kn as al, Jt as am, ce as an, Ge as ao, se as ap, $e as aq, Y as ar, V as as, Cn as at, he as au, sn as av, Un as aw, pe as ax, we as ay, de as az, Et as b, p as c, ue as d, er as e, Rt as f, M as g, ve as h, Ue as i, Se as j, Be as k, qe as l, q as m, Le as n, Yn as o, De as p, Qe as q, xt as r, Ve as s, Je as t, Ke as u, Bn as v, R as w, tn as x, Nt as y, Xe as z
};