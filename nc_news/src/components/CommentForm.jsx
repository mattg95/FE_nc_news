import React, { Component } from 'react'
import * as api from "../utils/api"

export default class CommentForm extends Component {
    state = {
        comment: ""
    }
    handleChange = () => {
        this.setState(()=> {
            {comment: event.target.value}
        })
    }
    componentDidUpdate = () => {

        console.log(api.postComment())
    }
    handleSubmit = () => {
        return api.postComment().then(this.setState({comment: ""}))
    }
    render() {
        return (
            <div className="commentForm">
                <h3>Post comment</h3>
                <form>
                    <input type="text" className="commentInput" onChange={this.handleChange}>
                    </input>
                    <input type="submit" className="topicsButton" onClick={this.handleSubmit} >
                    </input>
                </form>
            </div>
        )
    }
}
