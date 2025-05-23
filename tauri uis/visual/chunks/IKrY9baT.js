import {
	z as j, a8 as L, a9 as N, aa as W, ab as E, I as x, ac as z, ad as w, ae as G, af as J, ag as K, m as v, w as c, n as H, ah as k, C as I, ai as P, H as Q, aj as X, ak as A, D as T, al as Z, am as ee, an as te, ao as re, ap as ae, aq as ne, q as oe, p as ie, c as se, j as ue
}
from "./QZtleaAQ.js";

function me(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const le = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function ye(e) {
	return le.includes(e)
}
const ce = {
	formnovalidate: "formNoValidate",
	ismap: "isMap",
	nomodule: "noModule",
	playsinline: "playsInline",
	readonly: "readOnly",
	defaultvalue: "defaultValue",
	defaultchecked: "defaultChecked",
	srcobject: "srcObject",
	novalidate: "noValidate",
	allowfullscreen: "allowFullscreen",
	disablepictureinpicture: "disablePictureInPicture",
	disableremoteplayback: "disableRemotePlayback"
};

function ge(e) {
	return e = e.toLowerCase(), ce[e] ? ? e
}
const fe = ["touchstart", "touchmove"];

function de(e) {
	return fe.includes(e)
}

function we(e, t) {
	if(t) {
		const r = document.body;
		e.autofocus = !0, j(() => {
			document.activeElement === r && e.focus()
		})
	}
}
let M = !1;

function _e() {
	M || (M = !0, document.addEventListener("reset", e => {
		Promise.resolve().then(() => {
			var t;
			if(!e.defaultPrevented)
				for(const r of e.target.elements)(t = r.__on_r) == null || t.call(r)
		})
	}, {
		capture: !0
	}))
}

function $(e) {
	var t = W,
		r = E;
	L(null), N(null);
	try {
		return e()
	} finally {
		L(t), N(r)
	}
}

function Ee(e, t, r, o = r) {
	e.addEventListener(t, () => $(r));
	const n = e.__on_r;
	n ? e.__on_r = () => {
		n(), o(!0)
	} : e.__on_r = () => o(!0), _e()
}
const q = new Set,
	R = new Set;

function be(e, t, r, o = {}) {
	function n(a) {
		if(o.capture || g.call(t, a), !a.cancelBubble) return $(() => r == null ? void 0 : r.call(this, a))
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? j(() => {
		t.addEventListener(e, n, o)
	}) : t.addEventListener(e, n, o), n
}

function Te(e) {
	for(var t = 0; t < e.length; t++) q.add(e[t]);
	for(var r of R) r(e)
}

function g(e) {
	var D;
	var t = this,
		r = t.ownerDocument,
		o = e.type,
		n = ((D = e.composedPath) == null ? void 0 : D.call(e)) || [],
		a = n[0] || e.target,
		i = 0,
		f = e.__root;
	if(f) {
		var l = n.indexOf(f);
		if(l !== -1 && (t === document || t === window)) {
			e.__root = t;
			return
		}
		var m = n.indexOf(t);
		if(m === -1) return;
		l <= m && (i = l)
	}
	if(a = n[i] || e.target, a !== t) {
		x(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || r
			}
		});
		var S = W,
			d = E;
		L(null), N(null);
		try {
			for(var s, u = []; a !== null;) {
				var p = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var h = a["__" + o];
					if(h != null && (!a.disabled || e.target === a))
						if(z(h)) {
							var [U, ...Y] = h;
							U.apply(a, [e, ...Y])
						} else h.call(a, e)
				} catch(b) {
					s ? u.push(b) : s = b
				}
				if(e.cancelBubble || p === t || p === null) break;
				a = p
			}
			if(s) {
				for(let b of u) queueMicrotask(() => {
					throw b
				});
				throw s
			}
		} finally {
			e.__root = t, delete e.currentTarget, L(S), N(d)
		}
	}
}

function B(e) {
	var t = document.createElement("template");
	return t.innerHTML = e, t.content
}

function _(e, t) {
	var r = E;
	r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t)
}

