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
        ProjectManager.get(this.props.match.params.projectId).then(projects => {
          this.setState({
            title:projects.title,
            description: projects.description,
            userId: projects.userId
          })
        })
      }
      updateExistingProject = evt => {
          evt.preventDefault()
          let currentUser = sessionStorage.getItem("credentials")
          console.log("currentUser",currentUser)
          let currentUserId = Number(currentUser)
              const existingProject = {
                  title: this.state.title,
                  description: this.state.description,
                  userId: currentUserId,
              }
            this.props.editProject(this.props.match.params.projectId, existingProject)
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