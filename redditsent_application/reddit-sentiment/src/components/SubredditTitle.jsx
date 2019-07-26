import React, { Component } from "react";

class SubredditTitle extends Component {
  state = {
    title: ["r/HipHopHeads"]
  };
  render() {
    return (
      <div className="d-flex justify-content-between flex-wrap pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{this.state.title}</h1>
      </div>
    );
  }
}

export default SubredditTitle;
