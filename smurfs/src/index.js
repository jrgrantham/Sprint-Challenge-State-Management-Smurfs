import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import "./index.css";
import App from "./components/App";
import { smurfReducer } from './state/reducers'

const monsterReducer = combineReducers({
  smurfs: smurfReducer,
})

const store = createStore(
  monsterReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));
