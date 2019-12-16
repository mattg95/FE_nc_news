import React, { Component } from "react";

export default class ArticleCard extends Component {
  render() {
    return <div className="articleCard" >
        <h4>{this.props.article.title}</h4>
        <p>Author: {this.props.article.author}</p>
        </div>;
  }
}
