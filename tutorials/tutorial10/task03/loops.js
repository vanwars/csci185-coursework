const nameList = [
    "Atlas",
    "Avery",
    "Cali",
    "Cameron",
    "Carol",
    "Dean",
    "Destiny",
    "Dylan",
    "Heather",
    "Jack",
    "Joe",
    "Keiran",
    "Kelly",
    "Maria",
    "Merlin",
    "Natasha",
    "Nicholas",
    "Olivia",
    "Rinta",
    "Trey",
];

// Your code goes here....
const containerEl = document.querySelector("#output_container");

function showNames() {
    for (let i = 0; i < nameList.length; i++) {
        console.log(i, nameList[i]);
        const myTemplate = `<p>${nameList[i]}</p>`;
        containerEl.insertAdjacentHTML("afterbegin", myTemplate);
    }
}

function clearContainer() {
    containerEl.innerHTML = "";
}
