import React, { Component } from 'react'
import {Link} from "@reach/router";
import Sort from "./Sort"
// import * as api from "../utils/api"

 class Nav extends Component {
   state = {
     topic: ""

   }
   setTopic = () => {
     this.setState({topic: event.target.value})
   }
    render() {
   
        return (
          <div className="Nav">
          <form >
            <Link to="/coding">
              <button className="topicsButton" value="coding" onClick={this.setTopic}>Coding</button>
            </Link>
            <Link to="/football">
              <button className="topicsButton" value="football" onClick={this.setTopic}>Football</button>
            </Link>
            <Link to="/cooking">
              <button className="topicsButton" value="cooking" onClick={this.setTopic}>Cooking</button>
            </Link>
          </form>
          <Sort topic={this.state.topic}/>
          </div>
        );
      }
}

export default Nav
