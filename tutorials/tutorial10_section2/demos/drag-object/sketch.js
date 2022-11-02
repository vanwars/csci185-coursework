const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const data = { x: 100, y: 100, d: 100, color: 'white' };
const data1 = { x: 200, y: 200, d: 100, color: 'white' };

let activeShape = data;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// always running:
function draw() {
    clear();
    fill(data.color);
    circle(data.x, data.y, data.d); // where this draws
    circle(data1.x, data1.y, data1.d);
}

function mouseDragged() {
    // detecting which shape to move:
    let distance = dist(data.x, data.y, mouseX, mouseY);
    if (distance < data.d/2) {
        console.log("First circle");
        activeShape = data;
    } else {
        console.log("Second circle");
        activeShape = data1;
    }

    // moving the correct shape:
    activeShape.x = mouseX;
    activeShape.y = mouseY;
}


function mouseReleased() {
    // data.color = 'white';
}
