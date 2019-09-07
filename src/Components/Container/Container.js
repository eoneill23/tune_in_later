import React from 'react';
import Card from '../Card/Card';
import './Container.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserFavorites } from '../../actions/index';
import { fetchUserFavorites } from '../../util/apiCalls';

const Container = ({albums, user, getUserFavorites}) => {

  const getFavorites = () => {
    fetchUserFavorites(user.id)
    .then(data => getUserFavorites(data.favorites))
    .catch(error => console.log('THIS IS THE ERROR', error))
  }

  let cards
  if(albums !== undefined) {
    cards = albums.map(album => {
      return <Card
        id={album.collectionId}
        key={album.collectionId}
        title={album.collectionName}
        price={album.collectionPrice}
        img={album.artworkUrl100}
        user={user}
      />
  })
  } else {
    const response = "ENTER AN ARTIST"
    return response
  } 
  return (
    <section className='Container'>
      {user && <NavLink onClick={() => getFavorites()} to='/my-container'>View Favorites</NavLink>}
      {cards}
    </section>
  )
}
  
export const mapStateToProps = (store) => ({
  albums: store.albums,
  user: store.user
});

export const mapDispatchToProps = (dispatch) => ({
  getUserFavorites: (favorites) => dispatch(getUserFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container)
