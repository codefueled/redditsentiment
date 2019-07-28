import React, { Component } from "react";
import CommentCycler from "./CommentCycler";
import SubredditBar from "./SubredditBar";
import SearchBar from "./SearchBar";
import SubredditTitle from "./SubredditTitle";
import RecentlyAdded from "./RecentlyAdded";
import RandomizedTopics from "./RandomizedTopics";

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
              <div className="col-lg-8 ">
                <div className="row ">
                  <div className="col-lg-3">
                    <RecentlyAdded />
                  </div>
                  <div className="col-lg-5">
                    <div
                      className="media-body w-100"
                      style={{ width: "300px" }}
                    >
                      <h5>Recently Added:</h5>
                      <p>
                        Here are a few albums recently analyzed by our model.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    class="jumbotron jumbotron-fluid"
                    style={{ backgroundColor: "white" }}
                  >
                    <div class="container">
                      <h1 class="display-4">Comments Analyzed: 8673</h1>
                      <p class="lead">
                        HipHopHeads is a music subreddit regarding everything
                        hip-hop. Latest hip-hop albums, trends, and artists are
                        discussed here.
                      </p>
                      <p class="lead">
                        We only use comments from album discussion threads. This
                        allowed us to get data suited to classifying an album's
                        perception.
                      </p>
                      <p class="lead">
                        Out of all the comments that we fed into our model, 40%
                        were classified as having a negative connotation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <RandomizedTopics />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sentiment;
