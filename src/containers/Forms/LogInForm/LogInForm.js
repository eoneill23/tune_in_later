import React, { Component } from "react";
import { fetchUser, fetchUserFavorites } from "../../../util/apiCalls";
import { validUser, getUserFavorites } from "../../../actions/index";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LogInForm.css";
import PropTypes from 'prop-types';

export class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.userLogin(user);
    this.clearInputs();
  };

  userLogin = user => {
    fetchUser(user)
      .then(user => this.props.validUser(user))
      .then(data => (data.user.id ? fetchUserFavorites(data.user.id) : null))
      .then(data => this.props.getUserFavorites(data.favorites))
      .catch(error => this.setState({ error }));
  };

  clearInputs = () => {
    this.setState({ email: "", password: "", error: "" });
  };

  render() {
    if (this.props.user) {
      return <Redirect to="/" />;
    }

    return (
      <article className="LogInFormContainer">
        <form className="LogInForm">
          <input
            type="text"
            placeholder="Email: "
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            placeholder="Password: "
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button
            className="loginUser"
            onClick={event => this.handleSubmit(event)}
          >
            Submit
          </button>
        </form>
        <p id="signup-link">
          Are you a new user? <Link to="/signup">Click here to sign up!</Link>
        </p>
        {this.state.error && (
          <p id="error">
            The email and/or password do not match an existing user.
          </p>
        )}
      </article>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  validUser: user => dispatch(validUser(user)),
  getUserFavorites: favorites => dispatch(getUserFavorites(favorites))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);

LogInForm.propTypes = {
  user: PropTypes.object,
  mapDispatchToProps: PropTypes.func,
  mapStateToProps: PropTypes.func,
}
