import React from "react";
const lazy = React.lazy;

const routers = [
  {
    title: "basic",
    cmp: lazy(() => import("./basic")),
  },
];

export default routers;
