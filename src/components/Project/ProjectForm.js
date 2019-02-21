// This component has the form that will be displayed to the user for input

import React, { Component } from "react"
import "./Project.css"

export default class ProjectForm extends Component {
    // Set initial state
    state = {
        title: "",
        genre: "",
        notes: "",
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
                genre: this.state.genre,
                notes: this.state.notes,
                userId: currentUserId
            }

            // Add project to db and Redirect user to project list
            this.props.addProject(project).then(() => this.props.history.push("/projects"))
        }

    render() {

        return (
            <React.Fragment>
                            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                <button type="button"
                            onClick={()=> this.props.history.push(`/projects`)}
                            className="btn btn-success">
                        Back to Project List
                    </button>
                </div>
            </nav>
                <div className="forms">
                <form className="projectForm">
                    <div className="form-group">
                        <label htmlFor="title">Project Title</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               placeholder="Project Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="genre" placeholder="Genre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="notes" placeholder="Notes" />
                    </div>
                    <button type="submit" onClick={this.constructNewProject} className="btn btn-primary">Submit</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}