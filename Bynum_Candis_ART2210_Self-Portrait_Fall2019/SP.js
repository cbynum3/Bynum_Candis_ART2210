function setup(){

    createCanvas (windowWidth,windowHeight);
    background(254,0,0);
    angleMode(DEGREES);
    }


function draw (){

    var skin = color(102, 58, 25);
    var skins = color(97, 53, 21);
    noStroke();

    //face
    fill(skin);
    ellipse(600,300,375,450);

    //eye whites
    fill(255,255,255);
    ellipse(500,280,100,50);

    //pupil and iris
    fill(50, 29, 13)
    ellipse(500,280, 40, 40);
    fill(0,0,0);
    ellipse(500, 280, 25, 25);

    //hair/hat
    fill(33, 17, 5);
    ellipse(800,170,350,350);
    arc(615, 237, 375, 345, 195, 20 , CHORD);

    //nose
    fill(skin);
    triangle(370, 375, 418, 310, 460, 375);


    //ear
    fill(skins);
    arc(600, 300, 100, 100, 270 , 90, CHORD);

    //earring
    noFill();
    stroke(209, 152, 9 );
    strokeWeight(4);
    ellipse(600,410, 140, 140);



}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(254,0,0);
}