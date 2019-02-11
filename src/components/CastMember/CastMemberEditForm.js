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
        projectId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating castMember object, and
        invoking the function reference passed from parent component
     */
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
              projectId: this.state.projectId
            }
            this.props.editCastMember(this.props.match.params.castMemberId, existingCastMember)
          .then(() => this.props.history.push(`/castMembers/${this.state.projectId}`))
        }

    render() {
        return (
            <React.Fragment>
                <form className="castMemberForm">
                    <div className="form-group">
                        {/* <label htmlFor="name">CastMember Name</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="CastMember Name" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="character">Character</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="character" placeholder="Character" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="phone">Phone</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="email" placeholder="Email" />
                    </div>
                    <button type="submit" onClick={this.updateExistingCastMember} className="btn btn-primary">Update</button>
                </form>
            </React.Fragment>
        )
    }
}