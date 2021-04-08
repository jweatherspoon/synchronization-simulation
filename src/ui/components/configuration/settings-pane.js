import "./configuration.css";

const SettingsPane = (props) => {
    const {
        settings: {
            couplingFactor,
            numOscillators
        },
        onChangeSetting,
        onTick
    } = props;

    return (
        <div id="settings-pane">
            <label htmlFor="couplingFactor">Coupling Factor</label>
            <input type="number" name="couplingFactor" value={couplingFactor} onChange={(e) => onChangeSetting("couplingFactor", e.target.value)} />
            <label htmlFor="numOscillators">Number of Oscillators</label>
            <input type="number" name="numOscillators" value={numOscillators} onChange={(e) => onChangeSetting("numOscillators", e.target.value)} />
            <button onClick={onTick}>Update One Tick</button>
        </div>
    );
}

export default SettingsPane;