var myred = 242;
var mygreen = 90;
var myblue = 250;


function circle(x, y, diameter) {
ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(640, 480);
  background(255);
  strokeWeight(4);
  stroke(0);

var x = 0;
while (x <= width) {
  fill(204, 255, 0);
  ellipse (x, 100, 50, 25);
  x = x + 25;
}
for (var x = 0; x <= width; x = x +50) {
  fill(230, 41, 16);
  ellipse(x, 300, 75, 50);
}

  }

function draw() {
fill(myred, mygreen, myblue);
noStroke();
circle(mouseX, mouseY, 20, 20);

myred = myred - .5;
  if (myred > 255) {
    myred = 0;
  }
  
myblue = myblue - .5;
  if (myblue <= 0) {
    myblue = 255;
  }

mygreen = mygreen - .5;
  if (mygreen <= 0) {
    mygreen = 255;
  }
if (mouseIsPressed){
  noStroke();
  fill(255, 255, 255);
  ellipse(mouseX, mouseY, 35, 25);
  if(mouseIsPressed == false){
  fill(myred, mygreen, myblue);
  
  }
}
}
  

  
