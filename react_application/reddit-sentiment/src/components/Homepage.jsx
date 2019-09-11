import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentCycler from "./CommentCycler";
import {
  faServer,
  faStarHalfAlt,
  faLaugh,
  faFrownOpen
} from "@fortawesome/free-solid-svg-icons";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: "whitesmoke", minHeight: "90vh" }}
      >
        <div className="row homepage">
          <div className="col-12 col-lg-5">
            <div
              className="jumbotron jumbotron-fluid ml-5"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="container">
                <h1 className="display-4">What is Reddit Thinking?</h1>
                <p className="lead">
                  We use machine learning and sentiment analysis techniques to
                  accurately predict how Reddit feels about a certain topic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 homepage-image">
            <div
              className="container-fluid text-white vertical-center justify-content-center d-flex flex-column"
              style={{ position: "absolute" }}
            >
              <div className="media" style={{ width: "500px" }}>
                <div className="lead-5 lh-2 mr-4" style={{ width: "64px" }}>
                  <FontAwesomeIcon
                    size="2x"
                    color="lightgreen"
                    icon={faLaugh}
                  />
                  <FontAwesomeIcon
                    size="2x"
                    color="salmon"
                    icon={faFrownOpen}
                  />
                </div>
                <div className="media-body">
                  <h5>Sentiment Tracking</h5>
                  <p>
                    Find the overall "opinion" of a topic or post on Reddit.
                  </p>
                </div>
              </div>
              <br />
              <div className="media" style={{ width: "500px" }}>
                <div className="lead-5 lh-2 mr-4" style={{ width: "64px" }}>
                  <FontAwesomeIcon
                    size="2x"
                    color="lightblue"
                    icon={faServer}
                  />
                </div>
                <div className="media-body">
                  <h5>Machine Learning</h5>
                  <p>
                    We use the latest techniques in text classification and
                    machine learning to classify thousands of Reddit comments.
                  </p>
                </div>
              </div>
              <br />
              <div className="media" style={{ width: "500px" }}>
                <div className="lead-5 lh-2 mr-4" style={{ width: "64px" }}>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    color="gold"
                    size="2x"
                  />
                </div>
                <div className="media-body">
                  <h5>Scoring</h5>
                  <p>
                    Each topic recieves a score from 0 to 100 representing
                    Reddit's perception.
                  </p>
                </div>
              </div>
              <br />
              <div>
                <CommentCycler />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "whitesmoke" }} />
      </div>
    );
  }
}

export default HomePage;
