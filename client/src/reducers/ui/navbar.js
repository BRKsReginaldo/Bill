import {Record} from 'immutable'

const InitialState = Record({
  sideNav: false
})

const initialState = new InitialState

export default function navbar(state = initialState, action) {
  const {type, payload} = action

  switch (type) {
    default:
      return state
  }
}