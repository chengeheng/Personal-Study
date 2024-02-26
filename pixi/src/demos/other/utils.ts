import * as PIXI from "pixi.js";
import "@pixi/graphics-extras";
import Ball from "./Ball";
import bunnySprite from "../../images/bunny.png";

const drawContainer = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const container = new PIXI.Container();
  const texture = PIXI.Texture.from(bunnySprite);
  const count = 5;
  const total = Math.pow(count, 2);
  const bunnies: PIXI.Sprite[] = [];
  for (let i = 0; i < total; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % count) * 40;
    bunny.y = Math.floor(i / count) * 40;
    bunny.width = 30;
    bunny.height = 30;
    bunnies.push(bunny);
    container.addChild(bunny);
  }

  container.x = 150;
  container.y = 150;

  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

  console.log(container.children[0] === bunnies[0]);
  app.stage.addChild(container);

  app.ticker.add((delta) => {
    // container.rotation -= 0.01 * delta;
    for (let i of bunnies) {
      // for (let i of container.children) {
      // (i as PIXI.Sprite).width = 10;
      i.rotation -= 0.01 * delta;
    }
  });
};

const drawMultiBalls = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();

  const total = 1000;
  const balls: Ball[] = [];
  for (let i = 0; i < total; i++) {
    const ball = new Ball(app, app.view.width, app.view.height);
    balls.push(ball);
  }

  app.ticker.add((delta) => {
    // // container.rotation -= 0.01 * delta;
    // delta: Scalar time value from last frame to this frame.
    for (let ball of balls) {
      ball.update(delta * 0.01666);
    }
  });
};

export const actions: {
  label: string;
  fn: (app: PIXI.Application<HTMLCanvasElement>) => void;
}[] = [
  {
    label: "container",
    fn: drawContainer,
  },
  {
    label: "multiBalls",
    fn: drawMultiBalls,
  },
];
