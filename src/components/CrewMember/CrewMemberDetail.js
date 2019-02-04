import React, { Component } from "react"
import "./CrewMember.css"



export default class CrewMemberDetail extends Component {
    render() {
        /*
            Using the route parameter, find the crewMember that the
            user clicked on by looking at the `this.props.crewMembers`
            collection that was passed down from ApplicationViews
        */
        const crewMember = this.props.crewMembers.find(a => a.id === parseInt(this.props.match.params.crewMemberId)) || {}

        return (
            <section className="crewMember">
                <div key={crewMember.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {crewMember.name}
                        </h4>
                        <h6 className="card-title">{crewMember.job}</h6>
                        <h6 className="card-title">{crewMember.phone}</h6>
                        <h6 className="card-title">{crewMember.email}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteCrewMember(crewMember.id)
                                            .then(() => this.props.history.push("/crewMembers"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}