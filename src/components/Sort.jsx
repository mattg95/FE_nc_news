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
        <form>
          <label className="Form">
            Sort By
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
            Order
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
        <ArticleList
          topic={topic}
          sortBy={sortBy || "created_at"}
          order={order || "desc"}
        />
      </div>
    );
  }
}
