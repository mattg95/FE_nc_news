import React, { Component } from 'react'
import * as api from "../utils/api"

export default class VoteHandler extends Component {
    state = {
        vote: 0
    }

    handleClick = (event) => {
        this.setState({vote: event.target.value})
        return api.voteHandler(this.props.thing, this.props.id, 1).catch((err) => {console.log(err)})
    }
    render() {
        return (
            <div className="voteForm">
                <p> Votes: {this.props.votes + +this.state.vote }</p>
                <button onClick={this.handleClick} value={1} disabled={this.state.vote > 0} className="voteButton">UpVote</button>
                <button onClick={this.handleClick} value={-1} disabled={this.state.vote < 0} className="voteButton">DownVote</button>
            </div>
        )
    }
}
