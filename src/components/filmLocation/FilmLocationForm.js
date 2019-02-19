// This component has the form that will be displayed to the user for input

import React, { Component } from "react"
import "./FilmLocation.css"

export default class FilmLocationForm extends Component {
    // Set initial state
    state = {
        name: "",
        address: "",
        projectId: 0
    }

    // Update state whenever an input field is entered
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    constructNewFilmLocation = evt => {
        evt.preventDefault()
            const filmLocation = {
                name: this.state.name,
                address: this.state.address,
                projectId: Number(this.props.match.params.projectId)
            }

            // Add the filmLocation to db and redirect user to filmLocation list
            
            this.props.addFilmLocation(filmLocation).then(() => this.props.history.push(`/filmLocations/${this.props.match.params.projectId}`))
            
        }

    render() {
        return (
            <React.Fragment>
                    <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <div className="logoutButton">
                        <button type="button"
                            onClick={() => this.props.history.push(`/filmLocations/${this.props.match.params.projectId}`)}
                            className="btn btn-success">
                            Back to Locations
                    </button>
                    </div>
                </nav>
                <div className="forms">
                <form className="filmLocationForm">
                    <div className="form-group">
                        <label htmlFor="name">Location Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Location Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="address" placeholder="Address" />
                    </div>
                    <button type="submit" onClick={this.constructNewFilmLocation} className="btn btn-primary">Submit</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}