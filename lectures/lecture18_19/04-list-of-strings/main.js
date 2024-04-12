const names = [
    "Sarah",
    "Keiran",
    "Avery",
    "Jack",
];

// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector("#output");
let counter = 0;
while (counter < names.length) {
    outputElement.insertAdjacentHTML(
        "beforeend",
        `<p>Welcome, ${names[counter]}!</p>`
    );

    counter += 1;
}

// outputElement.insertAdjacentHTML("beforeend", `<p>Welcome, ${names[1]}!</p>`);
// outputElement.insertAdjacentHTML("beforeend", `<p>Welcome, ${names[2]}!</p>`);
// outputElement.insertAdjacentHTML("beforeend", `<p>Welcome, ${names[3]}!</p>`);
// outputElement.insertAdjacentHTML("beforeend", `<p>Welcome, ${names[4]}!</p>`);
// outputElement.insertAdjacentHTML("beforeend", `<p>Welcome, ${names[5]}!</p>`);
