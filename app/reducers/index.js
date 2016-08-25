import { combineReducers } from 'redux'
import PageReducer from './reducer_page'

const RootReducer = combineReducers({
  page: PageReducer,
})

export default RootReducer
