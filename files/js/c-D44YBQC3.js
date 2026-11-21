import { a as A } from "./c-A3CL5ELZ.js";
import { k as M, rc as H } from "./c-G7MM4LIS.js";
import { G as W, H as E, s as P } from "./c-Q4AJT7BT.js";
import { q as Q } from "./c-5UGGU4DV.js";
import { f as L, n as e } from "./c-F4ZSRAAO.js";
import { L as t, g as J } from "./c-O6GE5FYX.js";
import { hb as C, ob as G, zb as r } from "./c-ZEHUSSXN.js";
import { a, e as V, g as X, l as q } from "./c-7Q4J33FN.js";
q();
q();
var Z = {
  chapter: 1,
  unusedMonsterTypes: [
    {
      type: 4,
      name: "Ralsei",
      carriedForward: false,
      why: "Defined in scr_monstersetup; no encounter case builds it.",
    },
    {
      type: 8,
      name: "Pippins",
      carriedForward: false,
      why: "Defined in scr_monstersetup; no encounter case builds it.",
    },
    {
      type: 17,
      name: "DoomTank",
      carriedForward: false,
      why: "Defined in scr_monstersetup; no encounter case builds it.",
    },
  ],
  unusedAttackPatterns: [
    6, 7, 8, 10, 11, 12, 13, 22, 36, 45, 55, 56, 57, 58, 60, 66, 67, 81, 82, 83, 84,
  ],
  unusedAttackDetail: [
    {
      type: 6,
      line: 132,
      why: "obj_dbulletcontroller can run pattern 6 (Step_0.gml line 132) but nothing assigns it. It spawns obj_dicebul.",
    },
    {
      type: 7,
      line: 147,
      why: "obj_dbulletcontroller can run pattern 7 (Step_0.gml line 147) but nothing assigns it. It spawns obj_dicebul.",
    },
    {
      type: 8,
      line: 166,
      why: "obj_dbulletcontroller can run pattern 8 (Step_0.gml line 166) but nothing assigns it. It spawns obj_dicebul.",
    },
    {
      type: 10,
      line: 188,
      why: "obj_dbulletcontroller can run pattern 10 (Step_0.gml line 188) but nothing assigns it. It spawns obj_dicebul.",
    },
    {
      type: 11,
      line: 214,
      why: "obj_dbulletcontroller can run pattern 11 (Step_0.gml line 214) but nothing assigns it. It spawns obj_dicebul.",
    },
    {
      type: 12,
      line: 241,
      why: "obj_dbulletcontroller can run pattern 12 (Step_0.gml line 241) but nothing assigns it. It spawns obj_dicebul.",
    },
    {
      type: 13,
      line: 255,
      why: "obj_dbulletcontroller can run pattern 13 (Step_0.gml line 255) but nothing assigns it. It spawns obj_dicebul.",
    },
    {
      type: 22,
      line: 301,
      why: "obj_dbulletcontroller can run pattern 22 (Step_0.gml line 301) but nothing assigns it. It spawns obj_regularbullet.",
    },
    {
      type: 36,
      line: 748,
      why: "obj_dbulletcontroller can run pattern 36 (Step_0.gml line 748) but nothing assigns it. It spawns obj_skychain.",
    },
    {
      type: 45,
      line: 987,
      why: "obj_dbulletcontroller can run pattern 45 (Step_0.gml line 987) but nothing assigns it. It spawns obj_suitbomb.",
    },
    {
      type: 55,
      line: 1137,
      why: "obj_dbulletcontroller can run pattern 55 (Step_0.gml line 1137) but nothing assigns it. It spawns obj_bigscythe.",
    },
    {
      type: 56,
      line: 1148,
      why: "obj_dbulletcontroller can run pattern 56 (Step_0.gml line 1148) but nothing assigns it. It spawns obj_bigscythe.",
    },
    {
      type: 57,
      line: 1169,
      why: "obj_dbulletcontroller can run pattern 57 (Step_0.gml line 1169) but nothing assigns it. It spawns obj_bigscythe.",
    },
    {
      type: 58,
      line: 1181,
      why: "obj_dbulletcontroller can run pattern 58 (Step_0.gml line 1181) but nothing assigns it. It spawns obj_bigscythe.",
    },
    {
      type: 60,
      line: 1192,
      why: "obj_dbulletcontroller can run pattern 60 (Step_0.gml line 1192) but nothing assigns it. It spawns obj_carouselbullet.",
    },
    {
      type: 66,
      line: 1284,
      why: "obj_dbulletcontroller can run pattern 66 (Step_0.gml line 1284) but nothing assigns it. It spawns obj_spadering.",
    },
    {
      type: 67,
      line: 1296,
      why: "obj_dbulletcontroller can run pattern 67 (Step_0.gml line 1296) but nothing assigns it. It spawns obj_spadering.",
    },
    {
      type: 81,
      line: 778,
      why: "obj_dbulletcontroller can run pattern 81 (Step_0.gml line 778) but nothing assigns it.",
    },
    {
      type: 82,
      line: 782,
      why: "obj_dbulletcontroller can run pattern 82 (Step_0.gml line 782) but nothing assigns it.",
    },
    {
      type: 83,
      line: 786,
      why: "obj_dbulletcontroller can run pattern 83 (Step_0.gml line 786) but nothing assigns it.",
    },
    {
      type: 84,
      line: 790,
      why: "obj_dbulletcontroller can run pattern 84 (Step_0.gml line 790) but nothing assigns it.",
    },
  ],
  unusedEncounters: [15, 21, 29],
  unusedEncounterWhy: {
    15: 'Nothing in the chapter sets this encounter number. It builds Clover, Hathy. Its message is "* Clover and Hathy grew close!".',
    21: 'Nothing in the chapter sets this encounter number. It builds Jigsawry. Its message is "* Jigsawry drew near!".',
    29: 'Nothing in the chapter sets this encounter number. It builds Head Hathy. Its message is "* Head Hathy blocked the way quietly!".',
  },
  carriedForwardEncounters: [],
  unusedEnemyObjects: [
    {
      object: "obj_clubsenemy_old",
      parent: "obj_monsterparent",
      events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
      lines: 498,
      type: 16,
      typeFrom:
        "chapter 1 scr_encountersetup gives monstertype 16 (via its shipped sibling obj_clubsenemy)",
      name: "Clover",
      gutted: false,
      attackTypes: [2, 4],
      needs: [],
      why: "5 events, 498 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 1 scr_encountersetup gives monstertype 16 (via its shipped sibling obj_clubsenemy).",
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
  ],
  definedAttackPatterns: [
    0, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24, 25, 26, 27, 30, 32, 33, 34, 35,
    36, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 60, 61, 62, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75,
    76, 77, 81, 82, 83, 84, 85,
  ],
  definedMonsterTypes: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25,
  ],
};
var R0 = new Proxy(
  {},
  {
    get: a((RR, RO) => H[RO] || Q[RO], "get"),
  },
);
var R1 = H;
var R2 = class Rb extends P {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.candodge = 0;
  }
  userEvent(RR) {
    if (RR === 12) {
      M.call(this);
      J.monsterx[this.myself] = this.x + 20;
      J.monstery[this.myself] = this.y;
      return;
    }
    return super.userEvent(RR);
  }
  step() {
    let RR = this.myself;
    if (J.monster[RR] === 1) {
      if (J.mnfight === 1 && this.talked === 0 && !G.exists("obj_attackpress")) {
        this.talked = 1;
        this.talktimer = 0;
        J.mnfight = 2;
      }
      if (J.mnfight === 2 && this.attacked === 0) {
        this.attacked = 1;
        J.turntimer = 120;
        if (!G.exists("obj_moveheart")) {
          e();
        }
        if (!G.exists("obj_growtangle")) {
          r(320, 170, L);
        }
      }
      if (J.mnfight === 2 && J.turntimer <= 1 && this.attacked === 1) {
        this.attacked = 2;
        if (!J.monster || !J.monster.__customBoard) {
          E();
        }
      }
      if (J.myfight === 3 && this.acting > 0 && this.actcon === 0) {
        this.actcon = 1;
      }
      if (this.actcon === 1 && !G.exists("obj_writer")) {
        this.actcon = 0;
        if (J.chapter >= 2 && t.scr_nextact) {
          t.scr_nextact.call(this);
        } else {
          this.acting = 0;
          J.acting = [0, 0, 0];
          W();
        }
      }
      if (
        J.myfight === 3 &&
        (this.actconsus === 1 || this.actconral === 1 || this.actconnoe === 1) &&
        !G.exists("obj_writer") &&
        t.scr_nextact
      ) {
        this.actconsus = 0;
        this.actconral = 0;
        this.actconnoe = 0;
        t.scr_nextact.call(this);
      }
      if (this.state === 3) {
        this.hurttimer--;
        if (this.hurttimer < 0) {
          this.state = 0;
        }
      }
    }
  }
  draw(RR) {
    RR.draw_sprite_ext(
      this.sprite_index,
      0,
      this.x,
      this.y,
      2,
      2,
      0,
      this.image_blend,
      this.image_alpha,
    );
    if (this.flash === 1) {
      this.fsiner++;
      RR.draw_sprite_white(
        this.sprite_index,
        0,
        this.x,
        this.y,
        2,
        2,
        0,
        -Math.cos(this.fsiner / 5) * 0.4 + 0.6,
      );
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
a(R2, "obj_cutenemy");
V(R2, "kinds", C("obj_cutenemy", P));
V(R2, "defaultSprite", "spr_dummymonster");
var R3 = R2;
var R4 = {
  obj_clubsenemy_old: "Early",
  obj_debug_swatchling: "Debug",
  obj_placeholderenemy: "Placeholder",
  obj_ralseienemy: "Unused",
  obj_rouxls_enemy_old_copy: "Old",
};
var R5 = a((RR) => RR.name + " (" + (R4[RR.object] || RR.object) + ")", "cutName");
function R6(RR, RO = 34) {
  let RN = [];
  let RY = "";
  for (let Ri of String(RR).split(/\s+/).filter(Boolean)) {
    if (RY && RY.length + 1 + Ri.length > RO) {
      RN.push(RY);
      RY = Ri;
    } else {
      RY = RY ? RY + " " + Ri : Ri;
    }
  }
  if (RY) {
    RN.push(RY);
  }
  return RN.join("#");
}
a(R6, "wrapDesc");
var R7 = {};
for (let RS of Z.unusedEnemyObjects || []) {
  R7[RS.type] = RS.object;
}
function R8() {
  let RR = [];
  for (let RN of Z.unusedMonsterTypes || []) {
    let RY = R7[RN.type];
    let Ri = (RY && R0[RY]) || R3;
    RR.push({
      id: "cut" + RN.type,
      name: RN.name,
      chapter: 1,
      area: "CUT CONTENT",
      cut: true,
      generated: true,
      desc:
        RN.name +
        "#" +
        R6(RN.why || "Unused enemy: defined in the game's data but no encounter uses it.") +
        (RY
          ? "#Runs its own object, " + RY + "."
          : "#Data-only: the game never made an#object for it."),
      party: [1, 2, 3],
      heromakex: [80, 80, 80],
      heromakey: [50, 130, 210],
      monsters: [
        {
          cls: Ri,
          type: RN.type,
          x: 500,
          y: 160,
          setup: () => {},
        },
      ],
      battlemsg: "* " + RN.name + " blocks the way!",
      encounterno: 0,
      music: "battle",
      background: A(null),
    });
  }
  let RO = new Set(RR.map((Rc) => Rc.monsters[0].type));
  for (let Rc of Z.unusedEnemyObjects || []) {
    if (RO.has(Rc.type)) {
      continue;
    }
    let RF = R0[Rc.object] || R3;
    RR.push({
      id: "cut_" + Rc.object.replace(/^(obj|o)_/, ""),
      name: R5(Rc),
      chapter: 1,
      area: "CUT CONTENT",
      cut: true,
      generated: true,
      desc: Rc.name + "#" + Rc.object + "#" + R6(Rc.why),
      party: [1, 2, 3],
      heromakex: [80, 80, 80],
      heromakey: [50, 130, 210],
      monsters: [
        {
          cls: RF,
          type: Rc.type,
          x: 500,
          y: 160,
          setup: () => {},
        },
      ],
      battlemsg: "* " + Rc.name + " blocks the way!",
      encounterno: 0,
      music: "battle",
      background: A(null),
    });
  }
  return RR;
}
a(R8, "buildCutFights");
var R9 = Z;
X(R3, "G.mnfight = 2;");
export { Z as a, R1 as b, R3 as c, R4 as d, R5 as e, R6 as f, R8 as g, R9 as h };
