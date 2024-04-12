const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = [
    "#08415c33",
    "#e1f0c433",
    "#6bab9033",
    "#55917f33",
    "#5e4c5a33",
];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2); // how many redraws per second

    strokeWeight(0);

    // generate a random x-position, y-position, and size:

    // Draw a random circle:
    let counter = 0;
    while (counter < 500) {
        let color = colors[randomInt(0, 4)];
        // opacity(0.5);
        // let color = colors[2];
        fill(color); // sets a new color
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        circle(x, y, size);
        counter++;
    }

    // counter = 0;
    // fill("hotpink");
    // while (counter < 500) {
    //     let x = randomInt(canvasWidth / 2, canvasWidth);
    //     let y = randomInt(0, canvasHeight / 2);
    //     let size = randomInt(25, 125);
    //     circle(x, y, size);
    //     counter++;
    // }
}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
function draw() {
    clear();
    let counter = 0;
    while (counter < 500) {
        let color = colors[randomInt(0, 4)];
        // opacity(0.5);
        // let color = colors[2];
        fill(color); // sets a new color
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        circle(x, y, size);
        counter++;
    }
}
