const redElement = document.querySelector("#red");
const yellowElement = document.querySelector("#yellow");
const blueElement = document.querySelector("#blue");

function setBackgroundColor(color) {
    document.querySelector("body").style.backgroundColor = color;
}

function updateColor() {
    /*
    INSTRUCTIONS: Update this function as follows:
    If red is turned on, make the background red (done for you).
    If yellow is turned on, make the background yellow (done for you).
    If blue is turned on, make the background blue.
    If red and yellow are both turned on, make the background orange.
    If red and blue are turned on, make the background purple.
    If yellow and blue are turned on, make the background green.
    If everything is turned on, then make the background black.
    */
    if (redElement.value === "on") {
        setBackgroundColor("red");
    } else if (yellowElement.value === "on") {
        setBackgroundColor("yellow");
    } else {
        setBackgroundColor("white");
    }
}
