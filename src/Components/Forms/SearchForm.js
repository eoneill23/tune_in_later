import React, { Component } from 'react';
import { fetchAlbums } from '../../util/apiCalls';
import { addAlbums } from '../../actions/index';
import { connect } from 'react-redux';

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
				artist: ""
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const queryArtist = {
				name: this.state.artist
		}
		this.searchArtist(queryArtist)
		this.clearInputs()
	}

	clearInputs = () => {
		this.setState({artist: ""})
	}

	searchArtist = (queryArtist) => {
		fetchAlbums(queryArtist)
		.then(albums => this.props.addAlbums(albums.results))
		.catch(error => console.log(error))
	}

	render() {
	console.log(this.props.addAlbums)
		return (
			<form className="SearchForm">
					<input
					type = "text"
					placeholder = "Artist:"
					name = "artist"
					value = {this.state.artist}
					onChange = {this.handleChange}
					/>
					<button onClick={event => this.handleSubmit(event)}>Search</button>
				<button>Logout</button>
			</form>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
  addAlbums: (albums) => dispatch(addAlbums(albums))
});

export default connect(null, mapDispatchToProps)(SearchForm);
