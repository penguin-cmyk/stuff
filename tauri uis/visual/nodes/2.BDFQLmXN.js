const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../chunks/ChX3pikQ.js", "../chunks/BClhyzM1.js", "../chunks/QZtleaAQ.js", "../assets/monaco.BsDkeFqO.css"]))) => i.map(i => d[i]);
import {
	o as Ve, d as J, t as _, s as T, a as b, c as ve
}
from "../chunks/IKrY9baT.js";
import {
	i as G
}
from "../chunks/DQ7Mtnp1.js";
import {
	m as Pe, b as H, y as Ue, aO as ke, p as M, k as v, M as D, K as se, aP as je, l as u, s as m, g as d, T as fe, t as N, j as O, N as E, i as oe, aQ as Je, a4 as ze, a7 as pe, a as ye, aR as Ae, a5 as $e, X as Ge
}
from "../chunks/QZtleaAQ.js";
import {
	I as te, p as Ke, V as S, q as We, e as ae, s as V, r as qe, u as F, c as C, v as Ie, w as Me, x as Ce, i as Se, P as Qe, T as Xe, F as Ye, D as Ze, y as et, n as q, B as tt, j as P, m as Fe, z as Oe, A as ce, G as we, H as Te, J as ge, K as ee, g as at, L as nt, a as Ee, N as it, O as re, Q as rt, U as ot, W as st, Y as ct, b as lt, t as dt
}
from "../chunks/B0ST4RaR.js";
import {
	i as R, a as Q, s as ne, p as le, b as xe
}
from "../chunks/7gxC_TxG.js";
import {
	_ as ut, b as vt, c as ft
}
from "../chunks/BClhyzM1.js";

function pt(e, t, a = t) {
	Ve(e, "change", i => {
		var n = i ? e.defaultChecked : e.checked;
		a(n)
	}), (Pe && e.defaultChecked !== e.checked || H(t) == null) && a(e.checked), Ue(() => {
		var i = t();
		e.checked = !!i
	})
}
const he = ke(!1);
var gt = (e, t) => D(t, !d(t)),
	xt = () => S.clear(),
	ht = _('<span class="text-xs log-msg svelte-ryinpa"> </span>'),
	bt = _('<div><span class="log-msg text-xs svelte-ryinpa"> </span> <span class="text-xs log-msg break-all svelte-ryinpa"> </span> <!></div>'),
	mt = _('<div class="text-zinc-500 text-xs italic p-2">No logs to display</div>'),
	_t = _('<div class="relative z-99 h-10 bg-black/5 rounded-lg"><div><div class="flex flex-col h-full overflow-hidden rounded-lg"><div class="flex justify-between px-2.5 p-2 cursor-pointer"><div class="flex gap-2 items-center"><!> <span class="text-zinc-400 font-inter text-sm">Console</span></div> <div class="flex justify-end gap-2"><button>Clear</button> <!></div></div> <div><div class="overflow-y-auto max-h-24 svelte-ryinpa"><div class="px-2 py-1"><!> <!></div></div></div></div></div></div>');

