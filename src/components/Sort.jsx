import React, { Component } from "react";
import ArticleList from "./ArticleList";
import "bootstrap-4-grid";

export default class Sort extends Component {
  state = {
    sortBy: "Date",
    order: "desc",
    descString: "Newest",
    ascString: "Oldest",
  };

  changeOrder = (event) => {
    this.setState({ order: event.target.value });
  };

  changeSort = (event) => {
    console.log(event.target.value)
     switch (event.target.value) {
      case 'commentCount':
        this.setState({ascString: "Most commented"})
        this.setState({descString: "Least commented"})
        break;
      case "votes":
        this.setState({ascString: "Most votes"})
        this.setState({descString: "Least votes"})
        break;
    
      default:
        this.setState({ascString: "Newest"})
        this.setState({descString: "Oldest"})
        break;
    }
    this.setState({ sortBy: event.target.value });
  };


  render() { 
    
    const { topic } = this.props;
    const { sortBy, order, ascString, descString } = this.state;


    return (
      <div className="Sort">
        <form className="SortForms">
          <label className="Form">
            Sort by:
            <select
              className="Select"
              onChange={() => {
                this.changeSort(event, "sortBy");
              }}
            >
              <option className="Option" value="createdAt">
                Date
              </option>
              <option className="Option" value="votes">
                Votes
              </option>
              <option className="Option" value="commentCount">
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
              <option value="desc">{ascString}</option>
              <option value="asc">{descString}</option>
            </select>
          </label>
        </form>
        <div>
          <ArticleList
            topic={topic}
            sortBy={sortBy || "createdAt"}
            order={order || "desc"}
          />
        </div>
      </div>
    );
  }
}
