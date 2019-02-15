import React, { Component } from "react"
import './Register.css'


export default class RegistrationForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = (e) => {
        e.preventDefault()
    }

    handleButtonClick = () => {
        
        const user = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log("user", user)
        this.props.addUser(user)
        .then(() => this.props.history.push("/"))

        
        
        // document.location.href = 'http://localhost:3000/'
    }

    render() {


        return (
            <React.Fragment>
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
            <div className="logoutButton">
                <button onClick={() => {
                    this.props.history.push(`/`)
                }}
                    className="logoutButton">Back to Login</button>
            </div>
        </nav>
            <div className="forms">
                <div className="registerForm">
                    <form onSubmit={this.handleRegister}>
                        <h1 className="h3 mb-3 font-weight-normal">Please Create Account</h1>
                        <input onChange={this.handleFieldChange} type="username"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus="" />
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <button type="submit" onClick={this.handleButtonClick} className="btn btn-primary">
                            Register
                        </button>
                    </form>
                </div>
            </div>
            </React.Fragment>
        )
    }
}