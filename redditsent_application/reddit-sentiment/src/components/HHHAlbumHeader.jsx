import React, { Component } from "react";
import { createRequireFromPath } from "module";
import CommentCycler from "./CommentCycler";
class HHHAlbumHeader extends Component {
  state = {
    albumname: "Denzel Curry - ZUU",
    albumpic: "./images/Denzel_Curry_-_ZUU.jpg"
  };
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-3 mt-2">
          <img
            className="w-100"
            src={require("./images/Denzel_Curry_-_ZUU.jpg")}
          />
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-between flex-wrap pt-3 pb-2 mb-3 border-bottom ">
            <h1 className="display-4 font-weight-bold">
              {this.state.albumname}
            </h1>
          </div>
          <div className="mt-5">
            <CommentCycler />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HHHAlbumHeader;
