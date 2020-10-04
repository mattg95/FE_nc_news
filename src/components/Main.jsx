import React from "react";
import Nav from "../components/Nav";
import Sort from "../components/Sort";

const Main = ({ username }) => {
  return (
    <div>
      <Nav username={username} />
      <Sort />
    </div>
  );
};

export default Main;