function yt(e, t) {
	M(t, !1);
	const [a, i] = ne(), n = () => Q(qe, "$logs", a);
	let s = se(!1);

	function f(B) {
		switch(B) {
			case "error":
				return "text-red-400";
			case "warn":
				return "text-yellow-500";
			case "success":
				return "text-green-400";
			case "info":
			default:
				return "text-zinc-300"
		}
	}
	G();
	var r = _t(),
		p = v(r),
		g = v(p),
		o = v(g);
	o.__click = [gt, s];
	var c = v(o),
		k = v(c);
	te(k, {
		src: Ke,
		class: "text-zinc-400 size-5",
		solid: !0
	}), je(2), u(c);
	var h = m(c, 2),
		w = v(h);
	w.__click = [xt];
	var $ = m(w, 2);
	const A = fe(() => `text-zinc-400 p-0.5 size-6 hover:bg-zinc-700/40 transition-all rounded-sm ${d(s)?"rotate-180":"rotate-0"}`);
	te($, {
		src: We,
		get class() {
			return d(A)
		},
		solid: !0
	}), u(h), u(o);
	var x = m(o, 2),
		l = v(x),
		y = v(l),
		z = v(y);
	ae(z, 1, () => [...n()].reverse(), B => B.id, (B, L) => {
		var ie = bt(),
			de = v(ie),
			Be = v(de);
		u(de);
		var ue = m(de, 2),
			De = v(ue, !0);
		u(ue);
		var Ne = m(ue, 2); {
			var Re = Y => {
				var Z = ht(),
					Le = v(Z, !0);
				u(Z), N(He => T(Le, He), [() => JSON.stringify(d(L).data)], fe), b(Y, Z)
			};
			R(Ne, Y => {
				d(L).data && Y(Re)
			})
		}
		u(ie), N((Y, Z) => {
			V(ie, 1, Y, "svelte-ryinpa"), T(Be, `[${Z??""}]`), T(De, d(L).msg)
		}, [() => `flex items-start gap-2 py-1 border-zinc-800 ${f(d(L).type)}`, () => d(L).timestamp.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit"
		})], fe), b(B, ie)
	});
	var K = m(z, 2); {
		var X = B => {
			var L = mt();
			b(B, L)
		};
		R(K, B => {
			n().length === 0 && B(X)
		})
	}
	u(y), u(l), u(x), u(g), u(p), u(r), N(() => {
		V(p, 1, `absolute bottom-0 w-full rounded-lg border border-zinc-800 backdrop-blur-xl transition-all duration-300 ${d(s)?"h-36":"h-10"}`, "svelte-ryinpa"), V(w, 1, `transition-opacity cursor-pointer duration-500 text-xs rounded-md bg-zinc-600/20 px-1 text-zinc-300 backdrop-blur-lg ${d(s)?"opacity-100":"opacity-0 pointer-events-none"}`, "svelte-ryinpa"), V(x, 1, `overflow-hidden transition-all duration-300 ${d(s)?"max-h-24 opacity-100":"max-h-0 opacity-0"}`, "svelte-ryinpa")
	}), b(e, r), O(), i()
}
J(["click"]);
var wt = _('<div class="cursor-pointer flex flex-row items-center gap-1.5 text-zinc-400 hover:text-zinc-300 active:text-zinc-300/80 transition-colors"><!> <span class="text-sm font-inter"> </span></div>');

