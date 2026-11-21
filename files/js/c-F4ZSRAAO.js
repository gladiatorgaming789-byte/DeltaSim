import { H as L, g as m } from "./c-O6GE5FYX.js";
import {
  Fb as a,
  Ja as s,
  La as x,
  c as b,
  g as l,
  gb as i,
  hb as t0,
  ka as t1,
  ob as t2,
  q as t3,
  qa as t4,
  ra as t5,
  s as t6,
  sa as t7,
  t as t8,
  ta as t9,
  zb as tM,
} from "./c-ZEHUSSXN.js";
import { a as tE, e as tU, l as tv } from "./c-7Q4J33FN.js";
tv();
var tY = class tZ extends i {};
tE(tY, "obj_marker");
tU(tY, "kinds", t0("obj_marker", i));
tU(tY, "defaultDepth", 0);
var tK = tY;
var to = class tx extends tK {
  create() {
    this.fadeSpeed = 0.04;
    if (m.chapter >= 5) {
      this.parentid = -1;
    }
  }
  get fadespeed() {
    return this.fadeSpeed;
  }
  set fadespeed(ts) {
    this.fadeSpeed = ts;
  }
  endStep() {
    this.image_alpha -= this.fadeSpeed;
    if (this.image_alpha < 0) {
      this.instance_destroy();
    }
  }
};
tE(to, "obj_afterimage");
tU(to, "kinds", t0("obj_afterimage", tK));
tU(to, "defaultDepth", 0);
var ty = to;
function tc(ts) {
  let tO = tM(ts.x, ts.y, ty);
  tO.sprite_index = ts.sprite_index;
  tO.image_index = ts.image_index;
  tO.image_xscale = ts.image_xscale;
  tO.image_yscale = ts.image_yscale;
  tO.image_angle = ts.image_angle;
  tO.image_blend = ts.image_blend;
  tO.image_alpha = ts.image_alpha;
  tO.depth = ts.depth + 1;
  tO.image_speed = 0;
  return tO;
}
tE(tc, "scr_afterimage");
function tF(ts, tO, tX) {
  let tR = tM(ts, tO, tK);
  tR.sprite_index = tX;
  tR.image_xscale = 2;
  tR.image_yscale = 2;
  return tR;
}
tE(tF, "scr_dark_marker");
var tp = class tb extends i {};
tE(tp, "obj_battlesolid");
tU(tp, "kinds", t0("obj_battlesolid", i));
var tV = tp;
var tw = class td extends tV {
  create() {
    this.image_xscale = 0;
    this.image_yscale = 0;
    this.image_alpha = 0.3;
    this.timer = 0;
    this.maxtimer = 15;
    this.growcon = 1;
    this.image_speed = 0;
    this.image_blend = l(b.green, b.lime, 0.5);
    this.fullgrow = 0;
    this.keep = 0;
    this.megakeep = 0;
    this.maxxscale = 2;
    this.maxyscale = 2;
    this.target_angle = 0;
    this.customBox = false;
    this.init = 0;
    this.spr_custom_box = this.sprite_index;
    this.customScaleX = 1;
    this.customScaleY = 1;
    this.growth = 0;
  }
  step() {
    if (!this.init) {
      if (
        this.visible &&
        (this.maxxscale !== 2 || this.maxyscale !== 2) &&
        this.sprite_index === "spr_battlebg_0"
      ) {
        this.customBox = true;
        if (this.maxxscale % 1 !== 0) {
          this.maxxscale = t6(this.maxxscale * 37.5) / 37.5;
        }
        if (this.maxyscale % 1 !== 0) {
          this.maxyscale = t6(this.maxyscale * 37.5) / 37.5;
        }
        this.spr_custom_box = "spr_battlebg_stretch";
        this.customScaleX = this.maxxscale / 2;
        this.customScaleY = this.maxyscale / 2;
        this.sprite_index = "spr_battlebg_stretch_hitbox";
      }
      this.init = 1;
    }
    let ts = 0;
    if (this.timer < this.maxtimer && this.growcon === 1) {
      ts = 1;
    }
    if (this.timer > 0 && this.growcon === 3) {
      ts = 1;
    }
    this.growth = ts;
    if (ts === 1) {
      if (this.growcon === 1) {
        this.timer++;
      }
      if (this.growcon === 3) {
        this.timer--;
      }
      this.image_xscale = this.maxxscale * (this.timer / this.maxtimer);
      this.image_yscale = this.maxyscale * (this.timer / this.maxtimer);
      this.image_angle = 180 + (this.timer / this.maxtimer) * 180 + this.target_angle;
      this.image_alpha = 0.5 + (this.timer / this.maxtimer) * 0.5;
      if (this.visible) {
        let tO = tM(this.x, this.y, ty);
        tO.sprite_index = this.spr_custom_box || this.sprite_index;
        tO.image_xscale = (this.image_xscale / (this.maxxscale / 2)) * this.customScaleX;
        tO.image_yscale = (this.image_yscale / (this.maxyscale / 2)) * this.customScaleY;
        tO.image_angle = this.image_angle;
        tO.depth = this.depth - 1;
        tO.image_blend = this.image_blend;
        tO.image_alpha = 1 - this.image_alpha + 0.1;
        tO.image_speed = 0;
      }
      if (this.timer >= this.maxtimer && this.growcon === 1) {
        this.growcon = 2;
        this.image_angle = this.target_angle;
      }
      if (this.timer <= 0 && this.growcon === 3) {
        this.instance_destroy();
      }
    }
  }
  endStep() {
    if (this.keep !== 1) {
      return;
    }
    let ts = t2.first("obj_heart");
    if (!ts || (this.path_speed === 0 && this.speed === 0 && this.megakeep !== 1)) {
      return;
    }
    let tO = this.x - this.sprite_width / 2;
    let tX = this.x + this.sprite_width / 2;
    let tR = this.y - this.sprite_height / 2;
    let tD = this.y + this.sprite_height / 2;
    if (ts.x < tO + 5) {
      ts.x = tO + 5;
    }
    if (ts.x > tX - 22) {
      ts.x = tX - 22;
    }
    if (ts.y < tR + 5) {
      ts.y = tR + 5;
    }
    if (ts.y > tD - 22) {
      ts.y = tD - 22;
    }
  }
  draw(ts) {
    if (!this.noborder) {
      ts.draw_sprite_ext(
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
      if (this.customBox && this.growth && this.growcon !== 2) {
        ts.draw_sprite_ext(
          this.spr_custom_box,
          0,
          this.x,
          this.y,
          (this.image_xscale / (this.maxxscale / 2)) * this.customScaleX,
          (this.image_yscale / (this.maxyscale / 2)) * this.customScaleY,
          this.image_angle,
          this.image_blend,
          this.image_alpha,
        );
      } else {
        ts.draw_sprite_ext(
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
      }
    }
  }
};
tE(tw, "obj_growtangle");
tU(tw, "kinds", t0("obj_growtangle", tV));
tU(tw, "defaultDepth", 5);
tU(tw, "defaultSprite", "spr_battlebg_0");
var te = tw;
var tf = class tj extends i {
  create() {
    let ts = t2.first("obj_heart");
    if (ts) {
      this.x = ts.x + 10;
      this.y = ts.y + 10;
    }
    this.grazetimer = 0;
    this.grazetpfactor = 1;
    this.grazetimefactor = 1;
    this.grazesizefactor = 1;
    if (m.chapter >= 2) {
      this.grazecount = 0;
      this.grazetpfactor += L(15) * 0.1;
      if (m.chapter >= 3) {
        this.grazetpfactor += L(24) * 0.05;
        this.grazetpfactor -= L(3) * 0.2;
        this.grazetpfactor -= L(9) * 0.25;
      }
      this.grazetimefactor += L(14) * 0.1;
      if (m.chapter >= 3) {
        this.grazetimefactor -= L(3) * 0.2;
        this.grazetimefactor -= L(9) * 0.25;
      }
      this.grazesizefactor += L(3) * 0.2;
      this.grazesizefactor += L(9) * 0.25;
      if (this.grazetimefactor > 3) {
        this.grazetimefactor = 3;
      }
      if (this.grazetpfactor > 3) {
        this.grazetpfactor = 3;
      }
      if (this.grazesizefactor > 3) {
        this.grazesizefactor = 3;
      }
      this.image_xscale = this.grazesizefactor;
      this.image_yscale = this.grazesizefactor;
      this.sizexoff = 0;
      this.sizeyoff = 0;
    }
  }
  endStep() {
    let ts = t2.first("obj_heart");
    if (ts) {
      if (m.chapter >= 2) {
        this.sizexoff = 0;
        this.sizeyoff = 0;
        this.x = ts.x + 10 + this.sizexoff;
        this.y = ts.y + 10 + this.sizeyoff;
      } else {
        this.x = ts.x + 10;
        this.y = ts.y + 10;
      }
    } else {
      this.instance_destroy();
    }
  }
  draw(ts) {
    if (this.grazetimer > 0) {
      let tO = this.sprite_index || "spr_grazeappear";
      ts.draw_sprite_ext(tO, 0, this.x, this.y, 1, 1, 0, b.white, this.grazetimer / 6);
      ts.draw_sprite_ext(tO, 3, this.x, this.y, 1, 1, 0, b.white, this.grazetimer / 6 - 0.2);
      if (m.chapter >= 2 && this.image_xscale > 1) {
        ts.draw_sprite_ext(
          tO,
          0,
          this.x,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          b.white,
          this.grazetimer / 6,
        );
        ts.draw_sprite_ext(
          tO,
          3,
          this.x,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          b.white,
          this.grazetimer / 6 - 0.2,
        );
      }
    }
    this.grazetimer -= 1;
  }
};
tE(tf, "obj_grazebox");
tU(tf, "kinds", t0("obj_grazebox", i));
tU(tf, "defaultDepth", 2);
tU(tf, "defaultSprite", "spr_grazeappear");
tU(tf, "defaultMask", "spr_grazemask");
var tz = tf;
var tq = class tl extends i {
  create() {
    this.burst = 0;
  }
  draw(ts) {
    this.burst++;
    let tO = this.burst;
    let tX = this.xstart + 9;
    let tR = this.ystart + 9;
    ts.draw_sprite_ext(
      "spr_heartoutline2",
      0,
      tX,
      tR,
      0.25 + tO,
      0.25 + tO / 2,
      0,
      b.white,
      0.8 - tO / 6,
    );
    ts.draw_sprite_ext(
      "spr_heartoutline",
      0,
      tX,
      tR,
      0.25 + tO / 1.5,
      0.25 + tO / 3,
      0,
      b.white,
      1 - tO / 6,
    );
    ts.draw_sprite_ext(
      "spr_heartoutline",
      0,
      tX,
      tR,
      0.2 + tO / 2.5,
      0.2 + tO / 5,
      0,
      b.white,
      1.2 - tO / 6,
    );
    if (tO > 10) {
      this.instance_destroy();
    }
  }
};
tE(tq, "obj_heartburst");
tU(tq, "kinds", t0("obj_heartburst", i));
tU(tq, "defaultDepth", 0);
var tr = tq;
var tu = class ti extends i {
  create() {
    m.sp = 4;
    this.wspeed = m.sp;
    this.image_speed = 0;
    this.fly = 0;
    this.dmgnoise = 0;
    tM(this.x + 10, this.y + 10, tz);
    this.boundaryup = 0;
    this.disableslow = 0;
    if (t1()) {
      this.disableslow = 1;
    }
  }
  step() {
    let ts = t4() ? 1 : 0;
    let tO = t5() ? 1 : 0;
    let tX = t7() ? 1 : 0;
    let tR = t9() ? 1 : 0;
    let tD = 0;
    let tg = 0;
    let tP = this.wspeed;
    if (tO) {
      tD = tP;
    }
    if (ts) {
      tD = -tP;
    }
    if (tR) {
      tg = tP;
    }
    if (tX) {
      tg = -tP;
    }
    if (t1()) {
      if (this.disableslow === 0) {
        tD = t8(tD * 0.5);
        tg = t8(tg * 0.5);
      }
    } else {
      this.disableslow = 0;
    }
    let tW = (M2, M3) => a(this, M2, M3, "obj_battlesolid");
    if (tW(this.x + tD, this.y)) {
      for (let M3 = tP; M3 > 0; M3--) {
        let M4 = 0;
        if (tR === 0 && !tW(this.x + tD, this.y - M3)) {
          this.y -= M3;
          tg = 0;
          break;
        }
        if (tX === 0 && M4 === 0 && !tW(this.x + tD, this.y + M3)) {
          this.y += M3;
          tg = 0;
          break;
        }
      }
      let M2 = 0;
      if (tD > 0) {
        for (let M5 = tD; M5 >= 0; M5--) {
          if (!tW(this.x + M5, this.y)) {
            tD = M5;
            M2 = 1;
            break;
          }
        }
      }
      if (tD < 0) {
        for (let M6 = tD; M6 <= 0; M6++) {
          if (!tW(this.x + M6, this.y)) {
            tD = M6;
            M2 = 1;
            break;
          }
        }
      }
      if (M2 === 0) {
        tD = 0;
      }
    }
    if (tW(this.x, this.y + tg)) {
      for (let M8 = tP; M8 > 0; M8--) {
        let M9 = 0;
        if (tO === 0 && !tW(this.x - M8, this.y + tg)) {
          this.x -= M8;
          tD = 0;
          break;
        }
        if (M9 === 0 && ts === 0 && !tW(this.x + M8, this.y + tg)) {
          this.x += M8;
          tD = 0;
          break;
        }
      }
      let M7 = 0;
      if (tg > 0) {
        for (let Mt = tg; Mt >= 0; Mt--) {
          if (!tW(this.x, this.y + Mt)) {
            tg = Mt;
            M7 = 1;
            break;
          }
        }
      }
      if (tg < 0) {
        for (let MM = tg; MM <= 0; MM++) {
          if (!tW(this.x, this.y + MM)) {
            tg = MM;
            M7 = 1;
            break;
          }
        }
      }
      if (M7 === 0) {
        tg = 0;
      }
    }
    if (tW(this.x + tD, this.y + tg)) {
      let ME = 0;
      let MU = tD;
      let Mv = tg;
      while (Mv !== 0 || MU !== 0) {
        if (!tW(this.x + MU, this.y + Mv)) {
          tD = MU;
          tg = Mv;
          ME = 1;
          break;
        }
        if (Math.abs(Mv) >= 1) {
          if (Mv > 0) {
            Mv--;
          }
          if (Mv < 0) {
            Mv++;
          }
        } else {
          Mv = 0;
        }
        if (Math.abs(MU) >= 1) {
          if (MU > 0) {
            MU--;
          }
          if (MU < 0) {
            MU++;
          }
        } else {
          MU = 0;
        }
      }
      if (ME === 0) {
        tD = 0;
        tg = 0;
      }
    }
    let M0 = this.sprite_width;
    let M1 = this.sprite_height;
    if (this.x + tD >= 640 - M0) {
      tD = 640 - M0 - this.x;
    }
    if (this.x + tD <= 0) {
      tD = -this.x;
    }
    if (this.y + tg <= 0) {
      tg = -this.y;
    }
    if (this.y + tg >= 320 - M1 + this.boundaryup) {
      tg = 320 - M1 - this.y + this.boundaryup;
    }
    this.x += tD;
    this.y += tg;
    if (this.dmgnoise === 1) {
      this.dmgnoise = 0;
      x("snd_hurt1");
      s("snd_hurt1");
    }
    m.inv -= 1;
    if (m.inv > 0) {
      this.image_speed = 0.25;
    } else {
      this.image_speed = 0;
      this.image_index = 0;
    }
    m.heartx = this.x + 2;
    m.hearty = this.y + 2;
  }
};
tE(tu, "obj_heart");
tU(tu, "kinds", t0("obj_heart", i));
tU(tu, "defaultDepth", 1);
tU(tu, "defaultSprite", "spr_dodgeheart");
tU(tu, "defaultMask", "spr_dodgeheartmask");
var tk = tu;
var tC = class MY extends i {
  create() {
    this.burst = 0;
    this.shift = 1;
    this.image_alpha = 0;
    this.flytime = 8;
    this.distx = 310;
    this.disty = 160;
    let ts = t2.first("obj_heartmarker");
    let tO = t2.first("obj_growtangle");
    if (ts) {
      this.distx = ts.x;
      this.disty = ts.y;
    } else if (m.chapter >= 2 && tO) {
      this.distx = tO.x - 10;
      this.disty = tO.y - 10;
    }
    this.dist = t3(this.x, this.y, this.distx, this.disty);
    this.move_towards_point(this.distx, this.disty, this.dist / this.flytime);
    this.alarm[0] = this.flytime;
    this.image_speed = 0;
    tM(this.x, this.y, tr);
  }
  step() {
    this.image_alpha += 0.334;
  }
  alarmEvent(ts) {
    if (ts === 0) {
      this.x = this.distx;
      this.y = this.disty;
      if (m.chapter < 2 || !t2.exists("obj_heart")) {
        let tO = tM(this.x, this.y, tB());
        if (m.chapter >= 3 && tO) {
          tO.sprite_index = this.sprite_index;
          tO.mask_index = this.mask_index;
        }
      }
      this.instance_destroy();
    }
  }
};
tE(tC, "obj_moveheart");
tU(tC, "kinds", t0("obj_moveheart", i));
tU(tC, "defaultDepth", 0);
tU(tC, "defaultSprite", "spr_dodgeheart");
var tA = tC;
var tT = null;
function tL(ts) {
  tT = ts;
  ts.prototype.interpSelf = true;
}
tE(tL, "setCh2Heart");
var tQ = null;
function tn(ts) {
  tQ = ts;
  ts.prototype.interpSelf = true;
}
tE(tn, "setCh3Heart");
var tG = {};
function tJ(ts, tO) {
  tG[ts] = tO;
  tO.prototype.interpSelf = true;
}
tE(tJ, "setChapterHeart");
function tB() {
  let ts = tG[m.chapter];
  return ts || (m.chapter >= 3 && tQ ? tQ : m.chapter >= 2 && tT ? tT : tk);
}
tE(tB, "soulClass");
function tS() {
  if (m.chapter >= 2) {
    m.inv = 0;
  }
  let ts = t2.first("obj_herokris");
  if (m.chapter === 2 && t2.exists("obj_gigaqueen_enemy")) {
    let tO = t2.first("o_boxingcontroller");
    if (tO) {
      return tM(tO.x + 4, tO.y - 120, tA);
    }
  }
  return tM(ts ? ts.x + 10 : 90, ts ? ts.y + 40 : 140, tA);
}
tE(tS, "scr_moveheart");
var tm = class MK extends i {
  create() {
    let ts = t2.first("obj_herokris");
    this.burst = 0;
    this.shift = 1;
    this.image_alpha = 1;
    this.flytime = 8;
    this.distx = (ts ? ts.x : 80) + 10;
    this.disty = (ts ? ts.y : 100) + 40;
    if (m.chapter === 2 && t2.exists("obj_gigaqueen_enemy")) {
      let tO = t2.first("o_boxingcontroller");
      if (tO) {
        this.distx = tO.x;
        this.disty = tO.y - 110;
      }
    }
    this.dist = t3(this.x, this.y, this.distx, this.disty);
    this.move_towards_point(this.distx, this.disty, this.dist / this.flytime);
    this.alarm[0] = this.flytime;
    this.image_speed = 0;
  }
  alarmEvent(ts) {
    if (ts === 0) {
      this.x = this.distx;
      this.y = this.disty;
      tM(this.x, this.y, tr);
      this.instance_destroy();
    }
  }
};
tE(tm, "obj_returnheart");
tU(tm, "kinds", t0("obj_returnheart", i));
tU(tm, "defaultDepth", 0);
tU(tm, "defaultSprite", "spr_dodgeheart");
var th = tm;
var tH = class Mo extends i {
  create() {
    if (m.chapter >= 2) {
      this.depth = 205;
    }
    if (t2.number("obj_darkener") > 1) {
      this.instance_destroy();
      return;
    }
    this.darken = 1;
    this.darkamt = 0;
  }
  draw(ts) {
    if (this.darken === 1) {
      t2.with("obj_heroparent", (tX) => {
        tX.darkify = 1;
      });
      let tO = t2.first("obj_tenna_enemy");
      if (m.chapter === 3 && tO && (tO.phaseturn === 11 || tO.testlightemup === 1)) {
        if (this.darkamt < 8) {
          this.darkamt++;
        }
      } else if (this.darkamt < 15) {
        this.darkamt++;
      }
      t2.with("obj_whiteedge", (tX) => {
        tX.image_alpha = this.darkamt / 15;
      });
    }
    if (
      this.darken === 0 &&
      (t2.with("obj_growtangle", (tX) => {
        tX.growcon = 3;
      }),
      t2.with("obj_heroparent", (tX) => {
        tX.darkify = 0;
      }),
      this.darkamt > 0 && this.darkamt--,
      t2.with("obj_whiteedge", (tX) => {
        tX.image_alpha = this.darkamt / 15;
      }),
      this.darkamt <= 0)
    ) {
      this.instance_destroy();
      return;
    }
    ts.draw_set_alpha(this.darkamt / 20);
    ts.draw_set_color(b.black);
    ts.draw_rectangle(-40, -40, 680, 520, false);
    ts.draw_set_alpha(1);
  }
  destroy() {
    t2.with("obj_whiteedge", (ts) => {
      ts.image_alpha = 0;
    });
  }
};
tE(tH, "obj_darkener");
tU(tH, "kinds", t0("obj_darkener", i));
tU(tH, "defaultDepth", 200);
var ta = tH;
var tN = class My extends i {
  create() {
    if (t2.number("obj_shake") > 1) {
      this.instance_destroy();
      return;
    }
    this.shakespeed = 1;
    this.shakesign = 1;
    this.shakex = 4;
    this.shakey = 4;
    this.permashake = 0;
    this.active = 0;
    this.beenset = 0;
  }
  step() {
    if (this.active === 0) {
      this.beenset = 1;
      if (m.flag[12] === 0) {
        m.shakex = this.shakex;
        m.shakey = this.shakey;
      }
      this.shakesign = -this.shakesign;
      this.active = 1;
      this.alarm[0] = this.shakespeed;
    }
  }
  alarmEvent(ts) {
    if (ts === 0) {
      if (m.flag[12] === 0) {
        m.shakex = this.shakex * this.shakesign;
        m.shakey = this.shakey * this.shakesign;
      }
      if (this.permashake === 0) {
        if (this.shakex > 0) {
          this.shakex--;
        }
        if (this.shakey > 0) {
          this.shakey--;
        }
      }
      this.shakesign = -this.shakesign;
      this.alarm[0] = this.shakespeed;
      if (this.shakex === 0 && this.shakey === 0) {
        this.instance_destroy();
      }
    }
  }
  destroy() {
    if (m.chapter < 2 || this.beenset) {
      m.shakex = 0;
      m.shakey = 0;
    }
  }
};
tE(tN, "obj_shake");
tU(tN, "kinds", t0("obj_shake", i));
tU(tN, "defaultDepth", 0);
var tI = tN;
export {
  tK as a,
  ty as b,
  tc as c,
  tF as d,
  tV as e,
  te as f,
  tz as g,
  tr as h,
  tk as i,
  tA as j,
  tL as k,
  tn as l,
  tJ as m,
  tS as n,
  th as o,
  ta as p,
  tI as q,
};
