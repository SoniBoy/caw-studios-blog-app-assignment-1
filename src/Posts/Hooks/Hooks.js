import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts, getPost, getComments } from "../Slice/Slice";

export const useFetchPosts = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getPosts()), [dispatch]);
};

export const useFetchPost = (postId) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getPost(postId)), [dispatch, postId]);
};

export const useFetchComments = (postId, showComments) => {
  const dispatch = useDispatch();
  useEffect(() => {
    showComments && dispatch(getComments(postId));
  }, [dispatch, postId, showComments]);
};
