const uuidv4 = require("uuid").v4;
const Oscillator = require("./oscillator");

const createOscillator = () => {
    const naturalFrequency = Math.random() * Math.PI * 2;
    return new Oscillator(uuidv4(), naturalFrequency, {
        x: Math.random(),
        y: Math.random()
    });
}

module.exports = createOscillator;