import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import Sort from "./components/Sort";
import ErrorHandler from "./components/ErrorHandler";

class App extends Component {
  state = {
    username: "jessjelly"
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <Header />
        <Nav username={username} />
        <Router>
          <SingleArticle username={username} path="/articles/:articleId" />
          <Sort path="/articles/topic/:topic" />
          <Sort path="/*" />
          <ErrorHandler default />
        </Router>
      </div>
    );
  }
}

export default App;
