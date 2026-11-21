import { _F as J } from "./c-GVRGXMQT.js";
import { Ma as L } from "./c-4FRQGNTA.js";
import "./c-SNBMULDO.js";
import "./c-2XD6JUBJ.js";
import "./c-2RHLG27W.js";
import "./c-Q4AJT7BT.js";
import "./c-3MS4RS6S.js";
import { Rh as F } from "./c-HEUEF6GJ.js";
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
import { a as f, l as p } from "./c-7Q4J33FN.js";
p();
var { AR: X, FIRST: h, SETALL: E } = F;
var N = new Proxy(
  {},
  {
    get: f((O, Y) => J[Y] || L[Y], "get"),
  },
);
var n = {
  name: "room_dw_rhythm",
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
          id: 101686,
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
          id: 101687,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_rhythmgame",
          x: 0,
          y: 480,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 101688,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_ch3_GSB02",
          x: 0,
          y: 0,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 101689,
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
          id: 101690,
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
n.ginst = [101686, 101687, 101689, 101690, 101688];
export { n as ROOM };
