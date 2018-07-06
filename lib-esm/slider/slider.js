var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
export function Handle(props) {
    var percent = props.percent, getHandleProps = props.getHandleProps, id = props.id;
    return React.createElement("div", __assign({ className: "slider-handle", role: "slider", style: {
            top: "calc(" + percent + "% - 1.5em)",
        } }, getHandleProps(id)));
}
export function Track(props) {
    var source = props.source, target = props.target, id = props.id, getTrackProps = props.getTrackProps, colorFn = props.colorFn;
    return (React.createElement("div", __assign({ className: "slider-track", style: {
            top: source.percent + "%",
            height: target.percent - source.percent + "%",
            backgroundColor: id === 0 ? 'rgba(10,10,10,1)' : colorFn(source.percent)
        } }, getTrackProps())));
}
//# sourceMappingURL=slider.js.map