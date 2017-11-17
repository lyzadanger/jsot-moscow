The examples herein use either an Arduino Uno R3 or Tessel 2 development board. You'll need to perform a one-time setup on these boards before using them with Johnny-Five.

### Prepare Arduino Uno for Use with Johnny-five

You need to flash the Arduino Uno's microcontroller with firmata firmware:

1. Download and launch the free Arduino Uno IDE software
1. Connect your Arduino Uno to your computer's USB port
1. Under `Tools -> Board`, make sure your board (Arduino / Genuino Uno) is selected
1. Open the `StandardFirmataPlus` sketch: go to `File -> Examples -> Firmata -> StandardFirmataPlus`
1. Upload the sketch to your Uno

### Setting up a New Tessel 2 for Use with Johnny-Five

See the great [getting-started guide on Tessel's site](http://tessel.github.io/t2-start/).

You'll need to install the `t2-cli` package globally:

```
$ npm install -g t2-cli
```

This will give you the `t2` CLI utility, which you'll use for such things as:

* `t2 init` to set up a Tessel project
* `t2 list` to list all nearby Tessels
* `t2 run` to deploy and run a project on a Tessel

_Note_: The npm package is named `t2-cli` but the utility it installs is called `t2`.

### Creating Tessel Projects with Johnny-Five

When setting up new projects with Tessel 2 and Johnny-Five, you'll need to:

1. Run the `t2 init` command in the project's directory. You only need to do this once (per project).
1. Make sure to install the `tessel-io` dependency (I/O plugin) in addition to `johnny-five`
