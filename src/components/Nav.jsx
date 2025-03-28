import React, { Component } from 'react';
import { Link } from '@reach/router';
import 'bootstrap-4-grid';

import * as api from '../utils/api';
import ErrorHandler from './ErrorHandler';
import { Router } from '@reach/router';
import SingleArticle from './SingleArticle';
import Sort from './Sort';

class Nav extends Component {
  state = {
    topics: [],
    loading: true,
    topic: '',
    error: false,
  };
  componentDidMount() {
    api
      .getTopics()
      .then((topics) => this.setState({ topics, loading: false }))
      .catch((err) => ErrorHandler(err));
  }

  componentDidUpdate() {
    const { error, topics } = this.state;
    const { topic } = this.props;

    !error &&
      topic &&
      topics.every(({ id }) => {
        return id !== Number(topic);
      }) &&
      (this.setState({ error: true }), this.setState({ error: true }));
  }

  mapTopics = () => {
    const { topics } = this.state;
    const { topic } = this.props; // `topic` is the current topic id from the route

    return topics.map(({ slug, id }) => {
      const isActive = topic === String(id); // Check if the current route topic matches the button's id
      return (
        <Link to={`/articles/topic/${id}`} key={id}>
          <button className={`TopicsButton TopicsButton${isActive ? 'Active' : ''}`} value={slug} type='button'>
            {slug.toUpperCase()}
          </button>
        </Link>
      );
    });
  };

  render() {
    return (
      <div className='Nav'>
        {this.state.error ? (
          <h1>404 Not Found</h1>
        ) : (
          <div>
            <div className='TopicsButtonsContainer'>
              <div className='AllTopicsButtons'>
                {this.state.loading && <h3>LOADING</h3>}
                <Link to='/'>
                  <button className='TopicsButton'>ALL</button>
                </Link>
                {this.mapTopics()}
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <h3 className='UserDisplay'>User: {this.props.username}</h3>
                  <Router>
                    <SingleArticle
                      userId={this.props.userId}
                      username={this.props.username}
                      path='/articles/:articleId'
                    />
                    <Sort path='/articles/topic/:topicId' />
                    <Sort path='/*' />
                    <ErrorHandler default />
                  </Router>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Nav;
