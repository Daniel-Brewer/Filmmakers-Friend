// This component is has the CastMember card that is displayed
import React, { Component } from "react"
import "./CastMember.css"
import Actors from "./Actors.png"


export default class CastMemberCard extends Component {

    render() {
        return (
            <div key={this.props.castMember.id} className="card">
                        <img src={Actors} className="card-img-top" alt="Actor Masks" ></img>
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