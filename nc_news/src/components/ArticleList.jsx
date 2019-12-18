import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard"

class ArticleList extends Component {
    state = {
        articles: [],
    }
      componentDidMount() { 
        return api.getAllArticles().then(articles => 
          this.setState({ articles })
        );
      }

      componentDidUpdate(prevProps) {
        const {order, sortBy, topic} = this.props
        if( (order !== prevProps.order) || (sortBy !== prevProps.sortBy) ){
          api.sortArticles(sortBy, order).then(articles => this.setState({articles}))
        }      
        if (topic !== prevProps.topic){
          if (!topic){
            api.getAllArticles().then(articles => 
            this.setState({ articles })
            )
          }
          else {
            api.getArticlesByTopic(topic).then(articles => this.setState({articles}))
          }
        }
      }

      createArticleList = () => {
        return this.state.articles.map((article, i) => {
          return (<div key={i}>{ArticleCard(article)}</div>)
        })
      }
      
      render() {
        if (!this.state.articles.length) {
          return <h3>LOADING</h3>
        }
        else return (
        <div className="ArticleList" >
        {this.createArticleList()}
      </div>
    );
  }
}

export default ArticleList;
