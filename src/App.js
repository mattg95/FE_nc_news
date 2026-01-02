import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Login from "./components/Login";
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
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  <Header />
                  <Login />
                </>
              }
            />

            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Nav username={username} userId={1} />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
