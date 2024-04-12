const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2);
}
let counter = 0;
let y = 0;
let x = canvasWidth / 2;
let width = 5;
function draw() {
    // fill('red');
    noFill();
    // 1. call the circle function
    // 2. how many times: 5
    // 3. What do we change each time?: y by 50

    // while (counter < 500) {
    circle(x, y, width);
    circle(x - 200, y, width);
    circle(x + 200, y, width);
    y += 4;
    width += 1;
    counter += 1; // don't forget to increment the counter
    // }

    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
