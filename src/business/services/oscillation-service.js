const { ipcMain } = require('electron');
const ApplicationState = require('../application-state');
const Oscillator = require('../oscillators/oscillator');

const getUpdatedOscillator = (oscillator) => {
    // determine how the angle should change based on all the oscillators using kuramoto
    // eq: dtheta = omega * sum(sin(oj - oi))
    let modifier = 0;
    for (let osc of ApplicationState.oscillators) {
        modifier += Math.sin(osc._theta - oscillator._theta);
    }

    modifier *= ApplicationState.couplingFactor / ApplicationState.oscillators.length;

    const dtheta = oscillator._naturalFrequency + modifier;
    const newState = oscillator.clone();
    newState._theta = (oscillator._theta + dtheta) % (Math.PI * 2);
    return newState;
}

// allows us to access the state of our oscillators 
const updateOscillators = () => new Promise((res, rej) => {
    const newState = [];
    for (let osc of ApplicationState.oscillators) {
        newState.push(getUpdatedOscillator(osc));
    }

    ApplicationState.oscillators = newState;
    res(newState);
})

module.exports = () => {
    const {
        UPDATE_OSCILLATORS 
    } = require('../../common/commands/simulation-commands');

    ipcMain.handle(UPDATE_OSCILLATORS, async (e) => await updateOscillators());
}