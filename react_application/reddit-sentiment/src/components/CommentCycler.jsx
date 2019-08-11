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
    ],
    commentIdx: 0,
    headerColor: "whitesmoke"
  };
  render() {
    return (
      <div
        className="card border-info mb-3"
        style={{ height: 150, width: 500 }}
      >
        <div
          className="card-header"
          style={{ backgroundColor: this.state.headerColor }}
        >
          Comment Feed: r/HipHopHeads
        </div>
        <div className="card-body text-info">
          <p style={{ color: "gray" }}>
            {
              this.state.comments[
                this.state.commentIdx % this.state.comments.length
              ].commentbody
            }
          </p>
        </div>
      </div>
    );
  }
  async componentDidMount() {
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
      if (commentobj.commentbody.length > 140) {
        commentobj.commentbody =
          commentobj.commentbody.substring(0, 160) + "  ...";
      }
      returnComments.push(commentobj);
    });
    this.setState({
      comments: returnComments
    });
    this.setState({
      headerColor: this.getHeaderColor(this.state.comments[0].prediction)
    });
    this.timeout = setInterval(() => {
      var currIdx = this.state.commentIdx;
      var nextHeaderColor = this.getHeaderColor(
        this.state.comments[(currIdx + 1) % this.state.comments.length]
          .prediction
      );
      this.setState({
        commentIdx: currIdx + 1,
        headerColor: nextHeaderColor
      });
    }, 5500);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  getHeaderColor(predict) {
    let currHeaderColor = "";
    if (predict == 0) {
      currHeaderColor = "lightgreen";
    } else if (predict == 1) {
      currHeaderColor = "lightgreen";
    } else {
      currHeaderColor = "salmon";
    }
    return currHeaderColor;
  }
}

export default CommentCycler;
