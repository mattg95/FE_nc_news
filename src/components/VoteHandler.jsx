import React, { Component } from "react";
import * as api from "../utils/api";

export default class VoteHandler extends Component {
  state = {
    passedVote: 0,
    loading: true
  };
  handleClick = event => {
    const { thing, id } = this.props;
    const { value } = event.target;
    const { passedVote } = this.state;
    this.setState({ passedVote: passedVote + +value });
    return api.voteHandler(thing, id, +value);
  };

  componentDidMount = () => {
    this.setState({ loading: false });
  };
  render() {
    const { passedVote } = this.state;
    const { votes, userComment } = this.props;
    return this.state.loading ? (
      <h2>LOADING!</h2>
    ) : (
      <div className="voteForm">
        <p> Votes: {votes + +passedVote}</p>
        <button
          onClick={this.handleClick}
          value={1}
          disabled={userComment || passedVote > 0}
          className="voteButton"
        >
          UpVote
        </button>
        <button
          onClick={this.handleClick}
          value={-1}
          disabled={userComment || passedVote < 0}
          className="voteButton"
        >
          DownVote
        </button>
      </div>
    );
  }
}
