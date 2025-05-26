var ue = Object.defineProperty;
var J = t => {
    throw TypeError(t)
};
var ce = (t, e, s) => e in t ? ue(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s;
var F = (t, e, s) => ce(t, typeof e != "symbol" ? e + "" : e, s),
    he = (t, e, s) => e.has(t) || J("Cannot " + s);
var o = (t, e, s) => (he(t, e, "read from private field"), s ? s.call(t) : e.get(t)),
    w = (t, e, s) => e.has(t) ? J("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s);
import {
    o as de,
    E as we,
    q as _e,
    m as v,
    v as ge,
    R as pe,
    ay as ye,
    az as fe,
    J as be,
    aA as me,
    aB as ve,
    ac as Ee,
    af as Ae,
    ae as f,
    g,
    F as u,
    f as te,
    s as Le,
    k as q,
    l as $,
    t as Oe
} from "./UKEfVatE.js";
import {
    g as Se,
    a as Ne,
    t as xe,
    s as Ce
} from "./DC6_JiNp.js";
import {
    a as l,
    p as Te
} from "./BpPCUSa0.js";

function Wt(t, e, ...s) {
    var n = t,
        i = pe,
        c;
    de(() => {
        i !== (i = e()) && (c && (ye(c), c = null), c = _e(() => i(n, ...s)))
    }, we), v && (n = ge)
}

function Ft(t) {
    if (v) {
        var e = !1,
            s = () => {
                if (!e) {
                    if (e = !0, t.hasAttribute("value")) {
                        var n = t.value;
                        Z(t, "value", null), t.value = n
                    }
                    if (t.hasAttribute("checked")) {
                        var i = t.checked;
                        Z(t, "checked", null), t.checked = i
                    }
                }
            };
        t.__on_r = s, me(s), Se()
    }
}

function zt(t, e) {
    var s = t.__attributes ?? (t.__attributes = {});
    s.value === (s.value = e ?? void 0) || t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e)
}

function Z(t, e, s, n) {
    var i = t.__attributes ?? (t.__attributes = {});
    v && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = s) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[fe] = s), s == null ? t.removeAttribute(e) : typeof s != "string" && Ie(t).includes(e) ? t[e] = s : t.setAttribute(e, s))
}
var Y = new Map;

function Ie(t) {
    var e = Y.get(t.nodeName);
    if (e) return e;
    Y.set(t.nodeName, e = []);
    for (var s, n = t, i = Element.prototype; i !== n;) {
        s = ve(n);
        for (var c in s) s[c].set && e.push(c);
        n = be(n)
    }
    return e
}

function Rt(t, e, s) {
    var n = t.__className,
        i = se(e, s);
    v && t.getAttribute("class") === i ? t.__className = i : (n !== i || v && t.getAttribute("class") !== i) && (i === "" ? t.removeAttribute("class") : t.setAttribute("class", i), t.__className = i)
}

function Gt(t, e, s) {
    var n = t.__className,
        i = se(e, s);
    v && t.className === i ? t.__className = i : (n !== i || v && t.className !== i) && (e == null && !s ? t.removeAttribute("class") : t.className = i, t.__className = i)
}

function se(t, e) {
    return (t ?? "") + (e ? " " + e : "")
}

function Mt(t, e, s) {
    if (s) {
        if (t.classList.contains(e)) return;
        t.classList.add(e)
    } else {
        if (!t.classList.contains(e)) return;
        t.classList.remove(e)
    }
}
var d = (t => (t.Attaching = "ATTACHING", t.Fatal = "FATAL", t.Inactive = "INACTIVE", t.Loading = "LOADING", t.LoggedOut = "LOGGED-OUT", t.Nonfatal = "NONFATAL", t.Success = "SUCCESS", t.WaitingAttach = "WAITING", t.WaitingForGame = "WAITINGFORGAME", t))(d || {});
const Pt = {
        ATTACHING: "blob-loading",
        FATAL: "blob-fatal",
        INACTIVE: "blob-inactive",
        LOADING: "blob-loading",
        "LOGGED-OUT": "blob-logged-out",
        NONFATAL: "blob-nonfatal",
        SUCCESS: "blob-success",
        WAITING: "blob-waiting-attach",
        WAITINGFORGAME: "blob-waiting-for-game"
    },
    Ut = {
        ATTACHING: "Attaching",
        FATAL: "Fatal Error",
        INACTIVE: "Inactive",
        LOADING: "Loading",
        "LOGGED-OUT": "Logged Out",
        NONFATAL: "Non-Fatal Error",
        SUCCESS: "Injected",
        WAITING: "Waiting to attach...",
        WAITINGFORGAME: "Waiting for you to join a game..."
    };

