import { xa as Q } from "./c-ZEHUSSXN.js";
import { a, i, l } from "./c-7Q4J33FN.js";
l();
var t = a(() => {
  try {
    return (i.DR && i.DR.cfg) || {};
  } catch {
    return {};
  }
}, "cfg");
var s = a(() => t().audio !== false, "audioAllowed");
var Y = a(() => Math.max(0, Math.min(1, t().sfxvol ?? 1)), "sfxVol");
var o = a(() => Math.max(0, Math.min(1, t().musicvol ?? 0.6)), "musicVol");
var L = null;
var I = null;
function F() {
  if (L) {
    return L;
  }
  try {
    let zz = window.AudioContext || window.webkitAudioContext;
    if (!zz) {
      return null;
    }
    L = new zz({
      latencyHint: "interactive",
    });
    I = L.createGain();
    I.connect(L.destination);
  } catch {
    L = null;
  }
  return L;
}
a(F, "ctx");
function e() {
  let zz = F();
  if (zz && zz.state === "suspended") {
    try {
      zz.resume();
    } catch {}
  }
}
a(e, "unlock");
if (typeof window !== "undefined" && window.addEventListener) {
  window.addEventListener("keydown", e, true);
  window.addEventListener("pointerdown", e, true);
}
var n = a(() => {
  try {
    if (navigator.userActivation) {
      return navigator.userActivation.hasBeenActive;
    } else {
      return true;
    }
  } catch {
    return true;
  }
}, "gestured");
var X = null;
function N(zz) {
  X = zz;
}
a(N, "setIntroTable");
function H(zz) {
  if (zz.startsWith("assets/")) {
    return zz;
  }
  if (/\.(ogg|wav)$/.test(zz) && !zz.includes("/")) {
    return "assets/" + zz;
  }
  if (zz.includes("/")) {
    let zq = X && X.sounds && X.sounds[zz];
    if (zq) {
      return "assets/intro/" + zq;
    } else {
      return null;
    }
  }
  let zC = Q[zz];
  if (zC && zC.src) {
    return zC.src;
  } else {
    return null;
  }
}
a(H, "urlFor");
var Z = new Map();
function D(zz) {
  let zC = H(zz);
  if (!zC) {
    return Promise.resolve(null);
  }
  let zq = Z.get(zC);
  if (zq !== undefined) {
    if (zq instanceof Promise) {
      return zq;
    } else {
      return Promise.resolve(zq);
    }
  }
  let zp = F();
  if (!zp) {
    return Promise.resolve(null);
  }
  let zJ = fetch(zC)
    .then((zf) => (zf.ok ? zf.arrayBuffer() : null))
    .then((zf) => (zf ? new Promise((zk) => zp.decodeAudioData(zf, zk, () => zk(null))) : null))
    .then((zf) => {
      Z.set(zC, zf);
      return zf;
    })
    .catch(() => {
      Z.set(zC, null);
      return null;
    });
  Z.set(zC, zJ);
  return zJ;
}
a(D, "load");
function r(zz) {
  for (let zC of zz) {
    D(zC);
  }
}
a(r, "preload");
var z0 = {
  stop() {},
  fade() {},
  get playing() {
    return false;
  },
  setRate() {},
};
var z1 = new Set();
function z2(zz, zC = {}) {
  if (!s()) {
    return z0;
  }
  let zq = F();
  if (!zq) {
    return z0;
  }
  let zp = H(zz);
  if (!zp) {
    return z0;
  }
  let zJ = Z.get(zp);
  let zf = {
    src: null,
    gain: null,
    stopped: false,
    ended: false,
    stop() {
      this.stopped = true;
      z1.delete(this);
      try {
        if (this.src) {
          this.src.stop();
        }
      } catch {}
    },
    fade(zE, zu) {
      if (!this.gain) {
        return;
      }
      let zc = zq.currentTime;
      try {
        this.gain.gain.cancelScheduledValues(zc);
        this.gain.gain.setValueAtTime(this.gain.gain.value, zc);
        this.gain.gain.linearRampToValueAtTime(Math.max(0, zE), zc + Math.max(1, zu) / 30);
      } catch {}
    },
    setRate(zE) {
      try {
        if (this.src) {
          this.src.playbackRate.value = zE;
        }
      } catch {}
    },
    get playing() {
      return !!this.src && !this.stopped && !this.ended;
    },
  };
  let zk = (zE) => {
    if (!!zE && !zf.stopped) {
      try {
        let zu = zq.createBufferSource();
        zu.buffer = zE;
        zu.loop = !!zC.loop;
        zu.playbackRate.value = zC.pitch || 1;
        let zc = zq.createGain();
        zc.gain.value = (zC.vol ?? 1) * (zC.music ? o() : Y());
        zu.connect(zc);
        zc.connect(I);
        zu.onended = () => {
          zf.ended = true;
          z1.delete(zf);
        };
        zu.start(zq.currentTime + Math.max(0, (zC.delay || 0) / 30));
        zf.src = zu;
        zf.gain = zc;
        z1.add(zf);
      } catch {}
    }
  };
  if (zJ && !(zJ instanceof Promise)) {
    zk(zJ);
  } else {
    let zE = performance.now();
    D(zz).then((zu) => {
      if (performance.now() - zE < (zC.lateOk ?? 400)) {
        zk(zu);
      }
    });
  }
  return zf;
}
a(z2, "sfx");
var z3 = new Map();
function z4(zz) {
  if (zz.startsWith("assets/") || zz.includes("/")) {
    return H(zz);
  } else {
    return "assets/" + zz + (zz.endsWith(".ogg") || zz.endsWith(".wav") ? "" : ".ogg");
  }
}
a(z4, "musicUrl");
function z5(zz) {
  let zC = z4(zz);
  if (!!zC && !z3.has(zC)) {
    try {
      let zq = new Audio(zC);
      zq.preload = "auto";
      zq.load();
      z3.set(zC, zq);
    } catch {}
  }
}
a(z5, "warmMusic");
function z6(zz, { loop: zC = true, pitch: zq = 1 } = {}) {
  let zp = z4(zz);
  if (!zp) {
    return null;
  }
  let zJ = z3.get(zp);
  if (zJ && !zJ.paused) {
    zJ = null;
  }
  try {
    if (!zJ) {
      zJ = new Audio(zp);
      z3.set(zp, zJ);
    }
    zJ.loop = zC;
    zJ.volume = 0;
    try {
      zJ.preservesPitch = false;
    } catch {}
    zJ.playbackRate = zq;
    zJ.currentTime = 0;
    return zJ;
  } catch {
    return null;
  }
}
a(z6, "musicElement");
var z7 = null;
var z8 = class zR {
  constructor(zz = 10) {
    this.tracks = new Map();
    this.want = null;
    this.ticks = zz;
    this.muted = false;
  }
  set(zz, zC = 1, zq = {}) {
    this.want = zz
      ? {
          name: zz,
          level: zC,
          loop: zq.loop !== false,
          pitch: zq.pitch || 1,
          from: zq.from || 0,
        }
      : null;
  }
  step() {
    let zz = s() && (n() || z7 !== false) && !this.muted ? this.want : null;
    if (zz && !this.tracks.has(zz.name)) {
      let zq = z6(zz.name, {
        loop: zz.loop,
        pitch: zz.pitch,
      });
      if (zq) {
        try {
          if (zz.from) {
            zq.currentTime = zz.from;
          }
        } catch {}
        let zp = !n();
        let zJ = zz.name;
        let zf = zq.play();
        if (zf && zf.then) {
          zf.then(
            () => {
              if (zp) {
                z7 = true;
              }
            },
            (zk) => {
              if (zp && zk && zk.name === "NotAllowedError") {
                z7 = false;
                if (this.tracks.get(zJ) === zq) {
                  this.tracks.delete(zJ);
                }
              }
            },
          );
        }
        this.tracks.set(zJ, zq);
      }
    }
    let zC = o();
    for (let [zk, zE] of this.tracks) {
      let zu = zz && zk === zz.name ? zz.level * zC : 0;
      let zc = Math.max(0.02, ((zz ? zz.level : 1) * zC) / this.ticks);
      let zG = zE.volume < zu ? Math.min(zu, zE.volume + zc) : Math.max(zu, zE.volume - zc);
      try {
        zE.volume = Math.max(0, Math.min(1, zG));
      } catch {}
      if (zu === 0 && zG <= 0) {
        try {
          zE.pause();
        } catch {}
        this.tracks.delete(zk);
      }
    }
  }
  current() {
    return (this.want && this.tracks.get(this.want.name)) || null;
  }
  stop() {
    for (let zz of this.tracks.values()) {
      try {
        zz.pause();
      } catch {}
    }
    this.tracks.clear();
    this.want = null;
  }
};
a(z8, "MusicMixer");
var z9 = z8;
export { s as a, o as b, n as c, N as d, r as e, z2 as f, z5 as g, z6 as h, z9 as i };
