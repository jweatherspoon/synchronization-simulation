const DefaultOscillationStrategy = require("./default-oscillation-strategy");

const defaultStrategy = new DefaultOscillationStrategy();
const allStrategies = [
    defaultStrategy,
];

/**
 * Get a simulation strategy by name
 * @param {string} strategyName - The name of the strategy to get
 * @returns A simulation strategy with the given name, or the default strategy
 */
const getSimulationStrategy = (strategyName) => {
    const strategy = allStrategies.find(strat => strat.Name === strategyName) || defaultStrategy;
    return strategy;
}

module.exports = {
    getSimulationStrategy
};