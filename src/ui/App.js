import './App.css';

import { Component } from "react";
import SettingsPane from './components/configuration/settings-pane';
import OscillatorCanvas from './components/canvas/oscillator-canvas';
import { setCouplingFactor, setNumberOfOscillators } from './ui-services/configuration-ui-service';
import { tick } from './ui-services/simulation-ui-service';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oscillators: []
        }

        this._tickRate = 200;
        this._defaultOscillatorCount = 2;
        this._defaultCouplingFactor = this._defaultOscillatorCount / 2;
    }

    /**
     * subscribe to the app state changed event 
     */
    componentDidMount() {
        this.updateSetting("numOscillators", this._defaultOscillatorCount);
        this.updateSetting("couplingFactor", this._defaultCouplingFactor);
        this.updateSetting("tickRate", this._tickRate);
    }

    /**
     * unsub from app state changed event
     */
    componentWillUnmount() {
        clearInterval(this._interval);
    }

    /**
     * render the application
     */
    render() {
        return (
            <header className="split App-header">
                <OscillatorCanvas oscillators={this.state?.oscillators || []} />
                <SettingsPane settings={{
                    couplingFactor: this.state?.couplingFactor || 1,
                    numOscillators: this.state?.numOscillators || 1,
                    tickRate: this._tickRate,
                }} onChangeSetting={this.updateSetting} onTick={this.onTick} />
            </header>
        )
    }

    /**
     * update the component state in response to an app state updated event 
     * @param {*} event 
     * @param {*} newState 
     */
    updateApplicationState = (event, newState) => {
        this.setState({
            ...this.state,
            ...newState
        });
    }

    updateSetting = async (settingName, value) => {
        if (settingName === "numOscillators") {
            const oscillators = await setNumberOfOscillators(value);
            this.setState({
                oscillators,
                numOscillators: oscillators.length,
            })
        }
        else if (settingName === "couplingFactor") {
            const couplingFactor = await setCouplingFactor(value);
            this.setState({
                couplingFactor
            });
        }
        else if (settingName === "tickRate") {
            if (!value || value <= 0) {
                value = 10; // 10ms by default 
            }

            this._tickRate = value;
            this.restartSimulation();
        }
    }

    onTick = async () => {
        const oscillators = await tick() || [];
        this.setState({
            oscillators,
            numOscillators: oscillators.length,
        })
    }

    restartSimulation = () => {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }

        this._interval = setInterval(async () => {
            await this.onTick();
        }, this._tickRate);
    }
}

export default App;
