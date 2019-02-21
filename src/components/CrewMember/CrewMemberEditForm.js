// When edit CrewMember is clicked this component will be rendered to the user for input
import React, { Component } from "react"
import "./CrewMember.css"
import CrewMemberManager from "../../modules/CrewMemberManager";

export default class CrewMemberEditForm extends Component {
    // Set initial state
    state = {
        name: "",
        job: "",
        phone: "",
        email: "",
        projectId: 0
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount(){
        CrewMemberManager.get(this.props.match.params.crewMemberId)
        .then(crewMembers => {
          this.setState({
            name:crewMembers.name,
            job: crewMembers.job,
            phone: crewMembers.phone,
            email: crewMembers.email,
            projectId: crewMembers.projectId
          })
        })
      }
      updateExistingCrewMember = evt => {
          evt.preventDefault()
          const existingCrewMember = {
              name:this.state.name,
              job: this.state.job,
              phone: this.state.phone,
              email: this.state.email,
              projectId: Number(this.state.projectId)
            }
            this.props.editCrewMember(this.props.match.params.crewMemberId, existingCrewMember)
          .then(() => this.props.history.push(`/crewMembers/${this.state.projectId}`))
        }

    render() {
        return (
            <React.Fragment>
                 <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                <button type="button"
                            onClick={()=> this.props.history.push(`/crewMembers/${this.state.projectId}`)}
                            className="btn btn-success">
                        Back to Crew
                    </button>
                </div>
            </nav>
                <div className="forms">
                <form className="crewMemberForm">
                    <div className="form-group">
                        <label htmlFor="name">CrewMember Name</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="job">Job</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="job" value={this.state.job} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone" value={this.state.phone} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="email" value={this.state.email} />
                    </div>
                    <button type="submit" onClick={this.updateExistingCrewMember} className="btn btn-primary">Update</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}