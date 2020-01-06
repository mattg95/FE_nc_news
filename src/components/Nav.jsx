import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import ErrorHandler from "./ErrorHandler";
import { Router } from "@reach/router";
import SingleArticle from "./SingleArticle";
import Sort from "./Sort";

class Nav extends Component {
  state = {
    topics: [],
    loading: true,
    topic: "",
    error: false
  };
  componentDidMount() {
    api
      .getTopics()
      .then(topics => this.setState({ topics, loading: false }))
      .catch(err => ErrorHandler(err));
  }

  componentDidUpdate() {
    const { error, topics } = this.state;
    const { topic } = this.props;
    !error &&
      topic &&
      topics.every(topicObj => {
        return topicObj.slug !== topic;
      }) &&
      (this.setState({ error: true }), this.setState({ error: true }));
  }

  mapTopics = () => {
    const { topics } = this.state;
    return topics.map((topic, i) => {
      const { slug } = topic;
      return (
        <Link to={`/articles/topic/${slug}`} key={i}>
          <button className="TopicsButton" value={slug} type="button">
            {slug.toUpperCase()}
          </button>
        </Link>
      );
    });
  };

  render() {
    return (
      <div className="Nav">
        {this.state.error ? (
          <h1>404 Not Found</h1>
        ) : (
          <div className="TopicsButtons">
            {this.state.loading && <h3>LOADING</h3>}
            <Link to="/">
              <button className="TopicsButton">ALL</button>
            </Link>
            {this.mapTopics()}
            <h3 className="UserDisplay">User: {this.props.username}</h3>
            <Router>
              <SingleArticle
                username={this.props.username}
                path="/articles/:articleId"
              />
              <Sort path="/articles/topic/:topic" />
              <Sort path="/*" />
              <ErrorHandler default />
            </Router>
          </div>
        )}
      </div>
    );
  }
}

export default Nav;
