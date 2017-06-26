import { compose, createStore, applyMiddleware } from 'redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { thunkMiddleware } from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/reducer'
import { reduxReactRouter } from 'redux-router';

const initialState = {
  weather: {
    isFetching: true,
    details: {
      payload: [],
    },
  },
}

// const store = compose(
//   applyMiddleware(thunkMiddleware, loadingBarMiddleware(), createLogger()),
// )(createStore);

// const store = createStore(rootReducer, initialState)
// compose  (
//   applyMiddleware(
//     thunkMiddleware,
//     loadingBarMiddleware(),
//     createLogger()
//   )
// )

const store = createStore(
  rootReducer,
  initialState,
  compose(
      applyMiddleware(
      thunkMiddleware,
      loadingBarMiddleware(),
      createLogger()
    )
  )
);


export default function configureStore(){
  return store
}
