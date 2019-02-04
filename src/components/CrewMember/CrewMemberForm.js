// This component has the form that will be displayed to the user for input

import React, { Component } from "react"
import "./CrewMember.css"

export default class crewMemberForm extends Component {
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
    constructNewCrewMember = evt => {
        evt.preventDefault()
            const crewMember = {
                name: this.state.name,
                job: this.state.job,
                phone: this.state.phone,
                email: this.state.email,
                projectId: this.props.projects.find(e => e.name === this.state.project).id
            }

            // Create the crewMember and redirect user to crewMember list
            this.props.addCrewMember(crewMember).then(() => this.props.history.push("/crewMembers"))
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
                               placeholder="crewMember name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="job">Job</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="job" placeholder="job" />
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
                               id="email" placeholder="email" />
                    </div>
                    <button type="submit" onClick={this.constructNewCrewMember} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}