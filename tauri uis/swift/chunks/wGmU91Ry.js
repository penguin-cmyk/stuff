import {
	O as S, a1 as I, ap as B, aw as G, ax as M, e as P, ay as U, az as D, q as K, G as m, aA as R, aB as L, aC as W, u as H, aD as J, aE as Q
}
from "./BKJHFIjU.js";
import {
	w as V, i as X
}
from "./B14H4HNW.js";

function x(t) {
	var r, a, i = "";
	if(typeof t == "string" || typeof t == "number") i += t;
	else if(typeof t == "object")
		if(Array.isArray(t)) {
			var s = t.length;
			for(r = 0; r < s; r++) t[r] && (a = x(t[r])) && (i && (i += " "), i += a)
		} else
			for(a in t) t[a] && (i && (i += " "), i += a);
	return i
}

function Y() {
	for(var t, r, a = 0, i = "", s = arguments.length; a < s; a++)(t = arguments[a]) && (r = x(t)) && (i && (i += " "), i += r);
	return i
}

function ot(t) {
	return typeof t == "object" ? Y(t) : t ? ? ""
}
const j = [...
	` 	
\r\f \v\uFEFF`
];

function Z(t, r, a) {
	var i = t == null ? "" : "" + t;
	if(r && (i = i ? i + " " + r : r), a) {
		for(var s in a)
			if(a[s]) i = i ? i + " " + s : s;
			else if(i.length)
			for(var e = s.length, n = 0;
				(n = i.indexOf(s, n)) >= 0;) {
				var f = n + e;
				(n === 0 || j.includes(i[n - 1])) && (f === i.length || j.includes(i[f])) ? i = (n === 0 ? "" : i.substring(0, n)) + i.substring(f + 1): n = f
			}
	}
	return i === "" ? null : i
}

function ct(t, r) {
	return t == null ? null : String(t)
}

function ut(t, r, a, i, s, e) {
	var n = t.__className;
	if(S || n !== a) {
		var f = Z(a, i, e);
		(!S || f !== t.getAttribute("class")) && (f == null ? t.removeAttribute("class") : t.className = f), t.__className = a
	} else if(e && s !== e)
		for(var y in e) {
			var d = !!e[y];
			(s == null || d !== !!s[y]) && t.classList.toggle(y, d)
		}
	return e
}
const tt = () => performance.now(),
	g = {
		tick: t => requestAnimationFrame(t),
		now: () => tt(),
		tasks: new Set
	};

function z() {
	const t = g.now();
	g.tasks.forEach(r => {
		r.c(t) || (g.tasks.delete(r), r.f())
	}), g.tasks.size !== 0 && g.tick(z)
}

function rt(t) {
	let r;
	return g.tasks.size === 0 && g.tick(z), {
		promise: new Promise(a => {
			g.tasks.add(r = {
				c: t,
				f: a
			})
		}),
		abort() {
			g.tasks.delete(r)
		}
	}
}

function T(t, r) {
	V(() => {
		t.dispatchEvent(new CustomEvent(r))
	})
}

