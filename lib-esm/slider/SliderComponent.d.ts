import * as React from 'react';
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
export declare class Slider extends React.Component<ISliderProps, any> {
    constructor(props: ISliderProps);
    onChange: (v: number[]) => void;
    render(): JSX.Element;
}
