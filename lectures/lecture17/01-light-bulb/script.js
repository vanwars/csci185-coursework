let isOn = false;

function turnOnOff() {
    if (isOn === false) {
        document.querySelector("#my_image").src = "bulb_on.gif";
        isOn = true;
    } else {
        document.querySelector("#my_image").src = "bulb_off.gif";
        isOn = false;
    }
}
