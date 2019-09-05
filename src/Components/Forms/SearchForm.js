import React, { Component } from 'react';
import fetchAlbums from '../../util/apiCalls'

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
        this.props.searchArtist(queryArtist)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({artist: ""})
    }

    render() {
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
            </form>
        )
    }
}

export default SearchForm;
