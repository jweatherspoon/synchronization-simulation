const ApplicationState = require('../application-state');
const ElectronService = require('./electron-service');
const SimulationCommands = require("../../common/commands/simulation-commands");
const { getSimulationStrategy } = require('../simulation/strategies/simulation-strategy-factory');

/**
 * The simulation service
 */
class SimulationService extends ElectronService {
    /**
     * The strategy used to update oscillators on a simulation tick
     */
    _simulationStrategy = getSimulationStrategy("");

    /**
     * Create a simulation service
     */
    constructor() {
        super();
        this.registerEventHandler(SimulationCommands.UPDATE_OSCILLATORS, this.updateOscillators);
        this.registerEventHandler(SimulationCommands.SET_SIMULATION_STRATEGY, this.setSimulationStrategy);
    }

    /**
     * Update the state of each oscillator
     * @param {event} e - The event
     * @returns The updated oscillators
     */
    updateOscillators = async (e) => await new Promise((res, rej) => {
        const newState = ApplicationState.oscillators.map(osc => this._simulationStrategy.updateOscillator(osc, ApplicationState.TickRate));
        ApplicationState.oscillators = newState;
        res(newState);
    });

    /**
     * Set the strategy used by the service to update oscillators on a simulation tick
     * @param {event} e - The event information
     * @param {string} strategyName The name of the strategy to set
     */
    setSimulationStrategy = async (e, strategyName) => {
        this._simulationStrategy = getSimulationStrategy(strategyName);
    }
}

module.exports = new SimulationService();