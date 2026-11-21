import { a as e, l as a } from "./c-7Q4J33FN.js";
a();
var y = null;
var m = "render";
var S = null;
var P = 640;
var t = 480;
var s = new Map();
var l = new Set();
var d = [];
var f = null;
var n0 = 0;
var n1 = null;
var n2 = null;
var n3 = false;
var n4 = null;
var n5 = (() => {
  let nh = new MessageChannel();
  let nw = [];
  nh.port1.onmessage = () => {
    let nA = nw.shift();
    if (nA) {
      nA();
    }
  };
  return () =>
    new Promise((nA) => {
      nw.push(nA);
      nh.port2.postMessage(0);
    });
})();
var n6 = e(() => performance.now(), "now");
function n7() {
  let nh = () => ({
    style: {
      setProperty() {},
    },
    addEventListener() {},
    removeEventListener() {},
    remove() {},
    appendChild() {},
    setAttribute() {},
    focus() {},
    blur() {},
    classList: {
      add() {},
      remove() {},
      toggle() {},
    },
  });
  let nw = new Proxy(
    {},
    {
      get(np, ns) {
        if (ns === "canvas") {
          return {
            width: 640,
            height: 480,
          };
        } else if (ns === "measureText") {
          return () => ({
            width: 0,
          });
        } else if (ns === "getImageData") {
          return () => ({
            data: new Uint8ClampedArray(4),
          });
        } else if (ns === "createImageData") {
          return (nl, nb) => ({
            data: new Uint8ClampedArray(4),
            width: nl | 0,
            height: nb | 0,
          });
        } else if (ns === "createPattern" || ns === "createLinearGradient") {
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
  n4 = nw;
  let nA =
    m === "scout"
      ? () => ({
          getContext: () => nw,
          width: 0,
          height: 0,
          style: {},
          addEventListener() {},
          removeEventListener() {},
          remove() {},
        })
      : () => {
          let np = new OffscreenCanvas(1, 1);
          np.style = {};
          np.addEventListener = () => {};
          np.removeEventListener = () => {};
          np.remove = () => {};
          return np;
        };
  self.window = self;
  self.document = {
    createElement: (np) => (np === "canvas" ? nA() : nh()),
    getElementById: () => ({
      getContext: () => nA().getContext("2d"),
      focus() {},
      appendChild() {},
      addEventListener() {},
    }),
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener() {},
    removeEventListener() {},
    body: nh(),
    head: nh(),
    documentElement: nh(),
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
    load() {}
  };
  self.localStorage = {
    getItem: () => null,
    setItem() {},
    removeItem() {},
    clear() {},
  };
  self.requestAnimationFrame = () => 0;
}
e(n7, "installShims");
function n8(nh, nw, nA) {
  let np = nh.atlas && nh.atlas[String(nw)];
  return [
    Math.max(nh.w | 0, np ? np[nA ? 3 : 2] | 0 : 0),
    Math.max(nh.h | 0, np ? np[nA ? 4 : 3] | 0 : 0),
  ];
}
e(n8, "frameSize");
function n9(nh, nw, nA) {
  let np = nw.frames | 0;
  let ns = [];
  let nl = (nb) => {
    if (ns[nb]) {
      return ns[nb];
    }
    let [nX, nd] = n8(nw, nb, nA);
    if (m === "scout") {
      return (ns[nb] = {
        width: nX,
        height: nd,
        getContext: () => n4,
      });
    }
    let nk = new OffscreenCanvas(nX, nd);
    if (nX && nd) {
      nk.getContext("2d");
    }
    return (ns[nb] = nk);
  };
  return new Proxy([], {
    get(nb, nX) {
      if (nX === "length") {
        return np;
      }
      if (
        typeof nX == "string" &&
        nX.length < 6 &&
        nX.charCodeAt(0) >= 48 &&
        nX.charCodeAt(0) <= 57
      ) {
        let nd = +nX;
        if (!(nd >= 0) || !(nd < np)) {
          return;
        }
        let nk = s.get(nh);
        if (nk && nd in nk) {
          ns[nd] &&= null;
          return nk[nd] || undefined;
        }
        let nQ = nh + "" + nd;
        if (m === "scout") {
          if (!l.has(nQ)) {
            l.add(nQ);
            d.push(nQ);
          }
        } else if (f) {
          f.add(nQ);
        }
        return nl(nd);
      }
      return Reflect.get(nb, nX);
    },
    has(nb, nX) {
      if (typeof nX == "string" && /^\d+$/.test(nX)) {
        return Number(nX) < np;
      } else {
        return Reflect.has(nb, nX);
      }
    },
  });
}
e(n9, "lazyImg");
function nn(nh, nw) {
  let nA = y.gm.Sprites;
  for (let np of Object.keys(nA)) {
    if (nh && !nh(np)) {
      continue;
    }
    let ns = Object.getOwnPropertyDescriptor(nA, np);
    let nl = ns && ns.value;
    if (nl && typeof nl == "object" && !nl._rv) {
      nl.img = n9(np, nl, nw);
      nl._rv = 1;
    }
  }
}
e(nn, "proxySprites");
async function nv(nh) {
  m = nh.role === "scout" ? "scout" : "render";
  n7();
  let nw = n6();
  let nA = {};
  let np = await nt("./gm.js", import.meta.url);
  nA.gm = Math.round(n6() - nw);
  let ns = new URL(nh.assets, self.location.href);
  let nl = await (await fetch(new URL("data.json", ns))).json();
  nA.data = Math.round(n6() - nw);
  for (let [nE, nf] of Object.entries(nl.sprites)) {
    np.Sprites[nE] = {
      name: nE,
      ...nf,
      img: n9(nE, nf, false),
      _rv: 1,
    };
  }
  let nb = [];
  for (let [v0, v1] of Object.entries(nl.fonts)) {
    if (m === "scout") {
      np.Fonts[v0] = {
        ...v1,
        img: {
          width: 256,
          height: 256,
        },
      };
      continue;
    }
    nb.push(
      (async () => {
        let v2 = null;
        try {
          let v3 = await fetch(new URL(v0 + ".png", ns));
          if (v3.ok) {
            v2 = await createImageBitmap(await v3.blob());
          }
        } catch {
          v2 = null;
        }
        np.Fonts[v0] = {
          img: v2 || {
            width: 0,
            height: 0,
          },
          glyphs: v1.glyphs,
          size: v1.size,
        };
      })(),
    );
  }
  await Promise.all(nb);
  nA.fonts = Math.round(n6() - nw);
  let nX = await nt("./globals.js", import.meta.url);
  let nd = await nt("./fights.js", import.meta.url);
  await nt("./battle.js", import.meta.url);
  await nt("./collisions.js", import.meta.url);
  let nk = await nt("./fightsetup.js", import.meta.url);
  let nQ = await nt("./c-IJFV7PBN.js", import.meta.url);
  try {
    await nt("./c-CSB6277O.js", import.meta.url);
  } catch {}
  y = {
    gm: np,
    G: nX.G,
    FIGHTS: nd.FIGHTS,
    setup: nk,
    RC: nQ,
  };
  nA.engine = Math.round(n6() - nw);
  return {
    webcodecs: typeof VideoEncoder == "function" && typeof VideoFrame == "function",
    offscreen: typeof OffscreenCanvas == "function",
    boot: nA,
  };
}
e(nv, "boot");
async function no(nh) {
  try {
    await (await nt("./c-L7YTU57P.js", import.meta.url)).loadFightCode(nh);
  } catch {}
  let nw = nh && (nh.pack || nh.chapter);
  if ((!!nh && !!nh.pack) || (typeof nw == "number" && !(nw < 4))) {
    try {
      await (await nt("./chapterpack.js", import.meta.url)).loadChapterPack(nw);
    } catch {}
    nn((nA) => nA.endsWith("@ch" + nw), true);
  }
}
e(no, "packFor");
var nB = null;
var nL = -1;
var nj = null;
var nR = null;
var nF = null;
var nr = null;
var nT = null;
var nu = null;
var nY = {
  fade: 0,
};
var nD = 0;
var nC = 0;
function nq() {
  let { gm: nh, RC: nw } = y;
  Object.assign(nh.Sandbox, S.sandbox || {});
  nh.Input.synthetic = null;
  nj = nw.stage(nB.fx, S.d, S.cfg);
  nr = null;
  nY.fade = 0;
  nL = 0;
}
e(nq, "rebuild");
function nV(nh, nw) {
  let nA = y.RC.stepFrame(nB, S.bits, nh, nw);
  if (nA) {
    nC++;
    if (nA < 0 && !nD) {
      nD = nh;
    }
  }
  nL = nh;
}
e(nV, "step");
async function nZ(nh, nw) {
  let { RC: nA } = y;
  if (nL < 0 || nL > nh) {
    nq();
  }
  if (nL < nh) {
    y.gm.setCurG(nj);
    nr = null;
  }
  let np = 0;
  while (nL < nh) {
    let ns = nL + 1;
    nV(ns, nj);
    if (ns >= S.from && (ns - S.from) % S.stride === 0) {
      nA.fadeStep(nY);
    }
    if (++np % 64 === 0 && (nw && nw(ns), await n5(), n3)) {
      return false;
    }
  }
  return true;
}
e(nZ, "seekTo");
var nO = [];
var nN = 0;
var nx = 0;
var nU = class v4 {
  constructor(nh, nw, nA) {
    this._id = nh;
    this._vol = nw;
    this._rate = nA;
    this.paused = true;
    this.ended = true;
    this.loop = false;
    this.duration = 0;
  }
  get volume() {
    return this._vol;
  }
  set volume(nh) {
    let nw = Number(nh);
    if (!!Number.isFinite(nw) && nw !== this._vol) {
      this._vol = nw;
      nO.push(["v", nN, this._id, nw]);
    }
  }
  get playbackRate() {
    return this._rate;
  }
  set playbackRate(nh) {
    let nw = Number(nh);
    if (!!Number.isFinite(nw) && nw !== this._rate) {
      this._rate = nw;
      nO.push(["r", nN, this._id, nw]);
    }
  }
  get currentTime() {
    return 0;
  }
  set currentTime(nh) {
    let nw = Number(nh);
    if (Number.isFinite(nw)) {
      nO.push(["t", nN, this._id, nw]);
    }
  }
  pause() {
    nO.push(["s", nN, this._id]);
  }
  play() {
    nO.push(["u", nN, this._id]);
    return Promise.resolve();
  }
};
e(nU, "TapVoice");
var nK = nU;
function ni() {
  let nh = y.gm;
  nh.AudioTap.sfx = (nw, nA) => {
    let np = nA && typeof nA == "object" ? nA : {};
    let ns = Math.max(0, Math.min(1, (np.volume ?? 1) * (nh.Sandbox.sfxvol ?? 1)));
    let nl = ++nx;
    nO.push(["p", nN, nl, String(nw), nh.CurrentChapter, ns, np.pitch || 1, !!np.loop]);
    return new nK(nl, ns, np.pitch || 1);
  };
  nh.AudioTap.stop = (nw) => {
    if (nw == null) {
      nO.push(["a", nN]);
    } else {
      nO.push(["n", nN, String(nw), nh.CurrentChapter]);
    }
  };
}
e(ni, "tapOn");
var nM = new WeakMap();
var nI = 0;
var ne = new Map();
function nc(nh) {
  let nw = y.gm;
  let nA = new Set();
  for (let np of nw.music_stems()) {
    let ns = nw.music_track(np.name);
    if (!ns) {
      continue;
    }
    let nl = nM.get(ns);
    if (!nl) {
      nl = ++nI;
      nM.set(ns, nl);
    }
    nA.add(nl);
    let nb = Number.isFinite(ns._clock) ? ns._clock : ns.currentTime || 0;
    let nX = {
      clock: nb,
      vol: ns.volume,
      rate: ns.playbackRate || 1,
      paused: !!ns.paused || !!ns.ended,
    };
    let nd = ne.get(nl);
    let nk = nd ? nd.clock + (nd.paused ? 0 : 1 / 30) : null;
    if (
      !nd ||
      Math.abs(nk - nb) > 0.000001 ||
      nd.vol !== nX.vol ||
      nd.rate !== nX.rate ||
      nd.paused !== nX.paused
    ) {
      nO.push(["m", nh, nl, ns.name, nw.CurrentChapter, nb, nX.vol, nX.rate, nX.paused, !!ns.loop]);
    }
    ne.set(nl, nX);
  }
  for (let nQ of ne.keys()) {
    if (!nA.has(nQ)) {
      nO.push(["x", nh, nQ]);
      ne.delete(nQ);
    }
  }
}
e(nc, "sampleMusic");
async function na() {
  let { gm: nh, RC: nw } = y;
  ni();
  nq();
  let nA = S.to;
  let np = n6();
  let ns = null;
  let nl = 0;
  let nb = 0;
  let nX = (nd, nk) => {
    let nQ = d.splice(0);
    let nE = nO;
    nO = [];
    self.postMessage({
      t: "scout",
      upto: nd,
      keys: nQ,
      au: nE,
      drift: nD,
      checks: nC,
      ms: n6() - np,
      final: !!nk,
    });
  };
  while (nL < nA) {
    let nd = nL + 1;
    nN = nd;
    if (nd >= S.from && !ns) {
      ns = nw.takeOver(n4);
    }
    nV(nd, ns || nj);
    if (ns) {
      try {
        nh.presentFrame(ns, 1);
      } catch {}
    }
    nc(nd);
    nb++;
    if (nd < S.from - 1) {
      for (let nk of d) {
        l.delete(nk);
      }
      d.length = 0;
    }
    if (d.length || nd - nl >= 30) {
      nX(nd);
      nl = nd;
    }
    if (nb % 32 === 0 && (await n5(), n3)) {
      return;
    }
  }
  nX(nA, true);
}
e(na, "runScout");
var nW = null;
var ny = null;
var nG = [];
var nH = [];
var nz = {
  step: 0,
  present: 0,
  frame: 0,
  encode: 0,
  wait: 0,
};
function nJ() {
  ny = null;
  let nh = new VideoEncoder({
    output: (nw) => {
      let nA = new Uint8Array(nw.byteLength);
      nw.copyTo(nA);
      nG.push([Math.round((nw.timestamp * 30) / 1000000) + S.from, nw.type === "key" ? 1 : 0, nA]);
      nH.push(nA.buffer);
    },
    error: (nw) => {
      ny = (nw && nw.message) || String(nw);
    },
  });
  nh.configure(S.codec);
  return nh;
}
e(nJ, "newEncoder");
function nm(nh) {
  if (!nG.length && !nh) {
    return;
  }
  let nw = nG;
  let nA = nH;
  nG = [];
  nH = [];
  self.postMessage(
    Object.assign(
      {
        t: "chunks",
        chunks: nw,
      },
      nh || null,
    ),
    nA,
  );
}
e(nm, "flushOut");
async function nS(nh) {
  while (n0 < nh && !n3) {
    await new Promise((nw) => {
      n1 = nw;
    });
  }
}
e(nS, "waitFrontier");
async function ng(nh) {
  let { gm: nw, RC: nA } = y;
  let np = nh.a;
  let ns = nh.b;
  if (n2 && n2.id !== nh.id) {
    n2 = null;
  }
  let nl = n6();
  let nb = Math.max(0, np - 1 - (nL < 0 || nL > np - 1 ? 0 : nL));
  let nX = (nf, v0) =>
    self.postMessage({
      t: "prog",
      id: nh.id,
      phase: v0,
      f: nf,
      a: np,
      b: ns,
      seekN: nb,
      ms: n6() - nl,
    });
  if (!(await nZ(np - 1, (nf) => nX(nf, "seek")))) {
    return;
  }
  let nd = n6();
  if (!nR) {
    nR = new OffscreenCanvas(P, t);
    nF = nR.getContext("2d");
    if (S.gif) {
      nT = new OffscreenCanvas(320, 240);
      nu = nT.getContext("2d", {
        willReadFrequently: true,
      });
    }
  }
  if (nr) {
    nw.setCurG(nr);
  } else {
    nr = nA.takeOver(nF);
  }
  if (!S.gif && !nW) {
    nW = nJ();
  }
  let nk = true;
  let nQ = 0;
  let nE = [];
  for (
    let nf = np;
    nf <= ns &&
    (!n2 ||
      n2.id !== nh.id ||
      !((ns = Math.max(nf - 1, Math.min(ns, n2.b))),
      self.postMessage({
        t: "shrunk",
        id: nh.id,
        b: ns,
      }),
      (n2 = null),
      nf > ns));
    nf++
  ) {
    await nS(nf);
    if (n3) {
      return;
    }
    f = new Set();
    let v0 = n6();
    nV(nf, nr);
    let v1 = n6();
    let v2 = (nf - S.from) % S.stride === 0;
    if (v2) {
      nA.present(nF, nr, S.scale, nY);
    }
    nz.step += v1 - v0;
    nz.present += n6() - v1;
    let v3 = f.size ? [...f] : null;
    f = null;
    if (v2) {
      if (v3) {
        nE.push(nf);
        self.postMessage({
          t: "hole",
          id: nh.id,
          f: nf,
          rest: ns,
          keys: v3,
        });
        ns = nf - 1;
        nL = -1;
        nr = null;
        break;
      }
      if (S.probe && S.probe.includes(nf)) {
        let v5 = nF.getImageData(0, 0, P, t).data;
        self.postMessage(
          {
            t: "probe",
            f: nf,
            w: P,
            h: t,
            px: v5.buffer,
          },
          [v5.buffer],
        );
      }
      if (S.gif) {
        nu.imageSmoothingEnabled = false;
        nu.drawImage(nR, 0, 0, P, t, 0, 0, 320, 240);
        let v6 = nu.getImageData(0, 0, 320, 240).data;
        self.postMessage(
          {
            t: "gif",
            f: nf,
            px: v6.buffer,
          },
          [v6.buffer],
        );
      } else {
        if (ny) {
          throw new Error(ny);
        }
        let v7 = nf - S.from;
        let v8 = nk || nf % 60 === 0;
        let v9 = n6();
        let vn = new VideoFrame(nR, {
          timestamp: Math.round((v7 * 1000000) / 30),
          duration: Math.round(1000000 / 30),
        });
        let vv = n6();
        try {
          nW.encode(vn, {
            keyFrame: v8,
          });
        } finally {
          vn.close();
        }
        nk = false;
        let vo = n6();
        while (nW.encodeQueueSize > 3 && !ny && !n3) {
          await new Promise((vB) => {
            let vL = setTimeout(vB, 20);
            nW.addEventListener(
              "dequeue",
              () => {
                clearTimeout(vL);
                vB();
              },
              {
                once: true,
              },
            );
          });
        }
        nz.frame += vv - v9;
        nz.encode += vo - vv;
        nz.wait += n6() - vo;
      }
      nQ++;
      if (nQ % 8 === 0 && (nm(), nX(nf, "draw"), await n5(), n3)) {
        return;
      }
    }
  }
  if (nW && (await nW.flush(), ny)) {
    throw new Error(ny);
  }
  if (nW) {
    try {
      nW.close();
    } catch {}
    nW = null;
  }
  nm({
    done: nh.id,
    a: np,
    b: ns,
    at: nL,
    holes: nE,
    drift: nD,
    checks: nC,
    msSeek: nd - nl,
    msDraw: n6() - nd,
    seekN: nb,
    drawn: nQ,
    prof: {
      ...nz,
    },
  });
}
e(ng, "runTask");
var nP = Promise.resolve();
self.onmessage = (nh) => {
  let nw = nh.data || {};
  if (nw.cmd === "sprites") {
    for (let [nA, np, ns] of nw.list) {
      let nl = s.get(nA);
      if (!nl) {
        s.set(nA, (nl = []));
      }
      nl[np] =
        ns && typeof ns == "object" && !("close" in ns) && "w" in ns
          ? new OffscreenCanvas(Math.max(0, ns.w | 0), Math.max(0, ns.h | 0))
          : ns || null;
    }
    for (let nb of [nr, nj]) {
      if (nb) {
        try {
          nb.tintCache.clear();
          nb.palCache.clear();
          nb.palTables.clear();
          if (nb.spriteTints) {
            nb.spriteTints.clear();
          }
          if (nb.tintBySize) {
            nb.tintBySize.clear();
          }
        } catch {}
      }
    }
    return;
  }
  if (nw.cmd === "frontier") {
    n0 = Math.max(n0, nw.f | 0);
    let nX = n1;
    n1 = null;
    if (nX) {
      nX();
    }
    return;
  }
  if (nw.cmd === "shrink") {
    n2 = {
      id: nw.id,
      b: nw.b | 0,
    };
    return;
  }
  if (nw.cmd === "cancel") {
    n3 = true;
    let nd = n1;
    n1 = null;
    if (nd) {
      nd();
    }
    return;
  }
  nP = nP.then(async () => {
    try {
      if (nw.cmd === "boot") {
        let nk = await nv(nw);
        self.postMessage({
          t: "ready",
          caps: nk,
          role: m,
        });
        return;
      }
      if (nw.cmd === "job") {
        S = nw.job;
        let nQ = y.FIGHTS.find((nE) => nE && nE.id === S.d.fight);
        if (!nQ || nQ.mode) {
          self.postMessage({
            t: "nofight",
          });
          return;
        }
        await no(nQ);
        if (m === "render" && !S.gif) {
          let nE = false;
          try {
            nE =
              typeof VideoEncoder == "function" &&
              !!(await VideoEncoder.isConfigSupported(S.codec)).supported;
          } catch {
            nE = false;
          }
          if (!nE) {
            self.postMessage({
              t: "nocodec",
            });
            return;
          }
        }
        nB = y.RC.prepare(S.d, nQ);
        nL = -1;
        P = (S.scale === 2 ? 2 : 1) * 640;
        t = (S.scale === 2 ? 2 : 1) * 480;
        self.postMessage({
          t: "jobok",
        });
        if (m === "scout") {
          await na();
        }
        return;
      }
      if (nw.cmd === "task") {
        await ng(nw.task);
        return;
      }
    } catch (nf) {
      self.postMessage({
        t: "error",
        err: String((nf && nf.message) || nf),
        stack: String((nf && nf.stack) || "").slice(0, 600),
      });
    }
  });
};
function nt(nh, nw) {
  var nA = new URL(nh, nw).href;
  var np = globalThis.__drWarm;
  return (np ? np(nA) : Promise.resolve()).then(function () {
    return import(nA).catch(function (ns) {
      try {
        ns.reload = true;
        ns.what = "the game code";
      } catch (nl) {}
      throw ns;
    });
  });
}
