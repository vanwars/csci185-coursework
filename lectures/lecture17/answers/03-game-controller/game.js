let x = 100;
let y = 200;
let width = 100;
let color = "red";

// this function only runs once when the page first loads:
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    drawPlayer();
}

// this function draws the player (currently a circle but we can make it fancier):
function drawPlayer() {
    // clear();
    fill(color);
    circle(x, y, width); // x position, y position, diameter
    drawGrid(window.innerWidth, window.innerHeight);
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
    drawPlayer();
}

// This is another way of adding an event listener in JavaScript:
document.addEventListener("keydown", movePlayer);
