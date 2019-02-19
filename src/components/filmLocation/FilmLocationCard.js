import React, { Component } from "react"
import "./FilmLocation.css"

export default class FilmLocationCard extends Component {

    render() {
        return (
            <div key={this.props.filmLocation.id} className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.filmLocation.name}
                        </h4>
                        <h6>Address:</h6>
                        <h5>{this.props.filmLocation.address}</h5>
                       <div className="divbutton">
                        <button
                            onClick={() => this.props.history.push(`/filmLocations/edit/${this.props.filmLocation.id}`)}
                            className="card-link">Edit</button>
                            </div>
                            <div className="divbutton">
                        <button
                            onClick={() => this.props.deleteFilmLocation(this.props.filmLocation.id,this.props.filmLocation.projectId)}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}