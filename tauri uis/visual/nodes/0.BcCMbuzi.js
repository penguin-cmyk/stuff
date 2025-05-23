import {
	d as U, t as m, s as B, a as v
}
from "../chunks/IKrY9baT.js";
import {
	o as oe, E as ue, q as ce, J as de, ar as he, m as be, w as we, p as R, k as u, g as _, a7 as Q, s as g, l as o, t as M, j as I, T as ge, a4 as _e
}
from "../chunks/QZtleaAQ.js";
import {
	I as z, s as A, a as ye, e as Y, i as pe, t as ve, b as me, S as w, c as n, d as fe, R as xe, f as ze, g as De, M as ke, h as We, X as K, j as H, k as Ce, E as Oe, l as Se, C as Ae, n as $, m as V, o as Le
}
from "../chunks/B0ST4RaR.js";
import {
	i as Re
}
from "../chunks/DQ7Mtnp1.js";
import {
	s as ee, a as F, i as j
}
from "../chunks/7gxC_TxG.js";

function Ie(i, e, ...t) {
	var l = i,
		s = de,
		a;
	oe(() => {
		s !== (s = e()) && (a && (he(a), a = null), a = ce(() => s(l, ...t)))
	}, ue), be && (l = we)
}
const Ne = !0,
	Pe = !1,
	ci = Object.freeze(Object.defineProperty({
		__proto__: null,
		prerender: Ne,
		ssr: Pe
	}, Symbol.toStringTag, {
		value: "Module"
	}));

function Te(i, e) {
	e.disabled || ye(e.id)
}
var Ee = m("<div><!> <span> </span></div>");

function Be(i, e) {
	R(e, !0);
	var t = Ee();
	t.__click = [Te, e];
	var l = u(t);
	const s = Q(() => `${e.selected?"text-[#FB9866]":"text-zinc-300/70"} size-5`);
	z(l, {get src() {
			return e.icon
		},
		get class() {
			return _(s)
		},
		solid: !0
	});
	var a = g(l, 2),
		r = u(a, !0);
	o(a), o(t), M(() => {
		A(t, 1, `${e.disabled?"opacity-30":"cursor-pointer"} pl-1.5 pr-2 ${e.selected?"bg-[#FB9866]/30 hover:bg-[#fb9866]/37":e.disabled?"":"hover:bg-zinc-700/50"} rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl flex justify-center items-center gap-1.5 transition-colors`), A(a, 1, `${e.selected?"text-[#FB9866]":"text-zinc-300/70"} font-medium font-inter text-sm`), B(r, e.label)
	}), v(i, t), I()
}
U(["click"]);
var Me = m('<div class="bg-zinc-800/30 h-9 rounded-tl-2xl rounded-bl-lg rounded-tr-lg rounded-br-2xl flex p-1 gap-1.5"></div>');

function Fe(i) {
	const [e, t] = ee(), l = () => F(ve, "$tabs", e), s = () => F(me, "$active", e);
	var a = Me();
	Y(a, 5, l, pe, (r, c) => {
		const b = ge(() => s() === _(c).id);
		Be(r, {get id() {
				return _(c).id
			},
			get label() {
				return _(c).label
			},
			get selected() {
				return _(b)
			},
			get icon() {
				return _(c).icon
			},
			get disabled() {
				return _(c).disabled
			}
		})
	}), o(a), v(i, a), t()
}
const Ge = "" + new URL("../assets/logo.BZLihwgJ.png",
	import.meta.url).href;
