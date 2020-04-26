import React from 'react';
import {FlagPicker} from "./flagPicker"
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Flag Picker</h2>
      <div>This App will help you to learn flags around the world in 3 steps</div>
      <React.Fragment>
        <FlagPicker/>
      </React.Fragment>
    </div>
  );
}

export default App;
