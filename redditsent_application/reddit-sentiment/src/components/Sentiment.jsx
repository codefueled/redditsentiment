import React, { Component } from "react";
import CommentCycler from "./CommentCycler";
import SubredditBar from "./SubredditBar";
import SearchBar from "./SearchBar";
import SubredditTitle from "./SubredditTitle";
import RecentlyAdded from "./RecentlyAdded";
import RandomizedTopics from "./RandomizedTopics";
import API from "./utils/API";

class Sentiment extends Component {
  state = {
    ready: false,
    albums: [],
    recentlyAddedAlbums: [],
    randomAlbums: [],
    commentsAnalyzed: 0
  };
  render() {
    var recentlyAddedChild = this.state.ready ? (
      <RecentlyAdded recentlyAdded={this.state.recentlyAddedAlbums} />
    ) : (
      ""
    );
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
                  <div className="col-lg-3">{recentlyAddedChild}</div>
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
                    className="jumbotron jumbotron-fluid"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="container">
                      <h1 className="display-4">Comments Analyzed: 8673</h1>
                      <p className="lead">
                        HipHopHeads is a music subreddit regarding everything
                        hip-hop. Latest hip-hop albums, trends, and artists are
                        discussed here.
                      </p>
                      <p className="lead">
                        We only use comments from album discussion threads. This
                        allowed us to get data suited to classifying an album's
                        perception.
                      </p>
                      <p className="lead">
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
  async componentDidMount() {
    var returnAllAlbums = [];
    let albums = await API.get("allalbums");
    console.log(albums);
    albums.data.forEach(album => {
      let albumobj = {
        id: album.albumID,
        artistid: album.artistID,
        name: album.albumname
      };
      returnAllAlbums.push(albumobj);
    });

    var returnRecentAlbums = [];
    let recentAlbums = await API.get("recentalbums");
    console.log(recentAlbums);
    recentAlbums.data.forEach(recentAlbum => {
      let recentAlbumObj = {
        id: recentAlbum.albumID,
        artistid: recentAlbum.artistID,
        name: recentAlbum.albumname
      };
      returnRecentAlbums.push(recentAlbumObj);
    });

    var returnRandomAlbums = [];
    let randomAlbums = await API.get("randomalbums");
    console.log(randomAlbums);
    randomAlbums.data.forEach(randomAlbum => {
      let randomAlbumObj = {
        id: randomAlbum.albumID,
        artistid: randomAlbum.artistID,
        name: randomAlbum.albumname
      };
      returnRandomAlbums.push(randomAlbumObj);
    });

    this.setState({
      ready: true,
      albums: returnAllAlbums,
      recentlyAddedAlbums: returnRecentAlbums,
      randomAlbums: returnRandomAlbums
    });
    console.log(this.state);
  }
}

export default Sentiment;
