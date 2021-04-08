const { ipcMain } = require("electron");
const { APPLICATION_STATE_UPDATED } = require("../common/events/application-state-events");

class ApplicationState {
    couplingFactor = 1;
    oscillators = [];

    invokeStateChangeEvent = () => {
        ipcMain.emit(APPLICATION_STATE_UPDATED, {
            couplingFactor: this.couplingFactor,
            oscillators: this.oscillators
        })
    }
}

module.exports = new ApplicationState();