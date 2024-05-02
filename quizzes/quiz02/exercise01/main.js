function changeBackground() {
    // change the background of section with id of s1 to blue

    // 1. grab the element:
    let el = document.querySelector("#s1");

    // 2. change it:
    el.style.backgroundColor = "#02afd7";
}

function goodbye() {
    // your code here
    document.querySelector("#message").innerHTML = "goodbye";
}

function showDog() {
    // your code here
    let myImage = document.querySelector("#animal1");
    myImage.src = "images/dog.jpg";
}
