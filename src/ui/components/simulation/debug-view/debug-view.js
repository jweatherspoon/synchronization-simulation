import "./debug-view.css";

const DebugView = (props) => {
    const {
        oscillators
    } = props;

    return (
        <div> 
            {oscillators?.map((osc, i) => (
                <div className={`oscillator-info ${osc.IsActive ? "active" : ""}`}>
                    <p>
                        Angle: {osc.Angle || "0"} rad
                    </p>
                </div>
            ))}
        </div>
    )
}

export default DebugView;