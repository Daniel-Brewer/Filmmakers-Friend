import React, { Component } from "react"
import "./Project.css"

export default class ProjectEditForm extends Component {
    // Set initial state
    state = {
        title: "",
        description: "",
        userId: ""
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
    constructProjectToEdit = evt => {
        evt.preventDefault()

            const project = {
                title: this.state.title,
                description: this.state.description,
                userId: this.state.userId
                // userId: this.props.users.find(p => p.title === this.state.user).id
            }

            // Create the project and redirect user to project list
            this.props.editProject(project).then(() => this.props.history.push("/projects"))
        }

    render() {
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
                    <button type="submit" onClick={this.constructProjectToEdit} className="btn btn-primary">Update</button>
                </form>
            </React.Fragment>
        )
    }
}