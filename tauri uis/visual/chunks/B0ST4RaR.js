import {
	ah as W0, o as X0, C as G, m as L, ad as Q0, n as D0, g as O, T as a1, A as e1, B as c0, D as P, w as B, al as r1, F as S0, q as B0, v as i1, as as W, ap as I0, ab as z, at as f0, K as N0, O as v0, ac as l1, au as r0, av as t1, ao as o1, aw as n1, ar as s1, ax as i0, ay as d1, aj as u1, az as R0, z as V0, aA as c1, aB as f1, aC as v1, aD as h1, aE as p1, aF as w1, E as m1, aG as M1, aH as Z1, x as A1, b as C1, aI as _1, aJ as L1, aK as k1, aL as g1, J as I, a8 as h0, a9 as p0, aa as b1, p as x1, aM as H1, aN as T1, t as w0, j as E1, M as S1, e as F, l as B1, aO as E, N as l0
}
from "./QZtleaAQ.js";
import {
	i as I1, e as N1, d as R1, f as V1, n as j1, g as O1, j as P1, k as F1, w as U1, l as j0, a as m0
}
from "./IKrY9baT.js";
import {
	i as $1
}
from "./DQ7Mtnp1.js";
import {
	l as M0, p as N
}
from "./7gxC_TxG.js";

function y1(a, e) {
	return e
}

function z1(a, e, r, i) {
	for(var t = [], l = e.length, o = 0; o < l; o++) t1(e[o].e, t, !0);
	var s = l > 0 && t.length === 0 && r !== null;
	if(s) {
		var w = r.parentNode;
		o1(w), w.append(r), i.clear(), H(a, e[0].prev, e[l - 1].next)
	}
	n1(t, () => {
		for(var v = 0; v < l; v++) {
			var f = e[v];
			s || (i.delete(f.k), H(a, f.prev, f.next)), s1(f.e, !s)
		}
	})
}

function q1(a, e, r, i, t, l = null) {
	var o = a,
		s = {
			flags: e,
			items: new Map,
			first: null
		},
		w = (e & R0) !== 0;
	if(w) {
		var v = a;
		o = L ? G(Q0(v)) : v.appendChild(W0())
	}
	L && D0();
	var f = null,
		Z = !1,
		n = a1(() => {
			var h = r();
			return l1(h) ? h : h == null ? [] : I0(h)
		});
	X0(() => {
		var h = O(n),
			c = h.length;
		if(Z && c === 0) return;
		Z = c === 0;
		let m = !1;
		if(L) {
			var A = o.data === e1;
			A !== (c === 0) && (o = c0(), G(o), P(!1), m = !0)
		}
		if(L) {
			for(var M = null, C, u = 0; u < c; u++) {
				if(B.nodeType === 8 && B.data === r1) {
					o = B, m = !0, P(!1);
					break
				}
				var d = h[u],
					p = i(d, u);
				C = O0(B, s, M, null, d, p, u, t, e, r), s.items.set(p, C), M = C
			}
			c > 0 && G(c0())
		}
		L || J1(h, s, o, t, e, i, r), l !== null && (c === 0 ? f ? S0(f) : f = B0(() => l(o)) : f !== null && i1(f, () => {
			f = null
		})), m && P(!0), O(n)
	}), L && (o = B)
}

