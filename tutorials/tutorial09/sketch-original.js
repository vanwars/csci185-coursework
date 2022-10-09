const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const heart = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

const frank = [
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 1, 2, 1, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 3, 3, 3, 3, 3, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 0, 2, 2, 0, 0]
];

function selectColor() {
    const palette = ['#edae49', '#00798c', '#30638e','#af5d63', '#ed474a'];
    const colorIndex = Math.floor(Math.random()* palette.length);
    return palette[colorIndex];
}
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);

    drawPixelArt(heart, 20, 20, 15);
    drawPixelArt(frank, 120, 250, 12, ['transparent', selectColor(), 'black', 'white']);
    drawPixelArt(heart, 420, 250, 8, ['transparent', selectColor(), 'black', 'white']);
    drawPixelArt(heart, 55, 415, 6, ['transparent', selectColor(), 'black', 'white']);
    drawPixelArt(heart, 350, 135, 5, ['transparent', selectColor(), 'black', 'white']);
    drawPixelArt(frank, 315, 380, 15, ['transparent', selectColor(), 'black', 'white']);
    drawPixelArt(frank, 420, 10, 10, ['transparent', selectColor(), 'black', 'white']);

}

function drawRow (row, topX, topY, pixelWidth, palette=['transparent', 'hotpink', 'black', 'white']) {
    for (let i = 0; i < row.length; i++) {
        const color = palette[row[i]];
        if (color === 'transparent') {
            noFill();
        } else {
            fill(color);
        }
        noStroke();
        square(topX, topY, pixelWidth);
        topX += pixelWidth;
    }
}


function drawPixelArt(grid, topX, topY, pixelWidth, palette=['transparent', '#af5d63', 'black', 'white']) {
    for (let i = 0; i < grid.length; i++) {
        // draw each row at the specified (x, y) position:
        drawRow(grid[i], topX, topY, pixelWidth, palette);
        topY += pixelWidth;
    }
}

function mousePressed() {
    const pixelWidth = Math.random()* 15 + 5;
    const grids = [frank, heart];
    const grid = grids[Math.floor(Math.random()* 2)];
    const topX = mouseX - pixelWidth * grid[0].length / 2;
    const topY = mouseY - pixelWidth * grid.length / 2;

    drawPixelArt(grid, topX, topY, pixelWidth, ['transparent', selectColor(), 'black', 'white']);
}