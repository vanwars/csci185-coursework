function makeRed() {
    const container = document.querySelector("#section1");
    container.style.backgroundColor = "red";
}

function makeBlue() {
    const container = document.querySelector("#section2");
    container.style.backgroundColor = "blue";
}

function makePink() {
    const container = document.querySelector("#section3");
    container.style.backgroundColor = "pink";
}

function makeOrange() {
    const container = document.querySelector("#section4");
    container.style.backgroundColor = "orange";
}

function clearColors() {
    const s1 = document.querySelector("#section1");
    const s2 = document.querySelector("#section2");
    const s3 = document.querySelector("#section3");
    const s4 = document.querySelector("#section4");
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
    s4.style.backgroundColor = "white";
}
