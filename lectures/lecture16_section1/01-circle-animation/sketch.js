// list of objects:

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// initialize variables outside of the function:
const ball = {
    x: 0,
    y: 0,
    d: 50,
    speedX: 3,
    speedY: 2
};


const circleData = [
    {x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: 'teal'},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: 'hotpink'},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: 'lightblue'},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: 'navy'},
    {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: 'yellow'},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: 'purple'}
];

function draw() {
    clear();
    
    for (let i = 0; i < circleData.length; i++) {
        const ball = circleData[i];
        fill(ball.color);
        circle(ball.x, ball.y, ball.d);
        ball.x += ball.speedX;
        ball.y += ball.speedY;
    }
    
    drawGrid(canvasWidth, canvasHeight);
}
