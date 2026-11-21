import { b as s } from "./c-F4ZSRAAO.js";
import { L as a, O as n, P as F0, g as F1 } from "./c-O6GE5FYX.js";
import {
  Ja as F2,
  c as F3,
  gb as F4,
  hb as F5,
  j as F6,
  m as F7,
  n as F8,
  o as F9,
  ob as FF,
  p as Fi,
  t as Fj,
  va as FW,
  w as Ff,
  x as Fb,
  zb as FB,
} from "./c-ZEHUSSXN.js";
import { a as FN, e, l as Fh } from "./c-7Q4J33FN.js";
Fh();
function Fp(FO, FU) {
  if (!!FU && !FU.destroyed) {
    if (F1.chapter >= 2) {
      if (FO.damage !== -1) {
        FU.damage = FO.damage;
      }
      if (FO.grazepoints !== -1) {
        FU.grazepoints = FO.grazepoints;
      }
      if (FO.timepoints !== -1) {
        FU.timepoints = FO.timepoints;
      }
      if (FO.inv !== -1) {
        FU.inv = FO.inv;
      }
      if (FO.target !== -1) {
        FU.target = FO.target;
      }
      if (FO.grazed !== -1) {
        FU.grazed = 0;
      }
      if (FO.grazetimer !== -1) {
        FU.grazetimer = 0;
      }
      FU.element = FO.element;
      if (F1.chapter >= 5 && FO.constructor && FO.constructor.name === "obj_dbulletcontroller") {
        FU.creatorid = FO.creatorid;
        FU.creator = FO.creator;
      }
      return;
    }
    FU.damage = FO.damage;
    FU.grazepoints = FO.grazepoints;
    FU.timepoints = FO.timepoints;
    FU.inv = FO.inv;
    FU.target = FO.target;
    FU.grazed = 0;
    FU.grazetimer = 0;
    if (FO.element !== undefined) {
      FU.element = FO.element;
    }
  }
}
FN(Fp, "scr_bullet_inherit");
function Fe(FO, FU) {
  Fg(FO, FU);
}
FN(Fe, "applyBulletDamage");
function Fg(FO, FU) {
  if (F1.chapter >= 2 && (FU ? a.scr_damage_all : a.scr_damage)) {
    if (F1.inv < 0 && (F1.debugInv || FW.invuln)) {
      F1.inv = F1.invc * 40;
      return;
    }
    (FU ? a.scr_damage_all : a.scr_damage).call(FO);
    return;
  }
  (FU ? F0 : n)(FO);
}
FN(Fg, "bulletDamage");
var FX = class Fa extends F4 {};
FN(FX, "obj_bulletparent");
e(FX, "kinds", F5("obj_bulletparent", F4));
e(FX, "defaultDepth", 0);
var Fc = FX;
var FT = class FY extends F4 {};
FN(FT, "obj_bulletgenparent");
e(FT, "kinds", F5("obj_bulletgenparent", F4));
var Fz = FT;
var Fx = class FH extends Fc {
  constructor() {
    super();
    this.active = 0;
    this.damage = 0;
    this.target = 0;
    this.grazed = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.grazetimer = 0;
    this.destroyonhit = 1;
    this.element = 0;
  }
  userEvent(FO) {
    if (FO === 5 && this.active === 1) {
      if (F1.chapter === 5) {
        FF.with("obj_aqua_enemy", (FU) => {
          if (FU.fight_type === "solo") {
            if (FU.myattackchoice === 0) {
              FU.attack_chain_hits++;
            }
            if (FU.myattackchoice === 1) {
              FU.attack_fan_hits++;
            }
            if (FU.myattackchoice === 2) {
              FU.attack_petal_hits++;
            }
            if (FU.myattackchoice === 3) {
              FU.attack_omega_hits++;
            }
          }
          if (FU.fight_type === "seth") {
            FU.phasehit = 1;
          }
        });
      }
      Fg(this, this.target === 3);
      if (F1.chapter < 2 || this.destroyonhit === 1) {
        this.instance_destroy();
      }
    }
  }
};
FN(Fx, "obj_collidebullet");
e(Fx, "kinds", F5("obj_collidebullet", Fc));
e(Fx, "defaultDepth", 0);
var FZ = Fx;
var FG = class Fn extends FZ {
  create() {
    if (F1.chapter >= 2) {
      this.scr_bullet_init();
      this.spin = 0;
      this.spinspeed = 0;
      this.image_alpha = 1;
      if (!FF.exists("obj_heart")) {
        this.instance_destroy();
      }
      this.wall_destroy = 1;
      this.bottomfade = 0;
      if (F1.chapter >= 5) {
        this.anglechange = 0;
      }
      return;
    }
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 5;
    this.target = 0;
    this.dont = 1;
    this.inv = 60;
    this.damage = 124;
    this.active = 1;
    this.spec = 0;
    this.image_alpha = 1;
    this.wall_destroy = 1;
    if (!FF.exists("obj_heart")) {
      this.instance_destroy();
    }
  }
  scr_bullet_init() {
    this.grazed = 0;
    this.grazetimer = 0;
    this.destroyonhit = 1;
    this.target = 0;
    this.inv = 60;
    this.damage = 10;
    this.element = 0;
    this.grazepoints = 1;
    this.timepoints = 1;
    this.active = 1;
    this.updateimageangle = 0;
  }
  step() {
    if (F1.chapter >= 2) {
      if (
        this.wall_destroy === 1 &&
        (this.x < -80 || this.x > 760 || this.y < -80 || this.y > 580)
      ) {
        this.instance_destroy();
      }
      if (this.updateimageangle === 1) {
        this.image_angle = this.direction;
      }
      if (this.spin === 1) {
        this.image_angle += this.spinspeed;
      }
      if (F1.chapter >= 5 && this.anglechange) {
        this.direction += this.anglechange;
      }
      if (this.bottomfade !== 0 && this.bottomfade !== undefined && this.y > this.bottomfade) {
        this.image_alpha *= 0.8;
      }
      return;
    }
    if (this.wall_destroy === 1 && (this.x < -40 || this.x > 680 || this.y < -40 || this.y > 520)) {
      this.instance_destroy();
    }
  }
};
FN(FG, "obj_regularbullet");
e(FG, "kinds", F5("obj_regularbullet", FZ));
e(FG, "defaultDepth", -10);
var FD = FG;
var Fk = class FQ extends FD {
  userEvent(FO) {
    if (FO === 5 && this.active === 1) {
      Fg(this, this.target === 3);
    }
  }
};
FN(Fk, "obj_regularbullet_permanent");
e(Fk, "kinds", F5("obj_regularbullet_permanent", FD));
e(Fk, "defaultDepth", 0);
var FS = Fk;
var FJ = class i0 extends FZ {
  create() {
    if (this.y < 20) {
      this.y = 20;
    }
    if (this.y > 460) {
      this.y = 460;
    }
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 5;
    this.target = 0;
    this.dont = 1;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.image_alpha = 0;
    if (!FF.exists("obj_heart")) {
      this.instance_destroy();
    }
    this.type = 0;
  }
  draw(FO) {
    if (this.dont === 0) {
      if (this.active === 0) {
        FO.draw_sprite_ext(
          this.sprite_index,
          0,
          this.x,
          this.y,
          3 - this.image_alpha * 2,
          3 - this.image_alpha * 2,
          0,
          F3.white,
          this.image_alpha,
        );
        if (this.image_alpha < 1) {
          this.image_alpha += 0.1;
          if (this.type === 1) {
            this.vspeed = 3;
            this.gravity = -0.5;
          }
        } else {
          if (this.type === 0) {
            let FU = FF.first("obj_heart");
            if (FU && FU.y + 8 < this.y) {
              this.vspeed = 1;
              this.gravity = -0.2;
            } else {
              this.vspeed = -2;
              this.gravity = 1;
            }
          }
          this.active = 1;
        }
      }
      FO.draw_sprite_ext(
        this.sprite_index,
        0,
        this.x,
        this.y,
        2 - this.image_alpha,
        2 - this.image_alpha,
        0,
        F3.white,
        this.image_alpha,
      );
      if (this.type === 0 && this.speed > 8) {
        this.speed = 8;
      }
      if (this.y > 500) {
        this.instance_destroy();
      }
      if (this.y < -20) {
        this.instance_destroy();
      }
    }
    this.dont = 0;
  }
};
FN(FJ, "obj_dbullet_vert");
e(FJ, "kinds", F5("obj_dbullet_vert", FZ));
e(FJ, "defaultDepth", -1);
e(FJ, "defaultSprite", "spr_diamondbullet_vert");
var Fw = FJ;
var Fo = class i1 extends Fc {
  create() {
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 5;
    this.target = 0;
    this.dont = 1;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.image_alpha = 0;
    let FO = FF.first("obj_heart");
    if (FO) {
      this.futuredir = Fi(this.x, this.y, FO.x + 8, FO.y + 8);
    } else {
      this.instance_destroy();
    }
  }
  draw(FO) {
    if (this.dont === 0) {
      let FU = FF.first("obj_heart");
      if (this.active === 0) {
        if (FU) {
          this.futuredir = Fi(this.x, this.y, FU.x + 8, FU.y + 8);
        }
        FO.draw_sprite_ext(
          "spr_diamondbullet_form",
          0,
          this.x,
          this.y,
          3 - this.image_alpha * 2,
          3 - this.image_alpha * 2,
          this.futuredir,
          F3.white,
          1 - this.image_alpha,
        );
        if (this.image_alpha < 1) {
          this.image_alpha += 0.1;
        } else {
          if (FU) {
            this.move_towards_point(FU.x + 8, FU.y + 8, 2);
          }
          this.futuredir = this.direction;
          this.active = 1;
          this.speed = 0;
        }
      }
      FO.draw_sprite_ext(
        this.sprite_index,
        0,
        this.x,
        this.y,
        2 - this.image_alpha,
        2 - this.image_alpha,
        this.futuredir,
        F3.white,
        this.image_alpha,
      );
      if (this.active === 1) {
        this.activetimer++;
        if (this.activetimer >= 5 && this.times < this.difficulty) {
          let Fq = FB(this.x, this.y, FD);
          if (!Fq.destroyed) {
            if (F1.chapter >= 2) {
              Fq.grazepoints = this.grazepoints;
            }
            Fq.damage = this.damage;
            Fq.target = this.target;
            Fq.sprite_index = "spr_diamondbullet";
            Fq.direction = this.futuredir;
            Fq.speed = 6;
            Fq.image_angle = Fq.direction;
          }
          this.times++;
          this.activetimer = 0;
        }
        if (this.activetimer >= 5 && this.times >= this.difficulty) {
          this.image_alpha -= 0.2;
          if (this.image_alpha <= 0) {
            this.instance_destroy();
          }
        }
      }
    }
    this.dont = 0;
  }
};
FN(Fo, "obj_dbullet_maker");
e(Fo, "kinds", F5("obj_dbullet_maker", Fc));
e(Fo, "defaultDepth", -20);
e(Fo, "defaultSprite", "spr_diamondbullet_form");
var Fm = Fo;
var Fr = class i2 extends Fc {
  constructor() {
    super();
    this.damage = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.target = 0;
    this.grazed = 0;
    this.grazetimer = 0;
  }
  create() {
    this.visible = false;
    this.type = F7(0, 1, 2, 3);
    this.y = -80;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.con = 0;
    this.timer = 0;
    this.image_speed = 0;
    this.vspeed = 10;
    this.maxtimer = 20 + F6(16);
    this.explodedraw = 0;
  }
  step() {
    let FO = FF.first("obj_joker");
    if (this.con === 0) {
      this.sprite_index = ["spr_bomb_spade", "spr_bomb_diamond", "spr_bomb_heart", "spr_bomb_club"][
        this.type
      ];
      this.visible = true;
      this.con = 1;
    }
    if (this.con === 1) {
      this.timer++;
      if (this.timer >= 10) {
        if (FO) {
          FO.beepnoise = 1;
        }
        this.image_speed = this.timer / this.maxtimer;
      }
      if (this.timer >= this.maxtimer) {
        this.con = 2;
        this.timer = 0;
        this.speed = 0;
      }
    }
    if (this.con === 2) {
      if (FO) {
        FO.burstnoise = 1;
      }
      let FU = FF.first("obj_heart");
      let Fq = FU ? FU.x + 8 : 320;
      let FK = FU ? FU.y + 8 : 170;
      if (this.type === 0) {
        let FL = F6(360);
        let i3 = 12;
        for (let i4 = 0; i4 < 12; i4++) {
          let i5 = FB(this.x, this.y, FD);
          Fp(this, i5);
          i5.active = 1;
          i5.direction = FL + i4 * (360 / i3);
          i5.speed = 8;
          i5.image_angle = i5.direction;
          i5.sprite_index = "spr_spadebullet";
        }
        this.con = 3;
      }
      if (this.type === 1) {
        for (let i6 = 0; i6 < 3; i6++) {
          let i7 = FB(this.x, this.y, FD);
          i7.damage = 100;
          Fp(this, i7);
          i7.move_towards_point(Fq, FK, 11);
          i7.speed -= i6;
          i7.image_angle = i7.direction;
          i7.sprite_index = "spr_diamondbullet";
        }
        this.con = 3;
      }
      if (this.type === 2) {
        let i8 = FB(this.x, this.y, Ft);
        Fp(this, i8);
        this.con = 3;
      }
      if (this.type === 3) {
        let i9 = Fi(this.x, this.y, Fq, FK);
        for (let iF = 0; iF < 3; iF++) {
          let ij = FB(this.x, this.y, FD);
          ij.sprite_index = "spr_clubsbullet";
          ij.damage = 100;
          Fp(this, ij);
          ij.active = 1;
          ij.direction = i9 - 20 + iF * 20;
          ij.image_angle = ij.direction;
          ij.speed = 8;
        }
        this.con = 3;
      }
    }
    if (this.explodedraw >= 40) {
      this.instance_destroy();
    }
  }
  draw(FO) {
    if (this.con < 2) {
      this.draw_self(FO);
    }
    if (this.con >= 2) {
      this.explodedraw++;
      FO.draw_set_color(F3.white);
      FO.draw_set_alpha(Math.max(0, 1.5 - this.explodedraw / 10));
      FO.draw_circle(this.x, this.y, this.sprite_width / 2 + this.explodedraw * 2, false);
      FO.draw_set_alpha(1);
    }
  }
};
FN(Fr, "obj_suitbomb");
e(Fr, "kinds", F5("obj_suitbomb", Fc));
e(Fr, "defaultDepth", 0);
e(Fr, "defaultSprite", "spr_suitsbomb");
var Fy = Fr;
var FR = class iW extends Fc {
  constructor() {
    super();
    this.damage = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.target = 0;
  }
  create() {
    this.made = 0;
    this.active = 0;
    this.pausetimer = 0;
    this.con = 0;
    this.siner = 0;
    this.maxlength = 0;
    this.visible = false;
    this.son = [];
  }
  step() {
    if (this.made === 0) {
      for (let FO = 0; FO < 4; FO++) {
        let FU = FB(this.x, this.y, FD);
        FU.sprite_index = "spr_heartbullet";
        Fp(this, FU);
        this.son[FO] = FU;
      }
      this.made = 1;
    }
    this.pausetimer++;
    if (this.pausetimer >= 10 && this.con === 0) {
      let Fq = FF.first("obj_heart");
      this.move_towards_point(Fq ? Fq.x + 8 : 320, Fq ? Fq.y + 8 : 170, 7);
      this.con = 1;
    }
    this.siner++;
    if (this.maxlength < 40) {
      this.maxlength += 4;
    }
    for (let FK = 0; FK < 4; FK++) {
      let FL = this.son[FK];
      if (FL && !FL.destroyed) {
        FL.x = this.x + F8(this.maxlength, this.siner * 3 + FK * 90);
        FL.y = this.y + F9(this.maxlength, this.siner * 3 + FK * 90);
      }
    }
    if (this.x < -200 || this.x > 900 || this.y < -200 || this.y > 700) {
      this.instance_destroy();
    }
  }
};
FN(FR, "obj_heartbomb_blast");
e(FR, "kinds", F5("obj_heartbomb_blast", Fc));
e(FR, "defaultDepth", 0);
var Ft = FR;
var FI = class ib extends FS {
  create() {
    this.siner = 0;
    this.siner2 = 0;
    this.t = 0;
    this.hspeed = 6;
    this.sinspeed = 1;
    this.altmode = 0;
    this.altsin = 0;
    this.timer = 0;
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 10;
    this.timepoints = 10;
    this.target = 0;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_alpha = 0;
    this.image_speed = 0;
    this.type = 0;
    this.con = 0;
    this.vsin = 0;
    this.wall_destroy = 0;
  }
  step() {
    if (this.t <= 25) {
      this.image_alpha += 0.04;
    }
    if (this.t === 25) {
      this.active = 1;
    }
    if (this.t === 0) {
      this.maxspeed = Math.abs(this.hspeed);
      this.hspeed = 0;
    }
    this.t++;
    this.siner += this.sinspeed;
    let FO = Ff((this.siner - 1) / 20);
    let FU = Ff(this.siner / 20);
    let Fq = FU - FO;
    let FK = FF.first("obj_battlesolid");
    let FL = FK ? FK.x : 320;
    this.x = FL - FU * 150;
    this.image_xscale = Fq * 50;
    if (this.image_xscale > 2) {
      this.image_xscale = 2;
    }
    if (this.image_xscale < -2) {
      this.image_xscale = -2;
    }
    if (Fq > 0) {
      this.depth = 21;
      this.active = 0;
      this.image_blend = F3.gray;
    }
    if (Fq < 0) {
      this.depth = 0;
      if (this.image_alpha >= 1) {
        this.active = 1;
      }
      this.image_blend = F3.white;
    }
    this.vsin++;
    if (this.altmode === 0 || this.altmode === 2 || this.altmode === 3) {
      this.y += Ff(this.vsin / 10) * 3.5;
    }
    if (this.altmode === 1) {
      this.y -= Ff(this.vsin / 10) * 3.5;
    }
  }
};
FN(FI, "obj_carouselbullet");
e(FI, "kinds", F5("obj_carouselbullet", FS));
e(FI, "defaultDepth", 0);
e(FI, "defaultSprite", "spr_carousel");
var FP = FI;
var FE = class iB extends Fc {
  constructor() {
    super();
    this.damage = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.target = 0;
  }
  create() {
    this.visible = false;
    this.ringno = 0;
    this.maxspade = 8;
    this.t = 0;
    this.con = 0;
    this.startspade = 0;
    this.spadet = 0;
    this.startang = F6(360);
    this.grav = 0.2;
    this.size = 1;
    this.special = 0;
    this.side = 0;
    this.spade = [];
  }
  step() {
    let FO = FF.first("obj_battlesolid");
    let FU = FO ? FO.x : 320;
    let Fq = FO ? FO.y : 170;
    if (this.t === 0) {
      if (this.size > 1) {
        this.startang = -F6(180);
      }
      for (let FK = 0; FK < this.maxspade; FK++) {
        let FL = (360 / this.maxspade) * FK + this.startang;
        if (this.side === 1) {
          FL = -FL;
        }
        let i3 = F8(300, FL + 180);
        let i4 = F9(300, FL + 180);
        let i5 = FB(i3 + FU, i4 + Fq, FZ);
        Fp(this, i5);
        i5.sprite_index = "spr_spadebullet";
        i5.image_alpha = 0;
        i5.active = 1;
        i5.image_blend = F3.ltgray;
        i5.direction = FL;
        i5.image_angle = FL;
        i5.speed = 26;
        i5.image_xscale = this.size;
        i5.image_yscale = this.size;
        this.spade[FK] = i5;
      }
    }
    if (this.t >= 1 && this.t < 15) {
      for (let i6 of this.spade) {
        if (!i6.destroyed) {
          i6.speed *= 0.87;
          i6.image_alpha += 0.1;
        }
      }
    }
    if (this.t === 15) {
      for (let i7 of this.spade) {
        if (!i7.destroyed) {
          i7.speed = 0;
          i7.image_alpha += 0.1;
        }
      }
    }
    if (
      this.t >= 15 &&
      this.con === 0 &&
      (this.spadet++, this.special === 1 && (this.spadet += 6), this.spadet >= 4)
    ) {
      let i8 = this.spade[this.startspade];
      if (i8 && !i8.destroyed) {
        i8.image_blend = F3.white;
        i8.gravity_direction = i8.direction;
        i8.speed = -3.4;
        i8.gravity = this.grav;
      }
      this.startspade++;
      if (this.startspade >= this.maxspade) {
        this.con = 1;
        this.instance_destroy();
      }
      this.spadet = 0;
    }
    this.t++;
  }
};
FN(FE, "obj_spadering");
e(FE, "kinds", F5("obj_spadering", Fc));
e(FE, "defaultDepth", 0);
var Fu = FE;
var FM = class iN extends Fc {
  create() {
    this.fire = 0;
    this.special = 0;
    this.con = 0;
    this.image_xscale = 0;
    this.image_speed = 0;
    this.timer = 0;
    this.image_yscale = 2;
    this.type = 0;
    this.damage = 100;
    this.grazed = 0;
    this.grazepoints = 4;
    this.timepoints = 2;
    this.inv = 60;
    this.grazetimer = 0;
    this.target = 0;
    this.sndcon = 0;
    if (this.x < 320) {
      this.sprite_index = "spr_joker_teleport_r";
    }
  }
  step() {
    let FO = FF.first("obj_heart");
    if (this.con === 0) {
      if (this.sndcon === 0) {
        F2("snd_swing");
        this.sndcon = 1;
      }
      this.image_index = 0;
      if (this.image_xscale < 2) {
        this.image_xscale += 0.4;
      } else {
        this.image_xscale = 2;
        this.con = 1;
        this.timer = 0;
      }
    }
    if (this.con === 1 && (this.timer++, this.timer >= 8)) {
      if (this.sndcon === 1 && this.type < 3) {
        F2("snd_joker_oh");
        this.sndcon = 2;
      }
      this.image_index = 1;
      this.con = 2;
      this.timer = 0;
      if (this.type === 0) {
        let FU = FB(this.x, this.y, FZ);
        FU.sprite_index = "spr_diamondbullet";
        FU.active = 1;
        Fp(this, FU);
        FU.move_towards_point(FO ? FO.x + 10 : 320, FO ? FO.y + 10 : 170, 8);
        FU.image_angle = FU.direction;
        FU.image_xscale = 0.7;
        FU.image_yscale = 0.7;
      }
      if (this.type === 1) {
        for (let Fq = 0; Fq < 5; Fq++) {
          let FK = FB(this.x, this.y, FZ);
          FK.sprite_index = "spr_spadebullet";
          FK.active = 1;
          FK.offset = Fq * 18;
          Fp(this, FK);
          FK.move_towards_point(FO ? FO.x + 10 : 320, FO ? FO.y + 10 : 170, 4.5);
          FK.direction = FK.direction - 36 + FK.offset;
          FK.image_angle = FK.direction;
          FK.image_xscale = 0.4;
          FK.image_yscale = 0.4;
        }
      }
    }
    if (this.con === 2) {
      this.timer++;
      if (this.timer >= 10) {
        this.con = 4;
        this.timer = 0;
      }
    }
    if (this.con === 4) {
      if (this.sndcon === 2) {
        F2("snd_swing");
        this.sndcon = 3;
      }
      if (this.image_xscale > 0) {
        this.image_xscale -= 0.4;
        this.image_yscale += 0.2;
      } else {
        this.image_xscale = 0;
        this.con = 0;
        this.instance_destroy();
      }
    }
  }
};
FN(FM, "obj_joker_teleport");
e(FM, "kinds", F5("obj_joker_teleport", Fc));
e(FM, "defaultDepth", 5);
e(FM, "defaultSprite", "spr_joker_teleport");
var FA = FM;
var Fd = class ih extends Fc {
  create() {
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 1;
    this.timepoints = 1;
    this.target = 0;
    this.dont = 1;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.dtimer = 0;
    this.type = 0;
    this.initangle = 0;
  }
  step() {
    this.dtimer++;
    let FO = FF.first("obj_heart");
    if (this.type === 2) {
      if (this.dtimer === 20 || this.dtimer === 22 || this.dtimer === 24) {
        this.move_towards_point(FO ? FO.x + 8 : 320, FO ? FO.y + 8 : 170, 0.1);
        let FU = (Fq, FK) => {
          let FL = FB(this.x, this.y, FD);
          if (!FL.destroyed) {
            FL.sprite_index = Fq;
            FL.direction = this.direction + FK - 2 + this.initangle;
            FL.speed = 5;
            FL.image_angle = this.direction;
            Fp(this, FL);
          }
        };
        FU("spr_clubsball_b", 0);
        FU("spr_clubsball_c", -19);
        FU("spr_clubsball_a", 19);
        this.initangle += 2;
      }
      if (this.dtimer === 26) {
        let Fq = FB(this.x, this.y, s);
        Fq.sprite_index = this.sprite_index;
        Fq.image_angle = this.image_angle;
        Fq.fadespeed = 0.04;
        this.instance_destroy();
      }
    }
  }
};
FN(Fd, "obj_clubsbullet_dark");
e(Fd, "kinds", F5("obj_clubsbullet_dark", Fc));
e(Fd, "defaultDepth", -10);
e(Fd, "defaultSprite", "spr_clubsbullet_dark");
var Fv = Fd;
var Fl = class ip extends FS {
  create() {
    this.grazed = 0;
    this.grazepoints = 3;
    this.timepoints = 2;
    this.target = 0;
    this.inv = 120;
    this.damage = 124;
    this.grazetimer = 0;
    this.active = 0;
    this.image_alpha = 0;
    this.image_xscale = 1;
    this.image_yscale = 1;
    this.rotspeed = 0;
    this.insanity = 1;
    this.chasecon = 1;
    this.chasetimer = 0;
    this.centerx = 320;
    this.centery = 120;
    let FO = FF.first("obj_battlesolid");
    if (FO) {
      this.centerx = FO.x;
      this.centery = FO.y;
    }
    this.radius = 150;
    this.sine = 0;
    this.sinespeed = 1.4;
    this.dir = F6(70);
    this.dirspeed = F7(1, -1) * 1.5;
    this.un = 0;
    this.scythetimer = -5;
    this.scythesidex = 1;
    this.swingnoise = 0;
    this.noisebuffer = 0;
    this.type = 0;
    let FU = FF.first("obj_dbulletcontroller");
    if (FU && FU.type === 76) {
      this.type = 1;
    }
    this.king = 0;
    if (this.type === 1) {
      this.insanity = 0;
      this.sinespeed = 1.3;
      this.scythesidex = F7(1, -1);
    }
    if (FF.number("obj_centerscythe") === 1) {
      this.king = 1;
      this.x = this.centerx - this.radius;
      this.y = this.centery;
      let Fq = FB(this.centerx + this.radius, this.centery, ip);
      Fq.sine = 0;
      Fq.dir = 180;
      Fq.un = 1;
      let FK = FB(this.centerx, this.centery - this.radius, ip);
      FK.sine = 0;
      FK.dir = 90;
      FK.un = 0;
      let FL = FB(this.centerx, this.centery + this.radius, ip);
      FL.sine = 0;
      FL.dir = 270;
      FL.un = 1;
      let i3 = this.dir;
      FF.with("obj_centerscythe", (i4) => {
        i4.mydir = i3;
        i4.sinespeed = this.sinespeed;
        i4.dirspeed = this.dirspeed;
        i4.insanity = this.insanity;
      });
      FF.with("obj_centerscythe", (i4) => {
        if (i4.dir !== i4.mydir) {
          i4.dir += i4.mydir;
        }
        i4.x = i4.centerx - F8(i4.radius, i4.dir);
        i4.y = i4.centery - F9(i4.radius, i4.dir);
      });
    }
    this.wall_destroy = 0;
  }
  step() {
    if (this.chasecon === 1) {
      this.image_alpha += 0.04;
      if (this.image_alpha >= 1) {
        this.image_alpha = 1;
        this.chasecon = 2;
        this.active = 1;
      }
    }
    if (this.chasecon === 2) {
      if (this.un === 0 && this.rotspeed <= 10) {
        this.rotspeed++;
      }
      if (this.un === 1 && this.rotspeed >= -10) {
        this.rotspeed--;
      }
      this.sine += this.sinespeed;
      this.dir += this.dirspeed;
      if (this.insanity === 1) {
        if (this.dirspeed > 0 && this.dirspeed < 3) {
          this.dirspeed += 0.01;
        }
        if (this.dirspeed < 0 && this.dirspeed > -3) {
          this.dirspeed -= 0.01;
        }
      }
      let FO = Fb(this.sine / 18) * this.radius;
      this.x = this.centerx - F8(FO, this.dir);
      this.y = this.centery - F9(FO, this.dir);
      if (this.king === 1) {
        this.noisebuffer--;
        if (Math.abs(FO) <= 8 && this.noisebuffer < 0) {
          F2("snd_swing");
          this.noisebuffer = 10;
        }
      }
    }
    if (this.king === 1 && this.type === 1) {
      this.scythetimer++;
      if (this.scythetimer === 60) {
        F2("snd_spearappear");
        let Fq = FB(
          this.centerx + this.radius * this.scythesidex,
          this.centery + this.scythesidex * 60,
          FZ,
        );
        Fq.image_xscale = 2;
        Fq.image_yscale = 2;
        Fq.image_alpha = 0;
        Fq.sprite_index = "spr_joker_scythebody";
        Fq.mask_index = "spr_joker_scythebody_mask";
        Fq.image_blend = F3.red;
        Fq.active = 1;
        Fp(this, Fq);
        this.sbul = Fq;
      }
      let FU = this.sbul;
      if (this.scythetimer >= 60 && this.scythetimer < 70 && FU && !FU.destroyed) {
        FU.image_angle += this.scythesidex * 10;
        FU.image_alpha += 0.1;
      }
      if (this.scythetimer >= 85 && this.scythetimer < 90 && FU && !FU.destroyed) {
        FU.hspeed -= this.scythesidex * 3;
      }
      if (this.scythetimer >= 100 && this.scythetimer < 105 && FU && !FU.destroyed) {
        FU.image_alpha -= 0.2;
      }
      if (this.scythetimer >= 105) {
        if (FU && !FU.destroyed) {
          FU.instance_destroy();
        }
        this.scythesidex = this.scythesidex === -1 ? 1 : -1;
        this.scythetimer = 59;
      }
    }
    this.image_angle += this.rotspeed;
    if (this.grazed === 1) {
      this.grazetimer++;
      if (this.grazetimer >= 30) {
        this.grazed = 0;
        this.grazetimer = 0;
      }
    }
  }
};
FN(Fl, "obj_centerscythe");
e(Fl, "kinds", F5("obj_centerscythe", FS));
e(Fl, "defaultDepth", 0);
e(Fl, "defaultSprite", "spr_joker_scythebody");
e(Fl, "defaultMask", "spr_joker_scythebody_mask");
var FC = Fl;
var Fs = class ie extends FS {
  create() {
    this.grazed = 0;
    this.grazepoints = 15;
    this.timepoints = 0;
    this.target = 0;
    this.inv = 120;
    this.damage = 124;
    this.active = 1;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_angle = F6(360);
    this.rotspeed = 14;
    this.vspeed = 5;
    this.mask_index = "spr_joker_scythebody_mask";
    this.gravity = 1;
    this.explode = 0;
    this.explodetimer = 0;
    this.remrot = this.image_angle;
    this.remy = this.y;
    this.remx = this.x;
    this.scale = 2;
    this.wall_destroy = 0;
  }
  step() {
    if (this.explode === 0) {
      this.remx = this.x;
      this.remy = this.y;
      this.image_angle += this.rotspeed;
      this.remrot = this.image_angle;
    }
    if (this.y >= 380 && this.explode === 0) {
      F2("snd_scytheburst");
      this.remx = this.x;
      this.remy = this.y;
      this.explode = 1;
      this.explodetimer = 0;
      this.remrot = this.image_angle;
      this.image_angle = 0;
      this.speed = 0;
      this.gravity = 0;
      this.mask_index = "spr_tallpx";
      this.sprite_index = "spr_tallpx";
      this.grazed = 0;
      this.y = 0;
      this.depth += 1;
    }
    if (this.explode === 1) {
      this.active = 0;
      this.image_xscale += 8;
      if (this.image_xscale >= 16) {
        this.active = 1;
      }
      if (this.image_xscale >= 32) {
        this.explode = 2;
      }
    }
    if (this.explode === 2) {
      this.image_xscale -= 4;
      if (this.image_xscale <= 16) {
        this.image_alpha -= 0.25;
        this.active = 0;
      }
      if (this.image_xscale <= 0) {
        this.instance_destroy();
      }
    }
    if (this.grazed === 1) {
      FF.with("obj_dbulletcontroller", (FO) => {
        FO.made += 0.2;
      });
      this.grazed = 2;
    }
  }
  draw(FO) {
    if (this.explode < 2) {
      FO.draw_sprite_ext(
        "spr_joker_scythebody",
        this.image_index,
        this.remx,
        this.remy,
        this.scale,
        this.scale,
        this.remrot,
        F3.white,
        1,
      );
    }
    if (this.explode >= 1) {
      this.draw_self(FO);
    }
  }
  userEvent(FO) {
    if (FO === 5 && this.active === 1 && F1.inv < 0) {
      if (FF.first("obj_battlecontroller")) {
        FF.first("obj_battlecontroller").shakeReq = 1;
      }
      F2("snd_hurt1");
      F1.inv = F1.invc * 40;
      let FU = [0, 1, 2].map((Fq) => Math.max(0, F1.hp[F1.char[Fq]]));
      if (Fj(FU[0] + FU[1] + FU[2]) / 3 >= 10) {
        for (let Fq = 0; Fq < 3; Fq++) {
          if (FU[Fq] > 0) {
            F1.hp[F1.char[Fq]] = Fj(F1.hp[F1.char[Fq]] * 0.7);
          }
        }
      } else {
        F0(this);
      }
    }
  }
};
FN(Fs, "obj_laserscythe");
e(Fs, "kinds", F5("obj_laserscythe", FS));
e(Fs, "defaultDepth", -5);
e(Fs, "defaultSprite", "spr_joker_scythebody");
var FV = Fs;
export {
  Fp as a,
  Fe as b,
  Fc as c,
  Fz as d,
  FZ as e,
  FD as f,
  FS as g,
  Fw as h,
  Fm as i,
  Fy as j,
  Ft as k,
  FP as l,
  Fu as m,
  FA as n,
  Fv as o,
  FC as p,
  FV as q,
};
