import React, { Component } from "react";
import { fetchAlbums } from "../../../util/apiCalls";
import { addAlbums } from "../../../actions/index";
import { connect } from "react-redux";
import "./SearchForm.css";
import PropTypes from 'prop-types';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      artist: "",
      error: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const queryArtist = {
      name: this.state.artist
    };
    this.searchArtist(queryArtist);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ artist: "", error: "" });
  };

  searchArtist = queryArtist => {
    fetchAlbums(queryArtist)
      .then(albums => this.props.addAlbums(albums.results))
      .catch(error => this.setState({ error: error }));
  };

  render() {
    return (
      <section className="SearchFormContainer">
        {this.state.error && (
          <p id="error">
            There was an issue retrieving your artist's albums. Please try
            again.
          </p>
        )}
        <form id="SearchForm">
          <input
            type="text"
            placeholder="Artist:"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <button
            id="search-button"
            onClick={event => this.handleSubmit(event)}
          >
            Search
          </button>
        </form>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addAlbums: albums => dispatch(addAlbums(albums))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

SearchForm.propTypes = {
  user: PropTypes.object,
  mapDispatchToProps: PropTypes.func,
  mapStateToProps: PropTypes.func,
}