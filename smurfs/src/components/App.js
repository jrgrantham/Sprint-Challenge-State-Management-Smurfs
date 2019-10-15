import React, { Component } from "react";
import "./App.css";
import AllSmurfs from './Smurfs';
import SmurfForm from "./SmurfForm";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <div>Enter a new Smurf</div><br></br>
        <SmurfForm/>
        <AllSmurfs/>
      </div>
    );
  }
}

export default App;
