var C = Object.create;
var X = Object.defineProperty;
var V = Object.getOwnPropertyDescriptor;
var F = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf;
var B = Object.prototype.hasOwnProperty;
var O = (h0, h1, h2) =>
  h1 in h0
    ? X(h0, h1, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: h2,
      })
    : (h0[h1] = h2);
var n = (h0, h1) =>
  X(h0, "name", {
    value: h1,
    configurable: true,
  });
var P = (h0, h1, h2) => () => {
  if (h2) {
    throw h2[0];
  }
  try {
    if (h0) {
      h1 = h0((h0 = 0));
    }
    return h1;
  } catch (h3) {
    h2 = [h3];
    throw h3;
  }
};
var H = (h0, h1) => () => {
  try {
    if (!h1) {
      h0(
        (h1 = {
          exports: {},
        }).exports,
        h1,
      );
    }
    return h1.exports;
  } catch (h2) {
    h1 = 0;
    throw h2;
  }
};
var Y = (h0, h1) => {
  for (var h2 in h1) {
    X(h0, h2, {
      get: h1[h2],
      enumerable: true,
    });
  }
};
var K = (h0, h1, h2, h3) => {
  if ((h1 && typeof h1 == "object") || typeof h1 == "function") {
    for (let h4 of F(h1)) {
      if (!B.call(h0, h4) && h4 !== h2) {
        X(h0, h4, {
          get: () => h1[h4],
          enumerable: !(h3 = V(h1, h4)) || h3.enumerable,
        });
      }
    }
  }
  return h0;
};
var N = (h0, h1, h2) => {
  h2 = h0 != null ? C(S(h0)) : {};
  return K(
    h1 || !h0 || !h0.__esModule
      ? X(h2, "default", {
          value: h0,
          enumerable: true,
        })
      : h2,
    h0,
  );
};
var L = (h0, h1, h2) => O(h0, typeof h1 != "symbol" ? h1 + "" : h1, h2);
function o() {
  throw new TypeError("Assignment to constant variable.");
}
function j(h0, h1) {
  if (typeof h0 == "function") {
    G.set(h0, (G.get(h0) || "") + h1);
  }
}
function J(h0) {
  return G.get(h0) || "";
}
function Q(h0, h1) {
  if (typeof h0 == "function") {
    q.set(h0, h1);
  }
}
function R(h0) {
  if (typeof h0 == "function") {
    return q.get(h0);
  } else {
    return undefined;
  }
}
var G;
var D;
var q;
var Z = P(() => {
  n(o, "__dr_ro");
  G = new WeakMap();
  n(j, "__dr_src_reg");
  n(J, "__dr_src_get");
  D = {};
  q = new WeakMap();
  n(Q, "__dr_fsrc_reg");
  n(R, "__dr_fsrc_get");
});
export {
  n as a,
  H as b,
  Y as c,
  N as d,
  L as e,
  o as f,
  j as g,
  J as h,
  D as i,
  Q as j,
  R as k,
  Z as l,
};
