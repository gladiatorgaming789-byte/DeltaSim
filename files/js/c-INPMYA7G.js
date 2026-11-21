import { a as c, l as b } from "./c-7Q4J33FN.js";
b();
b();
var D = ["buttons", "keys", "socks", "coins"];
var m = ["buttons", "keys"];
var a = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var y = 6;
var o = [1, 5, 25, 100, 500];
var h = 1000;
var p = 200;
var s = 5;
var r = 3;
var f = 4;
var k = {
  max: 100,
  gain: {
    twenty: 10,
    five: 20,
    brave: 10,
    stare: 15,
  },
  cost: {
    glow: 25,
    snag: 50,
    redraw: 50,
    knuckle: 75,
    find: 100,
  },
};
var g = {
  wick: "glow",
  bobbin: "snag",
  sienna: "redraw",
  aggie: "knuckle",
  finder: "find",
};
var B0 = ["wick", "bobbin", "sienna", "aggie", "finder"];
var B1 = [
  "dogear",
  "management",
  "lefty",
  "spareman",
  "tally",
  "nibs",
  "penny",
  "warranty",
  "keyes",
  "bunnie",
];
var B2 = {
  coin: {
    id: "coin",
    h17: false,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: true,
    insurance: true,
    surrender: true,
    ticket: false,
    lint: false,
  },
  glasses: {
    id: "glasses",
    h17: false,
    natural: 1,
    tiesLose: true,
    dealerOpen: true,
    peek: false,
    insurance: false,
    surrender: false,
    ticket: false,
    lint: false,
  },
  violin: {
    id: "violin",
    h17: true,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: true,
    insurance: true,
    surrender: false,
    ticket: true,
    lint: false,
  },
  lint: {
    id: "lint",
    h17: false,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: false,
    insurance: false,
    surrender: false,
    ticket: false,
    lint: true,
    lintWin: 1.2,
  },
  finale: {
    id: "finale",
    h17: false,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: false,
    insurance: false,
    surrender: false,
    ticket: false,
    lint: false,
    decks: 1,
    full: true,
    stakes: false,
  },
};
var B3 = "true";
var B4 = [
  {
    id: "coin",
    name: "THE COIN RETURN",
    law: "coin",
    min: 5,
    max: 100,
    dealer: "dogear",
    left: "tally",
    right: "nibs",
    farSeat: true,
    plaque: "STANDARD RULES.",
    house: "TEETH MAY BET ONE.",
    open: {
      always: true,
    },
  },
  {
    id: "glasses",
    name: "THE GLASSES CASE",
    law: "glasses",
    min: 10,
    max: 250,
    dealer: "dogear",
    left: "penny",
    right: "warranty",
    farSeat: true,
    plaque: "SEEN THROUGH: BOTH DEALER CARDS FACE UP. TIES LOSE. NATURALS PAY EVEN.",
    open: {
      ticket: "SIXTEEN",
      count: 4,
      beat: 5,
    },
  },
  {
    id: "violin",
    name: "THE VIOLIN CASE",
    law: "violin",
    min: 25,
    max: 500,
    dealer: "lefty",
    left: "keyes",
    right: "bunnie",
    farSeat: true,
    plaque: "THE STAND-IN: THE BUS TICKET COUNTS AS ANY CARD. DEALER HITS SOFT 17.",
    open: {
      ticket: "SPLIT_WIN",
      count: 8,
      beat: 6,
    },
  },
  {
    id: "lint",
    name: "THE LINT TRAP",
    law: "lint",
    min: 1,
    max: 51,
    dealer: "spareman",
    left: null,
    right: null,
    farSeat: false,
    plaque:
      "UNDER THE LINT: EVERY THIRD CARD IS DEALT FACE DOWN. NOBODY PEEKS. A WIN WITH LINT IN IT PAYS 6 TO 5.",
    open: {
      flag: "lintOpen",
      beat: 10,
    },
  },
];
var B5 = {
  id: "finale",
  name: "THE FIFTY-SECOND HAND",
  law: "finale",
  min: 0,
  max: 0,
  dealer: "spareman",
  left: null,
  right: null,
  farSeat: false,
  plaque: "",
  open: {
    flag: "finale",
  },
};
var B6 = [
  {
    id: "NATURAL",
    text: "Held a natural.",
    room: null,
  },
  {
    id: "SIXTEEN",
    text: "Stood on 16 against a ten and won.",
    room: null,
  },
  {
    id: "FIVE_CARD",
    text: "Won with five cards.",
    room: null,
  },
  {
    id: "SPLIT_WIN",
    text: "Won both halves of a split.",
    room: null,
  },
  {
    id: "DOUBLE_FACE",
    text: "Doubled on 11 and caught a face.",
    room: null,
  },
  {
    id: "THREE_RINGS",
    text: "Won all three rings in one deal.",
    room: null,
  },
  {
    id: "BUS_TICKET",
    text: "Won with the bus ticket.",
    room: "violin",
  },
  {
    id: "SEEN_21",
    text: "Beat a twenty you could see coming.",
    room: "glasses",
  },
  {
    id: "LINT_BUST",
    text: "Busted under the lint.",
    room: "lint",
  },
  {
    id: "STAKED",
    text: "Staked a stranger.",
    room: null,
  },
  {
    id: "WELL_PLAYED",
    text: 'Made Dog-Ear say "well played".',
    room: null,
  },
  {
    id: "CORNER",
    text: "Called the corner three times in one visit.",
    room: null,
  },
  {
    id: "CLAIMED",
    text: "Won the Keepsake bet.",
    room: null,
  },
  {
    id: "UNCLAIMED",
    text: "Wore the tag with dignity.",
    room: null,
  },
  {
    id: "INSURED",
    text: "Took Warranty's advice. It paid.",
    room: null,
  },
  {
    id: "SURRENDER",
    text: "Gave half back to Management.",
    room: "coin",
  },
  {
    id: "GLOW_21",
    text: "Leaned left, hit, twenty-one.",
    room: null,
  },
  {
    id: "SNAG_BUST",
    text: "Pulled a thread; the dealer came apart.",
    room: null,
  },
  {
    id: "REDRAW_TWO",
    text: "Redrew into two winners.",
    room: null,
  },
  {
    id: "KNUCKLE_12",
    text: "Knew enough to stand on twelve.",
    room: null,
  },
  {
    id: "NIBS_ONE",
    text: "Watched Nibs win one.",
    room: "coin",
  },
  {
    id: "BUNNIE_FIVE",
    text: "Saw Bunnie hold five cards.",
    room: "violin",
  },
  {
    id: "KEYES_21",
    text: "Saw the cycle land on twenty-one.",
    room: "violin",
  },
  {
    id: "FIFTY_ONE",
    text: "Counted the shoe.",
    room: null,
  },
  {
    id: "LEVER",
    text: "Pulled the lever eleven times.",
    room: "coin",
  },
  {
    id: "FIFTY_TWO",
    text: "Played the fifty-second hand.",
    room: null,
  },
];
var B7 = [
  {
    n: 1,
    id: "arrive",
    room: "coin",
    at: "sit",
  },
  {
    n: 2,
    id: "first_rummage",
    room: "coin",
    at: "after2",
  },
  {
    n: 3,
    id: "tally_fades",
    room: "coin",
    at: "after2",
  },
  {
    n: 4,
    id: "nibs_jar",
    room: "coin",
    at: "after2",
  },
  {
    n: 5,
    id: "penny_taken",
    room: "glasses",
    at: "after2",
  },
  {
    n: 6,
    id: "lefty_found",
    room: "violin",
    at: "after2",
  },
  {
    n: 7,
    id: "reprint",
    room: "coin",
    at: "sit",
  },
  {
    n: 8,
    id: "always_same",
    room: "coin",
    at: "after2",
  },
  {
    n: 9,
    id: "pillow",
    room: "coin",
    at: "sit",
  },
  {
    n: 10,
    id: "eleventh_key",
    room: "violin",
    at: "after2",
  },
  {
    n: 11,
    id: "spareman_speaks",
    room: "lint",
    at: "sit",
  },
  {
    n: 12,
    id: "last_call",
    room: "coin",
    at: "sit",
  },
];
var B8 = {
  visit: "BJ_VISIT",
  five: "BJ_FIVE",
  corner: "BJ_CORNER",
  claims: "BJ_CLAIMS",
  finale: "BJ_52",
};
var B9 = {
  tally: 300,
  nibs: 20,
  penny: 200,
  warranty: 250,
  keyes: 400,
  bunnie: 150,
  spareman: 500,
};
var BB = 1 / 25;
var BF = 5;
var BN = {
  dogear: "dogear_corner",
  lefty: "lefty_hum",
};
var BI = Object.fromEntries(B4.concat([B5]).map((Fm) => [Fm.id, Fm]));
function BP(Fm) {
  return BI[Fm] || null;
}
c(BP, "roomById");
var Bj = Object.fromEntries(B6.map((Fm) => [Fm.id, Fm]));
var BR = c(
  (Fm) => (typeof Fm == "string" ? B2[Fm] || B2[(BI[Fm] || {}).law] : Fm) || B2.coin,
  "lawOf",
);
function BG(...Fm) {
  let Fx = 2166136261;
  let Fa = Fm.map((Fu) => String(Fu)).join("");
  for (let Fu = 0; Fu < Fa.length; Fu++) {
    Fx ^= Fa.charCodeAt(Fu);
    Fx = Math.imul(Fx, 16777619) >>> 0;
  }
  return Fx >>> 0;
}
c(BG, "hashSeed");
function Bi(Fm) {
  let Fx = Fm >>> 0;
  let Fa = {
    next() {
      Fx = (Fx + 1831565813) >>> 0;
      let Fu = Fx;
      Fu = Math.imul(Fu ^ (Fu >>> 15), Fu | 1);
      Fu ^= Fu + Math.imul(Fu ^ (Fu >>> 7), Fu | 61);
      return ((Fu ^ (Fu >>> 14)) >>> 0) / 4294967296;
    },
    int(Fu) {
      return Math.floor(Fa.next() * Fu);
    },
    chance(Fu) {
      return Fa.next() < Fu;
    },
    pick(Fu) {
      return Fu[Fa.int(Fu.length)];
    },
    shuffle(Fu) {
      for (let FX = Fu.length - 1; FX > 0; FX--) {
        let FS = Fa.int(FX + 1);
        let FE = Fu[FX];
        Fu[FX] = Fu[FS];
        Fu[FS] = FE;
      }
      return Fu;
    },
    fork(Fu) {
      return Bi(BG(Fx, Fu));
    },
    state() {
      return Fx >>> 0;
    },
  };
  return Fa;
}
c(Bi, "rng");
function BC(Fm) {
  if (!Fm) {
    return null;
  }
  let Fx = Fm.rank;
  if (Fx === "TICKET") {
    return "TICKET";
  } else if (Fx === "A" || Fx === "10" || Fx === "J" || Fx === "Q" || Fx === "K") {
    return "HIGH";
  } else if (+Fx <= 6) {
    return "LOW";
  } else {
    return "MID";
  }
}
c(BC, "band");
function BY(Fm) {
  return !!Fm && (Fm.rank === "10" || Fm.rank === "J" || Fm.rank === "Q" || Fm.rank === "K");
}
c(BY, "isTen");
function BK(Fm) {
  return !!Fm && (Fm.rank === "J" || Fm.rank === "Q" || Fm.rank === "K");
}
c(BK, "isFace");
function BH(Fm) {
  let Fx = BC(Fm);
  if (Fx === "LOW") {
    return 1;
  } else if (Fx === "HIGH") {
    return -1;
  } else {
    return 0;
  }
}
c(BH, "hiLo");
function Bl(Fm) {
  if (Fm === "A") {
    return 1;
  } else if (Fm === "TICKET") {
    return 0;
  } else if (Fm === "J" || Fm === "Q" || Fm === "K") {
    return 10;
  } else {
    return +Fm;
  }
}
c(Bl, "rankValue");
var BQ = c((Fm, Fx) => Fm === "Q" && Fx === "buttons", "isMissing");
function Bw({ law: Fm, rng: Fx, decks: Fa = y, full: Fu = false } = {}) {
  let FX = BR(Fm);
  let FS = [];
  let FE = 0;
  for (let Fq = 0; Fq < Fa; Fq++) {
    for (let Fo of D) {
      for (let FL of a) {
        if (!!Fu || !BQ(FL, Fo)) {
          FS.push(
            Object.freeze({
              id: FE++,
              rank: FL,
              suit: Fo,
              deck: Fq,
            }),
          );
        }
      }
    }
  }
  if (FX.ticket) {
    FS.push(
      Object.freeze({
        id: FE++,
        rank: "TICKET",
        suit: null,
        deck: -1,
      }),
    );
  }
  let Fy = {
    all: FS,
    cards: [],
    cut: 0,
    dealtSinceShuffle: 0,
    size: FS.length,
    pastCut: false,
    cutFired: false,
    shuffle() {
      Fy.cards = FS.slice();
      Fx.shuffle(Fy.cards);
      Fy.cut = Math.floor(FS.length * (0.72 + Fx.next() * 0.06));
      Fy.dealtSinceShuffle = 0;
      Fy.pastCut = false;
      Fy.cutFired = false;
    },
    draw() {
      if (!Fy.cards.length) {
        Fy.shuffle();
      }
      let Fz = Fy.cards.shift();
      Fy.dealtSinceShuffle++;
      if (Fy.dealtSinceShuffle > Fy.cut) {
        Fy.pastCut = true;
      }
      return Fz;
    },
    burn() {
      return Fy.draw();
    },
    peek() {
      if (Fy.cards.length) {
        return Fy.cards[0];
      } else {
        return null;
      }
    },
    take(Fz) {
      let Fh = Fy.cards.findIndex((Fp) => Fp.rank === Fz.rank && Fp.suit === Fz.suit);
      if (Fh < 0) {
        return Fy.draw();
      }
      let Fv = Fy.cards.splice(Fh, 1)[0];
      Fy.dealtSinceShuffle++;
      if (Fy.dealtSinceShuffle > Fy.cut) {
        Fy.pastCut = true;
      }
      return Fv;
    },
    get remaining() {
      return Fy.cards.length;
    },
  };
  Fy.shuffle();
  return Fy;
}
c(Bw, "makeShoe");
function BU(Fm) {
  let Fx = 0;
  let Fa = 0;
  let Fu = false;
  let FX = 0;
  for (let Fq of Fm) {
    FX++;
    if (Fq.rank === "TICKET") {
      Fu = true;
      continue;
    }
    let Fo = Bl(Fq.rank);
    Fx += Fo;
    if (Fo === 1) {
      Fa++;
    }
  }
  let FS;
  let FE;
  let Fy = null;
  if (Fu) {
    let FL = Fa && Fx + 10 + 1 <= 21 ? 10 : 0;
    let Fz = null;
    for (let Fh of FL ? [10, 0] : [0]) {
      for (let Fv = 11; Fv >= 1; Fv--) {
        let Fp = Fx + Fh + Fv;
        if (Fp <= 21 && (Fz === null || Fp > Fz.s)) {
          Fz = {
            s: Fp,
            t: Fv,
            b: Fh,
          };
          break;
        }
      }
    }
    if (Fz) {
      FS = Fz.s;
      Fy = Fz.t;
      FE = Fz.t > 1 || Fz.b > 0;
    } else {
      FS = Fx + 1;
      Fy = 1;
      FE = false;
    }
  } else if (Fa && Fx + 10 <= 21) {
    FS = Fx + 10;
    FE = true;
  } else {
    FS = Fx;
    FE = false;
  }
  return {
    total: FS,
    soft: FE,
    ticketAs: Fy,
    hard: Fx,
    aces: Fa,
    ticket: Fu,
    n: FX,
  };
}
c(BU, "valueOf");
function Bc(Fm) {
  if (Fm.length !== 2) {
    return false;
  }
  let [Fx, Fa] = Fm;
  let Fu = Fx.rank === "TICKET" ? Fa : Fa.rank === "TICKET" ? Fx : null;
  if (Fu) {
    return Fu.rank === "A" || BY(Fu);
  } else {
    return (Fx.rank === "A" && BY(Fa)) || (Fa.rank === "A" && BY(Fx));
  }
}
c(Bc, "naturalOf");
function BM(Fm, { split: Fx = false, hiddenIds: Fa = null } = {}) {
  let Fu = BU(Fm);
  let FX = Fa ? Fm.filter((FE) => !Fa.has(FE.id)) : Fm;
  let FS = Fa ? BU(FX) : Fu;
  return {
    total: Fu.total,
    soft: Fu.soft,
    bust: Fu.total > 21,
    natural: !Fx && Bc(Fm),
    ticketAs: Fu.ticketAs,
    visible: {
      total: FS.total,
      soft: FS.soft,
      count: FX.length,
    },
    hidden: Fm.length - FX.length,
  };
}
c(BM, "handValue");
function BJ(Fm, Fx) {
  let Fa = BR(Fx);
  let Fu = Fm;
  if (Fu.total < 17) {
    return true;
  } else {
    return !!Fa.h17 && !!Fu.soft && Fu.total === 17;
  }
}
c(BJ, "dealerShouldHit");
var Bb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var BV = {
  51: Bb.map((Fm) => (Fm === 10 ? 15 : 4) / 51),
  52: Bb.map((Fm) => (Fm === 10 ? 16 : 4) / 52),
};
var BA = c((Fm, Fx) => (Fx && Fm + 10 <= 21 ? Fm + 10 : Fm), "tot");
var BO = c((Fm, Fx) => Fx && Fm + 10 <= 21, "isSoft");
function BD(Fm, Fx, Fa, Fu, FX) {
  let FS = Fm * 2 + (Fx ? 1 : 0);
  if (FX[FS]) {
    return FX[FS];
  }
  let FE = new Float64Array(6);
  if (Fm > 21) {
    FE[5] = 1;
  } else {
    let Fy = BA(Fm, Fx);
    if (Fy >= 17 && (!Fa || !BO(Fm, Fx) || Fy !== 17)) {
      FE[Fy - 17] = 1;
    } else {
      for (let Fq = 0; Fq < 10; Fq++) {
        let Fo = Bb[Fq];
        let FL = BD(Fm + Fo, Fx || Fo === 1, Fa, Fu, FX);
        for (let Fz = 0; Fz < 6; Fz++) {
          FE[Fz] += Fu[Fq] * FL[Fz];
        }
      }
    }
  }
  FX[FS] = FE;
  return FE;
}
c(BD, "dealerFrom");
function Bm(Fm, Fx, Fa, Fu) {
  let FX = [];
  let FS = new Float64Array(6);
  let FE = 0;
  let Fy = 0;
  for (let Fq = 0; Fq < 10; Fq++) {
    let Fo = Bb[Fq];
    if ((Fm === 1 && Fo === 10) || (Fm === 10 && Fo === 1)) {
      if (!Fa) {
        FE += Fu[Fq];
      }
      continue;
    }
    Fy += Fu[Fq];
    let FL = BD(Fm + Fo, Fm === 1 || Fo === 1, Fx, Fu, FX);
    for (let Fz = 0; Fz < 6; Fz++) {
      FS[Fz] += Fu[Fq] * FL[Fz];
    }
  }
  if (Fa) {
    for (let Fh = 0; Fh < 6; Fh++) {
      FS[Fh] /= Fy;
    }
    FE = 0;
  }
  return {
    d: FS,
    bj: FE,
  };
}
c(Bm, "dealerFromUp");
function Bx(Fm, Fx, Fa) {
  let Fu = new Map();
  let FX = (Fo, FL, Fz, Fh, Fv) => {
    let Fp = Fo + "," + FL + "," + Fz + "," + Fh + "," + Math.min(Fv, 3);
    if (Fu.has(Fp)) {
      return Fu.get(Fp);
    }
    let FW = new Float64Array(8);
    if (Fo + Fz > 21) {
      FW[5] = 1;
    } else if (BA(Fo, FL) >= 17) {
      let FT = BA(Fo + Fz, FL || Fh);
      if (Fv === 2 && FT === 21) {
        FW[6] = 1;
      } else if (FT >= 17) {
        FW[FT - 17] = 1;
      } else {
        FW[7] = 1;
      }
    } else {
      for (let Fr = 0; Fr < 10; Fr++) {
        let Ff = Bb[Fr];
        let Fk = FX(Fo + Ff, FL || Ff === 1, Fz, Fh, Fv + 1);
        let Fd = FX(Fo, FL, Fz + Ff, Fh || Ff === 1, Fv + 1);
        for (let FZ = 0; FZ < 8; FZ++) {
          FW[FZ] += Fx[Fr] * ((2 / 3) * Fk[FZ] + (1 / 3) * Fd[FZ]);
        }
      }
    }
    Fu.set(Fp, FW);
    return FW;
  };
  let FS = new Float64Array(6);
  let FE = 0;
  let Fy = 0;
  let Fq = Fm == null ? Bb.map((Fo, FL) => [Fo, Fx[FL], true]) : [[Fm, 1, false]];
  for (let [Fo, FL, Fz] of Fq) {
    for (let Fh = 0; Fh < 10; Fh++) {
      let Fv = Bb[Fh];
      let Fp;
      if (Fa) {
        Fp = Fz
          ? FX(Fv, Fv === 1, Fo, Fo === 1, 2)
          : FX(Fo + Fv, Fo === 1 || Fv === 1, 0, false, 2);
      } else {
        Fp = Fz
          ? FX(0, false, Fo + Fv, Fo === 1 || Fv === 1, 2)
          : FX(Fo, Fo === 1, Fv, Fv === 1, 2);
      }
      for (let FW = 0; FW < 6; FW++) {
        FS[FW] += FL * Fx[Fh] * Fp[FW];
      }
      FE += FL * Fx[Fh] * Fp[6];
      Fy += FL * Fx[Fh] * Fp[7];
    }
  }
  return {
    d: FS,
    bj: FE,
    low: Fy,
  };
}
c(Bx, "dealerLintBlind");
function Ba(Fm, Fx) {
  let Fa = Fm.low || 0;
  return (Fu, FX = 1) => {
    if (Fu > 21) {
      return -1;
    }
    let FS = FX * Fm.d[5] - Fm.bj;
    for (let FE = 0; FE < 5; FE++) {
      let Fy = 17 + FE;
      if (Fu > Fy) {
        FS += FX * Fm.d[FE];
      } else if (Fu < Fy || Fx) {
        FS -= Fm.d[FE];
      }
    }
    if (Fu >= 17) {
      FS += FX * Fa;
    }
    return FS;
  };
}
c(Ba, "standEVfn");
function Bu(Fm, Fx, Fa) {
  let Fu = Ba(Fm, Fx.tiesLose);
  let FX = new Map();
  let FS = (Fq, Fo) => {
    if (Fq > 21) {
      return -1;
    }
    let FL = Fq * 2 + (Fo ? 1 : 0);
    if (FX.has(FL)) {
      return FX.get(FL);
    }
    let Fz = BA(Fq, Fo);
    let Fh = Fu(Fz);
    if (Fz < 21) {
      let Fv = 0;
      for (let Fp = 0; Fp < 10; Fp++) {
        Fv += Fa[Fp] * FS(Fq + Bb[Fp], Fo || Bb[Fp] === 1);
      }
      if (Fv > Fh) {
        Fh = Fv;
      }
    }
    FX.set(FL, Fh);
    return Fh;
  };
  let FE = (Fq, Fo) => {
    let FL = 0;
    for (let Fz = 0; Fz < 10; Fz++) {
      FL += Fa[Fz] * FS(Fq + Bb[Fz], Fo || Bb[Fz] === 1);
    }
    return FL;
  };
  let Fy = (Fq, Fo) => {
    let FL = 0;
    for (let Fz = 0; Fz < 10; Fz++) {
      let Fh = Fq + Bb[Fz];
      FL += Fa[Fz] * (Fh > 21 ? -1 : Fu(BA(Fh, Fo || Bb[Fz] === 1)));
    }
    return FL * 2;
  };
  return {
    stand: (Fq, Fo) => Fu(BA(Fq, Fo)),
    hs: FS,
    hit: FE,
    dbl: Fy,
    split: (Fq) => {
      let Fo = 0;
      for (let FL = 0; FL < 10; FL++) {
        let Fz = Bb[FL];
        let Fh = Fq + Fz;
        let Fv = Fq === 1 || Fz === 1;
        if (Fq === 1) {
          Fo += Fa[FL] * Fu(BA(Fh, Fv));
        } else {
          Fo += Fa[FL] * Math.max(FS(Fh, Fv), Fy(Fh, Fv));
        }
      }
      return Fo * 2;
    },
  };
}
c(Bu, "makeSolver");
var BX = new Map();
function BS(Fm, Fx, Fa) {
  let Fu = Fm.id + "|" + Fx;
  let FX = BX.get(Fu);
  if (!FX) {
    FX = Fa();
    BX.set(Fu, FX);
  }
  return FX;
}
c(BS, "solverFor");
function BE(Fm) {
  if (Fm.rank === "TICKET") {
    return 11;
  } else {
    return Bl(Fm.rank);
  }
}
c(BE, "upValueOf");
function By(Fm, Fx) {
  let Fa = new Map([[0, 1]]);
  for (let Fu = 0; Fu < Fm; Fu++) {
    let FX = new Map();
    for (let [FS, FE] of Fa) {
      let Fy = FS >> 1;
      let Fq = FS & 1;
      for (let Fo = 0; Fo < 10; Fo++) {
        let FL = Bb[Fo];
        let Fz = (Math.min(Fy + FL, 31) << 1) | (Fq || FL === 1 ? 1 : 0);
        FX.set(Fz, (FX.get(Fz) || 0) + FE * Fx[Fo]);
      }
    }
    Fa = FX;
  }
  return Fa;
}
c(By, "hiddenDist");
function Bq(Fm, Fx, Fa) {
  let Fu = Ba(Fm, Fx.tiesLose);
  let FX = 1 + (Fx.lintWin || 1) - 1;
  let FS = [0, 1, 2, 3, 4].map((Fp) => By(Fp, Fa));
  let FE = (Fp, FW, FT) => {
    if (Fp > 21) {
      return -1;
    }
    let Fr = 0;
    for (let [Ff, Fk] of FS[Math.min(FT, 4)]) {
      let Fd = Fp + (Ff >> 1);
      let FZ = FW || (Ff & 1) === 1;
      Fr += Fk * (Fd > 21 ? -1 : Fu(BA(Fd, FZ), FT > 0 ? FX : 1));
    }
    return Fr;
  };
  let Fy = new Map();
  let Fq = new Map();
  let Fo = (Fp, FW, FT) => {
    let Fr = Fp + "," + (FW ? 1 : 0) + "," + FT;
    let Ff = Fy.get(Fr);
    if (Ff === undefined) {
      Ff = FE(Fp, FW, FT);
      Fy.set(Fr, Ff);
    }
    return Ff;
  };
  let FL = (Fp) => (Fp === 0 ? 2 : Fp - 1);
  let Fz = (Fp, FW, FT, Fr) => {
    let Ff = 0;
    for (let Fk = 0; Fk < 10; Fk++) {
      let Fd = Bb[Fk];
      Ff +=
        Fa[Fk] *
        (Fr === 0 ? Fh(Fp, FW, Math.min(FT + 1, 4), 2) : Fh(Fp + Fd, FW || Fd === 1, FT, Fr - 1));
    }
    return Ff;
  };
  let Fh = (Fp, FW, FT, Fr) => {
    if (Fp > 21) {
      return -1;
    }
    let Ff = Fp + "," + (FW ? 1 : 0) + "," + FT + "," + Fr;
    let Fk = Fq.get(Ff);
    if (Fk !== undefined) {
      return Fk;
    }
    Fk = Fo(Fp, FW, FT);
    if (BA(Fp, FW) < 21 && FT < 4) {
      let Fd = Fz(Fp, FW, FT, Fr);
      if (Fd > Fk) {
        Fk = Fd;
      }
    }
    Fq.set(Ff, Fk);
    return Fk;
  };
  let Fv = (Fp, FW, FT, Fr) => {
    let Ff = 0;
    for (let Fk = 0; Fk < 10; Fk++) {
      let Fd = Bb[Fk];
      Ff += Fa[Fk] * (Fr === 0 ? Fo(Fp, FW, FT + 1) : Fo(Fp + Fd, FW || Fd === 1, FT));
    }
    return Ff * 2;
  };
  return {
    stand: Fo,
    hit: (Fp, FW, FT, Fr) => Fz(Fp, FW, FT, Fr),
    dbl: Fv,
    split: (Fp, FW) => {
      let FT = 0;
      for (let Fr = 0; Fr < 10; Fr++) {
        let Ff = Bb[Fr];
        if (FW === 0) {
          FT +=
            Fa[Fr] *
            (Fp === 1 ? Fo(1, true, 1) : Math.max(Fh(Fp, Fp === 1, 1, 2), Fv(Fp, Fp === 1, 1, 2)));
        } else if (Fp === 1) {
          FT += Fa[Fr] * Fo(1 + Ff, true, 0);
        } else {
          FT +=
            Fa[Fr] * Math.max(Fh(Fp + Ff, Ff === 1, 0, FL(FW)), Fv(Fp + Ff, Ff === 1, 0, FL(FW)));
        }
      }
      return FT * 2;
    },
    V: Fh,
  };
}
c(Bq, "makeLintSolver");
function Bo(Fm, Fx, Fa) {
  if (Fa === "visible" || Fa === "hole") {
    return Bx(Fm, Fx, Fa === "hole");
  }
  if (Fm != null) {
    return Bm(Fm, false, false, Fx);
  }
  let Fu = new Float64Array(6);
  let FX = 0;
  for (let FS = 0; FS < 10; FS++) {
    let FE = Bm(Bb[FS], false, false, Fx);
    for (let Fy = 0; Fy < 6; Fy++) {
      Fu[Fy] += Fx[FS] * FE.d[Fy];
    }
    FX += Fx[FS] * FE.bj;
  }
  return {
    d: Fu,
    bj: FX,
  };
}
c(Bo, "lintDealerDist");
function BL(Fm, Fx, Fa = {}) {
  let Fu = BR(Fx || Fm.law);
  let FX = BV[Fm.full || Fu.full ? 52 : 51];
  let FS = Fm.cards || [];
  let FE = Fm.value && Fm.value.total !== undefined ? Fm.value : BM(FS);
  let Fy = FE.visible ? FE.visible.total : FE.total;
  let Fq = Fm.hidden || 0;
  let Fo = (FT) =>
    FT === "double"
      ? Fm.canDouble
      : FT === "split"
        ? Fm.canSplit
        : FT === "surrender"
          ? Fm.canSurrender
          : true;
  if (Fy >= 21 && Fq === 0) {
    return "stand";
  }
  if (FS.some((FT) => FT.rank === "TICKET") && Fq === 0) {
    return "hit";
  }
  let FL = 0;
  let Fz = false;
  for (let FT of FS) {
    let Fr = Bl(FT.rank);
    FL += Fr;
    if (Fr === 1) {
      Fz = true;
    }
  }
  let Fh = FS.length === 2 && FS[0].rank === FS[1].rank ? Bl(FS[0].rank) : 0;
  let Fv = {};
  if (Fu.lint) {
    let Ff = Fa.lintRule || B3;
    let Fk = Fm.dealerUp;
    let Fd = Fk ? Math.min(BE(Fk), 10) : null;
    let FZ = BS(Fu, "lint:" + Ff + ":" + Fd + ":" + (FX === BV[52] ? 52 : 51), () =>
      Bq(Bo(Fd === 11 ? 1 : Fd, FX, Ff), Fu, FX),
    );
    let Fg = Fm.untilLint == null ? 1 : Fm.untilLint;
    Fv.stand = FZ.stand(FL, Fz, Fq);
    Fv.hit = FZ.hit(FL, Fz, Fq, Fg);
    if (Fo("double") && FS.length + Fq === 2) {
      Fv.double = FZ.dbl(FL, Fz, Fq, Fg);
    }
    if (Fo("split") && Fh && Fq === 0) {
      Fv.split = FZ.split(Fh, Fg);
    }
  } else {
    let N0;
    if (Fu.dealerOpen) {
      let N1 = Fm.dealerCards || (Fm.dealerUp ? [Fm.dealerUp] : []);
      let N2 = 0;
      let N3 = false;
      for (let N4 of N1) {
        let N5 = Bl(N4.rank);
        N2 += N5;
        if (N5 === 1) {
          N3 = true;
        }
      }
      N0 = BS(Fu, "open:" + N2 + ":" + N3 + ":" + (FX === BV[52] ? 52 : 51), () =>
        Bu(
          {
            d: BD(N2, N3, Fu.h17, FX, []),
            bj: 0,
          },
          Fu,
          FX,
        ),
      );
    } else {
      let N6 = Fm.dealerUp;
      let N7 = N6 ? (N6.rank === "TICKET" ? 1 : Bl(N6.rank)) : 10;
      N0 = BS(Fu, "up:" + N7 + ":" + (FX === BV[52] ? 52 : 51), () =>
        Bu(Bm(N7, Fu.h17, Fu.peek, FX), Fu, FX),
      );
    }
    Fv.stand = N0.stand(FL, Fz);
    Fv.hit = N0.hit(FL, Fz);
    if (Fo("double") && FS.length === 2) {
      Fv.double = N0.dbl(FL, Fz);
    }
    if (Fo("split") && Fh) {
      Fv.split = N0.split(Fh);
    }
    if (Fo("surrender") && FS.length === 2) {
      Fv.surrender = -0.5;
    }
  }
  let Fp = "stand";
  let FW = -Infinity;
  for (let N8 of ["stand", "hit", "double", "split", "surrender"]) {
    if (Fv[N8] !== undefined && Fv[N8] > FW + 1e-12) {
      FW = Fv[N8];
      Fp = N8;
    }
  }
  if (Fa.withEV) {
    return {
      action: Fp,
      ev: Fv,
    };
  } else {
    return Fp;
  }
}
c(BL, "basicStrategy");
function Bz(Fm, Fx) {
  return Fm._legal(Fx);
}
c(Bz, "legalActions");
var Bh = c(
  (Fm, Fx) => !!Fm && !!Fx && Fm.seat === Fx.seat && Fm.ring === Fx.ring && Fm.hand === Fx.hand,
  "refEq",
);
var Bv = c((Fm) => Math.round(Fm * 2) / 2, "half");
var Bp = class N9 {
  constructor({
    room: Fm,
    seed: Fx,
    wallet: Fa = h,
    you: Fu = {
      char: "wick",
      nerve: 0,
    },
    seats: FX = [
      {
        kind: "you",
      },
    ],
    dealer: FS = null,
    tells: FE = {},
    script: Fy = null,
    full: Fq = false,
    canKeepsake: Fo = true,
    lintRule: FL = B3,
  } = {}) {
    this.roomCfg = BP(Fm) || BP("coin");
    this.room = this.roomCfg.id;
    this.law = B2[this.roomCfg.law];
    this.lintRule = FL;
    this.dealerId = FS || this.roomCfg.dealer;
    this.base = Bi(Fx >>> 0);
    this.streams = {
      shoe: this.base.fork("shoe"),
      tell: this.base.fork("tell:" + this.dealerId),
      penny: this.base.fork("penny"),
      ai: {},
    };
    this.full = !!Fq || !!this.law.full;
    this.shoe = Bw({
      law: this.law,
      rng: this.streams.shoe,
      decks: this.law.decks || y,
      full: this.full,
    });
    this.wallet = Bv(Fa);
    this.char = (Fu && Fu.char) || "wick";
    this.nerve = Math.max(0, Math.min(k.max, (Fu && Fu.nerve) || 0));
    this.tells = FE || {};
    this.script = Fy;
    this.canKeepsake = Fo;
    this.seats = FX.map((Fz, Fh) => {
      let Fv = {
        i: Fh,
        kind: Fz.kind,
        id: Fz.kind === "you" ? "you" : Fz.id,
        cfg: Fz,
        bank: Fz.kind === "you" ? null : Bv(Fz.bank ?? (B9[Fz.id] || 100)),
        rings: [],
        face: null,
        sitout: false,
        insurance: 0,
      };
      if (Fz.kind === "ai") {
        this.streams.ai[Fz.id] = this.base.fork("ai:" + Fz.id);
      }
      return Fv;
    });
    this.youSeat = this.seats.findIndex((Fz) => Fz.kind === "you");
    this.phase = "bet";
    this.bets = [0, 0, 0];
    this.stacks = [[], [], []];
    this.lastBets = [0, 0, 0];
    this.keepsakeRing = -1;
    this.keepsakeSpent = false;
    this.stareArmed = false;
    this.active = null;
    this.round = 0;
    this.seq = 0;
    this.seen = [];
    this.runningCount = 0;
    this.discard = 0;
    this.lastBigpot = -99;
    this.pendingShuffle = false;
    this._resetRound();
  }
  _resetRound() {
    this.dealer = {
      cards: [],
      hidden: new Set(),
      lint: new Set(),
    };
    this.dealCount = 0;
    this.skillUsed = false;
    this.stare = null;
    this.skills = [];
    this.tellLog = [];
    this.fives = [];
    this.ticketSeenBy = null;
    this.insurance = {
      offered: false,
      amount: 0,
      won: false,
    };
    this.dealerNatural = false;
    this.dealerDone = false;
    this.revealed = false;
    this.settleQueue = null;
    this.settled = [];
    this.roundBet = 0;
    this.redraw = null;
    this.knuckle = null;
    this.glow = null;
    this.bigpotFired = false;
    this._out = null;
    for (let Fm of this.seats) {
      Fm.rings = [];
      Fm.sitout = false;
      Fm.insurance = 0;
    }
  }
  _ev(Fm, Fx = {}) {
    let Fa = {
      t: Fm,
      seq: ++this.seq,
      ...Fx,
    };
    if (this._out) {
      this._out.push(Fa);
    }
    return Fa;
  }
  _begin() {
    this._out = [];
    return this._out;
  }
  _illegal(Fm, Fx) {
    return [
      {
        t: "illegal",
        seq: ++this.seq,
        action: Fm,
        reason: Fx,
      },
    ];
  }
  get you() {
    if (this.youSeat >= 0) {
      return this.seats[this.youSeat];
    } else {
      return null;
    }
  }
  _hand(Fm) {
    if (!Fm || Fm === "dealer") {
      return null;
    }
    let Fx = this.seats[Fm.seat];
    let Fa = Fx && Fx.rings[Fm.ring];
    return (Fa && Fa.hands[Fm.hand]) || null;
  }
  _cover(Fm, Fx) {
    if (Fm.kind === "you") {
      return this.wallet >= Fx;
    } else {
      return Fm.bank >= Fx;
    }
  }
  _pay(Fm, Fx) {
    if (Fm.kind === "you") {
      this.wallet = Bv(this.wallet + Fx);
    } else {
      Fm.bank = Bv(Fm.bank + Fx);
    }
  }
  _charge(Fm, Fx) {
    this._pay(Fm, -Fx);
  }
  credit(Fm) {
    this.wallet = Bv(this.wallet + Fm);
  }
  addBank(Fm, Fx) {
    let Fa = this.seats.find((Fu) => Fu.id === Fm);
    if (Fa) {
      Fa.bank = Bv(Fa.bank + Fx);
    }
    return !!Fa;
  }
  _limits() {
    return this.roomCfg;
  }
  placeChip(Fm, Fx) {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase",
      };
    } else if (this.law.stakes === false) {
      return {
        ok: false,
        reason: "ring",
      };
    } else if (!(Fm >= 0) || !(Fm < r) || Fm === this.keepsakeRing || !o.includes(Fx)) {
      return {
        ok: false,
        reason: "ring",
      };
    } else if (this.bets[Fm] + Fx > this._limits().max) {
      return {
        ok: false,
        reason: "max",
      };
    } else if (Fx > this.wallet) {
      return {
        ok: false,
        reason: "wallet",
      };
    } else {
      this.stacks[Fm].push(Fx);
      this.bets[Fm] += Fx;
      this.wallet = Bv(this.wallet - Fx);
      return {
        ok: true,
      };
    }
  }
  liftChip(Fm) {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase",
      };
    }
    let Fx = this.stacks[Fm];
    if (!Fx || !Fx.length) {
      return {
        ok: false,
        reason: "ring",
      };
    }
    let Fa = Fx.pop();
    this.bets[Fm] -= Fa;
    this.wallet = Bv(this.wallet + Fa);
    return {
      ok: true,
      value: Fa,
    };
  }
  clearBets() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase",
      };
    }
    for (let Fm = 0; Fm < r; Fm++) {
      while (this.stacks[Fm].length) {
        this.liftChip(Fm);
      }
    }
    return {
      ok: true,
    };
  }
  _setBets(Fm) {
    this.clearBets();
    for (let Fx = 0; Fx < r; Fx++) {
      let Fa = Fm[Fx] || 0;
      if (Fx !== this.keepsakeRing) {
        for (let Fu = o.length - 1; Fu >= 0 && Fa > 0; Fu--) {
          while (Fa >= o[Fu]) {
            this.stacks[Fx].push(o[Fu]);
            Fa -= o[Fu];
          }
        }
        this.bets[Fx] = (Fm[Fx] || 0) - Fa;
        this.wallet = Bv(this.wallet - this.bets[Fx]);
      }
    }
  }
  rebet() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase",
      };
    }
    let Fm = this.lastBets.map((Fu, FX) => (FX === this.keepsakeRing ? 0 : Fu));
    let Fx = Fm.reduce((Fu, FX) => Fu + FX, 0);
    if (!Fx) {
      return {
        ok: false,
        reason: "nobet",
      };
    }
    let Fa = this.bets.reduce((Fu, FX) => Fu + FX, 0);
    if (Fx > this.wallet + Fa) {
      return {
        ok: false,
        reason: "wallet",
      };
    } else if (Fm.some((Fu) => Fu > this._limits().max)) {
      return {
        ok: false,
        reason: "max",
      };
    } else {
      this._setBets(Fm);
      return {
        ok: true,
      };
    }
  }
  doubleBets() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase",
      };
    }
    let Fm = this.bets.map((Fa) => Fa * 2);
    let Fx = this.bets.reduce((Fa, Fu) => Fa + Fu, 0);
    if (Fx) {
      if (Fx > this.wallet) {
        return {
          ok: false,
          reason: "wallet",
        };
      } else if (Fm.some((Fa) => Fa > this._limits().max)) {
        return {
          ok: false,
          reason: "max",
        };
      } else {
        this._setBets(Fm);
        return {
          ok: true,
        };
      }
    } else {
      return {
        ok: false,
        reason: "nobet",
      };
    }
  }
  armKeepsake() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase",
      };
    }
    if (!this.canKeepsake || this.keepsakeSpent) {
      return {
        ok: false,
        reason: "used",
      };
    }
    if (this.law.stakes === false) {
      return {
        ok: false,
        reason: "ring",
      };
    }
    while (this.stacks[0].length) {
      this.liftChip(0);
    }
    this.keepsakeRing = 0;
    return {
      ok: true,
    };
  }
  armStare() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase",
      };
    } else if (this.law.dealerOpen || !this.tells[this.dealerId]) {
      return {
        ok: false,
        reason: "nodealer",
      };
    } else {
      this.stareArmed = true;
      return {
        ok: true,
      };
    }
  }
  _newHand(Fm, Fx = {}) {
    return {
      cards: [],
      faceDown: new Set(),
      bet: Fm,
      doubled: false,
      done: false,
      bust: false,
      bustRevealed: false,
      surrendered: false,
      fromSplit: false,
      splitAces: false,
      keepsake: false,
      noNatural: false,
      actions: [],
      stoodOn: null,
      doubledOn: null,
      doubleCard: null,
      result: null,
      twentyOne: false,
      glow: null,
      glowHit: false,
      five: false,
      ...Fx,
    };
  }
  _deal(Fm, { hole: Fx = false } = {}) {
    let Fa;
    let Fu = Fm === "dealer" ? this.dealer : this._hand(Fm);
    if (
      this.script &&
      this.script.youSecond &&
      Fm !== "dealer" &&
      Fm.seat === this.youSeat &&
      Fm.ring === 0 &&
      Fm.hand === 0 &&
      Fu.cards.length === 1 &&
      !this._scripted
    ) {
      Fa = this.shoe.take(this.script.youSecond);
      this._scripted = true;
    } else {
      Fa = this.shoe.draw();
    }
    this.dealCount++;
    let FX = !!this.law.lint && this.dealCount % 3 === 0;
    let FS = FX || (Fx && !this.law.dealerOpen);
    Fu.cards.push(Fa);
    if (Fm === "dealer") {
      if (FS) {
        this.dealer.hidden.add(Fa.id);
      }
      if (FX) {
        this.dealer.lint.add(Fa.id);
      }
    } else if (FS) {
      Fu.faceDown.add(Fa.id);
      if (FX) {
        Fu.hadLint = true;
      }
    }
    if (!FS) {
      this._see(Fa);
    }
    this._ev("deal", {
      to: Fm,
      card: FS ? null : Fa,
      faceDown: FS,
      lint: FX,
      hole: !!Fx,
      index: Fu.cards.length - 1,
    });
    if (!this.shoe.cutFired && this.shoe.pastCut) {
      this.shoe.cutFired = true;
      this._ev("cutcard", {});
    }
    if (Fa.rank === "TICKET") {
      this.ticketSeenBy = Fm === "dealer" ? "dealer" : this.seats[Fm.seat].id;
      this._ev("ticketDealt", {
        to: Fm,
      });
    }
    return Fa;
  }
  _see(Fm) {
    this.seen.push(Fm);
    this.runningCount += BH(Fm);
  }
  _handRefs() {
    let Fm = [];
    this.seats.forEach((Fx, Fa) =>
      Fx.rings.forEach((Fu, FX) => {
        if (Fu) {
          Fu.hands.forEach((FS, FE) =>
            Fm.push({
              seat: Fa,
              ring: FX,
              hand: FE,
            }),
          );
        }
      }),
    );
    return Fm;
  }
  _aiBetView(Fm) {
    return {
      law: this.law,
      room: this.room,
      bank: Fm.bank,
      min: this.roomCfg.min,
      max: this.roomCfg.max,
      runningCount: this.runningCount,
      decksLeft: Math.max(0.5, this.shoe.remaining / 51),
      round: this.round,
      face: Fm.face,
      seen: this.seen,
    };
  }
  deal() {
    if (this.phase !== "bet") {
      return this._illegal("deal", "phase");
    }
    let Fm = this.roomCfg;
    let Fx = this.you;
    if (Fx && this.law.stakes !== false) {
      if (!this.bets.some((Fy) => Fy > 0) && this.keepsakeRing !== 0 && !this.rebet().ok) {
        return this._illegal("deal", "nobet");
      }
      if (this.bets.some((Fy) => Fy > 0 && Fy < Fm.min)) {
        return this._illegal("deal", "min");
      }
    }
    let Fa = this._begin();
    this._resetRound();
    this._out = Fa;
    if (this.pendingShuffle) {
      this.shoe.shuffle();
      this.seen = [];
      this.runningCount = 0;
      this.discard = 0;
      this.pendingShuffle = false;
      this._ev("shuffle", {
        size: this.shoe.size,
      });
    }
    for (let Fy of this.seats) {
      if (Fy.kind !== "ai") {
        continue;
      }
      if (Fy.cfg.flip) {
        Fy.face = Fy.cfg.flip(this.streams.penny);
        this._ev("flip", {
          seat: Fy.i,
          id: Fy.id,
          face: Fy.face,
        });
      }
      let Fq = Fy.cfg.bet ? Fy.cfg.bet(this._aiBetView(Fy), this.streams.ai[Fy.id]) : 5;
      Fq = Math.min(Bv(+Fq || 0), Fm.max);
      if (Fq > 0 && Fq < Fm.min) {
        Fq = Fm.min;
      }
      if (!(Fq > 0) || Fq > Fy.bank) {
        Fy.sitout = true;
        this._ev("sitout", {
          seat: Fy.i,
          id: Fy.id,
          need: Fq,
        });
        continue;
      }
      Fy.bank = Bv(Fy.bank - Fq);
      Fy.rings = [
        {
          bet: Fq,
          hands: [this._newHand(Fq)],
        },
      ];
      this._ev("bet", {
        seat: Fy.i,
        id: Fy.id,
        amount: Fq,
      });
    }
    if (Fx) {
      Fx.rings = [null, null, null];
      if (this.law.stakes === false) {
        Fx.rings[0] = {
          bet: 0,
          hands: [
            this._newHand(0, {
              keepsake: true,
            }),
          ],
        };
      } else {
        for (let Fo = 0; Fo < r; Fo++) {
          if (Fo === this.keepsakeRing) {
            Fx.rings[Fo] = {
              bet: 0,
              hands: [
                this._newHand(0, {
                  keepsake: true,
                }),
              ],
            };
          } else if (this.bets[Fo] > 0) {
            Fx.rings[Fo] = {
              bet: this.bets[Fo],
              hands: [this._newHand(this.bets[Fo])],
            };
          }
        }
      }
      this.roundBet = this.bets.reduce((FL, Fz) => FL + Fz, 0);
      this.lastBets = this.bets.slice();
      this.keepsakeThisRound = this.keepsakeRing === 0;
      if (this.keepsakeThisRound) {
        this.keepsakeSpent = true;
      }
    }
    this.stareThisRound = this.stareArmed;
    this.stareArmed = false;
    let Fu = this._handRefs();
    for (let FL of Fu) {
      this._deal(FL);
    }
    this._deal("dealer");
    for (let Fz of Fu) {
      this._deal(Fz);
    }
    this._deal("dealer", {
      hole: true,
    });
    let FX = this.dealer.cards[1];
    if (!this.law.dealerOpen) {
      for (let Fh of Object.keys(this.tells)) {
        if (Fh !== this.dealerId) {
          continue;
        }
        let Fv = this.tells[Fh];
        if (!Fv || typeof Fv.test != "function") {
          continue;
        }
        let Fp = !!Fv.test(FX);
        let FW = this.streams.tell.chance(Fp ? Fv.p : Fv.q);
        let FT = Fv.id || Fv.tellId || BN[Fh] || Fh + "_tell";
        this.tellLog.push({
          who: Fh,
          tellId: FT,
          shown: FW,
          truth: Fp,
        });
        this._ev("tell", {
          who: Fh,
          tellId: FT,
          shown: FW,
          truth: Fp,
        });
      }
    }
    for (let Fr of Fu) {
      this._afterCard(Fr, true);
    }
    let FS = this.dealer.cards[0];
    let FE = FS.rank === "A" || FS.rank === "TICKET";
    if (this.law.insurance && FE && !this.dealer.hidden.has(FS.id)) {
      this.phase = "insure";
      let Ff = this._yourInsureCost();
      this.insurance.offered = true;
      this._ev("insureOffer", {
        cost: Ff,
      });
      if (!Fx || Ff === 0) {
        this._insureAI();
        return this._afterInsure(Fa);
      } else {
        return Fa;
      }
    }
    return this._afterInsure(Fa);
  }
  _yourInsureCost() {
    let Fm = this.you;
    if (Fm) {
      return Fm.rings.reduce((Fx, Fa) => Fx + (Fa && !Fa.hands[0].keepsake ? Fa.bet / 2 : 0), 0);
    } else {
      return 0;
    }
  }
  _insureAI() {
    for (let Fm of this.seats) {
      if (Fm.kind !== "ai" || !Fm.rings.length || !Fm.cfg.insure) {
        continue;
      }
      let Fx = Fm.rings[0].bet / 2;
      if (Fm.bank < Fx) {
        continue;
      }
      let Fa = {
        seat: Fm.i,
        ring: 0,
        hand: 0,
      };
      if (Fm.cfg.insure(this._view(Fa), this.streams.ai[Fm.id])) {
        Fm.bank = Bv(Fm.bank - Fx);
        Fm.insurance = Fx;
        this._ev("insure", {
          seat: Fm.i,
          amount: Fx,
        });
      }
    }
  }
  insure(Fm) {
    if (this.phase !== "insure") {
      return this._illegal("insure", "phase");
    }
    let Fx = this._yourInsureCost();
    if (Fm && Fx > this.wallet) {
      return this._illegal("insure", "wallet");
    }
    let Fa = this._begin();
    if (Fm && Fx > 0) {
      this.wallet = Bv(this.wallet - Fx);
      this.you.insurance = Fx;
      this.insurance.amount = Fx;
      this._ev("insure", {
        seat: this.youSeat,
        amount: Fx,
      });
    }
    this._insureAI();
    return this._afterInsure(Fa);
  }
  _afterInsure(Fm) {
    let Fx = this.dealer.cards;
    let Fa = Fx[0];
    let Fu = Bc(Fx);
    if (this.law.peek && (Fa.rank === "A" || Fa.rank === "TICKET" || BY(Fa))) {
      this._ev("peek", {
        natural: Fu,
      });
    }
    for (let FX of this.seats) {
      if (!FX.insurance) {
        continue;
      }
      let FS = Fu ? FX.insurance * 3 : 0;
      this._pay(FX, FS);
      if (FX.kind === "you") {
        this.insurance.won = Fu;
      }
      this._ev("settle", {
        ref: {
          seat: FX.i,
          ring: -1,
          hand: -1,
        },
        outcome: "insurance",
        bet: FX.insurance,
        paid: FS,
        net: FS - FX.insurance,
        keepsake: false,
      });
    }
    if (Fu && (this.law.peek || this.law.dealerOpen)) {
      this.dealerNatural = true;
      if (this.dealer.hidden.size) {
        this._revealDealer();
      }
      for (let FE of this._handRefs()) {
        this._hand(FE).done = true;
      }
      this._ev("dealerTotal", {
        total: 21,
        soft: true,
        bust: false,
      });
      this.dealerDone = true;
      this.phase = "settle";
      this.active = null;
      return Fm;
    }
    if (this.stareThisRound && this.dealer.hidden.has(Fx[1].id) && this.tells[this.dealerId]) {
      this.phase = "stare";
      return Fm;
    } else {
      this._startTurns();
      return Fm;
    }
  }
  call(Fm) {
    if (this.phase !== "stare") {
      return this._illegal("call", "phase");
    }
    let Fx = this._begin();
    let Fa = this.tellLog.find((FS) => FS.who === this.dealerId);
    let Fu = Fa ? Fa.truth : !!this.tells[this.dealerId].test(this.dealer.cards[1]);
    let FX = !!Fm === Fu;
    this.stare = {
      saysTrue: !!Fm,
      right: FX,
      dealer: this.dealerId,
    };
    this._ev("stareCall", {
      saysTrue: !!Fm,
      right: FX,
    });
    this._startTurns();
    return Fx;
  }
  _startTurns() {
    this.phase = "turn";
    this._nextActive();
  }
  _nextActive() {
    let Fm = this.active;
    this.active = null;
    for (let Fx of this._handRefs()) {
      if (!this._hand(Fx).done) {
        this.active = Fx;
        break;
      }
    }
    if (this.active) {
      if (!Bh(Fm, this.active)) {
        this._ev("turn", {
          ref: this.active,
        });
      }
    } else if (this.phase === "turn") {
      this.phase = "dealer";
    }
  }
  _afterCard(Fm, Fx = false) {
    let Fa = this._hand(Fm);
    let Fu = BM(Fa.cards, {
      split: Fa.fromSplit || Fa.noNatural,
      hiddenIds: Fa.faceDown,
    });
    if (Fu.visible.total > 21) {
      Fa.bust = true;
      Fa.done = true;
      this._ev("bust", {
        ref: Fm,
        total: Fu.visible.total,
        revealed: false,
      });
      return;
    }
    if (Fa.cards.length >= 5 && !Fa.five && Fu.visible.total <= 21) {
      Fa.five = true;
      this.fives.push(this.seats[Fm.seat].id);
      this._ev("five", {
        ref: Fm,
        alive: true,
      });
    }
    if (Fx && Fu.hidden === 0 && Fu.natural) {
      Fa.done = true;
      Fa.natural = true;
      return;
    }
    if (Fu.visible.total === 21) {
      if (!Fa.done) {
        Fa.done = true;
        Fa.twentyOne = true;
        Fa.stoodOn = 21;
        this._ev("twentyone", {
          ref: Fm,
        });
      }
      return;
    }
    if (Fa.splitAces && Fa.cards.length >= 2) {
      Fa.done = true;
    }
  }
  _legal(Fm) {
    let Fx = this._hand(Fm);
    if (!Fx || Fx.done || this.phase !== "turn") {
      return [];
    }
    let Fa = this.seats[Fm.seat];
    let Fu = Fa.rings[Fm.ring];
    let FX = ["hit", "stand"];
    let FS = Fx.cards.length === 2;
    let FE = FS && Fx.faceDown.size === 0;
    if (FS && !Fx.splitAces && !Fx.keepsake && this._cover(Fa, Fx.bet)) {
      FX.push("double");
    }
    if (
      FE &&
      !Fx.keepsake &&
      Fx.cards[0].rank === Fx.cards[1].rank &&
      Fx.cards[0].rank !== "TICKET" &&
      Fu.hands.length < f &&
      (!Fx.fromSplit || Fx.cards[0].rank !== "A") &&
      this._cover(Fa, Fx.bet)
    ) {
      FX.push("split");
    }
    if (this.law.surrender && FS && !Fx.fromSplit && !Fx.keepsake && Fx.actions.length === 0) {
      FX.push("surrender");
    }
    return FX;
  }
  act(Fm) {
    if (this.phase !== "turn" || !this.active || this.active.seat !== this.youSeat) {
      return this._illegal(Fm, "phase");
    }
    if (!this._legal(this.active).includes(Fm)) {
      return this._illegal(Fm, "illegal");
    }
    let Fx = this._begin();
    this._apply(this.active, Fm);
    return Fx;
  }
  _apply(Fm, Fx) {
    let Fa = this.seats[Fm.seat];
    let Fu = this._hand(Fm);
    let FX = BM(Fu.cards, {
      hiddenIds: Fu.faceDown,
    });
    Fu.actions.push(Fx);
    this._ev("action", {
      ref: Fm,
      action: Fx,
    });
    if (Fu.glow && Fu.actions.length === Fu.glowAt + 1 && Fx === "hit") {
      Fu.glowHit = true;
    }
    if (Fx === "hit") {
      this._deal(Fm);
      this._afterCard(Fm);
    } else if (Fx === "stand") {
      Fu.done = true;
      Fu.stoodOn = FX.visible.total;
      Fu.stoodSoft = FX.visible.soft;
    } else if (Fx === "double") {
      this._charge(Fa, Fu.bet);
      Fu.doubledOn = {
        total: FX.visible.total,
        soft: FX.visible.soft,
      };
      Fu.bet *= 2;
      Fu.doubled = true;
      if (Fa.kind === "you") {
        this.roundBet += Fu.bet / 2;
      }
      this._ev("double", {
        ref: Fm,
        bet: Fu.bet,
      });
      Fu.doubleCard = this._deal(Fm);
      this._afterCard(Fm);
      Fu.done = true;
    } else if (Fx === "split") {
      this._charge(Fa, Fu.bet);
      if (Fa.kind === "you") {
        this.roundBet += Fu.bet;
      }
      let FS = Fa.rings[Fm.ring];
      let FE = Fu.cards[0].rank === "A";
      let Fy = this._newHand(Fu.bet, {
        fromSplit: true,
        splitAces: FE,
      });
      Fy.cards.push(Fu.cards.pop());
      Fu.fromSplit = true;
      Fu.splitAces = FE;
      FS.hands.push(Fy);
      let Fq = {
        seat: Fm.seat,
        ring: Fm.ring,
        hand: FS.hands.length - 1,
      };
      this._ev("split", {
        ref: Fm,
        into: Fq,
      });
      this._deal(Fm);
      this._afterCard(Fm);
      this._deal(Fq);
      this._afterCard(Fq);
      if (FE) {
        Fu.done = true;
        Fy.done = true;
      }
    } else if (Fx === "surrender") {
      Fu.surrendered = true;
      Fu.done = true;
      let Fo = Fu.bet / 2;
      this._ev("surrender", {
        ref: Fm,
        back: Fo,
      });
    }
    this._nextActive();
  }
  skill(Fm = null) {
    let Fx = g[this.char];
    if (this.phase !== "turn" || !this.active || this.active.seat !== this.youSeat) {
      return this._illegal("skill", "phase");
    }
    if (this.skillUsed) {
      return this._illegal("skill", "used");
    }
    let Fa = k.cost[Fx];
    if (this.nerve < Fa) {
      return this._illegal("skill", "nerve");
    }
    let Fu = null;
    let FX = this._hand(this.active);
    if (Fx === "glow") {
      Fu = BC(this.shoe.peek()) || "MID";
    } else if (Fx === "snag") {
      if (!this.shoe.remaining) {
        return this._illegal("skill", "empty");
      }
      this.shoe.burn();
      this.discard++;
      Fu = {
        burned: true,
      };
    } else if (Fx === "knuckle") {
      if (this.law.dealerOpen || !this.dealer.hidden.has(this.dealer.cards[1].id)) {
        return this._illegal("skill", "open");
      }
      let FE = BC(this.dealer.cards[1]);
      Fu = FE === "TICKET" ? "HIGH" : FE;
    } else if (Fx === "find") {
      let Fy = Fm && Fm.cardId;
      let Fq = null;
      if (this.dealer.hidden.has(Fy)) {
        Fq = {
          who: "dealer",
          card: this.dealer.cards.find((FL) => FL.id === Fy),
        };
      } else {
        for (let FL of this._handRefs()) {
          let Fz = this._hand(FL);
          if (Fz.faceDown.has(Fy)) {
            Fq = {
              who: FL,
              card: Fz.cards.find((Fh) => Fh.id === Fy),
              h: Fz,
            };
            break;
          }
        }
      }
      if (!Fq) {
        return this._illegal("skill", "target");
      }
      let Fo = this._begin();
      this._spend(Fx, Fa);
      if (Fq.who === "dealer") {
        this.dealer.hidden.delete(Fy);
      } else {
        Fq.h.faceDown.delete(Fy);
      }
      this._see(Fq.card);
      Fu = {
        card: Fq.card,
      };
      this.skillUsed = true;
      this.skills.push({
        kind: Fx,
        result: "card",
      });
      this._ev("skill", {
        kind: Fx,
        cost: Fa,
        result: Fu,
      });
      this._ev("reveal", {
        who: Fq.who,
        cards: [Fq.card],
      });
      if (Fq.who !== "dealer") {
        this._afterCard(Fq.who);
      }
      this._nextActive();
      return Fo;
    } else if (Fx === "redraw") {
      let Fh = Fm && Fm.a;
      let Fv = Fm && Fm.b;
      let Fp = Fh && this._hand(Fh.ref);
      let FW = Fv && this._hand(Fv.ref);
      let FT = (FZ, Fg) =>
        Fg && FZ.seat === this.youSeat && !Fg.done && !Fg.doubled && !Fg.splitAces;
      if (!FT(Fh.ref, Fp) || !FT(Fv.ref, FW) || Bh(Fh.ref, Fv.ref)) {
        return this._illegal("skill", "target");
      }
      let Fr = Fp.cards.findIndex((FZ) => FZ.id === Fh.cardId);
      let Ff = FW.cards.findIndex((FZ) => FZ.id === Fv.cardId);
      if (Fr < 0 || Ff < 0 || Fp.faceDown.has(Fh.cardId) || FW.faceDown.has(Fv.cardId)) {
        return this._illegal("skill", "target");
      }
      let Fk = this._begin();
      this._spend(Fx, Fa);
      let Fd = Fp.cards[Fr];
      Fp.cards[Fr] = FW.cards[Ff];
      FW.cards[Ff] = Fd;
      Fp.noNatural = true;
      FW.noNatural = true;
      this.redraw = {
        a: Fh.ref,
        b: Fv.ref,
      };
      this.skillUsed = true;
      this.skills.push({
        kind: Fx,
        result: "swap",
      });
      this._ev("skill", {
        kind: Fx,
        cost: Fa,
        result: {
          a: Fh,
          b: Fv,
        },
      });
      this._afterCard(Fh.ref);
      this._afterCard(Fv.ref);
      this._nextActive();
      return Fk;
    } else {
      return this._illegal("skill", "none");
    }
    let FS = this._begin();
    this._spend(Fx, Fa);
    this.skillUsed = true;
    this.skills.push({
      kind: Fx,
      result: Fu,
    });
    if (Fx === "glow") {
      this.glow = Fu;
      FX.glow = Fu;
      FX.glowAt = FX.actions.length;
    }
    if (Fx === "knuckle") {
      this.knuckle = Fu;
    }
    this._ev("skill", {
      kind: Fx,
      cost: Fa,
      result: Fu,
    });
    return FS;
  }
  _spend(Fm, Fx) {
    this.nerve -= Fx;
    this._ev("nerve", {
      delta: -Fx,
      reason: "spend",
      value: this.nerve,
    });
  }
  _gain(Fm) {
    let Fx = k.gain[Fm];
    let Fa = this.nerve;
    this.nerve = Math.min(k.max, this.nerve + Fx);
    if (this.nerve !== Fa) {
      this._ev("nerve", {
        delta: this.nerve - Fa,
        reason: Fm,
        value: this.nerve,
      });
    }
  }
  advance() {
    let Fm = this._begin();
    let Fx = 0;
    while (!Fm.length && Fx++ < 64) {
      if (this.phase === "turn") {
        if (this.active && this.seats[this.active.seat].kind === "you") {
          break;
        }
        this._step();
      } else if (this.phase === "dealer") {
        this._step();
      } else if (this.phase === "settle" && (!this.settleQueue || !!this.settleQueue.length)) {
        this._step();
      } else {
        break;
      }
      this._out = Fm;
    }
    return Fm;
  }
  _step() {
    let Fm = this._out;
    if (this.phase === "turn") {
      if (!this.active) {
        this._nextActive();
        return Fm;
      }
      let Fx = this.seats[this.active.seat];
      if (Fx.kind === "you") {
        return Fm;
      }
      let Fa = this.active;
      let Fu = this._view(Fa);
      let FX = Fx.cfg.policy
        ? Fx.cfg.policy(Fu, this.streams.ai[Fx.id])
        : BL(Fu, this.law, {
            lintRule: this.lintRule,
          });
      let FS = this._legal(Fa);
      if (!FS.includes(FX)) {
        let FE = FX;
        if (FX === "double") {
          FX = "hit";
        } else {
          let Fy = BL(
            {
              ...Fu,
              canDouble: false,
              canSplit: false,
              canSurrender: false,
            },
            this.law,
            {
              lintRule: this.lintRule,
            },
          );
          FX = FS.includes(Fy) ? Fy : "stand";
        }
        if (!FS.includes(FX)) {
          FX = "stand";
        }
        this._ev("corrected", {
          ref: Fa,
          from: FE,
          to: FX,
        });
      }
      this._apply(Fa, FX);
      return Fm;
    }
    if (this.phase === "dealer") {
      this._dealerStep();
      return Fm;
    } else {
      if (this.phase === "settle") {
        this._settleStep();
      }
      return Fm;
    }
  }
  _live() {
    return this._handRefs().some((Fm) => {
      let Fx = this._hand(Fm);
      return (
        !Fx.surrendered && (!Fx.bust || !!Fx.faceDown.size) && (!Fx.natural || !!this.law.lint)
      );
    });
  }
  _revealDealer() {
    let Fm = this.dealer.cards.filter((Fx) => this.dealer.hidden.has(Fx.id));
    for (let Fx of Fm) {
      this._see(Fx);
    }
    this.dealer.hidden.clear();
    this._ev("reveal", {
      who: "dealer",
      cards: this.dealer.cards.slice(),
    });
  }
  _dealerValue(Fm) {
    return BM(this.dealer.cards, {
      hiddenIds: Fm ? this.dealer.hidden : null,
    });
  }
  _dealerDecisionValue() {
    if (!this.law.lint || this.lintRule === "true") {
      return this._dealerValue(false);
    }
    let Fm = this.lintRule === "visible" ? this.dealer.hidden : this.dealer.lint;
    let Fx = BM(this.dealer.cards, {
      hiddenIds: Fm,
    }).visible;
    if (this.lintRule === "ten") {
      let Fa = this.dealer.lint.size;
      return {
        total: Fx.total + Fa * 10,
        soft: Fx.soft && Fx.total + Fa * 10 <= 21,
        count: Fx.count,
      };
    }
    return Fx;
  }
  _dealerStep() {
    if (!this.revealed) {
      this.revealed = true;
      if (
        this.you &&
        !this.bigpotFired &&
        this.round - this.lastBigpot >= 4 &&
        this.dealer.hidden.size
      ) {
        let Fm = Math.max(100, (this.wallet + this.roundBet) * 0.2);
        if (this.roundBet >= Fm) {
          this.bigpotFired = true;
          this.lastBigpot = this.round;
          this._ev("bigpot", {
            bet: this.roundBet,
          });
        }
      }
      if (!this.law.lint) {
        if (this.dealer.hidden.size) {
          this._revealDealer();
        }
        this._stareResolve();
      }
      return;
    }
    if (!this.dealerDone) {
      let Fx = this._live();
      let Fa = this._dealerDecisionValue();
      if (Fx && BJ(Fa, this.law) && !(Fa.total > 21)) {
        this._deal("dealer");
        return;
      }
      this.dealerDone = true;
      if (this.law.lint) {
        this._showdown();
      }
      let Fu = this._dealerValue(false);
      if (Fu.bust) {
        this._ev("bust", {
          ref: "dealer",
          total: Fu.total,
          revealed: !!this.law.lint,
        });
      }
      this._ev("dealerTotal", {
        total: Fu.total,
        soft: Fu.soft,
        bust: Fu.bust,
      });
      this.phase = "settle";
      return;
    }
    this.phase = "settle";
  }
  _showdown() {
    if (this.dealer.hidden.size) {
      this._revealDealer();
    }
    this._stareResolve();
    for (let Fm of this._handRefs()) {
      let Fx = this._hand(Fm);
      if (!Fx.faceDown.size) {
        continue;
      }
      let Fa = Fx.cards.filter((FX) => Fx.faceDown.has(FX.id));
      for (let FX of Fa) {
        this._see(FX);
      }
      Fx.faceDown.clear();
      this._ev("reveal", {
        who: Fm,
        cards: Fx.cards.slice(),
      });
      let Fu = BM(Fx.cards);
      if (Fu.bust && !Fx.bust) {
        Fx.bust = true;
        Fx.bustRevealed = true;
        this._ev("bust", {
          ref: Fm,
          total: Fu.total,
          revealed: true,
        });
      }
    }
  }
  _stareResolve() {
    if (this.stare && !this.stare.resolved) {
      this.stare.resolved = true;
      if (this.stare.right) {
        this._gain("stare");
      }
    }
  }
  _settleStep() {
    this.settleQueue ||= this._handRefs();
    let Fm = this.settleQueue.shift();
    if (!Fm) {
      return;
    }
    let Fx = this.seats[Fm.seat];
    let Fa = this._hand(Fm);
    let Fu = this._dealerValue(false);
    let FX = Bc(this.dealer.cards);
    let FS = BM(Fa.cards, {
      split: Fa.fromSplit || Fa.noNatural,
    });
    let FE = FS.natural;
    let Fy;
    let Fq = 0;
    if (Fa.surrendered) {
      Fy = "surrender";
      Fq = Fa.bet / 2;
    } else if (FS.bust) {
      Fy = "lose";
    } else if (FX) {
      Fy = FE && !this.law.tiesLose ? "push" : "lose";
    } else if (FE) {
      Fy = "natural";
    } else if (Fu.bust || FS.total > Fu.total) {
      Fy = "win";
    } else if (FS.total < Fu.total) {
      Fy = "lose";
    } else {
      Fy = this.law.tiesLose ? "lose" : "push";
    }
    let Fo = Fy === "win" && this.law.lintWin && Fa.hadLint;
    if (Fy === "natural") {
      Fq = Fa.bet * (1 + this.law.natural);
    } else if (Fo) {
      Fq = Fa.bet + Math.floor(Fa.bet * this.law.lintWin * 2) / 2;
    } else if (Fy === "win") {
      Fq = Fa.bet * 2;
    } else if (Fy === "push") {
      Fq = Fa.bet;
    }
    Fq = Bv(Fq);
    this._pay(Fx, Fq);
    Fa.result = Fy;
    Fa.paid = Fq;
    Fa.total = FS.total;
    this.settled.push(Fm);
    this._ev("settle", {
      ref: Fm,
      outcome: Fy,
      bet: Fa.bet,
      paid: Fq,
      net: Fq - Fa.bet,
      keepsake: !!Fa.keepsake,
      lint: !!Fo,
    });
    if (Fx.kind === "you") {
      let FL = Fy === "win" || Fy === "natural";
      if ((FL || Fy === "push") && (FS.total === 20 || FS.total === 21)) {
        this._gain("twenty");
      }
      if (FL && Fa.cards.length >= 5) {
        this._gain("five");
      }
      if (FL && Fa.stoodOn != null && Fa.stoodOn >= 12 && Fa.stoodOn <= 16 && !Fa.twentyOne) {
        this._gain("brave");
      }
    }
  }
  finishRound() {
    if (this.phase === "bet" || this.phase === "done") {
      return this._illegal("finishRound", "phase");
    }
    let Fm = [];
    let Fx = 0;
    while (true) {
      let Fu = this.advance();
      if (!Fu.length || Fx++ > 2000) {
        break;
      }
      Fm.push(...Fu);
    }
    if (this.phase !== "settle") {
      return Fm.concat(this._illegal("finishRound", this.phase));
    }
    this._out = Fm;
    this.phase = "done";
    let Fa = this._summary();
    this._ev("roundEnd", {
      summary: Fa,
    });
    this.round++;
    for (let FX of this._handRefs()) {
      this.discard += this._hand(FX).cards.length;
    }
    this.discard += this.dealer.cards.length;
    if (this.shoe.pastCut) {
      this.pendingShuffle = true;
    }
    this.bets = [0, 0, 0];
    this.stacks = [[], [], []];
    this.keepsakeRing = -1;
    this.phase = "bet";
    this.active = null;
    return Fm;
  }
  _summary() {
    let Fm = this._dealerValue(false);
    let Fx = this.you;
    let Fa = [];
    let Fu = 0;
    let FX = null;
    if (Fx) {
      Fx.rings.forEach((Fy, Fq) => {
        if (Fy) {
          Fy.hands.forEach((Fo, FL) => {
            let Fz = (Fo.paid || 0) - Fo.bet;
            Fu += Fz;
            let Fh = Fo.result === "win" || Fo.result === "natural";
            if (Fo.keepsake && this.law.stakes !== false) {
              FX = Fh ? "win" : Fo.result === "push" ? "push" : "lose";
            }
            Fa.push({
              ring: Fq,
              hand: FL,
              cards: Fo.cards.slice(),
              total: Fo.total,
              outcome: Fo.result,
              net: Fz,
              bet: Fo.bet,
              doubled: Fo.doubled,
              split: Fo.fromSplit,
              ringHands: Fy.hands.length,
              stoodOn: Fo.stoodOn,
              stoodSoft: !!Fo.stoodSoft,
              doubledOn: Fo.doubledOn,
              doubleCard: Fo.doubleCard,
              lintBust: Fo.bustRevealed,
              natural:
                Fo.result === "natural" ||
                (Fo.result === "push" &&
                  BM(Fo.cards, {
                    split: Fo.fromSplit,
                  }).natural),
              ticket: Fo.cards.some((Fv) => Fv.rank === "TICKET"),
              keepsake: Fo.keepsake,
              glow: Fo.glow,
              glowHit: Fo.glowHit,
              surrendered: Fo.surrendered,
              skill: this.skills.length ? this.skills[0].kind : null,
            });
          });
        }
      });
      if (Fx.insurance) {
        Fu += this.insurance.won ? Fx.insurance * 2 : -Fx.insurance;
      }
    }
    let FS = {};
    for (let Fy of this.seats) {
      if (Fy.kind !== "ai") {
        continue;
      }
      if (!Fy.rings.length) {
        FS[Fy.id] = {
          outcome: "sitout",
          cards: [],
          total: 0,
          bank: Fy.bank,
        };
        continue;
      }
      let Fq = Fy.rings[0].hands[0];
      FS[Fy.id] = {
        outcome: Fq.result,
        cards: Fq.cards.slice(),
        total: Fq.total,
        bank: Fy.bank,
        hands: Fy.rings[0].hands.map((Fo) => ({
          outcome: Fo.result,
          total: Fo.total,
          cards: Fo.cards.slice(),
        })),
      };
    }
    let FE = this.seats.find((Fo) => Fo.id === "penny");
    return {
      room: this.room,
      law: this.law.id,
      dealerId: this.dealerId,
      round: this.round,
      you: {
        hands: Fa,
        net: Fu,
        rings: Fx ? Fx.rings.filter((Fo) => Fo && Fo.bet > 0).length : 0,
      },
      dealer: {
        total: Fm.total,
        bust: Fm.bust,
        natural: Bc(this.dealer.cards),
        up: this.dealer.cards[0],
        cards: this.dealer.cards.slice(),
        twoCardTotal: BM(this.dealer.cards.slice(0, 2)).total,
      },
      ai: FS,
      ticketSeenBy: this.ticketSeenBy,
      keepsake: FX,
      stare: this.stare,
      pennyFace: FE ? FE.face : null,
      insurance: {
        amount: this.insurance.amount,
        won: this.insurance.won,
      },
      skills: this.skills.slice(),
      redraw: this.redraw,
      knuckle: this.knuckle,
      tells: this.tellLog.slice(),
      fives: this.fives.slice(),
      wallet: this.wallet,
      nerve: this.nerve,
      roundBet: this.roundBet,
    };
  }
  _view(Fm) {
    let Fx = this._hand(Fm);
    let Fa = this.seats[Fm.seat];
    let Fu = Fx.cards.filter((FE) => !Fx.faceDown.has(FE.id));
    let FX = this._legal(Fm);
    let FS =
      this.dealer.cards[0] && !this.dealer.hidden.has(this.dealer.cards[0].id)
        ? this.dealer.cards[0]
        : null;
    return {
      law: this.law,
      room: this.room,
      cards: Fu,
      value: BM(Fx.cards, {
        split: Fx.fromSplit,
        hiddenIds: Fx.faceDown,
      }).visible,
      hidden: Fx.faceDown.size,
      canDouble: FX.includes("double"),
      canSplit: FX.includes("split"),
      canSurrender: FX.includes("surrender"),
      dealerUp: FS,
      dealerUpBand: FS ? BC(FS) : null,
      dealerCards: this.dealer.cards.filter((FE) => !this.dealer.hidden.has(FE.id)),
      seen: this.seen,
      runningCount: this.runningCount,
      decksLeft: Math.max(0.5, this.shoe.remaining / 51),
      cycle: null,
      face: Fa.face,
      round: this.round,
      bank: Fa.kind === "you" ? this.wallet : Fa.bank,
      untilLint: this.law.lint ? (3 - ((this.dealCount + 1) % 3)) % 3 : null,
      full: this.full,
      id: Fa.id,
      ref: Fm,
      handCards: Fx.cards.length,
    };
  }
  view(Fm) {
    if (Fm) {
      return this._view(Fm);
    } else {
      return {
        phase: this.phase,
        dealer: {
          id: this.dealerId,
          cards: this.dealer.cards.slice(),
          faceDown: [...this.dealer.hidden],
          value: this._dealerValue(true).visible,
        },
        seats: this.seats.map((Fx) => ({
          id: Fx.id,
          kind: Fx.kind,
          bank: Fx.kind === "you" ? this.wallet : Fx.bank,
          face: Fx.face,
          sitout: Fx.sitout,
          rings: Fx.rings.map((Fa) =>
            Fa
              ? {
                  bet: Fa.bet,
                  hands: Fa.hands.map((Fu) => ({
                    cards: Fu.cards.slice(),
                    faceDown: [...Fu.faceDown],
                    value: BM(Fu.cards, {
                      split: Fu.fromSplit,
                      hiddenIds: Fu.faceDown,
                    }).visible,
                    bet: Fu.bet,
                    doubled: Fu.doubled,
                    done: Fu.done,
                    result: Fu.result,
                    keepsake: Fu.keepsake,
                  })),
                }
              : null,
          ),
        })),
        shoe: {
          remaining: this.shoe.remaining,
          dealtSinceShuffle: this.shoe.dealtSinceShuffle,
          pastCut: this.shoe.pastCut,
          size: this.shoe.size,
        },
        discard: this.discard,
        wallet: this.wallet,
        nerve: this.nerve,
        bets: this.bets.slice(),
        stacks: this.stacks.map((Fx) => Fx.slice()),
        active: this.active,
        law: this.law.id,
        room: this.room,
        round: this.round,
        keepsakeRing: this.keepsakeRing,
        stareArmed: this.stareArmed,
        skillUsed: this.skillUsed,
      };
    }
  }
};
c(Bp, "Table");
var BW = Bp;
var BT = [
  "tallyFaded",
  "tallyReprinted",
  "leftyFound",
  "nibsGone",
  "lintOpen",
  "sparemanSpoke",
  "finale",
  "nibsDollar",
  "nibsJar",
];
var Br = c((Fm, Fx, Fa, Fu) => {
  let FX = typeof Fm == "number" && Number.isFinite(Fm) ? Fm : Fx;
  return Math.max(Fa, Math.min(Fu, FX));
}, "num");
var Bf = 1000000000;
function Bk(Fm = 0) {
  return {
    v: 1,
    salt: BG(Fm),
    visitNo: 0,
    wallet: h,
    char: "wick",
    howto: false,
    finder: false,
    tickets: {},
    story: {
      beat: 0,
      visits: 0,
      flags: Object.fromEntries(BT.map((Fx) => [Fx, false])),
    },
    journal: {},
    staked: {},
    stareRightLifetime: 0,
    opened: {
      coin: "always",
    },
    secrets: {},
    postcards: [],
    cosmetics: {
      thankYouChip: false,
      backs: [],
      useChip: false,
      useBack: null,
    },
    stats: {
      rounds: 0,
      naturals: 0,
      bailouts: 0,
      bestWin: 0,
    },
    settings: {
      chatter: "full",
      brisk: false,
      totals: true,
      confirmSurrender: true,
    },
  };
}
c(Bk, "newProfile");
function Bd(Fm) {
  let Fx = Fm;
  try {
    if (typeof Fx == "string") {
      Fx = JSON.parse(Fx);
    }
  } catch {
    Fx = null;
  }
  if (!Fx || typeof Fx != "object" || Array.isArray(Fx)) {
    return Bk(0);
  }
  let Fa = Bk(0);
  try {
    if (typeof Fx.salt == "number" && Number.isFinite(Fx.salt)) {
      Fa.salt = Fx.salt >>> 0;
    }
    Fa.visitNo = Math.floor(Br(Fx.visitNo, 0, 0, 10000000));
    let Fu = Fx.wallet;
    if (typeof Fu != "number" && (!Fx.v || Fx.v < 1)) {
      Fu = [Fx.dollars, Fx.bank, Fx.dd, Fx.money].find((Fq) => typeof Fq == "number");
    }
    Fa.wallet = Bv(Br(Fu, h, 0, Bf));
    Fa.finder = Fx.finder === true;
    Fa.char = B0.includes(Fx.char) && (Fx.char !== "finder" || Fa.finder) ? Fx.char : "wick";
    Fa.howto = Fx.howto === true;
    if (Fx.tickets && typeof Fx.tickets == "object") {
      for (let [Fq, Fo] of Object.entries(Fx.tickets)) {
        if (Bj[Fq]) {
          Fa.tickets[Fq] = {
            at: Math.floor(Br(Fo && Fo.at, 0, 0, 10000000)),
            char: B0.includes(Fo && Fo.char) ? Fo.char : "wick",
          };
        }
      }
    }
    let FX = Fx.story && typeof Fx.story == "object" ? Fx.story : {};
    Fa.story.beat = Math.floor(Br(FX.beat, 0, 0, 12));
    Fa.story.visits = Math.floor(Br(FX.visits, 0, 0, 10000000));
    if (FX.flags && typeof FX.flags == "object") {
      for (let FL of BT) {
        Fa.story.flags[FL] = FX.flags[FL] === true;
      }
    }
    if (Fa.story.flags.finale) {
      Fa.finder = true;
    }
    if (Fx.journal && typeof Fx.journal == "object") {
      for (let [Fz, Fh] of Object.entries(Fx.journal)) {
        if (!Fh || typeof Fh != "object" || typeof Fz != "string" || Fz.length > 40) {
          continue;
        }
        let Fv = Math.floor(Br(Fh.seen, 0, 0, 10000000));
        Fa.journal[Fz] = {
          seen: Fv,
          right: Math.floor(Br(Fh.right, 0, 0, Fv)),
          noted: Fh.noted === true,
        };
      }
    }
    if (Fx.staked && typeof Fx.staked == "object") {
      for (let Fp of B1) {
        if (typeof Fx.staked[Fp] == "number") {
          Fa.staked[Fp] = Bv(Br(Fx.staked[Fp], 0, 0, Bf));
        }
      }
    }
    Fa.stareRightLifetime = Math.floor(Br(Fx.stareRightLifetime, 0, 0, 10000000));
    if (Fx.opened && typeof Fx.opened == "object") {
      for (let FW of B4) {
        if (typeof Fx.opened[FW.id] == "string") {
          Fa.opened[FW.id] = Fx.opened[FW.id];
        }
      }
    }
    if (Fx.secrets && typeof Fx.secrets == "object") {
      for (let FT = 1; FT <= 7; FT++) {
        if (Fx.secrets[FT] === true) {
          Fa.secrets[FT] = true;
        }
      }
    }
    if (Array.isArray(Fx.postcards)) {
      Fa.postcards = Fx.postcards.filter((Fr) => typeof Fr == "string").slice(0, 10);
    }
    let FS = Fx.cosmetics && typeof Fx.cosmetics == "object" ? Fx.cosmetics : {};
    Fa.cosmetics.thankYouChip = FS.thankYouChip === true;
    Fa.cosmetics.backs = Array.isArray(FS.backs)
      ? [...new Set(FS.backs.filter((Fr) => B0.includes(Fr)))]
      : [];
    Fa.cosmetics.useChip = FS.useChip === true && Fa.cosmetics.thankYouChip;
    Fa.cosmetics.useBack =
      FS.useBack === "52" && Fa.story.flags.finale
        ? "52"
        : Fa.cosmetics.backs.includes(FS.useBack)
          ? FS.useBack
          : null;
    let FE = Fx.stats && typeof Fx.stats == "object" ? Fx.stats : {};
    Fa.stats = {
      rounds: Math.floor(Br(FE.rounds, 0, 0, 1000000000)),
      naturals: Math.floor(Br(FE.naturals, 0, 0, 1000000000)),
      bailouts: Math.floor(Br(FE.bailouts, 0, 0, 1000000000)),
      bestWin: Bv(Br(FE.bestWin, 0, 0, Bf)),
    };
    let Fy = Fx.settings && typeof Fx.settings == "object" ? Fx.settings : {};
    Fa.settings = {
      chatter: ["full", "less", "off"].includes(Fy.chatter) ? Fy.chatter : "full",
      brisk: Fy.brisk === true,
      totals: Fy.totals !== false,
      confirmSurrender: Fy.confirmSurrender !== false,
    };
  } catch {
    return Bk(0);
  }
  return Fa;
}
c(Bd, "loadProfile");
function BZ(Fm) {
  return JSON.parse(JSON.stringify(Fm));
}
c(BZ, "saveProfile");
function Bg(Fm) {
  Fm.visitNo = (Fm.visitNo || 0) + 1;
  let Fx = BG(Fm.salt, Fm.visitNo);
  let Fa = Bi(Fx).fork("spareman");
  let Fu = {};
  for (let [FX, FS] of Object.entries(B9)) {
    Fu[FX] = {
      bank: FS,
    };
  }
  return {
    seed: Fx,
    rounds: 0,
    counted: false,
    beatFired: false,
    nerve: 0,
    keepsakeUsed: false,
    tag: false,
    tagRounds: 0,
    lever: 0,
    stareRight: 0,
    sparemanPresent: Fm.story.beat < 10 && Fa.chance(0.25),
    regulars: Fu,
    keyesCycle: 0,
    roomRounds: {},
    rummageCooldown: 0,
    requested: false,
    pennyTails: false,
    staked: {},
    drops: [],
  };
}
c(Bg, "newVisit");
function e0(Fm, Fx, Fa = 0) {
  return BG(Fm.seed, "room:" + Fx, Fa);
}
c(e0, "tableSeed");
function e1(Fm) {
  return Object.keys(Fm.tickets).length;
}
c(e1, "reputation");
function e2(Fm, Fx) {
  let Fa = BP(Fx);
  if (!Fa) {
    return false;
  }
  let Fu = Fa.open;
  if (
    Fu.always ||
    (Fu.ticket && Fm.tickets[Fu.ticket]) ||
    (Fu.count && e1(Fm) >= Fu.count) ||
    (Fu.flag && Fm.story.flags[Fu.flag])
  ) {
    return true;
  }
  if (Fu.beat) {
    if (B7[Fu.beat - 1].room === Fx) {
      if (Fm.story.beat >= Fu.beat - 1 && Fm.story.visits >= Fu.beat - 1) {
        return true;
      }
    } else if (Fm.story.beat >= Fu.beat) {
      return true;
    }
  }
  return false;
}
c(e2, "roomOpen");
function e3(Fm, Fx = null) {
  let Fa = [];
  Fm.opened ||= {
    coin: "always",
  };
  for (let Fu of B4) {
    if (Fm.opened[Fu.id] || !e2(Fm, Fu.id)) {
      continue;
    }
    let FX = Fu.open;
    let FS = Fx;
    FS ||=
      FX.ticket && Fm.tickets[FX.ticket]
        ? "ticket"
        : FX.count && e1(Fm) >= FX.count
          ? "count"
          : FX.flag && Fm.story.flags[FX.flag]
            ? "secret"
            : "story";
    Fm.opened[Fu.id] = FS;
    Fa.push({
      t: "roomOpened",
      room: Fu.id,
      by: FS,
    });
  }
  return Fa;
}
c(e3, "checkRooms");
function e4(Fm, Fx, Fa) {
  if (!Bj[Fx] || Fm.tickets[Fx]) {
    return false;
  } else {
    Fm.tickets[Fx] = {
      at: Fm.visitNo || 0,
      char: B0.includes(Fa) ? Fa : Fm.char || "wick",
    };
    return true;
  }
}
c(e4, "awardTicket");
function e5(Fm, Fx, Fa) {
  let Fu = Bj[Fx];
  if (!Fu || (Fu.room && Fa && Fu.room !== Fa)) {
    return [];
  }
  if (!e4(Fm, Fx, Fm.char)) {
    return [];
  }
  let FX = [
    {
      t: "ticket",
      id: Fx,
      text: Fu.text,
      char: Fm.char,
    },
  ];
  if (e1(Fm) === 20) {
    FX.push({
      t: "achievement",
      id: B8.claims,
    });
  }
  return FX;
}
c(e5, "ticketEvents");
function e6(Fm, Fx, Fa, Fu) {
  let FX = (Fm.journal[Fx] ||= {
    seen: 0,
    right: 0,
    noted: false,
  });
  if (Fa) {
    FX.seen++;
    if (Fu) {
      FX.right++;
    }
    if (!FX.noted && FX.seen >= 6 && FX.right / FX.seen >= 0.6) {
      FX.noted = true;
      return [
        {
          t: "journalNote",
          tellId: Fx,
          right: FX.right,
          seen: FX.seen,
        },
      ];
    } else {
      return [];
    }
  } else {
    return [];
  }
}
c(e6, "journalObserve");
function e7(Fm, Fx, Fa) {
  let Fu = [];
  let FX = Fa.room;
  if (Fa.law === "finale") {
    return Fu;
  }
  let FS = (Fh) => Fu.push(...e5(Fm, Fh, FX));
  Fx.rounds++;
  Fx.roomRounds[FX] = (Fx.roomRounds[FX] || 0) + 1;
  if (Fx.rummageCooldown > 0) {
    Fx.rummageCooldown--;
  }
  Fm.stats.rounds++;
  if (typeof Fa.wallet == "number") {
    Fm.wallet = Bv(Math.max(0, Math.min(Bf, Fa.wallet)));
  }
  if (typeof Fa.nerve == "number") {
    Fx.nerve = Fa.nerve;
  }
  let FE = Fa.you.hands;
  let Fy = (Fh) => Fh.outcome === "win" || Fh.outcome === "natural";
  let Fq = Fa.dealer;
  let Fo = BY(Fq.up);
  if (Fa.you.net > Fm.stats.bestWin) {
    Fm.stats.bestWin = Fa.you.net;
  }
  for (let Fh of FE) {
    if (Fh.natural) {
      Fm.stats.naturals++;
      FS("NATURAL");
    }
    if (Fy(Fh) && Fh.stoodOn === 16 && !Fh.stoodSoft && Fo && Fh.cards.length >= 2) {
      FS("SIXTEEN");
    }
    if (Fy(Fh) && Fh.cards.length >= 5) {
      let Fv = Fu.length;
      FS("FIVE_CARD");
      if (Fu.length > Fv) {
        Fu.push({
          t: "achievement",
          id: B8.five,
        });
      }
    }
    if (Fh.doubledOn && Fh.doubledOn.total === 11 && !Fh.doubledOn.soft && BK(Fh.doubleCard)) {
      FS("DOUBLE_FACE");
    }
    if (Fy(Fh) && Fh.ticket) {
      FS("BUS_TICKET");
    }
    if (FX === "glasses" && Fq.twoCardTotal === 20 && Fh.total === 21) {
      FS("SEEN_21");
    }
    if (Fh.lintBust) {
      FS("LINT_BUST");
    }
    if (Fy(Fh) && Fh.doubled && Fo && Fa.dealerId === "dogear") {
      FS("WELL_PLAYED");
    }
    if (Fh.surrendered) {
      FS("SURRENDER");
    }
    if (Fh.glow === "LOW" && Fh.glowHit && Fh.total === 21) {
      FS("GLOW_21");
    }
    if (Fa.knuckle === "LOW" && Fh.stoodOn >= 12 && Fh.stoodOn <= 16 && Fy(Fh)) {
      FS("KNUCKLE_12");
    }
  }
  let FL = {};
  for (let Fp of FE) {
    (FL[Fp.ring] = FL[Fp.ring] || []).push(Fp);
  }
  for (let FW of Object.values(FL)) {
    if (FW.length === 2 && FW.every((FT) => FT.split) && FW.every(Fy)) {
      FS("SPLIT_WIN");
    }
  }
  if (Fa.you.rings === 3 && Object.keys(FL).length === 3 && FE.every(Fy)) {
    FS("THREE_RINGS");
  }
  if (Fa.insurance && Fa.insurance.won) {
    FS("INSURED");
  }
  if (Fa.skills.some((FT) => FT.kind === "snag") && Fq.bust) {
    FS("SNAG_BUST");
  }
  if (Fa.redraw) {
    let FT = FE.find((Ff) => Ff.ring === Fa.redraw.a.ring && Ff.hand === Fa.redraw.a.hand);
    let Fr = FE.find((Ff) => Ff.ring === Fa.redraw.b.ring && Ff.hand === Fa.redraw.b.hand);
    if (FT && Fr && Fy(FT) && Fy(Fr)) {
      FS("REDRAW_TWO");
    }
  }
  let Fz = Fa.ai || {};
  if (Fz.nibs && (Fz.nibs.outcome === "win" || Fz.nibs.outcome === "natural")) {
    FS("NIBS_ONE");
  }
  if ((Fa.fives || []).includes("bunnie")) {
    FS("BUNNIE_FIVE");
  }
  if (Fz.keyes && (Fz.keyes.hands || []).some((Ff) => Ff.total === 21)) {
    FS("KEYES_21");
  }
  if (Fa.keepsake) {
    Fx.keepsakeUsed = true;
    if (Fa.keepsake === "win") {
      FS("CLAIMED");
    }
    if (Fa.keepsake === "lose") {
      Fx.tag = true;
      Fx.tagRounds = 0;
    }
  } else if (Fx.tag) {
    Fx.tagRounds++;
    if (Fx.tagRounds === 3) {
      FS("UNCLAIMED");
    }
  }
  if (Fa.stare && Fa.stare.right) {
    Fx.stareRight++;
    if (Fx.stareRight >= 3) {
      FS("CORNER");
    }
    if (Fa.stare.dealer === "dogear") {
      Fm.stareRightLifetime++;
      if (Fm.stareRightLifetime === 10) {
        Fm.secrets[3] = true;
        Fu.push(
          {
            t: "secret",
            id: 3,
            kind: "stare",
          },
          {
            t: "achievement",
            id: B8.corner,
          },
        );
      }
    }
  }
  for (let Ff of Fa.tells || []) {
    Fu.push(...e6(Fm, Ff.tellId, Ff.shown, Ff.truth));
  }
  if (!Fx.counted && Fx.rounds >= BF) {
    Fx.counted = true;
    Fm.story.visits++;
    Fu.push({
      t: "visitCounted",
      visits: Fm.story.visits,
    });
    if (Fm.story.visits === 1) {
      Fu.push({
        t: "achievement",
        id: B8.visit,
      });
    }
  }
  Fu.push(...e3(Fm));
  return Fu;
}
c(e7, "onRoundEnd");
function e8(Fm, Fx, Fa, Fu) {
  let FX = Fm.story.beat + 1;
  if (FX > B7.length || Fx.beatFired || Fm.story.visits < FX - 1) {
    return null;
  }
  let FS = B7[FX - 1];
  if (FS.room !== Fa) {
    if (Fu === "sit" && !Fx.requested) {
      Fx.requested = true;
      return {
        request: FS.room,
        beat: FS,
      };
    } else {
      return null;
    }
  } else if (FS.at !== Fu || (Fu === "after2" && (Fx.roomRounds[Fa] || 0) < 2)) {
    return null;
  } else {
    return FS;
  }
}
c(e8, "beatDue");
function e9(Fm, Fx, Fa, Fu = {}) {
  let FX = Fm.story.beat + 1;
  let FS = B7[FX - 1];
  if (!FS || FS.id !== Fa || Fx.beatFired) {
    return [
      {
        t: "illegal",
        action: "beat",
        reason: "notdue",
      },
    ];
  }
  let FE = Fm.story.flags;
  let Fy = [];
  Fx.beatFired = true;
  Fx.rummageCooldown = Math.max(Fx.rummageCooldown, 1);
  if (Fa === "reprint" && Fu.accept === false) {
    return [
      {
        t: "beatDeferred",
        id: Fa,
        n: FS.n,
      },
    ];
  }
  Fm.story.beat = FS.n;
  Fy.push({
    t: "beat",
    id: Fa,
    n: FS.n,
  });
  switch (Fa) {
    case "tally_fades":
      FE.tallyFaded = true;
      break;
    case "nibs_jar":
      FE.nibsJar = true;
      break;
    case "penny_taken":
      Fx.pennyTails = true;
      break;
    case "lefty_found":
      FE.leftyFound = true;
      if (!Fm.postcards.includes("lefty")) {
        Fm.postcards.push("lefty");
      }
      break;
    case "reprint":
      FE.tallyReprinted = true;
      FE.tallyFaded = false;
      break;
    case "pillow":
      FE.nibsGone = true;
      if (FE.nibsDollar) {
        Fm.cosmetics.thankYouChip = true;
        Fm.secrets[6] = true;
        Fy.push({
          t: "secret",
          id: 6,
          kind: "nibsDollar",
        });
      }
      break;
    case "eleventh_key":
      FE.lintOpen = true;
      break;
    case "spareman_speaks":
      FE.sparemanSpoke = true;
      break;
    case "last_call":
      FE.finale = true;
      Fm.finder = true;
      Fy.push(...e5(Fm, "FIFTY_TWO", null));
      Fy.push({
        t: "achievement",
        id: B8.finale,
      });
      break;
    default:
      break;
  }
  Fy.push(...e3(Fm, "story"));
  return Fy;
}
c(e9, "playBeat");
function eB(Fm, Fx) {
  if (Fx) {
    if (Fx.phase !== "bet" || Fx.bets.some((Fa) => Fa > 0)) {
      return false;
    } else {
      return Fx.wallet < s;
    }
  } else {
    return Fm.wallet < s;
  }
}
c(eB, "needsBailout");
function eF(Fm, Fx = null) {
  let Fa = Fm.stats.bailouts === 0;
  Fm.stats.bailouts++;
  Fm.wallet = Bv(Fm.wallet + p);
  if (Fx) {
    Fx.credit(p);
  }
  return {
    amount: p,
    first: Fa,
    events: [
      {
        t: "bailout",
        amount: p,
        first: Fa,
      },
    ],
  };
}
c(eF, "bailout");
function eN(Fm, Fx, Fa, Fu = {}) {
  let FX = [];
  let FS = (FE) => {
    let Fy = !Fm.secrets[FE];
    Fm.secrets[FE] = true;
    FX.push({
      t: "secret",
      id: FE,
      kind: Fa,
      first: Fy,
    });
  };
  if (Fa === "shoeClick") {
    if (Fu.dealtSinceShuffle === 51) {
      FS(1);
      FX.push(...e5(Fm, "FIFTY_ONE", null));
    }
  } else if (Fa === "lever") {
    if ((Fu.room || "coin") !== "coin") {
      return FX;
    }
    Fx.lever++;
    FX.push({
      t: "lever",
      pulls: Fx.lever,
    });
    if (Fx.lever === 11) {
      FS(2);
      Fm.story.flags.lintOpen = true;
      FX.push(...e5(Fm, "LEVER", "coin"));
      FX.push(...e3(Fm, "secret"));
    }
  } else if (Fa === "signHover") {
    if ((Fu.seconds || 0) >= 30) {
      FS(4);
    }
  } else if (Fa === "pennyEdge") {
    if (Fu.face === "EDGE" && Fu.natural) {
      FS(5);
    }
  } else if (Fa === "keepsakeItem" && (Fu.room || "lint") === "lint") {
    let FE = Fu.char || Fm.char;
    if (B0.includes(FE) && !Fm.cosmetics.backs.includes(FE)) {
      Fm.cosmetics.backs.push(FE);
    }
    FS(7);
  }
  return FX;
}
c(eN, "secretCheck");
var eI = {
  ink: "#1b140f",
  shadow: "#0f0b09",
  box0: "#4a3526",
  box1: "#7a5a3e",
  box2: "#b08c62",
  lint: "#8f8a82",
  moss: "#3d5638",
  plush: "#62202a",
  brass: "#c29a45",
  ivory: "#efe6cf",
  inkred: "#b0302a",
  navy: "#2a3a64",
  fluoro: "#e6eedc",
  white: "#ffffff",
  sel: "#ffff00",
  void: "#000000",
  dw0: "#0b0614",
  dw1: "#170c26",
  dw2: "#2a1742",
  dw3: "#4a2a73",
  dw4: "#7b52b8",
  dw5: "#b89af0",
  gold0: "#5e3a0c",
  gold1: "#a8741c",
  gold2: "#e8b43c",
  gold3: "#ffe89a",
  rail0: "#0e0812",
  rail1: "#221430",
  rail2: "#3a2352",
  rail3: "#5c3a80",
  orange: "#ff7f27",
  grey: "#7f7f8a",
  paper: "#d9ccae",
  panel: "#f6e7bd",
  cardred: "#c8203a",
  cardblk: "#1f1830",
};
var eP = {
  ink: "shadow",
  shadow: "shadow",
  box0: "shadow",
  box1: "box0",
  box2: "box1",
  lint: "box0",
  moss: "#27371f",
  plush: "#3f1219",
  brass: "box1",
  ivory: "box2",
  inkred: "plush",
  navy: "#1b2544",
  fluoro: "lint",
  white: "ivory",
  sel: "gold2",
  void: "void",
  dw0: "void",
  dw1: "dw0",
  dw2: "dw1",
  dw3: "dw2",
  dw4: "dw3",
  dw5: "dw4",
  gold0: "#3a2306",
  gold1: "gold0",
  gold2: "gold1",
  gold3: "gold2",
  rail0: "void",
  rail1: "rail0",
  rail2: "rail1",
  rail3: "rail2",
  orange: "#a04a10",
  grey: "#4a4a52",
  paper: "box2",
  panel: "ivory",
  cardred: "inkred",
  cardblk: "shadow",
};
var ej = c((Fm, Fx) => (Fx && Fx[0] === "#" ? Fx : Fm[Fx] || eI[Fx] || "#ff00ff"), "hexOf");
var eR = Object.fromEntries(Object.keys(eI).map((Fm) => [Fm, ej(eI, eP[Fm])]));
var eG = {
  coin: ["#052620", "#093a2e", "#0e5040", "#166b55"],
  glasses: ["#06143a", "#0b2255", "#123272", "#1d4896"],
  violin: ["#280512", "#410a20", "#5a112f", "#7a1b43"],
  lint: ["#18142a", "#241e38", "#312a4b", "#453b63"],
};
eG.finale = eG.coin;
var ei = 39;
var eC = 55;
var eY = 14;
var eK = 26;
var eH = 36;
var el = D || ["buttons", "keys", "socks", "coins"];
var eQ = a || ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var ew = new Set(m || ["buttons", "keys"]);
var eU = o || [1, 5, 25, 100, 500];
var ec = null;
function eM(Fm) {
  ec = typeof Fm == "function" ? Fm : null;
  tT();
}
c(eM, "setCanvasFactory");
function eJ(Fm, Fx) {
  if (ec) {
    return ec(Fm, Fx);
  }
  if (typeof document !== "undefined" && document.createElement) {
    let Fa = document.createElement("canvas");
    Fa.width = Fm;
    Fa.height = Fx;
    return Fa;
  }
  if (typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(Fm, Fx);
  } else {
    return null;
  }
}
c(eJ, "newCanvas");
var eb = new Map();
function eV(Fm) {
  let Fx = eb.get(Fm);
  if (Fx) {
    return Fx;
  }
  let Fa = parseInt(Fm.slice(1), 16);
  Fx = [(Fa >> 16) & 255, (Fa >> 8) & 255, Fa & 255];
  eb.set(Fm, Fx);
  return Fx;
}
c(eV, "rgb");
var eA = class NB {
  constructor(Fm, Fx) {
    this.w = Fm;
    this.h = Fx;
    this.p = new Array(Fm * Fx).fill(null);
  }
  set(Fm, Fx, Fa) {
    Fm |= 0;
    Fx |= 0;
    if (Fm >= 0 && Fx >= 0 && Fm < this.w && Fx < this.h) {
      this.p[Fx * this.w + Fm] = Fa;
    }
  }
  get(Fm, Fx) {
    if (Fm >= 0 && Fx >= 0 && Fm < this.w && Fx < this.h) {
      return this.p[Fx * this.w + Fm];
    } else {
      return null;
    }
  }
  rect(Fm, Fx, Fa, Fu, FX) {
    for (let FS = 0; FS < Fu; FS++) {
      for (let FE = 0; FE < Fa; FE++) {
        this.set(Fm + FE, Fx + FS, FX);
      }
    }
  }
  stamp(Fm, Fx, Fa, Fu, { flip: FX = false, mirror: FS = false, only: FE = null } = {}) {
    let Fy = Fm.length;
    for (let Fq = 0; Fq < Fy; Fq++) {
      let Fo = Fm[FX ? Fy - 1 - Fq : Fq];
      let FL = Fo.length;
      for (let Fz = 0; Fz < FL; Fz++) {
        let Fh = Fo[FX || FS ? FL - 1 - Fz : Fz];
        if (Fh === "." || Fh === " ") {
          continue;
        }
        let Fv = Fu[Fh];
        if (Fv) {
          if (!FE || !!FE(Fx + Fz, Fa + Fq)) {
            this.set(Fx + Fz, Fa + Fq, Fv);
          }
        }
      }
    }
  }
  toCanvas(Fm = eI, Fx = 1) {
    let Fa = eJ(this.w * Fx, this.h * Fx);
    if (!Fa) {
      return null;
    }
    let Fu = Fa.getContext("2d");
    let FX = Fu.createImageData(this.w * Fx, this.h * Fx);
    let FS = FX.data;
    let FE = this.w * Fx;
    for (let Fy = 0; Fy < this.h; Fy++) {
      for (let Fq = 0; Fq < this.w; Fq++) {
        let Fo = this.p[Fy * this.w + Fq];
        if (!Fo) {
          continue;
        }
        let [FL, Fz, Fh] = eV(ej(Fm, Fo));
        for (let Fv = 0; Fv < Fx; Fv++) {
          for (let Fp = 0; Fp < Fx; Fp++) {
            let FW = ((Fy * Fx + Fv) * FE + Fq * Fx + Fp) * 4;
            FS[FW] = FL;
            FS[FW + 1] = Fz;
            FS[FW + 2] = Fh;
            FS[FW + 3] = 255;
          }
        }
      }
    }
    Fu.putImageData(FX, 0, 0);
    return Fa;
  }
  toMap() {
    let Fm = {};
    let Fx = new Map();
    let Fa = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let Fu = [];
    for (let FX = 0; FX < this.h; FX++) {
      let FS = "";
      for (let FE = 0; FE < this.w; FE++) {
        let Fy = this.p[FX * this.w + FE];
        if (!Fy) {
          FS += ".";
          continue;
        }
        let Fq = Fx.get(Fy);
        if (!Fq) {
          Fq = Fa[Fx.size] || "?";
          Fx.set(Fy, Fq);
          Fm[Fq] = Fy;
        }
        FS += Fq;
      }
      Fu.push(FS);
    }
    return {
      w: this.w,
      h: this.h,
      pal: Fm,
      rows: Fu,
    };
  }
};
c(eA, "PB");
var eO = eA;
var eD = new WeakMap();
var em = new WeakMap();
var ex = 1;
function ea(Fm) {
  let Fx = em.get(Fm);
  if (!Fx) {
    Fx = ex++;
    em.set(Fm, Fx);
  }
  return Fx;
}
c(ea, "palId");
function eu(Fm, Fx = 0) {
  if (!Fm) {
    return null;
  }
  if (Fm.rows) {
    return Fm.rows;
  }
  let Fa = Fm.frames;
  if (!Fa) {
    return null;
  }
  if (Array.isArray(Fa)) {
    return Fa[(Fx | 0) % Fa.length] || Fa[0];
  }
  if (typeof Fx == "string") {
    let FX = Fx.indexOf(":");
    let FS = FX >= 0 ? Fx.slice(0, FX) : Fx;
    let FE = FX >= 0 ? +Fx.slice(FX + 1) : 0;
    let Fy = Fa[FS];
    if (!Fy || !Fy.length) {
      return null;
    } else {
      return Fy[(FE | 0) % Fy.length] || Fy[0];
    }
  }
  let Fu = Fa.idle || Fa[Object.keys(Fa)[0]];
  if (!Fu || !Fu.length) {
    return null;
  } else {
    return Fu[(Fx | 0) % Fu.length];
  }
}
c(eu, "frameRows");
function eX(Fm, Fx = 0, Fa = eI, Fu = 1) {
  if (!Fm) {
    return null;
  }
  let FX = eD.get(Fm);
  if (!FX) {
    FX = new Map();
    eD.set(Fm, FX);
  }
  let FS = Fx + "|" + ea(Fa) + "|" + Fu;
  if (FX.has(FS)) {
    return FX.get(FS);
  }
  let FE = eu(Fm, Fx);
  let Fy = null;
  if (FE) {
    let Fq = new eO(Fm.w || FE[0].length, Fm.h || FE.length);
    let Fo = {};
    for (let FL in Fm.pal) {
      Fo[FL] = Fm.pal[FL];
    }
    Fq.stamp(FE, 0, 0, Fo);
    Fy = Fq.toCanvas(Fa, Fu);
  }
  FX.set(FS, Fy);
  return Fy;
}
c(eX, "bake");
var eS = {
  A: [".#.", "#.#", "###", "#.#", "#.#"],
  2: ["##.", "..#", ".#.", "#..", "###"],
  3: ["##.", "..#", ".#.", "..#", "##."],
  4: ["#.#", "#.#", "###", "..#", "..#"],
  5: ["###", "#..", "##.", "..#", "##."],
  6: [".##", "#..", "###", "#.#", "###"],
  7: ["###", "..#", ".#.", ".#.", ".#."],
  8: ["###", "#.#", ".#.", "#.#", "###"],
  9: ["###", "#.#", "###", "..#", "##."],
  10: ["#.###", "#.#.#", "#.#.#", "#.#.#", "#.###"],
  J: ["..#", "..#", "..#", "#.#", ".#."],
  Q: [".#.", "#.#", "#.#", "#.#", ".##"],
  K: ["#.#", "#.#", "##.", "#.#", "#.#"],
  0: ["###", "#.#", "#.#", "#.#", "###"],
  1: [".#.", "##.", ".#.", ".#.", "###"],
  "?": ["##.", "..#", ".#.", "...", ".#."],
  R: ["##.", "#.#", "##.", "#.#", "#.#"],
  O: [".#.", "#.#", "#.#", "#.#", ".#."],
  U: ["#.#", "#.#", "#.#", "#.#", "###"],
  T: ["###", ".#.", ".#.", ".#.", ".#."],
  E: ["###", "#..", "##.", "#..", "###"],
  N: ["#.#", "###", "###", "#.#", "#.#"],
  S: [".##", "#..", ".#.", "..#", "##."],
  L: ["#..", "#..", "#..", "#..", "###"],
  I: ["###", ".#.", ".#.", ".#.", "###"],
  C: [".##", "#..", "#..", "#..", ".##"],
  D: ["##.", "#.#", "#.#", "#.#", "##."],
  M: ["#.#", "###", "###", "#.#", "#.#"],
  F: ["###", "#..", "##.", "#..", "#.."],
  H: ["#.#", "#.#", "###", "#.#", "#.#"],
  Y: ["#.#", "#.#", ".#.", ".#.", ".#."],
  W: ["#.#", "#.#", "#.#", "###", "#.#"],
  P: ["##.", "#.#", "##.", "#..", "#.."],
  A2: [".#.", "#.#", "###", "#.#", "#.#"],
};
function eE(Fm, Fx, Fa, Fu, FX) {
  let FS = Fa;
  for (let FE of String(Fx)) {
    if (FE === " ") {
      FS += 2;
      continue;
    }
    let Fy = eS[FE];
    if (!Fy) {
      FS += 4;
      continue;
    }
    Fm.stamp(Fy, FS, Fu, {
      "#": FX,
    });
    FS += Fy[0].length + 1;
  }
  return FS - Fa - 1;
}
c(eE, "micro");
var ey = c((Fm) => {
  let Fx = 0;
  for (let Fa of String(Fm)) {
    Fx += Fa === " " ? 2 : eS[Fa] ? eS[Fa][0].length + 1 : 4;
  }
  return Math.max(0, Fx - 1);
}, "microW");
var eq = {
  buttons: "heart",
  keys: "diamond",
  socks: "spade",
  coins: "club",
};
var eo = c((Fm) => eq[Fm] || Fm, "shownOf");
var eL = {
  heart: [".#.#.", "#####", "#####", ".###.", "..#.."],
  diamond: ["..#..", ".###.", "#####", ".###.", "..#.."],
  spade: ["..#..", ".###.", "#####", "#####", ".#.#."],
  club: [".###.", ".###.", "##.##", "#####", ".#.#."],
};
var ez = {
  heart: [".#.#.", "#####", "#####", ".###.", "..#..", "....."],
  diamond: ["..#..", ".###.", "#####", ".###.", "..#..", "....."],
  spade: ["..#..", ".###.", "#####", "#####", "..#..", ".###."],
  club: [".###.", ".###.", "##.##", "#####", "..#..", ".###."],
};
var eh = {
  heart: [
    ".##...##.",
    "####.####",
    "#########",
    "#########",
    "#########",
    ".#######.",
    "..#####..",
    "...###...",
    "....#....",
  ],
  diamond: [
    "....#....",
    "...###...",
    "..#####..",
    ".#######.",
    "#########",
    ".#######.",
    "..#####..",
    "...###...",
    "....#....",
  ],
  spade: [
    "....#....",
    "...###...",
    "..#####..",
    ".#######.",
    "#########",
    "#########",
    ".##.#.##.",
    "....#....",
    "...###...",
  ],
  club: [
    "...###...",
    "..#####..",
    "..#####..",
    ".##.#.##.",
    "#########",
    "#########",
    ".##.#.##.",
    "....#....",
    "...###...",
  ],
};
var ev = Object.fromEntries(el.map((Fm) => [Fm, eh[eo(Fm)] || eh.heart]));
var ep = 7;
var eW = 11;
var eT = 15;
var er = {
  2: [
    [eW, 4],
    [eW, 26],
  ],
  3: [
    [eW, 4],
    [eW, 15],
    [eW, 26],
  ],
  4: [
    [ep, 4],
    [eT, 4],
    [ep, 26],
    [eT, 26],
  ],
  5: [
    [ep, 4],
    [eT, 4],
    [eW, 15],
    [ep, 26],
    [eT, 26],
  ],
  6: [
    [ep, 4],
    [eT, 4],
    [ep, 15],
    [eT, 15],
    [ep, 26],
    [eT, 26],
  ],
  7: [
    [ep, 4],
    [eT, 4],
    [eW, 9],
    [ep, 15],
    [eT, 15],
    [ep, 26],
    [eT, 26],
  ],
  8: [
    [ep, 4],
    [eT, 4],
    [eW, 9],
    [ep, 15],
    [eT, 15],
    [eW, 21],
    [ep, 26],
    [eT, 26],
  ],
  9: [
    [ep, 4],
    [eT, 4],
    [ep, 11],
    [eT, 11],
    [eW, 15],
    [ep, 19],
    [eT, 19],
    [ep, 26],
    [eT, 26],
  ],
  10: [
    [ep, 4],
    [eT, 4],
    [eW, 8],
    [ep, 11],
    [eT, 11],
    [ep, 19],
    [eT, 19],
    [eW, 22],
    [ep, 26],
    [eT, 26],
  ],
};
var ef = eS[10];
var ek = {
  K: ["#.#.#.#.#", "#########", "#.#.#.#.#", "#########"],
  Q: ["....#....", ".#.###.#.", "#########", ".#######."],
  J: [".......##", ".....###.", "########.", "#########"],
};
var ed = {
  J: ["..###", "...#.", "...#.", "...#.", "#..#.", "#..#.", ".##.."],
  Q: [".###.", "#...#", "#...#", "#...#", "#.#.#", "#..#.", ".##.#"],
  K: ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"],
};
var eZ = c((Fm, Fx, Fa, Fu, FX) => {
  let FS = ed[Fx];
  for (let FE = 0; FE < FS.length; FE++) {
    for (let Fy = 0; Fy < FS[FE].length; Fy++) {
      if (FS[FE][Fy] === "#") {
        Fm.rect(Fa + Fy * 2, Fu + FE * 2, 2, 2, FX);
      }
    }
  }
}, "bigGlyph");
var eg = {
  J: ek.J,
  Q: ek.Q,
  K: ek.K,
};
var t0 = {};
var t1 = [];
var t2 = [
  "coffee",
  "tally",
  "nick",
  "residue",
  "crease",
  "ripple",
  "crayon",
  "thumb",
  "pinhole",
  "price",
];
var t3 = {
  "7:keys": {
    kind: "coffee",
    at: 2,
    name: "the coffee ring on the 7 of KEYS",
  },
  "2:socks": {
    kind: "tooth",
    at: 1,
    name: "a tooth mark on the 2 of SOCKS",
  },
  "K:coins": {
    kind: "crayon",
    at: 3,
    name: "a brown crayon moustache on the KING of COINS",
  },
  "A:buttons": {
    kind: "price",
    at: 0,
    name: "a 5c price sticker on the ACE of BUTTONS",
  },
  "10:socks": {
    kind: "crease",
    at: 1,
    name: "the long crease across the 10 of SOCKS",
  },
  "J:keys": {
    kind: "pinhole",
    at: 2,
    name: "a pin hole through the JACK of KEYS",
  },
};
function t4(Fm) {
  if (!Fm || Fm.rank === "TICKET") {
    return null;
  }
  let Fx = t3[Fm.rank + ":" + Fm.suit];
  if (Fx) {
    return {
      kind: Fx.kind,
      at: Fx.at,
      named: true,
    };
  }
  let Fa = Math.max(0, eQ.indexOf(Fm.rank));
  let Fu = Math.max(0, el.indexOf(Fm.suit));
  return {
    kind: t2[(Fu * 7 + Fa * 3) % 10],
    at: (Fa + Fu * 5) % 4,
    named: false,
  };
}
c(t4, "flawOf");
function t5(Fm) {
  let Fx = eK;
  let Fa = eH;
  Fm.rect(1, 1, Fx - 2, Fa - 2, "ivory");
  for (let Fu = 2; Fu < Fx - 2; Fu++) {
    Fm.set(Fu, 0, "ink");
    Fm.set(Fu, Fa - 1, "ink");
  }
  for (let FX = 2; FX < Fa - 2; FX++) {
    Fm.set(0, FX, "ink");
    Fm.set(Fx - 1, FX, "ink");
  }
  Fm.set(1, 1, "ink");
  Fm.set(Fx - 2, 1, "ink");
  Fm.set(1, Fa - 2, "ink");
  Fm.set(Fx - 2, Fa - 2, "ink");
  for (let FS = 2; FS < Fa - 2; FS++) {
    Fm.set(Fx - 2, FS, "paper");
  }
  for (let FE = 2; FE < Fx - 2; FE++) {
    Fm.set(FE, Fa - 2, "paper");
  }
  for (let Fy = 2; Fy < Fx - 2; Fy++) {
    Fm.set(Fy, 1, "white");
  }
  for (let Fq = 2; Fq < Fa - 2; Fq++) {
    Fm.set(1, Fq, "white");
  }
}
c(t5, "cardOutline");
var t6 = c((Fm) => (ew.has(Fm) ? "cardred" : "cardblk"), "inkOf");
function t7(Fm, Fx, Fa, Fu, FX, FS) {
  Fm.stamp(
    ez[Fx] || ez.heart,
    Fa,
    Fu,
    {
      "#": FX,
    },
    {
      flip: FS,
    },
  );
}
c(t7, "stampPip");
function t8(Fm, Fx, Fa = {}) {
  let Fu = new eO(eK, eH);
  t5(Fu);
  if (!Fm) {
    return Fu;
  }
  if (Fm.rank === "TICKET") {
    return t9();
  }
  let FX = eo(Fm.suit);
  let FS = t6(Fm.suit);
  let FE = Fm.rank;
  let Fy = FE === "10" ? ef : eS[FE] || eS["?"];
  let Fq = Fy[0].length;
  let Fo = FE === "10" ? 1 : 2;
  Fu.stamp(Fy, Fo, 3, {
    "#": FS,
  });
  Fu.stamp(eL[FX], 1, 9, {
    "#": FS,
  });
  Fu.stamp(
    Fy,
    eK - Fo - Fq,
    eH - 8,
    {
      "#": FS,
    },
    {
      flip: true,
      mirror: true,
    },
  );
  Fu.stamp(
    eL[FX],
    eK - 6,
    eH - 14,
    {
      "#": FS,
    },
    {
      flip: true,
      mirror: true,
    },
  );
  if (FE === "J" || FE === "Q" || FE === "K") {
    for (let FL = 3; FL <= 32; FL++) {
      for (let Fz = 6; Fz <= 19; Fz++) {
        Fu.set(Fz, FL, Fz === 6 || Fz === 19 || FL === 3 || FL === 32 ? "gold1" : "panel");
      }
    }
    Fu.stamp(ek[FE], 8, 5, {
      "#": "gold2",
    });
    for (let Fh = 0; Fh < 9; Fh++) {
      if (ek[FE][0][Fh] === "#") {
        Fu.set(8 + Fh, 5, "gold3");
      }
    }
    eZ(Fu, FE, 8, 10, FS);
    Fu.stamp(eL[FX], 10, 26, {
      "#": FS,
    });
    if (FE === "Q" && Fm.suit === "buttons" && Fa.dogear) {
      Fu.set(24, 1, null);
      Fu.set(23, 0, null);
      Fu.set(24, 0, null);
      Fu.set(25, 2, null);
      Fu.set(22, 1, "paper");
      Fu.set(23, 1, "paper");
      Fu.set(23, 2, "paper");
      Fu.set(24, 2, "ink");
      Fu.set(24, 3, "ink");
      Fu.set(22, 0, "ink");
    }
  } else if (FE === "A") {
    Fu.stamp(eh[FX], 8, 13, {
      "#": FS,
    });
    if (FX === "spade") {
      for (let [Fv, Fp] of [
        [12, 16],
        [11, 17],
        [13, 17],
      ]) {
        Fu.set(Fv, Fp, "gold2");
      }
    }
  } else {
    let FW = +FE;
    for (let [FT, Fr] of er[FW] || []) {
      t7(Fu, FX, FT, Fr, FS, Fr > 17);
    }
  }
  return Fu;
}
c(t8, "faceBuffer");
function t9() {
  let Fm = new eO(eK, eH);
  t5(Fm);
  for (let Fx = 2; Fx < eK - 2; Fx += 2) {
    Fm.set(Fx, 2, "navy");
    Fm.set(Fx, eH - 3, "navy");
  }
  eE(Fm, "WILD", 5, 5, "navy");
  ((Fa, Fu, FX) => {
    let FS = eS[Fa];
    for (let FE = 0; FE < 5; FE++) {
      for (let Fy = 0; Fy < 3; Fy++) {
        if (FS[FE][Fy] === "#") {
          Fm.rect(Fu + Fy * 2, FX + FE * 2, 2, 2, "navy");
        }
      }
    }
  })("?", 10, 13);
  for (let Fa = 2; Fa < eK - 2; Fa++) {
    for (let Fu = 26; Fu < 29; Fu++) {
      if (((Fa + Fu) & 3) < 2) {
        Fm.set(Fa, Fu, "cardred");
      }
    }
  }
  return Fm;
}
c(t9, "ticketBuffer");
function tB(Fm) {
  let Fx = new eO(eK, eH);
  t5(Fx);
  Fx.rect(2, 2, eK - 4, eH - 4, "dw2");
  for (let FS = 3; FS < eK - 3; FS++) {
    Fx.set(FS, 3, "gold1");
    Fx.set(FS, eH - 4, "gold1");
  }
  for (let FE = 3; FE < eH - 3; FE++) {
    Fx.set(3, FE, "gold1");
    Fx.set(eK - 4, FE, "gold1");
  }
  for (let Fy = 5; Fy < eH - 5; Fy++) {
    for (let Fq = 5; Fq < eK - 5; Fq++) {
      let Fo = (Fq + Fy) % 4 === 0;
      let FL = (Fq - Fy + 64) % 4 === 0;
      Fx.set(Fq, Fy, Fo && FL ? "dw4" : Fo || FL ? "dw3" : "dw1");
    }
  }
  let Fa = 13;
  let Fu = 18;
  for (let Fz = Fu - 9; Fz <= Fu + 9; Fz++) {
    for (let Fh = Fa - 7; Fh <= Fa + 7; Fh++) {
      let Fv = Math.abs(Fh + 0.5 - Fa) / 7 + Math.abs(Fz + 0.5 - Fu) / 9;
      if (Fv <= 1.08 && Fv > 0.92) {
        Fx.set(Fh, Fz, "ink");
      } else if (Fv <= 0.92 && Fv > 0.7) {
        Fx.set(Fh, Fz, Fh < Fa == Fz < Fu ? "gold3" : "gold2");
      } else if (Fv <= 0.7) {
        Fx.set(Fh, Fz, "dw1");
      }
    }
  }
  let FX = Fm === "52" ? "white" : "gold2";
  Fx.rect(12, 14, 2, 8, FX);
  Fx.rect(9, 17, 8, 2, FX);
  Fx.rect(11, 16, 4, 4, FX);
  return Fx;
}
c(tB, "backBuffer");
var tF = {
  1: {
    c: "#ecebf4",
    w: "#7b52b8",
    d: "#a9a4c2",
    l: "#ffffff",
    t: "#4a2a73",
  },
  5: {
    c: "#d8283f",
    w: "#ffffff",
    d: "#8e1328",
    l: "#f06a7c",
    t: "#ffffff",
  },
  25: {
    c: "#1fa45e",
    w: "#ffffff",
    d: "#0d6537",
    l: "#5bd594",
    t: "#ffffff",
  },
  100: {
    c: "#2c2540",
    w: "#e8b43c",
    d: "#16111f",
    l: "#4d4466",
    t: "#ffe89a",
  },
  500: {
    c: "#8a3fe0",
    w: "#ffe89a",
    d: "#4f1f94",
    l: "#b98af7",
    t: "#ffe89a",
  },
};
tF[0.5] = tF[1];
var tN = {
  1: [".#", "##", ".#", ".#", ".#"],
  2: eS[2],
  5: eS[5],
  0: eS[0],
};
function tI(Fm) {
  let Fx = [];
  for (let FE = 0; FE < 18; FE++) {
    let Fy = "";
    for (let Fq = 0; Fq < 18; Fq++) {
      let Fo = Fq + 0.5 - 9;
      let FL = FE + 0.5 - 9;
      let Fz = Math.hypot(Fo, FL);
      let Fh = (Math.atan2(FL, Fo) / (Math.PI * 2) + 1) % 1;
      let Fv = ".";
      if (Fz <= 8.9) {
        if (Fz > 8) {
          Fv = "k";
        } else if (Fz > 6.6) {
          Fv = Math.floor(Fh * 16 + 0.5) % 2 === 0 ? "w" : Fo + FL > 7 ? "d" : "c";
        } else if (Fz > 5.9) {
          Fv = "d";
        } else {
          Fv = Fo + FL < -5.5 && Fz > 4 ? "l" : "c";
        }
      }
      Fy += Fv;
    }
    Fx.push(Fy.split(""));
  }
  let Fa = [...(Fm === 0.5 ? "" : String(Fm))].map((Fp) => tN[Fp] || eS[Fp]);
  let Fu = Fa.reduce((Fp, FW) => Fp + FW[0].length, 0) + Math.max(0, Fa.length - 1);
  let FX = Math.round(9 - Fu / 2);
  let FS = 7;
  for (let Fp of Fa) {
    for (let FW = 0; FW < 5; FW++) {
      for (let FT = 0; FT < Fp[FW].length; FT++) {
        if (Fp[FW][FT] === "#") {
          Fx[FS + FW][FX + FT] = "t";
        }
      }
    }
    FX += Fp[0].length + 1;
  }
  if (Fm === 0.5) {
    for (let Fr = 0; Fr < 18; Fr++) {
      for (let Ff = 10; Ff < 18; Ff++) {
        Fx[Fr][Ff] = Ff === 10 && Fx[Fr][Ff] !== "." ? "k" : ".";
      }
    }
  }
  return Fx.map((Fk) => Fk.join(""));
}
c(tI, "chipTopRows");
var tP = [
  ".kkkkkkkkkkkkkk.",
  "kllllllllllllllk",
  "kcwwccwwccwwccck",
  "kdwwddwwddwwdddk",
  ".kkkkkkkkkkkkkk.",
];
var tj = [
  ".kkkkkkkkkkkkkk.",
  "kllllllllllllllk",
  "kccwwccwwccwwcck",
  "kddwwddwwddwwddk",
  ".kkkkkkkkkkkkkk.",
];
var tR = [
  ".kkkkkkk........",
  "kllllllk........",
  "kcwwccck........",
  "kdwwdddk........",
  ".kkkkkkk........",
];
function tG(Fm = false) {
  let Fx = [];
  for (let Fa = 0; Fa < 7; Fa++) {
    let Fu = "";
    for (let FX = 0; FX < 16; FX++) {
      let FS = (FX + 0.5 - 8) / 8;
      let FE = (Fa + 0.5 - 3.5) / 3.5;
      let Fy = Math.hypot(FS, FE);
      let Fq = (Math.atan2(FE, FS) / (Math.PI * 2) + 1) % 1;
      let Fo = ".";
      if (Fy <= 1) {
        Fo =
          Fy > 0.84
            ? "k"
            : Fy > 0.58
              ? Math.floor(Fq * 12 + 0.5) % 2 === 0
                ? "w"
                : "c"
              : Fy > 0.44
                ? "d"
                : FE < -0.1 && FS < 0.2
                  ? "l"
                  : "c";
      }
      if (Fm && FX > 7) {
        Fo = FX === 8 && Fo !== "." ? "k" : ".";
      }
      Fu += Fo;
    }
    Fx.push(Fu);
  }
  return Fx;
}
c(tG, "chipCapRows");
var ti = c(
  (Fm) =>
    Object.assign(
      {
        k: "ink",
      },
      tF[Fm],
    ),
  "chipPal",
);
function tC() {
  let Fm = new eO(30, 22);
  for (let Fx = 4; Fx < 20; Fx++) {
    for (let Fa = 6; Fa < 29; Fa++) {
      Fm.set(Fa, Fx, "rail1");
    }
  }
  for (let Fu = 6; Fu < 29; Fu++) {
    Fm.set(Fu, 4, "rail3");
    Fm.set(Fu, 19, "rail0");
    Fm.set(Fu, 20, "void");
  }
  for (let FX = 4; FX < 20; FX++) {
    Fm.set(28, FX, "rail0");
    Fm.set(6, FX, "rail2");
  }
  for (let FS = 6; FS < 19; FS++) {
    let FE = 1 + ((FS - 6) >> 2);
    for (let Fy = FE; Fy < 9; Fy++) {
      Fm.set(Fy, FS, "rail0");
    }
  }
  for (let Fq = 7; Fq < 18; Fq++) {
    let Fo = 2 + ((Fq - 6) >> 2);
    for (let FL = Fo; FL < Fo + 5; FL++) {
      Fm.set(FL, Fq, "dw2");
    }
    Fm.set(Fo + 5, Fq, Fq & 1 ? "ivory" : "box2");
    if (Fq === 12) {
      Fm.set(Fo + 2, Fq, "gold2");
    }
  }
  for (let Fz = 6; Fz < 19; Fz++) {
    let Fh = 1 + ((Fz - 6) >> 2);
    Fm.set(Fh - 1, Fz, "gold2");
  }
  for (let Fv = 1; Fv < 29; Fv++) {
    if (!Fm.get(Fv, 5)) {
      Fv < 9;
    }
  }
  for (let Fp = 9; Fp < 28; Fp++) {
    Fm.set(Fp, 5, "gold1");
  }
  Fm.rect(15, 11, 9, 5, "gold1");
  for (let FW = 15; FW < 24; FW++) {
    Fm.set(FW, 11, "gold2");
  }
  Fm.set(19, 13, "rail0");
  for (let FT = 9; FT < 27; FT++) {
    Fm.set(FT, 2, FT & 1 ? "ivory" : "box2");
    Fm.set(FT, 3, "dw2");
  }
  Fm.set(8, 3, "gold2");
  Fm.set(27, 3, "rail0");
  return Fm;
}
c(tC, "shoeBuffer");
function tY() {
  let Fm = new eO(28, 12);
  for (let Fx = 2; Fx < 10; Fx++) {
    for (let Fa = 1; Fa < 27; Fa++) {
      Fm.set(Fa, Fx, "rail0");
    }
  }
  for (let Fu = 1; Fu < 27; Fu++) {
    Fm.set(Fu, 1, "gold1");
    Fm.set(Fu, 2, "gold2");
    Fm.set(Fu, 10, "void");
  }
  for (let FX = 2; FX < 10; FX++) {
    Fm.set(0, FX, "gold1");
    Fm.set(27, FX, "gold1");
  }
  for (let FS = 4; FS < 9; FS++) {
    for (let FE = 3; FE < 25; FE++) {
      Fm.set(FE, FS, "rail1");
    }
  }
  return Fm;
}
c(tY, "trayBuffer");
function tK() {
  let Fm = new eO(26, 30);
  for (let Fx = 2; Fx < 30; Fx++) {
    for (let Fa = 1; Fa < 25; Fa++) {
      if (!(Fx < 5) || (!(Fa < 3 + (5 - Fx)) && !(Fa > 22 - (5 - Fx)))) {
        Fm.set(Fa, Fx, "gold0");
      }
    }
  }
  for (let Fu = 2; Fu < 30; Fu++) {
    for (let FX = 1; FX < 25; FX++) {
      if (
        (!(Fu < 5) || (!(FX < 3 + (5 - Fu)) && !(FX > 22 - (5 - Fu)))) &&
        (Fu === 2 || FX === 1 || FX === 24)
      ) {
        Fm.set(FX, Fu, "gold1");
      }
    }
  }
  for (let FS = 4; FS < 30; FS++) {
    for (let FE = 3; FE < 23; FE++) {
      if (!(FS < 7) || (!(FE < 5 + (7 - FS)) && !(FE > 20 - (7 - FS)))) {
        Fm.set(FE, FS, FE < 5 ? "dw4" : FE > 20 || (FE + FS) % 7 === 0 ? "dw2" : "dw3");
      }
    }
  }
  for (let Fy = 5; Fy < 21; Fy++) {
    Fm.set(Fy, 5, "dw5");
  }
  for (let [Fq, Fo] of [
    [7, 10],
    [13, 10],
    [19, 10],
    [10, 16],
    [16, 16],
    [7, 22],
    [13, 22],
    [19, 22],
  ]) {
    Fm.set(Fq, Fo, "gold2");
    Fm.set(Fq, Fo + 1, "dw1");
  }
  return Fm;
}
c(tK, "chairBuffer");
function tH() {
  let Fm = new eO(30, 26);
  let Fx = 29 / 2;
  for (let Fa = 0; Fa < 26; Fa++) {
    for (let Fu = 0; Fu < 30; Fu++) {
      let FX = (Fu - Fx) / 15;
      let FS = Fa < 10 ? (10 - Fa) / 10 : 0;
      if (FX * FX + FS * FS > 1) {
        continue;
      }
      let FE = FX * FX + FS * FS > 0.8 || Fu === 0 || Fu === 29;
      Fm.set(Fu, Fa, FE ? "gold1" : "plush");
    }
  }
  for (let Fy = 0; Fy < 26; Fy++) {
    for (let Fq = 0; Fq < 30; Fq++) {
      if (Fm.get(Fq, Fy) !== "plush") {
        continue;
      }
      if ([Fm.get(Fq - 1, Fy), Fm.get(Fq + 1, Fy), Fm.get(Fq, Fy - 1)].includes("gold1")) {
        Fm.set(Fq, Fy, Fq < Fx ? "gold2" : "gold0");
      }
    }
  }
  for (let [Fo, FL] of [
    [9, 8],
    [15, 6],
    [21, 8],
    [12, 13],
    [18, 13],
    [9, 18],
    [15, 18],
    [21, 18],
  ]) {
    Fm.set(Fo, FL, "#3a0f16");
    Fm.set(Fo - 1, FL - 1, "#8a3040");
  }
  for (let Fz = 1; Fz < 29; Fz++) {
    Fm.set(Fz, 23, "gold2");
    Fm.set(Fz, 24, "gold0");
    Fm.set(Fz, 25, "void");
  }
  return Fm;
}
c(tH, "chairFrontBuffer");
function tl() {
  let Fm = new eO(34, 13);
  for (let Fx = 0; Fx < 13; Fx++) {
    for (let Fa = 0; Fa < 34; Fa++) {
      if (Fx < 3 && (Fa < 3 - Fx || Fa > 30 + Fx)) {
        continue;
      }
      let Fu = Fa === 0 || Fa === 33 || Fx === 0 || (Fx < 3 && (Fa === 3 - Fx || Fa === 30 + Fx));
      Fm.set(Fa, Fx, Fu ? "gold1" : Fx < 2 ? "rail3" : Fx < 6 ? "rail2" : "rail1");
    }
  }
  for (let FX = 2; FX < 32; FX++) {
    if (Fm.get(FX, 1) === "rail3") {
      Fm.set(FX, 1, "gold2");
    }
  }
  for (let FS = 3; FS < 12; FS++) {
    for (let FE = 4; FE < 30; FE++) {
      Fm.set(FE, FS, FS === 3 || FE === 4 ? "gold3" : FS === 11 || FE === 29 ? "gold0" : "gold1");
    }
  }
  return Fm;
}
c(tl, "chairBackBuffer");
var tQ = {
  w: 14,
  h: 12,
  pal: {
    k: "ink",
    w: "ivory",
    b: "dw4",
    s: "box2",
  },
  frames: {
    open: [
      [
        "..k.k.k.......",
        ".kwkwkwk......",
        ".kwkwkwk.k....",
        ".kwwwwwwkwk...",
        ".kwwwwwwwwk...",
        ".kwwwwwwwwk...",
        ".kswwwwwwk....",
        "..kwwwwwk.....",
        "..kbbbbbk.....",
        "..kbbbbbk.....",
        "...kkkkk......",
        "..............",
      ],
    ],
    hold: [
      [
        "..............",
        "..kkkkkk......",
        ".kwwwwwwk.....",
        ".kwkwkwwwk....",
        ".kwwwwwwwk....",
        ".kswwwwwwk....",
        "..kwwwwwk.....",
        "..kbbbbbk.....",
        "..kbbbbbk.....",
        "...kkkkk......",
        "..............",
        "..............",
      ],
    ],
    flat: [
      [
        "..............",
        "..............",
        ".kkkkkkkkk....",
        "kwwwwwwwwwk...",
        "kwwwwwwwwwwk..",
        "kswwwwwwwwwk..",
        ".kkkkkkkkkk...",
        "..kbbbbbk.....",
        "..kbbbbbk.....",
        "...kkkkk......",
        "..............",
        "..............",
      ],
    ],
    point: [
      [
        ".....k........",
        "....kwk.......",
        "....kwk.......",
        "..kkkwkk......",
        ".kwkwwwwk.....",
        ".kwwwwwwk.....",
        ".kswwwwwk.....",
        "..kwwwwk......",
        "..kbbbbk......",
        "..kbbbbk......",
        "...kkkk.......",
        "..............",
      ],
    ],
  },
};
var tw = {
  shoe: tC().toMap(),
  tray: tY().toMap(),
  chair: tK().toMap(),
  chairFront: tH().toMap(),
  chairBack: tl().toMap(),
  glove: tQ,
  cut: {
    w: 26,
    h: 4,
    pal: {
      k: "ink",
      r: "inkred",
    },
    rows: [
      "kkkkkkkkkkkkkkkkkkkkkkkkkk",
      "krrrrrrrrrrrrrrrrrrrrrrrrk",
      "krrrrrrrrrrrrrrrrrrrrrrrrk",
      "kkkkkkkkkkkkkkkkkkkkkkkkkk",
    ],
  },
  envelope: {
    w: 24,
    h: 14,
    pal: {
      k: "ink",
      w: "ivory",
      b: "box2",
      r: "inkred",
    },
    rows: [
      "kkkkkkkkkkkkkkkkkkkkkkkk",
      "kwkwwwwwwwwwwwwwwwwwwkwk",
      "kwwkwwwwwwwwwwwwwwwwkwwk",
      "kwwwkwwwwwwwwwwwwwwkwwwk",
      "kwwwwkkwwwwwwwwwwkkwwwwk",
      "kwwwwwwkkwwwwwwkkwwwwwwk",
      "kwwwwwwwwkkrrkkwwwwwwwwk",
      "kwwwwwwwwwwrrwwwwwwwwwwk",
      "kwwwwwwwwwwwwwwwwwwwwwwk",
      "kbbbbwwwwwwwwwwwwwwwwwwk",
      "kwwwwwwwwwwwwwwwwwwwwwwk",
      "kbbbbbbwwwwwwwwwwwwwwwwk",
      "kwwwwwwwwwwwwwwwwwwwwwwk",
      "kkkkkkkkkkkkkkkkkkkkkkkk",
    ],
  },
};
var tU = 31;
var tc = 24;
var tM = {
  hit: [
    "#########",
    "#.......#",
    "#...#...#",
    "#...#...#",
    "#.#####.#",
    "#...#...#",
    "#...#...#",
    "#.......#",
    "#########",
  ],
  stand: [
    "..#.#.#..",
    "..#.#.#.#",
    "#.#.#.#.#",
    "#.#.#.#.#",
    "#.#######",
    "#########",
    ".########",
    "..######.",
    "...####..",
  ],
  double: ["##...##.#####", ".##.##.....##", "..###...#####", ".##.##.##....", "##...##.#####"],
  split: [
    "####......####",
    "#..#......#..#",
    "#..#.#..#.#..#",
    "#..##....##..#",
    "#..#.#..#.#..#",
    "#..#......#..#",
    "####......####",
  ],
  surrender: [
    "##.......",
    "#######..",
    "########.",
    "#######..",
    "##.......",
    "##.......",
    "##.......",
    "##.......",
    "##.......",
  ],
  skill: [
    "....#....",
    "....#....",
    "...###...",
    "#########",
    ".#######.",
    "..#####..",
    "..##.##..",
    ".##...##.",
    ".#.....#.",
  ],
  deal: [
    ".######....",
    ".#....#....",
    ".#..######.",
    ".#..#....#.",
    ".#..#....#.",
    ".####....#.",
    "....#....#.",
    "....######.",
  ],
  rebet: [
    "..#####..",
    ".#.....#.",
    "#.......#",
    "#......##",
    "#.....###",
    "#........",
    ".#.....#.",
    "..#####..",
  ],
  clear: ["#.....#", ".#...#.", "..#.#..", "...#...", "..#.#..", ".#...#.", "#.....#"],
  leave: [
    "######...",
    "#....#...",
    "#....#.#.",
    "#....####",
    "#....#.#.",
    "#....#...",
    "######...",
  ],
  talk: [".#######.", "#.......#", "#.#.#.#.#", "#.......#", ".####.##.", "....##...", "....#...."],
};
var tJ = Object.keys(tM);
function tb(Fm) {
  let Fx = new eO(tU, tc);
  for (let Fq = 0; Fq < tU; Fq++) {
    for (let Fo of [0, 1, tc - 2, tc - 1]) {
      Fx.set(Fq, Fo, "k");
    }
  }
  for (let FL = 0; FL < tc; FL++) {
    for (let Fz of [0, 1, tU - 2, tU - 1]) {
      Fx.set(Fz, FL, "k");
    }
  }
  let Fa = tM[Fm] || tM.hit;
  let Fu = Fa[0].length;
  let FX = Fa.length;
  let FS = Fu <= 9 && FX <= 9 ? 2 : 1;
  let FE = Math.floor((tU - Fu * FS) / 2);
  let Fy = Math.floor((tc - FX * FS) / 2);
  for (let Fh = 0; Fh < FX; Fh++) {
    for (let Fv = 0; Fv < Fu; Fv++) {
      if (Fa[Fh][Fv] === "#") {
        Fx.rect(FE + Fv * FS, Fy + Fh * FS, FS, FS, "k");
      }
    }
  }
  return Fx;
}
c(tb, "buttonBuffer");
var tV = {
  off: "#ff7f27",
  on: "#ffff00",
  dis: "#5a5a66",
};
var tA = {
  off: {
    k: tV.off,
  },
  on: {
    k: tV.on,
  },
  dis: {
    k: tV.dis,
  },
};
var tO = [
  "..########..",
  "..#......##.",
  "..#.##...#.#",
  "..#.##...###",
  "..#........#",
  "..#...#....#",
  "..#..###...#",
  "..#...#....#",
  "..#........#",
  "..#.....##.#",
  "..#.....##.#",
  "..##########",
];
var tD = c(
  (Fm) => ({
    w: eK,
    h: eH,
    pal: null,
    buf: Fm,
  }),
  "cardMap",
);
var tm = {
  glyphs: eS,
  suits: eL,
  pips: ev,
  faces: eg,
  faceMoods: t0,
  aceTag: t1,
  pipLayouts: er,
  chips: Object.fromEntries(
    eU.concat([0.5]).map((Fm) => [
      Fm,
      {
        w: 18,
        h: 18,
        pal: ti(Fm),
        rows: tI(Fm),
      },
    ]),
  ),
  chipEdges: Object.fromEntries(
    eU.concat([0.5]).map((Fm) => [
      Fm,
      {
        w: 16,
        h: 5,
        pal: ti(Fm),
        rows: Fm === 0.5 ? tR : tP,
      },
    ]),
  ),
  chipEdgesB: Object.fromEntries(
    eU.concat([0.5]).map((Fm) => [
      Fm,
      {
        w: 16,
        h: 5,
        pal: ti(Fm),
        rows: Fm === 0.5 ? tR : tj,
      },
    ]),
  ),
  chipCaps: Object.fromEntries(
    eU.concat([0.5]).map((Fm) => [
      Fm,
      {
        w: 16,
        h: 7,
        pal: ti(Fm),
        rows: tG(Fm === 0.5),
      },
    ]),
  ),
  suitShown: eq,
  suits9: eh,
  props: tw,
  buttons: Object.fromEntries(tJ.map((Fm) => [Fm, tb(Fm).toMap()])),
  icon: tO,
  flip: [27, 15, 6, 2, 6, 15, 27, 39],
  backs: ["51", "52"],
  cardMap: tD,
};
tm.thankYou = tm.chips[1];
var tx = ["base", "ch1", "ch2", "ch3", "ch4", "ch5", "ut"];
var ta = {
  spade: 0,
  heart: 1,
  diamond: 2,
  club: 3,
};
var tu = new Map();
var tX = "base";
function tS(Fm) {
  let Fx = String(Fm ?? "").toLowerCase();
  if (/^ch[1-4]$/.test(Fx)) {
    return Fx;
  } else if (/^ch5/.test(Fx)) {
    return "ch5";
  } else if (/^ut/.test(Fx)) {
    return "ut";
  } else if (/^[1-5]$/.test(Fx)) {
    return "ch" + Fx;
  } else {
    return "base";
  }
}
c(tS, "deckFor");
var tE = c(
  (Fm) => "assets/blackjack/decks/F_" + (tx.includes(Fm) ? Fm : "base") + ".png",
  "deckPath",
);
function ty(Fm) {
  if (!tx.includes(Fm)) {
    Fm = "base";
  }
  if (tu.has(Fm)) {
    return tu.get(Fm);
  }
  let Fx = {
    img: null,
    ready: false,
    failed: false,
  };
  tu.set(Fm, Fx);
  if (typeof Image === "undefined") {
    Fx.failed = true;
    return Fx;
  }
  try {
    let Fa = new Image();
    Fx.img = Fa;
    Fa.onload = () => {
      Fx.ready = true;
    };
    Fa.onerror = () => {
      Fx.failed = true;
      console.warn("[blackjack] deck sheet failed to load: " + Fm);
    };
    Fa.src = new URL("../" + tE(Fm), import.meta.url).href;
  } catch {
    Fx.failed = true;
  }
  return Fx;
}
c(ty, "loadDeck");
function tq(Fm) {
  tX = tx.includes(Fm) ? Fm : "base";
  ty(tX);
}
c(tq, "setDeck");
function to() {
  for (let Fm of tx) {
    ty(Fm);
  }
}
c(to, "preloadDecks");
function tL(Fm = tX) {
  let Fx = tu.get(Fm);
  return !!Fx && !!Fx.ready;
}
c(tL, "deckReady");
function tz(Fm = tX) {
  let Fx = tu.get(Fm);
  return !!Fx && (!!Fx.ready || !!Fx.failed);
}
c(tz, "deckSettled");
var th = c(() => tX, "currentDeck");
function tv(Fm, Fx) {
  tu.set(Fm, {
    img: Fx,
    ready: !!Fx,
    failed: !Fx,
  });
  tp.clear();
}
c(tv, "setDeckImage");
var tp = new Map();
function tW(Fm, Fx) {
  if (tp.has(Fm)) {
    return tp.get(Fm);
  }
  let Fa = Fx();
  tp.set(Fm, Fa);
  return Fa;
}
c(tW, "cacheGet");
function tT() {
  tp.clear();
  FK.clear();
}
c(tT, "clearCaches");
function tr(Fm) {
  if (Fm) {
    if (Fm.rank === "TICKET") {
      return "T";
    } else {
      return Fm.rank + ":" + Fm.suit;
    }
  } else {
    return "-";
  }
}
c(tr, "cardKey");
var tf = c(() => (tL(tX) ? tX : tL("base") && tz(tX) ? "base" : null), "sheetId");
var tk = c(() => typeof Image === "undefined", "noImages");
var td = c(() => tf() || (tk() ? "p" : null), "deckTag");
function tZ(Fm, Fx, Fa) {
  let Fu = tf();
  let FX = Fu && tu.get(Fu);
  if (!FX || !FX.ready || Fm < 0 || Fx == null) {
    return null;
  } else {
    return tW("D" + Fu + "|" + Fm + "," + Fx + "|" + (Fa ? 1 : 0), () => {
      let FS = eJ(ei, eC);
      if (!FS) {
        return null;
      }
      let FE = FS.getContext("2d");
      FE.imageSmoothingEnabled = false;
      FE.drawImage(FX.img, Fm * ei, Fx * eC, ei, eC, 0, 0, ei, eC);
      if (Fa) {
        FE.globalCompositeOperation = "source-atop";
        FE.fillStyle = "rgba(8,4,20,0.45)";
        FE.fillRect(0, 0, ei, eC);
        FE.globalCompositeOperation = "source-over";
      }
      return FS;
    });
  }
}
c(tZ, "sheetCell");
function tg(Fm, Fx) {
  return tW("P" + Fx, () => {
    if (!Fm) {
      return null;
    }
    let Fa = eJ(ei, eC);
    if (Fa) {
      Fa.getContext("2d").drawImage(Fm, (ei - eK) >> 1, (eC - eH) >> 1);
      return Fa;
    } else {
      return null;
    }
  });
}
c(tg, "padded");
function F0(Fm, Fx, Fa, Fu) {
  if (Fm) {
    let FS = Fm.rank === "TICKET" ? tZ(1, 4, Fa) : tZ(eQ.indexOf(Fm.rank), ta[eo(Fm.suit)], Fa);
    if (FS) {
      return FS;
    }
  }
  if (!tk()) {
    return null;
  }
  let FX = "F" + tr(Fm) + "|" + (Fx | 0) + "|" + (Fa ? 1 : 0) + "|" + (Fu ? 1 : 0);
  return tg(
    tW(FX, () =>
      t8(Fm, Fx, {
        dogear: Fu,
      }).toCanvas(Fa ? eR : eI, 1),
    ),
    FX,
  );
}
c(F0, "faceCanvas");
function F1(Fm, Fx) {
  let Fa = tZ(0, 4, Fx);
  if (Fa) {
    return Fa;
  }
  if (!tk()) {
    return null;
  }
  let Fu = "B" + Fm + "|" + (Fx ? 1 : 0);
  return tg(
    tW(Fu, () => tB(Fm).toCanvas(Fx ? eR : eI, 1)),
    Fu,
  );
}
c(F1, "backCanvas");
function F2(Fm, Fx, Fa) {
  return tW("N" + Fx + "|" + Fa, () => {
    if (!Fm) {
      return null;
    }
    let Fu = eJ(Math.max(1, Fa), eC);
    if (!Fu) {
      return null;
    }
    let FX = Fu.getContext("2d");
    if (Fa <= 2) {
      for (let FS = 0; FS < Fa; FS++) {
        FX.drawImage(Fm, FS === 0 ? 0 : ei - 1, 0, 1, eC, FS, 0, 1, eC);
      }
      return Fu;
    }
    for (let FE = 0; FE < Fa; FE++) {
      let Fy =
        FE === 0
          ? 0
          : FE === Fa - 1
            ? ei - 1
            : Math.min(ei - 2, 1 + Math.floor(((FE - 0.5) / (Fa - 2)) * (ei - 2)));
      FX.drawImage(Fm, Fy, 0, 1, eC, FE, 0, 1, eC);
    }
    return Fu;
  });
}
c(F2, "narrow");
var F3 = c((Fm) => {
  Fm.imageSmoothingEnabled = false;
}, "noSmooth");
function F4(Fm, Fx, Fa, Fu, FX = {}) {
  let FS = Math.max(1, Math.round(FX.scale || 2));
  let FE = !!FX.dim;
  let Fy = FX.back === "52" ? "52" : "51";
  let Fq = FX.react === "grin" ? 1 : FX.react === "wince" ? 2 : 0;
  let Fo = td();
  if (!Fo) {
    return false;
  }
  let FL = Number.isFinite(FX.flip) ? FX.flip : -1;
  let Fz = FX.flipFrame ?? -1;
  if (FL < 0 && Fz >= 0 && Fz < 7) {
    FL = (Fz + 0.5) / 8;
  }
  let Fh = FL >= 0 && FL < 1;
  let Fv = Fh ? FL < 0.5 : FX.faceDown || !Fx;
  let Fp = null;
  let FW = "";
  if (Fv) {
    FW = Fo + "b" + Fy + FE;
    Fp = F1(Fy, FE);
  } else {
    FW = Fo + "f" + tr(Fx) + Fq + FE + (FX.dogear ? "d" : "");
    Fp = F0(Fx, Fq, FE, FX.dogear);
  }
  if (!Fp) {
    return false;
  }
  let FT = ei;
  if (Fh) {
    FT = Math.round(ei * Math.abs(Math.cos(Math.PI * FL)));
    if (FT < 1) {
      return true;
    }
    if (FT < ei) {
      Fp = F2(Fp, FW, FT);
    }
    if (!Fp) {
      return false;
    }
  }
  Fa = Math.round(Fa);
  Fu = Math.round(Fu);
  let Fr = Fa + Math.round(((ei - FT) * FS) / 2);
  F3(Fm);
  if (FX.shadow !== false && FT > 4) {
    let Ff = Math.max(0, FX.lift | 0);
    Fm.fillStyle = "rgba(0,0,0,0.45)";
    Fm.fillRect(
      Fr + FS * (1 + (Ff >> 1)),
      Fu + eC * FS + Ff * FS,
      (FT - 2) * FS,
      FS * (Ff ? 2 : 1),
    );
  }
  Fm.drawImage(Fp, Fr, Fu, FT * FS, eC * FS);
  return true;
}
c(F4, "drawCard");
function F5(
  Fm,
  Fx,
  Fa,
  Fu,
  {
    edge: FX = false,
    cap: FS = false,
    turned: FE = false,
    scale: Fy = 2,
    dim: Fq = false,
    shadow: Fo = true,
  } = {},
) {
  let FL = Fx === 0.5 ? 0.5 : Fx;
  let Fz = (FS ? tm.chipCaps : FX ? (FE ? tm.chipEdgesB : tm.chipEdges) : tm.chips)[FL];
  if (!Fz) {
    return;
  }
  let Fh = eX(Fz, 0, Fq ? eR : eI, 1);
  if (Fh) {
    F3(Fm);
    Fa = Math.round(Fa);
    Fu = Math.round(Fu);
    if (!FX && !FS && Fo) {
      Fm.fillStyle = "rgba(0,0,0,0.5)";
      Fm.fillRect(Fa + Fy * 3, Fu + Fy * 18, Fy * 12, Fy);
    }
    Fm.drawImage(Fh, Fa, Fu, Fh.width * Fy, Fh.height * Fy);
  }
}
c(F5, "drawChip");
var F6 = [0, 1, 0, -1, 0, 1, 1, 0, -1, 0, 0, 1];
function F7(Fm, Fx, Fa, Fu, { scale: FX = 2, dim: FS = false, max: FE = 36, per: Fy = 12 } = {}) {
  if (!Fx || !Fx.length) {
    return;
  }
  Fa = Math.round(Fa);
  Fu = Math.round(Fu);
  let Fq = Math.min(FE, Fx.length, Fy * 3);
  let Fo = Math.min(3, Math.ceil(Fq / Fy));
  Fm.fillStyle = "rgba(0,0,0,0.45)";
  Fm.fillRect(Fa + FX, Fu + FX * 5, (Fo * 17 - 3) * FX, FX);
  for (let FL = 0; FL < Fo; FL++) {
    let Fz = [];
    for (let Fp = FL * Fy; Fp < Math.min(Fq, FL * Fy + Fy); Fp++) {
      Fz.push(Fx[Fp]);
    }
    let Fh = Fa + FL * 17 * FX;
    Fz.forEach((FW, FT) =>
      F5(Fm, FW, Fh + F6[(FT + FL * 5) % 12] * (FX >> 1), Fu - FT * 3 * FX, {
        edge: true,
        turned: !!(FT & 1),
        scale: FX,
        dim: FS,
      }),
    );
    let Fv = Fz.length - 1;
    if (Fv >= 0) {
      F5(Fm, Fz[Fv], Fh + F6[(Fv + FL * 5) % 12] * (FX >> 1), Fu - Fv * 3 * FX - FX * 4, {
        cap: true,
        scale: FX,
        dim: FS,
      });
    }
  }
}
c(F7, "drawStack");
var F8 = c(
  (Fm, Fx = 2, Fa = 12) => (Fm <= 0 ? 0 : (Math.min(Fa, Fm) - 1) * 3 * Fx + Fx * 9),
  "stackHeight",
);
function F9(Fm) {
  let Fx = Math.round(Math.max(0, +Fm || 0) * 2) / 2;
  let Fa = [];
  let Fu = eU.slice().sort((FX, FS) => FS - FX);
  for (let FX of Fu) {
    while (Fx >= FX - 1e-9) {
      Fa.push(FX);
      Fx = Math.round((Fx - FX) * 2) / 2;
    }
  }
  if (Fx >= 0.5) {
    Fa.push(0.5);
  }
  return Fa;
}
c(F9, "chipsFor");
function FB(Fm) {
  Fm = Math.round((+Fm || 0) * 2) / 2;
  let Fx = Fm < 0;
  Fm = Math.abs(Fm);
  let Fa = Math.floor(Fm);
  return (Fx ? "-" : "") + String(Fa).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (Fm - Fa ? ".5" : "");
}
c(FB, "fmtD");
function FF(Fm, Fx, Fa, Fu, FX = "off") {
  let FS = tm.buttons[Fx];
  if (!FS) {
    return;
  }
  let FE = eX(FS, 0, tA[FX] || tA.off, 1);
  if (FE) {
    F3(Fm);
    Fm.drawImage(FE, Math.round(Fa), Math.round(Fu));
  }
}
c(FF, "drawButton");
var FN = {
  w: tU,
  h: tc,
};
var FI = 320;
var FP = 240;
var Fj = 65;
var FR = 160;
var FG = 148;
var Fi = 123;
var FC = 8;
var FY = {
  far: Fj * 2,
  cx: FR * 2,
  rx: FG * 2,
  ry: Fi * 2,
  rail: FC * 2,
  rim: (Fj - 5) * 2,
  dealer: {
    x: 320,
    feet: 162,
  },
  dealerCards: {
    x: 320,
    y: 142,
    step: 16,
  },
  shoe: {
    x: 410,
    y: 102,
  },
  tray: {
    x: 184,
    y: 116,
  },
  rack: {
    x: 256,
    y: 116,
    w: 128,
  },
  rings: [
    {
      x: 246,
      y: 314,
    },
    {
      x: 320,
      y: 314,
    },
    {
      x: 394,
      y: 314,
    },
  ],
  ringR: 20,
  row: {
    cards: 228,
    tag: 286,
    circle: 314,
  },
  you: {
    x: 320,
    top: 330,
  },
  chairY: 376,
  wallet: {
    x: 364,
    y: 370,
  },
  print: {
    pays: 201,
    stands: 216,
  },
  emblem: {
    x: 320,
    y: 176,
  },
  panel: 400,
};
var FK = new Map();
var FH = c(
  (Fm, Fx) => Fx >= Fj && ((Fm + 0.5 - FR) / FG) ** 2 + ((Fx + 0.5 - Fj) / Fi) ** 2 <= 1,
  "inFelt",
);
var Fl = c(
  (Fm, Fx) =>
    Fx >= Fj - 5 && ((Fm + 0.5 - FR) / (FG + FC)) ** 2 + ((Fx + 0.5 - Fj) / (Fi + FC)) ** 2 <= 1,
  "inOuter",
);
var FQ = c(
  (Fm, Fx, Fa) =>
    Fa >= 4 ||
    (Fa === 3
      ? !(Fm & 1) || !(Fx & 1)
      : Fa === 2
        ? ((Fm + Fx) & 1) === 0
        : Fa === 1
          ? (Fm & 1) === 0 && (Fx & 1) === 0
          : false),
  "ditherOn",
);
function Fw(Fm) {
  let Fx = new eO(FI, FP);
  let Fa = eG[Fm] || eG.coin;
  for (let FL = Fj; FL < FP; FL++) {
    for (let Fz = 0; Fz < FI; Fz++) {
      if (Fl(Fz, FL) || Fl(Fz, FL - 1)) {
        continue;
      }
      if ((Fl(Fz, FL - 3) || Fl(Fz - 2, FL - 2) || Fl(Fz + 2, FL - 2)) && ((Fz + FL) & 1) === 0) {
        Fx.set(Fz, FL, "void");
      }
    }
  }
  for (let Fh = 0; Fh < FI; Fh++) {
    let Fv = -1;
    for (let Fp = FP - 1; Fp >= Fj; Fp--) {
      if (Fl(Fh, Fp)) {
        Fv = Fp;
        break;
      }
    }
    if (!(Fv < 0)) {
      Fx.set(Fh, Fv + 1, "rail0");
      Fx.set(Fh, Fv + 2, "void");
    }
  }
  for (let FW = Fj; FW < FP; FW++) {
    for (let FT = 0; FT < FI; FT++) {
      if (!FH(FT, FW)) {
        continue;
      }
      let Fr = Math.hypot((FT + 0.5 - FR) / FG, (FW + 0.5 - Fj) / Fi);
      let Ff = (FT + 0.5 - FR) / 118;
      let Fk = (FW + 0.5 - Fj - 44) / 70;
      let Fd = Math.hypot(Ff, Fk);
      let FZ = Fa[1];
      if (Fd < 0.55) {
        FZ = FQ(FT, FW, Fd < 0.4 ? 4 : 2) ? Fa[2] : Fa[1];
      } else if (Fd < 0.8) {
        FZ = FQ(FT, FW, Fd < 0.68 ? 2 : 1) ? Fa[2] : Fa[1];
      }
      if (Fd < 0.3 && FQ(FT, FW, Fd < 0.18 ? 2 : 1)) {
        FZ = Fa[3];
      }
      if (Fr > 0.9) {
        FZ = FQ(FT, FW, Fr > 0.955 ? 4 : Fr > 0.93 ? 3 : 2) ? Fa[0] : FZ;
      }
      if (FW < Fj + 3) {
        FZ = FW === Fj || FQ(FT, FW, 2) ? Fa[0] : FZ;
      }
      Fx.set(FT, FW, FZ);
    }
  }
  for (let Fg = Fj - 5; Fg < FP; Fg++) {
    for (let N0 = 0; N0 < FI; N0++) {
      if (!Fl(N0, Fg) || FH(N0, Fg)) {
        continue;
      }
      let N1 = 1;
      if (Fg >= Fj) {
        let N3 = FR - N0;
        let N4 = Math.max(Fj + 20, Fj + 60) - Fg;
        let N5 = Math.hypot(N3, N4) || 1;
        for (
          N1 = 1;
          N1 <= 12 && !FH(Math.round(N0 + (N3 / N5) * N1), Math.round(Fg + (N4 / N5) * N1));
          N1++
        );
      } else {
        N1 = Fj - Fg;
      }
      let N2 =
        N1 <= 1 ? "gold2" : N1 === 2 ? "rail3" : N1 <= 4 ? "rail2" : N1 <= 6 ? "rail1" : "rail0";
      if (Fg >= Fj && N1 === 5 && (N0 * 3 + Fg) % 9 === 0) {
        N2 = "rail3";
      }
      if (Fg < Fj && N1 === 5) {
        N2 = "rail0";
      }
      Fx.set(N0, Fg, N2);
    }
  }
  for (let N6 = 0; N6 < FI; N6++) {
    if (Fl(N6, Fj - 5)) {
      Fx.set(N6, Fj - 5, "rail3");
    }
  }
  let Fu = FY.emblem.x / 2;
  let FX = FY.emblem.y / 2;
  for (let N7 = FX - 13; N7 <= FX + 13; N7++) {
    for (let N8 = Fu - 24; N8 <= Fu + 24; N8++) {
      let NF = Math.abs(N8 + 0.5 - Fu) / 24 + Math.abs(N7 + 0.5 - FX) / 13;
      if (NF <= 1 && NF > 0.92) {
        Fx.set(N8, N7, "gold1");
      } else if (NF <= 0.8 && NF > 0.75) {
        Fx.set(N8, N7, Fa[3]);
      }
    }
  }
  ["heart", "spade", "diamond", "club"].forEach((NN, NI) =>
    Fx.stamp(eL[NN], Fu - 13 + NI * 7, FX - 2, {
      "#": "gold1",
    }),
  );
  let FS = FY.rack.x / 2;
  let FE = FY.rack.y / 2;
  let Fy = FY.rack.w / 2;
  for (let NN = FE; NN < FE + 12; NN++) {
    for (let NI = FS; NI < FS + Fy; NI++) {
      Fx.set(NI, NN, "rail0");
    }
  }
  for (let NP = FS; NP < FS + Fy; NP++) {
    Fx.set(NP, FE, "gold1");
    Fx.set(NP, FE + 11, "gold2");
  }
  for (let Nj = FE; Nj < FE + 12; Nj++) {
    Fx.set(FS, Nj, "gold1");
    Fx.set(FS + Fy - 1, Nj, "gold1");
  }
  let Fq = [500, 100, 25, 5, 1, 1, 5, 25, 100, 500];
  let Fo = Math.floor((Fy - 4) / Fq.length);
  Fq.forEach((NR, NG) => {
    let Ni = tF[NR];
    let NC = FS + 2 + NG * Fo;
    for (let NY = FE + 2; NY < FE + 10; NY++) {
      for (let NK = NC; NK < NC + Fo - 1; NK++) {
        Fx.set(NK, NY, NY & 1 ? Ni.d : NK === NC + 1 ? Ni.l : Ni.c);
      }
    }
  });
  return Fx;
}
c(Fw, "tableBuffer");
function FU(Fm, Fx) {
  let Fa = "T" + Fm + "|" + (Fx ? 1 : 0);
  if (FK.has(Fa)) {
    return FK.get(Fa);
  }
  let Fu = Fw(Fm).toCanvas(Fx ? eR : eI, 1);
  FK.set(Fa, Fu);
  return Fu;
}
c(FU, "tableCanvas");
function Fc(Fm, Fx, Fa, { dim: Fu = false } = {}) {
  let FX = FU(Fx || "coin", Fu);
  if (FX) {
    F3(Fm);
    Fm.drawImage(FX, 0, 0, FI * 2, FP * 2);
    FJ(Fm, "tray", FY.tray.x, FY.tray.y, 0, {
      dim: Fu,
    });
    FJ(Fm, "shoe", FY.shoe.x, FY.shoe.y, 0, {
      dim: Fu,
    });
  }
}
c(Fc, "drawFelt");
function FM(Fm, Fx, Fa, Fu, { calm: FX = false } = {}) {
  for (let [FS, FE, Fy] of [
    [60, 280, 0.035],
    [44, 210, 0.035],
    [30, 150, 0.04],
  ]) {
    Fm.fillStyle = "rgba(200,170,255," + Fy + ")";
    Fm.beginPath();
    Fm.moveTo(320 - FS, 0);
    Fm.lineTo(320 + FS, 0);
    Fm.lineTo(320 + FE, FY.far);
    Fm.lineTo(320 - FE, FY.far);
    Fm.closePath();
    Fm.fill();
  }
}
c(FM, "drawRoom");
function FJ(Fm, Fx, Fa, Fu, FX = 0, { scale: FS = 2, dim: FE = false } = {}) {
  let Fy = tw[Fx];
  if (!Fy) {
    return;
  }
  let Fq = eX(Fy, FX, FE ? eR : eI, 1);
  if (Fq) {
    F3(Fm);
    Fm.drawImage(Fq, Math.round(Fa), Math.round(Fu), Fq.width * FS, Fq.height * FS);
  }
}
c(FJ, "drawProp");
function Fb(Fm, Fx, Fa, Fu, FX, FS = 2) {
  let FE = Math.round(Fa);
  Fu = Math.round(Fu);
  Fm.fillStyle = FX;
  for (let Fy of String(Fx)) {
    if (Fy === " ") {
      FE += FS * 2;
      continue;
    }
    let Fq = eS[Fy];
    if (!Fq) {
      FE += FS * 4;
      continue;
    }
    for (let Fo = 0; Fo < 5; Fo++) {
      for (let FL = 0; FL < Fq[Fo].length; FL++) {
        if (Fq[Fo][FL] === "#") {
          Fm.fillRect(FE + FL * FS, Fu + Fo * FS, FS, FS);
        }
      }
    }
    FE += (Fq[0].length + 1) * FS;
  }
  return FE - Math.round(Fa);
}
c(Fb, "drawMicro");
var FV = c((Fm, Fx = 2) => ey(Fm) * Fx, "microWidth");
function FA() {
  return {
    ok: false,
    checks: [],
    results: [],
    reason: "not in the production build",
  };
}
c(FA, "selfTest");
function FO(Fm) {
  return Fw(Fm);
}
c(FO, "roomBuffer");
var FD = {
  faceBuffer: t8,
  backBuffer: tB,
  ticketBuffer: t9,
  roomBuffer: FO,
  tableBuffer: Fw,
  buttonBuffer: tb,
  PB: eO,
};
export {
  o as a,
  k as b,
  g as c,
  B2 as d,
  B4 as e,
  B5 as f,
  B6 as g,
  B8 as h,
  BP as i,
  BG as j,
  Bi as k,
  BY as l,
  BH as m,
  BM as n,
  BL as o,
  Bz as p,
  BW as q,
  Bk as r,
  Bd as s,
  BZ as t,
  Bg as u,
  e0 as v,
  e1 as w,
  e7 as x,
  e8 as y,
  e9 as z,
  eB as A,
  eF as B,
  eN as C,
  eI as D,
  eP as E,
  eR as F,
  eG as G,
  ei as H,
  eC as I,
  eY as J,
  eM as K,
  eu as L,
  eX as M,
  eq as N,
  t2 as O,
  t3 as P,
  t4 as Q,
  tJ as R,
  tO as S,
  tm as T,
  tx as U,
  tS as V,
  tE as W,
  tq as X,
  to as Y,
  tL as Z,
  tz as _,
  th as $,
  tv as aa,
  F4 as ba,
  F5 as ca,
  F7 as da,
  F8 as ea,
  F9 as fa,
  FB as ga,
  FF as ha,
  FN as ia,
  FY as ja,
  Fc as ka,
  FM as la,
  FJ as ma,
  Fb as na,
  FV as oa,
  FA as pa,
  FD as qa,
};
