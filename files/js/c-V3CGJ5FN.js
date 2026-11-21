import { b as D, c as O } from "./c-2XD6JUBJ.js";
import { G as G0, s as G1 } from "./c-Q4AJT7BT.js";
import { a as G2, c as G3, e as G4 } from "./c-66FIJ62A.js";
import { g, i as G5 } from "./c-UDQUHXBV.js";
import { a as G6, f as G7, n as G8, p as G9 } from "./c-F4ZSRAAO.js";
import { D as GG, I as Gb, M as Gh, g as Gy, n as Gp } from "./c-O6GE5FYX.js";
import {
  Ja as GV,
  La as GR,
  c as GC,
  ga as Gk,
  gb as Gv,
  hb as Gl,
  j as Gd,
  m as Gj,
  ob as GJ,
  u as Gr,
  v as Gq,
  w as Gi,
  x as GE,
  zb as GA,
} from "./c-ZEHUSSXN.js";
import { a as GX, c as GZ, e as Gt, g as GL, l as GU } from "./c-7Q4J33FN.js";
var Gn = {};
GZ(Gn, {
  FIGHTS: () => GI,
  SOUNDS: () => Gu,
  SPRITES: () => GM,
  obj_animation: () => Gm,
  obj_carrotthrower: () => GF,
  obj_defeatanim: () => GN,
  obj_rabbick_bush: () => Ga,
  obj_rabbick_enemy: () => GD,
  obj_rabbitbullet: () => Go,
  obj_spareanim: () => GW,
  setupStats: () => GY,
});
GU();
var GM = [
  "spr_rabbick_enemy",
  "spr_rabbick_enemy_hurt",
  "spr_rabbick_enemy_spared",
  "spr_rabbick_dustorb",
  "spr_rabbick_bushhole",
  "spr_rabbitbullet",
  "spr_rabbitthrower",
  "spr_carrotbullet",
  "spr_sparestar_anim",
  "spr_defeatsweat",
  "spr_battleblcon_long",
];
var Gu = ["snd_whistlebreath", "snd_wing", "snd_spare", "snd_defeatrun"];
function GY(Gs) {
  Gy.monstername[Gs] = "Rabbick";
  Gy.monstermaxhp[Gs] = 120;
  Gy.monsterhp[Gs] = 120;
  Gy.monsterat[Gs] = 8;
  Gy.monsterdf[Gs] = 1;
  Gy.monsterexp[Gs] = 0;
  Gy.monstergold[Gs] = 38;
  Gy.sparepoint[Gs] = 10;
  Gy.mercymod[Gs] = 0;
  Gy.mercymax[Gs] = 100;
  Gy.canact[Gs][0] = 1;
  Gy.actname[Gs][0] = "Check";
  Gy.canact[Gs][1] = 1;
  Gy.actname[Gs][1] = "Blow On";
  Gy.canact[Gs][2] = 1;
  Gy.actname[Gs][2] = "BreathAll";
  Gy.actactor[Gs][2] = 3;
  if (Gp(2) === 1 && Gy.plot < 150) {
    Gy.canact[Gs][3] = 1;
    Gy.actname[Gs][3] = "Warning";
    Gy.actactor[Gs][3] = 3;
  }
}
GX(GY, "setupStats");
function Gw(Gs) {
  return "[Z]";
}
GX(Gw, "scr_get_input_name");
function GK(Gs, ...Gc) {
  for (let Gg = 0; Gg < Gc.length; Gg++) {
    Gs = Gs.split("~" + (Gg + 1)).join(Gc[Gg]);
  }
  return Gs;
}
GX(GK, "scr_84_get_subst_string");
var Gx = class b2 extends Gv {
  animationEnd() {
    this.instance_destroy();
  }
};
GX(Gx, "obj_animation");
Gt(Gx, "kinds", Gl("obj_animation", Gv));
Gt(Gx, "defaultDepth", 0);
var Gm = Gx;
var Ge = class b3 extends Gv {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    GR("snd_spare");
    GV("snd_spare");
  }
  draw(Gs) {
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage++;
      Gs.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x + this.afterimage * 4,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        Math.max(0, 0.7 - this.afterimage / 25),
      );
      Gs.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x + this.afterimage * 8,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        Math.max(0, 0.4 - this.afterimage / 30),
      );
    }
    if (this.t < 6) {
      if (this.t < 5) {
        Gs.draw_sprite_ext(
          this.sprite_index,
          this.image_index,
          this.x,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          this.image_blend,
          1 - this.neotone / 4,
        );
      }
      let Gc = this.t / 5;
      if (Gc > 1) {
        Gc = 1;
      }
      Gs.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        Math.max(0, Gc - this.tone / 5),
      );
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let Gg = 0; Gg < 2; Gg++) {
        let b0 = GA(this.x + Gd(this.sprite_width), this.y + Gd(this.sprite_height), G6);
        b0.image_xscale = 2;
        b0.image_yscale = 2;
        b0.sprite_index = "spr_sparestar_anim";
        b0.image_alpha = 2;
        b0.image_speed = 0.25;
        b0.hspeed = -3;
        b0.gravity = 0.5;
        b0.gravity_direction = 0;
        this.star[this.starcount] = b0;
        this.starcount++;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let b1 = 0; b1 < this.starcount; b1++) {
        let b4 = this.star[b1];
        if (b4 && !b4.destroyed) {
          b4.image_angle += 10;
          b4.image_alpha -= 0.1;
          if (b4.image_alpha <= 0) {
            b4.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone++;
    }
    if (this.t >= 9 && (this.neotone++, this.neotone >= 30)) {
      for (let b5 = 0; b5 < this.starcount; b5++) {
        let b6 = this.star[b5];
        if (b6 && !b6.destroyed) {
          b6.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t++;
  }
};
GX(Ge, "obj_spareanim");
Gt(Ge, "kinds", Gl("obj_spareanim", Gv));
Gt(Ge, "defaultDepth", 0);
var GW = Ge;
var GB = class b7 extends Gv {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    GV("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(Gs) {
    if (this.t === 0) {
      this.draw_self(Gs);
    }
    let Gc = 0;
    if (this.g <= 5) {
      Gc = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      Gc = 1;
    }
    if (Gc === 1) {
      Gs.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let Gg = 0; Gg <= 80; Gg++) {
        Gs.draw_sprite_ext(
          this.sprite_index,
          this.image_index,
          this.x + Gg * 4,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          this.image_blend,
          Math.max(0, 0.4 - this.t / 8 + Gg / 200),
        );
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
GX(GB, "obj_defeatanim");
Gt(GB, "kinds", Gl("obj_defeatanim", Gv));
Gt(GB, "defaultDepth", 0);
var GN = GB;
var GQ = class b8 extends G4 {
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
    this.image_speed = 0;
    if (!GJ.exists("obj_heart")) {
      this.instance_destroy();
    }
    this.jumpsiner = Gd(100);
    this.hspeed = -3 - Gd(1);
    this.jumpspeed = 8 + Gd(4);
    this.jumpheight = 50 + Gd(10);
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  step() {
    this.jumpsiner++;
    if (this.image_alpha < 1 && this.active === 0) {
      this.image_alpha += 0.1;
    } else {
      this.active = 1;
    }
    let Gs = GJ.first("obj_battlesolid");
    let Gc = Gs ? Gs.x : 320;
    let Gg = Gs ? Gs.y : 170;
    let b0 = Gs ? Gs.sprite_width : 0;
    let b1 = Gs ? Gs.sprite_height : 0;
    let b4 = Gg + b1 / 2 - 20;
    let b5 = Gi(this.jumpsiner / this.jumpspeed) * this.jumpheight;
    this.y = b4 + b5 - this.jumpheight;
    this.image_speed = 0;
    this.image_index = 1;
    if (b5 > 0) {
      this.image_index = 2;
    }
    if (b5 > this.jumpheight / 2) {
      this.image_index = 0;
    }
    if (this.x <= Gc - b0 / 2 - 40) {
      this.image_alpha -= 0.1;
    }
  }
};
GX(GQ, "obj_rabbitbullet");
Gt(GQ, "kinds", Gl("obj_rabbitbullet", G4));
Gt(GQ, "defaultDepth", -20);
Gt(GQ, "defaultSprite", "spr_rabbitbullet");
var Go = GQ;
var Gf = class b9 extends G3 {
  create() {
    this.image_speed = 0;
    this.con = 0;
    this.throw_n = 0;
    this.buffer = 0;
    this.throwtimer = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.dir = Gj(1, -1);
    this.gravity = 1;
    this.vspeed = -14;
    this.hspeed = this.dir * Gd(2);
  }
  alarmEvent(Gs) {
    if (Gs === 4) {
      this.con += 1;
    }
  }
  step() {
    this.buffer++;
    if (this.buffer === 19) {
      this.gravity = 0;
      this.vspeed = 0;
      this.hspeed = this.dir * 4;
      this.depth = -10;
    }
    if (this.buffer >= 19) {
      let Gs = GJ.first("obj_battlesolid");
      let Gc = Gs ? Gs.x : 320;
      let Gg = Gs ? Gs.y : 170;
      let b0 = Gs ? Gs.sprite_width : 0;
      let b1 = Gs ? Gs.sprite_height : 0;
      this.y = Gg - b1 / 2;
      if (this.x <= Gc - b0 / 2 + 20) {
        this.x += 4;
        if (this.hspeed < 0) {
          this.hspeed = -this.hspeed;
        }
      }
      if (this.x <= Gc - b0 / 2 + 20) {
        this.x += 4;
        if (this.hspeed < 0) {
          this.hspeed = -this.hspeed;
        }
      }
      if (this.x >= Gc + b0 / 2 - 20) {
        this.x -= 4;
        if (this.hspeed > 0) {
          this.hspeed = -this.hspeed;
        }
      }
      let b4 = GJ.first("obj_heart");
      if (this.buffer >= 20 && this.con === 0 && b4 && Gq(this.x - (b4.x + 10)) < 30) {
        this.con = 5;
      }
      if (this.con === 5) {
        this.image_speed = 0.5;
        this.con = 6;
      }
      if (this.con === 6) {
        if (this.image_index >= 2 && this.throw_n === 0) {
          this.throw_n = 1;
          let b5 = GA(this.x, this.y, G4);
          G2(this, b5);
          let b6 = 7;
          if (GG() === 2) {
            b6 = 6;
          }
          if (GG() === 3) {
            b6 = 5;
          }
          b5.active = 1;
          b5.image_xscale = 2;
          b5.image_yscale = 2;
          b5.vspeed = b6;
          b5.image_speed = 0.25;
          b5.sprite_index = "spr_carrotbullet";
        }
        if (this.image_index >= 3) {
          this.throw_n = 0;
          this.image_speed = 0;
          this.con = 7;
          this.alarm[4] = 15;
          if (GG() === 2) {
            this.alarm[4] = 22;
          }
          if (GG() === 3) {
            this.alarm[4] = 30;
          }
        }
      }
      if (this.con === 8) {
        this.image_index = 0;
        this.con = 0;
      }
    }
  }
};
GX(Gf, "obj_carrotthrower");
Gt(Gf, "kinds", Gl("obj_carrotthrower", G3));
Gt(Gf, "defaultDepth", 50);
Gt(Gf, "defaultSprite", "spr_rabbitthrower");
var GF = Gf;
D({
  30: (Gs, Gc) => {
    let Gg = 34;
    if (GG() === 2) {
      Gg = 46;
    }
    if (GG() === 3) {
      Gg = 60;
    }
    if (Gs.btimer >= Gg) {
      let b0 = Gc.bs;
      let b1 = GA(Gc.bsx + (b0 ? b0.sprite_width : 0), Gc.bsy, Go);
      G2(Gs, b1);
      Gs.btimer = 0;
    }
  },
  32: (Gs, Gc) => {
    let Gg = 0;
    if (GJ.exists("obj_carrotthrower")) {
      Gg = 1;
      Gs.type = 30;
    }
    if (Gs.made === 0 && Gg === 0) {
      Gs.made = 1;
      let b0 = GA(Gc.bsx, Gc.bsy, GF);
      G2(Gs, b0);
      Gs.instance_destroy();
    }
  },
});
var GS = class bG extends G1 {
  create() {
    Object.assign(this, {
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 90,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
      mywriter: 343249823,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      tired: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 0,
      con: 0,
      battlecancel: 0,
      nexttry: 0,
      mytarget: 3,
      blowall: 0,
      blowing: 0,
      animsiner: 0,
      blowamt: 0,
      xx: 0,
      yy: 0,
      blowtimer: 180,
      blowbuffer: 3,
      blown: 0,
      blowanimtimer: 0,
      blow_wait: 0,
      image_xscale: 2,
      image_yscale: 2,
      onoff: 0,
      shakeamt: 0,
      rtimer: 0,
      ashake: 0,
      xoff: 0,
      bunnycount: 0,
      bunnyid: null,
    });
    this.originalwidth = this.sprite_width;
    this.image_speed = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.idlesprite = "spr_rabbick_enemy";
    this.hurtsprite = "spr_rabbick_enemy_hurt";
    this.sparedsprite = "spr_rabbick_enemy_spared";
  }
  alarmEvent(Gs) {
    if (Gs === 4) {
      this.con += 1;
    }
  }
  userEvent(Gs) {
    if (Gs === 12) {
      Gy.monsterx[this.myself] = this.x + this.sprite_width / 2;
      Gy.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (Gs === 2) {
      this.dust();
      return;
    }
    if (Gs === 10) {
      this.spared();
      return;
    }
  }
  dust() {
    let Gs = GA(
      this.x + Gd(this.sprite_width - 10) + 10,
      this.y + 20 + Gd(this.sprite_height - 20),
      Gm,
    );
    Gs.sprite_index = "spr_rabbick_dustorb";
    Gs.speed = 6;
    Gs.image_index = 1;
    Gs.direction = 10 + Gd(70);
    Gs.image_speed = 0.5;
    Gs.image_xscale = 2;
    Gs.image_yscale = 2;
    Gs.gravity_direction = 0;
    Gs.gravity = 0.7;
    Gs.friction = 0.4;
    Gs.image_alpha = 0.5;
    Gs.depth = 15;
    if (this.blown === 1) {
      Gs.image_alpha = 1;
      Gs.depth = -10;
    }
  }
  spared() {
    let Gs = GA(this.x, this.y, GW);
    Gs.sprite_index = this.sparedsprite;
    Gs.image_index = 0;
    Gs.image_xscale = this.image_xscale;
    Gs.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  scr_defeatrun() {
    let Gs = GA(this.x, this.y, GN);
    Gs.sprite_index = this.hurtsprite;
    Gs.image_index = 0;
    Gs.image_xscale = this.image_xscale;
    Gs.image_yscale = this.image_yscale;
    this.instance_destroy();
  }
  step() {
    let Gs = this.myself;
    if (Gy.monster[Gs] === 1) {
      if (Gy.mnfight === 1 && this.talked === 0) {
        Gh(this);
        if (!GJ.exists("obj_darkener")) {
          GA(0, 0, G9);
        }
        Gy.typer = 50;
        Gy.msg = new Array(100).fill(" ");
        let Gc = Gj(0, 1, 2, 3);
        if (Gr(Gd(50)) === 0) {
          Gc = 4;
        }
        if (Gc === 0) {
          Gy.msg[0] = "Snitter&snatter&what's the&matter";
        }
        if (Gc === 1) {
          Gy.msg[0] = "Duruuuu---";
        }
        if (Gc === 2) {
          Gy.msg[0] = "Hop^1, hop";
        }
        if (Gc === 3) {
          Gy.msg[0] = "Meow.";
        }
        if (Gc === 4) {
          Gy.msg[0] = "Bunnies are&the sequel&to frogs.";
        }
        if (this.blown === 1) {
          if (Gc === 0 || Gc === 4) {
            Gy.msg[0] = "A soft and&clean boy.";
          }
          if (Gc === 1) {
            Gy.msg[0] = "A refreshing&boy.";
          }
          if (Gc === 2) {
            Gy.msg[0] = "A sweet and&fresh girl.";
          }
          if (Gc === 3) {
            Gy.msg[0] = "A nice and&tidy girl.";
          }
        }
        G5(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && Gy.mnfight === 1) {
        this.rtimer = 0;
        if (Gk() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          GJ.with("obj_writer", (Gg) => Gg.instance_destroy());
          GJ.with("obj_battleblcon", (Gg) => Gg.instance_destroy());
          Gy.mnfight = 2;
        }
        if (Gy.mnfight === 2) {
          if (!GJ.exists("obj_moveheart")) {
            G8();
          }
          if (!GJ.exists("obj_growtangle")) {
            GA(320, 170, G7);
          }
        }
      }
      if (Gy.mnfight === 2 && this.attacked === 0) {
        this.rtimer++;
        if (this.rtimer === 12) {
          let Gg = GA(this.x, this.y, O);
          let b0 = Gj(0, 1);
          Gg.type = b0 === 0 ? 30 : 32;
          Gg.target = this.mytarget;
          Gg.damage = Gy.monsterat[Gs] * 5;
          Gg.grazepoints = 9;
          Gg.timepoints = 3;
          this.turns++;
          Gy.turntimer = 170;
          this.attacked = 1;
          Gy.typer = 6;
          Gy.fc = 0;
          let b1 = Gj(0, 1, 2, 3);
          if (b1 === 0) {
            Gy.battlemsg[0] = "* Rabbick is looking for a couch to get stuck under.";
          }
          if (b1 === 1) {
            Gy.battlemsg[0] = "* Rabbick emits a musty groan.";
          }
          if (b1 === 2) {
            Gy.battlemsg[0] = "* Rabbick ambiently damages the soil.";
          }
          if (b1 === 3) {
            Gy.battlemsg[0] = "* The battlefield is filled with the smell of dusty mustard.";
          }
          if (Gy.monsterhp[Gs] <= Gy.monstermaxhp[Gs] / 3) {
            Gy.battlemsg[0] = "* Rabbick is starting to look wispy.";
          }
          if (Gy.mercymod[Gs] >= Gy.mercymax[Gs]) {
            Gy.msg[0] = "* Rabbick is now nice and clean.";
          }
        } else {
          Gy.turntimer = 120;
        }
      }
      if (
        Gy.mnfight === 2 &&
        Gy.turntimer <= 1 &&
        (this.battlecancel === 1 && (Gy.mercymod[Gs] = 999), this.battlecancel === 2)
      ) {
        let b4 = GJ.first("obj_battlecontroller");
        if (b4) {
          b4.noreturn = 1;
        }
        this.con = 1;
        this.battlecancel = 3;
      }
    }
    if (Gy.myfight === 3) {
      this.actStep();
    }
  }
  actStep() {
    let Gs = this.myself;
    this.xx = 0;
    this.yy = 0;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Gy.msg = new Array(100).fill(" ");
      Gy.msg[0] = "* RABBICK - AT 8 DF 1&* This dusty bunny needs a bit&  of spring cleaning./%";
      g();
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.blowall = 0;
      let Gc = Gw(4);
      Gy.msg = new Array(100).fill(" ");
      Gy.msg[0] = GK("* Press ~1 repeatedly to blow air!", Gc);
      if (this.blown === 0) {
        this.actcon = 10;
        this.blowing = 1;
        this.blowtimer = 90;
        g();
      }
      if (this.blown === 1) {
        Gy.msg[0] = "* Kris breathed on the Rabbick^1.&* It blew away entirely.../%";
        g();
        this.actcon = 20;
      }
    }
    if (this.acting === 3 && this.actcon === 0) {
      this.blowall = 1;
      let Gg = Gw(4);
      Gy.msg = new Array(100).fill(" ");
      Gy.msg[0] = GK("* Press ~1 repeatedly to blow air!", Gg);
      this.actcon = 10;
      this.blowing = 1;
      this.blowtimer = 90;
      GJ.with("obj_rabbick_enemy", (b0) => {
        b0.bunnycount = 0;
        b0.bunnyid = this;
      });
      GJ.with("obj_rabbick_enemy", (b0) => {
        if (b0.blown === 0) {
          b0.bunnyid.bunnycount += 1;
        }
        b0.blowbuffer = 2;
        b0.blow_wait = 0;
        b0.blowall = 1;
        b0.blowing = 1;
        b0.blowtimer = 90;
      });
      if (this.bunnycount === 0) {
        GJ.with("obj_rabbick_enemy", (b0) => {
          b0.blowing = 0;
          b0.blowtimer = -1;
          b0.actcon = 30;
          Gy.msg[0] = "* The bunnies were blown away!/%";
        });
      }
      g();
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      Gy.msg = new Array(100).fill(" ");
      Gy.msg[0] = "* You and Ralsei warned Rabbick about Susie^1.&* The enemy went on guard.../%";
      if (GG() > 1) {
        Gy.msg[0] =
          "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
      }
      for (let b0 = 0; b0 < 3; b0++) {
        Gy.monstercomment[b0] = "(Warned)";
        Gy.automiss[b0] = 1;
      }
      g();
    }
    if (this.actcon === 10 && this.blowing === 0) {
      GJ.with("obj_writer", (b1) => b1.instance_destroy());
      this.actcon = 1;
    }
    if (this.actcon === 20 && !GJ.exists("obj_writer")) {
      this.userEvent(10);
      this.actcon = 1;
    }
    if (this.actcon === 30 && !GJ.exists("obj_writer")) {
      GJ.with("obj_rabbick_enemy", (b1) => b1.userEvent(10));
      this.actcon = 1;
    }
    if (this.actcon === 1 && !GJ.exists("obj_writer")) {
      this.actcon = 0;
      G0();
    }
    if (this.blowing === 1) {
      if (this.blow_wait === 1) {
        this.blowtimer--;
      }
      this.blowbuffer--;
      if (this.blowamt > 0 && this.blowanimtimer <= 0) {
        this.blowamt--;
      }
      if (this.blowbuffer <= 0 && Gk()) {
        this.blow_wait = 1;
        GR("snd_whistlebreath");
        GV("snd_whistlebreath", {
          pitch: 1 + this.blowamt / 100,
        });
        this.onoff = 0;
        this.shakeamt = 5;
        this.blowamt += 12;
        this.blowbuffer = 2;
        this.blowanimtimer = 20;
        for (let b1 = 0; b1 < 6; b1++) {
          this.userEvent(2);
        }
      }
      if (this.blowtimer <= 0) {
        this.blowing = 0;
      }
      if (this.blowamt >= 100 && this.blown === 0) {
        Gb(Gs, 100);
        this.blown = 1;
        this.blowing = 0;
        this.blowanimtimer = 0;
        for (let b4 = 0; b4 < 15; b4++) {
          this.userEvent(2);
        }
      }
    }
  }
  draw(Gs) {
    let Gc = this.myself;
    this.animsiner++;
    this.image_xscale = 2 - this.blowamt / 100;
    if (this.blown === 1) {
      this.image_xscale = 2;
    }
    this.xoff = 0;
    if (this.image_xscale < 2) {
      this.xoff = (this.originalwidth - this.sprite_width) / 2;
    }
    this.blowanimtimer--;
    if (this.blowanimtimer > 6 && this.blown === 0) {
      if (this.onoff === 2) {
        this.onoff = 0;
      }
      if (this.onoff === 1.5) {
        this.onoff = 2;
      }
      if (this.onoff === 0.5) {
        this.onoff = 1;
      }
      if (this.onoff === 0) {
        this.ashake = -this.shakeamt;
        this.onoff = 0.5;
      }
      if (this.onoff === 1) {
        this.ashake = this.shakeamt;
        if (this.shakeamt > 0) {
          this.shakeamt--;
        }
        this.onoff = 1.5;
      }
      if (this.image_xscale > 1.5) {
        Gs.draw_sprite_ext(
          "spr_rabbick_enemy_hurt",
          0,
          this.x + this.xoff + this.ashake,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          GC.white,
          1,
        );
      } else {
        Gs.draw_sprite_ext(
          "spr_rabbick_enemy_hurt",
          1,
          this.x + this.xoff + this.ashake - 8,
          this.y,
          this.image_xscale + 0.5,
          this.image_yscale,
          0,
          GC.white,
          1,
        );
      }
    } else {
      if (this.state === 3) {
        if (Gy.monsterhp[Gc] <= Gy.monstermaxhp[Gc] / 3) {
          Gy.monsterstatus[Gc] = 1;
          if (Gy.monstercomment[Gc] === " ") {
            Gy.monstercomment[Gc] = "(Tired)";
          }
        }
        this.hurttimer--;
        if (this.hurttimer < 0) {
          this.state = 0;
        } else {
          if (Gy.monster[Gc] === 0) {
            this.scr_defeatrun();
            return;
          }
          this.hurtshake++;
          if (this.hurtshake > 1) {
            if (this.shakex > 0) {
              this.shakex--;
            }
            if (this.shakex < 0) {
              this.shakex++;
            }
            this.shakex = -this.shakex;
            this.hurtshake = 0;
          }
          let Gg = this.hurtsprite;
          if (this.image_xscale > 1.5) {
            Gs.draw_sprite_ext(
              Gg,
              0,
              this.x + this.xoff + this.shakex,
              this.y,
              this.image_xscale,
              this.image_yscale,
              0,
              GC.white,
              1,
            );
          } else {
            Gs.draw_sprite_ext(
              Gg,
              1,
              this.x + this.xoff + this.shakex - 8,
              this.y,
              this.image_xscale + 0.5,
              this.image_yscale,
              0,
              GC.white,
              1,
            );
          }
        }
      }
      if (this.state === 0) {
        let b0 = this.idlesprite;
        if (Gy.mercymod[Gc] >= Gy.mercymax[Gc] || this.blown === 1) {
          b0 = this.sparedsprite;
        }
        Gs.draw_sprite_ext(
          b0,
          this.animsiner / 5,
          this.x + this.xoff,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          this.image_blend,
          1,
        );
        if (this.flash === 1) {
          this.fsiner++;
          Gs.draw_sprite_white(
            b0,
            this.animsiner / 5,
            this.x + this.xoff,
            this.y,
            this.image_xscale,
            this.image_yscale,
            0,
            -GE(this.fsiner / 5) * 0.4 + 0.6,
          );
        }
      }
      if (this.becomeflash === 0) {
        this.flash = 0;
      }
      this.becomeflash = 0;
    }
  }
};
GX(GS, "obj_rabbick_enemy");
Gt(GS, "kinds", Gl("obj_rabbick_enemy", G1));
Gt(GS, "defaultDepth", 90);
Gt(GS, "defaultSprite", "spr_rabbick_enemy");
var GD = GS;
var GH = null;
try {
  GH = (await GP("./c-7XXYKA53.js", import.meta.url)).obj_chaseenemy || null;
} catch {
  GH = null;
}
var Gz = class bb extends Gv {
  create() {
    this.visible = false;
    this.radius = 90;
    this.con = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  step() {
    let Gs = GJ.first("obj_mainchara");
    if (Gs) {
      let Gc = Gs.x + Gs.sprite_width / 2;
      let Gg = this.x + this.sprite_width / 2;
      if (Gq(Gc - Gg) <= this.radius && Gs.y >= this.y && this.con === 0) {
        GV("snd_wing");
        GV("snd_wing", {
          pitch: 0.8,
        });
        this.con = 1;
        this.visible = true;
        let b0 = GA(this.x, this.y, GH);
        b0.vspeed = 16;
      }
    }
  }
};
GX(Gz, "obj_rabbick_bush");
Gt(Gz, "kinds", Gl("obj_rabbick_bush", Gv));
Gt(Gz, "defaultDepth", 800000);
Gt(Gz, "defaultSprite", "spr_rabbick_bushhole");
var Ga = Gz;
var GO = null;
try {
  let bh = await GP("./c-6OFQKP4B.js", import.meta.url);
  if (bh && bh.obj_diamondenemy) {
    GO = bh;
  }
} catch {
  GO = null;
}
var GT = GO
  ? {
      cls: GO.obj_diamondenemy,
      type: 5,
      x: 460,
      y: 180,
      setup: GO.setupStats,
    }
  : {
      cls: null,
      type: 0,
      x: 460,
      y: 180,
      setup: GX(() => {}, "setup"),
      missing: "obj_diamondenemy",
      missingType: 5,
    };
var GI = [
  {
    id: "rabbick",
    name: "Rabbick",
    chapter: 1,
    area: "Field",
    desc: "Rabbick.#Hopping bunnies and#carrot drops.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: GD,
        type: 13,
        x: 480,
        y: 140,
        setup: GY,
      },
    ],
    battlemsg: "* Rabbick slithered in the way!",
    encounterno: 16,
    music: "battle",
  },
  {
    id: "rabbick2",
    name: "Rabbick x2",
    chapter: 1,
    area: "Field",
    desc: "Two Rabbicks.#Blow them all away.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: GD,
        type: 13,
        x: 480,
        y: 60,
        setup: GY,
      },
      {
        cls: GD,
        type: 13,
        x: 460,
        y: 180,
        setup: GY,
      },
    ],
    battlemsg: "* Rabbicks slithered in the way!",
    encounterno: 17,
    music: "battle",
  },
  {
    id: "rabbick_rudinn",
    name: "Rabbick + Rudinn",
    chapter: 1,
    area: "Field",
    desc: "Rabbick and Rudinn.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: GD,
        type: 13,
        x: 480,
        y: 60,
        setup: GY,
      },
      GT,
    ],
    battlemsg: "* Rabbick slithered in the way!",
    encounterno: 24,
    music: "battle",
  },
];
GL(GD, "G.mnfight = 2;");
export {
  GM as a,
  Gu as b,
  GY as c,
  Gm as d,
  GW as e,
  GN as f,
  Go as g,
  GF as h,
  GD as i,
  Ga as j,
  GI as k,
  Gn as l,
};
function GP(Gs, Gc) {
  var Gg = new URL(Gs, Gc).href;
  var b0 = globalThis.__drWarm;
  return (b0 ? b0(Gg) : Promise.resolve()).then(function () {
    return import(Gg).catch(function (b1) {
      try {
        b1.reload = true;
        b1.what = "the game code";
      } catch (b4) {}
      throw b1;
    });
  });
}
