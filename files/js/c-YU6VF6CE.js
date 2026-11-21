import { g as m } from "./c-O6GE5FYX.js";
import {
  Ab as x,
  B as i,
  Ba as T,
  Bb as o,
  Cb as g,
  Cc as e,
  Fc as s,
  Hc as p,
  I as t0,
  Ja as t1,
  Kb as t2,
  La as t3,
  Mb as t4,
  Ob as t5,
  Q as t6,
  V as t7,
  a as t8,
  ac as t9,
  ad as tw,
  b as tN,
  bc as tb,
  bd as tW,
  c as tX,
  cb as tD,
  cc as ty,
  dc as tv,
  ec as tV,
  f as th,
  fd as tP,
  gb as tB,
  gd as tF,
  hb as tC,
  hc as tQ,
  i as tk,
  kb as tR,
  kc as tZ,
  mc as tU,
  n as td,
  nc as tS,
  o as ta,
  ob as tz,
  p as tu,
  va as tM,
  zb as tq,
} from "./c-ZEHUSSXN.js";
import { a as tm, c as tI, e as tf, l as tl } from "./c-7Q4J33FN.js";
var tx = {};
tI(tx, {
  RoomHooks: () => bu,
  UT_FLED: () => bM,
  action_create_object: () => rG,
  action_kill_object: () => rg,
  action_move: () => N0,
  action_move_point: () => WA,
  action_move_to: () => rE,
  action_set_alarm: () => rO,
  action_set_friction: () => rs,
  action_set_gravity: () => rL,
  action_set_hspeed: () => rA,
  action_set_motion: () => WY,
  action_set_relative: () => rT,
  action_set_vspeed: () => rY,
  application_surface: () => N9,
  async_load: () => Wz,
  audio_channel_num: () => WP,
  audio_is_playing: () => tG,
  audio_pause_all: () => Wg,
  audio_pause_sound: () => Nz,
  audio_play_sound: () => WT,
  audio_resume_all: () => WE,
  audio_resume_sound: () => Nu,
  audio_sound_gain: () => NZ,
  audio_sound_get_gain: () => NS,
  audio_sound_get_pitch: () => Nd,
  audio_sound_pitch: () => NU,
  audio_stop_all: () => NM,
  audio_stop_sound: () => WG,
  buffer_async_group_begin: () => bN,
  buffer_async_group_end: () => bb,
  buffer_async_group_option: () => bW,
  buffer_create: () => b4,
  buffer_delete: () => b7,
  buffer_get_size: () => b8,
  buffer_load_async: () => bw,
  buffer_read: () => b6,
  buffer_save_async: () => b9,
  buffer_write: () => b5,
  chr: () => wy,
  collision_circle: () => tc,
  collision_line: () => tK,
  collision_rectangle: () => tJ,
  color_get_blue: () => rP,
  color_get_green: () => rh,
  color_get_red: () => rV,
  control_check: () => r7,
  control_check_pressed: () => r8,
  control_clear: () => r9,
  control_init: () => rN,
  control_update: () => rw,
  degtorad: () => rB,
  display_get_height: () => bz,
  display_get_width: () => ba,
  display_height: () => Wa,
  display_width: () => WS,
  distance_to_object: () => rQ,
  distance_to_point: () => rC,
  draw_ellipse_color: () => Wp,
  draw_ellipse_colour: () => X0,
  draw_line_width_color: () => NN,
  draw_line_width_colour: () => Nb,
  draw_set_circle_precision: () => NX,
  draw_sprite_part: () => Nw,
  draw_text_ext: () => NW,
  draw_triangle_color: () => Ws,
  draw_triangle_colour: () => WO,
  dropDeactivated: () => Wv,
  ds_map_add: () => w3,
  ds_map_clear: () => ww,
  ds_map_create: () => w2,
  ds_map_delete: () => w7,
  ds_map_destroy: () => w8,
  ds_map_exists: () => w6,
  ds_map_find_value: () => w5,
  ds_map_set: () => w4,
  ds_map_size: () => w9,
  ev_alarm: () => rd,
  ev_collision: () => ra,
  ev_create: () => rZ,
  ev_destroy: () => rU,
  ev_draw: () => ru,
  ev_other: () => rz,
  ev_step: () => rS,
  ev_user0: () => rM,
  ev_user1: () => rq,
  ev_user2: () => rm,
  ev_user3: () => rI,
  ev_user4: () => rf,
  ev_user5: () => rl,
  ev_user6: () => rx,
  ev_user7: () => rH,
  ev_user8: () => rJ,
  ev_user9: () => rK,
  event_perform: () => rc,
  extension_stubfunc_real: () => W8,
  file_delete: () => NG,
  file_exists: () => NT,
  file_rename: () => Ng,
  file_text_close: () => NL,
  file_text_eof: () => b3,
  file_text_open_append: () => NY,
  file_text_open_read: () => NE,
  file_text_open_write: () => NA,
  file_text_read_real: () => NO,
  file_text_read_string: () => Ns,
  file_text_readln: () => Np,
  file_text_write_real: () => b1,
  file_text_write_string: () => b0,
  file_text_writeln: () => b2,
  game_end: () => bJ,
  game_restart: () => bK,
  gamepad_button_check: () => r4,
  gamepad_button_check_pressed: () => r6,
  get_string_async: () => bh,
  hashnl: () => Nv,
  ini_close: () => Nl,
  ini_key_exists: () => Nc,
  ini_open: () => NI,
  ini_open_from_string: () => Nf,
  ini_read_real: () => Nx,
  ini_read_string: () => NH,
  ini_section_exists: () => Nj,
  ini_write_real: () => NJ,
  ini_write_string: () => NK,
  instance_activate_all: () => Wy,
  instance_activate_object: () => WD,
  instance_change: () => WL,
  instance_create: () => tL,
  instance_deactivate_all: () => Wb,
  instance_deactivate_object: () => WW,
  instance_exists: () => ts,
  instance_find: () => rR,
  instance_number: () => tY,
  instance_position: () => WV,
  is_real: () => wb,
  is_string: () => wW,
  is_undefined: () => wN,
  joystick_check_button: () => r5,
  json_decode: () => bD,
  json_encode: () => bX,
  keyboard_check: () => wp,
  keyboard_check_direct: () => r2,
  keyboard_check_pressed: () => r0,
  keyboard_check_released: () => r1,
  keyboard_clear: () => r3,
  keyboard_key: () => WM,
  keyboard_lastchar: () => Wm,
  keyboard_lastkey: () => Wq,
  keyboard_string: () => Wu,
  make_color_hsv: () => ry,
  make_color_rgb: () => rX,
  make_colour_hsv: () => rv,
  make_colour_rgb: () => rD,
  mouse_button: () => Wc,
  mouse_lastbutton: () => Wj,
  mouse_x: () => W4,
  mouse_y: () => W5,
  move_snap: () => rk,
  nomiss_bar: () => Nh,
  nomiss_check: () => NF,
  obj_time: () => rW,
  objectByIndex: () => tA,
  ord: () => wD,
  os_linux: () => W2,
  os_macosx: () => W1,
  os_type: () => bp,
  os_unknown: () => W3,
  os_windows: () => W0,
  ossafe_savedata_load: () => bT,
  ossafe_savedata_save: () => bj,
  path_end: () => tE,
  path_start: () => tg,
  radtodeg: () => rF,
  randomize: () => Wh,
  real: () => wX,
  registerArrayGlobals: () => Wi,
  resetAssetAudioState: () => NR,
  resetUtRuntimeForFight: () => WI,
  rnsound: () => W6,
  room: () => bs,
  room_battle: () => bO,
  room_goto: () => bm,
  room_goto_next: () => bf,
  room_height: () => bg,
  room_restart: () => bx,
  room_width: () => bG,
  script_execute: () => wa,
  sleep_x: () => bc,
  sprite_collision_mask: () => N6,
  sprite_create_from_surface: () => tT,
  sprite_delete: () => tj,
  sprite_get_height: () => N2,
  sprite_get_width: () => N1,
  sprite_get_xoffset: () => N3,
  sprite_get_yoffset: () => N4,
  sprite_replace: () => N5,
  steam_file_delete: () => WB,
  steam_file_exists: () => bv,
  steam_file_write_file: () => by,
  steam_initialised: () => WF,
  steam_is_overlay_enabled: () => bV,
  string_byte_length: () => W7,
  string_char_at: () => wV,
  string_copy: () => wh,
  string_count: () => wS,
  string_delete: () => wB,
  string_digits: () => wU,
  string_height: () => Ny,
  string_insert: () => wF,
  string_length: () => wv,
  string_letters: () => wd,
  string_lower: () => wC,
  string_pos: () => wP,
  string_repeat: () => wk,
  string_replace: () => wZ,
  string_replace_all: () => wR,
  string_upper: () => wQ,
  string_width: () => ND,
  surface_get_height: () => N8,
  surface_get_width: () => N7,
  takeRoomChange: () => bI,
  takeRoomRestart: () => bH,
  utRuntimeRestore: () => WK,
  utRuntimeSave: () => Wf,
  utText: () => NV,
  view_angle: () => WZ,
  view_current: () => WC,
  view_hview: () => bL,
  view_visible: () => WQ,
  view_wview: () => bY,
  view_xport: () => Wk,
  view_xview: () => bE,
  view_yport: () => WR,
  view_yview: () => bA,
  vk_alt: () => wx,
  vk_anykey: () => wA,
  vk_backspace: () => wK,
  vk_control: () => wl,
  vk_delete: () => wj,
  vk_down: () => wq,
  vk_enter: () => wm,
  vk_escape: () => wJ,
  vk_f1: () => wT,
  vk_f2: () => wG,
  vk_f4: () => wg,
  vk_f6: () => wE,
  vk_left: () => wz,
  vk_nokey: () => wY,
  vk_return: () => wI,
  vk_right: () => wM,
  vk_shift: () => wf,
  vk_space: () => wH,
  vk_tab: () => wc,
  vk_up: () => wu,
  vulnerable: () => NP,
  vulnerable_sans: () => NB,
  window_center: () => bP,
  window_get_caption: () => bZ,
  window_get_fullscreen: () => bk,
  window_get_height: () => bS,
  window_get_width: () => bd,
  window_get_x: () => bF,
  window_get_y: () => bC,
  window_height: () => Wd,
  window_set_caption: () => bR,
  window_set_fullscreen: () => bQ,
  window_set_position: () => bB,
  window_set_size: () => bU,
  window_width: () => WU,
  zeroArray: () => Wx,
});
tl();
tl();
var tH = [
  "areapop",
  "attacker",
  "bmenucoord",
  "bulletpwr",
  "bulletvariable",
  "choices",
  "control_new_state",
  "control_pressed",
  "control_state",
  "failure",
  "flag",
  "goldreward",
  "hurtanim",
  "idealborder",
  "item",
  "itemname",
  "itemnameb",
  "itemrewardchance",
  "itemrewardid",
  "menuchoice",
  "menucoord",
  "mnpwr",
  "monster",
  "monsteratk",
  "monsterdef",
  "monsterhp",
  "monsterinstance",
  "monstermaxhp",
  "monstername",
  "monstertype",
  "msg",
  "phone",
  "phonename",
  "specialdam",
  "spell",
  "tempvalue",
  "xpreward",
];
var tJ = e;
var tK = p;
var tc = s;
var tj = tF;
function tT(X1, ...X2) {
  if (X1 === -1 && t4.build) {
    X1 = t4.build();
  }
  return tP(X1, ...X2);
}
tm(tT, "sprite_create_from_surface");
function tG(X1) {
  let X2 = typeof X1 == "string" && !T() ? tv(X1) : X1;
  if (X2 && typeof X2 == "object" && X2.loop === false && X2.len > 0 && X2.currentTime >= X2.len) {
    return false;
  } else {
    return tD(X1);
  }
}
tm(tG, "audio_is_playing");
var tg = tw;
var tE = tW;
var tA = tR;
var tY = o;
var tL = tq;
var ts = x;
var tO = new Set();
function tp(X1, X2) {
  if (!tO.has(X1)) {
    tO.add(X1);
    console.warn("ut_runtime: " + X2);
  }
}
tm(tp, "once");
var w0 = new Map();
var w1 = 1;
function w2() {
  let X1 = w1++;
  w0.set(X1, new Map());
  return X1;
}
tm(w2, "ds_map_create");
function w3(X1, X2, X3) {
  let X4 = w0.get(X1);
  if (!X4 || X4.has(String(X2))) {
    return 0;
  } else {
    X4.set(String(X2), X3);
    return 1;
  }
}
tm(w3, "ds_map_add");
function w4(X1, X2, X3) {
  let X4 = w0.get(X1);
  if (X4) {
    X4.set(String(X2), X3);
    return 1;
  } else {
    return 0;
  }
}
tm(w4, "ds_map_set");
function w5(X1, X2) {
  let X3 = w0.get(X1);
  if (X3) {
    return X3.get(String(X2));
  }
}
tm(w5, "ds_map_find_value");
function w6(X1, X2) {
  let X3 = w0.get(X1);
  if (X3 && X3.has(String(X2))) {
    return 1;
  } else {
    return 0;
  }
}
tm(w6, "ds_map_exists");
function w7(X1, X2) {
  let X3 = w0.get(X1);
  if (X3) {
    X3.delete(String(X2));
  }
  return 0;
}
tm(w7, "ds_map_delete");
function w8(X1) {
  w0.delete(X1);
  return 0;
}
tm(w8, "ds_map_destroy");
function w9(X1) {
  let X2 = w0.get(X1);
  if (X2) {
    return X2.size;
  } else {
    return 0;
  }
}
tm(w9, "ds_map_size");
function ww(X1) {
  let X2 = w0.get(X1);
  if (X2) {
    X2.clear();
  }
  return 0;
}
tm(ww, "ds_map_clear");
function wN(X1) {
  if (X1 === undefined) {
    return 1;
  } else {
    return 0;
  }
}
tm(wN, "is_undefined");
function wb(X1) {
  if (typeof X1 == "number") {
    return 1;
  } else {
    return 0;
  }
}
tm(wb, "is_real");
function wW(X1) {
  if (typeof X1 == "string") {
    return 1;
  } else {
    return 0;
  }
}
tm(wW, "is_string");
function wX(X1) {
  if (typeof X1 == "number") {
    return X1;
  }
  let X2 = parseFloat(X1);
  if (Number.isFinite(X2)) {
    return X2;
  } else {
    return 0;
  }
}
tm(wX, "real");
function wD(X1) {
  return String(X1).charCodeAt(0) || 0;
}
tm(wD, "ord");
function wy(X1) {
  return String.fromCharCode(X1);
}
tm(wy, "chr");
function wv(X1) {
  return String(X1).length;
}
tm(wv, "string_length");
function wV(X1, X2) {
  return String(X1).charAt(X2 - 1);
}
tm(wV, "string_char_at");
function wh(X1, X2, X3) {
  return String(X1).substr(Math.max(0, X2 - 1), X3);
}
tm(wh, "string_copy");
function wP(X1, X2) {
  return String(X2).indexOf(String(X1)) + 1;
}
tm(wP, "string_pos");
function wB(X1, X2, X3) {
  let X4 = String(X1);
  return X4.slice(0, Math.max(0, X2 - 1)) + X4.slice(Math.max(0, X2 - 1) + X3);
}
tm(wB, "string_delete");
function wF(X1, X2, X3) {
  let X4 = String(X2);
  return X4.slice(0, Math.max(0, X3 - 1)) + String(X1) + X4.slice(Math.max(0, X3 - 1));
}
tm(wF, "string_insert");
function wC(X1) {
  return String(X1).toLowerCase();
}
tm(wC, "string_lower");
function wQ(X1) {
  return String(X1).toUpperCase();
}
tm(wQ, "string_upper");
function wk(X1, X2) {
  return String(X1).repeat(Math.max(0, Math.floor(X2)));
}
tm(wk, "string_repeat");
function wR(X1, X2, X3) {
  return String(X1).split(String(X2)).join(String(X3));
}
tm(wR, "string_replace_all");
function wZ(X1, X2, X3) {
  return String(X1).replace(String(X2), String(X3));
}
tm(wZ, "string_replace");
function wU(X1) {
  return String(X1).replace(/[^0-9]/g, "");
}
tm(wU, "string_digits");
function wd(X1) {
  return String(X1).replace(/[^A-Za-z]/g, "");
}
tm(wd, "string_letters");
function wS(X1, X2) {
  return String(X2).split(String(X1)).length - 1;
}
tm(wS, "string_count");
function wa(X1, X2, ...X3) {
  if (typeof X2 != "function") {
    tp(
      "script_execute:" + String(X2),
      "script_execute called with a non-function (" + String(X2) + ")",
    );
    return 0;
  } else {
    return X2.apply(X1, X3);
  }
}
tm(wa, "script_execute");
var wz = 37;
var wu = 38;
var wM = 39;
var wq = 40;
var wm = 13;
var wI = 13;
var wf = 16;
var wl = 17;
var wx = 18;
var wH = 32;
var wJ = 27;
var wK = 8;
var wc = 9;
var wj = 46;
var wT = 112;
var wG = 113;
var wg = 115;
var wE = 117;
var wA = 1;
var wY = 0;
function wL(X1) {
  return t7[X1 | 0];
}
tm(wL, "slot");
function ws() {
  for (let X1 in t6.held) {
    if (t6.held[X1]) {
      return true;
    }
  }
  return false;
}
tm(ws, "anyHeld");
function wO() {
  for (let X1 in t6.pressed) {
    if (t6.pressed[X1]) {
      return true;
    }
  }
  return t6.typed != null || !!t6.backspace;
}
tm(wO, "anyPressed");
function wp(X1) {
  if (X1 === wA) {
    if (ws()) {
      return 1;
    } else {
      return 0;
    }
  }
  if (X1 === wY) {
    if (ws()) {
      return 0;
    } else {
      return 1;
    }
  }
  let X2 = wL(X1);
  if (X2 && t6.held[X2]) {
    return 1;
  } else {
    return 0;
  }
}
tm(wp, "keyboard_check");
function r0(X1) {
  if (X1 === wA) {
    if (wO()) {
      return 1;
    } else {
      return 0;
    }
  }
  if (X1 === wY) {
    if (wO()) {
      return 0;
    } else {
      return 1;
    }
  }
  let X2 = wL(X1);
  if (!X2 && X1 === wK) {
    if (t6.backspace) {
      return 1;
    } else {
      return 0;
    }
  } else if (X2 && t6.pressed[X2]) {
    return 1;
  } else {
    return 0;
  }
}
tm(r0, "keyboard_check_pressed");
function r1(X1) {
  let X2 = wL(X1);
  if (X2 && t6.released[X2]) {
    return 1;
  } else {
    return 0;
  }
}
tm(r1, "keyboard_check_released");
function r2(X1) {
  return wp(X1);
}
tm(r2, "keyboard_check_direct");
function r3() {
  return 0;
}
tm(r3, "keyboard_clear");
function r4() {
  return 0;
}
tm(r4, "gamepad_button_check");
function r5() {
  return 0;
}
tm(r5, "joystick_check_button");
function r6() {
  return 0;
}
tm(r6, "gamepad_button_check_pressed");
function r7(X1) {
  if (m.control_state && m.control_state[X1]) {
    return 1;
  } else {
    return 0;
  }
}
tm(r7, "control_check");
function r8(X1) {
  if (m.control_pressed && m.control_pressed[X1]) {
    return 1;
  } else {
    return 0;
  }
}
tm(r8, "control_check_pressed");
function r9(X1) {
  if (m.control_pressed) {
    m.control_pressed[X1] = 0;
  }
  return 0;
}
tm(r9, "control_clear");
function rw() {
  if (!m.control_state) {
    m.control_state = [0, 0, 0];
    m.control_new_state = [0, 0, 0];
    m.control_pressed = [0, 0, 0];
  }
  let X1 = [
    t6.held.b1 || t6.pressed.b1 ? 1 : 0,
    t6.held.b2 || t6.pressed.b2 ? 1 : 0,
    t6.held.b3 || t6.pressed.b3 ? 1 : 0,
  ];
  for (let X2 = 0; X2 <= 2; X2++) {
    m.control_new_state[X2] = X1[X2];
    m.control_pressed[X2] = !m.control_state[X2] && X1[X2] ? 1 : 0;
    m.control_state[X2] = X1[X2];
  }
  return 0;
}
tm(rw, "control_update");
function rN() {
  m.control_state = [0, 0, 0];
  m.control_new_state = [0, 0, 0];
  m.control_pressed = [0, 0, 0];
  return 0;
}
tm(rN, "control_init");
rN();
var rb = class X6 extends tB {
  create() {
    this.up = 0;
    this.down = 0;
    this.left = 0;
    this.right = 0;
    this.time = 0;
    this.canquit = 1;
    this.j_ch = 0;
    this.visible = false;
    if (m.osflavor === undefined) {
      m.osflavor = 1;
    }
    if (m.disable_os_pause === undefined) {
      m.disable_os_pause = 0;
    }
    if (m.savedata_async_id === undefined) {
      m.savedata_async_id = -1;
    }
    rN();
  }
  beginStep() {
    if (bH() && bu.restart) {
      bu.restart();
      return;
    }
    let X1 = bI();
    if (X1 && bu.go) {
      bu.go(X1);
    }
  }
  step() {
    this.up = t6.held.up ? 1 : 0;
    this.down = t6.held.down ? 1 : 0;
    this.left = t6.held.left ? 1 : 0;
    this.right = t6.held.right ? 1 : 0;
    this.time = tz.frame;
    if (t6.typed != null) {
      Wm = t6.typed;
    }
    rw();
  }
  endStep() {
    tz.view.x = Number(bE[0]) || 0;
    tz.view.y = Number(bA[0]) || 0;
    let X1 = m.background_color;
    let X2 = X1 == null ? null : th(X1);
    this.bgcss = X2 && X2 !== tX.black && X2 !== "rgb(0, 0, 0)" && X2 !== "#000" ? X2 : null;
    this.visible = !!this.bgcss;
    this.depth = 1000000000;
  }
  draw(X1) {
    if (!this.bgcss || !X1 || !X1.ctx) {
      return;
    }
    let X2 = X1.ctx;
    X2.save();
    X2.setTransform(1, 0, 0, 1, 0, 0);
    X2.globalAlpha = 1;
    X2.globalCompositeOperation = "source-over";
    X2.fillStyle = this.bgcss;
    X2.fillRect(0, 0, 640, 480);
    X2.restore();
  }
};
tm(rb, "obj_time");
tf(rb, "kinds", tC("obj_time", tB));
var rW = rb;
rW.screenSpace = true;
function rX(X1, X2, X3) {
  return ((X3 & 255) << 16) | ((X2 & 255) << 8) | (X1 & 255);
}
tm(rX, "make_color_rgb");
function rD(X1, X2, X3) {
  return rX(X1, X2, X3);
}
tm(rD, "make_colour_rgb");
function ry(X1, X2, X3) {
  let X4 = (X1 / 255) * 6;
  let X5 = X2 / 255;
  let X7 = X3 / 255;
  let X8 = Math.floor(X4) % 6;
  let X9 = X4 - Math.floor(X4);
  let Xw = X7 * (1 - X5);
  let XN = X7 * (1 - X5 * X9);
  let Xb = X7 * (1 - X5 * (1 - X9));
  let XW = 0;
  let XX = 0;
  let XD = 0;
  if (X8 === 0) {
    XW = X7;
    XX = Xb;
    XD = Xw;
  } else if (X8 === 1) {
    XW = XN;
    XX = X7;
    XD = Xw;
  } else if (X8 === 2) {
    XW = Xw;
    XX = X7;
    XD = Xb;
  } else if (X8 === 3) {
    XW = Xw;
    XX = XN;
    XD = X7;
  } else if (X8 === 4) {
    XW = Xb;
    XX = Xw;
    XD = X7;
  } else {
    XW = X7;
    XX = Xw;
    XD = XN;
  }
  return rX(Math.round(XW * 255), Math.round(XX * 255), Math.round(XD * 255));
}
tm(ry, "make_color_hsv");
function rv(X1, X2, X3) {
  return ry(X1, X2, X3);
}
tm(rv, "make_colour_hsv");
function rV(X1) {
  return (X1 | 0) & 255;
}
tm(rV, "color_get_red");
function rh(X1) {
  return ((X1 | 0) >> 8) & 255;
}
tm(rh, "color_get_green");
function rP(X1) {
  return ((X1 | 0) >> 16) & 255;
}
tm(rP, "color_get_blue");
function rB(X1) {
  return X1 * tN;
}
tm(rB, "degtorad");
function rF(X1) {
  return X1 / tN;
}
tm(rF, "radtodeg");
function rC(X1, X2) {
  let X3 = tz.self;
  if (!X3) {
    return 0;
  }
  let X4 = Math.max(X3.bbox_left - X1, 0, X1 - X3.bbox_right);
  let X5 = Math.max(X3.bbox_top - X2, 0, X2 - X3.bbox_bottom);
  return Math.hypot(X4, X5);
}
tm(rC, "distance_to_point");
function rQ(X1) {
  let X2 = tz.self;
  let X3 =
    X1 && typeof X1 == "object"
      ? X1
      : tz.first(typeof X1 == "function" ? X1.kindName || X1.name : X1);
  if (!X2 || !X3 || X3.destroyed) {
    return 100000;
  }
  let X4 = g(X2);
  let X5 = g(X3);
  return Math.hypot(
    Math.max(X4[0] - X5[2], 0, X5[0] - X4[2]),
    Math.max(X4[1] - X5[3], 0, X5[1] - X4[3]),
  );
}
tm(rQ, "distance_to_object");
function rk(X1, X2) {
  let X3 = tz.self;
  if (X3) {
    X3.move_snap(X1, X2);
  }
  return 0;
}
tm(rk, "move_snap");
function rR(X1, X2) {
  return tz.all(X1)[X2] || null;
}
tm(rR, "instance_find");
var rZ = 0;
var rU = 1;
var rd = 2;
var rS = 3;
var ra = 4;
var rz = 7;
var ru = 8;
var rM = 10;
var rq = 11;
var rm = 12;
var rI = 13;
var rf = 14;
var rl = 15;
var rx = 16;
var rH = 17;
var rJ = 18;
var rK = 19;
function rc(X1, X2) {
  let X3 = tz.self;
  if (!X3 || X1 === undefined || X2 === undefined) {
    tp(
      "event_perform",
      "event_perform called with an undefined event type/number - ev_* constants are not in the transpiler constant table, so the call performs nothing",
    );
    return 0;
  } else if (X1 === rz && X2 >= rM && X2 <= rK) {
    X3.userEvent(X2 - rM);
    return 0;
  } else if (X1 === rd) {
    X3.alarmEvent(X2);
    return 0;
  } else if (X1 === rS) {
    X3.step();
    return 0;
  } else if (X1 === rZ) {
    X3.create();
    return 0;
  } else if (X1 === rU) {
    X3.instance_destroy();
    return 0;
  } else {
    tp("event_perform:" + X1 + ":" + X2, "event_perform(" + X1 + ", " + X2 + ") is not dispatched");
    return 0;
  }
}
tm(rc, "event_perform");
var rj = 0;
function rT(X1) {
  rj = X1 ? 1 : 0;
  return 0;
}
tm(rT, "action_set_relative");
function rG(X1, X2, X3) {
  let X4 = tz.self;
  let X5 = rj && X4 ? X4.x + X2 : X2;
  let X7 = rj && X4 ? X4.y + X3 : X3;
  return tq(X5, X7, X1);
}
tm(rG, "action_create_object");
function rg() {
  let X1 = tz.self;
  if (X1) {
    X1.instance_destroy();
  }
  return 0;
}
tm(rg, "action_kill_object");
function rE(X1, X2) {
  let X3 = tz.self;
  if (X3) {
    if (rj) {
      X3.x += X1;
      X3.y += X2;
    } else {
      X3.x = X1;
      X3.y = X2;
    }
  }
  return 0;
}
tm(rE, "action_move_to");
function rA(X1) {
  let X2 = tz.self;
  if (X2) {
    X2.hspeed = rj ? X2.hspeed + X1 : X1;
  }
  return 0;
}
tm(rA, "action_set_hspeed");
function rY(X1) {
  let X2 = tz.self;
  if (X2) {
    X2.vspeed = rj ? X2.vspeed + X1 : X1;
  }
  return 0;
}
tm(rY, "action_set_vspeed");
function rL(X1, X2) {
  let X3 = tz.self;
  if (X3) {
    X3.gravity_direction = X1;
    X3.gravity = rj ? X3.gravity + X2 : X2;
  }
  return 0;
}
tm(rL, "action_set_gravity");
function rs(X1) {
  let X2 = tz.self;
  if (X2) {
    X2.friction = rj ? X2.friction + X1 : X1;
  }
  return 0;
}
tm(rs, "action_set_friction");
function rO(X1, X2) {
  let X3 = tz.self;
  if (X3) {
    X3.alarm[X2] = rj ? X3.alarm[X2] + X1 : X1;
  }
  return 0;
}
tm(rO, "action_set_alarm");
var rp = [225, 270, 315, 180, -1, 0, 135, 90, 45];
function N0(X1, X2) {
  let X3 = tz.self;
  if (!X3) {
    return 0;
  }
  let X4 = String(X1);
  let X5 = [];
  for (let X8 = 0; X8 < 9 && X8 < X4.length; X8++) {
    if (X4.charAt(X8) === "1") {
      X5.push(rp[X8]);
    }
  }
  if (!X5.length) {
    return 0;
  }
  let X7 = X5[Math.floor(tk.next() * X5.length)];
  if (X7 < 0) {
    X3.speed = 0;
    return 0;
  } else {
    X3.direction = X7;
    X3.speed = rj ? X3.speed + X2 : X2;
    return 0;
  }
}
tm(N0, "action_move");
function N1(X1) {
  let X2 = t0[X1];
  if (X2) {
    return X2.w;
  } else {
    return 0;
  }
}
tm(N1, "sprite_get_width");
function N2(X1) {
  let X2 = t0[X1];
  if (X2) {
    return X2.h;
  } else {
    return 0;
  }
}
tm(N2, "sprite_get_height");
function N3(X1) {
  let X2 = t0[X1];
  if (X2) {
    return X2.ox;
  } else {
    return 0;
  }
}
tm(N3, "sprite_get_xoffset");
function N4(X1) {
  let X2 = t0[X1];
  if (X2) {
    return X2.oy;
  } else {
    return 0;
  }
}
tm(N4, "sprite_get_yoffset");
function N5() {
  return 0;
}
tm(N5, "sprite_replace");
function N6(X1, X2, X3, X4, X5, X7, X8, X9) {
  let Xw = t0[X1];
  if (Xw) {
    if (Number(X3) === 2) {
      Xw.bb = [Number(X4), Number(X5), Number(X7), Number(X8)];
    }
    if (Number(X9) === 1) {
      Xw.precise = false;
    }
  }
  return 0;
}
tm(N6, "sprite_collision_mask");
function N7() {
  return tz.room.w;
}
tm(N7, "surface_get_width");
function N8() {
  return tz.room.h;
}
tm(N8, "surface_get_height");
var N9 = -1;
function Nw(X1, X2, X3, X4, X5, X7, X8, X9) {
  if (t2) {
    t2.draw_sprite_part(X1, X2, X3, X4, X5, X7, X8, X9);
  }
  return 0;
}
tm(Nw, "draw_sprite_part");
function NN(X1, X2, X3, X4, X5, X7, X8) {
  if (t2) {
    t2.draw_line_width_color(X1, X2, X3, X4, X5, th(X7), th(X8));
  }
  return 0;
}
tm(NN, "draw_line_width_color");
function Nb(X1, X2, X3, X4, X5, X7, X8) {
  return NN(X1, X2, X3, X4, X5, X7, X8);
}
tm(Nb, "draw_line_width_colour");
function NW(X1, X2, X3, X4, X5) {
  if (!t2) {
    return 0;
  }
  let X7 = Nv(X3);
  let X8 = X4 > 0 ? X4 : t2.string_height("M");
  if (!(X5 > 0)) {
    t2.draw_text(X1, X2, X7);
    return 0;
  }
  let X9 = X2;
  for (let Xw of X7.split("\n")) {
    let XN = "";
    for (let Xb of Xw.split(" ")) {
      let XW = XN ? XN + " " + Xb : Xb;
      if (XN && t2.string_width(XW) > X5) {
        t2.draw_text(X1, X9, XN);
        X9 += X8;
        XN = Xb;
      } else {
        XN = XW;
      }
    }
    t2.draw_text(X1, X9, XN);
    X9 += X8;
  }
  return 0;
}
tm(NW, "draw_text_ext");
function NX() {
  return 0;
}
tm(NX, "draw_set_circle_precision");
function ND(X1) {
  if (t2) {
    return t2.string_width(Nv(X1));
  } else {
    return 0;
  }
}
tm(ND, "string_width");
function Ny(X1) {
  if (t2) {
    return t2.string_height(Nv(X1));
  } else {
    return 0;
  }
}
tm(Ny, "string_height");
function Nv(X1) {
  let X2 = String(X1);
  if (X2.indexOf("#") < 0) {
    return X2;
  } else {
    return X2.replace(/\\#/g, "")
      .replace(/#/g, "\n")
      .replace(/\u0001/g, "#");
  }
}
tm(Nv, "hashnl");
var NV = {
  draw_text(X1, X2, X3, X4, ...X5) {
    return X1.draw_text(X2, X3, Nv(X4), ...X5);
  },
  draw_text_transformed(X1, X2, X3, X4, ...X5) {
    return X1.draw_text_transformed(X2, X3, Nv(X4), ...X5);
  },
};
function Nh(X1) {
  if (!tM.nomiss) {
    return;
  }
  let X2 = tz.first("obj_target");
  if (X2) {
    X1.x = X2.x + (X2.sprite_width - X1.sprite_width) / 2;
  }
}
tm(Nh, "nomiss_bar");
function NP() {
  return m.invc < 1 && !tM.invuln;
}
tm(NP, "vulnerable");
function NB() {
  return !tM.invuln;
}
tm(NB, "vulnerable_sans");
function NF(X1) {
  if (tM.nomiss && X1.check && typeof X1.check == "object") {
    X1.check.x = X1.fatalx;
  }
}
tm(NF, "nomiss_check");
var NC = new Map();
var NQ = new Map();
var Nk = tm(
  (X1) => (typeof X1 == "string" || typeof X1 == "number" ? String(X1) : null),
  "assetKey",
);
function NR() {
  NC.clear();
  NQ.clear();
}
tm(NR, "resetAssetAudioState");
function NZ(X1, X2, X3 = 0) {
  let X4 = Nk(X1);
  if (X4 !== null && Number.isFinite(Number(X2))) {
    let X5 = Math.max(0, Math.min(1, Number(X2)));
    let X7 = X3 > 0 ? Math.max(1, Math.round((X3 / 1000) * 30)) : 0;
    NC.set(X4, {
      from: X7 ? NS(X1) : X5,
      to: X5,
      start: tz.frame,
      frames: X7,
    });
  }
  if (typeof X1 == "string" || (X1 && typeof X1 == "object")) {
    return tZ(X1, X2, ((Number(X3) || 0) * 30) / 1000);
  } else {
    return tV(X1, X2, X3);
  }
}
tm(NZ, "audio_sound_gain");
function NU(X1, X2) {
  let X3 = Nk(X1);
  if (X3 !== null && Number.isFinite(Number(X2))) {
    NQ.set(X3, Number(X2));
  }
  t9(X1, X2);
  let X4 = X1 && typeof X1 == "object" ? X1 : typeof X1 == "string" && !T() ? tv(X1) : null;
  if (X4 && typeof X4 == "object" && "preservesPitch" in X4) {
    try {
      X4.preservesPitch = Number(X2) === 1;
    } catch {}
  }
  if (typeof X1 == "string" && !T() && Number(X2) > 0) {
    let X5 = tv(X1);
    if (X5 && typeof X5 == "object" && X5.paused !== undefined && !X5.ended) {
      try {
        X5.playbackRate = Number(X2);
      } catch {}
    }
  }
  return 0;
}
tm(NU, "audio_sound_pitch");
function Nd(X1) {
  let X2 = Nk(X1);
  if (X2 !== null && NQ.has(X2)) {
    return NQ.get(X2);
  } else {
    return (X1 && X1.playbackRate) || 1;
  }
}
tm(Nd, "audio_sound_get_pitch");
function NS(X1) {
  let X2 = Nk(X1);
  if (X2 !== null && NC.has(X2)) {
    let X3 = NC.get(X2);
    if (!X3.frames) {
      return X3.to;
    }
    let X4 = Math.max(0, Math.min(1, (tz.frame - X3.start) / X3.frames));
    return X3.from + (X3.to - X3.from) * X4;
  }
  if (X1 && X1.volume !== undefined) {
    return X1.volume;
  } else {
    return 1;
  }
}
tm(NS, "audio_sound_get_gain");
var Na = tm((X1) => (typeof X1 == "string" && !T() ? tv(X1) : X1), "liveOf");
function Nz(X1) {
  tb(Na(X1));
  return 0;
}
tm(Nz, "audio_pause_sound");
function Nu(X1) {
  let X2 = typeof X1 == "string" && !T() ? tv(X1) : X1;
  if (X2 && X2.paused && !X2.ended) {
    ty(X2);
  }
  return 0;
}
tm(Nu, "audio_resume_sound");
function NM() {
  tQ();
  return 0;
}
tm(NM, "audio_stop_all");
var Nq = new Map();
var Nm = tm((X1, X2) => String(X1) + "/" + String(X2), "iniKey");
function NI() {
  return 0;
}
tm(NI, "ini_open");
function Nf() {
  return 0;
}
tm(Nf, "ini_open_from_string");
function Nl() {
  return "";
}
tm(Nl, "ini_close");
function Nx(X1, X2, X3) {
  let X4 = Nm(X1, X2);
  if (Nq.has(X4)) {
    let X5 = Number(Nq.get(X4));
    if (Number.isFinite(X5)) {
      return X5;
    } else {
      return 0;
    }
  }
  if (X3 === undefined) {
    return 0;
  } else {
    return X3;
  }
}
tm(Nx, "ini_read_real");
function NH(X1, X2, X3) {
  let X4 = Nm(X1, X2);
  if (Nq.has(X4)) {
    return String(Nq.get(X4));
  } else if (X3 === undefined) {
    return "";
  } else {
    return X3;
  }
}
tm(NH, "ini_read_string");
function NJ(X1, X2, X3) {
  Nq.set(Nm(X1, X2), Number(X3));
  return 0;
}
tm(NJ, "ini_write_real");
function NK(X1, X2, X3) {
  Nq.set(Nm(X1, X2), String(X3));
  return 0;
}
tm(NK, "ini_write_string");
function Nc(X1, X2) {
  if (Nq.has(Nm(X1, X2))) {
    return 1;
  } else {
    return 0;
  }
}
tm(Nc, "ini_key_exists");
function Nj(X1) {
  let X2 = String(X1) + "/";
  for (let X3 of Nq.keys()) {
    if (X3.startsWith(X2)) {
      return 1;
    }
  }
  return 0;
}
tm(Nj, "ini_section_exists");
function NT() {
  return 0;
}
tm(NT, "file_exists");
function NG() {
  return 0;
}
tm(NG, "file_delete");
function Ng() {
  return 0;
}
tm(Ng, "file_rename");
function NE() {
  return -1;
}
tm(NE, "file_text_open_read");
function NA() {
  return -1;
}
tm(NA, "file_text_open_write");
function NY() {
  return -1;
}
tm(NY, "file_text_open_append");
function NL() {
  return 0;
}
tm(NL, "file_text_close");
function Ns() {
  return "";
}
tm(Ns, "file_text_read_string");
function NO() {
  return 0;
}
tm(NO, "file_text_read_real");
function Np() {
  return "";
}
tm(Np, "file_text_readln");
function b0() {
  return 0;
}
tm(b0, "file_text_write_string");
function b1() {
  return 0;
}
tm(b1, "file_text_write_real");
function b2() {
  return 0;
}
tm(b2, "file_text_writeln");
function b3() {
  return 1;
}
tm(b3, "file_text_eof");
function b4() {
  return -1;
}
tm(b4, "buffer_create");
function b5() {
  return 0;
}
tm(b5, "buffer_write");
function b6() {
  return 0;
}
tm(b6, "buffer_read");
function b7() {
  return 0;
}
tm(b7, "buffer_delete");
function b8() {
  return 0;
}
tm(b8, "buffer_get_size");
function b9() {
  return -1;
}
tm(b9, "buffer_save_async");
function bw() {
  return -1;
}
tm(bw, "buffer_load_async");
function bN() {
  return 0;
}
tm(bN, "buffer_async_group_begin");
function bb() {
  return -1;
}
tm(bb, "buffer_async_group_end");
function bW() {
  return 0;
}
tm(bW, "buffer_async_group_option");
function bX() {
  return "";
}
tm(bX, "json_encode");
function bD() {
  return -1;
}
tm(bD, "json_decode");
function by() {
  return 0;
}
tm(by, "steam_file_write_file");
function bv() {
  return 0;
}
tm(bv, "steam_file_exists");
function bV() {
  return 0;
}
tm(bV, "steam_is_overlay_enabled");
function bh() {
  return -1;
}
tm(bh, "get_string_async");
function bP() {
  return 0;
}
tm(bP, "window_center");
function bB() {
  return 0;
}
tm(bB, "window_set_position");
function bF() {
  return 0;
}
tm(bF, "window_get_x");
function bC() {
  return 0;
}
tm(bC, "window_get_y");
function bQ() {
  return 0;
}
tm(bQ, "window_set_fullscreen");
function bk() {
  return 0;
}
tm(bk, "window_get_fullscreen");
function bR() {
  return 0;
}
tm(bR, "window_set_caption");
function bZ() {
  return "";
}
tm(bZ, "window_get_caption");
function bU() {
  return 0;
}
tm(bU, "window_set_size");
function bd() {
  return tz.room.w;
}
tm(bd, "window_get_width");
function bS() {
  return tz.room.h;
}
tm(bS, "window_get_height");
function ba() {
  return tz.room.w;
}
tm(ba, "display_get_width");
function bz() {
  return tz.room.h;
}
tm(bz, "display_get_height");
var bu = {
  restart: null,
  go: null,
  canStand: null,
  fled: null,
  exit: null,
  boot: null,
};
var bM = "quit";
var bq = null;
function bm(X1) {
  let X2 = String(X1);
  if (m.inbattle || bu.go) {
    if (m.battleover) {
      return 0;
    }
    let X3 = m.fightRoom || "room_battle";
    if (bu.go && bu.canStand && bu.canStand(X2, X3)) {
      bq = X2;
      return 0;
    }
    if (X3 === "room_gameover" || X2 === "room_gameover") {
      m.battleover = "ut-lose";
      return 0;
    }
    let X4 = tz.first("obj_battlecontroller");
    if (X4 && X4.runaway === 1 && m.flag && m.flag[11] === 1) {
      let X7 = bu.fled ? bu.fled(X2) : null;
      if (X7) {
        bq = X7;
        return 0;
      } else {
        m.battleover = bM;
        return 0;
      }
    }
    let X5 = bu.exit ? bu.exit(X2, tz.self) : null;
    if (X5) {
      bq = X5;
      return 0;
    } else {
      m.battleover = "ut-win";
      return 0;
    }
  }
  tp("room_goto", "room_goto(" + X2 + ") - no battle is running");
  return 0;
}
tm(bm, "room_goto");
function bI() {
  let X1 = bq;
  bq = null;
  return X1;
}
tm(bI, "takeRoomChange");
function bf() {
  return bm("next");
}
tm(bf, "room_goto_next");
var bl = false;
function bx() {
  if (m.inbattle && bu.restart) {
    bl = true;
    return 0;
  } else {
    tp("room_restart", "room_restart() - the sim restarts a fight through its own shell");
    return 0;
  }
}
tm(bx, "room_restart");
function bH() {
  let X1 = bl;
  bl = false;
  return X1;
}
tm(bH, "takeRoomRestart");
function bJ() {
  if (!bu.boot || !bu.go || !((bq = bu.boot("end")), bq)) {
    tp("game_end", "game_end() ignored");
  }
  return 0;
}
tm(bJ, "game_end");
function bK() {
  if (!bu.boot || !bu.go || !((bq = bu.boot("restart")), bq)) {
    tp("game_restart", "game_restart() ignored");
  }
  return 0;
}
tm(bK, "game_restart");
function bc() {
  return 0;
}
tm(bc, "sleep_x");
function bj() {
  return 0;
}
tm(bj, "ossafe_savedata_save");
function bT() {
  return 0;
}
tm(bT, "ossafe_savedata_load");
var bG = tz.room.w;
var bg = tz.room.h;
var bE = [0, 0, 0, 0, 0, 0, 0, 0];
var bA = [0, 0, 0, 0, 0, 0, 0, 0];
var bY = [640, 640, 640, 640, 640, 640, 640, 640];
var bL = [480, 480, 480, 480, 480, 480, 480, 480];
var bs = "room_battle";
var bO = "room_battle";
var bp = 0;
var W0 = 0;
var W1 = 1;
var W2 = 4;
var W3 = -1;
var W4 = 0;
var W5 = 0;
var W6 = 0;
function W7(X1) {
  return String(X1).length;
}
tm(W7, "string_byte_length");
function W8() {
  return 0;
}
tm(W8, "extension_stubfunc_real");
var W9 = [];
var Ww = tm(
  (X1, X2) =>
    X2 === X1 || (typeof X2 == "function" ? X1 instanceof X2 : X2 != null && X1.is(String(X2))),
  "kindMatch",
);
function WN(X1) {
  tz.remove(X1);
  X1.destroyed = true;
  X1.__deactivated = true;
  W9.push(X1);
}
tm(WN, "deactivate");
function Wb(X1) {
  let X2 = tz.self;
  for (let X3 of tz.list.slice()) {
    if (!X3.destroyed && (!X1 || X3 !== X2)) {
      WN(X3);
    }
  }
  return 0;
}
tm(Wb, "instance_deactivate_all");
function WW(X1) {
  for (let X2 of tz.list.slice()) {
    if (!X2.destroyed && !!Ww(X2, X1)) {
      WN(X2);
    }
  }
  return 0;
}
tm(WW, "instance_deactivate_object");
function WX(X1) {
  let X2 = [];
  let X3 = [];
  for (let X4 of W9) {
    (X1(X4) ? X2 : X3).push(X4);
  }
  if (!X2.length) {
    return 0;
  }
  W9 = X3;
  for (let X5 of X2) {
    X5.destroyed = false;
    X5.__deactivated = false;
    tz.list.push(X5);
  }
  tz.reindex();
  return 0;
}
tm(WX, "reactivate");
function WD(X1) {
  return WX((X2) => Ww(X2, X1));
}
tm(WD, "instance_activate_object");
function Wy() {
  return WX(() => true);
}
tm(Wy, "instance_activate_all");
function Wv() {
  W9 = [];
}
tm(Wv, "dropDeactivated");
function WV(X1, X2, X3) {
  for (let X4 of tz.all(X3)) {
    let X5 = Math.abs(X4.sprite_width) || 1;
    let X7 = Math.abs(X4.sprite_height) || 1;
    if (X1 >= X4.x && X1 <= X4.x + X5 && X2 >= X4.y && X2 <= X4.y + X7) {
      return X4;
    }
  }
  return null;
}
tm(WV, "instance_position");
function Wh() {
  return 0;
}
tm(Wh, "randomize");
function WP() {
  return 0;
}
tm(WP, "audio_channel_num");
function WB() {
  return 0;
}
tm(WB, "steam_file_delete");
function WF() {
  return 0;
}
tm(WF, "steam_initialised");
var WC = 0;
var WQ = [1, 0, 0, 0, 0, 0, 0, 0];
var Wk = [0, 0, 0, 0, 0, 0, 0, 0];
var WR = [0, 0, 0, 0, 0, 0, 0, 0];
var WZ = [0, 0, 0, 0, 0, 0, 0, 0];
var WU = 640;
var Wd = 480;
var WS = 640;
var Wa = 480;
var Wz = -1;
var Wu = "";
var WM = 0;
var Wq = 0;
var Wm = "";
function WI() {
  bE.fill(0);
  bA.fill(0);
  bY.fill(640);
  bL.fill(480);
  w0.clear();
  w1 = 1;
  rj = 0;
  Wm = "";
  bl = false;
  bq = null;
  bu.go = null;
  bu.canStand = null;
  bu.fled = null;
  bu.exit = null;
  bu.boot = null;
  Nq.clear();
  W9 = [];
  NC.clear();
  NQ.clear();
  delete m.background_color;
}
tm(WI, "resetUtRuntimeForFight");
t5(WI);
function Wf() {
  let X1 = new Map();
  for (let [X2, X3] of NC) {
    X1.set(X2, {
      ...X3,
    });
  }
  return {
    ini: new Map(Nq),
    vx: bE.slice(),
    vy: bA.slice(),
    vw: bY.slice(),
    vh: bL.slice(),
    pendingRoom: bq,
    roomRestartPending: bl,
    deactivated: W9.slice(),
    actionRelative: rj,
    keyboard_lastchar: Wm,
    gains: X1,
    pitches: new Map(NQ),
  };
}
tm(Wf, "utRuntimeSave");
var Wl = Symbol.for("ut.zeroArray.raw");
function Wx(X1) {
  let X2 = (X1 && X1[Wl]) || (Array.isArray(X1) ? X1 : []);
  return new Proxy(X2, {
    get(X3, X4) {
      if (X4 === Wl) {
        return X3;
      } else if (typeof X4 == "string" && /^\d+$/.test(X4) && X3[X4] === undefined) {
        return 0;
      } else {
        return X3[X4];
      }
    },
  });
}
tm(Wx, "zeroArray");
var WH = {
  ut: tH,
};
function Wi(X1, X2) {
  WH[X1] = X2;
}
tm(Wi, "registerArrayGlobals");
function WJ() {
  let X1 = WH[i];
  if (X1) {
    for (let X2 of X1) {
      let X3 = m[X2];
      if (Array.isArray(X3) && !X3[Wl] && !X3.__raw) {
        m[X2] = Wx(X3);
      }
    }
  }
}
tm(WJ, "rewrapArrays");
function WK(X1) {
  WJ();
  if (X1) {
    Nq.clear();
    for (let [X2, X3] of X1.ini) {
      Nq.set(X2, X3);
    }
    for (let X4 = 0; X4 < 8; X4++) {
      bE[X4] = X1.vx[X4];
      bA[X4] = X1.vy[X4];
      bY[X4] = X1.vw[X4];
      bL[X4] = X1.vh[X4];
    }
    bq = X1.pendingRoom;
    bl = X1.roomRestartPending;
    W9 = X1.deactivated.slice();
    rj = X1.actionRelative;
    Wm = X1.keyboard_lastchar;
    NC.clear();
    for (let [X5, X7] of X1.gains) {
      NC.set(X5, {
        ...X7,
      });
    }
    NQ.clear();
    for (let [X8, X9] of X1.pitches) {
      NQ.set(X8, X9);
    }
  }
}
tm(WK, "utRuntimeRestore");
var Wc = 0;
var Wj = 0;
function WT(X1, X2, X3) {
  if (X1 == null || X1 === -1) {
    return -1;
  }
  let X4 = String(X1);
  if (X3 === 1 || X3 === true) {
    return tS(X4);
  }
  let X5 = t8[X4];
  let X7 = X5 === undefined && /^(snd_|mus_sfx_)/.test(String(X4));
  if ((X5 > 0 && X5 <= 10) || X7) {
    let X8 = t1(X4);
    if (X8) {
      return X8;
    }
  }
  return tU(X4, 1, false);
}
tm(WT, "audio_play_sound");
function WG(X1) {
  t3(X1);
  return 0;
}
tm(WG, "audio_stop_sound");
function Wg() {
  return 0;
}
tm(Wg, "audio_pause_all");
function WE() {
  return 0;
}
tm(WE, "audio_resume_all");
function WA(X1, X2, X3) {
  let X4 = tz.self;
  if (!X4) {
    return 0;
  }
  let X5 = rj ? X4.x + X1 : X1;
  let X7 = rj ? X4.y + X2 : X2;
  let X8 = tu(X4.x, X4.y, X5, X7);
  X4.speed = X3;
  X4.direction = X8;
  return 0;
}
tm(WA, "action_move_point");
function WY(X1, X2) {
  let X3 = tz.self;
  if (X3) {
    if (rj) {
      X3.hspeed += td(X2, X1);
      X3.vspeed += ta(X2, X1);
      return 0;
    } else {
      X3.direction = X1;
      X3.speed = X2;
      return 0;
    }
  } else {
    return 0;
  }
}
tm(WY, "action_set_motion");
function WL(X1, X2) {
  let X3 = tz.self;
  if (!X3) {
    return 0;
  }
  tp(
    "instance_change",
    "instance_change(" +
      (X1 && X1.name) +
      ") - the port keeps the instance and runs the new Create",
  );
  if (X2 && X1 && X1.prototype && typeof X1.prototype.create == "function") {
    try {
      X1.prototype.create.call(X3);
    } catch {}
  }
  return 0;
}
tm(WL, "instance_change");
function Ws(X1, X2, X3, X4, X5, X7, X8, X9, Xw, XN) {
  let Xb = t2;
  if (!Xb || !Xb.ctx) {
    return 0;
  }
  let XW = Xb.color;
  if (X8 !== undefined) {
    Xb.color = th(X8);
  }
  let XX = th(X8);
  let XD = X9 === undefined ? XX : th(X9);
  let Xy = Xb.ctx;
  if (!XN && XD !== XX && typeof Xy.createLinearGradient == "function") {
    let Xv = Xy.createLinearGradient(X1, X2, (X3 + X5) / 2, (X4 + X7) / 2);
    if (Xv && typeof Xv.addColorStop == "function") {
      Xv.addColorStop(0, XX);
      Xv.addColorStop(1, XD);
      Xy.save();
      Xy.globalAlpha = Math.max(0, Math.min(1, Xb.alpha));
      Xy.fillStyle = Xv;
      Xy.beginPath();
      Xy.moveTo(X1, X2);
      Xy.lineTo(X3, X4);
      Xy.lineTo(X5, X7);
      Xy.closePath();
      Xy.fill();
      Xy.restore();
      Xb.color = XW;
      return 0;
    }
  }
  Xb.draw_triangle(X1, X2, X3, X4, X5, X7, XN);
  Xb.color = XW;
  return 0;
}
tm(Ws, "draw_triangle_color");
var WO = Ws;
function Wp(X1, X2, X3, X4, X5, X7, X8) {
  let X9 = t2;
  if (!X9 || !X9.ctx) {
    return 0;
  }
  let Xw = X9.ctx;
  let XN = (X1 + X3) / 2;
  let Xb = (X2 + X4) / 2;
  let XW = Math.abs(X3 - X1) / 2;
  let XX = Math.abs(X4 - X2) / 2;
  if (!(XW > 0) || !(XX > 0)) {
    return 0;
  }
  Xw.save();
  Xw.globalAlpha = Math.max(0, Math.min(1, X9.alpha));
  Xw.translate(XN, Xb);
  Xw.scale(1, XX / XW);
  let XD = th(X5);
  if (typeof Xw.createRadialGradient == "function") {
    let Xy = Xw.createRadialGradient(0, 0, 0, 0, 0, XW);
    if (Xy && typeof Xy.addColorStop == "function") {
      Xy.addColorStop(0, th(X5));
      Xy.addColorStop(1, th(X7));
      XD = Xy;
    }
  }
  Xw.beginPath();
  Xw.arc(0, 0, XW, 0, Math.PI * 2);
  if (X8) {
    Xw.strokeStyle = XD;
    Xw.stroke();
  } else {
    Xw.fillStyle = XD;
    Xw.fill();
  }
  Xw.restore();
  return 0;
}
tm(Wp, "draw_ellipse_color");
var X0 = Wp;
export {
  tH as a,
  tJ as b,
  tK as c,
  tc as d,
  tj as e,
  tT as f,
  tG as g,
  tg as h,
  tE as i,
  tA as j,
  tY as k,
  tL as l,
  ts as m,
  w2 as n,
  w3 as o,
  w4 as p,
  w5 as q,
  w6 as r,
  w7 as s,
  w8 as t,
  w9 as u,
  ww as v,
  wN as w,
  wb as x,
  wW as y,
  wX as z,
  wD as A,
  wy as B,
  wv as C,
  wV as D,
  wh as E,
  wP as F,
  wB as G,
  wF as H,
  wC as I,
  wQ as J,
  wk as K,
  wR as L,
  wZ as M,
  wU as N,
  wd as O,
  wS as P,
  wa as Q,
  wz as R,
  wu as S,
  wM as T,
  wq as U,
  wm as V,
  wI as W,
  wf as X,
  wl as Y,
  wx as Z,
  wH as _,
  wJ as $,
  wK as aa,
  wc as ba,
  wj as ca,
  wT as da,
  wG as ea,
  wg as fa,
  wE as ga,
  wA as ha,
  wY as ia,
  wp as ja,
  r0 as ka,
  r1 as la,
  r2 as ma,
  r3 as na,
  r4 as oa,
  r5 as pa,
  r6 as qa,
  r7 as ra,
  r8 as sa,
  r9 as ta,
  rw as ua,
  rN as va,
  rW as wa,
  rX as xa,
  rD as ya,
  ry as za,
  rv as Aa,
  rV as Ba,
  rh as Ca,
  rP as Da,
  rB as Ea,
  rF as Fa,
  rC as Ga,
  rQ as Ha,
  rk as Ia,
  rR as Ja,
  rZ as Ka,
  rU as La,
  rd as Ma,
  rS as Na,
  ra as Oa,
  rz as Pa,
  ru as Qa,
  rM as Ra,
  rq as Sa,
  rm as Ta,
  rI as Ua,
  rf as Va,
  rl as Wa,
  rx as Xa,
  rH as Ya,
  rJ as Za,
  rK as _a,
  rc as $a,
  rT as ab,
  rG as bb,
  rg as cb,
  rE as db,
  rA as eb,
  rY as fb,
  rL as gb,
  rs as hb,
  rO as ib,
  N0 as jb,
  N1 as kb,
  N2 as lb,
  N3 as mb,
  N4 as nb,
  N5 as ob,
  N6 as pb,
  N7 as qb,
  N8 as rb,
  N9 as sb,
  Nw as tb,
  NN as ub,
  Nb as vb,
  NW as wb,
  NX as xb,
  ND as yb,
  Ny as zb,
  Nv as Ab,
  NV as Bb,
  Nh as Cb,
  NP as Db,
  NB as Eb,
  NF as Fb,
  NR as Gb,
  NZ as Hb,
  NU as Ib,
  Nd as Jb,
  NS as Kb,
  Nz as Lb,
  Nu as Mb,
  NM as Nb,
  NI as Ob,
  Nf as Pb,
  Nl as Qb,
  Nx as Rb,
  NH as Sb,
  NJ as Tb,
  NK as Ub,
  Nc as Vb,
  Nj as Wb,
  NT as Xb,
  NG as Yb,
  Ng as Zb,
  NE as _b,
  NA as $b,
  NY as ac,
  NL as bc,
  Ns as cc,
  NO as dc,
  Np as ec,
  b0 as fc,
  b1 as gc,
  b2 as hc,
  b3 as ic,
  b4 as jc,
  b5 as kc,
  b6 as lc,
  b7 as mc,
  b8 as nc,
  b9 as oc,
  bw as pc,
  bN as qc,
  bb as rc,
  bW as sc,
  bX as tc,
  bD as uc,
  by as vc,
  bv as wc,
  bV as xc,
  bh as yc,
  bP as zc,
  bB as Ac,
  bF as Bc,
  bC as Cc,
  bQ as Dc,
  bk as Ec,
  bR as Fc,
  bZ as Gc,
  bU as Hc,
  bd as Ic,
  bS as Jc,
  ba as Kc,
  bz as Lc,
  bu as Mc,
  bM as Nc,
  bm as Oc,
  bI as Pc,
  bf as Qc,
  bx as Rc,
  bH as Sc,
  bJ as Tc,
  bK as Uc,
  bc as Vc,
  bj as Wc,
  bT as Xc,
  bG as Yc,
  bg as Zc,
  bE as _c,
  bA as $c,
  bY as ad,
  bL as bd,
  bs as cd,
  bO as dd,
  bp as ed,
  W0 as fd,
  W1 as gd,
  W2 as hd,
  W3 as id,
  W4 as jd,
  W5 as kd,
  W6 as ld,
  W7 as md,
  W8 as nd,
  Wb as od,
  WW as pd,
  WD as qd,
  Wy as rd,
  Wv as sd,
  WV as td,
  Wh as ud,
  WP as vd,
  WB as wd,
  WF as xd,
  WC as yd,
  WQ as zd,
  Wk as Ad,
  WR as Bd,
  WZ as Cd,
  WU as Dd,
  Wd as Ed,
  WS as Fd,
  Wa as Gd,
  Wz as Hd,
  Wu as Id,
  WM as Jd,
  Wq as Kd,
  Wm as Ld,
  WI as Md,
  Wf as Nd,
  Wx as Od,
  Wi as Pd,
  WK as Qd,
  Wc as Rd,
  Wj as Sd,
  WT as Td,
  WG as Ud,
  Wg as Vd,
  WE as Wd,
  WA as Xd,
  WY as Yd,
  WL as Zd,
  Ws as _d,
  WO as $d,
  Wp as ae,
  X0 as be,
  tx as ce,
};
