import { a as t, l as o } from "./c-7Q4J33FN.js";
o();
var a = null;
var Q = null;
var u = false;
var n = [];
var b = {
  fight: null,
  seed: 0,
  frames: 0,
};
function V() {
  let S8 = new Proxy(
    {},
    {
      get(SS, SB) {
        if (SB === "canvas") {
          return {
            width: 640,
            height: 480,
          };
        } else if (SB === "measureText") {
          return () => ({
            width: 0,
          });
        } else if (SB === "getImageData") {
          return () => ({
            data: new Uint8ClampedArray(4),
          });
        } else if (SB === "createPattern" || SB === "createLinearGradient") {
          return () => null;
        } else {
          return () => {};
        }
      },
      set() {
        return true;
      },
    },
  );
  let S9 = () => S8;
  self.window = self;
  self.document = {
    createElement: () => ({
      getContext: S9,
      width: 0,
      height: 0,
      style: {},
      addEventListener() {},
      removeEventListener() {},
      remove() {},
    }),
    getElementById: () => ({
      getContext: S9,
      focus() {},
      appendChild() {},
      addEventListener() {},
    }),
    addEventListener() {},
    removeEventListener() {},
    body: {
      appendChild() {},
    },
  };
  self.Image = class {};
  self.Audio = class {
    play() {
      return Promise.resolve();
    }
    pause() {}
    cloneNode() {
      return this;
    }
  };
  self.localStorage = {
    getItem: () => null,
    setItem() {},
    removeItem() {},
  };
  self.requestAnimationFrame = () => 0;
}
t(V, "installShims");
async function Z(S8) {
  V();
  let S9 = await S7("./gm.js", import.meta.url);
  for (let [Sa, SQ] of Object.entries(S8.sprites)) {
    S9.Sprites[Sa] = {
      name: Sa,
      ...SQ,
      img: {
        length: SQ.frames,
      },
    };
  }
  for (let [Su, SM] of Object.entries(S8.fonts)) {
    S9.Fonts[Su] = {
      ...SM,
      img: {
        width: 256,
        height: 256,
      },
    };
  }
  let SS = await S7("./globals.js", import.meta.url);
  let SB = await S7("./fights.js", import.meta.url);
  let Sj = await S7("./c-L7YTU57P.js", import.meta.url);
  let Sq = await S7("./battle.js", import.meta.url);
  let Sh = await S7("./collisions.js", import.meta.url);
  let SX = await S7("./snapshot.js", import.meta.url);
  let Sl = await S7("./autoplay.js", import.meta.url);
  let SF = await S7("./beam.js", import.meta.url);
  let Sw = await S7("./fightsetup.js", import.meta.url);
  let SN = await S7("./ut_karma.js", import.meta.url);
  let SJ = await S7("./oracle.js", import.meta.url);
  let SL = await S7("./wiresnap.js", import.meta.url);
  let Sy = null;
  try {
    Sy = (await S7("./c-OBADAJVA.js", import.meta.url)).forceAttackTick;
  } catch {}
  let St = null;
  try {
    St = (await S7("./c-CSB6277O.js", import.meta.url)).guardTick;
  } catch {}
  let SD = null;
  let So = null;
  try {
    let SU = await S7("./c-FCJ6SNIH.js", import.meta.url);
    SD = SU.pinAttack;
    So = SU.findAttack;
  } catch {}
  a = {
    gm: S9,
    ...SS,
    ...SB,
    ...Sj,
    ...Sq,
    COLLISIONS: Sh.COLLISIONS,
    ...SX,
    AP: Sl,
    ...SF,
    ...Sw,
    karmaStep: SN.karmaStep,
    oraclePlan: SJ.oraclePlan,
    oracleStats: SJ.oracleStats,
    oracleCovers: SJ.oracleCovers,
    applyWorld: SL.applyWorld,
    loadClassModules: SL.loadClassModules,
    forceAttackTick: Sy,
    pinAttack: SD,
    findAttack: So,
    guardTick: St,
    deepDump: SL.deepDump,
  };
  a.GFX = SX.nullGfx(S9.Gfx);
  return {
    obs: true,
  };
}
t(Z, "boot");
function g() {
  let { gm: S8, G: S9 } = a;
  let SS = S8.World.first("obj_heart") || S8.World.first("obj_purpleheart");
  let SB =
    typeof S9.hp == "number"
      ? S9.hp
      : Array.isArray(S9.hp)
        ? (S9.hp[1] || 0) + (S9.hp[2] || 0) + (S9.hp[3] || 0)
        : 0;
  return (
    (SS ? (SS.x | 0) + "," + (SS.y | 0) : "none") +
    "|" +
    SB +
    "|" +
    S8.World.list.length +
    "|" +
    (S9.mnfight | 0)
  );
}
t(g, "signature");
var v = {};
function I(S8) {
  if (S8) {
    v = S8;
    a.G.godmode = !!S8.god;
    a.G.forceAttack = S8.force;
  }
}
t(I, "applyEnv");
function d() {
  let { G: S8, gm: S9 } = a;
  if (v.pin && a.pinAttack) {
    let SS = a.FIGHTS.find((Sj) => Sj.id === b.fight);
    let SB = SS ? a.findAttack(SS, v.pin) : null;
    if (SB) {
      try {
        a.pinAttack(S9.World, SB);
      } catch {}
    }
  }
  if (v.refill) {
    if (typeof S8.hp == "number") {
      S8.hp = S8.maxhp || 20;
    } else if (S8.hp && S8.maxhp) {
      let Sj = Array.isArray(S8.char) ? S8.char : [1, 2, 3];
      for (let Sq of Sj) {
        if (Sq && S8.maxhp[Sq]) {
          S8.hp[Sq] = S8.maxhp[Sq];
        }
      }
    }
    if (typeof S8.karma == "number") {
      S8.karma = 0;
    }
  }
}
t(d, "envBefore");
function Y() {
  let { G: S8 } = a;
  if (v.skip) {
    try {
      a.skipDialogue();
    } catch {}
    if (Array.isArray(S8.monsterhp) && Array.isArray(S8.monstermaxhp)) {
      for (let S9 = 0; S9 < 3; S9++) {
        if ((!S8.monster || S8.monster[S9]) && S8.monstermaxhp[S9] > 0) {
          S8.monsterhp[S9] = S8.monstermaxhp[S9];
        }
      }
    }
  }
}
t(Y, "envAfter");
var s = ["b1", "b2", "b3", "left", "right", "up", "down"];
function z(S8) {
  let S9 = a.gm.Input;
  return () => {
    for (let SS = 0; SS < s.length; SS++) {
      let SB = s[SS];
      S9.held[SB] = !!(S8 & (1 << SS));
      S9.pressed[SB] = !!(S8 & (1 << (SS + 8)));
      S9.released[SB] = !!(S8 & (1 << (SS + 16)));
    }
  };
}
t(z, "manualInput");
function f(S8) {
  let S9 = 0;
  for (let SS = 0; SS < s.length; SS++) {
    let SB = s[SS];
    if (S8.held[SB]) {
      S9 |= 1 << SS;
    }
    if (S8.pressed[SB]) {
      S9 |= 1 << (SS + 8);
    }
    if (S8.released[SB]) {
      S9 |= 1 << (SS + 16);
    }
  }
  return S9 >>> 0;
}
t(f, "inputBits");
function C(S8, S9, SS) {
  let { gm: SB, G: Sj, AP: Sq } = a;
  let Sh = SB.Input;
  let SX = a.snapshot();
  let Sl = Sq.saveAutoplayState();
  let SF = Sh.synthetic;
  let Sw = {
    ...v,
  };
  let SN = [];
  let SJ = null;
  if (Sq.setRolloutBudget) {
    Sq.setRolloutBudget(SS || 0);
  }
  try {
    for (let SL = 0; SL < S8; SL++) {
      let Sy = SB.World.first("obj_heart") || SB.World.first("obj_purpleheart");
      if (!Sy || (!S9 && a.oracleCovers(Sy))) {
        break;
      }
      let St = Sj.mnfight;
      d();
      Sq.autoplayUI();
      Sq.autoplayStep(null, Sy);
      let SD = 0;
      let So = Sh.synthetic;
      Sh.synthetic = (Sa) => {
        if (So) {
          So(Sa);
        }
        SD = f(Sh);
      };
      try {
        A();
      } finally {
        Sh.synthetic = So;
      }
      Y();
      SN.push(SD);
      if (Sj.battleover || Sj.mnfight !== St) {
        break;
      }
    }
    if (SN.length) {
      SJ = Sq.saveAutoplayState();
    }
  } finally {
    a.restore(SX);
    Sq.loadAutoplayState(Sl);
    Sh.synthetic = SF;
    v = Sw;
    if (Sq.setRolloutBudget) {
      Sq.setRolloutBudget(0);
    }
  }
  return {
    bits: SN,
    ap: SJ,
  };
}
t(C, "handPlan");
function e(S8) {
  let { gm: S9, G: SS, COLLISIONS: SB, GFX: Sj, AP: Sq } = a;
  let Sh = S9.Input;
  I(S8.env);
  d();
  if (S8.w !== undefined) {
    Sh.synthetic = z(S8.w >>> 0);
    try {
      A();
    } finally {
      Sh.synthetic = null;
    }
    if (S8.ap) {
      Sq.loadAutoplayState(S8.ap);
    }
    Y();
    if (u) {
      n.push({
        f: b.frames + 1,
        d: a.deepDump(),
      });
    }
    return;
  }
  let SX = S9.World.first("obj_heart") || S9.World.first("obj_purpleheart");
  Sq.autoplayUI();
  if (S8.a) {
    Sq.applyPlanKeys(S8.k, S8.e);
  } else {
    Sq.autoplayStep(null, SX || null);
  }
  A();
  Y();
  if (u) {
    n.push({
      f: b.frames + 1,
      d: a.deepDump(),
    });
  }
}
t(e, "stepMirror");
function A() {
  let { gm: S8, G: S9, COLLISIONS: SS, GFX: SB } = a;
  if (S8.Sandbox.freetp) {
    S9.tension = S9.maxtension;
  }
  try {
    a.karmaStep();
  } catch {}
  if (S9.godmode) {
    if (typeof S9.hp == "number") {
      S9.hp = S9.maxhp || 20;
    } else {
      for (let Sj = 1; Sj <= 3; Sj++) {
        if (S9.maxhp[Sj]) {
          S9.hp[Sj] = S9.maxhp[Sj];
        }
      }
    }
    S9.karma = 0;
  }
  S9.pressedDebugKeys = null;
  if (a.forceAttackTick) {
    try {
      a.forceAttackTick();
    } catch {}
  }
  try {
    S8.runFrame(SS, SB);
  } catch {}
  if (a.guardTick && b.f) {
    try {
      a.guardTick(b.f, {
        ut: !!a.isUndertale(b.f),
        strict: !!b.cfg && !!b.cfg.guardstrict,
      });
    } catch {}
  }
}
t(A, "frameCore");
async function S0(S8) {
  let S9 = a.FIGHTS.find((SB) => SB.id === S8);
  if (S9 && !a.fightCodeReady(S9)) {
    try {
      await a.loadFightCode(S9);
    } catch {}
  }
  if (S9 && S9.mod) {
    try {
      await (await S7("./c-SX6QB5YB.js", import.meta.url)).loadMod(S9.mod);
    } catch {}
    return;
  }
  let SS = S9 && (S9.pack || S9.chapter);
  if ((!!S9 && !!S9.pack) || (typeof SS == "number" && !(SS < 4))) {
    try {
      await (await S7("./chapterpack.js", import.meta.url)).loadChapterPack(SS);
    } catch {}
  }
}
t(S0, "packReady");
function S1(S8, S9, SS) {
  let {
    G: SB,
    FIGHTS: Sj,
    buildFight: Sq,
    isUndertale: Sh,
    startUndertaleFight: SX,
    applyEncounter: Sl,
    startDeltaruneController: SF,
  } = a;
  let Sw = Sj.find((SN) => SN.id === S8);
  if (Sw) {
    Sq(Sw, {
      seed: S9,
      cfg: SS || {},
    });
    a.AP.resetAutoplayState();
    if (Sh(Sw)) {
      SX(Sw);
    } else {
      Sl(Sw);
      SF(Sw, SS || {});
    }
    SB.autoplay = true;
    v = {};
    b = {
      fight: S8,
      seed: S9,
      frames: 0,
      cfg: SS || {},
      epoch: 0,
      f: Sw,
    };
    return true;
  } else {
    return false;
  }
}
t(S1, "rebuild");
function S2(S8, S9, SS, SB) {
  if (!S1(S8, S9, SS)) {
    return "no fight " + S8;
  }
  let Sj = a.applyWorld(SB);
  return Sj || (SB.ap ? a.AP.loadAutoplayState(SB.ap) : a.AP.resetAutoplayState(), null);
}
t(S2, "rebuildAt");
var S3 = null;
function S4() {
  let { gm: S8 } = a;
  S3 = {
    epoch: b.epoch,
    fight: b.fight,
    frames: b.frames,
    snap: a.snapshot(),
    ap: a.AP.saveAutoplayState(),
    env: {
      ...v,
    },
    music: S8.music_name
      ? {
          name: S8.music_name(),
          pos: S8.music_position(),
        }
      : null,
  };
}
t(S4, "takeCheckpoint");
function S5() {
  let { gm: S8 } = a;
  a.restore(S3.snap);
  a.AP.loadAutoplayState(S3.ap);
  v = {
    ...S3.env,
  };
  if (S3.music && S3.music.name && S8.music_track) {
    let S9 = S8.music_track(S3.music.name);
    if (S9) {
      S8.audio_sound_set_track_position(S9, S3.music.pos);
    }
  }
  b.frames = S3.frames;
}
t(S5, "restoreCheckpoint");
function S6(S8, S9, SS, SB, Sj, Sq, Sh) {
  if (b.fight !== S8 || b.seed !== S9 || b.epoch !== Sj) {
    return false;
  }
  if (Sh) {
    if (!S3 || S3.epoch !== Sj || S3.fight !== S8 || S3.frames !== SS) {
      return false;
    }
    S5();
  }
  if (b.frames !== SS) {
    return false;
  }
  if (Sq === b.frames) {
    S4();
  }
  for (let SX of SB) {
    e(SX);
    b.frames++;
    if (Sq === b.frames) {
      S4();
    }
  }
  return true;
}
t(S6, "advance");
self.onmessage = async (S8) => {
  let S9 = S8.data;
  let SS = (SB) =>
    self.postMessage(
      Object.assign(
        SB,
        {
          epoch: S9.epoch,
          rev: S9.rev,
          spec: !!S9.spec,
          specId: S9.specId,
          hand: !!S9.hand,
        },
        S9.cmd === "advance"
          ? {
              t: "adv",
            }
          : null,
      ),
    );
  try {
    if (S9.cmd === "boot") {
      try {
        await Z(S9.assets);
      } catch (SB) {
        self.postMessage({
          t: "booterr",
          id: S9.id,
          err: String((SB && SB.message) || SB),
        });
        return;
      }
      self.postMessage({
        t: "ready",
        id: S9.id,
      });
      Q = a.loadClassModules().catch(() => {});
      return;
    }
    if (S9.cmd === "plan" || S9.cmd === "advance") {
      let Sj = performance.now();
      if (!a) {
        SS({
          t: "plan",
          id: S9.id,
          epoch: S9.epoch,
          line: null,
          err: "not booted",
        });
        return;
      }
      if (S9.full) {
        await S0(S9.fight);
        if (S9.wire) {
          await a.loadClassModules().catch(() => {});
          let SX = S2(S9.fight, S9.seed, S9.cfg, S9.wire);
          if (SX) {
            b = {
              fight: null,
            };
            SS({
              t: "plan",
              id: S9.id,
              epoch: S9.epoch,
              err: "rebuild at jump: " + SX,
              wireFail: true,
            });
            return;
          }
        } else {
          S1(S9.fight, S9.seed, S9.cfg);
        }
        b.epoch = S9.epoch;
      }
      u = !!S9.deep;
      n = [];
      let Sq = performance.now();
      if (
        !S6(
          S9.fight,
          S9.seed,
          S9.full ? 0 : S9.base,
          S9.delta || [],
          S9.epoch,
          S9.safe,
          !S9.full && S9.rewind,
        )
      ) {
        SS({
          t: "plan",
          id: S9.id,
          epoch: S9.epoch,
          rev: S9.rev,
          need: "full",
          have: b.frames,
        });
        return;
      }
      if (S9.cmd === "advance") {
        SS({
          id: S9.id,
          at: b.frames,
          safe: S3 && S3.epoch === S9.epoch ? S3.frames : -1,
          sig: g(),
          ms: performance.now() - Sj,
        });
        return;
      }
      I(S9.env);
      if (S9.opts && S9.opts.algo === "hand") {
        let Sl = performance.now();
        let { bits: SF, ap: Sw } = C(
          S9.opts.n || 12,
          !!S9.opts.ignoreCover,
          Number(S9.opts.budget) || 0,
        );
        SS({
          t: "plan",
          id: S9.id,
          algo: "hand",
          at: b.frames,
          safe: S3 && S3.epoch === S9.epoch ? S3.frames : -1,
          sig: g(),
          bits: SF,
          ap: Sw,
          ms: performance.now() - Sj,
          prof: {
            full: !!S9.full,
            dl: (S9.delta || []).length,
            adv: Sl - Sq,
            orc: performance.now() - Sl,
            objs: a.gm.World.list.length,
          },
        });
        return;
      }
      if (S9.opts && S9.opts.algo === "oracle") {
        let SN = g();
        let SJ = performance.now();
        let SL = a.oracleStats.frames;
        let Sy = a.oracleStats.plans;
        let St = a.oraclePlan(S9.opts);
        let SD = {
          full: !!S9.full,
          dl: (S9.delta || []).length,
          adv: SJ - Sq,
          pre: Sq - Sj,
          orc: performance.now() - SJ,
          sim: a.oracleStats.frames - SL,
          once: a.oracleStats.plans - Sy,
          objs: a.gm.World.list.length,
        };
        let So = g();
        if (So !== SN) {
          SS({
            t: "plan",
            id: S9.id,
            epoch: S9.epoch,
            rev: S9.rev,
            err: "plan changed the world: " + SN + " -> " + So,
          });
          b = {
            fight: null,
          };
          return;
        }
        SS({
          t: "plan",
          id: S9.id,
          epoch: S9.epoch,
          rev: S9.rev,
          safe: S3 && S3.epoch === S9.epoch ? S3.frames : -1,
          at: b.frames,
          sig: g(),
          algo: "oracle",
          deeps: u ? n : undefined,
          keys: St ? St.keys : null,
          lost: St ? St.hits : 0,
          ms: performance.now() - Sj,
          prof: SD,
        });
        return;
      }
      let Sh = a.beamBest(S9.opts);
      self.postMessage({
        t: "plan",
        id: S9.id,
        epoch: S9.epoch,
        rev: S9.rev,
        safe: S3 && S3.epoch === S9.epoch ? S3.frames : -1,
        at: b.frames,
        sig: g(),
        names: S9.wantNames
          ? a.gm.World.list
              .filter((Sa) => !Sa.destroyed)
              .map((Sa) => Sa.constructor.name)
              .sort()
          : undefined,
        line: Sh ? Sh.line : null,
        lost: Sh ? Sh.lost : 0,
        ms: performance.now() - Sj,
      });
      return;
    }
  } catch (Sa) {
    SS({
      t: "plan",
      id: S9.id,
      epoch: S9.epoch,
      line: null,
      err: String((Sa && Sa.message) || Sa),
    });
  }
};
function S7(S8, S9) {
  var SS = new URL(S8, S9).href;
  var SB = globalThis.__drWarm;
  return (SB ? SB(SS) : Promise.resolve()).then(function () {
    return import(SS).catch(function (Sj) {
      try {
        Sj.reload = true;
        Sj.what = "the game code";
      } catch (Sq) {}
      throw Sj;
    });
  });
}
