import { f as u, k as i } from "./c-VEGOCJZG.js";
import { Wg as w, Xg as s, bd as p } from "./c-HEUEF6GJ.js";
import { G as e } from "./c-S7JKZRF5.js";
import { b as M } from "./c-OYE7A34G.js";
import { g as l } from "./c-O6GE5FYX.js";
import {
  I as x,
  Nc as d,
  Q as h,
  Va as y,
  Wa as Y,
  Xb as b,
  ab as a,
  bb as o,
  dd as j,
  eb as r0,
  gb as r1,
  i as r2,
  jb as r3,
  ob as r4,
  pb as r5,
  wb as r6,
} from "./c-ZEHUSSXN.js";
import { a as r7, l as r8 } from "./c-7Q4J33FN.js";
r8();
var r9 = d().constructor;
var rr = null;
try {
  rr = p(1, 1).constructor;
} catch {}
var rB = r7((ra) => ra instanceof r9, "isPath");
var rZ = r7(() => {}, "NOOP");
var rf = [
  "CanvasPattern",
  "CanvasGradient",
  "CanvasRenderingContext2D",
  "OffscreenCanvasRenderingContext2D",
  "HTMLCanvasElement",
  "OffscreenCanvas",
  "ImageBitmap",
  "HTMLImageElement",
  "HTMLVideoElement",
  "HTMLAudioElement",
  "Path2D",
  "AudioBuffer",
  "AudioNode",
]
  .map((ra) => globalThis[ra])
  .filter((ra) => typeof ra == "function");
