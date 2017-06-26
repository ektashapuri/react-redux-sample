import { compose, createStore, applyMiddleWare } from 'redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import {thunkMiddleware} from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/reducer'

const initialState = {
  weather: {
    isFetching: true,
    details: {
      payload: [],
    },
  },
}

const store = applyMiddleware(loggerMiddleware)(createStore);

export default function configureStore(initialState){
  return store(rootReducer, initialState)
}