function J1(a, e, r, i, t, l, o) {
	var o0, n0, s0, d0;
	var s = (t & c1) !== 0,
		w = (t & (i0 | r0)) !== 0,
		v = a.length,
		f = e.items,
		Z = e.first,
		n = Z,
		h, c = null,
		m, A = [],
		M = [],
		C, u, d, p;
	if(s)
		for(p = 0; p < v; p += 1) C = a[p], u = l(C, p), d = f.get(u), d !== void 0 && ((o0 = d.a) == null || o0.measure(), (m ? ? (m = new Set)).add(d));
	for(p = 0; p < v; p += 1) {
		if(C = a[p], u = l(C, p), d = f.get(u), d === void 0) {
			var g = n ? n.e.nodes_start : r;
			c = O0(g, e, c, c === null ? e.first : c.next, C, u, p, i, t, o), f.set(u, c), A = [], M = [], n = c.next;
			continue
		}
		if(w && K1(d, C, p, t), (d.e.f & W) !== 0 && (S0(d.e), s && ((n0 = d.a) == null || n0.unfix(), (m ? ? (m = new Set)).delete(d))), d !== n) {
			if(h !== void 0 && h.has(d)) {
				if(A.length < M.length) {
					var _ = M[0],
						k;
					c = _.prev;
					var b = A[0],
						K = A[A.length - 1];
					for(k = 0; k < A.length; k += 1) Z0(A[k], _, r);
					for(k = 0; k < M.length; k += 1) h.delete(M[k]);
					H(e, b.prev, K.next), H(e, c, b), H(e, K, _), n = _, c = K, p -= 1, A = [], M = []
				} else h.delete(d), Z0(d, n, r), H(e, d.prev, d.next), H(e, d, c === null ? e.first : c.next), H(e, c, d), c = d;
				continue
			}
			for(A = [], M = []; n !== null && n.k !== u;)(n.e.f & W) === 0 && (h ? ? (h = new Set)).add(n), M.push(n), n = n.next;
			if(n === null) continue;
			d = n
		}
		A.push(d), c = d, n = d.next
	}
	if(n !== null || h !== void 0) {
		for(var S = h === void 0 ? [] : I0(h); n !== null;)(n.e.f & W) === 0 && S.push(n), n = n.next;
		var Y = S.length;
		if(Y > 0) {
			var G0 = (t & R0) !== 0 && v === 0 ? r : null;
			if(s) {
				for(p = 0; p < Y; p += 1)(s0 = S[p].a) == null || s0.measure();
				for(p = 0; p < Y; p += 1)(d0 = S[p].a) == null || d0.fix()
			}
			z1(e, S, G0, f)
		}
	}
	s && V0(() => {
		var u0;
		if(m !== void 0)
			for(d of m)(u0 = d.a) == null || u0.apply()
	}), z.first = e.first && e.first.e, z.last = c && c.e
}

function K1(a, e, r, i) {
	(i & i0) !== 0 && f0(a.v, e), (i & r0) !== 0 ? f0(a.i, r) : a.i = r
}

function O0(a, e, r, i, t, l, o, s, w, v) {
	var f = (w & i0) !== 0,
		Z = (w & d1) === 0,
		n = f ? Z ? N0(t) : v0(t) : t,
		h = (w & r0) === 0 ? o : v0(o),
		c = {
			i: h,
			v: n,
			k: l,
			a: null,
			e: null,
			prev: r,
			next: i
		};
	try {
		return c.e = B0(() => s(a, n, h, v), L), c.e.prev = r && r.e, c.e.next = i && i.e, r === null ? e.first = c : (r.next = c, r.e.next = c.e), i !== null && (i.prev = c, i.e.prev = c.e), c
	} finally {}
}

function Z0(a, e, r) {
	for(var i = a.next ? a.next.e.nodes_start : r, t = e ? e.e.nodes_start : r, l = a.e.nodes_start; l !== i;) {
		var o = u1(l);
		t.before(l), l = o
	}
}

function H(a, e, r) {
	e === null ? a.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e)
}

function P0(a) {
	var e, r, i = "";
	if(typeof a == "string" || typeof a == "number") i += a;
	else if(typeof a == "object")
		if(Array.isArray(a)) {
			var t = a.length;
			for(e = 0; e < t; e++) a[e] && (r = P0(a[e])) && (i && (i += " "), i += r)
		} else
			for(r in a) a[r] && (i && (i += " "), i += r);
	return i
}

function Y1() {
	for(var a, e, r = 0, i = "", t = arguments.length; r < t; r++)(a = arguments[r]) && (e = P0(a)) && (i && (i += " "), i += e);
	return i
}

function G1(a) {
	return typeof a == "object" ? Y1(a) : a ? ? ""
}
const A0 = [...
	` 	
\r\f \v\uFEFF`
];

function W1(a, e, r) {
	var i = a == null ? "" : "" + a;
	if(e && (i = i ? i + " " + e : e), r) {
		for(var t in r)
			if(r[t]) i = i ? i + " " + t : t;
			else if(i.length)
			for(var l = t.length, o = 0;
				(o = i.indexOf(t, o)) >= 0;) {
				var s = o + l;
				(o === 0 || A0.includes(i[o - 1])) && (s === i.length || A0.includes(i[s])) ? i = (o === 0 ? "" : i.substring(0, o)) + i.substring(s + 1): o = s
			}
	}
	return i === "" ? null : i
}

function C0(a, e = !1) {
	var r = e ? " !important;" : ";",
		i = "";
	for(var t in a) {
		var l = a[t];
		l != null && l !== "" && (i += " " + t + ": " + l + r)
	}
	return i
}

function X(a) {
	return a[0] !== "-" || a[1] !== "-" ? a.toLowerCase() : a
}

