/**
 * ------
 * Part 1
 * ------
 * A. Write a function called turnOnOff() that has no parameters.
 *    - The job of this function is to flip the isOn switch (variable)
 *      every time the function is called:
 *          - If it's true, set it to false
 *          - If it's false, set it to true
 *
 *      After the isOn switch has been set, output its value to the console.
 *
 * B. Attach the turnOnOff() function to the onclick event handler of the image.
 *
 * ------
 * Part 2
 * ------
 * When you're done with Part 1, update your code so that the
 * image on the screen reflects either the off bulb or the on bulb,
 * depending on the value of IsOn.
 */

let isOn = false;
const elem = document.querySelector("#my_image");

function turnOnOff() {
    if (isOn) {
        isOn = false;
        elem.src = "bulb_off.gif";
    } else {
        isOn = true;
        elem.src = "bulb_on.gif";
    }
    console.log(isOn);
}
