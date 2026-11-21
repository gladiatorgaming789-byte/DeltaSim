import { b as m, c as b0 } from "./c-2XD6JUBJ.js";
import { G as b1, s as b2 } from "./c-Q4AJT7BT.js";
import { a as b3, c as b4, g as b5 } from "./c-66FIJ62A.js";
import { f as b6, g as b7 } from "./c-UDQUHXBV.js";
import { a as b8, f as b9, n as bb, p as by } from "./c-F4ZSRAAO.js";
import { D as bv, I as bu, M as bd, g as bX, n as bA } from "./c-O6GE5FYX.js";
import {
  Ja as be,
  La as bc,
  ga as bg,
  gb as bj,
  hb as bf,
  j as bB,
  m as bO,
  ob as bs,
  s as bJ,
  w as ba,
  x,
  zb as bi,
} from "./c-ZEHUSSXN.js";
import { a as bS, c as bH, e as bT, g as bM, l as bQ } from "./c-7Q4J33FN.js";
var bW = {};
bH(bW, {
  FIGHTS: () => y5,
  SOUNDS: () => br,
  SPRITES: () => bp,
  obj_defeatanim: () => bI,
  obj_hathyfightevent: () => y0,
  obj_headhathy: () => bh,
  obj_heartblcon: () => bF,
  obj_heartenemy: () => bl,
  obj_heartshaper: () => bx,
  obj_spareanim: () => bo,
  obj_spinheart: () => bm,
  setupHathyStats: () => bz,
  setupHeadHathyStats: () => bY,
  setupStats: () => bD,
});
bQ();
var bp = [
  "spr_heartenemy_idle",
  "spr_heartenemy_hurt",
  "spr_heartenemy_spared",
  "spr_hathyx_idle",
  "spr_hathyx_hurt",
  "spr_hathyx_spared",
  "spr_heartblcon_0",
  "spr_heartblcon_1",
  "spr_heartblcon_2",
  "spr_heartblcon_3",
  "spr_heartblcon_4",
  "spr_heartblcon_5",
  "spr_battleblcon",
  "spr_spinheart",
  "spr_spinheartmask",
  "spr_heartbullet",
  "spr_sparestar_anim",
  "spr_defeatsweat",
];
var br = ["snd_spare", "snd_defeatrun"];
function bD(y6) {
  bX.monstername[y6] = "Hathy";
  bX.monstermaxhp[y6] = 150;
  bX.monsterhp[y6] = 150;
  bX.monsterat[y6] = 6;
  bX.monsterdf[y6] = 0;
  bX.monsterexp[y6] = 0;
  bX.monstergold[y6] = 28;
  bX.sparepoint[y6] = 10;
  bX.mercymod[y6] = 0;
  bX.mercymax[y6] = 100;
  bX.canact[y6][0] = 1;
  bX.actname[y6][0] = "Check";
  bX.canact[y6][1] = 1;
  bX.actname[y6][1] = "Flatter";
  bX.canact[y6][2] = 1;
  bX.actname[y6][2] = "X-Flatter";
  bX.actactor[y6][2] = 3;
  if (bX.encounterno === 7) {
    bX.actactor[y6][2] = 2;
    if (bX.plot < 40) {
      bX.plot = 40;
    }
  }
  if (bA(2) && bX.plot < 150) {
    bX.canact[y6][3] = 1;
    bX.actname[y6][3] = "Warning";
    bX.actactor[y6][3] = 3;
  }
  if (bA(2) && bX.plot >= 150) {
    bX.canact[y6][3] = 1;
    bX.actname[y6][3] = "S-Flatter";
    bX.actactor[y6][3] = 2;
  }
}
bS(bD, "setupStats");
var bz = bD;
function bY(y6) {
  bX.monstername[y6] = "Head Hathy";
  bX.monstermaxhp[y6] = 190;
  bX.monsterhp[y6] = 190;
  bX.monsterat[y6] = 8;
  bX.monsterdf[y6] = 0;
  bX.monsterexp[y6] = 0;
  bX.monstergold[y6] = 40;
  bX.sparepoint[y6] = 10;
  bX.mercymod[y6] = 0;
  bX.mercymax[y6] = 100;
  bX.canact[y6][0] = 1;
  bX.actname[y6][0] = "Check";
  bX.canact[y6][1] = 1;
  bX.actname[y6][1] = "Flirt";
  bX.canact[y6][2] = 1;
  bX.actname[y6][2] = "X-Flirt";
  bX.actactor[y6][2] = 2;
}
bS(bY, "setupHeadHathyStats");
function bE(y6, y7) {
  bX.msg[y6] = "\\TX \\F0 \\E" + y7 + " \\FR \\TR %";
}
bS(bE, "scr_ralface");
function bG(y6, y7) {
  bX.msg[y6] = "\\TX \\F0 \\E" + y7 + " \\FS \\TS %";
}
bS(bG, "scr_susface");
var bN = /^\\TX \\F0 \\E(\w) \\F[RS] \\T[RS] %$/;
function bL() {
  let y6 = [];
  let y7 = "";
  for (let y8 = 0; y8 < bX.msg.length; y8++) {
    let y9 = bX.msg[y8];
    if (typeof y9 != "string") {
      y6.push(y9);
      continue;
    }
    let yb = bN.exec(y9);
    if (yb) {
      y7 = "\\E" + yb[1];
      continue;
    }
    y6.push(y7 + y9);
    y7 = "";
  }
  while (y6.length < 100) {
    y6.push(" ");
  }
  bX.msg = y6;
}
bS(bL, "foldFaceLines");
var bn = class yy extends bj {
  create() {
    this.image_speed = 0.2;
    this.siner = 0;
  }
  draw(y6) {
    this.siner += 1;
    y6.draw_sprite("spr_battleblcon", 0, this.x, this.y);
    y6.draw_sprite(
      this.sprite_index,
      this.image_index,
      this.x + 15 + bJ(ba(this.siner / 8)),
      this.y + 15 + bJ(x(this.siner / 8)),
    );
  }
};
bS(bn, "obj_heartblcon");
bT(bn, "kinds", bf("obj_heartblcon", bj));
bT(bn, "defaultDepth", 0);
bT(bn, "defaultSprite", "spr_heartblcon_0");
var bF = bn;
var bk = class yv extends bj {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    bc("snd_spare");
    be("snd_spare");
  }
  draw(y6) {
    let y7 = this.sprite_index;
    let y8 = this.image_index;
    let y9 = this.image_xscale;
    let yb = this.image_yscale;
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      y6.draw_sprite_white(
        y7,
        y8,
        this.x + this.afterimage * 4,
        this.y,
        y9,
        yb,
        0,
        0.7 - this.afterimage / 25,
      );
      y6.draw_sprite_white(
        y7,
        y8,
        this.x + this.afterimage * 8,
        this.y,
        y9,
        yb,
        0,
        0.4 - this.afterimage / 30,
      );
    }
    if (this.t < 6) {
      if (this.t < 5) {
        y6.draw_sprite_ext(
          y7,
          y8,
          this.x,
          this.y,
          y9,
          yb,
          0,
          this.image_blend,
          1 - this.neotone / 4,
        );
      }
      let yu = this.t / 5;
      if (yu > 1) {
        yu = 1;
      }
      y6.draw_sprite_white(y7, y8, this.x, this.y, y9, yb, 0, yu - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let yd = 0; yd < 2; yd++) {
        let yX = bi(this.x + bB(this.sprite_width), this.y + bB(this.sprite_height), b8);
        yX.image_xscale = 2;
        yX.image_yscale = 2;
        yX.sprite_index = "spr_sparestar_anim";
        yX.image_alpha = 2;
        yX.image_speed = 0.25;
        yX.hspeed = -3;
        yX.gravity = 0.5;
        yX.gravity_direction = 0;
        this.star[this.starcount] = yX;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let yA = 0; yA < this.starcount; yA++) {
        let ye = this.star[yA];
        if (ye && !ye.destroyed) {
          ye.image_angle += 10;
          ye.image_alpha -= 0.1;
          if (ye.image_alpha <= 0) {
            ye.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && ((this.neotone += 1), this.neotone >= 30)) {
      for (let yc = 0; yc < this.starcount; yc++) {
        let yg = this.star[yc];
        if (yg && !yg.destroyed) {
          yg.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
bS(bk, "obj_spareanim");
bT(bk, "kinds", bf("obj_spareanim", bj));
bT(bk, "defaultDepth", 0);
var bo = bk;
var bw = class yj extends bj {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    be("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(y6) {
    if (this.t === 0) {
      this.draw_self(y6);
    }
    let y7 = 0;
    if (this.g <= 5) {
      y7 = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      y7 = 1;
    }
    if (y7 === 1) {
      y6.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let y8 = 0; y8 <= 80; y8++) {
        y6.draw_sprite_ext(
          this.sprite_index,
          this.image_index,
          this.x + y8 * 4,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          this.image_blend,
          0.4 - this.t / 8 + y8 / 200,
        );
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
bS(bw, "obj_defeatanim");
bT(bw, "kinds", bf("obj_defeatanim", bj));
bT(bw, "defaultDepth", 0);
var bI = bw;
var bq = class yf extends b5 {
  create() {
    let y6 = bs.first("obj_heart");
    this.con = 0;
    this.htimer = 0;
    this.image_xscale = 4;
    this.image_yscale = 4;
    this.active = 0;
    this.image_alpha = 0;
    this.x = (y6 ? y6.x : 312) + 8;
    this.y = (y6 ? y6.y : 162) + 8;
    this.image_angle = -90;
    this.joker = 0;
    this.damage = 100;
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 0;
    this.inv = 60;
    this.grazetimer = 0;
  }
  step() {
    if (this.con === 4) {
      this.htimer += 1;
      if (this.htimer >= 10) {
        this.friction = 0;
        this.speed = 0;
      }
      if (this.htimer >= 20) {
        this.active = 0;
        this.image_alpha -= 0.2;
      }
      if (this.htimer >= 25 && bX.turntimer >= 0) {
        bX.turntimer = -2;
      }
    }
    if (this.con === 3) {
      this.htimer += 1;
      if (this.htimer >= this.hmax) {
        this.direction = this.image_angle;
        this.speed = 2.5;
        this.friction = -0.5;
        if (this.joker === 1) {
          this.speed = 5;
        }
        this.con = 4;
        this.htimer = 0;
      }
    }
    if (this.con === 2) {
      this.htimer += 1;
      this.image_angle += 24;
      if (this.htimer >= this.spinmax) {
        this.hmax = 19;
        if (this.joker === 1) {
          this.hmax = 15;
        }
        this.image_angle = 270 + this.spinmax * 24;
        this.con = 3;
        this.htimer = 0;
      }
    }
    if (this.con === 1) {
      this.htimer += 1;
      if (this.htimer >= 10) {
        this.spinmax = bO(26.25, 30, 33.75, 37.5);
        if (this.joker === 1) {
          this.spinmax = 15 + bB(15);
        }
        this.con = 2;
        this.htimer = 0;
      }
    }
    if (this.con === 0) {
      this.image_alpha += 0.2;
      this.image_xscale -= 0.2;
      this.image_yscale -= 0.2;
      this.htimer += 1;
      if (this.htimer >= 5) {
        this.con = 1;
        this.htimer = 0;
        this.active = 1;
      }
    }
    if (this.grazed === 1) {
      this.grazetimer += 1;
    }
    if (this.grazetimer >= 15) {
      this.grazetimer = 0;
      this.grazed = 0;
    }
  }
};
bS(bq, "obj_spinheart");
bT(bq, "kinds", bf("obj_spinheart", b5));
bT(bq, "defaultDepth", 0);
bT(bq, "defaultSprite", "spr_spinheart");
bT(bq, "defaultMask", "spr_spinheartmask");
var bm = bq;
var bC = class yB extends b4 {
  create() {
    let y6 = bs.first("obj_heart");
    this.siner = 0;
    this.radius = 160;
    this.dir = 0;
    this.norot = 0;
    this.actual = 1;
    this.thisx = y6 ? y6.x : 312;
    this.thisy = y6 ? y6.y : 162;
    this.made = 0;
    this.damage = 100;
    this.active = 1;
    this.type = 0;
    this.maxradius = 80;
    this.movespeed = 0.5;
    this.radcon = 0;
    this.bul = [];
  }
  step() {
    if (
      this.actual === 0 &&
      ((this.siner += 1), (this.dir += 2), (this.xdir = this.dir + 180), this.norot === 1)
    ) {
      let y6 = bs.first("obj_heart");
      for (let y7 = 0; y7 < 20; y7++) {
        let y8 = (y7 * 2 * Math.PI) / 20 + this.siner / 60;
        let y9 = ba(y8) * ba(y8) * ba(y8) * 16;
        let yb = x(y8) * 13 - x(y8 * 2) * 5 - x(y8 * 3) * 2 - x(y8 * 4);
        this.xxx = (y6 ? y6.x : 312) + 8 + y9 * this.radius;
        this.yyy = (y6 ? y6.y : 162) + 8 - yb * this.radius;
      }
    }
    if (this.actual === 1) {
      if (this.made === 0) {
        for (let yd = 0; yd < 16; yd++) {
          let yX = bi(-20, -20, b5);
          yX.damage = this.damage;
          yX.grazepoints = 2;
          yX.timepoints = 1;
          yX.depth = 0;
          yX.image_alpha = 0;
          yX.sprite_index = "spr_heartbullet";
          this.bul[yd] = yX;
        }
        this.made = 1;
      }
      if (this.type === 0) {
        if (this.radius > this.maxradius) {
          this.radius -= 5;
        } else {
          this.radius += ba(this.siner / 10) / 2;
        }
      }
      if (this.type === 1) {
        if (this.radius > this.maxradius && this.radcon === 0) {
          this.radius -= 4;
        } else {
          this.radcon = 1;
          this.radius += 8;
          this.active = 0;
          this.image_alpha -= 0.1;
        }
      }
      this.dir += 2;
      this.siner += 1.5;
      let yu = 0;
      for (let yA = 0; yA < 16; yA++) {
        let ye = this.bul[yA];
        if (ye && !ye.destroyed) {
          yu += 1;
          if (this.radcon === 0 && ye.image_alpha < 1) {
            ye.image_alpha += 0.1;
          }
          let yc = ba((Math.PI * yA) / 8 + this.siner / 20) * this.radius;
          let yg = x((Math.PI * yA) / 8 + this.siner / 20) * this.radius;
          ye.x = this.thisx + 8 + yc;
          ye.y = this.thisy + 8 - yg;
          if (this.radcon === 1) {
            ye.image_alpha -= 0.1;
            ye.active = 0;
            if (ye.image_alpha <= 0.1) {
              ye.instance_destroy();
            }
          }
        }
      }
      if (yu === 0) {
        this.instance_destroy();
      }
    }
  }
  draw(y6) {}
};
bS(bC, "obj_heartshaper");
bT(bC, "kinds", bf("obj_heartshaper", b4));
bT(bC, "defaultDepth", 0);
bT(bC, "defaultSprite", "spr_heartbullet");
bT(bC, "defaultVisible", false);
var bx = bC;
m({
  33: (y6, y7) => {
    if (y6.btimer >= y6.ratio * 26) {
      let y8 = bi(y7.bsx, y7.bsy, bx);
      y8.maxradius = 50;
      y8.type = 1;
      y6.btimer = 0;
      y8.thisx = y7.bsx - 50 + bB(100);
      y8.thisy = y7.bsy - 50 + bB(100);
      b3(y6, y8);
    }
  },
});
var bV = class yO extends b2 {
  create() {
    this.bikeflip = 0;
    this.becomeflash = 0;
    this.turnt = 0;
    this.turns = 0;
    this.talktimer = 0;
    this.talkmax = 90;
    this.state = 0;
    this.flash = 0;
    this.siner = 0;
    this.fsiner = 0;
    this.talked = 0;
    this.attacked = 0;
    this.hurt = 0;
    this.hurttimer = 0;
    this.hurtshake = 0;
    this.acting = 0;
    this.actcon = 0;
    this.acttimer = 0;
    this.mercymod = 0;
    this.maxmercy = 9999;
    this.warned = 0;
    this.compliment = 0;
    this.tired = 0;
    this.delete_n = 0;
    this.attacks = 0;
    this.dodgetimer = 0;
    this.candodge = 0;
    this.con = 0;
    this.battlecancel = 0;
    this.nexttry = 0;
    this.mytarget = 3;
    this.checkhp1 = bX.hp[1];
    this.checkhp2 = bX.hp[2];
    this.firstturn = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.rtimer = 0;
    this.shakex = 0;
  }
  userEvent(y6) {
    if (y6 === 12) {
      bX.monsterx[this.myself] = this.x + this.sprite_width / 2;
      bX.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (y6 === 10) {
      this.spared();
      return;
    }
  }
  spared() {
    let y6 = bi(this.x, this.y, bo);
    y6.sprite_index = this.sparedsprite;
    y6.image_index = 0;
    y6.image_xscale = this.image_xscale;
    y6.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  scr_defeatrun() {
    let y6 = bi(this.x, this.y, bI);
    y6.sprite_index = this.hurtsprite;
    y6.image_index = 0;
    y6.image_xscale = this.image_xscale;
    y6.image_yscale = this.image_yscale;
    this.instance_destroy();
  }
  alarmEvent(y6) {
    if (y6 === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let y6 = this.myself;
    if (bX.monster[y6] === 1) {
      if (bX.mnfight === 1 && this.talked === 0) {
        bd(this);
        if (!bs.exists("obj_darkener")) {
          bi(0, 0, by);
        }
        let y7 = bi(this.x - 100, this.y, bF);
        y7.sprite_index = this.blconSprite();
        if (this.acting === 2) {
          y7.sprite_index = "spr_heartblcon_2";
        }
        if (this.acting === 3) {
          y7.sprite_index = "spr_heartblcon_3";
        }
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && bX.mnfight === 1) {
        this.rtimer = 0;
        if (bg() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          bs.with("obj_heartblcon", (y8) => y8.instance_destroy());
          bX.mnfight = 2;
        }
        if (bX.mnfight === 2) {
          if (!bs.exists("obj_moveheart")) {
            bb();
          }
          if (!bs.exists("obj_growtangle")) {
            bi(320, 170, b9);
          }
        }
      }
      if (bX.mnfight === 2 && this.attacked === 0) {
        bs.with("obj_heartblcon", (y8) => y8.instance_destroy());
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.makeAttack(y6);
          this.turns += 1;
          this.attacked = 1;
          bX.typer = 6;
          bX.fc = 0;
          this.attackMessages(y6);
        } else {
          bX.turntimer = 120;
        }
      }
      if (bX.mnfight === 2 && bX.turntimer <= 1) {
        this.firstturn = 1;
        if (this.battlecancel === 1) {
          bX.mercymod[y6] = 999;
        }
      }
    }
    if (bX.myfight === 3) {
      this.actStep(y6);
    }
    if (bX.myfight === 7) {
      this.hspeed = 15;
    }
  }
  draw(y6) {
    let y7 = this.myself;
    if (this.state === 3) {
      if (bX.monsterhp[y7] <= bX.monstermaxhp[y7] / 3) {
        bX.monsterstatus[y7] = 1;
        if (bX.monstercomment[y7] === " ") {
          bX.monstercomment[y7] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (bX.monster[y7] === 0) {
          this.onDefeatRun(y7);
          this.scr_defeatrun();
        }
        this.hurtshake += 1;
        if (this.hurtshake > 1) {
          if (this.shakex > 0) {
            this.shakex -= 1;
          }
          if (this.shakex < 0) {
            this.shakex += 1;
          }
          this.shakex = -this.shakex;
          this.hurtshake = 0;
        }
        y6.draw_sprite_ext(
          this.hurtsprite,
          0,
          this.x + this.shakex,
          this.y,
          2,
          2,
          0,
          this.image_blend,
          1,
        );
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let y8 = this.idlesprite;
      if (bX.mercymod[y7] >= bX.mercymax[y7]) {
        y8 = this.sparedsprite;
      }
      y6.draw_sprite_ext(y8, this.siner / 5, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        y6.draw_sprite_white(
          y8,
          this.siner / 5,
          this.x,
          this.y,
          2,
          2,
          0,
          -x(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
  onDefeatRun(y6) {}
};
bS(bV, "obj_hathyparent");
bT(bV, "kinds", bf("obj_hathyparent", b2));
bT(bV, "defaultDepth", 90);
var bZ = bV;
var bR = class ys extends bZ {
  create() {
    super.create();
    this.idlesprite = "spr_heartenemy_idle";
    this.hurtsprite = "spr_heartenemy_hurt";
    this.sparedsprite = "spr_heartenemy_spared";
  }
  blconSprite() {
    return bO("spr_heartblcon_0", "spr_heartblcon_1");
  }
  onDefeatRun(y6) {
    if (bX.flag[51 + y6] === 5) {
      bX.flag[524] += 1;
    }
    bX.flag[521] += 1;
  }
  makeAttack(y6) {
    let y7 = bv();
    bX.turntimer = 140;
    if (y7 === 1) {
      let y8 = bi(this.x, this.y, bm);
      y8.type = 0;
      y8.target = this.mytarget;
      y8.damage = bX.monsterat[y6] * 5;
    } else {
      let y9 = bi(this.x, this.y, bx);
      y9.type = 0;
      y9.target = this.mytarget;
      y9.damage = bX.monsterat[y6] * 5;
      if (bX.encounterno === 9) {
        bX.turntimer = 100;
      }
    }
  }
  attackMessages(y6) {
    let y7 = bO(0, 1, 2, 3, 4);
    if (y7 === 0) {
      bX.battlemsg[0] = "* Hathy's body beats audibly.";
    }
    if (y7 === 1) {
      bX.battlemsg[0] = "* Hathy smiled a darling smile.";
    }
    if (y7 === 2) {
      bX.battlemsg[0] = "* Hathy is whispering a lovely spell.";
    }
    if (y7 === 3) {
      bX.battlemsg[0] = "* Hathy has a little secret.";
    }
    if (y7 === 4) {
      bX.battlemsg[0] = "* Smells like a soft kiss.";
    }
    if (bX.monsterstatus[y6] === 1) {
      bX.battlemsg[0] = "* Hathy's beat slows.";
    }
    if (bX.monsterhp[y6] <= bX.monstermaxhp[y6] / 3) {
      bX.battlemsg[0] = "* Hathy's beat seems to stutter.";
    }
    if (bX.mercymod[y6] >= bX.mercymax[y6]) {
      bX.msg[0] = "* Hathy is skipping beats.";
    }
  }
  actStep(y6) {
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      bX.msg[0] = "* HATHY - AT 7 DF 0&* I am a \\cYlittle kiss\\cW./%";
      b7();
    }
    if (this.acting === 2 && this.actcon === 0) {
      let y7 = bO(0, 1, 2);
      bX.msg[0] = "* You told Hathy it has cool tentacles^1.&* It began to think about this.../%";
      if (y7 === 1) {
        bX.msg[0] = "* You called Hathy a sweetheart^1.&* It began to think about this.../%";
      }
      if (y7 === 2) {
        bX.msg[0] =
          "* You told Hathy its teeth look like knives^1.&* It began to think about this.../%";
      }
      bu(y6, 100);
      b7();
      this.battlecancel = 1;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      bX.msg[0] = "* You ordered Ralsei to flatter all the enemies!/";
      bE(1, 0);
      let y8 = bO(0, 1, 2);
      bX.msg[2] = "* Out of anyone^1, I'm glad we randomly encountered all of you./%";
      if (y8 === 1) {
        bX.msg[2] = "* I'm making tea later..^1.&* Umm^1, would you like any?/%";
      }
      if (y8 === 2) {
        bX.msg[2] = "* We don't need EXP^1.&* Just encountering your smile is reward enough./%";
      }
      bu(0, 100);
      bu(1, 100);
      bu(2, 100);
      this.actcon = 1;
      bL();
      b7();
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      if (bX.plot < 150) {
        bX.msg[0] = "* You and Ralsei warned Hathy about Susie^1.&* The enemy went on guard./%";
        if (bv() > 1) {
          bX.msg[0] =
            "* You and Ralsei  warned the enemies about Susie^1.&* Everyone went on guard./%";
        }
        for (let y9 = 0; y9 < 3; y9++) {
          bX.monstercomment[y9] = "(Warned)";
          bX.automiss[y9] = 1;
        }
      } else {
        bX.msg[0] = "* You ordered Susie to flatter all the enemies!/";
        bG(1, 2);
        let yb = bO(0, 1, 2);
        bX.msg[2] = "* Can't believe my bozo teammates.../";
        bX.msg[3] = "\\E0* ... came back here just to see YOU guys./%";
        if (yb === 1) {
          bX.msg[3] = "\\E0* ... wanted to fight someone like YOU so much./%";
        }
        if (yb === 2) {
          bX.msg[3] = "\\E0* ... have a THING for weaklings like you./%";
        }
        bu(0, 100);
        bu(1, 100);
        bu(2, 100);
      }
      bL();
      b7();
    }
    if (this.actcon === 1 && !bs.exists("obj_writer")) {
      this.actcon = 0;
      b1();
    }
    if (this.actcon === 5 && !bs.exists("obj_writer")) {
      bX.battleat[1] = 90;
      bX.battleat[2] = 90;
      this.actcon = 6;
      bs.with("obj_herosusie", (yu) => {
        yu.attacktimer = 0;
        yu.state = 1;
        yu.points = 100 + bJ(bB(40));
        bX.faceaction[yu.myself] = 0;
        if (bX.automiss[0] === 1) {
          yu.points = 0;
        }
      });
      this.alarm[4] = 50;
    }
    if (this.actcon === 7) {
      bX.msg[0] = "* Where'd you get it^1?&* Heh heh heh heh./";
      bE(1, 3);
      bX.msg[2] = "* (Umm^1, Kris^1, maybe Susie shouldn't ACT anymore...)/%";
      if (bX.automiss[0] === 1) {
        bX.msg[0] = "\\E7* H-hey^1, what gives!?/";
        bE(1, 3);
        bX.msg[2] = "* (Wow^1, that was close^1, Kris...)/";
        bX.msg[3] = "* (Maybe Susie shouldn't ACT anymore...)/%";
      }
      bL();
      b6();
      this.actcon = 1;
    }
  }
};
bS(bR, "obj_heartenemy");
bT(bR, "kinds", bf("obj_heartenemy", bZ));
bT(bR, "defaultDepth", 90);
bT(bR, "defaultSprite", "spr_heartenemy_idle");
var bl = bR;
var bP = class yJ extends bZ {
  create() {
    super.create();
    this.idlesprite = "spr_hathyx_idle";
    this.hurtsprite = "spr_hathyx_hurt";
    this.sparedsprite = "spr_hathyx_spared";
  }
  blconSprite() {
    return bO("spr_heartblcon_4", "spr_heartblcon_5");
  }
  makeAttack(y6) {
    let y7 = bv();
    bX.turntimer = 180;
    if (y7 === 1) {
      let y8 = bi(this.x, this.y, bm);
      y8.joker = 1;
      y8.type = 0;
      y8.target = this.mytarget;
      y8.damage = bX.monsterat[y6] * 5;
    } else {
      let y9 = bi(this.x, this.y, b0);
      y9.type = 33;
      y9.ratio = 1.3 - bs.number("obj_headhathy") / 10;
      y9.target = this.mytarget;
      y9.damage = bX.monsterat[y6] * 5;
      if (bs.number("obj_headhathy") > 1 && bs.number("obj_dbulletcontroller") > 1) {
        y9.instance_destroy();
      }
    }
  }
  attackMessages(y6) {
    let y7 = bO(0, 1, 2, 3, 4);
    if (y7 === 0) {
      bX.battlemsg[0] = "* Head Hathy's body moves silently.";
    }
    if (y7 === 1) {
      bX.battlemsg[0] = "* Head Hathy showed no emotion at all.";
    }
    if (y7 === 2) {
      bX.battlemsg[0] = "* Head Hathy whispered something unhearable.";
    }
    if (y7 === 3) {
      bX.battlemsg[0] = "* Head Hathy's mind is an enigma.";
    }
    if (y7 === 4) {
      bX.battlemsg[0] = "* Smells like a lonely kiss.";
    }
    if (bX.monsterstatus[y6] === 1) {
      bX.battlemsg[0] = "* Head Hathy's beat slows.";
    }
    if (bX.monsterhp[y6] <= bX.monstermaxhp[y6] / 3) {
      bX.battlemsg[0] = "* Head Hathy's beat seems to stutter.";
    }
    if (bX.mercymod[y6] >= bX.mercymax[y6]) {
      bX.msg[0] = "* Head Hathy is skipping beats.";
    }
  }
  actStep(y6) {
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      bX.msg[0] =
        "* HEAD HATHY - AT 8 DF 0&* It learned to hide its feelings..^1. is that strength?/%";
      b7();
    }
    if (this.acting === 2 && this.actcon === 0) {
      bO(0, 1, 2);
      bX.msg[0] = "* You flirted with Head Hathy^1.&* It was highly effective./%";
      bu(y6, 100);
      b7();
      this.battlecancel = 1;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      bu(y6, 100);
      this.actcon = 1;
      if (bX.flag[504] === 0) {
        bX.msg[0] = "* You ordered SUSIE to flirt with the enemy!/";
        bG(1, 0);
        bX.msg[2] = "* .../";
        bX.msg[3] = "\\E1* Annnnnnnnnd hell no./";
        bE(4, 6);
        bX.msg[5] = "* Aww^1, Susie^1, it's OK if you don't know how!/";
        bG(6, 7);
        bX.msg[7] = "* What^1? Shut up^1, that's not the problem!/";
        bE(8, 6);
        bX.msg[9] = "* ... Are you sure?/";
        bG(10, 7);
        bX.msg[11] = "* Alright^1, LOOK^1, wise guy! I'll show you! Watch this!/";
        bX.msg[12] = "\\E0* AHEM./%";
        this.actcon = 20;
        this.acttimer = 0;
      }
      if (bX.flag[504] === 1) {
        bX.msg[0] = "* You ordered SUSIE to flirt with the enemy!/";
        bG(1, 2);
        bX.msg[2] = "* Hell nah^1. Let's see Ralsei do it./";
        bE(3, 1);
        bX.msg[4] = "* I suppose if it can't be helped...!/";
        bX.msg[5] = "\\E0* Hathy^1, your beauty is just... transcendent./";
        bX.msg[6] = "\\E8* Your hair is like a waterfall of.../";
        bX.msg[7] = "\\E1* ... wait^1, um^1, do you have hair^1, or.../%";
        this.actcon = 22;
      }
      if (bX.flag[504] === 2) {
        bX.msg[0] = "* You ordered SUSIE to flirt with the enemy!/";
        bG(1, 7);
        bX.msg[2] = "* Oh my god^1, Kris!!^1! I can't!^1! Do it yourself!!/%";
        this.actcon = 25;
      }
      if (bX.flag[504] >= 3) {
        bX.msg[0] = "* You flirted with the enemies^1. It worked^1! (Susie did not help.)/%";
        bu(0, 100);
        bu(1, 100);
        bu(2, 100);
      }
      bX.flag[504] += 1;
      bL();
      b7();
    }
    if (this.actcon === 1 && !bs.exists("obj_writer")) {
      this.actcon = 0;
      b1();
      if (this.delete_n === 1) {
        this.instance_destroy();
      }
    }
    if (this.actcon === 20 && !bs.exists("obj_writer")) {
      this.acttimer += 1;
      if (this.acttimer >= 60) {
        this.actcon = 21;
      }
    }
    if (this.actcon === 21) {
      bX.fe = 2;
      bX.msg[0] = "* So^1, uh.../";
      bX.msg[1] = "* Come here..^1. often?/%";
      b6();
      this.actcon = 22;
    }
    if (this.actcon === 22 && !bs.exists("obj_writer")) {
      this.hspeed = 6;
      bX.msg[0] = "* (Head Hathy felt awkward and left...)/";
      bG(1, 7);
      bX.msg[2] = "* HEY^1, GET BACK HERE AND LET ME FLIRT WITH YOU!!!/%";
      if (bX.flag[504] === 2) {
        bX.msg[0] = "* (Head Hathy felt awkward and left...)/";
        bE(1, 3);
        bX.msg[2] = "* Oh^1, oh dear^1! Wait!!/";
        bG(3, 2);
        bX.msg[4] = "* Not so easy^1, huh!?/%";
      }
      bL();
      b7();
      this.delete_n = 1;
      this.actcon = 23;
      bX.monster[y6] = 0;
    }
    if (this.actcon === 23 && this.x >= 640) {
      this.actcon = 1;
    }
    if (this.actcon === 25 && !bs.exists("obj_writer")) {
      bX.msg[0] = "* You said some sweet lines. The enemies were deeply enamored!/%";
      b7();
      bu(0, 100);
      bu(1, 100);
      bu(2, 100);
      this.actcon = 1;
    }
  }
};
bS(bP, "obj_headhathy");
bT(bP, "kinds", bf("obj_headhathy", bZ));
bT(bP, "defaultDepth", 90);
bT(bP, "defaultSprite", "spr_hathyx_idle");
var bh = bP;
var bU = bS((y6, y7) => {
  bX.msg[y6] = "\\TX \\F0 \\E" + y7 + " \\FL \\TL %";
}, "scr_lanface");
var bK = class ya extends bj {
  create() {
    this.con = 0;
    this.image_speed = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.x = 700;
    this.y = 220;
  }
  alarmEvent(y6) {
    if (y6 === 4) {
      this.con++;
    }
  }
  step() {
    let y6 = bs.first("obj_battlecontroller");
    if (y6 && y6.victoried === 1 && this.con < 30) {
      this.con = 30;
      y6.victoried = 2;
      if (y6.lastbattlewriter && !y6.lastbattlewriter.destroyed) {
        y6.lastbattlewriter.instance_destroy();
      }
    }
    if (this.con === 15) {
      this.depth = 0;
      this.x = 640;
      this.hspeed = -20;
      this.con = 16;
      this.alarm[4] = 15;
    }
    if (this.con === 17) {
      this.hspeed = 0;
      bX.fc = 5;
      bX.fe = 0;
      bX.typer = 46;
      bX.msg = new Array(100).fill(" ");
      bX.msg[0] = "* Hey, why aren't you guys thrashed?! You're totally outnumbered!/";
      bE(1, "B");
      bX.msg[2] = "* You made a team purely of SUPPORT ENEMIES./";
      bX.msg[3] = "* Their bullet patterns aren't balanced at all./";
      bX.msg[4] = "\\E1* It's like a dinner made out of three glasses of milk./";
      bU(5, 0);
      bX.msg[6] = "* .../";
      bX.msg[7] = "\\E7* And that's, um..^1.&* Unusual, somehow?/";
      bE(8, 8);
      bX.msg[9] = "* Why don't we talk about this AFTER the battle?/%";
      b6();
      this.con = 18;
    }
    if (this.con === 18 && !bs.exists("obj_writer")) {
      bX.fc = 0;
      this.hspeed = 20;
      this.con = 19;
      if (y6) {
        y6.alarm[2] = 21;
      }
      this.alarm[4] = 20;
    }
    if (this.con === 20) {
      if (y6) {
        y6.noreturn = 0;
      }
      this.con = 21;
    }
    if (this.con === 30) {
      bX.fc = 2;
      bX.fe = 8;
      bX.typer = 45;
      bX.msg = new Array(100).fill(" ");
      bX.msg[0] =
        "* Great job, Kris!&* We earned " +
        bX.monsterexp[3] +
        " EXP&and " +
        bX.monstergold[3] +
        " D$!/%";
      b6();
      this.con = 31;
    }
    if (this.con === 31 && !bs.exists("obj_writer")) {
      this.depth = 0;
      this.x = 640;
      this.hspeed = -20;
      this.con = 32;
      this.alarm[4] = 15;
    }
    if (this.con === 33) {
      this.hspeed = 0;
      bX.fc = 5;
      bX.fe = 2;
      bX.typer = 46;
      bX.msg = new Array(100).fill(" ");
      bX.msg[0] = "* Sweet!&* How much do I get?/";
      bE(1, "B");
      bX.msg[2] = "* You..^1. lost^1, Lancer^1.&* You don't get any./";
      bU(3, 4);
      bX.msg[4] = "* Oh./";
      bX.msg[5] = "\\E3* Can I have some of yours?/";
      bE(6, "A");
      bX.msg[7] = "* No!/";
      bU(8, 1);
      bX.msg[9] = "* Fine^1!&* Later, losers!/%";
      b6();
      this.con = 34;
    }
    if (this.con === 34 && !bs.exists("obj_writer")) {
      bX.fc = 0;
      this.hspeed = 20;
      this.con = 35;
      this.alarm[4] = 20;
    }
    if (this.con === 36) {
      if (y6) {
        y6.victoried = 1;
      }
      this.con = 37;
    }
  }
};
bS(bK, "obj_hathyfightevent");
bT(bK, "kinds", bf("obj_hathyfightevent", bj));
bT(bK, "defaultDepth", 0);
bT(bK, "defaultSprite", "spr_lancer_lt");
var y0 = bK;
var y1 = {
  chapter: 1,
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  music: "battle",
};
var y2 = bS(
  (y6, y7) => ({
    cls: bl,
    type: 6,
    x: y6,
    y: y7,
    setup: bD,
  }),
  "H",
);
var y3 = bS(
  (y6, y7) => ({
    cls: bh,
    type: 23,
    x: y6,
    y: y7,
    setup: bY,
  }),
  "HH",
);
var y4 = bS(
  (y6, y7, y8, y9) => ({
    cls: null,
    type: 0,
    x: y8,
    y: y9,
    setup: () => {},
    missing: y6,
    missingType: y7,
  }),
  "MISSING",
);
var y5 = [
  {
    id: "hathy-rudinn",
    name: "Rudinn & Hathy",
    ...y1,
    area: "Field",
    desc: "Rudinn and Hathy.#(Rudinn is in its#own module.)",
    encounterno: 6,
    battlemsg: "* Rudinn and Hathy blocked the way!",
    monsters: [y4("obj_diamondenemy", 5, 480, 110), y2(500, 200)],
  },
  {
    id: "hathy3",
    name: "Hathy x3",
    ...y1,
    area: "Field",
    desc: "Three Hathys.#Rings of hearts.",
    encounterno: 9,
    battlemsg: "* Three Hathys blocked the way!",
    monsters: [y2(480, 20), y2(500, 120), y2(460, 220)],
  },
  {
    id: "hathy-clover",
    name: "Clover & Hathy",
    ...y1,
    area: "Field",
    desc: "Clover and Hathy.#(Clover is in its#own module.)",
    encounterno: 15,
    battlemsg: "* Clover and Hathy grew close!",
    monsters: [y4("obj_clubsenemy", 7, 400, 30), y2(420, 200)],
  },
  {
    id: "hathy-smorgasboard",
    name: "Smorgasboard",
    ...y1,
    area: "Field",
    desc: "Jigsawry, Rudinn#and Hathy.",
    encounterno: 23,
    battlemsg: "* Smorgasboard.",
    monsters: [
      y4("obj_jigsawryenemy", 15, 480, 20),
      y4("obj_diamondenemy", 5, 500, 120),
      y2(460, 220),
    ],
  },
  {
    id: "headhathy2",
    name: "Head Hathy x2",
    ...y1,
    area: "Card Castle",
    desc: "Two Head Hathys.#Shrinking heart rings.",
    encounterno: 29,
    battlemsg: "* Head Hathy blocked the way quietly!",
    monsters: [y3(480, 110), y3(500, 200)],
  },
  {
    id: "headhathy3",
    name: "Head Hathy x3",
    ...y1,
    area: "Card Castle",
    desc: "Three Head Hathys.#Shrinking heart rings.",
    encounterno: 30,
    battlemsg: "* Head Hathy blocked the way quietly! (x3)",
    monsters: [y3(480, 20), y3(500, 120), y3(460, 220)],
  },
  {
    id: "hathy-various",
    name: "Various guys",
    ...y1,
    area: "Field",
    desc: "Rudinn, Hathy#and Rudinn.",
    encounterno: 33,
    battlemsg: "* Various guys appeared!",
    monsters: [
      y4("obj_diamondenemy", 5, 480, 20),
      y2(500, 120),
      y4("obj_diamondenemy", 5, 460, 220),
    ],
  },
];
bM(bZ, "G.mnfight = 2;");
export {
  bp as a,
  br as b,
  bD as c,
  bz as d,
  bY as e,
  bF as f,
  bo as g,
  bI as h,
  bm as i,
  bx as j,
  bl as k,
  bh as l,
  y0 as m,
  y5 as n,
  bW as o,
};
