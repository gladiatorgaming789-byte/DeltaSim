import {
  a as V,
  d as B,
  f as t,
  h as s,
  j as H,
  l as K,
  m as X,
  n as Q,
  o as i,
  p as a,
  q as r,
} from "./c-66FIJ62A.js";
import { a as n, d as m } from "./c-F4ZSRAAO.js";
import { D as y, g as j } from "./c-O6GE5FYX.js";
import {
  Ja as J,
  c as P0,
  hb as P1,
  j as P2,
  m as P3,
  n as P4,
  o as P5,
  ob as P6,
  u as P7,
  zb as P8,
} from "./c-ZEHUSSXN.js";
import { a as P9, e as PP, l as PY } from "./c-7Q4J33FN.js";
PY();
var PE = {};
function Pz(PZ) {
  Object.assign(PE, PZ);
}
P9(Pz, "registerControllerTypes");
var Pe = class Pf extends B {
  create() {
    this.btimer = 99;
    this.timermax = 12;
    this.difficulty = 1;
    this.type = 1;
    this.joker = 0;
    this.side = 1;
    this.damage = 100;
    this.grazepoints = 1;
    this.timepoints = 1;
    this.inv = 60;
    this.grazed = 0;
    this.grazetimer = 0;
    this.target = 0;
    this.made = 0;
    this.special = 0;
    this.miny = 150;
    this.maxy = 280;
    let PZ = P6.first("obj_growtangle");
    if (PZ) {
      this.miny = PZ.y - PZ.sprite_height / 2;
      this.maxy = PZ.y + PZ.sprite_height / 2;
    }
    this.ratio = 1;
    if (y() === 2) {
      this.ratio = 1.6;
    }
    if (y() === 3) {
      this.ratio = 2.3;
    }
    this.visible = false;
  }
  step() {
    this.btimer++;
    let PZ = P6.first("obj_heart");
    let PL = P6.first("obj_battlesolid");
    let Pc = PL ? PL.x : 320;
    let PU = PL ? PL.y : 170;
    let Px = PE[this.type];
    if (Px) {
      Px(this, {
        heart: PZ,
        bs: PL,
        bsx: Pc,
        bsy: PU,
      });
      return;
    }
    if (this.type === 14 && this.btimer >= 10) {
      let PV = -20;
      if (this.side === 1) {
        PV = 660;
      }
      let PB = this.miny + P2(this.maxy - this.miny);
      let Pl = P8(PV, PB, t);
      Pl.sprite_index = "spr_smallbullet";
      Pl.hspeed = -8;
      Pl.damage = this.damage;
      Pl.target = this.target;
      if (this.side === 1) {
        Pl.direction = 180;
        Pl.image_angle = 180;
      }
      this.btimer = 0;
    }
    if (this.joker !== 1) {
      return;
    }
    let Pp = (PR) => {
      let Pg = P3(0, 1);
      let Pd = Pc;
      let Pt = Pg === 0 ? Pd - 180 - P2(100) : Pd + 180 + P2(100);
      let Ps = P8(Pt, -20, H);
      V(this, Ps);
      PR(Ps);
      this.btimer = 0;
    };
    if (this.type === 45 && this.btimer >= 18) {
      Pp((PR) => {
        if (PR.type === 2) {
          PR.type = P3(0, 1, 2, 3);
        }
      });
    }
    if (this.type === 46 && this.btimer >= 12) {
      Pp((PR) => {
        if (PR.type === 2) {
          PR.type = P3(0, 1, 2, 3);
        }
      });
    }
    if (this.type === 47 && this.btimer >= 12) {
      Pp((PR) => {
        PR.type = 1;
      });
    }
    if (this.type === 48 && this.btimer >= 12) {
      Pp((PR) => {
        PR.type = 0;
      });
    }
    if (this.type === 49 && this.btimer >= 20) {
      Pp((PR) => {
        PR.type = 2;
      });
    }
    if (this.type === 50 && this.btimer >= 12) {
      Pp((PR) => {
        PR.type = 3;
      });
    }
    if (this.type === 61 && this.btimer >= 40 && this.made === 0) {
      this.btimer = 0;
      this.made = 1;
      let PR = P2(300);
      for (let Pg = 0; Pg < 3; Pg++) {
        for (let Pd = 0; Pd < 3; Pd++) {
          let Pt = P8(Pc + 150, PU - 80 + Pd * 80, K);
          Pt.siner = Pg * 42;
          Pt.vsin = PR;
          Pt.image_index = 0;
          Pt.altmode = 2;
          Pt.sinspeed = 1.1;
          V(this, Pt);
          Pt = P8(Pc + 150, PU - 80 + Pd * 80, K);
          Pt.siner = Pg * 42 + 21;
          Pt.vsin = PR;
          Pt.image_index = 1;
          Pt.altmode = 1;
          Pt.sinspeed = 1.1;
          V(this, Pt);
          if (P7(P2(50)) === 1) {
            Pt.image_index = 2;
          }
        }
      }
    }
    if (this.type === 62 && this.btimer >= 40 && this.made === 0) {
      this.btimer = 0;
      this.made = 1;
      for (let Ps = 0; Ps < 3; Ps++) {
        for (let PH = 0; PH < 7; PH++) {
          let PN = P8(Pc + 150, PU - 80 + Ps * 80, K);
          PN.siner = PH * 18;
          PN.vsin = PH * 9;
          PN.sinspeed = 1.15;
          PN.altmode = 3;
          V(this, PN);
        }
      }
    }
    if (this.type === 65 && this.btimer >= 60) {
      let PC = P8(Pc, PU, X);
      PC.maxspade = 10;
      PC.grav = 0.4;
      V(this, PC);
      this.btimer = 0;
    }
    if (this.type === 68 && (PZ && (PZ.wspeed = 5), this.btimer >= 54)) {
      let PK = P8(Pc, PU, X);
      PK.side = P3(0, 1);
      PK.grav = 0.45;
      PK.maxspade = 10;
      V(this, PK);
      this.btimer = 0;
    }
    if (this.type === 70 && this.btimer >= 20 && j.turntimer >= 30) {
      let PX = P3(Pc - 100 - P2(100), Pc + 100 + P2(100));
      let PG = P3(PU - P2(100), PU + P2(100));
      let PQ = P8(PX, PG, Q);
      PQ.type = 1;
      V(this, PQ);
      PQ.active = 0;
      this.btimer = 0;
    }
    if (this.type === 71 && this.btimer >= 9 && j.turntimer >= 20) {
      let PW = P3(Pc - 100 - P2(100), Pc + 100 + P2(100));
      let Pi = P3(PU - P2(100), PU + P2(100));
      let Pb = P8(PW, Pi, Q);
      V(this, Pb);
      Pb.active = 0;
      this.btimer = 0;
    }
    if (this.type === 72 && this.btimer >= 18) {
      this.btimer = 0;
      let Pw = 0;
      if (this.side === 1) {
        Pw = P3(225, 315);
      }
      if (this.side === -1) {
        Pw = P3(45, 135);
      }
      let PT = 360;
      let Pq = P4(PT, Pw);
      let Pa = P5(PT, Pw);
      let Ph = PZ ? PZ.x : 310;
      let Pr = PZ ? PZ.y : 160;
      let Pn = P8(Ph + 8 + Pq, Pr + 8 + Pa, i);
      Pn.direction = Pw + 180;
      Pn.speed = 20;
      Pn.friction = 1;
      Pn.type = 2;
      Pn.damage = this.damage;
      Pn.target = this.target;
      Pn.image_angle = Pn.direction;
      this.side = this.side === 1 ? -1 : 1;
    }
    if (this.type === 73 && this.btimer >= 4) {
      this.btimer = 0;
      let PA = -100 + P2(200);
      if (P3(0, 1, 2, 3) === 3) {
        PA = -10 + P2(20);
      }
      if (PL && PZ) {
        let PS = P8(PZ.x + 8 + PA, PU + 100, s);
        PS.type = 1;
        PS.damage = this.damage;
        PS.target = this.target;
        PS.timepoints = 2;
      }
    }
    if (this.type === 74 && this.btimer >= 9) {
      this.btimer = 0;
      let Pm = (140 + P2(40)) * this.side;
      let Py = -100 + P2(200);
      if (P3(0, 1, 2, 3) === 3) {
        Py = -10 + P2(20);
      }
      if (PZ) {
        let PD = P8(PZ.x + 8 + Py, PZ.y + 8 + Pm, s);
        PD.grazepoints = 12;
        PD.timepoints = 2;
        PD.damage = this.damage;
        PD.target = this.target;
      }
    }
    if ((this.type === 75 || this.type === 76) && this.btimer >= 0 && this.special === 0) {
      J("snd_spearappear");
      P8(0, 0, a);
      P6.with("obj_centerscythe", (PM) => {
        PM.damage = this.damage;
        PM.grazepoints = this.grazepoints;
        PM.timepoints = this.timepoints;
        PM.inv = this.inv;
        PM.target = this.target;
        PM.grazed = 0;
        PM.grazetimer = 0;
      });
      this.special = 1;
    }
    if (this.type === 77) {
      this.finalChaos(PZ, PL);
    }
  }
  finalChaos(PZ, PL) {
    j.sp = 10;
    if (PZ) {
      PZ.wspeed = 10;
    }
    if (this.special === 0) {
      J("snd_joker_byebye");
      this.prevmake = 0;
      this.special = 1;
      this.rank = 16;
      this.realtimer = 0;
      this.chase = 0;
      this.made = 0;
      this.amount = 0;
      this.jokertimer = 0;
      this.darkfader = m(320, -10, "spr_tallpx");
      Object.assign(this.darkfader, {
        depth: 2,
        image_alpha: 0,
        image_blend: P0.black,
        image_xscale: 200,
        image_yscale: 2,
      });
    }
    let Pc = this.realtimer;
    if (Pc >= 0 && Pc < 10) {
      this.darkfader.image_alpha += 0.1;
      P6.with("obj_battlesolid", (PU) => {
        PU.image_alpha -= 0.1;
      });
      if (PZ) {
        PZ.y += 16;
        PZ.boundaryup = 160;
      }
    }
    if (Pc === 10) {
      P6.with("obj_battlesolid", (PU) => PU.instance_destroy());
    }
    if (Pc === 20) {
      P8(40, -60, r);
    }
    if (Pc === 40) {
      P8(570, -60, r);
    }
    if (Pc >= 60 && this.amount < 30 && this.btimer >= this.rank) {
      if (this.rank > 7) {
        this.rank--;
      }
      let PU = P7(P2(5));
      if (PU === this.prevmake) {
        PU = P7(P2(5));
      }
      if (this.chase === 3) {
        PU = P7(((PZ ? PZ.x : 320) + 8) / 90);
        this.chase = 0;
      }
      P8(40 + PU * 90, -60, r);
      if (PU === 1) {
        P8(490, -60, r);
      }
      if (PU === 0) {
        P8(580, -60, r);
      }
      this.prevmake = PU;
      this.btimer = 0;
      this.chase++;
      this.amount++;
    }
    if (this.amount >= 29 - this.made && this.special === 1) {
      this.jokertimer = 0;
      let Px = P8(320, 100, Q);
      Px.type = 66;
      Px.depth = -30;
      this.special = 2;
    }
    if (this.special === 2) {
      this.jokertimer++;
      let Pp = this.jokertimer;
      if (Pp === 10) {
        J("snd_joker_neochaos");
      }
      if (Pp === 40 || Pp === 98) {
        P8(40, -60, r);
        P8(580, -60, r);
      }
      if (Pp === 46 || Pp === 86) {
        P8(130, -60, r);
        P8(490, -60, r);
      }
      if (Pp === 52 || Pp === 80) {
        P8(220, -60, r);
        P8(400, -60, r);
      }
      if (Pp === 66 || Pp === 98) {
        P8(310, -60, r);
      }
      if (Pp === 130) {
        let PV = P8(320, -320, r);
        this.lastscythe = PV;
        this.vol = 0;
        this.rumnoise = J("snd_rumble", {
          volume: 0,
        });
        Object.assign(PV, {
          vspeed: 1,
          gravity: 0.02,
          image_xscale: 16,
          image_yscale: 16,
          scale: 16,
          rotspeed: 0,
          remrot: 160,
          image_angle: 160,
        });
        let PB = P8(320, -40, n);
        PB.sprite_index = "spr_tallpx";
        PB.image_xscale = 400;
        PB.image_yscale = 2;
        PB.depth = -100;
        PB.image_alpha = -0.3;
        this.fadewhite = PB;
      }
      if (Pp >= 131) {
        let Pl = this.lastscythe;
        let PR = this.fadewhite;
        if (Pl && !Pl.destroyed) {
          Pl.x = Pl.xstart + P2(8);
        }
        PR.image_alpha += 0.01;
        this.vol += 0.01;
        if (this.rumnoise) {
          this.rumnoise.volume = Math.min(1, this.vol);
        }
        if (PR.image_alpha >= 1) {
          if (this.darkfader && !this.darkfader.destroyed) {
            this.darkfader.instance_destroy();
          }
          if (Pl && !Pl.destroyed) {
            Pl.instance_destroy();
          }
        }
        if (PR.image_alpha >= 1.3) {
          this.special = 3;
        }
      }
    }
    if (this.special === 3) {
      if (PZ) {
        PZ.x = 320;
        PZ.y = 120;
      }
      this.vol -= 0.1;
      if (this.rumnoise) {
        this.rumnoise.volume = Math.max(0, Math.min(1, this.vol));
      }
      this.fadewhite.image_alpha -= 0.1;
      if (this.fadewhite.image_alpha <= 0) {
        if (this.rumnoise) {
          this.rumnoise.pause();
        }
        j.turntimer = 11;
        this.special = 4;
      }
    }
    this.realtimer++;
  }
  destroy() {
    if (this.rumnoise) {
      this.rumnoise.pause();
    }
    if (this.fadewhite && !this.fadewhite.destroyed) {
      this.fadewhite.instance_destroy();
    }
    if (this.darkfader && !this.darkfader.destroyed) {
      this.darkfader.instance_destroy();
    }
  }
};
P9(Pe, "obj_dbulletcontroller");
PP(Pe, "kinds", P1("obj_dbulletcontroller", B));
PP(Pe, "defaultDepth", 0);
var PF = Pe;
export { PE as a, Pz as b, PF as c };
