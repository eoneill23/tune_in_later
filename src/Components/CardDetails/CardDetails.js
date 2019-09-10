import React from 'react';
import { Link } from 'react-router-dom';
import './CardDetails.css';
import PropTypes from 'prop-types'

const CardDetails = ({ artist_name, album_name, artwork_url, release_date,  primary_genre_name, returnRoute }) => {
  return (
    <section className="CardDetails">
      <Link to={`${returnRoute}`} className='back-btn'>◀ back</Link>
      <article id="cardDetails-container">
      <h1 id="album-name">{album_name}</h1>
      <h2 id="artist-name">{artist_name}</h2>
      <img src={artwork_url} alt="" className='app-img-no-hover' />
      <p className='card-detail-genre'>{primary_genre_name}</p>
      <p className='card-detail-release_date'>{release_date}</p>
      </article>
    </section>
  )
}

export default CardDetails;

CardDetails.propTypes = {
  artist_name: PropTypes.string,
  album_name: PropTypes.string,
  artwork_url: PropTypes.string,
  release_date: PropTypes.string,
  primary_genre_name: PropTypes.string,
  returnRoute: PropTypes.string
}