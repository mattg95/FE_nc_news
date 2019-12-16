import React, { Component } from "react";
import {Link} from "@reach/router"
import SingleArticle from "./SingleArticle"

export default class ArticleCard extends Component {
  render() {
    const {article} = this.props
    
    return <div className="articleCard" >
        <Link to={`articles/${article.article_id}`} ><SingleArticle /><h3>{article.title}</h3></Link>
        <p>Author: {article.author}</p>   
        <p>created_at: {article.created_at}</p>
        <p>votes: {article.votes}</p>
        <p>comment count: {article.comment_count}</p>
        </div>;
  }
}
