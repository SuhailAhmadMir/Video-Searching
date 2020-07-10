import React, { Component } from "react"
import "./SearchBar.css"
import logo from "../assets/logo.gif"

class SearchBar extends Component {
  state = {
    term: "",
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value })
  }
  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui ui center aligned segment padded basic">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label
              htmlFor="search"
              className="tracking-in-contract "
              style={{ fontSize: "20px", marginBottom: "20px" }}
            >
              Search Vide
              <img src={logo} style={{ width: "14px", height: "14px" }} />s
            </label>
            <div className="ui icon input">
              <input
                style={{
                  borderRadius: "20px",
                  maxWidth: "40%",
                  marginLeft: "30%",
                }}
                className="search-style"
                type="text"
                placeholder="Search Videos"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <i className="search icon" style={{ marginRight: "30%" }}></i>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
