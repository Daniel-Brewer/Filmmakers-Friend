// This component renders the specific details of each Project
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Project.css"



export default class ProjectDetail extends Component {
    render() {
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
                        className="logoutButton">Project List</button>
                </div>
            </nav>
            <section className="project">
                <div key={project.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {project.title}
                        </h4>
                        <Link className="nav-link" to={`/castMembers?_expand=project&projectId=${project.id}`}>CastMembers</Link>
                        <br></br>
                        <Link className="nav-link" to={`/crewMembers?_expand=project&projectId`}>CrewMembers</Link>
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