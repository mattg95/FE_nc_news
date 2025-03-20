import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsList from "./CommentsList";
import VoteHandler from "./VoteHandler";

export default class SingleArticle extends Component {
  state = { loading: true, article: "", err: "" };
  componentDidMount() {
    const { articleId } = this.props;
    return api
      .getArticleById(articleId)
      .then((article) => this.setState({ article, loading: false }))
      .catch((err) => this.setState({ err: err.response.data.msg }));
  }
  render() {
    const { title, body, votes } = this.state.article;
    const { userId, articleId } = this.props;
    if (this.state.err) return <h2>{this.state.err}</h2>;
    else if (this.state.loading) return <h2>LOADING</h2>;
    return (
      <div>
        <div className="SingleArticle">
          <h4 className="ArticleTitle">{title}</h4>
          <p>{body}</p>
          <VoteHandler id={+articleId} thing={"articles"} votes={votes} />
        </div>
        <CommentsList userId={userId} articleId={+articleId} />
      </div>
    );
  }
}
