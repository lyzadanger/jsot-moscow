const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const thermo = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  });
  thermo.on('change', () => {
    console.log(`${thermo.celsius}°C`);
  });
});
