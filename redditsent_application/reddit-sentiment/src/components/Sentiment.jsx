import React, { Component } from "react";
import CommentCycler from "./CommentCycler";
import SubredditBar from "./SubredditBar";
import SearchBar from "./SearchBar";
import SubredditTitle from "./SubredditTitle";
import RecentlyAdded from "./RecentlyAdded";

class Sentiment extends Component {
  state = {};
  render() {
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: "whitesmoke", minHeight: "90vh" }}
      >
        <div className="row">
          <nav className="col-lg-2 d-none d-md-block sidebar">
            <SubredditBar />
          </nav>
          <div className="col-lg-10" style={{ backgroundColor: "white" }}>
            <SearchBar />
            <SubredditTitle />
            <div className="row">
              <div className="col-lg-8">
                <RecentlyAdded />
              </div>
              <div className="col-lg-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sentiment;
