var colors;


function setup(){
    createCanvas(windowWidth,windowHeight);
    colors = {
        name: "Almond",
        col: "#EFDECD"

    }
}
function draw(){
    background(0);
    fill(colors.col);
    text(colors.name, 575, 250, 100);

}