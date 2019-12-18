import React from "react";
import * as api from "../utils/api";

const DeleteComment = (commentId, hideComment) => {
  const handleClick = () => {
    return api
      .deleteComment(commentId)
      .then(() => {
        alert("comment deleted");
      })
      .then(hideComment());
  };
  return (
    <div>
      <button onClick={handleClick} className="deleteButton">
        Delete
      </button>
    </div>
  );
};

export default DeleteComment;