function X1(a, e) {
	if(e) {
		var r = "",
			i, t;
		if(Array.isArray(e) ? (i = e[0], t = e[1]) : i = e, a) {
			a = String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var l = !1,
				o = 0,
				s = !1,
				w = [];
			i && w.push(...Object.keys(i).map(X)), t && w.push(...Object.keys(t).map(X));
			var v = 0,
				f = -1;
			const m = a.length;
			for(var Z = 0; Z < m; Z++) {
				var n = a[Z];
				if(s ? n === "/" && a[Z - 1] === "*" && (s = !1) : l ? l === n && (l = !1) : n === "/" && a[Z + 1] === "*" ? s = !0 : n === '"' || n === "'" ? l = n : n === "(" ? o++ : n === ")" && o--, !s && l === !1 && o === 0) {
					if(n === ":" && f === -1) f = Z;
					else if(n === ";" || Z === m - 1) {
						if(f !== -1) {
							var h = X(a.substring(v, f).trim());
							if(!w.includes(h)) {
								n !== ";" && Z++;
								var c = a.substring(v, Z).trim();
								r += " " + c + ";"
							}
						}
						v = Z + 1, f = -1
					}
				}
			}
		}
		return i && (r += C0(i)), t && (r += C0(t, !0)), r = r.trim(), r === "" ? null : r
	}
	return a == null ? null : String(a)
}

function Q1(a, e, r, i, t, l) {
	var o = a.__className;
	if(L || o !== r || o === void 0) {
		var s = W1(r, i, l);
		(!L || s !== a.getAttribute("class")) && (s == null ? a.removeAttribute("class") : e ? a.className = s : a.setAttribute("class", s)), a.__className = r
	} else if(l && t !== l)
		for(var w in l) {
			var v = !!l[w];
			(t == null || v !== !!t[w]) && a.classList.toggle(w, v)
		}
	return l
}

function Q(a, e = {}, r, i) {
	for(var t in r) {
		var l = r[t];
		e[t] !== l && (r[t] == null ? a.style.removeProperty(t) : a.style.setProperty(t, l, i))
	}
}

function D1(a, e, r, i) {
	var t = a.__style;
	if(L || t !== e) {
		var l = X1(e, i);
		(!L || l !== a.getAttribute("style")) && (l == null ? a.removeAttribute("style") : a.style.cssText = l), a.__style = e
	} else i && (Array.isArray(i) ? (Q(a, r == null ? void 0 : r[0], i[0]), Q(a, r == null ? void 0 : r[1], i[1], "important")) : Q(a, r, i));
	return i
}
const R = Symbol("class"),
	V = Symbol("style"),
	F0 = Symbol("is custom element"),
	U0 = Symbol("is html");

function M5(a) {
	if(L) {
		var e = !1,
			r = () => {
				if(!e) {
					if(e = !0, a.hasAttribute("value")) {
						var i = a.value;
						q(a, "value", null), a.value = i
					}
					if(a.hasAttribute("checked")) {
						var t = a.checked;
						q(a, "checked", null), a.checked = t
					}
				}
			};
		a.__on_r = r, w1(r), P1()
	}
}

function a5(a, e) {
	e ? a.hasAttribute("selected") || a.setAttribute("selected", "") : a.removeAttribute("selected")
}

function q(a, e, r, i) {
	var t = $0(a);
	L && (t[e] = a.getAttribute(e), e === "src" || e === "srcset" || e === "href" && a.nodeName === "LINK") || t[e] !== (t[e] = r) && (e === "loading" && (a[h1] = r), r == null ? a.removeAttribute(e) : typeof r != "string" && y0(a).includes(e) ? a[e] = r : a.setAttribute(e, r))
}

