
import React, { Component } from "react"
import "./CastMember.css"
import CastMemberCard from "./CastMemberCard"
import CastMemberManager from "../../modules/CastMemberManager";

export default class CastMemberList extends Component {
    state = {
        castMembers: [],
      };
      componentDidMount = () => {
          let userProjects = this.props.projects
          console.log("userProjects",userProjects, "Props!", this.props.projects)
        const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}
        CastMemberManager.getCastMembersInProject(project.id).then(allCastMembersInProject => {
            this.setState({
                castMembers: allCastMembersInProject
              });
          });
      }
    render () {
        console.log("this.state in CastMemberList", this.state, "props?", this.props)
        const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}
        console.log("project", project)
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
                    this.props.castMembers.map(castMember =>
                        <CastMemberCard key={castMember.id} castMember={castMember} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}