import { a as L, l as f } from "./c-7Q4J33FN.js";
f();
var G = class g {
  constructor(d = 65536) {
    this.buf = new Uint8Array(d);
    this.n = 0;
  }
  grow(d) {
    if (this.n + d <= this.buf.length) {
      return;
    }
    let O = this.buf.length * 2;
    while (O < this.n + d) {
      O *= 2;
    }
    let E = new Uint8Array(O);
    E.set(this.buf.subarray(0, this.n));
    this.buf = E;
  }
  byte(d) {
    this.grow(1);
    this.buf[this.n++] = d & 255;
  }
  word(d) {
    this.grow(2);
    this.buf[this.n++] = d & 255;
    this.buf[this.n++] = (d >> 8) & 255;
  }
  str(d) {
    for (let O = 0; O < d.length; O++) {
      this.byte(d.charCodeAt(O));
    }
  }
  bytes(d) {
    this.grow(d.length);
    this.buf.set(d, this.n);
    this.n += d.length;
  }
  result() {
    return this.buf.slice(0, this.n);
  }
};
L(G, "Bytes");
var z = G;
function u(E) {
  let B = new Map();
  let N = true;
  let I = -1;
  O: for (let V0 of E) {
    let V1 = V0;
    for (let V2 = 0; V2 < V1.length; V2 += 4) {
      let V3 = (V1[V2] << 16) | (V1[V2 + 1] << 8) | V1[V2 + 2];
      if (V3 !== I && ((I = V3), !B.has(V3))) {
        if (B.size >= 255) {
          N = false;
          break O;
        }
        B.set(V3, B.size);
      }
    }
  }
  let i = new Uint8Array(768);
  if (N) {
    for (let [V6, V7] of B) {
      i[V7 * 3] = V6 >> 16;
      i[V7 * 3 + 1] = (V6 >> 8) & 255;
      i[V7 * 3 + 2] = V6 & 255;
    }
    let V4 = -1;
    let V5 = 0;
    return {
      palette: i,
      colours: B.size,
      exact: true,
      map: (V8, V9, VV) => {
        let VC = (V8 << 16) | (V9 << 8) | VV;
        if (VC !== V4) {
          V4 = VC;
          V5 = B.get(VC);
        }
        return V5;
      },
    };
  }
  let x = new Uint32Array(32768);
  for (let V8 of E) {
    for (let V9 = 0; V9 < V8.length; V9 += 4) {
      x[((V8[V9] >> 3) << 10) | ((V8[V9 + 1] >> 3) << 5) | (V8[V9 + 2] >> 3)]++;
    }
  }
  let H = [];
  for (let VV = 0; VV < 32768; VV++) {
    if (x[VV]) {
      H.push(VV);
    }
  }
  let T = (VC, Ve) => (Ve === 0 ? VC >> 10 : Ve === 1 ? (VC >> 5) & 31 : VC & 31);
  let v = [
    {
      bins: H,
      lo: 0,
      hi: H.length,
    },
  ];
  let Z = (VC) => {
    let Ve = [31, 31, 31];
    let Vm = [0, 0, 0];
    let VQ = 0;
    for (let VO = VC.lo; VO < VC.hi; VO++) {
      let VR = VC.bins[VO];
      for (let Vs = 0; Vs < 3; Vs++) {
        let VL = T(VR, Vs);
        if (VL < Ve[Vs]) {
          Ve[Vs] = VL;
        }
        if (VL > Vm[Vs]) {
          Vm[Vs] = VL;
        }
      }
      VQ += x[VR];
    }
    let Vn = [Vm[0] - Ve[0], Vm[1] - Ve[1], Vm[2] - Ve[2]];
    let Vd = Vn[0] >= Vn[1] && Vn[0] >= Vn[2] ? 0 : Vn[1] >= Vn[2] ? 1 : 2;
    return {
      axis: Vd,
      range: Vn[Vd],
      cnt: VQ,
    };
  };
  while (v.length < 255) {
    let VC = -1;
    let Ve = -1;
    for (let Vs = 0; Vs < v.length; Vs++) {
      let VL = v[Vs];
      if (VL.hi - VL.lo < 2) {
        continue;
      }
      VL.info = VL.info || Z(VL);
      let Vf = VL.info.range * Math.log2(1 + VL.info.cnt);
      if (VL.info.range > 0 && Vf > Ve) {
        Ve = Vf;
        VC = Vs;
      }
    }
    if (VC < 0) {
      break;
    }
    let Vm = v[VC];
    let VQ = Vm.info.axis;
    let Vn = Vm.bins.slice(Vm.lo, Vm.hi).sort((Vk, VG) => T(Vk, VQ) - T(VG, VQ));
    let Vd = Vm.info.cnt / 2;
    let VO = 0;
    let VR = 1;
    for (let Vk = 0; Vk < Vn.length - 1; Vk++) {
      VO += x[Vn[Vk]];
      if (VO >= Vd) {
        VR = Vk + 1;
        break;
      }
      VR = Vk + 1;
    }
    v.splice(
      VC,
      1,
      {
        bins: Vn,
        lo: 0,
        hi: VR,
      },
      {
        bins: Vn,
        lo: VR,
        hi: Vn.length,
      },
    );
  }
  v.forEach((VG, VW) => {
    let Vz = 0;
    let Vu = 0;
    let Vw = 0;
    let Vr = 0;
    for (let VY = VG.lo; VY < VG.hi; VY++) {
      let Vp = VG.bins[VY];
      let Vh = x[Vp];
      Vz += ((Vp >> 10) * 8 + 4) * Vh;
      Vu += (((Vp >> 5) & 31) * 8 + 4) * Vh;
      Vw += ((Vp & 31) * 8 + 4) * Vh;
      Vr += Vh;
    }
    i[VW * 3] = Math.round(Vz / Vr);
    i[VW * 3 + 1] = Math.round(Vu / Vr);
    i[VW * 3 + 2] = Math.round(Vw / Vr);
  });
  let q = v.length;
  let j = new Int16Array(32768).fill(-1);
  return {
    palette: i,
    colours: q,
    exact: false,
    map: (VG, VW, Vz) => {
      let Vu = ((VG >> 3) << 10) | ((VW >> 3) << 5) | (Vz >> 3);
      let Vw = j[Vu];
      if (Vw >= 0) {
        return Vw;
      }
      let Vr = 1000000000;
      Vw = 0;
      for (let VY = 0; VY < q; VY++) {
        let Vp = i[VY * 3] - VG;
        let Vh = i[VY * 3 + 1] - VW;
        let VF = i[VY * 3 + 2] - Vz;
        let VE = Vp * Vp * 3 + Vh * Vh * 4 + VF * VF * 2;
        if (VE < Vr) {
          Vr = VE;
          Vw = VY;
        }
      }
      j[Vu] = Vw;
      return Vw;
    },
  };
}
L(u, "buildPalette");
var w = new Int32Array(1048576);
var r = 0;
function Y(O, o, A) {
  let B = 1 << o;
  let N = B + 1;
  let I = o + 1;
  let i = N + 1;
  let x = 0;
  let H = 0;
  let T = new Uint8Array(255);
  let v = 0;
  let Z = (a) => {
    T[v++] = a;
    if (v === 255) {
      A.byte(255);
      A.bytes(T);
      v = 0;
    }
  };
  let q = (a) => {
    x |= a << H;
    H += I;
    while (H >= 8) {
      Z(x & 255);
      x >>>= 8;
      H -= 8;
    }
  };
  let j = () => {
    r++;
    if (r >= 524288) {
      w.fill(0);
      r = 1;
    }
    I = o + 1;
    i = N + 1;
  };
  A.byte(o);
  j();
  q(B);
  if (!O.length) {
    q(N);
  } else {
    let a = O[0];
    let V0 = () => r * 4096;
    let V1 = V0();
    for (let V2 = 1; V2 < O.length; V2++) {
      let V3 = O[V2];
      let V4 = a * 256 + V3;
      let V5 = w[V4];
      if (V5 >= V1 && V5 < V1 + 4096) {
        a = V5 - V1;
        continue;
      }
      q(a);
      if (i < 4096) {
        w[V4] = V1 + i;
        if (i === 1 << I && I < 12) {
          I++;
        }
        i++;
      } else {
        q(B);
        j();
        V1 = V0();
      }
      a = V3;
    }
    q(a);
    q(N);
  }
  if (H > 0) {
    Z(x & 255);
  }
  if (v) {
    A.byte(v);
    A.bytes(T.subarray(0, v));
  }
  A.byte(0);
}
L(Y, "lzwEncode");
function p(O, B, N, I, i) {
  if (!O.length) {
    throw new Error("no frames");
  }
  let x = u(O);
  let H = new z(1048576);
  H.str("GIF89a");
  H.word(B);
  H.word(N);
  H.byte(247);
  H.byte(0);
  H.byte(0);
  H.bytes(x.palette);
  H.byte(33);
  H.byte(255);
  H.byte(11);
  H.str("NETSCAPE2.0");
  H.byte(3);
  H.byte(1);
  H.word(0);
  H.byte(0);
  let T = B * N;
  let v = null;
  let Z = new Uint8Array(T);
  for (let j = 0; j < O.length; j++) {
    let V0 = O[j];
    for (let V9 = 0, VV = 0; V9 < T; V9++, VV += 4) {
      Z[V9] = x.map(V0[VV], V0[VV + 1], V0[VV + 2]);
    }
    let V1 = 0;
    let V2 = 0;
    let V3 = B - 1;
    let V4 = N - 1;
    let V5 = false;
    if (v) {
      V1 = B;
      V2 = N;
      V3 = -1;
      V4 = -1;
      for (let VC = 0; VC < N; VC++) {
        let Ve = VC * B;
        for (let Vm = 0; Vm < B; Vm++) {
          if (Z[Ve + Vm] !== v[Ve + Vm]) {
            if (Vm < V1) {
              V1 = Vm;
            }
            if (Vm > V3) {
              V3 = Vm;
            }
            if (VC < V2) {
              V2 = VC;
            }
            if (VC > V4) {
              V4 = VC;
            }
          }
        }
      }
      V5 = true;
      if (V3 < 0) {
        V1 = 0;
        V2 = 0;
        V3 = 0;
        V4 = 0;
      }
    }
    let V6 = V3 - V1 + 1;
    let V7 = V4 - V2 + 1;
    let V8 = new Uint8Array(V6 * V7);
    for (let VQ = 0; VQ < V7; VQ++) {
      let Vn = (VQ + V2) * B + V1;
      let Vd = VQ * V6;
      for (let VO = 0; VO < V6; VO++) {
        let VR = Z[Vn + VO];
        V8[Vd + VO] = V5 && v[Vn + VO] === VR ? 255 : VR;
      }
    }
    H.byte(33);
    H.byte(249);
    H.byte(4);
    H.byte((V5 ? 1 : 0) | 4);
    H.word(I[j] ?? 7);
    H.byte(255);
    H.byte(0);
    H.byte(44);
    H.word(V1);
    H.word(V2);
    H.word(V6);
    H.word(V7);
    H.byte(0);
    Y(V8, 8, H);
    v ||= new Uint8Array(T);
    v.set(Z);
    if (i) {
      i((j + 1) / O.length);
    }
  }
  H.byte(59);
  let q = H.result();
  q.colours = x.colours;
  q.exact = x.exact;
  return q;
}
L(p, "encodeGif");
function h(Z) {
  let V0 = 0;
  let V1 = () => Z[V0++];
  let V2 = () => {
    let Vm = Z[V0] | (Z[V0 + 1] << 8);
    V0 += 2;
    return Vm;
  };
  let V3 = String.fromCharCode(...Z.subarray(0, 6));
  if (V3 !== "GIF89a" && V3 !== "GIF87a") {
    throw new Error("not a GIF");
  }
  V0 = 6;
  let V4 = V2();
  let V5 = V2();
  let V6 = V1();
  V1();
  V1();
  let V7 = null;
  if (V6 & 128) {
    let Vm = 2 << (V6 & 7);
    V7 = Z.subarray(V0, V0 + Vm * 3);
    V0 += Vm * 3;
  }
  let V8 = new Uint8ClampedArray(V4 * V5 * 4);
  let V9 = [];
  let VV = [];
  let VC = -1;
  let Ve = 0;
  while (true) {
    let VQ = V1();
    if (VQ === 59 || VQ === undefined) {
      break;
    }
    if (VQ === 33) {
      if (V1() === 249) {
        V1();
        let Vo = V1();
        Ve = V2();
        let Vg = V1();
        VC = Vo & 1 ? Vg : -1;
        V1();
      } else {
        for (let VA = V1(); VA; VA = V1()) {
          V0 += VA;
        }
      }
      continue;
    }
    if (VQ !== 44) {
      throw new Error("bad block " + VQ);
    }
    let Vn = V2();
    let Vd = V2();
    let VO = V2();
    let VR = V2();
    let Vs = V1();
    let VL = V7;
    if (Vs & 128) {
      let Vt = 2 << (Vs & 7);
      VL = Z.subarray(V0, V0 + Vt * 3);
      V0 += Vt * 3;
    }
    let Vf = V1();
    let Vk = [];
    for (let VB = V1(); VB; VB = V1()) {
      for (let VJ = 0; VJ < VB; VJ++) {
        Vk.push(Z[V0 + VJ]);
      }
      V0 += VB;
    }
    let VG = 1 << Vf;
    let VW = VG + 1;
    let Vz = Vf + 1;
    let Vu = VW + 1;
    let Vw = 0;
    let Vr = -1;
    let VY = new Int32Array(4096);
    let Vp = new Uint8Array(4096);
    let Vh = new Uint16Array(4096);
    for (let VS = 0; VS < VG; VS++) {
      VY[VS] = -1;
      Vp[VS] = VS;
      Vh[VS] = 1;
    }
    let VF = new Uint8Array(VO * VR);
    let VE = 0;
    let VP = () => {
      let VU = 0;
      for (let VN = 0; VN < Vz; VN++, Vw++) {
        if (Vk[Vw >> 3] & (1 << (Vw & 7))) {
          VU |= 1 << VN;
        }
      }
      return VU;
    };
    let Vb = (VU) => {
      while (VY[VU] >= 0) {
        VU = VY[VU];
      }
      return Vp[VU];
    };
    let VX = (VU) => {
      let VN = Vh[VU];
      let Vy = VE + VN - 1;
      while (VU >= 0) {
        if (Vy < VF.length) {
          VF[Vy] = Vp[VU];
        }
        Vy--;
        VU = VY[VU];
      }
      VE += VN;
    };
    while (Vw + Vz <= Vk.length * 8) {
      let VU = VP();
      if (VU === VG) {
        Vz = Vf + 1;
        Vu = VW + 1;
        Vr = -1;
        continue;
      }
      if (VU === VW) {
        break;
      }
      if (Vr < 0) {
        VX(VU);
        Vr = VU;
        continue;
      }
      if (VU < Vu) {
        VX(VU);
        if (Vu < 4096) {
          VY[Vu] = Vr;
          Vp[Vu] = Vb(VU);
          Vh[Vu] = Vh[Vr] + 1;
          Vu++;
        }
      } else {
        if (Vu < 4096) {
          VY[Vu] = Vr;
          Vp[Vu] = Vb(Vr);
          Vh[Vu] = Vh[Vr] + 1;
          Vu++;
        }
        VX(VU);
      }
      if (Vu === 1 << Vz && Vz < 12) {
        Vz++;
      }
      Vr = VU;
    }
    for (let VN = 0; VN < VR; VN++) {
      for (let Vy = 0; Vy < VO; Vy++) {
        let VI = VF[VN * VO + Vy];
        if (VI === VC) {
          continue;
        }
        let Vi = ((VN + Vd) * V4 + Vy + Vn) * 4;
        V8[Vi] = VL[VI * 3];
        V8[Vi + 1] = VL[VI * 3 + 1];
        V8[Vi + 2] = VL[VI * 3 + 2];
        V8[Vi + 3] = 255;
      }
    }
    V9.push(V8.slice());
    VV.push(Ve);
    VC = -1;
  }
  return {
    w: V4,
    h: V5,
    frames: V9,
    delays: VV,
  };
}
L(h, "decodeGif");
var F =
  typeof self !== "undefined" &&
  typeof WorkerGlobalScope !== "undefined" &&
  self instanceof WorkerGlobalScope;
if (F) {
  self.onmessage = (O) => {
    let E = O.data || {};
    if (E.type === "encode") {
      try {
        let b = E.frames.map((B) => new Uint8Array(B));
        let o = -1;
        let A = p(b, E.w, E.h, E.delays, (B) => {
          let S = Math.floor(B * 100);
          if (S !== o) {
            o = S;
            self.postMessage({
              type: "progress",
              p: B,
            });
          }
        });
        let t = A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
        self.postMessage(
          {
            type: "done",
            bytes: t,
            colours: A.colours,
            exact: A.exact,
          },
          [t],
        );
      } catch (B) {
        self.postMessage({
          type: "error",
          message: (B && B.message) || String(B),
        });
      }
    }
  };
}
export { u as buildPalette, h as decodeGif, p as encodeGif, Y as lzwEncode };
