import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
  return createStore(reducers, compose(
    applyMiddleware(sagaMiddleware)
  ))
}

export const runSaga = () => {
  sagaMiddleware.run(rootSaga)
}

export default {configureStore, runSaga}