// This component is has the CastMember card that is displayed
import React, { Component } from "react"
import "./CastMember.css"


export default class CastMemberCard extends Component {
    state = {
        name: "",
        character: "",
        phone: "",
        email: "",
        projectId: ""
    }
    render() {
        return (
            <div key={this.props.castMember.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.castMember.name}
                        <p>Character: {this.props.castMember.character}</p>
                        <p>Phone: {this.props.castMember.phone}</p>
                        <p>Email: {this.props.castMember.email}</p>
                        <button
                            onClick={() => this.props.history.push(`/castMembers/edit/${this.props.castMember.id}`)}
                            className="card-link">Edit</button>
                        <button
                            onClick={() => this.props.deleteCastMember(this.props.castMember.id,this.props.castMember.projectId)}
                            className="card-link">Delete</button>
                    </h5>
                </div>
            </div>
        )
    }
}