import { _F as A } from "./c-GVRGXMQT.js";
import { Ma as W } from "./c-4FRQGNTA.js";
import "./c-SNBMULDO.js";
import "./c-2XD6JUBJ.js";
import "./c-2RHLG27W.js";
import "./c-Q4AJT7BT.js";
import "./c-3MS4RS6S.js";
import { Rh as d } from "./c-HEUEF6GJ.js";
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
import { a as h, l as L } from "./c-7Q4J33FN.js";
L();
var { AR: b, FIRST: J, SETALL: v } = d;
var e = new Proxy(
  {},
  {
    get: h((X, Y) => A[Y] || W[Y], "get"),
  },
);
var H = {
  name: "room_shootout",
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
      bx: 32,
      by: 32,
    },
  ],
  rcc: null,
  layers: [
    {
      name: "collision",
      type: "Instances",
      depth: 0,
      visible: true,
      x: 0,
      y: 0,
      hs: 0,
      vs: 0,
      instances: [],
    },
    {
      name: "destructibles",
      type: "Instances",
      depth: 999050,
      visible: true,
      x: 0,
      y: 0,
      hs: 0,
      vs: 0,
      instances: [],
    },
    {
      name: "OBJECTS_MAIN",
      type: "Instances",
      depth: 999062,
      visible: true,
      x: 0,
      y: 0,
      hs: 0,
      vs: 0,
      instances: [
        {
          obj: "obj_mainchara",
          x: -64,
          y: 160,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 104645,
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
          id: 104646,
          pre: null,
          cc: null,
        },
        {
          obj: "obj_ch3_GSD03",
          x: 32,
          y: 0,
          xs: 1,
          ys: 1,
          rot: 0,
          frame: 0,
          speed: 1,
          color: 16777215,
          alpha: 1,
          id: 104648,
          pre: null,
          cc: null,
        },
      ],
    },
    {
      name: "fg",
      type: "Background",
      depth: 999162,
      visible: true,
      x: 0,
      y: 0,
      hs: -8,
      vs: 0,
      bg: {
        spr: "spr_desert_loop_foreground",
        visible: true,
        fore: false,
        htile: true,
        vtile: false,
        stretch: true,
        color: 16777215,
        alpha: 1,
        frame: 0,
        speed: 30,
      },
      instances: [],
    },
    {
      name: "md",
      type: "Background",
      depth: 999262,
      visible: true,
      x: 0,
      y: 0,
      hs: -4,
      vs: 0,
      bg: {
        spr: "spr_desert_loop_middle_2",
        visible: true,
        fore: false,
        htile: true,
        vtile: false,
        stretch: true,
        color: 16777215,
        alpha: 1,
        frame: 0,
        speed: 30,
      },
      instances: [],
    },
    {
      name: "md_back",
      type: "Background",
      depth: 999362,
      visible: true,
      x: 0,
      y: 0,
      hs: -2,
      vs: 0,
      bg: {
        spr: "spr_desert_loop_middle_back_3",
        visible: true,
        fore: false,
        htile: true,
        vtile: false,
        stretch: true,
        color: 16777215,
        alpha: 1,
        frame: 0,
        speed: 30,
      },
      instances: [],
    },
    {
      name: "bg",
      type: "Background",
      depth: 999462,
      visible: true,
      x: 0,
      y: 0,
      hs: -1,
      vs: 0,
      bg: {
        spr: "spr_desert_loop_backrgound_4",
        visible: true,
        fore: false,
        htile: true,
        vtile: false,
        stretch: true,
        color: 16777215,
        alpha: 1,
        frame: 0,
        speed: 30,
      },
      instances: [],
    },
  ],
};
H.ginst = [104645, 104646, 104648];
export { H as ROOM };
