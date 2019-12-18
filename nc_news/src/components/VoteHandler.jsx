import React, { Component } from 'react'
import * as api from "../utils/api"

export default class VoteHandler extends Component {
    state = {
        upvoted: false,
        downvoted: false
    }
    upVote = () => {
        return api.voteHandler(this.props.thing, this.props.id, 1).then(this.setState( {
            upvoted:true
        }))
    }
    downVote = () => {
        return api.voteHandler(this.props.thing, this.props.id, -1).then(this.setState( {
            downvoted:true
        }))
    }
    render() {
        console.log(this.state)
        return (
            <div className="voteForm">
                <button onClick={this.upVote} disabled={this.state.upvoted} className="voteButton">UpVote</button>
                <button  onClick={this.downVote} disabled={this.state.downvoted} className="voteButton">DownVote</button>
            </div>
        )
    }
}