function _0(a, e, r, i, t = !1) {
	var l = $0(a),
		o = l[F0],
		s = !l[U0];
	let w = L && o;
	w && P(!1);
	var v = e || {},
		f = a.tagName === "OPTION";
	for(var Z in e) Z in r || (r[Z] = null);
	r.class ? r.class = G1(r.class) : r[R] && (r.class = null), r[V] && (r.style ? ? (r.style = null));
	var n = y0(a);
	for(const u in r) {
		let d = r[u];
		if(f && u === "value" && d == null) {
			a.value = a.__value = "", v[u] = d;
			continue
		}
		if(u === "class") {
			var h = a.namespaceURI === "http://www.w3.org/1999/xhtml";
			Q1(a, h, d, i, e == null ? void 0 : e[R], r[R]), v[u] = d, v[R] = r[R];
			continue
		}
		if(u === "style") {
			D1(a, d, e == null ? void 0 : e[V], r[V]), v[u] = d, v[V] = r[V];
			continue
		}
		var c = v[u];
		if(d !== c) {
			v[u] = d;
			var m = u[0] + u[1];
			if(m !== "$$")
				if(m === "on") {
					const p = {},
						g = "$$" + u;
					let _ = u.slice(2);
					var A = O1(_);
					if(I1(_) && (_ = _.slice(0, -7), p.capture = !0), !A && c) {
						if(d != null) continue;
						a.removeEventListener(_, v[g], p), v[g] = null
					}
					if(d != null)
						if(A) a[`__${_}`] = d, R1([_]);
						else {
							let k = function(b) {
								v[u].call(this, b)
							};
							v[g] = N1(_, a, k, p)
						} else A && (a[`__${_}`] = void 0)
				} else if(u === "style") q(a, u, d);
			else if(u === "autofocus") V1(a, !!d);
			else if(!o && (u === "__value" || u === "value" && d != null)) a.value = a.__value = d;
			else if(u === "selected" && f) a5(a, d);
			else {
				var M = u;
				s || (M = j1(M));
				var C = M === "defaultValue" || M === "defaultChecked";
				if(d == null && !o && !C)
					if(l[u] = null, M === "value" || M === "checked") {
						let p = a;
						const g = e === void 0;
						if(M === "value") {
							let _ = p.defaultValue;
							p.removeAttribute(M), p.defaultValue = _, p.value = p.__value = g ? _ : null
						} else {
							let _ = p.defaultChecked;
							p.removeAttribute(M), p.defaultChecked = _, p.checked = g ? _ : !1
						}
					} else a.removeAttribute(u);
				else C || n.includes(M) && (o || typeof d != "string") ? a[M] = d : typeof d != "function" && q(a, M, d)
			}
		}
	}
	return w && P(!0), v
}

function $0(a) {
	return a.__attributes ? ? (a.__attributes = {
		[F0]: a.nodeName.includes("-"), [U0]: a.namespaceURI === f1
	})
}
var L0 = new Map;

function y0(a) {
	var e = L0.get(a.nodeName);
	if(e) return e;
	L0.set(a.nodeName, e = []);
	for(var r, i = a, t = Element.prototype; t !== i;) {
		r = p1(i);
		for(var l in r) r[l].set && e.push(l);
		i = v1(i)
	}
	return e
}
const e5 = () => performance.now(),
	x = {
		tick: a => requestAnimationFrame(a),
		now: () => e5(),
		tasks: new Set
	};

function z0() {
	const a = x.now();
	x.tasks.forEach(e => {
		e.c(a) || (x.tasks.delete(e), e.f())
	}), x.tasks.size !== 0 && x.tick(z0)
}

function r5(a) {
	let e;
	return x.tasks.size === 0 && x.tick(z0), {
		promise: new Promise(r => {
			x.tasks.add(e = {
				c: a,
				f: r
			})
		}),
		abort() {
			x.tasks.delete(e)
		}
	}
}

function U(a, e) {
	U1(() => {
		a.dispatchEvent(new CustomEvent(e))
	})
}

function i5(a) {
	if(a === "float") return "cssFloat";
	if(a === "offset") return "cssOffset";
	if(a.startsWith("--")) return a;
	const e = a.split("-");
	return e.length === 1 ? e[0] : e[0] + e.slice(1).map(r => r[0].toUpperCase() + r.slice(1)).join("")
}

function k0(a) {
	const e = {},
		r = a.split(";");
	for(const i of r) {
		const [t, l] = i.split(":");
		if(!t || l === void 0) break;
		const o = i5(t.trim());
		e[o] = l.trim()
	}
	return e
}
const l5 = a => a;

function Z5(a, e, r, i) {
	var t = (a & L1) !== 0,
		l = (a & k1) !== 0,
		o = t && l,
		s = (a & _1) !== 0,
		w = o ? "both" : t ? "in" : "out",
		v, f = e.inert,
		Z = e.style.overflow,
		n, h;

	function c() {
		var u = b1,
			d = z;
		h0(null), p0(null);
		try {
			return v ? ? (v = r()(e, (i == null ? void 0 : i()) ? ? {}, {
				direction: w
			}))
		} finally {
			h0(u), p0(d)
		}
	}
	var m = {
			is_global: s,
			in () {
				var u;
				if(e.inert = f, !t) {
					h == null || h.abort(), (u = h == null ? void 0 : h.reset) == null || u.call(h);
					return
				}
				l || n == null || n.abort(), U(e, "introstart"), n = D(e, c(), h, 1, () => {
					U(e, "introend"), n == null || n.abort(), n = v = void 0, e.style.overflow = Z
				})
			},
			out(u) {
				if(!l) {
					u == null || u(), v = void 0;
					return
				}
				e.inert = !0, U(e, "outrostart"), h = D(e, c(), n, 0, () => {
					U(e, "outroend"), u == null || u()
				})
			},
			stop: () => {
				n == null || n.abort(), h == null || h.abort()
			}
		},
		A = z;
	if((A.transitions ? ? (A.transitions = [])).push(m), t && F1) {
		var M = s;
		if(!M) {
			for(var C = A.parent; C && (C.f & m1) !== 0;)
				for(;
					(C = C.parent) && (C.f & M1) === 0;);
			M = !C || (C.f & Z1) !== 0
		}
		M && A1(() => {
			C1(() => m.in())
		})
	}
}

