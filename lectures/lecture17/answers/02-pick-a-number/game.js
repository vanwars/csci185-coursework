function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

// Your task:
function check() {
    const output = document.querySelector("#message");
    let guess = document.querySelector("#guess").value;
    guess = Number(guess); // don't forget to convert to a number.

    // output a message to the DOM, depending on what's going on:
    if (guess < secret) {
        output.innerHTML = "Too low";
    } else if (guess > secret) {
        output.innerHTML = "Too high";
    } else {
        output.innerHTML = "You win!";
    }
}
