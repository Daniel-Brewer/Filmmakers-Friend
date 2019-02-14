// This component renders the specific details of each Project
import React, { Component } from "react"
import "./Project.css"
import CastMemberManager from "../../modules/CastMemberManager";
import CrewMemberManager from "../../modules/CrewMemberManager";



export default class ProjectDetail extends Component {
      
    render() {
       
       const project = this.props.projects.find(p => p.id === parseInt(this.props.match.params.projectId)) || {}

        return (
            <React.Fragment>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                    <button onClick={() => {
                        this.props.history.push(`/projects`)
                    }}
                        className="logoutButton">Back to Project List</button>
                </div>
            </nav>
            <h2>Project Page</h2>
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