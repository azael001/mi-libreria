var wi = Object.defineProperty;
var Ri = (e, t, r) => t in e ? wi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Rt = (e, t, r) => Ri(e, typeof t != "symbol" ? t + "" : t, r);
import * as N from "react";
import st, { forwardRef as Oi, useContext as $i, Children as Pi, isValidElement as Qt, cloneElement as Zt } from "react";
function _i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vr = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function ki() {
  if (Pn) return Ot;
  Pn = 1;
  var e = st, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, f, d) {
    var p, h = {}, g = null, C = null;
    d !== void 0 && (g = "" + d), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (p in f) n.call(f, p) && !i.hasOwnProperty(p) && (h[p] = f[p]);
    if (s && s.defaultProps) for (p in f = s.defaultProps, f) h[p] === void 0 && (h[p] = f[p]);
    return { $$typeof: t, type: s, key: g, ref: C, props: h, _owner: o.current };
  }
  return Ot.Fragment = r, Ot.jsx = a, Ot.jsxs = a, Ot;
}
var $t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Ai() {
  return _n || (_n = 1, process.env.NODE_ENV !== "production" && function() {
    var e = st, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = Symbol.iterator, y = "@@iterator";
    function m(u) {
      if (u === null || typeof u != "object")
        return null;
      var T = S && u[S] || u[y];
      return typeof T == "function" ? T : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(u) {
      {
        for (var T = arguments.length, k = new Array(T > 1 ? T - 1 : 0), z = 1; z < T; z++)
          k[z - 1] = arguments[z];
        R("error", u, k);
      }
    }
    function R(u, T, k) {
      {
        var z = E.ReactDebugCurrentFrame, oe = z.getStackAddendum();
        oe !== "" && (T += "%s", k = k.concat([oe]));
        var fe = k.map(function(Q) {
          return String(Q);
        });
        fe.unshift("Warning: " + T), Function.prototype.apply.call(console[u], console, fe);
      }
    }
    var x = !1, b = !1, I = !1, A = !1, Z = !1, J;
    J = Symbol.for("react.module.reference");
    function c(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === i || Z || u === o || u === d || u === p || A || u === C || x || b || I || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === h || u.$$typeof === a || u.$$typeof === s || u.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === J || u.getModuleId !== void 0));
    }
    function P(u, T, k) {
      var z = u.displayName;
      if (z)
        return z;
      var oe = T.displayName || T.name || "";
      return oe !== "" ? k + "(" + oe + ")" : k;
    }
    function j(u) {
      return u.displayName || "Context";
    }
    function D(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            var T = u;
            return j(T) + ".Consumer";
          case a:
            var k = u;
            return j(k._context) + ".Provider";
          case f:
            return P(u, u.render, "ForwardRef");
          case h:
            var z = u.displayName || null;
            return z !== null ? z : D(u.type) || "Memo";
          case g: {
            var oe = u, fe = oe._payload, Q = oe._init;
            try {
              return D(Q(fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, ue = 0, le, ye, Ee, Te, w, O, F;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function B() {
      {
        if (ue === 0) {
          le = console.log, ye = console.info, Ee = console.warn, Te = console.error, w = console.group, O = console.groupCollapsed, F = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        ue++;
      }
    }
    function K() {
      {
        if (ue--, ue === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, u, {
              value: le
            }),
            info: Y({}, u, {
              value: ye
            }),
            warn: Y({}, u, {
              value: Ee
            }),
            error: Y({}, u, {
              value: Te
            }),
            group: Y({}, u, {
              value: w
            }),
            groupCollapsed: Y({}, u, {
              value: O
            }),
            groupEnd: Y({}, u, {
              value: F
            })
          });
        }
        ue < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = E.ReactCurrentDispatcher, L;
    function q(u, T, k) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (oe) {
            var z = oe.stack.trim().match(/\n( *(at )?)/);
            L = z && z[1] || "";
          }
        return `
` + L + u;
      }
    }
    var H = !1, G;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Se();
    }
    function $(u, T) {
      if (!u || H)
        return "";
      {
        var k = G.get(u);
        if (k !== void 0)
          return k;
      }
      var z;
      H = !0;
      var oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var fe;
      fe = V.current, V.current = null, B();
      try {
        if (T) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (ke) {
              z = ke;
            }
            Reflect.construct(u, [], Q);
          } else {
            try {
              Q.call();
            } catch (ke) {
              z = ke;
            }
            u.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ke) {
            z = ke;
          }
          u();
        }
      } catch (ke) {
        if (ke && z && typeof ke.stack == "string") {
          for (var X = ke.stack.split(`
`), _e = z.stack.split(`
`), be = X.length - 1, Ce = _e.length - 1; be >= 1 && Ce >= 0 && X[be] !== _e[Ce]; )
            Ce--;
          for (; be >= 1 && Ce >= 0; be--, Ce--)
            if (X[be] !== _e[Ce]) {
              if (be !== 1 || Ce !== 1)
                do
                  if (be--, Ce--, Ce < 0 || X[be] !== _e[Ce]) {
                    var De = `
` + X[be].replace(" at new ", " at ");
                    return u.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", u.displayName)), typeof u == "function" && G.set(u, De), De;
                  }
                while (be >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        H = !1, V.current = fe, K(), Error.prepareStackTrace = oe;
      }
      var dt = u ? u.displayName || u.name : "", at = dt ? q(dt) : "";
      return typeof u == "function" && G.set(u, at), at;
    }
    function Oe(u, T, k) {
      return $(u, !1);
    }
    function M(u) {
      var T = u.prototype;
      return !!(T && T.isReactComponent);
    }
    function Pe(u, T, k) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return $(u, M(u));
      if (typeof u == "string")
        return q(u);
      switch (u) {
        case d:
          return q("Suspense");
        case p:
          return q("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case f:
            return Oe(u.render);
          case h:
            return Pe(u.type, T, k);
          case g: {
            var z = u, oe = z._payload, fe = z._init;
            try {
              return Pe(fe(oe), T, k);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, ot = {}, it = E.ReactDebugCurrentFrame;
    function We(u) {
      if (u) {
        var T = u._owner, k = Pe(u.type, u._source, T ? T.type : null);
        it.setExtraStackFrame(k);
      } else
        it.setExtraStackFrame(null);
    }
    function Tr(u, T, k, z, oe) {
      {
        var fe = Function.call.bind(Be);
        for (var Q in u)
          if (fe(u, Q)) {
            var X = void 0;
            try {
              if (typeof u[Q] != "function") {
                var _e = Error((z || "React class") + ": " + k + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              X = u[Q](T, Q, z, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (be) {
              X = be;
            }
            X && !(X instanceof Error) && (We(oe), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", k, Q, typeof X), We(null)), X instanceof Error && !(X.message in ot) && (ot[X.message] = !0, We(oe), _("Failed %s type: %s", k, X.message), We(null));
          }
      }
    }
    var Ut = Array.isArray;
    function Tt(u) {
      return Ut(u);
    }
    function U(u) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, k = T && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return k;
      }
    }
    function Yt(u) {
      try {
        return qt(u), !1;
      } catch {
        return !0;
      }
    }
    function qt(u) {
      return "" + u;
    }
    function wt(u) {
      if (Yt(u))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", U(u)), qt(u);
    }
    var ut = E.ReactCurrentOwner, si = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Sn, Cn, wr;
    wr = {};
    function ci(u) {
      if (Be.call(u, "ref")) {
        var T = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function li(u) {
      if (Be.call(u, "key")) {
        var T = Object.getOwnPropertyDescriptor(u, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function ui(u, T) {
      if (typeof u.ref == "string" && ut.current && T && ut.current.stateNode !== T) {
        var k = D(ut.current.type);
        wr[k] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(ut.current.type), u.ref), wr[k] = !0);
      }
    }
    function fi(u, T) {
      {
        var k = function() {
          Sn || (Sn = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        k.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function di(u, T) {
      {
        var k = function() {
          Cn || (Cn = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        k.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var pi = function(u, T, k, z, oe, fe, Q) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: T,
        ref: k,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: fe
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function hi(u, T, k, z, oe) {
      {
        var fe, Q = {}, X = null, _e = null;
        k !== void 0 && (wt(k), X = "" + k), li(T) && (wt(T.key), X = "" + T.key), ci(T) && (_e = T.ref, ui(T, oe));
        for (fe in T)
          Be.call(T, fe) && !si.hasOwnProperty(fe) && (Q[fe] = T[fe]);
        if (u && u.defaultProps) {
          var be = u.defaultProps;
          for (fe in be)
            Q[fe] === void 0 && (Q[fe] = be[fe]);
        }
        if (X || _e) {
          var Ce = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          X && fi(Q, Ce), _e && di(Q, Ce);
        }
        return pi(u, X, _e, oe, z, ut.current, Q);
      }
    }
    var Rr = E.ReactCurrentOwner, xn = E.ReactDebugCurrentFrame;
    function ft(u) {
      if (u) {
        var T = u._owner, k = Pe(u.type, u._source, T ? T.type : null);
        xn.setExtraStackFrame(k);
      } else
        xn.setExtraStackFrame(null);
    }
    var Or;
    Or = !1;
    function $r(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function En() {
      {
        if (Rr.current) {
          var u = D(Rr.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function mi(u) {
      return "";
    }
    var Tn = {};
    function gi(u) {
      {
        var T = En();
        if (!T) {
          var k = typeof u == "string" ? u : u.displayName || u.name;
          k && (T = `

Check the top-level render call using <` + k + ">.");
        }
        return T;
      }
    }
    function wn(u, T) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var k = gi(T);
        if (Tn[k])
          return;
        Tn[k] = !0;
        var z = "";
        u && u._owner && u._owner !== Rr.current && (z = " It was passed a child from " + D(u._owner.type) + "."), ft(u), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, z), ft(null);
      }
    }
    function Rn(u, T) {
      {
        if (typeof u != "object")
          return;
        if (Tt(u))
          for (var k = 0; k < u.length; k++) {
            var z = u[k];
            $r(z) && wn(z, T);
          }
        else if ($r(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var oe = m(u);
          if (typeof oe == "function" && oe !== u.entries)
            for (var fe = oe.call(u), Q; !(Q = fe.next()).done; )
              $r(Q.value) && wn(Q.value, T);
        }
      }
    }
    function yi(u) {
      {
        var T = u.type;
        if (T == null || typeof T == "string")
          return;
        var k;
        if (typeof T == "function")
          k = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === h))
          k = T.propTypes;
        else
          return;
        if (k) {
          var z = D(T);
          Tr(k, u.props, "prop", z, u);
        } else if (T.PropTypes !== void 0 && !Or) {
          Or = !0;
          var oe = D(T);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bi(u) {
      {
        for (var T = Object.keys(u.props), k = 0; k < T.length; k++) {
          var z = T[k];
          if (z !== "children" && z !== "key") {
            ft(u), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), ft(null);
            break;
          }
        }
        u.ref !== null && (ft(u), _("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    var On = {};
    function $n(u, T, k, z, oe, fe) {
      {
        var Q = c(u);
        if (!Q) {
          var X = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = mi();
          _e ? X += _e : X += En();
          var be;
          u === null ? be = "null" : Tt(u) ? be = "array" : u !== void 0 && u.$$typeof === t ? (be = "<" + (D(u.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : be = typeof u, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, X);
        }
        var Ce = hi(u, T, k, oe, fe);
        if (Ce == null)
          return Ce;
        if (Q) {
          var De = T.children;
          if (De !== void 0)
            if (z)
              if (Tt(De)) {
                for (var dt = 0; dt < De.length; dt++)
                  Rn(De[dt], u);
                Object.freeze && Object.freeze(De);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rn(De, u);
        }
        if (Be.call(T, "key")) {
          var at = D(u), ke = Object.keys(T).filter(function(Ti) {
            return Ti !== "key";
          }), Pr = ke.length > 0 ? "{key: someKey, " + ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!On[at + Pr]) {
            var Ei = ke.length > 0 ? "{" + ke.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pr, at, Ei, at), On[at + Pr] = !0;
          }
        }
        return u === n ? bi(Ce) : yi(Ce), Ce;
      }
    }
    function vi(u, T, k) {
      return $n(u, T, k, !0);
    }
    function Si(u, T, k) {
      return $n(u, T, k, !1);
    }
    var Ci = Si, xi = vi;
    $t.Fragment = n, $t.jsx = Ci, $t.jsxs = xi;
  }()), $t;
}
process.env.NODE_ENV === "production" ? Vr.exports = ki() : Vr.exports = Ai();
var ee = Vr.exports, Lr = { exports: {} }, Gt = { exports: {} }, ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function Ii() {
  if (kn) return ie;
  kn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function R(b) {
    if (typeof b == "object" && b !== null) {
      var I = b.$$typeof;
      switch (I) {
        case t:
          switch (b = b.type, b) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case p:
                case S:
                case C:
                case a:
                  return b;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function x(b) {
    return R(b) === d;
  }
  return ie.AsyncMode = f, ie.ConcurrentMode = d, ie.ContextConsumer = s, ie.ContextProvider = a, ie.Element = t, ie.ForwardRef = p, ie.Fragment = n, ie.Lazy = S, ie.Memo = C, ie.Portal = r, ie.Profiler = i, ie.StrictMode = o, ie.Suspense = h, ie.isAsyncMode = function(b) {
    return x(b) || R(b) === f;
  }, ie.isConcurrentMode = x, ie.isContextConsumer = function(b) {
    return R(b) === s;
  }, ie.isContextProvider = function(b) {
    return R(b) === a;
  }, ie.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ie.isForwardRef = function(b) {
    return R(b) === p;
  }, ie.isFragment = function(b) {
    return R(b) === n;
  }, ie.isLazy = function(b) {
    return R(b) === S;
  }, ie.isMemo = function(b) {
    return R(b) === C;
  }, ie.isPortal = function(b) {
    return R(b) === r;
  }, ie.isProfiler = function(b) {
    return R(b) === i;
  }, ie.isStrictMode = function(b) {
    return R(b) === o;
  }, ie.isSuspense = function(b) {
    return R(b) === h;
  }, ie.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === h || b === g || typeof b == "object" && b !== null && (b.$$typeof === S || b.$$typeof === C || b.$$typeof === a || b.$$typeof === s || b.$$typeof === p || b.$$typeof === m || b.$$typeof === E || b.$$typeof === _ || b.$$typeof === y);
  }, ie.typeOf = R, ie;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An;
function Mi() {
  return An || (An = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function R($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === d || $ === i || $ === o || $ === h || $ === g || typeof $ == "object" && $ !== null && ($.$$typeof === S || $.$$typeof === C || $.$$typeof === a || $.$$typeof === s || $.$$typeof === p || $.$$typeof === m || $.$$typeof === E || $.$$typeof === _ || $.$$typeof === y);
    }
    function x($) {
      if (typeof $ == "object" && $ !== null) {
        var Oe = $.$$typeof;
        switch (Oe) {
          case t:
            var M = $.type;
            switch (M) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case h:
                return M;
              default:
                var Pe = M && M.$$typeof;
                switch (Pe) {
                  case s:
                  case p:
                  case S:
                  case C:
                  case a:
                    return Pe;
                  default:
                    return Oe;
                }
            }
          case r:
            return Oe;
        }
      }
    }
    var b = f, I = d, A = s, Z = a, J = t, c = p, P = n, j = S, D = C, Y = r, ue = i, le = o, ye = h, Ee = !1;
    function Te($) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w($) || x($) === f;
    }
    function w($) {
      return x($) === d;
    }
    function O($) {
      return x($) === s;
    }
    function F($) {
      return x($) === a;
    }
    function W($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function B($) {
      return x($) === p;
    }
    function K($) {
      return x($) === n;
    }
    function V($) {
      return x($) === S;
    }
    function L($) {
      return x($) === C;
    }
    function q($) {
      return x($) === r;
    }
    function H($) {
      return x($) === i;
    }
    function G($) {
      return x($) === o;
    }
    function Se($) {
      return x($) === h;
    }
    ae.AsyncMode = b, ae.ConcurrentMode = I, ae.ContextConsumer = A, ae.ContextProvider = Z, ae.Element = J, ae.ForwardRef = c, ae.Fragment = P, ae.Lazy = j, ae.Memo = D, ae.Portal = Y, ae.Profiler = ue, ae.StrictMode = le, ae.Suspense = ye, ae.isAsyncMode = Te, ae.isConcurrentMode = w, ae.isContextConsumer = O, ae.isContextProvider = F, ae.isElement = W, ae.isForwardRef = B, ae.isFragment = K, ae.isLazy = V, ae.isMemo = L, ae.isPortal = q, ae.isProfiler = H, ae.isStrictMode = G, ae.isSuspense = Se, ae.isValidElementType = R, ae.typeOf = x;
  }()), ae;
}
var In;
function Zr() {
  return In || (In = 1, process.env.NODE_ENV === "production" ? Gt.exports = Ii() : Gt.exports = Mi()), Gt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _r, Mn;
function Ni() {
  if (Mn) return _r;
  Mn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var f = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _r = o() ? Object.assign : function(i, a) {
    for (var s, f = n(i), d, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var h in s)
        t.call(s, h) && (f[h] = s[h]);
      if (e) {
        d = e(s);
        for (var g = 0; g < d.length; g++)
          r.call(s, d[g]) && (f[d[g]] = s[d[g]]);
      }
    }
    return f;
  }, _r;
}
var kr, Nn;
function en() {
  if (Nn) return kr;
  Nn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kr = e, kr;
}
var Ar, jn;
function bo() {
  return jn || (jn = 1, Ar = Function.call.bind(Object.prototype.hasOwnProperty)), Ar;
}
var Ir, Bn;
function ji() {
  if (Bn) return Ir;
  Bn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = en(), r = {}, n = bo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var h;
          try {
            if (typeof i[p] != "function") {
              var g = Error(
                (f || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = i[p](a, p, f, s, null, t);
          } catch (S) {
            h = S;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var C = d ? d() : "";
            e(
              "Failed " + s + " type: " + h.message + (C ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ir = o, Ir;
}
var Mr, Dn;
function Bi() {
  if (Dn) return Mr;
  Dn = 1;
  var e = Zr(), t = Ni(), r = en(), n = bo(), o = ji(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var f = "Warning: " + s;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Mr = function(s, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(w) {
      var O = w && (d && w[d] || w[p]);
      if (typeof O == "function")
        return O;
    }
    var g = "<<anonymous>>", C = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: _(),
      arrayOf: R,
      element: x(),
      elementType: b(),
      instanceOf: I,
      node: c(),
      objectOf: Z,
      oneOf: A,
      oneOfType: J,
      shape: j,
      exact: D
    };
    function S(w, O) {
      return w === O ? w !== 0 || 1 / w === 1 / O : w !== w && O !== O;
    }
    function y(w, O) {
      this.message = w, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function m(w) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, F = 0;
      function W(K, V, L, q, H, G, Se) {
        if (q = q || g, G = G || L, Se !== r) {
          if (f) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = q + ":" + L;
            !O[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[Oe] = !0, F++);
          }
        }
        return V[L] == null ? K ? V[L] === null ? new y("The " + H + " `" + G + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new y("The " + H + " `" + G + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : w(V, L, q, H, G);
      }
      var B = W.bind(null, !1);
      return B.isRequired = W.bind(null, !0), B;
    }
    function E(w) {
      function O(F, W, B, K, V, L) {
        var q = F[W], H = le(q);
        if (H !== w) {
          var G = ye(q);
          return new y(
            "Invalid " + K + " `" + V + "` of type " + ("`" + G + "` supplied to `" + B + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return m(O);
    }
    function _() {
      return m(a);
    }
    function R(w) {
      function O(F, W, B, K, V) {
        if (typeof w != "function")
          return new y("Property `" + V + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var L = F[W];
        if (!Array.isArray(L)) {
          var q = le(L);
          return new y("Invalid " + K + " `" + V + "` of type " + ("`" + q + "` supplied to `" + B + "`, expected an array."));
        }
        for (var H = 0; H < L.length; H++) {
          var G = w(L, H, B, K, V + "[" + H + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return m(O);
    }
    function x() {
      function w(O, F, W, B, K) {
        var V = O[F];
        if (!s(V)) {
          var L = le(V);
          return new y("Invalid " + B + " `" + K + "` of type " + ("`" + L + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(w);
    }
    function b() {
      function w(O, F, W, B, K) {
        var V = O[F];
        if (!e.isValidElementType(V)) {
          var L = le(V);
          return new y("Invalid " + B + " `" + K + "` of type " + ("`" + L + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(w);
    }
    function I(w) {
      function O(F, W, B, K, V) {
        if (!(F[W] instanceof w)) {
          var L = w.name || g, q = Te(F[W]);
          return new y("Invalid " + K + " `" + V + "` of type " + ("`" + q + "` supplied to `" + B + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return m(O);
    }
    function A(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(F, W, B, K, V) {
        for (var L = F[W], q = 0; q < w.length; q++)
          if (S(L, w[q]))
            return null;
        var H = JSON.stringify(w, function(Se, $) {
          var Oe = ye($);
          return Oe === "symbol" ? String($) : $;
        });
        return new y("Invalid " + K + " `" + V + "` of value `" + String(L) + "` " + ("supplied to `" + B + "`, expected one of " + H + "."));
      }
      return m(O);
    }
    function Z(w) {
      function O(F, W, B, K, V) {
        if (typeof w != "function")
          return new y("Property `" + V + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var L = F[W], q = le(L);
        if (q !== "object")
          return new y("Invalid " + K + " `" + V + "` of type " + ("`" + q + "` supplied to `" + B + "`, expected an object."));
        for (var H in L)
          if (n(L, H)) {
            var G = w(L, H, B, K, V + "." + H, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return m(O);
    }
    function J(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < w.length; O++) {
        var F = w[O];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(F) + " at index " + O + "."
          ), a;
      }
      function W(B, K, V, L, q) {
        for (var H = [], G = 0; G < w.length; G++) {
          var Se = w[G], $ = Se(B, K, V, L, q, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && H.push($.data.expectedType);
        }
        var Oe = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new y("Invalid " + L + " `" + q + "` supplied to " + ("`" + V + "`" + Oe + "."));
      }
      return m(W);
    }
    function c() {
      function w(O, F, W, B, K) {
        return Y(O[F]) ? null : new y("Invalid " + B + " `" + K + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return m(w);
    }
    function P(w, O, F, W, B) {
      return new y(
        (w || "React class") + ": " + O + " type `" + F + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function j(w) {
      function O(F, W, B, K, V) {
        var L = F[W], q = le(L);
        if (q !== "object")
          return new y("Invalid " + K + " `" + V + "` of type `" + q + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var H in w) {
          var G = w[H];
          if (typeof G != "function")
            return P(B, K, V, H, ye(G));
          var Se = G(L, H, B, K, V + "." + H, r);
          if (Se)
            return Se;
        }
        return null;
      }
      return m(O);
    }
    function D(w) {
      function O(F, W, B, K, V) {
        var L = F[W], q = le(L);
        if (q !== "object")
          return new y("Invalid " + K + " `" + V + "` of type `" + q + "` " + ("supplied to `" + B + "`, expected `object`."));
        var H = t({}, F[W], w);
        for (var G in H) {
          var Se = w[G];
          if (n(w, G) && typeof Se != "function")
            return P(B, K, V, G, ye(Se));
          if (!Se)
            return new y(
              "Invalid " + K + " `" + V + "` key `" + G + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(F[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var $ = Se(L, G, B, K, V + "." + G, r);
          if ($)
            return $;
        }
        return null;
      }
      return m(O);
    }
    function Y(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(Y);
          if (w === null || s(w))
            return !0;
          var O = h(w);
          if (O) {
            var F = O.call(w), W;
            if (O !== w.entries) {
              for (; !(W = F.next()).done; )
                if (!Y(W.value))
                  return !1;
            } else
              for (; !(W = F.next()).done; ) {
                var B = W.value;
                if (B && !Y(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(w, O) {
      return w === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function le(w) {
      var O = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : ue(O, w) ? "symbol" : O;
    }
    function ye(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var O = le(w);
      if (O === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function Ee(w) {
      var O = ye(w);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Te(w) {
      return !w.constructor || !w.constructor.name ? g : w.constructor.name;
    }
    return C.checkPropTypes = o, C.resetWarningCache = o.resetWarningCache, C.PropTypes = C, C;
  }, Mr;
}
var Nr, zn;
function Di() {
  if (zn) return Nr;
  zn = 1;
  var e = en();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Nr = function() {
    function n(a, s, f, d, p, h) {
      if (h !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Nr;
}
if (process.env.NODE_ENV !== "production") {
  var zi = Zr(), Fi = !0;
  Lr.exports = Bi()(zi.isElement, Fi);
} else
  Lr.exports = Di()();
var Vi = Lr.exports;
const l = /* @__PURE__ */ _i(Vi);
function vo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = vo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function we() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = vo(e)) && (n && (n += " "), n += t);
  return n;
}
function or(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const f = s;
              r[o][f] = or(i[f], a[f]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function et(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (a += (s === !0 ? "" : " ") + t(d), s = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
function tt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Li(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function tn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Li(e, t, r);
}
function Wi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function rt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return rt(Wi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : tt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : tt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ui = (e) => {
  const t = rt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, kt = (e, t) => {
  try {
    return Ui(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function ur(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function So(e) {
  e = rt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, p = (d + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let s = "rgb";
  const f = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", f.push(t[3])), ur({
    type: s,
    values: f
  });
}
function Wr(e) {
  e = rt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? rt(So(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Fn(e, t) {
  const r = Wr(e), n = Wr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ge(e, t) {
  return e = rt(e), t = tn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ur(e);
}
function Kt(e, t, r) {
  try {
    return Ge(e, t);
  } catch {
    return e;
  }
}
function rn(e, t) {
  if (e = rt(e), t = tn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return ur(e);
}
function de(e, t, r) {
  try {
    return rn(e, t);
  } catch {
    return e;
  }
}
function nn(e, t) {
  if (e = rt(e), t = tn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return ur(e);
}
function pe(e, t, r) {
  try {
    return nn(e, t);
  } catch {
    return e;
  }
}
function Yi(e, t = 0.15) {
  return Wr(e) > 0.5 ? rn(e, t) : nn(e, t);
}
function Ht(e, t, r) {
  try {
    return Yi(e, t);
  } catch {
    return e;
  }
}
function qi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Co = (e) => qi(e) && e !== "classes";
function ne(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : tt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ke(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xo(e) {
  if (!Ke(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = xo(e[r]);
  }), t;
}
function Me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ke(e) && Ke(t) && Object.keys(t).forEach((o) => {
    Ke(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ke(e[o]) ? n[o] = Me(e[o], t[o], r) : r.clone ? n[o] = Ke(t[o]) ? xo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function It(e, t) {
  return t ? Me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const nt = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {};
function Gi(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Ki(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Hi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : tt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Xi(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const f = t(e.breakpoints.not(...s), a);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const fr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Vn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${fr[e]}px)`
}, Ji = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : fr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ze(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Vn;
    return t.reduce((a, s, f) => (a[i.up(i.keys[f])] = r(t[f]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Vn;
    return Object.keys(t).reduce((a, s) => {
      if (Ki(i.keys, s)) {
        const f = Hi(n.containerQueries ? n : Ji, s);
        f && (a[f] = r(t[s], s));
      } else if (Object.keys(i.values || fr).includes(s)) {
        const f = i.up(s);
        a[f] = r(t[s], s);
      } else {
        const f = s;
        a[f] = t[f];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Qi(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Zi(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function dr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ir(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = dr(e, r) || n, t && (o = t(o, n, e)), o;
}
function ve(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], f = a.theme, d = dr(f, n) || {};
    return Ze(a, s, (h) => {
      let g = ir(d, o, h);
      return h === g && typeof h == "string" && (g = ir(d, o, `${t}${h === "default" ? "" : ne(h)}`, h)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: nt
  } : {}, i.filterProps = [t], i;
}
function ea(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const ta = {
  m: "margin",
  p: "padding"
}, ra = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ln = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, na = ea((e) => {
  if (e.length > 2)
    if (Ln[e])
      e = Ln[e];
    else
      return [e];
  const [t, r] = e.split(""), n = ta[t], o = ra[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), pr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], hr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], oa = [...pr, ...hr];
function Ft(e, t, r, n) {
  const o = dr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function on(e) {
  return Ft(e, "spacing", 8, "spacing");
}
function Vt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function ia(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Vt(t, r), n), {});
}
function aa(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = na(r), i = ia(o, n), a = e[r];
  return Ze(e, a, i);
}
function Eo(e, t) {
  const r = on(e.theme);
  return Object.keys(e).map((n) => aa(e, t, n, r)).reduce(It, {});
}
function me(e) {
  return Eo(e, pr);
}
me.propTypes = process.env.NODE_ENV !== "production" ? pr.reduce((e, t) => (e[t] = nt, e), {}) : {};
me.filterProps = pr;
function ge(e) {
  return Eo(e, hr);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? hr.reduce((e, t) => (e[t] = nt, e), {}) : {};
ge.filterProps = hr;
process.env.NODE_ENV !== "production" && oa.reduce((e, t) => (e[t] = nt, e), {});
function mr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? It(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, t) {
  return ve({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const sa = Ve("border", Fe), ca = Ve("borderTop", Fe), la = Ve("borderRight", Fe), ua = Ve("borderBottom", Fe), fa = Ve("borderLeft", Fe), da = Ve("borderColor"), pa = Ve("borderTopColor"), ha = Ve("borderRightColor"), ma = Ve("borderBottomColor"), ga = Ve("borderLeftColor"), ya = Ve("outline", Fe), ba = Ve("outlineColor"), gr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ft(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Vt(t, n)
    });
    return Ze(e, e.borderRadius, r);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: nt
} : {};
gr.filterProps = ["borderRadius"];
mr(sa, ca, la, ua, fa, da, pa, ha, ma, ga, gr, ya, ba);
const yr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ft(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Vt(t, n)
    });
    return Ze(e, e.gap, r);
  }
  return null;
};
yr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: nt
} : {};
yr.filterProps = ["gap"];
const br = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ft(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Vt(t, n)
    });
    return Ze(e, e.columnGap, r);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: nt
} : {};
br.filterProps = ["columnGap"];
const vr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ft(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Vt(t, n)
    });
    return Ze(e, e.rowGap, r);
  }
  return null;
};
vr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: nt
} : {};
vr.filterProps = ["rowGap"];
const va = ve({
  prop: "gridColumn"
}), Sa = ve({
  prop: "gridRow"
}), Ca = ve({
  prop: "gridAutoFlow"
}), xa = ve({
  prop: "gridAutoColumns"
}), Ea = ve({
  prop: "gridAutoRows"
}), Ta = ve({
  prop: "gridTemplateColumns"
}), wa = ve({
  prop: "gridTemplateRows"
}), Ra = ve({
  prop: "gridTemplateAreas"
}), Oa = ve({
  prop: "gridArea"
});
mr(yr, br, vr, va, Sa, Ca, xa, Ea, Ta, wa, Ra, Oa);
function vt(e, t) {
  return t === "grey" ? t : e;
}
const $a = ve({
  prop: "color",
  themeKey: "palette",
  transform: vt
}), Pa = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: vt
}), _a = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: vt
});
mr($a, Pa, _a);
function Ie(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ka = ve({
  prop: "width",
  transform: Ie
}), an = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, f;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || fr[r];
      return n ? ((f = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ie(r)
      };
    };
    return Ze(e, e.maxWidth, t);
  }
  return null;
};
an.filterProps = ["maxWidth"];
const Aa = ve({
  prop: "minWidth",
  transform: Ie
}), Ia = ve({
  prop: "height",
  transform: Ie
}), Ma = ve({
  prop: "maxHeight",
  transform: Ie
}), Na = ve({
  prop: "minHeight",
  transform: Ie
});
ve({
  prop: "size",
  cssProperty: "width",
  transform: Ie
});
ve({
  prop: "size",
  cssProperty: "height",
  transform: Ie
});
const ja = ve({
  prop: "boxSizing"
});
mr(ka, an, Aa, Ia, Ma, Na, ja);
const Lt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Fe
  },
  borderTop: {
    themeKey: "borders",
    transform: Fe
  },
  borderRight: {
    themeKey: "borders",
    transform: Fe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Fe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Fe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Fe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: gr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: vt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: vt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: vt
  },
  // spacing
  p: {
    style: ge
  },
  pt: {
    style: ge
  },
  pr: {
    style: ge
  },
  pb: {
    style: ge
  },
  pl: {
    style: ge
  },
  px: {
    style: ge
  },
  py: {
    style: ge
  },
  padding: {
    style: ge
  },
  paddingTop: {
    style: ge
  },
  paddingRight: {
    style: ge
  },
  paddingBottom: {
    style: ge
  },
  paddingLeft: {
    style: ge
  },
  paddingX: {
    style: ge
  },
  paddingY: {
    style: ge
  },
  paddingInline: {
    style: ge
  },
  paddingInlineStart: {
    style: ge
  },
  paddingInlineEnd: {
    style: ge
  },
  paddingBlock: {
    style: ge
  },
  paddingBlockStart: {
    style: ge
  },
  paddingBlockEnd: {
    style: ge
  },
  m: {
    style: me
  },
  mt: {
    style: me
  },
  mr: {
    style: me
  },
  mb: {
    style: me
  },
  ml: {
    style: me
  },
  mx: {
    style: me
  },
  my: {
    style: me
  },
  margin: {
    style: me
  },
  marginTop: {
    style: me
  },
  marginRight: {
    style: me
  },
  marginBottom: {
    style: me
  },
  marginLeft: {
    style: me
  },
  marginX: {
    style: me
  },
  marginY: {
    style: me
  },
  marginInline: {
    style: me
  },
  marginInlineStart: {
    style: me
  },
  marginInlineEnd: {
    style: me
  },
  marginBlock: {
    style: me
  },
  marginBlockStart: {
    style: me
  },
  marginBlockEnd: {
    style: me
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: yr
  },
  rowGap: {
    style: vr
  },
  columnGap: {
    style: br
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ie
  },
  maxWidth: {
    style: an
  },
  minWidth: {
    transform: Ie
  },
  height: {
    transform: Ie
  },
  maxHeight: {
    transform: Ie
  },
  minHeight: {
    transform: Ie
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ba(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Da(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function za() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: f = r,
      themeKey: d,
      transform: p,
      style: h
    } = s;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = dr(o, d) || {};
    return h ? h(a) : Ze(a, n, (S) => {
      let y = ir(g, p, S);
      return S === y && typeof S == "string" && (y = ir(g, p, `${r}${S === "default" ? "" : ne(S)}`, S)), f === !1 ? y : {
        [f]: y
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Lt;
    function a(s) {
      let f = s;
      if (typeof s == "function")
        f = s(o);
      else if (typeof s != "object")
        return s;
      if (!f)
        return null;
      const d = Qi(o.breakpoints), p = Object.keys(d);
      let h = d;
      return Object.keys(f).forEach((g) => {
        const C = Da(f[g], o);
        if (C != null)
          if (typeof C == "object")
            if (i[g])
              h = It(h, e(g, C, o, i));
            else {
              const S = Ze({
                theme: o
              }, C, (y) => ({
                [g]: y
              }));
              Ba(S, C) ? h[g] = t({
                sx: C,
                theme: o
              }) : h = It(h, S);
            }
          else
            h = It(h, e(g, C, o, i));
      }), Gi(o, Zi(p, h));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const Ct = za();
Ct.filterProps = ["sx"];
const Fa = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? Lt;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Va(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = Fa(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return Ke(s) ? {
      ...n,
      ...s
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
function ar() {
  return ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ar.apply(null, arguments);
}
function To(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var La = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Wa = /* @__PURE__ */ To(
  function(e) {
    return La.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ua = !1;
function Ya(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function qa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ga = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Ua : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ya(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), $e = "-ms-", sr = "-moz-", te = "-webkit-", wo = "comm", sn = "rule", cn = "decl", Ka = "@import", Ro = "@keyframes", Ha = "@layer", Xa = Math.abs, Sr = String.fromCharCode, Ja = Object.assign;
function Qa(e, t) {
  return Re(e, 0) ^ 45 ? (((t << 2 ^ Re(e, 0)) << 2 ^ Re(e, 1)) << 2 ^ Re(e, 2)) << 2 ^ Re(e, 3) : 0;
}
function Oo(e) {
  return e.trim();
}
function Za(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function re(e, t, r) {
  return e.replace(t, r);
}
function Ur(e, t) {
  return e.indexOf(t);
}
function Re(e, t) {
  return e.charCodeAt(t) | 0;
}
function Mt(e, t, r) {
  return e.slice(t, r);
}
function Ye(e) {
  return e.length;
}
function ln(e) {
  return e.length;
}
function Xt(e, t) {
  return t.push(e), e;
}
function es(e, t) {
  return e.map(t).join("");
}
var Cr = 1, xt = 1, $o = 0, Ae = 0, xe = 0, Et = "";
function xr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Cr, column: xt, length: a, return: "" };
}
function Pt(e, t) {
  return Ja(xr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ts() {
  return xe;
}
function rs() {
  return xe = Ae > 0 ? Re(Et, --Ae) : 0, xt--, xe === 10 && (xt = 1, Cr--), xe;
}
function Ne() {
  return xe = Ae < $o ? Re(Et, Ae++) : 0, xt++, xe === 10 && (xt = 1, Cr++), xe;
}
function He() {
  return Re(Et, Ae);
}
function er() {
  return Ae;
}
function Wt(e, t) {
  return Mt(Et, e, t);
}
function Nt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Po(e) {
  return Cr = xt = 1, $o = Ye(Et = e), Ae = 0, [];
}
function _o(e) {
  return Et = "", e;
}
function tr(e) {
  return Oo(Wt(Ae - 1, Yr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ns(e) {
  for (; (xe = He()) && xe < 33; )
    Ne();
  return Nt(e) > 2 || Nt(xe) > 3 ? "" : " ";
}
function os(e, t) {
  for (; --t && Ne() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return Wt(e, er() + (t < 6 && He() == 32 && Ne() == 32));
}
function Yr(e) {
  for (; Ne(); )
    switch (xe) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yr(xe);
        break;
      case 40:
        e === 41 && Yr(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Ae;
}
function is(e, t) {
  for (; Ne() && e + xe !== 57; )
    if (e + xe === 84 && He() === 47)
      break;
  return "/*" + Wt(t, Ae - 1) + "*" + Sr(e === 47 ? e : Ne());
}
function as(e) {
  for (; !Nt(He()); )
    Ne();
  return Wt(e, Ae);
}
function ss(e) {
  return _o(rr("", null, null, null, [""], e = Po(e), 0, [0], e));
}
function rr(e, t, r, n, o, i, a, s, f) {
  for (var d = 0, p = 0, h = a, g = 0, C = 0, S = 0, y = 1, m = 1, E = 1, _ = 0, R = "", x = o, b = i, I = n, A = R; m; )
    switch (S = _, _ = Ne()) {
      case 40:
        if (S != 108 && Re(A, h - 1) == 58) {
          Ur(A += re(tr(_), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += tr(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += ns(S);
        break;
      case 92:
        A += os(er() - 1, 7);
        continue;
      case 47:
        switch (He()) {
          case 42:
          case 47:
            Xt(cs(is(Ne(), er()), t, r), f);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * y:
        s[d++] = Ye(A) * E;
      case 125 * y:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            m = 0;
          case 59 + p:
            E == -1 && (A = re(A, /\f/g, "")), C > 0 && Ye(A) - h && Xt(C > 32 ? Un(A + ";", n, r, h - 1) : Un(re(A, " ", "") + ";", n, r, h - 2), f);
            break;
          case 59:
            A += ";";
          default:
            if (Xt(I = Wn(A, t, r, d, p, o, s, R, x = [], b = [], h), i), _ === 123)
              if (p === 0)
                rr(A, t, I, I, x, i, h, s, b);
              else
                switch (g === 99 && Re(A, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rr(e, I, I, n && Xt(Wn(e, I, I, 0, 0, o, s, R, o, x = [], h), b), o, b, h, s, n ? x : b);
                    break;
                  default:
                    rr(A, I, I, I, [""], b, 0, s, b);
                }
        }
        d = p = C = 0, y = E = 1, R = A = "", h = a;
        break;
      case 58:
        h = 1 + Ye(A), C = S;
      default:
        if (y < 1) {
          if (_ == 123)
            --y;
          else if (_ == 125 && y++ == 0 && rs() == 125)
            continue;
        }
        switch (A += Sr(_), _ * y) {
          case 38:
            E = p > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            s[d++] = (Ye(A) - 1) * E, E = 1;
            break;
          case 64:
            He() === 45 && (A += tr(Ne())), g = He(), p = h = Ye(R = A += as(er())), _++;
            break;
          case 45:
            S === 45 && Ye(A) == 2 && (y = 0);
        }
    }
  return i;
}
function Wn(e, t, r, n, o, i, a, s, f, d, p) {
  for (var h = o - 1, g = o === 0 ? i : [""], C = ln(g), S = 0, y = 0, m = 0; S < n; ++S)
    for (var E = 0, _ = Mt(e, h + 1, h = Xa(y = a[S])), R = e; E < C; ++E)
      (R = Oo(y > 0 ? g[E] + " " + _ : re(_, /&\f/g, g[E]))) && (f[m++] = R);
  return xr(e, t, r, o === 0 ? sn : s, f, d, p);
}
function cs(e, t, r) {
  return xr(e, t, r, wo, Sr(ts()), Mt(e, 2, -2), 0);
}
function Un(e, t, r, n) {
  return xr(e, t, r, cn, Mt(e, 0, n), Mt(e, n + 1, -1), n);
}
function St(e, t) {
  for (var r = "", n = ln(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function ls(e, t, r, n) {
  switch (e.type) {
    case Ha:
      if (e.children.length) break;
    case Ka:
    case cn:
      return e.return = e.return || e.value;
    case wo:
      return "";
    case Ro:
      return e.return = e.value + "{" + St(e.children, n) + "}";
    case sn:
      e.value = e.props.join(",");
  }
  return Ye(r = St(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function us(e) {
  var t = ln(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function fs(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ds = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = He(), o === 38 && i === 12 && (r[n] = 1), !Nt(i); )
    Ne();
  return Wt(t, Ae);
}, ps = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Nt(o)) {
      case 0:
        o === 38 && He() === 12 && (r[n] = 1), t[n] += ds(Ae - 1, r, n);
        break;
      case 2:
        t[n] += tr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = He() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Sr(o);
    }
  while (o = Ne());
  return t;
}, hs = function(t, r) {
  return _o(ps(Po(t), r));
}, Yn = /* @__PURE__ */ new WeakMap(), ms = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Yn.get(n)) && !o) {
      Yn.set(t, !0);
      for (var i = [], a = hs(r, i), s = n.props, f = 0, d = 0; f < a.length; f++)
        for (var p = 0; p < s.length; p++, d++)
          t.props[d] = i[f] ? a[f].replace(/&\f/g, s[p]) : s[p] + " " + a[f];
    }
  }
}, gs = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ko(e, t) {
  switch (Qa(e, t)) {
    case 5103:
      return te + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + sr + e + $e + e + e;
    case 6828:
    case 4268:
      return te + e + $e + e + e;
    case 6165:
      return te + e + $e + "flex-" + e + e;
    case 5187:
      return te + e + re(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + $e + "flex-$1$2") + e;
    case 5443:
      return te + e + $e + "flex-item-" + re(e, /flex-|-self/, "") + e;
    case 4675:
      return te + e + $e + "flex-line-pack" + re(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return te + e + $e + re(e, "shrink", "negative") + e;
    case 5292:
      return te + e + $e + re(e, "basis", "preferred-size") + e;
    case 6060:
      return te + "box-" + re(e, "-grow", "") + te + e + $e + re(e, "grow", "positive") + e;
    case 4554:
      return te + re(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return re(re(re(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return re(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return re(re(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + $e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + te + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return re(e, /(.+)-inline(.+)/, te + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ye(e) - 1 - t > 6) switch (Re(e, t + 1)) {
        case 109:
          if (Re(e, t + 4) !== 45) break;
        case 102:
          return re(e, /(.+:)(.+)-([^]+)/, "$1" + te + "$2-$3$1" + sr + (Re(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Ur(e, "stretch") ? ko(re(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Re(e, t + 1) !== 115) break;
    case 6444:
      switch (Re(e, Ye(e) - 3 - (~Ur(e, "!important") && 10))) {
        case 107:
          return re(e, ":", ":" + te) + e;
        case 101:
          return re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + te + (Re(e, 14) === 45 ? "inline-" : "") + "box$3$1" + te + "$2$3$1" + $e + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Re(e, t + 11)) {
        case 114:
          return te + e + $e + re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + $e + re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + $e + re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + $e + e + e;
  }
  return e;
}
var ys = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case cn:
      t.return = ko(t.value, t.length);
      break;
    case Ro:
      return St([Pt(t, {
        value: re(t.value, "@", "@" + te)
      })], o);
    case sn:
      if (t.length) return es(t.props, function(i) {
        switch (Za(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return St([Pt(t, {
              props: [re(i, /:(read-\w+)/, ":" + sr + "$1")]
            })], o);
          case "::placeholder":
            return St([Pt(t, {
              props: [re(i, /:(plac\w+)/, ":" + te + "input-$1")]
            }), Pt(t, {
              props: [re(i, /:(plac\w+)/, ":" + sr + "$1")]
            }), Pt(t, {
              props: [re(i, /:(plac\w+)/, $e + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, bs = [ys], vs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var m = y.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || bs, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var m = y.getAttribute("data-emotion").split(" "), E = 1; E < m.length; E++)
        i[m[E]] = !0;
      s.push(y);
    }
  );
  var f, d = [ms, gs];
  {
    var p, h = [ls, fs(function(y) {
      p.insert(y);
    })], g = us(d.concat(o, h)), C = function(m) {
      return St(ss(m), g);
    };
    f = function(m, E, _, R) {
      p = _, C(m ? m + "{" + E.styles + "}" : E.styles), R && (S.inserted[E.name] = !0);
    };
  }
  var S = {
    key: r,
    sheet: new Ga({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return S.sheet.hydrate(s), S;
}, Ao = Zr(), Ss = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Cs = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Io = {};
Io[Ao.ForwardRef] = Ss;
Io[Ao.Memo] = Cs;
var xs = !0;
function Es(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Mo = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  xs === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Ts = function(t, r, n) {
  Mo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ws(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Rs = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Os = !1, $s = /[A-Z]|^ms/g, Ps = /_EMO_([^_]+?)_([^]*?)_EMO_/g, No = function(t) {
  return t.charCodeAt(1) === 45;
}, qn = function(t) {
  return t != null && typeof t != "boolean";
}, jr = /* @__PURE__ */ To(function(e) {
  return No(e) ? e : e.replace($s, "-$&").toLowerCase();
}), Gn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ps, function(n, o, i) {
          return qe = {
            name: o,
            styles: i,
            next: qe
          }, o;
        });
  }
  return Rs[t] !== 1 && !No(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, _s = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function jt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return qe = {
          name: o.name,
          styles: o.styles,
          next: qe
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            qe = {
              name: a.name,
              styles: a.styles,
              next: qe
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return ks(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = qe, d = r(e);
        return qe = f, jt(e, t, d);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var h = t[p];
  return h !== void 0 ? h : p;
}
function ks(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += jt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : qn(s) && (n += jr(i) + ":" + Gn(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Os)
          throw new Error(_s);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var f = 0; f < a.length; f++)
            qn(a[f]) && (n += jr(i) + ":" + Gn(i, a[f]) + ";");
        else {
          var d = jt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += jr(i) + ":" + d + ";";
              break;
            }
            default:
              n += i + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var Kn = /label:\s*([^\s;{]+)\s*(;|$)/g, qe;
function un(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  qe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += jt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += jt(r, t, e[s]), n) {
      var f = i;
      o += f[s];
    }
  Kn.lastIndex = 0;
  for (var d = "", p; (p = Kn.exec(o)) !== null; )
    d += "-" + p[1];
  var h = ws(o) + d;
  return {
    name: h,
    styles: o,
    next: qe
  };
}
var As = function(t) {
  return t();
}, Is = N.useInsertionEffect ? N.useInsertionEffect : !1, Ms = Is || As, jo = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ vs({
    key: "css"
  }) : null
);
jo.Provider;
var Ns = function(t) {
  return /* @__PURE__ */ Oi(function(r, n) {
    var o = $i(jo);
    return t(r, o, n);
  });
}, Bo = /* @__PURE__ */ N.createContext({});
function js() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return un(t);
}
var fn = function() {
  var t = js.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Bs = Wa, Ds = function(t) {
  return t !== "theme";
}, Hn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Bs : Ds;
}, Xn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, zs = !1, Fs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Mo(r, n, o), Ms(function() {
    return Ts(r, n, o);
  }), null;
}, Vs = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = Xn(t, r, n), f = s || Hn(o), d = !f("as");
  return function() {
    var p = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      h.push.apply(h, p);
    else {
      h.push(p[0][0]);
      for (var g = p.length, C = 1; C < g; C++)
        h.push(p[C], p[0][C]);
    }
    var S = Ns(function(y, m, E) {
      var _ = d && y.as || o, R = "", x = [], b = y;
      if (y.theme == null) {
        b = {};
        for (var I in y)
          b[I] = y[I];
        b.theme = N.useContext(Bo);
      }
      typeof y.className == "string" ? R = Es(m.registered, x, y.className) : y.className != null && (R = y.className + " ");
      var A = un(h.concat(x), m.registered, b);
      R += m.key + "-" + A.name, a !== void 0 && (R += " " + a);
      var Z = d && s === void 0 ? Hn(_) : f, J = {};
      for (var c in y)
        d && c === "as" || Z(c) && (J[c] = y[c]);
      return J.className = R, E && (J.ref = E), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Fs, {
        cache: m,
        serialized: A,
        isStringTag: typeof _ == "string"
      }), /* @__PURE__ */ N.createElement(_, J));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = h, S.__emotion_forwardProp = s, Object.defineProperty(S, "toString", {
      value: function() {
        return a === void 0 && zs ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), S.withComponent = function(y, m) {
      return e(y, ar({}, r, m, {
        shouldForwardProp: Xn(S, m, !0)
      })).apply(void 0, h);
    }, S;
  };
}, Ls = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], qr = Vs.bind();
Ls.forEach(function(e) {
  qr[e] = qr(e);
});
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ws(e, t) {
  const r = qr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Us(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Jn = [];
function Qn(e) {
  return Jn[0] = e, un(Jn);
}
const Ys = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function qs(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Ys(t), a = Object.keys(i);
  function s(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function f(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function d(g, C) {
    const S = a.indexOf(C);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(S !== -1 && typeof t[a[S]] == "number" ? t[a[S]] : C) - n / 100}${r})`;
  }
  function p(g) {
    return a.indexOf(g) + 1 < a.length ? d(g, a[a.indexOf(g) + 1]) : s(g);
  }
  function h(g) {
    const C = a.indexOf(g);
    return C === 0 ? s(a[1]) : C === a.length - 1 ? f(a[C]) : d(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: f,
    between: d,
    only: p,
    not: h,
    unit: r,
    ...o
  };
}
const Gs = {
  borderRadius: 4
};
function Do(e = 8, t = on({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Ks(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function dn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = qs(r), f = Do(o);
  let d = Me({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Gs,
      ...i
    }
  }, a);
  return d = Xi(d), d.applyStyles = Ks, d = t.reduce((p, h) => Me(p, h), d), d.unstable_sxConfig = {
    ...Lt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(h) {
    return Ct({
      sx: h,
      theme: this
    });
  }, d;
}
function Hs(e) {
  return Object.keys(e).length === 0;
}
function Xs(e = null) {
  const t = N.useContext(Bo);
  return !t || Hs(t) ? e : t;
}
const Js = dn();
function Qs(e = Js) {
  return Xs(e);
}
const Zn = (e) => e, Zs = () => {
  let e = Zn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Zn;
    }
  };
}, ec = Zs(), tc = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Le(e, t, r = "Mui") {
  const n = tc[t];
  return n ? `${r}-${n}` : `${ec.generate(e)}-${t}`;
}
function Xe(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Le(e, o, r);
  }), n;
}
var Gr = { exports: {} }, se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function rc() {
  if (eo) return se;
  eo = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function y(m) {
    if (typeof m == "object" && m !== null) {
      var E = m.$$typeof;
      switch (E) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case d:
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case f:
                case g:
                case h:
                case i:
                  return m;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return se.ContextConsumer = a, se.ContextProvider = i, se.Element = e, se.ForwardRef = f, se.Fragment = r, se.Lazy = g, se.Memo = h, se.Portal = t, se.Profiler = o, se.StrictMode = n, se.Suspense = d, se.SuspenseList = p, se.isAsyncMode = function() {
    return !1;
  }, se.isConcurrentMode = function() {
    return !1;
  }, se.isContextConsumer = function(m) {
    return y(m) === a;
  }, se.isContextProvider = function(m) {
    return y(m) === i;
  }, se.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, se.isForwardRef = function(m) {
    return y(m) === f;
  }, se.isFragment = function(m) {
    return y(m) === r;
  }, se.isLazy = function(m) {
    return y(m) === g;
  }, se.isMemo = function(m) {
    return y(m) === h;
  }, se.isPortal = function(m) {
    return y(m) === t;
  }, se.isProfiler = function(m) {
    return y(m) === o;
  }, se.isStrictMode = function(m) {
    return y(m) === n;
  }, se.isSuspense = function(m) {
    return y(m) === d;
  }, se.isSuspenseList = function(m) {
    return y(m) === p;
  }, se.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === d || m === p || m === C || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === h || m.$$typeof === i || m.$$typeof === a || m.$$typeof === f || m.$$typeof === S || m.getModuleId !== void 0);
  }, se.typeOf = y, se;
}
var ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to;
function nc() {
  return to || (to = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = !1, y = !1, m = !1, E = !1, _ = !1, R;
    R = Symbol.for("react.module.reference");
    function x(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === o || _ || M === n || M === d || M === p || E || M === C || S || y || m || typeof M == "object" && M !== null && (M.$$typeof === g || M.$$typeof === h || M.$$typeof === i || M.$$typeof === a || M.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === R || M.getModuleId !== void 0));
    }
    function b(M) {
      if (typeof M == "object" && M !== null) {
        var Pe = M.$$typeof;
        switch (Pe) {
          case e:
            var Be = M.type;
            switch (Be) {
              case r:
              case o:
              case n:
              case d:
              case p:
                return Be;
              default:
                var ot = Be && Be.$$typeof;
                switch (ot) {
                  case s:
                  case a:
                  case f:
                  case g:
                  case h:
                  case i:
                    return ot;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var I = a, A = i, Z = e, J = f, c = r, P = g, j = h, D = t, Y = o, ue = n, le = d, ye = p, Ee = !1, Te = !1;
    function w(M) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(M) {
      return Te || (Te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(M) {
      return b(M) === a;
    }
    function W(M) {
      return b(M) === i;
    }
    function B(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function K(M) {
      return b(M) === f;
    }
    function V(M) {
      return b(M) === r;
    }
    function L(M) {
      return b(M) === g;
    }
    function q(M) {
      return b(M) === h;
    }
    function H(M) {
      return b(M) === t;
    }
    function G(M) {
      return b(M) === o;
    }
    function Se(M) {
      return b(M) === n;
    }
    function $(M) {
      return b(M) === d;
    }
    function Oe(M) {
      return b(M) === p;
    }
    ce.ContextConsumer = I, ce.ContextProvider = A, ce.Element = Z, ce.ForwardRef = J, ce.Fragment = c, ce.Lazy = P, ce.Memo = j, ce.Portal = D, ce.Profiler = Y, ce.StrictMode = ue, ce.Suspense = le, ce.SuspenseList = ye, ce.isAsyncMode = w, ce.isConcurrentMode = O, ce.isContextConsumer = F, ce.isContextProvider = W, ce.isElement = B, ce.isForwardRef = K, ce.isFragment = V, ce.isLazy = L, ce.isMemo = q, ce.isPortal = H, ce.isProfiler = G, ce.isStrictMode = Se, ce.isSuspense = $, ce.isSuspenseList = Oe, ce.isValidElementType = x, ce.typeOf = b;
  }()), ce;
}
process.env.NODE_ENV === "production" ? Gr.exports = rc() : Gr.exports = nc();
var ro = Gr.exports;
function zo(e, t = "") {
  return e.displayName || e.name || t;
}
function no(e, t, r) {
  const n = zo(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function oc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return zo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ro.ForwardRef:
          return no(e, e.render, "ForwardRef");
        case ro.Memo:
          return no(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Fo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Qn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Qn(o.style));
  }), n;
}
const ic = dn();
function Br(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ac(e) {
  return e ? (t, r) => r[e] : null;
}
function sc(e, t, r) {
  e.theme = fc(e.theme) ? r : e.theme[t] || e.theme;
}
function nr(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => nr(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Vo(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Vo(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== a.props[s])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function cc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ic,
    rootShouldForwardProp: n = Br,
    slotShouldForwardProp: o = Br
  } = e;
  function i(s) {
    sc(s, t, r);
  }
  return (s, f = {}) => {
    Us(s, (b) => b.filter((I) => I !== Ct));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: h,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: C = ac(Lo(p)),
      ...S
    } = f, y = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), m = g || !1;
    let E = Br;
    p === "Root" || p === "root" ? E = n : p ? E = o : dc(s) && (E = void 0);
    const _ = Ws(s, {
      shouldForwardProp: E,
      label: uc(d, p),
      ...S
    }), R = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(A) {
          return nr(A, b);
        };
      if (Ke(b)) {
        const I = Fo(b);
        return I.variants ? function(Z) {
          return nr(Z, I);
        } : I.style;
      }
      return b;
    }, x = (...b) => {
      const I = [], A = b.map(R), Z = [];
      if (I.push(i), d && C && Z.push(function(j) {
        var le, ye;
        const Y = (ye = (le = j.theme.components) == null ? void 0 : le[d]) == null ? void 0 : ye.styleOverrides;
        if (!Y)
          return null;
        const ue = {};
        for (const Ee in Y)
          ue[Ee] = nr(j, Y[Ee]);
        return C(j, ue);
      }), d && !y && Z.push(function(j) {
        var ue, le;
        const D = j.theme, Y = (le = (ue = D == null ? void 0 : D.components) == null ? void 0 : ue[d]) == null ? void 0 : le.variants;
        return Y ? Vo(j, Y) : null;
      }), m || Z.push(Ct), Array.isArray(A[0])) {
        const P = A.shift(), j = new Array(I.length).fill(""), D = new Array(Z.length).fill("");
        let Y;
        Y = [...j, ...P, ...D], Y.raw = [...j, ...P.raw, ...D], I.unshift(Y);
      }
      const J = [...I, ...A, ...Z], c = _(...J);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = lc(d, p, s)), c;
    };
    return _.withConfig && (x.withConfig = _.withConfig), x;
  };
}
function lc(e, t, r) {
  return e ? `${e}${ne(t || "")}` : `Styled(${oc(r)})`;
}
function uc(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Lo(t || "Root")}`), r;
}
function fc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function dc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Lo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const pc = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function Er(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function hc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function mc(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !hc(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const gc = Er(l.elementType, mc), yc = l.oneOfType([l.func, l.object]);
function bc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Jt(e) {
  const t = N.useRef(e);
  return pc(() => {
    t.current = e;
  }), N.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function oo(...e) {
  return N.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      bc(r, t);
    });
  }, e);
}
const io = {};
function Wo(e, t) {
  const r = N.useRef(io);
  return r.current === io && (r.current = e(t)), r;
}
const vc = [];
function Sc(e) {
  N.useEffect(e, vc);
}
class pn {
  constructor() {
    Rt(this, "currentId", null);
    Rt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Rt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new pn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Cc() {
  const e = Wo(pn.create).current;
  return Sc(e.disposeEffect), e;
}
function ao(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function xc(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Uo(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = xc(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Yo(e, t, ...r) {
  return e[t] === void 0 ? null : Uo(e, t, ...r);
}
function Kr() {
  return null;
}
Yo.isRequired = Uo;
Kr.isRequired = Kr;
const Ec = process.env.NODE_ENV === "production" ? Kr : Yo, Tc = /* @__PURE__ */ N.createContext(void 0);
process.env.NODE_ENV !== "production" && (l.node, l.object);
function wc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? or(o.defaultProps, n) : !o.styleOverrides && !o.variants ? or(o, n) : n;
}
function Rc({
  props: e,
  name: t
}) {
  const r = N.useContext(Tc);
  return wc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const so = {
  theme: void 0
};
function Oc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (so.theme = o.theme, i = Fo(e(so)), t = i, r = o.theme), i;
  };
}
function $c(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const co = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Pc = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, f]) => {
      (!r || r && !r([...i, s])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, s], Array.isArray(f) ? [...a, s] : a) : t([...i, s], f, a));
    });
  }
  n(e);
}, _c = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Dr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Pc(
    e,
    (s, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(s, f))) {
        const p = `--${r ? `${r}-` : ""}${s.join("-")}`, h = _c(s, f);
        Object.assign(o, {
          [p]: h
        }), co(i, s, `var(${p})`, d), co(a, s, `var(${p}, ${h})`, d);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function kc(e, t = {}) {
  const {
    getSelector: r = m,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...f
  } = e, {
    vars: d,
    css: p,
    varsWithDefaults: h
  } = Dr(f, t);
  let g = h;
  const C = {}, {
    [s]: S,
    ...y
  } = i;
  if (Object.entries(y || {}).forEach(([R, x]) => {
    const {
      vars: b,
      css: I,
      varsWithDefaults: A
    } = Dr(x, t);
    g = Me(g, A), C[R] = {
      css: I,
      vars: b
    };
  }), S) {
    const {
      css: R,
      vars: x,
      varsWithDefaults: b
    } = Dr(S, t);
    g = Me(g, b), C[s] = {
      css: R,
      vars: x
    };
  }
  function m(R, x) {
    var I, A;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), R) {
      if (b === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((A = (I = i[R]) == null ? void 0 : I.palette) == null ? void 0 : A.mode) || R})`]: {
            ":root": x
          }
        };
      if (b)
        return e.defaultColorScheme === R ? `:root, ${b.replace("%s", String(R))}` : b.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let R = {
        ...d
      };
      return Object.entries(C).forEach(([, {
        vars: x
      }]) => {
        R = Me(R, x);
      }), R;
    },
    generateStyleSheets: () => {
      var Z, J;
      const R = [], x = e.defaultColorScheme || "light";
      function b(c, P) {
        Object.keys(P).length && R.push(typeof c == "string" ? {
          [c]: {
            ...P
          }
        } : c);
      }
      b(r(void 0, {
        ...p
      }), p);
      const {
        [x]: I,
        ...A
      } = C;
      if (I) {
        const {
          css: c
        } = I, P = (J = (Z = i[x]) == null ? void 0 : Z.palette) == null ? void 0 : J.mode, j = !n && P ? {
          colorScheme: P,
          ...c
        } : {
          ...c
        };
        b(r(x, {
          ...j
        }), j);
      }
      return Object.entries(A).forEach(([c, {
        css: P
      }]) => {
        var Y, ue;
        const j = (ue = (Y = i[c]) == null ? void 0 : Y.palette) == null ? void 0 : ue.mode, D = !n && j ? {
          colorScheme: j,
          ...P
        } : {
          ...P
        };
        b(r(c, {
          ...D
        }), D);
      }), R;
    }
  };
}
function Ac(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Bt = {
  black: "#000",
  white: "#fff"
}, Ic = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, pt = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, ht = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, _t = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, mt = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, gt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, yt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, lo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Bt.white,
    default: Bt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, zr = {
  text: {
    primary: Bt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Bt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function uo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = nn(e.main, o) : t === "dark" && (e.dark = rn(e.main, i)));
}
function Mc(e = "light") {
  return e === "dark" ? {
    main: mt[200],
    light: mt[50],
    dark: mt[400]
  } : {
    main: mt[700],
    light: mt[400],
    dark: mt[800]
  };
}
function Nc(e = "light") {
  return e === "dark" ? {
    main: pt[200],
    light: pt[50],
    dark: pt[400]
  } : {
    main: pt[500],
    light: pt[300],
    dark: pt[700]
  };
}
function jc(e = "light") {
  return e === "dark" ? {
    main: ht[500],
    light: ht[300],
    dark: ht[700]
  } : {
    main: ht[700],
    light: ht[400],
    dark: ht[800]
  };
}
function Bc(e = "light") {
  return e === "dark" ? {
    main: gt[400],
    light: gt[300],
    dark: gt[700]
  } : {
    main: gt[700],
    light: gt[500],
    dark: gt[900]
  };
}
function Dc(e = "light") {
  return e === "dark" ? {
    main: yt[400],
    light: yt[300],
    dark: yt[700]
  } : {
    main: yt[800],
    light: yt[500],
    dark: yt[900]
  };
}
function zc(e = "light") {
  return e === "dark" ? {
    main: _t[400],
    light: _t[300],
    dark: _t[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _t[500],
    dark: _t[900]
  };
}
function hn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Mc(t), a = e.secondary || Nc(t), s = e.error || jc(t), f = e.info || Bc(t), d = e.success || Dc(t), p = e.warning || zc(t);
  function h(y) {
    const m = Fn(y, zr.text.primary) >= r ? zr.text.primary : lo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = Fn(y, m);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${m} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const g = ({
    color: y,
    name: m,
    mainShade: E = 500,
    lightShade: _ = 300,
    darkShade: R = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[E] && (y.main = y[E]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : tt(11, m ? ` (${m})` : "", E));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : tt(12, m ? ` (${m})` : "", JSON.stringify(y.main)));
    return uo(y, "light", _, n), uo(y, "dark", R, n), y.contrastText || (y.contrastText = h(y.main)), y;
  }, C = {
    dark: zr,
    light: lo
  };
  return process.env.NODE_ENV !== "production" && (C[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Me({
    // A collection of common colors.
    common: {
      ...Bt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Ic,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...C[t]
  }, o);
}
function Fc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Vc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Lc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const fo = {
  textTransform: "uppercase"
}, po = '"Roboto", "Helvetica", "Arial", sans-serif';
function Wc(e, t) {
  const {
    fontFamily: r = po,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, C = p || ((m) => `${m / f * g}rem`), S = (m, E, _, R, x) => ({
    fontFamily: r,
    fontWeight: m,
    fontSize: C(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === po ? {
      letterSpacing: `${Lc(R / E)}em`
    } : {},
    ...x,
    ...d
  }), y = {
    h1: S(o, 96, 1.167, -1.5),
    h2: S(o, 60, 1.2, -0.5),
    h3: S(i, 48, 1.167, 0),
    h4: S(i, 34, 1.235, 0.25),
    h5: S(i, 24, 1.334, 0),
    h6: S(a, 20, 1.6, 0.15),
    subtitle1: S(i, 16, 1.75, 0.15),
    subtitle2: S(a, 14, 1.57, 0.1),
    body1: S(i, 16, 1.5, 0.15),
    body2: S(i, 14, 1.43, 0.15),
    button: S(a, 14, 1.75, 0.4, fo),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, fo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Me({
    htmlFontSize: f,
    pxToRem: C,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...y
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const Uc = 0.2, Yc = 0.14, qc = 0.12;
function he(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Uc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Yc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${qc})`].join(",");
}
const Gc = ["none", he(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), he(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), he(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), he(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), he(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), he(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), he(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), he(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), he(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), he(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), he(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), he(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), he(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), he(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), he(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), he(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), he(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), he(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), he(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), he(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), he(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), he(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), he(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), he(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Kc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Hc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ho(e) {
  return `${Math.round(e)}ms`;
}
function Xc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Jc(e) {
  const t = {
    ...Kc,
    ...e.easing
  }, r = {
    ...Hc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Xc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", h = (g) => !Number.isNaN(parseFloat(g));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(s) || console.error('MUI: Argument "easing" must be a string.'), !h(f) && !p(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : ho(a)} ${s} ${typeof f == "string" ? f : ho(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Qc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Hr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: f,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : tt(20));
  const p = hn(i), h = dn(e);
  let g = Me(h, {
    mixins: Vc(h.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Gc.slice(),
    typography: Wc(p, s),
    transitions: Jc(a),
    zIndex: {
      ...Qc
    }
  });
  if (g = Me(g, d), g = t.reduce((C, S) => Me(C, S), g), process.env.NODE_ENV !== "production") {
    const C = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (y, m) => {
      let E;
      for (E in y) {
        const _ = y[E];
        if (C.includes(E) && Object.keys(_).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = Le("", E);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: _
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[E] = {};
        }
      }
    };
    Object.keys(g.components).forEach((y) => {
      const m = g.components[y].styleOverrides;
      m && y.startsWith("Mui") && S(m, y);
    });
  }
  return g.unstable_sxConfig = {
    ...Lt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, g.unstable_sx = function(S) {
    return Ct({
      sx: S,
      theme: this
    });
  }, g;
}
function Xr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Zc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Xr(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function qo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Go(e) {
  return e === "dark" ? Zc : [];
}
function el(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = hn(t);
  return {
    palette: i,
    opacity: {
      ...qo(i.mode),
      ...r
    },
    overlays: n || Go(i.mode),
    ...o
  };
}
function tl(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const rl = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], nl = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return rl(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function ol(e) {
  return Ke(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function il(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !ol(s) || a.startsWith("unstable_") ? delete n[a] : Ke(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function al(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function v(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function At(e) {
  return !e || !e.startsWith("hsl") ? e : So(e);
}
function Qe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = kt(At(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function sl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ue = (e) => {
  try {
    return e();
  } catch {
  }
}, cl = (e = "mui") => $c(e);
function Fr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = el({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Hr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...qo(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Go(o)
  }, a;
}
function ll(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = tl,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, p = Object.keys(r)[0], h = n || (r.light && p !== "light" ? "light" : p), g = cl(i), {
    [h]: C,
    light: S,
    dark: y,
    ...m
  } = r, E = {
    ...m
  };
  let _ = C;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (_ = !0), !_)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : tt(21, h));
  const R = Fr(E, _, d, h);
  S && !E.light && Fr(E, S, void 0, "light"), y && !E.dark && Fr(E, y, void 0, "dark");
  let x = {
    defaultColorScheme: h,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: f,
    getCssVar: g,
    colorSchemes: E,
    font: {
      ...Fc(R.typography),
      ...R.font
    },
    spacing: sl(d.spacing)
  };
  Object.keys(x.colorSchemes).forEach((J) => {
    const c = x.colorSchemes[J].palette, P = (j) => {
      const D = j.split("-"), Y = D[1], ue = D[2];
      return g(j, c[Y][ue]);
    };
    if (c.mode === "light" && (v(c.common, "background", "#fff"), v(c.common, "onBackground", "#000")), c.mode === "dark" && (v(c.common, "background", "#000"), v(c.common, "onBackground", "#fff")), al(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      v(c.Alert, "errorColor", de(c.error.light, 0.6)), v(c.Alert, "infoColor", de(c.info.light, 0.6)), v(c.Alert, "successColor", de(c.success.light, 0.6)), v(c.Alert, "warningColor", de(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", P("palette-error-main")), v(c.Alert, "infoFilledBg", P("palette-info-main")), v(c.Alert, "successFilledBg", P("palette-success-main")), v(c.Alert, "warningFilledBg", P("palette-warning-main")), v(c.Alert, "errorFilledColor", Ue(() => c.getContrastText(c.error.main))), v(c.Alert, "infoFilledColor", Ue(() => c.getContrastText(c.info.main))), v(c.Alert, "successFilledColor", Ue(() => c.getContrastText(c.success.main))), v(c.Alert, "warningFilledColor", Ue(() => c.getContrastText(c.warning.main))), v(c.Alert, "errorStandardBg", pe(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", pe(c.info.light, 0.9)), v(c.Alert, "successStandardBg", pe(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", pe(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", P("palette-error-main")), v(c.Alert, "infoIconColor", P("palette-info-main")), v(c.Alert, "successIconColor", P("palette-success-main")), v(c.Alert, "warningIconColor", P("palette-warning-main")), v(c.AppBar, "defaultBg", P("palette-grey-100")), v(c.Avatar, "defaultBg", P("palette-grey-400")), v(c.Button, "inheritContainedBg", P("palette-grey-300")), v(c.Button, "inheritContainedHoverBg", P("palette-grey-A100")), v(c.Chip, "defaultBorder", P("palette-grey-400")), v(c.Chip, "defaultAvatarColor", P("palette-grey-700")), v(c.Chip, "defaultIconColor", P("palette-grey-700")), v(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(c.LinearProgress, "primaryBg", pe(c.primary.main, 0.62)), v(c.LinearProgress, "secondaryBg", pe(c.secondary.main, 0.62)), v(c.LinearProgress, "errorBg", pe(c.error.main, 0.62)), v(c.LinearProgress, "infoBg", pe(c.info.main, 0.62)), v(c.LinearProgress, "successBg", pe(c.success.main, 0.62)), v(c.LinearProgress, "warningBg", pe(c.warning.main, 0.62)), v(c.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), v(c.Slider, "primaryTrack", pe(c.primary.main, 0.62)), v(c.Slider, "secondaryTrack", pe(c.secondary.main, 0.62)), v(c.Slider, "errorTrack", pe(c.error.main, 0.62)), v(c.Slider, "infoTrack", pe(c.info.main, 0.62)), v(c.Slider, "successTrack", pe(c.success.main, 0.62)), v(c.Slider, "warningTrack", pe(c.warning.main, 0.62));
      const j = Ht(c.background.default, 0.8);
      v(c.SnackbarContent, "bg", j), v(c.SnackbarContent, "color", Ue(() => c.getContrastText(j))), v(c.SpeedDialAction, "fabHoverBg", Ht(c.background.paper, 0.15)), v(c.StepConnector, "border", P("palette-grey-400")), v(c.StepContent, "border", P("palette-grey-400")), v(c.Switch, "defaultColor", P("palette-common-white")), v(c.Switch, "defaultDisabledColor", P("palette-grey-100")), v(c.Switch, "primaryDisabledColor", pe(c.primary.main, 0.62)), v(c.Switch, "secondaryDisabledColor", pe(c.secondary.main, 0.62)), v(c.Switch, "errorDisabledColor", pe(c.error.main, 0.62)), v(c.Switch, "infoDisabledColor", pe(c.info.main, 0.62)), v(c.Switch, "successDisabledColor", pe(c.success.main, 0.62)), v(c.Switch, "warningDisabledColor", pe(c.warning.main, 0.62)), v(c.TableCell, "border", pe(Kt(c.divider, 1), 0.88)), v(c.Tooltip, "bg", Kt(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      v(c.Alert, "errorColor", pe(c.error.light, 0.6)), v(c.Alert, "infoColor", pe(c.info.light, 0.6)), v(c.Alert, "successColor", pe(c.success.light, 0.6)), v(c.Alert, "warningColor", pe(c.warning.light, 0.6)), v(c.Alert, "errorFilledBg", P("palette-error-dark")), v(c.Alert, "infoFilledBg", P("palette-info-dark")), v(c.Alert, "successFilledBg", P("palette-success-dark")), v(c.Alert, "warningFilledBg", P("palette-warning-dark")), v(c.Alert, "errorFilledColor", Ue(() => c.getContrastText(c.error.dark))), v(c.Alert, "infoFilledColor", Ue(() => c.getContrastText(c.info.dark))), v(c.Alert, "successFilledColor", Ue(() => c.getContrastText(c.success.dark))), v(c.Alert, "warningFilledColor", Ue(() => c.getContrastText(c.warning.dark))), v(c.Alert, "errorStandardBg", de(c.error.light, 0.9)), v(c.Alert, "infoStandardBg", de(c.info.light, 0.9)), v(c.Alert, "successStandardBg", de(c.success.light, 0.9)), v(c.Alert, "warningStandardBg", de(c.warning.light, 0.9)), v(c.Alert, "errorIconColor", P("palette-error-main")), v(c.Alert, "infoIconColor", P("palette-info-main")), v(c.Alert, "successIconColor", P("palette-success-main")), v(c.Alert, "warningIconColor", P("palette-warning-main")), v(c.AppBar, "defaultBg", P("palette-grey-900")), v(c.AppBar, "darkBg", P("palette-background-paper")), v(c.AppBar, "darkColor", P("palette-text-primary")), v(c.Avatar, "defaultBg", P("palette-grey-600")), v(c.Button, "inheritContainedBg", P("palette-grey-800")), v(c.Button, "inheritContainedHoverBg", P("palette-grey-700")), v(c.Chip, "defaultBorder", P("palette-grey-700")), v(c.Chip, "defaultAvatarColor", P("palette-grey-300")), v(c.Chip, "defaultIconColor", P("palette-grey-300")), v(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(c.LinearProgress, "primaryBg", de(c.primary.main, 0.5)), v(c.LinearProgress, "secondaryBg", de(c.secondary.main, 0.5)), v(c.LinearProgress, "errorBg", de(c.error.main, 0.5)), v(c.LinearProgress, "infoBg", de(c.info.main, 0.5)), v(c.LinearProgress, "successBg", de(c.success.main, 0.5)), v(c.LinearProgress, "warningBg", de(c.warning.main, 0.5)), v(c.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), v(c.Slider, "primaryTrack", de(c.primary.main, 0.5)), v(c.Slider, "secondaryTrack", de(c.secondary.main, 0.5)), v(c.Slider, "errorTrack", de(c.error.main, 0.5)), v(c.Slider, "infoTrack", de(c.info.main, 0.5)), v(c.Slider, "successTrack", de(c.success.main, 0.5)), v(c.Slider, "warningTrack", de(c.warning.main, 0.5));
      const j = Ht(c.background.default, 0.98);
      v(c.SnackbarContent, "bg", j), v(c.SnackbarContent, "color", Ue(() => c.getContrastText(j))), v(c.SpeedDialAction, "fabHoverBg", Ht(c.background.paper, 0.15)), v(c.StepConnector, "border", P("palette-grey-600")), v(c.StepContent, "border", P("palette-grey-600")), v(c.Switch, "defaultColor", P("palette-grey-300")), v(c.Switch, "defaultDisabledColor", P("palette-grey-600")), v(c.Switch, "primaryDisabledColor", de(c.primary.main, 0.55)), v(c.Switch, "secondaryDisabledColor", de(c.secondary.main, 0.55)), v(c.Switch, "errorDisabledColor", de(c.error.main, 0.55)), v(c.Switch, "infoDisabledColor", de(c.info.main, 0.55)), v(c.Switch, "successDisabledColor", de(c.success.main, 0.55)), v(c.Switch, "warningDisabledColor", de(c.warning.main, 0.55)), v(c.TableCell, "border", de(Kt(c.divider, 1), 0.68)), v(c.Tooltip, "bg", Kt(c.grey[700], 0.92));
    }
    Qe(c.background, "default"), Qe(c.background, "paper"), Qe(c.common, "background"), Qe(c.common, "onBackground"), Qe(c, "divider"), Object.keys(c).forEach((j) => {
      const D = c[j];
      D && typeof D == "object" && (D.main && v(c[j], "mainChannel", kt(At(D.main))), D.light && v(c[j], "lightChannel", kt(At(D.light))), D.dark && v(c[j], "darkChannel", kt(At(D.dark))), D.contrastText && v(c[j], "contrastTextChannel", kt(At(D.contrastText))), j === "text" && (Qe(c[j], "primary"), Qe(c[j], "secondary")), j === "action" && (D.active && Qe(c[j], "active"), D.selected && Qe(c[j], "selected")));
    });
  }), x = t.reduce((J, c) => Me(J, c), x);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: nl(x)
  }, {
    vars: I,
    generateThemeVars: A,
    generateStyleSheets: Z
  } = kc(x, b);
  return x.vars = I, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([J, c]) => {
    x[J] = c;
  }), x.generateThemeVars = A, x.generateStyleSheets = Z, x.generateSpacing = function() {
    return Do(d.spacing, on(this));
  }, x.getColorSchemeSelector = Ac(s), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = a, x.unstable_sxConfig = {
    ...Lt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, x.unstable_sx = function(c) {
    return Ct({
      sx: c,
      theme: this
    });
  }, x.toRuntimeSource = il, x;
}
function mo(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: hn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ul(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", f = o == null ? void 0 : o[s], d = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Hr(e, ...t);
    let p = r;
    "palette" in e || d[s] && (d[s] !== !0 ? p = d[s].palette : s === "dark" && (p = {
      mode: "dark"
    }));
    const h = Hr({
      ...e,
      palette: p
    }, ...t);
    return h.defaultColorScheme = s, h.colorSchemes = d, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: h.palette
    }, mo(h, "dark", d.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: h.palette
    }, mo(h, "light", d.light)), h;
  }
  return !r && !("light" in d) && s === "light" && (d.light = !0), ll({
    ...a,
    colorSchemes: d,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Ko = ul(), Ho = "$$material";
function fl() {
  const e = Qs(Ko);
  return process.env.NODE_ENV !== "production" && N.useDebugValue(e), e[Ho] || e;
}
const je = cc({
  themeId: Ho,
  defaultTheme: Ko,
  rootShouldForwardProp: Co
});
function dl() {
  return Va;
}
const lt = Oc;
process.env.NODE_ENV !== "production" && (l.node, l.object.isRequired);
function Je(e) {
  return Rc(e);
}
class cr {
  constructor() {
    Rt(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new cr();
  }
  static use() {
    const t = Wo(cr.create).current, [r, n] = N.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, N.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = hl(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function pl() {
  return cr.use();
}
function hl() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function ml(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Jr(e, t) {
  return Jr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Jr(e, t);
}
function gl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Jr(e, t);
}
const go = st.createContext(null);
function yl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mn(e, t) {
  var r = function(i) {
    return t && Qt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Pi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function bl(e, t) {
  e = e || {}, t = t || {};
  function r(p) {
    return p in t ? t[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var f in t) {
    if (n[f])
      for (a = 0; a < n[f].length; a++) {
        var d = n[f][a];
        s[n[f][a]] = r(d);
      }
    s[f] = r(f);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = r(o[a]);
  return s;
}
function ct(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function vl(e, t) {
  return mn(e.children, function(r) {
    return Zt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ct(r, "appear", e),
      enter: ct(r, "enter", e),
      exit: ct(r, "exit", e)
    });
  });
}
function Sl(e, t, r) {
  var n = mn(e.children), o = bl(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Qt(a)) {
      var s = i in t, f = i in n, d = t[i], p = Qt(d) && !d.props.in;
      f && (!s || p) ? o[i] = Zt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: ct(a, "exit", e),
        enter: ct(a, "enter", e)
      }) : !f && s && !p ? o[i] = Zt(a, {
        in: !1
      }) : f && s && Qt(d) && (o[i] = Zt(a, {
        onExited: r.bind(null, a),
        in: d.props.in,
        exit: ct(a, "exit", e),
        enter: ct(a, "enter", e)
      }));
    }
  }), o;
}
var Cl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, xl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, gn = /* @__PURE__ */ function(e) {
  gl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(yl(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, s = i.handleExited, f = i.firstRender;
    return {
      children: f ? vl(o, s) : Sl(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = mn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var f = ar({}, s.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = ml(o, ["component", "childFactory"]), f = this.state.contextValue, d = Cl(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ st.createElement(go.Provider, {
      value: f
    }, d) : /* @__PURE__ */ st.createElement(go.Provider, {
      value: f
    }, /* @__PURE__ */ st.createElement(i, s, d));
  }, t;
}(st.Component);
gn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: l.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: l.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: l.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: l.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: l.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: l.func
} : {};
gn.defaultProps = xl;
function Xo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: f,
    timeout: d
  } = e, [p, h] = N.useState(!1), g = we(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), C = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, S = we(r.child, p && r.childLeaving, n && r.childPulsate);
  return !s && !p && h(!0), N.useEffect(() => {
    if (!s && f != null) {
      const y = setTimeout(f, d);
      return () => {
        clearTimeout(y);
      };
    }
  }, [f, s, d]), /* @__PURE__ */ ee.jsx("span", {
    className: g,
    style: C,
    children: /* @__PURE__ */ ee.jsx("span", {
      className: S
    })
  });
}
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object.isRequired,
  className: l.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: l.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: l.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: l.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: l.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: l.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: l.number,
  /**
   * exit delay
   */
  timeout: l.number.isRequired
});
const ze = Xe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Qr = 550, El = 80, Tl = fn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, wl = fn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Rl = fn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Ol = je("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), $l = je(Xo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ze.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Tl};
    animation-duration: ${Qr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ze.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ze.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ze.childLeaving} {
    opacity: 0;
    animation-name: ${wl};
    animation-duration: ${Qr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ze.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Rl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Jo = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Je({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [f, d] = N.useState([]), p = N.useRef(0), h = N.useRef(null);
  N.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [f]);
  const g = N.useRef(!1), C = Cc(), S = N.useRef(null), y = N.useRef(null), m = N.useCallback((x) => {
    const {
      pulsate: b,
      rippleX: I,
      rippleY: A,
      rippleSize: Z,
      cb: J
    } = x;
    d((c) => [...c, /* @__PURE__ */ ee.jsx($l, {
      classes: {
        ripple: we(i.ripple, ze.ripple),
        rippleVisible: we(i.rippleVisible, ze.rippleVisible),
        ripplePulsate: we(i.ripplePulsate, ze.ripplePulsate),
        child: we(i.child, ze.child),
        childLeaving: we(i.childLeaving, ze.childLeaving),
        childPulsate: we(i.childPulsate, ze.childPulsate)
      },
      timeout: Qr,
      pulsate: b,
      rippleX: I,
      rippleY: A,
      rippleSize: Z
    }, p.current)]), p.current += 1, h.current = J;
  }, [i]), E = N.useCallback((x = {}, b = {}, I = () => {
  }) => {
    const {
      pulsate: A = !1,
      center: Z = o || b.pulsate,
      fakeElement: J = !1
      // For test purposes
    } = b;
    if ((x == null ? void 0 : x.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (g.current = !0);
    const c = J ? null : y.current, P = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let j, D, Y;
    if (Z || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      j = Math.round(P.width / 2), D = Math.round(P.height / 2);
    else {
      const {
        clientX: ue,
        clientY: le
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      j = Math.round(ue - P.left), D = Math.round(le - P.top);
    }
    if (Z)
      Y = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), Y % 2 === 0 && (Y += 1);
    else {
      const ue = Math.max(Math.abs((c ? c.clientWidth : 0) - j), j) * 2 + 2, le = Math.max(Math.abs((c ? c.clientHeight : 0) - D), D) * 2 + 2;
      Y = Math.sqrt(ue ** 2 + le ** 2);
    }
    x != null && x.touches ? S.current === null && (S.current = () => {
      m({
        pulsate: A,
        rippleX: j,
        rippleY: D,
        rippleSize: Y,
        cb: I
      });
    }, C.start(El, () => {
      S.current && (S.current(), S.current = null);
    })) : m({
      pulsate: A,
      rippleX: j,
      rippleY: D,
      rippleSize: Y,
      cb: I
    });
  }, [o, m, C]), _ = N.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), R = N.useCallback((x, b) => {
    if (C.clear(), (x == null ? void 0 : x.type) === "touchend" && S.current) {
      S.current(), S.current = null, C.start(0, () => {
        R(x, b);
      });
      return;
    }
    S.current = null, d((I) => I.length > 0 ? I.slice(1) : I), h.current = b;
  }, [C]);
  return N.useImperativeHandle(r, () => ({
    pulsate: _,
    start: E,
    stop: R
  }), [_, E, R]), /* @__PURE__ */ ee.jsx(Ol, {
    className: we(ze.root, i.root, a),
    ref: y,
    ...s,
    children: /* @__PURE__ */ ee.jsx(gn, {
      component: null,
      exit: !0,
      children: f
    })
  });
});
process.env.NODE_ENV !== "production" && (Jo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: l.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string
});
function Pl(e) {
  return Le("MuiButtonBase", e);
}
const _l = Xe("MuiButtonBase", ["root", "disabled", "focusVisible"]), kl = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = et({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Pl, o);
  return r && n && (a.root += ` ${n}`), a;
}, Al = je("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${_l.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), yn = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Je({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: f = "button",
    disabled: d = !1,
    disableRipple: p = !1,
    disableTouchRipple: h = !1,
    focusRipple: g = !1,
    focusVisibleClassName: C,
    LinkComponent: S = "a",
    onBlur: y,
    onClick: m,
    onContextMenu: E,
    onDragLeave: _,
    onFocus: R,
    onFocusVisible: x,
    onKeyDown: b,
    onKeyUp: I,
    onMouseDown: A,
    onMouseLeave: Z,
    onMouseUp: J,
    onTouchEnd: c,
    onTouchMove: P,
    onTouchStart: j,
    tabIndex: D = 0,
    TouchRippleProps: Y,
    touchRippleRef: ue,
    type: le,
    ...ye
  } = n, Ee = N.useRef(null), Te = pl(), w = oo(Te.ref, ue), [O, F] = N.useState(!1);
  d && O && F(!1), N.useImperativeHandle(o, () => ({
    focusVisible: () => {
      F(!0), Ee.current.focus();
    }
  }), []);
  const W = Te.shouldMount && !p && !d;
  N.useEffect(() => {
    O && g && !p && Te.pulsate();
  }, [p, g, O, Te]);
  function B(U, Yt, qt = h) {
    return Jt((wt) => (Yt && Yt(wt), qt || Te[U](wt), !0));
  }
  const K = B("start", A), V = B("stop", E), L = B("stop", _), q = B("stop", J), H = B("stop", (U) => {
    O && U.preventDefault(), Z && Z(U);
  }), G = B("start", j), Se = B("stop", c), $ = B("stop", P), Oe = B("stop", (U) => {
    ao(U.target) || F(!1), y && y(U);
  }, !1), M = Jt((U) => {
    Ee.current || (Ee.current = U.currentTarget), ao(U.target) && (F(!0), x && x(U)), R && R(U);
  }), Pe = () => {
    const U = Ee.current;
    return f && f !== "button" && !(U.tagName === "A" && U.href);
  }, Be = Jt((U) => {
    g && !U.repeat && O && U.key === " " && Te.stop(U, () => {
      Te.start(U);
    }), U.target === U.currentTarget && Pe() && U.key === " " && U.preventDefault(), b && b(U), U.target === U.currentTarget && Pe() && U.key === "Enter" && !d && (U.preventDefault(), m && m(U));
  }), ot = Jt((U) => {
    g && U.key === " " && O && !U.defaultPrevented && Te.stop(U, () => {
      Te.pulsate(U);
    }), I && I(U), m && U.target === U.currentTarget && Pe() && U.key === " " && !U.defaultPrevented && m(U);
  });
  let it = f;
  it === "button" && (ye.href || ye.to) && (it = S);
  const We = {};
  it === "button" ? (We.type = le === void 0 ? "button" : le, We.disabled = d) : (!ye.href && !ye.to && (We.role = "button"), d && (We["aria-disabled"] = d));
  const Tr = oo(r, Ee), Ut = {
    ...n,
    centerRipple: i,
    component: f,
    disabled: d,
    disableRipple: p,
    disableTouchRipple: h,
    focusRipple: g,
    tabIndex: D,
    focusVisible: O
  }, Tt = kl(Ut);
  return /* @__PURE__ */ ee.jsxs(Al, {
    as: it,
    className: we(Tt.root, s),
    ownerState: Ut,
    onBlur: Oe,
    onClick: m,
    onContextMenu: V,
    onFocus: M,
    onKeyDown: Be,
    onKeyUp: ot,
    onMouseDown: K,
    onMouseLeave: H,
    onMouseUp: q,
    onDragLeave: L,
    onTouchEnd: Se,
    onTouchMove: $,
    onTouchStart: G,
    ref: Tr,
    tabIndex: d ? -1 : D,
    type: le,
    ...We,
    ...ye,
    children: [a, W ? /* @__PURE__ */ ee.jsx(Jo, {
      ref: w,
      center: i,
      ...Y
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (yn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: yc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: l.bool,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: gc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: l.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: l.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: l.string,
  /**
   * @ignore
   */
  href: l.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: l.elementType,
  /**
   * @ignore
   */
  onBlur: l.func,
  /**
   * @ignore
   */
  onClick: l.func,
  /**
   * @ignore
   */
  onContextMenu: l.func,
  /**
   * @ignore
   */
  onDragLeave: l.func,
  /**
   * @ignore
   */
  onFocus: l.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: l.func,
  /**
   * @ignore
   */
  onKeyDown: l.func,
  /**
   * @ignore
   */
  onKeyUp: l.func,
  /**
   * @ignore
   */
  onMouseDown: l.func,
  /**
   * @ignore
   */
  onMouseLeave: l.func,
  /**
   * @ignore
   */
  onMouseUp: l.func,
  /**
   * @ignore
   */
  onTouchEnd: l.func,
  /**
   * @ignore
   */
  onTouchMove: l.func,
  /**
   * @ignore
   */
  onTouchStart: l.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @default 0
   */
  tabIndex: l.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: l.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: l.oneOfType([l.func, l.shape({
    current: l.shape({
      pulsate: l.func.isRequired,
      start: l.func.isRequired,
      stop: l.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string])
});
function Il(e) {
  return typeof e.main == "string";
}
function Ml(e, t = []) {
  if (!Il(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Dt(e = []) {
  return ([, t]) => t && Ml(t, e);
}
function Nl(e) {
  return Le("MuiButton", e);
}
const bt = Xe("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Qo = /* @__PURE__ */ N.createContext({});
process.env.NODE_ENV !== "production" && (Qo.displayName = "ButtonGroupContext");
const Zo = /* @__PURE__ */ N.createContext(void 0);
process.env.NODE_ENV !== "production" && (Zo.displayName = "ButtonGroupButtonContext");
const jl = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${ne(t)}`, `size${ne(o)}`, `${i}Size${ne(o)}`, `color${ne(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${ne(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ne(o)}`]
  }, f = et(s, Nl, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, ei = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Bl = je(yn, {
  shouldForwardProp: (e) => Co(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ne(r.color)}`], t[`size${ne(r.size)}`], t[`${r.variant}Size${ne(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(lt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${bt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${bt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${bt.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${bt.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Dt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Ge(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${bt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${bt.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), Dl = je("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${ne(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...ei]
}), zl = je("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${ne(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...ei]
}), bn = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = N.useContext(Qo), o = N.useContext(Zo), i = or(n, t), a = Je({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: f = "primary",
    component: d = "button",
    className: p,
    disabled: h = !1,
    disableElevation: g = !1,
    disableFocusRipple: C = !1,
    endIcon: S,
    focusVisibleClassName: y,
    fullWidth: m = !1,
    size: E = "medium",
    startIcon: _,
    type: R,
    variant: x = "text",
    ...b
  } = a, I = {
    ...a,
    color: f,
    component: d,
    disabled: h,
    disableElevation: g,
    disableFocusRipple: C,
    fullWidth: m,
    size: E,
    type: R,
    variant: x
  }, A = jl(I), Z = _ && /* @__PURE__ */ ee.jsx(Dl, {
    className: A.startIcon,
    ownerState: I,
    children: _
  }), J = S && /* @__PURE__ */ ee.jsx(zl, {
    className: A.endIcon,
    ownerState: I,
    children: S
  }), c = o || "";
  return /* @__PURE__ */ ee.jsxs(Bl, {
    ownerState: I,
    className: we(n.className, A.root, p, c),
    component: d,
    disabled: h,
    focusRipple: !C,
    focusVisibleClassName: we(A.focusVisible, y),
    ref: r,
    type: R,
    ...b,
    classes: A,
    children: [Z, s, J]
  });
});
process.env.NODE_ENV !== "production" && (bn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: l.oneOfType([l.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: l.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * Element placed after the children.
   */
  endIcon: l.node,
  /**
   * @ignore
   */
  focusVisibleClassName: l.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: l.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: l.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["small", "medium", "large"]), l.string]),
  /**
   * Element placed before the children.
   */
  startIcon: l.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @ignore
   */
  type: l.oneOfType([l.oneOf(["button", "reset", "submit"]), l.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: l.oneOfType([l.oneOf(["contained", "outlined", "text"]), l.string])
});
function pu(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ ee.jsx(
      bn,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: t, color: n },
        children: r
      }
    )
  );
}
function hu(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a, hoverTxtcolor: s, hoverBgcolor: f, bordercolor: d, borderwidth: p } = e;
  return /* @__PURE__ */ ee.jsx(
    bn,
    {
      type: "button",
      onClick: i,
      disabled: o,
      size: a,
      sx: {
        backgroundColor: t,
        color: n,
        "&:hover": {
          backgroundColor: f || t,
          color: s || n,
          border: `${p || "1px"} solid ${d || "transparent"}`
        }
      },
      children: r
    }
  );
}
function Fl(e) {
  return Le("MuiIconButton", e);
}
const Vl = Xe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Ll = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${ne(n)}`, o && `edge${ne(o)}`, `size${ne(i)}`]
  };
  return et(a, Fl, t);
}, Wl = je(yn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${ne(r.color)}`], r.edge && t[`edge${ne(r.edge)}`], t[`size${ne(r.size)}`]];
  }
})(lt(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge(e.palette.action.active, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), lt(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ge((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Vl.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), vn = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Je({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: f = !1,
    disableFocusRipple: d = !1,
    disableRipple: p = !1,
    size: h = "medium",
    ...g
  } = n, C = {
    ...n,
    edge: o,
    color: s,
    disabled: f,
    disableFocusRipple: d,
    disableRipple: p,
    size: h
  }, S = Ll(C);
  return /* @__PURE__ */ ee.jsx(Wl, {
    className: we(S.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: f,
    disableRipple: p,
    ref: r,
    ...g,
    ownerState: C,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (vn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Er(l.node, (e) => N.Children.toArray(e.children).some((r) => /* @__PURE__ */ N.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: l.oneOfType([l.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: l.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: l.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: l.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: l.oneOfType([l.oneOf(["small", "medium", "large"]), l.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function Ul(e) {
  return Le("MuiSvgIcon", e);
}
Xe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Yl = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ne(t)}`, `fontSize${ne(r)}`]
  };
  return et(o, Ul, n);
}, ql = je("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ne(r.color)}`], t[`fontSize${ne(r.fontSize)}`]];
  }
})(lt(({
  theme: e
}) => {
  var t, r, n, o, i, a, s, f, d, p, h, g, C, S;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (y) => !y.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((f = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : f.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : p.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, y]) => y && y.main).map(([y]) => {
        var m, E;
        return {
          props: {
            color: y
          },
          style: {
            color: (E = (m = (e.vars ?? e).palette) == null ? void 0 : m[y]) == null ? void 0 : E.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (g = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : g.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (S = (C = (e.vars ?? e).palette) == null ? void 0 : C.action) == null ? void 0 : S.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), zt = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Je({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: f = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: h,
    viewBox: g = "0 0 24 24",
    ...C
  } = n, S = /* @__PURE__ */ N.isValidElement(o) && o.type === "svg", y = {
    ...n,
    color: a,
    component: s,
    fontSize: f,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: g,
    hasSvgAsChild: S
  }, m = {};
  p || (m.viewBox = g);
  const E = Yl(y);
  return /* @__PURE__ */ ee.jsxs(ql, {
    as: s,
    className: we(E.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: r,
    ...m,
    ...C,
    ...S && o.props,
    ownerState: y,
    children: [S ? o.props.children : o, h ? /* @__PURE__ */ ee.jsx("title", {
      children: h
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (zt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: l.oneOfType([l.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: l.oneOfType([l.oneOf(["inherit", "large", "medium", "small"]), l.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: l.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: l.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: l.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: l.string
});
zt && (zt.muiName = "SvgIcon");
function ti(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ ee.jsx(zt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = zt.muiName, /* @__PURE__ */ N.memo(/* @__PURE__ */ N.forwardRef(r));
}
const ri = ti(/* @__PURE__ */ ee.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function mu(e) {
  const { bgcolor: t, disabled: r, onClick: n } = e;
  return /* @__PURE__ */ ee.jsx(
    vn,
    {
      onClick: n,
      disabled: r,
      sx: { color: t },
      children: /* @__PURE__ */ ee.jsx(ri, {})
    }
  );
}
const Gl = ti(/* @__PURE__ */ ee.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function gu(e) {
  const { bgcolor: t, disabled: r, onClick: n } = e;
  return /* @__PURE__ */ ee.jsx(
    vn,
    {
      onClick: n,
      disabled: r,
      sx: { color: t },
      children: /* @__PURE__ */ ee.jsx(Gl, {})
    }
  );
}
function Kl(e) {
  return Le("MuiPaper", e);
}
Xe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Hl = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return et(i, Kl, o);
}, Xl = je("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(lt(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), ni = /* @__PURE__ */ N.forwardRef(function(t, r) {
  var C;
  const n = Je({
    props: t,
    name: "MuiPaper"
  }), o = fl(), {
    className: i,
    component: a = "div",
    elevation: s = 1,
    square: f = !1,
    variant: d = "elevation",
    ...p
  } = n, h = {
    ...n,
    component: a,
    elevation: s,
    square: f,
    variant: d
  }, g = Hl(h);
  return process.env.NODE_ENV !== "production" && o.shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ ee.jsx(Xl, {
    as: a,
    ownerState: h,
    className: we(g.root, i),
    ref: r,
    ...p,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[s],
        ...o.vars && {
          "--Paper-overlay": (C = o.vars.overlays) == null ? void 0 : C[s]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ge("#fff", Xr(s))}, ${Ge("#fff", Xr(s))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Er(Ec, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: l.bool,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: l.oneOfType([l.oneOf(["elevation", "outlined"]), l.string])
});
function Jl(e) {
  return Le("MuiCard", e);
}
Xe("MuiCard", ["root"]);
const Ql = (e) => {
  const {
    classes: t
  } = e;
  return et({
    root: ["root"]
  }, Jl, t);
}, Zl = je(ni, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  overflow: "hidden"
}), oi = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Je({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...a
  } = n, s = {
    ...n,
    raised: i
  }, f = Ql(s);
  return /* @__PURE__ */ ee.jsx(Zl, {
    className: we(f.root, o),
    elevation: i ? 8 : void 0,
    ref: r,
    ownerState: s,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (oi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: Er(l.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function eu(e) {
  return Le("MuiCardContent", e);
}
Xe("MuiCardContent", ["root"]);
const tu = (e) => {
  const {
    classes: t
  } = e;
  return et({
    root: ["root"]
  }, eu, t);
}, ru = je("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), ii = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Je({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...a
  } = n, s = {
    ...n,
    component: i
  }, f = tu(s);
  return /* @__PURE__ */ ee.jsx(ru, {
    as: i,
    className: we(f.root, o),
    ownerState: s,
    ref: r,
    ...a
  });
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
function nu(e) {
  return Le("MuiTypography", e);
}
Xe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const ou = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, iu = dl(), au = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${ne(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return et(s, nu, a);
}, su = je("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${ne(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(lt(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([r, n]) => r !== "inherit" && n && typeof n == "object").map(([r, n]) => ({
      props: {
        variant: r
      },
      style: n
    })), ...Object.entries(e.palette).filter(Dt()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${ne(r)}`
      },
      style: {
        color: (e.vars || e).palette.text[r]
      }
    })), {
      props: ({
        ownerState: r
      }) => r.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), yo = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, ai = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = Je({
    props: t,
    name: "MuiTypography"
  }), i = !ou[n], a = iu({
    ...o,
    ...i && {
      color: n
    }
  }), {
    align: s = "inherit",
    className: f,
    component: d,
    gutterBottom: p = !1,
    noWrap: h = !1,
    paragraph: g = !1,
    variant: C = "body1",
    variantMapping: S = yo,
    ...y
  } = a, m = {
    ...a,
    align: s,
    color: n,
    className: f,
    component: d,
    gutterBottom: p,
    noWrap: h,
    paragraph: g,
    variant: C,
    variantMapping: S
  }, E = d || (g ? "p" : S[C] || yo[C]) || "span", _ = au(m);
  return /* @__PURE__ */ ee.jsx(su, {
    as: E,
    ref: r,
    className: we(_.root, f),
    ...y,
    ownerState: m,
    style: {
      ...s !== "inherit" && {
        "--Typography-textAlign": s
      },
      ...y.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: l.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: l.oneOfType([l.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: l.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: l.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: l.bool,
  /**
   * @ignore
   */
  style: l.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: l.oneOfType([l.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), l.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: l.object
});
function cu(e) {
  return Le("MuiIcon", e);
}
Xe("MuiIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const lu = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ne(t)}`, `fontSize${ne(r)}`]
  };
  return et(o, cu, n);
}, uu = je("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ne(r.color)}`], t[`fontSize${ne(r.fontSize)}`]];
  }
})(lt(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  // Chrome fix for https://issues.chromium.org/issues/41375697
  // To remove at some point.
  overflow: "hidden",
  display: "inline-block",
  // allow overflow hidden to take action
  textAlign: "center",
  // support non-square icon
  flexShrink: 0,
  variants: [{
    props: {
      fontSize: "inherit"
    },
    style: {
      fontSize: "inherit"
    }
  }, {
    props: {
      fontSize: "small"
    },
    style: {
      fontSize: e.typography.pxToRem(20)
    }
  }, {
    props: {
      fontSize: "medium"
    },
    style: {
      fontSize: e.typography.pxToRem(24)
    }
  }, {
    props: {
      fontSize: "large"
    },
    style: {
      fontSize: e.typography.pxToRem(36)
    }
  }, {
    props: {
      color: "action"
    },
    style: {
      color: (e.vars || e).palette.action.active
    }
  }, {
    props: {
      color: "disabled"
    },
    style: {
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: void 0
    }
  }, ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), lr = /* @__PURE__ */ N.forwardRef(function(t, r) {
  const n = Je({
    props: t,
    name: "MuiIcon"
  }), {
    baseClassName: o = "material-icons",
    className: i,
    color: a = "inherit",
    component: s = "span",
    fontSize: f = "medium",
    ...d
  } = n, p = {
    ...n,
    baseClassName: o,
    color: a,
    component: s,
    fontSize: f
  }, h = lu(p);
  return /* @__PURE__ */ ee.jsx(uu, {
    as: s,
    className: we(
      o,
      // Prevent the translation of the text content.
      // The font relies on the exact text content to render the icon.
      "notranslate",
      h.root,
      i
    ),
    ownerState: p,
    "aria-hidden": !0,
    ref: r,
    ...d
  });
});
process.env.NODE_ENV !== "production" && (lr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The base class applied to the icon. Defaults to 'material-icons', but can be changed to any
   * other base class that suits the icon font you're using (for example material-icons-rounded, fas, etc).
   * @default 'material-icons'
   */
  baseClassName: l.string,
  /**
   * The name of the icon font ligature.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'inherit'
   */
  color: l.oneOfType([l.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: l.oneOfType([l.oneOf(["inherit", "large", "medium", "small"]), l.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
lr && (lr.muiName = "Icon");
function yu(e) {
  const { bgcolor: t, text: r, txtcolor: n, height: o, width: i, icon: a, iconColor: s } = e;
  return /* @__PURE__ */ ee.jsx(
    oi,
    {
      sx: {
        backgroundColor: t,
        maxWidth: i || 300,
        height: o || "auto",
        padding: 2,
        boxShadow: 3
      },
      children: /* @__PURE__ */ ee.jsxs(ii, { children: [
        /* @__PURE__ */ ee.jsx(ai, { variant: "body1", sx: { color: n }, children: r }),
        a && /* @__PURE__ */ ee.jsx(lr, { sx: { color: s, fontSize: 40, marginBottom: 1 }, children: a === "favorite" && /* @__PURE__ */ ee.jsx(ri, {}) })
      ] })
    }
  );
}
export {
  yu as ComponentPACP,
  pu as CustomButton,
  hu as MyButton,
  mu as MyFavourite,
  gu as MyFavouriteBorder
};
//# sourceMappingURL=index.es.js.map
