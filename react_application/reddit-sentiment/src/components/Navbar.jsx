import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark nav">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <Link className="navbar-brand" to="/">
          Reddit Sentiment
        </Link>
        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <Link className="nav-link p-2" to="/sentiment">
            <li className="nav-item ">Sentiment</li>
          </Link>
          <Link className="nav-link" to="/datascience">
            <li className="nav-item active">Data Science</li>
          </Link>
          <Link className="nav-link" to="/participate">
            <li className="nav-item active">Participate</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
