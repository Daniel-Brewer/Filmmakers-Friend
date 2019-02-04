// This component is has the CastMember card that is displayed
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./CastMember.css"

export default class CastMemberCard extends Component {
    render() {
        return (
            <div key={this.props.castMember.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.castMember.name}
                        <Link className="nav-link" to={`/castMembers/${this.props.castMember.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteCastMember(this.props.castMember.id)}
                            className="card-link">Discharge</a>
                    </h5>
                </div>
            </div>
        )
    }
}