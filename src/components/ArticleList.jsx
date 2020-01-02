import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import ErrorHandler from "./ErrorHandler";

class ArticleList extends Component {
  state = {
    loading: true,
    articles: []
  };
  componentDidMount() {
    return api
      .getAllArticles()
      .then(articles => this.setState({ articles: articles, loading: false }))
      .catch(err => ErrorHandler(err));
  }

  componentDidUpdate(prevProps) {
    const { order, sortBy, topic } = this.props;
    if (order !== prevProps.order || sortBy !== prevProps.sortBy) {
      {
        this.setState({ loading: true });
      }
      api
        .sortArticles(sortBy, order)
        .then(articles => this.setState({ articles, loading: false }))
        .catch(err => ErrorHandler(err));
    }
    if (topic !== prevProps.topic) {
      {
        this.setState({ loading: true });
      }
      if (!topic) {
        api
          .getAllArticles()
          .then(articles => this.setState({ articles, loading: false }))
          .catch(err => ErrorHandler(err));
      } else {
        api
          .getArticlesByTopic(topic)
          .then(articles => this.setState({ articles, loading: false }))
          .catch(err => ErrorHandler(err));
      }
    }
  }

  createArticleList = () => {
    return this.state.articles.map((article, i) => {
      return <div key={i}>{<ArticleCard article={article} />}</div>;
    });
  };

  checkForArticles = () => {
    const { topic } = this.props;
    const { articles } = this.state;
    return articles.some(article => article.topic === topic) ? (
      this.createArticleList()
    ) : (
      <h1>No articles found</h1>
    );
  };

  render() {
    const { loading } = this.state;
    const { topic } = this.props;

    return (
      <div className="ArticleList">
        {loading && <h2>LOADING</h2>}
        {!topic && this.createArticleList()}
        {!loading && this.checkForArticles()}
      </div>
    );
  }
}

export default ArticleList;
