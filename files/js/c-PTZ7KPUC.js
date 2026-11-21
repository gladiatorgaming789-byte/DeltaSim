import { I as h, c } from "./c-ZEHUSSXN.js";
import { a as l, l as i } from "./c-7Q4J33FN.js";
i();
i();
var f = ["MAX", "300", "200", "100", "50", "MISS"];
var P = [305, 300, 200, 100, 50, 0];
var A = [300, 300, 200, 100, 50, 0];
var p = [320, 300, 200, 100, 50, 0];
var r = ["#ffff00", "#ffffff", "#7ad17a", "#ffa040", "#808080", "#ff4040"];
var R = {
  SS: "#ffff00",
  S: "#e0c060",
  A: "#7ad17a",
  B: "#ffffff",
  C: "#ffa040",
  D: "#ff4040",
  F: "#ff4040",
};
var x = {
  EZ: {
    name: "Easy",
    kind: "reduce",
    mult: 0.5,
    desc: "Wider hit windows, less HP drain.",
    off: ["HR"],
  },
  NF: {
    name: "No Fail",
    kind: "reduce",
    mult: 0.5,
    desc: "You cannot fail.",
    off: [],
  },
  HT: {
    name: "Half Time",
    kind: "reduce",
    mult: 0.5,
    rate: 0.75,
    pitch: false,
    desc: "0.75x speed, pitch kept.",
    off: ["DT", "NC", "DC"],
  },
  DC: {
    name: "Daycore",
    kind: "reduce",
    mult: 0.5,
    rate: 0.75,
    pitch: true,
    desc: "0.75x speed, pitch lowered.",
    off: ["DT", "NC", "HT"],
  },
  HR: {
    name: "Hard Rock",
    kind: "raise",
    mult: 1,
    desc: "Tighter hit windows, more HP drain.",
    off: ["EZ"],
  },
  DT: {
    name: "Double Time",
    kind: "raise",
    mult: 1,
    rate: 1.5,
    pitch: false,
    desc: "1.5x speed, pitch kept.",
    off: ["HT", "DC", "NC"],
  },
  NC: {
    name: "Nightcore",
    kind: "raise",
    mult: 1,
    rate: 1.5,
    pitch: true,
    desc: "1.5x speed, pitch raised.",
    off: ["HT", "DC", "DT"],
  },
  HD: {
    name: "Hidden",
    kind: "raise",
    mult: 1,
    desc: "Notes fade out before they reach the keys.",
    off: ["FI"],
  },
  FI: {
    name: "Fade In",
    kind: "raise",
    mult: 1,
    desc: "Notes appear late, near the keys.",
    off: ["HD"],
  },
  MR: {
    name: "Mirror",
    kind: "conv",
    mult: 1,
    desc: "The chart flipped left to right.",
    off: [],
  },
  CS: {
    name: "Constant Speed",
    kind: "conv",
    mult: 1,
    desc: "Ignore scroll speed changes (SV).",
    off: [],
  },
  AT: {
    name: "Autoplay",
    kind: "auto",
    mult: 1,
    desc: "Watch a perfect play. Not scored.",
    off: [],
  },
};
var s = ["EZ", "NF", "HT", "DC", "HR", "DT", "NC", "HD", "FI", "MR", "CS", "AT"];
function t(nu) {
  let nE = [];
  if (!Array.isArray(nu)) {
    return nE;
  }
  for (let nL of s) {
    if (nu.includes(nL) && !nE.some((ng) => x[ng].off.includes(nL))) {
      nE.push(nL);
    }
  }
  return nE;
}
l(t, "cleanMods");
function v(nu) {
  let nE = t(nu);
  let nL = 1;
  let ng = false;
  let nm = 1;
  for (let nS of nE) {
    let nZ = x[nS];
    nm *= nZ.mult;
    if (nZ.rate) {
      nL = nZ.rate;
      ng = !!nZ.pitch;
    }
  }
  return {
    mods: nE,
    rate: nL,
    pitch: ng,
    mult: nm,
    winMul: nE.includes("HR") ? 1 / 1.4 : nE.includes("EZ") ? 1.4 : 1,
    hpMul: nE.includes("HR") ? 1.4 : nE.includes("EZ") ? 0.5 : 1,
    noFail: nE.includes("NF"),
    mirror: nE.includes("MR"),
    constant: nE.includes("CS"),
    auto: nE.includes("AT"),
    hidden: nE.includes("HD"),
    fadeIn: nE.includes("FI"),
  };
}
l(v, "modInfo");
var D = l((nu) => {
  let nE = t(nu);
  if (nE.length) {
    return nE.join("");
  } else {
    return "NM";
  }
}, "modsLabel");
function a(nu, nE = 1, nL = 1) {
  let ng = Math.max(0, Math.min(10, Number(nu) || 0));
  let nm = nE * nL;
  return [
    nm * 16,
    (64 - ng * 3) * nm,
    (97 - ng * 3) * nm,
    (127 - ng * 3) * nm,
    (151 - ng * 3) * nm,
    (188 - ng * 3) * nm,
  ];
}
l(a, "windows");
function y(nu, nE) {
  if (nE) {
    return "F";
  } else if (nu >= 1) {
    return "SS";
  } else if (nu >= 0.95) {
    return "S";
  } else if (nu >= 0.9) {
    return "A";
  } else if (nu >= 0.8) {
    return "B";
  } else if (nu >= 0.7) {
    return "C";
  } else {
    return "D";
  }
}
l(y, "gradeOf");
var o = Math.log(4);
var k = Math.log(400) / o;
var u = l((nu) => Math.min(Math.max(0.5, Math.log(nu) / o), k), "comboMul");
function E(nu, nE, nL, ng, nm) {
  let nS = new Int32Array(nm).fill(-1);
  let nZ = 0;
  for (let nN = 0; nN < ng; nN++) {
    let nj = nL[nN];
    let nM = nS[nj];
    if (nM >= 0 && nE[nM] > 0 && nE[nM] > nu[nN] - 20) {
      let Q0 = nu[nN] - nu[nM];
      let Q1 = nu[nN] - Math.min(60, Math.max(10, Q0 / 2));
      nE[nM] = Q1 - nu[nM] >= 20 ? Math.round(Q1) : 0;
      nZ++;
    }
    nS[nj] = nN;
  }
  return nZ;
}
l(E, "fixOverlaps");
var L = {
  1: ["Space"],
  2: ["KeyF", "KeyJ"],
  3: ["KeyF", "Space", "KeyJ"],
  4: ["KeyD", "KeyF", "KeyJ", "KeyK"],
  5: ["KeyD", "KeyF", "Space", "KeyJ", "KeyK"],
  6: ["KeyS", "KeyD", "KeyF", "KeyJ", "KeyK", "KeyL"],
  7: ["KeyS", "KeyD", "KeyF", "Space", "KeyJ", "KeyK", "KeyL"],
  8: ["KeyA", "KeyS", "KeyD", "KeyF", "KeyJ", "KeyK", "KeyL", "Semicolon"],
  9: ["KeyA", "KeyS", "KeyD", "KeyF", "Space", "KeyJ", "KeyK", "KeyL", "Semicolon"],
  10: ["KeyA", "KeyS", "KeyD", "KeyF", "KeyV", "KeyN", "KeyJ", "KeyK", "KeyL", "Semicolon"],
};
var m = {
  1: [[0, 1, 2, 3, 4, 5]],
  2: [
    [14, 4, 6],
    [1, 5, 7],
  ],
  3: [
    [14, 4],
    [13, 0, 6, 7],
    [1, 5],
  ],
  4: [
    [14, 4],
    [13, 6],
    [2, 7],
    [1, 5],
  ],
  5: [[14, 4], [13], [6, 7, 0], [2], [1, 5]],
  6: [[4], [14], [13], [2], [1], [5]],
  7: [[4], [14], [13], [6, 7, 0], [2], [1], [5]],
};
var S = class Q2 {
  constructor(nu, nE = {}) {
    let nL = nE.mods
      ? v(nE.mods)
      : {
          ...v([]),
          ...nE,
        };
    let ng = (this.keys = Math.max(1, Math.min(10, nu.keys || 4)));
    let nm = nu.count;
    this.chart = nu;
    this.n = nm;
    this.mi = nL;
    this.time = nu.time;
    this.lane = new Uint8Array(nm);
    for (let Q0 = 0; Q0 < nm; Q0++) {
      this.lane[Q0] = nL.mirror ? ng - 1 - nu.lane[Q0] : nu.lane[Q0];
    }
    this.end = Int32Array.from(nu.end);
    this.overlapsCut = E(this.time, this.end, this.lane, nm, ng);
    this.rate = nL.rate || 1;
    this.od = nE.od ?? nu.od;
    this.win = a(this.od, nL.winMul || 1, this.rate);
    this.twin = this.win.map((Q1) => Q1 * 1.5);
    this.hpDrain = Math.max(0, Math.min(10, (nE.hp ?? nu.hp ?? 5) * (nL.hpMul || 1)));
    this.noFail = !!nL.noFail;
    this.mult = nL.mult || 1;
    let nS = this.hpDrain;
    this.hpDelta = [0.012, 0.01, 0.004, 0, -(0.01 + nS * 0.002), -(0.04 + nS * 0.006)];
    this.head = new Int8Array(nm).fill(-1);
    this.tail = new Int8Array(nm).fill(-1);
    this.state = new Uint8Array(nm);
    this.capped = new Uint8Array(nm);
    let nZ = new Int32Array(ng);
    let nN = 0;
    for (let Q1 = 0; Q1 < nm; Q1++) {
      nZ[this.lane[Q1]]++;
      if (this.end[Q1] > 0) {
        nN++;
      }
    }
    this.laneNotes = [];
    let nj = new Int32Array(ng);
    for (let Q3 = 0; Q3 < ng; Q3++) {
      this.laneNotes.push(new Int32Array(nZ[Q3]));
    }
    for (let Q4 = 0; Q4 < nm; Q4++) {
      let Q5 = this.lane[Q4];
      this.laneNotes[Q5][nj[Q5]++] = Q4;
    }
    this.laneNext = new Int32Array(ng);
    this.holding = new Int32Array(ng).fill(-1);
    this.broken = new Int32Array(ng).fill(-1);
    this.down = new Uint8Array(ng);
    this.presses = new Int32Array(ng);
    this.holds = nN;
    this.total = nm + nN;
    this.counts = new Int32Array(6);
    this.judged = 0;
    this.worth = 0;
    this.worthV1 = 0;
    this.worthPP = 0;
    this.comboPortion = 0;
    let nM = 0;
    for (let Q6 = 1; Q6 <= this.total; Q6++) {
      nM += u(Q6) * 305;
    }
    this.maxComboPortion = Math.max(1, nM);
    this.combo = 0;
    this.maxCombo = 0;
    this.breaks = 0;
    this.hp = 1;
    this.failed = false;
    this.failAt = -1;
    this.wouldFail = false;
    this.errN = 0;
    this.errMs = new Float32Array(this.total);
    this.errAt = new Float32Array(this.total);
    this.errJ = new Uint8Array(this.total);
    this.errLane = new Uint8Array(this.total);
    this.lastJ = -1;
    this.lastJAt = -1000000000;
    this.lastErr = 0;
    this.laneHitAt = new Float64Array(ng).fill(-1000000000);
    this.laneHitJ = new Int8Array(ng).fill(-1);
    this.laneDownAt = new Float64Array(ng).fill(-1000000000);
    this.missAt = -1000000000;
    this.comboAt = -1000000000;
    this.onJudge = null;
    this.lastT = -1000000000;
    this.maxErr = this.win[4];
  }
  get accuracy() {
    if (this.judged) {
      return this.worth / (this.judged * 305);
    } else {
      return 1;
    }
  }
  get accuracyV1() {
    if (this.judged) {
      return this.worthV1 / (this.judged * 300);
    } else {
      return 1;
    }
  }
  get score() {
    let nu = this.accuracy;
    let nE =
      (this.comboPortion * 10000) / this.maxComboPortion +
      Math.pow(nu, 2 + nu * 2) * 990000 * (this.judged / Math.max(1, this.total));
    return Math.round(nE * this.mult);
  }
  get grade() {
    return y(this.accuracy, this.failed);
  }
  get complete() {
    return this.judged >= this.total;
  }
  get fullCombo() {
    return this.complete && this.counts[5] === 0 && this.breaks === 0;
  }
  classify(nu, nE = false) {
    let nL = nE ? this.twin : this.win;
    for (let ng = 0; ng < 5; ng++) {
      if (nu <= nL[ng]) {
        return ng;
      }
    }
    return -1;
  }
  nextIn(nu) {
    let nE = this.laneNotes[nu];
    let nL = this.laneNext[nu];
    while (nL < nE.length && this.head[nE[nL]] >= 0) {
      nL++;
    }
    this.laneNext[nu] = nL;
    if (nL < nE.length) {
      return nE[nL];
    } else {
      return -1;
    }
  }
  judge(nu, nE, nL, ng, nm) {
    let nS = this.lane[nu];
    this.counts[nE]++;
    this.judged++;
    this.worth += P[nE];
    this.worthV1 += A[nE];
    this.worthPP += p[nE];
    if (nE === 5) {
      this.combo = 0;
      this.missAt = nm;
    } else {
      this.combo++;
      if (this.combo > this.maxCombo) {
        this.maxCombo = this.combo;
      }
      this.comboPortion += P[nE] * u(this.combo);
      this.comboAt = nm;
    }
    if (this.errN < this.errMs.length) {
      let nZ = this.errN++;
      this.errMs[nZ] = nE === 5 ? NaN : nL;
      this.errAt[nZ] = ng ? this.end[nu] : this.time[nu];
      this.errJ[nZ] = nE;
      this.errLane[nZ] = nS;
    }
    this.hp = Math.min(1, this.hp + this.hpDelta[nE]);
    if (this.hp <= 0) {
      this.hp = 0;
      if (this.noFail) {
        this.wouldFail = true;
      } else if (!this.failed) {
        this.failed = true;
        this.failAt = nm;
      }
    }
    this.lastJ = nE;
    this.lastJAt = nm;
    this.lastErr = nL;
    if (nE !== 5) {
      this.laneHitAt[nS] = nm;
      this.laneHitJ[nS] = nE;
    }
    if (this.onJudge) {
      this.onJudge(nE, nS, nL, ng, nm);
    }
  }
  missNote(nu, nE) {
    this.head[nu] = 5;
    this.judge(nu, 5, 0, false, nE);
    if (this.end[nu] > 0) {
      this.tail[nu] = 5;
      this.judge(nu, 5, 0, true, nE);
    }
    this.state[nu] = 3;
  }
  update(nu) {
    if (this.failed) {
      return;
    }
    this.lastT = nu;
    let nE = this.win[4];
    for (let nL = 0; nL < this.keys; nL++) {
      let ng = this.holding[nL];
      if (ng >= 0 && nu >= this.end[ng]) {
        this.holding[nL] = -1;
        let nS = this.capped[ng] ? 4 : 0;
        this.tail[ng] = nS;
        this.state[ng] = 2;
        this.judge(ng, nS, 0, true, this.end[ng]);
        if (this.failed) {
          return;
        }
      }
      let nm = this.broken[nL];
      if (
        nm >= 0 &&
        nu > this.end[nm] + this.twin[4] &&
        ((this.broken[nL] = -1),
        (this.tail[nm] = 5),
        (this.state[nm] = 3),
        this.judge(nm, 5, 0, true, this.end[nm] + this.twin[4]),
        this.failed)
      ) {
        return;
      }
      while (true) {
        let nZ = this.nextIn(nL);
        if (nZ < 0 || nu - this.time[nZ] <= nE) {
          break;
        }
        this.missNote(nZ, this.time[nZ] + nE);
        if (this.failed) {
          return;
        }
      }
    }
  }
  press(nu, nE) {
    if (nu < 0 || nu >= this.keys || this.failed || (this.update(nE), this.down[nu])) {
      return -1;
    }
    this.down[nu] = 1;
    this.laneDownAt[nu] = nE;
    this.presses[nu]++;
    let nL = this.broken[nu];
    if (nL >= 0 && nE < this.end[nL]) {
      this.broken[nu] = -1;
      this.holding[nu] = nL;
      this.state[nL] = 1;
      this.capped[nL] = 1;
      return -1;
    }
    let ng = this.nextIn(nu);
    if (ng < 0) {
      return -1;
    }
    let nm = nE - this.time[ng];
    if (nm < -this.win[5]) {
      return -1;
    }
    if (nm < -this.win[4]) {
      this.missNote(ng, nE);
      return 5;
    }
    let nS = this.classify(Math.abs(nm));
    if (nS < 0) {
      return -1;
    } else {
      this.head[ng] = nS;
      this.judge(ng, nS, nm, false, nE);
      if (this.end[ng] > 0) {
        this.state[ng] = 1;
        this.holding[nu] = ng;
      } else {
        this.state[ng] = 2;
      }
      return nS;
    }
  }
  release(nu, nE) {
    if (nu < 0 || nu >= this.keys) {
      return -1;
    }
    this.update(nE);
    this.down[nu] = 0;
    let nL = this.holding[nu];
    if (nL < 0 || this.failed) {
      return -1;
    }
    this.holding[nu] = -1;
    let ng = nE - this.end[nL];
    if (ng < -this.twin[4]) {
      this.state[nL] = 4;
      this.broken[nu] = nL;
      this.breaks++;
      this.combo = 0;
      this.missAt = nE;
      return -2;
    }
    let nm = Math.max(0, this.classify(Math.abs(ng), true));
    if (this.capped[nL]) {
      nm = Math.max(nm, 4);
    }
    this.tail[nL] = nm;
    this.state[nL] = 2;
    this.judge(nL, nm, ng, true, nE);
    return nm;
  }
  stats() {
    let nu = 0;
    let nE = 0;
    let nL = 0;
    let ng = 0;
    let nm = 0;
    for (let nN = 0; nN < this.errN; nN++) {
      let nj = this.errMs[nN] / this.rate;
      if (nj === nj) {
        nu++;
        nE += nj;
        nL += nj * nj;
        if (nj < 0) {
          ng++;
        } else if (nj > 0) {
          nm++;
        }
      }
    }
    let nS = nu ? nE / nu : 0;
    let nZ = nu > 1 ? Math.sqrt(Math.max(0, nL / nu - nS * nS)) : 0;
    return {
      hits: nu,
      mean: nS,
      ur: nZ * 10,
      early: ng,
      late: nm,
    };
  }
  result() {
    let nu = this.stats();
    let nE = this.judged ? this.worthPP / (this.judged * 320) : 1;
    return {
      score: this.score,
      accuracy: this.accuracy,
      accuracyV1: this.accuracyV1,
      grade: this.grade,
      maxCombo: this.maxCombo,
      counts: Array.from(this.counts),
      total: this.total,
      judged: this.judged,
      failed: this.failed,
      breaks: this.breaks,
      wouldFail: this.wouldFail,
      fullCombo: this.fullCombo,
      perfect: this.complete && this.accuracy >= 1,
      mean: nu.mean,
      ur: nu.ur,
      early: nu.early,
      late: nu.late,
      acc320: nE,
      mods: this.mi.mods || [],
    };
  }
};
l(S, "ManiaPlay");
var M = S;
function J0(nu, nE = null, nL = null) {
  let ng = nu.keys || 4;
  let nm = nL ? nL.lane : nu.lane;
  let nS = nL ? nL.end : nu.end;
  let nZ = [];
  let nN = new Float64Array(ng).fill(-1000000000);
  let nj = new Float64Array(nu.count).fill(Infinity);
  let nM = new Float64Array(ng).fill(Infinity);
  for (let Q0 = nu.count - 1; Q0 >= 0; Q0--) {
    let Q1 = nm[Q0];
    nj[Q0] = nM[Q1];
    nM[Q1] = nu.time[Q0];
  }
  for (let Q3 = 0; Q3 < nu.count; Q3++) {
    let Q4 = nm[Q3];
    let Q5 = nE ? nE(Q3) : 0;
    if (Q5 === null) {
      continue;
    }
    let Q6 = Math.max(nu.time[Q3] + Q5, nN[Q4] + 1);
    let Q7 = nS[Q3] > 0 ? nS[Q3] : Math.min(Q6 + 40, (Q6 + nj[Q3]) / 2);
    nZ.push([Q6, Q4, 1], [Math.max(Q6 + 1, Q7), Q4, 0]);
    nN[Q4] = Math.max(Q6 + 1, Q7);
  }
  nZ.sort((Q8, Q9) => Q8[0] - Q9[0] || Q8[2] - Q9[2]);
  return nZ;
}
l(J0, "autoEvents");
var J1 = class QJ {
  constructor(nu, nE = false) {
    let nL = [];
    let ng = [];
    let nm = nE ? [] : nu.timing || [];
    let nS = nm.filter((Q0) => Q0.uninherited && Q0.beatLength > 0);
    let nZ = nu.bpm && nu.bpm.main > 0 ? 60000 / nu.bpm.main : nS.length ? nS[0].beatLength : 500;
    let nN = nS.length ? nS[0].beatLength : nZ;
    let nj = 1;
    for (let Q0 = 0; Q0 < nm.length; Q0++) {
      let Q1 = nm[Q0];
      if (Q1.uninherited && Q1.beatLength > 0) {
        nN = Q1.beatLength;
        nj = 1;
      } else if (Q1.beatLength < 0) {
        nj = Math.max(0.01, Math.min(10, -100 / Q1.beatLength));
      }
      let Q3 = (nZ / nN) * nj;
      if (nL.length && nL[nL.length - 1] === Q1.t) {
        ng[ng.length - 1] = Q3;
      } else if (!ng.length || ng[ng.length - 1] !== Q3) {
        nL.push(Q1.t);
        ng.push(Q3);
      }
    }
    if (!nL.length) {
      nL.push(0);
      ng.push(1);
    }
    let nM = nL.length;
    this.t0 = Float64Array.from(nL);
    this.sp = Float64Array.from(ng);
    this.p0 = new Float64Array(nM);
    for (let Q4 = 1; Q4 < nM; Q4++) {
      this.p0[Q4] = this.p0[Q4 - 1] + (this.t0[Q4] - this.t0[Q4 - 1]) * this.sp[Q4 - 1];
    }
    this.n = nM;
    this.i = 0;
    this.constant = nE || (nM === 1 && ng[0] === 1);
  }
  pos(nu) {
    let nE = this.t0;
    let nL = this.i;
    if (nu < nE[nL]) {
      while (nL > 0 && nu < nE[nL]) {
        nL--;
      }
    } else {
      while (nL + 1 < this.n && nu >= nE[nL + 1]) {
        nL++;
      }
    }
    this.i = nL;
    return this.p0[nL] + (nu - nE[nL]) * this.sp[nL];
  }
  posAt(nu) {
    let nE = 0;
    let nL = this.n - 1;
    while (nE < nL) {
      let ng = (nE + nL + 1) >> 1;
      if (this.t0[ng] <= nu) {
        nE = ng;
      } else {
        nL = ng - 1;
      }
    }
    return this.p0[nE] + (nu - this.t0[nE]) * this.sp[nE];
  }
  speedAt(nu) {
    let nE = 0;
    let nL = this.n - 1;
    while (nE < nL) {
      let ng = (nE + nL + 1) >> 1;
      if (this.t0[ng] <= nu) {
        nE = ng;
      } else {
        nL = ng - 1;
      }
    }
    return this.sp[nE];
  }
  notePositions(nu) {
    let nE = nu.n;
    let nL = new Float64Array(nE);
    let ng = new Float64Array(nE);
    for (let nm = 0; nm < nE; nm++) {
      nL[nm] = this.posAt(nu.time[nm]);
      ng[nm] = nu.end[nm] > 0 ? this.posAt(nu.end[nm]) : nL[nm];
    }
    return {
      head: nL,
      tail: ng,
    };
  }
};
l(J1, "ScrollMap");
var J2 = J1;
function J3(nu, nE, nL, ng) {
  let nm = nu.timing;
  let nS = 0;
  if (!nm || !nm.length) {
    return 0;
  }
  let nZ = (nu._red ||= nm.filter((nN) => nN.uninherited && nN.beatLength > 0));
  for (let nN = 0; nN < nZ.length && nS < ng.length; nN++) {
    let nj = nZ[nN];
    let nM = nN + 1 < nZ.length ? nZ[nN + 1].t : Infinity;
    if (nM < nE || nj.t > nL) {
      continue;
    }
    let Q0 = nj.beatLength;
    while (Q0 < 150) {
      Q0 *= 2;
    }
    while (Q0 > 2000) {
      Q0 /= 4;
    }
    let Q1 = Math.max(nj.t, nE);
    let Q3 = Math.ceil((Q1 - nj.t) / Q0);
    let Q4 = Math.max(1, Math.round(((nj.meter || 4) * nj.beatLength) / Q0));
    for (let Q5 = Q3; ; Q5++) {
      let Q6 = nj.t + Q5 * Q0;
      if (Q6 >= nM || Q6 > nL || nS >= ng.length) {
        break;
      }
      ng[nS++] = Q5 % Q4 === 0 ? -Q6 - 0.001 : Q6;
    }
  }
  return nS;
}
l(J3, "beatLines");
function J4(nu, nE = 1) {
  let nL = nu.count;
  let ng = nu.keys || 4;
  if (nL < 2) {
    return 0;
  }
  let nm = nu.time;
  let nS = nu.end;
  let nZ = nu.lane;
  let nN = 400;
  let nj = new Float64Array(ng);
  let nM = new Float64Array(ng);
  let Q0 = new Float64Array(ng);
  let Q1 = 1;
  let Q3 = 0;
  let Q4 = 0;
  let Q5 = [];
  let Q6 = 0;
  let Q7 = 0;
  let Q8 = (Qn, QQ, QB) => Qn * Math.pow(QB, QQ / 1000);
  for (let Qn = 1; Qn < nL; Qn++) {
    let QQ = nm[Qn] / nE;
    let QB = (nS[Qn] > 0 ? nS[Qn] : nm[Qn]) / nE;
    let QG = nZ[Qn];
    let QV = (nm[Qn] - nm[Qn - 1]) / nE;
    for (Qn === 1 && (Q6 = Math.ceil(QQ / nN) * nN); QQ > Q6;) {
      Q5.push(Q7);
      Q7 = Q4;
      Q6 += nN;
    }
    let QT = false;
    let QU = Math.abs(QB - QQ);
    let Qw = 1;
    let Qb = 0;
    for (let Qd = 0; Qd < ng; Qd++) {
      QT = QT || (nM[Qd] > QQ + 1 && QB > nM[Qd] + 1);
      if (nM[Qd] > QB + 1) {
        Qw = 1.25;
      }
      QU = Math.min(QU, Math.abs(QB - nM[Qd]));
    }
    if (QT) {
      Qb = 1 / (1 + Math.exp((30 - QU) * 0.5));
    }
    Q0[QG] = Q8(Q0[QG], QQ - nj[QG], 0.125) + Qw * 2;
    Q3 = QV <= 1 ? Math.max(Q3, Q0[QG]) : Q0[QG];
    Q1 = Q8(Q1, QV, 0.3) + (1 + Qb) * Qw;
    nj[QG] = QQ;
    nM[QG] = QB;
    Q4 = Q3 + Q1;
    if (Q4 > Q7) {
      Q7 = Q4;
    }
  }
  Q5.push(Q7);
  Q5.sort((QW, Qh) => Qh - QW);
  let Q9 = 0;
  let QO = 1;
  for (let QW of Q5) {
    if (QW <= 0) {
      break;
    }
    Q9 += QW * QO;
    QO *= 0.9;
  }
  return Q9 * 0.018;
}
l(J4, "starRating");
function J5(nu) {
  if (nu < 2) {
    return "#ffffff";
  } else if (nu < 3.3) {
    return "#7ad17a";
  } else if (nu < 4.5) {
    return "#ffff00";
  } else if (nu < 5.6) {
    return "#ffa040";
  } else if (nu < 7) {
    return "#ff4040";
  } else {
    return "#ff00ff";
  }
}
l(J5, "starColor");
function J6(nu, nE, nL, ng = []) {
  let nm =
    Math.pow(Math.max(nu - 0.15, 0.05), 2.2) *
    8 *
    Math.max(0, nE * 5 - 4) *
    (1 + Math.min(1, nL / 1500) * 0.1);
  if (ng.includes("NF")) {
    nm *= 0.75;
  }
  if (ng.includes("EZ")) {
    nm *= 0.5;
  }
  return nm;
}
l(J6, "ppEstimate");
async function J7(nu, nE, nL, ng = {}) {
  let nm = nu[0].length;
  let nS = nu.length;
  let nZ = Math.round(nL * 0.015) * 2;
  let nN = nZ >> 1;
  let nj = nN * nE;
  let nM = Math.round(nL * 0.005);
  let Q0 = (nZ / 2) * (nE - 1);
  let Q1 = Math.max(1, Math.floor(nm / nE));
  let Q3 = [];
  for (let QQ = 0; QQ < nS; QQ++) {
    Q3.push(new Float32Array(Q1 + nZ));
  }
  let Q4 = new Float32Array(nZ);
  for (let QB = 0; QB < nZ; QB++) {
    Q4[QB] = 0.5 - Math.cos((Math.PI * 2 * QB) / nZ) * 0.5;
  }
  let Q5 = nu[0];
  let Q6 = nS > 1 ? nu[1] : null;
  let Q7 = nN;
  let Q8 = 0;
  let Q9 = Math.ceil(Q1 / nN) + 1;
  let QO = ng.slice || 400;
  let Qn = (QG, QV, QT) => {
    let QU = 0;
    let Qw = 0;
    let Qb = 0;
    for (let Qd = 0; Qd < Q7; Qd += QT) {
      let QW = QG + Qd;
      let Qh = QV + Qd;
      let Qc = QW < nm && QW >= 0 ? (Q6 ? Q5[QW] + Q6[QW] : Q5[QW]) : 0;
      let Qz = Qh < nm && Qh >= 0 ? (Q6 ? Q5[Qh] + Q6[Qh] : Q5[Qh]) : 0;
      QU += Qc * Qz;
      Qw += Qc * Qc;
      Qb += Qz * Qz;
    }
    return QU / Math.sqrt(Qw * Qb + 1e-9);
  };
  for (let QG = 0; QG < Q9; QG++) {
    let QV = Math.round(QG * nj + Q0);
    let QT = QV;
    if (QG > 0) {
      let Qw = Q8 + nN;
      let Qb = 0;
      let Qd = -2;
      for (let Qh = -nM; Qh <= nM; Qh += 8) {
        let Qc = Qn(QV + Qh, Qw, 8);
        if (Qc > Qd) {
          Qd = Qc;
          Qb = Qh;
        }
      }
      let QW = Qb;
      for (let Qz = QW - 7; Qz <= QW + 7; Qz++) {
        if (Qz < -nM || Qz > nM) {
          continue;
        }
        let Ql = Qn(QV + Qz, Qw, 2);
        if (Ql > Qd) {
          Qd = Ql;
          Qb = Qz;
        }
      }
      QT = QV + Qb;
    }
    QT = Math.max(0, Math.min(nm - 1, QT));
    let QU = QG * nN;
    for (let QX = 0; QX < nS; QX++) {
      let QY = nu[QX];
      let Qf = Q3[QX];
      let QK = Math.min(nZ, nm - QT, Qf.length - QU);
      for (let QP = 0; QP < QK; QP++) {
        Qf[QU + QP] += QY[QT + QP] * Q4[QP];
      }
    }
    Q8 = QT;
    if (ng.onProgress && QG % 200 === 0) {
      ng.onProgress(QG / Q9);
    }
    if (QG % QO === QO - 1) {
      await new Promise((QI) => setTimeout(QI, 0));
    }
  }
  return Q3.map((QI) => QI.subarray(0, Q1));
}
l(J7, "timeStretch");
var J8 = ["DELTARUNE", "BARS", "CIRCLE", "DIAMOND", "ARROWS"];
var J9 = ["DELTARUNE", "PARTY", "SOUL", "MONO"];
var JJ = {
  DELTARUNE: {
    O: "#01ea9e",
    E: "#17eeff",
    S: "#ffff00",
  },
  PARTY: {
    O: "#00ffff",
    E: "#ff00ff",
    S: "#ffff00",
  },
  MONO: {
    O: "#ffffff",
    E: "#a0a0a0",
    S: "#ffff00",
  },
};
var JO = ["#ff0000", "#fca600", "#ffff00", "#00c000", "#42fcff", "#3c6cff", "#d535d9"];
var Jn = {
  white: "#ffffff",
  gray: "#808080",
  dk: "#404040",
  faint: "#303030",
  yellow: "#ffff00",
  orange: "#ffa040",
  maroon: "#800000",
  purple: "#332033",
  red: "#ff4040",
  cyan: "#00ffff",
  green: "#7ad17a",
  gold: "#e0c060",
  light: "#c0c0c0",
};
function JQ(nu, nE, nL, ng, nm = Jn.white, nS = "fnt_main", nZ = "left") {
  nu.draw_set_font(nS);
  nu.draw_set_halign(nZ);
  nu.draw_text(Math.round(nE), Math.round(nL), ng, nm);
  nu.draw_set_halign("left");
}
l(JQ, "txt");
var JB = new Map();
function JG(nu, nE, nL, ng = "fnt_main") {
  nE = String(nE);
  let nm = ng + "|" + nL + "|" + nE;
  let nS = JB.get(nm);
  if (nS !== undefined) {
    return nS;
  }
  if (nu.string_width(nE, ng) <= nL) {
    nS = nE;
  } else {
    let nZ = 0;
    let nN = nE.length;
    while (nZ < nN) {
      let nj = (nZ + nN + 1) >> 1;
      if (nu.string_width(nE.slice(0, nj) + "...", ng) <= nL) {
        nZ = nj;
      } else {
        nN = nj - 1;
      }
    }
    nS = nE.slice(0, nZ) + "...";
  }
  if (JB.size > 3000) {
    JB.clear();
  }
  JB.set(nm, nS);
  return nS;
}
l(JG, "fit");
function JV(nu, nE, nL, ng, nm, nS = 0, nZ = 1) {
  let nN = nu.ctx;
  nN.globalAlpha = nZ;
  nN.fillStyle = "#000000";
  nN.fillRect(nE + 6, nL + 6, ng - nE - 12, nm - nL - 12);
  nN.globalAlpha = 1;
  let nj = Math.max(0, ng - nE - 63);
  let nM = Math.max(0, nm - nL - 63);
  let Q0 = "#ffffff";
  if (nj > 0) {
    nu.draw_sprite_ext("spr_textbox_top", 0, nE + 32, nL, nj, 2, 0, Q0, 1);
    nu.draw_sprite_ext("spr_textbox_top", 0, nE + 32, nm + 1, nj, -2, 0, Q0, 1);
  }
  if (nM > 0) {
    nu.draw_sprite_ext("spr_textbox_left", 0, ng + 1, nL + 32, -2, nM, 0, Q0, 1);
    nu.draw_sprite_ext("spr_textbox_left", 0, nE, nL + 32, 2, nM, 0, Q0, 1);
  }
  let Q1 = Math.floor(nS / 100) % 8;
  nu.draw_sprite_ext("spr_textbox_topleft", Q1, nE, nL, 2, 2, 0, Q0, 1);
  nu.draw_sprite_ext("spr_textbox_topleft", Q1, ng + 1, nL, -2, 2, 0, Q0, 1);
  nu.draw_sprite_ext("spr_textbox_topleft", Q1, nE, nm + 1, 2, -2, 0, Q0, 1);
  nu.draw_sprite_ext("spr_textbox_topleft", Q1, ng + 1, nm + 1, -2, -2, 0, Q0, 1);
}
l(JV, "darkbox");
function JT(nu, nE, nL, ng, nm, nS = Jn.dk, nZ = "#000000", nN = 1) {
  nE = Math.round(nE);
  nL = Math.round(nL);
  ng = Math.round(ng);
  nm = Math.round(nm);
  if (nZ) {
    nu.globalAlpha = nN;
    nu.fillStyle = nZ;
    nu.fillRect(nE, nL, ng, nm);
    nu.globalAlpha = 1;
  }
  if (nS) {
    nu.fillStyle = nS;
    nu.fillRect(nE, nL, ng, 1);
    nu.fillRect(nE, nL + nm - 1, ng, 1);
    nu.fillRect(nE, nL, 1, nm);
    nu.fillRect(nE + ng - 1, nL, 1, nm);
  }
}
l(JT, "plainBox");
function JU(nu, nE, nL) {
  nu.draw_sprite_ext("spr_heart", 0, Math.round(nE), Math.round(nL), 1, 1, 0, "#ffffff", 1);
}
l(JU, "soul");
function Jw(nu, nE, nL, ng, nm, nS, nZ, nN = Jn.maroon) {
  nE = Math.round(nE);
  nL = Math.round(nL);
  nu.fillStyle = nN;
  nu.fillRect(nE, nL, ng, nm);
  let nj = Math.round(ng * Math.max(0, Math.min(1, nS)));
  if (nj > 0) {
    nu.fillStyle = nZ;
    nu.fillRect(nE, nL, nj, nm);
  }
}
l(Jw, "hudBar");
function Jb(nu, nE) {
  if (nE % 2 === 1 && nu === (nE - 1) / 2) {
    return "S";
  } else if (Math.min(nu, nE - 1 - nu) % 2 === 0) {
    return "O";
  } else {
    return "E";
  }
}
l(Jb, "laneType");
function Jd(nu, nE) {
  let nL = parseInt(nu.slice(1), 16);
  let ng = nL >> 16;
  let nm = (nL >> 8) & 255;
  let nS = nL & 255;
  let nZ = (nN) => Math.round(nE >= 0 ? nN + (255 - nN) * nE : nN * (1 + nE));
  return "#" + [nZ(ng), nZ(nm), nZ(nS)].map((nN) => nN.toString(16).padStart(2, "0")).join("");
}
l(Jd, "shade");
var JW = l((nu, nE) => {
  let nL = parseInt(nu.slice(1), 16);
  return "rgba(" + (nL >> 16) + "," + ((nL >> 8) & 255) + "," + (nL & 255) + "," + nE + ")";
}, "rgba");
function Jh(nu, nE = "DELTARUNE") {
  let nL = [];
  for (let ng = 0; ng < nu; ng++) {
    let nm;
    if (nE === "SOUL") {
      nm = JO[(nu <= 7 ? Math.round((ng * 6) / Math.max(1, nu - 1)) : ng) % JO.length];
    } else {
      nm = (JJ[nE] || JJ.DELTARUNE)[Jb(ng, nu)];
    }
    nL.push({
      base: nm,
      light: Jd(nm, 0.5),
      dark: Jd(nm, -0.5),
      deep: Jd(nm, -0.8),
      type: Jb(ng, nu),
    });
  }
  return nL;
}
l(Jh, "laneColors");
function Jc(nu, nE = {}, nL = 1) {
  let ng = nu;
  let nm = Math.round(Math.min(56, Math.max(26, 380 / ng)));
  let nS = nE.colW > 0 ? Math.max(20, Math.min(80, nE.colW)) : nm;
  let nZ = Math.min(620, nS * ng);
  let nN = nZ / ng;
  let nj = Math.round(320 - nZ / 2);
  let nM = nE.scrollDir === "UP";
  let Q0 = Math.max(20, Math.min(240, nE.hitPos ?? 70));
  let Q1 = nM ? Q0 : 480 - Q0;
  let Q3 = nM ? 480 : 0;
  let Q4 =
    nE.speedMode === "MS"
      ? Math.max(150, Math.min(6000, nE.scrollMs || 900))
      : 11485 / Math.max(1, Math.min(40, nE.speed || 22));
  let Q5 = Q4 * nL;
  let Q6 = Math.abs(Q1 - Q3);
  let Q7 = {
    keys: ng,
    colW: nN,
    x0: nj,
    x1: nj + nZ,
    width: nZ,
    cx: 320,
    up: nM,
    dir: nM ? 1 : -1,
    hitY: Q1,
    far: Q3,
    top: 0,
    bottom: 480,
    span: Q6,
    visMs: Q5,
    visReal: Q4,
    pxPerMs: Q6 / Q5,
    noteSize: Math.max(0.4, Math.min(2, nE.noteSize || 1)),
    laneX: new Float32Array(ng),
    judgeY: nM ? Q1 + (nE.judgePos ?? 120) : Q1 - (nE.judgePos ?? 120),
    sudden: Math.max(0, Math.min(0.9, (nE.sudden || 0) / 100)),
    hidden: Math.max(0, Math.min(0.9, (nE.hidden || 0) / 100)),
  };
  for (let Q8 = 0; Q8 < ng; Q8++) {
    Q7.laneX[Q8] = nj + nN * (Q8 + 0.5);
  }
  return Q7;
}
l(Jc, "computeLayout");
function Jz(nu, nE, nL, ng, nm, nS = 0) {
  if (nS <= 0 || !nu.arcTo) {
    nu.beginPath();
    nu.moveTo(nE, nL - nm / 2);
    nu.lineTo(nE + ng / 2, nL);
    nu.lineTo(nE, nL + nm / 2);
    nu.lineTo(nE - ng / 2, nL);
    nu.closePath();
    return;
  }
  let nZ = nE;
  let nN = nL - nm / 2;
  let nj = nE + ng / 2;
  let nM = nL;
  let Q0 = nE;
  let Q1 = nL + nm / 2;
  let Q3 = nE - ng / 2;
  let Q4 = nL;
  nu.beginPath();
  nu.moveTo((Q3 + nZ) / 2, (Q4 + nN) / 2);
  nu.arcTo(nZ, nN, nj, nM, nS);
  nu.arcTo(nj, nM, Q0, Q1, nS);
  nu.arcTo(Q0, Q1, Q3, Q4, nS);
  nu.arcTo(Q3, Q4, nZ, nN, nS);
  nu.closePath();
}
l(Jz, "diamond");
var Jl = [
  [0, 1],
  [1, 0.02],
  [0.42, 0.02],
  [0.42, -1],
  [-0.42, -1],
  [-0.42, 0.02],
  [-1, 0.02],
];
function JX(nu, nE, nL, ng, nm) {
  let nS = Math.cos(nm);
  let nZ = Math.sin(nm);
  let nN = ng / 2;
  nu.beginPath();
  for (let nj = 0; nj < Jl.length; nj++) {
    let nM = Jl[nj][0] * nN;
    let Q0 = Jl[nj][1] * nN;
    let Q1 = nE + nM * nS - Q0 * nZ;
    let Q3 = nL + nM * nZ + Q0 * nS;
    if (nj) {
      nu.lineTo(Q1, Q3);
    } else {
      nu.moveTo(Q1, Q3);
    }
  }
  nu.closePath();
}
l(JX, "arrow");
var JY = [Math.PI / 2, 0, Math.PI, -Math.PI / 2];
var Jf = l((nu, nE) => JY[nE === 4 ? nu : nu % 4], "arrowRot");
function JK(nu, nE, nL, ng, nm, nS) {
  nS = Math.max(0, Math.min(nS, ng / 2, nm / 2));
  nu.beginPath();
  if (nS <= 0 || !nu.arcTo) {
    nu.rect(nE, nL, ng, nm);
    return;
  }
  nu.moveTo(nE + nS, nL);
  nu.arcTo(nE + ng, nL, nE + ng, nL + nm, nS);
  nu.arcTo(nE + ng, nL + nm, nE, nL + nm, nS);
  nu.arcTo(nE, nL + nm, nE, nL, nS);
  nu.arcTo(nE, nL, nE + ng, nL, nS);
  nu.closePath();
}
l(JK, "roundBar");
var JP = l((nu) => {
  let nE = 1 - Math.max(0, Math.min(1, nu));
  return 1 - nE * nE * nE;
}, "easeOut3");
function JI(nu, nE) {
  let nL = nE.colW;
  let ng = nE.noteSize;
  let nm = Math.max(6, nL - 2);
  switch (nu) {
    case "CIRCLE": {
      let nS = Math.min(nm, Math.min(nL - 4, 34) * ng);
      return [nS, nS];
    }
    case "DIAMOND": {
      let nZ = Math.min(nm, Math.min(nL - 4, 44) * ng);
      return [nZ, nZ * 0.62];
    }
    case "ARROWS": {
      let nN = Math.min(nm, Math.min(nL - 4, 38) * ng);
      return [nN, nN];
    }
    case "DELTARUNE":
      return [Math.min(nL - 4, 34) * ng, ng * 10];
    default:
      return [nL - 4, Math.max(6, ng * 12)];
  }
}
l(JI, "noteBox");
var JA = {
  base: "#6a6a6a",
  light: "#9a9a9a",
  dark: "#383838",
  deep: "#202020",
};
var Jp = {
  base: "#606060",
  light: "#909090",
  dark: "#303030",
  deep: "#202020",
};
var Jr = "rgba(0,0,0,0.6)";
function JR(nu, nE, nL, ng) {
  if (!nu.createLinearGradient) {
    return nE.base;
  }
  let nm = nu.createLinearGradient(0, nL - ng / 2, 0, nL + ng / 2);
  nm.addColorStop(0, nE.light);
  nm.addColorStop(0.45, nE.base);
  nm.addColorStop(1, Jd(nE.base, -0.28));
  return nm;
}
l(JR, "bodyFill");
function Jx(nu, nE, nL, ng, nm, nS, nZ, nN, nj = 0) {
  if (nE === "CIRCLE") {
    nu.beginPath();
    nu.arc(nL, ng, Math.max(0.5, nm / 2 - nj), 0, Math.PI * 2);
  } else if (nE === "DIAMOND") {
    Jz(
      nu,
      nL,
      ng,
      Math.max(1, nm - nj * 2),
      Math.max(1, nS - nj * 2 * (nS / nm)),
      Math.max(0.5, nS * 0.14),
    );
  } else {
    JX(nu, nL, ng, Math.max(1, nm - nj * 2), Jf(nZ, nN));
  }
}
l(Jx, "headPath");
function Je(nu, nE, nL, ng, nm, nS, nZ, nN, nj, nM) {
  let Q0 = nM ? (nE === "BARS" ? Jp : JA) : nZ;
  if (nE === "BARS") {
    let Q1 = Math.round(nL - nm / 2);
    let Q3 = Math.round(ng - nS / 2);
    let Q4 = Math.round(nm);
    let Q5 = Math.round(nS);
    nu.fillStyle = "#000000";
    nu.fillRect(Q1 - 1, Q3 - 1, Q4 + 2, Q5 + 2);
    nu.fillStyle = Q0.base;
    nu.fillRect(Q1, Q3, Q4, Q5);
    nu.fillStyle = Q0.light;
    nu.fillRect(Q1, Q3, Q4, 2);
    nu.fillStyle = Q0.dark;
    nu.fillRect(Q1, Q3 + Q5 - 2, Q4, 2);
    return;
  }
  nu.lineJoin = "round";
  nu.lineCap = "round";
  Jx(nu, nE, nL, ng, nm, nS, nN, nj, 0);
  nu.lineWidth = 2.5;
  nu.strokeStyle = Jr;
  nu.stroke();
  Jx(nu, nE, nL, ng, nm, nS, nN, nj, 1.25);
  nu.fillStyle = JR(nu, Q0, ng, nS);
  nu.fill();
  nu.lineWidth = 1.5;
  nu.strokeStyle = nM ? "#a0a0a0" : "#ffffff";
  nu.stroke();
  if (nE === "CIRCLE" && nm >= 16) {
    nu.beginPath();
    nu.arc(nL, ng, nm * 0.26, 0, Math.PI * 2);
    nu.lineWidth = 1;
    nu.strokeStyle = "rgba(255,255,255,0.32)";
    nu.stroke();
  }
}
l(Je, "paintNote");
function JC(nu, nE, nL, ng, nm, nS, nZ, nN, nj, nM, Q0) {
  let Q1 = nM ? "#707070" : nZ.light;
  if (nE === "BARS") {
    nu.fillStyle = Q1;
    nu.fillRect(
      Math.round(nL - nm * 0.42),
      Math.round(ng - nS * 0.25),
      Math.round(nm * 0.84),
      Math.max(3, Math.round(nS * 0.5)),
    );
    return;
  }
  let Q3 = Math.max(2, Q0 / 2 + 1.5);
  nu.beginPath();
  nu.arc(nL, ng, Q3, 0, Math.PI * 2);
  nu.fillStyle = nM ? "#505050" : nZ.base;
  nu.fill();
  nu.lineWidth = 1.5;
  nu.strokeStyle = Q1;
  nu.stroke();
}
l(JC, "paintTail");
function JH(nu, nE, nL, ng, nm, nS, nZ, nN, nj, nM, Q0) {
  if (nE === "BARS") {
    let Q1 = nM ? "#ffffff" : "#808080";
    let Q3 = Math.round(nL - Q0 / 2 + 2);
    let Q4 = Math.round(Q0 - 4);
    nu.fillStyle = nM ? nZ.dark : "#101010";
    nu.fillRect(Q3, ng + 4, Q4, 28);
    nu.fillStyle = Q1;
    nu.fillRect(Q3, ng + 4, Q4, 1);
    nu.fillRect(Q3, ng + 31, Q4, 1);
    nu.fillRect(Q3, ng + 4, 1, 28);
    nu.fillRect(Q3 + Q4 - 1, ng + 4, 1, 28);
    if (nM) {
      nu.fillStyle = nZ.base;
      nu.fillRect(Q3 + 3, ng + 7, Q4 - 6, 3);
    }
    return;
  }
  nu.lineJoin = "round";
  if (nM) {
    Jx(nu, nE, nL, ng, nm, nS, nN, nj, 1.25);
    if (nu.createLinearGradient) {
      let Q5 = nu.createLinearGradient(0, ng - nS / 2, 0, ng + nS / 2);
      Q5.addColorStop(0, nZ.base);
      Q5.addColorStop(1, nZ.dark);
      nu.fillStyle = Q5;
    } else {
      nu.fillStyle = nZ.dark;
    }
    nu.globalAlpha = 0.85;
    nu.fill();
    nu.globalAlpha = 1;
    nu.lineWidth = 2;
    nu.strokeStyle = "#ffffff";
    nu.stroke();
  } else {
    Jx(nu, nE, nL, ng, nm, nS, nN, nj, 0);
    nu.lineWidth = 2.5;
    nu.strokeStyle = Jr;
    nu.stroke();
    Jx(nu, nE, nL, ng, nm, nS, nN, nj, 1.25);
    nu.fillStyle = "rgba(255,255,255,0.05)";
    nu.fill();
    nu.lineWidth = 1.5;
    nu.strokeStyle = "#8a8a8a";
    nu.stroke();
    if (nm >= 14) {
      Jx(nu, nE, nL, ng, nm, nS, nN, nj, 4);
      nu.lineWidth = 1;
      nu.strokeStyle = Jd(nZ.base, -0.35);
      nu.stroke();
    }
  }
}
l(JH, "paintReceptor");
function Jq(nu, nE, nL, ng, nm, nS, nZ, nN, nj, nM) {
  if (nE === "BARS") {
    nu.lineWidth = 2;
    nu.strokeStyle = nZ.light;
    nu.strokeRect(
      Math.round(nL - nM / 2 + 3) + 0.5,
      Math.round(ng - nS / 2) + 0.5,
      Math.round(nM - 6) - 1,
      Math.round(nS) - 1,
    );
    return;
  }
  nu.lineJoin = "round";
  Jx(nu, nE, nL, ng, nm, nS, nN, nj, 1);
  nu.fillStyle = JW(nZ.light, 0.18);
  nu.fill();
  nu.lineWidth = 2;
  nu.strokeStyle = nZ.light;
  nu.stroke();
}
l(Jq, "paintBurst");
var Jv = 2;
var JF = new Map();
var JD = 1200;
var Ja = l(
  (nu) => Math.max(1, Math.min(4, Math.round((nu > 0 && nu < 100 ? nu : Jv) * 4) / 4)),
  "quantScale",
);
function Jy(nu) {
  try {
    if (nu && nu.getTransform) {
      let nE = nu.getTransform();
      let nL = Math.max(Math.hypot(nE.a, nE.b), Math.hypot(nE.c, nE.d));
      if (nL > 0 && nL < 100) {
        return nL;
      }
    }
  } catch {}
  return Jv;
}
l(Jy, "deviceScale");
var Jo = class QA {
  constructor(nu, nE, nL, ng, nm = "", nS = false) {
    this.doc = nu;
    this.w = nE;
    this.h = nL;
    this.paint = ng;
    this.key = nm;
    this.crisp = nS;
    this.q = 0;
    this.cv = null;
  }
  canvasAt(nu) {
    let nE = this.crisp ? Jv : Ja(nu);
    if (nE === this.q) {
      return this.cv;
    }
    this.q = nE;
    let nL = this.key ? this.key + "@" + nE : "";
    let ng = nL ? JF.get(nL) : undefined;
    if (ng === undefined) {
      ng = null;
      try {
        let nm = this.doc;
        let nS = nm && nm.createElement ? nm.createElement("canvas") : null;
        if (nS && nS.getContext) {
          nS.width = Math.max(1, Math.ceil(this.w * nE));
          nS.height = Math.max(1, Math.ceil(this.h * nE));
          let nZ = nS.getContext("2d");
          if (nZ) {
            nZ.scale(nE, nE);
            this.paint(nZ, this.w / 2, this.h / 2);
            ng = nS;
          }
        }
      } catch {
        ng = null;
      }
      if (nL) {
        for (JF.set(nL, ng); JF.size > JD;) {
          JF.delete(JF.keys().next().value);
        }
      }
    }
    this.cv = ng;
    return ng;
  }
  draw(nu, nE, nL, ng = 1, nm = 1, nS = Jv) {
    let nZ = this.canvasAt(nS);
    let nN = this.w * ng;
    let nj = this.h * nm;
    let nM = nE - nN / 2;
    let Q0 = nL - nj / 2;
    if (nZ) {
      let Q1 = ng !== 1 || nm !== 1 || Math.abs(this.q - nS) > 0.01;
      if (!this.crisp && !Q1) {
        nM = Math.round(nM * nS) / nS;
        Q0 = Math.round(Q0 * nS) / nS;
      }
      if (Q1 && !this.crisp) {
        nu.imageSmoothingEnabled = true;
        nu.drawImage(nZ, nM, Q0, nN, nj);
        nu.imageSmoothingEnabled = false;
      } else {
        nu.drawImage(nZ, nM, Q0, nN, nj);
      }
    } else {
      nu.save();
      nu.translate(nM, Q0);
      nu.scale(ng, nm);
      this.paint(nu, this.w / 2, this.h / 2);
      nu.restore();
    }
  }
};
l(Jo, "Sprite");
var Jk = Jo;
var Ju = new Map();
function JE(nu) {
  let nE = Ju.get(nu);
  if (nE === undefined) {
    if (Ju.size > 6000) {
      Ju.clear();
    }
    nE = String(nu);
    Ju.set(nu, nE);
  }
  return nE;
}
l(JE, "numText");
var JL = -1;
var Jg = "";
function Jm(nu) {
  if (nu !== JL) {
    JL = nu;
    Jg = String(nu).padStart(7, "0");
  }
  return Jg;
}
l(Jm, "pad7");
var JS = new Map();
function JZ(nu) {
  let nE = Math.round(nu * 10000);
  let nL = JS.get(nE);
  if (!nL) {
    nL = (nE / 100).toFixed(2) + "%";
    if (JS.size > 4000) {
      JS.clear();
    }
    JS.set(nE, nL);
  }
  return nL;
}
l(JZ, "pct");
var JN = [];
var Jj = l((nu) => (JN[nu] ||= String(nu).padStart(3, " ") + "/ 100"), "hpText");
var JM = new Float32Array(4);
function O0(nu) {
  let nE = 0;
  let nL = 1;
  let ng = 1;
  let nm = 1;
  if (nu < 260) {
    let nS = nu / 260;
    nE = nS * -64 * (1 - nS);
  } else if (nu < 380) {
    let nZ = (nu - 260) / 120;
    nE = nZ * -16 * (1 - nZ);
  }
  if (nu > 560) {
    let nN = Math.min(1, (nu - 560) / 180);
    ng = 1 + nN * 1.6;
    nL = 1 - nN * 0.55;
    nm = 1 - nN;
  }
  JM[0] = nE;
  JM[1] = nL;
  JM[2] = ng;
  JM[3] = nm;
  return JM;
}
l(O0, "dmgMotion");
var O1 = ["", "300", "200", "100", "50", ""];
function O2(nu, nE, nL, ng, nm = 1, nS = 1, nZ = 1) {
  if (nE === 0 || nE === 5) {
    nu.draw_sprite_ext(
      "spr_battlemsg",
      nE === 0 ? 2 : 0,
      Math.round(nL + nm * 37),
      Math.round(ng - nS * 20),
      nm,
      nS,
      0,
      nE === 0 ? "#ffff00" : "#c0c0c0",
      nZ,
    );
    return;
  }
  let nN = O1[nE];
  let nj = nu.alpha;
  nu.draw_set_alpha(nZ);
  nu.draw_set_font("fnt_dmg");
  nu.draw_set_halign("center");
  nu.draw_set_color(r[nE]);
  nu.draw_text_transformed(Math.round(nL), Math.round(ng - nS * 28), nN, nm, nS, 0);
  nu.draw_set_halign("left");
  nu.draw_set_alpha(nj);
}
l(O2, "drawJudgeWord");
var O3 = class Qp {
  constructor(nu = globalThis.document) {
    this.doc = nu;
    this.key = "";
    this.beatBuf = new Float64Array(256);
    this.heN = 48;
    this.heErr = new Float32Array(48);
    this.heAt = new Float64Array(48);
    this.heJ = new Uint8Array(48);
    this.heW = 0;
    this.heMean = 0;
    this.laneUpAt = null;
    this.jAt = -1000000000;
    this.jSeen = -1000000000;
    this.jj = -1;
  }
  warm(nu, nE, nL = 1) {
    this.buildSprites(nu, nE, Jc(nu, nE, nL));
  }
  setup(nu, nE, nL, ng = {}) {
    let nm = nu.keys;
    let nS = Jc(nm, nL, nu.rate);
    this.play = nu;
    this.view = nE;
    this.cfg = nL;
    this.L = nS;
    this.buildSprites(nm, nL, nS);
    this.gradL = null;
    this.laneUpAt = new Float64Array(nm).fill(-1000000000);
    this.prevDown = new Uint8Array(nm);
    this.pressK = new Float32Array(nm);
    this.lastTr = -1;
    this.heW = 0;
    this.heMean = 0;
    this.heAt.fill(-1000000000);
    this.jAt = -1000000000;
    this.jSeen = -1000000000;
    this.jj = -1;
  }
  buildSprites(nu, nE, nL) {
    let ng = J8.includes(nE.skin) ? nE.skin : "DELTARUNE";
    let nm = J9.includes(nE.scheme) ? nE.scheme : "DELTARUNE";
    this.skin = ng;
    this.scheme = nm;
    this.cols = Jh(nu, nm);
    let nS = [nu, ng, nm, nL.colW, nL.noteSize].join("|");
    if (nS !== this.key) {
      this.key = nS;
      let [nZ, nN] = JI(ng, nL);
      this.nw = nZ;
      this.nh = nN;
      let nj = this.doc;
      this.notes = [];
      this.deadNotes = [];
      this.tails = [];
      this.deadTails = [];
      this.rec = [];
      this.recLit = [];
      this.burst = [];
      this.bodyW =
        ng === "DELTARUNE"
          ? 8
          : ng === "BARS"
            ? Math.round(nL.colW - 10)
            : Math.max(
                4,
                Math.round(ng === "CIRCLE" ? nZ * 0.56 : ng === "DIAMOND" ? nZ * 0.42 : nZ * 0.46),
              );
      if (ng !== "DELTARUNE") {
        let nM = ng === "BARS";
        let Q0 = this.bodyW;
        for (let Q1 = 0; Q1 < nu; Q1++) {
          let Q3 = this.cols[Q1];
          let Q4 = [
            ng,
            Q1 % 4,
            nu === 4 ? 4 : 0,
            Q3.base,
            nZ.toFixed(2),
            nN.toFixed(2),
            nL.colW.toFixed(2),
          ].join("|");
          this.notes.push(
            new Jk(
              nj,
              nZ + 4,
              nN + 4,
              (Q9, QO, Qn) => Je(Q9, ng, QO, Qn, nZ, nN, Q3, Q1, nu, false),
              Q4 + "|note",
              nM,
            ),
          );
          this.deadNotes.push(
            new Jk(
              nj,
              nZ + 4,
              nN + 4,
              (Q9, QO, Qn) => Je(Q9, ng, QO, Qn, nZ, nN, Q3, Q1, nu, true),
              Q4 + "|dead",
              nM,
            ),
          );
          this.tails.push(
            new Jk(
              nj,
              nZ + 4,
              nN + 4,
              (Q9, QO, Qn) => JC(Q9, ng, QO, Qn, nZ, nN, Q3, Q1, nu, false, Q0),
              Q4 + "|tail",
              nM,
            ),
          );
          this.deadTails.push(
            new Jk(
              nj,
              nZ + 4,
              nN + 4,
              (Q9, QO, Qn) => JC(Q9, ng, QO, Qn, nZ, nN, Q3, Q1, nu, true, Q0),
              Q4 + "|deadtail",
              nM,
            ),
          );
          let Q5 = ng === "BARS" ? nL.colW : nZ;
          let Q6 = ng === "BARS" ? 40 : nN;
          let Q7 = ng === "BARS" ? -20 : 0;
          this.rec.push(
            new Jk(
              nj,
              Q5 + 4,
              Q6 + 4,
              (Q9, QO, Qn) => JH(Q9, ng, QO, Qn + Q7, nZ, nN, Q3, Q1, nu, false, nL.colW),
              Q4 + "|rec",
              nM,
            ),
          );
          this.recLit.push(
            new Jk(
              nj,
              Q5 + 4,
              Q6 + 4,
              (Q9, QO, Qn) => JH(Q9, ng, QO, Qn + Q7, nZ, nN, Q3, Q1, nu, true, nL.colW),
              Q4 + "|reclit",
              nM,
            ),
          );
          let Q8 = ng === "BARS" ? Math.max(14, nN + 6) : nN;
          this.burst.push(
            new Jk(
              nj,
              Q5 + 6,
              Q8 + 6,
              (Q9, QO, Qn) => Jq(Q9, ng, QO, Qn, nZ, Q8, Q3, Q1, nu, nL.colW),
              Q4 + "|burst",
              nM,
            ),
          );
        }
        for (let Q9 of [
          this.notes,
          this.deadNotes,
          this.tails,
          this.deadTails,
          this.rec,
          this.recLit,
          this.burst,
        ]) {
          for (let QO of Q9) {
            QO.canvasAt(Jv);
          }
        }
      }
    }
  }
  grads(nu) {
    let nE = this.L;
    if (this.gradL === nE && this.gradCtx === nu) {
      return;
    }
    this.gradL = nE;
    this.gradCtx = nu;
    let nL = nE.hitY;
    let ng = nE.hitY + nE.dir * 120;
    this.laneLight = this.cols.map((nm) => {
      let nS = nu.createLinearGradient(0, nL, 0, ng);
      nS.addColorStop(0, JW(nm.base, 0.32));
      nS.addColorStop(1, JW(nm.base, 0));
      return nS;
    });
  }
  yOf(nu, nE) {
    let nL = this.L;
    return nL.hitY + nL.dir * (nu - nE) * nL.pxPerMs;
  }
  draw(nu, nE, nL) {
    let ng = nu.ctx;
    let nm = this.L;
    let nS = this.play;
    let nZ = this.view;
    let nN = nS.keys;
    let nj = this.skin;
    let nM = this.cfg;
    let Q0 = nj === "DELTARUNE";
    this.grads(ng);
    let Q1 = nZ.scroll.pos(nE);
    let Q3 = nm.x0;
    let Q4 = nm.width;
    ng.globalAlpha = nM.stageAlpha ?? 0.86;
    ng.fillStyle = "#000000";
    ng.fillRect(Q3, 0, Q4, 480);
    ng.globalAlpha = 1;
    ng.fillStyle = Q0 ? "#202020" : "#1c1c1c";
    for (let QB = 1; QB < nN; QB++) {
      ng.fillRect(Math.round(Q3 + nm.colW * QB), 0, 1, 480);
    }
    if (nM.barlines !== false) {
      let QG = nm.span / nm.pxPerMs;
      let QV = J3(nS.chart, nE - 400, nE + QG * 4 + 400, this.beatBuf);
      for (let QT = 0; QT < QV; QT++) {
        let QU = this.beatBuf[QT] < 0;
        let Qw = QU ? -this.beatBuf[QT] : this.beatBuf[QT];
        let Qb = Math.round(this.yOf(nZ.scroll.posAt(Qw), Q1));
        if (!(nm.up ? Qb < nm.hitY || Qb > 480 : Qb > nm.hitY || Qb < 0)) {
          ng.fillStyle = QU ? "#404040" : "#1c1c1c";
          ng.fillRect(Q3, Qb, Q4, 1);
        }
      }
    }
    if (nL.flash > 0 && !nM.lowSpec) {
      ng.globalAlpha = nL.flash * 0.16;
      ng.fillStyle = "#ff0000";
      ng.fillRect(Q3, 0, Q4, 480);
      ng.globalAlpha = 1;
    }
    let Q5 = nL.tReal;
    let Q6 = this.lastTr < 0 ? 16 : Math.max(0, Math.min(100, Q5 - this.lastTr));
    this.lastTr = Q5;
    let Q7 = 1 - Math.exp(-Q6 / 22);
    let Q8 = 1 - Math.exp(-Q6 / 55);
    for (let Qd = 0; Qd < nN; Qd++) {
      let QW = nS.down[Qd] ? 1 : 0;
      let Qh = this.pressK[Qd];
      this.pressK[Qd] = Qh + (QW - Qh) * (QW > Qh ? Q7 : Q8);
      if (this.pressK[Qd] < 0.002) {
        this.pressK[Qd] = 0;
      }
    }
    let Q9 = Q0 || nj === "BARS";
    let QO = Q9 ? Jv : Jy(ng);
    this.dev = QO;
    for (let Qc = 0; Qc < nN; Qc++) {
      let Qz = nS.down[Qc];
      if (this.prevDown[Qc] && !Qz) {
        this.laneUpAt[Qc] = Q5;
      }
      this.prevDown[Qc] = Qz;
      let Ql;
      if (Q9) {
        Ql = Qz ? 1 : Math.max(0, 1 - (Q5 - this.laneUpAt[Qc]) / 120);
      } else {
        let QY = Qz ? 0 : Math.min(1, (Q5 - this.laneUpAt[Qc]) / 170);
        Ql = Qz ? Math.max(0.35, this.pressK[Qc]) : (1 - QY) * (1 - QY);
      }
      if (Ql <= 0) {
        continue;
      }
      ng.globalAlpha = Ql;
      ng.fillStyle = this.laneLight[Qc];
      let QX = Math.round(Q3 + nm.colW * Qc);
      if (nm.up) {
        ng.fillRect(QX, nm.hitY, Math.round(nm.colW), 120);
      } else {
        ng.fillRect(QX, nm.hitY - 120, Math.round(nm.colW), 120);
      }
    }
    ng.globalAlpha = 1;
    if (Q0) {
      for (let Qf = 0; Qf < nN; Qf++) {
        let QK = nm.laneX[Qf];
        let QP = nm.colW / 40;
        nu.draw_sprite_ext(
          "spr_rhythmgame_button",
          Jb(Qf, nN) === "O" ? 0 : 1,
          QK,
          nm.hitY,
          QP,
          1,
          0,
          "#ffffff",
          1,
        );
        if (nS.down[Qf]) {
          nu.draw_sprite_ext("spr_rhythmgame_button", 3, QK, nm.hitY, QP, 1, 0, "#ffffff", 0.85);
        }
      }
    } else {
      ng.fillStyle = "#ffffff";
      ng.fillRect(Q3, nm.hitY - 1, Q4, 1);
      if (nj === "BARS") {
        for (let QI = 0; QI < nN; QI++) {
          (nS.down[QI] ? this.recLit[QI] : this.rec[QI]).draw(
            ng,
            nm.laneX[QI],
            nm.hitY + (nm.up ? -20 : 20),
            1,
            nm.up ? -1 : 1,
            QO,
          );
        }
      } else {
        for (let Qr = 0; Qr < nN; Qr++) {
          let QR = this.pressK[Qr];
          let Qx = 1 - QR * 0.07;
          if (QR < 0.98) {
            this.rec[Qr].draw(ng, nm.laneX[Qr], nm.hitY, Qx, Qx, QO);
          }
          if (QR > 0.02) {
            ng.globalAlpha = QR;
            this.recLit[Qr].draw(ng, nm.laneX[Qr], nm.hitY, Qx, Qx, QO);
            ng.globalAlpha = 1;
          }
        }
      }
    }
    ng.save();
    ng.beginPath();
    ng.rect(Q3, 0, Q4, 480);
    ng.clip();
    this.drawNotes(nu, ng, nE, Q1);
    ng.restore();
    let Qn = Math.min(0.9, nm.sudden + (nS.mi.fadeIn ? 0.45 : 0));
    let QQ = Math.min(0.9, nm.hidden + (nS.mi.hidden ? 0.45 : 0));
    if (Qn > 0 || QQ > 0) {
      this.drawCover(ng, Qn, QQ);
    }
    if (nM.hitLight !== false) {
      let Qe = !Q9;
      if (Qe) {
        ng.save();
        ng.beginPath();
        ng.rect(Q3, 0, Q4, 480);
        ng.clip();
      }
      for (let QC = 0; QC < nN; QC++) {
        let QH = nS.holding[QC] >= 0;
        let Qq = nE - nS.laneHitAt[QC];
        let Qv = 0;
        let QF = 1;
        if (Q9) {
          if (QH) {
            Qv = 0.7;
            QF = 1.05;
          } else if (Qq >= 0 && Qq < nS.rate * 160) {
            let QD = 1 - Qq / (nS.rate * 160);
            Qv = QD;
            QF = 1 + (1 - QD) * 0.35;
            if (nS.laneHitJ[QC] > 1) {
              Qv *= 0.6;
            }
          }
        } else if (QH) {
          let Qa = (Q5 % 900) / 900;
          Qv = 0.55 + Math.sin(Qa * Math.PI * 2) * 0.15;
          QF = 1.04 + Math.sin(Qa * Math.PI * 2) * 0.02;
        } else {
          let Qy = nS.rate * 220;
          if (Qq >= 0 && Qq < Qy) {
            let Qo = Qq / Qy;
            Qv = (1 - Qo) * (1 - Qo);
            QF = 1 + JP(Qo) * 0.45;
            if (nS.laneHitJ[QC] > 1) {
              Qv *= 0.6;
            }
          }
        }
        if (!(Qv <= 0)) {
          if (Q0) {
            nu.draw_sprite_ext(
              "spr_whitegradientdown_rhythm",
              nS.laneHitJ[QC] <= 1 ? 1 : 0,
              nm.laneX[QC],
              nm.hitY,
              (Qv * nm.colW) / 40,
              1,
              0,
              "#ffffff",
              Math.min(1, Qv),
            );
          } else {
            ng.globalAlpha = Math.min(1, Qv);
            this.burst[QC].draw(ng, nm.laneX[QC], nm.hitY, QF, QF, QO);
            ng.globalAlpha = 1;
          }
        }
      }
      if (Qe) {
        ng.restore();
      }
    }
    ng.fillStyle = nL.flash > 0.05 ? "#ff4040" : Q0 ? "#17eeff" : "#808080";
    ng.fillRect(Q3 - 1, 0, 1, 480);
    ng.fillRect(Q3 + Q4, 0, 1, 480);
    if (Q0) {
      ng.fillRect(Q3 - 2, 0, 1, 480);
      ng.fillRect(Q3 + Q4 + 1, 0, 1, 480);
    }
    if (!nL.hideHud) {
      this.drawJudgement(nu, nE, Q5);
    }
    if (nL.showSoul !== false && nj !== "BARS") {
      let Qk = nL.soulX ?? nm.cx;
      let Qu = nm.up ? nm.hitY - 30 : nm.hitY + 30;
      if ((!(nL.soulHurt > 0) || Math.floor(nL.soulHurt / 60) % 2 !== 0) && Qu > 0 && Qu < 470) {
        nu.draw_sprite_ext(
          nL.broken ? "spr_heartbreak" : "spr_heart",
          0,
          Math.round(Qk - (nL.broken ? 10 : 8)),
          Qu - 8,
          1,
          1,
          0,
          "#ffffff",
          1,
        );
      }
    }
  }
  drawCover(nu, nE, nL) {
    let ng = this.L;
    let nm = ng.x0;
    let nS = ng.width;
    nu.fillStyle = "#000000";
    let nZ = 24;
    if (nE > 0) {
      let nN = ng.span * nE;
      if (ng.up) {
        nu.fillRect(nm, 480 - nN + nZ, nS, Math.max(0, nN - nZ));
        for (let nj = 0; nj < nZ; nj += 4) {
          nu.globalAlpha = 1 - nj / nZ;
          nu.fillRect(nm, 480 - nN + nZ - nj - 4, nS, 4);
        }
      } else {
        nu.fillRect(nm, 0, nS, Math.max(0, nN - nZ));
        for (let nM = 0; nM < nZ; nM += 4) {
          nu.globalAlpha = 1 - nM / nZ;
          nu.fillRect(nm, nN - nZ + nM, nS, 4);
        }
      }
      nu.globalAlpha = 1;
    }
    if (nL > 0) {
      let Q0 = ng.span * nL;
      let Q1 = this.skin === "BARS" || this.skin === "DELTARUNE" ? 4 : this.nh / 2 + 3;
      if (ng.up) {
        let Q3 = ng.hitY + Q1;
        nu.fillRect(nm, Q3, nS, Math.max(0, Q0 - nZ));
        for (let Q4 = 0; Q4 < nZ; Q4 += 4) {
          nu.globalAlpha = 1 - Q4 / nZ;
          nu.fillRect(nm, Q3 + Q0 - nZ + Q4, nS, 4);
        }
      } else {
        let Q5 = ng.hitY - Q1;
        nu.fillRect(nm, Q5 - Q0 + nZ, nS, Math.max(0, Q0 - nZ));
        for (let Q6 = 0; Q6 < nZ; Q6 += 4) {
          nu.globalAlpha = 1 - Q6 / nZ;
          nu.fillRect(nm, Q5 - Q0 + nZ - Q6 - 4, nS, 4);
        }
      }
      nu.globalAlpha = 1;
    }
  }
  drawNotes(nu, nE, nL, ng) {
    let nm = this.L;
    let nS = this.play;
    let nZ = this.view;
    let nN = nS.keys;
    let nj = this.skin;
    let nM = nZ.head;
    let Q0 = nZ.tail;
    let Q1 = ng + nm.span / nm.pxPerMs + 60;
    let Q3 = nj === "DELTARUNE";
    for (let Q4 = 0; Q4 < nN; Q4++) {
      let Q5 = nm.laneX[Q4];
      let Q6 = nS.laneNotes[Q4];
      let Q7 = this.cols[Q4];
      let Q8 = Math.max(0, nS.laneNext[Q4] - 8);
      let Q9 = this.bodyW;
      let QO = this.dev || Jv;
      for (; Q8 < Q6.length; Q8++) {
        let Qn = Q6[Q8];
        if (nM[Qn] > Q1) {
          break;
        }
        let QQ = nS.state[Qn];
        let QB = nS.end[Qn] > 0;
        if (QQ === 2) {
          continue;
        }
        let QG = this.yOf(nM[Qn], ng);
        let QV = QQ === 3;
        if (QB) {
          let QT = this.yOf(Q0[Qn], ng);
          let QU = QQ === 1;
          let Qw = QQ === 4;
          if (QU) {
            QG = nm.hitY;
          }
          if (nm.up ? QT < -20 : QT > 500) {
            continue;
          }
          let Qb = Math.min(QG, QT);
          let Qd = Math.max(QG, QT);
          let QW = QV || Qw;
          if (Qd - Qb > 0) {
            if (Q3) {
              nE.fillStyle = QU ? "#ffa040" : QW ? "#808080" : Q7.base;
              nE.globalAlpha = QW ? 0.5 : 1;
              nE.fillRect(Math.round(Q5 - 4), Qb, 8, Qd - Qb);
            } else if (nj === "BARS") {
              let Qh = Math.round(Q5 - Q9 / 2);
              nE.fillStyle = QW ? "#303030" : QU ? Q7.base : Q7.dark;
              nE.fillRect(Qh, Qb, Q9, Qd - Qb);
              nE.fillStyle = QW ? "#606060" : QU ? "#ffffff" : Q7.base;
              nE.fillRect(Qh, Qb, 2, Qd - Qb);
              nE.fillRect(Qh + Q9 - 2, Qb, 2, Qd - Qb);
            } else {
              let Qc = Math.max(-40, Qb);
              let Qz = Math.min(520, Qd);
              if (Qz > Qc) {
                let Ql = Q5 - Q9 / 2;
                JK(nE, Ql, Qc, Q9, Qz - Qc, Q9 / 2);
                nE.fillStyle = QW ? "#2e2e2e" : QU ? Q7.dark : Q7.deep;
                nE.globalAlpha = QW ? 0.8 : 0.92;
                nE.fill();
                nE.globalAlpha = 1;
                nE.lineWidth = 1.5;
                nE.strokeStyle = QW ? "#5a5a5a" : QU ? "#ffffff" : Q7.base;
                nE.stroke();
                if (!QW && Q9 >= 8) {
                  nE.fillStyle = QU ? Q7.base : Q7.dark;
                  nE.globalAlpha = QU ? 0.55 : 0.8;
                  JK(nE, Q5 - Q9 * 0.18, Qc + 2, Q9 * 0.36, Math.max(0, Qz - Qc - 4), Q9 * 0.18);
                  nE.fill();
                  nE.globalAlpha = 1;
                }
              }
            }
            nE.globalAlpha = 1;
            if (Q3) {
              nu.draw_sprite_ext(
                "spr_rhythmgame_heldnote",
                0,
                Q5,
                QT,
                1,
                1,
                0,
                QW ? "#808080" : QU ? "#ffa040" : Q7.base,
                QW ? 0.5 : 1,
              );
            } else {
              (QW ? this.deadTails[Q4] : this.tails[Q4]).draw(nE, Q5, QT, 1, 1, QO);
            }
          }
          if (nm.up ? QG < -20 : QG > 500) {
            continue;
          }
          if (Q3) {
            nu.draw_sprite_ext(
              "spr_rhythmgame_note",
              0,
              Q5,
              QG,
              nm.colW / 40,
              1,
              0,
              QW ? "#808080" : QU ? "#ffff00" : Q7.base,
              QW ? 0.5 : 1,
            );
          } else {
            (QW ? this.deadNotes[Q4] : this.notes[Q4]).draw(nE, Q5, QG, 1, 1, QO);
          }
        } else {
          if (nm.up ? QG < -20 : QG > 500) {
            continue;
          }
          if (Q3) {
            nu.draw_sprite_ext(
              "spr_rhythmgame_note",
              0,
              Q5,
              QG,
              nm.colW / 40,
              1,
              0,
              QV ? "#808080" : Q7.base,
              QV ? 0.5 : 1,
            );
          } else {
            if (QV) {
              nE.globalAlpha = 0.6;
            }
            (QV ? this.deadNotes[Q4] : this.notes[Q4]).draw(nE, Q5, QG, 1, 1, QO);
            nE.globalAlpha = 1;
          }
        }
      }
    }
  }
  drawJudgement(nu, nE, nL) {
    let ng = this.play;
    let nm = this.L;
    if (ng.lastJ < 0) {
      return;
    }
    if (ng.lastJAt !== this.jSeen) {
      this.jSeen = ng.lastJAt;
      this.jAt = nL;
      this.jj = ng.lastJ;
    }
    let nS = this.jj;
    if (this.cfg.judgeHide300 && nS <= 1) {
      return;
    }
    let nZ = nL - this.jAt;
    if (nZ < 0 || nZ > 740) {
      return;
    }
    let nN = O0(nZ);
    O2(nu, nS, nm.cx, nm.judgeY + nN[0], nN[1], nN[2], nN[3]);
  }
  drawHud(nu, nE, nL) {
    let ng = nu.ctx;
    let nm = this.play;
    let nS = this.L;
    let nZ = this.cfg;
    if (nZ.showCombo !== false) {
      let Q4 = Math.max(40, nS.x0 - 34);
      let Q5 = 130;
      let Q6 = 196;
      let Q7 = nm.judged > 0 && nm.counts[5] === 0 && nm.combo >= nm.judged;
      let Q8 = nm.judged ? Math.min(1, nm.combo / nm.judged) : 0;
      ng.fillStyle = Jn.maroon;
      ng.fillRect(Q4, Q5, 20, Q6);
      let Q9 = Math.round(Q6 * Q8);
      if (Q9 > 0) {
        ng.fillStyle = Q7 ? Jn.yellow : Jn.orange;
        ng.fillRect(Q4, Q5 + Q6 - Q9, 20, Q9);
      }
      ng.fillStyle = "#ffffff";
      ng.fillRect(Q4, Q5 + Q6 - Q9, 20, Q9 > 0 ? 1 : 0);
      nu.draw_sprite_ext("spr_tplogo", 0, Q4 - 26, Q5 + 20, 1, 1, 0, "#ffffff", 1);
      if (nm.combo > 0) {
        JQ(nu, Q4 - 4, Q5 + 70, JE(nm.combo), "#ffffff", "fnt_mainbig", "right");
        if (Q7 && nm.combo >= 10) {
          JQ(nu, Q4 - 4, Q5 + 100, "MAX", Jn.yellow, "fnt_main", "right");
        }
      }
    }
    {
      let QO = nS.x1 + 12 + 112 <= 636 ? nS.x1 + 12 : Math.max(4, nS.x0 - 124);
      let Qn = 438;
      let QQ = Math.max(0, Math.min(1, nm.hp));
      let QB = Math.round(QQ * 100);
      let QG = QQ < 0.25;
      nu.draw_sprite_ext("spr_hpname", 0, QO, Qn + 4, 1, 1, 0, "#ffffff", 1);
      let QV = QQ <= 0 ? Jn.red : QG ? Jn.yellow : "#ffffff";
      JQ(nu, QO + 112, Qn - 12, Jj(QB), QV, "fnt_main", "right");
      Jw(
        ng,
        QO + 22,
        Qn + 5,
        90,
        9,
        QQ,
        QG && Math.floor(nL.tReal / 180) % 2 === 0 ? Jn.red : Jn.cyan,
      );
    }
    let nN = Jm(nm.score);
    JQ(nu, 632, 4, nN, "#ffffff", "fnt_mainbig", "right");
    let nj = JZ(nm.accuracy);
    JQ(nu, 632, 36, nj, nm.accuracy >= 0.95 ? Jn.yellow : "#ffffff", "fnt_main", "right");
    let nM = nm.chart;
    let Q0 = nM.first;
    let Q1 = Math.max(Q0 + 1, nM.last);
    let Q3 = nE < Q0 ? 0 : Math.max(0, Math.min(1, (nE - Q0) / (Q1 - Q0)));
    ng.fillStyle = Jn.dk;
    ng.fillRect(534, 56, 98, 2);
    ng.fillStyle = "#ffffff";
    ng.fillRect(534, 56, Math.round(Q3 * 98), 2);
    if (nZ.hitError !== "OFF") {
      this.drawHitError(ng, nE, nL.tReal);
    }
    if (nZ.keyOverlay) {
      this.drawKeyOverlay(nu, nL.keyLabels);
    }
  }
  noteHit(nu, nE, nL) {
    let ng = this.heW;
    this.heW = (this.heW + 1) % this.heN;
    this.heErr[ng] = nu;
    this.heAt[ng] = nL;
    this.heJ[ng] = nE;
    this.heMean = this.heMean * 0.85 + nu * 0.15;
  }
  drawHitError(nu, nE, nL) {
    let ng = this.play;
    let nm = this.L;
    let nS = ng.win;
    let nZ = ng.rate;
    let nN = nS[4] / nZ;
    let nj = Math.min(110, nm.width / 2 + 30);
    let nM = nj / nN;
    let Q0 = nm.cx;
    let Q1 = nm.up ? Math.max(8, nm.hitY - 52) : Math.min(472, nm.hitY + 56);
    for (let Q6 = 4; Q6 >= 0; Q6--) {
      let Q7 = Math.round(Math.min(nj, (nS[Q6] / nZ) * nM));
      nu.fillStyle = O5[Q6];
      nu.fillRect(Q0 - Q7, Q1 - 1, Q7 * 2, 3);
    }
    nu.fillStyle = "#ffffff";
    nu.fillRect(Q0, Q1 - 6, 1, 13);
    let Q3 = this.cfg.hitError === "DOTS";
    for (let Q8 = 0; Q8 < this.heN; Q8++) {
      let Q9 = nL - this.heAt[Q8];
      if (Q9 < 0 || Q9 > 3500) {
        continue;
      }
      let QO = Math.max(-nN, Math.min(nN, this.heErr[Q8] / nZ));
      nu.globalAlpha = 1 - Q9 / 3500;
      nu.fillStyle = r[this.heJ[Q8]];
      if (Q3) {
        nu.fillRect(Math.round(Q0 + QO * nM) - 1, Q1 - 9, 2, 2);
      } else {
        nu.fillRect(Math.round(Q0 + QO * nM), Q1 - 7, 1, 15);
      }
    }
    nu.globalAlpha = 1;
    let Q4 = Math.max(-nN, Math.min(nN, this.heMean / nZ));
    let Q5 = Math.round(Q0 + Q4 * nM);
    nu.fillStyle = Jn.yellow;
    nu.fillRect(Q5 - 3, Q1 - 13, 7, 2);
    nu.fillRect(Q5 - 2, Q1 - 11, 5, 2);
    nu.fillRect(Q5 - 1, Q1 - 9, 3, 1);
  }
  drawKeyOverlay(nu, nE) {
    let nL = nu.ctx;
    let ng = this.play;
    let nm = ng.keys;
    let nS = 40;
    let nZ = 20;
    let nN = 640 - nS - 6;
    let nj = 240 - (nm * (nZ + 2)) / 2;
    for (let nM = 0; nM < nm; nM++) {
      let Q0 = Math.round(nj + nM * (nZ + 2));
      let Q1 = ng.down[nM];
      JT(nL, nN, Q0, nS, nZ, Q1 ? "#ffffff" : Jn.dk, Q1 ? this.cols[nM].dark : "#000000", 0.9);
      JQ(nu, nN + 4, Q0 + 2, nE ? nE[nM] : "", Q1 ? Jn.yellow : "#ffffff");
      JQ(nu, nN + nS - 3, Q0 + 2, JE(ng.presses[nM] % 1000), Jn.gray, "fnt_main", "right");
    }
  }
};
l(O3, "ManiaRenderer");
var O4 = O3;
var O5 = ["#ffff00", "#606060", "#4a7a4a", "#7a5020", "#404040"];
function O6(nu, nE, nL, ng, nm, nS) {
  let nZ = nu.ctx;
  let nN = nE.win;
  let nj = nN[4] / nE.rate;
  let nM = ng + nS / 2;
  let Q0 = (nS / 2 - 3) / nj;
  nZ.save();
  nZ.fillStyle = "#000000";
  nZ.fillRect(nL, ng, nm, nS);
  let Q1 = [
    [nN[4], "#101010"],
    [nN[3], "#161616"],
    [nN[2], "#1c1c1c"],
    [nN[1], "#242424"],
    [nN[0], "#2c2c10"],
  ];
  for (let [Q5, Q6] of Q1) {
    let Q7 = Math.round(Math.min(nS / 2, (Q5 / nE.rate) * Q0));
    nZ.fillStyle = Q6;
    nZ.fillRect(nL, Math.round(nM) - Q7, nm, Q7 * 2);
  }
  nZ.fillStyle = Jn.gray;
  nZ.fillRect(nL, Math.round(nM), nm, 1);
  let Q3 = nE.chart.first;
  let Q4 = Math.max(Q3 + 1, nE.chart.last);
  for (let Q8 = 0; Q8 < nE.errN; Q8++) {
    let Q9 = nL + ((nE.errAt[Q8] - Q3) / (Q4 - Q3)) * (nm - 4) + 2;
    let QO = nE.errMs[Q8] / nE.rate;
    let Qn = nE.errJ[Q8];
    if (QO !== QO) {
      nZ.fillStyle = "rgba(255,64,64,0.5)";
      nZ.fillRect(Math.round(Q9), ng + 2, 1, nS - 4);
      continue;
    }
    let QQ = nM + Math.max(-nj, Math.min(nj, QO)) * Q0;
    nZ.fillStyle = r[Qn];
    nZ.fillRect(Math.round(Q9) - 1, Math.round(QQ) - 1, 2, 2);
  }
  nZ.restore();
  JQ(nu, nL + 4, ng + 1, "EARLY", Jn.gray);
  JQ(nu, nL + 4, ng + nS - 17, "LATE", Jn.gray);
}
l(O6, "drawHitGraph");
function O7(nu, nE, nL, ng, nm, nS) {
  let nZ = nu.ctx;
  let nN = nE.win[4] / nE.rate;
  let nj = 41;
  let nM = new Int32Array(nj);
  let Q0 = 1;
  for (let Q3 = 0; Q3 < nE.errN; Q3++) {
    let Q4 = nE.errMs[Q3] / nE.rate;
    if (Q4 !== Q4) {
      continue;
    }
    let Q5 = Math.max(0, Math.min(nj - 1, Math.round(((Q4 / nN) * (nj - 1)) / 2 + (nj - 1) / 2)));
    if (++nM[Q5] > Q0) {
      Q0 = nM[Q5];
    }
  }
  nZ.save();
  nZ.fillStyle = "#000000";
  nZ.fillRect(nL, ng, nm, nS);
  let Q1 = nm / nj;
  for (let Q6 = 0; Q6 < nj; Q6++) {
    let Q7 = Math.abs(((Q6 - (nj - 1) / 2) / ((nj - 1) / 2)) * nN);
    let Q8 = 4;
    for (let QO = 0; QO < 5; QO++) {
      if (Q7 <= nE.win[QO] / nE.rate) {
        Q8 = QO;
        break;
      }
    }
    let Q9 = Math.round((nM[Q6] / Q0) * (nS - 20));
    nZ.fillStyle = r[Q8];
    nZ.fillRect(
      Math.round(nL + Q6 * Q1 + 1),
      ng + nS - 2 - Q9,
      Math.max(1, Math.round(Q1 - 2)),
      Q9,
    );
  }
  nZ.fillStyle = Jn.gray;
  nZ.fillRect(Math.round(nL + nm / 2), ng + 2, 1, nS - 4);
  nZ.restore();
  JQ(nu, nL + 4, ng + 1, "EARLY", Jn.gray);
  JQ(nu, nL + nm - 4, ng + 1, "LATE", Jn.gray, "fnt_main", "right");
}
l(O7, "drawHistogram");
i();
i();
var O8 = {
  x: 32,
  y: 16,
  w: 384,
  h: 448,
  x2: 416,
  y2: 464,
  cx: 224,
};
var O9 = O8.y + 112;
var OJ = 30;
var OO = ["EASY", "NORMAL", "HARD", "LUNATIC"];
var On = [0.5, 1, 1.2, 1.5];
var OQ = ["susie", "ralsei", "noelle", "kris", "lancer", "berdly"];
var OG = [10000000, 25000000, 50000000, 80000000];
var OV = 14;
var OT = {
  susie: 60,
  noelle: 84,
  ralsei: 72,
  kris: 90,
  lancer: 78,
  berdly: 80,
};
var OU = [0, 0, 8, 2, 2, 0, 0, 2, 14, 2, 4, 6, 0, 0, 0];
var Ow = {
  susie: [8, 1],
  ralsei: [4, 8],
  noelle: [3, 5],
  kris: [5, 1],
  lancer: [7, 4],
  berdly: [6, 2],
};
var Ob = {
  W: 0,
  RED: 1,
  ORANGE: 2,
  YELLOW: 3,
  GREEN: 4,
  CYAN: 5,
  BLUE: 6,
  PURPLE: 7,
  PINK: 8,
};
var Od = [
  "#ffffff",
  "#ff5050",
  "#ffa040",
  "#ffff48",
  "#58ff78",
  "#48ffff",
  "#6a94ff",
  "#c878ff",
  "#ff78d8",
];
var OW = [];
function Oh(nu) {
  let nE = Object.assign(
    {
      frame: 0,
      frames: 1,
      anim: 4,
      scale: 1,
      r: 3,
      orient: 0,
      spin: 6,
      rot0: 0,
      halo: 0,
      face: 0,
      center: false,
    },
    nu,
  );
  nE.id = OW.length;
  OW.push(nE);
  return nE.id;
}
l(Oh, "defType");
var Oc = Math.PI / 180;
var Oz = Math.PI * 2;
var Ol = 4096;
var OX = 256;
var OY = 1536;
var Of = 2048;
var OK = 40;
var OP = 1;
var OI = 4;
var OA = 8;
var Op = {
  AIM: 1,
  TURN: 2,
  BURST: 3,
  STOP: 4,
  CALL: 5,
  SPEED: 6,
  AIMBURST: 7,
};
var OR = {
  SPARK: 0,
  SQUARE: 1,
  RING: 2,
  SHARD: 3,
  SPRITE: 4,
  TEXT: 5,
  FLAKE: 6,
  GLINT: 7,
  SLASH: 8,
};
function Ox(nu) {
  let nE = nu >>> 0 || 2654435769;
  return () => {
    nE ^= nE << 13;
    nE >>>= 0;
    nE ^= nE >>> 17;
    nE ^= nE << 5;
    nE >>>= 0;
    return nE / 4294967296;
  };
}
l(Ox, "xorshift");
var Oe = class QE {
  constructor() {
    this.bx = new Float32Array(Ol);
    this.by = new Float32Array(Ol);
    this.bpx = new Float32Array(Ol);
    this.bpy = new Float32Array(Ol);
    this.bvx = new Float32Array(Ol);
    this.bvy = new Float32Array(Ol);
    this.bdir = new Float32Array(Ol);
    this.bspd = new Float32Array(Ol);
    this.bacc = new Float32Array(Ol);
    this.blim = new Float32Array(Ol);
    this.bw = new Float32Array(Ol);
    this.bgrav = new Float32Array(Ol);
    this.bage = new Int32Array(Ol);
    this.btype = new Uint16Array(Ol);
    this.bcol = new Uint8Array(Ol);
    this.bflag = new Uint8Array(Ol);
    this.bbnc = new Uint8Array(Ol);
    this.bdelay = new Uint8Array(Ol);
    this.brot = new Float32Array(Ol);
    this.bprot = new Float32Array(Ol);
    this.bevT = new Int32Array(Ol);
    this.bevK = new Uint8Array(Ol);
    this.bevA = new Float32Array(Ol);
    this.bevB = new Float32Array(Ol);
    this.bevC = new Float32Array(Ol);
    this.bevD = new Float32Array(Ol);
    this.btag = new Int32Array(Ol);
    this.blive = new Int32Array(Ol);
    this.bpos = new Int32Array(Ol);
    this.bn = 0;
    this.bfree = new Int32Array(Ol);
    this.bfn = 0;
    this.sx = new Float32Array(OX);
    this.sy = new Float32Array(OX);
    this.spx = new Float32Array(OX);
    this.spy = new Float32Array(OX);
    this.svx = new Float32Array(OX);
    this.svy = new Float32Array(OX);
    this.sdmg = new Float32Array(OX);
    this.skind = new Uint8Array(OX);
    this.shome = new Float32Array(OX);
    this.slife = new Int16Array(OX);
    this.sbnc = new Uint8Array(OX);
    this.spass = new Uint8Array(OX);
    this.sage = new Int16Array(OX);
    this.slive = new Int32Array(OX);
    this.spos = new Int32Array(OX);
    this.sn = 0;
    this.sfree = new Int32Array(OX);
    this.sfn = 0;
    this.ix = new Float32Array(OY);
    this.iy = new Float32Array(OY);
    this.ipx = new Float32Array(OY);
    this.ipy = new Float32Array(OY);
    this.ivx = new Float32Array(OY);
    this.ivy = new Float32Array(OY);
    this.ikind = new Uint8Array(OY);
    this.ihome = new Uint8Array(OY);
    this.iage = new Int32Array(OY);
    this.ilive = new Int32Array(OY);
    this.ipos = new Int32Array(OY);
    this.inn = 0;
    this.ifree = new Int32Array(OY);
    this.ifn = 0;
    this.qx = new Float32Array(Of);
    this.qy = new Float32Array(Of);
    this.qpx = new Float32Array(Of);
    this.qpy = new Float32Array(Of);
    this.qvx = new Float32Array(Of);
    this.qvy = new Float32Array(Of);
    this.qlife = new Int32Array(Of);
    this.qmax = new Int32Array(Of);
    this.qkind = new Uint8Array(Of);
    this.qcol = new Uint8Array(Of);
    this.qsize = new Float32Array(Of);
    this.qrot = new Float32Array(Of);
    this.qvr = new Float32Array(Of);
    this.qdrag = new Float32Array(Of);
    this.qspr = new Int32Array(Of);
    this.qlive = new Int32Array(Of);
    this.qpos = new Int32Array(Of);
    this.qn = 0;
    this.qfree = new Int32Array(Of);
    this.qfn = 0;
    this.lasers = [];
    for (let nu = 0; nu < OK; nu++) {
      this.lasers.push({
        on: false,
        x: 0,
        y: 0,
        ang: 0,
        pang: 0,
        w: 0,
        len: 0,
        width: 0,
        warn: 0,
        life: 0,
        t: 0,
        col: 0,
        grazeT: 0,
        follow: null,
        fx: 0,
        fy: 0,
        fade: 6,
      });
    }
    this.markers = [];
    for (let nE = 0; nE < 32; nE++) {
      this.markers.push({
        on: false,
        kind: "",
        x: 0,
        y: 0,
        t: 0,
        life: 0,
        a: 0,
        b: 0,
      });
    }
    this.sndAt = Object.create(null);
    this.hooks = {
      snd: null,
      shake: null,
      event: null,
    };
    this.inputZero = {
      l: 0,
      r: 0,
      u: 0,
      d: 0,
      shoot: 0,
      focus: 0,
      bomb: 0,
      tdx: 0,
      tdy: 0,
      touch: 0,
    };
    this.reset();
  }
  reset() {
    this.bn = 0;
    this.bfn = 0;
    for (let nu = Ol - 1; nu >= 0; nu--) {
      this.bfree[this.bfn++] = nu;
    }
    this.sn = 0;
    this.sfn = 0;
    for (let nE = OX - 1; nE >= 0; nE--) {
      this.sfree[this.sfn++] = nE;
    }
    this.inn = 0;
    this.ifn = 0;
    for (let nL = OY - 1; nL >= 0; nL--) {
      this.ifree[this.ifn++] = nL;
    }
    this.qn = 0;
    this.qfn = 0;
    for (let ng = Of - 1; ng >= 0; ng--) {
      this.qfree[this.qfn++] = ng;
    }
    for (let nm of this.lasers) {
      nm.on = false;
    }
    for (let nS of this.markers) {
      nS.on = false;
    }
    this.t = 0;
    this.state = "idle";
    this.flashT = 0;
    this.flashMax = 1;
    this.flashCol = 0;
    this.shakeAmp = 0;
    this.shakeT = 0;
    this.banner = null;
    this.popups = [];
    this.peakBullets = 0;
  }
  start(nu) {
    this.reset();
    this.opts = nu;
    this.mode = nu.mode || "rush";
    this.diff = Math.max(0, Math.min(3, nu.diff | 0));
    this.partner = OQ.includes(nu.partner) ? nu.partner : "susie";
    this.bosses = nu.bosses;
    this.rand = Ox(nu.seed || 12345);
    let nE = this.mode === "practice";
    this.bombBase = 3 + Math.max(0, Math.min(2, nu.bombs | 0));
    this.pal = nu.pal | 0;
    this.P = {
      x: O8.cx,
      y: O8.y2 - 48,
      px: O8.cx,
      py: O8.y2 - 48,
      focus: 0,
      alive: 1,
      invuln: 60,
      deadT: 0,
      hitT: 0,
      power: nE ? 4 : Math.max(2, Math.min(4, +nu.power || 2)),
      lives: nE ? 9 : (this.diff === 0 ? 4 : 3) + Math.max(0, Math.min(2, nu.lives | 0)),
      bombs: this.bombBase,
      tp: 0,
      graze: 0,
      score: 0,
      shotT: 0,
      shotT2: 0,
      optAng: 0,
      deaths: 0,
      bombsUsed: 0,
      focusT: 0,
      tilt: 0,
      lean: 0,
    };
    this.freezeT = 0;
    this.bike = {
      x: 0,
      y: 0,
      px: 0,
      py: 0,
      vy: 0,
      on: 0,
    };
    this.storm = [];
    for (let nL = 0; nL < 3; nL++) {
      this.storm.push({
        x: 0,
        y: 0,
        px: 0,
        py: 0,
        on: 0,
      });
    }
    this.extendIdx = 0;
    this.stats = {
      captured: 0,
      cards: 0,
      bosses: 0,
      maxBullets: 0,
      capturedIds: [],
    };
    this.hiScoreSeen = 0;
    this.bombT = 0;
    this.bombMax = 1;
    this.bombKind = null;
    this.bombX = 0;
    this.bombY = 0;
    this.boss = {
      x: O8.cx,
      y: O8.y - 80,
      px: O8.cx,
      py: O8.y - 80,
      sx: 0,
      sy: 0,
      tx: 0,
      ty: 0,
      mt: 0,
      md: 0,
      hp: 1,
      hpMax: 1,
      show: 0,
      flashT: 0,
      def: null,
      spr: null,
      sprFrame: 0,
      anim: 0,
      hitR: 26,
      invuln: 0,
      dmgT: 0,
      trail: 0,
      face: 1,
      lastDmgT: -99,
      scale: 2,
      alpha: 1,
    };
    this.bi = -1;
    this.pi = -1;
    this.phase = null;
    this.S = null;
    this.pt = 0;
    this.declT = 0;
    this.gapT = 0;
    this.cardFailed = false;
    this.cardBonus = 0;
    this.cardBonusMax = 0;
    this.timer = 0;
    this.timerMax = 0;
    this.itemsHomeT = 0;
    this.endT = 0;
    this.result = null;
    this.state = "play";
    if (nE && nu.card) {
      this.enterBoss(nu.card.boss, true);
      this.beginPhase(nu.card.phase);
    } else {
      this.enterBoss(nu.startBoss | 0, false);
    }
  }
  lv(nu, nE, nL, ng) {
    let nm = this.diff;
    if (nm === 0) {
      return nu;
    } else if (nm === 1) {
      return nE;
    } else if (nm === 2 || ng === undefined) {
      return nL;
    } else {
      return ng;
    }
  }
  rr(nu, nE) {
    return nu + (nE - nu) * this.rand();
  }
  aim(nu, nE) {
    return Math.atan2(this.P.y - nE, this.P.x - nu);
  }
  snd(nu, nE = 1, nL = 2, ng = 1) {
    let nm = this.sndAt[nu];
    if (nm === undefined || !(this.t - nm < nL)) {
      this.sndAt[nu] = this.t;
      if (this.hooks.snd) {
        this.hooks.snd(nu, nE, ng);
      }
    }
  }
  shake(nu, nE) {
    if (nu >= this.shakeAmp || this.shakeT <= 0) {
      this.shakeAmp = nu;
      this.shakeT = nE;
      this.shakeMax = nE;
    }
  }
  flash(nu, nE) {
    this.flashCol = nu;
    this.flashT = nE;
    this.flashMax = nE;
  }
  emit(nu, nE, nL) {
    if (this.hooks.event) {
      this.hooks.event(nu, nE, nL);
    }
  }
  shot(nu, nE, nL, ng, nm, nS = 0) {
    if (this.bfn === 0 || nu - nu !== 0 || nE - nE !== 0 || nL - nL !== 0 || ng - ng !== 0) {
      return -1;
    }
    let nZ = this.bfree[--this.bfn];
    this.bpos[nZ] = this.bn;
    this.blive[this.bn++] = nZ;
    this.bx[nZ] = nu;
    this.by[nZ] = nE;
    this.bpx[nZ] = nu;
    this.bpy[nZ] = nE;
    this.bdir[nZ] = nL;
    this.bspd[nZ] = ng;
    this.bvx[nZ] = Math.cos(nL) * ng;
    this.bvy[nZ] = Math.sin(nL) * ng;
    this.bacc[nZ] = 0;
    this.blim[nZ] = 0;
    this.bw[nZ] = 0;
    this.bgrav[nZ] = 0;
    this.bage[nZ] = 0;
    this.btype[nZ] = nm;
    this.bcol[nZ] = nS;
    this.bflag[nZ] = 0;
    this.bbnc[nZ] = 0;
    this.bdelay[nZ] = 0;
    let nN = OW[nm];
    this.brot[nZ] = nN.orient === 1 ? nL : nN.rot0 * Oc;
    this.bprot[nZ] = this.brot[nZ];
    this.bevT[nZ] = -1;
    this.bevK[nZ] = 0;
    this.btag[nZ] = 0;
    return nZ;
  }
  bAcc(nu, nE, nL) {
    if (nu >= 0) {
      this.bacc[nu] = nE;
      this.blim[nu] = nL;
    }
    return nu;
  }
  bCurve(nu, nE) {
    if (nu >= 0) {
      this.bw[nu] = nE * Oc;
    }
    return nu;
  }
  bGrav(nu, nE) {
    if (nu >= 0) {
      this.bgrav[nu] = nE;
    }
    return nu;
  }
  bBounce(nu, nE) {
    if (nu >= 0) {
      this.bbnc[nu] = nE;
    }
    return nu;
  }
  bDelay(nu, nE) {
    if (nu >= 0) {
      this.bdelay[nu] = nE;
      this.bflag[nu] |= OI;
    }
    return nu;
  }
  bKeep(nu) {
    if (nu >= 0) {
      this.bflag[nu] |= OA;
    }
    return nu;
  }
  bTag(nu, nE) {
    if (nu >= 0) {
      this.btag[nu] = nE;
    }
    return nu;
  }
  bEv(nu, nE, nL, ng = 0, nm = 0, nS = 0, nZ = 0) {
    if (nu >= 0) {
      this.bevT[nu] = nE;
      this.bevK[nu] = nL;
      this.bevA[nu] = ng;
      this.bevB[nu] = nm;
      this.bevC[nu] = nS;
      this.bevD[nu] = nZ;
    }
    return nu;
  }
  bSetDir(nu, nE, nL) {
    this.bdir[nu] = nE;
    if (nL !== undefined) {
      this.bspd[nu] = nL;
    }
    this.bvx[nu] = Math.cos(nE) * this.bspd[nu];
    this.bvy[nu] = Math.sin(nE) * this.bspd[nu];
    if (OW[this.btype[nu]].orient === 1) {
      this.brot[nu] = nE;
    }
  }
  ring(nu, nE, nL, ng, nm, nS, nZ = 0) {
    let nN = Oz / nL;
    let nj = -1;
    for (let nM = 0; nM < nL; nM++) {
      let Q0 = this.shot(nu, nE, ng + nM * nN, nm, nS, nZ);
      if (nM === 0) {
        nj = Q0;
      }
    }
    return nj;
  }
  fan(nu, nE, nL, ng, nm, nS, nZ, nN = 0) {
    if (nL <= 1) {
      return this.shot(nu, nE, ng, nS, nZ, nN);
    }
    let nj = -1;
    for (let nM = 0; nM < nL; nM++) {
      let Q0 = this.shot(nu, nE, ng - nm / 2 + (nm * nM) / (nL - 1), nS, nZ, nN);
      if (nM === 0) {
        nj = Q0;
      }
    }
    return nj;
  }
  lastN(nu, nE) {
    for (let nL = this.bn - nu; nL < this.bn; nL++) {
      if (nL >= 0) {
        nE(this.blive[nL]);
      }
    }
  }
  killBullet(nu) {
    let nE = this.bpos[nu];
    let nL = this.blive[--this.bn];
    this.blive[nE] = nL;
    this.bpos[nL] = nE;
    this.bfree[this.bfn++] = nu;
  }
  clearBullets(nu, nE = true, nL = 0, ng = 0, nm = 0) {
    let nS = nm * nm;
    for (let nZ = this.bn - 1; nZ >= 0; nZ--) {
      let nN = this.blive[nZ];
      if (!nE) {
        let nj = this.bx[nN] - nL;
        let nM = this.by[nN] - ng;
        if (nj * nj + nM * nM > nS) {
          continue;
        }
      }
      if (
        nu &&
        this.bx[nN] > O8.x &&
        this.bx[nN] < O8.x2 &&
        this.by[nN] > O8.y &&
        this.by[nN] < O8.y2
      ) {
        let Q0 = this.item(this.bx[nN], this.by[nN], 2);
        if (Q0 >= 0) {
          this.ivx[Q0] = 0;
          this.ivy[Q0] = -1;
          this.ihome[Q0] = 1;
        }
      } else if ((nZ & 3) === 0) {
        this.part(OR.GLINT, this.bx[nN], this.by[nN], 0, -0.5, 10, this.bcol[nN], 1);
      }
      this.killBullet(nN);
    }
  }
  laser(nu, nE, nL, ng, nm, nS, nZ, nN = 0, nj = 0, nM = null) {
    for (let Q0 of this.lasers) {
      if (!Q0.on) {
        Q0.on = true;
        Q0.x = nu;
        Q0.y = nE;
        Q0.ang = nL;
        Q0.pang = nL;
        Q0.w = nj * Oc;
        Q0.len = ng;
        Q0.width = nm;
        Q0.warn = nS;
        Q0.life = nZ;
        Q0.t = 0;
        Q0.col = nN;
        Q0.grazeT = 0;
        Q0.follow = nM;
        Q0.fx = nM ? nu - nM.x : 0;
        Q0.fy = nM ? nE - nM.y : 0;
        Q0.fade = 6;
        return Q0;
      }
    }
    return null;
  }
  mark(nu, nE, nL, ng, nm = 0, nS = 0) {
    for (let nZ of this.markers) {
      if (!nZ.on) {
        nZ.on = true;
        nZ.kind = nu;
        nZ.x = nE;
        nZ.y = nL;
        nZ.t = 0;
        nZ.life = ng;
        nZ.a = nm;
        nZ.b = nS;
        return nZ;
      }
    }
    return null;
  }
  bAlive(nu, nE) {
    return (
      nu >= 0 && this.bpos[nu] < this.bn && this.blive[this.bpos[nu]] === nu && this.btag[nu] === nE
    );
  }
  item(nu, nE, nL) {
    if (this.ifn === 0) {
      return -1;
    }
    let ng = this.ifree[--this.ifn];
    this.ipos[ng] = this.inn;
    this.ilive[this.inn++] = ng;
    this.ix[ng] = nu;
    this.iy[ng] = nE;
    this.ipx[ng] = nu;
    this.ipy[ng] = nE;
    this.ivx[ng] = (this.rand() - 0.5) * 2;
    this.ivy[ng] = -3.5 - this.rand() * 1.5;
    this.ikind[ng] = nL;
    this.ihome[ng] = 0;
    this.iage[ng] = 0;
    return ng;
  }
  killItem(nu) {
    let nE = this.ipos[nu];
    let nL = this.ilive[--this.inn];
    this.ilive[nE] = nL;
    this.ipos[nL] = nE;
    this.ifree[this.ifn++] = nu;
  }
  drop(nu, nE, nL, ng, nm = 0) {
    for (let nS = 0; nS < nL; nS++) {
      let nZ = this.item(nu + this.rr(-40, 40), nE + this.rr(-30, 20), 0);
      if (nZ >= 0) {
        this.ivy[nZ] -= this.rand() * 2;
      }
    }
    for (let nN = 0; nN < ng; nN++) {
      let nj = this.item(nu + this.rr(-48, 48), nE + this.rr(-30, 20), 1);
      if (nj >= 0) {
        this.ivy[nj] -= this.rand() * 2;
      }
    }
    for (let nM = 0; nM < nm; nM++) {
      let Q0 = this.item(nu + this.rr(-30, 30), nE + this.rr(-20, 10), 3);
      if (Q0 >= 0) {
        this.ivy[Q0] -= 1;
      }
    }
  }
  part(nu, nE, nL, ng, nm, nS, nZ = 0, nN = 1, nj = -1) {
    if (this.qfn === 0) {
      return -1;
    }
    let nM = this.qfree[--this.qfn];
    this.qpos[nM] = this.qn;
    this.qlive[this.qn++] = nM;
    this.qx[nM] = nE;
    this.qy[nM] = nL;
    this.qpx[nM] = nE;
    this.qpy[nM] = nL;
    this.qvx[nM] = ng;
    this.qvy[nM] = nm;
    this.qlife[nM] = nS;
    this.qmax[nM] = nS;
    this.qkind[nM] = nu;
    this.qcol[nM] = nZ;
    this.qsize[nM] = nN;
    this.qrot[nM] = this.rand() * Oz;
    this.qvr[nM] = 0;
    this.qdrag[nM] = 0.9;
    this.qspr[nM] = nj;
    return nM;
  }
  burst(nu, nE, nL, ng, nm, nS, nZ = OR.SPARK, nN = 1) {
    for (let nj = 0; nj < nL; nj++) {
      let nM = this.rand() * Oz;
      let Q0 = ng * (0.3 + this.rand() * 0.7);
      this.part(
        nZ,
        nu,
        nE,
        Math.cos(nM) * Q0,
        Math.sin(nM) * Q0,
        nm + ((this.rand() * nm * 0.5) | 0),
        nS,
        nN,
      );
    }
  }
  popup(nu, nE, nL, ng = 0, nm = 0) {
    if (this.popups.length > 24) {
      this.popups.shift();
    }
    for (let nS = this.popups.length - 1; nS >= 0; nS--) {
      let nZ = this.popups[nS];
      if (nZ.t < 6 && Math.abs(nZ.x - nu) < 36 && Math.abs(nZ.y - nE) < 10) {
        nE = nZ.y - 10;
      }
    }
    this.popups.push({
      x: nu,
      y: nE,
      text: nL,
      col: ng,
      t: 0,
      big: nm,
    });
  }
  bossMove(nu, nE, nL) {
    let ng = this.boss;
    ng.sx = ng.x;
    ng.sy = ng.y;
    ng.tx = Math.max(O8.x + 40, Math.min(O8.x2 - 40, nu));
    ng.ty = Math.max(O8.y + 40, Math.min(O8.y + 200, nE));
    ng.mt = 0;
    ng.md = Math.max(1, nL);
    if (Math.abs(ng.tx - ng.sx) > 4) {
      ng.face = ng.tx > ng.sx ? 1 : -1;
    }
  }
  bossWander(nu, nE = 70, nL = 70, ng = 130) {
    let nm = this.boss;
    let nS = nm.x + this.rr(-nE, nE) + (this.P.x - nm.x) * 0.25;
    nS = Math.max(O8.x + 70, Math.min(O8.x2 - 70, nS));
    this.bossMove(nS, O8.y + this.rr(nL, ng), nu);
  }
  bossMoving() {
    return this.boss.mt < this.boss.md;
  }
  bossForm(nu) {
    let nE = this.boss;
    nE.form = nu || null;
    nE.scale = (nu && nu.scale) || (nE.def && nE.def.scale) || 2;
  }
  damageBoss(nu) {
    let nE = this.boss;
    if (
      !this.phase ||
      nE.invuln > 0 ||
      this.declT > 0 ||
      this.gapT > 0 ||
      this.phase.survival ||
      nE.hp <= 0
    ) {
      return false;
    }
    let nL = this.bossDmgMult();
    nE.hp -= nu * nL;
    this.P.score += (Math.round(nu * 10) * 10 * On[this.diff]) / 1;
    nE.dmgT = 2;
    nE.lastDmgT = this.t;
    return true;
  }
  bossDmgMult() {
    if (this.pt < 30) {
      return 0.25;
    } else {
      return 1;
    }
  }
  enterBoss(nu, nE) {
    this.bi = nu;
    let nL = this.bosses[nu];
    let ng = this.boss;
    ng.def = nL;
    ng.spr = nL.spr;
    ng.form = null;
    ng.scale = nL.scale || 2;
    ng.hitR = nL.hitR || 26;
    ng.x = O8.cx;
    ng.y = nE ? O8.y + 100 : O8.y - 90;
    ng.px = ng.x;
    ng.py = ng.y;
    ng.show = 1;
    ng.alpha = 1;
    ng.dying = 0;
    ng.mt = ng.md = 1;
    if (!nE) {
      this.bossMove(O8.cx, O8.y + 100, 50);
    }
    this.pi = -1;
    this.phase = null;
    this.gapT = nE ? 22 : 6;
    this.introT = nE ? 0 : nL.line ? 100 : 64;
    if (nE) {
      this.emit("boss", nu);
    } else {
      this.banner = {
        kind: "boss",
        text: nL.name,
        sub: nL.title,
        t: 0,
        line: nL.line || null,
        chars: 0,
      };
      this.emit("boss", nu);
    }
  }
  beginPhase(nu) {
    let nE = this.boss.def;
    this.pi = nu;
    let nL = nE.phases[nu];
    this.phase = nL;
    let ng = this.boss;
    let nm = this.diff === 0 ? 0.8 : 1;
    ng.hpMax = Math.max(1, nL.hp * nm);
    ng.hp = ng.hpMax;
    ng.invuln = 0;
    this.gapT = 0;
    this.S = {};
    this.pt = 0;
    this.timerMax = nL.time * OJ;
    this.timer = this.timerMax;
    this.cardFailed = false;
    this.declT = nL.spell ? 48 : 16;
    let nS = (this.bi + 1) * 1000000 * On[this.diff];
    this.cardBonusMax = nL.spell ? nS : 0;
    this.cardBonus = this.cardBonusMax;
    if (nL.spell) {
      this.stats.cards++;
      this.banner = {
        kind: "spell",
        text: nL.name,
        sub: "",
        t: 0,
      };
      this.snd("snd_spellcast", 0.8, 1);
      if (nE.voice) {
        this.snd(nE.voice, 0.7, 1);
      }
      this.flash(0, 8);
      for (let nZ = 0; nZ < 28; nZ++) {
        let nN = this.rand() * Oz;
        let nj = 90 + this.rand() * 60;
        let nM = this.part(
          OR.SPARK,
          ng.x + Math.cos(nN) * nj,
          ng.y + Math.sin(nN) * nj,
          (-Math.cos(nN) * nj) / 16,
          (-Math.sin(nN) * nj) / 16,
          16,
          nE.col || 0,
          1.4,
        );
        if (nM >= 0) {
          this.qdrag[nM] = 1;
        }
      }
    }
    this.emit("phase", this.bi, nu);
    if (nL.init) {
      nL.init(this, this.S);
    }
  }
  endPhase(nu) {
    let nE = this.phase;
    let nL = this.boss;
    let ng = nE.spell && !this.cardFailed && (!nu || nE.survival);
    this.clearBullets(true);
    for (let nN of this.lasers) {
      if (nN.on && nN.t < nN.warn + nN.life) {
        nN.t = Math.max(nN.t, nN.warn + nN.life);
      }
    }
    this.itemsHomeT = 45;
    let nm = 0;
    if (nE.spell) {
      if (ng) {
        nm = Math.round(this.cardBonus / 10) * 10;
        this.P.score += nm;
        this.stats.captured++;
        this.stats.capturedIds.push(this.cardId(this.bi, this.pi));
        this.banner = {
          kind: "capture",
          text: "SPELL CARD BONUS!!",
          sub: String(nm),
          t: 0,
        };
        this.snd("snd_great_shine", 0.9, 1);
      } else {
        this.banner = {
          kind: "failed",
          text: "BONUS FAILED...",
          sub: "",
          t: 0,
        };
      }
      this.emit("card", this.cardId(this.bi, this.pi), ng);
    }
    let nS = this.pi >= nL.def.phases.length - 1;
    let nZ = this.mode === "practice";
    if (!nZ) {
      if (!nu || nE.spell) {
        this.drop(nL.x, nL.y, nS ? 10 : 6, nS ? 14 : 8, nE.spell ? 1 : 0);
      } else {
        this.drop(nL.x, nL.y, 4, 3, 0);
      }
    }
    this.snd(nS ? "snd_badexplosion" : "snd_bomb", nS ? 1 : 0.6, 1);
    this.burst(nL.x, nL.y, nS ? 40 : 18, nS ? 9 : 6, 16, nL.def.col || 0, OR.SPARK, 1.6);
    this.part(OR.RING, nL.x, nL.y, 0, 0, nS ? 24 : 14, 0, nS ? 6 : 3);
    this.shake(nS ? 7 : 3, nS ? 24 : 8);
    if (nS) {
      this.flash(0, 16);
    }
    this.phase = null;
    if (nZ) {
      this.finish("practice", ng);
      return;
    }
    if (nS) {
      this.stats.bosses++;
      let nj = (this.bi + 1) * 500000 * On[this.diff];
      this.P.score += nj;
      this.popup(nL.x, nL.y + 40, String(nj), 3, 1);
      nL.dying = 50;
      this.emit("bossDown", this.bi);
    } else {
      this.gapT = 40;
    }
  }
  finish(nu, nE) {
    this.state = "ending";
    this.endT = nu === "over" ? 50 : 70;
    if (nu === "clear") {
      let nL = this.P;
      let ng = (Math.max(0, nL.lives) * 3000000 + nL.bombs * 1000000) * On[this.diff];
      nL.score += ng;
    }
    this.result = {
      kind: nu,
      captured: !!nE,
    };
  }
  cardId(nu, nE) {
    return this.bosses[nu].id + ":" + nE;
  }
  typeLine(nu) {
    if (nu.t - OV <= 0) {
      return;
    }
    let nE = 0;
    for (let ng = 0; ng < nu.line.length; ng++) {
      nE += nu.line[ng].length;
    }
    if (nu.chars >= nE) {
      return;
    }
    nu.chars++;
    let nL = this.boss.def;
    if (nL && nL.txt && nu.chars & 1) {
      this.snd(nL.txt, 0.5, 2);
    }
  }
  bomb() {
    let nu = this.P;
    if (this.bombT > 0 || nu.bombs <= 0 || !nu.alive || this.state !== "play") {
      return false;
    }
    nu.bombs--;
    nu.bombsUsed++;
    let nE = this.partner;
    this.bombKind = nE;
    this.bombMax = OT[nE] || 72;
    this.bombT = this.bombMax;
    this.bombX = nu.x;
    this.bombY = nu.y;
    nu.invuln = Math.max(nu.invuln, this.bombMax + (nE === "ralsei" ? 45 : 25));
    if (this.phase && this.phase.spell) {
      this.cardFailed = true;
    }
    if (nE === "kris") {
      this.freezeT = this.bombMax;
    } else {
      this.clearBullets(nE === "ralsei" || nE === "noelle", true);
    }
    for (let nL of this.lasers) {
      if (nL.on) {
        nL.t = Math.max(nL.t, nL.warn + nL.life);
      }
    }
    this.itemsHomeT = Math.max(this.itemsHomeT, this.bombMax);
    if (nE === "susie") {
      this.snd("snd_rudebuster_swing", 1, 1);
      this.shake(3, 10);
    } else if (nE === "noelle") {
      this.snd("snd_snowgrave", 0.9, 1);
      this.flash(5, 20);
    } else if (nE === "kris") {
      this.snd("snd_bell", 0.8, 1);
      this.snd("snd_weirdeffect", 0.7, 1);
      this.flash(6, 10);
    } else if (nE === "lancer") {
      let ng = this.bike;
      ng.on = 1;
      ng.x = ng.px = nu.x;
      ng.y = ng.py = nu.y + 10;
      ng.vy = -2;
      this.snd("snd_motor_upper_2", 0.9, 1);
      this.snd("snd_lancerlaugh", 0.7, 1);
      this.shake(3, 8);
    } else if (nE === "berdly") {
      for (let nm = 0; nm < 3; nm++) {
        let nS = this.storm[nm];
        nS.on = 1;
        nS.x = nS.px = Math.max(O8.x + 40, Math.min(O8.x2 - 40, nu.x + (nm - 1) * 96));
        nS.y = nS.py = O8.y2 + 30 + (nm % 2) * 30;
      }
      this.snd("snd_rocket_long", 0.6, 1);
      this.snd("snd_wing", 0.9, 1);
      this.flash(5, 8);
    } else {
      this.snd("snd_spell_pacify", 1, 1);
      this.flash(3, 12);
    }
    this.emit("bomb", nE);
    return true;
  }
  kill() {
    let nu = this.P;
    nu.alive = 0;
    nu.deadT = 34;
    nu.deaths++;
    nu.hitT = 0;
    this.cardFailed = true;
    this.snd("snd_break2", 1, 1);
    this.shake(5, 14);
    this.flash(1, 6);
    for (let nE = 0; nE < 6; nE++) {
      let nL = -Math.PI / 2 + (nE - 2.5) * 0.5;
      this.part(OR.SHARD, nu.x, nu.y, Math.cos(nL) * 3.2, Math.sin(nL) * 3.2 - 1, 40, 1, 1);
    }
    this.burst(nu.x, nu.y, 16, 7, 14, 1, OR.SPARK, 1.3);
    this.part(OR.RING, nu.x, nu.y, 0, 0, 18, 1, 4);
    this.clearBullets(false, true);
    for (let ng of this.lasers) {
      if (ng.on) {
        ng.t = Math.max(ng.t, ng.warn + ng.life);
      }
    }
    if (this.mode !== "practice") {
      let nm = Math.min(1, nu.power);
      nu.power = Math.max(0, nu.power - 1);
      let nS = Math.round(nm / 0.25);
      for (let nZ = 0; nZ < nS; nZ++) {
        let nN = this.item(nu.x + this.rr(-24, 24), nu.y - 10, 3);
        if (nN >= 0) {
          this.ivy[nN] = -5 - nZ * 0.6;
          this.ivx[nN] = (nZ - (nS - 1) / 2) * 1.2;
        }
      }
      nu.lives--;
    }
    this.emit("death");
  }
  respawn() {
    let nu = this.P;
    nu.alive = 1;
    nu.x = O8.cx;
    nu.y = O8.y2 + 20;
    nu.px = nu.x;
    nu.py = nu.y;
    nu.invuln = 100;
    nu.entering = 16;
    nu.bombs = Math.max(nu.bombs, this.bombBase);
  }
  addPower(nu) {
    let nE = this.P;
    let nL = Math.floor(nE.power);
    if (nE.power >= 4) {
      nE.score += 2000;
      return;
    }
    nE.power = Math.min(4, nE.power + nu);
    if (Math.floor(nE.power) > nL) {
      this.popup(nE.x, nE.y - 24, nE.power >= 4 ? "MAX" : "POWER UP", 2);
      this.snd("snd_power", 0.6, 4);
    }
  }
  addTP(nu) {
    let nE = this.P;
    nE.tp += nu;
    if (nE.tp >= 100) {
      nE.tp -= 100;
      if (nE.bombs < 8) {
        nE.bombs++;
        this.popup(nE.x, nE.y - 28, "+1 SPELL", 5);
        this.snd("snd_boost", 0.7, 2);
      } else {
        nE.score += 100000;
      }
    }
  }
  pointValue() {
    return 10000 + this.P.graze * 20;
  }
  tick(nu) {
    nu ||= this.inputZero;
    this.t++;
    if (this.state === "idle" || this.state === "done") {
      return;
    }
    let nE = this.P;
    if (this.flashT > 0) {
      this.flashT--;
    }
    if (this.shakeT > 0) {
      this.shakeT--;
    }
    if (this.banner) {
      let nL = this.banner;
      nL.t++;
      if (
        nL.t > (nL.kind === "spell" ? 1000000000 : nL.kind === "boss" ? (nL.line ? 108 : 76) : 90)
      ) {
        this.banner = null;
      } else if (nL.line) {
        this.typeLine(nL);
      }
    }
    for (let ng = this.popups.length - 1; ng >= 0; ng--) {
      let nm = this.popups[ng];
      nm.t++;
      nm.y -= nm.big ? 0.4 : 0.8;
      if (nm.t > (nm.big ? 70 : 40)) {
        this.popups.splice(ng, 1);
      }
    }
    this.tickPlayer(nu);
    this.tickBoss();
    this.tickPhase();
    this.tickBullets();
    this.tickLasers();
    this.tickShots();
    this.tickItems();
    this.tickParticles();
    this.tickBomb();
    for (let nS of this.markers) {
      if (nS.on && ++nS.t >= nS.life) {
        nS.on = false;
      }
    }
    if (
      this.mode !== "practice" &&
      this.extendIdx < OG.length &&
      nE.score >= OG[this.extendIdx] * On[this.diff]
    ) {
      this.extendIdx++;
      nE.lives++;
      this.popup(nE.x, nE.y - 34, "SOUL UP!", 1, 1);
      this.snd("snd_power", 1, 1);
      this.flash(1, 6);
    }
    if (this.bn > this.stats.maxBullets) {
      this.stats.maxBullets = this.bn;
    }
    if (this.state === "ending" && --this.endT <= 0) {
      this.state = "done";
      this.emit("done", this.result.kind);
    }
  }
  tickPlayer(nu) {
    let nE = this.P;
    nE.px = nE.x;
    nE.py = nE.y;
    if (nE.invuln > 0) {
      nE.invuln--;
    }
    nE.optAng += 0.12;
    if (!nE.alive) {
      if (this.state === "play" && --nE.deadT <= 0) {
        if (nE.lives < 0 || this.mode === "practice") {
          this.finish("over");
        } else {
          this.respawn();
        }
      }
      return;
    }
    if (nE.hitT > 0) {
      if (nu.bomb && nE.bombs > 0 && this.bombT <= 0) {
        nE.hitT = 0;
        this.bomb();
      } else if (--nE.hitT <= 0) {
        this.kill();
        return;
      }
    }
    if (nE.entering > 0) {
      nE.entering--;
      nE.y -= 4.2;
      nE.py = nE.y + 4.2;
      return;
    }
    let nL = nu.focus ? 1 : 0;
    nE.focus = nL;
    nE.focusT = nL ? Math.min(8, nE.focusT + 1) : Math.max(0, nE.focusT - 1);
    let ng = nL ? 3.6 : 8;
    let nm = (nu.r ? 1 : 0) - (nu.l ? 1 : 0);
    let nS = (nu.d ? 1 : 0) - (nu.u ? 1 : 0);
    if (nm && nS) {
      nm *= 0.7071;
      nS *= 0.7071;
    }
    let nZ = nm * ng;
    let nN = nS * ng;
    if (nu.tdx || nu.tdy) {
      let nj = Math.hypot(nu.tdx, nu.tdy);
      let nM = nj > 20 ? 20 / nj : 1;
      nZ += nu.tdx * nM;
      nN += nu.tdy * nM;
    }
    nE.x = Math.max(O8.x + 10, Math.min(O8.x2 - 10, nE.x + nZ));
    nE.y = Math.max(O8.y + 16, Math.min(O8.y2 - 14, nE.y + nN));
    nE.lean += ((nZ > 0.5 ? 1 : nZ < -0.5 ? -1 : 0) - nE.lean) * 0.35;
    if (this.bombT > 0 && this.bombKind === "lancer") {
      nE.x = Math.max(O8.x + 10, Math.min(O8.x2 - 10, nE.x + nZ * 0.5));
      nE.y = Math.max(O8.y + 16, Math.min(O8.y2 - 14, nE.y + nN * 0.5));
    }
    if (nu.bomb) {
      this.bomb();
    }
    if ((nu.shoot || nu.touch) && this.state === "play") {
      if (nE.shotT <= 0) {
        this.fire(nL);
        nE.shotT = 2;
      }
      if (nE.shotT2 <= 0) {
        nE.shotT2 = this.firePartner(nL);
      }
    }
    if (nE.shotT > 0) {
      nE.shotT--;
    }
    if (nE.shotT2 > 0) {
      nE.shotT2--;
    }
  }
  optionPos(nu, nE, nL, ng) {
    let nm = this.P;
    let nS = nm.focusT / 8;
    let nZ = nu & 1 ? 1 : -1;
    let nN = (nu >> 1) + 1;
    let nj = nZ * (18 + (nN - 1) * 16);
    let nM = 6 - (nN - 1) * 10;
    let Q0 = nZ * (10 + (nN - 1) * 8);
    let Q1 = -14 - (nN - 1) * 8;
    let Q3 = Math.sin(nm.optAng + nu) * 1.5;
    ng.x = nm.x + nj + (Q0 - nj) * nS;
    ng.y = nm.y + nM + (Q1 - nM) * nS + Q3;
    return ng;
  }
  fire() {
    let nu = this.P;
    this.pshot(nu.x - 5, nu.y - 8, 0, -22, 1.6, 0);
    this.pshot(nu.x + 5, nu.y - 8, 0, -22, 1.6, 0);
    this.snd("snd_heartshot_dr_b", 0.16, 4);
  }
  firePartner(nu) {
    let nE = this.P;
    let nL = Math.min(4, Math.floor(nE.power));
    let ng = nL || 1;
    let nm = nL ? 1 : 0.5;
    let nS = Math.max(0.5, nL);
    let nZ = (this._opt ||= {
      x: 0,
      y: 0,
    });
    let nN = (Q0) => {
      if (nL) {
        this.optionPos(Q0, nL, nu, nZ);
      } else {
        nZ.x = nE.x;
        nZ.y = nE.y - 6;
      }
      return nZ;
    };
    let nj = (Q0) => (nL ? (Q0 & 1 ? 1 : -1) * (1 + (Q0 >> 1)) : 0);
    let nM = (Q0, Q1, Q3, Q4, Q5, Q6) =>
      this.pshot(Q0, Q1, Math.sin(Q3) * Q4, -Math.cos(Q3) * Q4, Q5, Q6);
    switch (this.partner) {
      case "susie":
        if (nu) {
          nM(nE.x, nE.y - 22, 0, 24, nS * 1.3, 3);
          return 2;
        }
        for (let Q0 = 0; Q0 < ng; Q0++) {
          nN(Q0);
          let Q1 = nj(Q0);
          nM(nZ.x, nZ.y - 6, Q1 * 0.13 + Math.sign(Q1) * 0.05, 9, nm * 2.6, 2);
        }
        this.snd("snd_smallswing", 0.18, 6);
        return 6;
      case "ralsei":
        if (nu) {
          for (let Q3 = 0; Q3 < ng; Q3++) {
            nN(Q3);
            nM(nZ.x, nZ.y - 6, 0, 18, nm * 1.25, 5);
          }
          return 2;
        }
        for (let Q4 = 0; Q4 < ng; Q4++) {
          nN(Q4);
          let Q5 = nj(Q4);
          let Q6 = nM(nZ.x, nZ.y - 6, Q5 * 0.22 + Math.sign(Q5) * 0.12, 8, nm * 1.6, 4);
          if (Q6 >= 0) {
            this.shome[Q6] = 0.13;
            this.slife[Q6] = 80;
          }
        }
        return 5;
      case "noelle":
        if (nu) {
          for (let Q7 = 0; Q7 < ng; Q7++) {
            nN(Q7);
            nM(nZ.x, nZ.y - 10, 0, 22, nm * 2.4, 7);
          }
          this.snd("snd_icespell", 0.1, 8, 1.6);
          return 4;
        }
        for (let Q8 = 0; Q8 < ng; Q8++) {
          nN(Q8);
          let Q9 = nj(Q8);
          nM(nZ.x, nZ.y - 6, Q9 * 0.07 + Math.sign(Q9) * 0.03, 26, nm * 0.95, 6);
        }
        return 2;
      case "kris": {
        if (nu) {
          nM(nE.x, nE.y - 26, 0, 30, nS * 1.8, 9);
          this.snd("snd_laz", 0.12, 6, 1.3);
          return 3;
        }
        let QO = nM(nE.x + ((this.t >> 2) & 1 ? 10 : -10), nE.y - 30, 0, 14, nS * 3, 8);
        if (QO >= 0) {
          this.slife[QO] = 7;
        }
        this.snd("snd_laz", 0.2, 4);
        return 4;
      }
      case "lancer":
        if (nu) {
          nM(nE.x, nE.y - 20, 0, 11, nS * 3.6, 11);
          this.snd("snd_spearappear", 0.18, 10);
          return 10;
        }
        for (let Qn = 0; Qn < ng; Qn++) {
          nN(Qn);
          let QQ = nj(Qn);
          let QB = nM(nZ.x, nZ.y - 6, QQ * 0.09, 10, nm * 2, 10);
          if (QB >= 0) {
            this.sbnc[QB] = 2;
            this.slife[QB] = 150;
          }
        }
        return 6;
      case "berdly":
        if (nu) {
          for (let QG = 0; QG < ng; QG++) {
            nN(QG);
            nM(nZ.x, nZ.y - 6, 0, 32, nm * 1.2, 13);
          }
          return 2;
        }
        {
          let QV = nL + 2;
          let QT = 0.25 + nL * 0.08;
          for (let QU = 0; QU < QV; QU++) {
            nM(nE.x, nE.y - 12, -QT + (QT * 2 * QU) / (QV - 1), 16, 0.6, 12);
          }
        }
        this.snd("snd_wing", 0.12, 6, 1.4);
        return 3;
    }
    return 4;
  }
  pshot(nu, nE, nL, ng, nm, nS) {
    if (this.sfn === 0) {
      return -1;
    }
    let nZ = this.sfree[--this.sfn];
    this.spos[nZ] = this.sn;
    this.slive[this.sn++] = nZ;
    this.sx[nZ] = nu;
    this.sy[nZ] = nE;
    this.spx[nZ] = nu;
    this.spy[nZ] = nE;
    this.svx[nZ] = nL;
    this.svy[nZ] = ng;
    this.sdmg[nZ] = nm;
    this.skind[nZ] = nS;
    this.shome[nZ] = 0;
    this.slife[nZ] = -1;
    this.sbnc[nZ] = 0;
    this.spass[nZ] = 0;
    this.sage[nZ] = 0;
    return nZ;
  }
  killShot(nu) {
    let nE = this.spos[nu];
    let nL = this.slive[--this.sn];
    this.slive[nE] = nL;
    this.spos[nL] = nE;
    this.sfree[this.sfn++] = nu;
  }
  tickShots() {
    let nu = this.boss;
    let nE = nu.show && this.phase && nu.hp > 0;
    let nL = Ow[this.partner][this.pal & 1];
    for (let ng = this.sn - 1; ng >= 0; ng--) {
      let nm = this.slive[ng];
      let nS = this.skind[nm];
      this.spx[nm] = this.sx[nm];
      this.spy[nm] = this.sy[nm];
      this.sage[nm]++;
      if (this.slife[nm] >= 0 && --this.slife[nm] < 0) {
        if (nS === 8) {
          this.part(OR.GLINT, this.sx[nm], this.sy[nm], 0, -1, 6, nL, 1);
        }
        this.killShot(nm);
        continue;
      }
      if (this.shome[nm] > 0 && nE) {
        let Q7 = Math.atan2(this.svy[nm], this.svx[nm]);
        let Q8 = Math.atan2(nu.y - this.sy[nm], nu.x - this.sx[nm]) - Q7;
        while (Q8 > Math.PI) {
          Q8 -= Oz;
        }
        while (Q8 < -Math.PI) {
          Q8 += Oz;
        }
        let Q9 = Math.max(-this.shome[nm], Math.min(this.shome[nm], Q8));
        let QO = Math.min(13, Math.hypot(this.svx[nm], this.svy[nm]) + 0.25);
        this.svx[nm] = Math.cos(Q7 + Q9) * QO;
        this.svy[nm] = Math.sin(Q7 + Q9) * QO;
      }
      this.sx[nm] += this.svx[nm];
      this.sy[nm] += this.svy[nm];
      if (this.sbnc[nm] > 0) {
        if (
          (this.sx[nm] < O8.x + 6 && this.svx[nm] < 0) ||
          (this.sx[nm] > O8.x2 - 6 && this.svx[nm] > 0)
        ) {
          this.svx[nm] = -this.svx[nm];
          this.sbnc[nm]--;
        } else if (this.sy[nm] < O8.y + 6 && this.svy[nm] < 0) {
          this.svy[nm] = -this.svy[nm] * 0.8;
          this.sbnc[nm]--;
        }
      }
      if (
        this.sy[nm] < O8.y - 20 ||
        this.sy[nm] > O8.y2 + 20 ||
        this.sx[nm] < O8.x - 20 ||
        this.sx[nm] > O8.x2 + 20
      ) {
        this.killShot(nm);
        continue;
      }
      if (!nE) {
        continue;
      }
      let nZ = nu.hitR + 6 + OU[nS];
      let nN = this.spx[nm] - nu.x;
      let nj = this.spy[nm] - nu.y;
      let nM = this.sx[nm] - this.spx[nm];
      let Q0 = this.sy[nm] - this.spy[nm];
      let Q1 = nM * nM + Q0 * Q0;
      let Q3 = Q1 > 0 ? -(nN * nM + nj * Q0) / Q1 : 1;
      if (Q3 < 0) {
        Q3 = 0;
      } else if (Q3 > 1) {
        Q3 = 1;
      }
      let Q4 = nN + nM * Q3;
      let Q5 = nj + Q0 * Q3;
      if (Q4 * Q4 + Q5 * Q5 >= nZ * nZ) {
        continue;
      }
      let Q6 = nS === 6 || nS === 7;
      if (!Q6 || !this.spass[nm]) {
        if (this.damageBoss(this.sdmg[nm])) {
          if (nS === 0) {
            if ((ng & 1) === 0) {
              let Qn = this.part(
                OR.SPRITE,
                this.sx[nm],
                Math.max(this.sy[nm], nu.y + 4),
                0,
                -1,
                10,
                0,
                1,
                0,
              );
              if (Qn >= 0) {
                this.qrot[Qn] = -Math.PI / 2;
              }
            }
          } else if ((ng & 1) === 0 || nS === 8 || nS === 11) {
            this.burst(nu.x + Q4, nu.y + Q5, nS === 8 ? 6 : 2, 4, 7, nL, OR.SPARK, 1.2);
          }
          if (nS === 11) {
            for (let QQ = 0; QQ < 6; QQ++) {
              let QB = (QQ * Oz) / 6 + this.t * 0.3;
              let QG = this.pshot(
                nu.x + Q4,
                nu.y + Q5,
                Math.cos(QB) * 5,
                Math.sin(QB) * 5,
                (this.sdmg[nm] * 0.3) / 3,
                14,
              );
              if (QG >= 0) {
                this.slife[QG] = 9;
              }
            }
            this.part(OR.RING, nu.x + Q4, nu.y + Q5, 0, 0, 10, nL, 1.4);
            this.snd("snd_bomb", 0.25, 8, 1.4);
          }
          this.snd("snd_damage", 0.22, 5);
        } else if ((ng & 3) === 0) {
          this.part(OR.GLINT, this.sx[nm], this.sy[nm], 0, -1, 6, 3, 1);
        }
        if (Q6) {
          this.spass[nm] = 1;
          continue;
        }
        this.killShot(nm);
      }
    }
  }
  tickBoss() {
    let nu = this.boss;
    nu.px = nu.x;
    nu.py = nu.y;
    nu.anim++;
    if (nu.dmgT > 0) {
      nu.dmgT--;
    }
    if (nu.invuln > 0) {
      nu.invuln--;
    }
    if (nu.mt < nu.md) {
      nu.mt++;
      let nE = nu.mt / nu.md;
      let nL = 1 - (1 - nE) * (1 - nE);
      nu.x = nu.sx + (nu.tx - nu.sx) * nL;
      nu.y = nu.sy + (nu.ty - nu.sy) * nL;
      if (Math.abs(nu.tx - nu.sx) + Math.abs(nu.ty - nu.sy) > 40 && nu.mt & 1) {
        nu.trail = 6;
      }
    }
    if (nu.trail > 0) {
      nu.trail--;
    }
    if (nu.dying > 0) {
      nu.dying--;
      if (nu.dying % 6 === 0) {
        this.burst(
          nu.x + this.rr(-30, 30),
          nu.y + this.rr(-30, 30),
          10,
          6,
          14,
          nu.def.col || 0,
          OR.SPARK,
          1.4,
        );
        this.snd("snd_bomb", 0.5, 5);
        this.shake(3, 5);
      }
      nu.alpha = Math.max(0, nu.dying / 50);
      if (nu.dying === 0) {
        nu.show = 0;
        this.part(OR.RING, nu.x, nu.y, 0, 0, 30, 0, 9);
        this.flash(0, 14);
        this.shake(8, 20);
        this.snd("snd_badexplosion", 1, 1);
        if (
          this.bi + 1 >= (this.opts.rushEnd || this.bosses.length) ||
          this.bosses[this.bi + 1].extra ||
          this.mode === "boss"
        ) {
          this.finish("clear");
        } else {
          this.nextBossT = 70;
        }
      }
    }
    if (this.nextBossT > 0 && --this.nextBossT === 0) {
      this.enterBoss(this.bi + 1, false);
    }
  }
  tickPhase() {
    if (this.state !== "play") {
      return;
    }
    let nu = this.boss;
    if (!nu.def || nu.dying > 0 || !nu.show) {
      return;
    }
    if (this.introT > 0) {
      this.introT--;
      return;
    }
    if (!this.phase) {
      if (this.gapT > 0) {
        this.gapT--;
        if (this.gapT === 20 && this.pi + 1 < nu.def.phases.length) {
          this.bossMove(O8.cx, O8.y + 100, 20);
        }
        return;
      }
      if (this.pi + 1 < nu.def.phases.length) {
        this.beginPhase(this.pi + 1);
      }
      return;
    }
    if (this.declT > 0) {
      this.declT--;
      if (this.declT === 0 && this.banner && this.banner.kind === "spell") {
        this.banner.settled = 1;
      }
      return;
    }
    let nE = this.phase;
    this.pt++;
    this.timer--;
    if (nE.spell && !this.cardFailed && !nE.survival) {
      this.cardBonus = this.cardBonusMax * (0.4 + (Math.max(0, this.timer) * 0.6) / this.timerMax);
    }
    if (this.timer <= OJ * 10 && this.timer > 0 && this.timer % OJ === 0) {
      this.snd(
        this.timer <= OJ * 5 ? "snd_bell" : "snd_menumove",
        this.timer <= OJ * 5 ? 0.35 : 0.5,
        1,
      );
    }
    if (nE.tick) {
      nE.tick(this, this.S, this.pt);
    }
    if (nu.hp <= 0) {
      this.endPhase(false);
      return;
    }
    if (this.timer <= 0) {
      this.endPhase(true);
      return;
    }
  }
  tickBullets() {
    let nu = this.P;
    let nE = nu.x;
    let nL = nu.y;
    let ng = nu.px;
    let nm = nu.py;
    let nS =
      nu.alive && nu.invuln <= 0 && nu.hitT <= 0 && this.state === "play" && !(nu.entering > 0);
    let nZ = nu.alive && this.state === "play";
    let nN = 2.5;
    let nj = this.partner === "ralsei" && nu.focus ? 24 : 18;
    let nM = 0;
    if (this.freezeT > 0) {
      for (let Q0 = 0; Q0 < this.bn; Q0++) {
        let Q1 = this.blive[Q0];
        this.bpx[Q1] = this.bx[Q1];
        this.bpy[Q1] = this.by[Q1];
        this.bprot[Q1] = this.brot[Q1];
      }
      if (this.bn > this.peakBullets) {
        this.peakBullets = this.bn;
      }
      return;
    }
    for (let Q3 = this.bn - 1; Q3 >= 0; Q3--) {
      let Q4 = this.blive[Q3];
      this.bpx[Q4] = this.bx[Q4];
      this.bpy[Q4] = this.by[Q4];
      this.bprot[Q4] = this.brot[Q4];
      let Q5 = ++this.bage[Q4];
      let Q6 = OW[this.btype[Q4]];
      if (this.bdelay[Q4] > 0 && --this.bdelay[Q4] === 0) {
        this.bflag[Q4] &= ~OI;
      }
      if (this.bevT[Q4] === Q5 && this.bulletEvent(Q4)) {
        continue;
      }
      let Q7 = this.bacc[Q4];
      let Q8 = this.bw[Q4];
      let Q9 = this.bgrav[Q4];
      if (Q7 !== 0 || Q8 !== 0) {
        let QT = this.bspd[Q4] + Q7;
        if (Q7 > 0 && QT > this.blim[Q4]) {
          QT = this.blim[Q4];
        } else if (Q7 < 0 && QT < this.blim[Q4]) {
          QT = this.blim[Q4];
        }
        this.bspd[Q4] = QT;
        let QU = this.bdir[Q4] + Q8;
        this.bdir[Q4] = QU;
        this.bvx[Q4] = Math.cos(QU) * QT;
        this.bvy[Q4] = Math.sin(QU) * QT;
        if (Q6.orient === 1) {
          this.brot[Q4] = QU;
        }
      }
      if (Q9 !== 0) {
        this.bvy[Q4] += Q9;
        if (this.bvy[Q4] > 7) {
          this.bvy[Q4] = 7;
        }
        if (Q6.orient === 1) {
          this.brot[Q4] = Math.atan2(this.bvy[Q4], this.bvx[Q4]);
        }
      }
      let QO = this.bx[Q4] + this.bvx[Q4];
      let Qn = this.by[Q4] + this.bvy[Q4];
      if (Q6.orient === 2) {
        this.brot[Q4] += Q6.spin * Oc;
      }
      if (this.bbnc[Q4] > 0) {
        let Qw = false;
        if (QO < O8.x + 6 && this.bvx[Q4] < 0) {
          this.bvx[Q4] = -this.bvx[Q4];
          Qw = true;
        } else if (QO > O8.x2 - 6 && this.bvx[Q4] > 0) {
          this.bvx[Q4] = -this.bvx[Q4];
          Qw = true;
        }
        if (Qn < O8.y + 6 && this.bvy[Q4] < 0) {
          this.bvy[Q4] = -this.bvy[Q4];
          Qw = true;
        }
        if (Qw) {
          this.bbnc[Q4]--;
          this.bdir[Q4] = Math.atan2(this.bvy[Q4], this.bvx[Q4]);
          if (Q6.orient === 1) {
            this.brot[Q4] = this.bdir[Q4];
          }
        }
      }
      this.bx[Q4] = QO;
      this.by[Q4] = Qn;
      let QQ = 24 + Q6.r * 2;
      if (
        (QO < O8.x - QQ ||
          QO > O8.x2 + QQ ||
          Qn < O8.y - QQ - (Q5 < 90 ? 120 : 0) ||
          Qn > O8.y2 + QQ) &&
        (!(this.bflag[Q4] & OA) || !(Q5 < 400))
      ) {
        this.killBullet(Q4);
        continue;
      }
      let QB = QO - nE;
      let QG = Qn - nL;
      if (
        QB > 24 + Q6.r ||
        QB < -24 - Q6.r ||
        QG > 24 + Q6.r ||
        QG < -24 - Q6.r ||
        this.bflag[Q4] & OI
      ) {
        continue;
      }
      let QV = Q6.r + nN;
      if (nS) {
        let Qb = this.bpx[Q4] - ng;
        let Qd = this.bpy[Q4] - nm;
        let QW = QB - Qb;
        let Qh = QG - Qd;
        let Qc = QW * QW + Qh * Qh;
        let Qz = Qc > 0 ? -(Qb * QW + Qd * Qh) / Qc : 1;
        if (Qz < 0) {
          Qz = 0;
        } else if (Qz > 1) {
          Qz = 1;
        }
        let Ql = Qb + QW * Qz;
        let QX = Qd + Qh * Qz;
        if (Ql * Ql + QX * QX < QV * QV) {
          nu.hitT = 4;
          this.snd("snd_hurt1", 0.9, 1);
          this.flash(1, 3);
          this.killBullet(Q4);
          continue;
        }
      }
      if (nZ && !(this.bflag[Q4] & OP)) {
        let QY = nj + Q6.r;
        if (QB * QB + QG * QG < QY * QY) {
          this.bflag[Q4] |= OP;
          nM++;
        }
      }
    }
    if (nM) {
      this.grazeN(nM);
    }
    if (this.bn > this.peakBullets) {
      this.peakBullets = this.bn;
    }
  }
  grazeN(nu) {
    let nE = this.P;
    nE.graze += nu;
    nE.score += nu * (200 + Math.floor(nE.graze / 10) * 10);
    this.addTP(nu * (this.partner === "ralsei" && nE.focus ? 4 : 2.5));
    for (let nL = 0; nL < Math.min(nu, 3); nL++) {
      let ng = this.rand() * Oz;
      this.part(OR.SQUARE, nE.x, nE.y, Math.cos(ng) * 3, Math.sin(ng) * 3, 9, 0, 1);
    }
    this.P.grazeFlash = 6;
    this.snd("snd_graze", 0.45, 3);
  }
  bulletEvent(nu) {
    let nE = this.bevK[nu];
    this.bevT[nu] = -1;
    let nL = this.bevA[nu];
    let ng = this.bevB[nu];
    let nm = this.bevC[nu];
    let nS = this.bevD[nu];
    switch (nE) {
      case Op.AIM:
        this.bacc[nu] = 0;
        this.bw[nu] = 0;
        this.bSetDir(nu, this.aim(this.bx[nu], this.by[nu]) + nL, ng);
        return false;
      case Op.TURN:
        this.bSetDir(nu, this.bdir[nu] + nL, ng >= 0 ? ng : this.bspd[nu]);
        return false;
      case Op.SPEED:
        this.bspd[nu] = nL;
        this.bacc[nu] = ng;
        this.blim[nu] = nm;
        this.bSetDir(nu, this.bdir[nu]);
        return false;
      case Op.STOP:
        this.bacc[nu] = 0;
        this.bw[nu] = 0;
        this.bgrav[nu] = 0;
        this.bSetDir(nu, this.bdir[nu], 0);
        return false;
      case Op.BURST:
      case Op.AIMBURST: {
        let nZ = this.bx[nu];
        let nN = this.by[nu];
        let nj = nL | 0;
        let nM = nE === Op.AIMBURST ? this.aim(nZ, nN) : this.rand() * Oz;
        this.killBullet(nu);
        this.ring(nZ, nN, nj, nM, ng, nm | 0, nS | 0);
        this.part(OR.RING, nZ, nN, 0, 0, 10, nS | 0, 1.2);
        return true;
      }
      case Op.CALL: {
        let Q0 = this.phase && this.phase.ev;
        if (Q0) {
          return Q0(this, this.S, nu, nL, ng) === true;
        } else {
          return false;
        }
      }
    }
    return false;
  }
  tickLasers() {
    let nu = this.P;
    let nE =
      nu.alive && nu.invuln <= 0 && nu.hitT <= 0 && this.state === "play" && !(nu.entering > 0);
    for (let nL of this.lasers) {
      if (!nL.on) {
        continue;
      }
      nL.t++;
      nL.pang = nL.ang;
      nL.ang += nL.w;
      if (nL.follow) {
        nL.x = nL.follow.x + nL.fx;
        nL.y = nL.follow.y + nL.fy;
      }
      let ng = nL.warn + nL.life + nL.fade;
      if (nL.t >= ng) {
        nL.on = false;
        continue;
      }
      if (nL.t <= nL.warn + 2 || nL.t > nL.warn + nL.life) {
        continue;
      }
      let nm = Math.cos(nL.ang);
      let nS = Math.sin(nL.ang);
      let nZ = nu.x - nL.x;
      let nN = nu.y - nL.y;
      let nj = nZ * nm + nN * nS;
      if (nj < 0 || nj > nL.len) {
        continue;
      }
      let nM = Math.abs(-nZ * nS + nN * nm);
      let Q0 = nL.width * 0.5 * 0.72;
      if (nE && nM < Q0 + 1.5) {
        nu.hitT = 4;
        this.snd("snd_hurt1", 0.9, 1);
        this.flash(1, 3);
        continue;
      }
      if (nu.alive && nM < Q0 + 20 && nL.grazeT <= 0) {
        nL.grazeT = 6;
        this.grazeN(1);
      }
      if (nL.grazeT > 0) {
        nL.grazeT--;
      }
    }
  }
  tickItems() {
    let nu = this.P;
    let nE = nu.alive && (nu.y < O9 || this.itemsHomeT > 0 || this.bombT > 0);
    if (this.itemsHomeT > 0) {
      this.itemsHomeT--;
    }
    for (let nL = this.inn - 1; nL >= 0; nL--) {
      let ng = this.ilive[nL];
      this.ipx[ng] = this.ix[ng];
      this.ipy[ng] = this.iy[ng];
      this.iage[ng]++;
      let nm = this.ikind[ng];
      if (nu.alive && (this.ihome[ng] || nE)) {
        this.ihome[ng] ||= 2;
        let nj = nu.x - this.ix[ng];
        let nM = nu.y - this.iy[ng];
        let Q0 = Math.hypot(nj, nM) || 1;
        let Q1 = nm === 2 ? Math.min(14, 3 + this.iage[ng] * 0.6) : 13;
        this.ix[ng] += (nj / Q0) * Math.min(Q1, Q0);
        this.iy[ng] += (nM / Q0) * Math.min(Q1, Q0);
      } else {
        if (nm === 2) {
          this.iy[ng] += this.ivy[ng];
          this.ivy[ng] = Math.min(this.ivy[ng] + 0.1, 2);
        } else {
          this.ivx[ng] *= 0.92;
          this.ivy[ng] = Math.min(this.ivy[ng] + 0.2, 2.8);
          this.ix[ng] += this.ivx[ng];
          this.iy[ng] += this.ivy[ng];
        }
        if (this.iy[ng] > O8.y2 + 16) {
          this.killItem(ng);
          continue;
        }
      }
      let nS = this.ix[ng] - nu.x;
      let nZ = this.iy[ng] - nu.y;
      let nN = nS * nS + nZ * nZ;
      if (nu.alive && nN < 1600 && !this.ihome[ng]) {
        this.ihome[ng] = 1;
      }
      if (nu.alive && nN < 400) {
        this.collect(ng, nm);
        this.killItem(ng);
      }
    }
  }
  collect(nu, nE) {
    let nL = this.P;
    if (nE === 0) {
      this.addPower(0.05);
      nL.score += 100;
      this.snd("snd_coin", 0.14, 3, 1.3);
    } else if (nE === 3) {
      this.addPower(0.25);
      nL.score += 500;
      this.snd("snd_coin", 0.2, 3, 1.1);
    } else if (nE === 1) {
      let ng = this.ihome[nu] === 2 || this.iy[nu] < O9;
      let nm = ng
        ? this.pointValue()
        : Math.round(
            (this.pointValue() * Math.max(0.2, 1 - (this.iy[nu] - O9) / (O8.y2 - O9))) / 10,
          ) * 10;
      nL.score += nm;
      if (ng || nm > 4000) {
        this.popup(this.ix[nu], this.iy[nu] - 8, String(nm), ng ? 3 : 0);
      }
      this.snd("snd_coin", 0.14, 3, 1.5);
    } else if (nE === 2) {
      nL.score += 100 + Math.floor(nL.graze / 20) * 10;
    }
  }
  tickParticles() {
    for (let nu = this.qn - 1; nu >= 0; nu--) {
      let nE = this.qlive[nu];
      this.qpx[nE] = this.qx[nE];
      this.qpy[nE] = this.qy[nE];
      if (--this.qlife[nE] <= 0) {
        let ng = this.qpos[nE];
        let nm = this.qlive[--this.qn];
        this.qlive[ng] = nm;
        this.qpos[nm] = ng;
        this.qfree[this.qfn++] = nE;
        continue;
      }
      this.qx[nE] += this.qvx[nE];
      this.qy[nE] += this.qvy[nE];
      let nL = this.qdrag[nE];
      this.qvx[nE] *= nL;
      this.qvy[nE] *= nL;
      if (this.qkind[nE] === OR.SHARD) {
        this.qvy[nE] += 0.25;
      }
      if (this.qkind[nE] === OR.FLAKE) {
        this.qvy[nE] += 0.03;
        this.qx[nE] += Math.sin((this.t + nE) * 0.1) * 0.6;
      }
      this.qrot[nE] += this.qvr[nE];
    }
  }
  tickBomb() {
    if (this.bombT <= 0) {
      return;
    }
    let nu = this.bombKind;
    let nE = this.P;
    let nL = this.boss;
    let ng = this.bombMax - this.bombT;
    this.bombT--;
    let nm = nL.show && this.phase && nL.hp > 0;
    if (nu === "susie") {
      let nS = nE.y - ng * 12;
      this.bombY = nS;
      this.bombX = nE.x;
      this.clearBullets(false, false, nE.x, nS, 90);
      if (ng % 3 === 0) {
        this.part(
          OR.SPRITE,
          nE.x + this.rr(-30, 30),
          nS + this.rr(-10, 30),
          this.rr(-1, 1),
          -2,
          12,
          0,
          1,
          1,
        );
      }
      if (
        nm &&
        Math.abs(nL.x - nE.x) < 110 &&
        nS < nL.y + 60 &&
        nS > nL.y - 120 &&
        this.damageBossBomb(3.2) &&
        ng % 4 === 0
      ) {
        this.snd("snd_rudebuster_hit", 0.8, 6);
        this.shake(4, 6);
        this.burst(nL.x, nL.y, 6, 8, 10, 7, OR.SPARK, 1.4);
      }
      if (this.bombT === 0) {
        this.bombY = 0;
      }
      if (nS < O8.y - 60 && ng % 10 === 0) {
        this.clearBullets(false, true);
      }
    } else if (nu === "noelle") {
      if (ng % 2 === 0) {
        let nZ = this.part(
          OR.FLAKE,
          this.rr(O8.x, O8.x2),
          O8.y - 10,
          this.rr(-1, 1),
          this.rr(2, 5),
          60,
          5,
          this.rr(0.6, 1.4),
        );
        if (nZ >= 0) {
          this.qvr[nZ] = 0.05;
        }
      }
      if (ng % 6 === 0) {
        this.clearBullets(true, true);
      }
      if (nm && ng > 20) {
        this.damageBossBomb(1.8);
      }
      if (ng === 24) {
        this.snd("snd_icespell", 0.8, 1);
        this.shake(3, 16);
      }
    } else if (nu === "kris") {
      this.freezeT = this.bombT;
      if (nm && ng > 18 && ng < 84 && (this.damageBossBomb(1.2), ng % 8 === 2)) {
        let nN = this.part(
          OR.SPRITE,
          nL.x + this.rr(-26, 26),
          nL.y + this.rr(-20, 20),
          0,
          0,
          10,
          0,
          1,
          3,
        );
        if (nN >= 0) {
          this.qdrag[nN] = 1;
        }
        this.snd("snd_laz", 0.5, 4);
        this.shake(2, 4);
      }
      if (this.bombT === 0) {
        this.clearBullets(true, true);
        this.snd("snd_glassbreak", 0.5, 1);
        this.flash(6, 8);
      }
    } else if (nu === "lancer") {
      let nj = this.bike;
      nj.px = nj.x;
      nj.py = nj.y;
      let nM = ng < 26 || (ng >= 46 && ng < 66);
      nj.vy = nM ? Math.max(-15, nj.vy - 1.6) : Math.min(15, nj.vy + 1.6);
      nj.y = Math.max(O8.y + 30, Math.min(O8.y2 + 20, nj.y + nj.vy));
      let Q0 = nm ? nL.x : nE.x;
      nj.x += Math.max(-6, Math.min(6, (Q0 - nj.x) * 0.12));
      this.clearBullets(true, false, nj.x, nj.y, 52);
      if (ng % 3 === 0) {
        this.part(OR.SPARK, nj.x + this.rr(-12, 12), nj.y + 26, this.rr(-1, 1), 3, 10, 7, 1.2);
      }
      if (
        nm &&
        Math.abs(nL.x - nj.x) < 64 &&
        Math.abs(nL.y - nj.y) < 64 &&
        this.damageBossBomb(2.6) &&
        ng % 4 === 0
      ) {
        this.snd("snd_hitcar", 0.6, 6);
        this.shake(4, 6);
        this.burst(nL.x, nL.y, 6, 8, 10, 7, OR.SPARK, 1.4);
      }
      if (ng === 40) {
        this.snd("snd_carhonk", 0.6, 1);
      }
      if (this.bombT === 0) {
        nj.on = 0;
      }
    } else if (nu === "berdly") {
      for (let Q1 = 0; Q1 < 3; Q1++) {
        let Q3 = this.storm[Q1];
        if (!Q3.on || ((Q3.px = Q3.x), (Q3.py = Q3.y), ng < Q1 * 6)) {
          continue;
        }
        Q3.y -= 6;
        let Q4 = nm ? nL.x + (Q1 - 1) * 30 : Q3.x;
        Q3.x += Math.max(-3, Math.min(3, (Q4 - Q3.x) * 0.06)) + Math.sin((ng + Q1 * 9) * 0.3) * 2;
        this.clearBullets(true, false, Q3.x, Q3.y, 48);
        if (ng % 4 === Q1) {
          let Q5 = this.part(
            OR.SPRITE,
            Q3.x + this.rr(-30, 30),
            Q3.y + this.rr(-20, 30),
            this.rr(-2, 2),
            this.rr(-3, -1),
            18,
            0,
            1,
            4,
          );
          if (Q5 >= 0) {
            this.qvr[Q5] = 0.2;
          }
        }
        if (nm && Math.abs(nL.x - Q3.x) < 60 && Math.abs(nL.y - Q3.y) < 64) {
          this.damageBossBomb(1.2);
        }
        if (Q3.y < O8.y - 60) {
          Q3.y = O8.y2 + 40;
        }
      }
      if (this.bombT === 0) {
        for (let Q6 of this.storm) {
          Q6.on = 0;
        }
      }
    } else {
      if (ng % 4 === 0) {
        this.clearBullets(true, true);
      }
      if (ng % 5 === 0) {
        let Q7 = this.part(
          OR.SPRITE,
          nE.x + this.rr(-120, 120),
          nE.y + this.rr(-160, 20),
          0,
          -1.2,
          24,
          0,
          1,
          2,
        );
        if (Q7 >= 0) {
          this.qdrag[Q7] = 1;
        }
      }
      if (nm && ng > 12) {
        this.damageBossBomb(0.9);
      }
    }
  }
  damageBossBomb(nu) {
    let nE = this.boss;
    if (!this.phase || this.declT > 0 || this.phase.survival || nE.hp <= 0) {
      return false;
    } else {
      nE.hp -= nu * this.bossDmgMult();
      nE.dmgT = 2;
      this.P.score += Math.round(nu * 10) * 10;
      return true;
    }
  }
  counts() {
    return {
      bullets: this.bn,
      shots: this.sn,
      items: this.inn,
      parts: this.qn,
      lasers: this.lasers.filter((nu) => nu.on).length,
    };
  }
};
l(Oe, "Sim");
var OC = Oe;
var OH = Math.PI * 2;
var Ot = Math.PI / 180;
var Oq = 2;
var Ov = "#00c000";
var OF = new Map();
function OD(nu, nE) {
  if (typeof document === "undefined") {
    return new OffscreenCanvas(nu, nE);
  }
  let nL = document.createElement("canvas");
  nL.width = nu;
  nL.height = nE;
  return nL;
}
l(OD, "mk");
var Oa = 1024;
var Oy = 12;
var Oo = [];
var Ok = 0;
var Ou = 0;
var OE = 0;
function OL(nu) {
  let nE = nu.width;
  let nL = nu.height;
  if (nE > Oa || nL > Oa) {
    return false;
  }
  if (!Oo.length || Ok + nE + 2 > Oa) {
    Ok = 0;
    Ou += OE + 2;
    OE = 0;
  }
  if (!Oo.length || Ou + nL + 2 > Oa) {
    if (Oo.length >= Oy) {
      return false;
    }
    Oo.push(OD(Oa, Oa));
    Ok = 0;
    Ou = 0;
    OE = 0;
  }
  let ng = Oo[Oo.length - 1];
  let nm = ng.getContext("2d");
  nm.imageSmoothingEnabled = false;
  nm.drawImage(nu, Ok, Ou);
  let nS = {
    pg: ng,
    sx: Ok,
    sy: Ou,
    sw: nE,
    sh: nL,
  };
  Ok += nE + 2;
  if (nL > OE) {
    OE = nL;
  }
  return nS;
}
l(OL, "pack");
function Og(nu, nE) {
  let nL = OL(nE);
  if (nL) {
    nu.pg = nL.pg;
    nu.sx = nL.sx;
    nu.sy = nL.sy;
    nu.sw = nL.sw;
    nu.sh = nL.sh;
  } else {
    nu.pg = nE;
    nu.sx = 0;
    nu.sy = 0;
    nu.sw = nE.width;
    nu.sh = nE.height;
  }
  return nu;
}
l(Og, "packInto");
var Om = new Map();
function OS(nu, nE, nL, ng, nm, nS) {
  let nZ = OF.get(nS);
  if (nZ !== undefined) {
    return nZ;
  }
  let nN = h[nu];
  let nj = nN ? Math.max(1, nN.frames) : 1;
  let nM = nN && nN.img && nN.img[((nE % nj) + nj) % nj];
  if (!nM || !nM.width) {
    return null;
  }
  if (!nM.__scOk) {
    let Q5 = Om.get(nS);
    if (Q5 !== undefined && n4() < Q5) {
      return null;
    }
    if (OZ(nM)) {
      Om.set(nS, n4() + 250);
      return null;
    }
    Om.delete(nS);
    nM.__scOk = 1;
  }
  let Q0 = Math.max(1, Math.ceil(nN.w * nL * Oq));
  let Q1 = Math.max(1, Math.ceil(nN.h * nL * Oq));
  let Q3 = OD(Q0, Q1);
  let Q4 = Q3.getContext("2d");
  Q4.imageSmoothingEnabled = false;
  Q4.drawImage(nM, 0, 0, nN.w * nL * Oq, nN.h * nL * Oq);
  if (ng >= 100) {
    Q4.globalCompositeOperation = "source-in";
    Q4.fillStyle = Od[ng - 100];
    Q4.fillRect(0, 0, Q0, Q1);
  } else if (ng) {
    Q4.globalCompositeOperation = "multiply";
    Q4.fillStyle = Od[ng];
    Q4.fillRect(0, 0, Q0, Q1);
    Q4.globalCompositeOperation = "destination-in";
    Q4.drawImage(nM, 0, 0, nN.w * nL * Oq, nN.h * nL * Oq);
  }
  nZ = {
    cv: Q3,
    w: Q0 / Oq,
    h: Q1 / Oq,
    ox: (nm ? nN.w / 2 : nN.ox) * nL,
    oy: (nm ? nN.h / 2 : nN.oy) * nL,
    pg: null,
    sx: 0,
    sy: 0,
    sw: Q0,
    sh: Q1,
  };
  if (nS.charCodeAt(0) === 98) {
    Og(nZ, Q3);
  } else {
    nZ.pg = Q3;
  }
  OF.set(nS, nZ);
  return nZ;
}
l(OS, "vis");
function OZ(nu) {
  try {
    let nE = nu.getContext && nu.getContext("2d");
    if (!nE) {
      return false;
    }
    let nL = nE.getImageData(0, 0, nu.width, nu.height).data;
    for (let ng = 3; ng < nL.length; ng += 4) {
      if (nL[ng]) {
        return false;
      }
    }
    return true;
  } catch {
    return false;
  }
}
l(OZ, "blank");
var ON = [];
function Oj(nu, nE, nL) {
  let ng = ON[nu];
  ng ||= ON[nu] = [];
  let nm = ng[nE];
  nm ||= ng[nE] = [];
  let nS = nm[nL];
  if (nS == null) {
    let nZ = OW[nu];
    nS = OS(nZ.spr, nZ.frame + nL, nZ.scale, nE, nZ.center, "b" + nu + ":" + nE + ":" + nL);
    nm[nL] = nS;
  }
  return nS;
}
l(Oj, "tv");
var OM = 48;
var n0 = OH / OM;
var n1 = 2.5;
var n2 = [];
var n3 = 0;
var n4 = l(() => (typeof performance !== "undefined" ? performance.now() : Date.now()), "clock");
function n5(nu, nE, nL, ng) {
  if (ng - ng !== 0) {
    return null;
  }
  let nm = Math.round(ng / n0) % OM;
  if (nm < 0) {
    nm += OM;
  }
  let nS = ((nu * 16 + nE) * 16 + nL) * OM + nm;
  let nZ = n2[nS];
  if (nZ !== undefined) {
    return nZ;
  }
  if (n4() > n3) {
    return null;
  }
  let nN = Oj(nu, nE, nL);
  if (!nN) {
    return null;
  }
  let nj = nm * n0;
  let nM = Math.abs(Math.cos(nj));
  let Q0 = Math.abs(Math.sin(nj));
  let Q1 = Math.max(nN.ox, nN.w - nN.ox);
  let Q3 = Math.max(nN.oy, nN.h - nN.oy);
  let Q4 =
    Math.ceil(Q1 * nM + Q3 * Q0 > Q1 * Q0 + Q3 * nM ? Q1 * nM + Q3 * Q0 : Q1 * Q0 + Q3 * nM) + 1;
  let Q5 = Q4 * 2 * Oq;
  let Q6 = OD(Q5, Q5);
  let Q7 = Q6.getContext("2d");
  Q7.imageSmoothingEnabled = false;
  Q7.translate(Q5 / 2, Q5 / 2);
  Q7.rotate(nj);
  Q7.drawImage(nN.cv, -nN.ox * Oq, -nN.oy * Oq, nN.w * Oq, nN.h * Oq);
  nZ = Og(
    {
      cv: null,
      w: Q4 * 2,
      h: Q4 * 2,
      ox: Q4,
      oy: Q4,
      pg: null,
      sx: 0,
      sy: 0,
      sw: Q5,
      sh: Q5,
    },
    Q6,
  );
  n2[nS] = nZ;
  return nZ;
}
l(n5, "tvr");
var n6 = new Map();
function n7(nu, nE, nL, ng = 0, nm = true) {
  let nS = n6.get(nu);
  if (nS === undefined) {
    nS = new Map();
    n6.set(nu, nS);
  }
  let nZ = ((nE * 256 + ng) * 2 + (nm ? 1 : 0)) * 8192 + Math.round(nL * 100);
  let nN = nS.get(nZ);
  if (nN === undefined) {
    nN = OS(nu, nE, nL, ng, nm, nu + ":" + nE + ":" + nL + ":" + ng + ":" + (nm ? 1 : 0));
    if (nN) {
      nS.set(nZ, nN);
    }
  }
  return nN;
}
l(n7, "sv");
var n8 = null;
function n9() {
  if (n8) {
    return n8;
  }
  let nu = 64;
  n8 = OD(nu, nu);
  let nE = n8.getContext("2d");
  let nL = nE.createRadialGradient(nu / 2, nu / 2, 0, nu / 2, nu / 2, nu / 2);
  nL.addColorStop(0, "rgba(255,255,255,0.55)");
  nL.addColorStop(0.5, "rgba(255,255,255,0.18)");
  nL.addColorStop(1, "rgba(255,255,255,0)");
  nE.fillStyle = nL;
  nE.fillRect(0, 0, nu, nu);
  return n8;
}
l(n9, "halo");
function nJ(nu, nE, nL, ng, nm = "#ffffff", nS = "fnt_main", nZ = "left", nN = 1, nj = false) {
  nu.draw_set_font(nS);
  nu.draw_set_halign(nZ);
  nu.draw_set_alpha(nN);
  if (nj) {
    nu.draw_text(nE + 1, nL + 1, ng, "#000000");
  }
  nu.draw_text(nE, nL, ng, nm);
  nu.draw_set_halign("left");
  nu.draw_set_alpha(1);
}
l(nJ, "text");
function nO(nu, nE, nL = "fnt_main") {
  return nu.string_width(nE, nL);
}
l(nO, "tw");
function nn(nu, nE, nL, ng, nm, nS = 0) {
  let nZ = Math.max(0, ng - nE - 63);
  let nN = Math.max(0, nm - nL - 63);
  let nj = c.white;
  if (nZ > 0) {
    nu.draw_sprite_ext("spr_textbox_top", 0, nE + 32, nL, nZ, 2, 0, nj, 1);
    nu.draw_sprite_ext("spr_textbox_top", 0, nE + 32, nm + 1, nZ, -2, 0, nj, 1);
  }
  if (nN > 0) {
    nu.draw_sprite_ext("spr_textbox_left", 0, ng + 1, nL + 32, -2, nN, 0, nj, 1);
    nu.draw_sprite_ext("spr_textbox_left", 0, nE, nL + 32, 2, nN, 0, nj, 1);
  }
  nu.draw_sprite_ext("spr_textbox_topleft", nS, nE, nL, 2, 2, 0, nj, 1);
  nu.draw_sprite_ext("spr_textbox_topleft", nS, ng + 1, nL, -2, 2, 0, nj, 1);
  nu.draw_sprite_ext("spr_textbox_topleft", nS, nE, nm + 1, 2, -2, 0, nj, 1);
  nu.draw_sprite_ext("spr_textbox_topleft", nS, ng + 1, nm + 1, -2, -2, 0, nj, 1);
}
l(nn, "darkbox");
var nQ = {
  jevil: {
    a: "#3b0f5c",
    b: "#1c0930",
    motif: "spr_bomb_spade",
    mcol: 7,
  },
  queen: {
    a: "#0c3d58",
    b: "#07202f",
    motif: "spr_queen_winebubble",
    mcol: 5,
  },
  sneo: {
    a: "#524000",
    b: "#3a0a2c",
    motif: "spr_sneo_heart",
    mcol: 0,
  },
  tenna: {
    a: "#56101c",
    b: "#2c0810",
    motif: "spr_tenna_allstars_star",
    mcol: 3,
  },
  knight: {
    a: "#2a2a2a",
    b: "#101010",
    motif: "spr_knight_bullet_star",
    mcol: 0,
  },
  gerson: {
    a: "#1d4a2a",
    b: "#0c2414",
    motif: "spr_gerson_red_hammer@ch4",
    mcol: 0,
  },
  titan: {
    a: "#24243e",
    b: "#0a0a16",
    motif: "spr_titan_star_centered@ch4",
    mcol: 0,
  },
  aqua: {
    a: "#0c4a50",
    b: "#062428",
    motif: "spr_attack_knifechain_spin@ch5",
    mcol: 5,
  },
  pink: {
    a: "#5a1848",
    b: "#2c0a24",
    motif: "spr_pinkstar@ch5",
    mcol: 0,
  },
  flowery: {
    a: "#5a3a08",
    b: "#2c1a04",
    motif: "spr_flowery_circle@ch5",
    mcol: 0,
  },
  knight_ex: {
    a: "#3a0c0c",
    b: "#140404",
    motif: "spr_knight_bullet_star_hard_a",
    mcol: 1,
  },
};
function nB(nu, nE, nL, ng) {
  let nm = nL.boss.def;
  let nS = nQ[(nm && nm.bg) || "jevil"];
  nu.fillStyle = "#000000";
  nu.fillRect(O8.x, O8.y, O8.w, O8.h);
  let nZ = nL.phase && nL.phase.spell;
  let nN = ng.time;
  nu.lineWidth = 2;
  for (let nj = 0; nj < 2; nj++) {
    let nM = (nN * (nj ? 0.5 : 0.9)) % 50;
    nu.strokeStyle = nj ? nS.b : nS.a;
    nu.globalAlpha = nZ ? 0.45 : 0.8;
    nu.beginPath();
    for (let Q0 = O8.x - 50 + nM + nj * 25; Q0 < O8.x2 + 50; Q0 += 50) {
      nu.moveTo(Q0, O8.y);
      nu.lineTo(Q0, O8.y2);
    }
    for (let Q1 = O8.y - 50 + nM + nj * 25; Q1 < O8.y2 + 50; Q1 += 50) {
      nu.moveTo(O8.x, Q1);
      nu.lineTo(O8.x2, Q1);
    }
    nu.stroke();
  }
  nu.globalAlpha = 1;
  if (nZ && nL.declT < 44) {
    let Q3 = Math.min(1, (48 - nL.declT) / 20);
    let Q4 = n7(nS.motif, 0, 6, nS.mcol);
    if (Q4) {
      let Q5 = ng.M;
      let Q6 = nN * 0.004;
      nu.globalAlpha = Q3 * 0.06;
      nu.globalCompositeOperation = "lighter";
      nu.setTransform(
        Q5.a * Math.cos(Q6),
        Q5.a * Math.sin(Q6),
        -Q5.a * Math.sin(Q6),
        Q5.a * Math.cos(Q6),
        Q5.e + Q5.a * O8.cx,
        Q5.f + Q5.a * (O8.y + 190),
      );
      nu.drawImage(Q4.cv, -Q4.w / 2, -Q4.h / 2, Q4.w, Q4.h);
      nu.setTransform(Q5);
      nu.globalAlpha = 1;
      nu.globalCompositeOperation = "source-over";
    }
  }
}
l(nB, "drawBackground");
function nG(nu, nE, nL, ng) {
  let nm = ng.M;
  let nS = nm.a;
  let nZ = n9();
  let nN = false;
  let nj = nE.bn;
  let nM = nE.blive;
  let Q0 = nE.freezeT > 0 ? 0.5 : 1;
  for (let Q1 = 0; Q1 < nj; Q1++) {
    let Q3 = nM[Q1];
    let Q4 = OW[nE.btype[Q3]];
    let Q5 = nE.bage[Q3];
    let Q6 = Q4.frames > 1 ? ((Q5 / Q4.anim) | 0) % Q4.frames : 0;
    let Q7 = Oj(nE.btype[Q3], nE.bcol[Q3], Q6);
    if (!Q7) {
      continue;
    }
    let Q8 = nE.bpx[Q3] + (nE.bx[Q3] - nE.bpx[Q3]) * nL;
    let Q9 = nE.bpy[Q3] + (nE.by[Q3] - nE.bpy[Q3]) * nL;
    if (Q8 < O8.x - 60 || Q8 > O8.x2 + 60 || Q9 < O8.y - 60 || Q9 > O8.y2 + 60) {
      continue;
    }
    let QO = 1;
    let Qn = 1;
    if (nE.bflag[Q3] & 4) {
      QO = Q5 & 2 ? 0.35 : 0.6;
    } else if (Q5 < 9) {
      QO = 0.22 + Q5 * 0.087;
      if (Q5 < 4) {
        Qn = 1.6 - Q5 * 0.15;
      }
    }
    QO *= Q0;
    if (Q4.halo) {
      if (nN) {
        nu.setTransform(nm);
        nN = false;
      }
      nu.globalAlpha = QO * 0.9;
      let QB = Q4.r * 3.2 * Qn;
      nu.drawImage(nZ, Q8 - QB, Q9 - QB, QB * 2, QB * 2);
    }
    nu.globalAlpha = QO;
    let QQ = Q7;
    if (Qn === 1 && Q4.orient) {
      let QG = nE.brot[Q3] - nE.bprot[Q3];
      if (QG > Math.PI || QG < -Math.PI) {
        QG = 0;
      }
      QQ = n5(nE.btype[Q3], nE.bcol[Q3], Q6, nE.bprot[Q3] + QG * nL + Q4.face * Ot);
    }
    if (Qn === 1 && QQ) {
      if (nN) {
        nu.setTransform(nm);
        nN = false;
      }
      nu.drawImage(
        QQ.pg,
        QQ.sx,
        QQ.sy,
        QQ.sw,
        QQ.sh,
        Math.round((Q8 - QQ.ox) * Oq) / Oq,
        Math.round((Q9 - QQ.oy) * Oq) / Oq,
        QQ.w,
        QQ.h,
      );
    } else {
      let QV = Q4.orient ? nE.bprot[Q3] + (nE.brot[Q3] - nE.bprot[Q3]) * nL + Q4.face * Ot : 0;
      let QT = Math.cos(QV) * nS * Qn;
      let QU = Math.sin(QV) * nS * Qn;
      nu.setTransform(QT, QU, -QU, QT, nm.e + nS * Q8, nm.f + nS * Q9);
      nN = true;
      nu.drawImage(Q7.cv, -Q7.ox, -Q7.oy, Q7.w, Q7.h);
    }
  }
  if (nN) {
    nu.setTransform(nm);
  }
  nu.globalAlpha = 1;
}
l(nG, "drawBullets");
var nV = [6, 6];
var nT = [];
function nU(nu, nE, nL) {
  let ng = nL.M;
  for (let nm of nE.lasers) {
    if (!nm.on) {
      continue;
    }
    let nS = Od[nm.col];
    let nZ = nm.ang;
    let nN = nm.x + Math.cos(nZ) * nm.len;
    let nj = nm.y + Math.sin(nZ) * nm.len;
    nu.lineCap = "butt";
    if (nm.t < nm.warn) {
      let nM = nm.t / nm.warn;
      nu.globalAlpha = 0.25 + nM * 0.5 * ((nm.t >> 1) & 1 ? 1 : 0.7);
      nu.strokeStyle = nS;
      nu.lineWidth = 1 + (1 - nM) * 2;
      nu.beginPath();
      nu.moveTo(nm.x, nm.y);
      nu.lineTo(nN, nj);
      nu.stroke();
      if (nm.w !== 0) {
        let Q0 = nZ + nm.w * (nm.warn - nm.t + nm.life);
        nu.globalAlpha *= 0.45;
        nu.setLineDash(nV);
        nu.beginPath();
        nu.moveTo(nm.x, nm.y);
        nu.lineTo(nm.x + Math.cos(Q0) * nm.len, nm.y + Math.sin(Q0) * nm.len);
        nu.stroke();
        nu.setLineDash(nT);
      }
    } else {
      let Q1 = nm.t - nm.warn;
      let Q3 = nm.width;
      if (Q1 < 3) {
        Q3 *= (Q1 + 1) / 4;
      } else if (Q1 > nm.life) {
        Q3 *= Math.max(0, 1 - (Q1 - nm.life) / nm.fade);
      }
      let Q4 = 1 + Math.sin(nL.time * 0.9 + nm.x) * 0.08;
      nu.globalAlpha = 0.35;
      nu.strokeStyle = nS;
      nu.lineWidth = Q3 * 1.4 * Q4;
      nu.beginPath();
      nu.moveTo(nm.x, nm.y);
      nu.lineTo(nN, nj);
      nu.stroke();
      nu.globalAlpha = 0.9;
      nu.lineWidth = Q3 * 0.8;
      nu.beginPath();
      nu.moveTo(nm.x, nm.y);
      nu.lineTo(nN, nj);
      nu.stroke();
      nu.globalAlpha = 1;
      nu.strokeStyle = "#ffffff";
      nu.lineWidth = Math.max(1, Q3 * 0.35);
      nu.beginPath();
      nu.moveTo(nm.x, nm.y);
      nu.lineTo(nN, nj);
      nu.stroke();
      nu.fillStyle = "#ffffff";
      nu.beginPath();
      nu.arc(nm.x, nm.y, Q3 * 0.6, 0, OH);
      nu.fill();
    }
  }
  nu.globalAlpha = 1;
  nu.setTransform(ng);
}
l(nU, "drawLasers");
function nw(nu, nE, nL) {
  for (let ng = 0; ng < nE.inn; ng++) {
    let nm = nE.ilive[ng];
    let nS = nE.ikind[nm];
    let nZ = nE.ipx[nm] + (nE.ix[nm] - nE.ipx[nm]) * nL;
    let nN = nE.ipy[nm] + (nE.iy[nm] - nE.ipy[nm]) * nL;
    let nj;
    if (nS === 0) {
      nj = n7("spr_board_candy", 0, 0.8, 1);
    } else if (nS === 3) {
      nj = n7("spr_board_candy", 0, 1.35, 1);
    } else if (nS === 1) {
      nj = n7("spr_sparestar", 0, 0.8, 0);
    } else {
      nj = n7("spr_stardrop", 0, 0.55, 3);
    }
    if (nj) {
      if (nN < O8.y - 4) {
        nu.globalAlpha = 0.7;
        nu.drawImage(nj.cv, nZ - nj.ox * 0.7, O8.y + 2, nj.w * 0.7, nj.h * 0.7);
        nu.globalAlpha = 1;
        continue;
      }
      if (nS === 2) {
        nu.globalAlpha = 0.8;
      }
      nu.drawImage(nj.cv, nZ - nj.ox, nN - nj.oy, nj.w, nj.h);
      nu.globalAlpha = 1;
    }
  }
}
l(nw, "drawItems");
function nb(nu, nE, nL, ng, nm) {
  let nS = nm.M;
  let nZ = nS.a;
  for (let nN = 0; nN < nL.qn; nN++) {
    let nj = nL.qlive[nN];
    let nM = nL.qpx[nj] + (nL.qx[nj] - nL.qpx[nj]) * ng;
    let Q0 = nL.qpy[nj] + (nL.qy[nj] - nL.qpy[nj]) * ng;
    let Q1 = nL.qlife[nj];
    let Q3 = nL.qmax[nj];
    let Q4 = Q1 / Q3;
    let Q5 = nL.qkind[nj];
    let Q6 = Od[nL.qcol[nj]];
    let Q7 = nL.qsize[nj];
    if (Q5 === OR.SPARK) {
      nu.globalAlpha = Math.min(1, Q4 * 1.6);
      nu.fillStyle = Q6;
      let Q8 = Q7 * 2;
      nu.fillRect(nM - Q8 / 2, Q0 - Q8 / 2, Q8, Q8);
    } else if (Q5 === OR.SQUARE) {
      nu.globalAlpha = Q4;
      nu.fillStyle = "#ffffff";
      nu.fillRect(nM - 1.5, Q0 - 1.5, 3, 3);
    } else if (Q5 === OR.RING) {
      nu.globalAlpha = Q4 * 0.9;
      nu.strokeStyle = Q6;
      nu.lineWidth = 2 + Q4 * 2;
      nu.beginPath();
      nu.arc(nM, Q0, (1 - Q4) * 30 * Q7 + 4, 0, OH);
      nu.stroke();
    } else if (Q5 === OR.GLINT) {
      let Q9 = n7("spr_tinysparkle", 0, 0.7, nL.qcol[nj]);
      if (Q9) {
        nu.globalAlpha = Q4;
        nu.drawImage(Q9.cv, nM - Q9.ox, Q0 - Q9.oy, Q9.w, Q9.h);
      }
    } else if (Q5 === OR.SHARD) {
      let QO = n7("spr_heartshards", nj & 3, 1, 3, true);
      if (QO) {
        nu.globalAlpha = Math.min(1, Q4 * 2);
        nu.drawImage(QO.cv, nM - QO.ox, Q0 - QO.oy, QO.w, QO.h);
      }
    } else if (Q5 === OR.FLAKE) {
      let Qn = n7("spr_icespell_snowflake", 0, 0.35, 0);
      if (Qn) {
        let QQ = nL.qrot[nj];
        let QB = Math.cos(QQ) * nZ * Q7;
        let QG = Math.sin(QQ) * nZ * Q7;
        nu.globalAlpha = Math.min(1, Q4 * 2);
        nu.setTransform(QB, QG, -QG, QB, nS.e + nZ * nM, nS.f + nZ * Q0);
        nu.drawImage(Qn.cv, -Qn.ox, -Qn.oy, Qn.w, Qn.h);
        nu.setTransform(nS);
      }
    } else if (Q5 === OR.SLASH) {
      let QV = n7("spr_knight_slash_mark", 0, 1.2, 0);
      if (QV) {
        let QT = nL.qrot[nj];
        let QU = 1 + (1 - Q4) * 2;
        let Qw = Math.cos(QT) * nZ;
        let Qb = Math.sin(QT) * nZ;
        nu.globalAlpha = Q4;
        nu.setTransform(Qw * QU, Qb * QU, -Qb * Q4, Qw * Q4, nS.e + nZ * nM, nS.f + nZ * Q0);
        nu.drawImage(QV.cv, -QV.ox, -QV.oy, QV.w, QV.h);
        nu.setTransform(nS);
      }
    } else if (Q5 === OR.SPRITE) {
      let Qd = nL.qspr[nj];
      if (Qd === 0) {
        let QW = n7("spr_yheart_shot_hit", Math.min(4, ((1 - Q4) * 5) | 0), 0.8, 0);
        if (QW) {
          nu.globalAlpha = 1;
          nu.drawImage(QW.cv, nM - QW.ox, Q0 - QW.oy, QW.w, QW.h);
        }
      } else if (Qd === 1) {
        let Qh = n7("spr_rudebuster_beam", (Q3 - Q1) % 7, 1, 0);
        if (Qh) {
          nu.globalAlpha = Q4 * 0.7;
          nu.setTransform(0, -nZ, nZ, 0, nS.e + nZ * nM, nS.f + nZ * Q0);
          nu.drawImage(Qh.cv, -Qh.ox, -Qh.oy, Qh.w, Qh.h);
          nu.setTransform(nS);
        }
      } else if (Qd === 3) {
        let Qc = n7("spr_attack_cut1", Math.min(4, ((1 - Q4) * 5) | 0), 1.6, 0, true);
        if (Qc) {
          nu.globalAlpha = 1;
          nu.drawImage(Qc.cv, nM - Qc.ox, Q0 - Qc.oy, Qc.w, Qc.h);
        }
      } else if (Qd === 4) {
        let Qz = n7("spr_berdly_coaster_feather", (nj >> 1) & 1, 1.6, 0, true);
        if (Qz) {
          let Ql = nL.qrot[nj];
          let QX = Math.cos(Ql) * nZ;
          let QY = Math.sin(Ql) * nZ;
          nu.globalAlpha = Math.min(1, Q4 * 2);
          nu.setTransform(QX, QY, -QY, QX, nS.e + nZ * nM, nS.f + nZ * Q0);
          nu.drawImage(Qz.cv, -Qz.ox, -Qz.oy, Qz.w, Qz.h);
          nu.setTransform(nS);
        }
      } else {
        let Qf = n7("spr_spare_z", 0, 1, 0);
        let QK = 0.6 + (1 - Q4) * 0.4;
        if (Qf) {
          nu.globalAlpha = Math.min(1, Q4 * 2);
          nu.drawImage(Qf.cv, nM - Qf.ox * QK, Q0 - Qf.oy * QK, Qf.w * QK, Qf.h * QK);
        }
      }
    }
  }
  nu.globalAlpha = 1;
}
l(nb, "drawParticles");
function nd(nu, nE, nL) {
  for (let ng of nL.markers) {
    if (!ng.on) {
      continue;
    }
    let nm = ng.t / ng.life;
    if (ng.kind === "window") {
      let nS = Math.min(1, ng.t / 8);
      let nZ = ng.t > ng.life - 8 ? (ng.life - ng.t) / 8 : 1;
      let nN = n7("spr_queen_search_window", 0, 0.55, 0);
      if (nN) {
        nu.globalAlpha = (ng.t < 22 && (ng.t >> 1) & 1 ? 0.5 : 0.9) * nZ;
        nu.drawImage(nN.cv, ng.x - (nN.w / 2) * nS, ng.y - nN.h / 2, nN.w * nS, nN.h);
      }
    } else if (ng.kind === "dice") {
      nu.globalAlpha = 1;
      nJ(
        nE,
        ng.x,
        ng.y - 30 - nm * 10,
        String(ng.a),
        nm < 0.7 ? "#ffff00" : "#ffffff",
        "fnt_mainbig",
        "center",
        1 - nm * 0.6,
        true,
      );
    } else if (ng.kind === "charge") {
      nu.globalAlpha = 0.8;
      nu.strokeStyle = "#ffff40";
      nu.lineWidth = 2;
      nu.beginPath();
      nu.arc(ng.x, ng.y, (1 - nm) * 70 + 6, 0, OH);
      nu.stroke();
    } else if (ng.kind === "light") {
      nu.globalAlpha = 0.1;
      nu.fillStyle = "#fff8c0";
      nu.beginPath();
      nu.arc(ng.x, ng.y, ng.a, 0, OH);
      nu.fill();
      nu.globalAlpha = 0.4;
      nu.strokeStyle = "#fff8c0";
      nu.lineWidth = 1.5;
      nu.stroke();
    } else if (ng.kind === "spr" && ng.spr) {
      nE.draw_sprite_ext(
        ng.spr,
        ng.fr | 0,
        ng.x,
        ng.y,
        ng.a || 1,
        ng.a || 1,
        ng.b || 0,
        c.white,
        ng.c === undefined ? 1 : ng.c,
      );
    }
  }
  nu.globalAlpha = 1;
}
l(nd, "drawMarkers");
function nW(nu, nE, nL, ng, nm) {
  let nS = nL.boss;
  let nZ = nS.def;
  if (!nZ || !nS.show) {
    return;
  }
  let nN = nS.px + (nS.x - nS.px) * ng;
  let nj = nS.py + (nS.y - nS.py) * ng;
  let nM = nS.form || nZ;
  let Q0 = h[nM.spr];
  if (!Q0) {
    return;
  }
  let Q1 = nM.frames > 1 ? ((nm.time / ((nM.anim || 4) * 2)) | 0) % nM.frames : 0;
  let Q3 = nS.scale;
  let Q4 = nM.ofx !== undefined ? nM.ofx : Q0.ox;
  let Q5 = nM.ofy !== undefined ? nM.ofy : Q0.oy;
  let Q6 = Math.sin(nm.time * 0.05) * 3;
  let Q7 = nN - (Q4 - Q0.ox) * Q3;
  let Q8 = nj - (Q5 - Q0.oy) * Q3 + Q6;
  if (nS.dying > 0) {
    Q7 += (Math.random() - 0.5) * 6;
    Q8 += (Math.random() - 0.5) * 6;
  }
  let Q9 = nm.trail;
  Q9.at = (Q9.at + 2) % 12;
  Q9.v[Q9.at] = Q7;
  Q9.v[Q9.at + 1] = Q8;
  if (Q9.n < 6) {
    Q9.n++;
  }
  if (nS.trail > 0) {
    for (let QO = Q9.n - 1; QO >= 1; QO--) {
      let Qn = (Q9.at - QO * 2 + 24) % 12;
      nE.draw_sprite_ext(
        nM.spr,
        Q1,
        Q9.v[Qn],
        Q9.v[Qn + 1],
        Q3,
        Q3,
        0,
        c.white,
        0.12 + (5 - QO) * 0.04,
      );
    }
  }
  if (nL.phase && nL.phase.spell && nL.declT === 0) {
    nu.strokeStyle = Od[nZ.col || 0];
    nu.lineWidth = 1.5;
    for (let QQ = 0; QQ < 2; QQ++) {
      let QB = 46 + QQ * 12 + Math.sin(nm.time * 0.07 + QQ) * 3;
      let QG = nm.time * (QQ ? -0.03 : 0.02);
      nu.globalAlpha = 0.35;
      nu.beginPath();
      for (let QV = 0; QV < 12; QV++) {
        let QT = QG + (QV * OH) / 12;
        nu.moveTo(nN + Math.cos(QT) * QB, nj + Math.sin(QT) * QB);
        nu.arc(nN, nj, QB, QT, QT + OH / 24);
      }
      nu.stroke();
    }
    nu.globalAlpha = 1;
  }
  nE.draw_sprite_ext(nM.spr, Q1, Q7, Q8, Q3, Q3, 0, c.white, nS.alpha);
  if (nS.dmgT > 0 && nm.frame & 1) {
    nE.draw_sprite_flash(nM.spr, Q1, Q7, Q8, Q3, Q3, 0, "#ffffff", nS.alpha * 0.35);
  }
}
l(nW, "drawBoss");
var nh = {
  susie: {
    name: "SUSIE",
    head: ["spr_headsusie", 0, 1],
    plate: "spr_bnamesusie",
    idle: ["spr_susieb_idle", 4, 2],
    icon: ["spr_headsusie", 2, 0.5],
    spell: "RUDE BUSTER",
    shot: ["AXES", "AXE BEAM"],
    pal: [
      {
        opt: 8,
        shot: 0,
        name: "PURPLE",
      },
      {
        opt: 1,
        shot: 1,
        name: "RED BUSTER",
      },
    ],
  },
  ralsei: {
    name: "RALSEI",
    head: ["spr_headralsei", 0, 1],
    plate: "spr_bnameralsei",
    idle: ["spr_ralseib_idle", 5, 2],
    icon: ["spr_headralsei", 2, 0.5],
    spell: "PACIFY",
    shot: ["HOMING YARN", "STAR STREAM"],
    pal: [
      {
        opt: 4,
        shot: 4,
        name: "GREEN",
      },
      {
        opt: 8,
        shot: 8,
        name: "PINK SCARF",
      },
    ],
  },
  noelle: {
    name: "NOELLE",
    head: ["spr_headnoelle", 0, 1],
    plate: "spr_bnamenoelle",
    idle: ["spr_noelleb_idle", 5, 2],
    icon: ["spr_headnoelle", 2, 0.5],
    spell: "SNOWGRAVE",
    shot: ["ICE NEEDLES", "FROST LANCE"],
    pal: [
      {
        opt: 3,
        shot: 5,
        name: "YELLOW",
      },
      {
        opt: 5,
        shot: 7,
        name: "DEEP FROST",
      },
    ],
  },
  kris: {
    name: "KRIS",
    head: ["spr_headkris", 0, 1],
    plate: "spr_bnamekris",
    idle: ["spr_krisb_idle", 6, 2],
    icon: ["spr_btact", 0, 0.5],
    spell: "ACT",
    shot: ["SWORD", "THRUST"],
    pal: [
      {
        opt: 5,
        shot: 5,
        name: "CYAN",
      },
      {
        opt: 1,
        shot: 1,
        name: "RED SOUL",
      },
    ],
  },
  lancer: {
    name: "LANCER",
    head: ["spr_lancer_dt", 0, 0.75],
    plate: null,
    idle: ["spr_lancer_battle", 3, 2],
    icon: ["spr_spadebullet", 0, 0.42],
    spell: "BIKE",
    shot: ["SPADES", "SPADE BOMB"],
    pal: [
      {
        opt: 7,
        shot: 0,
        name: "SPADE",
      },
      {
        opt: 4,
        shot: 4,
        name: "CACTUS",
      },
    ],
  },
  berdly: {
    name: "BERDLY",
    head: ["spr_berdly_d", 0, 0.62],
    plate: null,
    idle: ["spr_berdlyb_idle", 5, 2],
    icon: ["spr_berdly_coaster_feather", 0, 1.6],
    spell: "SMART STORM",
    shot: ["FEATHERS", "QUILLS"],
    pal: [
      {
        opt: 6,
        shot: 0,
        name: "BLUE",
      },
      {
        opt: 2,
        shot: 2,
        name: "GOLD",
      },
    ],
  },
};
var nc = l((nu) => nh[nu.partner].pal[nu.pal & 1], "pal");
var nz = [];
nz[0] = ["spr_yheart_shot", 0, 0.9, "vel", 0, 0.8];
nz[2] = ["spr_axebullet_b", 0, 0.8, "spin", 0, 1];
nz[3] = ["spr_rudebuster_beam", 7, 0.42, "vel", 0, 0.85];
nz[4] = ["spr_yarnbullet", 4, 0.32, "vel", 0, 1];
nz[5] = ["spr_sparestar_anim", 6, 1, "none", 0, 0.9];
nz[6] = ["spr_iciclebullet", 0, 0.55, "vel", -Math.PI / 2, 0.95];
nz[7] = ["spr_iciclebullet", 2, 0.8, "vel", -Math.PI / 2, 0.95];
nz[8] = ["spr_attack_cut1", 5, 1.3, "none", 0, 1];
nz[9] = ["spr_attack_cut1", 0, 0.9, "none", 0, 0.9];
nz[10] = ["spr_spadebullet", 0, 0.4, "vel", 0, 1];
nz[11] = ["spr_spadebullet_chunk", 0, 0.42, "spin", 0, 1];
nz[12] = ["spr_berdly_coaster_feather", 2, 2.2, "vel", Math.PI * 0.75, 1];
nz[13] = ["spr_board_blue_bird_feather", 0, 1.8, "vel", Math.PI * 0.75, 1];
nz[14] = ["spr_spadebullet", 0, 0.22, "vel", 0, 1];
function nl(nu, nE, nL, ng) {
  let nm = ng.M;
  let nS = nm.a;
  let nZ = nc(nE);
  let nN = nE.partner === "susie" && nE.pal & 1;
  for (let nj = 0; nj < nE.sn; nj++) {
    let nM = nE.slive[nj];
    let Q0 = nE.skind[nM];
    let Q1 = nz[Q0];
    if (!Q1) {
      continue;
    }
    let Q3 = Q1[1];
    let Q4 = nE.sage[nM];
    let Q5 = Q0 === 8 ? Math.min(4, Q4 >> 1) : Q0 === 7 ? 1 : Q3 ? (Q4 >> 1) % Q3 : 0;
    let Q6 = Q0 === 3 && nN;
    let Q7 = n7(
      Q6 ? "spr_rudebuster_beam_red" : Q1[0],
      Q5,
      Q1[2],
      Q0 === 0 || Q6 ? 0 : nZ.shot,
      true,
    );
    if (!Q7) {
      continue;
    }
    let Q8 = nE.spx[nM] + (nE.sx[nM] - nE.spx[nM]) * nL;
    let Q9 = nE.spy[nM] + (nE.sy[nM] - nE.spy[nM]) * nL;
    let QO = 0;
    if (Q1[3] === "vel") {
      QO = Math.atan2(nE.svy[nM], nE.svx[nM]) + Q1[4];
    } else if (Q1[3] === "spin") {
      QO = (Q4 + nL) * 0.45;
    }
    let Qn = Math.cos(QO) * nS;
    let QQ = Math.sin(QO) * nS;
    nu.globalAlpha =
      Q1[5] * (nE.slife[nM] >= 0 && nE.slife[nM] < 3 && Q0 !== 8 ? (nE.slife[nM] + 1) / 4 : 1);
    if (Q0 === 9) {
      nu.setTransform(
        nS * 0.42425999999999997,
        nS * 1.20207,
        nS * -0.42425999999999997,
        nS * 1.20207,
        nm.e + nS * Q8,
        nm.f + nS * Q9,
      );
    } else {
      nu.setTransform(Qn, QQ, -QQ, Qn, nm.e + nS * Q8, nm.f + nS * Q9);
    }
    nu.globalCompositeOperation = Q0 === 0 ? "lighter" : "source-over";
    nu.drawImage(Q7.cv, -Q7.ox, -Q7.oy, Q7.w, Q7.h);
  }
  nu.setTransform(nm);
  nu.globalAlpha = 1;
  nu.globalCompositeOperation = "source-over";
}
l(nl, "drawShots");
function nX(nu, nE, nL, ng, nm) {
  let nS = nL.P;
  let nZ = nm.M;
  let nN = nZ.a;
  if (!nS.alive) {
    return;
  }
  let nj = nS.px + (nS.x - nS.px) * ng;
  let nM = nS.py + (nS.y - nS.py) * ng;
  let Q0 = nS.invuln > 0 && (nm.frame >> 2) & 1;
  let Q1 = Math.min(4, Math.floor(nS.power));
  let Q3 = n7("spr_heartsmall", 0, 1.3, 100 + nc(nL).opt, true);
  let Q4 = nm.opt;
  if (Q3) {
    for (let Q7 = 0; Q7 < Q1; Q7++) {
      nL.optionPos(Q7, Q1, nS.focus, Q4);
      let Q8 = Q4.x + (nj - nS.x);
      let Q9 = Q4.y + (nM - nS.y);
      nu.globalAlpha = Q0 ? 0.35 : 0.85;
      nu.drawImage(Q3.cv, Q8 - Q3.ox, Q9 - Q3.oy, Q3.w, Q3.h);
    }
  }
  nu.globalAlpha = 1;
  if (nS.grazeFlash > 0) {
    nu.globalAlpha = (nS.grazeFlash / 6) * 0.7;
    nu.strokeStyle = "#ffffff";
    nu.lineWidth = 1;
    nu.beginPath();
    nu.arc(nj, nM, 18, 0, OH);
    nu.stroke();
    nu.globalAlpha = 1;
    if (nm.ticked) {
      nS.grazeFlash--;
    }
  }
  if (nL.bombT > 0 && nL.bombKind === "lancer") {
    let QO = n7("spr_lancerbike", (nm.frame >> 2) % 6, 0.7, 0, true);
    if (QO) {
      nu.globalAlpha = 0.9;
      nu.drawImage(QO.cv, nj - QO.ox, nM - QO.oy + 6, QO.w, QO.h);
      nu.globalAlpha = 1;
    }
  }
  let Q5 = n7("spr_yellowheart", 0, 1, 0, true);
  if (Q5) {
    let Qn = -Math.PI / 2 + nS.lean * 0.18;
    let QQ = Math.cos(Qn) * nN;
    let QB = Math.sin(Qn) * nN;
    nu.globalAlpha = Q0 ? 0.35 : 1;
    nu.setTransform(QQ, QB, -QB, QQ, nZ.e + nN * nj, nZ.f + nN * nM);
    nu.drawImage(Q5.cv, -Q5.ox, -Q5.oy, Q5.w, Q5.h);
    nu.setTransform(nZ);
    nu.globalAlpha = 1;
  }
  let Q6 = nS.focusT / 8;
  if (Q6 > 0) {
    nu.globalAlpha = Q6 * 0.5;
    nu.strokeStyle = "#ffff60";
    nu.lineWidth = 1;
    let QG = nm.time * 0.05;
    nu.beginPath();
    for (let QV = 0; QV < 8; QV++) {
      let QT = QG + (QV * OH) / 8;
      nu.moveTo(nj + Math.cos(QT) * 22, nM + Math.sin(QT) * 22);
      nu.arc(nj, nM, 22, QT, QT + OH / 16);
    }
    nu.stroke();
    nu.globalAlpha = Q6;
    nu.fillStyle = "#ff2020";
    nu.beginPath();
    nu.arc(nj, nM, 3.6, 0, OH);
    nu.fill();
    nu.fillStyle = "#ffffff";
    nu.beginPath();
    nu.arc(nj, nM, 2.4, 0, OH);
    nu.fill();
    nu.globalAlpha = 1;
  }
}
l(nX, "drawPlayer");
function nY(nu, nE, nL, ng, nm) {
  if (nL.bombT <= 0) {
    return;
  }
  let nS = nL.bombKind;
  let nZ = nL.bombT / nL.bombMax;
  let nN = nL.bombMax - nL.bombT;
  let nj = nm.M;
  let nM = nj.a;
  if (nS === "susie") {
    let Q0 = n7("spr_rudebuster_beam", (nN >> 1) % 7, 3.2, 0);
    nu.globalAlpha = nZ * 0.25;
    nu.fillStyle = "#b040ff";
    nu.fillRect(O8.x, O8.y, O8.w, O8.h);
    if (Q0) {
      for (let Q1 = 0; Q1 < 4; Q1++) {
        let Q3 = nL.bombY + Q1 * 34;
        nu.globalAlpha = (1 - Q1 * 0.22) * Math.min(1, nZ * 3);
        nu.setTransform(0, -nM, nM, 0, nj.e + nM * nL.bombX, nj.f + nM * Q3);
        nu.drawImage(Q0.cv, -Q0.ox, -Q0.oy, Q0.w, Q0.h);
      }
    }
    nu.setTransform(nj);
  } else if (nS === "noelle") {
    nu.globalAlpha = Math.min(1, nZ * 2) * 0.45 * (nN < 6 ? nN / 6 : 1);
    nu.fillStyle = "#c8e8ff";
    nu.fillRect(O8.x, O8.y, O8.w, O8.h);
    let Q4 = n7("spr_icespell_snowflake", 0, 2.4, 0);
    if (Q4) {
      let Q5 = nN * 0.03;
      let Q6 = Math.min(1, nN / 16);
      let Q7 = Math.cos(Q5) * nM * Q6;
      let Q8 = Math.sin(Q5) * nM * Q6;
      nu.globalAlpha = Math.min(1, nZ * 2.5) * 0.6;
      nu.setTransform(Q7, Q8, -Q8, Q7, nj.e + nM * O8.cx, nj.f + nM * (O8.y + O8.h / 2));
      nu.drawImage(Q4.cv, -Q4.ox, -Q4.oy, Q4.w, Q4.h);
      nu.setTransform(nj);
    }
  } else if (nS === "kris") {
    nu.globalAlpha = Math.min(1, nZ * 4) * 0.16;
    nu.fillStyle = "#a0b4ff";
    nu.fillRect(O8.x, O8.y, O8.w, O8.h);
    let Q9 = nL.P;
    let QO = Q9.px + (Q9.x - Q9.px) * ng;
    let Qn = Q9.py + (Q9.y - Q9.py) * ng;
    nu.globalAlpha = Math.min(1, nZ * 4) * 0.7;
    nu.strokeStyle = "#ffffff";
    nu.lineWidth = 2;
    nu.beginPath();
    nu.arc(QO, Qn, 30, -Math.PI / 2, -Math.PI / 2 + OH * nZ);
    nu.stroke();
    if (nN < 34) {
      let QQ = n7("spr_btact", (nN >> 2) & 1, 2, 0, true);
      if (QQ) {
        let QB = nN < 6 ? 0.5 + nN / 12 : 1;
        nu.globalAlpha = nN > 24 ? (34 - nN) / 10 : 1;
        nu.drawImage(QQ.cv, QO - QQ.ox * QB, Qn - 56 - QQ.oy * QB, QQ.w * QB, QQ.h * QB);
      }
    }
  } else if (nS === "lancer") {
    let QG = nL.bike;
    let QV = QG.px + (QG.x - QG.px) * ng;
    let QT = QG.py + (QG.y - QG.py) * ng;
    let QU = n7("spr_lancerbike", (nN >> 1) % 6, 2, 0, true);
    if (QU && QG.on) {
      let Qw = nL.boss.x < QV ? -1 : 1;
      for (let Qb = 3; Qb >= 0; Qb--) {
        nu.globalAlpha = Qb ? 0.3 / Qb : 1;
        nu.setTransform(nM * Qw, 0, 0, nM, nj.e + nM * QV, nj.f + nM * (QT - QG.vy * Qb * 1.4));
        nu.drawImage(QU.cv, -QU.ox, -QU.oy, QU.w, QU.h);
      }
      nu.setTransform(nj);
    }
  } else if (nS === "berdly") {
    nu.globalAlpha = Math.min(1, nZ * 3) * 0.12;
    nu.fillStyle = "#a0e0ff";
    nu.fillRect(O8.x, O8.y, O8.w, O8.h);
    let Qd = n7("spr_tornado_bullet", 0, 1.7, 0, true);
    let QW = n7("spr_berdlyb_tornado", 0, 1.4, 0, true);
    for (let Qh = 0; Qh < 3; Qh++) {
      let Qc = nL.storm[Qh];
      if (!Qc.on || Qc.y > O8.y2 + 30) {
        continue;
      }
      let Qz = Qc.px + (Qc.x - Qc.px) * ng;
      let Ql = Qc.py + (Qc.y - Qc.py) * ng;
      let QX = ((nN + Qh * 2) >> 1) & 1 ? -1 : 1;
      if (Qd) {
        nu.globalAlpha = Math.min(1, nZ * 3) * 0.5;
        nu.globalCompositeOperation = "lighter";
        nu.setTransform(nM * QX, 0, 0, nM, nj.e + nM * Qz, nj.f + nM * Ql);
        nu.drawImage(Qd.cv, -Qd.ox, -Qd.oy, Qd.w, Qd.h);
        nu.globalCompositeOperation = "source-over";
      }
      if (Qh === 1 && QW) {
        nu.globalAlpha = Math.min(1, nZ * 3);
        nu.setTransform(nM * QX, 0, 0, nM, nj.e + nM * Qz, nj.f + nM * (Ql - 6));
        nu.drawImage(QW.cv, -QW.ox, -QW.oy, QW.w, QW.h);
      }
    }
    nu.setTransform(nj);
  } else {
    nu.globalAlpha = Math.min(1, nZ * 2) * 0.22;
    nu.fillStyle = "#ffd0f0";
    nu.fillRect(O8.x, O8.y, O8.w, O8.h);
  }
  nu.globalAlpha = 1;
}
l(nY, "drawBomb");
function nf(nu, nE, nL, ng) {
  let nm = nL.boss;
  let nS = nm.def;
  if (!nS || !nm.show || nm.dying > 0) {
    return;
  }
  let nZ = nL.phase;
  nJ(nE, O8.x + 6, O8.y + 3, nS.name, "#ffffff", "fnt_small", "left", 1, true);
  let nN = 0;
  for (let Q5 = Math.max(0, nL.pi + 1); Q5 < nS.phases.length; Q5++) {
    if (nS.phases[Q5].spell) {
      nN++;
    }
  }
  let nj = n7("spr_sparestar", 0, 0.55, 0, false);
  let nM = nO(nE, nS.name, "fnt_small") + 10;
  if (nj) {
    for (let Q6 = 0; Q6 < nN; Q6++) {
      nu.drawImage(nj.cv, O8.x + 6 + nM + Q6 * 10, O8.y + 4, nj.w, nj.h);
    }
  }
  let Q0 = O8.x + 6;
  let Q1 = O8.x2 - 50;
  let Q3 = O8.y + 17;
  if (nZ && !nZ.survival) {
    let Q7 = Math.max(0, nm.hp / nm.hpMax);
    nu.fillStyle = "#800000";
    nu.fillRect(Q0, Q3, Q1 - Q0, 4);
    nu.fillStyle = nZ.spell ? "#ffff00" : "#ffa040";
    nu.fillRect(Q0, Q3, (Q1 - Q0) * Q7, 4);
  } else if (nZ && nZ.survival) {
    nu.fillStyle = "#404040";
    nu.fillRect(Q0, Q3, Q1 - Q0, 4);
  }
  if (nZ && nL.declT === 0 && !nZ.hideTimer) {
    let Q8 = Math.max(0, Math.ceil(nL.timer / 30));
    nJ(
      nE,
      O8.x2 - 6,
      O8.y + 2,
      (Q8 < 10 ? "0" : "") + Q8,
      Q8 <= 10 ? "#ff4040" : "#ffffff",
      "fnt_mainbig",
      "right",
      1,
      true,
    );
  }
  let Q4 = nm.x;
  nu.fillStyle = "#ff3030";
  nu.beginPath();
  nu.moveTo(Q4 - 5, O8.y2 + 9);
  nu.lineTo(Q4 + 5, O8.y2 + 9);
  nu.lineTo(Q4, O8.y2 + 3);
  nu.fill();
}
l(nf, "drawBossHud");
var nK = new Map();
function nP(nu, nE, nL) {
  let ng = nK.get(nE);
  if (ng === undefined) {
    let nm = 0;
    for (let nS of nE) {
      nm = Math.max(nm, nO(nu, nS, "fnt_mainbig"));
    }
    ng = nm <= nL ? "fnt_mainbig" : "fnt_main";
    nK.set(nE, ng);
  }
  return ng;
}
l(nP, "fontFor");
function nI(nu, nE, nL, ng) {
  let nm = nL.banner;
  if (nm) {
    if (nm.kind === "spell") {
      let nS = nm.t;
      let nZ = O8.y2 - 64;
      let nN = O8.y + 40;
      let nj = nS < 22 ? 0 : Math.min(1, (nS - 22) / 16);
      let nM = 1 - (1 - nj) * (1 - nj);
      let Q0 = nZ + (nN - nZ) * nM;
      let Q1 = nS < 10 ? (10 - nS) * 24 : 0;
      let Q3 = O8.x2 - 8 + Q1;
      let Q4 = nO(nE, nm.text, "fnt_main");
      let Q5 = Od[(nL.boss.def && nL.boss.def.col) || 0];
      if (nS < 38) {
        let Q6 = Math.min(1, nS / 8) * (nS > 30 ? (38 - nS) / 8 : 1);
        let Q7 = (Math.min(1, nS / 12) * O8.w) / 2;
        nu.globalAlpha = Q6 * 0.6;
        nu.fillStyle = "#000000";
        nu.fillRect(O8.cx - Q7, Q0 - 22, Q7 * 2, 46);
        nu.globalAlpha = Q6;
        nu.fillStyle = Q5;
        nu.fillRect(O8.cx - Q7, Q0 - 22, Q7 * 2, 2);
        nu.fillRect(O8.cx - Q7, Q0 + 22, Q7 * 2, 2);
        nu.globalAlpha = 1;
        nJ(
          nE,
          Q3,
          Q0 - 18,
          nm.num ? "SPELL CARD No." + String(nm.num).padStart(2, "0") : "SPELL CARD",
          Q5,
          "fnt_small",
          "right",
          Q6,
          true,
        );
      }
      nu.globalAlpha = 0.75;
      nu.fillStyle = "#000000";
      nu.fillRect(Q3 - Q4 - 10, Q0 - 2, Q4 + 14, 20);
      nu.fillStyle = Q5;
      nu.fillRect(Q3 - Q4 - 10, Q0 + 17, Q4 + 14, 2);
      nu.globalAlpha = 1;
      nJ(nE, Q3, Q0, nm.text, "#ffffff", "fnt_main", "right", 1, true);
      if (nj >= 1 || nS > 38) {
        let Q8 = nL.cardFailed;
        let Q9 =
          nL.phase && nL.phase.survival
            ? "SURVIVE"
            : Q8
              ? "BONUS FAILED"
              : "BONUS " + Math.round(nL.cardBonus / 10) * 10;
        let QO = "";
        if (ng.history) {
          QO = "  " + ng.history.cap + "/" + ng.history.att;
        }
        nJ(nE, Q3, Q0 + 22, Q9 + QO, Q8 ? "#808080" : "#c0c0c0", "fnt_main", "right", 1, true);
      }
      if (!nL.phase) {
        nL.banner = null;
      }
    } else if (nm.kind === "boss") {
      let Qn = nm.t < 16 ? nm.t / 16 : nm.t > 56 ? Math.max(0, (76 - nm.t) / 20) : 1;
      let QQ = nm.line ? (nm.t > 92 ? Math.max(0, (108 - nm.t) / 16) : 1) : Qn;
      nJ(
        nE,
        O8.cx,
        O8.y + 170,
        nm.text,
        "#ffffff",
        "fnt_mainbig",
        "center",
        nm.line ? QQ : Qn,
        true,
      );
      nJ(nE, O8.cx, O8.y + 202, nm.sub, "#c0c0c0", "fnt_main", "center", nm.line ? QQ : Qn, true);
      if (nm.line && nm.t > OV - 6) {
        let QB = O8.x + 12;
        let QG = O8.y2 - 108;
        let QV = O8.x2 - 12;
        let QT = O8.y2 - 12;
        nu.globalAlpha = QQ;
        nu.fillStyle = "#000000";
        nu.fillRect(QB + 6, QG + 6, QV - QB - 12, QT - QG - 12);
        nu.globalAlpha = 1;
        if (QQ > 0.5) {
          nn(nE, QB, QG, QV, QT);
        }
        let QU = nm.chars;
        let Qw = nP(nE, nm.line, QV - QB - 40);
        let Qb = Qw === "fnt_mainbig" ? 30 : 22;
        for (let Qd = 0; Qd < nm.line.length && QU > 0; Qd++) {
          let QW = nm.line[Qd];
          let Qh = Math.min(QU, QW.length);
          QU -= Qh;
          nJ(
            nE,
            QB + 22,
            QG + 22 + Qd * Qb,
            Qh < QW.length ? QW.slice(0, Qh) : QW,
            "#ffffff",
            Qw,
            "left",
            QQ,
          );
        }
      }
    } else if (nm.kind === "capture" || nm.kind === "failed") {
      let Qc = nm.t > 70 ? Math.max(0, (90 - nm.t) / 20) : 1;
      let Qz = nm.kind === "capture";
      let Ql = O8.y + 120;
      let QX = Qz ? Math.max(0, 8 - nm.t) * 3 : 0;
      nJ(
        nE,
        O8.cx,
        Ql - QX,
        nm.text,
        Qz ? ((nm.t >> 2) & 1 ? "#ffff00" : "#ffffff") : "#a0a0a0",
        "fnt_mainbig",
        "center",
        Qc,
        true,
      );
      if (nm.sub) {
        let QY = Qz ? Math.round((+nm.sub * Math.min(1, nm.t / 18)) / 10) * 10 : nm.sub;
        nJ(nE, O8.cx, Ql + 30, String(QY), "#ffff00", "fnt_mainbig", "center", Qc, true);
      }
      if (Qz && !ng.calm) {
        let Qf = h.spr_shine;
        let QK = Qf ? Math.max(1, Qf.frames | 0) : 1;
        if (Qf) {
          for (let QP = 0; QP < 4; QP++) {
            let QI = nm.t * 0.08 + QP / 4;
            let Qr = Math.floor(QI);
            let QR = Math.floor((QI - Qr) * QK) % QK;
            nE.draw_sprite_ext(
              "spr_shine",
              QR,
              O8.cx - 130 + ((QP * 0.37 + Qr * 0.61) % 1) * 260,
              Ql - 6 + ((QP * 0.53 + Qr * 0.29) % 1) * 64,
              1,
              1,
              0,
              c.white,
              Qc,
            );
          }
        }
      }
      if (Qz && nm.pts && nm.t > 18) {
        let Qx = n7("spr_sparestar", 0, 1, 0, true);
        let Qe = nO(nE, "+" + nm.pts + " POINTS", "fnt_main");
        if (Qx) {
          nu.globalAlpha = Qc;
          nu.drawImage(Qx.cv, O8.cx - Qe / 2 - 18, Ql + 70 - Qx.oy + 8, Qx.w, Qx.h);
          nu.globalAlpha = 1;
        }
        nJ(
          nE,
          O8.cx + 4,
          Ql + 68,
          "+" + nm.pts + " POINTS",
          "#ffffff",
          "fnt_main",
          "center",
          Qc,
          true,
        );
      }
    }
  }
  if (nL.phase && nL.phase.spell && nL.declT > 0) {
    let QC = nL.boss.def;
    let QH = 1 - nL.declT / 48;
    let Qq = O8.x2 + 60 - QH * (O8.w + 60);
    let Qv = O8.y + 250 - QH * 60;
    nE.draw_sprite_ext(
      QC.portrait || QC.spr,
      0,
      Qq,
      Qv,
      3.2,
      3.2,
      0,
      c.white,
      Math.sin(QH * Math.PI) * 0.28,
    );
  }
  for (let QF of nL.popups) {
    let QD = QF.t > (QF.big ? 50 : 26) ? 1 - (QF.t - (QF.big ? 50 : 26)) / 20 : 1;
    nJ(
      nE,
      QF.x,
      QF.y,
      QF.text,
      Od[QF.col] || "#ffffff",
      QF.big ? "fnt_main" : "fnt_small",
      "center",
      Math.max(0, QD),
      true,
    );
  }
}
l(nI, "drawBanners");
var nA = {};
for (let QL of Object.keys(nh)) {
  nA[QL] = nh[QL].spell;
}
var np = ["#80ff80", "#80c0ff", "#ffc040", "#ff60ff"];
function nr(nu, nE) {
  let nL = String(Math.floor(nu));
  while (nL.length < nE) {
    nL = "0" + nL;
  }
  return nL;
}
l(nr, "pad");
var nR = {
  x: 436,
  touch: {
    focus: {
      x: 440,
      y: 306,
      w: 96,
      h: 164,
    },
    spell: {
      x: 542,
      y: 306,
      w: 94,
      h: 164,
    },
    pause: {
      x: 580,
      y: 6,
      w: 54,
      h: 38,
    },
    pauseZone: {
      x: 436,
      y: 30,
      w: 204,
      h: 64,
    },
  },
};
function nx(nu, nE, nL, ng, nm, nS, nZ = 1, nN = 0) {
  let nj = n7(nE, nL, nS, nN, true);
  if (nj) {
    nu.ctx.globalAlpha = nZ;
    nu.ctx.drawImage(nj.cv, Math.round(ng - nj.ox), Math.round(nm - nj.oy), nj.w, nj.h);
    nu.ctx.globalAlpha = 1;
    return nj;
  } else {
    return null;
  }
}
l(nx, "spriteIn");
function nC(nu, nE, nL, ng, nm = 1, nS = 1) {
  let nZ = nh[nE] || nh.susie;
  return nx(nu, nZ.icon[0], nZ.icon[1], nL, ng, nZ.icon[2] * nm, nS);
}
l(nC, "spellIcon");
function nH(nu, nE, nL, ng, nm = 1, nS = 1) {
  let nZ = nh[nE] || nh.susie;
  return nx(nu, nZ.head[0], nZ.head[1], nL, ng, nZ.head[2] * nm, nS);
}
l(nH, "partnerHead");
var nq = ["focus", "spell"];
var nv = ["FOCUS", "SPELL"];
function nF(nu, nE, nL, ng) {
  let nm = nL.P;
  let nS = 444;
  let nZ = 628;
  let nN = nh[nL.partner] || nh.susie;
  let nj = Od[nc(nL).opt];
  nu.fillStyle = "#000000";
  nu.fillRect(0, 0, 640, O8.y);
  nu.fillRect(0, O8.y2, 640, 480 - O8.y2);
  nu.fillRect(0, 0, O8.x, 480);
  nu.fillRect(O8.x2, 0, 640 - O8.x2, 480);
  nu.strokeStyle = Ov;
  nu.lineWidth = 3;
  nu.strokeRect(O8.x - 1.5, O8.y - 1.5, O8.w + 3, O8.h + 3);
  let nM = nL.mode === "practice";
  nJ(nE, nS, 12, OO[nL.diff], np[nL.diff], "fnt_main");
  if (!ng.touch) {
    nJ(nE, nZ, 12, nM ? "PRACTICE" : ng.stageTag || "", "#808080", "fnt_main", "right");
  }
  let Q0 = (QU, Qw, Qb, Qd = "#ffffff") => {
    nJ(nE, nS, QU, Qw, "#808080", "fnt_main");
    if (Qb !== null) {
      nJ(nE, nZ, QU, Qb, Qd, "fnt_main", "right");
    }
  };
  Q0(38, "HISCORE", nr(Math.max(ng.hiscore || 0, nm.score), 10), "#c0c0c0");
  Q0(58, "SCORE", nr(nm.score, 10));
  Q0(84, "SOULS", nM ? "PRACTICE" : null, "#808080");
  if (!nM) {
    let QU = n7("spr_heartsmall", 0, 1.2, 0, false);
    let Qw = Math.max(0, nm.lives);
    if (QU && Qw <= 7) {
      for (let Qb = 0; Qb < Qw; Qb++) {
        nu.drawImage(QU.cv, nZ - 12 - Qb * 14, 86, QU.w, QU.h);
      }
    } else if (QU) {
      nu.drawImage(QU.cv, nZ - 40, 86, QU.w, QU.h);
      nJ(nE, nZ, 84, "x" + Qw, "#ffffff", "fnt_main", "right");
    }
  }
  Q0(106, "SPELLS", null);
  let Q1 = Math.max(0, nm.bombs);
  if (Q1 <= 7) {
    for (let Qd = 0; Qd < Q1; Qd++) {
      nC(nE, nL.partner, nZ - 7 - Qd * 15, 114, 1);
    }
  } else {
    nC(nE, nL.partner, nZ - 34, 114, 1);
    nJ(nE, nZ, 106, "x" + Q1, "#ffffff", "fnt_main", "right");
  }
  Q0(128, "GRAZE", String(nm.graze));
  nJ(nE, nS, 150, "TP", "#ffa040", "fnt_main");
  let Q3 = nS + 28;
  let Q4 = 154;
  let Q5 = nZ - 40 - Q3;
  let Q6 = 9;
  nu.fillStyle = "#800000";
  nu.fillRect(Q3, Q4, Q5, Q6);
  nu.fillStyle = nm.tp >= 100 ? "#ffff00" : "#ffa040";
  nu.fillRect(Q3, Q4, Q5 * Math.min(1, nm.tp / 100), Q6);
  nu.strokeStyle = "#ffffff";
  nu.lineWidth = 1;
  nu.strokeRect(Q3 - 0.5, Q4 - 0.5, Q5 + 1, Q6 + 1);
  nJ(nE, nZ, 150, Math.floor(nm.tp) + "%", "#ffa040", "fnt_main", "right");
  let Q7 = 436;
  let Q8 = 174;
  let Q9 = 636;
  let QO = 300;
  let Qn = nS + 14;
  let QQ = nZ - 12;
  nu.fillStyle = "#000000";
  nu.fillRect(Q7 + 6, Q8 + 6, Q9 - Q7 - 12, QO - Q8 - 12);
  nn(nE, Q7, Q8, Q9, QO);
  nH(nE, nL.partner, Qn + 12, Q8 + 30, 1);
  if (nN.plate) {
    nE.draw_sprite_ext(nN.plate, 0, Qn + 34, Q8 + 24, 1, 1, 0, nj, 1);
  } else {
    nJ(nE, Qn + 34, Q8 + 22, nN.name, nj, "fnt_main");
  }
  let QB = nm.focusT >= 4 ? 1 : 0;
  nJ(nE, Qn, Q8 + 46, "SHOT", "#808080", "fnt_main");
  nJ(nE, QQ, Q8 + 46, nN.shot[QB], QB ? "#ffff00" : "#ffffff", "fnt_main", "right");
  nJ(nE, Qn, Q8 + 68, "POWER", "#808080", "fnt_main");
  let QG = Qn + 52;
  let QV = QQ - 40 - QG;
  let QT = Q8 + 72;
  nu.fillStyle = "#800000";
  nu.fillRect(QG, QT, QV, 9);
  nu.fillStyle = nm.power >= 4 ? "#ffff00" : nj;
  nu.fillRect(QG, QT, Math.round(QV * Math.min(1, nm.power / 4)), 9);
  for (let QW = 1; QW < 4; QW++) {
    nu.fillStyle = "#000000";
    nu.fillRect(QG + Math.round((QV * QW) / 4), QT, 1, 9);
  }
  nJ(
    nE,
    QQ,
    Q8 + 68,
    nm.power >= 4 ? "MAX" : nm.power.toFixed(2),
    nm.power >= 4 ? "#ffff00" : "#ffffff",
    "fnt_main",
    "right",
  );
  nC(nE, nL.partner, Qn + 6, Q8 + 98, 1);
  nJ(nE, Qn + 20, Q8 + 90, nN.spell, "#c0c0c0", "fnt_main");
  if (ng.touch) {
    let Qh = nR.touch;
    for (let Qz = 0; Qz < 2; Qz++) {
      let Ql = nq[Qz];
      let QX = nv[Qz];
      let QY = Qh[Ql];
      let Qf = !!ng.touchHeld && !!ng.touchHeld[Ql];
      let QK = QY.x + 2;
      let QP = QY.y + 2;
      let QI = QY.x + QY.w - 2;
      let Qr = QY.y + QY.h - 2;
      let QR = (QK + QI) / 2;
      let Qx = QP + (Qr - QP) * 0.42 - (Qf ? 3 : 0);
      nu.fillStyle = "#000000";
      nu.fillRect(QK + 6, QP + 6, QI - QK - 12, Qr - QP - 12);
      nn(nE, QK, QP, QI, Qr);
      if (Ql === "focus") {
        let Qe = n7("spr_yellowheart", 0, 1.6, 0, true);
        if (Qe) {
          nu.save();
          nu.globalAlpha = Qf ? 1 : 0.8;
          nu.translate(QR, Qx);
          nu.rotate(-Math.PI / 2);
          nu.drawImage(Qe.cv, -Qe.ox, -Qe.oy, Qe.w, Qe.h);
          nu.restore();
        }
        nu.fillStyle = "#ff2020";
        nu.beginPath();
        nu.arc(QR, Qx, 4.5, 0, OH);
        nu.fill();
        nu.fillStyle = "#ffffff";
        nu.beginPath();
        nu.arc(QR, Qx, 3, 0, OH);
        nu.fill();
      } else {
        nC(nE, nL.partner, QR, Qx, 2.4, Qf ? 1 : nm.bombs > 0 ? 0.85 : 0.35);
        nJ(
          nE,
          QR,
          Qx + 24,
          "x" + nm.bombs,
          nm.bombs > 0 ? "#ffffff" : "#606060",
          "fnt_main",
          "center",
        );
      }
      nJ(nE, QR, Qr - 44, QX, Qf ? "#ffff00" : "#ffffff", "fnt_main", "center");
    }
    let Qc = Qh.pause;
    nu.fillStyle = "#000000";
    nu.fillRect(Qc.x + Qc.w / 2 - 10, Qc.y + 8, 22, Qc.h - 14);
    nu.fillStyle = "#ffffff";
    nu.fillRect(Qc.x + Qc.w / 2 - 8, Qc.y + 10, 5, Qc.h - 20);
    nu.fillRect(Qc.x + Qc.w / 2 + 3, Qc.y + 10, 5, Qc.h - 20);
  } else {
    let QC = nN.idle;
    nE.draw_sprite_ext(
      QC[0],
      ((ng.time / 10) | 0) % QC[1],
      nS + 50,
      330,
      QC[2],
      QC[2],
      0,
      c.white,
      1,
    );
    if (ng.points !== undefined && ng.points !== null) {
      nx(nE, "spr_sparestar", 0, nS + 8, 456, 0.8);
      nJ(nE, nS + 20, 448, "POINTS", "#808080", "fnt_main");
      nJ(nE, nZ, 448, String(ng.points), "#ffff00", "fnt_main", "right");
    }
  }
}
l(nF, "drawPanel");
function nD(nu, nE, nL, ng) {
  let nm = nu.ctx;
  ng.M = nm.getTransform();
  let nS = 0;
  let nZ = 0;
  if (nE.shakeT > 0) {
    let nM = nE.shakeAmp * (nE.shakeT / (nE.shakeMax || 1));
    nS = (Math.random() * 2 - 1) * nM;
    nZ = (Math.random() * 2 - 1) * nM;
  }
  n3 = n4() + n1;
  let nN = ng.M;
  nm.save();
  try {
    nm.beginPath();
    nm.rect(O8.x, O8.y, O8.w, O8.h);
    nm.clip();
    if (nS || nZ) {
      nm.translate(nS, nZ);
      ng.M = nm.getTransform();
    }
    nB(nm, nu, nE, ng);
    nw(nm, nE, nL);
    nW(nm, nu, nE, nL, ng);
    nY(nm, nu, nE, nL, ng);
    nl(nm, nE, nL, ng);
    nU(nm, nE, ng);
    nG(nm, nE, nL, ng);
    nb(nm, nu, nE, nL, ng);
    nd(nm, nu, nE);
    nX(nm, nu, nE, nL, ng);
    if (nE.flashT > 0) {
      nm.globalAlpha = (nE.flashT * 0.55) / nE.flashMax;
      nm.fillStyle = Od[nE.flashCol] || "#ffffff";
      nm.fillRect(O8.x - 10, O8.y - 10, O8.w + 20, O8.h + 20);
      nm.globalAlpha = 1;
    }
    if (nE.P.alive && nE.P.y < O9 + 30 && nE.P.y > O9 - 30) {
      nm.globalAlpha = 0.2;
      nm.fillStyle = "#ffffff";
      nm.fillRect(O8.x, O9, O8.w, 1);
      nm.globalAlpha = 1;
    }
    if (!ng.preview) {
      nI(nm, nu, nE, ng);
      nf(nm, nu, nE, ng);
    }
  } finally {
    nm.setLineDash(nT);
    nm.globalAlpha = 1;
    nm.restore();
    ng.M = nN;
  }
  if (ng.preview) {
    if (nu.resetDrawState) {
      nu.resetDrawState();
    }
    return;
  }
  nF(nm, nu, nE, ng);
  let nj = nE.boss;
  if (nj.def && nj.show && !(nj.dying > 0)) {
    nm.fillStyle = "#ff3030";
    nm.beginPath();
    nm.moveTo(nj.x - 6, O8.y2 + 12);
    nm.lineTo(nj.x + 6, O8.y2 + 12);
    nm.lineTo(nj.x, O8.y2 + 4);
    nm.fill();
  }
  if (nu.resetDrawState) {
    nu.resetDrawState();
  }
}
l(nD, "drawSim");
var na = 4;
function ny(nu, nE, nL) {
  let ng;
  if (nE.note) {
    nJ(nu, O8.cx, na, nE.note, "#ffff00", "fnt_small", "center");
    return;
  }
  if (nE.auto) {
    let nN = ((nL.time / 20) | 0) & 1;
    nJ(
      nu,
      O8.x + 2,
      na,
      nE.watch ? "WATCHING" : "AUTOPLAY",
      nN ? "#ffff00" : "#c0c0c0",
      "fnt_small",
    );
    ng =
      nE.mode === "touch"
        ? [["II", "then TAKE OVER"]]
        : nE.mode === "pad"
          ? [[(nE.pad && nE.pad.pause) || "START", "then TAKE OVER"]]
          : [
              ["P", "take over"],
              ["ESC", "pause"],
            ];
    no(nu, ng);
    return;
  }
  let nm = nE.tut ? "skip" : "pause";
  if (nE.mode === "touch") {
    ng = [
      ["DRAG", "move"],
      ["FINGER DOWN", "shoot"],
      ["2ND FINGER", "focus"],
      ["II", nm],
    ];
  } else if (nE.mode === "pad") {
    let nj = nE.pad || {};
    ng = [
      ["STICK", "move"],
      [nj.shoot || "A", "shoot"],
      [nj.focus || "B", "focus"],
      [nj.spell || "Y", "spell"],
      [nj.pause || "START", nm],
    ];
  } else {
    ng = [
      ["ARROWS", "move"],
      ["Z", "shoot"],
      ["SHIFT", "focus"],
      ["C", "spell"],
      ["ESC", nm],
    ];
    if (!nE.tut) {
      ng.push(["P", "auto"]);
    }
  }
  let nS = 0;
  for (let [nM, Q0] of ng) {
    nS += nO(nu, nM, "fnt_small") + 4 + nO(nu, Q0, "fnt_small") + 12;
  }
  let nZ = O8.cx - (nS - 12) / 2;
  for (let [Q1, Q3] of ng) {
    nJ(nu, nZ, na, Q1, "#ffff00", "fnt_small");
    nZ += nO(nu, Q1, "fnt_small") + 4;
    nJ(nu, nZ, na, Q3, "#808080", "fnt_small");
    nZ += nO(nu, Q3, "fnt_small") + 12;
  }
}
l(ny, "drawKeyStrip");
function no(nu, nE) {
  let nL = O8.x2 - 2;
  for (let ng = nE.length - 1; ng >= 0; ng--) {
    let [nm, nS] = nE[ng];
    nJ(nu, nL, na, nS, "#808080", "fnt_small", "right");
    nL -= nO(nu, nS, "fnt_small") + 4;
    nJ(nu, nL, na, nm, "#ffff00", "fnt_small", "right");
    nL -= nO(nu, nm, "fnt_small") + 12;
  }
}
l(no, "stripRight");
function nk(nu, nE, nL, ng) {
  let nm = nu.ctx;
  let nS = nL.P;
  if (!nS.alive) {
    return;
  }
  let nZ = nE.px.length - 1;
  let nN = nE.px[0];
  let nj = nE.py[0];
  let nM = nE.px[nZ];
  let Q0 = nE.py[nZ];
  nm.save();
  nm.beginPath();
  nm.rect(O8.x, O8.y, O8.w, O8.h);
  nm.clip();
  nm.lineCap = "round";
  nm.lineJoin = "round";
  if (Math.hypot(nM - nN, Q0 - nj) < 6) {
    let Q3 = nS.px + (nS.x - nS.px) * ng.a;
    let Q4 = nS.py + (nS.y - nS.py) * ng.a;
    for (let Q5 = 0; Q5 < 2; Q5++) {
      nm.globalAlpha = Q5 ? 0.8 : 0.5;
      nm.strokeStyle = Q5 ? "#ffffff" : "#000000";
      nm.lineWidth = Q5 ? 1.5 : 4;
      nm.beginPath();
      nm.arc(Q3, Q4, 15, 0, OH);
      nm.stroke();
    }
    nm.restore();
    return;
  }
  let Q1 = 1;
  while (Q1 < nZ && Math.hypot(nE.px[Q1] - nN, nE.py[Q1] - nj) < 11) {
    Q1++;
  }
  for (let Q6 = 0; Q6 < 2; Q6++) {
    nm.globalAlpha = Q6 ? 0.85 : 0.55;
    nm.strokeStyle = Q6 ? "#ffffff" : "#000000";
    nm.lineWidth = Q6 ? 1.5 : 4.5;
    nm.beginPath();
    nm.moveTo(nE.px[Q1], nE.py[Q1]);
    for (let Q8 = Q1 + 1; Q8 <= nZ; Q8++) {
      nm.lineTo(nE.px[Q8], nE.py[Q8]);
    }
    nm.stroke();
    let Q7 = Q6 ? 4 : 5.5;
    nm.beginPath();
    nm.moveTo(nM, Q0 - Q7);
    nm.lineTo(nM + Q7, Q0);
    nm.lineTo(nM, Q0 + Q7);
    nm.lineTo(nM - Q7, Q0);
    nm.closePath();
    nm.stroke();
  }
  nm.restore();
}
l(nk, "drawBotPath");
export {
  f as a,
  r as b,
  R as c,
  x as d,
  t as e,
  v as f,
  D as g,
  L as h,
  m as i,
  M as j,
  J0 as k,
  J2 as l,
  J4 as m,
  J5 as n,
  J6 as o,
  J7 as p,
  J8 as q,
  J9 as r,
  Jn as s,
  JQ as t,
  JG as u,
  JV as v,
  JT as w,
  JU as x,
  Jw as y,
  Jh as z,
  Jm as A,
  JZ as B,
  O0 as C,
  O4 as D,
  O6 as E,
  O7 as F,
  O8 as G,
  OO as H,
  OQ as I,
  Ob as J,
  Od as K,
  OW as L,
  Oh as M,
  Op as N,
  OR as O,
  OC as P,
  Ov as Q,
  OS as R,
  nJ as S,
  nO as T,
  nn as U,
  nQ as V,
  nh as W,
  nA as X,
  np as Y,
  nR as Z,
  nx as _,
  nH as $,
  nD as aa,
  ny as ba,
  nk as ca,
};