var rR = r7((ra) => {
  let rv = ra && ra.constructor;
  return !!rv && rv.name === "SfxVoice" && typeof ra._halt == "function" && "entry" in ra;
}, "isSfxVoice");
var rm = r7((ra) => {
  for (let rv of rf) {
    if (ra instanceof rv) {
      return true;
    }
  }
  return rR(ra);
}, "isHostRender");
var rX = [
  "./gm.js",
  "./globals.js",
  "./generated/runtime.js",
  "./battle.js",
  "./bullets.js",
  "./heart.js",
  "./text.js",
  "./backgrounds.js",
  "./jevil.js",
  "./ut_runtime.js",
  "./ch2spells.js",
];
var rc = new Map();
var rO = new Map();
var rH = r7(
  (ra) => [
    "./generated/ch" + ra + "_objects.js",
    "./generated/ch" + ra + "_scripts.js",
    "./generated/ch" + ra + "_shims.js",
    "./generated/ch" + ra + "_stubs.js",
  ],
  "chapterModules",
);
function rT(ra = l.chapter) {
  let rv = rX.concat(typeof ra == "number" && ra >= 2 ? rH(ra) : []);
  return Promise.all(
    rv.map((ro) =>
      rc.has(ro)
        ? null
        : rY(ro).then(
            (rS) => {
              rc.set(ro, rS);
              rO.delete(ra);
            },
            () => {},
          ),
    ),
  );
}
r7(rT, "prepareWire");
function rn(ra) {
  let rv = rO.get(ra);
  if (rv) {
    return rv;
  }
  let ro = (B9) => rc.get(B9);
  let rS = ro("./generated/ch" + ra + "_objects.js");
  let rj = ro("./generated/ch" + ra + "_scripts.js");
  let rD = ro("./generated/ch" + ra + "_shims.js");
  let B0 = ro("./generated/ch" + ra + "_stubs.js");
  let B1 = ro("./generated/runtime.js");
  if (!rS || !rj || !B1) {
    return null;
  }
  rv = Object.create(null);
  let B2 = (B9) => {
    for (let Br of Object.keys(B9)) {
      Object.defineProperty(rv, Br, {
        get: () => B9[Br],
        configurable: true,
        enumerable: true,
      });
    }
  };
  for (let B9 of rX) {
    let Br = ro(B9);
    if (Br) {
      B2(Br);
    }
  }
  if (B0) {
    B2(B0);
  }
  B2(rS);
  let B3 = () => {};
  let B4 = (BB) => rj[BB] || (rD && rD[BB]) || B1[BB] || B3;
  let B5 = new Proxy(
    {},
    {
      get: (BB, BZ) => rS[BZ] || (B0 && B0[BZ]),
    },
  );
  let B6 = (BB, BZ) => {
    if (typeof BB == "number") {
      BB = B1.objectByIndex(BB);
    }
    if (typeof BB == "function" || typeof BB == "string") {
      return r4.with(BB, BZ);
    }
    if (BB && typeof BB == "object" && !BB.destroyed) {
      BZ(BB);
    }
  };
  let B7 = ro("./gm.js");
  let B8 = {
    SCRIPT: B4,
    OBJ: B5,
    withInst: B6,
    instance_destroy: B3,
    S: rD,
    SCR: rj,
    RT: B1,
    __SELF: rj,
    __SHIM: rD,
    __OBJ_ALL: rS,
    __OBJ_STUB: B0,
    scr_monsterdefeat_of: B1.scr_monsterdefeat_of,
    trigger_event: B1.trigger_event,
  };
  for (let BB of Object.keys(B8)) {
    Object.defineProperty(rv, BB, {
      value: B8[BB],
      configurable: true,
      enumerable: true,
    });
  }
  if (B7) {
    Object.defineProperty(rv, "g", {
      get: () => B7.curG,
      configurable: true,
      enumerable: true,
    });
  }
  rO.set(ra, rv);
  return rv;
}
r7(rn, "chapterScope");
var rg = new Set(
  "break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield async await of true false null undefined NaN Infinity arguments get set static".split(
    " ",
  ),
);
var rJ = new Map();
function rE(ra) {
  let rv = rJ.get(ra);
  if (rv) {
    return rv;
  }
  let ro = ra
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/\/\/[^\n]*/g, " ")
    .replace(/'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/g, '""');
  let rS = new Set();
  for (let B1 of ro.matchAll(/\b(?:let|const|var)\s+([A-Za-z_$][\w$]*)/g)) {
    rS.add(B1[1]);
  }
  for (let B2 of ro.matchAll(/\b(?:let|const|var)\s*[[{]([^\]}]*)[\]}]/g)) {
    for (let B3 of B2[1].split(",")) {
      let B4 = B3.trim().split(/[\s:=]/)[0];
      if (B4) {
        rS.add(B4);
      }
    }
  }
  for (let B5 of ro.matchAll(/\(([^()]*)\)\s*=>/g)) {
    for (let B6 of B5[1].split(",")) {
      let B7 = B6.trim().split(/[\s=]/)[0];
      if (/^[A-Za-z_$][\w$]*$/.test(B7)) {
        rS.add(B7);
      }
    }
  }
  for (let B8 of ro.matchAll(/([A-Za-z_$][\w$]*)\s*=>/g)) {
    rS.add(B8[1]);
  }
  for (let B9 of ro.matchAll(/\bfunction\s*[A-Za-z_$]?[\w$]*\s*\(([^()]*)\)/g)) {
    for (let Br of B9[1].split(",")) {
      let BB = Br.trim().split(/[\s=]/)[0];
      if (BB) {
        rS.add(BB);
      }
    }
  }
  for (let BZ of ro.matchAll(/\bcatch\s*\(\s*([A-Za-z_$][\w$]*)/g)) {
    rS.add(BZ[1]);
  }
  let rj = new Set();
  let rD = /[A-Za-z_$][\w$]*/g;
  let B0;
  while ((B0 = rD.exec(ro))) {
    let Bf = B0[0];
    let BR = B0.index - 1;
    while (BR >= 0 && (ro[BR] === " " || ro[BR] === "\n" || ro[BR] === "\t" || ro[BR] === "\r")) {
      BR--;
    }
    if (BR >= 0 && (ro[BR] === "." || /[0-9]/.test(ro[BR]))) {
      continue;
    }
    let Bm = rD.lastIndex;
    while (
      Bm < ro.length &&
      (ro[Bm] === " " || ro[Bm] === "\n" || ro[Bm] === "\t" || ro[Bm] === "\r")
    ) {
      Bm++;
    }
    if (
      (ro[Bm] !== ":" || !(BR >= 0) || (ro[BR] !== "{" && ro[BR] !== ",")) &&
      !rg.has(Bf) &&
      !rS.has(Bf)
    ) {
      rj.add(Bf);
    }
  }
  rv = {
    free: rj,
    usesThis: /\bthis\b/.test(ro),
  };
  rJ.set(ra, rv);
  return rv;
}
r7(rE, "freeNames");
var rG = new Map();
function ru(ra, rv) {
  let ro = rG.get(ra);
  if (ro) {
    return ro;
  }
  let rS = null;
  let rj = new Set();
  for (let rD of rv) {
    for (
      let B0 = rD && rD.constructor;
      B0 && B0 !== r1 && B0 !== Object && !rj.has(B0);
      B0 = Object.getPrototypeOf(B0)
    ) {
      rj.add(B0);
      let B1 = "";
      try {
        B1 = Function.prototype.toString.call(B0);
      } catch {}
      if (B1.includes(ra)) {
        rS = B0;
        break;
      }
    }
    if (rS) {
      break;
    }
  }
  if (rS) {
    rG.set(ra, rS);
  }
  return rS;
}
r7(ru, "homeClass");
function rF(ra, rv, ro, rS, rj) {
  if (ra !== null) {
    return "no source in the production build";
  }
  let rD = rn(l.chapter);
  if (!rD) {
    return "no chapter scope";
  }
  let { free: B0, usesThis: B1 } = rE(ra);
  let B2 = null;
  let B3;
  for (let B5 of B0) {
    if (/^_w\d+$/.test(B5)) {
      if (B2 && B2 !== B5) {
        return "binds " + B5;
      }
      B2 = B5;
      if (!rv) {
        let B6 = rL(ra, B5, ro);
        if (typeof B6 == "string") {
          return "binds " + B5 + " (" + B6 + ")";
        }
        B3 = B6;
      }
      continue;
    }
    if (!(B5 in rD) && !(B5 in globalThis)) {
      return "captures " + B5;
    }
  }
  let B4 = null;
  if (B1 && rS) {
    B4 = rS;
  } else if (B1) {
    let B7 = ru(ra, ro);
    if (!B7) {
      return "this: no home class";
    }
    if (rv && rv instanceof B7) {
      B4 = rv;
    } else if (rj && rj.filter((B8) => B8 instanceof B7).length === 1) {
      B4 = rj.find((B8) => B8 instanceof B7);
    } else {
      for (let B8 of ro) {
        if (B8 && !B8.destroyed && B8.constructor === B7) {
          if (B4) {
            return "this: two " + B7.name;
          }
          B4 = B8;
        }
      }
      if (!B4) {
        return "this: no " + B7.name;
      }
    }
  }
  return {
    wn: B2,
    wv: B3,
    self: B4,
    sc: rD,
  };
}
r7(rF, "methodPlan");
var ri = new Map();
function rL(ra, rv, ro) {
  let rS = ri.get(ra + "|" + rv);
  if (rS === undefined) {
    rS = null;
    let rD = ru(ra, ro);
    let B0 = "";
    try {
      B0 = rD ? Function.prototype.toString.call(rD) : "";
    } catch {}
    let B1 = B0.indexOf(ra);
    if (B1 >= 0) {
      let B2 = B0.slice(0, B1);
      let B3 = new RegExp("World\\.with\\('([A-Za-z_]\\w*)',\\s*\\(" + rv + "\\)\\s*=>", "g");
      let B4;
      let B5 = null;
      while ((B4 = B3.exec(B2))) {
        B5 = B4;
      }
      if (B5 && B2.indexOf("(" + rv + ") =>", B5.index + B5[0].length) < 0) {
        rS = B5[1];
      }
    }
    ri.set(ra + "|" + rv, rS);
  }
  if (!rS) {
    return "no with";
  }
  let rj = null;
  for (let B6 of ro) {
    if (B6 && !B6.destroyed && typeof B6.is == "function" && B6.is(rS)) {
      if (rj) {
        return "two " + rS;
      }
      rj = B6;
    }
  }
  return rj || "no " + rS;
}
r7(rL, "withTarget");
var rw = new Map();
function rs(ra, rv, ro) {
  let rS = rw.get(ra);
  if (!rS) {
    rS = new Function(
      "__scope",
      "return function () { with (__scope) { return (" + ra + "\n); } };",
    );
    rw.set(ra, rS);
  }
  let rj = rv.wn
    ? {
        [rv.wn]: rv.wv !== undefined ? rv.wv : ro,
      }
    : null;
  let rD = rv.sc;
  let B0 = new Proxy(rD, {
    has: (B1, B2) => (rj !== null && B2 in rj) || B2 in rD,
    get: (B1, B2) =>
      B2 === Symbol.unscopables ? undefined : rj !== null && B2 in rj ? rj[B2] : rD[B2],
  });
  return rS(B0).call(rv.self);
}
r7(rs, "remake");
var rA = new Map();
function rp(ra, rv) {
  let ro = rA.get(ra);
  if (!ro) {
    rA.set(ra, (ro = new Map()));
  }
  let rS = ro.get(rv);
  if (rS === undefined) {
    rS = false;
    for (let rj = ra; rj && rj !== r1 && rj !== Object; rj = Object.getPrototypeOf(rj)) {
      let rD = "";
      try {
        rD = Function.prototype.toString.call(rj);
      } catch {}
      if (rD.includes(rv)) {
        rS = true;
        break;
      }
    }
    ro.set(rv, rS);
  }
  return rS;
}
r7(rp, "ownSource");
var rV = /^(\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>/;
function rP(ra, rv, ro) {
  let rS = "";
  try {
    rS = Function.prototype.toString.call(ra);
  } catch {
    return "no source";
  }
  if (!rV.test(rS)) {
    return "not an arrow";
  }
  let rj = rF(rS, rv, ro);
  if (typeof rj == "string") {
    return rj;
  } else {
    return null;
  }
}
r7(rP, "methodWhy");
function re(ra, rv, ro, rS, rj) {
  if (typeof ra != "string" || !rV.test(ra)) {
    return "no source" + (typeof ra == "string" ? ": " + ra.slice(0, 40) : "");
  }
  let rD = rF(ra, rv, ro, rS, rj);
  if (typeof rD == "string") {
    return rD;
  }
  let B0 = null;
  try {
    B0 = rs(ra, rD, rv);
  } catch (B1) {
    return "remake: " + ((B1 && B1.message) || B1);
  }
  if (typeof B0 == "function") {
    return B0;
  } else {
    return "remake: not a function";
  }
}
r7(re, "remakeMethod");
var rU = new WeakMap();
function rM(ra) {
  let rv = 2166136261;
  for (let ro = 0; ro < ra.length; ro++) {
    rv ^= ra.charCodeAt(ro);
    rv = Math.imul(rv, 16777619) >>> 0;
  }
  return rv >>> 0;
}
r7(rM, "fnv");
function rl(ra) {
  let rv = rU.get(ra);
  if (!rv) {
    let ro = "";
    try {
      ro = Function.prototype.toString.call(ra);
    } catch {}
    rv = ra.name + "#" + rM(ro).toString(36);
    rU.set(ra, rv);
  }
  return rv;
}
r7(rl, "classKey");
function rx() {
  if (typeof l.chapter == "number" && l.chapter >= 2 && !rn(l.chapter)) {
    rT(l.chapter);
  }
  let ra = [];
  let rv = new Map();
  let ro = new Map();
  let rS = [];
  let rj = null;
  let rD = null;
  let B0 = (B5) => {
    let B6 = rv.get(B5);
    if (B6 === undefined) {
      B6 = ra.length;
      rv.set(B5, B6);
      ra.push(null);
      rS.push(B5);
    }
    return {
      $i: B6,
    };
  };
  let B1 = (B5, B6, B7) => {
    if (B5 === null || typeof B5 != "object") {
      if (
        typeof B5 == "function" &&
        B5.prototype instanceof r1 &&
        B5.prototype.constructor !== B5
      ) {
        return {
          $or: rl(B5.prototype.constructor),
        };
      }
      if (typeof B5 == "function" && (B5 === r1 || B5.prototype instanceof r1)) {
        return {
          $c: rl(B5),
        };
      }
      if (
        typeof B5 == "function" &&
        /^\(\)\s*=>\s*\{\s*\}$/.test(Function.prototype.toString.call(B5))
      ) {
        return {
          $noop: 1,
        };
      }
      if (typeof B5 == "function" && B5.name && r1.prototype[B5.name] === B5) {
        return {
          $im: B5.name,
        };
      }
      if (typeof B5 == "function" && B5.name && !/^bound /.test(B5.name)) {
        return {
          $fn: rl(B5),
        };
      }
      if (typeof B5 == "function" && /\.__atkPin\b/.test(B6)) {
        return null;
      }
      if (typeof B5 == "function" && w.has(B5)) {
        let [Bf, BR] = w.get(B5);
        if (typeof Bf == "function" && BR instanceof r1) {
          if (
            Bf.name &&
            !/^bound /.test(Bf.name) &&
            r1.prototype[Bf.name] !== Bf &&
            !(Bf.prototype instanceof r1)
          ) {
            return {
              $bind: {
                $fn: rl(Bf),
              },
              c: B0(BR),
            };
          }
          let Bm = Function.prototype.toString.call(Bf);
          let BX = rV.test(Bm)
            ? typeof rF(Bm, B7 ? rD : null, r4.list, BR) == "string"
              ? rF(Bm, B7 ? rD : null, r4.list, BR)
              : null
            : "not an arrow";
          if (BX === null) {
            return Object.assign(
              {
                $meth: rM(Bm),
                src: Bm,
                $free: 1,
                $self: B0(BR),
              },
              B7 && rD
                ? {
                    $own: B0(rD),
                  }
                : null,
            );
          } else {
            rj ||= "method " + B6 + " (bound: " + BX + ")";
            return null;
          }
        }
      }
      if (typeof B5 == "function" && B7) {
        let Bc = Function.prototype.toString.call(B5);
        if (rD && !rp(rD.constructor, Bc)) {
          let BO = Object.values(rD).filter((BT) => BT instanceof r1);
          let BH = rV.test(Bc) ? rF(Bc, rD, r4.list, undefined, BO) : "not an arrow";
          if (typeof BH == "string") {
            rj ||= "method " + B6 + " (" + BH + ")";
            return null;
          }
        }
        return {
          $meth: rM(Bc),
          src: Bc,
        };
      }
      if (typeof B5 == "function") {
        let BT = rP(B5, null, r4.list);
        if (BT === null) {
          let Bn = Function.prototype.toString.call(B5);
          return {
            $meth: rM(Bn),
            src: Bn,
            $free: 1,
          };
        }
        rj ||= "method " + B6 + " (" + BT + ")";
        return null;
      }
      if (typeof B5 == "symbol" || typeof B5 == "bigint") {
        rj ||= typeof B5 + " " + B6;
        return null;
      } else {
        return B5;
      }
    }
    if (B5 instanceof r1) {
      return B0(B5);
    }
    let B8 = ro.get(B5);
    if (B8) {
      return B8;
    }
    if (rm(B5)) {
      return null;
    }
    if (Array.isArray(B5)) {
      let Bg = new Array(B5.length);
      ro.set(B5, Bg);
      for (let BJ = 0; BJ < B5.length; BJ++) {
        Bg[BJ] = B1(B5[BJ], B6);
      }
      return Bg;
    }
    if (ArrayBuffer.isView(B5)) {
      let BE = B5.slice();
      ro.set(B5, BE);
      return BE;
    }
    if (B5 instanceof Map) {
      let BG = new Map();
      ro.set(B5, BG);
      for (let [Bu, BF] of B5) {
        BG.set(B1(Bu, B6), B1(BF, B6));
      }
      return BG;
    }
    if (B5 instanceof Set) {
      let Bi = new Set();
      ro.set(B5, Bi);
      for (let BL of B5) {
        Bi.add(B1(BL, B6));
      }
      return Bi;
    }
    if (Object.getPrototypeOf(B5) === Y) {
      let Bw = {
        $m: {
          name: B5.name,
          level: B5.level,
          paused: B5.paused,
          ended: B5.ended,
          clock: B5._clock,
          rate: B5._rate,
          vol: B5._vol,
        },
      };
      ro.set(B5, Bw);
      return Bw;
    }
    if (rr && B5 instanceof rr) {
      let Bs = {
        $surf: [B5.canvas ? B5.canvas.width : 1, B5.canvas ? B5.canvas.height : 1, !!B5.ctx],
      };
      ro.set(B5, Bs);
      return Bs;
    }
    if (rB(B5)) {
      let BA = {};
      let Bp = {
        $p: BA,
      };
      ro.set(B5, Bp);
      for (let BV of Object.keys(B5)) {
        BA[BV] = B1(B5[BV], B6 + ".path");
      }
      return Bp;
    }
    let B9 = Object.getPrototypeOf(B5);
    let Br = B9 && B9.constructor;
    let BB =
      B9 &&
      B9 !== Object.prototype &&
      typeof Br == "function" &&
      Br.prototype === B9 &&
      !(B9 instanceof r1) &&
      Br.name
        ? Function.prototype.toString.call(Br)
        : "";
    if (BB.startsWith("function") && !BB.includes("[native code]")) {
      let BP = {};
      let Be = {
        $new: rl(Br),
        f: BP,
      };
      ro.set(B5, Be);
      for (let BU of Object.keys(B5)) {
        let BM = B5[BU];
        if (typeof BM == "function") {
          if (BB.includes(Function.prototype.toString.call(BM))) {
            continue;
          }
          rj ||= "method " + B6 + "." + BU + " (not made by " + Br.name + ")";
          return null;
        }
        BP[BU] = B1(BM, B6 + "." + BU);
      }
      return Be;
    }
    if (B9 !== Object.prototype && B9 !== null) {
      rj ||= "object " + ((B5.constructor && B5.constructor.name) || "?") + " at " + B6;
      return null;
    }
    if (typeof B5.name == "string" && x[B5.name] === B5) {
      return {
        $s: B5.name,
      };
    }
    if (typeof B5.name == "string" && b[B5.name] === B5) {
      return {
        $f: B5.name,
      };
    }
    let BZ = {};
    ro.set(B5, BZ);
    for (let Bl of Object.keys(B5)) {
      BZ[Bl] = B1(B5[Bl], B6 + "." + Bl);
    }
    return BZ;
  };
  let B2 = r4.list.map((B5) => B0(B5).$i);
  let B3 = r4.pending.map((B5) => (B5 instanceof r1 ? B0(B5).$i : -1));
  let B4 = {};
  for (let B5 of Object.keys(l)) {
    if (typeof l[B5] != "function") {
      B4[B5] = B1(l[B5], "G." + B5);
    }
  }
  while (rS.length) {
    let B6 = rS.shift();
    let B7 = rv.get(B6);
    let B8 = (B6.constructor && B6.constructor.name) || "?";
    let B9 = {};
    rD = B6;
    for (let Br of Object.keys(B6)) {
      B9[Br] = B1(B6[Br], B8 + "." + Br, true);
    }
    rD = null;
    ra[B7] = {
      c: rl(B6.constructor),
      f: B9,
    };
    if (rj) {
      break;
    }
  }
  if (rj) {
    return {
      ok: false,
      why: rj,
    };
  } else {
    return {
      ok: true,
      data: {
        insts: ra,
        list: B2,
        pending: B3,
        g: B4,
        frame: r4.frame,
        spawns: r4.spawns,
        self: r4.self instanceof r1 ? B0(r4.self) : null,
        rng: {
          seed: r2.seed,
          state: r2.state,
          calls: r2.calls,
        },
        held: {
          ...h.held,
        },
        pressed: {
          ...h.pressed,
        },
        counters: j(),
        instId: r1._id,
        music: {
          name: a(),
          pos: o(),
        },
      },
    };
  }
}
r7(rx, "encodeWorld");
function rC() {
  let ra = (ro) => (Number.isFinite(ro) ? Math.round(ro * 100) / 100 : String(ro));
  let rv = [
    e(),
    "rng " +
      r2.calls +
      " hp " +
      JSON.stringify(l.hp) +
      " mn " +
      l.mnfight +
      " my " +
      l.myfight +
      " tt " +
      ra(l.turntimer),
  ];
  for (let ro of r4.list) {
    if (!ro.destroyed) {
      rv.push(
        ro.constructor.name +
          " " +
          ra(ro.x) +
          "," +
          ra(ro.y) +
          " v" +
          ra(ro._hs) +
          "," +
          ra(ro._vs) +
          " " +
          ro.sprite_index +
          " " +
          ra(ro.image_index) +
          " a" +
          (ro.alarm ? ro.alarm.filter((rS) => rS >= 0).join("/") : ""),
      );
    }
  }
  return rv.join("\n");
}
r7(rC, "deepDump");
var rW = new Map();
var rq = new Map();
function rQ(ra) {
  for (let rv of ra) {
    if (rv) {
      for (let ro of Object.values(rv)) {
        if (Array.isArray(ro) && ro.length && ro.every((rD) => rD && typeof rD == "object")) {
          rQ(ro);
          continue;
        }
        if (typeof ro != "function") {
          continue;
        }
        let rS = ro.prototype instanceof r1 ? rW : rq;
        let rj = rS.get(ro.name) || [];
        if (!rj.includes(ro)) {
          rj.push(ro);
        }
        rS.set(ro.name, rj);
      }
    }
  }
}
r7(rQ, "registerClassModules");
var rd = [
  "./battle.js",
  "./bullets.js",
  "./ch2spells.js",
  "./ch3_rhythm.js",
  "./controller.js",
  "./dummy.js",
  "./gameover.js",
  "./heart.js",
  "./jevil.js",
  "./text.js",
  "./ut_runtime.js",
  "./backgrounds.js",
  "./silhouette.js",
  "./enemies/index.js",
  "./generated/ch1_objects.js",
  "./generated/ch2_objects.js",
  "./generated/ch2_cut.js",
  "./generated/ch2_stubs.js",
  "./generated/ch3_objects.js",
  "./generated/ch3_stubs.js",
  "./generated/ch4_objects.js",
  "./generated/ch4_stubs.js",
  "./generated/ch5_objects.js",
  "./generated/ch5_stubs.js",
  "./generated/cut.js",
  "./generated/stubs.js",
  "./generated/ut_objects.js",
  "./generated/ch1_scripts.js",
  "./generated/ch2_scripts.js",
  "./generated/ch3_scripts.js",
  "./generated/ch4_scripts.js",
  "./generated/ch5_scripts.js",
  "./generated/ut_scripts.js",
  "./generated/runtime.js",
];
var rz = r7((ra) => {
  if (/\/ut_(objects|scripts)\.js$/.test(ra)) {
    return "ut";
  }
  let rv = /\/ch(\d+)_/.exec(ra);
  if (rv && Number(rv[1]) >= 4) {
    return "ch" + rv[1];
  } else {
    return null;
  }
}, "groupOfModule");
var rh = null;
async function rI(ra) {
  let rv = [];
  for (let ro of rd) {
    if (!!ra(ro) && !rc.has(ro)) {
      try {
        let rS = await rY(ro);
        rv.push(rS);
        rc.set(ro, rS);
      } catch {}
    }
  }
  for (let rj of rX.concat(rH(2), rH(3), rH(4), rH(5))) {
    if (!!ra(rj) && !rc.has(rj)) {
      try {
        rc.set(rj, await rY(rj));
      } catch {}
    }
  }
  rQ(rv);
}
r7(rI, "takeUp");
function rk() {
  return (
    rh ||
    ((rh = rI((ra) => {
      let rv = rz(ra);
      return !rv || u(rv);
    })),
    i((ra) => {
      rh = rh.then(() => rI((rv) => rz(rv) === ra));
    }),
    rh)
  );
}
r7(rk, "loadClassModules");
function ry(ra) {
  let rv = ra.slice(0, ra.lastIndexOf("#"));
  for (let ro of rq.get(rv) || []) {
    if (rl(ro) === ra) {
      return ro;
    }
  }
  return null;
}
r7(ry, "findFn");
function rN() {
  let ra = new Map();
  let rv = (ro) => {
    if (typeof ro == "function" && (ro === r1 || ro.prototype instanceof r1)) {
      ra.set(rl(ro), ro);
    }
  };
  rv(r1);
  for (let ro of r4.list) {
    for (
      let rS = ro && ro.constructor;
      rS && rS !== r1 && rS !== Object;
      rS = Object.getPrototypeOf(rS)
    ) {
      rv(rS);
    }
  }
  return (rj) => {
    let rD = ra.get(rj);
    if (rD) {
      return rD;
    }
    let B0 = rj.slice(0, rj.lastIndexOf("#"));
    rv(r6(B0));
    for (let B1 of Object.values(r5)) {
      if (B1 && B1.name === B0) {
        rv(B1);
      }
    }
    for (let B2 of rW.get(B0) || []) {
      rv(B2);
    }
    for (let B3 of rq.get(B0) || []) {
      rv(B3);
    }
    rD = ra.get(rj);
    return rD || null;
  };
}
r7(rN, "resolver");
function rK(ra, rv = {}) {
  let ro = rN();
  let rS = null;
  let rj = new Array(ra.insts.length);
  let rD = new Map();
  if (!rv.fresh) {
    for (let B8 of r4.list) {
      if (B8 instanceof r1 && Number.isFinite(B8._ord)) {
        rD.set(B8._ord, B8);
      }
    }
  }
  if (!rv.fresh) {
    for (let B9 of r4.pending) {
      if (B9 instanceof r1 && Number.isFinite(B9._ord)) {
        rD.set(B9._ord, B9);
      }
    }
  }
  for (let Br = 0; Br < ra.insts.length; Br++) {
    let BB = ro(ra.insts[Br].c);
    if (!BB) {
      return "unknown class " + ra.insts[Br].c;
    }
    let BZ = rD.get(ra.insts[Br].f._ord);
    rj[Br] = BZ && BZ.constructor === BB ? BZ : Object.create(BB.prototype);
    if (rj[Br] === BZ) {
      rD.delete(ra.insts[Br].f._ord);
    }
  }
  let B0 = r9.prototype;
  let B1 = new Map();
  let B2 = ra.list
    .filter((Bf) => !ra.insts[Bf] || !ra.insts[Bf].f || !ra.insts[Bf].f.destroyed)
    .map((Bf) => rj[Bf]);
  let B3 = (Bf) => {
    if (Bf === null || typeof Bf != "object") {
      return Bf;
    }
    let BR = B1.get(Bf);
    if (BR) {
      return BR;
    }
    if (Array.isArray(Bf)) {
      let BX = new Array(Bf.length);
      B1.set(Bf, BX);
      for (let Bc = 0; Bc < Bf.length; Bc++) {
        BX[Bc] = B3(Bf[Bc]);
      }
      return BX;
    }
    if (ArrayBuffer.isView(Bf)) {
      return Bf;
    }
    if (Bf instanceof Map) {
      let BO = new Map();
      B1.set(Bf, BO);
      for (let [BH, BT] of Bf) {
        BO.set(B3(BH), B3(BT));
      }
      return BO;
    }
    if (Bf instanceof Set) {
      let Bn = new Set();
      B1.set(Bf, Bn);
      for (let Bg of Bf) {
        Bn.add(B3(Bg));
      }
      return Bn;
    }
    if (Bf.$i !== undefined && Object.keys(Bf).length === 1) {
      return rj[Bf.$i];
    }
    if (Bf.$c !== undefined && Object.keys(Bf).length === 1) {
      let BJ = ro(Bf.$c);
      if (!BJ && !rS) {
        rS = Bf.$c;
      }
      return BJ;
    }
    if (Bf.$or !== undefined && Object.keys(Bf).length === 1) {
      let BE = ro(Bf.$or);
      if (!BE && !rS) {
        rS = Bf.$or;
      }
      if (BE) {
        return r3(BE);
      } else {
        return null;
      }
    }
    if (Bf.$meth !== undefined && typeof Bf.$meth == "number") {
      if (!Bf.$free) {
        return null;
      }
      let BG = Bf.$self ? rj[Bf.$self.$i] : undefined;
      let Bu = Bf.$own ? rj[Bf.$own.$i] : null;
      let BF = re(Bf.src, Bu, B2, BG);
      if (typeof BF == "string") {
        rS ||= "method (" + BF + ")";
        return null;
      } else {
        if (BG) {
          BF = s(BG, BF);
        }
        B1.set(Bf, BF);
        return BF;
      }
    }
    if (Bf.$bind !== undefined && Bf.c !== undefined) {
      let Bi = Bf.$bind && Bf.$bind.$fn ? ry(Bf.$bind.$fn) : null;
      if (!Bi) {
        rS ||= "function " + (Bf.$bind && Bf.$bind.$fn);
        return null;
      }
      let BL = s(rj[Bf.c.$i], Bi);
      B1.set(Bf, BL);
      return BL;
    }
    if (Bf.$new !== undefined && Bf.f && Object.keys(Bf).length === 2) {
      let Bw = ry(Bf.$new);
      if (!Bw) {
        rS ||= "constructor " + Bf.$new;
        return null;
      }
      let Bs;
      try {
        Bs = new Bw();
      } catch {
        Bs = Object.create(Bw.prototype);
      }
      B1.set(Bf, Bs);
      for (let BA of Object.keys(Bf.f)) {
        Bs[BA] = B3(Bf.f[BA]);
      }
      return Bs;
    }
    if (Bf.$noop !== undefined && Object.keys(Bf).length === 1) {
      return rZ;
    }
    if (Bf.$im !== undefined && Object.keys(Bf).length === 1) {
      if (typeof r1.prototype[Bf.$im] == "function") {
        return r1.prototype[Bf.$im];
      } else {
        return null;
      }
    }
    if (Bf.$fn !== undefined && Object.keys(Bf).length === 1) {
      let Bp = ry(Bf.$fn);
      if (!Bp && !rS) {
        rS = "function " + Bf.$fn;
      }
      return Bp;
    }
    if (Bf.$surf !== undefined && Object.keys(Bf).length === 1) {
      let BV = p(Bf.$surf[0], Bf.$surf[1]);
      if (!Bf.$surf[2]) {
        BV.ctx = null;
      }
      B1.set(Bf, BV);
      return BV;
    }
    if (Bf.$s !== undefined && Object.keys(Bf).length === 1) {
      return x[Bf.$s] || null;
    }
    if (Bf.$f !== undefined && Object.keys(Bf).length === 1) {
      return b[Bf.$f] || null;
    }
    if (Bf.$m !== undefined && Object.keys(Bf).length === 1) {
      let BP = Bf.$m;
      let Be = y(BP.name) || Object.create(Y);
      Object.assign(Be, {
        name: BP.name,
        level: BP.level,
        paused: BP.paused,
        ended: BP.ended,
        _clock: BP.clock,
        _rate: BP.rate,
        _vol: BP.vol,
      });
      if (!("el" in Be)) {
        Be.el = null;
      }
      B1.set(Bf, Be);
      return Be;
    }
    if (Bf.$p !== undefined && Object.keys(Bf).length === 1) {
      let BU = Object.create(B0);
      B1.set(Bf, BU);
      for (let BM of Object.keys(Bf.$p)) {
        BU[BM] = B3(Bf.$p[BM]);
      }
      return BU;
    }
    let Bm = {};
    B1.set(Bf, Bm);
    for (let Bl of Object.keys(Bf)) {
      Bm[Bl] = B3(Bf[Bl]);
    }
    return Bm;
  };
  let B4 = ra.insts.map((Bf) => {
    let BR = {};
    for (let Bm of Object.keys(Bf.f)) {
      BR[Bm] = B3(Bf.f[Bm]);
    }
    return BR;
  });
  let B5 = new Map();
  for (let Bf = 0; Bf < ra.insts.length; Bf++) {
    let BR = Object.keys(ra.insts[Bf].f).filter((BT) => {
      let Bn = ra.insts[Bf].f[BT];
      return Bn && typeof Bn == "object" && Bn.$meth !== undefined && !Bn.$free;
    });
    if (!BR.length) {
      continue;
    }
    let Bm = rj[Bf];
    let BX = {};
    let Bc = () => {
      let BT = new Map();
      for (let Bn of Object.keys(Bm)) {
        let Bg = Bm[Bn];
        if (typeof Bg == "function") {
          let BJ = rM(Function.prototype.toString.call(Bg));
          if (!BT.has(BJ)) {
            BT.set(BJ, Bg);
          }
        }
      }
      for (let BE of BR) {
        if (!BX[BE]) {
          let BG = BT.get(ra.insts[Bf].f[BE].$meth);
          if (BG) {
            BX[BE] = BG;
          }
        }
      }
    };
    Bc();
    if (BR.every((BT) => BX[BT])) {
      B5.set(Bm, BX);
      continue;
    }
    try {
      Bm.create();
    } catch {}
    Bc();
    if (BR.some((BT) => !BX[BT])) {
      let BT = new Map(B1);
      B1.clear();
      for (let Bn of Object.keys(ra.insts[Bf].f)) {
        Bm[Bn] = B3(ra.insts[Bf].f[Bn]);
      }
      B1.clear();
      for (let [Bg, BJ] of BT) {
        B1.set(Bg, BJ);
      }
      try {
        Bm.create();
      } catch {}
      Bc();
    }
    let BO = Object.values(ra.insts[Bf].f)
      .filter(
        (BE) => BE && typeof BE == "object" && BE.$i !== undefined && Object.keys(BE).length === 1,
      )
      .map((BE) => rj[BE.$i]);
    for (let BE of BR) {
      if (!BX[BE]) {
        let BG = re(ra.insts[Bf].f[BE].src, Bm, B2, undefined, BO);
        if (typeof BG == "function") {
          BX[BE] = BG;
        } else {
          BX["?" + BE] = BG;
        }
      }
    }
    let BH = BR.find((Bu) => !BX[Bu]);
    if (BH) {
      return (
        "method " +
        ((Bm.constructor && Bm.constructor.name) || "?") +
        "." +
        BH +
        " not made again" +
        (BX["?" + BH] ? " (" + BX["?" + BH] + ")" : "")
      );
    }
    for (let Bu of Object.keys(BX)) {
      if (Bu.charCodeAt(0) === 63) {
        delete BX[Bu];
      }
    }
    B5.set(Bm, BX);
  }
  let B6 = {};
  for (let BF of Object.keys(ra.g)) {
    B6[BF] = B3(ra.g[BF]);
  }
  if (rS) {
    return "unknown " + rS;
  }
  for (let Bi of Object.keys(l)) {
    if (typeof l[Bi] == "function" && !(Bi in B6)) {
      B6[Bi] = l[Bi];
    }
  }
  M({
    list: ra.list.map((BL) => rj[BL]),
    insts: ra.list.map((BL) => B4[BL]),
    pending: ra.pending.filter((BL) => BL >= 0).map((BL) => rj[BL]),
    frame: ra.frame,
    spawns: ra.spawns,
    self: ra.self ? rj[ra.self.$i] : null,
    g: B6,
    rng: ra.rng,
    held: ra.held,
    pressed: ra.pressed,
    counters: ra.counters,
    paths: null,
  });
  let B7 = new Set(ra.list);
  for (let BL = 0; BL < rj.length; BL++) {
    if (!B7.has(BL)) {
      Object.assign(rj[BL], B4[BL]);
    }
  }
  for (let [Bw, Bs] of B5) {
    Object.assign(Bw, Bs);
  }
  for (let BA of rj) {
    if (BA.__forcedAtk !== undefined && "myattackchoice" in BA) {
      let Bp = BA.__forcedAtk;
      Object.defineProperty(BA, "myattackchoice", {
        get: () => Bp,
        set() {},
        configurable: true,
        enumerable: true,
      });
    }
  }
  if (Number.isFinite(ra.instId)) {
    r1._id = ra.instId;
  }
  if (ra.music && ra.music.name && ra.music.name === a()) {
    let BV = y(ra.music.name);
    if (BV) {
      r0(BV, ra.music.pos);
    }
  }
  return null;
}
r7(rK, "applyWorld");
function rY(ra) {
  switch (ra) {
    case "./autoplay.js":
      return rb("./autoplay.js", import.meta.url);
    case "./backgrounds.js":
      return rb("./c-X6KMXHDS.js", import.meta.url);
    case "./battle.js":
      return rb("./battle.js", import.meta.url);
    case "./bullets.js":
      return rb("./bullets.js", import.meta.url);
    case "./ch2spells.js":
      return rb("./c-VOQOITAX.js", import.meta.url);
    case "./ch3_rhythm.js":
      return rb("./c-C6FTKJNP.js", import.meta.url);
    case "./controller.js":
      return rb("./c-YERAW7RE.js", import.meta.url);
    case "./dummy.js":
      return rb("./c-FDWLQBYV.js", import.meta.url);
    case "./enemies/index.js":
      return rb("./c-I3HQU2NB.js", import.meta.url);
    case "./fightcode.js":
      return rb("./c-L7YTU57P.js", import.meta.url);
    case "./gameover.js":
      return rb("./c-GFC5XPMP.js", import.meta.url);
    case "./generated/ch1_objects.js":
      return rb("./c-7XXYKA53.js", import.meta.url);
    case "./generated/ch1_scripts.js":
      return rb("./c-GIGZ7IAD.js", import.meta.url);
    case "./generated/ch2_cut.js":
      return rb("./c-YXH2TAGW.js", import.meta.url);
    case "./generated/ch2_objects.js":
      return rb("./c-ZW5BJO5X.js", import.meta.url);
    case "./generated/ch2_scripts.js":
      return rb("./c-JWRTIWVI.js", import.meta.url);
    case "./generated/ch2_shims.js":
      return rb("./c-TE4IVYXY.js", import.meta.url);
    case "./generated/ch2_stubs.js":
      return rb("./c-2XRPYROI.js", import.meta.url);
    case "./generated/ch3_objects.js":
      return rb("./c-OQ4N7CYG.js", import.meta.url);
    case "./generated/ch3_scripts.js":
      return rb("./c-DL3EMGBS.js", import.meta.url);
    case "./generated/ch3_shims.js":
      return rb("./c-PJO2TXYC.js", import.meta.url);
    case "./generated/ch3_stubs.js":
      return rb("./c-YDQXCORE.js", import.meta.url);
    case "./generated/ch4_objects.js":
      return rb("./c-ZZ4PJPAY.js", import.meta.url);
    case "./generated/ch4_scripts.js":
      return rb("./c-HK2ITOLJ.js", import.meta.url);
    case "./generated/ch4_shims.js":
      return rb("./c-OWCOLRED.js", import.meta.url);
    case "./generated/ch4_stubs.js":
      return rb("./c-PHA2NXYR.js", import.meta.url);
    case "./generated/ch5_objects.js":
      return rb("./c-TE4O3SA3.js", import.meta.url);
    case "./generated/ch5_scripts.js":
      return rb("./c-VBP7ZOUO.js", import.meta.url);
    case "./generated/ch5_shims.js":
      return rb("./c-U53G5EU4.js", import.meta.url);
    case "./generated/ch5_stubs.js":
      return rb("./c-35OEHD5D.js", import.meta.url);
    case "./generated/cut.js":
      return rb("./c-GGKHERJB.js", import.meta.url);
    case "./generated/runtime.js":
      return rb("./c-6GJCJINA.js", import.meta.url);
    case "./generated/stubs.js":
      return rb("./c-2BANTBVI.js", import.meta.url);
    case "./generated/ut_objects.js":
      return rb("./c-EOWC36LO.js", import.meta.url);
    case "./generated/ut_scripts.js":
      return rb("./c-OEMMFXNG.js", import.meta.url);
    case "./globals.js":
      return rb("./globals.js", import.meta.url);
    case "./gm.js":
      return rb("./gm.js", import.meta.url);
    case "./heart.js":
      return rb("./heart.js", import.meta.url);
    case "./jevil.js":
      return rb("./c-V3DUH2UB.js", import.meta.url);
    case "./silhouette.js":
      return rb("./c-W5KZW3H6.js", import.meta.url);
    case "./snapshot.js":
      return rb("./snapshot.js", import.meta.url);
    case "./text.js":
      return rb("./c-AV4PFDXU.js", import.meta.url);
    case "./ut_runtime.js":
      return rb("./ut_runtime.js", import.meta.url);
    default:
      return Promise.reject(new Error("module not in build"));
  }
}
r7(rY, "__dr_imp");
export { rT as a, rl as b, rx as c, rC as d, rQ as e, rk as f, rK as g };
function rb(ra, rv) {
  var ro = new URL(ra, rv).href;
  var rS = globalThis.__drWarm;
  return (rS ? rS(ro) : Promise.resolve()).then(function () {
    return import(ro).catch(function (rj) {
      try {
        rj.reload = true;
        rj.what = "the game code";
      } catch (rD) {}
      throw rj;
    });
  });
}
