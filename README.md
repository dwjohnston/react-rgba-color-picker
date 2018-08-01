# react-rgba-color-picker

A simple rgba color picker for react, with typescript support.

Uses sliders to pick the individual rgba values. 

Uses [react-compound-slider](https://www.npmjs.com/package/react-compound-slider) for the sliders. 

**[Demo.](https://dwjohnston.github.io/react-rgba-color-picker/)** 

## Styling

Component can be styled by styling the `.rgba-picker` component and everything inside. 


## Usage
```
npm install --save react-rgba-color-picker
```

### Plain React
```
class App extends Component {
  constructor() {
    super()
    this.state = {
      color: null
    };
  }

  onChange = (c) => {
    console.log(c);
    this.setState({ color: c });
  }

  render() {
    return (
      <div className="App">
        <RgbaPicker color={{ a: 1, b: 255, g: 10, r: 0 }} onChange={this.onChange} />
        {JSON.stringify(this.state.color)}
      </div>
    );
  }
}

export default App;
```

### Typescript + React

```


import * as React from 'react';
import { IColor, RgbaPicker } from "../src/RgbaPicker";

interface IAppState {
  color: IColor;
}

class App extends React.Component<any, IAppState> {

  public state: IAppState;

  constructor(props: any) {
    super(props);
    this.state = {
      color: {
        a: 1,
        b: 50,
        g: 111,
        r: 11
     }
    };
  }

  public onChange = (c: IColor) => {
    this.setState({
      color: c
    });
  }

  public render() {

    return (
      <div className="App">
        <RgbaPicker color={this.state.color}
       onChange = {
         this.onChange
       } />

        <p>{JSON.stringify(this.state.color)}</p>
      </div>
    );
  }
}

export default App;

```
