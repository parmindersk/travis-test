import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={() => {
          setCounter((old) => old + 1)
        }}>Count  {counter}</h1>
      </header>
    </div>
  );
}

export default App;
