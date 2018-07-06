# react-rgba-color-picker

A simple rgba color picker for react, with typescript support.

Uses sliders to pick the individual rgba values. 

Uses [react-compound-slider](https://www.npmjs.com/package/react-compound-slider) for the sliders. 


## Usage

### Plain React
```
import React, { Component } from 'react';
import {RgbaPicker} from "rgba3";


class App extends Component {
  render() {
    return (
      <div className="App">
      <RgbaPicker color = {{r: 0, b: 255, g: 10, a: 1}}/> 

      </div>
    );
  }
}

export default App;
```

### Typescript + React

```
import * as React from 'react';
import {IColor, RgbaPicker} from  "react-rgba-color-picker"; 

class App extends React.Component {
 
  public favColor: IColor;
  public render() {   
    this.favColor = {
      r: 11, 
      g: 111, 
      b: 50, 
      a: 1
    };
    return (
      <div className="App">
          <RgbaPicker color = {this.favColor}/> 
      </div>
    );
  }
}

export default App;
```