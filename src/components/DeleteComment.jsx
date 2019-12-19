import React from "react";
import * as api from "../utils/api";
import ErrorHandler from "./ErrorHandler";

const DeleteComment = ({ commentId, hideComment }) => {
  const handleClick = () => {
    return api
      .deleteComment(commentId)
      .then(() => {
        alert("comment deleted");
      })
      .then(hideComment())
      .catch(err => ErrorHandler(err));
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
