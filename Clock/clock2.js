function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
  }
 

  
  
  function draw() {
    background(0);
    translate(200, 200);
    rotate(-90);
 
  
    let hours = hour();
    let minutes = minute();
    let seconds = second();
    let x = Math.min(width, height) * 0.9;
    

    strokeWeight(8);
    stroke(255, 195, 0);
    noFill();
    let sA = map(seconds, 0, 60, 0, 360);
    arc(-50, 400, 400, 400, 0, sA);
 
    stroke(255, 87, 51);
    let mA = map(minutes, 0, 60, 0, 360);
    arc(-50, 400, 380, 380, 0, mA);
 
    stroke(199, 0, 57 );
    let hA = map(hours % 12, 0, 12, 0, 360);
    arc(-50, 400, 360, 360, 0, hA);
  
 
    strokeWeight(3);
    stroke(255, 87, 51);
    fill(255);
    textSize(75);
    rotate(90);
	let clockText = [
			floor(hours),
			floor(minutes),
			floor(seconds)
		]
		.map(n => ('0' + n).slice(-2))
		.join(':');
	text(clockText, 265, 60);
  textFont("Mansalva")


}
