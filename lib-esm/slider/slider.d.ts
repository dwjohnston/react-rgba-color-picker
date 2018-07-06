/// <reference types="react" />
export interface IHandleProps {
    percent: number;
    getHandleProps: (id: string) => void;
    id: string;
}
export declare function Handle(props: IHandleProps): JSX.Element;
export interface ITrackProps {
    source: any;
    target: any;
    id: number;
    getTrackProps: () => void;
    colorFn: (percent: number) => string;
}
export declare function Track(props: ITrackProps): JSX.Element;
