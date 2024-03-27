function showCat() {
    console.log("This is a cat");
}

function showDog() {
    // what do we need to target?
    const img = document.querySelector("#current-image");
    const caption = document.querySelector("#caption");
    img.src = "images/dog.jpg";
    caption.innerHTML = "This is a cute puppy.";
}

function showBird() {
    console.log("This is a bird");
}

function showFish() {
    console.log("This is a fish");
}
