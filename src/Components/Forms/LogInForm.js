import React, { Component } from 'react';
import { fetchUser } from '../../util/apiCalls';
import { validUser } from '../../actions/index';
import { connect } from 'react-redux';


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
		.then(user => this.props.validUser(user))
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
				<button 
					onClick={event => this.handleSubmit(event)}
				>
					Submit
				</button>
			</form>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	validUser: (user) => dispatch(validUser(user))
});

export default connect(null, mapDispatchToProps)(LogInForm);


