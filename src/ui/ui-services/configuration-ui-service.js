import { tryInvokeEvent } from ".";
import UiOscillator from "../ui-model/UiOscillator";
const ConfigurationCommands = require("../../common/commands/configuration-commands");

export const setCouplingFactor = async (couplingFactor) => await tryInvokeEvent(ConfigurationCommands.SET_COUPLING_FACTOR, couplingFactor);

export const setNumberOfOscillators = async (numOscillators) => {
    const canvasWidth = 500;
    const canvasHeight = 500;

    const oscillators = await tryInvokeEvent(ConfigurationCommands.SET_NUM_OSCILLATORS, numOscillators);
    return oscillators.map(o => new UiOscillator(o, canvasWidth, canvasHeight));
}

export const setTickRate = async (tickRate) => await tryInvokeEvent(ConfigurationCommands.SET_TICK_RATE, tickRate);