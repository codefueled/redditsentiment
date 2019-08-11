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
              src={
                process.env.PUBLIC_URL +
                this.getImageFilePath(this.props.recentlyAdded[0])
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                process.env.PUBLIC_URL +
                this.getImageFilePath(this.props.recentlyAdded[1])
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={
                process.env.PUBLIC_URL +
                this.getImageFilePath(this.props.recentlyAdded[2])
              }
            />
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

  componentDidMount() {
    console.log(this.props);
  }
}

export default RecentlyAdded;
