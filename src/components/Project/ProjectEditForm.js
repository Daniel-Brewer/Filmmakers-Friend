import React, { Component } from "react"
import "./Project.css"

export default class ProjectEditForm extends Component {
    // Set initial state
    state = {
        // title: this.props.location.title,
        // description: this.props.location.description,
        // userId: this.props.userId,
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
   updateExistingProject = evt => {
       evt.preventDefault()
       const projectId = this.props.location.id;
       const existingProject = {
           title: this.props.title,
           description: this.props.description,
           userId: this.props.userId,
        //    id: this.state.id
        //    userId: this.props.users.find(p => p.userId === this.state.user).id
        }
        console.log("this.state.userId", this.state.userId)

            // Create the project and redirect user to project list
            this.props.editProject(projectId, existingProject)
            // console.log("projectId", projectId, "existingProject", existingProject)
            .then(() => this.props.history.push("/projects"))
        }

    render() {
        return (
            <React.Fragment>
                <form className="projectForm">
                    <div className="form-group">
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               placeholder="Project title" />
                    </div>
                    <div className="form-group">
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="description" placeholder="Description" />
                    </div>
                    <button type="submit" onClick={this.updateExistingProject} className="btn btn-primary">Update</button>
                </form>
            </React.Fragment>
        )
    }
}