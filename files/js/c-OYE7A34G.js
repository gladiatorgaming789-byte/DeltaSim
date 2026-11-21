import { Nd as Z, Qd as N } from "./c-YU6VF6CE.js";
import { g as U } from "./c-O6GE5FYX.js";
import { Q as O, dd as V, ed as P, i as G, ob as Y } from "./c-ZEHUSSXN.js";
import { a as c, l as F } from "./c-7Q4J33FN.js";
F();
function L(R) {
  return R && typeof R == "object" && Array.isArray(R.points) && typeof R.poly == "function";
}
c(L, "isPath");
function K(R, W, B = 0) {
  if (R === null || typeof R != "object") {
    return R;
  }
  if (Array.isArray(R)) {
    let X = new Array(R.length);
    for (let A = 0; A < R.length; A++) {
      let Q = R[A];
      X[A] = B > 6 || Q === null || typeof Q != "object" ? Q : K(Q, W, B + 1);
    }
    return X;
  }
  if (R instanceof Map) {
    let j0 = new Map();
    for (let [j1, j2] of R) {
      j0.set(j1, K(j2, W, B + 1));
    }
    return j0;
  }
  if (R instanceof Set) {
    return new Set(R);
  }
  if (L(R)) {
    if (W && !W.has(R)) {
      W.set(R, {
        points: R.points.map((j3) => ({
          ...j3,
        })),
        kind: R.kind,
        closed: R.closed,
        precision: R.precision,
      });
    }
    return R;
  }
  let q = Object.getPrototypeOf(R);
  if ((q !== Object.prototype && q !== null) || B > 6) {
    return R;
  }
  let I = {};
  for (let j3 of Object.keys(R)) {
    let j4 = R[j3];
    I[j3] = j4 === null || typeof j4 != "object" ? j4 : K(j4, W, B + 1);
  }
  return I;
}
c(K, "deep");
var C = null;
function H(R) {
  let i = {};
  for (let W of Object.keys(R)) {
    let B = R[W];
    if (typeof B == "function") {
      i[W] = B;
      continue;
    }
    i[W] = K(B, C);
  }
  return i;
}
c(H, "snapInst");
function z() {
  let R = {};
  for (let i of Object.keys(U)) {
    let W = U[i];
    if (typeof W == "function") {
      R[i] = W;
      continue;
    }
    R[i] = K(W, C);
  }
  return R;
}
c(z, "snapGlobals");
function t() {
  let R = Y.list.slice();
  C = new Map();
  let i = R.map(H);
  let W = z();
  let B = C;
  C = null;
  return {
    counters: V(),
    paths: B,
    list: R,
    insts: i,
    pending: Y.pending.slice(),
    frame: Y.frame,
    spawns: Y.spawns,
    view: {
      x: Y.view.x,
      y: Y.view.y,
      live: Y.view.live,
    },
    self: Y.self,
    g: W,
    rng: {
      seed: G.seed,
      state: G.state,
      calls: G.calls,
    },
    held: {
      ...O.held,
    },
    pressed: {
      ...O.pressed,
    },
    ut: Z(),
  };
}
c(t, "snapshot");
function J(R) {
  Y.list.length = 0;
  for (let i = 0; i < R.list.length; i++) {
    let W = R.list[i];
    let B = R.insts[i];
    for (let q of Object.keys(W)) {
      if (!(q in B)) {
        delete W[q];
      }
    }
    for (let I of Object.keys(B)) {
      let X = B[I];
      W[I] = K(X, null);
    }
    Y.list.push(W);
  }
  Y.reindex();
  Y.pending.length = 0;
  for (let A of R.pending) {
    Y.pending.push(A);
  }
  Y.frame = R.frame;
  Y.spawns = R.spawns;
  if (R.view) {
    Y.view.x = R.view.x;
    Y.view.y = R.view.y;
    Y.view.live = R.view.live;
  }
  Y.self = R.self;
  for (let Q of Object.keys(U)) {
    if (!(Q in R.g)) {
      delete U[Q];
    }
  }
  for (let j0 of Object.keys(R.g)) {
    let j1 = R.g[j0];
    let j2 = U[j0];
    if (Array.isArray(j1) && j2 && j2.__raw && Array.isArray(j2.__raw)) {
      let j3 = j2.__raw;
      j3.length = 0;
      for (let j4 = 0; j4 < j1.length; j4++) {
        j3[j4] = j1[j4];
      }
      continue;
    }
    U[j0] = K(j1, null);
  }
  if (R.counters) {
    P(R.counters);
  }
  if (R.paths) {
    for (let [j5, j6] of R.paths) {
      j5.points = j6.points.map((j7) => ({
        ...j7,
      }));
      j5.kind = j6.kind;
      j5.closed = j6.closed;
      j5.precision = j6.precision;
      j5._poly = null;
    }
  }
  G.seed = R.rng.seed;
  G.state = R.rng.state;
  G.calls = R.rng.calls;
  for (let j7 of Object.keys(O.held)) {
    delete O.held[j7];
  }
  Object.assign(O.held, R.held);
  for (let j8 of Object.keys(O.pressed)) {
    delete O.pressed[j8];
  }
  Object.assign(O.pressed, R.pressed);
  N(R.ut);
}
c(J, "restore");
function l(R) {
  let i = () => {};
  let W = new Proxy(
    {},
    {
      get(I, X) {
        if (X === "canvas") {
          return {
            width: 640,
            height: 480,
          };
        } else if (X === "measureText") {
          return () => ({
            width: 0,
          });
        } else if (X === "getImageData") {
          return () => ({
            data: new Uint8ClampedArray(4),
          });
        } else if (X === "createPattern" || X === "createLinearGradient") {
          return () => null;
        } else {
          return i;
        }
      },
      set() {
        return true;
      },
    },
  );
  let B = new R(W);
  let q = {
    width: 1,
    height: 1,
    getContext: () => W,
  };
  B.headless = true;
  B.tinted = () => q;
  B.fontTinted = () => q;
  B.draw_char = function (I, X) {
    if (!this.fonts[I]) {
      return 0;
    }
    let A = this.glyph(I, X);
    if (A) {
      return A[4];
    } else {
      return 0;
    }
  };
  return B;
}
c(l, "nullGfx");
export { t as a, J as b, l as c };
