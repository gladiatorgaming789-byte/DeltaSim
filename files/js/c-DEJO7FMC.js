import {
  i as C,
  m as Q,
  n as Z,
  o as w,
  p as Y,
  q as O,
  r as q,
  s as g,
  t as u,
  u as J,
  v as L,
  w as G,
  x as l,
  y as X,
} from "./c-NN73UTDM.js";
import {
  $r as M,
  Fk as P0,
  Ms as P1,
  Nm as P2,
  Om as P3,
  Ru as P4,
  S as P5,
  Tm as P6,
  Tr as P7,
  h as P8,
  hv as P9,
  js as PP,
  kf as PW,
  qv as PB,
  ti as Pk,
  wi as PF,
  yb as PS,
  zl as Po,
} from "./c-XDSPOA6D.js";
import { d as Pb } from "./c-4YZYGP7E.js";
import { Ba as Py, Zc as PU, ca as PA } from "./c-YIYZ26Y6.js";
import { j as Pf, m as PC } from "./c-UDIQ4TLL.js";
import "./c-IOQMCY55.js";
import "./c-XN5NQRMB.js";
import "./c-LAR7MFOW.js";
import "./c-PNBP23RB.js";
import "./c-467NPQE4.js";
import "./c-BAF3JL6T.js";
import "./c-DSQH6PM3.js";
import "./c-A3CL5ELZ.js";
import "./c-ZSM55H2A.js";
import "./c-G7MM4LIS.js";
import "./c-SNBMULDO.js";
import "./c-2XD6JUBJ.js";
import "./c-2RHLG27W.js";
import { C as PN, D as Pj, L as PQ, d as PE, i as Ph } from "./c-Q4AJT7BT.js";
import "./c-3MS4RS6S.js";
import {
  Rh as PI,
  bd as Pt,
  dd as PZ,
  fb as Pc,
  h as Pw,
  ie as PR,
  kf as PY,
  l as PO,
  lf as Pv,
  mf as Pq,
  nd as Pm,
  od as Pg,
  qa as Px,
  qd as Pu,
  x as PJ,
  xa as PL,
} from "./c-HEUEF6GJ.js";
import "./c-66FIJ62A.js";
import "./c-QJXN6G4A.js";
import "./c-CPDHW4F2.js";
import "./c-Q2IMJXHR.js";
import { c as Pp, d as PK } from "./c-UDQUHXBV.js";
import { f as PG } from "./c-FKUTYDQS.js";
import "./c-43ZBXPN7.js";
import "./c-5UGGU4DV.js";
import { a as PV } from "./c-F4ZSRAAO.js";
import "./c-YU6VF6CE.js";
import { L as PD, g as PH } from "./c-O6GE5FYX.js";
import {
  Ab as PT,
  G as Pl,
  I as Pd,
  Ic as Pi,
  Ja as Pn,
  Kb as PX,
  Ob as PM,
  c as Pz,
  f as W0,
  g as W1,
  gb as W2,
  hb as W3,
  j as W4,
  l as W5,
  m as W6,
  ma as W7,
  na as W8,
  oa as W9,
  ob as WP,
  pa as WW,
  qb as WB,
  sb as Wk,
  vb as WF,
  w as WS,
  wa as Wo,
  z as Wb,
  zb as Wy,
} from "./c-ZEHUSSXN.js";
import { a as WU, e as WA, g as Wf, j as WC, l as WN } from "./c-7Q4J33FN.js";
WN();
WN();
var Wj = new Proxy(
  {},
  {
    get: WU((Bn, BX) => PB[BX] || PU[BX], "get"),
  },
);
var WQ = WU((Bn) => P2[Bn] || Pb[Bn] || PI[Bn] || (() => {}), "SCRIPT");
var { GID: WE, OBJREF: Wh, instance_exists: WI } = PI;
var Wt = new Proxy(
  {},
  {
    get: WU((Bn, BX) => Wj[BX], "get"),
  },
);
function WZ(Bn) {
  this.xx = WQ("camerax").call(this);
  this.yy = WQ("cameray").call(this);
  let BX = 0;
  let BM = [94, 50];
  let Bz = [80, 122];
  let k0 = [72, 200];
  let k1 = 0;
  if (PH.char[0] !== 0 && PH.char[1] === 0 && PH.char[2] === 0) {
    k1 = 1;
  }
  if (PH.char[0] !== 0 && PH.char[1] !== 0 && PH.char[2] === 0) {
    k1 = 2;
  }
  for (let k2 = 0; WE(k2) < 3; k2 += 1) {
    (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[k2] = this.xx + 80;
    (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[k2] = this.yy + 50 + k2 * 80;
    (Array.isArray(PH.monsterinstancetype)
      ? PH.monsterinstancetype
      : (PH.monsterinstancetype = []))[k2] = Wh(Wj.obj_baseenemy);
    (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[k2] = 1;
    (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[k2] =
      this.xx + 500 + k2 * 20;
    (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[k2] =
      this.yy + 40 + k2 * 90;
  }
  (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
  (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
  if (PH.char[0] !== 0 && PH.char[1] === 0 && PH.char[2] === 0) {
    (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 140;
  }
  if (PH.char[0] !== 0 && PH.char[1] !== 0 && PH.char[2] === 0) {
    (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 100;
    (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 180;
  }
  (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* It is known.";
  switch (Bn) {
    case 0:
      break;
    case 1: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_baseenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 1;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_baseenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 1;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = WQ("stringset").call(
        this,
        "* Test enemies showed up.",
      );
      break;
    }
    case 2: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_lancerboss);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 2;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 540;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      break;
    }
    case 3: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_dummyenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 3;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 160;
      if (Wb(WI(Wj.obj_npc_room))) {
        (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
          Pw("obj_npc_room").xstart;
        (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
          Pw("obj_npc_room").ystart;
      }
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      break;
    }
    case 4: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_diamondenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 5;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 140;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Rudinn drew near!";
      if (PH.flag[500] >= 1) {
        (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
          "* A different Rudinn from last time drew near!";
      }
      if (PH.flag[500] === 2) {
        (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
          "* Assumedly another different Rudinn appeared!";
      }
      break;
    }
    case 5: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_diamondenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 5;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_diamondenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 5;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* A necklace of Rudinns blocks your path.";
      break;
    }
    case 6: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_diamondenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 5;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_heartenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 6;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Rudinn and Hathy blocked the way!";
      break;
    }
    case 7: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_smallcheckers_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 9;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 440;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 150;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
      break;
    }
    case 8: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_clubsenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 16;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 400;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 120;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Clover grew close!";
      break;
    }
    case 9: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_heartenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 6;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_heartenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 6;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_heartenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 6;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Three Hathys blocked the way!";
      break;
    }
    case 12: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_checkers_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 10;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 120;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Here it comes!";
      break;
    }
    case 13: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_ponman_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 11;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_ponman_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 11;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Ponman drew near!";
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      break;
    }
    case 14: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_ponman_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 11;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_ponman_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 11;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_ponman_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 11;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Ponman drew near!";
      break;
    }
    case 15: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_clubsenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 7;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 400;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 30;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_heartenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 6;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 420;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Clover and Hathy grew close!";
      break;
    }
    case 16: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_rabbick_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 13;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 140;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Rabbick slithered in the way!";
      break;
    }
    case 17: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_rabbick_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 13;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_rabbick_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 13;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Rabbicks slithered in the way!";
      break;
    }
    case 18: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_bloxer_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 14;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 140;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Bloxer assembled!";
      break;
    }
    case 19: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_bloxer_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 14;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_bloxer_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 14;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Bloxers assembled!";
      break;
    }
    case 20: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_lancerboss2);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 12;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 120;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 160;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Lancer blocked the way!";
      break;
    }
    case 21: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_jigsawryenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 15;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 140;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Jigsawry drew near!";
      if (PH.flag[500] >= 1) {
        (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
          "* A different Jigsawry from last time drew near!";
      }
      if (PH.flag[500] === 2) {
        (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
          "* Assumedly another different Jigsawry appeared!";
      }
      break;
    }
    case 22: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_jigsawryenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 15;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_jigsawryenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 15;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_jigsawryenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 15;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* A board of Jigsawrys blocked the way!";
      break;
    }
    case 23: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_jigsawryenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 15;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_diamondenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 5;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_heartenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 6;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Smorgasboard.";
      break;
    }
    case 24: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_rabbick_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 13;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_diamondenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 5;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Rabbick slithered in the way!";
      break;
    }
    case 25: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 100;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 90;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 150;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 100;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 210;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_joker);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 20;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 160;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* LET THE GAMES BEGIN!";
      break;
    }
    case 27: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_checkers_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 21;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 120;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Here it comes^1. Again.";
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 65;
      break;
    }
    case 28: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_rudinnranger);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 22;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_rudinnranger);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 22;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Rudinn Rangers came sparkling into view!";
      break;
    }
    case 29: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_headhathy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 23;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_headhathy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 23;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Head Hathy blocked the way quietly!";
      break;
    }
    case 30: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_headhathy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 23;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_headhathy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 23;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_headhathy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 23;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Head Hathy blocked the way quietly! (x3)";
      break;
    }
    case 31: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_susieenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 19;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 520;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_lancerboss3);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 18;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 540;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 240;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Two bad guys blocked the way!";
      break;
    }
    case 32: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_rabbick_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 13;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_rabbick_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 13;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_rabbick_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 13;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Rabbicks slithered in the way!";
      break;
    }
    case 33: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_diamondenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 5;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 20;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_heartenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 6;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 120;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_diamondenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 5;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 220;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Various guys appeared!";
      break;
    }
    case 40: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_king_boss);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 25;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 460;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* King blocked the way!";
      break;
    }
    case 71: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_clubsenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 47;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 400;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Clover joins the stage!";
      break;
    }
    case 72: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_dojograzeenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 42;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 440;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 100;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* It's a grazing adventure.";
      break;
    }
    case 89: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_tasque_manager_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 42;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 487;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 94;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Graze!";
      break;
    }
    case 90: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_werewire_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 33;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 476;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 70;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_werewire_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 33;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 454;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 168;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Round One!";
      break;
    }
    case 91: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_poppup_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 31;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 412;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 40;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_omawaroid_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 30;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 466;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 106;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_virovirokun_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 35;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 412;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 184;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Round Two!";
      break;
    }
    case 92: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_tasque_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 32;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 432;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 52;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_tasque_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 32;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 476;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 140;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_maus_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 34;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 512;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 236;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Round Three!";
      break;
    }
    case 93: {
      (Array.isArray(PH.flag) ? PH.flag : (PH.flag = []))[426] = W6(0, 1, 2, 3);
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_swatchling_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 36;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 394;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 8;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_swatchling_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 36;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 490;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] = this.yy + 74;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_swatchling_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 36;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 394;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 160;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Round Four!";
      break;
    }
    case 94: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_werewerewire_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 40;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 464;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 68;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_werewerewire_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 40;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 494;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 184;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Final Round!";
      break;
    }
    case 100: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 94;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 122;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[2] = this.xx + 72;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[2] = this.yy + 200;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_dojo_spareenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 52;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 440;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 100;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Jigsaw Joe jigs in!";
      break;
    }
    case 200: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Floradinn florads in!";
      break;
    }
    case 201: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_leafling_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 71;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 510;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_leafling_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 71;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 540;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Leafling floats by carefree.";
      break;
    }
    case 202: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_scarecrow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 72;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 450;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_kawkaw_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 74;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 487;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 208;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Shi blocks the way! (... sort of.)&* Kawkaw wants to play!";
      break;
    }
    case 203: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_shinobeetle_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 73;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 473;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_shinobeetle_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 73;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 520;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 160;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Shinobeetle sneaks in!";
      break;
    }
    case 204: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_kawkaw_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 74;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_kawkaw_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 74;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Kawkaw wants to play!";
      break;
    }
    case 205: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_sheary_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 75;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 461;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_sheary_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 75;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 503;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 183;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "* Sheary cuts in!";
      break;
    }
    case 206: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_netskie_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 76;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 473;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 130;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Netskie unwraps itself from its big fluffy tail!";
      break;
    }
    case 207: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_terracota_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 77;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 446;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 76;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Terakota stomps towards you!";
      break;
    }
    case 208: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 458;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 60;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_leafling_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 71;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Floradinn florads in!&* Leafling floats by carefree.";
      break;
    }
    case 209: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_shinobeetle_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 73;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 473;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 50;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_leafling_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 71;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 540;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Shinobeetle sneaks in!&* Floradinn florads in!";
      break;
    }
    case 210: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_scarecrow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 72;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 473;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 24;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_kawkaw_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 74;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 446;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 153;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_kawkaw_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 74;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 483;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 240;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Shi blocks the way! (... sort of.)&* Kawkaw wants to play!";
      break;
    }
    case 211: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_scarecrow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 72;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 473;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 32;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_scarecrow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 72;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 473;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 162;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Shi blocks the way! (... sort of.)";
      break;
    }
    case 212: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_scarecrow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 72;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 473;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 76;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Shi blocks the way! (... sort of.)";
      break;
    }
    case 213: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_shinobeetle_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 73;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 474;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 24;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "SETH AND 1 SHINOBEETLE";
      break;
    }
    case 214: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 473;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 64;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 446;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 152;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 483;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 240;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* It's a din of Floradinns!";
      break;
    }
    case 215: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_leafling_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 71;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 470;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_sheary_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 75;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 490;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* A leaf and its cutter appeared!";
      break;
    }
    case 220: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_aqua_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 112;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 130;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* A mysterious festival begins.";
      break;
    }
    case 221: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_orange_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 113;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 103;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_green_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 114;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 493;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 180;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Green brings the food!&* Orange brings the fight!";
      break;
    }
    case 222: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_blue_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 115;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 466;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 40;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_yellow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 116;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 160;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Yellow brings the gun's!&* Blue brings the elegance!";
      break;
    }
    case 223: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_purple_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 117;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_aqua_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 112;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Aqua brings the sword!&* Seth brings the pen!";
      break;
    }
    case 224: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_pink_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 118;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 470;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 131;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* TP MAX reduced by TEA!&Gather HEARTS to recover MAX TP!";
      break;
    }
    case 225: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_flowery_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 119;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 114;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Flowery faces you!";
      break;
    }
    case 226: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 90;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 32;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 80;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 104;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 298;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 158;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 420;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 194;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "";
      break;
    }
    case 227: {
      if (k1 === 1) {
        BM = [80, 122];
      }
      if (k1 === 2) {
        BM = [94, 86];
        Bz = [80, 166];
      }
      PH.heromakex = [this.xx + BM[0], this.xx + Bz[0], this.xx + k0[0]];
      PH.heromakey = [this.yy + BM[1], this.yy + Bz[1], this.yy + k0[1]];
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[BX] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[BX] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[BX] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[BX] =
        this.yy + 110;
      BX++;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Floradinn florads in!";
      break;
    }
    case 228: {
      if (k1 === 1) {
        BM = [80, 122];
      }
      if (k1 === 2) {
        BM = [94, 86];
        Bz = [80, 166];
      }
      PH.heromakex = [this.xx + BM[0], this.xx + Bz[0], this.xx + k0[0]];
      PH.heromakey = [this.yy + BM[1], this.yy + Bz[1], this.yy + k0[1]];
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[BX] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[BX] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[BX] =
        this.xx + 514;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[BX] =
        this.yy + 38;
      BX++;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[BX] = Wh(Wj.obj_sheary_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[BX] = 75;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[BX] =
        this.xx + 534;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[BX] =
        this.yy + 130;
      BX++;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[BX] = Wh(Wj.obj_netskie_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[BX] = 76;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[BX] =
        this.xx + 528;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[BX] =
        this.yy + 222;
      BX++;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Floradinn florads in!&* Sheary cuts in!&* Netskie unwraps itself from its big fluffy tail!";
      break;
    }
    case 229: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_netskie_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 76;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 473;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 130;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 0;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Netskie tricked you!";
      break;
    }
    case 230: {
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[0] = this.xx + 90;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[0] = this.yy + 32;
      (Array.isArray(PH.heromakex) ? PH.heromakex : (PH.heromakex = []))[1] = this.xx + 90;
      (Array.isArray(PH.heromakey) ? PH.heromakey : (PH.heromakey = []))[1] = this.yy + 104;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_floradinn_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 70;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 360;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 158;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "";
      break;
    }
    case 231: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_scarecrow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 72;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 462;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Shi blocks the way! (... sort of.)";
      break;
    }
    case 232: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_shinobeetle_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 73;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 437;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 112;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Shinobeetle is no longer alone!";
      break;
    }
    case 233: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_scarecrow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 72;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 495;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 75;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_scarecrow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 72;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 495;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 130;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_scarecrow_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 72;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 495;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 185;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* Shi blocks the way for real!";
      break;
    }
    case 234: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_trashy_trio);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 121;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 456;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 182;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] =
        "* The world's most popular trio!";
      break;
    }
    case 235: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_enemy_example);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 123;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 456;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 102;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = "...";
      break;
    }
    case 500: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_multiboss_enemy1);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 500;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_multiboss_enemy2);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 500;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 160;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_multiboss_enemy3);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 500;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 520;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 240;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = WQ("stringset").call(
        this,
        "* A multiboss example showed up.",
      );
      break;
    }
    case 501: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_multiboss_controller_enemy1);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 501;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] = this.yy + 80;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_multiboss_controller_enemy2);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 501;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 160;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_multiboss_controller_enemy3);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 501;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[2] =
        this.xx + 520;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[2] =
        this.yy + 240;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = WQ("stringset").call(
        this,
        "* A multiboss example with controller showed up.",
      );
      break;
    }
    case 777: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_bullettester_enemy);
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_bullettester_enemy);
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[2] = Wh(Wj.obj_bullettester_enemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 1;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 1;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 1;
      (Array.isArray(PH.battlemsg) ? PH.battlemsg : (PH.battlemsg = []))[0] = WQ("stringset").call(
        this,
        " ",
      );
      break;
    }
    default: {
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[0] = Wh(Wj.obj_baseenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[0] = 1;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[0] =
        this.xx + 480;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[0] =
        this.yy + 110;
      (Array.isArray(PH.monsterinstancetype)
        ? PH.monsterinstancetype
        : (PH.monsterinstancetype = []))[1] = Wh(Wj.obj_baseenemy);
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[1] = 1;
      (Array.isArray(PH.monstermakex) ? PH.monstermakex : (PH.monstermakex = []))[1] =
        this.xx + 500;
      (Array.isArray(PH.monstermakey) ? PH.monstermakey : (PH.monstermakey = []))[1] =
        this.yy + 200;
      (Array.isArray(PH.monstertype) ? PH.monstertype : (PH.monstertype = []))[2] = 0;
      break;
    }
  }
}
WU(WZ, "scr_encountersetup");
WC(
  WZ,
  "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 71:\n;\ncase 72:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 100:\n;\ncase 200:\n;\ncase 201:\n;\ncase 202:\n;\ncase 203:\n;\ncase 204:\n;\ncase 205:\n;\ncase 206:\n;\ncase 207:\n;\ncase 208:\n;\ncase 209:\n;\ncase 210:\n;\ncase 211:\n;\ncase 212:\n;\ncase 213:\n;\ncase 214:\n;\ncase 215:\n;\ncase 220:\n;\ncase 221:\n;\ncase 222:\n;\ncase 223:\n;\ncase 224:\n;\ncase 225:\n;\ncase 226:\n;\ncase 227:\n;\ncase 228:\n;\ncase 229:\n;\ncase 230:\n;\ncase 231:\n;\ncase 232:\n;\ncase 233:\n;\ncase 234:\n;\ncase 235:\n;\ncase 500:\n;\ncase 501:\n;\ncase 777:",
);
WN();
var Wc = new Proxy(
  {},
  {
    get: WU((Bn, BX) => PB[BX] || PU[BX], "get"),
  },
);
var Ww = WU((Bn) => P2[Bn] || Pb[Bn] || PI[Bn] || (() => {}), "SCRIPT");
var WR = new Proxy(
  {},
  {
    get: WU((Bn, BX) => Wc[BX], "get"),
  },
);
function WY() {
  Ww("scr_monster_actreset").call(this, this.myself);
  if (PH.monstertype[this.myself] === 1) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = Ww(
      "stringset",
    ).call(this, "Enemy");
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 130;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 130;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 7;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 20;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] = Ww(
      "stringset",
    ).call(this, "Check");
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] = Ww(
      "stringset",
    ).call(this, "Warning");
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] = Ww(
      "stringset",
    ).call(this, "Victory");
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[3] = Ww(
      "stringset",
    ).call(this, "SimuDance");
    (Array.isArray((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself])
      ? (Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself]
      : ((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[4] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[4] = Ww(
      "stringset",
    ).call(this, "Victory (S)");
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[5] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[5] = Ww(
      "stringset",
    ).call(this, "Lecture");
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = Ww("stringset").call(this, "CoolDance");
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[1] = Ww("stringset").call(this, "SimuDance");
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = Ww("stringset").call(this, "CoolDance");
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[1] = Ww("stringset").call(this, "SimuDance");
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[1] = 1;
  }
  if (PH.monstertype[this.myself] === 70) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Floradinn";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 280;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "Flatter";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "60%#Mercy";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "FlirtS";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "Romance#Mercy?";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[3] =
      "Convince";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[3] =
      "TIRE#enemy";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[3] = 3;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 71) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Leafling";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 260;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "TurboSpin";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "100% Mercy#to all";
    (Array.isArray((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself])
      ? (Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself]
      : ((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself] = []))[1] = 160;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "PinDown";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "Make#TIRED";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[3] =
      "BlowAway";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[3] =
      "Mash for#Mercy";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[3] = 3;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 72) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "Shi";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 300;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "ActScared";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "30%#Mercy";
    (Array.isArray((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself])
      ? (Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself]
      : ((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "Intimidate";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "Pose for#Mercy";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 73) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Shinobeetle";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 320;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "Convince";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "35%#Mercy";
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 74) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "KawKaw";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 270;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "Hoop";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "60%#Mercy";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "ShooOrCall";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "Leave#or Love";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 75) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Sheary";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 340;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "SalonCut";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "Relaxed#cut";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[1] = 4;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "ValueCut";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "Cut#quick!";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[2] = 2;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[3] =
      "HyperCut";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[3] =
      "Cut#FAST!!!";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 76) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Netskie";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 1545;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 1545;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 444;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "Faker";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "Touch fake#bullets";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[1] = 4;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "Impression";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "Slight#Mercy";
    (Array.isArray((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself])
      ? (Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself]
      : ((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 77) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Terakota";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 1545;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 1545;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 400;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "WateringCan";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "Waters#plants";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[1] = 4;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "SlowerCan";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "Waters#slower";
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 78) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "???";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 160;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
  }
  if (PH.monstertype[this.myself] === 79) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "???";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 600;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 160;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 80) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "???";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 515;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 600;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 160;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 112) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "???";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 3060;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 3060;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 600;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 0;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "Spin";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "20%#mercy";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "Dance";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "20%#mercy";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[3] =
      "Care";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[3] =
      "20%#mercy";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[4] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[4] =
      "Coolpose";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[4] =
      "20%#mercy";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[5] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[5] =
      "Flatter";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[5] =
      "20%#mercy";
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      0;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 0;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      0;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 0;
  }
  if (PH.monstertype[this.myself] === 113) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Orange";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 2060;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 2060;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 400;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 0;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "GetAlong";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "25%#mercy";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[1] = 4;
    (Array.isArray((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself])
      ? (Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself]
      : ((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself] = []))[1] = 210;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "TPCooking";
    (Array.isArray(
      (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself]
      : ((Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself] =
          []))[0] = "Boost#TP";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "TPCooking";
    (Array.isArray(
      (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself]
      : ((Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself] =
          []))[0] = "Boost#TP";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 114) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "Green";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 2060;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 2060;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 400;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 0;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "FeastX";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "25%#mercy";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[1] = 4;
    (Array.isArray((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself])
      ? (Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself]
      : ((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself] = []))[1] = 210;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "TPCooking";
    (Array.isArray(
      (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself]
      : ((Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself] =
          []))[0] = "Boost#TP";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "TPCooking";
    (Array.isArray(
      (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself]
      : ((Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself] =
          []))[0] = "Boost#TP";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 115) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "Blue";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 2060;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 2060;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 450;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 0;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
  }
  if (PH.monstertype[this.myself] === 116) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Yellow";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 2060;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 2060;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 450;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 0;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[1] = "HelpOut";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[1] = "HelpOut";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[1] = 1;
  }
  if (PH.monstertype[this.myself] === 117) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "Seth";
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 3600;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 3600;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 160;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 0;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "FlatterX";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "50%#Mercy";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[1] = 4;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 118) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "Pink";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 7000;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 7000;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 0;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 0;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "Flirt";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "Doki+1";
    (Array.isArray((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself])
      ? (Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself]
      : ((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself] = []))[1] = 20;
    (Array.isArray((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself])
      ? (Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself]
      : ((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "MegaFlirt";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "Doki+5";
    (Array.isArray((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself])
      ? (Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself]
      : ((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself])
      ? (Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself]
      : ((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself] = []))[2] = 150;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[3] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[3] =
      "MegaFlirtX";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[3] =
      "Doki+5";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[3] = 4;
    (Array.isArray((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself])
      ? (Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself]
      : ((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself] = []))[3] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[4] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[4] =
      "GigaFlirt";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[4] =
      "Doki+10";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[4] = 4;
    (Array.isArray((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself])
      ? (Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself]
      : ((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself] = []))[4] = 200;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "Flirt";
    (Array.isArray(
      (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself]
      : ((Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself] =
          []))[0] = "Doki +1";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray(
      (Array.isArray(PH.actcostsus) ? PH.actcostsus : (PH.actcostsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actcostsus) ? PH.actcostsus : (PH.actcostsus = []))[this.myself]
      : ((Array.isArray(PH.actcostsus) ? PH.actcostsus : (PH.actcostsus = []))[this.myself] =
          []))[0] = 20;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[1] = "MegaFlirt";
    (Array.isArray(
      (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself]
      : ((Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself] =
          []))[1] = "Doki +5";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray(
      (Array.isArray(PH.actcostsus) ? PH.actcostsus : (PH.actcostsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actcostsus) ? PH.actcostsus : (PH.actcostsus = []))[this.myself]
      : ((Array.isArray(PH.actcostsus) ? PH.actcostsus : (PH.actcostsus = []))[this.myself] =
          []))[1] = 150;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[2] = "ShareFood";
    (Array.isArray(
      (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself]
      : ((Array.isArray(PH.actdescsus) ? PH.actdescsus : (PH.actdescsus = []))[this.myself] =
          []))[2] = "Item in#Exchange#For doki";
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "Flirt";
    (Array.isArray(
      (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself]
      : ((Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself] =
          []))[0] = "Doki +1";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray(
      (Array.isArray(PH.actcostral) ? PH.actcostral : (PH.actcostral = []))[this.myself],
    )
      ? (Array.isArray(PH.actcostral) ? PH.actcostral : (PH.actcostral = []))[this.myself]
      : ((Array.isArray(PH.actcostral) ? PH.actcostral : (PH.actcostral = []))[this.myself] =
          []))[0] = 20;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[1] = "MegaFlirt";
    (Array.isArray(
      (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself]
      : ((Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself] =
          []))[1] = "Doki +5";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray(
      (Array.isArray(PH.actcostral) ? PH.actcostral : (PH.actcostral = []))[this.myself],
    )
      ? (Array.isArray(PH.actcostral) ? PH.actcostral : (PH.actcostral = []))[this.myself]
      : ((Array.isArray(PH.actcostral) ? PH.actcostral : (PH.actcostral = []))[this.myself] =
          []))[1] = 150;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[2] = "LovelyBoy";
    (Array.isArray(
      (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself],
    )
      ? (Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself]
      : ((Array.isArray(PH.actdescral) ? PH.actdescral : (PH.actdescral = []))[this.myself] =
          []))[2] = "Max TP#14% UP";
  }
  if (PH.monstertype[this.myself] === 119) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Flowery";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 7000;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 7000;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 0;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 0;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "Posey";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "10%#Mercy";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself])
      ? (Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself]
      : ((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself] = []))[1] = 160;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] =
      "PoseyZ";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[2] =
      "10%#Mercy";
    (Array.isArray((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself])
      ? (Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself]
      : ((Array.isArray(PH.actactor) ? PH.actactor : (PH.actactor = []))[this.myself] = []))[2] = 4;
    (Array.isArray((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself])
      ? (Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself]
      : ((Array.isArray(PH.actcost) ? PH.actcost : (PH.actcost = []))[this.myself] = []))[2] = 125;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 120) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = "Ball";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 1200;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 1200;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 21;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 280;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "Flatter";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "60%#Mercy";
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 121) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Trashy Trio";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 1200;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 1200;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 21;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 280;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 0;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
  }
  if (PH.monstertype[this.myself] === 122) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Nubert";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 1200;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 1200;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 21;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 280;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] =
      "Check";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[0] =
      "Useless#analysis";
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] =
      "Flatter";
    (Array.isArray((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself])
      ? (Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself]
      : ((Array.isArray(PH.actdesc) ? PH.actdesc : (PH.actdesc = []))[this.myself] = []))[1] =
      "60%#Mercy";
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "S-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[0] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "R-Action";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[0] = 1;
  }
  if (PH.monstertype[this.myself] === 123) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] =
      "Example";
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 1200;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 1200;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 16;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 280;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray(PH.mercymod) ? PH.mercymod : (PH.mercymod = []))[this.myself] = 0;
    (Array.isArray(PH.mercymax) ? PH.mercymax : (PH.mercymax = []))[this.myself] = 100;
  }
  if (PH.monstertype[this.myself] === 500) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = Ww(
      "stringset",
    ).call(this, "Multiboss Example");
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 130;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 130;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 7;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 20;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] = Ww(
      "stringset",
    ).call(this, "Taunt");
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] = Ww(
      "stringset",
    ).call(this, "SimuDance");
    (Array.isArray((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself])
      ? (Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself]
      : ((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] = Ww(
      "stringset",
    ).call(this, "SimuFlatter");
    (Array.isArray((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself])
      ? (Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself]
      : ((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = Ww("stringset").call(this, "CoolDance");
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[1] = Ww("stringset").call(this, "SimuDance");
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[2] = Ww("stringset").call(this, "SimuFlatter");
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[2] = 0;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[3] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[3] = Ww("stringset").call(this, "Loner");
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[3] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = Ww("stringset").call(this, "CoolDance");
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[1] = Ww("stringset").call(this, "SimuDance");
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[2] = Ww("stringset").call(this, "SimuFlatter");
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[2] = 0;
  }
  if (PH.monstertype[this.myself] === 501) {
    (Array.isArray(PH.monstername) ? PH.monstername : (PH.monstername = []))[this.myself] = Ww(
      "stringset",
    ).call(this, "Multiboss C Example");
    (Array.isArray(PH.monstermaxhp) ? PH.monstermaxhp : (PH.monstermaxhp = []))[this.myself] = 130;
    (Array.isArray(PH.monsterhp) ? PH.monsterhp : (PH.monsterhp = []))[this.myself] = 130;
    (Array.isArray(PH.monsterat) ? PH.monsterat : (PH.monsterat = []))[this.myself] = 7;
    (Array.isArray(PH.monsterdf) ? PH.monsterdf : (PH.monsterdf = []))[this.myself] = 0;
    (Array.isArray(PH.monsterexp) ? PH.monsterexp : (PH.monsterexp = []))[this.myself] = 0;
    (Array.isArray(PH.monstergold) ? PH.monstergold : (PH.monstergold = []))[this.myself] = 20;
    (Array.isArray(PH.sparepoint) ? PH.sparepoint : (PH.sparepoint = []))[this.myself] = 10;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[0] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[0] = Ww(
      "stringset",
    ).call(this, "Taunt");
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[1] = Ww(
      "stringset",
    ).call(this, "SimuDance");
    (Array.isArray((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself])
      ? (Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself]
      : ((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself] = []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself])
      ? (Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself]
      : ((Array.isArray(PH.canact) ? PH.canact : (PH.canact = []))[this.myself] = []))[2] = 1;
    (Array.isArray((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself])
      ? (Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself]
      : ((Array.isArray(PH.actname) ? PH.actname : (PH.actname = []))[this.myself] = []))[2] = Ww(
      "stringset",
    ).call(this, "SimuFlatter");
    (Array.isArray((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself])
      ? (Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself]
      : ((Array.isArray(PH.actsimul) ? PH.actsimul : (PH.actsimul = []))[this.myself] = []))[2] = 0;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[0] = "CoolDance";
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[1] = "SimuDance";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[2] = "SimuFlatter";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[2] = 0;
    (Array.isArray((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself])
      ? (Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself]
      : ((Array.isArray(PH.canactsus) ? PH.canactsus : (PH.canactsus = []))[this.myself] = []))[3] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself],
    )
      ? (Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself]
      : ((Array.isArray(PH.actnamesus) ? PH.actnamesus : (PH.actnamesus = []))[this.myself] =
          []))[3] = "Loner";
    (Array.isArray(
      (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself]
      : ((Array.isArray(PH.actsimulsus) ? PH.actsimulsus : (PH.actsimulsus = []))[this.myself] =
          []))[3] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[0] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[0] = "CoolDance";
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[1] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[1] = "SimuDance";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[1] = 1;
    (Array.isArray((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself])
      ? (Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself]
      : ((Array.isArray(PH.canactral) ? PH.canactral : (PH.canactral = []))[this.myself] = []))[2] =
      1;
    (Array.isArray(
      (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself],
    )
      ? (Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself]
      : ((Array.isArray(PH.actnameral) ? PH.actnameral : (PH.actnameral = []))[this.myself] =
          []))[2] = "SimuFlatter";
    (Array.isArray(
      (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself],
    )
      ? (Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself]
      : ((Array.isArray(PH.actsimulral) ? PH.actsimulral : (PH.actsimulral = []))[this.myself] =
          []))[2] = 0;
  }
}
WU(WY, "scr_monstersetup");
WN();
var WO = {
  12: "checkers",
  221: "miniboss_new_section_idea_wip",
  222: "miniboss_new_section_idea_wip",
  232: "castle_top",
};
var Wv = {
  230: "plain",
};
var Wq = "battle";
WN();
WN();
var { obj_flowery_enemy: Wm } = PB;
var Wg = "room_dw_fcastle_flowerclimb";
var Wx = "room_dw_post_flowery_battle";
var Wu = new Set([
  "obj_mainchara",
  "obj_mainchara_dash",
  "obj_caterpillar_dash",
  "obj_kris_headobj",
  "obj_ch5_DW29",
  "obj_ch5_DW29_power_up",
  "obj_ch5_DW29_power_up_flowery",
]);
var WJ = [];
var WL = false;
function Wp() {
  if (!WL) {
    WL = true;
    for (let [Bn, BX] of Object.entries(O || {})) {
      let BM = PU[Bn];
      if (!BM || BM === BX || Wu.has(Bn)) {
        continue;
      }
      let Bz = {
        Stub: BM,
        proto: Object.getPrototypeOf(BM.prototype),
        ctor: Object.getPrototypeOf(BM),
        kinds: BM.kinds,
      };
      Object.setPrototypeOf(BM.prototype, BX.prototype);
      Object.setPrototypeOf(BM, BX);
      BM.kinds = BX.kinds;
      WJ.push(Bz);
    }
    for (let [k0, k1] of Object.entries(Z || {})) {
      for (let k2 of new Set([q[k0], PB[k0], PU[k0]])) {
        if (typeof k2 != "function" || !k2.kinds) {
          continue;
        }
        let k3 = k1.filter((k4) => !k2.kinds.has(k4));
        if (k3.length) {
          WD.push([k2, k2.kinds]);
          k2.kinds = new Set([...k2.kinds, ...k3]);
        }
      }
    }
    for (let [k4, k5] of Object.entries(w || {})) {
      if (k5) {
        Pi.set(k4, k5);
      }
    }
    if (!Object.prototype.hasOwnProperty.call(W2.prototype, "UnknownEnum")) {
      Object.defineProperty(W2.prototype, "UnknownEnum", {
        configurable: true,
        get: () => WH,
      });
    }
    WP.reindex();
    WB(Q || {}, "c5fl2", true);
    Wk("c5fl2");
    WG();
  }
}
WU(Wp, "upgradeStubs");
var WK = [];
function WG() {
  if (WK.length) {
    return;
  }
  let Bn = new Set(PG.map(([BX, BM]) => BX + "|" + BM));
  for (let [BX, BM] of Object.entries(q)) {
    if (typeof BM == "function" && !!BM.prototype) {
      for (let Bz of Object.getOwnPropertyNames(BM.prototype)) {
        if (!Bz.startsWith("collide_")) {
          continue;
        }
        let k0 = Bz.slice(8);
        if (Bn.has(BX + "|" + k0)) {
          continue;
        }
        Bn.add(BX + "|" + k0);
        let k1 = [
          BX,
          k0,
          (k2, k3) => {
            let k4 = k2[Bz];
            if (typeof k4 == "function") {
              k4.call(k2, k3);
            }
          },
        ];
        PG.push(k1);
        WK.push(k1);
      }
    }
  }
}
WU(WG, "addStageCollisions");
function WV() {
  while (WK.length) {
    let Bn = WK.pop();
    let BX = PG.indexOf(Bn);
    if (BX >= 0) {
      PG.splice(BX, 1);
    }
  }
}
WU(WV, "removeStageCollisions");
var WD = [];
var WH = new Proxy(
  {},
  {
    get: WU((Bn, BX) => {
      let BM = /^Value_(m?)(\d+)$/.exec(String(BX));
      if (BM) {
        if (BM[1]) {
          return -Number(BM[2]);
        } else {
          return Number(BM[2]);
        }
      } else {
        return undefined;
      }
    }, "get"),
  },
);
function WT() {
  WL = false;
  WV();
  while (WD.length) {
    let [Bn, BX] = WD.pop();
    Bn.kinds = BX;
  }
  Pi.clear();
  if (Object.prototype.hasOwnProperty.call(W2.prototype, "UnknownEnum")) {
    delete W2.prototype.UnknownEnum;
  }
  WP.reindex();
  while (WJ.length) {
    let BM = WJ.pop();
    Object.setPrototypeOf(BM.Stub.prototype, BM.proto);
    Object.setPrototypeOf(BM.Stub, BM.ctor);
    BM.Stub.kinds = BM.kinds;
  }
}
WU(WT, "downgradeStubs");
var Wl = {
  obj_plat_floortex_FLOOR_AlignBottom1TILE: [
    "spr_floortex_TILES_AlignBottom1TILE",
    160,
    160,
    0,
    120,
  ],
  obj_solidblocksized: ["spr_block_sized"],
  obj_solidblockDark: ["spr_block_sized"],
  obj_castlereflect: ["spr_swordarea"],
  obj_custom_interactable_solid: ["spr_whitepixel"],
};
function Wd(Bn) {
  let BX = Wl[Bn];
  if (!BX) {
    return null;
  }
  let [BM, Bz, k0, k1, k2] = BX;
  if (!Pd[BM] && Bz) {
    Pd[BM] = {
      name: BM,
      w: Bz,
      h: k0,
      ox: k1,
      oy: k2,
      frames: 1,
      bb: [0, 0, Bz - 1, k0 - 1],
      precise: false,
      img: [
        {
          width: Bz,
          height: k0,
        },
      ],
    };
  }
  if (Pd[BM]) {
    return BM;
  } else {
    return null;
  }
}
WU(Wd, "eventlessSprite");
for (let [k6, k7] of [
  ["obj_plat_entity", "spr_plat_entity"],
  ["obj_plat_player", "spr_kris_plat_idle"],
  ["obj_mainchara_dash", null],
]) {
  let k8 = q[k6];
  if (typeof k8 != "function" || Object.prototype.hasOwnProperty.call(k8, "defaultMask")) {
    continue;
  }
  let k9 = k7 || k8.defaultSprite;
  if (k9) {
    k8.defaultMask = k9;
  }
}
if (C && !Object.prototype.hasOwnProperty.call(C, "defaultMask")) {
  C.defaultMask = undefined;
}
var We = new Map();
var Wi = WU((Bn) => {
  if (Bn === "obj_mainchara") {
    return Py;
  }
  let BX = q[Bn] || PB[Bn] || PU[Bn];
  if (BX) {
    return BX;
  }
  let BM = (Y || {})[Bn];
  if (!BM) {
    return null;
  }
  if (!We.has(Bn)) {
    let Bz = q[BM] || PB[BM] || PU[BM];
    if (!Bz) {
      return null;
    }
    let k0 = {
      [Bn]: class extends Bz {},
    }[Bn];
    k0.kinds = W3(Bn, Bz);
    let k1 = Wd(Bn);
    if (k1) {
      k0.defaultSprite = k1;
    }
    We.set(Bn, k0);
  }
  return We.get(Bn);
}, "clsFor");
var Wn = new Set([
  "obj_darkcontroller",
  "obj_caterpillarchara",
  "obj_markerAny",
  "obj_doorAny",
  "obj_solidblockDark",
]);
function WX(Bn) {
  let BX = Pd.spr_krisd_dark;
  Bn.sprite_index = "spr_krisd_dark";
  Bn.initwd = BX ? BX.w * Math.abs(Bn.image_xscale || 2) : 38;
  Bn.initht = BX ? BX.h * Math.abs(Bn.image_yscale || 2) : 76;
  Bn.mywidth = Bn.initwd;
  Bn.myheight = Bn.initht;
  Bn.nudgex = 0;
  Bn.nudgey = 0;
  Bn.nudgelerp = 0.1;
  Bn.cutscene = 0;
  Bn.facing = 0;
  Bn.fun = 0;
  Bn.press_l = 0;
  Bn.press_r = 0;
  Bn.press_u = 0;
  Bn.press_d = 0;
  Bn.dsprite = "spr_krisd_dark";
  Bn.rsprite = "spr_krisr_dark";
  Bn.usprite = "spr_krisu_dark";
  Bn.lsprite = "spr_krisl_dark";
  Bn.swordfacing = 1;
  Bn.swordsprite = Bn.rsprite;
  Bn.set_facing = function () {
    let BM = PH.facing;
    if (BM === 0) {
      this.sprite_index = this.dsprite;
    }
    if (BM === 1) {
      this.sprite_index = this.rsprite;
    }
    if (BM === 2) {
      this.sprite_index = this.usprite;
    }
    if (BM === 3) {
      this.sprite_index = this.lsprite;
    }
  };
}
WU(WX, "standInMainchara");
function WM(Bn) {
  if (!Bn.destroyed) {
    if (typeof Bn.roomEnd == "function") {
      try {
        Bn.roomEnd();
      } catch (BX) {
        console.warn("roomEnd", Bn.constructor.name, BX);
      }
    }
    Bn.destroyed = true;
    if (typeof Bn.cleanUp == "function") {
      try {
        Bn.cleanUp();
      } catch (BM) {
        console.warn("cleanUp", Bn.constructor.name, BM);
      }
    }
    WP.remove(Bn);
  }
}
WU(WM, "roomEndRemove");
function Wz() {
  WP.view.x = 0;
  WP.view.y = 0;
  WP.view.live = false;
  WP.view.target = null;
  WP.view.follow = null;
  WP.room.w = 640;
  WP.room.h = 480;
  Pc(640, 480);
  PO(null);
  if (PJ.impl && PJ.impl.__c5) {
    PJ.impl = null;
  }
  WT();
  Wk(null);
}
WU(Wz, "resetRoomState");
var B0 = class kP extends W2 {
  create() {
    this.visible = false;
    this.persistent = true;
    this.depth = -1000000000;
    this.pending = null;
    this.roomName = null;
    this.layers = [];
    this.viewx = 0;
    this.viewy = 0;
    this.roomw = 640;
    this.roomh = 480;
    this.stage = "battle";
    this.stageTimer = 0;
    this.rooms = [];
    this.impl = B2(this);
    this.border = [160, 240];
    this.follow = () => {
      let Bn = WP.view.target;
      if (typeof Bn == "number") {
        Bn = WF(Bn);
      }
      if (!Bn || typeof Bn != "object" || Bn.destroyed) {
        return;
      }
      let BX = 640;
      let BM = 480;
      let [Bz, k0] = this.border;
      let k1 = WP.view.x;
      let k2 = WP.view.y;
      if (Bn.x - k1 < Bz) {
        k1 = Bn.x - Bz;
      } else if (k1 + BX - Bn.x < Bz) {
        k1 = Bn.x + Bz - BX;
      }
      if (Bn.y - k2 < k0) {
        k2 = Bn.y - k0;
      } else if (k2 + BM - Bn.y < k0) {
        k2 = Bn.y + k0 - BM;
      }
      k1 = Math.max(0, Math.min(this.roomw - BX, k1));
      k2 = Math.max(0, Math.min(this.roomh - BM, k2));
      WP.view.x = k1;
      WP.view.y = k2;
      this.viewx = k1;
      this.viewy = k2;
    };
  }
  goto(Bn) {
    this.pending = String(Bn);
  }
  applyView() {
    WP.view.live = true;
    WP.view.x = this.viewx;
    WP.view.y = this.viewy;
    WP.room.w = this.roomw;
    WP.room.h = this.roomh;
    Pc(this.roomw, this.roomh);
    PO(this.roomName);
    PJ.impl = this.impl;
    WP.view.follow = this.follow;
    Wp();
  }
  beginStep() {
    if (this.pending) {
      let Bn = this.pending;
      this.pending = null;
      this.enterRoom(Bn);
    }
    if (this.roomName) {
      this.applyView();
    }
  }
  enterRoom(Bn) {
    if (Bn === Wx) {
      PH.fighting = 0;
      PH.battleover ||= "win";
      return;
    }
    let BX = g[Bn];
    if (!BX) {
      console.warn("ch5_climb: no room data for " + Bn);
      PH.battleover ||= "story";
      return;
    }
    for (let k2 of WP.list.slice()) {
      if (k2 !== this && !k2.destroyed && !k2.persistent) {
        WM(k2);
      }
    }
    this.roomName = Bn;
    this.rooms.push(Bn);
    let BM = {
      entrance_animation: 0,
      facing: 0,
      floortex_load_mode: 1,
      interact: 0,
      is_console: 0,
      lcharname: "Kris",
      marker_lerpX: -4,
      marker_lerpY: -4,
      msc: 0,
      parallax_focal_length: 160,
      pause_plat: false,
      plat_hspeed: -999,
      plat_vspeed: -999,
      start_in_dashmode: 0,
      start_in_platmode: 0,
      menuno: 0,
    };
    for (let [k3, k4] of Object.entries(BM)) {
      if (PH[k3] === undefined) {
        PH[k3] = k4;
      }
    }
    if (PH.flowery_battle_items === undefined) {
      PH.flowery_battle_items_used = false;
      PH.flowery_battle_items = Array.isArray(PH.item) ? PH.item.slice() : [];
    }
    PH.currentroom = Bn;
    this.roomw = BX.w;
    this.roomh = BX.h;
    let Bz = BX.views && BX.views[0];
    this.viewx = Bz ? Bz.x : 0;
    this.viewy = Bz ? Bz.y : 0;
    this.border = Bz ? [Bz.bx || 0, Bz.by || 0] : [0, 0];
    WP.view.target = null;
    if (Bn === Wg) {
      this.stage = "throw";
      this.stageTimer = 0;
    } else {
      this.stage = Bn;
      this.stageTimer = 0;
    }
    this.applyView();
    let k0 = new Set(WP.list);
    this.layers = L(BX, {
      hide: BX.layers.map((k5) => k5.name).filter((k5) => /DEBUG/.test(k5)),
    });
    let k1 = G(BX, (k5) => Wi(k5), {
      skip: Wn,
      host: this,
      onMade: (k5, kW) => {
        if (kW.obj === "obj_mainchara") {
          WX(k5);
        }
      },
    });
    l(new Set([this]));
    this.viewx = WP.view.x;
    this.viewy = WP.view.y;
  }
  step() {
    this.stageTimer++;
    if (this.stage === "throw" && !WP.exists("obj_battlecontroller")) {
      this.stage = "climb";
      this.stageTimer = 0;
    }
  }
  endStep() {
    if (this.roomName) {
      this.viewx = WP.view.x;
      this.viewy = WP.view.y;
    }
  }
  cleanUp() {
    Wz();
  }
};
WU(B0, "obj_c5_roomhost");
WA(B0, "kinds", new Set([...W3("obj_c5_roomhost", W2), "__roomhost"]));
var B1 = B0;
function B2(Bn) {
  let BX = X(() => Bn.layers);
  let BM = (k4) =>
    (typeof k4 == "string" ? Bn.layers.find((k5) => k5.name === k4) : Bn.layers[k4 - 1]) || null;
  let Bz = (k4) => {
    let k5 = BM(typeof k4 == "object" && k4 ? k4.bgLayer : k4);
    if (k5 && k5.inst && k5.inst.L && k5.inst.L.bg) {
      return k5;
    } else {
      return null;
    }
  };
  let k0 = (k4, k5, kW) => {
    let kB = Bz(k4);
    if (kB) {
      kB.inst.L = {
        ...kB.inst.L,
        bg: {
          ...kB.inst.L.bg,
          [k5]: kW,
        },
      };
    }
  };
  let k1 = (k4) => {
    let k5 = BM(k4);
    if (k5 && k5.L && k5.L.tileset) {
      return k5;
    } else {
      return null;
    }
  };
  let k2 = (k4, k5) => {
    if (k5 && !k4.__own) {
      k4.__own = true;
      let kW = {
        ...k4.L,
        data: k4.L.data.map((kB) => kB.slice()),
      };
      k4.L = kW;
      if (k4.inst) {
        k4.inst.L = kW;
      }
    }
    return k4.L.data;
  };
  let k3 = (k4, k5, kW) => {
    let kB = k4.L.tileset;
    return [Math.floor((k5 - k4.lx) / kB.tw), Math.floor((kW - k4.ly) / kB.th)];
  };
  return {
    __c5: true,
    ...BX,
    layer_create(k4, k5) {
      let kW = {
        name: k5 || "__layer" + (Bn.layers.length + 1),
        type: "Background",
        depth: Number(k4) || 0,
        visible: true,
        x: 0,
        y: 0,
        hs: 0,
        vs: 0,
        bg: {
          spr: null,
          visible: true,
          fore: false,
          htile: false,
          vtile: false,
          stretch: false,
          color: 16777215,
          alpha: 1,
          frame: 0,
          speed: 0,
          xs: 1,
          ys: 1,
        },
      };
      let kB = Wy(0, 0, J, {
        L: kW,
        room: {
          w: Bn.roomw,
          h: Bn.roomh,
        },
        lx: 0,
        ly: 0,
        shown: false,
        alpha: 1,
      });
      kB.depth = kW.depth;
      Bn.layers.push({
        L: kW,
        name: kW.name,
        lx: 0,
        ly: 0,
        shown: false,
        depth: kW.depth,
        inst: kB,
      });
      return Bn.layers.length;
    },
    layer_background_create(k4, k5) {
      let kW = BM(k4);
      if (!kW || !kW.inst) {
        return -1;
      }
      let kB = typeof k5 == "number" ? Pl(k5) : k5;
      kW.inst.L = {
        ...kW.inst.L,
        bg: {
          ...kW.inst.L.bg,
          spr: kB || null,
        },
      };
      kW.L = kW.inst.L;
      kW.shown = true;
      kW.inst.shown = true;
      return {
        bgLayer: Bn.layers.indexOf(kW) + 1,
      };
    },
    layer_background_destroy(k4) {
      let k5 = Bz(k4);
      if (k5) {
        k5.shown = false;
        k5.inst.shown = false;
      }
    },
    layer_background_htiled: (k4, k5) => k0(k4, "htile", !!k5),
    layer_background_vtiled: (k4, k5) => k0(k4, "vtile", !!k5),
    layer_background_stretch: (k4, k5) => k0(k4, "stretch", !!k5),
    layer_background_speed: (k4, k5) => k0(k4, "speed", Number(k5) || 0),
    layer_background_index: (k4, k5) => k0(k4, "frame", Number(k5) || 0),
    layer_background_xscale: (k4, k5) => k0(k4, "xs", Number(k5)),
    layer_background_yscale: (k4, k5) => k0(k4, "ys", Number(k5)),
    layer_background_alpha: (k4, k5) => k0(k4, "alpha", Number(k5)),
    layer_background_blend: (k4, k5) => k0(k4, "color", k5),
    layer_get_all_elements(k4) {
      let k5 = BM(k4);
      if (!k5) {
        return [];
      }
      let kW = Bn.layers.indexOf(k5) + 1;
      if (k5.L && k5.L.tileset) {
        return [kW];
      } else if (k5.inst && k5.inst.L && k5.inst.L.bg) {
        return [
          {
            bgLayer: kW,
          },
        ];
      } else {
        return [];
      }
    },
    layer_get_element_type: (k4) =>
      k4 && typeof k4 == "object" && k4.bgLayer ? 1 : typeof k4 == "number" && k1(k4) ? 5 : -1,
    tilemap_get_width: (k4) => {
      let k5 = k1(k4);
      if (k5) {
        return k5.L.tilesX;
      } else {
        return 0;
      }
    },
    tilemap_get_height: (k4) => {
      let k5 = k1(k4);
      if (k5) {
        return k5.L.tilesY;
      } else {
        return 0;
      }
    },
    tilemap_get_tile_width: (k4) => {
      let k5 = k1(k4);
      if (k5) {
        return k5.L.tileset.tw;
      } else {
        return 0;
      }
    },
    tilemap_get_tileset: (k4) => {
      let k5 = k1(k4);
      if (k5) {
        return k5.L.tileset.bg;
      } else {
        return -1;
      }
    },
    tilemap_get: (k4, k5, kW) => {
      let kB = k1(k4);
      return (kB && (k2(kB)[kW] || [])[k5]) || 0;
    },
    tilemap_set: (k4, k5, kW, kB) => {
      let kk = k1(k4);
      if (!kk || !Number.isFinite(k5)) {
        return 0;
      }
      let kF = k2(kk, true);
      if (kF[kB] && kW >= 0 && kW < kF[kB].length) {
        kF[kB][kW] = k5 >>> 0;
        return 1;
      } else {
        return 0;
      }
    },
    tilemap_get_at_pixel: (k4, k5, kW) => {
      let kB = k1(k4);
      if (!kB) {
        return 0;
      }
      let [kk, kF] = k3(kB, k5, kW);
      return (k2(kB)[kF] || [])[kk] || 0;
    },
    tilemap_set_at_pixel: (k4, k5, kW, kB) => {
      let kk = k1(k4);
      if (!kk || !Number.isFinite(k5)) {
        return 0;
      }
      let [kF, kS] = k3(kk, kW, kB);
      let ko = k2(kk, true);
      if (ko[kS] && kF >= 0 && kF < ko[kS].length) {
        ko[kS][kF] = k5 >>> 0;
        return 1;
      } else {
        return 0;
      }
    },
    tilemap_get_cell_x_at_pixel: (k4, k5, kW) => {
      let kB = k1(k4);
      if (kB) {
        return k3(kB, k5, kW)[0];
      } else {
        return -1;
      }
    },
    tilemap_get_cell_y_at_pixel: (k4, k5, kW) => {
      let kB = k1(k4);
      if (kB) {
        return k3(kB, k5, kW)[1];
      } else {
        return -1;
      }
    },
    draw_tile(k4, k5, kW, kB, kk, kF) {
      let kS = Bn.layers.find((kC) => kC.L && kC.L.tileset && kC.L.tileset.bg === k5);
      if (!kS || !k4) {
        return;
      }
      let ko = kS.L.tileset;
      let kb = (kW >>> 0) & 524287;
      if (!kb) {
        return;
      }
      let ky = (kb % ko.cols) * (ko.tw + ko.bx * 2) + ko.bx;
      let kU = Math.floor(kb / ko.cols) * (ko.th + ko.by * 2) + ko.by;
      let kA = (kW >>> 28) & 1;
      let kf = (kW >>> 29) & 1;
      k4.draw_sprite_part_ext(
        k5,
        0,
        ky,
        kU,
        ko.tw,
        ko.th,
        kk + (kA ? ko.tw : 0),
        kF + (kf ? ko.th : 0),
        kA ? -1 : 1,
        kf ? -1 : 1,
        16777215,
        1,
      );
    },
    set_border(k4, k5) {
      Bn.border = [Number(k4) || 0, Number(k5) || 0];
    },
    room_goto(k4) {
      let k5 = String(k4);
      if (k5 === "room_gameover") {
        PH.battleover = "lose";
        return;
      }
      Bn.goto(k5);
    },
    room_restart() {
      if (Bn.roomName) {
        Bn.goto(Bn.roomName);
      }
    },
  };
}
WU(B2, "makeImpl");
var B3 = {
  room_goto(Bn) {
    let BX = String(Bn);
    if (BX === "room_gameover") {
      PH.battleover = "lose";
      return;
    }
    if (BX !== Wg) {
      return;
    }
    (WP.first("obj_c5_roomhost") || Wy(0, 0, B1)).goto(BX);
  },
};
{
  let kN = Wm.prototype.step;
  if (typeof kN != "function") {
    throw new Error("ch5_climb: obj_flowery_enemy has no step() to wrap");
  }
  Wm.prototype.step = function () {
    if (WP.view.live && !WP.exists("__roomhost")) {
      Wz();
    }
    let Bn = PJ.impl;
    if (!WP.exists("__roomhost")) {
      PJ.impl = B3;
    }
    try {
      kN.call(this);
    } finally {
      if (!WP.exists("__roomhost")) {
        PJ.impl = Bn;
      }
    }
  };
  Wm.prototype.step.inner = kN;
}
{
  let kj = Wm.prototype.create;
  Wm.prototype.create = function (...Bn) {
    for (let BX = 670; BX <= 674; BX++) {
      PH.flag[BX] ||= 1;
    }
    return kj.apply(this, Bn);
  };
  Wm.prototype.create.inner = kj;
}
Wo(
  {
    228: "snd_flowery_voiceclip_yes",
    613: "snd_flowery_voiceclip_last_jarona",
    659: "snd_flowery_voiceclip_omega_flowery",
    752: "snd_flowery_voiceclip_jarona3",
  },
  5,
);
PM(() => {
  if (WP.view.live || WL) {
    Wz();
  }
});
{
  let kQ = C;
  let kE = kQ && kQ.prototype.draw;
  let kh = WU(
    (Bn) =>
      Bn === 16777215 ||
      (typeof Bn == "string" && /^(#?f{3}(f{3})?|rgb\(255,\s*255,\s*255\))$/i.test(Bn)),
    "white",
  );
  let kI = WU((Bn) => {
    let BX = (BM) => {
      let Bz = Math.abs(((Bn + BM) % 1) * 6 - 3);
      return Math.round(Math.min(1, Math.max(0, Math.min(1, Bz - 1)) * 3.7) * 255);
    };
    return "rgb(" + BX(1) + "," + BX(2 / 3) + "," + BX(1 / 3) + ")";
  }, "hsv");
  if (typeof kE == "function") {
    kQ.prototype.draw = function (Bn) {
      let BX = PX;
      if (!BX || !BX.ctx || typeof BX.draw_sprite_ext != "function") {
        return kE.call(this, Bn);
      }
      let BM = Object.prototype.hasOwnProperty.call(BX, "draw_sprite_ext")
        ? BX.draw_sprite_ext
        : null;
      let Bz = BX.draw_sprite_ext;
      let k0 = (WP.frame || 0) * (1000 / 30) * 0.07;
      BX.draw_sprite_ext = function (k1, k2, k3, k4, k5, kW, kB, kk, kF) {
        if (this.ctx && this.ctx.globalCompositeOperation === "lighter" && kh(kk)) {
          let kS = (0.5 + (((k0 * 0.033 + (k3 + k4) * 0.01) * 0.5) % 1)) % 1;
          return Bz.call(
            this,
            k1,
            k2,
            k3,
            k4,
            k5,
            kW,
            kB,
            kI(kS),
            (kF === undefined ? 1 : kF) * 0.25,
          );
        }
        return Bz.apply(this, arguments);
      };
      try {
        return kE.call(this, Bn);
      } finally {
        if (BM) {
          BX.draw_sprite_ext = BM;
        } else {
          delete BX.draw_sprite_ext;
        }
      }
    };
    kQ.prototype.draw.inner = kE;
  }
}
{
  let kt = P7;
  let kZ = kt && kt.prototype.draw;
  let kc = 20;
  let kw = WU((Bn) => Bn - Math.floor(Bn), "mod1");
  let kR = WU((Bn, BX) => {
    let BM = document.createElement("canvas");
    BM.width = Bn;
    BM.height = BX;
    let Bz = BM.getContext("2d");
    if (Bz) {
      Bz.imageSmoothingEnabled = false;
    }
    return BM;
  }, "canvas");
  let kY = WU((Bn) => {
    let BX = typeof Bn == "string" && Bn.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (BX) {
      return [Number(BX[1]), Number(BX[2]), Number(BX[3])];
    } else {
      return [PY(Bn), Pv(Bn), Pq(Bn)];
    }
  }, "rgb");
  let kO = [3, 7, 11, 15, 19];
  let kv = WU(() => {
    let Bn = Pd.spr_towery_vines_depth;
    let BX = Pd.spr_towery_vines;
    if (!Bn || !BX || !Bn.img || !BX.img || !Bn.img[0]) {
      return null;
    }
    let BM = [
      [Bn, 0],
      [BX, 1],
      [BX, 2],
      [BX, 3],
    ].map(([kb, ky]) => [kb, kb.img[Math.min(ky, kb.frames - 1)]]);
    if (BM.some(([, kb]) => !kb || !kb.width)) {
      return null;
    }
    let Bz = BM.reduce((kb, [, ky]) => kb + ky.width, 0);
    let k0 = Math.max(...BM.map(([, kb]) => kb.height));
    let k1 = document.createElement("canvas");
    k1.width = Bz;
    k1.height = k0;
    let k2 = k1.getContext("2d", {
      willReadFrequently: true,
    });
    let k3 = 0;
    let k4 = BM.map(([, kb]) => {
      k2.drawImage(kb, k3, 0);
      k3 += kb.width;
      return k3 - kb.width;
    });
    let k5 = new Uint32Array(k2.getImageData(0, 0, Bz, k0).data.buffer);
    let kW = (kb) => {
      let [ky, kU] = BM[kb];
      let kA = k4[kb];
      let kf = ky.w;
      let kC = ky.h;
      if (kU.width !== kf || kU.height !== kC) {
        let kV = document.createElement("canvas");
        kV.width = 360;
        kV.height = 360;
        let kD = kV.getContext("2d", {
          willReadFrequently: true,
        });
        for (let kH = 0; kH < 360; kH += kC) {
          for (let kT = 0; kT < 360; kT += kf) {
            kD.drawImage(kU, kT, kH);
          }
        }
        return kD.getImageData(0, 0, 360, 360);
      }
      let kK = new ImageData(360, 360);
      let kG = new Uint32Array(kK.data.buffer);
      for (let kl = 0; kl < 360; kl++) {
        let kd = (kl % kC) * Bz + kA;
        for (let ke = 0; ke < 360; ke++) {
          kG[kl * 360 + ke] = k5[kd + (ke % kf)];
        }
      }
      return kK;
    };
    let kB = kW(0).data;
    let kk = [153 / 255, 187 / 255, 153 / 255];
    let kF = [];
    let kS = kO.map((kb) => 1 - (kb - 1) * (1 / 20));
    let ko = kO.map(() => new ImageData(360, 360).data);
    for (let kb = 0; kb < kB.length; kb += 4) {
      let ky = kB[kb + 3] / 255;
      let kU = kB[kb];
      let kA = kB[kb + 1];
      let kf = kB[kb + 2];
      if (
        !(ky < kS[kS.length - 1]) &&
        kU + kA + kf !== 0 &&
        !(Math.min(1, Math.ceil(ky - 0.01)) <= 0)
      ) {
        for (let kC = 0; kC < kS.length; kC++) {
          if (ky < kS[kC]) {
            continue;
          }
          let kK = ko[kC];
          kK[kb] = kU * kk[0];
          kK[kb + 1] = kA * kk[1];
          kK[kb + 2] = kf * kk[2];
          kK[kb + 3] = 255;
        }
      }
    }
    kO.forEach((kG, kV) => {
      let kD = kR(360, 360);
      kD.getContext("2d").putImageData(new ImageData(ko[kV], 360, 360), 0, 0);
      kF.push({
        L: kD,
        i: kG - 1.5,
      });
    });
    for (let kG = 1; kG <= 3; kG++) {
      let kV = kW(kG);
      let kD = kV.data;
      for (let kT = 0; kT < kD.length; kT += 4) {
        kD[kT] *= kk[0];
        kD[kT + 1] *= kk[1];
        kD[kT + 2] *= kk[2];
      }
      let kH = kR(360, 360);
      kH.getContext("2d").putImageData(kV, 0, 0);
      kF.push({
        L: kH,
        i: 19 + kG,
      });
    }
    return kF;
  }, "buildLayers");
  let kq = WU((Bn, BX) => {
    if (!Bn.groupsBack) {
      Bn.groupsBack = Bn.layers.map(({ i: Bz }) => ({
        cv: kR(360, 720),
        i: Bz,
      }));
      Bn.groupsFront = Bn.groupsBack.slice().reverse();
      Bn.tint = kR(360, 360);
    }
    let BM = Bn.tint.getContext("2d");
    Bn.layers.forEach(({ L: Bz }, k0) => {
      BM.globalCompositeOperation = "source-over";
      BM.clearRect(0, 0, 360, 360);
      BM.drawImage(Bz, 0, 0);
      BM.globalCompositeOperation = "multiply";
      BM.fillStyle = "rgb(" + BX + ")";
      BM.fillRect(0, 0, 360, 360);
      BM.globalCompositeOperation = "destination-in";
      BM.drawImage(Bz, 0, 0);
      let k1 = Bn.groupsBack[k0].cv.getContext("2d");
      k1.setTransform(1, 0, 0, 1, 0, 0);
      k1.globalAlpha = 1;
      k1.globalCompositeOperation = "source-over";
      k1.clearRect(0, 0, 360, 720);
      k1.drawImage(Bn.tint, 0, 0);
      k1.drawImage(Bn.tint, 0, 360);
    });
    Bn.tintKey = BX;
  }, "retint");
  let km = WU((Bn, BX) => {
    let BM = Bn.blend;
    let Bz = BM.join(",");
    if (Bn.shadeKey === Bz) {
      return;
    }
    let k0 = !Bn.shadeC;
    if (k0) {
      Bn.shadeC = kR(240, 1);
      Bn.shadeK = kR(240, 1);
    }
    let k1 = Bn.shadeC.getContext("2d");
    let k2 = Bn.shadeK.getContext("2d");
    k1.clearRect(0, 0, 240, 1);
    for (let k3 = 0; k3 < 240; k3++) {
      let k4 = (BX + ((k3 + 0.5) / 240) * 120) / 360;
      let k5 = Math.abs((k4 * 2 - 1) * 3);
      let kW = Math.floor((Math.pow(k5, 3) / 2) * 10) / 10;
      if (kW > 0) {
        k1.fillStyle = "rgba(" + BM[0] + "," + BM[1] + "," + BM[2] + "," + kW + ")";
        k1.fillRect(k3, 0, 1, 1);
      }
      if (k0) {
        let kB = Math.min(1, kW * 2 + (1 - kW * 2) * k5);
        if (kB < 1) {
          k2.fillStyle = "rgba(0,0,0," + (1 - kB) + ")";
          k2.fillRect(k3, 0, 1, 1);
        }
      }
    }
    Bn.shadeKey = Bz;
  }, "shade");
  let kg = WU((Bn, BX, BM, Bz, k0, k1, k2) => {
    let k3 = BX.getContext("2d");
    k3.setTransform(1, 0, 0, 1, 0, 0);
    k3.globalCompositeOperation = "source-over";
    k3.globalAlpha = 1;
    k3.clearRect(0, 0, 240, 720);
    let k4 = 120 + 1 / 120;
    let k5 = Math.round(kw(-Bz) * 360) % 360;
    let kW = k0 ? Bn.groupsFront : Bn.groupsBack;
    let kB = (Bn.xmap ||= new Array(kc + 1));
    for (let ko = 0; ko <= kc; ko++) {
      let kb = (k4 + (ko / kc) * 120) / 360;
      let ky = Math.max(-1, Math.min(1, (kb * 2 - 1) * 3));
      kB[ko] = Math.acos(-ky) / Math.PI / 2 - 0.5 + BM;
    }
    let kk = k5 + k1 / 2;
    let kF = (k2 - k1) / 2;
    let kS = k2 - k1;
    for (let { cv: kU, i: kA } of kW) {
      let kf = 2 - kA * 0.008333333333333333;
      let kC = 120 - kf * 60;
      let kK = kf * 120;
      for (let kG = 0; kG < kc; kG++) {
        let kV = kB[kG];
        let kD = kB[kG + 1];
        let kH = kC + (kG / kc) * kK;
        let kT = kC + ((kG + 1) / kc) * kK;
        let kl = Math.floor(kV);
        let kd = Math.floor(kD - 1e-9);
        if (kl === kd) {
          let ki = kV - kl;
          let kn = kD - kl;
          let kX = kT - kH;
          if (kX > 0) {
            k3.drawImage(kU, ki * 360, kk, Math.max(0.5, (kn - ki) * 360), kF, kH, k1, kX, kS);
          }
          continue;
        }
        let ke = kH + (kT - kH) * ((kl + 1 - kV) / (kD - kV));
        {
          let kM = kV - kl;
          let kz = ke - kH;
          if (kz > 0) {
            k3.drawImage(kU, kM * 360, kk, Math.max(0.5, (1 - kM) * 360), kF, kH, k1, kz, kS);
          }
        }
        {
          let a0 = kD - kd;
          let a1 = kT - ke;
          if (a1 > 0) {
            k3.drawImage(kU, 0, kk, Math.max(0.5, a0 * 360), kF, ke, k1, a1, kS);
          }
        }
      }
    }
    k3.globalCompositeOperation = "source-atop";
    km(Bn, k4);
    k3.imageSmoothingEnabled = false;
    k3.drawImage(Bn.shadeC, 0, 0, 240, 1, 0, k1, 240, kS);
    if (!k0) {
      k3.drawImage(Bn.shadeK, 0, 0, 240, 1, 0, k1, 240, kS);
    }
    k3.globalCompositeOperation = "source-over";
  }, "face");
  let kx = WU((Bn, BX, BM, Bz, k0) => {
    let k1 = BX.getContext("2d");
    k1.setTransform(1, 0, 0, 1, 0, 0);
    k1.globalCompositeOperation = "source-over";
    k1.clearRect(0, 0, 240, 720);
    k1.drawImage(Bn, 0, Bz, 240, k0 - Bz, 0, Bz, 240, k0 - Bz);
    k1.globalCompositeOperation = "source-in";
    k1.fillStyle = "rgb(" + BM[0] + "," + BM[1] + "," + BM[2] + ")";
    k1.fillRect(0, Bz, 240, k0 - Bz);
    k1.globalCompositeOperation = "source-over";
  }, "silhouette");
  let ku = WU((Bn, BX) => {
    let BM = 0;
    let Bz = 720;
    try {
      let k0 = Bn.getTransform();
      let k1 = Bn.canvas && Bn.canvas.height;
      if (k0 && !k0.b && !k0.c && k0.d > 0 && k1 > 0) {
        let k2 = (0 - k0.f) / k0.d;
        let k3 = (k1 - k0.f) / k0.d;
        BM = Math.max(0, Math.floor((k2 - BX - 16) / 2) * 2);
        Bz = Math.min(720, Math.ceil((k3 - BX + 16) / 2) * 2);
      }
    } catch {
      BM = 0;
      Bz = 720;
    }
    if (Bz > BM) {
      return [BM, Bz];
    } else {
      return null;
    }
  }, "band");
  let kJ = null;
  let kL = WU(() => {
    let Bn = Pd.spr_towery_vines_depth;
    let BX = Bn && Bn.img && Bn.img[0];
    if (kJ && kJ.src === BX) {
      return kJ;
    }
    let BM = null;
    try {
      BM = kv();
    } catch {
      BM = null;
    }
    if (BM) {
      kJ = {
        src: BX,
        layers: BM,
        tintKey: "",
        front: kR(240, 720),
        back: kR(240, 720),
        sf: kR(240, 720),
        sb: kR(240, 720),
      };
      return kJ;
    } else {
      return null;
    }
  }, "textures");
  let kp = WU((Bn, BX) => {
    let BM = kL();
    if (!BM) {
      Bn.__T2 = {
        failed: true,
      };
      return false;
    }
    Bn.__T2 = BM;
    let Bz = kY(Bn.brightness).join(",");
    if (BM.tintKey !== Bz) {
      kq(BM, Bz);
    }
    BM.blend = kY(Bn.towerCol);
    let k0 = Wb(Bn.fixed_position) ? 320 : Bn.x;
    let k1 = (WP.view.y || 0) - 120;
    let k2 = BX.ctx;
    let k3 = ku(k2, k1);
    if (!k3) {
      return true;
    }
    let [k4, k5] = k3;
    let kW = k5 - k4;
    let kB = Bn.rotation / 360;
    let kk = Bn.finalheight / 360 / 2;
    kg(BM, BM.back, kw(kB + 0.5), kk, false, k4, k5);
    kg(BM, BM.front, kB, kk, true, k4, k5);
    let kF = kY(Bn.outlineCol);
    kx(BM.front, BM.sf, kF, k4, k5);
    kx(BM.back, BM.sb, kF, k4, k5);
    k2.save();
    k2.globalAlpha = 1;
    k2.drawImage(BM.sf, 0, k4, 240, kW, k0 - 120 - 2, k1 + k4, 240, kW);
    k2.drawImage(BM.sf, 0, k4, 240, kW, k0 - 120 + 2, k1 + k4, 240, kW);
    k2.save();
    k2.translate(k0 + 120 - 2, k1);
    k2.scale(-1, 1);
    k2.drawImage(BM.sb, 0, k4, 240, kW, 0, k4, 240, kW);
    k2.restore();
    k2.save();
    k2.translate(k0 + 120 + 2, k1);
    k2.scale(-1, 1);
    k2.drawImage(BM.sb, 0, k4, 240, kW, 0, k4, 240, kW);
    k2.restore();
    k2.save();
    k2.translate(k0 + 120, k1);
    k2.scale(-1, 1);
    k2.drawImage(BM.back, 0, k4, 240, kW, 0, k4, 240, kW);
    k2.restore();
    k2.drawImage(BM.front, 0, k4, 240, kW, k0 - 120, k1 + k4, 240, kW);
    k2.restore();
    return true;
  }, "draw");
  if (typeof kZ == "function" && typeof document !== "undefined") {
    kt.prototype.draw = function (Bn) {
      if (
        !Bn ||
        Bn.headless ||
        !Bn.ctx ||
        globalThis.__towerOrig ||
        this.__towerErr ||
        (this.__T2 && this.__T2.failed)
      ) {
        return kZ.call(this, Bn);
      }
      let BX = Object.create(Bn);
      BX.headless = true;
      let BM = kZ.call(this, BX);
      try {
        kp(this, Bn);
      } catch (Bz) {
        this.__towerErr = String((Bz && Bz.stack) || Bz);
      }
      return BM;
    };
    kt.prototype.draw.inner = kZ;
  }
}
globalThis.__c5climb = {
  obj_c5_roomhost: B1,
  RoomBuildErrors: u,
};
WN();
var B4 = PE.prototype.draw;
var B5 = WU((Bn) => Bn.snapback !== undefined && !Bn.snapback, "noSnap");
var B6 = WU(
  (Bn) =>
    Bn.killamount !== undefined ||
    Bn.killspeed !== undefined ||
    B5(Bn) ||
    Bn.reverse ||
    Bn.noextend,
  "uses",
);
PE.prototype.draw = function (Bn) {
  if (PH.chapter !== 5) {
    return B4.call(this, Bn);
  }
  let BX = null;
  if (this.delaytimer < this.delay) {
    WP.with("obj_dmgwriter", (k2) => {
      if (k2.noextend) {
        (BX ||= []).push([k2, k2.killtimer]);
      }
    });
  }
  if (!B6(this) && !BX) {
    return B4.call(this, Bn);
  }
  let BM = this.delaytimer + 1 >= this.delay;
  let Bz = this.y;
  let k0 = this.killactive;
  let k1 = B4.call(this, Bn);
  if (BX) {
    for (let [k2, k3] of BX) {
      k2.killtimer = k3;
    }
  }
  if (this.destroyed) {
    return k1;
  }
  if (BM) {
    let k4 = this.killamount === undefined ? 1 : this.killamount;
    if (k4 !== 1) {
      this.killtimer += k4 - 1;
      if (k0 === 0 && this.killactive === 1 && !(this.killtimer > 35)) {
        this.killactive = 0;
        this.kill = 0;
        this.y += 4;
      }
    }
    if (B5(this) && this.bounces >= 2 && k0 === 0 && this.killactive === 0) {
      this.y = Bz;
    }
    let k5 = this.killspeed === undefined ? 1 : this.killspeed;
    if (k5 !== 1 && this.killactive === 1) {
      this.kill += (k5 - 1) * 0.08;
    }
    if (this.kill > 1) {
      this.instance_destroy();
      return k1;
    }
  }
  if (this.reverse) {
    if (this.damage === 0.1) {
      this.killamount = 1;
    }
    let kW = this.damage;
    this.damage = kW < 0.1 ? Math.min(kW + 1, 0.1) : Math.max(kW - 1, 0.1);
    this.damagemessage = "+" + String(Math.round(this.damage)) + "%";
  }
  return k1;
};
PE.prototype.draw.inner = B4;
WN();
{
  let a2 = Ph.prototype.drawBody;
  Ph.prototype.drawBody = function (Bn, ...BX) {
    if (
      PH.chapter !== 5 ||
      this.state !== 8 ||
      PH.myfight !== 3 ||
      !PH.faceaction ||
      PH.faceaction[this.myself] !== 6
    ) {
      return a2.call(this, Bn, ...BX);
    }
    let BM = PH.faceaction;
    let Bz = this.myself;
    BM[Bz] = -6;
    try {
      return a2.call(this, Bn, ...BX);
    } finally {
      if (BM[Bz] === -6) {
        BM[Bz] = 6;
      }
    }
  };
  Ph.prototype.drawBody.inner = a2;
}
Wo(
  {
    6: "snd_whack_absurdlyloud",
    370: "snd_punchheavythunder",
    390: "snd_chargeshot_charge",
    397: "snd_bounceflower_subtle",
    398: "snd_tensionhorn",
    536: "snd_select",
    613: "snd_flowery_voiceclip_last_jarona",
    659: "snd_flowery_voiceclip_omega_flowery",
    684: "snd_harp_strum",
  },
  5,
);
{
  let a3 = P6.prototype.step;
  P6.prototype.step = function () {
    let Bn = this.alarm;
    if (Bn && Bn[1] === 40) {
      Bn[1] = 0;
      try {
        return a3.call(this);
      } finally {
        Bn[1] = 40;
      }
    }
    return a3.call(this);
  };
  P6.prototype.step.inner = a3;
}
WN();
var B7 = {
  1: "snd_mercyadd",
  12: "snd_flowery_voiceclip_jarona1",
  40: "snd_ja_kidding",
  68: "snd_flowery_voiceclip_jarona4",
  71: "snd_pink_mew",
  124: "snd_forthefans",
  135: "snd_flowery_voiceclip_take_that",
  150: "snd_flowery_voiceclip_jarona2",
  228: "snd_flowery_voiceclip_yes",
  244: "snd_flowery_voiceclip_wow",
  260: "snd_jarona_orange2",
  317: "snd_flowery_voiceclip_hereicomesanfrandisco_strong",
  419: "snd_swing",
  451: "snd_swallow",
  496: "snd_scytheburst",
  613: "snd_flowery_voiceclip_last_jarona",
  659: "snd_flowery_voiceclip_omega_flowery",
  691: "snd_flowery_voiceclip_hoo",
  703: "snd_jarona_orange1",
  722: "snd_pink_throw",
  740: "snd_flowery_voiceclip_prism_blow",
  752: "snd_flowery_voiceclip_jarona3",
};
var B8 = {
  snd_flowery_voiceclip_flowery2: "snd_flowery_voiceclip_flowery2",
  snd_flowery_voiceclip_huh: "snd_flowery_voiceclip_huh",
  snd_flowery_voiceclip_itsmeflowery: "snd_flowery_voiceclip_itsmeflowery",
  snd_flowery_voiceclip_jarona1: "snd_flowery_voiceclip_jarona1",
  snd_flowery_voiceclip_jarona2: "snd_flowery_voiceclip_jarona2",
  snd_flowery_voiceclip_jarona3: "snd_flowery_voiceclip_jarona3",
  snd_flowery_voiceclip_jarona4: "snd_flowery_voiceclip_jarona4",
  snd_flowery_voiceclip_leaf_it_to_me: "snd_flowery_voiceclip_leaf_it_to_me",
  snd_flowery_voiceclip_yes: "snd_flowery_voiceclip_yes",
  snd_forthefans: "snd_forthefans",
  snd_ja_kidding: "snd_ja_kidding",
  snd_jarona_orange1: "snd_jarona_orange1",
  snd_jarona_orange2: "snd_jarona_orange2",
};
Wo(B7, 5);
WN();
var {
  GID: B9,
  FIRST: BP,
  SETALL: BW,
  array_length: BB,
  random_range: Bk,
  irandom_range: BF,
  is_method: BS,
  objectByIndex: Bo,
} = PI;
var Bb = {};
var By = WU((Bn) => Bb[Bn] || P2[Bn] || Pb[Bn] || PI[Bn] || (() => {}), "SCRIPT");
var BU = WU((Bn, BX) => {
  if (typeof Bn == "number") {
    Bn = Bo(Bn);
  }
  if (typeof Bn == "function" || typeof Bn == "string") {
    return WP.with(Bn, BX);
  }
  if (Bn && typeof Bn == "object" && !Bn.destroyed) {
    BX(Bn);
  }
}, "withInst");
var BA = Pp;
var Bf = PK;
var BC = P3;
function BN(Bn = 0, BX = 0, BM = 0, Bz = 0, k0 = -1) {
  let k1 = By("camerax").call(this);
  let k2 = By("cameray").call(this);
  this.battlewriter = By("instance_create").call(this, k1 + 30 + BM, k2 + 376 + Bz, BA);
  this.myface = By("instance_create").call(this, k1 + 26 + Bn, k2 + 380 + BX, Bf);
  BU(this.battlewriter, (k3) => {
    k3.dialoguer = 1;
    k3.facer = 1;
    if (PH.fc === 0 && k3.originalcharline === 33) {
      k3.charline = 26;
    }
    if (k0 !== -1) {
      k3.charline = k0;
    }
  });
}
WU(BN, "b_make");
function Bj() {
  return PT(BA);
}
WU(Bj, "b_ex");
function BQ() {
  if (PH.flag[1391] === 1) {
    return 0;
  } else {
    return 1;
  }
}
WU(BQ, "flvoice");
function BE(Bn = this, BX = 0) {
  let BM = 1238;
  if (Wb(BX)) {
    BM = 1496;
  }
  let Bz = By("instance_create").call(this, Bn.x, Bn.y, BM);
  Bz.sprite_index = Bn.sprite_index;
  Bz.image_alpha = Bn.image_alpha;
  Bz.image_angle = Bn.image_angle;
  Bz.image_blend = Bn.image_blend;
  Bz.image_index = Bn.image_index;
  Bz.image_speed = Bn.image_speed;
  Bz.image_xscale = Bn.image_xscale;
  Bz.image_yscale = Bn.image_yscale;
  Bz.mask_index = Bn.mask_index;
  Bz.depth = Bn.depth;
  return Bz;
}
WU(BE, "scr_marker_frominstance");
Object.assign(Bb, {
  b_make: BN,
  b_ex: Bj,
  flvoice: BQ,
  scr_marker_frominstance: BE,
});
var Bh = class a4 extends PA {
  create() {
    this.con = 0;
    this.bcon = 1;
    this.btime = 0;
    this.timer = 0;
    this.btimer = 0;
    this.leftfl = -4;
    this.rightfl = -4;
    this.grumbleflower = -4;
    this.grumble = -4;
    this.stayinteract = 0;
    this.flowerybattle = By("scr_marker_ext").call(
      this,
      By("camerax").call(this) + 80,
      By("cameray").call(this) + 210,
      "spr_flowery_walk_right_jacket",
      2,
      2,
      undefined,
      undefined,
      undefined,
      160,
    );
  }
  step() {
    let Bn = By("camerax").call(this);
    let BX = By("cameray").call(this);
    if (this.bcon === 1) {
      let BM = {
        x: By("camerax").call(this) + 80,
        y: By("cameray").call(this) + 180,
      };
      let Bz = 0;
      this.btime++;
      if (this.btime === 20) {
        let k0 = 11;
        BU(this.flowerybattle, (k1) => {
          k1.sprite_index = "spr_flowery_walk_downright_jacket";
          By("scr_lerpvar").call(k1, "x", k1.x, BM.x, k0);
          By("scr_lerpvar").call(k1, "y", k1.y, BM.y, k0);
        });
        this.bcon = 2;
        By("scr_delay_var").call(this, "bcon", 3, k0 + 1);
      }
    }
    if (this.bcon === 2) {
      BU(this.flowerybattle, (k1) => {
        BU(By("scr_afterimage").call(k1), (k2) => {
          k2.image_alpha = 0.4;
        });
      });
    }
    if (this.bcon === 3.1) {
      this.stayinteract = 1;
      By("scr_speaker").call(this, "no_name");
      (Array.isArray(PH.msg) ? PH.msg : (PH.msg = []))[0] = "* Some enemies showed up!/";
      By("scr_anyface_next").call(this, "flowery", "0");
      By("msgnext").call(this, "\\E0\\Vl* Heh^1, Leaf it to me!/%");
      By("b_make").call(this, 10, -6);
      this.bcon = 3.2;
      this.timer = 0;
    }
    if (this.bcon === 3.2 && !Wb(By("b_ex").call(this))) {
      this.timer++;
      if (this.timer === 6) {
        if (Wb(By("flvoice").call(this))) {
          By("snd_play_flowery").call(this, 317);
        }
        this.flowerybattle.sprite_index = "spr_flowery_pose";
        BU(this.flowerybattle, (k2) => {
          By("scr_flip").call(k2, "h");
        });
      }
      let k1 = 90;
      if (Wb(By("button3_h").call(this)) || !Wb(By("flvoice").call(this))) {
        k1 = 6;
      }
      if (this.timer >= k1) {
        this.timer = 0;
        this.bcon = 3.25;
      }
    }
    if (this.bcon === 3.25) {
      this.timer++;
      if (this.timer === 1) {
        BU(this.flowerybattle, (k2) => {
          By("scr_flip").call(k2, "h");
          k2.sprite_index = "spr_flowery_shrug_spin";
          k2.image_speed = 0.5;
          k2.image_index = 999;
          k2.depth = 15;
          By("scr_lerpvar").call(k2, "x", k2.x, By("camerax").call(k2) + 360, 15);
          k2.vspeed = -18;
          k2.gravity = 2;
        });
      }
      if (B9(this.timer) > 1) {
        let k2 = By("flrainbow").call(this);
        let k3 = k2[By("scr_wrap").call(this, this.timer, 0, BB(k2) - 1)];
        BU(this.flowerybattle, (k4) => {
          BU(By("scr_afterimage_fog").call(k4, undefined, k3, 8), (k5) => {
            k5.depth = k4.depth + 40 - WP.first("obj_dw_garden_enemyrush").timer;
            k5.image_speed = 0;
          });
        });
      }
      if (this.timer === 16) {
        BU(this.flowerybattle, (k4) => {
          k4.sprite_index = "spr_flowery_walk_downright";
          k4.image_index = 0;
          k4.y = By("cameray").call(k4) + 164;
          k4.gravity = 0;
          k4.vspeed = 0;
          k4.image_speed = 0;
          By("snd_play").call(k4, "snd_noise");
          this.bcon = 3.29;
          this.timer = 0;
        });
      }
    }
    if (this.bcon === 3.29) {
      this.timer++;
      if (this.timer === 15) {
        this.timer = 0;
        this.bcon = 3.3;
      }
    }
    if (this.bcon === 3.3) {
      this.timer++;
      let k4 = this.flowerybattle;
      if (this.timer === 5) {
        k4.sprite_index = "spr_flowery_grabfloradins";
        k4.image_index = 0;
        k4.image_speed = 0;
        WP.with("obj_floradinn_enemy", (k5) => {
          if (k5.x < Bn + 386) {
            this.leftfl = By("scr_marker_frominstance").call(k5);
          } else {
            this.rightfl = By("scr_marker_frominstance").call(k5);
          }
          k5.visible = 0;
        });
        this.leftfl.image_blend = Pz.white;
        this.rightfl.image_blend = Pz.white;
      }
      if (this.timer === 8) {
        k4.image_index = 1;
      }
      if (this.timer === 11) {
        By("scr_battle_sprite_set").call(this, "susie", "spr_susie_sheeh", 0, 0);
        WP.with("obj_herosusie", (k5) => {
          By("scr_shakeobj").call(k5);
        });
        k4.image_index = 2;
        By("snd_play").call(this, "snd_grab", 0.7, 1);
        this.rightfl.visible = 0;
      }
      if (this.timer === 14) {
        k4.image_index = 3;
      }
      if (this.timer === 17) {
        k4.image_index = 4;
      }
      if (this.timer === 20) {
        k4.image_index = 5;
        By("snd_play").call(this, "snd_grab", 0.7, 1.2);
        this.leftfl.visible = 0;
      }
      if (this.timer === 23) {
        k4.image_index = 5;
      }
      if (this.timer === 26) {
        k4.image_index = 6;
      }
      if (this.timer === 29) {
        By("snd_play").call(this, "snd_wing");
        k4.image_index = 7;
      }
      if (this.timer === 33) {
        k4.image_index = 8;
      }
      if (this.timer === 45) {
        By("snd_play").call(this, "snd_coaster_kiss");
        this.heart = By("scr_marker_ext").call(
          this,
          Bn + 386,
          BX + 102,
          "spr_kissheart",
          2,
          2,
          undefined,
          undefined,
          undefined,
          0,
        );
        BU(this.heart, (k5) => {
          k5.gravity = 0.5;
          k5.vspeed = -3;
          k5.hspeed = 2;
          By("scr_lerpvar").call(k5, "image_xscale", 2, 1, 12);
          By("scr_lerpvar").call(k5, "image_yscale", 2, 1, 12);
          By("scr_lerpvar").call(k5, "image_alpha", 4, 0, 9);
          By("scr_doom").call(k5, k5, 9);
        });
        k4.image_index = 9;
      }
      if (this.timer === 48) {
        k4.image_index = 10;
      }
      if (this.timer === 51) {
        k4.image_index = 11;
      }
      if (this.timer === 63) {
        k4.image_index = 12;
      }
      if (this.timer === 75) {
        k4.image_index = 13;
      }
      if (this.timer === 83) {
        By("snd_play").call(this, "snd_wing");
        By("snd_play").call(this, "snd_sparkle_gem");
        k4.image_index = 14;
        BU(this.leftfl, (k5) => {
          k5.image_speed = 0;
          k5.image_index = 0;
          k5.sprite_index = "spr_enemy_floradin_spared";
          By("scr_flip").call(k5, "h");
          k5.visible = 1;
          By("setxy").call(k5, Bn + 384, BX + 142 + 4);
          k5.depth = k4.depth - 10;
          k5.gravity = 0.5;
          k5.vspeed = -24;
        });
        BU(this.rightfl, (k5) => {
          k5.image_speed = 0;
          k5.image_index = 0;
          k5.sprite_index = "spr_enemy_floradin_spared";
          k5.visible = 1;
          By("setxy").call(k5, Bn + 398, BX + 142 + 4);
          k5.depth = k4.depth + 10;
          k5.gravity = 0.5;
          k5.vspeed = -24;
        });
        BU(k4, (k5) => {
          By("scr_delay_var").call(k5, "image_index", 15, 2);
        });
        BU(k4, (k5) => {
          By("scr_delay_var").call(k5, "image_index", 16, 4);
        });
        this.bcon = 3.4;
        this.timer = 0;
      }
    }
    if (this.bcon === 3.4) {
      this.timer++;
      if (this.timer % 2 === 0) {
        let k5 = [this.leftfl, this.rightfl];
        for (let kW = 0; kW < BB(k5); kW++) {
          BU(k5[kW], (kB) => {
            let kk = kB.x + 38 + Bk(-16, 16);
            if (kW === 0) {
              kk -= 76;
            }
            BU(
              By("scr_marker_ext").call(
                kB,
                kk,
                kB.y + 56 + Bk(-4, 6),
                "spr_shine_white",
                2,
                2,
                0.2,
                0,
                undefined,
                kB.depth + 1,
                undefined,
                15,
              ),
              (kF) => {
                kF.gravity = 0.5;
                By("scr_lerpvar").call(kF, "image_alpha", Bk(1, 2), 0, BF(15, 20));
              },
            );
          });
        }
      }
      if (this.timer === 30) {
        this.leftfl.gravity = 0;
        this.leftfl.vspeed = 0;
        this.rightfl.gravity = 0;
        this.rightfl.vspeed = 0;
        this.leftfl.visible = 0;
        this.rightfl.visible = 0;
        PH.typer = 96;
        (Array.isArray(PH.writersnd) ? PH.writersnd : (PH.writersnd = []))[0] =
          "snd_flowery_voiceclip_heh_it_s_my_jarona";
        (Array.isArray(PH.msg) ? PH.msg : (PH.msg = []))[0] =
          "\\E0\\VzHeh^1, How'd you&like my Jarona/%";
        By("scr_enemyblcon").call(this, this.flowerybattle.x - 40, this.flowerybattle.y + 32, 10);
        BU(this.flowerybattle, (kB) => {
          kB.x += 8;
          kB.y += 2;
          kB.sprite_index = "spr_flowery_pose_point_cooler";
        });
        By("snd_play").call(this, "snd_wing");
        this.timer = 0;
        this.bcon = 3.5;
      }
    }
    if (this.bcon === 3.5 && !Wb(PT(BC))) {
      By("safe_delete").call(this, this.leftfl);
      By("safe_delete").call(this, this.rightfl);
      this.bcon = 9.99;
    }
  }
  endStep() {
    if (B9(this.bcon) > 0) {
      WP.with("obj_marker", (Bn) => {
        if (
          Bn.sprite_index === "spr_ralseir" ||
          Bn.sprite_index === "spr_ralseil" ||
          Bn.sprite_index === "spr_ralseiu" ||
          Bn.sprite_index === "spr_ralseid"
        ) {
          Bn.visible = 0;
        }
      });
      WP.with("obj_afterimage", (Bn) => {
        if (
          Bn.sprite_index === "spr_ralseir" ||
          Bn.sprite_index === "spr_ralseil" ||
          Bn.sprite_index === "spr_ralseiu" ||
          Bn.sprite_index === "spr_ralseid"
        ) {
          Bn.visible = 0;
        }
      });
      WP.with("obj_heroralsei", (Bn) => {
        Bn.visible = 0;
      });
      WP.with("obj_caterpillarchara", (Bn) => {
        if (Bn.name === "ralsei") {
          Bn.visible = 0;
        }
      });
    }
    if (this.bcon === 3) {
      this.bcon = 3.01;
      this.btimer = 0;
    }
    if (this.bcon === 3.01) {
      PH.myfight = 1;
      PH.charturn = PN();
      this.btimer++;
      if (this.btimer === 15) {
        this.bcon = 3.1;
      }
    }
    if (this.bcon === 9.99) {
      WP.with("obj_battlecontroller", (Bn) => {
        Bn.skipvictory = 1;
      });
      By("safe_delete").call(this, this.grumbleflower);
      By("safe_delete").call(this, this.grumble);
      By("scr_wincombat").call(this);
      this.bcon = 10;
    }
  }
};
WU(Bh, "obj_dw_garden_enemyrush");
WA(Bh, "kinds", W3("obj_dw_garden_enemyrush", PA));
var BI = Bh;
function Bt() {
  this.mouthmove = 0;
  this.mouthtimer = 0;
  this.face_index = 0;
  this.image_speed = 0;
  this.nowface = PH.fc;
  this.facechange = 2;
  this.rate = 1;
  this.buffer = 4;
  this.f = 1;
  if (PH.darkzone === 1) {
    this.f = 2;
  }
  this.xoff = 0;
  this.yoff = 0;
  this.timer = 0;
  this.subtimer = 0;
  this.offset = 0;
  this.offset_x = 0;
  this.offset_y = 0;
  this.anim = 0;
  this.facecustom = -4;
  this.facecustomindex = 0;
  this.siner = 0;
  WP.with("obj_yellow_trial_manager", (Bn) => {
    this.depth = -500;
  });
  this.coloroverlay = -4;
}
WU(Bt, "face5_create");
function BZ() {
  this.buffer -= 1;
  if (B9(this.buffer) < 0 && this.mouthmove === 1 && this.mouthtimer === 0) {
    this.mouthtimer = 1;
    this.face_index = 1;
  }
  if (B9(this.mouthtimer) > 0) {
    this.mouthtimer += this.rate;
  }
  if (B9(this.mouthtimer) >= 1 && B9(this.mouthtimer) <= 5) {
    this.face_index = 1;
  } else {
    this.face_index = 0;
  }
  if (B9(this.mouthtimer) >= 9) {
    this.mouthtimer = 0;
    this.mouthmove = 0;
  }
}
WU(BZ, "face5_step");
function Bc(Bn) {
  let BX;
  if (this.image_alpha !== 0) {
    this.facechange -= 1;
    if (this.nowface !== PH.fc) {
      this.facechange = 3;
    }
    if (B9(this.facechange) <= 0) {
      if (
        PH.fc === 1 &&
        (PH.flag[29] === 0 &&
          B9(PH.chapter) <= 1 &&
          ((this.face = "spr_face_s0"),
          PH.fe === 1 && (this.face = "spr_face_s1"),
          PH.fe === 2 && (this.face = "spr_face_s2"),
          PH.fe === 3 && (this.face = "spr_face_s3"),
          PH.fe === 4 && (this.face = "spr_face_s4"),
          PH.fe === 5 && (this.face = "spr_face_s5"),
          PH.fe === 6 && (this.face = "spr_face_s6"),
          PH.fe === 7 && (this.face = "spr_face_s7"),
          PH.fe === 8 && (this.face = "spr_face_s8"),
          PH.fe === 9 && (this.face = "spr_face_s9"),
          PH.fe === 10 && (this.face = "spr_face_sA"),
          PH.fe === 11 && (this.face = "spr_face_sB"),
          PH.fe === 12 && (this.face = "spr_face_sC"),
          PH.fe === 13 && (this.face = "spr_face_sD"),
          Bn.draw_sprite_ext(
            this.face,
            this.face_index,
            this.x - 5,
            this.y,
            this.f,
            this.f,
            0,
            Pz.white,
            1,
          )),
        (PH.flag[29] !== 0 || B9(PH.chapter) > 1) &&
          ((this.face = "spr_face_susie_alt"),
          (this.face_index = PH.fe),
          PH.fe === 61 && ((this.face = "spr_face_placeholder"), (this.face_index = 0)),
          PH.chapter === 5 &&
            (PH.fe === 9999 &&
              ((this.face = "spr_face_single_susie_alt_ribboninhair"),
              (this.face_index = 0),
              Wb(sprite_exists(this.facecustom)) &&
                ((this.face = this.facecustom), (this.face_index = this.facecustomindex))),
            PH.fe === 9998 &&
              ((this.face = "spr_face_single_susie_alt_lips"), (this.face_index = 0)),
            PH.fe === 9997 &&
              ((this.face = "spr_face_single_susie_alt_bushes"),
              PH.lang === "ja" && (this.face = "spr_face_single_susie_alt_bushes_ja"),
              (this.face_index = 0))),
          Bn.draw_sprite_ext(
            this.face,
            this.face_index,
            this.x - 5,
            this.y,
            this.f,
            this.f,
            0,
            Pz.white,
            1,
          ),
          PH.chapter === 5))
      ) {
        let BM = 0;
        let Bz = 0;
        WP.with("obj_dw_garden_susiechase", (k0) => {
          Bz = k0.susieribbons;
        });
        WP.with("obj_dw_garden_ribbonchest", (k0) => {
          BM = k0.susieribbons;
        });
        if (Wb(BM)) {
          Bn.draw_sprite_ext(
            "spr_face_susie_ribbonoverlay",
            0,
            this.x - 29,
            this.y - 24,
            2,
            2,
            0,
            Pz.white,
            1,
          );
        }
        if (Wb(Bz)) {
          Bn.draw_sprite_ext(
            "spr_face_susie_spikeribbonoverlay",
            0,
            this.x - 29,
            this.y - 24,
            2,
            2,
            0,
            Pz.white,
            1,
          );
        }
      }
      if (PH.fc === 2) {
        this.face = "spr_face_r_dark";
        if (PH.flag[30] === 1) {
          this.face = "spr_face_r_hood";
        }
        if (PH.flag[30] === 2 || B9(PH.chapter) > 1) {
          this.face = "spr_face_r_nohat";
        }
        if (PH.chapter === 5 && By("scr_flag_get").call(this, 1311) === 1) {
          this.face = "spr_face_r_dark";
        }
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 15,
          this.y - 10,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 3) {
        this.face = "spr_face_n0";
        if (PH.fe === 1) {
          this.face = "spr_face_n1";
        }
        if (PH.fe === 2) {
          this.face = "spr_face_n2";
        }
        if (PH.fe === 3) {
          this.face = "spr_face_n3";
        }
        if (PH.fe === 4) {
          this.face = "spr_face_n4";
        }
        if (PH.fe === 5) {
          this.face = "spr_face_n5";
        }
        if (PH.fe === 6) {
          this.face = "spr_face_n6";
        }
        if (PH.fe === 7) {
          this.face = "spr_face_n7";
        }
        if (PH.fe === 8) {
          this.face = "spr_face_n8";
        }
        if (PH.fe === 9) {
          this.face = "spr_face_n9";
        }
        if (B9(PH.chapter) >= 2) {
          this.face = "spr_face_n_matome";
          if (PH.tempflag[63] === 1) {
            this.face = "spr_face_n_matome_extended";
          }
          this.face_index = PH.fe;
        }
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        let k0 = By("scr_flag_get").call(this, 1420) === 1 ? 1 : 0;
        if (Wb(k0)) {
          this.timer++;
          BX = this.x - 12;
          let k1 = this.y - 10;
          if (this.timer % 2 === 1) {
            this.offset_x = choose(-1, 0, 1);
            this.offset_y = choose(-1, 0, 1);
          }
          Bn.draw_sprite_ext(
            this.face,
            this.face_index,
            BX + this.offset_x,
            k1 + this.offset_y,
            this.f,
            this.f,
            0,
            Pz.white,
            1,
          );
        } else {
          Bn.draw_sprite_ext(
            this.face,
            this.face_index,
            this.x - 12,
            this.y - 10,
            this.f,
            this.f,
            0,
            Pz.white,
            1,
          );
        }
      }
      if (PH.fc === 4) {
        Bn.draw_sprite_ext(
          "spr_face_tbody",
          0,
          this.x - 7,
          this.y + 29,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
        this.face = "spr_face_t0";
        if (PH.fe === 1) {
          this.face = "spr_face_t1";
        }
        if (PH.fe === 2) {
          this.face = "spr_face_t2";
        }
        if (PH.fe === 3) {
          this.face = "spr_face_t3";
        }
        if (PH.fe === 4) {
          this.face = "spr_face_t4";
        }
        if (PH.fe === 5) {
          this.face = "spr_face_t5";
        }
        if (PH.fe === 6) {
          this.face = "spr_face_t6";
        }
        if (PH.fe === 7) {
          this.face = "spr_face_t7";
        }
        if (PH.fe === 8) {
          this.face = "spr_face_t8";
        }
        if (PH.fe === 9) {
          this.face = "spr_face_t9";
        }
        if (B9(PH.fe) >= 9) {
          this.face = "spr_face_toriel_matome_extended";
          this.face_index = PH.fe;
        }
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 5) {
        this.face = "spr_face_l0";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 15,
          this.y - 10,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 6) {
        this.face = "spr_face_sans0";
        if (PH.fe === 1) {
          this.face = "spr_face_sans1";
        }
        if (PH.fe === 2) {
          this.face = "spr_face_sans2";
        }
        if (PH.fe === 3) {
          this.face = "spr_face_sans3";
        }
        if (PH.fe === 4) {
          this.face = "spr_face_sans4";
        }
        if (PH.fe === 5) {
          this.face = "spr_face_sans5";
        }
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 9) {
        this.face = "spr_face_undyne";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 10,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 10) {
        this.face = "spr_face_asgore0";
        if (PH.fe === 1) {
          this.face = "spr_face_asgore1";
        }
        if (PH.fe === 2) {
          this.face = "spr_face_asgore2";
        }
        if (PH.fe === 3) {
          this.face = "spr_face_asgore3";
        }
        if (PH.fe === 4) {
          this.face = "spr_face_asgore4";
        }
        if (PH.fe === 5) {
          this.face = "spr_face_asgore5";
        }
        if (PH.fe === 6) {
          this.face = "spr_face_asgore6";
        }
        if (PH.fe === 7) {
          this.face = "spr_face_asgore7";
        }
        if (PH.fe === 8) {
          this.face = "spr_face_asgore8";
        }
        let k2 = PH.darkzone === 1 ? 1 : 0;
        if (Wb(k2)) {
          this.face = asset_get_index("spr_face_asgore" + String(PH.fe) + "_crown");
        }
        if (B9(PH.fe) >= 9) {
          this.face = Wb(k2) ? 2507 : 5767;
          this.face_index = PH.fe;
        }
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 10,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 11) {
        this.face = "spr_alphysface";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 10,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 12) {
        this.face = "spr_face_b0";
        if (PH.fe === 1) {
          this.face = "spr_face_b1";
        }
        if (PH.fe === 2) {
          this.face = "spr_face_b2";
        }
        if (PH.fe === 3) {
          this.face = "spr_face_b3";
        }
        if (PH.fe === 4) {
          this.face = "spr_face_b4";
        }
        if (PH.fe === 5) {
          this.face = "spr_face_b5";
        }
        if (PH.fe === 6) {
          this.face = "spr_face_b1";
        }
        if (PH.fe === 7) {
          this.face = "spr_face_b1";
        }
        if (PH.fe === 8) {
          this.face = "spr_face_b1";
        }
        if (PH.fe === 9) {
          this.face = "spr_face_b1";
        }
        if (PH.darkzone === 1) {
          this.face = "spr_face_berdly_dark";
          this.face_index = PH.fe;
        } else {
          this.face = "spr_face_berdly";
          this.face_index = PH.fe;
        }
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 10,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 13) {
        this.face = "spr_face_catti";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 10,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 14) {
        this.face = "spr_face_jock0";
        if (PH.fe === 1) {
          this.face = "spr_face_jock1";
        }
        if (PH.fe === 1) {
          this.face = "spr_face_jock2";
        }
        if (PH.fe === 1) {
          this.face = "spr_face_jock3";
        }
        if (PH.fe === 1) {
          this.face = "spr_face_jock4";
        }
        if (PH.fe === 1) {
          this.face = "spr_face_jock5";
        }
        if (PH.fe === 1) {
          this.face = "spr_face_jock6";
        }
        if (PH.fe === 1) {
          this.face = "spr_face_jock7";
        }
        if (PH.fe === 1) {
          this.face = "spr_face_jock8";
        }
        if (PH.fe === 1) {
          this.face = "spr_face_jock9";
        }
        if (PH.flag[1336] >= 2) {
          this.face = "spr_face_jock_beard";
        }
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 10,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 15) {
        this.face = "spr_face_rudy";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 12,
          this.y - 10,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 16) {
        this.face = "spr_face_catty";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 10,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
        let k3 = PH.fe === 11 ? 1 : 0;
        if (Wb(k3)) {
          this.timer++;
          this.anim += 0.1;
          BX = this.x - 10;
          let k4 = BX + this.offset;
          if (this.timer % 2 === 1) {
            this.offset = choose(-1, 0, 1);
          }
          Bn.draw_sprite_ext(
            "spr_face_catty_alt",
            this.anim,
            this.x - 10,
            this.y,
            this.f,
            this.f,
            0,
            Pz.white,
            1,
          );
          Bn.draw_sprite_ext(
            "spr_face_catty_hand_left",
            0,
            k4,
            this.y,
            this.f,
            this.f,
            0,
            Pz.white,
            1,
          );
          Bn.draw_sprite_ext(
            "spr_face_catty_hand_right",
            0,
            k4,
            this.y,
            this.f,
            this.f,
            0,
            Pz.white,
            1,
          );
        }
      }
      if (PH.fc === 17) {
        this.face = "spr_face_bratty";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 5,
          this.y + 2,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 18) {
        this.face = "spr_face_rurus";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 10,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
        if (PH.flag[326] === 1) {
          Bn.draw_sprite_ext(
            "spr_face_rurus_piratehat",
            this.face_index,
            this.x - 10 - this.f * 3,
            this.y - this.f * 4,
            this.f,
            this.f,
            0,
            Pz.white,
            1,
          );
        }
      }
      if (PH.fc === 19) {
        this.face = "spr_face_burgerpants";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 5,
          this.y - 5,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 20) {
        this.face = "spr_face_king";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 5,
          this.y - 5,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 21) {
        this.face = By("scr_84_get_sprite").call(this, "spr_face_queen");
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 22) {
        this.face = "spr_face_carol";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x - 9,
          this.y - 4,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 23) {
        this.face = "spr_face_flowery";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x + 8,
          this.y,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 24) {
        this.face = "spr_face_flowery_d";
        this.face_index = PH.fe;
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          this.face_index,
          this.x + 1,
          this.y + 6,
          this.f,
          this.f,
          0,
          Pz.white,
          1,
        );
      }
      if (PH.fc === 25) {
        this.face = "spr_face_blue";
        let k5 = 0;
        let kW = 0;
        let kB = this.f;
        let kk = PH.fe;
        if (PH.fe === 58) {
          kB = 1;
          this.face = "spr_face_blue_butterfly_angy";
          this.siner++;
          k5 = -58;
          kW = -5;
          kk = this.siner * 0.4166666666666667;
          if (this.facecustom !== null && this.facecustom !== -4 && this.facecustom === "blush") {
            this.face = "spr_face_blue_butterfly_blush";
            kk = this.siner * 0.4166666666666667;
          }
        }
        if (PH.fe === 59) {
          this.face = "spr_face_blank";
        }
        if (PH.fe === 60) {
          kB = 1;
          this.face = "spr_face_blue_butterfly";
          this.siner++;
          k5 = -58;
          kW = -5;
          kk = WS(this.siner / 9) * 3.5 + 3.5;
        }
        if (PH.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
          this.timer = 0;
        }
        Bn.draw_sprite_ext(
          this.face,
          kk,
          this.x - 12 + k5,
          this.y - 1 + kW,
          kB,
          kB,
          0,
          Pz.white,
          1,
        );
      }
    }
    this.nowface = PH.fc;
  }
}
WU(Bc, "face5_draw");
Wf(BI, "G.myfight = 1;");
var Bw = 5;
var BR = WU((Bn) => WP.first(Bn), "first");
function BY(Bn, BX) {
  let BM = PD[Bn];
  PD[Bn] = function (Bz) {
    if (PH.chapter === Bw) {
      return BX(Bz);
    } else if (typeof BM == "function") {
      return BM(Bz);
    } else {
      return false;
    }
  };
}
WU(BY, "chain");
BY("bcStepGate", (Bn) => {
  let BX = BR("obj_seth_shi_controller");
  if (BX && BX.con < 1) {
    return true;
  }
  let BM = BR("obj_seth_shinobeetle_controller");
  if (BM && BM.con < 1) {
    return true;
  }
  let Bz = BR("obj_flowery_enemy");
  if (Bz && Bz.introcon < 2) {
    return true;
  }
  let k0 = BR("obj_pink_enemy");
  if ((k0 && k0.introcon < 3) || (k0 && k0.phase4introcon > 0)) {
    return true;
  }
  let k1 = BR("obj_orange_green_controller");
  if (k1 && k1.endcon > 0 && Bn.victory === 0) {
    if (Bn.grazenoise === 1 && Bn.victory === 0) {
      Pn("snd_graze");
      Bn.grazenoise = 0;
    }
    return true;
  }
  if (k1 && k1.afterbulletcon > 0) {
    return true;
  }
  let k2 = BR("obj_blue_enemy");
  return (
    (!!k2 && !k2.done_intro) ||
    (!!Bz &&
      (!!(Bz.endcon > 0) ||
        !!(Bz.healingscenecon > 0) ||
        (!!(Bz.phasetransition_con > 0) && PH.mnfight !== 2) ||
        (Bz.phasetransition_con === 1 && !!Bz.visible)))
  );
});
BY("bcSkipMenu", () => {
  let Bn = BR("obj_flowery_enemy");
  let BX = PH.encounterno === 226 && BR("obj_dw_garden_enemyrush");
  return (!!Bn && Bn.introcon === 2) || (!!BX && !!(BX.bcon > 0) && !!(BX.bcon < 3));
});
BY("bcTurnTimer", () => {
  let Bn = BR("obj_flowery_enemy");
  return !!Bn && Bn.introcon === 2;
});
BY("bcNoReturn", (Bn) =>
  BR("obj_flowery_enemy") && Bn.noreturn === 1
    ? ((Bn.noreturn = 0), (Bn.alarm[2] = 1), true)
    : false,
);
var BO = new Set([11, 12, 13]);
{
  let a5 = PD.chapterSpell;
  PD.chapterSpell = (Bn, BX) => {
    if (PH.chapter !== Bw) {
      if (typeof a5 == "function") {
        return a5(Bn, BX);
      } else {
        return false;
      }
    }
    if (!BO.has(Bn) || typeof Pk != "function") {
      return false;
    }
    let BM = (PH.charinstance && PH.charinstance[BX]) || {};
    Pk.call(BM, Bn, BX);
    return true;
  };
}
BY("chapterEndturn", (Bn) => (typeof P0 != "function" ? false : (P0.call(Bn), true)));
BY("chapterAttackphase", (Bn) => (typeof PW != "function" ? false : (PW.call(Bn), true)));
BY("chapterMnendturn", () => {
  WP.with("obj_monsterparent", (Bn) => {
    if (typeof Bn.end_turn_action == "function") {
      Bn.end_turn_action();
    }
  });
  for (let Bn = 0; Bn < 3; Bn++) {
    PH.hittarget ||= [];
    PH.hittarget[Bn] = 0;
  }
  return false;
});
PD.chapterFace = {
  create: Bt,
  step: BZ,
  draw: Bc,
};
{
  let a6 = PD.bcCreate;
  PD.bcCreate = function (Bn) {
    if (PH.chapter === Bw) {
      PH.chemg_sound_map = Object.assign(
        PH.chemg_sound_map && typeof PH.chemg_sound_map == "object" ? PH.chemg_sound_map : {},
        B8,
      );
    }
    let BX = typeof a6 == "function" ? a6(Bn) : false;
    if (PH.chapter === Bw && PH.encounterno === 226 && !WP.exists("obj_dw_garden_enemyrush")) {
      Wy(0, 0, BI);
    }
    return BX;
  };
}
BY("bcBattleStats", () => {
  if (PH.charweapon && PH.charweapon[3] === 35 && PH.battleat && PH.battleat.length > 2) {
    PH.battleat[2] += 12;
    PH.battledf[2] += 3;
    PH.battlemag[2] += 3;
  }
  PH.ignoredefense = false;
  return false;
});
BY("bcVictoryGold", () => {
  let Bn = (BM) => {
    let Bz = 0;
    for (let k0 = 0; k0 < 3; k0++) {
      if (PH.char[k0] !== 0) {
        Bz +=
          (PH.chararmor1[PH.char[k0]] === BM ? 1 : 0) + (PH.chararmor2[PH.char[k0]] === BM ? 1 : 0);
      }
    }
    return Bz;
  };
  let BX = PH.monstergold[3];
  if (PH.charweapon[1] === 53) {
    BX += Math.floor(BX / 20);
  }
  BX *= 1 + Bn(8) * 0.05;
  BX *= 1 + Bn(21) * 0.3;
  BX -= BX * (Bn(54) * 0.1);
  BX = Math.min(Math.max(BX - BX * (Bn(32) * 0.9), 0), BX);
  BX = Math.floor(BX);
  if (PH.flag[37] === 1) {
    BX = 0;
  }
  PH.monstergold[3] = BX;
  return false;
});
{
  let a7 = PD.chapterSpellinfo;
  PD.chapterSpellinfo = (Bn) => {
    if (PH.chapter !== Bw || typeof PF != "function") {
      if (typeof a7 == "function") {
        return a7(Bn);
      } else {
        return null;
      }
    }
    let BX = {};
    try {
      PF.call(BX, Bn);
    } catch {}
    return {
      spellname: BX.spellname,
      spellnameb: BX.spellnameb,
      spelltarget: BX.spelltarget ?? 0,
      cost: Bn === 10 ? PH.maxtension : (BX.cost ?? 0),
      spelldescb: BX.spelldescb,
    };
  };
}
function Bv(Bn, BX) {
  if (Bn._c5lastcoord === undefined) {
    Bn._c5lastcoord = BX;
  }
  if (W7() || W8() || W9() || WW()) {
    Bn.spellcoord = Bn._c5lastcoord;
  }
  Bn._c5lastcoord = BX;
  if (Bn.spellcoord === undefined) {
    Bn.spellcoord = 0;
  }
}
WU(Bv, "trackSpellcoord");
{
  let a8 = PD.techBlocked;
  PD.techBlocked = (Bn, BX, BM) => {
    if (PH.chapter !== Bw) {
      if (typeof a8 == "function") {
        return a8(Bn, BX, BM);
      } else {
        return false;
      }
    }
    Bv(Bn, BM);
    let Bz = PH.charturn;
    let k0 = true;
    for (let k3 = 0; k3 < 12; k3++) {
      if (Bn.tempitem && Bn.tempitem[k3] && Bn.tempitem[k3][Bz] !== 0) {
        k0 = false;
      }
    }
    let k1 = BR("obj_pink_enemy");
    let k2 = (PH.battlespellname[BX] || [])[BM];
    return (
      (!!k1 &&
        !!PH.actnamesus &&
        !!PH.actnamesus[k1.myself] &&
        k2 === PH.actnamesus[k1.myself][2] &&
        !!k0) ||
      (!!BR("obj_flowery_enemy") && Bz === 1 && BM === 1 && !!Bn.disablesusieralseiattack)
    );
  };
}
{
  let a9 = PD.techActDirect;
  PD.techActDirect = (Bn, BX, BM) => {
    if (PH.chapter !== Bw) {
      if (typeof a9 == "function") {
        return a9(Bn, BX, BM);
      } else {
        return false;
      }
    }
    let Bz = PH.charturn;
    if ((PH.encounterno === 222 || PH.encounterno === 223) && Bz && (Bn.spellcoord || 0) === 0) {
      PH.actingchoice[Bz] = BM;
      PH.tension -= (PH.battlespellcost[BX] || [])[BM] || 0;
      PH.tensionselect = 0;
      Bn.actselect(PH.bmenucoord[13][Bz] || 0, BM);
      Pj();
      return true;
    } else {
      return false;
    }
  };
}
BY("bcDefendTP", () => (BR("obj_flowery_enemy") || BR("obj_orange_enemy") ? 20 : 40));
var Bq = {
  heroDamage: WU((Bn, BX) => BX, "heroDamage"),
  heroHitTP: WU((Bn) => Math.round(Bn.points / 10), "heroHitTP"),
};
function Bm(Bn, BX) {
  let BM = PD[Bn];
  PD[Bn] = function (...Bz) {
    if (PH.chapter === Bw) {
      return BX(...Bz);
    } else if (typeof BM == "function") {
      return BM(...Bz);
    } else if (Bq[Bn]) {
      return Bq[Bn](...Bz);
    } else {
      return false;
    }
  };
}
WU(Bm, "chainN");
var Bg = WU((Bn) => WP.exists(Bn), "ex");
Bm("heroAttackRetarget", (Bn) => {
  let BX = BR("obj_blue_enemy");
  let BM = BR("obj_yellow_enemy");
  let Bz = Bn.myself;
  if (BX && BM && PH.chartarget[Bz] === BX.myself) {
    BM.x = BX.x - 60;
    BM.y = BX.y;
    PH.chartarget[Bz] = BM.myself;
    PH.monsterx[BM.myself] = BM.x + 20;
    PH.monstery[BM.myself] = BM.y + 70;
    BM.blockcon = 1;
    BM.blocktimer = 0;
    BM.hurtsprite = "spr_yellow_block";
  }
  let k0 = BR("obj_trashy_trio");
  if (k0 && PH.chartarget[Bz] === k0.myself && Bn.points) {
    k0.blocked_last_turn = 1;
    k0.back = 30;
  }
  return false;
});
Bm("heroDamage", (Bn, BX) => (Bg("obj_trashy_trio") ? Math.ceil(BX * 0.1) : BX));
Bm("heroAttackLanded", (Bn, BX, BM, Bz, k0) => {
  if (Bg("obj_pink_enemy") && Bz) {
    Bz.damage = 0;
  }
  if (Bg("obj_trashy_trio")) {
    PH.monsterhp[BX] += BM;
  }
  if (Bg("obj_seth_shinobeetle_controller") && PH.monsterhp[BX] < 1) {
    PH.monsterhp[BX] = 1;
  }
  let k1 = k0 || (PH.monsterinstance && PH.monsterinstance[BX]);
  if (k1 && typeof k1.callback_on_damage == "function") {
    try {
      k1.callback_on_damage(Bn);
    } catch (k2) {
      console.warn("callback_on_damage", k2);
    }
  }
  if (BM > 0) {
    let k3 = BR("obj_flowery_enemy");
    if (k3) {
      k3.force_hurt_sprite = 1;
    }
  }
  if (BM > 0) {
    let k4 = BR("obj_trashy_trio");
    let k5 = BR("obj_battlecontroller");
    if (k4 && k5 && PH.chartarget[Bn.myself] === k4.myself) {
      k5.damagenoise = 0;
      k5.bumpnoise = 1;
    }
  }
  return false;
});
Bm("bcVictoryHold", () => Bg("obj_seth_shi_controller") || Bg("obj_seth_shinobeetle_controller"));
Bm(
  "nextheroSkip",
  (Bn) =>
    !!Bn &&
    (Bn.skipsusieturn === 1 ||
      Bn.skipsusieturn === true ||
      Bn.skipralseiturn === 1 ||
      Bn.skipralseiturn === true),
);
Bm("tpCreate", (Bn) => {
  Bn.maxtensionlimitpercent = 100;
  Bn.maxtensionlimit = 250;
  if (
    Bg("obj_pink_enemy") ||
    (PH.monsterinstancetype || []).some((BX) => BX && BX.name === "obj_pink_enemy")
  ) {
    Bn.maxtensionlimitpercent = 8;
    Bn.maxtensionlimit = 20;
  }
  return false;
});
Bm("tensionCap", () => {
  let Bn = BR("obj_tensionbar");
  if (Bn && Number.isFinite(Bn.maxtensionlimit)) {
    return Bn.maxtensionlimit;
  } else {
    return null;
  }
});
Bm("heroSetup", (Bn) => {
  let BX = (Bz) => !Bn.herokey || Bn.herokey === Bz;
  let BM = (Bz) =>
    Bn.is &&
    Bn.is(Bz) &&
    BX(
      Bz === "obj_heroralsei"
        ? "ralsei"
        : Bz === "obj_herosusie"
          ? "susie"
          : Bz === "obj_herokris"
            ? "kris"
            : Bz,
    );
  Object.assign(Bn, {
    mercycon: 0,
    mercytimer: 0,
    mercyalpha: 0,
    mercy: 0,
    mercymax: 100,
  });
  if (BM("obj_heroralsei") && PH.flag[1311] !== 1) {
    Object.assign(Bn, {
      attackframes: 6,
      normalsprite: "spr_ralsei_walk_right",
      idlesprite: "spr_ralsei_idle",
      defendsprite: "spr_ralsei_defend",
      hurtsprite: "spr_ralsei_hurt_fixed",
      attackreadysprite: "spr_ralsei_attackready",
      attacksprite: "spr_ralsei_attack",
      itemsprite: "spr_ralsei_item",
      itemreadysprite: "spr_ralsei_itemready",
      spellreadysprite: "spr_ralsei_spellready",
      spellsprite: "spr_ralsei_spell",
      defeatsprite: "spr_ralsei_defeat",
      victorysprite: "spr_ralsei_victory",
      actreadysprite: "spr_ralsei_actready",
      actsprite: "spr_ralsei_act",
      victoryframes: 21,
    });
  }
  if (PH.encounterno === 225) {
    if (BM("obj_herosusie")) {
      Object.assign(Bn, {
        normalsprite: "spr_susier_dark_unhappy",
        idlesprite:
          PH.charweapon[2] === 0 ? "spr_susieb_idle_unarmed_unhappy" : "spr_susieb_idle_serious",
        defendsprite: "spr_susieb_defend_unhappy",
        actreadysprite: "spr_susieb_actready",
        attacksprite: "spr_susieb_attack_serious",
        itemsprite: "spr_susieb_item_unhappy",
        itemreadysprite: "spr_susieb_itemready_unhappy",
        spellreadysprite: "spr_susieb_spellready_unhappy",
        spellsprite: "spr_susieb_spell_unhappy",
      });
    }
    if (BM("obj_heroralsei")) {
      Object.assign(Bn, {
        idlesprite: "spr_ralsei_idle_mad",
        defendsprite: "spr_ralsei_defend_serious",
        hurtsprite: "spr_ralsei_kneel",
        attackreadysprite: "spr_ralse_attackready_serious",
        attacksprite: "spr_ralse_attack_serious",
        defeatsprite: "spr_ralsei_kneel",
      });
    }
  }
  return false;
});
var Bx = WU((Bn, BX, BM) => Bn + (BX - Bn) * BM, "lerp5");
Bm("bcBp", (Bn) => {
  let BX = BR("obj_pink_enemy");
  if (BX && Bn.victory === 0) {
    let BM = BR("obj_date_controller");
    if (BX.datecount === 1) {
      Bn.bp = Bx(Bn.bp, BM && BM.con !== 0 ? 36 : 152, 0.3);
    } else if (BM && (BM.con !== 7 || BM.date3endingcon === 2)) {
      Bn.bp = Bx(Bn.bp, 36, 0.4);
    } else {
      Bn.bp = Bx(Bn.bp, 152, 0.3);
    }
  }
  if (Bn.hidebattleui === 1) {
    Bn.bp = Bx(Bn.bp, 0, 0.3);
  }
  return false;
});
Bm("actNameColor", (Bn, BX, BM) => {
  let Bz = BR("obj_floradinn_enemy");
  if (Bz && Bz.flowery_arena && Bn === 0 && !BX) {
    BM = Pz.lime;
  }
  let k0 = BR("obj_pink_enemy");
  if (k0 && k0.dateactdisabled && Bn === 1) {
    BM = Pz.gray;
  }
  return BM;
});
Bm("actInfoHide", (Bn, BX) => {
  let BM = PH.charturn;
  let Bz = PH.bmenucoord[11][BM];
  let k0 = BR("obj_pink_enemy");
  let k1 = !!k0 && !!k0.dateactdisabled && PH.bmenucoord[9][BM] === 1;
  let k2 = k1;
  if (PH.encounterno === 222) {
    let k3 = BR("obj_blue_enemy");
    let k4 = BR("obj_yellow_enemy");
    if (k3 && Bz === 0 && BX === 0 && (PH.actcost[k3.myself] || [])[0] === 2497.5) {
      k2 = true;
    }
    if (k4 && Bz === 1 && BX === 1 && (PH.actcost[k4.myself] || [])[1] === 2497.5) {
      k2 = true;
    }
  }
  return {
    desc: k1,
    tp: k2,
  };
});
var Bu = [
  [0, 1],
  [4, 5],
  [2, 3],
  [1, 2],
  [5, 6],
  [3, 4],
  [6, 7],
];
Bm("bcDrawEnd", (Bn, BX) => {
  let BM = PH.charturn;
  if (PH.bmenuno === 9 && PH.myfight === 0 && PH.bmenucoord[11][BM] === 1) {
    let k2 = BR("obj_yellow_enemy");
    if (k2) {
      let k3 = 0;
      let k4 = (kB) => {
        let kk = 440 + WS(PH.time * 0.1 + k3 / 60) * 2;
        BX.draw_sprite_ext("spr_yellow_evidence", 0, 36 + k3, kk, 1, 1, 45, Pz.gray, 1);
        BX.draw_sprite_ext("spr_yellow_evidence", kB, 36 + k3, kk, 1, 1, 0, Pz.gray, 1);
      };
      let k5 = k2.evidence_obtained || [];
      for (let [kB, kk] of Bu) {
        if (k5[kB]) {
          k4(kk);
          k3 += 60;
        }
      }
      let kW = false;
      try {
        kW = typeof PS == "function" && !!PS.call({}, 2);
      } catch {
        kW = false;
      }
      if (kW) {
        k4(9);
      }
    }
  }
  let Bz = BR("obj_netskie_enemy");
  let k0 = BR("obj_writer");
  if (Bz && Bz.draw_kitsune_tail && k0 && k0.reachedend) {
    BX.draw_sprite_ext(
      "spr_kitsune_tail_check2",
      Bz.draw_kitsune_index || 0,
      552,
      368,
      2,
      2,
      0,
      Pz.white,
      1,
    );
    Bz.draw_kitsune_index = (Bz.draw_kitsune_index || 0) + 1 / 3;
  }
  let k1 = BR("obj_flowery_enemy");
  if (PH.myfight === 0 && k1 && [1, 3, 11, 12, 13].includes(PH.bmenuno)) {
    let kF = {
      3: [
        ["Aqua", "aqua_mercy"],
        ["Seth", "purple_mercy"],
      ],
      4: [
        ["Orange", "orange_mercy"],
        ["Green", "green_mercy"],
      ],
      5: [
        ["Blue", "blue_mercy"],
        ["Yellow", "yellow_mercy"],
      ],
    }[k1.phase];
    if (kF) {
      let kS = W1(Pz.orange, Pz.red, 0.5);
      let ko = -5;
      BX.draw_set_font("fnt_mainbig");
      kF.forEach(([kb, ky], kU) => {
        let kA = kU * 32;
        let kf = Number(k1[ky]) || 0;
        BX.draw_set_color(Pz.gray);
        BX.draw_text_transformed(80, 407 + kA, kb, 1, 1, 0);
        BX.draw_healthbar(
          520,
          418 + kA + ko,
          600,
          433 + kA + ko,
          kf,
          kS,
          Pz.yellow,
          Pz.yellow,
          0,
          1,
          0,
        );
        BX.draw_set_color(Pz.white);
        BX.draw_text_transformed(524, 397 + kA, "MERCY", 1, 0.5, 0);
        BX.draw_set_color(Pz.maroon);
        BX.draw_text_transformed(524, 413 + kA, String(kf) + "%", 1, 0.5, 0);
      });
    }
  }
  return false;
});
Bm("tpCustom", () => Bg("obj_pink_enemy"));
Bm("tpCustomDraw", (Bn, BX, BM) => {
  if (!PZ(Bn.healthbar_surf)) {
    Bn.healthbar_surf = Pt(96, 250);
  }
  let Bz = 60;
  let k0 = Number(Bn.maxtensionlimit) || 250;
  let k1 = Number(Bn.maxtensionlimitpercent) || 100;
  let k2 = Bx(-1, 75, k1 / 100);
  let k3 = Bz + 43 + k2;
  let k4 = 23 + k2 * 2;
  Pm(Bn.healthbar_surf);
  Px(Pz.white, 0);
  let k5 = (ko, kb, ky = 1, kU = false) => {
    if (kU) {
      BX.draw_sprite_white("spr_tensionbar_parts", ko, 0, kb, 1, 1, 0, ky);
    } else {
      BX.draw_sprite_ext("spr_tensionbar_parts", ko, 0, kb, 1, 1, 0, Pz.white, ky);
    }
  };
  let kW = (ko, kb, ky = 1, kU = false) => {
    if (kb > 0) {
      if (kU) {
        BX.draw_sprite_white("spr_tensionbar_parts", 4, 0, ko, 1, kb, 0, ky);
      } else {
        BX.draw_sprite_ext("spr_tensionbar_parts", 4, 0, ko, 1, kb, 0, Pz.white, ky);
      }
    }
  };
  let kB = Math.round(k2);
  k5(3, Bz + 20 - k2);
  kW(Bz + 43 - (kB - 1), kB);
  kW(Bz + 43, kB);
  k5(5, k3);
  let kk = (ko, kb) => {
    BX.draw_set_color(ko);
    BX.draw_rectangle(3, k3 + 20, 21, k3 + 20 - Bx(0, k4 + 20, kb / k0), false);
  };
  let kF = BM === 1 ? W1(Pz.yellow, Pz.orange, 0.5) : Pz.orange;
  if (Bn.apparent < Bn.current) {
    kk(Pz.red, Bn.current);
    kk(Pz.orange, Bn.apparent);
  }
  if (Bn.apparent > Bn.current) {
    kk(Pz.white, Bn.apparent);
    kk(kF, Bn.current);
  }
  if (Bn.apparent === Bn.current) {
    kk(kF, Bn.current);
  }
  if (PH.tensionselect > 0) {
    Bn.tsiner++;
    BX.draw_set_color(Pz.white);
    BX.draw_set_alpha(Math.abs(Math.sin(Bn.tsiner / 8) * 0.5) + 0.2);
    let ko = k3 + 20 - Bx(0, k4 + 20, Bn.apparent / k0);
    let kb = ko + Bx(0, k4 + 20, PH.tensionselect / k0);
    if (kb > k3 + 22) {
      kb = k3 + 22;
      BX.draw_set_color(Pz.dkgray);
      BX.draw_set_alpha(0.7);
    }
    BX.draw_rectangle(3, ko, 21, kb, false);
    BX.draw_set_alpha(1);
  }
  k5(0, Bz + 20 - k2);
  k5(2, k3 + 1);
  PL(3);
  BX.draw_sprite_ext("spr_tensionbar_cutout_parts", 0, 0, Bz + 20 - k2, 1, 1, 0, Pz.white, 1);
  BX.draw_sprite_ext("spr_tensionbar_cutout_parts", 1, 0, k3 + 1, 1, 1, 0, Pz.white, 1);
  PL(0);
  let kS = BR("obj_pink_tension_glow");
  if (kS && kS.alphamod >= 0) {
    if (kS.alphamod === 1) {
      for (let ky = 0; ky < 3; ky++) {
        WP.with("obj_tensionbar", (kU) => {
          let kA = Wy(kU.x + W5(25), Bz + 100 - k2 + W5(k2 * 2), PV);
          let kf = 10 + W5(5);
          kA.sprite_index = "spr_kissheart";
          kA.image_xscale = 1.5;
          kA.image_yscale = 1.5;
          kA.image_speed = 5 / kf;
          kA.speed = 3 + W4(3);
          kA.direction = 90;
          P5.call(kA, "speed", kA.speed, 0, kf);
          P5.call(kA, "image_alpha", 1, 0.25, kf);
          P8.call(kA, kA.instance_destroy, kf);
        });
      }
    }
    k5(3, Bz + 20 - k2, kS.alphamod, true);
    kW(Bz + 43 - (kB - 1), kB, kS.alphamod, true);
    kW(Bz + 44, Math.round(k2 - 1), kS.alphamod, true);
    k5(5, k3, kS.alphamod, true);
  }
  Pg();
  Pu(Bn.healthbar_surf, Bn.x, Bn.y);
  return true;
});
Bm("tpCustomText", (Bn, BX) => {
  let BM = Number(Bn.maxtensionlimitpercent) || 100;
  BX.draw_text(Bn.x - 30, Bn.y + 95, "/", Pz.white);
  if (BM === 100) {
    BX.draw_set_color(Pz.white);
    BX.draw_text_transformed(Bn.x - 31, Bn.y + 95 + 27, String(BM), 0.6, 1, 0);
  } else {
    BX.draw_text(Bn.x - 31, Bn.y + 95 + 27, String(BM), Pz.white);
  }
  return true;
});
{
  let aP = PD.techActPicked;
  PD.techActPicked = (Bn) => {
    if (PH.chapter !== Bw) {
      if (typeof aP == "function") {
        return aP(Bn);
      } else {
        return false;
      }
    }
    let BX = BR("obj_pink_enemy");
    if (!BX || BX.actingsus !== 3 || PH.charturn !== 1) {
      return false;
    }
    Bn.shareitemcon = 1;
    PH.bmenuno = 4;
    let BM = PH.charturn;
    let Bz = PH.bmenucoord;
    for (let k0 = 0; k0 < 12; k0++) {
      if (Bn.tempitem[Bz[4][BM]] && Bn.tempitem[Bz[4][BM]][BM] === 0 && Bz[4][BM] > 0) {
        Bz[4][BM]--;
      }
    }
    return true;
  };
}
{
  let aW = PD.itemMenuPick;
  PD.itemMenuPick = (Bn, BX, BM) => {
    if (PH.chapter !== Bw) {
      if (typeof aW == "function") {
        return aW(Bn, BX, BM);
      } else {
        return false;
      }
    }
    if (Bn.shareitemcon !== 1) {
      return false;
    }
    let Bz = BR("obj_pink_enemy");
    if (Bz) {
      Bz.sharefood_item_number = BX >= 200 ? BX - 200 : BX;
    }
    PQ(BX, BM);
    PH.charspecial[1] = 0;
    PH.charaction[1] = 0;
    Bn.shareitemcon = 0;
    return true;
  };
}
{
  let aB = PD.itemMenuCancel;
  PD.itemMenuCancel = (Bn) => {
    if (PH.chapter !== Bw) {
      if (typeof aB == "function") {
        aB(Bn);
      }
      return;
    }
    if (Bn.shareitemcon !== 1) {
      return;
    }
    Bn.shareitemcon = 0;
    PH.bmenuno = 0;
    let BX = PH.charturn;
    PH.actingsingle[BX] = 0;
    PH.actingsimul[BX] = 0;
    PH.faceaction[BX] = 0;
    PH.chartarget[BX] = 0;
    PH.charaction[BX] = 0;
    PH.charspecial[BX] = 0;
  };
}
{
  let ak = PD.bcCreate;
  PD.bcCreate = function (Bn) {
    let BX = typeof ak == "function" ? ak(Bn) : false;
    if (PH.chapter === Bw) {
      PR();
    }
    if (PH.chapter === Bw && PH.encounterno === 227 && !WP.exists("obj_dw_garden_enemyrush")) {
      Wy(0, 0, PA);
    }
    return BX;
  };
}
{
  let aF = PD.rudebusterHit;
  PD.rudebusterHit = (Bn, BX) => {
    if (PH.chapter !== Bw) {
      if (typeof aF == "function") {
        return aF(Bn, BX);
      } else {
        return false;
      }
    }
    let BM = BR("obj_trashy_trio");
    let Bz = Bn.target;
    if (BX === "before") {
      if (BM) {
        Bn.damage = Math.ceil(Bn.damage * 0.1);
        Bn._hplock = Bz ? PH.monsterhp[Bz.myself] : undefined;
      }
      return false;
    }
    if (Bg("obj_pink_enemy")) {
      WP.with("obj_dmgwriter", (k0) => {
        k0.damage = 0;
      });
    }
    if (PH.monstertype[0] !== 20 && !BM && Bz && !Bz.destroyed) {
      let k0 = BR("obj_pink_enemy");
      let k1 = null;
      if (k0 && k0.datecount < 3) {
        WP.with("obj_pink_enemy", (k2) => {
          k2.pink_head_white_alpha = 1;
        });
      } else if (typeof Po == "function") {
        k1 = Po.call(Bz);
      }
      if (k1 && Bg("obj_yellow_enemy")) {
        if ((Bn.yellowbluecon || 0) === 0) {
          k1.sprite_index = "spr_yellow_block";
        }
        if (Bn.yellowbluecon === 1) {
          k1.sprite_index = "spr_yellow_dumbfounded";
        }
      }
      if (k1 && Bg("obj_flowery_enemy")) {
        k1.sprite_index = "spr_flowery_hurt";
      }
      if (k1 && Bn.red === 1) {
        k1.flashcolor = Pz.red;
      }
    }
    if (BM) {
      WP.with("obj_trashy_trio", (k2) => {
        k2.blocked_last_turn = true;
        k2.back = 30;
      });
      Pn("snd_bounceflower");
      Pn("snd_acquire_lancer", {
        volume: 0.5,
        pitch: 1,
      });
      if (Bz && Bn._hplock !== undefined) {
        PH.monsterhp[Bz.myself] = Bn._hplock;
      }
      return true;
    } else {
      return false;
    }
  };
}
{
  let aS = PD.techMenuColor;
  PD.techMenuColor = (Bn, BX, BM, Bz) => {
    if (PH.chapter !== Bw) {
      if (typeof aS == "function") {
        return aS(Bn, BX, BM, Bz);
      } else {
        return null;
      }
    }
    let k0 = true;
    for (let k5 = 0; k5 < 12; k5++) {
      if (Bn.tempitem && Bn.tempitem[k5] && Bn.tempitem[k5][PH.charturn] !== 0) {
        k0 = false;
      }
    }
    let k1 = BR("obj_pink_enemy");
    let k2 = (PH.battlespellcost[BX] || [])[BM] || 0;
    let k3 = !Bn.techUnlocked(BX, BM);
    if (
      k1 &&
      PH.actnamesus &&
      PH.actnamesus[k1.myself] &&
      (PH.battlespellname[BX] || [])[BM] === PH.actnamesus[k1.myself][2] &&
      k0
    ) {
      k3 = true;
    }
    if (BR("obj_flowery_enemy") && k2 === 125 && Bn.disablesusieralseiattack) {
      k3 = true;
    }
    if (PH.tension < k2 || k3) {
      return Pz.gray;
    }
    let k4 = (PH.battlespell[BX] || [])[BM];
    if (k4 === 3 || k4 === 8 || k4 === 13) {
      let kW = 0;
      for (let kB = 0; kB < 3; kB++) {
        if (PH.monster[kB] === 1 && PH.monsterstatus[kB] === 1 && PH.encounterno !== 31) {
          kW = 1;
        }
      }
      if (kW) {
        return W1(Pz.aqua, Pz.blue, 0.3);
      }
    }
    return Bz;
  };
  let ao = PD.techMenuInfoHide;
  PD.techMenuInfoHide = (Bn, BX, BM) => {
    if (PH.chapter !== Bw) {
      if (typeof ao == "function") {
        return ao(Bn, BX, BM);
      } else {
        return false;
      }
    }
    let Bz = Math.floor((((PH.battlespellcost[BX] || [])[BM] || 0) / PH.maxtension) * 100);
    return !!BR("obj_flowery_enemy") && Bz === 50 && !!Bn.disablesusieralseiattack;
  };
}
{
  let ab = P4.prototype.draw;
  let ay = WU((Bn, BX, BM, Bz, k0, k1, k2, k3, k4) => {
    if (!(k1 > 0) || !(k4 > 0) || k1 <= k0) {
      return;
    }
    Bn.save();
    Bn.globalAlpha = Math.min(1, k4);
    Bn.fillStyle = BX;
    Bn.beginPath();
    let k5 = 1 / (k3 || 1);
    Bn.ellipse(BM, Bz, k1, k1 * k5, 0, 0, Math.PI * 2);
    if (k0 > 0) {
      Bn.ellipse(BM, Bz, k0, k0 * k5, 0, 0, Math.PI * 2, true);
    }
    Bn.fill("evenodd");
    Bn.restore();
  }, "ring");
  P4.prototype.draw = function (Bn) {
    if (!Bn || typeof Bn.draw_rectangle != "function") {
      return ab.call(this, Bn);
    }
    let BX = Object.prototype.hasOwnProperty.call(Bn, "draw_rectangle") ? Bn.draw_rectangle : null;
    let BM = this.ripples || [];
    let Bz = WP.view.x || 0;
    let k0 = WP.view.y || 0;
    Bn.draw_rectangle = function (k1, k2, k3, k4) {
      let k5 = Bn.ctx;
      if (!k5 || typeof k5.ellipse != "function") {
        return;
      }
      let kW = (k1 + k3) / 2;
      let kB = (k2 + k4) / 2;
      let kk = (k3 - k1) / 2;
      let kF = BM.find(
        (kK) =>
          kK &&
          Math.abs(kK.x - Bz - kW) < 0.01 &&
          Math.abs(kK.y - k0 - kB) < 0.01 &&
          Math.abs(kK.rad - kk) < 0.01,
      );
      if (!kF) {
        return;
      }
      let kS = kF.radmax - kF.radstart || 1;
      let ko = Math.max(0, Math.min(1, (kk - kF.radstart) / kS));
      let kb = kF.thickness * (1 - ko);
      let ky = kF.radmax / 3;
      let kU = kF.fading ? Math.min(1, 1 - (kk - ky) / (kF.radmax - ky || 1)) : 1;
      if (!(kU > 0)) {
        return;
      }
      let kA = W0(Bn.color !== undefined ? Bn.color : kF.col);
      let kf = Math.max(0, kk - kb);
      let kC = kb / 3;
      if (kF.banding === 1) {
        for (let kK = 0; kK < 4; kK++) {
          ay(
            k5,
            kA,
            kW,
            kB,
            kf + (kb * kK) / 4,
            kf + (kb * (kK + 1)) / 4,
            0,
            kF.yratio,
            kU * ((kf + (kb * (kK + 0.5)) / 4) / kk),
          );
        }
      } else if (kF.banding === 2) {
        ay(k5, kA, kW, kB, kf, kk, 0, kF.yratio, kU);
      } else {
        ay(k5, kA, kW, kB, kf, kf + kC, 0, kF.yratio, kU * 0.6);
        ay(k5, kA, kW, kB, kf + kC, kf + kC * 2, 0, kF.yratio, kU * 0.8);
        ay(k5, kA, kW, kB, kf + kC * 2, kk, 0, kF.yratio, kU);
      }
    };
    try {
      return ab.call(this, Bn);
    } finally {
      if (BX) {
        Bn.draw_rectangle = BX;
      } else {
        delete Bn.draw_rectangle;
      }
    }
  };
  P4.prototype.draw.inner = ab;
}
if (PD.standInParty) {
  PD.standInParty(PP);
}
{
  let aU = WU((Bn) => {
    let BX = ((Bn.image_angle || 0) * Math.PI) / 180;
    let BM = Math.cos(BX);
    let Bz = Math.sin(BX);
    let k0 = Bn.image_xscale;
    let k1 = Bn.image_yscale;
    return [
      [0, 0],
      [k0, 0],
      [k0, k1],
      [0, k1],
    ].map(([k2, k3]) => [Bn.x + k2 * BM + k3 * Bz, Bn.y - k2 * Bz + k3 * BM]);
  }, "corners");
  let aA = WU((Bn, BX) => {
    for (let BM of [Bn, BX]) {
      for (let Bz = 0; Bz < 2; Bz++) {
        let k0 = BM[Bz + 1][0] - BM[Bz][0];
        let k1 = -(BM[Bz + 1][1] - BM[Bz][1]);
        let k2 = k0;
        let k3 = Infinity;
        let k4 = -Infinity;
        let k5 = Infinity;
        let kW = -Infinity;
        for (let kB of Bn) {
          let kk = kB[0] * k1 + kB[1] * k2;
          if (kk < k3) {
            k3 = kk;
          }
          if (kk > k4) {
            k4 = kk;
          }
        }
        for (let kF of BX) {
          let kS = kF[0] * k1 + kF[1] * k2;
          if (kS < k5) {
            k5 = kS;
          }
          if (kS > kW) {
            kW = kS;
          }
        }
        if (k4 < k5 || kW < k3) {
          return true;
        }
      }
    }
    return false;
  }, "sep");
  let af = P9.prototype.step;
  P9.prototype.step = function () {
    let Bn = af.call(this);
    if (
      PH.chapter === Bw &&
      !this.destroyed &&
      typeof this.collide_obj_scissors_line == "function"
    ) {
      let BX = aU(this);
      WP.with("obj_scissors_line", (BM) => {
        if (
          BM !== this &&
          !BM.destroyed &&
          !this.destroyed &&
          !(Math.abs(this.count - BM.count) < 3) &&
          !aA(BX, aU(BM))
        ) {
          this.collide_obj_scissors_line(BM);
        }
      });
    }
    return Bn;
  };
  P9.prototype.step.inner = af;
}
{
  let aC = null;
  let aN = M.prototype.draw;
  M.prototype.draw = function (Bn) {
    let BX = aN.call(this, Bn);
    if (
      PH.chapter !== Bw ||
      this.destroyed ||
      !Bn ||
      !Bn.ctx ||
      !(PH.turntimer > 0) ||
      !WP.first("obj_heart")
    ) {
      return BX;
    }
    let BM = this.surf;
    let Bz = BM && typeof BM == "object" ? BM.canvas : null;
    if (!Bz || !Bz.width || typeof document === "undefined") {
      return BX;
    }
    aC ||= document.createElement("canvas");
    if (aC.width !== Bz.width || aC.height !== Bz.height) {
      aC.width = Bz.width;
      aC.height = Bz.height;
    }
    let k0 = aC.getContext("2d");
    if (!k0) {
      return BX;
    }
    let k1 = (k4) => {
      k0.setTransform(1, 0, 0, 1, 0, 0);
      k0.globalAlpha = 1;
      k0.globalCompositeOperation = "copy";
      k0.drawImage(Bz, 0, 0);
      k0.globalCompositeOperation = "source-in";
      k0.fillStyle = k4;
      k0.fillRect(0, 0, aC.width, aC.height);
      k0.globalCompositeOperation = "source-over";
    };
    let k2 = Bn.ctx;
    let k3 = (k4, k5) => {
      k2.save();
      k2.globalAlpha = 1;
      k2.globalCompositeOperation = "source-over";
      k2.translate(this.x + k4, this.y + k5);
      k2.drawImage(aC, 0, 0);
      k2.restore();
    };
    k1("#666666");
    k3(0, -1);
    k3(0, 1);
    k3(1, 0);
    k3(-1, 0);
    k1("#000000");
    k3(0, 0);
    return BX;
  };
  M.prototype.draw.inner = aN;
}
{
  let aj = PE.prototype.draw;
  PE.prototype.draw = function (Bn) {
    if (PH.chapter !== Bw || this.type !== 15) {
      return aj.call(this, Bn);
    }
    if (this.delaytimer < this.delay) {
      WP.with("obj_dmgwriter", (BX) => {
        BX.killtimer = 0;
      });
    }
    this.delaytimer++;
    if (this.delaytimer === this.delay) {
      this.vspeed = -5 - W4(2);
      this.hspeed = 10;
      this.vstart = this.vspeed;
      this.flip = 90;
    }
    if (this.delaytimer >= this.delay) {
      if (this.hspeed > 0) {
        this.hspeed -= 1;
      }
      if (this.hspeed < 0) {
        this.hspeed += 1;
      }
      if (Math.abs(this.hspeed) < 1) {
        this.hspeed = 0;
      }
      if (this.damagemessage === undefined) {
        this.damagemessage = String(Math.round(this.damage));
      }
      let BX = Math.max(0, 1 - this.kill);
      let BM = 2 - this.stretch;
      let Bz = this.stretch + this.kill;
      Bn.draw_set_halign("right");
      Bn.draw_spritefont(
        "spr_numbersfontbig_pink",
        "0123456789+-%/P$",
        this.damagemessage,
        this.x - 80,
        this.y - 20,
        BM,
        Bz,
        Pz.white,
        BX,
        0,
        true,
        0,
      );
      Bn.draw_set_halign("left");
      Bn.draw_sprite_ext("spr_battlemsg", 15, this.x, this.y - 20, BM, Bz, 0, Pz.white, BX);
      if (this.bounces < 2) {
        this.vspeed += 1;
      }
      if (this.y > this.ystart && this.bounces < 2 && this.killactive === 0) {
        this.y = this.ystart;
        this.vspeed = this.vstart / 2;
        this.bounces++;
      }
      if (this.bounces >= 2 && this.killactive === 0) {
        this.vspeed = 0;
        this.y = this.ystart;
      }
      if (this.stretchgo === 1) {
        this.stretch += 0.4;
      }
      if (this.stretch >= 1.2) {
        this.stretch = 1;
        this.stretchgo = 0;
      }
      this.killtimer++;
      if (this.killtimer > 35) {
        this.killactive = 1;
      }
      if (this.killactive === 1) {
        this.kill += 0.08;
        this.y -= 4;
      }
      if (this.kill > 1) {
        this.instance_destroy();
        return;
      }
    }
    if (PH.fighting === 1 && this.stayincamera === 1 && this.x >= this.xx + 600) {
      this.x = this.xx + 600;
    }
  };
  PE.prototype.draw.inner = aj;
}
Bm("heroDraw", (Bn, BX, BM) => {
  BM();
  if (Bn.mercycon === 1) {
    if (Bn.mercyalpha < 1) {
      Bn.mercyalpha += 0.1;
    }
  } else if (Bn.mercyalpha > -1) {
    Bn.mercyalpha -= 0.1;
  }
  if (!(Bn.mercy > 0)) {
    return;
  }
  let Bz = 0;
  let k0 = 0;
  let k1 = (k4) => !!Bn.is && !!Bn.is(k4);
  if (k1("obj_herokris")) {
    Bz = 0;
    k0 = -2;
  }
  if (k1("obj_herosusie")) {
    Bz = 12;
    k0 = -4;
  }
  if (k1("obj_heroralsei")) {
    Bz = 6;
    k0 = 2;
  }
  let k2 = Bn.x;
  let k3 = Bn.y;
  BX.draw_set_font("fnt_main");
  BX.draw_set_alpha(Bn.mercyalpha);
  BX.draw_set_color(Pz.white);
  BX.draw_text(k2 + 10 + Bz, k3 - 16 + k0, "MERCY");
  BX.draw_set_color(W1(Pz.orange, Pz.red, 0.5));
  BX.draw_rectangle(k2 + 10 + Bz, k3 + k0, k2 + Bz + Bn.mercymax * 0.5, k3 + 6 + k0, false);
  BX.draw_set_color(Pz.yellow);
  BX.draw_rectangle(k2 + 10 + Bz, k3 + k0, k2 + Bz + Bn.mercy * 0.5, k3 + 6 + k0, false);
  BX.draw_set_alpha(1);
});
{
  let aQ = PD.heroDraw;
  let aE = new Set(["spr_susie_cook", "spr_susie_cook_ja"]);
  let ah = WU((Bn) => {
    if (!BR("obj_flowery_hero_flower")) {
      return null;
    }
    let BX = BR("obj_herosusie");
    if (!BX) {
      return null;
    }
    let BM = new Map();
    BM.set(BX.itemreadysprite, [-38, 0]);
    BM.set(BX.itemsprite, [-38, 0]);
    BM.set(BX.spellreadysprite, [-38, -28]);
    BM.set(BX.spellsprite, [-38, -57]);
    return BM;
  }, "shiftFor");
  let aI = WU((Bn, BX, BM, Bz) => {
    let k0 = Object.prototype.hasOwnProperty.call(BX, "draw_sprite_ext")
      ? BX.draw_sprite_ext
      : null;
    let k1 = Object.prototype.hasOwnProperty.call(BX, "draw_sprite_white")
      ? BX.draw_sprite_white
      : null;
    let k2 = BX.draw_sprite_ext;
    let k3 = BX.draw_sprite_white;
    let k4 = (k5, kW, kB) => (Bn.state !== 8 && kW === Bn.x && kB === Bn.y ? Bz.get(k5) : null);
    BX.draw_sprite_ext = function (k5, kW, kB, kk, ...kF) {
      let kS = k4(k5, kB, kk);
      if (kS) {
        return k2.call(this, k5, kW, kB + kS[0], kk + kS[1], ...kF);
      } else {
        return k2.call(this, k5, kW, kB, kk, ...kF);
      }
    };
    if (typeof k3 == "function") {
      BX.draw_sprite_white = function (k5, kW, kB, kk, ...kF) {
        let kS = k4(k5, kB, kk);
        if (kS) {
          return k3.call(this, k5, kW, kB + kS[0], kk + kS[1], ...kF);
        } else {
          return k3.call(this, k5, kW, kB, kk, ...kF);
        }
      };
    }
    try {
      BM();
    } finally {
      if (k0) {
        BX.draw_sprite_ext = k0;
      } else {
        delete BX.draw_sprite_ext;
      }
      if (typeof k3 == "function") {
        if (k1) {
          BX.draw_sprite_white = k1;
        } else {
          delete BX.draw_sprite_white;
        }
      }
    }
  }, "shifted");
  PD.heroDraw = function (Bn, BX, BM) {
    let Bz =
      typeof aQ == "function"
        ? (k2) => aQ(Bn, BX, k2)
        : (k2) => {
            k2();
          };
    if (PH.chapter !== Bw) {
      return Bz(BM);
    }
    let k0 = BM;
    let k1 = BX && ah(Bn);
    if (k1) {
      let k2 = k0;
      k0 = () => aI(Bn, BX, k2, k1);
    }
    if (Bn.normalsprite === "spr_gameshow_drowningRalsei_ralsei_origin_edit") {
      let k3 = k0;
      k0 = () => {
        let k4 = Object.prototype.hasOwnProperty.call(BX, "draw_sprite_ext")
          ? BX.draw_sprite_ext
          : null;
        let k5 = BX.draw_sprite_ext;
        let kW = Bn.image_xscale;
        let kB = Bn.image_yscale;
        let kk = (kF) => (Math.abs(kF) === 2 ? Math.sign(kF) : kF);
        BX.draw_sprite_ext = function (kF, kS, ko, kb, ky, kU, ...kA) {
          return k5.call(this, kF, kS, ko, kb, kk(ky), kk(kU), ...kA);
        };
        Bn.image_xscale = kk(kW);
        Bn.image_yscale = kk(kB);
        try {
          k3();
        } finally {
          Bn.image_xscale = kW;
          Bn.image_yscale = kB;
          if (k4) {
            BX.draw_sprite_ext = k4;
          } else {
            delete BX.draw_sprite_ext;
          }
        }
      };
    }
    if (Bn.state === 8 && aE.has(Bn.sprite_index)) {
      let k4 = k0;
      k0 = () => {
        Bn.image_xscale = 1;
        Bn.image_yscale = 1;
        try {
          k4();
        } finally {
          Bn.image_xscale = 2;
          Bn.image_yscale = 2;
        }
      };
    }
    return Bz(k0);
  };
}
{
  let aZ = Pp.prototype.create;
  Pp.prototype.create = function (...Bn) {
    let BX = aZ.apply(this, Bn);
    if (PH.chapter === Bw && WP.exists("obj_yellow_trial_manager")) {
      this.depth = -500;
    }
    if (PH.chapter === Bw) {
      BJ(this.mystring);
    }
    return BX;
  };
  let ac = Pp.prototype.nextmsg;
  Pp.prototype.nextmsg = function (...Bn) {
    let BX = ac.apply(this, Bn);
    if (PH.chapter === Bw && !this.destroyed) {
      BJ(this.mystring);
    }
    return BX;
  };
}
function BJ(Bn) {
  if (PH.typer === 88 || PH.typer === 96 || PH.typer === 86) {
    Bn = String(Bn ?? "");
    if (Bn.includes("\\V")) {
      PH.voiceclipmode = PH.flag && PH.flag[1391] === 1 ? 2 : 0;
      if (Bn.includes("\\v1")) {
        PH.voiceclipmode = 1;
      }
    } else {
      PH.voiceclipmode = Bn.includes("\\v1") ? 1 : 2;
    }
  }
}
WU(BJ, "floweryVoiceMode");
{
  let aw = P1.prototype.userEvent0;
  P1.prototype.userEvent0 = function () {
    let Bn = WP.first("obj_huge_anime_face");
    if (PH.chapter === Bw && Bn && Bn.super >= 1 && !(this.iframes > 0) && !(this.super >= 1)) {
      this.super = 1;
    }
    return aw.call(this);
  };
}
var BL = 5;
var Bp = [
  1, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 220, 221, 222,
  223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 500, 501, 777,
];
var BK = [
  1, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 220, 221, 222,
  223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 501, 777,
];
var BG = {
  1: "A developer test encounter (obj_baseenemy) - in the data, never started by the game.",
  213: 'A developer placeholder (battle message "SETH AND 1 SHINOBEETLE") - in the data, never started by the game.',
  235: "A developer test encounter (obj_enemy_example) - in the data, never started by the game.",
  500: "A developer test encounter (obj_multiboss_enemy1, obj_multiboss_enemy2, obj_multiboss_enemy3) - in the data, never started by the game.",
  501: "A developer test encounter (obj_multiboss_controller_enemy1, obj_multiboss_controller_enemy2, obj_multiboss_controller_enemy3) - in the data, never started by the game.",
  777: "A developer test encounter (obj_baseenemy, obj_bullettester_enemy) - in the data, never started by the game.",
};
var BV = "rakuichi_buster_wip";
var BD = {
  220: "miniboss_new_section_idea_wip",
  222: "miniboss_new_section_idea_wip",
  223: "miniboss_new_section_idea_wip",
  224: "pink",
  225: "Flowerman_Arrangement",
  234: "inappropriate_recycling",
};
var BH = {
  220: [1, 0, 0],
};
var BT = {
  charweapon: {
    1: 53,
    2: 24,
    3: 25,
    4: 12,
  },
  maxhp: {
    1: 240,
    2: 290,
    3: 210,
    4: 90,
  },
  at: {
    1: 17,
    2: 22,
    3: 15,
    4: 3,
  },
  chararmor1: {
    1: 25,
    2: 25,
    3: 25,
    4: 14,
  },
  chararmor2: {
    1: 25,
    2: 25,
    3: 25,
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
    "2,2": 13,
    "3,0": 3,
    "3,1": 2,
    "3,2": 12,
  },
};
var Bl = {};
var Bd = {
  default: 0.7,
};
var Be = {};
Pf(5, {
  SCR: P2,
  OBJ: PB,
  startStats: BT,
});
function Bi() {
  return PC({
    ch: 5,
    cases: Bp,
    scr_encountersetup: WZ,
    scr_monstersetup: WY,
    ENC_BG: Wv,
    ENC_MUSIC: {
      ...WO,
      ...BD,
    },
    DEFAULT_MUSIC: BV || Wq,
    cut: Object.fromEntries(Object.entries(BG).map(([Bn, BX]) => [Number(Bn), BX])),
    verified: BK,
    party: Object.fromEntries(Object.entries(BH).map(([Bn, BX]) => [Number(Bn), BX])),
    room: Object.fromEntries(Object.entries(Bl).map(([Bn, BX]) => [Number(Bn), BX])),
    musiclevel: Bd,
    story: Be,
  });
}
WU(Bi, "buildFights");
export {
  Bp as CASES,
  BL as CHAPTER,
  BV as DEFAULT_SONG,
  BG as DEV,
  BD as ENC_MUSIC_FROM_EVENTS,
  Bd as MUSIC_LEVEL,
  BH as PARTY,
  Bl as ROOMS,
  BT as START_STATS,
  Be as STORY,
  BK as VERIFIED,
  Bi as buildFights,
};
