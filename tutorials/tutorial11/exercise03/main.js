const restaurants = [
    "Suwana's Thai Orchid",
    "Khao Thai Cuisine",
    "Little Bee Thai",
    "PIE.ZAA Pizza",
    "Fahrenheit Pizza & Brewhouse",
    "Fresh Wood Fired Pizza West",
    "Wasabi",
    "Red Ginger Dimsum And Tapas",
    "Murasaki Asheville",
];

for (let i = 0; i < restaurants.length; i++) {
    const el = document.querySelector("#output");
    el.innerHTML += `<p>${restaurants[i]}</p>`;
    document.querySelector("#output").innerHTML += `<p>${restaurants[i]}</p>`;
    // el.insertAdjacentHTML("beforeend", `<p>${restaurants[i]}</p>`);
}
