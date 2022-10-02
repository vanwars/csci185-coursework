function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    // background("#456abc");
    
    // invoke draw smiley:
    // drawSmiley(10, 70, 300);
    // drawSmiley(100, 270, 100);
    // drawSmiley(500, 900, 50);
    // drawSmiley(250, 70, 300);
    // drawGrid(canvasWidth, canvasHeight)
}



function drawSmiley(x, y, diameter) {
    //fill('yellow');
    circle(x, y, diameter); // x, y, diameter
}

let r = 0;
let g = 0;
let b = 0;
function mouseDragged() {
    r = (r+3) % 256;
    g = (g+1) % 256;
    b = (b+2) % 256;
    fill(color(r, g, b));
    //fill('pink');
    drawSmiley(mouseX, mouseY, Math.random() * 100 + 5);
  }

