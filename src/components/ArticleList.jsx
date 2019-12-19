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
      api
        .sortArticles(sortBy, order)
        .then(articles => this.setState({ articles }))
        .catch(err => ErrorHandler(err));
    }
    if (topic !== prevProps.topic) {
      if (!topic) {
        api
          .getAllArticles()
          .then(articles => this.setState({ articles }))
          .catch(err => ErrorHandler(err));
      } else {
        api
          .getArticlesByTopic(topic)
          .then(articles => this.setState({ articles }))
          .catch(err => ErrorHandler(err));
      }
    }
  }

  createArticleList = () => {
    return this.state.articles.map((article, i) => {
      return <div key={i}>{<ArticleCard article={article} />}</div>;
    });
  };

  render() {
    return (
      <div className="ArticleList">
        {this.state.loading && <h2>LOADING</h2>}
        {this.createArticleList()}
      </div>
    );
  }
}

export default ArticleList;
