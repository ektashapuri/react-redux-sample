import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/store'
import Home from './Home'

const store = configureStore()

class App extends React.Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
