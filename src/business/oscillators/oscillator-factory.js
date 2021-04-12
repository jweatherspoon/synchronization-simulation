const uuidv4 = require("uuid").v4;
const Oscillator = require("./oscillator");

const createOscillator = () => {
    // const naturalFrequency = Math.random() * Math.PI * 2;
    const naturalFrequency = Math.PI;
    return new Oscillator(uuidv4(), naturalFrequency, {
        x: Math.random(),
        y: Math.random()
    }, Math.random() * Math.PI * 2);
}

module.exports = createOscillator;