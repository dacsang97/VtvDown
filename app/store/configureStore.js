/* eslint global-require: "error"*/
import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../reducers/index'

export default function configureStore(initialState) {
  const store = createStore(RootReducer, initialState, applyMiddleware())
  return store
}
