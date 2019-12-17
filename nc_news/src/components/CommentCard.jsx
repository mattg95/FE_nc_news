import React, { Component } from "react";

export default class ArticleCard extends Component {
    render() {
    
    const {comment} = this.props
    return <div className="commentCard" >
       <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Votes: {comment.votes}</p>
    </div>;
  }
}
