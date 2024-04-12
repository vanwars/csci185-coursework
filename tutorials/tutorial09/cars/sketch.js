const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// feel free to change these values as you like!
const c1 = {
    x: 500,
    y: 400,
    width: 450,
    speed: 20,
    color: "lightblue",
};

const c2 = {
    x: 1000,
    y: 200,
    width: 150,
    speed: -10,
    color: "hotpink",
};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// animation loop:
function draw() {
    // clear the canvas:
    console.log("Screen Redraw");
    clear();

    // move the cars:
    // if (c1.x > canvasWidth + 400) {
    //     console.log("Car 1 jumps!");
    //     c1.x = -400;
    // }
    if (c2.x < -200) {
        console.log("Car 2 jumps!");
        c2.x = canvasWidth + 200;
    }
    if (c1.y > canvasHeight) {
        c1.y = -50;
    }
    // c1.x += c1.speed;
    c1.y = c1.y + 10;
    c2.x += c2.speed;

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
}

// this function's job is to draw a car based on the
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor = "black") {
    strokeWeight(0);

    // body
    fill(fillColor);
    rect(x - size / 4, y - (size / 5 + size / 7), size / 2, size / 7); // top
    rect(x - size / 2, y - size / 5, size, size / 5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
