const { ipcMain } = require("electron");

/**
 * The base electron service type
 */
class ElectronService {
    /**
     * Map of event name => event handler
     */
    _eventHandlers = {};

    /**
     * Configure the service 
     */
    configureService() {
        const eventHandlers = Object.entries(this._eventHandlers);
        for (let [eventName, eventHandler] of eventHandlers) {
            ipcMain.handle(eventName, async (e, ...args) => await eventHandler(e, ...args));
        }
    }
    
    /**
     * Register a handler for the given event
     * @param {string} eventName The name of the event
     * @param {function} callback The event handler that will be called when receiving the event
     */
    registerEventHandler(eventName, callback) {
        this._eventHandlers[eventName] = callback;
    }
}

module.exports = ElectronService;