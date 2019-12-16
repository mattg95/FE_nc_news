import React, { Component } from 'react'
import ArticleList from "./ArticleList"

export default class Sort extends Component {
    state = {
        sortBy: "",
        asc: true
    }
    render() {
        return (
            <div className="sort">
                <form className="form">
                  <label> Sort By 
                <select className="form">
                    <option >Votes</option>
                    <option >Date created</option>
                    <option>Comment count</option>
                </select>
                    </label>
                    <label> Order  
                <select className="form" >
                     <option value="" disabled defaultValue hidden>Order</option>
                    <option >Asc</option>
                    <option >Desc</option>
                </select>
                </label>
                <input type="submit" value="Submit"  className="form"></input>
                </form>
                <ArticleList sortBy={this.state.sortBy} asc={this.asc}/>
              </div>
        )
    }
}
