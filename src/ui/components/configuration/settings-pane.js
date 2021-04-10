import "./configuration.css";

const SettingsPane = (props) => {
    const {
        settings: {
            couplingFactor,
            numOscillators,
            tickRate
        },
        onChangeSetting,
    } = props;

    return (
        <div id="settings-pane">
            <label htmlFor="couplingFactor">Coupling Factor</label>
            <input type="number" name="couplingFactor" value={couplingFactor} onChange={(e) => onChangeSetting("couplingFactor", e.target.value)} />
            <label htmlFor="numOscillators">Number of Oscillators</label>
            <input type="number" name="numOscillators" value={numOscillators} onChange={(e) => onChangeSetting("numOscillators", e.target.value)} />
            <label htmlFor="tickRate">Tick Rate (ms)</label>
            <input type="number" name="tickRate" value={tickRate} onChange={(e) => onChangeSetting("tickRate", e.target.value)} />
        </div>
    );
}

export default SettingsPane;