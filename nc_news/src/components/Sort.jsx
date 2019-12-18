import React, { Component } from 'react'
import ArticleList from "./ArticleList"

export default class Sort extends Component {
    state = {
        sortBy: "",
        order: "",
    }

    changeSort =() => {this.setState({sortBy: event.target.value})
    }

    changeAsc = () => {this.setState({order: event.target.value})
    }
    render() {
        return (
            <div className="sort">
                <form className="form">
                  <label> Sort By 
                <select className="form" onChange={this.changeSort}>
                    <option value="created_at">Date</option>
                    <option value="votes">Votes</option>
                    <option value="comment_count">Comment count</option>
                </select>
                    </label>
                    <label> Order  
                <select className="form" onChange={this.changeAsc}>
                     <option value="" disabled defaultValue hidden>Order</option>
                    <option value="desc">asc</option>
                    <option value="asc">desc</option>
                </select>
                </label>
                </form>
                <ArticleList topic={this.props.topic} sortBy={this.state.sortBy || "created_at"} order={this.state.order || "desc"}/>
              </div>
        )
    }
}
