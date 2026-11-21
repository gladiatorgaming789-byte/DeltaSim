(function (V, y) {
  function hK(hQ, hA, i0) {
    return J4(hQ - 215, hA);
  }
  function hz(hQ, hA, i0) {
    return J4(hA - 20, i0);
  }
  const hH = V();
  function hX(hQ, hA, i0) {
    return J4(hA - -742, i0);
  }
  while (true) {
    try {
      const hQ =
        -parseInt(hX(1548, 833, "QUo7")) / 1 +
        parseInt(hK(2392, "4)a3", 2460)) / 2 +
        (-parseInt(hX(-793, 19, "v$$v")) / 3) * (parseInt(hz(-45, 602, "Ini@")) / 4) +
        -parseInt(hX(1023, 352, "&Uh1")) / 5 +
        -parseInt(hX(1342, 641, "RBn7")) / 6 +
        (-parseInt(hK(1724, "7D5s", 1301)) / 7) * (-parseInt(hK(693, "RBn7", 615)) / 8) +
        parseInt(hz(750, 1195, "&Uh1")) / 9;
      if (hQ === y) {
        break;
      } else {
        hH.push(hH.shift());
      }
    } catch (hA) {
      hH.push(hH.shift());
    }
  }
})(ld, 992735);
const l = (function () {
  const V = {
    [hz(1370, "judH", 2142)]: function (hQ, hA) {
      return hQ === hA;
    },
  };
  V[hz(433, "]F)!", 194)] = hH("7D5s", 1198, 628);
  V[hz(92, "kYZ$", 174)] = hH("Ini@", 1028, 846);
  V[hz(1884, "qBjg", 2852)] = hz(1844, "qDWf", 2587);
  function y(hQ, hA, i0) {
    return J4(i0 - -392, hQ);
  }
  const hK = V;
  function hz(hQ, hA, i0) {
    return J4(hQ - -289, hA);
  }
  function hH(hQ, hA, i0) {
    return J4(i0 - -487, hQ);
  }
  let hX = true;
  return function (hQ, hA) {
    const i0 = {
      cUoAV: function (i5, i6) {
        function i7(i8, i9, iV) {
          return J4(i8 - 404, iV);
        }
        return hK[i7(621, 313, "rHmw")](i5, i6);
      },
      rtAPt: hK[i2(1384, "eqC*", 1162)],
      hiUqO: hK[i3(-794, -949, "yX#m")],
      UiVDd: hK[i4("7OMN", 1850, 1766)],
    };
    const i1 = hX
      ? function () {
          function i5(i8, i9, iV) {
            return i4(iV, i9 - -1452, iV - 252);
          }
          function i6(i8, i9, iV) {
            return i4(iV, i8 - 240, iV - 91);
          }
          function i7(i8, i9, iV) {
            return i4(iV, i8 - -492, iV - 352);
          }
          if (i0[i6(1765, 2148, "G*Jl")](i0[i6(1791, 821, "ckex")], i0[i7(1194, 1506, "v$$v")])) {
            let i8 = Y.charturn;
            let i9 = I.bmenuno;
            let iV = Z.bmenucoord;
            let iy = (iP) => (iV && iV[iP] ? iV[iP][i8] | 0 : 0);
            if (i9 === 0) {
              let iP = iy(0);
              let ia = z[X.cmd];
              if (iP !== ia) {
                return {
                  [(ia - iP + 5) % 5 <= 2 ? "right" : "left"]: true,
                };
              } else {
                return {
                  b1: true,
                };
              }
            }
            let iJ =
              D.cmd === "fight"
                ? 1
                : O.cmd === "spare"
                  ? 12
                  : x.cmd === "act"
                    ? 11
                    : r.cmd === "tech"
                      ? 13
                      : -1;
            if (i9 === 1 || i9 === 11 || i9 === 12 || i9 === 13) {
              if (i9 !== iJ) {
                return {
                  b2: true,
                };
              } else if (iy(i9) !== (b.target | 0)) {
                return {
                  down: true,
                };
              } else {
                return {
                  b1: true,
                };
              }
            }
            if (i9 === 9) {
              if (Q.cmd !== "act") {
                return {
                  b2: true,
                };
              }
              let il = iy(9);
              let ih = A.act | 0;
              if (il === ih) {
                return {
                  b1: true,
                };
              } else if (il >> 1 === ih >> 1) {
                return {
                  [il & 1 ? "left" : "right"]: true,
                };
              } else {
                return {
                  [il < ih ? "down" : "up"]: true,
                };
              }
            }
            if (i9 === 2) {
              if (V0.cmd !== "tech") {
                return {
                  b2: true,
                };
              }
              let ii = iy(2);
              let ig = V1.slot | 0;
              if (ii === ig) {
                return {
                  b1: true,
                };
              } else if (ii >> 1 === ig >> 1) {
                return {
                  right: true,
                };
              } else {
                return {
                  [ii < ig ? "down" : "up"]: true,
                };
              }
            }
            return {
              b2: true,
            };
          } else if (hA) {
            if (i0[i6(2398, 2202, "kQVQ")](i0[i6(2811, 1874, "]F)!")], i0[i5(189, 663, "G*Jl")])) {
              const iS = hA[i6(1378, 977, "zb85")](hQ, arguments);
              hA = null;
              return iS;
            } else {
              let it = E.reduce((ik, iF) => ik + Z.ceil(iF.len / 22) + 2, 0);
              for (let ik = 0; ik <= 84; ik += 12) {
                let iF = r.max(b, ik + it + 12);
                let iN = w("", iF);
                let iW = ik;
                for (let iT of z) {
                  iN[iW] = iT.dir;
                  iW += X.ceil(iT.len / 22) + 2;
                }
                K.push(iN);
              }
            }
          }
        }
      : function () {};
    hX = false;
    function i2(i5, i6, i7) {
      return hz(i7 - 847, i6, i7 - 247);
    }
    function i3(i5, i6, i7) {
      return hz(i5 - -680, i7, i7 - 239);
    }
    function i4(i5, i6, i7) {
      return hz(i6 - 785, i5, i7 - 496);
    }
    return i1;
  };
})();
const i = l(this, function () {
  const V = {
    kBCpn: function (iy, iJ) {
      return iy === iJ;
    },
    ZyXtO: iV("(gRZ", 644, 1405),
    GSYgR: iV("(gRZ", 1364, 2320),
    QKmRI: function (iy, iJ) {
      return iy != iJ;
    },
    QJDjI: function (iy, iJ) {
      return iy !== iJ;
    },
    UvZlQ: i9("qBjg", -413, 541),
    mVXOk: iV("qDWf", 1911, 1801),
    iEvyE: function (iy, iJ) {
      return iy < iJ;
    },
    jgQsA: function (iy, iJ) {
      return iy < iJ;
    },
    aaWom: function (iy, iJ) {
      return iy == iJ;
    },
    eHzTc: function (iy, iJ) {
      return iy != iJ;
    },
    APviv: function (iy, iJ) {
      return iy + iJ;
    },
    CdPVD: hH(-732, "CjRN", -178),
    UDQhd: hH(1135, "o8LY", 1336),
    keFaC: function (iy, iJ) {
      return iy | iJ;
    },
    mjfTl: hH(162, "L47D", -474),
    Dmjgg: hH(-533, "7OMN", -163),
    FHgXs: function (iy, iJ) {
      return iy === iJ;
    },
    gJYrC: function (iy, iJ) {
      return iy(iJ);
    },
    GbZAl: i9("yX#m", 794, 537),
    mLgBM: function (iy, iJ, iP, ia) {
      return iy(iJ, iP, ia);
    },
    guZHo: hH(1070, "r!4a", 1564),
    MVMyn: i9("iC20", -140, 689),
    QTLdU: function (iy, iJ) {
      return iy !== iJ;
    },
    TLJsF: hH(-26, "&Uh1", -760),
    rpzur: function (iy, iJ, iP, ia) {
      return iy(iJ, iP, ia);
    },
    CLFki: hH(-180, "oX^J", 520) + hH(929, "eqC*", 1307) + iV("ckex", 2351, 1414),
    IYsJY:
      i9("ZI9W", -473, 366) + iV("25jp", 773, 1644) + hH(893, "qDWf", 293) + i9("25jp", 833, 826),
    NLzUc: i9("25jp", 688, 134),
    TSLMS: function (iy, iJ) {
      return iy === iJ;
    },
    rqYOq: function (iy, iJ) {
      return iy | iJ;
    },
    duHAT: function (iy, iJ) {
      return iy - iJ;
    },
    RUzBH: function (iy, iJ) {
      return iy !== iJ;
    },
    sYvZL: function (iy, iJ) {
      return iy < iJ;
    },
    jHecp: function (iy, iJ) {
      return iy === iJ;
    },
    nVZpv: function (iy, iJ) {
      return iy % iJ;
    },
    teegH: function (iy, iJ) {
      return iy > iJ;
    },
    kuoOk: function (iy, iJ) {
      return iy / iJ;
    },
    AMCOd: function (iy, iJ) {
      return iy >= iJ;
    },
    yYcWN: function (iy, iJ) {
      return iy > iJ;
    },
    dEFKN: function (iy, iJ) {
      return iy > iJ;
    },
    XzpGD: function (iy, iJ) {
      return iy(iJ);
    },
    ONlOj: function (iy, iJ) {
      return iy - iJ;
    },
    wWHhl: function (iy, iJ) {
      return iy > iJ;
    },
    oolCu: function (iy, iJ) {
      return iy - iJ;
    },
    lnZQy: function (iy, iJ) {
      return iy - iJ;
    },
    ibErh: function (iy, iJ) {
      return iy >= iJ;
    },
    qYuWC: function (iy, iJ) {
      return iy <= iJ;
    },
    TfQAj: function (iy, iJ) {
      return iy + iJ;
    },
    FakuO: function (iy, iJ) {
      return iy + iJ;
    },
    ScaVu: function (iy, iJ) {
      return iy + iJ;
    },
    pMtfU: function (iy, iJ) {
      return iy + iJ;
    },
    PEQNh: function (iy, iJ) {
      return iy + iJ;
    },
    MSnHH: function (iy, iJ) {
      return iy + iJ;
    },
    bctAQ: function (iy, iJ) {
      return iy + iJ;
    },
    hjspE: hH(-601, "#$OJ", -987),
    MXzcb: hH(-54, "ZI9W", -25),
    pvfrT: function (iy, iJ) {
      return iy + iJ;
    },
    Xdsjh: i9("[dV(", 2220, 1397),
    TZQfy: function (iy, iJ) {
      return iy + iJ;
    },
    wwMBX: i9("G*Jl", 0, 244),
    vVfvy: function (iy) {
      return iy();
    },
    LELgq: function (iy, iJ) {
      return iy(iJ);
    },
    GVXcs: function (iy, iJ) {
      return iy !== iJ;
    },
    cdFtv: iV("P$Em", 1489, 1236),
    JmjuN: i9("1x)n", 1240, 1363),
    oVNRb: function (iy, iJ) {
      return iy === iJ;
    },
    gwezh: hH(583, "7D5s", 247),
    IByaR: function (iy, iJ) {
      return iy === iJ;
    },
    TqAbO: iV("]^fO", 3052, 2648),
    XQaZx: iV("QUo7", 640, 809),
    jZkcK: iV("0aTl", 909, 1814),
    cCOBQ: iV("7OMN", 2917, 2565),
    olKqX: i9("ZI9W", 1611, 932),
    LtRVR: i9("$a3e", 1620, 1489),
    aDrSh: i9("Nlyg", 1018, 566),
    RsZvX: function (iy, iJ) {
      return iy < iJ;
    },
    JxBdZ: function (iy) {
      return iy();
    },
    lmnNI: function (iy, iJ) {
      return iy % iJ;
    },
    wxcEW: function (iy, iJ) {
      return iy | iJ;
    },
    eKERu: function (iy, iJ) {
      return iy(iJ);
    },
    xRLfY:
      i9("tR8B", 2262, 1701) +
      i9("&EKZ", 1759, 1564) +
      hH(720, "0aTl", -222) +
      hH(-459, "P$Em", -1128) +
      i9("judH", 470, 1071) +
      i9("ckex", 1260, 1007) +
      i9("L47D", 1450, 748) +
      iV("ZI9W", 1437, 851) +
      i9("wZ&$", 676, 787) +
      iV("CjRN", 2030, 1479) +
      iV("QUo7", 3167, 2485) +
      iV("RBn7", 1107, 1390) +
      iV("(gRZ", 1595, 1674) +
      hH(1193, "eqC*", 667) +
      hH(-773, "7OMN", -244) +
      hH(1084, "wZ&$", 530) +
      hH(-741, "iC20", -1719) +
      hH(255, "[dV(", 701) +
      hH(-62, "ZI9W", -930) +
      i9("1x)n", 2004, 1324),
    FkdXU:
      hH(-400, "o8LY", -1317) +
      iV("ckex", 1944, 2555) +
      hH(-66, "R5(U", -330) +
      i9("r!4a", 1083, 1453) +
      i9("eqC*", 1831, 1209) +
      iV("(gRZ", 933, 1303) +
      hH(234, "oX^J", -269) +
      hH(-177, "kQVQ", -902) +
      iV("Nlyg", 370, 1342) +
      iV("6e)s", 2375, 1695) +
      hH(-342, "[dV(", 124) +
      iV("R5(U", 1685, 1220) +
      iV("7OMN", 567, 853) +
      i9("qDWf", 657, 13) +
      hH(1162, "wZ&$", 1397) +
      i9("eqC*", 226, 31) +
      hH(799, "G*Jl", 1794) +
      hH(-358, "i$6c", -140) +
      iV("i$6c", 703, 889) +
      i9("v$$v", -381, 340) +
      hH(-32, "i$6c", -252) +
      iV("#$OJ", 134, 1114) +
      hH(964, "6e)s", 338) +
      i9("o8LY", 553, 313) +
      iV("ckex", 2092, 2365) +
      i9("ckex", 739, 1288) +
      hH(-487, "RBn7", -890) +
      iV("Nlyg", 712, 959) +
      hH(-498, "kYZ$", -331),
    sAaLn: function (iy, iJ) {
      return iy === iJ;
    },
    pDZJn: iV("*lE%", 1320, 1797),
    QoSil: hH(132, "kQVQ", 508),
    LRAjF: iV("0aTl", 2285, 2191),
    myfUQ: i9("eqC*", 2459, 1461),
    DxCud: i9("QUo7", 2122, 1618),
    ELtau: function (iy, iJ, iP, ia) {
      return iy(iJ, iP, ia);
    },
    joBBw: function (iy, iJ) {
      return iy === iJ;
    },
    iuyHz: i9("6e)s", 1648, 1777),
    qVJxh: i9("R5(U", 539, 341),
    ENUGL: function (iy, iJ, iP, ia) {
      return iy(iJ, iP, ia);
    },
    Ebidy: function (iy, iJ) {
      return iy === iJ;
    },
    oSAYb: hH(546, "*lE%", -130),
    rsdIR: hH(752, "G*Jl", 492),
    VwhQX: function (iy, iJ, iP, ia) {
      return iy(iJ, iP, ia);
    },
    KnHeh: hH(489, "oX^J", 1451),
    LYFWf: function (iy, iJ) {
      return iy || iJ;
    },
    fodoh: iV("qDWf", 1833, 1345),
    xHZPX: i9("CjRN", 994, 510),
    GniZQ: function (iy, iJ) {
      return iy < iJ;
    },
    drNDB: function (iy, iJ) {
      return iy === iJ;
    },
    OyovU: function (iy, iJ) {
      return iy !== iJ;
    },
    VVLFi: function (iy, iJ) {
      return iy === iJ;
    },
    QnqmT: i9("&Uh1", 1066, 345),
    XnbTb: hH(-173, "zb85", 825),
    ZIyiI: hH(-75, "]F)!", -208),
  };
  const y = V[hH(-651, "v$$v", -257)](typeof window, V[i9("]^fO", 926, 1707)])
    ? window
    : V[i9("l#By", 1704, 1677)](typeof process, V[iV("G*Jl", 3118, 2627)]) &&
        V[hH(345, "gDN(", 506)](typeof require, V[hH(335, "&EKZ", 744)]) &&
        V[hH(821, "(gRZ", 836)](typeof global, V[hH(1037, "iC20", 1364)])
      ? global
      : this;
  const hK = new RegExp(V[iV("*lE%", 477, 1135)], "g");
  const hz = V[hH(584, "0aTl", 1391)][i9("v$$v", -398, 455)](hK, "")[i9("6e)s", 216, 904)](";");
  function hH(iy, iJ, iP) {
    return J4(iy - -979, iJ);
  }
  let hX;
  let hQ;
  let hA;
  let i0;
  const i1 = function (iy, iJ, iP) {
    function ia(ii, ig, iS) {
      return iV(ig, ig - 489, iS - -590);
    }
    function il(ii, ig, iS) {
      return iV(iS, ig - 15, ii - -687);
    }
    function ih(ii, ig, iS) {
      return iV(iS, ig - 320, ii - -929);
    }
    if (V[il(1992, 1522, "1x)n")](V[il(1312, 458, "eqC*")], V[il(335, -327, "0aTl")])) {
      let ii = hK.first("obj_purplecontrols");
      if (ii) {
        return hz.all("obj_pinknode").indexOf(ii.node_id);
      } else {
        return -1;
      }
    } else {
      if (V[ia(2144, "o8LY", 1672)](iy[il(1647, 1966, "]F)!")], iJ)) {
        if (V[ih(648, 785, "zb85")](V[il(466, 205, "Ini@")], V[il(181, 421, "]^fO")])) {
          return false;
        } else {
          if (!hQ() || hA.__ch5NoGoal) {
            return null;
          }
          if (i0() === 229) {
            let ig = [];
            let iS = i3();
            for (let it of i5.list) {
              if (
                !it.destroyed &&
                it.constructor.name === "obj_bullet_knife" &&
                (it.netskie === 1 || it.netskie === true) &&
                !!it.active
              ) {
                ig.push({
                  rect: [it.x - 8 - iS.r, it.y - 8 - iS.b, it.x + 8 - iS.l, it.y + 8 - iS.t],
                  w: 30,
                });
              }
            }
            if (ig.length) {
              return ig;
            } else {
              return null;
            }
          }
          return null;
        }
      }
      for (let ik = 0; V[il(1338, 2255, "r!4a")](ik, iJ); ik++) {
        for (let iF = 0; V[il(1942, 1917, "6e)s")](iF, iP[ia(2446, "RBn7", 1749)]); iF += 2) {
          if (
            V[ih(26, 891, "iC20")](ik, iP[iF]) &&
            V[ia(951, "4)a3", 1520)](
              iy[ih(-102, 879, "wZ&$")](ik),
              iP[V[il(708, 500, "]^fO")](iF, 1)],
            )
          ) {
            if (V[il(1070, 274, "rHmw")](V[ih(1083, 1285, "zb85")], V[ih(587, 1184, "i$6c")])) {
              return false;
            } else {
              let iN = hX.actname[hQ][hA];
              let iW = iN && i0("obj_aqua_enemy", iN);
              if (iW) {
                return iW;
              }
            }
          }
        }
      }
      return true;
    }
  };
  const i2 = function (iy, iJ, iP) {
    function ia(ig, iS, it) {
      return i9(iS, iS - 267, ig - 350);
    }
    const il = {
      cLOud: function (ig, iS) {
        function it(ik, iF, iN) {
          return J4(ik - -301, iN);
        }
        return V[it(1495, 1251, "CLkT")](ig, iS);
      },
      mmCwP: function (ig, iS) {
        function it(ik, iF, iN) {
          return J4(iN - 440, iF);
        }
        return V[it(2111, "#$OJ", 1302)](ig, iS);
      },
      oIraO: function (ig, iS) {
        function it(ik, iF, iN) {
          return J4(ik - 585, iF);
        }
        return V[it(993, "QUo7", 946)](ig, iS);
      },
      cmCyh: V[ia(1864, "oX^J", 892)],
      GpKuc: V[ih(1373, 1811, "#$OJ")],
      ldbCc: function (ig, iS) {
        function it(ik, iF, iN) {
          return ih(iN - -622, iF - 265, iF);
        }
        return V[it(6, "wR1d", 831)](ig, iS);
      },
      DreSC: function (ig, iS) {
        function it(ik, iF, iN) {
          return ia(iF - 847, iN, iN - 358);
        }
        return V[it(2951, 2042, "5yD(")](ig, iS);
      },
    };
    function ih(ig, iS, it) {
      return i9(it, iS - 330, ig - 629);
    }
    function ii(ig, iS, it) {
      return i9(iS, iS - 97, ig - 849);
    }
    if (V[ih(981, 1537, "]F)!")](V[ii(2107, "]^fO", 1103)], V[ih(1388, 2012, "4)a3")])) {
      let ig = il[ia(1453, "gDN(", 556)](hA[0][i0], 0);
      if (i1) {
        if (i2) {
          if (il[ii(2549, "CjRN", 2208)](ig, 2)) {
            return "b1";
          } else if (il[ih(1051, 1846, "(gRZ")](ig, 2)) {
            return il[ih(1250, 1074, "*lE%")];
          } else {
            return il[ii(2181, "m01*", 2526)];
          }
        } else {
          return "";
        }
      } else if (il[ii(2421, "*lE%", 3375)](ig, 2) && !il[ih(2450, 2177, "#$OJ")](i3, 0)) {
        if (i4) {
          return il[ia(1406, "CjRN", 1773)];
        } else {
          return "";
        }
      } else {
        return null;
      }
    } else {
      return V[ii(1132, "qDWf", 626)](i1, iJ, iP, iy);
    }
  };
  const i3 = function (iy, iJ, iP) {
    function ia(ii, ig, iS) {
      return hH(iS - 1816, ii, iS - 375);
    }
    function il(ii, ig, iS) {
      return hH(ii - 936, ig, iS - 211);
    }
    function ih(ii, ig, iS) {
      return hH(iS - 700, ii, iS - 363);
    }
    if (V[ih("]^fO", 1918, 1365)](V[ia("1x)n", 2636, 2214)], V[ih("#$OJ", 1808, 1633)])) {
      return V[ih("1x)n", 2027, 1353)](i2, iJ, iy, iP);
    } else {
      i0.pulse = i1;
      i2.pressed[i3] = true;
      i4.held[i5] = true;
      i6();
    }
  };
  const i4 = function (iy, iJ, iP) {
    function ia(ii, ig, iS) {
      return i9(iS, ig - 67, ig - 373);
    }
    function il(ii, ig, iS) {
      return i9(ig, ig - 124, ii - -248);
    }
    function ih(ii, ig, iS) {
      return i9(ig, ig - 233, iS - 1136);
    }
    if (V[ih(1564, "wZ&$", 2306)](V[il(-194, "ckex", 618)], V[il(517, "*lE%", 1450)])) {
      let ii = hQ.max(0, hA.warning || 0);
      i0 = ii + 1;
      i1 = ii + i2;
    } else {
      return V[il(-225, "m01*", -1142)](i3, iJ, iP, iy);
    }
  };
  for (let iy in y) {
    if (V[i9("&Uh1", -256, 218)](V[hH(-476, "i$6c", 119)], V[hH(1215, "judH", 1722)])) {
      const iJ = new hX(V[iV("]F)!", 682, 1339)], "g");
      const iP = V[iV("]F)!", 1871, 1170)][iV("Nlyg", 3161, 2768)](iJ, "");
      hQ[hA][i0] = iP;
    } else if (V[iV("7D5s", 2358, 2153)](i1, iy, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      if (V[i9("zb85", 859, 272)](V[hH(205, "wR1d", 133)], V[i9("wZ&$", -763, -33)])) {
        hX = iy;
        break;
      } else {
        let ia = (i3["canact" + i4] && i5["canact" + i6][i7]) || [];
        for (let il = 0; il < 12; il++) {
          if ((O[il] | 0) >= 1 && ia[il] === 1 && x(r[il] || 0) <= il.tension) {
            return {
              main: 1,
              tech: il,
              target: w,
            };
          }
        }
      }
    }
  }
  for (let ih in y[hX]) {
    if (V[iV("1x)n", 1181, 1779)](V[hH(834, "$a3e", 1661)], V[iV("kQVQ", 1282, 916)])) {
      let ii = VI[hH(1166, "ZI9W", 1932)](V[iV("ZI9W", 903, 1539)]);
      let ig = ii
        ? V[hH(1157, "CjRN", 1476)](V[i9("yX#m", 481, 579)](ii[hH(220, "[dV(", 1225)], 0), 4)
          ? 4
          : V[hH(-503, "1x)n", -1253)](V[iV("R5(U", 1895, 2349)](ii[i9("l#By", -706, -39)], 0), 1)
        : -1;
      if (
        V[hH(-759, "v$$v", -1770)](VZ[hH(-6, "6e)s", -806)], ig) ||
        V[hH(-802, "r!4a", 59)](Vj.t0, 0) ||
        V[iV("l#By", 2464, 1996)](VL[hH(1188, "Nlyg", 1051)], Vf.t0)
      ) {
        VD[hH(401, "r!4a", -591)] = ig;
        VO.t0 = Vx[hH(983, "eqC*", 1812)];
        VC[i9("kYZ$", -664, 79)] = !VB[i9("tR8B", 352, 796) + iV("qDWf", 1156, 2080)] && !!Vb[ig];
        Vd[hH(-766, "4)a3", -354)] = null;
      }
      if (Vw[hH(614, "G*Jl", -34)]) {
        let iF = yd[ig];
        let iN = V[iV("4)a3", 1065, 1147)](yw[iV("i$6c", 2545, 1620)], yp.t0);
        let iW =
          V[hH(808, "CjRN", 699)](V[i9("5yD(", 1699, 1009)](iN, 6), 0) &&
          V[iV("iC20", 1958, 2085)](iN, 0)
            ? iF.at[V[hH(17, "m01*", -253)](V[hH(-803, "wZ&$", -136)](iN, 6), 1)]
            : null;
        if (
          V[i9("4)a3", 1187, 540)](iN, iF[hH(110, "judH", 432)][iV("ckex", 2557, 2347)]) ||
          (iW &&
            (V[hH(999, "Nlyg", 2015)](
              yq[iV("qDWf", 1518, 2416)](V[iV("l#By", 1526, 2382)](iW[0], yK.x)),
              0.05,
            ) ||
              V[hH(-272, "oX^J", -634)](
                yz[i9("rHmw", 1901, 1165)](V[hH(-90, "i$6c", 136)](iW[1], yH.y)),
                0.05,
              )))
        ) {
          yX[iV("]^fO", 639, 867)] = !1;
          yQ[hH(590, "5yD(", 973)] = null;
          yA[i9("qBjg", 1715, 1816)] = V[i9("RBn7", -694, -124)](
            V[i9("qDWf", 1391, 1665)](J0[hH(965, "iC20", 1660)], 0),
            1,
          );
        } else {
          J1[i9("ZI9W", 2529, 1725)] = iF[hH(155, "[dV(", 893)][iN];
          V[iV("[dV(", 1551, 992)](J2, J3[i9("[dV(", 1974, 1014)]);
          return !0;
        }
      }
      let iS =
        y6[hH(41, "ckex", 345)] && V[i9("QUo7", 337, -14)](y7.i, 0)
          ? y8[iV("]^fO", 2756, 2496)][V[i9("$a3e", 2507, 1803)](y9.i, 1)]
          : null;
      let it =
        iS &&
        (V[i9("rHmw", 36, 915)](
          yV[i9("qDWf", 1614, 1505)](V[hH(332, "wR1d", -17)](iS[0], yy.x)),
          0.01,
        ) ||
          V[iV("judH", 3131, 2188)](
            yJ[hH(-627, "wZ&$", -88)](V[i9("wR1d", 2819, 1851)](iS[1], yP.y)),
            0.01,
          ));
      if (
        !ya[hH(949, "qBjg", 1483)] ||
        it ||
        V[i9("(gRZ", 261, 27)](yl.i, yh) ||
        V[hH(714, "Ini@", 1297)](yi.i, yg[iV("7D5s", 1675, 2088)][i9("]F)!", 2419, 1423)])
      ) {
        let iT = J4[iV("i$6c", 821, 1736)]();
        let iU = V[hH(269, "Ini@", 339)](
          J5,
          J6[i9("rHmw", 1780, 1533)] && !it
            ? J7[i9("L47D", 1469, 834)][iV("CLkT", 785, 935)](J8.i)
            : null,
        );
        J9[hH(327, "zb85", -438)] =
          iU && iU[iV("o8LY", 2055, 1270)][i9("ZI9W", 1138, 405)]
            ? iU[iV("R5(U", 763, 1004)]
            : [""];
        JV[iV("P$Em", 1520, 1381)] =
          iU && iU[iV("o8LY", 637, 1270)][hH(777, "gDN(", 644)] ? iU.tr : null;
        Jy.i = 0;
        JJ.n++;
        JP[iV("(gRZ", 1720, 2736)]++;
        Ja.ms += V[i9("&Uh1", 1956, 1485)](Jl[hH(160, "i$6c", 870)](), iT);
        if (
          Jh[i9("qDWf", 1503, 661)] &&
          V[hH(-250, "m01*", -620)](Ji[hH(44, "i$6c", 997)], Jg[hH(-154, "25jp", 598)][0]) &&
          V[hH(638, "Nlyg", 1106)](JS[hH(-770, "*lE%", -730)], Jt[iV("6e)s", 237, 1098)][1])
        ) {
          Jk[i9("oX^J", 259, 720)](
            V[iV("wR1d", 2309, 1609)](
              V[hH(609, "m01*", 917)](
                V[iV("&EKZ", 2580, 2599)](
                  V[hH(366, "&Uh1", 1117)](
                    V[hH(-690, "]F)!", -1346)](
                      V[iV("qBjg", 1238, 2121)](
                        V[iV("[dV(", 3117, 2415)](
                          V[i9("(gRZ", -80, -64)](
                            V[hH(-428, "iC20", -151)](
                              V[hH(36, "ckex", 545)](
                                V[i9("qBjg", 308, 589)](
                                  V[hH(-702, "yX#m", -1649)],
                                  JF[hH(-500, "kQVQ", -372)],
                                ),
                                " x",
                              ),
                              JN[iV("RBn7", 2434, 1508)](JW.x),
                            ),
                            it ? V[hH(-610, "gDN(", -890)] : "",
                          ),
                          " ",
                        ),
                        iU
                          ? iU[hH(941, "[dV(", 1379)]
                            ? V[i9("RBn7", 964, 1704)](
                                V[i9("*lE%", 1750, 1151)],
                                iU[hH(81, "CLkT", 175)],
                              )
                            : V[i9("rHmw", 647, 843)](
                                V[iV("yX#m", 3167, 2201)],
                                iU[i9("v$$v", 1064, 1878)][iV("$a3e", 2376, 2323)](1),
                              )
                          : "-",
                      ),
                      " ",
                    ),
                    JT[iV("0aTl", 1020, 1580)]
                      [hH(-496, "5yD(", -586)]((iG) => iG || ".")
                      [iV("zb85", 632, 1096)]("")
                      [i9("qDWf", 916, 1729)](0, 90),
                  ),
                  " ",
                ),
                V[hH(1119, "25jp", 529)](JU[hH(-800, "#$OJ", -828)](), iT)[i9("&EKZ", 778, 1639)](
                  0,
                ),
              ),
              "ms",
            ),
          );
        }
      }
      let ik = yx[i9("judH", 1003, 946)][yC.i++] || "";
      yB[iV("P$Em", 1954, 2013)] = ik;
      V[i9("*lE%", 713, 1135)](yb, ik);
      return !0;
    } else if (V[iV("5yD(", 1703, 2524)](i4, 6, ih, [5, 110, 0, 100])) {
      hQ = ih;
      break;
    }
  }
  for (let iG in y[hX]) {
    if (V[hH(86, "&Uh1", -894)](V[hH(-287, "oX^J", 655)], V[hH(-40, "judH", -677)])) {
      V[i9("eqC*", 801, 578)](i4, i5);
      V[iV("CjRN", 1884, 1715)](i6);
      V[hH(-734, "R5(U", -346)](i7, i8);
      Z[iV("7D5s", 463, 973)] = j;
      for (let iE of r[i9("oX^J", 2691, 1823)](iE)) {
        w[i9("iC20", 1444, 681)][iE] = p[iE];
      }
    } else if (V[hH(856, "eqC*", 1828)](i3, iG, [7, 110, 0, 108], 8)) {
      hA = iG;
      break;
    }
  }
  if (!V[i9("Ini@", 608, 1294)]("~", hQ)) {
    if (V[hH(-370, "yX#m", -1060)](V[hH(1031, "judH", 915)], V[hH(266, "#$OJ", 914)])) {
      let iv = 0;
      for (let ic = 0; ic < r; ic += 1) {
        for (let iu = 0; iu < Q; iu += 1) {
          if ((A(V0, V1 + iu, V2 + ic, "obj_battlesolid") ? 0 : 1) !== V3[ic * V4 + iu]) {
            iv++;
          }
        }
      }
      D.log("CH4CHECK fastFree " + O + "x" + x + " mismatches " + iv);
    } else {
      for (let io in y[hX][hA]) {
        if (V[i9("*lE%", 1716, 951)](i2, [7, 101, 0, 104], io, 8)) {
          i0 = io;
          break;
        }
      }
    }
  }
  if (!hX || !y[hX]) {
    if (V[i9("CjRN", 2037, 1309)](V[i9("1x)n", 867, 601)], V[iV("Nlyg", 2943, 2440)])) {
      return;
    } else {
      const iR = V[iV("v$$v", 1615, 1619)](typeof i3, V[hH(748, "iC20", 520)])
        ? i4
        : V[hH(644, "CjRN", 1661)](typeof i5, V[i9("qDWf", 1060, 536)]) &&
            V[hH(-515, "l#By", -610)](typeof i6, V[iV("P$Em", 1469, 2086)]) &&
            V[i9("&EKZ", 1757, 1432)](typeof i7, V[i9("iC20", 2620, 1702)])
          ? i8
          : this;
      const iM = (iR[iV("tR8B", 1485, 1576)] = iR[hH(402, "qBjg", 66)] || {});
      const im = [
        V[iV("]F)!", 2398, 1820)],
        V[iV("oX^J", 1799, 1751)],
        V[iV("ZI9W", 2005, 2272)],
        V[hH(1108, "RBn7", 1271)],
        V[i9("ZI9W", -453, 225)],
        V[hH(454, "7OMN", -206)],
        V[i9("Nlyg", 727, 1221)],
      ];
      for (let iY = 0; V[i9("i$6c", 539, 991)](iY, im[hH(472, "yX#m", 232)]); iY++) {
        const iI =
          w[i9("v$$v", 1080, 1616) + "r"][hH(-410, "P$Em", -122)][i9("P$Em", 1811, 1476)](p);
        const iZ = im[iY];
        const ij = iM[iZ] || iI;
        iI[i9("qDWf", 386, 256)] = iR[hH(522, "&EKZ", 329)](iM);
        iI[hH(82, "CLkT", -340)] = ij[i9("wR1d", 1196, 618)][i9("l#By", 1988, 1418)](ij);
        iM[iZ] = iI;
      }
    }
  }
  const i5 = y[hX][hQ];
  const i6 = !!y[hX][hA] && y[hX][hA][i0];
  const i7 = V[i9("6e)s", 1287, 1159)](i5, i6);
  if (!i7) {
    if (V[iV("o8LY", 2985, 2020)](V[iV("r!4a", 1385, 1859)], V[iV("&Uh1", 1886, 2786)])) {
      return;
    } else if (b.minigameStage || w.standaloneMinigame) {
      if (p && q.synthetic === K) {
        z.synthetic = null;
        if (X.b1 || Q.zHeld || A.zPrev) {
          V0.held.b1 = false;
          V1.pressed.b1 = false;
        }
        if (V2.xHeld || V3.xPrev) {
          V4.held.b2 = false;
          V5.pressed.b2 = false;
        }
      }
      V6 = null;
      V7.b1 = false;
      V8.pulse = null;
      V9.zHeld = false;
      VV.zPrev = false;
      Vy.xHeld = false;
      VJ.xPrev = false;
      VP.edges = "";
      return true;
    } else {
      return false;
    }
  }
  let i8 = false;
  for (let iL = 0; V[i9("zb85", 1046, 182)](iL, hz[i9("R5(U", 1193, 1828)]); iL++) {
    const iD = hz[iL];
    const iO = V[hH(587, "25jp", 10)](iD[0], String[i9("P$Em", 1565, 1624) + "de"](46))
      ? iD[hH(1026, "5yD(", 342)](1)
      : iD;
    const ix = V[iV("&Uh1", 2473, 1533)](i7[hH(-1, "4)a3", -757)], iO[hH(340, "tR8B", 724)]);
    const iC = i7[i9("l#By", -163, -23)](iO, ix);
    const iB = V[i9("$a3e", 890, 219)](iC, -1) && V[hH(862, "0aTl", 117)](iC, ix);
    if (iB) {
      if (
        V[hH(-426, "wR1d", 126)](i7[i9("m01*", 944, 954)], iD[hH(385, "l#By", 857)]) ||
        V[i9("eqC*", 1018, 736)](iD[iV("RBn7", 1439, 1526)]("."), 0)
      ) {
        if (V[hH(1034, "CjRN", 895)](V[hH(-331, "CjRN", -946)], V[hH(798, "0aTl", 941)])) {
          i8 = true;
        } else {
          let ib = V[i9("&EKZ", 1518, 935)](hX)[hH(93, "judH", 761)]((id) => id !== 0);
          hQ = ib[i9("(gRZ", 765, 1097)]
            ? ib[
                V[hH(-267, "QUo7", -1010)](
                  V[iV("v$$v", 1906, 2366)](
                    V[iV("7D5s", 1359, 1906)](hA, i0[i9("zb85", 832, 1497)]),
                    0,
                  ),
                  ib[i9("o8LY", 1690, 1186)],
                )
              ]
            : 0;
        }
      }
    }
  }
  function i9(id, iw, ip) {
    return J4(ip - -314, id);
  }
  function iV(id, iw, ip) {
    return J4(ip - 597, id);
  }
  if (!i8) {
    if (V[hH(290, "gDN(", 83)](V[i9("P$Em", 860, 466)], V[iV("L47D", 1297, 1226)])) {
      const id = new RegExp(V[hH(-488, "6e)s", -738)], "g");
      const iw = V[hH(750, "eqC*", 1560)][i9("#$OJ", 2051, 1785)](id, "");
      y[hX][hA] = iw;
    } else {
      let ip = "";
      for (let iK = 0; iK < 3; iK++) {
        if (V0.monster[iK] === 1) {
          ip += iK + ":" + V1.monsterhp[iK] + ":" + V2.mercymod[iK] + " ";
        }
      }
      D.still = ip === O.sig ? x.still + 1 : 0;
      r.sig = ip;
      if (b.still >= 3) {
        w.on = 1;
      }
      p.plan = [null, null, null];
      let iq = q.last;
      if (iq) {
        let iz = iq.m + ":" + iq.i;
        V3.gain[iz] = (V4.gain[iz] || 0) + (V5(V6.mercymod[iq.m]) || 0) - iq.mercy;
        V7.last = null;
      }
    }
  }
});
i();
const n = (function () {
  const hK = {
    [hz(100, 797, "wR1d")]: function (i0, i1) {
      return i0 === i1;
    },
  };
  function hz(i0, i1, i2) {
    return J4(i0 - -893, i2);
  }
  hK[hH(2566, "CjRN", 3533)] = hz(1048, 1427, "rHmw");
  hK[hX(1006, 1683, "[dV(")] = hH(1500, "o8LY", 774);
  function hH(i0, i1, i2) {
    return J4(i0 - 952, i1);
  }
  function hX(i0, i1, i2) {
    return J4(i0 - -378, i2);
  }
  hK[hX(1274, 541, "G*Jl")] = hz(-83, -134, "wZ&$");
  const hQ = hK;
  let hA = true;
  return function (i0, i1) {
    const i2 = hA
      ? function () {
          function i3(i6, i7, i8) {
            return J4(i7 - 83, i6);
          }
          function i4(i6, i7, i8) {
            return J4(i8 - 50, i7);
          }
          function i5(i6, i7, i8) {
            return J4(i8 - -171, i6);
          }
          if (hQ[i4(15, "&EKZ", 933)](hQ[i4(542, "25jp", 1392)], hQ[i5("&EKZ", 1414, 1276)])) {
            let i6 = G.hypot(E + 4 - v, c + 4 - u);
            if (i6 <= R) {
              return -6;
            } else {
              return (i6 - M) * 0.04;
            }
          } else if (i1) {
            if (hQ[i4(428, "ckex", 584)](hQ[i4(1034, "o8LY", 1001)], hQ[i3("wZ&$", 1256, 261)])) {
              const i7 = i1[i5("[dV(", 494, 1195)](i0, arguments);
              i1 = null;
              return i7;
            } else {
              let i8 = G.get(E);
              if (!i8) {
                i8 = new v(c.split("+").filter(u));
                R.set(M, i8);
              }
              return i8;
            }
          }
        }
      : function () {};
    hA = false;
    return i2;
  };
})();
const S = n(this, function () {
  const V = {
    [y(1295, "Nlyg", 1846)]: function (i0, i1) {
      return i0 === i1;
    },
  };
  function y(i0, i1, i2) {
    return J4(i2 - 148, i1);
  }
  V[hK("v$$v", 1398, 401)] = function (i0, i1) {
    return i0 | i1;
  };
  V[y(2272, "ZI9W", 1972)] = function (i0, i1) {
    return i0 !== i1;
  };
  function hK(i0, i1, i2) {
    return J4(i1 - 231, i0);
  }
  V[y(948, "*lE%", 1768)] = hz(1497, "i$6c", 1821);
  V[hz(1838, "(gRZ", 1777)] = function (i0, i1) {
    return i0 === i1;
  };
  V[hz(1219, "]^fO", 1823)] = y(2209, "G*Jl", 2181);
  V[hz(2313, "r!4a", 3054)] = function (i0, i1) {
    return i0 === i1;
  };
  V[y(2319, "CjRN", 2286)] = hz(2114, "eqC*", 2865);
  V[hz(2061, "4)a3", 2109)] = hz(1162, "Nlyg", 1486);
  V[hz(1247, "i$6c", 1639)] = y(1605, "&Uh1", 1180);
  function hz(i0, i1, i2) {
    return J4(i0 - 937, i1);
  }
  V[hz(2495, "l#By", 3472)] = hz(2129, "(gRZ", 2202);
  V[hz(2269, "P$Em", 1532)] = hK("]^fO", 895, 1893);
  V[y(738, "qDWf", 1544)] = hz(1925, "eqC*", 2310);
  V[y(2395, "v$$v", 1696)] = hz(3081, "gDN(", 3435);
  V[y(1763, "judH", 1554)] = hK("tR8B", 1016, 1275);
  V[y(1479, "[dV(", 1509)] = function (i0, i1) {
    return i0 < i1;
  };
  V[hK("(gRZ", 1895, 1026)] = hz(2143, "oX^J", 1315);
  V[hz(2526, "*lE%", 2082)] = hK("[dV(", 1832, 1095);
  const hH = V;
  const hX = hH[hz(2927, "yX#m", 2423)](typeof window, hH[y(1357, "QUo7", 522)])
    ? window
    : hH[y(1789, "judH", 2212)](typeof process, hH[hK("QUo7", 1712, 2088)]) &&
        hH[hz(2440, "Ini@", 3246)](typeof require, hH[y(1947, "&Uh1", 1165)]) &&
        hH[hz(2703, "&Uh1", 3381)](typeof global, hH[hK("l#By", 1506, 526)])
      ? global
      : this;
  const hQ = (hX[y(59, "4)a3", 931)] = hX[hz(3010, "(gRZ", 3380)] || {});
  const hA = [
    hH[hK("$a3e", 2076, 1427)],
    hH[hz(3068, "(gRZ", 3901)],
    hH[hK("Ini@", 1314, 1044)],
    hH[hK("kYZ$", 527, 1)],
    hH[hK("eqC*", 912, 1529)],
    hH[y(1590, "25jp", 1691)],
    hH[hK("oX^J", 1333, 2170)],
  ];
  for (let i0 = 0; hH[hz(1918, "zb85", 956)](i0, hA[y(986, "gDN(", 1904)]); i0++) {
    if (hH[hz(1442, "CLkT", 1364)](hH[hK("QUo7", 1110, 233)], hH[hK("1x)n", 853, 771)])) {
      const i1 = n[hz(2356, "4)a3", 1925) + "r"][y(1833, "gDN(", 1211)][hz(2646, "qBjg", 2361)](n);
      const i2 = hA[i0];
      const i3 = hQ[i2] || i1;
      i1[hz(1670, "rHmw", 1428)] = n[y(192, "kQVQ", 352)](n);
      i1[hK("l#By", 1586, 1799)] = i3[y(2275, "wZ&$", 1511)][y(1196, "wZ&$", 1716)](i3);
      hQ[i2] = i1;
    } else {
      let i4 = V[hz(2997, "#$OJ", 2491)] || [];
      if (hH[hK("kQVQ", 740, 1031)](hH[y(729, "i$6c", 1744)](i4[501], 0), 1)) {
        let i6 = [
          [505, 0],
          [507, 1],
          [508, 2],
          [506, 3],
        ][hK("judH", 630, 603)](([i8]) => !(i4[i8] | 0));
        const i7 = {
          [hK("25jp", 2150, 2333)]: 1,
          [hK("7D5s", 1881, 1065)]: i6 ? i6[1] : 0,
        };
        return i7;
      }
      const i5 = {
        [hz(2488, "kYZ$", 1986)]: 1,
        [hK("m01*", 680, 496)]: 0,
      };
      return i5;
    }
  }
});
S();
import { I as k, y as F } from "./c-QJXN6G4A.js";
import { a as N, b as W, c as T, f as U } from "./c-FKUTYDQS.js";
import { a as G, b as E, c as v } from "./c-OYE7A34G.js";
import { a as s, g as c, l as u, m as o, o as R, q as M } from "./c-O6GE5FYX.js";
import {
  Aa as m,
  B as Y,
  Ca as I,
  Cb as Z,
  Eb as j,
  Fb as L,
  I as f,
  N as D,
  O,
  P as x,
  Q as r,
  Tb as C,
  _b as b,
  i as d,
  ob as w,
  ya as p,
  za as q,
} from "./c-ZEHUSSXN.js";
import { a as K, l as z } from "./c-7Q4J33FN.js";
z();
z();
var X = [
  "blt_coolbus",
  "blt_dummymissle",
  "blt_gravbullet",
  "blt_growbullet",
  "blt_hat",
  "blt_laser",
  "blt_scootdog",
  "blt_shinebullet",
  "blt_sizebone",
  "blt_soapbul",
  "blt_superbone",
  "blt_temhand",
  "blt_topbone",
  "blt_vegbullet",
  "obj_amalgam_tooth",
  "obj_amalgambul_parent",
  "obj_asbulletparent",
  "obj_asgorebulparent",
  "obj_asriel_swordarm",
  "obj_astigmatism_bullet",
  "obj_basicbullet_sneo_finale",
  "obj_bigglydeshot",
  "obj_blackbox_pl",
  "obj_blastbul",
  "obj_bluelaser_b",
  "obj_boneplat",
  "obj_bullet_dice",
  "obj_bullet_homing",
  "obj_bullet_moon",
  "obj_bullet_rain",
  "obj_bullet_snow",
  "obj_bullet_submoon",
  "obj_bullet_sun",
  "obj_butterflybullet",
  "obj_butterflybullet_2",
  "obj_cfire",
  "obj_checkers_leap",
  "obj_collidebullet",
  "obj_crosszap",
  "obj_discoball_pl",
  "obj_elnina_bouncingbullet",
  "obj_elnina_raindrop",
  "obj_elnina_snowring",
  "obj_followspear_2",
  "obj_freakbullet",
  "obj_frogbullet_ex",
  "obj_gasterblaster",
  "obj_genericfire",
  "obj_gunarm_firepattern",
  "obj_hg_body",
  "obj_iceteeth",
  "obj_incendiary",
  "obj_knight_bullethell_bullet2",
  "obj_knight_diamondswordbullet_ext",
  "obj_knight_pointing_star",
  "obj_knight_pointing_starchild",
  "obj_knight_roaring_star",
  "obj_knight_weird_circle_bullet",
  "obj_knighthammer",
  "obj_lancerbike",
  "obj_lancerbike_neo",
  "obj_lanino_solar_system",
  "obj_laserscythe",
  "obj_legline_l",
  "obj_legline_r",
  "obj_maintem",
  "obj_megaflybullet",
  "obj_meteorbullet",
  "obj_mettaton_bomb_hitbox",
  "obj_metthand_l",
  "obj_metthand_r",
  "obj_metttestbulletparent",
  "obj_omawaroid_vaccine",
  "obj_orangefire",
  "obj_overworldbulletparent",
  "obj_plusbomb",
  "obj_plusbomb_explosion",
  "obj_precipitation_bullet_parent",
  "obj_queen_social_media",
  "obj_queen_wine_attack_bottom_hurtbox",
  "obj_queen_wine_attack_droplet",
  "obj_queen_winebubble",
  "obj_rainwater",
  "obj_regularbullet_elnina",
  "obj_regularbullet_permanent",
  "obj_risespearbullet",
  "obj_roaringknight_quickslash_big",
  "obj_roaringknight_slash",
  "obj_roaringknight_splitslash",
  "obj_rotspear",
  "obj_rouxls_biplane_flag",
  "obj_rouxls_helicopter_hitbox",
  "obj_rouxls_yarnball",
  "obj_sans_bonebul",
  "obj_shrinktangle",
  "obj_sided_fire",
  "obj_sinefire_asghelix",
  "obj_skymoon",
  "obj_skyorb",
  "obj_slidebullet",
  "obj_sneo_elevator_electric_ball",
  "obj_sneo_final_orb",
  "obj_sneo_phonehand_master_hurtbox",
  "obj_snowflake_ult_bullet",
  "obj_sonbullet",
  "obj_sorry_trashball",
  "obj_sorrybody",
  "obj_spearbullet_follow",
  "obj_spiderbulletparent",
  "obj_stromboli",
  "obj_sunbullet",
  "obj_sunmoon",
  "obj_susiezilla_statue",
  "obj_sword_tunnel_sword",
  "obj_tasque_soundwave",
  "obj_teacup_bullet",
  "obj_temleg",
  "obj_tenna_allstars_bullet",
  "obj_tenna_lightemup_bullet",
  "obj_thrash_duck_bullet",
  "obj_tm_quizzap",
  "obj_upbox_new_pl",
  "obj_upbox_pl",
  "obj_viro_needle",
  "obj_vulkincloudbul",
  "obj_vulkinlightning",
  "obj_warplinebullet",
  "obj_wizardorb_chaser",
  "obj_wizardorb_wall",
  "obj_yarnbullet",
  "obj_yarnsnake_bullet",
];
var Q = [
  "blt_coolbus",
  "blt_hat",
  "blt_laser",
  "blt_scootdog",
  "blt_sizebone",
  "blt_superbone",
  "blt_temhand",
  "blt_topbone",
  "obj_asriel_swordarm",
  "obj_blackbox_pl",
  "obj_bluelaser_b",
  "obj_boneplat",
  "obj_cfire",
  "obj_discoball_pl",
  "obj_followspear_2",
  "obj_freakbullet",
  "obj_gasterblaster",
  "obj_genericfire",
  "obj_gunarm_firepattern",
  "obj_hg_body",
  "obj_iceteeth",
  "obj_legline_l",
  "obj_legline_r",
  "obj_metthand_l",
  "obj_metthand_r",
  "obj_plusbomb",
  "obj_plusbomb_explosion",
  "obj_rotspear",
  "obj_sans_bonebul",
  "obj_sided_fire",
  "obj_sinefire_asghelix",
  "obj_slidebullet",
  "obj_sorrybody",
  "obj_spearbullet_follow",
  "obj_sword_tunnel_sword",
  "obj_temleg",
  "obj_upbox_new_pl",
  "obj_upbox_pl",
  "obj_warplinebullet",
];
z();
var A = null;
function V0() {
  if (A) {
    return A;
  }
  let V = v(b);
  let y = V.ctx;
  try {
    Object.defineProperty(V, "ctx", {
      get: () => y,
      set: () => {},
      configurable: true,
    });
  } catch {}
  return (A = V);
}
K(V0, "gfx4");
var V1 = true;
var V2 = {
  gDir: -1,
  gUntil: -1,
  gFrame: -1,
};
function V3() {
  return {
    ...V2,
  };
}
K(V3, "ch4SaveState");
function V4(V) {
  if (V) {
    Object.assign(V2, V);
  }
}
K(V4, "ch4LoadState");
function V5() {
  V2.gDir = -1;
  V2.gUntil = -1;
  V2.gFrame = -1;
}
K(V5, "ch4ResetState");
function V6() {
  return "ch4 g " + V2.gDir + "/" + V2.gUntil;
}
K(V6, "ch4Digest");
function V7(V, y, hK) {
  return J4(y - 700, V);
}
var V8 = K(() => {
  if (typeof c.hp == "number") {
    return c.hp;
  }
  let V = 0;
  for (let y of [1, 2, 3]) {
    let hK = Number(c.hp && c.hp[y]);
    if (Number.isFinite(hK)) {
      V += Math.max(-999, hK);
    }
  }
  return V;
}, "partyHP");
function V9(V, hK, hz) {
  let hH = G();
  let hX = r.synthetic;
  let hQ = I();
  let hA = {
    left: r.held.left,
    right: r.held.right,
    up: r.held.up,
    down: r.held.down,
    b1: r.held.b1,
  };
  let i0 = V8();
  let i1 = Number(c.tension) || 0;
  let i2 = 0;
  let i3 = 0;
  let i4 = 0;
  let i5 = 0;
  let i6 = i0;
  p(false);
  q();
  try {
    for (let i7 = 0; i7 < V; i7++) {
      let i8 = hK(i7) || [];
      r.synthetic = () => {
        for (let iV of ["left", "right", "up", "down"]) {
          r.held[iV] = i8.includes(iV);
          r.pressed[iV] = false;
        }
        r.pressed.b1 = false;
        r.held.b1 = false;
      };
      try {
        C(U, V0());
      } catch {
        break;
      }
      i4++;
      let i9 = V8();
      if (i9 < i6) {
        i5 += (i6 - i9) * (2 - i7 / V);
      }
      i6 = i9;
      i2 = Math.max(i2, i0 - i9);
      i3 = (Number(c.tension) || 0) - i1;
      if (c.battleover || (hz && hz(i7))) {
        break;
      }
    }
  } finally {
    E(hH);
    m();
    p(hQ);
    r.synthetic = hX;
    Object.assign(r.held, hA);
  }
  return {
    lost: i2,
    tp: i3,
    n: i4,
    early: i5,
  };
}
K(V9, "rollout");
var VV = {
  0: ["right"],
  90: ["up"],
  180: ["left"],
  270: ["down"],
  45: ["up", "right"],
  135: ["up", "left"],
  225: ["down", "left"],
  315: ["down", "right"],
};
function Vy(V) {
  if (!V1 || !V || V.destroyed || c.chapter !== 4) {
    return null;
  }
  let y = w.first("obj_spearblocker");
  if (!y || y.destroyed || y.vanish !== 0 || V.color === 0) {
    return null;
  } else {
    return y;
  }
}
K(Vy, "isGreenShield");
function VJ(V) {
  return !!Vy(V);
}
K(VJ, "ch4GreenSoul");
function VP(V) {
  let y = null;
  let hK = Infinity;
  for (let hX of w.list) {
    if (hX.destroyed || !hX.is || !hX.is("obj_spearshot")) {
      continue;
    }
    let hQ = Math.abs(Number(hX.fakespeed) || 0) || 1;
    let hA = (Number(hX.len) || 0) / hQ;
    if (hA < hK) {
      hK = hA;
      y = hX;
    }
  }
  if (!y) {
    return null;
  }
  let hz =
    ((((Number(y.bouncespear) === 2 ? Number(y.direction) : Number(y.image_angle ?? y.direction)) +
      180) %
      360) +
      360) %
    360;
  let hH = V.diagonal_enabled === 1 || V.diagonal_enabled === true ? 45 : 90;
  return {
    dir: (Math.round(hz / hH) * hH) % 360,
    eta: hK,
  };
}
K(VP, "spearIdeal");
function Va(V) {
  let hK = Vy(V);
  if (!hK) {
    return null;
  }
  let hz = [];
  for (let i6 of w.list) {
    if (!i6.destroyed && i6.is && i6.is("obj_spearshot")) {
      hz.push(i6);
    }
  }
  if (!hz.length) {
    V2.gDir = -1;
    return [];
  }
  let hH = w.frame | 0;
  if (V2.gDir >= 0 && hH < V2.gUntil && (hH - V2.gFrame) % 2 !== 0) {
    return VV[V2.gDir] || [];
  }
  let hX =
    hK.diagonal_enabled === 1 || hK.diagonal_enabled === true
      ? [0, 45, 90, 135, 180, 225, 270, 315]
      : [0, 90, 180, 270];
  let hQ = 26;
  let hA = (i7, i8) => (i9) => {
    if (i9 < i8) {
      return VV[i7];
    }
    let iV = w.first("obj_spearblocker");
    let iy = iV ? VP(iV) : null;
    if (iy) {
      return VV[iy.dir];
    } else {
      return VV[i7];
    }
  };
  let i0 = VP(hK);
  let i1 = i0 ? Math.max(4, Math.min(hQ, Math.ceil(i0.eta) + 3)) : 6;
  let i2 = -1;
  let i3 = Infinity;
  let i4 = i0 ? [i0.dir, ...hX.filter((i7) => i7 !== i0.dir)] : hX;
  let i5 = V2.gDir;
  for (let i7 of i4) {
    let i8 = V9(hQ, hA(i7, i1));
    let i9 =
      i8.early * 1000 - i8.tp * 2 + (i7 === i5 ? -0.5 : 0) + (i0 && i7 === i0.dir ? -0.25 : 0);
    if (i9 < i3) {
      i3 = i9;
      i2 = i7;
    }
  }
  V2.gDir = i2;
  V2.gFrame = hH;
  V2.gUntil = hH + 2;
  return VV[i2] || [];
}
K(Va, "ch4GreenKeys");
var Vl = 1;
var Vh = {
  fields: 0,
  fieldMs: 0,
  fieldMax: 0,
};
var Vi = new Map();
function Vg(V) {
  let y = String(V.mask_index || V.sprite_index);
  for (let hK of w.list) {
    if (hK.destroyed || !hK.is || !hK.is("obj_battlesolid")) {
      continue;
    }
    let hz =
      typeof hK.mask_index == "number" && hK.mask_index < 0
        ? hK.sprite_index
        : hK.mask_index || hK.sprite_index;
    if (hz !== "spr_nothing" && hz !== "spr_no_mask" && !!f[hz]) {
      y +=
        "|" +
        hK.constructor.name +
        "," +
        Math.round(hK.x) +
        "," +
        Math.round(hK.y) +
        "," +
        (hK.mask_index || hK.sprite_index) +
        "," +
        hK.image_xscale +
        "," +
        hK.image_yscale +
        "," +
        Math.round(hK.image_angle || 0);
    }
  }
  return y;
}
function VS(V, y, hK) {
  return J4(V - -98, hK);
}
K(Vg, "solidsSig");
function Vt(hK, hz, hH, hX, hQ) {
  if (Vl !== 1 || (hK.image_angle || 0) !== 0 || hK.image_xscale !== 1 || hK.image_yscale !== 1) {
    return null;
  }
  let hA =
    typeof hK.mask_index == "number" && hK.mask_index < 0
      ? hK.sprite_index
      : hK.mask_index || hK.sprite_index;
  let i0 = f[hA];
  if (!i0 || !i0.bb || !Number.isInteger(i0.ox) || !Number.isInteger(i0.oy)) {
    return null;
  }
  let i1 = i0.precise && i0.masks ? i0.masks.length : 1;
  let i2 =
    ((Math.floor(hK.image_index || 0) % Math.max(1, i0.frames)) + i0.frames) %
    Math.max(1, i0.frames);
  let i3 = x(i0, Math.min(i2, i1 - 1));
  if (!i3) {
    return null;
  }
  let i4 = [];
  for (let il = i0.bb[1]; il <= i0.bb[3]; il++) {
    for (let ih = i0.bb[0]; ih <= i0.bb[2]; ih++) {
      if (i3[il * i0.w + ih]) {
        i4.push(ih - i0.ox, il - i0.oy);
      }
    }
  }
  if (!i4.length) {
    return new Uint8Array(hX * hQ).fill(1);
  }
  let i5 = 0;
  let i6 = 0;
  let i7 = 0;
  let i8 = 0;
  for (let ii = 0; ii < i4.length; ii += 2) {
    i5 = Math.min(i5, i4[ii]);
    i6 = Math.max(i6, i4[ii]);
    i7 = Math.min(i7, i4[ii + 1]);
    i8 = Math.max(i8, i4[ii + 1]);
  }
  let i9 = hz + i5;
  let iV = hH + i7;
  let iy = hX + i6 - i5;
  let iJ = hQ + i8 - i7;
  let iP = new Uint8Array(iy * iJ);
  for (let ig of w.list) {
    if (ig === hK || ig.destroyed || !ig.is || !ig.is("obj_battlesolid")) {
      continue;
    }
    let iS =
      typeof ig.mask_index == "number" && ig.mask_index < 0
        ? ig.sprite_index
        : ig.mask_index || ig.sprite_index;
    let it = iS && f[iS];
    if (!it || !it.bb) {
      continue;
    }
    let ik = ig.image_xscale;
    let iF = ig.image_yscale;
    if (!ik || !iF) {
      continue;
    }
    let iN = it.precise && it.masks ? it.masks.length : 1;
    let iW =
      ((Math.floor(ig.image_index || 0) % Math.max(1, it.frames)) + it.frames) %
      Math.max(1, it.frames);
    let iT = x(it, Math.min(iW, iN - 1));
    if (!iT) {
      continue;
    }
    let iU = ((ig.image_angle || 0) * Math.PI) / 180;
    let iG = Math.cos(iU);
    let iE = Math.sin(iU);
    let iv = [Infinity, Infinity, -Infinity, -Infinity];
    for (let iM of [(it.bb[0] - it.ox) * ik, (it.bb[2] + 1 - it.ox) * ik]) {
      for (let im of [(it.bb[1] - it.oy) * iF, (it.bb[3] + 1 - it.oy) * iF]) {
        let iY = ig.x + iM * iG + im * iE;
        let iI = ig.y - iM * iE + im * iG;
        if (iY < iv[0]) {
          iv[0] = iY;
        }
        if (iY > iv[2]) {
          iv[2] = iY;
        }
        if (iI < iv[1]) {
          iv[1] = iI;
        }
        if (iI > iv[3]) {
          iv[3] = iI;
        }
      }
    }
    let ic = Math.max(0, Math.floor(iv[0] - i9) - 2);
    let iu = Math.min(iy - 1, Math.ceil(iv[2] - i9) + 2);
    let io = Math.max(0, Math.floor(iv[1] - iV) - 2);
    let iR = Math.min(iJ - 1, Math.ceil(iv[3] - iV) + 2);
    for (let iZ = io; iZ <= iR; iZ++) {
      for (let ij = ic; ij <= iu; ij++) {
        let iL = iZ * iy + ij;
        if (iP[iL]) {
          continue;
        }
        let iD = i9 + ij + 0.5 - ig.x;
        let iO = iV + iZ + 0.5 - ig.y;
        let ix = Math.floor((iD * iG - iO * iE) / ik + it.ox);
        let iC = Math.floor((iD * iE + iO * iG) / iF + it.oy);
        if (!(ix < 0) && !(iC < 0) && !(ix >= it.w) && !(iC >= it.h)) {
          if (iT[iC * it.w + ix]) {
            iP[iL] = 1;
          }
        }
      }
    }
  }
  let ia = new Uint8Array(hX * hQ);
  for (let iB = 0; iB < hQ; iB++) {
    for (let ib = 0; ib < hX; ib++) {
      let id = 0;
      for (let iw = 0; iw < i4.length; iw += 2) {
        if (iP[(iB + i4[iw + 1] - i7) * iy + ib + i4[iw] - i5]) {
          id = 1;
          break;
        }
      }
      ia[iB * hX + ib] = id ? 0 : 1;
    }
  }
  if (typeof process !== "undefined" && process.env && process.env.CH4CHECK === "1") {
    let ip = 0;
    for (let iq = 0; iq < hQ; iq += 1) {
      for (let iK = 0; iK < hX; iK += 1) {
        if ((L(hK, hz + iK, hH + iq, "obj_battlesolid") ? 0 : 1) !== ia[iq * hX + iK]) {
          ip++;
        }
      }
    }
    console.log("CH4CHECK fastFree " + hX + "x" + hQ + " mismatches " + ip);
  }
  return ia;
}
K(Vt, "fastFree");
function Vk(V, hK) {
  let hz = [V.x - 16, V.y - 16, V.x + 16, V.y + 16];
  let hH = (ig) => {
    if (!(ig[2] - ig[0] < 1) || !(ig[3] - ig[1] < 1)) {
      hz[0] = Math.min(hz[0], ig[0]);
      hz[1] = Math.min(hz[1], ig[1]);
      hz[2] = Math.max(hz[2], ig[2]);
      hz[3] = Math.max(hz[3], ig[3]);
    }
  };
  for (let ig of w.list) {
    if (!ig.destroyed && ig.is && ig.is("obj_battlesolid")) {
      hH(Z(ig));
    }
  }
  hH(Z(hK));
  if (hz[0] < -40) {
    hz[0] = -40;
  }
  if (hz[1] < -40) {
    hz[1] = -40;
  }
  if (hz[2] > 680) {
    hz[2] = 680;
  }
  if (hz[3] > 520) {
    hz[3] = 520;
  }
  let hX =
    Vg(V) +
    "#" +
    hK.constructor.name +
    "," +
    Math.round(hK.x) +
    "," +
    Math.round(hK.y) +
    "#" +
    hz.map(Math.round).join(",");
  {
    let iS = Vi.get(hX);
    if (iS) {
      return iS;
    }
  }
  let hQ = performance.now();
  let hA = Math.floor(hz[0]) - 24;
  let i0 = Math.floor(hz[1]) - 24;
  let i1 = Math.ceil((hz[2] - hz[0] + 48) / Vl);
  let i2 = Math.ceil((hz[3] - hz[1] + 48) / Vl);
  let i3 = new Uint8Array(i1 * i2);
  let i4 = new Int32Array(i1 * i2).fill(-1);
  let i5 = new Int32Array(i1 * i2);
  let i6 = 0;
  let i7 = 0;
  let i8 = Z(V);
  let i9 = Z(hK);
  let iV = 3;
  let iy = i8[0] - V.x;
  let iJ = i8[1] - V.y;
  let iP = i8[2] - V.x;
  let ia = i8[3] - V.y;
  let il = Vt(V, hA, i0, i1, i2);
  for (let it = 0; it < i2; it++) {
    for (let ik = 0; ik < i1; ik++) {
      let iF = hA + ik * Vl;
      let iN = i0 + it * Vl;
      if (
        !(il ? !il[it * i1 + ik] : L(V, iF, iN, "obj_battlesolid")) &&
        ((i3[it * i1 + ik] = 1),
        iF + iP >= i9[0] + iV &&
          iF + iy <= i9[2] - iV &&
          iN + ia >= i9[1] + iV &&
          iN + iJ <= i9[3] - iV)
      ) {
        let iW = true;
        for (let iT = -1; iT <= 1 && iW; iT++) {
          for (let iU = -1; iU <= 1 && iW; iU++) {
            if (!j(V, hK, iF + iU, iN + iT)) {
              iW = false;
              break;
            }
            let iG = Object.create(V);
            iG.x = iF + iU;
            iG.y = iN + iT;
            if (!j(hK, iG)) {
              iW = false;
            }
          }
        }
        if (iW) {
          i4[it * i1 + ik] = 0;
          i5[i7++] = it * i1 + ik;
        }
      }
    }
  }
  while (i6 < i7) {
    let iE = i5[i6++];
    let iv = iE % i1;
    let ic = (iE - iv) / i1;
    let iu = i4[iE] + 1;
    for (let io = -1; io <= 1; io++) {
      for (let iR = -1; iR <= 1; iR++) {
        if (!iR && !io) {
          continue;
        }
        let iM = iv + iR;
        let im = ic + io;
        if (iM < 0 || im < 0 || iM >= i1 || im >= i2) {
          continue;
        }
        let iY = im * i1 + iM;
        if (
          !!i3[iY] &&
          !(i4[iY] >= 0) &&
          (!iR || !io || (!!i3[ic * i1 + iM] && !!i3[im * i1 + iv]))
        ) {
          i4[iY] = iu;
          i5[i7++] = iY;
        }
      }
    }
  }
  let ih = 0;
  for (let iI = 0; iI < i4.length; iI++) {
    if (i4[iI] > ih) {
      ih = i4[iI];
    }
  }
  let ii = {
    x0: hA,
    y0: i0,
    W: i1,
    H: i2,
    dist: i4,
    max: ih,
    free: i3,
  };
  if (Vi.size >= 6) {
    Vi.delete(Vi.keys().next().value);
  }
  Vi.set(hX, ii);
  {
    let iZ = performance.now() - hQ;
    Vh.fields++;
    Vh.fieldMs += iZ;
    if (iZ > Vh.fieldMax) {
      Vh.fieldMax = iZ;
    }
  }
  return ii;
}
K(Vk, "goalField");
function VF(V, y) {
  let { x0: hK, y0: hz, W: hH, H: hX, dist: hQ, max: hA } = V;
  return (i0, i1) => {
    let i2 = Math.round((i0 - hK) / Vl);
    let i3 = Math.round((i1 - hz) / Vl);
    if (i2 < 0) {
      i2 = 0;
    }
    if (i3 < 0) {
      i3 = 0;
    }
    if (i2 >= hH) {
      i2 = hH - 1;
    }
    if (i3 >= hX) {
      i3 = hX - 1;
    }
    let i4 = hQ[i3 * hH + i2];
    if (i4 === 0) {
      return -6;
    } else {
      return y * Vl * (i4 < 0 ? hA + 40 : i4);
    }
  };
}
K(VF, "fieldCost");
function VN(V, y, hK) {
  let hz = Math.round((y - V.x0) / Vl);
  let hH = Math.round((hK - V.y0) / Vl);
  if (hz < 0 || hH < 0 || hz >= V.W || hH >= V.H) {
    return -1;
  } else {
    return V.dist[hH * V.W + hz];
  }
}
K(VN, "fieldAt");
function VW(V, y) {
  if (VN(Vk(V, y), V.x, V.y) >= 0) {
    return y;
  }
  let hK = null;
  let hz = Infinity;
  for (let hH of w.list) {
    if (hH.destroyed || hH.constructor.name !== "obj_ghosthouse_trigger" || !hH.active) {
      continue;
    }
    let hX = VN(Vk(V, hH), V.x, V.y);
    if (hX >= 0 && hX < hz) {
      hz = hX;
      hK = hH;
    }
  }
  return hK || y;
}
K(VW, "jackTarget");
function VT(V) {
  if (!w.first("obj_jackenstein_enemy")) {
    return null;
  }
  let y = w.first("obj_ghosthouse_key");
  let hK = w.first("obj_ghosthouse_exit");
  let hz = y && !y.destroyed ? y : hK && !hK.destroyed ? hK : null;
  if (hz) {
    hz = VW(V, hz);
    return VF(Vk(V, hz), VE(V) ? 0.1 : 0.02);
  } else {
    return null;
  }
}
K(VT, "jackGoal");
function VU(V) {
  let y = w.first("obj_ghosthouse_jackolantern_merciful");
  if (!y || y.destroyed) {
    return null;
  }
  let hK = Number(y.size) || 1;
  let hz = (Number(y.mercy) || 0) > 70 ? -hK : hK;
  let hH = (Number(y.light_distance) || 75) - hz * 30;
  let hX = Number(y.hspeed) || 0;
  let hQ = Number(y.vspeed) || 0;
  let hA = y.x + hX * 3;
  let i0 = y.y + hQ * 3;
  let i1 = Math.max(8, hH - 10);
  return (i2, i3) => {
    let i4 = Math.hypot(i2 + 4 - hA, i3 + 4 - i0);
    if (i4 <= i1) {
      return -6;
    } else {
      return (i4 - i1) * 0.04;
    }
  };
}
K(VU, "lanternGoal");
function VG(V) {
  if (!V1 || c.chapter !== 4 || c.mnfight !== 2 || !V || V.destroyed) {
    return null;
  } else {
    return VU(V) || VT(V);
  }
}
K(VG, "ch4Goal");
function VE(V) {
  if (!Vv(V)) {
    return 0;
  }
  let y = Number(c.turntimer);
  if (y > 900000 && y < 999099) {
    return 12;
  } else {
    return 0;
  }
}
K(VE, "ch4HitCost");
function Vv(V) {
  return (
    V1 &&
    c.chapter === 4 &&
    c.mnfight === 2 &&
    !!w.first("obj_jackenstein_enemy") &&
    (!!w.first("obj_ghosthouse_key") || !!w.first("obj_ghosthouse_exit"))
  );
}
K(Vv, "ch4FineGrid");
function Vc(V) {
  if (!Vv(V)) {
    return null;
  }
  let y = w.first("obj_ghosthouse_key");
  let hK = w.first("obj_ghosthouse_exit");
  let hz = y && !y.destroyed ? y : hK;
  if (!hz) {
    return null;
  }
  let hH = Vk(V, hz);
  let { x0: hX, y0: hQ, W: hA, H: i0, free: i1 } = hH;
  return (i2, i3) => {
    let i4 = Math.round(i2 - hX);
    let i5 = Math.round(i3 - hQ);
    if (i4 < 0 || i5 < 0 || i4 >= hA || i5 >= i0) {
      return true;
    } else {
      return !i1[i5 * hA + i4];
    }
  };
}
K(Vc, "ch4Pm");
var Vu = K((V) => {
  let y = c.char && c.char[V];
  return y > 0 && Number(c.hp && c.hp[y]) >= 1;
}, "alive");
function VR(V) {
  let y = c.char ? o(V) : -1;
  if (y < 0) {
    return c.customTeam === 1;
  }
  let hK = w.first("obj_battlecontroller");
  if (hK && hK.havechar && hK.havechar[y] !== 1) {
    return false;
  } else {
    return Number(c.hp && c.hp[c.char[y]]) > 0;
  }
}
K(VR, "charUp");
function VM(V, y) {
  let hK = (c.actactor && c.actactor[V] && c.actactor[V][y]) | 0;
  return (
    ((hK !== 2 && hK !== 4) || !!VR(2)) &&
    ((hK !== 3 && hK !== 4) || !!VR(3)) &&
    (hK !== 5 || !!VR(4))
  );
}
K(VM, "actPressable");
var Vm = K((V, y) => {
  let hK = (c.actname && c.actname[V]) || [];
  for (let hz = 0; hz < 6; hz++) {
    if (hK[hz] === y && c.canact[V] && c.canact[V][hz] === 1 && VM(V, hz)) {
      return hz;
    }
  }
  return -1;
}, "actIndex");
var VY = K((V, y) => {
  let hK = (c.battlespellname && c.battlespellname[V]) || [];
  for (let hz = 0; hz < hK.length; hz++) {
    if (hK[hz] === y && c.battlespell[V] && c.battlespell[V][hz] !== 0) {
      return hz;
    }
  }
  return -1;
}, "techIndex");
var VI = K((V, y) => Number((c.battlespellcost[V] || [])[y]) || 0, "techCost");
function VZ() {
  for (let V = 0; V < 3; V++) {
    if (c.monster && c.monster[V] === 1) {
      return V;
    }
  }
  return -1;
}
K(VZ, "firstMonster");
function Vj(V, y) {
  let hK = c.char.indexOf(1);
  if (hK < 0 || Vu(hK)) {
    return null;
  }
  for (let hz of ["WakeKris", "ReviveKris"]) {
    let hH = VY(V, hz);
    if (hH >= 0 && VI(V, hH) <= c.tension) {
      return {
        main: 1,
        tech: hH,
        target: y,
      };
    }
  }
  return null;
}
K(Vj, "reviveKris");
function VL(V) {
  let y = w.first("obj_jackenstein_enemy");
  if (!y) {
    return null;
  }
  let hK = y.myself | 0;
  if (c.char[V] !== 1) {
    return {
      main: 0,
    };
  }
  let hz = Vm(hK, "Unleash");
  if (hz >= 0 && c.tension >= (c.actcost[hK][hz] || 0) && y.unleash !== 1) {
    return {
      main: 1,
      act: "Unleash",
      target: hK,
    };
  } else {
    return {
      main: 0,
    };
  }
}
K(VL, "jackPlan");
function Vf(V) {
  let y = w.first("obj_titan_enemy");
  if (!y) {
    return null;
  }
  let hK = y.myself | 0;
  if (c.char[V] !== 1) {
    return (
      Vj(V, hK) || {
        main: 0,
      }
    );
  }
  if (
    (y.dualbusterenabled || y.susiesideaenabled) &&
    c.canact[hK] &&
    c.canact[hK][0] === 1 &&
    VM(hK, 0) &&
    c.tension >= ((c.actcost[hK] || [])[0] || 0)
  ) {
    return {
      main: 1,
      actIdx: 0,
      target: hK,
    };
  }
  let hz = Vm(hK, "Unleash");
  if (hz >= 0 && !y.unleashed && c.tension >= (c.actcost[hK][hz] || 200)) {
    return {
      main: 1,
      act: "Unleash",
      target: hK,
    };
  }
  let hH = false;
  for (let hQ = 0; hQ < 3; hQ++) {
    let hA = c.char[hQ];
    if (hA > 0 && Number(c.hp[hA]) < Number(c.maxhp[hA]) * 0.35) {
      hH = true;
    }
  }
  let hX = Vm(hK, "DualHeal");
  if (hH && hX >= 0 && c.tension >= (c.actcost[hK][hX] || 40)) {
    return {
      main: 1,
      act: "DualHeal",
      target: hK,
    };
  } else {
    return {
      main: 0,
    };
  }
}
K(Vf, "titanPlan");
function VD(V) {
  if (!w.first("obj_titan_spawn_enemy")) {
    return null;
  }
  if (c.char[V] !== 1) {
    return (
      Vj(V, VZ()) || {
        main: 0,
      }
    );
  }
  for (let y = 0; y < 3; y++) {
    if (c.monster[y] !== 1) {
      continue;
    }
    let hK = Vm(y, "Banish");
    if (hK >= 0 && c.tension >= (c.actcost[y][hK] || 160)) {
      return {
        main: 1,
        act: "Banish",
        target: y,
      };
    }
  }
  return {
    main: 0,
  };
}
K(VD, "spawnPlan");
function VO(V) {
  for (let y = 0; y < 3; y++) {
    if (c.monster[y] === 1 && Number(c.mercymod && c.mercymod[y]) >= 100) {
      return {
        main: 3,
        target: y,
      };
    }
  }
  return null;
}
K(VO, "sparePlan");
function Vx(V) {
  let y = VL(V) || Vf(V) || VD(V);
  if (y) {
    return VO(V) || y;
  } else {
    return null;
  }
}
K(Vx, "commandPlan");
function Vr() {
  if (
    !V1 ||
    c.chapter !== 4 ||
    c.fighting !== 1 ||
    c.mnfight !== 0 ||
    c.myfight !== 0 ||
    c.battleover
  ) {
    return null;
  }
  let V = c.charturn;
  if (!(V >= 0) || !(V < 3) || !c.char || !(c.char[V] > 0)) {
    return null;
  }
  let y = Vx(V);
  if (!y) {
    return null;
  }
  if ((w.frame | 0) % 3 !== 0) {
    return "";
  }
  let hK = c.bmenuno;
  let hz = c.bmenucoord;
  if (!hz) {
    return null;
  }
  let hH = (hX) => (hz[hX] ? hz[hX][V] | 0 : 0);
  if (hK === 0) {
    let hX = hH(0);
    if (hX === y.main) {
      return "b1";
    } else if ((y.main - hX + 5) % 5 <= 2) {
      return "right";
    } else {
      return "left";
    }
  }
  if (hK === 11 || hK === 12 || hK === 13 || hK === 1 || hK === 3) {
    let hQ = y.target === undefined || y.target < 0 ? hH(hK) : y.target;
    if (hH(hK) !== hQ && c.monster[hQ] === 1) {
      return "down";
    } else {
      return "b1";
    }
  }
  if (hK === 9) {
    let hA = y.actIdx !== undefined ? y.actIdx : y.act ? Vm(hH(11), y.act) : -1;
    if (hA < 0) {
      return "b1";
    }
    let i0 = hH(9);
    if (i0 === hA) {
      return "b1";
    } else if (i0 >> 1 === hA >> 1) {
      if (i0 & 1) {
        return "left";
      } else {
        return "right";
      }
    } else if (i0 < hA) {
      return "down";
    } else {
      return "up";
    }
  }
  if (hK === 2) {
    let i1 = y.tech;
    if (i1 === undefined || i1 < 0) {
      return "b1";
    }
    let i2 = hH(2);
    if (i2 === i1) {
      return "b1";
    } else if (i2 >> 1 === i1 >> 1) {
      return "right";
    } else if (i2 < i1) {
      return "down";
    } else {
      return "up";
    }
  }
  if (hK === 7 || hK === 8) {
    let i3 = y.hero === undefined ? hH(hK) : y.hero;
    if (hH(hK) !== i3) {
      return "down";
    } else {
      return "b1";
    }
  }
  return null;
}
K(Vr, "ch4MenuAction");
function VC() {
  let V = w.first("obj_heart");
  if (!V) {
    return {
      l: 0,
      t: 0,
      r: 16,
      b: 16,
    };
  }
  let y = Z(V);
  return {
    l: y[0] - V.x,
    t: y[1] - V.y,
    r: y[2] + 1 - V.x,
    b: y[3] + 1 - V.y,
  };
}
K(VC, "soulBoxRel");
function VB(V) {
  if (!V1 || c.chapter !== 4) {
    return;
  }
  if (V.constructor.name === "obj_mizzle_spotlight") {
    let y = w.first("obj_mizzle_spotlight_controller_b");
    let hK = w.first("obj_mizzle_spotlight_controller");
    if ((y && y.alert) || (hK && hK.alert)) {
      return null;
    }
    if (y) {
      let hz = VC();
      let hH = 30;
      let hX = V.x - 10 - hH;
      let hQ = V.x - 10 + hH;
      let hA = V.y - 10 - hH;
      let i0 = V.y - 10 + hH;
      return [
        {
          rect: [hX + hz.r - 1, hA + hz.b - 1, hQ + hz.l + 1, i0 + hz.t + 1],
          blue: false,
        },
      ];
    }
    if (hK) {
      return [
        {
          mask: true,
          blue: false,
        },
      ];
    } else {
      return null;
    }
  }
}
K(VB, "ch4Shapes");
z();
z();
var Vb = ["up", "down", "left", "right", "b1"];
var Vd = {
  move: null,
  frame: -9,
  held: "",
};
function Vw() {
  Vd.move = null;
  Vd.frame = -9;
  Vd.held = "";
}
K(Vw, "climbAutoReset");
function Vp() {
  return !!c.autoplay && w.exists("__roomhost") && !!w.first("obj_climb_kris");
}
K(Vp, "climbAutoActive");
function Vq(V) {
  let hK = w.first("obj_rotating_tower_controller_new");
  let hz = hK && hK.horizontaltilecount > 0 ? Math.round(hK.horizontaltilecount) : 22;
  let hH = (i9, iV) => [((Math.floor(i9 / 40) % hz) + hz) % hz, Math.floor(iV / 40)];
  let [hX, hQ] = hH(V.x - 20, V.y - 20);
  let hA = new Set();
  for (let i9 of w.all("obj_climb_enemy")) {
    if (i9.destroyed || i9.active === 0 || i9.damagecon === 3) {
      continue;
    }
    let iV = Z(i9);
    if (iV) {
      for (let iy = Math.floor((iV[1] + 14) / 40); iy <= Math.floor((iV[3] - 14) / 40); iy++) {
        hA.add(iy);
      }
    }
  }
  let i0 = (iJ, iP) => iJ + "," + iP;
  let i1 = new Set();
  let i2 = new Set();
  for (let iJ of w.all("obj_climb_climbable")) {
    let iP = Z(iJ);
    if (iP) {
      for (let ia = Math.floor(iP[1] / 40); ia <= Math.floor(iP[3] / 40); ia++) {
        for (let il = Math.floor(iP[0] / 40); il <= Math.floor(iP[2] / 40); il++) {
          let ih = i0(((il % hz) + hz) % hz, ia);
          i2.add(ih);
          if (!hA.has(ia)) {
            i1.add(ih);
          }
        }
      }
    }
  }
  let i3 = w
    .all("obj_climb_boostenemy")
    .filter((ii) => ii.y < V.y + 10 && !ii.destroyed && ii.damagecon !== 3)
    .sort((ii, ig) => ig.y - ii.y)[0];
  let i4 = i3 ? hH(i3.x, i3.y)[1] : null;
  let i5 = (ii, ig) => {
    for (let iS = 3; iS >= 1; iS--) {
      if (i2.has(i0(ii, ig - iS))) {
        return iS;
      }
    }
    return 0;
  };
  let i6 = V.jumping || V.fallingcon || V.boosting || V.climbcon;
  if (!Vd.move && !i6) {
    let ii = new Map([[i0(hX, hQ), null]]);
    let ig = [[hX, hQ]];
    let iS = null;
    for (let ik = 0; ik < ig.length; ik++) {
      let [iF, iN] = ig[ik];
      if (i3 ? iN > i4 && iN <= i4 + 3 && i5(iF, iN) >= iN - i4 : iN <= hQ - 20) {
        iS = [iF, iN];
        break;
      }
      let iW = [
        [(iF + 1) % hz, iN, "right"],
        [(iF + hz - 1) % hz, iN, "left"],
        [iF, iN - 1, "up"],
        [iF, iN + 1, "down"],
        [iF, iN - 2, "j2"],
        [iF, iN - 3, "j3"],
      ];
      for (let [iT, iU, iG] of iW) {
        let iE = i0(iT, iU);
        if (
          !ii.has(iE) &&
          !!i1.has(iE) &&
          (iG !== "j2" || !i1.has(i0(iF, iN - 1))) &&
          (iG !== "j3" || (!i1.has(i0(iF, iN - 1)) && !i1.has(i0(iF, iN - 2))))
        ) {
          ii.set(iE, [iF, iN, iG]);
          ig.push([iT, iU]);
        }
      }
    }
    let it = null;
    if (iS) {
      let iv = iS;
      let ic = null;
      while (ii.get(i0(iv[0], iv[1]))) {
        ic = ii.get(i0(iv[0], iv[1]));
        if (ic[0] === hX && ic[1] === hQ) {
          it = ic[2];
          break;
        }
        iv = [ic[0], ic[1]];
      }
      if (!it && i3 && iS[0] === hX && iS[1] === hQ) {
        it = "boost";
      }
    }
    Vd.move = it
      ? {
          how: it,
          t: 0,
          from: [hX, hQ],
          n: it === "boost" ? i5(hX, hQ) : 0,
        }
      : {
          how: "up",
          t: 0,
          from: [hX, hQ],
        };
  }
  let i7 = new Set();
  let i8 = Vd.move;
  if (i8) {
    i8.t++;
    if (i8.how === "left" || i8.how === "right" || i8.how === "up" || i8.how === "down") {
      i7.add(i8.how);
      if (hX !== i8.from[0] || hQ !== i8.from[1] || i8.t > 30) {
        Vd.move = null;
        i7.clear();
      }
    } else {
      let iu = i8.how === "j2" ? 2 : i8.how === "j3" ? 3 : Math.max(1, Math.min(3, i8.n));
      let io = iu === 1 ? 4 : iu === 2 ? 14 : 26;
      i7.add("up");
      if (i8.t <= io) {
        i7.add("b1");
      }
      if (i8.t > io + 40 && !i6) {
        Vd.move = null;
        i7.clear();
      }
    }
  }
  return i7;
}
K(Vq, "plan");
function VK() {
  if (!Vp()) {
    if (Vd.move || Vd.held) {
      Vw();
    }
    return false;
  }
  let V = w.first("obj_climb_kris");
  if (w.frame !== Vd.frame + 1) {
    Vd.move = null;
    Vd.held = "";
  }
  Vd.frame = w.frame;
  let y = Vq(V);
  let hK = Vd.held;
  let hz = Vb.filter((hH) => y.has(hH)).join(",");
  Vd.held = hz;
  for (let hH of Vb) {
    r.held[hH] = y.has(hH);
  }
  r.synthetic = () => {
    let hX = hK ? hK.split(",") : [];
    for (let hQ of Vb) {
      let hA = y.has(hQ);
      let i0 = hX.includes(hQ);
      r.held[hQ] = hA;
      r.pressed[hQ] = hA && !i0;
      if (!hA && i0) {
        r.released[hQ] = true;
      }
    }
  };
  return true;
}
K(VK, "climbAutoStep");
var Vz = K(() => c.chapter === 5 && !globalThis.__ch5Off, "ch5");
var VH = K(() => (Vz() ? c.encounterno | 0 : 0), "enc");
var VX = {
  lastTurnMenu: -1,
  rc: null,
  rcI: 0,
  rcN: 0,
  rcHeld: "",
  rcFrame: -9,
  rcCool: 0,
  rcCleanUntil: 0,
};
var VQ = {
  menuPresses: 0,
  plans: {},
  shapes: {},
  goals: 0,
  rcDecisions: 0,
  rcRollouts: 0,
  rcFrames: 0,
  rcMs: 0,
  rcKinds: {},
};
function VA() {
  return {
    ...VX,
    rc: VX.rc ? VX.rc.slice() : null,
  };
}
K(VA, "ch5SaveState");
function y0(V, y, hK) {
  return J4(hK - 20, y);
}
function y1(V) {
  if (V) {
    Object.assign(VX, V);
    VX.rc = V.rc ? V.rc.slice() : null;
  } else {
    y2();
  }
}
K(y1, "ch5LoadState");
function y2() {
  VX.lastTurnMenu = -1;
  VX.rc = null;
  VX.rcI = 0;
  VX.rcN = 0;
  VX.rcHeld = "";
  VX.rcFrame = -9;
  VX.rcCool = 0;
  VX.rcCleanUntil = 0;
}
K(y2, "ch5ResetState");
function y3() {
  return (
    "ch5 " +
    VX.lastTurnMenu +
    " rc " +
    (VX.rc ? VX.rc.length : "-") +
    "/" +
    VX.rcI +
    "/" +
    VX.rcN +
    " " +
    VX.rcHeld +
    " " +
    VX.rcFrame +
    " " +
    (VX.rcCool | 0)
  );
}
K(y3, "ch5Digest");
var y4 = K((V, y) => {
  V[y] = (V[y] || 0) + 1;
}, "bump");
function y5() {
  let V = w.first("obj_heart");
  let y =
    V &&
    (typeof V.mask_index == "number" && V.mask_index < 0
      ? V.sprite_index
      : V.mask_index || V.sprite_index);
  let hK = y && f[y];
  if (!V || !hK || !hK.bb) {
    return {
      l: 0,
      t: 0,
      r: 16,
      b: 16,
    };
  }
  let hz = V.image_xscale || 1;
  let hH = V.image_yscale || 1;
  return {
    l: (hK.bb[0] - hK.ox) * hz,
    t: (hK.bb[1] - hK.oy) * hH,
    r: (hK.bb[2] + 1 - hK.ox) * hz,
    b: (hK.bb[3] + 1 - hK.oy) * hH,
  };
}
K(y5, "soulBox");
function y6(V) {
  if (!Vz()) {
    return;
  }
  let y = V.constructor.name;
  if (y === "obj_sheary_smashcutter") {
    if ((V.timer | 0) !== 48) {
      return null;
    }
    let hK = y5();
    y4(VQ.shapes, y);
    return [
      {
        rect: [0, V.y - 12 + hK.b - 1, 640, V.y + 12 + hK.t + 1],
        blue: false,
      },
    ];
  }
  if (y === "obj_bullet_knife" && (V.netskie === 1 || V.netskie === true)) {
    return null;
  }
  if (y === "obj_purple_aim_attack") {
    let hz = V.alarm ? Number(V.alarm[0]) : -1;
    if (
      (V.state === "attack" && (V.countdown | 0) >= 25) ||
      (V.state === "idle" && hz >= 24 && hz <= 25)
    ) {
      y4(VQ.shapes, y);
      return [
        {
          mask: true,
          blue: false,
        },
      ];
    } else {
      return null;
    }
  }
}
K(y6, "ch5Shapes");
function y7() {
  if (!Vz() || globalThis.__ch5NoGoal) {
    return null;
  }
  if (VH() === 229) {
    let V = [];
    let y = y5();
    for (let hK of w.list) {
      if (
        !hK.destroyed &&
        hK.constructor.name === "obj_bullet_knife" &&
        (hK.netskie === 1 || hK.netskie === true) &&
        !!hK.active
      ) {
        V.push({
          rect: [hK.x - 8 - y.r, hK.y - 8 - y.b, hK.x + 8 - y.l, hK.y + 8 - y.t],
          w: 30,
        });
      }
    }
    if (V.length) {
      return V;
    } else {
      return null;
    }
  }
  return null;
}
K(y7, "ch5Goals");
function y8() {
  if (Vz() && VH() === 234) {
    let V = w.first("obj_growtangle");
    if (V && !V.destroyed && typeof V.keep_function == "function") {
      let y = Number(V.box_extra) || 0;
      return [V.x - 70, V.x + 52, V.y - (y + 70), V.y + 52];
    }
  }
}
K(y8, "ch5Clamp");
function y9(V) {
  if (Vz()) {
    if (yV()) {
      return null;
    } else {
      return undefined;
    }
  }
}
K(y9, "ch5SoulKind");
function yV() {
  if (!Vz() || globalThis.__ch5NoRC) {
    return null;
  }
  let V = w.first("obj_orangeheart");
  if (V && !V.destroyed) {
    return "orange";
  }
  let y = w.first("obj_purplecontrols");
  if (y && !y.destroyed && w.first("obj_heart")) {
    return "purple";
  } else {
    return null;
  }
}
K(yV, "rcKind");
var yy = null;
function yJ() {
  if (yy) {
    return yy;
  }
  let V = v(b);
  let y = V.ctx;
  try {
    Object.defineProperty(V, "ctx", {
      get: () => y,
      set: () => {},
      configurable: true,
    });
  } catch {}
  return (yy = V);
}
K(yJ, "gfx5");
var yP = {
  u: "up",
  d: "down",
  l: "left",
  r: "right",
  z: "b1",
};
var ya = ["up", "down", "left", "right", "b1"];
function yl(V) {
  let y = {};
  for (let hK of V || "") {
    if (yP[hK]) {
      y[yP[hK]] = true;
    }
  }
  return y;
}
K(yl, "keysOf");
function yh(V, y) {
  let hK = yl(V);
  let hz = yl(y);
  return () => {
    for (let hH of ya) {
      let hX = !!hK[hH];
      let hQ = !!hz[hH];
      r.held[hH] = hX;
      r.pressed[hH] = hX && !hQ;
      if (!hX && hQ) {
        r.released[hH] = true;
      }
    }
  };
}
K(yh, "applyKeys");
var yi = K(() => {
  if (typeof c.hp == "number") {
    return c.hp;
  }
  let V = 0;
  for (let y of [1, 2, 3]) {
    let hK = Number(c.hp && c.hp[y]);
    if (Number.isFinite(hK)) {
      V += hK;
    }
  }
  return V;
}, "partyHP");
function yg() {
  let V = w.first("obj_tensionbar");
  return (V && Number(V.maxtensionlimit)) || 0;
}
K(yg, "tensionCap");
var yn = 0;
var yS = 0;
function yk(V, hK, hz, hH) {
  let hX = r.synthetic;
  let hQ = {};
  for (let it of ya) {
    hQ[it] = r.held[it];
  }
  let hA = yi();
  let i0 = Number(c.tension) || 0;
  let i1 = yg();
  let i2 = c.mnfight;
  let i3 = hH === "orange" ? w.first("obj_debug_orangeheartcontroller") : null;
  let i4 = i3 && i3.scrolling ? 1 : 0;
  let i5 = hH === "orange" ? w.number("obj_orangeheart_wall") : 0;
  let i6 = hH === "purple" ? w.first("obj_purplecontrols") : null;
  let i7 = (i6 && Number(i6.difficulty)) || 0;
  let i8 = (i6 && Number(i6.pattern_phase)) || 0;
  let i9 = i6 && i6.mode === 8 && (i6.difficulty | 0) === 3;
  let iV = () => {
    let ik = w.first("obj_purplecontrols");
    if (ik) {
      return w.all("obj_pinknode").indexOf(ik.node_id);
    } else {
      return -1;
    }
  };
  let iy = i9 ? iV() : -1;
  let iJ =
    hH === "purple"
      ? w.all("obj_pinknodeact").filter((ik) => !ik.destroyed && ik.mode === 1).length
      : 0;
  let iP = (ik) =>
    w
      .all("obj_pinknodeact")
      .filter((iF) => !iF.destroyed && iF.mode === ik && (Number(iF.timer) || 0) >= 0).length;
  let ia = hH === "purple" ? iP(1) : 0;
  let il = hH === "purple" ? iP(0) : 0;
  let ih = 0;
  let ii = VX.rcHeld;
  let ig = 0;
  yn = 0;
  let iS = I();
  p(false);
  q();
  try {
    for (let ik = 0; ik < hz; ik++) {
      let iF = hK[ik] !== undefined ? hK[ik] : "";
      r.synthetic = yh(iF, ii);
      try {
        C(U, yJ());
      } catch {
        break;
      }
      ig++;
      ii = iF;
      if (globalThis.__ch5trace) {
        let iW = w.first("obj_orangeheart") || w.first("obj_heart");
        globalThis.__ch5trace.push(
          (iW
            ? Math.round(iW.x) +
              "," +
              Math.round(iW.y) +
              (iW.chargecon !== undefined ? " c" + iW.chargecon + "/" + iW.chargetimer : "")
            : "-") +
            " hp" +
            yi() +
            " n" +
            w.list.length +
            " r" +
            (d.state % 1000),
        );
      }
      let iN = yi();
      if (iN < hA) {
        ih += (hA - iN) * (10 + ((hz - ik) * 10) / hz);
        yn = hA - iN;
        break;
      }
      if (c.battleover || c.mnfight !== i2) {
        break;
      }
    }
    ih -= Math.max(0, (Number(c.tension) || 0) - i0) * 0.5;
    ih -= Math.max(0, yg() - i1) * 2;
    if (hH === "purple") {
      let iT = w.first("obj_purplecontrols");
      if (iT) {
        ih -= Math.max(0, (Number(iT.difficulty) || 0) - i7) * 300;
      }
      if (iT && (Number(iT.difficulty) || 0) === i7) {
        ih -= Math.max(0, (Number(iT.pattern_phase) || 0) - i8) * 150;
      }
      if (i9 && iy >= 0) {
        let iG = iV();
        if (iG >= 0) {
          ih -= (iG - iy) * 5;
        }
      }
      ih -=
        Math.max(
          0,
          w.all("obj_pinknodeact").filter((iE) => !iE.destroyed && iE.mode === 1).length - iJ,
        ) * 100;
      ih -= Math.max(0, iP(1) - ia) * 300;
      ih += Math.max(0, iP(0) - il) * 300;
      let iU = w.first("obj_heart");
      if (iU) {
        let iE = Infinity;
        for (let iv of w.all("obj_dokiheart")) {
          if (!iv.destroyed) {
            iE = Math.min(iE, Math.hypot(iv.x - (iU.x + 9), iv.y - (iU.y + 9)));
          }
        }
        if (iE === Infinity) {
          for (let ic of w.all("obj_pinknodeact")) {
            if (!ic.destroyed && ic.mode === 1 && ic.active === 1) {
              iE = Math.min(iE, Math.hypot(ic.x - (iU.x + 9), ic.y - (iU.y + 9)));
            }
          }
        }
        if (iE < Infinity) {
          ih += Math.min(iE, 300) * 0.1;
        }
      }
      if (iT && (iT.mode | 0) === 1) {
        ih += Math.abs(Number(iT.x_ongrid) || 0) * 0.04;
      }
    }
    if (hH === "orange" && i3) {
      let iu = w.first("obj_debug_orangeheartcontroller");
      if (iu && iu.scrolling && !i4) {
        ih -= 200;
      }
      ih -= Math.max(0, i5 - w.number("obj_orangeheart_wall")) * 20;
      let io = w.first("obj_orangeheart");
      if (io && io.chargecon === 1) {
        ih += 3;
      }
      let iR = w.first("obj_orangeheart_chaseattack");
      if (io && iR && !iR.destroyed && (iR.state | 0) === 0) {
        let iM = io.bbox_left + 5 - iR.bbox_right;
        if (iM < 200) {
          ih += (200 - Math.max(0, iM)) * 0.4;
        }
      }
      for (let im of hK) {
        if (im && im.includes("z")) {
          ih += 0.02;
        }
      }
    }
  } finally {
    E(V);
    m();
    p(iS);
    r.synthetic = hX;
    for (let iY of ya) {
      r.held[iY] = hQ[iY];
    }
  }
  VQ.rcRollouts++;
  VQ.rcFrames += ig;
  yS = ig;
  return ih;
}
K(yk, "rollout");
var yF = K(
  (V, y) =>
    Array.from(
      {
        length: y,
      },
      () => V,
    ),
  "rep",
);
function yN(V, y, hK, hz = 0) {
  let hH = yF("", y);
  let hX = hz;
  for (let hQ of V) {
    if (hX < y) {
      hH[hX] = hQ;
    }
    hX += hK;
  }
  return hH;
}
K(yN, "taps");
function yW(V, y) {
  let hK = [];
  hK.push(yF("", y));
  if (V === "purple") {
    let hz = w.first("obj_purplecontrols");
    let hH = hz ? hz.mode | 0 : 1;
    if (hH === 0) {
      for (let hX of ["u", "d", "l", "r", "ul", "ur", "dl", "dr"]) {
        hK.push(yF(hX, y), [...yF(hX, 6), ...yF("", y - 6)]);
      }
    } else if (hH === 1) {
      let hQ = hz.lane_y | 0;
      for (let hA = 0; hA <= 2; hA++) {
        for (let i0 of ["", "l", "r"]) {
          if (hA === hQ && !i0) {
            continue;
          }
          let i1 = [];
          for (let i2 = hQ; i2 !== hA; i2 += hA > hQ ? 1 : -1) {
            i1.push(hA > hQ ? "d" : "u");
          }
          hK.push(yN(i1, y, 4).map((i3) => i3 + i0));
          if (hA !== hQ && !i0) {
            hK.push(yN(i1, y, 4, 8));
          }
        }
      }
    } else if (hH === 2) {
      let i3 = hz.lane_x | 0;
      let i4 = hz.lane_y | 0;
      for (let i5 = 0; i5 <= 3; i5++) {
        for (let i6 = 0; i6 <= 3; i6++) {
          if (i5 === i3 && i6 === i4) {
            continue;
          }
          let i7 = [];
          for (let i9 = i3; i9 !== i5; i9 += i5 > i3 ? 1 : -1) {
            i7.push(i5 > i3 ? "r" : "l");
          }
          let i8 = [];
          for (let iV = i4; iV !== i6; iV += i6 > i4 ? 1 : -1) {
            i8.push(i6 > i4 ? "d" : "u");
          }
          hK.push(yN([...i7, ...i8], y, 3));
          if (i7.length && i8.length) {
            hK.push(yN([...i8, ...i7], y, 3));
          }
        }
      }
    } else {
      for (let iy of ["u", "d", "l", "r"]) {
        hK.push(yN([iy], y, 4), yN([iy], y, 4, 8));
        for (let iJ of ["u", "d", "l", "r"]) {
          hK.push(yN([iy, iJ], y, 4));
        }
      }
    }
    for (let iP of yE(hz)) {
      hK.push(iP);
    }
  } else if (V === "orange") {
    let ia = w.first("obj_orangeheart");
    let il = ia && ia.chargecon === 1;
    for (let ih of ["", "u", "d"]) {
      for (let ii of ih ? [6, y] : [y]) {
        let ig = [...yF(ih, ii), ...yF("", y - ii)];
        for (let iS of il ? [0, 6, 16] : ih ? [0, 17] : [0, 8, 17]) {
          if (!!ih || !!iS) {
            hK.push(ig.map((it, ik) => it + (ik < iS ? "z" : "")));
          }
        }
      }
    }
  }
  return hK;
}
K(yW, "candidates");
function yT(V) {
  let y = [];
  let hK = (hz) => {
    let hH = [];
    for (let [hX, hQ] of hz) {
      for (let hA = 0; hA < hQ; hA++) {
        hH.push(hX);
      }
    }
    while (hH.length < V) {
      hH.push("");
    }
    return hH.slice(0, Math.max(V, hH.length));
  };
  for (let hz of ["u", "d"]) {
    let hH = hz === "u" ? "d" : "u";
    for (let hX of [3, 9]) {
      y.push(
        hK([
          [hz, hX],
          ["z", 17],
        ]),
      );
      y.push(
        hK([
          [hz, hX],
          [hz + "z", 17],
        ]),
      );
    }
    y.push(hK([[hz + "z", 12]]));
    y.push(
      hK([
        [hz, 6],
        [hH, V - 6],
      ]),
    );
    y.push(
      hK([
        [hz, 4],
        ["", 8],
        [hz, 12],
      ]),
    );
  }
  for (let hQ of [4, 12]) {
    y.push(hK([["z", hQ]]));
  }
  y.push(
    hK([
      ["", 6],
      ["z", 17],
    ]),
  );
  return y;
}
K(yT, "rescueOrange");
function yU(V, y) {
  let hK = [];
  if (!V || (V.mode | 0) !== 1) {
    return hK;
  }
  let hz = V.lane_y | 0;
  let hH = [
    (hX) => (hX < 12 ? "l" : "r"),
    (hX) => (hX < 12 ? "r" : "l"),
    (hX) => (hX >= 16 ? "l" : ""),
    (hX) => (hX >= 16 ? "r" : ""),
  ];
  for (let hX = 0; hX <= 2; hX++) {
    for (let hQ of [6, 18]) {
      for (let hA of hH) {
        let i0 = [];
        for (let i2 = hz; i2 !== hX; i2 += hX > hz ? 1 : -1) {
          i0.push(hX > hz ? "d" : "u");
        }
        if (!i0.length && hQ === 18) {
          continue;
        }
        let i1 = yN(i0, y, 4, hQ);
        hK.push(i1.map((i3, i4) => i3 + hA(i4)));
      }
    }
  }
  return hK;
}
K(yU, "rescuePurple");
var yG = ["r", "u", "l", "d"];
function yE(V) {
  let hK = V && V.node_id;
  if (!hK || typeof hK != "object" || hK.destroyed || !Array.isArray(hK.child)) {
    return [];
  }
  let hz = yM.purple;
  let hH = [];
  for (let i3 of w.all("obj_dokiheart")) {
    if (!i3.destroyed) {
      hH.push([i3.x, i3.y]);
    }
  }
  if (!hH.length) {
    for (let i4 of w.all("obj_pinknodeact")) {
      if (!i4.destroyed && i4.mode === 1 && i4.active === 1 && (Number(i4.timer) || -1) < 0) {
        hH.push([i4.x, i4.y]);
      }
    }
  }
  let hX = !hH.length && V.mode === 8 && (V.difficulty | 0) === 3;
  if (!hH.length && !hX) {
    return [];
  }
  let hQ = new Map([[hK, null]]);
  let hA = [hK];
  while (hA.length) {
    let i5 = hA.shift();
    let i6 = 0;
    for (let i7 = i5; hQ.get(i7); i7 = hQ.get(i7).from) {
      i6++;
    }
    if (!(i6 >= (hX ? 12 : 8))) {
      for (let i8 = 0; i8 < 4; i8++) {
        let i9 = i5.child[i8];
        if (!!i9 && typeof i9 == "object" && !i9.destroyed && !hQ.has(i9)) {
          hQ.set(i9, {
            from: i5,
            dir: yG[i8],
          });
          hA.push(i9);
        }
      }
    }
  }
  let i0 = [];
  let i1 = (iV) => {
    let iy = 0;
    for (let iJ = iV; hQ.get(iJ); iJ = hQ.get(iJ).from) {
      iy++;
    }
    return iy;
  };
  let i2 = hX ? [null] : hH;
  for (let iV of i2) {
    let iy = null;
    let iJ = Infinity;
    if (iV) {
      for (let ih of hQ.keys()) {
        let ii = Math.hypot((ih.x || 0) - iV[0], (ih.y || 0) - iV[1]);
        if (ii < iJ) {
          iJ = ii;
          iy = ih;
        }
      }
    } else {
      let ig = w.all("obj_pinknode");
      let iS = ig.indexOf(hK);
      for (let it of hQ.keys()) {
        let ik = ig.indexOf(it);
        if (ik <= iS || ik > iS + 12) {
          continue;
        }
        let iF = -ik;
        if (iF < iJ) {
          iJ = iF;
          iy = it;
        }
      }
    }
    if (!iy || iy === hK) {
      continue;
    }
    let iP = [];
    for (let iN = iy; hQ.get(iN); iN = hQ.get(iN).from) {
      iP.unshift({
        dir: hQ.get(iN).dir,
        len: Math.hypot(
          (iN.x || 0) - (hQ.get(iN).from.x || 0),
          (iN.y || 0) - (hQ.get(iN).from.y || 0),
        ),
      });
    }
    let ia = {
      r: "l",
      l: "r",
      u: "d",
      d: "u",
    };
    let il = iP
      .slice()
      .reverse()
      .map((iW) => ({
        dir: ia[iW.dir],
        len: iW.len,
      }));
    for (let iW of [iP, [...iP, ...il]]) {
      let iT = iW.reduce((iU, iG) => iU + Math.ceil(iG.len / 22) + 2, 0);
      for (let iU = 0; iU <= 84; iU += 12) {
        let iG = Math.max(hz, iU + iT + 12);
        let iE = yF("", iG);
        let iv = iU;
        for (let ic of iW) {
          iE[iv] = ic.dir;
          iv += Math.ceil(ic.len / 22) + 2;
        }
        i0.push(iE);
      }
    }
  }
  return i0;
}
K(yE, "nodePaths");
var yv = 0;
function yc(V) {
  yv = Math.max(0, Number(V) || 0);
}
K(yc, "setCh5Budget");
function yu() {
  return yV();
}
K(yu, "ch5RolloutKind");
var yo = {
  purple: 6,
  orange: 6,
};
var yR = {
  purple: 4,
  orange: 3,
};
var yM = {
  purple: 48,
  orange: 24,
};
function ym() {
  for (let V of w.all("obj_writer")) {
    if (!V.destroyed && V.image_alpha !== 0 && (V.halt === 1 || V.halt === 2 || V.halt === 4)) {
      return true;
    }
  }
  return false;
}
K(ym, "writerParked");
function yY(V) {
  if (VK()) {
    return true;
  }
  let hK = yV();
  if (!hK || !c.autoplay) {
    if (VX.rc) {
      VX.rc = null;
      VX.rcI = 0;
    }
    return false;
  }
  if (c.mnfight !== 2 && hK !== "orange") {
    VX.rc = null;
    VX.rcHeld = "";
    return false;
  }
  let hz = yo[hK];
  let hH = yM[hK];
  if (w.frame !== VX.rcFrame + 1) {
    VX.rc = null;
  }
  VX.rcFrame = w.frame;
  if (!VX.rc || VX.rcI >= hz || VX.rcI >= VX.rc.length) {
    let i0 = performance.now();
    let i1 = G();
    let i2 = VX.rc ? VX.rc.slice(VX.rcI) : [];
    let i3 = i2.length
      ? [...i2, ...yF(i2[i2.length - 1].replace(/z/g, ""), Math.max(0, hH - i2.length))]
      : null;
    let i4 = null;
    let i5 = Infinity;
    let i6 = 0;
    if (yv > 0 && !!i3 && VX.rcN % yR[hK] !== 0 && w.frame + 12 <= (VX.rcCleanUntil | 0)) {
      i5 = 0;
      i4 = i3;
      i6 = 0;
      VQ.rcTrusted = (VQ.rcTrusted | 0) + 1;
    } else if (i3) {
      i5 = yk(i1, i3, Math.max(hH, i3.length), hK);
      i4 = i3;
      i6 = yn;
      VX.rcCleanUntil = i6 ? 0 : w.frame + yS;
    }
    let i7 = !i3 || i6 > 0 || VX.rcN % yR[hK] === 0;
    let i8 =
      globalThis.__ch5dbgRC &&
      w.frame >= globalThis.__ch5dbgRC[0] &&
      w.frame <= globalThis.__ch5dbgRC[1]
        ? []
        : null;
    if (i8 && i3) {
      i8.push("cont=" + i5.toFixed(0));
    }
    let i9 = i3 ? i6 : Infinity;
    let iV = () => performance.now() - i0;
    let iy = () =>
      yv > 0 && globalThis.__ch5Cut === true && (iV() > yv * 3 || (iV() > yv && i9 === 0));
    if (i7) {
      for (let iJ of yW(hK, hH)) {
        if (iy()) {
          VQ.rcCut = (VQ.rcCut | 0) + 1;
          break;
        }
        let iP = yk(i1, iJ, Math.max(hH, iJ.length), hK);
        if (iP < i5 - 1e-9) {
          i9 = yn;
          VX.rcCleanUntil = yn ? 0 : w.frame + yS;
        }
        if (i8) {
          i8.push(
            iJ
              .slice(0, 12)
              .map((ia) => ia || ".")
              .join("") +
              "=" +
              iP.toFixed(0),
          );
        }
        if (iP < i5 - 1e-9) {
          i5 = iP;
          i4 = iJ;
        }
      }
      if (VX.rcCool > 0) {
        VX.rcCool--;
      } else if (i5 >= 300) {
        for (let ia of hK === "orange" ? yT(hH) : yU(w.first("obj_purplecontrols"), hH)) {
          if (iy()) {
            VQ.rcCut = (VQ.rcCut | 0) + 1;
            break;
          }
          let il = yk(i1, ia, Math.max(hH, ia.length), hK);
          if (il < i5 - 1e-9) {
            i9 = yn;
            VX.rcCleanUntil = yn ? 0 : w.frame + yS;
          }
          if (i8) {
            i8.push(
              "R" +
                ia
                  .slice(0, 12)
                  .map((ih) => ih || ".")
                  .join("") +
                "=" +
                il.toFixed(0),
            );
          }
          if (il < i5 - 1e-9) {
            i5 = il;
            i4 = ia;
          }
        }
        if (i5 >= 300) {
          VX.rcCool = 3;
        }
      }
    }
    if (i8) {
      let ih = w.first("obj_purplecontrols");
      let ii = w.first("obj_heart");
      console.log(
        "RC f" +
          w.frame +
          " " +
          hK +
          (ih
            ? " mode " +
              ih.mode +
              " lane " +
              ih.lane_x +
              "," +
              ih.lane_y +
              " og " +
              ih.x_ongrid +
              "," +
              ih.y_ongrid
            : "") +
          " soul " +
          (ii ? Math.round(ii.x) + "," + Math.round(ii.y) : "-") +
          " best " +
          i4
            .slice(0, 12)
            .map((ig) => ig || ".")
            .join("") +
          "=" +
          i5.toFixed(0) +
          " | " +
          i8.join(" "),
      );
    }
    if (globalThis.__ch5verify && i4) {
      globalThis.__ch5trace = [];
      yk(i1, i4, Math.max(hH, i4.length), hK);
      globalThis.__ch5pred = {
        frame: w.frame,
        trace: globalThis.__ch5trace,
        plan: i4.slice(),
      };
      globalThis.__ch5trace = null;
    }
    if (i8 && i4) {
      globalThis.__ch5trace = [];
      yk(i1, i4, Math.max(hH, i4.length), hK);
      console.log("RCPRED f" + w.frame + " " + globalThis.__ch5trace.join(" | "));
      globalThis.__ch5trace = null;
    }
    if (i8 && i3) {
      globalThis.__ch5trace = [];
      yk(i1, i3, Math.max(hH, i3.length), hK);
      console.log("RCCONT f" + w.frame + " " + globalThis.__ch5trace.join(" | "));
      globalThis.__ch5trace = null;
    }
    VX.rc = i4;
    VX.rcI = 0;
    VX.rcN++;
    VQ.rcDecisions++;
    VQ.rcMs += performance.now() - i0;
    y4(VQ.rcKinds, hK);
  }
  let hX = VX.rc[VX.rcI++] || "";
  if (hK === "orange" && c.mnfight !== 2 && ym()) {
    hX = w.frame & 1 ? hX.replace(/z/g, "") : hX.includes("z") ? hX : hX + "z";
  }
  let hQ = yh(hX, VX.rcHeld);
  VX.rcHeld = hX;
  r.synthetic = hQ;
  let hA = yl(hX);
  for (let ig of ["up", "down", "left", "right"]) {
    r.held[ig] = !!hA[ig];
  }
  r.held.b1 = !!hA.b1;
  return true;
}
K(yY, "ch5Step");
var yI = ["left", "right", "up", "down"];
function yZ(V) {
  let y = V || {};
  for (let hK of ["b1", "b2", "b3"]) {
    r.held[hK] = !!y[hK];
  }
  r.synthetic = () => {
    for (let hz of ["b1", "b2", "b3"]) {
      r.pressed[hz] = !!y[hz];
      r.held[hz] = !!y[hz];
    }
    for (let hH of yI) {
      if (y[hH]) {
        r.pressed[hH] = true;
        r.held[hH] = true;
      }
    }
  };
  if (V) {
    VQ.menuPresses++;
  }
}
K(yZ, "send");
var yj = {
  fight: 0,
  act: 1,
  magic: 1,
  tech: 1,
  item: 2,
  spare: 3,
  defend: 4,
};
function yL(V) {
  for (let y = 0; y < 3; y++) {
    let hK = c.monsterinstance && c.monsterinstance[y];
    if (c.monster[y] === 1 && hK && !hK.destroyed && hK.constructor.name === V) {
      return y;
    }
  }
  return -1;
}
K(yL, "slotOf");
function yf(V, y) {
  let hK = (c.actname && c.actname[V]) || [];
  for (let hz = 0; hz < 6; hz++) {
    if (hK[hz] === y) {
      return hz;
    }
  }
  return -1;
}
K(yf, "actIndex");
function yD(V, y) {
  let hK = c.char[V];
  if (c.bmenucoord) {
    c.bmenucoord[13];
  }
  let hz = 0;
  let hH = (c.battlespell && c.battlespell[V]) || [];
  let hX = hK === 2 ? c.actnamesus : hK === 3 ? c.actnameral : null;
  if (!hX) {
    return -1;
  }
  for (let hQ = 0; hQ < 3; hQ++) {
    let hA = hX[hQ] || [];
    let i0 = 0;
    for (let i1 = 0; i1 < hH.length; i1++) {
      if (hH[i1] === -1) {
        while (i0 < 6 && (!hA[i0] || hA[i0] === " ")) {
          i0++;
        }
        if (hA[i0] === y) {
          return i1;
        }
        i0++;
      }
    }
  }
  return -1;
}
K(yD, "techSlot");
var yO = K(
  () =>
    c.fighting === 1 &&
    c.mnfight === 0 &&
    c.myfight === 0 &&
    c.charturn >= 0 &&
    c.charturn < (c.char ? c.char.length : 3) &&
    c.char[c.charturn] > 0,
  "atMenu",
);
function yx(V) {
  let y = c.charturn;
  let hK = c.bmenuno;
  let hz = c.bmenucoord;
  let hH = (hQ) => (hz && hz[hQ] ? hz[hQ][y] | 0 : 0);
  if (hK === 0) {
    let hQ = hH(0);
    let hA = yj[V.cmd];
    if (hQ !== hA) {
      return {
        [(hA - hQ + 5) % 5 <= 2 ? "right" : "left"]: true,
      };
    } else {
      return {
        b1: true,
      };
    }
  }
  let hX =
    V.cmd === "fight"
      ? 1
      : V.cmd === "spare"
        ? 12
        : V.cmd === "act"
          ? 11
          : V.cmd === "tech"
            ? 13
            : -1;
  if (hK === 1 || hK === 11 || hK === 12 || hK === 13) {
    if (hK !== hX) {
      return {
        b2: true,
      };
    } else if (hH(hK) !== (V.target | 0)) {
      return {
        down: true,
      };
    } else {
      return {
        b1: true,
      };
    }
  }
  if (hK === 9) {
    if (V.cmd !== "act") {
      return {
        b2: true,
      };
    }
    let i0 = hH(9);
    let i1 = V.act | 0;
    if (i0 === i1) {
      return {
        b1: true,
      };
    } else if (i0 >> 1 === i1 >> 1) {
      return {
        [i0 & 1 ? "left" : "right"]: true,
      };
    } else {
      return {
        [i0 < i1 ? "down" : "up"]: true,
      };
    }
  }
  if (hK === 2) {
    if (V.cmd !== "tech") {
      return {
        b2: true,
      };
    }
    let i2 = hH(2);
    let i3 = V.slot | 0;
    if (i2 === i3) {
      return {
        b1: true,
      };
    } else if (i2 >> 1 === i3 >> 1) {
      return {
        right: true,
      };
    } else {
      return {
        [i2 < i3 ? "down" : "up"]: true,
      };
    }
  }
  return {
    b2: true,
  };
}
K(yx, "drive");
function yC(V) {
  let y = VH();
  let hK = c.char[V];
  let hz = Number(c.tension) || 0;
  let hH = (hQ, hA) => {
    let i0 = yL(hQ);
    let i1 = i0 >= 0 ? yf(i0, hA) : -1;
    if (i1 < 0 || (c.actcost[i0][i1] || 0) > hz) {
      return null;
    } else {
      return {
        cmd: "act",
        target: i0,
        act: i1,
        name: hA,
      };
    }
  };
  let hX = (hQ, hA) => {
    let i0 = yL(hQ);
    let i1 = yD(V, hA);
    if (i0 < 0 || i1 < 0 || (((c.battlespellcost && c.battlespellcost[V]) || [])[i1] || 0) > hz) {
      return null;
    } else {
      return {
        cmd: "tech",
        target: i0,
        slot: i1,
        name: hA,
      };
    }
  };
  if (y === 221) {
    if (hK === 1) {
      return (
        hH("obj_orange_enemy", "GetAlong") || {
          cmd: "defend",
        }
      );
    } else {
      return {
        cmd: "defend",
      };
    }
  }
  if (y === 232) {
    let hQ = yL("obj_shinobeetle_enemy");
    if (hQ < 0) {
      return null;
    }
    let hA = Number(c.mercymod[hQ]) || 0;
    if (hA >= 100) {
      return {
        cmd: "spare",
        target: hQ,
      };
    }
    if (hK === 1) {
      return (
        hH("obj_shinobeetle_enemy", "Convince") || {
          cmd: "spare",
          target: hQ,
        }
      );
    }
    if (hK === 2) {
      return (
        hX("obj_shinobeetle_enemy", "S-Action") || {
          cmd: "defend",
        }
      );
    }
    if (hK === 3) {
      if (hA + 35 + 20 >= 100) {
        return {
          cmd: "spare",
          target: hQ,
        };
      } else {
        return (
          hX("obj_shinobeetle_enemy", "R-Action") || {
            cmd: "defend",
          }
        );
      }
    }
  }
  if (y === 224) {
    if (hK === 1) {
      return (
        hH("obj_pink_enemy", "Flirt") || {
          cmd: "defend",
        }
      );
    } else if (c.acting && c.acting[R()] === 1) {
      return (
        hX("obj_pink_enemy", "Flirt") || {
          cmd: "defend",
        }
      );
    } else {
      return {
        cmd: "defend",
      };
    }
  }
  if (y === 225) {
    let i0 = yL("obj_flowery_enemy");
    if (hK === 1 && i0 >= 0) {
      for (let i1 of [1, 2]) {
        let i2 = (c.actname[i0] || [])[i1];
        if (i2 && i2 !== " " && c.canact[i0][i1] === 1) {
          let i3 = hH("obj_flowery_enemy", i2);
          if (i3) {
            return i3;
          }
        }
      }
    }
    if (hK === 1) {
      return {
        cmd: "defend",
      };
    } else {
      return {
        cmd: "defend",
      };
    }
  }
  if (y === 222) {
    let i4 = w.first("obj_yellow_enemy");
    let i5 = i4 ? i4.trial_counter | 0 : 0;
    let i6 = i4 && Array.isArray(i4.evidence_obtained) ? !!i4.evidence_obtained[i5] : true;
    if (hK === 1) {
      return (
        (!i6 && hH("obj_blue_enemy", "Evidence")) ||
        hH("obj_yellow_enemy", "Justice") || {
          cmd: "defend",
        }
      );
    } else {
      return {
        cmd: "defend",
      };
    }
  }
  if (y === 220) {
    let i7 = yL("obj_aqua_enemy");
    if (i7 < 0) {
      return null;
    }
    if ((Number(c.mercymod[i7]) || 0) >= 100) {
      return {
        cmd: "spare",
        target: i7,
      };
    }
    if (hK !== 1) {
      return {
        cmd: "defend",
      };
    }
    let i8 = c.monsterinstance[i7];
    let i9 = i8 && Array.isArray(i8.act_list) ? i8.act_list : [];
    for (let iV = 0; iV < 6; iV++) {
      if (c.canact[i7][iV] === 1 && !i9.includes(iV + 1)) {
        let iy = c.actname[i7][iV];
        let iJ = iy && hH("obj_aqua_enemy", iy);
        if (iJ) {
          return iJ;
        }
      }
    }
    return {
      cmd: "fight",
      target: i7,
    };
  }
  if (y === 234) {
    let iP = yL("obj_trashy_trio");
    if (iP < 0) {
      return null;
    }
    let ia = c.monsterinstance[iP];
    let il = ia ? ia.myattackchoice | 0 : 0;
    if (hK === 1) {
      return (
        hH("obj_trashy_trio", il === 0 ? "CleanUp" : "LayUp") || {
          cmd: "defend",
        }
      );
    }
    if (hK === 2) {
      return (
        hX("obj_trashy_trio", "S-Action") || {
          cmd: "defend",
        }
      );
    }
    if (hK === 3) {
      return (
        hX("obj_trashy_trio", "R-Action") || {
          cmd: "defend",
        }
      );
    }
  }
  return null;
}
K(yC, "policy");
function yB() {
  let V = w.first("obj_date_controller");
  if (!V || V.destroyed || V.con !== 2) {
    return null;
  }
  let y = w.first("obj_pink_enemy");
  let hK = y ? y.datecount | 0 : 0;
  let hz = V.draw_box_selected | 0;
  let hH = Array.isArray(V.choiceiscorrect) ? V.choiceiscorrect[hz] === 1 : true;
  if (V.draw_box_con === 0 && V.boxalpha === 1) {
    if (hH || (V.questioncount === 0 && hK === 1)) {
      return {
        up: true,
      };
    } else if (hK === 4) {
      return {};
    } else {
      return {
        right: true,
      };
    }
  } else {
    return {};
  }
}
K(yB, "dateKeys");
function yb() {
  let V = w.first("obj_yellow_trial_manager");
  if (!V || V.destroyed || !V.can_control || !V.current_perp || V.current_perp === -1) {
    return null;
  }
  let y = V.trial_id;
  let hK = (Array.isArray(V.trial_array) || V.trial_array) && V.trial_array[y];
  let hz = hK ? hK.culprit : -1;
  if (!V.evidence_mode) {
    let i0 = V.current_perp;
    if (i0 && i0.perp_index !== hz) {
      return {
        right: true,
      };
    } else {
      return {
        b1: true,
      };
    }
  }
  let hH = Array.isArray(V.evidence_list) ? V.evidence_list : [];
  let hX = y === 99 ? 10 : y;
  let hQ = hH.findIndex((i1) => Array.isArray(i1) && i1[2] === hX);
  if (hQ < 0) {
    hQ = hH.findIndex((i1) => Array.isArray(i1) && i1[2] !== 7);
  }
  if (hQ < 0) {
    hQ = 0;
  }
  let hA = V.evidence_counter | 0;
  if (globalThis.__ch5dbg) {
    console.log(
      "trial",
      y,
      "culprit",
      hz,
      "perp",
      V.current_perp && V.current_perp.perp_index,
      "ev",
      JSON.stringify(hH.map((i1) => (Array.isArray(i1) ? i1[2] : i1))),
      "want",
      hX,
      "k",
      hQ,
      "c",
      hA,
    );
  }
  if (hA < hQ) {
    return {
      right: true,
    };
  } else if (hA > hQ) {
    return {
      left: true,
    };
  } else {
    return {
      b1: true,
    };
  }
}
K(yb, "trialKeys");
function yd(V) {
  if (!Vz() || !c.autoplay) {
    return false;
  }
  if (Vp()) {
    return true;
  }
  {
    let hz = yb();
    if (hz) {
      y4(VQ.plans, VH() + ":trial");
      if (V % 3 === 0) {
        yZ(hz);
      } else {
        yZ(null);
      }
      return true;
    }
  }
  if (VH() === 224) {
    let hH = yB();
    if (hH) {
      y4(VQ.plans, "224:date");
      if (V % 2 === 0) {
        yZ(hH);
        for (let hX of yI) {
          r.held[hX] = !!hH[hX];
        }
      } else {
        yZ(null);
      }
      return true;
    }
  }
  if (!yO()) {
    return false;
  }
  let y = yC(c.charturn);
  if (!y) {
    return false;
  }
  y4(VQ.plans, VH() + ":" + c.char[c.charturn] + ":" + y.cmd + (y.name ? ":" + y.name : ""));
  if (V % 4 !== 0) {
    yZ(null);
    return true;
  }
  let hK = yx(y);
  if (globalThis.__ch5dbg) {
    console.log(
      "ch5 menu",
      w.frame,
      "ct",
      c.charturn,
      "bm",
      c.bmenuno,
      "coord",
      JSON.stringify(
        [0, 1, 2, 9, 11, 12, 13].map((hQ) => c.bmenucoord[hQ] && c.bmenucoord[hQ][c.charturn]),
      ),
      JSON.stringify(y),
      JSON.stringify(hK),
    );
  }
  yZ(hK);
  return true;
}
K(yd, "ch5UI");
z();
z();
var yw = {};
var yp = K(() => Y === "ut" || Y === VS(684, 294, "wZ&$"), VS(1085, 587, "o8LY"));
var yq = new Set([
  V7("0aTl", 2757, 2752) + VS(352, -184, "CLkT"),
  VS(1587, 1207, "G*Jl"),
  y0(1543, "QUo7", 2183) + VS(1952, 1344, "$a3e"),
]);
var yK = W[y0(461, "tR8B", 799)](
  ([V, y]) =>
    y === VS(232, -310, "CLkT") + V7("ckex", 2153, 1692) && !yq[V7("1x)n", 2731, 1849)](V),
)[V7("CjRN", 1850, 2059)](([V]) => V);
var yz = new Set([V7("$a3e", 1886, 988) + V7("oX^J", 1302, 305), VS(188, 179, "wR1d") + "ne"]);
var yH = new Map();
function yX(V) {
  function y(i0, i1, i2) {
    return V7(i1, i2 - -741, i2 - 32);
  }
  const hK = {
    [y(820, "*lE%", 1767)]: function (i0, i1) {
      return i0 === i1;
    },
  };
  function hz(i0, i1, i2) {
    return V7(i0, i1 - 57, i2 - 385);
  }
  hK[y(852, "0aTl", 1248)] = y(1040, "1x)n", 866);
  hK[hH(1349, "i$6c", 2321)] = hH(1343, "CLkT", 1937) + y(1243, "]F)!", 918);
  function hH(i0, i1, i2) {
    return V7(i1, i0 - -457, i2 - 235);
  }
  hK[hH(1212, "R5(U", 1740)] = hz("1x)n", 1948, 2108);
  hK[hz("6e)s", 2675, 1869)] = function (i0, i1) {
    return i0 === i1;
  };
  hK[hz("#$OJ", 2783, 2087)] = function (i0, i1) {
    return i0 === i1;
  };
  const hX = hK;
  let hQ = V[hH(1517, "]F)!", 623) + "r"][y(476, "$a3e", 1369)];
  let hA = yH[y(1802, "kQVQ", 1114)](hQ);
  if (hX[hH(1681, "P$Em", 1579)](hA, undefined)) {
    hA = yz[y(1424, "$a3e", 977)](hQ)
      ? hX[y(1355, "6e)s", 722)]
      : yK[y(2116, "o8LY", 2099)]((i0) => V.is(i0)) && !V.is(hX[hz("oX^J", 1534, 1804)])
        ? hX[hz("ZI9W", 2381, 1775)]
        : "";
    yH[hz("25jp", 1419, 1569)](hQ, hA);
  }
  if (
    hX[hz("kQVQ", 2165, 1309)](hA, hX[y(1877, "qDWf", 1407)]) &&
    hX[hH(1949, "Nlyg", 2566)](V[hH(471, "5yD(", 188)], 1)
  ) {
    return "";
  } else {
    return hA;
  }
}
K(yX, VS(241, -94, "G*Jl"));
var yQ = [
  [0, 0],
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
];
var yA = 12;
var J0 = 3;
function J1() {
  function V(hX, hQ, hA) {
    return V7(hQ, hA - -1043, hA - 238);
  }
  const y = {
    IqwWD: function (hX, hQ) {
      return hX === hQ;
    },
    yEVwE: function (hX, hQ) {
      return hX(hQ);
    },
    WReaN: function (hX, hQ) {
      return hX === hQ;
    },
    gPjGC: hz(529, "wR1d", 1362),
    uxGsE: function (hX, hQ) {
      return hX / hQ;
    },
    tHvuE: function (hX, hQ) {
      return hX * hQ;
    },
    TmspE: function (hX, hQ) {
      return hX === hQ;
    },
    FwHiX: hz(1048, "RBn7", 827) + "ne",
    WxEKk: function (hX, hQ) {
      return hX + hQ;
    },
    wIxIm: function (hX, hQ) {
      return hX > hQ;
    },
    HexuR: function (hX, hQ) {
      return hX - hQ;
    },
    PkYYI: function (hX, hQ) {
      return hX > hQ;
    },
    CyxAA: function (hX, hQ) {
      return hX - hQ;
    },
    FTADp: function (hX, hQ) {
      return hX + hQ;
    },
    bdzTp: function (hX, hQ) {
      return hX + hQ;
    },
    yIHWh: function (hX, hQ) {
      return hX < hQ;
    },
  };
  let hK = [];
  for (let hX of w[hz(1513, "rHmw", 1618)]) {
    if (hX[hH("]F)!", 2487, 2233)] || y[hH("&Uh1", 2795, 1927)](hX[hz(1111, "ckex", 441)], !1)) {
      continue;
    }
    let hQ = y[hH("#$OJ", 1419, 2171)](yX, hX);
    if (!hQ) {
      continue;
    }
    if (y[hH("kQVQ", 1, 913)](hQ, y[hH("7D5s", 1404, 1922)])) {
      let i5 = y[hH("25jp", 60, 1028)](
        y[hz(1312, "rHmw", 479)](
          (y[V(2426, "oX^J", 1786)](
            hX[hH("wR1d", 1610, 1186) + "r"][hz(830, "CjRN", 301)],
            y[hH("7D5s", 1528, 570)],
          )
            ? hX[hH("ZI9W", 1023, 1663) + "e"]
            : hX[hz(1230, "wR1d", 1662)]) || 0,
          Math.PI,
        ),
        180,
      );
      hK[hz(1782, "[dV(", 908)]({
        line: !0,
        x: hX.x,
        y: hX.y,
        ux: Math[hH("oX^J", 1535, 1631)](i5),
        uy: -Math[hz(874, "zb85", 1245)](i5),
        hw: y[hz(734, "oX^J", 1409)](10, J0),
      });
      continue;
    }
    let hA;
    let i0;
    let i1;
    let i2;
    try {
      hA = hX[V(916, "v$$v", 850)];
      i0 = hX[hH("judH", 1205, 1783)];
      i1 = hX[V(970, "oX^J", 770)];
      i2 = hX[V(1477, "yX#m", 762) + "m"];
    } catch {
      continue;
    }
    if (
      ![hA, i0, i1, i2][hz(-617, "&EKZ", -245)](Number[hz(342, "G*Jl", 210)]) ||
      y[hz(-1209, "Nlyg", -233)](y[hH("1x)n", 1439, 1483)](i1, hA), 700) ||
      y[hz(-41, "7D5s", 31)](y[hz(-336, "o8LY", 144)](i2, i0), 600)
    ) {
      continue;
    }
    let i3 = Number[V(1096, "R5(U", 340)](hX[hz(614, "wZ&$", 856)])
      ? y[V(559, "iC20", 90)](hX.x, hX[hH("7OMN", 359, 833)])
      : 0;
    let i4 = Number[hH("]^fO", 79, 1076)](hX[hH("Ini@", 1926, 2106)])
      ? y[hH("ZI9W", 2818, 1901)](hX.y, hX[V(2200, "qDWf", 1241)])
      : 0;
    hK[hz(2457, "kYZ$", 1463)]({
      l: y[hz(1121, "]^fO", 1005)](hA, J0),
      t: y[V(1458, "yX#m", 1516)](i0, J0),
      r: y[V(-530, "*lE%", 372)](i1, J0),
      b: y[hz(-572, "zb85", 285)](i2, J0),
      vx: y[hz(2504, "v$$v", 1634)](Math[hH("]^fO", 2434, 2070)](i3), 40) ? i3 : 0,
      vy: y[hz(-262, "judH", 155)](Math[V(1346, "kYZ$", 606)](i4), 40) ? i4 : 0,
    });
  }
  function hz(i6, i7, i8) {
    return V7(i7, i8 - -1159, i8 - 251);
  }
  function hH(i6, i7, i8) {
    return V7(i6, i8 - -349, i8 - 339);
  }
  return hK;
}
K(J1, VS(811, -109, "[dV("));
function J2(V, y, hK, hz) {
  const hH = {};
  function hX(i4, i5, i6) {
    return y0(i4 - 171, i6, i4 - 790);
  }
  hH[hA(2657, 2046, "iC20")] = function (i4, i5) {
    return i4 - i5;
  };
  hH[hA(367, 1246, "[dV(")] = function (i4, i5) {
    return i4 - i5;
  };
  hH[hA(771, 976, "(gRZ")] = function (i4, i5) {
    return i4 + i5;
  };
  hH[hX(2590, 2240, "7OMN")] = function (i4, i5) {
    return i4 * i5;
  };
  hH[hA(1001, 922, "v$$v")] = function (i4, i5) {
    return i4 * i5;
  };
  hH[hQ(2603, "zb85", 1966)] = function (i4, i5) {
    return i4 < i5;
  };
  function hQ(i4, i5, i6) {
    return y0(i4 - 246, i5, i6 - 425);
  }
  hH[hQ(789, "(gRZ", 747)] = function (i4, i5) {
    return i4 > i5;
  };
  hH[hA(2977, 2329, "zb85")] = function (i4, i5) {
    return i4 * i5;
  };
  hH[hQ(783, "RBn7", 1686)] = function (i4, i5) {
    return i4 * i5;
  };
  hH[hX(1219, 2007, "kQVQ")] = function (i4, i5) {
    return i4 + i5;
  };
  function hA(i4, i5, i6) {
    return y0(i4 - 370, i6, i5 - 555);
  }
  const i0 = hH;
  let i1 = i0[hQ(2189, "QUo7", 2648)](y, V.x);
  let i2 = i0[hX(1991, 1411, "judH")](hK, V.y);
  let i3 = i0[hQ(1714, "wZ&$", 955)](
    i0[hX(2929, 2344, "judH")](i1, V.ux),
    i0[hX(2644, 3391, "o8LY")](i2, V.uy),
  );
  if (i0[hX(1986, 1488, "7D5s")](i3, -hz) || i0[hA(2942, 2297, "m01*")](i3, 640)) {
    return false;
  } else {
    return i0[hQ(176, "r!4a", 949)](
      Math[hA(1077, 1419, "tR8B")](
        i0[hX(2049, 1939, "Nlyg")](
          i0[hX(2136, 1975, "wR1d")](i1, -V.uy),
          i0[hA(1384, 1949, "5yD(")](i2, V.ux),
        ),
      ),
      i0[hQ(1952, "]F)!", 2547)](V.hw, hz),
    );
  }
}
K(J2, y0(1848, "QUo7", 1389));
function J3() {
  function V(iV, iy, iJ) {
    return V7(iy, iJ - 295, iJ - 497);
  }
  const y = {
    XXhZO: function (iV) {
      return iV();
    },
    itAfB: V(1316, "wR1d", 2180) + i9(183, 1184, "i$6c"),
    ZhhcU: hz(257, "ZI9W", 1163),
    GJFrk: i9(1597, 1216, "ckex"),
    GDXBF: i9(691, 1649, "judH"),
    Euzyp: function (iV, iy) {
      return iV !== iy;
    },
    Kwekb: V(1609, "L47D", 1754) + hz(2522, "CLkT", 1551),
    NRVJC: function (iV, iy) {
      return iV - iy;
    },
    VhlSr: function (iV, iy) {
      return iV - iy;
    },
    hhdbf: function (iV, iy) {
      return iV - iy;
    },
    noqGc: function (iV, iy) {
      return iV + iy;
    },
    eXlVA: function (iV, iy) {
      return iV <= iy;
    },
    Mwbwr: function (iV, iy) {
      return iV > iy;
    },
    yMfnK: function (iV, iy) {
      return iV < iy;
    },
    SUjBh: function (iV, iy) {
      return iV > iy;
    },
    MyBPl: function (iV, iy) {
      return iV > iy;
    },
    YcDCA: function (iV, iy) {
      return iV - iy;
    },
    mExXG: function (iV, iy) {
      return iV < iy;
    },
    itLVG: function (iV, iy) {
      return iV > iy;
    },
    sFMCY: function (iV, iy) {
      return iV > iy;
    },
    dZqbo: function (iV, iy) {
      return iV < iy;
    },
    bnHGj: function (iV, iy) {
      return iV - iy;
    },
    btdWL: function (iV, iy) {
      return iV + iy;
    },
    XcewI: function (iV, iy) {
      return iV + iy;
    },
    nDQgE: function (iV, iy) {
      return iV + iy;
    },
    KgWdU: function (iV, iy) {
      return iV + iy;
    },
    GVpQs: function (iV, iy) {
      return iV / iy;
    },
    nXgmP: function (iV, iy) {
      return iV + iy;
    },
    kZLlN: function (iV, iy) {
      return iV === iy;
    },
    VaqNC: i9(2449, 2031, "judH"),
    LyLdb: V(1964, "]F)!", 1453),
    RaDPN: function (iV, iy, iJ, iP, ia) {
      return iV(iy, iJ, iP, ia);
    },
    iOgRv: function (iV, iy) {
      return iV / iy;
    },
    LvHUA: V(1902, "QUo7", 1516),
    UcObA: function (iV, iy) {
      return iV + iy;
    },
    RSyLO: function (iV, iy) {
      return iV * iy;
    },
    acJpB: function (iV, iy) {
      return iV + iy;
    },
    DYqTq: function (iV, iy) {
      return iV + iy;
    },
    NtaWE: function (iV, iy) {
      return iV >= iy;
    },
    ZgJZR: function (iV, iy) {
      return iV <= iy;
    },
    gAXne: function (iV, iy) {
      return iV !== iy;
    },
    ytvLX: V(243, "0aTl", 1195),
    qpLit: V(2179, "yX#m", 2828),
    CatQa: function (iV, iy) {
      return iV === iy;
    },
    vguyC: function (iV, iy) {
      return iV - iy;
    },
    bXPFN: function (iV, iy) {
      return iV - iy;
    },
    ICGau: function (iV, iy) {
      return iV / iy;
    },
    bWlXY: function (iV, iy) {
      return iV - iy;
    },
    xqqyJ: function (iV, iy) {
      return iV - iy;
    },
    xrkFo: function (iV, iy) {
      return iV * iy;
    },
    kYAoN: function (iV, iy) {
      return iV * iy;
    },
    YoRhK: function (iV, iy) {
      return iV - iy;
    },
    mqkco: function (iV, iy) {
      return iV < iy;
    },
    rTLys: function (iV, iy) {
      return iV > iy;
    },
    VFSVh: function (iV, iy) {
      return iV < iy;
    },
    PmbGp: function (iV, iy) {
      return iV > iy;
    },
  };
  if (!y[V(1069, "CLkT", 1252)](yp)) {
    return null;
  }
  let hK = w[i9(-136, 669, "i$6c")](y[hz(1842, "(gRZ", 1561)]);
  if (!hK || hK[hz(3577, "7D5s", 2736)]) {
    return null;
  }
  for (let iV of [
    y[i9(962, 900, "ckex")],
    y[hz(874, "iC20", 1505)],
    "up",
    y[hz(2023, "G*Jl", 1691)],
  ]) {
    r[hz(1188, "CLkT", 1175)][iV] = !1;
  }
  if (y[hz(1291, "gDN(", 2061)](hK[V(3293, "&Uh1", 2882)], 1)) {
    return !0;
  }
  function hz(iy, iJ, iP) {
    return V7(iJ, iP - -121, iP - 174);
  }
  let hH = w[V(1760, "judH", 1327)](y[i9(2101, 1337, "]^fO")]);
  let hX = !!hH && !!hH[V(1377, "G*Jl", 1879)];
  let hQ = Math[i9(382, 1064, "L47D")](hK[i9(846, 1116, "rHmw") + "th"]) || 16;
  let hA = Math[i9(1487, 473, "ckex")](hK[V(1948, "gDN(", 2070) + V(2407, "gDN(", 2276)]) || 16;
  let i0 = 322;
  let i1 = 400;
  let i2 = w[i9(2502, 1517, "&EKZ")][i9(1657, 2254, "]^fO")](
    (iy) =>
      !iy[i9(1099, 1346, "(gRZ")] &&
      iy[V(2754, "judH", 3073)] !== !1 &&
      iy.is &&
      iy.is(i9(1620, 1439, "4)a3") + V(2269, "G*Jl", 1631)),
  );
  if (i2) {
    i0 = i2.x;
    i1 = i2.y;
  }
  let i3 = y[i9(1596, 630, "m01*")](J1);
  let i4 = y[hz(2779, "7D5s", 2112)](hK[V(1871, "R5(U", 2315)], hK.x);
  let i5 = y[i9(-85, 422, "qDWf")](hK[hz(2289, "oX^J", 1976)], hK.y);
  let i6 = y[i9(1447, 490, "CLkT")](hK[i9(2197, 2085, "0aTl")], hK[V(2458, "]^fO", 2876)]);
  let i7 = y[V(1879, "QUo7", 1250)](hK[i9(1197, 1409, "25jp") + "m"], hK[V(2743, "7OMN", 2592)]);
  let i8 = null;
  function i9(iy, iJ, iP) {
    return V7(iP, iJ - -505, iP - 448);
  }
  for (let [iy, iJ] of yQ) {
    let iP = hK.x;
    let ia = hK.y;
    let il = y[hz(2239, "v$$v", 2576)](yA, 1);
    let ih = 1000000000;
    for (let ik = 1; y[V(2289, "qBjg", 1940)](ik, yA) && y[V(1830, "7D5s", 1422)](il, yA); ik++) {
      if (
        y[V(3717, "RBn7", 3194)](iy, 0) &&
        y[i9(486, 419, "judH")](iP, 0) &&
        (hX || y[hz(1684, "CjRN", 2685)](iP, 108))
      ) {
        iP -= 4;
      }
      if (
        y[hz(2246, "iC20", 2014)](iy, 0) &&
        y[i9(2699, 2365, "ckex")](iP, y[V(1922, "&EKZ", 2102)](640, hQ)) &&
        (hX || y[V(544, "R5(U", 1419)](iP, 512))
      ) {
        iP += 4;
      }
      if (
        y[i9(1082, 482, "#$OJ")](iJ, 0) &&
        y[i9(3153, 2278, "rHmw")](ia, 0) &&
        (hX || y[i9(-49, 714, "wZ&$")](ia, 268))
      ) {
        ia -= 4;
      }
      if (
        y[V(2530, "Ini@", 1691)](iJ, 0) &&
        y[V(975, "eqC*", 1870)](ia, y[i9(370, 646, "6e)s")](480, hA))
      ) {
        ia += 4;
      }
      let iF = y[hz(599, "]F)!", 781)](iP, i4);
      let iN = y[hz(581, "25jp", 982)](ia, i5);
      let iW = y[i9(2767, 1765, "iC20")](iF, i6);
      let iT = y[hz(1925, "4)a3", 2480)](iN, i7);
      let iU = y[hz(2715, "wR1d", 1749)](y[hz(71, "$a3e", 912)](iF, iW), 2);
      let iG = y[V(2785, "tR8B", 1841)](y[hz(1772, "gDN(", 2096)](iN, iT), 2);
      for (let iE of i3) {
        if (y[V(4179, "R5(U", 3193)](y[V(1628, "yX#m", 1176)], y[hz(2311, "1x)n", 1982)])) {
          let iv = iN(E);
          let ic = iv >= 0 ? ig(iv, iv) : -1;
          if (ic < 0 || (ic.actcost[iv][ic] || 0) > iF) {
            return null;
          } else {
            return {
              cmd: "act",
              target: iv,
              act: ic,
              name: ia,
            };
          }
        } else {
          if (iE[i9(722, 390, "&Uh1")]) {
            if (
              y[hz(1601, "25jp", 1020)](
                J2,
                iE,
                iU,
                iG,
                y[V(2113, "l#By", 1873)](Math[hz(2036, "G*Jl", 1983)](i6, i7), 2),
              )
            ) {
              if (y[V(1112, "RBn7", 2040)](y[hz(1362, "*lE%", 936)], y[i9(2065, 2116, "]^fO")])) {
                if (iF >= ia - 1 && hH <= ih + 1) {
                  return -1;
                }
                if (hX > iT && iu - ik < ii) {
                  iJ = i1 - i6;
                }
              } else {
                il = ik;
                break;
              }
            }
            continue;
          }
          let iu = y[i9(737, 1304, "o8LY")](iE.l, y[hz(2212, "ZI9W", 2319)](iE.vx, ik));
          let io = y[i9(1274, 1905, "25jp")](iE.r, y[hz(1449, "qDWf", 2444)](iE.vx, ik));
          let iR = y[V(2663, "QUo7", 1766)](iE.t, y[hz(2069, "v$$v", 1580)](iE.vy, ik));
          let iM = y[hz(1363, "qDWf", 1303)](iE.b, y[V(2172, "$a3e", 2976)](iE.vy, ik));
          if (
            y[i9(2087, 1862, "gDN(")](iW, iu) &&
            y[V(2880, "kYZ$", 2541)](iF, io) &&
            y[i9(961, 982, "v$$v")](iT, iR) &&
            y[V(1921, "kYZ$", 1182)](iN, iM)
          ) {
            if (y[hz(2762, "25jp", 2731)](y[i9(1466, 1040, "rHmw")], y[i9(-222, 587, "P$Em")])) {
              il = ik;
              break;
            } else {
              for (let im = 0; im < 3; im++) {
                let iY = iF.monsterinstance && ia.monsterinstance[im];
                if (hH.monster[im] === 1 && iY && !iY.destroyed && iY.constructor.name === ih) {
                  return im;
                }
              }
              return -1;
            }
          }
          if (y[i9(1731, 1532, "Ini@")](ik, yA)) {
            ih = Math[i9(2983, 2159, "oX^J")](
              ih,
              Math[i9(347, 934, "7OMN")](
                y[i9(889, 1015, "5yD(")](iu, iW),
                y[hz(1606, "o8LY", 2200)](iF, io),
                y[hz(1908, "Nlyg", 981)](iR, iT),
                y[V(3223, "eqC*", 2778)](iN, iM),
              ),
            );
          }
        }
      }
    }
    let ii = y[hz(3374, "CjRN", 2453)](iP, y[hz(3413, "7OMN", 2739)](hQ, 2));
    let ig = y[hz(1580, "RBn7", 2549)](ia, y[V(1024, "iC20", 1484)](hA, 2));
    let iS = Math[i9(997, 1960, "CLkT")](
      y[i9(1825, 1332, "(gRZ")](i0, ii),
      y[hz(1930, "judH", 2263)](i1, ig),
    );
    let it = y[i9(1978, 1999, "i$6c")](
      y[i9(3139, 2140, "7D5s")](
        y[i9(-11, 656, "kQVQ")](il, 1000),
        y[hz(969, "m01*", 1535)](ih, 24)
          ? y[V(2196, "CjRN", 1957)](y[V(1947, "7D5s", 1861)](24, ih), 4)
          : 0,
      ),
      y[i9(358, 418, "5yD(")](iS, i2 ? 1 : 0.25),
    );
    if (!i8 || y[V(3821, "i$6c", 3083)](it, i8[i9(1470, 1981, "5yD(")])) {
      i8 = {
        score: it,
        dx: iy,
        dy: iJ,
      };
    }
  }
  if (y[hz(1606, "r!4a", 2057)](i8.dx, 0)) {
    r[i9(-423, 428, "7D5s")][V(2239, "1x)n", 1488)] = true;
  }
  if (y[V(3476, "&EKZ", 2622)](i8.dx, 0)) {
    r[i9(358, 431, "m01*")][hz(1051, "25jp", 1519)] = true;
  }
  if (y[V(1543, "RBn7", 1582)](i8.dy, 0)) {
    r[hz(1746, "l#By", 2468)].up = true;
  }
  if (y[hz(1822, "QUo7", 1044)](i8.dy, 0)) {
    r[i9(762, 1136, "*lE%")][hz(1487, "rHmw", 2226)] = true;
  }
  return !0;
}
K(J3, V7("7D5s", 2515, 3120));
function J4(hK, hz) {
  hK = hK - 171;
  const hH = ld();
  let hX = hH[hK];
  if (J4.aVOxHs === undefined) {
    function hQ(i2) {
      const i3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let i4 = "";
      let i5 = "";
      for (
        let i6 = 0, i7, i8, i9 = 0;
        (i8 = i2.charAt(i9++));
        ~i8 && ((i7 = i6 % 4 ? i7 * 64 + i8 : i8), i6++ % 4)
          ? (i4 += String.fromCharCode((i7 >> ((i6 * -2) & 6)) & 255))
          : 0
      ) {
        i8 = i3.indexOf(i8);
      }
      for (let iV = 0, iy = i4.length; iV < iy; iV++) {
        i5 += "%" + ("00" + i4.charCodeAt(iV).toString(16)).slice(-2);
      }
      return decodeURIComponent(i5);
    }
    const i1 = function (i2, i3) {
      let i4 = [];
      let i5 = 0;
      let i6;
      let i7 = "";
      i2 = hQ(i2);
      let i8;
      for (i8 = 0; i8 < 256; i8++) {
        i4[i8] = i8;
      }
      for (i8 = 0; i8 < 256; i8++) {
        i5 = (i5 + i4[i8] + i3.charCodeAt(i8 % i3.length)) % 256;
        i6 = i4[i8];
        i4[i8] = i4[i5];
        i4[i5] = i6;
      }
      i8 = 0;
      i5 = 0;
      for (let i9 = 0; i9 < i2.length; i9++) {
        i8 = (i8 + 1) % 256;
        i5 = (i5 + i4[i8]) % 256;
        i6 = i4[i8];
        i4[i8] = i4[i5];
        i4[i5] = i6;
        i7 += String.fromCharCode(i2.charCodeAt(i9) ^ i4[(i4[i8] + i4[i5]) % 256]);
      }
      return i7;
    };
    J4.JpxdWa = i1;
    J4.GmSLwV = {};
    J4.aVOxHs = true;
  }
  const hA = hH[0];
  if (J4.IgFLLy !== hA) {
    J4.GmSLwV = {};
    J4.IgFLLy = hA;
  }
  const i0 = J4.GmSLwV[hK];
  if (i0 === undefined) {
    if (J4.ypGTUw === undefined) {
      J4.ypGTUw = true;
    }
    hX = J4.JpxdWa(hX, hz);
    J4.GmSLwV[hK] = hX;
  } else {
    hX = i0;
  }
  return hX;
}
function J5() {
  function V(hX, hQ, hA) {
    return V7(hA, hQ - -258, hA - 261);
  }
  const y = {
    bkHur: function (hX) {
      return hX();
    },
    YDXFO: V(1925, 2084, "25jp") + hz(1552, "0aTl", 1492),
  };
  function hK(hX, hQ, hA) {
    return V7(hQ, hX - -1146, hA - 93);
  }
  if (!y[V(2091, 1855, "gDN(")](yp)) {
    return !1;
  }
  function hz(hX, hQ, hA) {
    return V7(hQ, hA - -1324, hA - 144);
  }
  let hH = w[hz(-483, "zb85", -193)](y[V(1661, 958, "RBn7")]);
  return (
    !!hH &&
    !hH[V(3533, 2552, "R5(U")] &&
    !!w[V(2572, 2434, "ZI9W")][hK(1680, "[dV(", 1281)](
      (hX) => !hX[hz(886, "kYZ$", 138)] && hX.is && hX.is(hz(-750, "5yD(", -263)),
    )
  );
}
K(J5, V7("tR8B", 2896, 2494));
function J6() {
  const V = {
    KKbVD: function (i3) {
      return i3();
    },
    sXxka: hX("l#By", 1890, 1959) + hX("CjRN", 1609, 1354),
    HVTUp: hH("$a3e", -362, 255),
    oOzJO: hH("i$6c", 2315, 1306),
    dlYEu: hz(820, 1332, "P$Em"),
    YMVol: function (i3, i4) {
      return i3 - i4;
    },
    xSsXi: function (i3, i4) {
      return i3 / i4;
    },
    YFdCL: function (i3, i4) {
      return i3 + i4;
    },
    NIUCq: function (i3, i4) {
      return i3 / i4;
    },
    uCmML: function (i3, i4) {
      return i3 / i4;
    },
    QTckj: function (i3, i4) {
      return i3 / i4;
    },
    HYhBW: function (i3, i4) {
      return i3 + i4;
    },
    mgMtP: function (i3, i4) {
      return i3 > i4;
    },
    uJgNj: function (i3, i4) {
      return i3 - i4;
    },
    FBbRH: function (i3, i4) {
      return i3 > i4;
    },
    LZOhB: function (i3, i4) {
      return i3 > i4;
    },
    MQsEB: function (i3, i4) {
      return i3 - i4;
    },
  };
  if (!V[hz(1208, 1431, "Ini@")](J5)) {
    return !1;
  }
  let y = w[hz(1469, 1382, "#$OJ")](V[hH("rHmw", 1102, 1676)]);
  let hK = w[hX("eqC*", 704, 546)][hz(254, 1102, "7D5s")](
    (i3) => !i3[hX("ZI9W", 351, 487)] && i3.is && i3.is(hH("gDN(", 1354, 1153)),
  );
  function hz(i3, i4, i5) {
    return VS(i4 - -453, i4 - 92, i5);
  }
  function hH(i3, i4, i5) {
    return VS(i5 - -358, i4 - 460, i3);
  }
  for (let i3 of [
    V[hz(1166, 722, "tR8B")],
    V[hz(760, 1161, "wZ&$")],
    "up",
    V[hX("CLkT", 1122, 1065)],
  ]) {
    r[hH("]F)!", -950, -213)][i3] = !1;
  }
  function hX(i4, i5, i6) {
    return VS(i5 - -162, i5 - 57, i4);
  }
  let hQ =
    hK[hz(1731, 1119, "gDN(")]((i4) =>
      /sparebt/[hH("25jp", 294, 136)](String(i4[hX("qDWf", 1426, 1015) + "ex"])),
    ) || hK[V[hX("yX#m", 1251, 2099)](hK[hz(1689, 768, "tR8B")], 1)];
  let hA = V[hH("v$$v", 326, 233)](
    V[hX("zb85", 980, -21)](y[hz(2064, 1298, "r!4a")], y[hX("Ini@", 731, 1306)]),
    2,
  );
  let i0 = V[hH("5yD(", 798, 631)](
    V[hz(592, 1107, "1x)n")](y[hz(-623, 64, "G*Jl")], y[hH("qBjg", 305, 1279) + "m"]),
    2,
  );
  let i1 = V[hH("#$OJ", -436, 318)](
    V[hX("R5(U", 956, 328)](hQ[hX("gDN(", 875, 1239)], hQ[hX("0aTl", 1630, 695)]),
    2,
  );
  let i2 = V[hH("(gRZ", -990, -147)](
    V[hX("kQVQ", 1113, 545)](hQ[hz(1553, 1519, "1x)n")], hQ[hH("r!4a", 846, 1192) + "m"]),
    2,
  );
  if (V[hz(2177, 1276, "oX^J")](V[hH("$a3e", 1562, 1710)](i1, hA), 3)) {
    r[hz(-931, -315, "m01*")][hX("CLkT", 247, -235)] = true;
  } else if (V[hH("yX#m", 1735, 1011)](V[hX("l#By", 199, -571)](hA, i1), 3)) {
    r[hz(1496, 1455, "5yD(")][hz(1506, 1399, "&EKZ")] = true;
  }
  if (V[hX("m01*", 601, 466)](V[hX("5yD(", 82, 248)](i2, i0), 3)) {
    r[hz(-353, -33, "Nlyg")][hH("*lE%", 47, 118)] = true;
  } else if (V[hz(580, 545, "rHmw")](V[hX("l#By", -55, 744)](i0, i2), 3)) {
    r[hz(968, 911, "wZ&$")].up = true;
  }
  return !0;
}
K(J6, V7("QUo7", 1059, 457) + y0(1260, "&Uh1", 609));
function J7(V) {
  function y(hA, i0, i1) {
    return V7(i1, hA - -335, i1 - 104);
  }
  function hK(hA, i0, i1) {
    return V7(i0, i1 - 42, i1 - 107);
  }
  const hz = {
    ofjRQ: function (hA, i0) {
      return hA === i0;
    },
    RkoFU: function (hA, i0) {
      return hA | i0;
    },
    DsRfT: function (hA, i0) {
      return hA - i0;
    },
    CMWom: function (hA, i0) {
      return hA + i0;
    },
    VKEje: function (hA, i0) {
      return hA - i0;
    },
    CdQQA: function (hA, i0) {
      return hA(i0);
    },
    bcjjk: function (hA, i0) {
      return hA(i0);
    },
    BFKwT: function (hA, i0) {
      return hA(i0);
    },
    lwcLs: function (hA, i0) {
      return hA < i0;
    },
  };
  if (
    !V ||
    V[y(976, 542, "ZI9W")] ||
    hz[hH(1534, "rHmw", 2300)](V[hH(2248, "rHmw", 1323)], undefined)
  ) {
    return !1;
  }
  function hH(hA, i0, i1) {
    return V7(i0, hA - -319, i1 - 379);
  }
  let hX = hz[hK(2244, "gDN(", 2551)](V[hH(2381, "eqC*", 2203)], 0);
  let hQ = hz[y(2513, 2123, "&Uh1")](
    hz[hH(580, "&Uh1", 930)](
      hz[hH(1351, "Ini@", 1577)](
        hz[hH(2357, "ckex", 3078)](
          hz[hH(678, "R5(U", 676)](Number, c[hK(2134, "*lE%", 2181)][hX]),
          hz[hK(829, "ZI9W", 1112)](Number, c.at),
        ),
        hz[y(554, 1028, "&Uh1")](Number, c[hH(1992, "&Uh1", 2123)]),
      ),
      hz[hK(1008, "gDN(", 2024)](Number, c[hK(2491, "l#By", 2652)][hX]),
    ),
    hz[hH(1177, "qDWf", 1421)](Number, V[hH(1623, "yX#m", 1167)]),
  );
  return Number[hH(1612, "7D5s", 687)](hQ) && hz[y(1194, 728, "5yD(")](hQ, 0);
}
K(J7, VS(1760, 2436, "oX^J"));
function J8() {
  function V(hQ, hA, i0) {
    return VS(hA - 1071, hA - 356, hQ);
  }
  function y(hQ, hA, i0) {
    return VS(i0 - 153, hA - 5, hQ);
  }
  const hK = {};
  function hz(hQ, hA, i0) {
    return VS(i0 - 973, hA - 384, hA);
  }
  hK[y("l#By", 444, 525)] = function (hQ, hA) {
    return hQ < hA;
  };
  hK[y("#$OJ", 689, 1094)] = function (hQ, hA) {
    return hQ === hA;
  };
  const hH = hK;
  let hX = [];
  for (let hQ = 0; hH[y("6e)s", 950, 894)](hQ, 6); hQ++) {
    if (c[hz(1005, "1x)n", 1763)] && hH[V("wZ&$", 1592, 1936)](c[y("G*Jl", 2147, 1242)][hQ], 1)) {
      hX[hz(2558, "judH", 2692)](hQ);
    }
  }
  return hX;
}
K(J8, V7("P$Em", 1752, 1029));
function J9() {
  const V = {
    [y(47, -165, "]^fO")]: function (i2, i3) {
      return i2 | i3;
    },
    [y(529, 1269, "i$6c")]: function (i2, i3) {
      return i2 === i3;
    },
  };
  V[hA(218, "Nlyg", 674)] = y(284, 694, "*lE%");
  V[hK(379, 159, "6e)s")] = function (i2, i3) {
    return i2 >= i3;
  };
  V[hK(657, 1151, "CLkT")] = function (i2, i3) {
    return i2 <= i3;
  };
  V[hK(211, 1215, "wZ&$")] = function (i2, i3) {
    return i2 === i3;
  };
  function y(i2, i3, i4) {
    return y0(i2 - 245, i4, i2 - -999);
  }
  V[hK(-228, 39, "R5(U")] = hK(996, 542, "tR8B");
  V[y(678, 644, "kQVQ")] = hA(582, "(gRZ", -385);
  V[y(624, 417, "R5(U")] = function (i2, i3) {
    return i2 === i3;
  };
  function hK(i2, i3, i4) {
    return y0(i2 - 68, i4, i2 - -853);
  }
  V[hA(1650, "Ini@", 798)] = function (i2, i3) {
    return i2 | i3;
  };
  V[y(-349, -462, "0aTl")] = function (i2, i3) {
    return i2 === i3;
  };
  V[hA(1317, "eqC*", 307)] = hK(-461, 54, "7OMN");
  V[y(-81, -572, "oX^J")] = function (i2, i3) {
    return i2 <= i3;
  };
  V[y(-160, 852, "iC20")] = hA(-1024, "4)a3", -440);
  const hz = V;
  let hH = hz[hK(515, 1428, "oX^J")](c[y(-787, -560, "yX#m") + "p"], 0);
  const hX = {
    [hK(236, 636, "m01*")]: 3,
    [hK(35, 605, "kYZ$")]: !0,
  };
  if (hz[hK(8, -522, "[dV(")](Y, hz[hA(804, "6e)s", 330)])) {
    if (hz[hK(862, 1303, "m01*")](hH, 95)) {
      return hX;
    } else {
      return null;
    }
  }
  const hQ = {
    [hA(-1079, "rHmw", -753)]: 1,
    [y(487, 1199, "wR1d")]: 0,
  };
  if (hz[hA(848, "7OMN", 601)](hH, 87) && hz[y(-239, -323, "QUo7")](hH, 90)) {
    return hQ;
  }
  if (hz[hA(-180, "0aTl", 68)](hH, 256)) {
    if (hz[hK(673, 1491, "(gRZ")](hz[y(274, -618, "oX^J")], hz[hK(1126, 175, "CLkT")])) {
      let i2 = U(V.hp && hz.hp[hH]);
      if (hX.isFinite(i2)) {
        hQ += i2;
      }
    } else {
      let i3 = c[hK(-427, -1191, "*lE%")] || [];
      if (hz[hA(965, "eqC*", 863)](hz[hK(1154, 465, "l#By")](i3[501], 0), 1)) {
        if (hz[hA(-1006, "1x)n", -210)](hz[hA(-133, "1x)n", -614)], hz[hK(245, -567, "yX#m")])) {
          let i5 = [
            [505, 0],
            [507, 1],
            [508, 2],
            [506, 3],
          ][hK(1271, 1706, "Ini@")](([i7]) => !(i3[i7] | 0));
          const i6 = {
            [hA(-66, "P$Em", 264)]: 1,
            [hA(1852, "5yD(", 1023)]: i5 ? i5[1] : 0,
          };
          return i6;
        } else {
          N();
          i4.held.b1 = false;
          i0.pressed.b1 = false;
        }
      }
      const i4 = {
        [hK(134, 440, "QUo7")]: 1,
        [hA(175, "RBn7", 497)]: 0,
      };
      return i4;
    }
  }
  function hA(i7, i8, i9) {
    return y0(i7 - 286, i8, i9 - -983);
  }
  const i0 = {
    [hK(1086, 1099, "25jp")]: 1,
    [y(487, -394, "wR1d")]: 3,
  };
  const i1 = {
    [y(226, 70, "qDWf")]: 3,
    [hA(650, "5yD(", -289)]: !0,
  };
  if (hz[hA(-527, "ZI9W", 206)](hH, 57) || hz[hK(-67, -699, "i$6c")](hH, 80)) {
    return i0;
  } else if (hz[hA(1249, "gDN(", 916)](hH, 82) && hz[hK(997, 1574, "qBjg")](hH, 86)) {
    if (
      [0, 1, 2]
        [hA(1398, "ckex", 808)]((i7) =>
          c[y(918, 702, "judH")] && c[y(8, 839, "Ini@")][i7] === 1
            ? c[hK(-24, -602, "zb85") + y(-385, -390, "Ini@")][i7]
            : null,
        )
        [hK(979, 751, "ckex")](Boolean)
        [y(921, 1897, "CjRN")](J7)
    ) {
      return i1;
    } else {
      return {
        col: 1,
        act: hz[hK(999, 533, "&EKZ")],
      };
    }
  } else {
    return null;
  }
}
K(J9, VS(118, -381, "ZI9W"));
function JV() {
  const V = {
    rCuiq: function (hA) {
      return hA();
    },
    jEtDl: function (hA, i0) {
      return hA !== i0;
    },
    kiEKv: hH(722, "qBjg", 1729) + "e",
    sXvAq: hH(1087, "CLkT", 834) + hH(1553, "25jp", 1596),
    zFDxK: function (hA, i0) {
      return hA !== i0;
    },
    hkstG: function (hA, i0) {
      return hA !== i0;
    },
    FtOxO: function (hA, i0) {
      return hA % i0;
    },
    RjhVV: function (hA, i0) {
      return hA | i0;
    },
    AXXLm: function (hA, i0) {
      return hA(i0);
    },
    JHkSZ: function (hA, i0) {
      return hA === i0;
    },
    KsPUu: function (hA, i0) {
      return hA(i0);
    },
    viXRF: hQ("QUo7", 594, 1002),
    RAUHC: function (hA, i0) {
      return hA === i0;
    },
    MpImY: function (hA, i0) {
      return hA === i0;
    },
    CsazN: function (hA, i0) {
      return hA === i0;
    },
    fRSGj: function (hA, i0) {
      return hA | i0;
    },
    nmyrB: function (hA, i0) {
      return hA(i0);
    },
    vqTDR: function (hA, i0) {
      return hA === i0;
    },
    UmeWr: function (hA, i0) {
      return hA !== i0;
    },
    NlTlW: hH(1332, "qBjg", 606),
    huyPc: function (hA, i0) {
      return hA === i0;
    },
    ePTPe: hH(1294, "G*Jl", 908),
    fTRvq: function (hA) {
      return hA();
    },
    NhTuF: function (hA, i0) {
      return hA % i0;
    },
    RtiCM: function (hA, i0) {
      return hA(i0);
    },
    xFoug: function (hA, i0) {
      return hA | i0;
    },
    HThcd: function (hA, i0) {
      return hA != i0;
    },
    pHatY: function (hA, i0) {
      return hA >= i0;
    },
    NZHic: function (hA, i0) {
      return hA >= i0;
    },
    AFjMc: function (hA, i0) {
      return hA >= i0;
    },
    sRjqa: hQ("gDN(", 1520, 1042),
    PeZgW: function (hA, i0) {
      return hA % i0;
    },
    hjozq: function (hA, i0) {
      return hA % i0;
    },
    XXkLX: function (hA, i0) {
      return hA < i0;
    },
    esRuL: function (hA, i0) {
      return hA % i0;
    },
    anlHi: hQ("wR1d", 1520, 1809),
  };
  if (
    !V[hK("Nlyg", 2304, 1598)](yp) ||
    V[hK("tR8B", 2023, 1613)](c[hH(1162, "R5(U", 1465)], V[hQ("CjRN", 258, 865)]) ||
    !w[hH(-809, "zb85", 132)](V[hQ("$a3e", 2723, 2231)]) ||
    V[hK("25jp", 1519, 2310)](c[hH(274, "QUo7", 1241)], 0) ||
    V[hK("4)a3", -7, 727)](c[hH(932, "kQVQ", 80)], 0) ||
    c[hH(2354, "7OMN", 1618)]
  ) {
    return null;
  }
  let y = V[hH(1141, "r!4a", 1471)](J9);
  if (!y) {
    return null;
  }
  function hK(hA, i0, i1) {
    return y0(hA - 346, hA, i1 - 222);
  }
  if (
    V[hK("tR8B", 1634, 1472)](
      V[hH(2372, "Nlyg", 1599)](V[hQ("Nlyg", 1303, 1758)](w[hQ("kYZ$", 1564, 1155)], 0), 3),
      0,
    )
  ) {
    return "";
  }
  let hz = c[hK("wR1d", 1307, 1141)];
  if (!hz) {
    return null;
  }
  function hH(hA, i0, i1) {
    return y0(hA - 109, i0, i1 - -319);
  }
  let hX = V[hQ("G*Jl", 3399, 2495)](Number, c[hH(-1, "v$$v", 399)]);
  if (V[hK("]F)!", 536, 887)](hX, 0)) {
    if (
      V[hK("kQVQ", 1457, 1578)](
        V[hK("wZ&$", 1503, 495)](V[hK("7OMN", 1210, 1207)](Number, hz[0]), 0),
        y[hQ("r!4a", 2282, 2302)],
      )
    ) {
      return "b1";
    } else {
      return V[hH(206, "o8LY", 465)];
    }
  }
  function hQ(hA, i0, i1) {
    return y0(hA - 262, hA, i1 - 510);
  }
  if (V[hH(-50, "tR8B", 95)](hX, 1) || V[hH(-74, "P$Em", 699)](hX, 2)) {
    return "b1";
  }
  if (V[hQ("o8LY", 304, 1146)](hX, 4)) {
    if (
      V[hH(263, "L47D", 662)](
        V[hH(182, "l#By", 341)](V[hQ("L47D", 1226, 1652)](Number, hz[4]), 0),
        0,
      )
    ) {
      return "b1";
    } else {
      return "up";
    }
  }
  if (V[hK("ckex", 1383, 1410)](hX, 10)) {
    if (V[hK("zb85", 794, 652)](V[hQ("7OMN", 2638, 1864)], V[hQ("i$6c", 2351, 1847)])) {
      let hA = q(K, z);
      if (
        !X.has(hA) &&
        !!Q.has(hA) &&
        (A !== "j2" || !V0.has(V1(V2, V3 - 1))) &&
        (V4 !== "j3" || (!V5.has(V6(V7, V8 - 1)) && !V9.has(VV(Vy, VJ - 2))))
      ) {
        VP.set(hA, [Va, Vl, Vh]);
        Vi.push([Vg, VS]);
      }
    } else {
      let i0 = y[hQ("5yD(", 2015, 2516)];
      if (V[hK("kYZ$", 1234, 914)](i0, V[hQ("qBjg", 2600, 1782)])) {
        let i2 = V[hQ("oX^J", 1676, 1137)](J8)[hH(-1021, "7OMN", -115)]((i3) => i3 !== 0);
        i0 = i2[hK("eqC*", 1986, 2108)]
          ? i2[
              V[hK("1x)n", 1978, 1760)](
                V[hK("&Uh1", 2414, 2391)](
                  V[hQ("RBn7", 2697, 2716)](Number, c[hQ("7OMN", 1690, 2170)]),
                  0,
                ),
                i2[hK("iC20", -66, 679)],
              )
            ]
          : 0;
      }
      let i1 = V[hQ("[dV(", 1881, 1973)](V[hK("RBn7", 1060, 1893)](Number, hz[2]), 0);
      if (
        V[hH(1602, "oX^J", 989)](V[hK("v$$v", 1603, 595)](i1, 3), V[hQ("6e)s", 2728, 2111)](i0, 3))
      ) {
        if (V[hQ("]F)!", 1508, 1964)](i0, 3)) {
          return V[hQ("]^fO", 1691, 1377)];
        } else {
          return V[hK("P$Em", 1790, 803)];
        }
      } else if (
        V[hK("*lE%", 2342, 1463)](V[hH(-419, "oX^J", 9)](i1, 3), V[hH(596, "]^fO", 1406)](i0, 3))
      ) {
        if (
          V[hK("4)a3", 1606, 2073)](
            V[hK("&Uh1", 2384, 1514)](i1, 3),
            V[hH(-111, "qBjg", 201)](i0, 3),
          )
        ) {
          return V[hQ("25jp", 1963, 2143)];
        } else {
          return "up";
        }
      } else {
        return "b1";
      }
    }
  }
  return null;
}
K(JV, y0(844, "m01*", 1322) + "on");
const Jy = {
  [VS(1887, 2578, "CjRN")]: !0,
};
const JJ = {
  [y0(415, "o8LY", 577)]: !0,
};
var JP = Jy;
var Ja = JJ;
function Jl(V) {
  const y = {
    zXuwF: function (i1) {
      return i1();
    },
    OqQgJ: function (i1, i2) {
      return i1 !== i2;
    },
    RrbgJ: hA(-258, "gDN(", 612) + "e",
    fxtQm: function (i1, i2) {
      return i1(i2);
    },
    ZnRZK: hA(-90, "P$Em", 871) + hQ(619, 1385, "wR1d"),
    nCHVS: hQ(20, 811, "ZI9W") + hQ(2130, 1682, "&EKZ"),
    uzdou: function (i1, i2) {
      return i1 && i2;
    },
    qjwjt: function (i1, i2) {
      return i1 === i2;
    },
    GlYyp: function (i1, i2) {
      return i1 === i2;
    },
    PlcwF: function (i1, i2) {
      return i1 === i2;
    },
    QmLkX: hQ(855, 1598, "P$Em") + hA(1544, "oX^J", 1691),
    pcGgu: function (i1, i2) {
      return i1 && i2;
    },
    DIuHE: hX(2785, "25jp", 2230) + hA(2524, "&Uh1", 1960),
  };
  if (
    !y[hA(1428, "o8LY", 1703)](yp) ||
    !V ||
    V[hQ(2267, 1420, "CjRN")] ||
    y[hA(840, "]F)!", 455)](c[hX(1925, "]F)!", 2220)], y[hA(1596, "l#By", 2186)])
  ) {
    return null;
  }
  if (y[hQ(1525, 1840, "qDWf")](JE, V)) {
    return Ja;
  }
  let hK = null;
  let hz = w[hX(3011, "0aTl", 3936)](y[hA(171, "Nlyg", 564)]);
  let hH = w[hA(1745, "$a3e", 1733)](y[hA(552, "7OMN", 788)]);
  function hX(i1, i2, i3) {
    return V7(i2, i1 - 183, i3 - 5);
  }
  function hQ(i1, i2, i3) {
    return V7(i3, i2 - -776, i3 - 375);
  }
  if (
    y[hA(1554, "gDN(", 1556)](hz, hH) &&
    !hH[hX(2379, "CjRN", 2883)] &&
    y[hX(2858, "Ini@", 3179)](hH[hA(2054, "25jp", 1916)], 0)
  ) {
    hK = y[hA(1361, "l#By", 1269)](hz[hX(2790, "#$OJ", 3009)], 1)
      ? hH
      : y[hX(2144, "qBjg", 2451)](hz[hX(1892, "G*Jl", 1792)], 1)
        ? JP
        : null;
  }
  function hA(i1, i2, i3) {
    return V7(i2, i3 - -688, i3 - 208);
  }
  let i0 = w[hQ(1047, 1071, "qDWf")](y[hX(1932, "$a3e", 992)]);
  if (
    y[hQ(1694, 1611, "kQVQ")](!hK, i0) &&
    y[hQ(1972, 1439, "$a3e")](i0[hX(2399, "6e)s", 1841)], 2)
  ) {
    let i1 = w[hQ(330, 369, "&EKZ")](y[hA(919, "6e)s", 1522)])[hA(-243, "CjRN", 208)](
      (i2) =>
        !i2[hQ(823, 872, "&Uh1")] && !!i2[hQ(1241, 965, "l#By")] && !i2[hA(775, "&EKZ", 1042)],
    );
    hK =
      i1[hA(958, "qDWf", 362)]((i2) => i2[hQ(432, 761, "r!4a")] === i0[hA(839, "eqC*", 865)]) ||
      i1[0] ||
      null;
  }
  return hK;
}
K(Jl, y0(219, "0aTl", 755));
function Jh(V) {
  const y = {
    cvGfn: function (i2, i3) {
      return i2(i3);
    },
    mmRbN: function (i2, i3) {
      return i2(i3);
    },
    LhNBQ: hX(973, 209, "L47D"),
    kmBms: hK("Nlyg", 2148, 2819),
    KUbVc: hH(-942, -26, "kQVQ"),
    YeGCF: function (i2, i3) {
      return i2 === i3;
    },
    ciEBh: hH(1138, 466, "yX#m") + hX(2152, 1212, "&EKZ"),
    LxTRd: function (i2, i3) {
      return i2 !== i3;
    },
    MXwiO: function (i2, i3) {
      return i2 / i3;
    },
    WfSfD: function (i2, i3) {
      return i2 + i3;
    },
    lrOXl: function (i2, i3) {
      return i2 / i3;
    },
    XrJww: function (i2, i3) {
      return i2 + i3;
    },
    UJFGf: function (i2, i3) {
      return i2 + i3;
    },
    WsCUF: function (i2, i3) {
      return i2 > i3;
    },
    NEcRf: function (i2, i3) {
      return i2 - i3;
    },
    hgdmG: function (i2, i3) {
      return i2 > i3;
    },
    TwqUs: function (i2, i3) {
      return i2 > i3;
    },
    Qczaa: function (i2, i3) {
      return i2 - i3;
    },
  };
  function hK(i2, i3, i4) {
    return y0(i2 - 3, i2, i3 - 957);
  }
  if (y[hH(1197, 811, "o8LY")](Jd, V)) {
    return !0;
  }
  let hz = y[hX(671, 1508, "Nlyg")](Jl, V);
  if (!hz) {
    return !1;
  }
  for (let i2 of [
    y[hH(-381, 443, "r!4a")],
    y[hH(346, 1049, "[dV(")],
    "up",
    y[hK("wR1d", 1659, 2327)],
  ]) {
    r[hH(1153, 202, "rHmw")][i2] = !1;
  }
  if (y[hK("Nlyg", 2750, 2074)](hz, JP) || y[hK("25jp", 1784, 2180)](hz, Ja)) {
    return !0;
  }
  function hH(i3, i4, i5) {
    return y0(i3 - 81, i5, i4 - -548);
  }
  if (hz.is && hz.is(y[hH(775, 39, "25jp")])) {
    if (y[hK("0aTl", 2135, 2177)](hz.on, 1)) {
      r[hX(46, 29, "v$$v")][hK("Nlyg", 1576, 1901)] = true;
      r[hH(2246, 1361, "l#By")][hH(1638, 1385, "o8LY")] = true;
    }
    return !0;
  }
  function hX(i3, i4, i5) {
    return y0(i3 - 35, i5, i4 - -566);
  }
  let hQ = y[hX(-251, 310, "oX^J")](
    y[hX(718, 130, "6e)s")](V[hK("1x)n", 2997, 3889)], V[hX(443, 505, "25jp")]),
    2,
  );
  let hA = y[hH(933, 497, "R5(U")](
    y[hX(1909, 1130, "25jp")](V[hH(-582, 320, "Ini@")], V[hX(-301, 446, "wZ&$") + "m"]),
    2,
  );
  let i0 = y[hX(1135, 277, "*lE%")](
    y[hK("l#By", 1178, 272)](hz[hK("tR8B", 3132, 3191)], hz[hK("7D5s", 2048, 1271)]),
    2,
  );
  let i1 = y[hH(911, 952, "zb85")](
    y[hH(1100, 941, "judH")](hz[hH(1045, 1403, "wZ&$")], hz[hH(1107, 918, "4)a3") + "m"]),
    2,
  );
  if (y[hH(-235, -57, "kYZ$")](y[hK("CLkT", 1897, 1605)](i0, hQ), 2)) {
    r[hX(664, 1343, "l#By")][hK("m01*", 2033, 1271)] = true;
  } else if (y[hX(1547, 1146, "]^fO")](y[hH(699, 159, "m01*")](hQ, i0), 2)) {
    r[hH(1543, 757, "7OMN")][hH(808, 704, "oX^J")] = true;
  }
  if (y[hK("eqC*", 2215, 2045)](y[hK("G*Jl", 2850, 2971)](i1, hA), 2)) {
    r[hH(-664, -337, "G*Jl")][hK("7D5s", 2516, 2048)] = true;
  } else if (y[hH(469, 719, "m01*")](y[hK("]F)!", 2061, 2715)](hA, i1), 2)) {
    r[hX(1732, 782, "[dV(")].up = true;
  }
  return !0;
}
K(Jh, y0(569, "yX#m", 235) + y0(3149, "1x)n", 2198));
function Ji() {
  function V(hQ, hA, i0) {
    return VS(i0 - -480, hA - 157, hA);
  }
  function y(hQ, hA, i0) {
    return VS(hA - 320, hA - 80, hQ);
  }
  const hK = {
    nQppY: y("qBjg", 1304, 1528),
    mlhcV: function (hQ, hA) {
      return hQ(hA);
    },
    GoXtr: V(1436, "]F)!", 768) + V(79, "L47D", -187),
    WJJXe: function (hQ, hA) {
      return hQ === hA;
    },
    FbVxE: function (hQ, hA) {
      return hQ % hA;
    },
    BApRC: function (hQ, hA) {
      return hQ | hA;
    },
  };
  function hz(hQ, hA, i0) {
    return VS(hA - -34, hA - 179, i0);
  }
  let hH = w[hz(244, 735, "o8LY")](hK[hz(926, 135, "eqC*")]);
  let hX = hK[y("*lE%", 1800, 1127)](Jl, hH);
  if (hX && hX.is && hX.is(hK[V(1302, "tR8B", 784)])) {
    return (
      hK[y("&EKZ", 2417, 3418)](hX.on, 1) &&
      hK[y("R5(U", 1966, 1580)](
        hK[y("wZ&$", 2247, 2667)](hK[hz(446, 699, "L47D")](w[hz(2185, 2035, "Nlyg")], 0), 4),
        0,
      )
    );
  } else {
    return null;
  }
}
K(Ji, VS(692, -172, "6e)s") + "m");
var Jg = null;
function JS() {
  function V(hQ, hA, i0) {
    return y0(hQ - 63, i0, hQ - -99);
  }
  const y = {
    hokCu: function (hQ, hA) {
      return hQ(hA);
    },
    hatTC: function (hQ, hA) {
      return hQ === hA;
    },
    jshhz: V(1177, 1903, "6e)s"),
    Vgtyp: hX("0aTl", 119, -101),
    lyEGQ: hX("kQVQ", 96, -659),
  };
  function hK(hQ, hA, i0) {
    return y0(hQ - 21, hQ, i0 - 475);
  }
  if (Jg) {
    return Jg;
  }
  let hz = y[V(1611, 2163, "#$OJ")](v, b);
  let hH = hz[hX("R5(U", 1285, 1761)];
  function hX(hQ, hA, i0) {
    return y0(hQ - 217, hQ, hA - -284);
  }
  try {
    if (y[V(1798, 2738, "judH")](y[hK("i$6c", 2753, 2450)], y[hK("m01*", 2390, 2341)])) {
      if (VR) {
        yL = yf.lastDir;
        yD = yO.commitLeft;
        yx = yC.obsSpeed;
        yB = yb.lastPos ? yd.lastPos.slice() : null;
        yw = yp.stepCalls;
        yq.clear();
        for (let [hQ, hA] of Jx.blockedDir) {
          JC.set(hQ, hA);
        }
        yH.assign(yX, yQ.blockedKey);
        yA.assign(J0, J1.heldLast);
        J2 = J3.uiTick;
        J4 = J5.menuPlan
          ? {
              frames: J6.menuPlan.frames.slice(),
              i: J7.menuPlan.i,
            }
          : null;
        J8.b1 = J9.syn.b1;
        JV.pulse = Jy.syn.pulse;
        JJ.zHeld = !!JP.syn.zHeld;
        Ja.zPrev = !!Jl.syn.zPrev;
        Jh.xHeld = !!Ji.syn.xHeld;
        Jg.xPrev = !!JS.syn.xPrev;
        Jt.edges = Jk.syn.edges || "";
        JF = JN.fireClock;
        JW = JT.boxClock;
        JU = JG.lastPunch;
        JE.last = Jv.boxAttack.last;
        Js.windup = {
          ...Jc.boxAttack.windup,
        };
        if (Ju.ch4) {
          JR(JM.ch4);
        } else {
          Jm();
        }
        if (JY.ch5) {
          JI(JZ.ch5);
        } else {
          Jj();
        }
        JL(Jf.ut);
        JD(JO.mercy);
      }
    } else {
      const i0 = {
        [hK("qBjg", 591, 1519)]: () => hH,
        [hK("kQVQ", 1495, 1003)]: () => {},
        [V(831, 536, "ckex") + "le"]: !0,
      };
      Object[hK("5yD(", 1120, 1452) + hX("$a3e", 776, 1108)](hz, y[hK("#$OJ", 1175, 2123)], i0);
    }
  } catch {}
  return (Jg = hz);
}
K(JS, V7("iC20", 2781, 2835));
const Jt = {
  [VS(120, -128, "ckex")]: null,
  [V7("Ini@", 1516, 547)]: null,
  i: 0,
  n: 0,
  [VS(1940, 932, "qDWf")]: -9,
  [VS(1230, 835, "[dV(")]: "",
  [y0(482, "(gRZ", 556)]: -1,
  t0: -1,
  [y0(988, "&Uh1", 280)]: !1,
};
var Jk = Jt;
function JF() {
  function V(hz, hH, hX) {
    return y0(hz - 183, hX, hz - -793);
  }
  function y(hz, hH, hX) {
    return y0(hz - 374, hX, hH - -180);
  }
  function hK(hz, hH, hX) {
    return y0(hz - 342, hH, hX - -413);
  }
  return {
    ...Jk,
    plan: Jk[hK(-844, "l#By", 3)] ? Jk[V(1385, 2036, "wR1d")][y(-772, 77, "qBjg")]() : null,
    trace: Jk[V(-457, -508, "o8LY")] ? Jk[V(732, -13, "#$OJ")][V(-435, -1033, "CLkT")]() : null,
  };
}
K(JF, V7("7D5s", 1454, 2145) + "e");
function JN(V) {
  const y = {
    wOPCG: function (hX) {
      return hX();
    },
  };
  function hK(hX, hQ, hA) {
    return y0(hX - 36, hQ, hX - 387);
  }
  function hz(hX, hQ, hA) {
    return y0(hX - 401, hQ, hA - 758);
  }
  function hH(hX, hQ, hA) {
    return y0(hX - 213, hQ, hA - 323);
  }
  if (V) {
    Object[hK(2123, "*lE%", 2895)](Jk, V);
    Jk[hH(2114, "R5(U", 2205)] = V[hK(1632, "o8LY", 951)]
      ? V[hH(3075, "i$6c", 2365)][hH(1563, "rHmw", 1177)]()
      : null;
    Jk[hz(2028, "7OMN", 1238)] = V[hz(1264, "qBjg", 1206)]
      ? V[hK(1277, "r!4a", 1693)][hH(1310, "&Uh1", 781)]()
      : null;
  } else {
    y[hH(3370, "R5(U", 2438)](JW);
  }
}
K(JN, y0(1808, "oX^J", 1108) + "e");
function JW() {
  function V(hz, hH, hX) {
    return VS(hH - -190, hH - 211, hz);
  }
  function y(hz, hH, hX) {
    return VS(hX - -133, hH - 465, hH);
  }
  function hK(hz, hH, hX) {
    return VS(hz - -579, hH - 283, hH);
  }
  Jk[hK(297, "(gRZ", 484)] = null;
  Jk[hK(810, "gDN(", 1700)] = null;
  Jk.i = 0;
  Jk.n = 0;
  Jk[hK(-20, "wZ&$", -587)] = -9;
  Jk[V("[dV(", 1040, 819)] = "";
  Jk[hK(-60, "QUo7", -708)] = -1;
  Jk.t0 = -1;
  Jk[V("(gRZ", 435, -440)] = !1;
}
K(JW, VS(426, 1372, "rHmw") + "te");
const JT = {
  [VS(1291, 656, "iC20")]: 0,
  [VS(223, 197, "kYZ$")]: 0,
  [V7("yX#m", 2299, 2981)]: 0,
  ms: 0,
};
var JU = JT;
var JG = {};
for (let [iH, iX] of Object[y0(1499, "RBn7", 1737)](yw)) {
  let iQ = [];
  for (let [g0, g1] of iX[VS(760, -43, "wR1d")]) {
    for (let g2 = 0; g2 < g0; g2++) {
      iQ[y0(677, "G*Jl", 1399)](g1);
    }
  }
  const iA = {
    [V7("CjRN", 2318, 1497)]: iQ,
    at: iX.at,
  };
  JG[iH] = iA;
}
function JE(V) {
  const y = {
    [hz(472, "L47D", 281)]: function (i0, i1) {
      return i0 !== i1;
    },
  };
  function hK(i0, i1, i2) {
    return y0(i0 - 38, i1, i2 - -903);
  }
  y[hK(-101, "o8LY", 354)] = hH(2098, 2617, "i$6c");
  y[hz(-532, "oX^J", 451)] = hK(269, "0aTl", 977) + "e";
  function hz(i0, i1, i2) {
    return y0(i0 - 53, i1, i2 - -635);
  }
  y[hK(1133, "wZ&$", 155)] = function (i0, i1) {
    return i0 | i1;
  };
  y[hH(2196, 3088, "G*Jl")] = function (i0, i1) {
    return i0 === i1;
  };
  y[hK(-59, "#$OJ", 647)] = function (i0, i1) {
    return i0 === i1;
  };
  y[hK(-1001, "CLkT", -341)] = hH(1169, 857, "yX#m") + hK(-1065, "i$6c", -447);
  y[hz(-162, "wR1d", -275)] = function (i0, i1) {
    return i0 === i1;
  };
  y[hz(776, "L47D", 1159)] = function (i0, i1) {
    return i0 | i1;
  };
  y[hK(495, "#$OJ", -265)] = hH(1954, 1721, "ZI9W") + hz(343, "gDN(", 99);
  y[hH(1415, 2276, "l#By")] = hz(2009, "25jp", 1308);
  function hH(i0, i1, i2) {
    return y0(i0 - 139, i2, i0 - 581);
  }
  y[hz(209, "wR1d", 82)] = hK(405, "qBjg", 220);
  y[hH(2279, 2169, "CLkT")] = function (i0, i1) {
    return i0 === i1;
  };
  y[hz(948, "QUo7", 1260)] = hK(-22, "v$$v", -230);
  const hX = y;
  if (
    hX[hz(153, "7OMN", 142)](Y, hX[hz(-334, "iC20", 649)]) ||
    hX[hK(25, "L47D", 13)](c[hz(1243, "]F)!", 427)], hX[hz(595, "P$Em", 977)]) ||
    hX[hK(1975, "iC20", 1281)](hX[hH(2673, 2055, "qBjg")](c[hH(1879, 2340, "$a3e")], 0), 2) ||
    !V ||
    V[hz(727, "QUo7", -173)] ||
    V[hz(-1250, "wZ&$", -432)] ||
    (!hX[hH(1209, 197, "qDWf")](V[hK(-246, "25jp", 511)], 1) &&
      !hX[hz(-862, "0aTl", -231)](V[hH(1969, 1660, "R5(U")], 2))
  ) {
    return null;
  }
  let hQ = w[hz(1054, "ZI9W", 1530)](hX[hz(1233, "l#By", 1299)]);
  if (!hQ || hX[hH(1898, 1813, "qDWf")](hQ[hz(-201, "7D5s", 117)], 1)) {
    return null;
  }
  let hA = hX[hK(655, "judH", -92)](c[hH(1812, 1007, "zb85") + "p"], 0);
  if (hX[hz(769, "l#By", 459)](hA, 95)) {
    if (w[hz(1562, "yX#m", 959)](hX[hH(1647, 2506, "0aTl")])) {
      return hX[hK(323, "*lE%", 114)];
    } else {
      return hX[hK(998, "L47D", 682)];
    }
  } else if (hX[hz(1588, "7D5s", 1488)](hA, 201)) {
    return hX[hK(-207, "ZI9W", 430)];
  } else {
    return null;
  }
}
K(JE, y0(3005, "l#By", 2009));
function Jv(V) {
  const y = {
    xgHXT: function (i0, i1) {
      return i0(i1);
    },
    zOMEl: function (i0, i1) {
      return i0 === i1;
    },
    zgVLR: hK("i$6c", 194, 527),
    nUsEd: function (i0, i1) {
      return i0 !== i1;
    },
    qAQGx: hK("Ini@", 731, 998),
    gPbiW: hz("P$Em", 460, 1287),
    QTGlx: function (i0, i1) {
      return i0 === i1;
    },
    IATZZ: function (i0, i1) {
      return i0 | i1;
    },
    PbaQV: function (i0, i1) {
      return i0 - i1;
    },
    CatPv: function (i0, i1) {
      return i0 | i1;
    },
    tpqqy: function (i0, i1) {
      return i0 === i1;
    },
    JRSdB: function (i0, i1) {
      return i0 >= i1;
    },
  };
  function hK(i0, i1, i2) {
    return VS(i1 - -475, i1 - 264, i0);
  }
  function hz(i0, i1, i2) {
    return VS(i1 - -121, i1 - 297, i0);
  }
  let hH = y[hX("rHmw", 1751, 1473)](JE, V);
  if (y[hz("7D5s", 352, 467)](hH, y[hX("]F)!", 569, -311)])) {
    return !0;
  }
  function hX(i0, i1, i2) {
    return VS(i1 - 489, i1 - 266, i0);
  }
  if (y[hX("5yD(", 1657, 903)](hH, y[hz("gDN(", 1208, 655)])) {
    return !1;
  }
  let hQ = w[hX("0aTl", 2519, 1556)](y[hX("qDWf", 926, 1641)]);
  let hA = hQ
    ? y[hK("$a3e", 1100, 1835)](y[hz("kYZ$", 809, 2)](hQ[hX("R5(U", 2487, 3448)], 0), 4)
      ? 4
      : y[hX("25jp", 1149, 356)](y[hK("#$OJ", 62, 600)](hQ[hX("R5(U", 2487, 1917)], 0), 1)
    : -1;
  if (
    y[hK("1x)n", 730, 434)](Jk[hX("Ini@", 2020, 2091)], hA) &&
    y[hz("#$OJ", 308, 808)](Jk.t0, 0)
  ) {
    return !Jk[hK("v$$v", 520, 273)];
  } else {
    return !JG[hA];
  }
}
K(Jv, V7("]^fO", 1391, 2162) + "es");
const Js = {
  u: "up",
};
Js.d = V7("o8LY", 2613, 2094);
Js.l = V7("oX^J", 1932, 1423);
Js.r = V7("i$6c", 2462, 2223);
var Jc = Js;
function Ju(V) {
  const y = {};
  function hK(hQ, hA, i0) {
    return V7(i0, hQ - -602, i0 - 478);
  }
  function hz(hQ, hA, i0) {
    return V7(i0, hQ - -960, i0 - 497);
  }
  y[hH("(gRZ", 3035, 2814)] = hH("ZI9W", 2256, 1543);
  y[hH("0aTl", 1452, 2377)] = hK(570, 397, "QUo7");
  y[hz(1691, 2226, "]F)!")] = hz(1655, 2505, "ZI9W");
  y[hz(1788, 2242, "&Uh1")] = function (hQ, hA) {
    return hQ || hA;
  };
  function hH(hQ, hA, i0) {
    return V7(hQ, i0 - 259, i0 - 393);
  }
  const hX = y;
  for (let hQ of [
    hX[hH("#$OJ", 1527, 1943)],
    hX[hH("qBjg", 3324, 2883)],
    "up",
    hX[hz(-19, 142, "4)a3")],
  ]) {
    r[hz(681, 559, "*lE%")][hQ] = !1;
  }
  for (let hA of hX[hH("i$6c", 3023, 2297)](V, "")) {
    if (Jc[hA]) {
      r[hz(1483, 1341, "QUo7")][Jc[hA]] = true;
    }
  }
}
K(Ju, V7("qBjg", 1623, 1769));
var JR = 0;
function JM(V, hK, hz) {
  const hH = {
    FSRKr: i1(1147, 590, "P$Em"),
    SozKj: i1(-662, -1320, "r!4a"),
    kRWJK: hQ(866, "l#By", 637),
    TUEFO: function (iJ, iP) {
      return iJ(iP);
    },
    WaJYJ: function (iJ, iP) {
      return iJ(iP);
    },
    nrKvx: function (iJ) {
      return iJ();
    },
    BNBHP: function (iJ) {
      return iJ();
    },
    YQdVJ: function (iJ, iP) {
      return iJ !== iP;
    },
    SIEMC: hQ(516, "Nlyg", 816),
    lqJxK: function (iJ, iP) {
      return iJ < iP;
    },
    EuftC: function (iJ, iP) {
      return iJ === iP;
    },
    CJnHb: hQ(1487, "zb85", 1147),
    LDOSh: function (iJ, iP) {
      return iJ - iP;
    },
    gFrnj: hQ(220, "CLkT", -593),
    wTish: function (iJ, iP, ia) {
      return iJ(iP, ia);
    },
    uqjcC: function (iJ) {
      return iJ();
    },
    ctIKM: hX("R5(U", 2002, 1224),
    RWspr: i1(504, 731, "&Uh1"),
    hHwAJ: function (iJ, iP) {
      return iJ < iP;
    },
    deqhU: i1(166, 821, "&Uh1"),
    VMGeq: hQ(1629, "Nlyg", 1129),
    ATlik: function (iJ, iP) {
      return iJ * iP;
    },
    xmFBB: function (iJ, iP) {
      return iJ - iP;
    },
    MZvcy: function (iJ, iP) {
      return iJ + iP;
    },
    KwCqj: function (iJ, iP) {
      return iJ / iP;
    },
    cLWYf: hQ(1040, "[dV(", 1716),
    NsYJZ: function (iJ, iP) {
      return iJ && iP;
    },
    IhQoF: function (iJ, iP) {
      return iJ + iP;
    },
    xbPbq: function (iJ, iP) {
      return iJ / iP;
    },
    KVmjz: function (iJ, iP) {
      return iJ + iP;
    },
    YRkIt: function (iJ, iP) {
      return iJ * iP;
    },
    zkBSG: function (iJ, iP) {
      return iJ - iP;
    },
    AWjhV: function (iJ, iP) {
      return iJ / iP;
    },
    pYoXo: function (iJ, iP) {
      return iJ + iP;
    },
    LCFdi: function (iJ, iP) {
      return iJ - iP;
    },
    EiqOr: function (iJ, iP) {
      return iJ - iP;
    },
    DHzrK: function (iJ, iP) {
      return iJ - iP;
    },
    aCEcx: function (iJ, iP) {
      return iJ(iP);
    },
    KRUWj: function (iJ) {
      return iJ();
    },
  };
  function hX(iJ, iP, ia) {
    return y0(iJ - 73, iJ, iP - 302);
  }
  function hQ(iJ, iP, ia) {
    return y0(iJ - 84, iP, iJ - -438);
  }
  let hA = r[i1(1088, 109, "G*Jl")];
  let i0 = {};
  function i1(iJ, iP, ia) {
    return y0(iJ - 486, ia, iJ - -868);
  }
  for (let iJ of [
    hH[i1(219, 505, "wR1d")],
    hH[hX("eqC*", 785, 1440)],
    "up",
    hH[hX("5yD(", 1709, 2711)],
    "b1",
    "b2",
  ]) {
    i0[iJ] = r[hQ(-182, "m01*", -1118)][iJ];
  }
  let i2 = hH[i1(-253, -773, "G*Jl")](Number, c.hp) || 0;
  let i3 = c[i1(692, 1542, "QUo7")];
  let i4 = c[hQ(62, "&EKZ", 743) + "r"] || [];
  let i5 = hH[hQ(1284, "Nlyg", 1528)](Number, i4[0]) || 32;
  let i6 = hH[i1(238, 237, "4)a3")](Number, i4[1]) || 602;
  let i7 = hH[i1(115, -873, "25jp")](Number, i4[2]) || 250;
  let i8 = hH[hX("ckex", 2173, 1975)](Number, i4[3]) || 385;
  let i9 = 0;
  let iV = 0;
  let iy = hH[i1(89, -466, "*lE%")](I);
  hH[hQ(-114, "(gRZ", 832)](p, !1);
  hH[i1(1078, 888, "*lE%")](q);
  try {
    if (hH[hQ(1419, "Nlyg", 1762)](hH[hQ(1003, "1x)n", 1617)], hH[i1(29, -1, "25jp")])) {
      i2(i3);
      i4();
      i5.synthetic = i6;
      i5(M);
    } else {
      for (let ia = 0; hH[hQ(202, "l#By", 656)](ia, hz); ia++) {
        if (hH[hX("$a3e", 2490, 2630)](hH[hQ(284, "r!4a", 861)], hH[hQ(382, "qBjg", 45)])) {
          let il = hH[hQ(1516, "qBjg", 1464)](hK[ia], undefined)
            ? hK[ia]
            : hK[hH[hX("25jp", 2519, 3128)](hK[hQ(-67, "[dV(", -29)], 1)];
          r[hQ(877, "kQVQ", 708)] = () => Ju(il);
          try {
            if (hH[i1(-73, 446, "judH")](hH[hQ(-94, "wZ&$", 835)], hH[i1(407, 1180, "qDWf")])) {
              hH[hX("5yD(", 859, 1699)](C, U, hH[hQ(586, "ckex", 1567)](JS));
            } else {
              let ii = !!c[u];
              let ig = !!i5[il];
              i6.held[i7] = ii;
              i8.pressed[i9] = ii && !ig;
              if (!ii && ig) {
                iV.released[iy] = true;
              }
            }
          } catch {
            if (
              hH[hX("1x)n", 1516, 1380)](hH[hQ(1045, "R5(U", 1495)], hH[hX("]^fO", 1717, 1471)])
            ) {
              break;
            } else {
              let iS = (ia.idealrot !== undefined ? il.idealrot : ih.image_angle) || 0;
              let it = Q.image_angle !== undefined ? A.image_angle : iS;
              if (V0.abs(it - iS) > V1.beamAlign) {
                return;
              }
              let ik = ((iS - 90) * V2.PI) / 180;
              let iF = V3.cos(ik);
              let iN = -V4.sin(ik);
              let iW = V5.abs(V6.image_xscale || 1);
              let iT = V7.x + iF * 35 * iW;
              let iU = V8.y + iN * 35 * iW;
              let iG = V9.ceil(VV.floor((iW * 35) / 4) * 1.5) + 1;
              let iE = Vy.alarm ? VJ(VP.alarm[4]) : -1;
              let iv = iE > 0 ? iE : 0;
              let ic;
              let iu;
              if (Va.con === 7) {
                ic = Vl.max(1, 2 - (Vh.btimer || 0));
                iu = 16 - (Vi.btimer || 0);
              } else if (Vg.con === 6) {
                ic = iv + 1;
                iu = iv + 15;
              } else if (VS.con === 5) {
                ic = 6;
                iu = 20;
              } else if (Vk.con === 4) {
                ic = iv + 5;
                iu = iv + 19;
              } else {
                ic = 15;
                iu = 40;
              }
              if (!(iu < 1)) {
                for (let io = 0; io <= 1000; io += iG) {
                  VN.push({
                    x: iT + iF * io,
                    y: iU + iN * io,
                    vx: 0,
                    vy: 0,
                    hw: iG,
                    hh: iG,
                    beam: 1,
                    bax: iF,
                    bay: iN,
                    t0: ic,
                    ttl: iu,
                  });
                }
              }
            }
          }
          iV++;
          let ih = hH[hQ(1086, "QUo7", 557)](Number, c.hp) || 0;
          if (hH[i1(-138, -465, "L47D")](ih, i2)) {
            if (hH[hQ(494, "(gRZ", 286)](hH[hQ(698, "Ini@", 1268)], hH[hQ(922, "oX^J", 126)])) {
              i9 += hH[hX("eqC*", 744, 632)](
                hH[hQ(1052, "qBjg", 1596)](i2, ih),
                hH[hX("25jp", 1276, 1104)](
                  10,
                  hH[hX("Nlyg", 2341, 1792)](
                    hH[i1(296, -171, "v$$v")](10, hH[hX("o8LY", 1680, 1946)](hz, ia)),
                    hz,
                  ),
                ),
              );
              break;
            } else {
              let iR = V8.first("obj_purplecontrols");
              if (iR) {
                V9 -= VV.max(0, (Vy(iR.difficulty) || 0) - VJ) * 300;
              }
              if (iR && (VP(iR.difficulty) || 0) === Va) {
                Vl -= Vh.max(0, (Vi(iR.pattern_phase) || 0) - Vg) * 150;
              }
              if (VS && Vk >= 0) {
                let im = Vp();
                if (im >= 0) {
                  Vq -= (im - VK) * 5;
                }
              }
              VT -=
                VU.max(
                  0,
                  VG.all("obj_pinknodeact").filter((iY) => !iY.destroyed && iY.mode === 1).length -
                    VE,
                ) * 100;
              Vv -= Vc.max(0, Vu(1) - VR) * 300;
              VM += Vm.max(0, VY(0) - VI) * 300;
              let iM = VZ.first("obj_heart");
              if (iM) {
                let iY = Infinity;
                for (let iI of y3.all("obj_dokiheart")) {
                  if (!iI.destroyed) {
                    iY = y4.min(iY, y5.hypot(iI.x - (iM.x + 9), iI.y - (iM.y + 9)));
                  }
                }
                if (iY === Infinity) {
                  for (let iZ of y6.all("obj_pinknodeact")) {
                    if (!iZ.destroyed && iZ.mode === 1 && iZ.active === 1) {
                      iY = y7.min(iY, y8.hypot(iZ.x - (iM.x + 9), iZ.y - (iM.y + 9)));
                    }
                  }
                }
                if (iY < Infinity) {
                  y1 += y2.min(iY, 300) * 0.1;
                }
              }
              if (iR && (iR.mode | 0) === 1) {
                Vb += Vd.abs(Vw(iR.x_ongrid) || 0) * 0.04;
              }
            }
          }
          if (
            c[hX("CLkT", 2331, 1968)] ||
            hH[hQ(-233, "]^fO", 411)](c[i1(-139, -933, "oX^J")], i3)
          ) {
            break;
          }
        } else {
          let ij = c.char[u];
          if (i5.bmenucoord) {
            M.bmenucoord[13];
          }
          let iL = 0;
          let iD = (i6.battlespell && i7.battlespell[i8]) || [];
          let iO = ij === 2 ? i9.actnamesus : ij === 3 ? iV.actnameral : null;
          if (!iO) {
            return -1;
          }
          for (let ix = 0; ix < 3; ix++) {
            let iC = iO[ix] || [];
            let iB = 0;
            for (let ib = 0; ib < iD.length; ib++) {
              if (iD[ib] === -1) {
                while (iB < 6 && (!iC[iB] || iC[iB] === " ")) {
                  iB++;
                }
                if (iC[iB] === b) {
                  return ib;
                }
                iB++;
              }
            }
          }
          return -1;
        }
      }
      let iP = w[hX("#$OJ", 2255, 1767)](hH[hX("]F)!", 1652, 2655)]);
      JR = iP ? Math[hX("zb85", 2104, 3033)](iP.x) : -1;
      if (hH[hX("25jp", 2333, 2994)](iP, !i9)) {
        let id = hH[hQ(332, "0aTl", -589)](
          hH[hQ(892, "i$6c", 1580)](iP[i1(1172, 1370, "1x)n")], iP[hQ(619, "*lE%", -59)]),
          2,
        );
        let iw = hH[i1(1106, 200, "iC20")](
          hH[hX("*lE%", 756, 831)](iP[i1(-284, -575, "RBn7")], iP[i1(793, 834, "i$6c") + "m"]),
          2,
        );
        i9 += hH[hQ(663, "zb85", 1349)](
          hH[hQ(672, "L47D", 25)](
            hH[hQ(709, "6e)s", 1659)](
              Math[i1(459, 1288, "*lE%")](
                hH[i1(-582, -159, "kQVQ")](
                  id,
                  hH[hX("25jp", 1934, 2348)](hH[hX("L47D", 969, 1840)](i5, i6), 2),
                ),
              ),
              Math[hQ(-236, "m01*", -595)](1, hH[hX("Ini@", 2345, 2247)](i6, i5)),
            ),
            hH[hX("6e)s", 1449, 903)](
              Math[i1(-364, -869, "judH")](
                hH[hX("gDN(", 934, 754)](
                  iw,
                  hH[hX("G*Jl", 1620, 1217)](hH[i1(-148, 157, "o8LY")](i7, i8), 2),
                ),
              ),
              Math[i1(-18, -50, "kYZ$")](1, hH[i1(-153, -579, "gDN(")](i8, i7)),
            ),
          ),
          2,
        );
      }
    }
  } finally {
    hH[i1(-627, -1271, "i$6c")](E, V);
    hH[hX("o8LY", 1511, 828)](m);
    hH[hX("25jp", 1285, 2156)](p, iy);
    r[hQ(878, "CjRN", 1147)] = hA;
    for (let ip of Object[hX("m01*", 1349, 1654)](i0)) {
      r[hQ(1044, "wZ&$", 1500)][ip] = i0[ip];
    }
  }
  JU[i1(-173, 672, "judH")]++;
  JU[hQ(1041, "m01*", 1265)] += iV;
  return i9;
}
K(JM, VS(1869, 2074, "tR8B"));
var Jm = K(
  (V, y) =>
    Array[VS(1570, 899, "[dV(")](
      {
        length: y,
      },
      () => V,
    ),
  VS(1536, 1253, "gDN("),
);
function JY(V) {
  function y(i3, i4, i5) {
    return y0(i3 - 128, i4, i5 - 180);
  }
  const hX = {
    zYiRn: function (i3, i4, i5) {
      return i3(i4, i5);
    },
    lmhQM: function (i3, i4) {
      return i3 - i4;
    },
  };
  function hQ(i3, i4, i5) {
    return y0(i3 - 307, i5, i3 - -559);
  }
  let hA = [];
  let i0 = ["", "l", "r", "u", "d", "ul", "ur", "dl", "dr"];
  for (let i3 of i0) {
    hA[hQ(1174, 631, "7D5s")](hX[hQ(93, 175, "zb85")](Jm, i3, V));
  }
  for (let i4 of i0) {
    if (i4) {
      hA[hQ(-122, -24, "(gRZ")]([
        ...hX[i2(9, -736, "7OMN")](Jm, i4, 6),
        ...hX[y(782, "zb85", 832)](Jm, "", hX[y(1700, "QUo7", 1863)](V, 6)),
      ]);
    }
  }
  const i1 = {};
  function i2(i5, i6, i7) {
    return y0(i5 - 147, i7, i5 - -533);
  }
  i1[i2(851, -42, "l#By")] = V;
  hA[hQ(779, 1169, "r!4a")](Array[y(1340, "4)a3", 1028)](i1, (i5, i6) => (i6 & 1 ? "r" : "l")));
  hA[i2(279, 655, "7OMN")](
    Array[hQ(289, 570, "4)a3")](
      {
        length: V,
      },
      (i5, i6) => (i6 & 1 ? "d" : "u"),
    ),
  );
  return hA;
}
K(JY, V7("m01*", 1823, 1288));
var JI = ["", "l", "r", "u", "ul", "ur"];
function JZ() {
  function V(i0, i1, i2) {
    return V7(i0, i2 - -192, i2 - 307);
  }
  const y = {
    ijUiS: function (i0, i1) {
      return i0 < i1;
    },
    KNHZh: function (i0, i1) {
      return i0 <= i1;
    },
    pDGVZ: function (i0, i1, i2) {
      return i0(i1, i2);
    },
    wBgzQ: function (i0, i1, i2) {
      return i0(i1, i2);
    },
    amRDM: function (i0, i1) {
      return i0 - i1;
    },
    mwhRJ: function (i0, i1) {
      return i0 - i1;
    },
    RSBiL: function (i0, i1, i2) {
      return i0(i1, i2);
    },
  };
  function hK(i0, i1, i2) {
    return V7(i2, i1 - -548, i2 - 399);
  }
  let hz = JI[V("G*Jl", 1709, 2532)]((i0) => Jm(i0, Jj));
  for (let i0 = 1; y[V("v$$v", 3160, 2306)](i0, Jj) && y[hK(395, 1206, "Nlyg")](i0, 2); i0++) {
    hz[hH("wR1d", 41, -483)]([
      ...y[hK(407, 1354, "]^fO")](Jm, "u", i0),
      ...y[V("kQVQ", 3137, 2257)](Jm, "", y[hK(1050, 1885, "ZI9W")](Jj, i0)),
    ]);
  }
  for (let i1 = 1; y[hH("r!4a", -1233, -444)](i1, Jj) && y[hH("&EKZ", 578, 578)](i1, 2); i1++) {
    hz[hH("Nlyg", -840, -687)]([
      ...y[hK(1605, 681, "QUo7")](Jm, "", i1),
      ...y[V("P$Em", 3361, 2626)](Jm, "u", y[V("7D5s", 2946, 2168)](Jj, i1)),
    ]);
  }
  function hH(i2, i3, i4) {
    return V7(i2, i4 - -1650, i4 - 184);
  }
  for (let i2 of ["l", "r"]) {
    hz[hK(2546, 1846, "l#By")]([
      i2,
      ...y[V("P$Em", 1644, 976)](Jm, "", y[hK(1138, 728, "yX#m")](Jj, 1)),
    ]);
  }
  return hz;
}
K(JZ, y0(1703, "1x)n", 1980));
var Jj = 6;
var JL = 12;
var Jf = 8;
var JD = 30;
var JO = K((V) => ((V - 312) / 100) ** 2 * 10, VS(1112, 812, "&Uh1"));
function Jx(V) {
  function y(i5, i6, i7) {
    return y0(i5 - 48, i6, i7 - 494);
  }
  const hK = {
    fdsxu: function (i5, i6) {
      return i5 - i6;
    },
    sZNJX: function (i5, i6) {
      return i5 - i6;
    },
    OxuRS: function (i5, i6) {
      return i5 + i6;
    },
    FCNsG: function (i5, i6) {
      return i5 * i6;
    },
    YNZkR: function (i5, i6) {
      return i5 < i6;
    },
    MQHAa: function (i5, i6) {
      return i5 > i6;
    },
    SYzXq: function (i5, i6) {
      return i5 + i6;
    },
    RwMDX: function (i5, i6) {
      return i5 * i6;
    },
    ERmCq: function (i5, i6) {
      return i5 === i6;
    },
    EJRdH: y(677, "o8LY", 1379),
    AmpYx: function (i5, i6) {
      return i5 !== i6;
    },
    XGnpy: y(-13, "wZ&$", 987),
    BJZPr: y(1816, "25jp", 1416),
    mRXMY: function (i5, i6) {
      return i5 === i6;
    },
    ZRfZu: hQ("0aTl", 2202, 2308),
    hppsK: y(1556, "&Uh1", 2518),
    CCPHK: function (i5, i6, i7) {
      return i5(i6, i7);
    },
    wvapg: function (i5) {
      return i5();
    },
    rcWat: function (i5, i6) {
      return i5 !== i6;
    },
    DfmvD: hQ("gDN(", 1945, 2644),
    nrooj: y(2012, "Ini@", 1988),
    umhZZ: hz(215, "v$$v", -640),
    iDKJV: y(1595, "]^fO", 1363) + hQ("$a3e", 1305, 973),
    Zltwo: function (i5, i6) {
      return i5 | i6;
    },
    tDBnV: hz(514, "[dV(", -314) + "e",
    bXlZU: function (i5, i6) {
      return i5(i6);
    },
    mgIAy: hQ("ckex", 2497, 1558) + hz(9, "L47D", -830),
    Upfhf: hz(206, "kYZ$", 670) + hz(1035, "6e)s", 1534),
    XODWB: function (i5, i6) {
      return i5 && i6;
    },
    iywAE: hz(1540, "oX^J", 1696) + y(1659, "]^fO", 1059),
    fcCUo: function (i5, i6) {
      return i5 && i6;
    },
    Gutve: y(287, "7OMN", 919) + hz(1398, "&Uh1", 2021),
    SJyGX: function (i5, i6) {
      return i5 | i6;
    },
    Rsllk: hz(1400, "&EKZ", 1002),
    lqLSI: hQ("QUo7", 883, 346),
    IYMDb: y(1382, "tR8B", 1255),
    ljzSI: function (i5) {
      return i5();
    },
    tcukM: function (i5) {
      return i5();
    },
    oCtUJ: hz(567, "RBn7", 1097),
    vEeOu: hQ("qDWf", 908, 1613),
    EfopV: y(2364, "[dV(", 2626),
    xqWqJ: function (i5, i6, i7) {
      return i5(i6, i7);
    },
    eaXFW: function (i5, i6) {
      return i5 - i6;
    },
    HobtG: function (i5, i6) {
      return i5 - i6;
    },
    bCNUD: function (i5, i6) {
      return i5 * i6;
    },
    fuoxd: function (i5, i6) {
      return i5(i6);
    },
    zOXYq: function (i5, i6) {
      return i5(i6);
    },
    zeCgC: function (i5, i6) {
      return i5(i6);
    },
    SimAo: function (i5, i6) {
      return i5 < i6;
    },
    RELFd: function (i5, i6) {
      return i5 !== i6;
    },
    bJgLs: y(1204, "CjRN", 1104),
    nsBpc: function (i5) {
      return i5();
    },
    iVbIe: function (i5, i6) {
      return i5(i6);
    },
    mKZbB: function (i5, i6) {
      return i5(i6);
    },
    QmQOl: function (i5, i6) {
      return i5 === i6;
    },
    DSTlm: function (i5, i6) {
      return i5 - i6;
    },
    kTrYG: function (i5, i6) {
      return i5 + i6;
    },
    OdsQm: function (i5, i6) {
      return i5 + i6;
    },
    mmxsV: function (i5, i6) {
      return i5 + i6;
    },
    ExpzB: function (i5, i6) {
      return i5 * i6;
    },
    FtvFd: function (i5, i6) {
      return i5(i6);
    },
    Sneug: function (i5, i6) {
      return i5(i6);
    },
    WxCzG: function (i5, i6) {
      return i5 + i6;
    },
    sUAkA: function (i5, i6) {
      return i5 + i6;
    },
    lXALB: function (i5, i6) {
      return i5 + i6;
    },
    eTsZe: function (i5, i6) {
      return i5 / i6;
    },
    MKWMk: function (i5) {
      return i5();
    },
    flHuD: y(837, "*lE%", 1432),
    HHVNp: function (i5, i6) {
      return i5 >= i6;
    },
    BOFEq: y(1979, "(gRZ", 2697),
    BTKlS: function (i5, i6) {
      return i5 >= i6;
    },
    ddsUm: function (i5, i6) {
      return i5 < i6;
    },
    Rbvni: function (i5) {
      return i5();
    },
    ptYXg: function (i5, i6) {
      return i5(i6);
    },
  };
  function hz(i5, i6, i7) {
    return y0(i5 - 416, i6, i5 - -570);
  }
  Jj = hK[y(1362, "$a3e", 1527)](globalThis[y(1145, "25jp", 1644)], 0) || 6;
  JL = hK[y(2674, "judH", 2121)](globalThis[hz(1242, "o8LY", 608)], 0) || 12;
  Jf = hK[hz(807, "CLkT", 1335)](globalThis[y(1194, "ckex", 1000)], 0) || 8;
  let hH = r[hQ("6e)s", 800, 1173)];
  let hX = {};
  for (let i5 of [
    hK[hz(1421, "(gRZ", 1309)],
    hK[hz(1009, "]F)!", 1025)],
    "up",
    hK[y(2167, "R5(U", 2250)],
    "b1",
    "b2",
  ]) {
    hX[i5] = r[y(1361, "G*Jl", 705)][i5];
  }
  function hQ(i6, i7, i8) {
    return y0(i6 - 284, i6, i7 - 391);
  }
  let hA = hK[hQ("kYZ$", 977, 997)](G);
  let i3 = hK[hQ("r!4a", 1818, 1455)](I);
  hK[hz(140, "7D5s", -409)](p, !1);
  hK[hz(1005, "wZ&$", 1612)](q);
  let i4 = null;
  try {
    if (hK[y(1657, "0aTl", 1525)](hK[hQ("ZI9W", 1124, 2048)], hK[hz(485, "i$6c", 1347)])) {
      let i6 = sXMYOr[hQ("judH", 1454, 2218)](i6, M.x);
      let i7 = sXMYOr[y(2334, "iC20", 1813)](i7, I.y);
      let i8 = sXMYOr[hz(775, "&EKZ", 585)](
        sXMYOr[hQ("$a3e", 1078, 459)](i6, i8.ux),
        sXMYOr[hz(1458, "tR8B", 1682)](i7, j.uy),
      );
      if (sXMYOr[hz(1574, "qDWf", 925)](i8, -L) || sXMYOr[hz(750, "RBn7", 1628)](i8, 640)) {
        return false;
      } else {
        return sXMYOr[hz(-173, "]^fO", -632)](
          D[hQ("]^fO", 2130, 2407)](
            sXMYOr[hQ("yX#m", 2320, 2458)](
              sXMYOr[hz(1458, "tR8B", 451)](i6, -O.uy),
              sXMYOr[y(2455, "7OMN", 1944)](i7, x.ux),
            ),
          ),
          sXMYOr[hQ("kQVQ", 1647, 2379)](r.hw, b),
        );
      }
    } else {
      let i9 = (iP) => {
        function ia(ii, ig, iS) {
          return hQ(ig, iS - -642, iS - 157);
        }
        function il(ii, ig, iS) {
          return hQ(ig, ii - -940, iS - 417);
        }
        function ih(ii, ig, iS) {
          return hQ(ii, ig - -967, iS - 151);
        }
        if (hK[ih("judH", 287, 249)](hK[il(-239, "QUo7", 747)], hK[ia(2072, "$a3e", 1193)])) {
          let ii = [];
          for (let iS of iP) {
            if (hK[ih("i$6c", -304, 276)](hK[ia(1342, "eqC*", 1579)], hK[il(334, "R5(U", -191)])) {
              r[il(1407, "G*Jl", 1457)] = () => Ju(iS);
              try {
                if (
                  hK[ih("iC20", 1623, 2160)](hK[il(869, "P$Em", 641)], hK[ih("7OMN", -135, 279)])
                ) {
                  for (let iN = 0; iN < 3; iN++) {
                    if (hX.monster && hA.monster[iN] === 1) {
                      return iN;
                    }
                  }
                  return -1;
                } else {
                  hK[il(471, "yX#m", -276)](C, U, hK[il(293, "i$6c", 562)](JS));
                }
              } catch {
                if (
                  hK[ia(849, "i$6c", 1548)](hK[ih("1x)n", 85, 875)], hK[ia(1537, "wR1d", 1735)])
                ) {
                  const iW = {
                    tr: ii,
                    [ih("$a3e", 1245, 1648)]: !0,
                  };
                  return iW;
                } else {
                  let iT = i4.first("obj_mizzle_spotlight_controller_b");
                  let iU = E.first("obj_mizzle_spotlight_controller");
                  if ((iT && iT.alert) || (iU && iU.alert)) {
                    return null;
                  }
                  if (iT) {
                    let iG = iV();
                    let iE = 30;
                    let iv = I.x - 10 - iE;
                    let ic = iy.x - 10 + iE;
                    let iu = iJ.y - 10 - iE;
                    let io = iP.y - 10 + iE;
                    return [
                      {
                        rect: [iv + iG.r - 1, iu + iG.b - 1, ic + iG.l + 1, io + iG.t + 1],
                        blue: false,
                      },
                    ];
                  }
                  if (iU) {
                    return [
                      {
                        mask: true,
                        blue: false,
                      },
                    ];
                  } else {
                    return null;
                  }
                }
              }
              JU[il(447, "#$OJ", 1046)]++;
              let it = w[il(-349, "eqC*", -487)](hK[il(-97, "rHmw", -15)]);
              let ik = w[il(620, "(gRZ", -149)](hK[ih("1x)n", -176, -580)]);
              ii[il(1288, "judH", 1799)](it ? [it.x, it.y] : [0, 0]);
              if (!it || (ik && hK[ia(2771, "wR1d", 1815)](ik[ia(-105, "kYZ$", 402)], 1))) {
                return {
                  tr: ii,
                  out: !0,
                };
              }
              const iF = {
                tr: ii,
                [ia(-825, "#$OJ", 67)]: !1,
                [ia(1411, "7D5s", 1110)]: !0,
              };
              if (
                c[ia(1715, "v$$v", 1822)] ||
                hK[il(1053, "qDWf", 379)](hK[il(1551, "L47D", 2238)](c[ih("P$Em", 24, 916)], 0), 2)
              ) {
                return iF;
              }
            } else {
              hK(ig);
              return;
            }
          }
          const ig = {
            tr: ii,
            [ia(2342, "7OMN", 1709)]: !1,
          };
          return ig;
        } else {
          if (typeof i4.hp == "number") {
            return E.hp;
          }
          let iR = 0;
          for (let iM of [1, 2, 3]) {
            let im = D(O.hp && x.hp[iM]);
            if (i9.isFinite(im)) {
              iR += b.max(-999, im);
            }
          }
          return iR;
        }
      };
      let iV = (iP) =>
        iP[y(220, "6e)s", 967)]
          ? 1000000 - iP[hz(1029, "$a3e", 561)]
          : iP[hQ("tR8B", 2565, 3525)]
            ? 0
            : iP[y(1690, "o8LY", 2183)];
      let iy = [
        {
          snap: hA,
          seq: [],
          tr: [],
          cost: 0,
          out: !1,
          len: 0,
          end: !1,
        },
      ];
      let iJ = [];
      if (V && V[hz(-238, "r!4a", 655)]) {
        if (hK[y(2268, "&EKZ", 2408)](hK[y(1565, "CLkT", 928)], hK[hQ("wZ&$", 1738, 1982)])) {
          if (i3 === "b1") {
            i4(true);
          } else {
            E(false);
            if (v) {
              iy(iJ);
            }
          }
          return;
        } else {
          let iP = [
            ...V,
            ...hK[hz(-81, "iC20", -1025)](
              Jm,
              V[hK[y(922, "7D5s", 1524)](V[hQ("oX^J", 2083, 2101)], 1)],
              Math[y(2688, "*lE%", 1986)](
                0,
                hK[hQ("gDN(", 1012, 619)](
                  hK[hz(1634, "P$Em", 2268)](Jj, JL),
                  V[hQ("(gRZ", 1822, 1344)],
                ),
              ),
            ),
          ];
          hK[y(1962, "R5(U", 969)](E, hA);
          let ia = hK[hQ("wR1d", 699, -71)](i9, iP);
          V = iP;
          let il = w[hQ("v$$v", 2503, 2711)](hK[y(2093, "5yD(", 2041)]);
          iJ[hz(-133, "(gRZ", -674)]({
            seq: V[y(2072, "L47D", 2699)](0, ia.tr[hQ("l#By", 1775, 1451)]),
            tr: ia.tr,
            out: ia[y(1042, "G*Jl", 1445)],
            len: ia.tr[y(2406, "gDN(", 2270)],
            end: !!ia[y(1024, "]F)!", 772)],
            cost: il ? hK[hz(-286, "&EKZ", 265)](JO, il.x) : 0,
          });
        }
      }
      for (let ih = 0; hK[y(2237, "*lE%", 1989)](ih, JL) && iy[hQ("yX#m", 1862, 2509)]; ih++) {
        if (hK[y(1677, "L47D", 1200)](hK[hQ("1x)n", 1139, 355)], hK[hz(-35, "ZI9W", 771)])) {
          E = v[y(3139, "yX#m", 2623)];
          iy = iJ[hz(1565, "P$Em", 1515)];
          i9 = M[hQ("tR8B", 1670, 1844)];
          iV = I[hQ("qBjg", 2146, 2401) + "m"];
        } else {
          let ii = [];
          let ig = new Set();
          for (let ik of iy) {
            for (let iF of hK[y(2815, "4)a3", 2222)](JZ)) {
              hK[y(1622, "Ini@", 2417)](E, ik[y(3010, "wR1d", 2149)]);
              let iN = hK[hz(1453, "tR8B", 527)](i9, iF);
              JU[hz(-239, "zb85", -1120)]++;
              let iW = w[hQ("[dV(", 2557, 3189)](hK[hQ("CjRN", 2187, 2296)]);
              let iT = {
                seq: [
                  ...ik[hQ("Ini@", 1206, 2210)],
                  ...iF[hz(-212, "CLkT", -52)](0, iN.tr[hz(1316, "eqC*", 598)]),
                ],
                tr: [...ik.tr, ...iN.tr],
                out: iN[hQ("6e)s", 864, 139)],
                len: hK[hQ("P$Em", 1925, 2139)](
                  ik[hz(201, "(gRZ", 212)],
                  iN.tr[hz(554, "qBjg", 1116)],
                ),
                end: !!iN[hz(1407, "gDN(", 1846)],
                cost: iW ? hK[y(1102, "6e)s", 1199)](JO, iW.x) : 0,
              };
              if (
                iT[hQ("l#By", 2473, 2095)] ||
                iT[hz(742, "yX#m", 578)] ||
                hK[hz(-183, "QUo7", 323)](ih, hK[hz(-25, "rHmw", 971)](JL, 1))
              ) {
                iJ[hQ("v$$v", 855, 1165)](iT);
                continue;
              }
              let iU = iW
                ? hK[hz(416, "0aTl", 1070)](
                    hK[hz(542, "qBjg", 1387)](
                      hK[hQ("1x)n", 608, 1353)](
                        hK[y(1351, "judH", 1409)](
                          hK[y(1621, "Ini@", 2368)](
                            hK[hQ("gDN(", 1978, 1985)](Math[hQ("[dV(", 1184, 401)](iW.x), ","),
                            Math[y(1152, "0aTl", 1474)](iW.y),
                          ),
                          ",",
                        ),
                        Math[hz(890, "l#By", 408)](
                          hK[y(2103, "Nlyg", 1400)](
                            hK[y(1439, "rHmw", 929)](Number, iW[y(1629, "o8LY", 708)]) || 0,
                            4,
                          ),
                        ),
                      ),
                      ",",
                    ),
                    iW[y(3452, "P$Em", 2483)],
                  )
                : hK[y(923, "Nlyg", 762)](String, iF);
              if (!ig[y(1994, "$a3e", 1532)](iU)) {
                ig[hz(-216, "ckex", 88)](iU);
                iT[hz(781, "*lE%", 1221)] = hK[hQ("Ini@", 2135, 2674)](
                  hK[hQ("4)a3", 642, 655)](
                    hK[hz(-289, "qBjg", -1062)](
                      Math[hQ("*lE%", 729, 1256)](hK[hz(1606, "iC20", 948)](iW.x, 24)),
                      ",",
                    ),
                    Math[y(561, "QUo7", 954)](hK[hz(199, "6e)s", -527)](iW.y, 12)),
                  ),
                  hK[hQ("Ini@", 1856, 2209)](iW[y(851, "*lE%", 1208)], 1) ? "g" : "a",
                );
                iT[y(2007, "P$Em", 1582)] = hK[hQ("P$Em", 777, 763)](G);
                ii[hz(1361, "eqC*", 2096)](iT);
              }
            }
          }
          ii[y(46, "RBn7", 820)]((iG, iE) => iV(iG) - iV(iE));
          let iS = [];
          let it = new Set();
          for (let iG of ii) {
            if (
              hK[hQ("P$Em", 2384, 3255)](hK[hQ("6e)s", 2126, 2262)], hK[hQ("qBjg", 2522, 2315)])
            ) {
              if (hK[y(1739, "R5(U", 2695)](iS[hQ("[dV(", 762, 1176)], Jf)) {
                break;
              }
              if (!it[hQ("qDWf", 1327, 1619)](iG[y(771, "QUo7", 1042)])) {
                it[hQ("6e)s", 1447, 2430)](iG[y(901, "RBn7", 1257)]);
                iS[y(1438, "ZI9W", 1340)](iG);
              }
            } else {
              let iE = iV(I, iy(iJ, L));
              let iv =
                iE.early * 1000 -
                iE.tp * 2 +
                (D === O ? -0.5 : 0) +
                (iE && i9 === ii.dir ? -0.25 : 0);
              if (iv < w) {
                ig = iv;
                q = ih;
              }
            }
          }
          for (let ic of ii) {
            if (hK[hQ("6e)s", 747, -59)](hK[y(2169, "oX^J", 1284)], hK[hQ("5yD(", 983, 1934)])) {
              if (hK[y(3031, "5yD(", 2715)](iS[hQ("wZ&$", 1937, 956)], Jf)) {
                break;
              }
              if (!iS[y(3421, "r!4a", 2449)](ic)) {
                iS[hQ("kQVQ", 1369, 2133)](ic);
              }
            } else {
              if (
                !sXMYOr[hz(1175, "5yD(", 983)](i9) ||
                !M ||
                iV[hz(879, "Ini@", 358)] ||
                sXMYOr[y(2084, "eqC*", 1207)](
                  I[y(3292, "R5(U", 2278)],
                  sXMYOr[hQ("judH", 1363, 786)],
                )
              ) {
                return null;
              }
              if (sXMYOr[hz(622, "m01*", 411)](iy, iJ)) {
                return L;
              }
              let iu = null;
              let io = D[y(1347, "r!4a", 2153)](sXMYOr[hz(120, "o8LY", -35)]);
              let iR = O[hz(-306, "&Uh1", 230)](sXMYOr[hQ("25jp", 1574, 602)]);
              if (
                sXMYOr[hz(380, "tR8B", 1284)](io, iR) &&
                !iR[hz(1033, "0aTl", 1598)] &&
                sXMYOr[hz(167, "QUo7", -509)](iR[hQ("7D5s", 1158, 2169)], 0)
              ) {
                iu = sXMYOr[hQ("Nlyg", 1333, 857)](io[hQ("[dV(", 1208, 2010)], 1)
                  ? iR
                  : sXMYOr[y(1922, "iC20", 2701)](io[hQ("&Uh1", 684, -65)], 1)
                    ? ic
                    : null;
              }
              let iM = i9[hQ("v$$v", 2503, 2972)](sXMYOr[y(3195, "G*Jl", 2521)]);
              if (
                sXMYOr[y(1846, "25jp", 2308)](!iu, iM) &&
                sXMYOr[hQ("zb85", 1972, 2868)](iM[hQ("zb85", 2391, 2593)], 2)
              ) {
                let im = w[y(1262, "iC20", 1260)](sXMYOr[hz(1422, "1x)n", 2046)])[
                  y(1160, "qBjg", 1491)
                ](
                  (iY) =>
                    !iY[hz(545, "wZ&$", 1449)] &&
                    !!iY[y(2943, "]F)!", 2637)] &&
                    !iY[hQ("&Uh1", 1863, 1115)],
                );
                iu =
                  im[hQ("o8LY", 2410, 1695)](
                    (iY) => iY[hQ("r!4a", 1248, 830)] === iM[hz(822, "ckex", 561)],
                  ) ||
                  im[0] ||
                  null;
              }
              return iu;
            }
          }
          iy = iS;
        }
      }
      for (let iY of iJ) {
        if (
          !i4 ||
          hK[y(1722, "$a3e", 1500)](
            hK[y(1981, "wZ&$", 2050)](iV, iY),
            hK[y(471, "5yD(", 1405)](iV, i4),
          )
        ) {
          i4 = iY;
        }
      }
    }
  } finally {
    hK[hz(887, "4)a3", 874)](E, hA);
    hK[y(2693, "0aTl", 2144)](m);
    hK[hQ("R5(U", 1801, 1524)](p, i3);
    r[y(2872, "ZI9W", 1863)] = hH;
    for (let iI of Object[hQ("&Uh1", 2573, 3110)](hX)) {
      r[y(511, "CLkT", 1110)][iI] = hX[iI];
    }
  }
  return i4;
}
K(Jx, V7("4)a3", 1363, 1638));
var Jr = 4;
var JC = 3;
var JB = 24;
var Jb = 1;
function Jd(V) {
  const y = {
    mNEsI: function (hA, i0) {
      return hA / i0;
    },
    wmOTq: function (hA, i0) {
      return hA + i0;
    },
    IuWAE: function (hA, i0) {
      return hA / i0;
    },
    RwJIy: function (hA, i0) {
      return hA + i0;
    },
    mwUbc: function (hA, i0) {
      return hA * i0;
    },
    HPeWt: function (hA, i0) {
      return hA - i0;
    },
    xPzRK: function (hA, i0) {
      return hA / i0;
    },
    oSGlJ: function (hA, i0) {
      return hA - i0;
    },
    rAjEY: function (hA, i0) {
      return hA - i0;
    },
    hSxAi: function (hA, i0) {
      return hA + i0;
    },
    uWfDJ: function (hA, i0) {
      return hA - i0;
    },
    zqtbu: function (hA, i0) {
      return hA(i0);
    },
    ILOTt: function (hA) {
      return hA();
    },
    vdbwD: function (hA, i0) {
      return hA === i0;
    },
    DyiXw: hX(1174, 1622, "G*Jl"),
    Gniwp: function (hA, i0) {
      return hA !== i0;
    },
    PZtYX: function (hA, i0) {
      return hA + i0;
    },
    iwmdt: function (hA, i0) {
      return hA === i0;
    },
    qdOeC: hH("P$Em", 1737, 2544),
    NdjLj: hX(1196, 910, "0aTl"),
    GHHsV: function (hA, i0) {
      return hA | i0;
    },
    bXOlo: function (hA, i0) {
      return hA | i0;
    },
    xIhWl: function (hA, i0) {
      return hA < i0;
    },
    cWKvY: function (hA, i0) {
      return hA < i0;
    },
    BGpmy: function (hA, i0) {
      return hA !== i0;
    },
    yXLaG: hz(2547, "oX^J", 2225),
    Apxby: hz(2448, "6e)s", 1550),
    szFzv: function (hA, i0) {
      return hA - i0;
    },
    eCVfp: function (hA, i0) {
      return hA % i0;
    },
    SSThU: function (hA, i0) {
      return hA > i0;
    },
    qRJoi: function (hA, i0) {
      return hA / i0;
    },
    tOFUI: function (hA, i0) {
      return hA >= i0;
    },
    lLruG: function (hA, i0) {
      return hA - i0;
    },
    rQYDX: function (hA, i0) {
      return hA > i0;
    },
    Ciqch: function (hA, i0) {
      return hA - i0;
    },
    GxdGS: function (hA, i0) {
      return hA(i0);
    },
    NPFdz: function (hA, i0) {
      return hA - i0;
    },
    paKRS: hH("RBn7", 2816, 3472),
    WkEPF: function (hA, i0) {
      return hA(i0);
    },
    XZHLz: function (hA, i0) {
      return hA - i0;
    },
    PmZcJ: function (hA, i0) {
      return hA <= i0;
    },
    nsTKX: function (hA, i0) {
      return hA + i0;
    },
    OhaVm: function (hA, i0) {
      return hA + i0;
    },
    LArie: function (hA, i0) {
      return hA + i0;
    },
    gTpHg: function (hA, i0) {
      return hA + i0;
    },
    rCNaT: function (hA, i0) {
      return hA + i0;
    },
    KAZfV: hH("qDWf", 2515, 3493),
    iPbTt: hz(2159, "25jp", 2392),
    ueyEh: hX(-145, -13, "G*Jl"),
    WdcFq: function (hA, i0) {
      return hA + i0;
    },
    UAYhU: hz(1002, "(gRZ", 1664),
    NBTBI: function (hA, i0) {
      return hA - i0;
    },
    IFWlz: function (hA, i0) {
      return hA >= i0;
    },
    TIPsS: function (hA, i0, i1) {
      return hA(i0, i1);
    },
    lINXH: function (hA, i0) {
      return hA - i0;
    },
    EYiEs: function (hA, i0) {
      return hA - i0;
    },
    Jcvni: function (hA, i0, i1, i2) {
      return hA(i0, i1, i2);
    },
    yQrpJ: function (hA, i0) {
      return hA > i0;
    },
    IrMGB: function (hA, i0) {
      return hA % i0;
    },
    ecgYB: function (hA, i0) {
      return hA <= i0;
    },
    SrLtQ: function (hA, i0) {
      return hA(i0);
    },
    KerSo: function (hA, i0) {
      return hA !== i0;
    },
    wbKXK: hH("m01*", 2999, 2806),
    pAFaY: hH("m01*", 1652, 2662),
    kBSEL: function (hA, i0, i1, i2) {
      return hA(i0, i1, i2);
    },
    zebph: function (hA, i0) {
      return hA + i0;
    },
    Nswoj: function (hA, i0) {
      return hA < i0;
    },
    WFucb: function (hA, i0) {
      return hA - i0;
    },
    fxlzU: function (hA, i0) {
      return hA + i0;
    },
    bqQty: function (hA, i0) {
      return hA + i0;
    },
    jTiEq: function (hA, i0) {
      return hA + i0;
    },
    aiylO: function (hA, i0) {
      return hA + i0;
    },
    JeOco: hH("yX#m", 2764, 3337),
    rwiBC: hz(2323, "7OMN", 1930),
    kFjxN: hX(337, 496, "rHmw"),
  };
  let hK = y[hH("&Uh1", 2574, 2785)](JE, V);
  if (!hK || !c[hX(209, 185, "$a3e")]) {
    if (Jk[hX(1066, 371, "P$Em")]) {
      y[hz(1470, "]^fO", 2155)](JW);
    }
    return !1;
  }
  function hz(hA, i0, i1) {
    return y0(hA - 119, i0, hA - 451);
  }
  function hH(hA, i0, i1) {
    return y0(hA - 153, hA, i0 - 905);
  }
  if (y[hz(1127, "wR1d", 1541)](hK, y[hz(819, "6e)s", 1454)])) {
    Jk[hX(661, 1079, "G*Jl")] = null;
    y[hX(1035, 668, "*lE%")](Ju, "");
    return !0;
  }
  if (
    y[hz(2335, "CjRN", 2141)](
      w[hH("[dV(", 1656, 1378)],
      y[hz(2576, "25jp", 3158)](Jk[hX(-214, 327, "wZ&$")], 1),
    )
  ) {
    Jk[hz(1379, "eqC*", 1951)] = null;
  }
  Jk[hX(162, -346, "oX^J")] = w[hX(-595, -157, "]^fO")];
  if (y[hX(-557, -1215, "]F)!")](hK, y[hH("(gRZ", 2482, 3471)])) {
    let hA = w[hz(2097, "]F)!", 2205)](y[hX(973, 935, "6e)s")]);
    let i0 = hA
      ? y[hH("]F)!", 1239, 1056)](y[hX(136, -143, "m01*")](hA[hX(-265, -1218, "1x)n")], 0), 4)
        ? 4
        : y[hX(243, 923, "i$6c")](y[hX(-564, -259, "o8LY")](hA[hz(1659, "]F)!", 909)], 0), 1)
      : -1;
    if (
      y[hH("L47D", 2316, 3253)](Jk[hX(-432, -362, "&Uh1")], i0) ||
      y[hX(1092, 1328, "eqC*")](Jk.t0, 0) ||
      y[hz(1331, "eqC*", 1976)](w[hH("rHmw", 1354, 2021)], Jk.t0)
    ) {
      Jk[hX(-432, -263, "&Uh1")] = i0;
      Jk.t0 = w[hz(2201, "zb85", 1241)];
      Jk[hH("qDWf", 3115, 3363)] =
        !globalThis[hH("6e)s", 1719, 2069) + hz(1651, "wR1d", 2407)] && !!JG[i0];
      Jk[hz(745, "v$$v", 1370)] = null;
    }
    if (Jk[hz(2260, "QUo7", 2794)]) {
      if (y[hX(1254, 346, "QUo7")](y[hH("5yD(", 1154, 226)], y[hz(2031, "judH", 2965)])) {
        let i4 = JG[i0];
        let i5 = y[hX(1103, 1827, "#$OJ")](w[hH("Nlyg", 3092, 3043)], Jk.t0);
        let i9 =
          y[hX(-213, -181, "v$$v")](y[hz(2191, "Ini@", 2799)](i5, 6), 0) &&
          y[hH("CjRN", 2382, 2404)](i5, 0)
            ? i4.at[y[hH("o8LY", 2994, 2443)](y[hH("[dV(", 2996, 3579)](i5, 6), 1)]
            : null;
        if (
          y[hH("(gRZ", 2445, 2593)](i5, i4[hX(458, 1360, "#$OJ")][hH("*lE%", 2547, 2567)]) ||
          (i9 &&
            (y[hH("R5(U", 2881, 3583)](
              Math[hX(-636, -184, "zb85")](y[hX(1317, 2166, "25jp")](i9[0], V.x)),
              0.05,
            ) ||
              y[hz(1614, "4)a3", 740)](
                Math[hX(608, -130, "rHmw")](y[hH("iC20", 2781, 2489)](i9[1], V.y)),
                0.05,
              )))
        ) {
          Jk[hX(614, 1455, "i$6c")] = !1;
          Jk[hH("&EKZ", 2192, 1278)] = null;
          JU[hH("eqC*", 2196, 2044)] = y[hH("&EKZ", 1535, 547)](
            y[hX(-14, -859, "judH")](JU[hX(-700, 91, "yX#m")], 0),
            1,
          );
        } else {
          Jk[hz(1645, "wR1d", 1451)] = i4[hH("Nlyg", 3045, 3091)][i5];
          y[hH("m01*", 2334, 2258)](Ju, Jk[hH("wZ&$", 2387, 3126)]);
          return !0;
        }
      } else {
        let iV = DgXUjU[hH("5yD(", 2919, 2100)](
          DgXUjU[hH("#$OJ", 1337, 1242)](j[hX(-697, 277, "25jp")], L[hH("0aTl", 2815, 2037)]),
          2,
        );
        let iy = DgXUjU[hz(1963, "&Uh1", 2403)](
          DgXUjU[hz(2500, "]F)!", 1602)](
            D[hX(-525, -1382, "ckex")],
            O[hz(1020, "iC20", 688) + "m"],
          ),
          2,
        );
        x += DgXUjU[hX(380, -310, "G*Jl")](
          DgXUjU[hH("v$$v", 2351, 1826)](
            DgXUjU[hX(265, 43, "(gRZ")](
              i2[hz(1590, "CLkT", 2194)](
                DgXUjU[hX(-506, -879, "(gRZ")](
                  iV,
                  DgXUjU[hz(1948, "r!4a", 2862)](DgXUjU[hH("qDWf", 1662, 1365)](b, w), 2),
                ),
              ),
              p[hH("Nlyg", 1471, 1257)](1, DgXUjU[hz(1122, "l#By", 635)](q, K)),
            ),
            DgXUjU[hz(2268, "0aTl", 2778)](
              z[hH("o8LY", 2586, 2192)](
                DgXUjU[hX(1276, 1017, "kQVQ")](
                  iy,
                  DgXUjU[hH("P$Em", 2175, 2783)](DgXUjU[hH("P$Em", 1797, 979)](X, Q), 2),
                ),
              ),
              A[hz(1415, "qDWf", 860)](1, DgXUjU[hX(-373, 636, "L47D")](V0, V1)),
            ),
          ),
          2,
        );
      }
    }
    let i1 =
      Jk[hH("ZI9W", 1382, 630)] && y[hz(2142, "L47D", 1631)](Jk.i, 0)
        ? Jk[hH("qBjg", 1353, 1697)][y[hH("zb85", 2215, 2240)](Jk.i, 1)]
        : null;
    let i2 =
      i1 &&
      (y[hX(534, -56, "Nlyg")](
        Math[hX(622, 1451, "&Uh1")](y[hX(-485, -1020, "kQVQ")](i1[0], V.x)),
        0.01,
      ) ||
        y[hH("eqC*", 3009, 2530)](
          Math[hH("rHmw", 2404, 3053)](y[hz(733, "$a3e", 1159)](i1[1], V.y)),
          0.01,
        ));
    if (
      !Jk[hz(1011, "Ini@", 716)] ||
      i2 ||
      y[hH("#$OJ", 2311, 2041)](Jk.i, JD) ||
      y[hz(884, "CjRN", 723)](Jk.i, Jk[hz(2222, "oX^J", 2214)][hz(2208, "]F)!", 1201)])
    ) {
      if (y[hH("RBn7", 1893, 1823)](y[hX(1165, 382, "kYZ$")], y[hX(945, 233, "m01*")])) {
        let iJ = hK.current_perp;
        if (iJ && iJ.perp_index !== hQ) {
          return {
            right: true,
          };
        } else {
          return {
            b1: true,
          };
        }
      } else {
        let iP = performance[hX(-484, 256, "Ini@")]();
        let ia = y[hz(1758, "L47D", 857)](
          Jx,
          Jk[hX(75, 109, "#$OJ")] && !i2
            ? Jk[hz(1335, "Nlyg", 1596)][hX(-360, -49, "iC20")](Jk.i)
            : null,
        );
        Jk[hz(1345, "tR8B", 529)] =
          ia && ia[hz(2565, "L47D", 2745)][hz(2114, "CLkT", 3012)]
            ? ia[hX(325, -536, "7OMN")]
            : [""];
        Jk[hH("4)a3", 2208, 3176)] =
          ia && ia[hX(-500, -1094, "&Uh1")][hX(0, 28, "v$$v")] ? ia.tr : null;
        Jk.i = 0;
        Jk.n++;
        JU[hX(992, 1151, "[dV(")]++;
        JU.ms += y[hz(717, "R5(U", 1658)](performance[hX(-549, -1520, "o8LY")](), iP);
        if (
          globalThis[hz(1477, "yX#m", 1402)] &&
          y[hX(573, 608, "oX^J")](
            w[hz(2622, "ckex", 3447)],
            globalThis[hH("tR8B", 2821, 2391)][0],
          ) &&
          y[hH("25jp", 2424, 1542)](
            w[hX(-663, -1678, "7OMN")],
            globalThis[hX(-637, -1112, "0aTl")][1],
          )
        ) {
          console[hz(1309, "wR1d", 2288)](
            y[hX(-631, 320, "G*Jl")](
              y[hH("tR8B", 2664, 1797)](
                y[hX(-542, -187, "$a3e")](
                  y[hz(826, "P$Em", -120)](
                    y[hH("P$Em", 1609, 1479)](
                      y[hz(883, "#$OJ", 769)](
                        y[hz(1095, "0aTl", 442)](
                          y[hz(740, "qDWf", 254)](
                            y[hz(2512, "7OMN", 2097)](
                              y[hz(796, "&EKZ", 762)](
                                y[hz(2488, "CLkT", 1528)](
                                  y[hz(933, "rHmw", 1810)],
                                  w[hX(162, 6, "oX^J")],
                                ),
                                " x",
                              ),
                              Math[hz(871, "wR1d", 1648)](V.x),
                            ),
                            i2 ? y[hz(1097, "7D5s", 234)] : "",
                          ),
                          " ",
                        ),
                        ia
                          ? ia[hH("ZI9W", 2275, 3166)]
                            ? y[hz(2294, "&Uh1", 1441)](
                                y[hX(-629, -1202, "eqC*")],
                                ia[hX(-405, -892, "qDWf")],
                              )
                            : y[hX(584, 1268, "$a3e")](
                                y[hz(2096, "&EKZ", 1720)],
                                ia[hX(762, 627, "P$Em")][hH("v$$v", 2219, 2447)](1),
                              )
                          : "-",
                      ),
                      " ",
                    ),
                    Jk[hz(1973, "iC20", 1967)]
                      [hH("L47D", 2241, 3083)]((il) => il || ".")
                      [hz(1562, "[dV(", 2368)]("")
                      [hz(1289, "i$6c", 1374)](0, 90),
                  ),
                  " ",
                ),
                y[hX(734, -21, "iC20")](performance[hX(-620, -851, "l#By")](), iP)[
                  hX(623, -94, "4)a3")
                ](0),
              ),
              "ms",
            ),
          );
        }
      }
    }
    let i3 = Jk[hH("kYZ$", 1230, 1350)][Jk.i++] || "";
    Jk[hH("Nlyg", 1443, 1152)] = i3;
    y[hz(1599, "judH", 715)](Ju, i3);
    return !0;
  }
  function hX(il, ih, ii) {
    return y0(il - 222, ii, il - -891);
  }
  if (
    !Jk[hX(1322, 430, "25jp")] ||
    y[hH("QUo7", 1315, 1138)](Jk.i, Jr) ||
    y[hH("[dV(", 1219, 476)](Jk.i, Jk[hX(1166, 316, "$a3e")][hX(-599, -337, "7D5s")])
  ) {
    let il = performance[hz(2410, "]F)!", 1675)]();
    let ih = y[hX(1187, 1557, "0aTl")](G);
    let ii = JB;
    let ig = Jk[hH("[dV(", 1228, 1006)]
      ? Jk[hz(2333, "R5(U", 2772)][hH("&EKZ", 2375, 2223)](Jk.i)
      : [];
    let iS = ig[hX(570, 1052, "kQVQ")]
      ? [
          ...ig,
          ...y[hX(541, 709, "wR1d")](
            Jm,
            ig[y[hH("]F)!", 1629, 2186)](ig[hH("CLkT", 2568, 2103)], 1)],
            Math[hz(797, "Ini@", 1808)](
              0,
              y[hz(2023, "kQVQ", 1693)](ii, ig[hH("ZI9W", 1644, 1940)]),
            ),
          ),
        ]
      : null;
    let it = iS;
    let ik = iS ? y[hH("CjRN", 1927, 2165)](JM, ih, iS, ii) : y[hH("CLkT", 1559, 2554)](1, 0);
    if (
      !iS ||
      y[hz(1052, "6e)s", 1241)](ik, Jb) ||
      y[hH("wR1d", 2466, 2353)](y[hH("1x)n", 1419, 835)](Jk.n, JC), 0)
    ) {
      let iF =
        globalThis[hX(-592, -614, "eqC*")] &&
        y[hz(2332, "yX#m", 2862)](w[hz(664, "ZI9W", 928)], globalThis[hz(2579, "kYZ$", 2190)][0]) &&
        y[hX(353, -354, "RBn7")](w[hX(-93, 393, "m01*")], globalThis[hz(2571, "5yD(", 2395)][1])
          ? []
          : null;
      for (let iN of y[hz(846, "QUo7", 664)](JY, ii)) {
        if (y[hH("4)a3", 1571, 1876)](y[hX(1058, 1400, "P$Em")], y[hH("zb85", 2990, 3392)])) {
          let iW = y[hH("5yD(", 1933, 2914)](JM, ih, iN, ii);
          if (iF) {
            iF[hz(2464, "o8LY", 3271)](
              y[hH("G*Jl", 1165, 1798)](
                y[hH("kQVQ", 2991, 2226)](
                  y[hH("m01*", 1438, 1730)](
                    y[hX(969, 1672, "r!4a")](
                      iN[hH("qBjg", 1162, 821)](0, 10)
                        [hH("[dV(", 2158, 3091)]((iT) => iT || ".")
                        [hz(2413, "o8LY", 2694)](""),
                      "=",
                    ),
                    iW[hH("R5(U", 2653, 2003)](1),
                  ),
                  "@",
                ),
                JR,
              ),
            );
          }
          if (y[hH("QUo7", 1815, 1565)](iW, y[hX(-328, 606, "v$$v")](ik, 1e-9))) {
            ik = iW;
            it = iN;
          }
          if (y[hz(770, "qBjg", -203)](ik, Jb) && !iF) {
            break;
          }
        } else {
          let [iT, iU] = T;
          if (iT === "obj_heart" && !U.has(iU)) {
            G.add(iU);
          } else if (iU === "obj_heart" && !E.has(iT)) {
            v.add(iT);
          }
        }
      }
      if (iF) {
        console[hX(870, 686, "$a3e")](
          y[hz(1714, "#$OJ", 1874)](
            y[hX(922, 957, "kQVQ")](
              y[hH("qBjg", 1641, 778)](
                y[hz(1891, "4)a3", 2095)](
                  y[hH("(gRZ", 2872, 2340)](
                    y[hz(1623, "gDN(", 1380)](
                      y[hX(324, 679, "7D5s")](
                        y[hz(1114, "QUo7", 1937)](
                          y[hz(1356, "rHmw", 2124)](
                            y[hz(2646, "[dV(", 3235)],
                            w[hz(2069, "1x)n", 1222)],
                          ),
                          " x",
                        ),
                        Math[hX(-431, -1402, "QUo7")](V.x),
                      ),
                      y[hz(815, "RBn7", 70)],
                    ),
                    it[hH("1x)n", 2071, 2411)](0, 10)
                      [hH("r!4a", 1372, 1313)]((iG) => iG || ".")
                      [hH("CjRN", 1633, 908)](""),
                  ),
                  "=",
                ),
                ik[hz(1814, "*lE%", 1225)](1),
              ),
              y[hX(464, 901, "&EKZ")],
            ),
            iF[hH("L47D", 2923, 3598)](" "),
          ),
        );
      }
    }
    Jk[hX(112, 364, "0aTl")] = it;
    Jk.i = 0;
    Jk.n++;
    JU[hH("o8LY", 2134, 2465)]++;
    JU.ms += y[hz(1121, "wZ&$", 1820)](performance[hX(1078, 388, "eqC*")](), il);
  }
  let hQ = Jk[hz(1731, "judH", 1359)][Jk.i++] || "";
  Jk[hX(-141, 451, "rHmw")] = hQ;
  y[hX(1282, 1957, "i$6c")](Ju, hQ);
  return !0;
}
K(Jd, V7("m01*", 2125, 1536));
z();
var Jw = 1 / 3;
var Jp = new Set([
  0, 3, 12, 13, 14, 15, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 44, 45, 46, 47, 48, 49, 50, 51, 52,
  53, 54, 56, 57, 60, 64,
]);
var Jq = K(
  (V) => {
    const y = {};
    function hK(i0, i1, i2) {
      return VS(i0 - 922, i1 - 179, i2);
    }
    y[hX(402, "1x)n", 267)] = function (i0, i1) {
      return i0 - i1;
    };
    const hz = y;
    function hH(i0, i1, i2) {
      return VS(i2 - -434, i1 - 215, i0);
    }
    function hX(i0, i1, i2) {
      return VS(i0 - 82, i1 - 211, i1);
    }
    let hQ = s[hX(1060, "v$$v", 1225)][hz[hH("Ini@", -84, 418)](V, 200)];
    let hA = hQ && hQ[hK(1180, 321, "25jp")];
    return (
      !!hA &&
      !!hQ[hX(1972, "qDWf", 2967)] &&
      !hA[hX(836, "5yD(", 430)] &&
      (!!hA[hK(1657, 2454, "P$Em")] ||
        !!hA[hK(1705, 2701, "7D5s")] ||
        !!hA[hH("kYZ$", -204, 15)] ||
        !!hA[hX(267, "l#By", 896)] ||
        !!hA[hH("L47D", 1221, 665)] ||
        !!hA[hX(277, "L47D", -195)])
    );
  },
  VS(2029, 1227, "5yD("),
);
var Pt = K(
  () =>
    !!w[V7("6e)s", 2242, 1951)](V7("oX^J", 2315, 2412) + "ne") ||
    !!w[y0(1374, "Ini@", 1527)](VS(1512, 2100, "G*Jl") + V7("P$Em", 2383, 3000)),
  V7("7OMN", 1313, 550),
);
function Pr() {
  const V = {
    hDPzf: function (hQ, hA) {
      return hQ !== hA;
    },
    trQPl: hz("yX#m", -370, -639) + hz("7OMN", 161, -115),
    LIHyI: function (hQ, hA) {
      return hQ === hA;
    },
    AFCFj: function (hQ, hA) {
      return hQ % hA;
    },
    qhmtQ: function (hQ, hA) {
      return hQ | hA;
    },
    Aszwt: function (hQ, hA, i0) {
      return hQ(hA, i0);
    },
  };
  if (
    !c[hK("qBjg", -123, -165)] ||
    V[hH(2396, 1444, "&Uh1")](c[hH(1266, 2159, "qBjg")], 0) ||
    V[hH(683, 666, "i$6c")](c[hz("judH", -653, -1398)], 0) ||
    c[hH(2442, 2115, "kYZ$")] ||
    !c[hK("L47D", 566, 940)]
  ) {
    return null;
  }
  let y = w[hz("r!4a", 701, 1203)](V[hH(438, 1162, "0aTl")]);
  function hK(hQ, hA, i0) {
    return y0(hQ - 431, hQ, hA - -708);
  }
  function hz(hQ, hA, i0) {
    return y0(hQ - 376, hQ, hA - -958);
  }
  function hH(hQ, hA, i0) {
    return y0(hQ - 342, i0, hA - 439);
  }
  if (!y) {
    return null;
  }
  let hX = V[hH(3278, 2316, "]F)!")](
    V[hz("oX^J", 67, 798)](V[hK("7D5s", -258, 698)](w[hz("R5(U", 869, 503)], 0), 3),
    0,
  );
  if (V[hH(2103, 1859, "1x)n")](Y, "ut")) {
    if (y[hK("i$6c", -90, -947)]) {
      return null;
    } else {
      return V[hH(981, 936, "ckex")](ao, y, hX);
    }
  } else if (y[hK("gDN(", 859, 771)]) {
    return V[hH(308, 631, "Ini@")](aQ, y, hX);
  } else {
    return null;
  }
}
K(Pr, V7("0aTl", 1399, 1321) + VS(703, 1076, "#$OJ"));
function ao(V, y) {
  function hK(i1, i2, i3) {
    return V7(i1, i3 - 138, i3 - 365);
  }
  function hz(i1, i2, i3) {
    return V7(i1, i2 - -381, i3 - 222);
  }
  function hH(i1, i2, i3) {
    return V7(i2, i1 - -372, i3 - 263);
  }
  const hX = {
    DRyxU: function (i1, i2) {
      return i1 !== i2;
    },
    kmheW: hK("qDWf", 3453, 2572) + "e",
    ZmbQv: function (i1, i2) {
      return i1 !== i2;
    },
    ULjdF: function (i1) {
      return i1();
    },
    MgpMo: function (i1, i2) {
      return i1(i2);
    },
    DXyrq: function (i1, i2) {
      return i1 | i2;
    },
    nxnYy: function (i1, i2) {
      return i1 <= i2;
    },
    XvEPy: function (i1, i2) {
      return i1(i2);
    },
    DsUvu: function (i1, i2) {
      return i1 * i2;
    },
    fbzVM: function (i1, i2) {
      return i1(i2);
    },
    lFhfK: function (i1, i2) {
      return i1(i2);
    },
    AcCYC: function (i1, i2) {
      return i1 === i2;
    },
    DCZRL: function (i1, i2) {
      return i1 !== i2;
    },
    jfPGA: function (i1, i2) {
      return i1 < i2;
    },
    CrPeb: hH(2213, "CjRN", 1380),
    RuUZL: hz("Ini@", 1105, 627),
    rpqKj: function (i1, i2) {
      return i1 === i2;
    },
    OSBcv: function (i1, i2) {
      return i1 === i2;
    },
    hWoOj: function (i1, i2) {
      return i1 === i2;
    },
    nQBvy: function (i1, i2) {
      return i1 >= i2;
    },
    elHeI: function (i1, i2) {
      return i1 < i2;
    },
  };
  if (
    hX[hz("l#By", 551, 1377)](c[hK("1x)n", 2609, 2894)], hX[hz("tR8B", 1538, 1589)]) ||
    hX[hK("RBn7", 909, 1431)](V[hz("kQVQ", 971, 1446)], 1) ||
    hX[hK("G*Jl", 997, 1946)](Pt)
  ) {
    return null;
  }
  let hQ = hX[hz("$a3e", 1485, 1893)](Number, c[hH(1759, "[dV(", 1549)]);
  let hA = hX[hH(682, "Ini@", -6)](
    hX[hH(2133, "*lE%", 2252)](Number, c[hz("G*Jl", 997, 746)][0]),
    0,
  );
  let i0 =
    hX[hH(2166, "kQVQ", 2333)](
      hX[hz("Nlyg", 1892, 2308)](Number, c.hp),
      hX[hH(1964, "5yD(", 1180)](hX[hK("CjRN", 1169, 1963)](Number, c[hz("7OMN", 642, 942)]), Jw),
    ) &&
    !Jp[hz("iC20", 794, 430)](
      hX[hz("1x)n", 863, 1727)](
        hX[hK("7D5s", 2527, 3014)](Number, c[hK("6e)s", 2105, 2350)][0]),
        0,
      ),
    );
  if (hX[hK("5yD(", 2620, 2718)](hQ, 0)) {
    if (i0 && hX[hH(1672, "4)a3", 717)](c[hz("[dV(", 874, 1369)], 3)) {
      if (y) {
        if (hX[hz("CjRN", 2078, 2486)](hA, 2)) {
          return "b1";
        } else if (hX[hH(2368, "oX^J", 3070)](hA, 2)) {
          return hX[hH(526, "0aTl", 1501)];
        } else {
          return hX[hH(993, "rHmw", 1819)];
        }
      } else {
        return "";
      }
    } else if (
      (hX[hz("]^fO", 639, -106)](hA, 2) &&
        (!c[hz("G*Jl", 717, 649)][0] ||
          hX[hH(1413, "iC20", 1987)](c[hz("kQVQ", 2244, 2833)], 91))) ||
      (hX[hK("judH", 2185, 2064)](hA, 1) &&
        hX[hH(1983, "7D5s", 2472)](c[hz("]F)!", 1108, 514)], 91))
    ) {
      if (y) {
        return hX[hK("RBn7", 2790, 2576)];
      } else {
        return "";
      }
    } else {
      return null;
    }
  } else if (hX[hH(815, "]F)!", 1711)](hQ, 3) && hX[hz("wR1d", 1610, 1116)](hQ, 4) && i0) {
    if (y) {
      return "b1";
    } else {
      return "";
    }
  } else {
    return null;
  }
}
K(ao, y0(1893, "yX#m", 2222));
function aQ(V, y) {
  const hK = {
    iBqiM: function (i7, i8) {
      return i7 === i8;
    },
    TXyyi: function (i7, i8) {
      return i7 | i8;
    },
    PNQxA: function (i7, i8) {
      return i7 / i8;
    },
    TUiUI: function (i7, i8) {
      return i7 < i8;
    },
    sDjTr: function (i7) {
      return i7();
    },
    SmNwA: function (i7, i8) {
      return i7 === i8;
    },
    mOuvX: i2("CjRN", 1514, 1586),
    Cojmu: function (i7, i8) {
      return i7 > i8;
    },
    FatWc: function (i7, i8) {
      return i7 > i8;
    },
    rgJnM: function (i7, i8) {
      return i7 / i8;
    },
    GNyXv: function (i7, i8) {
      return i7 < i8;
    },
    CPWVC: function (i7, i8) {
      return i7 < i8;
    },
    KZtRZ: function (i7, i8) {
      return i7(i8);
    },
    DxtLM: function (i7, i8) {
      return i7(i8);
    },
    BgeJY: function (i7, i8) {
      return i7 < i8;
    },
    UifGs: function (i7, i8) {
      return i7 <= i8;
    },
    wGQMm: function (i7, i8) {
      return i7 >= i8;
    },
    YssxA: function (i7, i8) {
      return i7 >= i8;
    },
    hSejz: function (i7, i8) {
      return i7 === i8;
    },
    IAzFL: i1(1119, 843, "ckex"),
    NEYJq: i6("Ini@", 748, 873),
    jNNUo: function (i7, i8) {
      return i7(i8);
    },
    NmqKk: function (i7, i8) {
      return i7 | i8;
    },
    XlEGa: function (i7, i8) {
      return i7 !== i8;
    },
    EsJre: function (i7, i8) {
      return i7 >> i8;
    },
    KCIdb: i1(586, 385, "eqC*"),
    dieKS: function (i7, i8) {
      return i7 === i8;
    },
    mdAGJ: function (i7, i8) {
      return i7 === i8;
    },
  };
  if (hK[i6("eqC*", 1661, 2139)](V[i6("[dV(", 323, 1288) + "s"], 1)) {
    return null;
  }
  let hz = hK[i6("7D5s", 2179, 2039)](c[i6("kQVQ", 2729, 1834)], 0);
  let hH = c[i1(2361, 1857, "(gRZ")];
  let hX = c[i1(2198, 1409, "R5(U")];
  let hQ = (i7) =>
    (V[i6("v$$v", 430, 628)] && V[i2("25jp", 140, 1089)][i7]
      ? V[i6("6e)s", 2089, 2267)][i7][hz]
      : 0) | 0;
  let hA = -1;
  let i0 = hK[i2("1x)n", 1609, 1621)](1, 0);
  for (
    let i7 = 0;
    hK[i6("(gRZ", 1179, 1345)](i7, Math[i6("Nlyg", 3132, 2246)](3, hK[i2("v$$v", 1023, 766)](M)));
    i7++
  ) {
    if (hK[i2("#$OJ", 878, 939)](hK[i2("m01*", 1028, 948)], hK[i1(2002, 1098, "rHmw")])) {
      let i8 = c[i6("[dV(", 2353, 1501)][i7];
      if (
        !hK[i2("&EKZ", 1218, 2007)](i8, 0) ||
        !hK[i6("7D5s", 713, 855)](c[i6("o8LY", 1364, 898)][i8], 0)
      ) {
        continue;
      }
      let i9 = hK[i6("Nlyg", 2227, 1249)](c.hp[i8], c[i1(1209, 2022, "CLkT")][i8]);
      if (hK[i2("judH", 142, -740)](i9, i0)) {
        i0 = i9;
        hA = i7;
      }
    } else {
      u.push(i4([i5], i7, 4), I([Z], j, 4, 8));
      for (let iV of ["u", "d", "l", "r"]) {
        iV.push(i7([w, iV], p, 4));
      }
    }
  }
  function i1(iy, iJ, iP) {
    return y0(iy - 224, iP, iJ - -198);
  }
  function i2(iy, iJ, iP) {
    return y0(iy - 291, iy, iJ - -195);
  }
  let i3 = -1;
  for (let iy = 0; hK[i6("[dV(", 188, 539)](iy, 12) && hK[i1(2363, 1672, "oX^J")](i3, 0); iy++) {
    if (
      hK[i6("oX^J", 1112, 2071)](hQ, iy) &&
      hK[i2("kQVQ", 1631, 2324)](Jq, hK[i1(1298, 1692, "RBn7")](hQ, iy))
    ) {
      i3 = iy;
    }
  }
  let i4 = !1;
  for (let iJ = 0; hK[i1(1856, 1200, "(gRZ")](iJ, hz); iJ++) {
    if (hK[i2("m01*", 1491, 1957)](c[i6("&Uh1", 1866, 2176)][iJ], 4)) {
      i4 = true;
    }
  }
  let i5 =
    hK[i1(2186, 1923, "P$Em")](i0, Jw) &&
    hK[i2("7D5s", 1922, 1696)](i3, 0) &&
    !i4 &&
    hK[i1(2903, 2013, "iC20")](hA, 0);
  if (hK[i2("o8LY", 279, -703)](hX, 0)) {
    let iP = hK[i1(562, 746, "ckex")](hH[0][hz], 0);
    if (i5) {
      if (y) {
        if (hK[i6("rHmw", 1506, 1801)](iP, 2)) {
          return "b1";
        } else if (hK[i2("25jp", 526, 182)](iP, 2)) {
          return hK[i2("25jp", 1959, 1891)];
        } else {
          return hK[i2("o8LY", 841, 1017)];
        }
      } else {
        return "";
      }
    } else if (hK[i2("&Uh1", 229, 1069)](iP, 2) && !hK[i2("]F)!", 652, 88)](hQ, 0)) {
      if (y) {
        return hK[i1(472, 242, "&EKZ")];
      } else {
        return "";
      }
    } else {
      return null;
    }
  }
  if (!i5) {
    return null;
  }
  function i6(ia, il, ih) {
    return y0(ia - 114, ia, ih - 67);
  }
  if (hK[i1(422, 1210, "judH")](hX, 4)) {
    let ia = hK[i2("R5(U", 606, -395)](hH[4][hz], 0);
    if (y) {
      if (hK[i2("(gRZ", 1362, 2099)](ia, i3)) {
        return "b1";
      } else if (
        hK[i2("tR8B", 1184, 1291)](
          hK[i1(898, 466, "qDWf")](ia, 1),
          hK[i1(1723, 1570, "Ini@")](i3, 1),
        )
      ) {
        if (
          hK[i1(496, 1000, "Nlyg")](
            hK[i6("yX#m", 680, 450)](ia, 1),
            hK[i2("CjRN", 701, 367)](i3, 1),
          )
        ) {
          return hK[i6("25jp", 1867, 1784)];
        } else {
          return "up";
        }
      } else {
        return hK[i1(1519, 1664, "wR1d")];
      }
    } else {
      return "";
    }
  }
  if (hK[i2("iC20", 251, 1020)](hX, 7)) {
    if (y) {
      if (hK[i1(-352, 186, "wZ&$")](hK[i2("CjRN", 281, 613)](hH[7][hz], 0), hA)) {
        return "b1";
      } else {
        return hK[i1(-411, 87, "7OMN")];
      }
    } else {
      return "";
    }
  } else {
    return null;
  }
}
K(aQ, VS(182, -693, "25jp"));
z();
var aA = new Set([1, 4, 5, 9]);
var l0 = new Set([V7("r!4a", 1503, 619), y0(897, "Ini@", 1328)]);
function l1() {
  const V = {};
  function y(hX, hQ, hA) {
    return y0(hX - 415, hA, hQ - 216);
  }
  function hK(hX, hQ, hA) {
    return y0(hX - 293, hQ, hX - -128);
  }
  V[y(1484, 1163, "i$6c")] = function (hX, hQ) {
    return hX !== hQ;
  };
  V[y(1021, 1164, "L47D")] = function (hX, hQ) {
    return hX === hQ;
  };
  const hz = V;
  function hH(hX, hQ, hA) {
    return y0(hX - 421, hX, hA - 744);
  }
  return (
    hz[y(868, 1513, "ZI9W")](c[hK(1784, "v$$v", 2140)], 1) &&
    hz[hH("ckex", 434, 1318)](c[y(2002, 2219, "&EKZ")][34], 0)
  );
}
K(l1, V7("tR8B", 2407, 2662));
function l2(V, y) {
  const hK = {
    lTvVA: function (i2) {
      return i2();
    },
    YuJjd: function (i2, i3) {
      return i2 < i3;
    },
    AwBpQ: function (i2, i3) {
      return i2 | i3;
    },
    ciHpd: function (i2, i3) {
      return i2 === i3;
    },
    qYeMJ: function (i2, i3) {
      return i2(i3);
    },
    avNVy: hH(-1662, -659, "G*Jl"),
    mTVPZ: function (i2, i3, i4) {
      return i2(i3, i4);
    },
    NzwhE: function (i2, i3) {
      return i2 <= i3;
    },
    CrmIh: function (i2, i3) {
      return i2 === i3;
    },
    JzUBC: hH(589, 873, "[dV(") + hz(520, 721, "(gRZ"),
  };
  function hz(i2, i3, i4) {
    return VS(i3 - 67, i3 - 491, i4);
  }
  function hH(i2, i3, i4) {
    return VS(i3 - -810, i3 - 102, i4);
  }
  let hX = hK[hH(-1103, -640, "wZ&$")](l1);
  let hQ = c[i1(-400, -636, "0aTl")][y];
  let hA = (hX ? c[i1(310, -691, "v$$v") + "l"][y] : c[hz(138, 811, "&EKZ")][hQ]) || [];
  let i0 =
    (hX
      ? c[hH(-485, -535, "G*Jl") + i1(5, -971, "gDN(")][y]
      : c[hH(621, 514, "kYZ$")] && c[hH(1489, 708, "Ini@")][hQ]) || [];
  function i1(i2, i3, i4) {
    return VS(i2 - -718, i3 - 158, i4);
  }
  for (let i2 = 0; hK[hz(-161, 483, "wZ&$")](i2, 12); i2++) {
    if (
      (!!aA[hz(1891, 1981, "eqC*")](hK[i1(406, -398, "]^fO")](hA[i2], 0)) ||
        (!!hK[hH(1494, 976, "1x)n")](
          hK[hH(624, 774, "wR1d")](k, hA[i2]),
          hK[hH(-1173, -248, "tR8B")],
        ) &&
          !!hK[hz(1037, 1764, "zb85")](F, hA[i2], y))) &&
      !!hK[hH(-88, -259, "yX#m")](
        hK[hz(212, 495, "4)a3")](Number, i0[i2]),
        c[i1(865, 1188, "tR8B")],
      ) &&
      (!hX || !!V[hz(2482, 1970, "gDN(") + "ed"](y, i2)) &&
      (!hK[i1(703, -13, "tR8B")](y, 1) ||
        !hK[hH(676, -68, "qDWf")](i2, 1) ||
        !V[hH(387, 467, "0aTl") + i1(-231, -649, "judH") + hH(1025, 1214, "G*Jl")] ||
        !w[hz(968, 1965, "kQVQ")](hK[hz(1162, 366, "yX#m")]))
    ) {
      return i2;
    }
  }
  return -1;
}
K(l2, VS(1659, 878, "qDWf"));
function l3(V) {
  function y(hQ, hA, i0) {
    return VS(i0 - -381, hA - 270, hA);
  }
  const hK = {
    xiQxU: function (hQ, hA) {
      return hQ < hA;
    },
    sqqbC: function (hQ, hA) {
      return hQ === hA;
    },
    LQiDT: function (hQ, hA) {
      return hQ !== hA;
    },
    ZBJMe: function (hQ, hA) {
      return hQ > hA;
    },
    AaSVa: function (hQ, hA) {
      return hQ(hA);
    },
    ooPVr: function (hQ, hA) {
      return hQ | hA;
    },
  };
  let hz = (hQ) =>
    (hQ === 2 || hQ === 4 ? V[hX(1664, 1243, "qBjg") + "dy"](2) : !0) &&
    (hQ === 3 || hQ === 4 ? V[hH(1356, "v$$v", 2174) + "dy"](3) : !0) &&
    (hQ === 5 && c[hX(2526, 2501, "QUo7")] !== 1 ? V[hH(2819, "CjRN", 2542) + "dy"](4) : !0);
  function hH(hQ, hA, i0) {
    return VS(i0 - 527, hA - 445, hA);
  }
  for (let hQ = 0; hK[y(261, "1x)n", 540)](hQ, 3); hQ++) {
    if (hK[y(-303, "r!4a", 353)](c[hH(799, "wR1d", 651)][hQ], 1)) {
      for (let hA = 0; hK[hX(1646, 2139, "rHmw")](hA, 6); hA++) {
        if (
          !!l0[y(-805, "#$OJ", -60)](((c[hX(2023, 1961, "m01*")] || [])[hQ] || [])[hA]) &&
          !hK[y(1852, "zb85", 886)](((c[hX(1660, 783, "eqC*")] || [])[hQ] || [])[hA], 1) &&
          !hK[y(2259, "tR8B", 1309)](
            hK[y(847, "ckex", 957)](Number, ((c[y(-491, "R5(U", 242)] || [])[hQ] || [])[hA]),
            c[hX(1257, 780, "o8LY")],
          ) &&
          !!hK[y(815, "]F)!", 476)](
            hz,
            hK[hX(2277, 2849, "CLkT")](((c[hX(1741, 2249, "o8LY")] || [])[hQ] || [])[hA], 0),
          )
        ) {
          return {
            m: hQ,
            i: hA,
          };
        }
      }
    }
  }
  function hX(i0, i1, i2) {
    return VS(i0 - 1024, i1 - 258, i2);
  }
  return null;
}
K(l3, y0(-296, "o8LY", 223));
function l4(V, y, hK) {
  const hz = {
    ZCEYQ: function (hA, i0) {
      return hA === i0;
    },
    AOcWd: function (hA, i0) {
      return hA !== i0;
    },
    ftTIx: function (hA, i0) {
      return hA >> i0;
    },
    wxHhR: function (hA, i0) {
      return hA >> i0;
    },
    Rmldy: function (hA, i0) {
      return hA < i0;
    },
    fZKVk: function (hA, i0) {
      return hA(i0);
    },
    NrLrz: function (hA, i0) {
      return hA + i0;
    },
    asApu: hQ(1292, "$a3e", 786),
    qgqAk: hX(-144, 832, "iC20"),
  };
  function hH(hA, i0, i1) {
    return y0(hA - 92, hA, i0 - 955);
  }
  function hX(hA, i0, i1) {
    return y0(hA - 73, i1, i0 - -344);
  }
  function hQ(hA, i0, i1) {
    return y0(hA - 148, i0, i1 - -107);
  }
  if (hz[hQ(538, "]F)!", 1519)](V, y)) {
    return "b1";
  } else if (
    hz[hQ(540, "gDN(", 1411)](hz[hQ(72, "]F)!", 544)](V, 1), hz[hQ(521, "qDWf", 504)](y, 1))
  ) {
    if (hz[hQ(2957, "o8LY", 1955)](y, V)) {
      return "up";
    } else if (hz[hQ(2518, "l#By", 1616)](hK, hz[hQ(1390, "wZ&$", 496)](V, 2))) {
      return hz[hH("rHmw", 2154, 2855)];
    } else {
      return hz[hX(694, 1214, "CjRN")];
    }
  } else {
    return hz[hH("6e)s", 2728, 2814)];
  }
}
K(l4, y0(1431, "6e)s", 1476));
function l5() {
  const V = {
    GSzre: function (i5, i6) {
      return i5 === i6;
    },
    oafpK: function (i5, i6) {
      return i5 !== i6;
    },
    IhvsC: function (i5, i6) {
      return i5 >= i6;
    },
    iwcLB: function (i5, i6) {
      return i5 / i6;
    },
    fCpQI: i2("ZI9W", 974, 49) + i2("kYZ$", 422, 1424),
    xzboE: i4("v$$v", 2111, 2642) + i4("R5(U", 1488, 1675) + i2("iC20", 376, 386),
    KaGnz: i4("P$Em", 2236, 2733) + i3(2861, "gDN(", 2834) + i4("CLkT", 866, 1052),
    mNXvh: i3(1945, "gDN(", 2533) + i2("Nlyg", 1197, 1019),
    qvwyY: i3(2676, "r!4a", 2463) + i4("5yD(", 2725, 2008),
    WCICO: function (i5, i6) {
      return i5 | i6;
    },
    WLiHg: function (i5, i6) {
      return i5 < i6;
    },
    SiDLw: function (i5, i6) {
      return i5 > i6;
    },
    lLVMs: function (i5, i6) {
      return i5(i6);
    },
    LylHV: function (i5, i6) {
      return i5 === i6;
    },
    TUAgP: function (i5, i6) {
      return i5(i6);
    },
    NlbvS: function (i5, i6, i7) {
      return i5(i6, i7);
    },
    MTqGl: function (i5, i6) {
      return i5 % i6;
    },
    OyPOK: function (i5, i6) {
      return i5 | i6;
    },
    ohfPw: function (i5, i6) {
      return i5 === i6;
    },
    NmFIK: function (i5, i6) {
      return i5 < i6;
    },
    esxrq: function (i5, i6) {
      return i5 > i6;
    },
    VWCxV: i4("qDWf", 2213, 1488),
    QXfvl: i4("o8LY", 2689, 2068),
    Bzopw: i2("P$Em", 1362, 1738),
    TgCvP: function (i5, i6, i7, i8) {
      return i5(i6, i7, i8);
    },
    DimZl: function (i5, i6) {
      return i5 === i6;
    },
    fAFks: function (i5) {
      return i5();
    },
    PvUoI: function (i5, i6, i7, i8) {
      return i5(i6, i7, i8);
    },
  };
  if (
    !c[i3(2885, "kQVQ", 2153)] ||
    V[i3(1518, "oX^J", 934)](Y, "ut") ||
    V[i3(1714, "CjRN", 1933)](c[i4("o8LY", 1630, 970)], 1) ||
    V[i4("7D5s", 2278, 3069)](c[i4("R5(U", 1159, 1935)], 0) ||
    V[i2("yX#m", 147, -288)](c[i3(2834, "&EKZ", 3290)], 0) ||
    c[i4("#$OJ", 793, 64)] ||
    !c[i3(973, "7OMN", 774)] ||
    !Array[i3(1295, "gDN(", 1550)](c[i3(2015, "iC20", 2289)][0]) ||
    !V[i2("CLkT", -208, -1154)](
      c[i3(1039, "m01*", 261)],
      V[i3(2622, "wZ&$", 2913)](c[i3(2345, "QUo7", 3179)], 2),
    )
  ) {
    return null;
  }
  let y = w[i2("iC20", 1661, 1315)](V[i4("6e)s", 2384, 2097)]);
  if (
    !y ||
    !y[i2("ckex", 67, 75)] ||
    V[i3(2614, "L47D", 3582)](y[i2("4)a3", 1372, 2367) + "s"], 1) ||
    w[i2("RBn7", 1032, 24)](V[i4("CLkT", 1702, 2133)]) ||
    w[i3(1949, "(gRZ", 2649)](V[i3(2671, "iC20", 1844)]) ||
    w[i4("0aTl", 2710, 1856)](V[i4("gDN(", 2626, 2772)]) ||
    w[i4("*lE%", 2024, 1928)](V[i3(1636, "L47D", 2449)])
  ) {
    return null;
  }
  let hK = V[i3(2969, "kQVQ", 3812)](c[i2("iC20", 699, 832)], 0);
  let hz = c[i3(2855, "l#By", 3452)][hK];
  if (
    !V[i2("o8LY", 140, 768)](hK, 0) ||
    !V[i3(1604, "25jp", 2368)](
      hK,
      Math[i3(1330, "#$OJ", 1271)](3, c[i3(1613, "1x)n", 2564)][i4("i$6c", 841, 1721)]),
    ) ||
    !V[i4("l#By", 1070, 344)](hz, 0) ||
    !V[i4("0aTl", 1747, 2703)](V[i2("RBn7", 469, -164)](Number, c.hp[hz]), 0)
  ) {
    return null;
  }
  let hH = V[i2("7OMN", 1425, 870)](V[i3(1428, "#$OJ", 1991)](u, hz), 1);
  let hX = hH ? V[i3(1870, "ckex", 1172)](l3, y) : V[i3(1733, "Nlyg", 861)](l2, y, hK);
  if (V[i2("QUo7", 780, 1693)](hX, null) || V[i3(2653, "&Uh1", 2356)](hX, -1)) {
    return null;
  }
  let hQ = V[i4("$a3e", 2068, 1187)](
    V[i2("6e)s", 880, 1462)](V[i2("0aTl", 608, -268)](w[i2("0aTl", 1440, 2335)], 0), 3),
    0,
  );
  let hA = c[i3(1572, "qBjg", 933)];
  let i0 = c[i4("m01*", 1641, 2326)];
  let i1 = (i5) => (hA[i5] ? hA[i5][hK] | 0 : 0);
  if (V[i2("zb85", 1242, 1606)](i0, 0)) {
    if (!hQ) {
      return "";
    }
    let i5 = V[i4("i$6c", 1817, 2279)](i1, 0);
    if (V[i4("o8LY", 2609, 3011)](i5, 1)) {
      return "b1";
    } else if (V[i4("RBn7", 1713, 915)](i5, 1) || V[i3(1857, "L47D", 2620)](i5, 3)) {
      return V[i2("oX^J", 1059, 2065)];
    } else {
      return V[i3(2879, "G*Jl", 3448)];
    }
  }
  if (hH) {
    if (V[i4("4)a3", 2104, 2787)](i0, 11)) {
      if (hQ) {
        if (V[i4("&EKZ", 1974, 2437)](V[i3(2648, "7OMN", 3144)](i1, 11), hX.m)) {
          return "b1";
        } else {
          return V[i2("Ini@", 167, 968)];
        }
      } else {
        return "";
      }
    } else if (
      V[i4("25jp", 2227, 2452)](i0, 9) &&
      V[i3(2147, "$a3e", 2947)](V[i4("4)a3", 925, 336)](i1, 11), hX.m)
    ) {
      if (hQ) {
        return V[i3(2386, "gDN(", 2190)](
          l4,
          V[i4("4)a3", 925, 429)](i1, 9),
          hX.i,
          (i6) => ((c[i3(2961, "R5(U", 2951)][hX.m] || [])[i6] | 0) === 1,
        );
      } else {
        return "";
      }
    } else {
      return null;
    }
  }
  function i2(i6, i7, i8) {
    return V7(i6, i7 - -1221, i8 - 114);
  }
  if (V[i2("i$6c", 1010, 1308)](i0, 2)) {
    let i6 =
      (V[i2("]F)!", 267, -577)](l1)
        ? c[i3(2560, "CLkT", 3250) + "l"][hK]
        : c[i2("tR8B", 1304, 1902)][hz]) || [];
    if (hQ) {
      return V[i3(1101, "Nlyg", 1927)](
        l4,
        V[i3(1961, "rHmw", 1147)](i1, 2),
        hX,
        (i7) => i7 < 12 && (i6[i7] | 0) !== 0,
      );
    } else {
      return "";
    }
  }
  function i3(i7, i8, i9) {
    return V7(i8, i7 - 100, i9 - 17);
  }
  function i4(i7, i8, i9) {
    return V7(i7, i8 - -118, i9 - 371);
  }
  return null;
}
K(l5, y0(517, "o8LY", 408) + y0(1745, "&EKZ", 1184));
function l6() {
  let V = v(b);
  let y = V.ctx;
  try {
    Object.defineProperty(V, "ctx", {
      get: () => y,
      set: () => {},
      configurable: true,
    });
  } catch {}
  return V;
}
K(l6, "pinnedNullGfx");
function l7(V) {
  yc(V);
}
K(l7, "setRolloutBudget");
var l8 = K(
  () => c.mnfight !== 2 && (!!w.first("obj_menubone") || !!w.first("obj_menubone_bottom")),
  "menuBonesOut",
);
function l9() {
  return (
    yu() ||
    (Jv(w.first("obj_heart")) ? "ut10" : null) ||
    (VJ(w.first("obj_heart")) ? "ch4green" : null) ||
    (l8() ? "menubones" : null)
  );
}
K(l9, "rolloutSoul");
var lV = new Set(["obj_lborder", "obj_rborder", "obj_uborder", "obj_dborder", "obj_border"]);
var ly = (() => {
  let V = new Set(["obj_collidebullet"]);
  try {
    for (let y of [...N, ...T]) {
      let [hK, hz] = y;
      if (hK === "obj_heart" && !lV.has(hz)) {
        V.add(hz);
      } else if (hz === "obj_heart" && !lV.has(hK)) {
        V.add(hK);
      }
    }
  } catch {}
  return V;
})();
for (let g3 of X) {
  ly.add(g3);
}
var lJ = new Set(Q);
function lP() {
  return ly.size;
}
K(lP, "threatCount");
var la = K((V) => lC(V), "canSee");
var ll = {
  frame: -1,
  mode: "off",
  threats: [],
  soul: null,
  bounds: null,
  dir: null,
  best: 0,
  score: 0,
  commit: 0,
  blocked: [],
  speed: 3,
  plan: null,
};
var lh = [[0, 0]];
for (let g4 = 0; g4 < 16; g4++) {
  let g5 = (g4 / 16) * Math.PI * 2;
  lh.push([Math.cos(g5), Math.sin(g5)]);
}
var li = {
  horizon: 30,
  keep: 0.35,
  stay: 0.25,
  room: 0.05,
  margin: 0,
  commit: 3,
  gsteps: 6,
  gkeep: 0.55,
  gstay: 0.35,
  centre: 0.6,
  beamAlign: 12,
};
function lg(V) {
  Object.assign(li, V);
}
K(lg, "setParams");
async function lS(V = "assets/autoplay.tune.json") {
  try {
    let y = await fetch(V, {
      cache: "no-store",
    });
    if (!y.ok) {
      return null;
    }
    let hK = await y.json();
    if (hK && hK.params) {
      lg(hK.params);
      return hK;
    }
  } catch {}
  return null;
}
K(lS, "loadAutoplayTune");
var lt = 0;
var lk = 0;
var lF = 3;
var lN = null;
var lW = 0;
var lT = new Map();
var lU = {
  left: 0,
  right: 0,
  up: 0,
  down: 0,
};
var lG = {
  left: false,
  right: false,
  up: false,
  down: false,
};
var lE = {
  soul: "",
  branch: "",
  move: "",
  detail: "",
  threats: 0,
  hazards: [],
};
function lv() {
  return lE;
}
K(lv, "autoplayPlan");
function lc(V, y, hK) {
  lE.branch = V;
  lE.move = y;
  lE.detail = hK || "";
}
K(lc, "note");
function lu() {
  return !!c.autoplay;
}
K(lu, "autoplayOn");
function lo() {
  c.autoplay = !c.autoplay;
  if (!c.autoplay) {
    lM();
    r.synthetic = null;
  }
  return c.autoplay;
}
K(lo, "toggleAutoplay");
function lR() {
  r.held.left = false;
  r.held.right = false;
  r.held.up = false;
  r.held.down = false;
}
K(lR, "clearHeld");
function lM() {
  lR();
  r.held.b1 = false;
  r.pressed.b1 = false;
}
K(lM, "clearAll");
function lm() {
  return lY();
}
K(lm, "autoplayBounds");
function lY() {
  let V = null;
  let y = null;
  let hK = null;
  let hz = null;
  for (let hQ of w.list) {
    if (hQ.destroyed) {
      continue;
    }
    let hA = hQ.constructor.name;
    if (hA === "obj_lborder") {
      V = hQ.x;
    } else if (hA === "obj_rborder") {
      y = hQ.x;
    } else if (hA === "obj_uborder") {
      hK = hQ.y;
    } else if (hA === "obj_dborder") {
      hz = hQ.y;
    }
  }
  if (V !== null && y !== null && hK !== null && hz !== null && y - V > 16 && hz - hK > 16) {
    return [V, hK, y, hz];
  }
  let hH = w.first("obj_knight_split_growtangle");
  if (hH && !hH.destroyed) {
    let i0 = hH.con === 0 ? 0 : Math.round(hH.distance || 0);
    let i1 = hH.vertical ? i0 : 0;
    let i2 = hH.vertical ? 0 : i0;
    if (hH.diagonal) {
      i1 = Math.SQRT1_2 * i0;
      i2 = Math.SQRT1_2 * i0;
    }
    return [hH.x - 70 - i1, hH.y - 70 - i2, hH.x + 52 + i1 + 20, hH.y + 52 + i2 + 20];
  }
  let hX = w.first("obj_growtangle");
  if (hX && !hX.destroyed) {
    let i3 = (hX.image_xscale || 2) * 37.5;
    let i4 = (hX.image_yscale || 2) * 37.5;
    if (i3 > 8 && i4 > 8) {
      return [hX.x - i3, hX.y - i4, hX.x + i3, hX.y + i4];
    }
  }
  return null;
}
K(lY, "arena");
function lI(V) {
  if (V > 0.5 && V < 8) {
    return 0.6;
  } else if (V > -1 && V <= 0.5) {
    return 0.2;
  } else if (V > -4 && V <= -1) {
    return 0.5;
  } else {
    return 0.2;
  }
}
K(lI, "utGravity");
function lZ(V) {
  if (V.is && V.is("obj_tracking_sword1")) {
    if (V.con < 2) {
      return {
        skip: true,
      };
    }
    let hA = V.con === 2 ? V.flashtime + 1 - V.timer + 2 : Math.max(0, 2 - V.timer);
    let i0 = ((V.direction + 180) * Math.PI) / 180;
    let i1 = Math.cos(i0);
    let i2 = Math.sin(i0);
    let i3 = [];
    for (let i4 = 60; i4 <= 260; i4 += 10) {
      i3.push({
        cx: V.x + i1 * i4,
        cy: V.y - i2 * i4,
        hw: 7,
        hh: 7,
        custom: 1,
        t0: hA,
        ttl: hA + 4,
      });
    }
    return {
      multi: i3,
    };
  }
  if (V.is && V.is("obj_sans_bonebul") && (V.width || 0) > 0) {
    let i5 = c.idealborder ? c.idealborder[2] + 11 : 0;
    let i6 = c.idealborder ? c.idealborder[3] - 6 : 480;
    let i7 = V.x + 2 + (V.rc_le || 0);
    let i8 = V.x + 8 - (V.rc_cut || 0);
    let i9 = V.type === 2 ? i5 : V.y + 5;
    let iV = V.type === 2 ? V.y : i6;
    return {
      hw: Math.max(2, Math.abs(i8 - i7) / 2),
      hh: Math.max(2, Math.abs(iV - i9) / 2),
      cx: (i7 + i8) / 2,
      cy: (i9 + iV) / 2,
      custom: 1,
    };
  }
  if (V.is && V.is("blt_sizebone")) {
    if (V.active !== undefined && V.active !== 1) {
      return {
        skip: true,
      };
    }
    let iy = c.idealborder || [0, 640, 0, 480];
    let iJ = V.is("blt_topbone");
    let iP = V.x + 3;
    let ia = V.x + 9;
    let il = iJ ? iy[2] + 10 : V.y + 2;
    let ih = iJ ? V.y : iy[3] - 2;
    return {
      cx: (iP + ia) / 2 + 1,
      cy: (il + ih) / 2 + 1,
      hw: Math.abs(ia - iP) / 2 + 0.5,
      hh: Math.abs(ih - il) / 2 + 0.5,
      blueOnly: V.blue === 1,
      custom: 1,
    };
  }
  if (V.is && V.is("obj_bonestab")) {
    let ii = c.idealborder;
    if (!ii) {
      return {
        skip: true,
      };
    }
    let ig = V.height || 25;
    let iS;
    let it;
    let ik;
    let iF;
    if (V.dir === 1) {
      iS = ii[1] - ig;
      ik = ii[1] - 3;
      it = ii[2] + 8;
      iF = ii[3] - 3;
    } else if (V.dir === 2) {
      iS = ii[0] + 8;
      ik = ii[1] - 3;
      it = ii[2] + 6;
      iF = ii[2] + 5 + ig;
    } else if (V.dir === 3) {
      iS = ii[0] + 5;
      ik = ii[0] + 8 + ig;
      it = ii[2] + 8;
      iF = ii[3] - 3;
    } else {
      iS = ii[0] + 8;
      ik = ii[1] - 3;
      it = ii[3] - ig;
      iF = ii[3] - 3;
    }
    let iN = Number.isFinite(V.retain) ? V.retain : 4;
    let iW = Math.max(1, Math.floor(ig / 4));
    let iT = 9 + iN + Math.ceil((ig - 3) / iW);
    let iU;
    let iG;
    if (V.con === 2) {
      iU = 0;
      iG = iT - (V.timer || 0) + 1;
    } else {
      let iE = Math.max(0, V.warning || 0);
      iU = iE + 1;
      iG = iE + iT;
    }
    if (iG < 1) {
      return {
        skip: true,
      };
    } else {
      return {
        cx: (iS + ik) / 2,
        cy: (it + iF) / 2,
        hw: Math.max(4, Math.abs(ik - iS) / 2),
        hh: Math.max(4, Math.abs(iF - it) / 2),
        custom: 1,
        t0: iU,
        ttl: iG,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0,
      };
    }
  }
  if (V.is && V.is("obj_spearbullet_follow")) {
    if (V.deactivate) {
      return {
        skip: true,
      };
    }
    let iv = V.rotspeed || 0;
    let ic = V.is("obj_followspear_2") ? 2 : 1;
    let iu = iv > 0 ? Math.ceil(iv / ic) : undefined;
    let io = ((V.direction || 0) * Math.PI) / 180;
    let iR = Math.cos(io);
    let iM = -Math.sin(io);
    let im = V.x - iR * 12.5;
    let iY = V.y - iM * 12.5;
    let iI = V.x + iR * 25;
    let iZ = V.y + iM * 25;
    return {
      cx: (im + iI) / 2,
      cy: (iY + iZ) / 2,
      hw: Math.max(4, Math.abs(iI - im) / 2 + 3),
      hh: Math.max(4, Math.abs(iZ - iY) / 2 + 3),
      ax: iR * 0.3,
      ay: iM * 0.3,
      custom: 1,
      t0: iu,
    };
  }
  if (V.constructor.name === "obj_collidebullet" && V.sprite_index === "spr_joker_scythebody") {
    let ij = null;
    for (let iL of w.list) {
      if (
        !iL.destroyed &&
        iL.constructor.name === "obj_centerscythe" &&
        iL.king === 1 &&
        iL.sbul === V
      ) {
        ij = iL;
        break;
      }
    }
    if (ij) {
      let iD = ij.scythetimer || 0;
      let iO = ij.scythesidex || 1;
      let ix = f[V.mask_index] || f[V.sprite_index];
      let iC = V.image_xscale || 1;
      let iB = V.image_yscale || 1;
      let ib = (iO * 100 * Math.PI) / 180;
      let id = Math.cos(ib);
      let iw = Math.sin(ib);
      let ip = Infinity;
      let iq = Infinity;
      let iK = -Infinity;
      let iz = -Infinity;
      let g6 = ix && ix.masks && ix.masks[0];
      let [g7, g8] = g6 ? O(g6) : [0, 0];
      if (g6) {
        for (let gP = 0; gP < g8; gP++) {
          for (let ga = 0; ga < g7; ga++) {
            if (D(g6, ga, gP)) {
              let gl = (ga + 0.5 - (ix.ox || 0)) * iC;
              let gh = (gP + 0.5 - (ix.oy || 0)) * iB;
              let gi = gl * id + gh * iw;
              let gg = -gl * iw + gh * id;
              if (gi < ip) {
                ip = gi;
              }
              if (gi > iK) {
                iK = gi;
              }
              if (gg < iq) {
                iq = gg;
              }
              if (gg > iz) {
                iz = gg;
              }
            }
          }
        }
      }
      if (!Number.isFinite(ip)) {
        ip = iC * -24;
        iK = iC * 24;
        iq = iB * -22;
        iz = iB * 22;
      }
      let g9 = 64;
      let gV = new Array(g9 + 1);
      let gy = V.x;
      for (let gn = 0; gn <= g9; gn++) {
        if (gn > 0) {
          let gS = iD + gn;
          gy += gS < 85 ? 0 : iO * -3 * Math.min(5, gS - 84);
        }
        gV[gn] = [gy + (ip + iK) / 2, V.y + (iq + iz) / 2];
      }
      let gJ = 104 - iD;
      if (gJ < 1) {
        return {
          skip: true,
        };
      } else {
        return {
          hw: (iK - ip) / 2,
          hh: (iz - iq) / 2,
          cx: gV[0][0],
          cy: gV[0][1],
          custom: 1,
          ttl: gJ,
          vx: 0,
          vy: 0,
          ax: 0,
          ay: 0,
          path: (gk) => gV[Math.min(g9, Math.max(0, Math.round(gk)))],
        };
      }
    }
  }
  if (V.is && V.is("obj_centerscythe")) {
    if (V.chasecon !== 2) {
      return {
        skip: true,
      };
    }
    let gk = f[V.mask_index] || f[V.sprite_index];
    if (gk && gk._reach === undefined) {
      let gR = 0;
      let gM = gk.masks && gk.masks[0];
      let [gm, gY] = gM ? O(gM) : [0, 0];
      if (gM) {
        for (let gI = 0; gI < gY; gI++) {
          for (let gZ = 0; gZ < gm; gZ++) {
            if (D(gM, gZ, gI)) {
              gR = Math.max(gR, Math.hypot(gZ + 0.5 - (gk.ox || 0), gI + 0.5 - (gk.oy || 0)));
            }
          }
        }
      }
      gk._reach = gR || Math.hypot(gk.w, gk.h) / 2;
    }
    let gF = gk ? gk._reach : 15;
    let gN = gF;
    let gW = 64;
    let gT = new Array(gW + 1);
    let gU = V.dir || 0;
    let gG = V.dirspeed || 0;
    let gE = V.insanity === 1;
    let gv = V.sinespeed || 0;
    let gc = V.radius || 0;
    let gu = V.centerx;
    let go = V.centery;
    for (let gj = 0; gj <= gW; gj++) {
      if (gj > 0) {
        gU += gG;
        if (gE) {
          if (gG > 0 && gG < 3) {
            gG += 0.01;
          } else if (gG < 0 && gG > -3) {
            gG -= 0.01;
          }
        }
      }
      let gL = Math.cos(((V.sine || 0) + gv * gj) / 18) * gc;
      let gf = (gU * Math.PI) / 180;
      gT[gj] = [gu - gL * Math.cos(gf), go + gL * Math.sin(gf)];
    }
    return {
      hw: gF,
      hh: gN,
      cx: V.x,
      cy: V.y,
      custom: 1,
      path: (gD) => gT[Math.min(gW, Math.max(0, Math.round(gD)))],
    };
  }
  let hK = f[V.mask_index] || f[V.sprite_index];
  let hz = Math.abs(V.image_xscale || 1);
  let hH = Math.abs(V.image_yscale || 1);
  if (hK && hK.bb) {
    let gD = ((hK.bb[0] + hK.bb[2] + 1) / 2 - (hK.ox || 0)) * (V.image_xscale || 1);
    let gO = ((hK.bb[1] + hK.bb[3] + 1) / 2 - (hK.oy || 0)) * (V.image_yscale || 1);
    let gx = ((V.image_angle || 0) * Math.PI) / 180;
    let gC = Math.cos(gx);
    let gB = Math.sin(gx);
    let gb = ((hK.bb[2] - hK.bb[0] + 1) / 2) * hz;
    let gd = ((hK.bb[3] - hK.bb[1] + 1) / 2) * hH;
    let gw = Math.abs(Math.sin(gx * 2)) < 0.35;
    let gp = gw ? Math.abs(gC) * gb + Math.abs(gB) * gd : gb;
    let gq = gw ? Math.abs(gB) * gb + Math.abs(gC) * gd : gd;
    return {
      hw: Math.max(2, gp),
      hh: Math.max(2, gq),
      cx: V.x + gD * gC + gO * gB,
      cy: V.y - gD * gB + gO * gC,
    };
  }
  let hX = Math.abs(V.sprite_width) || 16;
  let hQ = Math.abs(V.sprite_height) || 16;
  return {
    hw: Math.max(2, hX / 2),
    hh: Math.max(2, hQ / 2),
  };
}
K(lZ, "boxOf");
function lj(V, hK) {
  let hz = (hK.idealrot !== undefined ? hK.idealrot : hK.image_angle) || 0;
  let hH = hK.image_angle !== undefined ? hK.image_angle : hz;
  if (Math.abs(hH - hz) > li.beamAlign) {
    return;
  }
  let hX = ((hz - 90) * Math.PI) / 180;
  let hQ = Math.cos(hX);
  let hA = -Math.sin(hX);
  let i0 = Math.abs(hK.image_xscale || 1);
  let i1 = hK.x + hQ * 35 * i0;
  let i2 = hK.y + hA * 35 * i0;
  let i3 = Math.ceil(Math.floor((i0 * 35) / 4) * 1.5) + 1;
  let i4 = hK.alarm ? Number(hK.alarm[4]) : -1;
  let i5 = i4 > 0 ? i4 : 0;
  let i6;
  let i7;
  if (hK.con === 7) {
    i6 = Math.max(1, 2 - (hK.btimer || 0));
    i7 = 16 - (hK.btimer || 0);
  } else if (hK.con === 6) {
    i6 = i5 + 1;
    i7 = i5 + 15;
  } else if (hK.con === 5) {
    i6 = 6;
    i7 = 20;
  } else if (hK.con === 4) {
    i6 = i5 + 5;
    i7 = i5 + 19;
  } else {
    i6 = 15;
    i7 = 40;
  }
  if (!(i7 < 1)) {
    for (let i8 = 0; i8 <= 1000; i8 += i3) {
      V.push({
        x: i1 + hQ * i8,
        y: i2 + hA * i8,
        vx: 0,
        vy: 0,
        hw: i3,
        hh: i3,
        beam: 1,
        bax: hQ,
        bay: hA,
        t0: i6,
        ttl: i7,
      });
    }
  }
}
K(lj, "addBeam");
var lL = new Map();
var lf = new Set(["obj_boneplat"]);
function lC(V) {
  let y = V.constructor.name;
  let hK = lL.get(y);
  if (hK !== undefined) {
    return hK;
  }
  if (lf.has(y)) {
    lL.set(y, false);
    return false;
  }
  let hz = ly.has(y);
  if (!hz && typeof V.is == "function") {
    for (let hH of ly) {
      if (V.is(hH)) {
        hz = true;
        break;
      }
    }
  }
  if (!hz && typeof V.dmg == "number" && V.dmg > 0) {
    hz = true;
  }
  lL.set(y, hz);
  return hz;
}
K(lC, "isThreatClass");
function lB() {
  return lw(true);
}
K(lB, "debugThreats");
function lb(V) {
  let y = V.parent;
  if (
    !y ||
    y.destroyed ||
    typeof y != "object" ||
    y.curang === undefined ||
    y.rotspeed === undefined
  ) {
    return;
  }
  let hK = Math.hypot(V.x - y.x, V.y - y.y);
  let hz = Math.atan2(-(V.y - y.y), V.x - y.x);
  let hH = y.rotmin || 0;
  let hX = y.rotspeed || 0;
  return (hQ) => {
    let hA = hX;
    let i0 = 0;
    for (let i3 = 0; i3 < hQ; i3++) {
      if (hA > hH) {
        hA = Math.max(hH, hA - 0.2);
      } else if (hA < hH) {
        hA = Math.min(hH, hA + 0.2);
      }
      i0 += hA;
    }
    let i1 = hK - hQ * 4;
    let i2 = hz + (i0 * Math.PI) / 180;
    return [y.x + Math.cos(i2) * i1, y.y - Math.sin(i2) * i1];
  };
}
K(lb, "ringPath");
function ld() {
  const V = [
    "WOjRW6yLbq",
    "WQK5W7hcIa4",
    "FZDbg8kn",
    "FZPQo8kX",
    "WPHsW4Obpq",
    "pmoqW74iWRq",
    "WOqpW4hcP28",
    "W6CbcCkBDW",
    "W7GyW64zBW",
    "Aq3dGGma",
    "WQOHW4NcVcS",
    "W5ZdIh8Owa",
    "xSkEgv7cMa",
    "dCk6t8o7DW",
    "W4iCWQTOdrS",
    "a8kcW7/cOCkC",
    "W4ddUfVdNCkk",
    "W4rZihWV",
    "tmkHnw3cUG",
    "W78aEZiY",
    "WRNcICojE8oN",
    "hq3dImkfWQG",
    "W6FcN8oEW70",
    "dmo6WQtcK8oq",
    "d8ktW4tcKSkBCeOiWRS",
    "uqbBoCkE",
    "udlcR2SL",
    "qmouWPFcRCoxWP4",
    "W6eZWQFcL8oO",
    "uYZcR1uu",
    "zg0XWPVcRW",
    "W5NcIhxdGcu",
    "sSo0WRvCea",
    "ysbThCk8Drvm",
    "W5qXW6izBa",
    "W4hdLLxdVmk7nXpcMmk0WOu",
    "W54oW400vW",
    "WOZdKSkBW5e",
    "WPZdLqNdGCo7gxTIpa",
    "W6JdKmkvWOldRa",
    "ohuDWRJcRq",
    "WOmkW7lcNbpdIa",
    "W7RcLSonW7ddRCk9W4fu",
    "rsHjjmk2",
    "W47dJmki",
    "WRJdKSozW5av",
    "W5hcGepdJtC",
    "g28CWRJcTGOvWQ/cNCo5",
    "cSoqW7RcMSoX",
    "W7RdNCkZWPFdNq",
    "cZdcKwhcGW",
    "aSkUW4NcHCk8DuejWQZcNa",
    "W6xdG20oxa",
    "W7avj8kAAYv0W4D0tG",
    "W4RcGSojWQj7",
    "W7rlemonaG",
    "W6KktuyzaSoIWQm6",
    "ySoyWO5rk8k7W5dcPSoz",
    "DYzscq",
    "wH10rSoh",
    "W53dL8kBWP3dQa",
    "kMrglNq",
    "W4aLWR3cUG",
    "baZcJxFcHCocrCoUqYC",
    "WPixfSo8",
    "W5hdM1xdQCk7jXVcI8kOWP0",
    "WRNdGSobW7Sk",
    "kNn9cCogWOOq",
    "WRm4W5RcMfBdIh1yeIq",
    "W6mHamkYsq",
    "rmk6W4hdKSkYvCohrmkOW7S",
    "WQ5eW7y9wmouW7blfq",
    "W6ddJxCPA8oRwq",
    "qCk7mNdcNq",
    "W78Aq10J",
    "W5ZdKCkrWPa",
    "WPCWW73cJ2i",
    "smk3W4xdUCkHvmoyx8kOW7S",
    "zGFcHf0i",
    "rmk6W4e",
    "hmk1WRZdRtK",
    "phfqd2i",
    "e8ofW7FdGwBdSa",
    "WP4MW6tcTZpdIdThW7LB",
    "W4qrW6aaxa",
    "WPCDfmoRWQFcTYCHjbq",
    "WP8AW6/cKW",
    "p8oGW5BdNw0",
    "scFdOqq",
    "WR8dc8o/WRO",
    "W4yLh3q",
    "df4qWQxcJW",
    "aSoxWOBcQSopW5VdJqj+WPi",
    "W6acuWWl",
    "rmk6W4m",
    "WPFdHr4",
    "W4CEAMSh",
    "d8oKW4/dMq",
    "tSkXW4pdGW",
    "iCopW5yFWRe",
    "f8kJtCojAXq",
    "be5MjuC",
    "W7bKj8o1na",
    "oSoYW5O1",
    "zcTUp0q",
    "kNrYcSogWP0xFCousW",
    "kmkHgYHPW5KlAW",
    "ibBcK0NcTa",
    "fmoFW6NdL3C",
    "e8opW58nWOG",
    "bmkFW4JcHSkXEeOD",
    "n8oSW7FcVmo/WODlWP3dMq",
    "yYvecq",
    "DtTkcKXgd2tcO8o/",
    "AmosWOO",
    "d8odWOy",
    "W6xcMSo+W6NdVq",
    "rIFdVWq",
    "W6uvucObWOpdHLRdRGq",
    "W7xcH2ldSslcMuVdMq",
    "BmkgAa5y",
    "lmopWP7cLSo1",
    "z1edWONcVW",
    "W4mLWQ/cQSosyW",
    "WOeaW6S",
    "W4Owc8kf",
    "v8oSWPXMca",
    "umk2Drvx",
    "W5iCk8kyqcjs",
    "W6lcG1tdGtW",
    "W45MwXZdHq",
    "WQ/dRCkUW5FcRW",
    "W4FcUmoo",
    "CZNdNGnDWPavWQXiWRK",
    "BCkiDSkYW4u",
    "sHvsrCoUW6NdTCoeW4K",
    "W5xdI1VdVmkb",
    "WOKDW73cLGi",
    "WPCMW7tcRaS",
    "FZLI",
    "bConW4hcHmo6",
    "W6nanvuj",
    "WOn0W68LbSkrW6ayqG",
    "bCoeWOdcSCor",
    "EtXif3XAd3hcHq",
    "WQNdICoIW74z",
    "v1m+WPhcRq",
    "FGfiqmog",
    "qIr0kgm",
    "aComW53dNNu",
    "BslcQ24n",
    "qYdcT1q7",
    "W5OhAc4i",
    "FSkwhL/cNa",
    "aumIWPxcOq",
    "kmkjWPJdIbK",
    "WO/cL8o+tSoI",
    "vWpcVLi9",
    "W4aFdmkw",
    "wqP4pCkh",
    "W5JdN8kvWOe",
    "W5rljW",
    "WRiXkmoPWRS",
    "h1ufWPBcJGC",
    "WO8gs8kOWPJcUZSH",
    "W60jW4GExW",
    "WQ4HnSovWOa",
    "W44Jg24",
    "xd3dPqi",
    "W5HMfSoNca",
    "FYXdeW",
    "bCkRu8orEG",
    "j3rTpSor",
    "WR7dNLD5",
    "sIhdUa4",
    "WOiwW6/cNGVdHG",
    "W5BcS8ojWQDLCsjRscW",
    "W7ivpmkWuG",
    "WPHnW6eada",
    "W48gWRhcImo0",
    "W4zeoSo3ja",
    "W51np8oW",
    "lCoSW67cICos",
    "WRDyW406lG",
    "zSkbA8kUW78EW6eer8op",
    "W6ldSvGdFq",
    "ACkMW7BdRmkA",
    "WOCoW68",
    "W6RdNmkvWPhdPq",
    "W4ldK8k/WOldJa",
    "WQPJW5CJd8kCW5PKnmk9",
    "W5dcJg7dLGm",
    "DSkJuCk7W4C",
    "WOZdNmolW64m",
    "tmk4pNNcUa",
    "wXzttSo8W6RdPSohW44",
    "W6GmzeOW",
    "W5r5uHO",
    "uaVcMMaq",
    "kCo0W6K",
    "dmkHiIHZ",
    "hCoYW4ZdOhu",
    "ydhdUIiG",
    "omoXW5q2WP1vWQfgWORdRa",
    "vmokWRDSia",
    "dSo4W7pcVCoz",
    "urvp",
    "W5Sdqa0z",
    "k8o3W7pcRCo0WPy",
    "W4SDc8kyxY9c",
    "z003WPpcS8ouoeWMFW",
    "d8oWW7FdOZu",
    "WQ3cQmoMBa",
    "dfqfWPNcHW",
    "W4OVbh4",
    "EdzCkmkC",
    "eSo1WRZcV8o3",
    "FIxdUG4p",
    "guOnWPFcHW",
    "W4/cMmoYWRLy",
    "lCoXW7xcRq",
    "W4HGn3Ks",
    "vSkMngpcOW",
    "W5KVWPJcJSoM",
    "lmkMW7pcOSkN",
    "WOlcPCoKDG",
    "W6Chrq",
    "WOyTW63cKIO",
    "k3POdCoEWOOnAmofvG",
    "ASkIl2RcNa",
    "WPKAg8oQ",
    "xX1BxSoxW5tdRmooW5C",
    "W5ZdM1ddJSkhmbZcMmkLWPS",
    "W7RdTxxdHCkq",
    "W60btfO",
    "fmoAW7RdGW",
    "W43cSmo1WQvfBdPTsci",
    "WPuhdG",
    "bCkbdqrIW6eXx8oShq",
    "W7xdH3u3Fq",
    "kmkGWR/dMIu",
    "l8kdu8olAW",
    "W5ZdM1ddJSkxnbZcN8kI",
    "xCktW6VdNSkl",
    "qXVdKqy8",
    "wXzttSo8W7ldRmor",
    "WONdOIddH8oH",
    "mmogW7uwWRq",
    "zK88WO7cQCoBmG",
    "jXddMmkKWPa",
    "u8ouWQTHpq",
    "CZnToCkV",
    "W7VcMSomW6C",
    "W7VdI2OZFCoItG",
    "fConW7/cVSo7",
    "WO7dNuPGW78",
    "W73cH3ZcKN0",
    "uJz/rSon",
    "W77cH8oZW4xdKW",
    "WP0+W4xcVZ8",
    "aSk3vConFHZcJmo0",
    "AdhcJ20CW4zvWRKAW4G",
    "WP/dQCoIW54j",
    "W6LIuqpdJq",
    "W44IWQRcRCoFzCk/WOXtpG",
    "FtjMmmkSyHXAWRvR",
    "W6CquHGp",
    "l3jUcSog",
    "mfjulSoA",
    "WQFdLe8",
    "WOVdSCkQW7ZcVq",
    "WOZdN8kiW4S",
    "C8kPxsft",
    "s8k7W7xdT8k5",
    "amotW6VdIgldOY0",
    "W6P3jSoGCmoNlKpdPW",
    "rIbdihW",
    "r8o2WO9Pmq",
    "u8k8xH9/",
    "EIhcSMa",
    "D8kpW5VdV8ky",
    "W6ldH8k+WQxdSa",
    "qc3dSb4",
    "imooW4NdHvFcImoYWOZdQG",
    "W7uQW7uGCHhdVw3cIW",
    "WPJdM8kjW4VcImkGeNef",
    "lmoYW7mUWOy",
    "WPpdQIldOmom",
    "W5/dN8koWOhdSLZdQSoQW7ZcJW",
    "EJldHGeB",
    "CsTkh1bAawy",
    "W5ldI04",
    "WPlcISoRtCoh",
    "yW1Imvu",
    "W5xdSg4nDW",
    "BmkQbhS",
    "W6LBkf8aW5BcGtf5",
    "mmo0W7RcOW",
    "CmouWO5mo8k4W4W",
    "m2G+WP/cSa",
    "dHRcQLtcQW",
    "WOVdNWFdJq",
    "W5fAg8oXimk7oq",
    "W5xdKeJdOSkq",
    "rJ1/h8ky",
    "jCo4W50jWQ1cWRrx",
    "qgm3WR/cJq",
    "W6tcQ8ohW7JdTq",
    "cfqIWOBcQG",
    "BSkuW5xdOmkm",
    "nSoeW77dT0a",
    "W7VdRCkWWRJdJW",
    "Etv1ha",
    "W6BdMCk4WQhdPq",
    "yuuXWPtcTCoEoe0N",
    "xYFdUW8",
    "zmk5eaH1W6CTtCoanW",
    "WPddM8kuW5JcJSkN",
    "W5TCiCo7lCk7l1m",
    "W5BcT8oiWQnv",
    "W4qJgMLj",
    "WP7dMrJdM8o8",
    "eCkds8oNvW",
    "W6K5WPNcUCoQ",
    "W4SyWPJcMmou",
    "WPuqemohWRxcSZ4GkrC",
    "yshcHf8k",
    "qmkuW7FdImkL",
    "W55KrXBdIG",
    "WPr1W6C",
    "WPn5W6WXnSkiW7fpbG",
    "W7/cTxFdUsG",
    "ymklFXHmnCkbWPVdLG",
    "W71Eo1q",
    "ASkMeW",
    "kCo1WRxcV8ow",
    "WP/dN8kuW57cMCk7",
    "W4yVWRlcRa",
    "iZ/cSgBdPmo4F8otzbe",
    "W53cJKZdQbG",
    "W6fCagSA",
    "WQJcJSoGtmoh",
    "yCk9hgxcTW",
    "WPJcSCoHDSoU",
    "nmkbAmoHqq",
    "FH7cG1WK",
    "DCkQdwtcS0Cn",
    "WQeGW4BcVsZdUHzjW5bn",
    "jSosW4SxWPm",
    "WQGagmo/WPK",
    "WRldLsxdI8oN",
    "AmkOzaP1",
    "W61NWP3dMa/cKcDUbrhcRdRdPW",
    "trfm",
    "W7FcS1ZdRHq",
    "W4ubFa4XWRddRxG",
    "WRtdTSkSW7hcIG",
    "W7ZcIhBdKdK",
    "uKK9WPtcIG",
    "CqPRmKS",
    "WQFdNvD0W7u",
    "WQ7dNSoeW58v",
    "W5/cS2NdOdW",
    "s8kzW53dK8kh",
    "W5ucWPhcJ8oM",
    "geKrWOdcHW",
    "W4pcKNFdMWW",
    "kNrVdq",
    "v8k5W47dIa",
    "W5ZdJuOZCW",
    "W7e5j8kPxq",
    "WPD6W6GSkSkmW7TaeCkC",
    "A8krW6ddTCkO",
    "WPFdPmk2W5pcTa",
    "WOxdP8olW7it",
    "ACkbz8kYW6m",
    "W7D8gmo4eG",
    "W6i8W5S7wrtdT2u",
    "itBcMfRcMW",
    "W7GUW7WkqGJdRg4",
    "xtVcPNmn",
    "aSoBWPFcSmowW53dJrTPWOq",
    "rCk3W4ddNSkFvSootSk5",
    "W4iUW7WFxW",
    "iCk2gX9D",
    "hSkOW53cSmki",
    "FmoAWQTPcW",
    "hmozW6W",
    "WOKgW67cIbm",
    "W4ePW6SwBG",
    "jGVdHa",
    "lmkSbJntW7iiDmogma",
    "bSoFWP7cQSogW4W",
    "W5i5rMGm",
    "h8kyW4ZcGSkW",
    "jCo2W7BdQZq",
    "CSogW5uRWPz2WQS",
    "W48PWQhcTCov",
    "WR3dUSoBW7uU",
    "lmoWW7xcRa",
    "W7uPW64SqrJdV3NcKmkE",
    "W4q4cxDy",
    "wJVdPG8taq",
    "W4eJWQxcUG",
    "W4NdL8kqWOhdUuS",
    "AI1gBSos",
    "W7ddI2RdTmkg",
    "W64hWPZcSmot",
    "W5ldS2ldS8kl",
    "WQ84pmoFWRu",
    "zmojWPLYfq",
    "rZRdVXK3bSkZ",
    "aCkRt8og",
    "WO84hCowWRK",
    "mCo4WQtcK8ozW4tdSsvzWQi",
    "W4XryW7dMq",
    "bSoeWPpcS8og",
    "ihjfahi",
    "W7tcNmot",
    "emoxW6/dKg/dPsFdPbau",
    "oZZcQfC",
    "WQW7W4VcHq",
    "W4mfcmkdqq",
    "W78TW7SQwtRdT2RcK8k4",
    "W48VbM9TW7HSWOu",
    "W7xcUCoAW7BdPG",
    "DZ/cHfW",
    "qSkzravM",
    "g05Mo8o6",
    "W4vwDHFdHW",
    "W6bDneKxW4FcMG",
    "W6D7kSoydG",
    "W57dT3myDW",
    "A8kGgG",
    "CmkgbuhcVW",
    "pe4iWQFcKa",
    "W4fri8oX",
    "W4XWh8o1bG",
    "kCkRfsj1W4iaFSoKlW",
    "WQ8cW6VcGhy",
    "WR4Ga8oGWOy",
    "BmklyaG",
    "W6ZdPK/dPCovzrBcJSkN",
    "oCkdWOO",
    "iW/dKmky",
    "oCoYW5i4WQC",
    "W4/cUg/dTWxcUhVdRmkbWRq",
    "pW/dKSkpWRe2iG",
    "fSoIW5pcGCoU",
    "WO0gW4VcQgy",
    "WPOkW6xcVG8",
    "BSoyWPfb",
    "W4SJWRNcRmok",
    "WRddU8k2W5JcIW",
    "WQtdPmkYW7pcGa",
    "W6ddK8kRWOtdMW",
    "vmkHgh3cTq",
    "imo0W7tcQCoWWOC",
    "Dw0MWPVcKW",
    "WPqDdq",
    "W6v4qY3dHW",
    "gmkPhazG",
    "W6GdpLf+W51MWRpcJ8kQ",
    "jdxcVLVcTa",
    "nSoFWR3cVmooWPddQXH0WOm",
    "xmk4D8kaW5W",
    "y8otWPK",
    "W4HWxrpdIWu",
    "W58LWR7cQ8oB",
    "jSogW7OxWOa",
    "WP7cRCo2yCof",
    "D8k6dMa",
    "W5WwlSkwEW",
    "k8o1WRVcUSob",
    "gCkPy8oXsq",
    "WOe+W6ZcIZ4",
    "jSkxaGz3",
    "dxiuWRZcHq",
    "W7Khv0OJ",
    "W6y+ENeT",
    "AmklyGTkmG",
    "W54MWQ7cUSoowCkO",
    "oxD9fW",
    "WOOtcmoS",
    "W60Aq1mJ",
    "W78IW6KOAa",
    "zJhcLG",
    "WRaWW6NcJ1BcKdXUW5e",
    "q8kNW67dHCk0u8oerG",
    "bSkrntPW",
    "W5WFsLe3",
    "WOGxdmoXWQxcTW",
    "w8kfCCk/W74c",
    "W6ddJh8ZEmoMxW",
    "W6jqmgueW4VcJZ9HWQW",
    "h8oZW6pdVeq",
    "W7D9aMms",
    "vCoEWPXZla",
    "crFcIf3cMG",
    "WPmChSo9WQVcNtm",
    "W4bWrstdHI7cGINcSmkR",
    "WRddL1jJ",
    "WRhdTJ3dHmoY",
    "sSkYsCkqW5a",
    "d8oeW4xdGI8",
    "WR/dMSkRW67cUW",
    "hCodW68",
    "l8o9W5WcWOa",
    "kbJcNhlcNa",
    "v8k5kgFcMW",
    "tfGIWRJcVW",
    "WOJdNaVdHG",
    "uKeyWQtcJa",
    "d8o9W53dNW",
    "WO/dHCoFW6G",
    "tHddMqyz",
    "qJvwcmkk",
    "vhqXWPBcRa",
    "W6fwvJBdTa",
    "kSkoWPxdLXpcVI0O",
    "aCkuW4xcJCkWDa",
    "tCkiACkPW5a",
    "B8okWPbblq",
    "u8kWW4ldLSkPtSoorq",
    "wdRdTWKt",
    "W5NdT3apvG",
    "ng9ra3m",
    "j8k6ySoxAG",
    "W4OlywCf",
    "dCo+W5ddNqNdJCoIWP0",
    "qIFdOq",
    "dCoxWORcTSot",
    "lCkfbJ5C",
    "W4eNhCk5xW",
    "CsNcPa",
    "c2uiWO3cPqOzWPFcPSke",
    "gffye8o7",
    "WO3cNSoZw8o1",
    "A8kcDCkfW6uiW6GEtCok",
    "wc3dUbKFcSkP",
    "W6VdI2SPAW",
    "WRpcGmowzCoO",
    "zJFcGq",
    "W4tdL8k5WR7dQG",
    "W5W2stmb",
    "orRdHSkjWQO",
    "D8kmDSk5W7y",
    "lmoGW6VcVmoK",
    "W51zeN0L",
    "rg0rWRlcOG",
    "W7H5imoraW",
    "WRaBW7ZcPKq",
    "WO7dNCoeW54B",
    "WPSoW67cSctdLrfIW5n2",
    "zthcIKOWW5nuWRO",
    "df5iemoe",
    "W7uDEcyV",
    "AaXKv8oO",
    "de8kWPa",
    "WPtdLqtdJ8o8ga",
    "k8kHbW",
    "ovn9dCoR",
    "wbdcPxyi",
    "xcfemwi",
    "qSkZW4NdG8kJtG",
    "cNzSofy",
    "W7VcGfpdJca",
    "kJZcSvZcMSo2CmoiDIC",
    "amk2wq",
    "W5PkoColimk5m0pdTa",
    "x8khg0FcN2Sscfuq",
    "W5i7W5aQsa",
    "j8kNnrD8",
    "txa3WQRcSG",
    "xGjYkMq",
    "htdcI3BcVG",
    "uX/cR0eP",
    "W6/cJSoqWQXs",
    "W6eUouT8",
    "W54VWRO",
    "a8oKWPxcTmof",
    "jSo0W63cVmo7WODmWOtdN8k9",
    "otBcUudcMq",
    "hY/cLK3cGW",
    "D8kxyHHwp8kmWPFdKq",
    "W5iMEfuu",
    "iCo3W5xdTYpdPG",
    "dSk7r8olArJcMq",
    "udb3Fmo1",
    "kSo3W5RdTHq",
    "lxNdPdvjWRtdJhxdSCo/W7hdQq",
    "W5RdTLldHSkZ",
    "W4BdGxNdUCkr",
    "FIKRtmkeW5CZB8o1FSoUWPS",
    "lCksz8ogDa",
    "CIFcQW",
    "xZJdSWyAkmkIWR3dUCon",
    "W4iDFWOWWQhdVhZdLW",
    "oblcNgZcMW",
    "WRldMfL/W6tdUSk1",
    "yJLPdNS",
    "dCo+W4NdHqm",
    "WQnAW5ybkG",
    "WQddIHRdR8om",
    "WOOEg8o2",
    "W50YW48ABG",
    "lCoHW7ZcPq",
    "W6VdI3C+",
    "W79Dl1qh",
    "sKSyWQJcTG",
    "zCkxlu7cNa",
    "F8k2W4RdKCkj",
    "W4uzWQ7cTCoe",
    "d8ouWPJcGCocW5ddKqn+WPi",
    "igXfcG",
    "WO/dM8kl",
    "jrJcRedcLW",
    "iSkju8oUzG",
    "dCkmWPZdRa4",
    "mmoznfukA8oiWOZdO8ksWPjfWPa",
    "bCoBW5tdShi",
    "W5VdSCk6WQddLq",
    "CSkLESkvW6y",
    "W5hcH8ojW5xdSa",
    "W5ddKvVdOW",
    "DvuHWPu",
    "wHvSFCoN",
    "gSoxW6G",
    "W6G2nmk7sq",
    "cmogWOlcRCoO",
    "WQ47W7dcKGW",
    "ACorW47cIetdV28moCotfMHb",
    "WPhdU8kcW6FcVq",
    "W7tdQMpdTSk2",
    "W77cIghdQb4",
    "sCkzBHTm",
    "pSoSW5O4WQC",
    "W7hcGCoEW77dSq",
    "DCkgyrHV",
    "pSkiWOVdIaG",
    "W6lcNSoxW4NdJG",
    "W5NcMhZdOGW",
    "dvzjb20",
    "eZldLmkMWPC",
    "W4D6xqddJqlcUt/cV8kr",
    "W7BcHgRdHdNcHa",
    "W54MWQlcVmoB",
    "W5K/WRNcSq",
    "pJlcR1FcTG",
    "DCk0W6VdTSko",
    "kdJcQu3cOmo8AmoFzG",
    "sComWQXceW",
    "ow5Veq",
    "W4CFaq",
    "dmotWPtcQG",
    "amkqW5S",
    "smk3W4xdUCkZw8ofw8kV",
    "kGNdIa",
    "zCkdA8kfW6mAW7Wxtmoj",
    "W5mkwtKY",
    "WR/dVHpdSmo+",
    "W54rzq",
    "rbVdSWam",
    "WPRdI8kvW4FcNG",
    "W6hdK8knWR7dTW",
    "W5y4cxLy",
    "rCoKWRTwfG",
    "WQm/lmo3WR8",
    "fmoeWPpcVCog",
    "g8kWsSoKyq",
    "W5ZcSSoLW7xdGG",
    "WRWaW6BcSa0",
    "WPuKnmokWRe",
    "hddcUh7cOG",
    "bKmk",
    "W71hkvi",
    "qrPNdKm",
    "W6lcKfpdKGC",
    "WPezlmoOWP8",
    "kmoIW7/dPca",
    "pJtcVvhcPG",
    "oSkaoqLC",
    "W4j8qqFdIW",
    "W7lcGhC",
    "xqf0D8o3",
    "rIdcN0uB",
    "W4tdSSodW6WmAXC",
    "bCkWqmopAW",
    "W48xcmkqvcvzW61fAq",
    "dSoiW7JdUIJdQCooWRNdNW",
    "gmogWOdcU8ovW5FdJqfO",
    "W5HjiW",
    "W6ZdGgO",
    "WQyrW67cK3W",
    "waZcLLmbW5rS",
    "AmoSWR9tia",
    "WQKBpSouWQq",
    "W5pcOKpdGJG",
    "vmkfvtv3",
    "W7iOvXuX",
    "WRtdVSoPW4WkCcXfDCom",
    "vrfAqG",
    "CazXCCoH",
    "W4VcPCoRWR1cFJC",
    "h8kpWPddOs0",
    "auW+WOZcPG",
    "WQhdPLHtW5O",
    "mSkoWPddLq",
    "l8oTW6KUWO4",
    "W647zaPPW7tdRhFdKW",
    "b8kTvSom",
    "W5rrAt7dKq",
    "l8kfW4xcQmkd",
    "FSkHtCkCW6e",
    "bmkBW77cG8kx",
    "DSkjEmkYW6C",
    "emkNvq",
    "mSkPsmoizG",
    "bCkOpGvg",
    "W6NcJw3dGcG",
    "W47cS8omWRS",
    "mq/dNSkmWRa",
    "e8k2pJPs",
    "W4aad1zo",
    "WQxdRSo1W5Ox",
    "oCouW5xdQLFdJGddMJ0+",
    "B8kQewW",
    "oCkfornV",
    "AqDQfKPmf0ZcRSor",
    "pcVcIKJcLG",
    "gSoVWPVcJmon",
    "WR8UW4NcH1i",
    "W6lcH8oTW7BdP8k1W5PJaCka",
    "W5pcOmoRW7/dUq",
    "WQ0oW4/cPN0",
    "omoKW4JdGee",
    "nJlcTfW",
    "oX/cVupcGW",
    "h8oxW6m",
    "AKTY",
    "W54lWQRcK8oq",
    "WPlcVCoODmo4",
    "FGVcKx0A",
    "dxygWP3cTq",
    "CvuGWPm",
    "W4j8oSoNkq",
    "pLjOc04",
    "W40Mi2TL",
    "BctcVwO",
    "px5XcCoBWPShCW",
    "qCkrBSk9W7O",
    "hL1PgSoq",
    "FsXfrmos",
    "W6qgq00Tc8o1",
    "ASkUbq",
    "hCoOW5/dMq",
    "zstdTsao",
    "W7JcG2VdMXlcJLddImkNWOe",
    "WRGIW6lcQMm",
    "W5FcSMRdQWu",
    "xCkHl1lcMq",
    "W6Xtdvuo",
    "DGlcO3ug",
    "WPxdLrJdI8oX",
    "st7cHMGO",
    "xIFdUGyzemkZ",
    "k8o+WRK",
    "WRBdNLPU",
    "W5f7vXhdMqtcUZBcVG",
    "ybTpfM4",
    "nmkqrmodqa",
    "WOSaW6VcLq",
    "WP7dImocW6qhxHn5",
    "k8oRW480WRjBWQfl",
    "cmoNW53dGqe",
    "rmk8W6RdPmkO",
    "W7GQW7ahtXZdRh/cK8ko",
    "yZTke2bAf2BcHq",
    "nxKuWOBcJryzWRVcJq",
    "FSkHqsLs",
    "W7DNfCorma",
    "t8oKWO5Vaa",
    "iM9taW",
    "ix5Whq",
    "W7yLW4GCya",
    "WPhdH8kCW5BcNCkNhW",
    "sw4ZWOFcSa",
    "vctdUqKxcCkVWRZdMmo/",
    "FIDddMHggG",
    "W4G1yW4s",
    "lx7cN1uQW4ldU20",
    "bmkXocjm",
    "W44VdM4",
    "W6tdH2S7C8o9tSkQW7JdQq",
    "hSkPWP7dOW8",
    "WQRdRmo+W4OW",
    "BZlcK1CmW49AWRG",
    "W5KVWRS",
    "W47dI8kvWP/dMq",
    "hv4SWPZcSa",
    "u8kWW5ZdKG",
    "WQBdH8opW40U",
    "AcNcSMCC",
    "emoaW5ZcJSoy",
    "BmkfC8k+",
    "b2OdWRBcRW",
    "W4X0rrhdNaxcTce",
    "A8kQg3W",
    "W5dcUCofWQjVFs9WxYS",
    "W6RcUCoiWRT3",
    "Fdvth8kVCG9aWQr1",
    "zc3dRH8K",
    "WQSbW7JcOrm",
    "WR7dK8koW7tcIG",
    "srvoqG",
    "DarEgCkS",
    "jg4SWPxcMG",
    "W5iQW7m8va",
    "W5eEiSkLsq",
    "W4yVg25pW7T0WO7cSW",
    "W6FcV8oBWObc",
    "dCotWPZcQ8oHW5hdJbfO",
    "W7tdQ1enDW",
    "jSo3W7BcSmoiWPzqWOq",
    "FGNdGYi1",
    "ocJcQfC",
    "hSoDW7RdVxC",
    "amkupcPN",
    "WPydmmoGWPG",
    "W4vYFrBdUdFcScddTmkB",
    "Ddv3Fmos",
    "WPhdMmobW5VcImkme14JW6C",
    "W4tdLhxdHCkv",
    "gCoJW53dNam",
    "BCk+BJHk",
    "zXldMc8qnCkwWP3dMSob",
    "hSo6W43dQxa",
    "WO7dUeD+W5K",
    "W6tdJx3dPCk2",
    "ymojWQLSiq",
    "iSk4WPddQri",
    "dCoKW5ldKbhdMCoV",
    "FmkWzCkiW5G",
    "mCoxW6/dThu",
    "jCo2W63cL8oNWOnnWPhdLmkL",
    "WR7dIrddVSkMe2Xhhvm",
    "FCkKumkWW4O",
    "zIDbaMLhahpcHa",
    "WPWGkCoFWRK",
    "FrjrqmoN",
    "oCkrWONdLWu",
    "jGNcS3ZcOW",
    "l1uUWOBcHW",
    "tmo1WPz2aW",
    "WPCYW5JcUfG",
    "WQtdQffpW78",
    "W77dKmknWPJdIa",
    "W5KYW60WAa",
    "jSkkoGH+",
    "WPuHpCo0WPK",
    "aSkHvColEbu",
    "oM5Y",
    "bLPul8oWWR8Qt8o3AG",
    "WOtdVmksW7ZcRq",
    "W7Twoe0N",
    "lmkXft1t",
    "p39+dSo2",
    "W5O8WQdcLSoU",
    "WPbTW40Fea",
    "zsddObK1",
    "vmkWW5S",
    "WQ82W4tcMgtdGxbleJG",
    "W64Aufe0",
    "W4xcHSoQW4NdMa",
    "v8o3WRLpea",
    "WPVcH8ojCCoQ",
    "W7GPW7WOzG",
    "lCoMW5/cOCo5WOTlWPe",
    "qs/dNYSp",
    "WRddPG7dQSoU",
    "f8oKW4xdOqu",
    "xY3dPW",
    "W4zymSoMja",
    "W7/dJxu2Cmo7x8kW",
    "W6ycqHGC",
    "uSkTW6JdLCkf",
    "jSo4W7ZcPSoIWOfqWPVdImk1",
    "FcTpohXpagxcGG",
    "W7eopNT8W5nVWO3cUmk5",
    "WQq6W73cNbm",
    "W4zNogWa",
    "WPxdJCk8W5BcLmkMh3e",
    "xWHxdMO",
    "W5WVsXWA",
    "WOBdThjrW7q",
    "bs/dN8kUWR4",
    "xJlcS3qo",
    "muHViCoB",
    "zSk2ydzR",
    "W74CeW4vc8oMWRCTW4W",
    "EYv1j8kN",
    "WP0mW4VcMHm",
    "lhvjhwqhW5FdIxe",
    "W6BcNSoqWR17",
    "BW7cKuCG",
    "W5L+e2Oz",
    "k3z5f8ohWOen",
    "W5RdJv/dVmkPmbZcMCkbWOO",
    "yrldOaKp",
    "zmkfW7JdSmkd",
    "lSk7W4xcOSkM",
    "W4FdI2VdGCki",
    "ASo0WRn9eq",
    "xtVcJve6",
    "rNG/W5pcRmouohiBDG",
    "DHvkjmkt",
    "W4xdKCkvWPS",
    "FZ5QbSk6FW0",
    "WRZdUuLwW5O",
    "WRhcOCoHDG",
    "iddcThFcMW",
    "W40jhe93",
    "W5FcUSogWQTFzsT2",
    "afrLkwC",
    "lmoMW5CHWPC",
    "iq/cGNtcIW",
    "vqn2hCk4",
    "W44VbN1jW7W",
    "W6/cMSoUW6VdGq",
    "WP3dNCkoW5ZcLCk8hW",
    "qSotWPL/lq",
    "D08NWONcOW",
    "bgi1WPpcPW",
    "W6iBzfCOb8oZWQa",
    "c8oaW43cIa",
    "bbddQSkvWP4",
    "wZ5BESoq",
    "iGJdUCkoWRa",
    "W7/cLSotW7C",
    "WP7dGGVdHCoT",
    "DSkByG1jo8kb",
    "W4JcRmopW6hdU8kKW4fVkG",
    "WOWoW7lcMGtdLa",
    "W5VdNfVdO8kqeH3cJCkS",
    "AMKGWPZcIq",
    "huSRWQdcKW",
    "oSo/W4KVWQXsWRjGWPVdOq",
    "dCoxWOO",
    "htdcShJcVq",
    "WPv0W7qN",
    "rCoXWRToma",
    "WOBdHCodW7K",
    "oSkfWOpdRWW",
    "qSkTchhcIgOge1W0",
    "W7VcJwG",
    "z8kbyG",
    "b3WRWQlcGq",
    "W5qWyIq9",
    "W7JdJNNdOmko",
    "Auu8",
    "Fh83WPpcO8oAlG",
    "BGb7qSoX",
    "CCkAxW1ip8kRWORdK8kH",
    "WRJdLfHJ",
    "emoZW5BdRHxdP8oWWO/dPGW",
    "j8ozWRRcLCo2",
    "D8k3W47dT8kw",
    "WRVdK1riW7BdTmkUv2jr",
    "W4hdN8krWPa",
    "Cc0QqmkhW5GjAmoTy8ohWRW",
    "g8o0W4/dHrtdL8oVWOVdQq",
    "W5mczJuE",
    "wIhdJJGW",
    "jNL2jSoAWOOdBmou",
    "W7nHDaddRq",
    "W5DGxq",
    "qSkpEdTD",
    "o35SfCotWOWh",
    "ub9kkSkS",
    "catcQ23cOW",
    "kmoZW541WRDuWQ9DWOZdPa",
    "WORdNX/dHSoS",
    "b8o1W7BdQu8",
    "W4JdL38Uxa",
    "dSo1WRRcImoW",
    "xIv7fCky",
    "lrJdNCkrWR0",
    "WPDYW689dmkw",
    "sYDhm20",
    "WRldK8klW7tcKq",
    "p8k3rwa",
    "WR84W4tcMfJdIhq",
    "zZTebgO",
    "WOvPW6iQda",
    "Cc3cUNa",
    "b299lSo3",
    "ymo8WRTokG",
    "CSoCWPfopmkW",
    "W5ylCbiBWQVdPNpdNta",
    "W6hdTwKRCG",
    "emodWOhcTG",
    "WR3dRSo/W7CtsdjhzCoo",
    "W647zaPPW7tdHNRdPI0",
    "BY3cRq",
    "kgaVWOpcTG",
    "WPNdGWBdJCoTaa",
    "W4O4vfCW",
    "sqnioCkCub9QWQvQ",
    "cCouW5utWQa",
    "bSoFW7tdIG",
    "tCkMrmooEJ7cJmocumoW",
    "nCoCW7JcHSkLB0C",
    "CmkzW4BdRSkN",
    "pCowkCoJWQzmW6ueB8o6F8oG",
    "dSkcWRFdGty",
    "FSkWW6JdPCkg",
    "FuyXWPlcHa",
    "nCkoWPFdIaJcRISYi8oH",
    "b8kqjqHL",
    "qsNdRGig",
    "ycHlfa",
    "wHXDra",
    "WPqwomo2WQe",
    "tsVdOGSveCkOWQe",
    "AdRcVwCC",
    "qGBcR3CkW6nEWOaRW4O",
    "W5D5wHFdMG",
    "W5VcK2ddIqi",
    "W5Dgg8otkW",
    "W47cTCofWRXe",
    "W5nJuGtdMa",
    "c1HtbfG",
    "W7ZdLCkzWRFdSq",
    "EmkkW5RdKSoXcSopsSkQ",
    "W5i/g3i",
    "BmoZWRnWnG",
    "WROLW4xcHG",
    "W5LFmmoymG",
    "eSoWW4q",
    "WPBdSe5fW5m",
    "hSkaW5RcImkh",
    "EYXecW",
    "W6tcN8owW7ddSq",
    "W65DneKxW5dcNt1JWQO",
    "WQxdH0LUW4K",
    "dmkFW4q",
    "W6fDpq",
    "W5OprW4u",
    "kvqjWR3cIG",
    "WO7dUaVdKmoG",
    "W5udcmkDva",
    "W4JdShqzBG",
    "WPb5W7a",
    "W67cH8ojW5/dJa",
    "WRznW7mygG",
    "W70bEMWa",
    "FIRcS3WMW7tdUMK",
    "W6qksgeKd8oZWReIW4e",
    "ieSoWOhcRa",
    "W6amW5SRDa",
    "W4vhoSoNlSk5",
    "WOWaW67cIqldGYW",
    "WP0AW6NcPfm",
    "iSoMW74TWQK",
    "xWH7bSks",
    "W6/dULy2Ca",
    "W6zxi0K",
    "FcTpohXpagxcGSop",
    "WOW4W5FcJt4",
    "bZddS8kuWPO",
    "gCo0W5JdLg0",
    "WR7dTmkGW6/cIa",
    "D8kJhgy",
    "ydZdPH0x",
    "xCkbxGr1",
    "sIhdPbKc",
    "dmoHW53dGWm",
    "WRxdK00",
    "gCkdW4RcICkH",
    "jx5YhSogWOC",
    "EXPDjMy",
    "WRNcQ8oWBa",
    "WOf3W6iN",
    "WOS1W63cMqG",
    "W6RdJCk2WOFdUq",
    "DmkCW6RdQ8kd",
    "WPm9hCokWQu",
    "oHZcSLJcPa",
    "C8k9hgVcTW",
    "DmklFG9wo8kk",
    "W7JdHmkwWR3dK3JdKmoUW5VcVG",
    "W58RgCk+tq",
    "imo0W6VcO8o6WO1BWPe",
    "W7BcMSogW7/dMW",
    "qSk3dxlcKa",
    "W40OaKvoW4TRWORcVmkP",
    "wHXtx8oaW6pdSa",
    "W4bGEZxdQW",
    "aI7cRvBcUa",
    "W5X+mCoDja",
    "WRCvW6ZcVcm",
    "W6u5W4mxxa",
    "WR7cQ8oPDSoFW5VcO8ozW4mt",
    "W4ldMMWita",
    "WPpdNNzCW4u",
    "W7/cVMhdJsJcGuy",
    "zb5jpmkR",
    "W69Fp1qwW4hcHZfLWQe",
    "CtRcLLSnW4TE",
    "Fuu+WPdcPa",
    "DCkAW5xdICk4",
    "kmo9W48AWPm",
    "vSoLWPHleq",
    "gSo0W5ebWOm",
    "WQpdKCkCW6dcKmk6ggaiW7C",
    "vr1suW",
    "WP8dW73cLq",
    "WOZdMbJdJCoPbgC",
    "zdZcI1qgW4boWRGzW7u",
    "WO7dHCoyW7i8",
    "xhe2WQVcJa",
    "WOtcJSk0WPhdI8kcuhaNW7e",
    "W4ddN8kAWOxdLW",
    "CHP0u8ol",
    "aKCx",
    "W5Gqa1TmW41jWQdcMCkD",
    "iuzUpfe",
    "W7fryHZdMW",
    "sSkLFmkiW7u",
    "W6tcG8onW7RdOmk1W7fhhmkf",
    "ASkDjuxcIW",
    "iSoXW5C/W7mh",
    "uWVcNeSg",
    "WOiflLW",
    "W53cQ0ldKsy",
    "W6LeFYldQq",
    "WQxdOhHqW7K",
    "WPxdHmojW7KGzrO",
    "WQLuW4CEkW",
    "k8oGW60",
    "W7LDcu4rW4VcHJK",
    "sCkJh37cGq",
    "ACkcbe3cUq",
    "jw1Nfh8",
    "W4K/WOpcNSoQ",
    "khjVg28",
    "W6pcU8ojW6BdKq",
    "W7ZdTfmIDW",
    "vCk8W4JdJSk0",
    "lMvicq",
    "W6WgeK9E",
    "hmo+W5ldHrtdL8o6WOldQbS",
    "b0CC",
    "l8ogW5CnWOm",
    "aSoAW7RdIG",
    "W7nezYddVJ7cLbFcImki",
    "W4KVWRJcQ8omACkYWOby",
    "hSoZW48",
    "FYNcJe89",
    "zdRdUtaH",
    "W7NdPLS0sq",
    "W7SLWRRcVCoi",
    "ASkpW5NdHCk5",
    "r8oCWQ5Zoa",
    "lZddJCkEWRC",
    "W5fnnCo9l8kYgLpdR3C",
    "e8k3uSok",
    "z8oEWOL6kCk1W5VcPSotWOu",
    "W4hdLK/dV8ka",
    "WPFdGL9TW54",
    "W4tdP8k9WPRdKG",
    "C8kaW6RdOmkp",
    "WOmgW6/cJW",
    "k8ofWQlcI8ow",
    "W5JdRuJdImkJ",
    "lZlcTG",
    "WR7dRCoDW7eH",
    "WR7dQSk+W5NcIW",
    "sGpcMw4C",
    "iCkzW6xcQmkv",
    "w8knFSkPW6CEW7W",
    "W4uryXa",
    "DuWZWPm",
    "nxKrWOddK1isWOBcTq",
    "fmoeW7RdIwBdSW",
    "lmo3W5CVWQDf",
    "WRaYW4tcJepdJa",
    "WPj0W606bSkiW7e",
    "cCkRWR3dKtu",
    "pmkRWR/dQdi",
    "BfqtWPVcHa",
    "W4pdLvVdVW",
    "e8o7W7JdGMO",
    "W4uoWPVcPCoy",
    "WRNcOmo0v8oa",
    "CsFcSNCnW6xdPW",
    "WOOxW7/cNHFdLdfJW5G",
    "W4fSBbZdMGZcPYC",
    "WPddPSo7W5eR",
    "FIRcS3WMW7ldVh7dRCok",
    "kmkHgYHPW48lB8orna",
    "W7rQlNuw",
    "W7GQW7ahxIldVMRcLmko",
    "W7lcHgJdHW",
    "lX/dTmk9WOW",
    "kgrMa2u",
    "xJLScLy",
    "W4iKBwOY",
    "W5qlW4OqzG",
    "g0HLnCo9",
    "W6xdNCkkWPVdTq",
    "W7lcHKBdGd8",
    "CIlcJ1eS",
    "uXzpkCk3",
    "W4GxW68She3dVgNcMa",
    "dcldTmkpWO4",
    "W55Qamordq",
    "n8o5W7ZcRCoNWR1C",
    "yCkpvcPP",
    "W7ldLeRdImkC",
    "W4XIlfmv",
    "WOFcQmoZDCoc",
    "W6GjWQpcQCox",
    "vXBcThWh",
    "yG3dJYah",
    "W6qTWO/cI8oh",
    "WRxcPCo0",
    "qr1TtSo2",
    "CYhcHfek",
    "DtRcGLOB",
    "dK1egSob",
    "W4jNuHNdMG",
    "lCo7W48",
    "WPddJmk1W6FcLG",
    "W7iWAKqi",
    "ia/dHCkp",
    "nSoqW6JdQZW",
    "j8oaW7BcICob",
    "W4CDhSkgxtvtW7S",
    "W7NdILJdLSk8",
    "W5ORWRNcSq",
    "DcjTaSk4",
    "FJ9R",
    "W4TwrYhdTq",
    "W5aaDq",
    "jgjlfuGbW5/dIxZdNG",
    "mmkBoH1a",
    "omoHW5pdNLi",
    "WRJcTSoZEW",
    "WOWBcCoXWRhcVJa",
    "ymouWPPnlCkgW4BcRmoq",
    "W6VdHMOIAG",
    "amkWfHDU",
    "WRNdN8oxW6uO",
    "W5/dKLVdImkq",
    "u8kwWPxdHmkSw8oftmkLW6i",
    "sIhdSqicdmkPWRq",
    "WOZcQColACo1",
    "WRK5W5dcVq4",
    "rCk3W4ddNSkFsmoct8kLW70",
    "FYbtaK5ngMu",
    "iCoBW5xdK0i",
    "tmkbnvlcUG",
    "DsFcPgiB",
    "oqpdM8kuWQW",
    "WRhdGKzLW6e",
    "nSoBW7hdG2q",
    "kqFdMCksWQ03iW",
    "AmkfCq",
    "CmkptmkUW6esW6av",
    "WOldVLXEW5pdOCkgwL9R",
    "W5lcPmofWRTFAZD0tG",
    "WORdNWxdHCoxeNv4o1a",
    "W4CLWONcNCoj",
    "ybrLdCkW",
    "W4THcher",
    "ycDefW",
    "kaxdKa",
    "uWBcPfu/",
    "zSkmyXrHkmkrWPNdMSkH",
    "W6VdI3uUESo8",
    "WPS1W7dcQLS",
    "WQOzmSoFWPu",
    "W5hcPSoyWQzeEHfStI4",
    "ig95fmob",
    "twGAWQxcKSogfNCnxa",
    "W4yWW4i5zG",
    "eKXUhLe",
    "WRZcSCoZBCoDW5JcRSom",
    "aCkZWPldSGG",
    "jCo8W5eeWQPsWQfaWOO",
    "rGFcJ2mE",
    "v8oEWODeoa",
    "W6JcKxxdQcC",
    "WOS2W6dcSN0",
    "W7THbSoxma",
    "zYraamk8CYPDWQb2",
    "W6BdH2aP",
    "WP/dP1n9W6O",
    "WPldNWpdHG",
    "gCohW4edWRm",
    "o3rPdCox",
    "WPL9W7pdPSkkn8o7WPDTf8oBW6fq",
    "lSkMbYreW4iDFSob",
    "W7RcLmoYW6FdHa",
    "kGNdImksWRK0kq",
    "W6qxvrCCWO3dM3JdNWa",
    "a8ozWPZcQSorW5hdJHH+WPi",
    "A8kcDCkfW7aEW6agr8op",
    "c8kBoJjXW7CCs8oCga",
    "sHTTlCkm",
    "oCo/W5uO",
    "jSo7W5u8WRzF",
    "W7uQW7uGCH/dT3/cI8ke",
    "W6HGra7dUG",
    "W78qkCkYEq",
    "eCozW7pcRmor",
    "EsVdMqG3",
    "WQ5eW7y9wmouW5Pgimkw",
    "dmkbtCoxxW",
    "a8orW4hcISor",
    "CdjJf8kczrboWQL2",
    "W4TgDbJdTq",
    "tmkVrHL0",
    "Ec3cRwWS",
    "WQRdQCoBW5C0",
    "W5NdQmkAWOpdPq",
    "zCkcBa",
    "FmkAFCk1W5y",
    "nbyrWQZcLCo1ovC",
    "WRRdNeDLW5i",
    "kaVdKSkyWQTOFa",
    "WRGAW6tcKN0",
    "W4NdNmkgWQpdKq",
    "k3POdCoEWOOrBSofsa",
    "W7OtuG8Y",
    "W5RdIvWkwq",
    "W7ZdGgRdNSkV",
    "EmkkW5ZdH8kUsCo4",
    "WRldH8oRW5ut",
    "Crfeq8oX",
    "A8kcDCkfW7eAW7OgtSoy",
    "WPpdLrpdMW",
    "W4dcTmofWRDVCYTIxW",
    "tfufWRZcGW",
    "z3C+WQxcNW",
    "W4T6pwiq",
    "W4P6ra",
    "ySkaW6xdO8kLFSooySkE",
    "WQBdMfL/W6q",
    "W4aFr1uK",
    "WQ4gW7pcR28",
    "ce9Wemoz",
    "W43cTmoaWPbcCdT8rZq",
    "sHHvvCog",
    "de8wWOFcLG",
    "WQtdNv95",
    "y0KGWO7cSG",
    "W4ldN8km",
    "yuuHWONcTmoylKyW",
    "W4tcRSogWRvL",
    "W7JcLCovW4hdHq",
    "sGfTnCkL",
    "bmkNvq",
    "W6JcIgpdIZK",
    "W4pcQCoUW7xdRq",
    "W7/dGw7dG8ka",
    "W5jIcSoMaG",
    "W4BcUCo7W7NdNq",
    "W7VcV8oPW57dPW",
    "DCkOn2BcNW",
    "CSkLW4NdJSkM",
    "W4uhbmkEvG",
    "W6ddKh7dNCkt",
    "WPdcO8o3t8oc",
    "jwLvpmoC",
    "CslcSxy9",
    "W5qccwjv",
    "W4PKkMSq",
    "DCkMgMdcPG",
    "ktldKmkMWO0",
    "aSkXgWPH",
    "W6vxnL4",
    "WP98W73dRCkgnCoZW5rDamoUW4b5Ea",
    "rSkAyI55",
    "WOKAW7lcMbpdItDI",
    "u8kAff3cMW",
    "W7BcGmo+W6pdOq",
    "W7HgpW",
    "W4xdTh0yEq",
    "vIjYzmob",
    "wtZdMqq",
    "W4fGg1aL",
    "W6jqmguvW5hcJJj4WRi",
    "WRlcPSoTxCokW53cQmouW5ai",
    "j8o9W7BcOCo0WODm",
    "DSoCWO9r",
    "zXRdGZ0C",
    "ixjjcmo9",
    "wXTe",
    "Be40WPi",
    "k3LZaCoTWOmhEmou",
    "ycvyymoP",
    "Bmk9Dc1x",
    "e8otWOm",
    "WQBdLeH+W6BdVCkGtgS",
    "oL92lCoa",
    "WOJdKrJdNa",
    "p2TEg3G",
    "WPFdNXRdM8oPhhHTleG",
    "W7SSzwGC",
    "jIxdICkkWOa",
    "lMaHWO3cPq",
    "cuKi",
    "vXHha8k6",
    "j8oSW7RcPmoY",
    "WRFcJ8kF",
    "sc3dTqmfdmkOWR3dVW",
    "W54RWQxcRmo9ACk4WPe",
    "oSkaWO3dJXdcRJ4PiSoN",
    "W5KWCHmt",
    "xwTwgmkQwq5cWPT4",
    "rCk3W4ddNSkFwmoexmk5W6y",
    "W7JcJghdJtJcJ1ddK8kHWOO",
    "WQxdUmkEW7ZcTG",
    "W5RdL1ZdVG",
    "W4iuFrCS",
    "WPP2W6SSpG",
    "W7NcIwxdKtNcMu3dKG",
    "levqkxS",
    "W4OFye4x",
    "uSomWRXhfG",
    "WPNdICokW4uA",
    "xctdTWq",
    "W4ldSvS5Aq",
    "Cczj",
    "vCkLfv7cHa",
    "W6dcPmo3W7VdUa",
    "WPLWW7a9lG",
    "BCkDsGvqm8kmWPS",
    "FJvQgW",
    "WPxdKrO",
    "WQJdVc7dPmoqohjdaNm",
    "W7baCHpdRW",
    "lmk6vmoWxq",
    "EINdKqCH",
    "WOCiW7JcLIa",
    "smkKn13cOG",
    "aCkNWP3dUda",
    "WO/dP8ovW6GB",
    "W7OTW6G7vbddT28",
    "cmotW7NdLgS",
    "WRm1W4dcTftdGx9nfci",
    "amofW7/dRve",
    "W4CYc39nW6bKWOtcUq",
    "hX3dJCkPWQS",
    "rdlcRem9",
    "W6Wll8kvyG",
    "AXLFnuq",
    "kCoIW4ZcQSo0",
    "l8ooW68lWQC",
    "ud14jmkT",
    "WRBdNfT5W6xdU8kUt3vm",
    "dwawWPRcIa",
    "W7O1ucW8",
    "WR0Ei8oHWQm",
    "uxu7WQJcJW",
    "WPn5W6WXnSkwW71ogSkn",
    "W73dJNG0",
    "gSoYW5GSWOq",
    "c8kEW4/cHCkS",
    "m3qvxq",
    "W4ZcGepdJHO",
    "ehDmpe8",
    "W5T9imorjq",
    "W5yFdmkF",
    "jW/dKSkBWQWX",
    "W7pcNmoUWQv5",
    "WR4xW4tcMIW",
    "WOajW7RcQqJdLsXP",
    "W4uGWQtcPCop",
    "WRLnW5CCgq",
    "zCosWPnwlCkMW5ZcOmojWP4",
    "WQ0feSo3WQi",
    "W7RcVmokW6xdJa",
    "W68BjeXR",
    "WRdcQSoHA8okW5ZcUW",
    "W6LDlvq",
    "Ct9/",
    "W4xcVSoE",
    "W6hcSSo7WP5X",
    "WQGLW4VcIfi",
    "WP4DdCo2",
    "cmotWP7cUG",
    "WPpdImohW4m/qXTOr8oP",
    "WOpdMNThW5y",
    "wGrKdmk5",
    "W5hdN03dMSkI",
    "k8kBWR/dGqO",
    "W6HEeL8Q",
    "W7iMW74",
    "W5KhrIGx",
    "pxrAemokWOOg",
    "emk7t8owzHxcMCoKqq",
    "W5ZdH8ksWOhdTfZdRmorW7O",
    "oK0SWRpcPa",
    "pmo3W4NcQSoM",
    "W6NcU0RdQru",
    "WRhdU8oLW505",
    "cW7cOeVcTW",
    "pH7dSCkzWRySdCkHn8oL",
    "tqrnr8oA",
    "BYNcSNC",
    "W7zMAqldPW",
    "kmknWPJdLq",
    "j2jx",
    "tI3cUeymW7pdOxZdTW",
    "yCkLst5l",
    "W619yHVdUq",
    "W6jDnNKw",
    "W4SNcx1yW4TSWOxcSmkG",
    "W6uNi0jS",
    "W4eecmklua",
    "mSkZbJvaW4qlBSow",
    "WRNdKe4",
    "W6P5zXJdQa",
    "hCkeW5JcGG",
    "WP1+W60UhCkm",
    "WP7dNmkvW4FcPCkJdNiv",
    "FqxcNxK9W4f4WRiYW5u",
    "W4OAhSkf",
    "W5T+cCoKnW",
    "W4NcLmoPWR9E",
    "W6KlgmkJAW",
    "W6L1lxWK",
    "d8kLgYbG",
    "WPddLqBdJa",
    "gCotW6ldLW",
    "zCoXWQP8pW",
    "pg9kca",
    "yXXCfey",
    "DcFcLway",
    "lSoAWQBcSSo0",
    "W401b8kjDG",
    "kCkksSoXva",
    "xYNcQfuy",
    "W5bWycxdPW",
    "tZ7dKqWy",
    "rb1lcSkS",
    "yCkaAa",
    "ASk9W6NdKmku",
    "mM9Ibg8wW5i",
    "WPGuW7dcUxS",
    "W6SRWQdcQSoX",
    "ACoFWPD6kSklW4/cOSowWPq",
    "WRlcRmoHuSoA",
    "AWHefCkt",
    "W5eZbM5vW7f5WOlcTa",
    "W40/ha",
    "A8kpt8kmW6e",
    "W5OHWQFcSCoD",
    "W40OaKvoW7vJWPJcImkU",
    "dmo6WOlcKSoY",
    "WO4DkCoSWQhcUZSI",
    "DCkmcghcOW",
    "xSkmA8kTW7W",
    "yaZdMtKE",
    "WQL3W4yoca",
    "W6/cLmo3W4VdGa",
    "WPZdUIZdU8og",
    "WRz0W5S9gW",
    "pSkSjYreW4qkFa",
    "WPyxfmo/WQFcUG",
    "fmkWWPddVYG",
    "WPNdGbRdHmoX",
    "WOJdHrNdGa",
    "WPhdKCkmW5RcL8kQbwa",
    "idtcTfZcMSo6zCoj",
    "W6JdJSk3WOddVW",
    "WPTEW7Cnbq",
    "zdZcL0akW4rp",
    "k8kBsCoGwq",
    "W4zLk8oGaG",
    "W5FdKeNdSmkgorFcN8k1WPO",
    "oCkdW6FcUmkm",
    "xGfMFSom",
    "r0C3WRFcNW",
    "nmoGW6RcOa",
    "gCkeW5NcHa",
    "kCoXW5uOWQ1BWQu",
    "ymkmrSkFW6y",
    "W43cM8kvWQ1OhIvLrCobW7lcJW",
    "WQJdPWhdUSom",
    "W6/dT10EvSoDqmkbW5/dPa",
    "bSo5W53dSuO",
    "W556bmoEcG",
    "W6xdSxWWzq",
    "W77cHgFdIJ7cHvddKSkG",
    "WOZdISkJW6FcNq",
    "WPpdN1DGW6a",
    "W6OkaCk5BG",
    "W6uCb8kCtq",
    "sSk6W5NdG8kTx8ofxa",
    "W5K/uu40",
    "ixmfWPpcLG",
    "CdjJf8kcyXzz",
    "srTdpxO",
    "WPm3dmoHWPy",
    "Dt10t8oQ",
    "W7WWydK0",
    "WRuwW4tcJYG",
    "Dq1WuSob",
    "kCo0W6e",
    "vmkCkwdcHW",
    "W5xdQxGytG",
    "aCkBW5hcUCkn",
    "mSkKy8oqxq",
    "dbldMmk7WOS",
    "WRpcPCoQzW",
    "Auu8WPRcSSoF",
    "W5L7cKKW",
    "W4dcVCoIWRPc",
    "WPVdMaVdMG",
    "g8kfWQNdRtG",
    "EYXjaW",
    "W4hcMSoLWRPu",
    "W5JdQfFdLCkx",
    "WR84W4tcMepdLMrAbt8",
    "WPm/W4VcVvO",
    "AJ15E8oG",
    "dmoHW5NdNqRdM8o5WP3dUq",
    "AX7dJGKf",
    "WPJcJSovzSoL",
    "pH7cJComWOSTkCkY",
    "pNztlCod",
    "W5pcL8o7WOHi",
    "bmk0W53cK8kb",
    "Ec3cR3alW6/dRhZdOq",
    "mSobWR/cMSo7",
    "WPRdNq/dHSo9hNS",
    "W6/dGhyIqmo6rmkZ",
    "lmocWQdcImoX",
    "r8o7WPDOoG",
    "W4NcTg7dOsu",
    "rJlcTMqo",
    "WR4pW4BcSwi",
    "rHLMivy",
    "k29khMmwW4tdHMq",
    "WOGDd8o2WRC",
    "d8kNt8ofEHG",
    "igLwhMm",
    "WOddTGxdNCoV",
    "zH9koSku",
    "tsxcJuSv",
    "WR41W4xcK2JdHN5nbt8",
    "W7yKbSkJFa",
    "khiGWPlcKW",
    "iuP9h1q",
    "W5uFbmksxq",
    "W7STW7q/wru",
    "W4WKWRJcQmoBDmkUWOe",
    "yIRcULOkW4zjWR4",
    "W6NdJw40",
    "WORcOmoKrmoC",
    "W4yfFru",
    "W7ZdRCkOWP3dIq",
    "WPFdKGddT8oGfxv+oW",
    "lrJdNCkrWR0Q",
    "WP3dICoz",
    "W69DpKm",
    "iSkMgdq",
    "WP/dISkZW7tcTW",
    "W4mnwKSu",
    "hMrxb38",
    "W6XrlG",
    "W5ekW7Gkzq",
    "sdjNgSkK",
    "W5RdHeO8wW",
    "mSoZW70zWOa",
    "W7FcIKBdGaq",
    "k2fC",
    "W709vYK+",
    "sWBcPKi8",
    "fwLjlhG",
    "WQxdHCkjWQhcRmoJWPybfmkXaCoUWR7dMq",
    "fCkHW5hcUmkp",
    "amkaW4dcICkR",
    "W7BcKCom",
    "fCk5WO7dKJm",
    "gYRcSLBcOW",
    "W6FcO8oqWRza",
    "h1ib",
    "g8kxodrJ",
    "W5z6rGddMG",
    "WPRcL8o9Cmoi",
    "W5BcPmolWQXv",
    "W67cHghdHau",
    "Dd5ahwC",
    "vCknDCkBW7W",
    "DmkcBqi",
    "W6q/WPZcNSo7",
    "W4WOWRG",
    "WQG4W6ZcGK/dGxu",
    "W40OaKvFW7v5WP/cU8kP",
    "W4VdM8kpWOhdRLBdOCoDW70",
    "W5fHaKq",
    "W6pcMCojWPHu",
    "D8k4W7xdHCkk",
    "qc3dUa0cdq",
    "W4qAa8kv",
    "W6RcJwxdJq",
    "sdRcKfyX",
    "gaJcN3/cNq",
    "bSoeW7RdH2y",
    "t1mWWRRcNG",
    "EIhcRNCn",
    "W5jDuGZdLW",
    "n8oAofWly8ojWPJdGSkDWQbsWO4",
    "W7uTzdyD",
    "W44fW4W3qq",
    "W5GqDbm",
    "WRKFW5dcV1q",
    "qbbFp34",
    "WPRcQmoEE8oD",
    "W4emCa09",
    "W4ZcJSonWQjG",
    "DXXOq8oL",
    "WPjYW4S5dq",
    "Cw8uWQJcJW",
    "gSkvWPFdUtS",
    "WPaUW4BcO2e",
    "WRWbW77cUqldKWbLW6nF",
    "oSotW489WPC",
    "h3PVaui",
    "jSkMgJDcW4u",
    "W4bfo8oogW",
    "W609jCkRua",
    "jNL2jSoAWO4pC8ofvG",
    "b8ooW5JdJhy",
    "W6b8xI7dKW",
    "nmo5W7JcPG",
    "sSk8wIz9",
    "W4hcOCoCWOTi",
    "zSkld1VcUG",
    "dmk3aHzs",
    "Bxm3WPFcVa",
    "W57dMCknWRtdTW",
    "ymkbEWi",
    "itpcVfdcTCo7zq",
    "W6rfn14x",
    "W5CnyW0S",
    "q8kuW4ldOSkW",
    "W5FcRmooWQbf",
    "itZcOK3cT8o9ySotBrO",
    "gSojW5ddPYC",
    "W4RcT8oCWQPtDY92",
    "lvPXpCoc",
    "WP/dISkc",
    "W6eZefT8",
    "hmo+W5a",
    "jSkBsmoNFq",
    "WPRdG8oFW68S",
    "W4VcHf7cMmk9ssvQp3tcMSk2WRi",
    "pSkGatT7",
    "ACkIAY5Z",
    "DeqDWPJcHq",
    "WQa9kCo/WRq",
    "ASomWRf2ea",
    "W4ZdKMe4zG",
    "hCkZWPtdUa0",
    "ySkByG9km8kxWPa",
    "W7xdKL7dICkX",
    "cmoIWPhcS8oO",
    "WOddVxDhW6O",
    "q8kNW6hdOSkc",
    "W4/cU8osWRXM",
    "kmkQgJq",
    "W4vemSo6",
    "W7tcPvxdHaG",
    "y8k+zIT9",
    "W4WkEh8Q",
    "x8k5ofJcQW",
    "W7eHW6GRwq",
    "E2/dRqZdPmkRqmolvY7cUtm",
    "W6q7WRZcImo6",
    "WPpdNsJdHCo7",
    "k2XmdKe",
    "WRhcOCoP",
    "raDpf8kl",
    "W78+wrC7",
    "geuZWPxcLG",
    "W5FdNeNdPCkwoGVcICkK",
    "e1ywWPhcLaSzWPhcOq",
    "W5CnDHySWQBdVa",
    "W7BcSCoPWRLG",
    "WP7dK8kFW5hcJ8kHba",
    "cJRdISkvWQ4",
    "c0fVj2y",
    "owCQWQFdGGq",
    "W7RdTveYCW",
    "yq1mbwi",
    "nSo6W6ZcVmoY",
    "W57dO07dTCkO",
    "cSoDW5hcQCoV",
    "W4HNEJhdKq",
    "aSouWP3cPSo8W4RdJqq",
    "xWzDw8og",
    "W7e6W7S1sa4",
    "lZxcU0NcPSo2yW",
    "WRBdQq/dSSoo",
    "uX/cShyMW6fUWPmtW4m",
    "WRRdQmkxW4ZcKW",
    "W6a/W5CADq",
    "W5tcO1ddOqq",
    "xmo+WRH8ca",
    "W57dQgaDrW",
    "zrhcV1m3",
    "W43cTmoaWPbrCtDMxW",
    "k8o3W7pcL8o6WODrWOhdMmk+",
    "W5O5WR/cRCoBAmkSWPfu",
    "zSkcW4xdJSkw",
    "rSk7W4pdRSkP",
    "W6ldLSk6WOpdIa",
    "FtjMmmkWCHDCWQnT",
    "BZJcUwGvW6pdUMRdSq",
    "DSkwcf/cKq",
    "W4tdM8kfWOy",
    "eCo8W4/cJmoZ",
    "m2ThffW",
    "wI/dOXm1",
    "kMvkcMmB",
    "W6NdTSkBWQ3dRW",
    "W6aElhXm",
    "W7mYnmkzBq",
    "ymouWO9wlq",
    "W5qNiCkisW",
    "hSopW57dO1i",
    "Ad3cRMO",
    "W6hdM0ZdV8kn",
    "ge8dWPZcLG",
    "vdHBDmoU",
    "CczweW",
    "W5dcS8oAW74a",
    "W75Co0O",
    "W7fBbSoIna",
    "B8kSkL7cNq",
    "ysnUAW",
    "c8kyW5NcMCkW",
    "fmodWOdcSa",
    "W4z3xaZdOa/cUIFcRSkm",
    "smk3W4xdUCkMw8oatCkLW6W",
    "AmkfCCk9W6Ct",
    "W5OIzLqp",
    "A8kSW4pdRSkw",
    "dbRdT8kjWRS",
    "W7pcNmoiW70",
    "d8ktW4tcKSkBFKaAWRVcNa",
    "W5C7WR/cVCol",
    "zCknEa",
    "WRFdMCo9W4KT",
    "dmoNW7BcKSoa",
    "ySkhybHBka",
    "FcTpohXbg3JcHmop",
    "Bmk5yYnu",
    "hCoWW4JdHqRdNCo5WPJdQbS",
    "cSkQsmokwa",
    "ydjyDCoV",
    "W6/dQhW/Bq",
    "ACkzzd50",
    "tsRdPq",
    "amkxtSoJwa",
    "iddcSMJcNW",
    "C2e6WPZcSa",
    "FqpdUZG/",
    "iIJdJCkvWPu",
    "W6ZcOSolWPH1",
    "WP7dGGxdHq",
    "tYFdPr4",
    "W4tcV8oeWQS",
    "WOFdOMP/W4u",
    "FJvIcmkPFW",
    "WOZcKmoaBSov",
    "FcTpoh5Bc2xcLmo5",
    "W4Gqa3L2",
    "F8kNW6xdKCk3",
    "vHzwu8oaW7i",
    "u8kYtCkPW5i",
    "Ft5Thmk2CGS",
    "WRNdPSkPW5xcSq",
    "WOv+W606amklW7O",
    "W7XRp3CP",
    "FsX6bwbAgNNcJq",
    "W7xdK2GJvq",
    "k8o3W7pcL8kHWOPAWPxdLG",
    "gvywWP3cLGCPWO3cVmoB",
    "e8kHzSofEW",
    "b8kAW6NdOa",
    "W4ZdPmkBWQZdUW",
    "gSozW7ddP3y",
    "vHddOX0W",
    "W5WBywSa",
    "xqxcN0SD",
    "WOOhcCoW",
    "psldNCkeWRa",
    "A8kpAHX1",
    "BmkwW6BdGSkI",
    "vSkKfglcUG",
    "W7ddOvddGmkRgIJcOSkRWRm",
    "j8oNW50YWQvFWRq",
    "WQ7cNmoXq8oC",
    "u8kAoe7cNq",
    "WPWOmCooWRG",
    "k8kiWPC",
    "W6mctuq3",
    "AmklkKZcPa",
    "WOv+W6aHjmkbW7PC",
    "WRiKW6JcM1q",
    "kmo3W5u/",
    "rSk2W6xdLSkc",
    "WRFdPt7dQa",
    "jCkmdHP5",
    "DmkBFWq",
    "W77cSCooW7RdMq",
    "W5CiwqSC",
    "j3nxbhaD",
    "WPNdHmozW64XtW8",
    "wmkSftVcJuegn1mO",
    "W6Okuq",
    "EqVcIMij",
    "WRVcRCo1CCoz",
    "aHldJmk5WQe",
    "xvqyWPpcOa",
    "sZdcN34+",
    "W4jEmSoKjG",
    "WQNcQ8obA8ovW5hcQW",
    "W7NcHuldLZS",
    "WOJdKCk8W5BcGSkQdW",
    "WQy2W6/cSt4",
    "pSktWPJdLHK",
    "f8onW5RcOmod",
    "WPGBfmo8",
    "W4mNoL5W",
    "geKlWPNcVqaxWPdcPSot",
    "kmo8W5qJWP1vWQ9gWORdRW",
    "WRxdP8k3W7VcMa",
    "ASoyWPnclCk8",
    "WQ7dN8o4W4yu",
    "WP9OW5Ccmq",
    "W7azevzY",
    "WRhcQ8oG",
    "WPddJ8odW7SSqG",
    "jdJcTL0",
    "WQVdTmkWW6FcNW",
    "oxPUdCoCWOOqtmofrq",
    "W68XfmkqAG",
    "amkQqmoqEGxcN8oJ",
    "wtVcLNyC",
    "fmkarSoyxW",
    "AZBcI1uBW48",
    "yJXTaq",
    "WPFdM8k8W57cUq",
    "W4adyd8Z",
    "pmkMWO7dVtS",
    "ztJcRMepW6NdUMZdTG",
    "W47cS8oeWQHeDW",
    "gvybWPJcJJeAWOVcPG",
    "W4aAcSkztcvc",
    "W67dNCk/WQZdNW",
    "zSkbA8kUW78EW70cr8or",
    "vaVcJNur",
    "W5z8vbZdIW",
    "n8kjWP/dQWS",
    "WPRdL8kDW5FcJSkDbhSm",
    "BmkzB8k1W6C",
    "W5uVWQFcSSoC",
    "kCkNW4FcNSkLEMuCWQtcHG",
    "FsNcTMmTW6v0WOGbW4m",
    "pMn/pmoL",
    "h8kYW57cG8k1",
    "AJlcLq",
    "dSkEW4C",
    "xSkQoKVcLa",
    "WRJdPK5MW70",
    "WP8jW7VcVsm",
    "W5RdK8kuWQ/dHG",
    "W6ldL0VdVmkW",
    "hmoMW4hcRSowWOTsW5RdOSkH",
    "W5z2zbxdIW",
    "omoKWOxcICol",
    "WPFdKGddT8oUhhT7kK4",
    "kSkoWOZdLrG",
    "WOChW7JcMqe",
    "AtPTtSoI",
    "WP4hmSozWOC",
    "W4zlpmoMja",
    "W4xdTSkzWPBdRa",
    "WQTzW4Keda",
    "pJlcR03cTW",
    "CsblaW",
    "W7ldKvxdTmkg",
    "CXFdPqSyfSkd",
    "lmkQqmo0yW",
    "qCk2W6ZdS8kV",
    "nCk1WQ/dQYy",
    "B8kfwCk7W5a",
    "W7RdJg3dKmkH",
    "ihfjemoH",
    "W4iLWQFcNmol",
    "B2G3WP7cTG",
    "WRlcSCoZ",
    "W5CNys8r",
    "WQNcPCoLBSoi",
    "W4z7EZpdLq",
    "c2DuihG",
    "kmkyvCoWva",
    "WPRdJmkBW5lcNW",
    "e1bNk04",
    "W7dcVCofWOLL",
    "WRCOW7lcIX4",
    "lmkuWOVdLq",
    "ytRcIuykW5u",
    "WRdcVCoHv8o8",
    "WPpdOKrLW7u",
    "ySkcyXTBi8kRWORdL8kL",
    "oWVdT8kUWOS",
    "W73dL2OY",
    "WQJdTtVdPSoG",
    "c0qx",
    "c8oZW43dK0y",
    "W6fBnf8",
    "i8k0fXX0",
    "W5ONWOtcI8op",
    "W5GloLXp",
  ];
  ld = function () {
    return V;
  };
  return ld();
}
function lw(V) {
  let y = [];
  for (let hz of w.list) {
    if (hz.destroyed) {
      continue;
    }
    let hH = hz.constructor.name;
    if (hH === "obj_gasterblaster" || hH === "obj_404_blaster") {
      lj(y, hz);
      continue;
    }
    if (hz.visible === false || !lC(hz)) {
      continue;
    }
    let hX = Number.isFinite(hz.x - hz._px) ? hz.x - hz._px : 0;
    let hQ = Number.isFinite(hz.y - hz._py) ? hz.y - hz._py : 0;
    let hA = 0;
    let i0 = 0;
    if (Number.isFinite(hz._apvx)) {
      hA = Math.max(-1.5, Math.min(1.5, hX - hz._apvx));
      i0 = Math.max(-1.5, Math.min(1.5, hQ - hz._apvy));
      hA = (hz._apax || 0) * 0.5 + hA * 0.5;
      i0 = (hz._apay || 0) * 0.5 + i0 * 0.5;
    }
    if (!V) {
      hz._apax = hA;
      hz._apay = i0;
      hz._apvx = hX;
      hz._apvy = hQ;
    }
    let i1 = lZ(hz);
    if (!i1.skip) {
      for (let i2 of i1.multi || [i1]) {
        if (!!i2.custom || !!f[hz.mask_index] || !!f[hz.sprite_index] || !!lJ.has(hH)) {
          y.push({
            x: i2.cx === undefined ? hz.x : i2.cx,
            y: i2.cy === undefined ? hz.y : i2.cy,
            vx: i2.vx === undefined ? hX : i2.vx,
            vy: i2.vy === undefined ? hQ : i2.vy,
            hw: i2.hw,
            hh: i2.hh,
            ax: i2.ax === undefined ? hA : i2.ax,
            ay: i2.ay === undefined ? i0 : i2.ay,
            t0: i2.t0,
            ttl: i2.ttl,
            path: i2.path || (hz.is && hz.is("obj_rotspear") ? lb(hz) : undefined),
            blueOnly:
              !!i2.blueOnly ||
              (!!hz.is &&
                (!!hz.is("blt_bluesword") ||
                  (hz.blue === 1 &&
                    (!!hz.is("blt_dogspear") ||
                      !!hz.is("blt_potentiallyblue") ||
                      !!hz.is("blt_loopbulletgrow"))))),
            cls: hH,
            custom: !!i2.custom,
            guessed: !i2.custom && !f[hz.mask_index] && !f[hz.sprite_index],
          });
        }
      }
      if (y.length > 400) {
        break;
      }
    }
  }
  let hK = w.first("obj_sansb_body");
  if (hK && !hK.destroyed && hK.fac === 4 && c.idealborder) {
    let i3 = hK.alarm ? Number(hK.alarm[7]) : 0;
    if (i3 > 0 && i3 <= 7) {
      let i4 = c.idealborder;
      let i5 = 55;
      let i6 = i4[0] + 8;
      let i7 = i4[1] - 3;
      let i8 = i4[3] - i5;
      let i9 = i4[3] - 3;
      y.push({
        x: (i6 + i7) / 2,
        y: (i8 + i9) / 2,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0,
        hw: Math.abs(i7 - i6) / 2,
        hh: Math.abs(i9 - i8) / 2,
        t0: i3 + 7,
        ttl: i3 + 49,
        blueOnly: false,
      });
    }
  }
  return y;
}
K(lw, "gatherThreats");
function lp(V) {
  if (!V || V.destroyed) {
    return null;
  }
  {
    let hX = y6(V);
    if (hX !== undefined) {
      return hX;
    }
  }
  {
    let hQ = VB(V);
    if (hQ !== undefined) {
      return hQ;
    }
  }
  let y = V.constructor.name;
  if (y === "obj_gasterblaster" || y === "obj_404_blaster") {
    if (V.col_o !== 1 || (V.fade !== undefined && !(V.fade >= 0.8))) {
      return null;
    }
    let hA = (((V.image_angle || 0) - 90) * Math.PI) / 180;
    let i0 = Math.cos(hA);
    let i1 = -Math.sin(hA);
    let i2 = Math.abs(V.image_xscale || 1);
    let i3 = Math.ceil(Math.floor((i2 * 35) / 4) * 1.5) + 1;
    return [
      {
        line: [V.x + i0 * 35 * i2, V.y + i1 * 35 * i2, i0, i1, i3],
        blue: false,
      },
    ];
  }
  if (!lC(V) || (V.active === 0 && typeof V.is == "function" && V.is("obj_collidebullet"))) {
    return null;
  }
  let hK = lZ(V);
  if (hK.skip) {
    return null;
  }
  let hz =
    !!hK.blueOnly ||
    (!!V.is &&
      (!!V.is("blt_bluesword") ||
        (!!V.is("obj_sans_bonebul") && V.type === 1) ||
        (V.blue === 1 &&
          (!!V.is("blt_dogspear") ||
            !!V.is("blt_potentiallyblue") ||
            !!V.is("blt_loopbulletgrow")))));
  let hH = [];
  for (let i4 of hK.multi || [hK]) {
    if (i4.t0 === undefined || !(i4.t0 > 1)) {
      if (i4.custom && i4.cx !== undefined) {
        hH.push({
          rect: [i4.cx - i4.hw, i4.cy - i4.hh, i4.cx + i4.hw, i4.cy + i4.hh],
          blue: hz || !!i4.blueOnly,
        });
        continue;
      }
      if (f[V.mask_index] || f[V.sprite_index]) {
        hH.push({
          mask: true,
          blue: hz || !!i4.blueOnly,
        });
        continue;
      }
      if (i4.cx !== undefined) {
        hH.push({
          rect: [i4.cx - i4.hw, i4.cy - i4.hh, i4.cx + i4.hw, i4.cy + i4.hh],
          blue: hz || !!i4.blueOnly,
        });
        continue;
      }
      if (i4.custom || lJ.has(y)) {
        hH.push({
          rect: [V.x - i4.hw, V.y - i4.hh, V.x + i4.hw, V.y + i4.hh],
          blue: hz,
        });
      }
    }
  }
  return hH;
}
K(lp, "hazardShapes");
var lq = (() => {
  let V = [];
  for (let y = -14; y <= 14; y++) {
    for (let hK = -14; hK <= 14; hK++) {
      let hz = Math.hypot(hK, y);
      if (hz <= 14) {
        V.push([hK, y, hz]);
      }
    }
  }
  V.sort((hH, hX) => hH[2] - hX[2]);
  return {
    R: 14,
    list: V,
  };
})();
function lK(V, hK, hz, hH, hX, hQ) {
  let [hA, i0, i1, i2] = hH;
  let i3 = Math.floor(((hX - hA) / (i1 - hA)) * hK);
  let i4 = Math.floor(((hQ - i0) / (i2 - i0)) * hz);
  if (i3 < 0 || i4 < 0 || i3 >= hK || i4 >= hz) {
    return 0;
  }
  let i5 = V.grid;
  let i6 = V.hazardIsLit ? 1 : 0;
  for (let i7 = 0; i7 < lq.list.length; i7++) {
    let i8 = lq.list[i7];
    let i9 = i3 + i8[0];
    let iV = i4 + i8[1];
    if (i9 < 0 || iV < 0 || i9 >= hK || iV >= hz || i5[iV * hK + i9] === i6) {
      return i8[2];
    }
  }
  return lq.R;
}
K(lK, "gridClearance");
var lz = 0;
function lH() {
  let V = lY();
  if (!V) {
    return lX() > 0;
  }
  let [y, hK, hz, hH] = V;
  for (let hX of w.list) {
    if (hX.destroyed || hX.visible === false || !lC(hX)) {
      continue;
    }
    let hQ = lZ(hX);
    for (let hA of hQ.multi || [hQ]) {
      if (hA.skip) {
        continue;
      }
      let i0 = hA.cx === undefined ? hX.x : hA.cx;
      let i1 = hA.cy === undefined ? hX.y : hA.cy;
      if (i0 + hA.hw >= y && i0 - hA.hw <= hz && i1 + hA.hh >= hK && i1 - hA.hh <= hH) {
        return true;
      }
    }
  }
  return false;
}
K(lH, "hazardsInBox");
function lX() {
  let V = 0;
  for (let y of w.list) {
    if (!y.destroyed && y.visible !== false) {
      if (lC(y)) {
        V++;
      }
    }
  }
  return V;
}
K(lX, "liveThreats");
var lQ = null;
function lA() {
  if (c.minigameStage || c.standaloneMinigame) {
    if (lQ && r.synthetic === lQ) {
      r.synthetic = null;
      if (hF.b1 || hF.zHeld || hF.zPrev) {
        r.held.b1 = false;
        r.pressed.b1 = false;
      }
      if (hF.xHeld || hF.xPrev) {
        r.held.b2 = false;
        r.pressed.b2 = false;
      }
    }
    lQ = null;
    hF.b1 = false;
    hF.pulse = null;
    hF.zHeld = false;
    hF.zPrev = false;
    hF.xHeld = false;
    hF.xPrev = false;
    hF.edges = "";
    return true;
  } else {
    return false;
  }
}
K(lA, "minigameOwnsInput");
function h0() {
  if (!c.autoplay || (h4(), lA()) || (lz++, yd(lz))) {
    return;
  }
  let V = w.first("obj_heart");
  {
    let hK = hy();
    if (hK !== null) {
      ho(false);
      if (hK) {
        hR("b3");
      }
      return;
    }
  }
  {
    let hz = w.first("obj_choicer_neo");
    if (hz && hz.canchoose === 1 && hz.controlled !== 0 && hz.controlled !== false) {
      if (hz.mychoice >= 0) {
        ho(lz % 2 === 0);
      } else {
        ho(false);
        hR("left");
      }
      return;
    }
  }
  {
    let hH = Ji();
    if (hH !== null) {
      ho(hH);
      return;
    }
  }
  if (c.mnfight === 2 && hY(V)) {
    hI(V);
    return;
  }
  if (c.mnfight === 2 && lH() && !hh()) {
    ho(false);
    return;
  }
  {
    let hX = Vr();
    if (hX !== null) {
      if (hX === "b1") {
        ho(true);
      } else {
        ho(false);
        if (hX) {
          hR(hX);
        }
      }
      return;
    }
  }
  {
    let hQ = JV();
    if (hQ !== null) {
      if (hQ === "b1") {
        ho(true);
      } else {
        ho(false);
        if (hQ) {
          hR(hQ);
        }
      }
      return;
    }
  }
  {
    let hA = Pr();
    if (hA !== null) {
      if (hA === "b1") {
        ho(true);
      } else {
        ho(false);
        if (hA) {
          hR(hA);
        }
      }
      return;
    }
  }
  {
    let i0 = hJ();
    if (i0 !== null) {
      if (i0 === "b1") {
        ho(true);
      } else {
        ho(false);
        if (i0) {
          hR(i0);
        }
      }
      return;
    }
  }
  {
    let i1 = l5();
    if (i1 !== null) {
      if (i1 === "b1") {
        ho(true);
      } else {
        ho(false);
        if (i1) {
          hR(i1);
        }
      }
      return;
    }
  }
  let y = hM();
  if (
    (!!w.first("obj_menubone") || !!w.first("obj_menubone_bottom")) &&
    y === null &&
    c.mnfight !== 2
  ) {
    if (h1 && h1.i < h1.frames.length) {
      let i3 = h1.frames[h1.i++];
      if (i3 === "b1") {
        ho(true);
      } else {
        ho(false);
        if (i3) {
          hR(i3);
        }
      }
      return;
    }
    h1 = null;
    if (lz % 2 !== 0) {
      ho(false);
      return;
    }
    let i2 = hS();
    if (i2) {
      h1 = {
        frames: i2,
        i: 0,
      };
      let i4 = h1.frames[h1.i++];
      if (i4 === "b1") {
        ho(true);
      } else {
        ho(false);
        if (i4) {
          hR(i4);
        }
      }
      return;
    }
    ho(true);
    return;
  }
  ho(y !== null ? y : lz % 8 === 0);
}
K(h0, "autoplayUI");
var h1 = null;
var h2 = {
  on: 0,
  heals: 0,
  hp: [0, 0, 0],
  name: ["", "", ""],
  still: 0,
  sig: "",
  inMenu: 0,
  plan: [null, null, null],
  used: {},
  gain: {},
  last: null,
};
function h3() {
  return !!c.bmenucoord && !!Array.isArray(c.bmenucoord[0]);
}
K(h3, "drMenu");
function h4() {
  if (!c.monster || !c.monsterhp || !h3()) {
    return;
  }
  for (let y = 0; y < 3; y++) {
    let hK = c.monster[y] === 1 ? String((c.monstername && c.monstername[y]) || "") : "";
    let hz = Number(c.monsterhp[y]) || 0;
    let hH = Number(c.monstermaxhp && c.monstermaxhp[y]) || 0;
    if (hK !== h2.name[y]) {
      h2.name[y] = hK;
      h2.hp[y] = hz;
      continue;
    }
    if (hK && hH > 0 && hz - h2.hp[y] >= hH / 10 && ++h2.heals >= 2) {
      h2.on = 1;
    }
    h2.hp[y] = hz;
  }
  let V = c.fighting === 1 && c.mnfight === 0 && c.myfight === 0 ? 1 : 0;
  if (V && !h2.inMenu) {
    let hX = "";
    for (let hA = 0; hA < 3; hA++) {
      if (c.monster[hA] === 1) {
        hX += hA + ":" + c.monsterhp[hA] + ":" + c.mercymod[hA] + " ";
      }
    }
    h2.still = hX === h2.sig ? h2.still + 1 : 0;
    h2.sig = hX;
    if (h2.still >= 3) {
      h2.on = 1;
    }
    h2.plan = [null, null, null];
    let hQ = h2.last;
    if (hQ) {
      let i0 = hQ.m + ":" + hQ.i;
      h2.gain[i0] = (h2.gain[i0] || 0) + (Number(c.mercymod[hQ.m]) || 0) - hQ.mercy;
      h2.last = null;
    }
  }
  h2.inMenu = V;
}
K(h4, "mercyWatch");
function h5(V) {
  let y = o(V);
  if (y < 0) {
    return c.customTeam === 1;
  }
  let hK = w.first("obj_battlecontroller");
  if (hK && hK.havechar && hK.havechar[y] !== 1) {
    return false;
  } else {
    return Number(c.hp && c.hp[c.char[y]]) > 0;
  }
}
K(h5, "heroUp");
function h6(V) {
  let y = o(V);
  if (y < 0 || c.flag[34] === 1 || c.chapter === 1) {
    return false;
  } else {
    return ((c.battlespellspecial && c.battlespellspecial[y]) || []).some((hK) => (hK | 0) >= 1);
  }
}
K(h6, "ownActs");
function h7() {
  let V = w.first("obj_battlecontroller");
  return !!V && V.oopsallacts === 1 && !!w.first("obj_tenna_board4_enemy");
}
K(h7, "allActs");
function h8(V, y, hK = "") {
  if (
    ((c["canact" + hK] || [])[V] || [])[y] !== 1 ||
    ((c["actname" + hK] || [])[V] || [])[y] === "Check" ||
    Number(((c["actcost" + hK] || [])[V] || [])[y]) > c.tension
  ) {
    return false;
  }
  if (h7()) {
    return true;
  }
  let hz = (c.actactor && c.actactor[V] && c.actactor[V][y]) | 0;
  return (
    ((hz !== 2 && hz !== 4) || (!!h5(2) && !h6(2))) &&
    ((hz !== 3 && hz !== 4) || (!!h5(3) && !h6(3))) &&
    (hz !== 5 || (!!h5(4) && !h6(4)))
  );
}
K(h8, "krisAct");
function h9(V) {
  let y = h7();
  let hK = new Set(
    h2.plan.filter((hA, i0) => hA && i0 !== V && hA.target !== undefined).map((hA) => hA.target),
  );
  let hz = [0, 1, 2].filter((hA) => c.monster[hA] === 1);
  if (y) {
    let hA = (i0) =>
      Object.keys(h2.used).reduce((i1, i2) => i1 + (i2.startsWith(i0 + ":") ? h2.used[i2] : 0), 0);
    hz = hz
      .filter((i0) => !(Number(c.mercymod[i0]) >= 100))
      .sort((i0, i1) => hA(i0) - hA(i1) || i0 - i1);
  } else {
    for (let i0 of hz) {
      if (Number(c.mercymod && c.mercymod[i0]) >= 100) {
        return {
          main: 3,
          target: i0,
        };
      }
    }
  }
  let hH = hz.filter((i1) => !hK.has(i1)).concat(hz.filter((i1) => hK.has(i1)));
  let hX = c.char[V];
  let hQ = {
    2: "sus",
    3: "ral",
    4: "noe",
  }[hX];
  if (hX === 1 || y) {
    let i1 = y && c.chapter !== 1 && hQ ? hQ : "";
    for (let i2 of hH) {
      let i3 = [];
      for (let i6 = 0; i6 < 6; i6++) {
        if (h8(i2, i6, i1)) {
          i3.push(i6);
        }
      }
      if (!i3.length) {
        continue;
      }
      let i4 = (i7) => i2 + ":" + i7;
      i3.sort(
        (i7, i8) =>
          (h2.gain[i4(i8)] || 0) - (h2.gain[i4(i7)] || 0) ||
          (h2.used[i4(i7)] | 0) - (h2.used[i4(i8)] | 0) ||
          i7 - i8,
      );
      let i5 = i3[0];
      h2.used[i4(i5)] = (h2.used[i4(i5)] | 0) + 1;
      h2.last = {
        m: i2,
        i: i5,
        mercy: Number(c.mercymod[i2]) || 0,
      };
      return {
        main: 1,
        target: i2,
        act: i5,
      };
    }
    return {
      main: 4,
    };
  }
  {
    let i7 = c.chapter !== 1 && c.flag[34] === 0;
    let i8 = (i7 ? (c.battlespell || [])[V] : c.spell[hX]) || [];
    let i9 = (i7 ? (c.battlespellcost || [])[V] : (c.spellcost || [])[hX]) || [];
    for (let iV = 0; iV < 12; iV++) {
      if (k(i8[iV]) === "mercy" && Number(i9[iV] || 0) <= c.tension && F(i8[iV], V)) {
        return {
          main: 1,
          tech: iV,
          target: hH[0],
        };
      }
    }
  }
  if (hQ && c.flag[34] !== 1) {
    let iy = (c.battlespellspecial && c.battlespellspecial[V]) || [];
    let iJ = (c.battlespellcost && c.battlespellcost[V]) || [];
    for (let iP of hH) {
      let ia = (c["canact" + hQ] && c["canact" + hQ][iP]) || [];
      for (let il = 0; il < 12; il++) {
        if ((iy[il] | 0) >= 1 && ia[il] === 1 && Number(iJ[il] || 0) <= c.tension) {
          return {
            main: 1,
            tech: il,
            target: iP,
          };
        }
      }
    }
  }
  return {
    main: 4,
  };
}
K(h9, "mercyPlan");
function hV(V, hK, hz) {
  let hH = w
    .all("obj_throwtarget")
    .filter((i3) => !i3.destroyed)
    .map((i3) => [Z(i3), i3.good === 1]);
  if (!hH.length) {
    return 0;
  }
  let hX = Math.cos((hK * Math.PI) / 180);
  let hQ = -Math.sin((hK * Math.PI) / 180);
  let hA = V.rx;
  let i0 = V.ry;
  let i1 = hz * hX;
  let i2 = hz * hQ;
  for (let i3 = 0; i3 < 60; i3++) {
    i2 += V.ralgrav;
    hA += i1;
    i0 += i2;
    let i4 = Math.atan2(i2, i1);
    let i5 = Math.cos(i4);
    let i6 = Math.sin(i4);
    for (let i7 = -40; i7 <= 32; i7 += 8) {
      let i8 = hA + i5 * i7;
      let i9 = i0 + i6 * i7;
      for (let [iV, iy] of hH) {
        if (i8 >= iV[0] - 12 && i8 <= iV[2] + 12 && i9 >= iV[1] - 12 && i9 <= iV[3] + 12) {
          if (iy) {
            return 2;
          } else {
            return 1;
          }
        }
      }
    }
    if (i0 > V.ry + 400) {
      break;
    }
  }
  return 0;
}
K(hV, "throwHits");
function hy() {
  let V = w.first("obj_throwralsei");
  if (!V || V.throwcon !== 1) {
    return null;
  }
  if ((w.frame | 0) % 2 !== 0) {
    return "";
  }
  let y = (hK) => {
    let hz = 0;
    for (let hH = V.minpower; hH <= V.maxpower; hH += 1) {
      hz = Math.max(hz, hV(V, hK, hH));
    }
    return hz;
  };
  if (V.throwready === 0) {
    let hK = 0;
    for (let hz = -15; hz <= 30; hz += 3) {
      hK = Math.max(hK, y(hz));
    }
    if (y(V.angle) >= hK) {
      return "c";
    } else {
      return "";
    }
  }
  if (V.throwalpha >= 0.9 && hV(V, V.angle, V.mypower) >= y(V.angle)) {
    return "c";
  } else {
    return "";
  }
}
K(hy, "throwPress");
function hJ() {
  if (!h2.on || !h3() || c.fighting !== 1 || c.mnfight !== 0 || c.myfight !== 0 || c.battleover) {
    return null;
  }
  let V = c.charturn;
  if (
    !(V >= 0) ||
    !(V < Math.max(3, c.char ? c.char.length : 3)) ||
    !c.char ||
    !(c.char[V] > 0) ||
    (c.char[V] === 1 && !h5(1)) ||
    w.first("obj_rouxls_ch3_enemy")
  ) {
    return null;
  }
  let y = (h2.plan[V] ||= h9(V));
  if ((w.frame | 0) % 3 !== 0) {
    return "";
  }
  let hK = c.bmenuno;
  let hz = c.bmenucoord;
  let hH = (hX) => (hz[hX] ? hz[hX][V] | 0 : 0);
  if (hK === 0) {
    let hX = hH(0);
    if (hX === y.main || h7()) {
      return "b1";
    } else if ((y.main - hX + 5) % 5 <= 2) {
      return "right";
    } else {
      return "left";
    }
  }
  if (
    !(
      y.main === 0
        ? [1]
        : y.main === 3
          ? [3]
          : y.main === 1
            ? y.tech !== undefined
              ? [2, 13, 7, 8, 3]
              : [11, 12, 9]
            : []
    ).includes(hK)
  ) {
    if ([1, 2, 3, 7, 8, 9, 11, 12, 13].includes(hK)) {
      return "b2";
    } else {
      return null;
    }
  }
  if (hK === 11 || hK === 12 || hK === 13 || hK === 1 || hK === 3) {
    if (y.target !== undefined && hH(hK) !== y.target && c.monster[y.target] === 1) {
      return "down";
    } else {
      return "b1";
    }
  }
  if (hK === 9 || hK === 2) {
    let hQ = hK === 9 ? y.act : y.tech;
    if (hQ === undefined) {
      return "b1";
    }
    let hA = hH(hK);
    if (hA === hQ) {
      return "b1";
    } else if (hA >> 1 === hQ >> 1) {
      if (hA & 1) {
        return "left";
      } else {
        return "right";
      }
    } else if (hA < hQ) {
      return "down";
    } else {
      return "up";
    }
  }
  if (hK === 7 || hK === 8) {
    return "b1";
  } else {
    return null;
  }
}
K(hJ, "mercyMenuAction");
var hP = K(
  (V) => ({
    on: V.on,
    heals: V.heals,
    hp: V.hp.slice(),
    name: V.name.slice(),
    still: V.still,
    sig: V.sig,
    inMenu: V.inMenu,
    plan: V.plan.map((y) =>
      y
        ? {
            ...y,
          }
        : null,
    ),
    used: {
      ...V.used,
    },
    gain: {
      ...V.gain,
    },
    last: V.last
      ? {
          ...V.last,
        }
      : null,
  }),
  "mercyCopy",
);
var ha = hP(h2);
function hl(V) {
  Object.assign(h2, hP(V || ha));
}
K(hl, "mercyLoad");
function hh() {
  for (let V of w.all("obj_base_writer")) {
    if (!V.destroyed && (V.halt === 1 || V.halt === 2 || V.halt === 4)) {
      return true;
    }
  }
  return false;
}
K(hh, "utWriterParked");
var hi = null;
function hg(V, y, hK) {
  let hz = [];
  let hH = (hX) => {
    let hQ = V;
    let hA = hX > hQ ? "right" : "left";
    while (hQ !== hX) {
      hz.push(hA, "");
      hQ += hX > hQ ? 1 : -1;
    }
    V = hX;
  };
  for (hH(y); hz.length < hK;) {
    hz.push("");
  }
  hH(0);
  hz.push("b1", "", "b1", "");
  return hz;
}
K(hg, "menuFrames");
function hS() {
  let V = Array.isArray(c.bmenucoord) ? c.bmenucoord[0] | 0 : 0;
  let y = G();
  let hK = new Map();
  let hz = (hA, i0, i1) => {
    let i2 = hA.join(",");
    let i3 = hK.get(i2);
    if (i3 !== undefined && (i3.full || i3.c > i0 || (i3.c === i0 && hA.length >= i1))) {
      return i3.c;
    }
    let i4 = hk(hA, y, i0, i1);
    hK.set(i2, {
      c: i4,
      full: i0 === Infinity,
    });
    return i4;
  };
  if (V === 0 && hz(hg(0, 0, 0), Infinity, Infinity) === 0) {
    return null;
  }
  let hH = null;
  let hX = Infinity;
  let hQ = Infinity;
  for (let hA = 0; hA <= 64; hA += 4) {
    for (let i0 = 0; i0 < 4; i0++) {
      let i1 = hg(V, i0, hA);
      let i2 = hz(i1, hX, hQ);
      if (i2 < hX || (i2 === hX && i1.length < hQ)) {
        hH = i1;
        hX = i2;
        hQ = i1.length;
      }
      if (i2 === 0) {
        return i1;
      }
    }
  }
  return hH;
}
K(hS, "chooseMenuPlan");
function hk(V, hK = null, hz = Infinity, hH = Infinity) {
  hi = hi || l6();
  let hX = hK || G();
  let hQ = r.synthetic;
  let hA = hF.b1;
  let i0 = hF.pulse;
  let i1 = typeof c.hp == "number" ? c.hp : 0;
  let i2 = Number(c.km) || 0;
  let i3 = 0;
  q();
  try {
    for (let i4 = 0; i4 < V.length + 10; i4++) {
      let i5 = V[i4] || "";
      r.synthetic = () => {
        r.pressed.b1 = i5 === "b1";
        r.held.b1 = i5 === "b1";
        for (let i9 of ["left", "right"]) {
          r.pressed[i9] = i5 === i9;
          r.held[i9] = i5 === i9;
        }
      };
      try {
        C(U, hi);
      } catch {
        break;
      }
      let i6 = typeof c.hp == "number" ? c.hp : 0;
      let i7 = Number(c.km) || 0;
      let i8 = Math.max(0, i2 - i7);
      i3 = Math.max(i3, Math.max(0, i1 - i6 - i8) + Math.max(0, i7 - i2));
      if (i3 > hz || (i3 === hz && V.length >= hH)) {
        break;
      }
    }
  } finally {
    E(hX);
    m();
    r.synthetic = hQ;
    hF.b1 = hA;
    hF.pulse = i0;
  }
  return i3;
}
K(hk, "menuPlanCost");
var hF = {
  b1: false,
  pulse: null,
  zHeld: false,
  zPrev: false,
  xHeld: false,
  xPrev: false,
  edges: "",
};
function hN() {
  r.synthetic = lQ = () => {
    let V = hF.edges ? hT(hF.edges) : null;
    let y = hF.zHeld || (!!V && !!V.has("z"));
    let hK = hF.xHeld || (!!V && !!V.has("x"));
    r.pressed.b1 = hF.b1 || (y && (!hF.zPrev || (!!V && !!V.has("z"))));
    r.held.b1 = hF.b1 || y;
    if (hK || hF.xPrev) {
      r.pressed.b2 = hK && (!hF.xPrev || (!!V && !!V.has("x")));
      r.held.b2 = hK;
    }
    if (hF.pulse) {
      r.pressed[hF.pulse] = true;
      r.held[hF.pulse] = true;
      hF.pulse = null;
    }
    if (V) {
      for (let hz of V) {
        if (hz !== "z" && hz !== "x") {
          r.pressed[hz] = true;
          r.held[hz] = true;
        }
      }
    }
  };
}
K(hN, "installSynthetic");
var hW = new Map();
function hT(V) {
  let y = hW.get(V);
  if (!y) {
    y = new Set(V.split("+").filter(Boolean));
    hW.set(V, y);
  }
  return y;
}
K(hT, "edgeSet");
var hU = ["left", "right", "up", "down"];
var hG = "";
function hE(V, y) {
  let hK = String(V || "")
    .split("+")
    .filter(Boolean);
  for (let hQ of hU) {
    r.held[hQ] = false;
  }
  let hz = false;
  let hH = false;
  let hX = "";
  for (let hA of hK) {
    if (hA === "z") {
      hz = true;
    } else if (hA === "x") {
      hH = true;
    } else if (hA.charCodeAt(0) === 33) {
      hX += (hX ? "+" : "") + hA.slice(1);
    } else {
      r.held[hA] = true;
    }
  }
  r.pressed.up = !!y;
  hF.zPrev = hF.zHeld;
  hF.zHeld = hz;
  hF.xPrev = hF.xHeld;
  hF.xHeld = hH;
  hF.edges = hX;
  if (hz || hH || hX || hF.zPrev || hF.xPrev) {
    hN();
  }
  hG = hK.join("+");
}
K(hE, "applyPlanKeys");
function hv() {
  return hG;
}
K(hv, "lastPlanKeys");
function hc() {
  if (!!hF.zHeld || !!hF.xHeld || !!hF.edges || !!hF.zPrev || !!hF.xPrev) {
    hF.zPrev = hF.zHeld;
    hF.zHeld = false;
    hF.xPrev = hF.xHeld;
    hF.xHeld = false;
    hF.edges = "";
    hN();
  }
}
K(hc, "releasePlanKeys");
function hu(V, y) {
  let hK = false;
  let hz = false;
  let hH = false;
  let hX = false;
  let hQ = [];
  for (let i1 of V || []) {
    if (i1 === "z") {
      hK = true;
    } else if (i1 === "x") {
      hz = true;
    } else if (i1.charCodeAt(0) === 33) {
      hQ.push(i1.slice(1));
    }
  }
  for (let i2 of y || []) {
    if (i2 === "z") {
      hH = true;
    } else if (i2 === "x") {
      hX = true;
    }
  }
  if (!hK && !hz && !hH && !hX && !hQ.length) {
    return null;
  }
  let hA = hQ.includes("z");
  let i0 = hQ.includes("x");
  return () => {
    r.pressed.b1 = (hK && !hH) || hA;
    r.held.b1 = hK || hA;
    r.pressed.b2 = (hz && !hX) || i0;
    r.held.b2 = hz || i0;
    for (let i3 of hQ) {
      if (i3 !== "z" && i3 !== "x") {
        r.pressed[i3] = true;
        r.held[i3] = true;
      }
    }
  };
}
K(hu, "tokenSynthetic");
function ho(V) {
  hF.b1 = !!V;
  r.held.b1 = !!V;
  r.pressed.b1 = !!V;
  hN();
}
K(ho, "pressB1");
function hR(V) {
  hF.pulse = V;
  r.pressed[V] = true;
  r.held[V] = true;
  hN();
}
K(hR, "pulseDir");
function hM() {
  let V = w.first("obj_attackpress");
  if (V && !V.destroyed && Array.isArray(V.boltalive)) {
    let hz = false;
    let hH = false;
    for (let hX = 0; hX < V.bolttotal; hX++) {
      if (V.boltalive[hX] === 1) {
        hH = true;
        if (V.boltframe[hX] - V.boltx === 0) {
          hz = true;
        }
      }
    }
    if (hH) {
      return hz;
    } else {
      return false;
    }
  }
  let y = w.first("obj_targetchoice");
  let hK = w.first("obj_target");
  if (y && !y.destroyed && y.image_speed !== 0) {
    return null;
  }
  if (y && !y.destroyed && hK && !hK.destroyed) {
    let hQ = (y.x || 0) + (Math.abs(y.sprite_width) || 0) / 2;
    let hA = (hK.x || 0) + (Math.abs(hK.sprite_width) || 0) / 2;
    let i0 = Math.abs(Number(y.hspeed) || 0) || 1;
    return Math.abs(hQ - hA) <= Math.max(3, i0);
  }
  return null;
}
K(hM, "attackBarPress");
var hm = 0;
function hY(V) {
  if (V) {
    if (V.shot === 1) {
      return true;
    } else {
      return /yellow/i.test(String(V.sprite_index || ""));
    }
  } else {
    return false;
  }
}
K(hY, "isYellowSoul");
function hI(V) {
  if (c.mnfight !== 2 || !hY(V)) {
    hm = 0;
    return;
  }
  hm++;
  ho(hm % 4 === 1);
}
K(hI, "fireTick");
var hZ = 0;
var hj = null;
var hL = "b2";
var hf = {
  picks: {},
  punchStarts: 0,
  foeSeen: 0,
};
var hD = {
  last: -1,
  windup: {},
};
var hO = K((V) => {
  let y = w.first(V);
  return (y && Number(y.health_count)) || 0;
}, "ringHp");
var hx = K(() => hO("o_boxingcontroller"), "partyHp");
function hC() {
  if (globalThis.__boxOff) {
    return false;
  }
  let V = w.first("o_boxingcontroller");
  if (!V) {
    hZ = 0;
    return false;
  }
  let y = w.first("o_boxingqueen");
  if (!V._apLive) {
    if (y && y.state !== 0) {
      V._apLive = 1;
    } else {
      return false;
    }
  }
  for (let i0 of ["left", "right", "up", "down"]) {
    r.held[i0] = false;
  }
  ho(false);
  hZ++;
  if (y && y.state === 3 && (y.attacktimer | 0) <= 1) {
    y._apAttackId = (y._apAttackId | 0) + 1;
  }
  if (!y || y.state !== 3) {
    hD.last = -1;
    if (hZ % 6 === 1 && V.canpunch !== 0) {
      let i1 = hL === "b1" ? "b2" : "b1";
      hR(i1);
      hL = i1;
      hf.picks[i1] = (hf.picks[i1] || 0) + 1;
    }
    return true;
  }
  if (hZ % 2 !== 0) {
    return true;
  }
  hj = hj || l6();
  let hK = G();
  let hz = r.synthetic;
  let hH = I();
  p(false);
  q();
  let hX = (i2, i3) => {
    E(hK);
    let i4 = hx();
    for (let i5 = 0; i5 < i3; i5++) {
      r.synthetic =
        i5 === 0 && i2
          ? () => {
              r.pressed[i2] = true;
              r.held[i2] = true;
            }
          : null;
      try {
        C(U, hj);
      } catch {}
      if (c.battleover) {
        break;
      }
    }
    return i4 - hx();
  };
  let hQ = null;
  let hA = Infinity;
  try {
    let i2 = hX(null, 16);
    if (i2 > 0) {
      hA = i2;
      for (let i3 of ["left", "right", "down"]) {
        let i4 = hX(i3, 22);
        if (i4 < hA) {
          hA = i4;
          hQ = i3;
        }
        if (i4 === 0) {
          break;
        }
      }
    }
  } finally {
    E(hK);
    m();
    r.synthetic = hz;
    p(hH);
  }
  hf.picks[hQ || "none"] = (hf.picks[hQ || "none"] || 0) + 1;
  if (globalThis.__boxNoPress) {
    hQ = null;
  }
  if (hQ) {
    hR(hQ);
    if (hQ === "b1" || hQ === "b2") {
      hL = hQ;
    }
  }
  return true;
}
K(hC, "boxingStep");
function hB() {
  let V = w.first("obj_lightemup_controller");
  if (!V || V.destroyed || !V.shooting_enabled) {
    return false;
  }
  let hK = w.view.x || 0;
  let hz = w.view.y || 0;
  let hH = w.first("obj_herokris");
  let hX = hH ? hH.x + 61 : hK + 177;
  let hQ = hH ? hH.y + 45 : hz + 177;
  let hA = (i7) => {
    let i8 = Z(i7);
    if (i8) {
      return [(i8[0] + i8[2]) / 2, (i8[1] + i8[3]) / 2];
    } else {
      return [i7.x, i7.y];
    }
  };
  let i0 = null;
  let i1 = Infinity;
  for (let i7 of w.all("obj_tenna_lightemup_bullet")) {
    if (i7.destroyed || i7.vanish) {
      continue;
    }
    let [i8, i9] = hA(i7);
    let iV = Math.hypot(i8 - hX, i9 - hQ);
    if (iV < i1) {
      i1 = iV;
      i0 = [i8, i9];
    }
  }
  let i2;
  let i3;
  if (i0) {
    [i2, i3] = i0;
    let iy = hK + 220;
    if (i2 < iy && i2 > hX + 1) {
      let iJ = (iy - hX) / (i2 - hX);
      i2 = iy;
      i3 = hQ + (i3 - hQ) * iJ;
    }
  } else {
    let iP = w.first("obj_shadowman_sharpshoot_target");
    if (iP) {
      [i2, i3] = hA(iP);
    } else {
      i2 = V.cursor_x;
      i3 = V.cursor_y;
    }
  }
  i2 = Math.max(hK + 220, Math.min(hK + 600, i2));
  i3 = Math.max(hz + 42, Math.min(hz + 300, i3));
  let i4 = i2 - V.cursor_x;
  let i5 = i3 - V.cursor_y;
  let i6 = ["z"];
  if (i4 > 6) {
    i6.push("right");
  } else if (i4 < -6) {
    i6.push("left");
  }
  if (i5 > 6) {
    i6.push("down");
  } else if (i5 < -6) {
    i6.push("up");
  }
  hE(i6.join("+"));
  return true;
}
K(hB, "lightemupStep");
function hb(hK, hz, hH, hX, hQ) {
  if (
    !c.autoplay ||
    lA() ||
    (hc(), hC()) ||
    yY(hz) ||
    (!hz && hB()) ||
    (!hz && J3()) ||
    J6() ||
    (hz && Jh(hz))
  ) {
    return;
  }
  if (!hz || hz.destroyed) {
    lR();
    return;
  }
  lW++;
  {
    let iN = Va(hz);
    if (iN) {
      lR();
      for (let iW of iN) {
        r.held[iW] = true;
      }
      ll.mode = "ch4-green";
      lc("ch4-green", iN.join("+") || "none", "shield by rollout");
      return;
    }
  }
  let hA = !!hK && !!hK.grid && !!hH && !!hX && !!hQ;
  let i0 = hA ? hH : lY();
  let i1 = hA ? null : lw();
  let i2 = !hA && (!i1 || !i1.length);
  let i3 = f[hz.mask_index] || f[hz.sprite_index];
  let i4 = li.margin;
  let i5 = i3 ? (i3.bb ? i3.bb[2] - i3.bb[0] + 1 : i3.w) / 2 : 8;
  let i6 = i3 ? (i3.bb ? i3.bb[3] - i3.bb[1] + 1 : i3.h) / 2 : 8;
  let i7 = i5 + i4;
  let i8 = i6 + i4;
  let i9 = hz.x + i5;
  let iV = hz.y + i6;
  if (lN) {
    let iT = Math.hypot(hz.x - lN[0], hz.y - lN[1]);
    if (iT > 0.5 && iT < 12) {
      lF = lF * 0.9 + iT * 0.1;
    }
    if (lt !== 0 && iT < 0.01) {
      lT.set(lt, 12);
    }
    let iU = Math.abs(hz.x - lN[0]) > 0.01;
    let iG = Math.abs(hz.y - lN[1]) > 0.01;
    if (lG.right && !iU) {
      lU.right = 10;
    }
    if (lG.left && !iU) {
      lU.left = 10;
    }
    if (lG.down && !iG) {
      lU.down = 10;
    }
    if (lG.up && !iG) {
      lU.up = 10;
    }
    if (iU) {
      lU.left = 0;
      lU.right = 0;
    }
    if (iG) {
      lU.up = 0;
      lU.down = 0;
    }
  }
  for (let [iE, iv] of lT) {
    if (iv <= 1) {
      lT.delete(iE);
    } else {
      lT.set(iE, iv - 1);
    }
  }
  for (let ic of ["left", "right", "up", "down"]) {
    if (lU[ic] > 0) {
      lU[ic]--;
    }
  }
  lN = [hz.x, hz.y];
  let iy = li.horizon;
  let iJ = Math.max(1, lF);
  let iP = iy;
  let ia = String(hz.mask_index || hz.sprite_index || "");
  lE.soul = ia.replace("spr_", "");
  lE.threats = i1 ? i1.length : 0;
  lE.hazards = i1 ? [] : [];
  if (!hA) {
    let iu = new Set();
    for (let io of w.list) {
      if (!io.destroyed && !!lC(io) && (iu.add(io.constructor.name), iu.size > 5)) {
        break;
      }
    }
    lE.hazards = [...iu];
  }
  if (i2 && !/heartgreen/i.test(ia)) {
    lR();
    return;
  }
  let il = (i1 || []).find(
    (iR) =>
      iR.beam &&
      (iR.t0 === undefined || iR.t0 <= 1) &&
      Math.abs(i9 - iR.x) < i7 + iR.hw &&
      Math.abs(iV - iR.y) < i8 + iR.hh,
  );
  if (!hA && il && !/heartgreen/i.test(ia)) {
    lc("beam", "perpendicular", "standing in a blaster beam");
    let iR = -il.bay;
    let iM = il.bax;
    let im = (ij) => {
      let iL = [];
      if (Math.abs(iR) > 0.35) {
        iL.push(iR * ij > 0 ? "right" : "left");
      }
      if (Math.abs(iM) > 0.35) {
        iL.push(iM * ij > 0 ? "down" : "up");
      }
      return iL;
    };
    let iY = (i9 - il.x) * iR + (iV - il.y) * iM >= 0 ? 1 : -1;
    let iI = iY;
    let iZ = im(iY);
    if (iZ.length && iZ.every((ij) => lU[ij] > 0)) {
      iI = -iY;
      iZ = im(iI);
    }
    lR();
    for (let ij of iZ) {
      r.held[ij] = true;
    }
    lG.left = !!r.held.left;
    lG.right = !!r.held.right;
    lG.up = !!r.held.up;
    lG.down = !!r.held.down;
    lt = 0;
    lk = 0;
    ll.mode = "beam-escape";
    ll.dir = [iR * iI, iM * iI];
    return;
  }
  if (!hA && (hz.movement === 3 || /heartgreen/i.test(ia))) {
    lR();
    ll.mode = "green-block";
    let iL = w.first("obj_spearblocker");
    if (!iL) {
      return;
    }
    let iD = Infinity;
    let iO = -1;
    for (let ix of w.list) {
      if (ix.destroyed || typeof ix.is != "function" || !ix.is("obj_blockbullet")) {
        continue;
      }
      let iC = Number(ix.truesite);
      let iB = ix.is("obj_blockbullet2") && iC >= 0 && iC <= 3 ? iC : Number(ix.site);
      if (!(iB >= 0) || !(iB <= 3)) {
        continue;
      }
      let ib = (Number(ix.speedmod) || 1) * 8;
      let id = (Math.abs(ix.x - iL.x) + Math.abs(ix.y - iL.y) - 30) / (ib || 8);
      if (id < iD) {
        iD = id;
        iO = iB;
      }
    }
    if (iO === 0) {
      r.held.left = true;
    } else if (iO === 1) {
      r.held.right = true;
    } else if (iO === 2) {
      r.held.down = true;
    } else if (iO === 3) {
      r.held.up = true;
    }
    return;
  }
  let ih = hA ? null : w.first("obj_purpleheart");
  if (ih) {
    lR();
    ll.mode = "purple-rails";
    let iw = Math.max(1, ih.yamt || 3);
    let ip = ih.yspace || 40;
    let iq = ih.yoff || 0;
    let iK = ih.yzero || 0;
    let iz = (gg) => iK + (gg - 1) * ip + iq;
    let g6 = Math.max(1, Math.min(iw, ih.yno || 1));
    let g7 = ih.x;
    let g8 = ih.y;
    let g9 = ih.xmid === undefined ? g7 : ih.xmid;
    let gV = ih.xlen === undefined ? 100 : ih.xlen;
    let gy = (gg, gn) => {
      if (
        gg.cls !== "obj_donutbullet" ||
        Math.abs(gg.vy) < 0.5 ||
        Math.abs(gg.vy) > 8 ||
        Math.abs(gg.vx) < 0.05
      ) {
        return gg.y;
      }
      let gS = Math.max(0, ((gn - gg.x) * Math.sign(gg.vx)) / Math.abs(gg.vx));
      let gk = gg.y + gg.vy * gS;
      let gF = iz(1) - 10;
      let gN = iz(iw) + 10;
      if (gN <= gF) {
        return gk;
      }
      for (let gW = 0; gW < 8 && (gk < gF || gk > gN); gW++) {
        if (gk < gF) {
          gk = gF * 2 - gk;
        }
        if (gk > gN) {
          gk = gN * 2 - gk;
        }
      }
      return gk;
    };
    let gJ = (gg, gn) => {
      let gS = iz(gg);
      let gk = 999;
      for (let gF of i1 || []) {
        if (Math.abs(gy(gF, gn) - gS) > Math.max(ip / 2, (gF.hh || 8) + 10)) {
          continue;
        }
        let gN = gn - gF.x;
        let gW = (gF.hw || 8) + 10;
        if (Math.abs(gN) <= gW) {
          return 0;
        }
        if (Math.abs(gF.vx) < 0.05 || gN * gF.vx <= 0) {
          continue;
        }
        let gT = (Math.abs(gN) - gW) / Math.abs(gF.vx);
        if (gT < gk) {
          gk = gT;
        }
      }
      return gk;
    };
    let gP = w.first("obj_hideouscupcake");
    let ga = gJ(g6, g7);
    if (gP && !ih.moving) {
      lc("web", "climb", "the pet is rising");
      if ((g6 > 1 && gJ(g6 - 1, g7) > 6) || (g6 > 1 && ga < 10)) {
        hR("up");
      }
    }
    if (gP && g6 > 1 && gJ(g6 - 1, g7) <= 6) {
      let gg = null;
      let gn = {
        "-1": true,
        1: true,
      };
      for (let gS = 4; gS <= gV * 2 && gg === null; gS += 4) {
        for (let gk of [-1, 1]) {
          if (!gn[gk]) {
            continue;
          }
          let gF = g7 + gk * gS;
          if (gF < g9 - gV || gF > g9 + gV) {
            gn[gk] = false;
            continue;
          }
          if (gJ(g6, gF) <= gS / 4 + 1) {
            gn[gk] = false;
            continue;
          }
          if (gJ(g6 - 1, gF) > 6) {
            gg = gF;
            break;
          }
        }
      }
      if (gg !== null) {
        if (gg < g7) {
          r.held.left = true;
        } else {
          r.held.right = true;
        }
        lc(
          "web",
          gg < g7 ? "slide left to climb" : "slide right to climb",
          "the strand above is blocked here",
        );
        return;
      }
    }
    if (!gP) {
      if (!ih.moving && ga < 26) {
        let gN = (gG, gE) => {
          let gv = iz(gG);
          let gc = [];
          for (let gu of i1 || []) {
            if (Math.abs(gy(gu, gE) - gv) > Math.max(ip / 2, (gu.hh || 8) + 10)) {
              continue;
            }
            let go = (gu.hw || 8) + 10;
            if (Math.abs(gu.vx) < 0.05) {
              if (Math.abs(gE - gu.x) <= go) {
                gc.push([0, 999]);
              }
              continue;
            }
            let gR = (gE - gu.x) * Math.sign(gu.vx);
            let gM = (gR + go) / Math.abs(gu.vx);
            if (!(gM < 0)) {
              gc.push([Math.max(0, (gR - go) / Math.abs(gu.vx)), gM]);
            }
          }
          return gc;
        };
        let gW = (gG, gE, gv) => {
          let gc = 999;
          for (let [gu, go] of gN(gG, gE)) {
            if (gv >= gu - 1 && gv <= go + 1) {
              return -1;
            }
            if (gu > gv && gu - gv < gc) {
              gc = gu - gv;
            }
          }
          return gc;
        };
        let gT = g6;
        let gU = ga;
        for (let gG = 1; gG <= iw; gG++) {
          if (gG === g6) {
            continue;
          }
          let gE = gG < g6 ? -1 : 1;
          let gv = true;
          for (let gu = g6 + gE; gu !== gG && gv; gu += gE) {
            let go = Math.abs(gu - g6);
            for (let [gR, gM] of gN(gu, g7)) {
              if (go * 3 + 1.5 >= gR - 0.5 && go * 3 - 1.5 <= gM + 0.5) {
                gv = false;
                break;
              }
            }
          }
          if (!gv) {
            continue;
          }
          let gc = gW(gG, g7, Math.abs(gG - g6) * 3);
          if (gc > gU + 4) {
            gT = gG;
            gU = gc;
          }
        }
        if (gT < g6) {
          hR("up");
        } else if (gT > g6) {
          hR("down");
        }
      }
    }
    let gl = 4;
    let gh = 0;
    let gi = -1000000000;
    for (let gm of [-gl, 0, gl]) {
      let gY = Math.max(g9 - gV, Math.min(g9 + gV, g7 + gm));
      if (gm !== 0 && gY === g7) {
        continue;
      }
      let gI = Math.min(gJ(g6, gY), 60) * 10 - Math.abs(gY - g9) * 0.02 - (gm === 0 ? 0 : 0.5);
      if (gI > gi) {
        gi = gI;
        gh = gm;
      }
    }
    if (gh < 0) {
      r.held.left = true;
    } else if (gh > 0) {
      r.held.right = true;
    }
    if (!lE.branch || lE.branch !== "web") {
      lc(
        "web",
        gh < 0 ? "slide left" : gh > 0 ? "slide right" : "hold the strand",
        "riding a web strand",
      );
    }
    return;
  }
  let ii =
    /heartblue/i.test(ia) ||
    (c.movement >= 11 && c.movement <= 13) ||
    Math.abs(hz.gravity || 0) > 0.001;
  if (!hA && ii) {
    ll.mode = "blue-platform";
    let gZ = Math.max(iy, 45);
    let gj = i0 ? i0[3] : 480;
    let gL = hz.jumpstage !== undefined ? hz.jumpstage === 1 : iV + i8 >= gj - 3;
    let gf = 6;
    let gD = [];
    for (let gb of w.list) {
      if (gb.destroyed || !gb.is || !gb.is("obj_boneplat")) {
        continue;
      }
      let gd = gb.len === undefined ? 50 : gb.len;
      gD.push({
        l: gb.x - gd + 2,
        r: gb.x + gd - 2,
        top: gb.y,
        land: gb.y - 16,
      });
    }
    let gO = gL && Math.abs(hz.vspeed || 0) < 0.001;
    let gx = !gL && (hz.vspeed || 0) <= -1;
    let gC = null;
    let gB = -Infinity;
    for (let gw of [-1, 0, 1]) {
      for (let gp of gO || gx ? [0, 1] : [0]) {
        let gq = iV;
        let gK = gO && gp ? -gf : hz.vspeed || 0;
        let gz = i9;
        let gH = gZ;
        for (let gQ = 1; gQ <= gZ; gQ++) {
          if (!gp && gK <= -1) {
            gK = -1;
          }
          gK += lI(gK);
          gq += gK;
          gz += gw * iJ;
          if (gq + i8 > gj) {
            gq = gj - i8;
            gK = 0;
          }
          if (gK >= 0 && gD.length) {
            let n0 = gq - gK - i8;
            for (let n1 = 0; n1 < gD.length; n1++) {
              let n2 = gD[n1];
              if (
                !(gz < n2.l - i7) &&
                !(gz > n2.r + i7) &&
                n0 <= n2.top - 11 &&
                gq - i8 >= n2.land - 0.5
              ) {
                gq = n2.land + i8;
                gK = 0;
                break;
              }
            }
          }
          if (i0) {
            gz = Math.max(i0[0] + i7, Math.min(i0[2] - i7, gz));
          }
          let gA = false;
          for (let n3 = 0; n3 < i1.length; n3++) {
            let n4 = i1[n3];
            if ((n4.t0 !== undefined && gQ < n4.t0) || (n4.ttl !== undefined && gQ > n4.ttl)) {
              continue;
            }
            let n5 = n4.path ? n4.path(gQ) : null;
            let n6 = n5 ? n5[0] : n4.x + n4.vx * gQ + (n4.ax || 0) * 0.5 * gQ * gQ;
            let n7 = n5 ? n5[1] : n4.y + n4.vy * gQ + (n4.ay || 0) * 0.5 * gQ * gQ;
            if (Math.abs(gz - n6) < i7 + n4.hw && Math.abs(gq - n7) < i8 + n4.hh) {
              gA = true;
              break;
            }
          }
          if (gA) {
            gH = gQ - 1;
            break;
          }
        }
        let gX = gH * 2;
        if (gH >= gZ && gw === 0 && !gp) {
          gX += 1;
        }
        if (gX > gB) {
          gB = gX;
          gC = {
            mx: gw,
            jump: gp,
          };
        }
      }
    }
    lR();
    r.held.b1 = false;
    r.pressed.b1 = false;
    ll.plan = gC;
    ll.score = gB;
    ll.dir = gC ? [gC.mx, gC.jump ? -1 : 0] : null;
    if (gC) {
      let n8 = hz.movement;
      let n9 = n8 === 11 || n8 === 12 || n8 === 13;
      let nV = n8 === 11 ? "left" : n8 === 12 ? "down" : n8 === 13 ? "right" : "up";
      if (n9) {
        if (n8 === 12) {
          if (gC.mx < 0) {
            r.held.left = true;
          }
          if (gC.mx > 0) {
            r.held.right = true;
          }
        } else {
          if (gC.mx < 0) {
            r.held.up = true;
          }
          if (gC.mx > 0) {
            r.held.down = true;
          }
        }
      } else {
        if (gC.mx < 0) {
          r.held.left = true;
        }
        if (gC.mx > 0) {
          r.held.right = true;
        }
      }
      if (gC.jump) {
        r.held[nV] = true;
      }
      lc(
        "gravity",
        gC.jump ? "jump" : gC.mx < 0 ? "run left" : gC.mx > 0 ? "run right" : "hold ground",
        gC.jump ? "clearing it" : "on the floor",
      );
    }
    return;
  }
  let ig = 0;
  let iS = -Infinity;
  for (let ny = 0; ny < lh.length; ny++) {
    let nJ = lh[ny][0];
    let nP = lh[ny][1];
    if (hA && ny !== 0 && ny % 2 === 0) {
      continue;
    }
    if (hA) {
      let nn = li.gsteps;
      let nS = lK(hK, hX, hQ, hH, i9 + nJ * iJ * nn, iV + nP * iJ * nn);
      if (ny === lt) {
        nS += li.gkeep;
      }
      if (ny === 0) {
        nS += li.gstay;
      }
      if (nS > iS) {
        iS = nS;
        ig = ny;
      }
      continue;
    }
    if (ny !== 0 && lT.has(ny)) {
      continue;
    }
    let na = (nJ > 0 && lU.right) || (nJ < 0 && lU.left) ? 0 : nJ;
    let nl = (nP > 0 && lU.down) || (nP < 0 && lU.up) ? 0 : nP;
    if (ny !== 0 && Math.abs(na) < 0.3 && Math.abs(nl) < 0.3) {
      continue;
    }
    if (i0 && ny !== 0) {
      let nt = Math.max(i0[0] + i7, Math.min(i0[2] - i7, i9 + nJ * iJ));
      let nk = Math.max(i0[1] + i8, Math.min(i0[3] - i8, iV + nP * iJ));
      if (Math.abs(nt - i9) < 0.01 && Math.abs(nk - iV) < 0.01) {
        continue;
      }
    }
    let nh = iP;
    let ni = Infinity;
    for (let nF = 1; nF <= iP; nF++) {
      let nN = i9 + na * iJ * nF;
      let nW = iV + nl * iJ * nF;
      if (i0) {
        nN = Math.max(i0[0] + i7, Math.min(i0[2] - i7, nN));
        nW = Math.max(i0[1] + i8, Math.min(i0[3] - i8, nW));
      }
      let nT = false;
      for (let nU = 0; nU < i1.length; nU++) {
        let nG = i1[nU];
        if (
          (nG.t0 !== undefined && nF < nG.t0) ||
          (nG.ttl !== undefined && nF > nG.ttl) ||
          (nG.blueOnly && ny === 0)
        ) {
          continue;
        }
        let nE = nG.path ? nG.path(nF) : null;
        let nv = nE ? nE[0] : nG.x + nG.vx * nF;
        let nc = nE ? nE[1] : nG.y + nG.vy * nF;
        let nu = Math.abs(nN - nv) - (i7 + nG.hw);
        let no = Math.abs(nW - nc) - (i8 + nG.hh);
        let nR = Math.max(nu, no);
        if (nR < ni) {
          ni = nR;
        }
        if (nu < 0 && no < 0) {
          nT = true;
          break;
        }
      }
      if (nT) {
        nh = nF - 1;
        break;
      }
    }
    if (!Number.isFinite(ni)) {
      ni = 200;
    }
    let ng = nh * 2 + Math.max(-40, Math.min(200, ni)) * li.room;
    if (nh >= iP) {
      if (ny === 0) {
        ng += li.stay;
      }
      if (ny === lt && ny !== 0) {
        ng += li.keep;
      }
      let nM = i9 + nJ * iJ * iP;
      let nm = iV + nP * iJ * iP;
      let nY = i0 ? (i0[0] + i0[2]) / 2 : 320;
      let nI = i0 ? (i0[1] + i0[3]) / 2 : 240;
      let nZ = i0 ? Math.max(1, (i0[2] - i0[0]) / 2) : 160;
      let nj = i0 ? Math.max(1, (i0[3] - i0[1]) / 2) : 120;
      ng += (1 - Math.min(1, Math.hypot((nM - nY) / nZ, (nm - nI) / nj))) * li.centre;
    }
    if (ng > iS) {
      iS = ng;
      ig = ny;
    }
  }
  if (lk > 0 && !hA) {
    let nL = lh[lt];
    let nf = iP;
    for (let nD = 1; nD <= iP; nD++) {
      let nO = i9 + nL[0] * iJ * nD;
      let nx = iV + nL[1] * iJ * nD;
      if (i0) {
        nO = Math.max(i0[0] + i7, Math.min(i0[2] - i7, nO));
        nx = Math.max(i0[1] + i8, Math.min(i0[3] - i8, nx));
      }
      let nC = false;
      for (let nB = 0; nB < i1.length; nB++) {
        let nb = i1[nB];
        if (
          (nb.t0 !== undefined && nD < nb.t0) ||
          (nb.ttl !== undefined && nD > nb.ttl) ||
          (nb.blueOnly && lt === 0)
        ) {
          continue;
        }
        let nd = nb.path ? nb.path(nD) : null;
        let nw = nd ? nd[0] : nb.x + nb.vx * nD;
        let np = nd ? nd[1] : nb.y + nb.vy * nD;
        if (Math.abs(nO - nw) < i7 + nb.hw && Math.abs(nx - np) < i8 + nb.hh) {
          nC = true;
          break;
        }
      }
      if (nC) {
        nf = nD - 1;
        break;
      }
    }
    if (nf >= iP) {
      ig = lt;
      lk--;
    } else {
      lk = 0;
    }
  }
  if (ig !== lt) {
    lk = li.commit;
  }
  lt = ig;
  ll.best = ig;
  ll.dir = lh[ig];
  ll.score = iS;
  ll.commit = lk;
  ll.blocked = [...lT.keys()];
  lR();
  let [ik, iF] = lh[ig];
  lc(
    "dodge",
    ig === 0
      ? "hold position"
      : Math.abs(iF) < 0.3
        ? ik < 0
          ? "left"
          : "right"
        : Math.abs(ik) < 0.3
          ? iF < 0
            ? "up"
            : "down"
          : (iF < 0 ? "up" : "down") + "-" + (ik < 0 ? "left" : "right"),
    ig === 0 ? "this square is clear" : "threading the gap",
  );
  if (ik < -0.3) {
    r.held.left = true;
  }
  if (ik > 0.3) {
    r.held.right = true;
  }
  if (iF < -0.3) {
    r.held.up = true;
  }
  if (iF > 0.3) {
    r.held.down = true;
  }
  lG.left = !!r.held.left;
  lG.right = !!r.held.right;
  lG.up = !!r.held.up;
  lG.down = !!r.held.down;
}
K(hb, "autoplayStep");
function hd() {
  let V = (y) => (Number.isFinite(y) ? Math.round(y * 100) / 100 : String(y));
  return (
    "ap calls " +
    lW +
    " dir " +
    lt +
    " commit " +
    lk +
    " obs " +
    V(lF) +
    " last " +
    (lN ? V(lN[0]) + "," + V(lN[1]) : "-") +
    " bk " +
    JSON.stringify(lU) +
    " hl " +
    JSON.stringify(lG) +
    " bd " +
    lT.size +
    " ui " +
    lz +
    " menu " +
    (h1 ? 1 : 0) +
    " syn " +
    hF.b1 +
    (hF.zHeld || hF.xHeld || hF.edges
      ? " z " + (hF.zHeld ? 1 : 0) + (hF.xHeld ? 1 : 0) + hF.edges
      : "") +
    " fire " +
    hm +
    " box " +
    hZ +
    " " +
    V6() +
    " " +
    y3() +
    " mercy " +
    h2.on +
    "/" +
    h2.heals
  );
}
K(hd, "autoplayStateDigest");
function hw() {
  return {
    lastDir: lt,
    commitLeft: lk,
    obsSpeed: lF,
    lastPos: lN ? lN.slice() : null,
    stepCalls: lW,
    blockedDir: [...lT],
    blockedKey: {
      ...lU,
    },
    heldLast: {
      ...lG,
    },
    uiTick: lz,
    menuPlan: h1
      ? {
          frames: h1.frames.slice(),
          i: h1.i,
        }
      : null,
    syn: {
      ...hF,
    },
    fireClock: hm,
    boxClock: hZ,
    lastPunch: hL,
    boxAttack: {
      last: hD.last,
      windup: {
        ...hD.windup,
      },
    },
    ch4: V3(),
    ch5: VA(),
    ut: JF(),
    mercy: hP(h2),
  };
}
K(hw, "saveAutoplayState");
function hp(V) {
  if (V) {
    lt = V.lastDir;
    lk = V.commitLeft;
    lF = V.obsSpeed;
    lN = V.lastPos ? V.lastPos.slice() : null;
    lW = V.stepCalls;
    lT.clear();
    for (let [y, hK] of V.blockedDir) {
      lT.set(y, hK);
    }
    Object.assign(lU, V.blockedKey);
    Object.assign(lG, V.heldLast);
    lz = V.uiTick;
    h1 = V.menuPlan
      ? {
          frames: V.menuPlan.frames.slice(),
          i: V.menuPlan.i,
        }
      : null;
    hF.b1 = V.syn.b1;
    hF.pulse = V.syn.pulse;
    hF.zHeld = !!V.syn.zHeld;
    hF.zPrev = !!V.syn.zPrev;
    hF.xHeld = !!V.syn.xHeld;
    hF.xPrev = !!V.syn.xPrev;
    hF.edges = V.syn.edges || "";
    hm = V.fireClock;
    hZ = V.boxClock;
    hL = V.lastPunch;
    hD.last = V.boxAttack.last;
    hD.windup = {
      ...V.boxAttack.windup,
    };
    if (V.ch4) {
      V4(V.ch4);
    } else {
      V5();
    }
    if (V.ch5) {
      y1(V.ch5);
    } else {
      y2();
    }
    JN(V.ut);
    hl(V.mercy);
  }
}
K(hp, "loadAutoplayState");
function hq() {
  lt = 0;
  lk = 0;
  lF = 3;
  lN = null;
  lW = 0;
  lT.clear();
  for (let V of ["left", "right", "up", "down"]) {
    lU[V] = 0;
    lG[V] = false;
  }
  lz = 0;
  h1 = null;
  hF.b1 = false;
  hF.pulse = null;
  hF.zHeld = false;
  hF.zPrev = false;
  hF.xHeld = false;
  hF.xPrev = false;
  hF.edges = "";
  hG = "";
  hm = 0;
  hZ = 0;
  hL = "b2";
  hD.last = -1;
  hD.windup = {};
  V5();
  y2();
  JW();
  hl(null);
}
K(hq, "resetAutoplayState");
export {
  X as a,
  VJ as b,
  VG as c,
  VE as d,
  Vv as e,
  Vc as f,
  y7 as g,
  y8 as h,
  y9 as i,
  J5 as j,
  Jl as k,
  l6 as l,
  l7 as m,
  l9 as n,
  lP as o,
  la as p,
  ll as q,
  li as r,
  lg as s,
  lS as t,
  lv as u,
  lu as v,
  lo as w,
  lm as x,
  lB as y,
  lp as z,
  h0 as A,
  hE as B,
  hv as C,
  hu as D,
  hf as E,
  hb as F,
  hd as G,
  hw as H,
  hp as I,
  hq as J,
};
