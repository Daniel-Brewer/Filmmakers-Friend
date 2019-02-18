import React, { Component } from "react"
import "./Location.css"
import LocationCard from "./LocationCard"



export default class LocationList extends Component {

      componentDidMount = () => {
          //   pass projectId to updateLocationComponent for page refreshment
      this.props.updateLocationComponent(this.props.match.params.projectId)
      }
      render() {


        return (
            <React.Fragment>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                <button type="button"
                            onClick={()=> this.props.history.push(`/projects/${this.props.match.params.projectId}`)}
                            className="btn btn-success">
                        Back to Project
                    </button>
                </div>
            </nav>
            <h2>Location</h2>
                <div className="locationButton">
                    <button type="button"
                            onClick={()=> this.props.history.push(`/locations/new/${this.props.match.params.projectId}`)}
                            className="btn btn-success">
                        Add Location
                    </button>
                </div>
                <section className="locations">               
                {
                    this.props.locations.map(location =>
                        <LocationCard key={location.id} location={location} {...this.props} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}