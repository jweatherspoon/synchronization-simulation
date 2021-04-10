const { ipcMain } = require("electron");
const { APPLICATION_STATE_UPDATED } = require("../common/events/application-state-events");

class ApplicationState {
    _couplingFactor = 1;
    _oscillators = [];
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
        if (value && typeof(value) === "number") {
            this._tickRate = Math.max(1, value);
        }
    }

    /**
     * Get the frequency at which the simulation updates in Hz
     */
    get UpdateFrequency() {
        return 1000 / this.TickRate;
    }
}

module.exports = new ApplicationState();