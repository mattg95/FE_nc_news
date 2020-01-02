import React from "react";
const CommentDisplayer = ({ author, comment }) => {
  return (
    <div className="CommentCard">
      <button className="DeleteButton">Delete</button>
      <p>{comment}</p>
      <p>Author: {author}</p>
      <div className="VoteForm">
        <p>Votes: 0</p>
        <button disabled={true} className="VoteButton">
          UpVote
        </button>
        <button disabled={true} className="VoteButton">
          DownVote
        </button>
      </div>
    </div>
  );
};

export default CommentDisplayer;
