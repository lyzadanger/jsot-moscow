const five = require('johnny-five');
const board = new five.Board();
board.on('ready', () => {
  const blinkyLED = new five.Led(13);
  blinkyLED.blink(1000);
});
