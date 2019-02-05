// This component renders the specific details of each CastMember
import React, { Component } from "react"
import "./CastMember.css"



export default class CastMemberDetail extends Component {
    render() {
        /*
            Using the route parameter, find the castMember that the
            user clicked on by looking at the `this.props.castMembers`
            collection that was passed down from ApplicationViews
        */
        const castMember = this.props.castMembers.find(a => a.id === parseInt(this.props.match.params.castMemberId)) || {}

        return (
            <section className="castMember">
                <div key={castMember.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {castMember.name}
                        </h4>
                        <h6 className="card-title">{castMember.character}</h6>
                        <h6 className="card-title">{castMember.phone}</h6>
                        <h6 className="card-title">{castMember.email}</h6>
                        <button
                            onClick={() => this.props.deleteCastMember(castMember.id)
                                            .then(() => this.props.history.push("/castMembers"))}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}