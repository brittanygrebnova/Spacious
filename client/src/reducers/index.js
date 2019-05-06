import { combineReducers } from 'redux'

import userReducer from './userReducer'
import parksReducer from './parksReducer'

const rootReducer = combineReducers({
  user: userReducer,
  parks: parksReducer
})

export default rootReducer
