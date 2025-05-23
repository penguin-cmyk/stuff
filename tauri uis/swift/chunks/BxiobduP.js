import {
	s as a, g as c
}
from "./eGA7sSFq.js";
import {
	G as o, z as b, y as l, k as p, H as d, I as _
}
from "./BKJHFIjU.js";
let s = !1,
	i = Symbol();

function y(e, n, r) {
	const u = r[n] ? ? (r[n] = {
		store: null,
		source: b(void 0),
		unsubscribe: o
	});
	if(u.store !== e && !(i in r))
		if(u.unsubscribe(), u.store = e ? ? null, e == null) u.source.v = void 0, u.unsubscribe = o;
		else {
			var t = !0;
			u.unsubscribe = a(e, f => {
				t ? u.source.v = f : l(u.source, f)
			}), t = !1
		}
	return e && i in r ? c(e) : p(u.source)
}

function m(e, n) {
	return e.set(n), n
}

function I() {
	const e = {};

	function n() {
		d(() => {
			for(var r in e) e[r].unsubscribe();
			_(e, i, {
				enumerable: !1,
				value: !0
			})
		})
	}
	return [e, n]
}

function N(e) {
	var n = s;
	try {
		return s = !1, [e(), s]
	} finally {
		s = n
	}
}
export {
	y as a, m as b, N as c, I as s
};