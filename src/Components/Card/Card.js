import React from 'react'
import './Card.css'
import { addFavorite, invalidUser } from '../../actions/index'
import { connect } from 'react-redux';
import { postFavorite, deleteFavorite } from '../../util/apiCalls';

const Card = ({ album_id, artist_name, album_name, artwork_url, release_date, content_advisory_rating, primary_genre_name, user, addFavorite, invalidUser, isFavorite, favorites }) => {
	const isUserLoggedIn = (e) => {
		e.preventDefault()
		return user ? toggleFavorite() : invalidUser();
	}

	const toggleFavorite = () => {
		isFavorite = favorites.map(favorite => favorite.id).includes(album_id)
		if(isFavorite) {
			deleteFavorite(album_id)
		} else {
			const albumData = {album_id, artist_name, album_name, artwork_url, release_date, content_advisory_rating, primary_genre_name}
			postFavorite(albumData, user.id)
			.then(data => addFavorite(data))
			.catch(error => console.log(error))

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
const mapStateToProps = (state) => ({
favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({
	addFavorite: () => dispatch(addFavorite()),
	invalidUser: () => dispatch(invalidUser())
});

export default connect(null, mapDispatchToProps)(Card)
