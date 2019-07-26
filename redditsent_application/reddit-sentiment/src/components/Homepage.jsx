import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentCycler from "./CommentCycler";
import {
  faHeart,
  faServer,
  faFileAlt,
  faArrowRight,
  faLaugh,
  faFrownOpen
} from "@fortawesome/free-solid-svg-icons";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row homepage">
          <div className="col-12 col-lg-4">
            <div
              class="jumbotron jumbotron-fluid ml-5"
              style={{ backgroundColor: "#E0FFFF" }}
            >
              <div class="container">
                <h1 class="display-4">What is Reddit Thinking?</h1>
                <p class="lead">
                  We use machine learning and sentiment analysis techniques to
                  accurately predict how Reddit feels about a certain topic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-2">
            <div className="mt-5" style={{ color: "gray" }}>
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
              <FontAwesomeIcon icon={faFileAlt} size="5x" />
            </div>
          </div>
          <div className="col-4 margintop-from-nav">
            <FontAwesomeIcon
              className="ml-3"
              icon={faArrowRight}
              size="10x"
              style={{ color: "gray" }}
            />
            <FontAwesomeIcon
              className="ml-5"
              icon={faServer}
              size="10x"
              style={{ color: "purple" }}
            />
            <div className=" ml-4 mt-5">
              <CommentCycler />
            </div>
          </div>

          <div className="col-4 col-lg-2">
            <div className="mt-5">
              <FontAwesomeIcon
                style={{ color: "lightgreen" }}
                icon={faLaugh}
                size="10x"
              />
              <FontAwesomeIcon
                style={{ color: "#FF7F50" }}
                icon={faFrownOpen}
                size="10x"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div>
              <FontAwesomeIcon
                className="mt-5"
                icon={faHeart}
                size="4x"
                style={{ color: "orange", float: "left" }}
              />
            </div>
            <div class="card mt-1 ml-1" style={{ float: "left" }}>
              <div class="card-body">
                <h5 class="card-title">Opinion</h5>
                <p class="card-text">Some quick example text t</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <FontAwesomeIcon
                className="mt-5"
                icon={faHeart}
                size="4x"
                style={{ color: "orange", float: "left" }}
              />
            </div>
            <div class="card mt-1 ml-1" style={{ float: "left" }}>
              <div class="card-body">
                <h5 class="card-title">Opinion</h5>
                <p class="card-text">Some quick example text t</p>
              </div>
            </div>
          </div>
          <div className="col-4" />
        </div>
      </div>
    );
  }
}

export default HomePage;