function kt(e, t) {
	var a = wt();
	a.__click = function(...f) {
		var r;
		(r = t.action) == null || r.apply(this, f)
	};
	var i = v(a);
	te(i, {get src() {
			return t.icon
		},
		class: "size-4",
		solid: !0
	});
	var n = m(i, 2),
		s = v(n, !0);
	u(n), u(a), N(() => T(s, t.label)), b(e, a)
}
J(["click"]);
const U = {
	getContent() {
		const e = E(F),
			t = e.files.find(a => a.id === e.active);
		return(t == null ? void 0 : t.content) || ""
	}, getFileContent(e) {
		const a = E(F).files.find(i => i.id === e);
		return(a == null ? void 0 : a.content) || ""
	}, getFiles() {
		return E(F).files.map(({
			id: e,
			name: t,
			content: a
		}) => ({
			id: e,
			name: t,
			content: a
		}))
	}, updateFileContent(e, t) {
		F.update(a => ({...a, files: a.files.map(i => i.id === e ? {...i, content: t
			} : i)
		}))
	}, getInstance() {
		return E(Ie)
	}, executeFile() {
		this.getContent(), S.warn("executing current file...");
		try {
			const e = C("execute", {
				script: this.getContent()
			});
			S.info("Successfully executed script!")
		} catch(e) {
			S.error(`Error occured during execution: ${e}`)
		}
	}, createFile(e, t) {
		const i = `file-${Date.now()}`;
		return F.update(n => ({...n, files: [...n.files, {
				id: i,
				name: e,
				content: t,
				state: {}
			}]
		})), S.success(`Created file ${i}`), i
	}, setActive(e) {
		E(F).files.some(i => i.id === e) ? F.update(i => (S.info(`Setting active file to ${e}`), {...i, active: e
		})) : S.error(`File '${e}' not found`)
	}, getActiveID() {
		return E(F).active
	}
};
async function zt(e = {}) {
	return typeof e == "object" && Object.freeze(e), await C("plugin:dialog|open", {
		options: e
	})
}
async function Ct(e = {}) {
	return typeof e == "object" && Object.freeze(e), await C("plugin:dialog|save", {
		options: e
	})
}
async function St() {
	try {
		const e = await zt({
			multiple: !1,
			filters: [{
				name: "Lua Scripts",
				extensions: ["lua", "luau"]
			}]
		});
		if(!e || Array.isArray(e)) return;
		const t = e,
			a = t.split(/[/\\]/).pop() || "undefined.lua",
			i = await Me(t),
			n = U.createFile(a, i);
		return U.setActive(n), n
	} catch(e) {
		S.error(`An error occured while opening file: ${e}`)
	}
}
async function $t() {
	var e;
	try {
		const t = U.getContent();
		if(!t) return;
		const a = ((e = U.getFiles().find(n => n.id === U.getActiveID())) == null ? void 0 : e.name) || "untitled.lua",
			i = await Ct({
				filters: [{
					name: "Lua Scripts",
					extensions: ["lua", "luau"]
				}],
				defaultPath: a
			});
		return i ? (await Ce(i, t), i) : void 0
	} catch(t) {
		S.error(`An error occured while saving a file: ${t}`)
	}
}
var Ft = _('<div class="w-full"></div>'),
	jt = _("<!> <!>", 1),
	At = _('<div class="flex border rounded-bl-xl rounded-tr-md rounded-tl-md rounded-br-xl border-zinc-700/50 bg-zinc-900 overflow-x-auto gap-4 items-center h-10 px-3"></div>');

function It(e, t) {
	M(t, !1);
	const a = [{
		icon: Qe,
		label: "Execute",
		action: () => {
			U.executeFile()
		}
	}, {
		icon: Xe,
		label: "Clear",
		action: () => {
			var s;
			const n = U.getInstance();
			n && ((s = n.getModel()) == null || s.setValue(""))
		}
	}, {
		icon: Ye,
		label: "Open",
		action: async() => {
			try {
				await St()
			} catch(n) {
				S.error(`An error occured while opening file: ${n}`)
			}
		}
	}, {
		icon: Ze,
		label: "Save",
		action: async() => {
			try {
				await $t()
			} catch(n) {
				S.error(`An error occured while saving file: ${n}`)
			}
		}
	}, {
		icon: et,
		label: "Attach",
		action: async() => {
			S.info("Attaching..."), q.warning("Attaching...", {
				title: "Injector"
			}), he.set(!0);
			try {
				await C("attach") == !0 ? S.success("Successfully attached to Roblox!") : S.error("Failed to attach to Roblox."), q.success("Attached!", {
					title: "Injector"
				})
			} catch(n) {
				S.error(`An error occured while attaching: ${n}`), he.set(!1)
			}
			he.set(!1)
		}
	}];
	G();
	var i = At();
	ae(i, 5, () => a, Se, (n, s) => {
		var f = jt(),
			r = oe(f); {
			var p = o => {
				var c = Ft();
				b(o, c)
			};
			R(r, o => {
				d(s).label === "Attach" && o(p)
			})
		}
		var g = m(r, 2);
		kt(g, {get icon() {
				return d(s).icon
			},
			get action() {
				return d(s).action
			},
			get label() {
				return d(s).label
			}
		}), b(n, f)
	}), u(i), b(e, i), O()
}

