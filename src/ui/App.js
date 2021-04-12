import './App.css';

import { Component } from "react";
import SettingsPane from './components/configuration/settings-pane';
import OscillatorCanvas from './components/canvas/oscillator-canvas';
import { setCouplingFactor, setNumberOfOscillators } from './ui-services/configuration-ui-service';
import { tick } from './ui-services/simulation-ui-service';
import { setTickRate } from './ui-services/configuration-ui-service';

class App extends Component {
    _processingOnTick = false;
    _defaultOscillatorCount = 2;
    
    constructor(props) {
        super(props);
        this.state = {
            oscillators: [],
            tickRate: 200,
        }

        this._defaultCouplingFactor = this._defaultOscillatorCount / 2;
    }

    /**
     * subscribe to the app state changed event 
     */
    componentDidMount() {
        this.updateSetting("numOscillators", this._defaultOscillatorCount);
        this.updateSetting("couplingFactor", this._defaultCouplingFactor);
        this.updateSetting("tickRate", this.state.tickRate);
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
                    tickRate: this.state.tickRate,
                }} onChangeSetting={this.updateSetting} onTick={this.onTick} />
            </header>
        )
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
            const tickRate = await setTickRate(value);
            this.restartSimulation();
        }
    }

    onTick = async () => {
        if (this._processingOnTick) {
            return;
        }

        const oscillators = await tick() || [];
        this.setState({
            oscillators,
            numOscillators: oscillators.length,
        }, () => this._processingOnTick = false);
    }

    restartSimulation = (tickRate) => {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }

        this.setState({ tickRate });

        // fire and forget because we don't care when it gets rendered? I will also try a non-reentrant one 
        this._interval = setInterval(this.onTick, tickRate);
    }
}

export default App;
