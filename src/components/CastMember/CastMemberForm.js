// This component has the form that will be displayed to the user for input

import React, { Component } from "react"
import "./CastMember.css"
// import CastMemberManager from "../../modules/CastMemberManager"

export default class CastMemberForm extends Component {
    // Set initial state
    state = {
        name: "",
        character: "",
        phone: "",
        email: "",
        projectId: Number
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    constructNewCastMember = evt => {
        evt.preventDefault()
            const castMember = {
                name: this.state.name,
                character: this.state.character,
                phone: this.state.phone,
                email: this.state.email,
                projectId: Number(this.props.match.params.projectId)
            }

            // Create the castMember and redirect user to castMember list
            
            this.props.addCastMember(castMember).then(() => this.props.history.push(`/castMembers/${this.props.match.params.projectId}`))
            
        }

    render() {
        return (
            <React.Fragment>
                <form className="castMemberForm">
                    <div className="form-group">
                        <label htmlFor="name">CastMember Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="CastMember name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="character">Character</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="character" placeholder="Character" />
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
                    <button type="submit" onClick={this.constructNewCastMember} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}