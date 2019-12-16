import React, { Component } from 'react';
import Header from "./components/Header"
import Nav from "./components/Nav"
import './App.css';
import ArticleList from './components/ArticleList';

class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Nav></Nav>
      <ArticleList/>
      </div>
    );
  }
}

export default App;
