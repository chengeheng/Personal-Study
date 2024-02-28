import * as PIXI from "pixi.js";
import "@pixi/graphics-extras";
import Ball from "./Ball";
import bunnySprite from "../../images/bunny.png";
import dnfSprite from "../../images/dnf.png";

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
      ball.update(delta / 60);
    }
  });
};

const drawAnimatedSprite = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();

  const Rectangle = PIXI.Rectangle;
  const texture = PIXI.Texture.from(dnfSprite, { width: 320, height: 286 });
  const texture0 = new PIXI.Texture(
    texture.baseTexture,
    new Rectangle(0, 0, 80, 143)
  );
  const texture1 = new PIXI.Texture(
    texture.baseTexture,
    new Rectangle(80, 0, 80, 143)
  );
  const texture2 = new PIXI.Texture(
    texture.baseTexture,
    new Rectangle(160, 0, 80, 143)
  );
  const texture3 = new PIXI.Texture(
    texture.baseTexture,
    new Rectangle(240, 0, 80, 143)
  );

  // const textures = [
  //   { texture: texture0, time: 500 },
  //   { texture: texture1, time: 500 },
  //   { texture: texture2, time: 500 },
  //   { texture: texture3, time: 500 },
  // ];
  const textures = [texture0, texture1, texture2, texture3];
  const pixie = new PIXI.AnimatedSprite(textures);
  pixie.animationSpeed = 0.1;
  pixie.anchor.set(0);
  pixie.scale.set(1);
  pixie.play();

  app.stage.addChild(pixie);
  app.start();
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
  {
    label: "animated sprite",
    fn: drawAnimatedSprite,
  },
];