function Mt(e, t) {
	const n = `untitled${d(t).reduce((f,r)=>{const p=r.name.match(/^untitled(\d+)\.lua$/);if(p){const g=parseInt(p[1],10);return Math.max(f,g)}return f},0)+1}.lua`,
		s = `file-${Date.now()}`;
	F.update(f => ({...f, files: [...f.files, {
			id: s,
			name: n,
			content: "-- getvisual.cc",
			state: {}
		}], active: s
	}))
}
var Ot = (e, t, a) => t(d(a).id),
	Tt = (e, t, a) => {
		e.stopPropagation(), t(d(a).id)
	},
	Et = _('<div><!> <span class="truncate max-w-32 font-inter"> </span> <button class="ml-2 text-zinc-500 hover:text-white">×</button></div>'),
	Bt = _('<div class="flex border-zinc-700/50 bg-zinc-900 overflow-x-auto hscroll gap-1 items-center h-8"><!> <button class="bg-zinc-900 text-zinc-400 hover:bg-zinc-800 text-xs size-5 rounded-md transition-transform">+</button></div>');

function Dt(e, t) {
	M(t, !1);
	let a = se([]),
		i = se();
	F.subscribe(g => {
		D(a, g.files), D(i, g.active)
	});

	function n(g) {
		F.update(o => ({...o, active: g
		}))
	}

	function s(g) {
		E(F).files.length !== 1 && F.update(o => {
			const c = o.files.filter(h => h.id !== g);
			let k = o.active;
			if(g === o.active) {
				const h = o.files.findIndex(w => w.id === g);
				h > 0 ? k = c[h - 1].id : c.length > 0 ? k = c[0].id : k = ""
			}
			return {...o, files: c, active: k
			}
		})
	}
	G();
	var f = Bt(),
		r = v(f);
	ae(r, 1, () => d(a), Se, (g, o) => {
		var c = Et();
		c.__click = [Ot, n, o];
		var k = v(c);
		te(k, {
			src: tt,
			class: "size-4"
		});
		var h = m(k, 2),
			w = v(h, !0);
		u(h);
		var $ = m(h, 2);
		$.__click = [Tt, s, o], u(c), N(() => {
			V(c, 1, `transition-all rounded-tl-xl rounded-br-xl h-full rounded-bl-md rounded-tr-md flex items-center px-2 py-1.5 gap-1.5 text-xs ${d(i)===d(o).id?"bg-zinc-800 text-[#FB9866]/90":"bg-zinc-800/20 text-zinc-400 hover:bg-zinc-800/70"} cursor-pointer`), T(w, d(o).name)
		}), P(1, c, () => Fe, () => ({
			x: -100,
			duration: 200
		})), P(2, c, () => Fe, () => ({
			x: -100,
			duration: 200
		})), b(g, c)
	});
	var p = m(r, 2);
	p.__click = [Mt, a], u(f), b(e, f), O()
}
J(["click"]);
const j = {
		autoInject: !1,
		enableMinimap: !1,
		internalUIHotkey: "HOME",
		redirectRobloxOutput: !1,
		outputTypes: {
			warn: !0,
			info: !0,
			error: !0,
			output: !0
		}
	},
	I = ke({...j
	}),
	W = ke({...j
	}),
	Nt = Je([I, W], ([e, t]) => JSON.stringify(e) !== JSON.stringify(t));
async function Rt() {
	try {
		const e = await Oe(),
			t = await ce(e, "bin");
		await we(t) || await Te(t, {
			recursive: !0
		});
		const i = await ce(t, "settings.json");
		if(await we(i)) {
			const s = await Me(i),
				f = JSON.parse(s),
				r = {...j, ...f, outputTypes: {...j.outputTypes, ...f.outputTypes || {}
					}
				};
			I.set(r), W.set({...r
			}), await C("set_autoinject", {
				value: r.autoInject
			}), await C("set_hotkey", {
				value: r.internalUIHotkey
			}), await C("set_redirect", {
				value: r.redirectRobloxOutput
			}), await C("set_outputtypes", {
				value: r.outputTypes
			})
		} else I.set({...j
		}), W.set({...j
		}), await Ce(i, JSON.stringify(j, null, 4)), await C("set_autoinject", {
			value: j.autoInject
		}), await C("set_hotkey", {
			value: j.internalUIHotkey
		}), await C("set_redirect", {
			value: j.redirectRobloxOutput
		}), await C("set_outputtypes", {
			value: j.outputTypes
		})
	} catch(e) {
		console.error("failerd to load settings: ", e), q.error("Failed to load settings.", {
			title: "Settings"
		}), I.set({...j
		}), W.set({...j
		})
	}
}
async function be() {
	try {
		const e = E(I);
		await C("set_autoinject", {
			value: e.autoInject
		}), await C("set_hotkey", {
			value: e.internalUIHotkey
		}), await C("set_redirect", {
			value: e.redirectRobloxOutput
		}), await C("set_outputtypes", {
			value: e.outputTypes
		});
		const t = await Oe(),
			a = await ce(t, "bin");
		await we(a) || await Te(a, {
			recursive: !0
		});
		const n = await ce(a, "settings.json");
		return await Ce(n, JSON.stringify(e, null, 4)), W.set({...e
		}), q.success("Saved settings.", {
			title: "Settings"
		}), !0
	} catch(e) {
		return console.error("failerd to save settings: ", e), q.error("Failed to save settings.", {
			title: "Settings"
		}), !1
	}
}