function D(a, e, r, i, t) {
	var l = i === 1;
	if(g1(e)) {
		var o, s = !1;
		return V0(() => {
			if(!s) {
				var A = e({
					direction: l ? "in" : "out"
				});
				o = D(a, A, r, i, t)
			}
		}), {
			abort: () => {
				s = !0, o == null || o.abort()
			},
			deactivate: () => o.deactivate(),
			reset: () => o.reset(),
			t: () => o.t()
		}
	}
	if(r == null || r.deactivate(), !(e != null && e.duration)) return t(), {
		abort: I,
		deactivate: I,
		reset: I,
		t: () => i
	};
	const {
		delay: w = 0,
		css: v,
		tick: f,
		easing: Z = l5
	} = e;
	var n = [];
	if(l && r === void 0 && (f && f(0, 1), v)) {
		var h = k0(v(0, 1));
		n.push(h, h)
	}
	var c = () => 1 - i,
		m = a.animate(n, {
			duration: w
		});
	return m.onfinish = () => {
		var A = (r == null ? void 0 : r.t()) ? ? 1 - i;
		r == null || r.abort();
		var M = i - A,
			C = e.duration * Math.abs(M),
			u = [];
		if(C > 0) {
			var d = !1;
			if(v)
				for(var p = Math.ceil(C / 16.666666666666668), g = 0; g <= p; g += 1) {
					var _ = A + M * Z(g / p),
						k = k0(v(_, 1 - _));
					u.push(k), d || (d = k.overflow === "hidden")
				}
			d && (a.style.overflow = "hidden"), c = () => {
				var b = m.currentTime;
				return A + M * Z(b / C)
			}, f && r5(() => {
				if(m.playState !== "running") return !1;
				var b = c();
				return f(b, 1 - b), !0
			})
		}
		m = a.animate(u, {
			duration: C,
			fill: "forwards"
		}), m.onfinish = () => {
			c = () => i, f == null || f(i, 1 - i), t()
		}
	}, {
		abort: () => {
			m && (m.cancel(), m.effect = null, m.onfinish = I)
		},
		deactivate: () => {
			t = I
		},
		reset: () => {
			i === 0 && (f == null || f(1, 0))
		},
		t: () => c()
	}
}
const A5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM17.25 4.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM17.25 17a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5ZM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10ZM17.25 10.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM10 16.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
			}]
		}
	},
	C5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	_5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	L5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "m19.5 8.25-7.5 7.5-7.5-7.5"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	k5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	g5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
			}, {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	b5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2.22 1.97a.75.75 0 0 0 0 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 0 0-1.06 0ZM8.75 8.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M3.25 3A2.25 2.25 0 0 0 1 5.25v9.5A2.25 2.25 0 0 0 3.25 17h13.5A2.25 2.25 0 0 0 19 14.75v-9.5A2.25 2.25 0 0 0 16.75 3H3.25Zm.943 8.752a.75.75 0 0 1 .055-1.06L6.128 9l-1.88-1.693a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.06-.055ZM9.75 10.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	x5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034-4.81-2.748ZM14 5.357 8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11V5.357ZM7.25 14.435V8.43L2 5.357V11c0 .27.144.518.378.651l4.872 2.784Z"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M10.362 1.093a.75.75 0 0 0-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925ZM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0 0 18 14.25V6.443ZM9.25 18.693v-8.25l-7.25-4v7.807a.75.75 0 0 0 .388.657l6.862 3.786Z"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z"
			}]
		}
	},
	H5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M2.5 3.5A1.5 1.5 0 0 1 4 2h4.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12a1.5 1.5 0 0 1 .439 1.061V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9Z"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13Z"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z"
			}, {
				d: "M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"
			}]
		}
	},
	T5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	E5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M3 3.5A1.5 1.5 0 0 1 4.5 2h1.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 9.62 4H11.5A1.5 1.5 0 0 1 13 5.5v1H3v-3ZM3.081 8a1.5 1.5 0 0 0-1.423 1.974l1 3A1.5 1.5 0 0 0 4.081 14h7.838a1.5 1.5 0 0 0 1.423-1.026l1-3A1.5 1.5 0 0 0 12.919 8H3.081Z"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M4.75 3A1.75 1.75 0 0 0 3 4.75v2.752l.104-.002h13.792c.035 0 .07 0 .104.002V6.75A1.75 1.75 0 0 0 15.25 5h-3.836a.25.25 0 0 1-.177-.073L9.823 3.513A1.75 1.75 0 0 0 8.586 3H4.75ZM3.104 9a1.75 1.75 0 0 0-1.673 2.265l1.385 4.5A1.75 1.75 0 0 0 4.488 17h11.023a1.75 1.75 0 0 0 1.673-1.235l1.384-4.5A1.75 1.75 0 0 0 16.896 9H3.104Z"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z"
			}]
		}
	},
	S5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	B5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M5 12h14"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	I5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M11.914 4.086a2 2 0 0 0-2.828 0l-5 5a2 2 0 1 0 2.828 2.828l.556-.555a.75.75 0 0 1 1.06 1.06l-.555.556a3.5 3.5 0 0 1-4.95-4.95l5-5a3.5 3.5 0 0 1 4.95 4.95l-1.972 1.972a2.125 2.125 0 0 1-3.006-3.005L9.97 4.97a.75.75 0 1 1 1.06 1.06L9.058 8.003a.625.625 0 0 0 .884.883l1.972-1.972a2 2 0 0 0 0-2.828Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	N5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	R5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			rect: [{
				width: "10",
				height: "10",
				x: "3",
				y: "3",
				rx: "1.5"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M5.25 3A2.25 2.25 0 0 0 3 5.25v9.5A2.25 2.25 0 0 0 5.25 17h9.5A2.25 2.25 0 0 0 17 14.75v-9.5A2.25 2.25 0 0 0 14.75 3h-9.5Z"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	V5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	j5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	O5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z",
				"clip-rule": "evenodd"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z",
				"clip-rule": "evenodd"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",
				"clip-rule": "evenodd"
			}]
		}
	},
	P5 = {
		default: {
			a: {
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18 18 6M6 6l12 12"
			}]
		},
		micro: {
			a: {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
			}]
		},
		mini: {
			a: {
				viewBox: "0 0 20 20",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
			}]
		},
		solid: {
			a: {
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": "true"
			},
			path: [{
				"fill-rule": "evenodd",
				d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
				"clip-rule": "evenodd"
			}]
		}
	};
