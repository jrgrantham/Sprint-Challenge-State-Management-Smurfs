import * as actionTypes from "./actionTypes";

const initialState = {
  allSmurfs: [],
  newSmurfForm: {
    name: '',
    height: '',
    age: '',
  }
}

export function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IMPORT_SMURFS:
      return {
        ...state,
        allSmurfs: action.payload
      };
    case actionTypes.ON_INPUT_CHANGE:
      return {
        ...state,
        newSmurfForm: {
          ...state,
          [action.payload.name]: action.payload.value,
        }
      }
    default:
      return state;
  }
}