import React, { Component } from "react"
import "./Project.css"
import ProjectCard from "./ProjectCard"


export default class ProjectList extends Component {
    render() {
        
        return (
            <React.Fragment>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <div className="logoutButton">
                        <button onClick={() => {
                            this.props.history.push(`/`)
                        }}
                            className="logoutButton">Logout</button>
                    </div>

                    <div className=""><h2>Director's Dashboard</h2></div>
                </nav>

                <div className="projectButton">
                    <button type="button"
                        onClick={() => this.props.history.push("/projects/new")}
                        className="btn btn-success">
                        Add Project
                    </button>
                </div>
                
                <section className="projects">
                    {
                        this.props.projects.map(project =>
                            <ProjectCard key={project.id} project={project} deleteProject={this.props.deleteProject} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}