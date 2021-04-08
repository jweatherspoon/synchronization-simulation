class Oscillator {
    _id = "";
    _theta = 0;
    _naturalFrequency = 0;
    _position = {
        x: 0,
        y: 0
    }

    constructor(id, naturalFrequency, position) {
        this._id = id;
        this._naturalFrequency = naturalFrequency;
        this._position = position || { x: 0, y: 0 };
    }

    clone() {
        const clonedOsc = new Oscillator(this._id, this._naturalFrequency, this._position);
        clonedOsc._theta = this._theta;
        return clonedOsc;
    }
}

module.exports = Oscillator;