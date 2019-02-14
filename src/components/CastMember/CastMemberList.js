
import React, { Component } from "react"
import "./CastMember.css"
import CastMemberCard from "./CastMemberCard"



export default class CastMemberList extends Component {

      componentDidMount = () => {
        //   pass projectId to updateCastComponent for page refreshment
      this.props.updateCastComponent(this.props.match.params.projectId)
      }
      render() {

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