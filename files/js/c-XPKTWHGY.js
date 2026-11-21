import { _F as g } from "./c-GVRGXMQT.js";
import { Ma as Z } from "./c-4FRQGNTA.js";
import "./c-SNBMULDO.js";
import "./c-2XD6JUBJ.js";
import "./c-2RHLG27W.js";
import "./c-Q4AJT7BT.js";
import "./c-3MS4RS6S.js";
import { Rh as j } from "./c-HEUEF6GJ.js";
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
import { a as f, l as V } from "./c-7Q4J33FN.js";
V();
var { AR: d, FIRST: q, SETALL: e } = j;
var C = new Proxy(
  {},
  {
    get: f((N, E) => g[E] || Z[E], "get"),
  },
);
var w = {
  name: "room_shadowmantle_movementExample",
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
          obj: "obj_shadowmantleExample",
          x: 0,
          y: 0,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 103124,
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
      tileset: {
        bg: "bg_board_adventure_tileset",
        tw: 32,
        th: 32,
        bx: 2,
        by: 2,
        cols: 30,
      },
      tilesX: 20,
      tilesY: 15,
      data: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 130, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 132, 0, 0, 0, 0],
        [0, 0, 0, 0, 146, 163, 161, 145, 161, 161, 161, 161, 161, 161, 161, 148, 0, 0, 0, 0],
        [0, 0, 0, 0, 146, 161, 161, 163, 161, 163, 161, 163, 161, 163, 161, 148, 0, 0, 0, 0],
        [0, 0, 0, 0, 146, 161, 163, 161, 161, 161, 129, 163, 161, 161, 129, 148, 0, 0, 0, 0],
        [0, 0, 0, 0, 146, 161, 161, 161, 163, 161, 161, 145, 161, 163, 161, 148, 0, 0, 0, 0],
        [0, 0, 0, 0, 146, 161, 163, 161, 163, 161, 163, 161, 163, 161, 161, 148, 0, 0, 0, 0],
        [0, 0, 0, 0, 146, 129, 161, 161, 161, 161, 161, 161, 161, 161, 163, 148, 0, 0, 0, 0],
        [0, 0, 0, 0, 162, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 164, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
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
        color: 7493388,
        alpha: 1,
        frame: 0,
        speed: 15,
      },
      instances: [],
    },
  ],
};
w.ginst = [103124];
export { w as ROOM };
