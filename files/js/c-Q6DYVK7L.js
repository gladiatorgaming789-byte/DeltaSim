import { f as z, j as L } from "./c-3SH4NNBF.js";
import { n as p } from "./c-7QTHM4OH.js";
import { l as Q } from "./c-A63TQ7IO.js";
import { a as X, b as H, c as f } from "./c-MU76HDXH.js";
import { d as Z } from "./c-FASQFZ3T.js";
import { n as o } from "./c-VEGOCJZG.js";
import { f as e } from "./c-FKUTYDQS.js";
import { c as Y } from "./c-OYE7A34G.js";
import { g as V } from "./c-O6GE5FYX.js";
import {
  $b as i,
  Kb as d,
  Lb as q,
  Q as P,
  Tb as a,
  _b as I0,
  ob as I1,
  va as I2,
} from "./c-ZEHUSSXN.js";
import { a as I3, l as I4 } from "./c-7Q4J33FN.js";
I4();
var I5 = 30;
var I6 = ["b1", "b2", "b3", "left", "right", "up", "down"];
var I7 = I3((B) => {
  if (!B) {
    return {};
  }
  let K =
    B.partystats !== undefined
      ? B
      : {
          partystats: "CUSTOM",
          ...B,
        };
  return {
    utItems: [],
    utParty: null,
    utName: "",
    ...(K.startitems !== undefined
      ? K
      : {
          ...K,
          startitems: "OFF",
        }),
  };
}, "setupOf");
var I8 = ["font", "color", "alpha", "halign", "valign", "fog"];
function I9() {
  let B = I1.first("obj_heart") || I1.first("obj_purpleheart");
  let K =
    typeof V.hp == "number"
      ? V.hp
      : Array.isArray(V.hp)
        ? (V.hp[1] || 0) + (V.hp[2] || 0) + (V.hp[3] || 0)
        : 0;
  return (
    (B ? (B.x | 0) + "," + (B.y | 0) : "none") +
    "|" +
    K +
    "|" +
    I1.list.length +
    "|" +
    (V.mnfight | 0)
  );
}
I3(I9, "sigString");
function II(In) {
  let IL = 2166136261;
  for (let Ic = 0; Ic < In.length; Ic++) {
    IL ^= In.charCodeAt(Ic);
    IL = Math.imul(IL, 16777619) >>> 0;
  }
  return IL >>> 0;
}
I3(II, "fnv");
var IU = I3(() => II(I9()) || 1, "sigNow");
function IW() {
  let B = Y(I0);
  let K = B.ctx;
  try {
    Object.defineProperty(B, "ctx", {
      get: () => K,
      set: () => {},
      configurable: true,
    });
  } catch {}
  return B;
}
I3(IW, "makeNullG");
function IG(B) {
  for (let K = 0; K < I6.length; K++) {
    let In = I6[K];
    P.held[In] = !!(B & (1 << K));
    P.pressed[In] = !!(B & (1 << (K + 8)));
    P.released[In] = !!(B & (1 << (K + 16)));
  }
}
I3(IG, "writeBits");
function Ir(B) {
  if (B.k === "godmode") {
    V.godmode = !!B.v;
  } else if (B.k === "forceAttack") {
    V.forceAttack = B.v;
  } else if (B.k === "kill") {
    if (typeof V.hp == "number") {
      V.hp = 0;
    } else if (Array.isArray(V.char)) {
      for (let K = 0; K < V.char.length; K++) {
        let In = V.char[K];
        if (In) {
          V.hp[In] = 0;
        }
      }
    }
  }
}
I3(Ir, "applyNote");
function Ih(B, K) {
  let In = new Map();
  for (let IL of Array.isArray(B.notes) ? B.notes : []) {
    if (!!IL && !!Number.isInteger(IL.f)) {
      if (!In.has(IL.f)) {
        In.set(IL.f, []);
      }
      In.get(IL.f).push(IL);
    }
  }
  let IE = new Map();
  for (let Ic of Array.isArray(B.checks) ? B.checks : []) {
    if (Array.isArray(Ic) && Number.isInteger(Ic[0]) && typeof Ic[1] == "string") {
      IE.set(Ic[0], parseInt(Ic[1], 16) >>> 0 || 1);
    }
  }
  let IF = K ? Object.assign(Object.create(Object.getPrototypeOf(K)), K) : null;
  if (IF) {
    delete IF._guestsIn;
    delete IF._guestWait;
    delete IF._guestCount;
  }
  return {
    notes: In,
    checks: IE,
    fx: IF,
  };
}
I3(Ih, "prepare");
function IB(B, K, In) {
  let IE = IW();
  q(IE);
  H(B, {
    seed: K.seed | 0,
    cfg: In,
  });
  if (X(B)) {
    o(B);
  } else {
    Q(B);
    f(B, In);
  }
  V.autoplay = false;
  V.godmode = !!K.godmode0;
  P.synthetic = null;
  return IE;
}
I3(IB, "stage");
function IK(B, K, In, IE) {
  let IF = B.notes.get(In - 1);
  if (IF) {
    for (let IM of IF) {
      Ir(IM);
    }
  }
  let IL = K[In - 1] >>> 0;
  P.synthetic = () => IG(IL);
  if (I2.freetp) {
    V.tension = V.maxtension;
  }
  V.autoplay = false;
  Z();
  if (V.godmode) {
    if (typeof V.hp == "number") {
      V.hp = V.maxhp || 20;
    } else if (V.maxhp) {
      for (let Ix = 1; Ix <= 3; Ix++) {
        if (V.maxhp[Ix]) {
          V.hp[Ix] = V.maxhp[Ix];
        }
      }
    }
    V.karma = 0;
    if (V.fightRoom === "room_floweyx" && V.my_inv >= 19 && V.my_hp > 1 && V.my_hp < 50) {
      V.my_hp = 50;
    }
  }
  V.pressedDebugKeys = null;
  p();
  a(e, IE);
  let Ic = B.fx;
  if (Ic.customEncounter && !Ic._guestsIn) {
    Ic._guestWait = (Ic._guestWait || 0) + 1;
    if (Ic._guestWait >= 3) {
      Ic._guestsIn = true;
      Ic._guestCount = L(Ic);
    }
  }
  if (Ic.customEncounter) {
    z(Ic);
  }
  let Ip = B.checks.get(In);
  if (Ip) {
    if (IU() === Ip) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return 0;
  }
}
I3(IK, "stepFrame");
function IJ(B) {
  let K = new I0(B);
  for (let In of I8) {
    if (d && In in d) {
      K[In] = d[In];
    }
  }
  q(K);
  return K;
}
I3(IJ, "takeOver");
function Is(r) {
  if (!V.inGameOver && V.battleover) {
    r.fade = Math.min(1, (r.fade || 0) + 0.04);
  }
}
I3(Is, "fadeStep");
function Iz(B, K, In, IE) {
  B.setTransform(In, 0, 0, In, 0, 0);
  B.globalAlpha = 1;
  B.globalCompositeOperation = "source-over";
  B.imageSmoothingEnabled = false;
  B.fillStyle = "#000";
  B.fillRect(0, 0, 640, 480);
  B.save();
  if (V.roomScale === 2) {
    B.scale(2, 2);
  }
  B.translate(
    Math.round((V.shakex || 0) * (I2.shake ?? 1)),
    Math.round((V.shakey || 0) * (I2.shake ?? 1)),
  );
  try {
    i(K, 1);
  } catch {}
  B.restore();
  if (!V.inGameOver && V.battleover) {
    Is(IE);
    B.fillStyle = "rgba(0,0,0," + IE.fade + ")";
    B.fillRect(0, 0, 640, 480);
  }
}
I3(Iz, "present");
export {
  I5 as a,
  I6 as b,
  I7 as c,
  I9 as d,
  IU as e,
  IW as f,
  IG as g,
  Ir as h,
  Ih as i,
  IB as j,
  IK as k,
  IJ as l,
  Is as m,
  Iz as n,
};
