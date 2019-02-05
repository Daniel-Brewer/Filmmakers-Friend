import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Project.css"

export default class ProjectCard extends Component {
    render() {
        return (
            <div key={this.props.project.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.project.name}
                        <Link className="nav-link" to={`/projects/${this.props.project.id}`}>Enter Project</Link>
                        <a href="#"
                            onClick={() => this.props.deleteProject(this.props.project.id)}
                            className="card-link">Delete</a>
                    </h5>
                </div>
            </div>
        )
    }
}