import React, { Component } from "react";
import SubredditBar from "./SubredditBar";
import SearchBar from "./SearchBar";
import HHHAlbumHeader from "./HHHAlbumHeader";
import Score from "./Score";

class HHHAlbum extends Component {
  state = {
    albumname: "Denzel Curry - ZOO",
    albumpicpath: "./images/DenzelCurry_ZUU_Cover.jpg",
    rating: "99.7%",
    numanalyzed: "500",
    toppercent: "90",
    commentscycle: ["Haha trash", "cool"]
  };
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
            <div className="row">
              <HHHAlbumHeader />
              <div className="col-lg-1">
                <Score />
              </div>
            </div>

            <div className="row">
              <div
                class="jumbotron jumbotron-fluid"
                style={{ backgroundColor: "white" }}
              >
                <div class="container">
                  <h1 class="display-4">
                    <span>Hiphopheads views the album </span>
                    <span style={{ color: "salmon" }}>negatively</span>
                  </h1>
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
                    Out of all the comments that we fed into our model, 40% were
                    classified as having a negative connotation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HHHAlbum;
