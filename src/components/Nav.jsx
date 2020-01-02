import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import ErrorHandler from "./ErrorHandler";

class Nav extends Component {
  state = {
    topics: [],
    loading: true
  };
  componentDidMount() {
    api
      .getTopics()
      .then(topics => this.setState({ topics, loading: false }))
      .catch(err => ErrorHandler(err));
  }
  mapTopics = () => {
    const { topics } = this.state;
    return topics.map((topic, i) => {
      const { slug } = topic;
      return (
        <Link to={`/articles/topic/${slug}`} key={i}>
          <button className="TopicsButton" value={slug} onClick={this.setTopic}>
            {slug.toUpperCase()}
          </button>
        </Link>
      );
    });
  };
  render() {
    return (
      <div className="Nav">
        <div className="TopicsButtons">
          {this.state.loading && <h3>LOADING</h3>}
          <Link to="/">
            <button className="TopicsButton">ALL</button>
          </Link>
          {this.mapTopics()}
        </div>
        <h3>User: {this.props.username}</h3>
      </div>
    );
  }
}

export default Nav;
