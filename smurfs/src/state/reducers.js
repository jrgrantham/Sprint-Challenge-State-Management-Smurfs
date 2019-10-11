import * as actionTypes from "./actionTypes";

const initialState = {
  allSmurfs: [],
  newSmurfForm: {
    fname: '',
    lname: '',
    height: '',
  }
}

export function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IMPORT_SMURFS:
      return {
        ...state,
        allSmurfs: action.payload
      };
    default:
      return state;
  }
}