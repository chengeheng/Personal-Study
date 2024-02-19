import { Application, Sprite } from "pixi.js";
import "@pixi/graphics-extras";
import bunnySprite from "../../images/bunny.png";

const handleClickEvent = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);

  // 开启交互
  // PixiJS Deprecation Warning: Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead.Deprecated since v7.2.0
  // bunny.interactive = true;
  bunny.eventMode = "dynamic";
  // 修改鼠标样式
  bunny.cursor = "pointer";
  // 监听点击事件
  bunny.on("click", () => {
    console.log("click bunny");
  });

  app.stage.addChild(bunny);
};

const handleAnimation = (app: Application<HTMLCanvasElement>) => {
  app.stage.removeChildren();
  const bunny = Sprite.from(bunnySprite);

  // 修改中心点
  bunny.pivot.set(bunny.width / 2, bunny.height / 2);
  bunny.x = 200;
  bunny.y = 200;

  // 开启交互
  // PixiJS Deprecation Warning: Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead.Deprecated since v7.2.0
  // bunny.interactive = true;
  bunny.eventMode = "dynamic";
  // 修改鼠标样式
  bunny.cursor = "pointer";
  // 监听点击事件
  bunny.on("click", () => {
    console.log("click bunny");
  });

  // ticker 是一个用来处理循环的对象，它负责在每一帧更新和重新渲染画布。
  // delta 是一个与时间相关的因子，通常用于处理动画循环。 delta 是上一帧和当前帧之间经过的时间的比例值。这个值可以用于确保动画在不同性能和速度的设备上尽可能保持一致的表现。
  app.ticker.add((delta) => {
    // 让图片旋转起来
    bunny.rotation += 0.01 * delta;
  });

  app.stage.addChild(bunny);
};

export const actions: {
  label: string;
  fn: (app: Application<HTMLCanvasElement>) => void;
}[] = [
  {
    label: "click event",
    fn: handleClickEvent,
  },
  {
    label: "animation",
    fn: handleAnimation,
  },
];
