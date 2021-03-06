import React from "react";
import PropTypes from 'prop-types';
import Card from "../Card/Card";
import "./CardContainer.css";
import { connect } from "react-redux";

export const CardContainer = ({ albums, user, favorites, error, displayType }) => {
  let cards;
  if (displayType === "albums") {
    cards = albums.map(album => {
      return (
        <Card
          album_id={album.collectionId}
          key={album.collectionId}
          artist_name={album.artistName}
          album_name={album.collectionName}
          price={album.collectionPrice}
          artwork_url={album.artworkUrl100}
          release_date={album.releaseDate}
          content_advisory_rating={album.contentAdvisoryRating || "notExplicit"}
          primary_genre_name={album.primaryGenreName}
          user={user}
          routeType={"albums"}
        />
      );
    });
  } else if (displayType === "favorites") {
    cards = favorites.map(album => {
      return (
        <Card
          album_id={album.album_id}
          key={album.album_id}
          artist_name={album.artist_name}
          album_name={album.album_name}
          price={album.price}
          artwork_url={album.artwork_url}
          release_date={album.release_date}
          content_advisory_rating={
            album.content_advisory_rating || "notExplicit"
          }
          primary_genre_name={album.primary_genre_name}
          user={user}
          routeType={"favorites"}
        />
      );
    });
  } else {
    const response = "ENTER AN ARTIST";
    return response;
  }
  return (
    <section>
      {error && !user && <p id="error">Please log in or sign up to add a favorite.</p>}
      <article className="CardContainer">
        {cards}
      </article>
    </section>
  );
};

export const mapStateToProps = store => ({
  albums: store.albums,
  user: store.user,
  favorites: store.favorites,
  error: store.error
});

export default connect(mapStateToProps)(CardContainer);

CardContainer.propTypes = {
  albums: PropTypes.array,
  user: PropTypes.object,
  favorites: PropTypes.array,
  error: PropTypes.string,
  displayType: PropTypes.string.isRequired
}
