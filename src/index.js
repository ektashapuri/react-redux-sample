import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/store'
import Home from './components/Home'

import './style/Style.less'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store} history={history}>
        <Home />
      </Provider>
    )
  }
}

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
