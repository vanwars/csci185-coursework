const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");
let lightSwitch = 0;

function turnOn(ev) {
    console.log(ev);
    if (lightSwitch === 0) {
        elem.src = imgOn;
        lightSwitch = 1;
    } else {
        elem.src = imgOff;
        lightSwitch = 0;
    }
}


// const turnOn = (ev) => {
//     if (lightSwitch === 0) {
//         elem.src = imgOn;
//         lightSwitch = 1;
//     } else {
//         elem.src = imgOff;
//         lightSwitch = 0;
//     }
// };

// attach function to image's click event:
document.querySelector("#my_image").onclick = turnOn;