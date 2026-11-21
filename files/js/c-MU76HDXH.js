import { j as s } from "./c-OBBH5HHC.js";
import { a as t } from "./c-ODPZ3YBU.js";
import { a as n } from "./c-FASQFZ3T.js";
import { C as l, R as a0, u as a1 } from "./c-Q4AJT7BT.js";
import { ie as a2 } from "./c-HEUEF6GJ.js";
import { a as a3, b as a4, c as a5, w as a6 } from "./c-QJXN6G4A.js";
import { e as a7, i as a8, j as a9, q as aa } from "./c-CPDHW4F2.js";
import { B as aV, g as aO, h as aj, i as aU, k as aE, p as ae, y as ao } from "./c-O6GE5FYX.js";
import {
  I as aF,
  Nb as au,
  Pb as ai,
  Q as ak,
  ba as aJ,
  i as ah,
  ob as aG,
  va as aC,
  zb as aI,
} from "./c-ZEHUSSXN.js";
import { a as ar, l as aK } from "./c-7Q4J33FN.js";
aK();
aK();
var av = [
  {
    key: "cirno",
    name: "Cirno",
    file: "cirno.png",
    sw: 315,
    sh: 495,
    color: "aqua",
    from: "kris",
  },
  {
    key: "reimu",
    name: "Reimu",
    file: "reimu.png",
    sw: 266,
    sh: 495,
    color: "fuchsia",
    from: "susie",
  },
  {
    key: "flandre",
    name: "Flandre",
    file: "flandre.png",
    sw: 495,
    sh: 495,
    color: "lime",
    from: "ralsei",
  },
];
var ac = 46;
var ad = 6;
var aZ = false;
function aq() {
  if (aZ) {
    return true;
  }
  if (typeof document === "undefined" || typeof Image === "undefined") {
    return false;
  }
  for (let aM of av) {
    let aX = ac;
    let aB = Math.max(1, Math.round((aM.sw / aM.sh) * aX));
    let aL = document.createElement("canvas");
    aL.width = aB * ad;
    aL.height = aX * ad;
    let aQ = new Image();
    aQ.onload = () => {
      try {
        let aN = aL.getContext("2d");
        aN.clearRect(0, 0, aB * ad, aX * ad);
        aN.imageSmoothingEnabled = true;
        aN.imageSmoothingQuality = "high";
        aN.drawImage(aQ, 0, 0, aB * ad, aX * ad);
      } catch {}
    };
    aQ.src = "assets/" + aM.file;
    let aw = "spr_" + aM.key + "_b";
    aF[aw] = {
      name: aw,
      w: aB,
      h: aX,
      ox: Math.round(aB / 2) - 15,
      oy: 0,
      frames: 1,
      bb: [0, 0, aB - 1, aX - 1],
      precise: false,
      hd: ad,
      img: [aL],
    };
    let aA = a3[aM.from];
    let af = {};
    for (let aN of Object.keys(aA.sprites)) {
      af[aN] = aw;
    }
    a3[aM.key] = {
      id: aM.key,
      name: aM.name,
      color: aM.color,
      head: null,
      namesprite: null,
      menuicon: aA.menuicon,
      stats: {
        ...aA.stats,
      },
      spells: [...aA.spells],
      weapons: aA.weapons,
      sprites: af,
      frames: {
        ...aA.frames,
        actframes: 1,
        actreturnframes: 1,
        attackframes: 1,
        itemframes: 1,
        defendframes: 1,
        spellframes: 1,
        victoryframes: 1,
      },
      size: {
        mywidth: aB * 2,
        myheight: aX * 2,
      },
    };
  }
  aZ = true;
  return true;
}
ar(aq, "registerTouhouParty");
function ay(aM) {
  return aM.game === "undertale" && (aM.engine || "undertale") === "undertale";
}
ar(ay, "isUndertale");
function aW(aM, aX) {
  let aB = aX.cfg || {};
  ah.reseed(aX.seed | 0);
  s(aB);
  aO.fightSeed = aX.seed | 0;
  let aL = aO.tempflag ? aO.tempflag[3] : 0;
  aG.clear();
  ai();
  aj();
  aU();
  a2();
  aJ();
  aO.battleover = null;
  aO.jevilResult = null;
  aO.inGameOver = false;
  aO.roomScale = 1;
  aO.gameoverAction = null;
  aO.tempflag[3] = aL || 0;
  aO.shakex = 0;
  aO.shakey = 0;
  aO.bgSpeed = 1;
  aO.endfade = 0;
  for (let aw of ["sus", "ral", "noe"]) {
    for (let aA of ["canact", "actname", "actdesc", "actcost", "actsimul"]) {
      let af = aA === "actname" || aA === "actdesc" ? " " : 0;
      aO[aA + aw] = [0, 1, 2].map(() => new Array(6).fill(af));
    }
  }
  a7(aB);
  let aQ = a9(aB);
  for (let [aN, al] of Object.entries(aQ.roster || {})) {
    if (!!al && (!!al.story || !!(aQ.slots || []).includes(Number(aN)))) {
      aO.charbase[Number(aN)] = al.base;
      aO.charhero[Number(aN)] = al.hero || a4[al.base - 1] || "kris";
    }
  }
  aE(ae);
  for (let aR of new Set([1, 2, 3, ...(aQ.slots || [])])) {
    if (aR) {
      aT(aQ, aR);
    }
  }
  if (aB.items) {
    for (aO.item = aB.items.filter((aD) => aD > 0); aO.item.length < 13;) {
      aO.item.push(0);
    }
  }
  t(aO, aM, aB, ay(aM));
  ao();
  aV();
  n();
  Object.assign(aC, {
    invuln: !!aB.invuln,
    nomiss: !!aB.nomiss,
    freetp: !!aB.freetp,
    slowbullets: !!aB.slowbullets,
    hpscale: aB.hpscale ?? 1,
    turnscale: aB.turnscale ?? 1,
    shake: aB.shake ?? 1,
    musicvol: aB.musicvol ?? 0.6,
    sfxvol: aB.sfxvol ?? 1,
    nodialog: !!aB.nodialog,
  });
  as = ay(aM) ? "undertale" : "deltarune";
  return as;
}
ar(aW, "buildFight");
function aT(aM, aX) {
  let aB = aO.charbase[aX] || aX;
  let aL = aM.weapon || {};
  let aQ = aM.armor1 || {};
  let aw = aM.armor2 || {};
  let aA = aM.maxhp || {};
  let af = aM.stats || {};
  let aN = (aR, aD) => (aR && (aR[aX] ?? aR[aB])) ?? aD;
  aO.charweapon[aX] = aN(aL, aO.charweapon[aX]);
  aO.chararmor1[aX] = aN(aQ, aO.chararmor1[aX]);
  aO.chararmor2[aX] = aN(aw, aO.chararmor2[aX]);
  aO.maxhp[aX] = aN(aA, aO.maxhp[aX]);
  aO.hp[aX] = aO.maxhp[aX];
  aO.at[aX] = aN(af.at, aO.at[aX]);
  aO.df[aX] = aN(af.df, aO.df[aX]);
  aO.mag[aX] = aN(af.mag, aO.mag[aX]);
  aO.charname[aX] = (aM.roster && aM.roster[aX] && aM.roster[aX].name) || aO.charname[aB];
  let al = a3[aO.charhero[aX] || a4[aB - 1]];
  if (al) {
    for (aO.spell[aX] = [...al.spells, ...a6(al.id)].slice(0, 12); aO.spell[aX].length < 12;) {
      aO.spell[aX].push(0);
    }
  }
}
ar(aT, "applyMember");
function am(aM, aX) {
  let aB = a9(aX);
  aO.customTeam = 0;
  aO.partyNotice = null;
  if (aB && typeof aB == "object") {
    let aw =
      aB.slots &&
      aB.slots.length === 3 &&
      aB.slots[0] === 1 &&
      aB.slots[1] === 2 &&
      aB.slots[2] === 3 &&
      !aB.slots.some((af) => aB.roster && aB.roster[af] && !aB.roster[af].story);
    let aA = aM.storyParty === "always";
    if (aA && !aw && aB.slots && aB.slots.some((af) => af)) {
      aO.partyNotice = "This fight uses the story party.";
    }
    if (aM.storyParty && (aw || aA)) {
      let af = aB.roster && aB.roster[a5];
      if (af && af.story && aO.char.includes(4) && aO.charhero && aO.charhero[4] === "noelle") {
        let aN = (al) => (aB[al] && aB[al][a5] != null ? aB[al][a5] : null);
        if (aN("weapon") != null) {
          aO.charweapon[4] = aN("weapon");
        }
        if (aN("armor1") != null) {
          aO.chararmor1[4] = aN("armor1");
        }
        if (aN("armor2") != null) {
          aO.chararmor2[4] = aN("armor2");
        }
      }
    } else if (aB.slots && aB.slots.some((al) => al)) {
      let al = aB.slots.filter((aR) => aR).slice(0, 50);
      aO.char = al.length > 3 ? al.slice() : [al[0] || 0, al[1] || 0, al[2] || 0];
      aO.customTeam = 1;
      for (let aR of al) {
        let aD = aB.roster && aB.roster[aR];
        if (!!aD && !aD.story) {
          aO.charbase[aR] = aD.base;
          aO.charhero[aR] = aD.hero || a4[aD.base - 1] || "kris";
          aT(aB, aR);
        }
      }
      if (al.length === 1) {
        aO.heromakex = [80, 80, 80];
        aO.heromakey = [140, 140, 140];
      }
      if (al.length === 2) {
        aO.heromakex = [80, 80, 80];
        aO.heromakey = [100, 180, 180];
      }
      if (aM.seats && al.length > aM.seats) {
        aO.char = al.slice(0, aM.seats);
        let aH = aO.char.map(
          (V0) => (aO.charname && aO.charname[V0]) || (a3[aO.charhero[V0]] || {}).name || "?",
        );
        aO.partyNotice =
          "Only three fit on this ride: " +
          aH.slice(0, -1).join(", ") +
          " and " +
          aH[aH.length - 1] +
          ".";
      }
    }
    if (aM.partyhp) {
      for (let V0 = 0; V0 < aO.char.length; V0++) {
        let V1 = aO.char[V0];
        if (V1) {
          aO.maxhp[V1] = aM.partyhp;
          aO.hp[V1] = aM.partyhp;
        }
      }
    }
    if (aM.heroes) {
      aq();
      for (let V2 = 0; V2 < 3; V2++) {
        let V3 = aO.char[V2];
        let V4 = aM.heroes[V2];
        if (!!V3 && !!V4 && !!a3[V4]) {
          aO.charhero[V3] = V4;
          aO.charname[V3] = a3[V4].name;
        }
      }
    }
    ao();
    aV();
    if (aM.background) {
      aM.background();
    }
  }
  if (a8()) {
    aa(aM);
  }
  let aL = aI(0, 0, a0);
  if (aM.skipvictory && aL) {
    aL.skipvictory = aM.skipvictory;
  }
  (aM.monsters || []).forEach((V5, V6) => V5.setup(V6));
  if (aM.ambush === 1) {
    aG.with("obj_writer", (V5) => V5.instance_destroy());
    aG.with("obj_face", (V5) => V5.instance_destroy());
    aO.charturn = l();
    aO.mnfight = 1;
    aO.myfight = -1;
    aG.with("obj_monsterparent", (V5) => {
      V5.ambushed = 1;
    });
  }
  if (aB && typeof aB == "object" && (aC.hpscale ?? 1) !== 1) {
    for (let V5 = 0; V5 < 3; V5++) {
      if (aO.monster[V5] === 1) {
        aO.monstermaxhp[V5] = Math.max(1, Math.round(aO.monstermaxhp[V5] * aC.hpscale));
        aO.monsterhp[V5] = aO.monstermaxhp[V5];
      }
    }
  }
  let aQ = aX && typeof aX == "object" && aX.tpstart > 0 ? aX : null;
  if (aQ) {
    aO.tension = Math.min(
      aO.maxtension,
      Math.round(aO.maxtension * Math.min(1, Number(aQ.tpstart))),
    );
  }
  if (aX && typeof aX == "object" && aX.runhp && typeof aX.runhp == "object") {
    aS(aX.runhp);
  }
}
ar(am, "startDeltaruneController");
var aY = ar((aM) => {
  let aX = Number(aM);
  if (Number.isFinite(aX)) {
    return Math.max(0, Math.min(1, aX));
  } else {
    return 1;
  }
}, "shareOf");
function aS(aM) {
  if (!aM || typeof aM != "object") {
    return false;
  }
  let aX = Math.max(1, Math.min(1.44, Number.isFinite(Number(aM.s)) ? Number(aM.s) : 1));
  if (typeof aO.hp == "number") {
    let aL = Number(aO.maxhp) > 0 ? Number(aO.maxhp) : 20;
    let aQ = Math.min(aL + 15, Math.round(aL * aX));
    aO.hp = Math.max(1, Math.min(aQ, Math.round(aL * aX * aY(aM.u))));
    return true;
  }
  if (!Array.isArray(aO.char) || !aO.maxhp || !aO.hp) {
    return false;
  }
  let aB = aM.h && typeof aM.h == "object" ? aM.h : {};
  for (let aw = 0; aw < aO.char.length; aw++) {
    let aA = aO.char[aw];
    if (!aA || !(aO.maxhp[aA] > 0)) {
      continue;
    }
    let af = Math.round(aO.maxhp[aA] * aX);
    let aN = Object.prototype.hasOwnProperty.call(aB, String(aA)) ? aY(aB[String(aA)]) : 1;
    aO.maxhp[aA] = af;
    aO.hp[aA] = Math.max(1, Math.min(af, Math.round(af * aN)));
  }
  return true;
}
ar(aS, "applyRunHp");
var as = "deltarune";
var aP = ar(() => aO.mnfight === 0 && !aO.myfight, "atCommandMenu");
function ag() {
  let aM = aP() && (as !== "deltarune" || !at());
  let aX = (aB) => String(aB.mystring ?? aB.originalstring ?? "").includes("/") || aB.halt !== 0;
  for (let aB of aG.all("obj_base_writer")) {
    if (!aB.destroyed && (!aM || !!aX(aB))) {
      if (aB.halt === 0) {
        let aL = String(aB.originalstring ?? "").length;
        if ((aB.stringpos | 0) < aL) {
          aB.stringpos = aL;
        }
      } else if (aB.halt === 1 || aB.halt === 2 || aB.halt === 4) {
        aB.event_user(0);
      }
    }
  }
  for (let aQ of aG.all("obj_writer")) {
    if (aQ.destroyed || (aM && !aX(aQ))) {
      continue;
    }
    let aw = typeof aQ.nextmsg == "function";
    if (aQ.halt === 0) {
      if (aQ.skippable === 1) {
        aQ.skipme = 1;
      }
    } else if ((aQ.halt === 1 || aQ.halt === 2) && aQ.siner > 0) {
      if (aw) {
        if (aQ.disablebutton1) {
          continue;
        }
        if (aQ.halt === 1) {
          aQ.nextmsg();
        } else {
          aQ.instance_destroy();
        }
      } else {
        aQ.forcebutton1 = 1;
      }
    }
  }
}
ar(ag, "fastForwardDialogue");
function ap() {
  ag();
}
ar(ap, "skipDialogue");
var ab =
  /press|\[z\]|\[c\]|~\d|repeatedly|rapidly|timing|time it|direction|\baim\b|choose|select|hold|photo|take a|as many|catch|shoot|mash/i;
