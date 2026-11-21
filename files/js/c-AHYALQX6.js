import { _F as D } from "./c-GVRGXMQT.js";
import { Ma as H } from "./c-4FRQGNTA.js";
import "./c-SNBMULDO.js";
import "./c-2XD6JUBJ.js";
import "./c-2RHLG27W.js";
import "./c-Q4AJT7BT.js";
import "./c-3MS4RS6S.js";
import { Rh as p } from "./c-HEUEF6GJ.js";
import "./c-66FIJ62A.js";
import "./c-QJXN6G4A.js";
import "./c-CPDHW4F2.js";
import "./c-Q2IMJXHR.js";
import "./c-UDQUHXBV.js";
import "./c-5UGGU4DV.js";
import "./c-F4ZSRAAO.js";
import "./c-YU6VF6CE.js";
import "./c-O6GE5FYX.js";
import "./c-ZEHUSSXN.js";
import { a as m, l as Z } from "./c-7Q4J33FN.js";
Z();
var { AR: G, FIRST: w, SETALL: K } = p;
var X = new Proxy(
  {},
  {
    get: m((E, Q) => D[Q] || H[Q], "get"),
  },
);
var k = {
  name: "room_susiezilla_singleScreenMockup",
  w: 1280,
  h: 480,
  color: 0,
  drawColor: false,
  speed: 0,
  views: [
    {
      x: 320,
      y: 0,
      w: 640,
      h: 480,
      follow: null,
      bx: 160,
      by: 240,
    },
  ],
  rcc: null,
  layers: [
    {
      name: "OBJECTS_MAIN",
      type: "Instances",
      depth: 0,
      visible: true,
      x: 0,
      y: 0,
      hs: 0,
      vs: 0,
      instances: [
        {
          obj: "obj_mainchara",
          x: -260,
          y: 140,
          xs: 2,
          ys: 2,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 104223,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_darkcontroller",
          x: -400,
          y: 40,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 104224,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_susiezilla_test_menu",
          x: 0,
          y: 0,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 104225,
          pre: null,
          cc: null,
        },
      ],
    },
    {
      name: "BGCOLOR",
      type: "Background",
      depth: 2147483600,
      visible: true,
      x: 0,
      y: 0,
      hs: 0,
      vs: 0,
      bg: {
        spr: null,
        visible: true,
        fore: false,
        htile: false,
        vtile: false,
        stretch: false,
        color: 0,
        alpha: 1,
        frame: 0,
        speed: 15,
      },
      instances: [],
    },
  ],
};
k.ginst = [104223, 104224, 104225];
export { k as ROOM };
