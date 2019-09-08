import React from 'react'
import './Card.css'
import { addFavorite, invalidUser, removeFavoriteFromStore } from '../../actions/index'
import { connect } from 'react-redux';
import { postFavorite, deleteFavorite } from '../../util/apiCalls';

const Card = ({ album_id, artist_name, album_name, artwork_url, release_date, content_advisory_rating, primary_genre_name, user, addFavorite, invalidUser, isFavorite, favorites, removeFavoriteFromStore }) => {
	const isUserLoggedIn = (e) => {
		e.preventDefault()
		return user ? toggleFavorite() : invalidUser();
	}

	const toggleFavorite = () => {
		let isFavorite = favorites.map(favorite => favorite.album_id).includes(album_id);
		console.log("THIS IS THE IS FAVORITE STATUS", isFavorite)
		if(isFavorite) {
			removeFavoriteFromStore(album_id);
			deleteFavorite(album_id, user.id);
		} else {
			console.log("SHOULD GET THIS IF ISFAVORITE IS FALSE")
			const albumData = {album_id, artist_name, album_name, artwork_url, release_date, content_advisory_rating, primary_genre_name}
			postFavorite(albumData, user.id)
			.then(favorite => addFavorite(favorite))
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
	addFavorite: (favorite) => dispatch(addFavorite(favorite)),
	invalidUser: () => dispatch(invalidUser()),
	removeFavoriteFromStore: (album_id) => dispatch(removeFavoriteFromStore(album_id))
});

export default connect(mapStateToProps	, mapDispatchToProps)(Card)