function az() {
  let aM = aG.all("obj_writer").filter((aX) => !aX.destroyed);
  return (
    aM.length > 0 &&
    aM.every(
      (aX) =>
        aX.reachedend === 1 && aX.halt === 0 && aX.siner > 1 && !ab.test(String(aX.mystring ?? "")),
    )
  );
}
ar(az, "typedOutWaiting");
function at() {
  try {
    return !!a1();
  } catch {
    return false;
  }
}
ar(at, "heldSafe");
function ax() {
  let aM = false;
  for (let aB = 0; aB < 3 && !aM; aB++) {
    let aL = aO.monsterinstance && aO.monsterinstance[aB];
    if (
      aL &&
      !aL.destroyed &&
      (aL.actcon === 20 || aL.actconsus === 20 || aL.actconral === 20 || aL.actconnoe === 20)
    ) {
      aM = true;
    }
  }
  if (!aM) {
    return false;
  }
  let aX = aG.all("obj_writer").filter((aQ) => !aQ.destroyed);
  return aX.length > 0 && aX.every((aQ) => aQ.reachedend === 1 && aQ.halt === 0);
}
ar(ax, "simulActWaiting");
au.input = () => {
  if (aC.nodialog) {
    ag();
    if ((!aO.control_state || !aO.control_state[0] || !aG.exists("obj_time")) && an()) {
      ak.pressed.b1 = true;
    }
  }
};
function an() {
  if (aO.minigameStage) {
    return false;
  } else if (as === "deltarune") {
    if (
      aG.exists("obj_choicer_neo") ||
      aG.all("obj_writer").some((aM) => !aM.destroyed && aM.halt === 5)
    ) {
      return false;
    } else if (aO.mnfight === 1) {
      return true;
    } else if (aO.myfight === 3) {
      return ax() || az();
    } else if (aO.myfight === 0 && aO.mnfight === 0) {
      return at() && az();
    } else {
      return false;
    }
  } else {
    return (
      aO.mnfight === 1 && !aG.all("obj_base_writer").some((aM) => !aM.destroyed && aM.halt === 5)
    );
  }
}
ar(an, "nodialogWantsZ");
export { ay as a, aW as b, am as c, aS as d, ag as e, ap as f, ab as g };
