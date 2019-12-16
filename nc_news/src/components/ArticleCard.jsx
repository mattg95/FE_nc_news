import React, { Component } from "react";

export default class ArticleCard extends Component {
  render() {
    return <div className="articleCard" >
        <h4>{this.props.article.title}</h4>
        <p>Author: {this.props.article.author}</p>   
        <p>created_at: {this.props.article.created_at}</p>
        <p>votes: {this.props.article.votes}</p>
        <p>comment count: {this.props.article.comment_count}</p>

        </div>;
  }
}
