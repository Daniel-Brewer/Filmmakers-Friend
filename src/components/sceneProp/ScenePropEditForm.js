// When edit Location is clicked this component will be rendered to the user for input
import React, { Component } from "react"
import "./SceneProp.css"
import ScenePropManager from "../../modules/ScenePropManager";

export default class ScenePropEditForm extends Component {
    // Set initial state
    state = {
        name: "",
        description: "",
        projectId: 0
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    componentDidMount(){
        ScenePropManager.get(this.props.match.params.scenePropId)
        .then(sceneProps => {
          this.setState({
            name:sceneProps.name,
            description: sceneProps.description,
            projectId: sceneProps.projectId
          })
        })
      }
      updateExistingSceneProp = evt => {
          evt.preventDefault()
          const existingSceneProp = {
              name:this.state.name,
              description: this.state.description,
              projectId: Number(this.state.projectId)
            }
            this.props.editSceneProp(this.props.match.params.scenePropId, existingSceneProp)
          .then(() => this.props.history.push(`/sceneProps/${this.state.projectId}`))
        }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                <button type="button"
                            onClick={()=> this.props.history.push(`/sceneProps/${this.state.projectId}`)}
                            className="btn btn-success">
                        Back to Props
                    </button>
                </div>
            </nav>
                <div className="forms">
                <form className="scenePropForm">
                    <div className="form-group">
                        <label htmlFor="name">Prop Name</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="description" value={this.state.description} />
                    </div>
                    <button type="submit" onClick={this.updateExistingSceneProp} className="btn btn-primary">Update</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}