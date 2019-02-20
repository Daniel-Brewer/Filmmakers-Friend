import React, { Component } from "react"
import "./SceneProp.css"
import ScenePropCard from "./ScenePropCard"



export default class ScenePropList extends Component {

    componentDidMount = () => {
      //   pass projectId to updateScenePropComponent for page refreshment
    this.props.updateScenePropComponent(this.props.match.params.projectId)
    }
    render() {

      return (
          <React.Fragment>
          <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
              <div className="logoutButton">
              <button type="button"
                          onClick={()=> this.props.history.push(`/projects/${this.props.match.params.projectId}`)}
                          className="btn btn-success">
                      Back to Project
                  </button>
              </div>
          </nav>
          <h2>Props</h2>
              <div className="scenePropButton">
                  <button type="button"
                          onClick={()=> this.props.history.push(`/sceneProps/new/${this.props.match.params.projectId}`)}
                          className="btn btn-success">
                      Add Prop
                  </button>
              </div>
              <section className="sceneProps">               
              {
                  this.props.sceneProps.map(sceneProp =>
                      <ScenePropCard key={sceneProp.id} sceneProp={sceneProp} {...this.props} />
                      )
                  }
              </section>
          </React.Fragment>
      )
  }
}