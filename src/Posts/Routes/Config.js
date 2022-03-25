import PostListing from "../Views/PostListing/PostListing";
import PostItem from "../Views/PostItem/PostItem";

const routes = [
  { path: "/posts", element: <PostListing /> },

  {
    path: "/posts/:postId",
    element: <PostItem />,
  },
];

export default routes;
