const OscillationStrategy = require("./oscillation-strategy");
const ApplicationState = require("../../application-state");

/**
 * The default strategy for updating oscillators
 */
class DefaultOscillationStrategy extends OscillationStrategy {
    /**
     * Create a default oscillation strategy
     */
    constructor() {
        super("default");
    }

    /**
     * Update an oscillator and return its new state
     * @param {Oscillator} oscillator - The oscillator to update
     * @param {number} updateFrequency - The simulation update frequency in Hz
     */
    updateOscillator(oscillator, updateFrequency) {
        // determine how the angle should change based on all the oscillators using kuramoto
        let modifier = 0;
        for (let otherOsc of ApplicationState.oscillators) {
            modifier += Math.sin(otherOsc._theta - oscillator._theta);
        }

        modifier *= ApplicationState.couplingFactor / ApplicationState.oscillators.length;

        const dtheta = (oscillator._naturalFrequency + modifier) / updateFrequency;
        const newState = oscillator.clone();
        newState._theta = (oscillator._theta + dtheta) % (Math.PI * 2);
        return newState;
    }
}

module.exports = DefaultOscillationStrategy;