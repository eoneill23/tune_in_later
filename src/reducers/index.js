import { combineReducers } from 'redux'
import { storedAlbums } from '../reducers/addAlbums'

const rootReducer = combineReducers({storedAlbums})

export default rootReducer;