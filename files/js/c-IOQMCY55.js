import {
  Ed as w,
  F as a,
  Ha as v,
  Lp as g,
  Mo as I,
  No as m,
  la as y,
  sf as x,
  v as r,
} from "./c-LAR7MFOW.js";
import { a as k } from "./c-PNBP23RB.js";
import { a as h, c as A } from "./c-A3CL5ELZ.js";
import { d as o, l as j, m as i } from "./c-2RHLG27W.js";
import {
  E as p,
  Fd as b,
  Rh as T,
  Yb as c0,
  g as c1,
  h as c2,
  k as c3,
  sd as c4,
  ub as c5,
} from "./c-HEUEF6GJ.js";
import { Oa as c6, s as c7, y as c8 } from "./c-43ZBXPN7.js";
import { B as c9, L as cc, g as cO, l as cB, y as cn } from "./c-O6GE5FYX.js";
import {
  Ja as cu,
  db as cY,
  g as cU,
  gb as cS,
  hb as cZ,
  m as cN,
  ob as cQ,
  z as cC,
  zb as cG,
} from "./c-ZEHUSSXN.js";
import { a as cE, e as cl, j as cw, k as cW, l as ca } from "./c-7Q4J33FN.js";
ca();
function cv(Ox, OF, Or, OJ, Oz, OP, Ok, OH, OM, OK, Oh, OA) {
  let Oq = OF.frame(Or);
  if (!Oq) {
    return;
  }
  let Oo = Math.max(0, OJ);
  let OV = Math.max(0, Oz);
  let Oj = Math.min(OP, OF.w - Oo);
  let Oi = Math.min(Ok, OF.h - OV);
  if (!(Oj <= 0) && !(Oi <= 0) && !(OA <= 0)) {
    Ox.save();
    Ox.globalAlpha = Math.min(1, OA);
    Ox.drawImage(Oq, Oo, OV, Oj, Oi, OH, OM, Oj * OK, Oi * Oh);
    Ox.restore();
  }
}
cE(cv, "partExt");
function ct(Ox, OF, Or, OJ, Oz, OP, Ok, OH, OM, OK, Oh, OA) {
  if (!OF) {
    return;
  }
  let Oq = OF.w * OK;
  let Oo = OF.h * Oh;
  if (!Oq || !Oo) {
    return;
  }
  let OV = OP - ((OP % Oq) - (OJ % Oq)) - Oq * (OP % Oq < OJ % Oq);
  let Oj = Ok - ((Ok % Oo) - (Oz % Oo)) - Oo * (Ok % Oo < Oz % Oo);
  let Oi = -Infinity;
  let Op = Infinity;
  let Ob = -Infinity;
  let Os = Infinity;
  try {
    let OT = Ox.getTransform && Ox.getTransform();
    let OX = Ox.canvas;
    if (OT && OX && !OT.b && !OT.c && OT.a > 0 && OT.d > 0) {
      Oi = -OT.e / OT.a;
      Op = (OX.width - OT.e) / OT.a;
      Ob = -OT.f / OT.d;
      Os = (OX.height - OT.f) / OT.d;
    }
  } catch {}
  let Od = Oj;
  let OD = 0;
  while (OV <= OH && OD++ < 4000) {
    if (OV + Oq >= Oi && OV <= Op) {
      let OL = 0;
      while (Od <= OM && OL++ < 4000) {
        if (Od + Oo >= Ob && Od <= Os) {
          let B0 = OV <= OP ? OP - OV : 0;
          let B1 = OV + B0;
          let B2 = Od <= Ok ? Ok - Od : 0;
          let B3 = Od + B2;
          let B4 = OH <= OV + Oq ? Oq - (OV + Oq - OH) + 1 - B0 : Oq - B0;
          let B5 = OM <= Od + Oo ? Oo - (Od + Oo - OM) + 1 - B2 : Oo - B2;
          cv(Ox, OF, Or, B0, B2, B4, B5, B1, B3, OK, Oh, OA);
        }
        Od += Oo;
      }
    }
    Od = Oj;
    OV += Oq;
  }
}
cE(ct, "tiledArea");
var cg = cE(
  (Ox) => (Ox && Ox.ctx && typeof Ox.ctx.drawImage == "function" ? Ox.ctx : null),
  "ctxOf",
);
var cR = class B6 extends cS {
  create() {
    Object.assign(this, {
      init: false,
      x_pos: this.x,
      y_pos: this.y,
      x_scale: 2,
      y_scale: 2,
      alpha: 1,
      width: -1,
      height: -1,
      x_speed: 0,
      y_speed: 0,
      room_wide: false,
      loop_vertical: false,
      spr: null,
      ch: "ch2",
      camx: 0,
      camy: 0,
    });
  }
  step() {
    let Ox = o(this.ch, this.spr);
    if (!this.init && Ox) {
      this.init = true;
      if (this.width === -1) {
        this.width = Ox.w * this.x_scale;
      }
      if (this.height === -1) {
        this.height = Ox.h * this.y_scale;
      }
    }
    if (!this.init) {
      return;
    }
    this.x_pos += this.x_speed;
    let OF = this.room_wide ? 0 : this.camx;
    if (this.x_pos + this.width < OF) {
      this.x_pos += this.width;
    }
    if (this.x_pos - this.width > OF) {
      this.x_pos -= this.width;
    }
    if (this.y_speed !== 0) {
      this.y_pos += this.y_speed;
      if (this.y_pos + this.height < this.camy) {
        this.y_pos += this.height;
      }
      if (this.y_pos - this.height > this.camy) {
        this.y_pos -= this.height;
      }
    }
  }
  draw(Ox) {
    let OF = cg(Ox);
    let Or = o(this.ch, this.spr);
    if (!OF || !Or || !this.init) {
      return;
    }
    let OJ = this.x_pos - this.camx;
    let Oz = this.y_pos - this.camy;
    let OP = this.width;
    let Ok = this.height;
    let OH = Math.floor(this.image_index || 0);
    ct(
      OF,
      Or,
      OH,
      OJ - OP,
      Oz,
      OJ,
      Oz,
      OJ - OP + OP,
      Oz + Ok,
      this.x_scale,
      this.y_scale,
      this.alpha,
    );
    ct(OF, Or, OH, OJ, Oz, OJ, Oz, OJ + OP, Oz + Ok, this.x_scale, this.y_scale, this.alpha);
    ct(
      OF,
      Or,
      OH,
      OJ + OP,
      Oz,
      OJ + OP,
      Oz,
      OJ + OP + OP,
      Oz + Ok,
      this.x_scale,
      this.y_scale,
      this.alpha,
    );
  }
};
cE(cR, "obj_looping_tiled_area");
cl(cR, "kinds", cZ("obj_looping_tiled_area", cS));
cl(cR, "defaultDepth", 0);
var cI = cR;
function cm(Ox, OF, Or, OJ) {
  let Oz = cG(Ox, OF, cI);
  Oz.x_pos = Ox;
  Oz.y_pos = OF;
  Oz.spr = Or;
  Object.assign(Oz, OJ);
  return Oz;
}
cE(cm, "looping");
var cy = class B7 extends cS {
  create() {
    this.camx = 0;
    this.camy = 0;
    this.spr = null;
    this.frame = 0;
    this.anim = 0;
    this.xs = 1;
    this.ys = 1;
    this.alpha = 1;
    this.sineY = 0;
    this.timer = 0;
    this.depthOf = null;
  }
  step() {
    this.frame += this.anim;
    this.timer++;
    if (this.sineY) {
      this.ys = Math.sin(this.timer / 10) * 0.5 + 1.5;
    }
    if (this.depthOf) {
      let Ox = cQ.first(this.depthOf[0]);
      if (Ox) {
        this.depth = Ox.depth + this.depthOf[1];
      }
    }
  }
  draw(Ox) {
    let OF = cg(Ox);
    let Or = o("ch2", this.spr);
    if (!OF || !Or) {
      return;
    }
    let OJ = Or.frame(Math.floor(this.frame));
    if (OJ) {
      OF.save();
      OF.globalAlpha = this.alpha;
      OF.translate(this.x - this.camx, this.y - this.camy);
      OF.scale(this.xs, this.ys);
      OF.drawImage(OJ, -Or.ox, -Or.oy);
      OF.restore();
    }
  }
};
cE(cy, "obj_ch2_roomprop");
cl(cy, "kinds", cZ("obj_ch2_roomprop", cS));
cl(cy, "defaultDepth", 0);
var cf = cy;
function cx(Ox, OF, Or, OJ, Oz = {}) {
  let OP = cG(Ox, OF, cf);
  OP.spr = Or;
  OP.depth = OJ;
  Object.assign(OP, Oz);
  return OP;
}
cE(cx, "prop");
var cF = class B8 extends cS {
  create() {
    this.visible = false;
    this.sinerx = 0;
    this.sinery = 0;
    this.coaster_offset_x = -25;
    this.coaster_offset_y = 40;
    this.character_offset_x = 0;
    this.character_offset_y = 0;
    this.target_x_end = 0;
    this.con = 0;
    this.actor = {
      sprite_index: null,
    };
    this.character_sprite = null;
  }
  draw() {}
};
cE(cF, "obj_coaster_cart");
cl(cF, "kinds", cZ("obj_coaster_cart", cS));
cl(cF, "defaultDepth", 0);
var cr = cF;
function cJ(Ox, OF, Or, OJ) {
  let Oz = cG(Ox, OF, cr);
  Oz.coaster_offset_x = Or;
  Oz.coaster_offset_y = OJ;
  return Oz;
}
cE(cJ, "coasterCart");
A(58, ({ vx: Ox, vy: OF }) => {
  let Or = (OH, OM) => {
    let OK = o("ch2", OH);
    if (OK) {
      return OK.w * 2 * 3;
    } else {
      return 0;
    }
  };
  let OJ = (OH) => {
    let OM = o("ch2", OH);
    if (OM) {
      return OM.h - 1;
    } else {
      return 0;
    }
  };
  let Oz = {
    room_wide: true,
    x_scale: 1,
    y_scale: 1,
    camx: Ox,
    camy: OF,
  };
  cm(0, 0, "spr_cyber_coaster_bg_tile", {
    ...Oz,
    width: Or("spr_cyber_coaster_bg_cityscape"),
    height: OJ("spr_cyber_coaster_bg_cityscape"),
    depth: 1000500,
  });
  cm(1040, 0, "spr_cyber_coaster_bg_cityscape_bg", {
    ...Oz,
    width: Or("spr_cyber_coaster_bg_cityscape_bg"),
    height: OJ("spr_cyber_coaster_bg_cityscape_bg"),
    depth: 1000400,
    x_speed: -0.5,
  });
  cm(936, 0, "spr_cyber_coaster_bg_cityscape_fg", {
    ...Oz,
    width: Or("spr_cyber_coaster_bg_cityscape_fg"),
    height: OJ("spr_cyber_coaster_bg_cityscape_fg"),
    depth: 1000300,
    x_speed: -1,
  });
  cm(815, 64, "bg_dw_city_coaster_track_fullwidth", {
    ...Oz,
    width: Or("bg_dw_city_coaster_track_fullwidth"),
    height: OJ("bg_dw_city_coaster_track_fullwidth"),
    depth: 1000200,
    x_speed: -15,
  });
  for (let OH = 0; OH < 3; OH++) {
    let OM = o("ch2", "spr_cyber_coaster_track");
    cm(815, 130 + OH * 60, "spr_cyber_coaster_track", {
      ...Oz,
      width: OM ? OM.w * 2 * 7 : 0,
      height: OM ? OM.h - 1 : 0,
      depth: 1000100,
      x_speed: -15,
    });
  }
  cx(Ox + 25, 0, "spr_cyber_coaster_bg_fountain", 1000450, {
    camx: Ox,
    camy: OF,
    anim: 0.125,
    xs: 2,
    ys: 2,
  });
  let OP = (OK, Oh) => cJ(OK - Ox, Oh - OF, -25, 40);
  let Ok = cG(0, 0, c7);
  Ok.visible = false;
  Ok.__battleprop = true;
  Ok.coaster_kris = OP(1220, 72);
  Ok.coaster_susie = OP(1220, 118);
  Ok.coaster_ralsei = OP(1220, 181);
  Ok.coaster_berdly = OP(1650, 126);
});
A(59, ({ vx: Ox, vy: OF }) => {
  cG(0, 40, i);
  cx(750, 0, "spr_cc_fountainbg", 1000200, {
    camx: Ox,
    camy: OF,
    anim: 0.1,
    xs: 2,
    ys: 2,
  });
});
A(63, ({ room: Ox, vx: OF, vy: Or }) => {
  let OJ = o("ch2", "spr_cutscene_21_acid_loop");
  cm(OF, 0, "spr_cutscene_21_acid_loop", {
    room_wide: false,
    x_scale: 1,
    y_scale: 1,
    width: 720,
    height: OJ ? OJ.h : 480,
    camx: OF,
    camy: Or,
    depth: 1000100,
  });
  for (let Oz of Ox.layers) {
    for (let OP of Oz.inst || []) {
      if (OP[0] === "obj_gradientglow") {
        cx(OP[1], OP[2], "spr_gradient20", 850000, {
          camx: OF,
          camy: Or,
          xs: OP[3],
          ys: OP[4],
          sineY: 1,
        });
      }
    }
  }
  cx(775, 110, "spr_swanboat", 1, {
    camx: OF,
    camy: Or,
    anim: 0.15,
    xs: 2,
    ys: 2,
    depthOf: ["obj_herokris", 1],
  });
  cx(775, 110, "spr_swanboat_cover", -10, {
    camx: OF,
    camy: Or,
    anim: 0.15,
    xs: 2,
    ys: 2,
    depthOf: ["obj_heroralsei", -10],
  });
  cG(0, 0, cP);
});
var cz = class B9 extends cS {
  create() {
    this.trackpos = 0;
    this.con = 0;
    this.timer = 0;
    this.lang = (cO.flag && cO.flag[912]) || 0;
    this.depth = 5000;
  }
  draw(Ox) {
    this.trackpos = cY(cO.batmusic && cO.batmusic[1]);
    if (cO.myfight === 0 && this.trackpos >= 58.335 && this.trackpos <= 58.375 && this.con === 0) {
      this.timer = 0;
      this.con = 1;
    }
    if (this.con === 1) {
      let OF = cQ.first("obj_rouxls_enemy");
      if (OF && Ox && Ox.draw_sprite) {
        Ox.draw_sprite("spr_rouxls_bubble_hey", this.lang, OF.x - 10, cO.monstery[OF.myself]);
      }
      this.timer++;
      if (this.timer === 12) {
        this.con = 0;
      }
    }
  }
};
cE(cz, "obj_rouxlsbattle_hey");
cl(cz, "kinds", cZ("obj_rouxlsbattle_hey", cS));
cl(cz, "defaultDepth", 5000);
var cP = cz;
Object.assign(c8.prototype, {
  draw(Ox) {
    let OF = cg(Ox);
    if (!OF || !this.__battleprop) {
      return;
    }
    let Or = this.camx || 0;
    if (this.drawtrack === 1) {
      let OJ = o("ch2", "spr_sneo_track");
      if (OJ) {
        for (let Oz of [this.tracky0, this.tracky1, this.tracky2]) {
          for (let OP of [-640, 0, 640]) {
            let Ok = OJ.frame(0);
            if (!Ok) {
              break;
            }
            OF.save();
            OF.globalAlpha = this.image_alpha ?? 1;
            OF.drawImage(Ok, this.trackx + OP, Oz, OJ.w * 2, OJ.h * 2);
            OF.restore();
          }
        }
      }
      if (80 - Or > 0) {
        OF.save();
        OF.fillStyle = "#000";
        OF.fillRect(-Or, 200, 80, 220);
        OF.restore();
      }
    }
    if (this.cityscape_active) {
      let OH = (OK, Oh) => {
        let OA = o("ch2", OK);
        if (OA) {
          ct(
            OF,
            OA,
            0,
            this.cityscape_speed * Oh,
            0,
            this.cityscape_speed * Oh,
            0,
            640,
            OA.h * 2,
            2,
            2,
            this.cityscape_alpha,
          );
        }
      };
      OH("bg_dw_mansion_basement_cityscape_background", 1);
      OH("bg_dw_mansion_basement_cityscape_midground", 1.1);
      OH("bg_dw_mansion_basement_cityscape_foreground", 1.2);
      let OM = o("ch2", "bg_dw_mansion_basement_cityscape");
      if (this.shop_spamton_bg_con > 1) {
        let OK = o("ch2", "spr_shop_spamton_bg_battle");
        if (OK && OM) {
          ct(
            OF,
            OK,
            0,
            this.cityscape_speed,
            0,
            this.cityscape_speed,
            0,
            640,
            OM.h * 2,
            1.6708,
            1.195,
            this.cityscapefade === 1 ? 0.15 : this.cityscape_alpha,
          );
        }
      }
      if (this.shop_spamton_bg_con > 0 && this.shop_spamton_bg_con < 3 && OM) {
        let Oh = o("ch2", "spr_whitepixel");
        if (Oh) {
          ct(
            OF,
            Oh,
            0,
            this.cityscape_speed,
            0,
            this.cityscape_speed,
            -2,
            640,
            -2 + OM.h * 2,
            396,
            8,
            this.shop_spamton_bg_timer / 20,
          );
        }
      }
    }
  },
  step() {
    if (this.__battleprop) {
      if (this.drawtrack === 1) {
        this.trackx += this.trackspeed;
        if (this.trackx + 640 < 0) {
          this.trackx += 640;
        }
        if (this.trackx - 640 > 0) {
          this.trackx -= 640;
        }
      }
      if (this.cityscape_active) {
        if (this.cityscape_alpha < 1) {
          this.cityscape_alpha = c5(this.cityscape_alpha, 1, 0.2);
        }
        if (this.cityscapefade === 1) {
          this.cityscape_alpha = 0;
        }
        this.cityscape_speed -= this.cityscape_speed_max;
        if (this.cityscape_speed_max < 0 && this.cityscape_speed > -398) {
          this.cityscape_speed -= 398;
        }
        if (
          this.shop_spamton_bg_con === 1 &&
          cQ.number("obj_writer") === 0 &&
          cQ.number("obj_battleblcon") === 0
        ) {
          this.shop_spamton_bg_timer++;
          if (this.shop_spamton_bg_timer === 1) {
            cu("snd_petrify");
          }
          if (this.shop_spamton_bg_timer === 23) {
            this.shop_spamton_bg_con = 2;
          }
        }
        if (this.shop_spamton_bg_con === 2) {
          this.shop_spamton_bg_timer--;
          if (this.shop_spamton_bg_timer === 0) {
            this.shop_spamton_bg_con = 3;
            cQ.with("obj_spamton_neo_enemy", (Ox) => {
              Ox.targetbgspeed = 5;
            });
          }
        }
      }
    }
  },
});
var cH = class Bc extends cS {
  create() {
    Object.assign(this, {
      timer: 0,
      timermax: 180,
      playerinput: 0,
      playerinputtimer: 0,
      actcon: 0,
      krisgooffscreen: 0,
      susiegooffscreen: 0,
      ralseigooffscreen: 0,
      buttonspressed: 0,
      bumpmercy: 0,
      mykey: [90, 88, 67],
      HeroCoaster: [],
      yspot: [],
    });
    this.visible = false;
    this.seated = false;
  }
  draw() {}
  step() {
    if (!this.seated && cQ.first("obj_herokris")) {
      this.seated = true;
      this.seat();
    }
  }
  seat() {
    let Ox = [101, 182, 260];
    for (let OF = 0; OF < 3; OF++) {
      let Or = cG(0, Ox[OF] - 0, m);
      Or.HeroID = OF;
      Or.image_index = OF;
      Or.depth = Or.y * -100;
      Or.siner = 0;
      Or.mykey = this.mykey[OF];
      Or.lerpstate = 1;
      Or.lerptimer = 0;
      let OJ = cG(Or.x, Or.y, I);
      OJ.parentid = Or;
      OJ.depth = Or.depth + 2;
      Or.back = OJ;
      this.HeroCoaster[OF] = Or;
      this.yspot[OF] = Or.y;
    }
  }
};
cE(cH, "o_coaster_controller_sneo");
cl(cH, "kinds", cZ("o_coaster_controller_sneo", cS));
cl(cH, "defaultDepth", 0);
var cM = cH;
A(61, ({ vx: Ox, vy: OF }) => {
  let Or = cG(0, 0, c8);
  Or.__battleprop = true;
  Or.camx = Ox;
  Or.depth = 99000;
  Object.assign(Or, {
    drawblack: 2,
    drawtrack: 1,
    trackx: 0,
    tracky0: 70,
    tracky1: 150,
    tracky2: 230,
    fightmode: 1,
    trackspeed: -15,
    trackaccel: 0,
    trackspeedmax: 0,
    cityscapefade: 0,
    cityscape_active: true,
    cityscape_speed: 0,
    cityscape_alpha: 0,
    shop_spamton_bg_con: 0,
    shop_spamton_bg_timer: 0,
    cityscape_speed_max: 5,
    forcend: 0,
    con: 8,
    image_alpha: 1,
  });
  let OJ = (Oz, OP) => cJ(Oz - Ox, OP - OF, -25, 40);
  Or.coaster_kris = OJ(1721, 60);
  Or.coaster_susie = OJ(1718, 125);
  Or.coaster_ralsei = OJ(1727, 215);
  cG(0, 0, cM);
});
function cK(Ox, OF, Or) {
  let OJ = Ox;
  OJ = OJ < 0 ? 256 - (-OJ % 256) : OJ % 256;
  return p(OJ, OF, Or);
}
cE(cK, "hsv");
var ch = new Map();
function cA(Ox, OF, Or, OJ) {
  let Oz = ch.get(Ox);
  if (!Oz) {
    let OH = document.createElement("canvas");
    if (!OH.getContext) {
      return null;
    }
    Oz = {
      cv: OH,
      im: null,
      col: null,
    };
    ch.set(Ox, Oz);
  }
  if (Oz.im === Or && Oz.col === OJ) {
    return Oz.cv;
  }
  let OP = Oz.cv;
  if (OP.width !== Ox.w || OP.height !== Ox.h) {
    OP.width = Ox.w;
    OP.height = Ox.h;
  }
  let Ok = OP.getContext("2d");
  if (!Ok || !Ok.drawImage) {
    return null;
  } else {
    Ok.globalCompositeOperation = "source-over";
    Ok.clearRect(0, 0, Ox.w, Ox.h);
    Ok.drawImage(Or, 0, 0);
    Ok.globalCompositeOperation = "multiply";
    Ok.fillStyle = OJ;
    Ok.fillRect(0, 0, Ox.w, Ox.h);
    Ok.globalCompositeOperation = "destination-in";
    Ok.drawImage(Or, 0, 0);
    Ok.globalCompositeOperation = "source-over";
    Oz.im = Or;
    Oz.col = OJ;
    return OP;
  }
}
cE(cA, "tintedCopy");
function cq(Ox, OF, Or, OJ, Oz, OP, Ok, OH, OM) {
  let OK = OF && OF.frame(Or);
  if (!OK || OM <= 0 || typeof document === "undefined" || !document.createElement) {
    return;
  }
  let Oh = cA(OF, Or, OK, OH);
  if (Oh) {
    Ox.save();
    Ox.globalAlpha = Math.min(1, OM);
    Ox.drawImage(Oh, OJ - OF.ox * OP, Oz - OF.oy * Ok, OF.w * OP, OF.h * Ok);
    Ox.restore();
  }
}
cE(cq, "drawTinted");
var co = class BO extends cS {
  create() {
    Object.assign(this, {
      siner: 100,
      bgsiner: 0,
      colcol: "rgb(0,0,0)",
      hscroll: 0,
      eyebody: 1,
      adjust: 3,
      slowdown: 0,
      nowcolor: "rgb(0,255,0)",
      roomw: 640,
    });
  }
  step() {
    this.siner += 1;
    this.hscroll += 1;
    if (this.hscroll > 240) {
      this.hscroll -= 240;
    }
    if (this.adjust === 3) {
      if (this.slowdown < 1) {
        this.slowdown += 0.01;
      }
      this.siner -= this.slowdown * 0.5;
      this.bgsiner -= this.slowdown / 24;
      this.hscroll -= this.slowdown * 0.8;
      this.colcol = cU(
        this.nowcolor,
        cK(this.siner / 16, 160 + Math.sin(this.siner / 128) * 60, 255),
        this.slowdown,
      );
      this.nowcolor = cU(
        this.nowcolor,
        cK(this.siner / 16, 255, Math.sin(this.siner / 64) * 40 + 60),
        this.slowdown,
      );
    }
    this.bgsiner += 0.0625;
    if (this.bgsiner > 7) {
      this.bgsiner -= 7;
    }
  }
  draw(Ox) {
    let OF = cg(Ox);
    if (!OF) {
      return;
    }
    OF.save();
    OF.fillStyle = this.nowcolor;
    OF.fillRect(0, 0, 640, 480);
    OF.restore();
    let Or = o("ch2", "bg_fountain1");
    let OJ = o("ch2", "spr_fountainedge");
    let Oz = o("ch2", "spr_fountainbottom");
    let OP = (OA, Oq, Oo) => {
      if (!Or) {
        return;
      }
      let OV = Or.w * 2;
      let Oj = Or.h * 2;
      for (let Oi = (((Oq % Oj) + Oj) % Oj) - Oj; Oi < 480; Oi += Oj) {
        for (let Op = (((OA % OV) + OV) % OV) - OV; Op < 640; Op += OV) {
          cq(OF, Or, 0, Op, Oi, 2, 2, this.colcol, Oo);
        }
      }
    };
    OP(0 - this.siner, 0 - this.siner, this.eyebody * 0.7);
    OP(-240 + this.hscroll, 0 + this.siner, this.eyebody * 0.3);
    let Ok = OJ ? OJ.w * 2 : 200;
    let OH = this.roomw / 2 - Ok / 2;
    OF.save();
    OF.fillStyle = "#000";
    OF.fillRect(0, 0, OH + 1, 281);
    OF.fillRect(this.roomw / 2 + Ok / 2, 0, 999, 281);
    OF.restore();
    let OM = 0 - (this.bgsiner * 280) / 7;
    let OK = 280 - (this.bgsiner * 280) / 7;
    let Oh = Math.sin(this.siner / 16) * 12;
    for (let [OA, Oq] of [
      [0, 1],
      [Oh, 0.5],
      [-Oh, 0.5],
    ]) {
      cq(OF, OJ, 0, OH + OA, OM, 2, 2, this.colcol, Oq);
      cq(OF, OJ, 0, OH + OA, OK, 2, 2, this.colcol, Oq);
    }
    cq(OF, Oz, 0, OH, -8 + Math.sin(this.siner / 16) * 8, 2, 2, this.colcol, 0.3);
    cq(OF, Oz, 0, OH, -4 + Math.sin(this.siner / 16) * 4, 2, 2, this.colcol, 0.5);
    cq(OF, Oz, 0, OH, 0, 2, 2, this.colcol, 1);
    OF.save();
    OF.fillStyle = this.nowcolor;
    OF.fillRect(0, 280, 641, 201);
    OF.restore();
  }
};
cE(co, "obj_darkfountain_battle");
cl(co, "kinds", cZ("obj_darkfountain", cS));
cl(co, "defaultDepth", 1100000);
var cV = co;
A("61sg", () => {
  cG(224, 0, cV);
});
var cj = class BB extends cS {
  create() {
    this.spr = "spr_dojo_discoball";
    this.frame = 0;
    this.anim = 0;
    this.vsp = 0;
    this.blend = 16777215;
  }
  step() {
    this.frame += this.anim;
  }
  draw(Ox) {
    Ox.draw_sprite_ext(this.spr, Math.floor(this.frame), this.x, this.y, 2, 2, 0, this.blend, 1);
  }
};
cE(cj, "obj_dojofx_ball");
cl(cj, "kinds", cZ("obj_dojofx_ball", cS));
cl(cj, "defaultDepth", 5000);
var ci = cj;
var cp = class Bn extends cS {
  create() {
    this.siner = 0;
    this.inbattle = 0;
    this.drawalpha = 1;
    this.bsiner = 0;
    this.ball = cG(320, 0, ci);
    this.ball.anim = 0.18;
    this.ballback = cG(320, 0, ci);
    this.ballback.spr = "spr_dojo_discoball_back";
    this.ballback.depth = 6000;
    cG(0, 0, cd);
  }
  step() {
    let Ox = this.ball;
    Ox.y += Ox.vsp;
    if (cO.mnfight > 0 && cO.fighting === 1) {
      if (Ox.y >= -200) {
        Ox.vsp -= 1;
      } else {
        Ox.vsp = 0;
      }
    } else if (Ox.y < -10) {
      Ox.y = c5(Ox.y, 0, 0.5);
    }
    this.siner++;
    this.ballback.blend = p(this.siner / 4, 255, 220 + Math.sin(this.siner / 15) * 30);
    this.ballback.x = Ox.x;
    this.ballback.y = Ox.y;
  }
};
cE(cp, "obj_dojofx");
cl(cp, "kinds", cZ("obj_dojofx", cS));
cl(cp, "defaultDepth", 1100000);
var cb = cp;
var cs = class Bu extends cS {
  create() {
    this.image_alpha = 0;
  }
  draw(Ox) {
    if (cO.fighting !== 1) {
      if (this.image_alpha > 0) {
        this.image_alpha -= 0.02;
      }
      return;
    }
    if (this.image_alpha < 1) {
      this.image_alpha += 0.02;
    }
    let OF = cO.encounterno >= 90 && cO.encounterno <= 94;
    for (let Or = 0; Or < 6; Or++) {
      let OJ = null;
      let Oz = 0;
      let OP = 0;
      let Ok = 20;
      if (Or <= 2) {
        OJ = cO.char[Or] !== 0 && cO.charinstance ? cO.charinstance[Or] : null;
        if (OJ && !OJ.destroyed) {
          Ok = 80;
          OP = OJ.y + c0(OJ.idlesprite) * 2;
          Oz = OJ.x + 20;
          if (cB(cO.char[Or]) === 2 || cB(cO.char[Or]) === 3) {
            Oz += 15;
          }
        } else {
          OJ = null;
        }
      } else {
        OJ = cO.monsterinstance ? cO.monsterinstance[Or - 3] : null;
        if (!OJ || OJ.destroyed || OF) {
          continue;
        }
        Oz = OJ.x + OJ.sprite_width / 2;
        OP = OJ.y + OJ.sprite_height;
        Ok = OJ.sprite_width;
      }
      if (!OJ || !Number.isFinite(Oz) || !Number.isFinite(OP) || !Number.isFinite(Ok)) {
        continue;
      }
      let OH = 280;
      b(
        "spr_whitegradientdown_40",
        0,
        Oz,
        OP - OH,
        Oz,
        OP - OH,
        Oz - Ok / 2 + 2,
        OP - 2,
        Oz + Ok / 2,
        OP - 2,
        0.25,
      );
      Ox.draw_set_color(8421504);
      c4(Oz - Ok / 2, OP + 4, Oz + Ok / 2, OP - 10, false);
    }
    Ox.draw_set_alpha(1);
  }
};
cE(cs, "obj_dojofx_front");
cl(cs, "kinds", cZ("obj_dojofx_front", cS));
cl(cs, "defaultDepth", 202);
var cd = cs;
function cD() {
  return () => {
    cG(0, 0, j);
    cG(320, 0, cb);
  };
}
cE(cD, "dojoBackground");
ca();
var cT = {
  chapter: 2,
  unusedMonsterTypes: [
    {
      type: 4,
      name: "Ralsei",
      carriedForward: true,
      why: "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it.",
    },
    {
      type: 8,
      name: "Pippins",
      carriedForward: true,
      why: "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it.",
    },
    {
      type: 17,
      name: "DoomTank",
      carriedForward: true,
      why: "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it.",
    },
    {
      type: 41,
      name: "GrazeTest",
      carriedForward: false,
      why: "Defined in scr_monstersetup; no encounter case builds it.",
    },
  ],
  unusedAttackPatterns: [18, 21, 22, 29, 35, 49],
  unusedAttackDetail: [
    {
      type: 18,
      line: 808,
      why: "obj_dbulletcontroller can run pattern 18 (Step_0.gml line 808) but nothing assigns it. The branch is empty - a gutted slot.",
    },
    {
      type: 21,
      line: 876,
      why: "obj_dbulletcontroller can run pattern 21 (Step_0.gml line 876) but nothing assigns it.",
    },
    {
      type: 22,
      line: 883,
      why: "obj_dbulletcontroller can run pattern 22 (Step_0.gml line 883) but nothing assigns it. It spawns obj_musicalfight_speakers.",
    },
    {
      type: 29,
      line: 1153,
      why: "obj_dbulletcontroller can run pattern 29 (Step_0.gml line 1153) but nothing assigns it. It spawns obj_thrash_laserbullet.",
    },
    {
      type: 35,
      line: 1445,
      why: "obj_dbulletcontroller can run pattern 35 (Step_0.gml line 1445) but nothing assigns it. It spawns obj_bulletparent. It sets global.turntimer = 3600, so it must never reach an encounter.",
    },
    {
      type: 49,
      line: 1570,
      why: "obj_dbulletcontroller can run pattern 49 (Step_0.gml line 1570) but nothing assigns it. It spawns obj_sneo_faceattack.",
    },
  ],
  unusedEncounters: [65, 67, 70, 75, 76, 77, 78, 80, 99],
  unusedEncounterWhy: {
    65: 'Nothing in the chapter sets this encounter number. It builds Werewerewire. Its message is "* Werewerewire strongly blocks the way!".',
    67: 'Nothing in the chapter sets this encounter number. It builds Virovirokun. Its message is "* H-huh!? What\'s going on!?".',
    70: 'Nothing in the chapter sets this encounter number. It builds Poppup, Tasque. Its message is "* Animal house.".',
    75: 'Nothing in the chapter sets this encounter number. It builds Werewire. Its message is "* Werewires swung in!".',
    76: 'Nothing in the chapter sets this encounter number. It builds Werewire, Maus. Its message is "* Werewire and Maus swung down like stringed superheroes!".',
    77: 'Nothing in the chapter sets this encounter number. It builds Poppup, Ambyu-Lance. Its message is "* Ambyu-Lance and its pet appeared!".',
    78: 'Nothing in the chapter sets this encounter number. It builds Swatchling, Poppup. Its message is "* Poppup and caretakers appeared!". The GML never gives slot 2 an instance type, so that monster has stats and no object - ported as written.',
    80: 'Nothing in the chapter sets this encounter number. It builds Swatchling, Maus. Its message is "* Swatchling and vermin appeared!".',
    99: 'Nothing in the chapter sets this encounter number. It builds Enemy. Its message is "* Test enemies showed up.".',
  },
  carriedForwardEncounters: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28,
    29, 30, 31, 32, 33, 40,
  ],
  unusedEnemyObjects: [
    {
      object: "obj_debug_swatchling",
      parent: "obj_monsterparent",
      events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
      lines: 5,
      type: 36,
      typeFrom: 'its name matches scr_monstersetup type 36 "Swatchling"',
      name: "Swatchling",
      gutted: true,
      attackTypes: [],
      needs: [],
      why: 'No encounter names it, and all 5 of its events are a bare exit; - the object still exists and everything it used to do was deleted. Stats: its name matches scr_monstersetup type 36 "Swatchling".',
    },
    {
      object: "obj_placeholderenemy",
      parent: "obj_monsterparent",
      events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
      lines: 317,
      type: 1,
      typeFrom: "chapter 1 scr_encountersetup gives monstertype 1",
      name: "Enemy",
      gutted: false,
      attackTypes: [0, 1],
      needs: [],
      why: "5 events, 317 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 1 scr_encountersetup gives monstertype 1.",
    },
    {
      object: "obj_ralseienemy",
      parent: "obj_monsterparent",
      events: ["Alarm_4", "Alarm_5", "Create_0", "Destroy_0", "Draw_0", "Other_22", "Step_0"],
      lines: 702,
      type: 4,
      typeFrom: 'its name matches scr_monstersetup type 4 "Ralsei"',
      name: "Ralsei",
      gutted: false,
      attackTypes: [],
      needs: [],
      why: '7 events, 702 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: its name matches scr_monstersetup type 4 "Ralsei".',
    },
    {
      object: "obj_rouxls_enemy_old_copy",
      parent: "obj_monsterparent",
      events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
      lines: 637,
      type: 45,
      typeFrom:
        "chapter 2 scr_encountersetup gives monstertype 45 (via its shipped sibling obj_rouxls_enemy)",
      name: "Rouxls",
      gutted: false,
      attackTypes: [26, 27, 28],
      needs: [
        {
          object: "obj_rouxls_enemy",
          type: 45,
        },
      ],
      why: "5 events, 637 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 2 scr_encountersetup gives monstertype 45 (via its shipped sibling obj_rouxls_enemy). Its attack patterns (26, 27, 28) read obj_rouxls_enemy by name, so they cannot run without that enemy in the fight - standalone they fault where the GML would fault too.",
    },
  ],
  unplaceable: [],
  unsound: {
    note: "flag-driven grants make these mostly false positives; not surfaced in the UI",
    unusedItems: [
      {
        id: 11,
        name: "ClubsSandwich",
      },
      {
        id: 14,
        name: "Favwich",
      },
      {
        id: 18,
        name: "Kris Tea",
      },
      {
        id: 19,
        name: "Noelle Tea",
      },
      {
        id: 21,
        name: "Susie Tea",
      },
      {
        id: 26,
        name: "JavaCookie",
      },
      {
        id: 27,
        name: "TensionBit",
      },
      {
        id: 28,
        name: "TensionGem",
      },
      {
        id: 29,
        name: "TensionMax",
      },
      {
        id: 30,
        name: "ReviveDust",
      },
      {
        id: 31,
        name: "ReviveBrite",
      },
    ],
    unusedWeapons: [
      {
        id: 1,
        name: "Wood Blade",
      },
      {
        id: 2,
        name: "Mane Ax",
      },
      {
        id: 3,
        name: "Red Scarf",
      },
      {
        id: 4,
        name: "EverybodyWeapon",
      },
      {
        id: 5,
        name: "Spookysword",
      },
      {
        id: 6,
        name: "Brave Ax",
      },
      {
        id: 7,
        name: "Devilsknife",
      },
      {
        id: 8,
        name: "Trefoil",
      },
      {
        id: 9,
        name: "Ragger",
      },
      {
        id: 10,
        name: "DaintyScarf",
      },
      {
        id: 11,
        name: "TwistedSwd",
      },
      {
        id: 12,
        name: "SnowRing",
      },
      {
        id: 14,
        name: "BounceBlade",
      },
      {
        id: 15,
        name: "CheerScarf",
      },
      {
        id: 16,
        name: "MechaSaber",
      },
      {
        id: 17,
        name: "AutoAxe",
      },
      {
        id: 18,
        name: "FiberScarf",
      },
      {
        id: 19,
        name: "Ragger2",
      },
      {
        id: 20,
        name: "BrokenSwd",
      },
    ],
    unusedArmors: [
      {
        id: 1,
        name: "Amber Card",
      },
      {
        id: 2,
        name: "Dice Brace",
      },
      {
        id: 3,
        name: "Pink Ribbon",
      },
      {
        id: 4,
        name: "White Ribbon",
      },
      {
        id: 6,
        name: "MouseToken",
      },
      {
        id: 7,
        name: "Jevilstail",
      },
      {
        id: 8,
        name: "Silver Card",
      },
      {
        id: 9,
        name: "TwinRibbon",
      },
      {
        id: 10,
        name: "GlowWrist",
      },
      {
        id: 11,
        name: "ChainMail",
      },
      {
        id: 12,
        name: "B.ShotBowtie",
      },
      {
        id: 13,
        name: "SpikeBand",
      },
      {
        id: 14,
        name: "Silver Watch",
      },
      {
        id: 15,
        name: "TensionBow",
      },
      {
        id: 17,
        name: "DarkGoldBand",
      },
      {
        id: 18,
        name: "SkyMantle",
      },
      {
        id: 19,
        name: "SpikeShackle",
      },
      {
        id: 20,
        name: "FrayedBowtie",
      },
      {
        id: 22,
        name: "RoyalPin",
      },
    ],
  },
  unusedItems: [
    {
      id: 11,
      name: "ClubsSandwich",
    },
    {
      id: 14,
      name: "Favwich",
    },
    {
      id: 18,
      name: "Kris Tea",
    },
    {
      id: 19,
      name: "Noelle Tea",
    },
    {
      id: 21,
      name: "Susie Tea",
    },
    {
      id: 26,
      name: "JavaCookie",
    },
    {
      id: 27,
      name: "TensionBit",
    },
    {
      id: 28,
      name: "TensionGem",
    },
    {
      id: 29,
      name: "TensionMax",
    },
    {
      id: 30,
      name: "ReviveDust",
    },
    {
      id: 31,
      name: "ReviveBrite",
    },
  ],
  unusedWeapons: [
    {
      id: 1,
      name: "Wood Blade",
    },
    {
      id: 2,
      name: "Mane Ax",
    },
    {
      id: 3,
      name: "Red Scarf",
    },
    {
      id: 4,
      name: "EverybodyWeapon",
    },
    {
      id: 5,
      name: "Spookysword",
    },
    {
      id: 6,
      name: "Brave Ax",
    },
    {
      id: 7,
      name: "Devilsknife",
    },
    {
      id: 8,
      name: "Trefoil",
    },
    {
      id: 9,
      name: "Ragger",
    },
    {
      id: 10,
      name: "DaintyScarf",
    },
    {
      id: 11,
      name: "TwistedSwd",
    },
    {
      id: 12,
      name: "SnowRing",
    },
    {
      id: 14,
      name: "BounceBlade",
    },
    {
      id: 15,
      name: "CheerScarf",
    },
    {
      id: 16,
      name: "MechaSaber",
    },
    {
      id: 17,
      name: "AutoAxe",
    },
    {
      id: 18,
      name: "FiberScarf",
    },
    {
      id: 19,
      name: "Ragger2",
    },
    {
      id: 20,
      name: "BrokenSwd",
    },
  ],
  unusedArmors: [
    {
      id: 1,
      name: "Amber Card",
    },
    {
      id: 2,
      name: "Dice Brace",
    },
    {
      id: 3,
      name: "Pink Ribbon",
    },
    {
      id: 4,
      name: "White Ribbon",
    },
    {
      id: 6,
      name: "MouseToken",
    },
    {
      id: 7,
      name: "Jevilstail",
    },
    {
      id: 8,
      name: "Silver Card",
    },
    {
      id: 9,
      name: "TwinRibbon",
    },
    {
      id: 10,
      name: "GlowWrist",
    },
    {
      id: 11,
      name: "ChainMail",
    },
    {
      id: 12,
      name: "B.ShotBowtie",
    },
    {
      id: 13,
      name: "SpikeBand",
    },
    {
      id: 14,
      name: "Silver Watch",
    },
    {
      id: 15,
      name: "TensionBow",
    },
    {
      id: 17,
      name: "DarkGoldBand",
    },
    {
      id: 18,
      name: "SkyMantle",
    },
    {
      id: 19,
      name: "SpikeShackle",
    },
    {
      id: 20,
      name: "FrayedBowtie",
    },
    {
      id: 22,
      name: "RoyalPin",
    },
  ],
  definedAttackPatterns: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 46, 47, 48, 49, 50, 51,
  ],
  definedMonsterTypes: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 30, 31,
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
  ],
};
ca();
ca();
var cX = new Proxy(
  {},
  {
    get: cE((Ox, OF) => g[OF] || c6[OF], "get"),
  },
);
var cL = cE((Ox) => x[Ox] || k[Ox] || T[Ox] || (() => {}), "SCRIPT");
var { instance_exists: O0 } = T;
var O1 = new Proxy(
  {},
  {
    get: cE((Ox, OF) => cX[OF], "get"),
  },
);
function O2(Ox) {
  this.xx = 0;
  this.yy = 0;
  this.i = 0;
  for (; this.i < 3; this.i += 1) {
    c1(cO, "heromakex")[this.i] = this.xx + 80;
    c1(cO, "heromakey")[this.i] = this.yy + 50 + this.i * 80;
    c1(cO, "monsterinstancetype")[this.i] = cX.obj_baseenemy;
    c1(cO, "monstertype")[this.i] = 1;
    c1(cO, "monstermakex")[this.i] = this.xx + 500 + this.i * 20;
    c1(cO, "monstermakey")[this.i] = this.yy + 40 + this.i * 90;
  }
  c1(cO, "monstertype", 1)[1] = 0;
  c1(cO, "monstertype", 2)[2] = 0;
  if (cO.char[0] !== 0 && cO.char[1] === 0 && cO.char[2] === 0) {
    c1(cO, "heromakey")[0] = this.yy + 140;
  }
  if (cO.char[0] !== 0 && cO.char[1] !== 0 && cO.char[2] === 0) {
    c1(cO, "heromakey")[0] = this.yy + 100;
    c1(cO, "heromakey")[1] = this.yy + 180;
  }
  c1(cO, "battlemsg")[0] = "* It is known.";
  switch (Ox) {
    case 0:
      break;
    case 1: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_baseenemy;
      c1(cO, "monstertype")[0] = 1;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 110;
      c1(cO, "monsterinstancetype")[1] = cX.obj_baseenemy;
      c1(cO, "monstertype")[1] = 1;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 200;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Test enemies showed up.";
      break;
    }
    case 2: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_lancerboss;
      c1(cO, "monstertype")[0] = 2;
      c1(cO, "monstermakex")[0] = this.xx + 540;
      c1(cO, "monstermakey")[0] = this.yy + 200;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      break;
    }
    case 3: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_dummyenemy;
      c1(cO, "monstertype")[0] = 3;
      c1(cO, "monstermakex")[0] = this.xx + 500;
      c1(cO, "monstermakey")[0] = this.yy + 160;
      if (cC(O0(cX.obj_npc_room))) {
        c1(cO, "monstermakex")[0] = c2("obj_npc_room").xstart;
        c1(cO, "monstermakey")[0] = c2("obj_npc_room").ystart;
      }
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      break;
    }
    case 4: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_diamondenemy;
      c1(cO, "monstertype")[0] = 5;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 140;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Rudinn drew near!";
      if (cO.flag[500] >= 1) {
        c1(cO, "battlemsg")[0] = "* A different Rudinn from last time drew near!";
      }
      if (cO.flag[500] === 2) {
        c1(cO, "battlemsg")[0] = "* Assumedly another different Rudinn appeared!";
      }
      break;
    }
    case 5: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_diamondenemy;
      c1(cO, "monstertype")[0] = 5;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 110;
      c1(cO, "monsterinstancetype")[1] = cX.obj_diamondenemy;
      c1(cO, "monstertype")[1] = 5;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 200;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* A necklace of Rudinns blocks your path.";
      break;
    }
    case 6: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_diamondenemy;
      c1(cO, "monstertype")[0] = 5;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 110;
      c1(cO, "monsterinstancetype")[1] = cX.obj_heartenemy;
      c1(cO, "monstertype")[1] = 6;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 200;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Rudinn and Hathy blocked the way!";
      break;
    }
    case 7: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_smallcheckers_enemy;
      c1(cO, "monstertype")[0] = 9;
      c1(cO, "monstermakex")[0] = this.xx + 440;
      c1(cO, "monstermakey")[0] = this.yy + 150;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] =
        "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
      break;
    }
    case 8: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_clubsenemy;
      c1(cO, "monstertype")[0] = 16;
      c1(cO, "monstermakex")[0] = this.xx + 400;
      c1(cO, "monstermakey")[0] = this.yy + 120;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Clover grew close!";
      break;
    }
    case 9: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_heartenemy;
      c1(cO, "monstertype")[0] = 6;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 20;
      c1(cO, "monsterinstancetype")[1] = cX.obj_heartenemy;
      c1(cO, "monstertype")[1] = 6;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 120;
      c1(cO, "monsterinstancetype")[2] = cX.obj_heartenemy;
      c1(cO, "monstertype")[2] = 6;
      c1(cO, "monstermakex")[2] = this.xx + 460;
      c1(cO, "monstermakey")[2] = this.yy + 220;
      c1(cO, "battlemsg")[0] = "* Three Hathys blocked the way!";
      break;
    }
    case 12: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_checkers_enemy;
      c1(cO, "monstertype")[0] = 10;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 120;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Here it comes!";
      break;
    }
    case 13: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_ponman_enemy;
      c1(cO, "monstertype")[0] = 11;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 110;
      c1(cO, "monsterinstancetype")[1] = cX.obj_ponman_enemy;
      c1(cO, "monstertype")[1] = 11;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 200;
      c1(cO, "battlemsg")[0] = "* Ponman drew near!";
      c1(cO, "monstertype", 2)[2] = 0;
      break;
    }
    case 14: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_ponman_enemy;
      c1(cO, "monstertype")[0] = 11;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 20;
      c1(cO, "monsterinstancetype")[1] = cX.obj_ponman_enemy;
      c1(cO, "monstertype")[1] = 11;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 120;
      c1(cO, "monsterinstancetype")[2] = cX.obj_ponman_enemy;
      c1(cO, "monstertype")[2] = 11;
      c1(cO, "monstermakex")[2] = this.xx + 460;
      c1(cO, "monstermakey")[2] = this.yy + 220;
      c1(cO, "battlemsg")[0] = "* Ponman drew near!";
      break;
    }
    case 15: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_clubsenemy;
      c1(cO, "monstertype")[0] = 7;
      c1(cO, "monstermakex")[0] = this.xx + 400;
      c1(cO, "monstermakey")[0] = this.yy + 30;
      c1(cO, "monsterinstancetype")[1] = cX.obj_heartenemy;
      c1(cO, "monstertype")[1] = 6;
      c1(cO, "monstermakex")[1] = this.xx + 420;
      c1(cO, "monstermakey")[1] = this.yy + 200;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Clover and Hathy grew close!";
      break;
    }
    case 16: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_rabbick_enemy;
      c1(cO, "monstertype")[0] = 13;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 140;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Rabbick slithered in the way!";
      break;
    }
    case 17: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_rabbick_enemy;
      c1(cO, "monstertype")[0] = 13;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 60;
      c1(cO, "monsterinstancetype")[1] = cX.obj_rabbick_enemy;
      c1(cO, "monstertype")[1] = 13;
      c1(cO, "monstermakex")[1] = this.xx + 460;
      c1(cO, "monstermakey")[1] = this.yy + 180;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Rabbicks slithered in the way!";
      break;
    }
    case 18: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_bloxer_enemy;
      c1(cO, "monstertype")[0] = 14;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 140;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Bloxer assembled!";
      break;
    }
    case 19: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_bloxer_enemy;
      c1(cO, "monstertype")[0] = 14;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 60;
      c1(cO, "monsterinstancetype")[1] = cX.obj_bloxer_enemy;
      c1(cO, "monstertype")[1] = 14;
      c1(cO, "monstermakex")[1] = this.xx + 460;
      c1(cO, "monstermakey")[1] = this.yy + 180;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Bloxers assembled!";
      break;
    }
    case 20: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_lancerboss2;
      c1(cO, "monstertype")[0] = 12;
      c1(cO, "heromakex")[0] = this.xx + 120;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 160;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Lancer blocked the way!";
      break;
    }
    case 21: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_jigsawryenemy;
      c1(cO, "monstertype")[0] = 15;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 140;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Jigsawry drew near!";
      if (cO.flag[500] >= 1) {
        c1(cO, "battlemsg")[0] = "* A different Jigsawry from last time drew near!";
      }
      if (cO.flag[500] === 2) {
        c1(cO, "battlemsg")[0] = "* Assumedly another different Jigsawry appeared!";
      }
      break;
    }
    case 22: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_jigsawryenemy;
      c1(cO, "monstertype")[0] = 15;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 20;
      c1(cO, "monsterinstancetype")[1] = cX.obj_jigsawryenemy;
      c1(cO, "monstertype")[1] = 15;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 120;
      c1(cO, "monsterinstancetype")[2] = cX.obj_jigsawryenemy;
      c1(cO, "monstertype")[2] = 15;
      c1(cO, "monstermakex")[2] = this.xx + 460;
      c1(cO, "monstermakey")[2] = this.yy + 220;
      c1(cO, "battlemsg")[0] = "* A board of Jigsawrys blocked the way!";
      break;
    }
    case 23: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_jigsawryenemy;
      c1(cO, "monstertype")[0] = 15;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 20;
      c1(cO, "monsterinstancetype")[1] = cX.obj_diamondenemy;
      c1(cO, "monstertype")[1] = 5;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 120;
      c1(cO, "monsterinstancetype")[2] = cX.obj_heartenemy;
      c1(cO, "monstertype")[2] = 6;
      c1(cO, "monstermakex")[2] = this.xx + 460;
      c1(cO, "monstermakey")[2] = this.yy + 220;
      c1(cO, "battlemsg")[0] = "* Smorgasboard.";
      break;
    }
    case 24: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_rabbick_enemy;
      c1(cO, "monstertype")[0] = 13;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 60;
      c1(cO, "monsterinstancetype")[1] = cX.obj_diamondenemy;
      c1(cO, "monstertype")[1] = 5;
      c1(cO, "monstermakex")[1] = this.xx + 460;
      c1(cO, "monstermakey")[1] = this.yy + 180;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Rabbick slithered in the way!";
      break;
    }
    case 25: {
      c1(cO, "heromakex")[0] = this.xx + 80;
      c1(cO, "heromakey")[0] = this.yy + 100;
      c1(cO, "heromakex")[1] = this.xx + 90;
      c1(cO, "heromakey")[1] = this.yy + 150;
      c1(cO, "heromakex")[2] = this.xx + 100;
      c1(cO, "heromakey")[2] = this.yy + 210;
      c1(cO, "monsterinstancetype")[0] = cX.obj_joker;
      c1(cO, "monstertype")[0] = 20;
      c1(cO, "monstermakex")[0] = this.xx + 500;
      c1(cO, "monstermakey")[0] = this.yy + 160;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* LET THE GAMES BEGIN!";
      break;
    }
    case 27: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_checkers_enemy;
      c1(cO, "monstertype")[0] = 21;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 120;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Here it comes^1. Again.";
      c1(cO, "heromakey")[0] = this.yy + 65;
      break;
    }
    case 28: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_rudinnranger;
      c1(cO, "monstertype")[0] = 22;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 110;
      c1(cO, "monsterinstancetype")[1] = cX.obj_rudinnranger;
      c1(cO, "monstertype")[1] = 22;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 200;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Rudinn Rangers came sparkling into view!";
      break;
    }
    case 29: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_headhathy;
      c1(cO, "monstertype")[0] = 23;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 110;
      c1(cO, "monsterinstancetype")[1] = cX.obj_headhathy;
      c1(cO, "monstertype")[1] = 23;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 200;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Head Hathy blocked the way quietly!";
      break;
    }
    case 30: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_headhathy;
      c1(cO, "monstertype")[0] = 23;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 20;
      c1(cO, "monsterinstancetype")[1] = cX.obj_headhathy;
      c1(cO, "monstertype")[1] = 23;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 120;
      c1(cO, "monsterinstancetype")[2] = cX.obj_headhathy;
      c1(cO, "monstertype")[2] = 23;
      c1(cO, "monstermakex")[2] = this.xx + 460;
      c1(cO, "monstermakey")[2] = this.yy + 220;
      c1(cO, "battlemsg")[0] = "* Head Hathy blocked the way quietly! (x3)";
      break;
    }
    case 31: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_susieenemy;
      c1(cO, "monstertype")[0] = 19;
      c1(cO, "monstermakex")[0] = this.xx + 520;
      c1(cO, "monstermakey")[0] = this.yy + 80;
      c1(cO, "monsterinstancetype")[1] = cX.obj_lancerboss3;
      c1(cO, "monstertype")[1] = 18;
      c1(cO, "monstermakex")[1] = this.xx + 540;
      c1(cO, "monstermakey")[1] = this.yy + 240;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Two bad guys blocked the way!";
      break;
    }
    case 32: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_rabbick_enemy;
      c1(cO, "monstertype")[0] = 13;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 20;
      c1(cO, "monsterinstancetype")[1] = cX.obj_rabbick_enemy;
      c1(cO, "monstertype")[1] = 13;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 120;
      c1(cO, "monsterinstancetype")[2] = cX.obj_rabbick_enemy;
      c1(cO, "monstertype")[2] = 13;
      c1(cO, "monstermakex")[2] = this.xx + 460;
      c1(cO, "monstermakey")[2] = this.yy + 220;
      c1(cO, "battlemsg")[0] = "* Rabbicks slithered in the way!";
      break;
    }
    case 33: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_diamondenemy;
      c1(cO, "monstertype")[0] = 5;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 20;
      c1(cO, "monsterinstancetype")[1] = cX.obj_heartenemy;
      c1(cO, "monstertype")[1] = 6;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 120;
      c1(cO, "monsterinstancetype")[2] = cX.obj_diamondenemy;
      c1(cO, "monstertype")[2] = 5;
      c1(cO, "monstermakex")[2] = this.xx + 460;
      c1(cO, "monstermakey")[2] = this.yy + 220;
      c1(cO, "battlemsg")[0] = "* Various guys appeared!";
      break;
    }
    case 40: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_king_boss;
      c1(cO, "monstertype")[0] = 25;
      c1(cO, "monstermakex")[0] = this.xx + 460;
      c1(cO, "monstermakey")[0] = this.yy + 70;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* King blocked the way!";
      break;
    }
    case 50: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[0] = 30;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 110;
      c1(cO, "monsterinstancetype")[1] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[1] = 30;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 200;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Ambyu-Lances beeped towards you!";
      if (cO.chapter === 2 && c3 === "room_dw_city_postbaseball_1") {
        c1(cO, "battlemsg")[0] = "* Hey Kris^1, lemme show you my ultimate healing!";
      }
      break;
    }
    case 51: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_poppup_enemy;
      c1(cO, "monstertype")[0] = 31;
      c1(cO, "monstermakex")[0] = this.xx + 440;
      c1(cO, "monstermakey")[0] = this.yy + 50;
      c1(cO, "monsterinstancetype")[1] = cX.obj_poppup_enemy;
      c1(cO, "monstertype")[1] = 31;
      c1(cO, "monstermakex")[1] = this.xx + 490;
      c1(cO, "monstermakey")[1] = this.yy + 120;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "monstermakex")[2] = this.xx + 440;
      c1(cO, "monstermakey")[2] = this.yy + 190;
      c1(cO, "battlemsg")[0] = "* Poppups popped up!";
      break;
    }
    case 52: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[0] = 32;
      c1(cO, "monstermakex")[0] = this.xx + 440;
      c1(cO, "monstermakey")[0] = this.yy + 50;
      c1(cO, "monsterinstancetype")[1] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[1] = 32;
      c1(cO, "monstermakex")[1] = this.xx + 480;
      c1(cO, "monstermakey")[1] = this.yy + 160;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Tasques crossed your path!";
      break;
    }
    case 53: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[0] = 33;
      c1(cO, "monstermakex")[0] = this.xx + 490;
      c1(cO, "monstermakey")[0] = this.yy + 60;
      c1(cO, "monsterinstancetype")[1] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[1] = 33;
      c1(cO, "monstermakex")[1] = this.xx + 520;
      c1(cO, "monstermakey")[1] = this.yy + 190;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Werewires swung in!";
      break;
    }
    case 54: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[0] = 34;
      c1(cO, "monstermakex")[0] = this.xx + 478;
      c1(cO, "monstermakey")[0] = this.yy + 98;
      c1(cO, "monsterinstancetype")[1] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[1] = 34;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 202;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Maice blocked the way! ";
      break;
    }
    case 55: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[0] = 35;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 40;
      c1(cO, "monsterinstancetype")[1] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[1] = 35;
      c1(cO, "monstermakex")[1] = this.xx + 510;
      c1(cO, "monstermakey")[1] = this.yy + 154;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Virovirokun floated in!";
      if (cO.ambush === 2) {
        c1(cO, "battlemsg")[0] = "* First strike!";
      }
      break;
    }
    case 56: {
      c1(cO, "flag")[426] = cN(0, 1, 2, 3);
      if (cO.flag[541] === 0) {
        c1(cO, "flag")[426] = -1;
      }
      c1(cO, "monsterinstancetype")[0] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[0] = 36;
      c1(cO, "monstermakex")[0] = this.xx + 394;
      c1(cO, "monstermakey")[0] = this.yy + 7;
      c1(cO, "monsterinstancetype")[1] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[1] = 36;
      c1(cO, "monstermakex")[1] = this.xx + 490;
      c1(cO, "monstermakey")[1] = this.yy + 74;
      c1(cO, "monsterinstancetype")[2] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[2] = 36;
      c1(cO, "monstermakex")[2] = this.xx + 394;
      c1(cO, "monstermakey")[2] = this.yy + 180;
      c1(cO, "battlemsg")[0] = "* Swatchlings bowed in!";
      break;
    }
    case 57: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[0] = 32;
      c1(cO, "monstermakex")[0] = this.xx + 450;
      c1(cO, "monstermakey")[0] = this.yy + 35;
      c1(cO, "monsterinstancetype")[1] = cX.obj_tasque_manager_enemy;
      c1(cO, "monstertype")[1] = 42;
      c1(cO, "monstermakex")[1] = this.xx + 486;
      c1(cO, "monstermakey")[1] = this.yy + 95;
      c1(cO, "monsterinstancetype")[2] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[2] = 32;
      c1(cO, "monstermakex")[2] = this.xx + 450;
      c1(cO, "monstermakey")[2] = this.yy + 220;
      c1(cO, "battlemsg")[0] = "* Tasque Manager blocks the way!";
      break;
    }
    case 58: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_berdlyb_enemy;
      c1(cO, "monstertype")[0] = 43;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 100;
      c1(cO, "monsterinstancetype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Berdly rides in!";
      break;
    }
    case 59: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_queen_enemy;
      c1(cO, "monstertype")[0] = 48;
      if (cL("scr_sideb_get_phase").call(this) < 2) {
        c1(cO, "monstermakex")[0] = this.xx + 470;
        c1(cO, "monstermakey")[0] = this.yy + 120;
      } else {
        c1(cO, "monstermakex")[0] = this.xx + 450;
        c1(cO, "monstermakey")[0] = this.yy + 98;
      }
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Queen blocks the way!";
      break;
    }
    case 60: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_spamton_enemy;
      c1(cO, "monstertype")[0] = 49;
      c1(cO, "monstermakex")[0] = this.xx + 490;
      c1(cO, "monstermakey")[0] = this.yy + 180;
      c1(cO, "heromakex")[0] = this.xx + 90;
      c1(cO, "heromakey")[0] = this.yy + 170;
      c1(cO, "battlemsg")[0] = "* DON'T YOU WANNA BE A BIG SHOT?";
      break;
    }
    case 61: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_spamton_neo_enemy;
      c1(cO, "monstertype")[0] = 50;
      c1(cO, "monstermakex")[0] = this.xx + 460;
      c1(cO, "monstermakey")[0] = this.yy + 80;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "heromakex")[0] = this.xx + 80;
      c1(cO, "heromakey")[0] = this.yy + 60;
      if (cL("scr_sideb_get_phase").call(this) > 2) {
        c1(cO, "heromakey")[0] = this.yy + 173;
      }
      c1(cO, "battlemsg")[0] = "* It's time to be a BIG SHOT!";
      break;
    }
    case 62: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_sweet_enemy;
      c1(cO, "monstertype")[0] = 39;
      c1(cO, "monstermakex")[0] = this.xx + 460;
      c1(cO, "monstermakey")[0] = this.yy + 40;
      c1(cO, "monsterinstancetype")[1] = cX.obj_kk_enemy;
      c1(cO, "monstertype")[1] = 38;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 90;
      c1(cO, "monsterinstancetype")[2] = cX.obj_hatguy_enemy;
      c1(cO, "monstertype")[2] = 37;
      c1(cO, "monstermakex")[2] = this.xx + 480;
      c1(cO, "monstermakey")[2] = this.yy + 200;
      c1(cO, "battlemsg")[0] = "* Sweet Cap'n Cakes block your way!";
      break;
    }
    case 63: {
      if (cC(cL("i_ex").call(this, cX.obj_ch2_scene21_loop))) {
        cQ.with("obj_ch2_scene21_loop", (OF) => {
          c1(cO, "heromakex")[0] = OF.kr_actor.x;
          c1(cO, "heromakey")[0] = OF.kr_actor.y;
          c1(cO, "heromakex")[1] = OF.ra_actor.x;
          c1(cO, "heromakey")[1] = OF.ra_actor.y;
        });
      }
      c1(cO, "monsterinstancetype")[0] = cX.obj_rouxls_enemy;
      c1(cO, "monstertype")[0] = 45;
      c1(cO, "monstermakex")[0] = this.xx + 500;
      c1(cO, "monstermakey")[0] = this.yy + 60;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Thrash Machine reluctantly fights you!";
      break;
    }
    case 64: {
      c1(cO, "flag")[426] = cN(4, 5, 6, 7, 8);
      c1(cO, "monsterinstancetype")[0] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[0] = 36;
      c1(cO, "monstermakex")[0] = this.xx + 432;
      c1(cO, "monstermakey")[0] = this.yy + 24;
      c1(cO, "monsterinstancetype")[1] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[1] = 36;
      c1(cO, "monstermakex")[1] = this.xx + 488;
      c1(cO, "monstermakey")[1] = this.yy + 142;
      c1(cO, "battlemsg")[0] = "* Swatchlings bowed in!";
      break;
    }
    case 65: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_werewerewire_enemy;
      c1(cO, "monstertype")[0] = 40;
      c1(cO, "monstermakex")[0] = this.xx + 502;
      c1(cO, "monstermakey")[0] = this.yy + 70;
      c1(cO, "monsterinstancetype")[1] = cX.obj_werewerewire_enemy;
      c1(cO, "monstertype")[1] = 40;
      c1(cO, "monstermakex")[1] = this.xx + 456;
      c1(cO, "monstermakey")[1] = this.yy + 190;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Werewerewire strongly blocks the way!";
      break;
    }
    case 66: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[0] = 34;
      c1(cO, "monstermakex")[0] = this.xx + 500;
      c1(cO, "monstermakey")[0] = this.yy + 172;
      c1(cO, "battlemsg")[0] = "* Maus blocked the way! ";
      break;
    }
    case 67: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[0] = 35;
      c1(cO, "monstermakex")[0] = this.xx + 494;
      c1(cO, "monstermakey")[0] = this.yy + 110;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* H-huh!? What's going on!?";
      break;
    }
    case 68: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[0] = 35;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 40;
      c1(cO, "monsterinstancetype")[1] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[1] = 30;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 160;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Virovirokun and Ambyu-lance are fighting each other!";
      break;
    }
    case 69: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[0] = 30;
      c1(cO, "monstermakex")[0] = this.xx + 500;
      c1(cO, "monstermakey")[0] = this.yy + 40;
      c1(cO, "monsterinstancetype")[1] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[1] = 35;
      c1(cO, "monstermakex")[1] = this.xx + 480;
      c1(cO, "monstermakey")[1] = this.yy + 160;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Virovirokun and Ambyu-lance are fighting each other!";
      break;
    }
    case 70: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_poppup_enemy;
      c1(cO, "monstertype")[0] = 31;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 150;
      c1(cO, "monsterinstancetype")[1] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[1] = 32;
      c1(cO, "monstermakex")[1] = this.xx + 480;
      c1(cO, "monstermakey")[1] = this.yy + 170;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Animal house.";
      break;
    }
    case 71: {
      c1(cO, "heromakex")[0] = this.xx + 94;
      c1(cO, "heromakey")[0] = this.yy + 50;
      c1(cO, "heromakex")[1] = this.xx + 80;
      c1(cO, "heromakey")[1] = this.yy + 122;
      c1(cO, "heromakex")[2] = this.xx + 72;
      c1(cO, "heromakey")[2] = this.yy + 200;
      c1(cO, "monsterinstancetype")[0] = cX.obj_clubsenemy;
      c1(cO, "monstertype")[0] = 47;
      c1(cO, "monstermakex")[0] = this.xx + 400;
      c1(cO, "monstermakey")[0] = this.yy + 80;
      c1(cO, "battlemsg")[0] = "* Clover joins the stage!";
      break;
    }
    case 72: {
      c1(cO, "heromakex")[0] = this.xx + 94;
      c1(cO, "heromakey")[0] = this.yy + 50;
      c1(cO, "heromakex")[1] = this.xx + 80;
      c1(cO, "heromakey")[1] = this.yy + 122;
      c1(cO, "heromakex")[2] = this.xx + 72;
      c1(cO, "heromakey")[2] = this.yy + 200;
      c1(cO, "monsterinstancetype")[0] = cX.obj_dojograzeenemy;
      c1(cO, "monstertype")[0] = 42;
      c1(cO, "monstermakex")[0] = this.xx + 440;
      c1(cO, "monstermakey")[0] = this.yy + 100;
      c1(cO, "battlemsg")[0] = "* It's a grazing adventure.";
      break;
    }
    case 73: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[0] = 35;
      c1(cO, "monstermakex")[0] = this.xx + 494;
      c1(cO, "monstermakey")[0] = this.yy + 110;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "\\EE* H-huh!? What's going on!?&* What are we doing!?";
      break;
    }
    case 74: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[0] = 33;
      c1(cO, "monstermakex")[0] = this.xx + 494;
      c1(cO, "monstermakey")[0] = this.yy + 64;
      c1(cO, "monsterinstancetype")[1] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[1] = 32;
      c1(cO, "monstermakex")[1] = this.xx + 430;
      c1(cO, "monstermakey")[1] = this.yy + 130;
      c1(cO, "monsterinstancetype")[2] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[2] = 35;
      c1(cO, "monstermakex")[2] = this.xx + 495;
      c1(cO, "monstermakey")[2] = this.yy + 204;
      c1(cO, "battlemsg")[0] = "* Smorgasbord 2.";
      break;
    }
    case 75: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[0] = 33;
      c1(cO, "monstermakex")[0] = this.xx + 540;
      c1(cO, "monstermakey")[0] = this.yy + 85;
      c1(cO, "monsterinstancetype")[1] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[1] = 33;
      c1(cO, "monstermakex")[1] = this.xx + 435;
      c1(cO, "monstermakey")[1] = this.yy + 144;
      c1(cO, "monsterinstancetype")[2] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[2] = 33;
      c1(cO, "monstermakex")[2] = this.xx + 522;
      c1(cO, "monstermakey")[2] = this.yy + 214;
      c1(cO, "battlemsg")[0] = "* Werewires swung in!";
      break;
    }
    case 76: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[0] = 33;
      c1(cO, "monstermakex")[0] = this.xx + 500;
      c1(cO, "monstermakey")[0] = this.yy + 62;
      c1(cO, "monsterinstancetype")[1] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[1] = 33;
      c1(cO, "monstermakex")[1] = this.xx + 434;
      c1(cO, "monstermakey")[1] = this.yy + 126;
      c1(cO, "monsterinstancetype")[2] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[2] = 34;
      c1(cO, "monstermakex")[2] = this.xx + 530;
      c1(cO, "monstermakey")[2] = this.yy + 236;
      c1(cO, "battlemsg")[0] = "* Werewire and Maus swung down like stringed superheroes!";
      break;
    }
    case 77: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_poppup_enemy;
      c1(cO, "monstertype")[0] = 31;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 150;
      c1(cO, "monsterinstancetype")[1] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[1] = 30;
      c1(cO, "monstermakex")[1] = this.xx + 480;
      c1(cO, "monstermakey")[1] = this.yy + 170;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Ambyu-Lance and its pet appeared!";
      break;
    }
    case 78: {
      c1(cO, "flag")[426] = cN(4, 5, 6, 7, 8);
      c1(cO, "monsterinstancetype")[0] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[0] = 36;
      c1(cO, "monstermakex")[0] = this.xx + 390;
      c1(cO, "monstermakey")[0] = this.yy + 18;
      c1(cO, "monsterinstancetype")[1] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[1] = 36;
      c1(cO, "monstermakex")[1] = this.xx + 394;
      c1(cO, "monstermakey")[1] = this.yy + 180;
      c1(cO, "monsterinstancetype")[0] = cX.obj_poppup_enemy;
      c1(cO, "monstertype")[2] = 31;
      c1(cO, "monstermakex")[2] = this.xx + 460;
      c1(cO, "monstermakey")[2] = this.yy + 240;
      c1(cO, "battlemsg")[0] = "* Poppup and caretakers appeared!";
      break;
    }
    case 79: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[0] = 34;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 70;
      c1(cO, "monsterinstancetype")[1] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[1] = 34;
      c1(cO, "monstermakex")[1] = this.xx + 530;
      c1(cO, "monstermakey")[1] = this.yy + 142;
      c1(cO, "monsterinstancetype")[2] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[2] = 34;
      c1(cO, "monstermakex")[2] = this.xx + 468;
      c1(cO, "monstermakey")[2] = this.yy + 214;
      c1(cO, "battlemsg")[0] = "* Maice blocked the way!";
      break;
    }
    case 80: {
      c1(cO, "flag")[426] = cN(4, 5, 6, 7, 8);
      c1(cO, "monsterinstancetype")[0] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[0] = 36;
      c1(cO, "monstermakex")[0] = this.xx + 410;
      c1(cO, "monstermakey")[0] = this.yy + 18;
      c1(cO, "monsterinstancetype")[1] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[1] = 36;
      c1(cO, "monstermakex")[1] = this.xx + 482;
      c1(cO, "monstermakey")[1] = this.yy + 100;
      c1(cO, "monsterinstancetype")[2] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[2] = 34;
      c1(cO, "monstermakex")[2] = this.xx + 466;
      c1(cO, "monstermakey")[2] = this.yy + 240;
      c1(cO, "battlemsg")[0] = "* Swatchling and vermin appeared!";
      break;
    }
    case 81: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_werewerewire_enemy;
      c1(cO, "monstertype")[0] = 40;
      c1(cO, "monstermakex")[0] = this.xx + 482;
      c1(cO, "monstermakey")[0] = this.yy + 164;
      c1(cO, "monsterinstancetype", 1)[1] = 0;
      c1(cO, "monsterinstancetype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Werewerewire strongly blocks the way!";
      break;
    }
    case 82: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_berdlyb2_enemy;
      c1(cO, "monstertype")[0] = 46;
      c1(cO, "monstermakex")[0] = this.xx + 470;
      c1(cO, "monstermakey")[0] = this.yy + 144;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstermakex")[1] = this.xx + 540;
      c1(cO, "monstermakey")[1] = this.yy + 84;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "monstermakex")[2] = this.xx + 522;
      c1(cO, "monstermakey")[2] = this.yy + 214;
      c1(cO, "battlemsg")[0] = "* Berdly blocks the way!";
      break;
    }
    case 83: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_mauswheel_enemy;
      c1(cO, "monstertype")[0] = 44;
      c1(cO, "monstermakex")[0] = this.xx + 450;
      c1(cO, "monstermakey")[0] = this.yy + 100;
      c1(cO, "monsterinstancetype", 1)[1] = 0;
      c1(cO, "monsterinstancetype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Mauswheel spins into you!";
      break;
    }
    case 84: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_gigaqueen_enemy;
      c1(cO, "monstertype")[0] = 51;
      c1(cO, "monstermakex")[0] = this.xx + 150;
      c1(cO, "monstermakey")[0] = this.yy + 0;
      c1(cO, "monsterinstancetype", 1)[1] = 0;
      c1(cO, "monsterinstancetype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* GIGA Queen blocks the way!";
      break;
    }
    case 85: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[0] = 30;
      c1(cO, "monstermakex")[0] = this.xx + 500;
      c1(cO, "monstermakey")[0] = this.yy + 42;
      c1(cO, "monsterinstancetype")[1] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[1] = 30;
      c1(cO, "monstermakex")[1] = this.xx + 422;
      c1(cO, "monstermakey")[1] = this.yy + 134;
      c1(cO, "monsterinstancetype")[2] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[2] = 30;
      c1(cO, "monstermakex")[2] = this.xx + 500;
      c1(cO, "monstermakey")[2] = this.yy + 200;
      c1(cO, "battlemsg")[0] = "* Ambyu-Lances beeped towards you!";
      break;
    }
    case 86: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[0] = 35;
      c1(cO, "monstermakex")[0] = this.xx + 412;
      c1(cO, "monstermakey")[0] = this.yy + 24;
      c1(cO, "monsterinstancetype")[1] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[1] = 32;
      c1(cO, "monstermakex")[1] = this.xx + 482;
      c1(cO, "monstermakey")[1] = this.yy + 126;
      c1(cO, "monsterinstancetype")[2] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[2] = 35;
      c1(cO, "monstermakex")[2] = this.xx + 412;
      c1(cO, "monstermakey")[2] = this.yy + 184;
      c1(cO, "battlemsg")[0] = "* Tasque and Co. drew near!";
      break;
    }
    case 87: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[0] = 32;
      c1(cO, "monstermakex")[0] = this.xx + 412;
      c1(cO, "monstermakey")[0] = this.yy + 24;
      c1(cO, "monsterinstancetype")[1] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[1] = 32;
      c1(cO, "monstermakex")[1] = this.xx + 474;
      c1(cO, "monstermakey")[1] = this.yy + 114;
      c1(cO, "monsterinstancetype")[2] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[2] = 32;
      c1(cO, "monstermakex")[2] = this.xx + 412;
      c1(cO, "monstermakey")[2] = this.yy + 184;
      c1(cO, "battlemsg")[0] = "* Tasques zoomed towards you!";
      break;
    }
    case 88: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_poppup_enemy;
      c1(cO, "monstertype")[0] = 31;
      c1(cO, "monstermakex")[0] = this.xx + 434;
      c1(cO, "monstermakey")[0] = this.yy + 36;
      c1(cO, "monsterinstancetype")[1] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[1] = 35;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 100;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "monstermakex")[2] = this.xx + 440;
      c1(cO, "monstermakey")[2] = this.yy + 190;
      c1(cO, "battlemsg")[0] = "* Poppup and Virovirokun Appeared!";
      break;
    }
    case 89: {
      c1(cO, "heromakex")[0] = this.xx + 94;
      c1(cO, "heromakey")[0] = this.yy + 50;
      c1(cO, "heromakex")[1] = this.xx + 80;
      c1(cO, "heromakey")[1] = this.yy + 122;
      c1(cO, "heromakex")[2] = this.xx + 72;
      c1(cO, "heromakey")[2] = this.yy + 200;
      c1(cO, "monsterinstancetype")[0] = cX.obj_tasque_manager_enemy;
      c1(cO, "monstertype")[0] = 42;
      c1(cO, "monstermakex")[0] = this.xx + 487;
      c1(cO, "monstermakey")[0] = this.yy + 94;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Graze!";
      break;
    }
    case 90: {
      c1(cO, "heromakex")[0] = this.xx + 94;
      c1(cO, "heromakey")[0] = this.yy + 50;
      c1(cO, "heromakex")[1] = this.xx + 80;
      c1(cO, "heromakey")[1] = this.yy + 122;
      c1(cO, "heromakex")[2] = this.xx + 72;
      c1(cO, "heromakey")[2] = this.yy + 200;
      c1(cO, "monsterinstancetype")[0] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[0] = 33;
      c1(cO, "monstermakex")[0] = this.xx + 476;
      c1(cO, "monstermakey")[0] = this.yy + 70;
      c1(cO, "monsterinstancetype")[1] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[1] = 33;
      c1(cO, "monstermakex")[1] = this.xx + 454;
      c1(cO, "monstermakey")[1] = this.yy + 168;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Round One!";
      break;
    }
    case 91: {
      c1(cO, "heromakex")[0] = this.xx + 94;
      c1(cO, "heromakey")[0] = this.yy + 50;
      c1(cO, "heromakex")[1] = this.xx + 80;
      c1(cO, "heromakey")[1] = this.yy + 122;
      c1(cO, "heromakex")[2] = this.xx + 72;
      c1(cO, "heromakey")[2] = this.yy + 200;
      c1(cO, "monsterinstancetype")[0] = cX.obj_poppup_enemy;
      c1(cO, "monstertype")[0] = 31;
      c1(cO, "monstermakex")[0] = this.xx + 412;
      c1(cO, "monstermakey")[0] = this.yy + 40;
      c1(cO, "monsterinstancetype")[1] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[1] = 30;
      c1(cO, "monstermakex")[1] = this.xx + 466;
      c1(cO, "monstermakey")[1] = this.yy + 106;
      c1(cO, "monsterinstancetype")[2] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[2] = 35;
      c1(cO, "monstermakex")[2] = this.xx + 412;
      c1(cO, "monstermakey")[2] = this.yy + 184;
      c1(cO, "battlemsg")[0] = "* Round Two!";
      break;
    }
    case 92: {
      c1(cO, "heromakex")[0] = this.xx + 94;
      c1(cO, "heromakey")[0] = this.yy + 50;
      c1(cO, "heromakex")[1] = this.xx + 80;
      c1(cO, "heromakey")[1] = this.yy + 122;
      c1(cO, "heromakex")[2] = this.xx + 72;
      c1(cO, "heromakey")[2] = this.yy + 200;
      c1(cO, "monsterinstancetype")[0] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[0] = 32;
      c1(cO, "monstermakex")[0] = this.xx + 432;
      c1(cO, "monstermakey")[0] = this.yy + 52;
      c1(cO, "monsterinstancetype")[1] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[1] = 32;
      c1(cO, "monstermakex")[1] = this.xx + 476;
      c1(cO, "monstermakey")[1] = this.yy + 140;
      c1(cO, "monsterinstancetype")[2] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[2] = 34;
      c1(cO, "monstermakex")[2] = this.xx + 512;
      c1(cO, "monstermakey")[2] = this.yy + 236;
      c1(cO, "battlemsg")[0] = "* Round Three!";
      break;
    }
    case 93: {
      c1(cO, "flag")[426] = cN(0, 1, 2, 3);
      c1(cO, "heromakex")[0] = this.xx + 94;
      c1(cO, "heromakey")[0] = this.yy + 50;
      c1(cO, "heromakex")[1] = this.xx + 80;
      c1(cO, "heromakey")[1] = this.yy + 122;
      c1(cO, "heromakex")[2] = this.xx + 72;
      c1(cO, "heromakey")[2] = this.yy + 200;
      c1(cO, "monsterinstancetype")[0] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[0] = 36;
      c1(cO, "monstermakex")[0] = this.xx + 394;
      c1(cO, "monstermakey")[0] = this.yy + 8;
      c1(cO, "monsterinstancetype")[1] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[1] = 36;
      c1(cO, "monstermakex")[1] = this.xx + 490;
      c1(cO, "monstermakey")[1] = this.yy + 74;
      c1(cO, "monsterinstancetype")[2] = cX.obj_swatchling_enemy;
      c1(cO, "monstertype")[2] = 36;
      c1(cO, "monstermakex")[2] = this.xx + 394;
      c1(cO, "monstermakey")[2] = this.yy + 160;
      c1(cO, "battlemsg")[0] = "* Round Four!";
      break;
    }
    case 94: {
      c1(cO, "heromakex")[0] = this.xx + 94;
      c1(cO, "heromakey")[0] = this.yy + 50;
      c1(cO, "heromakex")[1] = this.xx + 80;
      c1(cO, "heromakey")[1] = this.yy + 122;
      c1(cO, "heromakex")[2] = this.xx + 72;
      c1(cO, "heromakey")[2] = this.yy + 200;
      c1(cO, "monsterinstancetype")[0] = cX.obj_werewerewire_enemy;
      c1(cO, "monstertype")[0] = 40;
      c1(cO, "monstermakex")[0] = this.xx + 464;
      c1(cO, "monstermakey")[0] = this.yy + 68;
      c1(cO, "monsterinstancetype")[1] = cX.obj_werewerewire_enemy;
      c1(cO, "monstertype")[1] = 40;
      c1(cO, "monstermakex")[1] = this.xx + 494;
      c1(cO, "monstermakey")[1] = this.yy + 184;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Final Round!";
      break;
    }
    case 95: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_werewire_enemy;
      c1(cO, "monstertype")[0] = 33;
      c1(cO, "monstermakex")[0] = this.xx + 502;
      c1(cO, "monstermakey")[0] = this.yy + 144;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Werewire appeared.";
      break;
    }
    case 96: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_virovirokun_enemy;
      c1(cO, "monstertype")[0] = 35;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 120;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Virovirokun floated in!";
      break;
    }
    case 97: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_omawaroid_enemy;
      c1(cO, "monstertype")[0] = 30;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 114;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Ambyu-Lance beeps towards you!";
      break;
    }
    case 98: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_tasque_enemy;
      c1(cO, "monstertype")[0] = 32;
      c1(cO, "monstermakex")[0] = this.xx + 494;
      c1(cO, "monstermakey")[0] = this.yy + 144;
      c1(cO, "monstertype", 1)[1] = 0;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Tasque crossed your path!";
      break;
    }
    case 99: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_baseenemy;
      c1(cO, "monstertype")[0] = 1;
      c1(cO, "monstermakex")[0] = this.xx + 480;
      c1(cO, "monstermakey")[0] = this.yy + 80;
      c1(cO, "monsterinstancetype")[1] = cX.obj_baseenemy;
      c1(cO, "monstertype")[1] = 1;
      c1(cO, "monstermakex")[1] = this.xx + 500;
      c1(cO, "monstermakey")[1] = this.yy + 160;
      c1(cO, "monsterinstancetype")[2] = cX.obj_baseenemy;
      c1(cO, "monstertype")[2] = 1;
      c1(cO, "monstermakex")[2] = this.xx + 520;
      c1(cO, "monstermakey")[2] = this.yy + 240;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "battlemsg")[0] = "* Test enemies showed up.";
      break;
    }
    case 100: {
      c1(cO, "heromakex")[0] = this.xx + 94;
      c1(cO, "heromakey")[0] = this.yy + 50;
      c1(cO, "heromakex")[1] = this.xx + 80;
      c1(cO, "heromakey")[1] = this.yy + 122;
      c1(cO, "heromakex")[2] = this.xx + 72;
      c1(cO, "heromakey")[2] = this.yy + 200;
      c1(cO, "monsterinstancetype")[0] = cX.obj_dojo_spareenemy;
      c1(cO, "monstertype")[0] = 52;
      c1(cO, "monstermakex")[0] = this.xx + 440;
      c1(cO, "monstermakey")[0] = this.yy + 100;
      c1(cO, "battlemsg")[0] = "* Jigsaw Joe jigs in!";
      break;
    }
    case 101: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_poppup_enemy;
      c1(cO, "monstertype")[0] = 31;
      c1(cO, "monstermakex")[0] = this.xx + 440;
      c1(cO, "monstermakey")[0] = this.yy + 50;
      c1(cO, "monsterinstancetype")[1] = cX.obj_maus_enemy;
      c1(cO, "monstertype")[1] = 34;
      c1(cO, "monstermakex")[1] = this.xx + 490;
      c1(cO, "monstermakey")[1] = this.yy + 166;
      c1(cO, "monstertype", 2)[2] = 0;
      c1(cO, "monstermakex")[2] = this.xx + 440;
      c1(cO, "monstermakey")[2] = this.yy + 206;
      c1(cO, "battlemsg")[0] = "* Poppup and Maus appeared.";
      break;
    }
    case 102: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_pipis_enemy;
      c1(cO, "monstertype")[0] = 53;
      c1(cO, "monstermakex")[0] = this.xx + 530;
      c1(cO, "monstermakey")[0] = this.yy + 100;
      c1(cO, "monsterinstancetype")[1] = cX.obj_pipis_enemy;
      c1(cO, "monstertype")[1] = 53;
      c1(cO, "monstermakex")[1] = this.xx + 448;
      c1(cO, "monstermakey")[1] = this.yy + 168;
      c1(cO, "monsterinstancetype")[2] = cX.obj_pipis_enemy;
      c1(cO, "monstertype")[2] = 53;
      c1(cO, "monstermakex")[2] = this.xx + 510;
      c1(cO, "monstermakey")[2] = this.yy + 250;
      c1(cO, "battlemsg")[0] = "* Pipis.";
      break;
    }
    case 777: {
      c1(cO, "monsterinstancetype")[0] = cX.obj_bullettester_enemy;
      c1(cO, "monsterinstancetype")[1] = cX.obj_bullettester_enemy;
      c1(cO, "monsterinstancetype")[2] = cX.obj_bullettester_enemy;
      c1(cO, "monstertype")[0] = 1;
      c1(cO, "monstertype")[1] = 1;
      c1(cO, "monstertype")[2] = 1;
      c1(cO, "battlemsg")[0] = " ";
      break;
    }
  }
}
cE(O2, "scr_encountersetup");
cw(
  O2,
  "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 50:\n;\ncase 51:\n;\ncase 52:\n;\ncase 53:\n;\ncase 54:\n;\ncase 55:\n;\ncase 56:\n;\ncase 57:\n;\ncase 58:\n;\ncase 59:\n;\ncase 60:\n;\ncase 61:\n;\ncase 62:\n;\ncase 63:\n;\ncase 64:\n;\ncase 65:\n;\ncase 66:\n;\ncase 67:\n;\ncase 68:\n;\ncase 69:\n;\ncase 70:\n;\ncase 71:\n;\ncase 72:\n;\ncase 73:\n;\ncase 74:\n;\ncase 75:\n;\ncase 76:\n;\ncase 77:\n;\ncase 78:\n;\ncase 79:\n;\ncase 80:\n;\ncase 81:\n;\ncase 82:\n;\ncase 83:\n;\ncase 84:\n;\ncase 85:\n;\ncase 86:\n;\ncase 87:\n;\ncase 88:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 95:\n;\ncase 96:\n;\ncase 97:\n;\ncase 98:\n;\ncase 99:\n;\ncase 100:\n;\ncase 101:\n;\ncase 102:\n;\ncase 777:",
);
ca();
var O3 = {
  12: "checkers",
  53: "battle",
  56: "mansion",
  57: "mansion",
  58: "berdly_chase",
  59: "queen_boss",
  60: "spamton_battle",
  61: "spamton_neo_mix_ex_wip",
  62: "",
  63: "rouxls_battle",
  74: "battle",
  75: "battle",
  76: "battle",
  82: "berdly_chase",
  83: "mansion",
  84: "",
  90: "battle",
  95: "battle",
  102: "spamton_basement",
};
var O4 = {
  58: "plain",
  59: "mansion_parallax",
  61: "plain",
  63: "plain",
  777: "plain",
};
var O5 = "battle";
var O6 = {
  82: {
    test: "== 2",
    song: "berdly_battle_heartbeat_true",
  },
};
var O7 = {
  56: [1, 1],
  57: [1, 1],
  83: [1, 1],
  102: [1, 1],
};
cc.scr_damage = y;
cc.scr_damage_all = w;
cc.scr_act_simul = a;
var O8 = new Proxy(
  {},
  {
    get: cE((Ox, OF) => g[OF] || c6[OF], "get"),
  },
);
var O9 = new Set(cT.unusedEncounters || []);
var Oc = cT.unusedEncounterWhy || {};
var OO = 50;
var OB = {
  777: "the developers' bullet-tester slot: three obj_bullettester_enemy with no monster data",
};
var On = new Set([0, 1, ...Object.keys(OB).map(Number)]);
var Ou = new Set((cW(O2) ?? String(O2)).match(/case (\d+):/g).map((Ox) => Number(Ox.slice(5, -1))));
var OY = {
  50: "Cyber City",
  51: "Cyber City",
  52: "Cyber City",
  53: "Cyber City",
  54: "Cyber Field",
  55: "Cyber Field",
  56: "Queen's Mansion",
  57: "Cyber City",
  58: "Cyber Field - Berdly",
  59: "Queen's Mansion - Queen",
  60: "Cyber City - Spamton",
  61: "Cyber City - Spamton NEO",
  62: "Cyber City - Sweet Cap’n Cakes",
  63: "Cyber Field - Rouxls",
  64: "Queen's Mansion",
  65: "Cyber City",
  66: "Cyber Field",
  67: "Cyber Field",
  68: "Cyber Field",
  69: "Cyber Field",
  70: "Cyber City",
  71: "Cyber City",
  72: "Dojo",
  73: "Cyber Field",
  74: "Cyber City",
  75: "Cyber City",
  76: "Cyber City",
  77: "Cyber City",
  78: "Cyber City",
  79: "Cyber City",
  80: "Cyber City",
  81: "Cyber City",
  82: "Cyber City",
  83: "Cyber City",
  84: "Cyber City",
  85: "Cyber City",
  86: "Cyber City",
  87: "Cyber City",
  88: "Cyber City",
  89: "Cyber City",
  90: "Cyber City",
  91: "Cyber City",
  92: "Cyber City",
  93: "Cyber City",
  94: "Cyber City",
  95: "Cyber City",
  96: "Cyber City",
  97: "Cyber City",
  98: "Cyber City",
  99: "Cyber City",
  100: "Cyber City",
  101: "Cyber City",
  102: "Cyber City",
  777: "Debug",
};
var OU = {
  84: "room_dw_mansion_top",
};
var OS = {
  100: "Jigsaw Joe",
  72: "Graze Challenge 1",
  71: "Clover Rematch",
  89: "Tasque Manager Says",
  90: "All Stars 1",
  91: "All Stars 2",
  92: "All Stars 3",
  93: "All Stars 4",
  94: "All Stars Final",
};
var OZ = [100, 72, 71, 89, 90, 91, 92, 93, 94];
var ON = "ch2enc102";
function OQ(Ox, OF = 34) {
  let Or = [];
  let OJ = "";
  for (let Oz of String(Ox).split(/\s+/).filter(Boolean)) {
    if (OJ && OJ.length + 1 + Oz.length > OF) {
      Or.push(OJ);
      OJ = Oz;
    } else {
      OJ = OJ ? OJ + " " + Oz : Oz;
    }
  }
  if (OJ) {
    Or.push(OJ);
  }
  return Or.join("#");
}
cE(OQ, "wrapDesc");
function OC() {
  return {
    t: cO.monstertype.slice(),
    it: cO.monsterinstancetype.slice(),
    mx: cO.monstermakex.slice(),
    my: cO.monstermakey.slice(),
    hx: cO.heromakex.slice(),
    hy: cO.heromakey.slice(),
    bm: (cO.battlemsg || []).slice(),
    name: cO.monstername.slice(),
  };
}
cE(OC, "snapshot");
function OG(Ox) {
  cO.monstertype = Ox.t;
  cO.monsterinstancetype = Ox.it;
  cO.monstermakex = Ox.mx;
  cO.monstermakey = Ox.my;
  cO.heromakex = Ox.hx;
  cO.heromakey = Ox.hy;
  cO.battlemsg = Ox.bm;
  cO.monstername = Ox.name;
}
cE(OG, "restore");
function OE(Ox) {
  let OF = {
    t: cO.monstertype.slice(),
    n: cO.monstername.slice(),
  };
  cO.monstertype[0] = Ox;
  let Or = {
    myself: 0,
  };
  try {
    v.call(Or);
  } catch {}
  let OJ = cO.monstername[0];
  cO.monstertype = OF.t;
  cO.monstername = OF.n;
  if (OJ && OJ.trim()) {
    return OJ;
  } else {
    return "Enemy " + Ox;
  }
}
cE(OE, "monsterName");
var Ol = 64;
var Ow = cE(
  (Ox, OF) =>
    Array.from(
      {
        length: Ol,
      },
      () => new Array(Ox).fill(OF),
    ),
  "rows",
);
function OW() {
  let Ox = {
    actingchoice: 0,
    actingsimul: 0,
    actingsingle: 0,
    actingtarget: 0,
    armor: 0,
    battleactcount: 0,
    guts: 0,
    input_released: 0,
    keyitem: 0,
    litem: 0,
    phone: 0,
    pocketitem: 0,
    smxx: 0,
    smyy: 0,
    weapon: 0,
    weaponstyle: 0,
    choicemsg: " ",
    currentsong: " ",
    monsterattackname: " ",
    othername: " ",
  };
  for (let [OF, Or] of Object.entries(Ox)) {
    if (!Array.isArray(cO[OF])) {
      cO[OF] = new Array(Ol).fill(Or);
    }
  }
  for (let OJ of [
    "itembolts",
    "itemboltspeed",
    "itemelement",
    "itemelementamount",
    "itemgrazeamt",
    "itemspecial",
  ]) {
    if (!Array.isArray(cO[OJ])) {
      cO[OJ] = Ow(4, 0);
    }
  }
  if (!Array.isArray(cO.menucoord)) {
    cO.menucoord = Ow(Ol, 0);
  }
  if (!Array.isArray(cO.cinstance)) {
    cO.cinstance = Array.from(
      {
        length: Ol,
      },
      () => ({
        x: 0,
        y: 0,
      }),
    );
  }
}
cE(OW, "ensureChapter2Globals");
var Oa = {
  maxhp: {
    1: 120,
    2: 140,
    3: 100,
    4: 90,
  },
  at: {
    1: 12,
    2: 16,
    3: 10,
    4: 3,
  },
  mag: {
    2: 1,
    3: 9,
    4: 11,
  },
  df: {
    4: 1,
  },
  charweapon: {
    4: 12,
  },
  chararmor1: {
    1: 1,
    2: 1,
    3: 1,
    4: 14,
  },
  chararmor2: {
    1: 1,
    2: 1,
    3: 4,
    4: 22,
  },
};
var Ov = {
  maxhp: [90, 110, 70],
  at: [10, 14, 8],
  charweapon: [1, 2, 3],
  chararmor1: [0, 0, 0],
  chararmor2: [0, 0, 0],
};
function Og() {
  for (let [Ox, OF] of Object.entries(Ov)) {
    for (let Or = 0; Or < 3; Or++) {
      if ((cO[Ox] && cO[Ox][Or + 1]) !== OF[Or]) {
        return false;
      }
    }
  }
  return true;
}
cE(Og, "isChapter1Party");
function OR(Ox) {
  let OF = (cO.char || []).includes(4) && !!Ox && !!Ox.storyParty;
  let Or = !!cO.charhero && cO.charhero[4] === "noelle";
  if (OF) {
    cO.charbase[4] = 4;
    if (cO.charhero) {
      cO.charhero[4] = "noelle";
    }
    cO.charname[4] = "Noelle";
  }
  let OJ = Og();
  if (!OJ && (!OF || !!Or)) {
    return;
  }
  let Oz = (OP) => (!Or || OP !== "4") && (OJ || OP === "4");
  for (let [OP, Ok] of Object.entries(Oa)) {
    for (let [OH, OM] of Object.entries(Ok)) {
      if (Array.isArray(cO[OP]) && Oz(OH)) {
        cO[OP][Number(OH)] = OM;
      }
    }
  }
  for (let OK of Object.keys(Oa.maxhp)) {
    if (Oz(OK)) {
      cO.hp[Number(OK)] = cO.maxhp[Number(OK)];
    }
  }
  if (Array.isArray(cO.spell) && !Or) {
    cO.spell[4] = new Array(12).fill(0);
    cO.spell[4][0] = 2;
    cO.spell[4][1] = 8;
    cO.spell[4][2] = 9;
    if (Ox && Ox.flags && Ox.flags[915] >= 5) {
      cO.spell[4][3] = 10;
    }
  }
  cn();
  c9();
}
cE(OR, "applyChapter2Start");
var OI = {
  60: [1, 0, 0],
  63: [1, 3, 0],
  84: [1, 0, 0],
  82: [1, 4, 0],
  95: [1, 4, 0],
  96: [1, 4, 0],
  97: [1, 4, 0],
  98: [1, 4, 0],
};
var Om = {
  82: [
    {
      suffix: "sg",
      party: [1, 4, 0],
      flags: {
        915: 5,
      },
      note: "Weird Route (Snowgrave)",
    },
  ],
  61: [
    {
      suffix: "sg",
      party: [1, 0, 0],
      flags: {
        915: 9,
      },
      note: "Weird Route (Snowgrave)",
    },
  ],
  59: [
    {
      suffix: "sg",
      party: [1, 2, 3],
      flags: {
        915: 9,
      },
      note: "Weird Route (Snowgrave)",
    },
  ],
};
function Oy(Ox = 800) {
  let OF = [];
  for (let Or = OO; Or <= Ox; Or++) {
    if (!On.has(Or) && !!Ou.has(Or)) {
      for (let OJ of [null, ...(Om[Or] || [])]) {
        Of(OF, Or, OJ);
      }
    }
  }
  return OF;
}
cE(Oy, "buildChapter2Fights");
function Of(Ox, OF, Or) {
  {
    let OJ = OC();
    let Oz = cO.char.slice();
    let OP = {};
    let Ok = (Or && Or.party) || OI[OF] || null;
    if (Ok) {
      cO.char = Ok.slice();
    }
    let OH = (Or && Or.flags) || null;
    if (OH) {
      for (let [OK, Oh] of Object.entries(OH)) {
        OP[OK] = cO.flag[OK];
        cO.flag[OK] = Oh;
      }
    }
    cO.monstertype = [0, 0, 0];
    cO.monsterinstancetype = [null, null, null];
    cO.battlemsg = [" "];
    let OM = true;
    try {
      O2.call({}, OF);
    } catch (OA) {
      OM = false;
      console.error("ch2 encounter " + OF + " setup failed", OA);
    }
    if (OM && cO.monstertype[0] > 0) {
      let Oq = [];
      for (let Oo = 0; Oo < 3; Oo++) {
        let OV = cO.monstertype[Oo];
        let Oj = cO.monsterinstancetype[Oo];
        if (OV > 0 && Oj) {
          Oq.push({
            cls: Oj,
            type: OV,
            x: cO.monstermakex[Oo],
            y: cO.monstermakey[Oo],
            setup: () => {},
          });
        }
      }
      if (Oq.length) {
        let Oi = Oq.map((B0) => OE(B0.type));
        let Op = {};
        for (let B0 of Oi) {
          Op[B0] = (Op[B0] || 0) + 1;
        }
        let Ob = Object.entries(Op)
          .map(([B1, B2]) => (B2 > 1 ? B1 + " x" + B2 : B1))
          .join(" & ");
        let Os = OS[OF] && !Or ? OS[OF] : null;
        let Od = Os
          ? /All Stars/.test(Os)
            ? Os + ": " + Ob
            : Os
          : Ob + (Or ? " (" + Or.note + ")" : "");
        let OD = O9.has(OF) && !Os;
        let OT = Os ? OZ.indexOf(OF) : -1;
        let OX = O3[String(OF)] ?? O5;
        let OL = O6 && O6[String(OF)];
        if (OL) {
          let [B1, B2] = OL.test.split(" ");
          let B3 = r();
          let B4 = Number(B2);
          if (
            {
              "==": B3 === B4,
              "!=": B3 !== B4,
              ">=": B3 >= B4,
              "<=": B3 <= B4,
              ">": B3 > B4,
              "<": B3 < B4,
            }[B1]
          ) {
            OX = OL.song;
          }
        }
        Ox.push({
          id: "ch2enc" + OF + (Or ? Or.suffix : ""),
          name: Od,
          chapter: 2,
          cut: OD,
          area: OD ? "CUT CONTENT" : Os ? "Dojo" : OY[OF] || "Chapter 2",
          generated: true,
          ...(OT >= 0
            ? {
                dojo: true,
                listAfter: OT === 0 ? ON : "ch2enc" + OZ[OT - 1],
              }
            : {}),
          desc:
            Od +
            "#Chapter 2, encounter " +
            OF +
            "." +
            (Os ? "#A dojo challenge" + (/All Stars/.test(Os) ? " (Ch2 All Stars)." : ".") : "") +
            (OD ? "#" + OQ(Oc[String(OF)] || "") : ""),
          party: cO.char.slice(),
          storyParty: !!Ok,
          flags: OH
            ? {
                ...OH,
              }
            : undefined,
          heromakex: cO.heromakex.slice(),
          heromakey: cO.heromakey.slice(),
          monstermakex: cO.monstermakex.slice(0, 3),
          monstermakey: cO.monstermakey.slice(0, 3),
          monsters: Oq,
          battlemsg: (cO.battlemsg && cO.battlemsg[0]) || " ",
          encounterno: OF,
          music: OX,
          ...(O7[String(OF)]
            ? {
                musiclevel: O7[String(OF)],
              }
            : {}),
          room: OU[OF] || (Os ? "room_dw_castle_dojo" : null),
          background: Os ? cD() : h(O4[String(OF)]),
        });
      }
    }
    OG(OJ);
    cO.char = Oz;
    for (let [B5, BY] of Object.entries(OP)) {
      cO.flag[B5] = BY;
    }
  }
}
cE(Of, "buildOne");
export { cb as a, cT as b, O8 as c, OQ as d, OW as e, OR as f, Oy as g };
