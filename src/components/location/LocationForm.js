// This component has the form that will be displayed to the user for input

import React, { Component } from "react"
import "./Location.css"

export default class LocationForm extends Component {
    // Set initial state
    state = {
        name: "",
        address: "",
        projectId: 0
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewLocation = evt => {
        evt.preventDefault()
            const location = {
                name: this.state.name,
                address: this.state.address,
                projectId: Number(this.props.match.params.projectId)
            }

            // Create the location and redirect user to location list
            this.props.addLocation(location).then(() => this.props.history.push(`/locations/${this.props.match.params.projectId}`))
        }

    render() {
        return (
            <React.Fragment>
                <div className="forms">
                <form className="locationForm">
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
                    <button type="submit" onClick={this.constructNewLocation} className="btn btn-primary">Submit</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}