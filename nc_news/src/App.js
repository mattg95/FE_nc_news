import React, { Component } from 'react';
import Header from "./components/Header"
import Nav from "./components/Nav"
import './App.css';
import Sort from "./components/Sort"

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Nav/>
      <Sort/>
      </div>
    );
  }
}

export default App;
