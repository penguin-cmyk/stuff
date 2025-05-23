(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function im(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Tc = {
    exports: {}
}
  , Co = {}
  , Oc = {
    exports: {}
}
  , H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr = Symbol.for("react.element")
  , om = Symbol.for("react.portal")
  , lm = Symbol.for("react.fragment")
  , sm = Symbol.for("react.strict_mode")
  , am = Symbol.for("react.profiler")
  , um = Symbol.for("react.provider")
  , cm = Symbol.for("react.context")
  , dm = Symbol.for("react.forward_ref")
  , fm = Symbol.for("react.suspense")
  , pm = Symbol.for("react.memo")
  , mm = Symbol.for("react.lazy")
  , Ba = Symbol.iterator;
function hm(e) {
    return e === null || typeof e != "object" ? null : (e = Ba && e[Ba] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var jc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Mc = Object.assign
  , Lc = {};
function er(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Lc,
    this.updater = n || jc
}
er.prototype.isReactComponent = {};
er.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
er.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function zc() {}
zc.prototype = er.prototype;
function Ds(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Lc,
    this.updater = n || jc
}
var Is = Ds.prototype = new zc;
Is.constructor = Ds;
Mc(Is, er.prototype);
Is.isPureReactComponent = !0;
var Qa = Array.isArray
  , Ac = Object.prototype.hasOwnProperty
  , Fs = {
    current: null
}
  , Dc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ic(e, t, n) {
    var r, i = {}, o = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Ac.call(t, r) && !Dc.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        i.children = n;
    else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            i[r] === void 0 && (i[r] = s[r]);
    return {
        $$typeof: Yr,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: Fs.current
    }
}
function ym(e, t) {
    return {
        $$typeof: Yr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function $s(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Yr
}
function gm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ka = /\/+/g;
function Go(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? gm("" + e.key) : t.toString(36)
}
function Li(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Yr:
            case om:
                l = !0
            }
        }
    if (l)
        return l = e,
        i = i(l),
        e = r === "" ? "." + Go(l, 0) : r,
        Qa(i) ? (n = "",
        e != null && (n = e.replace(Ka, "$&/") + "/"),
        Li(i, t, n, "", function(u) {
            return u
        })) : i != null && ($s(i) && (i = ym(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Ka, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    Qa(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var a = r + Go(o, s);
            l += Li(o, t, n, a, i)
        }
    else if (a = hm(e),
    typeof a == "function")
        for (e = a.call(e),
        s = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + Go(o, s++),
            l += Li(o, t, n, a, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function ci(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Li(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function vm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Le = {
    current: null
}
  , zi = {
    transition: null
}
  , wm = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: zi,
    ReactCurrentOwner: Fs
};
function Fc() {
    throw Error("act(...) is not supported in production builds of React.")
}
H.Children = {
    map: ci,
    forEach: function(e, t, n) {
        ci(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ci(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ci(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!$s(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
H.Component = er;
H.Fragment = lm;
H.Profiler = am;
H.PureComponent = Ds;
H.StrictMode = sm;
H.Suspense = fm;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm;
H.act = Fc;
H.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Mc({}, e.props)
      , i = e.key
      , o = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        l = Fs.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (a in t)
            Ac.call(t, a) && !Dc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: Yr,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: l
    }
}
;
H.createContext = function(e) {
    return e = {
        $$typeof: cm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: um,
        _context: e
    },
    e.Consumer = e
}
;
H.createElement = Ic;
H.createFactory = function(e) {
    var t = Ic.bind(null, e);
    return t.type = e,
    t
}
;
H.createRef = function() {
    return {
        current: null
    }
}
;
H.forwardRef = function(e) {
    return {
        $$typeof: dm,
        render: e
    }
}
;
H.isValidElement = $s;
H.lazy = function(e) {
    return {
        $$typeof: mm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: vm
    }
}
;
H.memo = function(e, t) {
    return {
        $$typeof: pm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
H.startTransition = function(e) {
    var t = zi.transition;
    zi.transition = {};
    try {
        e()
    } finally {
        zi.transition = t
    }
}
;
H.unstable_act = Fc;
H.useCallback = function(e, t) {
    return Le.current.useCallback(e, t)
}
;
H.useContext = function(e) {
    return Le.current.useContext(e)
}
;
H.useDebugValue = function() {}
;
H.useDeferredValue = function(e) {
    return Le.current.useDeferredValue(e)
}
;
H.useEffect = function(e, t) {
    return Le.current.useEffect(e, t)
}
;
H.useId = function() {
    return Le.current.useId()
}
;
H.useImperativeHandle = function(e, t, n) {
    return Le.current.useImperativeHandle(e, t, n)
}
;
H.useInsertionEffect = function(e, t) {
    return Le.current.useInsertionEffect(e, t)
}
;
H.useLayoutEffect = function(e, t) {
    return Le.current.useLayoutEffect(e, t)
}
;
H.useMemo = function(e, t) {
    return Le.current.useMemo(e, t)
}
;
H.useReducer = function(e, t, n) {
    return Le.current.useReducer(e, t, n)
}
;
H.useRef = function(e) {
    return Le.current.useRef(e)
}
;
H.useState = function(e) {
    return Le.current.useState(e)
}
;
H.useSyncExternalStore = function(e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n)
}
;
H.useTransition = function() {
    return Le.current.useTransition()
}
;
H.version = "18.3.1";
Oc.exports = H;
var E = Oc.exports;
const Un = im(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xm = E
  , Sm = Symbol.for("react.element")
  , km = Symbol.for("react.fragment")
  , Em = Object.prototype.hasOwnProperty
  , Cm = xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , _m = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $c(e, t, n) {
    var r, i = {}, o = null, l = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        Em.call(t, r) && !_m.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Sm,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: Cm.current
    }
}
Co.Fragment = km;
Co.jsx = $c;
Co.jsxs = $c;
Tc.exports = Co;
var h = Tc.exports
  , Uc = {
    exports: {}
}
  , qe = {}
  , Wc = {
    exports: {}
}
  , bc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(O, I) {
        var W = O.length;
        O.push(I);
        e: for (; 0 < W; ) {
            var M = W - 1 >>> 1
              , F = O[M];
            if (0 < i(F, I))
                O[M] = I,
                O[W] = F,
                W = M;
            else
                break e
        }
    }
    function n(O) {
        return O.length === 0 ? null : O[0]
    }
    function r(O) {
        if (O.length === 0)
            return null;
        var I = O[0]
          , W = O.pop();
        if (W !== I) {
            O[0] = W;
            e: for (var M = 0, F = O.length, B = F >>> 1; M < B; ) {
                var me = 2 * (M + 1) - 1
                  , Xe = O[me]
                  , dt = me + 1
                  , jt = O[dt];
                if (0 > i(Xe, W))
                    dt < F && 0 > i(jt, Xe) ? (O[M] = jt,
                    O[dt] = W,
                    M = dt) : (O[M] = Xe,
                    O[me] = W,
                    M = me);
                else if (dt < F && 0 > i(jt, W))
                    O[M] = jt,
                    O[dt] = W,
                    M = dt;
                else
                    break e
            }
        }
        return I
    }
    function i(O, I) {
        var W = O.sortIndex - I.sortIndex;
        return W !== 0 ? W : O.id - I.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var l = Date
          , s = l.now();
        e.unstable_now = function() {
            return l.now() - s
        }
    }
    var a = []
      , u = []
      , d = 1
      , f = null
      , y = 3
      , S = !1
      , v = !1
      , x = !1
      , _ = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(O) {
        for (var I = n(u); I !== null; ) {
            if (I.callback === null)
                r(u);
            else if (I.startTime <= O)
                r(u),
                I.sortIndex = I.expirationTime,
                t(a, I);
            else
                break;
            I = n(u)
        }
    }
    function k(O) {
        if (x = !1,
        m(O),
        !v)
            if (n(a) !== null)
                v = !0,
                V(C);
            else {
                var I = n(u);
                I !== null && Ee(k, I.startTime - O)
            }
    }
    function C(O, I) {
        v = !1,
        x && (x = !1,
        p(z),
        z = -1),
        S = !0;
        var W = y;
        try {
            for (m(I),
            f = n(a); f !== null && (!(f.expirationTime > I) || O && !J()); ) {
                var M = f.callback;
                if (typeof M == "function") {
                    f.callback = null,
                    y = f.priorityLevel;
                    var F = M(f.expirationTime <= I);
                    I = e.unstable_now(),
                    typeof F == "function" ? f.callback = F : f === n(a) && r(a),
                    m(I)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var B = !0;
            else {
                var me = n(u);
                me !== null && Ee(k, me.startTime - I),
                B = !1
            }
            return B
        } finally {
            f = null,
            y = W,
            S = !1
        }
    }
    var P = !1
      , R = null
      , z = -1
      , U = 5
      , T = -1;
    function J() {
        return !(e.unstable_now() - T < U)
    }
    function ue() {
        if (R !== null) {
            var O = e.unstable_now();
            T = O;
            var I = !0;
            try {
                I = R(!0, O)
            } finally {
                I ? ke() : (P = !1,
                R = null)
            }
        } else
            P = !1
    }
    var ke;
    if (typeof c == "function")
        ke = function() {
            c(ue)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ge = new MessageChannel
          , $ = ge.port2;
        ge.port1.onmessage = ue,
        ke = function() {
            $.postMessage(null)
        }
    } else
        ke = function() {
            _(ue, 0)
        }
        ;
    function V(O) {
        R = O,
        P || (P = !0,
        ke())
    }
    function Ee(O, I) {
        z = _(function() {
            O(e.unstable_now())
        }, I)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(O) {
        O.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || S || (v = !0,
        V(C))
    }
    ,
    e.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < O ? Math.floor(1e3 / O) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return y
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(O) {
        switch (y) {
        case 1:
        case 2:
        case 3:
            var I = 3;
            break;
        default:
            I = y
        }
        var W = y;
        y = I;
        try {
            return O()
        } finally {
            y = W
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(O, I) {
        switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            O = 3
        }
        var W = y;
        y = O;
        try {
            return I()
        } finally {
            y = W
        }
    }
    ,
    e.unstable_scheduleCallback = function(O, I, W) {
        var M = e.unstable_now();
        switch (typeof W == "object" && W !== null ? (W = W.delay,
        W = typeof W == "number" && 0 < W ? M + W : M) : W = M,
        O) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = W + F,
        O = {
            id: d++,
            callback: I,
            priorityLevel: O,
            startTime: W,
            expirationTime: F,
            sortIndex: -1
        },
        W > M ? (O.sortIndex = W,
        t(u, O),
        n(a) === null && O === n(u) && (x ? (p(z),
        z = -1) : x = !0,
        Ee(k, W - M))) : (O.sortIndex = F,
        t(a, O),
        v || S || (v = !0,
        V(C))),
        O
    }
    ,
    e.unstable_shouldYield = J,
    e.unstable_wrapCallback = function(O) {
        var I = y;
        return function() {
            var W = y;
            y = I;
            try {
                return O.apply(this, arguments)
            } finally {
                y = W
            }
        }
    }
}
)(bc);
Wc.exports = bc;
var Nm = Wc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rm = E
  , Ke = Nm;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Hc = new Set
  , jr = {};
function kn(e, t) {
    Kn(e, t),
    Kn(e + "Capture", t)
}
function Kn(e, t) {
    for (jr[e] = t,
    e = 0; e < t.length; e++)
        Hc.add(t[e])
}
var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ml = Object.prototype.hasOwnProperty
  , Pm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , qa = {}
  , Ja = {};
function Tm(e) {
    return Ml.call(Ja, e) ? !0 : Ml.call(qa, e) ? !1 : Pm.test(e) ? Ja[e] = !0 : (qa[e] = !0,
    !1)
}
function Om(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function jm(e, t, n, r) {
    if (t === null || typeof t > "u" || Om(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ze(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = l
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Se[e] = new ze(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Se[t] = new ze(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Se[e] = new ze(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Se[e] = new ze(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Se[e] = new ze(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Se[e] = new ze(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Se[e] = new ze(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Se[e] = new ze(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Se[e] = new ze(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Us = /[\-:]([a-z])/g;
function Ws(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Us, Ws);
    Se[t] = new ze(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Us, Ws);
    Se[t] = new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Us, Ws);
    Se[t] = new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Se[e] = new ze(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Se.xlinkHref = new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Se[e] = new ze(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function bs(e, t, n, r) {
    var i = Se.hasOwnProperty(t) ? Se[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jm(t, n, i, r) && (n = null),
    r || i === null ? Tm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ot = Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , di = Symbol.for("react.element")
  , Rn = Symbol.for("react.portal")
  , Pn = Symbol.for("react.fragment")
  , Hs = Symbol.for("react.strict_mode")
  , Ll = Symbol.for("react.profiler")
  , Vc = Symbol.for("react.provider")
  , Bc = Symbol.for("react.context")
  , Vs = Symbol.for("react.forward_ref")
  , zl = Symbol.for("react.suspense")
  , Al = Symbol.for("react.suspense_list")
  , Bs = Symbol.for("react.memo")
  , zt = Symbol.for("react.lazy")
  , Qc = Symbol.for("react.offscreen")
  , Xa = Symbol.iterator;
function lr(e) {
    return e === null || typeof e != "object" ? null : (e = Xa && e[Xa] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ie = Object.assign, Zo;
function hr(e) {
    if (Zo === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Zo = t && t[1] || ""
        }
    return `
` + Zo + e
}
var el = !1;
function tl(e, t) {
    if (!e || el)
        return "";
    el = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, s = o.length - 1; 1 <= l && 0 <= s && i[l] !== o[s]; )
                s--;
            for (; 1 <= l && 0 <= s; l--,
            s--)
                if (i[l] !== o[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if (l--,
                            s--,
                            0 > s || i[l] !== o[s]) {
                                var a = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= l && 0 <= s);
                    break
                }
        }
    } finally {
        el = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? hr(e) : ""
}
function Mm(e) {
    switch (e.tag) {
    case 5:
        return hr(e.type);
    case 16:
        return hr("Lazy");
    case 13:
        return hr("Suspense");
    case 19:
        return hr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = tl(e.type, !1),
        e;
    case 11:
        return e = tl(e.type.render, !1),
        e;
    case 1:
        return e = tl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Dl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Pn:
        return "Fragment";
    case Rn:
        return "Portal";
    case Ll:
        return "Profiler";
    case Hs:
        return "StrictMode";
    case zl:
        return "Suspense";
    case Al:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Bc:
            return (e.displayName || "Context") + ".Consumer";
        case Vc:
            return (e._context.displayName || "Context") + ".Provider";
        case Vs:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Bs:
            return t = e.displayName || null,
            t !== null ? t : Dl(e.type) || "Memo";
        case zt:
            t = e._payload,
            e = e._init;
            try {
                return Dl(e(t))
            } catch {}
        }
    return null
}
function Lm(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Dl(t);
    case 8:
        return t === Hs ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Xt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Kc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function zm(e) {
    var t = Kc(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l,
                o.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function fi(e) {
    e._valueTracker || (e._valueTracker = zm(e))
}
function qc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Kc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ji(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Il(e, t) {
    var n = t.checked;
    return ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ya(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Xt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Jc(e, t) {
    t = t.checked,
    t != null && bs(e, "checked", t, !1)
}
function Fl(e, t) {
    Jc(e, t);
    var n = Xt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? $l(e, t.type, n) : t.hasOwnProperty("defaultValue") && $l(e, t.type, Xt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ga(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function $l(e, t, n) {
    (t !== "number" || Ji(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var yr = Array.isArray;
function Wn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Xt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Ul(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Za(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(N(92));
            if (yr(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Xt(n)
    }
}
function Xc(e, t) {
    var n = Xt(t.value)
      , r = Xt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function eu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Yc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Wl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Yc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var pi, Gc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (pi = pi || document.createElement("div"),
        pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = pi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Mr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Am = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function(e) {
    Am.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        xr[t] = xr[e]
    })
});
function Zc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xr.hasOwnProperty(e) && xr[e] ? ("" + t).trim() : t + "px"
}
function ed(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Zc(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var Dm = ie({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function bl(e, t) {
    if (t) {
        if (Dm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function Hl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Vl = null;
function Qs(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Bl = null
  , bn = null
  , Hn = null;
function tu(e) {
    if (e = ei(e)) {
        if (typeof Bl != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = To(t),
        Bl(e.stateNode, e.type, t))
    }
}
function td(e) {
    bn ? Hn ? Hn.push(e) : Hn = [e] : bn = e
}
function nd() {
    if (bn) {
        var e = bn
          , t = Hn;
        if (Hn = bn = null,
        tu(e),
        t)
            for (e = 0; e < t.length; e++)
                tu(t[e])
    }
}
function rd(e, t) {
    return e(t)
}
function id() {}
var nl = !1;
function od(e, t, n) {
    if (nl)
        return e(t, n);
    nl = !0;
    try {
        return rd(e, t, n)
    } finally {
        nl = !1,
        (bn !== null || Hn !== null) && (id(),
        nd())
    }
}
function Lr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = To(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var Ql = !1;
if (_t)
    try {
        var sr = {};
        Object.defineProperty(sr, "passive", {
            get: function() {
                Ql = !0
            }
        }),
        window.addEventListener("test", sr, sr),
        window.removeEventListener("test", sr, sr)
    } catch {
        Ql = !1
    }
function Im(e, t, n, r, i, o, l, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Sr = !1
  , Xi = null
  , Yi = !1
  , Kl = null
  , Fm = {
    onError: function(e) {
        Sr = !0,
        Xi = e
    }
};
function $m(e, t, n, r, i, o, l, s, a) {
    Sr = !1,
    Xi = null,
    Im.apply(Fm, arguments)
}
function Um(e, t, n, r, i, o, l, s, a) {
    if ($m.apply(this, arguments),
    Sr) {
        if (Sr) {
            var u = Xi;
            Sr = !1,
            Xi = null
        } else
            throw Error(N(198));
        Yi || (Yi = !0,
        Kl = u)
    }
}
function En(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ld(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function nu(e) {
    if (En(e) !== e)
        throw Error(N(188))
}
function Wm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = En(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return nu(i),
                    e;
                if (o === r)
                    return nu(i),
                    t;
                o = o.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var l = !1, s = i.child; s; ) {
                if (s === n) {
                    l = !0,
                    n = i,
                    r = o;
                    break
                }
                if (s === r) {
                    l = !0,
                    r = i,
                    n = o;
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = o.child; s; ) {
                    if (s === n) {
                        l = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (s === r) {
                        l = !0,
                        r = o,
                        n = i;
                        break
                    }
                    s = s.sibling
                }
                if (!l)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function sd(e) {
    return e = Wm(e),
    e !== null ? ad(e) : null
}
function ad(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ad(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ud = Ke.unstable_scheduleCallback
  , ru = Ke.unstable_cancelCallback
  , bm = Ke.unstable_shouldYield
  , Hm = Ke.unstable_requestPaint
  , se = Ke.unstable_now
  , Vm = Ke.unstable_getCurrentPriorityLevel
  , Ks = Ke.unstable_ImmediatePriority
  , cd = Ke.unstable_UserBlockingPriority
  , Gi = Ke.unstable_NormalPriority
  , Bm = Ke.unstable_LowPriority
  , dd = Ke.unstable_IdlePriority
  , _o = null
  , gt = null;
function Qm(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function")
        try {
            gt.onCommitFiberRoot(_o, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var st = Math.clz32 ? Math.clz32 : Jm
  , Km = Math.log
  , qm = Math.LN2;
function Jm(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Km(e) / qm | 0) | 0
}
var mi = 64
  , hi = 4194304;
function gr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Zi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var s = l & ~i;
        s !== 0 ? r = gr(s) : (o &= l,
        o !== 0 && (r = gr(o)))
    } else
        l = n & ~i,
        l !== 0 ? r = gr(l) : o !== 0 && (r = gr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - st(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function Xm(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Ym(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var l = 31 - st(o)
          , s = 1 << l
          , a = i[l];
        a === -1 ? (!(s & n) || s & r) && (i[l] = Xm(s, t)) : a <= t && (e.expiredLanes |= s),
        o &= ~s
    }
}
function ql(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function fd() {
    var e = mi;
    return mi <<= 1,
    !(mi & 4194240) && (mi = 64),
    e
}
function rl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Gr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - st(t),
    e[t] = n
}
function Gm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - st(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function qs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - st(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var q = 0;
function pd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var md, Js, hd, yd, gd, Jl = !1, yi = [], Wt = null, bt = null, Ht = null, zr = new Map, Ar = new Map, Dt = [], Zm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function iu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Wt = null;
        break;
    case "dragenter":
    case "dragleave":
        bt = null;
        break;
    case "mouseover":
    case "mouseout":
        Ht = null;
        break;
    case "pointerover":
    case "pointerout":
        zr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ar.delete(t.pointerId)
    }
}
function ar(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = ei(t),
    t !== null && Js(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function eh(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Wt = ar(Wt, e, t, n, r, i),
        !0;
    case "dragenter":
        return bt = ar(bt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Ht = ar(Ht, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return zr.set(o, ar(zr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Ar.set(o, ar(Ar.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function vd(e) {
    var t = an(e.target);
    if (t !== null) {
        var n = En(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ld(n),
                t !== null) {
                    e.blockedOn = t,
                    gd(e.priority, function() {
                        hd(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ai(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Vl = r,
            n.target.dispatchEvent(r),
            Vl = null
        } else
            return t = ei(n),
            t !== null && Js(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ou(e, t, n) {
    Ai(e) && n.delete(t)
}
function th() {
    Jl = !1,
    Wt !== null && Ai(Wt) && (Wt = null),
    bt !== null && Ai(bt) && (bt = null),
    Ht !== null && Ai(Ht) && (Ht = null),
    zr.forEach(ou),
    Ar.forEach(ou)
}
function ur(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Jl || (Jl = !0,
    Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, th)))
}
function Dr(e) {
    function t(i) {
        return ur(i, e)
    }
    if (0 < yi.length) {
        ur(yi[0], e);
        for (var n = 1; n < yi.length; n++) {
            var r = yi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Wt !== null && ur(Wt, e),
    bt !== null && ur(bt, e),
    Ht !== null && ur(Ht, e),
    zr.forEach(t),
    Ar.forEach(t),
    n = 0; n < Dt.length; n++)
        r = Dt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && (n = Dt[0],
    n.blockedOn === null); )
        vd(n),
        n.blockedOn === null && Dt.shift()
}
var Vn = Ot.ReactCurrentBatchConfig
  , eo = !0;
function nh(e, t, n, r) {
    var i = q
      , o = Vn.transition;
    Vn.transition = null;
    try {
        q = 1,
        Xs(e, t, n, r)
    } finally {
        q = i,
        Vn.transition = o
    }
}
function rh(e, t, n, r) {
    var i = q
      , o = Vn.transition;
    Vn.transition = null;
    try {
        q = 4,
        Xs(e, t, n, r)
    } finally {
        q = i,
        Vn.transition = o
    }
}
function Xs(e, t, n, r) {
    if (eo) {
        var i = Xl(e, t, n, r);
        if (i === null)
            pl(e, t, r, to, n),
            iu(e, r);
        else if (eh(i, e, t, n, r))
            r.stopPropagation();
        else if (iu(e, r),
        t & 4 && -1 < Zm.indexOf(e)) {
            for (; i !== null; ) {
                var o = ei(i);
                if (o !== null && md(o),
                o = Xl(e, t, n, r),
                o === null && pl(e, t, r, to, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            pl(e, t, r, null, n)
    }
}
var to = null;
function Xl(e, t, n, r) {
    if (to = null,
    e = Qs(r),
    e = an(e),
    e !== null)
        if (t = En(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ld(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return to = e,
    null
}
function wd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Vm()) {
        case Ks:
            return 1;
        case cd:
            return 4;
        case Gi:
        case Bm:
            return 16;
        case dd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var $t = null
  , Ys = null
  , Di = null;
function xd() {
    if (Di)
        return Di;
    var e, t = Ys, n = t.length, r, i = "value"in $t ? $t.value : $t.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
        ;
    return Di = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Ii(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function gi() {
    return !0
}
function lu() {
    return !1
}
function Je(e) {
    function t(n, r, i, o, l) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = l,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? gi : lu,
        this.isPropagationStopped = lu,
        this
    }
    return ie(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = gi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = gi)
        },
        persist: function() {},
        isPersistent: gi
    }),
    t
}
var tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Gs = Je(tr), Zr = ie({}, tr, {
    view: 0,
    detail: 0
}), ih = Je(Zr), il, ol, cr, No = ie({}, Zr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zs,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== cr && (cr && e.type === "mousemove" ? (il = e.screenX - cr.screenX,
        ol = e.screenY - cr.screenY) : ol = il = 0,
        cr = e),
        il)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ol
    }
}), su = Je(No), oh = ie({}, No, {
    dataTransfer: 0
}), lh = Je(oh), sh = ie({}, Zr, {
    relatedTarget: 0
}), ll = Je(sh), ah = ie({}, tr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), uh = Je(ah), ch = ie({}, tr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), dh = Je(ch), fh = ie({}, tr, {
    data: 0
}), au = Je(fh), ph = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, mh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, hh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function yh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hh[e]) ? !!t[e] : !1
}
function Zs() {
    return yh
}
var gh = ie({}, Zr, {
    key: function(e) {
        if (e.key) {
            var t = ph[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ii(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mh[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zs,
    charCode: function(e) {
        return e.type === "keypress" ? Ii(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ii(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , vh = Je(gh)
  , wh = ie({}, No, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , uu = Je(wh)
  , xh = ie({}, Zr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zs
})
  , Sh = Je(xh)
  , kh = ie({}, tr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Eh = Je(kh)
  , Ch = ie({}, No, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , _h = Je(Ch)
  , Nh = [9, 13, 27, 32]
  , ea = _t && "CompositionEvent"in window
  , kr = null;
_t && "documentMode"in document && (kr = document.documentMode);
var Rh = _t && "TextEvent"in window && !kr
  , Sd = _t && (!ea || kr && 8 < kr && 11 >= kr)
  , cu = " "
  , du = !1;
function kd(e, t) {
    switch (e) {
    case "keyup":
        return Nh.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Ed(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Tn = !1;
function Ph(e, t) {
    switch (e) {
    case "compositionend":
        return Ed(t);
    case "keypress":
        return t.which !== 32 ? null : (du = !0,
        cu);
    case "textInput":
        return e = t.data,
        e === cu && du ? null : e;
    default:
        return null
    }
}
function Th(e, t) {
    if (Tn)
        return e === "compositionend" || !ea && kd(e, t) ? (e = xd(),
        Di = Ys = $t = null,
        Tn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Sd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Oh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Oh[e.type] : t === "textarea"
}
function Cd(e, t, n, r) {
    td(r),
    t = no(t, "onChange"),
    0 < t.length && (n = new Gs("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Er = null
  , Ir = null;
function jh(e) {
    Ad(e, 0)
}
function Ro(e) {
    var t = Mn(e);
    if (qc(t))
        return e
}
function Mh(e, t) {
    if (e === "change")
        return t
}
var _d = !1;
if (_t) {
    var sl;
    if (_t) {
        var al = "oninput"in document;
        if (!al) {
            var pu = document.createElement("div");
            pu.setAttribute("oninput", "return;"),
            al = typeof pu.oninput == "function"
        }
        sl = al
    } else
        sl = !1;
    _d = sl && (!document.documentMode || 9 < document.documentMode)
}
function mu() {
    Er && (Er.detachEvent("onpropertychange", Nd),
    Ir = Er = null)
}
function Nd(e) {
    if (e.propertyName === "value" && Ro(Ir)) {
        var t = [];
        Cd(t, Ir, e, Qs(e)),
        od(jh, t)
    }
}
function Lh(e, t, n) {
    e === "focusin" ? (mu(),
    Er = t,
    Ir = n,
    Er.attachEvent("onpropertychange", Nd)) : e === "focusout" && mu()
}
function zh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ro(Ir)
}
function Ah(e, t) {
    if (e === "click")
        return Ro(t)
}
function Dh(e, t) {
    if (e === "input" || e === "change")
        return Ro(t)
}
function Ih(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ut = typeof Object.is == "function" ? Object.is : Ih;
function Fr(e, t) {
    if (ut(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ml.call(t, i) || !ut(e[i], t[i]))
            return !1
    }
    return !0
}
function hu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function yu(e, t) {
    var n = hu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = hu(n)
    }
}
function Rd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Pd() {
    for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ji(e.document)
    }
    return t
}
function ta(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Fh(e) {
    var t = Pd()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Rd(n.ownerDocument.documentElement, n)) {
        if (r !== null && ta(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = yu(n, o);
                var l = yu(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var $h = _t && "documentMode"in document && 11 >= document.documentMode
  , On = null
  , Yl = null
  , Cr = null
  , Gl = !1;
function gu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gl || On == null || On !== Ji(r) || (r = On,
    "selectionStart"in r && ta(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Cr && Fr(Cr, r) || (Cr = r,
    r = no(Yl, "onSelect"),
    0 < r.length && (t = new Gs("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = On)))
}
function vi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var jn = {
    animationend: vi("Animation", "AnimationEnd"),
    animationiteration: vi("Animation", "AnimationIteration"),
    animationstart: vi("Animation", "AnimationStart"),
    transitionend: vi("Transition", "TransitionEnd")
}
  , ul = {}
  , Td = {};
_t && (Td = document.createElement("div").style,
"AnimationEvent"in window || (delete jn.animationend.animation,
delete jn.animationiteration.animation,
delete jn.animationstart.animation),
"TransitionEvent"in window || delete jn.transitionend.transition);
function Po(e) {
    if (ul[e])
        return ul[e];
    if (!jn[e])
        return e;
    var t = jn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Td)
            return ul[e] = t[n];
    return e
}
var Od = Po("animationend")
  , jd = Po("animationiteration")
  , Md = Po("animationstart")
  , Ld = Po("transitionend")
  , zd = new Map
  , vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Gt(e, t) {
    zd.set(e, t),
    kn(t, [e])
}
for (var cl = 0; cl < vu.length; cl++) {
    var dl = vu[cl]
      , Uh = dl.toLowerCase()
      , Wh = dl[0].toUpperCase() + dl.slice(1);
    Gt(Uh, "on" + Wh)
}
Gt(Od, "onAnimationEnd");
Gt(jd, "onAnimationIteration");
Gt(Md, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(Ld, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , bh = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function wu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Um(r, t, void 0, e),
    e.currentTarget = null
}
function Ad(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l]
                      , a = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    wu(i, s, u),
                    o = a
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (s = r[l],
                    a = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    wu(i, s, u),
                    o = a
                }
        }
    }
    if (Yi)
        throw e = Kl,
        Yi = !1,
        Kl = null,
        e
}
function G(e, t) {
    var n = t[rs];
    n === void 0 && (n = t[rs] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Dd(t, e, 2, !1),
    n.add(r))
}
function fl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Dd(n, e, r, t)
}
var wi = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
    if (!e[wi]) {
        e[wi] = !0,
        Hc.forEach(function(n) {
            n !== "selectionchange" && (bh.has(n) || fl(n, !1, e),
            fl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[wi] || (t[wi] = !0,
        fl("selectionchange", !1, t))
    }
}
function Dd(e, t, n, r) {
    switch (wd(t)) {
    case 1:
        var i = nh;
        break;
    case 4:
        i = rh;
        break;
    default:
        i = Xs
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Ql || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function pl(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var s = r.stateNode.containerInfo;
                if (s === i || s.nodeType === 8 && s.parentNode === i)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var a = l.tag;
                        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        l = l.return
                    }
                for (; s !== null; ) {
                    if (l = an(s),
                    l === null)
                        return;
                    if (a = l.tag,
                    a === 5 || a === 6) {
                        r = o = l;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    od(function() {
        var u = o
          , d = Qs(n)
          , f = [];
        e: {
            var y = zd.get(e);
            if (y !== void 0) {
                var S = Gs
                  , v = e;
                switch (e) {
                case "keypress":
                    if (Ii(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    S = vh;
                    break;
                case "focusin":
                    v = "focus",
                    S = ll;
                    break;
                case "focusout":
                    v = "blur",
                    S = ll;
                    break;
                case "beforeblur":
                case "afterblur":
                    S = ll;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    S = su;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    S = lh;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    S = Sh;
                    break;
                case Od:
                case jd:
                case Md:
                    S = uh;
                    break;
                case Ld:
                    S = Eh;
                    break;
                case "scroll":
                    S = ih;
                    break;
                case "wheel":
                    S = _h;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    S = dh;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    S = uu
                }
                var x = (t & 4) !== 0
                  , _ = !x && e === "scroll"
                  , p = x ? y !== null ? y + "Capture" : null : y;
                x = [];
                for (var c = u, m; c !== null; ) {
                    m = c;
                    var k = m.stateNode;
                    if (m.tag === 5 && k !== null && (m = k,
                    p !== null && (k = Lr(c, p),
                    k != null && x.push(Ur(c, k, m)))),
                    _)
                        break;
                    c = c.return
                }
                0 < x.length && (y = new S(y,v,null,n,d),
                f.push({
                    event: y,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (y = e === "mouseover" || e === "pointerover",
                S = e === "mouseout" || e === "pointerout",
                y && n !== Vl && (v = n.relatedTarget || n.fromElement) && (an(v) || v[Nt]))
                    break e;
                if ((S || y) && (y = d.window === d ? d : (y = d.ownerDocument) ? y.defaultView || y.parentWindow : window,
                S ? (v = n.relatedTarget || n.toElement,
                S = u,
                v = v ? an(v) : null,
                v !== null && (_ = En(v),
                v !== _ || v.tag !== 5 && v.tag !== 6) && (v = null)) : (S = null,
                v = u),
                S !== v)) {
                    if (x = su,
                    k = "onMouseLeave",
                    p = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = uu,
                    k = "onPointerLeave",
                    p = "onPointerEnter",
                    c = "pointer"),
                    _ = S == null ? y : Mn(S),
                    m = v == null ? y : Mn(v),
                    y = new x(k,c + "leave",S,n,d),
                    y.target = _,
                    y.relatedTarget = m,
                    k = null,
                    an(d) === u && (x = new x(p,c + "enter",v,n,d),
                    x.target = m,
                    x.relatedTarget = _,
                    k = x),
                    _ = k,
                    S && v)
                        t: {
                            for (x = S,
                            p = v,
                            c = 0,
                            m = x; m; m = Nn(m))
                                c++;
                            for (m = 0,
                            k = p; k; k = Nn(k))
                                m++;
                            for (; 0 < c - m; )
                                x = Nn(x),
                                c--;
                            for (; 0 < m - c; )
                                p = Nn(p),
                                m--;
                            for (; c--; ) {
                                if (x === p || p !== null && x === p.alternate)
                                    break t;
                                x = Nn(x),
                                p = Nn(p)
                            }
                            x = null
                        }
                    else
                        x = null;
                    S !== null && xu(f, y, S, x, !1),
                    v !== null && _ !== null && xu(f, _, v, x, !0)
                }
            }
            e: {
                if (y = u ? Mn(u) : window,
                S = y.nodeName && y.nodeName.toLowerCase(),
                S === "select" || S === "input" && y.type === "file")
                    var C = Mh;
                else if (fu(y))
                    if (_d)
                        C = Dh;
                    else {
                        C = zh;
                        var P = Lh
                    }
                else
                    (S = y.nodeName) && S.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (C = Ah);
                if (C && (C = C(e, u))) {
                    Cd(f, C, n, d);
                    break e
                }
                P && P(e, y, u),
                e === "focusout" && (P = y._wrapperState) && P.controlled && y.type === "number" && $l(y, "number", y.value)
            }
            switch (P = u ? Mn(u) : window,
            e) {
            case "focusin":
                (fu(P) || P.contentEditable === "true") && (On = P,
                Yl = u,
                Cr = null);
                break;
            case "focusout":
                Cr = Yl = On = null;
                break;
            case "mousedown":
                Gl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Gl = !1,
                gu(f, n, d);
                break;
            case "selectionchange":
                if ($h)
                    break;
            case "keydown":
            case "keyup":
                gu(f, n, d)
            }
            var R;
            if (ea)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                    }
                    z = void 0
                }
            else
                Tn ? kd(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
            z && (Sd && n.locale !== "ko" && (Tn || z !== "onCompositionStart" ? z === "onCompositionEnd" && Tn && (R = xd()) : ($t = d,
            Ys = "value"in $t ? $t.value : $t.textContent,
            Tn = !0)),
            P = no(u, z),
            0 < P.length && (z = new au(z,e,null,n,d),
            f.push({
                event: z,
                listeners: P
            }),
            R ? z.data = R : (R = Ed(n),
            R !== null && (z.data = R)))),
            (R = Rh ? Ph(e, n) : Th(e, n)) && (u = no(u, "onBeforeInput"),
            0 < u.length && (d = new au("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = R))
        }
        Ad(f, t)
    })
}
function Ur(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function no(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Lr(e, n),
        o != null && r.unshift(Ur(e, o, i)),
        o = Lr(e, t),
        o != null && r.push(Ur(e, o, i))),
        e = e.return
    }
    return r
}
function Nn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function xu(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r; ) {
        var s = n
          , a = s.alternate
          , u = s.stateNode;
        if (a !== null && a === r)
            break;
        s.tag === 5 && u !== null && (s = u,
        i ? (a = Lr(n, o),
        a != null && l.unshift(Ur(n, a, s))) : i || (a = Lr(n, o),
        a != null && l.push(Ur(n, a, s)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var Hh = /\r\n?/g
  , Vh = /\u0000|\uFFFD/g;
function Su(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hh, `
`).replace(Vh, "")
}
function xi(e, t, n) {
    if (t = Su(t),
    Su(e) !== t && n)
        throw Error(N(425))
}
function ro() {}
var Zl = null
  , es = null;
function ts(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ns = typeof setTimeout == "function" ? setTimeout : void 0
  , Bh = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ku = typeof Promise == "function" ? Promise : void 0
  , Qh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ku < "u" ? function(e) {
    return ku.resolve(null).then(e).catch(Kh)
}
: ns;
function Kh(e) {
    setTimeout(function() {
        throw e
    })
}
function ml(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Dr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Dr(t)
}
function Vt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Eu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var nr = Math.random().toString(36).slice(2)
  , yt = "__reactFiber$" + nr
  , Wr = "__reactProps$" + nr
  , Nt = "__reactContainer$" + nr
  , rs = "__reactEvents$" + nr
  , qh = "__reactListeners$" + nr
  , Jh = "__reactHandles$" + nr;
function an(e) {
    var t = e[yt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Nt] || n[yt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Eu(e); e !== null; ) {
                    if (n = e[yt])
                        return n;
                    e = Eu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ei(e) {
    return e = e[yt] || e[Nt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Mn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function To(e) {
    return e[Wr] || null
}
var is = []
  , Ln = -1;
function Zt(e) {
    return {
        current: e
    }
}
function Z(e) {
    0 > Ln || (e.current = is[Ln],
    is[Ln] = null,
    Ln--)
}
function X(e, t) {
    Ln++,
    is[Ln] = e.current,
    e.current = t
}
var Yt = {}
  , Pe = Zt(Yt)
  , Ie = Zt(!1)
  , yn = Yt;
function qn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Fe(e) {
    return e = e.childContextTypes,
    e != null
}
function io() {
    Z(Ie),
    Z(Pe)
}
function Cu(e, t, n) {
    if (Pe.current !== Yt)
        throw Error(N(168));
    X(Pe, t),
    X(Ie, n)
}
function Id(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(N(108, Lm(e) || "Unknown", i));
    return ie({}, n, r)
}
function oo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt,
    yn = Pe.current,
    X(Pe, e),
    X(Ie, Ie.current),
    !0
}
function _u(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = Id(e, t, yn),
    r.__reactInternalMemoizedMergedChildContext = e,
    Z(Ie),
    Z(Pe),
    X(Pe, e)) : Z(Ie),
    X(Ie, n)
}
var St = null
  , Oo = !1
  , hl = !1;
function Fd(e) {
    St === null ? St = [e] : St.push(e)
}
function Xh(e) {
    Oo = !0,
    Fd(e)
}
function en() {
    if (!hl && St !== null) {
        hl = !0;
        var e = 0
          , t = q;
        try {
            var n = St;
            for (q = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            St = null,
            Oo = !1
        } catch (i) {
            throw St !== null && (St = St.slice(e + 1)),
            ud(Ks, en),
            i
        } finally {
            q = t,
            hl = !1
        }
    }
    return null
}
var zn = []
  , An = 0
  , lo = null
  , so = 0
  , Ye = []
  , Ge = 0
  , gn = null
  , kt = 1
  , Et = "";
function on(e, t) {
    zn[An++] = so,
    zn[An++] = lo,
    lo = e,
    so = t
}
function $d(e, t, n) {
    Ye[Ge++] = kt,
    Ye[Ge++] = Et,
    Ye[Ge++] = gn,
    gn = e;
    var r = kt;
    e = Et;
    var i = 32 - st(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - st(t) + i;
    if (30 < o) {
        var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32),
        r >>= l,
        i -= l,
        kt = 1 << 32 - st(t) + i | n << i | r,
        Et = o + e
    } else
        kt = 1 << o | n << i | r,
        Et = e
}
function na(e) {
    e.return !== null && (on(e, 1),
    $d(e, 1, 0))
}
function ra(e) {
    for (; e === lo; )
        lo = zn[--An],
        zn[An] = null,
        so = zn[--An],
        zn[An] = null;
    for (; e === gn; )
        gn = Ye[--Ge],
        Ye[Ge] = null,
        Et = Ye[--Ge],
        Ye[Ge] = null,
        kt = Ye[--Ge],
        Ye[Ge] = null
}
var Qe = null
  , Be = null
  , te = !1
  , lt = null;
function Ud(e, t) {
    var n = Ze(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Nu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Qe = e,
        Be = Vt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Qe = e,
        Be = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = gn !== null ? {
            id: kt,
            overflow: Et
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ze(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Qe = e,
        Be = null,
        !0) : !1;
    default:
        return !1
    }
}
function os(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ls(e) {
    if (te) {
        var t = Be;
        if (t) {
            var n = t;
            if (!Nu(e, t)) {
                if (os(e))
                    throw Error(N(418));
                t = Vt(n.nextSibling);
                var r = Qe;
                t && Nu(e, t) ? Ud(r, n) : (e.flags = e.flags & -4097 | 2,
                te = !1,
                Qe = e)
            }
        } else {
            if (os(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            te = !1,
            Qe = e
        }
    }
}
function Ru(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Qe = e
}
function Si(e) {
    if (e !== Qe)
        return !1;
    if (!te)
        return Ru(e),
        te = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ts(e.type, e.memoizedProps)),
    t && (t = Be)) {
        if (os(e))
            throw Wd(),
            Error(N(418));
        for (; t; )
            Ud(e, t),
            t = Vt(t.nextSibling)
    }
    if (Ru(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Be = Vt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Be = null
        }
    } else
        Be = Qe ? Vt(e.stateNode.nextSibling) : null;
    return !0
}
function Wd() {
    for (var e = Be; e; )
        e = Vt(e.nextSibling)
}
function Jn() {
    Be = Qe = null,
    te = !1
}
function ia(e) {
    lt === null ? lt = [e] : lt.push(e)
}
var Yh = Ot.ReactCurrentBatchConfig;
function dr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var s = i.refs;
                l === null ? delete s[o] : s[o] = l
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function ki(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Pu(e) {
    var t = e._init;
    return t(e._payload)
}
function bd(e) {
    function t(p, c) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [c],
            p.flags |= 16) : m.push(c)
        }
    }
    function n(p, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(p, c),
            c = c.sibling;
        return null
    }
    function r(p, c) {
        for (p = new Map; c !== null; )
            c.key !== null ? p.set(c.key, c) : p.set(c.index, c),
            c = c.sibling;
        return p
    }
    function i(p, c) {
        return p = qt(p, c),
        p.index = 0,
        p.sibling = null,
        p
    }
    function o(p, c, m) {
        return p.index = m,
        e ? (m = p.alternate,
        m !== null ? (m = m.index,
        m < c ? (p.flags |= 2,
        c) : m) : (p.flags |= 2,
        c)) : (p.flags |= 1048576,
        c)
    }
    function l(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function s(p, c, m, k) {
        return c === null || c.tag !== 6 ? (c = kl(m, p.mode, k),
        c.return = p,
        c) : (c = i(c, m),
        c.return = p,
        c)
    }
    function a(p, c, m, k) {
        var C = m.type;
        return C === Pn ? d(p, c, m.props.children, k, m.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === zt && Pu(C) === c.type) ? (k = i(c, m.props),
        k.ref = dr(p, c, m),
        k.return = p,
        k) : (k = Vi(m.type, m.key, m.props, null, p.mode, k),
        k.ref = dr(p, c, m),
        k.return = p,
        k)
    }
    function u(p, c, m, k) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = El(m, p.mode, k),
        c.return = p,
        c) : (c = i(c, m.children || []),
        c.return = p,
        c)
    }
    function d(p, c, m, k, C) {
        return c === null || c.tag !== 7 ? (c = mn(m, p.mode, k, C),
        c.return = p,
        c) : (c = i(c, m),
        c.return = p,
        c)
    }
    function f(p, c, m) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = kl("" + c, p.mode, m),
            c.return = p,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case di:
                return m = Vi(c.type, c.key, c.props, null, p.mode, m),
                m.ref = dr(p, null, c),
                m.return = p,
                m;
            case Rn:
                return c = El(c, p.mode, m),
                c.return = p,
                c;
            case zt:
                var k = c._init;
                return f(p, k(c._payload), m)
            }
            if (yr(c) || lr(c))
                return c = mn(c, p.mode, m, null),
                c.return = p,
                c;
            ki(p, c)
        }
        return null
    }
    function y(p, c, m, k) {
        var C = c !== null ? c.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return C !== null ? null : s(p, c, "" + m, k);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case di:
                return m.key === C ? a(p, c, m, k) : null;
            case Rn:
                return m.key === C ? u(p, c, m, k) : null;
            case zt:
                return C = m._init,
                y(p, c, C(m._payload), k)
            }
            if (yr(m) || lr(m))
                return C !== null ? null : d(p, c, m, k, null);
            ki(p, m)
        }
        return null
    }
    function S(p, c, m, k, C) {
        if (typeof k == "string" && k !== "" || typeof k == "number")
            return p = p.get(m) || null,
            s(c, p, "" + k, C);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
            case di:
                return p = p.get(k.key === null ? m : k.key) || null,
                a(c, p, k, C);
            case Rn:
                return p = p.get(k.key === null ? m : k.key) || null,
                u(c, p, k, C);
            case zt:
                var P = k._init;
                return S(p, c, m, P(k._payload), C)
            }
            if (yr(k) || lr(k))
                return p = p.get(m) || null,
                d(c, p, k, C, null);
            ki(c, k)
        }
        return null
    }
    function v(p, c, m, k) {
        for (var C = null, P = null, R = c, z = c = 0, U = null; R !== null && z < m.length; z++) {
            R.index > z ? (U = R,
            R = null) : U = R.sibling;
            var T = y(p, R, m[z], k);
            if (T === null) {
                R === null && (R = U);
                break
            }
            e && R && T.alternate === null && t(p, R),
            c = o(T, c, z),
            P === null ? C = T : P.sibling = T,
            P = T,
            R = U
        }
        if (z === m.length)
            return n(p, R),
            te && on(p, z),
            C;
        if (R === null) {
            for (; z < m.length; z++)
                R = f(p, m[z], k),
                R !== null && (c = o(R, c, z),
                P === null ? C = R : P.sibling = R,
                P = R);
            return te && on(p, z),
            C
        }
        for (R = r(p, R); z < m.length; z++)
            U = S(R, p, z, m[z], k),
            U !== null && (e && U.alternate !== null && R.delete(U.key === null ? z : U.key),
            c = o(U, c, z),
            P === null ? C = U : P.sibling = U,
            P = U);
        return e && R.forEach(function(J) {
            return t(p, J)
        }),
        te && on(p, z),
        C
    }
    function x(p, c, m, k) {
        var C = lr(m);
        if (typeof C != "function")
            throw Error(N(150));
        if (m = C.call(m),
        m == null)
            throw Error(N(151));
        for (var P = C = null, R = c, z = c = 0, U = null, T = m.next(); R !== null && !T.done; z++,
        T = m.next()) {
            R.index > z ? (U = R,
            R = null) : U = R.sibling;
            var J = y(p, R, T.value, k);
            if (J === null) {
                R === null && (R = U);
                break
            }
            e && R && J.alternate === null && t(p, R),
            c = o(J, c, z),
            P === null ? C = J : P.sibling = J,
            P = J,
            R = U
        }
        if (T.done)
            return n(p, R),
            te && on(p, z),
            C;
        if (R === null) {
            for (; !T.done; z++,
            T = m.next())
                T = f(p, T.value, k),
                T !== null && (c = o(T, c, z),
                P === null ? C = T : P.sibling = T,
                P = T);
            return te && on(p, z),
            C
        }
        for (R = r(p, R); !T.done; z++,
        T = m.next())
            T = S(R, p, z, T.value, k),
            T !== null && (e && T.alternate !== null && R.delete(T.key === null ? z : T.key),
            c = o(T, c, z),
            P === null ? C = T : P.sibling = T,
            P = T);
        return e && R.forEach(function(ue) {
            return t(p, ue)
        }),
        te && on(p, z),
        C
    }
    function _(p, c, m, k) {
        if (typeof m == "object" && m !== null && m.type === Pn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case di:
                e: {
                    for (var C = m.key, P = c; P !== null; ) {
                        if (P.key === C) {
                            if (C = m.type,
                            C === Pn) {
                                if (P.tag === 7) {
                                    n(p, P.sibling),
                                    c = i(P, m.props.children),
                                    c.return = p,
                                    p = c;
                                    break e
                                }
                            } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === zt && Pu(C) === P.type) {
                                n(p, P.sibling),
                                c = i(P, m.props),
                                c.ref = dr(p, P, m),
                                c.return = p,
                                p = c;
                                break e
                            }
                            n(p, P);
                            break
                        } else
                            t(p, P);
                        P = P.sibling
                    }
                    m.type === Pn ? (c = mn(m.props.children, p.mode, k, m.key),
                    c.return = p,
                    p = c) : (k = Vi(m.type, m.key, m.props, null, p.mode, k),
                    k.ref = dr(p, c, m),
                    k.return = p,
                    p = k)
                }
                return l(p);
            case Rn:
                e: {
                    for (P = m.key; c !== null; ) {
                        if (c.key === P)
                            if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                                n(p, c.sibling),
                                c = i(c, m.children || []),
                                c.return = p,
                                p = c;
                                break e
                            } else {
                                n(p, c);
                                break
                            }
                        else
                            t(p, c);
                        c = c.sibling
                    }
                    c = El(m, p.mode, k),
                    c.return = p,
                    p = c
                }
                return l(p);
            case zt:
                return P = m._init,
                _(p, c, P(m._payload), k)
            }
            if (yr(m))
                return v(p, c, m, k);
            if (lr(m))
                return x(p, c, m, k);
            ki(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        c !== null && c.tag === 6 ? (n(p, c.sibling),
        c = i(c, m),
        c.return = p,
        p = c) : (n(p, c),
        c = kl(m, p.mode, k),
        c.return = p,
        p = c),
        l(p)) : n(p, c)
    }
    return _
}
var Xn = bd(!0)
  , Hd = bd(!1)
  , ao = Zt(null)
  , uo = null
  , Dn = null
  , oa = null;
function la() {
    oa = Dn = uo = null
}
function sa(e) {
    var t = ao.current;
    Z(ao),
    e._currentValue = t
}
function ss(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Bn(e, t) {
    uo = e,
    oa = Dn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (De = !0),
    e.firstContext = null)
}
function tt(e) {
    var t = e._currentValue;
    if (oa !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Dn === null) {
            if (uo === null)
                throw Error(N(308));
            Dn = e,
            uo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Dn = Dn.next = e;
    return t
}
var un = null;
function aa(e) {
    un === null ? un = [e] : un.push(e)
}
function Vd(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    aa(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Rt(e, r)
}
function Rt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var At = !1;
function ua(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Bd(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ct(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Q & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Rt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    aa(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Rt(e, n)
}
function Fi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        qs(e, n)
    }
}
function Tu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = l : o = o.next = l,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function co(e, t, n, r) {
    var i = e.updateQueue;
    At = !1;
    var o = i.firstBaseUpdate
      , l = i.lastBaseUpdate
      , s = i.shared.pending;
    if (s !== null) {
        i.shared.pending = null;
        var a = s
          , u = a.next;
        a.next = null,
        l === null ? o = u : l.next = u,
        l = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        s = d.lastBaseUpdate,
        s !== l && (s === null ? d.firstBaseUpdate = u : s.next = u,
        d.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = i.baseState;
        l = 0,
        d = u = a = null,
        s = o;
        do {
            var y = s.lane
              , S = s.eventTime;
            if ((r & y) === y) {
                d !== null && (d = d.next = {
                    eventTime: S,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var v = e
                      , x = s;
                    switch (y = t,
                    S = n,
                    x.tag) {
                    case 1:
                        if (v = x.payload,
                        typeof v == "function") {
                            f = v.call(S, f, y);
                            break e
                        }
                        f = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = x.payload,
                        y = typeof v == "function" ? v.call(S, f, y) : v,
                        y == null)
                            break e;
                        f = ie({}, f, y);
                        break e;
                    case 2:
                        At = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                y = i.effects,
                y === null ? i.effects = [s] : y.push(s))
            } else
                S = {
                    eventTime: S,
                    lane: y,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                d === null ? (u = d = S,
                a = f) : d = d.next = S,
                l |= y;
            if (s = s.next,
            s === null) {
                if (s = i.shared.pending,
                s === null)
                    break;
                y = s,
                s = y.next,
                y.next = null,
                i.lastBaseUpdate = y,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = d,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                l |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        wn |= l,
        e.lanes = l,
        e.memoizedState = f
    }
}
function Ou(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(N(191, i));
                i.call(r)
            }
        }
}
var ti = {}
  , vt = Zt(ti)
  , br = Zt(ti)
  , Hr = Zt(ti);
function cn(e) {
    if (e === ti)
        throw Error(N(174));
    return e
}
function ca(e, t) {
    switch (X(Hr, t),
    X(br, e),
    X(vt, ti),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Wl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Wl(t, e)
    }
    Z(vt),
    X(vt, t)
}
function Yn() {
    Z(vt),
    Z(br),
    Z(Hr)
}
function Qd(e) {
    cn(Hr.current);
    var t = cn(vt.current)
      , n = Wl(t, e.type);
    t !== n && (X(br, e),
    X(vt, n))
}
function da(e) {
    br.current === e && (Z(vt),
    Z(br))
}
var ne = Zt(0);
function fo(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var yl = [];
function fa() {
    for (var e = 0; e < yl.length; e++)
        yl[e]._workInProgressVersionPrimary = null;
    yl.length = 0
}
var $i = Ot.ReactCurrentDispatcher
  , gl = Ot.ReactCurrentBatchConfig
  , vn = 0
  , re = null
  , fe = null
  , he = null
  , po = !1
  , _r = !1
  , Vr = 0
  , Gh = 0;
function Ce() {
    throw Error(N(321))
}
function pa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ut(e[n], t[n]))
            return !1;
    return !0
}
function ma(e, t, n, r, i, o) {
    if (vn = o,
    re = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    $i.current = e === null || e.memoizedState === null ? n0 : r0,
    e = n(r, i),
    _r) {
        o = 0;
        do {
            if (_r = !1,
            Vr = 0,
            25 <= o)
                throw Error(N(301));
            o += 1,
            he = fe = null,
            t.updateQueue = null,
            $i.current = i0,
            e = n(r, i)
        } while (_r)
    }
    if ($i.current = mo,
    t = fe !== null && fe.next !== null,
    vn = 0,
    he = fe = re = null,
    po = !1,
    t)
        throw Error(N(300));
    return e
}
function ha() {
    var e = Vr !== 0;
    return Vr = 0,
    e
}
function ht() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return he === null ? re.memoizedState = he = e : he = he.next = e,
    he
}
function nt() {
    if (fe === null) {
        var e = re.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = fe.next;
    var t = he === null ? re.memoizedState : he.next;
    if (t !== null)
        he = t,
        fe = e;
    else {
        if (e === null)
            throw Error(N(310));
        fe = e,
        e = {
            memoizedState: fe.memoizedState,
            baseState: fe.baseState,
            baseQueue: fe.baseQueue,
            queue: fe.queue,
            next: null
        },
        he === null ? re.memoizedState = he = e : he = he.next = e
    }
    return he
}
function Br(e, t) {
    return typeof t == "function" ? t(e) : t
}
function vl(e) {
    var t = nt()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = fe
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = o.next,
            o.next = l
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var s = l = null
          , a = null
          , u = o;
        do {
            var d = u.lane;
            if ((vn & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (s = a = f,
                l = r) : a = a.next = f,
                re.lanes |= d,
                wn |= d
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? l = r : a.next = s,
        ut(r, t.memoizedState) || (De = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            re.lanes |= o,
            wn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function wl(e) {
    var t = nt()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do
            o = e(o, l.action),
            l = l.next;
        while (l !== i);
        ut(o, t.memoizedState) || (De = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Kd() {}
function qd(e, t) {
    var n = re
      , r = nt()
      , i = t()
      , o = !ut(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    De = !0),
    r = r.queue,
    ya(Yd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || he !== null && he.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Qr(9, Xd.bind(null, n, r, i, t), void 0, null),
        ye === null)
            throw Error(N(349));
        vn & 30 || Jd(n, t, i)
    }
    return i
}
function Jd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = re.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    re.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Xd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Gd(t) && Zd(e)
}
function Yd(e, t, n) {
    return n(function() {
        Gd(t) && Zd(e)
    })
}
function Gd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ut(e, n)
    } catch {
        return !0
    }
}
function Zd(e) {
    var t = Rt(e, 1);
    t !== null && at(t, e, 1, -1)
}
function ju(e) {
    var t = ht();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Br,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = t0.bind(null, re, e),
    [t.memoizedState, e]
}
function Qr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = re.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    re.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function ef() {
    return nt().memoizedState
}
function Ui(e, t, n, r) {
    var i = ht();
    re.flags |= e,
    i.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r)
}
function jo(e, t, n, r) {
    var i = nt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (fe !== null) {
        var l = fe.memoizedState;
        if (o = l.destroy,
        r !== null && pa(r, l.deps)) {
            i.memoizedState = Qr(t, n, o, r);
            return
        }
    }
    re.flags |= e,
    i.memoizedState = Qr(1 | t, n, o, r)
}
function Mu(e, t) {
    return Ui(8390656, 8, e, t)
}
function ya(e, t) {
    return jo(2048, 8, e, t)
}
function tf(e, t) {
    return jo(4, 2, e, t)
}
function nf(e, t) {
    return jo(4, 4, e, t)
}
function rf(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function of(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    jo(4, 4, rf.bind(null, t, e), n)
}
function ga() {}
function lf(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function sf(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function af(e, t, n) {
    return vn & 21 ? (ut(n, t) || (n = fd(),
    re.lanes |= n,
    wn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    De = !0),
    e.memoizedState = n)
}
function Zh(e, t) {
    var n = q;
    q = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = gl.transition;
    gl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        q = n,
        gl.transition = r
    }
}
function uf() {
    return nt().memoizedState
}
function e0(e, t, n) {
    var r = Kt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    cf(e))
        df(t, n);
    else if (n = Vd(e, t, n, r),
    n !== null) {
        var i = Me();
        at(n, e, r, i),
        ff(n, t, r)
    }
}
function t0(e, t, n) {
    var r = Kt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (cf(e))
        df(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var l = t.lastRenderedState
                  , s = o(l, n);
                if (i.hasEagerState = !0,
                i.eagerState = s,
                ut(s, l)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    aa(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Vd(e, t, i, r),
        n !== null && (i = Me(),
        at(n, e, r, i),
        ff(n, t, r))
    }
}
function cf(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re
}
function df(e, t) {
    _r = po = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function ff(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        qs(e, n)
    }
}
var mo = {
    readContext: tt,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1
}
  , n0 = {
    readContext: tt,
    useCallback: function(e, t) {
        return ht().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: tt,
    useEffect: Mu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ui(4194308, 4, rf.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ui(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ui(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = ht();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = ht();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = e0.bind(null, re, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = ht();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ju,
    useDebugValue: ga,
    useDeferredValue: function(e) {
        return ht().memoizedState = e
    },
    useTransition: function() {
        var e = ju(!1)
          , t = e[0];
        return e = Zh.bind(null, e[1]),
        ht().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = re
          , i = ht();
        if (te) {
            if (n === void 0)
                throw Error(N(407));
            n = n()
        } else {
            if (n = t(),
            ye === null)
                throw Error(N(349));
            vn & 30 || Jd(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        Mu(Yd.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Qr(9, Xd.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = ht()
          , t = ye.identifierPrefix;
        if (te) {
            var n = Et
              , r = kt;
            n = (r & ~(1 << 32 - st(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Vr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Gh++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , r0 = {
    readContext: tt,
    useCallback: lf,
    useContext: tt,
    useEffect: ya,
    useImperativeHandle: of,
    useInsertionEffect: tf,
    useLayoutEffect: nf,
    useMemo: sf,
    useReducer: vl,
    useRef: ef,
    useState: function() {
        return vl(Br)
    },
    useDebugValue: ga,
    useDeferredValue: function(e) {
        var t = nt();
        return af(t, fe.memoizedState, e)
    },
    useTransition: function() {
        var e = vl(Br)[0]
          , t = nt().memoizedState;
        return [e, t]
    },
    useMutableSource: Kd,
    useSyncExternalStore: qd,
    useId: uf,
    unstable_isNewReconciler: !1
}
  , i0 = {
    readContext: tt,
    useCallback: lf,
    useContext: tt,
    useEffect: ya,
    useImperativeHandle: of,
    useInsertionEffect: tf,
    useLayoutEffect: nf,
    useMemo: sf,
    useReducer: wl,
    useRef: ef,
    useState: function() {
        return wl(Br)
    },
    useDebugValue: ga,
    useDeferredValue: function(e) {
        var t = nt();
        return fe === null ? t.memoizedState = e : af(t, fe.memoizedState, e)
    },
    useTransition: function() {
        var e = wl(Br)[0]
          , t = nt().memoizedState;
        return [e, t]
    },
    useMutableSource: Kd,
    useSyncExternalStore: qd,
    useId: uf,
    unstable_isNewReconciler: !1
};
function it(e, t) {
    if (e && e.defaultProps) {
        t = ie({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function as(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ie({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Mo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? En(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me()
          , i = Kt(e)
          , o = Ct(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Bt(e, o, i),
        t !== null && (at(t, e, i, r),
        Fi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me()
          , i = Kt(e)
          , o = Ct(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Bt(e, o, i),
        t !== null && (at(t, e, i, r),
        Fi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Me()
          , r = Kt(e)
          , i = Ct(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Bt(e, i, r),
        t !== null && (at(t, e, r, n),
        Fi(t, e, r))
    }
};
function Lu(e, t, n, r, i, o, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(i, o) : !0
}
function pf(e, t, n) {
    var r = !1
      , i = Yt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = tt(o) : (i = Fe(t) ? yn : Pe.current,
    r = t.contextTypes,
    o = (r = r != null) ? qn(e, i) : Yt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Mo,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function zu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mo.enqueueReplaceState(t, t.state, null)
}
function us(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    ua(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = tt(o) : (o = Fe(t) ? yn : Pe.current,
    i.context = qn(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (as(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Mo.enqueueReplaceState(i, i.state, null),
    co(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Gn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Mm(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function xl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function cs(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var o0 = typeof WeakMap == "function" ? WeakMap : Map;
function mf(e, t, n) {
    n = Ct(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        yo || (yo = !0,
        xs = r),
        cs(e, t)
    }
    ,
    n
}
function hf(e, t, n) {
    n = Ct(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            cs(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        cs(e, t),
        typeof r != "function" && (Qt === null ? Qt = new Set([this]) : Qt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function Au(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new o0;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = w0.bind(null, e, t, n),
    t.then(e, e))
}
function Du(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Iu(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1),
    t.tag = 2,
    Bt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var l0 = Ot.ReactCurrentOwner
  , De = !1;
function Oe(e, t, n, r) {
    t.child = e === null ? Hd(t, null, n, r) : Xn(t, e.child, n, r)
}
function Fu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Bn(t, i),
    r = ma(e, t, n, r, o, i),
    n = ha(),
    e !== null && !De ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Pt(e, t, i)) : (te && n && na(t),
    t.flags |= 1,
    Oe(e, t, r, i),
    t.child)
}
function $u(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !_a(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        yf(e, t, o, r, i)) : (e = Vi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var l = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Fr,
        n(l, r) && e.ref === t.ref)
            return Pt(e, t, i)
    }
    return t.flags |= 1,
    e = qt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function yf(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Fr(o, r) && e.ref === t.ref)
            if (De = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (De = !0);
            else
                return t.lanes = e.lanes,
                Pt(e, t, i)
    }
    return ds(e, t, n, r, i)
}
function gf(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            X(Fn, He),
            He |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                X(Fn, He),
                He |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            X(Fn, He),
            He |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        X(Fn, He),
        He |= r;
    return Oe(e, t, i, n),
    t.child
}
function vf(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ds(e, t, n, r, i) {
    var o = Fe(n) ? yn : Pe.current;
    return o = qn(t, o),
    Bn(t, i),
    n = ma(e, t, n, r, o, i),
    r = ha(),
    e !== null && !De ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Pt(e, t, i)) : (te && r && na(t),
    t.flags |= 1,
    Oe(e, t, n, i),
    t.child)
}
function Uu(e, t, n, r, i) {
    if (Fe(n)) {
        var o = !0;
        oo(t)
    } else
        o = !1;
    if (Bn(t, i),
    t.stateNode === null)
        Wi(e, t),
        pf(t, n, r),
        us(t, n, r, i),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , s = t.memoizedProps;
        l.props = s;
        var a = l.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = tt(u) : (u = Fe(n) ? yn : Pe.current,
        u = qn(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && zu(t, l, r, u),
        At = !1;
        var y = t.memoizedState;
        l.state = y,
        co(t, r, l, i),
        a = t.memoizedState,
        s !== r || y !== a || Ie.current || At ? (typeof d == "function" && (as(t, n, d, r),
        a = t.memoizedState),
        (s = At || Lu(t, n, s, r, y, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        l.props = r,
        l.state = a,
        l.context = u,
        r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        Bd(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : it(t.type, s),
        l.props = u,
        f = t.pendingProps,
        y = l.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = tt(a) : (a = Fe(n) ? yn : Pe.current,
        a = qn(t, a));
        var S = n.getDerivedStateFromProps;
        (d = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || y !== a) && zu(t, l, r, a),
        At = !1,
        y = t.memoizedState,
        l.state = y,
        co(t, r, l, i);
        var v = t.memoizedState;
        s !== f || y !== v || Ie.current || At ? (typeof S == "function" && (as(t, n, S, r),
        v = t.memoizedState),
        (u = At || Lu(t, n, u, r, y, v, a) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, a),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, a)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        l.props = r,
        l.state = v,
        l.context = a,
        r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return fs(e, t, n, r, o, i)
}
function fs(e, t, n, r, i, o) {
    vf(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return i && _u(t, n, !1),
        Pt(e, t, o);
    r = t.stateNode,
    l0.current = t;
    var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = Xn(t, e.child, null, o),
    t.child = Xn(t, null, s, o)) : Oe(e, t, s, o),
    t.memoizedState = r.state,
    i && _u(t, n, !0),
    t.child
}
function wf(e) {
    var t = e.stateNode;
    t.pendingContext ? Cu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cu(e, t.context, !1),
    ca(e, t.containerInfo)
}
function Wu(e, t, n, r, i) {
    return Jn(),
    ia(i),
    t.flags |= 256,
    Oe(e, t, n, r),
    t.child
}
var ps = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ms(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function xf(e, t, n) {
    var r = t.pendingProps, i = ne.current, o = !1, l = (t.flags & 128) !== 0, s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    X(ne, i & 1),
    e === null)
        return ls(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = l) : o = Ao(l, r, 0, null),
        e = mn(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = ms(n),
        t.memoizedState = ps,
        e) : va(t, l));
    if (i = e.memoizedState,
    i !== null && (s = i.dehydrated,
    s !== null))
        return s0(e, t, l, r, s, i, n);
    if (o) {
        o = r.fallback,
        l = t.mode,
        i = e.child,
        s = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = qt(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        s !== null ? o = qt(s, o) : (o = mn(o, l, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        l = e.child.memoizedState,
        l = l === null ? ms(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        o.memoizedState = l,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = ps,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = qt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function va(e, t) {
    return t = Ao({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ei(e, t, n, r) {
    return r !== null && ia(r),
    Xn(t, e.child, null, n),
    e = va(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function s0(e, t, n, r, i, o, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = xl(Error(N(422))),
        Ei(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Ao({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = mn(o, i, l, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Xn(t, e.child, null, l),
        t.child.memoizedState = ms(l),
        t.memoizedState = ps,
        o);
    if (!(t.mode & 1))
        return Ei(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        o = Error(N(419)),
        r = xl(o, r, void 0),
        Ei(e, t, l, r)
    }
    if (s = (l & e.childLanes) !== 0,
    De || s) {
        if (r = ye,
        r !== null) {
            switch (l & -l) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            Rt(e, i),
            at(r, e, i, -1))
        }
        return Ca(),
        r = xl(Error(N(421))),
        Ei(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = x0.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Be = Vt(i.nextSibling),
    Qe = t,
    te = !0,
    lt = null,
    e !== null && (Ye[Ge++] = kt,
    Ye[Ge++] = Et,
    Ye[Ge++] = gn,
    kt = e.id,
    Et = e.overflow,
    gn = t),
    t = va(t, r.children),
    t.flags |= 4096,
    t)
}
function bu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ss(e.return, t, n)
}
function Sl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Sf(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Oe(e, t, r.children, n),
    r = ne.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && bu(e, n, t);
                else if (e.tag === 19)
                    bu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (X(ne, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && fo(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Sl(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && fo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Sl(t, !0, n, null, o);
            break;
        case "together":
            Sl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Wi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Pt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    wn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        n = qt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = qt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function a0(e, t, n) {
    switch (t.tag) {
    case 3:
        wf(t),
        Jn();
        break;
    case 5:
        Qd(t);
        break;
    case 1:
        Fe(t.type) && oo(t);
        break;
    case 4:
        ca(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        X(ao, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (X(ne, ne.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? xf(e, t, n) : (X(ne, ne.current & 1),
            e = Pt(e, t, n),
            e !== null ? e.sibling : null);
        X(ne, ne.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Sf(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        X(ne, ne.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        gf(e, t, n)
    }
    return Pt(e, t, n)
}
var kf, hs, Ef, Cf;
kf = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
hs = function() {}
;
Ef = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        cn(vt.current);
        var o = null;
        switch (n) {
        case "input":
            i = Il(e, i),
            r = Il(e, r),
            o = [];
            break;
        case "select":
            i = ie({}, i, {
                value: void 0
            }),
            r = ie({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Ul(e, i),
            r = Ul(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ro)
        }
        bl(n, r);
        var l;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var s = i[u];
                    for (l in s)
                        s.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (jr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (s = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== s && (a != null || s != null))
                if (u === "style")
                    if (s) {
                        for (l in s)
                            !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in a)
                            a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}),
                            n[l] = a[l])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    s = s ? s.__html : void 0,
                    a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (jr.hasOwnProperty(u) ? (a != null && u === "onScroll" && G("scroll", e),
                    o || s === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Cf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function fr(e, t) {
    if (!te)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function u0(e, t, n) {
    var r = t.pendingProps;
    switch (ra(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return _e(t),
        null;
    case 1:
        return Fe(t.type) && io(),
        _e(t),
        null;
    case 3:
        return r = t.stateNode,
        Yn(),
        Z(Ie),
        Z(Pe),
        fa(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Si(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        lt !== null && (Es(lt),
        lt = null))),
        hs(e, t),
        _e(t),
        null;
    case 5:
        da(t);
        var i = cn(Hr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Ef(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return _e(t),
                null
            }
            if (e = cn(vt.current),
            Si(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[yt] = t,
                r[Wr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    G("cancel", r),
                    G("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    G("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < vr.length; i++)
                        G(vr[i], r);
                    break;
                case "source":
                    G("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    G("error", r),
                    G("load", r);
                    break;
                case "details":
                    G("toggle", r);
                    break;
                case "input":
                    Ya(r, o),
                    G("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    G("invalid", r);
                    break;
                case "textarea":
                    Za(r, o),
                    G("invalid", r)
                }
                bl(n, o),
                i = null;
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        var s = o[l];
                        l === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && xi(r.textContent, s, e),
                        i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && xi(r.textContent, s, e),
                        i = ["children", "" + s]) : jr.hasOwnProperty(l) && s != null && l === "onScroll" && G("scroll", r)
                    }
                switch (n) {
                case "input":
                    fi(r),
                    Ga(r, o, !0);
                    break;
                case "textarea":
                    fi(r),
                    eu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ro)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Yc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[yt] = t,
                e[Wr] = r,
                kf(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = Hl(n, r),
                    n) {
                    case "dialog":
                        G("cancel", e),
                        G("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        G("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < vr.length; i++)
                            G(vr[i], e);
                        i = r;
                        break;
                    case "source":
                        G("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        G("error", e),
                        G("load", e),
                        i = r;
                        break;
                    case "details":
                        G("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Ya(e, r),
                        i = Il(e, r),
                        G("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ie({}, r, {
                            value: void 0
                        }),
                        G("invalid", e);
                        break;
                    case "textarea":
                        Za(e, r),
                        i = Ul(e, r),
                        G("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    bl(n, i),
                    s = i;
                    for (o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "style" ? ed(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Gc(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Mr(e, a) : typeof a == "number" && Mr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (jr.hasOwnProperty(o) ? a != null && o === "onScroll" && G("scroll", e) : a != null && bs(e, o, a, l))
                        }
                    switch (n) {
                    case "input":
                        fi(e),
                        Ga(e, r, !1);
                        break;
                    case "textarea":
                        fi(e),
                        eu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Xt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Wn(e, !!r.multiple, o, !1) : r.defaultValue != null && Wn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ro)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return _e(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Cf(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(N(166));
            if (n = cn(Hr.current),
            cn(vt.current),
            Si(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[yt] = t,
                (o = r.nodeValue !== n) && (e = Qe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        xi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && xi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[yt] = t,
                t.stateNode = r
        }
        return _e(t),
        null;
    case 13:
        if (Z(ne),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (te && Be !== null && t.mode & 1 && !(t.flags & 128))
                Wd(),
                Jn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Si(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(N(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(N(317));
                    o[yt] = t
                } else
                    Jn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                _e(t),
                o = !1
            } else
                lt !== null && (Es(lt),
                lt = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ne.current & 1 ? pe === 0 && (pe = 3) : Ca())),
        t.updateQueue !== null && (t.flags |= 4),
        _e(t),
        null);
    case 4:
        return Yn(),
        hs(e, t),
        e === null && $r(t.stateNode.containerInfo),
        _e(t),
        null;
    case 10:
        return sa(t.type._context),
        _e(t),
        null;
    case 17:
        return Fe(t.type) && io(),
        _e(t),
        null;
    case 19:
        if (Z(ne),
        o = t.memoizedState,
        o === null)
            return _e(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = o.rendering,
        l === null)
            if (r)
                fr(o, !1);
            else {
                if (pe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = fo(e),
                        l !== null) {
                            for (t.flags |= 128,
                            fr(o, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                l = o.alternate,
                                l === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = l.childLanes,
                                o.lanes = l.lanes,
                                o.child = l.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = l.memoizedProps,
                                o.memoizedState = l.memoizedState,
                                o.updateQueue = l.updateQueue,
                                o.type = l.type,
                                e = l.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return X(ne, ne.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && se() > Zn && (t.flags |= 128,
                r = !0,
                fr(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = fo(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    fr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !l.alternate && !te)
                        return _e(t),
                        null
                } else
                    2 * se() - o.renderingStartTime > Zn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    fr(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = o.last,
            n !== null ? n.sibling = l : t.child = l,
            o.last = l)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = se(),
        t.sibling = null,
        n = ne.current,
        X(ne, r ? n & 1 | 2 : n & 1),
        t) : (_e(t),
        null);
    case 22:
    case 23:
        return Ea(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? He & 1073741824 && (_e(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function c0(e, t) {
    switch (ra(t),
    t.tag) {
    case 1:
        return Fe(t.type) && io(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Yn(),
        Z(Ie),
        Z(Pe),
        fa(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return da(t),
        null;
    case 13:
        if (Z(ne),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            Jn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Z(ne),
        null;
    case 4:
        return Yn(),
        null;
    case 10:
        return sa(t.type._context),
        null;
    case 22:
    case 23:
        return Ea(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ci = !1
  , Ne = !1
  , d0 = typeof WeakSet == "function" ? WeakSet : Set
  , A = null;
function In(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                oe(e, t, r)
            }
        else
            n.current = null
}
function ys(e, t, n) {
    try {
        n()
    } catch (r) {
        oe(e, t, r)
    }
}
var Hu = !1;
function f0(e, t) {
    if (Zl = eo,
    e = Pd(),
    ta(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , s = -1
                      , a = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , y = null;
                    t: for (; ; ) {
                        for (var S; f !== n || i !== 0 && f.nodeType !== 3 || (s = l + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (a = l + r),
                        f.nodeType === 3 && (l += f.nodeValue.length),
                        (S = f.firstChild) !== null; )
                            y = f,
                            f = S;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (y === n && ++u === i && (s = l),
                            y === o && ++d === r && (a = l),
                            (S = f.nextSibling) !== null)
                                break;
                            f = y,
                            y = f.parentNode
                        }
                        f = S
                    }
                    n = s === -1 || a === -1 ? null : {
                        start: s,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (es = {
        focusedElem: e,
        selectionRange: n
    },
    eo = !1,
    A = t; A !== null; )
        if (t = A,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            A = e;
        else
            for (; A !== null; ) {
                t = A;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var x = v.memoizedProps
                                  , _ = v.memoizedState
                                  , p = t.stateNode
                                  , c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : it(t.type, x), _);
                                p.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (k) {
                    oe(t, t.return, k)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    A = e;
                    break
                }
                A = t.return
            }
    return v = Hu,
    Hu = !1,
    v
}
function Nr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && ys(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Lo(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function gs(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function _f(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    _f(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[yt],
    delete t[Wr],
    delete t[rs],
    delete t[qh],
    delete t[Jh])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Nf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Vu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Nf(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function vs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ro));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (vs(e, t, n),
        e = e.sibling; e !== null; )
            vs(e, t, n),
            e = e.sibling
}
function ws(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ws(e, t, n),
        e = e.sibling; e !== null; )
            ws(e, t, n),
            e = e.sibling
}
var we = null
  , ot = !1;
function Lt(e, t, n) {
    for (n = n.child; n !== null; )
        Rf(e, t, n),
        n = n.sibling
}
function Rf(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
        try {
            gt.onCommitFiberUnmount(_o, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ne || In(n, t);
    case 6:
        var r = we
          , i = ot;
        we = null,
        Lt(e, t, n),
        we = r,
        ot = i,
        we !== null && (ot ? (e = we,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
        break;
    case 18:
        we !== null && (ot ? (e = we,
        n = n.stateNode,
        e.nodeType === 8 ? ml(e.parentNode, n) : e.nodeType === 1 && ml(e, n),
        Dr(e)) : ml(we, n.stateNode));
        break;
    case 4:
        r = we,
        i = ot,
        we = n.stateNode.containerInfo,
        ot = !0,
        Lt(e, t, n),
        we = r,
        ot = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ne && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , l = o.destroy;
                o = o.tag,
                l !== void 0 && (o & 2 || o & 4) && ys(n, t, l),
                i = i.next
            } while (i !== r)
        }
        Lt(e, t, n);
        break;
    case 1:
        if (!Ne && (In(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                oe(n, t, s)
            }
        Lt(e, t, n);
        break;
    case 21:
        Lt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ne = (r = Ne) || n.memoizedState !== null,
        Lt(e, t, n),
        Ne = r) : Lt(e, t, n);
        break;
    default:
        Lt(e, t, n)
    }
}
function Bu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new d0),
        t.forEach(function(r) {
            var i = S0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function rt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , l = t
                  , s = l;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        we = s.stateNode,
                        ot = !1;
                        break e;
                    case 3:
                        we = s.stateNode.containerInfo,
                        ot = !0;
                        break e;
                    case 4:
                        we = s.stateNode.containerInfo,
                        ot = !0;
                        break e
                    }
                    s = s.return
                }
                if (we === null)
                    throw Error(N(160));
                Rf(o, l, i),
                we = null,
                ot = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                oe(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Pf(t, e),
            t = t.sibling
}
function Pf(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (rt(t, e),
        pt(e),
        r & 4) {
            try {
                Nr(3, e, e.return),
                Lo(3, e)
            } catch (x) {
                oe(e, e.return, x)
            }
            try {
                Nr(5, e, e.return)
            } catch (x) {
                oe(e, e.return, x)
            }
        }
        break;
    case 1:
        rt(t, e),
        pt(e),
        r & 512 && n !== null && In(n, n.return);
        break;
    case 5:
        if (rt(t, e),
        pt(e),
        r & 512 && n !== null && In(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Mr(i, "")
            } catch (x) {
                oe(e, e.return, x)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , l = n !== null ? n.memoizedProps : o
              , s = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    s === "input" && o.type === "radio" && o.name != null && Jc(i, o),
                    Hl(s, l);
                    var u = Hl(s, o);
                    for (l = 0; l < a.length; l += 2) {
                        var d = a[l]
                          , f = a[l + 1];
                        d === "style" ? ed(i, f) : d === "dangerouslySetInnerHTML" ? Gc(i, f) : d === "children" ? Mr(i, f) : bs(i, d, f, u)
                    }
                    switch (s) {
                    case "input":
                        Fl(i, o);
                        break;
                    case "textarea":
                        Xc(i, o);
                        break;
                    case "select":
                        var y = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var S = o.value;
                        S != null ? Wn(i, !!o.multiple, S, !1) : y !== !!o.multiple && (o.defaultValue != null ? Wn(i, !!o.multiple, o.defaultValue, !0) : Wn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Wr] = o
                } catch (x) {
                    oe(e, e.return, x)
                }
        }
        break;
    case 6:
        if (rt(t, e),
        pt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (x) {
                oe(e, e.return, x)
            }
        }
        break;
    case 3:
        if (rt(t, e),
        pt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Dr(t.containerInfo)
            } catch (x) {
                oe(e, e.return, x)
            }
        break;
    case 4:
        rt(t, e),
        pt(e);
        break;
    case 13:
        rt(t, e),
        pt(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Sa = se())),
        r & 4 && Bu(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ne = (u = Ne) || d,
        rt(t, e),
        Ne = u) : rt(t, e),
        pt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (A = e,
                d = e.child; d !== null; ) {
                    for (f = A = d; A !== null; ) {
                        switch (y = A,
                        S = y.child,
                        y.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Nr(4, y, y.return);
                            break;
                        case 1:
                            In(y, y.return);
                            var v = y.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = y,
                                n = y.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (x) {
                                    oe(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            In(y, y.return);
                            break;
                        case 22:
                            if (y.memoizedState !== null) {
                                Ku(f);
                                continue
                            }
                        }
                        S !== null ? (S.return = y,
                        A = S) : Ku(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = f.stateNode,
                            a = f.memoizedProps.style,
                            l = a != null && a.hasOwnProperty("display") ? a.display : null,
                            s.style.display = Zc("display", l))
                        } catch (x) {
                            oe(e, e.return, x)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (x) {
                            oe(e, e.return, x)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        rt(t, e),
        pt(e),
        r & 4 && Bu(e);
        break;
    case 21:
        break;
    default:
        rt(t, e),
        pt(e)
    }
}
function pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Nf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Mr(i, ""),
                r.flags &= -33);
                var o = Vu(e);
                ws(e, o, i);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , s = Vu(e);
                vs(e, s, l);
                break;
            default:
                throw Error(N(161))
            }
        } catch (a) {
            oe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function p0(e, t, n) {
    A = e,
    Tf(e)
}
function Tf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
        var i = A
          , o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Ci;
            if (!l) {
                var s = i.alternate
                  , a = s !== null && s.memoizedState !== null || Ne;
                s = Ci;
                var u = Ne;
                if (Ci = l,
                (Ne = a) && !u)
                    for (A = i; A !== null; )
                        l = A,
                        a = l.child,
                        l.tag === 22 && l.memoizedState !== null ? qu(i) : a !== null ? (a.return = l,
                        A = a) : qu(i);
                for (; o !== null; )
                    A = o,
                    Tf(o),
                    o = o.sibling;
                A = i,
                Ci = s,
                Ne = u
            }
            Qu(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            A = o) : Qu(e)
    }
}
function Qu(e) {
    for (; A !== null; ) {
        var t = A;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ne || Lo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ne)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Ou(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Ou(t, l, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Dr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                    }
                Ne || t.flags & 512 && gs(t)
            } catch (y) {
                oe(t, t.return, y)
            }
        }
        if (t === e) {
            A = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function Ku(e) {
    for (; A !== null; ) {
        var t = A;
        if (t === e) {
            A = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function qu(e) {
    for (; A !== null; ) {
        var t = A;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Lo(4, t)
                } catch (a) {
                    oe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        oe(t, i, a)
                    }
                }
                var o = t.return;
                try {
                    gs(t)
                } catch (a) {
                    oe(t, o, a)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    gs(t)
                } catch (a) {
                    oe(t, l, a)
                }
            }
        } catch (a) {
            oe(t, t.return, a)
        }
        if (t === e) {
            A = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            A = s;
            break
        }
        A = t.return
    }
}
var m0 = Math.ceil
  , ho = Ot.ReactCurrentDispatcher
  , wa = Ot.ReactCurrentOwner
  , et = Ot.ReactCurrentBatchConfig
  , Q = 0
  , ye = null
  , ce = null
  , xe = 0
  , He = 0
  , Fn = Zt(0)
  , pe = 0
  , Kr = null
  , wn = 0
  , zo = 0
  , xa = 0
  , Rr = null
  , Ae = null
  , Sa = 0
  , Zn = 1 / 0
  , xt = null
  , yo = !1
  , xs = null
  , Qt = null
  , _i = !1
  , Ut = null
  , go = 0
  , Pr = 0
  , Ss = null
  , bi = -1
  , Hi = 0;
function Me() {
    return Q & 6 ? se() : bi !== -1 ? bi : bi = se()
}
function Kt(e) {
    return e.mode & 1 ? Q & 2 && xe !== 0 ? xe & -xe : Yh.transition !== null ? (Hi === 0 && (Hi = fd()),
    Hi) : (e = q,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : wd(e.type)),
    e) : 1
}
function at(e, t, n, r) {
    if (50 < Pr)
        throw Pr = 0,
        Ss = null,
        Error(N(185));
    Gr(e, n, r),
    (!(Q & 2) || e !== ye) && (e === ye && (!(Q & 2) && (zo |= n),
    pe === 4 && It(e, xe)),
    $e(e, r),
    n === 1 && Q === 0 && !(t.mode & 1) && (Zn = se() + 500,
    Oo && en()))
}
function $e(e, t) {
    var n = e.callbackNode;
    Ym(e, t);
    var r = Zi(e, e === ye ? xe : 0);
    if (r === 0)
        n !== null && ru(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ru(n),
        t === 1)
            e.tag === 0 ? Xh(Ju.bind(null, e)) : Fd(Ju.bind(null, e)),
            Qh(function() {
                !(Q & 6) && en()
            }),
            n = null;
        else {
            switch (pd(r)) {
            case 1:
                n = Ks;
                break;
            case 4:
                n = cd;
                break;
            case 16:
                n = Gi;
                break;
            case 536870912:
                n = dd;
                break;
            default:
                n = Gi
            }
            n = If(n, Of.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Of(e, t) {
    if (bi = -1,
    Hi = 0,
    Q & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (Qn() && e.callbackNode !== n)
        return null;
    var r = Zi(e, e === ye ? xe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = vo(e, r);
    else {
        t = r;
        var i = Q;
        Q |= 2;
        var o = Mf();
        (ye !== e || xe !== t) && (xt = null,
        Zn = se() + 500,
        pn(e, t));
        do
            try {
                g0();
                break
            } catch (s) {
                jf(e, s)
            }
        while (!0);
        la(),
        ho.current = o,
        Q = i,
        ce !== null ? t = 0 : (ye = null,
        xe = 0,
        t = pe)
    }
    if (t !== 0) {
        if (t === 2 && (i = ql(e),
        i !== 0 && (r = i,
        t = ks(e, i))),
        t === 1)
            throw n = Kr,
            pn(e, 0),
            It(e, r),
            $e(e, se()),
            n;
        if (t === 6)
            It(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !h0(i) && (t = vo(e, r),
            t === 2 && (o = ql(e),
            o !== 0 && (r = o,
            t = ks(e, o))),
            t === 1))
                throw n = Kr,
                pn(e, 0),
                It(e, r),
                $e(e, se()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                ln(e, Ae, xt);
                break;
            case 3:
                if (It(e, r),
                (r & 130023424) === r && (t = Sa + 500 - se(),
                10 < t)) {
                    if (Zi(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Me(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = ns(ln.bind(null, e, Ae, xt), t);
                    break
                }
                ln(e, Ae, xt);
                break;
            case 4:
                if (It(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var l = 31 - st(r);
                    o = 1 << l,
                    l = t[l],
                    l > i && (i = l),
                    r &= ~o
                }
                if (r = i,
                r = se() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * m0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ns(ln.bind(null, e, Ae, xt), r);
                    break
                }
                ln(e, Ae, xt);
                break;
            case 5:
                ln(e, Ae, xt);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return $e(e, se()),
    e.callbackNode === n ? Of.bind(null, e) : null
}
function ks(e, t) {
    var n = Rr;
    return e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    e = vo(e, t),
    e !== 2 && (t = Ae,
    Ae = n,
    t !== null && Es(t)),
    e
}
function Es(e) {
    Ae === null ? Ae = e : Ae.push.apply(Ae, e)
}
function h0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!ut(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function It(e, t) {
    for (t &= ~xa,
    t &= ~zo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - st(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Ju(e) {
    if (Q & 6)
        throw Error(N(327));
    Qn();
    var t = Zi(e, 0);
    if (!(t & 1))
        return $e(e, se()),
        null;
    var n = vo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ql(e);
        r !== 0 && (t = r,
        n = ks(e, r))
    }
    if (n === 1)
        throw n = Kr,
        pn(e, 0),
        It(e, t),
        $e(e, se()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    ln(e, Ae, xt),
    $e(e, se()),
    null
}
function ka(e, t) {
    var n = Q;
    Q |= 1;
    try {
        return e(t)
    } finally {
        Q = n,
        Q === 0 && (Zn = se() + 500,
        Oo && en())
    }
}
function xn(e) {
    Ut !== null && Ut.tag === 0 && !(Q & 6) && Qn();
    var t = Q;
    Q |= 1;
    var n = et.transition
      , r = q;
    try {
        if (et.transition = null,
        q = 1,
        e)
            return e()
    } finally {
        q = r,
        et.transition = n,
        Q = t,
        !(Q & 6) && en()
    }
}
function Ea() {
    He = Fn.current,
    Z(Fn)
}
function pn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Bh(n)),
    ce !== null)
        for (n = ce.return; n !== null; ) {
            var r = n;
            switch (ra(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && io();
                break;
            case 3:
                Yn(),
                Z(Ie),
                Z(Pe),
                fa();
                break;
            case 5:
                da(r);
                break;
            case 4:
                Yn();
                break;
            case 13:
                Z(ne);
                break;
            case 19:
                Z(ne);
                break;
            case 10:
                sa(r.type._context);
                break;
            case 22:
            case 23:
                Ea()
            }
            n = n.return
        }
    if (ye = e,
    ce = e = qt(e.current, null),
    xe = He = t,
    pe = 0,
    Kr = null,
    xa = zo = wn = 0,
    Ae = Rr = null,
    un !== null) {
        for (t = 0; t < un.length; t++)
            if (n = un[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i,
                    r.next = l
                }
                n.pending = r
            }
        un = null
    }
    return e
}
function jf(e, t) {
    do {
        var n = ce;
        try {
            if (la(),
            $i.current = mo,
            po) {
                for (var r = re.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                po = !1
            }
            if (vn = 0,
            he = fe = re = null,
            _r = !1,
            Vr = 0,
            wa.current = null,
            n === null || n.return === null) {
                pe = 1,
                Kr = t,
                ce = null;
                break
            }
            e: {
                var o = e
                  , l = n.return
                  , s = n
                  , a = t;
                if (t = xe,
                s.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , d = s
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var y = d.alternate;
                        y ? (d.updateQueue = y.updateQueue,
                        d.memoizedState = y.memoizedState,
                        d.lanes = y.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var S = Du(l);
                    if (S !== null) {
                        S.flags &= -257,
                        Iu(S, l, s, o, t),
                        S.mode & 1 && Au(o, u, t),
                        t = S,
                        a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(a),
                            t.updateQueue = x
                        } else
                            v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Au(o, u, t),
                            Ca();
                            break e
                        }
                        a = Error(N(426))
                    }
                } else if (te && s.mode & 1) {
                    var _ = Du(l);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256),
                        Iu(_, l, s, o, t),
                        ia(Gn(a, s));
                        break e
                    }
                }
                o = a = Gn(a, s),
                pe !== 4 && (pe = 2),
                Rr === null ? Rr = [o] : Rr.push(o),
                o = l;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var p = mf(o, a, t);
                        Tu(o, p);
                        break e;
                    case 1:
                        s = a;
                        var c = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Qt === null || !Qt.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var k = hf(o, s, t);
                            Tu(o, k);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            zf(n)
        } catch (C) {
            t = C,
            ce === n && n !== null && (ce = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Mf() {
    var e = ho.current;
    return ho.current = mo,
    e === null ? mo : e
}
function Ca() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ye === null || !(wn & 268435455) && !(zo & 268435455) || It(ye, xe)
}
function vo(e, t) {
    var n = Q;
    Q |= 2;
    var r = Mf();
    (ye !== e || xe !== t) && (xt = null,
    pn(e, t));
    do
        try {
            y0();
            break
        } catch (i) {
            jf(e, i)
        }
    while (!0);
    if (la(),
    Q = n,
    ho.current = r,
    ce !== null)
        throw Error(N(261));
    return ye = null,
    xe = 0,
    pe
}
function y0() {
    for (; ce !== null; )
        Lf(ce)
}
function g0() {
    for (; ce !== null && !bm(); )
        Lf(ce)
}
function Lf(e) {
    var t = Df(e.alternate, e, He);
    e.memoizedProps = e.pendingProps,
    t === null ? zf(e) : ce = t,
    wa.current = null
}
function zf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = c0(n, t),
            n !== null) {
                n.flags &= 32767,
                ce = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                pe = 6,
                ce = null;
                return
            }
        } else if (n = u0(n, t, He),
        n !== null) {
            ce = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ce = t;
            return
        }
        ce = t = e
    } while (t !== null);
    pe === 0 && (pe = 5)
}
function ln(e, t, n) {
    var r = q
      , i = et.transition;
    try {
        et.transition = null,
        q = 1,
        v0(e, t, n, r)
    } finally {
        et.transition = i,
        q = r
    }
    return null
}
function v0(e, t, n, r) {
    do
        Qn();
    while (Ut !== null);
    if (Q & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Gm(e, o),
    e === ye && (ce = ye = null,
    xe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _i || (_i = !0,
    If(Gi, function() {
        return Qn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = et.transition,
        et.transition = null;
        var l = q;
        q = 1;
        var s = Q;
        Q |= 4,
        wa.current = null,
        f0(e, n),
        Pf(n, e),
        Fh(es),
        eo = !!Zl,
        es = Zl = null,
        e.current = n,
        p0(n),
        Hm(),
        Q = s,
        q = l,
        et.transition = o
    } else
        e.current = n;
    if (_i && (_i = !1,
    Ut = e,
    go = i),
    o = e.pendingLanes,
    o === 0 && (Qt = null),
    Qm(n.stateNode),
    $e(e, se()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (yo)
        throw yo = !1,
        e = xs,
        xs = null,
        e;
    return go & 1 && e.tag !== 0 && Qn(),
    o = e.pendingLanes,
    o & 1 ? e === Ss ? Pr++ : (Pr = 0,
    Ss = e) : Pr = 0,
    en(),
    null
}
function Qn() {
    if (Ut !== null) {
        var e = pd(go)
          , t = et.transition
          , n = q;
        try {
            if (et.transition = null,
            q = 16 > e ? 16 : e,
            Ut === null)
                var r = !1;
            else {
                if (e = Ut,
                Ut = null,
                go = 0,
                Q & 6)
                    throw Error(N(331));
                var i = Q;
                for (Q |= 4,
                A = e.current; A !== null; ) {
                    var o = A
                      , l = o.child;
                    if (A.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (A = u; A !== null; ) {
                                    var d = A;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Nr(8, d, o)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        A = f;
                                    else
                                        for (; A !== null; ) {
                                            d = A;
                                            var y = d.sibling
                                              , S = d.return;
                                            if (_f(d),
                                            d === u) {
                                                A = null;
                                                break
                                            }
                                            if (y !== null) {
                                                y.return = S,
                                                A = y;
                                                break
                                            }
                                            A = S
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var _ = x.sibling;
                                        x.sibling = null,
                                        x = _
                                    } while (x !== null)
                                }
                            }
                            A = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null)
                        l.return = o,
                        A = l;
                    else
                        e: for (; A !== null; ) {
                            if (o = A,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Nr(9, o, o.return)
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                A = p;
                                break e
                            }
                            A = o.return
                        }
                }
                var c = e.current;
                for (A = c; A !== null; ) {
                    l = A;
                    var m = l.child;
                    if (l.subtreeFlags & 2064 && m !== null)
                        m.return = l,
                        A = m;
                    else
                        e: for (l = c; A !== null; ) {
                            if (s = A,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Lo(9, s)
                                    }
                                } catch (C) {
                                    oe(s, s.return, C)
                                }
                            if (s === l) {
                                A = null;
                                break e
                            }
                            var k = s.sibling;
                            if (k !== null) {
                                k.return = s.return,
                                A = k;
                                break e
                            }
                            A = s.return
                        }
                }
                if (Q = i,
                en(),
                gt && typeof gt.onPostCommitFiberRoot == "function")
                    try {
                        gt.onPostCommitFiberRoot(_o, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            q = n,
            et.transition = t
        }
    }
    return !1
}
function Xu(e, t, n) {
    t = Gn(n, t),
    t = mf(e, t, 1),
    e = Bt(e, t, 1),
    t = Me(),
    e !== null && (Gr(e, 1, t),
    $e(e, t))
}
function oe(e, t, n) {
    if (e.tag === 3)
        Xu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Xu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qt === null || !Qt.has(r))) {
                    e = Gn(n, e),
                    e = hf(t, e, 1),
                    t = Bt(t, e, 1),
                    e = Me(),
                    t !== null && (Gr(t, 1, e),
                    $e(t, e));
                    break
                }
            }
            t = t.return
        }
}
function w0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Me(),
    e.pingedLanes |= e.suspendedLanes & n,
    ye === e && (xe & n) === n && (pe === 4 || pe === 3 && (xe & 130023424) === xe && 500 > se() - Sa ? pn(e, 0) : xa |= n),
    $e(e, t)
}
function Af(e, t) {
    t === 0 && (e.mode & 1 ? (t = hi,
    hi <<= 1,
    !(hi & 130023424) && (hi = 4194304)) : t = 1);
    var n = Me();
    e = Rt(e, t),
    e !== null && (Gr(e, t, n),
    $e(e, n))
}
function x0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Af(e, n)
}
function S0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    r !== null && r.delete(t),
    Af(e, n)
}
var Df;
Df = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ie.current)
            De = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return De = !1,
                a0(e, t, n);
            De = !!(e.flags & 131072)
        }
    else
        De = !1,
        te && t.flags & 1048576 && $d(t, so, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Wi(e, t),
        e = t.pendingProps;
        var i = qn(t, Pe.current);
        Bn(t, n),
        i = ma(null, t, r, e, i, n);
        var o = ha();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Fe(r) ? (o = !0,
        oo(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ua(t),
        i.updater = Mo,
        t.stateNode = i,
        i._reactInternals = t,
        us(t, r, e, n),
        t = fs(null, t, r, !0, o, n)) : (t.tag = 0,
        te && o && na(t),
        Oe(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Wi(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = E0(r),
            e = it(r, e),
            i) {
            case 0:
                t = ds(null, t, r, e, n);
                break e;
            case 1:
                t = Uu(null, t, r, e, n);
                break e;
            case 11:
                t = Fu(null, t, r, e, n);
                break e;
            case 14:
                t = $u(null, t, r, it(r.type, e), n);
                break e
            }
            throw Error(N(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : it(r, i),
        ds(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : it(r, i),
        Uu(e, t, r, i, n);
    case 3:
        e: {
            if (wf(t),
            e === null)
                throw Error(N(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            Bd(e, t),
            co(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Gn(Error(N(423)), t),
                    t = Wu(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Gn(Error(N(424)), t),
                    t = Wu(e, t, r, n, i);
                    break e
                } else
                    for (Be = Vt(t.stateNode.containerInfo.firstChild),
                    Qe = t,
                    te = !0,
                    lt = null,
                    n = Hd(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Jn(),
                r === i) {
                    t = Pt(e, t, n);
                    break e
                }
                Oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Qd(t),
        e === null && ls(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        l = i.children,
        ts(r, i) ? l = null : o !== null && ts(r, o) && (t.flags |= 32),
        vf(e, t),
        Oe(e, t, l, n),
        t.child;
    case 6:
        return e === null && ls(t),
        null;
    case 13:
        return xf(e, t, n);
    case 4:
        return ca(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Xn(t, null, r, n) : Oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : it(r, i),
        Fu(e, t, r, i, n);
    case 7:
        return Oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            l = i.value,
            X(ao, r._currentValue),
            r._currentValue = l,
            o !== null)
                if (ut(o.value, l)) {
                    if (o.children === i.children && !Ie.current) {
                        t = Pt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var s = o.dependencies;
                        if (s !== null) {
                            l = o.child;
                            for (var a = s.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = Ct(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    ss(o.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            l = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (l = o.return,
                            l === null)
                                throw Error(N(341));
                            l.lanes |= n,
                            s = l.alternate,
                            s !== null && (s.lanes |= n),
                            ss(l, n, t),
                            l = o.sibling
                        } else
                            l = o.child;
                        if (l !== null)
                            l.return = o;
                        else
                            for (l = o; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (o = l.sibling,
                                o !== null) {
                                    o.return = l.return,
                                    l = o;
                                    break
                                }
                                l = l.return
                            }
                        o = l
                    }
            Oe(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Bn(t, n),
        i = tt(i),
        r = r(i),
        t.flags |= 1,
        Oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = it(r, t.pendingProps),
        i = it(r.type, i),
        $u(e, t, r, i, n);
    case 15:
        return yf(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : it(r, i),
        Wi(e, t),
        t.tag = 1,
        Fe(r) ? (e = !0,
        oo(t)) : e = !1,
        Bn(t, n),
        pf(t, r, i),
        us(t, r, i, n),
        fs(null, t, r, !0, e, n);
    case 19:
        return Sf(e, t, n);
    case 22:
        return gf(e, t, n)
    }
    throw Error(N(156, t.tag))
}
;
function If(e, t) {
    return ud(e, t)
}
function k0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ze(e, t, n, r) {
    return new k0(e,t,n,r)
}
function _a(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function E0(e) {
    if (typeof e == "function")
        return _a(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Vs)
            return 11;
        if (e === Bs)
            return 14
    }
    return 2
}
function qt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ze(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Vi(e, t, n, r, i, o) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        _a(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case Pn:
            return mn(n.children, i, o, t);
        case Hs:
            l = 8,
            i |= 8;
            break;
        case Ll:
            return e = Ze(12, n, t, i | 2),
            e.elementType = Ll,
            e.lanes = o,
            e;
        case zl:
            return e = Ze(13, n, t, i),
            e.elementType = zl,
            e.lanes = o,
            e;
        case Al:
            return e = Ze(19, n, t, i),
            e.elementType = Al,
            e.lanes = o,
            e;
        case Qc:
            return Ao(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Vc:
                    l = 10;
                    break e;
                case Bc:
                    l = 9;
                    break e;
                case Vs:
                    l = 11;
                    break e;
                case Bs:
                    l = 14;
                    break e;
                case zt:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = Ze(l, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function mn(e, t, n, r) {
    return e = Ze(7, e, r, t),
    e.lanes = n,
    e
}
function Ao(e, t, n, r) {
    return e = Ze(22, e, r, t),
    e.elementType = Qc,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function kl(e, t, n) {
    return e = Ze(6, e, null, t),
    e.lanes = n,
    e
}
function El(e, t, n) {
    return t = Ze(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function C0(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = rl(0),
    this.expirationTimes = rl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = rl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Na(e, t, n, r, i, o, l, s, a) {
    return e = new C0(e,t,n,s,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Ze(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ua(o),
    e
}
function _0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Rn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Ff(e) {
    if (!e)
        return Yt;
    e = e._reactInternals;
    e: {
        if (En(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Fe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Fe(n))
            return Id(e, n, t)
    }
    return t
}
function $f(e, t, n, r, i, o, l, s, a) {
    return e = Na(n, r, !0, e, i, o, l, s, a),
    e.context = Ff(null),
    n = e.current,
    r = Me(),
    i = Kt(n),
    o = Ct(r, i),
    o.callback = t ?? null,
    Bt(n, o, i),
    e.current.lanes = i,
    Gr(e, i, r),
    $e(e, r),
    e
}
function Do(e, t, n, r) {
    var i = t.current
      , o = Me()
      , l = Kt(i);
    return n = Ff(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ct(o, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Bt(i, t, l),
    e !== null && (at(e, i, l, o),
    Fi(e, i, l)),
    l
}
function wo(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Yu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Ra(e, t) {
    Yu(e, t),
    (e = e.alternate) && Yu(e, t)
}
function N0() {
    return null
}
var Uf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Pa(e) {
    this._internalRoot = e
}
Io.prototype.render = Pa.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    Do(e, t, null, null)
}
;
Io.prototype.unmount = Pa.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        xn(function() {
            Do(null, e, null, null)
        }),
        t[Nt] = null
    }
}
;
function Io(e) {
    this._internalRoot = e
}
Io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = yd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++)
            ;
        Dt.splice(n, 0, e),
        n === 0 && vd(e)
    }
}
;
function Ta(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Fo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Gu() {}
function R0(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = wo(l);
                o.call(u)
            }
        }
        var l = $f(t, r, e, 0, null, !1, !1, "", Gu);
        return e._reactRootContainer = l,
        e[Nt] = l.current,
        $r(e.nodeType === 8 ? e.parentNode : e),
        xn(),
        l
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = wo(a);
            s.call(u)
        }
    }
    var a = Na(e, 0, !1, null, null, !1, !1, "", Gu);
    return e._reactRootContainer = a,
    e[Nt] = a.current,
    $r(e.nodeType === 8 ? e.parentNode : e),
    xn(function() {
        Do(t, a, n, r)
    }),
    a
}
function $o(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var s = i;
            i = function() {
                var a = wo(l);
                s.call(a)
            }
        }
        Do(t, l, e, i)
    } else
        l = R0(n, t, e, i, r);
    return wo(l)
}
md = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = gr(t.pendingLanes);
            n !== 0 && (qs(t, n | 1),
            $e(t, se()),
            !(Q & 6) && (Zn = se() + 500,
            en()))
        }
        break;
    case 13:
        xn(function() {
            var r = Rt(e, 1);
            if (r !== null) {
                var i = Me();
                at(r, e, 1, i)
            }
        }),
        Ra(e, 1)
    }
}
;
Js = function(e) {
    if (e.tag === 13) {
        var t = Rt(e, 134217728);
        if (t !== null) {
            var n = Me();
            at(t, e, 134217728, n)
        }
        Ra(e, 134217728)
    }
}
;
hd = function(e) {
    if (e.tag === 13) {
        var t = Kt(e)
          , n = Rt(e, t);
        if (n !== null) {
            var r = Me();
            at(n, e, t, r)
        }
        Ra(e, t)
    }
}
;
yd = function() {
    return q
}
;
gd = function(e, t) {
    var n = q;
    try {
        return q = e,
        t()
    } finally {
        q = n
    }
}
;
Bl = function(e, t, n) {
    switch (t) {
    case "input":
        if (Fl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = To(r);
                    if (!i)
                        throw Error(N(90));
                    qc(r),
                    Fl(r, i)
                }
            }
        }
        break;
    case "textarea":
        Xc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Wn(e, !!n.multiple, t, !1)
    }
}
;
rd = ka;
id = xn;
var P0 = {
    usingClientEntryPoint: !1,
    Events: [ei, Mn, To, td, nd, ka]
}
  , pr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , T0 = {
    bundleType: pr.bundleType,
    version: pr.version,
    rendererPackageName: pr.rendererPackageName,
    rendererConfig: pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = sd(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: pr.findFiberByHostInstance || N0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ni.isDisabled && Ni.supportsFiber)
        try {
            _o = Ni.inject(T0),
            gt = Ni
        } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P0;
qe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ta(t))
        throw Error(N(200));
    return _0(e, t, null, n)
}
;
qe.createRoot = function(e, t) {
    if (!Ta(e))
        throw Error(N(299));
    var n = !1
      , r = ""
      , i = Uf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Na(e, 1, !1, null, null, n, !1, r, i),
    e[Nt] = t.current,
    $r(e.nodeType === 8 ? e.parentNode : e),
    new Pa(t)
}
;
qe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = sd(t),
    e = e === null ? null : e.stateNode,
    e
}
;
qe.flushSync = function(e) {
    return xn(e)
}
;
qe.hydrate = function(e, t, n) {
    if (!Fo(t))
        throw Error(N(200));
    return $o(null, e, t, !0, n)
}
;
qe.hydrateRoot = function(e, t, n) {
    if (!Ta(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , l = Uf;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = $f(t, null, e, 1, n ?? null, i, !1, o, l),
    e[Nt] = t.current,
    $r(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Io(t)
}
;
qe.render = function(e, t, n) {
    if (!Fo(t))
        throw Error(N(200));
    return $o(null, e, t, !1, n)
}
;
qe.unmountComponentAtNode = function(e) {
    if (!Fo(e))
        throw Error(N(40));
    return e._reactRootContainer ? (xn(function() {
        $o(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Nt] = null
        })
    }),
    !0) : !1
}
;
qe.unstable_batchedUpdates = ka;
qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Fo(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return $o(e, t, n, !1, r)
}
;
qe.version = "18.3.1-next-f1338f8080-20240426";
function Wf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wf)
        } catch (e) {
            console.error(e)
        }
}
Wf(),
Uc.exports = qe;
var O0 = Uc.exports, bf, Zu = O0;
bf = Zu.createRoot,
Zu.hydrateRoot;
function j0(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function ec(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function tc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ec(Object(n), !0).forEach(function(r) {
            j0(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ec(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function M0(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function L0(e, t) {
    if (e == null)
        return {};
    var n = M0(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function z0(e, t) {
    return A0(e) || D0(e, t) || I0(e, t) || F0()
}
function A0(e) {
    if (Array.isArray(e))
        return e
}
function D0(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var n = []
          , r = !0
          , i = !1
          , o = void 0;
        try {
            for (var l = e[Symbol.iterator](), s; !(r = (s = l.next()).done) && (n.push(s.value),
            !(t && n.length === t)); r = !0)
                ;
        } catch (a) {
            i = !0,
            o = a
        } finally {
            try {
                !r && l.return != null && l.return()
            } finally {
                if (i)
                    throw o
            }
        }
        return n
    }
}
function I0(e, t) {
    if (e) {
        if (typeof e == "string")
            return nc(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return nc(e, t)
    }
}
function nc(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function F0() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function $0(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function rc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function ic(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? rc(Object(n), !0).forEach(function(r) {
            $0(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function U0() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return function(r) {
        return t.reduceRight(function(i, o) {
            return o(i)
        }, r)
    }
}
function wr(e) {
    return function t() {
        for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
        return i.length >= e.length ? e.apply(this, i) : function() {
            for (var l = arguments.length, s = new Array(l), a = 0; a < l; a++)
                s[a] = arguments[a];
            return t.apply(n, [].concat(i, s))
        }
    }
}
function xo(e) {
    return {}.toString.call(e).includes("Object")
}
function W0(e) {
    return !Object.keys(e).length
}
function qr(e) {
    return typeof e == "function"
}
function b0(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function H0(e, t) {
    return xo(t) || Jt("changeType"),
    Object.keys(t).some(function(n) {
        return !b0(e, n)
    }) && Jt("changeField"),
    t
}
function V0(e) {
    qr(e) || Jt("selectorType")
}
function B0(e) {
    qr(e) || xo(e) || Jt("handlerType"),
    xo(e) && Object.values(e).some(function(t) {
        return !qr(t)
    }) && Jt("handlersType")
}
function Q0(e) {
    e || Jt("initialIsRequired"),
    xo(e) || Jt("initialType"),
    W0(e) && Jt("initialContent")
}
function K0(e, t) {
    throw new Error(e[t] || e.default)
}
var q0 = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package"
}
  , Jt = wr(K0)(q0)
  , Ri = {
    changes: H0,
    selector: V0,
    handler: B0,
    initial: Q0
};
function J0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Ri.initial(e),
    Ri.handler(t);
    var n = {
        current: e
    }
      , r = wr(G0)(n, t)
      , i = wr(Y0)(n)
      , o = wr(Ri.changes)(e)
      , l = wr(X0)(n);
    function s() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(d) {
            return d
        }
        ;
        return Ri.selector(u),
        u(n.current)
    }
    function a(u) {
        U0(r, i, o, l)(u)
    }
    return [s, a]
}
function X0(e, t) {
    return qr(t) ? t(e.current) : t
}
function Y0(e, t) {
    return e.current = ic(ic({}, e.current), t),
    t
}
function G0(e, t, n) {
    return qr(t) ? t(e.current) : Object.keys(n).forEach(function(r) {
        var i;
        return (i = t[r]) === null || i === void 0 ? void 0 : i.call(t, e.current[r])
    }),
    n
}
var Z0 = {
    create: J0
}
  , ey = {
    paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
    }
};
function ty(e) {
    return function t() {
        for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
        return i.length >= e.length ? e.apply(this, i) : function() {
            for (var l = arguments.length, s = new Array(l), a = 0; a < l; a++)
                s[a] = arguments[a];
            return t.apply(n, [].concat(i, s))
        }
    }
}
function ny(e) {
    return {}.toString.call(e).includes("Object")
}
function ry(e) {
    return e || oc("configIsRequired"),
    ny(e) || oc("configType"),
    e.urls ? (iy(),
    {
        paths: {
            vs: e.urls.monacoBase
        }
    }) : e
}
function iy() {
    console.warn(Hf.deprecation)
}
function oy(e, t) {
    throw new Error(e[t] || e.default)
}
var Hf = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}
  , oc = ty(oy)(Hf)
  , ly = {
    config: ry
}
  , sy = function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
    return function(i) {
        return n.reduceRight(function(o, l) {
            return l(o)
        }, i)
    }
};
function Vf(e, t) {
    return Object.keys(t).forEach(function(n) {
        t[n]instanceof Object && e[n] && Object.assign(t[n], Vf(e[n], t[n]))
    }),
    tc(tc({}, e), t)
}
var ay = {
    type: "cancelation",
    msg: "operation is manually canceled"
};
function Cl(e) {
    var t = !1
      , n = new Promise(function(r, i) {
        e.then(function(o) {
            return t ? i(ay) : r(o)
        }),
        e.catch(i)
    }
    );
    return n.cancel = function() {
        return t = !0
    }
    ,
    n
}
var uy = Z0.create({
    config: ey,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null
})
  , Bf = z0(uy, 2)
  , ni = Bf[0]
  , Uo = Bf[1];
function cy(e) {
    var t = ly.config(e)
      , n = t.monaco
      , r = L0(t, ["monaco"]);
    Uo(function(i) {
        return {
            config: Vf(i.config, r),
            monaco: n
        }
    })
}
function dy() {
    var e = ni(function(t) {
        var n = t.monaco
          , r = t.isInitialized
          , i = t.resolve;
        return {
            monaco: n,
            isInitialized: r,
            resolve: i
        }
    });
    if (!e.isInitialized) {
        if (Uo({
            isInitialized: !0
        }),
        e.monaco)
            return e.resolve(e.monaco),
            Cl(_l);
        if (window.monaco && window.monaco.editor)
            return Qf(window.monaco),
            e.resolve(window.monaco),
            Cl(_l);
        sy(fy, my)(hy)
    }
    return Cl(_l)
}
function fy(e) {
    return document.body.appendChild(e)
}
function py(e) {
    var t = document.createElement("script");
    return e && (t.src = e),
    t
}
function my(e) {
    var t = ni(function(r) {
        var i = r.config
          , o = r.reject;
        return {
            config: i,
            reject: o
        }
    })
      , n = py("".concat(t.config.paths.vs, "/loader.js"));
    return n.onload = function() {
        return e()
    }
    ,
    n.onerror = t.reject,
    n
}
function hy() {
    var e = ni(function(n) {
        var r = n.config
          , i = n.resolve
          , o = n.reject;
        return {
            config: r,
            resolve: i,
            reject: o
        }
    })
      , t = window.require;
    t.config(e.config),
    t(["vs/editor/editor.main"], function(n) {
        Qf(n),
        e.resolve(n)
    }, function(n) {
        e.reject(n)
    })
}
function Qf(e) {
    ni().monaco || Uo({
        monaco: e
    })
}
function yy() {
    return ni(function(e) {
        var t = e.monaco;
        return t
    })
}
var _l = new Promise(function(e, t) {
    return Uo({
        resolve: e,
        reject: t
    })
}
)
  , Kf = {
    config: cy,
    init: dy,
    __getMonacoInstance: yy
}
  , gy = {
    wrapper: {
        display: "flex",
        position: "relative",
        textAlign: "initial"
    },
    fullWidth: {
        width: "100%"
    },
    hide: {
        display: "none"
    }
}
  , Nl = gy
  , vy = {
    container: {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
}
  , wy = vy;
function xy({children: e}) {
    return Un.createElement("div", {
        style: wy.container
    }, e)
}
var Sy = xy
  , ky = Sy;
function Ey({width: e, height: t, isEditorReady: n, loading: r, _ref: i, className: o, wrapperProps: l}) {
    return Un.createElement("section", {
        style: {
            ...Nl.wrapper,
            width: e,
            height: t
        },
        ...l
    }, !n && Un.createElement(ky, null, r), Un.createElement("div", {
        ref: i,
        style: {
            ...Nl.fullWidth,
            ...!n && Nl.hide
        },
        className: o
    }))
}
var Cy = Ey
  , qf = E.memo(Cy);
function _y(e) {
    E.useEffect(e, [])
}
var Jf = _y;
function Ny(e, t, n=!0) {
    let r = E.useRef(!0);
    E.useEffect(r.current || !n ? () => {
        r.current = !1
    }
    : e, t)
}
var Ve = Ny;
function Tr() {}
function $n(e, t, n, r) {
    return Ry(e, r) || Py(e, t, n, r)
}
function Ry(e, t) {
    return e.editor.getModel(Xf(e, t))
}
function Py(e, t, n, r) {
    return e.editor.createModel(t, n, r ? Xf(e, r) : void 0)
}
function Xf(e, t) {
    return e.Uri.parse(t)
}
function Ty({original: e, modified: t, language: n, originalLanguage: r, modifiedLanguage: i, originalModelPath: o, modifiedModelPath: l, keepCurrentOriginalModel: s=!1, keepCurrentModifiedModel: a=!1, theme: u="light", loading: d="Loading...", options: f={}, height: y="100%", width: S="100%", className: v, wrapperProps: x={}, beforeMount: _=Tr, onMount: p=Tr}) {
    let[c,m] = E.useState(!1)
      , [k,C] = E.useState(!0)
      , P = E.useRef(null)
      , R = E.useRef(null)
      , z = E.useRef(null)
      , U = E.useRef(p)
      , T = E.useRef(_)
      , J = E.useRef(!1);
    Jf( () => {
        let $ = Kf.init();
        return $.then(V => (R.current = V) && C(!1)).catch(V => (V == null ? void 0 : V.type) !== "cancelation" && console.error("Monaco initialization: error:", V)),
        () => P.current ? ge() : $.cancel()
    }
    ),
    Ve( () => {
        if (P.current && R.current) {
            let $ = P.current.getOriginalEditor()
              , V = $n(R.current, e || "", r || n || "text", o || "");
            V !== $.getModel() && $.setModel(V)
        }
    }
    , [o], c),
    Ve( () => {
        if (P.current && R.current) {
            let $ = P.current.getModifiedEditor()
              , V = $n(R.current, t || "", i || n || "text", l || "");
            V !== $.getModel() && $.setModel(V)
        }
    }
    , [l], c),
    Ve( () => {
        let $ = P.current.getModifiedEditor();
        $.getOption(R.current.editor.EditorOption.readOnly) ? $.setValue(t || "") : t !== $.getValue() && ($.executeEdits("", [{
            range: $.getModel().getFullModelRange(),
            text: t || "",
            forceMoveMarkers: !0
        }]),
        $.pushUndoStop())
    }
    , [t], c),
    Ve( () => {
        var $, V;
        (V = ($ = P.current) == null ? void 0 : $.getModel()) == null || V.original.setValue(e || "")
    }
    , [e], c),
    Ve( () => {
        let {original: $, modified: V} = P.current.getModel();
        R.current.editor.setModelLanguage($, r || n || "text"),
        R.current.editor.setModelLanguage(V, i || n || "text")
    }
    , [n, r, i], c),
    Ve( () => {
        var $;
        ($ = R.current) == null || $.editor.setTheme(u)
    }
    , [u], c),
    Ve( () => {
        var $;
        ($ = P.current) == null || $.updateOptions(f)
    }
    , [f], c);
    let ue = E.useCallback( () => {
        var Ee;
        if (!R.current)
            return;
        T.current(R.current);
        let $ = $n(R.current, e || "", r || n || "text", o || "")
          , V = $n(R.current, t || "", i || n || "text", l || "");
        (Ee = P.current) == null || Ee.setModel({
            original: $,
            modified: V
        })
    }
    , [n, t, i, e, r, o, l])
      , ke = E.useCallback( () => {
        var $;
        !J.current && z.current && (P.current = R.current.editor.createDiffEditor(z.current, {
            automaticLayout: !0,
            ...f
        }),
        ue(),
        ($ = R.current) == null || $.editor.setTheme(u),
        m(!0),
        J.current = !0)
    }
    , [f, u, ue]);
    E.useEffect( () => {
        c && U.current(P.current, R.current)
    }
    , [c]),
    E.useEffect( () => {
        !k && !c && ke()
    }
    , [k, c, ke]);
    function ge() {
        var V, Ee, O, I;
        let $ = (V = P.current) == null ? void 0 : V.getModel();
        s || ((Ee = $ == null ? void 0 : $.original) == null || Ee.dispose()),
        a || ((O = $ == null ? void 0 : $.modified) == null || O.dispose()),
        (I = P.current) == null || I.dispose()
    }
    return Un.createElement(qf, {
        width: S,
        height: y,
        isEditorReady: c,
        loading: d,
        _ref: z,
        className: v,
        wrapperProps: x
    })
}
var Oy = Ty;
E.memo(Oy);
function jy(e) {
    let t = E.useRef();
    return E.useEffect( () => {
        t.current = e
    }
    , [e]),
    t.current
}
var My = jy
  , Pi = new Map;
function Ly({defaultValue: e, defaultLanguage: t, defaultPath: n, value: r, language: i, path: o, theme: l="light", line: s, loading: a="Loading...", options: u={}, overrideServices: d={}, saveViewState: f=!0, keepCurrentModel: y=!1, width: S="100%", height: v="100%", className: x, wrapperProps: _={}, beforeMount: p=Tr, onMount: c=Tr, onChange: m, onValidate: k=Tr}) {
    let[C,P] = E.useState(!1)
      , [R,z] = E.useState(!0)
      , U = E.useRef(null)
      , T = E.useRef(null)
      , J = E.useRef(null)
      , ue = E.useRef(c)
      , ke = E.useRef(p)
      , ge = E.useRef()
      , $ = E.useRef(r)
      , V = My(o)
      , Ee = E.useRef(!1)
      , O = E.useRef(!1);
    Jf( () => {
        let M = Kf.init();
        return M.then(F => (U.current = F) && z(!1)).catch(F => (F == null ? void 0 : F.type) !== "cancelation" && console.error("Monaco initialization: error:", F)),
        () => T.current ? W() : M.cancel()
    }
    ),
    Ve( () => {
        var F, B, me, Xe;
        let M = $n(U.current, e || r || "", t || i || "", o || n || "");
        M !== ((F = T.current) == null ? void 0 : F.getModel()) && (f && Pi.set(V, (B = T.current) == null ? void 0 : B.saveViewState()),
        (me = T.current) == null || me.setModel(M),
        f && ((Xe = T.current) == null || Xe.restoreViewState(Pi.get(o))))
    }
    , [o], C),
    Ve( () => {
        var M;
        (M = T.current) == null || M.updateOptions(u)
    }
    , [u], C),
    Ve( () => {
        !T.current || r === void 0 || (T.current.getOption(U.current.editor.EditorOption.readOnly) ? T.current.setValue(r) : r !== T.current.getValue() && (O.current = !0,
        T.current.executeEdits("", [{
            range: T.current.getModel().getFullModelRange(),
            text: r,
            forceMoveMarkers: !0
        }]),
        T.current.pushUndoStop(),
        O.current = !1))
    }
    , [r], C),
    Ve( () => {
        var F, B;
        let M = (F = T.current) == null ? void 0 : F.getModel();
        M && i && ((B = U.current) == null || B.editor.setModelLanguage(M, i))
    }
    , [i], C),
    Ve( () => {
        var M;
        s !== void 0 && ((M = T.current) == null || M.revealLine(s))
    }
    , [s], C),
    Ve( () => {
        var M;
        (M = U.current) == null || M.editor.setTheme(l)
    }
    , [l], C);
    let I = E.useCallback( () => {
        var M;
        if (!(!J.current || !U.current) && !Ee.current) {
            ke.current(U.current);
            let F = o || n
              , B = $n(U.current, r || e || "", t || i || "", F || "");
            T.current = (M = U.current) == null ? void 0 : M.editor.create(J.current, {
                model: B,
                automaticLayout: !0,
                ...u
            }, d),
            f && T.current.restoreViewState(Pi.get(F)),
            U.current.editor.setTheme(l),
            s !== void 0 && T.current.revealLine(s),
            P(!0),
            Ee.current = !0
        }
    }
    , [e, t, n, r, i, o, u, d, f, l, s]);
    E.useEffect( () => {
        C && ue.current(T.current, U.current)
    }
    , [C]),
    E.useEffect( () => {
        !R && !C && I()
    }
    , [R, C, I]),
    $.current = r,
    E.useEffect( () => {
        var M, F;
        C && m && ((M = ge.current) == null || M.dispose(),
        ge.current = (F = T.current) == null ? void 0 : F.onDidChangeModelContent(B => {
            O.current || m(T.current.getValue(), B)
        }
        ))
    }
    , [C, m]),
    E.useEffect( () => {
        if (C) {
            let M = U.current.editor.onDidChangeMarkers(F => {
                var me;
                let B = (me = T.current.getModel()) == null ? void 0 : me.uri;
                if (B && F.find(Xe => Xe.path === B.path)) {
                    let Xe = U.current.editor.getModelMarkers({
                        resource: B
                    });
                    k == null || k(Xe)
                }
            }
            );
            return () => {
                M == null || M.dispose()
            }
        }
        return () => {}
    }
    , [C, k]);
    function W() {
        var M, F;
        (M = ge.current) == null || M.dispose(),
        y ? f && Pi.set(o, T.current.saveViewState()) : (F = T.current.getModel()) == null || F.dispose(),
        T.current.dispose()
    }
    return Un.createElement(qf, {
        width: S,
        height: v,
        isEditorReady: C,
        loading: a,
        _ref: J,
        className: x,
        wrapperProps: _
    })
}
var zy = Ly
  , Ay = E.memo(zy)
  , Dy = Ay;
let Iy = {
    data: ""
}
  , Fy = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
    innerHTML: " ",
    id: "_goober"
})).firstChild : e || Iy
  , $y = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
  , Uy = /\/\*[^]*?\*\/|  +/g
  , lc = /\n+/g
  , Ft = (e, t) => {
    let n = ""
      , r = ""
      , i = "";
    for (let o in e) {
        let l = e[o];
        o[0] == "@" ? o[1] == "i" ? n = o + " " + l + ";" : r += o[1] == "f" ? Ft(l, o) : o + "{" + Ft(l, o[1] == "k" ? "" : t) + "}" : typeof l == "object" ? r += Ft(l, t ? t.replace(/([^,])+/g, s => o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, a => /&/.test(a) ? a.replace(/&/g, s) : s ? s + " " + a : a)) : o) : l != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(),
        i += Ft.p ? Ft.p(o, l) : o + ":" + l + ";")
    }
    return n + (t && i ? t + "{" + i + "}" : i) + r
}
  , wt = {}
  , Yf = e => {
    if (typeof e == "object") {
        let t = "";
        for (let n in e)
            t += n + Yf(e[n]);
        return t
    }
    return e
}
  , Wy = (e, t, n, r, i) => {
    let o = Yf(e)
      , l = wt[o] || (wt[o] = (a => {
        let u = 0
          , d = 11;
        for (; u < a.length; )
            d = 101 * d + a.charCodeAt(u++) >>> 0;
        return "go" + d
    }
    )(o));
    if (!wt[l]) {
        let a = o !== e ? e : (u => {
            let d, f, y = [{}];
            for (; d = $y.exec(u.replace(Uy, "")); )
                d[4] ? y.shift() : d[3] ? (f = d[3].replace(lc, " ").trim(),
                y.unshift(y[0][f] = y[0][f] || {})) : y[0][d[1]] = d[2].replace(lc, " ").trim();
            return y[0]
        }
        )(e);
        wt[l] = Ft(i ? {
            ["@keyframes " + l]: a
        } : a, n ? "" : "." + l)
    }
    let s = n && wt.g ? wt.g : null;
    return n && (wt.g = wt[l]),
    ( (a, u, d, f) => {
        f ? u.data = u.data.replace(f, a) : u.data.indexOf(a) === -1 && (u.data = d ? a + u.data : u.data + a)
    }
    )(wt[l], t, r, s),
    l
}
  , by = (e, t, n) => e.reduce( (r, i, o) => {
    let l = t[o];
    if (l && l.call) {
        let s = l(n)
          , a = s && s.props && s.props.className || /^go/.test(s) && s;
        l = a ? "." + a : s && typeof s == "object" ? s.props ? "" : Ft(s, "") : s === !1 ? "" : s
    }
    return r + i + (l ?? "")
}
, "");
function Wo(e) {
    let t = this || {}
      , n = e.call ? e(t.p) : e;
    return Wy(n.unshift ? n.raw ? by(n, [].slice.call(arguments, 1), t.p) : n.reduce( (r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {}) : n, Fy(t.target), t.g, t.o, t.k)
}
let Gf, Cs, _s;
Wo.bind({
    g: 1
});
let Tt = Wo.bind({
    k: 1
});
function Hy(e, t, n, r) {
    Ft.p = t,
    Gf = e,
    Cs = n,
    _s = r
}
function tn(e, t) {
    let n = this || {};
    return function() {
        let r = arguments;
        function i(o, l) {
            let s = Object.assign({}, o)
              , a = s.className || i.className;
            n.p = Object.assign({
                theme: Cs && Cs()
            }, s),
            n.o = / *go\d+/.test(a),
            s.className = Wo.apply(n, r) + (a ? " " + a : "");
            let u = e;
            return e[0] && (u = s.as || e,
            delete s.as),
            _s && u[0] && _s(s),
            Gf(u, s)
        }
        return i
    }
}
var Vy = e => typeof e == "function"
  , So = (e, t) => Vy(e) ? e(t) : e
  , By = ( () => {
    let e = 0;
    return () => (++e).toString()
}
)()
  , Zf = ( () => {
    let e;
    return () => {
        if (e === void 0 && typeof window < "u") {
            let t = matchMedia("(prefers-reduced-motion: reduce)");
            e = !t || t.matches
        }
        return e
    }
}
)()
  , Qy = 20
  , ep = (e, t) => {
    switch (t.type) {
    case 0:
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Qy)
        };
    case 1:
        return {
            ...e,
            toasts: e.toasts.map(o => o.id === t.toast.id ? {
                ...o,
                ...t.toast
            } : o)
        };
    case 2:
        let {toast: n} = t;
        return ep(e, {
            type: e.toasts.find(o => o.id === n.id) ? 1 : 0,
            toast: n
        });
    case 3:
        let {toastId: r} = t;
        return {
            ...e,
            toasts: e.toasts.map(o => o.id === r || r === void 0 ? {
                ...o,
                dismissed: !0,
                visible: !1
            } : o)
        };
    case 4:
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(o => o.id !== t.toastId)
        };
    case 5:
        return {
            ...e,
            pausedAt: t.time
        };
    case 6:
        let i = t.time - (e.pausedAt || 0);
        return {
            ...e,
            pausedAt: void 0,
            toasts: e.toasts.map(o => ({
                ...o,
                pauseDuration: o.pauseDuration + i
            }))
        }
    }
}
  , Bi = []
  , dn = {
    toasts: [],
    pausedAt: void 0
}
  , Cn = e => {
    dn = ep(dn, e),
    Bi.forEach(t => {
        t(dn)
    }
    )
}
  , Ky = {
    blank: 4e3,
    error: 4e3,
    success: 2e3,
    loading: 1 / 0,
    custom: 4e3
}
  , qy = (e={}) => {
    let[t,n] = E.useState(dn)
      , r = E.useRef(dn);
    E.useEffect( () => (r.current !== dn && n(dn),
    Bi.push(n),
    () => {
        let o = Bi.indexOf(n);
        o > -1 && Bi.splice(o, 1)
    }
    ), []);
    let i = t.toasts.map(o => {
        var l, s, a;
        return {
            ...e,
            ...e[o.type],
            ...o,
            removeDelay: o.removeDelay || ((l = e[o.type]) == null ? void 0 : l.removeDelay) || (e == null ? void 0 : e.removeDelay),
            duration: o.duration || ((s = e[o.type]) == null ? void 0 : s.duration) || (e == null ? void 0 : e.duration) || Ky[o.type],
            style: {
                ...e.style,
                ...(a = e[o.type]) == null ? void 0 : a.style,
                ...o.style
            }
        }
    }
    );
    return {
        ...t,
        toasts: i
    }
}
  , Jy = (e, t="blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: {
        role: "status",
        "aria-live": "polite"
    },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || By()
})
  , ri = e => (t, n) => {
    let r = Jy(t, e, n);
    return Cn({
        type: 2,
        toast: r
    }),
    r.id
}
  , je = (e, t) => ri("blank")(e, t);
je.error = ri("error");
je.success = ri("success");
je.loading = ri("loading");
je.custom = ri("custom");
je.dismiss = e => {
    Cn({
        type: 3,
        toastId: e
    })
}
;
je.remove = e => Cn({
    type: 4,
    toastId: e
});
je.promise = (e, t, n) => {
    let r = je.loading(t.loading, {
        ...n,
        ...n == null ? void 0 : n.loading
    });
    return typeof e == "function" && (e = e()),
    e.then(i => {
        let o = t.success ? So(t.success, i) : void 0;
        return o ? je.success(o, {
            id: r,
            ...n,
            ...n == null ? void 0 : n.success
        }) : je.dismiss(r),
        i
    }
    ).catch(i => {
        let o = t.error ? So(t.error, i) : void 0;
        o ? je.error(o, {
            id: r,
            ...n,
            ...n == null ? void 0 : n.error
        }) : je.dismiss(r)
    }
    ),
    e
}
;
var Xy = (e, t) => {
    Cn({
        type: 1,
        toast: {
            id: e,
            height: t
        }
    })
}
  , Yy = () => {
    Cn({
        type: 5,
        time: Date.now()
    })
}
  , Or = new Map
  , Gy = 1e3
  , Zy = (e, t=Gy) => {
    if (Or.has(e))
        return;
    let n = setTimeout( () => {
        Or.delete(e),
        Cn({
            type: 4,
            toastId: e
        })
    }
    , t);
    Or.set(e, n)
}
  , eg = e => {
    let {toasts: t, pausedAt: n} = qy(e);
    E.useEffect( () => {
        if (n)
            return;
        let o = Date.now()
          , l = t.map(s => {
            if (s.duration === 1 / 0)
                return;
            let a = (s.duration || 0) + s.pauseDuration - (o - s.createdAt);
            if (a < 0) {
                s.visible && je.dismiss(s.id);
                return
            }
            return setTimeout( () => je.dismiss(s.id), a)
        }
        );
        return () => {
            l.forEach(s => s && clearTimeout(s))
        }
    }
    , [t, n]);
    let r = E.useCallback( () => {
        n && Cn({
            type: 6,
            time: Date.now()
        })
    }
    , [n])
      , i = E.useCallback( (o, l) => {
        let {reverseOrder: s=!1, gutter: a=8, defaultPosition: u} = l || {}
          , d = t.filter(S => (S.position || u) === (o.position || u) && S.height)
          , f = d.findIndex(S => S.id === o.id)
          , y = d.filter( (S, v) => v < f && S.visible).length;
        return d.filter(S => S.visible).slice(...s ? [y + 1] : [0, y]).reduce( (S, v) => S + (v.height || 0) + a, 0)
    }
    , [t]);
    return E.useEffect( () => {
        t.forEach(o => {
            if (o.dismissed)
                Zy(o.id, o.removeDelay);
            else {
                let l = Or.get(o.id);
                l && (clearTimeout(l),
                Or.delete(o.id))
            }
        }
        )
    }
    , [t]),
    {
        toasts: t,
        handlers: {
            updateHeight: Xy,
            startPause: Yy,
            endPause: r,
            calculateOffset: i
        }
    }
}
  , tg = Tt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`
  , ng = Tt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`
  , rg = Tt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`
  , ig = tn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${tg} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ng} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${rg} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`
  , og = Tt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
  , lg = tn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${og} 1s linear infinite;
`
  , sg = Tt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`
  , ag = Tt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`
  , ug = tn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sg} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ag} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`
  , cg = tn("div")`
  position: absolute;
`
  , dg = tn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`
  , fg = Tt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`
  , pg = tn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fg} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`
  , mg = ({toast: e}) => {
    let {icon: t, type: n, iconTheme: r} = e;
    return t !== void 0 ? typeof t == "string" ? E.createElement(pg, null, t) : t : n === "blank" ? null : E.createElement(dg, null, E.createElement(lg, {
        ...r
    }), n !== "loading" && E.createElement(cg, null, n === "error" ? E.createElement(ig, {
        ...r
    }) : E.createElement(ug, {
        ...r
    })))
}
  , hg = e => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`
  , yg = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`
  , gg = "0%{opacity:0;} 100%{opacity:1;}"
  , vg = "0%{opacity:1;} 100%{opacity:0;}"
  , wg = tn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`
  , xg = tn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`
  , Sg = (e, t) => {
    let n = e.includes("top") ? 1 : -1
      , [r,i] = Zf() ? [gg, vg] : [hg(n), yg(n)];
    return {
        animation: t ? `${Tt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Tt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
}
  , kg = E.memo( ({toast: e, position: t, style: n, children: r}) => {
    let i = e.height ? Sg(e.position || t || "top-center", e.visible) : {
        opacity: 0
    }
      , o = E.createElement(mg, {
        toast: e
    })
      , l = E.createElement(xg, {
        ...e.ariaProps
    }, So(e.message, e));
    return E.createElement(wg, {
        className: e.className,
        style: {
            ...i,
            ...n,
            ...e.style
        }
    }, typeof r == "function" ? r({
        icon: o,
        message: l
    }) : E.createElement(E.Fragment, null, o, l))
}
);
Hy(E.createElement);
var Eg = ({id: e, className: t, style: n, onHeightUpdate: r, children: i}) => {
    let o = E.useCallback(l => {
        if (l) {
            let s = () => {
                let a = l.getBoundingClientRect().height;
                r(e, a)
            }
            ;
            s(),
            new MutationObserver(s).observe(l, {
                subtree: !0,
                childList: !0,
                characterData: !0
            })
        }
    }
    , [e, r]);
    return E.createElement("div", {
        ref: o,
        className: t,
        style: n
    }, i)
}
  , Cg = (e, t) => {
    let n = e.includes("top")
      , r = n ? {
        top: 0
    } : {
        bottom: 0
    }
      , i = e.includes("center") ? {
        justifyContent: "center"
    } : e.includes("right") ? {
        justifyContent: "flex-end"
    } : {};
    return {
        left: 0,
        right: 0,
        display: "flex",
        position: "absolute",
        transition: Zf() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
        transform: `translateY(${t * (n ? 1 : -1)}px)`,
        ...r,
        ...i
    }
}
  , _g = Wo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`
  , Ti = 16
  , Ng = ({reverseOrder: e, position: t="top-center", toastOptions: n, gutter: r, children: i, containerStyle: o, containerClassName: l}) => {
    let {toasts: s, handlers: a} = eg(n);
    return E.createElement("div", {
        id: "_rht_toaster",
        style: {
            position: "fixed",
            zIndex: 9999,
            top: Ti,
            left: Ti,
            right: Ti,
            bottom: Ti,
            pointerEvents: "none",
            ...o
        },
        className: l,
        onMouseEnter: a.startPause,
        onMouseLeave: a.endPause
    }, s.map(u => {
        let d = u.position || t
          , f = a.calculateOffset(u, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t
        })
          , y = Cg(d, f);
        return E.createElement(Eg, {
            id: u.id,
            key: u.id,
            onHeightUpdate: a.updateHeight,
            className: u.visible ? _g : "",
            style: y
        }, u.type === "custom" ? So(u.message, u) : i ? i(u) : E.createElement(kg, {
            toast: u,
            position: d
        }))
    }
    ))
}
;
function Rg() {
    return window.crypto.getRandomValues(new Uint32Array(1))[0]
}
function Ns(e, t=!1) {
    const n = Rg()
      , r = `_${n}`;
    return Object.defineProperty(window, r, {
        value: i => (t && Reflect.deleteProperty(window, r),
        e == null ? void 0 : e(i)),
        writable: !1,
        configurable: !0
    }),
    n
}
async function tp(e, t={}) {
    return new Promise( (n, r) => {
        const i = Ns(l => {
            n(l),
            Reflect.deleteProperty(window, `_${o}`)
        }
        , !0)
          , o = Ns(l => {
            r(l),
            Reflect.deleteProperty(window, `_${i}`)
        }
        , !0);
        window.__TAURI_IPC__({
            cmd: e,
            callback: i,
            error: o,
            ...t
        })
    }
    )
}
async function D(e) {
    return tp("tauri", e)
}
async function np(e, t) {
    return D({
        __tauriModule: "Event",
        message: {
            cmd: "unlisten",
            event: e,
            eventId: t
        }
    })
}
async function Pg(e, t, n) {
    await D({
        __tauriModule: "Event",
        message: {
            cmd: "emit",
            event: e,
            windowLabel: t,
            payload: n
        }
    })
}
async function rp(e, t, n) {
    return D({
        __tauriModule: "Event",
        message: {
            cmd: "listen",
            event: e,
            windowLabel: t,
            handler: Ns(n)
        }
    }).then(r => async () => np(e, r))
}
async function Tg(e, t, n) {
    return rp(e, t, r => {
        n(r),
        np(e, r.id).catch( () => {}
        )
    }
    )
}
var be;
(function(e) {
    e.WINDOW_RESIZED = "tauri://resize",
    e.WINDOW_MOVED = "tauri://move",
    e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested",
    e.WINDOW_CREATED = "tauri://window-created",
    e.WINDOW_DESTROYED = "tauri://destroyed",
    e.WINDOW_FOCUS = "tauri://focus",
    e.WINDOW_BLUR = "tauri://blur",
    e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change",
    e.WINDOW_THEME_CHANGED = "tauri://theme-changed",
    e.WINDOW_FILE_DROP = "tauri://file-drop",
    e.WINDOW_FILE_DROP_HOVER = "tauri://file-drop-hover",
    e.WINDOW_FILE_DROP_CANCELLED = "tauri://file-drop-cancelled",
    e.MENU = "tauri://menu",
    e.CHECK_UPDATE = "tauri://update",
    e.UPDATE_AVAILABLE = "tauri://update-available",
    e.INSTALL_UPDATE = "tauri://update-install",
    e.STATUS_UPDATE = "tauri://update-status",
    e.DOWNLOAD_PROGRESS = "tauri://update-download-progress"
}
)(be || (be = {}));
class Og {
    constructor(t, n) {
        this.type = "Logical",
        this.width = t,
        this.height = n
    }
}
class Rs {
    constructor(t, n) {
        this.type = "Physical",
        this.width = t,
        this.height = n
    }
    toLogical(t) {
        return new Og(this.width / t,this.height / t)
    }
}
class jg {
    constructor(t, n) {
        this.type = "Logical",
        this.x = t,
        this.y = n
    }
}
class Ps {
    constructor(t, n) {
        this.type = "Physical",
        this.x = t,
        this.y = n
    }
    toLogical(t) {
        return new jg(this.x / t,this.y / t)
    }
}
var Ts;
(function(e) {
    e[e.Critical = 1] = "Critical",
    e[e.Informational = 2] = "Informational"
}
)(Ts || (Ts = {}));
function sc() {
    return window.__TAURI_METADATA__.__windows.map(e => new Jr(e.label,{
        skip: !0
    }))
}
const ac = ["tauri://created", "tauri://error"];
class Mg {
    constructor(t) {
        this.label = t,
        this.listeners = Object.create(null)
    }
    async listen(t, n) {
        return this._handleTauriEvent(t, n) ? Promise.resolve( () => {
            const r = this.listeners[t];
            r.splice(r.indexOf(n), 1)
        }
        ) : rp(t, this.label, n)
    }
    async once(t, n) {
        return this._handleTauriEvent(t, n) ? Promise.resolve( () => {
            const r = this.listeners[t];
            r.splice(r.indexOf(n), 1)
        }
        ) : Tg(t, this.label, n)
    }
    async emit(t, n) {
        if (ac.includes(t)) {
            for (const r of this.listeners[t] || [])
                r({
                    event: t,
                    id: -1,
                    windowLabel: this.label,
                    payload: n
                });
            return Promise.resolve()
        }
        return Pg(t, this.label, n)
    }
    _handleTauriEvent(t, n) {
        return ac.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n],
        !0) : !1
    }
}
class Lg extends Mg {
    async scaleFactor() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "scaleFactor"
                    }
                }
            }
        })
    }
    async innerPosition() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "innerPosition"
                    }
                }
            }
        }).then( ({x: t, y: n}) => new Ps(t,n))
    }
    async outerPosition() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "outerPosition"
                    }
                }
            }
        }).then( ({x: t, y: n}) => new Ps(t,n))
    }
    async innerSize() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "innerSize"
                    }
                }
            }
        }).then( ({width: t, height: n}) => new Rs(t,n))
    }
    async outerSize() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "outerSize"
                    }
                }
            }
        }).then( ({width: t, height: n}) => new Rs(t,n))
    }
    async isFullscreen() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isFullscreen"
                    }
                }
            }
        })
    }
    async isMinimized() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isMinimized"
                    }
                }
            }
        })
    }
    async isMaximized() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isMaximized"
                    }
                }
            }
        })
    }
    async isFocused() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isFocused"
                    }
                }
            }
        })
    }
    async isDecorated() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isDecorated"
                    }
                }
            }
        })
    }
    async isResizable() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isResizable"
                    }
                }
            }
        })
    }
    async isMaximizable() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isMaximizable"
                    }
                }
            }
        })
    }
    async isMinimizable() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isMinimizable"
                    }
                }
            }
        })
    }
    async isClosable() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isClosable"
                    }
                }
            }
        })
    }
    async isVisible() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "isVisible"
                    }
                }
            }
        })
    }
    async title() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "title"
                    }
                }
            }
        })
    }
    async theme() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "theme"
                    }
                }
            }
        })
    }
    async center() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "center"
                    }
                }
            }
        })
    }
    async requestUserAttention(t) {
        let n = null;
        return t && (t === Ts.Critical ? n = {
            type: "Critical"
        } : n = {
            type: "Informational"
        }),
        D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "requestUserAttention",
                        payload: n
                    }
                }
            }
        })
    }
    async setResizable(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setResizable",
                        payload: t
                    }
                }
            }
        })
    }
    async setMaximizable(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setMaximizable",
                        payload: t
                    }
                }
            }
        })
    }
    async setMinimizable(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setMinimizable",
                        payload: t
                    }
                }
            }
        })
    }
    async setClosable(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setClosable",
                        payload: t
                    }
                }
            }
        })
    }
    async setTitle(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setTitle",
                        payload: t
                    }
                }
            }
        })
    }
    async maximize() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "maximize"
                    }
                }
            }
        })
    }
    async unmaximize() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "unmaximize"
                    }
                }
            }
        })
    }
    async toggleMaximize() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "toggleMaximize"
                    }
                }
            }
        })
    }
    async minimize() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "minimize"
                    }
                }
            }
        })
    }
    async unminimize() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "unminimize"
                    }
                }
            }
        })
    }
    async show() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "show"
                    }
                }
            }
        })
    }
    async hide() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "hide"
                    }
                }
            }
        })
    }
    async close() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "close"
                    }
                }
            }
        })
    }
    async setDecorations(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setDecorations",
                        payload: t
                    }
                }
            }
        })
    }
    async setAlwaysOnTop(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setAlwaysOnTop",
                        payload: t
                    }
                }
            }
        })
    }
    async setContentProtected(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setContentProtected",
                        payload: t
                    }
                }
            }
        })
    }
    async setSize(t) {
        if (!t || t.type !== "Logical" && t.type !== "Physical")
            throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setSize",
                        payload: {
                            type: t.type,
                            data: {
                                width: t.width,
                                height: t.height
                            }
                        }
                    }
                }
            }
        })
    }
    async setMinSize(t) {
        if (t && t.type !== "Logical" && t.type !== "Physical")
            throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setMinSize",
                        payload: t ? {
                            type: t.type,
                            data: {
                                width: t.width,
                                height: t.height
                            }
                        } : null
                    }
                }
            }
        })
    }
    async setMaxSize(t) {
        if (t && t.type !== "Logical" && t.type !== "Physical")
            throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setMaxSize",
                        payload: t ? {
                            type: t.type,
                            data: {
                                width: t.width,
                                height: t.height
                            }
                        } : null
                    }
                }
            }
        })
    }
    async setPosition(t) {
        if (!t || t.type !== "Logical" && t.type !== "Physical")
            throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setPosition",
                        payload: {
                            type: t.type,
                            data: {
                                x: t.x,
                                y: t.y
                            }
                        }
                    }
                }
            }
        })
    }
    async setFullscreen(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setFullscreen",
                        payload: t
                    }
                }
            }
        })
    }
    async setFocus() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setFocus"
                    }
                }
            }
        })
    }
    async setIcon(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setIcon",
                        payload: {
                            icon: typeof t == "string" ? t : Array.from(t)
                        }
                    }
                }
            }
        })
    }
    async setSkipTaskbar(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setSkipTaskbar",
                        payload: t
                    }
                }
            }
        })
    }
    async setCursorGrab(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setCursorGrab",
                        payload: t
                    }
                }
            }
        })
    }
    async setCursorVisible(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setCursorVisible",
                        payload: t
                    }
                }
            }
        })
    }
    async setCursorIcon(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setCursorIcon",
                        payload: t
                    }
                }
            }
        })
    }
    async setCursorPosition(t) {
        if (!t || t.type !== "Logical" && t.type !== "Physical")
            throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setCursorPosition",
                        payload: {
                            type: t.type,
                            data: {
                                x: t.x,
                                y: t.y
                            }
                        }
                    }
                }
            }
        })
    }
    async setIgnoreCursorEvents(t) {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "setIgnoreCursorEvents",
                        payload: t
                    }
                }
            }
        })
    }
    async startDragging() {
        return D({
            __tauriModule: "Window",
            message: {
                cmd: "manage",
                data: {
                    label: this.label,
                    cmd: {
                        type: "startDragging"
                    }
                }
            }
        })
    }
    async onResized(t) {
        return this.listen(be.WINDOW_RESIZED, n => {
            n.payload = Dg(n.payload),
            t(n)
        }
        )
    }
    async onMoved(t) {
        return this.listen(be.WINDOW_MOVED, n => {
            n.payload = Ag(n.payload),
            t(n)
        }
        )
    }
    async onCloseRequested(t) {
        return this.listen(be.WINDOW_CLOSE_REQUESTED, n => {
            const r = new zg(n);
            Promise.resolve(t(r)).then( () => {
                if (!r.isPreventDefault())
                    return this.close()
            }
            )
        }
        )
    }
    async onFocusChanged(t) {
        const n = await this.listen(be.WINDOW_FOCUS, i => {
            t({
                ...i,
                payload: !0
            })
        }
        )
          , r = await this.listen(be.WINDOW_BLUR, i => {
            t({
                ...i,
                payload: !1
            })
        }
        );
        return () => {
            n(),
            r()
        }
    }
    async onScaleChanged(t) {
        return this.listen(be.WINDOW_SCALE_FACTOR_CHANGED, t)
    }
    async onMenuClicked(t) {
        return this.listen(be.MENU, t)
    }
    async onFileDropEvent(t) {
        const n = await this.listen(be.WINDOW_FILE_DROP, o => {
            t({
                ...o,
                payload: {
                    type: "drop",
                    paths: o.payload
                }
            })
        }
        )
          , r = await this.listen(be.WINDOW_FILE_DROP_HOVER, o => {
            t({
                ...o,
                payload: {
                    type: "hover",
                    paths: o.payload
                }
            })
        }
        )
          , i = await this.listen(be.WINDOW_FILE_DROP_CANCELLED, o => {
            t({
                ...o,
                payload: {
                    type: "cancel"
                }
            })
        }
        );
        return () => {
            n(),
            r(),
            i()
        }
    }
    async onThemeChanged(t) {
        return this.listen(be.WINDOW_THEME_CHANGED, t)
    }
}
class zg {
    constructor(t) {
        this._preventDefault = !1,
        this.event = t.event,
        this.windowLabel = t.windowLabel,
        this.id = t.id
    }
    preventDefault() {
        this._preventDefault = !0
    }
    isPreventDefault() {
        return this._preventDefault
    }
}
class Jr extends Lg {
    constructor(t, n={}) {
        super(t),
        n != null && n.skip || D({
            __tauriModule: "Window",
            message: {
                cmd: "createWebview",
                data: {
                    options: {
                        label: t,
                        ...n
                    }
                }
            }
        }).then(async () => this.emit("tauri://created")).catch(async r => this.emit("tauri://error", r))
    }
    static getByLabel(t) {
        return sc().some(n => n.label === t) ? new Jr(t,{
            skip: !0
        }) : null
    }
    static async getFocusedWindow() {
        for (const t of sc())
            if (await t.isFocused())
                return t;
        return null
    }
}
let sn;
"__TAURI_METADATA__"in window ? sn = new Jr(window.__TAURI_METADATA__.__currentWindow.label,{
    skip: !0
}) : (console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`),
sn = new Jr("main",{
    skip: !0
}));
function Ag(e) {
    return new Ps(e.x,e.y)
}
function Dg(e) {
    return new Rs(e.width,e.height)
}
var uc;
(function(e) {
    e[e.Audio = 1] = "Audio",
    e[e.Cache = 2] = "Cache",
    e[e.Config = 3] = "Config",
    e[e.Data = 4] = "Data",
    e[e.LocalData = 5] = "LocalData",
    e[e.Desktop = 6] = "Desktop",
    e[e.Document = 7] = "Document",
    e[e.Download = 8] = "Download",
    e[e.Executable = 9] = "Executable",
    e[e.Font = 10] = "Font",
    e[e.Home = 11] = "Home",
    e[e.Picture = 12] = "Picture",
    e[e.Public = 13] = "Public",
    e[e.Runtime = 14] = "Runtime",
    e[e.Template = 15] = "Template",
    e[e.Video = 16] = "Video",
    e[e.Resource = 17] = "Resource",
    e[e.App = 18] = "App",
    e[e.Log = 19] = "Log",
    e[e.Temp = 20] = "Temp",
    e[e.AppConfig = 21] = "AppConfig",
    e[e.AppData = 22] = "AppData",
    e[e.AppLocalData = 23] = "AppLocalData",
    e[e.AppCache = 24] = "AppCache",
    e[e.AppLog = 25] = "AppLog"
}
)(uc || (uc = {}));
var cc;
(function(e) {
    e[e.JSON = 1] = "JSON",
    e[e.Text = 2] = "Text",
    e[e.Binary = 3] = "Binary"
}
)(cc || (cc = {}));
function Oa() {
    return navigator.appVersion.includes("Win")
}
Oa();
Oa();
Oa();
const Te = tp;
function ip(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Ig} = Object.prototype
  , {getPrototypeOf: ja} = Object
  , {iterator: bo, toStringTag: op} = Symbol
  , Ho = (e => t => {
    const n = Ig.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , ct = e => (e = e.toLowerCase(),
t => Ho(t) === e)
  , Vo = e => t => typeof t === e
  , {isArray: rr} = Array
  , Xr = Vo("undefined");
function Fg(e) {
    return e !== null && !Xr(e) && e.constructor !== null && !Xr(e.constructor) && Ue(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const lp = ct("ArrayBuffer");
function $g(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && lp(e.buffer),
    t
}
const Ug = Vo("string")
  , Ue = Vo("function")
  , sp = Vo("number")
  , Bo = e => e !== null && typeof e == "object"
  , Wg = e => e === !0 || e === !1
  , Qi = e => {
    if (Ho(e) !== "object")
        return !1;
    const t = ja(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(op in e) && !(bo in e)
}
  , bg = ct("Date")
  , Hg = ct("File")
  , Vg = ct("Blob")
  , Bg = ct("FileList")
  , Qg = e => Bo(e) && Ue(e.pipe)
  , Kg = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || Ue(e.append) && ((t = Ho(e)) === "formdata" || t === "object" && Ue(e.toString) && e.toString() === "[object FormData]"))
}
  , qg = ct("URLSearchParams")
  , [Jg,Xg,Yg,Gg] = ["ReadableStream", "Request", "Response", "Headers"].map(ct)
  , Zg = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ii(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, i;
    if (typeof e != "object" && (e = [e]),
    rr(e))
        for (r = 0,
        i = e.length; r < i; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , l = o.length;
        let s;
        for (r = 0; r < l; r++)
            s = o[r],
            t.call(null, e[s], s, e)
    }
}
function ap(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, i;
    for (; r-- > 0; )
        if (i = n[r],
        t === i.toLowerCase())
            return i;
    return null
}
const fn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , up = e => !Xr(e) && e !== fn;
function Os() {
    const {caseless: e} = up(this) && this || {}
      , t = {}
      , n = (r, i) => {
        const o = e && ap(t, i) || i;
        Qi(t[o]) && Qi(r) ? t[o] = Os(t[o], r) : Qi(r) ? t[o] = Os({}, r) : rr(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && ii(arguments[r], n);
    return t
}
const e1 = (e, t, n, {allOwnKeys: r}={}) => (ii(t, (i, o) => {
    n && Ue(i) ? e[o] = ip(i, n) : e[o] = i
}
, {
    allOwnKeys: r
}),
e)
  , t1 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , n1 = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , r1 = (e, t, n, r) => {
    let i, o, l;
    const s = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (i = Object.getOwnPropertyNames(e),
        o = i.length; o-- > 0; )
            l = i[o],
            (!r || r(l, e, t)) && !s[l] && (t[l] = e[l],
            s[l] = !0);
        e = n !== !1 && ja(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , i1 = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , o1 = e => {
    if (!e)
        return null;
    if (rr(e))
        return e;
    let t = e.length;
    if (!sp(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , l1 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && ja(Uint8Array))
  , s1 = (e, t) => {
    const r = (e && e[bo]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1])
    }
}
  , a1 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , u1 = ct("HTMLFormElement")
  , c1 = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
    return r.toUpperCase() + i
})
  , dc = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , d1 = ct("RegExp")
  , cp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    ii(n, (i, o) => {
        let l;
        (l = t(i, o, e)) !== !1 && (r[o] = l || i)
    }
    ),
    Object.defineProperties(e, r)
}
  , f1 = e => {
    cp(e, (t, n) => {
        if (Ue(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (Ue(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , p1 = (e, t) => {
    const n = {}
      , r = i => {
        i.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return rr(e) ? r(e) : r(String(e).split(t)),
    n
}
  , m1 = () => {}
  , h1 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function y1(e) {
    return !!(e && Ue(e.append) && e[op] === "FormData" && e[bo])
}
const g1 = e => {
    const t = new Array(10)
      , n = (r, i) => {
        if (Bo(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[i] = r;
                const o = rr(r) ? [] : {};
                return ii(r, (l, s) => {
                    const a = n(l, i + 1);
                    !Xr(a) && (o[s] = a)
                }
                ),
                t[i] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , v1 = ct("AsyncFunction")
  , w1 = e => e && (Bo(e) || Ue(e)) && Ue(e.then) && Ue(e.catch)
  , dp = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (fn.addEventListener("message", ({source: i, data: o}) => {
    i === fn && o === n && r.length && r.shift()()
}
, !1),
i => {
    r.push(i),
    fn.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", Ue(fn.postMessage))
  , x1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(fn) : typeof process < "u" && process.nextTick || dp
  , S1 = e => e != null && Ue(e[bo])
  , w = {
    isArray: rr,
    isArrayBuffer: lp,
    isBuffer: Fg,
    isFormData: Kg,
    isArrayBufferView: $g,
    isString: Ug,
    isNumber: sp,
    isBoolean: Wg,
    isObject: Bo,
    isPlainObject: Qi,
    isReadableStream: Jg,
    isRequest: Xg,
    isResponse: Yg,
    isHeaders: Gg,
    isUndefined: Xr,
    isDate: bg,
    isFile: Hg,
    isBlob: Vg,
    isRegExp: d1,
    isFunction: Ue,
    isStream: Qg,
    isURLSearchParams: qg,
    isTypedArray: l1,
    isFileList: Bg,
    forEach: ii,
    merge: Os,
    extend: e1,
    trim: Zg,
    stripBOM: t1,
    inherits: n1,
    toFlatObject: r1,
    kindOf: Ho,
    kindOfTest: ct,
    endsWith: i1,
    toArray: o1,
    forEachEntry: s1,
    matchAll: a1,
    isHTMLForm: u1,
    hasOwnProperty: dc,
    hasOwnProp: dc,
    reduceDescriptors: cp,
    freezeMethods: f1,
    toObjectSet: p1,
    toCamelCase: c1,
    noop: m1,
    toFiniteNumber: h1,
    findKey: ap,
    global: fn,
    isContextDefined: up,
    isSpecCompliantForm: y1,
    toJSONObject: g1,
    isAsyncFn: v1,
    isThenable: w1,
    setImmediate: dp,
    asap: x1,
    isIterable: S1
};
function b(e, t, n, r, i) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i,
    this.status = i.status ? i.status : null)
}
w.inherits(b, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: w.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const fp = b.prototype
  , pp = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    pp[e] = {
        value: e
    }
}
);
Object.defineProperties(b, pp);
Object.defineProperty(fp, "isAxiosError", {
    value: !0
});
b.from = (e, t, n, r, i, o) => {
    const l = Object.create(fp);
    return w.toFlatObject(e, l, function(a) {
        return a !== Error.prototype
    }, s => s !== "isAxiosError"),
    b.call(l, e.message, t, n, r, i),
    l.cause = e,
    l.name = e.name,
    o && Object.assign(l, o),
    l
}
;
const k1 = null;
function js(e) {
    return w.isPlainObject(e) || w.isArray(e)
}
function mp(e) {
    return w.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function fc(e, t, n) {
    return e ? e.concat(t).map(function(i, o) {
        return i = mp(i),
        !n && o ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}
function E1(e) {
    return w.isArray(e) && !e.some(js)
}
const C1 = w.toFlatObject(w, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function Qo(e, t, n) {
    if (!w.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = w.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(x, _) {
        return !w.isUndefined(_[x])
    });
    const r = n.metaTokens
      , i = n.visitor || d
      , o = n.dots
      , l = n.indexes
      , a = (n.Blob || typeof Blob < "u" && Blob) && w.isSpecCompliantForm(t);
    if (!w.isFunction(i))
        throw new TypeError("visitor must be a function");
    function u(v) {
        if (v === null)
            return "";
        if (w.isDate(v))
            return v.toISOString();
        if (!a && w.isBlob(v))
            throw new b("Blob is not supported. Use a Buffer instead.");
        return w.isArrayBuffer(v) || w.isTypedArray(v) ? a && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v
    }
    function d(v, x, _) {
        let p = v;
        if (v && !_ && typeof v == "object") {
            if (w.endsWith(x, "{}"))
                x = r ? x : x.slice(0, -2),
                v = JSON.stringify(v);
            else if (w.isArray(v) && E1(v) || (w.isFileList(v) || w.endsWith(x, "[]")) && (p = w.toArray(v)))
                return x = mp(x),
                p.forEach(function(m, k) {
                    !(w.isUndefined(m) || m === null) && t.append(l === !0 ? fc([x], k, o) : l === null ? x : x + "[]", u(m))
                }),
                !1
        }
        return js(v) ? !0 : (t.append(fc(_, x, o), u(v)),
        !1)
    }
    const f = []
      , y = Object.assign(C1, {
        defaultVisitor: d,
        convertValue: u,
        isVisitable: js
    });
    function S(v, x) {
        if (!w.isUndefined(v)) {
            if (f.indexOf(v) !== -1)
                throw Error("Circular reference detected in " + x.join("."));
            f.push(v),
            w.forEach(v, function(p, c) {
                (!(w.isUndefined(p) || p === null) && i.call(t, p, w.isString(c) ? c.trim() : c, x, y)) === !0 && S(p, x ? x.concat(c) : [c])
            }),
            f.pop()
        }
    }
    if (!w.isObject(e))
        throw new TypeError("data must be an object");
    return S(e),
    t
}
function pc(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function Ma(e, t) {
    this._pairs = [],
    e && Qo(e, this, t)
}
const hp = Ma.prototype;
hp.append = function(t, n) {
    this._pairs.push([t, n])
}
;
hp.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, pc)
    }
    : pc;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
}
;
function _1(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function yp(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || _1;
    w.isFunction(n) && (n = {
        serialize: n
    });
    const i = n && n.serialize;
    let o;
    if (i ? o = i(t, n) : o = w.isURLSearchParams(t) ? t.toString() : new Ma(t,n).toString(r),
    o) {
        const l = e.indexOf("#");
        l !== -1 && (e = e.slice(0, l)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class mc {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        w.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const gp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , N1 = typeof URLSearchParams < "u" ? URLSearchParams : Ma
  , R1 = typeof FormData < "u" ? FormData : null
  , P1 = typeof Blob < "u" ? Blob : null
  , T1 = {
    isBrowser: !0,
    classes: {
        URLSearchParams: N1,
        FormData: R1,
        Blob: P1
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , La = typeof window < "u" && typeof document < "u"
  , Ms = typeof navigator == "object" && navigator || void 0
  , O1 = La && (!Ms || ["ReactNative", "NativeScript", "NS"].indexOf(Ms.product) < 0)
  , j1 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , M1 = La && window.location.href || "http://localhost"
  , L1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: La,
    hasStandardBrowserEnv: O1,
    hasStandardBrowserWebWorkerEnv: j1,
    navigator: Ms,
    origin: M1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Re = {
    ...L1,
    ...T1
};
function z1(e, t) {
    return Qo(e, new Re.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, o) {
            return Re.isNode && w.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function A1(e) {
    return w.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function D1(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function vp(e) {
    function t(n, r, i, o) {
        let l = n[o++];
        if (l === "__proto__")
            return !0;
        const s = Number.isFinite(+l)
          , a = o >= n.length;
        return l = !l && w.isArray(i) ? i.length : l,
        a ? (w.hasOwnProp(i, l) ? i[l] = [i[l], r] : i[l] = r,
        !s) : ((!i[l] || !w.isObject(i[l])) && (i[l] = []),
        t(n, r, i[l], o) && w.isArray(i[l]) && (i[l] = D1(i[l])),
        !s)
    }
    if (w.isFormData(e) && w.isFunction(e.entries)) {
        const n = {};
        return w.forEachEntry(e, (r, i) => {
            t(A1(r), i, n, 0)
        }
        ),
        n
    }
    return null
}
function I1(e, t, n) {
    if (w.isString(e))
        try {
            return (t || JSON.parse)(e),
            w.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (0,
    JSON.stringify)(e)
}
const oi = {
    transitional: gp,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , i = r.indexOf("application/json") > -1
          , o = w.isObject(t);
        if (o && w.isHTMLForm(t) && (t = new FormData(t)),
        w.isFormData(t))
            return i ? JSON.stringify(vp(t)) : t;
        if (w.isArrayBuffer(t) || w.isBuffer(t) || w.isStream(t) || w.isFile(t) || w.isBlob(t) || w.isReadableStream(t))
            return t;
        if (w.isArrayBufferView(t))
            return t.buffer;
        if (w.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let s;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return z1(t, this.formSerializer).toString();
            if ((s = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return Qo(s ? {
                    "files[]": t
                } : t, a && new a, this.formSerializer)
            }
        }
        return o || i ? (n.setContentType("application/json", !1),
        I1(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || oi.transitional
          , r = n && n.forcedJSONParsing
          , i = this.responseType === "json";
        if (w.isResponse(t) || w.isReadableStream(t))
            return t;
        if (t && w.isString(t) && (r && !this.responseType || i)) {
            const l = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (s) {
                if (l)
                    throw s.name === "SyntaxError" ? b.from(s, b.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Re.classes.FormData,
        Blob: Re.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
w.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    oi.headers[e] = {}
}
);
const F1 = w.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , $1 = e => {
    const t = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function(l) {
        i = l.indexOf(":"),
        n = l.substring(0, i).trim().toLowerCase(),
        r = l.substring(i + 1).trim(),
        !(!n || t[n] && F1[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , hc = Symbol("internals");
function mr(e) {
    return e && String(e).trim().toLowerCase()
}
function Ki(e) {
    return e === !1 || e == null ? e : w.isArray(e) ? e.map(Ki) : String(e)
}
function U1(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const W1 = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Rl(e, t, n, r, i) {
    if (w.isFunction(r))
        return r.call(this, t, n);
    if (i && (t = n),
    !!w.isString(t)) {
        if (w.isString(r))
            return t.indexOf(r) !== -1;
        if (w.isRegExp(r))
            return r.test(t)
    }
}
function b1(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function H1(e, t) {
    const n = w.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, o, l) {
                return this[r].call(this, t, i, o, l)
            },
            configurable: !0
        })
    }
    )
}
class We {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;
        function o(s, a, u) {
            const d = mr(a);
            if (!d)
                throw new Error("header name must be a non-empty string");
            const f = w.findKey(i, d);
            (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || a] = Ki(s))
        }
        const l = (s, a) => w.forEach(s, (u, d) => o(u, d, a));
        if (w.isPlainObject(t) || t instanceof this.constructor)
            l(t, n);
        else if (w.isString(t) && (t = t.trim()) && !W1(t))
            l($1(t), n);
        else if (w.isObject(t) && w.isIterable(t)) {
            let s = {}, a, u;
            for (const d of t) {
                if (!w.isArray(d))
                    throw TypeError("Object iterator must return a key-value pair");
                s[u = d[0]] = (a = s[u]) ? w.isArray(a) ? [...a, d[1]] : [a, d[1]] : d[1]
            }
            l(s, n)
        } else
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = mr(t),
        t) {
            const r = w.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n)
                    return i;
                if (n === !0)
                    return U1(i);
                if (w.isFunction(n))
                    return n.call(this, i, r);
                if (w.isRegExp(n))
                    return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = mr(t),
        t) {
            const r = w.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Rl(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function o(l) {
            if (l = mr(l),
            l) {
                const s = w.findKey(r, l);
                s && (!n || Rl(r, r[s], s, n)) && (delete r[s],
                i = !0)
            }
        }
        return w.isArray(t) ? t.forEach(o) : o(t),
        i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , i = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || Rl(this, this[o], o, t, !0)) && (delete this[o],
            i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this
          , r = {};
        return w.forEach(this, (i, o) => {
            const l = w.findKey(r, o);
            if (l) {
                n[l] = Ki(i),
                delete n[o];
                return
            }
            const s = t ? b1(o) : String(o).trim();
            s !== o && delete n[o],
            n[s] = Ki(i),
            r[s] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return w.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && w.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)),
        r
    }
    static accessor(t) {
        const r = (this[hc] = this[hc] = {
            accessors: {}
        }).accessors
          , i = this.prototype;
        function o(l) {
            const s = mr(l);
            r[s] || (H1(i, l),
            r[s] = !0)
        }
        return w.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
We.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
w.reduceDescriptors(We.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
w.freezeMethods(We);
function Pl(e, t) {
    const n = this || oi
      , r = t || n
      , i = We.from(r.headers);
    let o = r.data;
    return w.forEach(e, function(s) {
        o = s.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
}
function wp(e) {
    return !!(e && e.__CANCEL__)
}
function ir(e, t, n) {
    b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
w.inherits(ir, b, {
    __CANCEL__: !0
});
function xp(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new b("Request failed with status code " + n.status,[b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function V1(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function B1(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let i = 0, o = 0, l;
    return t = t !== void 0 ? t : 1e3,
    function(a) {
        const u = Date.now()
          , d = r[o];
        l || (l = u),
        n[i] = a,
        r[i] = u;
        let f = o
          , y = 0;
        for (; f !== i; )
            y += n[f++],
            f = f % e;
        if (i = (i + 1) % e,
        i === o && (o = (o + 1) % e),
        u - l < t)
            return;
        const S = d && u - d;
        return S ? Math.round(y * 1e3 / S) : void 0
    }
}
function Q1(e, t) {
    let n = 0, r = 1e3 / t, i, o;
    const l = (u, d=Date.now()) => {
        n = d,
        i = null,
        o && (clearTimeout(o),
        o = null),
        e.apply(null, u)
    }
    ;
    return [ (...u) => {
        const d = Date.now()
          , f = d - n;
        f >= r ? l(u, d) : (i = u,
        o || (o = setTimeout( () => {
            o = null,
            l(i)
        }
        , r - f)))
    }
    , () => i && l(i)]
}
const ko = (e, t, n=3) => {
    let r = 0;
    const i = B1(50, 250);
    return Q1(o => {
        const l = o.loaded
          , s = o.lengthComputable ? o.total : void 0
          , a = l - r
          , u = i(a)
          , d = l <= s;
        r = l;
        const f = {
            loaded: l,
            total: s,
            progress: s ? l / s : void 0,
            bytes: a,
            rate: u || void 0,
            estimated: u && s && d ? (s - l) / u : void 0,
            event: o,
            lengthComputable: s != null,
            [t ? "download" : "upload"]: !0
        };
        e(f)
    }
    , n)
}
  , yc = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , gc = e => (...t) => w.asap( () => e(...t))
  , K1 = Re.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,Re.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Re.origin), Re.navigator && /(msie|trident)/i.test(Re.navigator.userAgent)) : () => !0
  , q1 = Re.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, o) {
        const l = [e + "=" + encodeURIComponent(t)];
        w.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
        w.isString(r) && l.push("path=" + r),
        w.isString(i) && l.push("domain=" + i),
        o === !0 && l.push("secure"),
        document.cookie = l.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function J1(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function X1(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Sp(e, t, n) {
    let r = !J1(t);
    return e && (r || n == !1) ? X1(e, t) : t
}
const vc = e => e instanceof We ? {
    ...e
} : e;
function Sn(e, t) {
    t = t || {};
    const n = {};
    function r(u, d, f, y) {
        return w.isPlainObject(u) && w.isPlainObject(d) ? w.merge.call({
            caseless: y
        }, u, d) : w.isPlainObject(d) ? w.merge({}, d) : w.isArray(d) ? d.slice() : d
    }
    function i(u, d, f, y) {
        if (w.isUndefined(d)) {
            if (!w.isUndefined(u))
                return r(void 0, u, f, y)
        } else
            return r(u, d, f, y)
    }
    function o(u, d) {
        if (!w.isUndefined(d))
            return r(void 0, d)
    }
    function l(u, d) {
        if (w.isUndefined(d)) {
            if (!w.isUndefined(u))
                return r(void 0, u)
        } else
            return r(void 0, d)
    }
    function s(u, d, f) {
        if (f in t)
            return r(u, d);
        if (f in e)
            return r(void 0, u)
    }
    const a = {
        url: o,
        method: o,
        data: o,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        withXSRFToken: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: s,
        headers: (u, d, f) => i(vc(u), vc(d), f, !0)
    };
    return w.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
        const f = a[d] || i
          , y = f(e[d], t[d], d);
        w.isUndefined(y) && f !== s || (n[d] = y)
    }),
    n
}
const kp = e => {
    const t = Sn({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: l, auth: s} = t;
    t.headers = l = We.from(l),
    t.url = yp(Sp(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer),
    s && l.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")));
    let a;
    if (w.isFormData(n)) {
        if (Re.hasStandardBrowserEnv || Re.hasStandardBrowserWebWorkerEnv)
            l.setContentType(void 0);
        else if ((a = l.getContentType()) !== !1) {
            const [u,...d] = a ? a.split(";").map(f => f.trim()).filter(Boolean) : [];
            l.setContentType([u || "multipart/form-data", ...d].join("; "))
        }
    }
    if (Re.hasStandardBrowserEnv && (r && w.isFunction(r) && (r = r(t)),
    r || r !== !1 && K1(t.url))) {
        const u = i && o && q1.read(o);
        u && l.set(i, u)
    }
    return t
}
  , Y1 = typeof XMLHttpRequest < "u"
  , G1 = Y1 && function(e) {
    return new Promise(function(n, r) {
        const i = kp(e);
        let o = i.data;
        const l = We.from(i.headers).normalize();
        let {responseType: s, onUploadProgress: a, onDownloadProgress: u} = i, d, f, y, S, v;
        function x() {
            S && S(),
            v && v(),
            i.cancelToken && i.cancelToken.unsubscribe(d),
            i.signal && i.signal.removeEventListener("abort", d)
        }
        let _ = new XMLHttpRequest;
        _.open(i.method.toUpperCase(), i.url, !0),
        _.timeout = i.timeout;
        function p() {
            if (!_)
                return;
            const m = We.from("getAllResponseHeaders"in _ && _.getAllResponseHeaders())
              , C = {
                data: !s || s === "text" || s === "json" ? _.responseText : _.response,
                status: _.status,
                statusText: _.statusText,
                headers: m,
                config: e,
                request: _
            };
            xp(function(R) {
                n(R),
                x()
            }, function(R) {
                r(R),
                x()
            }, C),
            _ = null
        }
        "onloadend"in _ ? _.onloadend = p : _.onreadystatechange = function() {
            !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(p)
        }
        ,
        _.onabort = function() {
            _ && (r(new b("Request aborted",b.ECONNABORTED,e,_)),
            _ = null)
        }
        ,
        _.onerror = function() {
            r(new b("Network Error",b.ERR_NETWORK,e,_)),
            _ = null
        }
        ,
        _.ontimeout = function() {
            let k = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
            const C = i.transitional || gp;
            i.timeoutErrorMessage && (k = i.timeoutErrorMessage),
            r(new b(k,C.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,e,_)),
            _ = null
        }
        ,
        o === void 0 && l.setContentType(null),
        "setRequestHeader"in _ && w.forEach(l.toJSON(), function(k, C) {
            _.setRequestHeader(C, k)
        }),
        w.isUndefined(i.withCredentials) || (_.withCredentials = !!i.withCredentials),
        s && s !== "json" && (_.responseType = i.responseType),
        u && ([y,v] = ko(u, !0),
        _.addEventListener("progress", y)),
        a && _.upload && ([f,S] = ko(a),
        _.upload.addEventListener("progress", f),
        _.upload.addEventListener("loadend", S)),
        (i.cancelToken || i.signal) && (d = m => {
            _ && (r(!m || m.type ? new ir(null,e,_) : m),
            _.abort(),
            _ = null)
        }
        ,
        i.cancelToken && i.cancelToken.subscribe(d),
        i.signal && (i.signal.aborted ? d() : i.signal.addEventListener("abort", d)));
        const c = V1(i.url);
        if (c && Re.protocols.indexOf(c) === -1) {
            r(new b("Unsupported protocol " + c + ":",b.ERR_BAD_REQUEST,e));
            return
        }
        _.send(o || null)
    }
    )
}
  , Z1 = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, i;
        const o = function(u) {
            if (!i) {
                i = !0,
                s();
                const d = u instanceof Error ? u : this.reason;
                r.abort(d instanceof b ? d : new ir(d instanceof Error ? d.message : d))
            }
        };
        let l = t && setTimeout( () => {
            l = null,
            o(new b(`timeout ${t} of ms exceeded`,b.ETIMEDOUT))
        }
        , t);
        const s = () => {
            e && (l && clearTimeout(l),
            l = null,
            e.forEach(u => {
                u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o)
            }
            ),
            e = null)
        }
        ;
        e.forEach(u => u.addEventListener("abort", o));
        const {signal: a} = r;
        return a.unsubscribe = () => w.asap(s),
        a
    }
}
  , ev = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, i;
    for (; r < n; )
        i = r + t,
        yield e.slice(r, i),
        r = i
}
  , tv = async function*(e, t) {
    for await(const n of nv(e))
        yield*ev(n, t)
}
  , nv = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , wc = (e, t, n, r) => {
    const i = tv(e, t);
    let o = 0, l, s = a => {
        l || (l = !0,
        r && r(a))
    }
    ;
    return new ReadableStream({
        async pull(a) {
            try {
                const {done: u, value: d} = await i.next();
                if (u) {
                    s(),
                    a.close();
                    return
                }
                let f = d.byteLength;
                if (n) {
                    let y = o += f;
                    n(y)
                }
                a.enqueue(new Uint8Array(d))
            } catch (u) {
                throw s(u),
                u
            }
        },
        cancel(a) {
            return s(a),
            i.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Ko = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , Ep = Ko && typeof ReadableStream == "function"
  , rv = Ko && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , Cp = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , iv = Ep && Cp( () => {
    let e = !1;
    const t = new Request(Re.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , xc = 64 * 1024
  , Ls = Ep && Cp( () => w.isReadableStream(new Response("").body))
  , Eo = {
    stream: Ls && (e => e.body)
};
Ko && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Eo[t] && (Eo[t] = w.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new b(`Response type '${t}' is not supported`,b.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const ov = async e => {
    if (e == null)
        return 0;
    if (w.isBlob(e))
        return e.size;
    if (w.isSpecCompliantForm(e))
        return (await new Request(Re.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (w.isArrayBufferView(e) || w.isArrayBuffer(e))
        return e.byteLength;
    if (w.isURLSearchParams(e) && (e = e + ""),
    w.isString(e))
        return (await rv(e)).byteLength
}
  , lv = async (e, t) => {
    const n = w.toFiniteNumber(e.getContentLength());
    return n ?? ov(t)
}
  , sv = Ko && (async e => {
    let {url: t, method: n, data: r, signal: i, cancelToken: o, timeout: l, onDownloadProgress: s, onUploadProgress: a, responseType: u, headers: d, withCredentials: f="same-origin", fetchOptions: y} = kp(e);
    u = u ? (u + "").toLowerCase() : "text";
    let S = Z1([i, o && o.toAbortSignal()], l), v;
    const x = S && S.unsubscribe && ( () => {
        S.unsubscribe()
    }
    );
    let _;
    try {
        if (a && iv && n !== "get" && n !== "head" && (_ = await lv(d, r)) !== 0) {
            let C = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), P;
            if (w.isFormData(r) && (P = C.headers.get("content-type")) && d.setContentType(P),
            C.body) {
                const [R,z] = yc(_, ko(gc(a)));
                r = wc(C.body, xc, R, z)
            }
        }
        w.isString(f) || (f = f ? "include" : "omit");
        const p = "credentials"in Request.prototype;
        v = new Request(t,{
            ...y,
            signal: S,
            method: n.toUpperCase(),
            headers: d.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: p ? f : void 0
        });
        let c = await fetch(v);
        const m = Ls && (u === "stream" || u === "response");
        if (Ls && (s || m && x)) {
            const C = {};
            ["status", "statusText", "headers"].forEach(U => {
                C[U] = c[U]
            }
            );
            const P = w.toFiniteNumber(c.headers.get("content-length"))
              , [R,z] = s && yc(P, ko(gc(s), !0)) || [];
            c = new Response(wc(c.body, xc, R, () => {
                z && z(),
                x && x()
            }
            ),C)
        }
        u = u || "text";
        let k = await Eo[w.findKey(Eo, u) || "text"](c, e);
        return !m && x && x(),
        await new Promise( (C, P) => {
            xp(C, P, {
                data: k,
                headers: We.from(c.headers),
                status: c.status,
                statusText: c.statusText,
                config: e,
                request: v
            })
        }
        )
    } catch (p) {
        throw x && x(),
        p && p.name === "TypeError" && /Load failed|fetch/i.test(p.message) ? Object.assign(new b("Network Error",b.ERR_NETWORK,e,v), {
            cause: p.cause || p
        }) : b.from(p, p && p.code, e, v)
    }
}
)
  , zs = {
    http: k1,
    xhr: G1,
    fetch: sv
};
w.forEach(zs, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Sc = e => `- ${e}`
  , av = e => w.isFunction(e) || e === null || e === !1
  , _p = {
    getAdapter: e => {
        e = w.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const i = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let l;
            if (r = n,
            !av(n) && (r = zs[(l = String(n)).toLowerCase()],
            r === void 0))
                throw new b(`Unknown adapter '${l}'`);
            if (r)
                break;
            i[l || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(i).map( ([s,a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
            let l = t ? o.length > 1 ? `since :
` + o.map(Sc).join(`
`) : " " + Sc(o[0]) : "as no adapter specified";
            throw new b("There is no suitable adapter to dispatch the request " + l,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: zs
};
function Tl(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new ir(null,e)
}
function kc(e) {
    return Tl(e),
    e.headers = We.from(e.headers),
    e.data = Pl.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    _p.getAdapter(e.adapter || oi.adapter)(e).then(function(r) {
        return Tl(e),
        r.data = Pl.call(e, e.transformResponse, r),
        r.headers = We.from(r.headers),
        r
    }, function(r) {
        return wp(r) || (Tl(e),
        r && r.response && (r.response.data = Pl.call(e, e.transformResponse, r.response),
        r.response.headers = We.from(r.response.headers))),
        Promise.reject(r)
    })
}
const Np = "1.9.0"
  , qo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    qo[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Ec = {};
qo.transitional = function(t, n, r) {
    function i(o, l) {
        return "[Axios v" + Np + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "")
    }
    return (o, l, s) => {
        if (t === !1)
            throw new b(i(l, " has been removed" + (n ? " in " + n : "")),b.ERR_DEPRECATED);
        return n && !Ec[l] && (Ec[l] = !0,
        console.warn(i(l, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, l, s) : !0
    }
}
;
qo.spelling = function(t) {
    return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`),
    !0)
}
;
function uv(e, t, n) {
    if (typeof e != "object")
        throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const o = r[i]
          , l = t[o];
        if (l) {
            const s = e[o]
              , a = s === void 0 || l(s, o, e);
            if (a !== !0)
                throw new b("option " + o + " must be " + a,b.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new b("Unknown option " + o,b.ERR_BAD_OPTION)
    }
}
const qi = {
    assertOptions: uv,
    validators: qo
}
  , mt = qi.validators;
class hn {
    constructor(t) {
        this.defaults = t || {},
        this.interceptors = {
            request: new mc,
            response: new mc
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i = {};
                Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error;
                const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Sn(this.defaults, n);
        const {transitional: r, paramsSerializer: i, headers: o} = n;
        r !== void 0 && qi.assertOptions(r, {
            silentJSONParsing: mt.transitional(mt.boolean),
            forcedJSONParsing: mt.transitional(mt.boolean),
            clarifyTimeoutError: mt.transitional(mt.boolean)
        }, !1),
        i != null && (w.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : qi.assertOptions(i, {
            encode: mt.function,
            serialize: mt.function
        }, !0)),
        n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0),
        qi.assertOptions(n, {
            baseUrl: mt.spelling("baseURL"),
            withXsrfToken: mt.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let l = o && w.merge(o.common, o[n.method]);
        o && w.forEach(["delete", "get", "head", "post", "put", "patch", "common"], v => {
            delete o[v]
        }
        ),
        n.headers = We.concat(l, o);
        const s = [];
        let a = !0;
        this.interceptors.request.forEach(function(x) {
            typeof x.runWhen == "function" && x.runWhen(n) === !1 || (a = a && x.synchronous,
            s.unshift(x.fulfilled, x.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(x) {
            u.push(x.fulfilled, x.rejected)
        });
        let d, f = 0, y;
        if (!a) {
            const v = [kc.bind(this), void 0];
            for (v.unshift.apply(v, s),
            v.push.apply(v, u),
            y = v.length,
            d = Promise.resolve(n); f < y; )
                d = d.then(v[f++], v[f++]);
            return d
        }
        y = s.length;
        let S = n;
        for (f = 0; f < y; ) {
            const v = s[f++]
              , x = s[f++];
            try {
                S = v(S)
            } catch (_) {
                x.call(this, _);
                break
            }
        }
        try {
            d = kc.call(this, S)
        } catch (v) {
            return Promise.reject(v)
        }
        for (f = 0,
        y = u.length; f < y; )
            d = d.then(u[f++], u[f++]);
        return d
    }
    getUri(t) {
        t = Sn(this.defaults, t);
        const n = Sp(t.baseURL, t.url, t.allowAbsoluteUrls);
        return yp(n, t.params, t.paramsSerializer)
    }
}
w.forEach(["delete", "get", "head", "options"], function(t) {
    hn.prototype[t] = function(n, r) {
        return this.request(Sn(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
w.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, l, s) {
            return this.request(Sn(s || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: l
            }))
        }
    }
    hn.prototype[t] = n(),
    hn.prototype[t + "Form"] = n(!0)
});
class za {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(i => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](i);
            r._listeners = null
        }
        ),
        this.promise.then = i => {
            let o;
            const l = new Promise(s => {
                r.subscribe(s),
                o = s
            }
            ).then(i);
            return l.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            l
        }
        ,
        t(function(o, l, s) {
            r.reason || (r.reason = new ir(o,l,s),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new za(function(i) {
                t = i
            }
            ),
            cancel: t
        }
    }
}
function cv(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function dv(e) {
    return w.isObject(e) && e.isAxiosError === !0
}
const As = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(As).forEach( ([e,t]) => {
    As[t] = e
}
);
function Rp(e) {
    const t = new hn(e)
      , n = ip(hn.prototype.request, t);
    return w.extend(n, hn.prototype, t, {
        allOwnKeys: !0
    }),
    w.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(i) {
        return Rp(Sn(e, i))
    }
    ,
    n
}
const le = Rp(oi);
le.Axios = hn;
le.CanceledError = ir;
le.CancelToken = za;
le.isCancel = wp;
le.VERSION = Np;
le.toFormData = Qo;
le.AxiosError = b;
le.Cancel = le.CanceledError;
le.all = function(t) {
    return Promise.all(t)
}
;
le.spread = cv;
le.isAxiosError = dv;
le.mergeConfig = Sn;
le.AxiosHeaders = We;
le.formToJSON = e => vp(w.isHTMLForm(e) ? new FormData(e) : e);
le.getAdapter = _p.getAdapter;
le.HttpStatusCode = As;
le.default = le;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fv = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pv = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , ae = (e, t) => {
    const n = E.forwardRef( ({color: r="currentColor", size: i=24, strokeWidth: o=2, absoluteStrokeWidth: l, className: s="", children: a, ...u}, d) => E.createElement("svg", {
        ref: d,
        ...fv,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: l ? Number(o) * 24 / Number(i) : o,
        className: ["lucide", `lucide-${pv(e)}`, s].join(" "),
        ...u
    }, [...t.map( ([f,y]) => E.createElement(f, y)), ...Array.isArray(a) ? a : [a]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = ae("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cc = ae("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mv = ae("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = ae("FileCode", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "m10 13-2 2 2 2",
    key: "17smn8"
}], ["path", {
    d: "m14 17 2-2-2-2",
    key: "14mezr"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hv = ae("Fingerprint", [["path", {
    d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",
    key: "1jc9o5"
}], ["path", {
    d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",
    key: "1mxgy1"
}], ["path", {
    d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
    key: "ptglia"
}], ["path", {
    d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
    key: "1nerag"
}], ["path", {
    d: "M8.65 22c.21-.66.45-1.32.57-2",
    key: "13wd9y"
}], ["path", {
    d: "M14 13.12c0 2.38 0 6.38-1 8.88",
    key: "o46ks0"
}], ["path", {
    d: "M2 16h.01",
    key: "1gqxmh"
}], ["path", {
    d: "M21.8 16c.2-2 .131-5.354 0-6",
    key: "drycrb"
}], ["path", {
    d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",
    key: "1fgabc"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oi = ae("Link2", [["path", {
    d: "M9 17H7A5 5 0 0 1 7 7h2",
    key: "8i5ue5"
}], ["path", {
    d: "M15 7h2a5 5 0 1 1 0 10h-2",
    key: "1b9ql8"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "12",
    y2: "12",
    key: "1jonct"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yv = ae("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gv = ae("LogIn", [["path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
    key: "u53s6r"
}], ["polyline", {
    points: "10 17 15 12 10 7",
    key: "1ail0h"
}], ["line", {
    x1: "15",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "v6grx8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vv = ae("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wv = ae("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ji = ae("Palette", [["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
}], ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
}], ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
}], ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
}], ["path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
    key: "12rzf8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _c = ae("Pencil", [["path", {
    d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",
    key: "5qss01"
}], ["path", {
    d: "m15 5 4 4",
    key: "1mk7zo"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = ae("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xv = ae("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = ae("RefreshCw", [["path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
    key: "v9h5vc"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}], ["path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
    key: "3uifl3"
}], ["path", {
    d: "M8 16H3v5",
    key: "1cv678"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = ae("Save", [["path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
    key: "1owoqh"
}], ["polyline", {
    points: "17 21 17 13 7 13 7 21",
    key: "1md35c"
}], ["polyline", {
    points: "7 3 7 8 15 8",
    key: "8nz8an"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sv = ae("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kv = ae("Square", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = ae("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ev = ae("Trash", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = ae("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
function Cv() {
    var Va;
    const [e,t] = E.useState(!1)
      , [n,r] = E.useState(!1)
      , [i,o] = E.useState("")
      , [l,s] = E.useState("")
      , [,a] = E.useState(null)
      , u = E.useRef(null)
      , [d,f] = E.useState("idle")
      , [y,S] = E.useState("")
      , [v,x] = E.useState(0)
      , [_,p] = E.useState(!1)
      , [,c] = E.useState(!1)
      , [m] = E.useState(!1)
      , [k,C] = E.useState("idle")
      , [P,R] = E.useState("")
      , [z,U] = E.useState(0)
      , [T,J] = E.useState([{
        id: Date.now().toString(),
        title: "Untitled",
        content: "",
        isModified: !1
    }])
      , [ue,ke] = E.useState(T[0].id)
      , [ge,$] = E.useState([])
      , [V,Ee] = E.useState(null)
      , [O,I] = E.useState("")
      , W = E.useRef(null)
      , [M,F] = E.useState({
        exists: !1
    })
      , [B,me] = E.useState(!1)
      , [Xe,dt] = E.useState(!1)
      , [jt,Aa] = E.useState("editor")
      , [Mt,Da] = E.useState({
        fontSize: 14,
        showMinimap: !0,
        hwid: {
            lastRandomized: null
        }
    })
      , [Pp,Tp] = E.useState( () => {
        const g = localStorage.getItem("workspace_width");
        return g ? parseInt(g, 10) : 240
    }
    )
      , [Jo,Ia] = E.useState(!1)
      , Op = E.useRef(null)
      , ve = E.useRef(null)
      , jp = E.useRef(null)
      , _n = E.useRef(null)
      , Fa = E.useRef(null)
      , $a = E.useRef(!1)
      , nn = E.useRef(null)
      , li = E.useRef(null);
    E.useEffect( () => {
        const g = L => {
            if (!Jo)
                return;
            const ee = window.innerWidth - L.clientX
              , ft = Math.max(160, Math.min(500, ee));
            Tp(ft),
            localStorage.setItem("workspace_width", ft.toString())
        }
          , j = () => {
            Ia(!1)
        }
        ;
        return Jo && (document.addEventListener("mousemove", g),
        document.addEventListener("mouseup", j)),
        () => {
            document.removeEventListener("mousemove", g),
            document.removeEventListener("mouseup", j)
        }
    }
    , [Jo]);
    const Mp = () => {
        Ia(!0)
    }
    ;
    E.useEffect( () => {
        const g = localStorage.getItem("talon_settings");
        if (g)
            try {
                const j = JSON.parse(g);
                Da(L => ({
                    ...L,
                    ...j
                }))
            } catch (j) {
                console.error("Failed to parse settings from localStorage:", j)
            }
    }
    , []),
    E.useEffect( () => {
        e && localStorage.setItem("talon_settings", JSON.stringify(Mt))
    }
    , [Mt, e]),
    E.useEffect( () => {
        if (!e)
            return;
        const g = j => {
            j.ctrlKey && j.key === "t" && (j.preventDefault(),
            Ua())
        }
        ;
        return window.addEventListener("keydown", g),
        () => {
            window.removeEventListener("keydown", g)
        }
    }
    , [e, _, B]),
    E.useEffect( () => {
        if (!e)
            return;
        const g = async () => {
            if (!Xe)
                try {
                    if (!await Te("check_themes_directory")) {
                        M.exists && (F({
                            exists: !1
                        }),
                        B && (me(!1),
                        Yo(),
                        Y("Theme Removed", "Theme folder no longer exists", h.jsx(de, {
                            className: "text-yellow-400"
                        }))));
                        return
                    }
                    const L = await Te("check_theme_file", {
                        filename: "styles.css"
                    })
                      , K = await Te("check_theme_file", {
                        filename: "index.html"
                    });
                    if (!L && !K) {
                        M.exists && (F({
                            exists: !1
                        }),
                        B && (me(!1),
                        Yo(),
                        Y("Theme Removed", "Theme files no longer exist", h.jsx(de, {
                            className: "text-yellow-400"
                        }))));
                        return
                    }
                    let ee = M.cssContent || ""
                      , ft = M.htmlContent || ""
                      , or = !1
                      , ui = !1;
                    if (L) {
                        const rn = await Te("read_theme_file", {
                            filename: "styles.css"
                        });
                        rn !== M.cssContent && (ee = rn,
                        or = !0)
                    }
                    if (K) {
                        const rn = await Te("read_theme_file", {
                            filename: "index.html"
                        });
                        rn !== M.htmlContent && (ft = rn,
                        ui = !0)
                    }
                    if (or || ui || !M.exists) {
                        const rn = {
                            exists: !0,
                            cssContent: ee,
                            htmlContent: ft,
                            cssLastModified: or ? Date.now() : M.cssLastModified,
                            htmlLastModified: ui ? Date.now() : M.htmlLastModified
                        };
                        F(rn),
                        B && (Xo(ee, ft),
                        (or || ui) && Y("Theme Updated", "Theme has been updated with latest changes", h.jsx(ji, {
                            className: "text-green-400"
                        }))),
                        M.exists || Y("Theme Detected", "Custom theme found and ready to use", h.jsx(ji, {
                            className: "text-blue-400"
                        }))
                    }
                } catch (j) {
                    console.error("Error checking for theme updates:", j)
                }
        }
        ;
        return g(),
        li.current = window.setInterval(g, 1e3),
        () => {
            li.current && (window.clearInterval(li.current),
            li.current = null)
        }
    }
    , [e, B, M.exists, M.cssContent, M.htmlContent]),
    E.useEffect( () => {
        e && (async () => {
            try {
                if (dt(!0),
                await Te("check_themes_directory")) {
                    const L = await Te("check_theme_file", {
                        filename: "styles.css"
                    })
                      , K = await Te("check_theme_file", {
                        filename: "index.html"
                    });
                    let ee = ""
                      , ft = "";
                    L && (ee = await Te("read_theme_file", {
                        filename: "styles.css"
                    })),
                    K && (ft = await Te("read_theme_file", {
                        filename: "index.html"
                    })),
                    F({
                        exists: !0,
                        cssContent: ee,
                        htmlContent: ft,
                        cssLastModified: Date.now(),
                        htmlLastModified: Date.now()
                    }),
                    localStorage.getItem("talon_theme_enabled") === "true" && (me(!0),
                    Xo(ee, ft))
                } else
                    F({
                        exists: !1
                    })
            } catch (j) {
                console.error("Error checking for custom theme:", j),
                F({
                    exists: !1
                })
            } finally {
                dt(!1)
            }
        }
        )()
    }
    , [e]),
    E.useEffect( () => {
        M.exists && (B ? Xo(M.cssContent || "", M.htmlContent || "") : Yo(),
        localStorage.setItem("talon_theme_enabled", B.toString()))
    }
    , [B, M]),
    E.useEffect( () => {
        (async () => {
            const j = localStorage.getItem("talon_user");
            if (j)
                try {
                    const {email: L, password: K} = JSON.parse(j);
                    (await le.post("https://api.talon.gay/api/login", {
                        email: L,
                        password: K
                    })).data.message === "Login successful" && (console.log("ENCRYPTED: 547ef0102cb6b418e7d7dbca0ec595585b22170160c4f61a06e35713ce95913f5c9ad9c02c6736780fbc7aa4e5c3ac12"),
                    o(L),
                    t(!0))
                } catch {
                    localStorage.removeItem("talon_user"),
                    u.current && u.current.focus()
                }
            else
                setTimeout( () => {
                    u.current && u.current.focus()
                }
                , 500)
        }
        )()
    }
    , []);
    const Lp = async g => {
        var j, L;
        if (g.preventDefault(),
        !i.trim() || !l.trim()) {
            Y("Validation Error", "Please enter both email and password", h.jsx(de, {
                className: "text-red-400"
            }));
            return
        }
        r(!0),
        a(null);
        try {
            (await le.post("https://api.talon.gay/api/login", {
                email: i,
                password: l
            })).data.message === "Login successful" && (localStorage.setItem("talon_user", JSON.stringify({
                email: i,
                password: l
            })),
            t(!0),
            a(null),
            Y("Login Successful", "Welcome to Talon", h.jsx(Cc, {
                className: "text-green-400"
            })))
        } catch (K) {
            if (le.isAxiosError(K)) {
                const ee = ((L = (j = K.response) == null ? void 0 : j.data) == null ? void 0 : L.message) || "Authentication failed";
                Y("Login Failed", ee, h.jsx(de, {
                    className: "text-red-400"
                }))
            } else
                Y("Error", "An unexpected error occurred", h.jsx(de, {
                    className: "text-red-400"
                }))
        } finally {
            r(!1)
        }
    }
      , Xo = (g, j) => {
        let L = document.getElementById("custom-theme-styles");
        L || (L = document.createElement("style"),
        L.id = "custom-theme-styles",
        document.head.appendChild(L)),
        L.textContent = g,
        nn.current && (nn.current.innerHTML = j,
        nn.current.style.display = "block")
    }
      , Yo = () => {
        const g = document.getElementById("custom-theme-styles");
        g && (g.textContent = ""),
        nn.current && (nn.current.innerHTML = "",
        nn.current.style.display = "none")
    }
      , Ua = () => {
        M.exists ? (me(!B),
        Y(B ? "Theme Disabled" : "Theme Enabled", B ? "Switched to default theme" : "Custom theme applied", h.jsx(ji, {
            className: B ? "text-gray-400" : "text-blue-400"
        }))) : Y("No Theme Found", "Create a themes folder with styles.css and index.html files", h.jsx(de, {
            className: "text-yellow-400"
        }))
    }
      , zp = g => {
        switch (g) {
        case 2:
            return {
                title: "Launch Successful",
                message: "Roblox has been successfully launched",
                type: "success",
                icon: h.jsx(Cc, {
                    className: "text-green-400"
                })
            };
        case -1:
            return {
                title: "Environment Error",
                message: "Failed to get user profile directory",
                type: "error",
                icon: h.jsx(de, {
                    className: "text-red-400"
                })
            };
        case -2:
            return {
                title: "Directory Error",
                message: "Failed to read Roblox Versions directory",
                type: "error",
                icon: h.jsx(de, {
                    className: "text-red-400"
                })
            };
        case -3:
            return {
                title: "Installation Error",
                message: "No Roblox version folder found",
                type: "error",
                icon: h.jsx(de, {
                    className: "text-red-400"
                })
            };
        case -4:
            return {
                title: "Executable Error",
                message: "RobloxPlayerBeta.exe not found",
                type: "error",
                icon: h.jsx(de, {
                    className: "text-red-400"
                })
            };
        case -5:
            return {
                title: "Process Error",
                message: "Failed to spawn Roblox process",
                type: "error",
                icon: h.jsx(de, {
                    className: "text-red-400"
                })
            };
        default:
            return {
                title: "Unknown Status",
                message: `Received status code: ${g}`,
                type: "warning",
                icon: h.jsx(de, {
                    className: "text-yellow-400"
                })
            }
        }
    }
      , si = E.useCallback(async () => {
        try {
            const g = await Te("is_roblox_running");
            return c(!!g),
            !!g
        } catch (g) {
            return console.error("Error checking Roblox status:", g),
            c(!1),
            !1
        }
    }
    , [])
      , ai = E.useCallback( () => {
        _n.current && (window.clearInterval(_n.current),
        _n.current = null),
        _n.current = window.setInterval(async () => {
            if (!_)
                return;
            !await si() && _ && (p(!1),
            C("idle"),
            Y("Connection Lost", "Roblox has closed. Execution has been turned off.", h.jsx(de, {
                className: "text-red-400"
            })))
        }
        , 1e3)
    }
    , [_, si]);
    E.useEffect( () => ((async () => {
        try {
            if (e && !$a.current) {
                const j = localStorage.getItem("talon_workspace");
                if (j)
                    try {
                        const L = JSON.parse(j);
                        Array.isArray(L) && L.length > 0 && ($(L),
                        $a.current = !0,
                        console.log("Workspace loaded successfully:", L.length, "files"))
                    } catch (L) {
                        console.error("Failed to parse workspace from localStorage:", L)
                    }
            }
            await si()
        } catch (j) {
            console.error("Error loading saved state:", j)
        }
    }
    )(),
    ai(),
    () => {
        _n.current && window.clearInterval(_n.current),
        Fa.current && window.clearTimeout(Fa.current)
    }
    ), [e, si, ai]),
    E.useEffect( () => {
        if (e && ge.length > 0)
            try {
                const g = JSON.stringify(ge);
                localStorage.setItem("talon_workspace", g),
                console.log("Workspace saved:", ge.length, "files")
            } catch (g) {
                console.error("Error saving workspace to localStorage:", g)
            }
    }
    , [ge, e]),
    E.useEffect( () => {
        ai()
    }
    , [_, ai]),
    E.useEffect( () => {
        V && W.current && W.current.focus()
    }
    , [V]);
    const Y = (g, j, L) => {
        je.custom(K => h.jsx("div", {
            className: `${K.visible ? "animate-enter" : "animate-leave"} notification-container`,
            children: h.jsxs("div", {
                className: "notification-content",
                children: [h.jsx("div", {
                    className: "notification-icon",
                    children: L
                }), h.jsxs("div", {
                    className: "notification-text",
                    children: [h.jsx("h3", {
                        className: "notification-title",
                        children: g
                    }), h.jsx("p", {
                        className: "notification-message",
                        children: j
                    })]
                })]
            })
        }), {
            duration: 3e3,
            position: "bottom-right"
        })
    }
      , Ap = (g, j) => {
        var L;
        ve.current = g,
        jp.current = j,
        g.updateOptions({
            theme: "vs-dark",
            fontFamily: "JetBrains Mono, Consolas, monospace",
            fontSize: Mt.fontSize,
            minimap: {
                enabled: Mt.showMinimap
            },
            smoothScrolling: !0,
            cursorSmoothCaretAnimation: "on",
            cursorBlinking: "smooth",
            padding: {
                top: 10,
                bottom: 10
            }
        }),
        (L = g.getModel()) == null || L.updateOptions({
            tabSize: 2
        }),
        j.editor.defineTheme("custom-dark", {
            base: "vs-dark",
            inherit: !0,
            rules: [],
            colors: {
                "editor.background": "#080808",
                "editor.lineHighlightBackground": "#0D0D0D",
                "editorGutter.background": "#080808",
                "editorLineNumber.foreground": "#444444"
            }
        }),
        j.editor.setTheme("custom-dark"),
        g.onDidChangeModelContent( () => {
            const K = g.getValue();
            J(T.map(ee => ee.id === ue ? {
                ...ee,
                content: K,
                isModified: !0
            } : ee))
        }
        )
    }
      , Dp = () => {
        sn.minimize()
    }
      , Ip = async () => {
        await sn.isMaximized() ? sn.unmaximize() : sn.maximize()
    }
      , Fp = () => {
        sn.close()
    }
      , $p = () => {
        if (ve.current) {
            const j = ve.current.getValue();
            J(T.map(L => L.id === ue ? {
                ...L,
                content: j
            } : L))
        }
        const g = {
            id: Date.now().toString(),
            title: "Untitled",
            content: "",
            isModified: !1
        };
        J([...T, g]),
        ke(g.id),
        setTimeout( () => {
            ve.current && ve.current.setValue("")
        }
        , 50)
    }
      , Up = (g, j) => {
        if (j && j.stopPropagation(),
        T.length === 1) {
            Y("Cannot Close Tab", "You must keep at least one tab open", h.jsx(de, {
                className: "text-red-400"
            }));
            return
        }
        const L = T.findIndex(ee => ee.id === g)
          , K = T.filter(ee => ee.id !== g);
        if (J(K),
        g === ue) {
            const ee = L > 0 ? L - 1 : 0;
            ke(K[ee].id)
        }
    }
      , Wp = g => {
        if (ve.current) {
            const j = ve.current.getValue();
            J(T.map(L => L.id === ue ? {
                ...L,
                content: j
            } : L))
        }
        ke(g),
        setTimeout( () => {
            if (ve.current) {
                const j = T.find(L => L.id === g);
                j && ve.current.setValue(j.content)
            }
        }
        , 50)
    }
      , bp = () => {
        if (!ve.current)
            return;
        const g = ve.current.getValue()
          , j = T.find(ee => ee.id === ue);
        if (!g.trim() || !j) {
            Y("Empty Script", "Cannot save an empty script.", h.jsx(de, {
                className: "text-red-400"
            }));
            return
        }
        const L = {
            id: Date.now().toString(),
            name: j.title,
            content: g,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
          , K = [...ge, L];
        $(K),
        localStorage.setItem("talon_workspace", JSON.stringify(K)),
        Y("Script Saved", `Script saved to workspace as ${j.title}`, h.jsx(Rc, {
            className: "text-green-400"
        }))
    }
      , Hp = async () => {
        if (!ve.current || !_)
            return;
        const g = ve.current.getValue();
        if (g)
            try {
                const j = await fetch("http://localhost:4555/execute", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        code: g
                    })
                });
                if (!j.ok)
                    throw new Error(await j.text());
                Y("Script Executed", "Script executed successfully", h.jsx(jl, {
                    className: "text-green-400"
                }))
            } catch {
                Y("Execution Failed", "Failed to execute script", h.jsx(de, {
                    className: "text-red-400"
                }))
            }
    }
      , Vp = async () => {
        try {
            C("launching"),
            R("Starting Roblox Launch"),
            U(1),
            await new Promise(K => setTimeout(K, 300)),
            R("Resolving Path"),
            U(2),
            await new Promise(K => setTimeout(K, 200)),
            R("Checking auth token..."),
            U(3),
            await new Promise(K => setTimeout(K, 500));
            const g = await Te("launch_roblox")
              , j = typeof g == "number" ? g : parseInt(g, 10)
              , L = zp(j);
            Y(L.title, L.message, L.icon),
            j === 2 ? (C("connected"),
            R("Connected"),
            p(!0)) : j < 0 && (C("error"),
            R("Failed: " + L.message),
            U(0),
            setTimeout( () => C("idle"), 3e3))
        } catch (g) {
            console.error("Error launching Roblox:", g),
            Y("Launch Error", "Failed to launch Roblox: " + g, h.jsx(de, {
                className: "text-red-400"
            })),
            C("error"),
            R("Connection failed"),
            U(0),
            setTimeout( () => C("idle"), 3e3)
        }
    }
      , Bp = () => {
        ve.current && (ve.current.setValue(""),
        J(T.map(g => g.id === ue ? {
            ...g,
            content: "",
            isModified: !1
        } : g)),
        Y("Editor Cleared", "Editor content has been cleared", h.jsx(Mi, {
            className: "text-blue-400"
        })))
    }
      , Wa = g => {
        const j = T.findIndex(L => L.title === g.name && !L.isModified);
        if (j !== -1)
            ke(T[j].id);
        else {
            const L = {
                id: Date.now().toString(),
                title: g.name,
                content: g.content,
                isModified: !1
            };
            J([...T, L]),
            ke(L.id)
        }
        ve.current && setTimeout( () => {
            ve.current.setValue(g.content)
        }
        , 50)
    }
      , Qp = g => {
        Ee(g.id),
        I(g.name)
    }
      , ba = () => {
        Ee(null)
    }
      , Kp = g => {
        I(g.target.value)
    }
      , Ha = g => {
        if (!O.trim()) {
            ba();
            return
        }
        const j = O.endsWith("") ? O : `${O}`
          , L = ge.map(K => K.id === g ? {
            ...K,
            name: j,
            updatedAt: Date.now()
        } : K);
        $(L),
        localStorage.setItem("talon_workspace", JSON.stringify(L)),
        Ee(null),
        Y("File Renamed", `File renamed to ${j}`, h.jsx(_c, {
            className: "text-blue-400"
        }))
    }
      , qp = (g, j) => {
        g.key === "Enter" ? Ha(j) : g.key === "Escape" && ba()
    }
      , Jp = g => {
        const j = ge.filter(L => L.id !== g.id);
        $(j),
        localStorage.setItem("talon_workspace", JSON.stringify(j)),
        Y("File Deleted", `File ${g.name} was deleted from workspace`, h.jsx(Mi, {
            className: "text-red-400"
        }))
    }
      , Xp = () => d === "updating" ? h.jsxs("span", {
        className: "text-xs text-yellow-400 flex items-center gap-1",
        children: [h.jsx("span", {
            className: "animate-pulse",
            children: "●"
        }), v, "/3: ", y]
    }) : d === "completed" ? h.jsxs("span", {
        className: "text-xs text-green-400 flex items-center gap-1",
        children: [h.jsx("span", {
            children: "●"
        }), " ", y]
    }) : d === "error" ? h.jsxs("span", {
        className: "text-xs text-red-400 flex items-center gap-1",
        children: [h.jsx("span", {
            children: "●"
        }), " ", y]
    }) : k === "idle" ? m && !_ ? h.jsxs("span", {
        className: "text-xs text-yellow-400 flex items-center gap-1",
        children: [h.jsx("span", {
            className: "animate-pulse",
            children: "●"
        }), " Waiting for Roblox..."]
    }) : null : k === "launching" ? h.jsxs("span", {
        className: "text-xs text-yellow-400 flex items-center gap-1",
        children: [h.jsx("span", {
            className: "animate-pulse",
            children: "●"
        }), z, "/3: ", P]
    }) : k === "connected" ? h.jsxs("span", {
        className: "text-xs text-green-400 flex items-center gap-1",
        children: [h.jsx("span", {
            children: "●"
        }), " Connected to Roblox"]
    }) : k === "error" ? h.jsxs("span", {
        className: "text-xs text-red-400 flex items-center gap-1",
        children: [h.jsx("span", {
            children: "●"
        }), " ", P]
    }) : null
      , Yp = () => {
        switch (k) {
        case "launching":
            return "Launching...";
        case "connected":
            return "Roblox Launched";
        case "error":
            return "Launch Failed";
        default:
            return "Launch"
        }
    }
      , Gp = () => {
        switch (k) {
        case "launching":
            return h.jsx(Oi, {
                size: 16,
                className: "text-yellow-400 animate-pulse"
            });
        case "connected":
            return h.jsx(Oi, {
                size: 16,
                className: "text-green-400"
            });
        case "error":
            return h.jsx(Oi, {
                size: 16,
                className: "text-red-400"
            });
        default:
            return h.jsx(Oi, {
                size: 16,
                className: "text-[#BBBBBB]"
            })
        }
    }
      , Zp = () => {
        const g = "control-button";
        switch (k) {
        case "launching":
            return `${g} launching`;
        case "connected":
            return `${g} connected`;
        case "error":
            return `${g} error`;
        default:
            return g
        }
    }
      , em = async () => {
        try {
            f("updating"),
            S("Starting update process..."),
            x(1),
            await new Promise(L => setTimeout(L, 300)),
            S("Checking version..."),
            x(2),
            await new Promise(L => setTimeout(L, 200)),
            S("Installing update..."),
            x(3);
            const g = await Te("auto_update");
            (typeof g == "number" ? g : parseInt(g, 10)) === 1 ? (f("completed"),
            S("Update completed successfully"),
            x(3),
            setTimeout( () => {
                f("idle"),
                S(""),
                x(0)
            }
            , 2e3)) : (f("error"),
            S("Update failed"),
            x(0),
            setTimeout( () => {
                f("idle"),
                S(""),
                x(0)
            }
            , 3e3))
        } catch (g) {
            console.error("Update error:", g),
            f("error"),
            S("Update failed: " + g),
            x(0),
            setTimeout( () => {
                f("idle"),
                S(""),
                x(0)
            }
            , 3e3)
        }
    }
      , tm = async () => {
        try {
            await Te("randomize_hwid"),
            Da(g => ({
                ...g,
                hwid: {
                    ...g.hwid,
                    lastRandomized: Date.now()
                }
            })),
            Y("HWID Randomized", "HWID seed has been successfully randomized", h.jsx(hv, {
                className: "text-green-400"
            }))
        } catch (g) {
            console.error("Error randomizing HWID:", g),
            Y("Randomization Failed", "Failed to randomize HWID seed: " + g, h.jsx(de, {
                className: "text-red-400"
            }))
        }
    }
      , nm = async () => {
        try {
            await Te("remove_talon"),
            Y("Talon Removed", "Talon has been successfully removed from injecting into the game", h.jsx(Ev, {
                className: "text-green-400"
            }))
        } catch (g) {
            console.error("Error removing Talon:", g),
            Y("Removal Failed", "Failed to remove Talon: " + g, h.jsx(de, {
                className: "text-red-400"
            }))
        }
    }
      , rm = g => g ? new Date(g).toLocaleString() : "Never";
    return h.jsxs("div", {
        className: "h-screen bg-[#0A0A0A] text-white flex flex-col overflow-hidden",
        children: [h.jsx("div", {
            ref: nn,
            className: "theme-overlay",
            style: {
                display: "none"
            }
        }), h.jsxs("div", {
            className: "h-9 bg-[#141414] flex items-center px-4 border-b border-[#222222]",
            "data-tauri-drag-region": !0,
            children: [h.jsxs("div", {
                className: "flex-1 flex items-center gap-4",
                "data-tauri-drag-region": !0,
                children: [h.jsx("span", {
                    className: "text-sm text-[#CCCCCC] font-medium",
                    children: "Talon"
                }), e && Xp()]
            }), h.jsxs("div", {
                className: "flex",
                children: [e && h.jsx(h.Fragment, {
                    children: M.exists && h.jsx("button", {
                        className: `window-control theme-toggle ${B ? "theme-active" : ""}`,
                        onClick: Ua,
                        title: B ? "Disable Custom Theme" : "Enable Custom Theme",
                        "data-tauri-drag-region": "false",
                        children: h.jsx(ji, {
                            size: 16,
                            className: "text-[#CCCCCC]"
                        })
                    })
                }), h.jsx("button", {
                    className: "window-control",
                    onClick: Dp,
                    title: "Minimize",
                    "data-tauri-drag-region": "false",
                    children: h.jsx(wv, {
                        size: 16,
                        className: "text-[#CCCCCC]"
                    })
                }), h.jsx("button", {
                    className: "window-control",
                    onClick: Ip,
                    title: "Maximize",
                    "data-tauri-drag-region": "false",
                    children: h.jsx(kv, {
                        size: 16,
                        className: "text-[#CCCCCC]"
                    })
                }), h.jsx("button", {
                    className: "window-control hover:bg-red-800",
                    onClick: Fp,
                    title: "Close",
                    "data-tauri-drag-region": "false",
                    children: h.jsx(Pc, {
                        size: 16,
                        className: "text-[#CCCCCC]"
                    })
                })]
            })]
        }), e ? h.jsxs("div", {
            className: "flex-1 flex overflow-hidden",
            children: [h.jsxs("div", {
                className: "w-12 bg-[#0D0D0D] border-r border-[#222222] flex flex-col items-center py-2",
                children: [h.jsx("button", {
                    className: `nav-button ${jt === "editor" ? "active" : ""}`,
                    title: "Editor",
                    onClick: () => Aa("editor"),
                    children: h.jsx(mv, {
                        size: 20
                    })
                }), h.jsx("button", {
                    className: `nav-button ${jt === "settings" ? "active" : ""}`,
                    title: "Settings",
                    onClick: () => Aa("settings"),
                    children: h.jsx(Sv, {
                        size: 20
                    })
                })]
            }), jt === "editor" ? h.jsxs(h.Fragment, {
                children: [h.jsxs("div", {
                    className: "flex-1 flex flex-col overflow-hidden",
                    children: [h.jsxs("div", {
                        className: "tabs-container",
                        children: [T.map(g => h.jsxs("div", {
                            className: `tab ${ue === g.id ? "active" : ""} ${g.isModified ? "modified" : ""}`,
                            onClick: () => Wp(g.id),
                            children: [h.jsx("div", {
                                className: "tab-icon",
                                children: h.jsx(Ol, {
                                    size: 14,
                                    className: "text-blue-400"
                                })
                            }), h.jsxs("span", {
                                className: "tab-title",
                                children: [g.title, g.isModified ? "*" : ""]
                            }), T.length > 1 && h.jsx("button", {
                                className: "tab-close",
                                onClick: j => Up(g.id, j),
                                children: h.jsx(Pc, {
                                    size: 12
                                })
                            })]
                        }, g.id)), h.jsx("button", {
                            className: "new-tab",
                            onClick: $p,
                            title: "New Tab",
                            children: h.jsx(xv, {
                                size: 16
                            })
                        })]
                    }), h.jsx("div", {
                        className: "editor-container",
                        children: h.jsx(Dy, {
                            height: "100%",
                            language: "lua",
                            theme: "custom-dark",
                            value: ((Va = T.find(g => g.id === ue)) == null ? void 0 : Va.content) || "",
                            onMount: Ap,
                            options: {
                                minimap: {
                                    enabled: Mt.showMinimap
                                },
                                fontSize: Mt.fontSize,
                                lineNumbers: "on",
                                roundedSelection: !1,
                                scrollBeyondLastLine: !1,
                                readOnly: !1,
                                automaticLayout: !0,
                                smoothScrolling: !0,
                                cursorSmoothCaretAnimation: "on",
                                cursorBlinking: "smooth",
                                padding: {
                                    top: 10,
                                    bottom: 10
                                }
                            }
                        }, ue)
                    }), h.jsxs("div", {
                        className: "editor-controls",
                        children: [h.jsxs("div", {
                            className: "left-controls",
                            children: [h.jsxs("button", {
                                className: `control-button ${_ ? "" : "disabled"}`,
                                onClick: Hp,
                                title: "Execute Script",
                                disabled: !_,
                                children: [h.jsx(jl, {
                                    size: 16,
                                    className: _ ? "text-[#BBBBBB]" : "text-[#444444]"
                                }), h.jsx("span", {
                                    children: "Execute"
                                })]
                            }), h.jsxs("button", {
                                className: "control-button",
                                onClick: bp,
                                title: "Save Script",
                                children: [h.jsx(Rc, {
                                    size: 16,
                                    className: "text-[#BBBBBB]"
                                }), h.jsx("span", {
                                    children: "Save"
                                })]
                            }), h.jsxs("button", {
                                className: "control-button",
                                onClick: Bp,
                                title: "Clear Editor",
                                children: [h.jsx(Mi, {
                                    size: 16,
                                    className: "text-[#BBBBBB]"
                                }), h.jsx("span", {
                                    children: "Clear"
                                })]
                            })]
                        }), h.jsx("div", {
                            className: "right-controls",
                            children: h.jsxs("button", {
                                className: Zp(),
                                onClick: Vp,
                                title: "Launch Roblox",
                                disabled: _ || k === "launching" || d !== "idle",
                                children: [Gp(), h.jsx("span", {
                                    children: Yp()
                                })]
                            })
                        })]
                    })]
                }), h.jsx("div", {
                    className: "resize-handle",
                    onMouseDown: Mp,
                    ref: Op
                }), h.jsxs("div", {
                    className: "bg-[#0D0D0D] border-l border-[#222222] flex flex-col",
                    style: {
                        width: `${Pp}px`
                    },
                    children: [h.jsx("div", {
                        className: "workspace-header",
                        children: h.jsx("span", {
                            className: "workspace-title",
                            children: "WORKSPACE"
                        })
                    }), h.jsx("div", {
                        className: "workspace-content",
                        children: ge.map(g => h.jsxs("div", {
                            className: "workspace-file group",
                            children: [V === g.id ? h.jsxs("div", {
                                className: "workspace-file-editing",
                                children: [h.jsx(Ol, {
                                    size: 14,
                                    className: "workspace-file-icon text-blue-400"
                                }), h.jsx("input", {
                                    ref: W,
                                    type: "text",
                                    className: "workspace-file-input",
                                    value: O,
                                    onChange: Kp,
                                    onBlur: () => Ha(g.id),
                                    onKeyDown: j => qp(j, g.id),
                                    autoFocus: !0
                                })]
                            }) : h.jsxs("div", {
                                className: "workspace-file-content",
                                onClick: () => Wa(g),
                                children: [h.jsx(Ol, {
                                    size: 14,
                                    className: "workspace-file-icon text-blue-400"
                                }), h.jsx("span", {
                                    className: "workspace-file-name",
                                    children: g.name
                                })]
                            }), V !== g.id && h.jsxs("div", {
                                className: "workspace-file-actions",
                                children: [h.jsx("button", {
                                    className: "workspace-file-action",
                                    onClick: () => Qp(g),
                                    title: "Rename file",
                                    children: h.jsx(_c, {
                                        size: 14,
                                        className: "text-yellow-400"
                                    })
                                }), h.jsx("button", {
                                    className: "workspace-file-action",
                                    onClick: () => Wa(g),
                                    title: "Open file",
                                    children: h.jsx(jl, {
                                        size: 14,
                                        className: "text-green-400"
                                    })
                                }), h.jsx("button", {
                                    className: "workspace-file-action",
                                    onClick: () => Jp(g),
                                    title: "Delete file",
                                    children: h.jsx(Mi, {
                                        size: 14,
                                        className: "text-red-400"
                                    })
                                })]
                            })]
                        }, g.id))
                    })]
                })]
            }) : h.jsxs("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [h.jsx("div", {
                    className: "settings-header bg-[#141414] border-b border-[#222222] px-6 py-3",
                    children: h.jsx("h1", {
                        className: "text-lg font-medium text-white",
                        children: "General"
                    })
                }), h.jsx("div", {
                    className: "settings-content flex-1 overflow-y-auto settings-container",
                    children: h.jsxs("div", {
                        className: "settings-section py-4 px-6 border-b border-[#222222]",
                        children: [h.jsxs("div", {
                            className: "setting-row flex items-center justify-between py-4",
                            children: [h.jsxs("div", {
                                className: "setting-info",
                                children: [h.jsx("h3", {
                                    className: "text-sm font-medium text-white",
                                    children: "Remove Talon"
                                }), h.jsx("p", {
                                    className: "text-xs text-[#999999] mt-1",
                                    children: "Removes Talon from injecting into the game."
                                })]
                            }), h.jsx("button", {
                                className: "setting-action-btn bg-[#1A1A1A] hover:bg-[#333333] text-[#CCCCCC] py-1 px-4 rounded transition-all duration-200 text-sm",
                                onClick: nm,
                                children: "Remove"
                            })]
                        }), h.jsxs("div", {
                            className: "setting-row flex items-center justify-between py-4",
                            children: [h.jsxs("div", {
                                className: "setting-info",
                                children: [h.jsx("h3", {
                                    className: "text-sm font-medium text-white",
                                    children: "Randomize HWID Seed"
                                }), h.jsxs("p", {
                                    className: "text-xs text-[#999999] mt-1",
                                    children: ["This will change the HWID seed used for the proxy upon injection.", Mt.hwid.lastRandomized && h.jsxs("span", {
                                        className: "block mt-1 text-[#777777]",
                                        children: ["Last randomized: ", rm(Mt.hwid.lastRandomized)]
                                    })]
                                })]
                            }), h.jsx("button", {
                                className: "setting-action-btn bg-[#1A1A1A] hover:bg-[#333333] text-[#CCCCCC] py-1 px-4 rounded transition-all duration-200 text-sm",
                                onClick: tm,
                                children: "Randomize"
                            })]
                        }), h.jsxs("div", {
                            className: "setting-row flex items-center justify-between py-4",
                            children: [h.jsxs("div", {
                                className: "setting-info",
                                children: [h.jsx("h3", {
                                    className: "text-sm font-medium text-white",
                                    children: "Update"
                                }), h.jsx("p", {
                                    className: "text-xs text-[#999999] mt-1",
                                    children: "Check for updates and install if available."
                                })]
                            }), h.jsxs("button", {
                                className: "setting-action-btn bg-[#1A1A1A] hover:bg-[#333333] text-[#CCCCCC] py-1 px-4 rounded transition-all duration-200 text-sm flex items-center gap-2",
                                onClick: em,
                                disabled: d !== "idle",
                                children: [d === "updating" ? h.jsx(Nc, {
                                    size: 14,
                                    className: "animate-spin text-yellow-400"
                                }) : h.jsx(Nc, {
                                    size: 14
                                }), h.jsx("span", {
                                    children: d === "updating" ? "Updating..." : d === "completed" ? "Updated" : "Update"
                                })]
                            })]
                        })]
                    })
                })]
            })]
        }) : h.jsx("div", {
            className: "flex-1 flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] to-[#141414]",
            children: h.jsxs("div", {
                className: "login-container w-80 p-8 rounded-lg backdrop-blur-sm bg-[#0D0D0D]/70 shadow-xl border border-[#222222] animate-fade-in",
                children: [h.jsxs("div", {
                    className: "flex flex-col items-center mb-8",
                    children: [h.jsx("h1", {
                        className: "text-2xl font-bold mb-2 text-white tracking-wide",
                        children: "TALON"
                    }), h.jsx("p", {
                        className: "text-[#999999] text-sm",
                        children: "Sign in to continue"
                    })]
                }), h.jsxs("form", {
                    onSubmit: Lp,
                    className: "flex flex-col gap-4",
                    children: [h.jsxs("div", {
                        className: "relative",
                        children: [h.jsx(vv, {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#666666] transition-colors duration-300 w-4 h-4 peer-focus:text-blue-400"
                        }), h.jsx("input", {
                            ref: u,
                            type: "email",
                            value: i,
                            onChange: g => o(g.target.value),
                            placeholder: "Email",
                            className: "w-full bg-[#181818] border border-[#333333] rounded-md py-2 pl-10 pr-3 text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 peer"
                        })]
                    }), h.jsxs("div", {
                        className: "relative",
                        children: [h.jsx(yv, {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#666666] transition-colors duration-300 w-4 h-4 peer-focus:text-blue-400"
                        }), h.jsx("input", {
                            type: "password",
                            value: l,
                            onChange: g => s(g.target.value),
                            placeholder: "Password",
                            className: "w-full bg-[#181818] border border-[#333333] rounded-md py-2 pl-10 pr-3 text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 peer"
                        })]
                    }), h.jsx("button", {
                        type: "submit",
                        disabled: n,
                        className: `mt-2 py-2 px-4 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium flex items-center justify-center gap-2 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 ${n ? "opacity-70" : ""}`,
                        children: n ? h.jsx(h.Fragment, {
                            children: h.jsx("span", {
                                className: "animate-pulse",
                                children: "Processing..."
                            })
                        }) : h.jsxs(h.Fragment, {
                            children: [h.jsx(gv, {
                                size: 18
                            }), h.jsx("span", {
                                children: "Sign in"
                            })]
                        })
                    })]
                })]
            })
        }), h.jsx(Ng, {
            position: "bottom-right",
            toastOptions: {
                duration: 3e3,
                style: {
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    padding: 0
                }
            }
        })]
    })
}
bf(document.getElementById("root")).render(h.jsx(E.StrictMode, {
    children: h.jsx(Cv, {})
}));
