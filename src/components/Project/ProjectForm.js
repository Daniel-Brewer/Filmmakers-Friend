// This component has the form that will be displayed to the user for input

import React, { Component } from "react"
import "./Project.css"

export default class ProjectForm extends Component {
    // Set initial state
    state = {
        title: "",
        description: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    constructNewProject = evt => {
        evt.preventDefault()
        let currentUser = sessionStorage.getItem("credentials")
        console.log("currentUser",currentUser)
        let currentUserId = Number(currentUser)
            const project = {
                title: this.state.title,
                description: this.state.description,
                userId: currentUserId
            }

            // Add project to db and Redirect user to project list
            this.props.addProject(project).then(() => this.props.history.push("/projects"))
        }

    render() {

        return (
            <React.Fragment>
                <form className="projectForm">
                    <div className="form-group">
                        <label htmlFor="title">Project Title</label>
                        <input type="textarea" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               placeholder="Project title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="textarea" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="description" placeholder="Description" />
                    </div>
                    <button type="submit" onClick={this.constructNewProject} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}