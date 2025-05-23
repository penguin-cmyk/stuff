import {
	J as ee, K as ae, M as W, N as b, O as w, Q as re, R as ne, k as X, w as fe, T as ie, U as z, V as g, W as R, X as le, Y as Z, Z as $, _ as se, $ as k, a0 as F, q as ue, a1 as B, a2 as D, a3 as J, a4 as O, z as te, a5 as K, a6 as ve, a7 as de, a8 as _e, a9 as ce, aa as oe, ab as he, ac as Ee, ad as pe
}
from "./BKJHFIjU.js";

function me(l, e) {
	return e
}

function Te(l, e, a, u) {
	for(var v = [], _ = e.length, t = 0; t < _; t++) _e(e[t].e, v, !0);
	var c = _ > 0 && v.length === 0 && a !== null;
	if(c) {
		var T = a.parentNode;
		ce(T), T.append(a), u.clear(), m(l, e[0].prev, e[_ - 1].next)
	}
	oe(v, () => {
		for(var h = 0; h < _; h++) {
			var d = e[h];
			c || (u.delete(d.k), m(l, d.prev, d.next)), he(d.e, !c)
		}
	})
}

function we(l, e, a, u, v, _ = null) {
	var t = l,
		c = {
			flags: e,
			items: new Map,
			first: null
		},
		T = (e & W) !== 0;
	if(T) {
		var h = l;
		t = w ? b(re(h)) : h.appendChild(ee())
	}
	w && ne();
	var d = null,
		C = !1,
		f = fe(() => {
			var s = a();
			return ve(s) ? s : s == null ? [] : F(s)
		});
	ae(() => {
		var s = X(f),
			r = s.length;
		if(C && r === 0) return;
		C = r === 0;
		let I = !1;
		if(w) {
			var E = t.data === ie;
			E !== (r === 0) && (t = z(), b(t), g(!1), I = !0)
		}
		if(w) {
			for(var p = null, A, o = 0; o < r; o++) {
				if(R.nodeType === 8 && R.data === le) {
					t = R, I = !0, g(!1);
					break
				}
				var n = s[o],
					i = u(n, o);
				A = G(R, c, p, null, n, i, o, v, e, a), c.items.set(i, A), p = A
			}
			r > 0 && b(z())
		}
		w || Ae(s, c, t, v, e, u, a), _ !== null && (r === 0 ? d ? Z(d) : d = $(() => _(t)) : d !== null && se(d, () => {
			d = null
		})), I && g(!0), X(f)
	}), w && (t = R)
}

function Ae(l, e, a, u, v, _, t) {
	var L, q, V, Y;
	var c = (v & de) !== 0,
		T = (v & (D | O)) !== 0,
		h = l.length,
		d = e.items,
		C = e.first,
		f = C,
		s, r = null,
		I, E = [],
		p = [],
		A, o, n, i;
	if(c)
		for(i = 0; i < h; i += 1) A = l[i], o = _(A, i), n = d.get(o), n !== void 0 && ((L = n.a) == null || L.measure(), (I ? ? (I = new Set)).add(n));
	for(i = 0; i < h; i += 1) {
		if(A = l[i], o = _(A, i), n = d.get(o), n === void 0) {
			var P = f ? f.e.nodes_start : a;
			r = G(P, e, r, r === null ? e.first : r.next, A, o, i, u, v, t), d.set(o, r), E = [], p = [], f = r.next;
			continue
		}
		if(T && Ie(n, A, i, v), (n.e.f & k) !== 0 && (Z(n.e), c && ((q = n.a) == null || q.unfix(), (I ? ? (I = new Set)).delete(n))), n !== f) {
			if(s !== void 0 && s.has(n)) {
				if(E.length < p.length) {
					var H = p[0],
						x;
					r = H.prev;
					var y = E[0],
						M = E[E.length - 1];
					for(x = 0; x < E.length; x += 1) Q(E[x], H, a);
					for(x = 0; x < p.length; x += 1) s.delete(p[x]);
					m(e, y.prev, M.next), m(e, r, y), m(e, M, H), f = H, r = M, i -= 1, E = [], p = []
				} else s.delete(n), Q(n, f, a), m(e, n.prev, n.next), m(e, n, r === null ? e.first : r.next), m(e, r, n), r = n;
				continue
			}
			for(E = [], p = []; f !== null && f.k !== o;)(f.e.f & k) === 0 && (s ? ? (s = new Set)).add(f), p.push(f), f = f.next;
			if(f === null) continue;
			n = f
		}
		E.push(n), r = n, f = n.next
	}
	if(f !== null || s !== void 0) {
		for(var N = s === void 0 ? [] : F(s); f !== null;)(f.e.f & k) === 0 && N.push(f), f = f.next;
		var S = N.length;
		if(S > 0) {
			var j = (v & W) !== 0 && h === 0 ? a : null;
			if(c) {
				for(i = 0; i < S; i += 1)(V = N[i].a) == null || V.measure();
				for(i = 0; i < S; i += 1)(Y = N[i].a) == null || Y.fix()
			}
			Te(e, N, j, d)
		}
	}
	c && ue(() => {
		var U;
		if(I !== void 0)
			for(n of I)(U = n.a) == null || U.apply()
	}), B.first = e.first && e.first.e, B.last = r && r.e
}

function Ie(l, e, a, u) {
	(u & D) !== 0 && J(l.v, e), (u & O) !== 0 ? J(l.i, a) : l.i = a
}

function G(l, e, a, u, v, _, t, c, T, h) {
	var d = (T & D) !== 0,
		C = (T & Ee) === 0,
		f = d ? C ? te(v) : K(v) : v,
		s = (T & O) === 0 ? t : K(t),
		r = {
			i: s,
			v: f,
			k: _,
			a: null,
			e: null,
			prev: a,
			next: u
		};
	try {
		return r.e = $(() => c(l, f, s, h), w), r.e.prev = a && a.e, r.e.next = u && u.e, a === null ? e.first = r : (a.next = r, a.e.next = r.e), u !== null && (u.prev = r, u.e.prev = r.e), r
	} finally {}
}

function Q(l, e, a) {
	for(var u = l.next ? l.next.e.nodes_start : a, v = e ? e.e.nodes_start : a, _ = l.e.nodes_start; _ !== u;) {
		var t = pe(_);
		v.before(_), _ = t
	}
}

function m(l, e, a) {
	e === null ? l.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e)
}
export {
	we as e, me as i
};