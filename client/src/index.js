import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.jsx'
import {configureStore, runSaga} from './store'
import {Provider} from "react-redux";
import '../styles/app.styl'

const store = configureStore()
runSaga()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

