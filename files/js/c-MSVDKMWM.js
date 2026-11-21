import {
  B as T,
  D as N,
  b as G,
  c as H,
  d as t,
  e as p,
  f as I,
  g as B,
  h as C,
  i as Z,
  j as Q,
  k as l,
  l as i,
  p as w,
  z as M,
} from "./c-S7JKZRF5.js";
import { f as J } from "./c-FKUTYDQS.js";
import { a as h, b as P } from "./c-OYE7A34G.js";
import { g as k } from "./c-O6GE5FYX.js";
import {
  Aa as F,
  Bc as A,
  Ca as r,
  I as u,
  N as L,
  Q as e,
  Tb as x,
  ob as v,
  ya as K,
  za as b,
} from "./c-ZEHUSSXN.js";
import { a as E, l as n } from "./c-7Q4J33FN.js";
n();
var D = Math.PI / 180;
function d(sB) {
  let sC = sB.mask_index;
  if (typeof sC == "number" && sC < 0) {
    return sB.sprite_index;
  } else {
    return sC || sB.sprite_index;
  }
}
E(d, "collName");
var f = null;
var g = E(() => (f ||= i()), "gfx");
var a = {
  plans: 0,
  ms: 0,
  lastMs: 0,
  frames: 0,
  states: 0,
  lastHits: 0,
  mode: "",
};
var V = new Int32Array(256);
var c = class si {
  constructor(sB, sC, sZ, sQ, sl, sw) {
    this.x0 = sB;
    this.y0 = sC;
    this.w = sZ;
    this.h = sQ;
    this.cs = sl;
    this.frames = sw;
    this.stride = (sZ + 1) * (sQ + 1);
    this.sat = new Int32Array(this.stride * sw);
    this.occ = new Uint8Array(sZ * sQ);
    this.lo = 0;
    this.hi = sQ;
  }
  clearOcc() {
    this.occ.fill(0, 0, this.w * this.h);
    this.dirty = false;
    this.lo = this.h;
    this.hi = 0;
  }
  rows(sB, sC) {
    if (sB < this.lo) {
      this.lo = sB;
    }
    if (sC > this.hi) {
      this.hi = sC;
    }
  }
  paint(sB) {
    let sC = d(sB);
    if (!sC) {
      return;
    }
    let sZ = u[sC];
    if (!sZ || !sZ.bb) {
      return;
    }
    let sQ = sB.image_xscale || 0;
    let sl = sB.image_yscale || 0;
    if (!sQ || !sl) {
      return;
    }
    let sw = (sB.image_angle || 0) * D;
    let sM = Math.cos(sw);
    let sJ = Math.sin(sw);
    let sh = sZ.bb;
    let sP = [(sh[0] - sZ.ox) * sQ, (sh[2] + 1 - sZ.ox) * sQ];
    let sS = [(sh[1] - sZ.oy) * sl, (sh[3] + 1 - sZ.oy) * sl];
    let sk = 1000000000;
    let sF = 1000000000;
    let sA = -1000000000;
    let sr = -1000000000;
    for (let sa of sP) {
      for (let sV of sS) {
        let sc = sB.x + sa * sM + sV * sJ;
        let sY = sB.y - sa * sJ + sV * sM;
        if (sc < sk) {
          sk = sc;
        }
        if (sc > sA) {
          sA = sc;
        }
        if (sY < sF) {
          sF = sY;
        }
        if (sY > sr) {
          sr = sY;
        }
      }
    }
    let su = this.cs;
    let sL = Math.floor((sk - this.x0) / su);
    let se = Math.ceil((sA - this.x0) / su);
    let sx = Math.floor((sF - this.y0) / su);
    let sv = Math.ceil((sr - this.y0) / su);
    if (se < 0 || sv < 0 || sL >= this.w || sx >= this.h) {
      return;
    }
    if (sL < 0) {
      sL = 0;
    }
    if (sx < 0) {
      sx = 0;
    }
    if (se > this.w) {
      se = this.w;
    }
    if (sv > this.h) {
      sv = this.h;
    }
    let sK = sZ.precise && sZ.masks ? sZ.masks.length : 1;
    let sb =
      ((Math.floor(sB.image_index || 0) % Math.max(1, sZ.frames)) + sZ.frames) %
      Math.max(1, sZ.frames);
    let sE = s1(sZ, Math.min(sb, sK - 1));
    this.dirty = true;
    this.rows(sx, sv);
    let sn = sZ.w;
    let sD = sZ.h;
    let sd = this.occ;
    let sf = this.w;
    let sg = !sZ.precise && !sw;
    if (!sg && !sw && Number.isFinite(sB.x) && Number.isFinite(sB.y)) {
      let sX = se - sL;
      if (V.length < sX) {
        V = new Int32Array(sX + 256);
      }
      for (let sm = sL; sm < se; sm++) {
        let sj = Math.floor((this.x0 + (sm + 0.5) * su - sB.x) / sQ + sZ.ox);
        V[sm - sL] = sj >= 0 && sj < sn ? sj : -1;
      }
      for (let sz = sx; sz < sv; sz++) {
        let so = Math.floor((this.y0 + (sz + 0.5) * su - sB.y) / sl + sZ.oy);
        if (!(so >= 0) || !(so < sD)) {
          continue;
        }
        let U0 = so * sn;
        for (let U1 = sL; U1 < se; U1++) {
          let U2 = V[U1 - sL];
          if (U2 >= 0 && sE[U0 + U2]) {
            sd[sz * sf + U1] = 1;
          }
        }
      }
      return;
    }
    for (let U3 = sx; U3 < sv; U3++) {
      let U4 = this.y0 + (U3 + 0.5) * su;
      for (let U5 = sL; U5 < se; U5++) {
        let U6 = this.x0 + (U5 + 0.5) * su;
        if (sg) {
          if (U6 >= sk && U6 < sA && U4 >= sF && U4 < sr) {
            sd[U3 * sf + U5] = 1;
          }
          continue;
        }
        let U7 = U6 - sB.x;
        let U8 = U4 - sB.y;
        let U9 = U7 * sM - U8 * sJ;
        let UU = U7 * sJ + U8 * sM;
        let UO = Math.floor(U9 / sQ + sZ.ox);
        let UW = Math.floor(UU / sl + sZ.oy);
        if (!(UO < 0) && !(UW < 0) && !(UO >= sn) && !(UW >= sD)) {
          if (sE[UW * sn + UO]) {
            sd[U3 * sf + U5] = 1;
          }
        }
      }
    }
  }
  paintRect(sB, sC, sZ, sQ) {
    let sl = this.cs;
    let sw = Math.floor((sB - this.x0) / sl);
    let sM = Math.ceil((sZ - this.x0) / sl);
    let sJ = Math.floor((sC - this.y0) / sl);
    let sh = Math.ceil((sQ - this.y0) / sl);
    if (sw < 0) {
      sw = 0;
    }
    if (sJ < 0) {
      sJ = 0;
    }
    if (sM > this.w) {
      sM = this.w;
    }
    if (sh > this.h) {
      sh = this.h;
    }
    let sP = this.w;
    let sS = this.occ;
    if (sM > sw && sh > sJ) {
      this.dirty = true;
      this.rows(sJ, sh);
    }
    for (let sk = sJ; sk < sh; sk++) {
      sS.fill(1, sk * sP + sw, sk * sP + Math.max(sw, sM));
    }
  }
  paintLine(sB, sC, sZ, sQ, sl) {
    let sw = this.cs;
    let sM = this.w;
    let sJ = this.occ;
    this.dirty = true;
    this.rows(0, this.h);
    let sh = Math.abs(sQ) > 1e-9;
    for (let sP = 0; sP < this.h; sP++) {
      let sS = this.y0 + (sP + 0.5) * sw - sC;
      let sk = 0;
      let sF = sM;
      if (sh) {
        let sA = (sS * sZ - sl) / sQ;
        let sr = (sS * sZ + sl) / sQ;
        sk = Math.max(0, Math.floor((Math.min(sA, sr) - 2 + sB - this.x0) / sw) - 1);
        sF = Math.min(sM, Math.ceil((Math.max(sA, sr) + 2 + sB - this.x0) / sw) + 1);
      }
      for (let su = sk; su < sF; su++) {
        let sL = this.x0 + (su + 0.5) * sw - sB;
        let se = sL * sZ + sS * sQ;
        if (se < 0 || se > 1000) {
          continue;
        }
        if (Math.abs(sL * sQ - sS * sZ) <= sl) {
          sJ[sP * sM + su] = 1;
        }
      }
    }
  }
  paintSeg(sB, sC, sZ, sQ) {
    let sl = Math.min(sB, sZ) - 2;
    let sw = Math.max(sB, sZ) + 2;
    let sM = Math.min(sC, sQ) - 2;
    let sJ = Math.max(sC, sQ) + 2;
    let sh = this.cs;
    let sP = this.w;
    let sS = this.occ;
    let sk = sZ - sB;
    let sF = sQ - sC;
    let sA = sk * sk + sF * sF || 1;
    let sr = Math.max(0, Math.floor((sl - this.x0) / sh));
    let su = Math.min(sP, Math.ceil((sw - this.x0) / sh));
    let sL = Math.max(0, Math.floor((sM - this.y0) / sh));
    let se = Math.min(this.h, Math.ceil((sJ - this.y0) / sh));
    this.rows(sL, se);
    let sx = Math.abs(sF) > 1e-9;
    for (let sv = sL; sv < se; sv++) {
      let sK = sr;
      let sb = su;
      if (sx) {
        let sE = this.y0 + (sv + 0.5) * sh;
        let sn = Math.min(1, Math.max(0, (sE - 3 - sC) / sF));
        let sD = Math.min(1, Math.max(0, (sE + 3 - sC) / sF));
        let sd = sB + sk * Math.min(sn, sD);
        let sf = sB + sk * Math.max(sn, sD);
        sK = Math.max(sr, Math.floor((Math.min(sd, sf) - 3 - this.x0) / sh) - 1);
        sb = Math.min(su, Math.ceil((Math.max(sd, sf) + 3 - this.x0) / sh) + 1);
      }
      for (let sg = sK; sg < sb; sg++) {
        let sa = this.x0 + (sg + 0.5) * sh - sB;
        let sV = this.y0 + (sv + 0.5) * sh - sC;
        let sc = Math.max(0, Math.min(1, (sa * sk + sV * sF) / sA));
        let sY = sa - sk * sc;
        let sX = sV - sF * sc;
        if (sY * sY + sX * sX <= 2.25) {
          sS[sv * sP + sg] = 1;
          this.dirty = true;
        }
      }
    }
  }
  paintCircle(sB, sC, sZ) {
    let sQ = this.cs;
    let sl = this.w;
    let sw = this.occ;
    let sM = (sZ + 1) * (sZ + 1);
    let sJ = Math.max(0, Math.floor((sB - sZ - 1 - this.x0) / sQ));
    let sh = Math.min(sl, Math.ceil((sB + sZ + 1 - this.x0) / sQ));
    let sP = Math.max(0, Math.floor((sC - sZ - 1 - this.y0) / sQ));
    let sS = Math.min(this.h, Math.ceil((sC + sZ + 1 - this.y0) / sQ));
    this.rows(sP, sS);
    for (let sk = sP; sk < sS; sk++) {
      for (let sF = sJ; sF < sh; sF++) {
        let sA = this.x0 + (sF + 0.5) * sQ - sB;
        let sr = this.y0 + (sk + 0.5) * sQ - sC;
        if (sA * sA + sr * sr <= sM) {
          sw[sk * sl + sF] = 1;
          this.dirty = true;
        }
      }
    }
  }
  commit(sB) {
    if (!this.empty || this.empty.length < this.frames) {
      this.empty = new Uint8Array(Math.max(this.frames, 64));
    }
    this.empty[sB] = this.dirty ? 0 : 1;
    if (!this.dirty) {
      return;
    }
    let sC = this.w;
    let sZ = this.h;
    let sQ = sB * this.stride;
    let sl = this.sat;
    let sw = this.occ;
    let sM = sC + 1;
    let sJ = Math.max(0, Math.min(sZ, this.lo));
    let sh = Math.max(sJ, Math.min(sZ, this.hi));
    sl.fill(0, sQ, sQ + (sJ + 1) * sM);
    for (let sP = sJ + 1; sP <= sh; sP++) {
      let sS = 0;
      sl[sQ + sP * sM] = 0;
      for (let sk = 1; sk <= sC; sk++) {
        sS += sw[(sP - 1) * sC + sk - 1];
        sl[sQ + sP * sM + sk] = sl[sQ + (sP - 1) * sM + sk] + sS;
      }
    }
    for (let sF = sh + 1; sF <= sZ; sF++) {
      sl.copyWithin(sQ + sF * sM, sQ + sh * sM, sQ + sh * sM + sM);
    }
  }
  any(sB, sC, sZ, sQ, sl) {
    if (this.empty[sB]) {
      return false;
    }
    let sw = this.cs;
    let sM = Math.floor((sC - this.x0) / sw);
    let sJ = Math.ceil((sQ - this.x0) / sw);
    let sh = Math.floor((sZ - this.y0) / sw);
    let sP = Math.ceil((sl - this.y0) / sw);
    if (sM < 0) {
      sM = 0;
    }
    if (sh < 0) {
      sh = 0;
    }
    if (sJ > this.w) {
      sJ = this.w;
    }
    if (sP > this.h) {
      sP = this.h;
    }
    if (sJ <= sM || sP <= sh) {
      return false;
    }
    let sS = this.w + 1;
    let sk = sB * this.stride;
    let sF = this.sat;
    return (
      sF[sk + sP * sS + sJ] -
        sF[sk + sh * sS + sJ] -
        sF[sk + sP * sS + sM] +
        sF[sk + sh * sS + sM] >
      0
    );
  }
};
E(c, "Grid");
var Y = c;
var X = [];
var m = null;
var j = null;
var z = 0;
function o(sB, sC, sZ, sQ, sl, sw, sM) {
  let sJ = X[sB];
  if (!sJ || sJ.sat.length < (sQ + 1) * (sl + 1) * sM || sJ.occ.length < sQ * sl) {
    sJ = new Y(sC, sZ, sQ, sl, sw, sM);
    X[sB] = sJ;
  }
  sJ.x0 = sC;
  sJ.y0 = sZ;
  sJ.w = sQ;
  sJ.h = sl;
  sJ.cs = sw;
  sJ.frames = sM;
  sJ.stride = (sQ + 1) * (sl + 1);
  return sJ;
}
E(o, "grid");
var s0 = new WeakMap();
function s1(sB, sC) {
  if (sB._mask && sB._mask[sC]) {
    return sB._mask[sC];
  }
  let sZ = s0.get(sB);
  if (!sZ) {
    s0.set(sB, (sZ = []));
  }
  if (sZ[sC]) {
    return sZ[sC];
  }
  let { w: sQ, h: sl, bb: sw } = sB;
  let sM = new Uint8Array(sQ * sl);
  let sJ = sB.masks && sB.masks[Math.min(sC, sB.masks.length - 1)];
  for (let sh = sw[1]; sh <= sw[3]; sh++) {
    for (let sP = sw[0]; sP <= sw[2]; sP++) {
      if (sB.precise && sJ) {
        if (L(sJ, sP, sh)) {
          sM[sh * sQ + sP] = 1;
        }
      } else {
        sM[sh * sQ + sP] = 1;
      }
    }
  }
  sZ[sC] = sM;
  return sM;
}
E(s1, "maskOf");
function s2(sB) {
  if (!sB || sB.destroyed || v.first("obj_purpleheart") || v.first("obj_maskfield")) {
    return null;
  }
  let sC = String(d(sB) || "");
  if (/heartgreen/i.test(sC) || G(sB)) {
    return null;
  }
  {
    let sQ = Z(sB);
    if (sQ !== undefined) {
      return sQ;
    }
  }
  if (sB.wspeed !== undefined) {
    return "dr";
  }
  if (!v.first("obj_lborder")) {
    return null;
  }
  let sZ = sB.movement;
  if (sZ === 1) {
    return "red";
  } else if (sZ === 2 || sZ === 11 || sZ === 12 || sZ === 13) {
    if (v.first("obj_plat")) {
      return null;
    } else {
      return "grav";
    }
  } else {
    return null;
  }
}
E(s2, "soulKind");
var s3 = {
  2: [0, 1],
  12: [0, -1],
  11: [1, 0],
  13: [-1, 0],
};
var s4 = [
  [0, 0],
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
];
function s5(sB) {
  let sC = d(sB);
  let sZ = sC && u[sC];
  let sQ = sB.image_xscale || 1;
  let sl = sB.image_yscale || 1;
  if (!sZ || !sZ.bb) {
    return {
      l: 0,
      t: 0,
      r: 16,
      b: 16,
    };
  } else {
    return {
      l: (sZ.bb[0] - sZ.ox) * sQ,
      t: (sZ.bb[1] - sZ.oy) * sl,
      r: (sZ.bb[2] + 1 - sZ.ox) * sQ,
      b: (sZ.bb[3] + 1 - sZ.oy) * sl,
    };
  }
}
E(s5, "soulRect");
var s6 = {
  ms: 70,
  escalated: 220,
  min: 18,
};
var s7 = E(
  (sB, sC) =>
    Math.min(
      sB.budget ?? (sC > 60 ? s6.escalated : s6.ms),
      sB.deadline !== undefined ? Math.max(0, sB.deadline - performance.now()) : Infinity,
    ),
  "recordBudget",
);
function s8(sB, sC, sZ, sQ, sl = 1000000000) {
  let sw = performance.now();
  let sM = h();
  let sJ = e.synthetic;
  let sh = r();
  K(false);
  b();
  e.synthetic = null;
  let sP = !!sC && typeof sC == "object";
  let sS = sC !== "dr" && !sP;
  let sk = sS || p(sB) ? 1 : 2;
  let sF = sP ? sC.reach || 200 : (sS ? k.sp || 4 : sB.wspeed || 4) * sZ + 40;
  let sA = sB.x - sF;
  let sr = sB.y - sF;
  let su = sB.x + sF;
  let sL = sB.y + sF;
  if (sS) {
    let U8 = v.first("obj_lborder");
    let U9 = v.first("obj_rborder");
    let UU = v.first("obj_uborder");
    let UO = v.first("obj_dborder");
    if (U8 && U9 && UU && UO) {
      sA = Math.max(sA, U8.x + (Math.abs(U8.sprite_width) || 0) - 24);
      su = Math.min(su, U9.x + 24);
      sr = Math.max(sr, UU.y + (Math.abs(UU.sprite_height) || 0) - 24);
      sL = Math.min(sL, UO.y + 24);
    }
  }
  let se = Math.max(0, Math.floor(sA));
  let sx = Math.max(0, Math.floor(sr));
  let sv = Math.min(640, Math.ceil(su));
  let sK = Math.min(480, Math.ceil(sL));
  let sb = Math.max(1, Math.ceil((sv - se) / sk));
  let sE = Math.max(1, Math.ceil((sK - sx) / sk));
  let sn = o(0, se, sx, sb, sE, sk, sZ + 1);
  let sD = o(1, se, sx, sb, sE, sk, sZ + 1);
  let sd = (sC === "dr" && !p(sB)) || sP ? o(2, se, sx, sb, sE, sk, sZ + 1) : null;
  let sf = [];
  let sg = [];
  let sa = [];
  let sV = [];
  let sc = [[sB.x, sB.y]];
  let sY = [];
  let sX = () => {
    {
      let UT = C();
      if (UT !== undefined) {
        return UT;
      }
    }
    let UW = v.first("obj_nonsolid_growtangle");
    if (!UW) {
      let UN = v.first("obj_growtangle");
      if (
        UN &&
        UN.keep === 1 &&
        ((UN.path_speed !== 0 && UN.path_speed !== undefined) ||
          (UN.speed !== 0 && UN.speed !== undefined) ||
          UN.megakeep === 1)
      ) {
        UW = UN;
      }
    }
    if (!UW) {
      return null;
    }
    let UR = (Math.abs(UW.sprite_width) || 0) / 2;
    let Uy = (Math.abs(UW.sprite_height) || 0) / 2;
    return [UW.x - UR + 5, UW.x + UR - 22, UW.y - Uy + 5, UW.y + Uy - 22];
  };
  sY[0] = sX();
  let sm = sB;
  let sj = 0;
  let sz = [];
  let so = [];
  let U0 = [];
  let U1 = (UW) => {
    if (UW > 0) {
      sc[UW] = sm.destroyed ? sc[UW - 1] : [sm.x, sm.y];
      sY[UW] = sX();
    }
    sn.clearOcc();
    sD.clearOcc();
    if (sd) {
      sd.clearOcc();
    }
    let UR = [];
    for (let Uy of sz) {
      if (!Uy.destroyed) {
        continue;
      }
      Uy.destroyed = false;
      let UT = null;
      try {
        UT = M(Uy);
      } finally {
        Uy.destroyed = true;
      }
      if (UT) {
        for (let UN of UT) {
          let UG = UN.blue ? sD : sn;
          if (UN.mask) {
            UG.paint(Uy);
          } else if (UN.rect) {
            UG.paintRect(UN.rect[0] - 1, UN.rect[1] - 1, UN.rect[2] + 2, UN.rect[3] + 2);
          } else if (UN.line) {
            UG.paintLine(UN.line[0], UN.line[1], UN.line[2], UN.line[3], UN.line[4]);
          }
        }
      }
    }
    for (let UH of v.list) {
      if (UH.destroyed || UH === sm) {
        continue;
      }
      if (sd && UH.is("obj_battlesolid")) {
        sd.paint(UH);
        continue;
      }
      let Ut = M(UH);
      if (Ut) {
        UR.push(UH);
        for (let Up of Ut) {
          let UI = Up.blue ? sD : sn;
          if (Up.mask) {
            UI.paint(UH);
          } else if (Up.rect) {
            UI.paintRect(Up.rect[0] - 1, Up.rect[1] - 1, Up.rect[2] + 2, Up.rect[3] + 2);
          } else if (Up.line) {
            UI.paintLine(Up.line[0], Up.line[1], Up.line[2], Up.line[3], Up.line[4]);
          }
        }
      }
    }
    for (let Uq of so) {
      let UB = Uq.self;
      if (!UB || UB === sm || !UB.is || UB.is("obj_boneplat") || !w(UB)) {
        continue;
      }
      let UC =
        UB.blue === 1 || UB.is("blt_bluesword") || (UB.is("obj_sans_bonebul") && UB.type === 1)
          ? sD
          : sn;
      if (Uq.rect) {
        UC.paintRect(Uq.rect[0] - 1, Uq.rect[1] - 1, Uq.rect[2] + 2, Uq.rect[3] + 2);
      } else if (Uq.seg) {
        UC.paintSeg(Uq.seg[0], Uq.seg[1], Uq.seg[2], Uq.seg[3]);
      } else if (Uq.circle) {
        UC.paintCircle(Uq.circle[0], Uq.circle[1], Uq.circle[2]);
      }
    }
    so = [];
    sz = UR;
    sn.commit(UW);
    sD.commit(UW);
    if (sd) {
      sd.commit(UW);
    }
    U0[UW] = B();
    if (sS) {
      sa[UW] = sm.destroyed ? sa[UW - 1] : sm.movement;
      sV[UW] = sm.destroyed
        ? sV[UW - 1]
        : {
            vs: sm.vspeed || 0,
            hs: sm.hspeed || 0,
            js: sm.jumpstage | 0,
          };
      let UZ = [];
      for (let UM of v.list) {
        if (UM.destroyed || !UM.is("obj_boneplat")) {
          continue;
        }
        let UJ = UM.len || 50;
        UZ.push({
          id: UM,
          l: UM.x - UJ + 2,
          r: UM.x + UJ - 2,
          top: UM.y - 4,
          bot: UM.y + 2,
          y: UM.y,
          hs: UM.hspeed || 0,
          vs: UM.vspeed || 0,
        });
      }
      sg[UW] = UZ;
      let UQ = v.first("obj_lborder");
      let Ul = v.first("obj_rborder");
      let Ui = v.first("obj_uborder");
      let Uw = v.first("obj_dborder");
      sf[UW] =
        UQ && Ul && Ui && Uw
          ? [
              UQ.x + (Math.abs(UQ.sprite_width) || 0),
              Ul.x - (Math.abs(sB.sprite_width) || 16),
              Ui.y + (Math.abs(Ui.sprite_height) || 0),
              Uw.y - (Math.abs(sB.sprite_height) || 16),
            ]
          : sf[UW - 1] || [0, 624, 0, 464];
    }
  };
  let U2 = sS ? k.invc | 0 : k.inv | 0;
  let U3 = sB.shot === 1 || /yellow/i.test(String(sB.sprite_index || ""));
  let U4 = k.mnfight;
  let U5 = 0;
  let U6 = sP && e.held.b1 ? ["z"] : [];
  let U7 = false;
  try {
    for (let UW of ["left", "right", "up", "down"]) {
      e.held[UW] = false;
    }
    U1(0);
    for (let UR = 1; UR <= sZ; UR++) {
      for (let UN of ["left", "right", "up", "down"]) {
        e.held[UN] = false;
      }
      let Uy = sQ && sQ[UR - 1];
      if (Uy) {
        for (let UG of Uy) {
          if (UG === "left" || UG === "right" || UG === "up" || UG === "down") {
            e.held[UG] = true;
          }
        }
      }
      let UT = N(Uy || [], UR > 1 ? (sQ && sQ[UR - 2]) || [] : U6);
      if (UT || U7) {
        e.synthetic = UT;
        U7 = !!UT;
      }
      if (sS) {
        k.invc = 99;
      } else {
        k.inv = 99;
      }
      if (U3) {
        let UH = UR % 4 === 1;
        e.synthetic = () => {
          e.pressed.b1 = UH;
          e.held.b1 = UH;
          if (UT) {
            UT();
          }
        };
      }
      A.on = true;
      A.shapes.length = 0;
      try {
        x(J, g());
      } finally {
        A.on = false;
        so = A.shapes.slice();
        A.shapes.length = 0;
      }
      a.frames++;
      sj = UR;
      U1(UR);
      if (k.battleover || sm.destroyed || (k.mnfight !== U4 && ++U5 >= 3)) {
        break;
      }
      if (UR >= s6.min && performance.now() - sw > sl) {
        a.cut = (a.cut | 0) + 1;
        break;
      }
    }
  } catch {
  } finally {
    P(sM);
    F();
    e.synthetic = sJ;
    K(sh);
  }
  return {
    hz: sn,
    blue: sD,
    solid: sd,
    walls: sf,
    plats: sg,
    modes: sa,
    vel: sV,
    soulAt: sc,
    clampBox: sY,
    n: sj,
    inv0: U2,
    goals5: U0,
  };
}
E(s8, "record");
function s9(sB, sC, sZ, sQ, sl, sw) {
  let sM = sZ * sl;
  let sJ = sQ * sl;
  let sh = sZ < 0;
  let sP = sZ > 0;
  let sS = sQ < 0;
  let sk = sQ > 0;
  if (sw(sB + sM, sC)) {
    for (let sA = sl; sA > 0; sA--) {
      if (!sk && !sw(sB + sM, sC - sA)) {
        sC -= sA;
        sJ = 0;
        break;
      }
      if (!sS && !sw(sB + sM, sC + sA)) {
        sC += sA;
        sJ = 0;
        break;
      }
    }
    let sF = 0;
    if (sM > 0) {
      for (let sr = sM; sr >= 0; sr--) {
        if (!sw(sB + sr, sC)) {
          sM = sr;
          sF = 1;
          break;
        }
      }
    }
    if (sM < 0) {
      for (let su = sM; su <= 0; su++) {
        if (!sw(sB + su, sC)) {
          sM = su;
          sF = 1;
          break;
        }
      }
    }
    if (!sF) {
      sM = 0;
    }
  }
  if (sw(sB, sC + sJ)) {
    for (let se = sl; se > 0; se--) {
      if (!sP && !sw(sB - se, sC + sJ)) {
        sB -= se;
        sM = 0;
        break;
      }
      if (!sh && !sw(sB + se, sC + sJ)) {
        sB += se;
        sM = 0;
        break;
      }
    }
    let sL = 0;
    if (sJ > 0) {
      for (let sx = sJ; sx >= 0; sx--) {
        if (!sw(sB, sC + sx)) {
          sJ = sx;
          sL = 1;
          break;
        }
      }
    }
    if (sJ < 0) {
      for (let sv = sJ; sv <= 0; sv++) {
        if (!sw(sB, sC + sv)) {
          sJ = sv;
          sL = 1;
          break;
        }
      }
    }
    if (!sL) {
      sJ = 0;
    }
  }
  if (sw(sB + sM, sC + sJ)) {
    let sK = 0;
    let sb = sM;
    let sE = sJ;
    while (sE !== 0 || sb !== 0) {
      if (!sw(sB + sb, sC + sE)) {
        sM = sb;
        sJ = sE;
        sK = 1;
        break;
      }
      if (Math.abs(sE) >= 1) {
        if (sE > 0) {
          sE--;
        } else {
          sE++;
        }
      } else {
        sE = 0;
      }
      if (Math.abs(sb) >= 1) {
        if (sb > 0) {
          sb--;
        } else {
          sb++;
        }
      } else {
        sb = 0;
      }
    }
    if (!sK) {
      sM = 0;
      sJ = 0;
    }
  }
  return [sB + sM, sC + sJ];
}
E(s9, "drMove");
function ss(sB) {
  if (l(sB) || Q()) {
    return false;
  } else {
    return !!s2(sB);
  }
}
E(ss, "oracleCovers");
function sU(sB = {}) {
  let sC = () => sB.deadline !== undefined && performance.now() >= sB.deadline;
  let sZ = sN(sB);
  if (sZ && sZ.priced) {
    return sZ;
  }
  if (sZ && sZ.hits > 0 && !sB.horizon && !sB.noEscalate && !sC()) {
    let sl = sN(
      Object.assign({}, sB, {
        horizon: 100,
        cap: Math.max(sB.cap || 0, 2000),
      }),
    );
    if (sl && sl.hits < sZ.hits) {
      sZ = sl;
    }
  }
  let sQ = v.first("obj_heart");
  if (
    sZ &&
    sZ.hits > 0 &&
    !sB.noEscalate &&
    sQ &&
    (sQ.shot === 1 || /yellow/i.test(String(sQ.sprite_index || "")))
  ) {
    for (let sw of ["up", "down", "left", "right"]) {
      for (let sM of [8, 16, 28]) {
        if (sC()) {
          break;
        }
        let sJ = [];
        for (let sP = 0; sP < sM; sP++) {
          sJ.push([sw]);
        }
        let sh = sN(
          Object.assign({}, sB, {
            guide: sJ,
          }),
        );
        if (sh && sh.hits < sZ.hits) {
          sZ = sh;
        }
        if (sZ.hits === 0) {
          break;
        }
      }
      if (sZ.hits === 0 || sC()) {
        break;
      }
    }
  }
  for (let sS = 0; sS < 2 && sZ && sZ.hits > 0 && !sB.noEscalate && !sC(); sS++) {
    let sk = sN(
      Object.assign({}, sB, {
        guide: sZ.keys,
        horizon: sZ.horizon > 45 ? 100 : undefined,
      }),
    );
    if (!sk || sk.hits >= sZ.hits) {
      break;
    }
    sZ = sk;
  }
  return sZ;
}
E(sU, "oraclePlan");
var sO = {
  a: null,
  b: null,
  idx: null,
  cap: 0,
  layers: [],
  hash: new Map(),
};
var sW = E(
  (sB) => ({
    n: 0,
    X: new Float64Array(sB),
    Y: new Float64Array(sB),
    U: new Float64Array(sB),
    JS: new Int8Array(sB),
    LK: new Int16Array(sB),
    C: new Float64Array(sB),
    HT: new Int16Array(sB),
    A: new Int8Array(sB),
    P: new Int32Array(sB),
  }),
  "dpFull",
);
function sR(sB) {
  if (sO.cap < sB) {
    sO.a = sW(sB);
    sO.b = sW(sB);
    sO.idx = new Int32Array(sB);
    sO.cap = sB;
  }
  return sO;
}
E(sR, "dpScratch");
function sy(sB, sC) {
  let sZ = sC.n;
  let sQ = Math.max(sZ, 1200);
  let sl = sO.layers[sB];
  if (!sl || sl.X.length < sZ) {
    sl = sO.layers[sB] = {
      n: 0,
      X: new Float64Array(sQ),
      Y: new Float64Array(sQ),
      HT: new Int16Array(sQ),
      A: new Int8Array(sQ),
      P: new Int32Array(sQ),
    };
  }
  sl.n = sZ;
  sl.X.set(sC.X.subarray(0, sZ));
  sl.Y.set(sC.Y.subarray(0, sZ));
  sl.HT.set(sC.HT.subarray(0, sZ));
  sl.A.set(sC.A.subarray(0, sZ));
  sl.P.set(sC.P.subarray(0, sZ));
  return sl;
}
E(sy, "dpLayer");
function sT(sB) {
  let sC = sO.hash.get(sB);
  if (!sC) {
    sC = {
      hk: new Float64Array(sB),
      hv: new Int32Array(sB),
      hs: new Int32Array(sB),
      stamp: 0,
    };
    sO.hash.set(sB, sC);
  }
  if (sC.stamp > 1073741823) {
    sC.hs.fill(0);
    sC.stamp = 0;
  }
  return sC;
}
E(sT, "dpHash");
function sN(sB = {}) {
  let sC = v.first("obj_heart");
  let sZ = s2(sC);
  if (!sZ) {
    return null;
  }
  if (typeof sZ == "object") {
    return sG(sZ, sB, sC);
  }
  let sQ = performance.now();
  let sl = sB.horizon || (sZ === "dr" ? 36 : 45);
  let sw = performance.now();
  let sM = s8(sC, sZ, sl, sB.guide || null, s7(sB, sl));
  a.rec = (a.rec || 0) + (performance.now() - sw);
  let sJ = sM.n;
  if (sJ < 2) {
    return null;
  }
  let sh = s5(sC);
  let sP = sZ !== "dr";
  let sS = 0;
  let sk = sP ? 4 : 6;
  let sF = (UM, UJ, Uh, UP) =>
    sM.hz.any(UM, UJ + sh.l + sS, Uh + sh.t + sS, UJ + sh.r - sS, Uh + sh.b - sS) ||
    (UP && sM.blue.any(UM, UJ + sh.l + sS, Uh + sh.t + sS, UJ + sh.r - sS, Uh + sh.b - sS));
  let sA = (UM, UJ, Uh) =>
    sM.hz.any(UM, UJ + sh.l - sk, Uh + sh.t - sk, UJ + sh.r + sk, Uh + sh.b + sk);
  let sr = sZ === "dr" ? I(sC) : null;
  let su = sr
    ? () => sr
    : sM.solid
      ? (UM) => (UJ, Uh) => sM.solid.any(UM, UJ + sh.l, Uh + sh.t, UJ + sh.r, Uh + sh.b)
      : null;
  let sL = sP ? k.sp || 4 : sC.wspeed || 4;
  let sx = sC.movement;
  let sv = sZ === "dr" ? H(sC) : null;
  let sK = (sZ === "dr" && t(sC)) || 1000;
  sM.modes[0] = sx;
  let sb = s3[sx];
  let sE = (UM, UJ, Uh) => (UM[1] ? UJ * UM[1] : Uh * UM[0]);
  let sn = sb ? sE(sb, sC.vspeed || 0, sC.hspeed || 0) : 0;
  let sD = sC.jumpstage | 0;
  let sd = sM.walls[0] ? (sM.walls[0][0] + sM.walls[0][1]) / 2 : sC.x;
  let sf = sM.walls[0] ? (sM.walls[0][2] + sM.walls[0][3]) / 2 : sC.y;
  let sg = new Float64Array(sJ + 1);
  let sa = new Float64Array(sJ + 1);
  if (sZ === "dr" || sZ === "red") {
    let UM = sB.guide || [];
    for (let UJ = 1; UJ <= sJ; UJ++) {
      let Uh = sM.soulAt[UJ - 1];
      let UP = sM.soulAt[UJ];
      if (!Uh || !UP) {
        continue;
      }
      let US = UM[UJ - 1] || [];
      let Uk = (US.includes("right") ? 1 : 0) - (US.includes("left") ? 1 : 0);
      let UF = (US.includes("down") ? 1 : 0) - (US.includes("up") ? 1 : 0);
      let UA = Uh[0];
      let Ur = Uh[1];
      if (sZ === "dr") {
        let Ue = s9(UA, Ur, Uk, UF, sL, su ? su(UJ) : () => false);
        UA = Ue[0];
        Ur = Ue[1];
        let Ux = sM.clampBox[UJ];
        if (Ux) {
          UA = Math.min(Math.max(UA, Ux[0]), Ux[1]);
          Ur = Math.min(Math.max(Ur, Ux[2]), Ux[3]);
        }
      } else {
        let Uv = sM.walls[UJ] || sM.walls[UJ - 1];
        if ((sM.modes[UJ] ?? sM.modes[UJ - 1]) === 1) {
          UA += Uk * sL;
          Ur += UF * sL;
        }
        if (Uv) {
          UA = Math.min(Math.max(UA, Uv[0]), Uv[1]);
          Ur = Math.min(Math.max(Ur, Uv[2]), Uv[3]);
        }
      }
      let Uu = UP[0] - UA;
      let UL = UP[1] - Ur;
      if (Math.abs(Uu) > 0.05 && Math.abs(Uu) < 40) {
        sg[UJ] = Uu;
      }
      if (Math.abs(UL) > 0.05 && Math.abs(UL) < 40) {
        sa[UJ] = UL;
      }
    }
  }
  let sV = s4;
  let sc = null;
  for (let UK of v.list) {
    if (!UK.destroyed && UK.is("obj_boneplat") && UK.lock === 1) {
      sc = UK;
    }
  }
  let sY = sB.cap || 1200;
  let sX = sB.near || 12;
  let sm = sY * sV.length + 16;
  let sj = new Map();
  let sz = 0;
  let so = (Ub) => {
    if (!Ub) {
      return 0;
    }
    let UE = sj.get(Ub);
    if (!UE) {
      UE = ++sz;
      sj.set(Ub, UE);
    }
    return UE;
  };
  let U0 = sR(sm);
  let U1 = U0.a;
  let U2 = U0.b;
  U1.n = 1;
  U1.X[0] = sC.x;
  U1.Y[0] = sC.y;
  U1.U[0] = sn;
  U1.JS[0] = sD;
  U1.LK[0] = so(sc);
  U1.C[0] = 0;
  U1.HT[0] = 0;
  U1.A[0] = -1;
  U1.P[0] = -1;
  let U3 = [sy(0, U1)];
  let U4 = [];
  for (let [Ub, UE] of sj) {
    U4[UE] = Ub;
  }
  let U5 = 0;
  let U6 = 1 << Math.ceil(Math.log2(sm * 2 + 64));
  let U7 = sT(U6);
  let U8 = U7.hk;
  let U9 = U7.hv;
  let UU = U7.hs;
  let UO = U7.stamp;
  let UW = (Un) => {
    let UD =
      (Math.imul(Un | 0, 2654435761) ^ Math.imul((Un / 4294967296) | 0, 2246822507)) & (U6 - 1);
    while (UU[UD] === UO && U8[UD] !== Un) {
      UD = (UD + 1) & (U6 - 1);
    }
    return UD;
  };
  let UR = sM.hz.w * sM.hz.cs + 4;
  let Uy = sM.hz.h * sM.hz.cs + 4;
  let UT = sM.hz.x0 - 2;
  let UN = sM.hz.y0 - 2;
  if (!m || m.length < UR * Uy * 2) {
    m = new Int8Array(UR * Uy * 2);
    j = new Int32Array(UR * Uy * 2);
    z = 0;
  }
  if (z > 1073741823) {
    j.fill(0);
    z = 0;
  }
  let UG = m;
  let UH = j;
  let Up = z;
  z += sJ + 2;
  for (let Un = 1; Un <= sJ; Un++) {
    let UD = U2;
    let Ud = Math.min(sm, U1.n * sV.length);
    UD.n = 0;
    UO = ++U7.stamp;
    let Uf = sM.walls[Un] || sM.walls[Un - 1];
    let Ug = su ? su(Un) : null;
    let Ua = Un <= sM.inv0;
    let UV = sZ === "dr" ? -1 : (sM.modes[Un] ?? sM.modes[Un - 1]);
    let Uc = s3[UV] || null;
    let UY = sZ !== "dr" && Un > 1 && UV !== sM.modes[Un - 1];
    let UX = sM.vel[Un];
    let Um = Uc && UV === 2 ? sM.plats[Un] : null;
    if (Um) {
      for (let Uz of Um) {
        let Uo = so(Uz.id);
        Uz.pid = Uo;
        U4[Uo] = Uz.id;
      }
    }
    let Uj = Un <= sX || (Un - sX) % 3 === 1;
    for (let O0 = 0; O0 < U1.n; O0++) {
      let O1 = U1.X[O0];
      let O2 = U1.Y[O0];
      let O3 = U1.A[O0];
      let O4 = U1.C[O0];
      let O5 = U1.HT[O0];
      for (let O6 = 0; O6 < sV.length; O6++) {
        if (!Uj && O3 >= 0 && O6 !== O3) {
          continue;
        }
        let O7 = sV[O6];
        let O8 = O1;
        let O9 = O2;
        let OU = U1.U[O0];
        let OO = U1.JS[O0];
        let OW = U1.LK[O0];
        if (UY && Uc && UX) {
          OU = sE(Uc, UX.vs, UX.hs);
          OO = UX.js;
          OW = 0;
        }
        if (sZ === "dr") {
          let Ol = s9(O8, O9, O7[0], O7[1], sL, Ug);
          O8 = Ol[0] + sg[Un];
          O9 = Ol[1] + sa[Un];
          let Oi = sM.clampBox[Un];
          if (Oi) {
            if (O8 < Oi[0]) {
              O8 = Oi[0];
            }
            if (O8 > Oi[1]) {
              O8 = Oi[1];
            }
            if (O9 < Oi[2]) {
              O9 = Oi[2];
            }
            if (O9 > Oi[3]) {
              O9 = Oi[3];
            }
          }
          if (O8 < 0) {
            O8 = 0;
          }
          if (O8 > 624) {
            O8 = 624;
          }
          if (O9 < 0) {
            O9 = 0;
          }
        } else if (UV === 1 || !Uc) {
          if (UV === 1) {
            O8 += O7[0] * sL;
            O9 += O7[1] * sL;
          }
          if (Uf) {
            if (O8 < Uf[0]) {
              O8 = Uf[0];
            }
            if (O8 > Uf[1]) {
              O8 = Uf[1];
            }
            if (O9 < Uf[2]) {
              O9 = Uf[2];
            }
            if (O9 > Uf[3]) {
              O9 = Uf[3];
            }
          }
          O8 += sg[Un];
          O9 += sa[Un];
        } else {
          let Ow = Uc[1] ? O7[0] : O7[1];
          let OM = O7[0] * Uc[0] + O7[1] * Uc[1] < 0;
          if (Uc[1]) {
            O8 += Ow * sL;
          } else {
            O9 += Ow * sL;
          }
          if (OM && OO === 1 && OU === 0) {
            OO = 2;
            OU = -6;
          }
          if (OO === 2) {
            if (!OM && OU <= -1) {
              OU = -1;
            }
            if (OU > 0.5 && OU < 8) {
              OU += 0.6;
            } else if (OU > -1 && OU <= 0.5) {
              OU += 0.2;
            } else if (OU > -4 && OU <= -1) {
              OU += 0.5;
            } else if (OU <= -4) {
              OU += 0.2;
            }
          }
          O8 += Uc[0] * OU;
          O9 += Uc[1] * OU;
          if (Uf) {
            let OJ = Uc[1] ? Uf[2] : Uf[0];
            let Oh = Uc[1] ? Uf[3] : Uf[1];
            let OP = Uc[1] ? O9 : O8;
            let OS = Uc[0] + Uc[1] > 0;
            if (OS ? OP >= Oh : OP <= OJ) {
              OP = OS ? Oh : OJ;
              OO = 1;
              OU = 0;
            }
            if (OS ? OP < OJ : OP > Oh) {
              OP = OS ? OJ : Oh;
              if (OU < 0) {
                OU = 0;
              }
            }
            if (Uc[1]) {
              O9 = OP;
            } else {
              O8 = OP;
            }
            if (Uc[1]) {
              if (O8 < Uf[0]) {
                O8 = Uf[0];
              }
              if (O8 > Uf[1]) {
                O8 = Uf[1];
              }
            } else {
              if (O9 < Uf[2]) {
                O9 = Uf[2];
              }
              if (O9 > Uf[3]) {
                O9 = Uf[3];
              }
            }
          }
          if (Um && Um.length) {
            let Ok = 0;
            let OF = null;
            for (let OA of Um) {
              let Or =
                O8 + sh.l <= OA.r + 1 &&
                O8 + sh.r >= OA.l &&
                O9 + sh.t <= OA.bot + 1 &&
                O9 + sh.b >= OA.top;
              if (Or && OU >= 0 && O9 <= OA.y - 11) {
                O9 = OA.y - 16;
                OU = 0;
                OO = 1;
                Ok = OA.pid;
                OF = OA;
              } else if (!Or && OW === OA.pid && OO === 1) {
                OO = 2;
                OU = 0;
              }
              if (Or && OW === OA.pid && !Ok && OU === 0 && OO === 1) {
                Ok = OA.pid;
                OF = OA;
              }
            }
            OW = Ok;
            if (OF) {
              O8 += OF.hs;
              O9 += OF.vs;
            }
          } else if (OW) {
            if (OO === 1) {
              OO = 2;
              OU = 0;
            }
            OW = 0;
          }
        }
        let OR = Math.abs(O8 - O1) > 0.01 || Math.abs(O9 - O2) > 0.01;
        let Oy = O4;
        let OT = O5;
        let ON;
        let OG = Math.floor(O8);
        let OH = Math.floor(O9);
        let Op =
          (sP || (O8 === OG && O9 === OH)) &&
          OG - UT >= 0 &&
          OH - UN >= 0 &&
          OG - UT < UR &&
          OH - UN < Uy
            ? ((OH - UN) * UR + (OG - UT)) * 2 + (O8 !== OG || O9 !== OH ? 1 : 0)
            : -1;
        if (Op >= 0 && UH[Op] === Up + Un) {
          ON = UG[Op];
        } else {
          ON = sF(Un, O8, O9, false) ? 1 : sF(Un, O8, O9, true) ? 2 : sA(Un, O8, O9) ? 3 : 0;
          if (Op >= 0) {
            UH[Op] = Up + Un;
            UG[Op] = ON;
          }
        }
        let OI = sK !== 1000 && sZ === "dr" && OU > 0 && Un - OU < 30;
        if (!Ua && !OI && (ON === 1 || (ON === 2 && OR))) {
          Oy += sK;
          OT++;
          if (sK !== 1000 && sZ === "dr") {
            OU = Un;
          }
        } else if (ON === 3) {
          Oy += 2;
        }
        if (O6 !== O3 && O3 >= 0) {
          Oy += 0.15;
        }
        if (O6 !== 0) {
          Oy += 0.02;
        }
        if (sv) {
          Oy += sv(O8, O9);
        }
        {
          let Ou = sM.goals5 && sM.goals5[Un];
          if (Ou) {
            for (let OL of Ou) {
              if (O8 >= OL.rect[0] && O8 <= OL.rect[2] && O9 >= OL.rect[1] && O9 <= OL.rect[3]) {
                Oy -= OL.w;
              }
            }
          }
        }
        let Oq = Math.round(O8 / (sP ? 1 : 2));
        let OB = Math.round(O9 / (sP ? 1 : 2));
        let OC = Uc
          ? (((Oq * 512 + OB) * 128 + (Math.round(OU * 5) + 64)) * 3 + OO) * 64 + OW
          : Oq * 512 + OB;
        let OZ = UW(OC);
        let OQ;
        if (UU[OZ] !== UO) {
          if (UD.n >= Ud) {
            continue;
          }
          OQ = UD.n++;
          UU[OZ] = UO;
          U8[OZ] = OC;
          U9[OZ] = OQ;
        } else if (Oy < UD.C[U9[OZ]]) {
          OQ = U9[OZ];
        } else {
          U5++;
          continue;
        }
        UD.X[OQ] = O8;
        UD.Y[OQ] = O9;
        UD.U[OQ] = OU;
        UD.JS[OQ] = OO;
        UD.LK[OQ] = OW;
        UD.C[OQ] = Oy;
        UD.HT[OQ] = OT;
        UD.A[OQ] = O6;
        UD.P[OQ] = O0;
        U5++;
      }
    }
    if (UD.n > sY) {
      let Oe = U0.idx.subarray(0, UD.n);
      for (let OK = 0; OK < UD.n; OK++) {
        Oe[OK] = OK;
      }
      let Ox = UD.C;
      Oe.sort((Ob, OE) => Ox[Ob] - Ox[OE]);
      let Ov = U1;
      for (let Ob = 0; Ob < sY; Ob++) {
        let OE = Oe[Ob];
        Ov.X[Ob] = UD.X[OE];
        Ov.Y[Ob] = UD.Y[OE];
        Ov.U[Ob] = UD.U[OE];
        Ov.JS[Ob] = UD.JS[OE];
        Ov.LK[Ob] = UD.LK[OE];
        Ov.C[Ob] = UD.C[OE];
        Ov.HT[Ob] = UD.HT[OE];
        Ov.A[Ob] = UD.A[OE];
        Ov.P[Ob] = UD.P[OE];
      }
      Ov.n = sY;
      U2 = UD;
      U1 = Ov;
    } else {
      U2 = U1;
      U1 = UD;
    }
    U3.push(sy(U3.length, U1));
    if (!U1.n) {
      break;
    }
  }
  let UI = U1;
  let Uq = U3.length - 1;
  let UB = -1;
  let UC = Infinity;
  for (let On = 0; On < UI.n; On++) {
    let OD = UI.C[On];
    let Od = UI.X[On];
    let Of = UI.Y[On];
    if (sM.hz.any(Uq, Od + sh.l - 16, Of + sh.t - 16, Od + sh.r + 16, Of + sh.b + 16)) {
      OD += 3;
    }
    if (!sv) {
      OD += (Math.abs(Od - sd) + Math.abs(Of - sf)) * 0.01;
    }
    if (OD < UC) {
      UC = OD;
      UB = On;
    }
  }
  if (UB < 0) {
    return null;
  }
  let UZ = [];
  let UQ = [];
  for (let Og = Uq, Oa = UB; Og > 0; Og--) {
    let OV = U3[Og];
    UZ.push(OV.A[Oa]);
    UQ.push([OV.X[Oa], OV.Y[Oa], OV.HT[Oa]]);
    Oa = OV.P[Oa];
  }
  UZ.reverse();
  UQ.reverse();
  let Ul = {
    hits: UI.HT[UB],
  };
  let Ui = UZ.map((Oc) => {
    let OY = sV[Oc];
    let OX = [];
    if (OY[0] < 0) {
      OX.push("left");
    }
    if (OY[0] > 0) {
      OX.push("right");
    }
    if (OY[1] < 0) {
      OX.push("up");
    }
    if (OY[1] > 0) {
      OX.push("down");
    }
    return OX;
  });
  let Uw = performance.now() - sQ;
  a.plans++;
  a.ms += Uw;
  a.lastMs = Uw;
  a.states = U5;
  a.lastHits = Ul.hits;
  a.mode = sZ;
  return {
    keys: Ui,
    pos: UQ,
    hits: Ul.hits,
    mode: sZ,
    horizon: sJ,
    ms: Uw,
    rec: sM,
    priced: sK !== 1000,
  };
}
E(sN, "planOnce");
function sG(sB, sC, sZ) {
  let sQ = sB.inst && !sB.inst.destroyed ? sB.inst : sZ;
  if (
    !sQ ||
    !Array.isArray(sB.acts) ||
    !sB.acts.length ||
    typeof sB.step != "function" ||
    typeof sB.init != "function"
  ) {
    return null;
  }
  let sl = performance.now();
  let sw = sC.horizon || sB.horizon || 36;
  let sM = performance.now();
  let sJ = s8(sQ, sB, sw, sC.guide || null, s7(sC, sw));
  a.rec = (a.rec || 0) + (performance.now() - sM);
  let sh = sJ.n;
  if (sh < 2) {
    return null;
  }
  let sP = sB.rect || s5(sQ);
  let sS = 6;
  let sk = (U7, U8, U9, UU) =>
    sJ.hz.any(U7, U8 + sP.l, U9 + sP.t, U8 + sP.r, U9 + sP.b) ||
    (UU && sJ.blue.any(U7, U8 + sP.l, U9 + sP.t, U8 + sP.r, U9 + sP.b));
  let sF = (U7, U8, U9) =>
    sJ.hz.any(U7, U8 + sP.l - sS, U9 + sP.t - sS, U8 + sP.r + sS, U9 + sP.b + sS);
  let sA = (U7) =>
    sJ.solid
      ? (U8, U9) => sJ.solid.any(U7, U8 + sP.l, U9 + sP.t, U8 + sP.r, U9 + sP.b)
      : () => false;
  let sr = H(sQ);
  let su = sB.acts;
  let sL = sC.cap || sB.cap || 1200;
  let se = sC.near || sB.near || 12;
  let sx = sL * su.length + 16;
  let sv = 6;
  let sK = (U7) => ({
    n: 0,
    S: new Float64Array(U7 * sv),
    C: new Float64Array(U7),
    HT: new Int16Array(U7),
    A: new Int16Array(U7),
    P: new Int32Array(U7),
  });
  let sb = sK(1);
  let sE = sB.init(sQ) || [sQ.x, sQ.y];
  for (let U7 = 0; U7 < sv; U7++) {
    sb.S[U7] = Number(sE[U7]) || 0;
  }
  sb.n = 1;
  sb.C[0] = 0;
  sb.HT[0] = 0;
  sb.A[0] = -1;
  sb.P[0] = -1;
  let sn = [sb];
  let sD = 1 << Math.ceil(Math.log2(sx * 2 + 64));
  let sd = new Float64Array(sD);
  let sf = new Int32Array(sD);
  let sg = new Int32Array(sD);
  let sa = 0;
  let sV = 0;
  let sc = (U8) => {
    let U9 =
      (Math.imul(U8 | 0, 2654435761) ^ Math.imul((U8 / 4294967296) | 0, 2246822507)) & (sD - 1);
    while (sg[U9] === sa && sd[U9] !== U8) {
      U9 = (U9 + 1) & (sD - 1);
    }
    return U9;
  };
  let sY =
    typeof sB.key == "function"
      ? sB.key
      : (U8) => {
          let U9 = 0;
          for (let UU = 2; UU < sv; UU++) {
            U9 = (Math.imul(U9, 31) + Math.round(U8[UU] * 4)) | 0;
          }
          return (Math.round(U8[0] / 2) * 512 + Math.round(U8[1] / 2)) * 65536 + (U9 & 65535);
        };
  let sX = typeof sB.vulnerable == "function" ? sB.vulnerable : null;
  let sm = new Float64Array(sv);
  for (let U8 = 1; U8 <= sh; U8++) {
    let U9 = sK(Math.min(sx, sb.n * su.length));
    sa++;
    let UU = U8 <= sJ.inv0;
    let UO = U8 <= se || (U8 - se) % 3 === 1;
    let UW = {
      pm: sA(U8),
      clamp: sJ.clampBox[U8] || null,
      soulAt: sJ.soulAt,
      t: U8,
    };
    let UR = sJ.goals5 && sJ.goals5[U8];
    for (let Uy = 0; Uy < sb.n; Uy++) {
      let UT = sb.A[Uy];
      let UN = sb.C[Uy];
      let UG = sb.HT[Uy];
      let UH = Uy * sv;
      for (let Up = 0; Up < su.length; Up++) {
        if (!UO && UT >= 0 && Up !== UT) {
          continue;
        }
        for (let UM = 0; UM < sv; UM++) {
          sm[UM] = sb.S[UH + UM];
        }
        try {
          sB.step(sm, Up, U8, UW);
        } catch {
          continue;
        }
        let UI = sm[0];
        let Uq = sm[1];
        if (!Number.isFinite(UI) || !Number.isFinite(Uq)) {
          continue;
        }
        let UB = Math.abs(UI - sb.S[UH]) > 0.01 || Math.abs(Uq - sb.S[UH + 1]) > 0.01;
        let UC = UN;
        let UZ = UG;
        let UQ = sk(U8, UI, Uq, false) ? 1 : sk(U8, UI, Uq, true) ? 2 : sF(U8, UI, Uq) ? 3 : 0;
        if (!UU && (!sX || sX(sm)) && (UQ === 1 || (UQ === 2 && UB))) {
          UC += 1000;
          UZ++;
        } else if (UQ === 3) {
          UC += 2;
        }
        if (Up !== UT && UT >= 0) {
          UC += 0.15;
        }
        if (su[Up].length) {
          UC += 0.02;
        }
        if (sr) {
          UC += sr(UI, Uq);
        }
        if (UR) {
          for (let UJ of UR) {
            if (UI >= UJ.rect[0] && UI <= UJ.rect[2] && Uq >= UJ.rect[1] && Uq <= UJ.rect[3]) {
              UC -= UJ.w;
            }
          }
        }
        let Ul = sY(sm);
        let Ui = sc(Ul);
        let Uw;
        if (sg[Ui] !== sa) {
          if (U9.n >= U9.C.length) {
            continue;
          }
          Uw = U9.n++;
          sg[Ui] = sa;
          sd[Ui] = Ul;
          sf[Ui] = Uw;
        } else if (UC < U9.C[sf[Ui]]) {
          Uw = sf[Ui];
        } else {
          sV++;
          continue;
        }
        for (let Uh = 0; Uh < sv; Uh++) {
          U9.S[Uw * sv + Uh] = sm[Uh];
        }
        U9.C[Uw] = UC;
        U9.HT[Uw] = UZ;
        U9.A[Uw] = Up;
        U9.P[Uw] = Uy;
        sV++;
      }
    }
    if (U9.n > sL) {
      let UP = new Int32Array(U9.n);
      for (let UF = 0; UF < U9.n; UF++) {
        UP[UF] = UF;
      }
      let US = U9.C;
      UP.sort((UA, Ur) => US[UA] - US[Ur]);
      let Uk = sK(sL);
      for (let UA = 0; UA < sL; UA++) {
        let Ur = UP[UA];
        for (let Uu = 0; Uu < sv; Uu++) {
          Uk.S[UA * sv + Uu] = U9.S[Ur * sv + Uu];
        }
        Uk.C[UA] = U9.C[Ur];
        Uk.HT[UA] = U9.HT[Ur];
        Uk.A[UA] = U9.A[Ur];
        Uk.P[UA] = U9.P[Ur];
      }
      Uk.n = sL;
      sb = Uk;
    } else {
      sb = U9;
    }
    sn.push(sb);
    if (!sb.n) {
      break;
    }
  }
  let sj = sn[sn.length - 1];
  let sz = sn.length - 1;
  let so = sQ.x;
  let U0 = sQ.y;
  let U1 = -1;
  let U2 = Infinity;
  for (let UL = 0; UL < sj.n; UL++) {
    let Ue = sj.C[UL];
    let Ux = sj.S[UL * sv];
    let Uv = sj.S[UL * sv + 1];
    if (sJ.hz.any(sz, Ux + sP.l - 16, Uv + sP.t - 16, Ux + sP.r + 16, Uv + sP.b + 16)) {
      Ue += 3;
    }
    if (!sr) {
      Ue += (Math.abs(Ux - so) + Math.abs(Uv - U0)) * 0.002;
    }
    if (Ue < U2) {
      U2 = Ue;
      U1 = UL;
    }
  }
  if (U1 < 0) {
    return null;
  }
  let U3 = [];
  let U4 = [];
  for (let UK = sz, Ub = U1; UK > 0; UK--) {
    let UE = sn[UK];
    U3.push(UE.A[Ub]);
    U4.push([UE.S[Ub * sv], UE.S[Ub * sv + 1], UE.HT[Ub]]);
    Ub = UE.P[Ub];
  }
  U3.reverse();
  U4.reverse();
  let U5 = U3.map((Un) => su[Un].slice());
  let U6 = performance.now() - sl;
  a.plans++;
  a.ms += U6;
  a.lastMs = U6;
  a.states = sV;
  a.lastHits = sj.HT[U1];
  a.mode = sB.name || "custom";
  return {
    keys: U5,
    pos: U4,
    hits: sj.HT[U1],
    mode: sB.name || "custom",
    horizon: sh,
    ms: U6,
    rec: sJ,
  };
}
E(sG, "planCustom");
function sH(sB, sC = {}) {
  return sG(sB, sC, v.first("obj_heart"));
}
E(sH, "oraclePlanKind");
var st = typeof HTMLCanvasElement !== "undefined";
var sp = 45;
var sI = class Om {
  constructor(sB = {}) {
    this.opts = sB;
    this.plan = null;
    this.pos = 0;
    this.every = sB.every || 3;
    this.lastFrame = -9;
  }
  reset() {
    this.plan = null;
    this.pos = 0;
  }
  step() {
    if (v.frame !== this.lastFrame + 1) {
      this.plan = null;
    }
    this.lastFrame = v.frame;
    if (!this.plan || this.pos >= this.every || this.pos >= this.plan.keys.length) {
      let sC = this.plan ? this.plan.keys.slice(this.pos) : null;
      let sZ = Object.assign({}, this.opts, {
        guide: sC,
      });
      if (st && this.opts.budget === undefined && this.opts.deadline === undefined) {
        sZ.deadline = performance.now() + sp;
      }
      this.plan = sU(sZ);
      this.pos = 0;
      if (!this.plan) {
        return false;
      }
    }
    let sB = this.plan.keys[this.pos++] || [];
    T(sB.join("+"), 0);
    return true;
  }
};
E(sI, "OracleDriver");
var sq = sI;
export { d as a, a as b, s6 as c, ss as d, sU as e, sH as f, sp as g, sq as h };
