import React from "react";
import { useRoutes } from "react-router-dom";

import routes from "./Config";

const RootRouter = () => {
  const element = useRoutes(routes);
  return <>{element}</>;
};
export default RootRouter;
