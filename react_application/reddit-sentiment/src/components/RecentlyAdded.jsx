import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

class RecentlyAdded extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Carousel className="w-75 ml-4">
          <Carousel.Item>
            <Link to={`/sentiment/${this.props.recentlyAdded[0].id}`}>
              <img
                className="d-block w-100"
                src={
                  process.env.PUBLIC_URL +
                  this.getImageFilePath(this.props.recentlyAdded[0])
                }
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`/sentiment/${this.props.recentlyAdded[1].id}`}>
              <img
                className="d-block w-100"
                src={
                  process.env.PUBLIC_URL +
                  this.getImageFilePath(this.props.recentlyAdded[1])
                }
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`/sentiment/${this.props.recentlyAdded[2].id}`}>
              <img
                className="d-block w-100"
                src={
                  process.env.PUBLIC_URL +
                  this.getImageFilePath(this.props.recentlyAdded[2])
                }
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }

  getImageFilePath(album) {
    var albumName = album.name;
    var fileName = albumName.replace(/[ ]/g, "_");
    fileName = fileName.replace(/["]/g, "quotation");
    let filePath = "./images/" + fileName + ".jpg";
    return filePath;
  }
}

export default RecentlyAdded;
