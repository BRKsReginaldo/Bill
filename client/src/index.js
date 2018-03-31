import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.jsx'
import {configureStore, runSaga} from './store'
import '../styles/app.styl'
import {Provider} from "react-redux";

const store = configureStore()
runSaga()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

