import { combineReducers } from 'redux'

import Auth from './Auth'
import Ui from './Ui'

const RootReducer = combineReducers({
  auth: Auth,
  ui: Ui,
})

export default RootReducer
