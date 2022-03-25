import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectPosts,
  setSelectedPostTitle,
  searchByTitle,
} from "../../Slice/Slice";

import { useFetchPosts } from "../../Hooks/Hooks";

import List from "../../Components/List/List";
import SearchBar from "../../Components/SearchBar/SearchBar";

import "./PostListing.css";

const PostListing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);
  useFetchPosts();
  const onPostClicked = (postId) => {
    dispatch(
      setSelectedPostTitle(posts.find((post) => post.id === postId).title)
    );
    navigate(`/posts/${postId}`);
  };

  const onSearchButtonClicked = useCallback(
    (searchString) => dispatch(searchByTitle(searchString)),
    [dispatch]
  );

  return (
    <div>
      <SearchBar onClick={onSearchButtonClicked} />
      <div className="posts-container">
        <List listItems={posts} onClick={onPostClicked} />
      </div>
    </div>
  );
};

export default PostListing;
