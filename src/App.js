import React, { useState } from 'react';
import './App.css';

const App = props => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className={ "red light" + (a === true ? " selected" : "")} onClick={() => {
          setA(true);
          setB(false);
          setC(false);
        }}></div>
        <div className={ "yellow light" + (b === true ? " selected" : "")} onClick={() => {
          setB(true);
          setA(false);
          setC(false);
        }}></div>
        <div className={ "green light" + (c === true ? " selected" : "")} onClick={() => {
          setC(true);
          setA(false);
          setB(false);
        }}></div>
        </div>
      <div className="post"></div>
    </div>
  );
}

export default App;
