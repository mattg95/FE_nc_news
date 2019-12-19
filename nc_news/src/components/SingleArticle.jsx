import React, { Component } from 'react'
import * as api from "../utils/api"
import CommentsList from "./CommentsList"
import VoteHandler from "./VoteHandler"

export default class SingleArticle extends Component {
    state = {
        article: ""
    }
    componentDidMount(){
        const {articleId} = this.props
        return api.getArticleById(articleId).then(article => 
            this.setState({ article })
        );
    }
    render() {
        const {title, body, votes} = this.state.article
        const {username, articleId} = this.props
        return (
        <div>
            <div className="singleArticle">
                <h4>{title}</h4>
                <p>{body}</p>
                <VoteHandler id={+articleId} thing={"articles"} votes={votes}/>
            </div>
            <CommentsList username={username} articleId={articleId}/>
        </div>
        )
    }
}
