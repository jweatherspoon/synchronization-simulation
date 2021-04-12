import { tryInvokeEvent } from ".";
import SimulationCommands from "../../common/commands/simulation-commands"
import UiOscillator from "../ui-model/UiOscillator";

export const tick = async () => {
    const oscillators = await tryInvokeEvent(SimulationCommands.UPDATE_OSCILLATORS);
    const uiOscillators = oscillators?.map(o => new UiOscillator(o, 500, 500)) || [];
    return uiOscillators;
}