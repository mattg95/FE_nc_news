import React, { Component } from "react";
import ArticleList from "./ArticleList";
import "bootstrap-4-grid";

export default class Sort extends Component {
  state = {
    sortBy: "",
    order: "",
  };

  changeOrder = (event, subState) => {
    this.setState({ [subState]: event.target.value });
  };

  render() {
    const { topic } = this.props;
    const { sortBy, order } = this.state;
    return (
      <div className="Sort">
        <form className="SortForms">
          <label className="Form">
            Sort by:
            <select
              className="Select"
              onChange={() => {
                this.changeOrder(event, "sortBy");
              }}
            >
              <option className="Option" value="created_at">
                Date
              </option>
              <option className="Option" value="votes">
                Votes
              </option>
              <option className="Option" value="comment_count">
                Comment count
              </option>
            </select>
          </label>
          <label className="Form">
            Order:
            <select
              className="Select"
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
        <div>
          <ArticleList
            topic={topic}
            sortBy={sortBy || "created_at"}
            order={order || "desc"}
          />
        </div>
      </div>
    );
  }
}
