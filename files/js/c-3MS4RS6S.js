import { d as r } from "./c-F4ZSRAAO.js";
import { L as f, R, g as s } from "./c-O6GE5FYX.js";
import {
  I as T,
  Ja as X,
  ac as g,
  c as Q,
  gb as e,
  hb as o0,
  j as o1,
  kc as o2,
  ob as o3,
  rc as o4,
  s as o5,
  w as o6,
  wb as o7,
  x as o8,
  zb as o9,
} from "./c-ZEHUSSXN.js";
import { a as oo, e as oO, l as oH } from "./c-7Q4J33FN.js";
oH();
var oq = class ob extends e {
  create() {
    this.rotspeed = 4;
    this.timer = 0;
    this.con = 0;
    this.image_xscale = 1.5;
    this.image_yscale = 1.5;
  }
  step() {
    if (this.con === 1) {
      this.image_angle += this.rotspeed * 2;
      this.direction += this.rotspeed * 3;
      this.timer++;
      if (this.timer >= 10) {
        this.image_alpha -= 0.1;
      }
      if (this.image_alpha <= 0) {
        this.instance_destroy();
      }
    }
  }
};
oo(oq, "obj_icespell_hexagon");
oO(oq, "kinds", o0("obj_icespell_hexagon", e));
oO(oq, "defaultSprite", "spr_icespell_hexagon");
var ot = oq;
var oh = class or extends e {
  create() {
    this.timer = 0;
    this.star = 0;
    this.damage = 0;
    this.hex = [];
    this.target = null;
  }
  draw(oW) {
    this.timer++;
    let oL = this.timer;
    if (oL === 1) {
      X("snd_icespell");
      this.hex[0] = o9(this.x - 25, this.y - 20, ot);
    }
    if (oL === 4) {
      this.hex[1] = o9(this.x + 25, this.y - 20, ot);
    }
    if (oL === 7) {
      this.hex[2] = o9(this.x, this.y + 20, ot);
    }
    if (oL === 10) {
      for (let oY of this.hex) {
        if (!!oY && !oY.destroyed) {
          for (let oP = 0; oP < 6; oP++) {
            let oi = o9(oY.x, oY.y, ot);
            oi.image_xscale = 0.75;
            oi.image_yscale = 0.75;
            oi.con = 1;
            oi.direction = oP * 60;
            oi.speed = 8;
            oi.friction = 0.2;
          }
        }
      }
    }
    if (oL === 11) {
      for (let of of this.hex) {
        if (of && !of.destroyed) {
          of.instance_destroy();
        }
      }
    }
    if (oL === 15 && s.fighting === 1) {
      s.hittarget[this.star] = 0;
      let oV = f.monsterinstance ? f.monsterinstance(this.star) : null;
      let oI = ol(this.star, this.damage);
      R(this.star, this.damage, this.caster);
      op(this.star, oI);
      if (s.monster[this.star] === 1 && oV && !oV.destroyed && f.ch2_scr_oflash) {
        f.ch2_scr_oflash.call(oV);
      }
    }
    if (oL >= 10 && oL <= 30) {
      oW.draw_set_alpha(Math.max(0, 2.2 - oL / 10));
      oW.draw_set_color(Q.white);
      for (let oj = 0; oj < 3; oj++) {
        oW.draw_circle(this.x, this.y, 60 + oj - oL * 6, true);
      }
      oW.draw_set_alpha(1);
    }
    if (oL === 60) {
      this.instance_destroy();
    }
  }
};
oo(oh, "obj_icespell");
oO(oh, "kinds", o0("obj_icespell", e));
oO(oh, "defaultSprite", "spr_icespell_snowflake");
var oU = oh;
var ox = new Set([
  "obj_queen_enemy",
  "obj_spamton_neo_enemy",
  "obj_berdlyb_enemy",
  "obj_berdlyb2_enemy",
  "obj_lancerboss",
  "obj_lancerboss2",
  "obj_lancerboss3",
  "obj_susieenemy",
  "obj_king_boss",
  "obj_joker",
  "obj_knight_enemy",
]);
function ol(oW, oL) {
  let oY = f.monsterinstance ? f.monsterinstance(oW) : null;
  if (
    !oY ||
    oY.destroyed ||
    s.monster[oW] !== 1 ||
    oL < s.monsterhp[oW] ||
    oY.freezable === 0 ||
    ox.has(oY.constructor.name)
  ) {
    return null;
  }
  let oP = s.flag[51 + oW];
  s.flag[51 + oW] = 6;
  return {
    mi: oY,
    was: oP,
  };
}
oo(ol, "iceFreezeMark");
function op(oW, oL) {
  if (!oL) {
    return;
  }
  if (s.monster[oW] === 1) {
    s.flag[51 + oW] = oL.was;
    return;
  }
  let oY = o9(oL.mi.x, oL.mi.y, oM);
  oY.target = oL.mi;
  oY.star = oW;
  oY.spr = oL.mi.hurtsprite || oL.mi.sprite_index;
  oY.idx = 0;
  oY.xs = oL.mi.image_xscale;
  oY.ys = oL.mi.image_yscale;
  oY.dep = oL.mi.depth;
  oY.kx = oL.mi.x;
  oY.ky = oL.mi.y;
}
oo(op, "iceFreezeAfterHit");
var oN = oo(
  (oW) => !oW.destroyed && /^obj_(defeatanim|deathanim)/.test(oW.constructor.name),
  "isDefeatAnim",
);
var oD = class os extends e {
  create() {
    this.timer = 0;
    this.target = null;
    this.star = 0;
    this.seen = new Set(o3.all("obj_defeatanim").concat(o3.all("obj_deathanim")));
  }
  ownStatue(oW) {
    let oL = oW.defeatanim;
    if (!oL || oL.destroyed || oL.constructor.name !== "obj_frozennpc") {
      return false;
    } else {
      oL.visible = true;
      this.instance_destroy();
      if (oL.sprite_index === "spr_nothing" && this.spr && this.spr !== "spr_nothing") {
        oL.sprite_index = this.spr;
      } else if (
        oL.sprite_index === "spr_nothing" &&
        oW.idlesprite &&
        oW.idlesprite !== "spr_nothing"
      ) {
        oL.sprite_index = oW.idlesprite;
      }
      return true;
    }
  }
  step() {
    this.timer++;
    let oW = this.target;
    if (oW && !oW.destroyed) {
      if (this.ownStatue(oW)) {
        return;
      }
      if (
        s.monster[this.star] === 0 &&
        (Math.abs(oW.x - this.kx) > 30 || Math.abs(oW.y - this.ky) > 30 || this.timer > 60)
      ) {
        this.x = this.kx;
        this.y = this.ky;
        oW.instance_destroy();
        this.freeze(null);
        return;
      }
      if (this.timer > 300) {
        this.instance_destroy();
      }
      return;
    }
    if (oW && this.ownStatue(oW)) {
      return;
    }
    let oL = oW && oW.defeatanim && oN(oW.defeatanim) ? oW.defeatanim : null;
    if (!oL) {
      for (let oY of o3.list) {
        if (
          oN(oY) &&
          !this.seen.has(oY) &&
          Math.abs(oY.x - this.x) < 80 &&
          Math.abs(oY.y - this.y) < 80
        ) {
          oL = oY;
        }
      }
    }
    this.freeze(oL);
  }
  freeze(oW) {
    let oL = oW || {
      x: this.kx ?? this.x,
      y: this.ky ?? this.y,
      sprite_index: this.spr,
      image_index: 0,
      image_xscale: this.xs,
      image_yscale: this.ys,
    };
    let oY = o7("obj_frozennpc") || (f.ch2Obj && f.ch2Obj("obj_frozennpc"));
    if (oY) {
      let oP = o9(oL.x, oL.y, oY);
      oP.sprite_index = oL.sprite_index;
      oP.image_index = 0;
      oP.image_xscale = oL.image_xscale || 2;
      oP.image_yscale = oL.image_yscale || 2;
      oP.depth = this.dep ?? oP.depth;
      oP.inbattle = 1;
      oP.visible = true;
      if (oW) {
        oW.instance_destroy();
      }
      o3.with("obj_recruitanim", (of) => {
        if (
          of.image_index === 7 &&
          Math.abs(of.x - s.monsterx[this.star]) < 2 &&
          Math.abs(of.y - (s.monstery[this.star] - 40)) < 2
        ) {
          of.instance_destroy();
        }
      });
      let oi = o7("obj_recruitanim") || (f.ch2Obj && f.ch2Obj("obj_recruitanim"));
      if (oi) {
        let of = o9(s.monsterx[this.star], s.monstery[this.star] - 40, oi);
        of.image_index = 12;
        if (s.chapter === 1 && T["spr_battlemsg@ch2"]) {
          of.sprite_index = "spr_battlemsg@ch2";
        }
      }
      s.flag[63] = 1;
    }
    this.instance_destroy();
  }
};
oo(oD, "obj_icefreeze");
oO(oD, "kinds", o0("obj_icefreeze", e));
oO(oD, "defaultVisible", false);
var oM = oD;
var ow = class oB extends e {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.siner = 0;
    this.timer = 0;
    this.image_alpha = 1;
  }
  step() {
    this.image_xscale = o6(this.siner) * 2;
    this.siner++;
    this.timer++;
    if (this.timer >= 30) {
      this.instance_destroy();
    }
  }
  draw(oW) {
    let oL = this.sprite_index;
    let oY = this.image_index;
    let oP = this.image_alpha;
    oW.draw_sprite_ext(
      oL,
      oY,
      this.x,
      this.y,
      this.image_xscale,
      this.image_yscale,
      0,
      Q.white,
      oP,
    );
    oW.draw_sprite_ext(
      oL,
      oY,
      this.x + o6(this.siner / 3) * 30,
      this.y,
      o6(this.siner / 3) * 2,
      2,
      0,
      Q.white,
      oP,
    );
    oW.draw_sprite_ext(
      oL,
      oY,
      this.x - o6(this.siner / 3) * 30,
      this.y,
      o6(this.siner / 3) * 2,
      2,
      0,
      Q.white,
      oP,
    );
  }
};
oo(ow, "obj_spell_snowgrave_snowflake");
oO(ow, "kinds", o0("obj_spell_snowgrave_snowflake", e));
oO(ow, "defaultSprite", "spr_icespell_snowflake");
var oR = ow;
var oA = class ov extends e {
  create() {
    this.bgalpha = 0;
    this.timer = 0;
    this.snowspeed = 0;
    this.stimer = 0;
    this.caster = 0;
    this.damage = 0;
    this.pattern = null;
    this.altpath = s.encounterno === 82 ? 1 : 0;
    this.fb = null;
    this.init = 0;
    this.fncon = 0;
    this.fn = null;
    this.fntimer = 0;
    this.amplitude = 0;
  }
  altpathCutscene(oW) {
    let oL = this.fn;
    if (!!oL && !oL.destroyed) {
      if (this.fncon === 0) {
        oL.image_index += 0.25;
        if (oL.image_index >= 8) {
          this.fntimer = 0;
          this.fncon = 0.5;
          if (s.batmusic) {
            o4(s.batmusic[1], 0, 90);
          }
        }
      }
      if (this.fncon === 0.5 && (this.fntimer++, this.fntimer >= 120)) {
        if (f.ch2_scr_oflash) {
          f.ch2_scr_oflash.call(oL);
        }
        oL.sprite_index = "spr_noelleb_spell_special";
        oL.image_speed = 0.5;
        this.fncon = 0.8;
        this.fntimer = 0;
        this.amplitude = 0;
        let oY = o3.first("obj_berdlyb2_enemy");
        if (oY) {
          oY.visible = false;
          this.fb = r(oY.x, oY.y, "spr_berdlyb_idle_shocked");
          this.fb.depth = oY.depth;
        }
      }
      if (this.fncon === 0.8) {
        this.fntimer++;
        if (this.fntimer >= 30) {
          this.fntimer = 0;
          this.fncon = 1;
        }
      }
      if (this.fncon === 1 || this.fncon === 2) {
        if (this.amplitude < 1) {
          this.amplitude += 0.03;
        }
        if (oL.y > oL.ystart - 70) {
          oL.y -= this.amplitude;
          oL.x += this.amplitude * 2.94;
        }
        oL.x += o6(oW / 3) * this.amplitude;
        oL.y += o8(oW / 3) * this.amplitude;
        if (oW % 4 === 0 && oW < 70) {
          let oP = X("snd_bell");
          o2(oP, 0.5, 0);
          g(oP, 0.5 + o1(0.3));
          let oi = f.ch2Obj && f.ch2Obj("obj_afterimage_grow");
          if (oi) {
            let of = o9(oL.x + 50, oL.y + 10 + 10, oi);
            of.speed = o1(2) + 1;
            of.direction = o1(180);
            of.gravity = 0.2 + o1(0.3);
            of.gravity_direction = 70 + o1(40);
            of.image_xscale = 1;
            of.image_yscale = 1;
            of.sprite_index = "spr_shine";
            of.image_speed = 0.5;
            of.image_alpha = 3;
          }
        }
        if (oW >= 210) {
          oL.sprite_index = "spr_noelleb_spell";
          oL.image_index = 2;
          oL.image_speed = 0;
          oL.gravity = 1;
          this.fncon = 3;
        }
      }
      if (this.fncon === 3 && oL.y >= this.ystart - 6) {
        oL.y = this.ystart;
        oL.sprite_index = "spr_noelleb_defeat";
        oL.speed = 0;
        oL.gravity = 0;
        if (f.ch2_scr_shakeobj) {
          f.ch2_scr_shakeobj.call(oL);
        }
        this.fncon = 4;
      }
    }
  }
  draw(oW) {
    if (this.init === 0 && ((this.init = 1), (this.fncon = 0), this.altpath === 1)) {
      this.timer = -270;
      let oP = o3.first("obj_heronoelle");
      o3.with("obj_heronoelle", (oi) => {
        oi.visible = false;
      });
      if (oP) {
        this.fn = r(oP.x, oP.y, "spr_noelleb_spell");
        this.fn.depth = oP.depth;
        this.fn.image_index = 0;
        this.fn.image_speed = 0;
      }
    }
    this.timer++;
    let oL = this.timer;
    if (this.altpath === 1) {
      this.altpathCutscene(oL);
    }
    if (this.bgalpha > 0) {
      let oi = oW.ctx;
      oi.save();
      oi.globalAlpha = Math.min(1, this.bgalpha);
      let of = oi.createLinearGradient(0, -10, 0, 500);
      if (of) {
        of.addColorStop(0, "#ffffff");
        of.addColorStop(1, "#0000ff");
        oi.fillStyle = of;
        oi.fillRect(-10, -10, 710, 510);
      }
      oi.restore();
    }
    let oY = T.bg_snowfall;
    if (oY && oY.img && oY.img[0]) {
      this.pattern ||= oW.ctx.createPattern(oY.img[0], "repeat");
      let oV = (oI, oj, on, oT) => {
        if (on <= 0) {
          return;
        }
        let oJ = oW.ctx;
        oJ.save();
        oJ.globalAlpha = Math.min(1, on);
        oJ.scale(oT, oT);
        oJ.translate(Math.round(oI / oT), Math.round(oj / oT));
        oJ.fillStyle = this.pattern;
        oJ.fillRect(-Math.round(oI / oT) - 10, -Math.round(oj / oT) - 10, 700 / oT, 520 / oT);
        oJ.restore();
      };
      oV(this.snowspeed / 1.5, oL * 6, this.bgalpha, 2);
      oV(this.snowspeed, oL * 8, this.bgalpha * 2, 2);
    }
    if (oL === 1) {
      X("snd_snowgrave");
    }
    if (oL <= 10 && oL >= 0 && this.bgalpha < 0.5) {
      this.bgalpha += 0.05;
    }
    if (oL >= 0) {
      this.snowspeed += 20 + oL / 5;
    }
    if (oL >= 20 && oL <= 75 + this.altpath * 30) {
      this.stimer++;
      for (let [oI, oj] of [
        [455, 560],
        [500, 600],
        [545, 520],
      ]) {
        let on = o9(oI, oj, oR);
        on.gravity = -2;
        on.vspeed = o6(oL / 2) * 0.5;
        on.siner = oL / 2;
      }
      if (this.stimer >= 8) {
        this.stimer = 0;
      }
    }
    if (this.altpath === 1 && oL === 70 && this.fb && !this.fb.destroyed) {
      this.fb.sprite_index = "spr_berdly_ice";
      this.fb.x -= 22;
      this.fb.y -= 48;
    }
    if (oL === 95 + this.altpath * 30 && this.damage > 0 && s.fighting === 1) {
      for (let oT = 0; oT < 3; oT++) {
        if (s.monster[oT] !== 1) {
          continue;
        }
        let oJ = f.monsterinstance ? f.monsterinstance(oT) : null;
        s.hittarget[oT] = 0;
        if (oJ && !oJ.destroyed) {
          oJ.fatal = 1;
        }
        if (this.altpath === 0) {
          let oG = this.damage + o5(o1(100));
          let oy = ol(oT, oG);
          R(oT, oG, this.caster);
          op(oT, oy);
          if (s.monsterhp[oT] > 0 && oJ && !oJ.destroyed) {
            oJ.fatal = 0;
            if (f.ch2_scr_oflash) {
              f.ch2_scr_oflash.call(oJ);
            }
          }
          continue;
        }
        if (f.dmgwriter) {
          let oz = f.dmgwriter(s.monsterx[oT], s.monstery[oT] + 20 - s.hittarget[oT] * 20);
          oz.damage = this.damage + o5(o1(100));
          oz.type = 6;
        }
        if (this.fb && !this.fb.destroyed && f.ch2_scr_oflash) {
          f.ch2_scr_oflash.call(this.fb);
        }
      }
    }
    if (this.altpath === 0) {
      if (oL >= 90 && this.bgalpha > 0) {
        this.bgalpha -= 0.02;
      }
    } else if (oL >= 120) {
      this.bgalpha -= 0.005;
    }
    if (oL === 120 + this.altpath * 150) {
      if (this.altpath) {
        let oc = o3.first("obj_berdlyb2_enemy");
        if (oc) {
          oc.sidebcon = 1;
          oc.fn = this.fn;
          oc.fb = this.fb;
        }
      }
      this.instance_destroy();
    }
  }
};
oo(oA, "obj_spell_snowgrave");
oO(oA, "kinds", o0("obj_spell_snowgrave", e));
oO(oA, "defaultDepth", 0);
var oS = oA;
var oE = class ou extends e {
  create() {
    this.siner = 0;
    this.amp = 0;
    this.image_xscale = 3;
    this.image_yscale = 2;
    this.stimer = 0;
    this.initdelay = 0;
    this.myself = -1;
    this.target = null;
    this.success = 0;
    this.init = 0;
  }
  draw(oW) {
    if (
      this.init === 0 &&
      this.myself >= 0 &&
      s.monster[this.myself] === 1 &&
      s.monsterstatus[this.myself] === 1
    ) {
      this.success = 1;
    }
    if (this.initdelay === 0) {
      X("snd_ghostappear");
      if (this.success === 1) {
        X("snd_spell_pacify");
      }
    }
    this.initdelay--;
    if (this.initdelay > 0) {
      return;
    }
    this.siner++;
    this.image_alpha = o6(this.siner / 9) - 0.3 + this.success * 0.3;
    this.amp = o6(this.siner / 9) * 30;
    let oL = Math.max(0, Math.min(1, this.image_alpha * 0.8));
    let oY = o6(this.siner / 6) * this.amp;
    let oP = (o8(this.siner / 6) * this.amp) / 2;
    if (oL > 0) {
      oW.draw_sprite_ext(
        this.sprite_index,
        this.image_index,
        this.x + oY,
        this.y + oP,
        this.image_xscale,
        this.image_yscale,
        this.image_angle,
        this.image_blend,
        oL,
      );
      oW.draw_sprite_ext(
        this.sprite_index,
        this.image_index,
        this.x - oY,
        this.y - oP,
        this.image_xscale,
        this.image_yscale,
        this.image_angle,
        this.image_blend,
        oL,
      );
    }
    this.stimer++;
    if (this.siner === 12 && this.success === 1) {
      let oi = this.target;
      if (oi && !oi.destroyed) {
        s.flag[51 + oi.myself] = 3;
        oi.userEvent(10);
        oi.scr_monsterdefeat();
      }
    }
    if (this.stimer >= 3 && this.siner <= 24 && ((this.stimer = 0), this.success === 1)) {
      let of = this.sprite_width;
      let oV = this.sprite_height;
      let oI = o9(this.x - of / 2 + o1(of), this.y - oV / 2 + o1(oV), ot);
      oI.image_xscale = 0.5;
      oI.image_yscale = 0.5;
      oI.con = 1;
      oI.rotspeed = o1(5);
      oI.sprite_index = "spr_icespell_snowflake";
    }
    if (this.siner >= 40) {
      this.instance_destroy();
    }
  }
};
oo(oE, "obj_spell_mist");
oO(oE, "kinds", o0("obj_spell_mist", e));
oO(oE, "defaultSprite", "spr_icespell_mist");
var om = oE;
export { ot as a, oU as b, ol as c, op as d, oM as e, oR as f, oS as g, om as h };