function me() {
	const e = E(W);
	I.set({...e
	})
}

function Lt(e, t) {
	I.update(a => ({...a, [e]: t
	}))
}
var Ht = _('<div class="editor-container w-full h-full"><div class="container w-full h-full pl-2"></div></div>');

function Vt(e, t) {
	M(t, !0);
	const [a, i] = ne(), n = () => Q(F, "$editorStr", a);
	let s = le(t, "language", 3, "lua"),
		f = le(t, "onChange", 3, l => {}),
		r, p, g, o = {},
		c = null,
		k = pe(() => n().files),
		h = pe(() => n().active),
		w = pe(() => d(k).find(l => l.id === d(h)));

	function $(l) {
		if(!r || !p || !l) return;
		const y = d(k).find(z => z.id === l);
		if(y) {
			if(c && c !== l) {
				const z = r.saveViewState();
				if(o[c]) {
					o[c].state = z;
					const K = r.getModel();
					if(K) {
						const X = K.getValue();
						ge(c, X)
					}
				}
			}
			o[l] || (o[l] = {
				model: p.editor.createModel(y.content, s()),
				state: null
			}), r.setModel(o[l].model), o[l].state && r.restoreViewState(o[l].state), c = l, r.layout(), r.focus()
		}
	}
	ze(async() => {
		var l;
		p = (await ut(async() => {
				const {
					default: y
				} = await
				import("../chunks/ChX3pikQ.js").then(z => z.a);
				return {
					default: y
				}
			}, __vite__mapDeps([0, 1, 2, 3]),
			import.meta.url)).default, p.editor.defineTheme("visual-default", {
			base: "vs-dark",
			inherit: !0,
			rules: [{
				token: "",
				background: "191919"
			}, {
				token: "comment",
				foreground: "6c6c7a"
			}, {
				token: "string",
				foreground: "f1fa8c"
			}, {
				token: "keyword",
				foreground: "FB9866"
			}],
			colors: {
				"editor.foreground": "#f8f8f2",
				"editor.background": "#18181B",
				"editor.selectionBackground": "#252525",
				"editor.lineHighlightBackground": "#242429",
				"editorCursor.foreground": "#f8f8f0",
				"editorWhitespace.foreground": "#3B3A32",
				"editorIndentGuide.activeBackground": "#9D550FB0",
				"editor.selectionHighlightBorder": "#222218"
			}
		}), p.editor.setTheme("visual-default"), r = p.editor.create(g, {
			model: null,
			automaticLayout: !0,
			smoothScrolling: !0,
			useShadowDOM: !1,
			tabCompletion: "on",
			minimap: {
				enabled: E(I).enableMinimap
			},
			cursorSmoothCaretAnimation: "on",
			cursorBlinking: "smooth",
			cursorStyle: "line",
			autoIndent: "advanced",
			codeLens: !0,
			lineNumbersMinChars: 0,
			lineDecorationsWidth: 20,
			lineNumbers: "on",
			glyphMargin: !1,
			folding: !1,
			fontFamily: '"JetBrainsMono Nerd Font"'
		}), Ie.set(r), r.onDidChangeModelContent(() => {
			if(!c) return;
			const y = r.getModel();
			if(y) {
				const z = y.getValue();
				ge(c, z), f()(z)
			}
		}), r && ((l = r.getAction("editor.action.formatDocument")) == null || l.run()), d(h) && $(d(h))
	}), ye(() => {
		const l = d(h);
		!r || !p || l && l !== c && $(l)
	}), ye(() => {
		if(!(!r || !p || !d(h) || !d(w)) && o[d(h)] && o[d(h)].model) {
			const l = o[d(h)].model,
				y = l.getValue(),
				z = d(w).content;
			y !== z && (l.setValue(z), r.layout(), r.focus())
		}
	}), Ae(() => {
		if(c && r) {
			const l = r.saveViewState();
			if(o[c]) {
				o[c].state = l;
				const y = r.getModel();
				if(y) {
					const z = y.getValue();
					ge(c, z)
				}
			}
		}
		Object.values(o).forEach(l => {
			l.model && l.model.dispose()
		}), r && r.dispose()
	});
	var A = Ht(),
		x = v(A);
	vt(x, l => g = l, () => g), u(A), b(e, A), O(), i()
}
var Pt = _('<div class="flex flex-col gap-2 h-screen w-full overflow-hidden"><!> <!> <div class="flex-1 w-full min-h-0 overflow-hidden"><!></div> <div class="h-12 w-full min-h-0"><!></div></div>');

