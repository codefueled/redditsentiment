import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class RecentlyAdded extends Component {
  state = {};
  render() {
    return (
      <Carousel className="w-25">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/denzel.jpeg")}
          />
          <Carousel.Caption>
            <h3>TABOO</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/DenzelCurry_ZUU_Cover.jpg")}
          />

          <Carousel.Caption>
            <h3>ZUU</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/travis-scott-astroworld-second-cover-01.jpg")}
          />
          <Carousel.Caption>
            <h3>ASTRO</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default RecentlyAdded;
