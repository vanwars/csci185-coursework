const restaurants = [
    "Suwana's Thai Orchid", 
    "Khao Thai Cuisine", 
    "Little Bee Thai", 
    "PIE.ZAA Pizza", 
    "Fahrenheit Pizza & Brewhouse", 
    "Fresh Wood Fired Pizza West", 
    "Wasabi", 
    "Red Ginger Dimsum And Tapas", 
    "Murasaki Asheville"
];

// let i = 0;
// while (i < restaurants.length) {
//     document.querySelector('#output').innerHTML += `<p>${restaurants[i]}</p>`;
//     i++;
// }


for (let i = 0; i < restaurants.length; i++) {
    document.querySelector('#output').innerHTML += `<p>${restaurants[i]}</p>`;
}