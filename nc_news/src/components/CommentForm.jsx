import React, { Component } from 'react'

export default class CommentForm extends Component {
    render() {
        return (
            <div className="commentForm">
                <h3>Post comment</h3>
                <form>
                    <input type="text" className="commentInput">
                    </input>
                    <input type="submit" className="topicsButton">
                    </input>
                
                </form>
            </div>
        )
    }
}
