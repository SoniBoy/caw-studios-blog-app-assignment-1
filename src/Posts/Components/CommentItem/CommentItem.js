import React from "react";

import "./CommentItem.css";

const CommentItem = ({ comment = { email: "", body: "" } }) => {
  return (
    <div className="comment-item">
      <p>{comment.body}</p>
      <p className="comment-uploader">{comment.email}</p>
    </div>
  );
};

export default CommentItem;