var t5 = j0("<path></path>"),
	o5 = j0("<svg></svg>");

function F5(a, e) {
	const r = M0(e, ["children", "$$slots", "$$events", "$$legacy"]),
		i = M0(r, ["src", "size", "solid", "mini", "micro"]);
	x1(e, !1);
	const t = N0();
	let l = N(e, "src", 8),
		o = N(e, "size", 12, "100%"),
		s = N(e, "solid", 8, !1),
		w = N(e, "mini", 8, !1),
		v = N(e, "micro", 8, !1);
	if(o() !== "100%" && o().slice(-1) != "x" && o().slice(-1) != "m" && o().slice(-1) != "%") try {
		o(parseInt(o()) + "px")
	} catch {
		o("100%")
	}
	H1(() => (F(l()), F(s()), F(w()), F(v())), () => {
		var n;
		S1(t, (n = l()) == null ? void 0 : n[s() ? "solid" : w() ? "mini" : v() ? "micro" : "default"])
	}), T1(), $1();
	var f = o5();
	let Z;
	q1(f, 5, () => {
		var n;
		return((n = O(t)) == null ? void 0 : n.path) ? ? []
	}, y1, (n, h) => {
		var c = t5();
		let m;
		w0(() => m = _0(c, m, {...O(h)
		})), m0(n, c)
	}), B1(f), w0(() => {
		var n;
		return Z = _0(f, Z, {...(n = O(t)) == null ? void 0 : n.a, xmlns: "http://www.w3.org/2000/svg", width: o(), height: o(), "aria-hidden": "true", ...i
		})
	}), m0(a, f), E1()
}
const a0 = E([]),
	n5 = E(null);

function U5(a) {
	a0.update(e => {
		const r = e.findIndex(i => i.id === a.id);
		return r >= 0 ? (e[r] = a, [...e]) : [...e, a].sort((i, t) => (i.pos || 100) - (t.pos || 100))
	}), l0(a0).length === 1 && s5(a.id)
}

function s5(a) {
	l0(a0).some(i => i.id === a) ? n5.set(a) : console.warn(`tab ${a} does not exist.`)
}

