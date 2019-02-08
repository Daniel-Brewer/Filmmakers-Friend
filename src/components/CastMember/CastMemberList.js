
import React, { Component } from "react"
import "./CastMember.css"
import CastMemberCard from "./CastMemberCard"


export default class CastMemberList extends Component {
    render () {
        return (
            <React.Fragment>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                    <button onClick={() => {
                        // change this to th eright route eventually
                        document.location.href = 'http://localhost:3000/projects'
                    }}
                        className="logoutButton">Project List</button>
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