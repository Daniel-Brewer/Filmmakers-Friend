// This component has the form that will be displayed to the user for input

import React, { Component } from "react"
import "./SceneProp.css"

export default class ScenePropForm extends Component {
    // Set initial state
    state = {
        name: "",
        address: "",
        projectId: 0
    }

    // Update state whenever an input field is entered
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    constructNewSceneProp = evt => {
        evt.preventDefault()
            const sceneProp = {
                name: this.state.name,
                address: this.state.address,
                projectId: Number(this.props.match.params.projectId)
            }

            // Add the sceneProp to db and redirect user to sceneProp list
            
            this.props.addSceneProp(sceneProp).then(() => this.props.history.push(`/sceneProps/${this.props.match.params.projectId}`))
            
        }

    render() {
        return (
            <React.Fragment>
                    <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <div className="logoutButton">
                        <button type="button"
                            onClick={() => this.props.history.push(`/sceneProps/${this.props.match.params.projectId}`)}
                            className="btn btn-success">
                            Back to Props
                    </button>
                    </div>
                </nav>
                <div className="forms">
                <form className="sceneProp">
                    <div className="form-group">
                        <label htmlFor="name">Prop Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Prop Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="description" placeholder="Description" />
                    </div>
                    <button type="submit" onClick={this.constructNewSceneProp} className="btn btn-primary">Submit</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}