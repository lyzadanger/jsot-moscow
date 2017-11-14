const five = require('johnny-five');
const Tessel = require('tessel-io');
const board = new five.Board({
  io: new Tessel()
});
board.on('ready', () => {
  const blinkyLED = new five.Led('L1');
  const blinkyLED2 = new five.Led('L2');
  blinkyLED.blink(250);
  blinkyLED2.blink(500);
});
