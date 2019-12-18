import React, { Component } from "react";
import * as api from "../utils/api";

export default class CommentForm extends Component {
  state = {
    comment: ""
  };
  handleChange = () => {
    this.setState(
      {
        comment: event.target.value
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault()
    return api.postComment(this.props.articleId,this.props.username,this.state.comment).then(() => {
      this.setState({ comment: "" })
    });
  };
  
  render() {
    return (
      <div className="commentForm">
        <h3>Post comment</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="commentInput"
            onChange={this.handleChange}
          ></input>
          <input
            type="submit"
            className="topicsButton"
          ></input>
        </form >
      </div>
    );
  }
}
