import {
	G as c, u as a, ar as d, h as m, d as r, C as h
}
from "./BKJHFIjU.js";

function _(n) {
	throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function g(n, e, s) {
	if(n == null) return e(void 0), c;
	const u = a(() => n.subscribe(e, s));
	return u.unsubscribe ? () => u.unsubscribe() : u
}
const i = [];

function k(n, e = c) {
	let s = null;
	const u = new Set;

	function f(o) {
		if(d(n, o) && (n = o, s)) {
			const l = !i.length;
			for(const t of u) t[1](), i.push(t, n);
			if(l) {
				for(let t = 0; t < i.length; t += 2) i[t][0](i[t + 1]);
				i.length = 0
			}
		}
	}

	function b(o) {
		f(o(n))
	}

	function p(o, l = c) {
		const t = [o, l];
		return u.add(t), u.size === 1 && (s = e(f, b) || c), o(n), () => {
			u.delete(t), u.size === 0 && s && (s(), s = null)
		}
	}
	return {
		set: f,
		update: b,
		subscribe: p
	}
}

function x(n) {
	let e;
	return g(n, s => e = s)(), e
}

function y(n) {
	r === null && _(), h && r.l !== null ? w(r).m.push(n) : m(() => {
		const e = a(n);
		if(typeof e == "function") return e
	})
}

function z(n) {
	r === null && _(), y(() => () => a(n))
}

function w(n) {
	var e = n.l;
	return e.u ? ? (e.u = {
		a: [],
		b: [],
		m: []
	})
}
export {
	z as a, x as g, y as o, g as s, k as w
};