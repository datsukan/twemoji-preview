import { createStore } from "redux"

const initialState = {
  words: "",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WORDS":
      return { words: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store

export function set(payload) {
  return {
    type: "SET_WORDS",
    payload: payload,
  }
}
