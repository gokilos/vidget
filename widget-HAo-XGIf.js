var Gi = Object.defineProperty;
var Vn = (n) => {
  throw TypeError(n);
};
var Ji = (n, e, t) => e in n ? Gi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var G = (n, e, t) => Ji(n, typeof e != "symbol" ? e + "" : e, t), Ki = (n, e, t) => e.has(n) || Vn("Cannot " + t);
var Hn = (n, e, t) => e.has(n) ? Vn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t);
var Ft = (n, e, t) => (Ki(n, e, "access private method"), t);
import * as g from "react";
import _e, { useState as ie, forwardRef as cn, createElement as qr, useEffect as Ce, useRef as We } from "react";
import * as Yi from "react-dom";
import Is from "react-dom";
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Uh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Xi(n) {
  if (n.__esModule) return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(t, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), t;
}
var Vr = { exports: {} }, kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function Zi() {
  if (Gn) return kt;
  Gn = 1;
  var n = _e, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, u) {
    var c, h = {}, d = null, p = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l) r.call(l, c) && !o.hasOwnProperty(c) && (h[c] = l[c]);
    if (a && a.defaultProps) for (c in l = a.defaultProps, l) h[c] === void 0 && (h[c] = l[c]);
    return { $$typeof: e, type: a, key: d, ref: p, props: h, _owner: s.current };
  }
  return kt.Fragment = t, kt.jsx = i, kt.jsxs = i, kt;
}
var xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function Qi() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var n = _e, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = Symbol.iterator, m = "@@iterator";
    function w(f) {
      if (f === null || typeof f != "object")
        return null;
      var T = y && f[y] || f[m];
      return typeof T == "function" ? T : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(f) {
      {
        for (var T = arguments.length, A = new Array(T > 1 ? T - 1 : 0), N = 1; N < T; N++)
          A[N - 1] = arguments[N];
        k("error", f, A);
      }
    }
    function k(f, T, A) {
      {
        var N = S.ReactDebugCurrentFrame, H = N.getStackAddendum();
        H !== "" && (T += "%s", A = A.concat([H]));
        var Y = A.map(function(q) {
          return String(q);
        });
        Y.unshift("Warning: " + T), Function.prototype.apply.call(console[f], console, Y);
      }
    }
    var x = !1, C = !1, $ = !1, j = !1, D = !1, P;
    P = Symbol.for("react.module.reference");
    function z(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === o || D || f === s || f === u || f === c || j || f === p || x || C || $ || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === h || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === P || f.getModuleId !== void 0));
    }
    function X(f, T, A) {
      var N = f.displayName;
      if (N)
        return N;
      var H = T.displayName || T.name || "";
      return H !== "" ? A + "(" + H + ")" : A;
    }
    function L(f) {
      return f.displayName || "Context";
    }
    function le(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            var T = f;
            return L(T) + ".Consumer";
          case i:
            var A = f;
            return L(A._context) + ".Provider";
          case l:
            return X(f, f.render, "ForwardRef");
          case h:
            var N = f.displayName || null;
            return N !== null ? N : le(f.type) || "Memo";
          case d: {
            var H = f, Y = H._payload, q = H._init;
            try {
              return le(q(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, Re = 0, _, E, I, V, F, ee, ne;
    function yt() {
    }
    yt.__reactDisabledLog = !0;
    function wi() {
      {
        if (Re === 0) {
          _ = console.log, E = console.info, I = console.warn, V = console.error, F = console.group, ee = console.groupCollapsed, ne = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: yt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        Re++;
      }
    }
    function _i() {
      {
        if (Re--, Re === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, f, {
              value: _
            }),
            info: de({}, f, {
              value: E
            }),
            warn: de({}, f, {
              value: I
            }),
            error: de({}, f, {
              value: V
            }),
            group: de({}, f, {
              value: F
            }),
            groupCollapsed: de({}, f, {
              value: ee
            }),
            groupEnd: de({}, f, {
              value: ne
            })
          });
        }
        Re < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yr = S.ReactCurrentDispatcher, wr;
    function Dt(f, T, A) {
      {
        if (wr === void 0)
          try {
            throw Error();
          } catch (H) {
            var N = H.stack.trim().match(/\n( *(at )?)/);
            wr = N && N[1] || "";
          }
        return `
` + wr + f;
      }
    }
    var _r = !1, Nt;
    {
      var ki = typeof WeakMap == "function" ? WeakMap : Map;
      Nt = new ki();
    }
    function $n(f, T) {
      if (!f || _r)
        return "";
      {
        var A = Nt.get(f);
        if (A !== void 0)
          return A;
      }
      var N;
      _r = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = yr.current, yr.current = null, wi();
      try {
        if (T) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (he) {
              N = he;
            }
            Reflect.construct(f, [], q);
          } else {
            try {
              q.call();
            } catch (he) {
              N = he;
            }
            f.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            N = he;
          }
          f();
        }
      } catch (he) {
        if (he && N && typeof he.stack == "string") {
          for (var B = he.stack.split(`
`), ce = N.stack.split(`
`), re = B.length - 1, se = ce.length - 1; re >= 1 && se >= 0 && B[re] !== ce[se]; )
            se--;
          for (; re >= 1 && se >= 0; re--, se--)
            if (B[re] !== ce[se]) {
              if (re !== 1 || se !== 1)
                do
                  if (re--, se--, se < 0 || B[re] !== ce[se]) {
                    var we = `
` + B[re].replace(" at new ", " at ");
                    return f.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", f.displayName)), typeof f == "function" && Nt.set(f, we), we;
                  }
                while (re >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        _r = !1, yr.current = Y, _i(), Error.prepareStackTrace = H;
      }
      var nt = f ? f.displayName || f.name : "", Ge = nt ? Dt(nt) : "";
      return typeof f == "function" && Nt.set(f, Ge), Ge;
    }
    function xi(f, T, A) {
      return $n(f, !1);
    }
    function Si(f) {
      var T = f.prototype;
      return !!(T && T.isReactComponent);
    }
    function Mt(f, T, A) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return $n(f, Si(f));
      if (typeof f == "string")
        return Dt(f);
      switch (f) {
        case u:
          return Dt("Suspense");
        case c:
          return Dt("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return xi(f.render);
          case h:
            return Mt(f.type, T, A);
          case d: {
            var N = f, H = N._payload, Y = N._init;
            try {
              return Mt(Y(H), T, A);
            } catch {
            }
          }
        }
      return "";
    }
    var wt = Object.prototype.hasOwnProperty, jn = {}, On = S.ReactDebugCurrentFrame;
    function Ut(f) {
      if (f) {
        var T = f._owner, A = Mt(f.type, f._source, T ? T.type : null);
        On.setExtraStackFrame(A);
      } else
        On.setExtraStackFrame(null);
    }
    function Ei(f, T, A, N, H) {
      {
        var Y = Function.call.bind(wt);
        for (var q in f)
          if (Y(f, q)) {
            var B = void 0;
            try {
              if (typeof f[q] != "function") {
                var ce = Error((N || "React class") + ": " + A + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              B = f[q](T, q, N, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              B = re;
            }
            B && !(B instanceof Error) && (Ut(H), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", A, q, typeof B), Ut(null)), B instanceof Error && !(B.message in jn) && (jn[B.message] = !0, Ut(H), b("Failed %s type: %s", A, B.message), Ut(null));
          }
      }
    }
    var Ci = Array.isArray;
    function kr(f) {
      return Ci(f);
    }
    function Ti(f) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, A = T && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return A;
      }
    }
    function Ri(f) {
      try {
        return In(f), !1;
      } catch {
        return !0;
      }
    }
    function In(f) {
      return "" + f;
    }
    function Ln(f) {
      if (Ri(f))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ti(f)), In(f);
    }
    var _t = S.ReactCurrentOwner, Ai = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dn, Nn, xr;
    xr = {};
    function Pi(f) {
      if (wt.call(f, "ref")) {
        var T = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function $i(f) {
      if (wt.call(f, "key")) {
        var T = Object.getOwnPropertyDescriptor(f, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function ji(f, T) {
      if (typeof f.ref == "string" && _t.current && T && _t.current.stateNode !== T) {
        var A = le(_t.current.type);
        xr[A] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', le(_t.current.type), f.ref), xr[A] = !0);
      }
    }
    function Oi(f, T) {
      {
        var A = function() {
          Dn || (Dn = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        A.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: A,
          configurable: !0
        });
      }
    }
    function Ii(f, T) {
      {
        var A = function() {
          Nn || (Nn = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        A.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: A,
          configurable: !0
        });
      }
    }
    var Li = function(f, T, A, N, H, Y, q) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: T,
        ref: A,
        props: q,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function Di(f, T, A, N, H) {
      {
        var Y, q = {}, B = null, ce = null;
        A !== void 0 && (Ln(A), B = "" + A), $i(T) && (Ln(T.key), B = "" + T.key), Pi(T) && (ce = T.ref, ji(T, H));
        for (Y in T)
          wt.call(T, Y) && !Ai.hasOwnProperty(Y) && (q[Y] = T[Y]);
        if (f && f.defaultProps) {
          var re = f.defaultProps;
          for (Y in re)
            q[Y] === void 0 && (q[Y] = re[Y]);
        }
        if (B || ce) {
          var se = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          B && Oi(q, se), ce && Ii(q, se);
        }
        return Li(f, B, ce, H, N, _t.current, q);
      }
    }
    var Sr = S.ReactCurrentOwner, Mn = S.ReactDebugCurrentFrame;
    function rt(f) {
      if (f) {
        var T = f._owner, A = Mt(f.type, f._source, T ? T.type : null);
        Mn.setExtraStackFrame(A);
      } else
        Mn.setExtraStackFrame(null);
    }
    var Er;
    Er = !1;
    function Cr(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function Un() {
      {
        if (Sr.current) {
          var f = le(Sr.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Ni(f) {
      return "";
    }
    var Fn = {};
    function Mi(f) {
      {
        var T = Un();
        if (!T) {
          var A = typeof f == "string" ? f : f.displayName || f.name;
          A && (T = `

Check the top-level render call using <` + A + ">.");
        }
        return T;
      }
    }
    function zn(f, T) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var A = Mi(T);
        if (Fn[A])
          return;
        Fn[A] = !0;
        var N = "";
        f && f._owner && f._owner !== Sr.current && (N = " It was passed a child from " + le(f._owner.type) + "."), rt(f), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, N), rt(null);
      }
    }
    function Bn(f, T) {
      {
        if (typeof f != "object")
          return;
        if (kr(f))
          for (var A = 0; A < f.length; A++) {
            var N = f[A];
            Cr(N) && zn(N, T);
          }
        else if (Cr(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var H = w(f);
          if (typeof H == "function" && H !== f.entries)
            for (var Y = H.call(f), q; !(q = Y.next()).done; )
              Cr(q.value) && zn(q.value, T);
        }
      }
    }
    function Ui(f) {
      {
        var T = f.type;
        if (T == null || typeof T == "string")
          return;
        var A;
        if (typeof T == "function")
          A = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === h))
          A = T.propTypes;
        else
          return;
        if (A) {
          var N = le(T);
          Ei(A, f.props, "prop", N, f);
        } else if (T.PropTypes !== void 0 && !Er) {
          Er = !0;
          var H = le(T);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fi(f) {
      {
        for (var T = Object.keys(f.props), A = 0; A < T.length; A++) {
          var N = T[A];
          if (N !== "children" && N !== "key") {
            rt(f), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), rt(null);
            break;
          }
        }
        f.ref !== null && (rt(f), b("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
      }
    }
    var Wn = {};
    function qn(f, T, A, N, H, Y) {
      {
        var q = z(f);
        if (!q) {
          var B = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Ni();
          ce ? B += ce : B += Un();
          var re;
          f === null ? re = "null" : kr(f) ? re = "array" : f !== void 0 && f.$$typeof === e ? (re = "<" + (le(f.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : re = typeof f, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, B);
        }
        var se = Di(f, T, A, H, Y);
        if (se == null)
          return se;
        if (q) {
          var we = T.children;
          if (we !== void 0)
            if (N)
              if (kr(we)) {
                for (var nt = 0; nt < we.length; nt++)
                  Bn(we[nt], f);
                Object.freeze && Object.freeze(we);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Bn(we, f);
        }
        if (wt.call(T, "key")) {
          var Ge = le(f), he = Object.keys(T).filter(function(Hi) {
            return Hi !== "key";
          }), Tr = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wn[Ge + Tr]) {
            var Vi = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Tr, Ge, Vi, Ge), Wn[Ge + Tr] = !0;
          }
        }
        return f === r ? Fi(se) : Ui(se), se;
      }
    }
    function zi(f, T, A) {
      return qn(f, T, A, !0);
    }
    function Bi(f, T, A) {
      return qn(f, T, A, !1);
    }
    var Wi = Bi, qi = zi;
    xt.Fragment = r, xt.jsx = Wi, xt.jsxs = qi;
  }()), xt;
}
process.env.NODE_ENV === "production" ? Vr.exports = Zi() : Vr.exports = Qi();
var v = Vr.exports, Hr, zt = Is;
if (process.env.NODE_ENV === "production")
  Hr = zt.createRoot, zt.hydrateRoot;
else {
  var Kn = zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Hr = function(n, e) {
    Kn.usingClientEntryPoint = !0;
    try {
      return zt.createRoot(n, e);
    } finally {
      Kn.usingClientEntryPoint = !1;
    }
  };
}
function ue(n, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(s) {
    if (n == null || n(s), t === !1 || !s.defaultPrevented)
      return e == null ? void 0 : e(s);
  };
}
function ea(n, e) {
  typeof n == "function" ? n(e) : n != null && (n.current = e);
}
function Ls(...n) {
  return (e) => n.forEach((t) => ea(t, e));
}
function ye(...n) {
  return g.useCallback(Ls(...n), n);
}
function ta(n, e) {
  const t = g.createContext(e), r = (o) => {
    const { children: i, ...a } = o, l = g.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ v.jsx(t.Provider, { value: l, children: i });
  };
  r.displayName = n + "Provider";
  function s(o) {
    const i = g.useContext(t);
    if (i) return i;
    if (e !== void 0) return e;
    throw new Error(`\`${o}\` must be used within \`${n}\``);
  }
  return [r, s];
}
function Ds(n, e = []) {
  let t = [];
  function r(o, i) {
    const a = g.createContext(i), l = t.length;
    t = [...t, i];
    const u = (h) => {
      var S;
      const { scope: d, children: p, ...y } = h, m = ((S = d == null ? void 0 : d[n]) == null ? void 0 : S[l]) || a, w = g.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ v.jsx(m.Provider, { value: w, children: p });
    };
    u.displayName = o + "Provider";
    function c(h, d) {
      var m;
      const p = ((m = d == null ? void 0 : d[n]) == null ? void 0 : m[l]) || a, y = g.useContext(p);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${h}\` must be used within \`${o}\``);
    }
    return [u, c];
  }
  const s = () => {
    const o = t.map((i) => g.createContext(i));
    return function(a) {
      const l = (a == null ? void 0 : a[n]) || o;
      return g.useMemo(
        () => ({ [`__scope${n}`]: { ...a, [n]: l } }),
        [a, l]
      );
    };
  };
  return s.scopeName = n, [r, ra(s, ...e)];
}
function ra(...n) {
  const e = n[0];
  if (n.length === 1) return e;
  const t = () => {
    const r = n.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(o) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const h = l(o)[`__scope${u}`];
        return { ...a, ...h };
      }, {});
      return g.useMemo(() => ({ [`__scope${e.scopeName}`]: i }), [i]);
    };
  };
  return t.scopeName = e.scopeName, t;
}
var jt = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {
}, na = g.useId || (() => {
}), sa = 0;
function Rr(n) {
  const [e, t] = g.useState(na());
  return jt(() => {
    n || t((r) => r ?? String(sa++));
  }, [n]), n || (e ? `radix-${e}` : "");
}
function ge(n) {
  const e = g.useRef(n);
  return g.useEffect(() => {
    e.current = n;
  }), g.useMemo(() => (...t) => {
    var r;
    return (r = e.current) == null ? void 0 : r.call(e, ...t);
  }, []);
}
function oa({
  prop: n,
  defaultProp: e,
  onChange: t = () => {
  }
}) {
  const [r, s] = ia({ defaultProp: e, onChange: t }), o = n !== void 0, i = o ? n : r, a = ge(t), l = g.useCallback(
    (u) => {
      if (o) {
        const h = typeof u == "function" ? u(n) : u;
        h !== n && a(h);
      } else
        s(u);
    },
    [o, n, s, a]
  );
  return [i, l];
}
function ia({
  defaultProp: n,
  onChange: e
}) {
  const t = g.useState(n), [r] = t, s = g.useRef(r), o = ge(e);
  return g.useEffect(() => {
    s.current !== r && (o(r), s.current = r);
  }, [r, s, o]), t;
}
var un = g.forwardRef((n, e) => {
  const { children: t, ...r } = n, s = g.Children.toArray(t), o = s.find(la);
  if (o) {
    const i = o.props.children, a = s.map((l) => l === o ? g.Children.count(i) > 1 ? g.Children.only(null) : g.isValidElement(i) ? i.props.children : null : l);
    return /* @__PURE__ */ v.jsx(Gr, { ...r, ref: e, children: g.isValidElement(i) ? g.cloneElement(i, void 0, a) : null });
  }
  return /* @__PURE__ */ v.jsx(Gr, { ...r, ref: e, children: t });
});
un.displayName = "Slot";
var Gr = g.forwardRef((n, e) => {
  const { children: t, ...r } = n;
  if (g.isValidElement(t)) {
    const s = ua(t);
    return g.cloneElement(t, {
      ...ca(r, t.props),
      // @ts-ignore
      ref: e ? Ls(e, s) : s
    });
  }
  return g.Children.count(t) > 1 ? g.Children.only(null) : null;
});
Gr.displayName = "SlotClone";
var aa = ({ children: n }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: n });
function la(n) {
  return g.isValidElement(n) && n.type === aa;
}
function ca(n, e) {
  const t = { ...e };
  for (const r in e) {
    const s = n[r], o = e[r];
    /^on[A-Z]/.test(r) ? s && o ? t[r] = (...a) => {
      o(...a), s(...a);
    } : s && (t[r] = s) : r === "style" ? t[r] = { ...s, ...o } : r === "className" && (t[r] = [s, o].filter(Boolean).join(" "));
  }
  return { ...n, ...t };
}
function ua(n) {
  var r, s;
  let e = (r = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : r.get, t = e && "isReactWarning" in e && e.isReactWarning;
  return t ? n.ref : (e = (s = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : s.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? n.props.ref : n.props.ref || n.ref);
}
var da = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], me = da.reduce((n, e) => {
  const t = g.forwardRef((r, s) => {
    const { asChild: o, ...i } = r, a = o ? un : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(a, { ...i, ref: s });
  });
  return t.displayName = `Primitive.${e}`, { ...n, [e]: t };
}, {});
function ha(n, e) {
  n && Yi.flushSync(() => n.dispatchEvent(e));
}
function fa(n, e = globalThis == null ? void 0 : globalThis.document) {
  const t = ge(n);
  g.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && t(s);
    };
    return e.addEventListener("keydown", r, { capture: !0 }), () => e.removeEventListener("keydown", r, { capture: !0 });
  }, [t, e]);
}
var pa = "DismissableLayer", Jr = "dismissableLayer.update", ga = "dismissableLayer.pointerDownOutside", ma = "dismissableLayer.focusOutside", Yn, Ns = g.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ms = g.forwardRef(
  (n, e) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: o,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = n, u = g.useContext(Ns), [c, h] = g.useState(null), d = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = g.useState({}), y = ye(e, (j) => h(j)), m = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), S = m.indexOf(w), b = c ? m.indexOf(c) : -1, k = u.layersWithOutsidePointerEventsDisabled.size > 0, x = b >= S, C = ya((j) => {
      const D = j.target, P = [...u.branches].some((z) => z.contains(D));
      !x || P || (s == null || s(j), i == null || i(j), j.defaultPrevented || a == null || a());
    }, d), $ = wa((j) => {
      const D = j.target;
      [...u.branches].some((z) => z.contains(D)) || (o == null || o(j), i == null || i(j), j.defaultPrevented || a == null || a());
    }, d);
    return fa((j) => {
      b === u.layers.size - 1 && (r == null || r(j), !j.defaultPrevented && a && (j.preventDefault(), a()));
    }, d), g.useEffect(() => {
      if (c)
        return t && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Yn = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Xn(), () => {
          t && u.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Yn);
        };
    }, [c, d, t, u]), g.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Xn());
    }, [c, u]), g.useEffect(() => {
      const j = () => p({});
      return document.addEventListener(Jr, j), () => document.removeEventListener(Jr, j);
    }, []), /* @__PURE__ */ v.jsx(
      me.div,
      {
        ...l,
        ref: y,
        style: {
          pointerEvents: k ? x ? "auto" : "none" : void 0,
          ...n.style
        },
        onFocusCapture: ue(n.onFocusCapture, $.onFocusCapture),
        onBlurCapture: ue(n.onBlurCapture, $.onBlurCapture),
        onPointerDownCapture: ue(
          n.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Ms.displayName = pa;
var va = "DismissableLayerBranch", ba = g.forwardRef((n, e) => {
  const t = g.useContext(Ns), r = g.useRef(null), s = ye(e, r);
  return g.useEffect(() => {
    const o = r.current;
    if (o)
      return t.branches.add(o), () => {
        t.branches.delete(o);
      };
  }, [t.branches]), /* @__PURE__ */ v.jsx(me.div, { ...n, ref: s });
});
ba.displayName = va;
function ya(n, e = globalThis == null ? void 0 : globalThis.document) {
  const t = ge(n), r = g.useRef(!1), s = g.useRef(() => {
  });
  return g.useEffect(() => {
    const o = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Us(
            ga,
            t,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (e.removeEventListener("click", s.current), s.current = l, e.addEventListener("click", s.current, { once: !0 })) : l();
      } else
        e.removeEventListener("click", s.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      e.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(i), e.removeEventListener("pointerdown", o), e.removeEventListener("click", s.current);
    };
  }, [e, t]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function wa(n, e = globalThis == null ? void 0 : globalThis.document) {
  const t = ge(n), r = g.useRef(!1);
  return g.useEffect(() => {
    const s = (o) => {
      o.target && !r.current && Us(ma, t, { originalEvent: o }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", s), () => e.removeEventListener("focusin", s);
  }, [e, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Xn() {
  const n = new CustomEvent(Jr);
  document.dispatchEvent(n);
}
function Us(n, e, t, { discrete: r }) {
  const s = t.originalEvent.target, o = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: t });
  e && s.addEventListener(n, e, { once: !0 }), r ? ha(s, o) : s.dispatchEvent(o);
}
var Ar = "focusScope.autoFocusOnMount", Pr = "focusScope.autoFocusOnUnmount", Zn = { bubbles: !1, cancelable: !0 }, _a = "FocusScope", Fs = g.forwardRef((n, e) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: o,
    ...i
  } = n, [a, l] = g.useState(null), u = ge(s), c = ge(o), h = g.useRef(null), d = ye(e, (m) => l(m)), p = g.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  g.useEffect(() => {
    if (r) {
      let m = function(k) {
        if (p.paused || !a) return;
        const x = k.target;
        a.contains(x) ? h.current = x : Me(h.current, { select: !0 });
      }, w = function(k) {
        if (p.paused || !a) return;
        const x = k.relatedTarget;
        x !== null && (a.contains(x) || Me(h.current, { select: !0 }));
      }, S = function(k) {
        if (document.activeElement === document.body)
          for (const C of k)
            C.removedNodes.length > 0 && Me(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", w);
      const b = new MutationObserver(S);
      return a && b.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", w), b.disconnect();
      };
    }
  }, [r, a, p.paused]), g.useEffect(() => {
    if (a) {
      es.add(p);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const S = new CustomEvent(Ar, Zn);
        a.addEventListener(Ar, u), a.dispatchEvent(S), S.defaultPrevented || (ka(Ta(zs(a)), { select: !0 }), document.activeElement === m && Me(a));
      }
      return () => {
        a.removeEventListener(Ar, u), setTimeout(() => {
          const S = new CustomEvent(Pr, Zn);
          a.addEventListener(Pr, c), a.dispatchEvent(S), S.defaultPrevented || Me(m ?? document.body, { select: !0 }), a.removeEventListener(Pr, c), es.remove(p);
        }, 0);
      };
    }
  }, [a, u, c, p]);
  const y = g.useCallback(
    (m) => {
      if (!t && !r || p.paused) return;
      const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, S = document.activeElement;
      if (w && S) {
        const b = m.currentTarget, [k, x] = xa(b);
        k && x ? !m.shiftKey && S === x ? (m.preventDefault(), t && Me(k, { select: !0 })) : m.shiftKey && S === k && (m.preventDefault(), t && Me(x, { select: !0 })) : S === b && m.preventDefault();
      }
    },
    [t, r, p.paused]
  );
  return /* @__PURE__ */ v.jsx(me.div, { tabIndex: -1, ...i, ref: d, onKeyDown: y });
});
Fs.displayName = _a;
function ka(n, { select: e = !1 } = {}) {
  const t = document.activeElement;
  for (const r of n)
    if (Me(r, { select: e }), document.activeElement !== t) return;
}
function xa(n) {
  const e = zs(n), t = Qn(e, n), r = Qn(e.reverse(), n);
  return [t, r];
}
function zs(n) {
  const e = [], t = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) e.push(t.currentNode);
  return e;
}
function Qn(n, e) {
  for (const t of n)
    if (!Sa(t, { upTo: e })) return t;
}
function Sa(n, { upTo: e }) {
  if (getComputedStyle(n).visibility === "hidden") return !0;
  for (; n; ) {
    if (e !== void 0 && n === e) return !1;
    if (getComputedStyle(n).display === "none") return !0;
    n = n.parentElement;
  }
  return !1;
}
function Ea(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function Me(n, { select: e = !1 } = {}) {
  if (n && n.focus) {
    const t = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== t && Ea(n) && e && n.select();
  }
}
var es = Ca();
function Ca() {
  let n = [];
  return {
    add(e) {
      const t = n[0];
      e !== t && (t == null || t.pause()), n = ts(n, e), n.unshift(e);
    },
    remove(e) {
      var t;
      n = ts(n, e), (t = n[0]) == null || t.resume();
    }
  };
}
function ts(n, e) {
  const t = [...n], r = t.indexOf(e);
  return r !== -1 && t.splice(r, 1), t;
}
function Ta(n) {
  return n.filter((e) => e.tagName !== "A");
}
var Ra = "Portal", Bs = g.forwardRef((n, e) => {
  var a;
  const { container: t, ...r } = n, [s, o] = g.useState(!1);
  jt(() => o(!0), []);
  const i = t || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? Is.createPortal(/* @__PURE__ */ v.jsx(me.div, { ...r, ref: e }), i) : null;
});
Bs.displayName = Ra;
function Aa(n, e) {
  return g.useReducer((t, r) => e[t][r] ?? t, n);
}
var Ve = (n) => {
  const { present: e, children: t } = n, r = Pa(e), s = typeof t == "function" ? t({ present: r.isPresent }) : g.Children.only(t), o = ye(r.ref, $a(s));
  return typeof t == "function" || r.isPresent ? g.cloneElement(s, { ref: o }) : null;
};
Ve.displayName = "Presence";
function Pa(n) {
  const [e, t] = g.useState(), r = g.useRef({}), s = g.useRef(n), o = g.useRef("none"), i = n ? "mounted" : "unmounted", [a, l] = Aa(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return g.useEffect(() => {
    const u = Bt(r.current);
    o.current = a === "mounted" ? u : "none";
  }, [a]), jt(() => {
    const u = r.current, c = s.current;
    if (c !== n) {
      const d = o.current, p = Bt(u);
      n ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && d !== p ? "ANIMATION_OUT" : "UNMOUNT"), s.current = n;
    }
  }, [n, l]), jt(() => {
    if (e) {
      let u;
      const c = e.ownerDocument.defaultView ?? window, h = (p) => {
        const m = Bt(r.current).includes(p.animationName);
        if (p.target === e && m && (l("ANIMATION_END"), !s.current)) {
          const w = e.style.animationFillMode;
          e.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            e.style.animationFillMode === "forwards" && (e.style.animationFillMode = w);
          });
        }
      }, d = (p) => {
        p.target === e && (o.current = Bt(r.current));
      };
      return e.addEventListener("animationstart", d), e.addEventListener("animationcancel", h), e.addEventListener("animationend", h), () => {
        c.clearTimeout(u), e.removeEventListener("animationstart", d), e.removeEventListener("animationcancel", h), e.removeEventListener("animationend", h);
      };
    } else
      l("ANIMATION_END");
  }, [e, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: g.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), t(u);
    }, [])
  };
}
function Bt(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function $a(n) {
  var r, s;
  let e = (r = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : r.get, t = e && "isReactWarning" in e && e.isReactWarning;
  return t ? n.ref : (e = (s = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : s.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? n.props.ref : n.props.ref || n.ref);
}
var $r = 0;
function ja() {
  g.useEffect(() => {
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", n[0] ?? rs()), document.body.insertAdjacentElement("beforeend", n[1] ?? rs()), $r++, () => {
      $r === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), $r--;
    };
  }, []);
}
function rs() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var Pe = function() {
  return Pe = Object.assign || function(e) {
    for (var t, r = 1, s = arguments.length; r < s; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Pe.apply(this, arguments);
};
function Ws(n, e) {
  var t = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(n); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[s]) && (t[r[s]] = n[r[s]]);
  return t;
}
function Oa(n, e, t) {
  if (t || arguments.length === 2) for (var r = 0, s = e.length, o; r < s; r++)
    (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
  return n.concat(o || Array.prototype.slice.call(e));
}
var Zt = "right-scroll-bar-position", Qt = "width-before-scroll-bar", Ia = "with-scroll-bars-hidden", La = "--removed-body-scroll-bar-size";
function jr(n, e) {
  return typeof n == "function" ? n(e) : n && (n.current = e), n;
}
function Da(n, e) {
  var t = ie(function() {
    return {
      // value
      value: n,
      // last callback
      callback: e,
      // "memoized" public interface
      facade: {
        get current() {
          return t.value;
        },
        set current(r) {
          var s = t.value;
          s !== r && (t.value = r, t.callback(r, s));
        }
      }
    };
  })[0];
  return t.callback = e, t.facade;
}
var Na = typeof window < "u" ? g.useLayoutEffect : g.useEffect, ns = /* @__PURE__ */ new WeakMap();
function Ma(n, e) {
  var t = Da(null, function(r) {
    return n.forEach(function(s) {
      return jr(s, r);
    });
  });
  return Na(function() {
    var r = ns.get(t);
    if (r) {
      var s = new Set(r), o = new Set(n), i = t.current;
      s.forEach(function(a) {
        o.has(a) || jr(a, null);
      }), o.forEach(function(a) {
        s.has(a) || jr(a, i);
      });
    }
    ns.set(t, n);
  }, [n]), t;
}
function Ua(n) {
  return n;
}
function Fa(n, e) {
  e === void 0 && (e = Ua);
  var t = [], r = !1, s = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return t.length ? t[t.length - 1] : n;
    },
    useMedium: function(o) {
      var i = e(o, r);
      return t.push(i), function() {
        t = t.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (r = !0; t.length; ) {
        var i = t;
        t = [], i.forEach(o);
      }
      t = {
        push: function(a) {
          return o(a);
        },
        filter: function() {
          return t;
        }
      };
    },
    assignMedium: function(o) {
      r = !0;
      var i = [];
      if (t.length) {
        var a = t;
        t = [], a.forEach(o), i = t;
      }
      var l = function() {
        var c = i;
        i = [], c.forEach(o);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), t = {
        push: function(c) {
          i.push(c), u();
        },
        filter: function(c) {
          return i = i.filter(c), t;
        }
      };
    }
  };
  return s;
}
function za(n) {
  n === void 0 && (n = {});
  var e = Fa(null);
  return e.options = Pe({ async: !0, ssr: !1 }, n), e;
}
var qs = function(n) {
  var e = n.sideCar, t = Ws(n, ["sideCar"]);
  if (!e)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = e.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return g.createElement(r, Pe({}, t));
};
qs.isSideCarExport = !0;
function Ba(n, e) {
  return n.useMedium(e), qs;
}
var Vs = za(), Or = function() {
}, lr = g.forwardRef(function(n, e) {
  var t = g.useRef(null), r = g.useState({
    onScrollCapture: Or,
    onWheelCapture: Or,
    onTouchMoveCapture: Or
  }), s = r[0], o = r[1], i = n.forwardProps, a = n.children, l = n.className, u = n.removeScrollBar, c = n.enabled, h = n.shards, d = n.sideCar, p = n.noIsolation, y = n.inert, m = n.allowPinchZoom, w = n.as, S = w === void 0 ? "div" : w, b = n.gapMode, k = Ws(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = d, C = Ma([t, e]), $ = Pe(Pe({}, k), s);
  return g.createElement(
    g.Fragment,
    null,
    c && g.createElement(x, { sideCar: Vs, removeScrollBar: u, shards: h, noIsolation: p, inert: y, setCallbacks: o, allowPinchZoom: !!m, lockRef: t, gapMode: b }),
    i ? g.cloneElement(g.Children.only(a), Pe(Pe({}, $), { ref: C })) : g.createElement(S, Pe({}, $, { className: l, ref: C }), a)
  );
});
lr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
lr.classNames = {
  fullWidth: Qt,
  zeroRight: Zt
};
var Wa = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function qa() {
  if (!document)
    return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var e = Wa();
  return e && n.setAttribute("nonce", e), n;
}
function Va(n, e) {
  n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
function Ha(n) {
  var e = document.head || document.getElementsByTagName("head")[0];
  e.appendChild(n);
}
var Ga = function() {
  var n = 0, e = null;
  return {
    add: function(t) {
      n == 0 && (e = qa()) && (Va(e, t), Ha(e)), n++;
    },
    remove: function() {
      n--, !n && e && (e.parentNode && e.parentNode.removeChild(e), e = null);
    }
  };
}, Ja = function() {
  var n = Ga();
  return function(e, t) {
    g.useEffect(function() {
      return n.add(e), function() {
        n.remove();
      };
    }, [e && t]);
  };
}, Hs = function() {
  var n = Ja(), e = function(t) {
    var r = t.styles, s = t.dynamic;
    return n(r, s), null;
  };
  return e;
}, Ka = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ir = function(n) {
  return parseInt(n || "", 10) || 0;
}, Ya = function(n) {
  var e = window.getComputedStyle(document.body), t = e[n === "padding" ? "paddingLeft" : "marginLeft"], r = e[n === "padding" ? "paddingTop" : "marginTop"], s = e[n === "padding" ? "paddingRight" : "marginRight"];
  return [Ir(t), Ir(r), Ir(s)];
}, Xa = function(n) {
  if (n === void 0 && (n = "margin"), typeof window > "u")
    return Ka;
  var e = Ya(n), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: e[0],
    top: e[1],
    right: e[2],
    gap: Math.max(0, r - t + e[2] - e[0])
  };
}, Za = Hs(), dt = "data-scroll-locked", Qa = function(n, e, t, r) {
  var s = n.left, o = n.top, i = n.right, a = n.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(Ia, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(dt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    e && "position: relative ".concat(r, ";"),
    t === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    t === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Zt, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Qt, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Zt, " .").concat(Zt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Qt, " .").concat(Qt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(dt, `] {
    `).concat(La, ": ").concat(a, `px;
  }
`);
}, ss = function() {
  var n = parseInt(document.body.getAttribute(dt) || "0", 10);
  return isFinite(n) ? n : 0;
}, el = function() {
  g.useEffect(function() {
    return document.body.setAttribute(dt, (ss() + 1).toString()), function() {
      var n = ss() - 1;
      n <= 0 ? document.body.removeAttribute(dt) : document.body.setAttribute(dt, n.toString());
    };
  }, []);
}, tl = function(n) {
  var e = n.noRelative, t = n.noImportant, r = n.gapMode, s = r === void 0 ? "margin" : r;
  el();
  var o = g.useMemo(function() {
    return Xa(s);
  }, [s]);
  return g.createElement(Za, { styles: Qa(o, !e, s, t ? "" : "!important") });
}, Kr = !1;
if (typeof window < "u")
  try {
    var Wt = Object.defineProperty({}, "passive", {
      get: function() {
        return Kr = !0, !0;
      }
    });
    window.addEventListener("test", Wt, Wt), window.removeEventListener("test", Wt, Wt);
  } catch {
    Kr = !1;
  }
var st = Kr ? { passive: !1 } : !1, rl = function(n) {
  return n.tagName === "TEXTAREA";
}, Gs = function(n, e) {
  if (!(n instanceof Element))
    return !1;
  var t = window.getComputedStyle(n);
  return (
    // not-not-scrollable
    t[e] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !rl(n) && t[e] === "visible")
  );
}, nl = function(n) {
  return Gs(n, "overflowY");
}, sl = function(n) {
  return Gs(n, "overflowX");
}, os = function(n, e) {
  var t = e.ownerDocument, r = e;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var s = Js(n, r);
    if (s) {
      var o = Ks(n, r), i = o[1], a = o[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, ol = function(n) {
  var e = n.scrollTop, t = n.scrollHeight, r = n.clientHeight;
  return [
    e,
    t,
    r
  ];
}, il = function(n) {
  var e = n.scrollLeft, t = n.scrollWidth, r = n.clientWidth;
  return [
    e,
    t,
    r
  ];
}, Js = function(n, e) {
  return n === "v" ? nl(e) : sl(e);
}, Ks = function(n, e) {
  return n === "v" ? ol(e) : il(e);
}, al = function(n, e) {
  return n === "h" && e === "rtl" ? -1 : 1;
}, ll = function(n, e, t, r, s) {
  var o = al(n, window.getComputedStyle(e).direction), i = o * r, a = t.target, l = e.contains(a), u = !1, c = i > 0, h = 0, d = 0;
  do {
    var p = Ks(n, a), y = p[0], m = p[1], w = p[2], S = m - w - o * y;
    (y || S) && Js(n, a) && (h += S, d += y), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (e.contains(a) || e === a)
  );
  return (c && (Math.abs(h) < 1 || !s) || !c && (Math.abs(d) < 1 || !s)) && (u = !0), u;
}, qt = function(n) {
  return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, is = function(n) {
  return [n.deltaX, n.deltaY];
}, as = function(n) {
  return n && "current" in n ? n.current : n;
}, cl = function(n, e) {
  return n[0] === e[0] && n[1] === e[1];
}, ul = function(n) {
  return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
}, dl = 0, ot = [];
function hl(n) {
  var e = g.useRef([]), t = g.useRef([0, 0]), r = g.useRef(), s = g.useState(dl++)[0], o = g.useState(Hs)[0], i = g.useRef(n);
  g.useEffect(function() {
    i.current = n;
  }, [n]), g.useEffect(function() {
    if (n.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var m = Oa([n.lockRef.current], (n.shards || []).map(as), !0).filter(Boolean);
      return m.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), m.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [n.inert, n.lockRef.current, n.shards]);
  var a = g.useCallback(function(m, w) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var S = qt(m), b = t.current, k = "deltaX" in m ? m.deltaX : b[0] - S[0], x = "deltaY" in m ? m.deltaY : b[1] - S[1], C, $ = m.target, j = Math.abs(k) > Math.abs(x) ? "h" : "v";
    if ("touches" in m && j === "h" && $.type === "range")
      return !1;
    var D = os(j, $);
    if (!D)
      return !0;
    if (D ? C = j : (C = j === "v" ? "h" : "v", D = os(j, $)), !D)
      return !1;
    if (!r.current && "changedTouches" in m && (k || x) && (r.current = C), !C)
      return !0;
    var P = r.current || C;
    return ll(P, w, m, P === "h" ? k : x, !0);
  }, []), l = g.useCallback(function(m) {
    var w = m;
    if (!(!ot.length || ot[ot.length - 1] !== o)) {
      var S = "deltaY" in w ? is(w) : qt(w), b = e.current.filter(function(C) {
        return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && cl(C.delta, S);
      })[0];
      if (b && b.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!b) {
        var k = (i.current.shards || []).map(as).filter(Boolean).filter(function(C) {
          return C.contains(w.target);
        }), x = k.length > 0 ? a(w, k[0]) : !i.current.noIsolation;
        x && w.cancelable && w.preventDefault();
      }
    }
  }, []), u = g.useCallback(function(m, w, S, b) {
    var k = { name: m, delta: w, target: S, should: b, shadowParent: fl(S) };
    e.current.push(k), setTimeout(function() {
      e.current = e.current.filter(function(x) {
        return x !== k;
      });
    }, 1);
  }, []), c = g.useCallback(function(m) {
    t.current = qt(m), r.current = void 0;
  }, []), h = g.useCallback(function(m) {
    u(m.type, is(m), m.target, a(m, n.lockRef.current));
  }, []), d = g.useCallback(function(m) {
    u(m.type, qt(m), m.target, a(m, n.lockRef.current));
  }, []);
  g.useEffect(function() {
    return ot.push(o), n.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, st), document.addEventListener("touchmove", l, st), document.addEventListener("touchstart", c, st), function() {
      ot = ot.filter(function(m) {
        return m !== o;
      }), document.removeEventListener("wheel", l, st), document.removeEventListener("touchmove", l, st), document.removeEventListener("touchstart", c, st);
    };
  }, []);
  var p = n.removeScrollBar, y = n.inert;
  return g.createElement(
    g.Fragment,
    null,
    y ? g.createElement(o, { styles: ul(s) }) : null,
    p ? g.createElement(tl, { gapMode: n.gapMode }) : null
  );
}
function fl(n) {
  for (var e = null; n !== null; )
    n instanceof ShadowRoot && (e = n.host, n = n.host), n = n.parentNode;
  return e;
}
const pl = Ba(Vs, hl);
var Ys = g.forwardRef(function(n, e) {
  return g.createElement(lr, Pe({}, n, { ref: e, sideCar: pl }));
});
Ys.classNames = lr.classNames;
var gl = function(n) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(n) ? n[0] : n;
  return e.ownerDocument.body;
}, it = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = {}, Lr = 0, Xs = function(n) {
  return n && (n.host || Xs(n.parentNode));
}, ml = function(n, e) {
  return e.map(function(t) {
    if (n.contains(t))
      return t;
    var r = Xs(t);
    return r && n.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", n, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, vl = function(n, e, t, r) {
  var s = ml(e, Array.isArray(n) ? n : [n]);
  Ht[t] || (Ht[t] = /* @__PURE__ */ new WeakMap());
  var o = Ht[t], i = [], a = /* @__PURE__ */ new Set(), l = new Set(s), u = function(h) {
    !h || a.has(h) || (a.add(h), u(h.parentNode));
  };
  s.forEach(u);
  var c = function(h) {
    !h || l.has(h) || Array.prototype.forEach.call(h.children, function(d) {
      if (a.has(d))
        c(d);
      else
        try {
          var p = d.getAttribute(r), y = p !== null && p !== "false", m = (it.get(d) || 0) + 1, w = (o.get(d) || 0) + 1;
          it.set(d, m), o.set(d, w), i.push(d), m === 1 && y && Vt.set(d, !0), w === 1 && d.setAttribute(t, "true"), y || d.setAttribute(r, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", d, S);
        }
    });
  };
  return c(e), a.clear(), Lr++, function() {
    i.forEach(function(h) {
      var d = it.get(h) - 1, p = o.get(h) - 1;
      it.set(h, d), o.set(h, p), d || (Vt.has(h) || h.removeAttribute(r), Vt.delete(h)), p || h.removeAttribute(t);
    }), Lr--, Lr || (it = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = {});
  };
}, bl = function(n, e, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(n) ? n : [n]), s = gl(n);
  return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))), vl(r, s, t, "aria-hidden")) : function() {
    return null;
  };
}, dn = "Dialog", [Zs, Fh] = Ds(dn), [yl, Te] = Zs(dn), Qs = (n) => {
  const {
    __scopeDialog: e,
    children: t,
    open: r,
    defaultOpen: s,
    onOpenChange: o,
    modal: i = !0
  } = n, a = g.useRef(null), l = g.useRef(null), [u = !1, c] = oa({
    prop: r,
    defaultProp: s,
    onChange: o
  });
  return /* @__PURE__ */ v.jsx(
    yl,
    {
      scope: e,
      triggerRef: a,
      contentRef: l,
      contentId: Rr(),
      titleId: Rr(),
      descriptionId: Rr(),
      open: u,
      onOpenChange: c,
      onOpenToggle: g.useCallback(() => c((h) => !h), [c]),
      modal: i,
      children: t
    }
  );
};
Qs.displayName = dn;
var eo = "DialogTrigger", to = g.forwardRef(
  (n, e) => {
    const { __scopeDialog: t, ...r } = n, s = Te(eo, t), o = ye(e, s.triggerRef);
    return /* @__PURE__ */ v.jsx(
      me.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": pn(s.open),
        ...r,
        ref: o,
        onClick: ue(n.onClick, s.onOpenToggle)
      }
    );
  }
);
to.displayName = eo;
var hn = "DialogPortal", [wl, ro] = Zs(hn, {
  forceMount: void 0
}), no = (n) => {
  const { __scopeDialog: e, forceMount: t, children: r, container: s } = n, o = Te(hn, e);
  return /* @__PURE__ */ v.jsx(wl, { scope: e, forceMount: t, children: g.Children.map(r, (i) => /* @__PURE__ */ v.jsx(Ve, { present: t || o.open, children: /* @__PURE__ */ v.jsx(Bs, { asChild: !0, container: s, children: i }) })) });
};
no.displayName = hn;
var er = "DialogOverlay", so = g.forwardRef(
  (n, e) => {
    const t = ro(er, n.__scopeDialog), { forceMount: r = t.forceMount, ...s } = n, o = Te(er, n.__scopeDialog);
    return o.modal ? /* @__PURE__ */ v.jsx(Ve, { present: r || o.open, children: /* @__PURE__ */ v.jsx(_l, { ...s, ref: e }) }) : null;
  }
);
so.displayName = er;
var _l = g.forwardRef(
  (n, e) => {
    const { __scopeDialog: t, ...r } = n, s = Te(er, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ v.jsx(Ys, { as: un, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ v.jsx(
        me.div,
        {
          "data-state": pn(s.open),
          ...r,
          ref: e,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Xe = "DialogContent", oo = g.forwardRef(
  (n, e) => {
    const t = ro(Xe, n.__scopeDialog), { forceMount: r = t.forceMount, ...s } = n, o = Te(Xe, n.__scopeDialog);
    return /* @__PURE__ */ v.jsx(Ve, { present: r || o.open, children: o.modal ? /* @__PURE__ */ v.jsx(kl, { ...s, ref: e }) : /* @__PURE__ */ v.jsx(xl, { ...s, ref: e }) });
  }
);
oo.displayName = Xe;
var kl = g.forwardRef(
  (n, e) => {
    const t = Te(Xe, n.__scopeDialog), r = g.useRef(null), s = ye(e, t.contentRef, r);
    return g.useEffect(() => {
      const o = r.current;
      if (o) return bl(o);
    }, []), /* @__PURE__ */ v.jsx(
      io,
      {
        ...n,
        ref: s,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ue(n.onCloseAutoFocus, (o) => {
          var i;
          o.preventDefault(), (i = t.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: ue(n.onPointerDownOutside, (o) => {
          const i = o.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && o.preventDefault();
        }),
        onFocusOutside: ue(
          n.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), xl = g.forwardRef(
  (n, e) => {
    const t = Te(Xe, n.__scopeDialog), r = g.useRef(!1), s = g.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      io,
      {
        ...n,
        ref: e,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var i, a;
          (i = n.onCloseAutoFocus) == null || i.call(n, o), o.defaultPrevented || (r.current || (a = t.triggerRef.current) == null || a.focus(), o.preventDefault()), r.current = !1, s.current = !1;
        },
        onInteractOutside: (o) => {
          var l, u;
          (l = n.onInteractOutside) == null || l.call(n, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const i = o.target;
          ((u = t.triggerRef.current) == null ? void 0 : u.contains(i)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && s.current && o.preventDefault();
        }
      }
    );
  }
), io = g.forwardRef(
  (n, e) => {
    const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: o, ...i } = n, a = Te(Xe, t), l = g.useRef(null), u = ye(e, l);
    return ja(), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        Fs,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: s,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ v.jsx(
            Ms,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": pn(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(Sl, { titleId: a.titleId }),
        /* @__PURE__ */ v.jsx(Cl, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), fn = "DialogTitle", ao = g.forwardRef(
  (n, e) => {
    const { __scopeDialog: t, ...r } = n, s = Te(fn, t);
    return /* @__PURE__ */ v.jsx(me.h2, { id: s.titleId, ...r, ref: e });
  }
);
ao.displayName = fn;
var lo = "DialogDescription", co = g.forwardRef(
  (n, e) => {
    const { __scopeDialog: t, ...r } = n, s = Te(lo, t);
    return /* @__PURE__ */ v.jsx(me.p, { id: s.descriptionId, ...r, ref: e });
  }
);
co.displayName = lo;
var uo = "DialogClose", ho = g.forwardRef(
  (n, e) => {
    const { __scopeDialog: t, ...r } = n, s = Te(uo, t);
    return /* @__PURE__ */ v.jsx(
      me.button,
      {
        type: "button",
        ...r,
        ref: e,
        onClick: ue(n.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
ho.displayName = uo;
function pn(n) {
  return n ? "open" : "closed";
}
var fo = "DialogTitleWarning", [zh, po] = ta(fo, {
  contentName: Xe,
  titleName: fn,
  docsSlug: "dialog"
}), Sl = ({ titleId: n }) => {
  const e = po(fo), t = `\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;
  return g.useEffect(() => {
    n && (document.getElementById(n) || console.error(t));
  }, [t, n]), null;
}, El = "DialogDescriptionWarning", Cl = ({ contentRef: n, descriptionId: e }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${po(El).contentName}}.`;
  return g.useEffect(() => {
    var o;
    const s = (o = n.current) == null ? void 0 : o.getAttribute("aria-describedby");
    e && s && (document.getElementById(e) || console.warn(r));
  }, [r, n, e]), null;
}, Tl = Qs, Rl = to, Al = no, go = so, mo = oo, vo = ao, bo = co, Pl = ho;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yo = (...n) => n.filter((e, t, r) => !!e && e.trim() !== "" && r.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jl = {
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
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = cn(
  ({
    color: n = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: o,
    iconNode: i,
    ...a
  }, l) => qr(
    "svg",
    {
      ref: l,
      ...jl,
      width: e,
      height: e,
      stroke: n,
      strokeWidth: r ? Number(t) * 24 / Number(e) : t,
      className: yo("lucide", s),
      ...a
    },
    [
      ...i.map(([u, c]) => qr(u, c)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = (n, e) => {
  const t = cn(
    ({ className: r, ...s }, o) => qr(Ol, {
      ref: o,
      iconNode: e,
      className: yo(`lucide-${$l(n)}`, r),
      ...s
    })
  );
  return t.displayName = `${n}`, t;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = cr("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ll = cr("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = cr("Minimize", [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = cr("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function wo(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var s = n.length;
    for (e = 0; e < s; e++) n[e] && (t = wo(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function Ml() {
  for (var n, e, t = 0, r = "", s = arguments.length; t < s; t++) (n = arguments[t]) && (e = wo(n)) && (r && (r += " "), r += e);
  return r;
}
const gn = "-", Ul = (n) => {
  const e = zl(n), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = n;
  return {
    getClassGroupId: (i) => {
      const a = i.split(gn);
      return a[0] === "" && a.length !== 1 && a.shift(), _o(a, e) || Fl(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = t[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, _o = (n, e) => {
  var i;
  if (n.length === 0)
    return e.classGroupId;
  const t = n[0], r = e.nextPart.get(t), s = r ? _o(n.slice(1), r) : void 0;
  if (s)
    return s;
  if (e.validators.length === 0)
    return;
  const o = n.join(gn);
  return (i = e.validators.find(({
    validator: a
  }) => a(o))) == null ? void 0 : i.classGroupId;
}, ls = /^\[(.+)\]$/, Fl = (n) => {
  if (ls.test(n)) {
    const e = ls.exec(n)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, zl = (n) => {
  const {
    theme: e,
    prefix: t
  } = n, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Wl(Object.entries(n.classGroups), t).forEach(([o, i]) => {
    Yr(i, r, o, e);
  }), r;
}, Yr = (n, e, t, r) => {
  n.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? e : cs(e, s);
      o.classGroupId = t;
      return;
    }
    if (typeof s == "function") {
      if (Bl(s)) {
        Yr(s(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: s,
        classGroupId: t
      });
      return;
    }
    Object.entries(s).forEach(([o, i]) => {
      Yr(i, cs(e, o), t, r);
    });
  });
}, cs = (n, e) => {
  let t = n;
  return e.split(gn).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, Bl = (n) => n.isThemeGetter, Wl = (n, e) => e ? n.map(([t, r]) => {
  const s = r.map((o) => typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, a]) => [e + i, a])) : o);
  return [t, s];
}) : n, ql = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const s = (o, i) => {
    t.set(o, i), e++, e > n && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let i = t.get(o);
      if (i !== void 0)
        return i;
      if ((i = r.get(o)) !== void 0)
        return s(o, i), i;
    },
    set(o, i) {
      t.has(o) ? t.set(o, i) : s(o, i);
    }
  };
}, ko = "!", Vl = (n) => {
  const {
    separator: e,
    experimentalParseClassName: t
  } = n, r = e.length === 1, s = e[0], o = e.length, i = (a) => {
    const l = [];
    let u = 0, c = 0, h;
    for (let w = 0; w < a.length; w++) {
      let S = a[w];
      if (u === 0) {
        if (S === s && (r || a.slice(w, w + o) === e)) {
          l.push(a.slice(c, w)), c = w + o;
          continue;
        }
        if (S === "/") {
          h = w;
          continue;
        }
      }
      S === "[" ? u++ : S === "]" && u--;
    }
    const d = l.length === 0 ? a : a.substring(c), p = d.startsWith(ko), y = p ? d.substring(1) : d, m = h && h > c ? h - c : void 0;
    return {
      modifiers: l,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: m
    };
  };
  return t ? (a) => t({
    className: a,
    parseClassName: i
  }) : i;
}, Hl = (n) => {
  if (n.length <= 1)
    return n;
  const e = [];
  let t = [];
  return n.forEach((r) => {
    r[0] === "[" ? (e.push(...t.sort(), r), t = []) : t.push(r);
  }), e.push(...t.sort()), e;
}, Gl = (n) => ({
  cache: ql(n.cacheSize),
  parseClassName: Vl(n),
  ...Ul(n)
}), Jl = /\s+/, Kl = (n, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: s
  } = e, o = [], i = n.trim().split(Jl);
  let a = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      modifiers: c,
      hasImportantModifier: h,
      baseClassName: d,
      maybePostfixModifierPosition: p
    } = t(u);
    let y = !!p, m = r(y ? d.substring(0, p) : d);
    if (!m) {
      if (!y) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (m = r(d), !m) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      y = !1;
    }
    const w = Hl(c).join(":"), S = h ? w + ko : w, b = S + m;
    if (o.includes(b))
      continue;
    o.push(b);
    const k = s(m, y);
    for (let x = 0; x < k.length; ++x) {
      const C = k[x];
      o.push(S + C);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Yl() {
  let n = 0, e, t, r = "";
  for (; n < arguments.length; )
    (e = arguments[n++]) && (t = xo(e)) && (r && (r += " "), r += t);
  return r;
}
const xo = (n) => {
  if (typeof n == "string")
    return n;
  let e, t = "";
  for (let r = 0; r < n.length; r++)
    n[r] && (e = xo(n[r])) && (t && (t += " "), t += e);
  return t;
};
function Xl(n, ...e) {
  let t, r, s, o = i;
  function i(l) {
    const u = e.reduce((c, h) => h(c), n());
    return t = Gl(u), r = t.cache.get, s = t.cache.set, o = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = Kl(l, t);
    return s(l, c), c;
  }
  return function() {
    return o(Yl.apply(null, arguments));
  };
}
const Q = (n) => {
  const e = (t) => t[n] || [];
  return e.isThemeGetter = !0, e;
}, So = /^\[(?:([a-z-]+):)?(.+)\]$/i, Zl = /^\d+\/\d+$/, Ql = /* @__PURE__ */ new Set(["px", "full", "screen"]), ec = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, nc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sc = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ie = (n) => ht(n) || Ql.has(n) || Zl.test(n), De = (n) => mt(n, "length", hc), ht = (n) => !!n && !Number.isNaN(Number(n)), Dr = (n) => mt(n, "number", ht), St = (n) => !!n && Number.isInteger(Number(n)), oc = (n) => n.endsWith("%") && ht(n.slice(0, -1)), M = (n) => So.test(n), Ne = (n) => ec.test(n), ic = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ac = (n) => mt(n, ic, Eo), lc = (n) => mt(n, "position", Eo), cc = /* @__PURE__ */ new Set(["image", "url"]), uc = (n) => mt(n, cc, pc), dc = (n) => mt(n, "", fc), Et = () => !0, mt = (n, e, t) => {
  const r = So.exec(n);
  return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : t(r[2]) : !1;
}, hc = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  tc.test(n) && !rc.test(n)
), Eo = () => !1, fc = (n) => nc.test(n), pc = (n) => sc.test(n), gc = () => {
  const n = Q("colors"), e = Q("spacing"), t = Q("blur"), r = Q("brightness"), s = Q("borderColor"), o = Q("borderRadius"), i = Q("borderSpacing"), a = Q("borderWidth"), l = Q("contrast"), u = Q("grayscale"), c = Q("hueRotate"), h = Q("invert"), d = Q("gap"), p = Q("gradientColorStops"), y = Q("gradientColorStopPositions"), m = Q("inset"), w = Q("margin"), S = Q("opacity"), b = Q("padding"), k = Q("saturate"), x = Q("scale"), C = Q("sepia"), $ = Q("skew"), j = Q("space"), D = Q("translate"), P = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], X = () => ["auto", M, e], L = () => [M, e], le = () => ["", Ie, De], de = () => ["auto", ht, M], Re = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _ = () => ["solid", "dashed", "dotted", "double", "none"], E = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", M], F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ee = () => [ht, M];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Et],
      spacing: [Ie, De],
      blur: ["none", "", Ne, M],
      brightness: ee(),
      borderColor: [n],
      borderRadius: ["none", "", "full", Ne, M],
      borderSpacing: L(),
      borderWidth: le(),
      contrast: ee(),
      grayscale: V(),
      hueRotate: ee(),
      invert: V(),
      gap: L(),
      gradientColorStops: [n],
      gradientColorStopPositions: [oc, De],
      inset: X(),
      margin: X(),
      opacity: ee(),
      padding: L(),
      saturate: ee(),
      scale: ee(),
      sepia: V(),
      skew: ee(),
      space: L(),
      translate: L()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", M]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ne]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Re(), M]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", St, M]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: X()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", M]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", St, M]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Et]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", St, M]
        }, M]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": de()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": de()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Et]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [St, M]
        }, M]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": de()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": de()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...I()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...I(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...I(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [j]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [j]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [M, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [M, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ne]
        }, Ne]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [M, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [M, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [M, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [M, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ne, De]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Dr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Et]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ht, Dr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ie, M]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", M]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", M]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [S]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [S]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [..._(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ie, De]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ie, M]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: L()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", M]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [S]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Re(), lc]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ac]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, uc]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [..._(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: _()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ..._()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ie, M]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ie, De]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: le()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ie, De]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ne, dc]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Et]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...E(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": E()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ne, M]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [C]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", M]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ee()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", M]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ee()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", M]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [x]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [x]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [x]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [St, M]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [D]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [D]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [$]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [$]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": L()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": L()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": L()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": L()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": L()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": L()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": L()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": L()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": L()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": L()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": L()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": L()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": L()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": L()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": L()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": L()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": L()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": L()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", M]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ie, De, Dr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, mc = /* @__PURE__ */ Xl(gc);
function qe(...n) {
  return mc(Ml(n));
}
const vc = Tl, bc = Rl, yc = Al, Co = g.forwardRef(({ className: n, ...e }, t) => /* @__PURE__ */ v.jsx(
  go,
  {
    ref: t,
    className: qe(
      "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      n
    ),
    ...e
  }
));
Co.displayName = go.displayName;
const To = g.forwardRef(({ className: n, children: e, ...t }, r) => /* @__PURE__ */ v.jsxs(yc, { children: [
  /* @__PURE__ */ v.jsx(Co, {}),
  /* @__PURE__ */ v.jsxs(
    mo,
    {
      ref: r,
      className: qe(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        n
      ),
      ...t,
      children: [
        e,
        /* @__PURE__ */ v.jsxs(Pl, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ v.jsx(Nl, { className: "h-4 w-4" }),
          /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
To.displayName = mo.displayName;
const wc = g.forwardRef(({ className: n, ...e }, t) => /* @__PURE__ */ v.jsx(
  vo,
  {
    ref: t,
    className: qe(
      "text-lg font-semibold leading-none tracking-tight",
      n
    ),
    ...e
  }
));
wc.displayName = vo.displayName;
const _c = g.forwardRef(({ className: n, ...e }, t) => /* @__PURE__ */ v.jsx(
  bo,
  {
    ref: t,
    className: qe("text-sm text-muted-foreground", n),
    ...e
  }
));
_c.displayName = bo.displayName;
const Ro = cn((n, e) => /* @__PURE__ */ v.jsx(
  "button",
  {
    ref: e,
    className: "fixed bottom-6 right-6 h-12 w-12 rounded-full bg-gradient-to-t from-blue-500 to-blue-300 shadow-lg flex items-center justify-center z-50 transition-transform hover:scale-105",
    onClick: n.onClick,
    children: /* @__PURE__ */ v.jsx("div", { className: "h-4 w-4 bg-white opacity-40 rounded-full" })
  }
));
Ro.displayName = "VoiceDialogTrigger";
var us = ["light", "dark"], kc = "(prefers-color-scheme: dark)";
g.createContext(void 0);
g.memo(({ forcedTheme: n, storageKey: e, attribute: t, enableSystem: r, enableColorScheme: s, defaultTheme: o, value: i, attrs: a, nonce: l }) => {
  let u = o === "system", c = t === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((y) => `'${y}'`).join(",")})`};` : `var d=document.documentElement,n='${t}',s='setAttribute';`, h = s ? us.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", d = (y, m = !1, w = !0) => {
    let S = i ? i[y] : y, b = m ? y + "|| ''" : `'${S}'`, k = "";
    return s && w && !m && us.includes(y) && (k += `d.style.colorScheme = '${y}';`), t === "class" ? m || S ? k += `c.add(${b})` : k += "null" : S && (k += `d[s](n,${b})`), k;
  }, p = n ? `!function(){${c}${d(n)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${u})){var t='${kc}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${d(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + d(o, !1, !1) + "}"}${h}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${e}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${d(i ? "x[e]" : "e", !0)}}else{${d(o, !1, !1)};}${h}}catch(t){}}();`;
  return g.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: p } });
});
Array(12).fill(0);
_e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, _e.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" }));
_e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, _e.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" }));
_e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, _e.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" }));
_e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, _e.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }));
var Xr = 1, xc = class {
  constructor() {
    this.subscribe = (n) => (this.subscribers.push(n), () => {
      let e = this.subscribers.indexOf(n);
      this.subscribers.splice(e, 1);
    }), this.publish = (n) => {
      this.subscribers.forEach((e) => e(n));
    }, this.addToast = (n) => {
      this.publish(n), this.toasts = [...this.toasts, n];
    }, this.create = (n) => {
      var e;
      let { message: t, ...r } = n, s = typeof (n == null ? void 0 : n.id) == "number" || ((e = n.id) == null ? void 0 : e.length) > 0 ? n.id : Xr++, o = this.toasts.find((a) => a.id === s), i = n.dismissible === void 0 ? !0 : n.dismissible;
      return o ? this.toasts = this.toasts.map((a) => a.id === s ? (this.publish({ ...a, ...n, id: s, title: t }), { ...a, ...n, id: s, dismissible: i, title: t }) : a) : this.addToast({ title: t, ...r, dismissible: i, id: s }), s;
    }, this.dismiss = (n) => (n || this.toasts.forEach((e) => {
      this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
    }), this.subscribers.forEach((e) => e({ id: n, dismiss: !0 })), n), this.message = (n, e) => this.create({ ...e, message: n }), this.error = (n, e) => this.create({ ...e, message: n, type: "error" }), this.success = (n, e) => this.create({ ...e, type: "success", message: n }), this.info = (n, e) => this.create({ ...e, type: "info", message: n }), this.warning = (n, e) => this.create({ ...e, type: "warning", message: n }), this.loading = (n, e) => this.create({ ...e, type: "loading", message: n }), this.promise = (n, e) => {
      if (!e) return;
      let t;
      e.loading !== void 0 && (t = this.create({ ...e, promise: n, type: "loading", message: e.loading, description: typeof e.description != "function" ? e.description : void 0 }));
      let r = n instanceof Promise ? n : n(), s = t !== void 0;
      return r.then(async (o) => {
        if (Ec(o) && !o.ok) {
          s = !1;
          let i = typeof e.error == "function" ? await e.error(`HTTP error! status: ${o.status}`) : e.error, a = typeof e.description == "function" ? await e.description(`HTTP error! status: ${o.status}`) : e.description;
          this.create({ id: t, type: "error", message: i, description: a });
        } else if (e.success !== void 0) {
          s = !1;
          let i = typeof e.success == "function" ? await e.success(o) : e.success, a = typeof e.description == "function" ? await e.description(o) : e.description;
          this.create({ id: t, type: "success", message: i, description: a });
        }
      }).catch(async (o) => {
        if (e.error !== void 0) {
          s = !1;
          let i = typeof e.error == "function" ? await e.error(o) : e.error, a = typeof e.description == "function" ? await e.description(o) : e.description;
          this.create({ id: t, type: "error", message: i, description: a });
        }
      }).finally(() => {
        var o;
        s && (this.dismiss(t), t = void 0), (o = e.finally) == null || o.call(e);
      }), t;
    }, this.custom = (n, e) => {
      let t = (e == null ? void 0 : e.id) || Xr++;
      return this.create({ jsx: n(t), id: t, ...e }), t;
    }, this.subscribers = [], this.toasts = [];
  }
}, Se = new xc(), Sc = (n, e) => {
  let t = (e == null ? void 0 : e.id) || Xr++;
  return Se.addToast({ title: n, ...e, id: t }), t;
}, Ec = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", Cc = Sc, Tc = () => Se.toasts, te = Object.assign(Cc, { success: Se.success, info: Se.info, warning: Se.warning, error: Se.error, custom: Se.custom, message: Se.message, promise: Se.promise, dismiss: Se.dismiss, loading: Se.loading }, { getHistory: Tc });
function Rc(n, { insertAt: e } = {}) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r), r.styleSheet ? r.styleSheet.cssText = n : r.appendChild(document.createTextNode(n));
}
Rc(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
const Ac = ({
  isListening: n,
  isSpeaking: e,
  voiceVolume: t,
  onClick: r
}) => {
  const [s, o] = ie(""), [i, a] = ie("opacity-30");
  Ce(() => {
    let p;
    return e ? (o("animate-pulse-wave"), a("opacity-70")) : p = setTimeout(() => {
      o(""), a("opacity-30");
    }, 500), () => {
      p && clearTimeout(p);
    };
  }, [e]);
  const l = () => {
    if (!e) return 1;
    const p = 1, y = t * 0.04;
    return p + y;
  }, c = (() => {
    if (e) {
      if (t > 7) return "animate-wave-high";
      if (t > 3) return "animate-wave";
    }
    return "animate-wave-low";
  })(), h = l(), d = async () => {
    try {
      r();
    } catch (p) {
      console.error("Ошибка при активации голосового ассистента:", p), te.error("Не удалось активировать голосовой ассистент");
    }
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ v.jsx("div", { className: `absolute inset-0 scale-150 rounded-full blur-xl transition-opacity duration-700 ${i}`, children: /* @__PURE__ */ v.jsx(
      "div",
      {
        className: "absolute inset-0 rounded-full bg-gradient-radial from-blue-400 via-blue-300 to-transparent opacity-80 animate-pulse",
        style: { animationDuration: "4s" }
      }
    ) }),
    /* @__PURE__ */ v.jsxs(
      "div",
      {
        className: "relative h-16 w-16 rounded-full bg-gradient-to-t from-blue-500 to-blue-200 shadow-lg cursor-pointer transition-all duration-200 ease-in-out",
        onClick: d,
        style: { transform: `scale(${h})` },
        children: [
          /* @__PURE__ */ v.jsx("div", { className: "absolute inset-0 opacity-90 rounded-full overflow-hidden", children: /* @__PURE__ */ v.jsxs("div", { className: "absolute bottom-0 left-0 right-0 h-1/2 bg-opacity-20", children: [
            /* @__PURE__ */ v.jsx("div", { className: `absolute bottom-0 left-0 w-full h-5 bg-white opacity-20 rounded-full transform -translate-y-2 ${c}` }),
            /* @__PURE__ */ v.jsx("div", { className: `absolute bottom-0 left-0 w-full h-4 bg-white opacity-30 rounded-full transform -translate-y-1 translate-x-2 ${c}` }),
            /* @__PURE__ */ v.jsx("div", { className: `absolute bottom-0 left-0 w-full h-3 bg-white opacity-40 rounded-full transform ${c}` })
          ] }) }),
          e && /* @__PURE__ */ v.jsx(
            "div",
            {
              className: "absolute -inset-4 rounded-full blur-md bg-gradient-to-r from-blue-400/40 via-blue-300/30 to-blue-200/20 animate-pulse",
              style: { animationDuration: "2s" }
            }
          ),
          n && /* @__PURE__ */ v.jsx("div", { className: "absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-pulse" })
        ]
      }
    )
  ] });
}, Pc = ({ isListening: n, isSpeaking: e }) => {
  const t = () => e ? "Ассистент говорит..." : n ? "Ассистент слушает..." : "Нажмите на круг для активации ассистента";
  return /* @__PURE__ */ v.jsx("div", { className: "w-full text-center mb-4", children: /* @__PURE__ */ v.jsx("h2", { className: "text-xl font-medium text-gray-100 h-8 flex items-center justify-center transition-all duration-300", children: t() }) });
};
var $c = g.createContext(void 0);
function jc(n) {
  const e = g.useContext($c);
  return n || e || "ltr";
}
function Oc(n, [e, t]) {
  return Math.min(t, Math.max(e, n));
}
function Ic(n, e) {
  return g.useReducer((t, r) => e[t][r] ?? t, n);
}
var mn = "ScrollArea", [Ao, Bh] = Ds(mn), [Lc, xe] = Ao(mn), Po = g.forwardRef(
  (n, e) => {
    const {
      __scopeScrollArea: t,
      type: r = "hover",
      dir: s,
      scrollHideDelay: o = 600,
      ...i
    } = n, [a, l] = g.useState(null), [u, c] = g.useState(null), [h, d] = g.useState(null), [p, y] = g.useState(null), [m, w] = g.useState(null), [S, b] = g.useState(0), [k, x] = g.useState(0), [C, $] = g.useState(!1), [j, D] = g.useState(!1), P = ye(e, (X) => l(X)), z = jc(s);
    return /* @__PURE__ */ v.jsx(
      Lc,
      {
        scope: t,
        type: r,
        dir: z,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: u,
        onViewportChange: c,
        content: h,
        onContentChange: d,
        scrollbarX: p,
        onScrollbarXChange: y,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: $,
        scrollbarY: m,
        onScrollbarYChange: w,
        scrollbarYEnabled: j,
        onScrollbarYEnabledChange: D,
        onCornerWidthChange: b,
        onCornerHeightChange: x,
        children: /* @__PURE__ */ v.jsx(
          me.div,
          {
            dir: z,
            ...i,
            ref: P,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": S + "px",
              "--radix-scroll-area-corner-height": k + "px",
              ...n.style
            }
          }
        )
      }
    );
  }
);
Po.displayName = mn;
var $o = "ScrollAreaViewport", jo = g.forwardRef(
  (n, e) => {
    const { __scopeScrollArea: t, children: r, asChild: s, nonce: o, ...i } = n, a = xe($o, t), l = g.useRef(null), u = ye(e, l, a.onViewportChange);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ v.jsx(
        me.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...i,
          asChild: s,
          ref: u,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...n.style
          },
          children: Vc({ asChild: s, children: r }, (c) => /* @__PURE__ */ v.jsx(
            "div",
            {
              "data-radix-scroll-area-content": "",
              ref: a.onContentChange,
              style: { minWidth: a.scrollbarXEnabled ? "fit-content" : void 0 },
              children: c
            }
          ))
        }
      )
    ] });
  }
);
jo.displayName = $o;
var Oe = "ScrollAreaScrollbar", vn = g.forwardRef(
  (n, e) => {
    const { forceMount: t, ...r } = n, s = xe(Oe, n.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: i } = s, a = n.orientation === "horizontal";
    return g.useEffect(() => (a ? o(!0) : i(!0), () => {
      a ? o(!1) : i(!1);
    }), [a, o, i]), s.type === "hover" ? /* @__PURE__ */ v.jsx(Dc, { ...r, ref: e, forceMount: t }) : s.type === "scroll" ? /* @__PURE__ */ v.jsx(Nc, { ...r, ref: e, forceMount: t }) : s.type === "auto" ? /* @__PURE__ */ v.jsx(Oo, { ...r, ref: e, forceMount: t }) : s.type === "always" ? /* @__PURE__ */ v.jsx(bn, { ...r, ref: e }) : null;
  }
);
vn.displayName = Oe;
var Dc = g.forwardRef((n, e) => {
  const { forceMount: t, ...r } = n, s = xe(Oe, n.__scopeScrollArea), [o, i] = g.useState(!1);
  return g.useEffect(() => {
    const a = s.scrollArea;
    let l = 0;
    if (a) {
      const u = () => {
        window.clearTimeout(l), i(!0);
      }, c = () => {
        l = window.setTimeout(() => i(!1), s.scrollHideDelay);
      };
      return a.addEventListener("pointerenter", u), a.addEventListener("pointerleave", c), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", u), a.removeEventListener("pointerleave", c);
      };
    }
  }, [s.scrollArea, s.scrollHideDelay]), /* @__PURE__ */ v.jsx(Ve, { present: t || o, children: /* @__PURE__ */ v.jsx(
    Oo,
    {
      "data-state": o ? "visible" : "hidden",
      ...r,
      ref: e
    }
  ) });
}), Nc = g.forwardRef((n, e) => {
  const { forceMount: t, ...r } = n, s = xe(Oe, n.__scopeScrollArea), o = n.orientation === "horizontal", i = dr(() => l("SCROLL_END"), 100), [a, l] = Ic("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return g.useEffect(() => {
    if (a === "idle") {
      const u = window.setTimeout(() => l("HIDE"), s.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [a, s.scrollHideDelay, l]), g.useEffect(() => {
    const u = s.viewport, c = o ? "scrollLeft" : "scrollTop";
    if (u) {
      let h = u[c];
      const d = () => {
        const p = u[c];
        h !== p && (l("SCROLL"), i()), h = p;
      };
      return u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [s.viewport, o, l, i]), /* @__PURE__ */ v.jsx(Ve, { present: t || a !== "hidden", children: /* @__PURE__ */ v.jsx(
    bn,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...r,
      ref: e,
      onPointerEnter: ue(n.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: ue(n.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Oo = g.forwardRef((n, e) => {
  const t = xe(Oe, n.__scopeScrollArea), { forceMount: r, ...s } = n, [o, i] = g.useState(!1), a = n.orientation === "horizontal", l = dr(() => {
    if (t.viewport) {
      const u = t.viewport.offsetWidth < t.viewport.scrollWidth, c = t.viewport.offsetHeight < t.viewport.scrollHeight;
      i(a ? u : c);
    }
  }, 10);
  return pt(t.viewport, l), pt(t.content, l), /* @__PURE__ */ v.jsx(Ve, { present: r || o, children: /* @__PURE__ */ v.jsx(
    bn,
    {
      "data-state": o ? "visible" : "hidden",
      ...s,
      ref: e
    }
  ) });
}), bn = g.forwardRef((n, e) => {
  const { orientation: t = "vertical", ...r } = n, s = xe(Oe, n.__scopeScrollArea), o = g.useRef(null), i = g.useRef(0), [a, l] = g.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = Mo(a.viewport, a.content), c = {
    ...r,
    sizes: a,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (d) => o.current = d,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (d) => i.current = d
  };
  function h(d, p) {
    return Wc(d, i.current, a, p);
  }
  return t === "horizontal" ? /* @__PURE__ */ v.jsx(
    Mc,
    {
      ...c,
      ref: e,
      onThumbPositionChange: () => {
        if (s.viewport && o.current) {
          const d = s.viewport.scrollLeft, p = ds(d, a, s.dir);
          o.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (d) => {
        s.viewport && (s.viewport.scrollLeft = d);
      },
      onDragScroll: (d) => {
        s.viewport && (s.viewport.scrollLeft = h(d, s.dir));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ v.jsx(
    Uc,
    {
      ...c,
      ref: e,
      onThumbPositionChange: () => {
        if (s.viewport && o.current) {
          const d = s.viewport.scrollTop, p = ds(d, a);
          o.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (d) => {
        s.viewport && (s.viewport.scrollTop = d);
      },
      onDragScroll: (d) => {
        s.viewport && (s.viewport.scrollTop = h(d));
      }
    }
  ) : null;
}), Mc = g.forwardRef((n, e) => {
  const { sizes: t, onSizesChange: r, ...s } = n, o = xe(Oe, n.__scopeScrollArea), [i, a] = g.useState(), l = g.useRef(null), u = ye(e, l, o.onScrollbarXChange);
  return g.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ v.jsx(
    Lo,
    {
      "data-orientation": "horizontal",
      ...s,
      ref: u,
      sizes: t,
      style: {
        bottom: 0,
        left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ur(t) + "px",
        ...n.style
      },
      onThumbPointerDown: (c) => n.onThumbPointerDown(c.x),
      onDragScroll: (c) => n.onDragScroll(c.x),
      onWheelScroll: (c, h) => {
        if (o.viewport) {
          const d = o.viewport.scrollLeft + c.deltaX;
          n.onWheelScroll(d), Fo(d, h) && c.preventDefault();
        }
      },
      onResize: () => {
        l.current && o.viewport && i && r({
          content: o.viewport.scrollWidth,
          viewport: o.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: rr(i.paddingLeft),
            paddingEnd: rr(i.paddingRight)
          }
        });
      }
    }
  );
}), Uc = g.forwardRef((n, e) => {
  const { sizes: t, onSizesChange: r, ...s } = n, o = xe(Oe, n.__scopeScrollArea), [i, a] = g.useState(), l = g.useRef(null), u = ye(e, l, o.onScrollbarYChange);
  return g.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ v.jsx(
    Lo,
    {
      "data-orientation": "vertical",
      ...s,
      ref: u,
      sizes: t,
      style: {
        top: 0,
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": ur(t) + "px",
        ...n.style
      },
      onThumbPointerDown: (c) => n.onThumbPointerDown(c.y),
      onDragScroll: (c) => n.onDragScroll(c.y),
      onWheelScroll: (c, h) => {
        if (o.viewport) {
          const d = o.viewport.scrollTop + c.deltaY;
          n.onWheelScroll(d), Fo(d, h) && c.preventDefault();
        }
      },
      onResize: () => {
        l.current && o.viewport && i && r({
          content: o.viewport.scrollHeight,
          viewport: o.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: rr(i.paddingTop),
            paddingEnd: rr(i.paddingBottom)
          }
        });
      }
    }
  );
}), [Fc, Io] = Ao(Oe), Lo = g.forwardRef((n, e) => {
  const {
    __scopeScrollArea: t,
    sizes: r,
    hasThumb: s,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: a,
    onThumbPositionChange: l,
    onDragScroll: u,
    onWheelScroll: c,
    onResize: h,
    ...d
  } = n, p = xe(Oe, t), [y, m] = g.useState(null), w = ye(e, (P) => m(P)), S = g.useRef(null), b = g.useRef(""), k = p.viewport, x = r.content - r.viewport, C = ge(c), $ = ge(l), j = dr(h, 10);
  function D(P) {
    if (S.current) {
      const z = P.clientX - S.current.left, X = P.clientY - S.current.top;
      u({ x: z, y: X });
    }
  }
  return g.useEffect(() => {
    const P = (z) => {
      const X = z.target;
      (y == null ? void 0 : y.contains(X)) && C(z, x);
    };
    return document.addEventListener("wheel", P, { passive: !1 }), () => document.removeEventListener("wheel", P, { passive: !1 });
  }, [k, y, x, C]), g.useEffect($, [r, $]), pt(y, j), pt(p.content, j), /* @__PURE__ */ v.jsx(
    Fc,
    {
      scope: t,
      scrollbar: y,
      hasThumb: s,
      onThumbChange: ge(o),
      onThumbPointerUp: ge(i),
      onThumbPositionChange: $,
      onThumbPointerDown: ge(a),
      children: /* @__PURE__ */ v.jsx(
        me.div,
        {
          ...d,
          ref: w,
          style: { position: "absolute", ...d.style },
          onPointerDown: ue(n.onPointerDown, (P) => {
            P.button === 0 && (P.target.setPointerCapture(P.pointerId), S.current = y.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), D(P));
          }),
          onPointerMove: ue(n.onPointerMove, D),
          onPointerUp: ue(n.onPointerUp, (P) => {
            const z = P.target;
            z.hasPointerCapture(P.pointerId) && z.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), S.current = null;
          })
        }
      )
    }
  );
}), tr = "ScrollAreaThumb", Do = g.forwardRef(
  (n, e) => {
    const { forceMount: t, ...r } = n, s = Io(tr, n.__scopeScrollArea);
    return /* @__PURE__ */ v.jsx(Ve, { present: t || s.hasThumb, children: /* @__PURE__ */ v.jsx(zc, { ref: e, ...r }) });
  }
), zc = g.forwardRef(
  (n, e) => {
    const { __scopeScrollArea: t, style: r, ...s } = n, o = xe(tr, t), i = Io(tr, t), { onThumbPositionChange: a } = i, l = ye(
      e,
      (h) => i.onThumbChange(h)
    ), u = g.useRef(), c = dr(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return g.useEffect(() => {
      const h = o.viewport;
      if (h) {
        const d = () => {
          if (c(), !u.current) {
            const p = qc(h, a);
            u.current = p, a();
          }
        };
        return a(), h.addEventListener("scroll", d), () => h.removeEventListener("scroll", d);
      }
    }, [o.viewport, c, a]), /* @__PURE__ */ v.jsx(
      me.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...s,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: ue(n.onPointerDownCapture, (h) => {
          const p = h.target.getBoundingClientRect(), y = h.clientX - p.left, m = h.clientY - p.top;
          i.onThumbPointerDown({ x: y, y: m });
        }),
        onPointerUp: ue(n.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
Do.displayName = tr;
var yn = "ScrollAreaCorner", No = g.forwardRef(
  (n, e) => {
    const t = xe(yn, n.__scopeScrollArea), r = !!(t.scrollbarX && t.scrollbarY);
    return t.type !== "scroll" && r ? /* @__PURE__ */ v.jsx(Bc, { ...n, ref: e }) : null;
  }
);
No.displayName = yn;
var Bc = g.forwardRef((n, e) => {
  const { __scopeScrollArea: t, ...r } = n, s = xe(yn, t), [o, i] = g.useState(0), [a, l] = g.useState(0), u = !!(o && a);
  return pt(s.scrollbarX, () => {
    var h;
    const c = ((h = s.scrollbarX) == null ? void 0 : h.offsetHeight) || 0;
    s.onCornerHeightChange(c), l(c);
  }), pt(s.scrollbarY, () => {
    var h;
    const c = ((h = s.scrollbarY) == null ? void 0 : h.offsetWidth) || 0;
    s.onCornerWidthChange(c), i(c);
  }), u ? /* @__PURE__ */ v.jsx(
    me.div,
    {
      ...r,
      ref: e,
      style: {
        width: o,
        height: a,
        position: "absolute",
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...n.style
      }
    }
  ) : null;
});
function rr(n) {
  return n ? parseInt(n, 10) : 0;
}
function Mo(n, e) {
  const t = n / e;
  return isNaN(t) ? 0 : t;
}
function ur(n) {
  const e = Mo(n.viewport, n.content), t = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, r = (n.scrollbar.size - t) * e;
  return Math.max(r, 18);
}
function Wc(n, e, t, r = "ltr") {
  const s = ur(t), o = s / 2, i = e || o, a = s - i, l = t.scrollbar.paddingStart + i, u = t.scrollbar.size - t.scrollbar.paddingEnd - a, c = t.content - t.viewport, h = r === "ltr" ? [0, c] : [c * -1, 0];
  return Uo([l, u], h)(n);
}
function ds(n, e, t = "ltr") {
  const r = ur(e), s = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = e.scrollbar.size - s, i = e.content - e.viewport, a = o - r, l = t === "ltr" ? [0, i] : [i * -1, 0], u = Oc(n, l);
  return Uo([0, i], [0, a])(u);
}
function Uo(n, e) {
  return (t) => {
    if (n[0] === n[1] || e[0] === e[1]) return e[0];
    const r = (e[1] - e[0]) / (n[1] - n[0]);
    return e[0] + r * (t - n[0]);
  };
}
function Fo(n, e) {
  return n > 0 && n < e;
}
var qc = (n, e = () => {
}) => {
  let t = { left: n.scrollLeft, top: n.scrollTop }, r = 0;
  return function s() {
    const o = { left: n.scrollLeft, top: n.scrollTop }, i = t.left !== o.left, a = t.top !== o.top;
    (i || a) && e(), t = o, r = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(r);
};
function dr(n, e) {
  const t = ge(n), r = g.useRef(0);
  return g.useEffect(() => () => window.clearTimeout(r.current), []), g.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(t, e);
  }, [t, e]);
}
function pt(n, e) {
  const t = ge(e);
  jt(() => {
    let r = 0;
    if (n) {
      const s = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(t);
      });
      return s.observe(n), () => {
        window.cancelAnimationFrame(r), s.unobserve(n);
      };
    }
  }, [n, t]);
}
function Vc(n, e) {
  const { asChild: t, children: r } = n;
  if (!t) return typeof e == "function" ? e(r) : e;
  const s = g.Children.only(r);
  return g.cloneElement(s, {
    children: typeof e == "function" ? e(s.props.children) : e
  });
}
var zo = Po, Hc = jo, Gc = No;
const Bo = g.forwardRef(({ className: n, children: e, ...t }, r) => /* @__PURE__ */ v.jsxs(
  zo,
  {
    ref: r,
    className: qe("relative overflow-hidden", n),
    ...t,
    children: [
      /* @__PURE__ */ v.jsx(Hc, { className: "h-full w-full rounded-[inherit]", children: e }),
      /* @__PURE__ */ v.jsx(Wo, {}),
      /* @__PURE__ */ v.jsx(Gc, {})
    ]
  }
));
Bo.displayName = zo.displayName;
const Wo = g.forwardRef(({ className: n, orientation: e = "vertical", ...t }, r) => /* @__PURE__ */ v.jsx(
  vn,
  {
    ref: r,
    orientation: e,
    className: qe(
      "flex touch-none select-none transition-colors",
      e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      n
    ),
    ...t,
    children: /* @__PURE__ */ v.jsx(Do, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Wo.displayName = vn.displayName;
function wn() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let et = wn();
function qo(n) {
  et = n;
}
const Vo = /[&<>"']/, Jc = new RegExp(Vo.source, "g"), Ho = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Kc = new RegExp(Ho.source, "g"), Yc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, hs = (n) => Yc[n];
function be(n, e) {
  if (e) {
    if (Vo.test(n))
      return n.replace(Jc, hs);
  } else if (Ho.test(n))
    return n.replace(Kc, hs);
  return n;
}
const Xc = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function Zc(n) {
  return n.replace(Xc, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
const Qc = /(^|[^\[])\^/g;
function J(n, e) {
  n = typeof n == "string" ? n : n.source, e = e || "";
  const t = {
    replace: (r, s) => (s = typeof s == "object" && "source" in s ? s.source : s, s = s.replace(Qc, "$1"), n = n.replace(r, s), t),
    getRegex: () => new RegExp(n, e)
  };
  return t;
}
function fs(n) {
  try {
    n = encodeURI(n).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n;
}
const nr = { exec: () => null };
function ps(n, e) {
  const t = n.replace(/\|/g, (o, i, a) => {
    let l = !1, u = i;
    for (; --u >= 0 && a[u] === "\\"; )
      l = !l;
    return l ? "|" : " |";
  }), r = t.split(/ \|/);
  let s = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; )
        r.push("");
  for (; s < r.length; s++)
    r[s] = r[s].trim().replace(/\\\|/g, "|");
  return r;
}
function Gt(n, e, t) {
  const r = n.length;
  if (r === 0)
    return "";
  let s = 0;
  for (; s < r; ) {
    const o = n.charAt(r - s - 1);
    if (o === e && !t)
      s++;
    else if (o !== e && t)
      s++;
    else
      break;
  }
  return n.slice(0, r - s);
}
function eu(n, e) {
  if (n.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let r = 0; r < n.length; r++)
    if (n[r] === "\\")
      r++;
    else if (n[r] === e[0])
      t++;
    else if (n[r] === e[1] && (t--, t < 0))
      return r;
  return -1;
}
function gs(n, e, t, r) {
  const s = e.href, o = e.title ? be(e.title) : null, i = n[1].replace(/\\([\[\]])/g, "$1");
  if (n[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const a = {
      type: "link",
      raw: t,
      href: s,
      title: o,
      text: i,
      tokens: r.inlineTokens(i)
    };
    return r.state.inLink = !1, a;
  }
  return {
    type: "image",
    raw: t,
    href: s,
    title: o,
    text: be(i)
  };
}
function tu(n, e) {
  const t = n.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  const r = t[1];
  return e.split(`
`).map((s) => {
    const o = s.match(/^\s+/);
    if (o === null)
      return s;
    const [i] = o;
    return i.length >= r.length ? s.slice(r.length) : s;
  }).join(`
`);
}
class sr {
  constructor(e) {
    G(this, "options");
    // TODO: Fix this rules type
    G(this, "rules");
    G(this, "lexer");
    this.options = e || et;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const r = t[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r : Gt(r, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const r = t[0], s = tu(r, t[3] || "");
      return {
        type: "code",
        raw: r,
        lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
        text: s
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        const s = Gt(r, "#");
        (this.options.pedantic || !s || / $/.test(s)) && (r = s.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: t[0]
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      const r = Gt(t[0].replace(/^ *>[ \t]?/gm, ""), `
`), s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const o = this.lexer.blockTokens(r);
      return this.lexer.state.top = s, {
        type: "blockquote",
        raw: t[0],
        tokens: o,
        text: r
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim();
      const s = r.length > 1, o = {
        type: "list",
        raw: "",
        ordered: s,
        start: s ? +r.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      r = s ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = s ? r : "[*+-]");
      const i = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let a = "", l = "", u = !1;
      for (; e; ) {
        let c = !1;
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e))
          break;
        a = t[0], e = e.substring(a.length);
        let h = t[2].split(`
`, 1)[0].replace(/^\t+/, (S) => " ".repeat(3 * S.length)), d = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, l = h.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, l = h.slice(p), p += t[1].length);
        let y = !1;
        if (!h && /^ *$/.test(d) && (a += d + `
`, e = e.substring(d.length + 1), c = !0), !c) {
          const S = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), b = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), k = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), x = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            const C = e.split(`
`, 1)[0];
            if (d = C, this.options.pedantic && (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), k.test(d) || x.test(d) || S.test(d) || b.test(e))
              break;
            if (d.search(/[^ ]/) >= p || !d.trim())
              l += `
` + d.slice(p);
            else {
              if (y || h.search(/[^ ]/) >= 4 || k.test(h) || x.test(h) || b.test(h))
                break;
              l += `
` + d;
            }
            !y && !d.trim() && (y = !0), a += C + `
`, e = e.substring(C.length + 1), h = d.slice(p);
          }
        }
        o.loose || (u ? o.loose = !0 : /\n *\n *$/.test(a) && (u = !0));
        let m = null, w;
        this.options.gfm && (m = /^\[[ xX]\] /.exec(l), m && (w = m[0] !== "[ ] ", l = l.replace(/^\[[ xX]\] +/, ""))), o.items.push({
          type: "list_item",
          raw: a,
          task: !!m,
          checked: w,
          loose: !1,
          text: l,
          tokens: []
        }), o.raw += a;
      }
      o.items[o.items.length - 1].raw = a.trimEnd(), o.items[o.items.length - 1].text = l.trimEnd(), o.raw = o.raw.trimEnd();
      for (let c = 0; c < o.items.length; c++)
        if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
          const h = o.items[c].tokens.filter((p) => p.type === "space"), d = h.length > 0 && h.some((p) => /\n.*\n/.test(p.raw));
          o.loose = d;
        }
      if (o.loose)
        for (let c = 0; c < o.items.length; c++)
          o.items[c].loose = !0;
      return o;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const r = t[1].toLowerCase().replace(/\s+/g, " "), s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
      return {
        type: "def",
        tag: r,
        raw: t[0],
        href: s,
        title: o
      };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (t) {
      if (!/[:|]/.test(t[2]))
        return;
      const r = {
        type: "table",
        raw: t[0],
        header: ps(t[1]).map((s) => ({ text: s, tokens: [] })),
        align: t[2].replace(/^\||\| *$/g, "").split("|"),
        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : []
      };
      if (r.header.length === r.align.length) {
        let s = r.align.length, o, i, a, l;
        for (o = 0; o < s; o++) {
          const u = r.align[o];
          u && (/^ *-+: *$/.test(u) ? r.align[o] = "right" : /^ *:-+: *$/.test(u) ? r.align[o] = "center" : /^ *:-+ *$/.test(u) ? r.align[o] = "left" : r.align[o] = null);
        }
        for (s = r.rows.length, o = 0; o < s; o++)
          r.rows[o] = ps(r.rows[o], r.header.length).map((u) => ({ text: u, tokens: [] }));
        for (s = r.header.length, i = 0; i < s; i++)
          r.header[i].tokens = this.lexer.inline(r.header[i].text);
        for (s = r.rows.length, i = 0; i < s; i++)
          for (l = r.rows[i], a = 0; a < l.length; a++)
            l[a].tokens = this.lexer.inline(l[a].text);
        return r;
      }
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: r,
        tokens: this.lexer.inline(r)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: be(t[1])
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const i = Gt(r.slice(0, -1), "\\");
        if ((r.length - i.length) % 2 === 0)
          return;
      } else {
        const i = eu(t[2], "()");
        if (i > -1) {
          const l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, l).trim(), t[3] = "";
        }
      }
      let s = t[2], o = "";
      if (this.options.pedantic) {
        const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        i && (s = i[1], o = i[3]);
      } else
        o = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (this.options.pedantic && !/>$/.test(r) ? s = s.slice(1) : s = s.slice(1, -1)), gs(t, {
        href: s && s.replace(this.rules.inline._escapes, "$1"),
        title: o && o.replace(this.rules.inline._escapes, "$1")
      }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      let s = (r[2] || r[1]).replace(/\s+/g, " ");
      if (s = t[s.toLowerCase()], !s) {
        const o = r[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return gs(r, s, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let s = this.rules.inline.emStrong.lDelim.exec(e);
    if (!s || s[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(s[1] || s[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      const i = [...s[0]].length - 1;
      let a, l, u = i, c = 0;
      const h = s[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (h.lastIndex = 0, t = t.slice(-1 * e.length + s[0].length - 1); (s = h.exec(t)) != null; ) {
        if (a = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !a)
          continue;
        if (l = [...a].length, s[3] || s[4]) {
          u += l;
          continue;
        } else if ((s[5] || s[6]) && i % 3 && !((i + l) % 3)) {
          c += l;
          continue;
        }
        if (u -= l, u > 0)
          continue;
        l = Math.min(l, l + u + c);
        const d = [...e].slice(0, i + s.index + l + 1).join("");
        if (Math.min(i, l) % 2) {
          const y = d.slice(1, -1);
          return {
            type: "em",
            raw: d,
            text: y,
            tokens: this.lexer.inlineTokens(y)
          };
        }
        const p = d.slice(2, -2);
        return {
          type: "strong",
          raw: d,
          text: p,
          tokens: this.lexer.inlineTokens(p)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(r), o = /^ /.test(r) && / $/.test(r);
      return s && o && (r = r.substring(1, r.length - 1)), r = be(r, !0), {
        type: "codespan",
        raw: t[0],
        text: r
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, s;
      return t[2] === "@" ? (r = be(t[1]), s = "mailto:" + r) : (r = be(t[1]), s = r), {
        type: "link",
        raw: t[0],
        text: r,
        href: s,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let r, s;
      if (t[2] === "@")
        r = be(t[0]), s = "mailto:" + r;
      else {
        let o;
        do
          o = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])[0];
        while (o !== t[0]);
        r = be(t[0]), t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: r,
        href: s,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      let r;
      return this.lexer.state.inRawBlock ? r = t[0] : r = be(t[0]), {
        type: "text",
        raw: t[0],
        text: r
      };
    }
  }
}
const O = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: nr,
  lheading: /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
O._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
O._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
O.def = J(O.def).replace("label", O._label).replace("title", O._title).getRegex();
O.bullet = /(?:[*+-]|\d{1,9}[.)])/;
O.listItemStart = J(/^( *)(bull) */).replace("bull", O.bullet).getRegex();
O.list = J(O.list).replace(/bull/g, O.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + O.def.source + ")").getRegex();
O._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
O._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
O.html = J(O.html, "i").replace("comment", O._comment).replace("tag", O._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
O.lheading = J(O.lheading).replace(/bull/g, O.bullet).getRegex();
O.paragraph = J(O._paragraph).replace("hr", O.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", O._tag).getRegex();
O.blockquote = J(O.blockquote).replace("paragraph", O.paragraph).getRegex();
O.normal = { ...O };
O.gfm = {
  ...O.normal,
  table: "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
};
O.gfm.table = J(O.gfm.table).replace("hr", O.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", O._tag).getRegex();
O.gfm.paragraph = J(O._paragraph).replace("hr", O.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", O.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", O._tag).getRegex();
O.pedantic = {
  ...O.normal,
  html: J(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", O._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: nr,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: J(O.normal._paragraph).replace("hr", O.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", O.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
const R = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: nr,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: nr,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};
R._punctuation = "\\p{P}$+<=>`^|~";
R.punctuation = J(R.punctuation, "u").replace(/punctuation/g, R._punctuation).getRegex();
R.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
R.anyPunctuation = /\\[punct]/g;
R._escapes = /\\([punct])/g;
R._comment = J(O._comment).replace("(?:-->|$)", "-->").getRegex();
R.emStrong.lDelim = J(R.emStrong.lDelim, "u").replace(/punct/g, R._punctuation).getRegex();
R.emStrong.rDelimAst = J(R.emStrong.rDelimAst, "gu").replace(/punct/g, R._punctuation).getRegex();
R.emStrong.rDelimUnd = J(R.emStrong.rDelimUnd, "gu").replace(/punct/g, R._punctuation).getRegex();
R.anyPunctuation = J(R.anyPunctuation, "gu").replace(/punct/g, R._punctuation).getRegex();
R._escapes = J(R._escapes, "gu").replace(/punct/g, R._punctuation).getRegex();
R._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
R._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
R.autolink = J(R.autolink).replace("scheme", R._scheme).replace("email", R._email).getRegex();
R._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
R.tag = J(R.tag).replace("comment", R._comment).replace("attribute", R._attribute).getRegex();
R._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
R._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
R._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
R.link = J(R.link).replace("label", R._label).replace("href", R._href).replace("title", R._title).getRegex();
R.reflink = J(R.reflink).replace("label", R._label).replace("ref", O._label).getRegex();
R.nolink = J(R.nolink).replace("ref", O._label).getRegex();
R.reflinkSearch = J(R.reflinkSearch, "g").replace("reflink", R.reflink).replace("nolink", R.nolink).getRegex();
R.normal = { ...R };
R.pedantic = {
  ...R.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: J(/^!?\[(label)\]\((.*?)\)/).replace("label", R._label).getRegex(),
  reflink: J(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", R._label).getRegex()
};
R.gfm = {
  ...R.normal,
  escape: J(R.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
R.gfm.url = J(R.gfm.url, "i").replace("email", R.gfm._extended_email).getRegex();
R.breaks = {
  ...R.gfm,
  br: J(R.br).replace("{2,}", "*").getRegex(),
  text: J(R.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
class $e {
  constructor(e) {
    G(this, "tokens");
    G(this, "options");
    G(this, "state");
    G(this, "tokenizer");
    G(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || et, this.options.tokenizer = this.options.tokenizer || new sr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const t = {
      block: O.normal,
      inline: R.normal
    };
    this.options.pedantic ? (t.block = O.pedantic, t.inline = R.pedantic) : this.options.gfm && (t.block = O.gfm, this.options.breaks ? t.inline = R.breaks : t.inline = R.gfm), this.tokenizer.rules = t;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: O,
      inline: R
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, t) {
    return new $e(t).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, t) {
    return new $e(t).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    let t;
    for (; t = this.inlineQueue.shift(); )
      this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (a, l, u) => l + "    ".repeat(u.length));
    let r, s, o, i;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => (r = a.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), s = t[t.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), s = t[t.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + r.raw, s.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
            href: r.href,
            title: r.title
          });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (o = e, this.options.extensions && this.options.extensions.startBlock) {
          let a = 1 / 0;
          const l = e.slice(1);
          let u;
          this.options.extensions.startBlock.forEach((c) => {
            u = c.call({ lexer: this }, l), typeof u == "number" && u >= 0 && (a = Math.min(a, u));
          }), a < 1 / 0 && a >= 0 && (o = e.substring(0, a + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(o))) {
          s = t[t.length - 1], i && s.type === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r), i = o.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), s = t[t.length - 1], s && s.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : t.push(r);
          continue;
        }
        if (e) {
          const a = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else
            throw new Error(a);
        }
      }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, t = []) {
    let r, s, o, i = e, a, l, u;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; )
          c.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; )
      i = i.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; )
      i = i.slice(0, a.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (l || (u = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => (r = c.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), s = t[t.length - 1], s && r.type === "text" && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, i, u)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e))) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (o = e, this.options.extensions && this.options.extensions.startInline) {
          let c = 1 / 0;
          const h = e.slice(1);
          let d;
          this.options.extensions.startInline.forEach((p) => {
            d = p.call({ lexer: this }, h), typeof d == "number" && d >= 0 && (c = Math.min(c, d));
          }), c < 1 / 0 && c >= 0 && (o = e.substring(0, c + 1));
        }
        if (r = this.tokenizer.inlineText(o)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (u = r.raw.slice(-1)), l = !0, s = t[t.length - 1], s && s.type === "text" ? (s.raw += r.raw, s.text += r.text) : t.push(r);
          continue;
        }
        if (e) {
          const c = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else
            throw new Error(c);
        }
      }
    return t;
  }
}
class or {
  constructor(e) {
    G(this, "options");
    this.options = e || et;
  }
  code(e, t, r) {
    var o;
    const s = (o = (t || "").match(/^\S*/)) == null ? void 0 : o[0];
    return e = e.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + be(s) + '">' + (r ? e : be(e, !0)) + `</code></pre>
` : "<pre><code>" + (r ? e : be(e, !0)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, r) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, r) {
    const s = t ? "ol" : "ul", o = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + s + o + `>
` + e + "</" + s + `>
`;
  }
  listitem(e, t, r) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    const r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  /**
   * span level renderer
   */
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, r) {
    const s = fs(e);
    if (s === null)
      return r;
    e = s;
    let o = '<a href="' + e + '"';
    return t && (o += ' title="' + t + '"'), o += ">" + r + "</a>", o;
  }
  image(e, t, r) {
    const s = fs(e);
    if (s === null)
      return r;
    e = s;
    let o = `<img src="${e}" alt="${r}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  text(e) {
    return e;
  }
}
class _n {
  // no need for block level renderers
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
class je {
  constructor(e) {
    G(this, "options");
    G(this, "renderer");
    G(this, "textRenderer");
    this.options = e || et, this.options.renderer = this.options.renderer || new or(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new _n();
  }
  /**
   * Static Parse Method
   */
  static parse(e, t) {
    return new je(t).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, t) {
    return new je(t).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, t = !0) {
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const i = o, a = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (a !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
          r += a || "";
          continue;
        }
      }
      switch (o.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          const i = o;
          r += this.renderer.heading(this.parseInline(i.tokens), i.depth, Zc(this.parseInline(i.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const i = o;
          r += this.renderer.code(i.text, i.lang, !!i.escaped);
          continue;
        }
        case "table": {
          const i = o;
          let a = "", l = "";
          for (let c = 0; c < i.header.length; c++)
            l += this.renderer.tablecell(this.parseInline(i.header[c].tokens), { header: !0, align: i.align[c] });
          a += this.renderer.tablerow(l);
          let u = "";
          for (let c = 0; c < i.rows.length; c++) {
            const h = i.rows[c];
            l = "";
            for (let d = 0; d < h.length; d++)
              l += this.renderer.tablecell(this.parseInline(h[d].tokens), { header: !1, align: i.align[d] });
            u += this.renderer.tablerow(l);
          }
          r += this.renderer.table(a, u);
          continue;
        }
        case "blockquote": {
          const i = o, a = this.parse(i.tokens);
          r += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          const i = o, a = i.ordered, l = i.start, u = i.loose;
          let c = "";
          for (let h = 0; h < i.items.length; h++) {
            const d = i.items[h], p = d.checked, y = d.task;
            let m = "";
            if (d.task) {
              const w = this.renderer.checkbox(!!p);
              u ? d.tokens.length > 0 && d.tokens[0].type === "paragraph" ? (d.tokens[0].text = w + " " + d.tokens[0].text, d.tokens[0].tokens && d.tokens[0].tokens.length > 0 && d.tokens[0].tokens[0].type === "text" && (d.tokens[0].tokens[0].text = w + " " + d.tokens[0].tokens[0].text)) : d.tokens.unshift({
                type: "text",
                text: w + " "
              }) : m += w + " ";
            }
            m += this.parse(d.tokens, u), c += this.renderer.listitem(m, y, !!p);
          }
          r += this.renderer.list(c, a, l);
          continue;
        }
        case "html": {
          const i = o;
          r += this.renderer.html(i.text, i.block);
          continue;
        }
        case "paragraph": {
          const i = o;
          r += this.renderer.paragraph(this.parseInline(i.tokens));
          continue;
        }
        case "text": {
          let i = o, a = i.tokens ? this.parseInline(i.tokens) : i.text;
          for (; s + 1 < e.length && e[s + 1].type === "text"; )
            i = e[++s], a += `
` + (i.tokens ? this.parseInline(i.tokens) : i.text);
          r += t ? this.renderer.paragraph(a) : a;
          continue;
        }
        default: {
          const i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const i = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          r += i || "";
          continue;
        }
      }
      switch (o.type) {
        case "escape": {
          const i = o;
          r += t.text(i.text);
          break;
        }
        case "html": {
          const i = o;
          r += t.html(i.text);
          break;
        }
        case "link": {
          const i = o;
          r += t.link(i.href, i.title, this.parseInline(i.tokens, t));
          break;
        }
        case "image": {
          const i = o;
          r += t.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          const i = o;
          r += t.strong(this.parseInline(i.tokens, t));
          break;
        }
        case "em": {
          const i = o;
          r += t.em(this.parseInline(i.tokens, t));
          break;
        }
        case "codespan": {
          const i = o;
          r += t.codespan(i.text);
          break;
        }
        case "br": {
          r += t.br();
          break;
        }
        case "del": {
          const i = o;
          r += t.del(this.parseInline(i.tokens, t));
          break;
        }
        case "text": {
          const i = o;
          r += t.text(i.text);
          break;
        }
        default: {
          const i = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
}
class Rt {
  constructor(e) {
    G(this, "options");
    this.options = e || et;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
}
G(Rt, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess"
]));
var Qe, Zr, Go;
class ru {
  constructor(...e) {
    Hn(this, Qe);
    G(this, "defaults", wn());
    G(this, "options", this.setOptions);
    G(this, "parse", Ft(this, Qe, Zr).call(this, $e.lex, je.parse));
    G(this, "parseInline", Ft(this, Qe, Zr).call(this, $e.lexInline, je.parseInline));
    G(this, "Parser", je);
    G(this, "parser", je.parse);
    G(this, "Renderer", or);
    G(this, "TextRenderer", _n);
    G(this, "Lexer", $e);
    G(this, "lexer", $e.lex);
    G(this, "Tokenizer", sr);
    G(this, "Hooks", Rt);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var s, o;
    let r = [];
    for (const i of e)
      switch (r = r.concat(t.call(this, i)), i.type) {
        case "table": {
          const a = i;
          for (const l of a.header)
            r = r.concat(this.walkTokens(l.tokens, t));
          for (const l of a.rows)
            for (const u of l)
              r = r.concat(this.walkTokens(u.tokens, t));
          break;
        }
        case "list": {
          const a = i;
          r = r.concat(this.walkTokens(a.items, t));
          break;
        }
        default: {
          const a = i;
          (o = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && o[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((l) => {
            r = r.concat(this.walkTokens(a[l], t));
          }) : a.tokens && (r = r.concat(this.walkTokens(a.tokens, t)));
        }
      }
    return r;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((r) => {
      const s = { ...r };
      if (s.async = this.defaults.async || s.async || !1, r.extensions && (r.extensions.forEach((o) => {
        if (!o.name)
          throw new Error("extension name required");
        if ("renderer" in o) {
          const i = t.renderers[o.name];
          i ? t.renderers[o.name] = function(...a) {
            let l = o.renderer.apply(this, a);
            return l === !1 && (l = i.apply(this, a)), l;
          } : t.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const i = t[o.level];
          i ? i.unshift(o.tokenizer) : t[o.level] = [o.tokenizer], o.start && (o.level === "block" ? t.startBlock ? t.startBlock.push(o.start) : t.startBlock = [o.start] : o.level === "inline" && (t.startInline ? t.startInline.push(o.start) : t.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (t.childTokens[o.name] = o.childTokens);
      }), s.extensions = t), r.renderer) {
        const o = this.defaults.renderer || new or(this.defaults);
        for (const i in r.renderer) {
          const a = r.renderer[i], l = i, u = o[l];
          o[l] = (...c) => {
            let h = a.apply(o, c);
            return h === !1 && (h = u.apply(o, c)), h || "";
          };
        }
        s.renderer = o;
      }
      if (r.tokenizer) {
        const o = this.defaults.tokenizer || new sr(this.defaults);
        for (const i in r.tokenizer) {
          const a = r.tokenizer[i], l = i, u = o[l];
          o[l] = (...c) => {
            let h = a.apply(o, c);
            return h === !1 && (h = u.apply(o, c)), h;
          };
        }
        s.tokenizer = o;
      }
      if (r.hooks) {
        const o = this.defaults.hooks || new Rt();
        for (const i in r.hooks) {
          const a = r.hooks[i], l = i, u = o[l];
          Rt.passThroughHooks.has(i) ? o[l] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(o, c)).then((d) => u.call(o, d));
            const h = a.call(o, c);
            return u.call(o, h);
          } : o[l] = (...c) => {
            let h = a.apply(o, c);
            return h === !1 && (h = u.apply(o, c)), h;
          };
        }
        s.hooks = o;
      }
      if (r.walkTokens) {
        const o = this.defaults.walkTokens, i = r.walkTokens;
        s.walkTokens = function(a) {
          let l = [];
          return l.push(i.call(this, a)), o && (l = l.concat(o.call(this, a))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
}
Qe = new WeakSet(), Zr = function(e, t) {
  return (r, s) => {
    const o = { ...s }, i = { ...this.defaults, ...o };
    this.defaults.async === !0 && o.async === !1 && (i.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), i.async = !0);
    const a = Ft(this, Qe, Go).call(this, !!i.silent, !!i.async);
    if (typeof r > "u" || r === null)
      return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof r != "string")
      return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
    if (i.hooks && (i.hooks.options = i), i.async)
      return Promise.resolve(i.hooks ? i.hooks.preprocess(r) : r).then((l) => e(l, i)).then((l) => i.walkTokens ? Promise.all(this.walkTokens(l, i.walkTokens)).then(() => l) : l).then((l) => t(l, i)).then((l) => i.hooks ? i.hooks.postprocess(l) : l).catch(a);
    try {
      i.hooks && (r = i.hooks.preprocess(r));
      const l = e(r, i);
      i.walkTokens && this.walkTokens(l, i.walkTokens);
      let u = t(l, i);
      return i.hooks && (u = i.hooks.postprocess(u)), u;
    } catch (l) {
      return a(l);
    }
  };
}, Go = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const s = "<p>An error occurred:</p><pre>" + be(r.message + "", !0) + "</pre>";
      return t ? Promise.resolve(s) : s;
    }
    if (t)
      return Promise.reject(r);
    throw r;
  };
};
const Ze = new ru();
function K(n, e) {
  return Ze.parse(n, e);
}
K.options = K.setOptions = function(n) {
  return Ze.setOptions(n), K.defaults = Ze.defaults, qo(K.defaults), K;
};
K.getDefaults = wn;
K.defaults = et;
K.use = function(...n) {
  return Ze.use(...n), K.defaults = Ze.defaults, qo(K.defaults), K;
};
K.walkTokens = function(n, e) {
  return Ze.walkTokens(n, e);
};
K.parseInline = Ze.parseInline;
K.Parser = je;
K.parser = je.parse;
K.Renderer = or;
K.TextRenderer = _n;
K.Lexer = $e;
K.lexer = $e.lex;
K.Tokenizer = sr;
K.Hooks = Rt;
K.parse = K;
K.options;
K.setOptions;
K.use;
K.walkTokens;
K.parseInline;
je.parse;
$e.lex;
const ms = ({ content: n, isUser: e }) => {
  const t = () => {
    if (!n) return { __html: "" };
    try {
      return { __html: K(n) };
    } catch (r) {
      return console.error("Error parsing markdown:", r), { __html: n };
    }
  };
  return /* @__PURE__ */ v.jsx("div", { className: qe(
    "flex mb-2",
    e ? "justify-end" : "justify-start"
  ), children: /* @__PURE__ */ v.jsx("div", { className: qe(
    "max-w-[80%] p-3 rounded-lg shadow-sm",
    e ? "bg-blue-600 text-white rounded-tr-none" : "bg-gray-800/80 backdrop-blur-sm text-gray-100 rounded-tl-none"
  ), children: n ? /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "prose prose-sm prose-invert max-w-none break-words",
      dangerouslySetInnerHTML: t()
    }
  ) : /* @__PURE__ */ v.jsx("span", { className: "text-gray-400 italic", children: "Пустое сообщение" }) }) });
}, vs = () => /* @__PURE__ */ v.jsxs("div", { className: "inline-flex gap-1", children: [
  /* @__PURE__ */ v.jsx(
    "span",
    {
      className: "w-1 h-1 bg-gray-400 rounded-full",
      style: { animation: "typingDot 1.4s infinite ease-in-out", animationDelay: "0ms" }
    }
  ),
  /* @__PURE__ */ v.jsx(
    "span",
    {
      className: "w-1 h-1 bg-gray-400 rounded-full",
      style: { animation: "typingDot 1.4s infinite ease-in-out", animationDelay: "200ms" }
    }
  ),
  /* @__PURE__ */ v.jsx(
    "span",
    {
      className: "w-1 h-1 bg-gray-400 rounded-full",
      style: { animation: "typingDot 1.4s infinite ease-in-out", animationDelay: "400ms" }
    }
  ),
  /* @__PURE__ */ v.jsx("style", { children: `
      @keyframes typingDot {
        0%, 100% { transform: translateY(0); opacity: 0.5; }
        50% { transform: translateY(-1px); opacity: 1; }
      }
    ` })
] }), nu = ({
  messages: n,
  isLoading: e,
  isExpanded: t
}) => {
  const r = We(null), s = We(null), [o, i] = ie(!1), [a, l] = ie(!0), u = We(n.length), c = () => {
    a && s.current && !o && s.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, h = (d) => {
    if (!r.current) return;
    const { scrollTop: p, scrollHeight: y, clientHeight: m } = d.currentTarget, w = Math.abs(y - p - m) < 20;
    l(w), o && setTimeout(() => i(!1), 150);
  };
  return Ce(() => {
    const d = document.querySelector("[data-radix-scroll-area-viewport]");
    if (d) {
      const p = () => {
        i(!0);
      };
      return d.addEventListener("wheel", p, { passive: !0 }), d.addEventListener("touchmove", p, { passive: !0 }), () => {
        d.removeEventListener("wheel", p), d.removeEventListener("touchmove", p);
      };
    }
  }, []), Ce(() => {
    const d = n.length > u.current;
    if (u.current = n.length, d || e) {
      const p = setTimeout(() => {
        c();
      }, 200);
      return () => clearTimeout(p);
    }
  }, [n, e]), /* @__PURE__ */ v.jsx("div", { className: `w-full mb-6 ${t ? "flex-grow" : "h-48"} overflow-hidden bg-transparent rounded-lg`, children: /* @__PURE__ */ v.jsx(
    Bo,
    {
      className: "h-full pr-4",
      type: "auto",
      scrollHideDelay: 300,
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          className: "px-2 py-1",
          ref: r,
          onScroll: h,
          children: [
            n.length === 0 && /* @__PURE__ */ v.jsx("div", { className: "p-3 text-gray-200", children: /* @__PURE__ */ v.jsx("p", { className: "text-sm", children: "Начните диалог с ассистентом Амика, отправив текстовое или голосовое сообщение." }) }),
            n.map((d, p) => {
              var m;
              const y = d.id || `message-${p}-${Date.now()}-${((m = d.user_query) == null ? void 0 : m.substring(0, 10)) || "bot"}`;
              return /* @__PURE__ */ v.jsxs("div", { className: "mb-3 animate-fade-in", children: [
                d.user_query && /* @__PURE__ */ v.jsx(
                  ms,
                  {
                    content: d.user_query,
                    isUser: !0
                  }
                ),
                d.isLoading ? /* @__PURE__ */ v.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ v.jsx("div", { className: "max-w-[80%] bg-gray-800/80 backdrop-blur-sm rounded-lg px-4 py-3 text-gray-100 shadow-md", children: /* @__PURE__ */ v.jsx(vs, {}) }) }) : /* @__PURE__ */ v.jsx(
                  ms,
                  {
                    content: d.bot_response,
                    isUser: !1
                  }
                )
              ] }, y);
            }),
            e && !n.find((d) => d.isLoading) && /* @__PURE__ */ v.jsx("div", { className: "flex justify-start mb-3 animate-fade-in", children: /* @__PURE__ */ v.jsx("div", { className: "inline-flex items-center bg-gray-800/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md", children: /* @__PURE__ */ v.jsx(vs, {}) }) }),
            /* @__PURE__ */ v.jsx("div", { ref: s, className: "h-px" }),
            " "
          ]
        }
      )
    }
  ) });
}, su = ({
  userInput: n,
  onUserInputChange: e,
  onSendMessage: t,
  isLoading: r
}) => {
  const s = (o) => {
    o.key === "Enter" && t();
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex-grow flex items-center gap-2 bg-gray-700/30 rounded-full pl-4 pr-2 py-2 animate-fade-in", children: [
    /* @__PURE__ */ v.jsx(
      "input",
      {
        type: "text",
        className: "bg-transparent border-none outline-none text-gray-100 flex-grow text-sm",
        placeholder: "Напишите сообщение...",
        value: n,
        onChange: e,
        onKeyPress: s,
        disabled: r
      }
    ),
    /* @__PURE__ */ v.jsx(
      "button",
      {
        onClick: t,
        className: `p-2 ${r ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"} rounded-full transition-colors`,
        disabled: r,
        children: r ? /* @__PURE__ */ v.jsx(Il, { size: 16, className: "text-white animate-spin" }) : /* @__PURE__ */ v.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 text-white", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ v.jsx("path", { d: "M22 2L11 13" }),
          /* @__PURE__ */ v.jsx("path", { d: "M22 2L15 22L11 13L2 9L22 2Z" })
        ] })
      }
    )
  ] });
}, ou = ({
  isListening: n,
  isSpeaking: e,
  voiceVolume: t,
  transcript: r,
  onCircleClick: s,
  isExpanded: o,
  isInputVisible: i,
  userInput: a,
  onUserInputChange: l,
  onSendMessage: u,
  messages: c,
  isLoading: h,
  createTask: d
}) => /* @__PURE__ */ v.jsxs("div", { className: `flex flex-col items-center justify-between ${o ? "h-[80vh]" : "h-[500px]"} transition-all duration-300`, children: [
  /* @__PURE__ */ v.jsx(Pc, { isListening: n, isSpeaking: e }),
  /* @__PURE__ */ v.jsx(
    nu,
    {
      messages: c,
      isLoading: h,
      isExpanded: o
    }
  ),
  /* @__PURE__ */ v.jsx("div", { className: "w-full flex items-center justify-center mb-4 transition-all duration-300", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between w-full px-4 gap-4", children: [
    /* @__PURE__ */ v.jsx("div", { className: "transition-all duration-300", children: /* @__PURE__ */ v.jsx(
      Ac,
      {
        isListening: n,
        isSpeaking: e,
        voiceVolume: t,
        onClick: s
      }
    ) }),
    /* @__PURE__ */ v.jsx(
      su,
      {
        userInput: a,
        onUserInputChange: l,
        onSendMessage: u,
        isLoading: h
      }
    )
  ] }) })
] }), iu = ({
  isExpanded: n,
  toggleFullscreen: e,
  dialogPosition: t,
  isListening: r,
  isSpeaking: s,
  voiceVolume: o,
  transcript: i,
  onCircleClick: a,
  userInput: l,
  onUserInputChange: u,
  onSendMessage: c,
  messages: h,
  isLoading: d,
  createTask: p
}) => {
  const y = _e.useMemo(() => {
    try {
      return window.self !== window.top;
    } catch {
      return !0;
    }
  }, []);
  return /* @__PURE__ */ v.jsxs(
    To,
    {
      className: `sm:max-w-md bg-gradient-to-b from-gray-900 to-gray-800 border-none shadow-2xl animate-fade-in ${n ? "fixed inset-0 max-w-full max-h-full rounded-none" : "rounded-xl"}`,
      style: n ? {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        transform: "none",
        margin: "0",
        borderRadius: "0"
      } : {
        position: "absolute",
        top: `${Math.max(20, t.top)}px`,
        // Keep minimum 20px from top
        left: `${t.left + 3}px`,
        // Keep 3px right shift
        transform: "none",
        minHeight: "500px",
        // Keep the height from previous change
        width: "420px",
        // Keep the width from previous change
        ...y ? { position: "fixed", top: "20px", right: "20px", left: "auto" } : {}
      },
      children: [
        /* @__PURE__ */ v.jsx("div", { className: "absolute right-4 top-4 flex items-center gap-2 z-10", children: /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: e,
            className: "text-gray-300 hover:text-white transition-colors p-2 bg-gray-800/50 rounded-full",
            children: n ? /* @__PURE__ */ v.jsx(Dl, { size: 18 }) : /* @__PURE__ */ v.jsx(Ll, { size: 18 })
          }
        ) }),
        /* @__PURE__ */ v.jsx(
          ou,
          {
            isListening: r,
            isSpeaking: s,
            voiceVolume: o,
            transcript: i,
            onCircleClick: a,
            isExpanded: n,
            isInputVisible: !0,
            userInput: l,
            onUserInputChange: u,
            onSendMessage: c,
            messages: h,
            isLoading: d,
            createTask: p
          }
        )
      ]
    }
  );
}, au = (n) => {
  let e;
  return n ? e = n : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => vt).then(({ default: r }) => r(...t)) : e = fetch, (...t) => e(...t);
};
class kn extends Error {
  constructor(e, t = "FunctionsError", r) {
    super(e), this.name = t, this.context = r;
  }
}
class lu extends kn {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class cu extends kn {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class uu extends kn {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var Qr;
(function(n) {
  n.Any = "any", n.ApNortheast1 = "ap-northeast-1", n.ApNortheast2 = "ap-northeast-2", n.ApSouth1 = "ap-south-1", n.ApSoutheast1 = "ap-southeast-1", n.ApSoutheast2 = "ap-southeast-2", n.CaCentral1 = "ca-central-1", n.EuCentral1 = "eu-central-1", n.EuWest1 = "eu-west-1", n.EuWest2 = "eu-west-2", n.EuWest3 = "eu-west-3", n.SaEast1 = "sa-east-1", n.UsEast1 = "us-east-1", n.UsWest1 = "us-west-1", n.UsWest2 = "us-west-2";
})(Qr || (Qr = {}));
var du = function(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (h) {
        i(h);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        i(h);
      }
    }
    function u(c) {
      c.done ? o(c.value) : s(c.value).then(a, l);
    }
    u((r = r.apply(n, e || [])).next());
  });
};
class hu {
  constructor(e, { headers: t = {}, customFetch: r, region: s = Qr.Any } = {}) {
    this.url = e, this.headers = t, this.region = s, this.fetch = au(r);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(e, t = {}) {
    var r;
    return du(this, void 0, void 0, function* () {
      try {
        const { headers: s, method: o, body: i } = t;
        let a = {}, { region: l } = t;
        l || (l = this.region), l && l !== "any" && (a["x-region"] = l);
        let u;
        i && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) && (typeof Blob < "u" && i instanceof Blob || i instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream", u = i) : typeof i == "string" ? (a["Content-Type"] = "text/plain", u = i) : typeof FormData < "u" && i instanceof FormData ? u = i : (a["Content-Type"] = "application/json", u = JSON.stringify(i)));
        const c = yield this.fetch(`${this.url}/${e}`, {
          method: o || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), s),
          body: u
        }).catch((y) => {
          throw new lu(y);
        }), h = c.headers.get("x-relay-error");
        if (h && h === "true")
          throw new cu(c);
        if (!c.ok)
          throw new uu(c);
        let d = ((r = c.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), p;
        return d === "application/json" ? p = yield c.json() : d === "application/octet-stream" ? p = yield c.blob() : d === "text/event-stream" ? p = c : d === "multipart/form-data" ? p = yield c.formData() : p = yield c.text(), { data: p, error: null };
      } catch (s) {
        return { data: null, error: s };
      }
    });
  }
}
var pe = {}, xn = {}, hr = {}, It = {}, fr = {}, pr = {}, fu = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, gt = fu();
const pu = gt.fetch, Jo = gt.fetch.bind(gt), Ko = gt.Headers, gu = gt.Request, mu = gt.Response, vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: Ko,
  Request: gu,
  Response: mu,
  default: Jo,
  fetch: pu
}, Symbol.toStringTag, { value: "Module" })), vu = /* @__PURE__ */ Xi(vt);
var gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
let bu = class extends Error {
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
};
gr.default = bu;
var Yo = ke && ke.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(pr, "__esModule", { value: !0 });
const yu = Yo(vu), wu = Yo(gr);
let _u = class {
  constructor(e) {
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = yu.default : this.fetch = fetch;
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Set an HTTP header for the request.
   */
  setHeader(e, t) {
    return this.headers = Object.assign({}, this.headers), this.headers[e] = t, this;
  }
  then(e, t) {
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
    const r = this.fetch;
    let s = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (o) => {
      var i, a, l;
      let u = null, c = null, h = null, d = o.status, p = o.statusText;
      if (o.ok) {
        if (this.method !== "HEAD") {
          const S = await o.text();
          S === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? c = S : c = JSON.parse(S));
        }
        const m = (i = this.headers.Prefer) === null || i === void 0 ? void 0 : i.match(/count=(exact|planned|estimated)/), w = (a = o.headers.get("content-range")) === null || a === void 0 ? void 0 : a.split("/");
        m && w && w.length > 1 && (h = parseInt(w[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(c) && (c.length > 1 ? (u = {
          // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
          code: "PGRST116",
          details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, c = null, h = null, d = 406, p = "Not Acceptable") : c.length === 1 ? c = c[0] : c = null);
      } else {
        const m = await o.text();
        try {
          u = JSON.parse(m), Array.isArray(u) && o.status === 404 && (c = [], u = null, d = 200, p = "OK");
        } catch {
          o.status === 404 && m === "" ? (d = 204, p = "No Content") : u = {
            message: m
          };
        }
        if (u && this.isMaybeSingle && (!((l = u == null ? void 0 : u.details) === null || l === void 0) && l.includes("0 rows")) && (u = null, d = 200, p = "OK"), u && this.shouldThrowOnError)
          throw new wu.default(u);
      }
      return {
        error: u,
        data: c,
        count: h,
        status: d,
        statusText: p
      };
    });
    return this.shouldThrowOnError || (s = s.catch((o) => {
      var i, a, l;
      return {
        error: {
          message: `${(i = o == null ? void 0 : o.name) !== null && i !== void 0 ? i : "FetchError"}: ${o == null ? void 0 : o.message}`,
          details: `${(a = o == null ? void 0 : o.stack) !== null && a !== void 0 ? a : ""}`,
          hint: "",
          code: `${(l = o == null ? void 0 : o.code) !== null && l !== void 0 ? l : ""}`
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), s.then(e, t);
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
  /**
   * Override the type of the returned `data` field in the response.
   *
   * @typeParam NewResult - The new type to cast the response data to
   * @typeParam Options - Optional type configuration (defaults to { merge: true })
   * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
   * @example
   * ```typescript
   * // Merge with existing types (default behavior)
   * const query = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ custom_field: string }>()
   *
   * // Replace existing types completely
   * const replaceQuery = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
   * ```
   * @returns A PostgrestBuilder instance with the new type
   */
  overrideTypes() {
    return this;
  }
};
pr.default = _u;
var ku = ke && ke.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(fr, "__esModule", { value: !0 });
const xu = ku(pr);
let Su = class extends xu.default {
  /**
   * Perform a SELECT on the query result.
   *
   * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
   * return modified rows. By calling this method, modified rows are returned in
   * `data`.
   *
   * @param columns - The columns to retrieve, separated by commas
   */
  select(e) {
    let t = !1;
    const r = (e ?? "*").split("").map((s) => /\s/.test(s) && !t ? "" : (s === '"' && (t = !t), s)).join("");
    return this.url.searchParams.set("select", r), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
  }
  /**
   * Order the query result by `column`.
   *
   * You can call this method multiple times to order by multiple columns.
   *
   * You can order referenced tables, but it only affects the ordering of the
   * parent table if you use `!inner` in the query.
   *
   * @param column - The column to order by
   * @param options - Named parameters
   * @param options.ascending - If `true`, the result will be in ascending order
   * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
   * `null`s appear last.
   * @param options.referencedTable - Set this to order a referenced table by
   * its columns
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  order(e, { ascending: t = !0, nullsFirst: r, foreignTable: s, referencedTable: o = s } = {}) {
    const i = o ? `${o}.order` : "order", a = this.url.searchParams.get(i);
    return this.url.searchParams.set(i, `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
   * Limit the query result by `count`.
   *
   * @param count - The maximum number of rows to return
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  limit(e, { foreignTable: t, referencedTable: r = t } = {}) {
    const s = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(s, `${e}`), this;
  }
  /**
   * Limit the query result by starting at an offset `from` and ending at the offset `to`.
   * Only records within this range are returned.
   * This respects the query order and if there is no order clause the range could behave unexpectedly.
   * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
   * and fourth rows of the query.
   *
   * @param from - The starting index from which to limit the result
   * @param to - The last index to which to limit the result
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  range(e, t, { foreignTable: r, referencedTable: s = r } = {}) {
    const o = typeof s > "u" ? "offset" : `${s}.offset`, i = typeof s > "u" ? "limit" : `${s}.limit`;
    return this.url.searchParams.set(o, `${e}`), this.url.searchParams.set(i, `${t - e + 1}`), this;
  }
  /**
   * Set the AbortSignal for the fetch request.
   *
   * @param signal - The AbortSignal to use for the fetch request
   */
  abortSignal(e) {
    return this.signal = e, this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be one row (e.g. using `.limit(1)`), otherwise this
   * returns an error.
   */
  single() {
    return this.headers.Accept = "application/vnd.pgrst.object+json", this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
   * this returns an error.
   */
  maybeSingle() {
    return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
  }
  /**
   * Return `data` as a string in CSV format.
   */
  csv() {
    return this.headers.Accept = "text/csv", this;
  }
  /**
   * Return `data` as an object in [GeoJSON](https://geojson.org) format.
   */
  geojson() {
    return this.headers.Accept = "application/geo+json", this;
  }
  /**
   * Return `data` as the EXPLAIN plan for the query.
   *
   * You need to enable the
   * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
   * setting before using this method.
   *
   * @param options - Named parameters
   *
   * @param options.analyze - If `true`, the query will be executed and the
   * actual run time will be returned
   *
   * @param options.verbose - If `true`, the query identifier will be returned
   * and `data` will include the output columns of the query
   *
   * @param options.settings - If `true`, include information on configuration
   * parameters that affect query planning
   *
   * @param options.buffers - If `true`, include information on buffer usage
   *
   * @param options.wal - If `true`, include information on WAL record generation
   *
   * @param options.format - The format of the output, can be `"text"` (default)
   * or `"json"`
   */
  explain({ analyze: e = !1, verbose: t = !1, settings: r = !1, buffers: s = !1, wal: o = !1, format: i = "text" } = {}) {
    var a;
    const l = [
      e ? "analyze" : null,
      t ? "verbose" : null,
      r ? "settings" : null,
      s ? "buffers" : null,
      o ? "wal" : null
    ].filter(Boolean).join("|"), u = (a = this.headers.Accept) !== null && a !== void 0 ? a : "application/json";
    return this.headers.Accept = `application/vnd.pgrst.plan+${i}; for="${u}"; options=${l};`, i === "json" ? this : this;
  }
  /**
   * Rollback the query.
   *
   * `data` will still be returned, but the query is not committed.
   */
  rollback() {
    var e;
    return ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
};
fr.default = Su;
var Eu = ke && ke.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(It, "__esModule", { value: !0 });
const Cu = Eu(fr);
let Tu = class extends Cu.default {
  /**
   * Match only rows where `column` is equal to `value`.
   *
   * To check if the value of `column` is NULL, you should use `.is()` instead.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  eq(e, t) {
    return this.url.searchParams.append(e, `eq.${t}`), this;
  }
  /**
   * Match only rows where `column` is not equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  neq(e, t) {
    return this.url.searchParams.append(e, `neq.${t}`), this;
  }
  /**
   * Match only rows where `column` is greater than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gt(e, t) {
    return this.url.searchParams.append(e, `gt.${t}`), this;
  }
  /**
   * Match only rows where `column` is greater than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gte(e, t) {
    return this.url.searchParams.append(e, `gte.${t}`), this;
  }
  /**
   * Match only rows where `column` is less than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lt(e, t) {
    return this.url.searchParams.append(e, `lt.${t}`), this;
  }
  /**
   * Match only rows where `column` is less than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lte(e, t) {
    return this.url.searchParams.append(e, `lte.${t}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-sensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  like(e, t) {
    return this.url.searchParams.append(e, `like.${t}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAllOf(e, t) {
    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAnyOf(e, t) {
    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-insensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  ilike(e, t) {
    return this.url.searchParams.append(e, `ilike.${t}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAllOf(e, t) {
    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAnyOf(e, t) {
    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` IS `value`.
   *
   * For non-boolean columns, this is only relevant for checking if the value of
   * `column` is NULL by setting `value` to `null`.
   *
   * For boolean columns, you can also set `value` to `true` or `false` and it
   * will behave the same way as `.eq()`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  is(e, t) {
    return this.url.searchParams.append(e, `is.${t}`), this;
  }
  /**
   * Match only rows where `column` is included in the `values` array.
   *
   * @param column - The column to filter on
   * @param values - The values array to filter with
   */
  in(e, t) {
    const r = Array.from(new Set(t)).map((s) => typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`).join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * `column` contains every element appearing in `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  contains(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * every element appearing in `column` is contained by `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  containedBy(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is greater than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGt(e, t) {
    return this.url.searchParams.append(e, `sr.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or greater than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGte(e, t) {
    return this.url.searchParams.append(e, `nxl.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is less than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLt(e, t) {
    return this.url.searchParams.append(e, `sl.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or less than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLte(e, t) {
    return this.url.searchParams.append(e, `nxr.${t}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where `column` is
   * mutually exclusive to `range` and there can be no element between the two
   * ranges.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeAdjacent(e, t) {
    return this.url.searchParams.append(e, `adj.${t}`), this;
  }
  /**
   * Only relevant for array and range columns. Match only rows where
   * `column` and `value` have an element in common.
   *
   * @param column - The array or range column to filter on
   * @param value - The array or range value to filter with
   */
  overlaps(e, t) {
    return typeof t == "string" ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this;
  }
  /**
   * Only relevant for text and tsvector columns. Match only rows where
   * `column` matches the query string in `query`.
   *
   * @param column - The text or tsvector column to filter on
   * @param query - The query text to match with
   * @param options - Named parameters
   * @param options.config - The text search configuration to use
   * @param options.type - Change how the `query` text is interpreted
   */
  textSearch(e, t, { config: r, type: s } = {}) {
    let o = "";
    s === "plain" ? o = "pl" : s === "phrase" ? o = "ph" : s === "websearch" && (o = "w");
    const i = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${o}fts${i}.${t}`), this;
  }
  /**
   * Match only rows where each column in `query` keys is equal to its
   * associated value. Shorthand for multiple `.eq()`s.
   *
   * @param query - The object to filter with, with column names as keys mapped
   * to their filter values
   */
  match(e) {
    return Object.entries(e).forEach(([t, r]) => {
      this.url.searchParams.append(t, `eq.${r}`);
    }), this;
  }
  /**
   * Match only rows which doesn't satisfy the filter.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to be negated to filter with, following
   * PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  not(e, t, r) {
    return this.url.searchParams.append(e, `not.${t}.${r}`), this;
  }
  /**
   * Match only rows which satisfy at least one of the filters.
   *
   * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure it's properly sanitized.
   *
   * It's currently not possible to do an `.or()` filter across multiple tables.
   *
   * @param filters - The filters to use, following PostgREST syntax
   * @param options - Named parameters
   * @param options.referencedTable - Set this to filter on referenced tables
   * instead of the parent table
   * @param options.foreignTable - Deprecated, use `referencedTable` instead
   */
  or(e, { foreignTable: t, referencedTable: r = t } = {}) {
    const s = r ? `${r}.or` : "or";
    return this.url.searchParams.append(s, `(${e})`), this;
  }
  /**
   * Match only rows which satisfy the filter. This is an escape hatch - you
   * should use the specific filter methods wherever possible.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to filter with, following PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  filter(e, t, r) {
    return this.url.searchParams.append(e, `${t}.${r}`), this;
  }
};
It.default = Tu;
var Ru = ke && ke.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(hr, "__esModule", { value: !0 });
const Ct = Ru(It);
let Au = class {
  constructor(e, { headers: t = {}, schema: r, fetch: s }) {
    this.url = e, this.headers = t, this.schema = r, this.fetch = s;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  select(e, { head: t = !1, count: r } = {}) {
    const s = t ? "HEAD" : "GET";
    let o = !1;
    const i = (e ?? "*").split("").map((a) => /\s/.test(a) && !o ? "" : (a === '"' && (o = !o), a)).join("");
    return this.url.searchParams.set("select", i), r && (this.headers.Prefer = `count=${r}`), new Ct.default({
      method: s,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an INSERT into the table or view.
   *
   * By default, inserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to insert. Pass an object to insert a single row
   * or an array to insert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count inserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. Only applies for bulk
   * inserts.
   */
  insert(e, { count: t, defaultToNull: r = !0 } = {}) {
    const s = "POST", o = [];
    if (this.headers.Prefer && o.push(this.headers.Prefer), t && o.push(`count=${t}`), r || o.push("missing=default"), this.headers.Prefer = o.join(","), Array.isArray(e)) {
      const i = e.reduce((a, l) => a.concat(Object.keys(l)), []);
      if (i.length > 0) {
        const a = [...new Set(i)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", a.join(","));
      }
    }
    return new Ct.default({
      method: s,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   */
  upsert(e, { onConflict: t, ignoreDuplicates: r = !1, count: s, defaultToNull: o = !0 } = {}) {
    const i = "POST", a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
    if (t !== void 0 && this.url.searchParams.set("on_conflict", t), this.headers.Prefer && a.push(this.headers.Prefer), s && a.push(`count=${s}`), o || a.push("missing=default"), this.headers.Prefer = a.join(","), Array.isArray(e)) {
      const l = e.reduce((u, c) => u.concat(Object.keys(c)), []);
      if (l.length > 0) {
        const u = [...new Set(l)].map((c) => `"${c}"`);
        this.url.searchParams.set("columns", u.join(","));
      }
    }
    return new Ct.default({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPDATE on the table or view.
   *
   * By default, updated rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param values - The values to update with
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count updated rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  update(e, { count: t } = {}) {
    const r = "PATCH", s = [];
    return this.headers.Prefer && s.push(this.headers.Prefer), t && s.push(`count=${t}`), this.headers.Prefer = s.join(","), new Ct.default({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform a DELETE on the table or view.
   *
   * By default, deleted rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count deleted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  delete({ count: e } = {}) {
    const t = "DELETE", r = [];
    return e && r.push(`count=${e}`), this.headers.Prefer && r.unshift(this.headers.Prefer), this.headers.Prefer = r.join(","), new Ct.default({
      method: t,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
hr.default = Au;
var mr = {}, vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.version = void 0;
vr.version = "0.0.0-automated";
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.DEFAULT_HEADERS = void 0;
const Pu = vr;
mr.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${Pu.version}` };
var Xo = ke && ke.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(xn, "__esModule", { value: !0 });
const $u = Xo(hr), ju = Xo(It), Ou = mr;
let Iu = class Zo {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(e, { headers: t = {}, schema: r, fetch: s } = {}) {
    this.url = e, this.headers = Object.assign(Object.assign({}, Ou.DEFAULT_HEADERS), t), this.schemaName = r, this.fetch = s;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    const t = new URL(`${this.url}/${e}`);
    return new $u.default(t, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return new Zo(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch
    });
  }
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, t = {}, { head: r = !1, get: s = !1, count: o } = {}) {
    let i;
    const a = new URL(`${this.url}/rpc/${e}`);
    let l;
    r || s ? (i = r ? "HEAD" : "GET", Object.entries(t).filter(([c, h]) => h !== void 0).map(([c, h]) => [c, Array.isArray(h) ? `{${h.join(",")}}` : `${h}`]).forEach(([c, h]) => {
      a.searchParams.append(c, h);
    })) : (i = "POST", l = t);
    const u = Object.assign({}, this.headers);
    return o && (u.Prefer = `count=${o}`), new ju.default({
      method: i,
      url: a,
      headers: u,
      schema: this.schemaName,
      body: l,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
xn.default = Iu;
var bt = ke && ke.__importDefault || function(n) {
  return n && n.__esModule ? n : { default: n };
};
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.PostgrestError = pe.PostgrestBuilder = pe.PostgrestTransformBuilder = pe.PostgrestFilterBuilder = pe.PostgrestQueryBuilder = pe.PostgrestClient = void 0;
const Qo = bt(xn);
pe.PostgrestClient = Qo.default;
const ei = bt(hr);
pe.PostgrestQueryBuilder = ei.default;
const ti = bt(It);
pe.PostgrestFilterBuilder = ti.default;
const ri = bt(fr);
pe.PostgrestTransformBuilder = ri.default;
const ni = bt(pr);
pe.PostgrestBuilder = ni.default;
const si = bt(gr);
pe.PostgrestError = si.default;
var Lu = pe.default = {
  PostgrestClient: Qo.default,
  PostgrestQueryBuilder: ei.default,
  PostgrestFilterBuilder: ti.default,
  PostgrestTransformBuilder: ri.default,
  PostgrestBuilder: ni.default,
  PostgrestError: si.default
};
const {
  PostgrestClient: Du,
  PostgrestQueryBuilder: Jh,
  PostgrestFilterBuilder: Kh,
  PostgrestTransformBuilder: Yh,
  PostgrestBuilder: Xh,
  PostgrestError: Zh
} = Lu, Nu = "2.11.2", Mu = { "X-Client-Info": `realtime-js/${Nu}` }, Uu = "1.0.0", oi = 1e4, Fu = 1e3;
var ft;
(function(n) {
  n[n.connecting = 0] = "connecting", n[n.open = 1] = "open", n[n.closing = 2] = "closing", n[n.closed = 3] = "closed";
})(ft || (ft = {}));
var ve;
(function(n) {
  n.closed = "closed", n.errored = "errored", n.joined = "joined", n.joining = "joining", n.leaving = "leaving";
})(ve || (ve = {}));
var Ee;
(function(n) {
  n.close = "phx_close", n.error = "phx_error", n.join = "phx_join", n.reply = "phx_reply", n.leave = "phx_leave", n.access_token = "access_token";
})(Ee || (Ee = {}));
var en;
(function(n) {
  n.websocket = "websocket";
})(en || (en = {}));
var Ye;
(function(n) {
  n.Connecting = "connecting", n.Open = "open", n.Closing = "closing", n.Closed = "closed";
})(Ye || (Ye = {}));
class zu {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, t) {
    return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const t = new DataView(e), r = new TextDecoder();
    return this._decodeBroadcast(e, t, r);
  }
  _decodeBroadcast(e, t, r) {
    const s = t.getUint8(1), o = t.getUint8(2);
    let i = this.HEADER_LENGTH + 2;
    const a = r.decode(e.slice(i, i + s));
    i = i + s;
    const l = r.decode(e.slice(i, i + o));
    i = i + o;
    const u = JSON.parse(r.decode(e.slice(i, e.byteLength)));
    return { ref: null, topic: a, event: l, payload: u };
  }
}
class ii {
  constructor(e, t) {
    this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var Z;
(function(n) {
  n.abstime = "abstime", n.bool = "bool", n.date = "date", n.daterange = "daterange", n.float4 = "float4", n.float8 = "float8", n.int2 = "int2", n.int4 = "int4", n.int4range = "int4range", n.int8 = "int8", n.int8range = "int8range", n.json = "json", n.jsonb = "jsonb", n.money = "money", n.numeric = "numeric", n.oid = "oid", n.reltime = "reltime", n.text = "text", n.time = "time", n.timestamp = "timestamp", n.timestamptz = "timestamptz", n.timetz = "timetz", n.tsrange = "tsrange", n.tstzrange = "tstzrange";
})(Z || (Z = {}));
const bs = (n, e, t = {}) => {
  var r;
  const s = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
  return Object.keys(e).reduce((o, i) => (o[i] = Bu(i, n, e, s), o), {});
}, Bu = (n, e, t, r) => {
  const s = e.find((a) => a.name === n), o = s == null ? void 0 : s.type, i = t[n];
  return o && !r.includes(o) ? ai(o, i) : tn(i);
}, ai = (n, e) => {
  if (n.charAt(0) === "_") {
    const t = n.slice(1, n.length);
    return Hu(e, t);
  }
  switch (n) {
    case Z.bool:
      return Wu(e);
    case Z.float4:
    case Z.float8:
    case Z.int2:
    case Z.int4:
    case Z.int8:
    case Z.numeric:
    case Z.oid:
      return qu(e);
    case Z.json:
    case Z.jsonb:
      return Vu(e);
    case Z.timestamp:
      return Gu(e);
    case Z.abstime:
    case Z.date:
    case Z.daterange:
    case Z.int4range:
    case Z.int8range:
    case Z.money:
    case Z.reltime:
    case Z.text:
    case Z.time:
    case Z.timestamptz:
    case Z.timetz:
    case Z.tsrange:
    case Z.tstzrange:
      return tn(e);
    default:
      return tn(e);
  }
}, tn = (n) => n, Wu = (n) => {
  switch (n) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return n;
  }
}, qu = (n) => {
  if (typeof n == "string") {
    const e = parseFloat(n);
    if (!Number.isNaN(e))
      return e;
  }
  return n;
}, Vu = (n) => {
  if (typeof n == "string")
    try {
      return JSON.parse(n);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), n;
    }
  return n;
}, Hu = (n, e) => {
  if (typeof n != "string")
    return n;
  const t = n.length - 1, r = n[t];
  if (n[0] === "{" && r === "}") {
    let o;
    const i = n.slice(1, t);
    try {
      o = JSON.parse("[" + i + "]");
    } catch {
      o = i ? i.split(",") : [];
    }
    return o.map((a) => ai(e, a));
  }
  return n;
}, Gu = (n) => typeof n == "string" ? n.replace(" ", "T") : n, li = (n) => {
  let e = n;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "");
};
class Nr {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, t, r = {}, s = oi) {
    this.channel = e, this.event = t, this.payload = r, this.timeout = s, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var r;
    return this._hasReceived(e) && t((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response), this.recHooks.push({ status: e, callback: t }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (t) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = t, this._matchReceive(t);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, t) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var ys;
(function(n) {
  n.SYNC = "sync", n.JOIN = "join", n.LEAVE = "leave";
})(ys || (ys = {}));
class At {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(e, t) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const r = (t == null ? void 0 : t.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(r.state, {}, (s) => {
      const { onJoin: o, onLeave: i, onSync: a } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = At.syncState(this.state, s, o, i), this.pendingDiffs.forEach((l) => {
        this.state = At.syncDiff(this.state, l, o, i);
      }), this.pendingDiffs = [], a();
    }), this.channel._on(r.diff, {}, (s) => {
      const { onJoin: o, onLeave: i, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(s) : (this.state = At.syncDiff(this.state, s, o, i), a());
    }), this.onJoin((s, o, i) => {
      this.channel._trigger("presence", {
        event: "join",
        key: s,
        currentPresences: o,
        newPresences: i
      });
    }), this.onLeave((s, o, i) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: s,
        currentPresences: o,
        leftPresences: i
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, t, r, s) {
    const o = this.cloneDeep(e), i = this.transformState(t), a = {}, l = {};
    return this.map(o, (u, c) => {
      i[u] || (l[u] = c);
    }), this.map(i, (u, c) => {
      const h = o[u];
      if (h) {
        const d = c.map((w) => w.presence_ref), p = h.map((w) => w.presence_ref), y = c.filter((w) => p.indexOf(w.presence_ref) < 0), m = h.filter((w) => d.indexOf(w.presence_ref) < 0);
        y.length > 0 && (a[u] = y), m.length > 0 && (l[u] = m);
      } else
        a[u] = c;
    }), this.syncDiff(o, { joins: a, leaves: l }, r, s);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, t, r, s) {
    const { joins: o, leaves: i } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves)
    };
    return r || (r = () => {
    }), s || (s = () => {
    }), this.map(o, (a, l) => {
      var u;
      const c = (u = e[a]) !== null && u !== void 0 ? u : [];
      if (e[a] = this.cloneDeep(l), c.length > 0) {
        const h = e[a].map((p) => p.presence_ref), d = c.filter((p) => h.indexOf(p.presence_ref) < 0);
        e[a].unshift(...d);
      }
      r(a, c, l);
    }), this.map(i, (a, l) => {
      let u = e[a];
      if (!u)
        return;
      const c = l.map((h) => h.presence_ref);
      u = u.filter((h) => c.indexOf(h.presence_ref) < 0), e[a] = u, s(a, u, l), u.length === 0 && delete e[a];
    }), e;
  }
  /** @internal */
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((t, r) => {
      const s = e[r];
      return "metas" in s ? t[r] = s.metas.map((o) => (o.presence_ref = o.phx_ref, delete o.phx_ref, delete o.phx_ref_prev, o)) : t[r] = s, t;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var ws;
(function(n) {
  n.ALL = "*", n.INSERT = "INSERT", n.UPDATE = "UPDATE", n.DELETE = "DELETE";
})(ws || (ws = {}));
var _s;
(function(n) {
  n.BROADCAST = "broadcast", n.PRESENCE = "presence", n.POSTGRES_CHANGES = "postgres_changes", n.SYSTEM = "system";
})(_s || (_s = {}));
var Le;
(function(n) {
  n.SUBSCRIBED = "SUBSCRIBED", n.TIMED_OUT = "TIMED_OUT", n.CLOSED = "CLOSED", n.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Le || (Le = {}));
class Sn {
  constructor(e, t = { config: {} }, r) {
    this.topic = e, this.params = t, this.socket = r, this.bindings = {}, this.state = ve.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new Nr(this, Ee.join, this.params, this.timeout), this.rejoinTimer = new ii(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = ve.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((s) => s.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = ve.closed, this.socket._remove(this);
    }), this._onError((s) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s), this.state = ve.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = ve.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Ee.reply, {}, (s, o) => {
      this._trigger(this._replyEventName(o), s);
    }), this.presence = new At(this), this.broadcastEndpointURL = li(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, t = this.timeout) {
    var r, s;
    if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const { config: { broadcast: o, presence: i, private: a } } = this.params;
      this._onError((c) => e == null ? void 0 : e(Le.CHANNEL_ERROR, c)), this._onClose(() => e == null ? void 0 : e(Le.CLOSED));
      const l = {}, u = {
        broadcast: o,
        presence: i,
        postgres_changes: (s = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((c) => c.filter)) !== null && s !== void 0 ? s : [],
        private: a
      };
      this.socket.accessTokenValue && (l.access_token = this.socket.accessTokenValue), this.updateJoinPayload(Object.assign({ config: u }, l)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", async ({ postgres_changes: c }) => {
        var h;
        if (this.socket.setAuth(), c === void 0) {
          e == null || e(Le.SUBSCRIBED);
          return;
        } else {
          const d = this.bindings.postgres_changes, p = (h = d == null ? void 0 : d.length) !== null && h !== void 0 ? h : 0, y = [];
          for (let m = 0; m < p; m++) {
            const w = d[m], { filter: { event: S, schema: b, table: k, filter: x } } = w, C = c && c[m];
            if (C && C.event === S && C.schema === b && C.table === k && C.filter === x)
              y.push(Object.assign(Object.assign({}, w), { id: C.id }));
            else {
              this.unsubscribe(), e == null || e(Le.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = y, e && e(Le.SUBSCRIBED);
          return;
        }
      }).receive("error", (c) => {
        e == null || e(Le.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(c).join(", ") || "error")));
      }).receive("timeout", () => {
        e == null || e(Le.TIMED_OUT);
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, t = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, t.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, t, r) {
    return this._on(e, t, r);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, t = {}) {
    var r, s;
    if (!this._canPush() && e.type === "broadcast") {
      const { event: o, payload: i } = e, l = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: o,
              payload: i,
              private: this.private
            }
          ]
        })
      };
      try {
        const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = t.timeout) !== null && r !== void 0 ? r : this.timeout);
        return await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()), u.ok ? "ok" : "error";
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((o) => {
        var i, a, l;
        const u = this._push(e.type, e, t.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (a = (i = this.params) === null || i === void 0 ? void 0 : i.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && o("ok"), u.receive("ok", () => o("ok")), u.receive("error", () => o("error")), u.receive("timeout", () => o("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = ve.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Ee.close, "leave", this._joinRef());
    };
    return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((r) => {
      const s = new Nr(this, Ee.leave, {}, e);
      s.receive("ok", () => {
        t(), r("ok");
      }).receive("timeout", () => {
        t(), r("timed out");
      }).receive("error", () => {
        r("error");
      }), s.send(), this._canPush() || s.trigger("ok", {});
    });
  }
  /** @internal */
  async _fetchWithTimeout(e, t, r) {
    const s = new AbortController(), o = setTimeout(() => s.abort(), r), i = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: s.signal }));
    return clearTimeout(o), i;
  }
  /** @internal */
  _push(e, t, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let s = new Nr(this, e, t, r);
    return this._canPush() ? s.send() : (s.startTimeout(), this.pushBuffer.push(s)), s;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, t, r) {
    return t;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, t, r) {
    var s, o;
    const i = e.toLocaleLowerCase(), { close: a, error: l, leave: u, join: c } = Ee;
    if (r && [a, l, u, c].indexOf(i) >= 0 && r !== this._joinRef())
      return;
    let d = this._onMessage(i, t, r);
    if (t && !d)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(i) ? (s = this.bindings.postgres_changes) === null || s === void 0 || s.filter((p) => {
      var y, m, w;
      return ((y = p.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((w = (m = p.filter) === null || m === void 0 ? void 0 : m.event) === null || w === void 0 ? void 0 : w.toLocaleLowerCase()) === i;
    }).map((p) => p.callback(d, r)) : (o = this.bindings[i]) === null || o === void 0 || o.filter((p) => {
      var y, m, w, S, b, k;
      if (["broadcast", "presence", "postgres_changes"].includes(i))
        if ("id" in p) {
          const x = p.id, C = (y = p.filter) === null || y === void 0 ? void 0 : y.event;
          return x && ((m = t.ids) === null || m === void 0 ? void 0 : m.includes(x)) && (C === "*" || (C == null ? void 0 : C.toLocaleLowerCase()) === ((w = t.data) === null || w === void 0 ? void 0 : w.type.toLocaleLowerCase()));
        } else {
          const x = (b = (S = p == null ? void 0 : p.filter) === null || S === void 0 ? void 0 : S.event) === null || b === void 0 ? void 0 : b.toLocaleLowerCase();
          return x === "*" || x === ((k = t == null ? void 0 : t.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase());
        }
      else
        return p.type.toLocaleLowerCase() === i;
    }).map((p) => {
      if (typeof d == "object" && "ids" in d) {
        const y = d.data, { schema: m, table: w, commit_timestamp: S, type: b, errors: k } = y;
        d = Object.assign(Object.assign({}, {
          schema: m,
          table: w,
          commit_timestamp: S,
          eventType: b,
          new: {},
          old: {},
          errors: k
        }), this._getPayloadRecords(y));
      }
      p.callback(d, r);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === ve.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === ve.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === ve.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === ve.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, t, r) {
    const s = e.toLocaleLowerCase(), o = {
      type: s,
      filter: t,
      callback: r
    };
    return this.bindings[s] ? this.bindings[s].push(o) : this.bindings[s] = [o], this;
  }
  /** @internal */
  _off(e, t) {
    const r = e.toLocaleLowerCase();
    return this.bindings[r] = this.bindings[r].filter((s) => {
      var o;
      return !(((o = s.type) === null || o === void 0 ? void 0 : o.toLocaleLowerCase()) === r && Sn.isEqual(s.filter, t));
    }), this;
  }
  /** @internal */
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const r in e)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on(Ee.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(Ee.error, {}, (t) => e(t));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = ve.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = bs(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = bs(e.columns, e.old_record)), t;
  }
}
const Ju = () => {
}, Ku = typeof WebSocket < "u", Yu = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Xu {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket.
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers The optional headers to pass when connecting.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(e, t) {
    var r;
    this.accessTokenValue = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = Mu, this.params = {}, this.timeout = oi, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = Ju, this.conn = null, this.sendBuffer = [], this.serializer = new zu(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._resolveFetch = (o) => {
      let i;
      return o ? i = o : typeof fetch > "u" ? i = (...a) => Promise.resolve().then(() => vt).then(({ default: l }) => l(...a)) : i = fetch, (...a) => i(...a);
    }, this.endPoint = `${e}/${en.websocket}`, this.httpEndpoint = li(e), t != null && t.transport ? this.transport = t.transport : this.transport = null, t != null && t.params && (this.params = t.params), t != null && t.headers && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), t != null && t.timeout && (this.timeout = t.timeout), t != null && t.logger && (this.logger = t.logger), t != null && t.heartbeatIntervalMs && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
    const s = (r = t == null ? void 0 : t.params) === null || r === void 0 ? void 0 : r.apikey;
    if (s && (this.accessTokenValue = s, this.apiKey = s), this.reconnectAfterMs = t != null && t.reconnectAfterMs ? t.reconnectAfterMs : (o) => [1e3, 2e3, 5e3, 1e4][o - 1] || 1e4, this.encode = t != null && t.encode ? t.encode : (o, i) => i(JSON.stringify(o)), this.decode = t != null && t.decode ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new ii(async () => {
      this.disconnect(), this.connect();
    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(t == null ? void 0 : t.fetch), t != null && t.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.worker = (t == null ? void 0 : t.worker) || !1, this.workerUrl = t == null ? void 0 : t.workerUrl;
    }
    this.accessToken = (t == null ? void 0 : t.accessToken) || null;
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this.endpointURL(), void 0, {
          headers: this.headers
        });
        return;
      }
      if (Ku) {
        this.conn = new WebSocket(this.endpointURL()), this.setupConnection();
        return;
      }
      this.conn = new Zu(this.endpointURL(), void 0, {
        close: () => {
          this.conn = null;
        }
      }), import("./browser-mKPfX-ay.js").then((e) => e.b).then(({ default: e }) => {
        this.conn = new e(this.endpointURL(), void 0, {
          headers: this.headers
        }), this.setupConnection();
      });
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: Uu }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, t) {
    this.conn && (this.conn.onclose = function() {
    }, e ? this.conn.close(e, t ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset());
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const t = await e.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), t;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
    return this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, t, r) {
    this.logger(e, t, r);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case ft.connecting:
        return Ye.Connecting;
      case ft.open:
        return Ye.Open;
      case ft.closing:
        return Ye.Closing;
      default:
        return Ye.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Ye.Open;
  }
  channel(e, t = { config: {} }) {
    const r = new Sn(`realtime:${e}`, t, this);
    return this.channels.push(r), r;
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: t, event: r, payload: s, ref: o } = e, i = () => {
      this.encode(e, (a) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(a);
      });
    };
    this.log("push", `${t} ${r} (${o})`, s), this.isConnected() ? i() : this.sendBuffer.push(i);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(e = null) {
    let t = e || this.accessToken && await this.accessToken() || this.accessTokenValue;
    if (t) {
      let r = null;
      try {
        r = JSON.parse(atob(t.split(".")[1]));
      } catch {
      }
      if (r && r.exp && !(Math.floor(Date.now() / 1e3) - r.exp < 0))
        return this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`), Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`);
      this.accessTokenValue = t, this.channels.forEach((s) => {
        t && s.updateJoinPayload({ access_token: t }), s.joinedOnce && s._isJoined() && s._push(Ee.access_token, {
          access_token: t
        });
      });
    }
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var e;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (e = this.conn) === null || e === void 0 || e.close(Fu, "hearbeat timeout");
        return;
      }
      this.pendingHeartbeatRef = this._makeRef(), this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      }), this.setAuth();
    }
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let t = this.channels.find((r) => r.topic === e && (r._isJoined() || r._isJoining()));
    t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((t) => t._joinRef() !== e._joinRef());
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      let { topic: r, event: s, payload: o, ref: i } = t;
      i && i === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${o.status || ""} ${r} ${s} ${i && "(" + i + ")" || ""}`, o), this.channels.filter((a) => a._isMember(r)).forEach((a) => a._trigger(s, o, i)), this.stateChangeCallbacks.message.forEach((a) => a(t));
    });
  }
  /** @internal */
  async _onConnOpen() {
    if (this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this.reconnectTimer.reset(), !this.worker)
      this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    else {
      this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
      const e = this._workerObjectUrl(this.workerUrl);
      this.workerRef = new Worker(e), this.workerRef.onerror = (t) => {
        this.log("worker", "worker error", t.message), this.workerRef.terminate();
      }, this.workerRef.onmessage = (t) => {
        t.data.event === "keepAlive" && this.sendHeartbeat();
      }, this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs
      });
    }
    this.stateChangeCallbacks.open.forEach((e) => e());
  }
  /** @internal */
  _onConnClose(e) {
    this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t) => t(e));
  }
  /** @internal */
  _onConnError(e) {
    this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t) => t(e));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(Ee.error));
  }
  /** @internal */
  _appendParams(e, t) {
    if (Object.keys(t).length === 0)
      return e;
    const r = e.match(/\?/) ? "&" : "?", s = new URLSearchParams(t);
    return `${e}${r}${s}`;
  }
  _workerObjectUrl(e) {
    let t;
    if (e)
      t = e;
    else {
      const r = new Blob([Yu], { type: "application/javascript" });
      t = URL.createObjectURL(r);
    }
    return t;
  }
}
class Zu {
  constructor(e, t, r) {
    this.binaryType = "arraybuffer", this.onclose = () => {
    }, this.onerror = () => {
    }, this.onmessage = () => {
    }, this.onopen = () => {
    }, this.readyState = ft.connecting, this.send = () => {
    }, this.url = null, this.url = e, this.close = r.close;
  }
}
class En extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function oe(n) {
  return typeof n == "object" && n !== null && "__isStorageError" in n;
}
class Qu extends En {
  constructor(e, t) {
    super(e), this.name = "StorageApiError", this.status = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
}
class rn extends En {
  constructor(e, t) {
    super(e), this.name = "StorageUnknownError", this.originalError = t;
  }
}
var ed = function(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (h) {
        i(h);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        i(h);
      }
    }
    function u(c) {
      c.done ? o(c.value) : s(c.value).then(a, l);
    }
    u((r = r.apply(n, e || [])).next());
  });
};
const ci = (n) => {
  let e;
  return n ? e = n : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => vt).then(({ default: r }) => r(...t)) : e = fetch, (...t) => e(...t);
}, td = () => ed(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => vt)).Response : Response;
}), nn = (n) => {
  if (Array.isArray(n))
    return n.map((t) => nn(t));
  if (typeof n == "function" || n !== Object(n))
    return n;
  const e = {};
  return Object.entries(n).forEach(([t, r]) => {
    const s = t.replace(/([-_][a-z])/gi, (o) => o.toUpperCase().replace(/[-_]/g, ""));
    e[s] = nn(r);
  }), e;
};
var tt = function(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (h) {
        i(h);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        i(h);
      }
    }
    function u(c) {
      c.done ? o(c.value) : s(c.value).then(a, l);
    }
    u((r = r.apply(n, e || [])).next());
  });
};
const Mr = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n), rd = (n, e, t) => tt(void 0, void 0, void 0, function* () {
  const r = yield td();
  n instanceof r && !(t != null && t.noResolveJson) ? n.json().then((s) => {
    e(new Qu(Mr(s), n.status || 500));
  }).catch((s) => {
    e(new rn(Mr(s), s));
  }) : e(new rn(Mr(n), n));
}), nd = (n, e, t, r) => {
  const s = { method: n, headers: (e == null ? void 0 : e.headers) || {} };
  return n === "GET" ? s : (s.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), r && (s.body = JSON.stringify(r)), Object.assign(Object.assign({}, s), t));
};
function Lt(n, e, t, r, s, o) {
  return tt(this, void 0, void 0, function* () {
    return new Promise((i, a) => {
      n(t, nd(e, r, s, o)).then((l) => {
        if (!l.ok)
          throw l;
        return r != null && r.noResolveJson ? l : l.json();
      }).then((l) => i(l)).catch((l) => rd(l, a, r));
    });
  });
}
function ir(n, e, t, r) {
  return tt(this, void 0, void 0, function* () {
    return Lt(n, "GET", e, t, r);
  });
}
function ze(n, e, t, r, s) {
  return tt(this, void 0, void 0, function* () {
    return Lt(n, "POST", e, r, s, t);
  });
}
function sd(n, e, t, r, s) {
  return tt(this, void 0, void 0, function* () {
    return Lt(n, "PUT", e, r, s, t);
  });
}
function od(n, e, t, r) {
  return tt(this, void 0, void 0, function* () {
    return Lt(n, "HEAD", e, Object.assign(Object.assign({}, t), { noResolveJson: !0 }), r);
  });
}
function ui(n, e, t, r, s) {
  return tt(this, void 0, void 0, function* () {
    return Lt(n, "DELETE", e, r, s, t);
  });
}
var fe = function(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (h) {
        i(h);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        i(h);
      }
    }
    function u(c) {
      c.done ? o(c.value) : s(c.value).then(a, l);
    }
    u((r = r.apply(n, e || [])).next());
  });
};
const id = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, ks = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class ad {
  constructor(e, t = {}, r, s) {
    this.url = e, this.headers = t, this.bucketId = r, this.fetch = ci(s);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, t, r, s) {
    return fe(this, void 0, void 0, function* () {
      try {
        let o;
        const i = Object.assign(Object.assign({}, ks), s);
        let a = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(i.upsert) });
        const l = i.metadata;
        typeof Blob < "u" && r instanceof Blob ? (o = new FormData(), o.append("cacheControl", i.cacheControl), l && o.append("metadata", this.encodeMetadata(l)), o.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (o = r, o.append("cacheControl", i.cacheControl), l && o.append("metadata", this.encodeMetadata(l))) : (o = r, a["cache-control"] = `max-age=${i.cacheControl}`, a["content-type"] = i.contentType, l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))), s != null && s.headers && (a = Object.assign(Object.assign({}, a), s.headers));
        const u = this._removeEmptyFolders(t), c = this._getFinalPath(u), h = yield this.fetch(`${this.url}/object/${c}`, Object.assign({ method: e, body: o, headers: a }, i != null && i.duplex ? { duplex: i.duplex } : {})), d = yield h.json();
        return h.ok ? {
          data: { path: u, id: d.Id, fullPath: d.Key },
          error: null
        } : { data: null, error: d };
      } catch (o) {
        if (oe(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(e, t, r) {
    return fe(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, t, r);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(e, t, r, s) {
    return fe(this, void 0, void 0, function* () {
      const o = this._removeEmptyFolders(e), i = this._getFinalPath(o), a = new URL(this.url + `/object/upload/sign/${i}`);
      a.searchParams.set("token", t);
      try {
        let l;
        const u = Object.assign({ upsert: ks.upsert }, s), c = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(u.upsert) });
        typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", u.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", u.cacheControl)) : (l = r, c["cache-control"] = `max-age=${u.cacheControl}`, c["content-type"] = u.contentType);
        const h = yield this.fetch(a.toString(), {
          method: "PUT",
          body: l,
          headers: c
        }), d = yield h.json();
        return h.ok ? {
          data: { path: o, fullPath: d.Key },
          error: null
        } : { data: null, error: d };
      } catch (l) {
        if (oe(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(e, t) {
    return fe(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e);
        const s = Object.assign({}, this.headers);
        t != null && t.upsert && (s["x-upsert"] = "true");
        const o = yield ze(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, { headers: s }), i = new URL(this.url + o.url), a = i.searchParams.get("token");
        if (!a)
          throw new En("No token returned by API");
        return { data: { signedUrl: i.toString(), path: e, token: a }, error: null };
      } catch (r) {
        if (oe(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(e, t, r) {
    return fe(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, t, r);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(e, t, r) {
    return fe(this, void 0, void 0, function* () {
      try {
        return { data: yield ze(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (s) {
        if (oe(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(e, t, r) {
    return fe(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield ze(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (s) {
        if (oe(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(e, t, r) {
    return fe(this, void 0, void 0, function* () {
      try {
        let s = this._getFinalPath(e), o = yield ze(this.fetch, `${this.url}/object/sign/${s}`, Object.assign({ expiresIn: t }, r != null && r.transform ? { transform: r.transform } : {}), { headers: this.headers });
        const i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return o = { signedUrl: encodeURI(`${this.url}${o.signedURL}${i}`) }, { data: o, error: null };
      } catch (s) {
        if (oe(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(e, t, r) {
    return fe(this, void 0, void 0, function* () {
      try {
        const s = yield ze(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t, paths: e }, { headers: this.headers }), o = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return {
          data: s.map((i) => Object.assign(Object.assign({}, i), { signedUrl: i.signedURL ? encodeURI(`${this.url}${i.signedURL}${o}`) : null })),
          error: null
        };
      } catch (s) {
        if (oe(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(e, t) {
    return fe(this, void 0, void 0, function* () {
      const s = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image/authenticated" : "object", o = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {}), i = o ? `?${o}` : "";
      try {
        const a = this._getFinalPath(e);
        return { data: yield (yield ir(this.fetch, `${this.url}/${s}/${a}${i}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (a) {
        if (oe(a))
          return { data: null, error: a };
        throw a;
      }
    });
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(e) {
    return fe(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        const r = yield ir(this.fetch, `${this.url}/object/info/${t}`, {
          headers: this.headers
        });
        return { data: nn(r), error: null };
      } catch (r) {
        if (oe(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(e) {
    return fe(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        return yield od(this.fetch, `${this.url}/object/${t}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (r) {
        if (oe(r) && r instanceof rn) {
          const s = r.originalError;
          if ([400, 404].includes(s == null ? void 0 : s.status))
            return { data: !1, error: r };
        }
        throw r;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e), s = [], o = t != null && t.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    o !== "" && s.push(o);
    const a = typeof (t == null ? void 0 : t.transform) < "u" ? "render/image" : "object", l = this.transformOptsToQueryString((t == null ? void 0 : t.transform) || {});
    l !== "" && s.push(l);
    let u = s.join("&");
    return u !== "" && (u = `?${u}`), {
      data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${u}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return fe(this, void 0, void 0, function* () {
      try {
        return { data: yield ui(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (oe(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(e, t, r) {
    return fe(this, void 0, void 0, function* () {
      try {
        const s = Object.assign(Object.assign(Object.assign({}, id), t), { prefix: e || "" });
        return { data: yield ze(this.fetch, `${this.url}/object/list/${this.bucketId}`, s, { headers: this.headers }, r), error: null };
      } catch (s) {
        if (oe(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
  }
}
const ld = "2.7.1", cd = { "X-Client-Info": `storage-js/${ld}` };
var at = function(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (h) {
        i(h);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        i(h);
      }
    }
    function u(c) {
      c.done ? o(c.value) : s(c.value).then(a, l);
    }
    u((r = r.apply(n, e || [])).next());
  });
};
class ud {
  constructor(e, t = {}, r) {
    this.url = e, this.headers = Object.assign(Object.assign({}, cd), t), this.fetch = ci(r);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return at(this, void 0, void 0, function* () {
      try {
        return { data: yield ir(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (oe(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(e) {
    return at(this, void 0, void 0, function* () {
      try {
        return { data: yield ir(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (t) {
        if (oe(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(e, t = {
    public: !1
  }) {
    return at(this, void 0, void 0, function* () {
      try {
        return { data: yield ze(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (oe(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(e, t) {
    return at(this, void 0, void 0, function* () {
      try {
        return { data: yield sd(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (oe(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(e) {
    return at(this, void 0, void 0, function* () {
      try {
        return { data: yield ze(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (oe(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(e) {
    return at(this, void 0, void 0, function* () {
      try {
        return { data: yield ui(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (oe(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class dd extends ud {
  constructor(e, t = {}, r) {
    super(e, t, r);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new ad(this.url, this.headers, e, this.fetch);
  }
}
const hd = "2.49.4";
let Tt = "";
typeof Deno < "u" ? Tt = "deno" : typeof document < "u" ? Tt = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Tt = "react-native" : Tt = "node";
const fd = { "X-Client-Info": `supabase-js-${Tt}/${hd}` }, pd = {
  headers: fd
}, gd = {
  schema: "public"
}, md = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, vd = {};
var bd = function(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (h) {
        i(h);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        i(h);
      }
    }
    function u(c) {
      c.done ? o(c.value) : s(c.value).then(a, l);
    }
    u((r = r.apply(n, e || [])).next());
  });
};
const yd = (n) => {
  let e;
  return n ? e = n : typeof fetch > "u" ? e = Jo : e = fetch, (...t) => e(...t);
}, wd = () => typeof Headers > "u" ? Ko : Headers, _d = (n, e, t) => {
  const r = yd(t), s = wd();
  return (o, i) => bd(void 0, void 0, void 0, function* () {
    var a;
    const l = (a = yield e()) !== null && a !== void 0 ? a : n;
    let u = new s(i == null ? void 0 : i.headers);
    return u.has("apikey") || u.set("apikey", n), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), r(o, Object.assign(Object.assign({}, i), { headers: u }));
  });
};
var kd = function(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (h) {
        i(h);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        i(h);
      }
    }
    function u(c) {
      c.done ? o(c.value) : s(c.value).then(a, l);
    }
    u((r = r.apply(n, e || [])).next());
  });
};
function xd(n) {
  return n.replace(/\/$/, "");
}
function Sd(n, e) {
  const { db: t, auth: r, realtime: s, global: o } = n, { db: i, auth: a, realtime: l, global: u } = e, c = {
    db: Object.assign(Object.assign({}, i), t),
    auth: Object.assign(Object.assign({}, a), r),
    realtime: Object.assign(Object.assign({}, l), s),
    global: Object.assign(Object.assign({}, u), o),
    accessToken: () => kd(this, void 0, void 0, function* () {
      return "";
    })
  };
  return n.accessToken ? c.accessToken = n.accessToken : delete c.accessToken, c;
}
const di = "2.69.1", ut = 30 * 1e3, sn = 3, Ur = sn * ut, Ed = "http://localhost:9999", Cd = "supabase.auth.token", Td = { "X-Client-Info": `gotrue-js/${di}` }, on = "X-Supabase-Api-Version", hi = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Rd = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Ad = 6e5;
class Cn extends Error {
  constructor(e, t, r) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = r;
  }
}
function U(n) {
  return typeof n == "object" && n !== null && "__isAuthError" in n;
}
class Pd extends Cn {
  constructor(e, t, r) {
    super(e, t, r), this.name = "AuthApiError", this.status = t, this.code = r;
  }
}
function $d(n) {
  return U(n) && n.name === "AuthApiError";
}
class fi extends Cn {
  constructor(e, t) {
    super(e), this.name = "AuthUnknownError", this.originalError = t;
  }
}
class He extends Cn {
  constructor(e, t, r, s) {
    super(e, r, s), this.name = t, this.status = r;
  }
}
class Ue extends He {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function jd(n) {
  return U(n) && n.name === "AuthSessionMissingError";
}
class Fr extends He {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class Jt extends He {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Kt extends He {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function Od(n) {
  return U(n) && n.name === "AuthImplicitGrantRedirectError";
}
class xs extends He {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class an extends He {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
}
function zr(n) {
  return U(n) && n.name === "AuthRetryableFetchError";
}
class Ss extends He {
  constructor(e, t, r) {
    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = r;
  }
}
class Pt extends He {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Es = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Cs = ` 	
\r=`.split(""), Id = (() => {
  const n = new Array(128);
  for (let e = 0; e < n.length; e += 1)
    n[e] = -1;
  for (let e = 0; e < Cs.length; e += 1)
    n[Cs[e].charCodeAt(0)] = -2;
  for (let e = 0; e < Es.length; e += 1)
    n[Es[e].charCodeAt(0)] = e;
  return n;
})();
function pi(n, e, t) {
  const r = Id[n];
  if (r > -1)
    for (e.queue = e.queue << 6 | r, e.queuedBits += 6; e.queuedBits >= 8; )
      t(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (r === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`);
  }
}
function Ts(n) {
  const e = [], t = (i) => {
    e.push(String.fromCodePoint(i));
  }, r = {
    utf8seq: 0,
    codepoint: 0
  }, s = { queue: 0, queuedBits: 0 }, o = (i) => {
    Nd(i, r, t);
  };
  for (let i = 0; i < n.length; i += 1)
    pi(n.charCodeAt(i), s, o);
  return e.join("");
}
function Ld(n, e) {
  if (n <= 127) {
    e(n);
    return;
  } else if (n <= 2047) {
    e(192 | n >> 6), e(128 | n & 63);
    return;
  } else if (n <= 65535) {
    e(224 | n >> 12), e(128 | n >> 6 & 63), e(128 | n & 63);
    return;
  } else if (n <= 1114111) {
    e(240 | n >> 18), e(128 | n >> 12 & 63), e(128 | n >> 6 & 63), e(128 | n & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`);
}
function Dd(n, e) {
  for (let t = 0; t < n.length; t += 1) {
    let r = n.charCodeAt(t);
    if (r > 55295 && r <= 56319) {
      const s = (r - 55296) * 1024 & 65535;
      r = (n.charCodeAt(t + 1) - 56320 & 65535 | s) + 65536, t += 1;
    }
    Ld(r, e);
  }
}
function Nd(n, e, t) {
  if (e.utf8seq === 0) {
    if (n <= 127) {
      t(n);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (!(n >> 7 - r & 1)) {
        e.utf8seq = r;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = n & 31;
    else if (e.utf8seq === 3)
      e.codepoint = n & 15;
    else if (e.utf8seq === 4)
      e.codepoint = n & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (n <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | n & 63, e.utf8seq -= 1, e.utf8seq === 0 && t(e.codepoint);
  }
}
function Md(n) {
  const e = [], t = { queue: 0, queuedBits: 0 }, r = (s) => {
    e.push(s);
  };
  for (let s = 0; s < n.length; s += 1)
    pi(n.charCodeAt(s), t, r);
  return new Uint8Array(e);
}
function Ud(n) {
  const e = [];
  return Dd(n, (t) => e.push(t)), new Uint8Array(e);
}
function Fd(n) {
  return Math.round(Date.now() / 1e3) + n;
}
function zd() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const e = Math.random() * 16 | 0;
    return (n == "x" ? e : e & 3 | 8).toString(16);
  });
}
const Ae = () => typeof window < "u" && typeof document < "u", Je = {
  tested: !1,
  writable: !1
}, $t = () => {
  if (!Ae())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Je.tested)
    return Je.writable;
  const n = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(n, n), globalThis.localStorage.removeItem(n), Je.tested = !0, Je.writable = !0;
  } catch {
    Je.tested = !0, Je.writable = !1;
  }
  return Je.writable;
};
function Bd(n) {
  const e = {}, t = new URL(n);
  if (t.hash && t.hash[0] === "#")
    try {
      new URLSearchParams(t.hash.substring(1)).forEach((s, o) => {
        e[o] = s;
      });
    } catch {
    }
  return t.searchParams.forEach((r, s) => {
    e[s] = r;
  }), e;
}
const gi = (n) => {
  let e;
  return n ? e = n : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => vt).then(({ default: r }) => r(...t)) : e = fetch, (...t) => e(...t);
}, Wd = (n) => typeof n == "object" && n !== null && "status" in n && "ok" in n && "json" in n && typeof n.json == "function", mi = async (n, e, t) => {
  await n.setItem(e, JSON.stringify(t));
}, Yt = async (n, e) => {
  const t = await n.getItem(e);
  if (!t)
    return null;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}, Xt = async (n, e) => {
  await n.removeItem(e);
};
class br {
  constructor() {
    this.promise = new br.promiseConstructor((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
br.promiseConstructor = Promise;
function Br(n) {
  const e = n.split(".");
  if (e.length !== 3)
    throw new Pt("Invalid JWT structure");
  for (let r = 0; r < e.length; r++)
    if (!Rd.test(e[r]))
      throw new Pt("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Ts(e[0])),
    payload: JSON.parse(Ts(e[1])),
    signature: Md(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function qd(n) {
  return await new Promise((e) => {
    setTimeout(() => e(null), n);
  });
}
function Vd(n, e) {
  return new Promise((r, s) => {
    (async () => {
      for (let o = 0; o < 1 / 0; o++)
        try {
          const i = await n(o);
          if (!e(o, null, i)) {
            r(i);
            return;
          }
        } catch (i) {
          if (!e(o, i)) {
            s(i);
            return;
          }
        }
    })();
  });
}
function Hd(n) {
  return ("0" + n.toString(16)).substr(-2);
}
function Gd() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = t.length;
    let s = "";
    for (let o = 0; o < 56; o++)
      s += t.charAt(Math.floor(Math.random() * r));
    return s;
  }
  return crypto.getRandomValues(e), Array.from(e, Hd).join("");
}
async function Jd(n) {
  const t = new TextEncoder().encode(n), r = await crypto.subtle.digest("SHA-256", t), s = new Uint8Array(r);
  return Array.from(s).map((o) => String.fromCharCode(o)).join("");
}
async function Kd(n) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), n;
  const t = await Jd(n);
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function lt(n, e, t = !1) {
  const r = Gd();
  let s = r;
  t && (s += "/PASSWORD_RECOVERY"), await mi(n, `${e}-code-verifier`, s);
  const o = await Kd(r);
  return [o, r === o ? "plain" : "s256"];
}
const Yd = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Xd(n) {
  const e = n.headers.get(on);
  if (!e || !e.match(Yd))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Zd(n) {
  if (!n)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (n <= e)
    throw new Error("JWT has expired");
}
function Qd(n) {
  switch (n) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
var eh = function(n, e) {
  var t = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(n); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[s]) && (t[r[s]] = n[r[s]]);
  return t;
};
const Ke = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n), th = [502, 503, 504];
async function Rs(n) {
  var e;
  if (!Wd(n))
    throw new an(Ke(n), 0);
  if (th.includes(n.status))
    throw new an(Ke(n), n.status);
  let t;
  try {
    t = await n.json();
  } catch (o) {
    throw new fi(Ke(o), o);
  }
  let r;
  const s = Xd(n);
  if (s && s.getTime() >= hi["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? r = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (r = t.error_code), r) {
    if (r === "weak_password")
      throw new Ss(Ke(t), n.status, ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (r === "session_not_found")
      throw new Ue();
  } else if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((o, i) => o && typeof i == "string", !0))
    throw new Ss(Ke(t), n.status, t.weak_password.reasons);
  throw new Pd(Ke(t), n.status || 500, r);
}
const rh = (n, e, t, r) => {
  const s = { method: n, headers: (e == null ? void 0 : e.headers) || {} };
  return n === "GET" ? s : (s.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), s.body = JSON.stringify(r), Object.assign(Object.assign({}, s), t));
};
async function W(n, e, t, r) {
  var s;
  const o = Object.assign({}, r == null ? void 0 : r.headers);
  o[on] || (o[on] = hi["2024-01-01"].name), r != null && r.jwt && (o.Authorization = `Bearer ${r.jwt}`);
  const i = (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
  r != null && r.redirectTo && (i.redirect_to = r.redirectTo);
  const a = Object.keys(i).length ? "?" + new URLSearchParams(i).toString() : "", l = await nh(n, e, t + a, {
    headers: o,
    noResolveJson: r == null ? void 0 : r.noResolveJson
  }, {}, r == null ? void 0 : r.body);
  return r != null && r.xform ? r == null ? void 0 : r.xform(l) : { data: Object.assign({}, l), error: null };
}
async function nh(n, e, t, r, s, o) {
  const i = rh(e, r, s, o);
  let a;
  try {
    a = await n(t, Object.assign({}, i));
  } catch (l) {
    throw console.error(l), new an(Ke(l), 0);
  }
  if (a.ok || await Rs(a), r != null && r.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await Rs(l);
  }
}
function Fe(n) {
  var e;
  let t = null;
  ah(n) && (t = Object.assign({}, n), n.expires_at || (t.expires_at = Fd(n.expires_in)));
  const r = (e = n.user) !== null && e !== void 0 ? e : n;
  return { data: { session: t, user: r }, error: null };
}
function As(n) {
  const e = Fe(n);
  return !e.error && n.weak_password && typeof n.weak_password == "object" && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.message && typeof n.weak_password.message == "string" && n.weak_password.reasons.reduce((t, r) => t && typeof r == "string", !0) && (e.data.weak_password = n.weak_password), e;
}
function Be(n) {
  var e;
  return { data: { user: (e = n.user) !== null && e !== void 0 ? e : n }, error: null };
}
function sh(n) {
  return { data: n, error: null };
}
function oh(n) {
  const { action_link: e, email_otp: t, hashed_token: r, redirect_to: s, verification_type: o } = n, i = eh(n, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
    action_link: e,
    email_otp: t,
    hashed_token: r,
    redirect_to: s,
    verification_type: o
  }, l = Object.assign({}, i);
  return {
    data: {
      properties: a,
      user: l
    },
    error: null
  };
}
function ih(n) {
  return n;
}
function ah(n) {
  return n.access_token && n.refresh_token && n.expires_in;
}
var lh = function(n, e) {
  var t = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(n); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[s]) && (t[r[s]] = n[r[s]]);
  return t;
};
class ch {
  constructor({ url: e = "", headers: t = {}, fetch: r }) {
    this.url = e, this.headers = t, this.fetch = gi(r), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, t = "global") {
    try {
      return await W(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (U(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, t = {}) {
    try {
      return await W(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: Be
      });
    } catch (r) {
      if (U(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: t } = e, r = lh(e, ["options"]), s = Object.assign(Object.assign({}, r), t);
      return "newEmail" in r && (s.new_email = r == null ? void 0 : r.newEmail, delete s.newEmail), await W(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: s,
        headers: this.headers,
        xform: oh,
        redirectTo: t == null ? void 0 : t.redirectTo
      });
    } catch (t) {
      if (U(t))
        return {
          data: {
            properties: null,
            user: null
          },
          error: t
        };
      throw t;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await W(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: Be
      });
    } catch (t) {
      if (U(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var t, r, s, o, i, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await W(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (t = e == null ? void 0 : e.page) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "",
          per_page: (o = (s = e == null ? void 0 : e.perPage) === null || s === void 0 ? void 0 : s.toString()) !== null && o !== void 0 ? o : ""
        },
        xform: ih
      });
      if (c.error)
        throw c.error;
      const h = await c.json(), d = (i = c.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0, p = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return p.length > 0 && (p.forEach((y) => {
        const m = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)), w = JSON.parse(y.split(";")[1].split("=")[1]);
        u[`${w}Page`] = m;
      }), u.total = parseInt(d)), { data: Object.assign(Object.assign({}, h), u), error: null };
    } catch (u) {
      if (U(u))
        return { data: { users: [] }, error: u };
      throw u;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    try {
      return await W(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: Be
      });
    } catch (t) {
      if (U(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, t) {
    try {
      return await W(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: Be
      });
    } catch (r) {
      if (U(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, t = !1) {
    try {
      return await W(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: Be
      });
    } catch (r) {
      if (U(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    try {
      const { data: t, error: r } = await W(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (s) => ({ data: { factors: s }, error: null })
      });
      return { data: t, error: r };
    } catch (t) {
      if (U(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    try {
      return { data: await W(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (t) {
      if (U(t))
        return { data: null, error: t };
      throw t;
    }
  }
}
const uh = {
  getItem: (n) => $t() ? globalThis.localStorage.getItem(n) : null,
  setItem: (n, e) => {
    $t() && globalThis.localStorage.setItem(n, e);
  },
  removeItem: (n) => {
    $t() && globalThis.localStorage.removeItem(n);
  }
};
function Ps(n = {}) {
  return {
    getItem: (e) => n[e] || null,
    setItem: (e, t) => {
      n[e] = t;
    },
    removeItem: (e) => {
      delete n[e];
    }
  };
}
function dh() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const ct = {
  /**
   * @experimental
   */
  debug: !!(globalThis && $t() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class vi extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class hh extends vi {
}
async function fh(n, e, t) {
  ct.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", n, e);
  const r = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    r.abort(), ct.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", n);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(n, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: r.signal
  }, async (s) => {
    if (s) {
      ct.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", n, s.name);
      try {
        return await t();
      } finally {
        ct.debug && console.log("@supabase/gotrue-js: navigatorLock: released", n, s.name);
      }
    } else {
      if (e === 0)
        throw ct.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", n), new hh(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);
      if (ct.debug)
        try {
          const o = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(o, null, "  "));
        } catch (o) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", o);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await t();
    }
  }));
}
dh();
const ph = {
  url: Ed,
  storageKey: Cd,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Td,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
};
async function $s(n, e, t) {
  return await t();
}
class Ot {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var t, r;
    this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = Ot.nextInstanceID, Ot.nextInstanceID += 1, this.instanceID > 0 && Ae() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const s = Object.assign(Object.assign({}, ph), e);
    if (this.logDebugMessages = !!s.debug, typeof s.debug == "function" && (this.logger = s.debug), this.persistSession = s.persistSession, this.storageKey = s.storageKey, this.autoRefreshToken = s.autoRefreshToken, this.admin = new ch({
      url: s.url,
      headers: s.headers,
      fetch: s.fetch
    }), this.url = s.url, this.headers = s.headers, this.fetch = gi(s.fetch), this.lock = s.lock || $s, this.detectSessionInUrl = s.detectSessionInUrl, this.flowType = s.flowType, this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader, s.lock ? this.lock = s.lock : Ae() && (!((t = globalThis == null ? void 0 : globalThis.navigator) === null || t === void 0) && t.locks) ? this.lock = fh : this.lock = $s, this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER, this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? s.storage ? this.storage = s.storage : $t() ? this.storage = uh : (this.memoryStorage = {}, this.storage = Ps(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = Ps(this.memoryStorage)), Ae() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (o) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o);
      }
      (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async (o) => {
        this._debug("received broadcast notification from other tab or client", o), await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
      });
    }
    this.initialize();
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${di}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      const t = Bd(window.location.href);
      let r = "none";
      if (this._isImplicitGrantCallback(t) ? r = "implicit" : await this._isPKCECallback(t) && (r = "pkce"), Ae() && this.detectSessionInUrl && r !== "none") {
        const { data: s, error: o } = await this._getSessionFromURL(t, r);
        if (o) {
          if (this._debug("#_initialize()", "error detecting session from URL", o), Od(o)) {
            const l = (e = o.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: o };
          }
          return await this._removeSession(), { error: o };
        }
        const { session: i, redirectType: a } = s;
        return this._debug("#_initialize()", "detected session in URL", i, "redirect type", a), await this._saveSession(i), setTimeout(async () => {
          a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return U(t) ? { error: t } : {
        error: new fi("Unexpected error during initialization", t)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var t, r, s;
    try {
      const o = await W(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (t = e == null ? void 0 : e.options) === null || t === void 0 ? void 0 : t.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.captchaToken }
        },
        xform: Fe
      }), { data: i, error: a } = o;
      if (a || !i)
        return { data: { user: null, session: null }, error: a };
      const l = i.session, u = i.user;
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: u, session: l }, error: null };
    } catch (o) {
      if (U(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var t, r, s;
    try {
      let o;
      if ("email" in e) {
        const { email: c, password: h, options: d } = e;
        let p = null, y = null;
        this.flowType === "pkce" && ([p, y] = await lt(this.storage, this.storageKey)), o = await W(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: d == null ? void 0 : d.emailRedirectTo,
          body: {
            email: c,
            password: h,
            data: (t = d == null ? void 0 : d.data) !== null && t !== void 0 ? t : {},
            gotrue_meta_security: { captcha_token: d == null ? void 0 : d.captchaToken },
            code_challenge: p,
            code_challenge_method: y
          },
          xform: Fe
        });
      } else if ("phone" in e) {
        const { phone: c, password: h, options: d } = e;
        o = await W(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: h,
            data: (r = d == null ? void 0 : d.data) !== null && r !== void 0 ? r : {},
            channel: (s = d == null ? void 0 : d.channel) !== null && s !== void 0 ? s : "sms",
            gotrue_meta_security: { captcha_token: d == null ? void 0 : d.captchaToken }
          },
          xform: Fe
        });
      } else
        throw new Jt("You must provide either an email or phone number and a password");
      const { data: i, error: a } = o;
      if (a || !i)
        return { data: { user: null, session: null }, error: a };
      const l = i.session, u = i.user;
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: u, session: l }, error: null };
    } catch (o) {
      if (U(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const { email: o, password: i, options: a } = e;
        t = await W(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: o,
            password: i,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: As
        });
      } else if ("phone" in e) {
        const { phone: o, password: i, options: a } = e;
        t = await W(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: o,
            password: i,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: As
        });
      } else
        throw new Jt("You must provide either an email or phone number and a password");
      const { data: r, error: s } = t;
      return s ? { data: { user: null, session: null }, error: s } : !r || !r.session || !r.user ? { data: { user: null, session: null }, error: new Fr() } : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: s
      });
    } catch (t) {
      if (U(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var t, r, s, o;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams: (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect: (o = e.options) === null || o === void 0 ? void 0 : o.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  async _exchangeCodeForSession(e) {
    const t = await Yt(this.storage, `${this.storageKey}-code-verifier`), [r, s] = (t ?? "").split("/");
    try {
      const { data: o, error: i } = await W(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: r
        },
        xform: Fe
      });
      if (await Xt(this.storage, `${this.storageKey}-code-verifier`), i)
        throw i;
      return !o || !o.session || !o.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new Fr()
      } : (o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", o.session)), { data: Object.assign(Object.assign({}, o), { redirectType: s ?? null }), error: i });
    } catch (o) {
      if (U(o))
        return { data: { user: null, session: null, redirectType: null }, error: o };
      throw o;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: t, provider: r, token: s, access_token: o, nonce: i } = e, a = await W(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: s,
          access_token: o,
          nonce: i,
          gotrue_meta_security: { captcha_token: t == null ? void 0 : t.captchaToken }
        },
        xform: Fe
      }), { data: l, error: u } = a;
      return u ? { data: { user: null, session: null }, error: u } : !l || !l.session || !l.user ? {
        data: { user: null, session: null },
        error: new Fr()
      } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), { data: l, error: u });
    } catch (t) {
      if (U(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var t, r, s, o, i;
    try {
      if ("email" in e) {
        const { email: a, options: l } = e;
        let u = null, c = null;
        this.flowType === "pkce" && ([u, c] = await lt(this.storage, this.storageKey));
        const { error: h } = await W(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data: (t = l == null ? void 0 : l.data) !== null && t !== void 0 ? t : {},
            create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            code_challenge: u,
            code_challenge_method: c
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: h };
      }
      if ("phone" in e) {
        const { phone: a, options: l } = e, { data: u, error: c } = await W(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: a,
            data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
            create_user: (o = l == null ? void 0 : l.shouldCreateUser) !== null && o !== void 0 ? o : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            channel: (i = l == null ? void 0 : l.channel) !== null && i !== void 0 ? i : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: u == null ? void 0 : u.message_id }, error: c };
      }
      throw new Jt("You must provide either an email or phone number.");
    } catch (a) {
      if (U(a))
        return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var t, r;
    try {
      let s, o;
      "options" in e && (s = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo, o = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken);
      const { data: i, error: a } = await W(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: o } }),
        redirectTo: s,
        xform: Fe
      });
      if (a)
        throw a;
      if (!i)
        throw new Error("An error occurred on token verification.");
      const l = i.session, u = i.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), { data: { user: u, session: l }, error: null };
    } catch (s) {
      if (U(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var t, r, s;
    try {
      let o = null, i = null;
      return this.flowType === "pkce" && ([o, i] = await lt(this.storage, this.storageKey)), await W(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (r = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((s = e == null ? void 0 : e.options) === null || s === void 0) && s.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: o, code_challenge_method: i }),
        headers: this.headers,
        xform: sh
      });
    } catch (o) {
      if (U(o))
        return { data: null, error: o };
      throw o;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: r } = e;
        if (r)
          throw r;
        if (!t)
          throw new Ue();
        const { error: s } = await W(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return { data: { user: null, session: null }, error: s };
      });
    } catch (e) {
      if (U(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const { email: r, type: s, options: o } = e, { error: i } = await W(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            email: r,
            type: s,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          redirectTo: o == null ? void 0 : o.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: i };
      } else if ("phone" in e) {
        const { phone: r, type: s, options: o } = e, { data: i, error: a } = await W(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: r,
            type: s,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: i == null ? void 0 : i.message_id }, error: a };
      }
      throw new Jt("You must provide either an email or phone number and a type");
    } catch (t) {
      if (U(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (t) => t));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), s = (async () => (await r, await t()))();
        return this.pendingInLock.push((async () => {
          try {
            await s;
          } catch {
          }
        })()), s;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const r = t();
          for (this.pendingInLock.push((async () => {
            try {
              await r;
            } catch {
            }
          })()), await r; this.pendingInLock.length; ) {
            const s = [...this.pendingInLock];
            await Promise.all(s), this.pendingInLock.splice(0, s.length);
          }
          return await r;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const t = await this.__loadSession();
      return await e(t);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const t = await Yt(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < Ur : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at), !r) {
        if (this.storage.isServer) {
          let i = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (l, u, c) => (!i && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), i = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, u, c))
          });
        }
        return { data: { session: e }, error: null };
      }
      const { session: s, error: o } = await this._callRefreshToken(e.refresh_token);
      return o ? { data: { session: null }, error: o } : { data: { session: s }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(e) {
    try {
      return e ? await W(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: Be
      }) : await this._useSession(async (t) => {
        var r, s, o;
        const { data: i, error: a } = t;
        if (a)
          throw a;
        return !(!((r = i.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Ue() } : await W(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (o = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null && o !== void 0 ? o : void 0,
          xform: Be
        });
      });
    } catch (t) {
      if (U(t))
        return jd(t) && (await this._removeSession(), await Xt(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, t = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: s, error: o } = r;
        if (o)
          throw o;
        if (!s.session)
          throw new Ue();
        const i = s.session;
        let a = null, l = null;
        this.flowType === "pkce" && e.email != null && ([a, l] = await lt(this.storage, this.storageKey));
        const { data: u, error: c } = await W(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t == null ? void 0 : t.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: l }),
          jwt: i.access_token,
          xform: Be
        });
        if (c)
          throw c;
        return i.user = u.user, await this._saveSession(i), await this._notifyAllSubscribers("USER_UPDATED", i), { data: { user: i.user }, error: null };
      });
    } catch (r) {
      if (U(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new Ue();
      const t = Date.now() / 1e3;
      let r = t, s = !0, o = null;
      const { payload: i } = Br(e.access_token);
      if (i.exp && (r = i.exp, s = r <= t), s) {
        const { session: a, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return { data: { user: null, session: null }, error: l };
        if (!a)
          return { data: { user: null, session: null }, error: null };
        o = a;
      } else {
        const { data: a, error: l } = await this._getUser(e.access_token);
        if (l)
          throw l;
        o = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: r - t,
          expires_at: r
        }, await this._saveSession(o), await this._notifyAllSubscribers("SIGNED_IN", o);
      }
      return { data: { user: o.user, session: o }, error: null };
    } catch (t) {
      if (U(t))
        return { data: { session: null, user: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        if (!e) {
          const { data: i, error: a } = t;
          if (a)
            throw a;
          e = (r = i.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new Ue();
        const { session: s, error: o } = await this._callRefreshToken(e.refresh_token);
        return o ? { data: { user: null, session: null }, error: o } : s ? { data: { user: s.user, session: s }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (t) {
      if (U(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, t) {
    try {
      if (!Ae())
        throw new Kt("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new Kt(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (t) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new xs("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Kt("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (t === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new xs("No code detected.");
        const { data: b, error: k } = await this._exchangeCodeForSession(e.code);
        if (k)
          throw k;
        const x = new URL(window.location.href);
        return x.searchParams.delete("code"), window.history.replaceState(window.history.state, "", x.toString()), { data: { session: b.session, redirectType: null }, error: null };
      }
      const { provider_token: r, provider_refresh_token: s, access_token: o, refresh_token: i, expires_in: a, expires_at: l, token_type: u } = e;
      if (!o || !a || !i || !u)
        throw new Kt("No session defined in URL");
      const c = Math.round(Date.now() / 1e3), h = parseInt(a);
      let d = c + h;
      l && (d = parseInt(l));
      const p = d - c;
      p * 1e3 <= ut && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${h}s`);
      const y = d - h;
      c - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, d, c) : c - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, d, c);
      const { data: m, error: w } = await this._getUser(o);
      if (w)
        throw w;
      const S = {
        provider_token: r,
        provider_refresh_token: s,
        access_token: o,
        expires_in: h,
        expires_at: d,
        refresh_token: i,
        token_type: u,
        user: m.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: S, redirectType: e.type }, error: null };
    } catch (r) {
      if (U(r))
        return { data: { session: null, redirectType: null }, error: r };
      throw r;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(e) {
    return !!(e.access_token || e.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    const t = await Yt(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && t);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (t) => {
      var r;
      const { data: s, error: o } = t;
      if (o)
        return { error: o };
      const i = (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
      if (i) {
        const { error: a } = await this.admin.signOut(i, e);
        if (a && !($d(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
          return { error: a };
      }
      return e !== "others" && (await this._removeSession(), await Xt(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const t = zd(), r = {
      id: t,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, r), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(t);
    })))(), { data: { subscription: r } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (t) => {
      var r, s;
      try {
        const { data: { session: o }, error: i } = t;
        if (i)
          throw i;
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", o)), this._debug("INITIAL_SESSION", "callback id", e, "session", o);
      } catch (o) {
        await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", o), console.error(o);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, t = {}) {
    let r = null, s = null;
    this.flowType === "pkce" && ([r, s] = await lt(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await W(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: t.captchaToken }
        },
        headers: this.headers,
        redirectTo: t.redirectTo
      });
    } catch (o) {
      if (U(o))
        return { data: null, error: o };
      throw o;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: t, error: r } = await this.getUser();
      if (r)
        throw r;
      return { data: { identities: (e = t.user.identities) !== null && e !== void 0 ? e : [] }, error: null };
    } catch (t) {
      if (U(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(e) {
    var t;
    try {
      const { data: r, error: s } = await this._useSession(async (o) => {
        var i, a, l, u, c;
        const { data: h, error: d } = o;
        if (d)
          throw d;
        const p = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (i = e.options) === null || i === void 0 ? void 0 : i.redirectTo,
          scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await W(this.fetch, "GET", p, {
          headers: this.headers,
          jwt: (c = (u = h.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
        });
      });
      if (s)
        throw s;
      return Ae() && !(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url), { data: { provider: e.provider, url: r == null ? void 0 : r.url }, error: null };
    } catch (r) {
      if (U(r))
        return { data: { provider: e.provider, url: null }, error: r };
      throw r;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (t) => {
        var r, s;
        const { data: o, error: i } = t;
        if (i)
          throw i;
        return await W(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (s = (r = o.session) === null || r === void 0 ? void 0 : r.access_token) !== null && s !== void 0 ? s : void 0
        });
      });
    } catch (t) {
      if (U(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const r = Date.now();
      return await Vd(async (s) => (s > 0 && await qd(200 * Math.pow(2, s - 1)), this._debug(t, "refreshing attempt", s), await W(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: Fe
      })), (s, o) => {
        const i = 200 * Math.pow(2, s);
        return o && zr(o) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + i - r < ut;
      });
    } catch (r) {
      if (this._debug(t, "error", r), U(r))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(t, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, t) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r), Ae() && !t.skipBrowserRedirect && window.location.assign(r), { data: { provider: e, url: r }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e;
    const t = "#_recoverAndRefresh()";
    this._debug(t, "begin");
    try {
      const r = await Yt(this.storage, this.storageKey);
      if (this._debug(t, "session from storage", r), !this._isValidSession(r)) {
        this._debug(t, "session is not valid"), r !== null && await this._removeSession();
        return;
      }
      const s = ((e = r.expires_at) !== null && e !== void 0 ? e : 1 / 0) * 1e3 - Date.now() < Ur;
      if (this._debug(t, `session has${s ? "" : " not"} expired with margin of ${Ur}s`), s) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: o } = await this._callRefreshToken(r.refresh_token);
          o && (console.error(o), zr(o) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
        }
      } else
        await this._notifyAllSubscribers("SIGNED_IN", r);
    } catch (r) {
      this._debug(t, "error", r), console.error(r);
      return;
    } finally {
      this._debug(t, "end");
    }
  }
  async _callRefreshToken(e) {
    var t, r;
    if (!e)
      throw new Ue();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new br();
      const { data: o, error: i } = await this._refreshAccessToken(e);
      if (i)
        throw i;
      if (!o.session)
        throw new Ue();
      await this._saveSession(o.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", o.session);
      const a = { session: o.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (o) {
      if (this._debug(s, "error", o), U(o)) {
        const i = { session: null, error: o };
        return zr(o) || await this._removeSession(), (t = this.refreshingDeferred) === null || t === void 0 || t.resolve(i), i;
      }
      throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(o), o;
    } finally {
      this.refreshingDeferred = null, this._debug(s, "end");
    }
  }
  async _notifyAllSubscribers(e, t, r = !0) {
    const s = `#_notifyAllSubscribers(${e})`;
    this._debug(s, "begin", t, `broadcast = ${r}`);
    try {
      this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: e, session: t });
      const o = [], i = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
        try {
          await a.callback(e, t);
        } catch (l) {
          o.push(l);
        }
      });
      if (await Promise.all(i), o.length > 0) {
        for (let a = 0; a < o.length; a += 1)
          console.error(o[a]);
        throw o[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await mi(this.storage, this.storageKey, e);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await Xt(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && Ae() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), ut);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (t) => {
              const { data: { session: r } } = t;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((r.expires_at * 1e3 - e) / ut);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${s} ticks, a tick lasts ${ut}ms, refresh threshold is ${sn} ticks`), s <= sn && await this._callRefreshToken(r.refresh_token);
            });
          } catch (t) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", t);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof vi)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !Ae() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const t = `#_onVisibilityChanged(${e})`;
    this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, t, r) {
    const s = [`provider=${encodeURIComponent(t)}`];
    if (r != null && r.redirectTo && s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`), r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`), this.flowType === "pkce") {
      const [o, i] = await lt(this.storage, this.storageKey), a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(o)}`,
        code_challenge_method: `${encodeURIComponent(i)}`
      });
      s.push(a.toString());
    }
    if (r != null && r.queryParams) {
      const o = new URLSearchParams(r.queryParams);
      s.push(o.toString());
    }
    return r != null && r.skipBrowserRedirect && s.push(`skip_http_redirect=${r.skipBrowserRedirect}`), `${e}?${s.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        const { data: s, error: o } = t;
        return o ? { data: null, error: o } : await W(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (t) {
      if (U(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r, s;
        const { data: o, error: i } = t;
        if (i)
          return { data: null, error: i };
        const a = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: l, error: u } = await W(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (r = o == null ? void 0 : o.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return u ? { data: null, error: u } : (e.factorType === "totp" && (!((s = l == null ? void 0 : l.totp) === null || s === void 0) && s.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), { data: l, error: null });
      });
    } catch (t) {
      if (U(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: s, error: o } = t;
          if (o)
            return { data: null, error: o };
          const { data: i, error: a } = await W(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
          });
          return a ? { data: null, error: a } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + i.expires_in }, i)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", i), { data: i, error: a });
        });
      } catch (t) {
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: s, error: o } = t;
          return o ? { data: null, error: o } : await W(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: { channel: e.channel },
            headers: this.headers,
            jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
          });
        });
      } catch (t) {
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: t, error: r } = await this._challenge({
      factorId: e.factorId
    });
    return r ? { data: null, error: r } : await this._verify({
      factorId: e.factorId,
      challengeId: t.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: e }, error: t } = await this.getUser();
    if (t)
      return { data: null, error: t };
    const r = (e == null ? void 0 : e.factors) || [], s = r.filter((i) => i.factor_type === "totp" && i.status === "verified"), o = r.filter((i) => i.factor_type === "phone" && i.status === "verified");
    return {
      data: {
        all: r,
        totp: s,
        phone: o
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (e) => {
      var t, r;
      const { data: { session: s }, error: o } = e;
      if (o)
        return { data: null, error: o };
      if (!s)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const { payload: i } = Br(s.access_token);
      let a = null;
      i.aal && (a = i.aal);
      let l = a;
      ((r = (t = s.user.factors) === null || t === void 0 ? void 0 : t.filter((h) => h.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (l = "aal2");
      const c = i.amr || [];
      return { data: { currentLevel: a, nextLevel: l, currentAuthenticationMethods: c }, error: null };
    }));
  }
  async fetchJwk(e, t = { keys: [] }) {
    let r = t.keys.find((i) => i.kid === e);
    if (r || (r = this.jwks.keys.find((i) => i.kid === e), r && this.jwks_cached_at + Ad > Date.now()))
      return r;
    const { data: s, error: o } = await W(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (o)
      throw o;
    if (!s.keys || s.keys.length === 0)
      throw new Pt("JWKS is empty");
    if (this.jwks = s, this.jwks_cached_at = Date.now(), r = s.keys.find((i) => i.kid === e), !r)
      throw new Pt("No matching signing key found in JWKS");
    return r;
  }
  /**
   * @experimental This method may change in future versions.
   * @description Gets the claims from a JWT. If the JWT is symmetric JWTs, it will call getUser() to verify against the server. If the JWT is asymmetric, it will be verified against the JWKS using the WebCrypto API.
   */
  async getClaims(e, t = { keys: [] }) {
    try {
      let r = e;
      if (!r) {
        const { data: p, error: y } = await this.getSession();
        if (y || !p.session)
          return { data: null, error: y };
        r = p.session.access_token;
      }
      const { header: s, payload: o, signature: i, raw: { header: a, payload: l } } = Br(r);
      if (Zd(o.exp), !s.kid || s.alg === "HS256" || !("crypto" in globalThis && "subtle" in globalThis.crypto)) {
        const { error: p } = await this.getUser(r);
        if (p)
          throw p;
        return {
          data: {
            claims: o,
            header: s,
            signature: i
          },
          error: null
        };
      }
      const u = Qd(s.alg), c = await this.fetchJwk(s.kid, t), h = await crypto.subtle.importKey("jwk", c, u, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(u, h, i, Ud(`${a}.${l}`)))
        throw new Pt("Invalid JWT signature");
      return {
        data: {
          claims: o,
          header: s,
          signature: i
        },
        error: null
      };
    } catch (r) {
      if (U(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
Ot.nextInstanceID = 0;
const gh = Ot;
class mh extends gh {
  constructor(e) {
    super(e);
  }
}
var vh = function(n, e, t, r) {
  function s(o) {
    return o instanceof t ? o : new t(function(i) {
      i(o);
    });
  }
  return new (t || (t = Promise))(function(o, i) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (h) {
        i(h);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        i(h);
      }
    }
    function u(c) {
      c.done ? o(c.value) : s(c.value).then(a, l);
    }
    u((r = r.apply(n, e || [])).next());
  });
};
class bh {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(e, t, r) {
    var s, o, i;
    if (this.supabaseUrl = e, this.supabaseKey = t, !e)
      throw new Error("supabaseUrl is required.");
    if (!t)
      throw new Error("supabaseKey is required.");
    const a = xd(e);
    this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${a}/auth/v1`, this.storageUrl = `${a}/storage/v1`, this.functionsUrl = `${a}/functions/v1`;
    const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, u = {
      db: gd,
      realtime: vd,
      auth: Object.assign(Object.assign({}, md), { storageKey: l }),
      global: pd
    }, c = Sd(r ?? {}, u);
    this.storageKey = (s = c.auth.storageKey) !== null && s !== void 0 ? s : "", this.headers = (o = c.global.headers) !== null && o !== void 0 ? o : {}, c.accessToken ? (this.accessToken = c.accessToken, this.auth = new Proxy({}, {
      get: (h, d) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((i = c.auth) !== null && i !== void 0 ? i : {}, this.headers, c.global.fetch), this.fetch = _d(t, this._getAccessToken.bind(this), c.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, c.realtime)), this.rest = new Du(`${a}/rest/v1`, {
      headers: this.headers,
      schema: c.db.schema,
      fetch: this.fetch
    }), c.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new hu(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new dd(this.storageUrl, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    return this.rest.from(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return this.rest.schema(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, t = {}, r = {}) {
    return this.rest.rpc(e, t, r);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, t;
    return vh(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: r } = yield this.auth.getSession();
      return (t = (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !== null && t !== void 0 ? t : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: s, storageKey: o, flowType: i, lock: a, debug: l }, u, c) {
    const h = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new mh({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, h), u),
      storageKey: o,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: r,
      storage: s,
      flowType: i,
      lock: a,
      debug: l,
      fetch: c,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: "Authorization" in this.headers
    });
  }
  _initRealtimeClient(e) {
    return new Xu(this.realtimeUrl, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, r) => {
      this._handleTokenChanged(t, "CLIENT", r == null ? void 0 : r.access_token);
    });
  }
  _handleTokenChanged(e, t, r) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r ? this.changedAccessToken = r : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const yh = (n, e, t) => new bh(n, e, t), wh = "https://fwchkusgryebslnjkoly.supabase.co", _h = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3Y2hrdXNncnllYnNsbmprb2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MjkyMTcsImV4cCI6MjA2MDUwNTIxN30.ZP4Qh8Lb6DWmTlawIDHNuAnkUanInBmKblCCRVa0QuY", ae = yh(wh, _h), kh = async (n) => {
  var e;
  try {
    console.log("Отправка сообщения:", n);
    const { data: t, error: r } = await ae.from("conversations").insert([{ user_query: n, bot_response: "" }]).select().single();
    if (r)
      return console.error("Ошибка при отправке сообщения:", r), te.error("Ошибка при отправке сообщения"), null;
    let s;
    try {
      s = await Promise.race([
        ae.functions.invoke("yandex-gpt-proxy", {
          body: {
            message: n,
            conversationId: t.id
          }
        }),
        // 15-секундный таймаут для вызова функции (увеличен с 10 до 15, т.к. теперь обрабатываем больше данных)
        new Promise(
          (a, l) => setTimeout(() => l(new Error("Превышено время ожидания от сервера")), 15e3)
        )
      ]);
    } catch (a) {
      return console.error("Ошибка вызова функции:", a), te.error("Сервер не ответил вовремя, но ваше сообщение сохранено"), await ae.from("conversations").update({ bot_response: "Ответ не получен. Пожалуйста, повторите запрос позже." }).eq("id", t.id), {
        ...t,
        bot_response: "Ответ не получен. Пожалуйста, повторите запрос позже."
      };
    }
    if (s.error)
      return console.error("Ошибка вызова функции:", s.error), te.error("Произошла ошибка при обработке запроса"), await ae.from("conversations").update({ bot_response: "Функция обработки сообщений временно недоступна." }).eq("id", t.id), {
        ...t,
        bot_response: "Функция обработки сообщений временно недоступна."
      };
    const { data: o, error: i } = await ae.from("conversations").select().eq("id", t.id).single();
    return i ? (console.error("Ошибка при получении ответа:", i), te.error("Не удалось получить ответ"), t) : (e = s == null ? void 0 : s.data) != null && e.bot_response ? (console.log("Используем прямой ответ из функции:", s.data.bot_response), {
      ...o,
      bot_response: s.data.bot_response
    }) : o.bot_response ? (console.log("Получен ответ:", o), o) : (console.log("Пустой ответ от сервера"), await ae.from("conversations").update({ bot_response: "Бот не смог сформулировать ответ. Пожалуйста, попробуйте задать вопрос по-другому." }).eq("id", t.id), {
      ...o,
      bot_response: "Бот не смог сформулировать ответ. Пожалуйста, попробуйте задать вопрос по-другому."
    });
  } catch (t) {
    return console.error("Произошла ошибка:", t), te.error("Произошла ошибка при отправке сообщения"), null;
  }
}, xh = async (n = 25) => {
  try {
    const { data: e, error: t } = await ae.from("conversations").select("*").order("timestamp", { ascending: !1 }).limit(n);
    return t ? (console.error("Ошибка при получении истории сообщений:", t), te.error("Не удалось загрузить историю сообщений"), []) : e.reverse();
  } catch (e) {
    return console.error("Произошла ошибка при загрузке истории:", e), te.error("Произошла ошибка при загрузке истории"), [];
  }
}, Sh = () => {
  const [n, e] = ie([]), [t, r] = ie(!1), [s, o] = ie("");
  We(null);
  const i = async () => {
    const b = await xh(25);
    e(b);
  }, a = () => {
    s.trim() && (l(s), o(""));
  }, l = async (b) => {
    if (!b.trim() || t) return;
    if (r(!0), u(b)) {
      await c(b), r(!1);
      return;
    }
    const k = {
      user_query: b,
      bot_response: "",
      isLoading: !0
    };
    e((x) => [...x, k]);
    try {
      const x = await kh(b);
      x ? (e((C) => C.filter(($) => !$.isLoading).concat([x])), await d(x.bot_response, b)) : e((C) => C.map(
        ($) => $.isLoading ? { ...$, isLoading: !1, bot_response: "Не удалось получить ответ" } : $
      ));
    } catch (x) {
      console.error("Ошибка при обработке сообщения:", x), e((C) => C.map(
        ($) => $.isLoading ? { ...$, isLoading: !1, bot_response: "Произошла ошибка" } : $
      ));
    } finally {
      r(!1);
    }
  }, u = (b) => [
    "подтверждаю",
    "да",
    "точно",
    "согласен",
    "подтвердить",
    "отменить",
    "отмени",
    "удали",
    "удалить",
    "убери"
  ].some(
    (x) => b.toLowerCase().includes(x)
  ), c = async (b) => {
    const x = n.slice(-3).find(
      (C) => C.bot_response && (C.bot_response.toLowerCase().includes("вы действительно хотите отменить бронирование") || C.bot_response.toLowerCase().includes("подтвердите отмену бронирования"))
    );
    if (x) {
      const $ = x.bot_response.match(/бронирование\s+(\w+\s+\w+|\w+)/i), j = $ ? $[1] : null;
      if (j && h(b)) {
        const D = {
          user_query: b,
          bot_response: "",
          isLoading: !0
        };
        e((P) => [...P, D]);
        try {
          const { data: P, error: z } = await ae.from("bookings").select("*").ilike("guest_name", `%${j}%`).eq("status", "confirmed").limit(1).single();
          if (z)
            throw new Error(`Ошибка при получении данных бронирования: ${z.message}`);
          P ? (await S("delete", { id: P.id, guest_name: P.guest_name }), e((X) => X.map(
            (L) => L.isLoading ? {
              ...L,
              isLoading: !1,
              bot_response: `✅ Бронирование для ${P.guest_name} успешно отменено!`
            } : L
          ))) : e((X) => X.map(
            (L) => L.isLoading ? {
              ...L,
              isLoading: !1,
              bot_response: `❌ Не удалось найти активное бронирование для ${j}`
            } : L
          ));
        } catch (P) {
          console.error("Ошибка при отмене бронирования:", P), e((z) => z.map(
            (X) => X.isLoading ? {
              ...X,
              isLoading: !1,
              bot_response: `❌ Не удалось отменить бронирование: ${P.message}`
            } : X
          ));
        }
        return !0;
      }
    }
    return !1;
  }, h = (b) => ["подтверждаю", "да", "точно", "согласен", "подтвердить"].some((x) => b.toLowerCase().includes(x)), d = async (b, k) => {
    const x = k.toLowerCase().includes("отмени бронь") || k.toLowerCase().includes("отменить бронь") || k.toLowerCase().includes("удали бронирование");
    (k.toLowerCase().includes("покажи сообщения") || k.toLowerCase().includes("покажи сообщение от") || k.toLowerCase().includes("покажи непрочитанные") || k.toLowerCase().includes("покажи переписку")) && b.includes("сообщение") && b.includes("найдено") && console.log("Запрос на просмотр сообщений WhatsApp обработан в GPT"), x && b.includes("действительно") && console.log("Обнаружен запрос на подтверждение отмены бронирования");
  }, p = async (b) => {
    try {
      r(!0);
      let k = ae.from("whatsapp_messages").select("*");
      b.guestName && (k = k.ilike("guest_name", `%${b.guestName}%`)), b.phoneNumber && (k = k.eq("phone_number", b.phoneNumber)), b.onlyUnread && (k = k.eq("is_read", !1)), k = k.order("created_at", { ascending: !1 }), k = k.limit(b.limit || 20);
      const { data: x, error: C } = await k;
      if (C)
        throw new Error(`Ошибка при получении сообщений WhatsApp: ${C.message}`);
      if (x && x.length > 0) {
        const $ = y(x, b), j = {
          user_query: `Показать сообщения${b.guestName ? ` от ${b.guestName}` : ""}${b.onlyUnread ? " (непрочитанные)" : ""}`,
          bot_response: $,
          isLoading: !1
        };
        if (e((D) => [...D, j]), b.onlyUnread) {
          const D = x.map((P) => P.id);
          await ae.from("whatsapp_messages").update({ is_read: !0 }).in("id", D);
        }
        return x;
      } else {
        const $ = {
          user_query: `Показать сообщения${b.guestName ? ` от ${b.guestName}` : ""}${b.onlyUnread ? " (непрочитанные)" : ""}`,
          bot_response: `📱 Сообщений${b.guestName ? ` от ${b.guestName}` : ""}${b.onlyUnread ? " (непрочитанных)" : ""} не найдено.`,
          isLoading: !1
        };
        return e((j) => [...j, $]), [];
      }
    } catch (k) {
      console.error("Ошибка при получении сообщений WhatsApp:", k);
      const x = {
        user_query: `Показать сообщения${b.guestName ? ` от ${b.guestName}` : ""}`,
        bot_response: `❌ Не удалось получить сообщения: ${k.message}`,
        isLoading: !1
      };
      return e((C) => [...C, x]), [];
    } finally {
      r(!1);
    }
  }, y = (b, k) => {
    if (!b || b.length === 0)
      return "Сообщений не найдено";
    let x = "";
    k.guestName ? x += `📱 **Сообщения ${k.onlyUnread ? "непрочитанные " : ""}от ${k.guestName}**

` : k.onlyUnread ? x += `📱 **Непрочитанные сообщения**

` : x += `📱 **Последние сообщения WhatsApp**

`;
    const C = {};
    return b.forEach(($) => {
      const j = $.guest_name || $.phone_number;
      C[j] || (C[j] = []), C[j].push($);
    }), Object.keys(C).forEach(($) => {
      Object.keys(C).length > 1 && (x += `### ${$}

`), C[$].sort(
        (D, P) => new Date(D.created_at).getTime() - new Date(P.created_at).getTime()
      ).forEach((D) => {
        const P = new Date(D.created_at), z = `${P.toLocaleDateString("ru-RU")} ${P.toLocaleTimeString("ru-RU")}`, X = D.is_incoming ? "📥" : "📤", L = !D.is_read && D.is_incoming ? " (Непрочитано)" : "";
        x += `${X} **${z}**${L}:
${D.content}

`;
      });
    }), x;
  }, m = async (b) => {
    try {
      console.log("Начало создания задачи:", b), r(!0);
      const k = {
        user_query: `Создай задачу: ${b.title}`,
        bot_response: "Создаю задачу...",
        isLoading: !0
      };
      e((P) => [...P, k]);
      const { data: { session: x } } = await ae.auth.getSession(), C = x == null ? void 0 : x.access_token;
      console.log("Подготовка запроса к Edge Function task-manager");
      const $ = {
        "Content-Type": "application/json"
      };
      C ? (console.log("Добавляем токен авторизации в запрос"), $.Authorization = `Bearer ${C}`) : console.log("Токен авторизации не найден, выполняем запрос анонимно");
      const j = await fetch("https://fwchkusgryebslnjkoly.supabase.co/functions/v1/task-manager", {
        method: "POST",
        headers: $,
        body: JSON.stringify({
          action: "create",
          task: {
            title: b.title,
            description: b.description,
            priority: b.priority || "medium",
            house_number: b.houseNumber || "1"
          }
        })
      });
      if (console.log("Получен ответ от Edge Function, статус:", j.status), !j.ok) {
        const P = await j.text();
        throw console.error(`Ошибка при создании задачи: ${j.status}`, P), new Error(`Ошибка при создании задачи: ${j.status} - ${P}`);
      }
      const D = await j.json();
      console.log("Результат создания задачи:", D), e((P) => P.map(
        (z) => {
          var X;
          return z.isLoading ? {
            ...z,
            isLoading: !1,
            bot_response: `✅ Задача "${b.title}" успешно создана!${(X = D.task) != null && X.id ? ` ID: ${D.task.id}` : ""}${D.employee ? `, назначена на: ${D.employee}` : ""}`
          } : z;
        }
      ));
    } catch (k) {
      console.error("Ошибка при создании задачи:", k), e((x) => x.map(
        (C) => C.isLoading ? {
          ...C,
          isLoading: !1,
          bot_response: `❌ Не удалось создать задачу: ${k.message}`
        } : C
      ));
    } finally {
      r(!1);
    }
  }, w = async (b, k) => {
    try {
      r(!0);
      const x = {
        user_query: `Отправь WhatsApp на ${b}: ${k}`,
        bot_response: "Отправляю сообщение...",
        isLoading: !0
      };
      e((j) => [...j, x]);
      const C = await fetch("https://fwchkusgryebslnjkoly.supabase.co/functions/v1/whatsapp-sender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone: b,
          message: k
        })
      });
      if (!C.ok)
        throw new Error(`Ошибка при отправке WhatsApp: ${C.status}`);
      const $ = await C.json();
      e((j) => j.map(
        (D) => D.isLoading ? {
          ...D,
          isLoading: !1,
          bot_response: `✅ Сообщение WhatsApp успешно отправлено на номер ${b}`
        } : D
      ));
    } catch (x) {
      console.error("Ошибка при отправке WhatsApp:", x), e((C) => C.map(
        ($) => $.isLoading ? {
          ...$,
          isLoading: !1,
          bot_response: `❌ Не удалось отправить WhatsApp: ${x.message}`
        } : $
      ));
    } finally {
      r(!1);
    }
  }, S = async (b, k) => {
    try {
      r(!0);
      let x = b === "create" ? "Создаю" : b === "update" ? "Обновляю" : "Удаляю";
      const C = {
        user_query: `${x} бронирование: ${k.guest_name || "Гость"}, даты: ${k.start_date || "не указано"} - ${k.end_date || "не указано"}`,
        bot_response: `${x} бронирование...`,
        isLoading: !0
      };
      e((P) => [...P, C]);
      const $ = await fetch("https://fwchkusgryebslnjkoly.supabase.co/functions/v1/booking-manager", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: b,
          booking: k,
          bookingId: k.id
          // Добавляем для случаев update и delete
        })
      });
      if (!$.ok)
        throw new Error(`Ошибка при работе с бронированием: ${$.status}`);
      const j = await $.json(), D = {
        create: `✅ Бронирование для ${k.guest_name} успешно создано!`,
        update: `✅ Бронирование для ${k.guest_name} успешно обновлено!`,
        delete: `✅ Бронирование для ${k.guest_name} успешно отменено!`
      };
      e((P) => P.map(
        (z) => z.isLoading ? {
          ...z,
          isLoading: !1,
          bot_response: D[b]
        } : z
      ));
    } catch (x) {
      console.error("Ошибка при работе с бронированием:", x), e((C) => C.map(
        ($) => $.isLoading ? {
          ...$,
          isLoading: !1,
          bot_response: `❌ Не удалось выполнить операцию с бронированием: ${x.message}`
        } : $
      ));
    } finally {
      r(!1);
    }
  };
  return {
    messages: n,
    isLoading: t,
    userInput: s,
    setUserInput: o,
    loadChatHistory: i,
    handleSendMessage: a,
    handleSendMessageText: l,
    createTask: m,
    sendWhatsAppMessage: w,
    manageBooking: S,
    getWhatsAppMessages: p
  };
}, Eh = (n = {}) => {
  const { offsetTop: e = -600, offsetLeft: t = -450, embedded: r = !1 } = n, s = We(null), [o, i] = ie({ top: 0, left: 0 }), a = () => {
    if (s.current) {
      const l = s.current.getBoundingClientRect();
      if (r) {
        const u = window.innerHeight, c = window.innerWidth;
        i({
          top: u / 2 - 300,
          // Center vertically
          left: c / 2 - 210
          // Center horizontally
        });
      } else
        i({
          top: l.top + e,
          left: l.left + t
        });
    }
  };
  return Ce(() => (window.addEventListener("resize", a), a(), () => window.removeEventListener("resize", a)), [r, e, t]), {
    triggerRef: s,
    dialogPosition: o,
    updatePosition: a
  };
};
function ar() {
  return ar = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, ar.apply(null, arguments);
}
function Ch(n) {
  const e = new Uint8Array(n);
  return window.btoa(String.fromCharCode(...e));
}
function Th(n) {
  const e = window.atob(n), t = e.length, r = new Uint8Array(t);
  for (let s = 0; s < t; s++) r[s] = e.charCodeAt(s);
  return r.buffer;
}
const Wr = /* @__PURE__ */ new Map();
function bi(n, e) {
  return async (t) => {
    const r = Wr.get(n);
    if (r) return t.addModule(r);
    const s = new Blob([e], { type: "application/javascript" }), o = URL.createObjectURL(s);
    try {
      return await t.addModule(o), void Wr.set(n, o);
    } catch {
      URL.revokeObjectURL(o);
    }
    try {
      const i = `data:application/javascript;base64,${btoa(e)}`;
      await t.addModule(i), Wr.set(n, i);
    } catch {
      throw new Error(`Failed to load the ${n} worklet module. Make sure the browser supports AudioWorklets.`);
    }
  };
}
const Rh = bi("raw-audio-processor", `
const BIAS = 0x84;
const CLIP = 32635;
const encodeTable = [
  0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,
  4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
];

function encodeSample(sample) {
  let sign;
  let exponent;
  let mantissa;
  let muLawSample;
  sign = (sample >> 8) & 0x80;
  if (sign !== 0) sample = -sample;
  sample = sample + BIAS;
  if (sample > CLIP) sample = CLIP;
  exponent = encodeTable[(sample>>7) & 0xFF];
  mantissa = (sample >> (exponent+3)) & 0x0F;
  muLawSample = ~(sign | (exponent << 4) | mantissa);
  
  return muLawSample;
}

class RawAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
              
    this.port.onmessage = ({ data }) => {
      switch (data.type) {
        case "setFormat":
          this.isMuted = false;
          this.buffer = []; // Initialize an empty buffer
          this.bufferSize = data.sampleRate / 4;
          this.format = data.format;

          if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
            globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {
              this.resampler = resampler;
            });
          }
          break;
        case "setMuted":
          this.isMuted = data.isMuted;
          break;
      }
    };
  }
  process(inputs) {
    if (!this.buffer) {
      return true;
    }
    
    const input = inputs[0]; // Get the first input node
    if (input.length > 0) {
      let channelData = input[0]; // Get the first channel's data

      // Resample the audio if necessary
      if (this.resampler) {
        channelData = this.resampler.full(channelData);
      }

      // Add channel data to the buffer
      this.buffer.push(...channelData);
      // Get max volume 
      let sum = 0.0;
      for (let i = 0; i < channelData.length; i++) {
        sum += channelData[i] * channelData[i];
      }
      const maxVolume = Math.sqrt(sum / channelData.length);
      // Check if buffer size has reached or exceeded the threshold
      if (this.buffer.length >= this.bufferSize) {
        const float32Array = this.isMuted 
          ? new Float32Array(this.buffer.length)
          : new Float32Array(this.buffer);

        let encodedArray = this.format === "ulaw"
          ? new Uint8Array(float32Array.length)
          : new Int16Array(float32Array.length);

        // Iterate through the Float32Array and convert each sample to PCM16
        for (let i = 0; i < float32Array.length; i++) {
          // Clamp the value to the range [-1, 1]
          let sample = Math.max(-1, Math.min(1, float32Array[i]));

          // Scale the sample to the range [-32768, 32767]
          let value = sample < 0 ? sample * 32768 : sample * 32767;
          if (this.format === "ulaw") {
            value = encodeSample(Math.round(value));
          }

          encodedArray[i] = value;
        }

        // Send the buffered data to the main script
        this.port.postMessage([encodedArray, maxVolume]);

        // Clear the buffer after sending
        this.buffer = [];
      }
    }
    return true; // Continue processing
  }
}
registerProcessor("raw-audio-processor", RawAudioProcessor);
`);
function yi() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
class Tn {
  static async create({ sampleRate: e, format: t, preferHeadphonesForIosDevices: r }) {
    let s = null, o = null;
    try {
      const l = { sampleRate: { ideal: e }, echoCancellation: { ideal: !0 }, noiseSuppression: { ideal: !0 } };
      if (yi() && r) {
        const p = (await window.navigator.mediaDevices.enumerateDevices()).find((y) => y.kind === "audioinput" && ["airpod", "headphone", "earphone"].find((m) => y.label.toLowerCase().includes(m)));
        p && (l.deviceId = { ideal: p.deviceId });
      }
      const u = navigator.mediaDevices.getSupportedConstraints().sampleRate;
      s = new window.AudioContext(u ? { sampleRate: e } : {});
      const c = s.createAnalyser();
      u || await s.audioWorklet.addModule("https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js"), await Rh(s.audioWorklet), o = await navigator.mediaDevices.getUserMedia({ audio: l });
      const h = s.createMediaStreamSource(o), d = new AudioWorkletNode(s, "raw-audio-processor");
      return d.port.postMessage({ type: "setFormat", format: t, sampleRate: e }), h.connect(c), c.connect(d), await s.resume(), new Tn(s, c, d, o);
    } catch (l) {
      var i, a;
      throw (i = o) == null || i.getTracks().forEach((u) => u.stop()), (a = s) == null || a.close(), l;
    }
  }
  constructor(e, t, r, s) {
    this.context = void 0, this.analyser = void 0, this.worklet = void 0, this.inputStream = void 0, this.context = e, this.analyser = t, this.worklet = r, this.inputStream = s;
  }
  async close() {
    this.inputStream.getTracks().forEach((e) => e.stop()), await this.context.close();
  }
  setMuted(e) {
    this.worklet.port.postMessage({ type: "setMuted", isMuted: e });
  }
}
const Ah = bi("audio-concat-processor", `
const decodeTable = [0,132,396,924,1980,4092,8316,16764];

export function decodeSample(muLawSample) {
  let sign;
  let exponent;
  let mantissa;
  let sample;
  muLawSample = ~muLawSample;
  sign = (muLawSample & 0x80);
  exponent = (muLawSample >> 4) & 0x07;
  mantissa = muLawSample & 0x0F;
  sample = decodeTable[exponent] + (mantissa << (exponent+3));
  if (sign !== 0) sample = -sample;

  return sample;
}

class AudioConcatProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.buffers = []; // Initialize an empty buffer
    this.cursor = 0;
    this.currentBuffer = null;
    this.wasInterrupted = false;
    this.finished = false;
    
    this.port.onmessage = ({ data }) => {
      switch (data.type) {
        case "setFormat":
          this.format = data.format;
          break;
        case "buffer":
          this.wasInterrupted = false;
          this.buffers.push(
            this.format === "ulaw"
              ? new Uint8Array(data.buffer)
              : new Int16Array(data.buffer)
          );
          break;
        case "interrupt":
          this.wasInterrupted = true;
          break;
        case "clearInterrupted":
          if (this.wasInterrupted) {
            this.wasInterrupted = false;
            this.buffers = [];
            this.currentBuffer = null;
          }
      }
    };
  }
  process(_, outputs) {
    let finished = false;
    const output = outputs[0][0];
    for (let i = 0; i < output.length; i++) {
      if (!this.currentBuffer) {
        if (this.buffers.length === 0) {
          finished = true;
          break;
        }
        this.currentBuffer = this.buffers.shift();
        this.cursor = 0;
      }

      let value = this.currentBuffer[this.cursor];
      if (this.format === "ulaw") {
        value = decodeSample(value);
      }
      output[i] = value / 32768;
      this.cursor++;

      if (this.cursor >= this.currentBuffer.length) {
        this.currentBuffer = null;
      }
    }

    if (this.finished !== finished) {
      this.finished = finished;
      this.port.postMessage({ type: "process", finished });
    }

    return true; // Continue processing
  }
}

registerProcessor("audio-concat-processor", AudioConcatProcessor);
`);
class Rn {
  static async create({ sampleRate: e, format: t }) {
    let r = null;
    try {
      r = new AudioContext({ sampleRate: e });
      const o = r.createAnalyser(), i = r.createGain();
      i.connect(o), o.connect(r.destination), await Ah(r.audioWorklet);
      const a = new AudioWorkletNode(r, "audio-concat-processor");
      return a.port.postMessage({ type: "setFormat", format: t }), a.connect(i), await r.resume(), new Rn(r, o, i, a);
    } catch (o) {
      var s;
      throw (s = r) == null || s.close(), o;
    }
  }
  constructor(e, t, r, s) {
    this.context = void 0, this.analyser = void 0, this.gain = void 0, this.worklet = void 0, this.context = e, this.analyser = t, this.gain = r, this.worklet = s;
  }
  async close() {
    await this.context.close();
  }
}
function js(n) {
  return !!n.type;
}
class An {
  static async create(e) {
    let t = null;
    try {
      var r;
      const o = (r = e.origin) != null ? r : "wss://api.elevenlabs.io", i = e.signedUrl ? e.signedUrl : o + "/v1/convai/conversation?agent_id=" + e.agentId, a = ["convai"];
      e.authorization && a.push(`bearer.${e.authorization}`), t = new WebSocket(i, a);
      const l = await new Promise((y, m) => {
        t.addEventListener("open", () => {
          var w;
          const S = { type: "conversation_initiation_client_data" };
          var b, k, x, C;
          e.overrides && (S.conversation_config_override = { agent: { prompt: (b = e.overrides.agent) == null ? void 0 : b.prompt, first_message: (k = e.overrides.agent) == null ? void 0 : k.firstMessage, language: (x = e.overrides.agent) == null ? void 0 : x.language }, tts: { voice_id: (C = e.overrides.tts) == null ? void 0 : C.voiceId } }), e.customLlmExtraBody && (S.custom_llm_extra_body = e.customLlmExtraBody), e.dynamicVariables && (S.dynamic_variables = e.dynamicVariables), (w = t) == null || w.send(JSON.stringify(S));
        }, { once: !0 }), t.addEventListener("error", (w) => {
          setTimeout(() => m(w), 0);
        }), t.addEventListener("close", m), t.addEventListener("message", (w) => {
          const S = JSON.parse(w.data);
          js(S) && (S.type === "conversation_initiation_metadata" ? y(S.conversation_initiation_metadata_event) : console.warn("First received message is not conversation metadata."));
        }, { once: !0 });
      }), { conversation_id: u, agent_output_audio_format: c, user_input_audio_format: h } = l, d = Os(h ?? "pcm_16000"), p = Os(c);
      return new An(t, u, d, p);
    } catch (o) {
      var s;
      throw (s = t) == null || s.close(), o;
    }
  }
  constructor(e, t, r, s) {
    this.socket = void 0, this.conversationId = void 0, this.inputFormat = void 0, this.outputFormat = void 0, this.queue = [], this.disconnectionDetails = null, this.onDisconnectCallback = null, this.onMessageCallback = null, this.socket = e, this.conversationId = t, this.inputFormat = r, this.outputFormat = s, this.socket.addEventListener("error", (o) => {
      setTimeout(() => this.disconnect({ reason: "error", message: "The connection was closed due to a socket error.", context: o }), 0);
    }), this.socket.addEventListener("close", (o) => {
      this.disconnect(o.code === 1e3 ? { reason: "agent", context: o } : { reason: "error", message: o.reason || "The connection was closed by the server.", context: o });
    }), this.socket.addEventListener("message", (o) => {
      try {
        const i = JSON.parse(o.data);
        if (!js(i)) return;
        this.onMessageCallback ? this.onMessageCallback(i) : this.queue.push(i);
      } catch {
      }
    });
  }
  close() {
    this.socket.close();
  }
  sendMessage(e) {
    this.socket.send(JSON.stringify(e));
  }
  onMessage(e) {
    this.onMessageCallback = e, this.queue.forEach(e), this.queue = [];
  }
  onDisconnect(e) {
    this.onDisconnectCallback = e, this.disconnectionDetails && e(this.disconnectionDetails);
  }
  disconnect(e) {
    var t;
    this.disconnectionDetails || (this.disconnectionDetails = e, (t = this.onDisconnectCallback) == null || t.call(this, e));
  }
}
function Os(n) {
  const [e, t] = n.split("_");
  if (!["pcm", "ulaw"].includes(e)) throw new Error(`Invalid format: ${n}`);
  const r = parseInt(t);
  if (isNaN(r)) throw new Error(`Invalid sample rate: ${t}`);
  return { format: e, sampleRate: r };
}
const Ph = { clientTools: {} }, $h = { onConnect: () => {
}, onDebug: () => {
}, onDisconnect: () => {
}, onError: () => {
}, onMessage: () => {
}, onAudio: () => {
}, onModeChange: () => {
}, onStatusChange: () => {
}, onCanSendFeedbackChange: () => {
} };
class Pn {
  static async startSession(e) {
    var t;
    const r = ar({}, Ph, $h, e);
    r.onStatusChange({ status: "connecting" }), r.onCanSendFeedbackChange({ canSendFeedback: !1 });
    let s = null, o = null, i = null, a = null, l = null;
    if ((t = e.useWakeLock) == null || t) try {
      l = await navigator.wakeLock.request("screen");
    } catch {
    }
    try {
      var u, c;
      a = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      const b = (u = e.connectionDelay) != null ? u : { default: 0, android: 3e3 };
      let k = b.default;
      var h;
      if (/android/i.test(navigator.userAgent)) k = (h = b.android) != null ? h : k;
      else if (yi()) {
        var d;
        k = (d = b.ios) != null ? d : k;
      }
      return k > 0 && await new Promise((x) => setTimeout(x, k)), o = await An.create(e), [s, i] = await Promise.all([Tn.create(ar({}, o.inputFormat, { preferHeadphonesForIosDevices: e.preferHeadphonesForIosDevices })), Rn.create(o.outputFormat)]), (c = a) == null || c.getTracks().forEach((x) => x.stop()), a = null, new Pn(r, o, s, i, l);
    } catch (b) {
      var p, y, m, w;
      r.onStatusChange({ status: "disconnected" }), (p = a) == null || p.getTracks().forEach((k) => k.stop()), (y = o) == null || y.close(), await ((m = s) == null ? void 0 : m.close()), await ((w = i) == null ? void 0 : w.close());
      try {
        var S;
        await ((S = l) == null ? void 0 : S.release()), l = null;
      } catch {
      }
      throw b;
    }
  }
  constructor(e, t, r, s, o) {
    var i = this;
    this.options = void 0, this.connection = void 0, this.input = void 0, this.output = void 0, this.wakeLock = void 0, this.lastInterruptTimestamp = 0, this.mode = "listening", this.status = "connecting", this.inputFrequencyData = void 0, this.outputFrequencyData = void 0, this.volume = 1, this.currentEventId = 1, this.lastFeedbackEventId = 1, this.canSendFeedback = !1, this.endSession = () => this.endSessionWithDetails({ reason: "user" }), this.endSessionWithDetails = async function(a) {
      if (i.status === "connected" || i.status === "connecting") {
        i.updateStatus("disconnecting");
        try {
          var l;
          await ((l = i.wakeLock) == null ? void 0 : l.release()), i.wakeLock = null;
        } catch {
        }
        i.connection.close(), await i.input.close(), await i.output.close(), i.updateStatus("disconnected"), i.options.onDisconnect(a);
      }
    }, this.updateMode = (a) => {
      a !== this.mode && (this.mode = a, this.options.onModeChange({ mode: a }));
    }, this.updateStatus = (a) => {
      a !== this.status && (this.status = a, this.options.onStatusChange({ status: a }));
    }, this.updateCanSendFeedback = () => {
      const a = this.currentEventId !== this.lastFeedbackEventId;
      this.canSendFeedback !== a && (this.canSendFeedback = a, this.options.onCanSendFeedbackChange({ canSendFeedback: a }));
    }, this.onMessage = async function(a) {
      switch (a.type) {
        case "interruption":
          return a.interruption_event && (i.lastInterruptTimestamp = a.interruption_event.event_id), void i.fadeOutAudio();
        case "agent_response":
          return void i.options.onMessage({ source: "ai", message: a.agent_response_event.agent_response });
        case "user_transcript":
          return void i.options.onMessage({ source: "user", message: a.user_transcription_event.user_transcript });
        case "internal_tentative_agent_response":
          return void i.options.onDebug({ type: "tentative_agent_response", response: a.tentative_agent_response_internal_event.tentative_agent_response });
        case "client_tool_call":
          if (i.options.clientTools.hasOwnProperty(a.client_tool_call.tool_name)) try {
            var l;
            const u = (l = await i.options.clientTools[a.client_tool_call.tool_name](a.client_tool_call.parameters)) != null ? l : "Client tool execution successful.", c = typeof u == "object" ? JSON.stringify(u) : String(u);
            i.connection.sendMessage({ type: "client_tool_result", tool_call_id: a.client_tool_call.tool_call_id, result: c, is_error: !1 });
          } catch (u) {
            i.onError("Client tool execution failed with following error: " + (u == null ? void 0 : u.message), { clientToolName: a.client_tool_call.tool_name }), i.connection.sendMessage({ type: "client_tool_result", tool_call_id: a.client_tool_call.tool_call_id, result: "Client tool execution failed: " + (u == null ? void 0 : u.message), is_error: !0 });
          }
          else {
            if (i.options.onUnhandledClientToolCall) return void i.options.onUnhandledClientToolCall(a.client_tool_call);
            i.onError(`Client tool with name ${a.client_tool_call.tool_name} is not defined on client`, { clientToolName: a.client_tool_call.tool_name }), i.connection.sendMessage({ type: "client_tool_result", tool_call_id: a.client_tool_call.tool_call_id, result: `Client tool with name ${a.client_tool_call.tool_name} is not defined on client`, is_error: !0 });
          }
          return;
        case "audio":
          return void (i.lastInterruptTimestamp <= a.audio_event.event_id && (i.options.onAudio(a.audio_event.audio_base_64), i.addAudioBase64Chunk(a.audio_event.audio_base_64), i.currentEventId = a.audio_event.event_id, i.updateCanSendFeedback(), i.updateMode("speaking")));
        case "ping":
          return void i.connection.sendMessage({ type: "pong", event_id: a.ping_event.event_id });
        default:
          return void i.options.onDebug(a);
      }
    }, this.onInputWorkletMessage = (a) => {
      this.status === "connected" && this.connection.sendMessage({ user_audio_chunk: Ch(a.data[0].buffer) });
    }, this.onOutputWorkletMessage = ({ data: a }) => {
      a.type === "process" && this.updateMode(a.finished ? "listening" : "speaking");
    }, this.addAudioBase64Chunk = (a) => {
      this.output.gain.gain.value = this.volume, this.output.worklet.port.postMessage({ type: "clearInterrupted" }), this.output.worklet.port.postMessage({ type: "buffer", buffer: Th(a) });
    }, this.fadeOutAudio = () => {
      this.updateMode("listening"), this.output.worklet.port.postMessage({ type: "interrupt" }), this.output.gain.gain.exponentialRampToValueAtTime(1e-4, this.output.context.currentTime + 2), setTimeout(() => {
        this.output.gain.gain.value = this.volume, this.output.worklet.port.postMessage({ type: "clearInterrupted" });
      }, 2e3);
    }, this.onError = (a, l) => {
      console.error(a, l), this.options.onError(a, l);
    }, this.calculateVolume = (a) => {
      if (a.length === 0) return 0;
      let l = 0;
      for (let u = 0; u < a.length; u++) l += a[u] / 255;
      return l /= a.length, l < 0 ? 0 : l > 1 ? 1 : l;
    }, this.getId = () => this.connection.conversationId, this.isOpen = () => this.status === "connected", this.setVolume = ({ volume: a }) => {
      this.volume = a;
    }, this.setMicMuted = (a) => {
      this.input.setMuted(a);
    }, this.getInputByteFrequencyData = () => (this.inputFrequencyData != null || (this.inputFrequencyData = new Uint8Array(this.input.analyser.frequencyBinCount)), this.input.analyser.getByteFrequencyData(this.inputFrequencyData), this.inputFrequencyData), this.getOutputByteFrequencyData = () => (this.outputFrequencyData != null || (this.outputFrequencyData = new Uint8Array(this.output.analyser.frequencyBinCount)), this.output.analyser.getByteFrequencyData(this.outputFrequencyData), this.outputFrequencyData), this.getInputVolume = () => this.calculateVolume(this.getInputByteFrequencyData()), this.getOutputVolume = () => this.calculateVolume(this.getOutputByteFrequencyData()), this.sendFeedback = (a) => {
      this.canSendFeedback ? (this.connection.sendMessage({ type: "feedback", score: a ? "like" : "dislike", event_id: this.currentEventId }), this.lastFeedbackEventId = this.currentEventId, this.updateCanSendFeedback()) : console.warn(this.lastFeedbackEventId === 0 ? "Cannot send feedback: the conversation has not started yet." : "Cannot send feedback: feedback has already been sent for the current response.");
    }, this.sendContextualUpdate = (a) => {
      this.connection.sendMessage({ type: "contextual_update", text: a });
    }, this.sendUserMessage = (a) => {
      this.connection.sendMessage({ type: "user_message", text: a });
    }, this.sendUserActivity = () => {
      this.connection.sendMessage({ type: "user_activity" });
    }, this.options = e, this.connection = t, this.input = r, this.output = s, this.wakeLock = o, this.options.onConnect({ conversationId: t.conversationId }), this.connection.onDisconnect(this.endSessionWithDetails), this.connection.onMessage(this.onMessage), this.input.worklet.port.onmessage = this.onInputWorkletMessage, this.output.worklet.port.onmessage = this.onOutputWorkletMessage, this.updateStatus("connected");
  }
}
function ln() {
  return ln = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, ln.apply(null, arguments);
}
const jh = ["micMuted", "volume"];
function Oh(n = {}) {
  const { micMuted: e, volume: t } = n, r = function(d, p) {
    if (d == null) return {};
    var y = {};
    for (var m in d) if ({}.hasOwnProperty.call(d, m)) {
      if (p.includes(m)) continue;
      y[m] = d[m];
    }
    return y;
  }(n, jh), s = We(null), o = We(null), [i, a] = ie("disconnected"), [l, u] = ie(!1), [c, h] = ie("listening");
  return Ce(() => {
    var d;
    e !== void 0 && (s == null || (d = s.current) == null || d.setMicMuted(e));
  }, [e]), Ce(() => {
    var d;
    t !== void 0 && (s == null || (d = s.current) == null || d.setVolume({ volume: t }));
  }, [t]), Ce(() => () => {
    var d;
    (d = s.current) == null || d.endSession();
  }, []), { startSession: async (d) => {
    var p;
    if ((p = s.current) != null && p.isOpen()) return s.current.getId();
    if (o.current) return (await o.current).getId();
    try {
      return o.current = Pn.startSession(ln({}, r ?? {}, d ?? {}, { onModeChange: ({ mode: y }) => {
        h(y);
      }, onStatusChange: ({ status: y }) => {
        a(y);
      }, onCanSendFeedbackChange: ({ canSendFeedback: y }) => {
        u(y);
      } })), s.current = await o.current, e !== void 0 && s.current.setMicMuted(e), t !== void 0 && s.current.setVolume({ volume: t }), s.current.getId();
    } finally {
      o.current = null;
    }
  }, endSession: async () => {
    const d = s.current;
    s.current = null, await (d == null ? void 0 : d.endSession());
  }, setVolume: ({ volume: d }) => {
    var p;
    (p = s.current) == null || p.setVolume({ volume: d });
  }, getInputByteFrequencyData: () => {
    var d;
    return (d = s.current) == null ? void 0 : d.getInputByteFrequencyData();
  }, getOutputByteFrequencyData: () => {
    var d;
    return (d = s.current) == null ? void 0 : d.getOutputByteFrequencyData();
  }, getInputVolume: () => {
    var d, p;
    return (d = (p = s.current) == null ? void 0 : p.getInputVolume()) != null ? d : 0;
  }, getOutputVolume: () => {
    var d, p;
    return (d = (p = s.current) == null ? void 0 : p.getOutputVolume()) != null ? d : 0;
  }, sendFeedback: (d) => {
    var p;
    (p = s.current) == null || p.sendFeedback(d);
  }, getId: () => {
    var d;
    return (d = s.current) == null ? void 0 : d.getId();
  }, sendContextualUpdate: (d) => {
    var p;
    (p = s.current) == null || p.sendContextualUpdate(d);
  }, sendUserMessage: (d) => {
    var p;
    (p = s.current) == null || p.sendUserMessage(d);
  }, sendUserActivity: () => {
    var d;
    (d = s.current) == null || d.sendUserActivity();
  }, status: i, canSendFeedback: l, micMuted: e, isSpeaking: c === "speaking" };
}
const Ih = ({
  embeddedMode: n = !1
}) => {
  const [e, t] = ie(!1), [r, s] = ie(!1), [o, i] = ie(!1), [a, l] = ie(!1), [u, c] = ie(0), [h, d] = ie("");
  We(!1);
  const p = (_) => {
    let E = _.replace(/\D/g, "");
    return E.startsWith("8") && E.length === 11 && (E = "7" + E.substring(1)), E.length === 10 && (E = "7" + E), console.log(`Отформатированный номер телефона: ${E}`), E;
  }, y = async (_, E) => {
    try {
      let I = "";
      const { data: V } = await ae.from("bookings").select("guest_name").eq("guest_phone", _).order("created_at", { ascending: !1 }).limit(1);
      V && V.length > 0 && (I = V[0].guest_name);
      let F = `Здравствуйте${I ? ", " + I : ""}!`;
      return E ? E.toLowerCase().includes("музык") ? F += " Пожалуйста, выключите музыку. Спасибо за понимание." : E.toLowerCase().includes("шум") ? F += " Пожалуйста, соблюдайте тишину. Спасибо за понимание." : E.toLowerCase().includes("уборк") ? F += " Сообщаем, что скоро будет проведена уборка в вашем номере." : E.toLowerCase().includes("выезд") || E.toLowerCase().includes("выселени") ? F += " Напоминаем о выезде до 12:00. Если нужно продлить проживание, сообщите администратору." : F += " Как мы можем вам помочь?" : F += " Как мы можем вам помочь?", F;
    } catch (I) {
      return console.error("Ошибка при генерации текста сообщения:", I), "Здравствуйте! Как мы можем вам помочь?";
    }
  }, { triggerRef: m, dialogPosition: w } = Eh({
    offsetTop: -600,
    offsetLeft: -450,
    embedded: n
  }), {
    messages: S,
    isLoading: b,
    userInput: k,
    setUserInput: x,
    loadChatHistory: C,
    handleSendMessage: $,
    handleSendMessageText: j,
    sendWhatsAppMessage: D,
    createTask: P,
    manageBooking: z,
    getWhatsAppMessages: X
  } = Sh(), L = Oh({
    onConnect: () => {
      console.log("Используется Agent ID:", process.env.NEXT_PUBLIC_AGENT_ID || "bk6zd2EX7Rc7o9LnxEtY"), console.log("ElevenLabs conversation connected"), i(!0), te.success("Голосовой ассистент активирован");
    },
    onDisconnect: () => {
      console.log("ElevenLabs conversation disconnected"), i(!1), l(!1);
    },
    onMessage: (_) => {
      var E, I;
      _.type === "transcription" && ((E = _.transcription) != null && E.is_final) ? (console.log("Распознанная речь:", _.transcription.text), d(_.transcription.text)) : _.type === "generation" && ((I = _.generation) != null && I.text) ? (console.log("Ответ ассистента:", _.generation.text), l(!0)) : _.type === "debug" && console.log("ElevenLabs debug message:", _.debug);
    },
    onError: (_) => {
      console.error("Ошибка ElevenLabs:", _), te.error(`Ошибка голосового ассистента: ${_.message || "Неизвестная ошибка"}`), i(!1), l(!1);
    },
    clientTools: {
      // Возвращаем функцию создания задачи
      createTask: async (_) => {
        if (!P)
          return console.error("createTask function is not available"), "Error: Task creation function is not available";
        try {
          return await P({
            title: _.title,
            description: _.description,
            priority: _.priority,
            houseNumber: _.houseNumber
          }), "Задача успешно создана";
        } catch (E) {
          return console.error("Error creating task:", E), `Ошибка при создании задачи: ${E.message}`;
        }
      },
      // Tool to get bookings
      getBookings: async (_) => {
        try {
          console.log("Вызван метод getBookings с параметрами:", _);
          let E = ae.from("bookings").select("*");
          _.guestName && (E = E.ilike("guest_name", `%${_.guestName}%`)), _.status && (E = E.eq("status", _.status)), _.startDate && (E = E.gte("start_date", _.startDate)), _.endDate && (E = E.lte("end_date", _.endDate)), E = E.order("created_at", { ascending: !1 }).limit(_.limit || 10);
          const { data: I, error: V } = await E;
          if (V)
            throw console.error("Ошибка при получении данных бронирований:", V), V;
          return console.log(`Найдено ${(I == null ? void 0 : I.length) || 0} бронирований`), {
            success: !0,
            data: I || [],
            message: `Найдено ${(I == null ? void 0 : I.length) || 0} бронирований`
          };
        } catch (E) {
          return console.error("Ошибка при получении бронирований:", E), {
            success: !1,
            data: [],
            message: `Ошибка при получении бронирований: ${E.message || "Неизвестная ошибка"}`
          };
        }
      },
      // Tool to get WhatsApp messages
      getWhatsAppMessages: async (_) => {
        try {
          console.log("Вызван метод getWhatsAppMessages с параметрами:", _);
          let E = ae.from("whatsapp_messages").select("*");
          if (_.phone) {
            const F = _.phone.replace(/\D/g, "");
            F.length > 0 && (E = E.ilike("phone_number", `%${F}%`));
          }
          _.guestName && (E = E.ilike("guest_name", `%${_.guestName}%`)), _.showUnread && (E = E.eq("is_read", !1)), _.startDate && (E = E.gte("created_at", _.startDate)), _.endDate && (E = E.lte("created_at", _.endDate)), E = E.order("created_at", { ascending: !1 }).limit(_.limit || 10);
          const { data: I, error: V } = await E;
          if (V)
            throw console.error("Ошибка при получении сообщений WhatsApp:", V), V;
          return console.log(`Найдено ${(I == null ? void 0 : I.length) || 0} сообщений WhatsApp`), {
            success: !0,
            data: I || [],
            message: `Найдено ${(I == null ? void 0 : I.length) || 0} сообщений WhatsApp`
          };
        } catch (E) {
          return console.error("Ошибка при получении сообщений WhatsApp:", E), {
            success: !1,
            data: [],
            message: `Ошибка при получении сообщений WhatsApp: ${E.message || "Неизвестная ошибка"}`
          };
        }
      },
      // Tool to get tasks
      getTasks: async (_) => {
        try {
          console.log("Вызван метод getTasks с параметрами:", _);
          let E = ae.from("tasks").select(`
              *,
              employees (
                name,
                position
              )
            `);
          _.status && (E = E.eq("status", _.status)), _.priority && (E = E.eq("priority", _.priority)), _.houseNumber && (E = E.eq("house_number", _.houseNumber)), _.startDate && (E = E.gte("created_at", _.startDate)), _.endDate && (E = E.lte("created_at", _.endDate)), E = E.order("created_at", { ascending: !1 }).limit(_.limit || 10);
          const { data: I, error: V } = await E;
          if (V)
            throw console.error("Ошибка при получении задач:", V), V;
          let F = I || [];
          return _.employeeName && F.length > 0 && (F = F.filter(
            (ee) => {
              var ne, yt;
              return (yt = ee.employees) == null ? void 0 : yt.name.toLowerCase().includes(((ne = _.employeeName) == null ? void 0 : ne.toLowerCase()) || "");
            }
          )), console.log(`Найдено ${F.length} задач`), {
            success: !0,
            data: F,
            message: `Найдено ${F.length} задач`
          };
        } catch (E) {
          return console.error("Ошибка при получении задач:", E), {
            success: !1,
            data: [],
            message: `Ошибка при получении задач: ${E.message || "Неизвестная ошибка"}`
          };
        }
      },
      // Tool to cancel booking
      cancelBooking: async (_) => {
        try {
          if (console.log("Вызван метод cancelBooking с параметрами:", _), !_.id && !_.guestName)
            throw new Error("Необходимо указать ID бронирования или имя гостя");
          let E = ae.from("bookings").select("*");
          _.id ? E = E.eq("id", _.id) : _.guestName && (E = E.ilike("guest_name", `%${_.guestName}%`));
          const { data: I, error: V } = await E.order("created_at", { ascending: !1 }).limit(1);
          if (V)
            throw console.error("Ошибка при поиске бронирования:", V), V;
          if (!I || I.length === 0)
            return console.log("Бронирование не найдено"), {
              success: !1,
              message: "Бронирование не найдено"
            };
          console.log("Найдено бронирование для отмены:", I[0]);
          const { data: F, error: ee } = await ae.from("bookings").update({ status: "cancelled" }).eq("id", I[0].id).select();
          if (ee)
            throw console.error("Ошибка при отмене бронирования:", ee), ee;
          return console.log("Бронирование успешно отменено:", F), {
            success: !0,
            data: I[0],
            message: `Бронирование для ${I[0].guest_name} успешно отменено`
          };
        } catch (E) {
          return console.error("Ошибка при отмене бронирования:", E), {
            success: !1,
            message: `Ошибка при отмене бронирования: ${E.message || "Неизвестная ошибка"}`
          };
        }
      },
      // Функция для создания бронирования
      createBooking: async (_) => {
        try {
          if (console.log("Вызван метод createBooking с параметрами:", _), !_.room_number || !_.guest_name || !_.guest_phone || !_.start_date || !_.end_date) {
            const ne = "Для создания бронирования необходимы: номер комнаты, имя гостя, телефон, даты заезда и выезда";
            return console.error(ne), te.error(ne), {
              success: !1,
              message: ne
            };
          }
          const E = p(_.guest_phone), I = await fetch("https://fwchkusgryebslnjkoly.supabase.co/functions/v1/booking-manager", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "check-availability",
              booking: {
                room_number: _.room_number,
                start_date: _.start_date,
                end_date: _.end_date
              }
            })
          });
          if (!I.ok) {
            const ne = await I.text();
            throw te.error(`Ошибка при проверке доступности: ${I.status}`), new Error(`Ошибка при проверке доступности: ${ne}`);
          }
          if (!(await I.json()).available) {
            const ne = `Номер ${_.room_number} недоступен на указанные даты`;
            return te.error(ne), {
              success: !1,
              message: ne
            };
          }
          const F = await fetch("https://fwchkusgryebslnjkoly.supabase.co/functions/v1/booking-manager", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              action: "create",
              booking: {
                room_number: _.room_number,
                start_date: _.start_date,
                end_date: _.end_date,
                guest_name: _.guest_name,
                guest_phone: E,
                price: _.price || null,
                prepayment: _.prepayment || 0,
                comment: _.comment || "",
                source: "elevenlabs"
              }
            })
          });
          if (!F.ok) {
            const ne = await F.text();
            throw te.error(`Ошибка при создании бронирования: ${F.status}`), new Error(`Ошибка API бронирования: ${F.status} - ${ne}`);
          }
          const ee = await F.json();
          if (console.log("Результат создания бронирования:", ee), ee.success) {
            te.success(`Бронирование для ${_.guest_name} успешно создано!`);
            try {
              const ne = `Здравствуйте, ${_.guest_name}! Ваше бронирование номера ${_.room_number} на даты ${_.start_date} - ${_.end_date} успешно создано. Спасибо, что выбрали наш отель!`;
              await D(E, ne);
            } catch (ne) {
              console.error("Ошибка при отправке уведомления:", ne);
            }
          }
          return {
            success: !0,
            booking: ee.booking,
            message: `Бронирование для ${_.guest_name} успешно создано!`
          };
        } catch (E) {
          return console.error("Ошибка при создании бронирования:", E), te.error(`Ошибка при создании бронирования: ${E.message || "Неизвестная ошибка"}`), {
            success: !1,
            message: `Ошибка при создании бронирования: ${E.message || "Неизвестная ошибка"}`
          };
        }
      },
      // Tool to send WhatsApp message
      sendWhatsAppMessage: async (_) => {
        try {
          if (console.log("Вызван метод sendWhatsAppMessage с параметрами:", _), !_.phone) {
            const F = "Номер телефона обязателен для заполнения";
            return console.error(F), te.error(F), {
              success: !1,
              message: F
            };
          }
          const E = p(_.phone);
          if (console.log("Номер после форматирования:", E), E.length < 10) {
            const F = "Некорректный формат номера телефона";
            return console.error(F, { original: _.phone, cleaned: E }), te.error(F), {
              success: !1,
              message: F,
              details: { original: _.phone, cleaned: E }
            };
          }
          let I = _.message;
          return I || (console.log("Сообщение не указано, генерируем автоматически"), I = await y(E, _.context), console.log("Сгенерированное сообщение:", I)), await D(E, I);
        } catch (E) {
          return console.error("Ошибка при отправке WhatsApp сообщения:", E), te.error(`Ошибка при отправке сообщения: ${E.message || "Неизвестная ошибка"}`), {
            success: !1,
            message: `Ошибка при отправке сообщения: ${E.message || "Неизвестная ошибка"}`
          };
        }
      }
    }
  });
  Ce(() => {
    l(L.isSpeaking);
  }, [L.isSpeaking]), Ce(() => {
    if (L.isSpeaking) {
      const _ = setInterval(() => {
        c(Math.floor(Math.random() * 7) + 3);
      }, 150);
      return () => clearInterval(_);
    } else
      c(0);
  }, [L.isSpeaking]);
  const le = async () => {
    try {
      if (L.status === "connected")
        console.log("Ending ElevenLabs conversation"), await L.endSession(), i(!1), l(!1), te.info("Голосовой ассистент деактивирован");
      else {
        console.log("Starting ElevenLabs conversation");
        const _ = process.env.NEXT_PUBLIC_AGENT_ID || "bk6zd2EX7Rc7o9LnxEtY";
        console.log("Используется Agent ID:", _), await L.startSession({ agentId: _ }), te.success("Голосовой ассистент активирован");
      }
    } catch (_) {
      console.error("Error toggling ElevenLabs conversation:", _), te.error(`Ошибка активации ассистента: ${_.message || "Неизвестная ошибка"}`);
    }
  };
  Ce(() => {
    e && C();
  }, [e, C]), Ce(() => {
    if (n) {
      const _ = setTimeout(() => {
        t(!0), C();
      }, 500);
      return () => clearTimeout(_);
    }
  }, [n, C]);
  const de = (_) => {
    t(_), _ ? _ && n && setTimeout(() => {
      !o && L.status !== "connected" && le();
    }, 1e3) : (s(!1), L.status === "connected" && L.endSession());
  }, Re = () => {
    s(!r);
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs(vc, { open: e, onOpenChange: de, children: [
      n ? null : /* @__PURE__ */ v.jsx(bc, { asChild: !0, children: /* @__PURE__ */ v.jsx(Ro, { ref: m }) }),
      /* @__PURE__ */ v.jsx(
        iu,
        {
          isExpanded: r,
          toggleFullscreen: Re,
          dialogPosition: w,
          isListening: o,
          isSpeaking: a,
          voiceVolume: u,
          transcript: h,
          onCircleClick: le,
          userInput: k,
          onUserInputChange: (_) => x(_.target.value),
          onSendMessage: $,
          messages: S,
          isLoading: b,
          createTask: P
        }
      )
    ] }),
    n && /* @__PURE__ */ v.jsx("div", { style: { position: "fixed", bottom: "-100px", right: "-100px", visibility: "hidden" }, children: /* @__PURE__ */ v.jsx("button", { ref: m, children: "Hidden Trigger" }) })
  ] });
};
class Lh extends HTMLElement {
  constructor() {
    super();
    G(this, "shadow");
    G(this, "container");
    G(this, "root", null);
    this.shadow = this.attachShadow({ mode: "open" }), this.container = document.createElement("div"), this.container.setAttribute("class", "voice-assistant-container"), this.shadow.appendChild(this.container);
    const t = document.createElement("style");
    t.textContent = `
      .voice-assistant-container {
        position: relative;
        z-index: 9999;
      }
      
      /* Import fonts and base styles */
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    `, this.shadow.appendChild(t);
  }
  connectedCallback() {
    const t = this.getAttribute("agent-id") || "bk6zd2EX7Rc7o9LnxEtY", r = document.createElement("link");
    r.setAttribute("rel", "stylesheet"), r.setAttribute("href", "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"), this.shadow.appendChild(r);
    const s = document.createElement("link");
    s.setAttribute("rel", "stylesheet"), s.setAttribute("href", "https://elevenlabs.io/convai-widget/styles.css"), this.shadow.appendChild(s), window.env = {
      ...window.env,
      NEXT_PUBLIC_AGENT_ID: t
    };
    try {
      this.root = Hr(this.container), this.root.render(
        /* @__PURE__ */ v.jsx(_e.StrictMode, { children: /* @__PURE__ */ v.jsx(Ih, { embeddedMode: !0 }) })
      );
    } catch (o) {
      console.error("Error rendering voice assistant:", o);
    }
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.define("voice-assistant", Lh);
console.log("Voice Assistant Widget initialized");
const Qh = "voice-assistant";
export {
  Uh as g,
  Qh as w
};
//# sourceMappingURL=widget-HAo-XGIf.js.map
