import React from "react";
const lazy = React.lazy;

const routers = [
  {
    title: "basic",
    cmp: lazy(() => import("./basic")),
  },
  {
    title: "extra",
    cmp: lazy(() => import("./extra")),
  },
  {
    title: "text",
    cmp: lazy(() => import("./text")),
  },
];

export default routers;