function ke(t, e, s, n) {
    if (s === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return s === "m" ? n : s === "a" ? n.call(t) : n ? n.value : e.get(t)
}

function De(t, e, s, n, i) {
    if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return e.set(t, s), s
}
var R;
const y = "__TAURI_TO_IPC_KEY__";

function We(t, e = !1) {
    return window.__TAURI_INTERNALS__.transformCallback(t, e)
}
async function r(t, e = {}, s) {
    return window.__TAURI_INTERNALS__.invoke(t, e, s)
}
class Fe {
    get rid() {
        return ke(this, R, "f")
    }
    constructor(e) {
        R.set(this, void 0), De(this, R, e)
    }
    async close() {
        return r("plugin:resources|close", {
            rid: this.rid
        })
    }
}
R = new WeakMap;
class re {
    constructor(...e) {
        this.type = "Logical", e.length === 1 ? "Logical" in e[0] ? (this.width = e[0].Logical.width, this.height = e[0].Logical.height) : (this.width = e[0].width, this.height = e[0].height) : (this.width = e[0], this.height = e[1])
    }
    toPhysical(e) {
        return new A(this.width * e, this.height * e)
    } [y]() {
        return {
            width: this.width,
            height: this.height
        }
    }
    toJSON() {
        return this[y]()
    }
}
class A {
    constructor(...e) {
        this.type = "Physical", e.length === 1 ? "Physical" in e[0] ? (this.width = e[0].Physical.width, this.height = e[0].Physical.height) : (this.width = e[0].width, this.height = e[0].height) : (this.width = e[0], this.height = e[1])
    }
    toLogical(e) {
        return new re(this.width / e, this.height / e)
    } [y]() {
        return {
            width: this.width,
            height: this.height
        }
    }
    toJSON() {
        return this[y]()
    }
}
class E {
    constructor(e) {
        this.size = e
    }
    toLogical(e) {
        return this.size instanceof re ? this.size : this.size.toLogical(e)
    }
    toPhysical(e) {
        return this.size instanceof A ? this.size : this.size.toPhysical(e)
    } [y]() {
        return {
            [`${this.size.type}`]: {
                width: this.size.width,
                height: this.size.height
            }
        }
    }
    toJSON() {
        return this[y]()
    }
}
class ne {
    constructor(...e) {
        this.type = "Logical", e.length === 1 ? "Logical" in e[0] ? (this.x = e[0].Logical.x, this.y = e[0].Logical.y) : (this.x = e[0].x, this.y = e[0].y) : (this.x = e[0], this.y = e[1])
    }
    toPhysical(e) {
        return new b(this.x * e, this.y * e)
    } [y]() {
        return {
            x: this.x,
            y: this.y
        }
    }
    toJSON() {
        return this[y]()
    }
}
class b {
    constructor(...e) {
        this.type = "Physical", e.length === 1 ? "Physical" in e[0] ? (this.x = e[0].Physical.x, this.y = e[0].Physical.y) : (this.x = e[0].x, this.y = e[0].y) : (this.x = e[0], this.y = e[1])
    }
    toLogical(e) {
        return new ne(this.x / e, this.y / e)
    } [y]() {
        return {
            x: this.x,
            y: this.y
        }
    }
    toJSON() {
        return this[y]()
    }
}
class z {
    constructor(e) {
        this.position = e
    }
    toLogical(e) {
        return this.position instanceof ne ? this.position : this.position.toLogical(e)
    }
    toPhysical(e) {
        return this.position instanceof b ? this.position : this.position.toPhysical(e)
    } [y]() {
        return {
            [`${this.position.type}`]: {
                x: this.position.x,
                y: this.position.y
            }
        }
    }
    toJSON() {
        return this[y]()
    }
}
var p;
(function(t) {
    t.WINDOW_RESIZED = "tauri://resize", t.WINDOW_MOVED = "tauri://move", t.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", t.WINDOW_DESTROYED = "tauri://destroyed", t.WINDOW_FOCUS = "tauri://focus", t.WINDOW_BLUR = "tauri://blur", t.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", t.WINDOW_THEME_CHANGED = "tauri://theme-changed", t.WINDOW_CREATED = "tauri://window-created", t.WEBVIEW_CREATED = "tauri://webview-created", t.DRAG_ENTER = "tauri://drag-enter", t.DRAG_OVER = "tauri://drag-over", t.DRAG_DROP = "tauri://drag-drop", t.DRAG_LEAVE = "tauri://drag-leave"
})(p || (p = {}));
async function ie(t, e) {
    await r("plugin:event|unlisten", {
        event: t,
        eventId: e
    })
}
async function ae(t, e, s) {
    var n;
    const i = typeof(s == null ? void 0 : s.target) == "string" ? {
        kind: "AnyLabel",
        label: s.target
    } : (n = s == null ? void 0 : s.target) !== null && n !== void 0 ? n : {
        kind: "Any"
    };
    return r("plugin:event|listen", {
        event: t,
        target: i,
        handler: We(e)
    }).then(c => async () => ie(t, c))
}
async function ze(t, e, s) {
    return ae(t, n => {
        ie(t, n.id), e(n)
    }, s)
}
async function Re(t, e) {
    await r("plugin:event|emit", {
        event: t,
        payload: e
    })
}
async function Ge(t, e, s) {
    await r("plugin:event|emit_to", {
        target: typeof t == "string" ? {
            kind: "AnyLabel",
            label: t
        } : t,
        event: e,
        payload: s
    })
}
class L extends Fe {
    constructor(e) {
        super(e)
    }
    static async new(e, s, n) {
        return r("plugin:image|new", {
            rgba: M(e),
            width: s,
            height: n
        }).then(i => new L(i))
    }
    static async fromBytes(e) {
        return r("plugin:image|from_bytes", {
            bytes: M(e)
        }).then(s => new L(s))
    }
    static async fromPath(e) {
        return r("plugin:image|from_path", {
            path: e
        }).then(s => new L(s))
    }
    async rgba() {
        return r("plugin:image|rgba", {
            rid: this.rid
        }).then(e => new Uint8Array(e))
    }
    async size() {
        return r("plugin:image|size", {
            rid: this.rid
        })
    }
}

function M(t) {
    return t == null ? null : typeof t == "string" ? t : t instanceof L ? t.rid : t
}
var V;
(function(t) {
    t[t.Critical = 1] = "Critical", t[t.Informational = 2] = "Informational"
})(V || (V = {}));
class Me {
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
var K;
(function(t) {
    t.None = "none", t.Normal = "normal", t.Indeterminate = "indeterminate", t.Paused = "paused", t.Error = "error"
})(K || (K = {}));

function Pe() {
    return new le(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
        skip: !0
    })
}
async function B() {
    return r("plugin:window|get_all_windows").then(t => t.map(e => new le(e, {
        skip: !0
    })))
}
const H = ["tauri://created", "tauri://error"];
class le {
    constructor(e, s = {}) {
        var n;
        this.label = e, this.listeners = Object.create(null), s != null && s.skip || r("plugin:window|create", {
            options: {
                ...s,
                parent: typeof s.parent == "string" ? s.parent : (n = s.parent) === null || n === void 0 ? void 0 : n.label,
                label: e
            }
        }).then(async () => this.emit("tauri://created")).catch(async i => this.emit("tauri://error", i))
    }
    static async getByLabel(e) {
        var s;
        return (s = (await B()).find(n => n.label === e)) !== null && s !== void 0 ? s : null
    }
    static getCurrent() {
        return Pe()
    }
    static async getAll() {
        return B()
    }
    static async getFocusedWindow() {
        for (const e of await B())
            if (await e.isFocused()) return e;
        return null
    }
    async listen(e, s) {
        return this._handleTauriEvent(e, s) ? () => {
            const n = this.listeners[e];
            n.splice(n.indexOf(s), 1)
        } : ae(e, s, {
            target: {
                kind: "Window",
                label: this.label
            }
        })
    }
    async once(e, s) {
        return this._handleTauriEvent(e, s) ? () => {
            const n = this.listeners[e];
            n.splice(n.indexOf(s), 1)
        } : ze(e, s, {
            target: {
                kind: "Window",
                label: this.label
            }
        })
    }
    async emit(e, s) {
        if (H.includes(e)) {
            for (const n of this.listeners[e] || []) n({
                event: e,
                id: -1,
                payload: s
            });
            return
        }
        return Re(e, s)
    }
    async emitTo(e, s, n) {
        if (H.includes(s)) {
            for (const i of this.listeners[s] || []) i({
                event: s,
                id: -1,
                payload: n
            });
            return
        }
        return Ge(e, s, n)
    }
    _handleTauriEvent(e, s) {
        return H.includes(e) ? (e in this.listeners ? this.listeners[e].push(s) : this.listeners[e] = [s], !0) : !1
    }
    async scaleFactor() {
        return r("plugin:window|scale_factor", {
            label: this.label
        })
    }
    async innerPosition() {
        return r("plugin:window|inner_position", {
            label: this.label
        }).then(e => new b(e))
    }
    async outerPosition() {
        return r("plugin:window|outer_position", {
            label: this.label
        }).then(e => new b(e))
    }
    async innerSize() {
        return r("plugin:window|inner_size", {
            label: this.label
        }).then(e => new A(e))
    }
    async outerSize() {
        return r("plugin:window|outer_size", {
            label: this.label
        }).then(e => new A(e))
    }
    async isFullscreen() {
        return r("plugin:window|is_fullscreen", {
            label: this.label
        })
    }
    async isMinimized() {
        return r("plugin:window|is_minimized", {
            label: this.label
        })
    }
    async isMaximized() {
        return r("plugin:window|is_maximized", {
            label: this.label
        })
    }
    async isFocused() {
        return r("plugin:window|is_focused", {
            label: this.label
        })
    }
    async isDecorated() {
        return r("plugin:window|is_decorated", {
            label: this.label
        })
    }
    async isResizable() {
        return r("plugin:window|is_resizable", {
            label: this.label
        })
    }
    async isMaximizable() {
        return r("plugin:window|is_maximizable", {
            label: this.label
        })
    }
    async isMinimizable() {
        return r("plugin:window|is_minimizable", {
            label: this.label
        })
    }
    async isClosable() {
        return r("plugin:window|is_closable", {
            label: this.label
        })
    }
    async isVisible() {
        return r("plugin:window|is_visible", {
            label: this.label
        })
    }
    async title() {
        return r("plugin:window|title", {
            label: this.label
        })
    }
    async theme() {
        return r("plugin:window|theme", {
            label: this.label
        })
    }
    async center() {
        return r("plugin:window|center", {
            label: this.label
        })
    }
    async requestUserAttention(e) {
        let s = null;
        return e && (e === V.Critical ? s = {
            type: "Critical"
        } : s = {
            type: "Informational"
        }), r("plugin:window|request_user_attention", {
            label: this.label,
            value: s
        })
    }
    async setResizable(e) {
        return r("plugin:window|set_resizable", {
            label: this.label,
            value: e
        })
    }
    async setEnabled(e) {
        return r("plugin:window|set_enabled", {
            label: this.label,
            value: e
        })
    }
    async isEnabled() {
        return r("plugin:window|is_enabled", {
            label: this.label
        })
    }
    async setMaximizable(e) {
        return r("plugin:window|set_maximizable", {
            label: this.label,
            value: e
        })
    }
    async setMinimizable(e) {
        return r("plugin:window|set_minimizable", {
            label: this.label,
            value: e
        })
    }
    async setClosable(e) {
        return r("plugin:window|set_closable", {
            label: this.label,
            value: e
        })
    }
    async setTitle(e) {
        return r("plugin:window|set_title", {
            label: this.label,
            value: e
        })
    }
    async maximize() {
        return r("plugin:window|maximize", {
            label: this.label
        })
    }
    async unmaximize() {
        return r("plugin:window|unmaximize", {
            label: this.label
        })
    }
    async toggleMaximize() {
        return r("plugin:window|toggle_maximize", {
            label: this.label
        })
    }
    async minimize() {
        return r("plugin:window|minimize", {
            label: this.label
        })
    }
    async unminimize() {
        return r("plugin:window|unminimize", {
            label: this.label
        })
    }
    async show() {
        return r("plugin:window|show", {
            label: this.label
        })
    }
    async hide() {
        return r("plugin:window|hide", {
            label: this.label
        })
    }
    async close() {
        return r("plugin:window|close", {
            label: this.label
        })
    }
    async destroy() {
        return r("plugin:window|destroy", {
            label: this.label
        })
    }
    async setDecorations(e) {
        return r("plugin:window|set_decorations", {
            label: this.label,
            value: e
        })
    }
    async setShadow(e) {
        return r("plugin:window|set_shadow", {
            label: this.label,
            value: e
        })
    }
    async setEffects(e) {
        return r("plugin:window|set_effects", {
            label: this.label,
            value: e
        })
    }
    async clearEffects() {
        return r("plugin:window|set_effects", {
            label: this.label,
            value: null
        })
    }
    async setAlwaysOnTop(e) {
        return r("plugin:window|set_always_on_top", {
            label: this.label,
            value: e
        })
    }
    async setAlwaysOnBottom(e) {
        return r("plugin:window|set_always_on_bottom", {
            label: this.label,
            value: e
        })
    }
    async setContentProtected(e) {
        return r("plugin:window|set_content_protected", {
            label: this.label,
            value: e
        })
    }
    async setSize(e) {
        return r("plugin:window|set_size", {
            label: this.label,
            value: e instanceof E ? e : new E(e)
        })
    }
    async setMinSize(e) {
        return r("plugin:window|set_min_size", {
            label: this.label,
            value: e instanceof E ? e : e ? new E(e) : null
        })
    }
    async setMaxSize(e) {
        return r("plugin:window|set_max_size", {
            label: this.label,
            value: e instanceof E ? e : e ? new E(e) : null
        })
    }
    async setSizeConstraints(e) {
        function s(n) {
            return n ? {
                Logical: n
            } : null
        }
        return r("plugin:window|set_size_constraints", {
            label: this.label,
            value: {
                minWidth: s(e == null ? void 0 : e.minWidth),
                minHeight: s(e == null ? void 0 : e.minHeight),
                maxWidth: s(e == null ? void 0 : e.maxWidth),
                maxHeight: s(e == null ? void 0 : e.maxHeight)
            }
        })
    }
    async setPosition(e) {
        return r("plugin:window|set_position", {
            label: this.label,
            value: e instanceof z ? e : new z(e)
        })
    }
    async setFullscreen(e) {
        return r("plugin:window|set_fullscreen", {
            label: this.label,
            value: e
        })
    }
    async setFocus() {
        return r("plugin:window|set_focus", {
            label: this.label
        })
    }
    async setIcon(e) {
        return r("plugin:window|set_icon", {
            label: this.label,
            value: M(e)
        })
    }
    async setSkipTaskbar(e) {
        return r("plugin:window|set_skip_taskbar", {
            label: this.label,
            value: e
        })
    }
    async setCursorGrab(e) {
        return r("plugin:window|set_cursor_grab", {
            label: this.label,
            value: e
        })
    }
    async setCursorVisible(e) {
        return r("plugin:window|set_cursor_visible", {
            label: this.label,
            value: e
        })
    }
    async setCursorIcon(e) {
        return r("plugin:window|set_cursor_icon", {
            label: this.label,
            value: e
        })
    }
    async setBackgroundColor(e) {
        return r("plugin:window|set_background_color", {
            color: e
        })
    }
    async setCursorPosition(e) {
        return r("plugin:window|set_cursor_position", {
            label: this.label,
            value: e instanceof z ? e : new z(e)
        })
    }
    async setIgnoreCursorEvents(e) {
        return r("plugin:window|set_ignore_cursor_events", {
            label: this.label,
            value: e
        })
    }
    async startDragging() {
        return r("plugin:window|start_dragging", {
            label: this.label
        })
    }
    async startResizeDragging(e) {
        return r("plugin:window|start_resize_dragging", {
            label: this.label,
            value: e
        })
    }
    async setBadgeCount(e) {
        return r("plugin:window|set_badge_count", {
            label: this.label,
            value: e
        })
    }
    async setBadgeLabel(e) {
        return r("plugin:window|set_badge_label", {
            label: this.label,
            value: e
        })
    }
    async setOverlayIcon(e) {
        return r("plugin:window|set_overlay_icon", {
            label: this.label,
            value: e ? M(e) : void 0
        })
    }
    async setProgressBar(e) {
        return r("plugin:window|set_progress_bar", {
            label: this.label,
            value: e
        })
    }
    async setVisibleOnAllWorkspaces(e) {
        return r("plugin:window|set_visible_on_all_workspaces", {
            label: this.label,
            value: e
        })
    }
    async setTitleBarStyle(e) {
        return r("plugin:window|set_title_bar_style", {
            label: this.label,
            value: e
        })
    }
    async setTheme(e) {
        return r("plugin:window|set_theme", {
            label: this.label,
            value: e
        })
    }
    async onResized(e) {
        return this.listen(p.WINDOW_RESIZED, s => {
            s.payload = new A(s.payload), e(s)
        })
    }
    async onMoved(e) {
        return this.listen(p.WINDOW_MOVED, s => {
            s.payload = new b(s.payload), e(s)
        })
    }
    async onCloseRequested(e) {
        return this.listen(p.WINDOW_CLOSE_REQUESTED, async s => {
            const n = new Me(s);
            await e(n), n.isPreventDefault() || await this.destroy()
        })
    }
    async onDragDropEvent(e) {
        const s = await this.listen(p.DRAG_ENTER, h => {
                e({
                    ...h,
                    payload: {
                        type: "enter",
                        paths: h.payload.paths,
                        position: new b(h.payload.position)
                    }
                })
            }),
            n = await this.listen(p.DRAG_OVER, h => {
                e({
                    ...h,
                    payload: {
                        type: "over",
                        position: new b(h.payload.position)
                    }
                })
            }),
            i = await this.listen(p.DRAG_DROP, h => {
                e({
                    ...h,
                    payload: {
                        type: "drop",
                        paths: h.payload.paths,
                        position: new b(h.payload.position)
                    }
                })
            }),
            c = await this.listen(p.DRAG_LEAVE, h => {
                e({
                    ...h,
                    payload: {
                        type: "leave"
                    }
                })
            });
        return () => {
            s(), i(), n(), c()
        }
    }
    async onFocusChanged(e) {
        const s = await this.listen(p.WINDOW_FOCUS, i => {
                e({
                    ...i,
                    payload: !0
                })
            }),
            n = await this.listen(p.WINDOW_BLUR, i => {
                e({
                    ...i,
                    payload: !1
                })
            });
        return () => {
            s(), n()
        }
    }
    async onScaleChanged(e) {
        return this.listen(p.WINDOW_SCALE_FACTOR_CHANGED, e)
    }
    async onThemeChanged(e) {
        return this.listen(p.WINDOW_THEME_CHANGED, e)
    }
}
var Q;
(function(t) {
    t.AppearanceBased = "appearanceBased", t.Light = "light", t.Dark = "dark", t.MediumLight = "mediumLight", t.UltraDark = "ultraDark", t.Titlebar = "titlebar", t.Selection = "selection", t.Menu = "menu", t.Popover = "popover", t.Sidebar = "sidebar", t.HeaderView = "headerView", t.Sheet = "sheet", t.WindowBackground = "windowBackground", t.HudWindow = "hudWindow", t.FullScreenUI = "fullScreenUI", t.Tooltip = "tooltip", t.ContentBackground = "contentBackground", t.UnderWindowBackground = "underWindowBackground", t.UnderPageBackground = "underPageBackground", t.Mica = "mica", t.Blur = "blur", t.Acrylic = "acrylic", t.Tabbed = "tabbed", t.TabbedDark = "tabbedDark", t.TabbedLight = "tabbedLight"
})(Q || (Q = {}));
var X;
(function(t) {
    t.FollowsWindowActiveState = "followsWindowActiveState", t.Active = "active", t.Inactive = "inactive"
})(X || (X = {}));
const Bt = ({
    intervalInMillis: t,
    exitOnError: e = !1
}, s) => {
    let n = null,
        i = !0;
    Ee(async () => {
        i = !1;
        const c = async () => {
            if (n = null, e) await s();
            else try {
                await s()
            } catch (h) {
                console.error(h)
            }
            i || (n = setTimeout(c, t))
        };
        await c()
    }), Ae(() => {
        clearTimeout(n ?? void 0), n = null, i = !0
    })
};
var Ue = class {
        constructor() {
            this._event_listeners = {}
        }
        on(t, e) {
            return this._event_listeners[t] || (this._event_listeners[t] = []), this._event_listeners[t].push([e, e]), this
        }
        once(t, e) {
            return this._event_listeners[t] || (this._event_listeners[t] = []), this._event_listeners[t].push([e, (...s) => (this.removeListener(t, e), e(...s))]), this
        }
        emit(t, ...e) {
            if (!this._event_listeners[t]) return !1;
            for (let [s, n] of this._event_listeners[t]) n(...e);
            return !0
        }
        off(t, e) {
            return this._event_listeners[t] ? (this._event_listeners[t] = this._event_listeners[t].filter(([s]) => s !== e), this) : this
        }
        removeListener(t, e) {
            return this.off(t, e)
        }
        removeAllListeners(t) {
            return t ? delete this._event_listeners[t] : this._event_listeners = {}, this
        }
        listeners(t) {
            return this._event_listeners[t] ? this._event_listeners[t].map(([e]) => e) : []
        }
        rawListeners(t) {
            return this._event_listeners[t] ? this._event_listeners[t].map(([e]) => e) : []
        }
        listenerCount(t) {
            return this._event_listeners[t] ? this._event_listeners[t].length : 0
        }
        eventNames() {
            return Object.keys(this._event_listeners)
        }
        hasListeners(t) {
            return !!this._event_listeners[t]
        }
        prependListener(t, e) {
            return this._event_listeners[t] || (this._event_listeners[t] = []), this._event_listeners[t].unshift([e, e]), this
        }
        prependOnceListener(t, e) {
            return this._event_listeners[t] || (this._event_listeners[t] = []), this._event_listeners[t].unshift([e, (...s) => (this.removeListener(t, e), e(...s))]), this
        }
    },
    m, Be = (m = class {
        constructor() {
            this.emitter = new m.BaseEventEmitter
        }
        on(e, s) {
            return this.emitter.on(e, s), this
        }
        once(e, s) {
            return this.emitter.once(e, s), this
        }
        emit(e, ...s) {
            return this.emitter.emit(e, ...s)
        }
        off(e, s) {
            return this.emitter.off(e, s), this
        }
        removeListener(e, s) {
            return this.emitter.removeListener(e, s), this
        }
        removeAllListeners(e) {
            return this.emitter.removeAllListeners(e), this
        }
        listeners(e) {
            return this.emitter.listeners(e)
        }
        rawListeners(e) {
            return this.emitter.rawListeners(e)
        }
        listenerCount(e) {
            return this.emitter.listenerCount(e)
        }
        eventNames() {
            return this.emitter.eventNames()
        }
        hasListeners(e) {
            return this.emitter.hasListeners(e)
        }
        prependListener(e, s) {
            return this.emitter.prependListener(e, s), this
        }
        prependOnceListener(e, s) {
            return this.emitter.prependOnceListener(e, s), this
        }
    }, m.BaseEventEmitter = Ue, m),
    He = Be,
    Ve = (t => (t[t.Loading = 0] = "Loading", t[t.Login = 1] = "Login", t[t.Home = 2] = "Home", t[t.Executor = 3] = "Executor", t[t.Settings = 4] = "Settings", t[t.ScriptHub = 5] = "ScriptHub", t[t.Documentation = 6] = "Documentation", t[t.Fatal = 7] = "Fatal", t[t.ConnectionError = 8] = "ConnectionError", t[t.TimeSync = 9] = "TimeSync", t[t.GenericError = 10] = "GenericError", t[t.LicenseExpired = 11] = "LicenseExpired", t[t.DowntimeError = 12] = "DowntimeError", t))(Ve || {});
const oe = (t, ...e) => e.includes(t),
    ee = t => !oe(t, 0, 1, 7, 10, 9, 8, 12, 11),
    je = t => !oe(t, 0, 1, 7, 10, 9, 8, 12, 11);
var O, S, N, x, C, T, I, k, D, W, P;
class Je extends He {
    constructor() {
        super();
        w(this, O, f(0));
        w(this, S, f(l(d.Loading)));
        w(this, N, f(!1));
        w(this, x, f(!1));
        w(this, C, f(!0));
        w(this, T, f("Initializing..."));
        w(this, I, f(""));
        w(this, k, f(""));
        w(this, D, f(!0));
        w(this, W, f(l([])));
        w(this, P, te(() => je(this.currentPage)));
        F(this, "hasFatallyErrored", !1);
        F(this, "isFatallyErroring", 0);
        super.once("loaded", () => this.hasLoaded = !0), super.on("loggedIn", () => this.hasAuthenticated = !0), super.on("loggedOut", () => this.hasAuthenticated = !1), setInterval(async () => {
            var s;
            try {
                if (typeof G < "u" && ee(this.currentPage) && (this.status === d.Success || this.status === d.Inactive)) {
                    const n = await mt();
                    Object.entries(((s = G.launcherState) == null ? void 0 : s.injected_pids) ?? {}).filter(i => i[1] && n.find(c => c.id === parseInt(i[0]))).length === 0 ? this.status = d.Inactive : this.status = d.Success
                }
            } catch {}
        }, 1e3 + Math.random() * 500)
    }
    get currentPage() {
        return g(o(this, O))
    }
    set currentPage(s) {
        u(o(this, O), l(s))
    }
    get status() {
        return g(o(this, S))
    }
    set status(s) {
        u(o(this, S), l(s))
    }
    get hasAuthenticated() {
        return g(o(this, N))
    }
    set hasAuthenticated(s) {
        u(o(this, N), l(s))
    }
    get hasLoaded() {
        return g(o(this, x))
    }
    set hasLoaded(s) {
        u(o(this, x), l(s))
    }
    get execPanelExpanded() {
        return g(o(this, C))
    }
    set execPanelExpanded(s) {
        u(o(this, C), l(s))
    }
    get loadingMessage() {
        return g(o(this, T))
    }
    set loadingMessage(s) {
        u(o(this, T), l(s))
    }
    get fatalErrorMessage() {
        return g(o(this, I))
    }
    set fatalErrorMessage(s) {
        u(o(this, I), l(s))
    }
    get lastAuthError() {
        return g(o(this, k))
    }
    set lastAuthError(s) {
        u(o(this, k), l(s))
    }
    get outputConsoleExpanded() {
        return g(o(this, D))
    }
    set outputConsoleExpanded(s) {
        u(o(this, D), l(s))
    }
    get outputConsoleContent() {
        return g(o(this, W))
    }
    set outputConsoleContent(s) {
        u(o(this, W), l(s))
    }
    get navShown() {
        return g(o(this, P))
    }
    navigateTo(s) {
        var i;
        if (this.hasFatallyErrored) throw new Error("Fatal Error Encountered, cannot navigate away!");
        if (ee(s) && !((i = G.launcherState) != null && i.authenticated)) throw this.fatal(new Error(`Cannot navigate to page ${JSON.stringify(s)} - it requires authentication, and none was provided.`));
        const n = this.currentPage;
        s !== n && (n === 0 && (console.debug("ld"), this.emit("loaded")), s === 1 ? (console.debug("-l"), this.emit("loggedOut")) : (n === 1 || n === 0) && (console.debug("+l"), this.emit("loggedIn"))), this.currentPage = s, this.emit("navigated", s, n)
    }
    loginDone() {
        this.navigateTo(2), this.status = d.Inactive
    }
    logout() {
        this.navigateTo(1), this.status = d.LoggedOut
    }
    showGenericError() {
        this.status = d.Nonfatal, this.navigateTo(10)
    }
    showTimeSync() {
        this.status = d.Nonfatal, this.navigateTo(9)
    }
    showDowntimeNotification() {
        this.status = d.Nonfatal, this.navigateTo(12)
    }
    showExpiredLicense() {
        this.status = d.Nonfatal, this.navigateTo(11)
    }
    showConnectionError() {
        this.status = d.Nonfatal, this.navigateTo(8)
    }
    clearAuthError() {
        this.lastAuthError = ""
    }
    appendOutput(s) {
        const n = new Date().toLocaleTimeString();
        this.outputConsoleContent = [...this.outputConsoleContent, `[${n}] ${s}`]
    }
    appendOutputArray(s) {
        s.forEach(n => this.appendOutput(n))
    }
    clearOutput() {
        this.outputConsoleContent = []
    }
    fatal(s) {
        if (this.isFatallyErroring === 17)
            for (;;) window.close();
        else if (this.isFatallyErroring === 16) {
            const n = new Error("Probably blowing the stack, will hang next!");
            throw console.error(n), this.isFatallyErroring += 1, n
        } else if (this.isFatallyErroring !== 0) {
            const n = new Error("Attempted to fatal inside of a fatal!");
            throw console.error(n), this.isFatallyErroring += 1, n
        }
        if (this.isFatallyErroring = 1, this.hasFatallyErrored) throw new Error("Cannot trigger a 2nd fatal error, we already triggered one!", {
            cause: s
        });
        return j.status = d.Fatal, j.navigateTo(7), this.hasFatallyErrored = !0, s instanceof Error ? this.fatalErrorMessage = s.message : typeof s == "string" ? this.fatalErrorMessage = s : typeof s < "u" ? this.fatalErrorMessage = JSON.stringify(s) : this.fatalErrorMessage = "An unknown error occurred", typeof s < "u" ? console.error("Encountered Fatal Error:", s, new Error("<Virtual Error>")) : console.error("Triggered Fatal Error with no further information. There may be further information logged after this point."), new Error("See Previous Error")
    }
}
O = new WeakMap, S = new WeakMap, N = new WeakMap, x = new WeakMap, C = new WeakMap, T = new WeakMap, I = new WeakMap, k = new WeakMap, D = new WeakMap, W = new WeakMap, P = new WeakMap;
class qe extends Je {
    constructor() {
        super()
    }
}
const j = new qe,
    $e = () => r("get_state"),
    Ze = () => r("initialize"),
    Ye = () => r("auto_authenticate"),
    Ke = (t, e) => r("send_settings", {
        pid: t,
        settings: e
    }),
    Qe = () => r("check_for_updates"),
    Xe = t => r("kill_process", {
        pid: t
    }),
    et = () => r("update_module"),
    tt = () => r("update_injector"),
    st = () => r("force_roblox_live_channel"),
    rt = t => r("select_process", {
        pid: t
    }),
    nt = t => r("deselect_process", {
        pid: t
    }),
    it = t => r("toggle_process_selection", {
        pid: t
    }),
    at = t => r("fetch_scripts", {
        url: t
    }),
    lt = () => r("get_selected_processes"),
    ot = () => r("clear_selected_processes"),
    ut = t => r("set_selected_processes", {
        pids: t
    }),
    ct = t => r("execute_on_selected", {
        script: t
    }),
    ht = () => r("get_subscription_time"),
    dt = (t, e) => r("authenticate", {
        username: t,
        password: e
    }),
    wt = () => r("is_windows_11"),
    _t = () => r("update_interface"),
    gt = async () => {
        console.log("Calling set_game_mutex");
        const t = await r("set_game_mutex");
        return console.log("set_game_mutex completed"), t
    }, pt = () => r("verify_module_hash"), yt = t => r("has_zenith_loaded", {
        pid: t
    }), ft = () => r("get_last_authentication_error"), bt = () => r("release_game_mutex"), mt = () => r("get_rbx_processes"), vt = t => r("inject", {
        pid: t
    }), Et = () => r("cleanup"), At = (t, e) => r("execute", {
        pid: t,
        data: e
    }), Lt = () => r("get_pending_console_output"), Ot = () => r("ensure_vcredist"), St = () => r("get_username"), Ht = {
        scriptDir: {
            async readRecursiveDir() {
                return await r("localfs_read_dir")
            },
            async readFile(t) {
                const [e, s] = await r("localfs_get_file_contents", {
                    filepath: t
                });
                return new a(s)
            },
            async writeFile(t, e) {
                await r("localfs_set_file_contents", {
                    filepath: t,
                    contents: e
                })
            }
        },
        raw: {
            async read(t) {
                return await r("readfile", {
                    filepath: t
                })
            },
            async write(t, e) {
                return await r("writefile", {
                    filepath: t,
                    contents: e
                })
            }
        }
    };
class a {
    constructor(e) {
        F(this, "raw");
        if (e instanceof a ? this.raw = e.raw : this.raw = e, !("Ok" in this.raw || "Err" in this.raw)) throw new Error("This error is neither an Ok nor an Err")
    }
    is_ok() {
        return "Ok" in this.raw
    }
    is_err() {
        return !this.is_ok()
    }
    unwrap_unsafe() {
        return this.raw.Ok
    }
    unwrap_err_unsafe() {
        return this.raw.Err
    }
    unwrap() {
        if (this.is_err()) throw new Error("Unwrapped error result: " + this.unwrap_err_unsafe());
        return this.unwrap_unsafe()
    }
    unwrap_err() {
        if (this.is_ok()) throw new Error("Unwrap_err'ed ok result: " + this.unwrap_unsafe());
        return this.unwrap_err_unsafe()
    }
    static Ok(e) {
        return new a({
            Ok: e
        })
    }
    static Err(e) {
        return new a({
            Err: e
        })
    }
}
let _ = f(null);
var U;
class Nt {
    constructor() {
        w(this, U, te(() => g(_)))
    }
    get launcherState() {
        return g(o(this, U))
    }
    async updateState() {
        const e = await $e();
        return u(_, l(e)), e
    }
    async initialiseLauncher() {
        const e = await Ze();
        return u(_, l(e.state)), new a(e.result)
    }
    async send_settings(e, s) {
        const n = await Ke(e, s);
        return u(_, l(n.state)), new a(n.result)
    }
    async getSubscriptionTime() {
        try {
            const e = await ht();
            return e ? new Date(e * 1e3) : null
        } catch (e) {
            return console.error("Failed to get subscription time:", e), null
        }
    }
    async check_for_updates() {
        const e = await Qe();
        return u(_, l(e.state)), e.result.Ok
    }
    async logout() {
        try {
            const e = await r("logout");
            return u(_, l(e.state)), new a(e.result)
        } catch (e) {
            const s = e instanceof Error ? e.message : String(e);
            return console.error("Logout error:", s), a.Err(s)
        }
    }
    async update_module() {
        const e = await et();
        return u(_, l(e.state)), new a(e.result)
    }
    async update_injector() {
        const e = await tt();
        return u(_, l(e.state)), new a(e.result)
    }
    async select_process(e) {
        try {
            return await rt(e)
        } catch (s) {
            return console.error("Failed to select process:", s), []
        }
    }
    async verify_module_hash() {
        try {
            return await pt(), a.Ok(!0)
        } catch {
            return a.Ok(!0)
        }
    }
    async deselect_process(e) {
        try {
            return await nt(e)
        } catch (s) {
            return console.error("Failed to deselect process:", s), []
        }
    }
    async toggle_process_selection(e) {
        try {
            return await it(e)
        } catch (s) {
            return console.error("Failed to toggle process selection:", s), []
        }
    }
    async get_selected_processes() {
        try {
            return await lt()
        } catch (e) {
            return console.error("Failed to get selected processes:", e), []
        }
    }
    async clear_selected_processes() {
        try {
            return await ot()
        } catch (e) {
            return console.error("Failed to clear selected processes:", e), []
        }
    }
    async set_selected_processes(e) {
        try {
            return await ut(e)
        } catch (s) {
            return console.error("Failed to set selected processes:", s), []
        }
    }
    async execute_on_selected(e) {
        try {
            return await ct(e)
        } catch (s) {
            return console.error("Failed to execute on selected processes:", s), []
        }
    }
    async forceRobloxLiveChannel() {
        try {
            return await st(), a.Ok(void 0)
        } catch (e) {
            return console.log("roblox live version error: " + String(e)), a.Err(String(e))
        }
    }
    async setMutex() {
        try {
            return await gt(), a.Ok(void 0)
        } catch (e) {
            return a.Err(String(e))
        }
    }
    async checkWindows11() {
        try {
            return await wt()
        } catch (e) {
            return console.error("Failed to check Windows version:", e), !1
        }
    }
    async updateInterface() {
        try {
            return await _t()
        } catch (e) {
            return console.error("Failed to check Windows version:", e), !1
        }
    }
    async fetch_scripts(e) {
        try {
            const s = await at(e);
            return s instanceof a || typeof s == "object" && ("Ok" in s || "Err" in s) ? new a(s) : a.Ok(s)
        } catch (s) {
            return console.error("Failed to fetch scripts:", s), a.Err(String(s))
        }
    }
    async releaseMutex() {
        try {
            return await bt(), a.Ok(void 0)
        } catch (e) {
            return a.Err(String(e))
        }
    }
    async ensureVcRedist() {
        try {
            return await Ot(), a.Ok(void 0)
        } catch (e) {
            return a.Err(String(e))
        }
    }
    async getUsername() {
        try {
            return await St()
        } catch (e) {
            return console.error("Failed to get username:", e), null
        }
    }
    async kill_process(e) {
        try {
            return await Xe(e)
        } catch (s) {
            return console.error("Failed to kill process:", s), a.Err(String(s))
        }
    }
    async autoAuthenticate() {
        const e = await Ye();
        return u(_, l(e.state)), new a(e.result)
    }
    async authenticate(e, s) {
        try {
            const n = await dt(e, s);
            return u(_, l(n.state)), new a(n.result)
        } catch (n) {
            const i = n instanceof Error ? n.message : String(n);
            if (i.includes("AuthenticationFailed")) return a.Err(i);
            throw j.fatal(new Error("Fatal Authentication Error: " + i))
        }
    }
    async get_pending_console_output() {
        try {
            return await Lt()
        } catch (e) {
            return console.error("Failed to get pending console output:", e), []
        }
    }
    async getLastAuthenticationError() {
        try {
            return await ft()
        } catch (e) {
            return console.error("Failed to get last authentication error:", e), null
        }
    }
    async has_zenith_loaded(e) {
        try {
            return await yt(e)
        } catch (s) {
            return console.error("Failed to check if Zenith loaded:", s), !1
        }
    }
    async cleanup() {
        const e = await Et();
        return u(_, l(e.state)), new a(e.result)
    }
    async inject(e) {
        const s = await vt(e);
        return u(_, l(s.state)), new a(s.result)
    }
    async execute_script(e, s) {
        const n = await At(e, s);
        return u(_, l(n.state)), new a(n.result)
    }
}
U = new WeakMap;
class xt extends Nt {
    constructor() {
        super()
    }
}
const G = new xt,
    Vt = G;
var Ct = xe('<div class="loader w-full h-full flex flex-col items-center justify-center flex-1 gap-4"><svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg> <p class="text-white/90 text-lg font-semibold"> </p></div>');

function jt(t, e) {
    const s = Te(e, "message", 3, "Initializing...");
    var n = Ct(),
        i = Le(q(n), 2),
        c = q(i, !0);
    $(i), $(n), Oe(() => Ce(c, s())), Ne(t, n)
}
export {
    jt as A, Ve as P, Pt as S, Rt as a, Gt as b, Ut as c, Wt as d, mt as e, d as f, Pe as g, Ft as h, r as i, ae as j, Be as k, G as l, Ht as m, j as n, Vt as o, zt as p, Bt as r, Z as s, Mt as t
};