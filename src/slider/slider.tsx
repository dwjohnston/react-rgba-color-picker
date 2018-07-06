import * as React from 'react'


export interface IHandleProps {
  percent: number;
  getHandleProps: (id: string) => void; 
  id: string;
}

export function Handle(props: IHandleProps) {

  const {percent, getHandleProps, id} = props; 

  return <div
    className="slider-handle"
    role="slider"
    style={{
      top: `calc(${percent}% - 1.5em)`,
    }}

    {...getHandleProps(id)}

  />
}


export interface ITrackProps  {


  source: any; 
  target: any; 
  id: number; 
  getTrackProps: () => void;
  colorFn : (percent: number) => string; 
}

export function Track(props: ITrackProps) {

  const {source, target, id, getTrackProps, colorFn} = props; 
  return (
    <div
      className="slider-track"
      style={{
        top: `${source.percent}%`,
        height: `${target.percent - source.percent}%`,
        backgroundColor: id === 0 ? 'rgba(10,10,10,1)' : colorFn(source.percent)
      }}

    {...getTrackProps()}
    />
  );
}
