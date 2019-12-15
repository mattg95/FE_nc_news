import React, { Component } from 'react'
import {getTopics} from "../utils/api"

 class Nav extends Component {
     state = {
         topics: []
     }
    getTopics = () => {
        getTopics().then(topics => this.setState({ topics }));
      };
      componentDidMount() {
        this.getTopics();
      }
      mapTopics = () => {
          return this.state.topics.map((topic, i) => {
              console.log(topic)
            return <button key={i}>{topic.slug}</button>
          })
      }
    render() {

        return (
            <div>
                {this.mapTopics()}
            </div>
        )
    }
}

export default Nav
