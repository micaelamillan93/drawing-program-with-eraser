var myred = 242;
var mygreen = 90;
var myblue = 250;

function circle(x, y, diameter) {
ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(640, 480);
  background(255);
  }

function draw() {
  myblue = myblue - .25;
  mygreen = mygreen - .25;
  myred = myred - .25;
  fill (myred, mygreen, myblue);
  noStroke();
  circle(mouseX, mouseY, 10);
  
 
}