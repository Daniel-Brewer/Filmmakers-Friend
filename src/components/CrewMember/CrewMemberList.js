import React, { Component } from "react"
import "./CrewMember.css"
import CrewMemberCard from "./CrewMemberCard"
import CrewMemberManager from "../../modules/CrewMemberManager";


export default class CrewMemberList extends Component {
    state = {
        crewMembers: [],
        projects: [],
      };
      
      componentDidMount = () => {
          const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}
          console.log("project.id",project.id)
          CrewMemberManager.getCrewMembersInProject(project.id).then(allCrewMembersInProject => {
              this.setState({
                  crewMembers: allCrewMembersInProject,
                  projects: project
                });
            });
        }
    render () {
        console.log("this.props in CrewMemberList", this.props)
        /*
        Using the route parameter, find the project that the
        user clicked on by looking at the `this.props.projects`
        collection that was passed down from ApplicationViews
        */
       
    //    const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}
    //    CrewMemberManager.getCrewMembersInProject()
    //                                         .then(() => this.props.history.push("/crewMembers"))

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