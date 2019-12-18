import React, { Component } from 'react'
import * as api from "../utils/api"

export default class DeleteComment extends Component {
    handleClick = () => {
        return api.deleteComment(this.props.commentId).then(()=> {
            alert("comment deleted")
        }).then(this.props.hideComment())
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} className="deleteButton">
                    Delete
                </button>
            </div>
        )
    }
}
