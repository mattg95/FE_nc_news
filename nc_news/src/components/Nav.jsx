import React, { Component } from 'react'
import {Link} from "@reach/router";

 class Nav extends Component {
    render() {
        return (
          <form className="Nav">
            <Link to="/coding">
              <button className="topicsButton">Coding</button>
            </Link>
            <Link to="/football">
              <button className="topicsButton">Football</button>
            </Link>
            <Link to="/cooking">
              <button className="topicsButton">Cooking</button>
            </Link>
          </form>
        );
      }
}

export default Nav
