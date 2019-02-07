import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./CrewMember.css"

export default class CrewMemberCard extends Component {
    state = {
        name: "",
        job: "",
        phone: "",
        email: "",
        projectId: 1
    }
    render() {
        return (
            <div key={this.props.crewMember.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.crewMember.name}
                        <p>Job: {this.props.crewMember.job}</p>
                        <p>Phone: {this.props.crewMember.phone}</p>
                        <p>Email: {this.props.crewMember.email}</p>
                        <Link className="nav-link" to={`/crewMembers/${this.props.crewMember.id}`}>Details</Link>
                        <button
                            onClick={() => this.props.history.push(`/crewMembers/edit/${this.props.crewMember.id}`)}
                            className="card-link">Edit</button>
                        <button
                            onClick={() => this.props.deleteCrewMember(this.props.crewMember.id)}
                            className="card-link">Delete</button>
                    </h5>
                </div>
            </div>
        )
    }
}