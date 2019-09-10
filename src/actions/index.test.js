// import * as actions from './index';
import {
  addAlbums,
  validUser,
  addFavorite,
  invalidUser,
  getUserFavorites,
  removeFavoriteFromStore
} from "./index";

describe("Actions", () => {
  it("should have a type of ADD_ALBUMS", () => {
    let albums = {
      artistId: 150627775,
      artistName: "Fat Joe & Remy Ma",
      collectionName: "All the Way Up (feat. French Montana & Infared) - Single"
    };

    let expectedAction = {
      type: "ADD_ALBUMS",
      albums
    };

    expect(addAlbums(albums)).toEqual(expectedAction);
  });

  it("should have a type of VALID_USER", () => {
    let user = {
      id: 3,
      name: "Ann",
      email: "stuff@things.io"
    };

    let expectedAction = {
      type: "VALID_USER",
      user
    };
    expect(validUser(user)).toEqual(expectedAction);
  });

  it("should have a type of ADD_FAVORITE", () => {
    let newFavorite = {
      album_id: 626204707,
      album_name: "4 (Expanded Edition)",
      artist_name: "Beyoncé",
      artwork_url:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/96/b5/28/96b5280d-379c-af56-a0f5-1825b7a411b4/source/100x100bb.jpg",
      content_advisory_rating: "notExplicit",
      id: 34,
      primary_genre_name: "Pop",
      release_date: "2013-03-29T07:00:00Z",
      user_id: 5
    };

    let expectedAction = {
      type: "ADD_FAVORITE",
      newFavorite
    };
    expect(addFavorite(newFavorite)).toEqual(expectedAction);
  });

  it("should have a type of INVALID_USER", () => {
    let expectedAction = {
      type: "INVALID_USER"
    };

    expect(invalidUser()).toEqual(expectedAction);
  });

  it("should have a type of GET_USER_FAVORITES", () => {
    let userFavorites = [
      {
        album_id: 626204707
      },
      {
        album_id: 1443125118
      }
    ];

    let expectedAction = {
      type: "GET_USER_FAVORITES",
      userFavorites
    };
    expect(getUserFavorites(userFavorites)).toEqual(expectedAction);
  });

  it("should have a type of REMOVE_FAVORITE_FROM_STORE", () => {
    let albumId = {
      albumId: 1443125118
    };

    let expectedAction = {
      type: "REMOVE_FAVORITE_FROM_STORE",
      albumId
    };

    expect(removeFavoriteFromStore(albumId)).toEqual(expectedAction);
  });
});
