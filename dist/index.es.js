import le, { useState as q, useRef as de, useEffect as ue, useMemo as be, useCallback as L } from "react";
import { Circle as xe, Group as ge, Rect as pe, Text as re, Arrow as fe, Stage as ye, Layer as we } from "react-konva";
import { create as ke } from "zustand";
import Ee from "konva";
var J = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function je() {
  if (ne) return D;
  ne = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(i, r, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), r.key !== void 0 && (c = "" + r.key), "key" in r) {
      s = {};
      for (var l in r)
        l !== "key" && (s[l] = r[l]);
    } else s = r;
    return r = s.ref, {
      $$typeof: e,
      type: i,
      key: c,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return D.Fragment = n, D.jsx = o, D.jsxs = o, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oe;
function ve() {
  return oe || (oe = 1, process.env.NODE_ENV !== "production" && function() {
    function e(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === T ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case x:
          return "Fragment";
        case A:
          return "Profiler";
        case N:
          return "StrictMode";
        case S:
          return "Suspense";
        case O:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case b:
            return "Portal";
          case w:
            return (t.displayName || "Context") + ".Provider";
          case W:
            return (t._context.displayName || "Context") + ".Consumer";
          case k:
            var d = t.render;
            return t = t.displayName, t || (t = d.displayName || d.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case B:
            return d = t.displayName || null, d !== null ? d : e(t.type) || "Memo";
          case I:
            d = t._payload, t = t._init;
            try {
              return e(t(d));
            } catch {
            }
        }
      return null;
    }
    function n(t) {
      return "" + t;
    }
    function o(t) {
      try {
        n(t);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var h = d.error, p = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return h.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), n(t);
      }
    }
    function i(t) {
      if (t === x) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === I)
        return "<...>";
      try {
        var d = e(t);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var t = E.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(t) {
      if (P.call(t, "key")) {
        var d = Object.getOwnPropertyDescriptor(t, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function l(t, d) {
      function h() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: h,
        configurable: !0
      });
    }
    function a() {
      var t = e(this.type);
      return Q[t] || (Q[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function f(t, d, h, p, _, C, $, X) {
      return h = C.ref, t = {
        $$typeof: m,
        type: t,
        key: d,
        props: C,
        _owner: _
      }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: a
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function g(t, d, h, p, _, C, $, X) {
      var y = d.children;
      if (y !== void 0)
        if (p)
          if (Y(y)) {
            for (p = 0; p < y.length; p++)
              v(y[p]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(y);
      if (P.call(d, "key")) {
        y = e(t);
        var M = Object.keys(d).filter(function(he) {
          return he !== "key";
        });
        p = 0 < M.length ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}", te[y + p] || (M = 0 < M.length ? "{" + M.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          y,
          M,
          y
        ), te[y + p] = !0);
      }
      if (y = null, h !== void 0 && (o(h), y = "" + h), c(d) && (o(d.key), y = "" + d.key), "key" in d) {
        h = {};
        for (var z in d)
          z !== "key" && (h[z] = d[z]);
      } else h = d;
      return y && l(
        h,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), f(
        t,
        y,
        C,
        _,
        r(),
        h,
        $,
        X
      );
    }
    function v(t) {
      typeof t == "object" && t !== null && t.$$typeof === m && t._store && (t._store.validated = 1);
    }
    var j = le, m = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), w = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), E = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, Y = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var Z, Q = {}, K = j["react-stack-bottom-frame"].bind(
      j,
      s
    )(), ee = U(i(s)), te = {};
    F.Fragment = x, F.jsx = function(t, d, h, p, _) {
      var C = 1e4 > E.recentlyCreatedOwnerStacks++;
      return g(
        t,
        d,
        h,
        !1,
        p,
        _,
        C ? Error("react-stack-top-frame") : K,
        C ? U(i(t)) : ee
      );
    }, F.jsxs = function(t, d, h, p, _) {
      var C = 1e4 > E.recentlyCreatedOwnerStacks++;
      return g(
        t,
        d,
        h,
        !0,
        p,
        _,
        C ? Error("react-stack-top-frame") : K,
        C ? U(i(t)) : ee
      );
    };
  }()), F;
}
var se;
function Re() {
  return se || (se = 1, process.env.NODE_ENV === "production" ? J.exports = je() : J.exports = ve()), J.exports;
}
var u = Re();
const ie = (e) => Symbol.iterator in e, ae = (e) => (
  // HACK: avoid checking entries type
  "entries" in e
), ce = (e, n) => {
  const o = e instanceof Map ? e : new Map(e.entries()), i = n instanceof Map ? n : new Map(n.entries());
  if (o.size !== i.size)
    return !1;
  for (const [r, s] of o)
    if (!Object.is(s, i.get(r)))
      return !1;
  return !0;
}, Te = (e, n) => {
  const o = e[Symbol.iterator](), i = n[Symbol.iterator]();
  let r = o.next(), s = i.next();
  for (; !r.done && !s.done; ) {
    if (!Object.is(r.value, s.value))
      return !1;
    r = o.next(), s = i.next();
  }
  return !!r.done && !!s.done;
};
function Ce(e, n) {
  return Object.is(e, n) ? !0 : typeof e != "object" || e === null || typeof n != "object" || n === null ? !1 : !ie(e) || !ie(n) ? ce(
    { entries: () => Object.entries(e) },
    { entries: () => Object.entries(n) }
  ) : ae(e) && ae(n) ? ce(e, n) : Te(e, n);
}
function Se(e) {
  const n = le.useRef(void 0);
  return (o) => {
    const i = e(o);
    return Ce(n.current, i) ? n.current : n.current = i;
  };
}
const _e = [
  { id: "block-1", x: 100, y: 100, width: 120, height: 60, label: "obj1", icon: "home" },
  { id: "block-2", x: 300, y: 100, width: 120, height: 60, label: "obj2", icon: "settings" },
  { id: "block-3", x: 500, y: 100, width: 120, height: 60, label: "obj3", icon: "memory" },
  { id: "block-4", x: 300, y: 250, width: 120, height: 60, label: "obj4", icon: "help" },
  { id: "block-5", x: 100, y: 250, width: 120, height: 60, label: "obj5", icon: "cancel" },
  { id: "block-6", x: 500, y: 250, width: 120, height: 60, label: "obj6", icon: "data_object" }
], me = ke((e) => ({
  blocks: _e,
  connections: [],
  selectedBlockId: null,
  globalBlockColor: "#ffffff",
  actions: {
    setSelectedBlock: (n) => e({ selectedBlockId: n }),
    setDiagram: ({ elements: n, connections: o }) => e({
      blocks: n,
      connections: o,
      selectedBlockId: null
    }),
    updateBlockPosition: (n, o, i) => e((r) => {
      const s = r.blocks.findIndex((l) => l.id === n);
      if (s === -1) return r;
      const c = [...r.blocks];
      return c[s] = { ...c[s], x: o, y: i }, { blocks: c };
    }),
    setGlobalBlockColor: (n) => e((o) => ({
      globalBlockColor: n,
      blocks: o.blocks.map((i) => ({ ...i, color: n }))
    })),
    addConnection: (n) => e((o) => ({
      connections: [...o.connections, n]
    })),
    removeConnectionFrom: (n, o) => e((i) => ({
      connections: i.connections.filter(
        (r) => !(r.from.blockId === n && r.from.direction === o)
      )
    })),
    removeBlockAndConnections: (n) => e((o) => ({
      blocks: o.blocks.filter((i) => i.id !== n),
      connections: o.connections.filter(
        (i) => i.from.blockId !== n && i.to.blockId !== n
      ),
      selectedBlockId: null
    }))
  }
})), H = () => me(
  Se((e) => ({
    blocks: e.blocks,
    connections: e.connections,
    selectedBlockId: e.selectedBlockId,
    globalBlockColor: e.globalBlockColor
  }))
), V = () => me((e) => e.actions), Oe = ({ removeConnectionFrom: e }) => {
  const [n, o] = q(null), [i, r] = q(null);
  return {
    connection: n,
    hoveredTargetId: i,
    setHoveredTargetId: r,
    startConnection: (a, f, g, v) => {
      e(a, f), o({
        fromBlockId: a,
        fromDirection: f,
        startX: g,
        startY: v,
        currentX: g,
        currentY: v
      });
    },
    updatePosition: (a, f) => {
      n && o({
        ...n,
        currentX: a,
        currentY: f
      });
    },
    resetConnection: () => {
      o(null), r(null);
    }
  };
}, Ie = (e) => {
  const { x: n, y: o, width: i, height: r } = e;
  return [
    { blockId: e.id, direction: "top", x: n + i / 2, y: o },
    { blockId: e.id, direction: "bottom", x: n + i / 2, y: o + r },
    { blockId: e.id, direction: "left", x: n, y: o + r / 2 },
    { blockId: e.id, direction: "right", x: n + i, y: o + r / 2 }
  ];
}, G = (e, n) => {
  const { x: o, y: i, width: r, height: s } = e;
  switch (n) {
    case "top":
      return { x: o + r / 2, y: i };
    case "bottom":
      return { x: o + r / 2, y: i + s };
    case "left":
      return { x: o, y: i + s / 2 };
    case "right":
      return { x: o + r, y: i + s / 2 };
  }
}, Pe = (e, n) => e.x >= n.x && e.x <= n.x + n.width && e.y >= n.y && e.y <= n.y + n.height, Ne = (e, n, o, i, r) => {
  const s = [
    [r.x, r.y, r.x + r.width, r.y],
    // top
    [r.x, r.y + r.height, r.x + r.width, r.y + r.height],
    // bottom
    [r.x, r.y, r.x, r.y + r.height],
    // left
    [r.x + r.width, r.y, r.x + r.width, r.y + r.height]
    // right
  ], c = (l, a, f, g, v, j, m, b) => {
    const x = (f - l) * (b - j) - (g - a) * (m - v);
    if (x === 0) return !1;
    const N = ((b - j) * (m - l) + (v - m) * (b - a)) / x, A = ((a - g) * (m - l) + (f - l) * (b - a)) / x;
    return 0 < N && N < 1 && 0 < A && A < 1;
  };
  return s.some(([l, a, f, g]) => c(e, n, o, i, l, a, f, g));
}, Ae = ({ x: e, y: n, visible: o, onMouseDown: i }) => {
  const r = de(null);
  return ue(() => {
    r.current && r.current.to({
      opacity: o ? 1 : 0,
      duration: 0.25,
      easing: Ee.Easings.EaseInOut
    });
  }, [o]), /* @__PURE__ */ u.jsx(
    xe,
    {
      ref: r,
      x: e,
      y: n,
      radius: 6,
      fill: "#abc9f8",
      stroke: "#3B82F6",
      strokeWidth: 2,
      shadowBlur: 6,
      opacity: 0,
      scale: { x: 1.1, y: 1.1 },
      onMouseEnter: (s) => {
        var l;
        s.target.to({ scaleX: 1.3, scaleY: 1.3, duration: 0.1 });
        const c = (l = s.target.getStage()) == null ? void 0 : l.container();
        c && (c.style.cursor = "pointer");
      },
      onMouseLeave: (s) => {
        var l;
        s.target.to({ scaleX: 1.1, scaleY: 1.1, duration: 0.1 });
        const c = (l = s.target.getStage()) == null ? void 0 : l.container();
        c && (c.style.cursor = "default");
      },
      onMouseDown: (s) => {
        s.cancelBubble = !0;
        const c = s.target.getAbsolutePosition().x, l = s.target.getAbsolutePosition().y;
        i(c, l);
      }
    }
  );
}, Be = ({
  block: e,
  onDragEnd: n,
  onStartConnect: o,
  onSelect: i,
  selected: r,
  isConnecting: s = !1,
  isTarget: c = !1,
  isSource: l = !1,
  alwaysShowPoints: a = !1
}) => {
  const [f, g] = q(!1), v = [
    { dir: "top", x: e.x + e.width / 2, y: e.y },
    { dir: "bottom", x: e.x + e.width / 2, y: e.y + e.height },
    { dir: "left", x: e.x, y: e.y + e.height / 2 },
    { dir: "right", x: e.x + e.width, y: e.y + e.height / 2 }
  ], j = () => a || l || c || f && !s;
  return /* @__PURE__ */ u.jsxs(
    ge,
    {
      onMouseEnter: () => g(!0),
      onMouseLeave: () => g(!1),
      onClick: () => i == null ? void 0 : i(e.id),
      draggable: !s,
      x: e.x,
      y: e.y,
      onDragMove: (m) => {
        var x;
        const b = (x = m.target.getStage()) == null ? void 0 : x.container();
        b && (b.style.cursor = "grab"), n(e.id, m.target.x(), m.target.y());
      },
      onDragEnd: (m) => {
        var x;
        const b = (x = m.target.getStage()) == null ? void 0 : x.container();
        b && (b.style.cursor = "default"), n(e.id, m.target.x(), m.target.y());
      },
      children: [
        /* @__PURE__ */ u.jsx(
          pe,
          {
            width: e.width,
            height: e.height,
            fill: e.color || "#ffffff",
            stroke: r ? "#bbbbbb" : s ? "#4B5563" : void 0,
            cornerRadius: 7,
            shadowBlur: 2,
            strokeWidth: r || s ? 2 : 0
          }
        ),
        /* @__PURE__ */ u.jsx(
          re,
          {
            text: e.icon,
            fontSize: 24,
            x: e.width / 2 - 10,
            y: e.height / 2 - 20,
            fontFamily: "Material Icons",
            fill: "#4B5563"
          }
        ),
        /* @__PURE__ */ u.jsx(
          re,
          {
            text: e.label,
            fontSize: 14,
            x: e.width / 2 - e.label.length * 3.5,
            y: e.height / 2 + 10,
            align: "center",
            fill: "#4B5563"
          }
        ),
        j() && v.map((m) => /* @__PURE__ */ u.jsx(
          Ae,
          {
            x: m.x - e.x,
            y: m.y - e.y,
            visible: j(),
            onMouseDown: (b, x) => o(e.id, m.dir, b, x)
          },
          m.dir
        ))
      ]
    }
  );
}, Me = ({
  blocks: e,
  connectionFromBlockId: n,
  hoveredTargetId: o,
  isConnecting: i,
  onDragEnd: r,
  onStartConnect: s,
  isBlockConnected: c,
  selectedBlockId: l,
  onSelect: a
}) => /* @__PURE__ */ u.jsx(u.Fragment, { children: e.map((f) => /* @__PURE__ */ u.jsx(
  Be,
  {
    block: f,
    onDragEnd: r,
    onStartConnect: s,
    isConnecting: i,
    isSource: n === f.id,
    isTarget: o === f.id,
    alwaysShowPoints: c(f.id),
    selected: l === f.id,
    onSelect: a
  },
  f.id
)) }), De = () => /* @__PURE__ */ u.jsxs("div", { className: "absolute bottom-4 left-4 text-sm text-gray-800 bg-white border border-gray-300 px-3 py-1 rounded shadow-md pointer-events-none select-none", children: [
  "Press ",
  /* @__PURE__ */ u.jsx("kbd", { className: "font-mono text-xs bg-gray-100 border px-1 rounded", children: "Delete" }),
  " or",
  " ",
  /* @__PURE__ */ u.jsx("kbd", { className: "font-mono text-xs bg-gray-100 border px-1 rounded", children: "Backspace" }),
  " to remove a block"
] }), Fe = ({ connections: e, blocks: n }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: e.map((o, i) => {
  const r = n.find((a) => a.id === o.from.blockId), s = n.find((a) => a.id === o.to.blockId);
  if (!r || !s) return null;
  const c = G(r, o.from.direction), l = G(s, o.to.direction);
  return /* @__PURE__ */ u.jsx(
    fe,
    {
      points: [c.x, c.y, l.x, l.y],
      stroke: "#3B82F6",
      strokeWidth: 2,
      pointerLength: 10,
      pointerWidth: 10,
      lineCap: "round",
      lineJoin: "round"
    },
    i
  );
}) }), Ye = () => {
  const { blocks: e, connections: n, selectedBlockId: o } = H(), {
    updateBlockPosition: i,
    addConnection: r,
    removeConnectionFrom: s,
    setSelectedBlock: c,
    removeBlockAndConnections: l
  } = V(), {
    connection: a,
    hoveredTargetId: f,
    setHoveredTargetId: g,
    startConnection: v,
    updatePosition: j,
    resetConnection: m
  } = Oe({ removeConnectionFrom: s }), b = be(() => e.flatMap(Ie), [e]), x = L(
    (w) => {
      var B;
      if (!a) return;
      const k = (B = w.target) == null ? void 0 : B.getStage(), S = k == null ? void 0 : k.getPointerPosition();
      if (!S) return;
      j(S.x, S.y);
      const O = e.find(
        (I) => I.id !== a.fromBlockId && Pe(S, I)
      );
      g((O == null ? void 0 : O.id) || null);
    },
    [a, e, j, g]
  ), N = L(() => {
    if (!a) return;
    const { fromBlockId: w, fromDirection: k, startX: S, startY: O, currentX: B, currentY: I } = a;
    let R = b.find((T) => {
      const E = T.x - B, P = T.y - I;
      return Math.sqrt(E * E + P * P) < 12 && T.blockId !== w;
    });
    if (!R && f) {
      const T = e.find((E) => E.id === f);
      if (T) {
        const E = ["top", "bottom", "left", "right"].filter(
          (Y) => Y !== k
        )[0], P = G(T, E);
        R = {
          blockId: T.id,
          direction: E,
          ...P
        };
      }
    }
    if (R) {
      const T = e.find((E) => E.id === (R == null ? void 0 : R.blockId));
      if (T) {
        if (Ne(
          S,
          O,
          R.x,
          R.y,
          T
        )) {
          m();
          return;
        }
        r({
          from: {
            blockId: w,
            direction: k
          },
          to: {
            blockId: R.blockId,
            direction: R.direction
          }
        });
      }
    }
    m();
  }, [a, b, f, e, r, m]), A = L(
    (w) => {
      w.target === w.target.getStage() && c(null);
    },
    [c]
  ), W = L(
    (w) => n.some((k) => k.from.blockId === w || k.to.blockId === w),
    [n]
  );
  return ue(() => {
    const w = (k) => {
      (k.key === "Delete" || k.key === "Backspace") && o && l(o);
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [o, l]), /* @__PURE__ */ u.jsxs("div", { className: "relative w-full h-screen", children: [
    /* @__PURE__ */ u.jsx(
      ye,
      {
        width: window.innerWidth,
        height: window.innerHeight,
        onMouseMove: x,
        onMouseUp: N,
        onMouseDown: A,
        children: /* @__PURE__ */ u.jsxs(we, { children: [
          /* @__PURE__ */ u.jsx(
            Me,
            {
              blocks: e,
              connectionFromBlockId: (a == null ? void 0 : a.fromBlockId) ?? null,
              hoveredTargetId: f,
              isConnecting: !!a,
              onDragEnd: i,
              onStartConnect: v,
              isBlockConnected: W,
              selectedBlockId: o,
              onSelect: c
            }
          ),
          /* @__PURE__ */ u.jsx(Fe, { connections: n, blocks: e }),
          a && /* @__PURE__ */ u.jsx(
            fe,
            {
              points: [
                a.startX,
                a.startY,
                a.currentX,
                a.currentY
              ],
              stroke: "#4B5563",
              strokeWidth: 2,
              lineCap: "round",
              lineJoin: "round"
            }
          )
        ] })
      }
    ),
    o && /* @__PURE__ */ u.jsx(De, {})
  ] });
}, Le = () => {
  const { blocks: e, connections: n } = H(), { setDiagram: o } = V();
  return { exportToJson: () => {
    const s = {
      elements: e.map((f) => ({
        ...f,
        color: f.color || "#ffffff"
      })),
      connections: n
    }, c = new Blob([JSON.stringify(s, null, 2)], { type: "application/json" }), l = URL.createObjectURL(c), a = document.createElement("a");
    a.href = l, a.download = "diagram.json", a.click(), URL.revokeObjectURL(l);
  }, importFromJson: (s) => {
    const c = new FileReader();
    c.onload = (l) => {
      var a;
      try {
        const f = JSON.parse((a = l.target) == null ? void 0 : a.result);
        if (!Array.isArray(f.elements) || !Array.isArray(f.connections)) {
          alert("Wrong JSON structure");
          return;
        }
        o({
          elements: f.elements,
          connections: f.connections
        });
      } catch {
        alert("Error while reading JSON");
      }
    }, c.readAsText(s);
  } };
}, Je = [
  "#4F46E5",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#3B82F6",
  "#A855F7",
  "#EC4899",
  "#F97316",
  "#22D3EE",
  "#14B8A6"
], We = () => {
  const e = de(null), { exportToJson: n, importFromJson: o } = Le(), { globalBlockColor: i } = H(), { setGlobalBlockColor: r } = V();
  return /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col space-y-3 w-full", children: [
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: n,
        className: "w-full px-4 py-2 text-white border border-blue-600 rounded bg-blue-700 hover:bg-blue-800 transition-colors duration-200",
        children: "Export JSON"
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: () => {
          var s;
          return (s = e.current) == null ? void 0 : s.click();
        },
        className: "w-full px-4 py-2 text-blue-600 border border-blue-600 rounded bg-white hover:bg-blue-100 transition-colors duration-200",
        children: "Import JSON"
      }
    ),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        ref: e,
        type: "file",
        accept: "application/json",
        className: "hidden",
        onChange: (s) => {
          var l;
          const c = (l = s.target.files) == null ? void 0 : l[0];
          c && o(c);
        }
      }
    ),
    /* @__PURE__ */ u.jsxs("div", { className: "w-full p-3 border border-gray-300 rounded bg-white", children: [
      /* @__PURE__ */ u.jsx("label", { className: "text-sm block text-gray-700 mb-2", children: "Block colors:" }),
      /* @__PURE__ */ u.jsx("div", { className: "flex flex-wrap gap-2", children: Je.map((s, c) => /* @__PURE__ */ u.jsx(
        "button",
        {
          onClick: () => r(s),
          className: "relative w-6 h-6 rounded-full border-none outline-none cursor-pointer hover:opacity-70 transition-opacity",
          style: { backgroundColor: s },
          children: i === s && /* @__PURE__ */ u.jsx("span", { className: "absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold pointer-events-none", children: "✓" })
        },
        `color-${c}`
      )) })
    ] })
  ] });
}, qe = () => /* @__PURE__ */ u.jsxs("div", { className: "w-full h-screen flex overflow-hidden", children: [
  /* @__PURE__ */ u.jsx("div", { className: "w-[30%] p-4 border-r border-gray-200", children: /* @__PURE__ */ u.jsx(We, {}) }),
  /* @__PURE__ */ u.jsx("div", { className: "w-[70%] bg-gray-100 h-screen relative", children: /* @__PURE__ */ u.jsx(Ye, {}) })
] });
export {
  qe as default
};
//# sourceMappingURL=index.es.js.map
