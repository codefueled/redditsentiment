import React, { Component } from "react";
import { Link } from "react-router-dom";

class RandomizedTopics extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header font-weight-bold">Randomized:</div>
        <ul className="list-group list-group-flush">
          {this.props.randomAlbums.map(album => (
            <Link to={`/sentiment/${album.id}`}>
              <li key={album.id} className="list-group-item">
                {album.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default RandomizedTopics;
