import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class RecentlyAdded extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Carousel className="w-75 ml-4">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./images/denzel.jpeg")}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./images/DenzelCurry_ZUU_Cover.jpg")}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./images/travis-scott-astroworld-second-cover-01.jpg")}
            />
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default RecentlyAdded;
