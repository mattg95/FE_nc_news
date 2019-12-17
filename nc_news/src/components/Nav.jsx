import React, { Component } from 'react'
import {Link} from "@reach/router";

 class Nav extends Component {
   state = {
     topic: "",

   }
   setTopic = () => {
     this.setState({topic: event.target.value})
   }

  
    render() {
        return (
          <div className="Nav">
          <form >
            <Link to="/">
              <button className="topicsButton" >All</button>
              </Link>
            <Link to="/articles/topic/coding">
              <button className="topicsButton" value="coding" onClick={this.setTopic}>Coding</button>
            </Link>
            <Link to="/articles/topic/football">
              <button className="topicsButton" value="football" onClick={this.setTopic}>Football</button>
            </Link>
            <Link to="/articles/topic/cooking">
              <button className="topicsButton" value="cooking" onClick={this.setTopic}>Cooking</button>
            </Link>
          </form>
          </div>
        );
      }
}

export default Nav
