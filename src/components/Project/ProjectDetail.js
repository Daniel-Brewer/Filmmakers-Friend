// This component renders the specific details of each Project
import React, { Component } from "react"
import "./Project.css"
import CastMemberManager from "../../modules/CastMemberManager";
import CrewMemberManager from "../../modules/CrewMemberManager";



export default class ProjectDetail extends Component {
    state = {
        castMembers: [],
        projects: [],
      };
      
      componentDidMount = () => {
          const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}
          console.log("project.id", project.id)
          CastMemberManager.getCastMembersInProject(project.id).then(allCastMembersInProject => {
              console.log("allCastMembersInProject", allCastMembersInProject)
              this.setState({
                  castMembers: allCastMembersInProject,
                  projects: project
                });
            });
        }
        render() {
            console.log("this.state in ProjectDetail", this.state)
        /*
        Using the route parameter, find the project that the
        user clicked on by looking at the `this.props.projects`
        collection that was passed down from ApplicationViews
        */
       
       const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}


        return (
            <React.Fragment>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                    <button onClick={() => {
                        document.location.href = 'http://localhost:3000/projects'
                    }}
                        className="logoutButton">Back to Project List</button>
                </div>
            </nav>
            <section className="project">
                <div key={project.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {project.title}
                        </h4>

                        <button
                            onClick={() => CastMemberManager.getCastMembersInProject(project.id)
                                            .then(() => this.props.history.push(`/castMembers/${project.id}`))}
                            className="card-link">CastMembers</button>

                        <br></br>

                        <button
                            onClick={() => CrewMemberManager.getCrewMembersInProject(project.id)
                                            .then(() => this.props.history.push(`/crewMembers/${project.id}`))}
                            className="card-link">CrewMembers</button>
                        <br></br>
                        <button
                            onClick={() => this.props.deleteProject(project.id)
                                            .then(() => this.props.history.push("/projects"))}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}