function Ut(e, t) {
	M(t, !1), Ae(() => at()), C("setup"), G();
	var a = Pt(),
		i = v(a);
	Dt(i, {});
	var n = m(i, 2);
	It(n, {});
	var s = m(n, 2),
		f = v(s);
	Vt(f, {
		editorOptions: {
			minimap: {
				enabled: !1
			}
		}
	}), u(s);
	var r = m(s, 2),
		p = v(r);
	yt(p, {}), u(r), u(a), P(1, a, () => ee, () => ({
		duration: 250
	})), b(e, a), O()
}
var Jt = _("<p>hey this is the scripts</p>");

function Gt(e) {
	var t = Jt();
	b(e, t)
}
var Kt = (e, t, a) => t.onSelect(d(a).label),
	Wt = _('<button><!> <span class="truncate max-w-32 font-inter"> </span></button>'),
	qt = _('<div class="flex flex-wrap gap-2"></div>');

function Qt(e, t) {
	M(t, !0);
	var a = qt();
	ae(a, 21, () => t.categories, Se, (i, n) => {
		var s = Wt();
		s.__click = [Kt, t, n];
		var f = v(s); {
			var r = o => {
				te(o, {get src() {
						return d(n).icon
					},
					class: "size-4"
				})
			};
			R(f, o => {
				d(n).icon && o(r)
			})
		}
		var p = m(f, 2),
			g = v(p, !0);
		u(p), u(s), N(() => {
			V(s, 1, `transition-all rounded-tl-xl rounded-br-xl h-8 text-center rounded-bl-md rounded-tr-md flex items-center pl-3 pr-4 py-1.5 gap-1.5 text-xs ${d(n).label===t.active?"bg-zinc-800 text-[#FB9866]/90":"bg-zinc-800/20 text-zinc-400 hover:bg-zinc-800/70"} cursor-pointer`), T(g, d(n).label)
		}), b(i, s)
	}), u(a), b(e, a), O()
}
J(["click"]);
var Xt = (e, t, a) => t.onChange(a()),
	Yt = _(`<div class="flex items-center justify-between"><div><h3 class="text-zinc-200 font-medium"> </h3> <p class="text-xs text-zinc-400"> </p></div> <label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"> <div class="w-9 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-zinc-300 after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#FB9866]"></div></label></div>`);

function _e(e, t) {
	M(t, !0);
	let a = le(t, "checked", 15);
	var i = Yt(),
		n = v(i),
		s = v(n),
		f = v(s, !0);
	u(s);
	var r = m(s, 2),
		p = v(r, !0);
	u(r), u(n);
	var g = m(n, 2),
		o = v(g);
	nt(o), o.__change = [Xt, t, a], je(2), u(g), u(i), N(() => {
		T(f, t.title), T(p, t.description)
	}), pt(o, a), b(e, i), O()
}
J(["change"]);

