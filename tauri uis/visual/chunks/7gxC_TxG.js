import {
	o as K, m as O, n as Z, E as V, H as z, A as J, B as Q, C as W, D as L, F as g, q as w, v as U, U as X, w as j, G as x, I as y, J as Y, K as $, L as k, M as F, N as ee, g as d, O as re, P as ne, Q as se, R as ue, f as q, T as ae, V as G, W as ie, X as fe, b as B, Y as M, Z as le, S as te, _ as ce, $ as _e, a0 as oe, a1 as ve, a2 as de
}
from "./QZtleaAQ.js";

function Pe(e, r, [s, n] = [0, 0]) {
	O && s === 0 && Z();
	var i = e,
		a = null,
		f = null,
		p = X,
		S = s > 0 ? V : 0,
		t = !1;
	const R = (l, c = !0) => {
			t = !0, v(c, l)
		},
		v = (l, c) => {
			if(p === (p = l)) return;
			let b = !1;
			if(O && n !== -1) {
				if(s === 0) {
					const _ = i.data;
					_ === z ? n = 0 : _ === J ? n = 1 / 0 : (n = parseInt(_.substring(1)), n !== n && (n = p ? 1 / 0 : -1))
				}
				const P = n > s;
				!!p === P && (i = Q(), W(i), L(!1), b = !0, n = -1)
			}
			p ? (a ? g(a) : c && (a = w(() => c(i))), f && U(f, () => {
				f = null
			})) : (f ? g(f) : c && (f = w(() => c(i, [s + 1, n]))), a && U(a, () => {
				a = null
			})), b && L(!0)
		};
	K(() => {
		t = !1, r(R), t || v(null, null)
	}, S), O && (i = j)
}
let E = !1,
	N = Symbol();

function Ee(e, r, s) {
	const n = s[r] ? ? (s[r] = {
		store: null,
		source: $(void 0),
		unsubscribe: Y
	});
	if(n.store !== e && !(N in s))
		if(n.unsubscribe(), n.store = e ? ? null, e == null) n.source.v = void 0, n.unsubscribe = Y;
		else {
			var i = !0;
			n.unsubscribe = k(e, a => {
				i ? n.source.v = a : F(n.source, a)
			}), i = !1
		}
	return e && N in s ? ee(e) : d(n.source)
}

function Re() {
	const e = {};

	function r() {
		x(() => {
			for(var s in e) e[s].unsubscribe();
			y(e, N, {
				enumerable: !1,
				value: !0
			})
		})
	}
	return [e, r]
}

function Te(e, r, s) {
	return e.set(s), r
}

function pe(e) {
	var r = E;
	try {
		return E = !1, [e(), E]
	} finally {
		E = r
	}
}
const be = {
	get(e, r) {
		if(!e.exclude.includes(r)) return d(e.version), r in e.special ? e.special[r]() : e.props[r]
	}, set(e, r, s) {
		return r in e.special || (e.special[r] = Ie({
			get[r]() {
				return e.props[r]
			}
		}, r, G)), e.special[r](s), M(e.version), !0
	}, getOwnPropertyDescriptor(e, r) {
		if(!e.exclude.includes(r) && r in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[r]
		}
	}, deleteProperty(e, r) {
		return e.exclude.includes(r) || (e.exclude.push(r), M(e.version)), !0
	}, has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props
	}, ownKeys(e) {
		return Reflect.ownKeys(e.props).filter(r => !e.exclude.includes(r))
	}
};

function Ae(e, r) {
	return new Proxy({
		props: e,
		exclude: r,
		special: {},
		version: re(0)
	}, be)
}

function C(e) {
	var r;
	return((r = e.ctx) == null ? void 0 : r.d) ? ? !1
}

function Ie(e, r, s, n) {
	var h;
	var i = (s & ve) !== 0,
		a = !_e || (s & oe) !== 0,
		f = (s & le) !== 0,
		p = (s & de) !== 0,
		S = !1,
		t;
	f ? [t, S] = pe(() => e[r]) : t = e[r];
	var R = te in e || ce in e,
		v = f && (((h = ne(e, r)) == null ? void 0 : h.set) ? ? (R && r in e && (u => e[r] = u))) || void 0,
		l = n,
		c = !0,
		b = !1,
		P = () => (b = !0, c && (c = !1, p ? l = B(n) : l = n), l);
	t === void 0 && n !== void 0 && (v && a && se(), t = P(), v && v(t));
	var _;
	if(a) _ = () => {
		var u = e[r];
		return u === void 0 ? P() : (c = !0, b = !1, u)
	};
	else {
		var D = (i ? q : ae)(() => e[r]);
		D.f |= ue, _ = () => {
			var u = d(D);
			return u !== void 0 && (l = void 0), u === void 0 ? l : u
		}
	}
	if((s & G) === 0) return _;
	if(v) {
		var H = e.$$legacy;
		return function(u, I) {
			return arguments.length > 0 ? ((!a || !I || H || S) && v(I ? _() : u), u) : _()
		}
	}
	var T = !1,
		A = $(t),
		o = q(() => {
			var u = _(),
				I = d(A);
			return T ? (T = !1, I) : A.v = u
		});
	return f && d(o), i || (o.equals = ie),
		function(u, I) {
			if(arguments.length > 0) {
				const m = I ? d(o) : a && f ? fe(u) : u;
				if(!o.equals(m)) {
					if(T = !0, F(A, m), b && l !== void 0 && (l = m), C(o)) return u;
					B(() => d(o))
				}
				return u
			}
			return C(o) ? o.v : d(o)
		}
}
export {
	Ee as a, Te as b, Pe as i, Ae as l, Ie as p, Re as s
};