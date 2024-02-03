import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

import { actions } from "./utils";

import styles from "./index.module.css";

const app = new PIXI.Application<HTMLCanvasElement>({
  backgroundColor: "pink",
  // 设置宽高
  width: 640,
  height: 360,
});

const Basic = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(app.view);

      return () => {
        // 清除画布, 传入true的话则删除canvas元素
        app.destroy(true);
      };
    }
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.actions}>
        {actions.map((i) => {
          return (
            <button key={i.label} onClick={() => i.fn(app)}>
              {i.label}
            </button>
          );
        })}
      </div>
      <div className={styles.canvas} ref={ref}></div>
    </div>
  );
};

export default Basic;
