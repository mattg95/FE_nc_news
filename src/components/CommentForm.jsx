import React, { Component } from "react";
import * as api from "../utils/api";
import CommentDisplayer from "./CommentDisplayer";
import ErrorHandler from "./ErrorHandler";

export default class CommentForm extends Component {
  state = {
    comment: "",
    displayedComments: [],
  };

  handleChange = () => {
    this.setState({ comment: event.target.value });
  };

  deleteComment = (commentToDelete) => {
    const { displayedComments } = this.state;
    const sansComment = [];
    displayedComments.forEach((comment) => {
      comment !== commentToDelete && sansComment.push(comment);
    });
    this.setState({ displayedComments: [...sansComment] });
  };

  handleSubmit = async (event) => {
    const { articleId, userId } = this.props;
    const { comment } = this.state;
    event.preventDefault();
    const res = await api
        .postComment(articleId, userId, comment)
        .catch((err) => ErrorHandler(err));
      
      this.setState((prevState) => ({
        displayedComments: [...prevState.displayedComments, res.data.body],
        comment: "",
      }))
  };

  renderComment = () => {
    const { displayedComments } = this.state;
    const { username } = this.props;
    return displayedComments.map((comment, i) => {
      return (
        <CommentDisplayer
          author={username}
          comment={comment}
          deleteComment={this.deleteComment}
          key={i}
        />
      );
    });
  };

  render() {
    const { comment, displayedComments } = this.state;
    return (
      <div>
        {displayedComments && this.renderComment()}
        <h3>Post comment</h3>
        <form className="commentInputForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="CommentInput"
            required={true}
            onChange={this.handleChange}
            value={comment}
          ></input>
          <input type="submit" className="SubmitButton"></input>
        </form>
      </div>
    );
  }
}
