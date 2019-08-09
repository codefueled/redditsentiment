import React, { Component } from "react";
import API from "./utils/API";

class CommentCycler extends Component {
  state = {
    comments: [
      { id: 1, commentbody: "", prediction: 0, probability: 0 },
      { id: 2, commentbody: "", prediction: 0, probability: 0 },
      { id: 3, commentbody: "", prediction: 0, probability: 0 },
      { id: 1, commentbody: "", prediction: 0, probability: 0 },
      { id: 1, commentbody: "", prediction: 0, probability: 0 }
    ]
  };
  render() {
    return (
      <div className="card border-info mb-3">
        <div className="card-header">Header</div>
        <div className="card-body text-info">
          <p className="card-text">{this.state.comments[0].commentbody}</p>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    console.log("Component did mount!");
    var returnComments = [];
    let comments = await API.get("cycler");
    console.log(comments);
    comments.data.forEach(comment => {
      let commentobj = {
        id: comment.id,
        commentbody: comment.commentbody,
        prediction: comment.prediction,
        probability: comment.probability
      };
      returnComments.push(commentobj);
    });
    this.setState({ comments: returnComments });
  }
}

export default CommentCycler;
