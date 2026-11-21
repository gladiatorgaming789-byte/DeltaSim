import { _F as H } from "./c-GVRGXMQT.js";
import { Ma as d } from "./c-4FRQGNTA.js";
import "./c-SNBMULDO.js";
import "./c-2XD6JUBJ.js";
import "./c-2RHLG27W.js";
import "./c-Q4AJT7BT.js";
import "./c-3MS4RS6S.js";
import { Rh as X } from "./c-HEUEF6GJ.js";
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
import { a as Q, l as e } from "./c-7Q4J33FN.js";
e();
var { AR: A, FIRST: E, SETALL: m } = X;
var p = new Proxy(
  {},
  {
    get: Q((v, f) => H[f] || d[f], "get"),
  },
);
var M = {
  name: "room_rhythmgame_tenna_test",
  w: 640,
  h: 480,
  color: 0,
  drawColor: false,
  speed: 0,
  views: [
    {
      x: 0,
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
          x: -200,
          y: 120,
          xs: 2,
          ys: 2,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 108353,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_darkcontroller",
          x: 0,
          y: 0,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 108354,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_solidblock_32",
          x: -243,
          y: 100,
          xs: 3.5,
          ys: 3.5,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 108355,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_rhythmgame_tenna_tester",
          x: 320,
          y: 360,
          xs: 2,
          ys: 2,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 108356,
          pre: null,
          cc: null,
        },
      ],
    },
    {
      name: "COLLISION_DOOR",
      type: "Instances",
      depth: 100,
      visible: true,
      x: 0,
      y: 0,
      hs: 0,
      vs: 0,
      instances: [],
    },
    {
      name: "TILES",
      type: "Tiles",
      depth: 1000000,
      visible: true,
      x: 0,
      y: 0,
      hs: 0,
      vs: 0,
      instances: [],
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
M.ginst = [108353, 108354, 108355, 108356];
export { M as ROOM };