class ie {
	constructor(...e) {
		this.type = "Logical", e.length === 1 ? "Logical" in e[0] ? (this.width = e[0].Logical.width, this.height = e[0].Logical.height) : (this.width = e[0].width, this.height = e[0].height) : (this.width = e[0], this.height = e[1])
	}
	toPhysical(e) {
		return new k(this.width * e, this.height * e)
	}[w]() {
		return {
			width: this.width,
			height: this.height
		}
	}
	toJSON() {
		return this[w]()
	}
}
class k {
	constructor(...e) {
		this.type = "Physical", e.length === 1 ? "Physical" in e[0] ? (this.width = e[0].Physical.width, this.height = e[0].Physical.height) : (this.width = e[0].width, this.height = e[0].height) : (this.width = e[0], this.height = e[1])
	}
	toLogical(e) {
		return new ie(this.width / e, this.height / e)
	}[w]() {
		return {
			width: this.width,
			height: this.height
		}
	}
	toJSON() {
		return this[w]()
	}
}
class x {
	constructor(e) {
		this.size = e
	}
	toLogical(e) {
		return this.size instanceof ie ? this.size : this.size.toLogical(e)
	}
	toPhysical(e) {
		return this.size instanceof k ? this.size : this.size.toPhysical(e)
	}[w]() {
		return {
			[`${this.size.type}`]: {
				width: this.size.width,
				height: this.size.height
			}
		}
	}
	toJSON() {
		return this[w]()
	}
}
class te {
	constructor(...e) {
		this.type = "Logical", e.length === 1 ? "Logical" in e[0] ? (this.x = e[0].Logical.x, this.y = e[0].Logical.y) : (this.x = e[0].x, this.y = e[0].y) : (this.x = e[0], this.y = e[1])
	}
	toPhysical(e) {
		return new p(this.x * e, this.y * e)
	}[w]() {
		return {
			x: this.x,
			y: this.y
		}
	}
	toJSON() {
		return this[w]()
	}
}
class p {
	constructor(...e) {
		this.type = "Physical", e.length === 1 ? "Physical" in e[0] ? (this.x = e[0].Physical.x, this.y = e[0].Physical.y) : (this.x = e[0].x, this.y = e[0].y) : (this.x = e[0], this.y = e[1])
	}
	toLogical(e) {
		return new te(this.x / e, this.y / e)
	}[w]() {
		return {
			x: this.x,
			y: this.y
		}
	}
	toJSON() {
		return this[w]()
	}
}
class S {
	constructor(e) {
		this.position = e
	}
	toLogical(e) {
		return this.position instanceof te ? this.position : this.position.toLogical(e)
	}
	toPhysical(e) {
		return this.position instanceof p ? this.position : this.position.toPhysical(e)
	}[w]() {
		return {
			[`${this.position.type}`]: {
				x: this.position.x,
				y: this.position.y
			}
		}
	}
	toJSON() {
		return this[w]()
	}
}
var h;
(function(i) {
	i.WINDOW_RESIZED = "tauri://resize", i.WINDOW_MOVED = "tauri://move", i.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", i.WINDOW_DESTROYED = "tauri://destroyed", i.WINDOW_FOCUS = "tauri://focus", i.WINDOW_BLUR = "tauri://blur", i.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", i.WINDOW_THEME_CHANGED = "tauri://theme-changed", i.WINDOW_CREATED = "tauri://window-created", i.WEBVIEW_CREATED = "tauri://webview-created", i.DRAG_ENTER = "tauri://drag-enter", i.DRAG_OVER = "tauri://drag-over", i.DRAG_DROP = "tauri://drag-drop", i.DRAG_LEAVE = "tauri://drag-leave"
})(h || (h = {}));
async function ne(i, e) {
	await n("plugin:event|unlisten", {
		event: i,
		eventId: e
	})
}
async function le(i, e, t) {
	var l;
	const s = typeof(t == null ? void 0 : t.target) == "string" ? {
		kind: "AnyLabel",
		label: t.target
	} : (l = t == null ? void 0 : t.target) !== null && l !== void 0 ? l : {
		kind: "Any"
	};
	return n("plugin:event|listen", {
		event: i,
		target: s,
		handler: fe(e)
	}).then(a => async() => ne(i, a))
}
async function Ue(i, e, t) {
	return le(i, l => {
		ne(i, l.id), e(l)
	}, t)
}
async function He(i, e) {
	await n("plugin:event|emit", {
		event: i,
		payload: e
	})
}
async function Ve(i, e, t) {
	await n("plugin:event|emit_to", {
		target: typeof i == "string" ? {
			kind: "AnyLabel",
			label: i
		} : i,
		event: e,
		payload: t
	})
}
class W extends xe {
	constructor(e) {
		super(e)
	}
	static async new(e, t, l) {
		return n("plugin:image|new", {
			rgba: L(e),
			width: t,
			height: l
		}).then(s => new W(s))
	}
	static async fromBytes(e) {
		return n("plugin:image|from_bytes", {
			bytes: L(e)
		}).then(t => new W(t))
	}
	static async fromPath(e) {
		return n("plugin:image|from_path", {
			path: e
		}).then(t => new W(t))
	}
	async rgba() {
		return n("plugin:image|rgba", {
			rid: this.rid
		}).then(e => new Uint8Array(e))
	}
	async size() {
		return n("plugin:image|size", {
			rid: this.rid
		})
	}
}

