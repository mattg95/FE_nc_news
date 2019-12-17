import React, { Component } from 'react'
import * as api from "../utils/api"

export default class SingleArticle extends Component {
    state = {
        article: ""
    }
    componentDidMount(){
        return api.getArticleById(this.props.articleId).then(article => 
          
              this.setState({ article })
           );
    }
    render() {
        return (
            <div className="singleArticle">
                <h4>{this.state.article.title}</h4>
                <p>{this.state.article.body}</p>
            </div>
        )
    }
}