import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default class CommentsList extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    return api
      .getCommentsForArticle(this.props.articleId)
      .then(comments => this.setState({ comments }));
  }
  createCommentsList = () => {
    return this.state.comments.map(comment => {
      return (
        <CommentCard
          username={this.props.username}
          comment={comment}
          key={comment.comment_id}
        />
      );
    });
  };
  render() {
    if (!this.state.comments.length) {
      return <h3>LOADING</h3>;
    }
    return (
      <div className="commentsList">
        <h4>Comments</h4>
        {this.state.comments.length && this.createCommentsList()}
        <CommentForm
          username={this.props.username}
          articleId={this.props.articleId}
        />
      </div>
    );
  }
}
