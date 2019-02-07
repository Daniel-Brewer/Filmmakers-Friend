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
            For now, just store the username and password that
            the customer enters into local storage.
        */

        UserManager.getAll("users").then((user) => {
            console.log(user)
            const users = user.find(user => {
                console.log(user.id)
                return user.username === this.state.username && user.password === this.state.password //verifies account is in DB
            })
// if user is in database go to project list page
            if (users) {
                sessionStorage.setItem("credentials", JSON.stringify(users.id))
                document.location.href = 'http://localhost:3000/projects?_expand=user&userId=userId'
                // if not register
            } else {
                alert("You need to register")
                document.location.href = 'http://localhost:3000/register'
            }
        })

    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                 <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                 <input onChange={this.handleFieldChange} type="username"
                       id="username"
                       placeholder="Username"
                       required="" autoFocus="" />
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
        )
    }
}