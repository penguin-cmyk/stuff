import {
	m as y, n as k, o as w, E as P, q as R, v as g, w as T, x as b, y as A, b as L, z as p, S as q
}
from "./QZtleaAQ.js";

function j(e, r, i) {
	y && k();
	var l = e,
		n, t;
	w(() => {
		n !== (n = r()) && (t && (g(t), t = null), n && (t = R(() => i(l, n))))
	}, P), y && (l = T)
}

function v(e, r) {
	return e === r || (e == null ? void 0 : e[q]) === r
}

function F(e = {}, r, i, l) {
	return b(() => {
		var n, t;
		return A(() => {
			n = t, t = [], L(() => {
				e !== i(...t) && (r(e, ...t), n && v(i(...n), e) && r(null, ...n))
			})
		}), () => {
			p(() => {
				t && v(i(...t), e) && r(null, ...t)
			})
		}
	}), e
}
const B = "modulepreload",
	C = function(e, r) {
		return new URL(e, r).href
	},
	S = {},
	O = function(r, i, l) {
		let n = Promise.resolve();
		if(i && i.length > 0) {
			let f = function(s) {
				return Promise.all(s.map(c => Promise.resolve(c).then(h => ({
					status: "fulfilled",
					value: h
				}), h => ({
					status: "rejected",
					reason: h
				}))))
			};
			const a = document.getElementsByTagName("link"),
				u = document.querySelector("meta[property=csp-nonce]"),
				m = (u == null ? void 0 : u.nonce) || (u == null ? void 0 : u.getAttribute("nonce"));
			n = f(i.map(s => {
				if(s = C(s, l), s in S) return;
				S[s] = !0;
				const c = s.endsWith(".css"),
					h = c ? '[rel="stylesheet"]' : "";
				if(!!l)
					for(let d = a.length - 1; d >= 0; d--) {
						const E = a[d];
						if(E.href === s && (!c || E.rel === "stylesheet")) return
					} else if(document.querySelector(`link[href="${s}"]${h}`)) return;
				const o = document.createElement("link");
				if(o.rel = c ? "stylesheet" : B, c || (o.as = "script"), o.crossOrigin = "", o.href = s, m && o.setAttribute("nonce", m), document.head.appendChild(o), c) return new Promise((d, E) => {
					o.addEventListener("load", d), o.addEventListener("error", () => E(new Error(`Unable to preload CSS for ${s}`)))
				})
			}))
		}

		function t(f) {
			const a = new Event("vite:preloadError", {
				cancelable: !0
			});
			if(a.payload = f, window.dispatchEvent(a), !a.defaultPrevented) throw f
		}
		return n.then(f => {
			for(const a of f || []) a.status === "rejected" && t(a.reason);
			return r().catch(t)
		})
	};
export {
	O as _, F as b, j as c
};