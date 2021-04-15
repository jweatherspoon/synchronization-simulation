import "./oscillators.css";

const SimulationCanvas = ({ oscillators, drawCanvas }) => (
    <canvas id="oscillator-canvas" ref={c => {
        const ctx = c?.getContext("2d");
        if (ctx && drawCanvas) {
            drawCanvas(ctx, oscillators);
        }
    }} width={500} height={500}></canvas>
)

export default SimulationCanvas;