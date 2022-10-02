function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle();

    // Exercise 2: 
    drawOval();

    // Exercise 3:
    drawBullseye();

    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200, 400, 100, 'lavender');
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);
    drawFace(600, 400, 250);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle() {
    fill('hotpink');
    circle(100, 100, 100);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval() {
    fill('teal');
    ellipse(100, 200, 100, 62.5);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye() {
    fill('teal');
    circle(100, 300, 100);
    fill('navy');
    circle(100, 300, 75);
    fill('teal');
    circle(100, 300, 50);
    fill('navy');
    circle(100, 300, 25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, faceColor='yellow') {
    strokeWeight(0);
    fill(faceColor);
    circle(centerX, centerY, size); // 100, 400, 50
    fill('black');
    let sf = size / 6.5;
    circle(centerX - sf, centerY - sf, sf);     // left eye
    circle(centerX + sf, centerY - sf, sf);    // right eye

    // make a mouth:
    strokeWeight(size / 25);

    // Method 0: No curve (just a start point and an end point)
    // line(
    //     centerX - sf*2, // x1
    //     centerY + sf, // y1
    //     centerX + sf*1.9, // x2
    //     centerY + sf  // y2
    // );

    // Method 1: Curve Technique (courtesey of samples)
    noFill()
    stroke('black');
    curve(
        centerX - sf*2, centerY - 1.5*size, // control point with small y-coordinate (which bends the curve down from the left)
        centerX - sf*2, centerY + 0.8 * sf, // start point
        centerX + sf*2, centerY + 0.8 * sf, // end point
        centerX + sf*2, centerY - 1.5*size  // control point with small y-coordinate (which bends the curve down from the right)
    );


    // Method 2: Arc Technique (courtesey of Ari)
    // noFill();
    // arc(centerX, centerY, size/2, size/2, 0.5, -10, OPEN);
}
