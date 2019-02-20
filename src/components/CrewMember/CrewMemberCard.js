import React, { Component } from "react"
import "./CrewMember.css"
import FilmCrew from "./FilmCrew.jpg"

export default class CrewMemberCard extends Component {

    render() {
        return (
            <div key={this.props.crewMember.id} className="card">
                                    <img src={FilmCrew} className="card-img-top" alt="Camera Operator" ></img>
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.crewMember.name}
                        </h4>
                        <h6>Job:</h6>
                        <h5>{this.props.crewMember.job}</h5>
                        <h6>Phone:</h6>
                        <h5>{this.props.crewMember.phone}</h5>
                        <h6>Email:</h6>
                        <h5>{this.props.crewMember.email}</h5>
                        <div className="divbutton">
                        <button
                            onClick={() => this.props.history.push(`/crewMembers/edit/${this.props.crewMember.id}`)}
                            className="card-link">Edit</button>
                        </div>
                        <div className="divbutton">
                        <button
                            onClick={() => this.props.deleteCrewMember(this.props.crewMember.id,this.props.crewMember.projectId)}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}