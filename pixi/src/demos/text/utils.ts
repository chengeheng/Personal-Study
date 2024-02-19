import { Text, Application, Sprite } from "pixi.js";
import "@pixi/graphics-extras";
import bunnySprite from "../../images/bunny.png";

const drawBasicText = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const text = new Text("雷猴");
  app.stage.addChild(text);
};

const drawTextWithStyle = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const text = new Text("雷猴", {
    fontFamily: "Arial",
    fontSize: 36,
    fill: "yellow",
    stroke: "red",
    strokeThickness: 2, // 描边宽度，默认为0
  });
  app.stage.addChild(text);
};

const drawTextWithSpace = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const text = new Text("雷猴", {
    fontFamily: "Arial",
    fontSize: 36,
    fill: "yellow",
    stroke: "red",
    strokeThickness: 2, // 描边宽度，默认为0
    letterSpacing: 20,
  });
  app.stage.addChild(text);
};

const drawTextWithShadow = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const text = new Text("雷猴", {
    fontFamily: "Arial",
    fontSize: 60,
    fill: "yellow",
    dropShadow: true, // 开启投影
    dropShadowColor: "red", // 投影颜色
    dropShadowBlur: 6, // 投影羽化程度(模糊度)
    dropShadowAngle: (45 * Math.PI) / 180, // 投影角度
    dropShadowDistance: 10, // 投影距离
  });
  app.stage.addChild(text);
};

const drawTextWithGradient = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const text = new Text("雷猴", {
    fontFamily: "Arial",
    fontSize: 60,
    fill: ["yellow", "red", "purple", "blue"], // 填充色
  });
  app.stage.addChild(text);
};

const drawTextWithSpriteTexture = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const text = new Text("雷猴", {
    fontFamily: "Arial",
    fontWeight: "900",
    fontSize: 60,
    fill: "0xffffff", // 必须设置非黑色的填充色
  });

  // 加载图片
  const bunny = Sprite.from(bunnySprite);
  // 设置图片宽高
  bunny.width = app.screen.width;
  bunny.height = app.screen.height;

  // 配置文字遮罩层
  bunny.mask = text;

  // 注意！需要将遮罩层图片添加到画布中，而不是添加文字text
  app.stage.addChild(bunny);
};

export const actions: {
  label: string;
  fn: (app: Application<HTMLCanvasElement>) => void;
}[] = [
  {
    label: "basic text",
    fn: drawBasicText,
  },
  {
    label: "colored text",
    fn: drawTextWithStyle,
  },
  {
    label: "letter space",
    fn: drawTextWithSpace,
  },
  {
    label: "text shadow",
    fn: drawTextWithShadow,
  },
  {
    label: "text gradient",
    fn: drawTextWithGradient,
  },
  {
    label: "sprite texture",
    fn: drawTextWithSpriteTexture,
  },
];
