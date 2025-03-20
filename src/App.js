import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import './App.css';
import { Router } from '@reach/router';

class App extends Component {
  state = {
    username: 'jessjelly',
  };

  render() {
    const { username } = this.state;
    return (
      <div className='App'>
        <Header />
        <Router>
          <Nav username={username} userId={1} path='/articles/topic/:topic' />
          <Nav username={username} userId={1} path='/*' />
        </Router>
      </div>
    );
  }
}

export default App;