function L(i) {
	return i == null ? null : typeof i == "string" ? i : i instanceof W ? i.rid : i
}
var G;
(function(i) {
	i[i.Critical = 1] = "Critical", i[i.Informational = 2] = "Informational"
})(G || (G = {}));
class je {
	constructor(e) {
		this._preventDefault = !1, this.event = e.event, this.id = e.id
	}
	preventDefault() {
		this._preventDefault = !0
	}
	isPreventDefault() {
		return this._preventDefault
	}
}
var J;
(function(i) {
	i.None = "none", i.Normal = "normal", i.Indeterminate = "indeterminate", i.Paused = "paused", i.Error = "error"
})(J || (J = {}));

function se() {
	return new ae(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
		skip: !0
	})
}
async function T() {
	return n("plugin:window|get_all_windows").then(i => i.map(e => new ae(e, {
		skip: !0
	})))
}
const E = ["tauri://created", "tauri://error"];
class ae {
	constructor(e, t = {}) {
		var l;
		this.label = e, this.listeners = Object.create(null), t != null && t.skip || n("plugin:window|create", {
			options: {...t, parent: typeof t.parent == "string" ? t.parent : (l = t.parent) === null || l === void 0 ? void 0 : l.label, label: e
			}
		}).then(async() => this.emit("tauri://created")).catch(async s => this.emit("tauri://error", s))
	}
	static async getByLabel(e) {
		var t;
		return(t = (await T()).find(l => l.label === e)) !== null && t !== void 0 ? t : null
	}
	static getCurrent() {
		return se()
	}
	static async getAll() {
		return T()
	}
	static async getFocusedWindow() {
		for(const e of await T())
			if(await e.isFocused()) return e;
		return null
	}
	async listen(e, t) {
		return this._handleTauriEvent(e, t) ? () => {
			const l = this.listeners[e];
			l.splice(l.indexOf(t), 1)
		} : le(e, t, {
			target: {
				kind: "Window",
				label: this.label
			}
		})
	}
	async once(e, t) {
		return this._handleTauriEvent(e, t) ? () => {
			const l = this.listeners[e];
			l.splice(l.indexOf(t), 1)
		} : Ue(e, t, {
			target: {
				kind: "Window",
				label: this.label
			}
		})
	}
	async emit(e, t) {
		if(E.includes(e)) {
			for(const l of this.listeners[e] || []) l({
				event: e,
				id: -1,
				payload: t
			});
			return
		}
		return He(e, t)
	}
	async emitTo(e, t, l) {
		if(E.includes(t)) {
			for(const s of this.listeners[t] || []) s({
				event: t,
				id: -1,
				payload: l
			});
			return
		}
		return Ve(e, t, l)
	}
	_handleTauriEvent(e, t) {
		return E.includes(e) ? (e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t], !0) : !1
	}
	async scaleFactor() {
		return n("plugin:window|scale_factor", {
			label: this.label
		})
	}
	async innerPosition() {
		return n("plugin:window|inner_position", {
			label: this.label
		}).then(e => new p(e))
	}
	async outerPosition() {
		return n("plugin:window|outer_position", {
			label: this.label
		}).then(e => new p(e))
	}
	async innerSize() {
		return n("plugin:window|inner_size", {
			label: this.label
		}).then(e => new k(e))
	}
	async outerSize() {
		return n("plugin:window|outer_size", {
			label: this.label
		}).then(e => new k(e))
	}
	async isFullscreen() {
		return n("plugin:window|is_fullscreen", {
			label: this.label
		})
	}
	async isMinimized() {
		return n("plugin:window|is_minimized", {
			label: this.label
		})
	}
	async isMaximized() {
		return n("plugin:window|is_maximized", {
			label: this.label
		})
	}
	async isFocused() {
		return n("plugin:window|is_focused", {
			label: this.label
		})
	}
	async isDecorated() {
		return n("plugin:window|is_decorated", {
			label: this.label
		})
	}
	async isResizable() {
		return n("plugin:window|is_resizable", {
			label: this.label
		})
	}
	async isMaximizable() {
		return n("plugin:window|is_maximizable", {
			label: this.label
		})
	}
	async isMinimizable() {
		return n("plugin:window|is_minimizable", {
			label: this.label
		})
	}
	async isClosable() {
		return n("plugin:window|is_closable", {
			label: this.label
		})
	}
	async isVisible() {
		return n("plugin:window|is_visible", {
			label: this.label
		})
	}
	async title() {
		return n("plugin:window|title", {
			label: this.label
		})
	}
	async theme() {
		return n("plugin:window|theme", {
			label: this.label
		})
	}
	async isAlwaysOnTop() {
		return n("plugin:window|is_always_on_top", {
			label: this.label
		})
	}
	async center() {
		return n("plugin:window|center", {
			label: this.label
		})
	}
	async requestUserAttention(e) {
		let t = null;
		return e && (e === G.Critical ? t = {
			type: "Critical"
		} : t = {
			type: "Informational"
		}), n("plugin:window|request_user_attention", {
			label: this.label,
			value: t
		})
	}
	async setResizable(e) {
		return n("plugin:window|set_resizable", {
			label: this.label,
			value: e
		})
	}
	async setEnabled(e) {
		return n("plugin:window|set_enabled", {
			label: this.label,
			value: e
		})
	}
	async isEnabled() {
		return n("plugin:window|is_enabled", {
			label: this.label
		})
	}
	async setMaximizable(e) {
		return n("plugin:window|set_maximizable", {
			label: this.label,
			value: e
		})
	}
	async setMinimizable(e) {
		return n("plugin:window|set_minimizable", {
			label: this.label,
			value: e
		})
	}
	async setClosable(e) {
		return n("plugin:window|set_closable", {
			label: this.label,
			value: e
		})
	}
	async setTitle(e) {
		return n("plugin:window|set_title", {
			label: this.label,
			value: e
		})
	}
	async maximize() {
		return n("plugin:window|maximize", {
			label: this.label
		})
	}
	async unmaximize() {
		return n("plugin:window|unmaximize", {
			label: this.label
		})
	}
	async toggleMaximize() {
		return n("plugin:window|toggle_maximize", {
			label: this.label
		})
	}
	async minimize() {
		return n("plugin:window|minimize", {
			label: this.label
		})
	}
	async unminimize() {
		return n("plugin:window|unminimize", {
			label: this.label
		})
	}
	async show() {
		return n("plugin:window|show", {
			label: this.label
		})
	}
	async hide() {
		return n("plugin:window|hide", {
			label: this.label
		})
	}
	async close() {
		return n("plugin:window|close", {
			label: this.label
		})
	}
	async destroy() {
		return n("plugin:window|destroy", {
			label: this.label
		})
	}
	async setDecorations(e) {
		return n("plugin:window|set_decorations", {
			label: this.label,
			value: e
		})
	}
	async setShadow(e) {
		return n("plugin:window|set_shadow", {
			label: this.label,
			value: e
		})
	}
	async setEffects(e) {
		return n("plugin:window|set_effects", {
			label: this.label,
			value: e
		})
	}
	async clearEffects() {
		return n("plugin:window|set_effects", {
			label: this.label,
			value: null
		})
	}
	async setAlwaysOnTop(e) {
		return n("plugin:window|set_always_on_top", {
			label: this.label,
			value: e
		})
	}
	async setAlwaysOnBottom(e) {
		return n("plugin:window|set_always_on_bottom", {
			label: this.label,
			value: e
		})
	}
	async setContentProtected(e) {
		return n("plugin:window|set_content_protected", {
			label: this.label,
			value: e
		})
	}
	async setSize(e) {
		return n("plugin:window|set_size", {
			label: this.label,
			value: e instanceof x ? e : new x(e)
		})
	}
	async setMinSize(e) {
		return n("plugin:window|set_min_size", {
			label: this.label,
			value: e instanceof x ? e : e ? new x(e) : null
		})
	}
	async setMaxSize(e) {
		return n("plugin:window|set_max_size", {
			label: this.label,
			value: e instanceof x ? e : e ? new x(e) : null
		})
	}
	async setSizeConstraints(e) {
		function t(l) {
			return l ? {
				Logical: l
			} : null
		}
		return n("plugin:window|set_size_constraints", {
			label: this.label,
			value: {
				minWidth: t(e == null ? void 0 : e.minWidth),
				minHeight: t(e == null ? void 0 : e.minHeight),
				maxWidth: t(e == null ? void 0 : e.maxWidth),
				maxHeight: t(e == null ? void 0 : e.maxHeight)
			}
		})
	}
	async setPosition(e) {
		return n("plugin:window|set_position", {
			label: this.label,
			value: e instanceof S ? e : new S(e)
		})
	}
	async setFullscreen(e) {
		return n("plugin:window|set_fullscreen", {
			label: this.label,
			value: e
		})
	}
	async setFocus() {
		return n("plugin:window|set_focus", {
			label: this.label
		})
	}
	async setIcon(e) {
		return n("plugin:window|set_icon", {
			label: this.label,
			value: L(e)
		})
	}
	async setSkipTaskbar(e) {
		return n("plugin:window|set_skip_taskbar", {
			label: this.label,
			value: e
		})
	}
	async setCursorGrab(e) {
		return n("plugin:window|set_cursor_grab", {
			label: this.label,
			value: e
		})
	}
	async setCursorVisible(e) {
		return n("plugin:window|set_cursor_visible", {
			label: this.label,
			value: e
		})
	}
	async setCursorIcon(e) {
		return n("plugin:window|set_cursor_icon", {
			label: this.label,
			value: e
		})
	}
	async setBackgroundColor(e) {
		return n("plugin:window|set_background_color", {
			color: e
		})
	}
	async setCursorPosition(e) {
		return n("plugin:window|set_cursor_position", {
			label: this.label,
			value: e instanceof S ? e : new S(e)
		})
	}
	async setIgnoreCursorEvents(e) {
		return n("plugin:window|set_ignore_cursor_events", {
			label: this.label,
			value: e
		})
	}
	async startDragging() {
		return n("plugin:window|start_dragging", {
			label: this.label
		})
	}
	async startResizeDragging(e) {
		return n("plugin:window|start_resize_dragging", {
			label: this.label,
			value: e
		})
	}
	async setBadgeCount(e) {
		return n("plugin:window|set_badge_count", {
			label: this.label,
			value: e
		})
	}
	async setBadgeLabel(e) {
		return n("plugin:window|set_badge_label", {
			label: this.label,
			value: e
		})
	}
	async setOverlayIcon(e) {
		return n("plugin:window|set_overlay_icon", {
			label: this.label,
			value: e ? L(e) : void 0
		})
	}
	async setProgressBar(e) {
		return n("plugin:window|set_progress_bar", {
			label: this.label,
			value: e
		})
	}
	async setVisibleOnAllWorkspaces(e) {
		return n("plugin:window|set_visible_on_all_workspaces", {
			label: this.label,
			value: e
		})
	}
	async setTitleBarStyle(e) {
		return n("plugin:window|set_title_bar_style", {
			label: this.label,
			value: e
		})
	}
	async setTheme(e) {
		return n("plugin:window|set_theme", {
			label: this.label,
			value: e
		})
	}
	async onResized(e) {
		return this.listen(h.WINDOW_RESIZED, t => {
			t.payload = new k(t.payload), e(t)
		})
	}
	async onMoved(e) {
		return this.listen(h.WINDOW_MOVED, t => {
			t.payload = new p(t.payload), e(t)
		})
	}
	async onCloseRequested(e) {
		return this.listen(h.WINDOW_CLOSE_REQUESTED, async t => {
			const l = new je(t);
			await e(l), l.isPreventDefault() || await this.destroy()
		})
	}
	async onDragDropEvent(e) {
		const t = await this.listen(h.DRAG_ENTER, r => {
				e({...r, payload: {
						type: "enter",
						paths: r.payload.paths,
						position: new p(r.payload.position)
					}
				})
			}),
			l = await this.listen(h.DRAG_OVER, r => {
				e({...r, payload: {
						type: "over",
						position: new p(r.payload.position)
					}
				})
			}),
			s = await this.listen(h.DRAG_DROP, r => {
				e({...r, payload: {
						type: "drop",
						paths: r.payload.paths,
						position: new p(r.payload.position)
					}
				})
			}),
			a = await this.listen(h.DRAG_LEAVE, r => {
				e({...r, payload: {
						type: "leave"
					}
				})
			});
		return() => {
			t(), s(), l(), a()
		}
	}
	async onFocusChanged(e) {
		const t = await this.listen(h.WINDOW_FOCUS, s => {
				e({...s, payload: !0
				})
			}),
			l = await this.listen(h.WINDOW_BLUR, s => {
				e({...s, payload: !1
				})
			});
		return() => {
			t(), l()
		}
	}
	async onScaleChanged(e) {
		return this.listen(h.WINDOW_SCALE_FACTOR_CHANGED, e)
	}
	async onThemeChanged(e) {
		return this.listen(h.WINDOW_THEME_CHANGED, e)
	}
}
var q;
(function(i) {
	i.Disabled = "disabled", i.Throttle = "throttle", i.Suspend = "suspend"
})(q || (q = {}));
var Z;
(function(i) {
	i.AppearanceBased = "appearanceBased", i.Light = "light", i.Dark = "dark", i.MediumLight = "mediumLight", i.UltraDark = "ultraDark", i.Titlebar = "titlebar", i.Selection = "selection", i.Menu = "menu", i.Popover = "popover", i.Sidebar = "sidebar", i.HeaderView = "headerView", i.Sheet = "sheet", i.WindowBackground = "windowBackground", i.HudWindow = "hudWindow", i.FullScreenUI = "fullScreenUI", i.Tooltip = "tooltip", i.ContentBackground = "contentBackground", i.UnderWindowBackground = "underWindowBackground", i.UnderPageBackground = "underPageBackground", i.Mica = "mica", i.Blur = "blur", i.Acrylic = "acrylic", i.Tabbed = "tabbed", i.TabbedDark = "tabbedDark", i.TabbedLight = "tabbedLight"
})(Z || (Z = {}));
var X;
(function(i) {
	i.FollowsWindowActiveState = "followsWindowActiveState", i.Active = "active", i.Inactive = "inactive"
})(X || (X = {}));
var Je = (i, e) => e.minimize(),
	qe = (i, e) => e.toggleMaximize(),
	Ze = (i, e) => {
		e.close(), De()
	},
	Xe = m('<div data-tauri-drag-region="" class="h-14 flex px-1 gap-2 items-center justify-between"><div class="flex flex-row items-center gap-2"><img alt="logo" class="size-14"> <!></div>  <div data-tauri-drag-region="" class="flex pr-4 justify-center items-center gap-1"><button class="titlebar-button size-6 flex items-center justify-center hover:bg-zinc-500/8 rounded-md transition-all" id="titlebar-minimize"><!></button> <button class="titlebar-button size-6 flex items-center justify-center hover:bg-zinc-500/8 rounded-md transition-all" id="titlebar-maximise"><!></button> <button class="titlebar-button size-6 flex items-center justify-center hover:bg-zinc-500/8 rounded-md transition-all" id="titlebar-close"><!></button></div></div>');

