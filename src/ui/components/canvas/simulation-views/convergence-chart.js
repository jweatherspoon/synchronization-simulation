import Chart from "chartjs";
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

let chart;

const drawConvergenceChart = (ctx, oscillators) => {
    if (ctx && oscillators) {
        if (!chart) {
            chart = new Chart(ctx, {
                type: 'line',
                data,
                options: {}
            });
        }

        chart.redraw();
    }
}

export default drawConvergenceChart;