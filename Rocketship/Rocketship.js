/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rocketship extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "rocketship-Frank",
        "./Rocketship/costumes/rocketship-Frank.svg",
        { x: 58.237755420853716, y: 91.82345332752442 }
      ),
      new Costume("rocketship-b", "./Rocketship/costumes/rocketship-b.svg", {
        x: 41.750638539864184,
        y: 91.91152771195604
      }),
      new Costume("rocketship-c", "./Rocketship/costumes/rocketship-c.svg", {
        x: 58.74689219355966,
        y: 90.91206888713705
      }),
      new Costume("rocketship-d", "./Rocketship/costumes/rocketship-d.svg", {
        x: 43.68051766353466,
        y: 90.6521351759331
      }),
      new Costume("rocketship-e", "./Rocketship/costumes/rocketship-e.svg", {
        x: 57.220799012796846,
        y: 85.12261084456834
      })
    ];

    this.sounds = [
      new Sound("space ripple", "./Rocketship/sounds/space ripple.wav"),
      new Sound("laser1", "./Rocketship/sounds/laser1.wav"),
      new Sound("laser2", "./Rocketship/sounds/laser2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "up" }, this.whenIReceiveUp),
      new Trigger(Trigger.BROADCAST, { name: "down" }, this.whenIReceiveDown)
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 180;
    this.x = -300;
    while (!(this.stage.vars.gameover > 0)) {
      this.x += 2;
      if (this.x > 200) {
        this.x = -300;
      }
      if (this.keyPressed("up arrow")) {
        this.y += 2;
      }
      if (this.keyPressed("down arrow")) {
        this.y += -2;
      }
      if (this.touching(Color.rgb(255, 255, 28))) {
        yield* this.startSound("laser2");
        this.effects.color += 25;
        this.stage.vars.score += -1;
      } else {
        this.effects.color = 0;
      }
      if (this.touching(Color.rgb(0, 119, 184))) {
        this.stage.vars.score += 20;
        yield* this.playSoundUntilDone("space ripple");
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.gameover = 0;
    this.stage.vars.score = 0;
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenIReceiveUp() {
    this.y += 2;
  }

  *whenIReceiveDown() {
    this.y += -2;
  }
}
