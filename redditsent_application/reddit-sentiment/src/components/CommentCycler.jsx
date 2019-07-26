import React, { Component } from "react";

class CommentCycler extends Component {
  state = {
    comments: ["This is a comment"]
  };
  render() {
    return (
      <div className="card border-info mb-3">
        <div className="card-header">Header</div>
        <div className="card-body text-info">
          <p className="card-text">{this.state.comments[0]}</p>
        </div>
      </div>
    );
  }
}

export default CommentCycler;
