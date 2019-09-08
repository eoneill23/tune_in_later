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
		let isFavorite = favorites.map(favorite => favorite.user_id).includes(user.id);
		if(isFavorite) {
			deleteFavorite(album_id, user.id)
		} else {
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
	invalidUser: () => dispatch(invalidUser())
});

export default connect(mapStateToProps	, mapDispatchToProps)(Card)
