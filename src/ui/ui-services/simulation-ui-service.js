import { UPDATE_OSCILLATORS } from "../../common/commands/simulation-commands"
import UiOscillator from "../ui-model/UiOscillator";
const { ipcRenderer } = window.require("electron");

export const tick = async () => {
    const oscillators = await ipcRenderer.invoke(UPDATE_OSCILLATORS);
    return oscillators.map(o => new UiOscillator(o, 500, 500));
}