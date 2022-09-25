function drawGrid(canvasWidth, canvasHeight) {
    for (let x = 0; x < canvasWidth; x += 100) {
		for (let y = 0; y < canvasHeight; y += 100) {
			stroke(0);
            fill(0);
			strokeWeight(1);
			line(x, 0, x, canvasHeight);
			line(0, y, canvasWidth, y);
            if (x % 200 == 0 && y % 200 == 0) {
			    strokeWeight(8);
                point(x, y);
                strokeWeight(0);
                text(`(${x}, ${y})`, x + 5, y + 20);
            }
            strokeWeight(1);
		}
	}
}