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
        let intersects = checkIntersection(ball, player);
        
        // if the ball intersects with the player, turn both to red.
        if (intersects) {
            ball.color = 'red';
            player.color = 'red';
        } else {
            // otherwise, turn the ball to it's original color:
            ball.color = ball.originalColor;
        } 

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

function checkIntersection(ball1, ball2) {
    const distance = dist(ball1.x, ball1.y, ball2.x, ball2.y);
    if (distance <= (ball1.d/2 + ball2.d/2)) {
        return true;
    } else {
        return false;
    }
}

function move(ball) {
    ball.y += ball.speedY;
    ball.x += ball.speedX;
    if (ball.x < -ball.d) {
        ball.x = (canvasWidth + ball.d);
    } else if (ball.x > canvasWidth + ball.d) {
        ball.x = -ball.d;
    } else if (ball.y > canvasHeight + ball.d) {
        ball.y = -ball.d;
    } else if (ball.y < -ball.d) {
        ball.y = canvasHeight + ball.d;
    }
}

function movePlayer(ev) {
    const speed = 5;
    if (ev.code == 'ArrowUp') {
        player.y -= speed;
    } else if (ev.code == 'ArrowDown') {
        player.y += speed;
    } else if (ev.code == 'ArrowLeft') {
        player.x -= speed;
    } else if (ev.code == 'ArrowRight') {
        player.x += speed;
    }
}

// Add event listener on keydown
document.addEventListener('keydown', movePlayer);
