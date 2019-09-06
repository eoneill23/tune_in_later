import React, { Component } from 'react';
import { fetchUser } from '../../util/apiCalls';


class LogInForm extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.userLogin(user);
        this.clearInputs();
    }

    userLogin = (user) => {
      fetchUser(user)
      .then(data => console.log('data', data))
    }

    clearInputs = () => {
      this.setState({email: '', password: ''});
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
                <button onClick={event => this.handleSubmit(event)}>Submit</button>
            </form>
        )
    }
}

export default LogInForm;