function Le(e, t) {
	var r = (t & J) !== 0,
		o = (t & K) !== 0,
		n, a = !e.startsWith("<!>");
	return() => {
		if(v) return _(c, null), c;
		n === void 0 && (n = B(a ? e : "<!>" + e), r || (n = w(n)));
		var i = o || G ? document.importNode(n, !0) : n.cloneNode(!0);
		if(r) {
			var f = w(i),
				l = i.lastChild;
			_(f, l)
		} else _(i, i);
		return i
	}
}

function Ne(e, t, r = "svg") {
	var o = !e.startsWith("<!>"),
		n = `<${r}>${o?e:"<!>"+e}</${r}>`,
		a;
	return() => {
		if(v) return _(c, null), c;
		if(!a) {
			var i = B(n),
				f = w(i);
			a = w(f)
		}
		var l = a.cloneNode(!0);
		return _(l, l), l
	}
}

function ke(e = "") {
	if(!v) {
		var t = k(e + "");
		return _(t, t), t
	}
	var r = c;
	return r.nodeType !== 3 && (r.before(r = k()), I(r)), _(r, r), r
}

function Se() {
	if(v) return _(c, null), c;
	var e = document.createDocumentFragment(),
		t = document.createComment(""),
		r = k();
	return e.append(t, r), _(t, r), e
}

function Ae(e, t) {
	if(v) {
		E.nodes_end = c, H();
		return
	}
	e !== null && e.before(t)
}
let V = !0;

function Ie(e, t) {
	var r = t == null ? "" : typeof t == "object" ? t + "" : t;
	r !== (e.__t ? ? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "")
}

function pe(e, t) {
	return F(e, t)
}

function Pe(e, t) {
	P(), t.intro = t.intro ? ? !1;
	const r = t.target,
		o = v,
		n = c;
	try {
		for(var a = w(r); a && (a.nodeType !== 8 || a.data !== Q);) a = X(a);
		if(!a) throw A;
		T(!0), I(a), H();
		const i = F(e, {...t, anchor: a
		});
		if(c === null || c.nodeType !== 8 || c.data !== Z) throw ee(), A;
		return T(!1), i
	} catch(i) {
		if(i === A) return t.recover === !1 && te(), P(), re(r), T(!1), pe(e, t);
		throw i
	} finally {
		T(o), I(n)
	}
}
const y = new Map;

function F(e, {
	target: t,
	anchor: r,
	props: o = {},
	events: n,
	context: a,
	intro: i = !0
}) {
	P();
	var f = new Set,
		l = d => {
			for(var s = 0; s < d.length; s++) {
				var u = d[s];
				if(!f.has(u)) {
					f.add(u);
					var p = de(u);
					t.addEventListener(u, g, {
						passive: p
					});
					var h = y.get(u);
					h === void 0 ? (document.addEventListener(u, g, {
						passive: p
					}), y.set(u, 1)) : y.set(u, h + 1)
				}
			}
		};
	l(ae(q)), R.add(l);
	var m = void 0,
		S = ne(() => {
			var d = r ? ? t.appendChild(k());
			return oe(() => {
				if(a) {
					ie({});
					var s = se;
					s.c = a
				}
				n && (o.$$events = n), v && _(d, null), V = i, m = e(d, o) || {}, V = !0, v && (E.nodes_end = c), a && ue()
			}), () => {
				var p;
				for(var s of f) {
					t.removeEventListener(s, g);
					var u = y.get(s);
					--u === 0 ? (document.removeEventListener(s, g), y.delete(s)) : y.set(s, u)
				}
				R.delete(l), d !== r && ((p = d.parentNode) == null || p.removeChild(d))
			}
		});
	return O.set(m, S), m
}
let O = new WeakMap;

function Re(e, t) {
	const r = O.get(e);
	return r ? (O.delete(e), r(t)) : Promise.resolve()
}
const ve = "5";
var C;
typeof window < "u" && ((C = window.__svelte ? ? (window.__svelte = {})).v ? ? (C.v = new Set)).add(ve);
export {
	Ae as a, ke as b, Se as c, Te as d, be as e, we as f, ye as g, Pe as h, me as i, _e as j, V as k, Ne as l, pe as m, ge as n, Ee as o, Ie as s, Le as t, Re as u, $ as w
};