import * as React from 'react';
export function ColorPreview(props) {
    var rgbaString = props.rgbaString;
    return (React.createElement("div", { className: "color-preview" },
        React.createElement("div", { className: "color-preview-dynamic", style: {
                backgroundColor: rgbaString
            } }),
        React.createElement("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD8CAYAAABetbkgAAAABHNCSVQICAgIfAhkiAAAA4VJREFUeJzt3cFpxDAURdE4uKEw/ZcwpCLhtPA3UmDuOQ2IZ7hoJ19rredrs/f7d/cRX6/Xz/Yz7JizY+7EjtvHmrNjzo65Ezu+t58A/DuhQ4DQIUDoECB0CBA6BAgdAoQOAUKHAKFDgNAhQOgQIHQIEDoECB0ChA4BQocAoUOA0CFA6BAgdAgQOgQIHQKEDgGXP7XM2TFnx9yJHW50CBA6BAgdAoQOAUKHAKFDgNAhQOgQIHQIEDoECB0ChA4BQocAoUOA0CFA6BAgdAgQOgQIHQKEDgFChwChQ4DQIUDoEHB7BH/Ojjk75k7scKNDgNAhQOgQIHQIEDoECB0ChA4BQocAoUOA0CFA6BAgdAgQOgQIHQKEDgFChwChQ4DQIUDoECB0CBA6BAgdAoQOAUKHgGut9ew+5FMewbdjzo65Ezvc6BAgdAgQOgQIHQKEDgFChwChQ4DQIUDoECB0CBA6BAgdAoQOAUKHAKFDgNAhQOgQIHQIEDoECB0ChA4BQocAoUOA0CHg9gj+nB1zdsyd2OFGhwChQ4DQIUDoECB0CBA6BAgdAoQOAUKHAKFDgNAhQOgQIHQIEDoECB0ChA4BQocAoUOA0CFA6BAgdAgQOgQIHQKEDgHXWuvZfcinPIJvx5wdcyd2uNEhQOgQIHQIEDoECB0ChA4BQocAoUOA0CFA6BAgdAgQOgQIHQKEDgFChwChQ4DQIUDoECB0CBA6BAgdAoQOAUKHAKFDwO0R/Dk75uyYO7HDjQ4BQocAoUOA0CFA6BAgdAgQOgQIHQKEDgFChwChQ4DQIUDoECB0CBA6BAgdAoQOAUKHAKFDgNAhQOgQIHQIEDoECB0CrrXWs/uQT3kE3445O+ZO7HCjQ4DQIUDoECB0CBA6BAgdAoQOAUKHAKFDgNAhQOgQIHQIEDoECB0ChA4BQocAoUOA0CFA6BAgdAgQOgQIHQKEDgFCh4DbI/hzdszZMXdihxsdAoQOAUKHAKFDgNAhQOgQIHQIEDoECB0ChA4BQocAoUOA0CFA6BAgdAgQOgQIHQKEDgFChwChQ4DQIUDoECB0CBA6BFxrrWf3IZ/yCL4dc3bMndjhRocAoUOA0CFA6BAgdAgQOgQIHQKEDgFChwChQ4DQIUDoECB0CBA6BAgdAoQOAUKHAKFDgNAhQOgQIHQIEDoECB0ChA4Bt0fw5+yYs2PuxI4/s1DKOQOeaBIAAAAASUVORK5CYII=", alt: "" })));
}
//# sourceMappingURL=color-preview.js.map