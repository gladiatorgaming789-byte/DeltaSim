(function (Z, pd) {
  const pg = Z();
  function pq(pV, pG, px) {
    return CU(pV - 462, px);
  }
  function pK(pV, pG, px) {
    return CU(pG - -252, pV);
  }
  function pP(pV, pG, px) {
    return CU(pV - 926, pG);
  }
  while (true) {
    try {
      const pV =
        -parseInt(pq(905, 875, "wjU!")) / 1 +
        (parseInt(pP(1294, "Hv1W", 1508)) / 2) * (parseInt(pP(1435, "wjU!", 1272)) / 3) +
        (-parseInt(pK("R56*", -88, -156)) / 4) * (-parseInt(pq(811, 1132, "g4yd")) / 5) +
        (-parseInt(pK("6HNT", -85, 7)) / 6) * (-parseInt(pK("nyC[", -122, -430)) / 7) +
        (parseInt(pK("iKJU", 148, -121)) / 8) * (parseInt(pq(1020, 1204, "g4yd")) / 9) +
        (-parseInt(pP(1296, "c)qH", 1514)) / 10) * (parseInt(pP(1081, "1KRj", 865)) / 11) +
        (parseInt(pK("c)qH", -65, 183)) / 12) * (-parseInt(pP(1171, "]K^r", 1482)) / 13);
      if (pV === pd) {
        break;
      } else {
        pg.push(pg.shift());
      }
    } catch (pG) {
      pg.push(pg.shift());
    }
  }
})(C8, 216974);
const u = (function () {
  function Z(pK, pP, pV) {
    return CU(pV - 974, pP);
  }
  const C = {
    [pd(-392, -757, "eC%)")]: function (pK, pP) {
      return pK === pP;
    },
  };
  C[pd(-355, -524, "ko)A")] = pd(-601, -526, "p0PV");
  C[pE(582, "PZNe", 414)] = pd(-523, -179, "9XcN");
  function pd(pK, pP, pV) {
    return CU(pK - -855, pV);
  }
  function pE(pK, pP, pV) {
    return CU(pV - -377, pP);
  }
  C[pE(722, "c)qH", 338)] = function (pK, pP) {
    return pK === pP;
  };
  C[pE(332, "AK33", 96)] = pd(-446, -209, "kzq&");
  C[pd(-154, -161, "kzq&")] = pE(-312, "]K^r", -165);
  C[pd(-202, -112, "hPR0")] = pd(-459, -722, "zegm");
  const pg = C;
  let pq = true;
  return function (pK, pP) {
    function pV(pM, ph, pR) {
      return Z(pM - 109, pR, pM - -1661);
    }
    function pG(pM, ph, pR) {
      return Z(pM - 176, pM, ph - -1124);
    }
    const px = {
      zHeMF: function (pM, ph) {
        function pR(pD, e0, e1) {
          return CU(e1 - 20, e0);
        }
        return pg[pR(723, "Mt2w", 876)](pM, ph);
      },
      sxllp: pg[pV(-414, -746, "eC%)")],
      NEznz: pg[pV(-112, -363, "yL^w")],
      XiJgU: function (pM, ph) {
        function pR(pD, e0, e1) {
          return pG(pD, e1 - 499, e1 - 426);
        }
        return pg[pR("8wi2", 787, 720)](pM, ph);
      },
      IHInY: pg[pG("ve67", 732, 1074)],
      QgMzo: pg[pG("kzq&", 551, 396)],
    };
    function pr(pM, ph, pR) {
      return Z(pM - 109, ph, pR - -1231);
    }
    if (pg[pr(741, "U6b0", 522)](pg[pV(-71, 240, "aH&L")], pg[pV(-242, -347, "ko)A")])) {
      const pM = pq
        ? function () {
            function ph(e0, e1, e2) {
              return pV(e0 - 1160, e1 - 459, e2);
            }
            function pR(e0, e1, e2) {
              return pV(e0 - 1507, e1 - 135, e2);
            }
            function pD(e0, e1, e2) {
              return pV(e1 - 656, e1 - 102, e0);
            }
            if (px[pR(1264, 1314, "Fa(&")](px[pD("g4yd", 764, 935)], px[pR(1049, 1228, "PZNe")])) {
              let e0 = px.charinstance[pM];
              if (
                !!e0 &&
                !!(e0.poisonamount > 0) &&
                ((e0.poisontimer = (e0.poisontimer || 0) + 1), e0.poisontimer >= 10)
              ) {
                let e1 = e1.char[v];
                if (w.hp[e1] > 1) {
                  c.hp[e1]--;
                  e0.poisonamount--;
                } else {
                  e0.poisonamount = 0;
                }
                e0.poisontimer = 0;
              }
            } else if (pP) {
              if (px[pD("R56*", 139, 494)](px[pR(1205, 1442, "YMo^")], px[ph(690, 791, "]K^r")])) {
                let e2 = a[v];
                if (e2 && e2.h > 30) {
                  w.draw_sprite_part(c, n, 0, 0, e2.w, 36, E - 4, q - 10);
                } else {
                  P.draw_sprite(x, r, M, s);
                }
              } else {
                const e3 = pP[pD("XQQ)", 350, 628)](pK, arguments);
                pP = null;
                return e3;
              }
            }
          }
        : function () {};
      pq = false;
      return pM;
    } else {
      let ph = v();
      let pR = (e1) => e1 >= 0 && e1 < ph && Z0.char[e1] > 0;
      let pD = c[n][E];
      if (!pR(pD)) {
        for (pD = 0; pD < ph - 1 && !pR(pD);) {
          pD++;
        }
      }
      let e0 = (e1) => {
        let e2 = pD;
        for (let e3 = 0; e3 < ph; e3++) {
          e2 = (e2 + e1 + ph) % ph;
          if (pR(e2)) {
            return e2;
          }
        }
        return pD;
      };
      if (q()) {
        pD = e0(1);
        this.movenoise = 1;
      }
      if (P()) {
        pD = e0(-1);
        this.movenoise = 1;
      }
      {
        let e1 = Z0.floor(pD / 6) * 6;
        let e2 = pD - e1 < 3 ? pD + 3 : pD - 3;
        if ((Z1() || Z2()) && pR(e2)) {
          pD = e2;
          this.movenoise = 1;
        }
      }
      s[h][R] = pD;
    }
  };
})();
function m(Z, C, pd) {
  return CU(C - -56, pd);
}
const B = u(this, function () {
  const Z = {
    NzWym: function (e3, e4) {
      return e3 === e4;
    },
    KhERQ: function (e3, e4) {
      return e3(e4);
    },
    BxSyK: function (e3, e4) {
      return e3 !== e4;
    },
    MuBAp: pR(1451, "FXDS", 1242),
    acfEn: function (e3, e4) {
      return e3 != e4;
    },
    lSNva: function (e3, e4) {
      return e3 !== e4;
    },
    SavhB: pR(1611, "]K^r", 1538),
    uusyS: function (e3, e4) {
      return e3 < e4;
    },
    WUKWo: function (e3, e4) {
      return e3 < e4;
    },
    qsKNx: function (e3, e4) {
      return e3 == e4;
    },
    wULtD: function (e3, e4) {
      return e3 != e4;
    },
    pZwbH: function (e3, e4) {
      return e3 + e4;
    },
    ectaL: function (e3, e4) {
      return e3 === e4;
    },
    ElAOS: pE(799, "1KRj", 925),
    jpFak: pE(453, "2@!(", 758),
    QFVqS: function (e3, e4) {
      return e3 === e4;
    },
    TYKPu: pE(893, "d3^T", 645),
    rOCCL: pK("ve67", -450, -106),
    gOhvA: function (e3, e4, e5, e6) {
      return e3(e4, e5, e6);
    },
    djUpv: function (e3, e4, e5, e6) {
      return e3(e4, e5, e6);
    },
    yBVGb: function (e3, e4) {
      return e3 < e4;
    },
    vDcJC: function (e3, e4) {
      return e3 < e4;
    },
    bnSgV: function (e3, e4) {
      return e3 === e4;
    },
    CYxaS: function (e3, e4) {
      return e3 + e4;
    },
    udgMu: function (e3, e4) {
      return e3 + e4;
    },
    sCxxs: function (e3, e4) {
      return e3 + e4;
    },
    VFKiC: pE(1175, "]K^r", 981),
    HuIzI: function (e3, e4) {
      return e3 > e4;
    },
    peYvA: function (e3, e4, e5) {
      return e3(e4, e5);
    },
    nMuAd: pE(84, "Fa(&", 337),
    NYcYo: pE(531, "tR!$", 355),
    iRVtB: function (e3, e4) {
      return e3 < e4;
    },
    fzOIb: function (e3, e4) {
      return e3 + e4;
    },
    CseQW: function (e3, e4) {
      return e3 - e4;
    },
    LOdkN: pR(1419, "g4yd", 1199),
    jksZu: function (e3, e4) {
      return e3 === e4;
    },
    Lmmqp: pE(596, "PZNe", 696),
    ABNqx: pK("BFt8", -424, -617),
    ihBEp: function (e3, e4) {
      return e3 === e4;
    },
    FXxxf:
      pE(619, "ve67", 413) +
      pR(1917, "U6b0", 1598) +
      pE(1248, "AUnv", 1017) +
      pE(807, "U6b0", 953) +
      pK("M8Cd", -458, -241) +
      pR(2202, "aOJ3", 1817) +
      pK("c)qH", -647, -749) +
      pE(1231, "^LBK", 1074) +
      pK("YMo^", 1, 385) +
      pR(1834, "PZNe", 1692) +
      pR(1246, "iKJU", 1452) +
      pK("eC%)", -655, -793) +
      pR(1962, "Xb3o", 1638) +
      pR(1307, "XQQ)", 1233) +
      pE(395, "Mt2w", 375) +
      pK("M8Cd", -261, -209) +
      pK("yL^w", -77, -212) +
      pR(1771, "hKuR", 1719) +
      pE(841, "yL^w", 681),
    pyxHe:
      pE(1048, "r&bK", 1023) +
      pK("Hv1W", -585, -690) +
      pK("6HNT", -416, -199) +
      pR(1405, "ezFd", 1629) +
      pR(1630, "yL^w", 1471) +
      pK("ve67", -224, -510) +
      pR(1894, "]K^r", 1771) +
      pK("aH&L", -391, -433) +
      pR(1666, "D9de", 1473) +
      pE(369, "iKJU", 424) +
      pK("kzq&", -54, 308) +
      pR(1126, "ve67", 1294) +
      pE(604, "AX6$", 788) +
      pE(911, "M8Cd", 834) +
      pR(1144, "hKuR", 1502) +
      pK("kzq&", -158, -13) +
      pR(1439, "AX6$", 1757) +
      pE(312, "ko)A", 414) +
      pR(1585, "kzq&", 1363) +
      pR(1234, "Fa(&", 1304) +
      pK("wjU!", -232, 25) +
      pR(1380, "6HNT", 1370) +
      pR(1575, "ve67", 1732) +
      pE(629, "Xb3o", 736) +
      pR(1425, "Mt2w", 1535) +
      pK("Hv1W", -443, -68) +
      pK("kzq&", 76, -51) +
      pR(1265, "2@!(", 1212) +
      pE(808, "ezFd", 732),
    WLTUc: function (e3, e4, e5, e6) {
      return e3(e4, e5, e6);
    },
    OtsbQ: pR(1294, "R56*", 1421),
    UGKze: pK("eC%)", 54, -89),
    HKGXy: function (e3, e4) {
      return e3 === e4;
    },
    rurOu: pR(1723, "ezFd", 1717),
    xWOVk: pE(655, "tR!$", 377),
    errdc: function (e3, e4, e5, e6) {
      return e3(e4, e5, e6);
    },
    Fbtgq: function (e3, e4) {
      return e3 !== e4;
    },
    BKDWc: pR(1211, "aH&L", 1500),
    BRQhJ: pK("M8Cd", -176, -230),
    MSYIv: function (e3, e4, e5, e6) {
      return e3(e4, e5, e6);
    },
    LwhEz: pR(1758, "8wi2", 1755),
    BEKVZ: pK("ezFd", -61, 127),
    MfMTW: pK("Hv1W", -212, -569),
    rjpHV: pE(543, "eC%)", 856),
    AqKhU: function (e3, e4, e5, e6) {
      return e3(e4, e5, e6);
    },
    XwGoo: pK("r&bK", -275, 5),
    QWmBO: function (e3, e4) {
      return e3 || e4;
    },
    RTeED: pE(738, "aOJ3", 1071),
    NGnET: function (e3, e4) {
      return e3 !== e4;
    },
    VeZhp: pE(593, "g4yd", 609),
    xwJLs: function (e3, e4) {
      return e3 == e4;
    },
    OFOxx: function (e3, e4) {
      return e3 === e4;
    },
    bCDfH: pR(1493, "aH&L", 1690),
    kBPbi: pK("d3^T", -620, -481),
    NUPpZ: pK("AX6$", -112, -489),
    jNfLK: pK("R56*", -553, -359) + pE(704, "Fa(&", 485) + pR(1719, "d3^T", 1595),
    OUbUp:
      pK("Xb3o", -267, -80) + pE(1122, "BFt8", 817) + pR(1857, "6HNT", 1556) + pK("R56*", 57, -175),
  };
  const C = Z[pE(536, "g4yd", 819)](typeof window, Z[pR(1854, "R56*", 1721)])
    ? window
    : Z[pE(717, "hPR0", 1075)](typeof process, Z[pK("aOJ3", -452, -197)]) &&
        Z[pK("FXDS", -373, -488)](typeof require, Z[pK("aH&L", -355, -86)]) &&
        Z[pE(22, "Xb3o", 372)](typeof global, Z[pE(1192, "ezFd", 846)])
      ? global
      : this;
  const pd = new RegExp(Z[pK("FRwd", -98, 184)], "g");
  function pE(e3, e4, e5) {
    return CU(e5 - 194, e4);
  }
  const pg = Z[pR(943, "Hx]0", 1142)][pE(579, "8wi2", 803)](pd, "")[pE(309, "eC%)", 670)](";");
  let pq;
  function pK(e3, e4, e5) {
    return CU(e4 - -789, e3);
  }
  let pP;
  let pV;
  let pG;
  const px = function (e3, e4, e5) {
    function e6(eZ, eC, ep) {
      return pK(eC, eZ - 768, ep - 352);
    }
    function e7(eZ, eC, ep) {
      return pK(eZ, ep - 406, ep - 35);
    }
    const e8 = {
      oXhpL: function (eZ, eC) {
        function ep(eu, em, eB) {
          return CU(eB - 110, em);
        }
        return Z[ep(1248, "yL^w", 921)](eZ, eC);
      },
      BeBiz: function (eZ, eC) {
        function ep(eu, em, eB) {
          return CU(eB - 129, em);
        }
        return Z[ep(632, "FXDS", 505)](eZ, eC);
      },
      WYKFo: function (eZ, eC) {
        function ep(eu, em, eB) {
          return CU(em - -694, eu);
        }
        return Z[ep("d3^T", -452, -176)](eZ, eC);
      },
      KpcTh: function (eZ, eC) {
        function ep(eu, em, eB) {
          return CU(eu - 452, em);
        }
        return Z[ep(965, "YMo^", 608)](eZ, eC);
      },
    };
    function e9(eZ, eC, ep) {
      return pK(eZ, eC - 454, ep - 11);
    }
    if (Z[e9("Fa(&", -16, -352)](Z[e6(831, "aOJ3", 1029)], Z[e6(152, "g4yd", -11)])) {
      if (C.practicemode) {
        pd = false;
      }
    } else {
      if (Z[e7("Hx]0", 210, 278)](e3[e7("tR!$", 450, 374)], e4)) {
        if (Z[e9("6HNT", -153, -423)](Z[e9("eC%)", 200, 260)], Z[e6(704, "BFt8", 648)])) {
          Z(this, this.herokey || "kris");
        } else {
          return false;
        }
      }
      for (let eZ = 0; Z[e7("c)qH", 399, 326)](eZ, e4); eZ++) {
        for (let eC = 0; Z[e6(702, "]K^r", 447)](eC, e5[e9("K&bq", 163, 500)]); eC += 2) {
          if (
            Z[e9("]K^r", 352, 244)](eZ, e5[eC]) &&
            Z[e9("AUnv", 429, 353)](
              e3[e6(373, "p0PV", 149)](eZ),
              e5[Z[e6(776, "FXDS", 1075)](eC, 1)],
            )
          ) {
            if (Z[e7("U6b0", 103, 419)](Z[e7("tR!$", -422, -226)], Z[e6(443, "FXDS", 212)])) {
              let ep = r[M] || eZ[" "];
              if (eC) {
                if (e8[e9("BFt8", 397, 397)](R, 2)) {
                  return (
                    ep[Z1] ||
                    (Z2[Z3] = e8[e6(669, "d3^T", 434)](Z4, " ")
                      ? ep[e7("eC%)", 730, 411)]((eu) => eu[e6(431, "tR!$", 603)](0, 2))
                      : e8[e7("ve67", 380, 325)](
                          Z5,
                          Z6[Z7] || (Z8[Z9] = e8[e7("D9de", 193, 394)](ZZ, ep)),
                        ))
                  );
                } else {
                  return ZC[Zp] || (Zu[Zm] = e8[e9("r&bK", -11, -271)](ZB, ep));
                }
              } else {
                return ep;
              }
            } else {
              return false;
            }
          }
        }
      }
      return true;
    }
  };
  const pr = function (e3, e4, e5) {
    function e6(e9, eZ, eC) {
      return pK(eZ, eC - 514, eC - 44);
    }
    function e7(e9, eZ, eC) {
      return pK(eC, e9 - 718, eC - 144);
    }
    function e8(e9, eZ, eC) {
      return pK(e9, eZ - 39, eC - 95);
    }
    if (Z[e8("1KRj", -475, -578)](Z[e8("nyC[", 70, 2)], Z[e7(303, 609, "aOJ3")])) {
      Z(this, this.herokey || "noelle");
    } else {
      return Z[e8("D]l!", -353, -699)](px, e4, e5, e3);
    }
  };
  const pM = function (e3, e4, e5) {
    function e6(e7, e8, e9) {
      return pE(e7 - 227, e8, e7 - 101);
    }
    return Z[e6(794, "iKJU", 487)](pr, e4, e3, e5);
  };
  const ph = function (e3, e4, e5) {
    function e6(e7, e8, e9) {
      return pR(e7 - 471, e9, e7 - -1243);
    }
    return Z[e6(119, -26, "yL^w")](pM, e4, e5, e3);
  };
  for (let e3 in C) {
    if (Z[pE(448, "^LBK", 786)](px, e3, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      if (Z[pE(438, "kzq&", 487)](Z[pE(799, "PZNe", 763)], Z[pR(1980, "6HNT", 1727)])) {
        for (let e4 = 0; Z[pE(477, "hPR0", 829)](e4, e0); e4++) {
          let e5 = q[e4];
          for (let e6 = 0; Z[pE(1232, "eC%)", 1008)](e6, e5[pK("Fa(&", -312, -149)]); e6++) {
            if (Z[pK("AX6$", -589, -297)](e5[e6], "#")) {
              e6[pK("p0PV", -480, -242)](Z[pR(1203, "Xb3o", 1298)](M, e6), e4, 1, 1);
            }
          }
        }
        pM += Z[pE(523, "6HNT", 830)](ph[0][pK("vkHp", -84, 203)], pD);
      } else {
        pq = e3;
        break;
      }
    }
  }
  for (let e7 in C[pq]) {
    if (Z[pE(957, "Hx]0", 827)](Z[pK("c)qH", -357, -3)], Z[pR(1511, "ezFd", 1475)])) {
      let e8 = pr(
        pM + 80 + this.boltframe[ph] * this.boltspeed - this.boltx * this.boltspeed,
        pD + e0 * e1(e2),
        E,
      );
      e8.sprite_index = "spr_attackspot";
      e8.image_alpha = 0.4;
      e8.depth = -119;
      if (q) {
        e8.image_blend = this.boltcolor[e7];
      }
    } else if (Z[pR(1105, "nyC[", 1171)](ph, 6, e7, [5, 110, 0, 100])) {
      pP = e7;
      break;
    }
  }
  for (let e9 in C[pq]) {
    if (Z[pK("g4yd", -101, 65)](Z[pR(1222, "BFt8", 1355)], Z[pR(1888, "WmW4", 1641)])) {
      if (Z[pE(967, "c)qH", 721)](pM, e9, [7, 110, 0, 108], 8)) {
        if (Z[pE(941, "FRwd", 585)](Z[pE(528, "hPR0", 793)], Z[pK("M8Cd", -401, -216)])) {
          let eZ = Z[pR(2003, "9XcN", 1846)](
            Z[pE(896, "p0PV", 1034)](
              Z[pK("yL^w", -466, -639)](
                Z[pR(1694, "vkHp", 1593)],
                Z[pR(1574, "hKuR", 1244)](x, e9)[pE(459, "]K^r", 387) + "e"](),
              ),
              "@",
            ),
            M,
          );
          if (eZ[eZ]) {
            return eZ;
          }
          if (Z[pE(143, "vkHp", 476)](typeof eC, "u")) {
            return null;
          }
          let eC = Z[pE(1276, "BFt8", 947)](ep, eu, !1);
          if (Z[pK("D9de", -377, -648)](eC.w, em)) {
            eC = Z[pE(1123, "g4yd", 986)](eB, Z3, true);
          }
          if (Z[pR(1667, "1KRj", 1816)](eC.w, Z4)) {
            eC = Z[pE(275, "G%hh", 616)](Z5, Z6, 2);
          }
          let ep = 1;
          let eu = Z7[pR(1277, "Mt2w", 1559) + pR(1314, "hKuR", 1604)](Z[pE(778, "FXDS", 674)]);
          eu[pK("D]l!", 39, 380)] = Z8[pK("Mt2w", 99, 333)](1, eC.w);
          eu[pR(1817, "Xb3o", 1530)] = Z9;
          let em = eu[pR(1037, "nyC[", 1389)]("2d");
          if (!em) {
            return null;
          }
          em[pE(1148, "Xb3o", 805)] = Z[pR(1019, "aOJ3", 1335)];
          let eB = 0;
          for (let eX of eC[pK("]K^r", -371, -309)]) {
            for (let eS = 0; Z[pK("Hx]0", -17, -73)](eS, ZX); eS++) {
              let eU = eX[eS];
              for (let eO = 0; Z[pE(340, "ve67", 684)](eO, eU[pK("g4yd", -530, -461)]); eO++) {
                if (Z[pR(1534, "c)qH", 1712)](eU[eO], "#")) {
                  em[pE(667, "AUnv", 618)](Z[pE(726, "g4yd", 529)](eB, eO), eS, 1, 1);
                }
              }
            }
            eB += Z[pK("kzq&", -343, -541)](eX[0][pR(1872, "hPR0", 1788)], ep);
          }
          ZC[eZ] = {
            name: eZ,
            img: [eu],
            w: eu[pK("D]l!", 39, -183)],
            h: Zp,
            ox: 0,
            oy: 0,
            frames: 1,
            bb: [
              0,
              0,
              Z[pK("nyC[", -476, -468)](eu[pR(1928, "yL^w", 1823)], 1),
              Z[pK("p0PV", 11, 116)](Zu, 1),
            ],
            precise: !1,
            masks: null,
          };
          return eZ;
        } else {
          pV = e9;
          break;
        }
      }
    } else {
      pV.temptension[pG.charturn] = px.tension;
      for (let eL = 0; eL < 12; eL++) {
        e0.tempitem[eL][e1.charturn] = e2.tempitem[eL][E];
      }
    }
  }
  function pR(eH, ey, eY) {
    return CU(eY - 956, ey);
  }
  if (!Z[pK("6HNT", -656, -727)]("~", pP)) {
    if (Z[pK("g4yd", 42, -182)](Z[pE(477, "WmW4", 809)], Z[pE(544, "]K^r", 556)])) {
      for (let eH in C[pq][pV]) {
        if (Z[pE(852, "G%hh", 598)](Z[pE(683, "Xb3o", 864)], Z[pE(703, "zegm", 808)])) {
          let ey = {
            1: 0,
            2: 1,
            3: 2,
            4: 3,
            5: 5,
            6: 8,
            7: 9,
            8: 10,
            9: 11,
            10: 13,
            13: 14,
          };
          let eY = ey[e2] === undefined ? 3 : ey[E];
          let ej =
            q === 2 || P === 10
              ? x.red
              : ej === 3 || M === 4 || s === 5
                ? eH.lime
                : R >= 6 && Z0 <= 9
                  ? Z1.white
                  : Z2 === 13
                    ? this.aqcolor
                    : Z3;
          Z4.draw_sprite_ext(
            "spr_battlemsg",
            eY,
            this.x + 30,
            this.y,
            2 - this.stretch,
            this.stretch + this.kill,
            0,
            ej,
            Z5.max(0, 1 - this.kill),
          );
        } else if (Z[pK("BFt8", -114, -494)](pr, [7, 101, 0, 104], eH, 8)) {
          if (Z[pE(981, "AX6$", 1066)](Z[pE(770, "9XcN", 676)], Z[pE(765, "iKJU", 1000)])) {
            Z.acting = 0;
          } else {
            pG = eH;
            break;
          }
        }
      }
    } else {
      let eb = pr(pM());
      if (eb !== 1) {
        ph.image_xscale *= eb;
        pD.image_yscale *= eb;
        e0.mywidth = e1(e2.mywidth * eb);
        E.myheight = q(P.myheight * eb);
      }
    }
  }
  if (!pq || !C[pq]) {
    return;
  }
  const pD = C[pq][pP];
  const e0 = !!C[pq][pV] && C[pq][pV][pG];
  const e1 = Z[pK("vkHp", -414, -181)](pD, e0);
  if (!e1) {
    if (Z[pE(653, "r&bK", 765)](Z[pE(204, "vkHp", 360)], Z[pE(700, "hPR0", 700)])) {
      let eI = this.points[0];
      pV.punchcon = 1;
      pG.damageoverride = px((pr.battleat[0] * eI) / 10);
      eI.acttoenemytalktransition = 1;
      if (eI === 150 || eI === 300) {
        ph.tpoverride = 5;
      }
      if (eI === 0) {
        pD.damageoverride = 1;
      }
      return;
    } else {
      return;
    }
  }
  let e2 = false;
  for (let ef = 0; Z[pE(510, "9XcN", 335)](ef, pg[pE(950, "eC%)", 918)]); ef++) {
    const eQ = pg[ef];
    const et = Z[pK("aOJ3", -578, -497)](eQ[0], String[pK("]K^r", -653, -400) + "de"](46))
      ? eQ[pK("R56*", -132, -404)](1)
      : eQ;
    const eF = Z[pE(666, "eC%)", 506)](e1[pR(1081, "aH&L", 1464)], et[pK("XQQ)", -350, -453)]);
    const eT = e1[pK("XQQ)", -279, -602)](et, eF);
    const eW = Z[pE(930, "wjU!", 634)](eT, -1) && Z[pE(657, "1KRj", 557)](eT, eF);
    if (eW) {
      if (Z[pK("AK33", -15, -251)](Z[pR(1675, "Hv1W", 1511)], Z[pE(100, "kzq&", 410)])) {
        if (
          Z[pE(870, "ko)A", 1029)](e1[pR(1800, "aOJ3", 1805)], eQ[pE(284, "WmW4", 432)]) ||
          Z[pR(1238, "YMo^", 1241)](eQ[pR(1698, "8wi2", 1738)]("."), 0)
        ) {
          if (Z[pR(1618, "tR!$", 1654)](Z[pE(317, "AUnv", 661)], Z[pK("g4yd", -298, 9)])) {
            e2 = true;
          } else {
            return Z[pE(508, "AUnv", 724)](pg, pq, pP, pV);
          }
        }
      } else {
        let ez = q.monsterinstance(P);
        let eJ = x.monstertype[r] === 3 || (M.chapter >= 2 && s.monstertype[h] === 52);
        if (R.mercymod[Z0] >= 100) {
          if (eJ) {
            ez.sparecon = 1;
          } else {
            Z1.flag[51 + Z2] = 2;
            ez.userEvent(10);
            ez.scr_monsterdefeat();
          }
        } else {
          ZZ(ZC, Zp.sparepoint[Zu]);
          let ek = Zm(0, 0, ZB);
          ek.target = ez;
          ek.fail = 1;
          ek.flashcolor = ZX.yellow;
        }
      }
    }
  }
  if (!e2) {
    if (Z[pK("D]l!", -433, -402)](Z[pE(756, "U6b0", 1045)], Z[pR(1696, "wjU!", 1325)])) {
      let el = pV.spell[pG];
      let eN = px.spellcost[pr];
      if (pM.isArray(el) && eN.isArray(eN)) {
        for (let eo = 0; eo < el.length; eo++) {
          if (el[eo] === 10) {
            eN[eo] = e0.maxtension;
          }
        }
      }
    } else {
      const eA = new RegExp(Z[pR(1355, "G%hh", 1724)], "g");
      const ea = Z[pK("2@!(", -384, -417)][pR(1128, "iKJU", 1084)](eA, "");
      C[pq][pV] = ea;
    }
  }
});
B();
const i = (function () {
  const Z = {
    [pq(-474, -195, "hKuR")]: function (pK, pP) {
      return pK === pP;
    },
  };
  Z[pg(521, "ezFd", 865)] = pg(547, "K&bq", 450);
  function C(pK, pP, pV) {
    return CU(pK - 294, pP);
  }
  const pd = Z;
  let pE = true;
  function pg(pK, pP, pV) {
    return CU(pK - -96, pP);
  }
  function pq(pK, pP, pV) {
    return CU(pP - -754, pV);
  }
  return function (pK, pP) {
    const pV = pE
      ? function () {
          function pG(pM, ph, pR) {
            return CU(pR - 301, pM);
          }
          function px(pM, ph, pR) {
            return CU(pM - -426, pR);
          }
          function pr(pM, ph, pR) {
            return CU(pR - 763, pM);
          }
          if (pP) {
            if (pd[pr("c)qH", 1103, 984)](pd[pr("r&bK", 1645, 1581)], pd[px(245, -64, "eC%)")])) {
              const pM = pP[pr("vkHp", 678, 948)](pK, arguments);
              pP = null;
              return pM;
            } else {
              return;
            }
          }
        }
      : function () {};
    pE = false;
    return pV;
  };
})();
const U = i(this, function () {
  const Z = {};
  function C(pV, pG, px) {
    return CU(px - -465, pG);
  }
  Z[pd("aOJ3", 111, -270)] = function (pV, pG) {
    return pV !== pG;
  };
  Z[C(-145, "ve67", -317)] = pd("g4yd", -449, -112);
  Z[C(341, "R56*", 218)] = function (pV, pG) {
    return pV === pG;
  };
  Z[pd("Xb3o", -543, -924)] = C(-229, "D]l!", -147);
  Z[pd("FRwd", -478, -579)] = function (pV, pG) {
    return pV === pG;
  };
  Z[C(385, "6HNT", 113)] = pd("K&bq", -389, -704);
  Z[pd("FXDS", 47, 392)] = pE("D]l!", 1004, 1095);
  function pd(pV, pG, px) {
    return CU(pG - -692, pV);
  }
  Z[pd("AX6$", -231, -509)] = pE("d3^T", 1077, 954);
  Z[pE("hPR0", 1108, 849)] = pd("hKuR", -95, 33);
  Z[C(-152, "Hx]0", -221)] = pE("^LBK", 1488, 1418);
  Z[pd("zegm", -88, -458)] = pE("AUnv", 1454, 1388);
  function pE(pV, pG, px) {
    return CU(px - 610, pV);
  }
  Z[pE("c)qH", 1114, 1458)] = C(-105, "AX6$", -228);
  Z[C(-136, "PZNe", -5)] = C(106, "YMo^", 10);
  Z[pd("BFt8", -325, -228)] = function (pV, pG) {
    return pV < pG;
  };
  const pg = Z;
  const pq = pg[pd("Mt2w", -263, -56)](typeof window, pg[pE("G%hh", 917, 1000)])
    ? window
    : pg[C(43, "ezFd", 116)](typeof process, pg[C(684, "d3^T", 379)]) &&
        pg[pd("FXDS", -208, -366)](typeof require, pg[C(236, "tR!$", 424)]) &&
        pg[C(-63, "iKJU", 287)](typeof global, pg[C(-114, "ko)A", 211)])
      ? global
      : this;
  const pK = (pq[pE("vkHp", 1140, 1067)] = pq[C(454, "aH&L", 214)] || {});
  const pP = [
    pg[C(-50, "]K^r", -39)],
    pg[pd("vkHp", 94, 356)],
    pg[pd("d3^T", 3, -325)],
    pg[pd("ezFd", -457, -712)],
    pg[pd("nyC[", -160, -427)],
    pg[pd("U6b0", 88, -137)],
    pg[C(46, "2@!(", 137)],
  ];
  for (let pV = 0; pg[pE("AUnv", 876, 878)](pV, pP[pd("hPR0", 140, 421)]); pV++) {
    const pG = i[pd("1KRj", -12, 295) + "r"][pd("aH&L", -62, 287)][pd("yL^w", -36, -241)](i);
    const px = pP[pV];
    const pr = pK[px] || pG;
    pG[pd("9XcN", -428, -438)] = i[pd("K&bq", -342, -140)](i);
    pG[C(14, "Hx]0", 159)] = pr[pd("aH&L", -534, -463)][pd("Mt2w", -97, -323)](pr);
    pK[px] = pG;
  }
});
U();
import { b as O, g as L, h as H } from "./c-3MS4RS6S.js";
import { L as y, ub as Y } from "./c-HEUEF6GJ.js";
import {
  A as j,
  B as b,
  C as f,
  D as Q,
  E as t,
  F,
  G as T,
  H as W,
  J as z,
  K as k,
  L as l,
  M as N,
  a as o,
  b as A,
  e as a,
  f as v,
  g as w,
  h as c,
  i as n,
  j as d,
  k as E,
  l as g,
  o as q,
  r as K,
  s as P,
  t as V,
  u as G,
  v as x,
  x as r,
  y as M,
  z as s,
} from "./c-QJXN6G4A.js";
import { f as h, g as R } from "./c-UDQUHXBV.js";
import { b as D, f as Z0, n as Z1, o as Z2, q as Z3 } from "./c-F4ZSRAAO.js";
import {
  A as Z4,
  B as Z5,
  C as Z6,
  D as Z7,
  I as Z8,
  J as Z9,
  K as ZZ,
  L as ZC,
  Q as Zp,
  R as Zu,
  a as Zm,
  d as ZB,
  g as ZX,
  l as ZS,
  m as Zi,
  o as ZU,
  q as ZO,
  r as ZL,
  u as ZH,
  x as Zy,
} from "./c-O6GE5FYX.js";
import {
  I as ZY,
  Ja as Zj,
  _a as Zb,
  ac as ZI,
  c as Zf,
  g as ZQ,
  ga as ZF,
  gb as ZT,
  gc as ZW,
  h as Zz,
  ha as ZJ,
  hb as Zk,
  hc as Zl,
  ia as ZN,
  j as Zo,
  kc as ZA,
  m as Za,
  ma as Zv,
  na as Zw,
  oa as Zc,
  ob as Zn,
  p as Zd,
  pa as ZE,
  q as Zg,
  r as Zq,
  s as ZK,
  t as ZP,
  u as ZV,
  v as ZG,
  va as Zx,
  w as Zr,
  x as ZM,
  zb as Zs,
} from "./c-ZEHUSSXN.js";
import { a as Zh, e as ZR, g as ZD, l as C0 } from "./c-7Q4J33FN.js";
C0();
C0();
function C1(Z) {
  if (!Z) {
    return 0;
  }
  let C = ZX.charhero && ZX.charhero[Z];
  let pd = C && o[C];
  if (pd && pd.equipchar) {
    return pd.equipchar;
  } else {
    return ZS(Z);
  }
}
Zh(C1, "gameChar");
var C2 = 13;
function C3(Z) {
  return !!Z && ZX.charweapon && ZX.charweapon[Z] === C2 && C1(Z) === 4;
}
Zh(C3, "wearsThornRing");
function C4(Z, C) {
  if (ZX.chapter < 4) {
    return Z;
  }
  let pd = ZX.char[C];
  if (!pd) {
    return Z;
  }
  let pE = 0;
  for (let pg of [ZX.chararmor1[pd], ZX.chararmor2[pd]]) {
    if (pg === 26 || pg === 30) {
      pE += Math.ceil(Z / 8);
    }
  }
  return Z + pE;
}
Zh(C4, "healModify");
function C5(Z) {
  if (Z.bych) {
    let C = Z.bych[ZX.chapter] ?? Z.bych[Math.min(5, Math.max(1, ZX.chapter | 0))];
    if (C !== undefined) {
      return C;
    }
  }
  return Z.heal || 0;
}
Zh(C5, "chapterHeal");
function C6(Z, C, pd, pE) {
  if (!Z) {
    return false;
  }
  let pg = ZX.char[C];
  let pq = C1(pg);
  if (Z.revive) {
    let pK =
      Z.revive === "full"
        ? Math.ceil(C4(ZX.maxhp[pg], pd)) + Math.abs(ZX.hp[pg])
        : Math.ceil(ZX.maxhp[pg] / 2);
    if (Z.revive === "mint" && ZX.hp[pg] <= 0) {
      pK = Math.ceil(ZX.maxhp[pg]) + Math.abs(ZX.hp[pg]);
    }
    pE.healOne(C, pK);
    return true;
  }
  if (Z.reviveall) {
    let pP = Z.reviveall;
    for (let pV = 0; pV < ZO(); pV++) {
      let pG = ZX.char[pV];
      if (!(pG > 0)) {
        continue;
      }
      let px = pP.heal;
      if (ZX.hp[pG] <= 0) {
        px = pP.deadheal ?? Math.ceil(ZX.maxhp[pG] / pP.deaddiv) + Math.abs(ZX.hp[pG]);
      }
      pE.healOne(pV, C4(px, pd));
    }
    return true;
  }
  if (Z.poison) {
    let pr = ZC.charinstance && ZC.charinstance(C);
    if (pr) {
      pr.poisonamount = Z.poison;
      pr.poisontimer = 0;
    }
    pE.healOne(C, C4(Z.heal, pd), "fuchsia");
    return true;
  }
  if (Z.perchar && (!Z.ch2only || ZX.chapter === 2)) {
    let pM = Z.perchar[pq] ?? Z.dflt ?? 0;
    if (Z.ch2only && Zn.exists("o_boxingcontroller")) {
      pM = 100;
    }
    pE.healOne(C, C4(pM, pd));
    if (Z.noellebonus && pq === 4) {
      pE.healOne(0, C4(Z.noellebonus, pd));
    }
    return true;
  }
  if (Z.all) {
    pE.healAll(C4(C5(Z), pd));
    return true;
  } else if (Z.heal !== undefined || Z.bych) {
    pE.healOne(C, C4(C5(Z), pd));
    return true;
  } else {
    return false;
  }
}
Zh(C6, "applyItemEffect");
function C7(Z) {
  if (!Z || Z.tp === undefined) {
    return null;
  } else if (Z.tp === "max") {
    return Math.ceil(ZX.maxtension);
  } else if (Z.tp === "half") {
    return Math.ceil(ZX.maxtension / 2);
  } else {
    return Z.tp;
  }
}
function C8() {
  const Z = [
    "tt1sm0tcHCk2FmkD",
    "vSoLnSogvJ3dMd9wnW",
    "zsxdMrXqWO7dMLu",
    "WQxcG8kfn8o1",
    "D2WmW5tdLb8uxq",
    "jgpcMmoUt8kXw3rbhG",
    "WOz6xYJdOG",
    "c8oJB8k7WQu",
    "D2ebW5tdLb8uua",
    "lISiWQy9W7a",
    "x2ylWQfD",
    "W58bpxlcIfe",
    "zsxdMrXqWOpdL1u",
    "xmk+WPxdU20",
    "y0nOWR5t",
    "t2xcPaBdIa",
    "hmkxqSoPrq",
    "WQhcV2ldISoMgKdcTW",
    "FCoSnZmgW7TAzmoofq",
    "cqeyWOBdKW",
    "WPrxCdNdLGTAW6NcIG",
    "EmoRe8oCuG",
    "D8o5nmouAW",
    "l8kcFKzGWOGXemkz",
    "cWfAW7NdQbGN",
    "tmozWPtdO8onWPDJea",
    "h1hcKWddO0FcOCkoW4K",
    "WPtcSSkalxHsWQCx",
    "WO11WRLIzq",
    "kJjqWQxcMfjwe0pdUG",
    "WPZdUbuI",
    "WPZdUbuVlrVcOwO",
    "r1rPW4PXWPFcPCokl8op",
    "rSkjxSoPyG",
    "bSoXz8kJEq",
    "h1hcNGddO0FcRmko",
    "W6/dVtW",
    "bCoSuSk5sa",
    "CKNdG8oeEeRdPSke",
    "wKnCWOlcLq",
    "d8kkW6hdULexqtO",
    "fXH3W4VdHa",
    "chJcN24K",
    "W5DBhSkuySo2jSo9nay",
    "ECo/dmo3Cq",
    "ecldTsWj",
    "WQxcQqHEffq7WP8",
    "W5GIWOurFKS",
    "W6WWWQWzzq",
    "ECkpWP/dKx4",
    "WQ5WW6jFma",
    "W58bpxlcIfeqWQu",
    "x2JcOXpdJmkv",
    "W7rBimoIWP4",
    "W5ddT1uGva",
    "WPlcSJX9leDGpG",
    "W7tdMc/cRSkl",
    "hqGmWOpcMvnAmb3dQG",
    "h1hcNG3dRKFcOCkdW4q",
    "d33cLxGH",
    "wWP/Cmos",
    "WO4zeSouWRNdNfyJ",
    "WQRdPSktWPFdIa",
    "gWzdW4m4qf9Y",
    "iYyfWQSWW73dGSkZ",
    "WQzIqHJdTI95W5/cSmok",
    "jq54y1m",
    "bdOiW4pdVSkGDSkY",
    "W69mWQmvW54",
    "WQPlwCoOW4VcJxuc",
    "kW7cICktmW",
    "xIjmASoGotOvxCox",
    "wmoGfsiO",
    "fmo6BCkYBG",
    "W53dThW5DGe",
    "WPZdUbGVibVcOwO",
    "iYyiWQy9W7ddJ8k+",
    "W7VdUqldOIq",
    "WQPlwCoOW4VcGhup",
    "WRznWQBdOH9+WRK9",
    "W7FdK8o+qmksWPtdN8ot",
    "WOX+W55apXBdUs3dNSo9W7ZdMa",
    "o1hcJv07",
    "W4JcPSkQDCkPmXhcHG",
    "rKqeWO5Z",
    "W4tdPdZcSmkn",
    "W4rjWQuQW6a",
    "EMemW5tdLbizua",
    "pSo+tCk0WQvsCSkM",
    "WQmPW69MWRFcOgXM",
    "W7pdMmohWPZdGW",
    "hINdIrOZW4q",
    "nM0Nk8kTDK9A",
    "uSojkmoMzW",
    "pZNdPtW3",
    "p8k/vSk1hLJcRvG",
    "zmkpjCo+W4u+jSo4",
    "W7FdK8o+qmksWPtdKSoE",
    "A8koW5ZcGMq",
    "FxT9W6pcN2y2rSoZ",
    "W47dSmokWRBdOa",
    "qCouWPtdO8onWPC",
    "jMS1zYm",
    "eaRdRJqkW747WQj3kG",
    "W7e8imkpWRy",
    "j8oxW7dcOIVcQ8oNmG",
    "WQdcRwBcGhKAWQ3cMq",
    "W5mjW4xcJxKOW4fhWQL7",
    "dtznFLm",
    "W41ie8oVWPS",
    "ctOfW47dS8kTE8kY",
    "WQxcQqHtgvq",
    "mSomkCkTo8oLgmol",
    "osiqW5CFtGSe",
    "W5zlg8kOlq",
    "WPtcV8knlxHsWQCx",
    "qCouWPtdRSoaWPDUhq",
    "cbusWQJdIq",
    "wmoFeSkqe8kIhe0",
    "hrRdIbyJ",
    "vCoFeSkqe8kIhea",
    "WQ4PW6jMWRFcRwXR",
    "WRnyW5LPks0CWQ4IAW",
    "W5VdUMeeDW",
    "vCosbdWt",
    "tINcKCoWW4xdP2VcJq",
    "WQhcV2/dH8oRf0dcTW",
    "WOj9WQC",
    "uw/cHf5KWO9mW40",
    "aSocWQNcSHLFba",
    "AmkgW4e",
    "W4ddLdxdQs4",
    "W77dO0eWqG",
    "p8k/vSk4e1JcRvG",
    "mSkYw8k1hLxcRvu",
    "D2WmW5NdMrizua",
    "zsxdLbXqWOpdL1u",
    "mZ4XWQRdNG",
    "jSoeWPRdOGZdPaNdTa",
    "W4yIWPSAA0ddSG",
    "gWzdW441qfj/",
    "W4/cJSoRW7tcJHJcSSkUW4NcRSkV",
    "WQRcTuhcJg8QWO8a",
    "WPK7E8oWySkOzmk5",
    "qCkmWPFdU0e",
    "W4tdJbVcO8kkDJldSSkCWOm",
    "WRRcScL0aSkWuri",
    "pZbnWPFcUvrwdgxdLq",
    "xCo1jSkZWR5BWQmY",
    "WPlcSJf9iuPGpG",
    "h1hcKWddO0FcRmko",
    "mbHlW6xdLG",
    "W7ldHxa6vq",
    "W77dUSoBWOZdNdKWAJPL",
    "W5hcT1v6B0y",
    "jg7dRCkKWP4",
    "WPKcwCk1W53cVqjT",
    "WRRcScr5aSkWuri",
    "WRRcScL0d8k9uri",
    "z8oQpYWp",
    "jSk5W5pcOSkx",
    "W63dK8oKxWm",
    "W4i3aCkTWPe",
    "p8omkCkGnSoLgmog",
    "jSoeWPRdOGZdPa",
    "vCk3hCo2gYC",
    "wsKyBWhdR8olda",
    "vCoFh8kDhSkVhedcNq",
    "W4hdTY7dRri",
    "W47dVSoWEIKvW6DE",
    "BSkvWQFdSwddTG",
    "eLZcKWddO0FcRmko",
    "WQFdVqNdHcDIW4O",
    "W7RdNSo+qmksWPtdKSoE",
    "ub9nsmoI",
    "C8ousCk0WRHIFW",
    "W5impxlcIfeqWQu",
    "WR1iWRPRsq",
    "omolW6NcUu7dJCkpE1jC",
    "wmk3hCo2gYFcKaa",
    "W6XiWRumW4i",
    "h8ofqCk3WR4",
    "p8k/vSk4e1JcRvGm",
    "W53cNmo2W6NcK0ddKmoJ",
    "o8oHFmkusa",
    "iSkpC0zGWOu8hq",
    "u18oWQ7cOg5ZcH1GW4VdPCkZ",
    "AcJdLbfDWOpdMLG",
    "WPzdAIZdJGW",
    "bSksW7JcImkt",
    "W6uSWR4EBe10W4C",
    "WQ3cOgBcGhqxWQdcLa",
    "q8kwW4dcMgNcV3VcUdT1",
    "zCkQWPddT2K",
    "W7BdQZZdHGW",
    "osiqW5CFtGyj",
    "WO5SWQ9cDa",
    "ANHgWRfu",
    "WQZcHCoUWPhdNXaiva",
    "yeTaWOhcKa",
    "WPq2E8o9B8kLzmk0",
    "WRVcNSkLW7dcU3fCgG",
    "EMemW5tdLbiuxq",
    "W7FdK8oZtCkFWPNdKSoE",
    "ls13WORcILLfpuFdIq",
    "h1hcKWddRKRcRmko",
    "W4W/W7ealSoWhCkz",
    "WPKcvmk1W53cVqjT",
    "k8ojWPFdOGZdQqtdTa",
    "caRdV0RcNHVdUa",
    "W6uSWR4EBeb0W4C",
    "W5H2bSk5gG",
    "Chz9W67cKMS",
    "tNesabZcUJXc",
    "ctOfW47dS8kTDSk/",
    "zItdKL3cUsVdISkwWRldQq",
    "WQ3cOgBcJxqAWQdcLa",
    "vCoFh8kDhSkVeu0",
    "eIFdO0BcJSoirI4",
    "tmozWPtdRSoaWPDJea",
    "kSoAW7dcRYBcQ8oNpWS",
    "tINcKCoWW4xdP2BcGa",
    "oGFdOcu+",
    "mYPkWO/cLq",
    "WQDgwCoOW4BcJxucfq",
    "WP/dIComgSo+",
    "WPVdJCkQWQpdNG",
    "W44gW5lcQuW",
    "ccvVWOdcLq",
    "h1hcNG3dO0FcRmko",
    "v8oQgdmPW7feCCoYbG",
    "WQ3dQI3dMb9/W4NdQ0fb",
    "W5ldICoQWQ/dHG",
    "W6RdUH3dKc5Z",
    "aSkhW6hdULextdC",
    "W4JcPSkQDq",
    "j8oxW7dcRYBcQ8oNmG",
    "qYtcNmo9W4JdQMBcGa",
    "W6/dNcldHq4",
    "W4xcQ8kNEmkPmXZcIW",
    "x8kQCmoGyG",
    "W6CIWRefueJdVIFdHSoI",
    "h1hcKWddO0FcRmkoW4K",
    "bdCfW44",
    "F0tdG8ojDuRdQ8kj",
    "nM0Nk8kTDKjx",
    "WQFcM8k9pSoO",
    "hmoFtCkPWRLJr8krW63dNW",
    "W455n8kYkq",
    "ddPssuBdVa",
    "W6NdSLWQuG",
    "ctOiW4pdVSkGDSk/",
    "W5dcKCo2W6tcNK3dKmoJ",
    "W4zIWOKxW4u",
    "a8o6wSkWxM3dNuSb",
    "AwPtWQLL",
    "AhisW4JdIGufghFdLvrrWRW",
    "z8kbW4JcHKS",
    "xCo1jSkZWR5BWQm/iq",
    "W4xcQ8kQDCkKpHhcHG",
    "WPPKW4HvkqdcTgq",
    "tINcNmo9W4JdQMBcGa",
    "p8k/w8k1hLxcRvGb",
    "bsxdGWKV",
    "vCk3emo7fIRcNqa",
    "putcIfSd",
    "W6uSWR4EBea",
    "EKVcLttdPCkVa0GfW7C",
    "W4xcQ8kNEmkPmXZcHG",
    "FxT9W67cKMS2rG",
    "gSoXumkYtgW",
    "bWfk",
    "WQ3cOgBcGhKxWQ3cLa",
    "p8objmkTo8oOfCog",
    "kSoAW73cOIVcPSoQmG",
    "W5tdMfypwa56W67dLW",
    "ACkcjCoZW4G+jSo4",
    "WRFcScr5aSkWur8",
    "fIddNrya",
    "WQHOxH3dOW",
    "W58bmh/cHvWqWQu",
    "WRBcK8kOW73cTNXrfW",
    "WQDgvmoLW4BcJxup",
    "aSkhW6ZdT1WAqtC",
    "W5FdKI7cSSk9",
    "q3WFdrhcTZXp",
    "p1GQBdK",
    "W4uBjMtcK09XW7lcSCo6n8oJ",
    "nSkbCCowW540W6D2wSoV",
    "hYRdRKBcJSofsYm",
    "W5JdGhe1Fq",
    "ESkvWRFdOM0",
    "bdOiW47dS8kTE8kY",
    "WQDPWPzura",
    "mSkYvSk1hLJcOfu",
    "W4JdIq3cJCkJ",
    "t0nPW7bR",
    "BwnMWQBcTq",
    "WQdcRwBcGhKAWQdcMs0",
    "ov/cNSoEwa",
    "k8ojWPFdRWhdQqNdUq",
    "WP/cVZX9iuDTmW",
    "W4VcSgX1EhhdHrbysq",
    "vCoFh8kDhSkVhea",
    "W5yzW5/cUfe",
    "W5zegCo8WOFdUW",
    "faO4WQhdSq",
    "WPPPW4vyja3cTgK",
    "WRTaWQBdRXj+WRKWW4K",
    "W5impxlcIfeDWQG",
    "W5BcUKfNsq",
    "WQxcPavtgvK2WP8",
    "WOP/oaZdKNKmpq",
    "kSoAW73cOIVcPSoQpW",
    "W6iqgCkLWPhdHZLc",
    "WPq2DSo9B8kLACk0",
    "WQJcPavEffK2WP8",
    "W4aDjgtdOdD1W6hcNSo3",
    "omojW6JcTZNcTmkEBMnJffO",
    "WQFcUehcJg8QWOiaCG",
    "lwlcLLmHW4JcMG8",
    "W4JcPSkQEmkPpHhcHG",
    "j8oAW73cOIVcPSoQmG",
    "W4hdRYNcTCkF",
    "WR3dJmk9WPBdQG",
    "W5dcKCo2W6tcNKddKmoJ",
    "gGH7W77dPW",
    "WPDKW4vyja3cTgK",
    "o2aNk8kTDK9A",
    "mWxcH8kcoba",
    "W7dcRMH1rq",
    "W7RdK8oZtCkFWPNdKSot",
    "ySkFEmorESkOwSkfWQ0c",
    "WPq2E8o9B8kOACk0",
    "W4LId8oJWOa",
    "xJ5QuCoR",
    "p8k/vSk4e1JcOfu",
    "CKNdJSoeEeFdPSke",
    "WPZdUbuIibVcRgC",
    "eIFdO0S",
    "WOP/nqhdN3qmpwq",
    "WQJcPavEffK2WPi",
    "W48gshxcQZf6vGzx",
    "W4JdPMuptq",
    "uw/cIvnPWOjmW40",
    "d8k0xCoIzW",
    "a8oWwCkytq",
    "C8oMWR7cMIW",
    "pIhdIGW3",
    "FSoOfcGWW7LgF8oEmW",
    "wCoIpY0U",
    "l8kcC0TTWOu8hq",
    "jMRcGG",
    "h8kGW43cR8kR",
    "W4xcQ8kQDCkKpHZcIW",
    "W7PRWR4R",
    "mCkSvCozAa",
    "BZRdTwdcPIldImo4WQ7dKG",
    "W6TJWQaPW4FdTZyKW5e",
    "W4RcLxDAxNtdVHvcya",
    "tSkTc8oJdthdNuKOmCo3qG",
    "W6ymgCkI",
    "j1JcR00Q",
    "WQZcSMldISoMgKdcTW",
    "aw/dKCk5WP/cOq",
    "CILOqSoc",
    "WOVdQCo0",
    "mdtcO8kroG",
    "wmk6emo2gYRcNqa",
    "jmkDFSoMEW",
    "chCqCtJdJSo7kW",
    "lCkKc8oFFIpdJXa",
    "pXxcImkglWhcJCogWOi+",
    "gWDPWQZcOa",
    "dhaVEJW",
    "bdCfW4pdVSkTE8kY",
    "W7/dPMK5vCo6hv8",
    "gWzdW4m4qa",
    "W4ddLeOBza",
    "duRdJMFcJJZdJSog",
    "B8oXWP/cPcu",
    "WQZcICk+W6BcOg89tt5sW73dJW",
    "bHHvW5BdVW",
    "quWqWRlcVNLVqG",
    "xCk0W6/cSZ/dV8oNwNPH",
    "aapdPd4l",
    "WR5lWRjSqG",
    "zgn8WPNcSa",
    "WQxcUmkKpSow",
    "bmo/uSkGWO0",
    "pbxdHcqO",
    "WRBcK8kLW7dcU3fCgG",
    "h8kMEmoXW6K",
    "WQdcRwBcJxqxWQdcLca",
    "k8ojzCk3WP94",
    "vbFdLeNcPr0",
    "su1VW6zk",
    "q3WFdrhcUJfpWOm",
    "DgPZW7HJWRVcK8othmoL",
    "W6uRC2RcIW",
    "o2aNk8kGE0jx",
    "xMmpWQrA",
    "WORdM8oklCoR",
    "teeqWR/cS3LVqG",
    "wmoFeSkqe8kIhea",
    "kgpcM00WW4lcNr5FW54",
    "W4W/W7eai8o9emku",
    "pwJdKSkWWQe",
    "oYJcHCkrgG",
    "W43dPSouzxuyW6XYWQBcOG",
    "W5VdMemnqG",
    "WOD1W51bobVdGJddKConW5BdUG",
    "W7FdK8oZtCkFWPNdKSot",
    "fmkgwmo2W7q",
    "F0tdJSojDuFdQ8kj",
    "zg47WPXf",
    "C1ZcRZddNq",
    "W55liSoRWOu",
    "W7OQW4ZcM24jW5jjWQfx",
    "WQJcPaHtgvq7WP8",
    "W4OiW4lcSLi",
    "wmosh8kDhSkVhea",
    "tmozWPtdO8onWPDUemkV",
    "fI0AWRRdTq",
    "tt1FpKNcImk7Cq",
    "s8k7WO/dP0BdO8ktw0jS",
    "emoEwCknBG",
    "shD4WOFcIW",
    "W53cNmo2W6tcNKddNCoU",
    "pI5BWORcKK8",
    "mSk/w8k4e1xcRvu",
    "ktmiW44dwh1Dl8oRWP4t",
    "tNesdrhcUJfp",
    "ru00WPTx",
    "e8k3Ea",
    "WPDgFZddTbPqW7i",
    "AcJdLbfDWOpdL1u",
    "fczYWQ/cLW",
    "fGTdW4m4qf9Y",
    "vCk3emo7fIRcKa0",
    "z8kjW6VcKge",
    "W4eYW7enlSo9emku",
    "W44RxLNcGq",
    "W6RdImo5WPhdOa",
    "WPNdMSkSWOtdKGdcISkOW5FcKW",
    "W7VdK8oTFYm",
    "h1hcNG3dRKRcRmko",
    "zmkpkmoZW4GZk8o1",
    "WRRcScL0d8k9xb8",
    "hYRdO0VcG8oisYm",
    "eSkZzSo6W6qD",
    "B8oJWQhcKsS",
    "fGTdW4m4tv9Y",
    "WPhdTruIibVcOwC5",
    "fCktW73dOeHWjxddUeddRq",
    "W4JcNL5bsa",
    "W7NdGq7dOYa",
    "W74zW4FcIf4",
    "zsJdMrfDWO7dMLu",
    "fGToW441tv9Y",
    "iSkpC0TTWOuXea",
    "wxS4WP9p",
    "W4TmWP8CW58",
    "W7FdTWBdGsq",
    "WQPlwCoLW4BcGhGc",
    "WPqpwCk4W5dcVq9G",
    "WPKcwCk1W53cVq9G",
    "WRznWQBdRW",
    "WOXZWRfDySk/wW",
    "WQmKW6jR",
    "WRBcNSkOW7dcU3XCfW",
    "u8k9EmoeCa",
    "W5HXm8ksja",
    "vCk3hCo2gYFcKa0",
    "W6ZdTsNcP8kd",
    "qgLTWOhcTG",
    "cCoDESkxWPm",
    "h1hcKWddO0FcOCkd",
    "WPnSvZRdRG",
    "cxSixGxdHCoSoSogWOm",
    "mSk/w8k1hLxcRvu",
    "WQDgwCoOW4VcGhGc",
    "kZanW4OcfMrec8ofWPO",
    "umo4jSkZWR5B",
    "l8kpAmoQya",
    "WPNcSSknihvsWQCx",
    "DhDhW6T2",
    "W7hdRcdcJCk8",
    "W57cS1vREL0",
    "W4NcImk8WRxdLIRcRCkE",
    "aSkhW6hdULeAqtRcOa",
    "rfrEWQhcUq",
    "W4W/W7eai8o9hCkz",
    "W5pdSgeswa",
    "WPK7E8oWySkLzmk5",
    "u1HJWQhcQq",
    "maJcIG",
    "lIyfWQSWW73dGSk+",
    "W5fPpmobWQldSvK3WQNdUq",
    "iYyfWQSWW73dGSk+",
    "WQxcQqHtgvq2WPi",
    "zCoZcXeb",
    "hCowBSk3uq",
    "hYRdO0VcG8oirI4",
    "W6uHWRmEBe10W4O",
    "qYtcKCoWW4xdP2BcGa",
    "gCkHtCoRW6a",
    "W4uwWRmVE3FdMWxdLCoP",
    "WQhcV2ldISoMgK3cUG",
    "W6GagCkHWPhdHG",
    "W5miWOmasW",
    "W5BdGcRdUci",
    "WPNcSSknihvsWQOA",
    "FSknymoRE8kY",
    "WPDKW4vvkq3cTgK",
    "q3WsabZcUJXc",
    "qYtcKCo9W4JdP2VcJq",
    "W6pdHxCBrG",
    "W58mmh/cHvWDWQG",
    "W5BdTmonAs8u",
    "emkuW7NdOK4inwVdHxpdRbq",
    "f8k4Bmo4W6G6W6S",
    "WQdcRwVcJxqxWQ3cMq",
    "k8oeWPRdOGZdPaNdTa",
    "s21JW5Pc",
    "BY1buSo3",
    "W7fviComWPldOwW7WOxdTq",
    "WPZdQ8oPf8ob",
    "gIWQWQhdSsnQmSkOWQ4",
    "W6GHWR4EBeb0W4C",
    "WQZcP8kFomox",
    "jSoeWPFdRWhdQqNdUq",
    "zmkpkmoZW4GZk8o1WP8",
    "dSkjW5JcOSkLW4W0sSoEDa",
    "WQtcNmkXgSozW63cMmkzasm",
    "WRznWQBdRXj+WRqW",
    "iSkcFKzGWOGXhq",
    "Chz9W67cKMS7sW",
    "W5xdRSosWPFdOW",
    "W7eEvvxcOHjNucXE",
    "WQ4PW6jRWRRcRwXR",
    "WPvfrIZdKa",
    "WPtcV8knihvsWQOA",
    "WQBdRmkUWPBdNa",
    "AcJdLbfqWOpdMLG",
    "W6GHWRmtyu10W4C",
    "W5hdVtRcJmkk",
    "lmkPW6pcVCkf",
    "o2aNkW",
    "WOxcKSkOf8o+",
    "W5SRW60AoSkAECotyJpcNq",
    "tt1sm0tcHCk7FmkD",
    "EMemW5tdMr8uxq",
    "iCk7W5dcP8k7W6GgqSo1xG",
    "WPK7E8o9B8kOzmk5",
    "W77dUSo0DbK",
    "nciDW5CFqWSj",
    "bNtcO8k3u8oDz0bLiW",
    "fGTdW4m4qfj/",
    "eLZcNG3dRKRcOCkd",
    "WPlcSJXWleDTmW",
    "WQ3cOgVcJxqxWQ3cMq",
    "ymoajaO2W58",
    "WQNdNConnCo+",
    "xCo1k8k+WRnwWQ4/",
    "WRTaWQVdOH9ZWRqW",
    "AHFdP0BcVq",
    "WPqpwCk1W53cVqjT",
    "umoWWOpcMZL6jeNdMxi",
    "t8o1FmkFA3ldUq",
    "oepcUSo9wG",
    "WPq2E8oWySkOzmk5",
    "lISiWQSWW7ddJ8k+",
    "o20QjSkGE09x",
    "umo4jSk+WRnBWQmY",
    "E1/cNqZdIW",
    "smoXobytW6flwSoJmW",
    "WQmKW6jRWRRcRwfM",
    "xbNdTCkIkSoqlqS",
    "tNWFdrhcTZXp",
    "xSkBECoSsq",
    "zmkpjCo+W4u+k8o1",
    "vZzAFmoi",
    "D2WmW5q",
    "qd1FpKNcImk7Cq",
    "b8kFW5pcQSklW40",
    "W61hi8o8WOK",
    "WPhdTruIibVcRgC",
    "uJpdM3JcJa",
    "tCk2WOtdIMC",
    "q8kFW6JcO1BcVNlcMaX2",
    "WQmKW6jRWRRcRwXR",
    "WRZcICkyg8oK",
    "fGX6WRBcJG",
    "wCodWORcTGG",
    "WRVcNSkLW7dcU3frfW",
    "aSkhW6hdULexqtO",
    "WPlcSJf9leDTm0W",
    "WQFcUehcJg8QWO8a",
    "WPZdTrGVlrBcRgC",
    "WQdcN8kfhSomW5/cG8k+fdG",
    "iYyiWQy9W7ddGSkZ",
    "W57dLr7dHHq",
    "WPXoW4rLiq",
    "W6LFaSkwbG",
    "W6HnE8kYkSoPamo5arq",
    "z8koW5FcPq",
    "W7FdK8oZtCkFWPNdKSoEwW",
    "g1NcVCoJ",
    "xglcIvnPWOi",
    "W73dPNOBEa",
    "z8kUWQFdT0ZdJ8kIsgPv",
    "quWqWRlcS3rIqMi",
    "FLVcVY/dHq",
    "zSkvW5ZcOfVcOM/cTIDH",
    "nvNdICkpWOO",
    "WQ4PW6jRWRRcRwfM",
    "nM0QjSkGE09A",
    "W6uHWRmtyu10W4C",
    "AcJdMrXqWO7dMLG",
    "eaPoW7ddStqK",
    "W5impx/cHveqWQu",
    "cCktW5BcOCkWW405x8oP",
    "W58mmh/cHvWqWQG",
    "W786CfxcOG",
    "h2ddJ8kwWR0",
    "iHP3EgG",
    "W4ddNSoLqYW",
    "WPRcTmkMg8oT",
    "urtdTCkIj8oDiay",
    "mSomjmkGnSoOgmol",
    "WOP/nqhdN3qmpq",
    "WODYnqe",
    "WQmKW6jRWRRcOgXM",
    "WQpdSuGDCmo/pLddMsS",
    "BM5TWO1dcuza",
    "nmoSBCkSCW",
    "iNNcL8oGtW",
    "WQBdHCkQWONdQG",
    "l8kcFKzGWOGXea",
    "WRFcVsL0",
    "W4RdO8omEJqiW7bjWPu",
    "W7KQW7RcTfi1W45GWOnY",
    "W6RdUGldHXfOW41xna",
    "uKP5WQfi",
    "ACkckmoZW4u+jSo4",
    "W4JdK0qzya",
    "sSkGWQBdOfS",
    "WRLAWPrhtG",
    "l8kcC0TTWOuXea",
    "W7ryWOOHW5RdGtu4W6K",
    "W4u0swBcLZvGttre",
    "WPhdTruIibVcOwO",
    "zmoinCoSEYtdIHfKla",
    "W5WDlCkWWRm",
    "WQJcPaHtgvq2WPi",
    "W4JdTmohEZGz",
    "WPqpwCk1W53cVq",
    "WQhcV2/dH8oRf0dcUG",
    "f1NcRW",
    "W5impxlcHvWqWQu",
    "WPPPW4vvkq3cUwq",
    "quWDWR/cS3rItW",
    "WPJcNCk9h8om",
    "W4VdNLqtDq",
    "FNnaWO3cNG",
    "WQDgwCoOW4VcGhup",
    "W5HigCo/",
    "nmoaySkZWO4",
    "WR9SCsZdLq",
    "tt1sm0tcHCk7Fa",
    "FxT9W67cKMS7sW",
    "E2jyWRXF",
    "W6hdIc3cSSk5",
    "W7xdTsJcKmkG",
    "WQRcUeZcGwiNWO8n",
    "D2WbW5NdMr8zua",
    "mSomjmkGnSoOfCog",
    "W786svRcKa",
    "W4eYW7eai8o9hCkz",
    "WRVcNSkOW73cTNXCgG",
    "iSkCW7FcMCk0",
    "W4ZdMdRcKCkz",
    "kSoAW7dcRYBcQ8oQpW",
    "W6tdNSk6xSksWOVdISkzecC",
    "WPNcSSkalxHFWQOA",
    "W5JdOKWYDa",
    "W4RdJshdGsm",
    "W79cgSkzaa",
    "WQTgwW3dSG",
    "W5NdVSonFtqqW6W",
    "dxesBH7dMCoTpmokWPG",
    "WP/cSJf9iuPGmW",
    "nCk9W5dcHmksW7qQzCojvW",
    "l8ovq8kLWRm",
    "WPtcV8knia",
    "iG1TrNG",
    "WPDKW4vyja3cUwq",
    "kdfPWRtcGG",
    "mmo2sSkYsq",
    "jSoeWPFdRWhdQqtdTa",
    "W49VWO4SW64",
    "WQddKmo8i8oS",
    "WOD/oaZdKNKmma",
    "ACkcjCo+W4u+k8o1",
    "WPNcSSknihvsWQCAW5m",
    "W5vPWOiXW4q",
    "xCo1jSkZWR5BWQ4/",
    "W5KosvJcLW",
    "W6JdIchdLca",
    "qCouWPtdO8onWPDJea",
    "W4xcQ8kNDCkKpHhcHG",
    "W5qQW7RcQx4",
    "osiDW5OsqWSe",
    "xg/cHf5KWO9mW4a",
    "WRBcNSkOW73cTNXCfW",
    "WOn5WRfjECk7",
    "iMBcImoKBq",
    "WQRcTuhcGwiQWOin",
    "w8o4fImS",
    "W63dImo4WQFdHG",
    "W4ipW4VcKgS",
    "WQZcSMldH8oRgK3cUG",
    "W710m8oyWRJdUwWcWQ7dNa",
    "F0tdJSoeEeFdQ8kj",
    "WPK7DSo9B8kLzmk0",
    "W7ZdISoGWPtdUG",
    "WRTaWQBdRXj+WRqW",
    "tINcKCoWW4xdQMBcGa",
    "tt1FpKNcImk7Fa",
    "WOTmFHddRq",
    "W7RdNSo+tCkFWPtdN8ot",
    "WQ4PW69MWRFcOgXR",
    "W67dPZNdVJy",
    "dHDPWQ3cLq",
    "W67dUslcG8k8xa",
    "W4RdSNeYyW",
    "q3WFdrhcTZXc",
    "mmofB8kKWOm",
    "WRZcICkdj8oy",
    "W53cNmo2W6NcK0ddNCoU",
    "tt1Fm0tcHCk7Fa",
    "lhKKsqC",
    "W7BdI28QBq",
    "W5dcNmo7W6tcNK3dNCoJ",
    "W6JdQmoMDWS",
    "WRyaW6FcRaCrW5v3WOHF",
    "vmk1qCoaymkfD8k+WPGd",
    "WRVcNSkOW73cU3fCgG",
    "pvKRvsa",
    "z317WRxcSa",
    "WPhdTrGVlrBcRgC",
    "nM0Nk8kTDKjAfa",
    "WRFcVsL5aSk9xb8",
    "AcJdLbfDWO7dMLGW",
    "WPlcSJXWleDGpG",
    "tNesabZcTZXp",
    "d8kkW6hdULex",
    "WOpdSmoHraGkW4m",
    "W67dPdldIs8",
    "WOP/oahdN3Kmpq",
    "W53cNmo7W6tcNK3dNCoU",
    "nciDW5OsqWSj",
    "W40gWQm3FG",
    "W6NdTL4Sya",
    "sIRdSN3cLW",
    "WQFcUeZcGwiNWO8a",
    "W73dNSo/WR/dMq",
    "W6JdVGhdHtvS",
  ];
  C8 = function () {
    return Z;
  };
  return C8();
}
Zh(C7, "itemPickTension");
function C9(Z) {
  if (!Z || !Z.tpselect) {
    return null;
  } else {
    return Math.ceil(ZX.maxtension * Z.tpselect);
  }
}
function CZ(Z, C, pd) {
  return CU(pd - -114, C);
}
Zh(C9, "itemTargetTension");
C0();
const CC = {};
CC.A = [
  CZ(388, "WmW4", 454),
  CZ(701, "^LBK", 420),
  CZ(359, "zegm", 96),
  m(199, 147, "FXDS"),
  m(729, 719, "eC%)"),
  m(548, 448, "WmW4"),
  CZ(468, "g4yd", 314),
  CZ(120, "2@!(", 164),
  m(745, 662, "1KRj"),
  pS(1082, "hPR0", 1246),
  m(111, 236, "AK33"),
  m(-270, 109, "AUnv"),
  pS(1177, "r&bK", 1352),
  m(174, 534, "YMo^"),
  m(165, 260, "iKJU"),
];
CC.B = [
  CZ(437, "9XcN", 191),
  CZ(56, "G%hh", 334),
  pS(947, "]K^r", 693),
  m(103, 372, "g4yd"),
  pS(1244, "D9de", 1162),
  pS(1385, "r&bK", 1352),
  CZ(535, "WmW4", 160),
  m(288, 432, "YMo^"),
  pS(680, "AUnv", 667),
  m(834, 599, "K&bq"),
  m(444, 83, "Hv1W"),
  m(925, 582, "ve67"),
  CZ(607, "hKuR", 504),
  CZ(3, "6HNT", 188),
  pS(1546, "Mt2w", 1398),
];
CC.C = [
  m(516, 556, "AUnv"),
  CZ(126, "p0PV", 494),
  m(25, 382, "2@!("),
  m(512, 549, "d3^T"),
  pS(953, "8wi2", 874),
  CZ(912, "R56*", 740),
  pS(901, "PZNe", 1168),
  pS(638, "eC%)", 999),
  CZ(658, "ezFd", 724),
  pS(621, "wjU!", 725),
  m(406, 369, "p0PV"),
  pS(1304, "Hv1W", 968),
  pS(710, "yL^w", 647),
  CZ(262, "9XcN", 216),
  CZ(927, "nyC[", 619),
];
CC.D = [
  pS(882, "6HNT", 765),
  pS(1217, "1KRj", 1220),
  m(471, 287, "FRwd"),
  m(-5, 277, "aOJ3"),
  pS(1476, "eC%)", 1277),
  pS(1412, "6HNT", 1174),
  pS(1194, "vkHp", 983),
  pS(990, "p0PV", 678),
  pS(752, "g4yd", 930),
  pS(376, "]K^r", 693),
  pS(824, "aOJ3", 835),
  m(40, 425, "vkHp"),
  pS(1451, "U6b0", 1393),
  CZ(647, "PZNe", 756),
  m(130, 216, "wjU!"),
];
CC.E = [
  CZ(417, "Fa(&", 626),
  pS(469, "hPR0", 640),
  m(814, 528, "c)qH"),
  CZ(279, "ve67", 226),
  pS(523, "nyC[", 674),
  pS(741, "nyC[", 674),
  m(607, 357, "1KRj"),
  CZ(645, "YMo^", 374),
  CZ(700, "FXDS", 754),
  CZ(297, "G%hh", 433),
  m(176, 197, "g4yd"),
  CZ(-102, "8wi2", 258),
  CZ(483, "hPR0", 435),
  m(63, 172, "FRwd"),
  m(745, 646, "Hx]0"),
];
CC.F = [
  m(673, 694, "nyC["),
  pS(1514, "AK33", 1380),
  pS(1078, "R56*", 1356),
  CZ(338, "c)qH", 470),
  CZ(867, "FXDS", 754),
  CZ(28, "r&bK", 120),
  CZ(-61, "ezFd", 287),
  m(455, 658, "AX6$"),
  pS(1052, "r&bK", 736),
  pS(436, "r&bK", 736),
  pS(643, "yL^w", 957),
  m(253, 284, "ve67"),
  m(36, 192, "FRwd"),
  m(566, 202, "D9de"),
  pS(1374, "Fa(&", 1143),
];
CC.G = [
  pS(821, "g4yd", 670),
  CZ(1066, "aOJ3", 772),
  pS(831, "AUnv", 667),
  CZ(55, "BFt8", 323),
  pS(1146, "c)qH", 1086),
  CZ(1091, "R56*", 740),
  CZ(151, "AK33", 92),
  m(72, 79, "BFt8"),
  CZ(251, "]K^r", 427),
  CZ(-89, "aOJ3", 219),
  CZ(218, "tR!$", 473),
  CZ(960, "ezFd", 741),
  pS(1597, "r&bK", 1352),
  pS(1160, "r&bK", 1108),
  CZ(314, "Hx]0", 637),
];
CC.H = [
  pS(383, "AX6$", 634),
  pS(1151, "wjU!", 1087),
  CZ(856, "M8Cd", 506),
  m(207, 445, "aH&L"),
  pS(1379, "r&bK", 1352),
  m(1131, 835, "U6b0"),
  pS(996, "D]l!", 1215),
  pS(1027, "8wi2", 1153),
  m(145, 91, "BFt8"),
  m(335, 277, "aOJ3"),
  m(715, 604, "D9de"),
  m(388, 287, "FRwd"),
  pS(870, "2@!(", 940),
  m(657, 520, "Fa(&"),
  pS(948, "2@!(", 940),
];
CC.I = [
  pS(1186, "g4yd", 964),
  pS(1385, "aH&L", 1176),
  CZ(466, "BFt8", 628),
  m(-39, 301, "g4yd"),
  m(683, 664, "ezFd"),
  pS(1272, "K&bq", 955),
  pS(1178, "6HNT", 1365),
  m(513, 781, "kzq&"),
  pS(1016, "D]l!", 1298),
  CZ(313, "Fa(&", 675),
  m(987, 817, "aH&L"),
  CZ(795, "kzq&", 723),
  CZ(623, "p0PV", 780),
  m(602, 550, "r&bK"),
  pS(909, "^LBK", 1036),
];
CC.J = [
  CZ(659, "ko)A", 436),
  pS(1090, "AUnv", 771),
  m(30, 233, "Mt2w"),
  CZ(74, "Mt2w", 175),
  m(682, 393, "ve67"),
  CZ(364, "vkHp", 554),
  pS(1190, "aH&L", 1033),
  pS(890, "WmW4", 704),
  CZ(324, "ve67", 335),
  m(150, 468, "kzq&"),
  m(527, 500, "yL^w"),
  CZ(38, "AK33", 296),
  CZ(403, "D9de", 546),
  m(849, 822, "AK33"),
  m(391, 469, "ve67"),
];
CC.K = [
  CZ(479, "1KRj", 644),
  CZ(16, "6HNT", 95),
  pS(971, "Hv1W", 733),
  CZ(675, "wjU!", 365),
  pS(856, "K&bq", 715),
  pS(561, "ko)A", 884),
  m(646, 330, "WmW4"),
  CZ(622, "hPR0", 472),
  CZ(462, "Hv1W", 702),
  CZ(648, "D9de", 743),
  pS(796, "8wi2", 1103),
  CZ(649, "p0PV", 629),
  CZ(-189, "AK33", 42),
  pS(1310, "aH&L", 1196),
  CZ(349, "Fa(&", 328),
];
CC.L = [
  pS(586, "U6b0", 827),
  CZ(543, "YMo^", 720),
  CZ(292, "AUnv", 184),
  CZ(501, "yL^w", 341),
  pS(1378, "2@!(", 994),
  CZ(-94, "XQQ)", 23),
  CZ(471, "YMo^", 720),
  m(238, 202, "D9de"),
  m(691, 789, "]K^r"),
  CZ(6, "U6b0", 211),
  m(169, 491, "G%hh"),
  CZ(14, "K&bq", 356),
  m(29, 269, "U6b0"),
  m(333, 172, "FRwd"),
  CZ(291, "d3^T", 607),
];
CC.M = [
  m(-193, 135, "]K^r"),
  pS(1186, "D]l!", 905),
  m(57, 274, "9XcN"),
  CZ(54, "Xb3o", 94),
  CZ(628, "U6b0", 739),
  CZ(571, "tR!$", 473),
  m(243, 135, "]K^r"),
  m(691, 371, "G%hh"),
  CZ(808, "r&bK", 736),
  CZ(588, "FRwd", 229),
  CZ(249, "^LBK", 404),
  m(581, 425, "vkHp"),
  CZ(184, "Hv1W", 25),
  m(578, 835, "U6b0"),
  CZ(454, "D]l!", 119),
];
CC.N = [
  pS(1125, "vkHp", 983),
  pS(991, "BFt8", 649),
  m(166, 140, "yL^w"),
  m(474, 674, "1KRj"),
  m(913, 681, "c)qH"),
  CZ(967, "hPR0", 699),
  CZ(168, "AUnv", 496),
  pS(1188, "p0PV", 1035),
  CZ(371, "Hv1W", 80),
  pS(642, "G%hh", 943),
  m(396, 661, "zegm"),
  pS(1422, "Xb3o", 1285),
  m(983, 616, "6HNT"),
  m(814, 448, "WmW4"),
  m(326, 616, "6HNT"),
];
CC.O = [
  CZ(-74, "iKJU", 135),
  pS(912, "hPR0", 640),
  m(600, 588, "9XcN"),
  CZ(416, "Hx]0", 757),
  CZ(496, "9XcN", 530),
  CZ(552, "Hx]0", 757),
  CZ(84, "p0PV", 62),
  m(958, 599, "K&bq"),
  CZ(1017, "eC%)", 661),
  m(851, 534, "YMo^"),
  m(576, 815, "Hx]0"),
  pS(1009, "yL^w", 647),
  m(656, 673, "nyC["),
  pS(1346, "d3^T", 1223),
  m(693, 791, "d3^T"),
];
CC.P = [
  pS(1481, "AX6$", 1216),
  CZ(546, "kzq&", 440),
  CZ(-273, "AX6$", 18),
  CZ(67, "d3^T", 415),
  m(834, 604, "D9de"),
  m(554, 371, "G%hh"),
  CZ(605, "D9de", 546),
  CZ(362, "zegm", 136),
  CZ(779, "Mt2w", 782),
  m(274, 633, "Mt2w"),
  pS(1001, "zegm", 1385),
  CZ(130, "vkHp", 281),
  m(109, 352, "9XcN"),
  pS(1205, "Mt2w", 1191),
  pS(1222, "8wi2", 874),
];
CC.Q = [
  pS(662, "6HNT", 813),
  pS(1156, "tR!$", 1257),
  pS(1104, "ezFd", 1357),
  pS(1300, "r&bK", 1352),
  m(797, 688, "hPR0"),
  pS(340, "Hv1W", 641),
  CZ(545, "ezFd", 741),
  pS(1181, "D9de", 1162),
  CZ(-234, "FXDS", 89),
  pS(858, "D9de", 1162),
  m(1170, 808, "ko)A"),
  m(528, 447, "iKJU"),
  m(198, 139, "vkHp"),
  CZ(840, "c)qH", 555),
  CZ(375, "Fa(&", 474),
];
CC.R = [
  pS(820, "U6b0", 753),
  m(631, 465, "R56*"),
  pS(829, "U6b0", 673),
  pS(1588, "r&bK", 1243),
  pS(454, "tR!$", 810),
  m(205, 191, "XQQ)"),
  CZ(757, "1KRj", 426),
  pS(1184, "ve67", 1283),
  m(206, 540, "ezFd"),
  m(108, 273, "M8Cd"),
  CZ(422, "kzq&", 183),
  CZ(-100, "ko)A", 173),
  pS(1579, "Hv1W", 1286),
  pS(888, "Xb3o", 913),
  m(461, 241, "kzq&"),
];
CC.S = [
  m(234, 264, "ezFd"),
  m(402, 646, "Hx]0"),
  m(544, 520, "Fa(&"),
  m(-188, 192, "FRwd"),
  CZ(850, "c)qH", 470),
  pS(1002, "hPR0", 1051),
  m(264, 249, "9XcN"),
  pS(861, "AK33", 895),
  CZ(187, "^LBK", 85),
  pS(1178, "G%hh", 1323),
  m(484, 104, "Hv1W"),
  CZ(690, "d3^T", 466),
  m(975, 603, "1KRj"),
  pS(1143, "8wi2", 1153),
  m(786, 647, "aOJ3"),
];
CC.T = [
  CZ(599, "YMo^", 708),
  CZ(557, "ve67", 514),
  m(180, 209, "R56*"),
  m(901, 655, "eC%)"),
  pS(1565, "tR!$", 1209),
  m(497, 118, "ve67"),
  CZ(955, "ezFd", 606),
  CZ(404, "8wi2", 278),
  CZ(983, "kzq&", 723),
  pS(740, "nyC[", 816),
  m(616, 837, "]K^r"),
  m(1219, 838, "p0PV"),
  pS(1091, "yL^w", 956),
  pS(1329, "9XcN", 1306),
  CZ(973, "tR!$", 593),
];
CC.U = [
  m(284, 534, "YMo^"),
  pS(773, "p0PV", 678),
  m(186, 109, "AUnv"),
  CZ(545, "r&bK", 736),
  CZ(302, "WmW4", 390),
  CZ(513, "wjU!", 471),
  pS(1218, "aH&L", 1003),
  m(964, 640, "XQQ)"),
  CZ(371, "tR!$", 473),
  m(112, 120, "p0PV"),
  CZ(1045, "ezFd", 741),
  CZ(49, "aH&L", 387),
  CZ(24, "iKJU", 202),
  pS(1049, "aH&L", 1176),
  pS(1047, "AK33", 1378),
];
CC.V = [
  CZ(658, "2@!(", 324),
  pS(1452, "D9de", 1162),
  m(114, 135, "]K^r"),
  pS(795, "yL^w", 647),
  CZ(838, "Xb3o", 669),
  CZ(711, "ko)A", 750),
  CZ(961, "hPR0", 630),
  CZ(695, "Mt2w", 406),
  pS(636, "2@!(", 940),
  m(504, 562, "hKuR"),
  pS(857, "^LBK", 995),
  CZ(305, "p0PV", 333),
  CZ(417, "D]l!", 212),
  CZ(103, "c)qH", 156),
  pS(1538, "]K^r", 1395),
];
CC.W = [
  pS(1665, "U6b0", 1393),
  pS(1186, "1KRj", 1161),
  m(597, 794, "r&bK"),
  pS(1238, "eC%)", 1277),
  m(842, 473, "d3^T"),
  pS(791, "M8Cd", 1122),
  CZ(704, "6HNT", 558),
  m(644, 520, "Fa(&"),
  CZ(16, "D]l!", 119),
  m(729, 660, "kzq&"),
  CZ(331, "Xb3o", 94),
  m(691, 361, "nyC["),
  CZ(294, "1KRj", 604),
  m(416, 693, "M8Cd"),
  CZ(311, "^LBK", 404),
];
CC.X = [
  pS(921, "AX6$", 634),
  CZ(249, "aH&L", 387),
  m(260, 514, "R56*"),
  CZ(181, "9XcN", 186),
  CZ(326, "]K^r", 652),
  pS(745, "AX6$", 806),
  pS(1396, "p0PV", 1396),
  pS(882, "ezFd", 1222),
  CZ(351, "Hv1W", 434),
  CZ(140, "c)qH", 345),
  pS(803, "Hx]0", 1047),
  CZ(468, "K&bq", 541),
  CZ(817, "9XcN", 530),
  pS(447, "AK33", 794),
  m(337, 448, "WmW4"),
];
CC.Y = [
  pS(940, "BFt8", 649),
  CZ(715, "r&bK", 736),
  m(580, 529, "wjU!"),
  CZ(724, "Hx]0", 757),
  m(531, 363, "U6b0"),
  CZ(-188, "PZNe", 38),
  m(509, 609, "]K^r"),
  CZ(447, "zegm", 391),
  pS(995, "FRwd", 812),
  CZ(46, "8wi2", 278),
  pS(912, "hPR0", 792),
  pS(956, "g4yd", 859),
  m(611, 308, "FXDS"),
  pS(990, "U6b0", 785),
  pS(701, "2@!(", 709),
];
CC.Z = [
  pS(1293, "aOJ3", 1388),
  CZ(888, "aH&L", 560),
  m(-136, 106, "ezFd"),
  CZ(565, "d3^T", 508),
  CZ(481, "ko)A", 147),
  pS(1121, "hKuR", 1069),
  CZ(510, "r&bK", 275),
  pS(1096, "Xb3o", 1376),
  pS(1008, "iKJU", 1152),
  CZ(844, "R56*", 520),
  pS(975, "Fa(&", 1335),
  CZ(216, "FXDS", 167),
  pS(1609, "]K^r", 1347),
  CZ(321, "WmW4", 612),
  CZ(670, "XQQ)", 439),
];
CC["0"] = [
  CZ(422, "FXDS", 711),
  pS(632, "BFt8", 648),
  pS(585, "AUnv", 667),
  CZ(397, "c)qH", 76),
  pS(995, "AX6$", 985),
  pS(1391, "AUnv", 1151),
  CZ(460, "AX6$", 429),
  m(634, 823, "d3^T"),
  CZ(-234, "Hv1W", 104),
  pS(1506, "Hv1W", 1295),
  m(942, 688, "hPR0"),
  CZ(355, "2@!(", 324),
  CZ(259, "]K^r", 77),
  pS(1301, "^LBK", 1036),
  pS(1310, "1KRj", 1075),
];
CC["1"] = [
  pS(1125, "kzq&", 1339),
  CZ(409, "p0PV", 656),
  CZ(311, "aH&L", 671),
  m(120, 365, "WmW4"),
  m(557, 838, "p0PV"),
  pS(708, "AX6$", 824),
  CZ(10, "Mt2w", 83),
  pS(1251, "XQQ)", 1065),
  m(223, 206, "PZNe"),
  pS(1310, "Fa(&", 1291),
  CZ(-218, "ve67", 60),
  pS(878, "G%hh", 631),
  pS(1098, "PZNe", 764),
  m(9, 136, "ezFd"),
  pS(637, "M8Cd", 803),
];
CC["2"] = [
  pS(1045, "hPR0", 1183),
  m(500, 613, "c)qH"),
  CZ(399, "XQQ)", 582),
  pS(1052, "WmW4", 704),
  CZ(799, "R56*", 579),
  m(402, 706, "]K^r"),
  pS(1193, "p0PV", 1262),
  pS(793, "AUnv", 1009),
  pS(921, "FRwd", 1202),
  pS(941, "Hx]0", 686),
  m(506, 242, "AUnv"),
  pS(1080, "vkHp", 897),
  pS(1110, "aH&L", 976),
  CZ(377, "aH&L", 560),
  pS(912, "Hv1W", 937),
];
CC["3"] = [
  pS(775, "BFt8", 768),
  CZ(555, "kzq&", 440),
  m(646, 799, "ezFd"),
  m(122, 475, "aH&L"),
  pS(1205, "c)qH", 882),
  CZ(632, "zegm", 380),
  pS(1541, "U6b0", 1394),
  m(440, 170, "zegm"),
  m(338, 240, "iKJU"),
  pS(1273, "Xb3o", 1201),
  m(576, 233, "Mt2w"),
  pS(1567, "AUnv", 1311),
  m(810, 616, "6HNT"),
  CZ(633, "kzq&", 440),
  m(704, 648, "c)qH"),
];
CC["4"] = [
  m(52, 91, "BFt8"),
  m(828, 563, "PZNe"),
  m(377, 236, "AK33"),
  CZ(448, "M8Cd", 506),
  m(-218, 134, "c)qH"),
  pS(1329, "ezFd", 1357),
  m(996, 727, "Xb3o"),
  pS(347, "FRwd", 730),
  m(365, 380, "R56*"),
  CZ(48, "D9de", 412),
  CZ(328, "eC%)", 238),
  CZ(348, "aH&L", 417),
  CZ(965, "wjU!", 684),
  pS(1281, "G%hh", 1323),
  pS(903, "Fa(&", 829),
];
CC["5"] = [
  CZ(486, "ko)A", 397),
  CZ(392, "1KRj", 604),
  CZ(518, "8wi2", 258),
  m(205, 128, "Hx]0"),
  pS(1016, "ezFd", 1340),
  pS(621, "U6b0", 827),
  CZ(588, "eC%)", 533),
  CZ(396, "K&bq", 157),
  CZ(6, "tR!$", 17),
  m(799, 765, "G%hh"),
  m(707, 393, "ve67"),
  CZ(409, "r&bK", 203),
  pS(1466, "D9de", 1162),
  pS(688, "BFt8", 648),
  m(102, 456, "Mt2w"),
];
CC["6"] = [
  pS(853, "M8Cd", 1194),
  pS(1267, "^LBK", 1036),
  m(244, 514, "R56*"),
  pS(1298, "iKJU", 1188),
  pS(1682, "YMo^", 1336),
  pS(1484, "]K^r", 1347),
  m(488, 201, "FRwd"),
  m(171, 406, "g4yd"),
  m(767, 514, "R56*"),
  CZ(796, "PZNe", 505),
  CZ(369, "ko)A", 750),
  pS(1072, "r&bK", 1352),
  CZ(281, "BFt8", 33),
  CZ(223, "ko)A", 397),
  m(366, 210, "BFt8"),
];
CC["7"] = [
  pS(1077, "PZNe", 1372),
  CZ(33, "FRwd", 114),
  pS(1352, "R56*", 1195),
  pS(1204, "zegm", 996),
  m(565, 771, "K&bq"),
  pS(1372, "WmW4", 1247),
  pS(452, "ko)A", 682),
  CZ(628, "FRwd", 727),
  pS(1240, "g4yd", 859),
  m(407, 149, "ko)A"),
  CZ(984, "p0PV", 780),
  CZ(698, "vkHp", 316),
  pS(649, "AX6$", 824),
  CZ(489, "]K^r", 779),
  CZ(79, "YMo^", 447),
];
CC["8"] = [
  pS(1280, "U6b0", 971),
  m(117, 184, "FXDS"),
  m(173, 177, "D]l!"),
  CZ(-34, "AX6$", 18),
  m(393, 382, "2@!("),
  m(-260, 91, "BFt8"),
  pS(1199, "r&bK", 1064),
  CZ(872, "tR!$", 641),
  CZ(366, "BFt8", 33),
  pS(772, "G%hh", 929),
  m(638, 835, "U6b0"),
  pS(1124, "D9de", 1162),
  pS(514, "BFt8", 649),
  CZ(882, "eC%)", 770),
  CZ(255, "M8Cd", 578),
];
CC["9"] = [
  m(892, 695, "Hx]0"),
  m(562, 478, "^LBK"),
  pS(862, "D9de", 1162),
  pS(1521, "r&bK", 1352),
  CZ(328, "M8Cd", 506),
  m(469, 534, "YMo^"),
  m(312, 588, "9XcN"),
  pS(1238, "R56*", 938),
  CZ(690, "^LBK", 493),
  CZ(689, "9XcN", 375),
  CZ(1002, "K&bq", 722),
  m(633, 504, "AX6$"),
  CZ(689, "Fa(&", 462),
  pS(447, "zegm", 752),
  CZ(617, "tR!$", 550),
];
CC["-"] = [
  m(362, 542, "aOJ3"),
  pS(896, "aOJ3", 1100),
  m(525, 199, "^LBK"),
  pS(1449, "AUnv", 1271),
  pS(1141, "9XcN", 1371),
  m(362, 145, "D9de"),
  pS(395, "g4yd", 656),
  pS(931, "Mt2w", 655),
  pS(1294, "yL^w", 1148),
  CZ(577, "wjU!", 632),
  m(716, 416, "XQQ)"),
  m(567, 803, "Xb3o"),
  m(74, 310, "G%hh"),
  m(969, 711, "YMo^"),
  CZ(965, "YMo^", 653),
];
CC["."] = [
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "##",
  "##",
];
CC["!"] = [
  "##",
  "##",
  "##",
  "##",
  "##",
  "##",
  "##",
  "##",
  "##",
  "##",
  "##",
  "..",
  "..",
  "##",
  "##",
];
CC["'"] = [
  "##",
  "##",
  "##",
  "##",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
  "..",
];
CC["?"] = [
  CZ(385, "YMo^", 372),
  pS(713, "9XcN", 832),
  CZ(271, "aOJ3", 219),
  pS(829, "ezFd", 664),
  pS(659, "kzq&", 1026),
  m(408, 123, "^LBK"),
  CZ(356, "AX6$", 75),
  m(-122, 185, "nyC["),
  CZ(351, "U6b0", 169),
  m(311, 141, "Mt2w"),
  CZ(785, "p0PV", 780),
  pS(1146, "d3^T", 1068),
  CZ(80, "6HNT", 111),
  CZ(246, "BFt8", 628),
  pS(830, "YMo^", 1063),
];
CC[" "] = [
  CZ(-73, "FRwd", 110),
  m(-67, 176, "FXDS"),
  m(740, 481, "r&bK"),
  m(859, 516, "]K^r"),
  CZ(589, "Fa(&", 674),
  m(501, 565, "M8Cd"),
  pS(814, "d3^T", 960),
  CZ(291, "aH&L", 570),
  CZ(330, "kzq&", 342),
  CZ(331, "d3^T", 344),
  CZ(486, "]K^r", 458),
  pS(863, "BFt8", 1131),
  pS(1091, "2@!(", 830),
  m(607, 400, "kzq&"),
  CZ(64, "kzq&", 342),
];
var Cp = CC;
var Ce = 15;
var Cu = 58;
var Cm = {};
function CB(Z) {
  function C(pG, px, pr) {
    return CZ(pG - 364, pr, pG - 516);
  }
  function pd(pG, px, pr) {
    return CZ(pG - 98, px, pr - 585);
  }
  const pE = {
    [pK(769, 424, "WmW4")]: function (pG, px) {
      return pG < px;
    },
    [C(852, 1035, "G%hh")]: function (pG, px) {
      return pG < px;
    },
    [pK(803, 1134, "c)qH")]: function (pG, px) {
      return pG - px;
    },
    [C(1268, 1297, "WmW4")]: function (pG, px) {
      return pG !== px;
    },
  };
  pE[pK(538, 548, "AX6$")] = pK(807, 571, "K&bq");
  pE[pd(1482, "BFt8", 1283)] = function (pG, px) {
    return pG === px;
  };
  pE[pd(1005, "FRwd", 987)] = function (pG, px) {
    return pG < px;
  };
  const pg = pE;
  let pq = Z[0][pd(888, "g4yd", 730)];
  if (pg[C(565, 234, "r&bK")](pq, 6)) {
    return Z;
  }
  function pK(pG, px, pr) {
    return CZ(pG - 374, pr, pG - 59);
  }
  let pP = -1;
  let pV = 99;
  for (let pG = 2; pg[pd(1186, "p0PV", 822)](pG, pg[pK(820, 561, "D9de")](pq, 2)); pG++) {
    if (pg[pd(880, "ko)A", 1193)](pg[pK(683, 490, "1KRj")], pg[pd(839, "9XcN", 750)])) {
      let px = 0;
      while (px < pP() && pV.char[px] && pG.charauto[N.char[px]] === 1) {
        px++;
      }
      if (px > 0 && px < o() && pG.char[px]) {
        v.charturn = px;
      }
    } else {
      let pr = 0;
      for (let pM of Z) {
        if (pg[pd(688, "zegm", 615)](pM[pG], "#")) {
          pr++;
        }
      }
      if (pg[C(1121, 1048, "AUnv")](pr, pV)) {
        pV = pr;
        pP = pG;
      }
    }
  }
  return Z[pd(1138, "XQQ)", 894)](
    (ph) => ph[pK(718, 545, "2@!(")](0, pP) + ph[C(682, 725, "6HNT")](pP + 1),
  );
}
Zh(CB, pS(440, "tR!$", 724));
var CX = {};
function CS(Z, C) {
  const pd = {
    ggaGA: function (pG, px) {
      return pG === px;
    },
    yHlQW: pV(-180, -465, "FXDS"),
    OUInt: pE("AK33", 923, 987),
    PNLlF: function (pG, px) {
      return pG === px;
    },
    bfqGd: function (pG, px) {
      return pG === px;
    },
    xgEbw: function (pG, px) {
      return pG(px);
    },
    gwEvp: function (pG, px) {
      return pG(px);
    },
    ZiHQT: function (pG, px) {
      return pG + px;
    },
    pRRwf: function (pG, px) {
      return pG * px;
    },
    ZlCQW: function (pG, px) {
      return pG - px;
    },
  };
  function pE(pG, px, pr) {
    return m(pG - 115, px - 634, pG);
  }
  let pg = [...pd[pP(-32, -236, "M8Cd")](String, Z)[pP(-472, -280, "YMo^") + "e"]()][
    pE("FRwd", 933, 1047)
  ]((pG) => {
    function px(ph, pR, pD) {
      return pP(ph - 79, pD - 251, pR);
    }
    function pr(ph, pR, pD) {
      return pP(ph - 309, pR - 105, ph);
    }
    function pM(ph, pR, pD) {
      return pP(ph - 416, pR - 654, ph);
    }
    if (pd[pM("r&bK", 341, 237)](pd[pM("AK33", 321, 530)], pd[px(101, "FRwd", 136)])) {
      let ph = ZU.monsterinstance[ZO];
      let pR = ZL(ZH.char[Zy.charturn]);
      let pD = this.actinfo(ZY);
      if (ph && !ph.destroyed) {
        if (pR === 1) {
          ph.acting = Zj + 1;
        } else if (pR === 2) {
          ph.actingsus = Zb + 1;
        } else if (pR === 3) {
          ph.actingral = ZI + 1;
        } else if (pR === 4) {
          ph.actingnoe = Zf + 1;
        }
      }
      if (pR === 1) {
        let e0 = C3();
        C4.actingsimul[e0] = pD.simul.get(C5);
        C6.acting[e0] = 1;
        C7.actingsingle[e0] = 1;
        C8.actingtarget[C9.charturn] = CZ;
        let e1 = (CC.actactor[Cp] || [])[Cu];
        let e2 = (e3) => Cb(e3);
        if (e1 === 2 && e2(2) >= 0) {
          CB.acting[e2(2)] = 1;
        }
        if (e1 === 3 && e2(3) >= 0) {
          CX.acting[e2(3)] = 1;
        }
        if (e1 === 4) {
          if (CS.char[2]) {
            CU.acting[2] = 1;
          }
          if (CO.char[1]) {
            CL.acting[1] = 1;
          }
        }
        if (e1 === 5 && e2(4) >= 0) {
          CH.acting[e2(4)] = 1;
        }
        for (let e3 = 0; e3 < 3; e3++) {
          if (Cb.acting[e3] === 1) {
            CI.faceaction[e3] = 6;
            Cf.charaction[e3] = 9;
          }
        }
      } else {
        ZV.actingtarget[ZG.charturn] = Zx;
        Zr.actingsingle[ZM.charturn] = 1;
        Zs.actingsimul[Zh.charturn] = pD.simul.get(ZR);
        ZD.faceaction[C0.charturn] = 6;
        C1.charaction[C2.charturn] = 9;
      }
    } else {
      let e4 = Cp[pG] || Cp[" "];
      if (C) {
        if (pd[pr("hKuR", 64, -38)](C, 2)) {
          return (CX[pG] ||= pd[px(72, "Mt2w", -170)](pG, " ")
            ? e4[pM("eC%)", 781, 862)]((e5) => e5[pM("G%hh", 829, 634)](0, 2))
            : pd[px(-157, "8wi2", -101)](CB, (Cm[pG] ||= pd[px(130, "wjU!", 167)](CB, e4))));
        } else {
          return (Cm[pG] ||= pd[pr("XQQ)", -67, -156)](CB, e4));
        }
      } else {
        return e4;
      }
    }
  });
  let pq = pd[pP(4, 11, "AUnv")](
    pg[pV(-189, -437, "aH&L")]((pG, px) => pG + px[0][pE("zegm", 931, 779)], 0),
    pd[pV(-137, -472, "M8Cd")](
      1,
      Math[pE("p0PV", 919, 901)](0, pd[pP(-181, 43, "kzq&")](pg[pP(-302, -284, "R56*")], 1)),
    ),
  );
  const pK = {};
  function pP(pG, px, pr) {
    return m(pG - 222, px - -611, pr);
  }
  pK[pE("6HNT", 737, 956)] = pg;
  pK.w = pq;
  function pV(pG, px, pr) {
    return m(pG - 497, pG - -778, pr);
  }
  return pK;
}
Zh(CS, m(589, 495, "ve67"));
function Ci(Z) {
  function C(pg, pq, pK) {
    return pS(pg - 59, pg, pK - -1220);
  }
  const pd = {
    lRjkY: function (pg, pq, pK) {
      return pg(pq, pK);
    },
    RaOUK: function (pg, pq, pK) {
      return pg(pq, pK);
    },
  };
  function pE(pg, pq, pK) {
    return pS(pg - 466, pK, pq - -792);
  }
  return {
    w: pd[pE(-241, -63, "ko)A")](CS, Z, !1).w,
    narrow: pd[pE(-164, 68, "AK33")](CS, Z, !0).w,
  };
}
function CU(pd, pE) {
  pd = pd - 128;
  const pg = C8();
  let pq = pg[pd];
  if (CU.eJXDtZ === undefined) {
    function pK(px) {
      const pr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let pM = "";
      let ph = "";
      for (
        let pR = 0, pD, e0, e1 = 0;
        (e0 = px.charAt(e1++));
        ~e0 && ((pD = pR % 4 ? pD * 64 + e0 : e0), pR++ % 4)
          ? (pM += String.fromCharCode((pD >> ((pR * -2) & 6)) & 255))
          : 0
      ) {
        e0 = pr.indexOf(e0);
      }
      for (let e2 = 0, e3 = pM.length; e2 < e3; e2++) {
        ph += "%" + ("00" + pM.charCodeAt(e2).toString(16)).slice(-2);
      }
      return decodeURIComponent(ph);
    }
    const pG = function (px, pr) {
      let pM = [];
      let ph = 0;
      let pR;
      let pD = "";
      px = pK(px);
      let e0;
      for (e0 = 0; e0 < 256; e0++) {
        pM[e0] = e0;
      }
      for (e0 = 0; e0 < 256; e0++) {
        ph = (ph + pM[e0] + pr.charCodeAt(e0 % pr.length)) % 256;
        pR = pM[e0];
        pM[e0] = pM[ph];
        pM[ph] = pR;
      }
      e0 = 0;
      ph = 0;
      for (let e1 = 0; e1 < px.length; e1++) {
        e0 = (e0 + 1) % 256;
        ph = (ph + pM[e0]) % 256;
        pR = pM[e0];
        pM[e0] = pM[ph];
        pM[ph] = pR;
        pD += String.fromCharCode(px.charCodeAt(e1) ^ pM[(pM[e0] + pM[ph]) % 256]);
      }
      return pD;
    };
    CU.bLeFUL = pG;
    CU.WXIoFa = {};
    CU.eJXDtZ = true;
  }
  const pP = pg[0];
  if (CU.yBxhYc !== pP) {
    CU.WXIoFa = {};
    CU.yBxhYc = pP;
  }
  const pV = CU.WXIoFa[pd];
  if (pV === undefined) {
    if (CU.pYXgXL === undefined) {
      CU.pYXgXL = true;
    }
    pq = CU.bLeFUL(pq, pE);
    CU.WXIoFa[pd] = pq;
  } else {
    pq = pV;
  }
  return pq;
}
Zh(Ci, pS(1234, "ezFd", 1025));
function CO(Z, C = Cu) {
  const pd = {
    NCbps: function (pM, ph) {
      return pM + ph;
    },
    JRkaM: function (pM, ph) {
      return pM + ph;
    },
    RwuyF: pg(1106, 1010, "PZNe"),
    mjzgx: function (pM, ph) {
      return pM(ph);
    },
    dlzkG: function (pM, ph) {
      return pM > ph;
    },
    CSYpf: function (pM, ph, pR) {
      return pM(ph, pR);
    },
    FRvkt: function (pM, ph) {
      return pM > ph;
    },
    bFoPJ: function (pM, ph, pR) {
      return pM(ph, pR);
    },
    jPPkd: pV("2@!(", 1755, 1698),
    RBqNS: pr(1215, 1076, "wjU!"),
    XzrNW: function (pM, ph) {
      return pM !== ph;
    },
    vXOSZ: pg(1404, 1519, "ve67"),
    VfRua: pg(1419, 1066, "ezFd"),
    JUAik: function (pM, ph) {
      return pM < ph;
    },
    ZNqdU: function (pM, ph) {
      return pM < ph;
    },
    pvAPv: function (pM, ph) {
      return pM === ph;
    },
    WBGQX: function (pM, ph) {
      return pM + ph;
    },
    PQShd: function (pM, ph) {
      return pM + ph;
    },
    mfbjb: function (pM, ph) {
      return pM - ph;
    },
    DvoGR: function (pM, ph) {
      return pM - ph;
    },
  };
  let pE = pd[pg(1535, 1347, "AUnv")](
    pd[pg(917, 984, "D9de")](
      pd[pr(516, 705, "FXDS")](
        pd[pr(468, 390, "8wi2")],
        pd[pg(1488, 1437, "ko)A")](String, Z)[pr(917, 578, "ezFd") + "e"](),
      ),
      "@",
    ),
    C,
  );
  if (ZY[pE]) {
    return pE;
  }
  function pg(pM, ph, pR) {
    return pS(pM - 231, pR, ph - 187);
  }
  if (pd[pr(595, 405, "aOJ3")](typeof document, "u")) {
    return null;
  }
  let pq = pd[pg(1162, 1067, "R56*")](CS, Z, !1);
  if (pd[pr(627, 621, "Fa(&")](pq.w, C)) {
    pq = pd[pg(1060, 1225, "Xb3o")](CS, Z, true);
  }
  if (pd[pV("K&bq", 1096, 1092)](pq.w, C)) {
    pq = pd[pV("d3^T", 1771, 1573)](CS, Z, 2);
  }
  let pK = 1;
  let pP = document[pg(923, 1050, "D]l!") + pr(588, 361, "8wi2")](pd[pV("XQQ)", 1347, 1028)]);
  pP[pV("eC%)", 1608, 1643)] = Math[pr(1213, 1509, "vkHp")](1, pq.w);
  pP[pV("Hv1W", 1329, 1305)] = Ce;
  function pV(pM, ph, pR) {
    return pS(pM - 62, pM, ph - 443);
  }
  let pG = pP[pr(796, 1166, "1KRj")]("2d");
  if (!pG) {
    return null;
  }
  pG[pr(675, 858, "d3^T")] = pd[pg(1007, 1025, "wjU!")];
  let px = 0;
  function pr(pM, ph, pR) {
    return pS(pM - 386, pR, pM - -174);
  }
  for (let pM of pq[pg(1121, 866, "AUnv")]) {
    if (pd[pV("nyC[", 1572, 1684)](pd[pr(1082, 706, "Hv1W")], pd[pV("M8Cd", 1612, 1396)])) {
      for (let ph = 0; pd[pV("eC%)", 1229, 1503)](ph, Ce); ph++) {
        let pR = pM[ph];
        for (let pD = 0; pd[pV("tR!$", 1536, 1452)](pD, pR[pr(1133, 1431, "iKJU")]); pD++) {
          if (pd[pV("6HNT", 1752, 2098)](pR[pD], "#")) {
            pG[pV("1KRj", 1304, 1603)](pd[pg(496, 839, "aH&L")](px, pD), ph, 1, 1);
          }
        }
      }
      px += pd[pg(1389, 1395, "hKuR")](pM[0][pV("yL^w", 1239, 1059)], pK);
    } else {
      let e0 = -1;
      let e1 = -1;
      this.pressbuffer = [5, 5, 5, 5];
      let e2 = -1;
      let e3 = 999;
      for (let e5 = 0; e5 < this.bolttotal; e5++) {
        if (this.boltalive[e5] === 1) {
          let e6 = this.boltframe[e5] - this.boltx;
          if (e6 < 15 && e6 > -5) {
            if (e6 === e3) {
              e0 = 1;
              e1 = e5;
            }
            if (e6 < e3) {
              e3 = e6;
              e2 = e5;
            }
          }
        }
      }
      let e4 = (e7) => {
        let e8 = this.boltchar[e7];
        let e9 = e3(e3);
        let eZ = px(
          this.x + 80 + this.boltframe[e7] * this.boltspeed - this.boltx * this.boltspeed,
          this.y + (this.rowh ?? 38) * (this.rowOf ? this.rowOf(e8) : e8),
          pM,
        );
        if (eZ.nomiss) {
          e9 = 0;
        }
        if (e9 === 0) {
          this.points[e8] += 150;
          eZ.image_blend = e8.yellow;
          eZ.mag = 0.2;
        }
        if (e9 === 1) {
          this.points[e8] += 120;
        }
        if (e9 === 2) {
          this.points[e8] += 110;
        }
        if (e9 >= 3) {
          this.points[e8] += 100 - E(e3) * 2;
          eZ.image_blend = this.boltcolor[e8];
        }
        if (e9 >= 15) {
          eZ.image_blend = this.charcolor[e8];
        }
        this.boltalive[e7] = 0;
      };
      if (e2 !== -1) {
        e4(e2);
        if (e0 === 1) {
          e4(e1);
        }
      }
    }
  }
  ZY[pE] = {
    name: pE,
    img: [pP],
    w: pP[pr(1055, 1303, "R56*")],
    h: Ce,
    ox: 0,
    oy: 0,
    frames: 1,
    bb: [
      0,
      0,
      pd[pg(1633, 1584, "D9de")](pP[pr(580, 889, "aOJ3")], 1),
      pd[pV("p0PV", 1762, 1388)](Ce, 1),
    ],
    precise: !1,
    masks: null,
  };
  return pE;
}
Zh(CO, CZ(252, "tR!$", 518));
var CL = class ev extends ZT {
  create() {
    this.spec = 0;
    this.delaytimer = 0;
    this.delay = 2;
    this.active = 0;
    this.damage = 0;
    this.bounces = 0;
    this.type = -1;
    this.stretch = 0.2;
    this.stretchgo = 1;
    this.lightf = ZQ(Zf.purple, Zf.white, 0.6);
    this.lightb = ZQ(Zf.aqua, Zf.white, 0.5);
    this.lightg = ZQ(Zf.lime, Zf.white, 0.5);
    this.lighty = ZQ(Zf.yellow, Zf.white, 0.3);
    this.aqcolor = ZQ(Zf.aqua, Zf.blue, 0.3);
    this.dkgreen = ZQ(Zf.green, Zf.black, 0.05);
    this.kill = 0;
    this.killtimer = 0;
    this.killactive = 0;
    Zn.with("obj_dmgwriter", (Z) => {
      if (Z.type !== 3) {
        Z.killtimer = 0;
      }
    });
    this.specialmessage = 0;
    this.stayincamera = ZX.chapter === 1 ? 0 : 1;
    this.xx = y();
  }
  draw(Z) {
    if (this.delaytimer < this.delay) {
      Zn.with("obj_dmgwriter", (C) => {
        C.killtimer = 0;
      });
    }
    this.delaytimer++;
    if (this.delaytimer === this.delay) {
      this.vspeed = -5 - Zo(2);
      this.hspeed = 10;
      this.vstart = this.vspeed;
      this.flip = 90;
    }
    if (this.delaytimer >= this.delay) {
      let C = Zf.white;
      if (this.type === 0) {
        C = this.lightb;
      }
      if (this.type === 1) {
        C = this.lightf;
      }
      if (this.type === 1.5) {
        C = this.dkgreen;
      }
      if (this.type === 2) {
        C = this.lightg;
      }
      if (this.type === 3) {
        C = Zf.lime;
      }
      if (this.type === 4) {
        C = Zf.red;
      }
      if (this.type === 5 && this.damage < 0) {
        C = Zf.ltgray;
      }
      if (this.type === 6) {
        C = this.lighty;
      }
      let pd = this.specialmessage;
      if (this.damage === 0) {
        pd = 1;
      }
      if (this.type === 4) {
        pd = 2;
      }
      if (this.type === 5 && this.damage === 100) {
        pd = 5;
      }
      if (this.type === 12) {
        pd = 10;
      }
      if (this.type === 13) {
        pd = 13;
        C = this.aqcolor;
      }
      if (this.hspeed > 0) {
        this.hspeed -= 1;
      }
      if (this.hspeed < 0) {
        this.hspeed += 1;
      }
      if (ZG(this.hspeed) < 1) {
        this.hspeed = 0;
      }
      if (pd === 0) {
        if (this.damagemessage === undefined) {
          this.damagemessage =
            this.type === 5
              ? (this.damage < 0 ? "" : "+") + String(this.damage) + "%"
              : String(this.damage);
        }
        let pE = this.type === 5 ? "spr_numbersfontbig_gold" : "spr_numbersfontbig";
        let pg = this.type === 5 ? "0123456789+-%" : "0123456789";
        Z.draw_set_halign("right");
        let pq = this.spec === 1 ? 90 : 0;
        Z.draw_spritefont(
          pE,
          pg,
          this.damagemessage,
          this.x + 30,
          this.y,
          2 - this.stretch,
          this.stretch + this.kill,
          C,
          Math.max(0, 1 - this.kill),
          0,
          true,
          pq,
        );
        Z.draw_set_halign("left");
      } else {
        let pK = {
          1: 0,
          2: 1,
          3: 2,
          4: 3,
          5: 5,
          6: 8,
          7: 9,
          8: 10,
          9: 11,
          10: 13,
          13: 14,
        };
        let pP = pK[pd] === undefined ? 3 : pK[pd];
        let pV =
          pd === 2 || pd === 10
            ? Zf.red
            : pd === 3 || pd === 4 || pd === 5
              ? Zf.lime
              : pd >= 6 && pd <= 9
                ? Zf.white
                : pd === 13
                  ? this.aqcolor
                  : C;
        Z.draw_sprite_ext(
          "spr_battlemsg",
          pP,
          this.x + 30,
          this.y,
          2 - this.stretch,
          this.stretch + this.kill,
          0,
          pV,
          Math.max(0, 1 - this.kill),
        );
      }
      if (this.bounces < 2) {
        this.vspeed += 1;
      }
      if (this.y > this.ystart && this.bounces < 2 && this.killactive === 0) {
        this.y = this.ystart;
        this.vspeed = this.vstart / 2;
        this.bounces++;
      }
      if (this.bounces >= 2 && this.killactive === 0) {
        this.vspeed = 0;
        this.y = this.ystart;
      }
      if (this.stretchgo === 1) {
        this.stretch += 0.4;
      }
      if (this.stretch >= 1.2) {
        this.stretch = 1;
        this.stretchgo = 0;
      }
      this.killtimer++;
      if (this.killtimer > 35) {
        this.killactive = 1;
      }
      if (this.killactive === 1) {
        this.kill += 0.08;
        this.y -= 4;
      }
      if (this.kill > 1) {
        this.instance_destroy();
      }
    }
    if (ZX.fighting === 1 && this.stayincamera === 1 && this.x >= this.xx + 600) {
      this.x = this.xx + 600;
    }
  }
};
Zh(CL, "obj_dmgwriter");
ZR(CL, "kinds", Zk("obj_dmgwriter", ZT));
ZR(CL, "defaultDepth", 0);
var CH = CL;
var Cy = class ew extends ZT {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.damage = 100;
    this.image_speed = 0.334;
    let Z = Zn.first("obj_battlecontroller");
    if (Z) {
      Z.damagenoise = 1;
    }
    this.maxindex = 3;
    this.critical = 0;
  }
  step() {
    if (this.critical === 1) {
      this.image_xscale += 0.1;
      this.image_yscale += 0.1;
    }
    if (this.image_index >= this.maxindex) {
      this.instance_destroy();
    }
  }
};
Zh(Cy, "obj_basicattack");
ZR(Cy, "kinds", Zk("obj_basicattack", ZT));
ZR(Cy, "defaultDepth", -100);
ZR(Cy, "defaultSprite", "spr_attack_mash1");
var CY = Cy;
var Cj = class ec extends ZT {
  create() {
    this.mag = 0.1;
    this.t = 0;
  }
  step() {
    this.t++;
    this.image_xscale += this.mag * 4;
    this.image_yscale += this.mag;
    this.image_alpha -= 0.1;
    if (this.image_alpha <= 0) {
      this.instance_destroy();
    }
  }
  draw(Z) {
    Z.draw_sprite_ext(
      this.sprite_index,
      0,
      this.x - (this.image_xscale - 1) * 5,
      this.y - (this.image_yscale - 1) * 19,
      this.image_xscale,
      this.image_yscale,
      0,
      this.image_blend,
      this.image_alpha,
    );
  }
};
Zh(Cj, "obj_burstbolt");
ZR(Cj, "kinds", Zk("obj_burstbolt", ZT));
ZR(Cj, "defaultDepth", 0);
ZR(Cj, "defaultSprite", "spr_attackspot");
var Cb = Cj;
var CI = class en extends ZT {
  create() {
    this.t = 0;
    this.target = null;
    this.visible = false;
    this.stars = [];
    this.particlecolor = Zf.lime;
  }
  step() {
    this.t++;
    let Z = this.target;
    if (!Z || Z.destroyed) {
      this.instance_destroy();
      return;
    }
    if (this.t === 1) {
      this.x = Z.x;
      this.y = Z.y;
      this.sw = Z.mywidth || Z.sprite_width;
      this.sh = Z.myheight || Z.sprite_height;
      Z.flash = 1;
      Z.becomeflash = 1;
      Z.fsiner = 0;
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let C = 0; C < 2; C++) {
        let pd = Zs(this.x + Zo(this.sw), this.y + Zo(this.sh), D);
        pd.sprite_index = "spr_sparestar_anim";
        pd.image_angle = Zo(360);
        pd.depth = -10;
        pd.image_xscale = 2;
        pd.image_yscale = 2;
        pd.image_alpha = 2;
        pd.image_speed = 0.25;
        pd.hspeed = 2 - Zo(2);
        pd.vspeed = -3 - Zo(2);
        pd.image_blend = this.particlecolor;
        pd.fadespeed = 0.08;
      }
    }
    if (this.t > 30) {
      this.instance_destroy();
    }
  }
};
Zh(CI, "obj_healanim");
ZR(CI, "kinds", Zk("obj_healanim", ZT));
ZR(CI, "defaultDepth", 0);
var Cf = CI;
var CQ = class ui extends ZT {
  create() {
    this.tsiner = 0;
    ZX.tensionselect = 0;
    this.apparent = ZX.tension;
    this.current = ZX.tension;
    this.changetimer = 15;
    this.y = 40;
    this.x = -40;
    this.hspeed = 13;
    this.friction = 1;
    this.flashsiner = 0;
    this.image_speed = 0;
    if (ZX.chapter >= 4 && ZC.tpCreate) {
      ZC.tpCreate(this);
    }
  }
  alarmEvent(Z) {
    if (Z === 5) {
      this.hspeed = -13;
      this.friction = -0.4;
    }
  }
  draw(Z) {
    if (p0()) {
      return;
    }
    if (ZX.chapter === 2 && Zn.exists("obj_gigaqueen_enemy")) {
      let ph = Zn.first("obj_battlecontroller");
      if (ph && ph.gigaqueencon !== 0) {
        return;
      }
    }
    if (ZX.chapter >= 2) {
      this.y = (Zn.view.y || 0) + 40;
    }
    let C = this.sprite_height;
    let pd = this.sprite_width;
    let pE = this.x;
    let pg = this.y;
    let pq = ZX.chapter >= 4 && !!ZC.tpBlueBar && !!ZC.tpBlueBar(this);
    let pK = ZX.chapter >= 4 && !!ZC.tpCustom && !!ZC.tpCustom(this);
    Z.draw_sprite("spr_tplogo", 0, pE - 30, pg + 30);
    if (!pK) {
      Z.draw_sprite("spr_tensionbar", pq ? 2 : 1, pE, pg);
    }
    Z.draw_set_font("fnt_mainbig");
    this.flashsiner++;
    let pP = ZV((this.apparent / ZX.maxtension) * 100);
    let pV = 0;
    if (pP < 100) {
      Z.draw_text(pE - 30, pg + 70, String(pP), Zf.white);
      if (!pK || !ZC.tpCustomText || !ZC.tpCustomText(this, Z)) {
        Z.draw_text(pE - 25, pg + 95, "%", Zf.white);
      }
    } else {
      pV = 1;
      Z.draw_text(pE - 28, pg + 70, "M", Zf.yellow);
      Z.draw_text(pE - 24, pg + 90, "A", Zf.yellow);
      Z.draw_text(pE - 20, pg + 110, "X", Zf.yellow);
    }
    if (ZG(this.apparent - ZX.tension) < 20) {
      this.apparent = ZX.tension;
    }
    if (this.apparent < ZX.tension) {
      this.apparent += 20;
    }
    if (this.apparent > ZX.tension) {
      this.apparent -= 20;
    }
    if (this.apparent !== this.current) {
      this.changetimer++;
      if (this.changetimer > 15) {
        let pR = this.apparent - this.current;
        if (pR > 0) {
          this.current += 2;
        }
        if (pR > 10) {
          this.current += 2;
        }
        if (pR > 25) {
          this.current += 3;
        }
        if (pR > 50) {
          this.current += 4;
        }
        if (pR > 100) {
          this.current += 5;
        }
        if (pR < 0) {
          this.current -= 2;
        }
        if (pR < -10) {
          this.current -= 2;
        }
        if (pR < -25) {
          this.current -= 3;
        }
        if (pR < -50) {
          this.current -= 4;
        }
        if (pR < -100) {
          this.current -= 5;
        }
        if (ZG(this.apparent - this.current) < 3) {
          this.current = this.apparent;
        }
      }
    } else {
      this.changetimer = 0;
    }
    if (pK) {
      ZC.tpCustomDraw(this, Z, pV);
      return;
    }
    let pG = "#008080";
    let px = ZQ(Zf.blue, pG, 0.5);
    let pr = pq ? (pV ? ZQ(pG, px, 0.5) : px) : pV ? ZQ(Zf.yellow, Zf.orange, 0.5) : Zf.orange;
    let pM = (pD, e0) => {
      Z.draw_set_color(pD);
      Z.draw_rectangle(pE + 3, pg + C - 1, pE + pd - 1, pg + C - (e0 / ZX.maxtension) * C, false);
    };
    if (this.current > 0 || this.apparent > 0) {
      if (this.apparent < this.current) {
        pM(pq ? Zf.blue : Zf.red, this.current);
        pM(pq ? px : Zf.orange, this.apparent);
      }
      if (this.apparent > this.current) {
        pM(Zf.white, this.apparent);
        pM(pr, this.current);
      }
      if (this.apparent === this.current) {
        pM(pr, this.current);
      }
    }
    if (ZX.tensionselect > 0) {
      this.tsiner++;
      Z.draw_set_color(Zf.white);
      Z.draw_set_alpha(ZG(Zr(this.tsiner / 8) * 0.5) + 0.2);
      let pD = pg + C - (this.current / ZX.maxtension) * C;
      let e0 = pD + (ZX.tensionselect / ZX.maxtension) * C;
      if (e0 > pg + C - 1) {
        e0 = pg + C - 1;
        Z.draw_set_color(Zf.dkgray);
        Z.draw_set_alpha(0.7);
      }
      Z.draw_rectangle(pE + 3, e0, pE + pd - 1, pD, false);
      Z.draw_set_alpha(1);
    }
    if (this.apparent > 20 && this.apparent < ZX.maxtension) {
      Z.draw_sprite("spr_tensionmarker", 0, pE + 3, pg + C - (this.current / ZX.maxtension) * C);
    }
    Z.draw_sprite("spr_tensionbar", 0, pE, pg);
  }
};
Zh(CQ, "obj_tensionbar");
ZR(CQ, "kinds", Zk("obj_tensionbar", ZT));
ZR(CQ, "defaultDepth", 1);
ZR(CQ, "defaultSprite", "spr_tensionbar");
var CF = CQ;
var CT = class ut extends ZT {
  create() {
    Object.assign(this, {
      char: 0,
      myself: 0,
      points: 0,
      becomeflash: 0,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      attacktimer: 0,
      attacked: 0,
      combatdarken: 1,
      darkentimer: 0,
      darkify: 0,
      image_xscale: 2,
      image_yscale: 2,
      myheight: 37,
      mywidth: 34,
      index: 0,
      specdraw: 0,
      is_auto_susie: 0,
      hurt: 0,
      hurttimer: 0,
      hurtindex: 0,
      acttimer: 0,
      defendtimer: 0,
      itemed: 0,
      tu: 0,
      victoryanim: 0,
      cancelattack: 0,
      healnum: 0,
    });
    this.setup();
    if (ZX.chapter >= 4 && ZC.heroSetup) {
      ZC.heroSetup(this);
    }
  }
  setup() {}
  draw(Z) {
    if (ZX.chapter >= 4 && ZC.heroDraw) {
      return ZC.heroDraw(this, Z, () => this.drawBody(Z));
    } else {
      return this.drawBody(Z);
    }
  }
  drawBody(Z) {
    return v(this, Z, () => this.drawBodyRaw(Z));
  }
  drawBodyRaw(Z) {
    let C = ZX.char[this.myself];
    let pd = this.idlesprite;
    let pE = 0;
    if (ZX.hp[C] > 0) {
      if (ZX.myfight === 3 && ZX.faceaction[this.myself] === 6) {
        this.state = 6;
      }
      if (this.state === 0 && this.hurt === 0) {
        this.acttimer = 0;
        pd = this.idlesprite;
        let pg = ZX.faceaction[this.myself];
        if (pg === 1) {
          pd = this.attackreadysprite;
        }
        if (pg === 3) {
          pd = this.itemreadysprite;
        }
        if (pg === 2) {
          pd = this.spellreadysprite;
        }
        if (pg === 6) {
          pd = this.actreadysprite;
        }
        if (ZX.charcond[this.myself] === 5) {
          pd = this.defeatsprite;
          ZX.faceaction[this.myself] = 9;
        }
        if (pg === 4) {
          pd = this.defendsprite;
          pE = this.defendtimer;
          if (this.defendtimer < this.defendframes) {
            this.defendtimer += 0.5;
          }
        } else {
          this.defendtimer = 0;
          pE = this.idlespeed ? this.siner * this.idlespeed : this.siner / 5;
        }
        this.siner++;
      }
      if (this.state === 1 && this.hurt === 0) {
        this.siner++;
        if (this.attacked === 0) {
          let pq = this.is("obj_heroralsei") ? 1.15 : this.is("obj_herosusie") ? 0.9 : 1;
          Zj("snd_laz_c", {
            pitch: pq,
          });
          if (ZX.chapter >= 4 && ZC.heroAttackStart) {
            ZC.heroAttackStart(this);
          }
          if (this.points === 150) {
            Zj("snd_criticalswing");
            for (let pK = 0; pK < 3; pK++) {
              let pP = Zs(this.x + this.mywidth + Zo(50), this.y + 30 + Zo(30), D);
              pP.sprite_index = "spr_lightfairy";
              pP.image_speed = 0.25;
              pP.depth = -20;
              pP.image_xscale = 2;
              pP.image_yscale = 2;
              pP.hspeed = 2 + Zo(4);
              pP.friction = -0.25;
              pP.fadespeed = 0.05;
            }
          }
          this.attacked = 1;
          this.alarm[1] = 10;
        }
        pE = this.attacktimer < this.attackframes ? this.attacktimer : this.attackframes;
        pd = this.attacksprite;
        this.attacktimer += this.attackspeed;
      }
      if (this.state === 2 && this.hurt === 0) {
        this.siner++;
        if (this.itemed === 0) {
          this.itemed = 1;
          this.alarm[4] = 15;
        }
        pE = this.attacktimer < this.spellframes ? this.attacktimer : this.spellframes;
        if (Z7() === 0) {
          this.attacktimer = 0;
        }
        pd = this.spellsprite;
        this.attacktimer += this.spellspeed || 0.5;
        if (ZX.chapter >= 4 && ZC.heroSpellTick) {
          ZC.heroSpellTick(this, pd);
        }
      }
      if (this.state === 4 && this.hurt === 0) {
        this.siner++;
        if (this.itemed === 0) {
          this.itemed = 1;
          this.alarm[4] = 15;
        }
        pE = this.attacktimer < this.itemframes ? this.attacktimer : this.itemframes;
        if (Z7() === 0) {
          this.attacktimer = 0;
        }
        pd = this.itemsprite;
        this.attacktimer += 0.5;
        if (ZX.chapter >= 4 && ZC.heroItemTick) {
          ZC.heroItemTick(this);
        }
      }
      if (this.state === 6) {
        if (ZX.myfight === 3) {
          if (this.acttimer < this.actframes) {
            this.acttimer += 0.5;
          }
        } else {
          this.acttimer += 0.5;
        }
        pd = this.actsprite;
        pE = this.acttimer;
        if (this.acttimer >= this.actreturnframes) {
          this.acttimer = 0;
          this.state = 0;
          ZX.faceaction[this.myself] = 0;
        }
      }
      if (this.state === 7) {
        this.hurt = 0;
        this.hurttimer = 0;
        if (this.victoryanim < this.victoryframes) {
          pd = this.victorysprite;
          pE = this.victoryanim;
          this.victoryanim += 0.334;
        } else {
          pd = this.normalsprite;
          pE = 0;
        }
      }
      if (ZX.chapter >= 4 && this.state === 8 && ZC.heroPoseEnd && ZC.heroPoseEnd(this)) {
        pd = this.idlesprite;
        pE = 0;
      }
      if (this.hurt === 1 && this.state !== 8) {
        this.hurtindex = this.hurttimer / 2;
        if (this.hurtindex > 2) {
          this.hurtindex = 2;
        }
        if (ZX.charcond[this.myself] === 5) {
          ZX.faceaction[this.myself] = 5;
          ZX.charmove[this.myself] = 1;
          ZX.charcond[this.myself] = 0;
        }
        if (ZX.faceaction[this.myself] === 0) {
          ZX.faceaction[this.myself] = 5;
        }
        if (ZX.faceaction[this.myself] !== 4) {
          this.specdraw = 1;
          Z.draw_sprite_ext(
            this.hurtsprite,
            this.hurtindex,
            this.x - 20 + this.hurtindex * 10,
            this.y,
            this.image_xscale,
            this.image_yscale,
            0,
            this.image_blend,
            this.image_alpha,
          );
        } else {
          this.specdraw = 1;
          pd = this.defendsprite;
          pE = this.defendtimer;
          Z.draw_sprite_ext(
            this.defendsprite,
            this.defendtimer,
            this.x - 20 + this.hurtindex * 10,
            this.y,
            this.image_xscale,
            this.image_yscale,
            0,
            this.image_blend,
            this.image_alpha,
          );
        }
        if (this.hurttimer > 15) {
          this.hurttimer = 0;
          this.hurt = 0;
          if (ZX.faceaction[this.myself] === 5) {
            ZX.faceaction[this.myself] = 0;
          }
        }
        this.hurttimer++;
      }
    } else {
      ZX.charcond[this.myself] = 0;
      this.hurttimer = 0;
      this.hurt = 0;
      pd = this.defeatsprite;
      pE = 0;
      this.siner++;
    }
    this.thissprite = pd;
    this.index = pE;
    if (this.specdraw === 0 && this.state !== 8) {
      this.sprite_index = pd;
      this.image_index = pE;
      this.image_speed = 0;
      let pV = this.image_xscale;
      let pG = this.image_yscale;
      Z.draw_sprite_ext(pd, pE, this.x, this.y, pV, pG, 0, this.image_blend, this.image_alpha);
      if (this.flash === 1) {
        this.fsiner++;
        Z.draw_sprite_white(
          pd,
          pE,
          this.x,
          this.y,
          pV,
          pG,
          0,
          (-ZM(this.fsiner / 5) * 0.4 + 0.6) * this.image_alpha,
        );
      }
    }
    if (this.state === 8) {
      Z.draw_sprite_ext(
        this.sprite_index,
        this.image_index,
        this.x,
        this.y,
        this.image_xscale,
        this.image_yscale,
        this.image_angle,
        this.image_blend,
        this.image_alpha,
      );
    }
    this.specdraw = 0;
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    if (ZX.targeted[this.myself] === 1) {
      if (ZX.mnfight === 1) {
        Z.draw_sprite_ext(
          "spr_chartarget",
          this.siner / 10,
          this.x,
          this.y,
          this.image_xscale,
          this.image_yscale,
          0,
          Zf.white,
          1,
        );
      }
    } else if (this.combatdarken === 1 && Zn.exists("obj_darkener") && this.darkify === 1) {
      if (this.darkentimer < 15) {
        this.darkentimer++;
      }
      this.image_blend = ZQ(Zf.white, Zf.black, this.darkentimer / 30);
    }
    if (this.darkify === 0) {
      if (this.darkentimer > 0) {
        this.darkentimer -= 3;
      }
      if (this.darkentimer < 0) {
        this.darkentimer = 0;
      }
      this.image_blend = ZQ(
        Zf.white,
        Zf.black,
        this.depthShade ? Math.max(this.darkentimer / 30, this.depthShade) : this.darkentimer / 30,
      );
    }
    this.becomeflash = 0;
  }
  alarmEvent(Z) {
    if (Z === 1) {
      this.attackHit();
    }
    if (Z === 4 && this.actcast) {
      this.actcast = 0;
      if (Z7() > 0) {
        pJ(ZX.charspecial[this.myself], this.myself);
      }
      return;
    }
    if (Z === 4) {
      ZX.faceaction[this.myself] = 0;
      if (Z7() > 0) {
        pJ(ZX.charspecial[this.myself], this.myself);
      }
      this.state = 0;
      this.attacktimer = 0;
    }
  }
  attackHit() {
    ZX.faceaction[this.myself] = 0;
    pB(this.myself);
    if (this.cancelattack === 0) {
      if (ZX.chapter >= 4 && ZC.heroAttackRetarget) {
        ZC.heroAttackRetarget(this);
      }
      let Z = ZX.chartarget[this.myself];
      let C = Zs(ZX.monsterx[Z], ZX.monstery[Z] - ZX.hittarget[Z] * 20 + 20, CH);
      C.type = Zp(this.char);
      C.delay = 8;
      if (this.is("obj_herosusie") && ZX.charweapon[this.char] === 54) {
        pW(
          this.myself,
          Zn.exists("obj_sound_of_justice_enemy") || Zn.exists("obj_hammer_of_justice_enemy")
            ? 2
            : ZP(ZX.maxhp[this.char] * 0.1),
        );
      }
      let pd = ZK((ZX.battleat[this.myself] * this.points) / 20 - ZX.monsterdf[Z] * 3);
      let pE = 0;
      let pg = ZX.chapter === 3 ? Zn.first("obj_knight_enemy") : null;
      if (pg) {
        if (pg.blocking === 1 && pg.damagereduction < 0.1) {
          pE = 1;
        }
        pd = ZP(pd * pg.damagereduction);
        if (this.is("obj_herokris")) {
          if (ZX.hp[2] < 0 && ZX.hp[3] < 0) {
            pd *= 2;
          } else if (!(ZX.hp[2] < 0) && !(ZX.hp[3] < 0)) {
            pd = ZK(pd * 0.5);
          }
        }
      }
      if (ZX.monstertype[Z] === 19) {
        pd = ZP(pd * 0.3);
      }
      if (ZX.chapter >= 4 && ZC.heroDamage) {
        pd = ZC.heroDamage(this, pd, Z);
      }
      if (pd < 0) {
        pd = 0;
      }
      let pq = ZC.monsterinstance(Z);
      if (pd === 0) {
        C.delay = 2;
        if (pq && pq.hurttimer <= 15 && pq.candodge === 1) {
          pq.dodgetimer = 0;
          pq.state = 4;
        }
      }
      C.damage = pd;
      ZX.hittarget[Z] += 1;
      let pK = Zn.first("obj_queen_enemy");
      let pP = 0;
      if (pK) {
        if (Zn.first("obj_queenshield_enemy")) {
          pK.shieldhp -= pd;
          pP = 1;
        } else {
          ZX.monsterhp[Z] -= pd;
          if (pd !== 0) {
            pK.shieldbrokecon = 1;
          }
        }
      } else {
        ZX.monsterhp[Z] -= pd;
      }
      if (ZX.chapter >= 4 && ZC.heroAttackLanded) {
        ZC.heroAttackLanded(this, Z, pd, C, pq);
      }
      if (this.is_auto_susie === 1 && ZX.monsterhp[Z] <= 0 && pq) {
        ZX.flag[51 + pq.myself] = 5;
      }
      if (pd > 0) {
        if (ZX.chapter >= 4 && ZC.heroHitTP) {
          Z6(ZC.heroHitTP(this));
        } else if (ZX.monstertype[0] !== 20) {
          Z6(ZK(this.points / 10));
        } else {
          Z6(ZK(this.points / 15));
        }
        if (pE === 1) {
          pg.blockanim = 1;
        }
        let pG = Zs(ZX.monsterx[Z] + Zo(6), ZX.monstery[Z] + Zo(6), CY);
        if (pE === 1) {
          pG.instance_destroy();
        }
        if (pE !== 1) {
          if (!(ZX.chapter >= 4) || !ZC.heroAttackSprite || !ZC.heroAttackSprite(this, pG)) {
            if (this.is("obj_herosusie")) {
              pG.sprite_index = "spr_attack_mash2";
              pG.image_speed = 0.5;
              pG.maxindex = 4;
              Zj("snd_impact");
              Zs(0, 0, Z3);
            } else if (this.member && this.member.attack) {
              let px = this.member.attack;
              if (px.slash) {
                pG.sprite_index = px.slash;
              }
              if (px.sound) {
                Zj(px.sound, {
                  pitch: px.pitch || 1,
                });
              }
            }
          }
        }
        if (this.is("obj_heroralsei")) {
          pG.sprite_index = "spr_attack_slap1";
          pG.maxindex = 4;
          pG.image_speed = 0.5;
        }
        if (this.points === 150) {
          pG.image_xscale = 2.5;
          pG.image_yscale = 2.5;
        }
        if (pP === 1) {
          let pr = Zn.first("obj_queenshield_enemy");
          if (pr) {
            pG.x = pr.x + 34;
            if (pd !== 0) {
              pr.event_user(0);
            }
          }
        } else {
          if (pK) {
            pG.x = pK.x + 62;
          }
          if (pq) {
            pq.shakex = 9;
            pq.state = 3;
            pq.hurttimer = 30;
          }
        }
        if (pq) {
          pq.hurtamt = pd;
        }
      }
      if (pP === 1) {
        let pM = Zn.first("obj_queenshield_enemy");
        if (pM) {
          C.x = pM.x;
          C.depth -= 100;
        }
      }
      if (ZX.chapter === 2 && Zn.first("obj_sweet_enemy") && ZX.monsterhp[Z] <= 0) {
        ZX.monsterhp[Z] = 1;
      }
      let pV = pK
        ? 1
        : Zn.first("obj_spamton_neo_enemy")
          ? 2
          : Zn.first("obj_berdlyb_enemy")
            ? 3
            : 0;
      if (ZX.monsterhp[Z] <= 0 && pV === 0 && pq) {
        pq.scr_monsterdefeat();
      }
      if (ZX.monsterhp[Z] <= 0 && pV === 3 && pq) {
        pq.endcon = 1;
      }
    }
  }
};
Zh(CT, "obj_heroparent");
ZR(CT, "kinds", Zk("obj_heroparent", ZT));
ZR(CT, "defaultDepth", 100);
var CW = CT;
function Cz(Z, C) {
  let pd = a(C, ZY);
  Object.assign(Z, pd.sprites, pd.frames, pd.size);
  Z.herokey = pd.id;
  Z.borrowedFrom = pd.borrowed || null;
}
Zh(Cz, "applyHeroSet");
function CJ(Z) {
  if (
    Z.herokey !== "noelle" ||
    Z.borrowedFrom ||
    (ZX.charweapon[Z.char] !== 13 && ZX.charweapon[Z.char] !== 22)
  ) {
    return;
  }
  let C = {
    attackreadysprite: "spr_noelleb_idle",
    attacksprite: "spr_noelleb_spell",
    victorysprite: "spr_noelleb_pray",
    defendsprite: "spr_noelleb_defend_sideb",
    hurtsprite: "spr_noelleb_hurt_sideb",
    idlesprite: "spr_noelleb_idle_sideb",
  };
  for (let [pd, pE] of Object.entries(C)) {
    if (ZY[pE]) {
      Z[pd] = pE;
    }
  }
  if (ZY.spr_noelleb_spell) {
    Z.attackframes = 6;
  }
  if (ZY.spr_noelleb_pray) {
    Z.victoryframes = 10;
  }
  if (ZY.spr_noelleb_defend_sideb) {
    Z.defendframes = 5;
  }
}
Zh(CJ, "noelleSideB");
var Ck = class mi extends CW {
  setup() {
    Cz(this, this.herokey || "kris");
  }
};
Zh(Ck, "obj_herokris");
ZR(Ck, "kinds", Zk("obj_herokris", CW));
var Cl = Ck;
var CN = class mt extends CW {
  setup() {
    Cz(this, this.herokey || "susie");
  }
};
Zh(CN, "obj_herosusie");
ZR(CN, "kinds", Zk("obj_herosusie", CW));
var Co = CN;
var CA = class mn extends CW {
  setup() {
    Cz(this, this.herokey || "ralsei");
    if (this.herokey === "ralsei" && ZX.chapter >= 2 && ZX.chapter <= 4) {
      Object.assign(this, {
        attackframes: 6,
        itemframes: 6,
        defendframes: 7,
        actframes: ZX.chapter === 2 ? 8 : 7,
        actreturnframes: ZX.chapter === 2 ? 12 : 10,
        attackspeed: 0.5,
        normalsprite: "spr_ralsei_walk_right",
        idlesprite: "spr_ralsei_idle",
        defendsprite: "spr_ralsei_defend",
        hurtsprite: "spr_ralsei_hurt_fixed",
        attackreadysprite: "spr_ralsei_attackready",
        attacksprite: "spr_ralsei_attack",
        itemsprite: "spr_ralsei_item",
        itemreadysprite: "spr_ralsei_itemready",
        spellreadysprite: "spr_ralsei_spellready",
        spellsprite: "spr_ralsei_spell",
        defeatsprite: "spr_ralsei_defeat",
        victorysprite: "spr_ralsei_victory",
        actreadysprite: "spr_ralsei_actready",
        actsprite: "spr_ralsei_act",
        victoryframes: 21,
        mywidth: 52,
        myheight: 86,
      });
    }
  }
};
Zh(CA, "obj_heroralsei");
ZR(CA, "kinds", Zk("obj_heroralsei", CW));
var Ca = CA;
var Cv = class md extends CW {
  setup() {
    Cz(this, this.herokey || "noelle");
  }
};
Zh(Cv, "obj_heronoelle");
ZR(Cv, "kinds", Zk("obj_heronoelle", CW));
var Cw = Cv;
var Cc = Zh((Z, C) => {
  let pd = Zk(Z, C);
  pd.delete(C.name);
  return pd;
}, "extraKinds");
var Cn = class mE extends Cl {
  is(Z) {
    return Z === "obj_herokris" || super.is(Z);
  }
};
Zh(Cn, "obj_herokris_extra");
ZR(Cn, "kinds", Cc("obj_herokris_extra", Cl));
var Cd = Cn;
var CE = class mg extends Co {
  is(Z) {
    return Z === "obj_herosusie" || super.is(Z);
  }
};
Zh(CE, "obj_herosusie_extra");
ZR(CE, "kinds", Cc("obj_herosusie_extra", Co));
var Cg = CE;
var Cq = class mq extends Ca {
  is(Z) {
    return Z === "obj_heroralsei" || super.is(Z);
  }
};
Zh(Cq, "obj_heroralsei_extra");
ZR(Cq, "kinds", Cc("obj_heroralsei_extra", Ca));
var CK = Cq;
var CP = class mK extends Cw {
  is(Z) {
    return Z === "obj_heronoelle" || super.is(Z);
  }
};
Zh(CP, "obj_heronoelle_extra");
ZR(CP, "kinds", Cc("obj_heronoelle_extra", Cw));
var CV = CP;
var CG = new Map([
  [Cl, Cd],
  [Co, Cg],
  [Ca, CK],
  [Cw, CV],
]);
var Cx = class mP extends CW {
  setup() {
    Cz(this, this.herokey || "kris");
    this.member = (o[this.herokey] || {}).member || null;
    let Z = q(this);
    this.image_xscale = Z;
    this.image_yscale = Z;
    this.mywidth = ZK((this.mywidth * Z) / 2);
    this.myheight = ZK((this.myheight * Z) / 2);
  }
  drawBody(Z) {
    return g(this, Z, () => super.drawBody(Z));
  }
};
Zh(Cx, "obj_herocustom");
ZR(Cx, "kinds", Zk("obj_herocustom", CW));
var Cr = Cx;
var CM = class mV extends ZT {
  constructor() {
    super();
    Object.assign(this, {
      myself: 0,
      state: 0,
      hurttimer: 0,
      hurtamt: 0,
      shakex: 0,
      candodge: 0,
      dodgetimer: 0,
      acting: 0,
      actcon: 0,
      talked: 0,
      attacked: 0,
      flash: 0,
      fsiner: 0,
      becomeflash: 0,
      mytarget: 3,
      image_xscale: 2,
      image_yscale: 2,
    });
  }
  userEvent(Z) {
    if (Z === 12) {
      ZX.monsterx[this.myself] = this.x + 20;
      ZX.monstery[this.myself] = this.y;
    }
    if (Z === 10) {
      this.spared();
    }
  }
  spared() {
    if (ZC.scr_spareanim) {
      ZC.scr_spareanim.call(this);
    }
    if (ZC.scr_recruit) {
      ZC.scr_recruit.call(this);
    }
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  scr_monsterdefeat() {
    let Z = this.myself;
    if (ZX.monster[Z] === 1) {
      ZX.monstergold[3] += ZX.monstergold[Z];
      ZX.monsterexp[3] += ZX.monsterexp[Z];
      ZX.monster[Z] = 0;
      if (ZX.flag[51 + Z] === 0) {
        ZX.flag[51 + Z] = 2;
        if (ZX.monsterhp[Z] <= 0) {
          ZX.flag[51 + Z] = 1;
        }
      }
      if (ZX.flag[51 + Z] === 6) {
        ZX.flag[45] = (ZX.flag[45] | 0) + 1;
        ZX.monstergold[3] += 24;
      }
      this.userEvent(11);
    }
  }
};
Zh(CM, "obj_monsterparent");
ZR(CM, "kinds", Zk("obj_monsterparent", ZT));
ZR(CM, "defaultDepth", 90);
var Cs = CM;
var Ch = Zh(() => {
  if (ZX.chapter !== 3) {
    return false;
  }
  let Z = Zn.first("obj_knight_enemy");
  return !!Z && !Z.destroyed && !!(Z.end_cutscene_version > 0);
}, "knightEndCutscene");
var CR = Zh((Z) => {
  let C = Zn.first(Z);
  if (C && !C.destroyed) {
    return C;
  } else {
    return null;
  }
}, "ex");
var CD = Zh(() => {
  if (ZX.chapter !== 3) {
    return false;
  }
  if (ZX.minigameStage) {
    return true;
  }
  let Z = CR("obj_actor_tenna");
  if (Z && Z.threepartmode === 1 && CR("obj_lightemup_controller")) {
    return false;
  }
  let C = CR("obj_tenna_zoom");
  if (C && C.minigameinsanityintro) {
    return false;
  }
  if (CR("obj_susiezilla_gamecontroller") || CR("obj_chefs_game") || CR("obj_rhythmgame")) {
    return true;
  }
  let pd = CR("obj_tenna_minigame_ui");
  if (
    (pd && pd.enabled === true) ||
    (CR("obj_shootout_controller") && CR("obj_tenna_enemy")) ||
    (C && C.con === 0 && C.screenshot)
  ) {
    return true;
  }
  let pE = CR("obj_shadowman_sharpshoot_cursor");
  return !!pE && pE.disablesbattleui === true;
}, "minigameHidesUI");
var p0 = Zh(
  () =>
    ZX.chapter !== 3
      ? false
      : ZX.minigameStage ||
          CR("obj_susiezilla_gamecontroller") ||
          CR("obj_chefs_game") ||
          CR("obj_rhythmgame") ||
          CR("obj_shootout_controller") ||
          CR("obj_gameover_board") ||
          CR("obj_gameover_minigame")
        ? true
        : Ch(),
  "tensionbarHidden",
);
var p1 = Zh(() => Ch() || CD(), "battleUIHidden");
var p2 = Zh(() => {
  if (ZX.chapter !== 3) {
    return false;
  }
  if (ZX.minigameStage) {
    return true;
  }
  let Z = CR("obj_rouxls_ch3_enemy");
  if (Z && Z.intro < 2) {
    return true;
  }
  let C = CR("obj_tenna_board4_enemy");
  if (C && C.intro < 2) {
    return true;
  }
  let pd = CR("obj_elnina_lanino_controller");
  if (pd && pd.intro < 4) {
    return true;
  }
  let pE = CR("obj_tennabattleconvo_controller");
  return (
    (!!pE && !!(pE.introcon < 2)) ||
    !!CR("obj_susiezilla_gamecontroller") ||
    !!CR("obj_chefs_game") ||
    !!CR("obj_rhythmgame") ||
    (!!CR("obj_shootout_controller") && !!CR("obj_tenna_enemy"))
  );
}, "ch3StepHeld");
var p3 = Zh(() => CD(), "minigameOnScreen");
var p4 = Zh(() => Ch() || p2(), "controllerHeld");
var p5 = class mG extends ZT {
  create() {
    let Z = ZO();
    let C = () => new Array(Z).fill(0);
    this.active = 0;
    this.fastmode = 1;
    if (this.fastmode === 1) {
      this.active = 1;
    }
    this.goahead = 0;
    this.spelluse = 0;
    this.spelldelay = new Array(Z).fill(10);
    this.maxdelay = 0;
    this.maxdelaytimer = 0;
    this.havechar = C();
    this.charitem = C();
    this.charspell = C();
    for (let pP = 0; pP < ZO(); pP++) {
      if (ZX.charaction[pP] === 1) {
        this.havechar[pP] = 1;
      }
      if (ZX.charaction[pP] === 4 || ZX.charaction[pP] === 2) {
        if (this.maxdelay === 0) {
          this.maxdelay = 25;
        }
        this.maxdelay += 15;
        this.spelluse = 1;
        if (ZX.charaction[pP] === 4) {
          this.charitem[pP] = 1;
        } else {
          this.charspell[pP] = 1;
        }
      }
    }
    this.spelluse = 0;
    this.fade = 0;
    this.fadeamt = 0;
    this.fakefade = 0;
    this.bcolor = Zf.navy;
    let pd = [Zz(16776960), Zz(16711935), Zz(65280)];
    let pE = [
      ZQ(Zf.aqua, Zf.white, 0.5),
      ZQ(Zf.fuchsia, Zf.white, 0.5),
      ZQ(Zf.lime, Zf.white, 0.5),
    ];
    this.charcolor = [];
    this.boltcolor = [];
    for (let pV = 0; pV < Z; pV++) {
      let pG = ZS(ZX.char[pV]) - 1;
      this.charcolor[pV] = pd[pG] ?? pd[0];
      this.boltcolor[pV] = pE[pG] ?? pE[0];
      let px = d(ZX.char[pV]);
      if (px) {
        this.charcolor[pV] = px;
        this.boltcolor[pV] = ZQ(px, Zf.white, 0.5);
      }
    }
    this.target = 0;
    for (let pr = 0; pr < Z; pr++) {
      ZX.hittarget[pr] = ZX.chartarget[pr];
    }
    this.imagetimer = 0;
    this.posttimer = 0;
    this.timermax = 50;
    if (!this.havechar.some((pM) => pM === 1)) {
      this.timermax = 3;
    }
    this.boltspeed = 8;
    this.boltx = 0;
    this.points = C();
    this.pressbuffer = new Array(Math.max(4, ZX.charbase ? ZX.charbase.length : 4)).fill(0);
    this.charbolt = new Array(Z).fill(1);
    for (let pM = 0; pM < Z; pM++) {
      if (this.havechar[pM] === 0) {
        this.charbolt[pM] = 0;
      }
    }
    this.attacked = C();
    this.bolttotal = this.charbolt.reduce((ph, pR) => ph + pR, 0);
    this.boltuse = C();
    this.boltchar = [];
    this.boltframe = [];
    this.boltalive = [];
    this.boltred = [];
    let pg = -1;
    let pq = 0;
    let pK = 10;
    if (ZX.flag[13] === 0) {
      pK += 2;
    }
    if (Z > 6) {
      pK = Math.max(4, Math.round((pK * 6) / Math.min(Z, 18)));
    }
    for (let ph = 0; ph < this.bolttotal; ph++) {
      this.boltalive[ph] = 1;
      let pR = [];
      for (let e2 = 0; e2 < ZO(); e2++) {
        if (this.havechar[e2] === 1) {
          pR.push(e2);
        }
      }
      let pD = pR.filter((e3) => this.boltuse[e3] < this.charbolt[e3]);
      let e0 = pD.length ? pD : pR;
      if (!e0.length) {
        this.boltalive[ph] = 0;
        continue;
      }
      let e1 = e0[Math.min(e0.length - 1, Math.floor(Zo(e0.length)))];
      this.boltchar[ph] = e1;
      this.boltuse[e1]++;
    }
    for (let e3 = 0; e3 < this.bolttotal; e3++) {
      this.boltred[e3] = 0;
      pq += pg;
      this.boltframe[e3] = 30 + pq;
      if (e3 < this.bolttotal - 1) {
        if (pg !== 0 && this.boltchar[e3] !== this.boltchar[e3 + 1]) {
          pg = Za(0, pK, pK * 1.5);
          this.boltred[e3] = 1;
        } else {
          pg = Za(pK, pK * 1.5);
        }
      } else {
        pg = Za(pK, pK * 1.5);
      }
    }
    this.haveauto = 0;
    this.autoed = 0;
    {
      let e4 = Zi(2);
      let e5 = e4 >= 0 ? ZX.char[e4] : 0;
      if (e4 >= 0 && ZX.charauto[e5] === 1) {
        this.sus = e4;
        if (ZX.hp[e5] >= 0 && ZX.charmove[e4] === 1) {
          this.haveauto = 1;
          if (this.timermax === 3) {
            this.timermax = 50;
          }
        }
      }
    }
  }
  boltcheckOne() {
    let Z = -1;
    let C = -1;
    this.pressbuffer = [5, 5, 5, 5];
    let pd = -1;
    let pE = 999;
    for (let pq = 0; pq < this.bolttotal; pq++) {
      if (this.boltalive[pq] === 1) {
        let pK = this.boltframe[pq] - this.boltx;
        if (pK < 15 && pK > -5) {
          if (pK === pE) {
            Z = 1;
            C = pq;
          }
          if (pK < pE) {
            pE = pK;
            pd = pq;
          }
        }
      }
    }
    let pg = (pP) => {
      let pV = this.boltchar[pP];
      let pG = ZG(pE);
      let px = Zs(
        this.x + 80 + this.boltframe[pP] * this.boltspeed - this.boltx * this.boltspeed,
        this.y + (this.rowh ?? 38) * (this.rowOf ? this.rowOf(pV) : pV),
        Cb,
      );
      if (Zx.nomiss) {
        pG = 0;
      }
      if (pG === 0) {
        this.points[pV] += 150;
        px.image_blend = Zf.yellow;
        px.mag = 0.2;
      }
      if (pG === 1) {
        this.points[pV] += 120;
      }
      if (pG === 2) {
        this.points[pV] += 110;
      }
      if (pG >= 3) {
        this.points[pV] += 100 - ZG(pE) * 2;
        px.image_blend = this.boltcolor[pV];
      }
      if (pG >= 15) {
        px.image_blend = this.charcolor[pV];
      }
      this.boltalive[pP] = 0;
    };
    if (pd !== -1) {
      pg(pd);
      if (Z === 1) {
        pg(C);
      }
    }
  }
  boltcheck(Z) {
    this.pressbuffer[ZX.char[Z]] = 5;
    let C = -1;
    let pd = 99;
    for (let pE = 0; pE < this.bolttotal; pE++) {
      if (this.boltchar[pE] === Z && this.boltalive[pE] === 1) {
        let pg = this.boltframe[pE] - this.boltx;
        if (pg < 15 && pg > -5 && pg < pd) {
          pd = pg;
          C = pE;
        }
      }
    }
    if (C !== -1) {
      let pq = ZG(pd);
      let pK = Zs(
        this.x + 80 + this.boltframe[C] * this.boltspeed - this.boltx * this.boltspeed,
        (this.barY ?? this.y) + (this.rowh ?? 38) * Z,
        Cb,
      );
      if (pq === 0) {
        this.points[Z] += 150;
        pK.image_blend = Zf.yellow;
        pK.mag = 0.2;
      }
      if (pq === 1) {
        this.points[Z] += 120;
      }
      if (pq === 2) {
        this.points[Z] += 110;
      }
      if (pq >= 3) {
        this.points[Z] += 100 - ZG(pd) * 2;
        pK.image_blend = this.boltcolor[Z];
      }
      if (pq >= 15) {
        pK.image_blend = this.charcolor[Z];
      }
      this.boltalive[C] = 0;
    }
  }
  userEvent(Z) {
    if (Z === 1 && Z7() > 0) {
      if (ZX.chapter >= 4 && ZC.attackpressHit) {
        ZC.attackpressHit(this);
      }
      let C = ZX.chapter === 2 && Zn.first("o_boxingcontroller");
      if (C) {
        let pg = this.points[0];
        C.punchcon = 1;
        C.damageoverride = ZK((ZX.battleat[0] * pg) / 10);
        C.acttoenemytalktransition = 1;
        if (pg === 150 || pg === 300) {
          C.tpoverride = 5;
        }
        if (pg === 0) {
          C.damageoverride = 1;
        }
        return;
      }
      let pd = this.target;
      let pE = ZC.charinstance(pd);
      if (pE) {
        pE.points = this.points[pd];
        pE.state = 1;
        pE.attacktimer = 0;
      }
    }
  }
  draw(Z) {
    if (
      p1() ||
      (this.maxdelaytimer++,
      this.maxdelaytimer >= this.maxdelay && (this.active = 1),
      this.active !== 1)
    ) {
      return;
    }
    let C = ZO();
    let pd = 38;
    let pE = 1;
    let pg = C > 3;
    let pq = (px) => (pg ? px % 3 : px);
    let pK = this.x;
    let pP = this.y;
    this.rowh = pd;
    this.barY = pP;
    this.rowOf = pq;
    let pV = [];
    if (pg) {
      for (let px = 0; px < 3; px++) {
        let pr = -1;
        let pM = 1000000000;
        for (let ph = 0; ph < this.bolttotal; ph++) {
          let pR = this.boltchar[ph];
          if (this.boltalive[ph] === 1 && pR % 3 === px && this.boltframe[ph] < pM) {
            pM = this.boltframe[ph];
            pr = pR;
          }
        }
        if (pr < 0) {
          for (let pD = px; pD < C; pD += 3) {
            if (this.havechar[pD] === 1 && ZX.charauto[ZX.char[pD]] === 0) {
              pr = pD;
              break;
            }
          }
        }
        pV.push([pr < 0 ? px : pr, px]);
      }
    } else {
      for (let e0 = 0; e0 < C; e0++) {
        pV.push([e0, e0]);
      }
    }
    for (let [e1, e2] of pV) {
      Z.draw_set_color(this.bcolor);
      if (ZX.chapter >= 4) {
        if ((e2 === 1 || e2 === 2) && this.havechar.some((e3) => e3 === 1)) {
          Z.draw_rectangle(pK + 77, pP + pd * e2, pK + 300, pP + pd * e2 + 1, false);
        }
      } else if (e2 >= 1) {
        Z.draw_rectangle(pK, pP + pd * e2, pK + 300, pP + pd * e2 + 2, false);
      }
      if (ZX.char[e1] !== 0 && ZX.charauto[ZX.char[e1]] === 0 && this.havechar[e1] === 1) {
        let e3 = ZS(ZX.char[e1]);
        let e4 = e3 === 1 ? Zf.blue : e3 === 2 ? Zf.purple : Zf.green;
        let e5 = E(ZX.char[e1]);
        if (e5) {
          e4 = e5;
        }
        if (this.pressbuffer[ZX.char[e1]] > 0) {
          e4 = ZQ(e4, Zf.white, this.pressbuffer[ZX.char[e1]] / 5);
        }
        Z.draw_set_color(e4);
        let e6 = ZX.chapter >= 4 ? 1 : 0;
        Z.draw_rectangle(
          pK + 78,
          pP + pd * e2 + e6,
          pK + 80 + this.boltspeed * 15,
          pP + pd * e2 + pd - 2,
          true,
        );
        Z.draw_rectangle(
          pK + 79,
          pP + pd * e2 + 1 + e6,
          pK + 80 + this.boltspeed * 15 - 1,
          pP + pd * e2 + pd - 3,
          true,
        );
        let e7 = Math.min(3, Math.max(1, e3));
        let e8 = d(ZX.char[e1]) ? ZQ(d(ZX.char[e1]), Zf.white, 0.35) : Zf.white;
        let e9 = o[(ZX.charhero && ZX.charhero[ZX.char[e1]]) || A[e7 - 1]];
        let eZ = e9 && e9.head && ZY[e9.head];
        if (eZ && (e9.custom || e9.head !== o[A[e7 - 1]].head)) {
          let eC = ZY[e9.head];
          Z.draw_sprite_part_ext(
            e9.head,
            0,
            0,
            0,
            eC.w,
            Math.min(eC.h, 36),
            pK + 2,
            pP + pd * e2 + Math.max(1, (36 - Math.min(eC.h, 36)) >> 1),
            1,
            1,
            Zf.white,
            1,
          );
        } else {
          Z.draw_sprite_ext("spr_pressfront", e7 - 1, pK, pP + pd * e2, 1, pE, 0, e8, 1);
          if (eZ && ZY[e9.head].w <= 40 && e9.head !== o[A[e7 - 1]].head) {
            Z.draw_sprite_ext(e9.head, 0, pK + 2, pP + pd * e2 + pE * 7, pE, pE, 0, Zf.white, 1);
          }
        }
        Z.draw_sprite_ext(
          "spr_pressfront_b",
          ZX.flag[13] === 0 ? 0 : Math.min(2, e2),
          pK,
          pP + pd * e2,
          1,
          pE,
          0,
          Zf.white,
          1,
        );
        Z.draw_sprite_ext("spr_pressspot", e7 - 1, pK + 80, pP + pd * e2, 1, pE, 0, e8, 1);
      }
    }
    let pG = new Array(C).fill(0);
    for (let ep = 0; ep < this.bolttotal; ep++) {
      let eu = this.boltchar[ep];
      if (this.boltframe[ep] - this.boltx < -5) {
        this.boltalive[ep] = 0;
      }
      let em = 1;
      if (this.boltframe[ep] - this.boltx < 0) {
        em = 1 + (this.boltframe[ep] - this.boltx) / 3;
      } else if (this.imagetimer === 0 && this.boltalive[ep] === 1) {
        let eB = Zs(
          pK + 80 + this.boltframe[ep] * this.boltspeed - this.boltx * this.boltspeed,
          pP + pd * pq(eu),
          D,
        );
        eB.sprite_index = "spr_attackspot";
        eB.image_alpha = 0.4;
        eB.depth = -119;
        if (pg) {
          eB.image_blend = this.boltcolor[eu];
        }
      }
      if (this.boltalive[ep] === 1) {
        Z.draw_sprite_ext(
          "spr_attackspot",
          0,
          pK + 80 + this.boltframe[ep] * this.boltspeed - this.boltx * this.boltspeed,
          pP + pd * pq(eu),
          1,
          1,
          0,
          pg ? this.boltcolor[eu] : Zf.white,
          em,
        );
        pG[this.boltchar[ep]]++;
      }
    }
    for (let eX = 0; eX < ZO(); eX++) {
      if (pG[eX] === 0 && this.havechar[eX] === 1 && this.attacked[eX] === 0) {
        this.attacked[eX] = 1;
        this.target = eX;
        this.userEvent(1);
      }
    }
    if (Z7() > 0) {
      if (ZX.flag[13] === 1 && C <= 3) {
        if (ZF() && this.havechar[0] === 1) {
          this.boltcheck(0);
        }
        if (ZJ() && this.havechar[1] === 1) {
          this.boltcheck(1);
        }
        if (ZN() && this.havechar[2] === 1) {
          this.boltcheck(2);
        }
      } else if (ZF()) {
        this.boltcheckOne();
      }
    } else {
      this.fakefade = 1;
      if (this.posttimer < this.timermax - 35) {
        this.posttimer = this.timermax - 34;
      }
    }
    this.imagetimer++;
    this.boltx++;
    for (let eS = 0; eS < this.pressbuffer.length; eS++) {
      this.pressbuffer[eS]--;
    }
    if (this.imagetimer > 1) {
      this.imagetimer = 0;
    }
    this.goahead = 0;
    this.goahead = 1;
    for (let eU = 0; eU < C; eU++) {
      if (this.attacked[eU] !== 1 && this.havechar[eU] === 1) {
        this.goahead = 0;
      }
    }
    if (Z7() === 0) {
      this.goahead = 1;
    }
    if (this.goahead === 1) {
      this.posttimer++;
      if (
        this.posttimer > this.timermax - 35 &&
        this.haveauto === 1 &&
        this.autoed === 0 &&
        Z7() > 0
      ) {
        let eO = ZC.charinstance(this.sus);
        if (eO) {
          eO.points = 160;
          if (ZX.automiss && ZX.automiss[ZX.chartarget[this.sus]] === 1) {
            eO.points = 0;
          }
          eO.state = 1;
          eO.attacktimer = 0;
          eO.is_auto_susie = 1;
        }
        this.posttimer -= 25;
        this.autoed = 1;
      }
      if (this.posttimer > this.timermax) {
        this.fade = 1;
        Zn.with("obj_heroparent", (eL) => {
          if (eL.state === 1) {
            eL.state = 0;
          }
          eL.attacked = 0;
          eL.itemed = 0;
        });
        if (Z7() === 0) {
          pj();
        } else if (ZX.chapter < 3 || (ZX.mnfight !== 1.5 && ZX.mnfight !== 2)) {
          ZX.mnfight = 1;
          ZX.myfight = -1;
        }
      }
    }
    if (this.fade === 1 || this.fakefade === 1) {
      this.fadeamt += 0.08;
      Z.draw_set_color(Zf.black);
      Z.draw_set_alpha(Math.min(1, this.fadeamt));
      Z.draw_rectangle(pK - 1, ZX.chapter >= 4 ? pP : pP - 1, pK + 640, pP + 300, false);
      Z.draw_set_alpha(1);
      if (this.fade === 1 && this.fadeamt > 1) {
        this.instance_destroy();
      }
    }
  }
};
Zh(p5, "obj_attackpress");
ZR(p5, "kinds", Zk("obj_attackpress", ZT));
ZR(p5, "defaultDepth", 1);
var p6 = p5;
var p7 = class mx extends ZT {
  create() {
    let Z = (this.slots = Math.max(3, ZO()));
    this.spelltimer = 0;
    this.spelltotal = 0;
    this.char = 0;
    this.castyet = 0;
    this.re_castyet = 0;
    this.active = 0;
    this.alarm[0] = 5;
    this.spellwriter = null;
    this.using = new Array(Z).fill(0);
    this.gotspell = new Array(Z).fill(0);
    this.gotitem = new Array(Z).fill(0);
    this.visible = false;
  }
  writer(Z) {
    return Q(Z) || R();
  }
  pose(Z, C) {
    if (Z) {
      if (ZX.charaction[C] === 2 && F(ZX.charspecial[C])) {
        W(Z, ZX.charspecial[C]);
        Z.state = 6;
        Z.acttimer = 0;
        Z.actcast = 1;
        Z.alarm[4] = 15;
        return;
      }
      if (ZX.charaction[C] === 2) {
        T(Z, ZX.charspecial[C]);
      }
      Z.state = ZX.charaction[C] === 2 ? 2 : 4;
      Z.attacktimer = 0;
    }
  }
  alarmEvent(Z) {
    if (Z === 0) {
      for (let C = 0; C < ZO(); C++) {
        if (
          (ZX.charaction[C] === 2 || ZX.charaction[C] === 4) &&
          (this.spelltotal++,
          (this.using[C] = 1),
          ZX.charaction[C] === 2 ? (this.gotspell[C] = 1) : (this.gotitem[C] = 1),
          this.castyet === 0)
        ) {
          let pd = ZC.charinstance(C);
          this.pose(pd, C);
          this.castyet = 1;
          this.char = C + 1;
          pF(ZX.charspecial[C], C);
          this.spellwriter = this.writer(ZX.charspecial[C]);
        }
      }
      this.active = 1;
      ZX.spelldelay = 90;
    }
  }
  step() {
    if (
      this.active === 1 &&
      (this.spelltimer++, this.spelltimer >= ZX.spelldelay && !Zn.exists(this.spellwriter))
    ) {
      let Z = () => {
        py();
        if (Zn.exists(this.spellwriter)) {
          this.spellwriter.instance_destroy();
        }
        this.instance_destroy();
      };
      if (this.char >= this.slots || this.spelltotal === 1) {
        Z();
        return;
      }
      if (Z7() > 0) {
        let C = this.char;
        if (this.gotitem[C] === 1 || this.gotspell[C] === 1) {
          this.re_castyet = 1;
          let pd = ZC.charinstance(C);
          if (pd && ZB(ZX.charspecial[C]) && this.gotspell[C] === 1) {
            this.pose(pd, C);
          } else if (pd) {
            pd.state = this.gotitem[C] === 1 ? 4 : 2;
          }
          if (Zn.exists(this.spellwriter)) {
            this.spellwriter.instance_destroy();
          }
          pF(ZX.charspecial[C], C);
          this.spellwriter = this.writer(ZX.charspecial[C]);
        }
        ZX.spelldelay = 90;
        if (this.re_castyet === 0) {
          ZX.spelldelay = 1;
        }
        this.char++;
        for (let pE = 0; pE < this.slots - 1; pE++) {
          if (this.char < this.slots && this.using[this.char] === 0) {
            this.char++;
          }
        }
        this.spelltimer = 0;
        this.re_castyet = 0;
      } else {
        Z();
      }
    }
  }
};
Zh(p7, "obj_spellphase");
ZR(p7, "kinds", Zk("obj_spellphase", ZT));
ZR(p7, "defaultDepth", 0);
var p8 = p7;
var p9 = class mr extends ZT {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.target = null;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.damage = 1;
    this.caster = 0;
    this.star = 0;
    let Z = Zn.first("obj_herosusie");
    if (Z) {
      this.depth = Z.depth;
      Z.visible = false;
    }
    this.red = 0;
  }
  step() {
    this.image_index = this.t / 2;
    if (this.t >= 28) {
      let Z = Zn.first("obj_herosusie");
      if (Z) {
        Z.visible = true;
      }
      this.instance_destroy();
      return;
    }
    if (Zn.exists(this.target) && this.t === 10) {
      Zj("snd_rudebuster_swing");
      let C = Zs(this.x + 40, this.y + 30, pp);
      C.caster = this.caster;
      C.target = this.target;
      C.damage = this.damage;
      C.star = this.star;
      if (this.red === 1) {
        C.red = 1;
      }
    }
    this.t++;
  }
  destroy() {
    let Z = Zn.first("obj_herosusie");
    if (Z) {
      Z.visible = true;
    }
  }
};
Zh(p9, "obj_rudebuster_anim");
ZR(p9, "kinds", Zk("obj_rudebuster_anim", ZT));
ZR(p9, "defaultDepth", 0);
ZR(p9, "defaultSprite", "spr_susie_rudebuster");
var pZ = p9;
var pC = class mM extends ZT {
  create() {
    this.target = null;
    this.damage = 1;
    this.star = 0;
    this.caster = 0;
    this.image_alpha = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_speed = 1;
    this.t = 0;
    this.explode = 0;
    this.bolt_timer = 0;
    this.chosen_bolt = 0;
    this.final_bolt = 0;
    this.red = 0;
    this.aft = [];
  }
  step() {
    if (this.image_alpha < 1) {
      this.image_alpha += 0.25;
    } else {
      this.image_alpha = 1;
    }
    if (this.t === 0) {
      let Z = this.target;
      let C = Zn.first("obj_queenshield_enemy");
      if (C) {
        this.depth = C.depth - 1;
        this.cx = C.x + 24;
        this.cy = C.y + 140;
      } else {
        this.cx = ZX.monsterx[Z.myself];
        this.cy = ZX.monstery[Z.myself];
      }
      this.direction = Zd(this.x, this.y, this.cx, this.cy) - 20;
      this.speed = 24;
      this.friction = -1.5;
      this.image_angle = this.direction;
      if (this.red === 1) {
        this.sprite_index = "spr_rudebuster_beam_red";
        this.image_xscale = 2.5;
        this.image_yscale = 2.5;
      }
    }
    if (this.t >= 1 && this.explode === 0) {
      this.bolt_timer++;
      if (ZF() && this.bolt_timer >= 4 && this.chosen_bolt === 0) {
        this.chosen_bolt = this.bolt_timer;
      }
      let pd = Zd(this.x, this.y, this.cx, this.cy);
      this.direction += Zq(pd, this.direction) / 4;
      this.image_angle = this.direction;
      if (Zg(this.x, this.y, this.cx, this.cy) <= 40) {
        this.final_bolt = ZX.chapter >= 3 ? this.bolt_timer : this.chosen_bolt;
        this.visible = false;
        this.explode = 1;
        this.t = 1;
        this.speed = 0;
        this.friction = 0;
      }
    }
    if (this.explode === 1) {
      if (this.t === 1) {
        if (this.chosen_bolt > 0) {
          let pq = this.final_bolt - this.chosen_bolt;
          let pK = {
            0: 30,
            1: 28,
            2: 22,
            3: 20,
            4: 13,
            5: 11,
            6: 10,
          }[pq];
          if (pK) {
            this.damage += pK;
          }
          if (ZG(pq) <= 2) {
            Zj("snd_scytheburst");
          }
        }
        if (ZX.chapter >= 4 && ZC.rudebusterHit) {
          ZC.rudebusterHit(this, "before");
        }
        if (this.red === 1) {
          this.damage += 90;
        }
        ZX.hittarget[this.star] = 0;
        if (ZX.chapter === 3 && Zn.exists("obj_knight_enemy")) {
          this.damage = ZK(this.damage / 2);
        }
        let pE = Zn.first("obj_queenshield_enemy");
        let pg = pE && Zn.first("obj_queen_enemy");
        if (pg) {
          pg.shieldhp -= this.damage;
          pE.con = 1;
          pE.event_user(0);
        } else {
          let pP = Zu(this.star, this.damage, this.caster);
          if (pP && this.sprite_index === "spr_rudebuster_beam_green") {
            pP.type = 1.5;
            pP.ystart -= 30;
          }
        }
        if (!(ZX.chapter >= 4) || !ZC.rudebusterHit || !ZC.rudebusterHit(this, "after")) {
          Zj("snd_rudebuster_hit");
        }
        for (let pV = 0; pV < 8; pV++) {
          let pG = Zs(this.cx, this.cy, D);
          pG.sprite_index = this.sprite_index;
          pG.image_index = 4;
          pG.image_xscale = 2;
          pG.image_yscale = 2;
          pG.image_angle = 45 + pV * 90;
          pG.direction = pG.image_angle;
          pG.speed = 25;
          pG.depth = this.depth - 10;
          pG.fadespeed = 0.06;
          pG.image_speed = 0;
        }
      }
      if (this.t >= 18) {
        this.instance_destroy();
      }
    }
    if (this.explode === 0) {
      let px = Zs(this.x, this.y, D);
      px.sprite_index = this.sprite_index;
      px.image_yscale = 1.8;
      px.image_xscale = 2;
      px.image_angle = this.image_angle;
      px.image_index = 4;
      px.image_speed = 0;
      px.image_alpha = this.image_alpha - 0.2;
      px.fadespeed = 0.07;
      px.depth = this.depth + 1;
    }
    this.t++;
  }
};
Zh(pC, "obj_rudebuster_bolt");
ZR(pC, "kinds", Zk("obj_rudebuster_bolt", ZT));
ZR(pC, "defaultDepth", -10);
ZR(pC, "defaultSprite", "spr_rudebuster_beam");
var pp = pC;
var pu = class mh extends ZT {
  create() {
    this.con = 5;
    this.target = null;
    this.fail = 1;
    this.flashcolor = Zf.blue;
    this.visible = false;
    this.t = 0;
  }
  step() {
    let Z = this.target;
    if (!Zn.exists(Z)) {
      this.instance_destroy();
      return;
    }
    this.t++;
    if (this.t <= 8) {
      Z.image_blend = ZQ(Z.image_blend, this.flashcolor, 0.12);
    } else if (this.t <= 16) {
      Z.image_blend = ZQ(Z.image_blend, Zf.white, 0.16);
    } else {
      Z.image_blend = Zf.white;
      this.instance_destroy();
    }
  }
};
Zh(pu, "obj_pacifyspell");
ZR(pu, "kinds", Zk("obj_pacifyspell", ZT));
ZR(pu, "defaultDepth", 0);
var pm = pu;
function pB(Z) {
  let C = ZX.chartarget[Z];
  let pd = 0;
  if (C === 0 && ZX.monster[0] === 0) {
    C = 1;
  }
  if (C === 1 && ZX.monster[1] === 0) {
    C = 2;
  }
  if (C === 2) {
    if (ZX.monster[2] === 0) {
      C = 3;
    }
    if (C === 3 && ZX.monster[0] === 1) {
      C = 0;
    }
    if (C === 3 && ZX.monster[1] === 1) {
      C = 1;
    }
    if (C === 3) {
      pd = 1;
    }
  }
  ZX.chartarget[Z] = C;
  let pE = ZC.charinstance(Z);
  if (pE) {
    pE.cancelattack = pd;
  }
  return pd;
}
Zh(pB, "scr_retarget");
function pX(Z) {
  let C = 0;
  if (Z === 0 && ZX.monster[0] === 0) {
    Z = 1;
  }
  if (Z === 1 && ZX.monster[1] === 0) {
    Z = 2;
  }
  if (Z === 2) {
    if (ZX.monster[2] === 0) {
      Z = 3;
    }
    if (Z === 3 && ZX.monster[0] === 1) {
      Z = 0;
    }
    if (Z === 3 && ZX.monster[1] === 1) {
      Z = 1;
    }
    if (Z === 3) {
      C = 1;
    }
  }
  return [Z, C];
}
Zh(pX, "retargetStar");
function pS(Z, C, pd) {
  return CU(pd - 502, C);
}
function pi(Z) {
  let C = 1;
  if (ZX.hp[ZX.char[Z]] <= 0) {
    C = 0;
  }
  if (ZX.acting[Z] === 1) {
    C = 0;
  }
  if (ZX.char[Z] === 0) {
    C = 0;
  }
  if (ZX.charmove[Z] === 0) {
    C = 0;
  }
  if (ZX.charauto[ZX.char[Z]] === 1) {
    C = 0;
  }
  return C;
}
Zh(pi, "scr_charcan");
var pU = Zh(() => ZO(), "DONE_TURN");
function pO() {
  let Z = pk();
  let C = ZX.charturn;
  if (ZX.chapter >= 4 && ZO() <= 3 && ZC.chapterNexthero && ZC.chapterNexthero(Z)) {
    return;
  }
  if (ZX.chapter >= 4 && ZX.charturn === 0 && ZC.nextheroSkip && ZC.nextheroSkip(Z)) {
    ZX.charturn = pU();
    pH();
    return;
  }
  let pd = -1;
  for (let pE = ZX.charturn + 1; pE < ZO(); pE++) {
    if (ZX.charmove[pE] === 1 && pi(pE) && ZX.acting[pE] === 0 && !r(pE)) {
      pd = pE;
      break;
    }
  }
  if (pd === -1) {
    pH();
    return;
  }
  ZX.charturn = pd;
  ZX.bmenuno = 0;
  if (Z) {
    ZX.temptension[ZX.charturn] = ZX.tension;
    for (let pg = 0; pg < 12; pg++) {
      Z.tempitem[pg][ZX.charturn] = Z.tempitem[pg][C];
    }
  }
  if (
    ZX.chapter >= 4 &&
    Z &&
    Z.disablesusieralseiattack === 1 &&
    (ZX.charturn === 1 || ZX.charturn === 2)
  ) {
    ZX.bmenucoord[0][ZX.charturn] = 1;
  }
}
Zh(pO, "scr_nexthero");
function pL() {
  let Z = pk();
  let C = 0;
  let pd = (pE) => ZX.charmove[pE] === 1 && ZX.charauto[ZX.char[pE]] !== 1;
  if (ZX.charturn === 1 && pd(0)) {
    ZX.charturn = 0;
    C = 1;
  }
  if (ZX.charturn >= 2) {
    C = 1;
    let pE = -1;
    for (let pg = ZX.charturn - 1; pg >= 1; pg--) {
      if (pd(pg) && ZX.acting[pg] === 0 && !r(pg)) {
        pE = pg;
        break;
      }
    }
    if (pE !== -1) {
      ZX.charturn = pE;
    } else if (pd(0)) {
      ZX.charturn = 0;
    }
  }
  if (C === 1) {
    ZX.bmenuno = 0;
    if (ZX.chapter >= 2) {
      let pq = ZS(ZX.char[ZX.charturn]);
      if (pq === 4) {
        Zn.with("obj_monsterparent", (pK) => {
          pK.actingnoe = 0;
        });
      }
      if (pq === 3) {
        Zn.with("obj_monsterparent", (pK) => {
          pK.actingral = 0;
        });
      }
      if (pq === 2) {
        Zn.with("obj_monsterparent", (pK) => {
          pK.actingsus = 0;
        });
      }
      if (ZX.actingsingle) {
        ZX.actingsingle[ZX.charturn] = 0;
      }
      if (ZX.actingsimul) {
        ZX.actingsimul[ZX.charturn] = 0;
      }
    }
    ZX.faceaction[ZX.charturn] = 0;
    ZX.chartarget[ZX.charturn] = 0;
    ZX.charaction[ZX.charturn] = 0;
    ZX.charspecial[ZX.charturn] = 0;
    j(ZX.charturn);
    if (Z) {
      Z.movenoise = 1;
    }
  }
  if (ZX.charturn === 0) {
    Zn.with("obj_monsterparent", (pK) => {
      pK.acting = 0;
    });
    for (let pK = 0; pK < ZO(); pK++) {
      ZX.acting[pK] = 0;
    }
    ZX.tension = ZX.temptension[0];
    if (Z) {
      for (let pP = 0; pP < 12; pP++) {
        Z.tempitem[pP][0] = ZX.item[pP];
      }
    }
  } else {
    ZX.tension = ZX.temptension[ZX.charturn];
    if (Z) {
      for (let pV = 0; pV < 12; pV++) {
        Z.tempitem[pV][ZX.charturn] = Z.tempitem[pV][ZX.charturn - 1];
      }
    }
  }
}
Zh(pL, "scr_prevhero");
function pH() {
  if (ZX.monster && ZX.monster.__customBoard && ZC.customEndturn) {
    ZC.customEndturn();
  }
  let Z = pk();
  if (ZX.chapter >= 4 && Z && ZC.chapterEndturn && ZC.chapterEndturn(Z)) {
    if (ZO() > 3 && ZX.myfight === 1) {
      let pE = false;
      for (let pg = 3; pg < ZO(); pg++) {
        if (ZX.charaction[pg] === 2 || ZX.charaction[pg] === 4) {
          pE = true;
        }
      }
      if (pE) {
        Zn.with("obj_attackpress", (pq) => pq.instance_destroy());
        ZX.myfight = 4;
        Zs(0, 0, p8);
      }
    }
    return;
  }
  if (Z) {
    for (let pq = 0; pq < 12; pq++) {
      ZX.item[pq] = Z.tempitem[pq][ZX.charturn];
    }
    for (let pK = 0; pK < 12; pK++) {
      for (let pP = 0; pP < ZO(); pP++) {
        Z.tempitem[pK][pP] = ZX.item[pK];
      }
    }
  }
  Zn.with("obj_writer", (pV) => pV.instance_destroy());
  Zn.with("obj_face", (pV) => pV.instance_destroy());
  ZX.attacking = 0;
  for (let pV = 0; pV < ZO(); pV++) {
    if (ZX.charauto[ZX.char[pV]] === 1 && ZX.hp[ZX.char[pV]] > 0) {
      if (ZX.monster[2] === 1) {
        ZX.chartarget[pV] = 2;
      }
      if (ZX.monster[1] === 1) {
        ZX.chartarget[pV] = 1;
      }
      if (ZX.monster[0] === 1) {
        ZX.chartarget[pV] = 0;
      }
    }
    if (ZX.charaction[pV] === 1) {
      ZX.attacking = 1;
    }
  }
  if (Z) {
    Z.messagepriority = -1;
    Z.attackpriority = -1;
  }
  if (ZX.chapter === 3 && Z) {
    Z.idefendedthisturn = 0;
  }
  let C =
    (ZX.chapter === 2 || ZX.chapter === 3) &&
    ZC.scr_nextact &&
    [0, 1, 2].some((pG) => ZX.actingsingle && ZX.actingsingle[pG] === 1);
  let pd = ZU();
  if (ZX.acting[pd] === 0 && !C) {
    py();
  } else {
    ZX.charturn = pU();
    ZX.myfight = 3;
    ZX.currentactingchar = 0;
    if (C && ZX.acting[pd] === 0) {
      ZC.scr_nextact.call({});
    }
    if (
      ZX.chapter === 2 &&
      Zn.exists("obj_sweet_enemy") &&
      [0, 1, 2].every((pG) => (ZX.actingsingle[pG] === 1) == (pG === pd))
    ) {
      Zn.first("obj_sweet_enemy").simultotal_funny = 1;
    }
    if (ZX.chapter >= 2 && ZC.scr_act_simul && ZX.acting[pd] === 1 && ZX.actingsimul[pd] === 1) {
      ZC.scr_act_simul.call({});
    }
  }
}
Zh(pH, "scr_endturn");
function py() {
  let Z = pk();
  if (!Z || (ZX.chapter >= 4 && ZC.chapterAttackphase && ZO() <= 3 && ZC.chapterAttackphase(Z))) {
    return;
  }
  if (ZX.chapter >= 5 && ZO() > 3 && ZX.hittarget) {
    for (let pd = 0; pd < 3; pd++) {
      ZX.hittarget[pd] = 0;
    }
  }
  let C = 0;
  if (Z7() === 0) {
    C = 1;
  }
  if (C === 0) {
    let pE = 1;
    ZX.charturn = pU();
    for (let pg = 0; pg < ZO(); pg++) {
      if (ZX.charaction[pg] === 4 || ZX.charaction[pg] === 2) {
        pE = 0;
      }
    }
    if (ZX.myfight === 4) {
      pE = 1;
    }
    if (pE === 1) {
      ZX.myfight = 1;
      Zs(2, 365, p6);
    } else {
      ZX.myfight = 4;
      Zs(0, 0, p8);
    }
  } else {
    pj();
  }
}
Zh(py, "scr_attackphase");
function pY() {
  let Z = pk();
  if (!Z) {
    return;
  }
  k();
  b();
  let C = 0;
  if (Z7() === 0) {
    C = 1;
  }
  if (ZX.chapter >= 2 && ZX.flag && ZX.flag[39] === 1) {
    C = 1;
  }
  if (C === 0) {
    Z.messagepriority = -1;
    Z.attackpriority = -1;
    if (ZX.flag[14] === 0) {
      for (let pE = 0; pE < 20; pE++) {
        for (let pg = 0; pg < 20; pg++) {
          ZX.bmenucoord[pE][pg] = 0;
        }
      }
    }
    if (ZX.chapter === 3 && Zn.exists("obj_rouxls_ch3_enemy")) {
      ZX.bmenucoord[0][0] = 2;
      ZX.bmenucoord[0][1] = 2;
      ZX.bmenucoord[0][2] = 2;
      if (Z.rouxlsgridenabled) {
        Z.rouxlsbuttoncount_y = 4;
      }
    }
    if (ZX.chapter === 3) {
      Zn.with("obj_gameshow_battlemanager", (pq) => {
        pq.turns++;
      });
    }
    ZX.mnfight = 0;
    ZX.myfight = 0;
    ZX.bmenuno = 0;
    ZX.charturn = 0;
    let pd = 0;
    if (ZX.chapter >= 5 && ZC.chapterMnendturn) {
      ZC.chapterMnendturn(Z);
    }
    for (let pq = 0; pq < ZO(); pq++) {
      let pK = ZC.charinstance(pq);
      if (pK) {
        pK.tu = 0;
      }
      let pP = ZX.char[pq];
      if (ZX.char[pq] !== 0 && ZX.hp[pP] <= 0) {
        let pV = ZP(ZX.maxhp[pP] / 8);
        let pG = Zs(pK.x, pK.y + pK.myheight - 24, CH);
        pG.delay = 1;
        pG.type = 3;
        pG.damage = Z9(pq, pV);
        if (ZX.hp[pP] >= 1) {
          pG.specialmessage = 4;
        }
      }
    }
    for (
      ZX.charturn = 0;
      ZX.charturn < ZO() &&
      (ZX.charmove[ZX.charturn] === 0 || ZX.charauto[ZX.char[ZX.charturn]] === 1);
    ) {
      ZX.charturn++;
    }
    if (ZX.charturn >= ZO()) {
      ZX.charturn = pU();
      pd = 1;
    }
    for (let px = 0; px < ZO(); px++) {
      ZX.acting[px] = 0;
      ZX.temptension[px] = ZX.tension;
      ZX.charspecial[px] = 0;
      ZX.targeted[px] = 0;
      ZX.charaction[px] = 0;
      ZX.faceaction[px] = 0;
      if (ZX.actingsingle) {
        ZX.actingsingle[px] = 0;
      }
      if (ZX.actingsimul) {
        ZX.actingsimul[px] = 0;
      }
      if (ZX.actingtarget) {
        ZX.actingtarget[px] = 0;
      }
      if (ZX.monsterattackname) {
        ZX.monsterattackname[px] = " ";
      }
    }
    ZX.currentactingchar = 0;
    Zn.with("obj_monsterparent", (pr) => {
      pr.attacked = 0;
      pr.talked = 0;
      pr.acting = 0;
      pr.actingsus = 0;
      pr.actingral = 0;
      pr.actingnoe = 0;
    });
    if (pd === 1) {
      if (Zi(2) === 0 && ZX.charauto[ZX.char[0]] === 1) {
        ZX.acting[0] = 1;
        ZX.myfight = 3;
      }
      pH();
    }
    for (let pr = 0; pr < 12; pr++) {
      for (let pM = 0; pM < ZO(); pM++) {
        Z.tempitem[pr][pM] = ZX.item[pr];
      }
    }
  } else {
    pj();
  }
}
Zh(pY, "scr_mnendturn");
function pj() {
  ZX.myfight = 7;
  ZX.mnfight = -1;
  let Z = pk();
  if (Z) {
    Z.victory = 1;
  }
  for (let C = 0; C < 3; C++) {
    if (ZX.monster[C] === 1) {
      let pd = ZC.monsterinstance(C);
      if (pd && !pd.destroyed) {
        pd.scr_monsterdefeat();
      }
    }
  }
}
Zh(pj, "scr_wincombat");
function pb() {
  if (ZX.monster && ZX.monster.__customBoard && ZC.customEndcombat && ZC.customEndcombat()) {
    return;
  }
  ZX.fighting = 0;
  Zn.with("obj_monsterparent", (C) => C.instance_destroy());
  Zn.with("obj_bulletparent", (C) => C.instance_destroy());
  Zn.with("obj_heroparent", (C) => C.instance_destroy());
  let Z = pk();
  if (Z) {
    Z.instance_destroy();
  }
  if (!ZC.roomEndcombat || !ZC.roomEndcombat()) {
    ZX.battleover = ZX.battleover || "win";
    Zb();
  }
}
Zh(pb, "scr_endcombat");
function pI(Z, C = 0) {
  ZX.tension -= Z;
  ZX.faceaction[ZX.charturn] = 2;
  ZX.charaction[ZX.charturn] = 2;
  let pd = ZX.bmenucoord[2][ZX.charturn];
  if (ZX.chapter !== 1 && ZX.flag[34] === 0) {
    ZX.charspecial[ZX.charturn] = (ZX.battlespell[ZX.charturn] || [])[pd];
  } else {
    ZX.charspecial[ZX.charturn] = ZX.spell[ZX.char[ZX.charturn]][pd];
  }
  ZX.tensionselect = 0;
  let pE = ZX.chapter >= 2 && ZX.charinstance ? ZX.charinstance[ZX.charturn] : null;
  if (pE && C === 1) {
    if (!pE.spellanimed) {
      pE.remspellsprite = pE.spellsprite;
      pE.remspellframes = pE.spellframes;
      pE.spellanimed = 1;
    }
    pE.spellframes = 0;
    pE.spellsprite = pE.spellreadysprite;
  } else if (pE && pE.spellanimed) {
    pE.spellframes = pE.remspellframes;
    pE.spellsprite = pE.remspellsprite;
    pE.spellanimed = 0;
  }
  s(ZX.charspecial[ZX.charturn], ZX.charturn);
  if (F(ZX.charspecial[ZX.charturn])) {
    ZX.faceaction[ZX.charturn] = 6;
  }
  pO();
}
Zh(pI, "scr_spellconsumeb");
function pf(Z, C, pd) {
  let pE = 0;
  for (let pK = 0; pK < 12; pK++) {
    if (Z(pK) !== 0) {
      pE = pK;
    }
  }
  let pg = C % 2;
  if (pd > 0) {
    if (pg === 1 && C + 1 <= pE) {
      return C + 1;
    } else if (pg <= pE) {
      return pg;
    } else {
      return 0;
    }
  }
  let pq = (pE >> 1) * 2;
  if (pq + pg <= pE) {
    return pq + pg;
  } else {
    return pq;
  }
}
Zh(pf, "itemWrap");
function pQ(Z) {
  let C = Zj("snd_cardrive");
  try {
    ZI(C, 1.4);
    ZA(C, 0.8, 0);
  } catch {}
  let pd = ZX.charinstance && ZX.charinstance[Z];
  if (pd) {
    let pE = Zs(pd.x, pd.y, Cf);
    pE.target = pd;
    pE.particlecolor = Zf.orange;
  }
}
Zh(pQ, "tpItemFx");
function pt(Z, C) {
  let pd = pk();
  ZX.faceaction[ZX.charturn] = 3;
  ZX.charaction[ZX.charturn] = 4;
  ZX.charspecial[ZX.charturn] = Z;
  let pE = Z >= 200 ? Zy(Z) : null;
  if (pd && pE && pE.replace) {
    pd.tempitem[C][ZX.charturn] = 200 + pE.replace;
    pO();
    return;
  }
  if (pd) {
    let pg = ZX.charturn;
    for (let pq = C; pq < 12; pq++) {
      pd.tempitem[pq][pg] = pd.tempitem[pq + 1] ? pd.tempitem[pq + 1][pg] : 0;
    }
  }
  pO();
}
Zh(pt, "scr_itemconsumeb");
function pF(Z, C) {
  if (f(Z, C)) {
    return;
  }
  let pd = ZX.charname[ZX.char[C]];
  let pE = ZX.chartarget[C];
  let pg = {
    8: "* " + pd + " cast SLEEP MIST!/%",
    9: "* " + pd + " cast ICE SHOCK!/%",
    10: "* " + pd + " cast SNOWGRAVE!/%",
    1: "* " + pd + " cast RUDE BUSTER!/%",
    2: "* " + pd + " cast HEAL PRAYER!/%",
    4: "* " + pd + " used RUDE BUSTER!/%",
    5: "* " + pd + " used RED BUSTER!/%",
    6: "* " + pd + " cast DUAL HEAL!/%",
    201: "* " + pd + " used the DARK CANDY!/%",
    202: "* " + pd + " used the REVIVE MINT!/%",
    205: "* " + pd + " used the BROKEN CAKE!/%",
    206: "* " + pd + " used the TOPCAKE!/%",
    207: "* " + pd + " used the SPINCAKE!/%",
    208: "* " + pd + " used the DARKBURGER!/%",
    209: "* " + pd + " used the LANCERCOOKIE!/%",
    210: "* " + pd + " used the GIGASALAD!/%",
    211: "* " + pd + " used the CLUBS SANDWICH!/%",
    212: "* " + pd + " used the HEARTS DONUT!/%",
    213: "* " + pd + " used the CHOCO DIAMOND!/%",
    214: "* " + pd + " used the FAV SANDWICH!/%",
    215: "* " + pd + " used the ROULXS ROUX!/%",
  };
  ZX.msg = new Array(100).fill(" ");
  let pq =
    Z >= 200 && ZH[Z]
      ? "* " + pd + " used the " + ZH[Z][0].toUpperCase() + "!/%"
      : "* " + pd + " cast " + String(Z4(Z).spellname || "a spell").toUpperCase() + "!/%";
  ZX.msg[0] = pg[Z] || pq;
  if (Z === 3) {
    ZX.msg[0] = "* " + pd + " cast PACIFY!/%";
    [pE] = pX(pE);
    if (ZX.monster[pE] === 1 && ZX.monsterstatus[pE] !== 1) {
      ZX.msg[0] = "* " + pd + " cast PACIFY^1!&* But the enemy wasn't \\cBTIRED\\cW.../%";
      if (ZX.mercymod[pE] >= 100) {
        ZX.msg[0] =
          "* " +
          pd +
          " cast PACIFY^1!&* But the foe wasn't \\cBTIRED\\cW... try \\cYSPARING\\cW!/%";
      }
    }
  }
  if (Z === 100) {
    let pK;
    [pE, pK] = pX(pE);
    let pP = ZX.monstername[pE] || "";
    ZX.msg[0] = "* " + pd + " spared " + pP + "!/%";
    if (!(ZX.mercymod[pE] >= 100)) {
      ZX.msg[0] = "* " + pd + " spared " + pP + "^2!&* But its name wasn't \\cYYELLOW\\cW.../%";
      if (ZX.monsterstatus[pE] === 1) {
        ZX.msg[0] = "* " + pd + " spared " + pP + "^2!&* But its name wasn't \\cYYELLOW\\cW.../";
        ZX.msg[1] = "* (Try using Ralsei's \\cBPACIFY\\cW!)/%";
      }
    }
    if (pK === 1) {
      ZX.msg[0] = "* " + pd + " spared!/%";
    }
  }
  if (Z === 204) {
    ZX.msg[0] = "* " + pd + " read the MANUAL!/";
    ZX.msg[1] = "* But nothing happened.../%";
    let pV = [0, 0, 0];
    for (let pG = 0; pG < 3; pG++) {
      if (ZX.monster[pG] !== 1) {
        continue;
      }
      let px = ZX.monstertype[pG];
      if (px === 5) {
        pV[pG] = 1;
        ZX.monsterstatus[pG] = 1;
        ZX.monstercomment[pG] = "(Tired)";
      }
      if (px === 6) {
        pV[pG] = 2;
      }
      if (px === 7 || px === 16) {
        pV[pG] = 3;
        let pr = ZX.monsterinstance[pG];
        if (pr && !pr.destroyed) {
          pr.battlecancel = 1;
          if (pr.manual === 0) {
            pr.manual = 1;
            Z8(pr.myself ?? pG, 50);
          }
        }
      }
    }
    if (pV.some((pM) => pM > 0)) {
      ZX.msg[1] =
        pV
          .map((pM, ph) =>
            pM === 1
              ? "* " + ZX.monstername[ph] + " was \\cBbored to tears\\cW!&"
              : pM === 2
                ? "* " + ZX.monstername[ph] + " listened politely!&"
                : pM === 3
                  ? "* " + ZX.monstername[ph] + " became sentimental!&"
                  : "",
          )
          .join("") + "/%";
    }
  }
  if (
    Z === 203 &&
    ((ZX.msg[0] = "* " + pd + " used the GLOWSHARD!/"),
    (ZX.msg[1] = "* But nothing happened.../%"),
    ZX.chapter <= 2)
  ) {
    let pM = [];
    for (let ph = 0; ph < 3; ph++) {
      if (ZX.monster[ph] === 1 && ZX.monstertype[ph] === 5) {
        ZX.mercymod[ph] = 200;
        pM.push(ph);
      }
    }
    if (pM.length) {
      ZX.msg[1] = pM.map((pR) => "* " + ZX.monstername[pR] + " became enraptured!&").join("") + "/";
      ZX.msg[2] = "* The GLOWSHARD disappeared!/%";
    }
  }
}
Zh(pF, "scr_spelltext");
function pT(Z, C) {
  let pd = ZC.charinstance(Z);
  if (!pd) {
    return;
  }
  let pE = Zs(pd.x, pd.y, Cf);
  pE.target = pd;
  let pg = Zs(pd.x, pd.y + pd.myheight - 24 - pd.tu * 20, CH);
  pg.delay = 8;
  pg.type = 3;
  pg.damage = C;
  if (ZX.hp[ZX.char[Z]] >= ZX.maxhp[ZX.char[Z]]) {
    pg.specialmessage = 3;
  }
  pd.tu++;
}
Zh(pT, "healFx");
function pW(Z, C) {
  Z9(Z, C);
  pT(Z, C);
  ZX.spelldelay = 15;
}
Zh(pW, "scr_healitemspell");
function pz(Z) {
  ZZ(Z);
  for (let C = 0; C < ZO(); C++) {
    if (ZX.char[C] !== 0) {
      pT(C, Z);
    }
  }
  ZX.spelldelay = 20;
}
Zh(pz, "scr_healallitemspell");
function pJ(Z, C) {
  let pd = ZX.chartarget[C];
  ZX.spelldelay = 10;
  let pE = 0;
  if (!t(Z, C) && (!(ZX.chapter >= 4) || !ZC.chapterSpell || !ZC.chapterSpell(Z, C))) {
    switch (Z) {
      case 2: {
        let pg = ZX.battlemag[C] * 5;
        Z9(pd, pg);
        pT(pd, pg);
        ZX.spelldelay = 15;
        break;
      }
      case 3: {
        if (ZX.monster[pd] === 0) {
          [pd, pE] = pX(pd);
        }
        if (ZX.monster[pd] === 1) {
          let pq = ZC.monsterinstance(pd);
          if (ZX.monsterstatus[pd] === 1) {
            if (ZX.monstertype[pd] !== 19 && ZX.monstertype[pd] !== 3) {
              ZX.flag[51 + pd] = 3;
              pq.userEvent(10);
              pq.scr_monsterdefeat();
            } else {
              pq.pacifycon = 1;
              ZX.spelldelay = 999;
            }
          } else {
            let pK = Zs(0, 0, pm);
            pK.target = pq;
            pK.fail = 1;
          }
        }
        ZX.spelldelay = 20;
        break;
      }
      case 4:
      case 5: {
        ZX.spelldelay = 30;
        if (ZX.monster[pd] === 0) {
          [pd, pE] = pX(pd);
        }
        if (pE === 0) {
          ZX.spelldelay = 70;
          let pP =
            Z === 4
              ? ZP(ZX.battlemag[C] * 5 + ZX.battleat[C] * 11 - ZX.monsterdf[pd] * 3)
              : ZP(ZX.battlemag[C] * 6 + ZX.battleat[C] * 13 - ZX.monsterdf[pd] * 6);
          if (Z === 4 && ZX.chapter === 3) {
            let px = Zn.first("obj_knight_enemy");
            if (px) {
              pP = ZP(pP * (px.damagereduction + 0.65));
            }
          }
          let pV = Zn.first("obj_herosusie");
          let pG = Zs(pV ? pV.x : 90, pV ? pV.y : 150, pZ);
          pG.damage = pP;
          pG.star = pd;
          pG.caster = C;
          pG.target = ZC.monsterinstance(pd);
          if (Z === 5) {
            pG.red = 1;
          }
        }
        break;
      }
      case 6: {
        let pr = ZX.battlemag[C] * 4;
        for (let pM = 0; pM < ZO(); pM++) {
          Z9(pM, pr);
          pT(pM, pr);
        }
        ZX.spelldelay = 15;
        break;
      }
      case 8: {
        let ph = 0;
        for (let pR = 0; pR < 3; pR++) {
          if (ZX.monster[pR] !== 1) {
            continue;
          }
          let pD = Zs(ZX.monsterx[pR], ZX.monstery[pR], H);
          pD.target = ZC.monsterinstance(pR);
          pD.myself = pR;
          pD.initdelay = ph * 10;
          ph++;
        }
        ZX.spelldelay = 20 + ph * 10;
        break;
      }
      case 9: {
        ZX.spelldelay = 30;
        if (ZX.monster[pd] === 0) {
          [pd, pE] = pX(pd);
        }
        if (pE === 0 && ZX.monster[pd] === 1) {
          ZX.spelldelay = 40;
          let e0 = Math.max(1, Math.min(999, ZX.battlemag[C] - 10));
          let e1 = ZP(e0 * 30 + 90 + Zo(10));
          let e2 = Zs(ZX.monsterx[pd], ZX.monstery[pd], O);
          e2.damage = e1;
          e2.star = pd;
          e2.caster = C;
          e2.target = ZC.monsterinstance(pd);
        }
        break;
      }
      case 10: {
        ZX.spelldelay = 30;
        if (Z7() > 0) {
          let e3 = ZP(ZX.battlemag[C] * 40 + 600);
          let e4 = Zn.exists("obj_berdlyb2_enemy") ? ZX.charinstance && ZX.charinstance[C] : null;
          let e5 = Zs(e4 ? e4.x : 0, e4 ? e4.y : 0, L);
          e5.caster = C;
          e5.damage = e3;
          ZX.spelldelay = 140;
          if (Zn.exists("obj_berdlyb2_enemy")) {
            ZX.spelldelay = 999999;
            e5.textwait = 1;
          }
        }
        break;
      }
      case 100: {
        if (ZX.monster[pd] === 0) {
          [pd, pE] = pX(pd);
        }
        if (ZX.monster[pd] === 1) {
          let e6 = ZC.monsterinstance(pd);
          let e7 = ZX.monstertype[pd] === 3 || (ZX.chapter >= 2 && ZX.monstertype[pd] === 52);
          if (ZX.mercymod[pd] >= 100) {
            if (e7) {
              e6.sparecon = 1;
            } else {
              ZX.flag[51 + pd] = 2;
              e6.userEvent(10);
              e6.scr_monsterdefeat();
            }
          } else {
            Z8(pd, ZX.sparepoint[pd]);
            let e8 = Zs(0, 0, pm);
            e8.target = e6;
            e8.fail = 1;
            e8.flashcolor = Zf.yellow;
          }
        }
        ZX.spelldelay = 0;
        break;
      }
      default:
        if (Z >= 200) {
          C6(Zy(Z), pd, C, {
            healOne: (e9, eZ, eC) => {
              Z9(e9, eZ);
              pT(e9, eZ);
              if (eC) {
                let ep = Zn.all("obj_healanim").pop();
                if (ep) {
                  ep.particlecolor = Zf[eC];
                }
              }
              ZX.spelldelay = 15;
            },
            healAll: (e9) => pz(e9),
          });
        }
    }
  }
}
Zh(pJ, "scr_spell");
function pk() {
  return Zn.first("obj_battlecontroller");
}
Zh(pk, "BC");
var pl = new Set([
  "obj_aqua_enemy",
  "obj_ball_enemy",
  "obj_balthizard_enemy",
  "obj_baseenemy",
  "obj_bell_enemy",
  "obj_bibliox_enemy",
  "obj_blue_enemy",
  "obj_elnina_lanino_controller",
  "obj_enemy_example",
  "obj_floradinn_enemy",
  "obj_flowery_enemy",
  "obj_guei_enemy",
  "obj_halo_enemy",
  "obj_hammer_of_justice_enemy",
  "obj_holywatercooler_enemy",
  "obj_jackenstein_enemy",
  "obj_kawkaw_enemy",
  "obj_knight_enemy",
  "obj_leafling_enemy",
  "obj_mizzle_enemy",
  "obj_multiboss_controller",
  "obj_multiboss_enemy1",
  "obj_netskie_enemy",
  "obj_nubert_enemy",
  "obj_orange_green_controller",
  "obj_organ_enemy",
  "obj_pink_enemy",
  "obj_pippins_enemy",
  "obj_purple_enemy",
  "obj_ribbick_enemy",
  "obj_rouxls_ch3_enemy",
  "obj_scarecrow_enemy",
  "obj_shadowman_enemy",
  "obj_sheary_enemy",
  "obj_shinobeetle_enemy",
  "obj_shutta_enemy",
  "obj_sound_of_justice_enemy",
  "obj_tenna_board4_enemy",
  "obj_tenna_enemy",
  "obj_terracota_enemy",
  "obj_titan_enemy",
  "obj_titan_spawn_enemy",
  "obj_trashy_trio",
  "obj_watercooler_enemy",
  "obj_yellow_enemy",
  "obj_zapper_enemy",
]);
var pN = new Map();
function po(Z) {
  let C = Z.constructor;
  if (pN.has(C)) {
    return pN.get(C);
  }
  let pd = false;
  for (
    let pE = C.prototype;
    pE && pE !== ZT.prototype && pE !== Object.prototype && !pd;
    pE = Object.getPrototypeOf(pE)
  ) {
    if (pE.constructor && pl.has(pE.constructor.name)) {
      pd = true;
    }
  }
  pN.set(C, pd);
  return pd;
}
Zh(po, "handlesTalkEnd");
function pA() {
  let Z = ZX.battlespell;
  let C = ZX.battlespellcost;
  if (Array.isArray(Z) && Array.isArray(C)) {
    for (let pd = 0; pd < 3; pd++) {
      let pE = Z[pd];
      let pg = C[pd];
      if (pE && pg) {
        for (let pq = 0; pq < pE.length; pq++) {
          if (pE[pq] === 10) {
            pg[pq] = ZX.maxtension;
          }
        }
      }
    }
  }
  if (Array.isArray(ZX.spell) && Array.isArray(ZX.spellcost)) {
    for (let pK = 0; pK < ZX.spell.length; pK++) {
      let pP = ZX.spell[pK];
      let pV = ZX.spellcost[pK];
      if (Array.isArray(pP) && Array.isArray(pV)) {
        for (let pG = 0; pG < pP.length; pG++) {
          if (pP[pG] === 10) {
            pV[pG] = ZX.maxtension;
          }
        }
      }
    }
  }
  if (ZX.charweapon && ZX.charweapon[4] !== 13) {
    let px = (pr, pM, ph) => {
      if (
        !!pr &&
        pr !== 4 &&
        ZX.charweapon[pr] === 13 &&
        !!Array.isArray(pM) &&
        !!Array.isArray(ph)
      ) {
        for (let pR = 0; pR < pM.length; pR++) {
          if (pM[pR] === 9) {
            let pD = Z4(9, pr).cost;
            if (pD > 0 && pD < ph[pR]) {
              ph[pR] = pD;
            }
          }
        }
      }
    };
    if (Array.isArray(ZX.spell) && Array.isArray(ZX.spellcost)) {
      for (let pr = 5; pr < ZX.spell.length; pr++) {
        px(pr, ZX.spell[pr], ZX.spellcost[pr]);
      }
    }
    if (Array.isArray(Z) && Array.isArray(C)) {
      for (let pM = 0; pM < Math.min(3, ZO()); pM++) {
        px(ZX.char[pM], Z[pM], C[pM]);
      }
    }
  }
}
Zh(pA, "snowgrave100");
function pa(Z, C, pd, pE, pg) {
  let pq = CO(C, Cu);
  if (!pq) {
    Z.draw_set_font("fnt_main");
    Z.draw_text(pd, pE + 4, C, Zf.white);
    Z.draw_set_font("fnt_mainbig");
    return;
  }
  let pK = ZY[pq].w;
  Z.draw_sprite_ext(pq, 0, pd + 5, pE + 1, pK > Cu ? Cu / pK : 1, 1, 0, Zf.white, 1);
}
Zh(pa, "fitName");
function pv(Z, C, pd, pE, pg) {
  let pq = ZY[C];
  if (pq && pq.h > 30) {
    Z.draw_sprite_part(C, pd, 0, 0, pq.w, 36, pE - 4, pg - 10);
  } else {
    Z.draw_sprite(C, pd, pE, pg);
  }
}
Zh(pv, "headDraw");
var pw = new Set([0, 1, 2, 3, 4, 7, 8, 11, 12, 13]);
var pc = class mR extends ZT {
  cleanUp() {
    ZX.fighting = 0;
    if (!Zn.exists("__roomhost")) {
      if (!ZX.battleover) {
        ZX.battleover = "win";
        Zb();
      }
    }
  }
  create() {
    Object.assign(this, {
      victory: 0,
      victoried: 0,
      skipvictory: 0,
      battlewriter: null,
      lbuffer: 0,
      rbuffer: 0,
      onebuffer: 0,
      twobuffer: 0,
      cantspare: [0, 0, 0],
      hidemercy: 0,
      gigaqueencon: 0,
      gigaqueentimer: 0,
      gigaqueeny: 0,
      attackpriority: -1,
      messagepriority: -1,
    });
    Object.assign(this, {
      disablesusieact: 0,
      mercytotal: 0,
      idefendedthisturn: 0,
      ypostenna: 0,
      oopsallacts: 0,
      spadebuttonenabled: false,
      spadebuttoncount: 0,
      spadebuttontimer: 0,
      heartbuttoncount: 0,
      heartbuttontimer: 0,
      heartbuttondirection: 270,
      heartsuccesstimer: 0,
      heartsuccesscon: 0,
      recentlyhighlightingheart: 0,
      recentlyhighlightingheartvalue: 0,
      rouxlsbuttontimer: 0,
      rouxlsbuttoncount: -6,
      rouxlsbuttoncount2: -6,
      rouxlsbuttoncount_y: 0,
      rouxlsgridenabled: false,
      recentlyhighlightingspade: 0,
      recentlyhighlightingspadevalue: 0,
      gridchangedirections: true,
      spadebuttondirection: 0,
      rouxlsbuttondirection: 270,
      rouxlsbuttondirection2: 270,
      rouxlserrorcon: 0,
      rouxlserrortimer: 0,
      rouxlstelegraphtimer: 0,
      rouxlstelegraphcon: 0,
      spadetelegraphtimer: 0,
      spadetelegraphcon: 0,
      spadesuccesstimer: 0,
      spadesuccesscon: 0,
      rouxlsbuttonendcon: 0,
      buttonorder: 0,
      spadefail: false,
      buttonspeed: 0,
      norouxlsbutton: false,
      dogtimer: 0,
      dogcon: 0,
      dogselectedcount: 0,
    });
    if (ZX.chapter >= 4 && ZC.bcCreate) {
      ZC.bcCreate(this);
    }
    ZX.battleend = 0;
    ZX.darkzone = 1;
    ZX.fighting = 1;
    ZX.fe = 0;
    ZX.fc = 0;
    ZX.typer = 4;
    ZX.battletyper = 4;
    ZX.myfight = 0;
    ZX.mnfight = 0;
    ZX.bmenuno = 0;
    ZX.attacking = 0;
    ZX.acting = [0, 0, 0];
    ZX.tension = 0;
    ZX.spelldelay = 10;
    Z5();
    ZX.tensionselect = 0;
    ZX.temptension = [ZX.tension, ZX.tension, ZX.tension];
    this.tempitem = [];
    for (let C = 0; C < 13; C++) {
      this.tempitem[C] = [ZX.item[C], ZX.item[C], ZX.item[C]];
    }
    ZX.charcond = [0, 0, 0];
    ZX.automiss = [0, 0, 0];
    ZL(Math.max(3, ZO()));
    for (let pd = 0; pd < Math.max(3, ZO()); pd++) {
      if (ZX.char[pd]) {
        ZX.charmove[pd] = 1;
        ZX.charcantarget[pd] = 1;
        ZX.chardead[pd] = 0;
      } else {
        ZX.charmove[pd] = 0;
        ZX.charcantarget[pd] = 0;
        ZX.chardead[pd] = 0;
      }
    }
    ZX.flag[50] = 0;
    ZX.flag[51] = 0;
    ZX.flag[52] = 0;
    ZX.flag[53] = 0;
    ZX.monster = [0, 0, 0];
    ZX.monsterx = [0, 0, 0];
    ZX.monstery = [0, 0, 0];
    ZX.monstername = [" ", " ", " "];
    ZX.monsterat = [0, 0, 0];
    ZX.monsterdf = [0, 0, 0];
    ZX.monsterhp = [0, 0, 0];
    ZX.monstermaxhp = [0, 0, 0];
    ZX.monsterinstance = [null, null, null];
    ZX.monstergold = [0, 0, 0, 0];
    ZX.monsterexp = [0, 0, 0, 0];
    ZX.sparepoint = [0, 0, 0];
    ZX.hittarget = [0, 0, 0];
    ZX.mercymod = [0, 0, 0];
    ZX.mercymax = [0, 0, 0];
    ZX.monstercomment = [" ", " ", " "];
    ZX.monsterstatus = [0, 0, 0];
    ZX.canact = [[], [], []];
    ZX.actname = [[], [], []];
    ZX.actactor = [[], [], []];
    ZX.actdesc = [[], [], []];
    ZX.actcost = [[], [], []];
    for (let pE = 0; pE < 3; pE++) {
      for (let pg = 0; pg < 6; pg++) {
        ZX.canact[pE][pg] = 0;
        ZX.actname[pE][pg] = " ";
        ZX.actactor[pE][pg] = 1;
        ZX.actdesc[pE][pg] = " ";
        ZX.actcost[pE][pg] = 0;
      }
    }
    Object.assign(this, {
      intro: 1,
      chartotal: 0,
      charpos: new Array(ZO()).fill(-1),
      havechar: new Array(ZO()).fill(0),
      mmy: new Array(ZO()).fill(0),
    });
    ZX.charinstance = new Array(ZO()).fill(null);
    if (ZO() > 3) {
      let [pq, pK] = K(ZO());
      ZX.heromakex = pq;
      ZX.heromakey = pK;
    }
    let Z = new Set();
    for (let pP = 0; pP < ZO(); pP++) {
      if (ZX.char[pP] !== 0) {
        this.chartotal++;
      }
      let pV = ZX.char[pP];
      if (pV >= 1) {
        let pG = ZS(pV);
        let px = (ZX.charhero && ZX.charhero[pV]) || A[pG - 1] || "kris";
        let pr = (a(px, ZY).id === px && o[px] && o[px].fallback) || px;
        let pM = Math.max(0, A.indexOf(o[pr] ? pr : "kris"));
        let ph =
          px === "noelle" && ZX.chapter === 2
            ? Cw
            : o[px] && o[px].custom
              ? Cr
              : [Cl, Co, Ca][Math.min(2, pM)];
        let pR = Z.has(ph) && CG.has(ph) ? CG.get(ph) : ph;
        Z.add(ph);
        let pD = Zs(ZX.heromakex[pP], ZX.heromakey[pP], pR);
        pD.herokey = px;
        pD.setup();
        pD.myself = pP;
        pD.char = pV;
        pD.base = pG;
        pD.depth = ZO() > 6 ? V(pP, ZO()) : 200 - pP * 20;
        if (ZX.chapter >= 5 && ZC.heroSetup) {
          ZC.heroSetup(pD);
        }
        CJ(pD);
        {
          let e0 = P(ZO());
          if (e0 !== 1) {
            pD.image_xscale *= e0;
            pD.image_yscale *= e0;
            pD.mywidth = ZK(pD.mywidth * e0);
            pD.myheight = ZK(pD.myheight * e0);
          }
        }
        this.havechar[pP] = 1;
        this.charpos[pP] = pP;
        ZX.charinstance[pP] = pD;
      }
    }
    for (let e1 = 0; e1 < 3; e1++) {
      if (ZX.monstertype[e1] > 0) {
        ZX.monster[e1] = 1;
        let e2 = Zs(ZX.monstermakex[e1], ZX.monstermakey[e1], ZX.monsterinstancetype[e1]);
        e2.myself = e1;
        ZX.monsterinstance[e1] = e2;
        e2.userEvent(12);
      }
    }
    if (ZX.chapter === 2 && Zn.exists("obj_gigaqueen_enemy")) {
      this.gigaqueencon = 3;
      Zn.view.live = true;
    }
    for (let e3 of ZX.bystanders || []) {
      let e4 = Zs(e3.x, e3.y, e3.cls);
      e4.myself = -1;
      e4.visible = false;
      if (e4.thrash) {
        e4.thrash.visible = false;
      }
    }
    ZX.battleactcount = [0, 0, 0];
    ZX.battlespell = [[], [], []];
    ZX.battlespellname = [[], [], []];
    ZX.battlespelldesc = [[], [], []];
    ZX.battlespellcost = [[], [], []];
    ZX.battlespelltarget = [[], [], []];
    ZX.battlespellspecial = [[], [], []];
    for (let e5 = 0; e5 < 3; e5++) {
      for (let e6 = 0; e6 < 18; e6++) {
        ZX.battlespell[e5][e6] = 0;
        ZX.battlespellname[e5][e6] = " ";
        ZX.battlespelldesc[e5][e6] = " ";
        ZX.battlespellcost[e5][e6] = 0;
        ZX.battlespelltarget[e5][e6] = 2;
        ZX.battlespellspecial[e5][e6] = 0;
      }
    }
    if (ZC.spellmenu_setup) {
      ZC.spellmenu_setup.call(this);
    }
    x();
    pA();
    ZX.charturn = 0;
    {
      let e7 = 0;
      while (e7 < ZO() && ZX.char[e7] && ZX.charauto[ZX.char[e7]] === 1) {
        e7++;
      }
      if (e7 > 0 && e7 < ZO() && ZX.char[e7]) {
        ZX.charturn = e7;
      }
    }
    ZX.currentactingchar = 0;
    for (let e8 of ["acting", "actingsingle", "actingsimul", "actingtarget", "actingchoice"]) {
      if (Array.isArray(ZX[e8])) {
        for (let e9 = 0; e9 < 3; e9++) {
          ZX[e8][e9] = 0;
        }
      }
    }
    ZX.charaction = [0, 0, 0];
    ZX.charspecial = [0, 0, 0];
    ZX.chartarget = [0, 0, 0];
    ZX.faceaction = [0, 0, 0];
    ZX.targeted = [0, 0, 0];
    ZL(Math.max(3, ZO()));
    ZX.battleat = [];
    ZX.battledf = [];
    ZX.battlemag = [];
    for (let eZ = 0; eZ < ZO(); eZ++) {
      let eC = ZX.char[eZ];
      ZX.battleat[eZ] = ZX.at[eC] + ZX.itemat[eC][0] + ZX.itemat[eC][1] + ZX.itemat[eC][2];
      ZX.battledf[eZ] = ZX.df[eC] + ZX.itemdf[eC][0] + ZX.itemdf[eC][1] + ZX.itemdf[eC][2];
      ZX.battlemag[eZ] = ZX.mag[eC] + ZX.itemmag[eC][0] + ZX.itemmag[eC][1] + ZX.itemmag[eC][2];
    }
    if (ZX.chapter >= 5 && ZC.bcBattleStats) {
      ZC.bcBattleStats(this);
    }
    for (let ep = 0; ep < 20; ep++) {
      for (let eu = 0; eu < 20; eu++) {
        ZX.bmenucoord[ep][eu] = 0;
      }
    }
    Object.assign(this, {
      movenoise: 0,
      selnoise: 0,
      laznoise: 0,
      damagenoise: 0,
      grazenoise: 0,
      tp: 0,
      tpy: 50,
      bp: 0,
      bpy: 152,
      s_siner: 0,
      reset: 0,
      timeron: 1,
      noreturn: 0,
      shakeReq: 0,
      victortimer: 0,
    });
    this.bcolor = ZQ(ZQ(Zf.purple, Zf.black, 0.7), Zf.dkgray, 0.5);
    Zs(0, 0, CF);
    this.hpcolor = [Zf.aqua, Zf.fuchsia, Zf.lime, Zf.yellow];
    this.hpcolorsoft = this.hpcolor.map((em) => ZQ(em, Zf.white, 0.5));
    ZC.charinstance = (em) => ZX.charinstance[em];
    ZC.monsterinstance = (em) => ZX.monsterinstance[em];
    ZC.dmgwriter = (em, eB) => Zs(em, eB, CH);
    ZC.shake = () => {
      if (!Zn.exists("obj_shake")) {
        Zs(0, 0, Z3);
      }
    };
    ZC.gameover = () => {
      ZX.battleover = "lose";
      Zl();
      Zj("snd_hurt1");
      ZW();
    };
  }
  alarmEvent(Z) {
    if (Z === 2) {
      this.reset = 0;
      pY();
    }
  }
  step() {
    pA();
    x();
    N();
    z(this);
    this.t_siner = (this.t_siner || 0) + 1;
    if (ZX.chapter === 2) {
      if (this.gigaqueencon !== 0) {
        return;
      }
      let C = Zn.first("o_boxingcontroller");
      if (
        (C && C.dead === 1 && ZX.turntimer < 0) ||
        Zn.exists("obj_boxing_loss_controller") ||
        Zn.exists("o_bq_whitefade_persistent")
      ) {
        return;
      }
    }
    if (ZX.chapter >= 2 && (this.t_siner - 1) % 6 === 0) {
      for (let pd = 0; pd < ZO(); pd++) {
        let pE = ZX.char[pd];
        if (C3(pE) && ZX.hp[pE] > ZK(ZX.maxhp[pE] / 3)) {
          ZX.hp[pE]--;
        }
      }
    }
    for (let pg = 0; pg < ZO(); pg++) {
      let pq = ZX.charinstance[pg];
      if (
        !!pq &&
        !!(pq.poisonamount > 0) &&
        ((pq.poisontimer = (pq.poisontimer || 0) + 1), pq.poisontimer >= 10)
      ) {
        let pK = ZX.char[pg];
        if (ZX.hp[pK] > 1) {
          ZX.hp[pK]--;
          pq.poisonamount--;
        } else {
          pq.poisonamount = 0;
        }
        pq.poisontimer = 0;
      }
    }
    if (Ch() || p2()) {
      return;
    }
    if (ZX.chapter === 3 && this.victory === 1 && this.victoried === 0) {
      let pP = CR("obj_shutta_enemy");
      if (pP && pP.amiabossfight) {
        ZX.battletyper = 4;
      }
    }
    if (ZX.chapter >= 4 && ZC.bcStepGate && ZC.bcStepGate(this)) {
      return;
    }
    if (this.shakeReq) {
      this.shakeReq = 0;
      if (!Zn.exists("obj_shake")) {
        Zs(0, 0, Z3);
      }
    }
    if (this.victory === 1 && this.victoried === 0) {
      ZX.faceaction = [0, 0, 0];
      ZX.battleend = 1;
      ZX.mnfight = -1;
      ZX.myfight = 7;
      for (let pG = 3; pG < ZO(); pG++) {
        ZX.faceaction[pG] = 0;
      }
      if (Zn.exists(this.battlewriter)) {
        this.battlewriter.instance_destroy();
      }
      Zn.with("obj_face", (px) => px.instance_destroy());
      for (let px = 0; px < 4; px++) {
        if (ZX.hp[px] < 1) {
          ZX.hp[px] = ZK(ZX.maxhp[px] / 8);
        }
      }
      this.lastbattlewriter = null;
      if (this.skipvictory === 0) {
        ZX.monstergold[3] += ZV(ZX.tension / 10) * (ZX.chapter >= 2 ? ZX.chapter : 1);
        if (ZX.charweapon[1] === 8) {
          ZX.monstergold[3] += ZV(ZX.monstergold[3] / 20);
        }
        if (ZX.chapter >= 5 && ZC.bcVictoryGold) {
          ZC.bcVictoryGold(this);
        }
        ZX.msg = new Array(100).fill(" ");
        ZX.msg[0] =
          "* You won^1!&* Got " + ZX.monsterexp[3] + " EXP and " + ZX.monstergold[3] + " D$./%";
        ZX.typer = ZX.battletyper;
        ZX.fc = 0;
        if (ZX.chapter >= 2 && ZX.flag[37] === 1) {
          ZX.msg[0] = "* You won the battle!/%";
        }
        if (ZX.chapter >= 2 && ZX.flag[63] === 1) {
          ZX.msg[0] =
            "* You won^1!&* Got " +
            ZX.monstergold[3] +
            " D$^1.&* " +
            (ZX.char.some(
              (pM) =>
                pM && (ZX.charhero && ZX.charhero[pM] ? ZX.charhero[pM] === "noelle" : pM === 4),
            )
              ? "Noelle"
              : "You") +
            " became stronger./%";
          let pr = Zj("snd_dtrans_lw");
          try {
            ZI(pr, 2);
            ZA(pr, 0.7, 0);
          } catch {}
        }
        if (ZX.chapter >= 4 && ZC.bcVictoryMsg) {
          ZC.bcVictoryMsg(this);
        }
        this.lastbattlewriter = h();
        if (ZX.chapter >= 2 && ZX.flag[38] === 1 && this.lastbattlewriter) {
          this.lastbattlewriter.instance_destroy();
        }
        for (let pM = 0; pM < ZO(); pM++) {
          let ph = ZX.charinstance[pM];
          if (ph) {
            ph.state = 7;
            ph.hurt = 0;
            ph.hurttimer = 0;
          }
        }
      }
      this.victoried = 1;
      this.victortimer = 0;
      if (this.skipvictory === 1) {
        this.victortimer = -20;
      }
      if (ZX.chapter >= 5 && this.skipvictory === 2) {
        this.victortimer = 9;
      }
      let pV = Zn.first("obj_tensionbar");
      if (pV) {
        pV.alarm[5] = 15;
        pV.hspeed = -10;
        pV.friction = -0.4;
      }
    }
    if (this.victoried === 1) {
      this.victortimer++;
      if (
        !Zn.exists(this.lastbattlewriter) &&
        this.victortimer >= 10 &&
        (!(ZX.chapter >= 4) || !ZC.bcVictoryHold || !ZC.bcVictoryHold(this))
      ) {
        this.intro = 2;
        if (this.bp <= 0) {
          pb();
        }
      }
    }
    this.talkNobodyEnds();
    if (ZX.myfight === 0 && (!(ZX.chapter >= 4) || !ZC.bcSkipMenu || !ZC.bcSkipMenu(this))) {
      this.menuStep();
    }
    if (this.movenoise === 1) {
      Zj("snd_menumove");
      this.movenoise = 0;
    }
    if (this.grazenoise === 1) {
      Zj("snd_graze");
      this.grazenoise = 0;
    }
    if (this.selnoise === 1) {
      Zj("snd_select");
      this.selnoise = 0;
    }
    if (this.damagenoise === 1) {
      if (!(ZX.chapter >= 4) || !ZC.bcDamageNoise || !ZC.bcDamageNoise(this)) {
        Zj("snd_damage");
      }
      this.damagenoise = 0;
    }
    this.onebuffer--;
    this.twobuffer--;
    this.lbuffer--;
    this.rbuffer--;
    let Z =
      (ZX.mnfight === 2 && this.timeron === 1) ||
      (ZX.chapter >= 4 && ZC.bcTurnTimer && ZC.bcTurnTimer(this));
    if (!Z) {
      this._turnScaled = 0;
    }
    if (Z) {
      if (this._turnScaled !== 1) {
        this._turnScaled = 1;
        let pR = Zx.turnscale ?? 1;
        if (pR !== 1 && ZX.turntimer > 0 && ZX.turntimer < 2000) {
          ZX.turntimer = Math.max(1, Math.round(ZX.turntimer * pR));
        }
      }
      ZX.turntimer -= 1;
      if (ZX.turntimer <= 0 && this.reset === 0) {
        Zn.with("obj_bulletparent", (pD) => pD.instance_destroy());
        Zn.with("obj_bulletgenparent", (pD) => pD.instance_destroy());
        Zn.with("obj_darkener", (pD) => {
          pD.darken = 0;
        });
        Zn.with("obj_heart", (pD) => {
          Zs(pD.x, pD.y, Z2);
          pD.instance_destroy();
        });
        this.reset = 1;
        if (!(ZX.chapter >= 4) || !ZC.bcNoReturn || !ZC.bcNoReturn(this)) {
          if (this.noreturn === 0) {
            this.alarm[2] = 15;
          }
        }
      }
    }
    if (ZX.chapter >= 2 && ZX.myfight === 3 && Z7() === 0 && !Zn.exists("obj_writer")) {
      pj();
      if (ZX.myfight === 3) {
        pH();
      }
    }
    ZX.time++;
  }
  talkNobodyEnds() {
    if (ZX.chapter < 3 || ZX.mnfight !== 1.5 || ZX.myfight === 0) {
      this._mn15 = 0;
      return;
    }
    if (++this._mn15 < 3) {
      return;
    }
    let Z = (C) =>
      !(C instanceof Cs) ||
      (typeof C.myself == "number" &&
        ZX.monsterinstance[C.myself] === C &&
        ZX.monster[C.myself] === 1);
    if (!Zn.list.some((C) => C !== this && !C.destroyed && po(C) && Z(C))) {
      if (!Zn.exists("obj_growtangle")) {
        Zs(y(0) + 320, 170, Z0);
      }
      if (!Zn.exists("obj_moveheart")) {
        Z1();
      }
      ZX.mnfight = 2;
      this._mn15 = 0;
    }
  }
  actselect(Z, C) {
    let pd = ZX.monsterinstance[Z];
    let pE = ZS(ZX.char[ZX.charturn]);
    let pg = this.actinfo(Z);
    if (pd && !pd.destroyed) {
      if (pE === 1) {
        pd.acting = C + 1;
      } else if (pE === 2) {
        pd.actingsus = C + 1;
      } else if (pE === 3) {
        pd.actingral = C + 1;
      } else if (pE === 4) {
        pd.actingnoe = C + 1;
      }
    }
    if (pE === 1) {
      let pq = ZU();
      ZX.actingsimul[pq] = pg.simul.get(C);
      ZX.acting[pq] = 1;
      ZX.actingsingle[pq] = 1;
      ZX.actingtarget[ZX.charturn] = Z;
      let pK = (ZX.actactor[Z] || [])[C];
      let pP = (pV) => Zi(pV);
      if (pK === 2 && pP(2) >= 0) {
        ZX.acting[pP(2)] = 1;
      }
      if (pK === 3 && pP(3) >= 0) {
        ZX.acting[pP(3)] = 1;
      }
      if (pK === 4) {
        if (ZX.char[2]) {
          ZX.acting[2] = 1;
        }
        if (ZX.char[1]) {
          ZX.acting[1] = 1;
        }
      }
      if (pK === 5 && pP(4) >= 0) {
        ZX.acting[pP(4)] = 1;
      }
      for (let pV = 0; pV < 3; pV++) {
        if (ZX.acting[pV] === 1) {
          ZX.faceaction[pV] = 6;
          ZX.charaction[pV] = 9;
        }
      }
    } else {
      ZX.actingtarget[ZX.charturn] = Z;
      ZX.actingsingle[ZX.charturn] = 1;
      ZX.actingsimul[ZX.charturn] = pg.simul.get(C);
      ZX.faceaction[ZX.charturn] = 6;
      ZX.charaction[ZX.charturn] = 9;
    }
  }
  techUnlocked(Z, C) {
    if (ZX.chapter !== 3) {
      return true;
    }
    let pd = (ZX.battlespellname[Z] || [])[C];
    if (pd === undefined || pd === " ") {
      return true;
    }
    let pE = true;
    Zn.with("obj_pippins_enemy", (pP) => {
      if (pd === (ZX.actname[pP.myself] || [])[3] && (ZX.flag[1044] || 0) < 150) {
        pE = false;
      }
    });
    let pg = [1, 2, 3].some((pP) => ZX.chararmor1[pP] === 7 || ZX.chararmor2[pP] === 7);
    let pq = Zn.first("obj_tenna_enemy_bg");
    let pK = Zn.first("obj_tenna_enemy");
    if (pq && pK && pd === (ZX.actnamesus[pK.myself] || [])[1] && pq.myscore < (pg ? 30 : 20)) {
      pE = false;
    }
    return pE;
  }
  actinfo(Z) {
    let C =
      ZX.chapter === 1
        ? ""
        : ({
            1: "",
            2: "sus",
            3: "ral",
            4: "noe",
          }[ZS(ZX.char[ZX.charturn])] ?? "");
    let pd = (pE, pg) => {
      let pq = ZX[pE + C];
      let pK = (pq && pq[Z]) || [];
      return {
        get: (pP) => (pK[pP] === undefined ? pg : pK[pP]),
      };
    };
    return {
      canact: pd("canact", 0),
      cost: pd("actcost", 0),
      simul: pd("actsimul", 0),
      name: pd("actname", " "),
      desc: pd("actdesc", " "),
    };
  }
  charAlive(Z) {
    let C = Zi(Z);
    if (C < 0) {
      return false;
    } else {
      return this.havechar[C] === 1 && ZX.hp[ZX.char[C]] > 0;
    }
  }
  partnerReady(Z) {
    return this.charAlive(Z) || (ZX.customTeam === 1 && Zi(Z) < 0);
  }
  rouxlsButtonStep() {
    let Z = ZX.chapter === 3 ? Zn.first("obj_rouxls_ch3_enemy") : null;
    if (!Z || !(Z.intro >= 2) || !this.spadebuttonenabled || ZX.bmenuno !== 0 || ZX.myfight !== 0) {
      this.rouxlserrortimer = 0;
      this.rouxlstelegraphcon = 0;
      return;
    }
    let C = ZX.bmenucoord;
    let pd = () => C[0][ZX.charturn] + this.rouxlsbuttoncount_y * 5;
    let pE = (pV, pG) => {
      for (let px = 1; px <= 5; px++) {
        if (pV !== px) {
          continue;
        }
        let pr = false;
        for (let pM = 0; pM < 6; pM++) {
          if (pG === px + pM * 5) {
            pr = true;
          }
        }
        if (pr) {
          pV = px === 5 ? 1 : px + 1;
        }
      }
      return pV;
    };
    let pg = () => {
      this.rouxlsbuttoncount = pE(this.rouxlsbuttoncount, this.heartbuttoncount);
      this.rouxlsbuttoncount = pE(this.rouxlsbuttoncount, this.spadebuttoncount);
    };
    let pq = (pV) => {
      if (this.rouxlsgridenabled) {
        this.rouxlsbuttoncount_y = 4;
        this.buttonorder = 0;
        this.rouxlsbuttoncount = Za(0, -1, -3, -4);
        if (pV) {
          this.spadebuttoncount = -6;
        }
      }
    };
    let pK = () =>
      Zj("snd_menumove", {
        pitch: 0.6 + Zo(0.8),
      });
    let pP = false;
    for (let pV = 1; pV <= 3; pV++) {
      if (ZX.hp[pV] < ZX.maxhp[pV] / 3) {
        pP = true;
      }
    }
    if (ZX.hp[1] + ZX.hp[2] + ZX.hp[3] < (ZX.maxhp[1] + ZX.maxhp[2] + ZX.maxhp[3]) / 2) {
      pP = true;
    }
    if (
      this.rouxlserrorcon === 0 &&
      this.rouxlstelegraphcon === 0 &&
      this.rouxlsbuttoncount > 0 &&
      this.rouxlsbuttoncount - 1 === pd()
    ) {
      this.rouxlserrorcon = 1;
      Zj("snd_error");
    }
    if (
      this.rouxlserrorcon === 0 &&
      this.rouxlstelegraphcon === 0 &&
      this.rouxlsbuttoncount2 > 0 &&
      this.rouxlsbuttoncount2 - 1 === pd()
    ) {
      this.rouxlserrorcon = 1;
      Zj("snd_error");
    }
    if (this.rouxlserrorcon === 1) {
      this.rouxlserrortimer++;
      if (this.rouxlserrortimer >= 10) {
        this.spadesuccesscon = 0;
        this.spadebuttontimer = 0;
        this.rouxlserrortimer = 0;
        this.rouxlserrorcon = 0;
        ZX.bmenuno = 0;
        pO();
        C[0][0] = 2;
        C[0][1] = 2;
        C[0][2] = 2;
        pq(false);
        if (Z.phase > 1) {
          this.rouxlsbuttondirection = 270;
          this.rouxlsbuttoncount = this.rouxlsbuttoncount === Za(0, -1, -3, -4) ? 1 : 0;
        }
      }
      pg();
    }
    if (this.rouxlserrorcon === 0) {
      this.spadebuttontimer++;
      if (Z.phase > 1) {
        this.rouxlsbuttontimer++;
      }
    }
    if (pP) {
      if (pP === true && Z.phase > 1) {
        this.heartbuttontimer++;
      }
    } else {
      this.heartbuttoncount = -6;
    }
    if (this.spadebuttontimer >= 10 && this.spadetelegraphcon === 1) {
      this.spadetelegraphcon = 0;
      this.spadebuttontimer = 0;
    } else if (this.spadebuttontimer >= 10 && this.spadesuccesscon === 1) {
      this.norouxlsbutton = false;
      this.rouxlserrortimer = 0;
      this.rouxlserrorcon = 0;
      this.spadesuccesscon = 0;
      this.spadesuccesstimer = 0;
      C[0][0] = 2;
      C[0][1] = 2;
      C[0][2] = 2;
      pq(true);
      this.spadefail = false;
      if (this.rouxlsbuttonendcon === 0) {
        pO();
      } else {
        ZX.charturn = 0;
        ZX.bmenuno = 0;
      }
    } else if (
      ((this.spadebuttontimer >= 7 && this.buttonspeed === 0) ||
        (this.spadebuttontimer >= 5 && this.buttonspeed === 1) ||
        (this.spadebuttontimer >= 3 && this.buttonspeed === 2)) &&
      this.spadetelegraphcon === 0 &&
      this.spadesuccesscon === 0
    ) {
      this.spadebuttontimer = 0;
      if (this.dogcon !== 2 && this.spadebuttoncount !== -6) {
        pK();
      }
      if (this.spadebuttondirection === 0) {
        this.spadebuttoncount++;
      }
      if (this.spadebuttondirection === 90) {
        this.spadebuttoncount -= 5;
      }
      if (this.spadebuttondirection === 180) {
        this.spadebuttoncount--;
      }
      if (this.spadebuttondirection === 270 && this.spadebuttoncount !== -6) {
        this.spadebuttoncount += 5;
      }
      let pG = this.spadebuttoncount;
      if (!this.rouxlsgridenabled && pG > 5) {
        this.spadebuttoncount = 1;
      } else if (
        (this.spadebuttondirection === 0 && [6, 11, 16, 21, 26].includes(pG)) ||
        (this.spadebuttondirection === 90 && [-4, -3, -2, -1, 0].includes(pG)) ||
        (this.spadebuttondirection === 180 && [0, 5, 10, 15, 20].includes(pG)) ||
        (this.spadebuttondirection === 270 && [26, 27, 28, 29, 30].includes(pG))
      ) {
        this.buttonorder = 0;
        this.spadebuttoncount = -6;
        this.rouxlsbuttondirection = 270;
        this.rouxlsbuttoncount = Za(1, 2, 3, 4, 5);
        this.rouxlsbuttontimer = 0;
      }
      pg();
    }
    if (this.heartbuttontimer >= 10 && this.heartsuccesscon === 1) {
      this.caster = 1;
      for (let px = 0; px < ZO(); px++) {
        if (!ZC.charinstance(px)) {
          continue;
        }
        let pr = ZK(ZX.maxhp[ZX.char[px]] / 2);
        Z9(px, pr);
        pT(px, pr);
      }
      this.heartsuccesscon = 0;
      this.buttonorder = 0;
      this.spadebuttoncount = -6;
      this.rouxlsbuttondirection = 270;
      this.rouxlsbuttoncount = Za(1, 2, 3, 4, 5);
      pg();
      this.heartsuccesstimer = 0;
      C[0][0] = 2;
      C[0][1] = 2;
      C[0][2] = 2;
      pq(true);
    } else if (
      this.heartbuttontimer >= 7 &&
      this.spadetelegraphcon === 0 &&
      this.spadesuccesscon === 0
    ) {
      this.heartbuttontimer = 0;
      if (this.dogcon !== 2 && this.heartbuttoncount !== -6) {
        pK();
      }
      if (this.heartbuttondirection === 0) {
        this.heartbuttoncount++;
      }
      if (this.heartbuttondirection === 90) {
        this.heartbuttoncount -= 5;
      }
      if (this.heartbuttondirection === 180) {
        this.heartbuttoncount--;
      }
      if (this.heartbuttondirection === 270) {
        this.heartbuttoncount += 5;
      }
      let pM = this.heartbuttoncount;
      if (!this.rouxlsgridenabled && pM > 5) {
        this.heartbuttoncount = 1;
      } else if (
        (this.heartbuttondirection === 0 && [6, 11, 16, 21, 26].includes(pM)) ||
        (this.heartbuttondirection === 90 && [-4, -3, -2, -1, 0].includes(pM)) ||
        (this.heartbuttondirection === 180 && [0, 5, 10, 15, 20].includes(pM)) ||
        (this.heartbuttondirection === 270 && [26, 27, 28, 29, 30].includes(pM))
      ) {
        this.heartbuttoncount = -6;
        this.heartbuttondirection = 270;
        this.heartbuttoncount = Za(1, 2, 3, 4, 5);
      }
      this.heartbuttoncount = pE(this.heartbuttoncount, this.rouxlsbuttoncount);
      this.heartbuttoncount = pE(this.heartbuttoncount, this.spadebuttoncount);
      if (
        this.heartbuttoncount === this.rouxlsbuttoncount ||
        this.heartbuttoncount === this.spadebuttoncount
      ) {
        this.heartbuttoncount++;
      }
      if (this.heartbuttoncount > 30) {
        this.heartbuttoncount = 26;
      }
    }
    if (this.rouxlsbuttontimer >= 20 && this.rouxlstelegraphcon === 1) {
      this.rouxlstelegraphcon = 0;
      this.rouxlsbuttontimer = 0;
    } else if (
      ((this.rouxlsbuttontimer >= 7 && this.buttonspeed === 0) ||
        (this.rouxlsbuttontimer >= 5 && this.buttonspeed === 1) ||
        (this.rouxlsbuttontimer >= 3 && this.buttonspeed === 2)) &&
      this.rouxlstelegraphcon === 0 &&
      this.spadesuccesscon === 0
    ) {
      this.rouxlsbuttontimer = 0;
      if (this.rouxlsbuttoncount !== -6) {
        pK();
      }
      if (this.rouxlsbuttondirection === 0) {
        this.rouxlsbuttoncount++;
      }
      if (this.rouxlsbuttondirection === 90) {
        this.rouxlsbuttoncount -= 5;
      }
      if (this.rouxlsbuttondirection === 180) {
        this.rouxlsbuttoncount--;
      }
      if (this.rouxlsbuttondirection === 270 && this.rouxlsbuttoncount !== -6) {
        this.rouxlsbuttoncount += 5;
      }
      if (
        this.rouxlsbuttondirection === 270 &&
        [26, 27, 28, 29, 30].includes(this.rouxlsbuttoncount)
      ) {
        this.buttonorder++;
        if ((this.buttonorder < 2 && Z.phase === 2) || (this.buttonorder < 4 && Z.phase === 3)) {
          this.rouxlsbuttondirection = 270;
          this.rouxlsbuttoncount = Za(1, 2, 3, 4, 5);
        } else {
          this.rouxlsbuttoncount = -6;
          this.spadebuttontimer = 0;
          this.spadebuttondirection = 270;
          this.spadebuttoncount = Za(1, 2, 3, 4, 5);
        }
      }
      pg();
      this.spadebuttoncount = pE(this.spadebuttoncount, this.heartbuttoncount);
      this.spadebuttoncount = pE(this.spadebuttoncount, this.rouxlsbuttoncount);
    }
  }
  rouxlsConfirm() {
    let Z = Zn.first("obj_rouxls_ch3_enemy");
    let C = ZX.bmenucoord;
    let pd = () => C[0][ZX.charturn] + this.rouxlsbuttoncount_y * 5;
    let pE = () => {
      if (this.rouxlsgridenabled) {
        this.rouxlsbuttoncount_y = 4;
        this.buttonorder = 0;
        this.rouxlsbuttoncount = Za(0, -1, -3, -4);
      }
    };
    this.norouxlsbutton = true;
    if (!this.spadebuttonenabled) {
      ZX.faceaction[ZX.charturn] = 6;
      C[0][0] = 2;
      C[0][1] = 2;
      C[0][2] = 2;
      if (this.rouxlsgridenabled) {
        this.rouxlsbuttoncount_y = 4;
        this.rouxlserrorcon = 0;
        this.rouxlstelegraphtimer = 0;
      }
      if (Zn.exists("obj_tenna_board4_enemy")) {
        this.onebuffer = 1;
        ZX.bmenuno = 11;
      } else {
        pO();
      }
      return true;
    }
    this.spadesuccesscon = 1;
    let pg = false;
    let pq = Zn.first("obj_heroralsei");
    if (
      ZX.charturn === 2 &&
      pq &&
      (pq.sprite_index === "spr_ralseib_yarn_1" || pq.sprite_index === "spr_ralseib_yarn_2") &&
      Z &&
      Z.yarnendturn === 0
    ) {
      this.selnoise = 0;
      ZX.bmenuno = 0;
      Z.yarnendturn = 1;
      if (this.dogcon < 1) {
        this.rouxlsbuttonendcon = 0;
        if (this.spadebuttoncount - 1 === pd() || this.recentlyhighlightingspade > 0) {
          Zj("snd_coin");
          ZX.faceaction[ZX.charturn] = 6;
          this.spadesuccesscon = 1;
          if (this.recentlyhighlightingspade > 0 && this.spadebuttoncount - 1 !== pd()) {
            this.spadebuttoncount = this.recentlyhighlightingspadevalue;
          }
        } else {
          Zj("snd_error");
          this.spadesuccesscon = 1;
          this.spadefail = true;
        }
      }
      if (this.dogcon > 0) {
        Zj("snd_pombark");
        this.dogselectedcount++;
        this.spadesuccesscon = 0;
        if (ZX.charturn === 2 && this.dogselectedcount < 9) {
          ZX.charturn = 0;
          ZX.bmenuno = 0;
        } else {
          pO();
          C[0][0] = 2;
          C[0][1] = 2;
          C[0][2] = 2;
          pE();
          if (ZX.charturn === 2 && this.dogselectedcount >= 9) {
            Z.dogtrigger = 1;
          }
        }
      }
      return true;
    } else {
      if (this.spadebuttonenabled && pg === false) {
        this.selnoise = 0;
        if (this.dogcon > 0) {
          if (
            this.spadebuttoncount - 1 === pd() ||
            this.recentlyhighlightingspade > 0 ||
            this.dogcon === 2
          ) {
            this.buttonspeed++;
            Zj("snd_pombark");
            this.dogselectedcount++;
            if (this.dogcon === 1) {
              this.dogcon = 2;
            }
            if (this.recentlyhighlightingspade > 0 && this.spadebuttoncount - 1 !== pd()) {
              this.spadebuttoncount = this.recentlyhighlightingspadevalue;
            }
          } else {
            Zj("snd_error");
            this.dogcon = -1;
            this.spadefail = true;
          }
        } else if (this.spadebuttoncount - 1 === pd() || this.recentlyhighlightingspade > 0) {
          this.buttonspeed++;
          if (Z) {
            Z.spadepower++;
          }
          Zj("snd_coin");
          ZX.faceaction[ZX.charturn] = 6;
          this.spadesuccesscon = 1;
          if (this.recentlyhighlightingspade > 0 && this.spadebuttoncount - 1 !== pd()) {
            this.spadebuttoncount = this.recentlyhighlightingspadevalue;
          }
        } else if (this.heartbuttoncount - 1 === pd()) {
          this.buttonspeed++;
          Zj("snd_coin");
          this.heartsuccesscon = 1;
          this.spadebuttontimer = 0;
        } else {
          Zj("snd_error");
          this.spadesuccesscon = 1;
          this.spadefail = true;
        }
      }
      this.rouxlsbuttonendcon = 0;
      if (this.dogcon > 0) {
        this.dogselectedcount++;
        if (ZX.charturn === 2 && this.dogselectedcount < 9) {
          this.rouxlsbuttonendcon = 1;
        } else if (ZX.charturn === 2 && this.dogselectedcount >= 9) {
          this.rouxlsbuttonendcon = 0;
          if (Z) {
            Z.dogtrigger = 1;
          }
        } else {
          this.rouxlsbuttonendcon = 0;
        }
      }
      return true;
    }
  }
  menuStep() {
    if (
      ZX.standaloneMinigame &&
      ZX.myfight === 0 &&
      ZX.mnfight === 0 &&
      (Zn.exists("obj_rhythmgame") || ZX.minigameStage)
    ) {
      return;
    }
    if (ZX.minigameOnly && ZX.myfight === 0 && ZX.mnfight === 0) {
      let pq = ZX.monsterinstance && ZX.monsterinstance[0];
      if (pq && !pq.destroyed && typeof pq.minigameRearm == "function") {
        pq.minigameRearm();
      }
      ZX.charturn = pU();
      for (let pK = 0; pK < ZO(); pK++) {
        ZX.acting[pK] = 0;
        ZX.charaction[pK] = 0;
        ZX.faceaction[pK] = 0;
      }
      pH();
      return;
    }
    let Z = ZX.charturn;
    let C = ZX.bmenucoord;
    let pd = ZX.bmenuno === 0 ? -100 : 10;
    if (pw.has(ZX.bmenuno)) {
      if (this.battlewriter && !this.battlewriter.destroyed) {
        this.battlewriter.depth = pd;
      }
      Zn.with("obj_face", (pP) => {
        pP.depth = pd - 1;
      });
    }
    let pE = () => {
      if (this.battlewriter && !this.battlewriter.destroyed) {
        this.battlewriter.depth = 10;
      }
      Zn.with("obj_face", (pP) => {
        pP.depth = 9;
      });
    };
    if (ZX.bmenuno === 0) {
      let pP = true;
      let pV = true;
      if (Zn.exists("obj_board_battleintroduction")) {
        pP = false;
      }
      Zn.with("obj_knight_enemy", (px) => {
        if (px.practicemode) {
          pP = false;
        }
      });
      if (this.spadesuccesscon === 1 || this.rouxlserrorcon === 1) {
        pP = false;
      }
      let pG = ZX.chapter === 3 ? Zn.first("obj_rouxls_ch3_enemy") : null;
      if (pG) {
        pG.dancecon = 1;
        if (pG.intro === 2) {
          pP = false;
        }
        pV = false;
        if (pG.intro === 3) {
          pV = true;
        }
        if (
          this.oopsallacts === 1 &&
          this.spadebuttonenabled &&
          pG.phase !== 3 &&
          ZX.charturn === 0 &&
          this.dogcon === 0
        ) {
          this.dogtimer++;
        } else {
          this.dogtimer = 0;
        }
        if (this.dogtimer === 1000) {
          this.dogcon = 1;
        }
      }
      if (!Zn.exists(this.battlewriter) && pV && (ZX.chapter !== 5 || ZX.battlemsg[0] !== "")) {
        ZX.msg[0] = ZX.battlemsg[0];
        ZX.typer = ZX.battletyper;
        if (ZX.chapter === 3) {
          let px = Zn.first("obj_tenna_enemy");
          if ((px && px.turn === 0) || Zn.exists("obj_tennabattleconvo_controller")) {
            ZX.fe = 0;
            ZX.fc = 22;
            ZX.typer = 80;
          }
          let pr = ZX.encounterno === 123 ? Zn.first("obj_pippins_enemy") : null;
          if (pr && (pr.turns === 0 || pr.turns === 2 || pr.turns === 4)) {
            ZX.fe = 0;
            ZX.fc = 2;
            ZX.typer = 45;
          }
          if (pr && (pr.turns === 1 || pr.turns === 3)) {
            ZX.fe = 0;
            ZX.fc = 1;
            ZX.typer = 47;
          }
        }
        this.battlewriter = h();
      }
      if (Zv() && this.lbuffer < 0 && pP) {
        C[0][Z] = C[0][Z] === 0 ? 4 : C[0][Z] - 1;
        this.movenoise = 1;
        this.rbuffer = 1;
        if (this.disablesusieact === 1 && ZX.charturn === 1 && C[0][Z] === 1) {
          C[0][Z] = 0;
        }
        if (
          ZX.chapter >= 4 &&
          this.disablesusieralseiattack === 1 &&
          (ZX.charturn === 1 || ZX.charturn === 2) &&
          C[0][Z] === 0
        ) {
          C[0][Z] = 4;
        }
      }
      if (Zw() && this.rbuffer < 0 && pP) {
        C[0][Z] = C[0][Z] === 4 ? 0 : C[0][Z] + 1;
        this.movenoise = 1;
        this.lbuffer = 1;
        if (this.disablesusieact === 1 && ZX.charturn === 1 && C[0][Z] === 1) {
          C[0][Z] = 2;
        }
        if (
          ZX.chapter >= 4 &&
          this.disablesusieralseiattack === 1 &&
          (ZX.charturn === 1 || ZX.charturn === 2) &&
          C[0][Z] === 0
        ) {
          C[0][Z] = 1;
        }
      }
      if (!ZF() || this.rouxlserrorcon !== 1 || !(this.dogcon < 1)) {
        if (ZF() && this.twobuffer < 0 && pP) {
          this.onebuffer = 1;
          this.selnoise = 1;
          let pM = C[0][Z];
          if (this.oopsallacts === 1 && this.rouxlsConfirm()) {
            return;
          }
          if (pM === 0) {
            ZX.bmenuno = 1;
          }
          if (pM === 1 && ZS(ZX.char[Z]) !== 1) {
            ZX.bmenuno = 2;
          }
          if (pM === 1 && ZS(ZX.char[Z]) === 1) {
            ZX.bmenuno = 11;
          }
          if (pM === 2 && this.tempitem[0][Z] !== 0) {
            ZX.bmenuno = 4;
            for (let ph = 0; ph < 12; ph++) {
              if (this.tempitem[C[4][Z]][Z] === 0 && C[4][Z] > 0) {
                C[4][Z]--;
              }
            }
          }
          if (pM === 3) {
            ZX.bmenuno = 12;
          }
          if (pM === 4) {
            Z6(ZX.chapter >= 4 && ZC.bcDefendTP ? ZC.bcDefendTP(this) : 40);
            if (ZX.chapter === 3) {
              this.idefendedthisturn++;
            }
            ZX.faceaction[Z] = 4;
            ZX.charaction[Z] = 10;
            pO();
            if (ZX.chapter === 2) {
              Zn.with("o_boxingcontroller", (pR) => {
                pR.defend = 1;
                pR.specialcon = 8;
              });
            }
          }
        }
      }
      if (ZJ() && this.onebuffer < 0 && ZX.charturn > 0 && !pG) {
        this.twobuffer = 1;
        this.movenoise = 1;
        pL();
      }
      if (ZO() > 3 && ZN() && this.onebuffer < 0 && pP && !pG) {
        let pR = 0;
        while (pR < 2 && ZX.monster[pR] !== 1) {
          pR++;
        }
        this.selnoise = 1;
        this.onebuffer = 2;
        for (let pD = 0; pD < ZO() && ZX.charturn < ZO() && ZX.myfight === 0; pD++) {
          let e0 = ZX.charturn;
          ZX.chartarget[e0] = pR;
          ZX.faceaction[e0] = 1;
          ZX.charaction[e0] = 1;
          pO();
          if (ZX.charturn === e0) {
            break;
          }
        }
        return;
      }
    }
    if (ZX.bmenuno === 2 && ZX.flag[34] === 0 && ZX.chapter !== 1) {
      if (this.battlewriter) {
        this.battlewriter.skipme = 1;
      }
      pE();
      let e1 = Z;
      let e2 = ZX.battlespell[e1] || [];
      if (Zw() || Zv()) {
        let e4 = 1;
        let e5 = C[2][Z];
        if (e5 < 11) {
          if (e2[e5 + 1] === 0) {
            e4 = 0;
            if (e5 % 2 === 1 && e5 > 0) {
              C[2][Z]--;
            }
          }
        } else {
          C[2][Z]--;
          e4 = 0;
        }
        if (e4 === 1) {
          if (e5 % 2 === 0) {
            C[2][Z]++;
          } else {
            C[2][Z]--;
          }
        }
      }
      if (ZE()) {
        let e6 = C[2][Z];
        let e7 = 1;
        if (e6 >= 10) {
          e7 = 0;
        } else {
          if (e2[e6 + 2] === 0) {
            e7 = 0;
          }
          if (e6 === 5 && e2[6] !== 0 && e2[7] === 0) {
            e7 = 2;
          }
        }
        if (e7 === 1) {
          C[2][Z] += 2;
        }
        if (e7 === 2) {
          C[2][Z] = 6;
        }
      }
      if (Zc() && C[2][Z] > 1) {
        C[2][Z] -= 2;
      }
      ZX.tensionselect = (ZX.battlespellcost[e1] || [])[C[2][Z]] || 0;
      let e3 =
        this.techUnlocked(e1, C[2][Z]) &&
        (!(ZX.chapter >= 4) || !ZC.techBlocked || !ZC.techBlocked(this, e1, C[2][Z])) &&
        M(e2[C[2][Z]], e1);
      if (
        ZF() &&
        e2[C[2][Z]] !== 0 &&
        this.onebuffer < 0 &&
        e3 &&
        ((ZX.battlespellcost[e1] || [])[C[2][Z]] || 0) <= ZX.tension
      ) {
        if (
          (ZX.chapter >= 4 && ZC.techConfirm && ZC.techConfirm(this, e1, C[2][Z], "before")) ||
          ((this.onebuffer = 2),
          (ZX.bmenuno = 0),
          (this.selnoise = 1),
          ZX.chapter >= 4 && ZC.techConfirm && ZC.techConfirm(this, e1, C[2][Z], "after"))
        ) {
          return;
        }
        if (e2[C[2][Z]] !== -1) {
          let e8 =
            ZX.chapter >= 4 && ZC.chapterSpellinfo && !ZB(e2[C[2][Z]])
              ? ZC.chapterSpellinfo(e2[C[2][Z]])
              : Z4(e2[C[2][Z]]);
          this.cost = e8.cost;
          if (e8.spelltarget === 0) {
            pI(e8.cost, e8.spellanim);
          }
          if (e8.spelltarget === 1) {
            ZX.bmenuno = 8;
          }
          if (e8.spelltarget === 2) {
            ZX.bmenuno = 3;
          }
          if (e8.spelltarget === 3) {
            ZX.bmenuno = 99;
          }
        } else if (
          !(ZX.chapter >= 4) ||
          !ZC.techActDirect ||
          !ZC.techActDirect(this, e1, C[2][Z])
        ) {
          ZX.bmenuno = 13;
        }
      }
      if (ZJ() && this.onebuffer < 0) {
        ZX.tensionselect = 0;
        this.twobuffer = 1;
        ZX.bmenuno = 0;
        this.movenoise = 1;
      }
    } else if (ZX.bmenuno === 2) {
      if (this.battlewriter) {
        this.battlewriter.skipme = 1;
      }
      pE();
      let e9 = ZX.char[Z];
      let eZ = ZX.spell[e9];
      if (Zw()) {
        let eC = 1;
        let ep = C[2][Z];
        if (ep < 11) {
          if (eZ[ep + 1] === 0) {
            eC = 0;
            if (ep % 2 === 1 && ep > 0) {
              C[2][Z]--;
            }
          }
        } else {
          C[2][Z]--;
          eC = 0;
        }
        if (eC === 1) {
          if (ep % 2 === 0) {
            C[2][Z]++;
          } else {
            C[2][Z]--;
          }
        }
      }
      if (Zv()) {
        let eu = C[2][Z];
        if (eZ[1] !== 0) {
          if (eu % 2 === 0) {
            C[2][Z]++;
          } else {
            C[2][Z]--;
          }
        }
      }
      if (ZE()) {
        let em = C[2][Z];
        let eB = 1;
        if (em >= 10) {
          eB = 0;
        } else {
          if (eZ[em + 2] === 0) {
            eB = 0;
          }
          if (em === 5 && eZ[6] !== 0 && eZ[7] === 0) {
            eB = 2;
          }
        }
        if (eB === 1) {
          C[2][Z] += 2;
        }
        if (eB === 2) {
          C[2][Z] = 6;
        }
      }
      if (Zc() && C[2][Z] > 1) {
        C[2][Z] -= 2;
      }
      ZX.tensionselect = ZX.spellcost[e9][C[2][Z]];
      if (
        ZF() &&
        eZ[C[2][Z]] !== 0 &&
        this.onebuffer < 0 &&
        M(eZ[C[2][Z]], Z) &&
        ZX.spellcost[e9][C[2][Z]] <= ZX.tension
      ) {
        this.onebuffer = 2;
        ZX.bmenuno = 0;
        this.selnoise = 1;
        let eX = Z4(eZ[C[2][Z]]);
        this.cost = eX.cost;
        if (eX.spelltarget === 0) {
          pI(eX.cost, eX.spellanim);
        }
        if (eX.spelltarget === 1) {
          ZX.bmenuno = 8;
        }
        if (eX.spelltarget === 2) {
          ZX.bmenuno = 3;
        }
        if (eX.spelltarget === 3) {
          ZX.bmenuno = 99;
        }
      }
      if (ZJ() && this.onebuffer < 0) {
        ZX.tensionselect = 0;
        this.twobuffer = 1;
        ZX.bmenuno = 0;
        this.movenoise = 1;
      }
    }
    if (ZX.bmenuno === 4) {
      if (this.battlewriter) {
        this.battlewriter.skipme = 1;
      }
      pE();
      let eS = (eU) => (this.tempitem[eU] ? this.tempitem[eU][Z] : 0);
      if (eS(C[4][Z]) === 0 && C[4][Z] > 0) {
        C[4][Z]--;
      }
      if (Zw()) {
        let eU = 1;
        let eO = C[4][Z];
        if (eO < 11) {
          if (eS(eO + 1) === 0) {
            eU = 0;
            if (eO % 2 === 1 && eO > 0) {
              C[4][Z]--;
            }
          }
        } else {
          C[4][Z]--;
          eU = 0;
        }
        if (eU === 1) {
          if (eO % 2 === 0) {
            C[4][Z]++;
          } else {
            C[4][Z]--;
          }
        }
      }
      if (Zv()) {
        let eL = C[4][Z];
        if (eS(1) !== 0) {
          if (eL % 2 === 0) {
            C[4][Z]++;
          } else {
            C[4][Z]--;
          }
        }
      }
      if (ZE()) {
        let eH = C[4][Z];
        let ey = 1;
        if (eH >= 10) {
          ey = 0;
        } else {
          if (eS(eH + 2) === 0) {
            ey = 0;
          }
          if (eH === 5 && eS(6) !== 0 && eS(7) === 0) {
            ey = 2;
          }
        }
        if (ey === 1) {
          C[4][Z] += 2;
        }
        if (ey === 2) {
          C[4][Z] = 6;
        }
        if (ey === 0) {
          C[4][Z] = pf(eS, eH, 1);
        }
      }
      if (Zc()) {
        if (C[4][Z] > 1) {
          C[4][Z] -= 2;
        } else {
          C[4][Z] = pf(eS, C[4][Z], -1);
        }
      }
      if (eS(C[4][Z]) === 0 && C[4][Z] > 0) {
        C[4][Z]--;
      }
      if (ZF() && eS(C[4][Z]) !== 0 && this.onebuffer < 0) {
        this.onebuffer = 2;
        ZX.bmenuno = 0;
        this.selnoise = 1;
        let eY = eS(C[4][Z]);
        let ej = ZH[eY];
        this.itemsel = {
          id: eY,
          idx: C[4][Z],
        };
        if (ZX.chapter >= 4 && ZC.itemMenuPick && ZC.itemMenuPick(this, eY, C[4][Z])) {
          return;
        }
        let eb = !ej || ej[2] === 0 || ej[2] === 2 ? C7(Zy(eY)) : null;
        if (eb !== null) {
          Z6(eb);
          pQ(Z);
          let eI = Z;
          for (let ef = C[4][Z]; ef < 12; ef++) {
            this.tempitem[ef][eI] = this.tempitem[ef + 1] ? this.tempitem[ef + 1][eI] : 0;
          }
          pO();
        } else if (!ej || ej[2] === 0 || ej[2] === 2) {
          pt(eY, C[4][Z]);
        } else {
          ZX.bmenuno = 7;
        }
      }
      if (ZJ() && this.onebuffer < 0) {
        this.twobuffer = 1;
        ZX.bmenuno = 0;
        this.movenoise = 1;
        if (ZX.chapter >= 4 && ZC.itemMenuCancel) {
          ZC.itemMenuCancel(this);
        }
      }
    }
    if (ZX.bmenuno === 9) {
      let eQ = C[11][Z];
      let et = this.actinfo(eQ);
      if (Zw()) {
        let ez = 1;
        let eJ = C[9][Z];
        if (eJ < 5) {
          if (et.canact.get(eJ + 1) === 0) {
            ez = 0;
            if (eJ % 2 === 1 && eJ > 0) {
              C[9][Z]--;
            }
          }
        } else {
          C[9][Z]--;
          ez = 0;
        }
        if (ez === 1) {
          if (eJ % 2 === 0) {
            C[9][Z]++;
          } else {
            C[9][Z]--;
          }
        }
      }
      if (Zv()) {
        let ek = C[9][Z];
        if (ek % 2 === 0) {
          if (et.canact.get(ek + 1) !== 0) {
            C[9][Z]++;
          }
        } else {
          C[9][Z]--;
        }
      }
      if (ZE()) {
        let el = C[9][Z];
        let eN = 1;
        if (el >= 4 || et.canact.get(el + 2) === 0) {
          eN = 0;
        }
        if (eN === 1) {
          C[9][Z] += 2;
        }
      }
      if (Zc() && C[9][Z] > 1) {
        C[9][Z] -= 2;
      }
      ZX.tensionselect = et.cost.get(C[9][Z]);
      let eF = 1;
      let eT = ZX.chapter === 1 || ZS(ZX.char[Z]) === 1 ? ZX.actactor[eQ][C[9][Z]] : 0;
      if (eT === 2 || eT === 4) {
        if (!this.partnerReady(2)) {
          eF = 0;
        }
      }
      if (eT === 3 || eT === 4) {
        if (!this.partnerReady(3)) {
          eF = 0;
        }
      }
      if (eT === 5 && ZX.chapter !== 1) {
        if (!this.partnerReady(4)) {
          eF = 0;
        }
      }
      let eW = true;
      if (ZX.chapter === 3) {
        let eo = (ZX.actname[eQ] || [])[C[9][Z]];
        let eA = Zn.first("obj_pippins_enemy");
        if ((ZX.flag[1044] || 0) < 150 && eA && eo === (ZX.actname[eA.myself] || [])[3]) {
          eW = false;
        }
        let ea = [1, 2, 3].some((B1) => ZX.chararmor1[B1] === 7 || ZX.chararmor2[B1] === 7);
        let mD = Zn.first("obj_tenna_enemy_bg");
        let B0 = Zn.first("obj_tenna_enemy");
        if (mD && B0 && mD.myscore < (ea ? 30 : 20) && eo === (ZX.actnamesus[B0.myself] || [])[1]) {
          eW = false;
        }
      }
      if (
        (ZX.chapter === 2 || ZX.chapter === 3) &&
        eF === 1 &&
        eW &&
        ZF() &&
        (ZX.canact[eQ] || [])[C[9][Z]] === 1 &&
        ZX.tension >= ZX.tensionselect &&
        this.onebuffer < 0
      ) {
        this.onebuffer = 2;
        ZX.bmenuno = 0;
        this.selnoise = 1;
        let B1 = C[9][Z];
        ZX.actingchoice[Z] = B1;
        ZX.tension -= et.cost.get(B1);
        ZX.tensionselect = 0;
        this.actselect(eQ, B1);
        C[9][Z] = 0;
        pO();
      } else if (
        ZX.chapter !== 2 &&
        ZX.chapter !== 3 &&
        eF === 1 &&
        ZF() &&
        (ZX.canact[eQ] || [])[C[9][Z]] === 1 &&
        ZX.tension >= ZX.tensionselect &&
        this.onebuffer < 0
      ) {
        this.onebuffer = 2;
        ZX.bmenuno = 0;
        this.selnoise = 1;
        ZX.tension -= et.cost.get(C[9][Z]);
        ZX.tensionselect = 0;
        let B2 = ZX.monsterinstance[eQ];
        if (B2 && !B2.destroyed) {
          B2.acting = C[9][Z] + 1;
        }
        if (ZX.chapter >= 2) {
          ZX.actingchoice[Z] = C[9][Z];
          ZX.actingsimul[ZU()] = et.simul.get(C[9][Z]);
          ZX.actingsingle[ZU()] = 1;
          ZX.actingtarget[Z] = eQ;
        }
        ZX.acting[ZU()] = 1;
        if (eT === 2 && Zi(2) >= 0) {
          ZX.acting[Zi(2)] = 1;
        }
        if (eT === 3 && Zi(3) >= 0) {
          ZX.acting[Zi(3)] = 1;
        }
        if (eT === 4) {
          if (ZX.char[2]) {
            ZX.acting[2] = 1;
          }
          if (ZX.char[1]) {
            ZX.acting[1] = 1;
          }
        }
        for (let B3 = 0; B3 < ZO(); B3++) {
          if (ZX.acting[B3] === 1) {
            ZX.faceaction[B3] = 6;
            ZX.charaction[B3] = 9;
          }
        }
        pO();
      }
      if (ZJ() && this.onebuffer < 0) {
        if (ZX.chapter === 2 || ZX.chapter === 3) {
          C[9][Z] = 0;
        }
        ZX.tensionselect = 0;
        this.twobuffer = 1;
        ZX.bmenuno = 11;
        this.movenoise = 1;
      }
    }
    let pg = ZX.chapter === 1 ? [7, 1, 8, 3, 11, 12] : [7, 1, 8, 3, 11, 12, 13];
    if (
      pg.includes(ZX.bmenuno) &&
      (this.battlewriter && (this.battlewriter.skipme = 1),
      pE(),
      ZJ() &&
        this.onebuffer < 0 &&
        ((this.twobuffer = 1),
        [1, 11, 12].includes(ZX.bmenuno)
          ? (ZX.bmenuno = 0)
          : ZX.bmenuno === 7
            ? (ZX.bmenuno = 4)
            : (ZX.bmenuno === 8 || ZX.bmenuno === 3 || ZX.bmenuno === 13) && (ZX.bmenuno = 2),
        (this.movenoise = 1)),
      pg.includes(ZX.bmenuno))
    ) {
      let B4 = ZX.bmenuno;
      let B5 = [0, 0, 0];
      if (B4 === 7 || B4 === 8) {
        for (let B9 = 0; B9 < ZO(); B9++) {
          if (ZX.char[B9] > 0) {
            B5[B9] = 1;
          }
        }
      } else {
        for (let BZ = 0; BZ < 3; BZ++) {
          B5[BZ] = ZX.monster[BZ];
        }
      }
      let B6 = (B4 === 7 || B4 === 8) && ZO() > 3;
      if (B6) {
        let BC = ZO();
        let Bp = (Bm) => Bm >= 0 && Bm < BC && ZX.char[Bm] > 0;
        let Be = C[B4][Z];
        if (!Bp(Be)) {
          for (Be = 0; Be < BC - 1 && !Bp(Be);) {
            Be++;
          }
        }
        let Bu = (Bm) => {
          let BB = Be;
          for (let BX = 0; BX < BC; BX++) {
            BB = (BB + Bm + BC) % BC;
            if (Bp(BB)) {
              return BB;
            }
          }
          return Be;
        };
        if (ZE()) {
          Be = Bu(1);
          this.movenoise = 1;
        }
        if (Zc()) {
          Be = Bu(-1);
          this.movenoise = 1;
        }
        {
          let Bm = Math.floor(Be / 6) * 6;
          let BB = Be - Bm < 3 ? Be + 3 : Be - 3;
          if ((Zw() || Zv()) && Bp(BB)) {
            Be = BB;
            this.movenoise = 1;
          }
        }
        C[B4][Z] = Be;
      }
      if (!B6) {
        if (C[B4][Z] === 2 && B5[2] === 0) {
          C[B4][Z] = 0;
        }
        if (C[B4][Z] === 0 && B5[0] === 0) {
          C[B4][Z] = 1;
        }
        if (C[B4][Z] === 1 && B5[1] === 0) {
          C[B4][Z] = 0;
        }
        if (C[B4][Z] === 0 && B5[0] === 0) {
          C[B4][Z] = 2;
        }
      }
      let B7 = ZE() ? 1 : Zc() ? -1 : 0;
      if (
        B7 !== 0 &&
        B4 !== 7 &&
        B4 !== 8 &&
        ZX.monster.__customBoard &&
        ZC.customScroll &&
        ZC.customScroll(B4, Z, B7)
      ) {
        this.movenoise = 1;
      } else if (!B6) {
        if (ZE()) {
          let BX = C[B4][Z];
          let BS = BX === 0 ? [1, 2] : BX === 1 ? [2, 0] : [0, 1];
          for (let Bi of BS) {
            if (B5[Bi] === 1) {
              this.movenoise = 1;
              C[B4][Z] = Bi;
              break;
            }
          }
        }
        if (Zc()) {
          let BU = C[B4][Z];
          let BO = BU === 0 ? [2, 1] : BU === 1 ? [0, 2] : [1, 0];
          for (let BL of BO) {
            if (B5[BL] === 1) {
              this.movenoise = 1;
              C[B4][Z] = BL;
              break;
            }
          }
        }
      }
      let B8 =
        ZX.chapter >= 4 && this.skipmonsterselection
          ? ((this.skipmonsterselection = 0), true)
          : false;
      if ((ZF() && this.onebuffer < 0) || B8) {
        if (B4 !== 7 && B4 !== 8 && ZX.monster.__customBoard && ZC.customTargetPicked) {
          ZC.customTargetPicked(B4, Z, C[B4][Z]);
        }
        this.onebuffer = 1;
        this.selnoise = 1;
        if (B4 === 1) {
          ZX.chartarget[Z] = C[B4][Z];
          ZX.faceaction[Z] = 1;
          ZX.charaction[Z] = 1;
          pO();
        }
        if (B4 === 7) {
          ZX.chartarget[Z] = C[B4][Z];
          {
            let BH = this.itemsel && C9(Zy(this.itemsel.id));
            if (BH) {
              Z6(BH);
              pQ(Z);
            }
          }
          if (ZX.chapter >= 4 && ZC.itemTargetSkip && ZC.itemTargetSkip(this)) {
            pO();
          } else {
            pt(this.itemsel.id, this.itemsel.idx);
            if (ZX.chapter === 2) {
              Zn.with("o_boxingcontroller", (By) => {
                By.specialcon = 7;
              });
            }
          }
        }
        if (B4 === 8 || B4 === 3) {
          ZX.chartarget[Z] = C[B4][Z];
          pI(this.cost);
        }
        if (B4 === 11) {
          ZX.bmenuno = 9;
          let By = C[9][Z];
          let BI = C[11][Z];
          let Bf = this.actinfo(BI);
          for (let BQ = 0; BQ < 6; BQ++) {
            if (Bf.canact.get(By) === 0 && By > 0) {
              C[9][Z]--;
              By--;
            }
          }
          this.onebuffer = 1;
        }
        if (B4 === 12) {
          ZX.faceaction[Z] = 10;
          ZX.chartarget[Z] = C[B4][Z];
          ZX.charaction[Z] = 2;
          ZX.charspecial[Z] = 100;
          pO();
        }
        if (B4 === 13) {
          this.onebuffer = 2;
          ZX.bmenuno = 0;
          this.selnoise = 1;
          let BF = C[2][Z];
          let BT = C[13][Z];
          ZX.actingchoice[Z] = BF;
          ZX.tension -= (ZX.battlespellcost[Z] || [])[BF] || 0;
          ZX.tensionselect = 0;
          this.actselect(BT, BF);
          if (ZX.chapter >= 4 && ZC.techActPicked && ZC.techActPicked(this)) {
            return;
          }
          pO();
        }
      }
    }
  }
  draw(Z) {
    pA();
    if (p1()) {
      return;
    }
    let C = 0;
    let pd = 0;
    if (ZX.chapter === 2 && Zn.exists("obj_gigaqueen_enemy")) {
      if (this.gigaqueencon === 1) {
        this.gigaqueentimer++;
        this.gigaqueeny = Y(0, 100, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      if (this.gigaqueencon === 2) {
        this.gigaqueentimer++;
        this.gigaqueeny = Y(100, 0, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      if (this.gigaqueencon === 3) {
        this.gigaqueeny = 200;
      }
      if (this.gigaqueencon === 4) {
        this.gigaqueentimer++;
        this.gigaqueeny = Y(200, 0, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      if (this.gigaqueencon === 5) {
        this.gigaqueentimer++;
        this.gigaqueeny = Y(0, 200, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      pd = this.gigaqueeny;
    }
    let pE = -this.bp + this.bpy + pd;
    if (this.intro === 1) {
      if (this.bp < this.bpy - 1) {
        if (this.bpy - this.bp < 40) {
          this.bp += ZK((this.bpy - this.bp) / 2.5);
        } else {
          this.bp += 30;
        }
      } else {
        this.bp = this.bpy;
      }
      if (this.bp === this.bpy) {
        this.intro = 0;
      }
    }
    if (this.intro === 2) {
      if (this.bp > 0) {
        if (ZK((this.bpy - this.bp) / 5) > 15) {
          this.bp -= ZK((this.bpy - this.bp) / 2.5);
        } else {
          this.bp -= 30;
        }
      } else {
        this.bp = 0;
      }
    }
    if (ZX.chapter >= 4 && ZC.bcBp) {
      ZC.bcBp(this);
    }
    let pg = this.bp;
    if (ZX.chapter >= 4 && ZC.bcDrawTop) {
      ZC.bcDrawTop(this, Z);
    }
    this.rouxlsButtonStep();
    let pq = ZX.chapter === 1;
    Z.draw_set_color(Zf.black);
    Z.draw_rectangle(C - 10, 481 + pd, C + 700, pq ? 480 - pg + pd : 480 - pg + pd - 4, false);
    Z.draw_set_color(this.bcolor);
    if (pq) {
      Z.draw_rectangle(C - 10, 480 - pg - 2 + pd, C + 700, 480 - pg + pd, false);
    } else {
      Z.draw_rectangle(C - 10, 480 - pg - 3 + pd, C + 700, 480 - pg - 2 + pd, false);
    }
    Z.draw_rectangle(C - 10, 480 - pg + 34 + pd, C + 700, 480 - pg + 36 + pd, false);
    this.charbox(Z, pE, pd);
    Z.draw_set_font("fnt_mainbig");
    let pK = ZX.charturn;
    let pP = ZX.bmenucoord;
    if (
      ([1, 3, 11, 12].includes(ZX.bmenuno) || (ZX.bmenuno === 13 && ZX.chapter !== 1)) &&
      ZX.myfight === 0
    ) {
      Z.draw_sprite("spr_heart", 0, C + 55, pd + 385 + pP[ZX.bmenuno][pK] * 30);
      let pV = 0;
      for (let px = 0; px < 3; px++) {
        let pr = Z.string_width(ZX.monstername[px]);
        if (pr > pV) {
          pV = pr;
        }
      }
      let pG = ZX.monsterinstance[pP[ZX.bmenuno][pK]];
      if (pG && !pG.destroyed) {
        if (pG.flash === 0) {
          pG.fsiner = 0;
        }
        pG.flash = 1;
        pG.becomeflash = 1;
      }
      if (ZX.monster.__customBoard && ZC.customHidden && ZC.customHidden() > 0) {
        Z.draw_sprite_ext(
          "spr_morearrow",
          0,
          C + 40,
          pd + 382 - Zr(this.s_siner / 10) * 2,
          1,
          -1,
          0,
          Zf.white,
          1,
        );
        Z.draw_sprite("spr_morearrow", 0, C + 40, pd + 446 + Zr(this.s_siner / 10) * 2);
      }
      for (let pM = 0; pM < 3; pM++) {
        if (ZX.monster[pM] === 1) {
          let ph = Zf.white;
          let pR = Zf.white;
          let pD = ZQ(Zf.aqua, Zf.blue, 0.3);
          if (ZX.chapter === 3 && ZX.charturn === 2) {
            pD = ZQ(pD, Zf.white, 0.5 + Zr((this.t_siner || 0) / 4) * 0.5);
          }
          let e0 = ZX.monsterstatus[pM] === 1;
          let e1 = ZX.mercymod[pM] >= ZX.mercymax[pM];
          let e2 = Z.string_width(ZX.monstername[pM]);
          if (e0) {
            if (ZX.encounterno !== 31) {
              ph = pD;
              pR = pD;
            }
            Z.draw_sprite("spr_tiredmark", 0, C + 80 + e2 + 40, pd + 385 + pM * 30);
          }
          let e3 = ZX.chapter !== 1 && this.hidemercy === 1;
          let e4 = ZX.chapter >= 4 && this.hidestar === 1;
          if (!e1 || !e4) {
            if (e1) {
              ph = Zf.yellow;
              if (!e0) {
                pR = Zf.yellow;
              }
              if (!e3) {
                Z.draw_sprite("spr_sparestar", 0, C + 80 + e2 + 20, pd + 385 + pM * 30);
              }
            }
          }
          Z.draw_text_colour(C + 80, pd + 375 + pM * 30, ZX.monstername[pM], ph, pR, pR, ph, 1);
          let e5 = ZX.bmenuno === 13 && ZX.chapter !== 1;
          if (e5) {
            let e6 = ZS(ZX.char[pK]);
            let e7 = pP[2][pK];
            let e8 =
              e6 === 2 ? ZX.actnamesus : e6 === 3 ? ZX.actnameral : e6 === 4 ? ZX.actnamenoe : null;
            let e9 = "Standard";
            if (e8 && e8[pM] && e8[pM][e7] !== undefined) {
              e9 = e8[pM][e7];
            }
            if (e9 === "S-Action" || e9 === "R-Action" || e9 === "N-Action") {
              e9 = "Standard";
            }
            Z.draw_set_color(
              (this.hpcolorsoft || [])[c(ZX.char[pK]) === "noelle" ? 3 : e6 - 1] || Zf.white,
            );
            let eZ = 514 - (80 + pV + 60);
            let eC = Z.string_width(String(e9));
            Z.draw_text_transformed(
              C + 80 + pV + 60,
              pd + 375 + pM * 30,
              String(e9),
              eC >= eZ ? eZ / eC : 1,
              1,
              0,
            );
          }
          if (!e5) {
            Z.draw_text(C + 80 + e2 + 60, pd + 375 + pM * 30, ZX.monstercomment[pM], Zf.gray);
            let ep = ZX.chapter === 1 ? 510 : 420;
            let eu = ZX.chapter === 1 ? 590 : 500;
            let em = Math.max(0, ZX.monsterhp[pM] / ZX.monstermaxhp[pM]);
            Z.draw_set_color(Zf.maroon);
            Z.draw_rectangle(C + ep, pd + 380 + pM * 30, C + eu, pd + 380 + pM * 30 + 15, false);
            Z.draw_set_color(Zf.lime);
            Z.draw_rectangle(
              C + ep,
              pd + 380 + pM * 30,
              C + ep + em * 80,
              pd + 380 + pM * 30 + 15,
              false,
            );
            if (ZX.chapter !== 1) {
              Z.draw_set_color(Zf.white);
              Z.draw_text_transformed(C + 424, pd + 364, "HP", 1, 0.5, 0);
              let eB =
                ZX.chapter === 3 && Zn.exists("obj_knight_enemy")
                  ? "???"
                  : Math.ceil(em * 100) + "%";
              Z.draw_text_transformed(C + 424, pd + 380 + pM * 30, eB, 1, 0.5, 0);
            }
          }
          if (ZX.chapter !== 1 && !e3) {
            let eX = Math.ceil((ZX.mercymod[pM] / ZX.mercymax[pM]) * 100);
            if (eX > 100) {
              eX = 100;
            }
            let eS = (this.cantspare || [])[pM] === 1;
            let eU = ZX.chapter >= 4 && (this.questionmercy || [])[pM] === 1;
            if (ZX.chapter >= 4) {
              eX = Math.round((ZX.mercymod[pM] / ZX.mercymax[pM]) * 100);
              if (eX > 100) {
                eX = 100;
              }
            }
            Z.draw_set_color(ZQ(Zf.orange, Zf.red, 0.5));
            Z.draw_rectangle(C + 520, pd + 380 + pM * 30, C + 600, pd + 380 + pM * 30 + 15, false);
            Z.draw_set_color(Zf.yellow);
            if (ZX.mercymod[pM] > 0 && !eS && !eU) {
              Z.draw_rectangle(
                C + 520,
                pd + 380 + pM * 30,
                C + 520 + eX * 0.8,
                pd + 380 + pM * 30 + 15,
                false,
              );
            }
            Z.draw_set_color(Zf.white);
            Z.draw_text_transformed(C + 524, pd + 364, "MERCY", 1, 0.5, 0);
            Z.draw_set_color(Zf.maroon);
            if (!eS && !eU) {
              Z.draw_text_transformed(C + 524, pd + 380 + pM * 30, eX + "%", 1, 0.5, 0);
            } else if (eU && !eS) {
              Z.draw_set_color(Zf.white);
              Z.draw_text_transformed(C + 524, pd + 364 + 15, "???", 1, 0.5, 0);
            } else {
              Z.draw_line_width_color(
                C + 520 - 1,
                pd + 380 + pM * 30,
                C + 600,
                pd + 380 + pM * 30 + 15,
                2,
                Zf.maroon,
                Zf.maroon,
              );
              Z.draw_line_width_color(
                C + 520 - 1,
                pd + 380 + pM * 30 + 15,
                C + 600,
                pd + 380 + pM * 30,
                2,
                Zf.maroon,
                Zf.maroon,
              );
            }
          }
        }
      }
    }
    if (ZX.bmenuno === 2 && ZX.myfight === 0 && ZX.flag[34] === 0 && ZX.chapter !== 1) {
      let eO = pK;
      let eL = pP[2][pK];
      let eH = 0;
      if (eL > 5) {
        eH = 1;
        eL -= 6;
      }
      let ey = 10;
      let eY = 385;
      if (eL % 2 === 1) {
        ey = 230;
      }
      if (eL > 1 && eL < 4) {
        eY = 415;
      }
      if (eL > 3) {
        eY = 445;
      }
      Z.draw_sprite("spr_heart", 0, C + ey, pd + eY);
      let ej = ZX.battlespellname[eO] || [];
      let eb = ZX.battlespellcost[eO] || [];
      let eI = ZX.battlespellspecial[eO] || [];
      let ef = ZX.battlespell[eO] || [];
      for (let eQ = 0; eQ < 3; eQ++) {
        for (let et = 0; et < 2; et++) {
          let eF = eH * 6 + eQ * 2 + et;
          let eT = Zf.white;
          if ((eI[eF] || 0) >= 1) {
            eT =
              (this.hpcolorsoft || [])[ZS(ZX.char[eO]) - 1] ||
              (d(ZX.char[eO]) ? ZQ(d(ZX.char[eO]), Zf.white, 0.5) : Zf.white);
          }
          let eW = !this.techUnlocked(eO, eF);
          let ez = ZX.chapter >= 4 && ZC.techMenuColor ? ZC.techMenuColor(this, eO, eF, eT) : null;
          if (ez != null && ez !== false) {
            eT = ez;
          } else if (ZX.tension < (eb[eF] || 0) || eW || !M(ef[eF], eO)) {
            eT = Zf.gray;
          } else if (ef[eF] === 3 || ef[eF] === 8) {
            let eJ = 0;
            for (let ek = 0; ek < 3; ek++) {
              if (ZX.monster[ek] === 1 && ZX.monsterstatus[ek] === 1 && ZX.encounterno !== 31) {
                eJ = 1;
              }
            }
            if (eJ) {
              let el = ZQ(Zf.aqua, Zf.blue, 0.3);
              eT = ZQ(el, Zf.white, 0.5 + Zr((this.t_siner || 0) / 4) * 0.5);
            }
          }
          Z.draw_text(
            C + 30 + et * 230,
            pd + 375 + eQ * 30,
            ej[eF] === undefined ? " " : ej[eF],
            eT,
          );
        }
      }
      if (
        !(ZX.chapter >= 4) ||
        !ZC.techMenuInfoHide ||
        !ZC.techMenuInfoHide(this, eO, eH * 6 + eL)
      ) {
        let eN = String((ZX.battlespelldesc[eO] || [])[eH * 6 + eL] || " ").split("#");
        let eo = ZB((ZX.battlespell[eO] || [])[eH * 6 + eL]);
        for (let ea = 0; ea < eN.length; ea++) {
          let mD = eo ? Z.string_width(eN[ea]) : 0;
          if (mD > 136) {
            Z.draw_set_color(Zf.gray);
            Z.draw_text_transformed(C + 500, pd + 375 + ea * 28, eN[ea], 136 / mD, 1, 0);
          } else {
            Z.draw_text(C + 500, pd + 375 + ea * 28, eN[ea], Zf.gray);
          }
        }
        let eA = ZV(((eb[eH * 6 + eL] || 0) / ZX.maxtension) * 100);
        if (eA > 0) {
          Z.draw_text(C + 500, pd + 440, eA + "% TP", Zf.orange);
        }
      }
    } else if (ZX.bmenuno === 2 && ZX.myfight === 0) {
      let B0 = ZX.char[pK];
      let B1 = pP[2][pK];
      let B2 = 0;
      if (B1 > 5) {
        B2 = 1;
        B1 -= 6;
      }
      let B3 = 10;
      let B4 = 385;
      if (B1 % 2 === 1) {
        B3 = 230;
      }
      if (B1 > 1 && B1 < 4) {
        B4 = 415;
      }
      if (B1 > 3) {
        B4 = 445;
      }
      Z.draw_sprite("spr_heart", 0, C + B3, pd + B4);
      for (let B8 = 0; B8 < 3; B8++) {
        let B9 = B2 * 6 + B8 * 2;
        let BZ = Zf.white;
        if (ZX.tension < ZX.spellcost[B0][B9] || !M(ZX.spell[B0][B9], pK)) {
          BZ = Zf.gray;
        } else if (ZX.spell[B0][B9] === 3) {
          let BC = 0;
          for (let Bp = 0; Bp < 3; Bp++) {
            if (ZX.monster[Bp] === 1 && ZX.monsterstatus[Bp] === 1 && ZX.encounterno !== 31) {
              BC = 1;
            }
          }
          if (BC) {
            BZ = ZQ(Zf.aqua, Zf.blue, 0.3);
          }
        }
        Z.draw_text(C + 30, pd + 375 + B8 * 30, ZX.spellnameb[B0][B9], BZ);
        Z.draw_text(
          C + 260,
          pd + 375 + B8 * 30,
          ZX.spellnameb[B0][B9 + 1],
          ZX.tension < ZX.spellcost[B0][B9 + 1] || !M(ZX.spell[B0][B9 + 1], pK)
            ? Zf.gray
            : Zf.white,
        );
      }
      let B5 = (ZX.spelldescb[B0][B2 * 6 + B1] || "").split("#");
      let B6 = ZB(ZX.spell[B0][B2 * 6 + B1]);
      for (let Be = 0; Be < B5.length; Be++) {
        let Bu = B6 ? Z.string_width(B5[Be]) : 0;
        if (Bu > 136) {
          Z.draw_set_color(Zf.gray);
          Z.draw_text_transformed(C + 500, pd + 375 + Be * 28, B5[Be], 136 / Bu, 1, 0);
        } else {
          Z.draw_text(C + 500, pd + 375 + Be * 28, B5[Be], Zf.gray);
        }
      }
      let B7 = ZK((ZX.spellcost[B0][B2 * 6 + B1] / ZX.maxtension) * 100);
      Z.draw_text(C + 500, pd + 440, B7 + "% TP", Zf.orange);
    }
    if (ZX.bmenuno === 4 && ZX.myfight === 0) {
      let Bm = pP[4][pK];
      let BB = 0;
      if (Bm > 5) {
        BB = 1;
        Bm -= 6;
      }
      let BX = 10;
      let BS = 385;
      if (Bm % 2 === 1) {
        BX = 230;
      }
      if (Bm > 1 && Bm < 4) {
        BS = 415;
      }
      if (Bm > 3) {
        BS = 445;
      }
      Z.draw_sprite("spr_heart", 0, C + BX, pd + BS);
      let Bi = (BL) => {
        let BH = this.tempitem[BL] ? this.tempitem[BL][pK] : 0;
        if (BH && ZH[BH]) {
          return ZH[BH][1];
        } else {
          return " ";
        }
      };
      for (let BL = 0; BL < 3; BL++) {
        Z.draw_text(C + 30, pd + 375 + BL * 30, Bi(BB * 6 + BL * 2), Zf.white);
        Z.draw_text(C + 260, pd + 375 + BL * 30, Bi(BB * 6 + BL * 2 + 1), Zf.white);
      }
      if (BB === 0 && ZX.item[6] !== 0) {
        Z.draw_sprite("spr_morearrow", 0, C + 470, pd + 445 + Zr(this.s_siner / 10) * 2);
      }
      if (BB === 1) {
        Z.draw_sprite_ext(
          "spr_morearrow",
          0,
          C + 470,
          pd + 395 - Zr(this.s_siner / 10) * 2,
          1,
          -1,
          0,
          Zf.white,
          1,
        );
      }
      let BU = this.tempitem[BB * 6 + Bm] ? this.tempitem[BB * 6 + Bm][pK] : 0;
      let BO = BU ? Zm.items[BU - 200] : null;
      Z.draw_text(
        C + 500,
        pd + 375,
        BO ? BO.desc.replace(/#/g, "\n") : BU && ZH[BU] ? ZH[BU][3] : " ",
        Zf.gray,
      );
    }
    if (ZX.bmenuno === 9 && ZX.myfight === 0) {
      let BH = pP[9][pK];
      let By = pP[11][pK];
      let BI = 10;
      let Bf = 385;
      if (BH % 2 === 1) {
        BI = 240;
      }
      if (BH > 1 && BH < 4) {
        Bf = 415;
      }
      if (BH > 3) {
        Bf = 445;
      }
      Z.draw_sprite("spr_heart", 0, C + BI, pd + Bf);
      let BQ = this.actinfo(By);
      let BF = ZX.chapter === 1;
      for (let Bz = 0; Bz < 6; Bz++) {
        let BJ = 0;
        let Bk = BF || ZS(ZX.char[pK]) === 1 ? ZX.actactor[By][Bz] : 0;
        let Bl = 0;
        let BN = Bz % 2 === 1 ? 230 : 0;
        let Bo = Bz >= 4 ? 60 : Bz >= 2 ? 30 : 0;
        let BA = BF ? 36 : 30;
        let Ba = Zf.white;
        let Bv = Zf.white;
        let Bw = Zf.white;
        if (Bk === 2 || Bk === 4) {
          if (!this.partnerReady(2)) {
            Ba = Zf.gray;
            BJ = 1;
          }
          Bl = BA;
        }
        if (Bk === 3 || Bk === 4) {
          if (!this.partnerReady(3)) {
            Bv = Zf.gray;
            BJ = 1;
          }
          Bl = BA;
        }
        if (Bk === 5 && !BF) {
          if (!this.partnerReady(4)) {
            Bw = Zf.gray;
            BJ = 1;
          }
          Bl = BA;
        }
        if (ZX.tension < BQ.cost.get(Bz)) {
          BJ = 1;
        }
        if (Bk === 4) {
          Bl = BF ? ZK(Bl * 1.8) : Bl * 2;
        }
        if (Bk === 2) {
          Z.draw_sprite_ext("spr_headsusie", 0, C + 30 + BN, pd + 375 + Bo, 1, 1, 0, Ba, 1);
        }
        if (Bk === 3) {
          Z.draw_sprite_ext("spr_headralsei", 0, C + 30 + BN, pd + 375 + Bo, 1, 1, 0, Ba, 1);
        }
        if (Bk === 4) {
          Z.draw_sprite_ext("spr_headsusie", 0, C + 30 + BN, pd + 375 + Bo, 1, 1, 0, Ba, 1);
          Z.draw_sprite_ext("spr_headralsei", 0, C + 60 + BN, pd + 375 + Bo, 1, 1, 0, Ba, 1);
        }
        if (Bk === 5 && !BF) {
          Z.draw_sprite_ext("spr_headnoelle", 0, C + 30 + BN, pd + 375 + Bo, 1, 1, 0, Bw, 1);
        }
        if (ZX.chapter === 2) {
          Zn.with("obj_spamton_neo_enemy", (Bd) => {
            let BE = Bd.savemeactcon || 0;
            if (BE <= 0) {
              return;
            }
            let Bg = BE <= 2 ? "spr_headralsei" : BE <= 4 ? "spr_headsusie" : "spr_headnoelle";
            Z.draw_sprite_ext(Bg, 0, C + 30, pd + 380, 1, 1, 0, Bw, 1);
          });
        }
        let Bc = String(BQ.name.get(Bz));
        let Bn = BJ ? Zf.gray : Zf.white;
        if (ZX.chapter >= 4 && ZC.actNameColor) {
          Bn = ZC.actNameColor(Bz, BJ, Bn);
        }
        if (BF) {
          Z.draw_text(C + 30 + Bl + BN, pd + 375 + Bo, Bc, Bn);
        } else {
          let Bd = Math.max(1, Z.string_width(Bc));
          let BE = Math.min(1, Math.max(0.5, (206 - Bl) / Bd));
          Z.draw_set_color(Bn);
          Z.draw_text_transformed(C + 30 + Bl + BN, pd + 375 + Bo, Bc, BE, 1, 0);
        }
      }
      let BT = ZX.chapter >= 4 && ZC.actInfoHide ? ZC.actInfoHide(this, BH) || {} : {};
      if (!BT.desc) {
        let Bg = String(BQ.desc.get(BH) || " ").split("#");
        for (let Bq = 0; Bq < Bg.length; Bq++) {
          Z.draw_text(C + 500, pd + 375 + Bq * 28, Bg[Bq], Zf.gray);
        }
      }
      if (ZX.tensionselect > 0 && !BT.tp) {
        let BK = ZK((BQ.cost.get(BH) / ZX.maxtension) * 100);
        Z.draw_text(C + 500, pd + 440, BK + "% TP", Zf.orange);
      }
      let BW = ZX.monsterinstance[By];
      if (BW && !BW.destroyed) {
        if (BW.flash === 0) {
          BW.fsiner = 0;
        }
        BW.flash = 1;
        BW.becomeflash = 1;
      }
    }
    if ((ZX.bmenuno === 7 || ZX.bmenuno === 8) && ZX.myfight === 0 && ZO() > 3) {
      let BP = Math.floor(pP[ZX.bmenuno][pK] / 6) * 6;
      let BV = Math.min(ZO(), BP + 6);
      let BG = (Bs) => [C + 80 + (Bs - BP < 3 ? 0 : 280), pd + 375 + ((Bs - BP) % 3) * 30];
      let [Bx, Br] = BG(pP[ZX.bmenuno][pK]);
      Z.draw_sprite("spr_heart", 0, Bx - 25, Br + 10);
      let BM = ZX.charinstance[pP[ZX.bmenuno][pK]];
      if (BM) {
        if (BM.flash === 0) {
          BM.fsiner = 0;
        }
        BM.flash = 1;
        BM.becomeflash = 1;
      }
      if (ZO() > 6) {
        Z.draw_set_font("fnt_main");
        Z.draw_set_halign("right");
        Z.draw_text(C + 632, pd + 456, BP + 1 + "-" + BV + "/" + ZO(), Zf.gray);
        Z.draw_set_halign("left");
        Z.draw_set_font("fnt_mainbig");
      }
      for (let Bs = BP; Bs < BV; Bs++) {
        if (ZX.char[Bs] !== 0) {
          let [Bh, BR] = BG(Bs);
          let BD = ZX.char[Bs];
          Z.draw_text(Bh, BR, ZX.charname[BD], Zf.white);
          Z.draw_set_color(Zf.maroon);
          Z.draw_rectangle(Bh + 150, BR + 5, Bh + 230, BR + 20, false);
          Z.draw_set_color(Zf.lime);
          Z.draw_rectangle(
            Bh + 150,
            BR + 5,
            Bh + 150 + Math.max(0, ZX.hp[BD] / ZX.maxhp[BD]) * 80,
            BR + 20,
            false,
          );
        }
      }
    } else if ((ZX.bmenuno === 7 || ZX.bmenuno === 8) && ZX.myfight === 0) {
      Z.draw_sprite("spr_heart", 0, C + 55, pd + 385 + pP[ZX.bmenuno][pK] * 30);
      let X0 = ZX.charinstance[pP[ZX.bmenuno][pK]];
      if (X0) {
        if (X0.flash === 0) {
          X0.fsiner = 0;
        }
        X0.flash = 1;
        X0.becomeflash = 1;
      }
      for (let X1 = 0; X1 < ZO(); X1++) {
        if (ZX.char[X1] !== 0) {
          Z.draw_text(C + 80, pd + 375 + X1 * 30, ZX.charname[ZX.char[X1]], Zf.white);
          Z.draw_set_color(Zf.maroon);
          Z.draw_rectangle(C + 400, pd + 380 + X1 * 30, C + 500, pd + 380 + X1 * 30 + 15, false);
          Z.draw_set_color(Zf.lime);
          Z.draw_rectangle(
            C + 400,
            pd + 380 + X1 * 30,
            C + 400 + Math.max(0, ZX.hp[ZX.char[X1]] / ZX.maxhp[ZX.char[X1]]) * 100,
            pd + 380 + X1 * 30 + 15,
            false,
          );
        }
      }
    }
    if (ZX.chapter >= 4 && ZC.bcDrawEnd) {
      ZC.bcDrawEnd(this, Z);
    }
  }
  charbox(Z, C, pd) {
    let pE = G(this, ZO());
    if (pE) {
      this.charboxCompact(Z, C, pd || 0, pE);
      return;
    }
    let pg = 0;
    let pq = pd || 0;
    let pK = this.bp;
    for (let pP = 0; pP < ZO(); pP++) {
      if (this.havechar[pP] !== 1) {
        continue;
      }
      let pV = ZX.char[pP];
      let pG = ZS(pV);
      let px = d(pV) || (c(pV) === "noelle" ? Zf.yellow : this.hpcolor[pG - 1]);
      let pr = ZX.charturn;
      let pM = 0;
      let ph = pP;
      let pR = this.chartotal;
      let pD = 212;
      let e0 = ZX.chapter === 1;
      if (pR === 3) {
        pM = (e0 ? [0, 212, 424] : [0, 213, 426])[ph];
      } else if (pR === 2) {
        pM = (e0 ? [106, 326] : [108, 322])[ph];
      } else {
        pM = e0 ? 212 : 213;
      }
      let e1 = !!this.rouxlsgridenabled;
      if (pr === ph) {
        if (e1) {
          if (this.mmy[pP] > -170) {
            this.mmy[pP] -= 2;
          }
          if (this.mmy[pP] > -160) {
            this.mmy[pP] -= 4;
          }
          if (this.mmy[pP] > -150) {
            this.mmy[pP] -= 6;
          }
          if (this.mmy[pP] > -140) {
            this.mmy[pP] -= 12;
          }
          if (this.mmy[pP] > -32) {
            this.mmy[pP] -= 32;
          }
        } else {
          if (this.mmy[pP] > -32) {
            this.mmy[pP] -= 2;
          }
          if (this.mmy[pP] > -24) {
            this.mmy[pP] -= 4;
          }
          if (this.mmy[pP] > -16) {
            this.mmy[pP] -= 6;
          }
          if (this.mmy[pP] > -8) {
            this.mmy[pP] -= 8;
          }
          if (this.mmy[pP] < -32) {
            this.mmy[pP] = -64;
          }
        }
      } else if (e1) {
        if (this.mmy[pP] < -14) {
          this.mmy[pP] += 32;
        }
        if (this.mmy[pP] > -14) {
          this.mmy[pP] = 0;
        }
      } else if (this.mmy[pP] < -14) {
        this.mmy[pP] += 15;
      } else {
        this.mmy[pP] = 0;
      }
      if (e1 && this.mmy[pP] !== 0) {
        Z.draw_set_color(Zf.black);
        Z.draw_rectangle(
          pg + pM + 2,
          480 - pK - 1 + pq + this.mmy[pP],
          pg + pM + 210,
          480 - pK + pq + 33,
          false,
        );
      }
      if (pr === ph && ZX.myfight === 0) {
        if (!e1) {
          this.selectionmatrix(Z, pg + pM, 480 - pK + pq, px);
        } else {
          let eu = this.mmy[pP];
          let em = pg + pM;
          let eB = 480 - pK + pq;
          Z.draw_rectangle(em, 480 - pK - 3 + pq + eu, em + 212, 480 - pK, false);
          Z.draw_set_color(Zf.black);
          Z.draw_rectangle(em + 2, 480 - pK - 1 + pq + eu, em + 210, 480 - pK, false);
          this.s_siner += 2;
          Z.draw_set_color(px);
          Z.draw_rectangle(em, 480 - pK + 40 + pq + eu, em + 212, 480 - pK + 43 + pq + eu, false);
          for (let eX = 0; eX < 12; eX++) {
            let eS = this.s_siner + eX * (Math.PI * 10);
            Z.draw_set_alpha(Math.max(0, Zr(eS / 60)));
            Z.draw_line_width(em, eB - 3 + eu * 0.75, em, eB + 33, 2);
            Z.draw_line_width(em + 211, eB - 3 + eu * 0.75, em + 211, eB + 33, 2);
            if (eu < -140 && ZM(eS / 60) < 0) {
              Z.draw_set_alpha(Math.max(0, Y(0, Zr(eS / 60), (ZG(eu) - 140) / 30)));
              Z.draw_line_width(
                em - Zr(eS / 60) * 30 + 30,
                eB + eu * 0.75,
                em - Zr(eS / 60) * 30 + 30,
                eB + 33,
                2,
              );
              Z.draw_line_width(
                em + 210 + Zr(eS / 60) * 30 - 30,
                eB + eu * 0.75,
                em + 210 + Zr(eS / 60) * 30 - 30,
                eB + 33,
                2,
              );
            }
          }
          Z.draw_set_alpha(1);
        }
      }
      let e2 = this.mmy[pP];
      let e3 = new Array(Zn.exists("obj_rouxls_ch3_enemy") ? 25 : 5).fill(0);
      if (pr === ph) {
        e3[ZX.bmenucoord[0][ZX.charturn] + this.rouxlsbuttoncount_y * 5] = 1;
      }
      if (ZX.fighting === 1) {
        let eU = 0;
        for (let eH = 0; eH < 3; eH++) {
          if (ZX.monster[eH] === 1 && ZX.mercymod[eH] >= 100) {
            eU = 1;
          }
        }
        let eO = 0;
        if (pG === 3) {
          for (let ey = 0; ey < 3; ey++) {
            if (ZX.monster[ey] === 1 && ZX.monsterstatus[ey] === 1 && ZX.tension >= 40) {
              eO = 1;
            }
            if (ZX.encounterno === 31) {
              eO = 0;
            }
          }
        }
        let eL = e0 ? 0 : 5;
        if (
          this.oopsallacts === 1 &&
          (Zn.exists("obj_rouxls_ch3_enemy") || Zn.exists("obj_tenna_board4_enemy"))
        ) {
          this.rouxlsCharbox(Z, pg + pM, eL, pK, pq, e2, pr === ph, e3);
        } else {
          let eY =
            ZX.chapter >= 4 &&
            this.disablesusieralseiattack === 1 &&
            (ZX.charturn === 1 || ZX.charturn === 2);
          Z.draw_sprite("spr_btfight", eY ? 2 : e3[0], pg + pM + 15 + eL, 485 - pK + pq);
          if (pG === 1) {
            Z.draw_sprite("spr_btact", e3[1], pg + pM + 50 + eL, 485 - pK + pq);
          } else if (this.disablesusieact === 1 && pG === 2) {
            Z.draw_sprite("spr_ja_bttech_grey", e3[1], pg + pM + 50 + eL, 485 - pK + pq);
          } else {
            Z.draw_sprite("spr_bttech", e3[1], pg + pM + 50 + eL, 485 - pK + pq);
          }
          Z.draw_sprite("spr_btitem", e3[2], pg + pM + 85 + eL, 485 - pK + pq);
          Z.draw_sprite("spr_btspare", e3[3], pg + pM + 120 + eL, 485 - pK + pq);
          Z.draw_sprite("spr_btdefend", e3[4], pg + pM + 155 + eL, 485 - pK + pq);
          if (eU === 1 && pr === ph) {
            Z.draw_sprite_ext(
              "spr_btspare",
              2,
              pg + pM + 120 + eL,
              485 - pK + pq,
              1,
              1,
              0,
              Zf.white,
              0.4 + Zr(ZX.time / 6) * 0.4,
            );
          }
          if (eO === 1 && pr === ph) {
            Z.draw_sprite_ext(
              "spr_bttech",
              2,
              pg + pM + 50 + eL,
              485 - pK + pq,
              1,
              1,
              0,
              Zf.white,
              0.4 + Zr(ZX.time / 6) * 0.4,
            );
          }
        }
      }
      let e4 = pr === ph ? px : this.bcolor;
      if (ZX.charselect === ph || ZX.charselect === 3) {
        e4 = px;
      }
      let e5 = 480;
      if (ZX.fighting === 0) {
        e5 = 430;
      }
      if (ZX.fighting === 1) {
        e5 = 336;
      }
      Z.draw_set_color(e4);
      if (e0) {
        Z.draw_rectangle(pg + pM, 480 - pK - 2 + pq + e2, pg + pM + pD, 480 - pK + pq, false);
        Z.draw_set_color(Zf.black);
        Z.draw_rectangle(
          pg + pM + 2,
          480 - pK + pq + e2,
          pg + pM + pD - 2,
          480 - pK + pq + e2 + 33,
          false,
        );
      } else if (this.rouxlsgridenabled) {
        Z.draw_rectangle(
          pg + pM,
          480 - pK - 3 + pq + e2,
          pg + pM + pD,
          480 - pK - 2 + pq + e2,
          false,
        );
        if (e2 < -32) {
          Z.draw_rectangle(pg + pM, 480 - pK - 3 + pq + e2, pg + pM + 1, C + e5 + 39 + e2, false);
          Z.draw_rectangle(
            pg + pM + pD - 1,
            480 - pK - 3 + pq + e2,
            pg + pM + pD,
            C + e5 + 39 + e2,
            false,
          );
        }
        Z.draw_set_color(Zf.black);
        if (pr !== ph && e2 !== 0) {
          Z.draw_rectangle(
            pg + pM + 2,
            480 - pK - 1 + pq + e2,
            pg + pM + pD - 2,
            480 - pK + pq + 33,
            false,
          );
        } else {
          Z.draw_rectangle(
            pg + pM + 2,
            480 - pK - 1 + pq + e2,
            pg + pM + pD - 2,
            480 - pK + pq + e2 + 33,
            false,
          );
        }
      } else {
        Z.draw_rectangle(pg + pM, 480 - pK - 3 + pq + e2, pg + pM + pD, 480 - pK + pq - 2, false);
        Z.draw_set_color(Zf.black);
        Z.draw_rectangle(
          pg + pM + 2,
          480 - pK - 1 + pq + e2,
          pg + pM + pD - 2,
          480 - pK + pq + e2 + 33,
          false,
        );
      }
      let e6 = (ZX.charhero && ZX.charhero[pV]) || A[pG - 1] || "kris";
      let e7 = o[e6] || o.kris;
      let e8 =
        e7.head && ZY[e7.head]
          ? e7.head
          : e7.head === null
            ? null
            : ["spr_headkris", "spr_headsusie", "spr_headralsei"][pG - 1];
      let e9 =
        e7.namesprite && ZY[e7.namesprite]
          ? e7.namesprite
          : e7.namesprite === null
            ? null
            : ["spr_bnamekris", "spr_bnamesusie", "spr_bnameralsei"][pG - 1];
      let eZ = {
        spr_bhero_head_a: [1, 41, 2],
        spr_bhero_head_b: [3, 43, 2],
        spr_bhero_head_c: [2, 43, 2],
        spr_bhero_head_d: [0, 36, 1.6],
      };
      let eC = null;
      if (pP === 0 && ZX.chapter === 2) {
        Zn.with("o_boxingcontroller", (ej) => {
          eC = eZ[ej.headsprite] || null;
        });
      }
      if (eC) {
        Z.draw_sprite_ext(
          "spr_headthrash",
          eC[0],
          pg + eC[1] + pM,
          C + 8 + e5 + e2,
          eC[2],
          eC[2],
          0,
          Zf.white,
          1,
        );
        if (ZY.spr_bnamethrash) {
          Z.draw_sprite("spr_bnamethrash", 0, pg + 51 + pM, C + e5 + 3 + e2);
        } else {
          Z.draw_set_font("fnt_mainbig");
          Z.draw_text(
            pg + 46 + pM,
            C + e5 + 2 + e2,
            String(ZX.charname[pV] || " ").toUpperCase(),
            Zf.white,
          );
        }
      }
      if (!eC && !e9) {
        pa(Z, String(ZX.charname[pV] || e7.name).toUpperCase(), pg + 46 + pM, C + e5 + 2 + e2, 60);
      }
      if (!eC && e8) {
        pv(Z, e8, ZX.faceaction[ph], pg + 13 + pM, C + e5 + e2);
      }
      if (!eC && e9) {
        Z.draw_sprite(e9, 0, pg + 51 + pM, C + e5 + 3 + e2);
      }
      Z.draw_sprite("spr_hpname", 0, pg + 109 + pM, C + e5 + 11 + e2);
      let ep = Zf.white;
      if (ZX.hp[pV] / ZX.maxhp[pV] <= 0.25) {
        ep = Zf.yellow;
      }
      if (ZX.hp[pV] <= 0) {
        ep = Zf.red;
      }
      Z.draw_set_halign("right");
      Z.draw_spritefont(
        "spr_numbersfontsmall",
        "0123456789-+",
        String(ZX.hp[pV]),
        pg + 160 + pM,
        C + e5 - 2 + e2,
        1,
        1,
        ep,
        1,
        2,
      );
      Z.draw_sprite("spr_hpslash", 0, pg + 159 + pM, C + e5 - 4 + e2);
      Z.draw_spritefont(
        "spr_numbersfontsmall",
        "0123456789-+",
        String(ZX.maxhp[pV]),
        pg + 205 + pM,
        C + e5 - 2 + e2,
        1,
        1,
        ep,
        1,
        2,
      );
      Z.draw_set_halign("left");
      Z.draw_set_color(Zf.maroon);
      Z.draw_rectangle(pg + 128 + pM, C + e5 + 11 + e2, pg + 203 + pM, C + e5 + 19 + e2, false);
      if (ZX.hp[pV] > 0 && ZX.maxhp[pV] > 0) {
        Z.draw_set_color(px);
        Z.draw_rectangle(
          pg + 128 + pM,
          C + e5 + 11 + e2,
          pg + pM + 128 + ZP((ZX.hp[pV] / ZX.maxhp[pV]) * 75),
          C + e5 + 19 + e2,
          false,
        );
      }
    }
  }
  rouxlsCharbox(Z, C, pd, pE, pg, pq, pK, pP) {
    let pV = Zn.first("obj_rouxls_ch3_enemy");
    let pG = Zn.first("obj_tenna_board4_enemy");
    let px = 485 - pE + pg;
    let pr = (e3) => C + 15 + e3 * 35 + pd;
    let pM = "spr_btrouxls";
    let ph = "spr_btspade";
    let pR = "spr_btheart";
    let pD = "spr_btact";
    if (this.dogcon === 1) {
      ph = "spr_btdog";
    }
    if (this.dogcon === 2) {
      ph = "spr_btdog";
      pR = "spr_btdog";
      pD = "spr_btdog";
    }
    if (this.rouxlserrorcon === 1 && this.dogcon < 1) {
      this.rouxlstelegraphtimer++;
      if (this.rouxlstelegraphtimer >= 1 && this.rouxlstelegraphtimer <= 4) {
        pM = "spr_btrouxls_select1";
      }
      if (this.rouxlstelegraphtimer >= 5 && this.rouxlstelegraphtimer <= 8) {
        pM = "spr_btrouxls_select2";
      }
      if (this.rouxlstelegraphtimer === 8) {
        this.rouxlstelegraphtimer = 0;
      }
    }
    if (this.rouxlstelegraphcon === 1 && this.dogcon < 1) {
      if (this.rouxlstelegraphtimer === 0) {
        Zj("snd_bombfall");
      }
      this.rouxlstelegraphtimer++;
      if (this.rouxlstelegraphtimer >= 1 && this.rouxlstelegraphtimer <= 4) {
        pM = "spr_btexclamation1";
      }
      if (this.rouxlstelegraphtimer >= 5 && this.rouxlstelegraphtimer <= 8) {
        pM = "spr_btexclamation2";
      }
      if (this.rouxlstelegraphtimer === 8) {
        this.rouxlstelegraphtimer = 0;
      }
    }
    if (this.spadetelegraphcon === 1 && this.dogcon < 1) {
      this.spadetelegraphtimer++;
      if (this.spadetelegraphtimer >= 1 && this.spadetelegraphtimer <= 4) {
        ph = "spr_btexclamation1_spade";
      }
      if (this.spadetelegraphtimer >= 5 && this.spadetelegraphtimer <= 8) {
        ph = "spr_btexclamation2";
      }
      if (this.spadetelegraphtimer === 8) {
        this.spadetelegraphtimer = 0;
      }
    }
    if (this.spadesuccesscon === 1 && this.heartsuccesscon === 0) {
      this.spadetelegraphtimer++;
      let e3 = this.spadetelegraphtimer >= 5 ? 2 : 1;
      if (this.spadetelegraphtimer >= 1 && this.spadetelegraphtimer <= 8) {
        if (this.spadefail) {
          pD = e3 === 1 ? "spr_btact_fail1" : "spr_btact_fail2";
        } else {
          ph = e3 === 1 ? "spr_btspade_success" : "spr_btspade_success2";
          if (this.dogcon === 1 || this.dogcon === 2) {
            ph = e3 === 1 ? "spr_btdog_success" : "spr_btdog_success2";
            pD = ph;
          }
        }
      }
      if (this.spadetelegraphtimer === 8) {
        this.spadetelegraphtimer = 0;
      }
    }
    if (this.heartsuccesscon === 1) {
      this.heartsuccesstimer++;
      if (this.heartsuccesstimer >= 1 && this.heartsuccesstimer <= 4) {
        pR = "spr_btheart_success1";
      }
      if (this.heartsuccesstimer >= 5 && this.heartsuccesstimer <= 8) {
        pR = "spr_btheart_success2";
      }
      if (this.heartsuccesstimer === 8) {
        this.heartsuccesstimer = 0;
      }
    }
    let e0 = (e4, e5, e6) => {
      e4.introtimer = (e4.introtimer || 0) + 1;
      if (e4.introtimer === 1) {
        Zj("snd_petrify");
      }
      let e7;
      if (e4.introtimer < 30) {
        Z.draw_sprite("spr_btfight", 0, pr(0), px);
        Z.draw_sprite("spr_btact", 0, pr(1), px);
        Z.draw_sprite("spr_bttech", 0, pr(2), px);
        Z.draw_sprite("spr_btitem", 0, pr(3), px);
        Z.draw_sprite("spr_btspare", 0, pr(4), px);
        e7 = Y(0, 1.2, e4.introtimer / 29);
      } else {
        for (let e8 = 0; e8 < 5; e8++) {
          Z.draw_sprite("spr_btact", 0, pr(e8), px);
        }
        e7 = Y(1, 0, (e4.introtimer - 30) / 30);
        if (e6) {
          ZX.bmenucoord[0][0] = 2;
          ZX.bmenucoord[0][1] = 2;
          ZX.bmenucoord[0][2] = 2;
        }
      }
      for (let e9 = 0; e9 < 5; e9++) {
        Z.draw_sprite_ext("spr_btact_rouxls_white", 0, pr(e9), px, 1, 1, 0, Zf.white, e7);
      }
      if (e5 && e4.introtimer === 60) {
        e4.intro = 3;
      }
    };
    if (pV && pV.intro === 2) {
      e0(pV, true, false);
      return;
    }
    if (pG && pG.intro === 1) {
      e0(pG, false, true);
      return;
    }
    let e1 = 0;
    let e2 = 1;
    if (this.rouxlsgridenabled) {
      e2 = 5;
    }
    if (pK) {
      for (let e4 = 0; e4 < e2; e4++) {
        let e5 = Y(140, 0, ZG(pq / 170));
        let e6 = e1 * 32 + pq * 0.75 + e5;
        if (e2 === 1) {
          e6 += 32;
        }
        if (e6 > 0) {
          e6 = 0;
        }
        let e7 = pD;
        if (e1 !== 4 && this.rouxlsgridenabled) {
          e7 = "spr_btact_ex";
        }
        for (let e8 = 0; e8 < 5; e8++) {
          let e9 = e8 + 1 + e1 * 5;
          let eZ = pP[e8 + e1 * 5] || 0;
          let eC = e7;
          if (this.rouxlsbuttoncount === e9 || this.rouxlsbuttoncount2 === e9) {
            eC = pM;
          } else if (this.spadebuttoncount === e9) {
            eC = ph;
          } else if (this.heartbuttoncount === e9) {
            eC = pR;
          }
          Z.draw_sprite(eC, eZ, pr(e8), px + e6);
        }
        e1++;
      }
    }
  }
  selectionmatrix(Z, C, pd, pE, pg = 210) {
    this.s_siner += 2;
    Z.draw_set_color(pE);
    Z.draw_rectangle(C, pd, C + pg, pd + 3, false);
    for (let pq = 0; pq < 12; pq++) {
      let pK = this.s_siner + pq * (Math.PI * 10);
      Z.draw_set_alpha(Math.max(0, Zr(pK / 60)));
      Z.draw_line_width(C, pd, C, pd + 33, 2);
      Z.draw_line_width(C + pg, pd, C + pg, pd + 33, 2);
      if (ZM(pK / 60) < 0) {
        Z.draw_line_width(C - Zr(pK / 60) * 30 + 30, pd, C - Zr(pK / 60) * 30 + 30, pd + 33, 2);
        Z.draw_line_width(
          C + pg + Zr(pK / 60) * 30 - 30,
          pd,
          C + pg + Zr(pK / 60) * 30 - 30,
          pd + 33,
          2,
        );
      }
    }
    Z.draw_set_alpha(1);
  }
  groupBox(Z, C, pd, pE, pg) {
    let pq = this.bp;
    let pK = ZX.chapter === 1;
    let { x: pP, w: pV } = pg;
    let pG = pg.group.map((eZ) => ZX.char[l(eZ)]).filter(Boolean);
    if (!pG.length) {
      return;
    }
    let px = pG[0];
    let pr = ZS(px);
    let pM = n(px);
    let ph = d(px) || (c(px) === "noelle" ? Zf.yellow : this.hpcolor[pr - 1]) || Zf.white;
    Z.draw_set_color(this.bcolor);
    if (pK) {
      Z.draw_rectangle(pP, 480 - pq - 2 + pd, pP + pV, 480 - pq + pd, false);
      Z.draw_set_color(Zf.black);
      Z.draw_rectangle(pP + 2, 480 - pq + pd, pP + pV - 2, 480 - pq + pd + 33, false);
    } else {
      Z.draw_rectangle(pP, 480 - pq - 3 + pd, pP + pV, 480 - pq + pd - 2, false);
      Z.draw_set_color(Zf.black);
      Z.draw_rectangle(pP + 2, 480 - pq - 1 + pd, pP + pV - 2, 480 - pq + pd + 33, false);
    }
    let pR = C + pE;
    let pD = pP + pV - 6;
    let e0 =
      pM.head && ZY[pM.head]
        ? pM.head
        : pM.head === null
          ? null
          : ["spr_headkris", "spr_headsusie", "spr_headralsei"][pr - 1];
    let e1 =
      String(pM.name || ZX.charname[px]).toUpperCase() + (pG.length > 1 ? " X" + pG.length : "");
    let e2 = !!e0 && pV - 48 >= Ci(e1).narrow;
    let e3 = e2 ? pP + 42 : pP + 6;
    if (e2) {
      pv(Z, e0, 0, pP + 5, pR);
    }
    let e4 = 0;
    let e5 = 0;
    let e6 = 0;
    for (let eZ of pG) {
      e4 += Math.max(0, ZX.hp[eZ]);
      e5 += ZX.maxhp[eZ];
      if (ZX.hp[eZ] > 0) {
        e6++;
      }
    }
    let e7 = CO(e1, pD - e3);
    if (e7) {
      if (ZY[e7].w <= pD - e3) {
        Z.draw_sprite(e7, 0, e3, pR - 5);
      } else {
        Z.draw_sprite_part(e7, 0, 0, 0, pD - e3, 15, e3, pR - 5);
      }
    }
    let e8 = e3;
    let e9 = pD - 1;
    Z.draw_set_color(Zf.maroon);
    Z.draw_rectangle(e8, pR + 11, e9, pR + 19, false);
    if (e4 > 0 && e5 > 0) {
      Z.draw_set_color(e6 < pG.length ? ZQ(ph, Zf.yellow, 0.3) : ph);
      Z.draw_rectangle(e8, pR + 11, e8 + ZP((e4 / e5) * (e9 - e8)), pR + 19, false);
    }
  }
  charboxCompact(Z, C, pd, pE) {
    let pg = this.bp;
    let pq = ZX.chapter === 1;
    let pK = ZX.charturn;
    let pP = 480;
    if (ZX.fighting === 0) {
      pP = 430;
    }
    if (ZX.fighting === 1) {
      pP = 336;
    }
    this.boxLay = pE;
    if (pE.crowd) {
      let pV =
        (pE.turn >= 0
          ? "TURN " + (pE.turn + 1) + " OF " + pE.total + "  C ALL FIGHT"
          : "PARTY OF " + pE.total) +
        (pE.pages > 1 ? "  PAGE " + (pE.page + 1) + " OF " + pE.pages : "");
      let pG = CO(pV, 400);
      if (pG) {
        Z.draw_sprite(pG, 0, 636 - ZY[pG].w, 480 - this.bp + pd - 54);
      }
    }
    for (let px = 0; px < pE.length; px++) {
      if (pE[px].group) {
        this.groupBox(Z, C, pd, pP, pE[px]);
        continue;
      }
      let pr = pE[px].slot;
      if (this.havechar[pr] !== 1) {
        continue;
      }
      let pM = l(pr);
      let ph = ZX.char[pM];
      let pR = ZS(ph);
      let pD = d(ph) || (c(ph) === "noelle" ? Zf.yellow : this.hpcolor[pR - 1]) || Zf.white;
      let { x: e0, w: e1 } = pE[px];
      let e2 = pK === pr && ZX.myfight === 0;
      if (pK === pr) {
        if (this.mmy[pr] > -32) {
          this.mmy[pr] -= 2;
        }
        if (this.mmy[pr] > -24) {
          this.mmy[pr] -= 4;
        }
        if (this.mmy[pr] > -16) {
          this.mmy[pr] -= 6;
        }
        if (this.mmy[pr] > -8) {
          this.mmy[pr] -= 8;
        }
        if (this.mmy[pr] < -32) {
          this.mmy[pr] = -64;
        }
      } else if (this.mmy[pr] < -14) {
        this.mmy[pr] += 15;
      } else {
        this.mmy[pr] = 0;
      }
      let e3 = this.mmy[pr];
      if (e2) {
        this.selectionmatrix(Z, e0, 480 - pg + pd, pD, e1 - 2);
      }
      if (ZX.fighting === 1 && pK === pr) {
        let eS = [0, 0, 0, 0, 0];
        eS[ZX.bmenucoord[0][pK]] = 1;
        let eU = 0;
        for (let eH = 0; eH < 3; eH++) {
          if (ZX.monster[eH] === 1 && ZX.mercymod[eH] >= 100) {
            eU = 1;
          }
        }
        let eO = e0 + Math.max(4, Math.floor((e1 - 171) / 2));
        let eL = 485 - pg + pd;
        if (
          this.oopsallacts === 1 &&
          (Zn.exists("obj_rouxls_ch3_enemy") || Zn.exists("obj_tenna_board4_enemy"))
        ) {
          let ey = new Array(25).fill(0);
          ey[ZX.bmenucoord[0][pK] + this.rouxlsbuttoncount_y * 5] = 1;
          this.rouxlsCharbox(Z, eO - 20, 5, pg, pd, e3, true, ey);
          this.boxBtnX = eO;
        } else {
          Z.draw_sprite("spr_btfight", eS[0], eO, eL);
          Z.draw_sprite(pR === 1 ? "spr_btact" : "spr_bttech", eS[1], eO + 35, eL);
          Z.draw_sprite("spr_btitem", eS[2], eO + 70, eL);
          Z.draw_sprite("spr_btspare", eS[3], eO + 105, eL);
          Z.draw_sprite("spr_btdefend", eS[4], eO + 140, eL);
          if (eU === 1) {
            Z.draw_sprite_ext(
              "spr_btspare",
              2,
              eO + 105,
              eL,
              1,
              1,
              0,
              Zf.white,
              0.4 + Zr(ZX.time / 6) * 0.4,
            );
          }
          this.boxBtnX = eO;
        }
      }
      Z.draw_set_color(pK === pr ? pD : this.bcolor);
      if (pq) {
        Z.draw_rectangle(e0, 480 - pg - 2 + pd + e3, e0 + e1, 480 - pg + pd, false);
        Z.draw_set_color(Zf.black);
        Z.draw_rectangle(e0 + 2, 480 - pg + pd + e3, e0 + e1 - 2, 480 - pg + pd + e3 + 33, false);
      } else {
        Z.draw_rectangle(e0, 480 - pg - 3 + pd + e3, e0 + e1, 480 - pg + pd - 2, false);
        Z.draw_set_color(Zf.black);
        Z.draw_rectangle(
          e0 + 2,
          480 - pg - 1 + pd + e3,
          e0 + e1 - 2,
          480 - pg + pd + e3 + 33,
          false,
        );
      }
      let e4 = n(ph);
      let e5 = C + pP + e3;
      let e6 =
        e4.head && ZY[e4.head]
          ? e4.head
          : e4.head === null
            ? null
            : ["spr_headkris", "spr_headsusie", "spr_headralsei"][pR - 1];
      let e7 = !!e6 && e1 >= 130;
      let e8 = e7 ? e0 + 42 : e0 + 6;
      let e9 = e0 + e1 - 6;
      if (e7) {
        pv(Z, e6, ZX.faceaction[pM], e0 + 5, e5);
      }
      let eZ = String(ZX.charname[ph] || e4.name).toUpperCase();
      let eC = String(ZX.hp[ph]).length * 8;
      let ep = e9 - e8 >= Ci(eZ).narrow + 8 + 48 + eC;
      let eu = ep ? 48 + eC : eC;
      let em = Zf.white;
      if (ZX.hp[ph] / ZX.maxhp[ph] <= 0.25) {
        em = Zf.yellow;
      }
      if (ZX.hp[ph] <= 0) {
        em = Zf.red;
      }
      Z.draw_set_halign("right");
      if (ep) {
        Z.draw_spritefont(
          "spr_numbersfontsmall",
          "0123456789-+",
          String(ZX.hp[ph]),
          e9 - 46,
          e5 - 2,
          1,
          1,
          em,
          1,
          2,
        );
        Z.draw_sprite("spr_hpslash", 0, e9 - 47, e5 - 4);
        Z.draw_spritefont(
          "spr_numbersfontsmall",
          "0123456789-+",
          String(ZX.maxhp[ph]),
          e9 + 1,
          e5 - 2,
          1,
          1,
          em,
          1,
          2,
        );
      } else {
        Z.draw_spritefont(
          "spr_numbersfontsmall",
          "0123456789-+",
          String(ZX.hp[ph]),
          e9,
          e5 - 2,
          1,
          1,
          em,
          1,
          2,
        );
      }
      Z.draw_set_halign("left");
      {
        let eY = String(ZX.charname[ph] || e4.name).toUpperCase();
        let ej = Math.max(16, e9 - e8 - eu - 8);
        let eb = CO(eY, ej);
        if (eb) {
          let eI = ZY[eb].w;
          Z.draw_sprite_ext(eb, 0, e8, e5 - 5, eI > ej ? ej / eI : 1, 1, 0, Zf.white, 1);
        } else {
          Z.draw_set_font("fnt_main");
          Z.draw_text(e8, e5 - 5, eY, Zf.white);
          Z.draw_set_font("fnt_mainbig");
        }
      }
      let eB = e8;
      let eX = e9 - 1;
      Z.draw_set_color(Zf.maroon);
      Z.draw_rectangle(eB, e5 + 11, eX, e5 + 19, false);
      if (ZX.hp[ph] > 0 && ZX.maxhp[ph] > 0) {
        Z.draw_set_color(pD);
        Z.draw_rectangle(
          eB,
          e5 + 11,
          eB + ZP((ZX.hp[ph] / ZX.maxhp[ph]) * (eX - eB)),
          e5 + 19,
          false,
        );
      }
    }
  }
};
Zh(pc, "obj_battlecontroller");
ZR(pc, "kinds", Zk("obj_battlecontroller", ZT));
ZR(pc, "defaultDepth", 5);
ZR(pc, "screenSpace", true);
var pn = pc;
w({
  healFx: pT,
  obj_dmgwriter: CH,
});
ZD(p6, "G.mnfight = 1;");
ZD(pn, "G.myfight = 0;G.mnfight = 0;G.myfight = 7;G.mnfight = 2;");
export {
  Cu as a,
  Ci as b,
  CO as c,
  CH as d,
  CY as e,
  Cb as f,
  Cf as g,
  CF as h,
  CW as i,
  Cl as j,
  Co as k,
  Ca as l,
  Cw as m,
  Cd as n,
  Cg as o,
  CK as p,
  CV as q,
  Cr as r,
  Cs as s,
  p3 as t,
  p4 as u,
  p6 as v,
  p8 as w,
  pZ as x,
  pp as y,
  pm as z,
  pB as A,
  pi as B,
  pU as C,
  pO as D,
  pL as E,
  pH as F,
  py as G,
  pY as H,
  pj as I,
  pb as J,
  pI as K,
  pt as L,
  pF as M,
  pW as N,
  pz as O,
  pJ as P,
  pA as Q,
  pn as R,
};
