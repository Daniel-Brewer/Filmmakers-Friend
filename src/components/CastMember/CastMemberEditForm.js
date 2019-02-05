// When edit CastMember is clicked this component will be rendered to the user for input
import React, { Component } from "react"
import "./CastMember.css"

export default class CastMemberEditForm extends Component {
    // Set initial state
    state = {
        name: "",
        character: "",
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
        Local method for validation, creating castMember object, and
        invoking the function reference passed from parent component
     */
    constructCastMemberToEdit = evt => {
        evt.preventDefault()
            const castMember = {
                name: this.state.name,
                character: this.state.character,
                phone: this.state.phone,
                email: this.state.email,
                projectId: this.props.projects.find(e => e.name === this.state.project).id
            }

            // Create the castMember and redirect user to castMember list
            this.props.editCastMember(castMember).then(() => this.props.history.push("/castMembers"))
        }

    render() {
        return (
            <React.Fragment>
                <form className="castMemberForm">
                    <div className="form-group">
                        {/* <label htmlFor="name">CastMember Name</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="CastMember name" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="character">Character</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="character" placeholder="Character" />
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
                    <button type="submit" onClick={this.constructCastMemberToEdit} className="btn btn-primary">Update</button>
                </form>
            </React.Fragment>
        )
    }
}