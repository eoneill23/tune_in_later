import React, { Component } from 'react';
import { fetchUser } from '../../util/apiCalls';
import { validUser } from '../../actions/index';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom'


class LogInForm extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			error: ""
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
		.catch(error => this.setState({error}))
	}

	clearInputs = () => {
		this.setState({email: '', password: ''});
	}

	render() {
		if (this.props.user) {
			return <Redirect to="/" />
		}

		return (
			<article className="LoginInFormContainer">
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
				{this.state.error && <p>The email and/or password do not match an existing user.</p>}
			</article>
		)
	}
}

const mapStateToProps = ({user}) => ({
user
})

const mapDispatchToProps = (dispatch) => ({
	validUser: (user) => dispatch(validUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);


