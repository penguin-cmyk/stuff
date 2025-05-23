import {
	S as R, aj as B, ak as C, a5 as h, al as U, k as E, am as d, y as _, o as T, a1 as Y, an as K, ao as $, a6 as F, K as H, O as S, R as W, ap as Z, aq as V, T as z, U as G, N as J, V as A, Y as N, Z as O, _ as L, W as Q
}
from "./BKJHFIjU.js";

function w(a, m = null, y) {
	if(typeof a != "object" || a === null || R in a) return a;
	const c = $(a);
	if(c !== B && c !== C) return a;
	var r = new Map,
		v = F(a),
		u = h(0);
	v && r.set("length", h(a.length));
	var l;
	return new Proxy(a, {
		defineProperty(f, e, t) {
			(!("value" in t) || t.configurable === !1 || t.enumerable === !1 || t.writable === !1) && K();
			var s = r.get(e);
			return s === void 0 ? (s = h(t.value), r.set(e, s)) : _(s, w(t.value, l)), !0
		}, deleteProperty(f, e) {
			var t = r.get(e);
			if(t === void 0) e in f && r.set(e, h(d));
			else {
				if(v && typeof e == "string") {
					var s = r.get("length"),
						i = Number(e);
					Number.isInteger(i) && i < s.v && _(s, i)
				}
				_(t, d), j(u)
			}
			return !0
		}, get(f, e, t) {
			var o;
			if(e === R) return a;
			var s = r.get(e),
				i = e in f;
			if(s === void 0 && (!i || (o = T(f, e)) != null && o.writable) && (s = h(w(i ? f[e] : d, l)), r.set(e, s)), s !== void 0) {
				var n = E(s);
				return n === d ? void 0 : n
			}
			return Reflect.get(f, e, t)
		}, getOwnPropertyDescriptor(f, e) {
			var t = Reflect.getOwnPropertyDescriptor(f, e);
			if(t && "value" in t) {
				var s = r.get(e);
				s && (t.value = E(s))
			} else if(t === void 0) {
				var i = r.get(e),
					n = i == null ? void 0 : i.v;
				if(i !== void 0 && n !== d) return {
					enumerable: !0,
					configurable: !0,
					value: n,
					writable: !0
				}
			}
			return t
		}, has(f, e) {
			var n;
			if(e === R) return !0;
			var t = r.get(e),
				s = t !== void 0 && t.v !== d || Reflect.has(f, e);
			if(t !== void 0 || Y !== null && (!s || (n = T(f, e)) != null && n.writable)) {
				t === void 0 && (t = h(s ? w(f[e], l) : d), r.set(e, t));
				var i = E(t);
				if(i === d) return !1
			}
			return s
		}, set(f, e, t, s) {
			var k;
			var i = r.get(e),
				n = e in f;
			if(v && e === "length")
				for(var o = t; o < i.v; o += 1) {
					var g = r.get(o + "");
					g !== void 0 ? _(g, d) : o in f && (g = h(d), r.set(o + "", g))
				}
			i === void 0 ? (!n || (k = T(f, e)) != null && k.writable) && (i = h(void 0), _(i, w(t, l)), r.set(e, i)) : (n = i.v !== d, _(i, w(t, l)));
			var b = Reflect.getOwnPropertyDescriptor(f, e);
			if(b != null && b.set && b.set.call(s, t), !n) {
				if(v && typeof e == "string") {
					var I = r.get("length"),
						P = Number(e);
					Number.isInteger(P) && P >= I.v && _(I, P + 1)
				}
				j(u)
			}
			return !0
		}, ownKeys(f) {
			E(u);
			var e = Reflect.ownKeys(f).filter(i => {
				var n = r.get(i);
				return n === void 0 || n.v !== d
			});
			for(var [t, s] of r) s.v !== d && !(t in f) && e.push(t);
			return e
		}, setPrototypeOf() {
			U()
		}
	})
}

function j(a, m = 1) {
	_(a, a.v + m)
}

function D(a) {
	return a !== null && typeof a == "object" && R in a ? a[R] : a
}

function p(a, m) {
	return Object.is(D(a), D(m))
}

function ee(a, m, [y, c] = [0, 0]) {
	S && y === 0 && W();
	var r = a,
		v = null,
		u = null,
		l = d,
		f = y > 0 ? Z : 0,
		e = !1;
	const t = (i, n = !0) => {
			e = !0, s(n, i)
		},
		s = (i, n) => {
			if(l === (l = i)) return;
			let o = !1;
			if(S && c !== -1) {
				if(y === 0) {
					const b = r.data;
					b === V ? c = 0 : b === z ? c = 1 / 0 : (c = parseInt(b.substring(1)), c !== c && (c = l ? 1 / 0 : -1))
				}
				const g = c > y;
				!!l === g && (r = G(), J(r), A(!1), o = !0, c = -1)
			}
			l ? (v ? N(v) : n && (v = O(() => n(r))), u && L(u, () => {
				u = null
			})) : (u ? N(u) : n && (u = O(() => n(r, [y + 1, c]))), v && L(v, () => {
				v = null
			})), o && A(!0)
		};
	H(() => {
		e = !1, m(t), e || s(null, null)
	}, f), S && (r = Q)
}
const X = "modulepreload",
	M = function(a, m) {
		return new URL(a, m).href
	},
	q = {},
	te = function(m, y, c) {
		let r = Promise.resolve();
		if(y && y.length > 0) {
			const u = document.getElementsByTagName("link"),
				l = document.querySelector("meta[property=csp-nonce]"),
				f = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
			r = Promise.allSettled(y.map(e => {
				if(e = M(e, c), e in q) return;
				q[e] = !0;
				const t = e.endsWith(".css"),
					s = t ? '[rel="stylesheet"]' : "";
				if(!!c)
					for(let o = u.length - 1; o >= 0; o--) {
						const g = u[o];
						if(g.href === e && (!t || g.rel === "stylesheet")) return
					} else if(document.querySelector(`link[href="${e}"]${s}`)) return;
				const n = document.createElement("link");
				if(n.rel = t ? "stylesheet" : X, t || (n.as = "script"), n.crossOrigin = "", n.href = e, f && n.setAttribute("nonce", f), document.head.appendChild(n), t) return new Promise((o, g) => {
					n.addEventListener("load", o), n.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${e}`)))
				})
			}))
		}

		function v(u) {
			const l = new Event("vite:preloadError", {
				cancelable: !0
			});
			if(l.payload = u, window.dispatchEvent(l), !l.defaultPrevented) throw u
		}
		return r.then(u => {
			for(const l of u || []) l.status === "rejected" && v(l.reason);
			return m().catch(v)
		})
	};
export {
	te as _, ee as a, p as i, w as p
};