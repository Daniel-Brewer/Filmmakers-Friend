// This component has the form that will be displayed to the user for input

import React, { Component } from "react"
import "./CrewMember.css"

export default class CrewMemberForm extends Component {
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

    constructNewCrewMember = evt => {
        evt.preventDefault()
            const crewMember = {
                name: this.state.name,
                job: this.state.job,
                phone: this.state.phone,
                email: this.state.email,
                projectId: Number(this.props.match.params.projectId)
            }

            // Create the crewMember and redirect user to crewMember list
            this.props.addCrewMember(crewMember).then(() => this.props.history.push(`/crewMembers/${this.props.match.params.projectId}`))
        }

    render() {
        return (
            <React.Fragment>
                <form className="crewMemberForm">
                    <div className="form-group">
                        <label htmlFor="name">CrewMember Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="CrewMember Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="job">job</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="job" placeholder="Job" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="email" placeholder="Email" />
                    </div>
                    <button type="submit" onClick={this.constructNewCrewMember} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}