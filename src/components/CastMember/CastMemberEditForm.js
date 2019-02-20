// When edit CastMember is clicked this component will be rendered to the user for input
import React, { Component } from "react"
import "./CastMember.css"
import CastMemberManager from "../../modules/CastMemberManager";

export default class CastMemberEditForm extends Component {
    // Set initial state
    state = {
        name: "",
        character: "",
        phone: "",
        email: "",
        projectId: 0
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    componentDidMount(){
        CastMemberManager.get(this.props.match.params.castMemberId)
        .then(castMembers => {
          this.setState({
            name:castMembers.name,
            character: castMembers.character,
            phone: castMembers.phone,
            email: castMembers.email,
            projectId: castMembers.projectId
          })
        })
      }
      updateExistingCastMember = evt => {
          evt.preventDefault()
          const existingCastMember = {
              name:this.state.name,
              character: this.state.character,
              phone: this.state.phone,
              email: this.state.email,
              projectId: Number(this.state.projectId)
            }
            this.props.editCastMember(this.props.match.params.castMemberId, existingCastMember)
          .then(() => this.props.history.push(`/castMembers/${this.state.projectId}`))
        }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <div className="logoutButton">
                <button type="button"
                            onClick={()=> this.props.history.push(`/castMembers/${this.state.projectId}`)}
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
                               value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="character">Character</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="character" value={this.state.character} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone" value={this.state.phone} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="email" value={this.state.email} />
                    </div>
                    <button type="submit" onClick={this.updateExistingCastMember} className="btn btn-primary">Update</button>
                </form>
                </div>
            </React.Fragment>
        )
    }
}