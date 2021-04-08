class UiOscillator {
    x = 0;
    y = 0;
    isActive = false;

    _theta = 0;
    _naturalFrequency = 0;

    constructor(oscillator, canvasWidth, canvasHeight) {
        this.x = (oscillator._position?.x || 0) * canvasWidth;
        this.y = (oscillator._position?.y || 0) * canvasHeight;
        this.isActive = oscillator._theta > 0 && oscillator._theta < (Math.PI / 180)

        this._theta = oscillator._theta;
        this._naturalFrequency = oscillator._naturalFrequency;
    }
}

export default UiOscillator;