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
import { ColorPreview } from "./color-preview";
import { Slider } from "./slider/SliderComponent";
import "./assets/rgba-picker.css";
var RgbaPicker = /** @class */ (function (_super) {
    __extends(RgbaPicker, _super);
    function RgbaPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (label, value) {
            var newColor = Object.assign({}, _this.state.color);
            newColor[label] = value;
            _this.setState({
                color: newColor
            });
        };
        _this.rColorFn = function (percent) {
            return "rgba(" + (1 - (percent / 100)) * 255 + ", 0, 0, 1)";
        };
        _this.gColorFn = function (percent) {
            return "rgba(0 , " + (1 - (percent / 100)) * 255 + ", 0, 1)";
        };
        _this.bColorFn = function (percent) {
            return "rgba(0, 0, " + (1 - (percent / 100)) * 255 + ", 1)";
        };
        _this.aColorFn = function (percent) {
            return "rgba(255, 255, 255, " + (1 - (percent / 100)) + ")";
        };
        _this.toggleOpen = function () {
            _this.setState({ open: !_this.state.open });
        };
        _this.open = function () {
            if (!_this.state.open) {
                _this.toggleOpen();
            }
        };
        _this.state = {
            color: props.color,
            open: false,
        };
        return _this;
    }
    RgbaPicker.prototype.render = function () {
        return (React.createElement("div", { className: "rgba-picker " + (this.state.open ? 'open' : 'closed') },
            React.createElement("div", { className: "sliders" },
                React.createElement("div", null,
                    React.createElement(Slider, { min: 0, max: 255, step: 1, initValue: 0, changeEvent: this.handleChange, label: "r", colorFn: this.rColorFn })),
                React.createElement("div", null,
                    React.createElement(Slider, { min: 0, max: 255, step: 1, initValue: 10, changeEvent: this.handleChange, label: "g", colorFn: this.gColorFn })),
                React.createElement("div", null,
                    React.createElement(Slider, { min: 0, max: 255, step: 1, initValue: 100, changeEvent: this.handleChange, label: "b", colorFn: this.bColorFn })),
                React.createElement("div", null,
                    React.createElement(Slider, { min: 0, max: 1, step: 0.01, initValue: 0.5, changeEvent: this.handleChange, label: "a", colorFn: this.aColorFn }))),
            React.createElement("div", { className: "color-preview-wrapper", onClick: this.open },
                React.createElement(ColorPreview, { rgbaString: "rgba(" + this.state.color.r + ", " + this.state.color.g + ", " + this.state.color.b + ", " + this.state.color.a + ")" })),
            React.createElement("button", { className: "close-btn", onClick: this.toggleOpen }, this.state.open ? React.createElement("i", { className: "fas fa-chevron-left" }) : React.createElement("i", { className: "fas fa-chevron-right" }))));
    };
    return RgbaPicker;
}(React.Component));
export { RgbaPicker };
//# sourceMappingURL=RgbaPicker.js.map