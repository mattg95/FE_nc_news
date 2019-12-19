import React, { Component } from "react";
import * as api from "../utils/api";

export default class VoteHandler extends Component {
  state = {
    passedVote: 0,
    loading: true
  };
  handleClick = event => {
    this.setState({ passedVote: this.state.passedVote + +event.target.value });
    return api.voteHandler(
      this.props.thing,
      this.props.id,
      +event.target.value
    );
  };
  componentDidMount = () => {
    this.setState({ loading: false });
  };
  render() {
    const { passedVote } = this.state;
    const { votes } = this.props;
    return this.state.loading ? (
      <h2>LOADING!</h2>
    ) : (
      <div className="voteForm">
        <p> Votes: {votes + +passedVote}</p>
        <button
          onClick={this.handleClick}
          value={1}
          disabled={passedVote > 0}
          className="voteButton"
        >
          UpVote
        </button>
        <button
          onClick={this.handleClick}
          value={-1}
          disabled={passedVote < 0}
          className="voteButton"
        >
          DownVote
        </button>
      </div>
    );
  }
}
