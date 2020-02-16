//This code is adapted from fade.js by Niels Doorn https://gist.github.com/nielsdoorn/8631319

var smarti = require("Smartibot");

//a function to turn the eyes off
function off() {
smarti.setLEDs([0,0,0], [0,0,0]);
//console.log("off");
}

//turn off eyes on startup
off();

//variables for the direction of fade, position in the fade and red, green and blue values for the eye colour
var dir = -1;
var pos = 0;
var r,g,b;

function flow() {

  //Switches from fading up to fading down at full brigtness and vice versa at minimum brightness
  if (pos > 255 || pos < 1) {
    dir *= -1;
  }
  //generates a random colour each time the eyes fade in and out
  if (pos < 1) {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    //console.log("flow:",r,g,b,dir,pos);
  }
  //increments the fade each time the flow() function runs
  pos += (dir*15);
  //sends the red, green and blue values to the eyes
  doLights(r,g,b,dir,pos);
}

//function to send the red, green and blue values to the eyes
function doLights(r,g,b,dir,pos) {

var led1 = Math.sin(pos/255)*r;
var led2 = Math.sin(pos/255)*g;
var led3 = Math.sin(pos/255)*b;
var led4 = Math.sin(pos/255)*r;
var led5 = Math.sin(pos/255)*g;
var led6 = Math.sin(pos/255)*b;
    //console.log("doLights:",led1,led2,led3,led4,led5,led6);

    smarti.setLEDs([led1,led2,led3],[led4,led5,led6]);
}

//makes the flow() function run every 90 miliseconds
setInterval(flow, 90);


//off();
