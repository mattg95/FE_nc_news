import React, { Component } from 'react';
import Header from "./components/Header"
import Nav from "./components/Nav"
import './App.css';
import {Router} from "@reach/router"
import SingleArticle from "./components/SingleArticle"

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Router>
        <Nav path="/"/>
        <SingleArticle path="/articles/:articleId"/>
      </Router>
      </div>
    );
  }
}

export default App;
