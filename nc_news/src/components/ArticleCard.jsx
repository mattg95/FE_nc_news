import React, { Component } from "react";

export default class ArticleCard extends Component {
  render() {
      console.log(this.props.article)
    return <div className="articleCard" key={this.props.article.article_id}>
        <h4>{this.props.article.title}</h4>
        <p>Author: {this.props.article.author}</p>
        </div>;
  }
}
