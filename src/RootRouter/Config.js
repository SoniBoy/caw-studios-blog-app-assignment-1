import { postRoutes } from "../Posts";

const config = [
  {
    path: "/",
    element: <></>,
  },
  ...postRoutes,
];

export default config;
