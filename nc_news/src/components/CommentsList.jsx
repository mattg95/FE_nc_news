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
    const { comments } = this.state;
    const { username, articleId } = this.props;
    if (!comments.length) {
      return <h3>LOADING</h3>;
    }
    return (
      <div className="commentsList">
        <h4>Comments</h4>
        {this.createCommentsList()}
        <CommentForm username={username} articleId={articleId} />
      </div>
    );
  }
}
