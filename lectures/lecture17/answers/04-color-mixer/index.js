const redElement = document.querySelector("#red");
const yellowElement = document.querySelector("#yellow");
const blueElement = document.querySelector("#blue");

function updateColor() {
    /*
    INSTRUCTIONS: Update this function as follows:
    If red is turned on, make the background red.
    If yellow is turned on, make the background yellow.
    If blue is turned on, make the background blue.
    If red and yellow are both turned on, make the background orange.
    If red and blue are turned on, make the background purple.
    If yellow and blue are turned on, make the background green.
    If everything is turned on, then make the background black.
    */
    if (
        redElement.value === "on" &&
        yellowElement.value === "on" &&
        blueElement.value === "on"
    ) {
        setBackgroundColor("black");
    } else if (redElement.value === "on" && yellowElement.value === "on") {
        setBackgroundColor("orange");
    } else if (yellowElement.value === "on" && blueElement.value === "on") {
        setBackgroundColor("green");
    } else if (redElement.value === "on" && blueElement.value === "on") {
        setBackgroundColor("purple");
    } else if (redElement.value === "on") {
        setBackgroundColor("red");
    } else if (yellowElement.value === "on") {
        setBackgroundColor("yellow");
    } else if (blueElement.value === "on") {
        setBackgroundColor("blue");
    } else {
        setBackgroundColor("white");
    }
}

function setBackgroundColor(color) {
    document.querySelector("body").style.backgroundColor = color;
}
