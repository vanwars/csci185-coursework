function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 80, 'hotpink'); // x, y, diameter, color
    drawCircle(200, 100, 40, 'blue');
    drawCircle(300, 100, 80, 'teal');
    drawCircle(400, 100, 40, 'hotpink');

    // Exercise 2: 
    drawOval();

    // Exercise 3:
    drawBullseye(300, 100, 100);
    drawBullseye(300, 200, 50, 'lavender', 'black');
    drawBullseye(300, 300, 100, 'lavender', 'black');

    // Exercise 4:
    drawFace(100, 400, 100); // x, y, size
    drawFace(200, 400, 50); // x, y, size
    drawFace(300, 400, 100); // x, y, size
    drawFace(400, 400, 50); // x, y, size

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor


// drawCircle(300, 400, 40, 'yellow');
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval() {
    fill('teal');
    ellipse(100, 200, 100, 62.5);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, fillColor1='teal', fillColor2='purple') {
    fill(fillColor1);
    circle(centerX, centerY, size);
    fill(fillColor2);
    circle(centerX, centerY, size * .75);
    fill(fillColor1);
    circle(centerX, centerY, size * 0.5);
    fill(fillColor2);
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size) {
    fill('yellow');
    stroke('black');
    strokeWeight(size/15);
    circle(centerX, centerY, size); // face (done)
    fill('black');
    strokeWeight(0);
    // Goal: figure out how to scale the eye size and the eye position:
    let eyeWidth = size / 8;
    let eyeDistance = size / 7;
    let eyeY = centerY - eyeWidth;
    let leftEyeX = centerX - eyeDistance;
    let rightEyeX = centerX + eyeDistance;
    let mouthSize = size / 2;
    let mouthY = centerY + size / 5;
    let mouthLeftX = centerX - mouthSize/2;
    let mouthRightX = centerX + mouthSize/2;

    circle(leftEyeX, eyeY, eyeWidth);             // left eye
    circle(rightEyeX, eyeY, eyeWidth);            // right eye

    // let's make a line for the mouth:
    strokeWeight(size/15);
    //line(mouthLeftX, mouthY, mouthRightX, mouthY);

    noFill()
    curve(
        mouthLeftX, mouthY - size,      // control point
        mouthLeftX, mouthY,             // first point
        mouthRightX, mouthY,            // second point
        mouthRightX, mouthY - size      // control point
    );
    
}
