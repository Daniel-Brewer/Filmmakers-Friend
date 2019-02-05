import React, { Component } from "react"
import "./CrewMember.css"
import CrewMemberCard from "./CrewMemberCard"

export default class CrewMemberList extends Component {
    render () {
        return (
            <React.Fragment>
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