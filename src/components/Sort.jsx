import React, { Component } from "react";
import ArticleList from "./ArticleList";

export default class Sort extends Component {
  state = {
    sortBy: "",
    order: ""
  };

  changeOrder = (event, subState) => {
    this.setState({ [subState]: event.target.value });
  };

  render() {
    const { topic } = this.props;
    const { sortBy, order } = this.state;
    return (
      <div className="Sort">
        <form className="Form">
          <label className="Form">
            {" "}
            Sort By
            <select
              className="Form"
              onChange={() => {
                this.changeOrder(event, "sortBy");
              }}
            >
              <option value="created_at">Date</option>
              <option value="votes">Votes</option>
              <option value="comment_count">Comment count</option>
            </select>
          </label>
          <label>
            {" "}
            Order
            <select
              className="Form"
              onChange={() => {
                this.changeOrder(event, "order");
              }}
            >
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