function d5(a, e, r, i) {
	if(typeof e == "function" ? a !== e || !0 : !e.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return r === "m" ? i : r === "a" ? i.call(a) : i ? i.value : e.get(a)
}

function u5(a, e, r, i, t) {
	if(typeof e == "function" ? a !== e || !0 : !e.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return e.set(a, r), r
}
var y;
const $5 = "__TAURI_TO_IPC_KEY__";

function y5(a, e = !1) {
	return window.__TAURI_INTERNALS__.transformCallback(a, e)
}
async function T(a, e = {}, r) {
	return window.__TAURI_INTERNALS__.invoke(a, e, r)
}
class z5 {
	get rid() {
		return d5(this, y, "f")
	}
	constructor(e) {
		y.set(this, void 0), u5(this, y, e)
	}
	async close() {
		return T("plugin:resources|close", {
			rid: this.rid
		})
	}
}
y = new WeakMap;
const g0 = {
		id: "untitled1",
		name: "untitled1.lua",
		content: "-- getvisual.cc",
		state: {}
	},
	t0 = E({
		files: [g0],
		active: g0.id
	}),
	q5 = E(null);

function J5(a, e) {
	t0.update(r => ({...r, files: r.files.map(i => i.id === a ? {...i, content: e
		} : i)
	}))
}
var e0;
(function(a) {
	a[a.Audio = 1] = "Audio", a[a.Cache = 2] = "Cache", a[a.Config = 3] = "Config", a[a.Data = 4] = "Data", a[a.LocalData = 5] = "LocalData", a[a.Document = 6] = "Document", a[a.Download = 7] = "Download", a[a.Picture = 8] = "Picture", a[a.Public = 9] = "Public", a[a.Video = 10] = "Video", a[a.Resource = 11] = "Resource", a[a.Temp = 12] = "Temp", a[a.AppConfig = 13] = "AppConfig", a[a.AppData = 14] = "AppData", a[a.AppLocalData = 15] = "AppLocalData", a[a.AppCache = 16] = "AppCache", a[a.AppLog = 17] = "AppLog", a[a.Desktop = 18] = "Desktop", a[a.Executable = 19] = "Executable", a[a.Font = 20] = "Font", a[a.Home = 21] = "Home", a[a.Runtime = 22] = "Runtime", a[a.Template = 23] = "Template"
})(e0 || (e0 = {}));
async function q0() {
	return T("plugin:path|resolve_directory", {
		directory: e0.AppConfig
	})
}
async function j(...a) {
	return T("plugin:path|join", {
		paths: a
	})
}
var b0;
(function(a) {
	a[a.Start = 0] = "Start", a[a.Current = 1] = "Current", a[a.End = 2] = "End"
})(b0 || (b0 = {}));
async function x0(a, e) {
	if(a instanceof URL && a.protocol !== "file:") throw new TypeError("Must be a file URL.");
	await T("plugin:fs|mkdir", {
		path: a instanceof URL ? a.toString() : a,
		options: e
	})
}
async function H0(a, e) {
	if(a instanceof URL && a.protocol !== "file:") throw new TypeError("Must be a file URL.");
	const r = await T("plugin:fs|read_text_file", {
			path: a instanceof URL ? a.toString() : a,
			options: e
		}),
		i = r instanceof ArrayBuffer ? r : Uint8Array.from(r);
	return new TextDecoder().decode(i)
}
async function T0(a, e, r) {
	if(a instanceof URL && a.protocol !== "file:") throw new TypeError("Must be a file URL.");
	const i = new TextEncoder;
	await T("plugin:fs|write_text_file", i.encode(e), {
		headers: {
			path: encodeURIComponent(a instanceof URL ? a.toString() : a),
			options: JSON.stringify(r)
		}
	})
}
async function J(a, e) {
	if(a instanceof URL && a.protocol !== "file:") throw new TypeError("Must be a file URL.");
	return await T("plugin:fs|exists", {
		path: a instanceof URL ? a.toString() : a,
		options: e
	})
}
const J0 = E([]),
	$ = (a, e, r) => {
		const i = {
			id: Math.random().toString(36).substring(2, 10),
			timestamp: new Date,
			type: a,
			msg: e,
			data: r
		};
		return J0.update(t => [i, ...t].slice(0, 100)), i
	},
	K0 = {
		info: (a, e) => $("info", a, e),
		warn: (a, e) => $("warn", a, e),
		error: (a, e) => $("error", a, e),
		success: (a, e) => $("success", a, e),
		clear: () => J0.set([])
	};

function c5() {
	const {
		subscribe: a,
		update: e
	} = E([]);

	function r(l) {
		const s = {... {
				duration: 5e3,
				dismissible: !0
			}, ...l, id: Date.now().toString()
		};
		return e(w => [s, ...w]), s.duration && s.duration > 0 && setTimeout(() => {
			i(s.id)
		}, s.duration), s.id
	}

	function i(l) {
		e(o => o.filter(s => s.id !== l))
	}

	function t() {
		e(() => [])
	}
	return {
		subscribe: a,
		post: r,
		del: i,
		clear: t,
		info: (l, o = {}) => r({
			type: "info",
			msg: l,
			...o
		}),
		success: (l, o = {}) => r({
			type: "success",
			msg: l,
			...o
		}),
		warning: (l, o = {}) => r({
			type: "warning",
			msg: l,
			...o
		}),
		error: (l, o = {}) => r({
			type: "error",
			msg: l,
			...o
		})
	}
}
const Y0 = c5();
async function K5() {
	try {
		const a = l0(t0),
			e = await q0(),
			r = await j(e, "bin");
		await J(r) || await x0(r, {
			recursive: !0
		});
		const i = await j(r, "temp");
		await J(i) || await x0(i, {
			recursive: !0
		});
		const l = {
				files: await Promise.all(a.files.map(async s => {
					let w;
					return(s.name.startsWith("untitled") || s.id.startsWith("file-")) && (w = await j(i, s.name), await T0(w, s.content)), {
						id: s.id,
						name: s.name,
						content: s.content,
						state: {
							cursorPos: s.state.cursorPos,
							scrollPos: s.state.scrollPos
						},
						filepath: w
					}
				})),
				active: a.active
			},
			o = await j(r, "tabs.json");
		return await T0(o, JSON.stringify(l, null, 4)), K0.success("editor tabs saved successfully"), !0
	} catch(a) {
		return console.error("Failed to save tabs:", a), Y0.error("Failed to save editor tabs", {
			title: "Editor"
		}), !1
	}
}
async function Y5() {
	try {
		const a = await q0(),
			e = await j(a, "bin", "tabs.json");
		if(!await J(e)) return;
		const r = await H0(e),
			i = JSON.parse(r),
			t = await Promise.all(i.files.map(async l => {
				let o = l.content;
				if(l.filepath && await J(l.filepath)) try {
					o = await H0(l.filepath)
				} catch {
					K0.warn(`Failed to read file ${l.filepath}`)
				}
				return {
					id: l.id,
					name: l.name,
					content: o,
					state: {
						cursorPos: l.state.cursorPos,
						scrollPos: l.state.scrollPos,
						vstate: null
					}
				}
			}));
		t.length > 0 && t0.set({
			files: t,
			active: i.active
		})
	} catch(a) {
		console.error("Failed to load tabs:", a), Y0.error("Failed to load editor tabs", {
			title: "Editor"
		})
	}
}
const f5 = a => a;

function v5(a) {
	const e = a - 1;
	return e * e * e + 1
}

function E0(a) {
	const e = typeof a == "string" && a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return e ? [parseFloat(e[1]), e[2] || "px"] : [a, "px"]
}

function G5(a, {
	delay: e = 0,
	duration: r = 400,
	easing: i = f5
} = {}) {
	const t = +getComputedStyle(a).opacity;
	return {
		delay: e,
		duration: r,
		easing: i,
		css: l => `opacity: ${l*t}`
	}
}

function W5(a, {
	delay: e = 0,
	duration: r = 400,
	easing: i = v5,
	x: t = 0,
	y: l = 0,
	opacity: o = 0
} = {}) {
	const s = getComputedStyle(a),
		w = +s.opacity,
		v = s.transform === "none" ? "" : s.transform,
		f = w * (1 - o),
		[Z, n] = E0(t),
		[h, c] = E0(l);
	return {
		delay: e,
		duration: r,
		easing: i,
		css: (m, A) => `
			transform: ${v} translate(${(1-m)*Z}${n}, ${(1-m)*h}${c});
			opacity: ${w-f*A}`
	}
}
export {
	j as A, C5 as B, _5 as C, H5 as D, T5 as E, E5 as F, J as G, x0 as H, F5 as I, J5 as J, G5 as K, M5 as L, B5 as M, A5 as N, U5 as O, N5 as P, k5 as Q, z5 as R, $5 as S, V5 as T, x5 as U, K0 as V, g5 as W, P5 as X, j5 as Y, s5 as a, n5 as b, T as c, y5 as d, q1 as e, q as f, K5 as g, R5 as h, y1 as i, Z5 as j, S5 as k, O5 as l, W5 as m, Y0 as n, Y5 as o, b5 as p, L5 as q, J0 as r, Q1 as s, a0 as t, t0 as u, q5 as v, H0 as w, T0 as x, I5 as y, q0 as z
};