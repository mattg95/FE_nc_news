import React from "react";
import Nav from "../components/Nav";
import Sort from "../components/Sort";

const Main = ({ username, userId }) => {
  return (
    <div>
      <Nav username={username} userId={userId} />
      <Sort />
    </div>
  );
};

export default Main;
