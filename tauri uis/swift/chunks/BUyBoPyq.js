import {
	o as T, v as q, L as Y, m as b, w as C, P as M, k as _, x as N, y as U, z as w, u as g, A as y, S as z, B as G, C as $, D as p, E as F, F as V
}
from "./BKJHFIjU.js";
import {
	p as Z
}
from "./dq3z1D4m.js";
import {
	c as j
}
from "./BxiobduP.js";

function D(r) {
	var a;
	return((a = r.ctx) == null ? void 0 : a.d) ? ? !1
}

function Q(r, a, s, l) {
	var O;
	var E = (s & F) !== 0,
		d = !$ || (s & p) !== 0,
		c = (s & y) !== 0,
		h = (s & V) !== 0,
		A = !1,
		u;
	c ? [u, A] = j(() => r[a]) : u = r[a];
	var x = z in r || G in r,
		v = c && (((O = T(r, a)) == null ? void 0 : O.set) ? ? (x && a in r && (e => r[a] = e))) || void 0,
		t = l,
		o = !0,
		P = !1,
		R = () => (P = !0, o && (o = !1, h ? t = g(l) : t = l), t);
	u === void 0 && l !== void 0 && (v && d && q(), u = R(), v && v(u));
	var i;
	if(d) i = () => {
		var e = r[a];
		return e === void 0 ? R() : (o = !0, P = !1, e)
	};
	else {
		var L = (E ? b : C)(() => r[a]);
		L.f |= Y, i = () => {
			var e = _(L);
			return e !== void 0 && (t = void 0), e === void 0 ? t : e
		}
	}
	if((s & M) === 0) return i;
	if(v) {
		var B = r.$$legacy;
		return function(e, f) {
			return arguments.length > 0 ? ((!d || !f || B || A) && v(f ? i() : e), e) : i()
		}
	}
	var S = !1,
		m = w(u),
		n = b(() => {
			var e = i(),
				f = _(m);
			return S ? (S = !1, f) : m.v = e
		});
	return c && _(n), E || (n.equals = N),
		function(e, f) {
			if(arguments.length > 0) {
				const I = f ? _(n) : d && c ? Z(e) : e;
				if(!n.equals(I)) {
					if(S = !0, U(m, I), P && t !== void 0 && (t = I), D(n)) return e;
					g(() => _(n))
				}
				return e
			}
			return D(n) ? n.v : _(n)
		}
}
export {
	Q as p
};