import { tryInvokeEvent } from ".";
import { UPDATE_OSCILLATORS } from "../../common/commands/simulation-commands"
import UiOscillator from "../ui-model/UiOscillator";

export const tick = async () => {
    const oscillators = await tryInvokeEvent(UPDATE_OSCILLATORS);
    return oscillators?.map(o => new UiOscillator(o, 500, 500)) || [];
}