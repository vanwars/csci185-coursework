const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const player = { x: 650, y: 400, d: 150, color: 'teal', originalColor: 'teal' };
const ball = { x: 450, y: 300, d: 50, color: 'hotpink', originalColor: 'hotpink' };


// SETUP FUNCTION
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// ANIMATION LOOP FUNCTION
function draw() {
    frameRate(10);
    clear();
    
    // draw the player:
    fill(player.color);
    circle(player.x, player.y, player.d);

    // draw the ball:
    fill(ball.color);
    circle(ball.x, ball.y, ball.d);

    // check if the two intersect:
    let intersects = checkIntersection(player, ball);
    if (intersects) {
        // if they do, change them both to red:
        player.color = 'red';
        ball.color = 'red';
    } else {
        // if they don't, change them back to their original color:
        player.color = player.originalColor;
        ball.color = ball.originalColor;
    }

    drawGrid(canvasWidth, canvasHeight);
}

// FUNCTION TO FIGURE OUT IF THE OBJECTS INTERSECT
function checkIntersection(circle1, circle2, d) {
    const distance = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (distance <= (circle1.d/2 + circle2.d/2)) {
        return true;
    } else {
        return false;
    }
}

// FUNCTION ("EVENT HANDLER") TO MOVE PLAYER BASED ON KEYPRESSES
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

// EVENT LISTENER FOR KEYBOARD EVENTS
document.addEventListener('keydown', movePlayer);
