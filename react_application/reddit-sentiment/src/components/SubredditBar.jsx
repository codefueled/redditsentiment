import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SubredditBar extends Component {
  state = {
    currentSubreddits: ["r/HipHopheads", "r/politics"],
    upcomingSubreddits: ["r/cats", "r/music"]
  };
  render() {
    return (
      <React.Fragment>
        <div className="sidebar-sticky">
          <h5 className="sidebar-heading d-flex justify-content-between align-items-center  mb-1 text-muted border-bottom">
            Subreddits
          </h5>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            Current:
          </h6>
          <ul className="nav flex-column">
            {this.state.currentSubreddits.map(subr => (
              <li key={subr}>
                <FontAwesomeIcon
                  className="mr-1"
                  color="gray"
                  icon={faFileAlt}
                  size="1x"
                />
                <Link style={{ color: "black" }}>{subr}</Link>
              </li>
            ))}
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            Upcoming:
          </h6>
          <ul className="nav flex-column mb-2">
            {this.state.upcomingSubreddits.map(subr => (
              <li key={subr}>
                <FontAwesomeIcon
                  className="mr-1"
                  color="gray"
                  icon={faFileAlt}
                  size="1x"
                />
                <Link style={{ color: "black" }}>{subr}</Link>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SubredditBar;
