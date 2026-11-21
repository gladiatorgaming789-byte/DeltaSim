import { e as r, g as j } from "./c-MU76HDXH.js";
import { G as h, H as s, I as y } from "./c-Q4AJT7BT.js";
import { o as g } from "./c-F4ZSRAAO.js";
import { g as m } from "./c-O6GE5FYX.js";
import { Nb as t, Q as C0, ob as C1, va as C2, zb as C3 } from "./c-ZEHUSSXN.js";
import { a as C4, l as C5 } from "./c-7Q4J33FN.js";
C5();
var C6 = {
  stall: 450,
  dialogPresses: 6,
  dialogStall: 300,
  noEnd: 300,
  retry: 150,
  nudge: 45,
  nudgePage: 45,
  nudgeLong: 1350,
  turnHard: 2700,
};
var C7 = {
  key: "",
  same: 0,
  spawns: -1,
  presses: 0,
  rung: 0,
  lastAct: -1000000000,
  noEnd: 0,
  frame: 0,
  log: [],
  said: new Set(),
  fightId: null,
  ttLow: null,
  ttPinned: 0,
};
var C8 = null;
var C9 = null;
function CC(Cs) {
  C8 = (Cs && Cs.toast) || null;
  C9 = (Cs && Cs.note) || null;
}
C4(CC, "guardHooks");
function CT(Cs) {
  C7.key = "";
  C7.same = 0;
  C7.spawns = -1;
  C7.presses = 0;
  C7.rung = 0;
  C7.lastAct = -1000000000;
  C7.noEnd = 0;
  C7.frame = 0;
  C7.log = [];
  C7.said = new Set();
  C7.fightId = Cs ?? null;
  C7.ttLow = null;
  C7.ttPinned = 0;
  C7.pinPresses = 0;
  C7.prevCore = "";
  C7.prog = Co.token;
  Cn.frames = 0;
}
C4(CT, "guardReset");
var Co = {
  token: undefined,
};
function Cw(Cs) {
  Co.token = Cs;
}
C4(Cw, "guardProgress");
function CI() {
  return C7.log.slice();
}
C4(CI, "guardLog");
var Cu = C4((Cs) => Cs && !Cs.destroyed, "alive");
var CU = C4((Cs, CR) => Cs && typeof Cs.is == "function" && Cs.is(CR), "isA");
function Ca() {
  for (let Cs of C1.list) {
    if (
      !!Cu(Cs) &&
      !!/^(OBJ_WRITER|OBJ_INSTAWRITER|OBJ_NOMSCWRITER)$/.test(Cs.constructor.name) &&
      (Cs.halt > 0 || /[/]|\\C/.test(String(Cs.originalstring ?? Cs.mystring ?? "")))
    ) {
      return true;
    }
  }
  return false;
}
C4(Ca, "utChoiceAnswerable");
function CM(Cs) {
  let CR = Cs.constructor.name;
  return (
    CU(Cs, "obj_writer") ||
    CU(Cs, "obj_base_writer") ||
    CR === "OBJ_WRITER" ||
    CR === "OBJ_INSTAWRITER" ||
    CR === "OBJ_NOMSCWRITER"
  );
}
C4(CM, "isWriter");
var CQ = C4(
  (Cs) => /^obj_(battle)?blcon/i.test(Cs.constructor.name) || CU(Cs, "obj_battleblcon"),
  "isBalloon",
);
function Cl() {
  let Cs = [];
  for (let CR of C1.list) {
    if (Cu(CR) && CM(CR)) {
      Cs.push(CR);
    }
  }
  return Cs;
}
C4(Cl, "writers");
function Ce() {
  let Cs = [];
  for (let CR of C1.list) {
    if (Cu(CR) && CQ(CR)) {
      Cs.push(CR);
    }
  }
  return Cs;
}
C4(Ce, "balloons");
var CA = C4(
  () =>
    C1.list.some(
      (Cs) => Cu(Cs) && (/choicer/i.test(Cs.constructor.name) || (CM(Cs) && Cs.halt === 5)),
    ),
  "choiceUp",
);
var CX = C4((Cs) => {
  let CR = 0;
  Cs = String(Cs ?? "");
  for (let Cp = 0; Cp < Cs.length; Cp++) {
    CR = Math.imul(CR ^ Cs.charCodeAt(Cp), 31) >>> 0;
  }
  return CR;
}, "strh");
function CL() {
  let Cs = [];
  for (let CR of Cl()) {
    Cs.push(
      CR.constructor.name + ":" + (CR.msgno ?? "") + ":" + CX(CR.originalstring ?? CR.mystring),
    );
  }
  for (let Cp of Ce()) {
    Cs.push(Cp.constructor.name);
  }
  return Cs.sort().join("|");
}
C4(CL, "textKey");
var Cn = {
  frames: 0,
  mn: 0,
  my: 0,
  z: true,
  from: -1,
  text: "",
};
function Cd(Cs = true) {
  Cn.frames = C6.nudgeLong;
  Cn.mn = m.mnfight;
  Cn.my = m.myfight;
  Cn.z = Cs;
  Cn.from = C1.frame;
  Cn.text = CL();
}
C4(Cd, "startNudge");
function Ck() {
  if (Cn.frames <= 0) {
    return;
  }
  let Cs = C1.frame - Cn.from;
  if (
    !(Cs < 0) &&
    !(Cs >= Cn.frames) &&
    m.mnfight === Cn.mn &&
    m.myfight === Cn.my &&
    !m.battleover &&
    !m.inGameOver &&
    !CA()
  ) {
    if (CL() === Cn.text) {
      if (Cs >= C6.nudge) {
        return;
      }
    } else if (Cs % C6.nudgePage !== 0) {
      return;
    }
    r();
    if (Cn.z) {
      if (!m.control_state || !m.control_state[0] || !C1.exists("obj_time")) {
        if (Cs % 2 === 0) {
          C0.pressed.b1 = true;
        }
      }
    }
  }
}
C4(Ck, "guardInput");
t.guard = Ck;
function CN(Cs = true) {
  Cd(Cs);
}
C4(CN, "guardNudge");
function CV() {
  let Cs = C1.frame - Cn.from;
  return Cn.frames > 0 && Cs >= 0 && Cs < Cn.frames;
}
C4(CV, "guardNudging");
var CP = new WeakMap();
var CJ = 0;
var Cr = C4((Cs) => {
  if (!CP.has(Cs)) {
    CP.set(Cs, ++CJ);
  }
  return CP.get(Cs);
}, "idOf");
var Cx = C4(
  () => (m.monster[0] === 1 ? 1 : 0) + (m.monster[1] === 1 ? 1 : 0) + (m.monster[2] === 1 ? 1 : 0),
  "live3",
);
function CY() {
  return m.fighting === 1 && m.mnfight === 0 && m.myfight === 0;
}
C4(CY, "drMenu");
function Cf() {
  return m.mnfight === 0 && m.myfight === 0;
}
C4(Cf, "utMenu");
function Cj() {
  let Cs = Number(m.turntimer) || 0;
  if (Cs > 0) {
    return Cs;
  } else {
    return 0;
  }
}
C4(Cj, "ttClock");
function CH(Cs) {
  let CR = m.bmenucoord;
  let Cp =
    m.mnfight + "|" + m.myfight + "|" + m.charturn + "|" + m.bmenuno + "|" + Math.floor(Cj() / 15);
  let Cv = Cs && m.bmenuno === 6 && !Ca() ? "q" : CR && CR[6];
  if (Cs) {
    Cp +=
      "|" +
      (CR && CR[0]) +
      "," +
      (CR && CR[1]) +
      "," +
      (CR && CR[2]) +
      "," +
      (CR && CR[4]) +
      "," +
      Cv;
  } else if (CR && Array.isArray(CR[0])) {
    Cp += "|" + CR[0][m.charturn] + "," + (CR[m.bmenuno] && CR[m.bmenuno][m.charturn]);
  }
  for (let CG = 0; CG < 3; CG++) {
    Cp +=
      "|" +
      m.monster[CG] +
      "," +
      (m.monsterhp ? m.monsterhp[CG] : "") +
      "," +
      (m.mercymod ? m.mercymod[CG] : "");
  }
  for (let CK of Cl()) {
    Cp +=
      "|w" +
      Cr(CK) +
      ":" +
      (CK.pos ?? "") +
      ":" +
      (CK.stringpos ?? "") +
      ":" +
      (CK.msgno ?? "") +
      ":" +
      (CK.halt ?? "");
  }
  return Cp;
}
C4(CH, "signature");
function Ci(Cs, CR, Cp, Cv) {
  let CG =
    "mn " +
    m.mnfight +
    " my " +
    m.myfight +
    " bm " +
    m.bmenuno +
    " tt " +
    Math.round(Number(m.turntimer) || 0) +
    " monsters " +
    [0, 1, 2].map((Cy) => m.monster[Cy]).join(",");
  let CK = {
    frame: C1.frame,
    kind: Cs,
    rung: CR,
    action: Cv ? "detected (strict: not recovered)" : Cp,
    where: CG,
  };
  C7.log.push(CK);
  if (!C7.said.has(Cs + CR)) {
    C7.said.add(Cs + CR);
    console.warn(
      "[guard] " + (C7.fightId || "") + " " + Cs + " stall: " + CK.action + " (" + CG + ")",
    );
  }
  if (C9) {
    try {
      C9("guard", {
        kind: Cs,
        rung: CR,
        strict: !!Cv,
      });
    } catch {}
  }
  if (C8) {
    try {
      C8(
        Cv
          ? "Guard: the fight is stuck (" + Cs + ") - strict mode, not recovering"
          : "Guard: the fight was stuck (" + Cs + ") - " + Cp,
        {
          kind: "warn",
          id: "guard",
          ms: 5000,
        },
      );
    } catch {}
  }
}
C4(Ci, "record");
function Ch() {
  let Cs = C1.first("obj_battlecontroller");
  C1.with("obj_bulletparent", (CR) => CR.instance_destroy());
  C1.with("obj_bulletgenparent", (CR) => CR.instance_destroy());
  C1.with("obj_darkener", (CR) => {
    CR.darken = 0;
  });
  C1.with("obj_heart", (CR) => {
    C3(CR.x, CR.y, g);
    CR.instance_destroy();
  });
  if (Cs) {
    Cs.reset = 0;
    Cs.noreturn = 0;
    Cs.timeron = 1;
    Cs.alarm[2] = -1;
  }
  s();
}
C4(Ch, "drEndTurnDirect");
function CS(Cs, CR) {
  let Cp = C1.first("obj_battlecontroller");
  if (Cs === "dialog") {
    if (CR === 0) {
      Cd();
      return "advanced the text box with its own Z";
    } else if (m.mnfight === 1 || m.mnfight === 1.5) {
      return CS("talk", CR);
    } else if (m.myfight === 3 || (m.myfight === 4 && !C1.exists("obj_spellphase"))) {
      h();
      return "finished the ACT and went on (scr_attackphase)";
    } else if (m.myfight === 4) {
      Cd();
      return "advanced the spell text with its own Z";
    } else {
      return CS("phase", CR - 1);
    }
  }
  if (Cs === "talk") {
    if (CR === 0) {
      Cd();
      return "pressed Z for the enemy speech";
    }
    if (CR === 1) {
      let Cv = 0;
      for (let CG = 0; CG < 3; CG++) {
        let CK = m.monsterinstance && m.monsterinstance[CG];
        if (Cu(CK) && typeof CK.talkmax == "number" && CK.talkmax > 0) {
          CK.talktimer = CK.talkmax;
          Cv++;
        }
      }
      if (Cv) {
        return "ran the enemy speech timer out (scr_blconskip)";
      }
    }
    m.mnfight = 2;
    m.turntimer = 0;
    if (Cp) {
      Cp.reset = 0;
      Cp.noreturn = 0;
      Cp.timeron = 1;
    }
    return "moved the enemy turn on";
  }
  if (Cs === "turn" || Cs === "phase") {
    if (CR === 0 && m.mnfight === 2) {
      m.turntimer = 0;
      if (Cp) {
        Cp.timeron = 1;
        if (Cp.reset === 1 && !(Cp.alarm[2] > 0)) {
          Cp.alarm[2] = 1;
        }
      }
      return "ran the turn timer out";
    } else if (CR <= 1 && Cp && !Cp.destroyed) {
      m.mnfight = 2;
      m.turntimer = 0;
      Cp.reset = 0;
      Cp.noreturn = 0;
      Cp.timeron = 1;
      Cp.alarm[2] = -1;
      return "handed the end of the turn back to the battle controller";
    } else {
      Ch();
      return "ended the enemy turn";
    }
  }
  if (Cs === "act") {
    h();
    return "finished the ACT and went on to the enemy turn";
  }
  if (Cs === "attack") {
    m.mnfight = 1;
    m.myfight = -1;
    return "finished the attack and went on to the enemy turn";
  }
  if (Cs === "end") {
    if (Cp && Cp.victory !== 1) {
      if (m.mnfight === 0 && m.myfight === 0) {
        y();
        return "ended the battle (no enemy left)";
      }
      if (CR > 0) {
        y();
        return "ended the battle (no enemy left)";
      }
    }
    return null;
  }
  return null;
}
C4(CS, "drRescue");
function CF() {
  let Cs = 0;
  for (let CR of Cl()) {
    if (CR.halt !== 3) {
      CR.halt = 3;
      Cs++;
    }
  }
  return Cs;
}
C4(CF, "utHalt3");
function Cc(Cs, CR) {
  if (Cs === "dialog") {
    if (CR === 0) {
      Cd();
      return "advanced the text box with its own Z";
    }
    if (CR === 1) {
      let Cp = CF();
      if (m.mnfight === 0 && (m.myfight === 2 || m.myfight === 3 || m.myfight === 4)) {
        m.myfight = 0;
        m.mnfight = 1;
        return "closed the text box (halt 3) and ended the ACT as its last page does";
      }
      if (Cp) {
        return "closed the text box (halt 3)";
      }
    }
    return Cc(m.mnfight === 1 ? "talk" : "turn", CR - 1);
  }
  if (Cs === "talk") {
    if (CR === 0) {
      Cd();
      return "pressed Z for the enemy speech";
    } else {
      m.mnfight = 2;
      return "moved the enemy turn on";
    }
  } else if (Cs === "turn" || Cs === "phase" || Cs === "end") {
    m.turntimer = -1;
    m.myfight = 0;
    m.mnfight = 3;
    return "ended the enemy turn";
  } else if (Cs === "act") {
    m.myfight = 0;
    m.mnfight = 1;
    return "finished the ACT and went on to the enemy turn";
  } else if (Cs === "attack") {
    m.myfight = 0;
    m.mnfight = 1;
    return "finished the attack and went on to the enemy turn";
  } else {
    return null;
  }
}
C4(Cc, "utRescue");
function Cz(Cs) {
  if (Cx() === 0) {
    return "end";
  }
  let CR = Cl().length > 0 || Ce().length > 0;
  if (m.mnfight === 2) {
    if (CR) {
      return "turn-text";
    } else {
      return "turn";
    }
  }
  if (m.mnfight === 1 || m.mnfight === 1.5) {
    if (CR) {
      return "talk-text";
    } else {
      return "talk";
    }
  }
  if (Cs) {
    if (m.mnfight === 0 && (m.myfight === 2 || m.myfight === 3 || m.myfight === 4)) {
      if (CR) {
        return "dialog";
      } else {
        return "act";
      }
    }
    if (m.mnfight === 0 && m.myfight === 1) {
      return "attack";
    }
    if (m.mnfight === 3) {
      return "phase";
    }
  } else {
    if (m.myfight === 3 || m.myfight === 4) {
      if (CR) {
        return "dialog";
      } else {
        return "act";
      }
    }
    if (m.myfight === 1 && !C1.exists("obj_attackpress")) {
      return "attack";
    }
    if (m.myfight === 1) {
      return null;
    }
  }
  if (CR) {
    return "dialog";
  } else {
    return "phase";
  }
}
C4(Cz, "classify");
function CZ(Cs, CR = {}) {
  if (
    !Cs ||
    Cs.customEncounter ||
    Cs.room ||
    (CR.ut && m.fightRoom && m.fightRoom !== "room_battle") ||
    C1.exists("__roomhost") ||
    (Cs.standaloneMinigame && (!Cs.monsters || !Cs.monsters.length))
  ) {
    return null;
  }
  if (m.battleover || m.inGameOver) {
    C7.same = 0;
    return null;
  }
  if (!m.monster || typeof m.mnfight != "number") {
    return null;
  }
  if (C7.fightId !== Cs.id || C1.frame < (C7.worldFrame || 0)) {
    CT(Cs.id);
  }
  C7.worldFrame = C1.frame;
  C7.frame++;
  let Cp = !!CR.ut;
  let Cv = Cp ? Cf() : CY();
  let CG = CH(Cp);
  let CK = C1.spawns !== C7.spawns;
  C7.spawns = C1.spawns;
  if (CG !== C7.key || CK) {
    C7.key = CG;
    C7.same = 0;
    C7.presses = 0;
    if (CG.split("|w")[0] !== (C7.prevCore || "")) {
      C7.prevCore = CG.split("|w")[0];
      C7.rung = 0;
    }
  } else {
    C7.same++;
  }
  if (C0.pressed && (C0.pressed.b1 || C0.pressed.b3)) {
    C7.presses++;
  }
  let Cy = Co.token !== C7.prog;
  C7.prog = Co.token;
  if (Cy) {
    C7.same = 0;
    C7.presses = 0;
  }
  if (m.mnfight === 2) {
    let Ct = Cj();
    if (C7.ttLow === null || Ct < C7.ttLow || Cy) {
      C7.ttLow = Ct;
      C7.ttPinned = 0;
      C7.pinPresses = 0;
    } else {
      C7.ttPinned++;
    }
  } else {
    C7.ttLow = null;
    C7.ttPinned = 0;
    C7.pinPresses = 0;
  }
  if (C0.pressed && (C0.pressed.b1 || C0.pressed.b3)) {
    C7.pinPresses = (C7.pinPresses || 0) + 1;
  }
  C7.noEnd = Cx() === 0 && C7.same > 0 ? C7.noEnd + 1 : 0;
  if (Cv && Cx() > 0) {
    return null;
  }
  if (
    (Cp && m.bmenuno === 6 && Ca()) ||
    C1.list.some((CD) => Cu(CD) && /choicer/i.test(CD.constructor.name)) ||
    (!Cp &&
      C1.list.some(
        (CD) => Cu(CD) && CD.constructor.name === "obj_rouxls_simtown" && CD.MyTurn === 1,
      ))
  ) {
    C7.same = 0;
    C7.presses = 0;
    return null;
  }
  if (
    (!Cp &&
      C1.list.some(
        (CD) => Cu(CD) && CD.constructor.name === "obj_lightemup_controller" && !CD.starttimer,
      )) ||
    (!Cp &&
      m.chapter === 5 &&
      C1.list.some(
        (CD) =>
          Cu(CD) &&
          (CD.constructor.name === "obj_date_controller" ||
            (CD.constructor.name === "obj_purplecontrols" && CD.mode === 8) ||
            (CD.constructor.name === "obj_yellow_trial_manager" &&
              (CD.can_control || CD.evidence_mode))),
      )) ||
    (Cp &&
      C1.list.some(
        (CD) => Cu(CD) && CD.constructor.name === "obj_questionasker" && CD.phase === 2,
      )) ||
    (Cp && C1.list.some((CD) => Cu(CD) && CD.constructor.name === "obj_fakeheart")) ||
    (Cp &&
      C1.list.some(
        (CD) =>
          Cu(CD) &&
          CD.constructor.name === "obj_sansb_body" &&
          (CD.sleep_c >= 1 || CD.death_c >= 1),
      ))
  ) {
    C7.same = 0;
    C7.presses = 0;
    C7.ttPinned = 0;
    return null;
  }
  let Cq = Cz(Cp);
  if (!Cq) {
    return null;
  }
  if (Cq === "talk-text") {
    Cq = "dialog";
  }
  let CW = Cq;
  let CO;
  let Cb =
    (!!C2.nodialog || !!m.autoplay) &&
    !Cl().some((CD) => j.test(String(CD.mystring ?? CD.originalstring ?? "")));
  if (Cq === "turn-text") {
    CO =
      (C7.same >= C6.dialogStall && (C7.presses >= C6.dialogPresses || Cb)) ||
      (C7.ttPinned >= C6.turnHard && (C7.pinPresses >= C6.dialogPresses || Cb));
    Cq = C7.rung === 0 ? "dialog" : "turn";
  } else if (Cq === "end") {
    CO = C7.noEnd >= C6.noEnd;
  } else if (Cq === "dialog") {
    CO = C7.same >= C6.dialogStall && C7.presses >= C6.dialogPresses;
  } else if (Cq === "turn") {
    CO = C7.same >= C6.stall || C7.ttPinned >= C6.turnHard;
  } else {
    CO = C7.same >= C6.stall;
  }
  if (!CO && C7.rung > 0) {
    if (Cq === "end") {
      CO = C7.noEnd >= C6.retry;
    } else if (Cq === "dialog" || (Cq === "turn" && CW === "turn-text")) {
      CO =
        C7.same >= C6.retry &&
        (C7.presses >= 2 || C7.pinPresses >= 2 || (CW === "turn-text" && Cb));
    } else if (Cq === "turn") {
      CO = C7.same >= C6.retry || C7.ttPinned >= C6.retry;
    } else {
      CO = C7.same >= C6.retry;
    }
  }
  if (!CO || C7.frame - C7.lastAct < C6.retry) {
    return null;
  }
  C7.lastAct = C7.frame;
  let CB = !!CR.strict;
  let Cg = C7.rung;
  let Cm = null;
  if (!CB) {
    try {
      Cm = Cp ? Cc(Cq, Cg) : CS(Cq, Cg);
    } catch (CD) {
      Cm = "rescue threw: " + (CD && CD.message);
    }
  }
  if (!CB && !Cm) {
    return null;
  } else {
    Ci(Cq, Cg, Cm, CB);
    C7.rung++;
    C7.same = 0;
    C7.presses = 0;
    C7.noEnd = 0;
    C7.ttPinned = 0;
    return Cm;
  }
}
C4(CZ, "guardTick");
export { C6 as a, CC as b, CT as c, Cw as d, CI as e, Ck as f, CN as g, CV as h, CZ as i };
