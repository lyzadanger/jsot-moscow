The examples herein use either an Arduino Uno R3 or Tessel 2 development board. You'll need to perform a one-time setup on these boards before using them with Johnny-Five.

### Prepare Arduino Uno for Use with Johnny-five

You need to flash the Arduino Uno's microcontroller with firmata firmware:

. Download and launch the free Arduino Uno IDE software
. Connect your Arduino Uno to your computer's USB port
. Under `Tools -> Board`, make sure your board (Arduino / Genuino Uno) is selected
. Open the `StandardFirmataPlus` sketch: go to `File -> Examples -> Firmata -> StandardFirmataPlus`
. Upload the sketch to your Uno

### Setting up a New Tessel 2 for Use with Johnny-Five

See the great [getting-started guide on Tessel's site](http://tessel.github.io/t2-start/).

### Creating Tessel Projects with Johnny-Five

When setting up new projects with Tessel 2 and Johnny-Five, you'll need to:

. Run the `t2 init` command in the project's directory. You only need to do this once (per project).
. Make sure to install the `tessel-io` dependency (I/O plugin) in addition to `johnny-five`
