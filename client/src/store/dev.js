import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import rootSaga from "../sagas";
import loggerMiddleware from "redux-logger";


const sagaMiddleware = createSagaMiddleware()
let enhanceStore = compose

if (window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__')) {
  enhanceStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

export const configureStore = () => {
  return createStore(reducers, enhanceStore(
    applyMiddleware(loggerMiddleware),
    applyMiddleware(sagaMiddleware)
  ))
}

export const runSaga = () => {
  sagaMiddleware.run(rootSaga)
}

export default {configureStore, runSaga}