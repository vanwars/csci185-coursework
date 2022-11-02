const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const leftWall = { x: 300, y: 150, w: 10, h: 300, color: 'black' };
const rightWall = { x: 600, y: 150, w: 10, h: 300, color: 'black' };
const topWall = { x: 300, y: 150, w: 300, h: 10, color: 'black' };
const bottomWall = { x: 300, y: 440, w: 300, h: 10, color: 'black' };
const ball = { x: 450, y: 300, d: 100, color: 'hotpink' };


// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// initialize variables outside of the function:
let x = 0;
let y = 0;
let d = 50;
let speedX = 3;
let speedY = 2;

// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
function draw() {
    clear();
    
    fill(leftWall.color);
    rect(leftWall.x, leftWall.y, leftWall.w, leftWall.h);
    
    fill(rightWall.color);
    rect(rightWall.x, rightWall.y, rightWall.w, rightWall.h);
    
    fill(topWall.color);
    rect(topWall.x, topWall.y, topWall.w, topWall.h);
    
    fill(bottomWall.color);
    rect(bottomWall.x, bottomWall.y, bottomWall.w, bottomWall.h);
    
    fill(ball.color);
    circle(ball.x, ball.y, ball.d);
    
    //left:
    const isIntersectedLeft = checkIntersectionLeft(
        ball.x - ball.d/2, 
        leftWall.x + leftWall.w,
        leftWall.w
    );

    const isIntersectedRight = checkIntersectionRight(
        ball.x + ball.d/2, 
        rightWall.x,
        rightWall.w
    );

    const isIntersectedTop = checkIntersectionTop(
        ball.y - ball.d/2, 
        topWall.y + topWall.h,
        topWall.h
    );

    const isIntersectedBottom = checkIntersectionBottom(
        ball.y + ball.d/2, 
        bottomWall.y,
        bottomWall.h
    );
    if (isIntersectedLeft) {
        leftWall.color = 'red';
    } else {
        leftWall.color = 'black';
    }

    if (isIntersectedRight) {
        rightWall.color = 'red';
    } else {
        rightWall.color = 'black';
    }

    if (isIntersectedTop) {
        topWall.color = 'red';
    } else {
        topWall.color = 'black';
    }

    if (isIntersectedBottom) {
        bottomWall.color = 'red';
    } else {
        bottomWall.color = 'black';
    }


    drawGrid(canvasWidth, canvasHeight);
}

function checkIntersectionLeft(x1, x2, d) {
    if ((x1-x2) <= 0 && Math.abs(x1-x2) < d) {
        return true;
    } else {
        return false;
    }
}

function checkIntersectionRight(x1, x2, d) {
    if ((x1-x2) >= 0 && Math.abs(x1-x2) < d) {
        return true;
    } else {
        return false;
    }
}

function checkIntersectionTop(y1, y2, d) {
    if ((y1-y2) <= 0 && Math.abs(y1-y2) < d) {
        return true;
    } else {
        return false;
    }
}

function checkIntersectionBottom(y1, y2, d) {
    if ((y1-y2) >= 0 && Math.abs(y1-y2) < d) {
        return true;
    } else {
        return false;
    }
}


function moveCharacter(ev) {
    const speed = 5;
    if (ev.code == 'ArrowUp') {
        if (topWall.color === 'red') {
            return;
        }
        ball.y -= speed;
    } else if (ev.code == 'ArrowDown') {
        if (bottomWall.color === 'red') {
            return;
        }
        ball.y += speed;
    } else if (ev.code == 'ArrowLeft') {
        if (leftWall.color === 'red') {
            return;
        }
        ball.x -= speed;
    } else if (ev.code == 'ArrowRight') {
        if (rightWall.color === 'red') {
            return;
        }
        ball.x += speed;
    }
}

// Add event listener on keydown
document.addEventListener('keydown', moveCharacter);
