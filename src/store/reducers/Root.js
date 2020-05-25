import { combineReducers } from 'redux'

import SignIn from './SignIn'

const RootReducer = combineReducers({
  signIn: SignIn,
})

export default RootReducer
