import { combineReducers } from 'redux';
import { userReducer } from '../reducers/userReducer';
import { albumsReducer } from '../reducers/albumsReducer';
import { errorReducer} from  '../reducers/errorReducer';
import { favoritesReducer } from '../reducers/favoritesReducer';

const rootReducer = combineReducers({
  albums: albumsReducer,
  user: userReducer,
  error: errorReducer,
  favorites: favoritesReducer
})

export default rootReducer;