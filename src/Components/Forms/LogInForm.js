import React, { Component } from 'react'

class LogInForm extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = () => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        e.preventDefault()
        let currentUser = {
            email: this.state.email,
            password: this.state.password
        }
    }


    clearInputs = () => {

    }

    render() {
        return (
            <form className="LogInForm">
                <input
                type="text"
                placeholder="Email: "
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required/>
                <input
                type="text"
                placeholder="Password: "
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required/>
                <button onClick={}>Submit</button>
            </form>
        )
    }
}

export default LogInForm;


