const createOscillator = require("../oscillators/oscillator-factory");

/**
 * Holds the oscillator state for the application
 */
class OscillationState {
    _oscillators = [];
    
    /**
     * Get the current oscillators state
     */
    get Oscillators() {
        return this._oscillators;
    }
    
    /**
     * Clear the current state and add the given number of oscillators to it after
     * @param {number} numOscillators - The number of oscillators to create after clearing the current state
     */
    resetOscillators(numOscillators) {
        this._clearOscillators();
        for (let i = 0; i < numOscillators; i++) {
            const oscillator = createOscillator();
            this.addOscillator(oscillator);
        }
    }

    /**
     * Clear the current state and replace it with the passed in oscillators
     * @param {Oscillator[]} oscillators - The oscillators to set
     */
    setOscillators(oscillators) {
        this._clearOscillators();
        for (let oscillator of oscillators) {
            this.addOscillator(oscillator);
        }
    }

    /**
     * Add an oscillator to the current state
     * @param {Oscillator} oscillator - The oscillator to add
     */
    addOscillator(oscillator) {
        this.Oscillators.push(oscillator);
    }

    /**
     * Clears the oscillator state
     */
    _clearOscillators() {
        this._oscillators = [];
    }
}

module.exports = OscillationState;