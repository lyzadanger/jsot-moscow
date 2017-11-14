const five = require('johnny-five');
const Tessel = require('tessel-io');
const board = new five.Board({
  io: new Tessel()
});
board.on('ready', () => {
  const blinkyLED = new five.Led('A5');
  blinkyLED.pulse();
});