function Qe(i, e) {
	R(e, !1);
	const t = se();
	Re();
	var l = Xe(),
		s = u(l),
		a = u(s);
	ze(a, "src", Ge);
	var r = g(a, 2);
	Fe(r), o(s);
	var c = g(s, 2),
		b = u(c);
	b.__click = [Je, t];
	var C = u(b);
	z(C, {
		src: ke,
		class: "text-zinc-400 size-5",
		solid: !0
	}), o(b);
	var f = g(b, 2);
	f.__click = [qe, t];
	var O = u(f);
	z(O, {
		src: We,
		class: "text-zinc-500 size-5"
	}), o(f);
	var D = g(f, 2);
	D.__click = [Ze, t];
	var N = u(D);
	z(N, {
		src: K,
		class: "text-zinc-500 size-5",
		solid: !0
	}), o(D), o(c), o(l), v(i, l), I()
}
U(["click"]);

function Ye(i, e) {
	$.del(e.notif.id)
}
var Ke = m('<h3 class="font-medium text-zinc-200 mb-1 break-words"> </h3>'),
	$e = m('<button class="flex-shrink-0 text-zinc-400 hover:text-zinc-200 transition-colors ml-1" aria-label="dismiss"><!></button>'),
	ei = m('<div class="flex items-start gap-3 p-3 mb-2 min-w-56 max-w-72 backdrop-blur-sm rounded-lg bg-zinc-700/10"><div><!></div> <div class="flex-1 overflow-hidden"><!> <p class="text-sm text-zinc-300 break-words whitespace-normal"> </p></div> <!></div>');

