/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Button2/costumes/button1.svg", {
        x: 42.625,
        y: 43.367999999999995
      })
    ];

    this.sounds = [new Sound("pop", "./Button2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        this.broadcast("down");
      }
      yield;
    }
  }
}
