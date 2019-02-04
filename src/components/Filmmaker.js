import React, { Component } from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import ApplicationViews from "./ApplicationViews";
import "./Filmmaker.css";
// import "bootstrap/dist/css/bootstrap.min.css";

class Filmmaker extends Component {
  state = {
    users: [],
    projects: [],
    castMembers: [],
    crewMembers: []
  }

  render() {
    return (
      <Router>
        <ApplicationViews users= {this.state.users} projects={this.state.projects} castMembers={this.state.castMembers} crewMembers={this.state.crewMembers}/>
      </Router>
    );
  }
}

export default Filmmaker;