import React, { Component } from "react";
import DeleteComment from "./DeleteComment"
import VoteHandler from "./VoteHandler"

export default class CommentCard extends Component {
  state = {
    display: true
  }
  hideComment = () => {
    return this.setState({display:false})
  }
    render() {
      const {comment} = this.props
    return <div className="commentCard" >
      {this.state.display && <div>
      {this.props.username === comment.author && <DeleteComment commentId={comment.comment_id}  hideComment={this.hideComment}/>}
       <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <VoteHandler id={comment.comment_id} thing={"comments"} votes={comment.votes}/>
        </div>}
    </div>;
  }
}
