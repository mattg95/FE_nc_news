import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard"

class ArticleList extends Component {
    state = {
        articles: [],
        loading: true,
    }

      componentDidMount() { 
        return api.getAllArticles().then(articles => 
          this.setState({ articles })
         );
      }
      componentDidUpdate(prevProps) {
        if( (this.props.order !== prevProps.order) || (this.props.sortBy !== prevProps.sortBy) ){
          api.sortArticles(this.props.sortBy, this.props.order).then(articles => this.setState({articles}))
        }      
        if (this.props.topic !== prevProps.topic){
          if (!this.props.topic){
            api.getAllArticles().then(articles => 
              this.setState({ articles }))
          }
          else {
            api.getArticlesByTopic(this.props.topic).then(articles => this.setState({articles}))
          }
        }
         
      }
      createArticleList = () => {
        return this.state.articles.map((article) => {
          return (<ArticleCard article={article} key={article.article_id}></ArticleCard>)
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
