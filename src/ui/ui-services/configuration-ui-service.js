import { tryInvokeEvent } from ".";
import UiOscillator from "../ui-model/UiOscillator";
const { SET_COUPLING_FACTOR, SET_NUM_OSCILLATORS } = require("../../common/commands/configuration-commands");

export const setCouplingFactor = async (couplingFactor) => await tryInvokeEvent(SET_COUPLING_FACTOR, couplingFactor);

export const setNumberOfOscillators = async (numOscillators) => {
    const canvasWidth = 500;
    const canvasHeight = 500;

    const oscillators = await tryInvokeEvent(SET_NUM_OSCILLATORS, numOscillators);
    return oscillators.map(o => new UiOscillator(o, canvasWidth, canvasHeight));
}