
import React, { Component } from "react"
import "./CastMember.css"
import CastMemberCard from "./CastMemberCard"
import CastMemberManager from "../../modules/CastMemberManager"


export default class CastMemberList extends Component {
    state = {
        castMembers: [],
        projects: [],
      };
      componentDidMount = () => {
        const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}
        CastMemberManager.getCastMembersInProject(this.props.match.params.projectId).then(allCastMembersInProject => {
            console.log("allCastMembersInProject", allCastMembersInProject)
            this.setState({
                castMembers: allCastMembersInProject,
                projects: project
              });
          });
      }
      render() {
console.log("this.props.match.params.projectId", this.props.match.params.projectId)

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
                <div className="castMemberButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/castMembers/new")}
                            className="btn btn-success">
                        Add CastMember
                    </button>
                </div>
                <section className="castMembers">               
                {
                    this.state.castMembers.map(castMember =>
                        <CastMemberCard key={castMember.id} castMember={castMember} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}