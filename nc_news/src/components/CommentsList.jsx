import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import ErrorHandler from "./ErrorHandler";

export default class CommentsList extends Component {
  state = {
    loading: true,
    comments: []
  };
  componentDidMount() {
    return api
      .getCommentsForArticle(this.props.articleId)
      .then(comments => this.setState({ comments, loading: false }))
      .catch(err => ErrorHandler(err));
  }
  createCommentsList = () => {
    const { comments } = this.state;
    const { username } = this.props;
    return comments.map(comment => {
      return (
        <CommentCard
          username={username}
          comment={comment}
          key={comment.comment_id}
        />
      );
    });
  };

  render() {
    const { username, articleId } = this.props;
    return (
      <div className="commentsList">
        {this.state.loading && <h3>LOADING</h3>}
        <h4>Comments</h4>
        {this.createCommentsList()}
        <CommentForm username={username} articleId={articleId} />
      </div>
    );
  }
}
