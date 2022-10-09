const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";

const elem = document.querySelector("#my_image");

const turnOn = (ev) => {
    // how can we modify this section so that it toggles on and off?
    if (elem.src === imgOff) {
        // setting src to something new
        elem.src = imgOn;
    } else {
        elem.src = imgOff;
    }
};

// attach function to image's click event:
document.querySelector("#my_image").onclick = turnOn;


/*
Write a function that takes 2 arguments: name and timeOfDay in hours (military time). 
Morning: 3-11
Afternoon: 12-19, and 
Night: 20-23, 0-2 
When I invoke your function as follows, it should output the following to the command line:

greet(‘Sarah’, 11);		// “Good morning, Sarah!”
greet(‘Walter’, 1);		// “Good night, Walter!”
greet(‘Taylor’, 17);		// “Good afternoon, Taylor!”
*/

const greet = (name, timeOfDay) => {
    // goal: use the timeOfDay parameter to figure out
    // whether to say good morning, good afternoon, or
    // good evening:
    if (timeOfDay >= 12 && timeOfDay < 19) {
        console.log('Good afternoon, ' + name + '!');
    } else if (timeOfDay >= 20 || timeOfDay <= 2) {
        console.log('Good night, ' + name + '!');
    } else {
        console.log('Good morning, ' + name + '!');
    }
}

greet('Sarah', 11);
greet('Walter', 20);
greet('Brenda', 15);











