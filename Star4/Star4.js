/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Star4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("star", "./Star4/costumes/star.svg", { x: 22, y: 23 })
    ];

    this.sounds = [new Sound("collect", "./Star4/sounds/collect.wav")];

    this.triggers = [];
  }
}
