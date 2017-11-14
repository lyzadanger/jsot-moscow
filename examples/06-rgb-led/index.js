const five    = require('johnny-five');
const board   = new five.Board();
const colors  = [
  '#ff0000', // red
  '#ff7f00', // orange
  '#ffff00', // yellow
  '#00ff00', // green
  '#0000ff', // blue
  '#4b0082', // indigo
  '#9400D3'  // violet
];

board.on('ready', () => {
  const rgb        = new five.Led.RGB({ pins: [3, 5, 6] });
  var colorIndex   = 0;
  setInterval(() => {
    rgb.color(colors[colorIndex]);
    colorIndex++;
    if (colorIndex >= colors.length) {
      colorIndex = 0;
    }
  }, 1000);
});
