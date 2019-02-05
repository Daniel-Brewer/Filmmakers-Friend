import React, { Component } from "react"
import "./CrewMember.css"

export default class CrewMemberEditForm extends Component {
    // Set initial state
    state = {
        name: "",
        job: "",
        phone: "",
        email: "",
        projectId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating crewMember object, and
        invoking the function reference passed from parent component
     */
    constructCrewMemberToEdit = evt => {
        evt.preventDefault()
            const crewMember = {
                name: this.state.name,
                job: this.state.job,
                phone: this.state.phone,
                email: this.state.email,
                projectId: this.props.projects.find(e => e.name === this.state.project).id
            }

            // Create the crewMember and redirect user to crewMember list
            this.props.editCrewMember(crewMember).then(() => this.props.history.push("/crewMembers"))
        }

    render() {
        return (
            <React.Fragment>
                <form className="crewMemberForm">
                    <div className="form-group">
                        {/* <label htmlFor="name">CrewMember Name</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="CrewMember name" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="job">Job</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="job" placeholder="Job" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="phone">Phone</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="email" placeholder="Email" />
                    </div>
                    <button type="submit" onClick={this.constructCrewMemberToEdit} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}