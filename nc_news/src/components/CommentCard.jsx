import React, { Component } from "react";
import DeleteComment from "./DeleteComment";
import VoteHandler from "./VoteHandler";

export default class CommentCard extends Component {
  state = {
    display: true
  };
  hideComment = () => {
    return this.setState({ display: false });
  };
  render() {
    const { author, comment_id, body, votes } = this.props.comment;
    return (
      <div className="commentCard">
        {this.state.display && (
          <div>
            {this.props.username === author && <div >delete:{DeleteComment(comment_id, this.hideComment)}</div>}
            <p>{body}</p>
            <p>Author: {author}</p>
            <VoteHandler id={comment_id} thing={"comments"} votes={votes} />
          </div>
        )}
      </div>
    );
  }
}
