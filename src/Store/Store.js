import { configureStore } from "@reduxjs/toolkit";

import { postReducer } from "../Posts";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
