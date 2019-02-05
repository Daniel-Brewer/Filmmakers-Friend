// This component renders the specific details of each Project
import React, { Component } from "react"
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
            <section className="project">
                <div key={project.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {project.title}
                        </h4>
                        <p className="card-title">{project.description}</p>
                        <button
                            onClick={() => this.props.deleteProject(project.id)
                                            .then(() => this.props.history.push("/projects"))}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}