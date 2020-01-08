import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette.js';
import PaletteList from './PaletteList.js';
import seedColors from './seedColors.js';
import {generatePalette} from './colorHelpers';


export default class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette){
      return palette.id === id
    });
  }

  render() {
    return (
      <Switch>
        <Route 
          exact path="/" 
          render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} //routeProps allows you to use props.history in PaletteList
        />
        
        <Route 
          exact 
          path="/palette/:id" 
          render={routeProps => (
            <Palette 
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )} 
            />
          )} 
        />
      </Switch>
    )
  }
}
