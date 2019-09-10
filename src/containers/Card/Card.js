import React from "react";
import "./Card.css";
import {
  addFavorite,
  invalidUser,
  removeFavoriteFromStore
} from "../../actions/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postFavorite, deleteFavorite } from "../../util/apiCalls";

export const Card = ({
  album_id,
  artist_name,
  album_name,
  artwork_url,
  release_date,
  content_advisory_rating,
  primary_genre_name,
  user,
  addFavorite,
  invalidUser,
  favorites,
  removeFavoriteFromStore,
  routeType
}) => {
  const isUserLoggedIn = e => {
    e.preventDefault();
    return user ? toggleFavorite() : invalidUser();
  };

  let isFavorite = favorites
    .map(favorite => favorite.album_id)
    .includes(album_id);

  let cardClassName = isFavorite ? "favoriteCard" : "Card";

  const toggleFavorite = () => {
    if (isFavorite) {
      deleteFavorite(album_id, user.id)
        .then(data => removeFavoriteFromStore(album_id))
        .catch(error => alert(error));
    } else {
      const albumData = {
        album_id,
        artist_name,
        album_name,
        artwork_url,
        release_date,
        content_advisory_rating,
        primary_genre_name
      };
      postFavorite(albumData, user.id)
        .then(favorite => addFavorite(favorite))
        .catch(error => alert(error));
    }
  };

  return (
    <article className={cardClassName}>
      <Link to={`/${routeType}/${album_id}`}>
        <img src={artwork_url} alt="Album cover art" />
      </Link>
      <h3>{album_name}</h3>
      {!isFavorite ? (
        <article className="favorite">
          <img
            id="notFavorite"
            src={require("./notFavorite.svg")}
            alt=""
            onClick={e => isUserLoggedIn(e)}
          />
          <button id="notFavorite-button" onClick={e => isUserLoggedIn(e)}>
            Add Favorite
          </button>
        </article>
      ) : (
        <article className="favorite">
          <img
            id="isFavorite"
            src={require("./isFavorite.svg")}
            alt=""
            onClick={e => isUserLoggedIn(e)}
          />
          <button id="isFavorite-button" onClick={e => isUserLoggedIn(e)}>
            Remove Favorite
          </button>
        </article>
      )}
    </article>
  );
};

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: favorite => dispatch(addFavorite(favorite)),
  invalidUser: () => dispatch(invalidUser()),
  removeFavoriteFromStore: album_id =>
  dispatch(removeFavoriteFromStore(album_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
