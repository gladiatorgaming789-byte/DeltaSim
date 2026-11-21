import {
  Df as f,
  G as u,
  Ho as o,
  Li as W,
  Oh as l,
  Uj as n,
  Yf as Q,
  dg as i0,
  gm as i1,
  hn as i2,
  jm as i3,
  l as i4,
  o as i5,
  oq as i6,
  tb as i7,
  un as i8,
} from "./c-DOJLBTFP.js";
import { b as i9 } from "./c-4ZZ4EIP5.js";
import { Gb as ii, T as iR, da } from "./c-TI3NUV3H.js";
import { j as iO, m as ix } from "./c-UDIQ4TLL.js";
import { a as im } from "./c-IOQMCY55.js";
import "./c-XN5NQRMB.js";
import "./c-LAR7MFOW.js";
import "./c-PNBP23RB.js";
import "./c-467NPQE4.js";
import "./c-BAF3JL6T.js";
import "./c-DSQH6PM3.js";
import { c as ip, d as ib } from "./c-A3CL5ELZ.js";
import "./c-ZSM55H2A.js";
import "./c-G7MM4LIS.js";
import "./c-SNBMULDO.js";
import "./c-2XD6JUBJ.js";
import "./c-2RHLG27W.js";
import {
  B as id,
  D as iD,
  F as iw,
  K as iF,
  d as ic,
  g as iE,
  x as iU,
  y as iJ,
} from "./c-Q4AJT7BT.js";
import "./c-3MS4RS6S.js";
import { Rh as it, a as iq, h as iX, k as iC, sb as iH } from "./c-HEUEF6GJ.js";
import "./c-66FIJ62A.js";
import "./c-QJXN6G4A.js";
import "./c-CPDHW4F2.js";
import "./c-Q2IMJXHR.js";
import "./c-UDQUHXBV.js";
import "./c-FKUTYDQS.js";
import "./c-43ZBXPN7.js";
import "./c-5UGGU4DV.js";
import { a as iA, b as iS, q as iV } from "./c-F4ZSRAAO.js";
import { A as ih, C as iT, J as iY, L as ij, g as iZ, o as ie } from "./c-O6GE5FYX.js";
import {
  I as iP,
  Ja as iG,
  c as iN,
  g as iI,
  ga as iM,
  gb as iu,
  hb as iK,
  j as io,
  l as iW,
  m as iv,
  ob as is,
  p as iy,
  r as iz,
  tc as il,
  wa as iB,
  z as ig,
  zb as iL,
} from "./c-ZEHUSSXN.js";
import { a as iQ, e as ik, j as R0, l as R1 } from "./c-7Q4J33FN.js";
R1();
R1();
var R2 = new Proxy(
  {},
  {
    get: iQ((O6, O7) => i6[O7] || ii[O7], "get"),
  },
);
var R3 = iQ((O6) => W[O6] || i9[O6] || it[O6] || (() => {}), "SCRIPT");
var { GID: R4, OBJREF: R5, instance_exists: R6 } = it;
var R7 = new Proxy(
  {},
  {
    get: iQ((O6, O7) => R2[O7], "get"),
  },
);
function R8(O6) {
  this.xx = R3("camerax").call(this);
  this.yy = R3("cameray").call(this);
  let O7 = 0;
  if (iZ.char[0] !== 0 && iZ.char[1] === 0 && iZ.char[2] === 0) {
    O7 = 1;
  }
  if (iZ.char[0] !== 0 && iZ.char[1] !== 0 && iZ.char[2] === 0) {
    O7 = 2;
  }
  for (let O8 = 0; R4(O8) < 3; O8++) {
    (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[O8] = this.xx + 80;
    (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[O8] = this.yy + 50 + O8 * 80;
    (Array.isArray(iZ.monsterinstancetype)
      ? iZ.monsterinstancetype
      : (iZ.monsterinstancetype = []))[O8] = R5(R2.obj_baseenemy);
    (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[O8] = 1;
    (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[O8] =
      this.xx + 500 + O8 * 20;
    (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[O8] =
      this.yy + 40 + O8 * 90;
  }
  (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
  (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
  if (iZ.char[0] !== 0 && iZ.char[1] === 0 && iZ.char[2] === 0) {
    (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 140;
  }
  if (iZ.char[0] !== 0 && iZ.char[1] !== 0 && iZ.char[2] === 0) {
    (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 100;
    (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 180;
  }
  (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* It is known.";
  switch (O6) {
    case 0:
      break;
    case 1: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_baseenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 1;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_baseenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 1;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Test enemies showed up.";
      break;
    }
    case 2: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_lancerboss);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 2;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 540;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      break;
    }
    case 3: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_dummyenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 3;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 160;
      if (ig(R6(R2.obj_npc_room))) {
        (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
          iX("obj_npc_room").xstart;
        (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
          iX("obj_npc_room").ystart;
      }
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      break;
    }
    case 4: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_diamondenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 5;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 140;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Rudinn drew near!";
      if (iZ.flag[500] >= 1) {
        (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
          "* A different Rudinn from last time drew near!";
      }
      if (iZ.flag[500] === 2) {
        (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
          "* Assumedly another different Rudinn appeared!";
      }
      break;
    }
    case 5: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_diamondenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 5;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_diamondenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 5;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* A necklace of Rudinns blocks your path.";
      break;
    }
    case 6: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_diamondenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 5;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_heartenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 6;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Rudinn and Hathy blocked the way!";
      break;
    }
    case 7: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_smallcheckers_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 9;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 440;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 150;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
      break;
    }
    case 8: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_clubsenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 16;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 400;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 120;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Clover grew close!";
      break;
    }
    case 9: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_heartenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 6;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_heartenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 6;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_heartenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 6;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Three Hathys blocked the way!";
      break;
    }
    case 12: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_checkers_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 10;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 120;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Here it comes!";
      break;
    }
    case 13: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_ponman_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 11;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_ponman_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 11;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Ponman drew near!";
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      break;
    }
    case 14: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_ponman_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 11;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_ponman_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 11;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_ponman_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 11;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Ponman drew near!";
      break;
    }
    case 15: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_clubsenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 7;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 400;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 30;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_heartenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 6;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 420;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Clover and Hathy grew close!";
      break;
    }
    case 16: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_rabbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 13;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 140;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Rabbick slithered in the way!";
      break;
    }
    case 17: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_rabbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 13;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_rabbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 13;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Rabbicks slithered in the way!";
      break;
    }
    case 18: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bloxer_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 14;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 140;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Bloxer assembled!";
      break;
    }
    case 19: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bloxer_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 14;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_bloxer_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 14;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Bloxers assembled!";
      break;
    }
    case 20: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_lancerboss2);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 12;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 120;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 160;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Lancer blocked the way!";
      break;
    }
    case 21: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_jigsawryenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 15;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 140;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Jigsawry drew near!";
      if (iZ.flag[500] >= 1) {
        (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
          "* A different Jigsawry from last time drew near!";
      }
      if (iZ.flag[500] === 2) {
        (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
          "* Assumedly another different Jigsawry appeared!";
      }
      break;
    }
    case 22: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_jigsawryenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 15;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_jigsawryenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 15;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_jigsawryenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 15;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* A board of Jigsawrys blocked the way!";
      break;
    }
    case 23: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_jigsawryenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 15;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_diamondenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 5;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_heartenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 6;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Smorgasboard.";
      break;
    }
    case 24: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_rabbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 13;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_diamondenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 5;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Rabbick slithered in the way!";
      break;
    }
    case 25: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 100;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 90;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 150;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 100;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 210;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_joker);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 20;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 160;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* LET THE GAMES BEGIN!";
      break;
    }
    case 27: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_checkers_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 21;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 120;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Here it comes^1. Again.";
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 65;
      break;
    }
    case 28: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_rudinnranger);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 22;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_rudinnranger);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 22;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Rudinn Rangers came sparkling into view!";
      break;
    }
    case 29: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_headhathy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 23;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_headhathy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 23;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Head Hathy blocked the way quietly!";
      break;
    }
    case 30: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_headhathy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 23;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_headhathy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 23;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_headhathy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 23;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Head Hathy blocked the way quietly! (x3)";
      break;
    }
    case 31: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_susieenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 19;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 520;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_lancerboss3);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 18;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 540;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 240;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Two bad guys blocked the way!";
      break;
    }
    case 32: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_rabbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 13;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_rabbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 13;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_rabbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 13;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Rabbicks slithered in the way!";
      break;
    }
    case 33: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_diamondenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 5;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_heartenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 6;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_diamondenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 5;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Various guys appeared!";
      break;
    }
    case 40: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_king_boss);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 25;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* King blocked the way!";
      break;
    }
    case 71: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_clubsenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 47;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 400;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Clover joins the stage!";
      break;
    }
    case 72: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_dojograzeenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 42;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 440;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 100;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* It's a grazing adventure.";
      break;
    }
    case 89: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_tasque_manager_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 42;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 487;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 94;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 0;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Graze!";
      break;
    }
    case 90: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_werewire_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 33;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_werewire_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 33;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Round One!";
      break;
    }
    case 91: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_poppup_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 31;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 412;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 40;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_omawaroid_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 30;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 466;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 106;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_virovirokun_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 35;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 412;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 184;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Round Two!";
      break;
    }
    case 92: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_tasque_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 32;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 432;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 52;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_tasque_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 32;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 140;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_maus_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 34;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 512;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 236;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Round Three!";
      break;
    }
    case 93: {
      (Array.isArray(iZ.flag) ? iZ.flag : (iZ.flag = []))[426] = iv(0, 1, 2, 3);
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_swatchling_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 36;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 394;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 8;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_swatchling_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 36;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 490;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] = this.yy + 74;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_swatchling_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 36;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 394;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 160;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Round Four!";
      break;
    }
    case 94: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_werewerewire_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 40;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 464;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 68;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_werewerewire_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 40;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 494;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 184;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Final Round!";
      break;
    }
    case 100: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_dojo_spareenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 52;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 440;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 100;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Jigsaw Joe jigs in!";
      break;
    }
    case 150: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_guei_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 62;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_guei_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 62;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Guei wisps in your way!";
      break;
    }
    case 151: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_balthizard_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 63;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_balthizard_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 63;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Balthizard swings in!";
      break;
    }
    case 152: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bibliox_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 64;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 460;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 84;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_bibliox_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 64;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Bibliox opens up!";
      break;
    }
    case 153: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 496;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 474;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Mizzle was woken up!";
      break;
    }
    case 154: {
      let O9 = [94, 50];
      let Oi = [80, 122];
      let OR = [72, 200];
      if (O7 === 1) {
        O9 = [80, 122];
      }
      if (O7 === 2) {
        O9 = [94, 86];
        Oi = [80, 166];
      }
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + O9[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + O9[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + Oi[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + Oi[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + OR[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + OR[1];
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 475;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 56;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 488;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 188;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Wicabel clangs in your way!";
      break;
    }
    case 155: {
      let OO = [94, 50];
      let Ox = [80, 122];
      let Om = [72, 200];
      if (O7 === 1) {
        OO = [80, 122];
      }
      if (O7 === 2) {
        OO = [94, 86];
        Ox = [80, 166];
      }
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + OO[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + OO[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + Ox[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + Ox[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + Om[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + Om[1];
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_halo_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 67;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 84;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_halo_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 67;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 520;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 230;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Winglade cuts in!";
      break;
    }
    case 156: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 47;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Organikk accosts you!";
      break;
    }
    case 157: {
      let Op = [94, 50];
      let Ob = [80, 122];
      let Od = [72, 200];
      if (O7 === 1) {
        Op = [80, 122];
      }
      if (O7 === 2) {
        Op = [94, 86];
        Ob = [80, 166];
      }
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + Op[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + Op[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + Ob[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + Ob[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + Od[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + Od[1];
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* It's a cacophony.";
      break;
    }
    case 158: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_guei_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 62;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_balthizard_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 63;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 198;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Smells like scented candles.";
      break;
    }
    case 159: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 496;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_bibliox_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 64;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 160: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_hammer_of_justice_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 105;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 418 + 42;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 69 + 92;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = 108;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = 149;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = 108;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = 149;
      if (iC === "room_dw_church_arena") {
        (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = 629;
        (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = 149;
      }
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* (The bell of justice rings...)&(ATTACK to show what you've got!)";
      break;
    }
    case 161: {
      let OD = [94, 50];
      let Ow = [80, 122];
      let OF = [72, 200];
      if (O7 === 1) {
        OD = [80, 122];
      }
      if (O7 === 2) {
        OD = [94, 86];
        Ow = [80, 166];
      }
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + OD[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + OD[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + Ow[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + Ow[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + OF[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + OF[1];
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bibliox_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 64;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 459;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 56;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_halo_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 67;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 520;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 227;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* The flapping of wings and pages fills the room.";
      break;
    }
    case 162: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_halo_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 67;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 84;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_balthizard_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 63;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 163: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_guei_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 62;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 470;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 485;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 170;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 164: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_guei_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 470;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_bibliox_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 64;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 280;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 165: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 496;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_guei_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 62;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 166: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 496;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_balthizard_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 63;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 167: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 496;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 520;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 168: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_balthizard_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 63;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 510;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 190;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 169: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 510;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 190;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 170: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bibliox_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 64;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 171: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 510;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 190;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 172: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 486;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_halo_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 67;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 524;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 229;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 173: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_halo_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 67;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 84;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_guei_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 62;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 174: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_jackenstein_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 107;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 442;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced outside of \\cYTREASURE!\\c0";
      break;
    }
    case 175: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_titan_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 108;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 390;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 120;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced outside of \\cG???\\c0";
      for (let Oc = 0; R4(Oc) < 3; Oc += 1) {
        (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[Oc] =
          this.xx + 130 - Oc * 32;
        if (Oc === 0) {
          (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[Oc] += 12;
        }
        (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[Oc] =
          this.yy + 140 + Oc * 30;
      }
      break;
    }
    case 176: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_sound_of_justice_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 106;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 465;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 115;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = -100;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = -100;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = 108;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = 149;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced!";
      break;
    }
    case 177: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_titan_spawn_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 109;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500 - 40;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 84 - 46;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_titan_spawn_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 109;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500 - 40;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 244 - 46;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced outside of \\cG???\\c0";
      break;
    }
    case 178: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_lanino_rematch_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 111;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 46;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_elnina_rematch_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 110;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 510;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* This time, the weather sticks together!";
      break;
    }
    case 179: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_pippins_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 59;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 84;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_rudinnranger);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 5;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 180: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_zapper_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 56;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 84;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_swatchling_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 36;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 181: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_ribbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 57;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 84;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_ribbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 57;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 182: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_ribbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 57;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 84;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_ribbick_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 57;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 183: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_holywatercooler_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 69;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 484;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 138;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* This is not your typical watercooler!";
      break;
    }
    case 184: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 496;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 474;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 130;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 494;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 210;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 185: {
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 496;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        "",
      );
      break;
    }
    case 186: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_sound_of_justice_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 106;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 465;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 115;
      if (iC === "room_dw_churchb_nongerson") {
        (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] =
          R3("camerax").call(this) + 86;
        (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] =
          R3("cameray").call(this) + 52;
      }
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] += 20;
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = -100;
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = -100;
      this.yy = 0;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced!";
      break;
    }
    case 187: {
      let OE = [94, 50];
      let OU = [80, 122];
      let OJ = [72, 200];
      if (O7 === 1) {
        OE = [80, 122];
      }
      if (O7 === 2) {
        OE = [94, 86];
        OU = [80, 166];
      }
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + OE[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + OE[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + OU[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + OU[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + OJ[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + OJ[1];
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 470;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 22;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 176;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      break;
    }
    case 188: {
      let Ot = [94, 50];
      let Oq = [80, 122];
      let OX = [72, 200];
      if (O7 === 1) {
        Ot = [80, 122];
      }
      if (O7 === 2) {
        Ot = [94, 86];
        Oq = [80, 166];
      }
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + Ot[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + Ot[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + Oq[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + Oq[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + OX[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + OX[1];
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 470;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 5;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 106;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 470;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 210;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* It's a cacophony!";
      break;
    }
    case 189: {
      let OC = [94, 50];
      let OH = [80, 122];
      let OA = [72, 200];
      if (O7 === 1) {
        OC = [80, 122];
      }
      if (O7 === 2) {
        OC = [94, 86];
        OH = [80, 166];
      }
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + OC[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + OC[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + OH[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + OH[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + OA[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + OA[1];
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_balthizard_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 63;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 70 - 20 - 4;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_mizzle_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 65;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 106 + 8 + 10;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_guei_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 62;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 470;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 210 - 20 + 6;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Water, fire, air.";
      break;
    }
    case 190: {
      let OS = [94, 50];
      let OV = [80, 122];
      let Oh = [72, 200];
      if (O7 === 1) {
        OS = [80, 122];
      }
      if (O7 === 2) {
        OS = [94, 86];
        OV = [80, 166];
      }
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[0] = this.xx + OS[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[0] = this.yy + OS[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[1] = this.xx + OV[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[1] = this.yy + OV[1];
      (Array.isArray(iZ.heromakex) ? iZ.heromakex : (iZ.heromakex = []))[2] = this.xx + Oh[0];
      (Array.isArray(iZ.heromakey) ? iZ.heromakey : (iZ.heromakey = []))[2] = this.yy + Oh[1];
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bell_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 66;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 476 + 24;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 46 + 62;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Wicabel clangs in your way!";
      break;
    }
    case 191: {
      let OT = [94, 50];
      let OY = [80, 122];
      let Oj = [72, 200];
      if (O7 === 1) {
        OT = [80, 122];
      }
      if (O7 === 2) {
        OT = [94, 86];
        OY = [80, 166];
      }
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_halo_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 67;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 84;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_organ_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 68;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 470;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 160;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* Steel clangs in a song.";
      break;
    }
    case 500: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_multiboss_enemy1);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 500;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_multiboss_enemy2);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 500;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 160;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_multiboss_enemy3);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 500;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 520;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 240;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* A multiboss example showed up.";
      break;
    }
    case 501: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_multiboss_controller_enemy1);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 501;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_multiboss_controller_enemy2);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 501;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 160;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_multiboss_controller_enemy3);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 501;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[2] =
        this.xx + 520;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[2] =
        this.yy + 240;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
        "* A multiboss example with controller showed up.";
      break;
    }
    case 777: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_bullettester_enemy);
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_bullettester_enemy);
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[2] = R5(R2.obj_bullettester_enemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 1;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 1;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 1;
      (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = R3("stringset").call(
        this,
        " ",
      );
      break;
    }
    default: {
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[0] = R5(R2.obj_baseenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[0] = 1;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(iZ.monsterinstancetype)
        ? iZ.monsterinstancetype
        : (iZ.monsterinstancetype = []))[1] = R5(R2.obj_baseenemy);
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[1] = 1;
      (Array.isArray(iZ.monstermakex) ? iZ.monstermakex : (iZ.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(iZ.monstermakey) ? iZ.monstermakey : (iZ.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(iZ.monstertype) ? iZ.monstertype : (iZ.monstertype = []))[2] = 0;
      break;
    }
  }
}
iQ(R8, "scr_encountersetup");
R0(
  R8,
  "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 71:\n;\ncase 72:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 100:\n;\ncase 150:\n;\ncase 151:\n;\ncase 152:\n;\ncase 153:\n;\ncase 154:\n;\ncase 155:\n;\ncase 156:\n;\ncase 157:\n;\ncase 158:\n;\ncase 159:\n;\ncase 160:\n;\ncase 161:\n;\ncase 162:\n;\ncase 163:\n;\ncase 164:\n;\ncase 165:\n;\ncase 166:\n;\ncase 167:\n;\ncase 168:\n;\ncase 169:\n;\ncase 170:\n;\ncase 171:\n;\ncase 172:\n;\ncase 173:\n;\ncase 174:\n;\ncase 175:\n;\ncase 176:\n;\ncase 177:\n;\ncase 178:\n;\ncase 179:\n;\ncase 180:\n;\ncase 181:\n;\ncase 182:\n;\ncase 183:\n;\ncase 184:\n;\ncase 185:\n;\ncase 186:\n;\ncase 187:\n;\ncase 188:\n;\ncase 189:\n;\ncase 190:\n;\ncase 191:\n;\ncase 500:\n;\ncase 501:\n;\ncase 777:",
);
R1();
var R9 = new Proxy(
  {},
  {
    get: iQ((O6, O7) => i6[O7] || ii[O7], "get"),
  },
);
var Ri = iQ((O6) => W[O6] || i9[O6] || it[O6] || (() => {}), "SCRIPT");
var { GID: RR, instance_exists: RO } = it;
var Rx = new Proxy(
  {},
  {
    get: iQ((O6, O7) => R9[O7], "get"),
  },
);
function Rm() {
  Ri("scr_monster_actreset").call(this, this.myself);
  if (iZ.monstertype[this.myself] === 1) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Enemy";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 130;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 130;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 7;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 20;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Warning";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Victory";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "SimuDance";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[4] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[4] =
      "Victory (S)";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[5] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[5] =
      "Lecture";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "CoolDance";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[1] = "SimuDance";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "CoolDance";
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[1] = "SimuDance";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[1] = 1;
  }
  if (iZ.monstertype[this.myself] === 2) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Lancer";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 540;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 540;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 5;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 1;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 20;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Warning";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Compliment";
    (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] = "* Lancer busts in!";
  }
  if (iZ.monstertype[this.myself] === 3) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Dummy";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 450;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 450;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Hug";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Hug Ralsei";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
      "* The tutorial begins.";
  }
  if (iZ.monstertype[this.myself] === 4) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Ralsei";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 90;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 90;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 6;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Hug";
    (Array.isArray(iZ.battlemsg) ? iZ.battlemsg : (iZ.battlemsg = []))[0] =
      "* The tutorial begins.";
  }
  if (iZ.monstertype[this.myself] === 5) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Rudinn";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 5;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 30;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Convince";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Lecture";
    if (ig(Ri("scr_havechar").call(this, 2)) && RR(iZ.plot) < 150) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "Warning";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        3;
    }
  }
  if (iZ.monstertype[this.myself] === 6) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Hathy";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 150;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 150;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 6;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 28;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Flatter";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "X-Flatter";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    if (iZ.encounterno === 7) {
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        2;
      if (RR(iZ.plot) < 40) {
        iZ.plot = 40;
      }
    }
    if (ig(Ri("scr_havechar").call(this, 2)) && RR(iZ.plot) < 150) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "Warning";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        3;
    }
    if (ig(Ri("scr_havechar").call(this, 2)) && RR(iZ.plot) >= 150) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "S-Flatter";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        2;
    }
  }
  if (iZ.monstertype[this.myself] === 7) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Clover";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 270;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 270;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 1;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 43;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    this.myact = iv(0, 1, 2);
    if (this.myact === 0) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "Politics";
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "Religion";
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "Sports";
    }
    if (this.myact === 1) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "Kindness";
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "Cuteboys";
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "GunControl";
    }
    if (this.myact === 2) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "Trees";
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "Ghosts";
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "Games";
    }
    if (ig(Ri("scr_havechar").call(this, 2))) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[4] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[4] =
        "Warning";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[4] =
        3;
    }
  }
  if (iZ.monstertype[this.myself] === 9) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "C.Round";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 10;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 10;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 5;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 10;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    if (iZ.encounterno === 7 && RR(iZ.plot) < 40) {
      iZ.plot = 40;
    }
    if (ig(Ri("scr_havechar").call(this, 2))) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] =
        2;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "X-Compliment";
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "Warning";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        3;
    }
  }
  if (iZ.monstertype[this.myself] === 10) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "K.Round";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1300;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1300;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 7.5;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 3;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 100;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Bow";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Deep Bow";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    if (ig(Ri("scr_havechar").call(this, 2))) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "Warning";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        3;
    }
  }
  if (iZ.monstertype[this.myself] === 11) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Ponman";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 140;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 140;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 7;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 1;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 23;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Goodnight";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Lullaby";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    if (ig(Ri("scr_havechar").call(this, 2)) && RR(iZ.plot) < 150) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "Warning";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        3;
    }
  }
  if (iZ.monstertype[this.myself] === 12) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Lancer";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 2400;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 2400;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 4;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = -40;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
  }
  if (iZ.monstertype[this.myself] === 13) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Rabbick";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 1;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 38;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Blow On";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "BreathAll";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    if (ig(Ri("scr_havechar").call(this, 2)) && RR(iZ.plot) < 150) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "Warning";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        3;
    }
  }
  if (iZ.monstertype[this.myself] === 14) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Bloxer";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 130;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 130;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 9;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 2;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 38;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Rearrange";
    if (ig(Ri("scr_havechar").call(this, 2)) && RR(iZ.plot) >= 150) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "Rival";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        2;
    }
  }
  if (iZ.monstertype[this.myself] === 15) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Jigsawry";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 90;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 90;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 5;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 20;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Befriend";
    if (ig(Ri("scr_havechar").call(this, 2)) && RR(iZ.plot) < 150) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "Warning";
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        3;
    }
  }
  if (iZ.monstertype[this.myself] === 16) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Clover";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 270;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 270;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 6;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 1;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 80;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "TalkBday";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] = 3;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "TalkBoys";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "TalkSports";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 3;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[4] =
      "TalkAnimals";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[4] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[5] =
      "TalkTrees";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[5] = 1;
    this.myact = iv(0, 1, 2);
  }
  if (iZ.monstertype[this.myself] === 17) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "DoomTank";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 700;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 700;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 6;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Hug";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] = 3;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Flatter";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "Diplomacy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[4] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[4] =
      "Smile";
  }
  if (iZ.monstertype[this.myself] === 18) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Lancer";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 800;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 800;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 6;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 1;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Anything";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "X-Anything";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
  }
  if (iZ.monstertype[this.myself] === 19) {
    this._armordf = iZ.itemdf[2][0] + iZ.itemdf[2][1] + iZ.itemdf[2][2];
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Susie";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 7;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] =
      -5 + this._armordf;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Anything";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Sing";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
  }
  if (iZ.monstertype[this.myself] === 20) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "JEVIL";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 3500;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 3500;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 10;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 5;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 999;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Pirouette";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Random#Chaos";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 50;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Hypnosis";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Induce#TIRED";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 125;
  }
  if (iZ.monstertype[this.myself] === 21) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "K.Round";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1300;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1300;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 3;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 100;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    if (iZ.flag[246] === 1) {
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
        "Checkers";
    }
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Bow";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Susie's Idea";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
  }
  if (iZ.monstertype[this.myself] === 22) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Rudinn Ranger";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 170;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 170;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 45;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 25;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Convince";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Compliment";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
  }
  if (iZ.monstertype[this.myself] === 23) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Head Hathy";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 190;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 190;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 40;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Flirt";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "X-Flirt";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
  }
  if (iZ.monstertype[this.myself] === 25) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "King";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 2800;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 2800;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 999;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Talk";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 0;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Talk";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 3;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "Talk";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 0;
    if (iZ.tempflag[5] === 1) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] =
        1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "Courage";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
        "Defense#Boost";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 62;
    }
    if (iZ.tempflag[6] === 1) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        2;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "RedBuster";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        "Red#Damage";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] =
        150;
    }
    if (iZ.tempflag[7] === 1) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        3;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "DualHeal";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
        "Heals#everyone";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] =
        125;
    }
  }
  if (iZ.monstertype[this.myself] === 30) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Ambyu-Lance";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 300;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 300;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 84;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 20;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    if (ig(Ri("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] =
        5;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "Hospitality";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 0;
    } else {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] =
        2;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "Avoid";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 0;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        3;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "GetHit";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    }
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself])
      ? (Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself]
      : ((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself]
      : ((Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself] =
          []))[0] = "N-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself]
      : ((Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 31) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Poppup";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 9;
    if (
      !ig(Ri("scr_havechar").call(this, 2)) &&
      !ig(Ri("scr_havechar").call(this, 3)) &&
      !ig(Ri("scr_havechar").call(this, 4))
    ) {
      (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    }
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 77;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 25;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Click";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] = "";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 0;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Block";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] = "";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    if (ig(Ri("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        5;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "Avoid";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 0;
    }
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself])
      ? (Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself]
      : ((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself]
      : ((Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself] =
          []))[0] = "N-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself]
      : ((Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 32) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Tasque";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 240;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 240;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 75;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 20;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Petting";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] = 1;
    if (ig(Ri("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        5;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "PettingX";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    } else {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        2;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "Roar";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        3;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "SoftVoice";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 0;
    }
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself])
      ? (Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself]
      : ((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself]
      : ((Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself] =
          []))[0] = "N-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself]
      : ((Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 33) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Werewire";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 240;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 240;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 5;
    if (ig(Ri("scr_havechar").call(this, 3)) || ig(Ri("scr_havechar").call(this, 4))) {
      (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    }
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 79;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 20;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "JiggleJiggle";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "ThrowWire";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Toss Kris#to free#wire";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself])
      ? (Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself]
      : ((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself]
      : ((Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself] =
          []))[0] = "N-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself]
      : ((Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 34) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Maus";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 70;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 25;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "TrapOne";
    if (ig(Ri("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        5;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        iZ.flag[379] === 0 ? "Fear" : "Compliment";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        5;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "TrapAll";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 0;
    } else {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        2;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "Upgrade";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        3;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "TrapAll";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 0;
    }
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself])
      ? (Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself]
      : ((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself]
      : ((Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself] =
          []))[0] = "N-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself]
      : ((Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 35) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Virovirokun";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 240;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 240;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 84;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 20;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "TakeCare";
    if (ig(Ri("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        5;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "TakeCareX";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    } else {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        4;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "TakeCareX";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    }
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself])
      ? (Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself]
      : ((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself]
      : ((Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself] =
          []))[0] = "N-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself]
      : ((Array.isArray(iZ.actsimulnoe) ? iZ.actsimulnoe : (iZ.actsimulnoe = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 36) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Swatchling";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 300;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 300;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 9;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 100;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Warmify";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Redder#2 stages";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Coldify";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Bluer#2 stages";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "Half-Warm";
    (Array.isArray(
      (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself]
      : ((Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself] =
          []))[0] = "Redder#1 stage";
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "Half-Cold";
    (Array.isArray(
      (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
      : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
          []))[0] = "Bluer#1 stage";
  }
  if (iZ.monstertype[this.myself] === 37) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Cap'n";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 1;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Dance";
    if (iZ.lang !== "ja") {
      (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
        ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
        : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] =
        1;
    }
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Dance X";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "Dance";
    if (iZ.lang !== "ja") {
      (Array.isArray(
        (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
        : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
            []))[0] = 1;
    }
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "Dance";
    if (iZ.lang !== "ja") {
      (Array.isArray(
        (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
        : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
            []))[0] = 1;
    }
  }
  if (iZ.monstertype[this.myself] === 38) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "K_K";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 100;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Dance";
    if (iZ.lang !== "ja") {
      (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
        ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
        : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] =
        1;
    }
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Dance X";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "Dance";
    if (iZ.lang !== "ja") {
      (Array.isArray(
        (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
        : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
            []))[0] = 1;
    }
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "Dance";
    if (iZ.lang !== "ja") {
      (Array.isArray(
        (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
        : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
            []))[0] = 1;
    }
  }
  if (iZ.monstertype[this.myself] === 39) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Sweet";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 120;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 50;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Dance";
    if (iZ.lang !== "ja") {
      (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
        ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
        : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] =
        1;
    }
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Dance X";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "Dance";
    if (iZ.lang !== "ja") {
      (Array.isArray(
        (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
        : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
            []))[0] = 1;
    }
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "Dance";
    if (iZ.lang !== "ja") {
      (Array.isArray(
        (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
        : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
            []))[0] = 1;
    }
  }
  if (iZ.monstertype[this.myself] === 40) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Werewerewire";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1753;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1753;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 11;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 300;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 5;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "BeCold";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "BeTough";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 3;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "BeSweet";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 0;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 41) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "GrazeTest";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 100;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 100;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
  }
  if (iZ.monstertype[this.myself] === 42) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Tasque Manager";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1367;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1367;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 10;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 200;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 5;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Order";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] = " ";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "OrderX";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] = " ";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 43) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Berdly";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1985;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1985;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 10;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 100;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Bump";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Ride#coaster";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 0;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "BumpX";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Everyone#rides#coaster";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "Bump";
    (Array.isArray(
      (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself]
      : ((Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself] =
          []))[0] = "Ride#coaster";
    (Array.isArray(
      (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself]
      : ((Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "Bump";
    (Array.isArray(
      (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
      : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
          []))[0] = "Ride#coaster";
    (Array.isArray(
      (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself]
      : ((Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself] =
          []))[0] = 0;
  }
  if (iZ.monstertype[this.myself] === 44) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Mauswheel";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1753;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1753;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 10;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 200;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Catch";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "CatchX";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself]
      : ((Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself] =
          []))[0] = " ";
    (Array.isArray(
      (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself]
      : ((Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
      : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
          []))[0] = " ";
    (Array.isArray(
      (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself]
      : ((Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself] =
          []))[0] = 0;
  }
  if (iZ.monstertype[this.myself] === 45) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Rouxls";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 600;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 600;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 9;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 200;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Take House";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 0;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Take House 2";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 34;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 3;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "Take House 3";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 59;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[4] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[4] = 3;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[4] =
      "Take House 4";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[4] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[4] = 80;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = Ri("stringset").call(this, "S-Action");
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "Distract";
    (Array.isArray(
      (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
      : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
          []))[0] = " ";
    (Array.isArray(
      (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself]
      : ((Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself] =
          []))[0] = 0;
  }
  if (iZ.monstertype[this.myself] === 46) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Berdly";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 900;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 900;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 9;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 100;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      Ri("scr_sideb_get_phase").call(this) > 0 ? "Glare" : "Play Dumb";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 5;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      Ri("scr_sideb_get_phase").call(this) > 0 ? "Wake" : "Play Smart";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] = " ";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself])
      ? (Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself]
      : ((Array.isArray(iZ.canactnoe) ? iZ.canactnoe : (iZ.canactnoe = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself]
      : ((Array.isArray(iZ.actnamenoe) ? iZ.actnamenoe : (iZ.actnamenoe = []))[this.myself] =
          []))[0] = "N-Action";
  }
  if (iZ.monstertype[this.myself] === 47) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Clover";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1500;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1500;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 11;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 5;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Topic";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] = 0;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Guess#favorite#thing";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Topic(Long)";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Longer#time to#guess";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 48) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Queen";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1510;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1510;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 10;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    if (ig(RO(R9.obj_berdlyplug_enemy))) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
        "Loosen";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[0] = 0;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] =
        4;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "GroupLoosen";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 0;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        2;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "Throw";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        " ";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] =
        2;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "RedBuster";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
        "Red#Damage";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] =
        150;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[4] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[4] =
        3;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[4] =
        "DualHeal";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[4] =
        "Heals#everyone";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[4] =
        125;
      (Array.isArray(
        (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
        : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] =
            []))[0] = 1;
      (Array.isArray(
        (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
        : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
            []))[0] = "Loosen";
      (Array.isArray(
        (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself],
      )
        ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
        : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] =
            []))[0] = 1;
      (Array.isArray(
        (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
        : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
            []))[0] = "Loosen";
    } else {
      (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
      (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
        "Check";
    }
  }
  if (iZ.monstertype[this.myself] === 49) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Spamton";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 600;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 600;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = -50;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Deal";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "HealDeal";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "DEAL &#HEAL 60";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 125;
  }
  if (iZ.monstertype[this.myself] === 50) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Spamton NEO";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 4809;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 4809;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 13;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    if (Ri("scr_sideb_get_phase").call(this) > 2) {
      (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = -27;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "X-Slash";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
        "Physical#damage";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 62;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "FriedPipis";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        "Heals#120 HP";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 80;
    } else {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
        "Snap";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] = "";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 0;
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
        ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
        : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] =
        4;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "SnapAll";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] = "";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
      (Array.isArray(
        (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
        : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] =
            []))[0] = 1;
      (Array.isArray(
        (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
        : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
            []))[0] = "Snap";
      (Array.isArray(
        (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself]
        : ((Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself] =
            []))[0] = "";
      (Array.isArray(
        (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself]
        : ((Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself] =
            []))[0] = 0;
      (Array.isArray(
        (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
        : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] =
            []))[1] = 1;
      (Array.isArray(
        (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
        : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
            []))[1] = "Supercharge";
      (Array.isArray(
        (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself]
        : ((Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself] =
            []))[1] = "Charge#faster";
      (Array.isArray(
        (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself],
      )
        ? (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself]
        : ((Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself] =
            []))[1] = 80;
      (Array.isArray(
        (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself],
      )
        ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
        : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] =
            []))[0] = 1;
      (Array.isArray(
        (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
        : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
            []))[0] = "Snap";
      (Array.isArray(
        (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
        : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
            []))[0] = "";
      (Array.isArray(
        (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself]
        : ((Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself] =
            []))[0] = 0;
      (Array.isArray(
        (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself],
      )
        ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
        : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] =
            []))[1] = 1;
      (Array.isArray(
        (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
        : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
            []))[1] = "FluffyGuard";
      (Array.isArray(
        (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
        : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
            []))[1] = "Orbiting#shield";
      (Array.isArray(
        (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself],
      )
        ? (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself]
        : ((Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself] =
            []))[1] = 40;
    }
  }
  if (iZ.monstertype[this.myself] === 51) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "GIGA Queen";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 4500;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 4500;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 7.5;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    if (iZ.flag[220] === 2) {
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
        "FireMode";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
        "Power#Attacks";
    }
    if (iZ.flag[220] === 1) {
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
        "SwordMode";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
        "Power up#each hit";
    }
    if (iZ.flag[220] === 0) {
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
        "LaserMode";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
        "Fast#Attacks";
    }
    if (iZ.flag[220] === 3) {
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
        "DuckMode";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
        "Sucky#Attacks";
    }
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[0] = 125;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "TurboDodge";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Better#dodge";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 62;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "SELF-FIX";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Heals#100HP";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 50;
  }
  if (iZ.monstertype[this.myself] === 52) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Jigsaw Joe";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Shave";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] = " ";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] = 1;
  }
  if (iZ.monstertype[this.myself] === 53) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Pipis";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 200;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 200;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 56) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Zapper";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 421;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 421;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 11;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 80;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "VolumeUp";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Bullets#give big#TP...";
    if (iZ.encounterno === 135) {
      (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
        ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
        : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] =
        4;
    }
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Mute";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 80;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Tire#enemies";
    if (iZ.encounterno === 135) {
      (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
        ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
        : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] =
        4;
    }
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "OffButton";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 4;
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 250;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
      "Turn#it off";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 0;
  }
  if (iZ.monstertype[this.myself] === 57) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Ribbick";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 421;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 421;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 11;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 72;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "CroakOn";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Mercy#by#mashing";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "CroakOnX";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Targets#all but#weaker";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself]
      : ((Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself] =
          []))[0] = "50%#Mercy";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
      : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
          []))[0] = "25%#and#Tired";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 59) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Pippins";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 421;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 421;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 8;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 30;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Bet";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Touch#Green#4 Mercy";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Cheat";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "TIRE#Enemies,#but...";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 62) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Guei";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 13;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 120;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Exercism";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "20% &#Delayed#TIRED";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Xercism";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "60% &#Delayed#TIRED";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    if (RR(iZ.plot) >= 140 && RR(iZ.plot) < 160 && iZ.flag[868] === 0) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
      let O6 = "OldMan";
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
        "     " + O6;
      if (iZ.lang === "ja") {
        (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
          ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
          : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
          "  " + O6;
      }
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
        "I'm#old!";
    }
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 63) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Balthizard";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 14;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 130;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Shake";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Left &#Right=#Mercy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "ShakeX";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Left &#Right=#Mercy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "LightUp";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 3;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
      "50% &#TIRE#others";
    if (iZ.plot === 141) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[4] = 1;
      let O7 = "OldMan";
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[4] =
        "     " + O7;
      if (iZ.lang === "ja") {
        (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
          ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
          : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[4] =
          "  " + O7;
      }
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[4] =
        "I'm#old!";
    }
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 64) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Bibliox";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 14;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 125;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Proofread";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Fix typo#for#MERCY";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "EasyProof";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 3;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "More#time to#fix";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 65) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Mizzle";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 13;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 110;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Dazzle";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "35%#Mercy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Embezzle";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "TIRE,#steal#item";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "Nuzzle";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 3;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
      "TIRE by#fluffy#move";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[4] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[4] =
      "LullabyX";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[4] = 4;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[4] =
      "Sing to#everyone#...?";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 66) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Wicabel";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 9;
    if (iZ.char[2] === 3) {
      (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 13;
    }
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 160;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Tuning";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Good#timing=#mercy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Tuningx2";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Tuning#twice";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 67) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Winglade";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 14;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 155;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Spin";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 0;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Spin#50%#mercy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "SpinS";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "60%#Mercy#to all";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "Whirl";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 4;
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 160;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
      "SPARE#all!";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 68) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Organikk";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 470;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 11;
    if (iZ.char[2] === 3) {
      (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 14;
    }
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 150;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Perform";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Musical#mercy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Harmonize";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Musical,#touch#GREEN";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "Harmonize";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 3;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
      "Musical,#touch#GREEN";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 0;
  }
  if (iZ.monstertype[this.myself] === 69) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "HolywaterCooler";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1740;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1740;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 14;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 500;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 4;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Flirt";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "???";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "BegForMercy";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "???";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 4;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "Chat";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
      "???";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 105) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Hammer of Justice";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1350;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1350;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 14;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      0;
  }
  if (iZ.monstertype[this.myself] === 106) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "???";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1350;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1350;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 14;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Talk";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "???";
  }
  if (iZ.monstertype[this.myself] === 107) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Jackenstein";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 1350;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 1350;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 14;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Consider#strategy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Unleash";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Reveal#weakness";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 150;
    if (ig(Ri("scr_debug").call(this)) && iC === "room_battletest") {
      (Array.isArray(iZ.tempflag) ? iZ.tempflag : (iZ.tempflag = []))[100] = 0;
    }
    if (iZ.tempflag[100] > 0) {
      (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
        ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
        : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
      (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
        ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
        : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
        "ScaredyCat";
      (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
        ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
        : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
        "Def.Down#Speed Up";
      (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
        ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
        : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 5;
    }
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "TreasureHunt";
    (Array.isArray(
      (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself]
      : ((Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself] =
          []))[0] = "Easier#pickup";
    (Array.isArray(
      (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself]
      : ((Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself] =
          []))[0] = 5;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "LightUp";
    (Array.isArray(
      (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
      : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
          []))[0] = "Increase#light";
    (Array.isArray(
      (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself]
      : ((Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself] =
          []))[0] = 2.5;
  }
  if (iZ.monstertype[this.myself] === 108) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = "Titan";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] =
      21000;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 21000;
    is.with("obj_titan_enemy", (O8) => {
      O8.hpprev = iZ.monsterhp[O8.myself];
    });
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 18;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Consider#strategy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Brighten";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Powerup#light";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 10;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] = 4;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "DualHeal";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 40;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Heal#party";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "Unleash";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 0;
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 200;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
      "Reveal#weakness";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "WakeKris";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray(
      (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself]
      : ((Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself] =
          []))[0] = "Revive#Kris";
    (Array.isArray(
      (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself]
      : ((Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself] =
          []))[0] = 40;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "ReviveKris";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray(
      (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
      : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
          []))[0] = "Revive#Kris";
    (Array.isArray(
      (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself]
      : ((Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself] =
          []))[0] = 40;
  }
  if (iZ.monstertype[this.myself] === 109) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Titan Spawn";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 3000;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 3000;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 18;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Consider#strategy";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Brighten";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Powerup#light";
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[1] = 10;
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[1] = 4;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "DualHeal";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[2] = 40;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Heal#party";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[3] =
      "Banish";
    (Array.isArray((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself])
      ? (Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself]
      : ((Array.isArray(iZ.actactor) ? iZ.actactor : (iZ.actactor = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself])
      ? (Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself]
      : ((Array.isArray(iZ.actcost) ? iZ.actcost : (iZ.actcost = []))[this.myself] = []))[3] = 160;
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[3] =
      "Defeat#enemy";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "WakeKris";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray(
      (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself]
      : ((Array.isArray(iZ.actdescsus) ? iZ.actdescsus : (iZ.actdescsus = []))[this.myself] =
          []))[0] = "Revive#Kris";
    (Array.isArray(
      (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself]
      : ((Array.isArray(iZ.actcostsus) ? iZ.actcostsus : (iZ.actcostsus = []))[this.myself] =
          []))[0] = 40;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "ReviveKris";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray(
      (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself]
      : ((Array.isArray(iZ.actdescral) ? iZ.actdescral : (iZ.actdescral = []))[this.myself] =
          []))[0] = "Revive#Kris";
    (Array.isArray(
      (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself]
      : ((Array.isArray(iZ.actcostral) ? iZ.actcostral : (iZ.actcostral = []))[this.myself] =
          []))[0] = 40;
  }
  if (iZ.monstertype[this.myself] === 110) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Elnina";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 4440;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 4440;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 16;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Umbrella";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Blocks#bullets";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "WarmHat";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Blocks#bullets";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 111) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Lanino";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 4440;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 4440;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 16;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 0;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymod) ? iZ.mercymod : (iZ.mercymod = []))[this.myself] = 0;
    (Array.isArray(iZ.mercymax) ? iZ.mercymax : (iZ.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "Telescope";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[1] =
      "Blocks#bullets";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "Sunglasses";
    (Array.isArray((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself])
      ? (Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself]
      : ((Array.isArray(iZ.actdesc) ? iZ.actdesc : (iZ.actdesc = []))[this.myself] = []))[2] =
      "Blocks#bullets";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (iZ.monstertype[this.myself] === 500) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] = Ri(
      "stringset",
    ).call(this, "Multiboss Example");
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 130;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 130;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 7;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 20;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Taunt";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "SimuDance";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "SimuFlatter";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "CoolDance";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[1] = "SimuDance";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[2] = "SimuFlatter";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[3] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[3] = "Loner";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "CoolDance";
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[1] = "SimuDance";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[2] = "SimuFlatter";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[2] = 0;
  }
  if (iZ.monstertype[this.myself] === 501) {
    (Array.isArray(iZ.monstername) ? iZ.monstername : (iZ.monstername = []))[this.myself] =
      "Multiboss C Example";
    (Array.isArray(iZ.monstermaxhp) ? iZ.monstermaxhp : (iZ.monstermaxhp = []))[this.myself] = 130;
    (Array.isArray(iZ.monsterhp) ? iZ.monsterhp : (iZ.monsterhp = []))[this.myself] = 130;
    (Array.isArray(iZ.monsterat) ? iZ.monsterat : (iZ.monsterat = []))[this.myself] = 7;
    (Array.isArray(iZ.monsterdf) ? iZ.monsterdf : (iZ.monsterdf = []))[this.myself] = 0;
    (Array.isArray(iZ.monsterexp) ? iZ.monsterexp : (iZ.monsterexp = []))[this.myself] = 0;
    (Array.isArray(iZ.monstergold) ? iZ.monstergold : (iZ.monstergold = []))[this.myself] = 20;
    (Array.isArray(iZ.sparepoint) ? iZ.sparepoint : (iZ.sparepoint = []))[this.myself] = 10;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[0] =
      "Taunt";
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[1] =
      "SimuDance";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself])
      ? (Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself]
      : ((Array.isArray(iZ.canact) ? iZ.canact : (iZ.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself])
      ? (Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself]
      : ((Array.isArray(iZ.actname) ? iZ.actname : (iZ.actname = []))[this.myself] = []))[2] =
      "SimuFlatter";
    (Array.isArray((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself])
      ? (Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself]
      : ((Array.isArray(iZ.actsimul) ? iZ.actsimul : (iZ.actsimul = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[0] = "CoolDance";
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[1] = "SimuDance";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[2] = "SimuFlatter";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[2] = 0;
    (Array.isArray((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself])
      ? (Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself]
      : ((Array.isArray(iZ.canactsus) ? iZ.canactsus : (iZ.canactsus = []))[this.myself] = []))[3] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself]
      : ((Array.isArray(iZ.actnamesus) ? iZ.actnamesus : (iZ.actnamesus = []))[this.myself] =
          []))[3] = "Loner";
    (Array.isArray(
      (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself]
      : ((Array.isArray(iZ.actsimulsus) ? iZ.actsimulsus : (iZ.actsimulsus = []))[this.myself] =
          []))[3] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[0] = "CoolDance";
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[1] = "SimuDance";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself])
      ? (Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself]
      : ((Array.isArray(iZ.canactral) ? iZ.canactral : (iZ.canactral = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself]
      : ((Array.isArray(iZ.actnameral) ? iZ.actnameral : (iZ.actnameral = []))[this.myself] =
          []))[2] = "SimuFlatter";
    (Array.isArray(
      (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself]
      : ((Array.isArray(iZ.actsimulral) ? iZ.actsimulral : (iZ.actsimulral = []))[this.myself] =
          []))[2] = 0;
  }
}
iQ(Rm, "scr_monstersetup");
R1();
var Rp = {
  12: "checkers",
  175: "titan_battle",
};
var Rb = {
  160: "plain",
  777: "plain",
};
var Rd = "battle";
R1();
R1();
var RD = {
  336: "snd_swallow",
};
iB(RD, 4);
iq(i6, 4);
var Rw = 4;
var RF = iQ((O6) => is.first(O6), "first");
var Rc = iQ((O6) => is.exists(O6), "ex");
var RE = {
  bcDefendTP: iQ(() => 40, "bcDefendTP"),
  heroDamage: iQ((O6, O7) => O7, "heroDamage"),
  heroHitTP: iQ((O6) => Math.round(O6.points / 10), "heroHitTP"),
  heroDraw: iQ((O6, O7, O8) => O8(), "heroDraw"),
  tensionCap: iQ(() => null, "tensionCap"),
  actNameColor: iQ((O6, O7, O8) => O8, "actNameColor"),
};
function RU(O6, O7) {
  let O8 = ij[O6];
  ij[O6] = function (...O9) {
    if (iZ.chapter === Rw) {
      return O7(...O9);
    } else if (typeof O8 == "function") {
      return O8(...O9);
    } else if (RE[O6]) {
      return RE[O6](...O9);
    } else {
      return false;
    }
  };
}
iQ(RU, "chain");
RU("bcCreate", (O6) => {
  O6.questionmercy = [0, 0, 0];
  O6.soundbattle = iZ.encounterno === 176 || iZ.encounterno === 186;
  O6.hidestar = 0;
  if (iZ.encounterno === 160 || iZ.encounterno === 176 || iZ.encounterno === 186) {
    O6.questionmercy[0] = 1;
  }
  Object.assign(O6, {
    disablesusieattack: 0,
    disableitembutton: false,
    incenseturtlegersoncon: 0,
    gueigersoncon: 0,
    skipsusieturn: false,
    skipmonsterselection: false,
    facevar: 0,
    dancing_jackolantern_con: 0,
    dancing_jackolantern_alpha: 1,
    dancing_jackolantern_index: 0,
    dancing_jackolantern_timer: 0,
    gersonend: false,
    autoselect: false,
    rabbickvar: iv(0, 1, 2),
  });
  if (iZ.encounterno === 160 && i1 && !Rc("obj_dw_church_arena_bg")) {
    iL(0, 0, i1);
  }
  if (iZ.encounterno === 160 && iR && !Rc("obj_dw_church_arena")) {
    let O7 = iL(0, 0, iR);
    if (O7) {
      O7.visible = false;
    }
  }
  return false;
});
RU("bcStepGate", (O6) => {
  for (let OR of is.list) {
    if (
      !OR.destroyed &&
      !!OR.constructor &&
      OR.constructor.name === "obj_balthizard_enemy" &&
      (OR.gersonevent === true || OR.gersonevent === 1) &&
      OR.gersonintro < 2
    ) {
      return true;
    }
  }
  let O7 = RF("obj_holywatercooler_enemy");
  if (O7 && O7.introcon > 0) {
    return true;
  }
  if (O6.soundbattle === true) {
    let OO = RF("obj_sound_of_justice_enemy");
    if (OO && OO.init === 0) {
      return true;
    }
    if (iZ.myfight === 0 && iZ.bmenuno === 0 && !Rc("obj_herokris") && OO && OO.phase === 1) {
      if (iZ.hp[2] <= iZ.maxhp[2] * 0.5 && iZ.tension >= ((iZ.spellcost[2] || [])[1] ?? 999)) {
        iZ.bmenuno = 0;
        iZ.bmenucoord[2][iZ.charturn] = 1;
        iZ.chartarget[iZ.charturn] = iZ.bmenucoord[iZ.bmenuno][iZ.charturn];
        iF(ih(11).cost);
        return true;
      }
      iD();
    }
    if (
      iZ.hp[2] < 1 ||
      (OO &&
        O6.victory === 0 &&
        (O6.selnoise === 1 && (iG("snd_select"), (O6.selnoise = 0)),
        OO.kris_phase2_try_attack_con > 0 ||
          OO.susie_phase2_try_attack_con > 0 ||
          OO.intermission1_con > 0 ||
          OO.endingcon > 0 ||
          OO.introcon > 0))
    ) {
      return true;
    }
  }
  let O8 = RF("obj_hammer_of_justice_enemy");
  if (!O8 || O8.endcon !== 5 || !(O8.endtimer >= 105)) {
    if (O8 && O8.endcon > 0 && O8.endtimer > 0 && O8.end_cutscene_version === 1) {
      return true;
    }
    if (O8 && O8.endcon > 1 && O8.end_cutscene_version === 1) {
      return true;
    }
  }
  let O9 = RF("obj_elnina_lanino_rematch_controller");
  if (O9 && O9.endcon > 0) {
    return true;
  }
  if (O9 && O9.endcon === 0 && iZ.myfight === 0 && iZ.mnfight === 0) {
    let Ox = RF("obj_lanino_rematch_enemy");
    if (Ox && Rc("obj_elnina_rematch_enemy") && iZ.mercymod[Ox.myself] === 100) {
      return true;
    }
  }
  let Oi = RF("obj_titan_enemy");
  return !!Oi && !!Oi.gerson && Oi.gerson.sprite_index === "spr_gerson_item" && iZ.mnfight !== 2;
});
RU("bcDefendTP", () =>
  Rc("obj_titan_spawn_enemy") ||
  Rc("obj_titan_enemy") ||
  Rc("obj_jackenstein_enemy") ||
  Rc("obj_sound_of_justice_enemy")
    ? 5
    : 40,
);
function RJ(O6, O7) {
  let O8 = iZ.char[O7];
  let O9 = 0;
  if ((iZ.chararmor1 || [])[O8] === 26) {
    O9 += Math.ceil(O6 / 8);
  }
  if ((iZ.chararmor2 || [])[O8] === 26) {
    O9 += Math.ceil(O6 / 8);
  }
  return O6 + O9;
}
iQ(RJ, "healAmountModify");
function Rt(O6, O7) {
  let O8 = iZ.charinstance && iZ.charinstance[O6];
  if (!O8 || O8.destroyed) {
    return;
  }
  O8.healnum = O7;
  let O9 = iL(O8.x, O8.y, iE);
  O9.target = O8;
  let Oi = iL(O8.x, O8.y + O8.myheight - 24 - O8.tu * 20, ic);
  Oi.delay = 8;
  Oi.type = 3;
  Oi.damage = O7;
  if (iZ.hp[iZ.char[O6]] >= iZ.maxhp[iZ.char[O6]]) {
    Oi.specialmessage = 3;
  }
  O8.tu++;
}
iQ(Rt, "healFx4");
function Rq(O6) {
  let O7 = 0;
  if (O6 === 0 && iZ.monster[0] === 0) {
    O6 = 1;
  }
  if (O6 === 1 && iZ.monster[1] === 0) {
    O6 = 2;
  }
  if (O6 === 2) {
    if (iZ.monster[2] === 0) {
      O6 = 3;
    }
    if (O6 === 3 && iZ.monster[0] === 1) {
      O6 = 0;
    }
    if (O6 === 3 && iZ.monster[1] === 1) {
      O6 = 1;
    }
    if (O6 === 3) {
      O7 = 1;
    }
  }
  return [O6, O7];
}
iQ(Rq, "retargetSpell");
var RX = iQ(
  (O6) => (O6 === 1 ? 1.5 : O6 === 2 ? 1 : O6 === 3 ? 0.8 : O6 === 4 ? 0.3 : 0.2),
  "dualhealScale",
);
{
  let OZ = ij.chapterSpell;
  ij.chapterSpell = (O6, O7) => {
    if (iZ.chapter !== Rw) {
      if (typeof OZ == "function") {
        return OZ(O6, O7);
      } else {
        return false;
      }
    }
    let O8 = iZ.chartarget[O7];
    let O9 = RF("obj_hammer_of_justice_enemy");
    if (O9 && O6 !== 4 && O6 !== 5 && O6 !== 11 && O6 !== 100) {
      iZ.spelldelay = 10;
      if (O9.justice_item < 1) {
        O9.justice_item++;
      }
      iZ.spelldelay = 300;
      return true;
    }
    if (O6 === 2) {
      iZ.spelldelay = 10;
      let OR = Math.ceil(RJ(iZ.battlemag[O7] * 5, O7));
      iY(O8, OR);
      Rt(O8, OR);
      iZ.spelldelay = 15;
      return true;
    }
    if (O6 === 4) {
      let OO = 0;
      iZ.spelldelay = 30;
      if (iZ.monster[O8] === 0) {
        [O8, OO] = Rq(O8);
      }
      if (OO === 0) {
        iZ.spelldelay = 70;
        let Ox = Math.ceil(iZ.battlemag[O7] * 5 + iZ.battleat[O7] * 11 - iZ.monsterdf[O8] * 3);
        let Om = RF("obj_titan_enemy");
        if (Om) {
          if (
            (Om.unleashed &&
              Om.drawstate !== "defense end" &&
              Om.drawstate !== "defense" &&
              Om.starshootcon > 0) ||
            Om.drawstate === "crack"
          ) {
            Ox = Math.ceil(Ox * 5 * Om.unleashmultiplier);
          } else if (Om.drawstate === "defense end" || Om.drawstate === "defense") {
            Ox = Math.ceil(Ox * 0.1);
          } else {
            Ox = Math.ceil(Ox * 0.5);
          }
        } else if (Rc("obj_titan_spawn_enemy")) {
          Ox = Math.ceil(Ox * 0.5);
        }
        if (iZ.automiss && iZ.automiss[O8] === 1) {
          Ox = 0;
        }
        let Op = RF("obj_herosusie");
        let Ob = iL(Op ? Op.x : 90, Op ? Op.y : 150, iU);
        Ob.damage = Ox;
        Ob.star = O8;
        Ob.caster = O7;
        Ob.target = iZ.monsterinstance[O8];
        if (O9 && O9.justice_rudebuster < 1) {
          O9.justice_rudebuster++;
        }
      }
      return true;
    }
    if (O6 === 6) {
      iZ.spelldelay = 10;
      let Od = Math.round(RJ((iZ.battlemag[1] + iZ.battlemag[2]) * 3.5, O7));
      if (iZ.flag[1569] === 1) {
        Od = Math.round((iZ.battlemag[1] + iZ.battlemag[2]) * 6);
      }
      for (let OD of ["obj_titan_enemy", "obj_titan_spawn_enemy"]) {
        let Ow = RF(OD);
        if (Ow) {
          Ow.dualhealcount = (Ow.dualhealcount || 0) + 1;
          Od = Math.round(Od * RX(Ow.dualhealcount));
        }
      }
      for (let OF = 0; OF < 3; OF++) {
        if (iZ.charinstance && iZ.charinstance[OF]) {
          iY(OF, Od);
          Rt(OF, Od);
        }
      }
      iZ.spelldelay = 15;
      return true;
    }
    if (!(O6 > 10) || !(O6 < 100) || typeof i0 != "function") {
      return false;
    }
    let Oi = (iZ.charinstance && iZ.charinstance[O7]) || {};
    i0.call(Oi, O6, O7);
    return true;
  };
}
RU("bcDrawTop", (O6, O7) => {
  if (!(O6.dancing_jackolantern_con > 0)) {
    return false;
  }
  O6.dancing_jackolantern_timer++;
  O6.dancing_jackolantern_index += 1 / 3;
  let O8 = RF("obj_ghosthouse_jackolantern_merciful");
  if ((iZ.turntimer > 0 && O6.dancing_jackolantern_alpha > 0) || (O8 && O8.end_con === 1)) {
    O6.dancing_jackolantern_alpha -= 0.1;
    let Oi = RF("obj_jackenstein_enemy");
    if (Math.abs(O6.dancing_jackolantern_alpha) < 0.00001 && Oi && Oi.phaseturn >= 6) {
      O6.dancing_jackolantern_con = 2;
    }
    if (Math.abs(O6.dancing_jackolantern_alpha) < 0.00001 && Oi && Oi.phaseturn >= 8) {
      O6.dancing_jackolantern_con = 3;
    }
  }
  if (iZ.turntimer < 1 && O6.dancing_jackolantern_alpha < 1) {
    O6.dancing_jackolantern_alpha += 0.1;
  }
  let O9 = {
    1: [768, 128, 6],
    2: [711, 71, 10],
    3: [686, 46, 15],
  }[O6.dancing_jackolantern_con];
  if (O9) {
    let [OR, OO, Ox] = O9;
    if (O6.dancing_jackolantern_timer > OR) {
      O6.dancing_jackolantern_timer -= OO;
    }
    for (let Om = 0; Om < Ox; Om++) {
      O7.draw_sprite_ext(
        "spr_dancing_lantern",
        O6.dancing_jackolantern_index,
        640 + Om * OO - O6.dancing_jackolantern_timer,
        272,
        2,
        2,
        0,
        "#ffffff",
        O6.dancing_jackolantern_alpha,
      );
    }
  }
  return false;
});
{
  let Oe = ij.chapterSpellinfo;
  ij.chapterSpellinfo = (O6) =>
    iZ.chapter !== Rw ? (typeof Oe == "function" ? Oe(O6) : null) : ih(O6);
}
RU("techConfirm", (O6, O7, O8, O9) => {
  if (O9 === "before") {
    if (
      (Rc("obj_titan_spawn_enemy") || Rc("obj_titan_enemy") || Rc("obj_sound_of_justice_enemy")) &&
      iZ.charturn > 0 &&
      O8 === 0
    ) {
      O6.skipmonsterselection = 1;
    }
    return false;
  }
  let Oi = RF("obj_sound_of_justice_enemy");
  if (Oi) {
    if (O8 === 0) {
      Oi.susie_phase2_try_attack_con = 1;
    }
    if (O8 === 1) {
      Oi.endingcon = 1;
    }
    iD();
    return true;
  } else {
    return false;
  }
});
var RC = iQ((O6) => {
  let O7 = 0;
  for (let O8 = 0; O8 < 3; O8++) {
    let O9 = iZ.char[O8];
    if (O9) {
      if ((iZ.chararmor1 || [])[O9] === O6) {
        O7++;
      }
      if ((iZ.chararmor2 || [])[O9] === O6) {
        O7++;
      }
    }
  }
  return O7;
}, "armorCount");
RU("bcVictoryMsg", (O6) => {
  let O7 = iZ.monstergold[3];
  if (iZ.charweapon[1] === 53) {
    O7 += Math.floor(O7 / 20);
  }
  O7 *= 1 + RC(8) * 0.05;
  O7 *= 1 + RC(21) * 0.3;
  O7 -= O7 * (RC(54) * 0.1);
  O7 = Math.floor(O7);
  if (iZ.flag[37] === 1) {
    O7 = 0;
  }
  if (O7 !== iZ.monstergold[3]) {
    iZ.monstergold[3] = O7;
    iZ.msg[0] =
      "* You won^1!&* Got " + iZ.monsterexp[3] + " EXP and " + iZ.monstergold[3] + " D$./%";
  }
  if (O6.gersonend === true) {
    iZ.msg[0] =
      "* You won^1!&* Got " +
      iZ.monsterexp[3] +
      " EXP and " +
      iZ.monstergold[3] +
      " D$.&* Susie's heal power increased!/%";
  }
  return false;
});
RU("attackpressHit", (O6) => {
  if (Rc("obj_jackenstein_enemy")) {
    O6.points[0] = 0;
    O6.points[1] = 0;
    O6.points[2] = 0;
    iT(5);
  }
  let O7 = RF("obj_hammer_of_justice_enemy");
  if (O7) {
    O6.points[0] = 0;
    O7.state = 13;
    O7.sprite_index = "spr_gerson_teleport";
    O7.image_xscale = 3;
    O7.image_yscale = 3;
    O7.image_speed = 1;
    O7.x += 40;
    O7.y += 30;
    f.call(O7, "motor_swing_down", 1.4);
  }
  let O8 = RF("obj_sound_of_justice_enemy");
  if (O8) {
    O6.points[0] = 0;
    O6.points[1] = 0;
    if (O8.state !== 13) {
      O8.state = 13;
      O8.sprite_index = "spr_gerson_teleport";
      O8.image_xscale = 3;
      O8.image_yscale = 3;
      O8.image_speed = 1;
      O8.x = O8.xstart + 56;
      O8.y = O8.ystart + 70;
      f.call(O8, "motor_swing_down", 1.4);
    }
  }
  return false;
});
var RH = iQ(
  (O6) => O6.is && O6.is("obj_herokris") && (iZ.charweapon[1] === 26 || iZ.charweapon[1] === 11),
  "krisSword",
);
RU("heroDamage", (O6, O7) => {
  let O8 = RF("obj_titan_enemy");
  let O9 =
    O8 &&
    ((O8.unleashed &&
      O8.drawstate !== "defense end" &&
      O8.drawstate !== "defense" &&
      O8.starshootcon > 0) ||
      O8.drawstate === "crack");
  let Oi = O8 && (O8.drawstate === "defense end" || O8.drawstate === "defense");
  if (RH(O6)) {
    if (O8) {
      return Math.ceil(O9 ? O7 * 10 * O8.unleashmultiplier : Oi ? O7 * 0.1 : O7 * 3);
    } else if (Rc("obj_titan_spawn_enemy")) {
      return Math.ceil(O7 * 10);
    } else {
      return O7;
    }
  } else if (O8) {
    return Math.ceil(O9 ? O7 * 5 * O8.unleashmultiplier : Oi ? O7 * 0.1 : O7 * 0.5);
  } else {
    return O7;
  }
});
RU("heroHitTP", (O6) => {
  let O7 =
    Rc("obj_titan_enemy") ||
    Rc("obj_titan_spawn_enemy") ||
    Rc("obj_jackenstein_enemy") ||
    Rc("obj_sound_of_justice_enemy");
  return Math.round(O6.points / (O7 ? 26 : 10));
});
RU(
  "tpBlueBar",
  () =>
    Rc("obj_jackenstein_enemy") ||
    Rc("obj_sound_of_justice_enemy") ||
    Rc("obj_titan_enemy") ||
    Rc("obj_titan_spawn_enemy"),
);
var RA = iQ(
  (...O6) => (iZ.monsterinstancetype || []).some((O7) => O7 && O6.includes(O7.name)),
  "inFight",
);
RU("heroSetup", (O6) => {
  O6.showdarkness = true;
  if (O6.is && O6.is("obj_herosusie") && RA("obj_titan_enemy", "obj_titan_spawn_enemy")) {
    O6.normalsprite = "spr_susier_dark_unhappy";
    O6.idlesprite =
      iZ.charweapon[2] === 0 ? "spr_susieb_idle_unarmed_unhappy" : "spr_susieb_idle_serious";
    O6.defendsprite = "spr_susieb_defend_unhappy";
    O6.actreadysprite = "spr_susieb_actready";
    O6.attacksprite = "spr_susieb_attack_serious";
    O6.itemsprite = "spr_susieb_item_unhappy";
    O6.itemreadysprite = "spr_susieb_itemready_unhappy";
    O6.spellreadysprite = "spr_susieb_spellready_unhappy";
    O6.spellsprite = "spr_susieb_spell_unhappy";
    O6.defeatsprite = "spr_susie_dw_fell";
  }
  return false;
});
RU("heroDraw", (O6, O7, O8) => {
  let O9 = O6.showdarkness && (iZ.encounterno === 176 || iZ.encounterno === 186);
  if (O9) {
    il(true, "#000000");
  }
  try {
    O8();
  } finally {
    if (O9) {
      il(false, "#000000");
    }
  }
});
RU("bcDamageNoise", (O6) => {
  let O7 = RF("obj_titan_enemy");
  if (O7) {
    if (O7.drawstate === "defense" || O7.drawstate === "defense end") {
      iG("snd_bump");
      return true;
    } else if ((O7.drawstate === "idle" && O7.starshootcon > 0) || O7.drawstate === "crack") {
      O7.redflashtimer = 10;
      iG("snd_damage");
      iG("snd_queen_punched_lower_heavy");
      l.call(O6 || O7);
      is.with("obj_shake", (O8) => {
        O8.shakex = 4;
        O8.shakey = 4;
      });
      return true;
    } else if ((O7.drawstate === "idle" || O7.drawstate === "crack2") && O7.starshootcon === 0) {
      u.call(O6, "snd_metal_hit_reverb", 1, 0.5);
      O7.playmeatsoundcon = 1;
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
RU("bcDrawEnd", (O6, O7) => {
  if (iZ.bmenuno !== 9 || iZ.myfight !== 0) {
    return false;
  }
  if (
    Rc("obj_balthizard_enemy") &&
    iZ.charturn === 0 &&
    O6.incenseturtlegersoncon === 1 &&
    iZ.plot === 141
  ) {
    O7.draw_sprite_ext("spr_gerson_acticon", 0, 44, 450, 1, 1, 0, "#ffffff", 1);
  }
  if (
    Rc("obj_guei_enemy") &&
    iZ.plot >= 140 &&
    iZ.plot <= 160 &&
    iZ.flag[868] === 0 &&
    O6.gueigersoncon === 1
  ) {
    O7.draw_sprite_ext("spr_gerson_acticon", 0, 274, 422, 1, 1, 0, "#ffffff", 1);
  }
  let O8 = RF("obj_titan_enemy");
  if (O8 && O8.dualbusterenabled && !O8.susiesideaenabled) {
    O7.draw_sprite_ext("spr_gerson_acticon", 0, 82, 386, 1, 1, 0, "#ffffff", 1);
  }
  return false;
});
RU("tensionCap", () => null);
RU("actNameColor", (O6, O7, O8) => O8);
RU("heroAttackStart", (O6) => {
  if (Rc("obj_sound_of_justice_enemy") && i8) {
    let O8 = O6.is("obj_herokris");
    let O9 = O6.is("obj_herosusie");
    if (O8 || O9) {
      let Oi = iL(O8 ? O6.x + 30 : 140, O8 ? O6.y + 48 : 198, i8);
      Oi.type = 2;
      Oi.version = 1;
      Oi.color = O8 ? "#00ffff" : "#ff00ff";
      Oi.colorstart = O8 ? 16776960 : 16711935;
    }
  }
  let O7 = RF("obj_hammer_of_justice_enemy");
  if (O7) {
    O7.haveattacked = true;
  }
  return false;
});
RU("heroItemTick", (O6) => {
  if (Rc("obj_hammer_of_justice_enemy") && O6.attacktimer === 2 && i3) {
    let O7 = RF("obj_heroparent");
    iL((O7 ? O7.x : O6.x) + 63, (O7 ? O7.y : O6.y) + 60, i3);
  }
  return false;
});
RU("chapterNexthero", (O6) => {
  O6.moveswapped = 0;
  let O7 = iZ.charturn;
  let O8 = 0;
  if (iZ.charturn === 0) {
    O8 = 1;
    if (
      (iZ.charmove[1] === 1 && id(1) && !O6.skipsusieturn) ||
      (Rc("obj_sound_of_justice_enemy") && Rc("obj_herokris"))
    ) {
      iZ.charturn = 1;
    } else if (iZ.charmove[2] === 1 && id(2)) {
      iZ.charturn = 2;
    } else {
      iw();
    }
  }
  if (iZ.charturn === 1 && O8 === 0) {
    O8 = 1;
    if (id(2) && (iZ.acting[1] === 0 || ie() === 1)) {
      iZ.charturn = 2;
    } else {
      iw();
    }
  }
  if (iZ.charturn === 2 && O8 === 0) {
    iw();
  }
  if (O8 === 1) {
    iZ.bmenuno = 0;
  }
  if (
    iZ.charturn > 0 &&
    iZ.charturn < 3 &&
    ((iZ.temptension[iZ.charturn] = iZ.tension), O6.tempitem)
  ) {
    for (let O9 = 0; O9 < 12; O9++) {
      O6.tempitem[O9][iZ.charturn] = O6.tempitem[O9][O7];
    }
  }
  if (O6.disablesusieattack === 1 && iZ.charturn === 1) {
    iZ.bmenucoord[0][iZ.charturn] = 1;
  }
  return true;
});
RU("chapterEndturn", (O6) => (typeof i4 != "function" ? false : (i4.call(O6), true)));
RU("chapterAttackphase", (O6) => (typeof i5 != "function" ? false : (i5.call(O6), true)));
RU("heroPoseEnd", (O6) => {
  let O7 = O6.sprite_index && iP[O6.sprite_index];
  let O8 = O7 && O7.frames === 1 ? O6.image_index % 1 : O6.image_index;
  if (!O6.maxframes || O8 + O6.image_speed < O6.maxframes) {
    return false;
  } else {
    O6.state = 0;
    O6.hurt = 0;
    O6.attacktimer = 0;
    O6.maxframes = 0;
    iZ.faceaction[O6.myself] = 0;
    return true;
  }
});
RU("heroSpellTick", (O6, O7) => {
  let O8 = RF("obj_titan_enemy");
  if (O7 === "spr_susieb_spell" && O8 && O8.gerson && Rc("obj_rudebuster_anim")) {
    O8.gerson.sprite_index = "spr_gerson_rudebuster_ready2";
    O8.gerson.image_index = 0;
  }
  return false;
});
RU("heroAttackSprite", (O6, O7) => {
  let O8 = RF("obj_titan_enemy");
  if (
    !O8 ||
    (O8.drawstate !== "defense" && O8.drawstate !== "defense end") ||
    (!O6.is("obj_herokris") && !O6.is("obj_herosusie"))
  ) {
    return false;
  } else {
    O7.sprite_index = "spr_attack_slap1_purple";
    O7.maxindex = 4;
    O7.image_speed = 0.5;
    return true;
  }
});
RU("bcSkipMenu", (O6) => {
  if (O6.disablesusieattack !== 1 || iZ.charturn !== 1) {
    return false;
  }
  if (iZ.autoplay && iZ.bmenuno === 2) {
    let O8 = iZ.battlespell[1] || [];
    let O9 = iZ.battlespellcost[1] || [];
    let Oi = -1;
    for (let OR = 0; OR < 12; OR++) {
      if (O8[OR] !== 0 && O8[OR] !== undefined && (O9[OR] ?? 0) <= iZ.tension) {
        Oi = OR;
      }
    }
    if (Oi >= 0) {
      iZ.bmenucoord[2][1] = Oi;
    } else {
      iZ.tensionselect = 0;
      iZ.bmenuno = 0;
      iZ.bmenucoord[0][1] = 4;
      return true;
    }
  }
  if (iZ.bmenuno !== 0) {
    return false;
  }
  let O7 = iZ.bmenucoord[0][1];
  O6.menuStep();
  if (iZ.charturn === 1 && iZ.bmenuno === 0 && iZ.bmenucoord[0][1] === 0 && O7 !== 0) {
    iZ.bmenucoord[0][1] = O7 === 4 ? 1 : 4;
  }
  return true;
});
RU("itemTargetSkip", () => {
  let O6 = RF("obj_titan_enemy");
  if (O6 && O6.acting === 1) {
    return true;
  }
  let O7 = false;
  let O8 = false;
  is.with("obj_balthizard_enemy", (Oi) => {
    if (Oi.acting === 5 && iZ.charturn === 1) {
      O7 = true;
    }
  });
  let O9 = RF("obj_guei_enemy");
  is.with("obj_guei_enemy", (Oi) => {
    if (Oi.acting === 4 && O9 && O9.gersonactcount === 1) {
      O8 = true;
    }
  });
  if (O7 && iZ.plot === 141) {
    return true;
  } else {
    return O8;
  }
});
{
  let OP = new Set(["constructor", "create", "cleanUp"]);
  let OG = iQ(() => Math.round(((is.frame || 0) * 1000) / 30), "clockFrom");
  if (typeof iH == "function") {
    for (let ON of Object.values(i6)) {
      if (typeof ON != "function" || !ON.prototype) {
        continue;
      }
      let Of = ON.prototype;
      for (let OI of Object.getOwnPropertyNames(Of)) {
        if (OP.has(OI)) {
          continue;
        }
        let OM = Object.getOwnPropertyDescriptor(Of, OI);
        if (!OM || typeof OM.value != "function" || !String(OM.value).includes("current_time")) {
          continue;
        }
        let Ou = OM.value;
        Of[OI] = function (...O6) {
          iH(OG());
          try {
            return Ou.apply(this, O6);
          } finally {
            iH(0);
          }
        };
      }
    }
  }
}
if (i2) {
  let OK = i2.prototype.step;
  if (typeof OK != "function") {
    throw new Error("ch4_engine: obj_titan_enemy has no step() to wrap");
  }
  i2.prototype.step = function () {
    if (
      this.endingcon >= 17 &&
      this.endingcon <= 22.5 &&
      !is.view.live &&
      !is.exists("__roomhost")
    ) {
      is.view.live = true;
      this._g2pan = true;
    }
    OK.call(this);
    if (this._g2pan && (!(this.endingcon >= 17) || !(this.endingcon <= 22.5))) {
      is.view.x = this.camerastartx || 0;
      is.view.live = false;
      this._g2pan = false;
    }
    if (!iZ.battleover && this.acting === 1.25 && !!(this.endingtimer >= 210)) {
      if (!(is.number("obj_dw_churchc_insidetitan") > 0)) {
        iZ.battleover = "win";
      }
    }
  };
}
{
  let Oo = iQ(() => RF("obj_hammer_of_justice_enemy"), "hjOf");
  let OW = iQ(() => iZ.chapter === Rw && !!Oo(), "live");
  let Ov = iJ.prototype;
  let Os = Ov.create;
  let Oy = Ov.step;
  let Oz = Ov.draw;
  Ov.create = function (...O6) {
    let O7 = Os.apply(this, O6);
    this.hurtflashalpha = 0;
    this.gersonswingtimer = 0;
    this.gersonoffset = 0;
    this.speedmax = 24;
    let O8 = OW() ? Oo() : null;
    if (O8) {
      if (O8.rudebusterhitcount !== O8.rudebusterhitcountmax) {
        this.speedmax = 6;
      }
      this.gersonoffset = -10;
      this.x += 20;
      this.y -= 20;
    }
    return O7;
  };
  Ov.step = function (...O6) {
    let O7 = OW() ? Oo() : null;
    if (!O7) {
      return Oy.apply(this, O6);
    }
    if (typeof this.target == "number" || !this.target) {
      this.target = O7;
    }
    let O8 = this.target;
    if (this.image_alpha < 1) {
      this.image_alpha += 0.25;
    } else {
      this.image_alpha = 1;
    }
    if (this.t === 0) {
      let O9 = O8.sprite_width || 0;
      let Oi = O8.sprite_height || 0;
      this.targetx = 200 + O8.x + O9 / 2;
      this.targety = O8.y + Oi / 2;
      this.cx = this.targetx;
      this.cy = this.targety;
      this.direction = iy(this.x, this.y, this.cx, this.cy) - 20 + this.gersonoffset;
      this.speed = this.speedmax;
      this.friction = -1.5;
      if (O7.rudebusterhitcount === O7.rudebusterhitcountmax) {
        this.friction = -5;
        this.targety = O8.y - 60 + Oi / 2;
      }
      this.image_angle = this.direction;
      if (this.red === 1) {
        this.sprite_index = "spr_rudebuster_beam_red";
        this.image_xscale = 2.5;
        this.image_yscale = 2.5;
      }
    }
    if (O7.rudebusterhitcount < O7.rudebusterhitcountmax && this.explode === 0) {
      this.gersonswingtimer++;
      if (this.gersonswingtimer === 10) {
        {
          let OR = iP.spr_gerson_smash_stop;
          if (OR) {
            OR.ox = 25;
            OR.oy = 40;
          }
        }
        O7.sprite_index = "spr_gerson_smash_stop";
        O7.image_index = 0;
        O7.state = 10;
        iZ.spelldelay += 40;
      }
      if (this.gersonswingtimer === 17) {
        is.with("obj_afterimage", (OO) => OO.instance_destroy());
        this.speedmax = 0;
        this.hurtflashalpha = 1;
        this.speed = 0;
        this.image_alpha = 1;
        i7.call(this);
        iL(this.x, this.y, iV);
        iG("snd_rudebuster_hit");
      }
    }
    if (this.t >= 1 && this.explode === 0) {
      this.bolt_timer++;
      if (iM() && this.bolt_timer >= 4 && this.chosen_bolt === 0 && !this.lockdamage) {
        this.chosen_bolt = this.bolt_timer;
        this.lockdamage = true;
      }
      let OO = iy(this.x, this.y, this.cx, this.cy);
      this.direction += iz(OO, this.direction) / 4;
      if (O7.rudebusterhitcount < O7.rudebusterhitcountmax) {
        this.direction += 4;
      } else {
        this.direction += 8;
        if (this.direction < 10) {
          this.direction = 0;
        }
      }
      this.image_angle = this.direction;
      if (O7.state !== 14 && O7.rudebusterhitcount >= O7.rudebusterhitcountmax && this.x > 500) {
        O7.saverudebusterstarcount = Math.round((this.damage / iZ.monstermaxhp[0]) * 100);
        O7.state = 14;
        O7.spinxscale = 1;
        O7.spinspeed = 3.05;
        f.call(this, "snd_wallclaw", 0.7);
        iZ.spelldelay += 33;
        if (O7.rudebusterhitcount === O7.rudebusterhitcountmax && O7.rudebusterhitcountmax < 3) {
          O7.rudebusterhitcountmax++;
        }
      }
      if (this.x > 640) {
        this.instance_destroy();
        return;
      }
    }
    if (this.explode === 0 && this.speed !== 0) {
      let Ox = iL(this.x, this.y, iS);
      Ox.sprite_index = this.sprite_index;
      Ox.image_xscale = this.image_xscale;
      Ox.image_yscale = 1.8;
      Ox.image_angle = this.image_angle;
      Ox.image_index = 4;
      Ox.image_speed = 0.5;
      Ox.image_alpha = this.image_alpha - 0.2;
      Ox.depth = this.depth + 1;
      if (O7.rudebusterhitcount === O7.rudebusterhitcountmax) {
        Ox.fadeSpeed = 0.08;
      }
      (this.aft ||= []).push(Ox);
    }
    for (let Om of this.aft || []) {
      if (!Om.destroyed) {
        Om.image_yscale -= 0.1;
        if (Om.image_yscale <= 0.1) {
          Om.instance_destroy();
        }
      }
    }
    this.t++;
  };
  Ov.draw = function (O6, ...O7) {
    if (typeof Oz == "function") {
      Oz.call(this, O6, ...O7);
    } else {
      this.draw_self(O6);
    }
    if (this.hurtflashalpha > 0) {
      il(true, "#ffffff", 0, 1);
      O6.draw_sprite_ext(
        this.sprite_index,
        this.image_index,
        this.x,
        this.y,
        this.image_xscale,
        this.image_yscale,
        this.image_angle,
        "#ffffff",
        this.hurtflashalpha,
      );
      il(false, "#000000", 0, 0);
      this.hurtflashalpha -= 0.1;
    }
  };
}
var RS = {
  236: "snd_glassbreak",
  269: "snd_punchmed",
  390: "snd_sparkle_glock",
};
var RV = class Ol extends iu {
  create() {
    this.t = 0;
    this.parts = [];
    this.visible = false;
  }
  step() {
    for (let O6 of this.parts) {
      if (O6.delay === this.t) {
        iG(O6.snd, {
          pitch: O6.pitch,
          volume: O6.volume,
        });
      }
    }
    this.t++;
    if (this.parts.every((O7) => O7.delay < this.t)) {
      this.instance_destroy();
    }
  }
};
iQ(RV, "obj_g2_snd_complex");
ik(RV, "kinds", iK("obj_g2_snd_complex", iu));
ik(RV, "defaultDepth", 0);
var Rh = RV;
var RT = class OB extends iu {
  create() {
    this.t = 0;
    this.target = null;
    this.damage = 1;
    this.caster = 0;
    this.star = 0;
    let O6 = RF("obj_titan_enemy");
    let O7 = O6 && O6.gerson;
    this.hasArt = !!iP.spr_gerson_rudebuster;
    if (O7 && !O7.destroyed) {
      if (this.hasArt) {
        O7.visible = false;
      }
      this.depth = O7.depth;
      this.x = O7.x;
      this.y = O7.y;
    }
    this.sprite_index = "spr_gerson_rudebuster";
    this.visible = this.hasArt;
    this.image_xscale = -2;
    this.image_yscale = 2;
    this.image_speed = 0.5;
  }
  step() {
    let O6 = RF("obj_titan_enemy");
    if (this.target && !this.target.destroyed && this.t === 14) {
      iG("snd_rudebuster_swing");
      let O7 = iL(this.x - 132, this.y + 14, iJ);
      O7.caster = this.caster;
      O7.target = this.target;
      O7.damage = 1950 + iW(100);
      O7.star = this.star;
      O7.sprite_index = "spr_rudebuster_beam_green";
      O7.speedmax = 44;
      iZ.faceaction[1] = 0;
    }
    if (this.t >= 32) {
      let O8 = O6 && O6.gerson;
      if (O8 && !O8.destroyed) {
        O8.visible = true;
        O8.sprite_index = "spr_gerson_idle";
        O8.image_speed = 0.25;
        O8.x = O8.xstart;
        O8.y = O8.ystart;
      }
      this.instance_destroy();
      return;
    }
    this.t++;
  }
};
iQ(RT, "obj_rudebuster_anim_gerson");
ik(RT, "kinds", iK("obj_rudebuster_anim_gerson", iu));
ik(RT, "defaultDepth", 0);
ik(RT, "defaultSprite", "spr_gerson_rudebuster");
var RY = RT;
{
  let Og = iU.prototype;
  let On = Og.create;
  let OL = Og.step;
  Og.create = function (...O6) {
    let O7 = On.apply(this, O6);
    this.init = 0;
    this.dualbuster = false;
    return O7;
  };
  Og.step = function (...O6) {
    if (iZ.chapter !== Rw) {
      return OL.apply(this, O6);
    }
    let O7 = RF("obj_titan_enemy");
    if (this.init === 0 && O7 && O7.acting === 1.12 && O7.gerson) {
      this.init = 1;
      let O8 = iL(O7.gerson.x, O7.gerson.y, RY);
      O8.target = this.target;
    }
    if (!this.dualbuster) {
      return OL.apply(this, O6);
    }
    this.image_index = this.t / 2;
    if (this.target && !this.target.destroyed && this.t === 14) {
      iG("snd_rudebuster_swing");
      let O9 = iL(this.x + 40, this.y + 30, iJ);
      O9.caster = this.caster;
      O9.target = this.target;
      O9.damage = this.damage + 500;
      O9.star = this.star;
      if (this.red === 1) {
        O9.red = 1;
      }
    }
    if (this.t >= 32) {
      let Oi = RF("obj_herosusie");
      if (Oi) {
        Oi.visible = true;
      }
      this.instance_destroy();
      return;
    }
    this.t++;
  };
  let OQ = iJ.prototype;
  let Ok = OQ.step;
  OQ.step = function (...O6) {
    let O7 = this.t;
    let O8 = Ok.apply(this, O6);
    if (
      iZ.chapter === Rw &&
      O7 === 0 &&
      this.speedmax &&
      this.speedmax !== 24 &&
      !Rc("obj_hammer_of_justice_enemy")
    ) {
      this.speed = this.speedmax;
    }
    return O8;
  };
}
RU("rudebusterHit", (O6, O7) => {
  if (O7 !== "before") {
    return false;
  }
  let O8 = RF("obj_titan_enemy");
  if (!O8) {
    return false;
  }
  if (O8.drawstate === "crack") {
    O8.redflashtimer = 10;
    iG("snd_damage");
    iG("snd_queen_punched_lower_heavy");
    l.call(O6);
    is.with("obj_shake", (O9) => {
      O9.shakex = 4;
      O9.shakey = 4;
    });
  }
  if (O6.sprite_index === "spr_rudebuster_beam_green" && O8.drawstate !== "crack") {
    let O9 = iL(0, 0, Rh);
    O9.parts = [
      [0, 236, 0.6, 0.4, 3],
      [1, 390, 0.8, 0.5, 1],
      [2, 390, 0.71, 0.5, 1],
      [3, 269, 0.7, 0.95, 1],
    ].map(([, Od, OD, Ow, OF]) => ({
      snd: RS[Od],
      pitch: OD,
      volume: Ow,
      delay: OF,
    }));
    O8.drawstate = "crack";
    O8.redflashtimer = 10;
    let Oi = is.view.x || 0;
    let OR = is.view.y || 0;
    let OO = Oi + 500;
    let Ox = OR + 300;
    let Om = (O8.camerastartx || 0) + 640 - 494;
    let Op = (O8.camerastarty || 0) - 88;
    let Ob = iA;
    {
      for (let Od = 0; Od < 6; Od++) {
        let OD = iL(Om, Op, Ob);
        Object.assign(OD, {
          sprite_index: "spr_titan_star_break",
          image_blend: iN.white,
          image_speed: 0,
          image_index: 1 + Od,
          image_xscale: 2,
          image_yscale: 2,
          gravity: 1,
          gravity_direction: 270,
          depth: 10,
        });
        OD.vspeed = -4 - io(18);
        OD.hspeed = -6 + io(12);
      }
      for (let Ow = 0; Ow < 30; Ow++) {
        let OF = iL(OO - 40 + io(80), Ox - 40 + io(80), Ob);
        Object.assign(OF, {
          sprite_index: "spr_gerson_item_throw",
          image_blend: iI(iN.white, iN.black, 0.3),
          image_speed: 0,
          image_index: 3,
          gravity: 1,
          gravity_direction: 270,
          depth: 10,
        });
        OF.vspeed = -4 - io(18);
        OF.hspeed = -6 + io(12);
      }
    }
  }
  return false;
});
R1();
var Rj = 4;
var RZ = iQ((O6) => (O6 > 1 ? 1 : O6 > 0 ? O6 : 0), "clamp01");
{
  let x0 = ij.heroDraw;
  ij.heroDraw = function (O6, O7, O8) {
    if (iZ.chapter !== Rj) {
      if (typeof x0 == "function") {
        return x0(O6, O7, O8);
      } else {
        return O8();
      }
    }
    let O9 = iZ.targeted;
    let Oi = O6.myself;
    let OR =
      Array.isArray(O9) && O9[Oi] === 1
        ? () => {
            O9[Oi] = 0;
            try {
              return O8();
            } finally {
              O9[Oi] = 1;
            }
          }
        : O8;
    if (typeof x0 == "function") {
      return x0(O6, O7, OR);
    } else {
      return OR();
    }
  };
}
if (i8) {
  let x1 = i8.prototype;
  let x2 = x1.draw;
  if (typeof x2 != "function") {
    throw new Error("ch4_church: obj_church_old_man_ripple_effect has no draw()");
  }
  x1.draw = function (O6, ...O7) {
    if (iZ.chapter !== Rj || !O6) {
      return x2.call(this, O6, ...O7);
    }
    let O8 = O6.ctx;
    let O9 = Object.prototype.hasOwnProperty.call(O6, "draw_circle");
    let Oi = O9 ? O6.draw_circle : null;
    let OR = O6.draw_circle;
    O6.draw_circle = function (OO, Ox, Om, Op) {
      if (this.ctx === O8 || Op) {
        return OR.call(this, OO, Ox, Om, Op);
      }
      if (!(Om > 0) || !Number.isFinite(Om)) {
        return;
      }
      let Ob = this.ctx;
      Ob.save();
      Ob.globalCompositeOperation = "destination-out";
      Ob.globalAlpha = 1;
      Ob.beginPath();
      Ob.arc(OO, Ox, Om, 0, Math.PI * 2);
      Ob.fill();
      Ob.globalCompositeOperation = "source-over";
      Ob.globalAlpha = RZ(this.alpha);
      if (Ob.globalAlpha > 0) {
        Ob.fillStyle = this.color;
        Ob.beginPath();
        Ob.arc(OO, Ox, Om, 0, Math.PI * 2);
        Ob.fill();
      }
      Ob.restore();
    };
    try {
      return x2.call(this, O6, ...O7);
    } finally {
      if (O9) {
        O6.draw_circle = Oi;
      } else {
        delete O6.draw_circle;
      }
    }
  };
}
if (n) {
  let x3 = n.prototype;
  let x4 = x3.draw;
  if (typeof x4 != "function") {
    throw new Error("ch4_church: obj_gerson_growtangle_telegraph_new has no draw()");
  }
  x3.draw = function (O6, ...O7) {
    if (iZ.chapter !== Rj) {
      return x4.call(this, O6, ...O7);
    }
    let O8 = this.image_alpha;
    if (O8 > 0) {
      this.image_alpha = Math.sqrt(Math.min(O8, 1));
      try {
        return x4.call(this, O6, ...O7);
      } finally {
        this.image_alpha = O8;
      }
    }
  };
}
var Re = 3800;
var RP = 0;
var RG = [
  "ch4/room_dw_churchc_titanclimb2_post",
  Re,
  RP,
  {
    hide: ["DEBUG_ASSETS"],
    enc: 175,
  },
];
var RN = iQ((O6, O7, O8) => (O6 < O7 ? Math.min(O6 + O8, O7) : Math.max(O6 - O8, O7)), "approach");
var Rf = iQ((O6) => 1 - (1 - O6) * (1 - O6), "easeOut");
var RI = class x5 extends da {
  create() {
    this.depth = 100000;
    this.background_spotlight_alpha = 0;
    this.lerpt = 0;
    this.layers = [];
    this.t = 0;
  }
  step() {
    this.t++;
    if (this.lerpt < 60) {
      this.lerpt++;
      this.background_spotlight_alpha = Rf(this.lerpt / 60) * 0.35;
    }
    let O6 = is.first("obj_titan_enemy");
    if (O6) {
      if (O6.phase === 3) {
        this.background_spotlight_alpha = RN(this.background_spotlight_alpha, 0.5, 0.05);
      }
      if (O6.phase === 5) {
        this.background_spotlight_alpha = RN(this.background_spotlight_alpha, 0.85, 0.05);
      }
      if (O6.phase === 7) {
        this.background_spotlight_alpha = RN(this.background_spotlight_alpha, 0, 0.05);
      }
    }
    let O7 = (this.t * 1000) / 30;
    for (let { o: O8, wave: O9 } of this.layers) {
      let Oi = O8.layer;
      if (!!Oi && !!Oi.spr) {
        for (let OR = 0; OR < Oi.spr.length; OR++) {
          let OO = Oi.spr[OR];
          let Ox = Oi.inity[OR];
          let Om = OO[1] + (Oi.xo || 0) - Re;
          let Op = Ox + (Oi.yo || 0) - RP;
          if (!(Op > -100) || !(Op < 580) || !(Om > -100) || !(Om < 740)) {
            continue;
          }
          let Ob = O9 * 0.5;
          OO[2] = Ox + Ob + Math.sin(((O7 * 0.001 + OR * 2 * 0.11) / 2) * (Math.PI * 2)) * Ob;
        }
      }
    }
  }
  draw(O6) {
    let O7 = this.background_spotlight_alpha;
    if (!(O7 > 0)) {
      return;
    }
    let O8 = iP.spr_titan_background_spotlight;
    let O9 = O8 ? O8.w : 0;
    let Oi = 60;
    let OR = Oi + O9 * 2;
    O6.draw_set_color("#000000");
    O6.draw_set_alpha(O7);
    O6.draw_rectangle(0, 0, Oi - 1, 480, false);
    O6.draw_rectangle(OR, 0, 640, 480, false);
    O6.draw_set_alpha(1);
    if (O8) {
      il(true, "#000000");
      O6.draw_sprite_ext("spr_titan_background_spotlight", 0, Oi, 0, 2, 2, 0, "#000000", O7);
      il(false, "#000000");
    }
    O6.draw_set_color("#ffffff");
  }
};
iQ(RI, "obj_titan_room_post");
ik(RI, "kinds", iK("obj_titan_room_post", da));
var RM = RI;
var Ru = null;
var RK = class x6 extends iu {
  create() {
    this.depth = 1000350;
    this.parts = [];
    this.stopemitting = false;
    this.seed = 175;
  }
  rnd() {
    this.seed = (this.seed * 1103515245 + 12345) & 2147483647;
    return this.seed / 2147483648;
  }
  step() {
    let O6 = is.first("obj_titan_enemy");
    if (!this.stopemitting && O6) {
      if (O6.rumble == false && this.rnd() < O6.phase * 0.2) {
        this.parts.push({
          x: this.rnd() * 640,
          y: 380 + this.rnd() * 100,
          size: 0.1 + this.rnd() * 0.3,
          spd: 0.8 + this.rnd() * 0.8,
          life: 700,
          ws: this.rnd() * Math.PI * 2,
          wd: this.rnd() * Math.PI * 2,
        });
      } else if (O6.rumble) {
        this.stopemitting = true;
      }
    }
    for (let O7 of this.parts) {
      O7.life--;
      let O8 = O7.spd + Math.sin(O7.ws + O7.life * 0.2) * 0.2;
      let O9 = ((90 + Math.sin(O7.wd + O7.life * 0.1) * 12) * Math.PI) / 180;
      O7.x += Math.cos(O9) * O8;
      O7.y -= Math.sin(O9) * O8;
    }
    if (this.parts.length && this.parts.some((Oi) => Oi.life <= 0)) {
      this.parts = this.parts.filter((Oi) => Oi.life > 0);
    }
  }
  draw(O6) {
    if (O6.headless || !iP.spr_tower_fountain_ball2 || typeof document === "undefined") {
      return;
    }
    let O7 = this.parts.filter((Op) => Op.x < 330 && Op.y < 250 && Op.y > -10);
    if (!O7.length) {
      return;
    }
    if (!Ru) {
      let Op = () => {
        let Od = document.createElement("canvas");
        Od.width = 320;
        Od.height = 240;
        return Od;
      };
      let Ob = Op();
      Ru = {
        surf: Ob,
        sil: Op(),
        sg: new O6.constructor(Ob.getContext("2d")),
      };
    }
    let { surf: O8, sil: O9, sg: Oi } = Ru;
    let OR = O8.getContext("2d");
    let OO = O9.getContext("2d");
    OR.clearRect(0, 0, 320, 240);
    for (let Od of O7) {
      Oi.draw_sprite_ext(
        "spr_tower_fountain_ball2",
        0,
        Od.x,
        Od.y,
        Od.size,
        Od.size,
        0,
        "#ffffff",
        1,
      );
    }
    OO.globalCompositeOperation = "copy";
    OO.drawImage(O8, 0, 0);
    OO.globalCompositeOperation = "source-in";
    OO.fillStyle = "#404040";
    OO.fillRect(0, 0, 320, 240);
    OO.globalCompositeOperation = "source-over";
    let Ox = O6.ctx;
    let Om = Ox.imageSmoothingEnabled;
    Ox.imageSmoothingEnabled = false;
    for (let [OD, Ow] of [
      [-2, 0],
      [2, 0],
      [0, -2],
      [0, 2],
    ]) {
      Ox.drawImage(O9, OD, Ow, 640, 480);
    }
    Ox.drawImage(O8, 0, 0, 640, 480);
    Ox.imageSmoothingEnabled = Om;
  }
};
iQ(RK, "obj_titan_background_balls");
ik(RK, "kinds", iK("obj_titan_background_balls", iu));
var Ro = RK;
ip("175", ({ vx: O6, vy: O7 }) => {
  let O8 = iL(0, 0, RM);
  iL(0, 0, Ro);
  let O9 = {
    SWAYING_FORE: 2,
    SWAYING_MID: 4,
    SWAYING_BACK: 6,
  };
  for (let Oi of is.list) {
    if (!Oi.is || !Oi.is("obj_roomlayer") || !Oi.layer) {
      continue;
    }
    let OR = Oi.layer;
    if (OR.n === "PARALLAX_1") {
      Oi.layer = {
        ...OR,
        xo: Math.round(O6 * 0.5),
        yo: Math.round(O7 * 0.1),
      };
    } else if (O9[OR.n] && OR.spr) {
      Oi.layer = {
        ...OR,
        spr: OR.spr.map((OO) => OO.slice()),
        inity: OR.spr.map((OO) => OO[2]),
      };
      O8.layers.push({
        o: Oi,
        wave: O9[OR.n],
      });
    }
  }
});
var RW = new WeakMap();
var Rv = null;
function Rs(O6, O7, O8) {
  if (O7 >= 255) {
    return null;
  }
  let O9 = RW.get(O6);
  if (O9 === undefined) {
    let Ow = document.createElement("canvas");
    Ow.width = O6.width;
    Ow.height = O6.height;
    let OF = Ow.getContext("2d", {
      willReadFrequently: true,
    });
    OF.drawImage(O6, 0, 0);
    O9 = OF.getImageData(0, 0, Ow.width, Ow.height);
    if (!O9 || !(O9.width > 0) || !O9.data || O9.data.length !== O9.width * O9.height * 4) {
      O9 = null;
    }
    RW.set(O6, O9 || false);
  }
  if (!O9) {
    return null;
  }
  Rv ||= document.createElement("canvas");
  let Oi = Rv;
  if (Oi.width !== O9.width || Oi.height !== O9.height) {
    Oi.width = O9.width;
    Oi.height = O9.height;
  }
  let OR = Oi.getContext("2d");
  let OO = OR.createImageData(O9.width, O9.height);
  let Ox = parseInt(O8.slice(1), 16);
  let Om = (Ox >> 16) & 255;
  let Op = (Ox >> 8) & 255;
  let Ob = Ox & 255;
  let Od = O9.data;
  let OD = OO.data;
  for (let Oc = 3; Oc < Od.length; Oc += 4) {
    if (Od[Oc] > O7) {
      OD[Oc - 3] = Om;
      OD[Oc - 2] = Op;
      OD[Oc - 1] = Ob;
      OD[Oc] = 255;
    }
  }
  OR.putImageData(OO, 0, 0);
  return Oi;
}
iQ(Rs, "alphaTested");
if (o && typeof document !== "undefined") {
  let x7 = o.prototype;
  let x8 = x7.draw;
  let x9 = iQ((O6) => (O6 > 1 ? 1 : O6 > 0 ? O6 : 0), "clamp01b");
  x7.draw = function (O6, ...O7) {
    if (iZ.chapter !== Rj || !O6 || !O6.ctx) {
      return x8.call(this, O6, ...O7);
    }
    let O8 = Array.isArray(this.remprog) ? this.remprog : (this.remprog = [0, 0, 0, 0]);
    O8[3] = O8[2];
    O8[2] = O8[1];
    O8[1] = O8[0];
    O8[0] = this.prog;
    this.prog = x9(this.timer / this.lifetime);
    if (this.reverse) {
      this.prog = 1 - this.prog;
    }
    this.image_index = this.reverse ? 1 : 0;
    let O9 = iP[this.sprite_index];
    let Oi = O9 && O9.img && O9.img[this.image_index];
    if (Oi && Oi.width > 0) {
      let OR =
        this.move_x !== 0 || this.move_y !== 0
          ? [
              [(this.reverse ? this.prog : O8[2]) * 255, "#808080", "source-over"],
              [O8[0] * 255, "#000000", "source-over"],
              [(this.reverse ? O8[2] : this.prog) * 255, "#ffffff", "lighter"],
            ]
          : [[this.prog * 255, null, "source-over"]];
      let OO = O6.ctx;
      for (let [Ox, Om, Op] of OR) {
        if (!Om) {
          O6.draw_sprite_ext(
            this.sprite_index,
            this.image_index,
            this.x,
            this.y,
            this.image_xscale,
            this.image_yscale,
            this.image_angle,
            this.image_blend,
            this.image_alpha,
          );
          continue;
        }
        let Ob = Rs(Oi, Ox, Om);
        if (Ob) {
          OO.save();
          OO.globalCompositeOperation = Op;
          OO.globalAlpha = 1;
          OO.translate(this.x, this.y);
          if (this.image_angle) {
            OO.rotate((-this.image_angle * Math.PI) / 180);
          }
          OO.scale(this.image_xscale, this.image_yscale);
          OO.drawImage(Ob, -O9.ox, -O9.oy);
          OO.restore();
        }
      }
    }
    if (this.timer < 15) {
      let Od = Math.round((1 - this.timer / 15) * 136);
      let OD = "#" + Od.toString(16).padStart(2, "0").repeat(3);
      let Ow = Q.call(this, this.timer / 15, 3);
      let OF = O6.ctx;
      OF.save();
      OF.globalCompositeOperation = "lighter";
      O6.draw_sprite_ext(
        "spr_titan_star_centered",
        2,
        this.x + 348,
        this.y + 288,
        this.image_xscale + Ow,
        this.image_yscale + Ow,
        this.image_angle,
        OD,
        this.image_alpha,
      );
      OF.restore();
    }
    if (this.con === 1) {
      if (this.timer === 0) {
        iG("snd_laz_titan");
      }
      this.timer++;
      if (this.timer >= this.lifetime) {
        this.con = 2;
      }
    }
  };
}
var Ry = 4;
var Rz = [
  150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
  169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
  188, 189, 190, 191, 500, 501,
];
var Rl = [
  150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
  169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 185, 186, 187, 188,
  189, 190, 191, 501,
];
var RB = {
  180: "Names obj_swatchling_enemy, which chapter 4's own data has no code for (an empty object) - not a working encounter in the game.",
  500: "A developer test encounter (obj_multiboss_enemy1, obj_multiboss_enemy2, obj_multiboss_enemy3) - in the data, never started by the game.",
  501: "A developer test encounter (obj_multiboss_controller_enemy1, obj_multiboss_controller_enemy2, obj_multiboss_controller_enemy3) - in the data, never started by the game.",
};
var Rg = "ch4_battle";
var Rn = {
  160: "ch4_extra_boss",
  174: "pumpkin_boss",
  175: "titan_battle",
  176: "statue_chord_basic",
  177: "titan_spawn",
  186: "statue_chord_basic",
};
var RL = {
  160: [2, 0, 0],
  176: [2, 0, 0],
  186: [1, 2, 0],
};
var RQ = {
  186: [1, 0, 0],
};
var Rk = {
  maxhp: {
    1: 200,
    2: 230,
    3: 180,
    4: 90,
  },
  at: {
    1: 17,
    2: 22,
    3: 15,
    4: 3,
  },
  charweapon: {
    1: 23,
    2: 24,
    3: 25,
    4: 12,
  },
  chararmor1: {
    1: 25,
    2: 25,
    3: 25,
    4: 14,
  },
  chararmor2: {
    1: 10,
    2: 10,
    3: 10,
    4: 22,
  },
  mag: {
    2: 3,
    3: 14,
    4: 11,
  },
  df: {
    4: 1,
  },
  spell: {
    "1,0": 7,
    "2,0": 4,
    "2,1": 11,
    "3,0": 3,
    "3,1": 2,
  },
};
var O0 = {
  160: ["room_dw_church_arena", 520, 0],
  186: ["room_dw_churchb_nongerson", 0, 0],
};
var O1 = {
  default: 0.7,
  176: 0,
};
var O2 = {
  150: [
    {
      suffix: "g",
      label: "with Gerson",
      plot: 150,
      flags: {
        868: 0,
      },
      why: "Plot 150 in the dark maze - the Guei's Old Man ACT (scr_monstersetup Guei, obj_dw_church_darkmaze)",
    },
  ],
  151: [
    {
      suffix: "g",
      label: "with Gerson",
      plot: 141,
      why: "Plot 141 - Gerson walks into the fight (obj_dw_church_turtles, obj_balthizard_enemy Create_0:56-59)",
    },
  ],
};
iO(4, {
  SCR: W,
  OBJ: i6,
  startStats: Rk,
});
var O3 = new Set([178]);
function O4() {
  let O6 = O5();
  for (let O7 of O6) {
    if (O7.encounterno === 175) {
      let [O9, Oi, OR, OO] = RG;
      let Ox = ib(O9, Oi, OR, OO);
      if (Ox) {
        O7.background = Ox;
      }
    }
    if (!O3.has(O7.encounterno)) {
      continue;
    }
    O7.music = "battle";
    O7.room = "room_dw_castle_dojo";
    let O8 = O7.background;
    O7.background = () => {
      if (O8) {
        O8();
      }
      iL(320, 0, im);
    };
  }
  return O6;
}
iQ(O4, "buildFights");
function O5() {
  return ix({
    ch: 4,
    cases: Rz,
    scr_encountersetup: R8,
    scr_monstersetup: Rm,
    ENC_BG: Rb,
    ENC_MUSIC: {
      ...Rp,
      ...Rn,
    },
    DEFAULT_MUSIC: Rg || Rd,
    cut: Object.fromEntries(Object.entries(RB).map(([O6, O7]) => [Number(O6), O7])),
    verified: Rl,
    party: Object.fromEntries(Object.entries(RL).map(([O6, O7]) => [Number(O6), O7])),
    setupParty: Object.fromEntries(Object.entries(RQ).map(([O6, O7]) => [Number(O6), O7])),
    room: Object.fromEntries(Object.entries(O0).map(([O6, O7]) => [Number(O6), O7])),
    musiclevel: O1,
    story: O2,
  });
}
iQ(O5, "buildFightsRaw");
export {
  Rz as CASES,
  Ry as CHAPTER,
  Rg as DEFAULT_SONG,
  RB as DEV,
  Rn as ENC_MUSIC_FROM_EVENTS,
  O1 as MUSIC_LEVEL,
  RL as PARTY,
  O0 as ROOMS,
  RQ as SETUP_PARTY,
  Rk as START_STATS,
  O2 as STORY,
  Rl as VERIFIED,
  O4 as buildFights,
};
