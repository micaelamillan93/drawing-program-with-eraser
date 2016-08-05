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
  ellipse(mouseX, mouseY, 25, 25);
  if(mouseIsPressed == false){
  fill(myred, mygreen, myblue);
  }
}
}
  

  
