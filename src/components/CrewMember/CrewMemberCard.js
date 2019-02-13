import React, { Component } from "react"
import "./CrewMember.css"

export default class CrewMemberCard extends Component {
    state = {
        name: "",
        character: "",
        phone: "",
        email: "",
        projectId: ""
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
                        <button
                            onClick={() => this.props.history.push(`/crewMembers/edit/${this.props.crewMember.id}`)}
                            className="card-link">Edit</button>
                        <button
                            onClick={() => this.props.deleteCrewMember(this.props.crewMember.id,this.props.crewMember.projectId)}
                            className="card-link">Delete</button>
                    </h5>
                </div>
            </div>
        )
    }
}