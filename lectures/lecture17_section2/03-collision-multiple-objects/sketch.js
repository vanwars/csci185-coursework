// inspired by: https://p5js.org/examples/motion-bouncy-bubbles.html

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const player = { x: canvasWidth/2, y: canvasHeight/2, d: 200, color: 'hotpink', originalColor: 'hotpink' };
const circleData = [
    {x: 500, y: 50, d: 40, speedX: 3, speedY: 3, color: 'teal', originalColor: 'teal'},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: 'orange', originalColor: 'orange'},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: 'yellow', originalColor: 'yellow'},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: 'green', originalColor: 'green'},
    {x: 140, y: 120, d: 50, speedX: 0, speedY: -0.5, color: 'blue', originalColor: 'blue'},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: 'purple', originalColor: 'purple'}
];

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    // frameRate(10);
    clear();

    // initialize the player color to default:
    player.color = player.originalColor;

    for (let i = 0; i < circleData.length; i++) {
        let ball = circleData[i];

        // 1. check intersection 
        bounceIfIntersects(ball, player);

        // 2. modify the x and y coordinates of the current ball:
        move(ball);

        // 3. draw ball: 
        fill(ball.color);
        circle(ball.x, ball.y, ball.d);
    }

    // after drawing all the balls, draw the player.
    fill(player.color);
    circle(player.x, player.y, player.d);

    drawGrid(canvasWidth, canvasHeight);
}

function bounceIfIntersects(ball1, ball2) {
    let spring = 1;
    let minDist = ball1.d/2 + ball2.d/2;
    let dx = ball2.x - ball1.x;
    let dy = ball2.y - ball1.y;
    const distance = dist(ball1.x, ball1.y, ball2.x, ball2.y);
    if (distance <= minDist) {
        let angle = atan2(dy, dx);
        let targetX = ball1.x + cos(angle) * minDist;
        let targetY = ball1.y + sin(angle) * minDist;
        let ax = (targetX - ball2.x) * spring;
        let ay = (targetY - ball2.y) * spring;
        ball1.speedX -= ax;
        ball1.speedY -= ay;
        ball1.speedX /= 2;
        ball1.speedY /= 2;
    } 
}

function move(ball) {
    ball.y += ball.speedY;
    ball.x += ball.speedX;
    if ((ball.x - ball.d / 2)<= 0) {
        ball.speedX *= -1;
        ball.x += ball.speedX;
    } else if ((ball.x + ball.d / 2) >= canvasWidth) {
        ball.speedX *= -1;
        ball.x += ball.speedX;
    } else if ((ball.y - ball.d / 2) <= 0) {
        ball.speedY *= -1;
        ball.y += ball.speedY;
    } else if (ball.y + ball.d / 2 >= canvasHeight) {
        ball.speedY *= -1;
        ball.y += ball.speedY;
    }
}

function mouseDragged() {
    player.x = mouseX;
    player.y = mouseY;
}