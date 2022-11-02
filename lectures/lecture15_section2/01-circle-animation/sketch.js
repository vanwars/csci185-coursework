const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    for (let i = 0; i < 1000; i++) {
        circle(Math.random()*canvasWidth, Math.random()*canvasHeight, Math.random()*30);
    }
}

function draw() {
    clear();
    frameRate(5);
    
    for (let i = 0; i < 1000; i++) {
        circle(Math.random()*canvasWidth, Math.random()*canvasHeight, Math.random()*30);
    }
}
