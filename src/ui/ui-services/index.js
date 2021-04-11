const { ipcRenderer } = window.require("electron")

/**
 * Try to invoke an event and log the error if it fails
 * @param {string} eventName - Event name
 * @param  {...any} args - Optional extra args
 * @returns The return value of the awaited invocation
 */
const tryInvokeEvent = async (eventName, ...args) => {
    try {
        const returnValue = await ipcRenderer.invoke(eventName, ...args);
        return returnValue;
    }
    catch (err) {
        console.error(`Got error invoking ${eventName}:`, err);
    }
}

module.exports = {
    tryInvokeEvent
};