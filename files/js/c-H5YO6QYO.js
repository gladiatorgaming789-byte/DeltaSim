import { _F as c } from "./c-GVRGXMQT.js";
import { Ma as n } from "./c-4FRQGNTA.js";
import "./c-SNBMULDO.js";
import "./c-2XD6JUBJ.js";
import "./c-2RHLG27W.js";
import "./c-Q4AJT7BT.js";
import "./c-3MS4RS6S.js";
import { Rh as q } from "./c-HEUEF6GJ.js";
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
import { a as B, l as C } from "./c-7Q4J33FN.js";
C();
var { AR: P, FIRST: H, SETALL: g } = q;
var K = new Proxy(
  {},
  {
    get: B((h, i) => c[i] || n[i], "get"),
  },
);
var W = {
  name: "room_dw_chef_empty",
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
          x: 280,
          y: 200,
          xs: 2,
          ys: 2,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 108046,
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
          id: 108047,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_dw_chef_screen",
          x: 0,
          y: 80,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 108048,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_room_chef_empty",
          x: 40,
          y: 0,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 108049,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_dw_chef_screen_empty",
          x: 0,
          y: 40,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 108050,
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
      name: "ASSETS_BG",
      type: "Assets",
      depth: 16777216,
      visible: true,
      x: 0,
      y: 0,
      hs: 0,
      vs: 0,
      sprites: [
        {
          spr: "spr_dw_kitchen",
          x: 0,
          y: 0,
          xs: 2,
          ys: 2,
          color: 16777215,
          alpha: 1,
          frame: 0,
          speed: 1,
          rot: 0,
          id: "graphic_29284964",
        },
      ],
      instances: [],
    },
    {
      name: "TILES",
      type: "Tiles",
      depth: 16777316,
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
W.ginst = [108046, 108047, 108048, 108049, 108050];
export { W as ROOM };
