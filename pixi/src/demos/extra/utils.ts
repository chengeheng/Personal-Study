import { Graphics, Application } from "pixi.js";
import "@pixi/graphics-extras";

const drawChamferRect = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawChamferRect!(50, 50, 100, 200, 20);
  graphics.endFill();
  app.stage.addChild(graphics);
};

const drawFilletRect = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawFilletRect!(50, 50, 100, 200, -20); // 最后一个参数是圆角半径
  graphics.endFill();
  app.stage.addChild(graphics);
};

// 正多边形
const drawRegularPolygon = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawRegularPolygon!(100, 100, 50, 6, 0.5 * Math.PI);
  graphics.endFill();
  app.stage.addChild(graphics);
};

// 圆角正多边形
const drawRoundedPolygon = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawRoundedPolygon!(100, 100, 50, 6, 10, 0.5 * Math.PI);
  graphics.endFill();
  app.stage.addChild(graphics);
};

// 环形
const drawTorus = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawTorus!(100, 100, 80, 90, 0, Math.PI * 2);
  graphics.endFill();
  app.stage.addChild(graphics);
};

// 星形
const drawStar = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new Graphics();
  graphics.beginFill(0xffd900, 1);
  // points为表示星星有多少个角
  graphics.drawStar!(100, 100, 5, 90, 0, Math.PI * 2);
  graphics.endFill();
  app.stage.addChild(graphics);
};

const drawRoundedShape = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new Graphics();
  // const path = new Polygon([{x: 50, y: 50}, {x: 100, y: 100}, {x: 150, y: 50}]);

  graphics.beginFill(0xffd900, 1);
  graphics.lineStyle(4, "#ffd9ff", 1);
  graphics.drawRoundedShape!(
    [
      { x: 50, y: 50 },
      { x: 100, y: 100 },
      { x: 150, y: 50 },
    ],
    10
  );
  graphics.endFill();

  app.stage.addChild(graphics);
};

export const actions: {
  label: string;
  fn: (app: Application<HTMLCanvasElement>) => void;
}[] = [
  {
    label: "chamfer rect",
    fn: drawChamferRect,
  },
  {
    label: "fillet rect",
    fn: drawFilletRect,
  },
  {
    label: "regular polygon",
    fn: drawRegularPolygon,
  },
  {
    label: "rounded polygon",
    fn: drawRoundedPolygon,
  },
  {
    label: "torus",
    fn: drawTorus,
  },
  {
    label: "star",
    fn: drawStar,
  },
  {
    label: "rounded shape",
    fn: drawRoundedShape,
  },
];
