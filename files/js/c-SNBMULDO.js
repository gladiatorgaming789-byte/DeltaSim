import { c as W } from "./c-2XD6JUBJ.js";
import { G as Q, N as Z, O as n, s as h } from "./c-Q4AJT7BT.js";
import { g as e, i as a } from "./c-UDQUHXBV.js";
import { b as I, d as l, f as s, n as N0, p as N1 } from "./c-F4ZSRAAO.js";
import { F as N2, M as N3, N as N4, g as N5 } from "./c-O6GE5FYX.js";
import {
  Ja as N6,
  c as N7,
  ga as N8,
  gb as N9,
  hb as NN,
  j as NB,
  m,
  ob as NX,
  u as NV,
  v,
  w as Nm,
  x as ND,
  zb as Ni,
} from "./c-ZEHUSSXN.js";
import { a as Nz, e as Nr, g as Nq, l as NP } from "./c-7Q4J33FN.js";
NP();
function NK(NT) {
  N5.monstername[NT] = "JEVIL";
  N5.monstermaxhp[NT] = 3500;
  N5.monsterhp[NT] = 3500;
  N5.monsterat[NT] = 10;
  N5.monsterdf[NT] = 5;
  N5.monsterexp[NT] = 0;
  N5.monstergold[NT] = 0;
  N5.sparepoint[NT] = 0;
  N5.mercymod[NT] = 0;
  N5.mercymax[NT] = 999;
  N5.canact[NT][0] = 1;
  N5.actname[NT][0] = "Check";
  N5.canact[NT][1] = 1;
  N5.actactor[NT][1] = 1;
  N5.actname[NT][1] = "Pirouette";
  N5.actdesc[NT][1] = "Random#Chaos";
  N5.actcost[NT][1] = 50;
  N5.canact[NT][2] = 1;
  N5.actactor[NT][2] = 4;
  N5.actname[NT][2] = "Hypnosis";
  N5.actdesc[NT][2] = "Induce#TIRED";
  N5.actcost[NT][2] = 125;
}
Nz(NK, "setupJevilStats");
var Nt = class No extends N9 {
  create() {
    Object.assign(this, {
      siner: 0,
      ji: 0,
      maxchain: 6,
      maxdist: 0,
      size: 2,
      floatsiner: 0,
      floatsinerspeed: 1,
      sndcon: 0,
      condition: 0,
      timer: 0,
      spintimer: 0,
      s_xscale: 2,
      s_yscale: 2,
      s_sprite: "spr_joker_teleport",
      s_y: 0,
      s_vspeed: 0,
      s_alpha: 1,
      image_speed: 0.334,
      dancelv: 0,
      dancesiner: 0,
      fade: 0,
    });
    this.offx = this.x + 20;
    this.offy = this.y + 18;
    this.fly = 0;
    this.flyx = 0;
    this.shadowx = [0, 0, 0, 0, 0, 0, 0];
    this.shadowy = [0, 0, 0, 0, 0, 0, 0];
    this.sfactor = [1, 1, 1, 1, 1, 1, 1];
    this.dalpha = [0, 0, 0, 0, 0, 0, 0];
  }
  draw(NT) {
    this.floatsiner += this.floatsinerspeed;
    let Ng = Nm(this.floatsiner / 8) * 3 * (this.floatsinerspeed * 2 - 1);
    let Nc = 0;
    if (this.dancelv >= 1) {
      Nc = ND(this.floatsiner / 8) * 3 * (this.floatsinerspeed * 2 - 1);
    }
    if (this.dancelv === 4) {
      Nc = 0;
      Ng = 0;
    }
    let NO = this.x + 20;
    let NJ = this.y + 18;
    this.offx = NO;
    this.offy = NJ;
    this.fly = Ng;
    this.flyx = Nc;
    if (this.condition === 0) {
      let NW = this.fade === 0 ? 1 : v(Nm(this.floatsiner / 13));
      if (this.dancelv === 0) {
        NT.draw_sprite_ext("spr_joker_main", 0, NO + Nc, NJ + Ng, 2, 2, 0, N7.white, NW);
      }
      if (this.dancelv === 1) {
        NT.draw_sprite_ext(
          "spr_joker_dance",
          this.floatsiner / 3,
          NO + Nc,
          NJ + Ng,
          2,
          2,
          0,
          N7.white,
          1,
        );
      }
      if (this.dancelv === 2) {
        NT.draw_sprite_ext("spr_joker_tired", 0, NO + Nc, NJ + Ng, 2, 2, 0, N7.white, 1);
      }
      if (this.dancelv === 3) {
        this.dancesiner++;
        for (let NG = 0; NG < 7; NG++) {
          if (NG >= 1) {
            this.shadowx[NG] += Nm(NG + this.floatsiner / 5) * 8 * this.sfactor[NG];
            this.shadowy[NG] += ND(NG + this.floatsiner / 5) * 4 * this.sfactor[NG];
          }
          this.dalpha[NG] = Nm(NG + this.dancesiner / 9);
          if (this.dalpha[NG] < 0 && NG >= 1) {
            this.shadowx[NG] = 60 - NB(120);
            this.shadowy[NG] = 60 - NB(120);
            this.sfactor[NG] = 1.5 - NB(3);
          }
          NT.draw_sprite_ext(
            "spr_joker_dance",
            this.dancesiner / 2 + NG / 4,
            this.x + this.shadowx[NG],
            this.y + this.shadowy[NG],
            2,
            2,
            0,
            this.image_blend,
            Math.max(0, this.dalpha[NG]),
          );
        }
      }
      if (this.dancelv === 4) {
        NT.draw_sprite_ext("spr_joker_teleport", 1, NO + Nc, NJ + Ng, 2, 2, 0, N7.white, 1);
      }
    }
    if (this.condition === 1) {
      if (this.maxdist >= 150) {
        this.maxdist = 150;
      }
      let Np = 0.8 + this.maxdist / 50;
      if (Np < 0.8) {
        Np = 0.8;
      }
      if (Np > 2) {
        Np = 2;
      }
      this.siner += Np;
      let Nw = Nm(this.siner / 4) * this.maxdist;
      let NC = -v(Nm(this.siner / 4)) * (this.maxdist * 0.7);
      let Nv = 0;
      if (Nw > this.maxdist / 2 && this.maxdist > 15) {
        Nv = 1;
      }
      if (Nw < -this.maxdist / 2 && this.maxdist > 15) {
        Nv = 2;
      }
      if (this.maxdist < 4) {
        Nv = 3;
      }
      for (let Nf = 0; Nf < this.maxchain - 1; Nf++) {
        NT.draw_sprite_ext(
          "spr_jokerchain",
          Nv,
          NO + Nw * (Nf / this.maxchain) - 2,
          NJ + 6 + (NC - 32) * (Nf / this.maxchain) + Ng,
          2,
          2,
          0,
          N7.white,
          1,
        );
      }
      NT.draw_sprite_ext("spr_jokerbody", 0, NO - 42, NJ + Ng - 2, 2, 2, 0, N7.white, 1);
      NT.draw_sprite_ext("spr_jokerhead", Nv, NO + Nw - 2, NJ + NC + Ng - 14, 2, 2, 0, N7.white, 1);
      this.maxdist -= 1;
      if (this.maxdist <= 0) {
        this.maxdist = 0;
        this.condition = 0;
      }
    }
    if (this.condition === 2) {
      NX.with("obj_heroparent", (NY) => {
        NY.image_alpha -= 0.25;
      });
      if (this.sndcon === 0) {
        N6("snd_spearappear");
        this.sndcon = 1;
      }
      NT.draw_sprite_ext("spr_joker_main", 0, NO, NJ + Ng, this.size, 2, 0, N7.white, 1);
      this.size -= 0.5;
      if (this.size <= 0) {
        NX.with("obj_heroparent", (NY) => {
          NY.image_alpha = 0;
        });
        this.sndcon = 0;
        this.size = 2;
        this.condition = 4;
      }
    }
    if (this.condition === 3) {
      NX.with("obj_heroparent", (NY) => {
        NY.image_alpha += 0.25;
      });
      if (this.sndcon === 0) {
        N6("snd_spearappear");
        this.sndcon = 1;
      }
      NT.draw_sprite_ext("spr_joker_main", 0, NO, NJ + Ng, this.size, 2, 0, N7.white, 1);
      this.size += 0.5;
      if (this.size >= 2) {
        NX.with("obj_heroparent", (NY) => {
          NY.image_alpha = 1;
        });
        this.size = 2;
        this.condition = 0;
        this.sndcon = 0;
      }
    }
    if (this.condition === 4 && N5.turntimer <= 10) {
      this.timer = 0;
      this.condition = 3;
      this.size = 0;
    }
    if (this.condition === 5) {
      this.timer++;
      if (this.timer === 1) {
        this.spintimer = 0;
        this.s_xscale = 2;
        this.s_yscale = 2;
        this.s_sprite = "spr_joker_teleport";
        this.s_y = 0;
        this.s_vspeed = 0;
        this.s_alpha = 1;
        N6("snd_joker_metamorphosis");
      }
      if (this.timer >= 1 && this.timer <= 3) {
        this.s_xscale *= 1.3;
        this.s_yscale *= 0.7;
      }
      if (this.timer >= 5 && this.timer <= 15) {
        this.s_xscale *= 0.7;
        this.s_yscale *= 1.3;
      }
      if (this.timer >= 15 && this.timer <= 30) {
        this.spintimer++;
        this.s_xscale = Nm(this.spintimer / 3) * 2;
        this.s_sprite = "spr_joker_scythebody";
        this.s_yscale *= 0.7;
        if (this.s_xscale >= 2) {
          this.s_xscale = 2;
        }
        if (this.s_yscale <= 2) {
          this.s_yscale = 2;
        }
      }
      if (this.timer >= 30 && this.timer < 41) {
        this.spintimer++;
        this.s_xscale = Nm(this.spintimer / 3) * 2;
        this.s_vspeed -= 3;
        this.s_y += this.s_vspeed;
        this.s_alpha -= 0.1;
      }
      if (this.timer >= 41 && NX.exists("obj_battlecontroller") && N5.turntimer > 10) {
        this.timer = 0;
        this.condition = 4;
      }
      NT.draw_sprite_ext(
        this.s_sprite,
        0,
        NO,
        NJ + this.s_y,
        this.s_xscale,
        this.s_yscale,
        0,
        this.image_blend,
        Math.max(0, this.s_alpha),
      );
    }
    if ((this.condition === 0 || this.condition === 1) && this.dancelv <= 2) {
      NT.draw_set_color(N7.black);
      let NY = this.sprite_width / 2;
      NT.draw_rectangle(
        this.x + NY - 20 - Ng + Nc,
        this.y + 80 - Ng / 2,
        this.x + NY + 30 + Ng + Nc,
        this.y + 85 + Ng / 2,
        false,
      );
    }
  }
};
Nz(Nt, "obj_joker_body");
Nr(Nt, "kinds", NN("obj_joker_body", N9));
Nr(Nt, "defaultDepth", 15);
Nr(Nt, "defaultSprite", "spr_joker_main");
var NR = Nt;
var NM = class NQ extends h {
  create() {
    Object.assign(this, {
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
      hurtamt: 0,
      hurttimer: 0,
      hurtshake: 0,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: -9999,
      maxmercy: 9999,
      tired: 0,
      pirouette: 0,
      pirouettecounter: 0,
      pfactor: 1,
      hypnosis: 0,
      hypnosiscounter: 0,
      chaosdance: 0,
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
      laughnoise: 0,
      beepnoise: 0,
      beepbuffer: 0,
      burstnoise: 0,
      jturn: 0,
      jattack: 0,
      rtimer: 0,
    });
    this.reminvc = N5.invc;
    this.remmaxhp = [0, 1, 2, 3].map((NT) => N5.maxhp[NT]);
    this.body = Ni(this.x, this.y, NR);
    this.visible = false;
    N5.tempflag[4] = 1;
  }
  userEvent(NT) {
    if (NT === 12) {
      N5.monsterx[this.myself] = this.x + 20;
      N5.monstery[this.myself] = this.y + 20;
      return;
    }
    if (NT === 5) {
      this.startAttack();
      return;
    }
    if (NT === 10) {
      this.defeatEvent();
      return;
    }
  }
  defeatEvent() {
    for (let Nc = 0; Nc < 4; Nc++) {
      N5.maxhp[Nc] = this.remmaxhp[Nc];
      if (N5.hp[Nc] >= N5.maxhp[Nc]) {
        N5.hp[Nc] = N5.maxhp[Nc];
      }
    }
    N5.invc = this.reminvc;
    let NT = this.body;
    NT.image_xscale = 2;
    NT.image_yscale = 2;
    NT.sprite_index = "spr_joker_teleport";
    NT.image_index = 1;
    NT.image_speed = 0;
    if (N5.monsterhp[this.myself] > 0) {
      N6("snd_spare");
      for (let NO = 0; NO < 12; NO++) {
        let NJ = Ni(NT.x + 20 + NB(80), NT.y + 18 + NB(80), I);
        NJ.sprite_index = "spr_sparestar_anim";
        NJ.image_xscale = 2;
        NJ.image_yscale = 2;
        NJ.image_speed = 0.25;
        NJ.hspeed = -3;
        NJ.gravity = 0.5;
        NJ.gravity_direction = 0;
        NJ.fadespeed = 0.05;
        NJ.depth = -20;
      }
      N5.jevilResult = "pacified";
    } else {
      N5.jevilResult = "defeated";
    }
    let Ng = NX.first("obj_battlecontroller");
    if (Ng) {
      Ng.skipvictory = 1;
    }
    NT.dancelv = 4;
    NT.condition = 0;
    NX.with("obj_jokerbg_triangle_real", (NW) => {
      NW.on = 0;
    });
    this.scr_monsterdefeat();
    N5.invc = this.reminvc;
    this.instance_destroy();
  }
  step() {
    let NT = this.myself;
    if (N5.monster[NT] === 1) {
      N5.flag[51 + NT] = 4;
      if (N5.mnfight === 1 && this.talked === 0) {
        this.talk();
      }
      if (this.talked === 1 && N5.mnfight === 1) {
        this.rtimer = 0;
        if (N8() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          NX.with("obj_writer", (Ng) => Ng.instance_destroy());
          NX.with("obj_battleblcon", (Ng) => Ng.instance_destroy());
          N5.mnfight = 2;
        }
        if (N5.mnfight === 2) {
          if (!NX.exists("obj_moveheart")) {
            N0();
          }
          if (!NX.exists("obj_growtangle")) {
            Ni(320, 170, s);
          }
        }
      }
      if (N5.mnfight === 2 && this.attacked === 0) {
        this.rtimer++;
        if (this.rtimer === 12) {
          N5.turntimer = 240;
          this.userEvent(5);
          this.attacked = 1;
          N5.typer = 6;
          N5.fc = 0;
          let Ng = m(0, 1, 2, 3, 4);
          N5.battlemsg[0] = [
            "* The world is spinning, spinning.",
            "* The air crackles with freedom.",
            "* JEVIL is laughing incomprehensibly.",
            "* It feels like a whirlwind.",
            "* Smells like chaos.",
          ][Ng];
          if (this.body.dancelv === 2) {
            N5.battlemsg[0] = "* JEVIL seems exhausted...?";
          }
          if (this.jturn === 16) {
            N5.battlemsg[0] = "* CHAOS BOMB was prepared FOR YOU.";
          }
          if (this.jturn === 18) {
            N5.battlemsg[0] = "* Something terrible is coming...!";
          }
          if (this.jturn >= 19) {
            N5.battlemsg[0] = "* JEVIL's pulling out all the stops!";
          }
          if (N5.monsterstatus[NT] === 1) {
            N5.battlemsg[0] = "* JEVIL is truly exhausted!";
          }
        } else {
          N5.turntimer = 120;
        }
      }
      if (
        N5.mnfight === 2 &&
        N5.turntimer <= 1 &&
        (this.battlecancel === 1 && (N5.mercymod[NT] = 999), this.battlecancel === 2)
      ) {
        let Nc = NX.first("obj_battlecontroller");
        if (Nc) {
          Nc.noreturn = 1;
        }
        this.con = 1;
        this.battlecancel = 3;
      }
    }
    if (N5.myfight === 3) {
      this.actStep();
    }
    this.beepbuffer--;
    if (this.beepnoise === 1 && this.beepbuffer < 0) {
      N6("snd_bombfall", {
        volume: 0.6,
      });
      this.beepnoise = 0;
      this.beepbuffer = 5;
    }
    if (this.burstnoise === 1) {
      N6("snd_bomb");
      this.burstnoise = 0;
    }
    if (this.state === 3) {
      if (this.hurttimer > 0) {
        this.hurttimer = 0;
        let NO = this.body;
        NO.condition = 1;
        NO.siner = 0;
        NO.maxdist += 20 + this.hurtamt / 5;
        if (NO.maxdist < 30) {
          NO.maxdist = 30;
        }
        let NJ = N5.monsterhp[NT] / N5.monstermaxhp[NT];
        NO.floatsinerspeed = 1 + (1 - NJ);
        if (NJ <= 0.8 && NO.dancelv === 0) {
          NO.dancelv = 1;
        }
        if (NJ <= 0.4 && this.jturn < 17) {
          NO.dancelv = 3;
        }
        if (NJ <= 0.2 && this.jturn === 17) {
          NO.dancelv = 2;
        }
        if (NJ <= 0) {
          this.userEvent(10);
          N5.flag[241] = 6;
          return;
        }
        NX.with("obj_jokerbg_triangle_real", (NW) => {
          if (NJ > 0) {
            NW.rotspeed = 1 + (1.5 - NJ * 1.5);
          }
        });
        N6(m("snd_joker_laugh0", "snd_joker_ha1", "snd_joker_ha0"));
      }
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      }
    }
  }
  talk() {
    let NT = this.myself;
    if (this.pirouette !== 2) {
      N5.invc = this.reminvc;
    }
    let Ng = N5.monsterhp[NT] / N5.monstermaxhp[NT];
    let Nc = this.body;
    if (Ng <= 0.8 && this.jturn === 4) {
      this.jturn = 5;
      Nc.dancelv = 1;
    }
    if (Ng <= 0.6 && this.jturn === 9) {
      this.jturn = 10;
    }
    if (Ng <= 0.4 && this.jturn === 14) {
      this.jturn = 15;
      Nc.dancelv = 3;
    }
    if (Ng <= 0.15 && this.jturn < 17) {
      this.jturn = 17;
      Nc.dancelv = 2;
    }
    if (this.jturn >= 18) {
      Nc.dancelv = 3;
    }
    if (this.hypnosiscounter >= 2 && this.jturn === 4 && this.turns >= 5 - this.hypnosiscounter) {
      this.jturn = 5;
      Nc.dancelv = 1;
    }
    if (this.hypnosiscounter >= 4 && this.jturn === 9 && this.turns >= 11 - this.hypnosiscounter) {
      this.jturn = 10;
      Nc.dancelv = 1;
    }
    if (this.hypnosiscounter >= 6 && this.jturn === 14 && this.turns >= 17 - this.hypnosiscounter) {
      this.jturn = 15;
      Nc.dancelv = 1;
    }
    if (this.jturn >= 19 && this.turns >= 29 - this.hypnosiscounter) {
      this.tired = 1;
      N5.monsterstatus[NT] = 1;
      Nc.dancelv = 2;
    }
    if (!NX.exists("obj_darkener")) {
      Ni(0, 0, N1);
    }
    N5.typer = 50;
    N5.msg = new Array(100).fill(" ");
    let NO = this.jturn;
    let NJ = {
      0: "CHAOS, CHAOS,&&CATCH ME&IF YOU CAN!",
      1: "SHALL WE&PLAY THE&RING-AROUND?",
      2: "MY HEARTS GO&OUT TO ALL&YOU SINNERS!",
      3: "HA, HA, LET'S&MAKE THE&DEVILSKNIFE.",
      5: "PIIP PIIP,&LET'S RIDE THE&CAROUSEL GAME.",
      6: "HEE HEE,&HAVING FUN!?&JOIN THE&CLUB!",
      7: "HEARTS,&DIAMONDS,&I CAN DO&ANYTHING!",
      8: "WHO KEEPS&SPINNING THE&WORLD&AROUND?",
      10: "YOU KIDS ARE&REALLY&KEEPING UP!",
      11: "NU-HA!!&I NEVER HAD&SUCH FUN,&FUN!!",
      12: "A BEAUTY IS&JOYING IN&MY HEART!",
      13: "EVEN&DEVILSKNIFE&IS SMILING!",
      15: "IT'S SO&EXCITING...&I CAN'T&TAKE IT!!!",
      16: "THIS IS IT,&BOISENGIRLS!&SEE YA!",
      17: "ENOUGH!!&YOU KIDS&TIRED ME UP!",
      18: "KIDDING!!&HERE'S MY&FINAL CHAOS!",
    };
    if (NJ[NO] !== undefined) {
      N5.msg[0] = NJ[NO];
    }
    if (NO === 0) {
      N6("snd_joker_chaos");
    }
    if (NO === 7) {
      N6("snd_joker_anything");
    }
    if (NO === 3 || NO === 13 || NO === 18) {
      Nc.condition = 5;
    }
    if (NO === 17) {
      Nc.dancelv = 2;
    }
    if (NO === 4 || NO === 9 || NO === 14 || NO === 19) {
      let NW = m(0, 1, 2, 3);
      if (NW === 0) {
        N5.msg[0] = m("A CHAOS,&CHAOS!", "PLEASE, IT'S&JUST A&SIMPLE&CHAOS.");
        N6("snd_joker_chaos");
      }
      if (NW === 1) {
        N5.msg[0] = "I CAN DO&ANYTHING!!";
        N6("snd_joker_anything");
      }
      if (NW === 2) {
        N5.msg[0] = m("THIS BODY&CANNOT BE&KILLED!", "THESE&CURTAINS&ARE REALLY&ON FIRE!");
      }
      if (NW === 3) {
        N5.msg[0] = "IT'S ALL&TOO MUCH&FUN!!!";
      }
    }
    a(this.x - 160, this.y - 20, 3);
    this.talked = 1;
    this.talktimer = 0;
    if (this.jturn >= 19) {
      if (N5.monsterdf[NT] > -10) {
        N5.monsterdf[NT] -= 3;
      }
      if (N5.monsterat[NT] < 11) {
        N5.monsterat[NT] += 0.5;
      }
      this.jattack = m(0, 4, 7, 8, 10, 11, 12, 13, 13, 13);
    }
    if (this.jturn >= 15 && this.jturn <= 18) {
      this.jattack = this.jturn - 3;
      this.jturn++;
    }
    if (this.jturn === 14) {
      this.jattack = m(8, 9, 10, 11);
    }
    if (this.jturn >= 10 && this.jturn <= 13) {
      this.jattack = this.jturn - 2;
      this.jturn++;
    }
    if (this.jturn === 9) {
      this.jattack = m(4, 5, 6, 7);
    }
    if (this.jturn >= 5 && this.jturn <= 8) {
      this.jattack = this.jturn - 1;
      this.jturn++;
    }
    if (this.jturn === 4) {
      this.jattack = m(0, 1, 2, 3);
    }
    if (this.jturn <= 3) {
      this.jattack = this.jturn;
      this.jturn++;
    }
    if ([2, 5, 9, 13, 15].includes(this.jattack)) {
      N4(this);
    } else {
      N3(this);
    }
  }
  startAttack() {
    if (this.attacked !== 0) {
      return;
    }
    let NT = this.myself;
    this.turns++;
    this.chaosdance++;
    if (this.chaosdance >= 9) {
      this.chaosdance = 0;
    }
    let Ng = N5.monsterat[NT];
    N5.monsterat[NT] *= this.pfactor;
    let Nc = N5.monsterat[NT];
    let NO = (NG) => {
      let Np = Ni(this.x, this.y, W);
      Object.assign(Np, NG);
      return Np;
    };
    let NJ = this.body;
    let NW = this.jattack;
    if (NW === 0) {
      NO({
        type: 70,
        target: this.mytarget,
        grazepoints: 2,
        damage: Nc * 5,
      });
      NJ.condition = 2;
    }
    if (NW === 1) {
      NO({
        grazepoints: 3,
        type: 65,
        target: this.mytarget,
        damage: Nc * 5,
      });
    }
    if (NW === 2) {
      NO({
        type: 49,
        target: 3,
        damage: Nc * 4,
        grazepoints: 3,
      });
      NJ.condition = 2;
    }
    if (NW === 3) {
      if (NJ.condition < 4) {
        NJ.condition = 5;
      }
      NO({
        grazepoints: 3,
        type: 75,
        target: this.mytarget,
        damage: Nc * 6,
      });
    }
    if (NW === 4) {
      N6("snd_joker_anything");
      NO({
        type: 62,
        target: this.mytarget,
        inv: 20,
        damage: Nc * 5,
        grazepoints: 2,
      });
    }
    if (NW === 5) {
      NO({
        grazepoints: 3,
        type: 50,
        target: 3,
        damage: Nc * 4,
      });
      N5.turntimer = 300;
      NJ.condition = 2;
    }
    if (NW === 6) {
      NO({
        type: 73,
        target: this.mytarget,
        damage: Nc * 5,
      });
    }
    if (NW === 7) {
      NO({
        type: 68,
        target: this.mytarget,
        grazepoints: 2,
        damage: Nc * 5,
      });
    }
    if (NW === 8) {
      N6("snd_joker_anything");
      NO({
        inv: 20,
        type: 61,
        target: this.mytarget,
        grazepoints: 3,
        damage: Nc * 5,
      });
      N5.turntimer = 240;
    }
    if (NW === 9) {
      NO({
        type: 48,
        target: 3,
        damage: Nc * 4,
        grazepoints: 4,
      });
      N5.turntimer = 270;
      NJ.condition = 2;
    }
    if (NW === 10) {
      NO({
        type: 72,
        target: this.mytarget,
        damage: Nc * 5,
      });
    }
    if (NW === 11) {
      if (NJ.condition < 4) {
        NJ.condition = 5;
      }
      NO({
        type: 76,
        target: this.mytarget,
        grazepoints: 3,
        damage: Nc * 6,
      });
    }
    if (NW === 12) {
      NO({
        type: 71,
        target: this.mytarget,
        damage: Nc * 5,
        grazepoints: 2,
      });
      NJ.condition = 2;
    }
    if (NW === 13) {
      NO({
        type: 46,
        target: 3,
        damage: Nc * 4,
        grazepoints: 4,
      });
      N5.turntimer = 330;
      NJ.condition = 2;
    }
    if (NW === 14) {
      NO({
        type: 74,
        target: this.mytarget,
        damage: Nc * 4,
      });
    }
    if (NW === 15) {
      NO({
        type: 77,
        target: this.mytarget,
        damage: Nc * 4,
      });
      N5.turntimer = 1500;
      if (NJ.condition < 4) {
        NJ.condition = 5;
      }
    }
    NX.with("obj_dbulletcontroller", (NG) => {
      NG.joker = 1;
    });
    this.pfactor = 1;
    N5.monsterat[NT] = Ng;
    this.attacked = 1;
  }
  actStep() {
    let NT = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      N5.msg = new Array(100).fill(" ");
      N5.msg[0] = "* JEVIL &* There is no strategy to defeat the enemy. Good luck!/%";
      e();
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.actcon = 5;
      N5.msg = new Array(100).fill(" ");
      N5.msg[0] = "* Kris spun around^1!&* JEVIL got slightly more TIRED^1, and...!/%";
      N6("snd_pirouette");
      let Ng = NX.first("obj_herokris");
      if (Ng) {
        Ng.visible = false;
        this.dancekris = l(Ng.x, Ng.y, "spr_krisb_pirouette");
        this.dancekris.image_speed = 0.3334;
        this.dancekris.depth = Ng.depth;
        let Nc = Ni(this.dancekris.x + 28, this.dancekris.y + 40, I);
        Nc.sprite_index = "spr_pirouette_fx";
        Nc.image_xscale = 2;
        Nc.image_yscale = 2;
        Nc.fadespeed = 0.05;
      }
      e();
    }
    if (this.actcon === 5 && !NX.exists("obj_writer")) {
      if (this.dancekris) {
        this.dancekris.instance_destroy();
      }
      let NO = NX.first("obj_herokris");
      if (NO) {
        NO.visible = true;
      }
      N5.msg = new Array(100).fill(" ");
      N5.msg[0] = "* Something happened!/%";
      let NJ = this.chaosdance;
      if (NJ === 0) {
        N5.msg[0] = "* What^1!&* It was just foley!/%";
        N6(m("snd_badexplosion", "snd_carhonk", "snd_toilet"));
      }
      if (NJ === 1) {
        N5.msg[0] = "* JEVIL felt at ease^1!&* JEVIL's defense dropped!/%";
        if (N5.monsterdf[NT] >= -16) {
          N5.monsterdf[NT] -= 4;
        }
        N6("snd_weirdeffect");
      }
      if (NJ === 2) {
        N5.msg[0] = "* Awkward^1! Upcoming attack will hurt rapidly!/%";
        N6("snd_awkward");
        N5.invc = 0.4;
      }
      if (NJ === 3) {
        N5.msg[0] = "* Tranquil^1!&* The dance defended the party!/%";
        this.pfactor = 0.7;
        N6("snd_shadowpendant");
      }
      if (NJ === 4) {
        let NW = l(-40, 60, "spr_uselessbird");
        NW.hspeed = 12;
        NW.image_speed = 0.334;
        NW.depth = -30;
        N6("snd_birdtweet");
        N5.msg[0] = "* What^1!&* It's nothing but a useless bird!/%";
      }
      if (NJ === 5) {
        N5.msg[0] = "* It felt comforting!/%";
        let NG = m(0, 1, 2);
        Z(NG, NV(NB(31) + 25));
      }
      if (NJ === 6) {
        N5.msg[0] = "* Everyone's HP got jumbled up!/%";
        let Np = m(2, 3);
        let Nw = Np === 2 ? 3 : 2;
        let NC = N5.hp.slice();
        let Nv = N5.maxhp.slice();
        N5.maxhp[1] = Nv[Np];
        N5.maxhp[Np] = Nv[Nw];
        N5.maxhp[Nw] = Nv[1];
        N5.hp[1] = NC[Np];
        N5.hp[Np] = NC[Nw];
        N5.hp[Nw] = NC[1];
        let Nf = NX.first("obj_battlecontroller");
        if (Nf) {
          let NY = Nf.hpcolor.slice();
          Nf.hpcolor[0] = NY[Np - 1];
          Nf.hpcolor[Np - 1] = NY[Nw - 1];
          Nf.hpcolor[Nw - 1] = NY[0];
        }
        for (let NZ = 1; NZ <= 3; NZ++) {
          if (N5.hp[NZ] < 1) {
            N5.hp[1] += NV(N5.hp[NZ] / 3);
            N5.hp[2] += NV(N5.hp[NZ] / 3);
            N5.hp[3] += NV(N5.hp[NZ] / 3);
            N5.hp[NZ] = 1;
          }
        }
        for (let NU = 1; NU <= 3; NU++) {
          if (N5.hp[NU] < 1) {
            N5.hp[NU] = 1;
          }
        }
        N2(0);
        N2(1);
        N2(2);
        N6("snd_weirdeffect");
      }
      if (NJ === 7) {
        N6("snd_boost");
        N5.msg[0] = "* JEVIL's upcoming move got powered up!/%";
        this.pfactor = 1.25;
      }
      if (NJ === 8) {
        N6("snd_applause");
        N5.msg[0] = "* A perfect 10!/%";
        n(36 + NV(NB(15)));
      }
      e();
      this.hypnosiscounter += 0.5;
      if (this.hypnosiscounter >= 9) {
        N5.monsterstatus[NT] = 1;
      }
      this.pirouette = NJ;
      this.pirouettecounter++;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      if (N5.monsterat[NT] > 10) {
        N5.monsterat[NT] -= 0.5;
      }
      N6("snd_hypnosis");
      this.actcon = 1;
      let Nj = m(
        "* Ralsei chanted something^1!",
        "* Susie spun something around^1!",
        "* Kris gazed strangely^1!",
      );
      let NF = "&* JEVIL became more TIRED!";
      if (this.hypnosiscounter >= 9) {
        NF = "&* JEVIL's looking exhausted!";
        N5.monsterstatus[NT] = 1;
      }
      N5.msg = new Array(100).fill(" ");
      N5.msg[0] = Nj + "&* JEVIL's next attack weakened!" + NF + "/%";
      this.pfactor = 0.7;
      this.hypnosis = 1;
      this.hypnosiscounter += 1;
      e();
    }
    if (this.actcon === 1 && !NX.exists("obj_writer")) {
      this.actcon = 0;
      Q();
    }
  }
  destroy() {
    if (this.body && !this.body.destroyed) {
      this.body.alarm[0] = 60;
      this.body.alarmEvent = function (NT) {
        if (NT === 0) {
          this.instance_destroy();
        }
      };
    }
  }
};
Nz(NM, "obj_joker");
Nr(NM, "kinds", NN("obj_joker", h));
Nr(NM, "defaultDepth", 10);
Nr(NM, "defaultSprite", "spr_joker_main");
var Nd = NM;
Nq(Nd, "G.mnfight = 2;");
export { NK as a, NR as b, Nd as c };
