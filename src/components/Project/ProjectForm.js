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

    /*
        Local method for validation, creating project object, and
        invoking the function reference passed from parent component
     */
    constructNewProject = evt => {
        evt.preventDefault()
        let currentUser = sessionStorage.getItem("credentials")
        console.log("currentUser",currentUser)
        let currentUserId = Number(currentUser)
            const project = {
                title: this.state.title,
                description: this.state.description,
                userId: currentUserId,
                // userId: this.props.users.find(p => p.title === this.state.user).id
            }

            // Create the project and redirect user to project list
            this.props.addProject(project).then(() => this.props.history.push("/projects"))
        }

    render() {
        // let activeUser = sessionStorage.getItem("userId")
        // let activeUserId = Number(activeUser)
        return (
            <React.Fragment>
                <form className="projectForm">
                    <div className="form-group">
                        {/* <label htmlFor="title">Project Title</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               placeholder="Project title" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="description">Description</label> */}
                        <input type="text" required
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