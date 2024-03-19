const img = document.querySelector("#current-image");
const caption = document.querySelector("#caption");

function showCat() {
    img.src = "images/cat.jpg";
    caption.innerHTML = "This is a cat";
}

function showDog() {
    img.src = "images/dog.jpg";
    caption.innerHTML = "This is a dog";
}

function showBird() {
    img.src = "images/bird.jpg";
    caption.innerHTML = "This is a bird";
}

function showFish() {
    img.src = "images/fish.jpg";
    caption.innerHTML = "This is a fish";
}

function showSloth() {
    img.src = "images/sloth.jpg";
    caption.innerHTML = "This is a sloth";
}
