import React from "react";

import CommentItem from "../CommentItem/CommentItem";

import "./CommentList.css";

const CommentList = ({ comments = [] }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentList;
