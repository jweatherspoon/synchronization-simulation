import UiOscillator from "../ui-model/UiOscillator";

const { ipcRenderer } = window.require("electron");
const { SET_COUPLING_FACTOR, SET_NUM_OSCILLATORS } = require("../../common/commands/configuration-commands");

export const setCouplingFactor = async (couplingFactor) => await ipcRenderer.invoke(SET_COUPLING_FACTOR, couplingFactor);

export const setNumberOfOscillators = async (numOscillators) => {
    const canvasWidth = 500;
    const canvasHeight = 500;

    const oscillators = await ipcRenderer.invoke(SET_NUM_OSCILLATORS, numOscillators);
    return oscillators.map(o => new UiOscillator(o, canvasWidth, canvasHeight));
}