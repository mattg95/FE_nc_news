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
    const {articleId} = this.props
    const {username} = this.props
    const {comment} = this.state
    return api.postComment(articleId,username,comment).then((comment) => {
      console.log(comment)
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
