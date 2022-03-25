import { postRoutes } from "../Posts";
import Home from "../Home/Home";

const config = [
  {
    path: "/",
    element: <Home />,
  },
  ...postRoutes,
];

export default config;
