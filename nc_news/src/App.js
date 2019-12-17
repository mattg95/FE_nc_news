import React, { Component } from 'react';
import Header from "./components/Header"
import Nav from "./components/Nav"
import './App.css';
import {Router} from "@reach/router"
import SingleArticle from "./components/SingleArticle"
import Sort from "./components/Sort"

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
       <Nav/>
      <Router>
        <SingleArticle path="/articles/:articleId"/>
        <Sort path="/articles/topic/:topic"/>
        <Sort path="/"/>
      </Router>
      </div>
    );
  }
}

export default App;
