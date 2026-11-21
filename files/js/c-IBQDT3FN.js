import { b as R0, c as R1 } from "./c-2XD6JUBJ.js";
import { G as R2, s as R3 } from "./c-Q4AJT7BT.js";
import { a as R4, c as R5, f as R6, h as R7, i as R8 } from "./c-66FIJ62A.js";
import { f as R9, g as RR, i as Ro } from "./c-UDQUHXBV.js";
import { a as RZ, f as RO, n as Rl, p as Rj } from "./c-F4ZSRAAO.js";
import { D as RE, I as RM, M as Rw, g as RH, n as RI } from "./c-O6GE5FYX.js";
import {
  Ja as RY,
  La as Ry,
  ga as Rk,
  gb as Rg,
  hb as Rx,
  j as RL,
  m as Rn,
  n as RD,
  o as Rb,
  ob as RT,
  w as Rf,
  x as RC,
  zb as Ra,
} from "./c-ZEHUSSXN.js";
import { a as Rd, c as RG, e as RN, g as RQ, l as RS } from "./c-7Q4J33FN.js";
var RU = {};
RG(RU, {
  FIGHTS: () => o8,
  SOUNDS: () => Rp,
  SPRITES: () => RJ,
  obj_defeatanim: () => RA,
  obj_diamondenemy: () => Ri,
  obj_dknight_slasher: () => Rq,
  obj_rudinnranger: () => Re,
  obj_spareanim: () => RP,
  setupRangerStats: () => Rv,
  setupStats: () => RB,
});
RS();
var RJ = [
  "spr_diamondm_idle",
  "spr_diamondm_hurt",
  "spr_diamondm_spared",
  "spr_daimond_knight_idle",
  "spr_diamond_knight_hurt",
  "spr_diamond_knight_spared",
  "spr_diamond_knight_slash",
  "spr_diamondswordbullet",
  "spr_diamondbullet",
  "spr_diamondbullet_form",
  "spr_diamondbullet_vert",
  "spr_defeatsweat",
  "spr_sparestar_anim",
  "spr_battleblcon_long",
];
var Rp = ["snd_defeatrun", "snd_spare"];
var Rm = Rd(() => {
  RH.msg = new Array(100).fill(" ");
}, "newmsg");
var Rc = Rd((oo, oZ) => {
  RH.msg[oo] = "\\TX \\F0 \\E" + oZ + " \\FS \\TS %";
}, "scr_susface");
var Ru = Rd((oo, oZ) => {
  RH.msg[oo] = "\\TX \\F0 \\E" + oZ + " \\FR \\TR %";
}, "scr_ralface");
function RV() {
  let oo = [];
  let oZ = "";
  for (let oO = 0; oO < 100; oO++) {
    let ol = RH.msg[oO];
    if (ol === undefined || ol === " " || ol === "") {
      break;
    }
    if (/^\\TX .*%$/.test(ol)) {
      let oj = /\\E([0-9A-Fa-f])/.exec(ol);
      oZ = oj ? "\\E" + oj[1] : "";
      continue;
    }
    oo.push(oZ + ol);
    oZ = "";
  }
  Rm();
  oo.forEach((oE, oM) => {
    RH.msg[oM] = oE;
  });
}
Rd(RV, "packFaces");
function RB(oo) {
  RH.monstername[oo] = "Rudinn";
  RH.monstermaxhp[oo] = 120;
  RH.monsterhp[oo] = 120;
  RH.monsterat[oo] = 5;
  RH.monsterdf[oo] = 0;
  RH.monsterexp[oo] = 0;
  RH.monstergold[oo] = 30;
  RH.sparepoint[oo] = 10;
  RH.mercymod[oo] = 0;
  RH.mercymax[oo] = 100;
  RH.canact[oo][0] = 1;
  RH.actname[oo][0] = "Check";
  RH.canact[oo][1] = 1;
  RH.actname[oo][1] = "Convince";
  RH.canact[oo][2] = 1;
  RH.actname[oo][2] = "Lecture";
  if (RI(2) && RH.plot < 150) {
    RH.canact[oo][3] = 1;
    RH.actname[oo][3] = "Warning";
    RH.actactor[oo][3] = 3;
  }
}
Rd(RB, "setupStats");
function Rv(oo) {
  RH.monstername[oo] = "Rudinn Ranger";
  RH.monstermaxhp[oo] = 170;
  RH.monsterhp[oo] = 170;
  RH.monsterat[oo] = 8;
  RH.monsterdf[oo] = 0;
  RH.monsterexp[oo] = 0;
  RH.monstergold[oo] = 45;
  RH.sparepoint[oo] = 25;
  RH.mercymod[oo] = 0;
  RH.mercymax[oo] = 100;
  RH.canact[oo][0] = 1;
  RH.actname[oo][0] = "Check";
  RH.canact[oo][1] = 1;
  RH.actname[oo][1] = "Convince";
  RH.canact[oo][2] = 1;
  RH.actname[oo][2] = "Compliment";
  RH.actactor[oo][2] = 2;
}
Rd(Rv, "setupRangerStats");
var Rr = class ow extends Rg {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    Ry("snd_spare");
    RY("snd_spare");
  }
  draw(oo) {
    let oZ = this.sprite_index;
    let oO = this.image_index;
    let ol = this.image_xscale;
    let oj = this.image_yscale;
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      oo.draw_sprite_white(
        oZ,
        oO,
        this.x + this.afterimage * 4,
        this.y,
        ol,
        oj,
        0,
        0.7 - this.afterimage / 25,
      );
      oo.draw_sprite_white(
        oZ,
        oO,
        this.x + this.afterimage * 8,
        this.y,
        ol,
        oj,
        0,
        0.4 - this.afterimage / 30,
      );
    }
    if (this.t < 6) {
      if (this.t < 5) {
        oo.draw_sprite_ext(
          oZ,
          oO,
          this.x,
          this.y,
          ol,
          oj,
          0,
          this.image_blend,
          1 - this.neotone / 4,
        );
      }
      let oE = this.t / 5;
      if (oE > 1) {
        oE = 1;
      }
      oo.draw_sprite_white(oZ, oO, this.x, this.y, ol, oj, 0, oE - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let oM = 0; oM < 2; oM += 1) {
        let oH = Ra(this.x + RL(this.sprite_width), this.y + RL(this.sprite_height), RZ);
        oH.image_xscale = 2;
        oH.image_yscale = 2;
        oH.sprite_index = "spr_sparestar_anim";
        oH.image_alpha = 2;
        oH.image_speed = 0.25;
        oH.hspeed = -3;
        oH.gravity = 0.5;
        oH.gravity_direction = 0;
        this.star[this.starcount] = oH;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let oI = 0; oI < this.starcount; oI += 1) {
        let oY = this.star[oI];
        if (oY && !oY.destroyed) {
          oY.image_angle += 10;
          oY.image_alpha -= 0.1;
          if (oY.image_alpha <= 0) {
            oY.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && ((this.neotone += 1), this.neotone >= 30)) {
      for (let oy = 0; oy < this.starcount; oy += 1) {
        let ok = this.star[oy];
        if (ok && !ok.destroyed) {
          ok.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
Rd(Rr, "obj_spareanim");
RN(Rr, "kinds", Rx("obj_spareanim", Rg));
RN(Rr, "defaultDepth", 0);
var RP = Rr;
var RF = class og extends Rg {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    RY("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(oo) {
    if (this.t === 0) {
      this.draw_self(oo);
    }
    let oZ = 0;
    if (this.g <= 5) {
      oZ = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      oZ = 1;
    }
    if (oZ === 1) {
      oo.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let oO = 0; oO <= 80; oO += 1) {
        oo.draw_sprite_ext(
          this.sprite_index,
          this.image_index,
          this.x + oO * 4,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          this.image_blend,
          0.4 - this.t / 8 + oO / 200,
        );
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
Rd(RF, "obj_defeatanim");
RN(RF, "kinds", Rx("obj_defeatanim", Rg));
RN(RF, "defaultDepth", 0);
var RA = RF;
function Rz(oo) {
  let oZ = Ra(oo.x, oo.y, RA);
  oZ.sprite_index = oo.sprite_index;
  oZ.sprite_index = oo.hurtsprite;
  oZ.image_index = 0;
  oZ.image_xscale = oo.image_xscale;
  oZ.image_yscale = oo.image_yscale;
  oo.instance_destroy();
}
Rd(Rz, "scr_defeatrun");
var RX = class ox extends R3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
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
      rtimer: 0,
      shakex: 0,
    });
    this.image_speed = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  setupFn(oo) {}
  defeatedEvent() {}
  talk() {}
  attack() {}
  actStep() {}
  actDone() {}
  onDefeatRun() {}
  get tiredDiv() {
    return 3;
  }
  userEvent(oo) {
    if (oo === 12) {
      RH.monsterx[this.myself] = this.x + this.sprite_width / 2;
      RH.monstery[this.myself] = this.y + this.sprite_height / 2;
      this.setupFn(this.myself);
      return;
    }
    if (oo === 11) {
      this.defeatedEvent();
      return;
    }
    if (oo === 10) {
      this.spared();
      return;
    }
    super.userEvent(oo);
  }
  spared() {
    let oo = Ra(this.x, this.y, RP);
    oo.sprite_index = this.sparedsprite;
    oo.image_index = 0;
    oo.image_xscale = this.image_xscale;
    oo.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  step() {
    let oo = this.myself;
    if (RH.monster[oo] === 1) {
      if (RH.mnfight === 1 && this.talked === 0) {
        Rw(this);
        if (!RT.exists("obj_darkener")) {
          Ra(0, 0, Rj);
        }
        RH.typer = 50;
        Rm();
        this.talk();
        Ro(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && RH.mnfight === 1) {
        this.rtimer = 0;
        if (Rk() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          RT.with("obj_writer", (oZ) => oZ.instance_destroy());
          RH.mnfight = 2;
        }
        if (RH.mnfight === 2) {
          if (!RT.exists("obj_moveheart")) {
            Rl();
          }
          if (!RT.exists("obj_growtangle")) {
            Ra(320, 170, RO);
          }
        }
      }
      if (RH.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.attack();
        } else {
          RH.turntimer = 120;
        }
      }
      if (RH.mnfight === 2 && RH.turntimer <= 1) {
        if (this.battlecancel === 1) {
          RH.mercymod[oo] = 999;
        }
        if (this.battlecancel === 2) {
          RT.with("obj_battlecontroller", (oZ) => {
            oZ.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (this.con === 1) {
      this.con = 2;
      this.alarm[4] = 10;
    }
    if (this.con === 3) {
      RH.typer = 50;
      RH.mercymod[oo] = 999;
      Rm();
      RH.msg[0] = "Alright^1,&you convinced&me!!/%";
      Ro(this.x - 160, this.y, 3);
      this.con = 4;
    }
    if (this.con === 4 && !RT.exists("obj_writer")) {
      this.hspeed = 15;
      this.con = 5;
      this.alarm[4] = 15;
      RT.with("obj_battlecontroller", (oZ) => {
        oZ.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      RT.with("obj_battlecontroller", (oZ) => {
        oZ.noreturn = 0;
      });
      this.scr_monsterdefeat();
      this.instance_destroy();
      this.con = 7;
    }
    if (RH.myfight === 3) {
      this.actStep();
      this.actTail();
    }
    if (RH.myfight === 7) {
      this.hspeed = 15;
    }
  }
  alarmEvent(oo) {
    if (oo === 4) {
      this.con += 1;
    }
  }
  actTail() {
    if (this.actcon === 1 && !RT.exists("obj_writer")) {
      this.actDone();
      this.actcon = 0;
      R2();
    }
    if (this.actcon === 10 && !RT.exists("obj_writer")) {
      RH.typer = 50;
      Rm();
      RH.msg[0] = "You kidding?&I can't quit.&Stopping you&is my job!/%";
      Ro(this.x - 160, this.y, 3);
      this.actcon = 11;
    }
    if (this.actcon === 11 && !RT.exists("obj_writer")) {
      RH.typer = 45;
      RH.fc = 2;
      RH.fe = 8;
      Rm();
      RH.msg[0] = "* Really^1?&* What do you spend your money on?/%";
      R9();
      this.actcon = 12;
    }
    if (this.actcon === 12 && !RT.exists("obj_writer")) {
      RH.typer = 50;
      Rm();
      RH.msg[0] = "I'm a normal&person./";
      RH.msg[1] = "I spend all&my money on&RENT and&MYSTIC GEMs./%";
      Ro(this.x - 160, this.y, 3);
      this.actcon = 14;
    }
    if (this.actcon === 14 && !RT.exists("obj_writer")) {
      RH.typer = 45;
      RH.fc = 2;
      RH.fe = 3;
      Rm();
      RH.msg[0] = "* (Kris^1, let's try CONVINCING them again...)/%";
      R9();
      this.nexttry = 1;
      this.actcon = 1;
    }
  }
  draw(oo) {
    let oZ = this.myself;
    if (this.state === 3) {
      if (RH.monsterhp[oZ] <= RH.monstermaxhp[oZ] / this.tiredDiv) {
        RH.monsterstatus[oZ] = 1;
        if (RH.monstercomment[oZ] === " ") {
          RH.monstercomment[oZ] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (RH.monster[oZ] === 0) {
          this.onDefeatRun();
          Rz(this);
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
        oo.draw_sprite_ext(
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
      let oO = this.idlesprite;
      if (RH.mercymod[oZ] >= RH.mercymax[oZ]) {
        oO = this.sparedsprite;
      }
      oo.draw_sprite_ext(oO, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        oo.draw_sprite_white(
          oO,
          this.siner / 6,
          this.x,
          this.y,
          2,
          2,
          0,
          -RC(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
Rd(RX, "obj_rudinnbase");
RN(RX, "kinds", Rx("obj_rudinnbase", R3));
RN(RX, "defaultDepth", 90);
var Rs = RX;
var Rh = class oL extends Rs {
  create() {
    super.create();
    this.idlesprite = "spr_diamondm_idle";
    this.hurtsprite = "spr_diamondm_hurt";
    this.sparedsprite = "spr_diamondm_spared";
  }
  get tiredDiv() {
    return 3;
  }
  setupFn(oo) {
    RB(oo);
  }
  defeatedEvent() {}
  onDefeatRun() {
    let oo = this.myself;
    if (RH.flag[51 + oo] === 5) {
      RH.flag[523] += 1;
    }
    RH.flag[520] += 1;
  }
  talk() {
    let oo = Rn(0, 1, 2, 3);
    if (oo === 0) {
      RH.msg[0] = "Long live&the guy&who pays us!";
    }
    if (oo === 1) {
      RH.msg[0] = "Shine,&shine";
    }
    if (oo === 2) {
      RH.msg[0] = "I'm just a&normal&person.";
    }
    if (oo === 3) {
      RH.msg[0] = "Face my&Diamond&Cutter!";
    }
    if (this.acting === 2) {
      RH.msg[0] = "Yeah I&guess that&makes&sense.";
    }
    if (this.acting === 3) {
      RH.msg[0] = "(Yawn)...&What? OK...";
    }
  }
  attack() {
    let oo = this.myself;
    let oZ = Rn(0, 1);
    if (oZ === 0) {
      let oO = Ra(this.x, this.y, R1);
      oO.type = 0;
      oO.target = this.mytarget;
      oO.damage = RH.monsterat[oo] * 5;
    } else {
      let ol = Ra(this.x, this.y, R1);
      ol.type = 1;
      ol.target = this.mytarget;
      ol.damage = RH.monsterat[oo] * 5;
    }
    this.turns += 1;
    RH.turntimer = 140;
    this.attacked = 1;
    RH.typer = 6;
    RH.fc = 0;
    oZ = Rn(0, 1, 2, 3, 4);
    if (oZ === 0) {
      RH.battlemsg[0] = "* Rudinn is glimmering plainly.";
    }
    if (oZ === 1) {
      RH.battlemsg[0] = "* Rudinn has no strong opinions one way or the other.";
    }
    if (oZ === 2) {
      RH.battlemsg[0] = "* Rudinn thinks about elaborate stones.";
    }
    if (oZ === 3) {
      RH.battlemsg[0] = "* Rudinn dislikes its boss^1, but doesn't care enough to quit.";
    }
    if (oZ === 4) {
      RH.battlemsg[0] = "* Smells like jewelry.";
    }
    if (RH.monsterstatus[oo] === 1) {
      RH.battlemsg[0] = "* Rudinn is starting to fall asleep.";
    }
    if (RH.monsterhp[oo] <= RH.monstermaxhp[oo] / 3) {
      RH.battlemsg[0] = "* Rudinn's luster begins to fade.";
    }
    if (RH.mercymod[oo] >= RH.mercymax[oo]) {
      RH.msg[0] = "* Rudinn is alright with not fighting.";
    }
  }
  actStep() {
    let oo = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Rm();
      RH.msg[0] = "* RUDINN - AT 6 DF 0&* This ambivalent diamond isn't any girl's best friend./%";
      RR();
    }
    if (this.acting === 2 && this.actcon === 0) {
      if (this.nexttry === 1) {
        RH.flag[208] = 1;
      }
      Rm();
      RH.msg[0] = "* You told Rudinn to quit fighting^1.&* It was utterly swayed./%";
      RM(oo, 100);
      RR();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      Rm();
      RH.msg[0] = "* You lectured the enemies on the importance of kindness./";
      RH.msg[1] = "* The enemies became \\cBTIRED\\cW.../%";
      for (let oZ = 0; oZ < 3; oZ += 1) {
        RH.monstercomment[oZ] = "(Tired)";
        RH.monsterstatus[oZ] = 1;
      }
      RM(oo, 50);
      RR();
      this.actcon = 1;
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      Rm();
      RH.msg[0] = "* You and Ralsei warned Rudinn about Susie^1.&* The enemy went on guard.../%";
      if (RE() > 1) {
        RH.msg[0] =
          "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
      }
      for (let oO = 0; oO < 3; oO += 1) {
        RH.monstercomment[oO] = "(Warned)";
        RH.automiss[oO] = 1;
      }
      RR();
    }
  }
};
Rd(Rh, "obj_diamondenemy");
RN(Rh, "kinds", Rx("obj_diamondenemy", Rs));
RN(Rh, "defaultDepth", 90);
RN(Rh, "defaultSprite", "spr_diamondm_idle");
var Ri = Rh;
var RK = class on extends Rs {
  create() {
    super.create();
    this.convinced = 0;
    this.complimented = 0;
    this.idlesprite = "spr_daimond_knight_idle";
    this.hurtsprite = "spr_diamond_knight_hurt";
    this.sparedsprite = "spr_diamond_knight_spared";
  }
  get tiredDiv() {
    return 2;
  }
  setupFn(oo) {
    Rv(oo);
  }
  defeatedEvent() {}
  talk() {
    let oo = Rn(0, 1, 2, 3);
    if (oo === 0) {
      RH.msg[0] = "Long live&the king!";
    }
    if (oo === 1) {
      RH.msg[0] = "Glimmer&glammor";
    }
    if (oo === 2) {
      RH.msg[0] = "Perish,&Lightners!";
    }
    if (oo === 3) {
      RH.msg[0] = "I'm the,&diamond,&here's the&rough!";
    }
    if (this.acting === 2) {
      RH.msg[0] = "Enough!&You can't&convince&me!";
    }
    if (this.acting === 3) {
      if (oo === 0 || oo === 1) {
        RH.msg[0] = "No one ever&said THAT to&me before&...";
      }
      if (oo === 2 || oo === 3) {
        RH.msg[0] = "The King&never said&THAT to me&before...";
      }
      if (this.complimented >= 2) {
        RH.msg[0] = "Yeah it&would be&weird.";
      }
    }
  }
  attack() {
    let oo = this.myself;
    let oZ = RT.number("obj_rudinnranger");
    if (oZ === 99) {
      let oO = Ra(this.x, this.y, R1);
      oO.type = 1;
      oO.target = this.mytarget;
      oO.damage = RH.monsterat[oo] * 5;
      oO.ratio = 1;
    } else {
      this.visible = false;
      let ol = Ra(this.x, this.y, Rq);
      ol.inv = 60;
      ol.target = this.mytarget;
      ol.grazepoints = 6;
      ol.timepoints = 2;
      ol.active = 0;
      ol.creator = this;
      ol.damage = RH.monsterat[oo] * 5;
    }
    this.turns += 1;
    RH.turntimer = 180;
    this.attacked = 1;
    RH.typer = 6;
    RH.fc = 0;
    oZ = Rn(0, 1, 2, 3, 4);
    if (oZ === 0) {
      RH.battlemsg[0] = "* Rudinn Ranger gleams gallantly.";
    }
    if (oZ === 1) {
      RH.battlemsg[0] = "* Rudinn Ranger puts a power limiter on its feelings.";
    }
    if (oZ === 2) {
      RH.battlemsg[0] = "* Rudinn Ranger fantasizes about divine gems.";
    }
    if (oZ === 3) {
      RH.battlemsg[0] = "* Rudinn Ranger pledges allegiance.";
    }
    if (oZ === 4) {
      RH.battlemsg[0] = "* Smells like crystal.";
    }
    if (RH.monsterstatus[oo] === 1) {
      RH.battlemsg[0] = "* Rudinn Ranger is starting to fall asleep.";
    }
    if (RH.monsterhp[oo] <= RH.monstermaxhp[oo] / 3) {
      RH.battlemsg[0] = "* Rudinn Ranger's luster begins to fade.";
    }
    if (RH.mercymod[oo] >= RH.mercymax[oo]) {
      RH.msg[0] = "* Rudinn Ranger seems totally flattered.";
    }
  }
  actDone() {
    if (this.acting === 3) {
      RM(this.myself, 100);
    }
  }
  actStep() {
    let oo = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Rm();
      RH.msg[0] =
        "* RUDINN RANGER - AT 8 DF 0&* Ideally multicolored, but they all wanted to be red./%";
      RR();
    }
    if (this.acting === 2 && this.actcon === 0) {
      Rm();
      RH.msg[0] = "* You tried to explain why fighting is bad./";
      RH.msg[1] = "* But Rudinn Ranger just became \\cBTIRED\\cW.../%";
      RH.monstercomment[oo] = "(Tired)";
      RH.monsterstatus[oo] = 1;
      RM(oo, 50);
      RR();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      Rm();
      RH.msg[0] = "* Susie COMPLIMENTed the enemy...?/";
      Rc(1, 2);
      let oZ = Rn(0, 1, 2);
      if (oZ === 0) {
        RH.msg[2] = '* "Your outfit is NOT disgusting."/%';
      }
      if (oZ === 1) {
        RH.msg[2] = '* "Please keep body tackling the soda machine."/%';
      }
      if (oZ === 2) {
        RH.msg[2] = "* Nice^1, you guys look like you're gonna kill me./%";
      }
      if (RH.flag[503] === 0) {
        RH.msg[0] = "* You told Susie to COMPLIMENT the enemy!/";
        Rc(1, 0);
        RH.msg[2] = "* ... uhhh^1, are you serious?/";
        RH.msg[3] = "\\E2* What good can I say about someone trying to kill us?/";
        Ru(4, 6);
        RH.msg[5] = "* Aww^1, Susie..^1. if you're stuck^1, why not try.../";
        RH.msg[6] = "* ... saying something you wish someone'd say to you?/";
        Rc(7, 0);
        RH.msg[8] = "* .../";
        RH.msg[9] = '\\E2* "You are unbanned from free ham sandwich day"/%';
        RH.flag[503] = 1;
      }
      if (this.complimented >= 1) {
        RH.msg[0] = "* Susie actively didn't COMPLIMENT the enemy!/";
        Rc(1, 0);
        RH.msg[2] = "* Look^1, it's just gonna be weird if I keep going./%";
        this.complimented = 2;
      }
      RV();
      RR();
      this.actcon = 1;
      if (this.complimented === 0) {
        this.complimented = 1;
      }
    }
  }
};
Rd(RK, "obj_rudinnranger");
RN(RK, "kinds", Rx("obj_rudinnranger", Rs));
RN(RK, "defaultDepth", 90);
RN(RK, "defaultSprite", "spr_daimond_knight_idle");
var Re = RK;
var RW = class oD extends R5 {
  create() {
    Object.assign(this, {
      con: 0,
      movecon: 0,
      movetimer: 0,
      timer: 0,
      image_speed: 0,
      image_index: 0,
      image_xscale: 2,
      image_yscale: 2,
      movesiner: 0,
      movefactor: 0,
      type: 0,
      creator: null,
      damage: 0,
      grazepoints: 0,
      timepoints: 0,
      inv: 60,
      target: 0,
      active: 0,
      throwernumber: 1,
      thrown: 0,
    });
  }
  step() {
    if (this.con === 0) {
      this.throwernumber = RT.number("obj_dknight_slasher");
      this.con = 12;
      this.movecon = 4;
      this.timer = 0;
      this.thrown = 0;
      this.image_index = 0;
    }
    if (this.movecon === 4) {
      this.movesiner += 1;
      if (RH.turntimer >= 30 && this.movefactor < 1) {
        this.movefactor += 0.1;
      }
      this.y = this.ystart + Rf(this.movesiner / 16) * 40 * this.movefactor;
      if (RH.turntimer <= 30) {
        if (this.movefactor > 0) {
          this.movefactor -= 0.1;
        } else {
          this.movefactor = 0;
        }
      }
    }
    if (this.con === 10) {
      this.timer = 0;
      this.thrown = 0;
      this.image_index = 0;
      if (RH.turntimer > 15) {
        this.con = 11;
      }
    }
    if (this.con === 11) {
      this.image_index += 0.334;
      if (this.image_index >= 4 && this.thrown === 0) {
        let oo = Ra(this.x + 6, this.y + 34, R6);
        oo.siner = this.movesiner;
        R4(this, oo);
        oo.throwernumber = this.throwernumber;
        if (!oo.destroyed) {
          oo.active = 1;
          oo.sprite_index = "spr_diamondswordbullet";
          oo.image_xscale = 2;
          oo.image_yscale = 2;
          let oZ = RT.first("obj_heart");
          oo.move_towards_point(
            oZ ? oZ.x + 8 : 320,
            oZ ? oZ.y + 8 : 170,
            9 + Rf(oo.siner / 10) * 4,
          );
          if (oo.throwernumber === 2) {
            oo.speed *= 0.85;
          }
          if (oo.throwernumber === 3) {
            oo.speed *= 0.7;
          }
          oo.direction += 5 - RL(10);
          oo.image_angle = oo.direction;
          oo.depth = this.depth + 1;
        }
        this.thrown = 1;
      }
      if (this.image_index >= 6) {
        this.con = 12;
        this.timer = 0;
      }
    }
    if (this.con === 12) {
      this.timer += 1;
      if (this.timer >= this.throwernumber * 3) {
        this.con = 10;
      }
    }
  }
  destroy() {
    if (this.creator && !this.creator.destroyed) {
      this.creator.visible = true;
    }
  }
};
Rd(RW, "obj_dknight_slasher");
RN(RW, "kinds", Rx("obj_dknight_slasher", R5));
RN(RW, "defaultDepth", 0);
RN(RW, "defaultSprite", "spr_diamond_knight_slash");
var Rq = RW;
R0({
  0: (oo, { heart: oZ }) => {
    if (oo.btimer >= oo.timermax * oo.ratio) {
      oo.btimer = 0;
      let oO = 30 + RL(120);
      let ol = 140 + RL(80);
      let oj = RD(ol, oO);
      let oE = Rb(ol, oO);
      let oM = oZ ? oZ.x : 320;
      let oH = oZ ? oZ.y : 170;
      let oI = Ra(oM + 8 + oj, oH + 8 + oE, R8);
      if (oI.y < 40) {
        oI.y = 40;
      }
      oI.damage = oo.damage;
      oI.target = oo.target;
    }
  },
  1: (oo, { heart: oZ }) => {
    if (oo.btimer >= oo.ratio * 9) {
      oo.btimer = 0;
      let oO = (140 + RL(40)) * oo.side;
      let ol = -100 + RL(200);
      if (Rn(0, 1, 2, 3) === 3) {
        ol = -10 + RL(20);
      }
      let oj = oZ ? oZ.x : 320;
      let oE = oZ ? oZ.y : 170;
      let oM = Ra(oj + 8 + ol, oE + 8 + oO, R7);
      oM.damage = oo.damage;
      oM.target = oo.target;
    }
  },
});
var o0 = {};
for (let [ob, oT] of [
  ["hathy", "./hathy.js"],
  ["jigsawry", "./jigsawry.js"],
  ["rabbick", "./rabbick.js"],
]) {
  Promise.resolve()
    .then(() => o9(oT))
    .then((oo) => {
      o0[ob] = oo;
    })
    .catch(() => {});
}
var o1 = Rd(
  (oo, oZ) => ({
    cls: Ri,
    type: 5,
    x: oo,
    y: oZ,
    setup: RB,
  }),
  "R",
);
var o2 = Rd(
  (oo, oZ) => ({
    cls: Re,
    type: 22,
    x: oo,
    y: oZ,
    setup: Rv,
  }),
  "RR",
);
function o3(oo, oZ, oO, ol, oj, oE) {
  let oM = o0[oo];
  if (!oM || !oM[oZ] || !oM[oO]) {
    return null;
  } else {
    return {
      cls: oM[oZ],
      type: ol,
      x: oj,
      y: oE,
      setup: oM[oO],
    };
  }
}
Rd(o3, "sib");
var o4 = Rd((oo, oZ) => o3("hathy", "obj_heartenemy", "setupStats", 6, oo, oZ), "HATHY");
var o5 = Rd((oo, oZ) => o3("jigsawry", "obj_jigsawryenemy", "setupStats", 15, oo, oZ), "JIGSAW");
var o6 = Rd((oo, oZ) => o3("rabbick", "obj_rabbick_enemy", "setupStats", 13, oo, oZ), "RABBICK");
var o7 = {
  chapter: 1,
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  music: "battle",
};
var o8 = [
  {
    ...o7,
    id: "rudinn",
    name: "Rudinn",
    area: "Field",
    desc: "Rudinn.#Diamond bullets.",
    monsters: [o1(480, 140)],
    encounterno: 4,
    get battlemsg() {
      let oo = "* Rudinn drew near!";
      if (RH.flag[500] >= 1) {
        oo = "* A different Rudinn from last time drew near!";
      }
      if (RH.flag[500] === 2) {
        oo = "* Assumedly another different Rudinn appeared!";
      }
      return oo;
    },
  },
  {
    ...o7,
    id: "rudinn2",
    name: "Rudinn x2",
    area: "Field",
    desc: "A necklace of#Rudinns.",
    monsters: [o1(480, 110), o1(500, 200)],
    battlemsg: "* A necklace of Rudinns blocks your path.",
    encounterno: 5,
  },
  {
    ...o7,
    id: "rudinn_hathy",
    name: "Rudinn & Hathy",
    area: "Field",
    desc: "Rudinn and Hathy.",
    get monsters() {
      return [o1(480, 110), o4(500, 200)].filter(Boolean);
    },
    battlemsg: "* Rudinn and Hathy blocked the way!",
    encounterno: 6,
  },
  {
    ...o7,
    id: "smorgasboard",
    name: "Smorgasboard",
    area: "Field",
    desc: "Jigsawry, Rudinn#and Hathy.",
    get monsters() {
      return [o5(480, 20), o1(500, 120), o4(460, 220)].filter(Boolean);
    },
    battlemsg: "* Smorgasboard.",
    encounterno: 23,
  },
  {
    ...o7,
    id: "rabbick_rudinn",
    name: "Rabbick & Rudinn",
    area: "Field",
    desc: "Rabbick and Rudinn.",
    get monsters() {
      return [o6(480, 60), o1(460, 180)].filter(Boolean);
    },
    battlemsg: "* Rabbick slithered in the way!",
    encounterno: 24,
  },
  {
    ...o7,
    id: "rudinnranger2",
    name: "Rudinn Ranger x2",
    area: "Card Castle",
    desc: "Two Rudinn Rangers.#Sword throwers.",
    monsters: [o2(480, 110), o2(500, 200)],
    battlemsg: "* Rudinn Rangers came sparkling into view!",
    encounterno: 28,
  },
  {
    ...o7,
    id: "various_guys",
    name: "Various Guys",
    area: "Field",
    desc: "Rudinn, Hathy#and Rudinn.",
    get monsters() {
      return [o1(480, 20), o4(500, 120), o1(460, 220)].filter(Boolean);
    },
    battlemsg: "* Various guys appeared!",
    encounterno: 33,
  },
];
function o9(oo) {
  switch (oo) {
    case "../battle.js":
      return oR("./battle.js", import.meta.url);
    case "../bullets.js":
      return oR("./bullets.js", import.meta.url);
    case "../controller.js":
      return oR("./c-YERAW7RE.js", import.meta.url);
    case "../globals.js":
      return oR("./globals.js", import.meta.url);
    case "../gm.js":
      return oR("./gm.js", import.meta.url);
    case "../heart.js":
      return oR("./heart.js", import.meta.url);
    case "../text.js":
      return oR("./c-AV4PFDXU.js", import.meta.url);
    case "./hathy.js":
      return oR("./c-Z3ACOFIQ.js", import.meta.url);
    case "./jigsawry.js":
      return oR("./c-UEB67DMY.js", import.meta.url);
    case "./rabbick.js":
      return oR("./c-A66QSUM3.js", import.meta.url);
    case "./rudinn.js":
      return Promise.resolve().then(() => require_rudinn());
    default:
      return Promise.reject(new Error("module not in build"));
  }
}
Rd(o9, "__dr_imp");
RQ(Rs, "G.mnfight = 2;");
export {
  RJ as a,
  Rp as b,
  RB as c,
  Rv as d,
  RP as e,
  RA as f,
  Ri as g,
  Re as h,
  Rq as i,
  o8 as j,
  RU as k,
};
function oR(oo, oZ) {
  var oO = new URL(oo, oZ).href;
  var ol = globalThis.__drWarm;
  return (ol ? ol(oO) : Promise.resolve()).then(function () {
    return import(oO).catch(function (oj) {
      try {
        oj.reload = true;
        oj.what = "the game code";
      } catch (oE) {}
      throw oj;
    });
  });
}
