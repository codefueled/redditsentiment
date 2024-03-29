import React, { Component } from "react";
import CommentSurvey from "./CommentSurvey";

class Participate extends Component {
  state = {};
  render() {
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: "whitesmoke", minHeight: "90vh" }}
      >
        <div className="row homepage">
          <div className="col-lg-6">
            <div
              className="jumbotron jumbotron-fluid ml-5"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="container">
                <h1 className="display-4 mb-2">Like our purpose?</h1>
                <p className="lead">
                  Contribute to the cause by helping us classify a few comments!
                  Hopefully you can get a laugh out of a few of them as well.
                </p>
                <p className="lead">
                  Here are five comments. Each may have a positive or negative
                  tone. Some comments may not be expressing an opinion at all!
                  You can click through them to read and help us mark them. For
                  instance, "This is a great idea!" would be classified as
                  having a positive tone. "I hate this." would be negative. If
                  you are unsure, you can select "Neither"
                </p>
                <p className="lead">
                  We use this data to help train our machine learning models to
                  be more accurate so that they can give you a better idea of
                  how Reddit truly feels.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mt-5">
              <CommentSurvey />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Participate;
