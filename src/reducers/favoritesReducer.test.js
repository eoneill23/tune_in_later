import { favoritesReducer } from './favoritesReducer';

describe('favoritesReducer', () => {

  it('should return the default state', () => {
    let expected = [];
    let result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected)
  })

  it('should add a new favorite album to the store', () => {
    let action = {
      type: "ADD_FAVORITE",
      newFavorite: {
        album_id: 626204707
      }
    };
    let result = favoritesReducer(undefined, action);
    let expected = [action.newFavorite]
    expect(result).toEqual(expected)
  })

  it('should add a new favorite album to the store', () => {
    let action = {
      type: "ADD_FAVORITE",
      newFavorite: {
        album_id: 626204707
      }
    };
    let result = favoritesReducer(undefined, action);
    let expected = [action.newFavorite]
    expect(result).toEqual(expected)
  })

  it('should return the albums that have been favorited', () => {
    let action = {
      type: "GET_USER_FAVORITES",
      userFavorites: [
        {
          album_id: 626204707
        },
        {
          album_id: 1443125118
        }
      ]
    };
    let result = favoritesReducer(undefined, action);
    let expected = action.userFavorites
    expect(result).toEqual(expected)
  })

  it('should remove the album id from favorites', () => {
    let store = [
      {
        album_id: 626204707
      },
      {
        album_id: 1443125118
      }
    ]

    let action = {
      type: "REMOVE_FAVORITE_FROM_STORE",
      albumId: 626204707
    };

    let result = favoritesReducer(store, action);
    let expected = [{ album_id: 1443125118 }]
    expect(result).toEqual(expected)
  })

})