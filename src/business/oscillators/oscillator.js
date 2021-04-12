class Oscillator {
    _id = "";
    _theta = 0;
    _naturalFrequency = 0;
    _position = {
        x: 0,
        y: 0
    }

    /**
     * Create an oscillator
     * @param {string} id - The oscillator id
     * @param {number} naturalFrequency - The oscillator's natural frequency in rad/sec
     * @param {object} position - An object containing the oscillator's x y position info
     * @param {number} angle - The oscillator's position on the circle in radians (defaults to 0)
     */
    constructor(id, naturalFrequency, position, angle=0) {
        this._id = id;
        this._naturalFrequency = naturalFrequency;
        this._position = position || { x: 0, y: 0 };
        this._theta = angle;
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
     * Clone the oscillator 
     * @param {number} dTheta - The change in the oscillator angle to apply to the clone
     * @returns A clone of the current oscillator - optionally with a modified angle 
     */
    clone(dTheta=0) {
        const newAnglePreMod = this._theta + (dTheta || 0);
        const newAngle = newAnglePreMod % (Math.PI * 2);
        return new Oscillator(this._id, this.NaturalFrequency, this._position, newAngle);
    }

    toObject = () => ({
        Angle: this.Angle,
        NaturalFrequency: this.NaturalFrequency,
        Position: this._position
    })
}

module.exports = Oscillator;