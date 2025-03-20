import React, { Component } from "react";
import DeleteComment from "./DeleteComment";
import VoteHandler from "./VoteHandler";

export default class CommentCard extends Component {
  state = {
    display: true,
  };
  hideComment = () => {
    return this.setState({ display: false });
  };
  render() {
    const { author, id, body, votes } = this.props.comment;

    return (
      <div>
        {this.state.display && (
          <div className="CommentCard">
            <div className="InsetBorder">
              {this.props.username === author && (
                <DeleteComment
                  comment_id={comment_id}
                  hideComment={this.hideComment}
                />
              )}
              <p>{body}</p>
              <p>Author: {author}</p>
              <VoteHandler
                id={id}
                thing={"comments"}
                votes={votes}
                userComment={this.props.username === author}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
