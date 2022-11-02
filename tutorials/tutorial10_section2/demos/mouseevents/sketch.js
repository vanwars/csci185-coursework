const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
   
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function mouseClicked() {
    circle(mouseX, mouseY, Math.random()* 50 + 50);
}

function mouseDragged() {
    rect(
        mouseX, 
        mouseY, 
        Math.random()* 50 + 50, 
        Math.random()* 50 + 50
    );
}

