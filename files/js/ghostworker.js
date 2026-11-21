import "./c-M6YUXHYW.js";
import { a as L, l as V } from "./c-7Q4J33FN.js";
V();
var m = self.onmessage;
var e = self.postMessage;
var B = L((f) => e.call(self, f), "post");
var y = null;
self.postMessage = (f) => {
  if (y) {
    y.push(f);
  } else {
    B(f);
  }
};
async function C(f) {
  let w = [];
  y = w;
  try {
    await m.call(self, {
      data: f,
    });
  } finally {
    y = null;
  }
  return w;
}
L(C, "forward");
var n = null;
var T = null;
var Z = null;
function t() {
  let f = T.World.first("obj_heart") || T.World.first("obj_purpleheart");
  let w =
    typeof Z.hp == "number"
      ? Z.hp
      : Array.isArray(Z.hp)
        ? (Z.hp[1] || 0) + (Z.hp[2] || 0) + (Z.hp[3] || 0)
        : 0;
  return (
    (f ? (f.x | 0) + "," + (f.y | 0) : "none") +
    "|" +
    w +
    "|" +
    T.World.list.length +
    "|" +
    (Z.mnfight | 0)
  );
}
L(t, "sig");
async function U(X) {
  if (X.cmd === "boot") {
    let Q0 = X.assets;
    if (!Q0) {
      try {
        let Q2 = await (await fetch(new URL("../assets/data.json", import.meta.url))).json();
        Q0 = {
          sprites: Q2.sprites,
          fonts: Q2.fonts,
        };
      } catch (Q3) {
        B({
          t: "booterr",
          id: X.id,
          err: "ghost worker: no sprite table (" + ((Q3 && Q3.message) || Q3) + ")",
        });
        return;
      }
    }
    let Q1 = await C({
      cmd: "boot",
      id: X.id,
      assets: Q0,
    });
    if (Q1.some((Q4) => Q4 && Q4.t === "ready")) {
      try {
        n = await H("./oracle.js", import.meta.url);
        T = await H("./gm.js", import.meta.url);
        Z = (await H("./globals.js", import.meta.url)).G;
      } catch (Q4) {
        B({
          t: "booterr",
          id: X.id,
          err: "ghost worker: " + ((Q4 && Q4.message) || Q4),
        });
        return;
      }
    }
    for (let Q5 of Q1) {
      B(Q5);
    }
    return;
  }
  if (X.cmd !== "gplan") {
    await m.call(self, {
      data: X,
    });
    return;
  }
  let q = performance.now();
  let M = {
    t: "gplan",
    id: X.id,
    epoch: X.epoch,
    rev: X.rev,
  };
  if (!n) {
    B(
      Object.assign(M, {
        err: "not booted",
      }),
    );
    return;
  }
  let D = (
    await C(
      Object.assign({}, X, {
        cmd: "advance",
      }),
    )
  ).find((Q6) => Q6 && (Q6.t === "adv" || Q6.t === "plan"));
  if (!D || D.need || D.err || D.at === undefined) {
    B(
      Object.assign(M, {
        need: D && D.need,
        err: D ? D.err : "no answer",
        wireFail: !!D && !!D.wireFail,
      }),
    );
    return;
  }
  let F = performance.now();
  let S = D.safe;
  if (X.noPlan) {
    B(
      Object.assign(M, {
        at: D.at,
        sig: D.sig,
        safe: S,
        ms: F - q,
      }),
    );
    return;
  }
  if (X.env) {
    Z.godmode = !!X.env.god;
    Z.forceAttack = X.env.force;
  }
  let N = T.World.first("obj_heart");
  let J = t();
  let x = null;
  let z = null;
  try {
    x = n.oraclePlan(X.opts || {});
  } catch (Q6) {
    z = String((Q6 && Q6.message) || Q6);
  }
  let R = t();
  if (R !== J) {
    B(
      Object.assign(M, {
        err: "plan changed the world: " + J + " -> " + R,
        need: "full",
      }),
    );
    return;
  }
  B(
    Object.assign(M, {
      at: D.at,
      sig: D.sig,
      safe: S,
      err: z,
      x0: N ? N.x : null,
      y0: N ? N.y : null,
      pos: x && x.pos ? x.pos.map((Q7) => [Q7[0], Q7[1], Q7[2] | 0]) : null,
      keys: x ? x.keys : null,
      hits: x ? x.hits | 0 : 0,
      horizon: x ? x.horizon | 0 : 0,
      mode: x ? x.mode : null,
      ms: performance.now() - q,
      adv: F - q,
    }),
  );
}
L(U, "handle");
var I = Promise.resolve();
self.onmessage = (f) => {
  let w = f.data;
  I = I.then(() => U(w)).catch((b) =>
    B({
      t: "gplan",
      id: w && w.id,
      epoch: w && w.epoch,
      err: String((b && b.message) || b),
    }),
  );
};
function H(f, o) {
  var X = new URL(f, o).href;
  var r = globalThis.__drWarm;
  return (r ? r(X) : Promise.resolve()).then(function () {
    return import(X).catch(function (q) {
      try {
        q.reload = true;
        q.what = "the game code";
      } catch (M) {}
      throw q;
    });
  });
}
