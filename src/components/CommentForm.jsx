import React, { Component } from "react";
import * as api from "../utils/api";
// import ErrorHandler from "./ErrorHandler";
import CommentCard from "./CommentCard";

export default class CommentForm extends Component {
  state = {
    comment: "",
    displayedComment: ""
  };
  handleChange = () => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    const { articleId, username } = this.props;
    const { comment } = this.state;
    event.preventDefault();
    return api.postComment(articleId, username, comment).then(() => {
      this.setState({
        displayedComment: this.state.comment,
        comment: ""
      });
    });
  };

  render() {
    return (
      <div className="commentForm">
        {this.state.displayedComment && (
          <CommentCard
            username={this.props.username}
            comment={{
              author: this.props.username,
              body: this.state.displayedComment,
              votes: 0
            }}
          />
        )}

        <h3>Post comment</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="commentInput"
            onChange={this.handleChange}
            value={this.state.comment}
          ></input>
          <input type="submit" className="topicsButton"></input>
        </form>
      </div>
    );
  }
}
