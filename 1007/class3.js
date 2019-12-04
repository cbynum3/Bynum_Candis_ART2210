function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255, 245, 0);
    ellipseMode(RADIUS);
}
function draw() {
background(0);
x += speed * direction;
if ((x > width-radius) || (x < radius)) {
direction = -direction; // Flip direction
}
if (direction == 1) {
arc(x, 60, radius, radius, 0.52, 5.76); // Face right
} else {
arc(x, 60, radius, radius, 3.67, 8.9); // Face left
}
}
