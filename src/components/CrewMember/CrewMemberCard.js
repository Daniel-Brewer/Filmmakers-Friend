import React, { Component } from "react"
import "./CrewMember.css"
import CrewIcon from "./CrewIcon.png"

export default class CrewMemberCard extends Component {

    render() {
        return (
            <div key={this.props.crewMember.id} className="card">
                                    <img src={CrewIcon} className="card-img-top" alt="Camera Operator" ></img>
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.crewMember.name}
                        </h4>
                        <p>Job: {this.props.crewMember.job}</p>
                        <p>Phone: {this.props.crewMember.phone}</p>
                        <p>Email: {this.props.crewMember.email}</p>
                        <button
                            onClick={() => this.props.history.push(`/crewMembers/edit/${this.props.crewMember.id}`)}
                            className="card-link">Edit</button>
                        <button
                            onClick={() => this.props.deleteCrewMember(this.props.crewMember.id,this.props.crewMember.projectId)}
                            className="card-link">Delete</button>
                    {/* </h5> */}
                </div>
            </div>
        )
    }
}