function ii(i, e) {
	R(e, !0);

	function t(d) {
		switch(d) {
			case "success":
				return Ae;
			case "error":
				return Se;
			case "warning":
				return Oe;
			case "info":
			default:
				return Ce
		}
	}

	function l(d) {
		switch(d) {
			case "success":
				return "text-green-400";
			case "error":
				return "text-red-400";
			case "warning":
				return "text-yellow-400";
			case "info":
			default:
				return "text-zinc-300"
		}
	}
	var s = ei(),
		a = u(s),
		r = u(a);
	const c = Q(() => t(e.notif.type));
	z(r, {get src() {
			return _(c)
		},
		solid: !0,
		class: "size-5"
	}), o(a);
	var b = g(a, 2),
		C = u(b); {
		var f = d => {
			var y = Ke(),
				P = u(y, !0);
			o(y), M(() => B(P, e.notif.title)), v(d, y)
		};
		j(C, d => {
			e.notif.title && d(f)
		})
	}
	var O = g(C, 2),
		D = u(O, !0);
	o(O), o(b);
	var N = g(b, 2); {
		var re = d => {
			var y = $e();
			y.__click = [Ye, e];
			var P = u(y);
			z(P, {
				src: K,
				class: "size-4"
			}), o(y), v(d, y)
		};
		j(N, d => {
			e.notif.dismissible && d(re)
		})
	}
	o(s), M(d => {
		A(a, 1, d), B(D, e.notif.msg)
	}, [() => `flex-shrink-0 mt-0.5 ${l(e.notif.type)}`]), H(1, s, () => V, () => ({
		x: 300,
		duration: 300
	})), H(2, s, () => V, () => ({
		x: 300,
		duration: 300
	})), v(i, s), I()
}
U(["click"]);
var ti = m('<div class="fixed top-14 right-4 max-w-sm z-50 flex flex-col pointer-events-none"><div class="pointer-events-auto"></div></div>');

function ni(i) {
	const [e, t] = ee(), l = () => F($, "$notifs", e);
	var s = ti(),
		a = u(s);
	Y(a, 5, l, r => r.id, (r, c) => {
		ii(r, {get notif() {
				return _(c)
			}
		})
	}), o(a), o(s), v(i, s), t()
}
var li = m('<main class="relative h-screen w-screen flex flex-col overflow-hidden"><div></div> <!> <!> <div class="flex-1 overflow-hidden"><!></div></main>');

function di(i, e) {
	R(e, !0), document.addEventListener("contextmenu", b => {
		b.preventDefault()
	}), _e(() => Le());
	var t = li(),
		l = u(t);
	A(l, 1, "absolute z-50 top-[-200px] left-[-160px] size-64 bg-[#FB9866] rounded-full opacity-15 blur-3xl");
	var s = g(l, 2);
	Qe(s, {});
	var a = g(s, 2);
	ni(a);
	var r = g(a, 2),
		c = u(r);
	Ie(c, () => e.children), o(r), o(t), v(i, t), I()
}
export {
	di as component, ci as universal
};