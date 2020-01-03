import React, { Component } from "react";
import * as api from "../utils/api";
import CommentDisplayer from "./CommentDisplayer";
import ErrorHandler from "./ErrorHandler";

export default class CommentForm extends Component {
  state = {
    comment: "",
    displayedComments: []
  };

  handleChange = () => {
    this.setState({ comment: event.target.value });
  };

  deleteComment = commentToDelete => {
    const sansComment = [];
    this.state.displayedComments.forEach(comment => {
      comment !== commentToDelete && sansComment.push(comment);
    });
    this.setState({ displayedComments: [...sansComment] });
  };

  handleSubmit = event => {
    const { articleId, username } = this.props;
    const { comment } = this.state;
    event.preventDefault();
    return (
      api
        .postComment(articleId, username, comment)
        .catch(err => ErrorHandler(err)),
      this.setState(prevState => ({
        displayedComments: [...prevState.displayedComments, this.state.comment],
        comment: ""
      }))
    );
  };

  renderComment = () => {
    return this.state.displayedComments.map((comment, i) => {
      return (
        <CommentDisplayer
          author={this.props.username}
          comment={comment}
          deleteComment={this.deleteComment}
          key={i}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {this.state.displayedComments && this.renderComment()}
        <h3 className="CommentsHeaders">Post comment</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="CommentInput"
            required={true}
            onChange={this.handleChange}
            value={this.state.comment}
          ></input>
          <input type="submit" className="SubmitButton"></input>
        </form>
      </div>
    );
  }
}
