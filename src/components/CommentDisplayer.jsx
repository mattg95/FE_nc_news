import React from "react";
const CommentDisplayer = ({ author, comment }) => {
  return (
    <div className="commentCard">
      <button className="deleteButton">Delete</button>
      <p>{comment}</p>
      <p>Author: {author}</p>
      <div className="voteForm">
        <p>Votes: 0</p>
        <button disabled={true} className="voteButton">
          UpVote
        </button>
        <button disabled={true} className="voteButton">
          DownVote
        </button>
      </div>
    </div>
  );
};

export default CommentDisplayer;
