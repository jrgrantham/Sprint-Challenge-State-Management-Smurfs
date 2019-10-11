import axios from "axios";
import * as types from "./actionTypes";

const smurfApi = "http://localhost:3333/smurfs/";

export const getSmurfs = () => dispatch => {
  axios
    .get(smurfApi)
    .then(response => {
      const apiSmurfs = response.data;
      console.log(apiSmurfs);
      dispatch({
        type: types.IMPORT_SMURFS,
        payload: apiSmurfs
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export function changeInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value,
    },
  };
}