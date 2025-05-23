import {
	t as _
}
from "./wGmU91Ry.js";
import {
	O as l
}
from "./BKJHFIjU.js";
import {
	i as n, a as o
}
from "./D9LipSXl.js";

function y(e, t, a, r) {
	var s = e.__style;
	if(l || s !== t) {
		var i = _(t);
		(!l || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t
	}
	return r
}
var u;
(function(e) {
	e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave"
})(u || (u = {}));
async function c(e, t) {
	await n("plugin:event|unlisten", {
		event: e,
		eventId: t
	})
}
async function D(e, t, a) {
	var r;
	const s = typeof(a == null ? void 0 : a.target) == "string" ? {
		kind: "AnyLabel",
		label: a.target
	} : (r = a == null ? void 0 : a.target) !== null && r !== void 0 ? r : {
		kind: "Any"
	};
	return n("plugin:event|listen", {
		event: e,
		target: s,
		handler: o(t)
	}).then(i => async() => c(e, i))
}
async function f(e, t, a) {
	return D(e, r => {
		c(e, r.id), t(r)
	}, a)
}
async function O(e, t) {
	await n("plugin:event|emit", {
		event: e,
		payload: t
	})
}
async function A(e, t, a) {
	await n("plugin:event|emit_to", {
		target: typeof e == "string" ? {
			kind: "AnyLabel",
			label: e
		} : e,
		event: t,
		payload: a
	})
}
export {
	u as T, A as a, O as e, D as l, f as o, y as s
};