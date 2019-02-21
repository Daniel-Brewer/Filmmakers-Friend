import React, { Component } from "react"
import "./Project.css"
import ProjectManager from "../../modules/ProjectManager";

export default class ProjectEditForm extends Component {
    // Set initial state
    state = {
        title: "",
        genre: "",
        notes: "",
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
            genre: project.genre,
            notes: project.notes,
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
                  genre: this.state.genre,
                  notes: this.state.notes,
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
                            onClick={()=> this.props.history.push(`/projects`)}
                            className="btn btn-success">
                        Back to Project List
                    </button>
                </div>
            </nav>
                <form className="forms">
                    <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               value={this.state.title}
                                />
                    </div>
                    <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="genre" value={this.state.genre} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="notes" value={this.state.notes} />
                    </div>
                    <button type="submit" onClick={this.updateExistingProject} className="btn btn-primary">Update</button>
                </form>
            </React.Fragment>
        )
    }
}