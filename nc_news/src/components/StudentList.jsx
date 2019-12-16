import React, { Component } from "react";
import * as api from "../utils/api";

class StudentList extends Component {
    state = {
        articles: [],
        loading: true
    }
    getArticles = () => {
        api.getAllArticles().then(articles => this.setState({ articles }));
      };
      componentDidMount() {
        this.getArticles();
      }
      render() {
    return (
      <div className="studentList">
        <h4>{this.state.articles.length && this.state.articles[0].title}</h4>
      </div>
    );
  }
}

export default StudentList;
