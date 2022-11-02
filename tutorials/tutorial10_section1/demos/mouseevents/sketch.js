const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// initialize an x and y variable
// to store where the creature will be
// drawn at any given point in time:
let currentX = 500;
let currentY = 300;
let isFollowing = false;

// setup: draw the creature when the game first begins:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // message
    drawCreature(currentX, currentY, 50);
}

// your draw creature function:
function drawCreature(x, y, size, primaryColor='teal', secondaryColor='hotpink') {
    fill(primaryColor);
    stroke(secondaryColor);
    circle(x, y, size);
}

function mouseMoved() {
    // console.log(mouseX, mouseY);
    if (isFollowing == true) {
        clear();
        drawCreature(mouseX, mouseY, 150);
    }
} 

function mouseClicked() {
    // if (isFollowing == false) {
    //     isFollowing = true;
    // } else {
    //     isFollowing = false;
    // }
    isFollowing = !isFollowing;
}

// function mouseDragged() {
//     circle(mouseX, mouseY, 40);
// }
