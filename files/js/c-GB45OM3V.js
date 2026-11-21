import { c as U } from "./c-2XD6JUBJ.js";
import { C as V, G as a, H as S, s as h } from "./c-Q4AJT7BT.js";
import { f as J, g } from "./c-UDQUHXBV.js";
import { d as j, f as W, n as Q, p as o } from "./c-F4ZSRAAO.js";
import { g as Z } from "./c-O6GE5FYX.js";
import { hb as B, j as v, ob as C, zb as N } from "./c-ZEHUSSXN.js";
import { a as F, e as L, g as q, l as R } from "./c-7Q4J33FN.js";
R();
function z(x) {
  Z.monstername[x] = "Dummy";
  Z.monstermaxhp[x] = 450;
  Z.monsterhp[x] = 450;
  Z.monsterat[x] = 0;
  Z.monsterdf[x] = 0;
  Z.monsterexp[x] = 0;
  Z.monstergold[x] = 0;
  Z.sparepoint[x] = 0;
  Z.mercymod[x] = 0;
  Z.mercymax[x] = 100;
  Z.canact[x][0] = 1;
  Z.actname[x][0] = "Check";
  Z.canact[x][1] = 1;
  Z.actname[x][1] = "Hug";
  Z.canact[x][2] = 1;
  Z.actname[x][2] = "Hug Ralsei";
  Z.actactor[x][2] = 3;
  Z.battlemsg[0] = "* The tutorial begins.";
}
F(z, "setupDummyStats");
var A = class I2 extends h {
  create() {
    Object.assign(this, {
      turns: 0,
      talktimer: 0,
      talkmax: 90,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      mercymod: 0,
      acting: 0,
      actcon: 0,
      con: 0,
      plot: 0,
      checked: 0,
      r_hugtime: 0,
      hugtime: 0,
      dial: 0,
      attackcon: 0,
      misstime: 0,
      hittime: 0,
      defendtime: 0,
      won: 0,
      hitdum: 0,
      ambushed: 0,
      battlecancel: 0,
      spare_command: 0,
      spare_used: 0,
      item_command: 0,
      win_spare: 0,
      ral_wrongcommand: 0,
      ral_wrongcommand_count: 0,
      pacifycon: 0,
      sparecon: 0,
      rtimer: 0,
      dummyhp: 450,
      shakex: 0,
      wontimer: 0,
      mytarget: 0,
    });
    this.kris_inithp = Z.hp[1];
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.depth = 50;
  }
  userEvent(x) {
    if (x === 12) {
      Z.monsterx[this.myself] = this.x + this.sprite_height / 2;
      Z.monstery[this.myself] = this.y + this.sprite_height / 2 + 30;
    }
  }
  step() {
    let x = this.myself;
    if (this.ambushed === 0) {
      C.with("obj_writer", (H) => H.instance_destroy());
      C.with("obj_face", (H) => H.instance_destroy());
      Z.charturn = V();
      Z.mnfight = 1;
      Z.myfight = -1;
      this.ambushed = 1;
    }
    if (this.plot !== 3) {
      Z.charmove[0] = 1;
      Z.charmove[1] = 0;
      this.spare_used = Z.charspecial[0] === 100 ? 1 : 0;
    } else {
      Z.charmove[0] = 0;
      Z.charmove[1] = 1;
      if (Z.charspecial[1] === 100) {
        this.ral_wrongcommand = 1;
      }
      if (Z.charaction[1] === 4) {
        this.ral_wrongcommand = 1;
      }
      if (Z.charaction[1] !== 2 && Z.charaction[1] !== 4) {
        C.with("obj_attackpress", (H) => {
          C.with("obj_heroparent", (I0) => {
            if (I0.state === 1) {
              I0.state = 0;
            }
            I0.attacked = 0;
            I0.itemed = 0;
          });
          Z.mnfight = 1;
          Z.myfight = -1;
          H.instance_destroy();
        });
        Z.charaction[1] = 0;
        Z.faceaction[1] = 0;
      }
    }
    if (Z.monster[x] === 1) {
      Z.flag[51 + x] = 4;
      let H = 0;
      if (Z.mnfight === 1 && this.talked === 0) {
        if (this.attackcon === 0) {
          Q();
          this.mytarget = 0;
          Z.targeted[0] = 1;
          this.attackcon = 1;
          N(320, 170, W);
          N(0, 0, o);
        }
        Z.typer = 45;
        Z.fc = 2;
        Z.fe = 1;
        Z.msg = new Array(100).fill(" ");
        Z.msg[0] = "* Skip/%";
        if (this.plot === 0 && this.attackcon === 1) {
          Z.fe = 0;
          Z.flag[30] = 0;
          Z.msg[0] = "\\E0* See that \\cRHEART\\cW, Kris?/";
          Z.msg[1] = "* That's your \\cRSOUL\\cW, the culmination of your being!/";
          Z.msg[2] = "\\EB* Within^1, it holds your WILL..^1. your COMPASSION.../";
          Z.msg[3] = "\\E1* ... and the FATE of the world./";
          Z.msg[4] = "\\EB* If it gets hit^1, you and your friends will lose HP./";
          Z.msg[5] = "\\E3* If everyone's HP reaches 0^1, we'll lose the battle./";
          Z.msg[6] = "\\E0* So^1, please take care to avoid the enemy's attack./";
          Z.msg[7] = "\\E8* Ready^1?&* Let's try dodging!/%";
        }
        if (this.plot >= 1) {
          this.dial = 0;
          if (Z.charaction[0] === 1) {
            if (this.dummyhp > Z.monsterhp[0]) {
              this.dial = 1;
            }
            if (this.dummyhp === Z.monsterhp[0] && this.plot === 1) {
              this.dial = 2;
            }
            if (this.dummyhp === Z.monsterhp[0] && this.misstime === 9 && this.plot === 2) {
              this.dial = 3;
              Z.flag[205] = 6;
            }
            if (this.dial === 1 && this.hitdum >= 3) {
              this.hitdum = 4;
              this.dial = 3;
              Z.flag[205] = 4;
            }
          }
          if (Z.charaction[0] === 10 && H === 0) {
            Z.fe = 0;
            Z.msg[0] =
              "\\E0* That's DEFENDING^1, Kris^1.&* You'll recover TP and take less damage./";
            Z.msg[1] = "\\E8* You should learn to ATTACK first^1, though./%";
            if (this.defendtime === 1) {
              Z.msg[0] = "\\E8* Gee^1, Kris^1!&* You sure are good at defending!/";
              Z.msg[1] = "\\E6* I'm not attacking^1, you^1, though, so...&* No need to defend!/%";
            }
            if (this.defendtime === 2) {
              Z.fe = 1;
              Z.msg[0] = "\\E1* Ummm..^1.&* Kris?/";
              Z.msg[1] = "\\E8* There are no bullets^1, and you can't use TP.../";
              Z.msg[2] = "\\E8* So^1, umm^1, maybe you could stop defending?/%";
            }
            if (this.defendtime === 3) {
              Z.fe = 9;
              Z.msg[0] = "\\E9* .../%";
            }
            if (this.plot === 2) {
              Z.msg[0] = "\\E8* Great job^1, Kris^1!&* Now that you've gathered TP -/";
              Z.msg[1] = "\\E0* How about spending that TP on one of my \\cYSPELLs\\cW?/";
              Z.msg[2] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
              Z.msg[3] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
              Z.msg[4] = "\\E8* It'll fall asleep^1, and we'll win peacefully!/%";
              if (Z.monsterhp[0] === Z.monstermaxhp[0]) {
                Z.msg[2] = "\\E1* If you had^1, um^1, hit the enemy^1, it'd be TIRED now./";
                Z.msg[3] = "\\E0* In that case^1, we use my \\cYPACIFY\\cW spell on it.../";
              }
              Z.monsterstatus[x] = 1;
              if (Z.monstercomment[x] === " ") {
                Z.monstercomment[x] = "(Tired)";
              }
              this.plot = 3;
              if (this.defendtime === 4) {
                this.defendtime = 3;
              }
            }
            if (this.defendtime >= 4) {
              this.dial = 3;
              Z.flag[205] = 5;
            }
            this.defendtime++;
            H = 1;
          }
          if (Z.charaction[0] === 4 && H === 0) {
            Z.fe = 0;
            Z.msg[0] = "\\E0* Oh^1, Kris^1, you found an \\cYITEM\\cW?/";
            Z.msg[1] = "\\E1* I figured \\cYITEMs\\cW are self-explanatory^1, so.../";
            Z.msg[2] = "\\E6* Let's skip over them for now^1, OK?/%";
            if (this.item_command === 1) {
              Z.fe = 1;
              Z.msg[0] = "\\E3* You really want to learn about \\cYITEMS\\cW, Kris...?/";
              Z.msg[1] = "\\E0* OK^1, I'll teach you!/";
              Z.msg[2] = "\\E1* Errm.../";
              Z.msg[3] = "\\E0* You use them^1, and something happens./";
              Z.msg[4] = "\\E8* ... is that sufficient?/%";
            }
            if (this.item_command === 2) {
              Z.fe = 6;
              Z.msg[0] = "\\E6* Yes^1, haha^1, that \\cYITEM\\cW is very pretty^1, isn't it?/";
              Z.msg[1] = "\\E8* I'm glad you're enjoying yourself^1, Kris...!/%";
            }
            if (this.item_command === 3) {
              Z.fe = 0;
              Z.msg[0] = "\\E8* Kris^1, we can find lots more ITEMs on our journey!/";
              Z.msg[1] = "\\E0* Which^1, will continue..^1. after this tutorial./%";
            }
            if (this.item_command >= 4) {
              this.dial = 3;
            }
            H = 1;
            this.item_command++;
          }
          if (this.ral_wrongcommand === 1 && H === 0) {
            Z.msg[0] = "\\E8* Kris^1, please ask me to do a spell./%";
            let I1 = this.ral_wrongcommand_count;
            if (I1 === 0) {
              Z.msg[0] = "\\E8* Kris^1, wouldn't you rather learn about \\cYSPELLs\\cW?/%";
            }
            if (I1 === 1) {
              Z.msg[0] = "\\E6* Kris^1, do you..^1. know what a \\cYSPELL\\cW is?/";
              Z.msg[1] = "\\E1* Can humans not even ASK people to use them...?/%";
            }
            if (I1 === 2) {
              Z.msg[0] = "\\E6* Kris^1, what if you just give me a hand sign?/%";
            }
            if (I1 === 3) {
              Z.msg[0] = "*\\E8 Ummm^1, if this is too difficult.../";
              Z.msg[1] = "* Let's move to the next lesson^1, OK?/";
              Z.msg[2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../";
              Z.msg[3] = "\\E8* Can be defeated through various \\I3   s of kindness!/";
              Z.msg[4] = "* Kris^1, though it's just a dummy^1, why not give it a HUG?/%";
              if (this.plot === 3) {
                this.plot = 4;
              }
              if (Z.mercymod[x] >= 100) {
                Z.msg[2] = "\\EB* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/";
                Z.msg[3] = "\\E0* Because of that^1, its name turned \\cYYELLOW\\cW!/";
                Z.msg[4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%";
                this.plot = 5;
              }
            }
            this.ral_wrongcommand_count++;
            H = 0;
          }
          if (Z.charaction[1] === 2 && this.ral_wrongcommand === 0 && H === 0) {
            Z.msg[0] = "\\E0* Great^1, Kris^1! A healing spell works too!/";
            Z.msg[1] = "* Now I have just a little more to teach you!/";
            Z.msg[2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../";
            Z.msg[3] = "\\E8* Can be defeated through various \\I3   s of kindness!/";
            Z.msg[4] = "\\E6* Kris^1, though it's just a dummy^1, why not give it a HUG?/%";
            if (this.pacifycon === 1) {
              Z.msg[0] = "\\E0* Great^1, Kris^1! We would have won the battle by now!/";
              if (Z.monsterstatus[x] === 0) {
                Z.msg[0] = "\\E0* Great^1, Kris^1! If it was TIRED we would have won!/";
              }
            }
            this.plot = 4;
            if (Z.mercymod[x] >= 100) {
              Z.msg[2] = "\\E0* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/";
              Z.msg[3] = "* Because of that^1, its name turned \\cYYELLOW\\cW!/";
              Z.msg[4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%";
              this.plot = 5;
            }
            H = 1;
          }
          if (this.spare_used === 1 && H === 0) {
            if (this.plot < 5) {
              Z.fe = 0;
              if (this.spare_command === 0) {
                Z.msg[0] = "\\E8* Ah^1, Kris^1, don't worry about that command yet!/%";
              }
              if (this.spare_command === 1) {
                Z.msg[0] = "\\E6* You're really merciful^1, aren't you^1, Kris?/%";
              }
              if (this.spare_command >= 2) {
                Z.msg[0] = "\\E1* Kris^1, you are aware it's just a dummy^1, right...?/%";
              }
              if (Z.mercymod[x] >= 100) {
                this.win_spare++;
              }
              if (this.win_spare === 1) {
                Z.fe = 6;
                Z.msg[0] = "\\E0* Kris^1, since you SPARED an enemy after ACTING,/";
                Z.msg[1] = "\\E1* You would have won in a real battle, but, um.../";
                Z.msg[2] = "\\E0* Don't you want to learn other things^1, first?/%";
              }
              if (this.win_spare === 2) {
                Z.fe = 6;
                Z.msg[0] = "\\E0* I see..^1. Then^1, perhaps we can just end here./";
                Z.msg[1] = "\\E1* You know how to win peacefully, so.../";
                Z.msg[2] = "\\E8* That's good enough for me!/%";
                this.won = 1;
              }
            }
            if (this.plot === 5) {
              Z.msg[0] = "\\E0* Great job^1, Kris^1!&* That'd be the end in a real battle!/";
              Z.msg[1] = "\\E8* I'm really happy I had the chance to teach you^1, Kris!/%";
              this.won = 1;
            }
            this.spare_used = 0;
            this.spare_command++;
            H = 1;
          }
          if (this.dial === 1) {
            if (this.plot === 1) {
              Z.fe = 3;
              if (this.dummyhp > Z.monsterhp[0] + 50) {
                Z.msg[0] = "\\E3* W-wow^1, Kris^1!&* That was an amazing attack!/";
                Z.msg[1] = "\\E8* Have you done this before or something...?/";
              } else {
                Z.msg[0] = "\\E0* Good job^1, Kris^1!&* By the way^1, you'll do more damage.../";
                Z.msg[1] = "\\E8* Pressing Z when the cursor enters the box on the left!/";
              }
              if (this.misstime >= 6) {
                Z.fe = 8;
                Z.msg[0] = "\\E3* Kris^1!&* You did it!!!/";
                Z.msg[1] = "\\E8* (I was really just about at my limit...)/";
              }
              Z.msg[2] = "\\E0* OK, next let's try DEFENDING. (\\I1    )/";
              Z.msg[3] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../";
              Z.msg[4] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/";
              Z.msg[5] = "* (Watch the orange big bar on the left^1! I'll explain it next!)/%";
              this.plot = 2;
              if (this.defendtime >= 1) {
                Z.msg[2] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/";
                Z.msg[3] = "* The big orange TP bar on the left filled up a bit!/";
                Z.msg[4] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/";
                Z.msg[5] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
                Z.msg[6] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
                Z.msg[7] = "* It'll fall asleep^1, and we'll win peacefully!/%";
                this.plot = 3;
                Z.monsterstatus[x] = 1;
                Z.monstercomment[x] = "(Tired)";
              }
            } else {
              if (this.hitdum === 0) {
                Z.fe = 1;
                Z.msg[0] = "\\E1* Ummm..^1. Kris^1?&* You don't need to hit it anymore./";
                Z.msg[1] = "\\E8* I already know you're great at attacking!/%";
              }
              if (this.hitdum === 1) {
                Z.fe = 1;
                Z.msg[0] = "\\E1* U-umm^1, Kris..^1. H-How do I put this...?/";
                Z.msg[1] = "\\E1* Kris^1, seeing you^1, um^1, attack an effigy of myself.../";
                Z.msg[2] = "\\E6* ... Kris^1, are you trying to say something?/%";
              }
              if (this.hitdum === 2) {
                Z.fe = 6;
                Z.msg[0] = "\\E6* Ah^1, Kris..^1. I..^1. um^1, I think I understand./";
                Z.msg[1] = "\\E1* W^1-well^1, if..^1. during our adventure,/";
                Z.msg[2] = "\\E7* ... if you want to hit me^1, that's OK^1, too!/%";
              }
              if (this.hitdum >= 3) {
                this.dial = 3;
              }
              this.hitdum++;
            }
          }
          if (this.dial === 2) {
            Z.fe = 3;
            Z.msg[0] =
              "\\E3* Oh^1, sorry^1, Kris^1!&* I forgot to mention^1!&* When you're ATTACKing.../";
            Z.msg[1] = "\\E8* Press Z again when the cursor goes in the box!/%";
            if (this.misstime >= 1) {
              Z.fe = 8;
              Z.msg[0] = "\\E8* It's OK^1, Kris^1!&* You'll get it^1!&* Try again!/%";
              let I3 = this.misstime;
              if (I3 === 2) {
                Z.msg[0] = "\\E8* Press Z when the white rectangle's in the blue box!/%";
              }
              if (I3 === 3) {
                Z.msg[0] = "\\E6* Ummm..^1. you can press Z a lot^1, if it helps!/%";
              }
              if (I3 === 4) {
                Z.msg[0] = "\\E6* Kris..^1.&* Please try to press Z./%";
              }
              if (I3 === 5) {
                Z.msg[0] = "\\E6* Ummm^1, Kris^1?&* Can you see the white rectangle?/%";
              }
              if (I3 === 6) {
                Z.msg[0] = "\\E8* You know rectangles^1?&* They're like messed-up squares?/%";
              }
              if (I3 === 7) {
                Z.fe = 9;
                Z.msg[0] = "\\E9* .../%";
              }
              if (I3 === 8) {
                Z.fe = 1;
                Z.msg[0] = "\\E6* Umm^1, perhaps we should try something else?/%";
                this.plot = 2;
                if (this.defendtime >= 1) {
                  Z.msg[0] = "\\E6* Umm^1, perhaps we should try something else?/";
                  Z.msg[1] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/";
                  Z.msg[2] = "* The big orange TP bar on the left filled up a bit!/";
                  Z.msg[3] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/";
                  Z.msg[4] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
                  Z.msg[5] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
                  Z.msg[6] = "* It'll fall asleep^1, and we'll win peacefully!/%";
                  this.plot = 3;
                  Z.monsterstatus[x] = 1;
                  Z.monstercomment[x] = "(Tired)";
                }
              }
            }
            this.misstime++;
          }
          if (this.dial === 3) {
            Z.fe = 9;
            Z.msg[0] = "\\E9* .../";
            Z.msg[1] = "\\E8* Kris^1, I think I've^1, um^1, perhaps.../";
            Z.msg[2] = "\\E1* Reached the limits of what I can teach you today./";
            Z.msg[3] = "\\E0* Let's go find Susie./%";
            if (this.hitdum >= 4) {
              Z.msg[0] = "\\E9* Kris^1, I don't mean to interrupt^1, but.../";
              Z.msg[1] = "\\E3* You're going to break the dummy at this rate./";
              Z.msg[2] = "\\E1* I suppose we'll have to stop here for now./%";
            }
            this.won = 1;
            Z.myfight = 999;
            Z.mnfight = 999;
          }
        }
        let I0 = J();
        if (Z.msg[0] === "* Skip/%") {
          C.with("obj_writer", (I4) => I4.instance_destroy());
          C.with("obj_face", (I4) => I4.instance_destroy());
        }
        this.acting = 0;
        this.spare_used = 0;
        this.dummyhp = Z.monsterhp[x];
        this.talked = 1;
        this.talktimer = 0;
        this.ral_wrongcommand = 0;
      }
      if (this.talked === 1 && Z.mnfight === 1) {
        if (this.won === 0) {
          this.rtimer = 0;
          if (!C.exists("obj_writer")) {
            Z.mnfight = 2;
          }
          if (Z.mnfight === 2 && this.attackcon === 1) {
            if (!C.exists("obj_moveheart") && !C.exists("obj_heart")) {
              Q();
            }
            if (!C.exists("obj_growtangle")) {
              N(320, 170, W);
            }
          }
        } else if (!C.exists("obj_writer")) {
          this.scr_monsterdefeat();
          S();
        }
      }
      if (Z.mnfight === 2 && this.attacked === 0) {
        if (this.attackcon !== 1) {
          this.rtimer = 8;
        }
        this.rtimer++;
        if (this.rtimer >= 8) {
          let I4 = N(this.x, this.y, U);
          I4.type = 14;
          I4.target = this.mytarget;
          I4.damage = Z.monsterat[x] * 5;
          this.turns++;
          Z.turntimer = 150;
          if (this.attackcon === 1) {
            this.battlecancel = 2;
          }
          if (this.attackcon !== 1) {
            Z.turntimer = -100;
            I4.instance_destroy();
          }
          this.attackcon = 2;
          this.attacked = 1;
          Z.typer = 6;
          Z.fc = 0;
          Z.battlemsg[0] = "* What?";
          if (this.plot === 1) {
            Z.battlemsg[0] = "* Let's try FIGHTing!&  (\\I0    )";
          }
          if (this.plot === 2) {
            Z.battlemsg[0] = "* Let's try DEFENDing!&  (\\I1    )";
          }
          if (this.plot === 3) {
            Z.battlemsg[0] = "* Let's try SPELLs!&  (\\I2    )";
          }
          if (this.plot === 4) {
            Z.battlemsg[0] = "* Let's ACT!&  (\\I3    )";
          }
          if (this.plot === 5) {
            Z.battlemsg[0] = "* Let's SPARE!&  (\\I4    )";
          }
          this.spare_used = 0;
          this.ral_wrongcommand = 0;
        } else {
          Z.turntimer = 150;
        }
      }
      if (Z.mnfight === 2 && Z.turntimer <= 1 && this.battlecancel === 2) {
        let I5 = C.first("obj_battlecontroller");
        if (I5) {
          I5.noreturn = 1;
        }
        this.con = 1;
        this.battlecancel = 3;
      }
    }
    if (this.con === 1) {
      this.con = 2;
      this.alarm[5] = 2;
    }
    if (this.con === 3) {
      Z.typer = 45;
      Z.fc = 2;
      Z.fe = 0;
      Z.msg = new Array(100).fill(" ");
      Z.msg[0] = "* Great job^1, Kris^1!&* You're a natural!/";
      if (this.kris_inithp > Z.hp[1]) {
        Z.fe = 6;
        Z.msg[0] = "\\E6* Ouch^1, it's OK^1, Kris^1! You're still learning!/";
      }
      Z.msg[1] = "\\E8* Anyhow^1, after the enemy attacks^1, it's our turn^1, Kris!/";
      Z.msg[2] = "\\E0* First^1, I'll teach you how to \\cYFIGHT\\cW (\\I0    )./";
      Z.msg[3] = "\\E1* Though \\cYFIGHTing\\cW is unnecessary in this world.../";
      Z.msg[4] = "\\E8* There's no harm in a thorough lesson!/%";
      Z.battlemsg[0] = "* Let's try FIGHTing!&  (\\I0   )";
      J();
      this.con = 6;
    }
    if (this.con === 6 && !C.exists("obj_writer")) {
      let I6 = C.first("obj_battlecontroller");
      if (I6) {
        I6.noreturn = 0;
        I6.alarm[2] = 2;
      }
      this.battlecancel = 0;
      if (this.plot === 0) {
        this.plot = 1;
      }
      this.con = 7;
    }
    if (Z.myfight === 3) {
      this.actStep();
    }
    if (this.state === 3) {
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      }
    }
    if (this.shakex > 0) {
      this.shakex -= 1;
    }
  }
  alarmEvent(x) {
    if (x === 5) {
      this.con = 3;
    }
    if (x === 4) {
      this.actcon++;
    }
  }
  actStep() {
    let x = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Z.msg = new Array(100).fill(" ");
      Z.msg[0] =
        "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./%";
      if (this.checked === 0) {
        Z.msg[0] =
          "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./";
        Z.fc = 2;
        Z.fe = 6;
        Z.msg[1] = "* Er^1, sorry^1, it kind of looks like me.../";
        Z.msg[2] = "\\E1* I've been alone^1, so I didn't have anyone to model it after.../";
        Z.msg[3] = "\\E6* Kris^1, since it's me^1, please be kind to it^1, OK?/%";
        Z.typer = 45;
        J();
      } else {
        g();
      }
      this.checked++;
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.actcon = 10;
      let H = C.first("obj_herokris");
      if (H) {
        Z.faceaction[H.myself] = 0;
        H.state = 0;
        H.acttimer = 0;
      }
      Z.msg = new Array(100).fill(" ");
      Z.msg[0] = "* You hug the DUMMY./%";
      g();
    }
    if (this.actcon === 1 && !C.exists("obj_writer")) {
      Z.acting = [0, 0, 0];
      this.actcon = 0;
      this.acting = -1;
      a();
    }
    if (this.actcon === 10) {
      let I0 = C.first("obj_herokris");
      I0.visible = false;
      this.k = j(I0.x, I0.y, "spr_kris_hug");
      this.k.image_speed = 0;
      this.k.depth = 0;
      this.moveTo(this.k, Z.monsterx[0] - 42, Z.monstery[0] - 30, 15);
      this.actcon = 11;
      this.alarm[4] = 25;
    }
    if (this.actcon === 12) {
      this.k.image_speed = 0.25;
      this.actcon = 13;
      this.alarm[4] = 12;
    }
    if (this.actcon === 14) {
      this.k.image_speed = 0;
      this.actcon = 15;
    }
    if (this.actcon === 15 && !C.exists("obj_writer")) {
      Z.flag[205] = 1;
      Z.typer = 45;
      Z.fc = 2;
      Z.fe = 0;
      Z.msg = new Array(100).fill(" ");
      Z.msg[0] = "* How caring^1, Kris!/%";
      if (this.plot === 5) {
        Z.msg[0] = "* That's great^1, Kris^1!&* Just one hug is enough^1, though!/%";
        if (this.hugtime >= 1) {
          Z.msg[0] = "\\E8* Kris^1, you don't need to hug it anymore./%";
        }
        this.hugtime++;
      }
      if (this.plot === 1) {
        Z.fe = 3;
        Z.msg[0] = "* Huh...^1? Kris^1, you'd rather hug it out than fight?/";
        Z.msg[1] = "\\E1* .../";
        Z.msg[2] = "\\E8* You know what^1, that's fine^1! We don't need to fight!/";
        Z.msg[3] = "* OK, next let's try DEFENDING. (\\I1    )/";
        Z.msg[4] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../";
        Z.msg[5] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/";
        Z.msg[6] = "* (Watch the orange big bar on the left^1! I'll explain it next!/%";
        this.plot = 2;
        if (this.defendtime >= 1) {
          Z.msg[3] = "* Kris^1, if you didn't notice^1, when you DEFENDED before -/";
          Z.msg[4] = "* The big orange TP bar on the left filled up a bit!/";
          Z.msg[5] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/";
          Z.msg[6] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
          Z.msg[7] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
          Z.msg[8] = "* It'll fall asleep^1, and we'll win peacefully!/%";
          this.plot = 3;
        }
      }
      if (this.plot === 4) {
        Z.fe = 8;
        Z.msg[0] = "* Aww^1, that's great^1, Kris!/";
        Z.msg[1] = "\\E0* Each enemy has different ACTs that satisfy them./";
        Z.msg[2] = "* When an enemy is satisfied^1, its name turns \\cYYELLOW\\cW./";
        Z.msg[3] = "* When that happens^1, you can defeat it by SPARING (\\I4    ) it!/";
        Z.msg[4] =
          "* If we \\cYSPARE\\cW all the enemies we meet^1, we'll never have to \\cYFIGHT\\cW!/%";
        this.plot = 5;
      }
      J();
      this.actcon = 16;
    }
    if (this.actcon === 16 && !C.exists("obj_writer")) {
      C.with("obj_face", (I1) => I1.instance_destroy());
      this.k.image_speed = -0.25;
      this.actcon = 17;
      this.alarm[4] = 12;
    }
    if (this.actcon === 18) {
      this.k.image_speed = 0;
      let I1 = C.first("obj_herokris");
      this.moveTo(this.k, I1.x, I1.y, 15);
      this.actcon = 19;
      this.alarm[4] = 25;
    }
    if (this.actcon === 20) {
      this.k.instance_destroy();
      Z.mercymod[0] = 100;
      Z.mercymod[1] = 100;
      C.first("obj_herokris").visible = true;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      let I3 = C.first("obj_herokris");
      let I4 = C.first("obj_heroralsei");
      if (I3) {
        Z.faceaction[I3.myself] = 0;
        I3.state = 0;
        I3.acttimer = 0;
      }
      if (I4) {
        Z.faceaction[I4.myself] = 0;
        I4.state = 0;
        I4.acttimer = 0;
      }
      this.actcon = 30;
      Z.msg = new Array(100).fill(" ");
      Z.msg[0] = "* You hug RALSEI./%";
      g();
    }
    if (this.actcon === 30) {
      let I5 = C.first("obj_herokris");
      let I6 = C.first("obj_heroralsei");
      I5.visible = false;
      this.k = j(I5.x, I5.y, "spr_kris_hug");
      this.k.image_speed = 0;
      this.k.depth = -100;
      this.moveTo(this.k, I6.x - 24, I6.y + 10, 15);
      this.actcon = 31;
      this.alarm[4] = 25;
    }
    if (this.actcon === 32) {
      let I7 = C.first("obj_heroralsei");
      I7.visible = false;
      this.rb = j(I7.x, I7.y, "spr_ralseil_blush");
      this.rb.depth = -99;
      this.rb.image_speed = 0;
      this.k.image_speed = 0.25;
      this.actcon = 33;
      this.alarm[4] = 12;
    }
    if (this.actcon === 34) {
      this.k.image_speed = 0;
      this.actcon = 35;
    }
    if (this.actcon === 35 && !C.exists("obj_writer")) {
      Z.typer = 45;
      Z.fc = 2;
      Z.fe = 2;
      Z.msg = new Array(100).fill(" ");
      Z.msg[0] = "* K..^1. Kris!?/%";
      let I8 = this.r_hugtime;
      if (I8 === 0) {
        Z.msg[0] = "* K..^1. Kris!?/";
        Z.msg[1] = "\\E8* Ummm^1, I don't think^1, um.../";
        Z.msg[2] = "* This is what you're supposed to be doing./";
        Z.msg[3] = "\\E2* ... but.../%";
      }
      if (I8 === 1) {
        Z.msg[0] = "* Kris...?/";
        Z.msg[1] = "\\E2* Are you trying^1, to^1, um.../";
        Z.msg[2] = "\\E6* Ask me to give you a tutorial on hugging...?/%";
      }
      if (I8 === 2) {
        Z.msg[0] = "* Ummm^1, I've never hugged anyone before.../";
        Z.msg[1] = "\\E1* (Besides the dummy^1, to test it out,)/";
        Z.msg[2] = "\\E2* So I don't know anything about it^1, sorry.../";
        Z.msg[3] = "\\E7* I suppose you're the one teaching me^1, haha!/%";
      }
      if (I8 >= 3) {
        Z.msg[0] = "\\E2* .../%";
      }
      this.r_hugtime++;
      J();
      this.actcon = 36;
    }
    if (this.actcon === 36 && !C.exists("obj_writer")) {
      C.with("obj_face", (I9) => I9.instance_destroy());
      this.k.image_speed = -0.25;
      this.actcon = 37;
      this.alarm[4] = 12;
    }
    if (this.actcon === 38) {
      this.k.image_speed = 0;
      let I9 = C.first("obj_herokris");
      this.moveTo(this.k, I9.x, I9.y, 15);
      this.actcon = 39;
      this.alarm[4] = 25;
    }
    if (this.actcon === 40) {
      if (this.rb) {
        this.rb.instance_destroy();
      }
      C.first("obj_heroralsei").visible = true;
      this.k.instance_destroy();
      C.first("obj_herokris").visible = true;
      this.actcon = 1;
    }
    if (this.k && !this.k.destroyed) {
      if (this.k.image_index < 0) {
        this.k.image_index = 0;
      }
      if (this.k.image_index > 3) {
        this.k.image_index = 3;
      }
    }
  }
  moveTo(H, I0, I1, I3) {
    let I4 = Math.hypot(I0 - H.x, I1 - H.y);
    H.move_towards_point(I0, I1, I4 / I3);
    H.alarm[0] = I3;
    H.alarmEvent = function (I5) {
      if (I5 === 0) {
        this.x = I0;
        this.y = I1;
        this.speed = 0;
      }
    };
  }
  draw(x) {
    let H = this.shakex > 0 ? v(this.shakex * 2) - this.shakex : 0;
    x.draw_sprite_ext(
      "spr_dummymonster",
      0,
      this.x + H,
      this.y,
      2,
      2,
      0,
      this.image_blend,
      this.image_alpha,
    );
    if (this.flash === 1) {
      this.fsiner++;
      x.draw_sprite_white(
        "spr_dummymonster",
        0,
        this.x + H,
        this.y,
        2,
        2,
        0,
        -Math.cos(this.fsiner / 5) * 0.4 + 0.6,
      );
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
F(A, "obj_dummyenemy");
L(A, "kinds", B("obj_dummyenemy", h));
L(A, "defaultDepth", 90);
L(A, "defaultSprite", "spr_dummymonster");
var M = A;
q(M, "G.mnfight = 1;G.mnfight = 1;G.myfight = 999;G.mnfight = 999;G.mnfight = 2;");
export { z as a, M as b };
