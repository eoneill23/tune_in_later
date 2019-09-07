import React from 'react'
import './Card.css'
import { addFavorite, invalidUser } from '../../actions/index'
import { connect } from 'react-redux'

const Card = ({id, key, title, price, img, user, addFavorite, invalidUser}) => {
	const isUserLoggedIn = (e) => {
		console.log("hey")
		e.preventDefault()
		return user ? addFavorite() : invalidUser();
	}
 	return (
		<article className="Card">
			<img src={img} alt=""/>
			<h2>{title}</h2>
			<p>{price}</p>
			<button onClick={(e) => isUserLoggedIn(e)}>Save For Later</button>
		</article>
	)
}

const mapDispatchToProps = dispatch => ({
addFavorite: () => dispatch(addFavorite()),
invalidUser: () => dispatch(invalidUser())
})

export default connect(null, mapDispatchToProps)(Card)
