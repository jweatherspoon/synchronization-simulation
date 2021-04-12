const OscillationStrategy = require("./oscillation-strategy");
const ApplicationState = require("../../state/application-state");

/**
 * The default strategy for updating oscillators
 * d{theta_i}/dt = omega_i + (K/N)\sum_{j=1}^N{sin(theta_j - theta_i)} 
 * (all oscillators coupled to each other by some coupling factor K)
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
        if (!oscillator) {
            return; 
        }

        // determine how the angle should change based on all the oscillators using kuramoto
        let modifier = 0;
        for (let otherOsc of ApplicationState.OscillationState.Oscillators) {
            if (otherOsc) {
                modifier += Math.sin(otherOsc.Angle - oscillator.Angle);
            }
        }

        if (ApplicationState.OscillationState.Oscillators.length > 0) {
            modifier *= ApplicationState.CouplingFactor / ApplicationState.OscillationState.Oscillators.length;
        }

        const dtheta = (oscillator.NaturalFrequency + modifier) / updateFrequency;
        
        const newOsc = oscillator.clone(dtheta);
        return newOsc;
    }
}

module.exports = DefaultOscillationStrategy;