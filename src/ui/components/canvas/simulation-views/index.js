import drawConvergenceChart from "./convergence-chart";
import displayOscillators from "./display-oscillators";

const SIMULATION_VIEWS = {
    "Display Oscillators": displayOscillators,
    "Convergence Chart": drawConvergenceChart,
};

export default SIMULATION_VIEWS;