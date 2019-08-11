import React, { Component } from "react";
import CommentCycler from "./CommentCycler";
class HHHAlbumHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-3 mt-2">
          <img
            className="w-100"
            src={
              process.env.PUBLIC_URL +
              this.getImageFilePath(this.props.hhhalbum)
            }
          />
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-between flex-wrap pt-3 pb-2 mb-3 border-bottom ">
            <h1 className="display-4 font-weight-bold">
              {this.props.hhhalbum.albumname}
            </h1>
          </div>
          <div className="mt-5">
            <CommentCycler />
          </div>
        </div>
      </React.Fragment>
    );
  }

  getImageFilePath(album) {
    var albumName = album.albumname;
    var fileName = albumName.replace(/[ ]/g, "_");
    fileName = fileName.replace(/["]/g, "quotation");
    let filePath = "/images/" + fileName + ".jpg";
    return filePath;
  }
  componentDidMount() {
    console.log(this.props);
  }
}

export default HHHAlbumHeader;
