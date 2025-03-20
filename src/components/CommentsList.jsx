import React, { Component } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import ErrorHandler from "./ErrorHandler";

export default class CommentsList extends Component {
  state = {
    loading: true,
    comments: [],
    err: "",
  };
  componentDidMount() {
    return api
      .getCommentsForArticle(this.props.articleId)
      .then((comments) => this.setState({ comments, loading: false }))
      .catch((err) => {
        this.setState({ err: "err" });
      });
  }
  createCommentsList = () => {
    const { comments } = this.state;
    const { username } = this.props;
    return comments.map((comment) => {
      return (
        <CommentCard
          username={username}
          comment={comment}
          key={comment.id}
        />
      );
    });
  };

  render() {
    const { userId, articleId } = this.props;
    if (this.state.loading) return <h3>LOADING</h3>;
    if (this.state.err) return <ErrorHandler err={this.state.err} />;
    return (
      <div className="CommentsList">
        <h4 className="CommentsHeaders">Comments</h4>
        {this.createCommentsList()}
        <CommentForm  userId={userId} articleId={articleId} />
      </div>
    );
  }
}
