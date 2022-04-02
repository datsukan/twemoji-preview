import { createStore } from "redux"

const initialState = {
  words: "",
  category: null,
  subCategory: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WORDS":
      return { ...state, words: action.payload }
    case "SET_CATEGORY":
      return { ...state, category: action.payload }
    case "SET_SUB_CATEGORY":
      return { ...state, subCategory: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store

export function setWords(payload) {
  return {
    type: "SET_WORDS",
    payload: payload,
  }
}

export function setCategory(payload) {
  return {
    type: "SET_CATEGORY",
    payload: payload,
  }
}

export function setSubCategory(payload) {
  return {
    type: "SET_SUB_CATEGORY",
    payload: payload,
  }
}
