// allows us to manage the configuration-properties on the application state 
const ElectronService = require("./electron-service");
const ApplicationState = require("../state/application-state");
const ConfigurationConstants = require('../../common/commands/configuration-commands');

/**
 * The configuration service
 */
class ConfigurationService extends ElectronService {
    /**
     * Create a configuration service
     */
    constructor() {
        super();
        this.registerEventHandler(ConfigurationConstants.SET_NUM_OSCILLATORS, this.setOscillators);
        this.registerEventHandler(ConfigurationConstants.SET_COUPLING_FACTOR, this.setCouplingFactor);
    }

    /**
     * Set the coupling factor on the application state
     * @param {event} e - The event
     * @param {number} couplingFactor - The coupling factor to set
     * @returns The set coupling factor
     */
    setCouplingFactor = async (e, couplingFactor) => new Promise((res, rej) => {
        ApplicationState.CouplingFactor = couplingFactor;
        res(ApplicationState.CouplingFactor);
    });

    /**
     * Create and set the oscillators used in the application
     * @param {event} e - The event
     * @param {number} numOscillators - The number of oscillators to create
     * @returns The created oscillators
     */
    setOscillators = (e, numOscillators) => new Promise((res, rej) => {
        ApplicationState.OscillationState.resetOscillators(numOscillators);
        res(ApplicationState.OscillationState.Oscillators);
    });
}

module.exports = new ConfigurationService();