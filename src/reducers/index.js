import { combineReducers } from 'redux'
import { albumsReducer } from '../reducers/addAlbums'

const rootReducer = combineReducers({
  albums: albumsReducer
})

export default rootReducer;