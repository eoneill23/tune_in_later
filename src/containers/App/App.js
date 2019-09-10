import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import SearchForm from "../Forms/SearchForm/SearchForm";
import CardContainer from "../CardContainer/CardContainer";
import CardDetails from "../../Components/CardDetails/CardDetails";
import LogInForm from "../Forms/LogInForm/LogInForm";
import SignUpForm from "../Forms/SignUpForm/SignUpForm";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

export class App extends Component {
  render() {
    return (
      <section className="App">
        <header>
          <Link to={"/"} className="header-link">
            <div className="headerContents">
              <h1 id="header-text">TuneIn Later</h1>
              <img id="headphones" src={require("./headphones.svg")} alt="" />
            </div>
          </Link>
          {!this.props.user ? (
            <article className="buttonContainer">
              <Link to="/login">
                <img
                  id="existingUser"
                  src={require("./user-silhouette.svg")}
                  alt=""
                />
                <button id="existingUser-button">LogIn</button>
              </Link>
              <Link to="/signup">
                <img id="newUser" src={require("./new-user.svg")} alt="" />
                <button id="newUser-button">SignUp</button>
              </Link>
            </article>
          ) : (
            <article className="buttonContainer">
              <Link to="/my-collection">
                <img id="viewFavorites" src={require("./vinyl.svg")} alt="" />
                <button id="viewFavorites-button">
                  View Favorites({this.props.favorites.length})
                </button>
              </Link>
              <Link to="/">
                <img id="logoutUser" src={require("./logout.svg")} alt="" />
                <button
                  id="logoutUser-button"
                  onClick="window.location.reload();"
                >
                  Logout
                </button>
              </Link>
            </article>
          )}
        </header>
        <Route exact path="/signup" render={() => <SignUpForm />} />
        <Route exact path="/" render={() => <SearchForm />} />
        <Route exact path="/login" render={() => <LogInForm />} />
        <Route
          exact
          path="/"
          render={() => <CardContainer displayType={"albums"} />}
        />
        <Route
          exact
          path="/my-collection"
          render={() => <CardContainer displayType={"favorites"} />}
        />
        <Route
          path="/albums/:id"
          render={({ match }) => {
            let foundAlbum = this.props.albums.find(album => {
              return album.collectionId == match.params.id;
            });
            return (
              <CardDetails
                key={foundAlbum.collectionId}
                artist_name={foundAlbum.artistName}
                album_name={foundAlbum.collectionName}
                artwork_url={foundAlbum.artworkUrl100}
                release_date={foundAlbum.releaseDate}
                primary_genre_name={foundAlbum.primaryGenreName}
                returnRoute={"/"}
              />
            );
          }}
        />
        <Route
          path="/favorites/:id"
          render={({ match }) => {
            let foundAlbum = this.props.favorites.find(favorite => {
              return favorite.album_id == match.params.id;
            });
            return (
              <CardDetails
                key={foundAlbum.album_id}
                artist_name={foundAlbum.artist_name}
                album_name={foundAlbum.collection_name}
                artwork_url={foundAlbum.artwork_url}
                release_date={foundAlbum.release_date}
                primary_genre_name={foundAlbum.primary_genre_name}
                returnRoute={"/my-collection"}
              />
            );
          }}
        />
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  albums: state.albums,
  favorites: state.favorites
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  user: PropTypes.object,
  albums: PropTypes.array,
  favorites: PropTypes.array,
  mapStateToProps: PropTypes.func
}