import { g as i } from "./c-O6GE5FYX.js";
import { ob as c } from "./c-ZEHUSSXN.js";
import { a as L, l } from "./c-7Q4J33FN.js";
l();
var I = [
  "obj_sansbullet_parent",
  "obj_gasterblaster",
  "blt_sizebone",
  "obj_bonestab",
  "obj_sans_bonebul",
  "obj_menubone",
  "obj_menubone_bottom",
];
var X = 0.6;
var G = 9;
var Z = 12;
var W = null;
var J = 0;
function D() {
  i.karma = 0;
  W = null;
  J = 0;
}
L(D, "karmaReset");
function V() {
  return i.karma || 0;
}
L(V, "karmaAmount");
function P() {
  for (let U of c.list) {
    if (U.destroyed) {
      continue;
    }
    let y = U.constructor.name;
    if (I.includes(y) || (typeof U.is == "function" && U.is("obj_sansbullet_parent"))) {
      return true;
    }
  }
  return false;
}
L(P, "sourcePresent");
var N = true;
function A() {
  if (N) {
    i.karma = 0;
    return;
  }
  if (typeof i.hp == "number") {
    if (i.karma === undefined) {
      i.karma = 0;
    }
    if (W !== null && i.hp < W) {
      let U = W - i.hp;
      if (U > 0 && P()) {
        let y = Math.min(Z - i.karma, Math.floor(U * X));
        if (y > 0) {
          i.hp += y;
          i.karma += y;
        }
      }
    }
    if (i.karma > 0) {
      J++;
      if (J >= G) {
        J = 0;
        if (i.hp > 1) {
          i.hp -= 1;
          i.karma -= 1;
        } else {
          i.karma = Math.max(0, i.karma - 1);
        }
      }
    } else {
      J = 0;
    }
    W = i.hp;
  }
}
L(A, "karmaStep");
function a(U) {
  if (!i.karma || i.karma <= 0 || typeof i.hp != "number") {
    return;
  }
  let y = c.first("obj_hpname");
  if (!y) {
    return;
  }
  let E = U.ctx;
  let j = i.maxhp || 20;
  let S = 1.2;
  let g = y.x + 5;
  let q = y.y;
  E.save();
  E.globalAlpha = 0.85;
  E.fillStyle = "#7b2fbe";
  E.fillRect(
    Math.round(g + (i.hp - i.karma) * S),
    Math.round(q),
    Math.max(1, Math.round(i.karma * S)),
    16,
  );
  E.restore();
  U.draw_set_font("fnt_main");
  U.draw_text(Math.round(g + j * S + 46), Math.round(q), "KR " + i.karma, "#b47ae0");
}
L(a, "karmaDraw");
export { D as a, V as b, N as c, A as d, a as e };
