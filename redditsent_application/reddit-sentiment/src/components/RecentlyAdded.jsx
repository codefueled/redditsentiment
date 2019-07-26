import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class RecentlyAdded extends Component {
  state = {};
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src={require("./images/denzel.jpg")} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="./components/images/denzel-curry-ta13oo-album-art.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src="./components/images/travis-scott-astroworld-second-cover-01.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default RecentlyAdded;
