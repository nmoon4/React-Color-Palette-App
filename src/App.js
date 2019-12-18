import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Palette from './Palette.js';
import seedColors from './seedColors.js';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]}/>
    </div>
  );
}

export default App;
