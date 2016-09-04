/* eslint global-require: "error"*/
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import RootReducer from '../reducers/index'


export default function configureStore(initialState) {
  const store = createStore(RootReducer, initialState,
    applyMiddleware(ReduxPromise, thunk))
  return store
}
