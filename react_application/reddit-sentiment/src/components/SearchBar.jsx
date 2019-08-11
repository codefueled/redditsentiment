import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <input
        className="form-control form-control-dark w-50 mt-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    );
  }
}

export default SearchBar;
