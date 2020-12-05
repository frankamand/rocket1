import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Star from "./Star/Star.js";
import Rocketship from "./Rocketship/Rocketship.js";
import Star2 from "./Star2/Star2.js";
import Star3 from "./Star3/Star3.js";
import Star4 from "./Star4/Star4.js";
import Star5 from "./Star5/Star5.js";
import Star6 from "./Star6/Star6.js";
import Star7 from "./Star7/Star7.js";
import Earth from "./Earth/Earth.js";
import Button1 from "./Button1/Button1.js";
import Button2 from "./Button2/Button2.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Star: new Star({
    x: 58,
    y: 116,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 1
  }),
  Rocketship: new Rocketship({
    x: 35,
    y: -27,
    direction: 180,
    costumeNumber: 2,
    size: 50,
    visible: true,
    layerOrder: 9
  }),
  Star2: new Star2({
    x: 104.08921788225115,
    y: -101.91175494723444,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 2
  }),
  Star3: new Star3({
    x: -106.28725891811182,
    y: 115.29420625423178,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 5
  }),
  Star4: new Star4({
    x: 121.07430844349426,
    y: -10.205213243682316,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 6
  }),
  Star5: new Star5({
    x: -137.08615185446632,
    y: 1.2917305603758038,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 3
  }),
  Star6: new Star6({
    x: 16.872163151803655,
    y: 15.36569576066585,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 7
  }),
  Star7: new Star7({
    x: -34.65693369668388,
    y: -98.78900807753887,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 4
  }),
  Earth: new Earth({
    x: 218.02615734584467,
    y: 113.00458667657438,
    direction: 0,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 8
  }),
  Button1: new Button1({
    x: -188,
    y: 131,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Button2: new Button2({
    x: -185.80680885255245,
    y: -125.01952167541128,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
