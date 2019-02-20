import React, { Component } from "react"
import "./SceneProp.css"
import Suitcase from "./Suitcase.jpg"

export default class ScenePropCard extends Component {

    render() {
        return (
            <div key={this.props.sceneProp.id} className="card">
            <img src={Suitcase} className="card-img-top" alt="Suitcase" ></img>
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.sceneProp.name}
                        </h4>
                        <h6>Description:</h6>
                        <p>{this.props.sceneProp.description}</p>
                       <div className="divbutton">
                        <button
                            onClick={() => this.props.history.push(`/sceneProps/edit/${this.props.sceneProp.id}`)}
                            className="card-link">Edit</button>
                            </div>
                            <div className="divbutton">
                        <button
                            onClick={() => this.props.deleteSceneProp(this.props.sceneProp.id,this.props.sceneProp.projectId)}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}