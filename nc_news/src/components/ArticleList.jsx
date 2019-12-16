import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard"

class ArticleList extends Component {
    state = {
        articles: [],
        loading: true
    }
    getArticles = () => {
        api.getAllArticles().then(articles => this.setState({ articles }));
      };
      componentDidMount() {
        this.getArticles();
      }
      createArticleList = () => {
        return this.state.articles.map((article) => {
          return (<ArticleCard article={article}></ArticleCard>)
        })
      }
      render() {
    return (
      <div className="ArticleList">
        {this.state.articles.length && this.createArticleList()}
      </div>
    );
  }
}

export default ArticleList;
