import { b as e, c as E } from "./c-2XD6JUBJ.js";
import { G as p, s as n } from "./c-Q4AJT7BT.js";
import { a as i, e as r } from "./c-66FIJ62A.js";
import { g as D0, i as D1 } from "./c-UDQUHXBV.js";
import { a as D2, f as D3, n as D4, p as D5 } from "./c-F4ZSRAAO.js";
import { D as D6, I as D7, M as D8, g as D9 } from "./c-O6GE5FYX.js";
import {
  Eb as DD,
  Ja as DX,
  La as Dx,
  ga as Da,
  gb as DH,
  hb as Db,
  j as Dk,
  m as Dl,
  ob as Dg,
  x as Dc,
  zb as DF,
} from "./c-ZEHUSSXN.js";
import { a as Dv, c as Dj, e as Dh, g as DM, i as DP, l as Dq } from "./c-7Q4J33FN.js";
var Ds = {};
Dj(Ds, {
  FIGHTS: () => DR,
  SOUNDS: () => Dy,
  SPRITES: () => DO,
  obj_defeatanim: () => DU,
  obj_jigsawbullet: () => Du,
  obj_jigsawryenemy: () => DZ,
  obj_spareanim: () => DI,
  scr_defeatrun: () => DG,
  scr_spareanim: () => Dm,
  setupStats: () => DT,
});
Dq();
var DO = [
  "spr_jigsawry_idle",
  "spr_jigsawry_hurt",
  "spr_jigsawry_spared",
  "spr_jigsawbullet",
  "spr_defeatsweat",
  "spr_sparestar_anim",
  "spr_battleblcon_long",
];
var Dy = ["snd_defeatrun", "snd_spare"];
function DT(DE) {
  D9.monstername[DE] = "Jigsawry";
  D9.monstermaxhp[DE] = 90;
  D9.monsterhp[DE] = 90;
  D9.monsterat[DE] = 5;
  D9.monsterdf[DE] = 0;
  D9.monsterexp[DE] = 0;
  D9.monstergold[DE] = 20;
  D9.sparepoint[DE] = 10;
  D9.mercymod[DE] = 0;
  D9.mercymax[DE] = 100;
  D9.canact[DE][0] = 1;
  D9.actname[DE][0] = "Check";
  D9.canact[DE][1] = 1;
  D9.actname[DE][1] = "Befriend";
  if (Array.isArray(D9.char) && D9.char.includes(2) && D9.plot < 150) {
    D9.canact[DE][2] = 1;
    D9.actname[DE][2] = "Warning";
    D9.actactor[DE][2] = 3;
  }
}
Dv(DT, "setupStats");
var DW = class Dn extends DH {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    DX("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(DE) {
    if (this.t === 0) {
      this.draw_self(DE);
    }
    let DY = 0;
    if (this.g <= 5) {
      DY = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      DY = 1;
    }
    if (DY === 1) {
      DE.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let DS = 0; DS <= 80; DS += 1) {
        DE.draw_sprite_ext(
          this.sprite_index,
          this.image_index,
          this.x + DS * 4,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          this.image_blend,
          0.4 - this.t / 8 + DS / 200,
        );
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
Dv(DW, "obj_defeatanim");
Dh(DW, "kinds", Db("obj_defeatanim", DH));
Dh(DW, "defaultDepth", 0);
var DU = DW;
function DG(DE) {
  let DY = DF(DE.x, DE.y, DU);
  DY.sprite_index = DE.sprite_index;
  DY.sprite_index = DE.hurtsprite;
  DY.image_index = 0;
  DY.image_xscale = DE.image_xscale;
  DY.image_yscale = DE.image_yscale;
  DE.instance_destroy();
}
Dv(DG, "scr_defeatrun");
var Dd = class DV extends DH {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    Dx("snd_spare");
    DX("snd_spare");
  }
  draw(DE) {
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      DE.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x + this.afterimage * 4,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        0.7 - this.afterimage / 25,
      );
      DE.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x + this.afterimage * 8,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        0.4 - this.afterimage / 30,
      );
    }
    if (this.t < 6) {
      if (this.t < 5) {
        DE.draw_sprite_ext(
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
      let DY = this.t / 5;
      if (DY > 1) {
        DY = 1;
      }
      DE.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        DY - this.tone / 5,
      );
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let DS = 0; DS < 2; DS += 1) {
        let DJ = DF(this.x + Dk(this.sprite_width), this.y + Dk(this.sprite_height), D2);
        DJ.image_xscale = 2;
        DJ.image_yscale = 2;
        DJ.sprite_index = "spr_sparestar_anim";
        DJ.image_alpha = 2;
        DJ.image_speed = 0.25;
        DJ.hspeed = -3;
        DJ.gravity = 0.5;
        DJ.gravity_direction = 0;
        this.star[this.starcount] = DJ;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let Dp = 0; Dp < this.starcount; Dp += 1) {
        let Di = this.star[Dp];
        if (Di && !Di.destroyed) {
          Di.image_angle += 10;
          Di.image_alpha -= 0.1;
          if (Di.image_alpha <= 0) {
            Di.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && ((this.neotone += 1), this.neotone >= 30)) {
      for (let Df = 0; Df < this.starcount; Df += 1) {
        let Dr = this.star[Df];
        if (Dr && !Dr.destroyed) {
          Dr.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
Dv(Dd, "obj_spareanim");
Dh(Dd, "kinds", Db("obj_spareanim", DH));
Dh(Dd, "defaultDepth", 0);
var DI = Dd;
function Dm(DE) {
  let DY = DF(DE.x, DE.y, DI);
  DY.sprite_index = DE.sprite_index;
  DY.sprite_index = DE.sparedsprite;
  DY.image_index = 0;
  DY.image_xscale = DE.image_xscale;
  DY.image_yscale = DE.image_yscale;
}
Dv(Dm, "scr_spareanim");
var DK = class Dt extends r {
  create() {
    this.damage = 0;
    this.grazepoints = 0;
    this.grazed = 0;
    this.timepoints = 0;
    this.active = 0;
    this.image_alpha = 0;
    this.init = 0;
    this.tracking = 1;
    this.timer = 0;
    this.con = 0;
    this.side = 0;
    this.fade = 0;
    this.locked = 0;
    this.ltimer = 0;
    this.joker = 0;
  }
  step() {
    if (this.init === 0 && this.image_alpha < 1) {
      this.image_alpha += 0.1;
      if (this.image_alpha >= 1) {
        this.init = 1;
        this.active = 1;
      }
    }
    if (this.tracking === 1) {
      let DE = Dg.first("obj_heart");
      if (DE) {
        if (this.side === 1 || this.side === 3) {
          if (DE.x + 10 - this.x >= 10) {
            this.x += 3;
          }
          if (DE.x + 10 - this.x <= -10) {
            this.x -= 3;
          }
        }
        if (this.side === 0 || this.side === 2) {
          if (DE.y + 10 - this.y >= 10) {
            this.y += 3;
          }
          if (DE.y + 10 - this.y <= -10) {
            this.y -= 3;
          }
        }
      }
    }
    this.timer += 1;
    if (this.timer >= 30 && this.con === 0) {
      this.tracking = 0;
      this.direction = this.side * 90 + 180;
      this.speed = 4;
      this.gravity_direction = this.side * 90;
      this.gravity = 1.2;
      if (this.joker === 1) {
        this.gravity = 1.6;
        this.speed = 6;
      }
      this.con = 1;
    }
    if (this.timer >= 40) {
      this.gravity = 0;
    }
    if (this.locked === 1) {
      this.ltimer += 1;
      if (this.ltimer >= 12) {
        this.image_alpha -= 0.2;
        this.active = 0;
      }
      if (this.ltimer >= 17) {
        this.instance_destroy();
      }
    }
  }
  endStep() {
    if (!this.destroyed) {
      for (let DE of Dg.list.slice()) {
        if (DE !== this && !DE.destroyed && !this.destroyed && !!DE.is("obj_jigsawbullet")) {
          if (DD(this, DE)) {
            this.collideWith(DE);
          }
        }
      }
    }
  }
  collideWith(DE) {
    if (
      this.con === 1 &&
      DE.con === 1 &&
      this.active === 1 &&
      DE.active === 1 &&
      this.locked === 0
    ) {
      this.speed = 0;
      this.locked = 1;
      DE.speed = 0;
      DE.locked = 1;
      for (let DY = 0; DY < 16; DY++) {
        if (this.side === 0) {
          if (this.x >= DE.x - 28) {
            this.x -= 1;
          }
          if (this.x >= DE.x - 28) {
            DE.x += 1;
          }
        }
        if (this.side === 3) {
          if (this.y >= DE.y - 28) {
            this.y -= 1;
          }
          if (this.y >= DE.y - 28) {
            DE.y += 1;
          }
        }
        if (this.side === 2) {
          if (this.x <= DE.x + 28) {
            this.x += 1;
          }
          if (this.x <= DE.x + 28) {
            DE.x -= 1;
          }
        }
        if (this.side === 1) {
          if (this.y <= DE.y + 28) {
            this.y += 1;
          }
          if (this.y <= DE.y + 28) {
            DE.y -= 1;
          }
        }
      }
    }
  }
};
Dv(DK, "obj_jigsawbullet");
Dh(DK, "kinds", Db("obj_jigsawbullet", r));
Dh(DK, "defaultDepth", 0);
Dh(DK, "defaultSprite", "spr_jigsawbullet");
var Du = DK;
function De(DE, DY) {
  let DS = DE.type;
  let DJ = 40;
  if (DS === 81) {
    DJ = 30;
  }
  if (DS === 82) {
    DJ = 26;
  }
  if (DS === 83) {
    DJ = 19;
  }
  if (DS === 84) {
    DJ = 14;
  }
  if (DE.btimer >= DJ) {
    DE.btimer = 0;
    let Dp = DY.bsx;
    let Di = DY.bsy;
    let Df = DY.heart;
    let Dr = Df ? Df.x : 310;
    let DQ = Df ? Df.y : 160;
    let DC = Dl(0, 1);
    if (DS === 81 || DS === 84) {
      DC = DE.made;
      if (DE.made === 0) {
        DE.made = 1;
      } else {
        DE.made = 0;
      }
    }
    if (DC === 0) {
      let DA = DF(Dr + 8, Di - 150, Du);
      DA.side = 3;
      let Dz = DF(Dr + 8, Di + 150, Du);
      Dz.side = 1;
      if (DS === 82) {
        DA.timer = 10;
      }
      if (DS === 82) {
        Dz.timer = 10;
      }
      if (DS === 83 || DS === 84) {
        DA.timer = 15;
      }
      if (DS === 83 || DS === 84) {
        Dz.timer = 15;
      }
      i(DE, DA);
      i(DE, Dz);
    }
    if (DC === 1) {
      let Dw = DF(Dp + 150, DQ + 8, Du);
      Dw.side = 2;
      let X0 = DF(Dp - 150, DQ + 8, Du);
      X0.side = 0;
      if (DS === 82) {
        Dw.timer = 10;
      }
      if (DS === 82) {
        X0.timer = 10;
      }
      if (DS === 83) {
        Dw.timer = 15;
      }
      if (DS === 83) {
        X0.timer = 15;
      }
      i(DE, Dw);
      i(DE, X0);
    }
    if (DS === 83) {
      Dg.with("obj_jigsawbullet", (X1) => {
        X1.joker = 1;
      });
    }
  }
}
Dv(De, "jigsawType");
e({
  80: De,
  81: De,
  82: De,
  83: De,
  84: De,
});
var DB = class X2 extends n {
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
      image_speed: 0,
      image_xscale: 2,
      image_yscale: 2,
      rtimer: 0,
      shakex: 0,
      tellme: 0,
      thissprite: "spr_jigsawry_idle",
    });
    this.idlesprite = "spr_jigsawry_idle";
    this.hurtsprite = "spr_jigsawry_hurt";
    this.sparedsprite = "spr_jigsawry_spared";
    D9.flag[20] = 0;
    this.traitorp = 0;
  }
  alarmEvent(DE) {
    if (DE === 4) {
      this.con += 1;
    }
  }
  userEvent(DE) {
    if (DE === 12) {
      D9.monsterx[this.myself] = this.x + this.sprite_width / 2;
      D9.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (DE === 11) {
      if (D9.room === "room_field1") {
        D9.flag[500] += 1;
      }
      if (D9.room === "room_field2" && D9.flag[50] !== 0) {
        D9.flag[501] = D9.flag[50];
      }
      return;
    }
    if (DE === 10) {
      Dm(this);
      this.scr_monsterdefeat();
      this.instance_destroy();
      return;
    }
  }
  step() {
    let DE = this.myself;
    if (D9.monster[DE] === 1) {
      if (D9.mnfight === 1 && this.talked === 0) {
        D8(this);
        if (!Dg.exists("obj_darkener")) {
          DF(0, 0, D5);
        }
        D9.typer = 50;
        D9.msg = new Array(100).fill(" ");
        let DY = Dl(0, 1, 2, 3);
        if (DY === 0) {
          D9.msg[0] = "H... hurting&people is&cool..";
        }
        if (DY === 1) {
          D9.msg[0] = "P... Put up&your d-dukes,&bubbo...";
        }
        if (DY === 2) {
          D9.msg[0] = "F... Fighting?&I love&fighting...";
        }
        if (DY === 3) {
          D9.msg[0] = "I... I have&a rent&payment&to make...";
        }
        if (D9.mercymod[DE] >= 100) {
          if (DY === 0 || DY === 1) {
            D9.msg[0] = "I always&wanted a&friend just&like you.";
          }
          if (DY === 2 || DY === 3) {
            D9.msg[0] = "We're friends&now, la la~";
          }
        }
        if (this.traitorp === 1) {
          if (DY === 0 || DY === 1) {
            D9.msg[0] = "WHADDA WORLD!";
          }
          if (DY === 2 || DY === 3) {
            D9.msg[0] = "I'M TOO YOUNG&TO DIE!!!";
          }
        }
        if (this.traitorp === 2) {
          if (DY === 0 || DY === 1) {
            D9.msg[0] = "BARRY!!!&THEY GOT&BARRY!!!";
          }
          if (DY === 2 || DY === 3) {
            D9.msg[0] = "BARRY!!&HANG IN&THERE BARRY!";
          }
        }
        this.traitorp = 0;
        D1(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && D9.mnfight === 1) {
        this.rtimer = 0;
        if (Da() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          Dg.with("obj_writer", (DS) => DS.instance_destroy());
          D9.mnfight = 2;
        }
        if (D9.mnfight === 2) {
          if (!Dg.exists("obj_moveheart")) {
            D4();
          }
          if (!Dg.exists("obj_growtangle")) {
            DF(320, 170, D3);
          }
        }
      }
      if (D9.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          D9.flag[20] = 0;
          if (
            Dl(0) === 0 &&
            ((this.tellme = 0),
            Dg.with("obj_dbulletcontroller", (DJ) => {
              if (DJ.type >= 80 && DJ.type <= 84) {
                Dg.with("obj_jigsawryenemy", (Dp) => {
                  Dp.tellme = 1;
                });
              }
            }),
            this.tellme === 0)
          ) {
            let DJ = DF(this.x, this.y, E);
            DJ.grazepoints = 4;
            DJ.timepoints = 2;
            let Dp = 0;
            for (let Di = 0; Di < 3; Di += 1) {
              if (D9.monstertype[Di] === 15 && D9.monster[Di] === 1) {
                Dp += 1;
              }
            }
            DJ.type = 80 + Dp;
            DJ.target = this.mytarget;
            DJ.damage = D9.monsterat[DE] * 5;
          }
          this.turns += 1;
          D9.turntimer = 140;
          this.attacked = 1;
          D9.typer = 6;
          D9.fc = 0;
          let DS = Dl(0, 1, 2, 3, 4);
          if (DS === 0) {
            D9.battlemsg[0] = "* Jigsawry is pretending to march.";
          }
          if (DS === 1) {
            D9.battlemsg[0] = "* Jigsawry is trying to calculate this month's rent.";
          }
          if (DS === 2) {
            D9.battlemsg[0] = "* Jigsawry thought of its boss and felt afraid.";
          }
          if (DS === 3) {
            D9.battlemsg[0] = "* Jigsawry is wishing it could quit its job.";
          }
          if (DS === 4) {
            D9.battlemsg[0] = "* Smells like cardboard.";
          }
          if (D9.monsterstatus[DE] === 1) {
            D9.battlemsg[0] = "* Jigsawry looks exhausted.";
          }
          if (D9.monsterhp[DE] <= D9.monstermaxhp[DE] / 3) {
            D9.battlemsg[0] = "* Jigsawry's edges are fraying.";
          }
          if (D9.mercymod[DE] >= D9.mercymax[DE]) {
            D9.msg[0] = "* Jigsawry looks happy about its life.";
          }
        } else {
          D9.turntimer = 120;
        }
      }
      if (D9.mnfight === 2 && D9.turntimer <= 1) {
        if (this.battlecancel === 1) {
          D9.mercymod[DE] = 999;
        }
        if (this.battlecancel === 2) {
          Dg.with("obj_battlecontroller", (Df) => {
            Df.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (D9.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.actcon = 1;
        D9.msg = new Array(100).fill(" ");
        D9.msg[0] =
          "* JIGSAWRY - AT 5 DF 0&* This mousenary is only fighting to make ends meet.../%";
        D0();
      }
      if (this.acting === 2 && this.actcon === 0) {
        D9.msg = new Array(100).fill(" ");
        D9.msg[0] = "* You barely lifted a finger^1, and.../%";
        D0();
        this.actcon = 3;
      }
      if (this.actcon === 3 && !Dg.exists("obj_writer")) {
        Dg.with("obj_jigsawryenemy", (Dr) => {
          D7(Dr.myself, 100);
        });
        let Df = Dl(0, 1, 2, 3);
        D9.typer = 50;
        D9.msg = new Array(100).fill(" ");
        if (Df === 0) {
          D9.msg[0] = "Of course&I'll be&your friend!/%";
        }
        if (Df === 1) {
          D9.msg[0] = "Alright!&You win!&Let's be&friends!/%";
        }
        if (Df === 2) {
          D9.msg[0] = "Friends?&I was thinking&the same&thing!/%";
        }
        if (Df === 3) {
          D9.msg[0] = "... well,&if we HAVE&to be&friends.../%";
        }
        D1(this.x - 160, this.y, 3);
        this.actcon = 1;
      }
      if (this.acting === 3 && this.actcon === 0) {
        this.actcon = 1;
        D9.msg = new Array(100).fill(" ");
        D9.msg[0] =
          "* You and Ralsei warned Jigsawry about Susie^1.&* The enemy went on guard.../%";
        if (D6() > 1) {
          D9.msg[0] =
            "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
        }
        for (let Dr = 0; Dr < 3; Dr += 1) {
          D9.monstercomment[Dr] = "(Warned)";
          D9.automiss[Dr] = 1;
        }
        D0();
      }
      if (this.actcon === 1 && !Dg.exists("obj_writer")) {
        this.actcon = 0;
        p();
      }
    }
  }
  draw(DE) {
    let DY = this.myself;
    if (this.state === 3) {
      D9.mercymod[DY] = 0;
      this.traitorp = 1;
      D9.flag[20] = 1;
      Dg.with("obj_jigsawryenemy", (DS) => {
        if (DS.traitorp === 0) {
          DS.traitorp = 2;
        }
        D9.mercymod[DS.myself] = 0;
      });
      if (D9.monsterhp[DY] <= D9.monstermaxhp[DY] - 20) {
        D9.monsterstatus[DY] = 1;
        if (D9.monstercomment[DY] === " ") {
          D9.monstercomment[DY] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (D9.monster[DY] === 0) {
          DG(this);
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
        DE.draw_sprite_ext(
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
      this.thissprite = this.idlesprite;
      if (D9.mercymod[DY] >= D9.mercymax[DY]) {
        this.thissprite = this.sparedsprite;
      }
      if (D9.flag[20] === 1) {
        this.thissprite = this.hurtsprite;
      }
      DE.draw_sprite_ext(
        this.thissprite,
        this.siner / 6,
        this.x,
        this.y,
        2,
        2,
        0,
        this.image_blend,
        1,
      );
      if (this.flash === 1) {
        this.fsiner += 1;
        DE.draw_sprite_white(
          this.thissprite,
          this.siner / 6,
          this.x,
          this.y,
          2,
          2,
          0,
          -Dc(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
Dv(DB, "obj_jigsawryenemy");
Dh(DB, "kinds", Db("obj_jigsawryenemy", n));
Dh(DB, "defaultDepth", 90);
Dh(DB, "defaultSprite", "spr_jigsawry_idle");
var DZ = DB;
var DL = 0;
function Do(DE) {
  if (typeof window === "undefined" || !DP.DR || !Array.isArray(DP.DR.FIGHTS) || DL) {
    return null;
  }
  DL = 1;
  try {
    for (let DY of DP.DR.FIGHTS) {
      let DS = null;
      try {
        DS = DY && DY.monsters;
      } catch {
        DS = null;
      }
      if (Array.isArray(DS)) {
        for (let DJ of DS) {
          if (DJ && DJ.type === DE && DJ.cls && typeof DJ.setup == "function") {
            return DJ;
          }
        }
      }
    }
  } finally {
    DL = 0;
  }
  return null;
}
Dv(Do, "resolveMonster");
var DN = {
  id: "jigsawry_smorgasboard",
  name: "Smorgasboard",
  chapter: 1,
  area: "Field",
  desc: "Smorgasboard.#Jigsawry + Rudinn + Hathy.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  battlemsg: "* Smorgasboard.",
  encounterno: 23,
  music: "battle",
  get monsters() {
    let DE = [
      {
        cls: DZ,
        type: 15,
        x: 480,
        y: 20,
        setup: DT,
      },
    ];
    let DY = Do(5);
    if (DY) {
      DE.push({
        cls: DY.cls,
        type: 5,
        x: 500,
        y: 120,
        setup: DY.setup,
      });
    }
    let DS = Do(6);
    if (DS) {
      DE.push({
        cls: DS.cls,
        type: 6,
        x: 460,
        y: 220,
        setup: DS.setup,
      });
    }
    return DE;
  },
};
var DR = [
  {
    id: "jigsawry",
    name: "Jigsawry",
    chapter: 1,
    area: "Field",
    desc: "Jigsawry.#Puzzle-piece pincers.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: DZ,
        type: 15,
        x: 480,
        y: 140,
        setup: DT,
      },
    ],
    battlemsg: "* Jigsawry drew near!",
    encounterno: 21,
    music: "battle",
  },
  {
    id: "jigsawry_board",
    name: "Jigsawry x3",
    chapter: 1,
    area: "Field",
    desc: "A board of Jigsawrys.#Three at once.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: DZ,
        type: 15,
        x: 480,
        y: 20,
        setup: DT,
      },
      {
        cls: DZ,
        type: 15,
        x: 500,
        y: 120,
        setup: DT,
      },
      {
        cls: DZ,
        type: 15,
        x: 460,
        y: 220,
        setup: DT,
      },
    ],
    battlemsg: "* A board of Jigsawrys blocked the way!",
    encounterno: 22,
    music: "battle",
  },
  DN,
];
DM(DZ, "G.mnfight = 2;");
export {
  DO as a,
  Dy as b,
  DT as c,
  DU as d,
  DG as e,
  DI as f,
  Dm as g,
  Du as h,
  DZ as i,
  DR as j,
  Ds as k,
};
