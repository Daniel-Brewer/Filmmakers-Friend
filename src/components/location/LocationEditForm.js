// When edit Location is clicked this component will be rendered to the user for input
import React, { Component } from "react"
import "./Location.css"
import LocationManager from "../../modules/LocationManager";

export default class LocationEditForm extends Component {
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

    componentDidMount(){
        LocationManager.get(this.props.match.params.locationId)
        .then(locations => {
          this.setState({
            name:locations.name,
            email: locations.email,
            projectId: locations.projectId
          })
        })
      }
      updateExistingLocation = evt => {
          evt.preventDefault()
          const existingLocation = {
              name:this.state.name,
              job: this.state.job,
              phone: this.state.phone,
              email: this.state.email,
              projectId: Number(this.state.projectId)
            }
            this.props.editLocation(this.props.match.params.locationId, existingLocation)
          .then(() => this.props.history.push(`/locations/${this.state.projectId}`))
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
                               value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="address" value={this.state.address} />
                    </div>
                    <button type="submit" onClick={this.updateExistingLocation} className="btn btn-primary">Update</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}