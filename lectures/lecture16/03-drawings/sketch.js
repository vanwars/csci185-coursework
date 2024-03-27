function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);
    // background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
     * Draw an animal
     * Draw a tree
     * Draw a car
     * Draw some abstract art
     */

    // https://p5js.org/reference/#/p5/circle
    fill("green");
    circle(150, 300, 300);

    // https://p5js.org/reference/#/p5/ellipse
    strokeWeight(1);

    fill("white");
    circle(70, 150, 80);
    circle(200, 150, 80);

    fill("black");
    circle(70, 150, 30);
    circle(200, 150, 30);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line

    // Curve: https://p5js.org/reference/#/p5/curve

    // for debugging:
    // drawGrid(canvasWidth, canvasHeight);
}
