import React, { Component } from "react"
import UserManager from '../../modules/UserManager'
import './Login.css'


export default class LoginForm extends Component {

    // Set initial state
    state = {
        username: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            Store the username and password that
            the user enters into session storage.
        */

        UserManager.getAll().then((user) => {
            const users = user.find(user => {
                return user.username === this.state.username && user.password === this.state.password //verifies account is in DB
            })
            // if user is in database go to project list page
            if (users) {
                sessionStorage.setItem("credentials", JSON.stringify(users.id))
                this.props.updateComponent()
                this.props.history.push('/projects')
                // if not register
            } else {
                alert("You need to register")
                this.props.history.push('/register')
            }
        })

    }

    render() {
        return (
            <div className="forms">
                <div className="loginForm">
                    <form onSubmit={this.handleLogin}>
                        <div><h1>Filmmaker's Friend</h1>
                        <h5>A Practical Application for the Creative Mind</h5></div>
                        <h5>Please Sign In</h5>
                        <label htmlFor="username">Username</label>
                        <br></br>
                        <input onChange={this.handleFieldChange} type="username"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus="" />
                         <label htmlFor="password">Password</label>
                         <br></br>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <br></br>
                        <button type="submit">
                            Submit
                </button>
                    </form>
                </div>
            </div>
        )
    }
}