function Zt(e, t, a) {
	D(t, !0), D(a, "...")
}
var ea = _('<div class="flex items-center justify-between"><div><h3 class="text-zinc-200 font-medium"> </h3> <p class="text-xs text-zinc-400"> </p></div> <label class="relative inline-flex items-center cursor-pointer"><div><span class="text-xs font-semibold"> </span></div></label></div>');

function ta(e, t) {
	M(t, !0);
	let a = le(t, "keybind", 7, "HOME"),
		i = $e(!1),
		n = $e(Ge(a()));

	function s(x) {
		if(!d(i)) return;
		x.preventDefault();
		let l = x.key.toUpperCase();
		x.key === " " ? l = "SPACE" : x.key === "Escape" ? (D(i, !1), D(n, a(), !0)) : l.length === 1 ? l = l : l = x.key.toUpperCase(), a(l), D(n, l, !0), D(i, !1);
		try {
			C("on_keybind_set", {
				keybind: l
			})
		} catch(y) {
			console.error(`failed to set keybind: ${y}`), q.error("Failed to set keybind.", {
				title: "Settings"
			})
		}
	}
	ye(() => (d(i) ? window.addEventListener("keydown", s) : window.removeEventListener("keydown", s), () => {
		window.removeEventListener("keydown", s)
	}));
	var f = ea(),
		r = v(f),
		p = v(r),
		g = v(p, !0);
	u(p);
	var o = m(p, 2),
		c = v(o, !0);
	u(o), u(r);
	var k = m(r, 2),
		h = v(k);
	let w;
	h.__click = [Zt, i, n];
	var $ = v(h),
		A = v($, !0);
	u($), u(h), u(k), u(f), N(x => {
		T(g, t.title), T(c, t.description), w = V(h, 1, "min-w-11 h-6 bg-zinc-800 hover:bg-zinc-700 rounded-md text-zinc-500 flex px-1.5 items-center justify-center cursor-pointer transition-colors", null, w, x), T(A, d(n))
	}, [() => ({
		"bg-zinc-700": d(i),
		"text-zinc-300": d(i)
	})]), b(e, f), O()
}
J(["click"]);
var aa = _('<div class="space-y-4"><div class="space-y-3"><!> <!> <!> <!></div></div>');

function na(e, t) {
	M(t, !0);
	const [a, i] = ne(), n = () => Q(I, "$settings", a);
	var s = aa(),
		f = v(s),
		r = v(f);
	_e(r, {
		title: "Auto Inject",
		description: "Automatically inject when Roblox is detected",
		onChange: c => t.onChange("autoInject", c),
		get checked() {
			return n().autoInject
		},
		set checked(c) {
			xe(I, H(n).autoInject = c, H(n))
		}
	});
	var p = m(r, 2);
	_e(p, {
		title: "Enable Minimap",
		description: "Show code minimap in the editor",
		onChange: c => t.onChange("enableMinimap", c),
		get checked() {
			return n().enableMinimap
		},
		set checked(c) {
			xe(I, H(n).enableMinimap = c, H(n))
		}
	});
	var g = m(p, 2);
	ta(g, {
		title: "Internal UI Hotkey",
		description: "Set the hotkey for toggling the internal UI",
		keybind: "HOME"
	});
	var o = m(g, 2);
	_e(o, {
		title: "Redirect Roblox Output",
		description: "Show Roblox output in the console",
		onChange: c => t.onChange("redirectRobloxOutput", c),
		get checked() {
			return n().redirectRobloxOutput
		},
		set checked(c) {
			xe(I, H(n).redirectRobloxOutput = c, H(n))
		}
	}), u(f), u(s), P(1, s, () => ee, () => ({
		duration: 150
	})), b(e, s), O(), i()
}
var ia = _('<button class="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-sm rounded-md transition-colors">Cancel</button>'),
	ra = _('<main class="flex flex-col p-2 gap-2.5 h-full w-full overflow-hidden"><h1 class="text-xl text-zinc-200 font-semibold">Settings</h1> <!> <div class="border border-zinc-800 rounded-lg p-4 flex-1 min-h-0 overflow-y-auto"><!></div> <div class="flex flex-row justify-end gap-3 mt-2 mb-2"><!> <button class="px-3 py-1.5 bg-[#FB9866]/30 hover:bg-[#fb9866]/37 text-[#FB9866] font-medium text-sm rounded-md transition-colors">Save Changes</button></div></main>');

