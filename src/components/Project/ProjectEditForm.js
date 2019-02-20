import React, { Component } from "react"
import "./Project.css"
import ProjectManager from "../../modules/ProjectManager";

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

    componentDidMount(){
        ProjectManager.get(this.props.match.params.projectId).then(project => {
          this.setState({
            title: project.title,
            description: project.description,
            userId: project.userId
          })
        })
      }
      updateExistingProject = evt => {
          evt.preventDefault()
          let currentUser = sessionStorage.getItem("credentials")
          let currentUserId = Number(currentUser)
              const existingProject = {
                  title: this.state.title,
                  description: this.state.description,
                  userId: currentUserId
              }
            this.props.editProject(this.props.match.params.projectId, existingProject)
          .then(() => this.props.history.push("/projects"))
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
                <form className="forms">
                    <div className="form-group">
                    <label htmlFor="Title"></label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               value={this.state.title}
                                />
                    </div>
                    <div className="form-group">
                    <label htmlFor="Description"></label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="description" value={this.state.description} />
                    </div>
                    <button type="submit" onClick={this.updateExistingProject} className="btn btn-primary">Update</button>
                </form>
            </React.Fragment>
        )
    }
}