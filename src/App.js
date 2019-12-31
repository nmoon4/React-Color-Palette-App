import React, { Component } from 'react'
import logo from './logo.svg';
// import './App.css';
import Palette from './Palette.js';
import seedColors from './seedColors.js';
import {generatePalette} from './colorHelpers';


export default class App extends Component {
  render() {

    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])}/>
      </div>
    )
  }
}
