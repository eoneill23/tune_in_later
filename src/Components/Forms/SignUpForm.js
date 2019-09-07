import React, { Component } from 'react';
import { addUser } from '../../util/apiCalls';
import { validUser } from '../../actions/index';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom'


class SignUpForm extends Component {
	constructor() {
		super();
		this.state = {
      name: "",
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
        id: Date.now(),
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
		}
		this.userLogin(user);
		this.clearInputs();

	}

	userLogin = (user) => {
		addUser(user)
		.then(user => this.props.validUser(user))
    .catch(error => this.setState({error}))
	}

	clearInputs = () => {
		this.setState({id: '', name: '', email: '', password: ''});
	}

	render() {
		if (this.props.user) {
			return <Redirect to="/" />
		}
		
		return (
			<article className="SignUpFormContainer">
				<form className="SignUpForm">
                    <input
					type="text"
					placeholder="Name: "
					name="name"
					value={this.state.name}
					onChange={this.handleChange}
					required/>
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
				{this.state.error && <p>This user already exists.</p>}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);


