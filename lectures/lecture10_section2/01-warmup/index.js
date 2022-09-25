const toggleFall = () => {
    document.querySelector("body").className = "fall";
    document.querySelector("h1").textContent = "Happy Fall!";
}

const toggleWinter = () => {
    document.querySelector("body").className = "winter";
    document.querySelector("h1").innerText = "Happy Winter!";
}

const toggleSpring = () => {
    document.querySelector("body").className = "spring";
    document.querySelector("h1").innerHTML = "Happy Spring!";
}