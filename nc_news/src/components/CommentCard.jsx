import React, { Component } from "react";
import DeleteComment from "./DeleteComment"

export default class ArticleCard extends Component {
    render() {
    const {comment} = this.props
    return <div className="commentCard" >
      {this.props.username === this.props.comment.author && <DeleteComment commentId={this.props.comment.comment_id}/>}
       <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Votes: {comment.votes}</p>
    </div>;
  }
}
