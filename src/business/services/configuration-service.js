// what should this do?
// we have settings we need also an equation 
// equation: d{theta_i}/dt = omega_i + (K/N)\sum_{j=1}^N{sin(theta_j - theta_i)} (all oscillators coupled to each other by some coupling factor K)

// allows us to manage the configuration-properties on the application state 
const ApplicationState = require("../application-state");
const { ipcMain } = require("electron");
const createOscillator = require("../oscillators/oscillator-factory");

const setCouplingFactor = (K) => new Promise((res, rej) => {
    ApplicationState.couplingFactor = K;
    res(ApplicationState.couplingFactor);
});

const setOscillators = (numOscillators) => new Promise((res, rej) => {
    console.log(numOscillators);
    if (numOscillators <= 0) {
        rej("Number of oscillators must be at least 1!");
    }

    const oscillators = [];
    for (let i = 0; i < numOscillators; i++) {
        oscillators.push(createOscillator());
    }

    ApplicationState.oscillators = oscillators;
    res(oscillators);
});

module.exports = () => {
    // service configuration 
    const {
        SET_COUPLING_FACTOR,
        SET_NUM_OSCILLATORS
    } = require("../../common/commands/configuration-commands");

    ipcMain.handle(SET_COUPLING_FACTOR, async (e, couplingFactor) => await setCouplingFactor(couplingFactor));

    ipcMain.handle(SET_NUM_OSCILLATORS, async (e, numOscillators) => await setOscillators(numOscillators));
}
