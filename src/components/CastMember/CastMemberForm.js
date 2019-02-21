// This component has the form that will be displayed to the user for input

import React, { Component } from "react"
import "./CastMember.css"

export default class CastMemberForm extends Component {
    // Set initial state
    state = {
        name: "",
        character: "",
        phone: "",
        email: "",
        projectId: 0
    }

    // Update state whenever an input field is entered
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

            // Add the castMember to db and redirect user to castMember list
            
            this.props.addCastMember(castMember).then(() => this.props.history.push(`/castMembers/${this.props.match.params.projectId}`))
            
        }

    render() {
        return (
            <React.Fragment>
                    <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <div className="logoutButton">
                        <button type="button"
                            onClick={() => this.props.history.push(`/castMembers/${this.props.match.params.projectId}`)}
                            className="btn btn-success">
                            Back to Cast
                    </button>
                    </div>
                </nav>
                <div className="forms">
                <form className="castMemberForm">
                    <div className="form-group">
                        <label htmlFor="name">CastMember Name</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="CastMember Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="character">Character</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="character" placeholder="Character" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="email" placeholder="Email" />
                    </div>
                    <button type="submit" onClick={this.constructNewCastMember} className="btn btn-primary">Submit</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}