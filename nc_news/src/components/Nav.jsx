import React, { Component } from 'react'
import {getTopics} from "../utils/api"

 class Nav extends Component {
    render() {
        return (
            <div>
                <h1>Nav:{getTopics()}</h1>
            </div>
        )
    }
}

export default Nav
