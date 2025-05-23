import {
	aA as b, aB as L, aC as W, a1 as w, H as G, q as J, I as U, a6 as $, Q as O, aF as x, aG as K, aH as Q, O as p, W as f, R as k, J as N, N as A, aI as I, aq as X, ad as Z, ah as S, V as T, X as z, ag as ee, aJ as te, a9 as re, a0 as ae, aK as ne, Z as se, p as oe, d as ie, a as ue
}
from "./BKJHFIjU.js";
const fe = ["touchstart", "touchmove"];

function de(e) {
	return fe.includes(e)
}
let C = !1;

function ce() {
	C || (C = !0, document.addEventListener("reset", e => {
		Promise.resolve().then(() => {
			var t;
			if(!e.defaultPrevented)
				for(const r of e.target.elements)(t = r.__on_r) == null || t.call(r)
		})
	}, {
		capture: !0
	}))
}

function q(e) {
	var t = W,
		r = w;
	b(null), L(null);
	try {
		return e()
	} finally {
		b(t), L(r)
	}
}

function ge(e, t, r, s = r) {
	e.addEventListener(t, () => q(r));
	const n = e.__on_r;
	n ? e.__on_r = () => {
		n(), s(!0)
	} : e.__on_r = () => s(!0), ce()
}
const B = new Set,
	P = new Set;

function le(e, t, r, s = {}) {
	function n(a) {
		if(s.capture || y.call(t, a), !a.cancelBubble) return q(() => r == null ? void 0 : r.call(this, a))
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? J(() => {
		t.addEventListener(e, n, s)
	}) : t.addEventListener(e, n, s), n
}

function me(e, t, r, s, n) {
	var a = {
			capture: s,
			passive: n
		},
		o = le(e, t, r, a);
	(t === document.body || t === window || t === document) && G(() => {
		t.removeEventListener(e, o, a)
	})
}

function ye(e) {
	for(var t = 0; t < e.length; t++) B.add(e[t]);
	for(var r of P) r(e)
}

function y(e) {
	var D;
	var t = this,
		r = t.ownerDocument,
		s = e.type,
		n = ((D = e.composedPath) == null ? void 0 : D.call(e)) || [],
		a = n[0] || e.target,
		o = 0,
		_ = e.__root;
	if(_) {
		var c = n.indexOf(_);
		if(c !== -1 && (t === document || t === window)) {
			e.__root = t;
			return
		}
		var g = n.indexOf(t);
		if(g === -1) return;
		c <= g && (o = c)
	}
	if(a = n[o] || e.target, a !== t) {
		U(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || r
			}
		});
		var R = W,
			d = w;
		b(null), L(null);
		try {
			for(var i, u = []; a !== null;) {
				var l = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var h = a["__" + s];
					if(h != null && (!a.disabled || e.target === a))
						if($(h)) {
							var [Y, ...j] = h;
							Y.apply(a, [e, ...j])
						} else h.call(a, e)
				} catch(E) {
					i ? u.push(E) : i = E
				}
				if(e.cancelBubble || l === t || l === null) break;
				a = l
			}
			if(i) {
				for(let E of u) queueMicrotask(() => {
					throw E
				});
				throw i
			}
		} finally {
			e.__root = t, delete e.currentTarget, b(R), L(d)
		}
	}
}

function _e(e) {
	var t = document.createElement("template");
	return t.innerHTML = e, t.content
}

function v(e, t) {
	var r = w;
	r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t)
}

function we(e, t) {
	var r = (t & K) !== 0,
		s = (t & Q) !== 0,
		n, a = !e.startsWith("<!>");
	return() => {
		if(p) return v(f, null), f;
		n === void 0 && (n = _e(a ? e : "<!>" + e), r || (n = O(n)));
		var o = s || x ? document.importNode(n, !0) : n.cloneNode(!0);
		if(r) {
			var _ = O(o),
				c = o.lastChild;
			v(_, c)
		} else v(o, o);
		return o
	}
}

function Ee(e = "") {
	if(!p) {
		var t = N(e + "");
		return v(t, t), t
	}
	var r = f;
	return r.nodeType !== 3 && (r.before(r = N()), A(r)), v(r, r), r
}

function Te() {
	if(p) return v(f, null), f;
	var e = document.createDocumentFragment(),
		t = document.createComment(""),
		r = N();
	return e.append(t, r), v(t, r), e
}

function be(e, t) {
	if(p) {
		w.nodes_end = f, k();
		return
	}
	e !== null && e.before(t)
}
let H = !0;

function Le(e, t) {
	var r = t == null ? "" : typeof t == "object" ? t + "" : t;
	r !== (e.__t ? ? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "")
}

function ve(e, t) {
	return F(e, t)
}

function Ne(e, t) {
	I(), t.intro = t.intro ? ? !1;
	const r = t.target,
		s = p,
		n = f;
	try {
		for(var a = O(r); a && (a.nodeType !== 8 || a.data !== X);) a = Z(a);
		if(!a) throw S;
		T(!0), A(a), k();
		const o = F(e, {...t, anchor: a
		});
		if(f === null || f.nodeType !== 8 || f.data !== z) throw ee(), S;
		return T(!1), o
	} catch(o) {
		if(o === S) return t.recover === !1 && te(), I(), re(r), T(!1), ve(e, t);
		throw o
	} finally {
		T(s), A(n)
	}
}
const m = new Map;

function F(e, {
	target: t,
	anchor: r,
	props: s = {},
	events: n,
	context: a,
	intro: o = !0
}) {
	I();
	var _ = new Set,
		c = d => {
			for(var i = 0; i < d.length; i++) {
				var u = d[i];
				if(!_.has(u)) {
					_.add(u);
					var l = de(u);
					t.addEventListener(u, y, {
						passive: l
					});
					var h = m.get(u);
					h === void 0 ? (document.addEventListener(u, y, {
						passive: l
					}), m.set(u, 1)) : m.set(u, h + 1)
				}
			}
		};
	c(ae(B)), P.add(c);
	var g = void 0,
		R = ne(() => {
			var d = r ? ? t.appendChild(N());
			return se(() => {
				if(a) {
					oe({});
					var i = ie;
					i.c = a
				}
				n && (s.$$events = n), p && v(d, null), H = o, g = e(d, s) || {}, H = !0, p && (w.nodes_end = f), a && ue()
			}), () => {
				var l;
				for(var i of _) {
					t.removeEventListener(i, y);
					var u = m.get(i);
					--u === 0 ? (document.removeEventListener(i, y), m.delete(i)) : m.set(i, u)
				}
				P.delete(c), d !== r && ((l = d.parentNode) == null || l.removeChild(d))
			}
		});
	return M.set(g, R), g
}
let M = new WeakMap;

function Re(e, t) {
	const r = M.get(e);
	return r ? (M.delete(e), r(t)) : Promise.resolve()
}
const he = "5";
var V;
typeof window < "u" && ((V = window.__svelte ? ? (window.__svelte = {})).v ? ? (V.v = new Set)).add(he);
export {
	be as a, v as b, _e as c, ye as d, Te as e, Ee as f, me as g, Ne as h, H as i, ce as j, ge as l, ve as m, Le as s, we as t, Re as u, q as w
};