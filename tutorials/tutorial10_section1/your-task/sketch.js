const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(425, 225, 200);

    drawGrid(canvasWidth, canvasHeight);
}

// replace this function with YOUR creature!
function drawCreature(x, y, width, primaryColor='hotpink', secondaryColor='black') {
    fill(primaryColor);
    stroke(secondaryColor);
    circle(x, y, width);

    noStroke();
    fill('black');
    textSize(16);
    textAlign(CENTER);
    text("Replace with your creature", x, y);
}
