const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../nodes/0.DDGCdR8P.js", "../chunks/B14H4HNW.js", "../chunks/BKJHFIjU.js", "../chunks/dq3z1D4m.js", "../chunks/D9LipSXl.js", "../chunks/eGA7sSFq.js", "../assets/bindings.BsDkeFqO.css", "../chunks/wGmU91Ry.js", "../chunks/BMGTGNS0.js", "../chunks/BxiobduP.js", "../chunks/C-9jauA_.js", "../chunks/xHcfyhGV.js", "../chunks/CT8sFOIG.js", "../chunks/C1kVU4hW.js", "../chunks/wUZCNHS8.js", "../chunks/Jx5vwAfS.js", "../chunks/BUyBoPyq.js", "../assets/0.DSLijU1L.css", "../nodes/1.Vq53dZqu.js", "../nodes/2.BABV9aF9.js", "../chunks/Tfd6ueSu.js", "../chunks/BNvEvn2y.js", "../assets/2.B3W2So9B.css", "../nodes/3.BIqqiii8.js", "../nodes/4.Cu5RonsA.js", "../assets/4.BTfS-aIj.css", "../nodes/5.ClL9ollR.js", "../assets/5.CNvc03oQ.css"]))) => i.map(i => d[i]);
var F = e => {
	throw TypeError(e)
};
var M = (e, t, r) => t.has(e) || F("Cannot " + r);
var i = (e, t, r) => (M(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
	A = (e, t, r) => t.has(e) ? F("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r),
	T = (e, t, r, o) => (M(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r);
import {
	p as H, a as p, _ as y
}
from "../chunks/dq3z1D4m.js";
import {
	O as N, R as J, K as Q, ap as U, Z as X, _ as $, W as tt, y as O, B as et, k as d, as as rt, I as st, z as at, p as ot, g as nt, h as it, ae as k, at as ct, f as x, s as ut, a as mt, c as _t, r as ft, m as I, t as dt
}
from "../chunks/BKJHFIjU.js";
import {
	h as lt, m as ht, u as vt, t as z, a as b, e as L, f as gt, s as yt
}
from "../chunks/B14H4HNW.js";
import {
	b as w
}
from "../chunks/BNvEvn2y.js";
import {
	p as D
}
from "../chunks/BUyBoPyq.js";
import {
	o as bt
}
from "../chunks/eGA7sSFq.js";

function V(e, t, r) {
	N && J();
	var o = e,
		n, m;
	Q(() => {
		n !== (n = t()) && (m && ($(m), m = null), n && (m = X(() => r(o, n))))
	}, U), N && (o = tt)
}

function Et(e) {
	return class extends Pt {
		constructor(t) {
			super({
				component: e,
				...t
			})
		}
	}
}
var l, u;
class Pt {
	constructor(t) {
		A(this, l);
		A(this, u);
		var m;
		var r = new Map,
			o = (s, a) => {
				var h = at(a);
				return r.set(s, h), h
			};
		const n = new Proxy({...t.props || {}, $$events: {}
		}, {
			get(s, a) {
				return d(r.get(a) ? ? o(a, Reflect.get(s, a)))
			}, has(s, a) {
				return a === et ? !0 : (d(r.get(a) ? ? o(a, Reflect.get(s, a))), Reflect.has(s, a))
			}, set(s, a, h) {
				return O(r.get(a) ? ? o(a, h), h), Reflect.set(s, a, h)
			}
		});
		T(this, u, (t.hydrate ? lt : ht)(t.component, {
			target: t.target,
			anchor: t.anchor,
			props: n,
			context: t.context,
			intro: t.intro ? ? !1,
			recover: t.recover
		})), (!((m = t == null ? void 0 : t.props) != null && m.$$host) || t.sync === !1) && rt(), T(this, l, n.$$events);
		for(const s of Object.keys(i(this, u))) s === "$set" || s === "$destroy" || s === "$on" || st(this, s, {
			get() {
				return i(this, u)[s]
			}, set(a) {
				i(this, u)[s] = a
			}, enumerable: !0
		});
		i(this, u).$set = s => {
			Object.assign(n, s)
		}, i(this, u).$destroy = () => {
			vt(i(this, u))
		}
	}
	$set(t) {
		i(this, u).$set(t)
	}
	$on(t, r) {
		i(this, l)[t] = i(this, l)[t] || [];
		const o = (...n) => r.call(this, ...n);
		return i(this, l)[t].push(o), () => {
			i(this, l)[t] = i(this, l)[t].filter(n => n !== o)
		}
	}
	$destroy() {
		i(this, u).$destroy()
	}
}
l = new WeakMap, u = new WeakMap;
const jt = {};
var Rt = z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),
	xt = z("<!> <!>", 1);

function Ot(e, t) {
	ot(t, !0);
	let r = D(t, "components", 23, () => []),
		o = D(t, "data_0", 3, null),
		n = D(t, "data_1", 3, null);
	nt(() => t.stores.page.set(t.page)), it(() => {
		t.stores, t.page, t.constructors, r(), t.form, o(), n(), t.stores.page.notify()
	});
	let m = k(!1),
		s = k(!1),
		a = k(null);
	bt(() => {
		const c = t.stores.page.subscribe(() => {
			d(m) && (O(s, !0), ct().then(() => {
				O(a, H(document.title || "untitled page"))
			}))
		});
		return O(m, !0), c
	});
	const h = I(() => t.constructors[1]);
	var C = xt(),
		j = x(C); {
		var B = c => {
				var f = L();
				const E = I(() => t.constructors[0]);
				var P = x(f);
				V(P, () => d(E), (v, g) => {
					w(g(v, {get data() {
							return o()
						},
						get form() {
							return t.form
						},
						children: (_, pt) => {
							var S = L(),
								Y = x(S);
							V(Y, () => d(h), (Z, q) => {
								w(q(Z, {get data() {
										return n()
									},
									get form() {
										return t.form
									}
								}), R => r()[1] = R, () => {
									var R;
									return(R = r()) == null ? void 0 : R[1]
								})
							}), b(_, S)
						},
						$$slots: {
							default: !0
						}
					}), _ => r()[0] = _, () => {
						var _;
						return(_ = r()) == null ? void 0 : _[0]
					})
				}), b(c, f)
			},
			G = c => {
				var f = L();
				const E = I(() => t.constructors[0]);
				var P = x(f);
				V(P, () => d(E), (v, g) => {
					w(g(v, {get data() {
							return o()
						},
						get form() {
							return t.form
						}
					}), _ => r()[0] = _, () => {
						var _;
						return(_ = r()) == null ? void 0 : _[0]
					})
				}), b(c, f)
			};
		p(j, c => {
			t.constructors[1] ? c(B) : c(G, !1)
		})
	}
	var K = ut(j, 2); {
		var W = c => {
			var f = Rt(),
				E = _t(f); {
				var P = v => {
					var g = gt();
					dt(() => yt(g, d(a))), b(v, g)
				};
				p(E, v => {
					d(s) && v(P)
				})
			}
			ft(f), b(c, f)
		};
		p(K, c => {
			d(m) && c(W)
		})
	}
	b(e, C), mt()
}
const St = Et(Ot),
	Ft = [() => y(() =>
		import("../nodes/0.DDGCdR8P.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]),
		import.meta.url), () => y(() =>
		import("../nodes/1.Vq53dZqu.js"), __vite__mapDeps([18, 1, 2, 10, 12, 14, 13, 5]),
		import.meta.url), () => y(() =>
		import("../nodes/2.BABV9aF9.js"), __vite__mapDeps([19, 1, 2, 10, 7, 12, 9, 5, 4, 3, 6, 11, 8, 15, 20, 21, 22]),
		import.meta.url), () => y(() =>
		import("../nodes/3.BIqqiii8.js"), __vite__mapDeps([23, 1, 2, 10, 11, 7]),
		import.meta.url), () => y(() =>
		import("../nodes/4.Cu5RonsA.js"), __vite__mapDeps([24, 1, 2, 10, 3, 11, 8, 4, 5, 6, 21, 12, 20, 25]),
		import.meta.url), () => y(() =>
		import("../nodes/5.ClL9ollR.js"), __vite__mapDeps([26, 1, 2, 4, 3, 5, 6, 7, 9, 16, 11, 27]),
		import.meta.url)],
	Mt = [],
	Nt = {
		"/": [2],
		"/instances": [3],
		"/scripthub": [4],
		"/settings": [5]
	},
	At = {
		handleError: ({
			error: e
		}) => {
			console.error(e)
		},
		reroute: () => {},
		transport: {}
	},
	Tt = Object.fromEntries(Object.entries(At.transport).map(([e, t]) => [e, t.decode])),
	zt = !1,
	Bt = (e, t) => Tt[e](t);
export {
	Bt as decode, Tt as decoders, Nt as dictionary, zt as hash, At as hooks, jt as matchers, Ft as nodes, St as root, Mt as server_loads
};