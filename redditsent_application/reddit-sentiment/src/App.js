import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Sentiment from "./components/Sentiment";
import Participate from "./components/Participate";
import HomePage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HHHAlbum from "./components/HHHAlbum";
import DataScience from "./components/DataScience";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/sentiment/:id" component={HHHAlbum} />
          <Route path="/sentiment" exact component={Sentiment} />
          <Route path="/participate" component={Participate} />
          <Route path="/datascience" component={DataScience} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
