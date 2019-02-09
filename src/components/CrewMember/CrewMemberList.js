import React, { Component } from "react"
import "./CrewMember.css"
import CrewMemberCard from "./CrewMemberCard"


export default class CrewMemberList extends Component {
    render () {
        return (
            <React.Fragment>
                            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                    <button onClick={() => {
                        // change this to the right route eventually
                        document.location.href = 'http://localhost:3000/projects'
                    }}
                        className="logoutButton">Back to Project</button>
                </div>
            </nav>
                <div className="crewMemberButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/crewMembers/new")}
                            className="btn btn-success">
                        Add CrewMember
                    </button>
                </div>
                <section className="crewMembers">
                {
                    this.props.crewMembers.map(crewMember =>
                        <CrewMemberCard key={crewMember.id} crewMember={crewMember} {...this.props} />
                    )
                }
                </section>
            </React.Fragment>
        )
    }
}