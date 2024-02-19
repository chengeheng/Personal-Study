import { useMemo, useState, Suspense } from "react";
import routers from "./demos/router";

import "./App.css";

const App = () => {
  const [idx, setIdx] = useState<number>(0);
  const Cmp = useMemo(() => routers[idx].cmp, [idx]);
  return (
    <div className="main">
      <div className="slider">
        {routers.map((i, index) => (
          <button
            key={i.title}
            className="slider-item"
            onClick={() => setIdx(index)}
          >
            {i.title}
          </button>
        ))}
      </div>
      <div className="body">
        <div className="title">{routers[idx].title}</div>
        <div className="content">
          <Suspense>
            <Cmp></Cmp>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
