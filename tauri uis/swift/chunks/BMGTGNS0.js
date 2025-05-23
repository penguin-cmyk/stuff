import {
	K as y, O as _, R as h, Z as g, W as c, ad as R, ag as k, ah as w, N as E, Q as O, ab as N, ai as S, u as T, b as V
}
from "./BKJHFIjU.js";
import {
	b as m, c as A, l as C
}
from "./B14H4HNW.js";

function I(a, r, t, i, s) {
	var e = a,
		f = "",
		n;
	y(() => {
		if(f === (f = r() ? ? "")) {
			_ && h();
			return
		}
		n !== void 0 && (N(n), n = void 0), f !== "" && (n = g(() => {
			if(_) {
				c.data;
				for(var l = h(), u = l; l !== null && (l.nodeType !== 8 || l.data !== "");) u = l, l = R(l);
				if(l === null) throw k(), w;
				m(c, u), e = E(l);
				return
			}
			var b = f + "",
				v = A(b);
			m(O(v), v.lastChild), e.before(v)
		}))
	})
}

function K(a, r, t = r) {
	var i = S();
	C(a, "input", s => {
		var e = s ? a.defaultValue : a.value;
		if(e = d(a) ? o(e) : e, t(e), i && e !== (e = r())) {
			var f = a.selectionStart,
				n = a.selectionEnd;
			a.value = e ? ? "", n !== null && (a.selectionStart = f, a.selectionEnd = Math.min(n, a.value.length))
		}
	}), (_ && a.defaultValue !== a.value || T(r) == null && a.value) && t(d(a) ? o(a.value) : a.value), V(() => {
		var s = r();
		d(a) && s === o(a.value) || a.type === "date" && !s && !a.value || s !== a.value && (a.value = s ? ? "")
	})
}

function d(a) {
	var r = a.type;
	return r === "number" || r === "range"
}

function o(a) {
	return a === "" ? null : +a
}
export {
	K as b, I as h
};