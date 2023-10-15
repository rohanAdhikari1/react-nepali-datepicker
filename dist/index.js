import "./index.css";
import K, { useState as Ye, useRef as gt, useEffect as pt } from "react";
var fe = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function mt() {
  if (We)
    return B;
  We = 1;
  var s = K, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, g, j) {
    var h, v = {}, T = null, A = null;
    j !== void 0 && (T = "" + j), g.key !== void 0 && (T = "" + g.key), g.ref !== void 0 && (A = g.ref);
    for (h in g)
      i.call(g, h) && !d.hasOwnProperty(h) && (v[h] = g[h]);
    if (m && m.defaultProps)
      for (h in g = m.defaultProps, g)
        v[h] === void 0 && (v[h] = g[h]);
    return { $$typeof: n, type: m, key: T, ref: A, props: v, _owner: a.current };
  }
  return B.Fragment = o, B.jsx = p, B.jsxs = p, B;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function _t() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    var s = K, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), k = Symbol.iterator, U = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = k && e[k] || e[U];
      return typeof t == "function" ? t : null;
    }
    var C = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
          r[u - 1] = arguments[u];
        M("error", e, r);
      }
    }
    function M(e, t, r) {
      {
        var u = C.ReactDebugCurrentFrame, b = u.getStackAddendum();
        b !== "" && (t += "%s", r = r.concat([b]));
        var y = r.map(function(f) {
          return String(f);
        });
        y.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var O = !1, P = !1, E = !1, Be = !1, Le = !1, be;
    be = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === d || Le || e === a || e === j || e === h || Be || e === A || O || P || E || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === v || e.$$typeof === p || e.$$typeof === m || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === be || e.getModuleId !== void 0));
    }
    function Ue(e, t, r) {
      var u = e.displayName;
      if (u)
        return u;
      var b = t.displayName || t.name || "";
      return b !== "" ? r + "(" + b + ")" : r;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case o:
          return "Portal";
        case d:
          return "Profiler";
        case a:
          return "StrictMode";
        case j:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var t = e;
            return ve(t) + ".Consumer";
          case p:
            var r = e;
            return ve(r._context) + ".Provider";
          case g:
            return Ue(e, e.render, "ForwardRef");
          case v:
            var u = e.displayName || null;
            return u !== null ? u : D(e.type) || "Memo";
          case T: {
            var b = e, y = b._payload, f = b._init;
            try {
              return D(f(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, G = 0, ye, ge, pe, me, _e, Ie, je;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function Fe() {
      {
        if (G === 0) {
          ye = console.log, ge = console.info, pe = console.warn, me = console.error, _e = console.group, Ie = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        G++;
      }
    }
    function Je() {
      {
        if (G--, G === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ye
            }),
            info: S({}, e, {
              value: ge
            }),
            warn: S({}, e, {
              value: pe
            }),
            error: S({}, e, {
              value: me
            }),
            group: S({}, e, {
              value: _e
            }),
            groupCollapsed: S({}, e, {
              value: Ie
            }),
            groupEnd: S({}, e, {
              value: je
            })
          });
        }
        G < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = C.ReactCurrentDispatcher, te;
    function F(e, t, r) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (b) {
            var u = b.stack.trim().match(/\n( *(at )?)/);
            te = u && u[1] || "";
          }
        return `
` + te + e;
      }
    }
    var re = !1, J;
    {
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      J = new $e();
    }
    function xe(e, t) {
      if (!e || re)
        return "";
      {
        var r = J.get(e);
        if (r !== void 0)
          return r;
      }
      var u;
      re = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ee.current, ee.current = null, Fe();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (w) {
              u = w;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (w) {
              u = w;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            u = w;
          }
          e();
        }
      } catch (w) {
        if (w && u && typeof w.stack == "string") {
          for (var l = w.stack.split(`
`), N = u.stack.split(`
`), _ = l.length - 1, I = N.length - 1; _ >= 1 && I >= 0 && l[_] !== N[I]; )
            I--;
          for (; _ >= 1 && I >= 0; _--, I--)
            if (l[_] !== N[I]) {
              if (_ !== 1 || I !== 1)
                do
                  if (_--, I--, I < 0 || l[_] !== N[I]) {
                    var R = `
` + l[_].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, R), R;
                  }
                while (_ >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        re = !1, ee.current = y, Je(), Error.prepareStackTrace = b;
      }
      var Y = e ? e.displayName || e.name : "", ze = Y ? F(Y) : "";
      return typeof e == "function" && J.set(e, ze), ze;
    }
    function Ve(e, t, r) {
      return xe(e, !1);
    }
    function Xe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function $(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Xe(e));
      if (typeof e == "string")
        return F(e);
      switch (e) {
        case j:
          return F("Suspense");
        case h:
          return F("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ve(e.render);
          case v:
            return $(e.type, t, r);
          case T: {
            var u = e, b = u._payload, y = u._init;
            try {
              return $(y(b), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, Ee = {}, Ne = C.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var t = e._owner, r = $(e.type, e._source, t ? t.type : null);
        Ne.setExtraStackFrame(r);
      } else
        Ne.setExtraStackFrame(null);
    }
    function Qe(e, t, r, u, b) {
      {
        var y = Function.call.bind(V);
        for (var f in e)
          if (y(e, f)) {
            var l = void 0;
            try {
              if (typeof e[f] != "function") {
                var N = Error((u || "React class") + ": " + r + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              l = e[f](t, f, u, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              l = _;
            }
            l && !(l instanceof Error) && (X(b), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", r, f, typeof l), X(null)), l instanceof Error && !(l.message in Ee) && (Ee[l.message] = !0, X(b), x("Failed %s type: %s", r, l.message), X(null));
          }
      }
    }
    var qe = Array.isArray;
    function se(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function et(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function De(e) {
      if (et(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Re(e);
    }
    var Z = C.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Ce, ne;
    ne = {};
    function rt(e) {
      if (V.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function st(e) {
      if (V.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nt(e, t) {
      if (typeof e.ref == "string" && Z.current && t && Z.current.stateNode !== t) {
        var r = D(Z.current.type);
        ne[r] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(Z.current.type), e.ref), ne[r] = !0);
      }
    }
    function at(e, t) {
      {
        var r = function() {
          we || (we = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function it(e, t) {
      {
        var r = function() {
          Ce || (Ce = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var ot = function(e, t, r, u, b, y, f) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: f,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ut(e, t, r, u, b) {
      {
        var y, f = {}, l = null, N = null;
        r !== void 0 && (De(r), l = "" + r), st(t) && (De(t.key), l = "" + t.key), rt(t) && (N = t.ref, nt(t, b));
        for (y in t)
          V.call(t, y) && !tt.hasOwnProperty(y) && (f[y] = t[y]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (y in _)
            f[y] === void 0 && (f[y] = _[y]);
        }
        if (l || N) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && at(f, I), N && it(f, I);
        }
        return ot(e, l, N, b, u, Z.current, f);
      }
    }
    var ae = C.ReactCurrentOwner, Oe = C.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var t = e._owner, r = $(e.type, e._source, t ? t.type : null);
        Oe.setExtraStackFrame(r);
      } else
        Oe.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Me() {
      {
        if (ae.current) {
          var e = D(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ct(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), r = e.lineNumber;
          return `

Check your code at ` + t + ":" + r + ".";
        }
        return "";
      }
    }
    var Se = {};
    function lt(e) {
      {
        var t = Me();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Ae(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = lt(t);
        if (Se[r])
          return;
        Se[r] = !0;
        var u = "";
        e && e._owner && e._owner !== ae.current && (u = " It was passed a child from " + D(e._owner.type) + "."), z(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, u), z(null);
      }
    }
    function ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var r = 0; r < e.length; r++) {
            var u = e[r];
            oe(u) && Ae(u, t);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = W(e);
          if (typeof b == "function" && b !== e.entries)
            for (var y = b.call(e), f; !(f = y.next()).done; )
              oe(f.value) && Ae(f.value, t);
        }
      }
    }
    function dt(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === v))
          r = t.propTypes;
        else
          return;
        if (r) {
          var u = D(t);
          Qe(r, e.props, "prop", u, e);
        } else if (t.PropTypes !== void 0 && !ie) {
          ie = !0;
          var b = D(t);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ft(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var u = t[r];
          if (u !== "children" && u !== "key") {
            z(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Pe(e, t, r, u, b, y) {
      {
        var f = He(e);
        if (!f) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = ct(b);
          N ? l += N : l += Me();
          var _;
          e === null ? _ = "null" : se(e) ? _ = "array" : e !== void 0 && e.$$typeof === n ? (_ = "<" + (D(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, l);
        }
        var I = ut(e, t, r, b, y);
        if (I == null)
          return I;
        if (f) {
          var R = t.children;
          if (R !== void 0)
            if (u)
              if (se(R)) {
                for (var Y = 0; Y < R.length; Y++)
                  ke(R[Y], e);
                Object.freeze && Object.freeze(R);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(R, e);
        }
        return e === i ? ft(I) : dt(I), I;
      }
    }
    function ht(e, t, r) {
      return Pe(e, t, r, !0);
    }
    function bt(e, t, r) {
      return Pe(e, t, r, !1);
    }
    var vt = bt, yt = ht;
    L.Fragment = i, L.jsx = vt, L.jsxs = yt;
  }()), L;
}
process.env.NODE_ENV === "production" ? fe.exports = mt() : fe.exports = _t();
var c = fe.exports;
const It = "_daybutton_w5ry6_1", jt = "_daynormal_w5ry6_21", Tt = "_dayselected_w5ry6_39", xt = "_today_w5ry6_53", q = {
  daybutton: It,
  daynormal: jt,
  dayselected: Tt,
  today: xt
};
class he {
  constructor() {
    this.bs_date_eq = "09/17/2000", this.ad_date_eq = "01/01/1944", this.bs = [], this.bs[2e3] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2001] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2002] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2003] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2004] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2005] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2006] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2007] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2008] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], this.bs[2009] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2010] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2011] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2012] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], this.bs[2013] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2014] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2015] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2016] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], this.bs[2017] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2018] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2019] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2020] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2021] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2022] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], this.bs[2023] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2024] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2025] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2026] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2027] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2028] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2029] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], this.bs[2030] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2031] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2032] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2033] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2034] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2035] = [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], this.bs[2036] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2037] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2038] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2039] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], this.bs[2040] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2041] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2042] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2043] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], this.bs[2044] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2045] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2046] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2047] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2048] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2049] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], this.bs[2050] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2051] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2052] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2053] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], this.bs[2054] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2055] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2056] = [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], this.bs[2057] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2058] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2059] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2060] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2061] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2062] = [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31], this.bs[2063] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2064] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2065] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2066] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], this.bs[2067] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2068] = [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2069] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2070] = [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], this.bs[2071] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2072] = [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], this.bs[2073] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], this.bs[2074] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2075] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2076] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], this.bs[2077] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], this.bs[2078] = [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2079] = [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], this.bs[2080] = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], this.bs[2081] = [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], this.bs[2082] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], this.bs[2083] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], this.bs[2084] = [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], this.bs[2085] = [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30], this.bs[2086] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], this.bs[2087] = [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], this.bs[2088] = [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30], this.bs[2089] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], this.bs[2090] = [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], this.count_ad_days = Mt, this.count_bs_days = St, this.add_bs_days = kt, this.add_ad_days = At, this.bs2ad = Pt, this.ad2bs = zt;
  }
}
function Q(s) {
  return s = parseInt(s, 10), 10 > s ? "0" + s : "" + s;
}
function Et(s) {
  var n = Rt(s), o = n.split("-"), i = o[2], a = o[1], d = o[0], p = new Date(d, a - 1, i), m = p.getDay();
  return m;
}
function Nt(s, n) {
  var o = new he();
  return o.bs[s][n];
}
function Rt(s) {
  var n = new he();
  return n.bs2ad(Ct(s));
}
function Dt() {
  var s = new he();
  return s.ad2bs(wt("/"));
}
function wt(s) {
  var n = /* @__PURE__ */ new Date(), o = n.getDate(), i = n.getMonth() + 1, a = n.getFullYear();
  return i + s + o + s + a;
}
function Ct(s) {
  var n = s.split("-"), o = n[2], i = n[1], a = n[0];
  return i + "/" + o + "/" + a;
}
function H(s) {
  s = "" + s;
  for (var n = "", o = 0; o < s.length; o++)
    n += Ot(s[o]);
  return n;
}
function Ot(s) {
  switch (s) {
    case "०":
      return 0;
    case "१":
      return 1;
    case "२":
      return 2;
    case "३":
      return 3;
    case "४":
      return 4;
    case "५":
      return 5;
    case "६":
      return 6;
    case "७":
      return 7;
    case "८":
      return 8;
    case "९":
      return 9;
    case "0":
      return "०";
    case "1":
      return "१";
    case "2":
      return "२";
    case "3":
      return "३";
    case "4":
      return "४";
    case "5":
      return "५";
    case "6":
      return "६";
    case "7":
      return "७";
    case "8":
      return "८";
    case "9":
      return "९";
  }
}
function ue(s) {
  const n = s.split("-");
  return parseInt(n[0], 10);
}
function ce(s) {
  const n = s.split("-");
  return parseInt(n[1], 10) - 1;
}
function le(s) {
  const n = s.split("-");
  return parseInt(n[2], 10);
}
function Mt(s, n) {
  var o = 864e5, i = s.split("/"), a = n.split("/");
  i[2] = +i[2], i[1] = +i[1], i[0] = +i[0], a[2] = +a[2], a[1] = +a[1], a[0] = +a[0];
  var d = new Date(i[2], i[0] - 1, i[1]), p = new Date(a[2], a[0] - 1, a[1]), m = Math.ceil((p.getTime() - d.getTime()) / o);
  return m;
}
function St(s, n) {
  var o = s.split("/"), i = n.split("/"), a = +o[2], d = +o[0], p = +o[1], m = +i[2], g = +i[0], j = +i[1], h = 0, v = 0;
  for (v = a; m >= v; v++)
    h += Yt(this.bs[v]);
  for (v = 0; d > v; v++)
    h -= this.bs[a][v];
  for (h += this.bs[a][11], v = g - 1; 12 > v; v++)
    h -= this.bs[m][v];
  return h -= p + 1, h += j - 1;
}
function At(s, n) {
  var o = new Date(s);
  o.setDate(o.getDate() + n);
  const i = o.getMonth() + 1, a = o.getDate();
  return o.getFullYear() + "-" + (i < 10 ? "0" + i : i) + "-" + (a < 10 ? "0" + a : a);
}
function kt(s, n) {
  var o = s.split("/"), i = +o[2], a = +o[0], d = +o[1];
  for (d += n; d > this.bs[i][a - 1]; )
    d -= this.bs[i][a - 1], a++, a > 12 && (a = 1, i++);
  return i + "-" + (10 > a ? "0" + a : a) + "-" + (10 > d ? "0" + d : d);
}
function Pt(s) {
  const n = this.count_bs_days(this.bs_date_eq, s);
  return this.add_ad_days(this.ad_date_eq, n);
}
function zt(s) {
  const n = this.count_ad_days(this.ad_date_eq, s);
  return this.add_bs_days(this.bs_date_eq, n);
}
const Yt = function(s) {
  for (var n = 0, o = s.length; o; n += s[--o])
    ;
  return n;
}, de = ({ onSelect: s, className: n, day: o, engday: i, setIsOpen: a, month: d, year: p, setInputdate: m, format: g }) => {
  const j = () => {
    m(`${p}-${Q(d + 1)}-${Q(i)}`), s(`${p}-${Q(d + 1)}-${Q(i)}`), a(!1);
  };
  return /* @__PURE__ */ c.jsx("button", { className: `${q.daybutton} ${n}`, onClick: j, children: o });
};
const Ze = ({ options: s, value: n, setValue: o, year: i }) => /* @__PURE__ */ c.jsx("select", { className: "datepicker-select", value: n, onChange: (a) => {
  o(a.target.value);
}, children: s.map(
  (a, d) => i ? /* @__PURE__ */ c.jsx("option", { value: H(a), children: a }, d) : /* @__PURE__ */ c.jsx("option", { value: d, children: a }, d)
) }), Wt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8ZGVmcz4KPC9kZWZzPgo8ZyBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDA7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNDA2NTkzNDA2NTkzNDAxNiAxLjQwNjU5MzQwNjU5MzQwMTYpIHNjYWxlKDIuODEgMi44MSkiID4KCTxwYXRoIGQ9Ik0gMi4xNSA0MS41NTEgTCA4NC40NTUgMS4xNjcgYyAzLjEzMSAtMS41MzYgNi41MjQgMS41NTggNS4yODIgNC44MTcgTCA3NS4zOTUgNDMuNjMyIGMgLTAuMzM2IDAuODgxIC0wLjMzNiAxLjg1NCAwIDIuNzM1IGwgMTQuMzQyIDM3LjY0OCBjIDEuMjQxIDMuMjU5IC0yLjE1MiA2LjM1MyAtNS4yODIgNC44MTcgTCAyLjE1IDQ4LjQ0OSBDIC0wLjcxNyA0Ny4wNDMgLTAuNzE3IDQyLjk1NyAyLjE1IDQxLjU1MSB6IiBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IHJnYig3MSw3MCw2OCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIG1hdHJpeCgxIDAgMCAxIDAgMCkgIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CjwvZz4KPC9zdmc+", Gt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8ZGVmcz4KPC9kZWZzPgo8ZyBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDA7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NC41OTM0MDY1OTM0MDY1NCAyNTQuNTkzNDA2NTkzNDA2NTQpIHJvdGF0ZSgxODApIHNjYWxlKDIuODEgMi44MSkiID4KCTxwYXRoIGQ9Ik0gMi4xNSA0MS41NTEgTCA4NC40NTUgMS4xNjcgYyAzLjEzMSAtMS41MzYgNi41MjQgMS41NTggNS4yODIgNC44MTcgTCA3NS4zOTUgNDMuNjMyIGMgLTAuMzM2IDAuODgxIC0wLjMzNiAxLjg1NCAwIDIuNzM1IGwgMTQuMzQyIDM3LjY0OCBjIDEuMjQxIDMuMjU5IC0yLjE1MiA2LjM1MyAtNS4yODIgNC44MTcgTCAyLjE1IDQ4LjQ0OSBDIC0wLjcxNyA0Ny4wNDMgLTAuNzE3IDQyLjk1NyAyLjE1IDQxLjU1MSB6IiBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IHJnYig3MSw3MCw2OCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIG1hdHJpeCgxIDAgMCAxIDAgMCkgIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CjwvZz4KPC9zdmc+", Zt = ({ year: s, month: n, setyear: o, setmonth: i }) => {
  const a = ["बैशाख", "जेठ", "असार", "श्रावण", "भदौ", "आश्विन", "कार्तिक", "मंसिर", "पुष", "माघ", "फाल्गुन", "चैत्र"], d = [];
  for (let p = 2e3; p <= 2090; p++)
    d.push(H(p));
  return /* @__PURE__ */ c.jsxs("div", { className: "picker-header-container", children: [
    /* @__PURE__ */ c.jsx("div", { className: `prev-btn ${s <= 2e3 ? "hide" : ""}`, onClick: () => {
      n == 0 ? (i(11), o(s - 1)) : i(n - 1);
    }, children: /* @__PURE__ */ c.jsx("img", { src: Wt, height: 15, alt: "Previous Button" }) }),
    /* @__PURE__ */ c.jsx("div", { className: "month-select", children: /* @__PURE__ */ c.jsx(Ze, { options: a, value: n, setValue: i }) }),
    /* @__PURE__ */ c.jsx("div", { className: "year-select", children: /* @__PURE__ */ c.jsx(Ze, { options: d, year: !0, value: s, setValue: o }) }),
    /* @__PURE__ */ c.jsx("div", { className: `next-btn ${s >= 2090 ? "hide" : ""}`, onClick: () => {
      n == 11 ? (i(0), o(s + 1)) : i(n + 1);
    }, children: /* @__PURE__ */ c.jsx("img", { src: Gt, height: 15, alt: "Next Button" }) })
  ] });
}, Bt = ({ onSelect: s, setInputdate: n, inputdate: o, setIsOpen: i, format: a }) => {
  const d = Dt(), p = ue(d), m = ce(d), g = le(d), j = o || d;
  le(j);
  const [h, v] = K.useState(ue(j)), [T, A] = K.useState(ce(j));
  var k = Et(`${h}-${T + 1}-1`), U = Nt(h, T);
  const W = 7;
  var C = Math.ceil((U + k) / W);
  const x = [];
  for (let M = 0; M < C; M++) {
    const O = [];
    for (let P = 1; P <= W; P++) {
      const E = M * W + P - k;
      M === 0 && P <= k ? O.push(/* @__PURE__ */ c.jsx("td", {}, E)) : E <= U ? h == p && T == m && E == g ? O.push(/* @__PURE__ */ c.jsx("td", { children: /* @__PURE__ */ c.jsx(de, { onSelect: s, format: a, day: H(E), setIsOpen: i, engday: E, setInputdate: n, year: h, month: T, className: q.today }) }, E)) : h == ue(j) && T == ce(j) && E == le(j) ? (console.log("selected day found"), O.push(/* @__PURE__ */ c.jsx("td", { children: /* @__PURE__ */ c.jsx(de, { onSelect: s, format: a, day: H(E), setIsOpen: i, engday: E, setInputdate: n, year: h, month: T, className: q.dayselected }) }, E))) : O.push(/* @__PURE__ */ c.jsx("td", { children: /* @__PURE__ */ c.jsx(de, { onSelect: s, format: a, day: H(E), setIsOpen: i, engday: E, setInputdate: n, year: h, month: T, className: q.daynormal }) }, E)) : O.push(/* @__PURE__ */ c.jsx("td", {}, E));
    }
    x.push(/* @__PURE__ */ c.jsx("tr", { children: O }, M));
  }
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(Zt, { year: h, month: T, setyear: v, setmonth: A }) }),
    /* @__PURE__ */ c.jsx("div", { className: "datepicker-table", children: /* @__PURE__ */ c.jsx("table", { children: /* @__PURE__ */ c.jsxs("tbody", { children: [
      /* @__PURE__ */ c.jsxs("tr", { children: [
        /* @__PURE__ */ c.jsx("th", { children: "आ" }),
        /* @__PURE__ */ c.jsx("th", { children: "सो" }),
        /* @__PURE__ */ c.jsx("th", { children: "मं" }),
        /* @__PURE__ */ c.jsx("th", { children: "बु" }),
        /* @__PURE__ */ c.jsx("th", { children: "बि" }),
        /* @__PURE__ */ c.jsx("th", { children: "श" }),
        /* @__PURE__ */ c.jsx("th", { children: "शं" })
      ] }),
      x
    ] }) }) })
  ] });
};
function Ut({ inputprops: s, className: n, value: o, format: i, children: a, onSelect: d }) {
  const [p, m] = Ye(!1), [g, j] = Ye(o || ""), h = gt(null), v = (T) => {
    h.current && !h.current.contains(T.target) && m(!1);
  };
  return pt(() => (document.addEventListener("mousedown", v), () => {
    document.removeEventListener("mousedown", v);
  }), []), /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs("div", { style: {
    position: "relative",
    display: "inline-block"
  }, className: n, ref: h, children: [
    /* @__PURE__ */ c.jsx("input", { type: "text", value: g, onFocus: () => m(!0), readOnly: !0, className: "Nepali-date-picker", ...s }),
    a,
    p && /* @__PURE__ */ c.jsx("div", { className: "picker-container", children: /* @__PURE__ */ c.jsx(Bt, { onSelect: d, format: i, inputdate: g, setIsOpen: m, setInputdate: j }) })
  ] }) });
}
export {
  he as NepaliDateConverter,
  Ut as NepaliDatepicker
};
//# sourceMappingURL=index.js.map
