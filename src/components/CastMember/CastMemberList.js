
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
        console.log("project.id",project.id)
        CastMemberManager.getCastMembersInProject(project.id).then(allCastMembersInProject => {
            this.setState({
                castMembers: allCastMembersInProject,
                projects: project
              });
          });
      }
      render() {
          console.log("this.state in CastMemberList", this.state)
      /*
      Using the route parameter, find the project that the
      user clicked on by looking at the `this.props.projects`
      collection that was passed down from ApplicationViews
      */
     
     const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}
     // let getAllCastMembers=`/castMembers?_expand=project&projectId=2`
     // console.log(getAllCastMembers)
     console.log("project", project)
     console.log("this.state", this.state)
     console.log("castMembers", this.state.castMembers)

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