const drawOscillator = (ctx, oscillator) => {
    const fillColor = oscillator.IsActive ? "yellow" : "gray";

    const oldFillColor = ctx.fillStyle;
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(oscillator.x, oscillator.y, 5, 0, Math.PI * 2)
    ctx.fill();
    ctx.fillStyle = oldFillColor;
}

const displayOscillators = (ctx, oscillators) => {
    if (ctx && oscillators) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 500, 500);

        for (let oscillator of oscillators) {
            drawOscillator(ctx, oscillator);
        }
    }
}

export default displayOscillators;