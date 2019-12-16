import React, { Component } from 'react';
import Header from "./components/Header"
import Nav from "./components/Nav"
import './App.css';
import StudentList from './components/StudentList';

class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Nav></Nav>
      <StudentList/>
      </div>
    );
  }
}

export default App;
