let x = 100;
let y = 200;
let width = 100;
let color = "green";

// this function only runs once when the page first loads:
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    drawPlayer();
}

// this function draws the player (currently a circle but we can make it fancier):
function drawPlayer() {
    clear();
    strokeWeight(2);

    // draw grid:
    drawGrid(window.innerWidth, window.innerHeight);

    // calculate where the eyes should go, based on the size of the player:
    let eyeDistanceX = width / 4;
    let eyeDistanceY = width / 3;
    let eyeSize = width / 3;
    let pupilSize = width / 7;

    // draw body:
    fill(color);
    circle(x, y, width);

    // draw eyeballs:
    fill("white");
    circle(x - eyeDistanceX, y - eyeDistanceY, eyeSize);
    circle(x + eyeDistanceX, y - eyeDistanceY, eyeSize);

    // draw pupils:
    fill("black");
    circle(x - eyeDistanceX, y - eyeDistanceY, pupilSize);
    circle(x + eyeDistanceX, y - eyeDistanceY, pupilSize);

    // draw mouth:
    line(x - eyeDistanceX, y + pupilSize, x + eyeDistanceX, y + pupilSize);
}

function movePlayer(ev) {
    console.log(ev.code);
    if (ev.code == "ArrowUp") {
        console.log("up arrow!");
        y -= 4;
    } else if (ev.code == "ArrowDown") {
        console.log("down arrow!");
        y += 4;
    } else if (ev.code == "ArrowLeft") {
        console.log("left arrow!");
        x -= 4;
    } else if (ev.code == "ArrowRight") {
        console.log("right arrow!");
        x += 4;
    } else if (ev.code == "Space") {
        width += 4;
    } else if (ev.code == "Escape") {
        width -= 4;
    }

    // re-draw the circle in a new position:
    drawPlayer(x, y, width);
}



// This is another way of adding an event listener in JavaScript:
document.addEventListener("keydown", movePlayer);
