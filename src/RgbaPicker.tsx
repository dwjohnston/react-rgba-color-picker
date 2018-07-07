import * as React from 'react';
import { ColorPreview } from "./color-preview";
import { Slider } from "./slider/SliderComponent";
import "./assets/rgba-picker.css"; 


export interface IRgbaProps {
  color: IColor;
  onChange: (color: IColor) => any; 
}

export interface IColor {
  r: number; 
  g: number; 
  b: number; 
  a: number; 
}

export interface IRgbaState {
  color: IColor;
  open: boolean;
}


export  class RgbaPicker extends React.Component<IRgbaProps, IRgbaState> {

  public state: IRgbaState;
  public constructor(props: IRgbaProps) {
    super(props);

    this.state = {
      color: props.color,
      open: false,
    };
  }


  public handleChange = (label: string, value: number) => {

    const newColor = Object.assign({}, this.state.color);
    (newColor as any)[label] = value;

    this.setState({
      color: newColor
    });

    this.props.onChange(this.state.color);
  }



  public render() {

    const {color} = this.props; 
    return (
      <div className={`rgba-picker ${this.state.open ? 'open' : 'closed'}`}
      >
        <div className="sliders">
          <div>
            <Slider min={0} max={255} step={1} initValue={color.r} changeEvent={this.handleChange} label="r" colorFn={this.rColorFn} />
          </div>
          <div>
            <Slider min={0} max={255} step={1} initValue={color.g} changeEvent={this.handleChange} label="g" colorFn={this.gColorFn} />
          </div>
          <div>
            <Slider min={0} max={255} step={1} initValue={color.b} changeEvent={this.handleChange} label="b" colorFn={this.bColorFn} />
          </div>
          <div>
            <Slider min={0} max={1} step={0.01} initValue={color.a} changeEvent={this.handleChange} label="a" colorFn={this.aColorFn} />
          </div>
        </div>

        <div className = "color-preview-wrapper" onClick={this.open}>
          <ColorPreview
            rgbaString={`rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`} />
        </div>
        <button className="close-btn" onClick={this.toggleOpen}>
          {this.state.open ? <i className="fas fa-chevron-left" /> : <i className="fas fa-chevron-right" />
          }
        </button>
      </div>
    );
  }


  private rColorFn = (percent: number) => {
    return `rgba(${(1 - (percent / 100)) * 255}, 0, 0, 1)`;
  }

  private gColorFn = (percent: number) => {
    return `rgba(0 , ${(1 - (percent / 100)) * 255}, 0, 1)`;
  }

  private bColorFn = (percent: number) => {
    return `rgba(0, 0, ${(1 - (percent / 100)) * 255}, 1)`;
  }

  private aColorFn = (percent: number) => {
    return `rgba(255, 255, 255, ${1 - (percent / 100)})`;
  }

  private toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  private open = () => {
    if (!this.state.open) { this.toggleOpen(); }
  }

}



