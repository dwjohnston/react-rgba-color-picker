
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
