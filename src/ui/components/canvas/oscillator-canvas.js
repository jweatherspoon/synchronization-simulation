import "./oscillators.css";
import { Component } from "react";

class OscillatorCanvas extends Component {
    render() {
        return (
            <canvas id="oscillator-canvas" ref={(c) => this.drawCanvas(c?.getContext("2d"))}
                width={500} height={500}>
            </canvas>
        )
    }

    drawCanvas = (ctx) => {
        if (ctx && this.props.oscillators) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, 500, 500);

            for (let oscillator of this.props.oscillators) {
                this.drawOscillator(ctx, oscillator);
            }
        }
    }

    drawOscillator = (ctx, oscillator) => {
        const fillColor = oscillator.IsActive ? "yellow" : "gray";

        const oldFillColor = ctx.fillStyle;
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(oscillator.x, oscillator.y, 5, 0, Math.PI * 2)
        ctx.fill();
        ctx.fillStyle = oldFillColor;
    }
}

export default OscillatorCanvas;