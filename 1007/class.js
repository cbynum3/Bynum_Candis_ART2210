let bug; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  bug = new Jitter();
}

function draw() {
  background(254,50,0);
  bug.move();
  bug.display();
  
}


class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(30, 30);
    this.speed = 10;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}