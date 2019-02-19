import React, { Component } from "react"
import "./FilmLocation.css"
import FilmLocationCard from "./FilmLocationCard"



export default class FilmLocationList extends Component {

    componentDidMount = () => {
      //   pass projectId to updateFilmLocationComponent for page refreshment
    this.props.updateFilmLocationComponent(this.props.match.params.projectId)
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
          <h2>Locations</h2>
              <div className="filmLocationButton">
                  <button type="button"
                          onClick={()=> this.props.history.push(`/filmLocations/new/${this.props.match.params.projectId}`)}
                          className="btn btn-success">
                      Add Location
                  </button>
              </div>
              <section className="filmLocations">               
              {
                  this.props.filmLocations.map(filmLocation =>
                      <FilmLocationCard key={filmLocation.id} filmLocation={filmLocation} {...this.props} />
                      )
                  }
              </section>
          </React.Fragment>
      )
  }
}