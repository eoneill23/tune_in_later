export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.newFavorite];
    case 'GET_USER_FAVORITES':
      return action.userFavorites;
    case 'REMOVE_FAVORITE_FROM_STORE':
      return state.filter(favorite => favorite.album_id !== action.albumId)
    default: 
      return state;
  }
}