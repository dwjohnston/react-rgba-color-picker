
import * as React from 'react'


import { default as CSlider } from 'react-compound-slider';


import { Handle, Track } from "./slider";

import "../assets/slider.css";


export interface ISliderProps {
    min: number;
    max: number;
    step: number;
    initValue: number;
    changeEvent: (label: string, v: number) => void;
    label: string; 
    colorFn: (percent: number) => string; 

}


interface IHandle {
    percent: number;
    id: string; 
    value: number; 
}

interface ITrack {
    id: number;
    source: any;
    target: any;
}

export class Slider extends React.Component<ISliderProps, any> {
    constructor(props: ISliderProps) {
        super(props);

        this.state = {
            initValue: props.initValue, 
            value: props.initValue
        };
    }

     public onChange = (v:number[]) => {
        this.props.changeEvent(this.props.label, v[0]);
        this.setState ({
            value: v
        });
    }; 

    public render() {
        const { min, max, step, label, colorFn } = this.props;
        return (<div className="slider-wrapper">

                <label>{label}</label>
                <CSlider
                    domain={[min, max]}
                    step={step}
                    className="slider"
                    values={[this.state.initValue]}
                    mode={2}
                    vertical={true}
                    reversed={true}
                    onChange={this.onChange}
                >

                    <CSlider.Handles>
                        {(sliders: any) => {
                            return (
                                <div className="slider-handles">
                                    {sliders.handles.map((handle: IHandle, i: number) => {
                                        return (
                                            <Handle
                                                key={i}
                                                percent={handle.percent}
                                                id = {handle.id}
                                                getHandleProps={sliders.getHandleProps}

                                            />
                                        )
                                    })}
                                </div>)
                        }}
                    </CSlider.Handles>

                    <CSlider.Tracks left={true} right={true}>
                        {(tracks: any) => {
                            return (

                                <div className="slider-tracks">
                                    {tracks.tracks.map((track: ITrack, i: number) => (
                                        <Track
                                            key={track.id}
                                            id={i}
                                            source={track.source}
                                            target={track.target}
                                            getTrackProps = {tracks.getTrackProps}
                                            colorFn = {colorFn}
                                        />
                                    ))}
                                </div>
                            )
                        }}
                    </CSlider.Tracks>

                    <CSlider.Rail>
                        {() => (
                            <div className="slider-rail" />
                        )}
                    </CSlider.Rail>


                </CSlider>

                <p> 
                    {this.state.value}
                    </p> 
            </div>);
    }

}
