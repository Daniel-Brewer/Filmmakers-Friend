import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./CrewMember.css"

export default class CrewMemberCard extends Component {
    render() {
        return (
            <div key={this.props.crewMember.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.crewMember.name}
                        <Link className="nav-link" to={`/crewMembers/${this.props.crewMember.id}`}>Details</Link>
                        <button
                            onClick={() => this.props.editCrewMember(this.props.crewMember.id)}
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