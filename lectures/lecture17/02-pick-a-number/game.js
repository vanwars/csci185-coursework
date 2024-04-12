function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

let numGuesses = 0;

// Your task:
function check() {
    // how do we set that "guess" variable?
    const guess = Number(document.querySelector("#guess").value);
    const messageEl = document.querySelector("#message");
    const numGuessesEl = document.querySelector("#num_guesses");

    // how do you know if the guess is too high?
    if (guess > secret) {
        messageEl.innerHTML = "Too high!";
    } else if (guess < secret) {
        messageEl.innerHTML = "Too low!";
    } else if (guess === secret) {
        messageEl.innerHTML = "You Win!";
    } else {
        alert("NAN, Fool!");
    }
    // numGuesses = numGuesses + 1;
    numGuesses++;
    numGuesses += 1;

    numGuessesEl.innerHTML = numGuesses;
}
