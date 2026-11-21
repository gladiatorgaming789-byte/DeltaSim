(function (D, P) {
  const At = D();
  function AI(AZ, AW, Ak) {
    return L(AZ - 789, Ak);
  }
  function AE(AZ, AW, Ak) {
    return L(AZ - -931, AW);
  }
  function AC(AZ, AW, Ak) {
    return L(AZ - 618, Ak);
  }
  while (true) {
    try {
      const AZ =
        parseInt(AE(-216, "]7)2", -119)) / 1 +
        -parseInt(AE(-135, "w@ja", -101)) / 2 +
        parseInt(AE(-119, "xPFC", 14)) / 3 +
        (parseInt(AE(-326, "jj$U", -442)) / 4) * (-parseInt(AC(1361, 1505, "o4G6")) / 5) +
        (-parseInt(AE(-357, "V#1z", -520)) / 6) * (-parseInt(AI(1508, 1595, "Ge])")) / 7) +
        (parseInt(AI(1413, 1580, "o^H7")) / 8) * (parseInt(AI(1324, 1305, "jj$U")) / 9) +
        -parseInt(AI(1386, 1572, "EF2e")) / 10;
      if (AZ === P) {
        break;
      } else {
        At.push(At.shift());
      }
    } catch (AW) {
      At.push(At.shift());
    }
  }
})(A3, 214973);
function L(At, AI) {
  At = At - 485;
  const AE = A3();
  let AC = AE[At];
  if (L.CINaBg === undefined) {
    function AZ(AR) {
      const Ai = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let AT = "";
      let As = "";
      for (
        let Ah = 0, D0, D1, D2 = 0;
        (D1 = AR.charAt(D2++));
        ~D1 && ((D0 = Ah % 4 ? D0 * 64 + D1 : D1), Ah++ % 4)
          ? (AT += String.fromCharCode((D0 >> ((Ah * -2) & 6)) & 255))
          : 0
      ) {
        D1 = Ai.indexOf(D1);
      }
      for (let D3 = 0, D4 = AT.length; D3 < D4; D3++) {
        As += "%" + ("00" + AT.charCodeAt(D3).toString(16)).slice(-2);
      }
      return decodeURIComponent(As);
    }
    const AU = function (AR, Ai) {
      let AT = [];
      let As = 0;
      let Ah;
      let D0 = "";
      AR = AZ(AR);
      let D1;
      for (D1 = 0; D1 < 256; D1++) {
        AT[D1] = D1;
      }
      for (D1 = 0; D1 < 256; D1++) {
        As = (As + AT[D1] + Ai.charCodeAt(D1 % Ai.length)) % 256;
        Ah = AT[D1];
        AT[D1] = AT[As];
        AT[As] = Ah;
      }
      D1 = 0;
      As = 0;
      for (let D2 = 0; D2 < AR.length; D2++) {
        D1 = (D1 + 1) % 256;
        As = (As + AT[D1]) % 256;
        Ah = AT[D1];
        AT[D1] = AT[As];
        AT[As] = Ah;
        D0 += String.fromCharCode(AR.charCodeAt(D2) ^ AT[(AT[D1] + AT[As]) % 256]);
      }
      return D0;
    };
    L.TATBmd = AU;
    L.ppbXme = {};
    L.CINaBg = true;
  }
  const AW = AE[0];
  if (L.OEWeKp !== AW) {
    L.ppbXme = {};
    L.OEWeKp = AW;
  }
  const Ak = L.ppbXme[At];
  if (Ak === undefined) {
    if (L.THRfXN === undefined) {
      L.THRfXN = true;
    }
    AC = L.TATBmd(AC, AI);
    L.ppbXme[At] = AC;
  } else {
    AC = Ak;
  }
  return AC;
}
const f = (function () {
  const D = {};
  function P(AZ, AW, Ak) {
    return L(AW - 160, AZ);
  }
  D[AE("GrI%", 1198, 1086)] = function (AZ, AW) {
    return AZ !== AW;
  };
  function At(AZ, AW, Ak) {
    return L(Ak - -448, AW);
  }
  D[AE("EF2e", 1277, 1437)] = P("V#1z", 946, 837);
  D[P(")A^Y", 829, 877)] = P("V#1z", 768, 951);
  const AI = D;
  function AE(AZ, AW, Ak) {
    return L(AW - 438, AZ);
  }
  let AC = true;
  return function (AZ, AW) {
    function Ak(Ai, AT, As) {
      return AE(AT, As - -1001, As - 247);
    }
    function AU(Ai, AT, As) {
      return AE(AT, As - -1424, As - 134);
    }
    function AR(Ai, AT, As) {
      return AE(AT, Ai - 297, As - 404);
    }
    if (AI[Ak(-140, "k9C@", 47)](AI[Ak(-101, "%DX#", 8)], AI[Ak(287, "jj$U", 133)])) {
      const Ai = AC
        ? function () {
            function AT(As, Ah, D0) {
              return AR(Ah - -1495, As, D0 - 60);
            }
            if (AW) {
              const As = AW[AT("o4G6", -184, -68)](AZ, arguments);
              AW = null;
              return As;
            }
          }
        : function () {};
      AC = false;
      return Ai;
    } else {
      let AT = null;
      if (AG.dmgwriter) {
        AT = Az.dmgwriter(AX.monsterx[AQ], An.monstery[AJ] + 20 - Ae.hittarget[Ap] * 20);
        AT.type = Ag(Aj.char[Ar]);
        if (Av.chapter >= 2 && Ad === 5 && !AS.char[5]) {
          AT.type = 5;
        }
        AT.damage = Aa;
      }
      Ax.monsterhp[Ay] -= Ao;
      let As = AY.monsterinstance(Ab);
      if (At.chapter === 5 && As && typeof As.callback_on_damage == "function") {
        As.callback_on_damage(As);
      }
      if (AI > 0 && As) {
        As.shakex = 9;
        As.state = 3;
        As.hurttimer = 30;
        As.hurtamt = AE;
      }
      AC.hittarget[AZ] += 1;
      if (AW === 0 && As) {
        As.hurtamt = 0;
        if (As.hurttimer <= 15 && As.candodge === 1) {
          As.dodgetimer = 0;
          As.state = 4;
        }
      }
      if (Ak.chapter === 2 && AU.first("obj_sweet_enemy") && AR.monsterhp[Ai] <= 0) {
        AT.monsterhp[As] = 1;
      }
      let Ah = Ah.first("obj_queen_enemy")
        ? 1
        : D0.first("obj_spamton_neo_enemy")
          ? 2
          : D1.first("obj_berdlyb_enemy")
            ? 3
            : 0;
      if (D2.monsterhp[D3] <= 0 && Ah === 0 && As) {
        As.scr_monsterdefeat();
      }
      if (D4.monsterhp[D5] <= 0 && Ah === 3 && As) {
        As.endcon = 1;
      }
      return AT;
    }
  };
})();
const m = f(this, function () {
  const D = {
    zlMtz: function (D4, D5) {
      return D4 < D5;
    },
    FtsBQ: function (D4, D5) {
      return D4 == D5;
    },
    KjJYy: function (D4, D5) {
      return D4 != D5;
    },
    cCMMF: function (D4, D5) {
      return D4 + D5;
    },
    MPfRQ: function (D4, D5) {
      return D4 != D5;
    },
    YeuCb: function (D4, D5) {
      return D4 < D5;
    },
    nakSb: function (D4, D5) {
      return D4 !== D5;
    },
    CNMoY: AE(1109, "]7)2", 1100),
    ADjSZ: function (D4, D5) {
      return D4 < D5;
    },
    qkZkc: function (D4, D5) {
      return D4 !== D5;
    },
    yaClw: At(")A^Y", 954, 1028),
    rmyZF: AE(1197, "HP&f", 1166),
    fiyCl: function (D4, D5) {
      return D4 == D5;
    },
    hUEjn: function (D4, D5) {
      return D4 != D5;
    },
    PzOpY: AE(1188, "042v", 1013),
    HeQXL: At("INTk", 862, 914),
    aGEkK: function (D4, D5) {
      return D4 === D5;
    },
    pNKTi: At("vVhS", 969, 867),
    DMEMD: AE(1332, "](a%", 1369),
    UGoLA: function (D4, D5, D6, D7) {
      return D4(D5, D6, D7);
    },
    fisVC: function (D4, D5) {
      return D4 == D5;
    },
    Sjeqm: function (D4, D5) {
      return D4 != D5;
    },
    vwnCI: function (D4, D5) {
      return D4 + D5;
    },
    yGTqe: function (D4, D5) {
      return D4 === D5;
    },
    JFrGc: AW("GrI%", -65, 3),
    zVVHR: At("HP&f", 887, 822),
    SfQCb: function (D4, D5, D6, D7) {
      return D4(D5, D6, D7);
    },
    AqZsS: At("YrSY", 969, 1140),
    yrnCb: AW("HP&f", -248, -107),
    Xrbxt: function (D4, D5, D6, D7) {
      return D4(D5, D6, D7);
    },
    zJoiV: function (D4, D5) {
      return D4 !== D5;
    },
    tlUiH: AE(1233, "jj$U", 1175),
    iOOWn: function (D4, D5) {
      return D4 === D5;
    },
    pNcBD: At("Ge])", 949, 933),
    zInMV: function (D4, D5) {
      return D4 === D5;
    },
    oOJFr: AW("UWS3", -36, -214),
    IiqxC: function (D4, D5) {
      return D4 === D5;
    },
    SDqvn: At("$eWn", 731, 861),
    gaeFI: AE(1062, "g#D4", 1167),
    OvtIR: At("@$l2", 1003, 1064),
    NtSgz: AW("CcE[", -192, -196),
    wVxoB: AE(1048, "o^H7", 924),
    fEQod: AE(1119, "Q$y]", 1285),
    QtPCC: At("qGGd", 935, 1005),
    GjtUu: function (D4, D5) {
      return D4 === D5;
    },
    qMLct: function (D4, D5) {
      return D4 === D5;
    },
    IYfHk: function (D4, D5) {
      return D4 === D5;
    },
    FHLyp:
      AW("N[Z6", -78, -219) +
      AE(1333, "Ge])", 1445) +
      At("h)*k", 954, 935) +
      AE(1144, "7&hl", 1268) +
      AE(1194, "o^H7", 1341) +
      AW("N[Z6", -24, 63) +
      AW("CYWh", -193, -310) +
      AE(1213, "N[Z6", 1382) +
      AW("qGGd", -257, -305) +
      At("]7)2", 857, 899) +
      At("o4G6", 1004, 969) +
      AE(1358, "EF2e", 1528) +
      AW("N[Z6", -199, -234) +
      AW("g!Oj", -254, -160) +
      AW("N[Z6", -278, -449) +
      AE(1155, "](a%", 1006) +
      At("](a%", 844, 770) +
      AE(1229, "g#D4", 1252) +
      AW("GrI%", 25, 102) +
      At("YrSY", 1184, 1053),
    zMjMK:
      At("Yryp", 1015, 1118) +
      AW("]7)2", -88, -87) +
      AW("6ZZZ", -251, -408) +
      At("[U9i", 1168, 1124) +
      At("a]hn", 1057, 1068) +
      AW("Yryp", -253, -356) +
      At("0wVm", 1105, 1072) +
      AW("NFDc", -71, 23) +
      AE(1126, "E@RR", 981) +
      AW("]7)2", -143, -260) +
      At("UWS3", 895, 857) +
      At("UWS3", 1118, 1008) +
      AW("J^s[", -4, 32) +
      AW("^WDC", -115, -288) +
      AE(1284, "xPFC", 1107) +
      At("4Kd*", 976, 837) +
      At("UWS3", 1032, 942) +
      AE(1154, "YrSY", 1185) +
      AW("a]hn", -1, 131) +
      AW("4Kd*", -46, -226) +
      AE(1160, "jj$U", 1209) +
      AE(1217, "o^H7", 1117) +
      AW("V#1z", -90, -152) +
      At("7&hl", 744, 911) +
      At("Yryp", 829, 839) +
      AW("6ZZZ", -44, 43) +
      At("a]hn", 881, 791) +
      AW("YH)I", -289, -342) +
      AW("UWS3", -23, -138),
    YpQIt: AE(1227, "4Kd*", 1057),
    RUwoN: AE(1379, "h*Bb", 1445),
    GgZOq: AW("%DX#", -135, -73),
    FPFBh: function (D4, D5) {
      return D4 !== D5;
    },
    KsRRz: AE(1380, "YH)I", 1355),
    GByMb: function (D4, D5) {
      return D4 === D5;
    },
    TxaYy: AE(1322, "7&hl", 1230),
    YlHTj: function (D4, D5, D6, D7) {
      return D4(D5, D6, D7);
    },
    HqZwL: function (D4, D5) {
      return D4 > D5;
    },
    OqfBt: function (D4, D5) {
      return D4 !== D5;
    },
    MAFFh: AE(1311, "[U9i", 1281),
    dVtVz: function (D4, D5, D6, D7) {
      return D4(D5, D6, D7);
    },
    ghyFJ: AE(1178, "](a%", 1365),
    JiYYw: AE(1328, "Ge])", 1421),
    qEeNd: function (D4, D5) {
      return D4 || D5;
    },
    LymzV: function (D4, D5) {
      return D4 !== D5;
    },
    QywqW: AW("UWS3", -48, -42),
    SzzUa: AE(1248, "NFDc", 1279),
    bLpeY: function (D4, D5) {
      return D4 === D5;
    },
    JVWKf: function (D4, D5) {
      return D4 - D5;
    },
    MsAcN: AW("pxSS", 30, -81),
    GLGFR: At("UWS3", 1254, 1097),
    rSILh: function (D4, D5) {
      return D4 == D5;
    },
    nZErN: function (D4, D5) {
      return D4 === D5;
    },
    JpsJw: function (D4, D5) {
      return D4 !== D5;
    },
    gnrvI: AE(1301, "E@RR", 1149),
    gwWeZ: At("EF2e", 971, 812) + AW("k9C@", -244, -102) + AE(1415, "w@ja", 1513),
    AhrVk:
      AE(1258, "jj$U", 1256) +
      At("](a%", 858, 852) +
      AE(1108, "Ge])", 1023) +
      AE(1199, "N[Z6", 1189),
  };
  const P = D[At("GrI%", 823, 797)](typeof window, D[AW("6ZZZ", -27, -207)])
    ? window
    : D[At("4Kd*", 894, 1046)](typeof process, D[AE(1290, "N[Z6", 1419)]) &&
        D[AW("g!Oj", -203, -148)](typeof require, D[AE(1200, "CYWh", 1152)]) &&
        D[AE(1418, "o^H7", 1510)](typeof global, D[AE(1092, "jj$U", 1166)])
      ? global
      : this;
  function At(D4, D5, D6) {
    return L(D6 - 280, D4);
  }
  const AI = new RegExp(D[At("](a%", 636, 779)], "g");
  function AE(D4, D5, D6) {
    return L(D4 - 561, D5);
  }
  const AC = D[AE(1343, ")A^Y", 1359)][AE(1368, "YrSY", 1454)](AI, "")[AE(1130, "k9C@", 1221)](";");
  let AZ;
  function AW(D4, D5, D6) {
    return L(D5 - -778, D4);
  }
  let Ak;
  let AU;
  let AR;
  const Ai = function (D4, D5, D6) {
    if (D[D9(537, "^WDC", 422)](D4[D9(418, "jj$U", 558)], D5)) {
      return false;
    }
    for (let DA = 0; D[D8(1138, 1166, "g#D4")](DA, D5); DA++) {
      if (D[D8(1248, 1281, "UWS3")](D[D9(524, "jZtt", 568)], D[D8(1433, 1422, "g#D4")])) {
        for (let DD = 0; D[D8(1290, 1207, "UWS3")](DD, Ah[D7(929, 1018, "]7)2")]); DD += 2) {
          if (
            D[D9(241, "h*Bb", 419)](D5, D6[DD]) &&
            D[D9(504, "k9C@", 425)](
              DA[D7(1559, 1376, "a]hn")](AD),
              DD[D[D9(690, "Ge])", 544)](DD, 1)],
            )
          ) {
            return false;
          }
        }
      } else {
        for (let DP = 0; D[D8(1179, 1070, "vVhS")](DP, D6[D9(298, "CYWh", 232)]); DP += 2) {
          if (D[D7(1173, 1361, "YrSY")](D[D8(1233, 1236, "a]hn")], D[D8(1260, 1429, "N[Z6")])) {
            if (
              D[D7(1095, 1234, "CcE[")](DA, D6[DP]) &&
              D[D7(1120, 1282, "V#1z")](
                D4[D9(523, "$eWn", 559)](DA),
                D6[D[D8(1286, 1294, "$eWn")](DP, 1)],
              )
            ) {
              if (D[D9(603, "NFDc", 503)](D[D9(529, "GrI%", 570)], D[D9(310, "g!Oj", 311)])) {
                return false;
              } else {
                const DN =
                  AR[D8(1308, 1479, ")A^Y") + "r"][D8(1147, 1335, "hnFV")][D9(154, "h*Bb", 256)](
                    Ai,
                  );
                const DO = AT[As];
                const DH = Ah[DO] || DN;
                DN[D7(1252, 1236, "042v")] = D0[D7(1116, 1126, "mt%1")](D1);
                DN[D7(1178, 1262, "](a%")] = DH[D9(436, "[U9i", 605)][D7(1455, 1385, "NFDc")](DH);
                D2[DO] = DN;
              }
            }
          } else {
            let DL = AC(AZ, Ak.maxtension);
            if (DL) {
              return DL;
            }
          }
        }
      }
    }
    function D7(Dw, Df, Dm) {
      return AE(Df - -35, Dm, Dm - 291);
    }
    function D8(Dw, Df, Dm) {
      return AE(Dw - 26, Dm, Dm - 89);
    }
    function D9(Dw, Df, Dm) {
      return AE(Dm - -817, Df, Dm - 191);
    }
    return true;
  };
  const AT = function (D4, D5, D6) {
    function D7(DA, DD, DP) {
      return AW(DA, DP - 156, DP - 3);
    }
    function D8(DA, DD, DP) {
      return AW(DP, DA - 1773, DP - 17);
    }
    function D9(DA, DD, DP) {
      return AW(DP, DA - 1695, DP - 184);
    }
    if (D[D9(1445, 1582, "k9C@")](D[D8(1540, 1543, "J^s[")], D[D8(1591, 1728, "g#D4")])) {
      for (let DA = 0; DA < Ah.min(3, D0()); DA++) {
        if (D1.charcantarget[DA] === 1) {
          D2.targeted[DA] = 1;
        }
      }
      AT.mytarget = 3;
      As.target = 3;
    } else {
      return D[D8(1846, 1817, "g#D4")](Ai, D5, D6, D4);
    }
  };
  const As = function (D4, D5, D6) {
    function D7(DA, DD, DP) {
      return At(DP, DD - 454, DA - -127);
    }
    function D8(DA, DD, DP) {
      return At(DA, DD - 166, DP - -862);
    }
    function D9(DA, DD, DP) {
      return At(DP, DD - 140, DD - -1070);
    }
    if (D[D7(929, 808, "HP&f")](D[D7(955, 965, "$eWn")], D[D7(832, 882, "@$l2")])) {
      if (
        D[D9(-87, 23, "k9C@")](i, AR[Ai]) &&
        D[D9(-130, -189, "](a%")](AT[D7(760, 773, "V#1z")](As), Ah[D[D7(802, 918, "J^s[")](D0, 1)])
      ) {
        return false;
      }
    } else {
      return D[D7(803, 861, ")A^Y")](AT, D5, D4, D6);
    }
  };
  const Ah = function (D4, D5, D6) {
    function D7(DA, DD, DP) {
      return AE(DD - 408, DA, DP - 219);
    }
    function D8(DA, DD, DP) {
      return AE(DP - -489, DA, DP - 100);
    }
    function D9(DA, DD, DP) {
      return AE(DA - 273, DD, DP - 33);
    }
    if (D[D7("w@ja", 1673, 1486)](D[D9(1456, "042v", 1422)], D[D9(1518, "@$l2", 1498)])) {
      return D[D7("0wVm", 1643, 1615)](As, D5, D6, D4);
    } else {
      for (let DA = D1.length; DA < D2; DA++) {
        D3[DA] = typeof D4 == "function" ? D5() : D6;
      }
      return D0;
    }
  };
  for (let D4 in P) {
    if (D[AE(1390, "YH)I", 1526)](D[At("Yryp", 1063, 878)], D[At("GrI%", 1130, 1021)])) {
      const D5 = D[AW("qGGd", -113, -218)](typeof AT, D[AW("xPFC", -51, -202)])
        ? As
        : D[AE(1189, "hnFV", 1018)](typeof Ah, D[AW("h*Bb", -157, -321)]) &&
            D[AE(1360, "YrSY", 1534)](typeof D0, D[At("INTk", 922, 869)]) &&
            D[AE(1139, "jj$U", 1296)](typeof D1, D[AE(1344, "o^H7", 1443)])
          ? D2
          : this;
      const D6 = (D5[AW("mt%1", -190, -212)] = D5[AW("CYWh", -21, 63)] || {});
      const D7 = [
        D[At("mt%1", 947, 972)],
        D[AW("7&hl", 12, 168)],
        D[AW("HP&f", -32, 145)],
        D[AE(1346, "6ZZZ", 1260)],
        D[AW("Ge])", 11, -83)],
        D[At("E@RR", 955, 896)],
        D[AE(1225, "CYWh", 1091)],
      ];
      for (let D8 = 0; D[AW("vVhS", -255, -352)](D8, D7[AW("xPFC", -136, -199)]); D8++) {
        const D9 = DA[AW("](a%", -166, -202) + "r"][AW("mt%1", 44, 129)][AW("%DX#", 0, -39)](DD);
        const DA = D7[D8];
        const DD = D6[DA] || D9;
        D9[At("KlV6", 1144, 1004)] = AL[AE(1417, "YH)I", 1498)](Aw);
        D9[AE(1075, "Yryp", 1013)] = DD[AE(1102, "NFDc", 1043)][AE(1371, "pxSS", 1410)](DD);
        D6[DA] = D9;
      }
    } else if (D[At("$eWn", 1058, 966)](Ai, D4, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      if (D[AE(1320, "NFDc", 1236)](D[At("P$(z", 793, 784)], D[AE(1063, "YrSY", 1165)])) {
        As.tension += Ah;
        if (D0.tension > D1.maxtension) {
          D2.tension = D3.maxtension;
        }
        if (D4.chapter >= 4 && A8.tensionCap) {
          let DP = AP.tensionCap();
          if (DP != null && AN.tension > DP) {
            AO.tension = DP;
          }
        }
      } else {
        AZ = D4;
        break;
      }
    }
  }
  for (let DN in P[AZ]) {
    if (D[At("o^H7", 632, 816)](D[AE(1341, "A#Ej", 1513)], D[AW("k9C@", -87, -11)])) {
      return;
    } else if (D[AE(1414, "g#D4", 1232)](Ah, 6, DN, [5, 110, 0, 100])) {
      Ak = DN;
      break;
    }
  }
  for (let DO in P[AZ]) {
    if (D[At("EF2e", 654, 817)](D[At("NFDc", 802, 985)], D[AE(1238, "EF2e", 1336)])) {
      if (D[At("mt%1", 1182, 1038)](As, DO, [7, 110, 0, 108], 8)) {
        AU = DO;
        break;
      }
    } else {
      AU.charmove[i] = 1;
      AR.charcantarget[Ai] = 1;
      AT.chardead[As] = 0;
    }
  }
  if (!D[AE(1352, "E@RR", 1255)]("~", Ak)) {
    if (D[AE(1413, "jj$U", 1369)](D[AW("w@ja", -272, -364)], D[AW("pxSS", 38, 186)])) {
      if (AI(AC) >= 0) {
        return 1;
      } else {
        return 0;
      }
    } else {
      for (let DH in P[AZ][AU]) {
        if (D[AW("%DX#", -102, 54)](AT, [7, 101, 0, 104], DH, 8)) {
          if (D[AW("qGGd", 69, -45)](D[AW("Yryp", -252, -139)], D[At("6ZZZ", 940, 824)])) {
            if (!A7.isArray(A8[A9])) {
              AA[AD] = [];
            }
            for (let DL = 0; DL < AM; DL++) {
              if (Al[Ac][DL] === undefined) {
                Aq[AF][DL] = AG;
              }
            }
            Af[Am].length = AB.max(AK[Au].length, AV);
          } else {
            AR = DH;
            break;
          }
        }
      }
    }
  }
  if (!AZ || !P[AZ]) {
    return;
  }
  const D0 = P[AZ][Ak];
  const D1 = !!P[AZ][AU] && P[AZ][AU][AR];
  const D2 = D[AE(1355, "](a%", 1307)](D0, D1);
  if (!D2) {
    if (D[AE(1059, "h*Bb", 895)](D[AE(1114, "$eWn", 980)], D[AE(1296, "vVhS", 1368)])) {
      return;
    } else {
      let Dw = AO.max(4, AH.charbase ? AL.charbase.length : 4);
      Aw.spellname = [];
      Af.spellnameb = [];
      Am.spellcost = [];
      AB.spelldescb = [];
      AK.spelltarget = [];
      for (let Df = 0; Df < Dw; Df++) {
        Aj.spellname[Df] = [];
        Ar.spellnameb[Df] = [];
        Av.spellcost[Df] = [];
        Ad.spelldescb[Df] = [];
        AS.spelltarget[Df] = [];
        if (!Aa.isArray(Ax.spell[Df])) {
          Ay.spell[Df] = new Ao(12).fill(0);
        }
      }
      for (let Dm = 0; Dm < Dw; Dm++) {
        for (let DB = 0; DB < 12; DB++) {
          let DK = Ah(D0.spell[Dm][DB] || 0, Dm);
          D1.spellname[Dm][DB] = DK.spellname;
          D2.spellnameb[Dm][DB] = DK.spellnameb;
          D3.spellcost[Dm][DB] = DK.cost;
          D4.spelldescb[Dm][DB] = DK.spelldescb;
          D5.spelltarget[Dm][DB] = DK.spelltarget;
        }
      }
    }
  }
  let D3 = false;
  for (let Du = 0; D[AW("a]hn", 45, -102)](Du, AC[AW("KlV6", -148, -203)]); Du++) {
    const DV = AC[Du];
    const DM = D[At("jj$U", 902, 842)](DV[0], String[At("Q$y]", 962, 1084) + "de"](46))
      ? DV[AE(1410, "Ge])", 1405)](1)
      : DV;
    const Dl = D[At("g!Oj", 795, 900)](D2[AE(1184, "CcE[", 1365)], DM[AE(1370, "o4G6", 1465)]);
    const Dc = D2[At("^WDC", 900, 906)](DM, Dl);
    const Dq = D[At("KlV6", 890, 950)](Dc, -1) && D[AW("mt%1", 42, -98)](Dc, Dl);
    if (Dq) {
      if (D[AW("7&hl", -260, -316)](D[At("h)*k", 1003, 1029)], D[AE(1277, "N[Z6", 1437)])) {
        if (AI.type === 5) {
          AC = 0;
        }
      } else if (
        D[AW("E@RR", 47, 14)](D2[At("J^s[", 718, 832)], DV[AW("hnFV", -34, -116)]) ||
        D[AW("k9C@", -172, -72)](DV[AE(1397, "$eWn", 1553)]("."), 0)
      ) {
        D3 = true;
      }
    }
  }
  if (!D3) {
    if (D[At("KlV6", 776, 796)](D[AE(1099, "mt%1", 1264)], D[AW("vVhS", -198, -62)])) {
      let DF = D0.charbase[D1] || 1;
      if (!D2.charname[D3]) {
        A7.charname[A8] = A9.charname[DF];
      }
      if (!AA.spell[AD].some(AP)) {
        AN.spell[AO] = AH.spell[DF].slice();
      }
    } else {
      const DG = new RegExp(D[AW("k9C@", -160, -321)], "g");
      const Dz = D[At("Yryp", 1229, 1121)][AW("jZtt", -188, -351)](DG, "");
      P[AZ][AU] = Dz;
    }
  }
});
m();
const B = (function () {
  const D = {
    EvUgl: function (AC, AZ) {
      return AC(AZ);
    },
    qqzfJ: function (AC, AZ, AW) {
      return AC(AZ, AW);
    },
    eESMP: function (AC, AZ) {
      return AC === AZ;
    },
    jeJPB: P(828, "NFDc", 1010),
    fgcha: P(934, "g#D4", 983),
    yWRyE: function (AC, AZ) {
      return AC === AZ;
    },
    HiBHp: AE(67, "Q$y]", 196),
    aEUQp: At("4Kd*", -177, -273),
  };
  function P(AC, AZ, AW) {
    return L(AC - 332, AZ);
  }
  function At(AC, AZ, AW) {
    return L(AW - -864, AC);
  }
  let AI = true;
  function AE(AC, AZ, AW) {
    return L(AC - -695, AZ);
  }
  return function (AC, AZ) {
    function AW(Ai, AT, As) {
      return P(As - 551, AT, As - 426);
    }
    function Ak(Ai, AT, As) {
      return P(Ai - 40, As, As - 466);
    }
    function AU(Ai, AT, As) {
      return P(As - -343, AT, As - 3);
    }
    const AR = {
      aRkqp: function (Ai, AT) {
        function As(Ah, D0, D1) {
          return L(Ah - 135, D0);
        }
        return D[As(674, "EF2e", 659)](Ai, AT);
      },
      nYyFV: D[AU(519, "7&hl", 695)],
      Sczli: D[Ak(1094, 1145, "GrI%")],
    };
    if (D[Ak(1125, 945, "@$l2")](D[AW(1836, "J^s[", 1716)], D[AU(824, "o4G6", 810)])) {
      let Ai = D[AW(1320, "$eWn", 1378)](t, Ai);
      if (!Ai) {
        return null;
      }
      let AT = Ai[AU(930, "Ge])", 768)];
      return {
        spellname: AT[Ak(918, 903, "042v")],
        spellnameb: AT[AU(787, "jj$U", 707)] || AT[AW(1537, "]7)2", 1578)],
        spelltarget: D[Ak(967, 964, "YH)I")](AT, AT),
        cost: D[Ak(933, 936, "V#1z")](T, AT, h),
        spelldescb: AT[Ak(1153, 1029, "w@ja")] || " ",
        spellanim: 0,
      };
    } else {
      const As = AI
        ? function () {
            function Ah(D2, D3, D4) {
              return Ak(D2 - 128, D3 - 198, D4);
            }
            function D0(D2, D3, D4) {
              return Ak(D4 - 365, D3 - 1, D2);
            }
            function D1(D2, D3, D4) {
              return Ak(D4 - 50, D3 - 123, D3);
            }
            if (AZ) {
              if (
                AR[Ah(1005, 931, "o^H7")](AR[Ah(1109, 1008, "h*Bb")], AR[D1(855, "jj$U", 1033)])
              ) {
                let D2 = AN.char[AO];
                let D3 = AH.hp[D2];
                let D4 = 0;
                let D5 = 0;
                if (AL.hp[D2] <= 0) {
                  D5 = 1;
                }
                if (Aw.hp[D2] > Af.maxhp[D2]) {
                  D4 = 1;
                }
                if (D4 === 0) {
                  Am.hp[D2] += AB;
                  if (AK.hp[D2] > Au.maxhp[D2]) {
                    AV.hp[D2] = AM.maxhp[D2];
                  }
                }
                if (D5 === 1 && Al.hp[D2] >= 0) {
                  if (Ac.hp[D2] < Aq(AF.maxhp[D2] / 6)) {
                    AG.hp[D2] = Az(AX.maxhp[D2] / 6);
                  }
                  AQ(An);
                }
                AJ("snd_power");
                return Ae.hp[D2] - D3;
              } else {
                const D6 = AZ[D0("mt%1", 1517, 1395)](AC, arguments);
                AZ = null;
                return D6;
              }
            }
          }
        : function () {};
      AI = false;
      return As;
    }
  };
})();
const u = B(this, function () {
  const D = {};
  function P(Ak, AU, AR) {
    return L(AR - 668, Ak);
  }
  function At(Ak, AU, AR) {
    return L(Ak - 343, AR);
  }
  D[At(1054, 1048, "KlV6")] = function (Ak, AU) {
    return Ak !== AU;
  };
  D[At(980, 1141, "UWS3")] = At(968, 789, "qGGd");
  function AI(Ak, AU, AR) {
    return L(AR - 867, AU);
  }
  D[P("Ge])", 1332, 1500)] = function (Ak, AU) {
    return Ak === AU;
  };
  D[At(916, 778, "hnFV")] = P("YH)I", 1007, 1190);
  D[At(876, 703, "YrSY")] = At(1052, 1142, "CYWh");
  D[P("KlV6", 1438, 1443)] = P("jj$U", 1270, 1300);
  D[AI(1489, ")A^Y", 1515)] = P("N[Z6", 1143, 1161);
  D[At(1095, 983, "jZtt")] = AI(1402, "mt%1", 1521);
  D[At(834, 772, "KlV6")] = AI(1441, "]7)2", 1431);
  D[P("E@RR", 1506, 1351)] = P("A#Ej", 1601, 1433);
  D[AI(1526, "N[Z6", 1508)] = AI(1786, "[U9i", 1709);
  D[AI(1414, "xPFC", 1561)] = P("YH)I", 1422, 1431);
  D[P("@$l2", 1288, 1350)] = function (Ak, AU) {
    return Ak < AU;
  };
  const AE = D;
  const AC = AE[AI(1574, "4Kd*", 1654)](typeof window, AE[At(913, 857, "042v")])
    ? window
    : AE[At(893, 988, "jj$U")](typeof process, AE[P("pxSS", 1314, 1466)]) &&
        AE[P("w@ja", 1275, 1399)](typeof require, AE[AI(1517, "A#Ej", 1614)]) &&
        AE[At(1041, 1112, "J^s[")](typeof global, AE[At(1057, 985, "jZtt")])
      ? global
      : this;
  const AZ = (AC[At(990, 1060, "jj$U")] = AC[At(983, 1067, "INTk")] || {});
  const AW = [
    AE[P("w@ja", 1114, 1154)],
    AE[P("7&hl", 1148, 1236)],
    AE[AI(1519, "042v", 1593)],
    AE[AI(1327, "$eWn", 1430)],
    AE[At(840, 819, "g!Oj")],
    AE[AI(1480, "6ZZZ", 1375)],
    AE[P("mt%1", 1441, 1496)],
  ];
  for (let Ak = 0; AE[P("NFDc", 1516, 1498)](Ak, AW[AI(1418, "mt%1", 1382)]); Ak++) {
    const AU = B[P("]7)2", 1161, 1234) + "r"][At(1003, 1040, "vVhS")][At(883, 995, "o4G6")](B);
    const AR = AW[Ak];
    const Ai = AZ[AR] || AU;
    AU[At(1044, 1198, "g#D4")] = B[AI(1542, "$eWn", 1451)](B);
    AU[AI(1809, "xPFC", 1673)] = Ai[AI(1379, "N[Z6", 1552)][P("UWS3", 1250, 1437)](Ai);
    AZ[AR] = AU;
  }
});
u();
import {
  Ja as V,
  aa as q,
  j as F,
  ob as Q,
  s as n,
  t as J,
  v as p,
  va as g,
} from "./c-ZEHUSSXN.js";
import { a as r, l as v } from "./c-7Q4J33FN.js";
v();
v();
var d = {
  items: {
    1: {
      id: 1,
      ch: 1,
      name: "Darker Candy",
      desc: "Heals#120HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 120,
        bych: {
          1: 40,
          2: 40,
          3: 40,
          4: 120,
          5: 120,
        },
      },
      battle: true,
    },
    2: {
      id: 2,
      ch: 1,
      name: "ReviveMint",
      desc: "Heal#Downed#Ally",
      target: 1,
      usable: 1,
      effect: {
        revive: "mint",
      },
      battle: true,
    },
    3: {
      id: 3,
      ch: 1,
      name: "Glowshard",
      desc: "Sell#at#shops",
      target: 0,
      usable: 0,
      effect: {},
      battle: true,
    },
    4: {
      id: 4,
      ch: 1,
      name: "Manual",
      desc: "Read#out of#battle",
      target: 2,
      usable: 0,
      effect: {},
      battle: true,
    },
    5: {
      id: 5,
      ch: 1,
      name: "BrokenCake",
      desc: "Heals#20HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 20,
      },
      battle: true,
    },
    6: {
      id: 6,
      ch: 1,
      name: "Top Cake",
      desc: "Heals#team#160HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 160,
      },
      battle: true,
    },
    7: {
      id: 7,
      ch: 1,
      name: "Spincake",
      desc: "Heals#team#140HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        bych: {
          1: 80,
          2: 140,
          3: 150,
          4: 160,
          5: 180,
        },
      },
      battle: true,
    },
    8: {
      id: 8,
      ch: 1,
      name: "Darkburger",
      desc: "Heals#70HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 70,
      },
      battle: true,
    },
    9: {
      id: 9,
      ch: 1,
      name: "LancerCookie",
      desc: "Heals#50HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 50,
      },
      battle: true,
    },
    10: {
      id: 10,
      ch: 1,
      name: "GigaSalad",
      desc: "Heals#4HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 4,
      },
      battle: true,
    },
    11: {
      id: 11,
      ch: 1,
      name: "ClubsSandwich",
      desc: "Heals#team#70HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 70,
        bych: {
          1: 30,
          2: 70,
          3: 70,
          4: 70,
          5: 70,
        },
      },
      battle: true,
    },
    12: {
      id: 12,
      ch: 1,
      name: "HeartsDonut",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 20,
          2: 80,
          3: 50,
          4: 30,
        },
      },
      battle: true,
    },
    13: {
      id: 13,
      ch: 1,
      name: "ChocDiamond",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 80,
          2: 20,
          3: 50,
          4: 70,
        },
      },
      battle: true,
    },
    14: {
      id: 14,
      ch: 1,
      name: "Favwich",
      desc: "Heals#ALL HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 500,
      },
      battle: true,
    },
    15: {
      id: 15,
      ch: 1,
      name: "RouxlsRoux",
      desc: "Heals#50 HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 50,
        bych: {
          1: 60,
          2: 50,
          3: 50,
          4: 50,
          5: 50,
        },
      },
      battle: true,
    },
    16: {
      id: 16,
      ch: 2,
      name: "CD Bagel",
      desc: "Heals#80 HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 80,
      },
      battle: true,
    },
    17: {
      id: 17,
      ch: 2,
      name: "Mannequin",
      desc: "Useless",
      target: 0,
      usable: 0,
      effect: {},
      battle: true,
    },
    18: {
      id: 18,
      ch: 2,
      name: "Kris Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 40,
          2: 120,
          3: 120,
          4: 70,
        },
        ch2only: true,
        heal: 10,
      },
      battle: true,
    },
    19: {
      id: 19,
      ch: 2,
      name: "Noelle Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 70,
          2: 120,
          3: 50,
          4: 40,
        },
        ch2only: true,
        heal: 10,
      },
      battle: true,
    },
    20: {
      id: 20,
      ch: 2,
      name: "Ralsei Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 60,
          2: 120,
          3: 40,
          4: 50,
        },
        ch2only: true,
        heal: 10,
      },
      battle: true,
    },
    21: {
      id: 21,
      ch: 2,
      name: "Susie Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 120,
          2: 40,
          3: 120,
          4: 400,
        },
        ch2only: true,
        heal: 10,
      },
      battle: true,
    },
    22: {
      id: 22,
      ch: 2,
      name: "DD-Burger",
      desc: "Heals#60HP 2x",
      target: 1,
      usable: 1,
      replace: 8,
      effect: {
        heal: 60,
        replace: 8,
      },
      battle: true,
    },
    23: {
      id: 23,
      ch: 2,
      name: "LightCandy",
      desc: "Heals#120HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 120,
      },
      battle: true,
    },
    24: {
      id: 24,
      ch: 2,
      name: "ButJuice",
      desc: "Heals#100HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 100,
      },
      battle: true,
    },
    25: {
      id: 25,
      ch: 2,
      name: "SpagettiCode",
      desc: "Heals#team#30HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 30,
      },
      battle: true,
    },
    26: {
      id: 26,
      ch: 2,
      name: "JavaCookie",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 100,
        },
        dflt: 90,
      },
      battle: true,
    },
    27: {
      id: 27,
      ch: 2,
      name: "TensionBit",
      desc: "Raises#TP#32%",
      target: 2,
      usable: 1,
      effect: {
        tp: 80,
      },
      battle: true,
    },
    28: {
      id: 28,
      ch: 2,
      name: "TensionGem",
      desc: "Raises#TP#50%",
      target: 2,
      usable: 1,
      effect: {
        tp: "half",
      },
      battle: true,
    },
    29: {
      id: 29,
      ch: 2,
      name: "TensionMax",
      desc: "Raises#TP#Max",
      target: 2,
      usable: 1,
      effect: {
        tp: "max",
      },
      battle: true,
    },
    30: {
      id: 30,
      ch: 2,
      name: "ReviveDust",
      desc: "Revives#team#25%",
      target: 2,
      usable: 1,
      effect: {
        reviveall: {
          heal: 10,
          deaddiv: 4,
        },
      },
      battle: true,
    },
    31: {
      id: 31,
      ch: 2,
      name: "ReviveBrite",
      desc: "Revives#team#100%",
      target: 2,
      usable: 1,
      effect: {
        reviveall: {
          heal: 50,
          deadheal: 999,
        },
      },
      battle: true,
    },
    32: {
      id: 32,
      ch: 2,
      name: "S.POISON",
      desc: "Hurts#party#member",
      target: 1,
      usable: 1,
      effect: {
        heal: 40,
        poison: 60,
      },
      battle: true,
    },
    33: {
      id: 33,
      ch: 2,
      name: "DogDollar",
      desc: "Not#so#useful",
      target: 0,
      usable: 0,
      effect: {},
      battle: true,
    },
    34: {
      id: 34,
      ch: 3,
      name: "TVDinner",
      desc: "Heals#100HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 100,
      },
      battle: true,
    },
    35: {
      id: 35,
      ch: 3,
      name: "Pipis",
      desc: "Does#nothing",
      target: 1,
      usable: 1,
      effect: {},
      battle: true,
    },
    36: {
      id: 36,
      ch: 3,
      name: "FlatSoda",
      desc: "Heals#20HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 20,
      },
      battle: true,
    },
    37: {
      id: 37,
      ch: 3,
      name: "TVSlop",
      desc: "Heals#80HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 80,
      },
      battle: true,
    },
    38: {
      id: 38,
      ch: 3,
      name: "ExecBuffet",
      desc: "Heals#team#100HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 100,
      },
      battle: true,
    },
    39: {
      id: 39,
      ch: 3,
      name: "DeluxeDinner",
      desc: "Heals#140HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 140,
      },
      battle: true,
    },
    60: {
      id: 60,
      ch: 4,
      name: "AncientSweet",
      desc: "Kris only#+400",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 400,
          2: 40,
          3: 40,
          4: 40,
        },
      },
      battle: true,
    },
    61: {
      id: 61,
      ch: 4,
      name: "Rhapsotea",
      desc: "Heals#115HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 115,
      },
      battle: true,
    },
    62: {
      id: 62,
      ch: 4,
      name: "Scarlixir",
      desc: "Heals#160HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 160,
          2: 160,
          3: 160,
          4: 155,
        },
        noellebonus: 5,
      },
      battle: true,
    },
    63: {
      id: 63,
      ch: 4,
      name: "BitterTear",
      desc: "Heals#All HP",
      target: 1,
      usable: 1,
      effect: {
        revive: "full",
      },
      battle: true,
    },
    40: {
      id: 40,
      ch: 5,
      name: "PunchBowl",
      desc: "Heals#team#200HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 200,
      },
      battle: true,
    },
    41: {
      id: 41,
      ch: 5,
      name: "Flavigne",
      desc: "Heals#130HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 130,
      },
      battle: true,
    },
    42: {
      id: 42,
      ch: 5,
      name: "GreenTea",
      desc: "Heals#180HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 180,
      },
      battle: true,
    },
    43: {
      id: 43,
      ch: 5,
      name: "OrangeJuice",
      desc: "Heals#80HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 80,
      },
      battle: true,
    },
    64: {
      id: 64,
      ch: 5,
      name: "Schadenbrot",
      desc: "Heals#team#200HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 200,
      },
      battle: true,
    },
    65: {
      id: 65,
      ch: 5,
      name: "TreeCake",
      desc: "Heals#team#160HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 160,
      },
      battle: true,
    },
    66: {
      id: 66,
      ch: 5,
      name: "S.POTION",
      desc: "Heals#party#member",
      target: 1,
      usable: 1,
      effect: {
        heal: 200,
      },
      battle: true,
    },
    67: {
      id: 67,
      ch: 5,
      name: "Raw Moon",
      desc: "Raises#TP 16%#+100HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 200,
        },
        dflt: 100,
        tpselect: 0.16,
      },
      battle: true,
    },
    68: {
      id: 68,
      ch: 5,
      name: "Phanta",
      desc: "Raises#TP 16%#+100HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          2: 200,
        },
        dflt: 100,
        tpselect: 0.16,
      },
      battle: true,
    },
    69: {
      id: 69,
      ch: 5,
      name: "FlowerySoda",
      desc: "Raises#TP 16%#+50HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          3: 200,
        },
        dflt: 50,
        tpselect: 0.16,
      },
      battle: true,
    },
    70: {
      id: 70,
      ch: 5,
      name: "Shikacola",
      desc: "Heals#team#80HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 80,
      },
      battle: true,
    },
  },
  weapons: {
    1: {
      id: 1,
      ch: 1,
      chars: [1],
      name: "Wood Blade",
      desc: "A wooden practice blade with a carbon-#reinforced core.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "What's this!? A CHOPSTICK?",
        3: "That's yours, Kris...",
        4: "(It has bite marks...)",
      },
    },
    2: {
      id: 2,
      ch: 1,
      chars: [2],
      name: "Mane Ax",
      desc: "Beginner's ax forged from the#mane of a dragon whelp.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "I'm too GOOD for that.",
        3: "Ummm... it's a bit big.",
        4: "It... smells nice...",
      },
    },
    3: {
      id: 3,
      ch: 1,
      chars: [3],
      name: "Red Scarf",
      desc: "A basic scarf made of lightly#magical fiber.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "No. Just... no.",
        3: "Comfy! Touch it, Kris!",
        4: "Huh? No, I'm not cold.",
      },
    },
    4: {
      id: 4,
      ch: 1,
      chars: [1, 2, 3, 4],
      name: "EverybodyWeapon",
      desc: "It felt right for everyone.",
      at: 12,
      df: 6,
      mag: 8,
      icon: 0,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Uhhh... ok.",
        3: "A perfect fit!",
        4: "Wh... what is this?",
      },
    },
    5: {
      id: 5,
      ch: 1,
      chars: [1],
      name: "Spookysword",
      desc: "A black-and-orange sword with a bat hilt.",
      at: 2,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Spookiness UP",
      abicon: 7,
      msg: {
        2: "Ugh, it's too small!",
        3: "Oh, it's too scary!",
        4: "(It's kinda cool...)",
      },
    },
    6: {
      id: 6,
      ch: 1,
      chars: [2],
      name: "Brave Ax",
      desc: "A glossy ax from a block warrior.#Suitable for heroes.",
      at: 2,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Guts Up",
      abicon: 7,
      msg: {
        2: "Well, if I have to.",
        3: "It's a bit too heavy...",
        4: "(W-wow, what presence...)",
      },
    },
    7: {
      id: 7,
      ch: 1,
      chars: [2],
      name: "Devilsknife",
      desc: "Skull-emblazoned scythe-ax.#Reduces Rudebuster's cost by 10",
      at: 5,
      df: 0,
      mag: 4,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Buster TP DOWN",
      abicon: 6,
      msg: {
        2: "Let the games begin!",
        3: "It's too, um, evil.",
        4: "...? It smiled at me?",
      },
    },
    8: {
      id: 8,
      ch: 1,
      chars: [1],
      name: "Trefoil",
      desc: "Mossy rapier with a clover emblem.#Increases $ found by 5%.",
      at: 4,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Money Earned UP",
      abicon: 7,
      msg: {
        2: "That tacky thing? No!",
        3: "Not my shade of green...",
        4: "Okay! ...? What do you mean, unused!?",
      },
    },
    9: {
      id: 9,
      ch: 1,
      chars: [3],
      name: "Ragger",
      desc: "A rugged scarf that cuts enemies like a dagger.",
      at: 2,
      df: 0,
      mag: 0,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Ow! That can't be comfy!",
        3: "Feels prickly... nice!",
        4: "Ouch! ... kind of nice",
      },
    },
    10: {
      id: 10,
      ch: 1,
      chars: [3],
      name: "DaintyScarf",
      desc: "Delicate scarf that increases healing#power but has no attack.",
      at: 0,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "Fluffiness UP",
      abicon: 7,
      msg: {
        2: "IT'S MADE OF DOILIES!",
        3: "I'll protect everyone!",
        4: "S-stop covering me with it!",
      },
    },
    11: {
      id: 11,
      ch: 2,
      chars: [1],
      name: "TwistedSwd",
      desc: "A strange blade",
      at: 16,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Trance",
      abicon: 6,
      msg: {
        2: "... uhh, looks bad.",
        3: "It's like a spiral.",
        4: "It's... kind of scary...",
      },
    },
    12: {
      id: 12,
      ch: 2,
      chars: [4],
      name: "SnowRing",
      desc: "A ring with the emblem of the#snowflake",
      at: 0,
      df: 0,
      mag: 0,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Smells like Noelle",
        3: "Are you... proposing?",
        4: "(Thank goodness...)",
      },
    },
    13: {
      id: 13,
      ch: 2,
      chars: [4],
      name: "ThornRing",
      desc: "Wearer takes damage from pain#Reduces the TP cost of ice spells",
      at: 14,
      df: 0,
      mag: 12,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: "Trance",
      abicon: 14,
      msg: {
        2: "A torture device?",
        3: "...",
        4: " ",
      },
    },
    14: {
      id: 14,
      ch: 2,
      chars: [1],
      name: "BounceBlade",
      desc: "A pink saber with a rubber blade.#Weak, but increases defence.",
      at: 2,
      df: 1,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Defense",
      abicon: 7,
      msg: {
        2: "What is this, rubber?",
        3: "Soft and squishy!",
        4: "S-stop thwacking me!",
      },
    },
    15: {
      id: 15,
      ch: 2,
      chars: [3],
      name: "CheerScarf",
      desc: "A scarf with colorful you-can-do-it#imagery. Gains more TP from criticals.",
      at: 1,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "Smiley",
      abicon: 10,
      msg: {
        2: "Smiley faces? Ecch.",
        3: "You can do it!",
        4: "Now THIS is a tacky scarf! Faha!",
      },
    },
    16: {
      id: 16,
      ch: 2,
      chars: [1],
      name: "MechaSaber",
      desc: "The blade extends when you press the hilt.#CHA-CHK!",
      at: 4,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Annoying",
      abicon: 13,
      msg: {
        2: "*chk chk chk chk* Nah.",
        3: "You'd look cool holding it, Kris!",
        4: "*chk* A-AHH! Scared myself...",
      },
    },
    17: {
      id: 17,
      ch: 2,
      chars: [2],
      name: "AutoAxe",
      desc: "Make sure to charge it by#plugging it into the wall.",
      at: 4,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "BadIdea",
      abicon: 13,
      msg: {
        2: "*chainsaw noises* Hahaha!!",
        3: "(Is this a good idea?)",
        4: "*zrrt* A-AHH! Scared myself...",
      },
    },
    18: {
      id: 18,
      ch: 2,
      chars: [3],
      name: "FiberScarf",
      desc: "A scarf made of soft microfiber.#Balances attack and magic.",
      at: 2,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "(Soft...)",
        3: "Oh! My fur's staticy!",
        4: "Sure, I'll... huh? It's a weapon?",
      },
    },
    19: {
      id: 19,
      ch: 2,
      chars: [3],
      name: "Ragger2",
      desc: "A sharp and scratchy scarf.#Worse healing, better attack.",
      at: 5,
      df: 0,
      mag: -1,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "Prickly",
      abicon: 7,
      msg: {
        2: "This is Ralsei's deal.",
        3: "I'm a prickly prince!",
        4: "(It's like Santa's beard?)",
      },
    },
    20: {
      id: 20,
      ch: 2,
      chars: [],
      name: "BrokenSwd",
      desc: "A rejected sword cut into 2 pieces.#Not even you can equip this...",
      at: 0,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Failure",
      abicon: 6,
      msg: {
        2: "... this is trash.",
        3: "Should we fix this...?",
        4: "(Wh... why give this to me?)",
      },
    },
    21: {
      id: 21,
      ch: 2,
      chars: [3],
      name: "PuppetScarf",
      desc: "A scarf made of strange strings.#For those that abandon healing.",
      at: 10,
      df: 0,
      mag: -6,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "No way, that's creepy.",
        3: "If I have to fight...",
        4: "(Feels like guitar strings...)",
      },
    },
    22: {
      id: 22,
      ch: 2,
      chars: [4],
      name: "FreezeRing",
      desc: "A ring with a snowglobe on it.#... is that someone inside?",
      at: 4,
      df: 0,
      mag: 4,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Heh, you steal this? Heh.",
        3: "It's beautiful...",
        4: "...",
      },
    },
    23: {
      id: 23,
      ch: 3,
      chars: [1],
      name: "Saber10",
      desc: "A saber made of 10 cactus needles.#Fortunately, can deal more than 10 damage.",
      at: 6,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Nah, I'd snap it.",
        3: "You want to... pierce my ears...?",
        4: "(I'm not against using it, but...)",
      },
    },
    24: {
      id: 24,
      ch: 3,
      chars: [2],
      name: "ToxicAxe",
      desc: "An axe used to clear wastelands#in a fetid swamp. Not poison, but gross.",
      at: 6,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Eat dirt, losers.",
        3: "Could I wash it off first?",
        4: "N-no way! Susie wouldn't use that!",
      },
    },
    25: {
      id: 25,
      ch: 3,
      chars: [3],
      name: "FlexScarf",
      desc: "A scarf that is warm and fuzzy, but with#a metal core that lets it keep its shape.",
      at: 4,
      df: 0,
      mag: 1,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Looks like a giant caterpillar.  ",
        3: "So pliable, like me!",
        4: "Twist it and... it's a wreath!",
      },
    },
    26: {
      id: 26,
      ch: 3,
      chars: [1, 4],
      name: "BlackShard",
      desc: "A dagger-like shard of the Black Knife.#Strikes the weakness of dark-element enemies.",
      at: 16,
      df: 0,
      mag: 0,
      icon: 18,
      grazesize: 0,
      grazeamt: 0,
      ability: "SlayDark",
      abicon: 18,
      msg: {
        2: "... how is this a weapon?",
        3: "I... shouldn't use it.",
        4: " ",
      },
    },
    50: {
      id: 50,
      ch: 4,
      chars: [1, 4],
      name: "JingleBlade",
      desc: "A lance-like sword with red-and-white stripes.#Perfect for jousting.",
      at: 7,
      df: 1,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Festive",
      abicon: 10,
      msg: {
        2: "Sleigh the bad guys.",
        3: "Mmm! Minty and festive!",
        4: "What is this, a barber pole?",
      },
    },
    51: {
      id: 51,
      ch: 4,
      chars: [3],
      name: "ScarfMark",
      desc: "A thin scarf with a deep sheen. Holy writing has#been pressed into it, imbuing it with magic.",
      at: 4,
      df: 1,
      mag: 1,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Heheh...",
        3: "I'll keep my place.",
        4: "Look, ribbon dancing!",
      },
    },
    52: {
      id: 52,
      ch: 4,
      chars: [2],
      name: "JusticeAxe",
      desc: "It has no special powers. However, in order to#attain this item, you became much stronger!",
      at: 12,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "???",
      abicon: 5,
      msg: {
        2: "Watch this, old man!",
        3: "... isn't Susie amazing?",
        4: "... Susie beat up an old man!?",
      },
    },
    53: {
      id: 53,
      ch: 4,
      chars: [1],
      name: "Winglade",
      desc: "A majestic sword with a white feathered hilt.#Slightly increases money won.",
      at: 8,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ +5%",
      abicon: 7,
      msg: {
        2: "Don't make me sneeze!",
        3: "Th-that tickles!",
        4: "... whose feather is this?",
      },
    },
    54: {
      id: 54,
      ch: 4,
      chars: [2],
      name: "AbsorbAx",
      desc: "A long, curved axe with an indent.#Scoop up HP when you attack.",
      at: 8,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Vampire",
      abicon: 13,
      msg: {
        2: "Scoopin' time.",
        3: "Don't scoop me!",
        4: "That red... is that blood?",
      },
    },
    30: {
      id: 30,
      ch: 5,
      chars: [1],
      name: "WoodBlade2",
      desc: "A sword that is arbitrarily stronger#because it fits the setting of Chapter 5.",
      at: 10,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Coolness",
      abicon: 7,
      msg: {
        2: "No, you geek.",
        3: "Cool poses, Kris!",
        4: 'Go, Kris! "1000 Moon Crescent Slash!" Faha!',
      },
    },
    31: {
      id: 31,
      ch: 5,
      chars: [2],
      name: "Thatchet",
      desc: "An axe made of brambles. It's rumored its#wickedness infects anything it touches.",
      at: 10,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Wicked",
      abicon: 13,
      msg: {
        2: "Literally wicked.",
        3: "Yay, I'm infected!",
        4: "Well... roses have thorns, too.",
      },
    },
    32: {
      id: 32,
      ch: 5,
      chars: [3],
      name: "BlueShoes",
      desc: "Shoes from a prestigious dancer.#Ralsei's PACIFY costs 0% TP.",
      at: 2,
      df: 4,
      mag: 6,
      icon: 24,
      grazesize: 0,
      grazeamt: 0,
      ability: "Pacify0TP",
      abicon: 20,
      msg: {
        2: "Hell no, I'd wreck these.",
        3: "Helps me step to attack!",
        4: "(You KNOW I can't wear normal shoes...)",
      },
    },
    33: {
      id: 33,
      ch: 5,
      chars: [1, 4],
      name: "AquaKnife",
      desc: "A mischievous blade. Attacks with this#weapon are easier to make critical.",
      at: 10,
      df: 2,
      mag: 0,
      icon: 27,
      grazesize: 0,
      grazeamt: 0,
      ability: "Critical",
      abicon: 7,
      msg: {
        2: "Too small. Kris-size.",
        3: "Umm, I might hurt myself...",
        4: "That's, um, nostalgic.",
      },
    },
    34: {
      id: 34,
      ch: 5,
      chars: [],
      name: "FloweryScarf",
      desc: 'A scarf which says "I <3 Flowery" on it.#It\'s the perfect size for Ralsei.',
      at: 70,
      df: 70,
      mag: 70,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "TheBest",
      abicon: 21,
      msg: {
        2: "Nah, that's for Ralsei.",
        3: "I, um... it, it doesn't fit!",
        4: "Who the heck is Flowery?",
      },
    },
    35: {
      id: 35,
      ch: 5,
      chars: [3, 4],
      name: "BrokenScarf",
      desc: "A scarf that was torn to pieces in the#battle, revealing it was all for show.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "...",
        3: "... I'll wear it.",
        4: "Who the HECK is Flowery?",
      },
    },
    36: {
      id: 36,
      ch: 5,
      chars: [4],
      name: "GildedRose",
      desc: "Armour rings with a rose motif. Any thorns are#pointed outwards so you don't hurt yourself.",
      at: 16,
      df: 0,
      mag: 2,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Damn, if only it fit!",
        3: "Noelle... could equip this.",
        4: "Wow! Something I actually want to wear?",
      },
    },
    37: {
      id: 37,
      ch: 5,
      chars: [3],
      name: "MistleWP",
      desc: "A parasitic ivy whip with a nature's power.#Only experts can use it as a scarf.",
      at: 6,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 7,
      msg: {
        2: "Stop nailing it to stuff.",
        3: "Look, I'm a wreath?",
        4: "... ah?",
      },
    },
  },
  armors: {
    1: {
      id: 1,
      ch: 1,
      chars: [1, 2, 3],
      name: "Amber Card",
      desc: "A thin square charm that sticks#to you, increasing defense.",
      at: 0,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "... better than nothing.",
        3: "It's sticky, huh, Kris...",
        4: "It's like a name-tag!",
      },
    },
    2: {
      id: 2,
      ch: 1,
      chars: [1, 2, 3],
      name: "Dice Brace",
      desc: "A bracelet made out of various#symbol-inscribed cubes.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "... okay.",
        3: 'It says "Friendship!"',
        4: "Hey, y-you jumbled it...",
      },
    },
    3: {
      id: 3,
      ch: 1,
      chars: [1, 3, 4],
      name: "Pink Ribbon",
      desc: "A cute hair ribbon that increases#the range bullets increase tension.",
      at: 0,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 20,
      grazeamt: 0,
      ability: "GrazeArea",
      abicon: 7,
      msg: {
        2: "Nope. Not in 1st grade anymore.",
        3: "Um... d-do I look cute...?",
        4: "... feels familiar.",
      },
    },
    4: {
      id: 4,
      ch: 1,
      chars: [1, 3],
      name: "White Ribbon",
      desc: "A crinkly hair ribbon that slightly#increases your defense.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Cuteness",
      abicon: 7,
      msg: {
        2: "Nope. Not in 1st grade anymore.",
        3: "Um... d-do I look cute...?",
        4: "... feels familiar.",
      },
    },
    5: {
      id: 5,
      ch: 1,
      chars: [1, 2, 3],
      name: "IronShackle",
      desc: "Shackle that ironically increases#your attack and defense.",
      at: 1,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "(Damn, it's actually cool...)",
        3: "*jingle jangle* Haha!",
        4: "I'm the ghost of holidays past!",
      },
    },
    6: {
      id: 6,
      ch: 1,
      chars: [1, 2, 3],
      name: "MouseToken",
      desc: "A golden coin with a once-powerful mousewizard engraved on it.",
      at: 0,
      df: 0,
      mag: 2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "This guy's... familiar?",
        3: "Chu! Healing power UP!",
        4: "... from the family entertainment center?",
      },
    },
    7: {
      id: 7,
      ch: 1,
      chars: [1, 2, 3],
      name: "Jevilstail",
      desc: "A J-shaped tail that gives you devilenergy.",
      at: 2,
      df: 2,
      mag: 2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Figured I'd grow one someday.",
        3: "I'm a good devil, OK?",
        4: "... (I like it...)",
      },
    },
    8: {
      id: 8,
      ch: 2,
      chars: [1, 2, 3],
      name: "Silver Card",
      desc: "A square charm that increases#dropped money by 5%",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ +5%",
      abicon: 7,
      msg: {
        2: "Money, that's what I need.",
        3: "Do they take credit?",
        4: "It goes with my watch!",
      },
    },
    9: {
      id: 9,
      ch: 2,
      chars: [1, 3, 4],
      name: "TwinRibbon",
      desc: "Two ribbons. You'll have to put#your hair into pigtails.",
      at: 0,
      df: 3,
      mag: 0,
      icon: 4,
      grazesize: 20,
      grazeamt: 0,
      ability: "GrazeArea",
      abicon: 7,
      msg: {
        2: "... it gets worse and worse.",
        3: "Try around my horns!",
        4: "... nostalgic, huh.",
      },
    },
    10: {
      id: 10,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "GlowWrist",
      desc: "A tough bracelet made of green wires,#and studded with sharp glowing lights.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Whoops, it's tangled.",
        3: "Let me just untangle this...",
        4: "It's like holiday lights...",
      },
    },
    11: {
      id: 11,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "ChainMail",
      desc: "Chain-armor. Send it to 10 others#or it'll lose its defensive rating",
      at: 0,
      df: 3,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Damn, guess I'm cursed.",
        3: "A letter?... for me...?",
        4: "Armor? (It's cool...)",
      },
    },
    12: {
      id: 12,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "B.ShotBowtie",
      desc: "A handsome bowtie. Looks like the brand#name has been cut off.",
      at: 0,
      df: 2,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Ugh, I look like a nerd.",
        3: "Can I have suspenders?",
        4: "... do I put it in my hair?",
      },
    },
    13: {
      id: 13,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "SpikeBand",
      desc: "A black wristband covered in spikes.#Has the tendency to get stuck to itself.",
      at: 2,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Can't say no to spikes.",
        3: "Um, do I... look tough?",
        4: "(Maybe Susie would like this look?)",
      },
    },
    14: {
      id: 14,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "Silver Watch",
      desc: "Grazing bullets affects#the turn length by 10% more",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "GrazeTime",
      abicon: 7,
      msg: {
        2: "It's clobbering time.",
        3: "I'm late, I'm late!",
        4: "(Th-this was mine...)",
      },
    },
    15: {
      id: 15,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "TensionBow",
      desc: "Gain 10% more tension from#grazing bullets",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "TPGain",
      abicon: 7,
      msg: {
        2: " ",
        3: " ",
        4: " ",
      },
    },
    16: {
      id: 16,
      ch: 2,
      chars: [1],
      name: "Mannequin",
      desc: "It's a mannequin with the clothes#permanently attached. Useless",
      at: 0,
      df: 0,
      mag: 0,
      icon: 0,
      grazesize: 0,
      grazeamt: 0,
      ability: "???",
      abicon: 4,
      msg: {
        2: "Not even gonna ask.",
        3: "Um, the d-dress is cute...",
        4: "(Why did they spend $300 on this!?)",
      },
    },
    17: {
      id: 17,
      ch: 2,
      chars: [1],
      name: "DarkGoldBand",
      desc: "A black metal with a golden shine.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 7,
      msg: {
        2: "Not even gonna ask.",
        3: "Um, the d-dress is cute...",
        4: "(Why did they spend $300 on this!?)",
      },
    },
    18: {
      id: 18,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "SkyMantle",
      desc: "A cape that shimmers fluorescently.#Protects against Elec and Holy attacks.",
      at: 0,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Elec/Holy",
      abicon: 4,
      msg: {
        2: " ",
        3: " ",
        4: " ",
      },
    },
    19: {
      id: 19,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "SpikeShackle",
      desc: " ",
      at: 3,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Attack",
      abicon: 7,
      msg: {
        2: "Get a load of THIS!",
        3: "Looking SHARP!",
        4: "(It's tearing my sleeves...)",
      },
    },
    20: {
      id: 20,
      ch: 2,
      chars: [1, 3, 4],
      name: "FrayedBowtie",
      desc: "An old bowtie. It seems to have#lost much of its defensive value.",
      at: 1,
      df: 1,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Look. I have standards.",
        3: "It's still wearable!",
        4: "(Reminds me of Asgore...)",
      },
    },
    21: {
      id: 21,
      ch: 2,
      chars: [1, 2, 3],
      name: "Dealmaker",
      desc: "Fashionable pink and yellow glasses.#Greatly increase $ gained, and...?",
      at: 0,
      df: 5,
      mag: 5,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ +30%",
      abicon: 7,
      msg: {
        2: "Money, that's what I need.",
        3: "Two pairs of glasses?",
        4: "(Seems... familiar?)",
      },
    },
    22: {
      id: 22,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "RoyalPin",
      desc: "A brooch engraved with Queen's face.#Careful of the sharp part.",
      at: 0,
      df: 3,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "ROACH? Oh, brooch. Heh.",
        3: "I'm a cute little corkboard!",
        4: "Queen... gave this to me.",
      },
    },
    23: {
      id: 23,
      ch: 3,
      chars: [1, 2, 3],
      name: "ShadowMantle",
      desc: "Shadows slip off like water.#Greatly protects against Dark and Star attacks.",
      at: 0,
      df: "chapter",
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Dark/Star",
      abicon: 4,
      msg: {
        2: "Hell yeah, what's this?",
        3: "Sh-should I wear this...?",
        4: "No... it's for someone... taller.",
      },
    },
    24: {
      id: 24,
      ch: 3,
      chars: [1, 2, 3, 4],
      name: "LodeStone",
      desc: "A lodestone token shaped like a snail's shell.#Enemy bullets give a bit more TP.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "TPGain",
      abicon: 7,
    },
    25: {
      id: 25,
      ch: 3,
      chars: [1, 2, 3, 4],
      name: "GingerGuard",
      desc: "A steel bangle tempered by extreme flame.#Its shape is humanoid in nature.",
      at: 0,
      df: 3,
      mag: 0,
      icon: 19,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Look! I punched through a guy!",
        3: "A bigger one could make Kris!",
        4: "This smells amazing! Um, sorry.",
      },
    },
    26: {
      id: 26,
      ch: 3,
      chars: [1, 3, 4],
      name: "BlueRibbon",
      desc: "A blue cheer bow. When the user uses a#healing move, it recovers slightly more HP.",
      at: 0,
      df: 1,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Heal+",
      abicon: 7,
      msg: {
        2: "ABSOLUTELY not.",
        4: "Go...  t... team?",
      },
    },
    27: {
      id: 27,
      ch: 3,
      chars: [1, 2, 3, 4],
      name: "TennaTie",
      desc: "A giant, heavy-duty, bullet-proof tie.#How to even wear it...?",
      at: 0,
      df: 5,
      mag: -2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Bandana-style.",
        3: "Like a sash...?",
        4: "Look, I'm like a gift!",
      },
    },
    50: {
      id: 50,
      ch: 4,
      chars: [1, 2, 3, 4],
      name: "Waferguard",
      desc: "Although it looks brittle, it contains a magical#energy that blunts damage on impact. +4DF",
      at: 0,
      df: 4,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "(Don't eat it. Don't eat it.)",
        3: "It's got drool on it.",
        4: "What's next, cheezy armor? Faha!",
      },
    },
    51: {
      id: 51,
      ch: 4,
      chars: [1, 2, 3, 4],
      name: "MysticBand",
      desc: "A silver armlet stained with amber.#Increases magic only. MAG +4",
      at: 0,
      df: 0,
      mag: 4,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Let's go, Rude Buster!",
        3: "Behold! Heal Prayer!",
        4: "(The other flavor is better)",
      },
    },
    52: {
      id: 52,
      ch: 4,
      chars: [1, 2, 3, 4],
      name: "PowerBand",
      desc: "A silver armlet stained with red essence.#Increases strength only. ATK +4",
      at: 4,
      df: 0,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "BLOOD POWER ACTIVATE!",
        3: "I'm juiced up!",
        4: "Why always jewelry?",
      },
    },
    53: {
      id: 53,
      ch: 4,
      chars: [1, 3, 4],
      name: "PrincessRBN",
      desc: "Elegant lace ribbon with gloves,#delicate enough to see through. +4 DEF +2 ATK",
      at: 2,
      df: 4,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Elegance",
      abicon: 7,
      msg: {
        2: "Nah. Gloves don't fit.",
        3: "Cute! (Gloves don't fit)",
        4: "Kris, you can wear the gloves!",
      },
    },
    54: {
      id: 54,
      ch: 4,
      chars: [1, 2, 3],
      name: "GoldWidow",
      desc: "A spider made of gold. It gathers coins#into it, reducing $ gained.",
      at: 1,
      df: 5,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ -10%",
      abicon: 6,
      msg: {
        2: "Spider on my head. K.",
        3: "Itsy and/or bitsy!",
        4: "E-Ew! Kris, get that away!",
      },
    },
    30: {
      id: 30,
      ch: 5,
      chars: [1, 3, 4],
      name: "MonarchRBN",
      desc: "A ribbon like the wings of a butterfly.#Increases healing ability when equipped.",
      at: 0,
      df: 6,
      mag: 2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "HasAntenna",
      abicon: 10,
      msg: {
        2: "I'll squash it.",
        3: "My horns are like antenna!",
        4: "They're not ANTENNA!! They're ant-LERS!",
      },
    },
    31: {
      id: 31,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "TrueTie",
      desc: "The genuine tie worn by a forgotten TV star.#Defends against the Puppet&Cat element.",
      at: 1,
      df: 5,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "CatDefend",
      abicon: 11,
      msg: {
        2: "More hand-me-downs?",
        3: "Ready for my close-up!",
        4: "What's next, a fedora?",
      },
    },
    32: {
      id: 32,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "DogWidow",
      desc: "A brooch in the shape of a golden pooch.#You lose almost all money after battle.",
      at: 0,
      df: 6,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ -90%",
      abicon: 6,
      msg: {
        2: "This is annoying.",
        3: "This is annoying.",
        4: "Pff... YOU should wear it, Kris.",
      },
    },
    33: {
      id: 33,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "RedRibbon",
      desc: "A ribbon with an inscription to drive#away resident spirits, if they don't pay.",
      at: 0,
      df: 4,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Kris's got the tab.",
        3: "Red and white...",
        4: "Umm, your dad's name is on this.",
      },
    },
    34: {
      id: 34,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "NetskieHat",
      desc: "A white-yellow hat for someone with fox#ears. Somehow you can wear more than one.",
      at: 0,
      df: 6,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Cool. Visible ears.",
        3: "Fits my horns perfectly!",
        4: "Does not. Fit my antlers.",
      },
    },
    35: {
      id: 35,
      ch: 5,
      chars: [1, 2, 3],
      name: "SethSpecs",
      desc: "A tactician's glasses. Become invulnerable for#longer after being damaged.",
      at: 0,
      df: 4,
      mag: 6,
      icon: 22,
      grazesize: 0,
      grazeamt: 0,
      ability: "InvTime+",
      abicon: 5,
      msg: {
        2: "Easier than stealing Ralsei's.",
        3: "I'm ready to do your homework!",
        4: "That's too much like...",
      },
    },
    36: {
      id: 36,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "YellowHat",
      desc: "The hat of a just cowboy. Makes spells#20% more effective.",
      at: 4,
      df: 4,
      mag: 4,
      icon: 25,
      grazesize: 0,
      grazeamt: 0,
      ability: "Skill20%",
      abicon: 7,
      msg: {
        2: "Get in Horse Mode, Ralsei.",
        3: "Can Susie be the horse?",
        4: "(At least I'm not the horse)",
      },
    },
    37: {
      id: 37,
      ch: 5,
      chars: [2, 4],
      name: "O.Glove",
      desc: "The glove of a brave fighter.#Susie's SCYTHEMARE will cost less TP. ",
      at: 4,
      df: 8,
      mag: 0,
      icon: 23,
      grazesize: 0,
      grazeamt: 0,
      ability: "ScytheTP-",
      abicon: 6,
      msg: {
        2: "Helps me hold the axe.",
        3: "Um... I need training, first.",
        4: "I'm used to gloves. I mean, um, oven mitts.",
      },
    },
    38: {
      id: 38,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "GreenApron",
      desc: "The apron of a kind chef. The wearer#recovers 16% of their max HP after defending.",
      at: 0,
      df: 7,
      mag: 0,
      icon: 26,
      grazesize: 0,
      grazeamt: 0,
      ability: "DefendHeal",
      abicon: 5,
      msg: {
        2: "Arright, back to cooking fire.",
        3: "Horse devors, anyone?",
        4: "Kris, can you, um, tie the back for me...?",
      },
    },
  },
};
v();
var S = {
  1: [40, 39, 38, 37, 90, 88, 67, 13, 16, 17],
  2: [40, 39, 38, 37, 90, 88, 67, 13, 16, 17],
};
var x = {
  1: {
    8: "Backspace",
    9: "Tab",
    12: "Numpad 5 (nmlk off)",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "Caps lock",
    27: "Escape",
    32: "Space",
    33: "Page up",
    34: "Page down",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    45: "Insert",
    46: "Delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: "Windows",
    96: "Numpad 0",
    97: "Numpad 1",
    98: "Numpad 2",
    99: "Numpad 3",
    100: "Numpad 4",
    101: "Numpad 5",
    102: "Numpad 6",
    103: "Numpad 7",
    104: "Numpad 8",
    105: "Numpad 9",
    106: "Numpad *",
    107: "Numpad +",
    109: "Numpad -",
    110: "Numpad .",
    111: "Numpad /",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "Num lock",
    145: "Scroll lock",
    160: "Shift (left)",
    161: "Shift (right)",
    162: "Ctrl (left)",
    163: "Ctrl (right)",
    164: "Alt (left)",
    165: "Alt (right)",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "?",
    192: "~",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
  },
  2: {
    8: "Backspace",
    9: "Tab",
    12: "Numpad 5 (nmlk off)",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "Caps lock",
    27: "Escape",
    32: "Space",
    33: "Page up",
    34: "Page down",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    45: "Insert",
    46: "Delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: "Windows",
    96: "Numpad 0",
    97: "Numpad 1",
    98: "Numpad 2",
    99: "Numpad 3",
    100: "Numpad 4",
    101: "Numpad 5",
    102: "Numpad 6",
    103: "Numpad 7",
    104: "Numpad 8",
    105: "Numpad 9",
    106: "Numpad *",
    107: "Numpad +",
    109: "Numpad -",
    110: "Numpad .",
    111: "Numpad /",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "Num Lock",
    145: "Scroll Lock",
    160: "Shift (left)",
    161: "Shift (right)",
    162: "Ctrl (left)",
    163: "Ctrl (right)",
    164: "Alt (left)",
    165: "Alt (right)",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "?",
    192: "~",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
  },
};
v();
const o = {
  [A8(71, "GrI%", 162)]: 0,
  [Ab(851, 801, "YrSY")]: 0,
  [A8(-2, "Ge])", 120)]: 0,
  [A8(91, "g#D4", 233)]: 1,
  [A8(56, "]7)2", -115)]: 2,
};
var Y = [];
var t = {};
var I = [];
var E = o;
function C(D, P, At, AI) {
  function AE(Ai, AT, As) {
    return Ab(Ai - 365, As - -1004, Ai);
  }
  const AC = {
    [AE("k9C@", -344, -451)]: function (Ai, AT) {
      return Ai + AT;
    },
  };
  const AZ = AC;
  function AW(Ai, AT, As) {
    return Ab(Ai - 384, AT - 320, Ai);
  }
  function Ak(Ai, AT, As) {
    return Ab(Ai - 120, AT - -836, As);
  }
  let AU = AZ[Ak(-236, -248, "A#Ej")](1000, I[AE("YH)I", -254, -326)]);
  const AR = {
    [Ak(-109, -190, "pxSS")]: D,
    [AW("[U9i", 856, 840)]: P,
    [AE("CcE[", -429, -357)]: At,
    [Ak(62, -110, "INTk")]: AI,
  };
  I[Ak(-230, -260, "KlV6")](AR);
  P.id = AU;
  return AU;
}
r(C, Ab(865, 891, "](a%"));
function k(D) {
  const P = {
    cbfjA: function (AC, AZ, AW, Ak, AU) {
      return AC(AZ, AW, Ak, AU);
    },
    wOEzD: AI(1293, 1413, "P$(z"),
    OGUko: function (AC, AZ, AW, Ak, AU) {
      return AC(AZ, AW, Ak, AU);
    },
    zpYYx: AE(438, "CYWh", 382),
  };
  if (!D || !D.id || t[D.id]) {
    return D;
  }
  D[At(-285, -436, "a]hn")] = D[AI(960, 1064, "6ZZZ")] || [];
  D[AI(1245, 1404, "J^s[")] = D[At(-96, -217, "Yryp")] || {};
  function At(AC, AZ, AW) {
    return A8(AC - -290, AW, AW - 148);
  }
  for (let AC of D[AI(1294, 1401, "INTk")]) {
    P[AE(579, "N[Z6", 501)](C, D, AC, P[AE(614, "V#1z", 802)], null);
  }
  for (let [AZ, AW] of Object[At(-197, -141, ")A^Y")](D[AI(1083, 1227, "KlV6")])) {
    for (let Ak of AW) {
      P[AE(318, "CcE[", 281)](C, D, Ak, P[AI(1276, 1124, "]7)2")], AZ);
    }
  }
  function AI(AU, AR, Ai) {
    return A8(AR - 1216, Ai, Ai - 146);
  }
  function AE(AU, AR, Ai) {
    return A8(AU - 455, AR, Ai - 91);
  }
  Y[AE(654, "V#1z", 633)](D);
  t[D.id] = D;
  return D;
}
function R(D, P, At) {
  return L(At - 495, D);
}
r(k, Ab(721, 700, "](a%") + R("a]hn", 1360, 1259));
var i = r((D) => t[D] || null, Ab(698, 766, "J^s["));
var T = r(
  (D) => D >= 1000 && D < 1000 + I[R("CcE[", 1011, 1118)],
  R("a]hn", 1203, 1024) + R("$eWn", 1321, 1207),
);
var s = r((D) => (T(D) ? I[D - 1000] : null), R("A#Ej", 1163, 1296) + "l");
var h = r(
  (D, P) => Math[A8(-64, "INTk", 57)](((D.tp || 0) / 100) * (P || 250)),
  A8(165, "EF2e", 276),
);
var A0 = r(
  (D) => E[D[A8(-127, "UWS3", -116)]] ?? D[Ab(856, 881, "xPFC")] | 0,
  A8(-161, "o^H7", -151),
);
function A1(D, P) {
  function At(Ak, AU, AR) {
    return R(AU, AU - 52, Ak - -1238);
  }
  function AI(Ak, AU, AR) {
    return R(Ak, AU - 116, AR - -1372);
  }
  const AE = {
    eVQSF: function (Ak, AU) {
      return Ak(AU);
    },
    EDdul: function (Ak, AU) {
      return Ak(AU);
    },
    dvbRg: function (Ak, AU, AR) {
      return Ak(AU, AR);
    },
  };
  function AC(Ak, AU, AR) {
    return R(AR, AU - 143, AU - 370);
  }
  let AZ = AE[At(52, "GrI%", -31)](s, D);
  if (!AZ) {
    return null;
  }
  let AW = AZ[AI("INTk", -237, -321)];
  return {
    spellname: AW[AC(1417, 1524, "Yryp")],
    spellnameb: AW[AI("E@RR", -74, -262)] || AW[AI(")A^Y", -378, -273)],
    spelltarget: AE[At(-236, "k9C@", -348)](A0, AW),
    cost: AE[At(-72, "@$l2", 74)](h, AW, P),
    spelldescb: AW[At(-23, "YH)I", -125)] || " ",
    spellanim: 0,
  };
}
r(A1, A8(34, "YrSY", 64) + Ab(893, 771, "Yryp"));
var A2 = {};
function A3() {
  const D = [
    "W7FcOqzNiW",
    "nmoRWR5dW4K",
    "WONcU3CzWPrKqqxdP8oZ",
    "EupcLConFa",
    "yNfYWRrAW4LeWPVcGX4",
    "WQ/dT1W7A8oJdGzh",
    "W4tcGmk6WQuM",
    "W6pdRu/cHCkF",
    "ySkNW5tcTK0",
    "f8knW45XW6q",
    "W6ZcOG7cPfevW4RdSHdcLq",
    "eCkqW5jTW6j5emkPBCo5",
    "W5m4dcT9",
    "bdnZWRdcOq",
    "iYJcT8o+W6i",
    "r8oPfHpcHq",
    "bNSpcvS",
    "oHWKmezLaqG9WQS",
    "WPtdQLW3tG",
    "WOpdHSo2W7jyBSoklrtcOI8",
    "W6Oqerbf",
    "W5iIbftdOW",
    "pd3cMmovWOaOnCkjl8kg",
    "W4JdIe7cMmkf",
    "WR4wBryJk8oVoCoGWR4",
    "eCopW4hcLG8",
    "AmkBW7W",
    "i8oQWR9FW5q",
    "baj3WR/cPCkfehrgva",
    "zSkDW7xcIa",
    "W5WxWOrZW7W5WRXSBtW",
    "WOmHW7dcKSkW",
    "iSocW6VcGse",
    "ztW7m2n8WO0",
    "pSokWOb3W4i",
    "W50tcMX7WPRcKW",
    "WPdcU3KzWQG",
    "n8oLW5NcSXW",
    "k8oEWOFdLmkgW7eJC8oPW50",
    "jXbMp3rWhG8iWO8",
    "rCkCdmk3WQ0",
    "WOuBW7v7cq",
    "W7TJWOGnvXz9WRBdVCkMW4yJca",
    "B0zRWPTw",
    "W4ddOMJcMSk+WPldQmk/psu",
    "zdO7ja",
    "iZ17aMm",
    "WOqyW5npfq",
    "W5RcKmoZW4CDWQ5K",
    "W7DJWPrO",
    "WRxdR03cTmkRWOhdQG",
    "pGlcNSoLW5G",
    "W5BcMCkHWReVymolirtcJa",
    "W43cLSkiWQu0",
    "rSkzi8kofG",
    "jXFcRCouW4W",
    "W5ldGKxcJmkV",
    "eZHWahPgmIyRWRu",
    "WRlcN3vgga4",
    "WO06W6ZcMq",
    "WQtcVrBcG1i",
    "WRhcKcJcNKi",
    "mrzri0C",
    "nY/cJmoYW4W",
    "gCkSW65mW7bhi8k7qCoh",
    "W5elcJHx",
    "wmkooCkkba",
    "Bmo6nHlcLq",
    "WOO2W6ZcMSk2W64",
    "W5/dQCk3W7W6WO9KarK",
    "W6FdJSofW7BdHmkHsZ3cQq",
    "d8oaWRRcVSkonIy",
    "vCoFhtNcQq",
    "WRBdINWyAG",
    "W5y7WRG",
    "WRnRWR5LWPRcPq",
    "dJXoWQVcSSkfaM9lwG",
    "W63dJLG",
    "WRtcJSokW4e/WRjTes/cLG",
    "o8oUWRTIW6e",
    "cmkXWPjCW69Fi8kUFmo8",
    "W5GhWPddM3y",
    "lZpcLSogWRe",
    "WP4LsW",
    "W5GxWOzMW7q",
    "mSoQWQrcW5/dR8kI",
    "WQO5BXey",
    "g8k1W6VcKMRcLW",
    "aeu2eMO",
    "xSoDWQi",
    "Bmkpn8k3WRuG",
    "WPBdHHb+WOi",
    "W6ldJLhcK8kPWQtdGq",
    "W4P3WPDekW",
    "W4/dOvuewq",
    "W4PKWQHokW",
    "WPZdLZz+WPNdUG",
    "WRqgzbmSnSook8o/WQS",
    "umotWQtdVeddNa",
    "BZ0ZlW",
    "WRiQW7RdGCkEWRD0W4JcVt0",
    "WQxcKCogW7G2WR5VoGxcLq",
    "WR5TWQrX",
    "zYmLlhu",
    "wfDxWRC",
    "bSotW5ZcLcLyyXT7",
    "kZdcH8oNWPa",
    "iatcGmoaWQC8dSksjmkW",
    "aSoKWP/cICkecJH2W6/dOa",
    "W6ySWPXJW4u",
    "W6JdQSooW7RdTa",
    "WRpcJg4WWPu",
    "aJj5gN1aiJCsWR8",
    "WOK0W6nUcYVdQcddJCkj",
    "W5zhWQPzgW",
    "WQ5LWOPPWO0",
    "k8oCW71caG",
    "W7tdJ1VcHCkGWQhdISkdcW",
    "WOKrwamR",
    "FmkelG7dQq",
    "BSk0kCkkeq",
    "bL4TkNu",
    "WPSOW5fKgW",
    "k8o+WRJcICkN",
    "nCo8W4LynW",
    "hmooWOFdO8kcW7uDlCoFW4e",
    "gZlcKCooW68",
    "iSojW7LvmW",
    "WR/cOcdcMei",
    "nSoyW7ftbW",
    "WO8tCI0FdCoyfq",
    "v8ksW4RcR00",
    "WP/dRGhcPIm",
    "W7VcVSkzWOGIqmo9fsZcGa",
    "W74tjMRdM1ZdPmo/E1m",
    "e8ktW7j2W5nbcSknC8oe",
    "gYVcICofW6W",
    "vrCKnMi",
    "iSoMWQvbW5u",
    "h8kYW5/cUh0",
    "hmkEW5f7",
    "W47dPgZcTmku",
    "W6ddQ13cMSkPWPhdKCkTgtC",
    "W7ZdPeGpFG",
    "z8k3W5BcOwK",
    "WQa3Er0JlCoIcSoGWRq",
    "WP4jW4beiHRdGrtdGW",
    "f8krW5LZW68",
    "pZ3cOCoaWOG",
    "WQn0B1pdMa",
    "WPldGqtcPIm",
    "psnxWQNcGq",
    "WPdcLZ/cNaRdLSofW7xdVwq",
    "WOa6W7VcVSkU",
    "W5eTWQjdW7igWOza",
    "CSouhbpcQCoVW58yAW",
    "WOzjWOzPWRy",
    "yCkyW7C",
    "hXNdHtpcTq",
    "W6qzfxHq",
    "qCooWOGMWQqZp8kawSoYW7qp",
    "WRWWzH8/",
    "fZ7dUsq",
    "W7ldIvdcKSkY",
    "dmkeWQZdJeRdPdbP",
    "zmkpkSkZ",
    "W7PTWPD+pCkcm3zOuG",
    "hZBdTcNcUa",
    "jSkkWQVcMvhcVmoScbmh",
    "WObrWQbWWOhcUuJcTGW",
    "W6BdKSoaW7ddHW",
    "sCoAodhcSq",
    "a8k8W5dcNfy",
    "ldRcO8ozWROobSkXh8oB",
    "WOSYqHSP",
    "dbtcMmoKWQO",
    "WOHND0JdLa",
    "W4VcPhS9WO1gEh/cM8of",
    "W5tdS1yLDsG0WP4",
    "hSkXWPLLWQRcQZ1uvtG",
    "jCoBW4NcTsC",
    "bdHnb3XDksi",
    "WQa6W5Xp",
    "wN9uWRrn",
    "W7XSWO1/imkvnq",
    "WQdcGrdcQee",
    "kWtdOc7cLW",
    "iYtcGSoxWOy0e8kj",
    "WObIqa/cRIRdNmo9r13cMCkB",
    "WRpdOf0OCmo/",
    "WOrTWQ51W68JWPXK",
    "W5y7WONdQLi",
    "W6pcGs9Okq",
    "W69vWQ9zpW",
    "WPKtW63dRmkd",
    "WPT4Db9b",
    "emkzWPvgWRu",
    "W4SNlLbT",
    "nSo9W41Pia",
    "WOigBXSummoWgmoxWRG",
    "lGhcLCo1WQehhSkW",
    "W53cPmkfWQKc",
    "W5q3WQjtW6KdWOW",
    "xZ8Dfgy",
    "WQJdMa7cRdG",
    "dH7dOqlcGW",
    "aq9/WR3cLa",
    "v2FcS8ofua",
    "DmkyomkZWQq",
    "WOldHtzG",
    "W4pcKbXucCkBqmkCyq",
    "WQlcLMSnWO4",
    "umo5WOFdKKu",
    "d8oAWOBdO8ku",
    "jZJcGSoq",
    "WPGErZmS",
    "jtP9n0S",
    "DCo2WQtdI2hdIHnUWOFdTa",
    "hCoSWQK",
    "W7VdTvqxvHubWPvqwG",
    "WQ1PWPvwWQS",
    "W6akWQNdKMu",
    "WO7dTqf0WPldRgDUW5xdOa",
    "age3ga",
    "wSoFWRRdQ1O",
    "W63cMY1JaW",
    "WQLWD2m",
    "W6npWPnaaG",
    "WP7cKmoIW5e0",
    "jSoeW7L/",
    "kSkbWPniWOC",
    "W5BcPSkAWOCc",
    "WRZcU0KZWQm",
    "WR/cL30JWRZcSMbmW4pdSW",
    "smoNWRBdTMe",
    "mcD4WR/cIG",
    "WP/cPcpcHMO",
    "qCkWkGxdTbSlCSopAq",
    "hmk6wvJdT8kQW4uaF8oEkCo5",
    "arj7pwO",
    "haFdHHlcNW",
    "W7SSptJcIHZcQs3dPHP1za",
    "WOmjW6jBkw4kWO3dQSkn",
    "WPtcLxDCnW",
    "bCoYWPRdMSk7",
    "xmoYWOpdLgu",
    "W4xcNqXffSkcESkdASoV",
    "tSkYW6NcQ0W",
    "nXFdRrVcSSk0W6NdI8k5W7S",
    "A1dcMmomwSoSWQZcTxbt",
    "W4lcVSkfWRKO",
    "a8k/W5BcGwZcLSoTda",
    "dCoEWOtdU8kmW7SR",
    "WPFcLgjRbW",
    "W583gL/dRNC",
    "WR3cK3za",
    "WRSGW7nsevu",
    "rSoIWRFdJs/dJSkWbGm1kGOh",
    "nJhcQmobW5u",
    "W63dHfhcH8kYWQa",
    "z8kCW7RcNMZcGmkeWQJdMeG",
    "WPlcU15Ifq",
    "nbJcPSoLWOa",
    "rmkwp8kqnW",
    "BSkWcCkNWRG",
    "zb8Ljvu",
    "W5ixiwNdQG",
    "DIe6ngnKWPfVba",
    "WQ7dOZLbWQ8",
    "W6W4n29d",
    "WQxcHJdcVu4",
    "ksVdMdhcGa",
    "orhdJ8krlmkZW73cL2jon1uT",
    "BJepdw8",
    "sCkZp8kyWQO",
    "WQVdMGpcUGW",
    "iSo1WQ9DW5ZdSa",
    "ESodWR3dKu0",
    "W7hdV3Kpya",
    "W5JdTu80",
    "dSoqWQ7dVmko",
    "BCkAW7/cIvFcOmkg",
    "WP9rW6lcN2BdVCoFAdFcL8orW4a",
    "Fw5wWPzSW75WWPxcRYO",
    "WQSJW6zinG",
    "v1voWQe",
    "D15iWOrj",
    "WR1ruH1W",
    "W58qWRpdIZG",
    "WPOEvHDFESkYhx/cLq",
    "W4xcHmkZWQS",
    "WOiyW71zfa",
    "W6VdP8o1W6ldHW",
    "a8kXW7FcKNVcIW",
    "tmoDWQFdUKy",
    "WOZdJZjGWRBdPK9nW6FdPq",
    "WPqrW596da",
    "W47dKfNcOSkY",
    "WPiWW6f1lW",
    "WQHmBL0",
    "WQPVB0SaW5JcN8knWOOKW4f7qq",
    "ySkdn8k0",
    "WQFcH8oNW5SB",
    "etn6ih5rkYK",
    "WQtdKaVcMW",
    "lCo8WRxdPCk0",
    "WR1FyWvNrCkssG",
    "WPRcV8oZW7qvWPnLnG",
    "WR9YqvtdVW",
    "WOVcPSoIW7yaWPndpYC",
    "W5S9WQjhW7ih",
    "rSkVh8k7WPash0aiWRa",
    "iG9umvHsdHyoWPu",
    "WRLDWP9yWOW",
    "hSkAW5j5W6jJ",
    "WOWDuZC",
    "f8kfWQvdWPhcJq",
    "qCkcW47cI0m",
    "WOhdUJxcMb4",
    "W7mObbPv",
    "zmk5n8kYfG",
    "nH9scN4",
    "WQSYAae5i8o+fmowWQK",
    "WRy3W4jy",
    "omoCWQ7dMmkC",
    "WQXEranS",
    "W6ShWOZdQcu",
    "WO/cJmoQW6ia",
    "WObuqKBdKG",
    "frZcV8oIW7O",
    "nCkWWO5NWOG",
    "WQKuW5FcLSkT",
    "m8oABCoNW7v9pN42WR7dO8k3",
    "WRNdGrPbWQtdHMnkW7xdIq",
    "sSkPnmkS",
    "zNeRWPBcICk5hhbs",
    "qLLPWQzqW7H9WRS",
    "AJy7j3H4",
    "WPv+WQniWPK",
    "aXVdUcJcJW",
    "ecXPWQZcTG",
    "mtdcNSotWPCP",
    "arhcOSobW4W",
    "W53dO8oqW5tdO8kDCb3cMCoc",
    "B8kim8k1WQi8",
    "l8oeW4BcOYq",
    "W4KmjaTOWPpdV8kYWOOZ",
    "wMvPWQzdW5v5WQ7cJJW",
    "uv5dWPrO",
    "jSkgWQjBWQVdHv4+uK0",
    "mr/cNSo8W50",
    "WOBdLbbNWOBdVurfW7xdOq",
    "W5CdWOVdIwW",
    "W7hdR1ZcOSkc",
    "WPqAW4PKkvChWQ3dR8kC",
    "oSosWQtdJSk9",
    "ar7cLSoMW57dP8kOWPv4nq",
    "WRdcKaRdMCo3W7NdKCkHjdyEW4y",
    "WQJcJSohW5ey",
    "WOGsW4LWaa",
    "yt0NnKu",
    "WQOvW6nWmG",
    "W5e7gLW",
    "WRldLJBcIYJdKmoGW4a",
    "W6OmWRFdS2S",
    "WQ97WQnQ",
    "lSkCWPL2WOO",
    "W4NdMhatEq",
    "q8oQaqq",
    "D8oDWQJdUe3dGYfHWRldKa",
    "j8kyW4TZW6C",
    "nSoDB8oHW7uPng8ZWRddGW",
    "W4tdK0ZcQmkO",
    "WPGZW4v1lW",
    "W5xdS1uGzdi",
    "vCknW6ZcNxG",
    "cmkpW6vhW64",
  ];
  A3 = function () {
    return D;
  };
  return A3();
}
q(A2);
var A4 = new Set([
  "autoplay",
  "autoplayBeam",
  "autoplayInfo",
  "autoplayNet",
  "autoplayWait",
  "godmode",
  "debugInv",
  "forceAttack",
  "debugUser",
  "pressedDebugKeys",
  "screenshot",
  "replayTape",
  "replayPos",
  "replayPrevUp",
  "replayDone",
]);
var A5 = r((D) => {
  if (Array.isArray(D)) {
    return D.map(A5);
  }
  if (D && typeof D == "object" && Object.getPrototypeOf(D) === Object.prototype) {
    let P = {};
    for (let At of Object.keys(D)) {
      P[At] = A5(D[At]);
    }
    return P;
  }
  return D;
}, "cloneBoot");
var A6 = null;
function A7() {
  if (!A6) {
    A6 = new Map();
    for (let D of Object.keys(A2)) {
      if (!A4.has(D)) {
        A6.set(D, A5(A2[D]));
      }
    }
  }
  for (let P of Object.getOwnPropertyNames(A2)) {
    if (A4.has(P)) {
      continue;
    }
    let At = Object.getOwnPropertyDescriptor(A2, P);
    if (!A6.has(P) || (At && (At.get || At.set))) {
      delete A2[P];
    }
  }
  for (let [AI, AE] of A6) {
    A2[AI] = A5(AE);
  }
  if (A2.debugUser === 1) {
    A2.debug = 1;
  }
}
r(A7, "resetGlobalsForFight");
function A8(At, AI, AE) {
  return L(At - -646, AI);
}
function A9() {
  A2.chapter = 1;
  A2.inv = 20;
  A2.invc = 1;
  A2.encounterno = 1;
  A2.specialbattle = 0;
  A2.char = [1, 2, 3];
  A2.heromakex = [100, 100, 100];
  A2.heromakey = [200, 200, 200];
  A2.charauto = [0, 0, 0, 0];
  A2.charmove = [0, 0, 0];
  A2.charcantarget = [0, 0, 0];
  A2.chardead = [0, 0, 0];
  A2.charaction = [0, 0, 0];
  A2.faceaction = [0, 0, 0];
  A2.charcond = [0, 0, 0];
  A2.hp = [0, 90, 110, 70];
  A2.maxhp = [0, 90, 110, 70];
  A2.at = [10, 10, 14, 8];
  A2.df = [2, 2, 2, 2];
  A2.mag = [0, 0, 1, 7];
  A2.charweapon = [0, 1, 2, 3];
  A2.chararmor1 = [0, 0, 0, 0];
  A2.chararmor2 = [0, 0, 0, 0];
  A2.itemat = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  A2.itemdf = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  A2.itemmag = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  A2.itemgrazesize = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  A2.spell = [[], [7], [4], [3, 2]];
  for (let D = 0; D < 4; D++) {
    for (let P = 0; P < 12; P++) {
      if (A2.spell[D][P] === undefined) {
        A2.spell[D][P] = 0;
      }
    }
  }
  A2.charname = [" ", "Kris", "Susie", "Ralsei"];
  A2.charbase = [0, 1, 2, 3];
  A2.charhero = [null, "kris", "susie", "ralsei"];
  AD(AL);
  A2.item = new Array(13).fill(0);
  A2.tension = 0;
  A2.maxtension = 250;
  A2.monstermakex = [500, 500, 500];
  A2.monstermakey = [240, 240, 240];
  A2.monsterinstancetype = [null, null, null];
  A2.monster = [1, 1, 1];
  A2.monstertype = [1, 1, 1];
  A2.monstername = ["", "", ""];
  A2.bmenuno = 0;
  A2.bmenucoord = [];
  for (let At = 0; At < 20; At++) {
    A2.bmenucoord[At] = new Array(20).fill(0);
  }
  A2.myfight = 0;
  A2.mnfight = 0;
  A2.fc = 0;
  A2.fe = 0;
  A2.typer = 5;
  A2.msg = new Array(100).fill(" ");
  A2.msgno = 0;
  A2.flag = new Array(9999).fill(0);
  A2.tempflag = new Array(100).fill(0);
  A2.flag[13] = 0;
  A2.turntimer = 0;
  A2.sp = 4;
  A2.heartx = 0;
  A2.hearty = 0;
  A2.time = 0;
  A2.fighting = 0;
  A2.darkzone = 1;
  A2.plot = 100;
  A2.lang = "en";
  A2.monstercomment = [" ", " ", " "];
  A2.batmusic = [null, null];
  A2.automiss = [0, 0, 0];
  A2.damage_cache = [];
  A2.input_g = [];
  AA(A2.chapter);
}
r(A9, "scr_gamestart");
function AA(D) {
  let P = String(S[D] ? D : 1);
  A2.input_k = S[P].slice();
  A2.asc_def = [];
  for (let [At, AI] of Object.entries(x[P])) {
    A2.asc_def[+At] = AI;
  }
}
r(AA, "scr_controls_default");
function AD(D) {
  let P = (At, AI) => {
    for (let AE = At.length; AE < D; AE++) {
      At[AE] = typeof AI == "function" ? AI() : AI;
    }
    return At;
  };
  for (let At = 4; At < D; At++) {
    if (A2.charbase[At] === undefined) {
      A2.charbase[At] = 1;
    }
  }
  P(A2.hp, 0);
  P(A2.maxhp, 0);
  P(A2.at, 0);
  P(A2.df, 0);
  P(A2.mag, 0);
  P(A2.charweapon, 0);
  P(A2.chararmor1, 0);
  P(A2.chararmor2, 0);
  P(A2.charauto, 0);
  P(A2.itemat, () => [0, 0, 0, 0]);
  P(A2.itemdf, () => [0, 0, 0, 0]);
  P(A2.itemmag, () => [0, 0, 0, 0]);
  P(A2.itemgrazesize, () => [0, 0, 0, 0]);
  P(A2.spell, () => new Array(12).fill(0));
  for (let AI = 4; AI < D; AI++) {
    let AE = A2.charbase[AI] || 1;
    A2.charname[AI] ||= A2.charname[AE];
    if (!A2.spell[AI].some(Boolean)) {
      A2.spell[AI] = A2.spell[AE].slice();
    }
  }
}
r(AD, "scr_widen_party");
var AP = r((D) => (A2.charbase && A2.charbase[D]) || (D >= 1 && D <= 3 ? D : 1), "charBase");
function AN(D) {
  for (let P = 0; P < 3; P++) {
    let At = A2.char[P];
    if (At && AP(At) === D) {
      return P;
    }
  }
  return -1;
}
r(AN, "scr_charslot");
function AO(D) {
  if (AN(D) >= 0) {
    return 1;
  } else {
    return 0;
  }
}
r(AO, "scr_havechar");
function AH() {
  let D = AN(1);
  if (D < 0) {
    return 0;
  } else {
    return D;
  }
}
r(AH, "krisSlot");
var AL = 64;
var Aw = r(() => (A2.char ? A2.char.length : 3), "PARTY");
var Af = {
  charaction: 0,
  faceaction: 0,
  acting: 0,
  charspecial: 0,
  targeted: 0,
  chartarget: 0,
  charmove: 1,
  charcantarget: 1,
  chardead: 0,
  charcond: 0,
  temptension: 0,
  battleat: 0,
  battledf: 0,
  battlemag: 0,
  charinstance: null,
  heromakex: 80,
  heromakey: 140,
  hittarget2: 0,
};
function Am(D) {
  for (let [P, At] of Object.entries(Af)) {
    if (!Array.isArray(A2[P])) {
      A2[P] = [];
    }
    for (let AI = 0; AI < D; AI++) {
      if (A2[P][AI] === undefined) {
        A2[P][AI] = At;
      }
    }
    A2[P].length = Math.max(A2[P].length, D);
  }
  for (let AE of ["canact", "actname"]) {
    if (!Array.isArray(A2[AE])) {
      A2[AE] = [];
    }
    for (let AC = 0; AC < D; AC++) {
      if (!Array.isArray(A2[AE][AC])) {
        A2[AE][AC] = new Array(6).fill(AE === "canact" ? 0 : " ");
      }
    }
  }
  if (!Array.isArray(A2.bmenucoord)) {
    A2.bmenucoord = [];
  }
  for (let AZ = 0; AZ < Math.max(20, D); AZ++) {
    if (!Array.isArray(A2.bmenucoord[AZ])) {
      A2.bmenucoord[AZ] = new Array(Math.max(20, D)).fill(0);
    }
  }
  if (D > 20) {
    for (let AW of A2.bmenucoord) {
      if (Array.isArray(AW)) {
        while (AW.length < D) {
          AW.push(0);
        }
      }
    }
  }
}
r(Am, "scr_resize_party");
var AB = {
  0: [" ", 0, 0, 0, 0],
};
var AK = {
  0: [" ", 0, 0, 0, 0],
};
var Au = {};
var AV = {};
var AM = {};
for (let DX of Object.values(d.weapons)) {
  AB[DX.id] = [DX.name, DX.at, DX.df, DX.mag, DX.grazesize];
  AV[DX.id] = DX.chars;
}
for (let DQ of Object.values(d.armors)) {
  AK[DQ.id] = [DQ.name, DQ.at, DQ.df, DQ.mag, DQ.grazesize];
  AM[DQ.id] = DQ.chars;
}
for (let Dn of Object.values(d.items)) {
  if (Dn.battle) {
    Au[200 + Dn.id] = [Dn.name, Dn.name, Dn.target, Dn.desc.replace(/#/g, " ")];
  }
}
function Al(D) {
  let P = d.items[D - 200];
  if (P) {
    return P.effect;
  } else {
    return null;
  }
}
r(Al, "itemEffect");
function Ac() {
  for (let D = 1; D < (A2.charbase ? A2.charbase.length : 4); D++) {
    let P = AB[A2.charweapon[D]] || AB[0];
    let At = AK[A2.chararmor1[D]] || AK[0];
    let AI = AK[A2.chararmor2[D]] || AK[0];
    let AE = (Ak) => (Ak === "chapter" ? A2.chapter | 0 : +Ak || 0);
    let AC = P.map((Ak, AU) => (AU ? AE(Ak) : Ak));
    let AZ = At.map((Ak, AU) => (AU ? AE(Ak) : Ak));
    let AW = AI.map((Ak, AU) => (AU ? AE(Ak) : Ak));
    A2.itemat[D] = [AC[1], AZ[1], AW[1], 0];
    A2.itemdf[D] = [AC[2], AZ[2], AW[2], 0];
    A2.itemmag[D] = [AC[3], AZ[3], AW[3], 0];
    A2.itemgrazesize[D] = [0, AZ[4], AW[4], 0];
  }
}
r(Ac, "scr_iteminfo_all");
var Aq = {};
var AF = r((D) => !!D && A2.charweapon && A2.charweapon[D] === 13, "thorn");
function AG(D, P) {
  if (D >= 1000) {
    let AZ = A1(D, A2.maxtension);
    if (AZ) {
      return AZ;
    }
  }
  if (A2.chapter >= 4 && Aq[A2.chapter]) {
    let AW = Aq[A2.chapter](D);
    if (AW && D === 10) {
      return {
        ...AW,
        cost: A2.maxtension,
      };
    }
    if (AW && D === 9 && AF(P) && P !== 4 && A2.charweapon[4] !== 13 && AW.cost > 0) {
      return {
        ...AW,
        cost: AW.cost * 0.5,
      };
    }
    if (AW) {
      return AW;
    }
  }
  let At = {
    0: [" ", " ", 0, -1, "None"],
    1: ["Rude Sword", "RudeSword", 2, 125, "Rude#Damage#"],
    2: ["Heal Prayer", "Heal Prayer", 1, 80, "Heal#Ally"],
    3: ["Pacify", "Pacify", 2, 40, "Spare#TIRED foe"],
    4: ["Rude Buster", "Rude Buster", 2, 125, "Rude#Damage#"],
    5: ["Red Buster", "Red Buster", 2, 0, "Red#Damage#"],
    6: ["Dual Heal", "Dual Heal", 0, 0, "Heal All#30 HP"],
    7: ["ACT", "ACT", 0, 0, "Use#action"],
    8: ["SleepMist", "Sleep Mist", 0, 80, "Spare#TIRED foes"],
    9: ["IceShock", "IceShock", 2, 40, "Damage#w/ ICE"],
    10: ["SnowGrave", "SnowGrave", 0, A2.maxtension, "Fatal"],
  }[D] || [" ", " ", 0, -1, " "];
  let AI = At[3];
  if (D === 4 && A2.charweapon[2] === 7) {
    AI = 100;
  }
  if (AF(P) && D === 9) {
    AI *= 0.5;
  }
  let AE = D === 10 && (A2.flag[924] | 0) < 4 && Q.first("obj_berdlyb2_enemy") ? 3 : At[2];
  let AC = D === 10 && AE !== 3 && Q.first("obj_berdlyb2_enemy") ? 1 : 0;
  return {
    spellname: At[0],
    spellnameb: At[1],
    spelltarget: AE,
    cost: AI,
    spelldescb: At[4],
    spellanim: AC,
  };
}
r(AG, "scr_spellinfo");
function Az() {
  let D = Math.max(4, A2.charbase ? A2.charbase.length : 4);
  A2.spellname = [];
  A2.spellnameb = [];
  A2.spellcost = [];
  A2.spelldescb = [];
  A2.spelltarget = [];
  for (let P = 0; P < D; P++) {
    A2.spellname[P] = [];
    A2.spellnameb[P] = [];
    A2.spellcost[P] = [];
    A2.spelldescb[P] = [];
    A2.spelltarget[P] = [];
    if (!Array.isArray(A2.spell[P])) {
      A2.spell[P] = new Array(12).fill(0);
    }
  }
  for (let At = 0; At < D; At++) {
    for (let AI = 0; AI < 12; AI++) {
      let AE = AG(A2.spell[At][AI] || 0, At);
      A2.spellname[At][AI] = AE.spellname;
      A2.spellnameb[At][AI] = AE.spellnameb;
      A2.spellcost[At][AI] = AE.cost;
      A2.spelldescb[At][AI] = AE.spelldescb;
      A2.spelltarget[At][AI] = AE.spelltarget;
    }
  }
}
r(Az, "scr_spellinfo_all");
function AX(D) {
  A2.tension += D;
  if (A2.tension > A2.maxtension) {
    A2.tension = A2.maxtension;
  }
  if (A2.chapter >= 4 && Av.tensionCap) {
    let P = Av.tensionCap();
    if (P != null && A2.tension > P) {
      A2.tension = P;
    }
  }
}
r(AX, "scr_tensionheal");
function AQ() {
  return A2.monster[0] + A2.monster[1] + A2.monster[2];
}
r(AQ, "scr_monsterpop");
function An(D) {
  A2.charmove[D] = 0;
  A2.charcantarget[D] = 0;
  A2.chardead[D] = 1;
  A2.charaction[D] = 0;
  A2.charspecial[D] = 0;
}
r(An, "scr_dead");
function AJ(D) {
  A2.charmove[D] = 1;
  A2.charcantarget[D] = 1;
  A2.chardead[D] = 0;
}
r(AJ, "scr_revive");
function Ae(D, P) {
  let At = 0;
  if (A2.chararmor1[D] === P) {
    At++;
  }
  if (A2.chararmor2[D] === P) {
    At++;
  }
  return At;
}
r(Ae, "scr_armorcheck_equipped");
function Ap(D) {
  let P = 0;
  for (let At = 0; At < 3; At++) {
    if (A2.char[At] !== 0 && A2.char[At] !== undefined) {
      P += Ae(A2.char[At], D);
    }
  }
  return P;
}
r(Ap, "scr_armorcheck_equipped_party");
function Ag(D, P) {
  A2.mercymod[D] += P;
  if (A2.mercymod[D] < 0) {
    A2.mercymod[D] = 0;
  }
  if (A2.chapter < 2) {
    return;
  }
  if (A2.mercymod[D] >= 100) {
    A2.mercymod[D] = 100;
  }
  let At = 1;
  if (P <= 0) {
    At = 0;
  }
  Q.with("obj_dmgwriter", (AI) => {
    if (AI.type === 5) {
      At = 0;
    }
  });
  if (At) {
    let AI = 0.8;
    if (P < 99) {
      AI = 1;
    }
    if (P <= 50) {
      AI = 1.2;
    }
    if (P <= 25) {
      AI = 1.4;
    }
    V("snd_mercyadd", {
      volume: 0.8,
      pitch: AI,
    });
  }
  if (Av.dmgwriter) {
    let AE = Av.dmgwriter(A2.monsterx[D], A2.monstery[D] + 20 - A2.hittarget[D] * 20);
    AE.damage = P;
    AE.type = 5;
  }
  A2.hittarget[D]++;
}
r(Ag, "scr_mercyadd");
function Aj(D, P) {
  let At = A2.char[D];
  let AI = A2.hp[At];
  let AE = 0;
  let AC = 0;
  if (A2.hp[At] <= 0) {
    AC = 1;
  }
  if (A2.hp[At] > A2.maxhp[At]) {
    AE = 1;
  }
  if (AE === 0) {
    A2.hp[At] += P;
    if (A2.hp[At] > A2.maxhp[At]) {
      A2.hp[At] = A2.maxhp[At];
    }
  }
  if (AC === 1 && A2.hp[At] >= 0) {
    if (A2.hp[At] < J(A2.maxhp[At] / 6)) {
      A2.hp[At] = J(A2.maxhp[At] / 6);
    }
    AJ(D);
  }
  V("snd_power");
  return A2.hp[At] - AI;
}
r(Aj, "scr_heal");
function Ar(D) {
  for (let P = 0; P < Aw(); P++) {
    if (A2.char[P] !== 0) {
      Aj(P, D);
    }
  }
}
r(Ar, "scr_healall");
var Av = {
  dmgwriter: null,
  gameover: null,
  shake: null,
  charinstance: r(() => null, "charinstance"),
  monsterinstance: r((D) => null, "monsterinstance"),
  damagecheck: r(() => {}, "damagecheck"),
  scr_damage: null,
  scr_damage_all: null,
  scr_act_simul: null,
  scr_spareanim: null,
  scr_recruit: null,
  spellmenu_setup: null,
};
function Ad(D) {
  let P = [];
  for (let AI = 0; AI < Math.min(3, Aw()); AI++) {
    if (A2.charcantarget[AI] === 1) {
      P.push(AI);
    }
  }
  let At = P.length ? P[Math.min(P.length - 1, Math.floor(F(P.length)))] : 3;
  A2.targeted[At] = 1;
  D.mytarget = At;
  return At;
}
r(Ad, "scr_randomtarget");
function AS(D) {
  for (let P = 0; P < Math.min(3, Aw()); P++) {
    if (A2.charcantarget[P] === 1) {
      A2.targeted[P] = 1;
    }
  }
  D.mytarget = 3;
  D.target = 3;
}
r(AS, "scr_targetall");
function Aa(D) {
  if (!(A2.inv < 0)) {
    return;
  }
  if (A2.debugInv || g.invuln) {
    A2.inv = A2.invc * 40;
    return;
  }
  let P = D.target;
  if (P < 3 && A2.hp[A2.char[P]] <= 0) {
    P = Ad(D);
    D.target = P;
    let AU = Av.charinstance(P);
    if (AU) {
      AU.image_blend = "#ffffff";
      AU.darkify = 0;
    }
  }
  let At = 3;
  let AI = D.damage;
  if (P < 3) {
    AI = J(AI - A2.battledf[P] * 3);
    At = A2.char[P];
    if (A2.charaction[P] === 10) {
      AI = J((AI * 2) / 3);
    }
    if (AI < 1) {
      AI = 1;
    }
  }
  if (Av.shake) {
    Av.shake();
  }
  let AE = P < 3 ? Av.charinstance(P) : null;
  if (AE) {
    AE.hurt = 1;
    AE.hurttimer = 0;
  }
  let AC = AI;
  Q.with("obj_dmgwriter", (AR) => {
    if (AR.delaytimer >= 1) {
      AR.killactive = 1;
    }
  });
  let AZ = -1;
  let AW = Q.first("obj_heart");
  if (AW) {
    AW.dmgnoise = 1;
  }
  if (
    P < 3 &&
    (A2.hp[At] <= 0
      ? ((AZ = 4), (A2.hp[At] -= n(AI / 4)), (AC = n(AI / 4)))
      : ((A2.hp[At] -= AI),
        A2.hp[At] <= 0 &&
          ((AC = p(A2.hp[At] - A2.maxhp[At] / 2)),
          (AZ = 4),
          (A2.hp[At] = n(-A2.maxhp[At] / 2)),
          An(P))),
    Av.dmgwriter && AE)
  ) {
    let AR = Av.dmgwriter(AE.x, AE.y + AE.myheight - 24);
    AR.damage = AC;
    AR.type = AZ;
  }
  if (P === 3) {
    for (let Ai = 0; Ai < Aw(); Ai++) {
      At = A2.char[Ai];
      if (A2.hp[At] >= 0) {
        if (A2.charaction[Ai] === 10) {
          A2.hp[At] -= J(AI / 2);
        } else {
          A2.hp[At] -= AI;
        }
        if (A2.hp[At] <= 0) {
          A2.hp[At] = n(-A2.maxhp[0] / 2);
        }
      }
    }
  }
  A2.inv = A2.invc * 40;
  Av.damagecheck();
  let Ak = 1;
  for (let AT = 0; AT < Aw(); AT++) {
    if (A2.char[AT] !== 0 && A2.hp[A2.char[AT]] > 0) {
      Ak = 0;
    }
  }
  if (Ak === 1 && Av.gameover) {
    Av.gameover();
  }
}
r(Aa, "scr_damage");
function Ax(D) {
  if (!(A2.inv < 0)) {
    return;
  }
  let P = D.damage;
  let At = D.target;
  for (let AI = 0; AI < Aw(); AI++) {
    A2.inv = -1;
    D.damage = P;
    D.target = AI;
    if (A2.hp[A2.char[AI]] > 0 && A2.char[AI] !== 0) {
      Aa(D);
    }
  }
  A2.inv = A2.invc * 40;
  D.target = At;
}
r(Ax, "scr_damage_all");
function Ay(D) {
  let P = A2.charhero && A2.charhero[D];
  if (P === "noelle" || (!P && D === 4 && A2.chapter >= 2)) {
    if (A2.chapter >= 2) {
      return 6;
    } else {
      return 3;
    }
  }
  {
    let AI = P && i(P);
    if (AI && !AI.extends) {
      return AI.dmgtype ?? 0;
    }
  }
  let At =
    {
      kris: 1,
      susie: 2,
      ralsei: 3,
    }[P] || (D >= 1 && D <= 3 ? D : AP(D));
  return Math.max(0, Math.min(3, At - 1));
}
r(Ay, "dmgTypeOf");
function Ao(D, P, At) {
  let AI = null;
  if (Av.dmgwriter) {
    AI = Av.dmgwriter(A2.monsterx[D], A2.monstery[D] + 20 - A2.hittarget[D] * 20);
    AI.type = Ay(A2.char[At]);
    if (A2.chapter >= 2 && At === 5 && !A2.char[5]) {
      AI.type = 5;
    }
    AI.damage = P;
  }
  A2.monsterhp[D] -= P;
  let AE = Av.monsterinstance(D);
  if (A2.chapter === 5 && AE && typeof AE.callback_on_damage == "function") {
    AE.callback_on_damage(AE);
  }
  if (P > 0 && AE) {
    AE.shakex = 9;
    AE.state = 3;
    AE.hurttimer = 30;
    AE.hurtamt = P;
  }
  A2.hittarget[D] += 1;
  if (P === 0 && AE) {
    AE.hurtamt = 0;
    if (AE.hurttimer <= 15 && AE.candodge === 1) {
      AE.dodgetimer = 0;
      AE.state = 4;
    }
  }
  if (A2.chapter === 2 && Q.first("obj_sweet_enemy") && A2.monsterhp[D] <= 0) {
    A2.monsterhp[D] = 1;
  }
  let AC = Q.first("obj_queen_enemy")
    ? 1
    : Q.first("obj_spamton_neo_enemy")
      ? 2
      : Q.first("obj_berdlyb_enemy")
        ? 3
        : 0;
  if (A2.monsterhp[D] <= 0 && AC === 0 && AE) {
    AE.scr_monsterdefeat();
  }
  if (A2.monsterhp[D] <= 0 && AC === 3 && AE) {
    AE.endcon = 1;
  }
  return AI;
}
r(Ao, "scr_damage_enemy");
function AY() {
  Av.damagecheck();
}
r(AY, "scr_damage_check");
function Ab(D, P, At) {
  return L(P - 33, At);
}
export {
  d as a,
  Y as b,
  k as c,
  T as d,
  s as e,
  A0 as f,
  A2 as g,
  A7 as h,
  A9 as i,
  AA as j,
  AD as k,
  AP as l,
  AN as m,
  AO as n,
  AH as o,
  AL as p,
  Aw as q,
  Am as r,
  AB as s,
  AK as t,
  Au as u,
  AV as v,
  AM as w,
  Al as x,
  Ac as y,
  Aq as z,
  AG as A,
  Az as B,
  AX as C,
  AQ as D,
  An as E,
  AJ as F,
  Ae as G,
  Ap as H,
  Ag as I,
  Aj as J,
  Ar as K,
  Av as L,
  Ad as M,
  AS as N,
  Aa as O,
  Ax as P,
  Ay as Q,
  Ao as R,
  AY as S,
};
