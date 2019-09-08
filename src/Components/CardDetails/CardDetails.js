import React from 'react';
import { Link } from 'react-router-dom'

const CardDetails = ({  artist_name, album_name, artwork_url, release_date,  primary_genre_name, returnRoute}) => {
  console.log('HERE IS THE RETURN ROUTE', returnRoute)
  return (
    <div>
      <Link to={`${returnRoute}`} className='back-btn'>◀ back</Link>
      <h1>{album_name}</h1>
      <img src={artwork_url} className='app-img-no-hover' />
      <p className='creature-bio'>{primary_genre_name}</p>
    </div>
  )
}

export default CardDetails;