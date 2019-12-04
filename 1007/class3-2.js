function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);
    ellipseMode(RADIUS);
}
var ball = {
    x: 300,		
    y: 200,		
    xspeed: 4,
    yspeed: -3
}
var speed = 0.5;
var direction = 1;

var radius = 40;
var x = 110;
var speed = 50;
var direction = 1;

function draw() {
background(0);
x += speed * direction;
if ((x > width-radius) || (x < radius)) {
direction = -direction;
}
if (direction == 1) {
ellipse(x, 60, radius, radius, 0.52, 5.76); 
} else {
ellipse(x, 60, radius, radius, 3.67, 8.9); 
}
}