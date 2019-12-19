import React, { Component } from "react";
import ArticleList from "./ArticleList";

export default class Sort extends Component {
  state = {
    sortBy: "",
    order: ""
  };

  changeSort = event => {
    this.setState({ sortBy: event.target.value });
  };

  changeAsc = event => {
    this.setState({ order: event.target.value });
  };

  render() {
    const { topic } = this.props;
    const { sortBy, order } = this.state;
    return (
      <div className="sort">
        <form className="form">
          <label>
            {" "}
            Sort By
            <select className="form" onChange={this.changeSort}>
              <option value="created_at">Date</option>
              <option value="votes">Votes</option>
              <option value="comment_count">Comment count</option>
            </select>
          </label>
          <label>
            {" "}
            Order
            <select className="form" onChange={this.changeAsc}>
              <option value="" disabled defaultValue hidden>
                Order
              </option>
              <option value="desc">asc</option>
              <option value="asc">desc</option>
            </select>
          </label>
        </form>
        <ArticleList
          topic={topic}
          sortBy={sortBy || "created_at"}
          order={order || "desc"}
        />
      </div>
    );
  }
}
