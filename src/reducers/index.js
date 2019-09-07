import { combineReducers } from 'redux';
import { userReducer } from '../reducers/userStatus';
import { albumsReducer } from '../reducers/addAlbums';
import { invalidUserReducer } from  '../reducers/invalidUser';
import { favoritesReducer } from '../reducers/addFavorite';

const rootReducer = combineReducers({
  albums: albumsReducer,
  user: userReducer,
  invalidUser: invalidUserReducer,
  favorites: favoritesReducer
})

export default rootReducer;