import React, { Component } from "react";

class RandomizedTopics extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header font-weight-bold">Randomized:</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Travis Scott: Astroworld</li>
          <li className="list-group-item">Chance the Rapper: Big Day</li>
          <li className="list-group-item">YBN Cordae: The Lost Boy</li>
          <li className="list-group-item">Kanye: Yeezus</li>
        </ul>
      </div>
    );
  }
}

export default RandomizedTopics;
