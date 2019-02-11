import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Project.css"

export default class ProjectCard extends Component {

    state = {
        title: "",
        description: "",
        userId: this.props.activeUser.id
    }
    render() {
        return (
            <div key={this.props.project.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                    
                        {this.props.project.title}

                        <p>{this.props.project.description}</p>

                        <Link className="nav-link" to={`/projects/${this.props.project.id}`}>Enter Project</Link>

                        <button
                            onClick={() => this.props.history.push(`/projects/edit/${this.props.project.id}`)}
                            className="card-link">Edit</button>

                        <button
                            onClick={() => this.props.deleteProject(this.props.project.id)}
                            className="card-link">Delete</button>
                    </h5>
                </div>
            </div>
        )
    }
}