import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import adminsReducer from './adminsReducer'

const reducers = combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
})

export default reducers
