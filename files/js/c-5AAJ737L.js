import { b as t, c as B, d as S } from "./c-IOQMCY55.js";
import { Ha as N } from "./c-LAR7MFOW.js";
import { b as z, c as y, e as u } from "./c-D44YBQC3.js";
import { a as Y } from "./c-A3CL5ELZ.js";
import { g as r } from "./c-O6GE5FYX.js";
import { hb as i } from "./c-ZEHUSSXN.js";
import { a as R, e as U, l as T } from "./c-7Q4J33FN.js";
T();
var L = class A extends y {
  userEvent(E) {
    if (E === 12) {
      N.call(this);
      r.monsterx[this.myself] = this.x + 20;
      r.monstery[this.myself] = this.y;
      return;
    }
    return super.userEvent(E);
  }
};
R(L, "obj_cutenemy2");
U(L, "kinds", i("obj_cutenemy2", y));
var O = L;
function P(E) {
  return B[E] || z[E] || null;
}
R(P, "classFor");
function I() {
  let Q = [];
  for (let W of t.unusedEnemyObjects || []) {
    let q = P(W.object);
    let V = q || O;
    let F = !q;
    let v0 = W.why;
    if (F) {
      v0 +=
        " The port has no class for it yet, so its stats, ACT list and check text run on the data-only shell.";
    }
    let v1 = (W.needs || []).filter((v4) => v4.type > 0 && P(v4.object));
    let v2 = [
      {
        cls: V,
        type: W.type,
        x: 500,
        y: 120,
        setup: () => {},
      },
    ];
    let v3 = v1.map((v4) => ({
      cls: P(v4.object),
      x: 500,
      y: 120,
    }));
    if (v1.length) {
      v0 +=
        " " +
        v1.map((v4) => v4.object).join(", ") +
        " is put in the room with it for that reason, inert (not registered as a monster, so its own Step never runs) and invisible, purely so those reads resolve.";
    }
    Q.push({
      id: "ch2cut_" + W.object.replace(/^(obj|o)_/, ""),
      name: u(W),
      chapter: 2,
      area: "CUT CONTENT",
      cut: true,
      generated: true,
      desc: W.name + "#" + W.object + "#" + S(v0),
      party: r.char && r.char.length ? r.char.slice() : [1, 2, 3],
      heromakex: [80, 80, 80],
      heromakey: [50, 130, 210],
      cutObject: true,
      monsters: v2,
      bystanders: v3,
      battlemsg: "* " + W.name + " blocks the way!",
      encounterno: 0,
      music: "battle",
      background: Y(null),
    });
  }
  for (let v4 of t.unusedMonsterTypes || []) {
    if (!v4.carriedForward) {
      Q.push({
        id: "ch2cut" + v4.type,
        name: v4.name,
        chapter: 2,
        area: "CUT CONTENT",
        cut: true,
        generated: true,
        desc: v4.name + "#Chapter 2 monstertype " + v4.type + ".#" + S(v4.why),
        party: r.char && r.char.length ? r.char.slice() : [1, 2, 3],
        heromakex: [80, 80, 80],
        heromakey: [50, 130, 210],
        monsters: [
          {
            cls: O,
            type: v4.type,
            x: 500,
            y: 160,
            setup: () => {},
          },
        ],
        battlemsg: "* " + v4.name + " blocks the way!",
        encounterno: 0,
        music: "battle",
        background: Y(null),
      });
    }
  }
  return Q;
}
R(I, "buildCutFights2");
var D = t.unusedAttackDetail || [];
var Z = t;
export { O as a, I as b, D as c, Z as d };
