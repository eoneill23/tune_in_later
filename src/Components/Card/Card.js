import React from 'react'
import './Card.css'
import { addFavorite, invalidUser } from '../../actions/index'
import { connect } from 'react-redux';
import { postFavorite } from '../../util/apiCalls';

const Card = ({ album_id, artist_name, album_name, artwork_url, release_date, content_advisory_rating, primary_genre_name, user, addFavorite, invalidUser, isFavorite }) => {
	const isUserLoggedIn = (e) => {
		console.log("Only valid user can save favorites.")
		e.preventDefault()
		return user ? toggleFavorite() : invalidUser();
	}

	const toggleFavorite = () => {
		if(isFavorite) {

		} else {
	postFavorite({}, user.userId)

		}
	
		isFavorite = !isFavorite;
	}

 	return (
		<article className="Card">
			<img src={artwork_url} alt="Album cover art"/>
			<h2>{album_name}</h2>
			<button onClick={(e) => isUserLoggedIn(e)}>Save For Later</button>
		</article>
	)
}

const mapDispatchToProps = dispatch => ({
	addFavorite: () => dispatch(addFavorite()),
	invalidUser: () => dispatch(invalidUser())
});

export default connect(null, mapDispatchToProps)(Card)
