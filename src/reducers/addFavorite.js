export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.newFavorite];
    case 'GET_USER_FAVORITES':
      return action.userFavorites;
    default: 
      return state;
  }
}