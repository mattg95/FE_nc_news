import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  state = {
    username: "",
  };

  render() {
    const { username } = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/articles/topic/:topic"
              element={<Nav username={username} userId={1} />}
            />
            <Route path="/*" element={<Nav username={username} userId={1} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
