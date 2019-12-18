import React, { Component } from "react";
import DeleteComment from "./DeleteComment"
import VoteHandler from "./VoteHandler"

export default class ArticleCard extends Component {
    render() {
    const {comment} = this.props
    return <div className="commentCard" >
      {this.props.username === comment.author && <DeleteComment commentId={comment.comment_id}/>}
       <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Votes: {comment.votes}</p>
        <VoteHandler id={comment.comment_id} thing={"comments"}/>
    </div>;
  }
}
