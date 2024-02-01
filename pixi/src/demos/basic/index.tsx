import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const app = new PIXI.Application<HTMLCanvasElement>({
  backgroundColor: "pink",
});

const drawRect = () => {
  const graphics = new PIXI.Graphics();
  graphics.beginFill(0xffd900, 1);
  graphics.drawRect(0, 0, 100, 200);
  graphics.endFill();
  return graphics;
};

const Basic = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(app.view);
      const rect = drawRect();
      app.stage.addChild(rect);

      return () => {
        // 清除画布
        app.destroy(true);
      };
    }
  }, []);
  return <div ref={ref} id="canvas"></div>;
};

export default Basic;
