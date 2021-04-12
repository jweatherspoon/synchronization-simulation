class UiOscillator {
    x = 0;
    y = 0;

    _theta = 0;
    _naturalFrequency = 0;
    _activationDistance = 0;

    /**
     * Create a renderable oscillator model 
     * @param {Oscillator} oscillator - The backing oscillator data
     * @param {number} canvasWidth - The width of the display canvas
     * @param {number} canvasHeight - The height of the display canvas
     * @param {number} activationDistance - The distance from 0-x radians where the oscillator is active
     */
    constructor(oscillator, canvasWidth, canvasHeight, activationDistance = (Math.PI / 180)) {
        this.x = (oscillator.Position?.x || 0) * canvasWidth;
        this.y = (oscillator.Position?.y || 0) * canvasHeight;
        
        this._theta = oscillator.Angle;
        this._activationDistance = activationDistance;
        this._naturalFrequency = oscillator.NaturalFrequency;
    }
    
    /**
     * Get the oscillators current angle
     */
    get Angle() {
        return this._theta;
    }

    /**
     * Get this oscillator's natural oscillating frequency
     */
    get NaturalFrequency() {
        return this._naturalFrequency;
    }

    /**
     * Returns true if this oscillator is in its active state
     */
    get IsActive() {
        const negativeRange = (Math.PI * 2) - this._activationDistance;
        return this.Angle > negativeRange || this.Angle < this._activationDistance
    }
}

export default UiOscillator;