import React, { Component } from 'react'
import * as api from "../utils/api"

export default class VoteHandler extends Component {
    upVote = () => {
        return api.voteComment(this.props.commentId, 1).then(() => console.log("votes increased"))
    }
    downVote = () => {
        return api.voteComment(this.props.commentId, -1).then(() => console.log("votes decreased"))
    }
    render() {
        return (
            <div className="voteForm">
                <button onClick={this.upVote} className="voteButton">UpVote</button>
                <button  onClick={this.downVote} className="voteButton">DownVote</button>
            </div>
        )
    }
}
