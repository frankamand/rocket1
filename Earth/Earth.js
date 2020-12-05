/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Earth extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("earth", "./Earth/costumes/earth.svg", { x: 55, y: 55 })
    ];

    this.sounds = [new Sound("pop", "./Earth/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (!(this.stage.vars.gameover > 0)) {
      this.move(1);
      this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
      /* TODO: Implement motion_ifonedgebounce */ null;
      if (this.y > 180) {
        this.y = -180;
      }
      yield;
    }
  }
}
