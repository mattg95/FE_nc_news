import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import ErrorHandler from "./ErrorHandler";

export default class CommentForm extends Component {
  state = {
    comment: "",
    displayedComment: "",
    returnedData: {}
  };

  handleChange = () => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    const { articleId, username } = this.props;
    const { comment } = this.state;
    event.preventDefault();
    return api
      .postComment(articleId, username, comment)
      .then(res => {
        this.setState({
          displayedComment: this.state.comment,
          comment: "",
          returnedData: res.data.comment
        });
      })
      .catch(err => ErrorHandler(err));
  };

  render() {
    return (
      <div className="commentForm">
        {this.state.displayedComment && (
          <CommentCard
            username={this.state.returnedData.author}
            comment={this.state.returnedData}
            key={this.state.comment_id}
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
