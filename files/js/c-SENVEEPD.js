import { o as u } from "./c-SUMBKYUG.js";
import { k as i } from "./c-S2GDVFWF.js";
import { k as h } from "./c-IBQDT3FN.js";
import { l as n } from "./c-V3CGJ5FN.js";
import { b as o, c as d } from "./c-2XD6JUBJ.js";
import { C as v, G as g, J as k0, d as k1, g as k2, s as k3 } from "./c-Q4AJT7BT.js";
import { a as k4, c as k5, e as k6, f as k7, g as k8, o as k9 } from "./c-66FIJ62A.js";
import { f as kk, g as kY, i as kW } from "./c-UDQUHXBV.js";
import {
  a as kb,
  b as kK,
  c as kl,
  d as kH,
  f as kw,
  j as kC,
  n as kJ,
  p as kT,
  q as km,
} from "./c-F4ZSRAAO.js";
import {
  D as kM,
  I as kf,
  M as kr,
  N as kS,
  O as kt,
  g as kU,
  l as ky,
  n as kB,
} from "./c-O6GE5FYX.js";
import {
  Eb as kZ,
  Fb as kq,
  I as kz,
  Ja as kQ,
  La as kA,
  bc as ka,
  c as kF,
  g as kP,
  ga as kR,
  gb as ku,
  gc as kN,
  h as kc,
  hb as kh,
  ia as kL,
  j as kn,
  m as kV,
  n as ko,
  o as kd,
  ob as kp,
  p as kx,
  q as kE,
  s as kO,
  t as kX,
  u as kv,
  v as kj,
  w as kG,
  x as kD,
  zb as kg,
} from "./c-ZEHUSSXN.js";
import { a as kI, c as Y0, e as Y1, g as Y2, l as Y3 } from "./c-7Q4J33FN.js";
Y3();
var Y4 = {};
Y0(Y4, {
  FIGHTS: () => YM,
  SOUNDS: () => Y6,
  SPRITES: () => Y5,
  obj_blockbullet_fall: () => YJ,
  obj_bloxer_enemy: () => Ym,
  obj_spareanim: () => Yw,
  setupStats: () => YY,
});
Y3();
var Y5 = [
  "spr_blockguy_overworld",
  "spr_blockguy_spared",
  "spr_blockguy_part",
  "spr_blockguy_part_hurt",
  "spr_blockbullet",
  "spr_blockbullet_mini",
  "spr_sparestar_anim",
  "spr_battleblcon_long",
];
var Y6 = ["snd_spare"];
var Y7 = kI((Kw) => "[C]", "scr_get_input_name");
var Y8 = kc(8421504);
var Y9 = kc(65535);
var Yk = kc(16777215);
function YY(Kw) {
  kU.monstername[Kw] = "Bloxer";
  kU.monstermaxhp[Kw] = 130;
  kU.monsterhp[Kw] = 130;
  kU.monsterat[Kw] = 9;
  kU.monsterdf[Kw] = 2;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 38;
  kU.sparepoint[Kw] = 10;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  kU.canact[Kw][1] = 1;
  kU.actname[Kw][1] = "Rearrange";
  if (kB(2) && kU.plot >= 150) {
    kU.canact[Kw][2] = 1;
    kU.actname[Kw][2] = "Rival";
    kU.actactor[Kw][2] = 2;
  }
}
kI(YY, "setupStats");
var YW = {
  spr_blockbullet_mini: {
    w: 34,
    h: 28,
    bb: [4, 4, 29, 23],
  },
  spr_blockguy_spared: {
    w: 38,
    h: 54,
    bb: [0, 0, 37, 53],
  },
};
function Yb(Kw) {
  let KC = kz[Kw];
  return (
    KC ||
    YW[Kw] || {
      w: 0,
      h: 0,
      bb: [0, 0, 0, 0],
    }
  );
}
kI(Yb, "sprDims");
function YK(Kw, KC, KJ, KT) {
  for (let Km of kp.list) {
    if (Km.destroyed || Km === KT || !Km.is(KJ)) {
      continue;
    }
    let KM = Yb(Km.sprite_index);
    if (!KM || KM.w === 0) {
      continue;
    }
    let Kf = KM.ox || 0;
    let Kr = KM.oy || 0;
    let KS = KM.bb;
    let KU = Km.x + (KS[0] - Kf) * Km.image_xscale;
    let Ky = Km.x + (KS[2] + 1 - Kf) * Km.image_xscale;
    let KB = Km.y + (KS[1] - Kr) * Km.image_yscale;
    let KZ = Km.y + (KS[3] + 1 - Kr) * Km.image_yscale;
    if (
      Kw >= Math.min(KU, Ky) &&
      Kw < Math.max(KU, Ky) &&
      KC >= Math.min(KB, KZ) &&
      KC < Math.max(KB, KZ)
    ) {
      return Km;
    }
  }
  return null;
}
kI(YK, "collision_point");
function Yl(Kw, KC, KJ, KT, Km, KM) {
  let Kf = Kw.ctx;
  Kf.save();
  Kf.globalAlpha = Kw.alpha;
  Kf.strokeStyle = Kf.fillStyle = Kw.color;
  Kf.lineWidth = 1;
  let Kr = KT - KC;
  let KS = Km - KJ;
  let KU = Math.hypot(Kr, KS);
  Kf.beginPath();
  Kf.moveTo(KC, KJ);
  Kf.lineTo(KT, Km);
  Kf.stroke();
  if (KU !== 0) {
    if (KM > KU) {
      KM = KU;
    }
    let Ky = Kr / KU;
    let KB = KS / KU;
    let KZ = KT - Ky * KM;
    let Kq = Km - KB * KM;
    Kf.beginPath();
    Kf.moveTo(KT, Km);
    Kf.lineTo(KZ + (KB * KM) / 3, Kq - (Ky * KM) / 3);
    Kf.lineTo(KZ - (KB * KM) / 3, Kq + (Ky * KM) / 3);
    Kf.closePath();
    Kf.fill();
  }
  Kf.restore();
}
kI(Yl, "draw_arrow");
var YH = class Kz extends ku {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    kA("snd_spare");
    kQ("snd_spare");
  }
  draw(Kw) {
    let KC = this.t;
    if (KC >= 6 && KC <= 26) {
      this.afterimage += 1;
      Kw.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x + this.afterimage * 4,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        0.7 - this.afterimage / 25,
      );
      Kw.draw_sprite_white(
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
    if (KC < 6) {
      if (KC < 5) {
        Kw.draw_sprite_ext(
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
      let KJ = KC / 5;
      if (KJ > 1) {
        KJ = 1;
      }
      Kw.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        KJ - this.tone / 5,
      );
    }
    if (KC >= 1 && KC <= 5) {
      for (let KT = 0; KT < 2; KT++) {
        let Km = kg(this.x + kn(this.sprite_width), this.y + kn(this.sprite_height), kb);
        Km.image_xscale = 2;
        Km.image_yscale = 2;
        Km.sprite_index = "spr_sparestar_anim";
        Km.image_alpha = 2;
        Km.image_speed = 0.25;
        Km.hspeed = -3;
        Km.gravity = 0.5;
        Km.gravity_direction = 0;
        this.star[this.starcount] = Km;
        this.starcount += 1;
      }
    }
    if (KC >= 5 && KC <= 30) {
      for (let KM = 0; KM < this.starcount; KM++) {
        let Kf = this.star[KM];
        if (Kf && !Kf.destroyed) {
          Kf.image_angle += 10;
          Kf.image_alpha -= 0.1;
          if (Kf.image_alpha <= 0) {
            Kf.instance_destroy();
          }
        }
      }
    }
    if (KC >= 5 && KC < 10) {
      this.tone += 1;
    }
    if (KC >= 9 && ((this.neotone += 1), this.neotone >= 30)) {
      for (let Kr = 0; Kr < this.starcount; Kr++) {
        let KS = this.star[Kr];
        if (KS && !KS.destroyed) {
          KS.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
kI(YH, "obj_spareanim");
Y1(YH, "kinds", kh("obj_spareanim", ku));
Y1(YH, "defaultDepth", 0);
var Yw = YH;
var YC = class KQ extends k6 {
  get sprite_width() {
    return Yb(this.sprite_index).w * Math.abs(this.image_xscale);
  }
  get sprite_height() {
    return Yb(this.sprite_index).h * Math.abs(this.image_yscale);
  }
  create() {
    this.active = 0;
    this.visible = false;
    this.image_alpha = 0;
    this.con = 0;
    this.xpos = kV(0, 1, 2, 3);
    this.ypos = -8;
    this.fallspeed = 5;
    this.falltimer = 0;
    this.halt = 0;
  }
  step() {
    if (this.con === 1) {
      this.active = 1;
      this.visible = true;
      this.image_alpha += 0.15;
      if (this.image_alpha >= 1) {
        this.con = 2;
      }
    }
    if (this.con === 2) {
      this.falltimer += 1;
      if (this.falltimer >= this.fallspeed) {
        if (
          this.ypos < 0 &&
          !YK(
            this.x + this.sprite_width / 2,
            this.y + this.sprite_height * 1.5,
            "obj_blockbullet_fall",
            this,
          )
        ) {
          this.ypos += 1;
        } else {
          this.halt = 1;
        }
        this.falltimer = 0;
      }
    }
    if (this.con === 0) {
      this.con = 1;
    }
    if (this.con === 3) {
      if (this.image_alpha <= 0.2) {
        this.instance_destroy();
      }
      this.active = 0;
      this.image_alpha -= 0.2;
    }
    let Kw = kp.first("obj_battlesolid");
    if (Kw) {
      let KC = Kw.x - Kw.sprite_width / 2 + 8;
      this.x = KC + this.xpos * this.sprite_width;
      let KJ = Kw.y + Kw.sprite_height / 2 - 3 - this.sprite_height;
      this.y = KJ + this.ypos * this.sprite_height;
    }
    if (this.grazed === 1) {
      this.grazepoints = 0;
      this.timepoints = 0;
    }
  }
};
kI(YC, "obj_blockbullet_fall");
Y1(YC, "kinds", kh("obj_blockbullet_fall", k6));
Y1(YC, "defaultDepth", 0);
Y1(YC, "defaultSprite", "spr_blockbullet_mini");
var YJ = YC;
o({
  26: (Kw, KC) => {
    kp.with("obj_regularbullet", (KT) => {
      if (KT.sprite_index === "spr_blockbullet") {
        KT.image_alpha += 0.1;
      }
    });
    let KJ = 35;
    if (kM() === 2) {
      KJ = 52.5;
    }
    if (kM() === 3) {
      KJ = 77;
    }
    if (Kw.btimer >= KJ) {
      let KT = -60;
      let Km = -80 + kn(160);
      KT += Km;
      let KM = -Km / 160;
      let Kf = -2;
      for (let Kr = 0; Kr < 2; Kr++) {
        let KS = kV(0, 1, 2);
        let KU = kV(0, 1, 2);
        for (let Ky = 0; Ky < 2; Ky++) {
          let KB = kg(500 + Kr * 80, 140 + KT + Ky * 80, k7);
          k4(Kw, KB);
          if (Ky === KS) {
            KB.y += kV(0, 40);
          }
          if (Kr === 1 && Ky === 1) {
            KB.x += kV(0, -40);
            KB.y = 140 + KT + kV(0, 40) + Ky * 80;
          }
          KB.hspeed = Kf;
          KB.vspeed = KM;
          KB.friction = -0.07;
          if (kM() >= 2) {
            KB.friction = -0.1;
          }
          KB.sprite_index = "spr_blockbullet";
          KB.image_alpha = 0;
        }
      }
      Kw.btimer = 0;
    }
  },
  27: (Kw, KC) => {
    let KJ = 15;
    if (kM() === 2) {
      KJ = 25.5;
    }
    if (kM() === 3) {
      KJ = 34.5;
    }
    let KT = KC.bs;
    if (!KT) {
      return;
    }
    let Km = KT.x - KT.sprite_width / 2 + 8;
    let KM = KT.y + KT.sprite_height / 2 - 15;
    if (Kw.btimer >= KJ) {
      let Ky = Kw.made;
      Kw.made = kV(0, 1, 2, 3);
      if (Kw.made === Ky) {
        Kw.made = kV(0, 1, 2, 3);
      }
      Kw.btimer = 0;
      let KB = kg(100, 100, YJ);
      KB.xpos = Kw.made;
      k4(Kw, KB);
      let KZ = YK(
        Km + Kw.made * KB.sprite_width + 8,
        KM - KB.sprite_height * 3 - 10,
        "obj_blockbullet_fall",
        null,
      );
      if (KZ && KZ.halt === 1) {
        KB.instance_destroy();
      }
    }
    let Kf = YK(Km + 15, KM, "obj_blockbullet_fall", null);
    let Kr = YK(Km + 15 + 34, KM, "obj_blockbullet_fall", null);
    let KS = YK(Km + 15 + 68, KM, "obj_blockbullet_fall", null);
    let KU = YK(Km + 15 + 102, KM, "obj_blockbullet_fall", null);
    if (Kf && Kr && KS && KU) {
      Kf.con = 3;
      Kr.con = 3;
      KS.con = 3;
      KU.con = 3;
    }
  },
});
var YT = class KA extends k3 {
  get sprite_width() {
    return Yb(this.sprite_index).w * Math.abs(this.image_xscale);
  }
  get sprite_height() {
    return Yb(this.sprite_index).h * Math.abs(this.image_yscale);
  }
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
      shakex: 0,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      tired: 0,
      fixed: 0,
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
      idlesprite: "spr_blockguy_overworld",
      hurtsprite: "spr_blockguy_overworld",
      sparedsprite: "spr_blockguy_spared",
    });
    let Kw = kV(0, 1, 2, 3);
    this.headpart = 1;
    this.part = [0, 0, 0, 0, 0];
    if (Kw === 0) {
      this.headpart = 3;
      this.part[1] = 2;
      this.part[2] = 3;
      this.part[3] = 1;
    }
    if (Kw === 1) {
      this.headpart = 3;
      this.part[1] = 3;
      this.part[2] = 2;
      this.part[3] = 1;
    }
    if (Kw === 2) {
      this.headpart = 1;
      this.part[1] = 1;
      this.part[2] = 3;
      this.part[3] = 2;
    }
    if (Kw === 3) {
      this.headpart = 2;
      this.part[1] = 2;
      this.part[2] = 1;
      this.part[3] = 3;
    }
    this.part[4] = 4;
    this.maxpart = 5;
    this.siner = 0;
    this.floatsin = 0;
    this.party = [28, 54, 70];
    this.floating = 0;
    this.swaptime = 10;
    this.bodyfade = 0;
    this.bodyalpha = 1;
    this.swapx = 0;
    this.sinmomentum = 0;
    this.custom = [4.5, 3, 1.5];
    this.select = [-1, -1, -1];
    this.selectpart = [0, 0, 0];
    this.partyb = [0, 0, 0];
    this.selecty = 0;
    this.selected = 0;
    this.selecttotal = 0;
    this.selectx = [0];
    this.movex = [0, 0, 0];
    this.threebuffer = 0;
    this.finishtimer = 0;
    this.hurk = 0;
    this.xspeed = 0;
    this.scolor = [Y8, Y8, Y8];
    this.introtimer = 0;
    this.idealy = [0, 0, 0, 0, 0];
    this.cury = [0, 0, 0, 0, 0];
    this.yfactor = [0, 0, 0, 0, 0];
  }
  userEvent(Kw) {
    if (Kw === 12) {
      kU.monsterx[this.myself] = this.x + this.sprite_width / 2;
      kU.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (Kw !== 11 && Kw === 10) {
      let KC = kg(this.x, this.y, Yw);
      KC.sprite_index = this.sparedsprite;
      KC.image_index = 0;
      KC.image_xscale = this.image_xscale;
      KC.image_yscale = this.image_yscale;
      this.scr_monsterdefeat();
      this.instance_destroy();
      return;
    }
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.con += 1;
    }
  }
  step() {
    let Kw = this.myself;
    if (kU.monster[Kw] === 1) {
      if (kU.mnfight === 1 && this.talked === 0) {
        kr(this);
        if (!kp.exists("obj_darkener")) {
          kg(0, 0, kT);
        }
        kU.typer = 50;
        kU.msg = new Array(100).fill(" ");
        let KC = kV(0, 1, 2, 3);
        if (KC === 0) {
          kU.msg[0] = "HOOH...! You&interrupted my&training...!";
        }
        if (KC === 1) {
          kU.msg[0] = "GOOH...! I'm&gonna knock&your block&off...!";
        }
        if (KC === 2) {
          kU.msg[0] = "Let's see how&you stack&up...! HIYA!!";
        }
        if (KC === 3) {
          kU.msg[0] = "Let me show&you my&training!&YIHA!!";
        }
        if (this.acting === 2) {
          kU.msg[0] = "ARRGH!!";
          if (this.part[2] === 3) {
            kU.msg[0] = "ARRGH!! NO!!&MY BUTT IS&MY ABS!";
          }
          if (this.part[1] === 3) {
            kU.msg[0] = "ARRGH!! NO!!&MY BUTT IS&MY FACE!!";
          }
          if (this.part[1] === 2) {
            kU.msg[0] = "ARRGH!! NO!!&MY ABS ARE&MY FACE!!";
          }
          if (this.part[1] === 1) {
            kU.msg[0] = "ARRGH!! NO!!&MY FACE IS&MY FACE!!&Wait...";
          }
          if (kU.mercymod[Kw] >= 100) {
            kU.msg[0] = "Oh, you mixed&me up all&nice~";
          }
        }
        if (this.acting === 3) {
          kU.msg[0] = "My momentum&is totally&blocked&up...";
        }
        kW(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && kU.mnfight === 1) {
        this.rtimer = 0;
        if (kR() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          kp.with("obj_writer", (KJ) => KJ.instance_destroy());
          kp.with("obj_battleblcon", (KJ) => KJ.instance_destroy());
          kU.mnfight = 2;
        }
        if (kU.mnfight === 2) {
          if (!kp.exists("obj_moveheart")) {
            kJ();
          }
          if (!kp.exists("obj_growtangle")) {
            kg(320, 170, kw);
          }
        }
      }
      if (kU.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          let KJ = kV(0, 1);
          let KT = 1;
          if (kM() >= 2 && Kw >= 1) {
            KT = 0;
          }
          if (KJ === 0 && KT === 1) {
            let KM = kg(this.x, this.y, d);
            KM.type = 26;
            KM.target = this.mytarget;
            KM.damage = kU.monsterat[Kw] * 5;
            KM.grazepoints = 5;
            KM.timepoints = 2;
          } else {
            let Kf = kg(this.x, this.y, d);
            Kf.type = 27;
            Kf.target = this.mytarget;
            Kf.damage = kU.monsterat[Kw] * 5;
            Kf.grazepoints = 5;
          }
          this.turns += 1;
          kU.turntimer = 170;
          this.attacked = 1;
          kU.typer = 6;
          kU.fc = 0;
          let Km = kV(0, 1, 2, 3, 4);
          if (Km === 0) {
            kU.battlemsg[0] = "* Bloxer is thinking about training.";
          }
          if (Km === 1) {
            kU.battlemsg[0] = "* Bloxer is thinking about trains.";
          }
          if (Km === 2) {
            kU.battlemsg[0] = "* Bloxer is thinking about training wheels.";
          }
          if (Km === 3) {
            kU.battlemsg[0] = "* Bloxer considers building a house out of its own body.";
          }
          if (Km === 4) {
            kU.battlemsg[0] = "* Smells like freshly-printed plastic.";
          }
          if (kU.monsterstatus[Kw] === 1) {
            kU.battlemsg[0] = "* Bloxer is starting to break apart with exhaustion.";
          }
          if (kU.mercymod[Kw] >= kU.mercymax[Kw]) {
            kU.battlemsg[0] = "* Bloxer radiates with the spirit of joy.";
          }
        } else {
          kU.turntimer = 120;
        }
      }
      if (kU.mnfight === 2 && kU.turntimer <= 1) {
        if (this.battlecancel === 1) {
          kU.mercymod[Kw] = 999;
        }
        if (this.battlecancel === 2) {
          kp.with("obj_battlecontroller", (Kr) => {
            Kr.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (kU.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.actcon = 1;
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* BLOXER - AT 9 DF 2&* Loves: Training^1. Hates: Body being the wrong shape/%";
        kY();
      }
      if (this.acting === 2 && this.actcon === 0) {
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* Press " + Y7(6) + " to choose:&  #1 HEAD, #2 BODY, #3 LEGS.";
        kU.mercymod[Kw] = 0;
        kY();
        this.actcon = 10;
        this.swaptime = 1;
        this.floatsin = 0;
        this.swapx = 0;
        this.sinmomentum = 0;
        this.party[0] = 28;
        this.party[1] = 54;
        this.party[2] = 70;
        this.select[0] = -1;
        this.select[1] = -1;
        this.select[2] = -1;
        this.selecttotal = 0;
        this.movex[0] = 0;
        this.movex[1] = 0;
        this.movex[2] = 0;
        this.finishtimer = 0;
      }
      if (this.acting === 3 && this.actcon === 0) {
        this.actcon = 1;
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* Susie became antagonistic!/";
        let Kr = kV(0, 1, 2);
        kU.msg[1] = "* Why bother training^1? You'll NEVER beat me./";
        if (Kr === 1) {
          kU.msg[1] = "* Why train^1? You're still 100 years too early to beat me./";
        }
        if (Kr === 2) {
          kU.msg[1] = "* Training^1? Yeah^1, like I need that to beat you down./";
        }
        kU.msg[2] = "* The enemies became \\cBTIRED\\cW.../%";
        for (let KS = 0; KS < 3; KS++) {
          kU.monstercomment[KS] = "(Tired)";
          kU.monsterstatus[KS] = 1;
        }
        kY();
      }
      if (this.actcon === 1 && !kp.exists("obj_writer")) {
        this.actcon = 0;
        g();
      }
      if (this.actcon === 10 && this.swaptime === 0) {
        kp.with("obj_writer", (KU) => KU.instance_destroy());
        kU.msg = new Array(100).fill(" ");
        if (kU.mercymod[Kw] >= 100) {
          kU.msg[0] = "* Bloxer is pleased with its new self!/%";
          this.fixed = 1;
        } else {
          kU.msg[0] = "* Bloxer is still unhappy with its self.../%";
        }
        kY();
        this.actcon = 1;
      }
    }
    if (kU.myfight === 7) {
      this.hspeed = 15;
    }
  }
  draw(Kw) {
    let KC = this.myself;
    let KJ = this.part;
    let KT = this.movex;
    let Km = this.partyb;
    let KM = this.select;
    this.threebuffer -= 1;
    let Kf = kG(this.siner / 4);
    let Kr = kD(this.siner / 4);
    if (this.swaptime === 5) {
      let KS = 0;
      for (let KU = 0; KU < 3; KU++) {
        KT[KU] += this.xspeed;
        if (KT[KU] <= 0) {
          KT[KU] = 0;
          KS += 1;
        }
      }
      if (KS >= 3) {
        this.swaptime = 6;
        KJ[1] = this.selectpart[0];
        KJ[2] = this.selectpart[1];
        KJ[3] = this.selectpart[2];
        if (KJ[1] === 1 && KJ[2] === 2 && KJ[3] === 3) {
          KJ[1] = 6;
          kf(KC, 100);
        }
      } else {
        this.xspeed -= 2;
        Kw.draw_sprite_ext("spr_blockguy_part", KJ[3], this.x + KT[2], Km[2], 2, 2, 0, kF.white, 1);
        Kw.draw_sprite_ext("spr_blockguy_part", KJ[2], this.x + KT[1], Km[1], 2, 2, 0, kF.white, 1);
        Kw.draw_sprite_ext("spr_blockguy_part", KJ[1], this.x + KT[0], Km[0], 2, 2, 0, kF.white, 1);
      }
    }
    if (this.swaptime === 2 || this.swaptime === 3) {
      if (this.sinmomentum < 0.8) {
        this.sinmomentum += 0.05;
      }
      this.floatsin += this.sinmomentum;
      if (this.threebuffer <= 0) {
        this.selecty = this.y + 30 + this.selecttotal * 26;
      }
      if (KM[0] < 0) {
        Km[0] = this.y + 53 + kG(this.floatsin / 8 + this.custom[0]) * 25;
      }
      if (KM[1] < 0) {
        Km[1] = this.y + 53 + kG(this.floatsin / 8 + this.custom[1]) * 25;
      }
      if (KM[2] < 0) {
        Km[2] = this.y + 53 + kG(this.floatsin / 8 + this.custom[2]) * 25;
      }
      let Ky = -1;
      let KB = 99;
      for (let KF = 0; KF < 3; KF++) {
        this.scolor[KF] = Y8;
        if (KM[KF] < 0) {
          let KP = kj(Km[KF] - this.selecty);
          if (KP < KB && KP < 24) {
            KB = KP;
            Ky = KF;
          }
        } else {
          if (KT[KF] < 60) {
            KT[KF] += 6;
          }
          this.scolor[KF] = Y9;
          let KR = this.y + 28 + KM[KF] * 25;
          if (kj(Km[KF] - KR) < 6) {
            Km[KF] = KR;
          }
          if (Km[KF] < KR) {
            Km[KF] += 6;
          }
          if (Km[KF] > KR) {
            Km[KF] -= 6;
          }
        }
      }
      let KZ = kF.white;
      for (let Ku = 0; Ku < 3; Ku++) {
        if (Ky === Ku) {
          this.scolor[Ku] = Yk;
          KZ = kF.yellow;
        }
      }
      Kw.draw_sprite_ext(
        "spr_blockguy_part",
        KJ[3],
        this.x + KT[2],
        Km[2],
        2,
        2,
        0,
        this.scolor[2],
        1,
      );
      Kw.draw_sprite_ext(
        "spr_blockguy_part",
        KJ[2],
        this.x + KT[1],
        Km[1],
        2,
        2,
        0,
        this.scolor[1],
        1,
      );
      Kw.draw_sprite_ext(
        "spr_blockguy_part",
        KJ[1],
        this.x + KT[0],
        Km[0],
        2,
        2,
        0,
        this.scolor[0],
        1,
      );
      let Kq = this.threebuffer * 4;
      if (Kq < 0) {
        Kq = 0;
      }
      let Ka = 0;
      if (this.threebuffer === 1) {
        Ka = 15;
      }
      Kw.draw_set_color(KZ);
      if (this.finishtimer < 8 && this.selecttotal < this.maxpart - 2) {
        Yl(
          Kw,
          this.x - 50 + kG(this.floatsin / 6) * 2 + Kq,
          this.selecty + 10 + Ka,
          this.x - 10 + kG(this.floatsin / 6) * 2 + Kq,
          this.selecty + 10 + Ka,
          16,
        );
      }
      if (kL() && this.threebuffer < 0 && this.selecttotal < this.maxpart - 2) {
        if (Ky >= 0) {
          this.selectpart[this.selecttotal] = KJ[1 + Ky];
          KM[Ky] = this.selecttotal;
          this.selecttotal += 1;
          this.threebuffer = 6;
        }
        if (this.selecttotal >= this.maxpart - 2) {
          this.swaptime = 3;
        }
      }
      if (this.swaptime === 3) {
        this.finishtimer += 1;
      }
      if (this.finishtimer >= 13) {
        this.swaptime = 5;
        this.xspeed = 4;
      }
    }
    if (this.swaptime === 0 || this.swaptime === 1 || this.swaptime === 6) {
      this.hurk = 0;
      if (this.state === 3) {
        this.hurk = 1;
        if (kU.monsterhp[KC] <= kU.monstermaxhp[KC] / 3) {
          kU.monsterstatus[KC] = 1;
          if (kU.monstercomment[KC] === " ") {
            kU.monstercomment[KC] = "(Tired)";
          }
        }
        this.hurttimer -= 1;
        if (this.hurttimer < 0) {
          this.state = 0;
        } else {
          if (kU.monster[KC] === 0) {
            this.hspeed = 10;
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
        }
      }
      if (this.swaptime === 0) {
        this.siner += 1;
      }
      if (this.swaptime === 1) {
        this.swapx += 2;
      }
      if (this.swaptime === 6) {
        if (this.swapx > 0) {
          this.swapx -= 2;
        }
        if (this.swapx <= 0) {
          this.swaptime = 0;
        }
      }
      if (this.swapx >= 16 && this.swaptime === 1) {
        this.swaptime = 2;
      }
      if (this.swaptime === 0 && KJ[1] === 1 && KJ[2] === 2 && KJ[3] === 3) {
        KJ[1] = 6;
      }
      if (this.swaptime === 1 && KJ[1] === 6) {
        KJ[1] = 1;
      }
      let KN = "spr_blockguy_part";
      if (this.hurk === 1) {
        KN = "spr_blockguy_part_hurt";
      }
      let Kc = this.x;
      let Kh = this.y;
      let KL = this.swapx;
      let Kn = this.shakex;
      Kw.draw_sprite_ext(
        KN,
        5,
        Kc - 24 + Kf * 2 + KL * 1.5 + Kn,
        Kh + 54 + Kr * 2,
        2,
        2,
        0,
        kF.white,
        1,
      );
      Kw.draw_sprite_ext(KN, KJ[4], Kc - Kf + Kn, Kh + 100 - KL, 2, 2, 0, kF.white, 1);
      if (this.swaptime === 1 || this.swaptime === 6) {
        Kw.draw_sprite_ext(KN, KJ[0], Kc + Kf * 2 + Kn, Kh + KL, 2, 2, 0, kF.white, 1);
      }
      Kw.draw_sprite_ext(KN, KJ[3], Kc - 4 + Kf * 2 + Kn, Kh + 78, 2, 2, 0, kF.white, 1);
      Kw.draw_sprite_ext(KN, KJ[2], Kc + 4 - Kf * 2 + Kn, Kh + 54, 2, 2, 0, kF.white, 1);
      Kw.draw_sprite_ext(KN, KJ[1], Kc + Kf * 2 + Kn, Kh + 28, 2, 2, 0, kF.white, 1);
      if (this.swaptime === 0) {
        Kw.draw_sprite_ext(KN, KJ[0], Kc + Kf * 2 + Kn, Kh + KL, 2, 2, 0, kF.white, 1);
      }
      if (this.state === 0 && this.flash === 1) {
        this.fsiner += 1;
        let KV = -kD(this.fsiner / 5) * 0.4 + 0.6;
        Kw.draw_sprite_white(
          KN,
          5,
          Kc - 24 + Kf * 2 + KL * 1.5 + Kn,
          Kh + 54 + Kr * 2,
          2,
          2,
          0,
          KV,
        );
        Kw.draw_sprite_white(KN, KJ[4], Kc - Kf + Kn, Kh + 100 - KL, 2, 2, 0, KV);
        if (this.swaptime === 1 || this.swaptime === 6) {
          Kw.draw_sprite_white(KN, KJ[0], Kc + Kf * 2 + Kn, Kh + KL, 2, 2, 0, KV);
        }
        Kw.draw_sprite_white(KN, KJ[3], Kc - 4 + Kf * 2 + Kn, Kh + 78, 2, 2, 0, KV);
        Kw.draw_sprite_white(KN, KJ[2], Kc + 4 - Kf * 2 + Kn, Kh + 54, 2, 2, 0, KV);
        Kw.draw_sprite_white(KN, KJ[1], Kc + Kf * 2 + Kn, Kh + 28, 2, 2, 0, KV);
      }
    }
    if (this.swaptime === 10) {
      this.introtimer = 0;
      this.idealy = [0, 28, 54, 78, 100];
      for (let Ko = 0; Ko < 5; Ko++) {
        this.cury[Ko] = 100;
        this.yfactor[Ko] = (100 - this.idealy[Ko]) / 16;
      }
      this.cury[0] = 78;
      this.yfactor[0] = 4.875;
      this.swaptime = 11;
    }
    if (this.swaptime === 11) {
      Kw.draw_sprite_ext(
        "spr_blockguy_part",
        5,
        this.x - this.introtimer * 2 + 6,
        this.y + this.cury[2],
        2,
        2,
        0,
        kF.white,
        1,
      );
      for (let Kd = 4; Kd >= 0; Kd--) {
        this.cury[Kd] -= this.yfactor[Kd];
        Kw.draw_sprite_ext(
          "spr_blockguy_part",
          KJ[Kd],
          this.x,
          this.y + this.cury[Kd],
          2,
          2,
          0,
          kF.white,
          1,
        );
      }
      Kw.draw_sprite_ext(
        "spr_blockguy_part",
        KJ[this.headpart],
        this.x,
        this.y + this.cury[this.headpart],
        2,
        2,
        0,
        kF.white,
        1,
      );
      Kw.draw_sprite_ext(
        "spr_blockguy_part",
        KJ[0],
        this.x,
        this.y + this.cury[0],
        2,
        2,
        0,
        kF.white,
        1,
      );
      this.introtimer += 1;
      if (this.introtimer >= 16) {
        this.swaptime = 0;
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
kI(YT, "obj_bloxer_enemy");
Y1(YT, "kinds", kh("obj_bloxer_enemy", k3));
Y1(YT, "defaultDepth", 90);
Y1(YT, "defaultSprite", "spr_blockguy_spared");
var Ym = YT;
var YM = [
  {
    id: "bloxer",
    name: "Bloxer",
    chapter: 1,
    area: "Card Castle",
    desc: "Bloxer.#Rearrange its blocks.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: Ym,
        type: 14,
        x: 480,
        y: 140,
        setup: YY,
      },
    ],
    battlemsg: "* Bloxer assembled!",
    encounterno: 18,
    music: "battle",
  },
  {
    id: "bloxer2",
    name: "Bloxer x2",
    chapter: 1,
    area: "Card Castle",
    desc: "Two Bloxers.#Falling bricks.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: Ym,
        type: 14,
        x: 480,
        y: 60,
        setup: YY,
      },
      {
        cls: Ym,
        type: 14,
        x: 460,
        y: 180,
        setup: YY,
      },
    ],
    battlemsg: "* Bloxers assembled!",
    encounterno: 19,
    music: "battle",
  },
];
Y2(Ym, "G.mnfight = 2;");
var Yf = {};
Y0(Yf, {
  FIGHTS: () => Yo,
  SOUNDS: () => YS,
  SPRITES: () => Yr,
  obj_clubsbullet: () => YP,
  obj_clubsbullet_dark_t0: () => Yu,
  obj_clubsenemy: () => Yc,
  obj_defeatanim: () => YA,
  obj_spareanim: () => Yz,
  setupStats: () => YZ,
  setupStats16: () => YB,
  setupStats7: () => Yy,
});
Y3();
var Yr = [
  "spr_clubs_idle",
  "spr_clubs_hurt",
  "spr_clubs_spared",
  "spr_battleblcon_clubs",
  "spr_clubsbullet",
  "spr_clubsbullet_dark",
  "spr_clubsball_a",
  "spr_clubsball_b",
  "spr_clubsball_c",
  "spr_defeatsweat",
  "spr_sparestar_anim",
];
var YS = ["snd_defeatrun", "snd_spare"];
var YU = kI(() => {
  kU.msg = new Array(100).fill(" ");
}, "clearmsg");
function Yy(Kw) {
  kU.monstername[Kw] = "Clover";
  kU.monstermaxhp[Kw] = 270;
  kU.monsterhp[Kw] = 270;
  kU.monsterat[Kw] = 8;
  kU.monsterdf[Kw] = 1;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 43;
  kU.sparepoint[Kw] = 10;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  let KC = kV(0, 1, 2);
  if (KC === 0) {
    kU.canact[Kw][1] = 1;
    kU.actname[Kw][1] = "Politics";
    kU.canact[Kw][2] = 1;
    kU.actname[Kw][2] = "Religion";
    kU.canact[Kw][3] = 1;
    kU.actname[Kw][3] = "Sports";
  }
  if (KC === 1) {
    kU.canact[Kw][1] = 1;
    kU.actname[Kw][1] = "Kindness";
    kU.canact[Kw][2] = 1;
    kU.actname[Kw][2] = "Cuteboys";
    kU.canact[Kw][3] = 1;
    kU.actname[Kw][3] = "GunControl";
  }
  if (KC === 2) {
    kU.canact[Kw][1] = 1;
    kU.actname[Kw][1] = "Trees";
    kU.canact[Kw][2] = 1;
    kU.actname[Kw][2] = "Ghosts";
    kU.canact[Kw][3] = 1;
    kU.actname[Kw][3] = "Games";
  }
  if (kB(2)) {
    kU.canact[Kw][4] = 1;
    kU.actname[Kw][4] = "Warning";
    kU.actactor[Kw][4] = 3;
  }
}
kI(Yy, "setupStats7");
function YB(Kw) {
  kU.monstername[Kw] = "Clover";
  kU.monstermaxhp[Kw] = 270;
  kU.monsterhp[Kw] = 270;
  kU.monsterat[Kw] = 6;
  kU.monsterdf[Kw] = 1;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 80;
  kU.sparepoint[Kw] = 10;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  kU.canact[Kw][1] = 1;
  kU.actname[Kw][1] = "TalkBday";
  kU.actactor[Kw][1] = 3;
  kU.actname[Kw][2] = "TalkBoys";
  kU.canact[Kw][2] = 1;
  kU.actactor[Kw][2] = 3;
  kU.actname[Kw][3] = "TalkSports";
  kU.canact[Kw][3] = 1;
  kU.actactor[Kw][3] = 3;
  kU.actname[Kw][4] = "TalkAnimals";
  kU.canact[Kw][4] = 1;
  kU.actname[Kw][5] = "TalkTrees";
  kU.canact[Kw][5] = 1;
  kV(0, 1, 2);
}
kI(YB, "setupStats16");
var YZ = YB;
var Yq = class Kp extends ku {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    kA("snd_spare");
    kQ("snd_spare");
  }
  draw(Kw) {
    let KC = this.sprite_index;
    let KJ = this.image_index;
    let KT = this.image_xscale;
    let Km = this.image_yscale;
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      Kw.draw_sprite_white(
        KC,
        KJ,
        this.x + this.afterimage * 4,
        this.y,
        KT,
        Km,
        0,
        0.7 - this.afterimage / 25,
      );
      Kw.draw_sprite_white(
        KC,
        KJ,
        this.x + this.afterimage * 8,
        this.y,
        KT,
        Km,
        0,
        0.4 - this.afterimage / 30,
      );
    }
    if (this.t < 6) {
      if (this.t < 5) {
        Kw.draw_sprite_ext(
          KC,
          KJ,
          this.x,
          this.y,
          KT,
          Km,
          0,
          this.image_blend,
          1 - this.neotone / 4,
        );
      }
      let KM = this.t / 5;
      if (KM > 1) {
        KM = 1;
      }
      Kw.draw_sprite_white(KC, KJ, this.x, this.y, KT, Km, 0, KM - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let Kf = 0; Kf < 2; Kf += 1) {
        let Kr = kg(this.x + kn(this.sprite_width), this.y + kn(this.sprite_height), kb);
        Kr.image_xscale = 2;
        Kr.image_yscale = 2;
        Kr.sprite_index = "spr_sparestar_anim";
        Kr.image_alpha = 2;
        Kr.image_speed = 0.25;
        Kr.hspeed = -3;
        Kr.gravity = 0.5;
        Kr.gravity_direction = 0;
        this.star[this.starcount] = Kr;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let KS = 0; KS < this.starcount; KS += 1) {
        let KU = this.star[KS];
        if (KU && !KU.destroyed) {
          KU.image_angle += 10;
          KU.image_alpha -= 0.1;
          if (KU.image_alpha <= 0) {
            KU.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && ((this.neotone += 1), this.neotone >= 30)) {
      for (let Ky = 0; Ky < this.starcount; Ky += 1) {
        let KB = this.star[Ky];
        if (KB && !KB.destroyed) {
          KB.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
kI(Yq, "obj_spareanim");
Y1(Yq, "kinds", kh("obj_spareanim", ku));
Y1(Yq, "defaultDepth", 0);
var Yz = Yq;
var YQ = class Kx extends ku {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    kQ("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(Kw) {
    if (this.t === 0) {
      this.draw_self(Kw);
    }
    let KC = 0;
    if (this.g <= 5) {
      KC = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      KC = 1;
    }
    if (KC === 1) {
      Kw.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let KJ = 0; KJ <= 80; KJ += 1) {
        Kw.draw_sprite_ext(
          this.sprite_index,
          this.image_index,
          this.x + KJ * 4,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          this.image_blend,
          0.4 - this.t / 8 + KJ / 200,
        );
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
kI(YQ, "obj_defeatanim");
Y1(YQ, "kinds", kh("obj_defeatanim", ku));
Y1(YQ, "defaultDepth", 0);
var YA = YQ;
function Ya(Kw) {
  let KC = kg(Kw.x, Kw.y, YA);
  KC.sprite_index = Kw.sprite_index;
  KC.sprite_index = Kw.hurtsprite;
  KC.image_index = 0;
  KC.image_xscale = Kw.image_xscale;
  KC.image_yscale = Kw.image_yscale;
  Kw.instance_destroy();
}
kI(Ya, "scr_defeatrun");
var YF = class KE extends k5 {
  create() {
    this.damage = 0;
    this.target = 0;
  }
  endStep() {
    if (this.destroyed || !kq(this, this.x, this.y, "obj_battlesolid")) {
      return;
    }
    let Kw = (KC, KJ, KT) => {
      let Km = kg(this.x, this.y, k7);
      if (!Km.destroyed) {
        Km.sprite_index = KC;
        Km.direction = this.direction + KJ;
        Km.speed = this.speed + KT;
        Km.image_angle = this.image_angle;
        Km.damage = this.damage;
        Km.target = this.target;
        Km.grazepoints = 3;
        Km.timepoints = 2;
      }
    };
    Kw("spr_clubsball_b", 0, -6);
    Kw("spr_clubsball_c", -25, -8);
    Kw("spr_clubsball_a", 25, -8);
    this.instance_destroy();
  }
};
kI(YF, "obj_clubsbullet");
Y1(YF, "kinds", kh("obj_clubsbullet", k5));
Y1(YF, "defaultDepth", -20);
Y1(YF, "defaultSprite", "spr_clubsbullet");
var YP = YF;
var YR = class KO extends k9 {
  step() {
    if (this.type !== 0) {
      super.step();
      return;
    }
    this.dtimer += 1;
    let Kw = kp.first("obj_heart");
    if (this.dtimer === 15 || this.dtimer === 19 || this.dtimer === 23) {
      this.move_towards_point(Kw ? Kw.x + 8 : 320, Kw ? Kw.y + 8 : 170, 0.1);
      let KC = (KJ, KT) => {
        let Km = kg(this.x, this.y, k7);
        if (!Km.destroyed) {
          Km.sprite_index = KJ;
          Km.direction = this.direction + KT;
          Km.speed = 4;
          Km.image_angle = this.direction;
          Km.damage = this.damage;
          Km.target = this.target;
          Km.grazepoints = 2;
          Km.timepoints = 1;
        }
      };
      KC("spr_clubsball_b", 0);
      KC("spr_clubsball_c", -17);
      KC("spr_clubsball_a", 17);
    }
    if (this.dtimer === 25) {
      let KJ = kg(this.x, this.y, kK);
      KJ.sprite_index = this.sprite_index;
      KJ.image_angle = this.image_angle;
      this.instance_destroy();
    }
  }
};
kI(YR, "obj_clubsbullet_dark_t0");
Y1(YR, "kinds", kh("obj_clubsbullet_dark_t0", k9));
var Yu = YR;
o({
  2: (Kw) => {
    if (Kw.btimer >= Kw.ratio * 20) {
      let KC = -20;
      if (Kw.side === 1) {
        KC = 660;
      }
      let KJ = Kw.miny + kn(Kw.maxy - Kw.miny);
      let KT = kg(KC, KJ, YP);
      KT.speed = 12;
      KT.damage = Kw.damage;
      KT.target = Kw.target;
      if (Kw.side === 1) {
        KT.direction = 180;
        KT.image_angle = 180;
      }
      Kw.btimer = 0;
    }
  },
  4: (Kw, KC) => {
    if (Kw.btimer >= Kw.ratio * 30) {
      Kw.btimer = 0;
      let KJ = 225;
      if (Kw.side === -1) {
        KJ = 225;
      }
      if (Kw.side === 1) {
        KJ = 315;
      }
      let KT = 400;
      let Km = ko(KT, KJ);
      let KM = kd(KT, KJ);
      let Kf = KC.heart;
      let Kr = Kf ? Kf.x : 320;
      let KS = Kf ? Kf.y : 170;
      let KU = kg(Kr + 8 + Km, KS + 8 + KM, Yu);
      KU.damage = Kw.damage;
      KU.target = Kw.target;
      KU.direction = KJ + 180;
      KU.speed = 20;
      KU.friction = 1;
      KU.image_angle = KU.direction;
      if (Kw.side === 1) {
        Kw.side = -1;
      } else {
        Kw.side = 1;
      }
    }
  },
});
var YN = class KX extends k3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 150,
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
      manual: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 0,
      con: 0,
      battlecancel: 0,
      nexttry: 0,
      mytarget: 3,
      image_speed: 0,
      betray: 0,
      argue: 0,
      image_xscale: 2,
      image_yscale: 2,
      idlesprite: "spr_clubs_idle",
      hurtsprite: "spr_clubs_hurt",
      sparedsprite: "spr_clubs_spared",
      rtimer: 0,
    });
    this.acted = [0, 0, 0, 0, 0, 0];
  }
  setupFn(Kw) {
    if (kU.monstertype[Kw] === 7) {
      Yy(Kw);
    } else {
      YB(Kw);
    }
  }
  userEvent(Kw) {
    if (Kw === 12) {
      kU.monsterx[this.myself] = this.x + this.sprite_width / 2 + 50;
      kU.monstery[this.myself] = this.y + this.sprite_height / 2 + 40;
      this.setupFn(this.myself);
      return;
    }
    if (Kw === 10) {
      this.spared();
      return;
    }
    super.userEvent(Kw);
  }
  spared() {
    let Kw = kg(this.x, this.y, Yz);
    Kw.sprite_index = this.sparedsprite;
    Kw.image_index = 0;
    Kw.image_xscale = this.image_xscale;
    Kw.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.con += 1;
    }
  }
  blcon3(Kw, KC, KJ) {
    let KT = (Km, KM, Kf, Kr) => {
      YU();
      kU.msg[0] = Kr;
      let KS = kW(Km, KM, Kf);
      if (KS) {
        KS.sprite_index = "spr_battleblcon_clubs";
        KS.image_index = Kf - 4;
        KS.image_speed = 0;
      }
    };
    KT(this.x - 110, this.y - 10, 4, Kw);
    KT(this.x - 125, this.y + 70, 5, KC);
    KT(this.x + 125, this.y - 10, 6, KJ);
  }
  step() {
    let Kw = this.myself;
    if (kU.monster[Kw] === 1) {
      if (kU.mnfight === 1 && this.talked === 0) {
        kr(this);
        if (!kp.exists("obj_darkener")) {
          kg(0, 0, kT);
        }
        kU.typer = 50;
        let KC = kV(0, 1, 2);
        let KJ = "Nice mouth";
        let KT = "Anger mouth";
        let Km = "Smart Mouth";
        if (KC === 0) {
          KJ = "Nice to&meet you!";
          KT = "Die!&Die!&Die!";
          Km = "Please&ignore&them.";
        }
        if (KC === 1) {
          KJ = "Let's get&to know&you~";
          KT = "GET OUT&OF HERE!!";
          Km = "Sorry&about&this...";
        }
        if (KC === 2) {
          KJ = "Nice&weather&today.";
          KT = "What?&It's just&awful!";
          Km = "Please&stop, you&two...";
        }
        if (this.acting === 2) {
          KJ = "It's my&birthday~";
          KT = "WHAT!? NO!&It's MY&birthday!";
          Km = "We're&triplets...";
        }
        if (this.acting === 3) {
          KJ = "Glasses&are cute,&I think...";
          KT = "Fluffy!&Glasses!&That's it!";
          Km = "HIM???&... err,&sure.";
        }
        if (this.acting === 4) {
          KJ = "Spaghetti&and tennis&balls.";
          KT = "That's&GENIUS!";
          Km = "We really&agree&on it.";
        }
        if (this.acting === 5) {
          KJ = "Animals&are kind&of nasty.";
          KT = "Just AWFUL&in&concept.";
          Km = "(Never&seen one,&but...)";
        }
        if (this.acting === 6) {
          KJ = "I love&the smell&of trees.";
          KT = "Oh!&Me too!";
          Km = "Pollen&makes me...&Uh, sure!";
        }
        if (this.manual === 1) {
          KJ = "Aww, he&MADE that!?&So caring!";
          KT = "It's SOOO&cute!&I want it!";
          Km = "(Isn't it&a bit...&boring?)";
        }
        this.blcon3(KJ, KT, Km);
        kp.with("obj_monsterparent", (KM) => {
          KM.talkmax = 210;
        });
        this.talked = 1;
        this.talktimer = 0;
        this.manual = 0;
      }
      if (this.talked === 1 && kU.mnfight === 1) {
        this.rtimer = 0;
        if (kR() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          kp.with("obj_writer", (KM) => KM.instance_destroy());
          kU.mnfight = 2;
        }
        if (kU.mnfight === 2) {
          if (!kp.exists("obj_moveheart")) {
            kJ();
          }
          if (!kp.exists("obj_growtangle")) {
            kg(320, 170, kw);
          }
        }
      }
      if (kU.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          let KM = kV(0, 1);
          let Kf = kg(this.x, this.y, d);
          Kf.type = KM === 0 ? 2 : 4;
          Kf.target = this.mytarget;
          Kf.damage = kU.monsterat[Kw] * 5;
          this.turns += 1;
          kU.turntimer = 150;
          this.attacked = 1;
          kU.typer = 6;
          kU.fc = 0;
          let Kr = kV(0, 1, 2, 3, 4, 5);
          if (Kr === 0) {
            kU.battlemsg[0] = "* Clover flashes a trio of terrible smiles.";
          }
          if (Kr === 1) {
            kU.battlemsg[0] = "* Clover is bickering with herselves.";
          }
          if (Kr === 2) {
            kU.battlemsg[0] = "* Clover is whispering about cute boys.";
          }
          if (Kr === 3) {
            kU.battlemsg[0] = "* Clover is arguing about whose toothbrush is whose.";
          }
          if (Kr === 4) {
            kU.battlemsg[0] = "* Clover hums like an out-of-tune choir.";
          }
          if (Kr === 5) {
            kU.battlemsg[0] = "* Smells like clover and dew.";
          }
          if (kU.monsterstatus[Kw] === 1) {
            kU.battlemsg[0] = "* Clover seems TIRED of discussing so much.";
          }
          if (kU.monsterhp[Kw] <= kU.monstermaxhp[Kw] / 3) {
            kU.battlemsg[0] = "* Clover starts to look wilted.";
          }
          if (kU.mercymod[Kw] >= kU.mercymax[Kw]) {
            kU.msg[0] = "* Clover seems to be getting along with herselves.";
          }
          if (this.betray === 1) {
            kU.battlemsg[0] = "* Clover's harmony was shattered by violence.";
          }
          this.betray = 0;
        } else {
          kU.turntimer = 150;
        }
      }
    }
    if (kU.myfight === 3) {
      this.actStep();
    }
  }
  actStep() {
    let Kw = this.myself;
    let KC = () => kp.exists("obj_writer");
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      YU();
      kU.msg[0] =
        "* CLOVER - AT 8 DF 2&* Two heads are better than one^1!&* Three..^1. maybe not./%";
      kY();
    }
    if (this.acting === 2 && this.actcon === 0) {
      kU.typer = 45;
      kU.fc = 2;
      kU.fe = 0;
      YU();
      kU.msg[0] = "* Ummm^1, what would you like for your birthday?/%";
      this.argue += 1;
      kk();
      this.actcon = 20;
    }
    if (this.actcon === 20 && !KC()) {
      kU.typer = 50;
      this.blcon3(
        "Let's just&have a nice&chat~/%",
        "You IDIOT!&Ask for a&GIFT!!!/%",
        "(Just&discuss&our likes.)/%",
      );
      this.actcon = 21;
    }
    if (this.actcon === 21 && !KC()) {
      YU();
      kU.msg[0] = "* (Seems like you should talk about something else...)/%";
      kY();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      kU.typer = 45;
      kU.fc = 2;
      kU.fe = 0;
      YU();
      kU.msg[0] = '* Ummm..^1. What kind of "Boys" do you like?/%';
      this.argue += 1;
      kk();
      this.actcon = 22;
    }
    if (this.actcon === 22 && !KC()) {
      kU.typer = 50;
      if (this.acted[2] === 0) {
        kf(Kw, 40);
        this.acted[2] = 1;
      }
      this.blcon3(
        "Cute ones!&Hmm hmm~&/%",
        "NICE ONES,&like I AM!/%",
        "None...&Um, I mean,&all./%",
      );
      this.actcon = 23;
    }
    if (this.actcon === 23 && !KC()) {
      YU();
      kU.msg[0] = "* (Seems like Clover enjoyed talking about that...)/%";
      kY();
      this.actcon = 1;
    }
    if (this.acting === 4 && this.actcon === 0) {
      kU.typer = 45;
      kU.fc = 2;
      kU.fe = 0;
      YU();
      kU.msg[0] = "* Do you like^1, um..^1. Sports?/%";
      this.argue += 1;
      kk();
      this.actcon = 24;
    }
    if (this.actcon === 24 && !KC()) {
      kU.typer = 50;
      if (this.acted[3] === 0) {
        kf(Kw, 40);
        this.acted[3] = 1;
      }
      this.blcon3(
        "I wanna&eat a&football./%",
        "Sports!&My favorite&food!/%",
        "Oh!&I love you&two!/%",
      );
      this.actcon = 25;
    }
    if (this.actcon === 25 && !KC()) {
      YU();
      kU.msg[0] = "* (Seems like Clover enjoyed talking about that...)/%";
      kY();
      this.actcon = 1;
    }
    if (this.acting === 5 && this.actcon === 0) {
      YU();
      kU.msg[0] = "* You brought up the topic of Animals./";
      kU.msg[1] = "* Clover didn't seem to care.../%";
      this.argue += 1;
      kY();
      this.actcon = 1;
    }
    if (this.acting === 6 && this.actcon === 0) {
      if (this.acted[5] === 0) {
        kf(Kw, 40);
        this.acted[5] = 1;
      }
      YU();
      kU.msg[0] = "* You brought up the topic of Trees^1. Clover seemed happy.../%";
      this.argue += 1;
      kY();
      this.actcon = 1;
    }
    if (this.actcon === 1 && !KC()) {
      if (this.argue >= 3) {
        kU.monstercomment[Kw] = "(Tired)";
        kU.monsterstatus[Kw] = 1;
      }
      this.actcon = 0;
      g();
    }
  }
  draw(Kw) {
    let KC = this.myself;
    if (this.state === 3) {
      if (kU.monsterhp[KC] <= kU.monstermaxhp[KC] / 2) {
        kU.monsterstatus[KC] = 1;
        if (kU.monstercomment[KC] === " ") {
          kU.monstercomment[KC] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (kU.monster[KC] === 0) {
          kU.flag[522] += 1;
          Ya(this);
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
        Kw.draw_sprite_ext(
          "spr_clubs_hurt",
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
      let KJ = "spr_clubs_idle";
      if (kU.mercymod[KC] >= kU.mercymax[KC]) {
        KJ = "spr_clubs_spared";
      }
      Kw.draw_sprite_ext(KJ, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        Kw.draw_sprite_white(
          KJ,
          this.siner / 6,
          this.x,
          this.y,
          2,
          2,
          0,
          -kD(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
kI(YN, "obj_clubsenemy");
Y1(YN, "kinds", kh("obj_clubsenemy", k3));
Y1(YN, "defaultDepth", 90);
Y1(YN, "defaultSprite", "spr_clubs_idle");
var Yc = YN;
var Yh = kI(() => {}, "none");
var YL = kI(
  (Kw, KC, KJ, KT) => ({
    cls: null,
    type: 0,
    x: KJ,
    y: KT,
    setup: Yh,
    missing: Kw,
    missingType: KC,
  }),
  "MISSING",
);
var Yn = null;
try {
  let Kv = await KH("./c-Z3ACOFIQ.js", import.meta.url);
  if (Kv && Kv.obj_heartenemy) {
    Yn = Kv;
  }
} catch {
  Yn = null;
}
var YV = Yn
  ? {
      cls: Yn.obj_heartenemy,
      type: 6,
      x: 420,
      y: 200,
      setup: Yn.setupStats,
    }
  : YL("obj_heartenemy", 6, 420, 200);
var Yo = [
  {
    id: "clover",
    name: "Clover",
    chapter: 1,
    area: "Field",
    desc: "Clover.#Three heads,#one flower.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: Yc,
        type: 16,
        x: 400,
        y: 120,
        setup: YB,
      },
    ],
    battlemsg: "* Clover grew close!",
    encounterno: 8,
    music: "battle",
  },
  {
    id: "clover-hathy",
    name: "Clover & Hathy",
    chapter: 1,
    area: "Field",
    desc: "Clover and Hathy.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: Yc,
        type: 7,
        x: 400,
        y: 30,
        setup: Yy,
      },
      YV,
    ],
    battlemsg: "* Clover and Hathy grew close!",
    encounterno: 15,
    music: "battle",
  },
];
Y2(Yc, "G.mnfight = 2;");
var Yd = {};
Y0(Yd, {
  FIGHTS: () => WQ,
  SOUNDS: () => Yx,
  SPRITES: () => Yp,
  obj_animation: () => W6,
  obj_chainking: () => Wm,
  obj_chainpiece: () => WY,
  obj_fadechain: () => Wb,
  obj_finalchain: () => WS,
  obj_growtangle_bouncer: () => WJ,
  obj_heartmarker: () => W0,
  obj_king_body: () => Wz,
  obj_king_boss: () => WZ,
  obj_nonsolid_growtangle: () => Ww,
  obj_oflash: () => W3,
  obj_skychain: () => Wl,
  obj_wavechain: () => Wf,
  setupStats: () => YE,
});
Y3();
var Yp = [
  "spr_chainking_idle",
  "spr_chainking_hurt",
  "spr_chainking_spin",
  "spr_chainking_toss",
  "spr_chainking_toss_idle",
  "spr_chainking_pullback",
  "spr_chainking_receive",
  "spr_chainpiece",
  "spr_chainfront",
  "spr_spadebullet",
  "spr_battlebg_wavechain",
  "spr_battlebg_1",
  "spr_battlebg_2",
  "spr_battlebg_spikes",
  "spr_bouncebox_spike",
  "spr_heartoutline",
  "spr_soulshining",
  "spr_susieb_idle_serious",
  "spr_susieb_attack_serious",
  "spr_diamondbullet_form",
];
var Yx = [
  "snd_dadblast",
  "snd_dadlaugh",
  "snd_criticalswing",
  "snd_chain_extend",
  "snd_chain_wave",
  "snd_locker",
  "snd_screenshake",
  "snd_bump",
  "snd_menumove",
  "snd_spearrise",
  "snd_power",
  "snd_boost",
];
function YE(Kw) {
  kU.monstername[Kw] = "King";
  kU.monstermaxhp[Kw] = 2800;
  kU.monsterhp[Kw] = 2800;
  kU.monsterat[Kw] = 8;
  kU.monsterdf[Kw] = 0;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 0;
  kU.sparepoint[Kw] = 0;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 999;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  kU.canact[Kw][1] = 1;
  kU.actactor[Kw][1] = 1;
  kU.actname[Kw][1] = "Talk";
  kU.actdesc[Kw][1] = " ";
  kU.actcost[Kw][1] = 0;
  kU.canact[Kw][2] = 1;
  kU.actactor[Kw][2] = 2;
  kU.actname[Kw][2] = "Talk";
  kU.actdesc[Kw][2] = " ";
  kU.actcost[Kw][2] = 0;
  kU.canact[Kw][3] = 1;
  kU.actactor[Kw][3] = 3;
  kU.actname[Kw][3] = "Talk";
  kU.actdesc[Kw][3] = " ";
  kU.actcost[Kw][3] = 0;
  if (kU.tempflag[5] === 1) {
    kU.canact[Kw][1] = 1;
    kU.actactor[Kw][1] = 1;
    kU.actname[Kw][1] = "Courage";
    kU.actdesc[Kw][1] = "Defense#Boost";
    kU.actcost[Kw][1] = 62;
  }
  if (kU.tempflag[6] === 1) {
    kU.canact[Kw][2] = 1;
    kU.actactor[Kw][2] = 2;
    kU.actname[Kw][2] = "RedBuster";
    kU.actdesc[Kw][2] = "Red#Damage";
    kU.actcost[Kw][2] = 150;
  }
  if (kU.tempflag[7] === 1) {
    kU.canact[Kw][3] = 1;
    kU.actactor[Kw][3] = 3;
    kU.actname[Kw][3] = "DualHeal";
    kU.actdesc[Kw][3] = "Heals#everyone";
    kU.actcost[Kw][3] = 125;
  }
}
kI(YE, "setupStats");
var YO = kI((Kw, KC) => {
  kU.msg[Kw] =
    kU.plot >= 235 ? "\\TX \\F0 \\E" + KC + " \\FK \\TK %" : "\\TX \\F0 \\E" + KC + " \\TK %";
}, "scr_kingface");
var YX = kI((Kw, KC) => {
  kU.msg[Kw] = "\\TX \\F0 \\E" + KC + " \\FS \\TS %";
}, "scr_susface");
var Yv = kI((Kw, KC) => {
  kU.msg[Kw] = "\\TX \\F0 \\E" + KC + " \\FR \\TR %";
}, "scr_ralface");
var Yj = kI((Kw) => {
  kU.msg[Kw] = "\\TX \\F0 \\T0 %";
}, "scr_noface");
var YG = 0;
var YD = 0;
var Yg = kI(() => kp.first("obj_heart"), "heart");
var YI = class Kj extends ku {};
kI(YI, "obj_heartmarker");
Y1(YI, "kinds", kh("obj_heartmarker", ku));
Y1(YI, "defaultDepth", 0);
Y1(YI, "defaultSprite", "spr_diamondbullet_form");
Y1(YI, "defaultVisible", false);
var W0 = YI;
function W1() {
  let Kw = kp.first("obj_herokris");
  let KC = kg(Kw ? Kw.x + 10 : 90, Kw ? Kw.y + 40 : 140, kC);
  let KJ = kp.first("obj_heartmarker");
  if (KJ) {
    KC.distx = KJ.x;
    KC.disty = KJ.y;
    let KT = kE(KC.x, KC.y, KC.distx, KC.disty);
    KC.move_towards_point(KC.distx, KC.disty, KT / KC.flytime);
  }
  return KC;
}
kI(W1, "scr_moveheart_k");
var W2 = class KG extends ku {
  create() {
    this.flashspeed = 1;
    this.siner = 0;
    this.target = null;
    this.image_speed = 0;
    this.flashcolor = kF.white;
  }
  draw(Kw) {
    if (kp.exists(this.target)) {
      this.image_index = this.target.image_index;
      this.sprite_index = this.target.sprite_index;
    }
    this.siner += this.flashspeed;
    let KC = kz[this.sprite_index];
    if (KC) {
      let KJ = Kw.ctx;
      KJ.save();
      KJ.globalAlpha = Math.max(0, Math.min(1, kG(this.siner / 3)));
      KJ.translate(this.x, this.y);
      KJ.scale(this.image_xscale, this.image_yscale);
      KJ.drawImage(
        Kw.tinted(KC, Kw.frame(this.sprite_index, this.image_index), this.flashcolor, true),
        -KC.ox,
        -KC.oy,
      );
      KJ.restore();
    }
    if (this.siner > 4 && kG(this.siner / 3) < 0) {
      this.instance_destroy();
    }
  }
};
kI(W2, "obj_oflash");
Y1(W2, "kinds", kh("obj_oflash", ku));
Y1(W2, "defaultDepth", 0);
var W3 = W2;
function W4(Kw) {
  let KC = kg(Kw.x, Kw.y, W3);
  KC.image_xscale = Kw.image_xscale;
  KC.image_speed = 0;
  KC.image_index = Kw.image_index;
  KC.image_yscale = Kw.image_yscale;
  KC.sprite_index = Kw.sprite_index;
  KC.depth = Kw.depth - 1;
  KC.target = Kw;
  return KC;
}
kI(W4, "scr_oflash");
var W5 = class KD extends ku {
  animationEnd() {
    this.instance_destroy();
  }
};
kI(W5, "obj_animation");
Y1(W5, "kinds", kh("obj_animation", ku));
Y1(W5, "defaultDepth", 0);
var W6 = W5;
function W7(Kw) {
  let KC = kQ(Kw);
  if (KC) {
    KC.loop = true;
  }
  return KC;
}
kI(W7, "snd_loop");
function W8(Kw) {
  if (Kw) {
    try {
      Kw.pause();
    } catch {}
  }
}
kI(W8, "snd_stop_h");
function W9(Kw, KC) {
  if (Kw) {
    Kw.playbackRate = KC;
  }
}
kI(W9, "snd_pitch");
var Wk = class Kg extends k5 {
  create() {
    this.siner = 0;
  }
  draw(Kw) {
    this.siner += 0.5;
    Kw.draw_sprite_ext(
      this.sprite_index,
      this.image_index,
      this.x + kG(this.siner / 4),
      this.y + kD(this.siner / 4),
      this.image_xscale + kG(this.siner / 8) * 0.2,
      this.image_yscale + kG(this.siner / 8) * 0.2,
      this.image_angle,
      this.image_blend,
      this.image_alpha,
    );
  }
};
kI(Wk, "obj_chainpiece");
Y1(Wk, "kinds", kh("obj_chainpiece", k5));
Y1(Wk, "defaultDepth", 15);
Y1(Wk, "defaultSprite", "spr_chainpiece");
var WY = Wk;
var WW = class KI extends k6 {
  create() {
    this.active = 1;
    this.timer = 0;
    this.bdir = kn(360);
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
  }
  step() {
    this.timer += 1;
    if (this.timer >= 30) {
      this.active = 0;
      this.image_alpha -= 0.1;
      if (this.image_alpha <= 0) {
        this.instance_destroy();
        return;
      }
      this.hspeed += ko(0.2, this.bdir);
      this.vspeed += kd(0.2, this.bdir);
    }
  }
};
kI(WW, "obj_fadechain");
Y1(WW, "kinds", kh("obj_fadechain", k6));
Y1(WW, "defaultDepth", 0);
Y1(WW, "defaultSprite", "spr_chainpiece");
var Wb = WW;
var WK = class l0 extends k6 {
  create() {
    this.sons = -1;
    this.son = [];
    this.damage = 100;
    this.active = 1;
    let Kw = Yg();
    this.move_towards_point(Kw ? Kw.x + 8 : 320, Kw ? Kw.y + 8 : 170, 1);
    this.friction = -0.3;
    this.timer = 0;
    this.con = 0;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.soundcon = 0;
    kQ("snd_menumove");
  }
  step() {
    this.image_angle = this.direction;
    if (this.con === 0 && ((this.timer += 1), this.timer >= 2)) {
      this.sons += 1;
      let Kw = kg(this.x, this.y, Wb);
      this.son[this.sons] = Kw;
      Kw.image_angle = this.image_angle;
      Kw.direction = this.direction;
      Kw.speed = this.speed / 2.5;
      Kw.active = 1;
      Kw.damage = 10;
      k4(this, Kw);
      this.timer = 0;
    }
    if (this.sons >= 30) {
      this.instance_destroy();
    }
  }
  draw(Kw) {
    this.draw_self(Kw);
    let KC = 0;
    if (this.y < -20) {
      KC = 1;
    }
    if (this.x < YG - 20) {
      KC = 1;
    }
    if (this.x > YG + 660) {
      KC = 1;
    }
    if (KC === 1) {
      Kw.draw_set_color(kF.red);
      Kw.draw_line_width(
        this.x,
        this.y,
        this.x + ko(1000, this.direction),
        this.y + kd(1000, this.direction),
        1,
      );
    }
    if (KC === 0 && this.soundcon === 0) {
      kQ("snd_spearrise");
      this.soundcon = 1;
    }
  }
};
kI(WK, "obj_skychain");
Y1(WK, "kinds", kh("obj_skychain", k6));
Y1(WK, "defaultDepth", 0);
Y1(WK, "defaultSprite", "spr_chainfront");
var Wl = WK;
var WH = class l1 extends ku {
  create() {
    this.image_xscale = 0;
    this.image_yscale = 0;
    this.image_alpha = 0.3;
    this.timer = 0;
    this.maxtimer = 15;
    this.growcon = 1;
    this.fullgrow = 0;
    this.keep = 0;
    this.megakeep = 0;
    this.image_speed = 0;
    this.image_blend = kP(kF.green, kF.lime, 0.5);
  }
  step() {
    let Kw = 0;
    if (this.timer < this.maxtimer && this.growcon === 1) {
      Kw = 1;
    }
    if (this.timer > 0 && this.growcon === 3) {
      Kw = 1;
    }
    if (Kw === 1) {
      if (this.growcon === 1) {
        this.timer += 1;
      }
      if (this.growcon === 3) {
        this.timer -= 1;
      }
      this.image_xscale = (this.timer / this.maxtimer) * 2;
      this.image_yscale = (this.timer / this.maxtimer) * 2;
      this.image_angle = 180 + (this.timer / this.maxtimer) * 180;
      this.image_alpha = 0.5 + (this.timer / this.maxtimer) * 0.5;
      let KC = kg(this.x, this.y, kK);
      KC.sprite_index = this.sprite_index;
      KC.image_xscale = this.image_xscale;
      KC.image_yscale = this.image_yscale;
      KC.image_angle = this.image_angle;
      KC.depth = this.depth - 1;
      KC.image_blend = this.image_blend;
      KC.image_alpha = 1 - this.image_alpha + 0.1;
      KC.image_speed = 0;
      if (this.timer >= this.maxtimer && this.growcon === 1) {
        this.growcon = 2;
        this.keep = 1;
      }
      if (this.timer <= 0 && this.growcon === 3) {
        this.instance_destroy();
      }
    }
  }
  endStep() {
    let Kw = Yg();
    if (!Kw) {
      return;
    }
    let KC = this.x - this.sprite_width / 2;
    let KJ = this.x + this.sprite_width / 2;
    let KT = this.y - this.sprite_height / 2;
    let Km = this.y + this.sprite_height / 2;
    if (Kw.x < KC + 5) {
      Kw.x = KC + 5;
    }
    if (Kw.x > KJ - 22) {
      Kw.x = KJ - 22;
    }
    if (Kw.y < KT + 5) {
      Kw.y = KT + 5;
    }
    if (Kw.y > Km - 22) {
      Kw.y = Km - 22;
    }
  }
  draw(Kw) {
    Kw.draw_sprite_ext(
      this.sprite_index,
      1,
      this.x,
      this.y,
      this.image_xscale,
      this.image_yscale,
      this.image_angle,
      this.image_blend,
      this.image_alpha,
    );
    this.draw_self(Kw);
  }
};
kI(WH, "obj_nonsolid_growtangle");
Y1(WH, "kinds", kh("obj_nonsolid_growtangle", ku));
Y1(WH, "defaultDepth", 5);
Y1(WH, "defaultSprite", "spr_battlebg_wavechain");
var Ww = WH;
var WC = class l2 extends k8 {
  create() {
    this.image_speed = 0;
    this.image_xscale = 1.96;
    this.image_yscale = 1.96;
    this.initdir = kV(45, 135, 225, 315);
    this.direction = this.initdir;
    this.speed = 0.1;
    this.active = 1;
    let Kw = kp.first("obj_growtangle");
    if (Kw) {
      this.x = Kw.x;
      this.y = Kw.y;
      Kw.megakeep = 1;
    }
    this.timer = 0;
    this.type = 0;
    this.con = 0;
    this.xx = YG;
    this.yy = YD;
    this.lx = 140 + this.xx;
    this.rx = 480 + this.xx;
    this.ux = 0 + this.yy;
    this.dx = 320 + this.yy;
    this.fadein = 0;
    this.spikecount = 0;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.minitimer = 0;
    this.bumpnoise = 0;
    this.timerbonus = 0;
    this.wall_destroy = 0;
  }
  userEvent(Kw) {
    if (Kw === 5) {
      super.userEvent(5);
      return;
    }
    if (Kw === 2) {
      kp.with("obj_king_body", (KC) => {
        KC.active = 1;
      });
      kp.with("obj_growtangle", (KC) => {
        KC.growcon = 3;
      });
      kU.turntimer = 3;
      this.instance_destroy();
    }
  }
  endStep() {
    if (
      this.type === 0 &&
      (this.con === 0 &&
        ((this.ux += 30), (this.dx -= 30), (this.lx += 30), (this.rx -= 30), (this.con = 0.4)),
      this.con === 0.4 && ((this.minitimer += 1), this.minitimer >= 14 && (this.con = 0.5)),
      this.con === 0.5 && this.speed < 4.6 && (this.speed += 0.2),
      this.con === 0.5 &&
        this.speed >= 4.6 &&
        ((this.timer += 1), this.timer >= 170 && (this.con = 1)),
      this.con === 1 && ((this.speed -= 0.2), this.speed <= 0.1))
    ) {
      this.userEvent(2);
      return;
    }
    if (
      this.type === 1 &&
      (this.con === 0 && ((this.direction += kn(20) - kn(20)), (this.con = 0.5)),
      this.con === 0.5 && this.speed < 5.2 && (this.speed += 0.2),
      this.hspeed >= 4.2 &&
        (this.vspeed > 0
          ? ((this.vspeed += 0.1), (this.hspeed -= 0.1))
          : ((this.vspeed -= 0.1), (this.hspeed -= 0.1))),
      this.hspeed <= -4.2 &&
        (this.vspeed > 0
          ? ((this.vspeed += 0.1), (this.hspeed += 0.1))
          : ((this.vspeed -= 0.1), (this.hspeed += 0.1))),
      this.vspeed >= 4.2 &&
        (this.hspeed > 0
          ? ((this.hspeed += 0.1), (this.vspeed -= 0.1))
          : ((this.hspeed -= 0.1), (this.vspeed -= 0.1))),
      this.vspeed <= -4.2 &&
        (this.hspeed > 0
          ? ((this.hspeed += 0.1), (this.vspeed += 0.1))
          : ((this.hspeed -= 0.1), (this.vspeed += 0.1))),
      this.con === 0.5 &&
        this.speed >= 5.2 &&
        ((this.timer += 1), this.timer >= 90 && (this.con = 1)),
      this.con === 1 && ((this.speed -= 0.4), this.speed <= 0.1))
    ) {
      this.userEvent(2);
      return;
    }
    if (
      this.type === 2 &&
      (this.con === 0 &&
        ((this.direction += kn(20) - kn(20)),
        (this.con = 0.5),
        (this.ux += 50),
        (this.dx -= 50),
        (this.lx += 50),
        (this.rx -= 50)),
      this.con === 0.5 && this.speed < 5.2 && (this.speed += 0.2),
      this.con === 0.5 &&
        this.speed >= 5.2 &&
        ((this.timer += 1), this.timer >= 70 && (this.con = 1)),
      this.con === 1 && ((this.speed -= 0.5), this.speed <= 0.1))
    ) {
      this.userEvent(2);
      return;
    }
    if (
      this.type === 3 &&
      (this.con === 0 &&
        ((this.direction += kn(20) - kn(20)),
        (this.con = 0.4),
        (this.ux += 50),
        (this.dx -= 50),
        (this.lx += 50),
        (this.rx -= 50)),
      this.con === 0.4 && ((this.minitimer += 1), this.minitimer >= 14 && (this.con = 0.5)),
      this.con === 0.5 && this.speed < 4.4 && (this.speed += 0.2),
      this.con === 0.5 &&
        this.speed >= 4.4 &&
        ((this.timer += 1), this.timer >= 170 && (this.con = 1)),
      this.con === 1 && ((this.speed -= 0.5), this.speed <= 0.1))
    ) {
      this.userEvent(2);
      return;
    }
    if (
      this.type === 4 &&
      (this.con === 0 &&
        ((this.direction += kn(10) - kn(10)),
        (this.con = 0.5),
        (this.ux += 50),
        (this.dx -= 50),
        (this.lx += 50),
        (this.rx -= 50)),
      this.con === 0.5 && this.speed < 7 && (this.speed += 0.2),
      this.con === 0.5 &&
        this.speed >= 7 &&
        ((this.timer += 1), this.timer >= 90 && (this.con = 1)),
      this.con === 1 && ((this.speed -= 0.5), this.speed <= 0.1))
    ) {
      this.active = 0;
      this.userEvent(2);
      return;
    }
    if (
      this.type === 5 &&
      (this.con === 0 &&
        ((this.ux += 30), (this.dx -= 30), (this.lx += 30), (this.rx -= 30), (this.con = 0.4)),
      this.con === 0.4 && ((this.minitimer += 1), this.minitimer >= 14 && (this.con = 0.5)),
      this.con === 0.5 && this.speed < 4 && (this.speed += 0.2),
      this.con === 0.5 &&
        this.speed >= 4 &&
        ((this.timer += 1), this.timer >= 170 && (this.con = 1)),
      this.con === 1 && ((this.speed -= 0.2), this.speed <= 0.1))
    ) {
      this.userEvent(2);
      return;
    }
    let Kw = kp.first("obj_growtangle");
    if (Kw) {
      Kw.x = this.x;
      Kw.y = this.y;
      let KC = this.x - this.sprite_width / 2;
      let KJ = this.x + this.sprite_width / 2;
      let KT = this.y - this.sprite_height / 2;
      let Km = this.y + this.sprite_height / 2;
      if (KC < this.lx && this.hspeed < 0) {
        this.hspeed = -this.hspeed;
        this.bumpnoise = 1;
      }
      if (KJ > this.rx && this.hspeed > 0) {
        this.hspeed = -this.hspeed;
        this.bumpnoise = 1;
      }
      if (KT < this.ux && this.vspeed < 0) {
        this.vspeed = -this.vspeed;
        this.bumpnoise = 1;
      }
      if (Km > this.dx && this.vspeed > 0) {
        this.vspeed = -this.vspeed;
        this.bumpnoise = 1;
      }
      if (this.bumpnoise === 1) {
        kQ("snd_bump");
        kQ("snd_screenshake");
        this.bumpnoise = 0;
        if (!kp.exists("obj_shake")) {
          kg(0, 0, km);
        }
      }
    }
    if (this.grazed === 1) {
      if (this.timerbonus === 0) {
        this.timer += 2;
        this.timerbonus = 1;
      }
      this.grazetimer += 1;
      if (this.grazetimer >= 15) {
        this.timerbonus = 0;
        this.grazetimer = 0;
        this.grazed = 0;
      }
    }
  }
  draw(Kw) {
    this.draw_self(Kw);
    if (this.fadein < 10) {
      this.fadein += 1;
    }
    Kw.draw_set_alpha(this.fadein / 10);
    Kw.draw_set_color(kF.white);
    Kw.draw_rectangle(this.lx, this.ux, this.rx, this.dx, true);
    Kw.draw_rectangle(this.lx + 1, this.ux + 1, this.rx - 1, this.dx - 1, true);
    Kw.draw_set_alpha(1);
    let KC = this.sprite_width;
    let KJ = this.sprite_height;
    let KT = Math.floor(KC / 11);
    let Km = this.x;
    let KM = this.y;
    let Kf = this.fadein / 10;
    for (let Kr = 0; Kr < KT; Kr += 1) {
      Kw.draw_sprite_ext(
        "spr_bouncebox_spike",
        0,
        Km - KC / 2 + 3,
        KM - KJ / 2 + Kr * 11,
        1,
        1,
        0,
        kF.white,
        Kf,
      );
      Kw.draw_sprite_ext(
        "spr_bouncebox_spike",
        0,
        Km + KC / 2 - Kr * 11,
        KM - KJ / 2 + 3,
        1,
        1,
        270,
        kF.white,
        Kf,
      );
      Kw.draw_sprite_ext(
        "spr_bouncebox_spike",
        0,
        Km - KC / 2 + Kr * 11,
        KM + KJ / 2 - 2,
        1,
        1,
        90,
        kF.white,
        Kf,
      );
      Kw.draw_sprite_ext(
        "spr_bouncebox_spike",
        0,
        Km + KC / 2 - 2,
        KM - KJ / 2 + Kr * 11,
        -1,
        1,
        0,
        kF.white,
        Kf,
      );
    }
  }
};
kI(WC, "obj_growtangle_bouncer");
Y1(WC, "kinds", kh("obj_growtangle_bouncer", k8));
Y1(WC, "defaultDepth", 4);
Y1(WC, "defaultSprite", "spr_battlebg_2");
var WJ = WC;
var WT = class l3 extends k5 {
  create() {
    this.kingcon = 0;
    this.contimer = 0;
    this.image_speed = 0.334;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.t = 0;
    this.tmax = 180;
    this.subtype = 0;
    this.type = 1;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.soundplayed = 0;
    this.chain = null;
  }
  step() {
    if (this.t === 0 && this.kingcon === 0) {
      this.sprite_index = "spr_chainking_toss";
      this.image_index = 0;
      this.image_speed = 0.5;
      this.kingcon = 1;
      this.soundplayed = 0;
      if (this.type === 2 && this.subtype === 1) {
        kQ("snd_dadlaugh");
      } else {
        kQ("snd_dadblast");
      }
    }
    if (this.kingcon === 1 && this.image_index >= 3) {
      if (this.image_index >= 2 && this.soundplayed === 0) {
        kQ("snd_criticalswing");
        this.soundplayed = 1;
      }
      this.sprite_index = "spr_chainking_toss_idle";
      this.image_index = 0;
      this.image_speed = 0.334;
      this.kingcon = 2;
      if (this.type === 1) {
        this.chain = kg(this.x - 24, this.y + 104, Wf);
      }
      if (this.type === 2) {
        this.chain = kg(this.x - 24, this.y + 104, WS);
      }
      if (this.chain) {
        k4(this, this.chain);
        this.chain.type = this.subtype;
      }
    }
    this.t += 1;
  }
  destroy() {
    kp.with("obj_king_boss", (Kw) => {
      Kw.visible = true;
      Kw.active = 1;
    });
    kp.with("obj_growtangle", (Kw) => {
      Kw.growcon = 3;
    });
    kp.with("obj_nonsolid_growtangle", (Kw) => {
      Kw.growcon = 3;
    });
  }
};
kI(WT, "obj_chainking");
Y1(WT, "kinds", kh("obj_chainking", k5));
Y1(WT, "defaultDepth", 6);
Y1(WT, "defaultSprite", "spr_chainking_spin");
var Wm = WT;
var WM = class l4 extends k5 {
  create() {
    this.direction = 180;
    this.speed = 10;
    this.image_angle = 180;
    this.chaincon = 0;
    this.sons = -1;
    this.son = [];
    this.timer = 0;
    this.t = 0;
    this.tmax = 220;
    let Kw = kp.first("obj_chainking");
    let KC = kp.first("obj_nonsolid_growtangle");
    this.initkingx = Kw ? Kw.x : this.x;
    this.initkingy = Kw ? Kw.y : this.y;
    this.initboxx = KC ? KC.x : 200;
    this.initboxy = KC ? KC.y : 175;
    this.kingx = new Array(41).fill(0);
    this.kingy = new Array(41).fill(0);
    this.siner = 0;
    this.btimer = 20;
    this.bgap = 0;
    this.type = 0;
    this.wavefactor = 1;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 6;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.chain_noise = 0;
    this.chainsnd = null;
    this.wavenoise = null;
  }
  step() {
    let Kw = kp.first("obj_nonsolid_growtangle");
    let KC = kp.first("obj_chainking");
    let KJ = Yg();
    if (this.chaincon === 0) {
      if (this.chain_noise === 0) {
        this.chain_noise = 1;
        this.chainsnd = W7("snd_chain_extend");
      }
      this.sons += 1;
      this.son[this.sons] = kg(this.x, this.y, WY);
      if (Kw && this.x <= Kw.x) {
        W8(this.chainsnd);
        kQ("snd_locker");
        kQ("snd_screenshake");
        this.speed = 0;
        this.chaincon = 1;
        this.shakeamt = 12;
        this.remx = KJ ? KJ.x : 0;
        this.remy = KJ ? KJ.y : 0;
        this.remx_box = Kw.x;
        this.remy_box = Kw.y;
        this.chaincon = 2.1;
        kp.with("obj_growtangle", (KT) => {
          KT.megakeep = 1;
        });
      }
    }
    if (this.chaincon === 2.1) {
      if (KJ) {
        KJ.x = this.remx;
        KJ.y = this.remy;
      }
      if (Kw) {
        Kw.x = this.remx_box;
        Kw.y = this.remy_box;
      }
      let KT = kn(360);
      let Km = ko(this.shakeamt, KT);
      let KM = kd(this.shakeamt, KT);
      if (KJ) {
        KJ.x += Km;
        KJ.y += KM;
      }
      if (Kw) {
        Kw.x += Km;
        Kw.y += KM;
      }
      this.shakeamt -= 2;
      if (this.shakeamt < 0) {
        this.chaincon = 3;
      }
    }
    if (this.chaincon === 3) {
      if (this.chain_noise === 1) {
        this.chain_noise = 2;
        this.wavenoise = W7("snd_chain_wave");
      }
      let Kf = (Kr, KS, KU) => {
        this.siner += 1;
        if (KC) {
          KC.y = this.initkingy + kG(this.siner / Kr) * 80 * KU;
        }
        this.btimer += 1;
        if (this.btimer >= KS) {
          let Ky = kg(YG - 20, this.initboxy, k7);
          Ky.sprite_index = "spr_spadebullet";
          Ky.hspeed = 4;
          k4(this, Ky);
          this.btimer = 0;
        }
      };
      if (this.type === 0) {
        Kf(12, 20, 1);
        if (this.chain_noise === 2) {
          W9(this.wavenoise, 0.8 - kG(this.siner / 12) / 2);
        }
      }
      if (this.type === 1) {
        Kf(10, 18, 1);
        if (this.chain_noise === 2) {
          W9(this.wavenoise, 0.9 - kG(this.siner / 10) / 2);
        }
      }
      if (this.type === 2) {
        Kf(9, 16, 1);
        if (this.chain_noise === 2) {
          W9(this.wavenoise, 1 - kG(this.siner / 9) / 2);
        }
      }
      if (this.type === 3) {
        Kf(7, 14, this.wavefactor);
        if (this.chain_noise === 2) {
          W9(this.wavenoise, 1 - kG(this.siner / 7) / 2);
        }
      }
    }
    if (KC) {
      this.kingx[0] = KC.x - this.initkingx;
      this.kingy[0] = KC.y - this.initkingy;
      for (let Kr = 40; Kr > 0; Kr -= 1) {
        this.kingx[Kr] = this.kingx[Kr - 1];
        this.kingy[Kr] = this.kingy[Kr - 1];
      }
      for (let KS = 0; KS <= this.sons; KS += 1) {
        let KU = this.son[KS];
        if (KU && !KU.destroyed) {
          KU.x = (this.kingx[KS] || 0) + KU.xstart;
          KU.y = (this.kingy[KS] || 0) + KU.ystart;
        }
      }
      if (this.chaincon >= 3) {
        let Ky = this.son[this.sons];
        if (Ky) {
          this.x = Ky.x;
          this.y = Ky.y;
        }
        if (Kw) {
          Kw.x = (this.kingx[this.sons] || 0) + this.initboxx;
          Kw.y = (this.kingy[this.sons] || 0) + this.initboxy;
        }
      }
    }
    this.t += 1;
    if (this.t >= this.tmax - 10) {
      this.wavefactor *= 0.8;
      kp.with("obj_chainpiece", (KB) => {
        KB.image_alpha -= 0.1;
      });
      kp.with("obj_regularbullet", (KB) => {
        KB.active = 0;
        KB.image_alpha -= 0.1;
      });
    }
    if (this.t >= this.tmax) {
      if (this.chain_noise === 2) {
        this.chain_noise = 3;
        W8(this.wavenoise);
      }
      kU.turntimer = 3;
      kp.with("obj_regularbullet", (KB) => KB.instance_destroy());
      kp.with("obj_chainking", (KB) => {
        KB.sprite_index = "spr_chainking_receive";
      });
      kp.with("obj_chainking", (KB) => KB.instance_destroy());
      this.instance_destroy();
    }
  }
  destroy() {
    W8(this.chainsnd);
    W8(this.wavenoise);
  }
};
kI(WM, "obj_wavechain");
Y1(WM, "kinds", kh("obj_wavechain", k5));
Y1(WM, "defaultDepth", 10);
Y1(WM, "defaultSprite", "spr_chainfront");
var Wf = WM;
var Wr = class l5 extends k5 {
  create() {
    this.direction = 180;
    this.speed = 10;
    this.image_angle = 180;
    this.chaincon = 0;
    this.sons = -1;
    this.son = [];
    this.timer = 0;
    this.gotimer = 0;
    let Kw = kp.first("obj_chainking");
    let KC = kp.first("obj_nonsolid_growtangle");
    this.initkingx = Kw ? Kw.x : this.x;
    this.initkingy = Kw ? Kw.y : this.y;
    this.initboxx = KC ? KC.x : 205;
    this.initboxy = KC ? KC.y : 170;
    this.kingx = new Array(41).fill(0);
    this.kingy = new Array(41).fill(0);
    this.siner = 0;
    this.btimer = 20;
    this.bgap = 0;
    this.type = 1;
    this.movecon = 0;
    this.movetime = 25;
    this.mytimer = 0;
    this.maxtimer = 200;
    if (this.type === 1) {
      this.maxtimer = 300;
    }
    this.image_blend = kF.red;
    this.bulletpoint = 0;
    this.spikemake = 0;
    this.ended = 0;
    this.endtimer = 0;
    this.xx = YG;
    this.yy = YD;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.chain_noise = 0;
    this.timerbonus = 0;
    this.chainsound = null;
    this.chainnoise = null;
    this.spike = null;
    this.box = null;
    this.movetimer = 0;
    this.pointx = 0;
    this.pointy = 0;
    this.mark = null;
  }
  step() {
    let Kw = kp.first("obj_nonsolid_growtangle");
    let KC = Yg();
    if (this.chaincon === 0) {
      if (this.chain_noise === 0) {
        this.chainsound = W7("snd_chain_extend");
        this.chain_noise = 1;
      }
      if (this.sons < 40) {
        this.sons += 1;
        let KJ = kg(this.x, this.y, WY);
        KJ.image_blend = kF.red;
        this.son[this.sons] = KJ;
      }
      if (Kw && this.x <= Kw.x) {
        if (this.chain_noise === 1) {
          this.chain_noise = 2;
          W8(this.chainsound);
          kQ("snd_locker");
          kQ("snd_screenshake");
        }
        this.box = Kw;
        this.x = Kw.x;
        this.y = Kw.y;
        this.speed = 0;
        this.chaincon = 1;
        this.shakeamt = 16;
        this.remx = KC ? KC.x : 0;
        this.remy = KC ? KC.y : 0;
        this.remx_box = Kw.x;
        this.remy_box = Kw.y;
        this.chaincon = 2.1;
        kp.with("obj_growtangle", (KT) => {
          KT.megakeep = 1;
        });
      }
    }
    if (this.chaincon === 2.1) {
      if (Kw) {
        Kw.x = this.remx_box;
        Kw.y = this.remy_box;
      }
      let KT = kn(360);
      let Km = ko(this.shakeamt, KT);
      let KM = kd(this.shakeamt, KT);
      if (Kw) {
        Kw.x += Km;
        Kw.y += KM;
      }
      this.shakeamt -= 2;
      if (this.shakeamt <= 0) {
        this.chaincon = 2.2;
        if (Kw) {
          Kw.x = this.remx_box;
          Kw.y = this.remy_box;
        }
      }
    }
    if (this.chaincon === 2.2) {
      this.xx = YG + 320;
      this.yy = YD + 160;
      let Kf = YD;
      this.chaincon = 2.3;
      if (this.type >= 1) {
        let Kr = kg(this.x, this.y, k8);
        this.spike = Kr;
        k4(this, Kr);
        Kr.image_speed = 0;
        Kr.active = 0;
        kp.with("obj_regularbullet", (KS) => {
          KS.basealpha = 0;
        });
        Kr.image_alpha = 0;
        Kr.mask_index = this.box ? this.box.sprite_index : "spr_battlebg_1";
        Kr.sprite_index = "spr_battlebg_spikes";
        this.spikemake = 1;
        Kr.image_xscale = (this.box ? this.box.image_xscale : 2) * 0.96;
        Kr.image_yscale = (this.box ? this.box.image_yscale : 2) * 0.96;
      }
      if (this.type <= 1) {
        for (let KS = 0; KS < 5; KS += 1) {
          for (let KU = 0; KU < 5; KU += 1) {
            let Ky = kg(this.xx - 150 + KS * 70, Kf + 20 + KU * 70, k8);
            Ky.sprite_index = "spr_spadebullet";
            Ky.basealpha = 0;
            Ky.active = 0;
            Ky.image_angle = 90;
            Ky.image_xscale = 0.5;
            Ky.image_yscale = 0.5;
            Ky.neveractive = 1;
            k4(this, Ky);
          }
        }
        this.bulletpoint = 1;
      }
    }
    if (this.chaincon === 2.3) {
      kp.with("obj_regularbullet", (KB) => {
        KB.basealpha = (KB.basealpha || 0) + 0.04;
      });
      if (this.spikemake === 1 && this.box && this.spike) {
        this.box.image_xscale += 0.005;
        this.box.image_yscale += 0.005;
        this.spike.image_xscale += 0.005;
        this.spike.image_yscale += 0.005;
        if (this.type === 1) {
          this.box.image_xscale += 0.01;
          this.box.image_yscale += 0.01;
          this.spike.image_xscale += 0.01;
          this.spike.image_yscale += 0.01;
        }
      }
      this.gotimer += 1;
      if (this.gotimer >= 30) {
        this.chaincon = 3;
        this.gotimer = 0;
        this.xx = YG + 320;
        this.yy = YD + 160;
        this.pointx = this.xx;
        this.pointy = this.yy;
        kp.with("obj_regularbullet", (KB) => {
          KB.active = 1;
        });
      }
    }
    if (this.chaincon === 3) {
      if (this.movecon === 0 && this.ended === 0 && this.mytimer > this.maxtimer - 10) {
        this.ended = 1;
      }
      if (this.movecon === 0 && this.ended === 0) {
        this.speed = 0;
        let KB = 0;
        let KZ = 100;
        let Kq = 130;
        if (this.type === 0) {
          Kq = 110;
          this.movetime = 30;
        }
        if (this.type >= 1) {
          Kq = 140;
        }
        if (this.type === 3 || this.type === 4) {
          Kq = 120;
        }
        if (this.type === 5) {
          Kq = 130;
          this.movetime = 30;
        }
        let Ka = 0;
        while ((KB < KZ || KB > Kq) && Ka++ < 10000) {
          this.pointx = this.xx + kn(140) - kn(140);
          this.pointy = this.yy + kn(120) - kn(120);
          KB = kE(this.x, this.y, this.pointx, this.pointy);
        }
        this.target = kg(this.pointx, this.pointy, WY);
        this.target.sprite_index = "spr_heartoutline";
        this.target.depth = 30;
        this.move_towards_point(this.pointx, this.pointy, KB / this.movetime);
        this.movetimer = 0;
        this.movecon = 1;
        this.chainnoise = W7("snd_chain_extend");
      }
      if (this.movecon === 1 && this.ended === 0) {
        this.movetimer += 1;
        if (this.movetimer > this.movetime) {
          this.x = this.pointx;
          this.y = this.pointy;
          this.movecon = 2;
          this.speed = 0;
          this.movetimer = 0;
        }
      }
      if (this.movecon === 2 && this.ended === 0) {
        let KF = 20;
        if (this.type === 1) {
          KF = 22;
        }
        if (this.type === 2) {
          KF = 16;
        }
        if (this.type === 3) {
          KF = 7;
        }
        if (this.type === 4) {
          KF = 3;
        }
        if (this.type === 5) {
          KF = 22;
        }
        this.movetimer += 1;
        if (this.movetimer >= KF) {
          if (this.target && this.target.instance_destroy) {
            this.target.instance_destroy();
          }
          this.movecon = 0;
          W8(this.chainnoise);
        }
      }
    }
    if (this.chaincon >= 0) {
      this.kingx[0] = this.x;
      this.kingy[0] = this.y;
      for (let KP = 40; KP > 0; KP -= 1) {
        this.kingx[KP] = this.kingx[KP - 1];
        this.kingy[KP] = this.kingy[KP - 1];
      }
      for (let KR = 0; KR <= this.sons; KR += 1) {
        let Ku = this.son[KR];
        if (Ku && !Ku.destroyed) {
          Ku.x = this.kingx[KR];
          Ku.y = this.kingy[KR];
          Ku.image_angle = this.direction;
        }
      }
      if (this.chaincon >= 3 && Kw) {
        Kw.x = this.kingx[this.sons];
        Kw.y = this.kingy[this.sons];
      }
    }
    if (this.bulletpoint === 1) {
      let KN = KC ? KC.x + 8 : 320;
      let Kc = KC ? KC.y + 8 : 170;
      kp.with("obj_regularbullet", (Kh) => {
        if (Kh.sprite_index === "spr_spadebullet") {
          Kh.image_angle = kx(Kh.x, Kh.y, KN, Kc);
          let KL = kE(Kh.x, Kh.y, KN, Kc);
          if (KL > 80) {
            Kh.neveractive -= 0.02;
          }
          if (Kh.neveractive > 0) {
            Kh.active = 0;
          } else {
            Kh.active = 1;
          }
          let Kn = 0.7;
          let KV = 1 - Kh.neveractive;
          if (KV > 1) {
            KV = 1;
          }
          if (KL > 80) {
            Kn = 1.7 - (KL * 1) / 80;
            if (Kn < 0) {
              Kn = 0;
            }
          }
          Kh.image_alpha = (0.3 + Kn) * Kh.basealpha * KV;
          if (Kh.image_xscale < 0.68 && this.ended === 0) {
            Kh.image_xscale += 0.0005;
            Kh.image_yscale += 0.0005;
          } else {
            Kh.active = 0;
            Kh.basealpha -= 0.1;
            this.ended = 1;
          }
        }
      });
    }
    if (this.spikemake === 1 && this.spike && !this.spike.destroyed) {
      this.spike.image_alpha += 0.04;
      if (this.box) {
        this.spike.x = this.box.x;
        this.spike.y = this.box.y;
      }
      if (this.ended === 1) {
        if (this.spike.image_alpha >= 1) {
          this.spike.image_alpha = 1;
        }
        this.spike.image_alpha -= 0.14;
      }
    }
    if (this.ended === 1 && ((this.endtimer += 1), this.endtimer >= 10)) {
      kA("snd_chain_extend");
      kp.with("obj_chainpiece", (Kh) => Kh.instance_destroy());
      kp.with("obj_regularbullet", (Kh) => Kh.instance_destroy());
      kp.with("obj_chainking", (Kh) => Kh.instance_destroy());
      kU.turntimer = 3;
      this.instance_destroy();
      return;
    }
    if (this.spikemake === 1 && this.spike && !this.spike.destroyed && this.spike.grazed === 1) {
      if (this.timerbonus === 0) {
        this.mytimer += 2;
        this.timerbonus = 1;
      }
      this.grazetimer += 1;
      if (this.grazetimer >= 15) {
        this.timerbonus = 0;
        this.grazetimer = 0;
        this.spike.grazed = 0;
      }
    }
    this.mytimer += 1;
    this.image_angle = this.direction;
  }
  draw(Kw) {
    this.draw_self(Kw);
  }
  destroy() {
    W8(this.chainsound);
    W8(this.chainnoise);
  }
};
kI(Wr, "obj_finalchain");
Y1(Wr, "kinds", kh("obj_finalchain", k5));
Y1(Wr, "defaultDepth", 10);
Y1(Wr, "defaultSprite", "spr_chainfront");
var WS = Wr;
function WU(Kw, KC) {
  kp.with("obj_regularbullet", (KJ) => {
    KJ.image_alpha += 0.2;
  });
  if (Kw.btimer >= KC) {
    let KJ = Kw.side === 0 ? 80 : 560;
    let KT = kp.first("obj_growtangle");
    let Km = KT ? KT.y : 170;
    let KM = KT ? KT.sprite_height : 0;
    let Kf = kg(YG + KJ, Km - KM / 2 + kn(KM), k7);
    if (Kw.side === 0) {
      Kf.direction = 0;
    }
    if (Kw.side === 1) {
      Kf.direction = 180;
    }
    Kf.image_alpha = 0;
    Kf.damage = Kw.damage;
    Kf.target = Kw.target;
    Kf.sprite_index = "spr_spadebullet";
    Kf.speed = 5;
    Kf.friction = -0.1;
    Kf.image_angle = Kf.direction;
    Kw.side = Kw.side === 1 ? 0 : 1;
    Kw.btimer = 0;
  }
}
kI(WU, "sideSpades");
function Wy(Kw, KC, KJ) {
  if (Kw.btimer >= KC) {
    let KT = kV(0, 1, 2, 3);
    let Km = 0;
    let KM = 0;
    if (KT === 0 || KT === 3) {
      Km = YG + 320 + kn(300) - kn(300);
      KM = -60;
    }
    if (KT === 1) {
      Km = YG - 60;
      KM = kn(320);
    }
    if (KT === 2) {
      Km = YG + 700;
      KM = kn(320);
    }
    let Kf = kg(Km, KM, Wl);
    if (KJ) {
      kp.with("obj_skychain", (Kr) => k4(Kw, Kr));
    } else {
      k4(Kw, Kf);
    }
    Kw.btimer = 0;
  }
}
kI(Wy, "skyChains");
o({
  21: (Kw) => WU(Kw, 9),
  23: (Kw) => WU(Kw, 7),
  34: (Kw) => Wy(Kw, 28, true),
  35: (Kw) => Wy(Kw, 22, false),
});
var WB = class l6 extends k3 {
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
      idlesprite: "spr_chainking_idle",
      hurtsprite: "spr_chainking_hurt",
      sparedsprite: "spr_chainking_idle",
      kturn: 0,
      xx: YG,
      yy: YD,
      tempattack: 1,
      hurtbuffer: 0,
      susinit: 0,
      remxx: YG,
      remyy: YD,
      chain_dragging: 0,
      wall_bouncing: 0,
      talk_all_message: 0,
      attack: 0,
      rtimer: 0,
      shakex: 0,
      active: 1,
      blcontype: 3,
    });
    this.reminvc = kU.invc;
  }
  userEvent(Kw) {
    if (Kw === 12) {
      kU.monsterx[this.myself] = this.x + this.sprite_width / 2 - 10;
      kU.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (Kw === 5) {
      this.startAttack();
      return;
    }
    if (Kw === 10) {
      this.defeatEvent();
      return;
    }
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.con += 1;
    }
  }
  defeatEvent() {
    let Kw = kp.first("obj_battlecontroller");
    if (Kw) {
      Kw.skipvictory = 1;
    }
    kU.invc = 1;
    this.instance_destroy();
  }
  startAttack() {
    if (this.attacked !== 0) {
      return;
    }
    let Kw = this.myself;
    let KC = this.xx;
    let KJ = this.yy;
    let KT = kU.monsterat[Kw];
    let Km = this.tempattack;
    kU.invc = this.reminvc;
    let KM = this.attack;
    let Kf = (KZ, Kq) => kg(KC + KZ, KJ + Kq, kw);
    let Kr = (KZ) => {
      let Kq = kg(0, 0, d);
      Object.assign(Kq, KZ);
      return Kq;
    };
    let KS = (KZ) => {
      let Kq = kg(KZ.x - 10, KZ.y - 10, W0);
      W1();
      Kq.instance_destroy();
    };
    let KU = (KZ, Kq, Ka) => {
      this.visible = false;
      let KF = kg(this.x, this.y, Wm);
      KF.type = 1;
      KF.subtype = KZ;
      KF.grazepoints = 6;
      let KP = kg(KC + 200, KJ + 175, Ww);
      KP.sprite_index = "spr_battlebg_wavechain";
      KS(KP);
      KF.damage = KT * Kq * Km;
      KF.target = Ka;
      kU.turntimer = 999;
    };
    let Ky = (KZ, Kq, Ka) => {
      kU.invc *= 1.5;
      this.visible = false;
      this.timeruse = 0;
      let KF = kg(this.x, this.y, Wm);
      KF.type = 2;
      KF.subtype = KZ;
      let KP = kg(KC + 205, KJ + 170, Ww);
      KP.sprite_index = "spr_battlebg_1";
      KF.damage = KT * Kq * Km;
      KF.target = Ka;
      kU.turntimer = 999;
      KS(KP);
      return KF;
    };
    let KB = (KZ) => {
      kU.invc *= 1.5;
      let Kq = Kf(310, 165);
      Kq.sprite_index = "spr_battlebg_2";
      Kq.keep = 1;
      KS(Kq);
      let Ka = kg(Kq.x, Kq.y, WJ);
      Ka.type = KZ;
      Ka.damage = KT * 5 * Km;
      Ka.target = this.mytarget;
      kU.turntimer = 999;
    };
    if (KM === 1) {
      Kf(320, 170);
      W1();
      Kr({
        type: 21,
        damage: KT * 5 * Km,
        target: this.mytarget,
        side: 1,
        btimer: -8,
      });
      kU.turntimer = 190;
    }
    if (KM === 2) {
      KU(0, 4, 3);
    }
    if (KM === 3) {
      Kf(320, 170);
      W1();
      Kr({
        type: 34,
        damage: KT * 5 * Km,
        target: this.mytarget,
        btimer: 10,
      });
      kU.turntimer = 210;
    }
    if (KM === 4) {
      KB(5);
    }
    if (KM === 5) {
      KU(1, 4, 3);
    }
    if (KM === 6) {
      kU.invc *= 1.5;
      this.visible = false;
      this.timeruse = 0;
      let KZ = kg(this.x, this.y, Wm);
      KZ.type = 2;
      KZ.subtype = 5;
      if (this.chain_dragging >= 1) {
        KZ.subtype = 2;
      }
      this.chain_dragging += 1;
      let Kq = kg(KC + 205, KJ + 170, Ww);
      Kq.sprite_index = "spr_battlebg_1";
      KZ.damage = KT * 5 * Km;
      KZ.target = this.mytarget;
      kU.turntimer = 999;
      KS(Kq);
    }
    if (KM === 7) {
      Kf(320, 170);
      W1();
      Kr({
        type: 35,
        damage: KT * 5 * Km,
        target: this.mytarget,
        btimer: 10,
      });
      kU.turntimer = 220;
    }
    if (KM === 8) {
      KB(3);
    }
    if (KM === 9) {
      Kf(320, 170);
      W1();
      Kr({
        type: 23,
        damage: KT * 5 * Km,
        target: this.mytarget,
        btimer: -8,
        side: 1,
      });
      kU.turntimer = 200;
    }
    if (KM === 10) {
      KU(2, 4, 3);
    }
    if (KM === 11) {
      Ky(1, 3, 3);
    }
    this.tempattack = 1;
    this.attacked = 1;
  }
  talk() {
    let Kw = this.myself;
    if (!kp.exists("obj_darkener")) {
      kg(0, 0, kT);
    }
    kU.typer = 50;
    kU.msg = new Array(100).fill(" ");
    kU.msg[0] = "Fall before&the chain&of justice!/%";
    let KC = 3;
    let KJ = this.kturn;
    if (KJ === 0) {
      kU.msg[0] = "How dare you&come here,&Lightners...?/%";
    }
    if (KJ === 1) {
      kU.msg[0] = "You, that&left us in&the shadows,&stripped of&meaning.../%";
      KC = 8;
    }
    if (KJ === 2) {
      kU.msg[0] = "You DARE&return&to torment us&once again?/%";
    }
    if (KJ === 3) {
      kU.msg[0] = "Begone!&We have found&fresh&purpose./%";
    }
    if (KJ === 4) {
      kU.msg[0] = "For the&KNIGHT&has appeared./%";
    }
    if (KJ === 5) {
      kU.msg[0] = "The KNIGHT&that pulls&the Fountains&from the&Earth./%";
      KC = 8;
    }
    if (KJ === 6) {
      KC = 8;
      kU.msg[0] = "Holy&Fountains,&whose shadows&are creating&a new&world.../";
      kU.msg[1] = "OUR world./%";
    }
    if (KJ === 7) {
      kU.msg[0] = "Hahaha...&Do you see&now our NEW&purpose...?/%";
    }
    if (KJ === 8) {
      kU.msg[0] = "Soon, this&world&shall be&blanketed&in darkness.../";
      kU.msg[1] = "And DARKNERS&shall RULE&it!/%";
      KC = 8;
    }
    if (KJ === 9) {
      kU.msg[0] = "Then, you may&see what it is&like to live&in DESPAIR!/%";
    }
    if (KJ === 10) {
      kU.msg[0] = "Now, enough&talk!/";
      kU.msg[1] = "Fall before&the chain of&justice!/%";
    }
    if (KJ === 11) {
      kU.msg[0] = "... ha,&you're&quite strong,&aren't you!?/%";
    }
    if (KJ === 12) {
      kU.msg[0] = "If I keep&fighting you&like this,&then.../%";
    }
    if (KJ === 13) {
      kU.msg[0] = "It seems...&that.../%";
    }
    if (KJ >= 14) {
      kU.msg[0] = "My KNIGHT...&I shall not&fail you.../%";
      this.battlecancel = 2;
    }
    this.kturn += 1;
    if (this.kturn <= 11) {
      this.attack = this.kturn;
    } else {
      if (this.kturn === 12) {
        this.attack = 7;
      }
      if (this.kturn === 13) {
        this.attack = 8;
      }
      if (this.kturn === 14) {
        this.attack = 10;
      }
      if (this.kturn === 15) {
        this.attack = 9;
      }
      if (this.kturn === 16) {
        this.attack = 7;
      }
      if (this.kturn === 17) {
        this.attack = 11;
      }
      if (this.kturn >= 18) {
        this.attack = 11;
      }
      if (kU.monsterdf[Kw] > -25) {
        kU.monsterdf[Kw] -= 5;
      }
    }
    this.target_randomly = 1;
    if (this.attack === 2 || this.attack === 5 || this.attack === 10 || this.attack === 11) {
      kS(this);
    } else {
      kr(this);
    }
    this.blcontype = KC;
    kW(this.x - 160, this.y, KC);
    this.talked = 1;
    this.talktimer = 0;
  }
  step() {
    let Kw = this.myself;
    if (this.susinit === 0) {
      kp.with("obj_herosusie", (KC) => {
        KC.idlesprite = "spr_susieb_idle_serious";
        KC.attacksprite = "spr_susieb_attack_serious";
      });
      this.susinit = 1;
    }
    if (kU.monster[Kw] === 1) {
      kU.flag[51 + Kw] = 4;
      if (kU.mnfight === 1 && this.talked === 0) {
        this.talk();
      }
      if (this.talked === 1 && kU.mnfight === 1) {
        this.rtimer = 0;
        if (!kp.exists("obj_writer")) {
          kU.mnfight = 2;
        }
      }
      if (kU.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.talktimer = 0;
          kU.turntimer = 180;
          this.userEvent(5);
          this.turns += 1;
          this.attacked = 1;
          kU.typer = 6;
          kU.fc = 0;
          let KC = kV(0, 1, 2, 3);
          if (KC === 0) {
            kU.battlemsg[0] = "* Darkness pours from the fountain.";
          }
          if (KC === 1) {
            kU.battlemsg[0] = "* KING's mouths gave a berserk smile.";
          }
          if (KC === 2) {
            kU.battlemsg[0] = "* The battlefield is rumbling.";
          }
          if (KC === 3) {
            kU.battlemsg[0] = "* KING's mouths babble indecipherably.";
          }
          if (kU.monsterhp[Kw] <= kU.monstermaxhp[Kw] / 4) {
            kU.battlemsg[0] = "* KING's cape flutters weakly.";
          }
        } else {
          kU.turntimer = 120;
        }
      }
      if (kU.mnfight === 2 && kU.turntimer <= 1) {
        if (this.battlecancel === 1) {
          kU.mercymod[Kw] = 999;
        }
        if (this.battlecancel === 2) {
          kp.with("obj_battlecontroller", (KJ) => {
            KJ.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (this.con === 1) {
      this.con = 4;
    }
    if (this.con === 4 && !kp.exists("obj_writer")) {
      this.con = 5;
      this.alarm[4] = 15;
      kp.with("obj_battlecontroller", (KJ) => {
        KJ.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      kp.with("obj_battlecontroller", (KJ) => {
        KJ.noreturn = 0;
      });
      kU.flag[247] = 1;
      this.scr_monsterdefeat();
      this.userEvent(10);
      this.instance_destroy();
      this.con = 7;
      return;
    }
    if (kU.myfight === 3) {
      this.actStep();
    }
    if (kU.myfight === 7) {
      this.hspeed = 15;
    }
  }
  actStep() {
    let Kw = this.myself;
    this.xx = YG;
    this.yy = YD;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* KING - Abandoned by the Lightners^1, his heart became cracked with hatred./";
      kU.msg[1] = "* He cannot be reasoned with^1, but don't give up...!/%";
      kY();
    }
    if (this.acting === 2 && this.actcon === 0) {
      kU.msg = new Array(100).fill(" ");
      if (kU.tempflag[5] === 0) {
        kU.msg[0] = "* You tried to reason with the King.../";
        YO(1, 5);
        kU.msg[2] = "* Silence^1, Lightbringer!/";
        kU.msg[3] = "* Your very existence goes against our own.../";
        kU.msg[4] = "\\E0* By the Knight's will^1, I shall shatter your heart to pieces!/";
        Yj(5);
        kU.msg[6] = "* Your will is changing..^1.&* \\cYTALK\\cW became \\cYCOURAGE\\cW!/%";
        kU.tempflag[5] = 1;
        kU.canact[Kw][1] = 1;
        kU.actactor[Kw][1] = 1;
        kU.actname[Kw][1] = "Courage";
        kU.actdesc[Kw][1] = "Defense#Boost";
        kU.actcost[Kw][1] = 62;
      } else {
        kQ("snd_power");
        kp.with("obj_heroparent", (KJ) => {
          let KT = W4(KJ);
          KT.flashcolor = kF.orange;
        });
        kU.msg[0] = "* You encouraged the party^1!&* The party's DEFENSE raised for this turn!/%";
        this.tempattack = 0.8;
      }
      kY();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      kU.msg = new Array(100).fill(" ");
      if (kU.tempflag[6] === 0) {
        kU.msg[0] = "* Susie tried to reason with the King.../";
        YX(1, 1);
        kU.msg[2] = "* Arright^1, listen up./";
        kU.msg[3] = "\\E2* Lancer's my friend./";
        kU.msg[4] = "\\EC* So if we can get by without hurting you^1, then.../";
        YO(5, 0);
        kU.msg[6] = "* If I perish^1, so be it!/";
        kU.msg[7] = "\\E4* Show my son the monster you REALLY are!/";
        YX(8, "C");
        kU.msg[9] = "* .../";
        kU.msg[10] = "\\E3* Arright^1, you wanna see what I can do^1, huh?/";
        Yj(11);
        kU.msg[12] = "* Susie's will is changing..^1.&* \\cYTALK\\cW became \\cYRED BUSTER\\cW!/%";
        kU.tempflag[6] = 1;
        kU.canact[Kw][2] = 1;
        kU.actactor[Kw][2] = 2;
        kU.actname[Kw][2] = "RedBuster";
        kU.actdesc[Kw][2] = "Red#Damage";
        kU.actcost[Kw][2] = 150;
        this.actcon = 1;
      } else {
        kU.msg[0] = "* Your SOUL shined its power on Susie!/%";
        this.actcon = 10;
      }
      kY();
      this.acttimer = 0;
    }
    if (this.acting === 4 && this.actcon === 0) {
      kU.msg = new Array(100).fill(" ");
      if (kU.tempflag[7] === 0) {
        kU.msg[0] = "* Ralsei tried to reason with the King.../";
        Yv(1, "B");
        kU.msg[2] = "* You might not realize it^1, but.../";
        kU.msg[3] = "\\E6* This is a world where you don't have to fight./";
        kU.msg[4] = "\\E8* I know if we try^1, we can all find another way.../";
        YO(5, 6);
        kU.msg[6] = "\\E6* Such simple-minded platitudes.../";
        kU.msg[7] = "\\E0* A shame you will not live to realize your naivety./";
        kU.msg[8] = "\\E4* Now^1, perish with the pathetic LIGHTNERs you worship!/";
        Yv(9, 8);
        kU.msg[10] = "* Sorry^1, my friends and I aren't going anywhere!/";
        Yj(11);
        kU.msg[12] = "* Ralsei's will is changing..^1.&* \\cYTALK\\cW became \\cYDUAL HEAL\\cW!/%";
        kY();
        kU.tempflag[7] = 1;
        kU.canact[Kw][3] = 1;
        kU.actactor[Kw][3] = 3;
        kU.actname[Kw][3] = "DualHeal";
        kU.actdesc[Kw][3] = "Heals#everyone";
        kU.actcost[Kw][3] = 125;
        this.actcon = 1;
      } else {
        kU.msg[0] = "* Your SOUL shined its power on RALSEI!/%";
        kY();
        this.actcon = 20;
      }
      this.acttimer = 0;
    }
    let KC = (KJ, KT, Km) => {
      kU.faceaction[KJ] = 2;
      kU.charaction[KJ] = 2;
      kU.charspecial[KJ] = KT;
      kU.chartarget[KJ] = 0;
      kU.acting[KJ] = 0;
      kQ("snd_boost");
      let KM = kp.first("obj_herokris");
      let Kf = kg((KM ? KM.x : 80) + 30, (KM ? KM.y : 50) + 50, W6);
      Kf.depth = -20;
      Kf.image_index = 0;
      Kf.image_xscale = 2;
      Kf.image_yscale = 2;
      Kf.image_speed = 1;
      Kf.sprite_index = "spr_soulshining";
      kp.with(Km, (Kr) => W4(Kr));
      kp.with("obj_herokris", (Kr) => W4(Kr));
    };
    if (this.actcon === 10) {
      this.acttimer += 1;
      if (this.acttimer >= 10 || !kp.exists("obj_writer")) {
        this.acttimer = 0;
        this.actcon = 11;
      }
    }
    if (this.actcon === 11) {
      KC(1, 5, "obj_herosusie");
      this.actcon = 12;
    }
    if (this.actcon === 12) {
      this.acttimer += 1;
      if (this.acttimer >= 20) {
        this.actcon = 1;
        kp.with("obj_herosusie", (KJ) => {
          KJ.state = 0;
        });
      }
    }
    if (this.actcon === 20) {
      this.acttimer += 1;
      if (this.acttimer >= 10 || !kp.exists("obj_writer")) {
        this.acttimer = 0;
        this.actcon = 21;
      }
    }
    if (this.actcon === 21) {
      KC(2, 6, "obj_heroralsei");
      this.actcon = 22;
    }
    if (this.actcon === 22) {
      this.acttimer += 1;
      if (this.acttimer >= 20) {
        this.actcon = 1;
        kp.with("obj_heroralsei", (KJ) => {
          KJ.state = 0;
        });
      }
    }
    if (this.actcon === 1 && !kp.exists("obj_writer")) {
      this.actcon = 0;
      g();
    }
  }
  draw(Kw) {
    let KC = this.myself;
    if (this.state === 3) {
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (kU.monster[KC] === 0) {
          this.userEvent(10);
          return;
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
        Kw.draw_sprite_ext(
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
      let KJ = this.idlesprite;
      if (kU.mercymod[KC] >= kU.mercymax[KC]) {
        KJ = this.idlesprite;
      }
      Kw.draw_sprite_ext(KJ, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        Kw.draw_sprite_white(
          KJ,
          this.siner / 6,
          this.x,
          this.y,
          2,
          2,
          0,
          -kD(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
kI(WB, "obj_king_boss");
Y1(WB, "kinds", kh("obj_king_boss", k3));
Y1(WB, "defaultDepth", 90);
Y1(WB, "defaultSprite", "spr_chainking_idle");
var WZ = WB;
var Wq = class l7 extends ku {
  create() {
    this.xx = YG;
    this.yy = YD;
    this.condition = 0;
    this.attackno = 0;
    this.attack = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.x = this.xx + 470;
    this.y = this.yy + 70;
    this.active = 1;
    this.faketimer = 0;
    this.faketimermax = 180;
    this.timeruse = 0;
    this.image_speed = 0.334;
  }
  scr_debug() {
    return kU.debug === 1;
  }
  nextAttack() {
    let Kw = this.xx;
    let KC = this.yy;
    this.attackno += 1;
    this.active = 0;
    if (this.attackno <= 11) {
      this.attack = this.attackno;
    } else {
      this.attack = kV(7, 8, 9, 10, 11);
    }
    let KJ = this.attack;
    let KT = (KS) => {
      let KU = kg(0, 0, d);
      KU.type = KS;
      return KU;
    };
    let Km = (KS) => {
      this.visible = false;
      let KU = kg(this.x, this.y, Wm);
      KU.type = 1;
      KU.subtype = KS;
      let Ky = kg(Kw + 200, KC + 175, Ww);
      Ky.sprite_index = "spr_battlebg_wavechain";
      W1();
    };
    let KM = (KS) => {
      this.visible = false;
      this.timeruse = 0;
      let KU = kg(this.x, this.y, Wm);
      KU.type = 2;
      KU.subtype = KS;
      let Ky = kg(Kw + 205, KC + 170, Ww);
      Ky.sprite_index = "spr_battlebg_1";
      W1();
    };
    let Kf = (KS) => {
      let KU = kg(Kw + 310, KC + 165, kw);
      KU.sprite_index = "spr_battlebg_2";
      W1();
      let Ky = kg(KU.x, KU.y, WJ);
      Ky.type = KS;
    };
    let Kr = (KS, KU) => {
      kg(Kw + 340, KC + 170, kw);
      W1();
      KT(KS);
      this.timeruse = 1;
      this.faketimermax = KU;
      this.faketimer = 0;
    };
    if (KJ === 1) {
      Kr(21, 190);
    }
    if (KJ === 2) {
      Km(0);
    }
    if (KJ === 3) {
      Kr(34, 200);
    }
    if (KJ === 4) {
      Kf(0);
    }
    if (KJ === 5) {
      Km(1);
    }
    if (KJ === 6) {
      KM(2);
    }
    if (KJ === 7) {
      Kr(35, 220);
    }
    if (KJ === 8) {
      Kf(3);
    }
    if (KJ === 9) {
      Kr(23, 190);
    }
    if (KJ === 10) {
      Km(2);
    }
    if (KJ === 11) {
      KM(1);
    }
  }
  step() {
    if (this.active === 1 && this.scr_debug()) {
      this.nextAttack();
    }
    if (this.timeruse === 1) {
      this.faketimer += 1;
      if (this.faketimer >= this.faketimermax) {
        kp.with("obj_bulletparent", (Kw) => Kw.instance_destroy());
        kp.with("obj_dbulletcontroller", (Kw) => Kw.instance_destroy());
        kp.with("obj_growtangle", (Kw) => {
          Kw.growcon = 3;
        });
        kp.with("obj_heart", (Kw) => Kw.instance_destroy());
        this.active = 1;
        this.timeruse = 0;
        this.faketimer = 0;
      }
    }
  }
  draw(Kw) {
    this.draw_self(Kw);
    Kw.draw_set_color(kF.green);
    Kw.draw_text(0, 0, String(this.attackno));
    let KC = kp.first("obj_chainking");
    if (KC) {
      Kw.draw_set_color(kF.yellow);
      Kw.draw_text(0, 40, String(KC.x));
      Kw.draw_text(0, 60, String(KC.y));
    }
  }
};
kI(Wq, "obj_king_body");
Y1(Wq, "kinds", kh("obj_king_body", ku));
Y1(Wq, "defaultDepth", 0);
Y1(Wq, "defaultSprite", "spr_chainking_spin");
var Wz = Wq;
var WQ = [
  {
    id: "king",
    name: "King",
    chapter: 1,
    area: "Card Castle",
    desc: "King.#Chains, spades and#a bouncing spiked box.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: WZ,
        type: 25,
        x: 460,
        y: 70,
        setup: YE,
      },
    ],
    battlemsg: "* King blocked the way!",
    encounterno: 40,
    music: "battle",
  },
];
Y2(WZ, "G.mnfight = 2;");
var WA = {};
Y0(WA, {
  FIGHTS: () => bk,
  SOUNDS: () => WF,
  SPRITES: () => Wa,
  obj_checker_animtest: () => WI,
  obj_checkers_enemy: () => b7,
  obj_checkers_leap: () => Wj,
  obj_oflash: () => Wd,
  obj_ralseithrown: () => b3,
  obj_smallcheckers_enemy: () => b9,
  obj_spinheart: () => WD,
  obj_throwralsei: () => b5,
  obj_throwtarget: () => b1,
  setupStats: () => WX,
  setupStatsCRound: () => Wx,
  setupStatsKRound: () => WE,
  setupStatsKRound2: () => WO,
});
Y3();
var Wa = [
  "spr_checkers_idle",
  "spr_checkers_crouch",
  "spr_checkers_leap",
  "spr_checkers_magnificent",
  "spr_checkers_leg",
  "spr_checkers_bow",
  "spr_checkers_milk",
  "spr_checkers_crown",
  "spr_checkers_idle_crownless",
  "spr_checkershrapnel",
  "spr_smallchecker_idle",
  "spr_smallchecker_hurt",
  "spr_smallchecker_run",
  "spr_smallchecker_transform3",
  "spr_smallchecker_legtuck",
  "spr_smallchecker_crown",
  "spr_krisb_bow",
  "spr_ralseib_bow",
  "spr_susieb_throwralseiready",
  "spr_susieb_attack_unarmed",
  "spr_ralsei_thrown",
  "spr_ralseib_idle",
  "spr_throwarrow",
  "spr_spinheart",
  "spr_spinheartmask",
  "spr_attack_cut1",
  "spr_attack_slap1",
];
var WF = [
  "snd_impact",
  "snd_jump",
  "snd_boost",
  "snd_ultraswing",
  "snd_magicsprinkle",
  "snd_swing",
  "snd_power",
  "snd_item",
  "snd_grab",
  "snd_coin",
  "snd_noise",
  "snd_whistlebreath",
  "snd_crownshrink",
];
var WP = 0;
var WR = 0;
var Wu = kI((Kw) => "[C]", "scr_get_input_name");
var WN = kI((Kw, ...KC) => {
  let KJ = Kw;
  KC.forEach((KT, Km) => {
    KJ = KJ.split("~" + (Km + 1)).join(String(KT));
  });
  return KJ;
}, "scr_84_get_subst_string");
var Wc = kI(
  (Kw) => ({
    face: Kw,
  }),
  "ralface",
);
var Wh = kI(
  (Kw) => ({
    face: Kw,
  }),
  "susface",
);
function WL(...Kw) {
  kU.msg = new Array(100).fill(" ");
  let KC = "";
  let KJ = 0;
  for (let KT of Kw) {
    if (typeof KT == "string") {
      kU.msg[KJ++] = KC + KT;
      KC = "";
    } else {
      KC += "\\E" + String(KT.face);
    }
  }
}
kI(WL, "setMsgs");
var Wn = kI(() => kp.exists("obj_writer"), "writerExists");
var WV = kI(() => kp.with("obj_writer", (Kw) => Kw.instance_destroy()), "killWriters");
var Wo = class l8 extends ku {
  create() {
    this.flashspeed = 1;
    this.siner = 0;
    this.target = null;
    this.image_speed = 0;
    this.flashcolor = kF.white;
  }
  draw(Kw) {
    if (kp.exists(this.target)) {
      this.image_index = this.target.image_index;
      this.sprite_index = this.target.sprite_index;
    }
    this.siner += this.flashspeed;
    Kw.draw_sprite_white(
      this.sprite_index,
      this.image_index,
      this.x,
      this.y,
      this.image_xscale,
      this.image_yscale,
      0,
      Math.max(0, kG(this.siner / 3)),
    );
    if (this.siner > 4 && kG(this.siner / 3) < 0) {
      this.instance_destroy();
    }
  }
};
kI(Wo, "obj_oflash");
Y1(Wo, "kinds", kh("obj_oflash", ku));
Y1(Wo, "defaultDepth", 0);
var Wd = Wo;
function Wp(Kw) {
  let KC = kg(Kw.x, Kw.y, Wd);
  KC.image_xscale = Kw.image_xscale;
  KC.image_speed = 0;
  KC.image_index = Kw.image_index;
  KC.image_yscale = Kw.image_yscale;
  KC.sprite_index = Kw.sprite_index;
  KC.depth = Kw.depth - 1;
  KC.target = Kw;
  return KC;
}
kI(Wp, "scr_oflash");
function Wx(Kw) {
  kU.monstername[Kw] = "C.Round";
  kU.monstermaxhp[Kw] = 10;
  kU.monsterhp[Kw] = 10;
  kU.monsterat[Kw] = 5;
  kU.monsterdf[Kw] = 0;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 10;
  kU.sparepoint[Kw] = 0;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  if (kU.encounterno === 7 && kU.plot < 40) {
    kU.plot = 40;
  }
  if (kB(2)) {
    kU.canact[Kw][1] = 1;
    kU.actactor[Kw][1] = 2;
    kU.actname[Kw][1] = "X-Compliment";
    kU.canact[Kw][2] = 1;
    kU.actname[Kw][2] = "Warning";
    kU.actactor[Kw][2] = 3;
  }
}
kI(Wx, "setupStatsCRound");
function WE(Kw) {
  kU.monstername[Kw] = "K.Round";
  kU.monstermaxhp[Kw] = 1300;
  kU.monsterhp[Kw] = 1300;
  kU.monsterat[Kw] = 7.5;
  kU.monsterdf[Kw] = 3;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 100;
  kU.sparepoint[Kw] = 0;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  kU.canact[Kw][1] = 1;
  kU.actname[Kw][1] = "Bow";
  kU.canact[Kw][2] = 1;
  kU.actname[Kw][2] = "Deep Bow";
  kU.actactor[Kw][2] = 3;
  if (kB(2)) {
    kU.canact[Kw][3] = 1;
    kU.actname[Kw][3] = "Warning";
    kU.actactor[Kw][3] = 3;
  }
}
kI(WE, "setupStatsKRound");
function WO(Kw) {
  kU.monstername[Kw] = "K.Round";
  kU.monstermaxhp[Kw] = 1300;
  kU.monsterhp[Kw] = 1300;
  kU.monsterat[Kw] = 8;
  kU.monsterdf[Kw] = 3;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 100;
  kU.sparepoint[Kw] = 0;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  if (kU.flag[246] === 1) {
    kU.actname[Kw][0] = "Checkers";
  }
  kU.canact[Kw][1] = 1;
  kU.actname[Kw][1] = "Bow";
  kU.canact[Kw][2] = 1;
  kU.actname[Kw][2] = "Susie's Idea";
  kU.actactor[Kw][2] = 4;
}
kI(WO, "setupStatsKRound2");
var WX = WE;
var Wv = class l9 extends k6 {
  create() {
    Object.assign(this, {
      jumpcon: 0,
      jumptimer: 0,
      s_timer: 0,
      image_xscale: 2,
      image_yscale: 2,
      leapmode: 0,
      active: 1,
      image_speed: 0,
      image_index: 0,
      damage: 100,
      grazed: 0,
      grazepoints: 6,
      timepoints: 2,
      inv: 120,
      grazetimer: 0,
      target: 0,
      boss: 0,
      amt: 0,
      floory: 0,
      targetx: 0,
      magamt: 0,
      siner: 0,
    });
  }
  userEvent(Kw) {
    if (Kw === 5 && this.active === 1) {
      kt(this);
    }
  }
  step() {
    let Kw = kp.first("obj_growtangle");
    let KC = Kw ? Kw.y : 170;
    let KJ = Kw ? Kw.sprite_height : 0;
    let KT = kp.first("obj_heart");
    let Km = KT ? KT.x : 320;
    let KM = KT ? KT.y : 170;
    let Kf = () =>
      kp.with("obj_checkers_enemy", (Kr) => {
        Kr.visible = true;
      });
    if (this.leapmode === 0) {
      if (this.jumpcon === 1 && this.vspeed >= 0 && this.y >= KC + KJ / 2 - this.sprite_height) {
        kQ("snd_impact");
        kg(0, 0, km);
        this.y = KC + KJ / 2 - this.sprite_height;
        this.jumptimer = 0;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 0;
      }
      if (this.jumpcon === 3 && this.vspeed >= 0 && this.y >= this.floory - 2) {
        kQ("snd_impact");
        kg(0, 0, km);
        this.y = this.floory;
        this.x = this.xstart;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 4;
      }
      if (this.jumpcon === 0) {
        this.sprite_index = "spr_checkers_crouch";
        this.jumptimer += 1;
        let Kr = 20;
        if (this.amt >= 1) {
          Kr = 10;
        }
        if (this.jumptimer >= Kr) {
          kQ("snd_jump");
          this.floory = this.y;
          this.jumptimer = 0;
          this.jumpcon = 1;
          this.amt += 1;
          this.sprite_index = "spr_checkers_leap";
          this.targetx = Km + 8 - this.sprite_width / 2;
          this.vspeed = -15;
          if (this.amt === 1) {
            this.vspeed = -17;
          }
          this.gravity = 1;
          this.hspeed = (this.targetx - this.x) / 28;
          if (this.amt >= 4) {
            this.active = 0;
            this.jumpcon = 3;
            this.targetx = this.xstart;
            this.gravity = 2;
            this.hspeed = (this.targetx - this.x) / 16;
          }
        }
      }
      if (this.jumpcon === 4) {
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          kU.turntimer = -1;
          Kf();
          this.instance_destroy();
        }
      }
    }
    if (
      this.leapmode === 1 &&
      (this.jumpcon === 7 &&
        ((this.jumptimer += 1),
        this.jumptimer >= 10 &&
          kp.with("obj_regularbullet", (KS) => {
            KS.active = 0;
            KS.image_alpha -= 0.1;
          }),
        this.jumptimer >= 20 && ((kU.turntimer = -1), Kf(), this.instance_destroy())),
      this.jumpcon === 6 &&
        this.y >= this.floory - 2 &&
        ((this.y = this.floory),
        (this.x = this.xstart),
        (this.vspeed = 0),
        (this.gravity = 0),
        (this.hspeed = 0),
        (this.sprite_index = "spr_checkers_crouch"),
        (this.jumpcon = 7)),
      this.jumpcon === 0 &&
        ((this.sprite_index = "spr_checkers_crouch"),
        (this.jumptimer += 1),
        this.jumptimer >= 20 &&
          ((this.floory = this.y),
          (this.jumptimer = 0),
          (this.jumpcon = 1),
          (this.sprite_index = "spr_checkers_leap"),
          (this.targetx = Km + 8 - this.sprite_width / 2),
          (this.hspeed = (this.targetx - this.x) / 17),
          (this.vspeed = -17),
          kQ("snd_jump"),
          (this.gravity = 1),
          (this.amt += 1),
          this.amt >= 3 &&
            ((this.active = 0),
            (this.jumpcon = 6),
            (this.targetx = this.xstart),
            (this.gravity = 2),
            (this.hspeed = (this.targetx - this.x) / 16)))),
      this.jumpcon === 1 &&
        this.vspeed >= 0 &&
        ((this.gravity = 0),
        (this.vspeed = 0),
        (this.hspeed = 0),
        (this.jumpcon = 2),
        kQ("snd_boost")),
      this.jumpcon === 2 &&
        ((this.image_speed = 0.25),
        (this.jumptimer += 1),
        this.jumptimer >= 15 &&
          (kQ("snd_ultraswing"),
          (this.image_speed = 0),
          (this.image_index = 0),
          (this.vspeed = 32),
          (this.jumpcon = 3),
          (this.jumptimer = 0))),
      this.jumpcon === 3)
    ) {
      let KS = kl(this);
      KS.image_alpha = 0.7;
      if (this.y >= KC + KJ / 2 - this.sprite_height) {
        kQ("snd_impact");
        kg(0, 0, km);
        for (let KU = 0; KU < 6; KU += 1) {
          let Ky = kg(this.x + this.sprite_width / 2 - 15 + KU * 5, KC + KJ / 2, k7);
          Ky.image_xscale = 1.5;
          Ky.image_yscale = 1.5;
          Ky.direction = 130 - kn(10) - (KU / 5) * 70;
          Ky.sprite_index = "spr_checkershrapnel";
          Ky.speed = 6 + kn(1);
          Ky.gravity = 0.25;
          Ky.target = this.target;
          Ky.damage = this.damage;
        }
        this.y = KC + KJ / 2 - this.sprite_height;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 0;
      }
    }
    if (this.leapmode === 2) {
      if (this.jumpcon === 0) {
        this.sprite_index = "spr_checkers_magnificent";
        this.image_speed = 0.5;
        this.jumpcon = 1;
        this.magamt = 0;
      }
      if (this.jumpcon === 1) {
        if (this.image_index === 2) {
          kQ("snd_ultraswing");
        }
        if (this.image_index >= 4) {
          this.image_index = 4;
          this.image_speed = 0;
          this.hspeed = -4;
          this.gravity = -0.12;
          this.jumpcon = 2;
          this.siner = 0;
        }
      }
      if (this.jumpcon === 2) {
        this.siner += 1;
        this.y += kG(this.siner / 3) * 4;
        this.s_timer += 1;
        if (this.s_timer === 20) {
          kQ("snd_magicsprinkle");
        }
        if (this.s_timer >= 24) {
          let KB = kg(this.x + kn(this.sprite_width / 2), this.y + this.sprite_height - 50, k7);
          KB.sprite_index = "spr_checkershrapnel";
          KB.vspeed = 3;
          KB.image_xscale = 1.5;
          KB.image_yscale = 1.5;
          KB.depth = this.depth + 1;
          KB.gravity_direction = 135 + kn(180);
          KB.gravity = 0.06;
          KB.target = this.target;
          KB.damage = this.damage;
          if (this.magamt === 6 || this.magamt === 12) {
            KB.gravity = 0;
            KB.move_towards_point(Km + 8, KM + 8, 3);
          }
          this.s_timer = 21;
          this.magamt += 1;
        }
        if (this.y < WR - 200) {
          this.speed = 0;
          this.gravity = 0;
          this.y = this.ystart - 100;
          this.x = this.xstart + 300;
          this.hspeed = -30;
          this.vspeed = 10;
          this.jumpcon = 3;
        }
      }
      if (this.jumpcon === 3) {
        this.magamt = 0;
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          kQ("snd_impact");
          kg(0, 0, km);
          this.amt += 1;
          this.s_timer = 0;
          this.x = this.xstart;
          this.y = this.ystart;
          this.hspeed = 0;
          this.vspeed = 0;
          this.jumpcon = 0;
          this.jumpcon = 4;
          this.jumptimer = 0;
          this.sprite_index = "spr_checkers_idle";
          this.image_index = 0;
          this.image_speed = 0;
        }
      }
      if (this.jumpcon === 4) {
        this.jumptimer += 1;
        if (this.jumptimer >= 20) {
          kp.with("obj_regularbullet", (KZ) => {
            KZ.active = 0;
            KZ.image_alpha -= 0.1;
          });
        }
        if (this.jumptimer >= 30) {
          kU.turntimer = -1;
          this.instance_destroy();
          Kf();
        }
      }
    }
    if (this.leapmode === 3) {
      kp.with("obj_regularbullet", (KZ) => {
        KZ.image_xscale += 0.01;
        KZ.image_yscale += 0.01;
      });
      if (this.jumpcon === 0) {
        this.sprite_index = "spr_checkers_leg";
        this.image_index = 0;
        this.image_speed = 0.5;
        this.jumpcon = 1;
      }
      if (this.jumpcon === 1) {
        if (this.image_index === 3) {
          kQ("snd_swing");
          kQ("snd_magicsprinkle");
          for (let KZ = 0; KZ < 4; KZ += 1) {
            let Kq = kg(this.x - 40, this.y + 100, k7);
            Kq.sprite_index = "spr_checkershrapnel";
            Kq.direction = kx(Kq.x, Kq.y, Km + 8, KM + 8) - KZ * 10 + kn(KZ * 20);
            Kq.speed = 3.5 + kn(1.8);
            Kq.target = this.target;
            Kq.damage = this.damage;
          }
        }
        if (this.image_index >= 5) {
          this.image_index = 5;
          this.image_speed = 0;
          this.jumpcon = 2;
        }
      }
      if (this.jumpcon === 2) {
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          this.sprite_index = "spr_checkers_idle";
          this.image_index = 0;
        }
        if (this.jumptimer >= 20) {
          this.jumptimer = 0;
          this.jumpcon = 0;
          this.amt += 1;
          if (this.amt >= 4) {
            this.jumpcon = 3;
            this.jumptimer = 0;
          }
        }
      }
      if (this.jumpcon === 3) {
        this.jumptimer += 1;
        if (this.jumptimer >= 20) {
          kp.with("obj_regularbullet", (Ka) => {
            Ka.image_alpha -= 0.1;
            Ka.active = 0;
          });
        }
        if (this.jumptimer >= 30) {
          kU.turntimer = -1;
          this.instance_destroy();
          Kf();
        }
      }
    }
    if (this.leapmode === 4) {
      if (this.jumpcon === 1 && this.y >= this.floory - 2) {
        this.y = this.floory;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 0;
        this.jumptimer = 10;
      }
      if (this.jumpcon === 3 && this.y >= this.floory - 2) {
        this.y = this.floory;
        this.x = this.xstart;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 4;
      }
      if (this.jumpcon === 0) {
        this.jumptimer += 1;
        if (this.jumptimer >= 16) {
          this.floory = this.y;
          this.jumptimer = 0;
          this.jumpcon = 1;
          this.sprite_index = "spr_checkers_leap";
          this.targetx = Km + 8 - this.sprite_width / 2;
          this.vspeed = -12;
          this.gravity = 1;
          this.hspeed = (this.targetx - this.x) / 24;
          this.amt += 1;
          if (this.amt >= 4) {
            this.active = 0;
            this.jumpcon = 3;
            this.jumptimer = 0;
            this.targetx = this.xstart;
            this.gravity = 2;
            this.hspeed = (this.targetx - this.x) / 12;
          }
        }
      }
      if (this.jumpcon === 4) {
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          kU.turntimer = -1;
          Kf();
          this.instance_destroy();
        }
      }
    }
    if (this.grazed === 1) {
      this.grazetimer += 1;
      if (this.grazetimer >= 10) {
        this.grazetimer = 0;
        this.grazed = 0;
      }
    }
  }
};
kI(Wv, "obj_checkers_leap");
Y1(Wv, "kinds", kh("obj_checkers_leap", k6));
Y1(Wv, "defaultDepth", 1);
Y1(Wv, "defaultSprite", "spr_checkers_idle");
var Wj = Wv;
var WG = class lk extends k8 {
  create() {
    let Kw = kp.first("obj_heart");
    Object.assign(this, {
      con: 0,
      htimer: 0,
      image_xscale: 4,
      image_yscale: 4,
      active: 0,
      image_alpha: 0,
      image_angle: -90,
      joker: 0,
      damage: 100,
      grazed: 0,
      grazepoints: 5,
      timepoints: 0,
      inv: 60,
      grazetimer: 0,
      spinmax: 0,
      hmax: 0,
      type: 0,
      target: 0,
    });
    this.x = (Kw ? Kw.x : 320) + 8;
    this.y = (Kw ? Kw.y : 170) + 8;
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
      if (this.htimer >= 25 && kU.turntimer >= 0) {
        kU.turntimer = -2;
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
        this.spinmax = kV(26.25, 30, 33.75, 37.5);
        if (this.joker === 1) {
          this.spinmax = 15 + kn(15);
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
kI(WG, "obj_spinheart");
Y1(WG, "kinds", kh("obj_spinheart", k8));
Y1(WG, "defaultDepth", 0);
Y1(WG, "defaultSprite", "spr_spinheart");
Y1(WG, "defaultMask", "spr_spinheartmask");
var WD = WG;
var Wg = class lY extends ku {
  create() {
    this.type = 0;
    this.con = 1;
    this.subcon = 0;
    this.secondtime = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.windsound = 0;
    this.crown = null;
    this.maxy = 0;
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.con += 1;
    }
  }
  step() {
    if (this.type !== 1) {
      return;
    }
    let Kw = this.crown;
    if (this.con === 1) {
      this.image_speed = 0;
      this.image_index = 0;
      this.crown = kg(this.x + 24, this.y + 10, kb);
      this.crown.image_xscale = 2;
      this.crown.image_yscale = 2;
      this.crown.sprite_index = "spr_smallchecker_crown";
      this.crown.depth = this.depth - 1;
      this.sprite_index = "spr_smallchecker_transform3";
      this.con = 0.4;
      this.windsound = 0;
      this.alarm[4] = 30;
    }
    if (this.con === 1.4) {
      if (this.windsound === 0) {
        kQ("snd_whistlebreath");
        this.windsound = 1;
      }
      if (this.secondtime === 0) {
        Kw.hspeed += 0.2;
      } else {
        Kw.hspeed += 0.4;
      }
      if (Kw.hspeed >= 3) {
        this.con = 1.5;
      }
    }
    if (this.con === 1.5) {
      Kw.maxy = this.y + this.sprite_height;
      Kw.image_angle = -45;
      Kw.y -= 10;
      Kw.gravity = 0.5;
      Kw.hspeed = 5;
      Kw.friction = 0.2;
      this.con = 1.6;
    }
    if (this.con === 1.6 && Kw.y >= Kw.maxy - Kw.sprite_height - 10) {
      Kw.y += 10;
      Kw.image_angle = 0;
      Kw.gravity = 0;
      Kw.vspeed = 0;
      Kw.friction = 0;
      Kw.hspeed = 1;
      this.con = 0.9;
      this.alarm[4] = 30;
      if (this.secondtime === 1) {
        this.alarm[4] = 10;
      }
    }
    if (this.con === 1.9) {
      this.image_speed = 0.25;
      kQ("snd_crownshrink");
      this.con = 2.1;
    }
    if (this.con === 2.1) {
      this.image_speed += 0.01;
      if (this.secondtime === 1) {
        this.image_speed += 0.01;
      }
      if (this.image_speed >= 0.4) {
        this.image_index = 1;
        this.image_speed = 0;
        this.con = 3;
        this.maxy = this.y + this.sprite_height - 30;
        this.alarm[4] = 30;
        if (this.secondtime === 1) {
          this.alarm[4] = 10;
        }
      }
    }
    if (this.con === 4) {
      this.x += 40;
      this.y += 46;
      this.sprite_index = "spr_smallchecker_legtuck";
      this.image_index = 0;
      this.image_speed = 0.25;
      this.vspeed = -3;
      this.gravity = 1;
      if (this.secondtime === 1) {
        this.vspeed = -6;
        this.gravity = 2;
        this.image_speed = 0.5;
      }
      this.con = 5;
    }
    if (this.con === 5) {
      if (this.image_index >= 2) {
        this.image_speed = 0;
      }
      if (this.y >= this.maxy - 4) {
        this.y = this.maxy;
        this.gravity = 0;
        this.vspeed = 0;
        this.con = 6;
        this.alarm[4] = 30;
        if (this.secondtime === 1) {
          this.alarm[4] = 10;
        }
      }
    }
    if (this.con === 7) {
      this.image_angle -= 5;
      this.hspeed = 3;
      if (this.secondtime === 1) {
        this.hspeed = 6;
        this.image_angle -= 5;
      }
      if (this.x >= WP + 720) {
        this.con = 8;
        kU.monster[0] = 0;
        kU.monster[1] = 0;
        kU.monster[2] = 0;
        g();
        kp.with("obj_monsterparent", (KC) => KC.instance_destroy());
        this.instance_destroy();
      }
    }
  }
};
kI(Wg, "obj_checker_animtest");
Y1(Wg, "kinds", kh("obj_checker_animtest", ku));
Y1(Wg, "defaultDepth", 0);
Y1(Wg, "defaultSprite", "spr_smallchecker_idle");
var WI = Wg;
var b0 = class lW extends ku {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_speed = 0.2;
    this.good = 1;
    this.offing = 0;
    if (kp.number("obj_throwtarget") === 1) {
      let Kw = kg(this.x, this.y, lW);
      Kw.depth = this.depth + 1;
      Kw.offing = 0;
      Kw.good = 0;
      Kw.sprite_index = "spr_checkers_idle_crownless";
    }
    this.con = 0;
  }
  step() {
    if (this.con === 1) {
      this.image_angle += 10;
    }
    if (this.con === 5) {
      if (this.x < this.xstart + 40) {
        this.x += 10;
      }
      this.con = 6;
    }
    if (this.con === 6 && this.x > this.xstart) {
      this.x -= 2;
    }
    if (this.con === 7) {
      if (this.x < this.xstart + 40) {
        this.x += 8;
      }
      this.con = 6;
    }
  }
};
kI(b0, "obj_throwtarget");
Y1(b0, "kinds", kh("obj_throwtarget", ku));
Y1(b0, "defaultDepth", 4);
Y1(b0, "defaultSprite", "spr_checkers_crown");
var b1 = b0;
var b2 = class lb extends ku {
  create() {
    this.con = 0;
    this.yy = WR;
    this.xx = WP;
    this.timer = 0;
    this.collided = 0;
    this.mypower = 10;
  }
  step() {
    let Kw = kp.first("obj_heroralsei");
    let KC = Kw ? Kw.y : 180;
    let KJ = Kw ? Kw.x : 80;
    if (this.con === 0 || this.con === 2) {
      this.image_angle = this.direction;
    }
    if ((this.x > this.xx + 700 || this.y < this.yy - 40) && this.con === 0) {
      this.gravity = 0;
      this.speed = 0;
      this.x = this.xx - 40;
      this.y = KC;
      this.sprite_index = "spr_ralseib_idle";
      this.image_angle = 0;
      this.hspeed = 20;
      this.con = 10;
    }
    if (this.con === 10) {
      this.timer += 1;
      if (this.x >= KJ - 10) {
        if (this.collided === 0) {
          kU.msg = new Array(100).fill(" ");
          kU.msg[0] = "* Missed!/%";
          kY();
        }
        kp.with("obj_heroralsei", (KT) => {
          KT.visible = true;
        });
        kp.with("obj_herosusie", (KT) => {
          KT.visible = true;
        });
        kp.with("obj_checkers_enemy", (KT) => {
          KT.actcon = 1;
          KT.visible = true;
        });
        kp.with("obj_throwtarget", (KT) => KT.instance_destroy());
        kp.with("obj_throwralsei", (KT) => KT.instance_destroy());
        this.instance_destroy();
      }
    }
    if (this.con === 2 && (this.x < this.xx - 40 || this.y > this.yy + 520)) {
      this.timer = 0;
      this.gravity = 0;
      this.speed = 0;
      this.x = this.xx - 40;
      this.y = KC;
      this.sprite_index = "spr_ralseib_idle";
      this.image_angle = 0;
      this.hspeed = 20;
      this.con = 10;
    }
  }
  endStep() {
    if (!this.destroyed) {
      for (let Kw of kp.all("obj_throwtarget")) {
        if (kZ(this, Kw)) {
          this.hitTarget(Kw);
        }
      }
    }
  }
  hitTarget(Kw) {
    if (this.collided === 0) {
      kU.msg = new Array(100).fill(" ");
      if (Kw.good === 1) {
        kp.with("obj_checkers_enemy", (KC) => {
          KC.crown += 35;
        });
        kU.msg[0] = "* The crown greatly loosened!/%";
        kQ("snd_coin");
        if (Kw.offing === 1) {
          Kw.con = 1;
          Kw.vspeed = -8;
        } else {
          Kw.con = 5;
        }
      } else {
        kQ("snd_noise");
        Kw.con = 7;
        kp.with("obj_checkers_enemy", (KC) => {
          KC.crown += 20;
        });
        kU.msg[0] = "* The crown loosened a little!/%";
        this.hspeed = -12;
        this.vspeed = -4;
        this.gravity = 0.5;
        this.con = 2;
      }
      kY();
      this.collided = 1;
    }
  }
};
kI(b2, "obj_ralseithrown");
Y1(b2, "kinds", kh("obj_ralseithrown", ku));
Y1(b2, "defaultDepth", 1);
Y1(b2, "defaultSprite", "spr_ralsei_thrown");
var b3 = b2;
var b4 = class lK extends ku {
  create() {
    Object.assign(this, {
      angle: 0,
      throwcon: 1,
      angledraw: 1,
      image_xscale: 2,
      image_yscale: 2,
      radius: 300,
      anglespeed: 2,
      ralspeed: 26,
      ralgrav: 1,
      fro: 0,
      mypower: 15,
      maxpower: 30,
      minpower: 15,
      powerdir: 1,
      powerspeed: 0.6,
      throwready: 0,
      throwalpha: 0,
      activatethrow: 0,
      lx: 0,
      ly: 0,
    });
    this.rx = this.x + 70;
    this.ry = this.y + 30;
    this.ralyoff = new Array(42).fill(0);
  }
  step() {
    if (this.throwcon === 1) {
      if (this.throwready === 0) {
        this.angle += this.anglespeed;
      }
      if (this.angle >= 30) {
        this.anglespeed = -2;
      }
      if (this.angle <= -15) {
        this.anglespeed = 2;
      }
      if (kL() && this.throwalpha >= 0.9 && this.throwready === 1) {
        this.activatethrow = 1;
        WV();
      }
      if (kL() && this.throwready === 0) {
        this.throwready = 1;
        WV();
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* Press " + Wu(6) + " to determine the POWER!";
        kY();
      }
      if (this.activatethrow === 1) {
        this.activatethrow = 0;
        this.throwready = 0;
        this.image_index = 0;
        this.image_speed = 0.5;
        this.sprite_index = "spr_susieb_attack_unarmed";
        this.angledraw = 0;
        this.throwcon = 2;
        kQ("snd_ultraswing");
        let Kw = kg(this.rx, this.ry, b3);
        Kw.speed = this.mypower;
        Kw.mypower = this.mypower;
        Kw.image_xscale = 2;
        Kw.image_yscale = 2;
        Kw.direction = this.angle;
        Kw.image_angle = this.angle;
        Kw.gravity = this.ralgrav;
      }
      if (this.throwready === 1) {
        this.mypower += this.powerdir * this.powerspeed;
        if (this.mypower >= this.maxpower) {
          this.powerdir = -1;
        }
        if (this.mypower <= this.minpower) {
          this.powerdir = 1;
        }
      }
    }
    if (this.throwcon === 2 && this.image_index >= 5) {
      this.image_speed = 0;
    }
    if (this.angledraw === 1) {
      this.lx = ko(this.mypower, this.angle);
      this.ly = kd(this.mypower, this.angle);
      for (let KC = 0; KC < 42; KC += 1) {
        let KJ = this.ralgrav + this.ralgrav * KC;
        if (KC > 0) {
          this.ralyoff[KC] = this.ralyoff[KC - 1] + KJ;
        } else {
          this.ralyoff[0] = KJ;
        }
      }
    }
  }
  draw(Kw) {
    this.draw_self(Kw);
    if (this.angledraw === 1) {
      let KC = this.rx;
      let KJ = this.ry;
      let KT = this.lx;
      let Km = this.ly;
      let KM = this.fro;
      let Kf = this.ralyoff;
      if (this.throwready === 1) {
        if (this.throwalpha < 1) {
          this.throwalpha += 0.125;
        }
        Kw.draw_set_alpha(this.throwalpha);
        Kw.draw_set_color(kP(kF.blue, kF.white, 0.5));
        for (let Kr = 0; Kr < 12; Kr += 1) {
          Kw.draw_circle(
            KC + KT * (Kr * 2 + KM),
            KJ + Km * (Kr * 2 + KM) + Kf[Kr * 2 + KM] - 20,
            4,
            false,
          );
          Kw.draw_line_width(
            KC + KT * (Kr * 2 + KM),
            KJ + Km * (Kr * 2 + KM) + Kf[Kr * 2 + KM] - 20,
            KC + KT * ((Kr + 1) * 2 + KM),
            KJ + Km * ((Kr + 1) * 2 + KM) + Kf[(Kr + 1) * 2 + KM] - 20,
            2,
          );
          Kw.draw_sprite_ext("spr_throwarrow", 0, KC, KJ - 20, 2, 2, this.angle, kF.red, 1);
        }
        Kw.draw_set_alpha(1);
      }
      if (this.throwready === 0) {
        Kw.draw_set_color(kF.red);
        Kw.draw_sprite_ext("spr_throwarrow", 0, KC, KJ - 20, 2, 2, this.angle, kF.white, 1);
      }
    }
  }
};
kI(b4, "obj_throwralsei");
Y1(b4, "kinds", kh("obj_throwralsei", ku));
Y1(b4, "defaultDepth", 0);
Y1(b4, "defaultSprite", "spr_susieb_throwralseiready");
var b5 = b4;
var b6 = class ll extends k3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 5,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
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
      checked: 0,
      crown: 0,
      attacktype: 0,
      thrown: 0,
      thissprite: "spr_checkers_idle",
      scon: 0,
      secondtime: 0,
      bowcounter: 0,
      ralsei_lecture: 0,
      milk_counter: 0,
      rtimer: 0,
      milkmax: 1000,
      milktimer: 0,
      milk: null,
      bowkris: null,
      bowral: null,
      bowcheck: null,
      trsus: null,
      throwsus: null,
      animtest: null,
    });
  }
  userEvent(Kw) {
    if (Kw === 12) {
      kU.monsterx[this.myself] = this.x + this.sprite_width / 4;
      kU.monstery[this.myself] = this.y + this.sprite_height / 4;
      return;
    }
    if (Kw !== 11) {
      super.userEvent(Kw);
    }
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let Kw = this.myself;
    if (kU.monstertype[Kw] === 21) {
      this.secondtime = 1;
    }
    if (kU.monster[Kw] === 1) {
      kU.flag[51 + Kw] = 4;
      if (this.secondtime === 1) {
        this.milk_counter = 99;
      }
      if (this.secondtime === 1) {
        this.ralsei_lecture = 99;
      }
      if (kU.mnfight === 1 && this.talked === 0) {
        kr(this);
        if (!kp.exists("obj_darkener")) {
          kg(0, 0, kT);
        }
        this.milkmax = 1000;
        if (this.milk_counter > 0) {
          this.milkmax = 600;
        }
        if (kU.monsterhp[Kw] > this.milkmax) {
          if (!kp.exists("obj_moveheart") && !kp.exists("obj_heart")) {
            kJ();
          }
          if (!kp.exists("obj_growtangle")) {
            kg(WP + 320, WR + 170, kw);
          }
        }
        kU.mnfight = 2;
        this.rtimer = 0;
        kU.typer = 50;
        this.talked = 2;
        this.attacked = 0;
        this.talktimer = 0;
      }
      if (this.talked === 2) {
        kU.mnfight = 2;
      }
      if (kU.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.talked = 0;
          this.milkmax = 1000;
          if (this.milk_counter > 0) {
            this.milkmax = 600;
          }
          if (kU.monsterhp[Kw] <= this.milkmax) {
            if (this.scon === 0) {
              this.scon = 1;
            }
          } else {
            if (!kp.exists("obj_checkers_leap")) {
              let KC = 0;
              if (this.attacktype === 0) {
                KC = 0;
              }
              if (this.attacktype === 1) {
                KC = 3;
              }
              if (this.attacktype === 2) {
                KC = 1;
              }
              if (this.attacktype === 3) {
                KC = 2;
              }
              let KJ = kg(this.x, this.y, Wj);
              KJ.leapmode = KC;
              KJ.target = this.mytarget;
              KJ.damage = kU.monsterat[Kw] * 5;
              this.attacktype += 1;
              if (this.attacktype > 3) {
                this.attacktype = 0;
              }
            }
            this.siner = 0;
            this.visible = false;
            this.turns += 1;
          }
          kU.turntimer = 999;
          this.attacked = 1;
          kU.typer = 6;
          kU.fc = 0;
          kV(0);
          kU.battlemsg[0] = "* K.Round shuffles furiously.";
          if (kU.monsterstatus[Kw] === 1) {
            kU.battlemsg[0] = "* K.Round looks weak.";
          }
          if (kU.monsterhp[Kw] <= kU.monstermaxhp[Kw] / 3) {
            kU.battlemsg[0] = "* K.Round's shuffle becomes lethargic.";
          }
          if (this.crown > 0) {
            kU.battlemsg[0] = WN("* The crown is \\cY~1-percent\\cW loose!", String(this.crown));
          }
        } else {
          kU.turntimer = 120;
        }
      }
      if (kU.mnfight === 2 && kU.turntimer <= 1) {
        if (this.battlecancel === 1) {
          kU.mercymod[Kw] = 999;
        }
        if (this.battlecancel === 2) {
          kp.with("obj_battlecontroller", (KT) => {
            KT.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (this.scon === 1) {
      if (this.milk_counter > 0) {
        this.scon = 1.5;
      } else {
        WV();
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* K. ROUND felt stressed out and attacked!/%";
        kY();
        this.scon = 1.5;
      }
    }
    if (this.scon === 1.5 && !Wn()) {
      kQ("snd_magicsprinkle");
      WV();
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* K. ROUND practiced self-care!";
      kU.turntimer = 999;
      kY();
      this.milk = kH(this.x - 100, this.y + 60, "spr_checkers_milk");
      this.milk.image_speed = 0;
      this.milk.image_xscale = 4;
      this.milk.image_yscale = 4;
      this.milk.image_alpha = 0;
      this.milk.depth = this.depth - 1;
      this.scon = 2;
      this.milktimer = 0;
    }
    if (this.scon === 2) {
      let KT = this.milk;
      KT.image_xscale -= 0.2;
      KT.image_yscale -= 0.2;
      KT.image_alpha += 0.1;
      this.milktimer += 1;
      if (this.milktimer >= 10) {
        this.scon = 3;
        this.milktimer = 0;
        KT.image_alpha = 1.4;
      }
    }
    if (this.scon === 3) {
      this.milktimer += 1;
      if (this.milktimer >= 25) {
        this.scon = 4;
        this.milktimer = 0;
      }
    }
    if (this.scon === 4) {
      let Km = this.milk;
      Km.hspeed += 2;
      Km.image_alpha -= 0.1;
      this.milktimer += 1;
      if (this.milktimer === 10) {
        if (kU.monsterat[Kw] < 10) {
          kU.monsterat[Kw] += 0.5;
        }
        kQ("snd_power");
        let KM = 700;
        if (this.milk_counter === 0) {
          KM = 300;
        }
        kU.monsterhp[Kw] += KM;
        let Kf = kg(kU.monsterx[Kw], kU.monstery[Kw], k1);
        Kf.delay = 8;
        Kf.type = 3;
        Kf.damage = 700;
        Kf.damage = KM;
        let Kr = kg(this.x, this.y, k2);
        Kr.target = this;
      }
      if (this.milktimer >= 15) {
        Km.instance_destroy();
        this.scon = 5;
        this.milktimer = 0;
      }
    }
    if (this.scon === 5) {
      this.milktimer += 1;
      if (this.milktimer >= 30) {
        if (this.milk_counter > 0) {
          WV();
          this.scon = 0;
          this.milktimer = 0;
          kU.turntimer = 0;
        } else {
          WV();
          this.scon = 6;
          WL(
            "* K. ROUND's HP and ATTACK went up!/",
            Wc(3),
            "* Susie^1! Stop attacking it^1! You're making it stronger!/",
            Wh(3),
            "* Pssh^1, and let it think I'm AFRAID^1? No way!/%",
          );
          kY();
        }
        this.milk_counter += 1;
      }
    }
    if (this.scon === 6) {
      if (Wn()) {
        kU.turntimer = 999;
      } else {
        kU.fc = 0;
        this.scon = 0;
        this.milktimer = 0;
        kU.turntimer = 0;
      }
    }
    if (kU.myfight === 3) {
      this.actStep();
    }
    if (kU.myfight === 7) {
      this.hspeed = 15;
    }
  }
  actStep() {
    let Kw = this.myself;
    let KC = () => kp.first("obj_herokris");
    let KJ = () => kp.first("obj_herosusie");
    let KT = () => kp.first("obj_heroralsei");
    let Km = (KM, Kf) =>
      kp.with(KM, (Kr) => {
        Kr.visible = Kf;
      });
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      kU.msg = new Array(100).fill(" ");
      if (this.secondtime === 0) {
        kU.msg[0] = "* K.ROUND - AT 9 DF 3&* Check^1?&* That's chess^1, not checkers!/%";
        kU.actname[Kw][0] = "Checkers";
        kU.flag[246] = 1;
        if (this.checked === 1) {
          kU.msg[0] = "* K.ROUND - AT 9 DF 3&* That's better./%";
        }
        this.checked = 1;
      } else {
        if (kU.flag[246] === 1) {
          kU.msg[0] = "* K.ROUND - AT 9 DF 3&* Watch out for its Flying King attack!/";
          kU.msg[1] = "* (Also^1, you need to get the CROWN off of its head.)/%";
        } else {
          kU.msg[0] = "* K.ROUND - AT 9 DF 3&* It's being controlled into attacking...!/";
          kU.msg[1] = "* (Though^1, wouldn't it just attack anyway...?)/%";
        }
        this.checked = 1;
      }
      kY();
    }
    if (this.acting === 2 && this.actcon === 0) {
      if (this.secondtime === 0) {
        this.crown += 15;
      }
      if (this.secondtime === 1) {
        this.crown += 18;
      }
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* You bowed to K. ROUND./%";
      Km("obj_herokris", false);
      kU.faceaction[0] = 0;
      kU.charaction[0] = 0;
      let KM = KC();
      this.bowkris = kH(KM ? KM.x : 80, KM ? KM.y : 100, "spr_krisb_bow");
      Wp(this.bowkris);
      let Kf = kl(this.bowkris);
      Kf.hspeed = 5;
      Kf.depth = this.bowkris.depth + 1;
      kQ("snd_item");
      kY();
      this.actcon = 20;
    }
    if (this.actcon === 20 && !Wn()) {
      this.visible = false;
      this.bowcheck = kH(this.x, this.y, "spr_checkers_bow");
      this.bowcheck.image_speed = 0.334;
      kU.fc = 0;
      kU.typer = 4;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* It bowed back^1.&* Its crown loosened a little./%";
      if (this.ralsei_lecture === 0 && this.secondtime === 0) {
        WL(
          "* It bowed back^1.&* Its crown loosened a little./",
          Wc(0),
          "* That's it^1, Kris^1! If we can get its crown off.../",
          "\\E8* It should turn back into a little guy...!/",
          "\\E0* Susie^1! Help us bow at it!/",
          Wh(0),
          "* Nah^1, it's crown'll come off.../",
          "\\E4* When I smash this guy into the GROUND!/",
          Wc(1),
          "* .../%",
        );
        this.ralsei_lecture = 1;
      }
      if (this.thrown === 0 && this.secondtime === 1) {
        if (this.bowcounter === 0) {
          kU.fc = 2;
          kU.fe = 3;
          kU.typer = 45;
          WL(
            "* Huh!? That hardly did anything!/",
            "\\E1* How can we push off that CROWN...?/",
            Wh(1),
            "* ... Hmm./%",
          );
        }
        if (this.bowcounter === 1) {
          kU.fc = 2;
          kU.fe = 3;
          kU.typer = 45;
          WL(
            "* It's still hardly working!/",
            "\\E6* Whatever can we do^1, Kris...?/",
            Wh(2),
            "* ... Hey./%",
          );
        }
        if (this.bowcounter === 2) {
          kU.fc = 2;
          kU.fe = 8;
          kU.typer = 45;
          WL(
            "* Sometimes persistence is key^1, Kris!!/",
            "\\E6* It'll be hard^1, but we can do it!!/",
            Wh(7),
            "* HEY YOU GUYS!!!/%",
          );
        }
      }
      this.bowcounter += 1;
      kk();
      this.actcon = 21;
    }
    if (this.actcon === 21 && !Wn()) {
      if (this.bowkris) {
        this.bowkris.instance_destroy();
      }
      if (this.bowcheck) {
        this.bowcheck.instance_destroy();
      }
      this.visible = true;
      Km("obj_herokris", true);
      this.actcon = 1;
    }
    if (this.secondtime === 0 && this.acting === 3 && this.actcon === 0) {
      this.crown += 20;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* You and Ralsei bowed./%";
      Km("obj_herokris", false);
      Km("obj_heroralsei", false);
      kU.faceaction[0] = 0;
      kU.charaction[0] = 0;
      kU.faceaction[1] = 0;
      kU.charaction[1] = 0;
      let Kr = KC();
      let KS = KT();
      this.bowkris = kH(Kr ? Kr.x : 80, Kr ? Kr.y : 100, "spr_krisb_bow");
      Wp(this.bowkris);
      let KU = kl(this.bowkris);
      KU.hspeed = 5;
      KU.depth = this.bowkris.depth + 1;
      this.bowral = kH(KS ? KS.x : 80, KS ? KS.y : 180, "spr_ralseib_bow");
      Wp(this.bowral);
      KU = kl(this.bowral);
      KU.hspeed = 5;
      KU.depth = this.bowral.depth + 1;
      kQ("snd_item");
      kY();
      this.actcon = 30;
    }
    if (this.actcon === 30 && !Wn()) {
      this.visible = false;
      this.bowcheck = kH(this.x, this.y, "spr_checkers_bow");
      this.bowcheck.image_speed = 0.5;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* K. ROUND bowed back^1.&* Its crown loosened!/%";
      if (this.ralsei_lecture === 0 && this.secondtime === 0) {
        WL(
          "* K. ROUND bowed back^1.&* Its crown loosened!/",
          Wc(0),
          "* That's it^1, Kris^1! If we can get its crown off.../",
          "\\E8* It should turn back into a little guy...!/",
          "\\E0* Susie^1! Help us bow at it!/",
          Wh(0),
          "* Nah^1, its crown'll come off.../",
          "\\E4* When I smash this guy to the GROUND!/",
          Wc(1),
          "* .../%",
        );
        this.ralsei_lecture = 1;
      }
      kY();
      this.actcon = 31;
    }
    if (this.actcon === 31 && !Wn()) {
      if (this.bowral) {
        this.bowral.instance_destroy();
      }
      if (this.bowkris) {
        this.bowkris.instance_destroy();
      }
      if (this.bowcheck) {
        this.bowcheck.instance_destroy();
      }
      this.visible = true;
      Km("obj_heroralsei", true);
      Km("obj_herokris", true);
      this.actcon = 1;
    }
    if (this.secondtime === 1 && this.acting === 3 && this.actcon === 0) {
      if (this.thrown === 1) {
        if (this.trsus) {
          this.trsus.instance_destroy();
        }
        this.thrown = 2;
      }
      if (this.thrown > 0) {
        kU.actname[Kw][2] = "Throw";
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* Press " + Wu(6) + " to determine the ANGLE!";
        this.flash = 0;
        this.becomeflash = 0;
        kY();
        this.actcon = 90;
        kg(this.x, this.y, b1);
        let Ky = KJ();
        this.throwsus = kg(Ky ? Ky.x : 90, Ky ? Ky.y : 130, b5);
        this.visible = false;
        kU.faceaction[1] = 0;
        kU.charaction[1] = 0;
        kU.faceaction[2] = 0;
        kU.charaction[2] = 0;
        Km("obj_herosusie", false);
        Km("obj_heroralsei", false);
        kQ("snd_grab");
      } else {
        kU.typer = 31;
        kU.fc = 2;
        kU.fe = 6;
        WL(
          "* Susie^1? You want to ACT^1? Aww, what's your idea?/",
          Wh(0),
          "* Umm..^1. well..^1. how do I say this./",
          "* I kind of..^1.&* Need you for this one./",
          Wc(8),
          "* That's fine^1, Susie^1!&* I'll help!/",
          "\\E0* You want to apologize to it for earlier^1, right?/",
          Wh(2),
          "* Nah^1, I just need you to stay still./%",
        );
        this.actcon = 10;
        kk();
      }
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* You explained to K. Round about the importance of dodging Susie's attacks./";
      kU.msg[1] = "* But it didn't seem to understand.../%";
      if (this.warned === 1) {
        kU.msg[0] = "* You started making siren noises with your mouth and looking at Susie./";
        kU.msg[1] = "* K. Round still didn't understand.../%";
      }
      if (this.warned === 2) {
        kU.msg[0] = "* You started explaining that Susie is really dangerous and strong./";
        kU.msg[1] = "* Susie got a large boost to her morale./";
        kU.msg[2] = "* Susie's ATTACK went up massively...!/%";
        kU.battleat[2] *= 1.5;
      }
      this.warned += 1;
      kY();
    }
    if (this.actcon === 1 && !Wn()) {
      this.actcon = 0;
      if (this.crown >= 100) {
        kU.mercymod[Kw] = 999;
        this.actcon = 50;
      } else {
        g();
      }
    }
    if (this.actcon === 10 && !Wn()) {
      this.actcon = 11;
      this.alarm[4] = 30;
      Km("obj_herosusie", false);
      Km("obj_heroralsei", false);
      this.thrown = 1;
      let KB = KJ();
      this.trsus = kH(KB ? KB.x : 90, KB ? KB.y : 130, "spr_susieb_throwralseiready");
      kQ("snd_grab");
    }
    if (this.actcon === 12) {
      kU.fe = 7;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* Kris^1! We gotta get that CROWN off its head!/";
      kU.msg[1] = "* Help me throw Ralsei at it!/%";
      kk();
      this.actcon = 13;
    }
    if (this.actcon === 13 && !Wn()) {
      this.actcon = 0;
    }
    if (this.actcon === 50) {
      this.visible = false;
      this.animtest = kg(this.x, this.y, WI);
      this.animtest.sprite_index = "spr_smallchecker_transform3";
      this.animtest.image_xscale = 2;
      this.animtest.image_yscale = 2;
      this.animtest.type = 1;
      this.animtest.secondtime = this.secondtime;
      this.actcon = 51;
    }
  }
  draw(Kw) {
    let KC = this.myself;
    if (this.state === 3) {
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (kU.monster[KC] === 0) {
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        this.siner = 0;
        Kw.draw_sprite_ext(
          "spr_checkers_idle",
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
      this.thissprite = "spr_checkers_idle";
      if (kU.mercymod[KC] >= kU.mercymax[KC]) {
        this.thissprite = "spr_checkers_idle";
      }
      Kw.draw_sprite_ext(
        this.thissprite,
        this.siner / 3,
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
        Kw.draw_sprite_white(
          this.thissprite,
          this.siner / 3,
          this.x,
          this.y,
          2,
          2,
          0,
          -kD(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
    this.sprite_index = this.thissprite;
    this.image_index = this.siner / 3;
  }
};
kI(b6, "obj_checkers_enemy");
Y1(b6, "kinds", kh("obj_checkers_enemy", k3));
Y1(b6, "defaultDepth", 90);
Y1(b6, "defaultSprite", "spr_checkers_idle");
var b7 = b6;
var b8 = class lH extends k3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 5,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
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
      thissprite: "spr_smallchecker_idle",
    });
    this.checkhp1 = kU.hp[1];
    this.checkhp2 = kU.hp[2];
    this.firstturn = 0;
  }
  userEvent(Kw) {
    if (Kw === 12) {
      kU.monsterx[this.myself] = this.x + this.sprite_width / 2;
      kU.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    super.userEvent(Kw);
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let Kw = this.myself;
    let KC = kp.first("obj_basicattack");
    if (KC) {
      if (KC.sprite_index === "spr_attack_cut1") {
        kU.flag[211] = 3;
      }
      if (KC.sprite_index === "spr_attack_slap1") {
        kU.flag[211] = 3;
      }
    }
    if (kU.monster[Kw] === 1) {
      kU.flag[51 + Kw] = 4;
      if (kU.mnfight === 1 && this.talked === 0) {
        kr(this);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && kU.mnfight === 1) {
        this.rtimer = 0;
        if (kR() && this.talktimer > 5) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          kU.mnfight = 2;
        }
      }
      if (kU.mnfight === 2 && this.attacked === 0) {
        kp.with("obj_heartblcon", (KJ) => KJ.instance_destroy());
        this.rtimer += 1;
        if (this.rtimer === 12) {
          let KJ = kM();
          kU.turntimer = 1;
          if (KJ === 999) {
            let KT = kg(this.x, this.y, WD);
            KT.type = 0;
            KT.target = this.mytarget;
            KT.damage = kU.monsterat[Kw] * 5;
          }
          this.turns += 1;
          this.attacked = 1;
          kU.typer = 6;
          kU.fc = 0;
          KJ = kV(0);
          if (KJ === 0) {
            kU.battlemsg[0] = "* C.Round continues to act extremely violent.";
          }
        } else {
          kU.turntimer = 1;
        }
      }
      if (kU.mnfight === 2 && kU.turntimer <= 1) {
        if (
          kp.exists("obj_hathyfightevent") &&
          this.firstturn === 0 &&
          this.checkhp1 <= kU.hp[1] &&
          this.checkhp2 <= kU.hp[2]
        ) {
          kp.with("obj_battlecontroller", (Km) => {
            Km.noreturn = 1;
          });
          kp.with("obj_hathyfightevent", (Km) => {
            Km.con = 15;
          });
        }
        this.firstturn = 1;
        if (this.battlecancel === 1) {
          kU.mercymod[Kw] = 999;
        }
      }
    }
    if (kU.myfight === 3) {
      this.actStep();
    }
    if (kU.myfight === 7) {
      this.hspeed = 15;
    }
  }
  actStep() {
    let Kw = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] =
        "* C.ROUND - AT 1 DF 0&* Despite appearances^1, it's trying its best to defeat you./%";
      kY();
    }
    if (this.acting === 2 && this.actcon === 0) {
      WL(
        "* You ordered Susie to flatter the enemy!/",
        Wh(0),
        "* ... what^1? Why the HELL would I do that?/",
        "\\E1* IT attacked US^1.&* Let's smash it before it moves./",
        Wc(0),
        "* Aww^1, look^1, Susie^1!&* It seems harmless!/",
        "\\E8* If you act nice^1, we might win without hurting it!/",
        Wh(0),
        "* .../",
        "\\E2* ... okay^1, okay./",
        "\\E1* Hey^1, little guy./",
        "\\E4* I really like the ax in your face./%",
      );
      this.actcon = 5;
      kY();
    }
    if (this.acting === 3 && this.actcon === 0) {
      this.actcon = 5;
      WL(
        "* You warned C.Round about Susie^1.&* It seems barely cognizant of what that means./",
        Wh(0),
        "* Hey^1, wait^1.&* Why the hell are you giving the ENEMY advice?/",
        Wc(6),
        "* Umm^1, so we don't accidentally hurt it...?/",
        Wh(0),
        "\\E0* .../",
        "\\E8* HURTING IT's the point^1, you MORON./",
        "\\E1* It attacked us^1.&* So it dies^1.&* Simple^1, right?/",
        Wc(8),
        "* B-but Susie^1, what if the enemy might be^1, um^1, nice?/",
        Wh(0),
        "* .../",
        "\\E2* Okay^1, yeah^1, there's a word for that./",
        Wc(0),
        "* Oh^1?&* What is it?/",
        Wh(4),
        "\\E4* Striking first./%",
      );
      kU.monstercomment[Kw] = "(Warned)";
      kU.automiss[0] = 1;
      kY();
    }
    if (this.actcon === 1 && !Wn()) {
      this.actcon = 0;
      g();
    }
    if (this.actcon === 5 && !Wn()) {
      kU.battleat[1] = 90;
      kU.battleat[2] = 90;
      this.actcon = 6;
      kp.with("obj_herosusie", (KC) => {
        KC.attacktimer = 0;
        KC.state = 1;
        KC.points = 100 + kO(kn(40));
        kU.faceaction[KC.myself] = 0;
        if (kU.automiss[0] === 1) {
          KC.points = 0;
        }
      });
      if (kU.automiss[0] === 1) {
        this.hspeed = 5;
        kU.mercymod[Kw] = 200;
      }
      this.alarm[4] = 50;
    }
    if (this.actcon === 7) {
      kU.monster[Kw] = 0;
      WL(
        "* Where'd you get it^1?&* Heh heh heh heh./",
        Wc(3),
        "* (Umm^1, Kris^1, maybe I should talk to her...)/%",
      );
      kU.flag[211] = 1;
      if (kU.automiss[0] === 1) {
        kU.flag[211] = 2;
        WL(
          "\\E7* Urgh^1, you IDIOTS^1!&* It got away!/",
          Wc(3),
          "* (Wow^1, that was close^1, Kris...)/",
          "* (M-maybe I should talk to her...)/%",
        );
      }
      kk();
      this.actcon = 1;
    }
  }
  draw(Kw) {
    let KC = this.myself;
    if (this.state === 3) {
      if (kU.monsterhp[KC] <= kU.monstermaxhp[KC] / 3) {
        kU.monsterstatus[KC] = 1;
        if (kU.monstercomment[KC] === " ") {
          kU.monstercomment[KC] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (kU.monster[KC] === 0) {
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        Kw.draw_sprite_ext(
          "spr_smallchecker_hurt",
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
      this.thissprite = "spr_smallchecker_idle";
      if (kU.mercymod[KC] >= kU.mercymax[KC]) {
        this.thissprite = "spr_smallchecker_run";
      }
      Kw.draw_sprite_ext(
        this.thissprite,
        this.siner / 3,
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
        Kw.draw_sprite_white(
          this.thissprite,
          this.siner / 3,
          this.x,
          this.y,
          2,
          2,
          0,
          -kD(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
kI(b8, "obj_smallcheckers_enemy");
Y1(b8, "kinds", kh("obj_smallcheckers_enemy", k3));
Y1(b8, "defaultDepth", 90);
Y1(b8, "defaultSprite", "spr_smallchecker_idle");
var b9 = b8;
var bk = [
  {
    id: "cround",
    name: "C.Round",
    chapter: 1,
    area: "Field",
    desc: "C.Round.#Include Susie#in an ACT.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: b9,
        type: 9,
        x: 440,
        y: 150,
        setup: Wx,
      },
    ],
    battlemsg:
      "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)",
    encounterno: 7,
    music: "battle",
  },
  {
    id: "kround",
    name: "K.Round",
    chapter: 1,
    area: "Field",
    desc: "K.Round.#Bow to loosen#the crown.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: b7,
        type: 10,
        x: 480,
        y: 120,
        setup: WE,
      },
    ],
    battlemsg: "* Here it comes!",
    encounterno: 12,
    music: "battle",
  },
  {
    id: "kround2",
    name: "K.Round (Card Castle)",
    chapter: 1,
    area: "Card Castle",
    desc: "K.Round again.#Throw Ralsei at#the crown.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [65, 130, 210],
    monsters: [
      {
        cls: b7,
        type: 21,
        x: 480,
        y: 120,
        setup: WO,
      },
    ],
    battlemsg: "* Here it comes^1. Again.",
    encounterno: 27,
    music: "battle",
  },
];
Y2(b7, "G.mnfight = 2;G.mnfight = 2;");
Y2(b9, "G.mnfight = 2;");
var bY = {};
Y0(bY, {
  FIGHTS: () => K3,
  SOUNDS: () => bQ,
  SPRITES: () => bz,
  obj_defeatanim: () => bo,
  obj_lancerbattle2_event: () => bg,
  obj_lancerbike: () => bx,
  obj_lancerboss: () => bG,
  obj_lancerboss2: () => K0,
  obj_lancerboss3: () => K2,
  setupStats: () => bF,
  setupStats12: () => bP,
  setupStats18: () => bR,
});
Y3();
var bW = {};
Y0(bW, {
  FIGHTS: () => bq,
  SOUNDS: () => bK,
  SPRITES: () => bb,
  obj_afterimage_grow: () => br,
  obj_axebullet: () => bt,
  obj_lancerbike_neo: () => by,
  obj_oflash: () => bm,
  obj_susieenemy: () => bZ,
  setupStats: () => bJ,
});
Y3();
var bb = [
  "spr_susie_enemy",
  "spr_susie_enemy_hurt",
  "spr_susie_enemy_defeat",
  "spr_susie_enemy_attack",
  "spr_susiel_dark",
  "spr_lancerbike",
  "spr_lancerbike_l",
  "spr_lancernoise",
  "spr_axebullet_b",
  "spr_spadebullet",
  "spr_ralseib_sing",
  "spr_battleblcon_long",
];
var bK = [
  "snd_sussurprise",
  "snd_ralseising1",
  "snd_ralseising2",
  "snd_lancerwhistle",
  "snd_jump",
  "snd_splat",
  "snd_laz_c",
  "snd_lancerhonk",
  "snd_drive",
];
function bl(Kw, ...KC) {
  return Kw.replace(/~(\d)/g, (KJ, KT) => String(KC[parseInt(KT) - 1]));
}
kI(bl, "scr_84_get_subst_string");
function bH(Kw, KC) {
  kU.msg[Kw] = bl("\\TX \\F0 \\E~1 \\FL \\TL %", String(KC));
}
kI(bH, "scr_lanface");
function bw(Kw) {
  kU.msg[Kw] = "\\TX \\F0 \\T0 %";
}
kI(bw, "scr_noface");
function bC() {
  let Kw = [];
  let KC = "";
  for (let KJ = 0; KJ < 100; KJ++) {
    let KT = kU.msg[KJ];
    if (KT === undefined || KT === " " || KT === "") {
      break;
    }
    if (/^\\TX .*%$/.exec(KT)) {
      let Km = /\\E([0-9A-F])/.exec(KT);
      KC = Km ? "\\E" + Km[1] : "";
      continue;
    }
    Kw.push(KC + KT);
    KC = "";
  }
  kU.msg = Kw.concat(new Array(Math.max(0, 100 - Kw.length)).fill(" "));
}
kI(bC, "packFaces");
function bJ(Kw) {
  let KC = kU.itemdf[2][0] + kU.itemdf[2][1] + kU.itemdf[2][2];
  kU.monstername[Kw] = "Susie";
  kU.monstermaxhp[Kw] = 120;
  kU.monsterhp[Kw] = 120;
  kU.monsterat[Kw] = 7;
  kU.monsterdf[Kw] = -5 + KC;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 0;
  kU.sparepoint[Kw] = 0;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  kU.canact[Kw][1] = 1;
  kU.actname[Kw][1] = "Anything";
  kU.canact[Kw][2] = 1;
  kU.actname[Kw][2] = "Sing";
  kU.actactor[Kw][2] = 3;
}
kI(bJ, "setupStats");
var bT = class lw extends ku {
  create() {
    this.flashspeed = 1;
    this.siner = 0;
    this.target = null;
    this.image_speed = 0;
    this.flashcolor = kF.white;
  }
  draw(Kw) {
    if (kp.exists(this.target)) {
      this.image_index = this.target.image_index;
      this.sprite_index = this.target.sprite_index;
    }
    this.siner += this.flashspeed;
    let KC = kz[this.sprite_index];
    if (KC) {
      let KJ = Kw.ctx;
      KJ.save();
      KJ.globalAlpha = Math.max(0, Math.min(1, kG(this.siner / 3)));
      KJ.translate(this.x, this.y);
      KJ.scale(this.image_xscale, this.image_yscale);
      KJ.drawImage(
        Kw.tinted(KC, Kw.frame(this.sprite_index, this.image_index), this.flashcolor, true),
        -KC.ox,
        -KC.oy,
      );
      KJ.restore();
    }
    if (this.siner > 4 && kG(this.siner / 3) < 0) {
      this.instance_destroy();
    }
  }
};
kI(bT, "obj_oflash");
Y1(bT, "kinds", kh("obj_oflash", ku));
Y1(bT, "defaultDepth", 0);
var bm = bT;
function bM(Kw) {
  let KC = kg(Kw.x, Kw.y, bm);
  KC.image_xscale = Kw.image_xscale;
  KC.image_speed = 0;
  KC.image_index = Kw.image_index;
  KC.image_yscale = Kw.image_yscale;
  KC.sprite_index = Kw.sprite_index;
  KC.depth = Kw.depth - 1;
  KC.target = Kw;
  return KC;
}
kI(bM, "scr_oflash");
var bf = class lC extends ku {
  create() {
    this.xrate = 0.2;
    this.yrate = 0.2;
    this.fade = 0.1;
  }
  step() {
    this.image_alpha -= this.fade;
    this.image_xscale += this.xrate;
    this.image_yscale += this.yrate;
    if (this.image_alpha < 0) {
      this.instance_destroy();
    }
  }
};
kI(bf, "obj_afterimage_grow");
Y1(bf, "kinds", kh("obj_afterimage_grow", ku));
Y1(bf, "defaultDepth", 0);
var br = bf;
var bS = class lJ extends k6 {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.counter = 0;
    this.image_angle = 0;
    this.seizure = 0;
    this.hspeed = -7.6 - kn(1.5);
    this.vspeed = -2 + kn(4);
    this.gravity = 0.13;
    this.gravity_direction = 0;
    this.active = 1;
    this.timepoints = 4;
    this.grazepoints = 4;
    this.damage = 30;
    this.grazed = 0;
  }
  step() {
    if (this.seizure === 0) {
      this.counter += 1;
      if (this.counter >= 3) {
        this.image_angle += 45;
        this.counter = 0;
      }
    }
    if (this.seizure === 1) {
      this.image_angle += 10;
    }
    if (this.x >= 700) {
      this.instance_destroy();
    }
  }
};
kI(bS, "obj_axebullet");
Y1(bS, "kinds", kh("obj_axebullet", k6));
Y1(bS, "defaultDepth", 2);
Y1(bS, "defaultSprite", "spr_axebullet_b");
var bt = bS;
var bU = class lT extends k7 {
  create() {
    this.grazed = 0;
    this.grazepoints = 4;
    this.timepoints = 0;
    this.target = 0;
    this.dont = 1;
    this.inv = 60;
    this.damage = 20;
    this.spec = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.loop = 0;
    this.lcon = 0;
    this.flip = 0;
    this.ltimer = 0;
    this.btimer = 0;
    this.racecon = 0;
    this.topy = 100;
    this.bottomy = 300;
    this.susiex = this.x - 100;
    this.susiey = this.y - 180;
    let Kw = kp.first("obj_susieenemy");
    if (Kw) {
      this.susiex = Kw.x;
      this.susiey = Kw.y;
    }
    this.s_tracking = 0;
    this.s_attack = 0;
    this.s_timer = 0;
    this.type = 0;
  }
  userEvent(Kw) {
    if (Kw === 5) {
      kt(this);
    }
  }
  step() {
    let Kw = kp.first("obj_heart");
    if (this.racecon === 0) {
      this.orx = this.x;
      this.ory = this.y;
      this.ang = 0;
      this.vdir = kV(1, -1);
      this.racecon = 1;
      this.rtimer = 0;
      kp.with("obj_susieenemy", (KT) => {
        KT.visible = false;
      });
      let KJ = kg(this.susiex, this.susiey, k8);
      this.s = KJ;
      k4(this, KJ);
      KJ.wall_destroy = 0;
      KJ.sprite_index = "spr_susiel_dark";
      KJ.image_xscale = 2;
      KJ.image_yscale = 2;
      KJ.active = 1;
      KJ.depth = this.depth - 1;
      KJ.image_speed = 0;
      KJ.image_index = 1;
      KJ.lx = this.x;
      KJ.ly = this.y - 108;
      kQ("snd_jump");
      KJ.hspeed = -2;
      KJ.vspeed -= 7;
      KJ.gravity = 1;
    }
    let KC = this.s;
    if (this.racecon === 1) {
      this.siner = 0;
      this.rtimer += 1;
      if (this.rtimer === 13) {
        kA("snd_jump");
        kQ("snd_splat");
      }
      if (this.rtimer >= 13) {
        this.image_xscale += 0.1;
        this.image_yscale -= 0.15;
      }
      if (this.rtimer === 16) {
        KC.speed = 0;
        KC.gravity = 0;
        KC.image_index = 0;
        this.sfitx = KC.x - this.x;
        this.sfity = KC.y - this.y;
        this.s_tracking = 1;
        this.ax_timer = 0;
        this.s_timer = 0;
        this.racecon = 2;
        this.rtimer = 0;
      }
    }
    if (this.s_attack === 1) {
      this.ax_timer += 1;
      this.s_timer += 1;
      if (this.s_timer === 1) {
        let KT = kg(KC.x - 40, KC.y - 15, bt);
        k4(this, KT);
        KT.depth = this.depth + 2;
        KT.hspeed = -16;
        if ((Kw ? Kw.y : 170) >= KT.y) {
          KT.gravity_direction = -15 + kn(10);
          KT.vspeed = 2;
        } else {
          KT.gravity_direction = 5 + kn(10);
          KT.vspeed = -2;
        }
        KT.gravity = 0.5;
        KT.hspeed += this.ax_timer * 0.3;
        kQ("snd_laz_c");
        KC.sprite_index = "spr_susie_enemy_attack";
        KC.active = 0;
        KC.image_index = 0;
        KC.image_speed = 0.5;
      }
      if (this.s_timer === 4) {
        KC.active = 0;
      }
      if (this.s_timer === 8) {
        KC.image_speed = 0;
      }
      if (this.s_timer === 8 && this.ax_timer <= 60) {
        this.s_timer = 0;
      }
    }
    if (this.racecon === 2) {
      this.rtimer += 1;
      if (this.rtimer >= 1 && (this.y <= this.ory - 120 || this.y >= this.ory + 120)) {
        if (this.y <= this.ory - 120 && this.vspeed < 0) {
          this.vspeed = -this.vspeed;
        }
        if (this.y >= this.ory + 120 && this.vspeed > 0) {
          this.vspeed = -this.vspeed;
        }
      }
      if (this.rtimer === 5 || this.rtimer === 10) {
        this.vspeed = 0;
        kQ("snd_lancerhonk");
        let Km = kg(this.x - 60, this.y - 40, br);
        Km.sprite_index = "spr_lancernoise";
      }
      if (this.rtimer === 30) {
        this.active = 1;
        this.s_attack = 1;
        this.racecon = 3;
        this.rtimer = 0;
        this.ang = 0;
        kQ("snd_drive");
        this.hspeed = -10;
        this.vspeed = -11;
        this.gravity = 0.5;
      }
    }
    if (this.racecon === 3) {
      this.rtimer += 1;
      if (this.x <= -40) {
        this.speed = 0;
        this.gravity = 0;
        this.friction = 0;
        this.s_attack = 0;
        this.s_tracking = 0;
        this.image_xscale = 2;
        this.image_yscale = 2;
        this.x = 740;
        this.y = this.ory;
        KC.x = this.susiex + 200;
        KC.hspeed = -8;
        KC.y = this.susiey;
        KC.sprite_index = "spr_susie_enemy";
        this.hspeed = -6;
        this.racecon = 4;
      }
    }
    if (this.racecon === 4) {
      let KM = 0;
      if (KC.x <= this.susiex) {
        KM += 1;
        KC.hspeed = 0;
        KC.x = this.susiex;
      }
      if (this.x <= this.orx + 5) {
        KM += 1;
        this.hspeed = 0;
        this.x = this.orx;
      }
      if (KM >= 2) {
        kU.turntimer = 5;
        kp.with("obj_susieenemy", (Kf) => {
          Kf.visible = true;
        });
        kp.with("obj_lancerboss3", (Kf) => {
          Kf.visible = true;
        });
        this.racecon = -1;
      }
    }
    if (this.s_tracking === 1) {
      KC.x = this.x + this.sfitx;
      KC.y = this.y + this.sfity;
    }
  }
};
kI(bU, "obj_lancerbike_neo");
Y1(bU, "kinds", kh("obj_lancerbike_neo", k7));
Y1(bU, "defaultDepth", -20);
Y1(bU, "defaultSprite", "spr_lancerbike");
var by = bU;
o({
  20: (Kw, { heart: KC }) => {
    if (kp.exists("obj_lancerboss3")) {
      if (Kw.made === 0) {
        kQ("snd_lancerwhistle");
        Kw.whistletimer = 0;
        Kw.made = 1;
        kp.with("obj_lancerboss3", (KJ) => {
          KJ.idlesprite = "spr_lancerbike_l";
        });
      }
      if (Kw.made === 1) {
        Kw.whistletimer += 1;
        if (Kw.whistletimer >= 30) {
          kp.with("obj_lancerboss3", (KJ) => {
            KJ.idlesprite = "spr_lancerbike";
          });
          Kw.made = 2;
        }
      }
    }
    if (Kw.btimer >= 8) {
      let KJ = -80 + kn(160) + 8;
      let KT = kg((KC ? KC.x : 320) + KJ, -20, k7);
      if (!KT.destroyed) {
        KT.damage = Kw.damage;
        KT.target = Kw.target;
        KT.sprite_index = "spr_spadebullet";
        KT.image_angle = 270;
        KT.gravity = 0.3;
        KT.speed = 0;
        KT.vspeed = 3;
        KT.hspeed = -0.6 + kn(1.2);
      }
      if (Kw.side === 1) {
        Kw.side = -1;
      } else {
        Kw.side = 1;
      }
      Kw.btimer = 0;
    }
  },
  85: (Kw, { bsy: KC }) => {
    if (Kw.made === 0) {
      Kw.cheer = 0;
      Kw.cheertimer = 0;
      Kw.remhp = [kU.hp[kU.char[0]], kU.hp[kU.char[1]]];
      kp.with("obj_susieenemy", (Km) => {
        Km.visible = false;
      });
      kp.with("obj_lancerboss3", (Km) => {
        Km.visible = false;
      });
      let KJ = kg(580, KC + 160, k5);
      Kw.fakelan = KJ;
      KJ.depth += 1;
      KJ.image_xscale = 2;
      KJ.image_yscale = 2;
      KJ.visible = true;
      KJ.sprite_index = "spr_lancerbike";
      KJ.active = 0;
      KJ.image_speed = 0.2;
      let KT = kg(530, KC - 40, k5);
      Kw.fakesus = KT;
      KT.image_xscale = 2;
      KT.image_yscale = 2;
      KT.visible = true;
      KT.sprite_index = "spr_susie_enemy_attack";
      KT.active = 0;
      KT.image_speed = 0;
      Kw.made = 1;
    }
    if (Kw.made === 1) {
      if (kp.exists(Kw.fakelan)) {
        if (Kw.cheer === 0 && kU.inv > 10) {
          Kw.cheer = 1;
          kQ("snd_lancerwhistle");
          Kw.fakelan.sprite_index = "spr_lancerbike_l";
        }
        if (Kw.cheer === 1) {
          Kw.cheertimer += 1;
          if (Kw.cheertimer >= 30) {
            Kw.cheertimer = 0;
            Kw.fakelan.sprite_index = "spr_lancerbike";
            Kw.cheer = 0;
          }
        }
      }
      if (kp.exists(Kw.fakesus) && Kw.fakesus.image_index < 5) {
        Kw.fakesus.image_index += 0.334;
      }
    }
    if (Kw.made === 1 && kU.turntimer <= 10) {
      if (kp.exists(Kw.fakesus)) {
        Kw.fakesus.visible = false;
      }
      if (kp.exists(Kw.fakelan)) {
        Kw.fakelan.visible = false;
      }
      kp.with("obj_susieenemy", (Km) => {
        Km.visible = true;
      });
      kp.with("obj_lancerboss3", (Km) => {
        Km.visible = true;
      });
    }
    if (Kw.btimer >= 27 && kp.exists("obj_battlesolid") && kU.turntimer > 10) {
      if (kp.exists(Kw.fakesus)) {
        Kw.fakesus.image_index = 0;
        kQ("snd_laz_c");
      }
      for (let Km = 0; Km < 1; Km += 1) {
        let KM = kg(540, KC, bt);
        k4(Kw, KM);
      }
      Kw.btimer = 0;
    }
  },
});
var bB = class lm extends k3 {
  create() {
    kU.turntimer = 0;
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
      idlesprite: "spr_susie_enemy",
      hurtsprite: "spr_susie_enemy_hurt",
      sparedsprite: "spr_susie_enemy",
      attacktype: 0,
      sleeping: 0,
      sleepcounter: 99,
      lullabied: 0,
      lancer_act: 0,
      susie_act: 0,
      lancer_hurt: 0,
      pacifycon: 0,
      defeated: 0,
      lancerhurt: 0,
      anythingcounter: 0,
      anythingxcounter: 0,
      tirespare: 0,
      ears_blocked: 0,
      susie_anythingcounter: 0,
      rtimer: 0,
      shakex: 0,
      pacifytimer: 0,
      lullatimer: 0,
    });
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.con += 1;
    }
  }
  userEvent(Kw) {
    if (Kw === 1) {
      this.talk();
      return;
    }
    if (Kw !== 11) {
      if (Kw === 12) {
        kU.monsterx[this.myself] = this.x + 20;
        kU.monstery[this.myself] = this.y + (this.sprite_height || 90) / 2;
        return;
      }
      super.userEvent(Kw);
    }
  }
  talk() {
    let Kw = this.myself;
    if (kU.mnfight === 1 && this.talked === 0) {
      let KC = 0;
      this.sleepcounter += 1;
      if (this.sleepcounter >= 3 && this.sleeping === 1) {
        this.sleeping = 0;
        this.idlesprite = "spr_susie_enemy";
        kU.monstercomment[Kw] = "(Awake)";
        kU.monsterstatus[Kw] = 0;
        this.sleepcounter = 99;
        KC = 1;
      }
      if (this.sleeping === 0) {
        kr(this);
      }
      if (!kp.exists("obj_darkener")) {
        kg(0, 0, kT);
      }
      kU.typer = 53;
      kU.msg = new Array(100).fill(" ");
      let KJ = kV(0, 1, 2, 3);
      if (KJ === 0) {
        kU.msg[0] = "Heh,&scared?";
      }
      if (KJ === 1) {
        kU.msg[0] = "Weasel&out of&THIS!";
      }
      if (KJ === 2) {
        kU.msg[0] = "Talk your&way out of&THIS!";
      }
      if (KJ === 3) {
        kU.msg[0] = "Think&fast!";
      }
      if (this.lancer_hurt === 0 && kU.monsterhp[1] <= kU.monstermaxhp[1] * 0.5) {
        this.lancer_hurt = 1;
        if (kU.monsterhp[Kw] === kU.monstermaxhp[Kw]) {
          kU.msg[0] = "Hey^1, stop&ganging up&on him!";
        } else {
          kU.msg[0] = "Hey^1, stop&hitting&him!";
        }
      }
      if (this.acting === 2) {
        if (this.anythingcounter === 1) {
          kU.msg[0] = "No way!&Shut up and&fight!!!";
        }
        if (this.anythingcounter === 2) {
          kU.msg[0] = "Really?&...&Shut up and&fight!!!";
        }
        if (this.anythingcounter === 3) {
          kU.msg[0] = "What are&you even&doing?";
        }
        if (this.anythingcounter === 4) {
          kU.msg[0] = " Really...?&No way, I&don't see&anything!";
        }
        if (this.anythingcounter >= 5) {
          kU.msg[0] = "Yeah, it's&hopeless.";
        }
      }
      if (this.lancer_act === 3) {
        if (this.anythingxcounter === 1) {
          kU.msg[0] = "Flattery&won't&work on&US!!!";
        }
        if (this.anythingxcounter === 2) {
          kU.msg[0] = "THAT'S&THE&POINT!!!";
        }
        if (this.anythingxcounter === 3) {
          kU.msg[0] = "Huh...?&I mean...&NO!!!";
        }
        if (this.anythingxcounter >= 4) {
          kU.msg[0] = "Heh,&score for&the BAD&GUYS!";
        }
      }
      if (this.sleeping === 1) {
        kU.msg[0] = "(Zzzz...)";
      }
      if (KC === 1) {
        kU.msg[0] = "(Yawn)&I'm awake,&did I miss&anything?";
      }
      KC = 0;
      this.lancer_act = 0;
      kW(this.x - 160, this.y, 3);
      this.talked = 1;
      this.talktimer = 0;
    }
  }
  step() {
    let Kw = this.myself;
    if (kU.monster[Kw] === 1 && this.defeated === 0) {
      kU.flag[51 + Kw] = 4;
      this.userEvent(1);
      if (this.talked === 1 && kU.mnfight === 1) {
        this.rtimer = 0;
        if (kR() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          kp.with("obj_writer", (KC) => KC.instance_destroy());
          kU.mnfight = 2;
        }
        if (kU.mnfight === 2) {
          if (!kp.exists("obj_moveheart")) {
            kJ();
          }
          if (!kp.exists("obj_growtangle")) {
            kg(320, 170, kw);
          }
        }
      }
      if (kU.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          kU.turntimer = 180;
          if (this.attacktype === 2) {
            let KJ = kg(this.x + this.sprite_width / 2, this.y + this.sprite_height / 2, d);
            KJ.type = 85;
            KJ.target = this.mytarget;
            KJ.damage = kU.monsterat[Kw] * 5;
            KJ.timepoints = 3;
            KJ.grazepoints = 5;
            if (this.sleeping === 1) {
              KJ.instance_destroy();
            }
          }
          if (this.attacktype === 1) {
            let KT = kg(this.x, this.y, d);
            KT.type = 20;
            KT.target = this.mytarget;
            KT.damage = kU.monsterat[Kw] * 5;
            KT.timepoints = 3;
            KT.grazepoints = 3;
            if (this.sleeping === 1) {
              KT.instance_destroy();
            }
          }
          if (this.attacktype === 0 && this.sleeping === 0) {
            let Km = kp.first("obj_lancerboss3");
            let KM = kg(Km ? Km.x : this.x + 20, Km ? Km.y : this.y + 160, by);
            kp.with("obj_lancerboss3", (Kf) => {
              Kf.visible = false;
            });
            KM.target = this.mytarget;
            KM.damage = kU.monsterat[Kw] * 5;
            kU.turntimer = 999;
          }
          this.attacktype += 1;
          if (this.attacktype >= 3) {
            this.attacktype = 0;
          }
          this.turns += 1;
          this.attacked = 1;
          kU.typer = 6;
          kU.fc = 0;
          let KC = kV(0, 1, 2, 3, 4);
          kU.battlemsg[0] = "* Susie and Lancer are making fun of you.";
          if (KC === 1) {
            kU.battlemsg[0] = "* Susie and Lancer are gloating about how great their team is.";
          }
          if (KC === 2) {
            kU.battlemsg[0] = "* Susie and Lancer are having an evil laugh contest.";
          }
          if (KC === 3) {
            kU.battlemsg[0] = "* Susie and Lancer are coming up with victory celebration plans.";
          }
          if (KC === 4) {
            kU.battlemsg[0] = "* Smells like teamwork.";
          }
        } else {
          kU.turntimer = 120;
        }
      }
      if (kU.mnfight === 2 && kU.turntimer <= 1) {
        if (this.battlecancel === 1) {
          kU.mercymod[Kw] = 999;
        }
        if (this.battlecancel === 2) {
          kp.with("obj_battlecontroller", (Kf) => {
            Kf.noreturn = 1;
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
      kU.typer = 50;
      kU.mercymod[Kw] = 999;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "Alright^1,&you convinced&me!!/%";
      kW(this.x - 160, this.y, 3);
      this.con = 4;
    }
    if (this.con === 4 && !kp.exists("obj_writer")) {
      this.hspeed = 15;
      this.con = 5;
      this.alarm[4] = 15;
      kp.with("obj_battlecontroller", (Kf) => {
        Kf.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      kp.with("obj_battlecontroller", (Kf) => {
        Kf.noreturn = 0;
      });
      this.scr_monsterdefeat();
      this.instance_destroy();
      this.con = 7;
    }
    if (kU.myfight === 3) {
      this.actStep();
    }
    if (this.pacifycon > 0) {
      kU.spelldelay = 999;
      kp.with("obj_spellphase", (Kf) => {
        if (Kf.spelltimer > 30) {
          Kf.spelltimer = 30;
        }
      });
    }
    if (this.pacifycon === 1) {
      let Kf = kp.first("obj_spellphase");
      if (Kf && Kf.spelltimer >= 15) {
        this.pacifytimer = 0;
        this.pacifycon = 2;
        kp.with("obj_lancerboss3", (Kr) => {
          Kr.visible = false;
        });
        this.temp_l = kH(this.x - 40, this.y + this.sprite_height, "spr_lancerbike");
        this.temp_l.depth = this.depth - 2;
      }
    }
    if (this.pacifycon === 2) {
      kQ("snd_lancerwhistle");
      if (kp.exists(this.temp_l)) {
        let Kr = bM(this.temp_l);
        Kr.flashcolor = kF.blue;
      }
      this.pacifycon = 3;
    }
    if (this.pacifycon === 3) {
      this.pacifytimer += 1;
      if (this.pacifytimer >= 30 && !kp.exists("obj_writer")) {
        if (kp.exists(this.temp_l)) {
          this.temp_l.instance_destroy();
        }
        kp.with("obj_lancerboss3", (KS) => {
          KS.visible = true;
        });
        this.pacifycon = 4;
        kp.with("obj_monsterparent", (KS) => {
          KS.susie_act = 9;
        });
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/";
        bH(1, 3);
        kU.msg[2] = "* I'll never let you SPARE my friends!!!/";
        bw(3);
        kU.msg[4] = "* (Lancer's BIKE began to get tired??????????????)/%";
        if (this.tirespare === 1) {
          kU.msg[0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/";
          kU.msg[1] = "* (The WHEEL of the BIKE became SPARED!)/";
          kU.msg[2] = "* (It turned into a SPARED TIRE!)/";
          kU.msg[3] = "* (... that didn't do anything though.)/";
          kU.msg[4] = "* (Seems that PACIFYing won't work!)/%";
        }
        if (this.tirespare >= 2) {
          kU.msg[0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/";
          kU.msg[1] = "* (Seems that nothing else interesting will happen!)/%";
        }
        bC();
        kY();
        this.pacifycon = 5;
        this.tirespare += 1;
      }
    }
    if (this.pacifycon === 5 && !kp.exists("obj_writer")) {
      kU.spelldelay = 20;
      kp.with("obj_spellphase", (KS) => {
        KS.spelltimer = 18;
      });
      this.pacifycon = 0;
    }
  }
  actStep() {
    let Kw = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      let KC = kU.itemdf[2][0] + kU.itemdf[2][1] + kU.itemdf[2][2];
      let KJ = kU.itemat[2][0] + kU.itemat[2][1] + kU.itemat[2][2];
      let KT = String(kU.df[2] + KC);
      let Km = String(kU.at[2] + KJ);
      let KM = String(kU.maxhp[2]);
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = bl(
        "* SUSIE - AT:~1 DF:~2 HP:~3&* If you read the status screen^1, you already knew that./%",
        Km,
        KT,
        KM,
      );
      if (KC > 0) {
        kU.msg[0] = bl(
          "* SUSIE - AT:~1 DF:~2 HP:~3&* The armor you equipped her with just made her tougher!/%",
          Km,
          KT,
          KM,
        );
      }
      kY();
    }
    if (this.acting === 2 && this.actcon === 0) {
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* You tried convincing Susie not to fight./";
      if (this.anythingcounter === 1) {
        kU.msg[0] = "* You tried telling Susie you like her hair./";
      }
      if (this.anythingcounter === 2) {
        kU.msg[0] = "* You growled at Susie like a bear./";
      }
      if (this.anythingcounter === 3) {
        kU.msg[0] = "* You told Susie you'd give her a picnic basket of worms./";
      }
      if (this.anythingcounter >= 4) {
        kU.msg[0] = "* You have no idea what to do what to Susie anymore./";
      }
      kU.msg[1] = "* There was no effect!/%";
      if (this.anythingcounter >= 1) {
        kU.msg[1] = "* It seems this command is a total waste of time!/%";
      }
      kY();
      this.anythingcounter += 1;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      kp.with("obj_monsterparent", (Kr) => {
        Kr.susie_act = 3;
      });
      if (this.lullabied === 0) {
        this.singy = "snd_ralseising1";
        kQ("snd_ralseising1");
        kp.with("obj_susieenemy", (Kr) => {
          Kr.lullabied = 1;
        });
      } else {
        this.singy = "snd_ralseising2";
        kQ("snd_ralseising2");
        kp.with("obj_susieenemy", (Kr) => {
          Kr.lullabied = 0;
        });
      }
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* Ralsei sang a soft and entrancing lullaby!/%";
      let Kf = kp.first("obj_heroralsei");
      if (Kf) {
        Kf.visible = false;
      }
      this.ralsing = kH(Kf ? Kf.x : 80, Kf ? Kf.y : 180, "spr_ralseib_sing");
      this.ralsing.image_speed = 0.2;
      this.lullatimer = 0;
      kY();
      this.actcon = 10;
    }
    if (this.actcon === 10) {
      this.lullatimer += 1;
      if (this.lullatimer >= 30) {
        this.actcon = 11;
      }
    }
    if (this.actcon === 11 && !kp.exists("obj_writer")) {
      if (kp.exists(this.ralsing)) {
        this.ralsing.instance_destroy();
      }
      kp.with("obj_heroralsei", (Kr) => {
        Kr.visible = true;
      });
      kA(this.singy);
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* SUSIE fell asleep!/%";
      if (this.sleeping === 1) {
        kU.msg[0] = "* But SUSIE was already asleep...!/%";
      }
      this.idlesprite = "spr_susie_enemy_defeat";
      this.sleepcounter = 0;
      this.sleeping = 1;
      kU.monstercomment[Kw] = "(Asleep)";
      kU.monsterstatus[Kw] = 1;
      kY();
      this.actcon = 1;
    }
    if (this.actcon === 1 && !kp.exists("obj_writer")) {
      this.actcon = 0;
      g();
    }
  }
  draw(Kw) {
    let KC = this.myself;
    if (this.state === 3) {
      this.sleepcounter = 99;
      this.sleeping = 0;
      kU.monstercomment[KC] = "(Awake)";
      kU.monsterstatus[KC] = 0;
      this.idlesprite = "spr_susie_enemy";
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (kU.monster[KC] === 0) {
          kQ("snd_sussurprise");
          this.visible = false;
          this.instance_destroy();
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
        Kw.draw_sprite_ext(
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
      let KJ = this.idlesprite;
      if (kU.mercymod[KC] >= kU.mercymax[KC]) {
        KJ = this.idlesprite;
      }
      Kw.draw_sprite_ext(KJ, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        Kw.draw_sprite_white(
          KJ,
          this.siner / 6,
          this.x,
          this.y,
          2,
          2,
          0,
          -kD(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
kI(bB, "obj_susieenemy");
Y1(bB, "kinds", kh("obj_susieenemy", k3));
Y1(bB, "defaultDepth", 95);
Y1(bB, "defaultSprite", "spr_susie_enemy");
var bZ = bB;
var bq = [
  {
    id: "susie",
    name: "Susie",
    chapter: 1,
    area: "Field",
    desc: "Two bad guys#blocked the way!#(Susie only)",
    party: [1, 3, 0],
    heromakex: [80, 80, 80],
    heromakey: [100, 180, 210],
    monsters: [
      {
        cls: bZ,
        type: 19,
        x: 520,
        y: 80,
        setup: bJ,
      },
    ],
    battlemsg: "* Two bad guys blocked the way!",
    encounterno: 31,
    music: "lancerfight",
  },
];
Y2(bZ, "G.mnfight = 2;");
var bz = [
  "spr_lancerbike",
  "spr_lancerbike_l",
  "spr_lancerbike_hurt",
  "spr_lancerbike_earcover",
  "spr_lancernoise",
  "spr_lancer_battle",
  "spr_lancer_battle_hurt",
  "spr_spadebullet",
  "spr_susieb_idle_serious",
  "spr_susieb_attack_serious",
  "spr_defeatsweat",
  "spr_susieb_idle",
  "spr_susieb_attack",
  "spr_pixel_white",
];
var bQ = [
  "snd_cardrive",
  "snd_spearrise",
  "snd_lancerhonk",
  "snd_drive",
  "snd_laz_c",
  "snd_bell",
  "snd_power",
  "snd_lancerwhistle",
  "snd_defeatrun",
  "snd_txtlan",
  "snd_txtsus",
];
var bA = {
  32: ["fnt_mainbig", kF.white, 1, "snd_txtlan", 16, 36],
  46: ["fnt_mainbig", kF.white, 1, "snd_txtlan", 16, 28],
  53: ["fnt_dotumche", kF.black, 1, "snd_txtsus", 9, 20],
  54: ["fnt_dotumche", kF.black, 2, "snd_txtsus", 9, 20],
};
function ba(Kw) {
  let KC = bA[kU.typer];
  if (!!Kw && !!KC) {
    [Kw.myfont, Kw.mycolor, Kw.rate, Kw.textsound, Kw.hspace, Kw.vspace] = KC;
    Kw.xcolor = Kw.mycolor;
  }
  return Kw;
}
kI(ba, "scr_texttype_fix");
function bF(Kw) {
  kU.monstername[Kw] = "Lancer";
  kU.monstermaxhp[Kw] = 540;
  kU.monsterhp[Kw] = 540;
  kU.monsterat[Kw] = 5;
  kU.monsterdf[Kw] = 1;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 20;
  kU.sparepoint[Kw] = 10;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  kU.canact[Kw][1] = 1;
  kU.actname[Kw][1] = "Warning";
  kU.canact[Kw][2] = 1;
  kU.actname[Kw][2] = "Compliment";
  kU.battlemsg[0] = "* Lancer busts in!";
}
kI(bF, "setupStats");
function bP(Kw) {
  kU.monstername[Kw] = "Lancer";
  kU.monstermaxhp[Kw] = 2400;
  kU.monsterhp[Kw] = 2400;
  kU.monsterat[Kw] = 4;
  kU.monsterdf[Kw] = -40;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 0;
  kU.sparepoint[Kw] = 0;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
}
kI(bP, "setupStats12");
function bR(Kw) {
  kU.monstername[Kw] = "Lancer";
  kU.monstermaxhp[Kw] = 800;
  kU.monsterhp[Kw] = 800;
  kU.monsterat[Kw] = 6;
  kU.monsterdf[Kw] = 1;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 0;
  kU.sparepoint[Kw] = 0;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  kU.canact[Kw][1] = 1;
  kU.actname[Kw][1] = "Anything";
  kU.canact[Kw][2] = 1;
  kU.actname[Kw][2] = "X-Anything";
  kU.actactor[Kw][2] = 3;
}
kI(bR, "setupStats18");
var bu = kI((Kw, KC) => {
  kU.msg[Kw] = "\\TX \\F0 \\E" + KC + " \\FS \\TS %";
}, "scr_susface");
var bN = kI((Kw, KC) => {
  kU.msg[Kw] = "\\TX \\F0 \\E" + KC + " \\FL \\TL %";
}, "scr_lanface");
var bc = kI((Kw, KC) => {
  kU.msg[Kw] = "\\TX \\F0 \\E" + KC + " \\FR \\TR %";
}, "scr_ralface");
var bh = kI((Kw) => {
  kU.msg[Kw] = "\\TX \\F0 \\T0 %";
}, "scr_noface");
function bL() {
  let Kw = [];
  let KC = "";
  for (let KJ = 0; KJ < 100; KJ++) {
    let KT = kU.msg[KJ];
    if (KT === undefined || KT === " " || KT === "") {
      break;
    }
    if (/^\\TX .*%$/.exec(KT)) {
      let Km = /\\E([0-9A-F])/.exec(KT);
      KC = Km ? "\\E" + Km[1] : "";
      continue;
    }
    Kw.push(KC + KT);
    KC = "";
  }
  kU.msg = new Array(100).fill(" ");
  Kw.forEach((KM, Kf) => {
    kU.msg[Kf] = KM;
  });
}
kI(bL, "packFaces");
var bn = [
  "* Lancer's riding it out.",
  "* Lancer is thinking about chips.",
  "* Lancer's motorcycle is actually just a bike that's on fire.",
  "* Lancer switches gears randomly to appear competent.",
  "* Lancer revs viciously.",
];
var bV = class lM extends ku {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    kQ("snd_defeatrun");
  }
  draw(Kw) {
    if (this.t === 0) {
      this.draw_self(Kw);
    }
    let KC = 0;
    if (this.g <= 5) {
      KC = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      KC = 1;
    }
    if (KC === 1) {
      Kw.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let KJ = 0; KJ <= 80; KJ++) {
        Kw.draw_sprite_ext(
          this.sprite_index,
          this.image_index,
          this.x + KJ * 4,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          this.image_blend,
          Math.max(0, 0.4 - this.t / 8 + KJ / 200),
        );
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
  step() {
    this.g++;
    if (this.g >= 15) {
      this.t++;
    }
  }
};
kI(bV, "obj_defeatanim");
Y1(bV, "kinds", kh("obj_defeatanim", ku));
Y1(bV, "defaultDepth", 0);
var bo = bV;
function bd(Kw) {
  let KC = kg(Kw.x, Kw.y, bo);
  KC.sprite_index = Kw.hurtsprite;
  KC.image_index = 0;
  KC.image_xscale = Kw.image_xscale;
  KC.image_yscale = Kw.image_yscale;
  Kw.instance_destroy();
}
kI(bd, "scr_defeatrun");
var bp = class lf extends k7 {
  create() {
    this.grazed = 0;
    this.grazepoints = 10;
    this.timepoints = 0;
    this.target = 0;
    this.dont = 1;
    this.inv = 60;
    this.damage = 20;
    this.spec = 0;
    if (kU.hp[1] <= kU.maxhp[1] / 2) {
      this.damage = 10;
    }
    if (kU.hp[1] <= kU.maxhp[1] / 4) {
      this.damage = 5;
    }
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.loop = 0;
    this.lcon = 0;
    this.flip = 0;
    this.ltimer = 0;
    this.btimer = 0;
    this.endcon = 0;
    this.racecon = 0;
    this.topy = 120;
    this.bottomy = 250;
  }
  userEvent(Kw) {
    if (Kw === 5) {
      if (this.target === 0 && kU.hp[1] <= kU.maxhp[1] / 2) {
        this.damage = kX(kU.hp[1] / 3);
      }
      kt(this);
    }
  }
  step() {
    let Kw = kp.first("obj_heart");
    if (this.lcon === 1) {
      this.orx = this.x;
      this.ory = this.y;
      this.ang = 0;
      this.ltimer = 0;
      this.shrinktimer = 0;
      this.lcon = 1.5;
    }
    if (this.lcon === 1.5) {
      this.ltimer++;
      if (this.ltimer >= 10) {
        this.ltimer = 0;
        this.lcon = 2;
        kQ("snd_cardrive");
      }
    }
    if (this.lcon >= 6 && this.lcon < 10 && (this.btimer++, this.btimer >= 10)) {
      let KC = ko(40, this.image_angle - 20);
      let KJ = kd(40, this.image_angle - 20);
      kQ("snd_spearrise");
      let KT = kg(this.x - KC, this.y - KJ, k7);
      if (!KT.destroyed) {
        KT.target = this.target;
        KT.damage = this.damage;
        if (KT.target === 0 && kU.hp[1] <= kU.maxhp[1] / 2) {
          KT.damage = kX(kU.hp[1] / 3);
        }
        KT.timepoints = 0;
        KT.sprite_index = "spr_spadebullet";
        KT.move_towards_point(Kw ? Kw.x + 8 : 320, Kw ? Kw.y + 8 : 170, 4);
        KT.image_angle = KT.direction;
        KT.friction = -0.4;
        KT.depth = this.depth + 1;
      }
      this.btimer = 0;
    }
    if (this.lcon === 2) {
      this.ltimer++;
      this.shrinktimer++;
      this.hspeed = kG(this.ltimer / 3) * 5;
      this.image_yscale = 2 - kG(this.ltimer / 5) * 1;
      if (this.shrinktimer > 4) {
        this.image_yscale = 2 - kG(this.ltimer / 5) * 1 * (8 / this.shrinktimer);
      }
      if (this.ltimer > 7) {
        this.image_angle -= kj(kG(this.ltimer / 5)) * 4;
        this.ang = -this.image_angle;
      }
      if (this.ltimer > 4 && kj(kG(this.ltimer / 5)) <= 0.06) {
        this.lcon = 5;
        this.image_yscale = 2;
        this.direction = 180;
        this.speed = 4;
      }
    }
    if (this.lcon === 5) {
      if (this.speed < 16) {
        this.speed += 2;
      }
      if (this.ang < 45) {
        this.ang += 4;
      }
      this.image_angle = -this.ang;
      if (this.x < 80) {
        this.lcon = 6;
      }
    }
    if (this.lcon === 6) {
      if (this.ang < 135) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
      if (this.x <= 5) {
        this.lcon = 7;
        this.direction = 90;
      }
    }
    if (this.lcon === 7) {
      if (this.y < 80) {
        if (this.ang < 225) {
          this.ang += 10;
        }
        if (this.y <= 5) {
          this.direction = 0;
          this.lcon = 8;
        }
      } else if (this.ang < 135) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
    }
    if (this.lcon === 8) {
      if (this.x >= 540) {
        if (this.ang < 315) {
          this.ang += 10;
        }
        if (this.x >= 630) {
          this.direction = 270;
          this.lcon = 9;
        }
      } else if (this.ang < 225) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
    }
    if (this.lcon === 9) {
      if (this.y > this.ory - 70) {
        if (this.ang < 360) {
          this.ang += 10;
        }
        if (this.y >= this.ory - 5) {
          this.y = this.ory;
          this.direction = 180;
          this.lcon = 10;
        }
      } else if (this.ang < 315) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
    }
    if (this.lcon === 10) {
      this.ang = 0;
      this.image_angle = 0;
      if (this.x <= this.orx) {
        this.speed = 0;
        this.x = this.orx;
        this.lcon = 11;
        this.ltimer = 0;
      }
    }
    if (this.lcon === 11) {
      this.sprite_index = "spr_lancerbike_l";
      this.ltimer++;
      if (this.ltimer >= 25) {
        kp.with("obj_regularbullet", (Km) => {
          Km.active = 0;
          Km.image_alpha -= 0.2;
        });
        this.image_alpha = 1;
      }
      if (this.ltimer >= 30) {
        this.lcon = 0;
        this.endcon = 1;
      }
    }
    if (this.racecon === 1) {
      this.sy = 0;
      this.s_moveup = 0;
      kp.with("obj_susieandlancer_event", (Km) => {
        if (Km.s) {
          this.s = Km.s;
          this.sy = Km.s.y;
          this.s_moveup = 1;
        }
      });
      this.orx = this.x;
      this.ory = this.y;
      this.ang = 0;
      this.racecon = 2;
      this.vspeed = kV(1, -1) * -14;
      this.rtimer = 0;
      this.maxr = 15 + kn(25);
    }
    if (this.racecon === 2) {
      if (this.s_moveup === 1 && this.s.y > -20) {
        this.s.y -= 10;
      }
      if (this.y < this.topy + 10) {
        this.vspeed = 12;
      }
      if (this.y > this.bottomy - 10) {
        this.vspeed = -12;
      }
      this.rtimer++;
      if (this.rtimer > this.maxr) {
        this.vspeed = 0;
        this.racecon = 3;
        this.rtimer = 0;
      }
    }
    if (this.racecon === 3) {
      this.rtimer++;
      if (this.rtimer === 5 || this.rtimer === 10) {
        kQ("snd_lancerhonk");
        let Km = kg(this.x - 60, this.y - 40, br);
        Km.sprite_index = "spr_lancernoise";
      }
      if (this.rtimer >= 25) {
        kQ("snd_drive");
        this.racecon = 4;
        this.hspeed = -20;
        this.rtimer = 0;
        this.ang = 0;
      }
    }
    if (this.racecon === 4) {
      if (this.s_moveup === 1) {
        this.s.y += 10;
        if (this.s.y >= this.sy) {
          this.s.y = this.sy;
          this.s_moveup = 0;
        }
      }
      this.rtimer++;
      this.ang += this.rtimer * 2 + 4;
      if (this.ang > 50) {
        this.ang = 50;
      }
      this.image_angle = -this.ang;
      if (this.x <= -40) {
        this.ang = 0;
        this.image_angle = 0;
        this.x = 740;
        this.y = this.ory;
        this.hspeed = -12;
        this.racecon = 5;
      }
    }
    if (this.racecon === 5 && this.x <= this.orx + 5) {
      this.hspeed = 0;
      this.x = this.orx;
      this.racecon = 0;
      this.endcon = 1;
    }
    if (this.endcon === 1) {
      kU.turntimer = 2;
      kp.with("obj_lancerboss", (KM) => {
        KM.visible = true;
        if (KM.turns >= 4) {
          KM.con = 1;
          kp.with("obj_battlecontroller", (Kf) => {
            Kf.noreturn = 1;
          });
        }
      });
      kp.with("obj_lancerboss3", (KM) => {
        KM.visible = true;
      });
      this.instance_destroy();
    }
    kp.with("obj_lancerboss", (KM) => {
      if (KM.compliment >= 3) {
        kp.with("obj_dmgwriter", (Kf) => {
          Kf.spec = 1;
        });
      }
    });
  }
};
kI(bp, "obj_lancerbike");
Y1(bp, "kinds", kh("obj_lancerbike", k7));
Y1(bp, "defaultDepth", -20);
Y1(bp, "defaultSprite", "spr_lancerbike");
var bx = bp;
function bE(Kw, KC, KJ) {
  let KT = -80 + kn(160) + 8;
  let Km = kg((KC ? KC.x : 320) + KT, KJ, k7);
  if (!Km.destroyed) {
    Km.damage = Kw.damage;
    Km.target = Kw.target;
    Km.sprite_index = "spr_spadebullet";
    Km.image_angle = 270;
    Km.gravity = 0.3;
    Km.speed = 0;
    Km.vspeed = 3;
    Km.hspeed = -0.6 + kn(1.2);
  }
}
kI(bE, "fallspade");
function bO(Kw, { heart: KC }) {
  if (kp.exists("obj_lancerboss3")) {
    if (Kw.made === 0) {
      kQ("snd_lancerwhistle");
      Kw.whistletimer = 0;
      Kw.made = 1;
      kp.with("obj_lancerboss3", (KT) => {
        KT.idlesprite = "spr_lancerbike_l";
      });
    }
    if (Kw.made === 1) {
      Kw.whistletimer++;
      if (Kw.whistletimer >= 30) {
        kp.with("obj_lancerboss3", (KT) => {
          KT.idlesprite = "spr_lancerbike";
        });
        Kw.made = 2;
      }
    }
  }
  let KJ = 8;
  if (Kw.type === 22) {
    KJ = 6;
  }
  if (Kw.btimer >= KJ) {
    bE(Kw, KC, -20);
    Kw.side = Kw.side === 1 ? -1 : 1;
    Kw.btimer = 0;
  }
}
kI(bO, "type20_22");
function bX(Kw) {
  let KC = 9;
  if (Kw.type === 23) {
    KC = 7;
  }
  if (Kw.type === 25) {
    KC = 4;
  }
  kp.with("obj_regularbullet", (KJ) => {
    KJ.image_alpha += 0.2;
  });
  if (Kw.btimer >= KC) {
    let KJ = Kw.side === 0 ? 80 : 560;
    let KT = kp.first("obj_growtangle");
    let Km = KT ? KT.y : 170;
    let KM = KT ? KT.sprite_height : 130;
    let Kf = kg(KJ, Km - KM / 2 + kn(KM), k7);
    if (!Kf.destroyed) {
      Kf.direction = Kw.side === 0 ? 0 : 180;
      Kf.image_alpha = 0;
      Kf.damage = Kw.damage;
      Kf.target = Kw.target;
      Kf.sprite_index = "spr_spadebullet";
      Kf.speed = 5;
      Kf.friction = -0.1;
      Kf.image_angle = Kf.direction;
    }
    Kw.side = Kw.side === 1 ? 0 : 1;
    Kw.btimer = 0;
  }
}
kI(bX, "type21_23_25");
function bv(Kw, { heart: KC }) {
  let KJ = Kw.difficulty + 5;
  kp.with("obj_regularbullet", (KT) => {
    if (!KC) {
      return;
    }
    let Km = KT.x - (KC.x + 8);
    if (KT.y >= KC.y - 240 && kj(Km) <= 30) {
      if (Km >= 0 && KT.hspeed < 5) {
        KT.hspeed += 0.4;
      }
      if (Km < 0 && KT.hspeed > -5) {
        KT.hspeed -= 0.4;
      }
    }
    if (KT.y >= KC.y - 100 && kj(Km) <= 60) {
      if (Km >= 0) {
        if (KT.hspeed < 2) {
          KT.hspeed += 0.25;
        }
        if (Km < 10) {
          KT.x += 3;
        }
        if (Km < 20) {
          KT.x += 3;
        }
        if (Km < 30) {
          KT.x += 3;
        }
        if (Km < 40) {
          KT.x += 2;
        }
        if (Km < 60) {
          KT.x += 1;
        }
      } else {
        if (KT.hspeed > -2) {
          KT.hspeed -= 0.25;
        }
        if (Km > -10) {
          KT.x -= 3;
        }
        if (Km > -20) {
          KT.x -= 3;
        }
        if (Km > -30) {
          KT.x -= 3;
        }
        if (Km > -40) {
          KT.x -= 2;
        }
        if (Km > -60) {
          KT.x -= 1;
        }
      }
    }
  });
  if (Kw.btimer >= KJ) {
    bE(Kw, KC, -20);
    Kw.side = Kw.side === 1 ? -1 : 1;
    Kw.btimer = 0;
  }
}
kI(bv, "type24");
o({
  20: bO,
  22: bO,
  21: bX,
  23: bX,
  25: bX,
  24: bv,
});
var bj = class lr extends k3 {
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
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      compliment_just: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 1,
      con: 0,
      shakex: 0,
    });
    this.image_xscale = 2;
    this.image_yscale = 2;
    kU.automiss ||= [0, 0, 0];
  }
  userEvent(Kw) {
    if (Kw === 12) {
      kU.monsterx[this.myself] = this.x;
      kU.monstery[this.myself] = this.y - this.sprite_height / 2 - 30;
    }
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.con++;
    }
  }
  step() {
    let Kw = this.myself;
    if (
      kU.monster[Kw] === 1 &&
      (kU.mnfight === 1 &&
        this.talked === 0 &&
        (kr(this),
        (kU.flag[51 + Kw] = 4),
        (kU.targeted[this.mytarget] = 1),
        kp.exists("obj_darkener") || kg(0, 0, kT),
        (kU.typer = 50),
        (kU.msg = new Array(100).fill(" ")),
        this.turns === 0 && (kU.msg[0] = "Halt, clowns!&This bike is&fueled by&victory!!!"),
        this.turns === 1 && (kU.msg[0] = "I love to get&thrashed...&Just kidding!&That's you!!"),
        this.turns === 2 && (kU.msg[0] = "So what are&you guys doing&after this???"),
        this.turns >= 3 && (kU.msg[0] = "Hohoho!!!&I'm the bad&guy!"),
        this.compliment_just === 1 &&
          (this.compliment === 1 &&
            (kU.msg[0] = "Oh! You make&my feelings&do wheelies!&Sweet wheelys"),
          this.compliment === 2 &&
            (kU.msg[0] = "Did you not&realize I can&mask my self-&esteem levels?"),
          this.compliment === 3 && (kU.msg[0] = "Stop!! My&personality's&getting too&deep!!!"),
          (this.compliment_just = 0)),
        kW(this.x - 235, this.y - 65, 3),
        (this.talked = 1),
        (this.talktimer = 0)),
      this.talked === 1 &&
        kU.mnfight === 1 &&
        (kR() && this.talktimer > 15 && (this.talktimer = this.talkmax),
        this.talktimer++,
        this.talktimer >= this.talkmax &&
          (kp.exists("obj_moveheart") || kJ(),
          kp.exists("obj_growtangle") || kg(320, 170, kw),
          kp.with("obj_writer", (KC) => KC.instance_destroy()),
          (kU.mnfight = 2))),
      kU.mnfight === 2 && this.attacked === 0)
    ) {
      let KC = kg(this.x, this.y, bx);
      this.bike = KC;
      this.visible = false;
      if (this.attacks === 0) {
        KC.racecon = 1;
        KC.target = this.mytarget;
        KC.damage = kU.monsterat[Kw] * 5;
        this.attacks = 1;
      } else {
        KC.lcon = 1;
        KC.target = this.mytarget;
        KC.damage = kU.monsterat[Kw] * 5;
        this.attacks = 0;
      }
      this.turns++;
      kU.turntimer = 999;
      this.attacked = 1;
      let KJ = kv(kn(5));
      kU.typer = 6;
      kU.fc = 0;
      kU.battlemsg[0] = bn[KJ];
      if (this.turns === 1) {
        kU.typer = 47;
        kU.fc = 1;
        kU.fe = 2;
        kU.battlemsg[0] = "* Dunno how I got an ax but^1, like^1, that's cool.";
      }
    }
    if (kU.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.actcon = 1;
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* LANCER - AT 7 DF 1&* Not to call a spade a spade^1, but he's a spade./";
        kU.msg[1] = "* Not old enough to ride a motorcycle^1, so he set his bike on fire./%";
        kY();
      }
      if (this.acting === 2 && this.actcon === 0) {
        this.actcon = 1;
        kU.msg = new Array(100).fill(" ");
        if (kU.automiss[Kw] === 0) {
          kU.msg[0] =
            "* You tell Lancer to watch out for Susie's attack^1.&* He readies himself./%";
          kU.automiss[Kw] = 1;
        } else {
          kU.msg[0] = "* Lancer laughs at the idea he would need your help!/%";
        }
        kY();
      }
      if (this.acting === 3 && this.actcon === 0) {
        kU.msg = new Array(100).fill(" ");
        if (this.compliment >= 3) {
          kU.msg[0] = "* You say some kind words^1.&* Lancer absorbs them into his skin./%";
        }
        if (this.compliment === 2) {
          kU.msg[0] = "* You compliment LANCER^1.&* He gets confused as to your sincerity./";
          kU.msg[1] = "* Instead of going up or down^1, his ATTACK power goes sideways...?/%";
          kf(Kw, 20);
        }
        if (this.compliment === 1) {
          kU.msg[0] = "* You try to compliment LANCER again.../";
          kU.msg[1] = "* But he sees it as insincere^1.&* His ATTACK POWER goes back up!/%";
          kf(Kw, 20);
          kU.monsterat[Kw] += 1;
        }
        if (this.compliment === 0) {
          kU.msg[0] =
            "* You tell Lancer you can't tell the difference between his clothes and his body./";
          kU.msg[1] = "* He seems flattered..^1.&* His ATTACK POWER went down!/%";
          kf(Kw, 20);
          kU.monsterat[Kw] -= 1;
        }
        this.compliment_just = 1;
        this.compliment++;
        kY();
        this.actcon = 1;
      }
      if (this.actcon === 1 && !kp.exists("obj_writer")) {
        this.actcon = 0;
        g();
      }
    }
    if (this.con === 1) {
      this.alarm[4] = 5;
      this.con = 2;
    }
    if (this.con === 3) {
      kU.typer = 50;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "Wait^1!&Wait a second!/";
      kU.msg[1] = "My bike's&running&out of&fuel...!/";
      kU.msg[2] = "Alright,&you punk-&a-roos!/";
      kU.msg[3] = "You had the&luck of the&draw this&time^1, but.../";
      kU.msg[4] = "Next time^1,&the losers&will be&YOU!!!/";
      kU.msg[5] = "Hahaha!!^1!&Bye^1, losers!!/";
      kU.msg[6] = "I gotta get&home before&dinner!!!/%";
      this.con = 4;
      kW(this.x - 235, this.y - 65, 3);
    }
    if (this.con === 4 && !kp.exists("obj_writer")) {
      this.hspeed = 20;
      this.con = 5;
      this.alarm[4] = 15;
      kp.with("obj_battlecontroller", (KT) => {
        KT.noreturn = 0;
        KT.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      kU.monsterexp[Kw] -= 0;
      kU.monstergold[Kw] += 10;
      if (kU.plot < 22) {
        kU.plot = 22;
      }
      this.scr_monsterdefeat();
      this.instance_destroy();
      this.con = 7;
    }
  }
  draw(Kw) {
    let KC = this.myself;
    if (this.state === 3) {
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (kU.monster[KC] === 0) {
          if (kU.plot < 22) {
            kU.plot = 22;
          }
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        Kw.draw_sprite_ext(
          "spr_lancerbike_hurt",
          this.hurttimer / 2,
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
    if (this.state === 4) {
      this.dodgetimer++;
      let KJ = Math.cos((this.dodgetimer * 2 * Math.PI) / 15) * 2;
      Kw.draw_sprite_ext("spr_lancerbike_l", 0, this.x, this.y, KJ, 2, 0, this.image_blend, 1);
      if (this.dodgetimer >= 15) {
        this.state = 0;
      }
    }
    if (this.state === 0) {
      this.siner++;
      let KT = "spr_lancerbike";
      if (kU.mercymod[KC] >= kU.mercymax[KC]) {
        KT = "spr_lancerbike";
      }
      Kw.draw_sprite_ext(KT, this.siner / 5, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner++;
        Kw.draw_sprite_white(
          KT,
          this.siner / 5,
          this.x,
          this.y,
          2,
          2,
          0,
          -kD(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
kI(bj, "obj_lancerboss");
Y1(bj, "kinds", kh("obj_lancerboss", k3));
Y1(bj, "defaultDepth", 90);
Y1(bj, "defaultSprite", "spr_lancerbike");
var bG = bj;
var bD = class lS extends ku {
  create() {
    this.con = 51;
    this.image_speed = 0;
    this.visible = false;
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.con++;
    }
  }
  step() {
    if (this.con === 53) {
      let Kw = kp.first("obj_herosusie");
      this.s = kH(Kw ? Kw.x : 120, Kw ? Kw.y : 140, "spr_susieb_attack_serious");
      this.s.image_index = 5;
      this.s.depth = Kw ? Kw.depth : 100;
      this.visible = true;
      this.sprite_index = "spr_lancer_battle_hurt";
      kU.fighting = 0;
      kp.with("obj_battlecontroller", (KJ) => KJ.instance_destroy());
      kp.with("obj_herosusie", (KJ) => KJ.instance_destroy());
      kp.with("obj_herokris", (KJ) => KJ.instance_destroy());
      kp.with("obj_tensionbar", (KJ) => KJ.instance_destroy());
      kp.with("obj_lancerboss2", (KJ) => KJ.instance_destroy());
      kp.with("obj_bulletparent", (KJ) => KJ.instance_destroy());
      if (this.black && !this.black.destroyed) {
        this.black.instance_destroy();
      }
      let KC = kg(this.x + 30, this.y + 40, k1);
      KC.type = 1;
      KC.damage = 0;
      this.con = 54;
      this.alarm[4] = 120;
    }
    if (this.con === 55) {
      this.sprite_index = "spr_lancer_battle";
      this.image_index = 0;
      kU.typer = 32;
      kU.fc = 5;
      kU.fe = 12;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* S..^1. Susie...?/";
      kU.msg[1] = "* Y..^1. you missed.../%";
      ba(kk());
      this.con = 56;
    }
    if (this.con === 56 && !kp.exists("obj_writer")) {
      this.con = 57;
      kU.battleover = "win";
      k0();
    }
  }
};
kI(bD, "obj_lancerbattle2_event");
Y1(bD, "kinds", kh("obj_lancerbattle2_event", ku));
Y1(bD, "defaultDepth", 1000);
Y1(bD, "defaultSprite", "spr_lancer_battle");
var bg = bD;
var bI = class lU extends k3 {
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
      idlesprite: "spr_lancer_battle",
      hurtsprite: "spr_lancer_battle_hurt",
      sparedsprite: "spr_lancer_battle",
      hurtlevel: 0,
      hmake: 0,
      firstskip: 1,
      shakesine: 0,
      rtimer: 0,
      shakex: 0,
    });
    if (!kp.exists("obj_lancerbattle2_event")) {
      let Kw = kg(this.x, this.y, bg);
      Kw.depth = this.depth;
    }
  }
  userEvent(Kw) {
    if (Kw === 12) {
      kU.monsterx[this.myself] = this.x + this.sprite_width / 2;
      kU.monstery[this.myself] = this.y + this.sprite_height / 2;
    }
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.con++;
    }
  }
  step() {
    let Kw = this.myself;
    if (this.firstskip === 1) {
      kU.acting[0] = 1;
      this.acting = 1;
      kp.with("obj_writer", (KC) => KC.instance_destroy());
      kp.with("obj_face", (KC) => KC.instance_destroy());
      kp.with("obj_smallface", (KC) => KC.instance_destroy());
      if (kU.charaction[0] === 1) {
        kU.attacking = 1;
      }
      kU.charturn = v();
      kU.myfight = 3;
    }
    if (kU.monster[Kw] === 1) {
      kU.flag[51 + Kw] = 4;
      kU.acting[0] = 1;
      this.acting = 1;
      if (kU.mnfight === 1 && this.talked === 0) {
        this.actcon = 0;
        kr(this);
        if (!kp.exists("obj_darkener")) {
          kg(0, 0, kT);
        }
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && kU.mnfight === 1) {
        this.rtimer = 0;
        if (!kp.exists("obj_writer")) {
          kU.mnfight = 2;
        }
        if (kU.mnfight === 2) {
          if (!kp.exists("obj_moveheart") && this.hmake === 0) {
            kJ();
            this.hmake = 1;
          }
          if (!kp.exists("obj_growtangle")) {
            kg(320, 170, kw);
          }
        }
      }
      if (kU.mnfight === 2 && this.attacked === 0) {
        this.rtimer++;
        if (this.rtimer === 12) {
          kU.turntimer = 140;
          if (this.turns === 0 || this.turns === 2) {
            let KC = kg(this.x, this.y, d);
            KC.type = 20;
            KC.target = this.mytarget;
            KC.damage = kU.monsterat[Kw] * 5;
            if (kU.hp[kU.char[0]] <= 70) {
              KC.damage = kU.monsterat[Kw] * 3;
            }
            kU.turntimer = 180;
          }
          if (this.turns === 1) {
            let KJ = kg(this.x, this.y, d);
            KJ.type = 21;
            KJ.target = this.mytarget;
            KJ.damage = kU.monsterat[Kw] * 5;
            if (kU.hp[kU.char[0]] <= 70) {
              KJ.damage = kU.monsterat[Kw] * 3;
            }
            kU.turntimer = 180;
          }
          if (this.turns >= 3) {
            let KT = kg(this.x, this.y, d);
            KT.difficulty = this.turns * 2;
            if (this.turns === 6) {
              KT.difficulty = 30;
            }
            if (this.turns === 7) {
              KT.difficulty = 90;
            }
            KT.type = 24;
            KT.target = this.mytarget;
            KT.damage = kU.monsterat[Kw] * 5;
          }
          this.turns++;
          this.attacked = 1;
          kU.typer = 6;
          kU.fc = 0;
          kU.battlemsg[0] = "* ...";
        } else {
          kU.turntimer = 150;
        }
      }
      if (kU.mnfight === 2 && kU.turntimer <= 10) {
        this.hmake = 0;
      }
    }
    if (kU.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.firstskip = 0;
        kU.typer = 53;
        this.rr = kV(0, 1, 2, 3);
        this.actcon = 1;
        kU.msg = new Array(100).fill(" ");
        let Km = this.turns;
        if (Km === 0) {
          kU.msg[0] = "Hey, wanna&see what&happens to&traitors?/%";
        }
        if (Km === 1) {
          kU.msg[0] = "They.&Get.&Crushed./%";
        }
        if (Km === 2) {
          kU.msg[0] = "If you don't&get out of&the way.../";
          kU.msg[1] = "...I'll&kill you./%";
        }
        if (Km === 3) {
          kU.msg[0] = "Get it?&I'll KILL&you./%";
        }
        if (Km === 4) {
          kU.msg[0] = "Heh...&You missed,&idiot!/%";
        }
        if (Km === 5) {
          kU.msg[0] = "... wait, why&aren't you&fighting&back...?/%";
          kp.with("obj_herosusie", (Kr) => {
            Kr.idlesprite = "spr_susieb_idle_serious";
            Kr.attacksprite = "spr_susieb_attack_serious";
          });
        }
        if (Km === 6) {
          kU.msg[0] = "... Heh, you&think I&CARE?/";
          kU.msg[1] = "If you just&wanna lie&down and&die?/";
          kU.msg[2] = "You're just&making it&easier for&me!/%";
          kp.with("obj_herosusie", (Kr) => {
            Kr.idlesprite = "spr_susieb_idle";
            Kr.attacksprite = "spr_susieb_attack";
          });
        }
        if (Km === 7) {
          kU.typer = 54;
          kU.msg[0] = "........&Alright,&that's&enough./";
          kU.msg[1] = "If you&wanna die&so much.../";
          kU.msg[2] = "THEN DIE!/%";
          this.actcon = 2;
        }
        kU.monsterdf[Kw] -= 5;
        let KM = kp.first("obj_herosusie");
        let Kf = kW((KM ? KM.x : 120) + 100, KM ? KM.y : 140, 7);
        ba(Kf.mywriter);
        kp.with("obj_writer", (Kr) => {
          Kr.skippable = 0;
        });
      }
      if (this.actcon === 1 && !kp.exists("obj_writer")) {
        this.actcon = 0;
        g();
      }
      if (this.actcon === 2 && !kp.exists("obj_writer")) {
        kN();
        kQ("snd_laz_c");
        this.black = kH(-20, -20, "spr_pixel_white");
        this.black.image_blend = kF.black;
        this.black.depth = -10000;
        this.black.image_xscale = 900;
        this.black.image_yscale = 900;
        this.actcon = 3;
        this.acttimer = 0;
        let Kr = kp.first("obj_lancerbattle2_event");
        if (Kr) {
          Kr.black = this.black;
          Kr.con = 52;
          Kr.alarm[4] = 80;
        }
      }
    }
  }
  draw(Kw) {
    let KC = this.myself;
    if (this.state === 3) {
      this.shakesine = 0;
      this.siner = 0;
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (kU.monster[KC] === 0) {
          bd(this);
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
        if (kU.monsterhp[KC] / kU.monstermaxhp[KC] <= 0.65) {
          this.hurtlevel = 1;
        }
        if (kU.monsterhp[KC] / kU.monstermaxhp[KC] <= 0.2) {
          this.hurtlevel = 2;
        }
        Kw.draw_sprite_ext(
          this.hurtsprite,
          0,
          this.x + this.shakex * 2,
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
      this.shakesine++;
      this.siner++;
      let KJ = kn((kG(this.shakesine / 6) * this.hurtlevel) / 1.5);
      let KT = this.idlesprite;
      if (kU.mercymod[KC] >= kU.mercymax[KC]) {
        KT = this.sparedsprite;
      }
      Kw.draw_sprite_ext(KT, this.hurtlevel, this.x + KJ, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner++;
        Kw.draw_sprite_white(
          KT,
          this.hurtlevel,
          this.x,
          this.y,
          2,
          2,
          0,
          -kD(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
kI(bI, "obj_lancerboss2");
Y1(bI, "kinds", kh("obj_lancerboss2", k3));
Y1(bI, "defaultDepth", 90);
Y1(bI, "defaultSprite", "spr_lancer_battle");
var K0 = bI;
var K1 = class ly extends k3 {
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
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 1,
      con: 0,
      susie_act: 0,
      lancer_act: 0,
      defeated: 0,
      anythingcounter: 0,
      lancer_hurt: 0,
      susie_revive_count: 0,
      ears_blocked: 0,
      shakex: 0,
      attack_qual: 0,
    });
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.idlesprite = this.sprite_index;
  }
  userEvent(Kw) {
    if (Kw === 12) {
      kU.monsterx[this.myself] = this.x - 30;
      kU.monstery[this.myself] = this.y - this.sprite_height / 2 - 30;
    }
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.con++;
    }
  }
  attackQual() {
    let Kw = 0;
    if (kM() === 1) {
      Kw = 1;
    }
    kp.with("obj_susieenemy", (KC) => {
      if (KC.sleeping === 1) {
        Kw = 1;
      }
    });
    return Kw;
  }
  step() {
    let Kw = this.myself;
    if (this.defeated === 1 && kU.mnfight === 1) {
      kU.mnfight = 99;
      this.con = 1;
    }
    if (kU.monster[Kw] === 1 && this.defeated === 0) {
      kU.flag[51 + Kw] = 4;
      if (kU.mnfight === 1 && this.talked === 0) {
        if (kM() === 1 && (this.susie_revive_count++, this.susie_revive_count >= 3)) {
          if (this.myself !== 0 && kU.monsterinstancetype[0] && kU.monster[0] === 0) {
            kp.with("obj_susieandlancer_event", (Km) => {
              if (Km.s) {
                Km.s.visible = false;
              }
            });
            kU.monster[0] = 1;
            let KT = kg(kU.monstermakex[0], kU.monstermakey[0], kU.monsterinstancetype[0]);
            KT.myself = 0;
            kU.monsterinstance[0] = KT;
            KT.userEvent(12);
            KT.userEvent(1);
            if (kU.turntimer < 150) {
              kU.turntimer = 150;
            }
            kU.monsterhp[0] = 40;
            kQ("snd_power");
          }
          this.susie_revive_count = 0;
        }
        this.attack_qual = 1;
        kp.with("obj_susieenemy", (Km) => {
          if (Km.sleeping === 0 && kU.monster[Km.myself] === 1) {
            this.attack_qual = 0;
          }
        });
        if (this.attack_qual === 1) {
          kr(this);
          kU.targeted[this.mytarget] = 1;
        }
        if (!kp.exists("obj_darkener")) {
          kg(0, 0, kT);
        }
        kU.typer = 50;
        kU.msg = new Array(100).fill(" ");
        let KC = kV(0, 1, 2, 3);
        kU.msg[0] = "Hey!!&Hey Susie!!&Watch me,&watch me!!";
        if (KC === 1) {
          kU.msg[0] = "Prepare for&smashing, you&luxurious&melons!!!";
        }
        if (KC === 2) {
          kU.msg[0] = "Horror! Pain!&The power of&REAL bad guys!&(Nice, huh?)";
        }
        if (KC === 3) {
          kU.msg[0] = "This bike is&fueled by&EVIL! ...and&friendship!";
        }
        if (this.lancer_hurt === 0 && kU.monsterhp[Kw] <= kU.monstermaxhp[Kw] * 0.5) {
          this.lancer_hurt = 1;
          kU.msg[0] = "Ow^1, my&guts hurt!";
        }
        if (this.susie_act === 3) {
          kU.msg[0] = "Oh^1, what a&beautiful&song!!!";
        }
        if (this.susie_act === 9) {
          kU.msg[0] = "Don't worry&Bikey, I'll&put you to&bed soon...";
        }
        let KJ = this.anythingcounter;
        if (this.acting === 2) {
          if (KJ === 1) {
            kU.msg[0] = "Oh!!!&It's&working&on me!!!";
          }
          if (KJ === 2) {
            kU.msg[0] = "Thanks,&it's all&natural!";
          }
          if (KJ === 3) {
            kU.msg[0] = "Really!?&It's just&what I&wanted!!!";
          }
          if (KJ >= 4) {
            kU.msg[0] = "Hee hee!&I'm bliss-&-fully&ignorant!";
          }
        }
        if (this.acting === 3) {
          if (KJ === 1) {
            kU.msg[0] = "Oh!!!&It's&working&on me!!!";
          }
          if (KJ === 2) {
            kU.msg[0] = "Really!^1?&That's bad!";
          }
          if (KJ === 3) {
            kU.msg[0] = "Wow, I'll&look&amazing!!";
          }
          if (KJ >= 4) {
            kU.msg[0] = "Hee hee!&I'm bliss-&-fully&ignorant!";
          }
        }
        this.susie_act = 0;
        this.lancer_act = 0;
        kW(this.x - 235, this.y - 65, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && kU.mnfight === 1) {
        if (kR() && this.talktimer > 17) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          if (!kp.exists("obj_moveheart")) {
            kJ();
          }
          if (!kp.exists("obj_growtangle")) {
            kg(320, 170, kw);
          }
          kp.with("obj_writer", (Km) => Km.instance_destroy());
          kU.mnfight = 2;
        }
      }
      if (kU.mnfight === 2 && this.attacked === 0) {
        this.attack_qual = this.attackQual();
        if (this.attack_qual === 1) {
          let KM = kg(this.x, this.y, bx);
          this.bike = KM;
          this.visible = false;
          if (this.attacks === 0) {
            KM.racecon = 1;
            KM.target = this.mytarget;
            KM.damage = kU.monsterat[Kw] * 5;
            this.attacks = 1;
          } else {
            KM.lcon = 1;
            KM.target = this.mytarget;
            KM.damage = kU.monsterat[Kw] * 5;
            this.attacks = 0;
          }
          kU.turntimer = 999;
        }
        this.turns++;
        this.attacked = 1;
        let Km = kv(kn(5));
        kU.typer = 6;
        kU.fc = 0;
        kU.battlemsg[0] = bn[Km];
      }
    }
    if (kU.myfight === 3) {
      this.actStep();
    }
    if (this.con === 1) {
      this.alarm[4] = 5;
      this.con = 2;
    }
    if (this.con === 3) {
      kp.with("obj_susieenemy", (Kf) => {
        Kf.idlesprite = "spr_susie_enemy";
      });
      kU.typer = 46;
      kU.fe = 4;
      kU.fc = 5;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* Ow.../";
      bu(1, 9);
      kU.msg[2] = "* Hey^1, HEY^1! Enough's enough already!/";
      kU.msg[3] = "* If you hit him any more^1, you might really hurt him!/";
      kU.msg[4] = "\\E0* ... Lancer^1, you OK...?/";
      bN(5, 2);
      kU.msg[6] = "* I..^1. I'm fine^1, Susie!/";
      kU.msg[7] = "\\E7* My insides are just..^1. a little mixed up./";
      bu(8, 0);
      kU.msg[9] = "* Alright^1, fine^1! You guys win!/";
      bc(10, 6);
      kU.msg[11] = "* (Kris^1, maybe we should have taken it easier...)/%";
      if (kU.flag[249] === 1) {
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* Uh oh./";
        bu(1, 0);
        kU.msg[2] = "* What's wrong^1, dude?/";
        bN(3, 4);
        kU.msg[4] = "* I accidentally started liking the enemies...!/";
        kU.msg[5] = "\\E3* Now seeing them just makes me feel round and soft./";
        kU.msg[6] = "\\E4* Bad atmosphere for battle^1, though./";
        bu(7, 0);
        kU.msg[8] = "* .../";
        kU.msg[9] = "\\E1* Well^1, if you don't wanna fight,/";
        kU.msg[10] = "\\E0* There's no point^1, I guess./";
        kU.msg[11] = "\\E2* Battle's over!/%";
      }
      this.con = 4;
      bL();
      ba(kk());
    }
    if (this.con === 4 && !kp.exists("obj_writer")) {
      this.con = 5;
      this.alarm[4] = 2;
      kp.with("obj_battlecontroller", (Kf) => {
        Kf.noreturn = 0;
        Kf.alarm[2] = 4;
      });
    }
    if (this.con === 6) {
      kp.with("obj_susieandlancer_event", (Kf) => {
        if (Kf.l) {
          Kf.l.visible = true;
        }
      });
      kp.with("obj_monsterparent", (Kf) => {
        Kf.scr_monsterdefeat();
      });
      this.instance_destroy();
      this.con = 7;
    }
  }
  actStep() {
    let Kw = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* LANCER - AT 7 DF 1&* Watch out!!^1! He's boosted by friendship!/%";
      kY();
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.actcon = 1;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* You tried convincing Lancer not to fight./";
      kU.msg[1] = "* Lancer started to become convinced!/%";
      if (this.anythingcounter === 1) {
        kU.msg[0] = "* You tried telling Lancer you like his hair.../";
        kU.msg[1] = "* Lancer became even more convinced!/%";
      }
      if (this.anythingcounter === 2) {
        kU.msg[0] = "* You told Lancer you'd give him a picnic basket of worms./";
        kU.msg[1] = "* Lancer became almost fully convinced!/%";
      }
      if (this.anythingcounter >= 3) {
        kU.msg[0] = "* You told Lancer you just want to get along!/";
        kU.msg[1] = "* It's the decisive kindness!/%";
        if (this.ears_blocked >= 2) {
          kU.msg[0] = "* You told Lancer you want to get along really fast!/";
          kU.msg[1] = "* The soundwaves reached Lancer instantly!/%";
        }
        this.attack_qual = this.attackQual();
        if (this.attack_qual === 0) {
          this.actcon = 20;
          kp.with("obj_monsterparent", (KC) => {
            KC.ears_blocked = (KC.ears_blocked || 0) + 1;
          });
        } else {
          this.anythingcounter = 10;
        }
        if (this.ears_blocked >= 3) {
          this.anythingcounter = 10;
          this.actcon = 1;
          this.attack_qual = 1;
        }
      }
      if (this.anythingcounter < 4) {
        this.anythingcounter++;
      }
      kY();
    }
    if (this.acting === 3 && this.actcon === 0) {
      this.actcon = 1;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* You told Ralsei to compliment the enemies!/";
      bc(1, 8);
      kU.msg[2] = "* You two look like a really great team! I'm proud!/";
      bh(3);
      kU.msg[4] = "* (Lancer started to become a little convinced!)/%";
      if (this.anythingcounter === 1) {
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* You told Ralsei to logically best Lancer and Susie./";
        bc(1, 1);
        kU.msg[2] = "* You two^1, if we don't stop fighting, then.../";
        kU.msg[3] = "\\E6* ... Someone might get hurt!/";
        bh(4);
        kU.msg[5] = "* (Lancer became more convinced^1! It's working!)/%";
      }
      if (this.anythingcounter === 2) {
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* You told Ralsei to offer his services to the enemies!/";
        bc(1, 1);
        kU.msg[2] = "* You two^1, if we stop fighting^1, then I could^1, um.../";
        kU.msg[3] = "\\E8* I could braid your hair!/";
        bh(4);
        kU.msg[5] = "* (Lancer became almost fully convinced!)/%";
      }
      if (this.anythingcounter >= 3) {
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = "* You told Ralsei to deal the final blow of kindness!/";
        bc(1, 6);
        kU.msg[2] = "* In summary^1, I like you two^1, and.../";
        kU.msg[3] = "\\E8* I think we should all just get along!/%";
        if (this.ears_blocked >= 2) {
          kU.msg = new Array(100).fill(" ");
          kU.msg[0] = "* You told Ralsei to compliment Lancer really fast!/";
          bc(1, 0);
          kU.msg[2] = "* You'rereallyaswellpersonyouknowthat?!/";
          bh(3);
          kU.msg[4] = "* The soundwaves reached Lancer instantly!/%";
        }
        this.attack_qual = this.attackQual();
        if (this.attack_qual === 0) {
          this.actcon = 20;
          kp.with("obj_monsterparent", (KJ) => {
            KJ.ears_blocked = (KJ.ears_blocked || 0) + 1;
          });
        } else {
          this.anythingcounter = 10;
        }
        if (this.ears_blocked >= 3) {
          this.anythingcounter = 10;
          this.actcon = 1;
          this.attack_qual = 1;
        }
      }
      if (this.anythingcounter < 4) {
        this.anythingcounter++;
      }
      let KC = kp.first("obj_susieenemy");
      if (KC) {
        KC.anythingxcounter = this.anythingcounter;
        KC.lancer_act = 3;
      }
      bL();
      kY();
    }
    if (this.actcon === 1 && !kp.exists("obj_writer")) {
      this.actcon = 0;
      if (this.anythingcounter < 10) {
        g();
      } else {
        this.defeated = 1;
        kU.mnfight = 99;
        kU.myfight = 99;
        this.con = 1;
        kU.flag[249] = 1;
      }
    }
    if (this.actcon === 20 && !kp.exists("obj_writer")) {
      this.visible = false;
      kp.with("obj_susieenemy", (KJ) => {
        KJ.visible = false;
      });
      if (kM() === 1) {
        kp.with("obj_susieandlancer_event", (KJ) => {
          if (KJ.s) {
            KJ.s.visible = false;
          }
        });
      }
      this.blocklan = kH(this.x, this.y, "spr_lancerbike_earcover");
      this.blocklan.depth = this.depth;
      kQ("snd_bell");
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* (But Susie blocked the soundwaves before they reached Lancer!)/";
      bu(1, 2);
      kU.msg[2] = "* Try convincing someone that can't HEAR YOU!/%";
      bL();
      kY();
      this.actcon = 21;
    }
    if (this.actcon === 21 && !kp.exists("obj_writer")) {
      if (this.blocklan) {
        this.blocklan.instance_destroy();
      }
      this.visible = true;
      kp.with("obj_susieenemy", (KJ) => {
        KJ.visible = true;
      });
      if (kM() === 1) {
        kp.with("obj_susieandlancer_event", (KJ) => {
          if (KJ.s) {
            KJ.s.visible = true;
          }
        });
      }
      this.actcon = 1;
    }
  }
  draw(Kw) {
    let KC = this.myself;
    if (this.state === 3) {
      if (kU.monsterhp[KC] < kU.monstermaxhp[KC] / 4) {
        kp.with("obj_monsterparent", (KJ) => {
          KJ.defeated = 1;
        });
        kU.monsterhp[KC] = kU.monstermaxhp[KC] / 4;
      }
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (kU.monster[KC] === 0) {
          this.hspeed = 12;
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
        Kw.draw_sprite_ext(
          "spr_lancerbike_hurt",
          this.hurttimer / 2,
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
    if (this.state === 4) {
      this.dodgetimer++;
      let KJ = Math.cos((this.dodgetimer * 2 * Math.PI) / 15) * 2;
      Kw.draw_sprite_ext("spr_lancerbike_l", 0, this.x, this.y, KJ, 2, 0, this.image_blend, 1);
      if (this.dodgetimer >= 15) {
        this.state = 0;
      }
    }
    if (this.state === 0) {
      this.siner++;
      let KT = this.idlesprite;
      if (kU.mercymod[KC] >= kU.mercymax[KC]) {
        KT = this.idlesprite;
      }
      Kw.draw_sprite_ext(KT, this.siner / 5, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner++;
        Kw.draw_sprite_white(
          KT,
          this.siner / 5,
          this.x,
          this.y,
          2,
          2,
          0,
          -kD(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
kI(K1, "obj_lancerboss3");
Y1(K1, "kinds", kh("obj_lancerboss3", k3));
Y1(K1, "defaultDepth", 90);
Y1(K1, "defaultSprite", "spr_lancerbike");
var K2 = K1;
var K3 = [
  {
    id: "lancer",
    name: "Lancer",
    chapter: 1,
    area: "Field",
    desc: "Lancer busts in!#Bike attacks, ACTs.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: bG,
        type: 2,
        x: 540,
        y: 200,
        setup: bF,
      },
    ],
    battlemsg: "* Lancer busts in!",
    encounterno: 2,
    music: "battle",
  },
  {
    id: "lancer2",
    name: "Lancer (vs Susie)",
    chapter: 1,
    area: "Card Castle",
    desc: "Susie alone#against Lancer.#Scripted fight.",
    party: [2, 0, 0],
    heromakex: [120, 80, 80],
    heromakey: [140, 130, 210],
    monsters: [
      {
        cls: K0,
        type: 12,
        x: 480,
        y: 160,
        setup: bP,
      },
    ],
    battlemsg: "* Lancer blocked the way!",
    encounterno: 20,
    music: "battle",
  },
  {
    id: "lancer3",
    name: "Susie & Lancer",
    chapter: 1,
    area: "Card Castle",
    desc: "Two bad guys#blocked the way!#Susie and Lancer.",
    party: [1, 3, 0],
    heromakex: [80, 80, 80],
    heromakey: [100, 180, 210],
    monsters: [
      {
        cls: bZ,
        type: 19,
        x: 520,
        y: 80,
        setup: bJ,
      },
      {
        cls: K2,
        type: 18,
        x: 540,
        y: 240,
        setup: bR,
      },
    ],
    battlemsg: "* Two bad guys blocked the way!",
    encounterno: 31,
    music: "lancerfight",
  },
];
Y2(bG, "G.mnfight = 2;");
Y2(K0, "G.myfight = 3;G.mnfight = 2;");
Y2(K2, "G.mnfight = 99;G.mnfight = 2;G.mnfight = 99;G.myfight = 99;");
var K4 = {};
Y0(K4, {
  FIGHTS: () => Kb,
  SOUNDS: () => K6,
  SPRITES: () => K5,
  obj_ponman_enemy: () => KW,
  obj_spareanim: () => K8,
  scr_spareanim: () => K9,
  setupStats: () => Kk,
});
Y3();
var K5 = [
  "spr_ponman_idle",
  "spr_ponman_eye",
  "spr_ponman_appear",
  "spr_diamondbullet",
  "spr_ralseib_sing",
  "spr_sparestar_anim",
];
var K6 = ["snd_hurt1", "snd_ralseising1", "snd_ralseising2", "snd_spare"];
var K7 = class lB extends ku {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    kA("snd_spare");
    kQ("snd_spare");
  }
  draw(Kw) {
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      Kw.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x + this.afterimage * 4,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        0.7 - this.afterimage / 25,
      );
      Kw.draw_sprite_white(
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
        Kw.draw_sprite_ext(
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
      let KC = this.t / 5;
      if (KC > 1) {
        KC = 1;
      }
      Kw.draw_sprite_white(
        this.sprite_index,
        this.image_index,
        this.x,
        this.y,
        this.image_xscale,
        this.image_yscale,
        0,
        KC - this.tone / 5,
      );
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let KJ = 0; KJ < 2; KJ += 1) {
        let KT = kg(this.x + kn(this.sprite_width), this.y + kn(this.sprite_height), kb);
        KT.image_xscale = 2;
        KT.image_yscale = 2;
        KT.sprite_index = "spr_sparestar_anim";
        KT.image_alpha = 2;
        KT.image_speed = 0.25;
        KT.hspeed = -3;
        KT.gravity = 0.5;
        KT.gravity_direction = 0;
        this.star[this.starcount] = KT;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let Km = 0; Km < this.starcount; Km += 1) {
        let KM = this.star[Km];
        if (KM && !KM.destroyed) {
          KM.image_angle += 10;
          KM.image_alpha -= 0.1;
          if (KM.image_alpha <= 0) {
            KM.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && ((this.neotone += 1), this.neotone >= 30)) {
      for (let Kf = 0; Kf < this.starcount; Kf += 1) {
        let Kr = this.star[Kf];
        if (Kr && !Kr.destroyed) {
          Kr.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
kI(K7, "obj_spareanim");
Y1(K7, "kinds", kh("obj_spareanim", ku));
Y1(K7, "defaultDepth", 0);
var K8 = K7;
function K9(Kw) {
  let KC = kg(Kw.x, Kw.y, K8);
  KC.sprite_index = Kw.sprite_index;
  KC.sprite_index = Kw.sparedsprite;
  KC.image_index = 0;
  KC.image_xscale = Kw.image_xscale;
  KC.image_yscale = Kw.image_yscale;
}
kI(K9, "scr_spareanim");
function Kk(Kw) {
  kU.monstername[Kw] = "Ponman";
  kU.monstermaxhp[Kw] = 140;
  kU.monsterhp[Kw] = 140;
  kU.monsterat[Kw] = 7;
  kU.monsterdf[Kw] = 1;
  kU.monsterexp[Kw] = 0;
  kU.monstergold[Kw] = 23;
  kU.sparepoint[Kw] = 10;
  kU.mercymod[Kw] = 0;
  kU.mercymax[Kw] = 100;
  kU.canact[Kw][0] = 1;
  kU.actname[Kw][0] = "Check";
  kU.canact[Kw][1] = 1;
  kU.actname[Kw][1] = "Goodnight";
  kU.canact[Kw][2] = 1;
  kU.actname[Kw][2] = "Lullaby";
  kU.actactor[Kw][2] = 3;
  if (kB(2) && kU.plot < 150) {
    kU.canact[Kw][3] = 1;
    kU.actname[Kw][3] = "Warning";
    kU.actactor[Kw][3] = 3;
  }
}
kI(Kk, "setupStats");
var KY = class lZ extends k3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 60,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
      mywriter: null,
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
      eyex: 0,
      eyey: 0,
      eye_angle: 0,
      eye_radius: 0,
      ponman_eye: 0,
      image_xscale: 2,
      image_yscale: 2,
      addup: 0,
      eyecon: 0,
      spinspeed: 0,
      shotrefresh: 0,
      x_angle: 0,
      spintype: 0,
      shotbuffer: 0,
      grandbuffer: 0,
      shotcount: 0,
      totalshotcount: 0,
      pontotal: 1,
      maxtimer: 0,
      activetimer: 0,
      testtimer: 0,
      sleeping: 0,
      sleep_index: 5,
      becomesleep: 0,
      this_index: 0,
      lullabied: 0,
      idlesprite: "spr_ponman_idle",
      hurtsprite: "spr_ponman_idle",
      sparedsprite: "spr_ponman_appear",
      rtimer: 0,
      maxshot: 0,
      lullatimer: 0,
      ralsing: null,
      singy: null,
      shakex: 0,
    });
  }
  userEvent(Kw) {
    if (Kw === 12) {
      kU.monsterx[this.myself] = this.x + this.sprite_width / 2;
      kU.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (Kw !== 11 && Kw === 10) {
      K9(this);
      this.scr_monsterdefeat();
      this.instance_destroy();
    }
  }
  alarmEvent(Kw) {
    if (Kw === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let Kw = this.myself;
    if (kU.monster[Kw] === 1) {
      if (kU.mnfight === 1 && this.talked === 0) {
        if (kU.mercymod[Kw] < 100) {
          kr(this);
        }
        if (!kp.exists("obj_darkener")) {
          kg(0, 0, kT);
        }
        kU.typer = 50;
        kU.msg = new Array(100).fill(" ");
        kU.msg[0] = " ";
        let KC = kW(this.x - 160, this.y, 3);
        if (KC.mywriter) {
          KC.mywriter.instance_destroy();
        }
        KC.instance_destroy();
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && kU.mnfight === 1) {
        this.rtimer = 0;
        if (kR() && this.talktimer > 5) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          kp.with("obj_writer", (KJ) => KJ.instance_destroy());
          kU.mnfight = 2;
        }
        if (kU.mnfight === 2) {
          if (!kp.exists("obj_moveheart")) {
            kJ();
          }
          if (!kp.exists("obj_growtangle")) {
            kg(320, 170, kw);
          }
        }
      }
      if (kU.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          kU.turntimer = 150;
          this.pontotal = kM();
          for (let KT = 0; KT < 3; KT += 1) {
            if (kU.monster[KT] === 1 && kU.mercymod[KT] >= 100) {
              this.pontotal -= 1;
            }
          }
          if (this.pontotal === 3) {
            this.maxshot = 3;
          }
          if (this.pontotal === 2) {
            this.maxshot = 4;
          }
          if (this.pontotal === 1) {
            this.maxshot = 5;
          }
          if (this.pontotal <= 0) {
            kU.turntimer = 10;
            this.maxshot = 6;
          }
          this.shotcount = 0;
          this.totalshotcount = 0;
          this.activetimer = 1;
          this.shotbuffer = 8;
          if (kU.mercymod[Kw] < 100) {
            this.eyecon = 20;
          }
          this.turns += 1;
          this.attacked = 1;
          kU.typer = 6;
          kU.fc = 0;
          let KJ = kV(0, 1, 2, 3, 4);
          if (KJ === 0) {
            kU.battlemsg[0] = "* Ponman advances one step at a time.";
          }
          if (KJ === 1) {
            kU.battlemsg[0] = "* Ponman listens politely^1, despite having no ears.";
          }
          if (KJ === 2) {
            kU.battlemsg[0] = "* Ponman seems hypnotized by your idle animation.";
          }
          if (KJ === 3) {
            kU.battlemsg[0] = "* Ponman gazes enigmatically.";
          }
          if (KJ === 4) {
            kU.battlemsg[0] = "* Smells like a pawn shop.";
          }
          if (kU.monsterstatus[Kw] === 1) {
            kU.battlemsg[0] = "* Ponman can't keep its eye open.";
          }
          if (kU.monsterhp[Kw] <= kU.monstermaxhp[Kw] / 3) {
            kU.battlemsg[0] = "* Ponman looks dilated.";
          }
          if (kU.mercymod[Kw] >= kU.mercymax[Kw]) {
            kU.msg[0] = "* Ponman is sleeping soundly.";
          }
          if (kU.monstercomment[Kw] === "(Sleepy)") {
            kU.msg[0] = "* The enemies became SLEEPY from Ralsei's lullaby!";
          }
        } else {
          kU.turntimer = 120;
        }
      }
      if (kU.mnfight === 2 && kU.turntimer <= 1) {
        if (this.battlecancel === 1) {
          kf(Kw, 100);
        }
        if (this.battlecancel === 2) {
          kp.with("obj_battlecontroller", (Km) => {
            Km.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (kU.myfight === 3) {
      this.actStep();
    }
    if (kU.myfight === 7) {
      this.hspeed = 15;
    }
    if (this.sleeping === 1) {
      this.eyecon = 999;
    }
    if (this.eyecon === 0) {
      this.eye_angle = 180 + kG(this.siner / 8) * 30;
      if (this.eye_radius < 8) {
        this.eye_radius += 2;
      } else {
        this.eye_radius = 8;
      }
      if (this.addup === 0) {
        this.image_index = 1;
      } else {
        this.image_index = 3;
      }
      if (this.eye_angle > 200) {
        this.image_index = 0;
        this.addup = 1;
      }
      if (this.eye_angle < 160) {
        this.image_index = 2;
        this.addup = 0;
      }
    }
    if (this.eyecon === 10) {
      this.activetimer = 0;
      kp.with("obj_regularbullet", (Km) => {
        Km.active = 0;
        Km.image_alpha -= 0.1;
      });
      this.image_index = 0;
      this.eye_radius *= 0.7;
      if (kj(this.eye_radius) < 0.5) {
        this.eye_radius = 0;
        this.eye_angle = 0;
      }
      if (kU.turntimer <= 1) {
        this.eyecon = 0;
      }
    }
    if (this.eyecon === 20) {
      if (this.spinspeed < 10) {
        this.spinspeed += 1;
      }
      if (this.pontotal > 1) {
        this.siner += this.spinspeed / 8;
      } else {
        this.siner += this.spinspeed / 20;
      }
      this.eye_angle = 180 + kG(this.siner / 8) * 70;
      if (this.eye_radius < 8) {
        this.eye_radius += 1;
      }
      this.grandbuffer -= 1;
      let Km = kp.first("obj_heart");
      if (Km) {
        this.x_angle = kx(this.eyex + 28 + this.x, this.eyey + 32 + this.y, Km.x + 8, Km.y + 8);
      } else {
        this.x_angle = 0;
      }
      if (
        kj(this.x_angle - this.eye_angle) < 25 &&
        this.eye_angle >= 120 &&
        this.eye_angle <= 240 &&
        this.shotbuffer < 0 &&
        this.shotcount < 3 &&
        this.totalshotcount < this.maxshot
      ) {
        this.shotcount += 1;
        if (this.pontotal === 2) {
          this.shotcount += 1;
        }
        if (this.pontotal === 3) {
          this.shotcount += 1;
        }
        if (this.shotcount >= 3) {
          this.totalshotcount += 1;
          this.shotcount = 0;
          if (this.pontotal === 1) {
            this.shotbuffer = 10;
          }
          if (this.pontotal === 2) {
            this.shotbuffer = 13;
          }
          if (this.pontotal === 3) {
            this.shotbuffer = 22;
          }
        }
        if (this.totalshotcount >= this.maxshot) {
          this.maxtimer = 1;
        }
        kQ("snd_hurt1");
        let KM = kg(this.eyex + 28 + this.x, this.eyey + 32 + this.y, k7);
        if (!KM.destroyed) {
          KM.speed = 2;
          KM.timepoints = 2.5;
          KM.target = this.mytarget;
          KM.damage = kU.monsterat[Kw] * 5;
          KM.friction = -0.11;
          if (this.pontotal === 1) {
            KM.friction = -0.12;
          }
          KM.direction = this.eye_angle;
          KM.sprite_index = "spr_diamondbullet";
          KM.image_angle = KM.direction;
        }
      }
      if (this.maxtimer > 0) {
        this.maxtimer += 1;
      }
      if (kU.turntimer < 10) {
        this.eyecon = 10;
      }
    }
    this.siner += 1;
    this.shotbuffer -= 1;
    if (this.becomesleep === 1) {
      this.eyecon = 999;
      this.sleeping = 1;
      this.becomesleep = 0;
      this.sleep_index = 5;
    }
    if (this.eye_angle < 0) {
      this.eye_angle += 360;
    }
    if (this.eye_angle > 360) {
      this.eye_angle -= 360;
    }
    this.eyex = ko(this.eye_radius, this.eye_angle);
    this.eyey = kd(this.eye_radius, this.eye_angle);
  }
  actStep() {
    let Kw = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* PONMAN - AT 8 DF 0&* Its nucleus doubles as an eyespot./%";
      kY();
    }
    if (this.acting === 2 && this.actcon === 0) {
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* You whispered goodnight to Ponman^1.&* It fell asleep.../%";
      this.sleeping = 1;
      kf(Kw, 100);
      kY();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      if (this.lullabied === 0) {
        this.singy = kQ("snd_ralseising1");
        kp.with("obj_ponman_enemy", (KJ) => {
          KJ.lullabied = 1;
        });
      } else {
        this.singy = kQ("snd_ralseising2");
        kp.with("obj_ponman_enemy", (KJ) => {
          KJ.lullabied = 0;
        });
      }
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* Ralsei sang a soft and entrancing lullaby!/%";
      let KC = kp.first("obj_heroralsei");
      kp.with("obj_heroralsei", (KJ) => {
        KJ.visible = false;
      });
      if (KC) {
        this.ralsing = kH(KC.x, KC.y, "spr_ralseib_sing");
        this.ralsing.image_speed = 0.2;
      }
      this.lullatimer = 0;
      kY();
      this.actcon = 10;
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* You and Ralsei warned Ponman about Susie^1.&* The enemy went on guard.../%";
      if (kM() > 1) {
        kU.msg[0] =
          "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
      }
      for (let KJ = 0; KJ < 3; KJ += 1) {
        kU.monstercomment[KJ] = "(Warned)";
        kU.automiss[KJ] = 1;
      }
      kY();
    }
    if (this.actcon === 1 && !kp.exists("obj_writer")) {
      this.actcon = 0;
      g();
    }
    if (this.actcon === 10) {
      this.lullatimer += 1;
      if (this.lullatimer >= 30) {
        this.actcon = 11;
      }
    }
    if (this.actcon === 11 && kp.exists("obj_writer") === false) {
      if (this.ralsing && !this.ralsing.destroyed) {
        this.ralsing.instance_destroy();
      }
      kp.with("obj_heroralsei", (KT) => {
        KT.visible = true;
      });
      if (this.singy) {
        ka(this.singy);
        try {
          this.singy.currentTime = 0;
        } catch {}
        this.singy = null;
      }
      kU.msg = new Array(100).fill(" ");
      kU.msg[0] = "* PONMAN fell asleep^1!&* The enemies became TIRED!/%";
      if (kM() > 1 && kB(2)) {
        for (let KT = 0; KT < 3; KT += 1) {
          if (kU.char[KT] && ky(kU.char[KT]) === 2 && kU.charcond[KT] !== 5) {
            kU.charcond[KT] = 5;
            kU.faceaction[KT] = 9;
            kU.charmove[KT] = 0;
            kU.msg[0] =
              "* PONMAN fell asleep^1!&* SUSIE fell asleep^1!&* The enemies became TIRED!/%";
          }
        }
      }
      this.sleeping = 1;
      kf(Kw, 100);
      kp.with("obj_monsterparent", (Km) => {
        kU.monstercomment[Km.myself] = "(Sleepy)";
        kU.monsterstatus[Km.myself] = 1;
      });
      kY();
      this.actcon = 1;
    }
  }
  draw(Kw) {
    let KC = this.myself;
    if (this.state === 3) {
      if (kU.monsterhp[KC] <= kU.monstermaxhp[KC] / 3) {
        kU.monsterstatus[KC] = 1;
        if (kU.monstercomment[KC] === " ") {
          kU.monstercomment[KC] = "(Weak)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (kU.monster[KC] === 0) {
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        Kw.draw_sprite_ext(
          "spr_ponman_idle",
          0,
          this.x + this.shakex,
          this.y,
          2,
          2,
          0,
          this.image_blend,
          1,
        );
        if (this.sleeping === 0) {
          Kw.draw_sprite_ext(
            "spr_ponman_eye",
            0,
            this.x + 28 + this.eyex,
            this.y + 32 + this.eyey,
            2,
            2,
            0,
            kF.white,
            1,
          );
        }
        if (this.sleeping === 1) {
          kf(KC, -100);
          this.sprite_index = "spr_ponman_idle";
          this.image_index = 0;
          this.sleeping = 0;
        }
      }
    }
    if (this.state === 0) {
      let KJ = "spr_ponman_idle";
      this.this_index = this.image_index;
      if (this.sleeping === 1) {
        KJ = "spr_ponman_appear";
        this.this_index = this.sleep_index;
        if (this.sleep_index > 0.5) {
          this.sleep_index -= 0.25;
        }
      }
      Kw.draw_sprite_ext(KJ, this.this_index, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.sleeping === 0) {
        Kw.draw_sprite_ext(
          "spr_ponman_eye",
          0,
          this.x + 28 + this.eyex,
          this.y + 32 + this.eyey,
          2,
          2,
          0,
          kF.white,
          1,
        );
      }
      if (this.flash === 1) {
        this.fsiner += 1;
        Kw.draw_sprite_white(
          KJ,
          this.this_index,
          this.x,
          this.y,
          2,
          2,
          0,
          -kD(this.fsiner / 5) * 0.4 + 0.6,
        );
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
kI(KY, "obj_ponman_enemy");
Y1(KY, "kinds", kh("obj_ponman_enemy", k3));
Y1(KY, "defaultDepth", 90);
Y1(KY, "defaultSprite", "spr_ponman_idle");
var KW = KY;
var Kb = [
  {
    id: "ponman2",
    name: "Ponman x2",
    chapter: 1,
    area: "Field",
    desc: "Two Ponmen.#Eye-aimed diamonds.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: KW,
        type: 11,
        x: 480,
        y: 110,
        setup: Kk,
      },
      {
        cls: KW,
        type: 11,
        x: 500,
        y: 200,
        setup: Kk,
      },
    ],
    battlemsg: "* Ponman drew near!",
    encounterno: 13,
    music: "battle",
  },
  {
    id: "ponman3",
    name: "Ponman x3",
    chapter: 1,
    area: "Field",
    desc: "Three Ponmen.#Eye-aimed diamonds.",
    party: [1, 2, 3],
    heromakex: [80, 80, 80],
    heromakey: [50, 130, 210],
    monsters: [
      {
        cls: KW,
        type: 11,
        x: 480,
        y: 20,
        setup: Kk,
      },
      {
        cls: KW,
        type: 11,
        x: 500,
        y: 120,
        setup: Kk,
      },
      {
        cls: KW,
        type: 11,
        x: 460,
        y: 220,
        setup: Kk,
      },
    ],
    battlemsg: "* Ponman drew near!",
    encounterno: 14,
    music: "battle",
  },
];
Y2(KW, "G.mnfight = 2;");
var KK = [Y4, Yf, u, i, Yd, WA, bY, K4, n, h, bW];
var Kl = {
  cirno_baka: "mp3",
  cyber_battle_backing: "wav",
  cyber_battle_backing_solo: "wav",
  motor_swing_down: "wav",
  motor_swing_down_bc: "wav",
  motor_upper_2: "wav",
  motor_upper_2_bc: "wav",
  motor_upper_quick: "wav",
  motor_upper_quick_bc: "wav",
  motor_upper_quick_high: "wav",
  motor_upper_quick_high_bc: "wav",
  motor_upper_quick_mid: "wav",
  motor_upper_quick_mid_bc: "wav",
  mus_a2: "ogg",
  mus_alphysfix: "ogg",
  mus_amalgam: "ogg",
  mus_ambientwater: "ogg",
  mus_anothermedium: "ogg",
  mus_bad: "ogg",
  mus_badnote1: "wav",
  mus_badnote2: "wav",
  mus_badnote3: "wav",
  mus_barrier: "ogg",
  mus_battle1: "ogg",
  mus_battle2: "ogg",
  mus_bergentruckung: "ogg",
  mus_bgflameA: "ogg",
  mus_birdsong: "ogg",
  mus_boss1: "ogg",
  mus_cast_1: "ogg",
  mus_cast_2: "ogg",
  mus_cast_3: "ogg",
  mus_cast_4: "ogg",
  mus_cast_5: "ogg",
  mus_cast_6: "ogg",
  mus_cast_7: "ogg",
  mus_chime: "wav",
  mus_chokedup: "ogg",
  mus_churchbell: "ogg",
  mus_computer: "ogg",
  mus_coolbeat: "ogg",
  mus_core: "ogg",
  mus_core_ambience: "ogg",
  mus_create: "wav",
  mus_creepy_ambience: "ogg",
  mus_crickets: "ogg",
  mus_cymbal: "ogg",
  mus_dance_of_dog: "ogg",
  mus_date: "ogg",
  mus_date_fight: "ogg",
  mus_date_tense: "ogg",
  mus_deeploop2: "ogg",
  mus_dialup_0: "wav",
  mus_dialup_1: "wav",
  mus_dialup_2: "wav",
  mus_dialup_3: "wav",
  mus_dialup_4: "wav",
  mus_dialup_5: "wav",
  mus_disturbing: "ogg",
  mus_dogappear: "ogg",
  mus_dogmeander: "ogg",
  mus_dogroom: "ogg",
  mus_dogsong: "ogg",
  mus_dontgiveup: "ogg",
  mus_doorclose: "ogg",
  mus_dooropen: "ogg",
  mus_drone: "ogg",
  mus_drumcuica: "wav",
  mus_drumcuica2: "wav",
  mus_drumcymbal: "wav",
  mus_drumkick: "wav",
  mus_drumsnare: "wav",
  mus_dummybattle: "ogg",
  mus_dununnn: "ogg",
  mus_elevator: "ogg",
  mus_elevator_last: "ogg",
  mus_endarea_parta: "ogg",
  mus_endarea_partb: "ogg",
  mus_endingexcerpt1: "ogg",
  mus_endingexcerpt2: "ogg",
  mus_explosion: "wav",
  mus_express_myself: "ogg",
  mus_fallendown2: "ogg",
  mus_fearsting: "ogg",
  mus_flowey: "ogg",
  mus_f_6s_1: "ogg",
  mus_f_6s_2: "ogg",
  mus_f_6s_3: "ogg",
  mus_f_6s_4: "ogg",
  mus_f_6s_5: "ogg",
  mus_f_6s_6: "ogg",
  mus_f_alarm: "ogg",
  mus_f_destroyed: "ogg",
  mus_f_destroyed2: "ogg",
  mus_f_destroyed3: "ogg",
  mus_f_endnote: "wav",
  mus_f_finale_1: "ogg",
  mus_f_finale_1_l: "ogg",
  mus_f_finale_2: "ogg",
  mus_f_finale_3: "ogg",
  mus_f_glock: "wav",
  mus_f_intro: "ogg",
  mus_f_laugh: "wav",
  mus_f_newlaugh: "ogg",
  mus_f_newlaugh_low: "ogg",
  mus_f_noise: "wav",
  mus_f_orchhit: "wav",
  mus_f_orchhit_l: "wav",
  mus_f_part1: "ogg",
  mus_f_part2: "ogg",
  mus_f_part3: "ogg",
  mus_f_saved: "ogg",
  mus_f_wind1: "ogg",
  mus_f_wind2: "ogg",
  mus_gameover: "ogg",
  mus_ghostbattle: "ogg",
  mus_harpnoise: "ogg",
  mus_hereweare: "ogg",
  mus_hotel: "ogg",
  mus_hotel_battle: "ogg",
  mus_house1: "ogg",
  mus_house2: "ogg",
  mus_intronoise: "ogg",
  mus_kingdescription: "ogg",
  mus_lab: "ogg",
  mus_leave: "ogg",
  mus_menu1: "ogg",
  mus_menu2: "ogg",
  mus_menu3: "ogg",
  mus_menu4: "ogg",
  mus_mettafly: "ogg",
  mus_mettatonbattle: "ogg",
  mus_mettaton_ex: "ogg",
  mus_mettaton_neo: "ogg",
  mus_mettaton_pretransform: "ogg",
  mus_mettmusical1: "ogg",
  mus_mettmusical2: "ogg",
  mus_mettmusical3: "ogg",
  mus_mettmusical4: "ogg",
  mus_mettsad: "ogg",
  mus_mettsmash: "wav",
  mus_mett_applause: "ogg",
  mus_mett_cheer: "ogg",
  mus_mode: "ogg",
  mus_mtgameshow: "ogg",
  mus_mt_yeah: "wav",
  mus_muscle: "ogg",
  mus_musicbox: "ogg",
  mus_myemeow: "ogg",
  mus_mysteriousroom2: "ogg",
  mus_mystery: "ogg",
  mus_napstachords: "ogg",
  mus_napstahouse: "ogg",
  mus_news: "ogg",
  mus_news_battle: "ogg",
  mus_note1: "wav",
  mus_note2: "wav",
  mus_note3: "wav",
  mus_note4: "wav",
  mus_note5: "wav",
  mus_note6: "wav",
  mus_ohyes: "ogg",
  mus_oogloop: "ogg",
  mus_operatile: "ogg",
  mus_options_fall: "ogg",
  mus_options_summer: "ogg",
  mus_options_winter: "ogg",
  mus_papyrus: "ogg",
  mus_papyrusboss: "ogg",
  mus_piano: "ogg",
  mus_piano1: "wav",
  mus_piano2: "wav",
  mus_piano3: "wav",
  mus_piano4: "wav",
  mus_piano5: "wav",
  mus_piano6: "wav",
  mus_piano7: "wav",
  mus_piano8: "wav",
  mus_piano9: "wav",
  mus_pianoA: "wav",
  mus_prebattle1: "ogg",
  mus_predummy: "ogg",
  mus_race: "ogg",
  mus_rain: "ogg",
  mus_rain_deep: "ogg",
  mus_repeat_1: "ogg",
  mus_repeat_2: "ogg",
  mus_reunited: "ogg",
  mus_rimshot: "ogg",
  mus_rotate: "wav",
  mus_ruins: "ogg",
  mus_ruinspiano: "ogg",
  mus_sansdate: "ogg",
  mus_sfx_abreak: "wav",
  mus_sfx_abreak2: "wav",
  mus_sfx_ahh: "wav",
  mus_sfx_a_bullet: "wav",
  mus_sfx_a_gigatalk: "wav",
  mus_sfx_a_grab: "ogg",
  mus_sfx_a_lithit: "wav",
  mus_sfx_a_lithit2: "wav",
  mus_sfx_a_pullback: "wav",
  mus_sfx_a_swipe: "wav",
  mus_sfx_a_swordappear: "wav",
  mus_sfx_a_target: "wav",
  mus_sfx_bookspin: "wav",
  mus_sfx_chainsaw: "ogg",
  mus_sfx_cinematiccut: "wav",
  mus_sfx_eyeflash: "wav",
  mus_sfx_frypan: "wav",
  mus_sfx_generate: "wav",
  mus_sfx_gigapunch: "wav",
  mus_sfx_gunshot: "wav",
  mus_sfx_hypergoner_charge: "ogg",
  mus_sfx_hypergoner_laugh: "ogg",
  mus_sfx_oh: "wav",
  mus_sfx_rainbowbeam_1: "wav",
  mus_sfx_rainbowbeam_hold: "ogg",
  mus_sfx_segapower: "wav",
  mus_sfx_segapower2: "wav",
  mus_sfx_sparkles: "wav",
  mus_sfx_spellcast: "wav",
  mus_sfx_star: "wav",
  mus_sfx_swipe: "wav",
  mus_sfx_ted: "wav",
  mus_sfx_voice_jafe: "wav",
  mus_sfx_voice_ted: "wav",
  mus_sfx_voice_triple: "wav",
  mus_sfx_yowl: "wav",
  mus_shop: "ogg",
  mus_sigh_of_dog: "ogg",
  mus_silence: "ogg",
  mus_singF: "wav",
  mus_singG: "wav",
  mus_singvoice: "wav",
  mus_smallshock: "ogg",
  mus_snoresymphony: "ogg",
  mus_snowwalk: "ogg",
  mus_snowy: "ogg",
  mus_spider: "ogg",
  mus_spoopy: "ogg",
  mus_spoopy_holiday: "ogg",
  mus_spoopy_wave: "ogg",
  mus_star: "ogg",
  mus_sticksnap: "ogg",
  mus_story: "ogg",
  mus_story_stuck: "ogg",
  mus_temshop: "ogg",
  mus_temvillage: "ogg",
  mus_tension: "ogg",
  mus_tone2: "ogg",
  mus_tone3: "ogg",
  mus_toomuch: "ogg",
  mus_toriel: "ogg",
  mus_town: "ogg",
  mus_tv: "ogg",
  mus_undyneboss: "ogg",
  mus_undynefast: "ogg",
  mus_undynepiano: "ogg",
  mus_undynescary: "ogg",
  mus_undynetheme: "ogg",
  mus_undynetruetheme: "ogg",
  mus_vsasgore: "ogg",
  mus_waterfall: "ogg",
  mus_waterquiet: "ogg",
  mus_wawa: "ogg",
  mus_whoopee: "ogg",
  mus_wind: "ogg",
  mus_woofenstein: "ogg",
  mus_woofenstein_loop: "ogg",
  mus_wrongworld: "ogg",
  mus_xpart: "ogg",
  mus_xpart_2: "ogg",
  mus_xpart_a: "ogg",
  mus_xpart_b: "ogg",
  mus_xpart_back: "ogg",
  mus_x_undyne: "ogg",
  mus_x_undyne_pre: "ogg",
  mus_yourbestfriend_3: "ogg",
  mus_zzz_c: "ogg",
  mus_zzz_c2: "ogg",
  mus_zz_megalovania: "ogg",
  mus_z_ending: "ogg",
  punch_ish_1: "wav",
  punch_ish_1_bc: "wav",
  rhythm_battle_snare: "wav",
  sfx_coin_chefs: "wav",
  shadowman_sax_long_1: "wav",
  shadowman_sax_long_2: "wav",
  shadowman_sax_long_3: "wav",
  shadowman_sax_long_4: "wav",
  shadowman_sax_long_solo_note: "wav",
  snd_acquire_lancer: "wav",
  snd_applause: "wav",
  snd_applause_single: "wav",
  snd_arrow: "wav",
  snd_audience_aww: "wav",
  snd_awkward: "wav",
  snd_b: "wav",
  "snd_b@chut": "wav",
  snd_badexplosion: "wav",
  snd_bageldefeat: "wav",
  snd_barrel_jump: "wav",
  snd_battleenter: "wav",
  snd_battlefall: "wav",
  snd_bell: "wav",
  "snd_bell@chut": "wav",
  snd_bell_bc: "wav",
  snd_bell_bounce_short: "wav",
  snd_bigscore: "wav",
  snd_birdtweet: "wav",
  snd_block2: "wav",
  snd_bluh: "wav",
  snd_board_bomb: "wav",
  snd_board_bosshit: "wav",
  snd_board_damage: "wav",
  snd_board_door_close: "wav",
  snd_board_kill: "wav",
  snd_board_lift: "wav",
  snd_board_mantle_dash_fast: "wav",
  snd_board_mantle_dash_prepare: "wav",
  snd_board_mantle_dash_slow: "wav",
  snd_board_mantle_laugh_mid: "wav",
  snd_board_mantle_move: "wav",
  snd_board_mantle_unknown_a: "wav",
  snd_board_mantle_unknown_b: "wav",
  snd_board_playerhurt: "wav",
  snd_board_splash: "wav",
  snd_board_summon: "wav",
  snd_board_sword1: "wav",
  snd_board_sword2: "wav",
  snd_board_sword3: "wav",
  snd_board_sword_metal: "wav",
  snd_board_text_main: "wav",
  snd_board_text_main_end: "wav",
  snd_board_throw: "wav",
  snd_board_torch: "wav",
  snd_board_torch_high: "wav",
  snd_board_unsummon: "wav",
  snd_bomb: "wav",
  "snd_bomb@chut": "wav",
  snd_bombfall: "wav",
  snd_boost: "wav",
  snd_boxing_fight: "wav",
  snd_boxing_fight_bc: "wav",
  snd_boxing_round1: "wav",
  snd_boxing_round1_bc: "wav",
  snd_boxing_round2: "wav",
  snd_boxing_round3: "wav",
  snd_break1: "wav",
  "snd_break1@chut": "wav",
  snd_break2: "wav",
  "snd_break2@chut": "wav",
  snd_breaka: "wav",
  snd_breakb: "wav",
  snd_breakc: "wav",
  snd_bump: "wav",
  snd_bwaap: "wav",
  snd_camera_flash: "wav",
  snd_cardrive: "wav",
  snd_cardrive_bc: "wav",
  snd_carhonk: "wav",
  snd_catsalad: "wav",
  snd_chain_extend: "wav",
  snd_chain_extend_bc: "wav",
  snd_chain_wave: "wav",
  snd_chargeshot_charge: "wav",
  snd_chargeshot_fire: "wav",
  snd_chug: "wav",
  snd_coaster_kiss: "wav",
  snd_coin: "wav",
  snd_credit_s: "wav",
  snd_creepyjingle: "wav",
  snd_criticalswing: "wav",
  snd_criticalswing_bc: "wav",
  snd_crow: "wav",
  snd_crowd: "wav",
  snd_crowd_aah: "wav",
  snd_crowd_cheer_single: "wav",
  snd_crowd_laughter_loop: "wav",
  snd_crowd_laughter_single: "wav",
  snd_crowd_ooh: "wav",
  snd_crowngrowth: "wav",
  snd_crownshrink: "wav",
  snd_dadblast: "wav",
  snd_dadlaugh: "wav",
  snd_dadtxt: "wav",
  snd_damage: "wav",
  "snd_damage@chut": "wav",
  snd_damage_bc: "wav",
  snd_deathnoise: "wav",
  snd_defeatrun: "wav",
  snd_dimbox: "wav",
  snd_doghurt1: "wav",
  snd_dogresidue: "wav",
  snd_dogsalad: "wav",
  snd_doorclose: "wav",
  snd_dooropen: "wav",
  snd_drake_dodge: "wav",
  snd_drive: "wav",
  snd_drumroll: "wav",
  snd_dumbvictory: "wav",
  snd_egg: "wav",
  snd_ehurt1: "wav",
  "snd_ehurt1@chut": "wav",
  snd_electric_meow: "wav",
  snd_electric_talk: "wav",
  snd_equip: "wav",
  snd_error: "wav",
  snd_escaped: "wav",
  "snd_escaped@chut": "wav",
  snd_explosion: "wav",
  snd_explosion_8bit: "wav",
  snd_explosion_firework: "wav",
  snd_explosion_firework_bc: "wav",
  snd_explosion_mmx: "wav",
  snd_explosion_mmx3: "wav",
  snd_face_hit: "wav",
  snd_fall: "wav",
  snd_fall_cool_deep: "wav",
  snd_floweylaugh: "wav",
  snd_floweytalk1: "wav",
  snd_floweytalk2: "wav",
  snd_foodscore: "wav",
  snd_ftext_bounce: "wav",
  snd_ftext_brother: "wav",
  snd_ftext_dark_fountain: "wav",
  snd_ftext_enter: "wav",
  snd_ftext_gunshot: "wav",
  snd_ftext_names: "wav",
  snd_ftext_prize: "wav",
  snd_ftext_susiezilla: "wav",
  snd_ftext_toriel: "wav",
  snd_ftext_vibraphones: "wav",
  snd_ftext_woodblock: "wav",
  snd_glassbreak: "wav",
  snd_grab: "wav",
  "snd_grab@chut": "wav",
  snd_grandpatemi: "wav",
  snd_graze: "wav",
  snd_graze_bc: "wav",
  snd_guitarerror: "wav",
  snd_guitarerror2: "wav",
  snd_guitarpickup1: "wav",
  snd_guitarpickup2: "wav",
  snd_guitarpickup3: "wav",
  snd_guitarpickup4: "wav",
  snd_gunshot: "wav",
  snd_gunshot_b: "wav",
  snd_heal_c: "wav",
  snd_heartshot: "wav",
  snd_heartshot_dr: "wav",
  snd_heartshot_dr_b: "wav",
  snd_heavyswing: "wav",
  snd_heavyswing_bc: "wav",
  snd_heavy_passing: "wav",
  snd_hero: "wav",
  snd_hit: "wav",
  "snd_hit@chut": "wav",
  snd_howl: "wav",
  snd_hurt1: "wav",
  "snd_hurt1@chut": "wav",
  snd_hurt1_bc: "wav",
  snd_hurtbeef: "wav",
  snd_hurtbig: "wav",
  snd_hurtbuzz: "wav",
  snd_hurtdragon: "wav",
  snd_hurtgirl: "wav",
  snd_hurtlaugh: "wav",
  snd_hypnosis: "wav",
  snd_impact: "wav",
  "snd_impact@chut": "wav",
  snd_impact_bc: "wav",
  snd_item: "wav",
  "snd_item@chut": "wav",
  snd_joker_anything: "wav",
  snd_joker_byebye: "wav",
  snd_joker_chaos: "wav",
  snd_joker_ha0: "wav",
  snd_joker_ha1: "wav",
  snd_joker_laugh0: "wav",
  snd_joker_laugh1: "wav",
  snd_joker_metamorphosis: "wav",
  snd_joker_neochaos: "wav",
  snd_joker_oh: "wav",
  snd_jump: "wav",
  snd_jump_bc: "wav",
  snd_knight_boxbreak: "wav",
  snd_knight_cut: "wav",
  snd_knight_cut2: "wav",
  snd_knight_drawpower: "wav",
  snd_knight_fallingsword_big: "wav",
  snd_knight_hurt: "wav",
  snd_knight_hurtb: "wav",
  snd_knight_jump: "wav",
  snd_knight_jump_quick: "wav",
  snd_knight_powerup_white: "wav",
  snd_knight_puff: "wav",
  snd_knight_roar: "wav",
  snd_knight_rotatingslash_line: "wav",
  snd_knight_star_explosion_close: "wav",
  snd_knight_stretch: "wav",
  snd_knight_teleport: "wav",
  snd_knock: "wav",
  "snd_knock@chut": "wav",
  snd_lancerhonk: "wav",
  snd_lancerlaugh: "wav",
  snd_lancerwhistle: "wav",
  snd_laughtrack_short_temp: "wav",
  snd_laz: "wav",
  snd_laz_c: "wav",
  snd_levelup: "wav",
  "snd_levelup@chut": "wav",
  snd_link_secret_bad: "wav",
  snd_locker: "wav",
  snd_magicmarker: "wav",
  snd_magicsprinkle: "wav",
  snd_menumove: "wav",
  snd_mercyadd: "wav",
  snd_metalhit: "wav",
  snd_metalhit_bc: "wav",
  snd_metal_hit: "wav",
  snd_metal_hit_guard: "wav",
  snd_metal_hit_reverb: "wav",
  snd_motor_swing_down: "wav",
  snd_motor_upper_2: "wav",
  snd_mtt1: "wav",
  snd_mtt2: "wav",
  snd_mtt3: "wav",
  snd_mtt4: "wav",
  snd_mtt5: "wav",
  snd_mtt6: "wav",
  snd_mtt7: "wav",
  snd_mtt8: "wav",
  snd_mtt9: "wav",
  snd_mtt_burst: "wav",
  snd_mtt_hit: "wav",
  snd_mtt_prebomb: "wav",
  snd_noise: "wav",
  "snd_noise@chut": "wav",
  snd_nosound: "wav",
  "snd_nosound@chut": "wav",
  snd_object_passing: "wav",
  snd_orchhit: "wav",
  snd_petrify: "wav",
  snd_phone: "wav",
  "snd_phone@chut": "wav",
  snd_pianonoise: "wav",
  snd_pinball: "wav",
  snd_pirouette: "wav",
  snd_pombark: "wav",
  "snd_pombark@chut": "wav",
  snd_power: "wav",
  "snd_power@chut": "wav",
  snd_punchheavythunder: "wav",
  snd_punchheavythunder_bc: "wav",
  snd_punchmed: "wav",
  snd_punchmed_bc: "wav",
  snd_punchstrong: "wav",
  snd_punchweak: "wav",
  "snd_punchweak@chut": "wav",
  snd_punch_ish_1: "wav",
  snd_quake_nes: "wav",
  snd_queenhowl_b: "wav",
  snd_queenhowl_b_bc: "wav",
  snd_queen_bitcrushlaugh: "wav",
  snd_queen_gasp: "wav",
  snd_queen_hoot_0: "wav",
  snd_queen_hoot_1: "wav",
  snd_queen_hoot_2: "wav",
  snd_queen_laugh_0: "wav",
  snd_queen_laugh_0_bc: "wav",
  snd_queen_punched_lower: "wav",
  snd_queen_punched_lower_heavy: "wav",
  snd_ralseising1: "wav",
  snd_ralseising2: "wav",
  snd_reverse_spare: "wav",
  snd_rimshot: "wav",
  snd_rocket: "wav",
  snd_rocket_bc: "wav",
  snd_rocket_long: "wav",
  snd_rocket_sneo: "wav",
  snd_rudebuster_hit: "wav",
  snd_rudebuster_swing: "wav",
  snd_rumble: "wav",
  snd_saber3: "wav",
  snd_scissorbell: "wav",
  snd_screenshake: "wav",
  snd_screenshake_bc: "wav",
  snd_scytheburst: "wav",
  snd_scytheburst_bc: "wav",
  snd_select: "wav",
  "snd_select@chut": "wav",
  snd_shadowpendant: "wav",
  snd_shakerbreaker: "wav",
  snd_shineselect: "wav",
  snd_shinka_ambience: "wav",
  snd_shock: "wav",
  snd_slidewhist: "wav",
  snd_slidewhistle: "wav",
  snd_smallswing: "wav",
  snd_smashreveal: "wav",
  snd_snd_motor_upper_quick_high: "wav",
  snd_sneo_laugh_long: "wav",
  snd_sneo_overpower: "wav",
  snd_sonar: "wav",
  snd_spamton_laugh: "wav",
  snd_spare: "wav",
  snd_sparkle1: "wav",
  snd_sparkle_gem: "wav",
  snd_sparkle_glock: "wav",
  snd_spearappear: "wav",
  "snd_spearappear@chut": "wav",
  snd_spearappear_choppy: "wav",
  snd_spearrise: "wav",
  "snd_spearrise@chut": "wav",
  snd_speedup: "wav",
  snd_spellcast: "wav",
  snd_spell_cure_slight_smaller: "wav",
  snd_splat: "wav",
  snd_spooky: "wav",
  snd_squeak: "wav",
  snd_squeaky: "wav",
  snd_squeaky_bc: "wav",
  snd_stardrop: "wav",
  snd_step1: "wav",
  snd_step2: "wav",
  snd_suslaugh: "wav",
  snd_sussurprise: "wav",
  snd_swallow: "wav",
  "snd_swallow@chut": "wav",
  snd_swing: "wav",
  snd_switchpull_n: "wav",
  snd_tearcard: "wav",
  snd_tem: "wav",
  snd_tem2: "wav",
  snd_tem3: "wav",
  snd_tem4: "wav",
  snd_tem5: "wav",
  snd_tem6: "wav",
  snd_tensionhorn: "wav",
  snd_text: "wav",
  snd_tm_quiz_a: "wav",
  snd_tm_quiz_b: "wav",
  snd_tm_quiz_c: "wav",
  snd_tm_quiz_d: "wav",
  snd_toilet: "wav",
  snd_tvturnoff: "wav",
  snd_tvturnoff2: "wav",
  snd_tv_alarm: "wav",
  snd_tv_static: "wav",
  snd_tv_voice_short: "wav",
  snd_tv_voice_short_10: "wav",
  snd_tv_voice_short_2: "wav",
  snd_tv_voice_short_3: "wav",
  snd_tv_voice_short_4: "wav",
  snd_tv_voice_short_5: "wav",
  snd_tv_voice_short_6: "wav",
  snd_tv_voice_short_7: "wav",
  snd_tv_voice_short_8: "wav",
  snd_tv_voice_short_9: "wav",
  SND_TXT1: "wav",
  SND_TXT2: "wav",
  snd_txtal: "wav",
  "snd_txtal@chut": "wav",
  snd_txtasg: "wav",
  "snd_txtasg@chut": "wav",
  snd_txtasr: "wav",
  snd_txtasr2: "wav",
  snd_txtber: "wav",
  snd_txtecho: "wav",
  snd_txtjok: "wav",
  snd_txtlan: "wav",
  snd_txtnoe: "wav",
  snd_txtpap: "wav",
  "snd_txtpap@chut": "wav",
  snd_txtq: "wav",
  snd_txtq_2: "wav",
  snd_txtral: "wav",
  snd_txtrud: "wav",
  snd_txtrx1: "wav",
  snd_txtsans: "wav",
  snd_txtsans2: "wav",
  "snd_txtsans@chut": "wav",
  snd_txtspam: "wav",
  snd_txtspam2: "wav",
  snd_txtsus: "wav",
  snd_txtsusral: "wav",
  snd_txttor: "wav",
  snd_txttor2: "wav",
  "snd_txttor@chut": "wav",
  snd_txtund: "wav",
  snd_txtund2: "wav",
  snd_txtund3: "wav",
  snd_txtund4: "wav",
  "snd_txtund@chut": "wav",
  snd_txtund_hyper: "wav",
  snd_ultraswing: "wav",
  snd_ultraswing_bc: "wav",
  snd_vaporized: "wav",
  snd_victor: "wav",
  snd_vulkinhurt: "wav",
  snd_wallclaw: "wav",
  snd_weaponpull_fast: "wav",
  snd_weirdeffect: "wav",
  snd_whip_crack_only: "wav",
  snd_whip_hard: "wav",
  snd_whip_throw_only: "wav",
  snd_whistlebreath: "wav",
  snd_wideslash_low: "wav",
  snd_wing: "wav",
  snd_wngdng1: "wav",
  snd_wngdng2: "wav",
  snd_wngdng3: "wav",
  snd_wngdng4: "wav",
  snd_wngdng5: "wav",
  snd_wngdng6: "wav",
  snd_wngdng7: "wav",
  snd_won: "wav",
  snd_wrongvictory: "wav",
  snd_yeah: "wav",
  a2: "ogg",
  acid_tunnel: "ogg",
  alarm_titlescreen: "ogg",
  alley_ambience: "ogg",
  alphysfix: "ogg",
  amalgam: "ogg",
  ambientwater: "ogg",
  ambientwater_weird: "ogg",
  anothermedium: "ogg",
  april_2012: "ogg",
  AUDIO_ANOTHERHIM: "ogg",
  AUDIO_DARKNESS: "ogg",
  AUDIO_DEFEAT: "ogg",
  AUDIO_DRONE: "ogg",
  AUDIO_STORY: "ogg",
  baci_distort: "ogg",
  baci_perugina: "ogg",
  bad: "ogg",
  barrier: "ogg",
  basement: "ogg",
  battle: "ogg",
  battle1: "ogg",
  battle2: "ogg",
  battle_vapor: "ogg",
  berdly_audience: "ogg",
  berdly_battle_heartbeat_true: "ogg",
  berdly_chase: "ogg",
  berdly_descend: "ogg",
  berdly_flashback: "ogg",
  berdly_theme: "ogg",
  bergentruckung: "ogg",
  bgflameA: "ogg",
  bird: "ogg",
  birdnoise: "ogg",
  birdsong: "ogg",
  board4_rhythm: "ogg",
  board_4: "ogg",
  board_4_challenge: "ogg",
  board_lancer_dig: "ogg",
  board_ocean: "ogg",
  board_sword_music: "ogg",
  board_zelda: "ogg",
  boss1: "ogg",
  boxing_boss: "ogg",
  boxing_game: "ogg",
  card_castle: "ogg",
  castletown: "ogg",
  castletown_empty: "ogg",
  cast_1: "ogg",
  cast_2: "ogg",
  cast_3: "ogg",
  cast_4: "ogg",
  cast_5: "ogg",
  cast_6: "ogg",
  cast_7: "ogg",
  ch2_credits: "ogg",
  "ch3-practice_song_combined": "ogg",
  "ch3-practice_song_noguit": "ogg",
  ch3_board2: "ogg",
  ch3_board3: "ogg",
  ch3_karaoke_example_guit_only: "ogg",
  ch3_karaoke_example_noguit: "ogg",
  ch3_karaoke_full: "ogg",
  ch3_karaoke_no_guitar: "ogg",
  ch3_south_of_the_border: "ogg",
  ch3_tvtime: "ogg",
  ch3_tvtime_guitar: "ogg",
  charjoined: "ogg",
  checkers: "ogg",
  chokedup: "ogg",
  churchbell: "ogg",
  computer: "ogg",
  confession: "ogg",
  coolbeat: "ogg",
  "coolbeat@chut": "ogg",
  core: "ogg",
  core_ambience: "ogg",
  creepychase: "ogg",
  creepydoor: "ogg",
  creepylandscape: "ogg",
  creepy_ambience: "ogg",
  crickets: "ogg",
  cyber: "ogg",
  cybercity: "ogg",
  cybercity_alt: "ogg",
  cyberhouse: "ogg",
  cybershop_christmas: "ogg",
  cyber_battle_end: "ogg",
  cyber_battle_prelude: "ogg",
  cyber_shop: "ogg",
  cymbal: "ogg",
  d: "ogg",
  dance_of_dog: "ogg",
  date: "ogg",
  date_fight: "ogg",
  date_tense: "ogg",
  deeploop2: "ogg",
  deep_noise: "ogg",
  deltarune_logo_ch5_itoki: "ogg",
  dogappear: "ogg",
  dogcheck: "ogg",
  dogmeander: "ogg",
  dogroom: "ogg",
  "dogroom@chut": "ogg",
  dogsong: "ogg",
  dontforget: "ogg",
  dontgiveup: "ogg",
  doorclose: "ogg",
  dooropen: "ogg",
  drone: "ogg",
  dummybattle: "ogg",
  dununnn: "ogg",
  elevator: "ogg",
  "elevator@chut": "ogg",
  elevator_last: "ogg",
  endarea_parta: "ogg",
  endarea_partb: "ogg",
  endingexcerpt1: "ogg",
  endingexcerpt2: "ogg",
  express_myself: "ogg",
  fallendown2: "ogg",
  fanfare: "ogg",
  fearsting: "ogg",
  field_of_hopes: "ogg",
  findher: "ogg",
  flashback_excerpt: "ogg",
  flowey: "ogg",
  forest: "ogg",
  friendship: "ogg",
  f_6s_1: "ogg",
  f_6s_2: "ogg",
  f_6s_3: "ogg",
  f_6s_4: "ogg",
  f_6s_5: "ogg",
  f_6s_6: "ogg",
  f_alarm: "ogg",
  f_destroyed: "ogg",
  f_destroyed2: "ogg",
  f_destroyed3: "ogg",
  f_finale_1: "ogg",
  f_finale_1_l: "ogg",
  f_finale_2: "ogg",
  f_finale_3: "ogg",
  f_intro: "ogg",
  f_newlaugh: "ogg",
  f_newlaugh_low: "ogg",
  f_part1: "ogg",
  f_part2: "ogg",
  f_part3: "ogg",
  f_saved: "ogg",
  f_wind1: "ogg",
  f_wind2: "ogg",
  GALLERY: "ogg",
  gameover: "ogg",
  gameover_short: "ogg",
  ghostbattle: "ogg",
  giant_queen_appears: "ogg",
  gigaqueen_pre: "ogg",
  glacier: "ogg",
  greenroom_detune: "ogg",
  harpnoise: "ogg",
  hereweare: "ogg",
  hip_shop: "ogg",
  home: "ogg",
  honksong: "ogg",
  hotel: "ogg",
  hotel_battle: "ogg",
  house1: "ogg",
  house2: "ogg",
  intronoise: "ogg",
  joker: "ogg",
  KEYGEN: "ogg",
  kingboss: "ogg",
  kingdescription: "ogg",
  knight: "ogg",
  knight_appears: "ogg",
  lab: "ogg",
  lancer: "ogg",
  lancerfight: "ogg",
  lancer_susie: "ogg",
  leave: "ogg",
  legend: "ogg",
  man: "ogg",
  mansion: "ogg",
  mansion_entrance: "ogg",
  menu: "ogg",
  menu1: "ogg",
  menu2: "ogg",
  menu3: "ogg",
  menu4: "ogg",
  mettafly: "ogg",
  mettatonbattle: "ogg",
  mettaton_ex: "ogg",
  mettaton_neo: "ogg",
  mettaton_pretransform: "ogg",
  mettmusical1: "ogg",
  mettmusical2: "ogg",
  mettmusical3: "ogg",
  mettmusical4: "ogg",
  mettsad: "ogg",
  mett_applause: "ogg",
  mett_cheer: "ogg",
  minigame_kart: "ogg",
  mode: "ogg",
  mtgameshow: "ogg",
  muscle: "ogg",
  "muscle@chut": "ogg",
  musicbox: "ogg",
  music_guys: "ogg",
  music_guys_intro: "ogg",
  mus_birdnoise: "ogg",
  "mus_birdnoise@chut": "ogg",
  mus_confession: "ogg",
  "mus_confession@chut": "ogg",
  mus_introcar: "ogg",
  mus_school: "ogg",
  myemeow: "ogg",
  mysteriousroom2: "ogg",
  mystery: "ogg",
  napstachords: "ogg",
  napstahouse: "ogg",
  napsta_alarm: "ogg",
  nes_intro_extended_part2: "ogg",
  news: "ogg",
  newscast: "ogg",
  news_battle: "ogg",
  nightmare_boss_heavy: "ogg",
  nightmare_nes: "ogg",
  night_ambience: "ogg",
  noelle_ferriswheel: "ogg",
  noelle_normal: "ogg",
  noelle_school: "ogg",
  northernlight: "ogg",
  ocean: "ogg",
  ohyes: "ogg",
  ominous_message: "ogg",
  oogloop: "ogg",
  operatile: "ogg",
  options_fall: "ogg",
  options_summer: "ogg",
  options_winter: "ogg",
  papyrus: "ogg",
  papyrusboss: "ogg",
  piano: "ogg",
  prebattle1: "ogg",
  predummy: "ogg",
  prejoker: "ogg",
  queen: "ogg",
  queen_boss: "ogg",
  queen_car_radio: "ogg",
  queen_intro: "ogg",
  quiet_autumn: "ogg",
  race: "ogg",
  rain: "ogg",
  "rain@chut": "ogg",
  rain_deep: "ogg",
  repeat_1: "ogg",
  repeat_2: "ogg",
  reunited: "ogg",
  rimshot: "ogg",
  root_8bit: "ogg",
  rouxls_battle: "ogg",
  rtenna_zoom: "ogg",
  rudebuster_boss: "ogg",
  ruins: "ogg",
  ruinspiano: "ogg",
  ruruskaado: "ogg",
  sansdate: "ogg",
  sfx_a_grab: "ogg",
  sfx_chainsaw: "ogg",
  sfx_disturbing: "ogg",
  sfx_hypergoner_charge: "ogg",
  sfx_hypergoner_laugh: "ogg",
  sfx_rainbowbeam_hold: "ogg",
  sfx_star: "ogg",
  sfx_woofenstein: "ogg",
  sfx_woofenstein_loop: "ogg",
  shinkansen: "ogg",
  shop: "ogg",
  shop1: "ogg",
  sigh_of_dog: "ogg",
  silence: "ogg",
  sink_noise: "ogg",
  smallshock: "ogg",
  snd_bigcar_yelp: "ogg",
  snd_closet_impact: "ogg",
  snd_dtrans_drone: "ogg",
  snd_dtrans_flip: "ogg",
  snd_dtrans_lw: "ogg",
  snd_dtrans_square: "ogg",
  snd_dtrans_twinkle: "ogg",
  snd_fountain_make: "ogg",
  snd_ghostappear: "ogg",
  snd_great_shine: "ogg",
  snd_him_quick: "ogg",
  snd_hitcar: "ogg",
  snd_hitcar_little: "ogg",
  snd_icespell: "ogg",
  snd_knight_fallingsword: "ogg",
  snd_smallcar_yelp: "ogg",
  snd_snowgrave: "ogg",
  snd_spell_pacify: "ogg",
  snoresymphony: "ogg",
  snowwalk: "ogg",
  snowy: "ogg",
  spamton_basement: "ogg",
  spamton_battle: "ogg",
  spamton_happy: "ogg",
  spamton_laugh_noise: "ogg",
  spamton_meeting: "ogg",
  spamton_meeting_intro: "ogg",
  spamton_neo_after: "ogg",
  spamton_neo_meeting: "ogg",
  spamton_neo_mix_ex_wip: "ogg",
  spider: "ogg",
  spoopy: "ogg",
  spoopy_holiday: "ogg",
  spoopy_wave: "ogg",
  star: "ogg",
  stealth: "ogg",
  sticksnap: "ogg",
  story: "ogg",
  story_stuck: "ogg",
  s_neo: "ogg",
  s_neo_clip: "ogg",
  temshop: "ogg",
  temvillage: "ogg",
  tenna_battle: "ogg",
  tenna_battle_guitar: "ogg",
  tenna_battle_old: "ogg",
  tenna_island: "ogg",
  tense: "ogg",
  tension: "ogg",
  the_dark_truth: "ogg",
  THE_HOLY: "ogg",
  thrashmachine: "ogg",
  tone2: "ogg",
  tone3: "ogg",
  toomuch: "ogg",
  toriel: "ogg",
  town: "ogg",
  "town@chut": "ogg",
  tv: "ogg",
  tvromance: "ogg",
  tv_changingroom: "ogg",
  TV_GAME: "ogg",
  tv_hall_of_fame: "ogg",
  tv_noise: "ogg",
  tv_results_screen: "ogg",
  tv_world: "ogg",
  undyneboss: "ogg",
  undynefast: "ogg",
  undynepiano: "ogg",
  undynescary: "ogg",
  undynetheme: "ogg",
  undynetruetheme: "ogg",
  vsasgore: "ogg",
  vs_susie: "ogg",
  w: "ogg",
  waterfall: "ogg",
  waterquiet: "ogg",
  wawa: "ogg",
  whoopee: "ogg",
  wind: "ogg",
  "wind@chut": "ogg",
  wind_highplace: "ogg",
  xpart: "ogg",
  xpart_2: "ogg",
  xpart_a: "ogg",
  xpart_b: "ogg",
  xpart_back: "ogg",
  x_undyne: "ogg",
  x_undyne_pre: "ogg",
  yourbestfriend_3: "ogg",
  zzz_c: "ogg",
  zzz_c2: "ogg",
  zz_megalovania: "ogg",
  z_ending: "ogg",
  "snd_bombfall@chut": "ogg",
  "snd_bombsplosion@chut": "wav",
  "snd_break1_c@chut": "wav",
  "snd_break2_c@chut": "wav",
  "snd_buzzing@chut": "ogg",
  "snd_damage_c@chut": "wav",
  "snd_elecdoor_close@chut": "wav",
  "snd_elecdoor_open@chut": "wav",
  "snd_flameloop@chut": "ogg",
  "snd_gameover_broken@chut": "wav",
  "snd_heavydamage@chut": "ogg",
  "snd_hurt1_c@chut": "wav",
  "snd_instanoise@chut": "wav",
  "snd_undynestep@chut": "wav",
};
export { Yz as a, YA as b, K8 as c, KK as d, Kl as e };
function KH(Kw, KC) {
  var KJ = new URL(Kw, KC).href;
  var KT = globalThis.__drWarm;
  return (KT ? KT(KJ) : Promise.resolve()).then(function () {
    return import(KJ).catch(function (Km) {
      try {
        Km.reload = true;
        Km.what = "the game code";
      } catch (KM) {}
      throw Km;
    });
  });
}
