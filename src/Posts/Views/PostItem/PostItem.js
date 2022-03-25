import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import ListItem from "../../Components/ListItem/ListItem";
import CommentList from "../../Components/CommentList/CommentList";

import { useFetchPost, useFetchComments } from "../../Hooks/Hooks";

import { selectPost, selectPostTitle, selectComments } from "../../Slice/Slice";

const PostItem = () => {
  const location = useLocation();

  const [showComments, setShowComments] = useState(false);

  const postTitle = useSelector(selectPostTitle);
  const comments = useSelector(selectComments);

  const splitted = location.pathname.split("/");
  const postId = splitted[splitted.length - 1];

  useFetchPost(postId);
  useFetchComments(postId, showComments);

  const post = useSelector(selectPost);

  const onCommentsButtonClicked = () => setShowComments(true);

  return (
    <>
      <Helmet>
        <title>{postTitle}</title>
      </Helmet>
      {post && (
        <>
          <div>
            <ListItem item={post} />
          </div>
          <button onClick={onCommentsButtonClicked}>Load Comments</button>
          {showComments && <CommentList comments={comments} />}
        </>
      )}
    </>
  );
};

export default PostItem;
