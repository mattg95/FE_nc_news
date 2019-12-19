import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsList from "./CommentsList";
import VoteHandler from "./VoteHandler";
import ErrorHandler from "./ErrorHandler";

export default class SingleArticle extends Component {
  state = { loading: true, article: "", err: "" };
  componentDidMount() {
    const { articleId } = this.props;
    return api
      .getArticleById(articleId)
      .then(article => this.setState({ article, loading: false }))
      .catch(err => ErrorHandler(err));
  }
  render() {
    const { title, body, votes } = this.state.article;
    const { username, articleId } = this.props;

    return (
      <div>
        {this.state.loading && <h2>LOADING</h2>}
        <div className="singleArticle">
          <h4>{title}</h4>
          <p>{body}</p>
          <VoteHandler id={+articleId} thing={"articles"} votes={votes} />
        </div>
        <CommentsList username={username} articleId={articleId} />
      </div>
    );
  }
}
