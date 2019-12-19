import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class Nav extends Component {
  state = {
    topics: [],
    loading: true
  };
  componentDidMount() {
    api.getTopics().then(topics => this.setState({ topics }));
    this.setState({ loading: false });
  }
  mapTopics = () => {
    const { topics } = this.state;
    return topics.map((topic, i) => {
      const { slug } = topic;
      return (
        <Link to={`/articles/topic/${slug}`} key={i}>
          <button className="topicsButton" value={slug} onClick={this.setTopic}>
            {slug.toUpperCase()}
          </button>
        </Link>
      );
    });
  };
  render() {
    return (
      <div className="Nav">
        {this.state.loading && <h3>LOADING</h3>}
        <Link to="/">
          <button className="topicsButton">ALL</button>
        </Link>
        {this.mapTopics()}
      </div>
    );
  }
}

export default Nav;
