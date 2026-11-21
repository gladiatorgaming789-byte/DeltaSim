import { Ks as X, Zr as e } from "./c-467NPQE4.js";
import { g as i } from "./c-O6GE5FYX.js";
import {
  Ab as B,
  Ja as p,
  Xa as L,
  _a as t,
  c as R,
  ga as H,
  gb as F,
  hb as D,
  ob as z,
  z as a,
  zb as I,
} from "./c-ZEHUSSXN.js";
import { a as W, e as G, l as o } from "./c-7Q4J33FN.js";
o();
function K(U) {
  if (!U || U.__freshMusic) {
    return;
  }
  U.__freshMusic = true;
  let m1 = U.prototype;
  for (let m2 of Object.getOwnPropertyNames(m1)) {
    if (m2 === "constructor") {
      continue;
    }
    let m3 = Object.getOwnPropertyDescriptor(m1, m2);
    if (!m3 || typeof m3.value != "function") {
      continue;
    }
    let m4 = m3.value;
    let m5 = function (...m6) {
      L.depth++;
      try {
        return m4.apply(this, m6);
      } finally {
        L.depth--;
      }
    };
    m5.inner = m4;
    m1[m2] = m5;
  }
}
W(K, "freshMusicEvents");
K(e);
var h = null;
function r(P) {
  if (!P || P.__silhouette) {
    return;
  }
  P.__silhouette = true;
  let Z = P.prototype.draw;
  let U = function (N) {
    let m0 = z.first("obj_rhythmgame");
    let m1 = N && N.ctx;
    if (!a(this.silhouette) || !m0 || !m1 || typeof m1.getTransform != "function") {
      return Z.call(this, N);
    }
    let m2 = m0.y + 396;
    let m3 = () => {
      m1.beginPath();
      m1.rect(-100000, -100000, 200000, m2 + 100000);
      m1.clip();
    };
    m1.save();
    m3();
    this.silhouette = 0;
    try {
      Z.call(this, N);
    } finally {
      this.silhouette = 1;
      m1.restore();
    }
    let m4 = this.name === "susie" ? -2 : this.name === "ralsei" ? 2 : 0;
    let m5 = 4;
    let m6 = (h ||= document.createElement("canvas"));
    if (m6.width !== m1.canvas.width || m6.height !== m1.canvas.height) {
      m6.width = m1.canvas.width;
      m6.height = m1.canvas.height;
    }
    let m7 = m6.getContext("2d");
    if (!m7) {
      return;
    }
    m7.setTransform(1, 0, 0, 1, 0, 0);
    m7.clearRect(0, 0, m6.width, m6.height);
    m7.imageSmoothingEnabled = false;
    m7.setTransform(m1.getTransform());
    let m8 = N.fog;
    let m9 = N.alpha;
    N.ctx = m7;
    N.fog = R.black;
    N.alpha = 1;
    try {
      N.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, 2, 2, 0, R.white, 1);
      m7.globalCompositeOperation = "destination-in";
      N.draw_sprite_ext(
        this.sprite_index,
        this.image_index,
        this.x + m4,
        this.y + m5,
        2,
        2,
        0,
        R.white,
        1,
      );
    } finally {
      m7.globalCompositeOperation = "source-over";
      N.ctx = m1;
      N.fog = m8;
      N.alpha = m9;
    }
    m1.save();
    m3();
    m1.setTransform(1, 0, 0, 1, 0, 0);
    m1.globalAlpha = 0.9;
    m1.drawImage(m6, 0, 0);
    m1.restore();
  };
  U.inner = Z;
  P.prototype.draw = U;
}
W(r, "performerSilhouette");
r(X);
var V = class mm extends F {
  create() {
    this.depth = 200000;
    this.started = 0;
    this.buf = 4;
    t();
    if (i.band_difficulty === undefined) {
      i.band_difficulty = 0;
    }
    z.with("obj_heroparent", (s) => {
      s.visible = false;
    });
    let P = I(0, 0, e);
    P.replayversion = false;
    P.hardmode = i.band_difficulty === 1 ? 1 : 0;
    P.song_id = 0;
    P.freeplay = -2;
    this.rg = P;
  }
  step() {
    z.with("obj_heroparent", (s) => {
      s.visible = false;
    });
    if (this.buf > 0) {
      this.buf--;
      return;
    }
    let P = this.rg;
    if (!!P && !P.destroyed && !!B(P)) {
      if (this.started && P.song_done) {
        this.doneT = (this.doneT || 0) + 1;
        if (this.doneT < 90) {
          return;
        }
        this.doneT = 0;
        this.started = 0;
        this.buf = 4;
        let s = P.song_id;
        let Z = P.hardmode;
        try {
          P.event_user(1);
        } catch (U) {
          console.warn("rhythm launcher event_user(1)", U);
        }
        t();
        i.batmusic = [null, null];
        P.freeplay = -2;
        P.song_id = s;
        P.hardmode = Z;
        return;
      }
      if (!this.started) {
        if (P.freeplay < 0) {
          if (H()) {
            this.started = 1;
            t();
            i.batmusic = [null, null];
            p("snd_select");
            P.replayversion = false;
            P.freeplay = 0;
            try {
              P.event_user(0);
            } catch (N) {
              console.warn("rhythm launcher event_user(0)", N);
            }
          }
          return;
        }
        this.started = 1;
      }
    }
  }
};
W(V, "obj_rhythmgame_launcher");
G(V, "kinds", D("obj_rhythmgame_launcher", F));
var w = V;
function Y(P) {
  if (P) {
    return [
      {
        ...P,
        id: "ch3rhythm",
        name: "Rhythm Game (Track Select)",
        area: "TV World",
        desc: "The band's own game.#All seven songs, and Hard.#Up/Down picks, Left/Right is Hard.",
        generated: false,
        encounterno: 0,
        custom: true,
        customTag: "MINIGAME",
        timedMinigame: true,
        minigameOnly: true,
        standaloneMinigame: true,
        glow: "aqua",
        monsters: [],
        music: "",
        background: () => {
          I(0, 0, w);
        },
      },
    ];
  } else {
    return [];
  }
}
W(Y, "buildRhythmFights");
export { K as a, r as b, w as c, Y as d };
