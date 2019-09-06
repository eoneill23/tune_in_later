import { combineReducers } from 'redux'
import { userReducer } from '../reducers/userStatus';
import { albumsReducer } from '../reducers/addAlbums'

const rootReducer = combineReducers({
  albums: albumsReducer,
  user: userReducer
})

export default rootReducer;