
import React, { Component } from "react"
import "./CastMember.css"
import CastMemberCard from "./CastMemberCard"



export default class CastMemberList extends Component {
    // state = {
    //     castMembers: [],
    //   };
      componentDidMount = () => {
      this.props.updateCastComponent(this.props.match.params.projectId)
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
            <h2>Cast</h2>
                <div className="castMemberButton">
                    <button type="button"
                            onClick={()=> this.props.history.push(`/castMembers/new/${this.props.match.params.projectId}`)}
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