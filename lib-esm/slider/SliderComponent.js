var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { default as CSlider } from 'react-compound-slider';
import { Handle, Track } from "./slider";
import "../assets/slider.css";
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (v) {
            _this.props.changeEvent(_this.props.label, v[0]);
            _this.setState({
                value: v
            });
        };
        _this.state = {
            initValue: props.initValue,
            value: props.initValue
        };
        return _this;
    }
    Slider.prototype.render = function () {
        var _a = this.props, min = _a.min, max = _a.max, step = _a.step, label = _a.label, colorFn = _a.colorFn;
        return (React.createElement("div", { className: "slider-wrapper" },
            React.createElement("label", null, label),
            React.createElement(CSlider, { domain: [min, max], step: step, className: "slider", values: [this.state.initValue], mode: 2, vertical: true, reversed: true, onChange: this.onChange },
                React.createElement(CSlider.Handles, null, function (sliders) {
                    return (React.createElement("div", { className: "slider-handles" }, sliders.handles.map(function (handle, i) {
                        console.log(handle);
                        return (React.createElement(Handle, { key: i, percent: handle.percent, id: handle.id, getHandleProps: sliders.getHandleProps }));
                    })));
                }),
                React.createElement(CSlider.Tracks, { left: true, right: true }, function (tracks) {
                    return (React.createElement("div", { className: "slider-tracks" }, tracks.tracks.map(function (track, i) { return (React.createElement(Track, { key: track.id, id: i, source: track.source, target: track.target, getTrackProps: tracks.getTrackProps, colorFn: colorFn })); })));
                }),
                React.createElement(CSlider.Rail, null, function () { return (React.createElement("div", { className: "slider-rail" })); })),
            React.createElement("p", null, this.state.value)));
    };
    return Slider;
}(React.Component));
export { Slider };
//# sourceMappingURL=SliderComponent.js.map