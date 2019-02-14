import React, { Component } from "react"
import "./CrewMember.css"
import CrewMemberCard from "./CrewMemberCard"



export default class CrewMemberList extends Component {

      componentDidMount = () => {
      this.props.updateCrewComponent(this.props.match.params.projectId)
      }
      render() {
console.log("this.props.match.params.projectId", this.props.match.params.projectId)

        return (
            <React.Fragment>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                <button type="button"
                            onClick={()=> this.props.history.push(`/projects/${this.props.match.params.projectId}`)}
                            className="btn btn-success">
                        Back to Project
                    </button>
                </div>
            </nav>
            <h2>Crew</h2>
                <div className="crewMemberButton">
                    <button type="button"
                            onClick={()=> this.props.history.push(`/crewMembers/new/${this.props.match.params.projectId}`)}
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