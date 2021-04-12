const OscillationState = require("./oscillation-state");

/**
 * Holds the state of the application
 */
class ApplicationState {
    _couplingFactor = 1;
    _oscillationState = new OscillationState();
    _tickRate = 1000;

    /**
     * Get the tick rate of the simulation in ms
     */
    get TickRate() {
        return this._tickRate;
    }

    /**
     * Set the tick rate of the simulation in ms (min 1ms)
     */
    set TickRate(value) {
        if (value) {
            this._tickRate = Math.max(1, value);
        }
    }

    /**
     * Get the frequency at which the simulation updates in Hz
     */
    get UpdateFrequency() {
        return 1000 / this.TickRate;
    }

    /**
     * Get the coupling factor used in Kuramoto's model
     */
    get CouplingFactor() {
        return this._couplingFactor;
    }

    /**
     * Set the coupling factor used in Kuramoto's model
     */
    set CouplingFactor(value) {
        this._couplingFactor = Math.max(0, value);
    }

    /**
     * The oscillation-related state of the application
     */
    get OscillationState() {
        return this._oscillationState;
    }
}

module.exports = new ApplicationState();