import * as React from 'react';
import "./assets/rgba-picker.css";
export interface IRgbaProps {
    color: IColor;
}
export interface IColor {
    r: number;
    g: number;
    b: number;
    a: number;
}
interface IState {
    color: IColor;
    open: boolean;
}
export declare class RgbaPicker extends React.Component<IRgbaProps, IState> {
    state: IState;
    constructor(props: IRgbaProps);
    handleChange: (label: string, value: number) => void;
    render(): JSX.Element;
    private rColorFn;
    private gColorFn;
    private bColorFn;
    private aColorFn;
    private toggleOpen;
    private open;
}
export {};
