import { combineReducers } from 'redux'

import userReducer from './UserReducer'
import parksReducer from './ParksReducer'

const rootReducer = combineReducers({
  user: userReducer,
  parks: parksReducer
})

export default rootReducer
