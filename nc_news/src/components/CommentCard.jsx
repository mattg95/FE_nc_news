import React, { Component } from "react";
import CommentsList from "./CommentsList";

export default class ArticleCard extends Component {
    render() {
    
    const {comment} = this.props
    console.log(this.props)
    return <div className="commentCard" >
       <p>{comment.body}</p>
      <p>{comment.author}</p>
      <p>{comment.votes}</p>
        </div>;
  }
}
