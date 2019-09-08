import React from 'react';
import Card from '../Card/Card';
import './Container.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Container = ({albums, user, favorites}) => {

  let cards
  if(albums !== undefined) {
    cards = albums.map(album => {
      return <Card
        album_id={album.collectionId}
        key={album.collectionId}
        artist_name={album.artistName}
        album_name={album.collectionName}
        price={album.collectionPrice}
        artwork_url={album.artworkUrl100}
        release_date={album.releaseDate}
        content_advisory_rating={album.contentAdvisoryRating || 'notExplicit'}
        primary_genre_name={album.primaryGenreName}
        user = {user}
        isFavorite={false}
      />
  })
  } else {
    const response = "ENTER AN ARTIST"
    return response
  } 
  return (
    <section className='Container'>
      {user && <NavLink to='/my-container'>View Favorites | {favorites.length}</NavLink>}
      {cards}
    </section>
  )
}
  
export const mapStateToProps = (store) => ({
  albums: store.albums,
  user: store.user,
  favorites: store.favorites
});

export default connect(mapStateToProps)(Container)