function it(t) {
	if(t === "float") return "cssFloat";
	if(t === "offset") return "cssOffset";
	if(t.startsWith("--")) return t;
	const r = t.split("-");
	return r.length === 1 ? r[0] : r[0] + r.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function k(t) {
	const r = {},
		a = t.split(";");
	for(const i of a) {
		const [s, e] = i.split(":");
		if(!s || e === void 0) break;
		const n = it(s.trim());
		r[n] = e.trim()
	}
	return r
}
const at = t => t;

function vt(t, r, a, i) {
	var s = (t & J) !== 0,
		e = (t & Q) !== 0,
		n = s && e,
		f = (t & U) !== 0,
		y = n ? "both" : s ? "in" : "out",
		d, v = r.inert,
		b = r.style.overflow,
		c, o;

	function h() {
		var l = W,
			A = I;
		R(null), L(null);
		try {
			return d ? ? (d = a()(r, (i == null ? void 0 : i()) ? ? {}, {
				direction: y
			}))
		} finally {
			R(l), L(A)
		}
	}
	var u = {
			is_global: f,
			in () {
				var l;
				if(r.inert = v, !s) {
					o == null || o.abort(), (l = o == null ? void 0 : o.reset) == null || l.call(o);
					return
				}
				e || c == null || c.abort(), T(r, "introstart"), c = $(r, h(), o, 1, () => {
					T(r, "introend"), c == null || c.abort(), c = d = void 0, r.style.overflow = b
				})
			},
			out(l) {
				if(!e) {
					l == null || l(), d = void 0;
					return
				}
				r.inert = !0, T(r, "outrostart"), o = $(r, h(), c, 0, () => {
					T(r, "outroend"), l == null || l()
				})
			},
			stop: () => {
				c == null || c.abort(), o == null || o.abort()
			}
		},
		_ = I;
	if((_.transitions ? ? (_.transitions = [])).push(u), s && X) {
		var w = f;
		if(!w) {
			for(var p = _.parent; p && (p.f & B) !== 0;)
				for(;
					(p = p.parent) && (p.f & G) === 0;);
			w = !p || (p.f & M) !== 0
		}
		w && P(() => {
			H(() => u.in())
		})
	}
}

function $(t, r, a, i, s) {
	var e = i === 1;
	if(D(r)) {
		var n, f = !1;
		return K(() => {
			if(!f) {
				var _ = r({
					direction: e ? "in" : "out"
				});
				n = $(t, _, a, i, s)
			}
		}), {
			abort: () => {
				f = !0, n == null || n.abort()
			},
			deactivate: () => n.deactivate(),
			reset: () => n.reset(),
			t: () => n.t()
		}
	}
	if(a == null || a.deactivate(), !(r != null && r.duration)) return s(), {
		abort: m,
		deactivate: m,
		reset: m,
		t: () => i
	};
	const {
		delay: y = 0,
		css: d,
		tick: v,
		easing: b = at
	} = r;
	var c = [];
	if(e && a === void 0 && (v && v(0, 1), d)) {
		var o = k(d(0, 1));
		c.push(o, o)
	}
	var h = () => 1 - i,
		u = t.animate(c, {
			duration: y
		});
	return u.onfinish = () => {
		var _ = (a == null ? void 0 : a.t()) ? ? 1 - i;
		a == null || a.abort();
		var w = i - _,
			p = r.duration * Math.abs(w),
			l = [];
		if(p > 0) {
			var A = !1;
			if(d)
				for(var C = Math.ceil(p / 16.666666666666668), E = 0; E <= C; E += 1) {
					var F = _ + w * b(E / C),
						O = k(d(F, 1 - F));
					l.push(O), A || (A = O.overflow === "hidden")
				}
			A && (t.style.overflow = "hidden"), h = () => {
				var N = u.currentTime;
				return _ + w * b(N / p)
			}, v && rt(() => {
				if(u.playState !== "running") return !1;
				var N = h();
				return v(N, 1 - N), !0
			})
		}
		u = t.animate(l, {
			duration: p,
			fill: "forwards"
		}), u.onfinish = () => {
			h = () => i, v == null || v(i, 1 - i), s()
		}
	}, {
		abort: () => {
			u && (u.cancel(), u.effect = null, u.onfinish = m)
		},
		deactivate: () => {
			s = m
		},
		reset: () => {
			i === 0 && (v == null || v(1, 0))
		},
		t: () => h()
	}
}
const st = t => t;

function nt(t) {
	const r = t - 1;
	return r * r * r + 1
}

function q(t) {
	const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return r ? [parseFloat(r[1]), r[2] || "px"] : [t, "px"]
}

function lt(t, {
	delay: r = 0,
	duration: a = 400,
	easing: i = st
} = {}) {
	const s = +getComputedStyle(t).opacity;
	return {
		delay: r,
		duration: a,
		easing: i,
		css: e => `opacity: ${e*s}`
	}
}

function dt(t, {
	delay: r = 0,
	duration: a = 400,
	easing: i = nt,
	x: s = 0,
	y: e = 0,
	opacity: n = 0
} = {}) {
	const f = getComputedStyle(t),
		y = +f.opacity,
		d = f.transform === "none" ? "" : f.transform,
		v = y * (1 - n),
		[b, c] = q(s),
		[o, h] = q(e);
	return {
		delay: r,
		duration: a,
		easing: i,
		css: (u, _) => `
			transform: ${d} translate(${(1-u)*b}${c}, ${(1-u)*o}${h});
			opacity: ${y-v*_}`
	}
}
export {
	vt as a, lt as b, ot as c, dt as f, ut as s, ct as t
};