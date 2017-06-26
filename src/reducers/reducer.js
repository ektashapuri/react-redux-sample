import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import { RECEIVE_WEATHER } from '../action/action'

function weather(state = {
  isFetching: false,
  details: {},
}, action) {
  switch (action.type) {
    case RECEIVE_WEATHER:
      return object.assign({}, state, {
        isFetching: false,
        details: action.details,
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  weather,
  routing: routerReducer,
  loadingBar: loadingBarReducer,
})

export default rootReducer
