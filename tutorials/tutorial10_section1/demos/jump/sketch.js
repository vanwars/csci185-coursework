const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// variables that control our creature
let x = 150;
let y = 400;
let doJump = false;
let counter = 0;
let initialY = y;

// object that controls the position of the car
const c1 = {
    x: 900,
    y: 450,
    width: 300,
    speed: -20,
    color: 'hotpink'
};


function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


function draw() {
    clear();
    
    if (doJump) {
        // animate for one Math.sin cycle, then 
        // turn doJump variable to false
        const jumpHeight = -30;
        const jumpSpeed = 6;
        y += jumpHeight * Math.sin(counter / jumpSpeed); 
        counter++;
        if (y > initialY) {
            doJump = false;
        }
    }

    // new
    c1.x += c1.speed;
    drawCar(c1.x, c1.y, c1.width, 'hotpink');
    if (c1.x < -1000) {
        c1.x = canvasWidth + 3000;
    }

    // change to drawCreature
    drawCreature(x, y, 100);

}


function jump(ev) {
    console.log(ev.code);
    if (ev.code == 'Space') {
        doJump = true;
    }
    
    // message
   displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Press the spacebar to jump.", canvasWidth/2, canvasHeight/2);
}

// Add event listener on keydown
document.addEventListener('keydown', jump);


function drawCreature(x, y, size, primaryColor='teal', secondaryColor='hotpink') {
    let centerX = x;
    let centerY = y;
    strokeWeight(0);
    fill(primaryColor);
    circle(centerX, centerY, size); // 100, 400, 50
    fill('black');
    let sf = size / 6.5;
    circle(centerX - sf, centerY - sf, sf);     // left eye
    circle(centerX + sf, centerY - sf, sf);    // right eye

    // make a mouth:
    strokeWeight(size / 25);
    noFill()
    stroke('black');
    curve(
        centerX - sf*2, centerY - 1.5*size, // control point with small y-coordinate (which bends the curve down from the left)
        centerX - sf*2, centerY + 0.8 * sf, // start point
        centerX + sf*2, centerY + 0.8 * sf, // end point
        centerX + sf*2, centerY - 1.5*size  // control point with small y-coordinate (which bends the curve down from the right)
    );
    strokeWeight(0);

}


function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