function oa(e, t) {
	M(t, !1);
	const [a, i] = ne(), n = () => Q(Nt, "$changes", a);
	let s = se("General");
	const f = [{
		label: "General",
		icon: it
	}];

	function r(x, l) {
		Lt(x, l)
	}
	ze(async() => {
		await Rt()
	}), G();
	var p = ra(),
		g = m(v(p), 2);
	Qt(g, {
		categories: f,
		get active() {
			return d(s)
		},
		onSelect: Ee
	});
	var o = m(g, 2),
		c = v(o); {
		var k = x => {
			na(x, {
				onChange: r
			})
		};
		R(c, x => {
			d(s) === "General" && x(k)
		})
	}
	u(o);
	var h = m(o, 2),
		w = v(h); {
		var $ = x => {
			var l = ia();
			l.__click = function(...y) {
				me == null || me.apply(this, y)
			}, P(1, l, () => ee, () => ({
				duration: 200
			})), P(2, l, () => ee, () => ({
				duration: 200
			})), b(x, l)
		};
		R(w, x => {
			n() && x($)
		})
	}
	var A = m(w, 2);
	A.__click = function(...x) {
		be == null || be.apply(this, x)
	}, u(h), u(p), N(() => A.disabled = !n()), P(1, p, () => ee, () => ({
		duration: 250
	})), b(e, p), O(), i()
}
J(["click"]);
var sa = _("<p>hey this is the profile</p>");

function ca(e) {
	var t = sa();
	b(e, t)
}

function la() {
	re({
		id: "editor",
		label: "Editor",
		icon: rt,
		disabled: !1,
		comp: Ut,
		pos: 1
	}), re({
		id: "scripts",
		label: "Scripts",
		icon: ot,
		disabled: !0,
		comp: Gt,
		pos: 2
	}), re({
		id: "settings",
		label: "Settings",
		icon: st,
		disabled: !1,
		comp: oa,
		pos: 3
	}), re({
		id: "profile",
		label: "Profile",
		icon: ct,
		disabled: !0,
		comp: ca,
		pos: 4
	})
}
var da = _('<p class="text-zinc-400">:D</p>'),
	ua = _('<div class="h-full w-full flex flex-col overflow-hidden"><!></div>');

function va(e, t) {
	M(t, !1);
	const [a, i] = ne(), n = () => Q(lt, "$active", a), s = () => Q(dt, "$tabs", a);
	G();
	var f = ua(),
		r = v(f); {
		var p = o => {
				var c = ve(),
					k = oe(c); {
					var h = w => {
						var $ = ve(),
							A = oe($);
						ae(A, 1, () => s().filter(x => x.id === n()), x => x.id, (x, l) => {
							var y = ve(),
								z = oe(y);
							ft(z, () => d(l).comp, (K, X) => {
								X(K, {})
							}), b(x, y)
						}), b(w, $)
					};
					R(k, w => {
						s().length > 0 && w(h)
					})
				}
				b(o, c)
			},
			g = o => {
				var c = da();
				b(o, c)
			};
		R(r, o => {
			n() ? o(p) : o(g, !1)
		})
	}
	u(f), b(e, f), O(), i()
}
var fa = _('<div class="px-4 py-2 h-full w-full flex flex-col overflow-hidden"><!></div>');

function _a(e, t) {
	M(t, !1), ze(() => {
		la(), Ee("editor"), S.clear(), S.warn("Beta release, expect bugs.")
	}), G();
	var a = fa(),
		i = v(a);
	va(i, {}), u(a), b(e, a), O()
}
export {
	_a as component
};