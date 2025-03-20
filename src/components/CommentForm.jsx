import React, { Component } from "react";

export default class CommentForm extends Component {
  state = {
    comment: "",
  };

  handleChange = () => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = async (event) => {
    const { articleId, userId, createComment } = this.props;
    const { comment } = this.state;
    event.preventDefault();
    createComment(articleId, userId, comment)
    this.setState({comment:""})

  };


  render() {
    const { comment, displayedComments } = this.state;
    return (
      <div>
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
