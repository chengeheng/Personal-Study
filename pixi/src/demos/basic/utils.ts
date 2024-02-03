import * as PIXI from "pixi.js";

const drawRect = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawRect(50, 50, 100, 200);
  graphics.endFill();
  app.stage.addChild(graphics);
};

const drawRoundedRect = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawRoundedRect(50, 50, 100, 200, 10); // 最后一个参数是圆角半径
  graphics.endFill();
  app.stage.addChild(graphics);
};

const drawCircle = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawCircle(100, 100, 50);
  graphics.endFill();
  app.stage.addChild(graphics);
};

const drawEllipse = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawEllipse(100, 100, 50, 100);
  graphics.endFill();
  app.stage.addChild(graphics);
};

const drawPolygon = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawPolygon([50, 50, 100, 60, 100, 190, 50, 200]);
  graphics.endFill();
  app.stage.addChild(graphics);
};

const drawLine = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(4, "#ffd900", 1);
  graphics.moveTo(50, 50).lineTo(100, 50).lineTo(75, 100).lineTo(200, 165);
  app.stage.addChild(graphics);
};

const drawCloseLine = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(4, "#ffd900", 1);
  graphics.moveTo(50, 50).lineTo(100, 50).lineTo(75, 100).lineTo(200, 165);
  graphics.closePath();
  app.stage.addChild(graphics);
};

const drawArc = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(4, "#ffd900", 1);
  graphics.arc(150, 150, 50, 0, 0.75 * Math.PI, true); // 最后一个参数为true则为逆时针绘制，false表示顺时针。默认为false
  //   graphics.closePath();
  app.stage.addChild(graphics);
};

const drawArcTo = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(4, "#ffd900", 1);
  graphics.moveTo(50, 50);
  graphics.arcTo(50, 150, 250, 200, 50);
  app.stage.addChild(graphics);
};

const drawQuadraticCurveTo = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(4, "#ffd900", 1);
  graphics.moveTo(50, 50);
  graphics.quadraticCurveTo(50, 150, 250, 200);
  app.stage.addChild(graphics);
};

const drawBezierCurveTo = (app: PIXI.Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const graphics = new PIXI.Graphics();
  graphics.lineStyle(4, "#ffd900", 1);
  graphics.moveTo(50, 50);
  graphics.bezierCurveTo(50, 150, 200, 70, 120, 280);
  graphics.lineStyle(1, "#333", 0.7);
  graphics.moveTo(50, 50).lineTo(50, 150).lineTo(100, 200).lineTo(120, 280);
  app.stage.addChild(graphics);
};

export const actions: {
  label: string;
  fn: (app: PIXI.Application<HTMLCanvasElement>) => void;
}[] = [
  {
    label: "rect",
    fn: drawRect,
  },
  {
    label: "roundedRect",
    fn: drawRoundedRect,
  },
  {
    label: "circle",
    fn: drawCircle,
  },
  {
    label: "ellipse",
    fn: drawEllipse,
  },
  {
    label: "polygon",
    fn: drawPolygon,
  },
  {
    label: "line",
    fn: drawLine,
  },
  {
    label: "closeLine",
    fn: drawCloseLine,
  },
  { label: "arc", fn: drawArc },
  {
    label: "arcTo",
    fn: drawArcTo,
  },
  {
    label: "quadraticCurve",
    fn: drawQuadraticCurveTo,
  },
  {
    label: "bezierCurve",
    fn: drawBezierCurveTo,
  },
];
