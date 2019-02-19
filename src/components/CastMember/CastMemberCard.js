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
                    <h4 className="card-title">
                        {this.props.castMember.name}
                        </h4>
                        <h6>Character:</h6>
                        <h5>{this.props.castMember.character}</h5>
                        <h6>Phone:</h6>
                        <h5>{this.props.castMember.phone}</h5>
                        <h6>Email:</h6>
                        <h5>{this.props.castMember.email}</h5>
                       <div className="divbutton">
                        <button
                            onClick={() => this.props.history.push(`/castMembers/edit/${this.props.castMember.id}`)}
                            className="card-link">Edit</button>
                            </div>
                            <div className="divbutton">
                        <button
                            onClick={() => this.props.deleteCastMember(this.props.castMember.id,this.props.castMember.projectId)}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}