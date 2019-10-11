import * as actionTypes from "./actionTypes";

const initialSmurfs = [];

export function smurfReducer(state = initialSmurfs, action) {
  switch (action.type) {
    case actionTypes.IMPORT_SMURFS:
      return action.payload
    default:
      return state;
  }
}

const initialForm = {
  name: "",
  height: "",
  age: ""
};

export function formReducer(state = initialForm, action) {
  switch (action.type) {
    case actionTypes.ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
}
