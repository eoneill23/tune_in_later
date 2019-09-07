import { combineReducers } from 'redux';
import { userReducer } from '../reducers/userStatus';
import { albumsReducer } from '../reducers/addAlbums';
import { invalidUserReducer } from  '../reducers/invalidUser';

const rootReducer = combineReducers({
  albums: albumsReducer,
  user: userReducer,
  invalidUser: invalidUserReducer
})

export default rootReducer;