import axios from "axios";

export const fetchPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const fetchPost = (postId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

export const fetchComments = (postId) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
};
