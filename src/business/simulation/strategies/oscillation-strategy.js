/**
 * Represents a strategy for updating an oscillator's state
 */
class OscillationStrategy {
    _strategyName = "";
    
    /**
     * Create an oscillation strategy
     * @param {string} strategyName - The name of the strategy
     */
    constructor(strategyName) {
        if (!strategyName) {
            throw "Derived strategies must call the base constructor with a strategy name";
        }

        this._strategyName = strategyName;
    }

    /**
     * Get the name of the strategy
     */
    get Name() {
        return this._strategyName;
    }

    /**
     * Update an oscillator and return its new state
     * @param {Oscillator} oscillator - The oscillator to update
     * @param {number} updateFrequency - The simulation update frequency in Hz
     */
    updateOscillator(oscillator, updateFrequency) {
        throw "Derived strategies must implement this method";
    }
}

module.exports = OscillationStrategy;