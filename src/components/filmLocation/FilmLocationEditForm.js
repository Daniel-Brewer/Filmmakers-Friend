// When edit Location is clicked this component will be rendered to the user for input
import React, { Component } from "react"
import "./FilmLocation.css"
import FilmLocationManager from "../../modules/FilmLocationManager";

export default class FilmLocationEditForm extends Component {
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
        FilmLocationManager.get(this.props.match.params.filmLocationId)
        .then(filmLocations => {
          this.setState({
            name:filmLocations.name,
            address: filmLocations.address,
            projectId: filmLocations.projectId
          })
        })
      }
      updateExistingFilmLocation = evt => {
          evt.preventDefault()
          const existingFilmLocation = {
              name:this.state.name,
              address: this.state.address,
              projectId: Number(this.state.projectId)
            }
            this.props.editFilmLocation(this.props.match.params.filmLocationId, existingFilmLocation)
          .then(() => this.props.history.push(`/filmLocations/${this.state.projectId}`))
        }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                <button type="button"
                            onClick={()=> this.props.history.push(`/filmLocations/${this.state.projectId}`)}
                            className="btn btn-success">
                        Back to Cast
                    </button>
                </div>
            </nav>
                <div className="forms">
                <form className="filmLocationForm">
                    <div className="form-group">
                        <label htmlFor="name">Location Name</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="address" value={this.state.address} />
                    </div>
                    <button type="submit" onClick={this.updateExistingFilmLocation} className="btn btn-primary">Update</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}