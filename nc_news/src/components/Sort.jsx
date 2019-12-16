import React, { Component } from 'react'
import ArticleList from "./ArticleList"

export default class Sort extends Component {
    state = {
        sortBy: "",
        order: ""
    }

    changeSort =() => {this.setState({sortBy: event.target.value})
    }

    changeAsc = () => {this.setState({order: event.target.value})
    }
    handleSubmit(){console.log(event.target.value)}
    render() {
        return (
            <div className="sort">
                <form className="form">
                  <label> Sort By 
                <select className="form" onChange={this.changeSort}>
                    <option >Votes</option>
                    <option >Date created</option>
                    <option>comment_count</option>
                </select>
                    </label>
                    <label> Order  
                <select className="form" onChange={this.changeAsc}>
                     <option value="" disabled defaultValue hidden>Order</option>
                    <option >asc</option>
                    <option >desc</option>
                </select>
                </label>
                <input type="submit" value="Submit" className="form" onChange={this.handleSubmit}></input>
                </form>
                <ArticleList sortBy={this.state.sortBy} order={this.state.order || "asc"}/>
              </div>
        )
    }
}
