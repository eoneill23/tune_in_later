import React from 'react';
import { Link } from 'react-router-dom';
import './CardDetails.css';

const CardDetails = ({ artist_name, album_name, artwork_url, release_date,  primary_genre_name, returnRoute }) => {
  return (
    <div>
      <Link to={`${returnRoute}`} className='back-btn'>◀ back</Link>
      <h1>{album_name}</h1>
      <h1>{artist_name}</h1>
      <img src={artwork_url} className='app-img-no-hover' />
      <p className='card-detail-genre'>{primary_genre_name}</p>
      <p className='card-detail-release_date'>{release_date}</p>
    </div>
  )
}

export default CardDetails;