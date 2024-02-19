import { AlphaFilter, Application, BlurFilter, Sprite, Texture } from "pixi.js";
import "@pixi/graphics-extras";
import bunnySprite from "../../images/bunny.png";

const drawBasicImage = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);
  app.stage.addChild(bunny);
};

const drawImageFromTexture = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  // 加载图片
  const texture = Texture.from(bunnySprite);
  // 将纹理放在“精灵”的图形对象上
  const bunny = new Sprite(texture);
  app.stage.addChild(bunny);
};

const drawImageWithWidthAndHeight = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);

  bunny.width = 400;
  bunny.height = 360;

  app.stage.addChild(bunny);
};

const drawImagePosition = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);

  bunny.x = 100;
  bunny.y = 50;

  app.stage.addChild(bunny);
};

const drawImageRotation = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);

  bunny.x = 100;
  bunny.y = 50;
  bunny.rotation = (45 * Math.PI) / 180; // 根据图片的 x, y 位置进行的旋转

  app.stage.addChild(bunny);
};

const drawImageVisible = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);

  bunny.x = 100;
  bunny.y = 50;
  bunny.visible = false;

  app.stage.addChild(bunny);
};

const drawImageAlpha = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);

  bunny.x = 100;
  bunny.y = 50;
  bunny.alpha = 0.5;

  app.stage.addChild(bunny);
};

const drawImageBlurFilter = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);

  bunny.x = 100;
  bunny.y = 50;

  // 模糊滤镜
  const blurFilter = new BlurFilter();
  // 模糊程度
  blurFilter.blur = 10;
  // 将模糊滤镜添加到图片精灵上
  bunny.filters = [blurFilter];

  app.stage.addChild(bunny);
};

const drawImageAlphaFilter = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);

  bunny.x = 100;
  bunny.y = 50;

  // 模糊滤镜
  const alphaFilter = new AlphaFilter();
  // 模糊程度
  alphaFilter.alpha = 0.5;
  // 将模糊滤镜添加到图片精灵上
  bunny.filters = [alphaFilter];

  app.stage.addChild(bunny);
};

export const actions: {
  label: string;
  fn: (app: Application<HTMLCanvasElement>) => void;
}[] = [
  {
    label: "basic image",
    fn: drawBasicImage,
  },
  {
    label: "image from texture",
    fn: drawImageFromTexture,
  },
  {
    label: "width and height",
    fn: drawImageWithWidthAndHeight,
  },
  {
    label: "image position",
    fn: drawImagePosition,
  },
  {
    label: "image rotation",
    fn: drawImageRotation,
  },
  {
    label: "hide image",
    fn: drawImageVisible,
  },
  {
    label: "image alpha",
    fn: drawImageAlpha,
  },
  {
    label: "blur filter",
    fn: drawImageBlurFilter,
  },
  {
    label: "alpha filter",
    fn: drawImageAlphaFilter,
  },
];
