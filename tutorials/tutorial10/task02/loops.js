const containerEl = document.querySelector("#output_container");

function drawImagesDifferent() {
    for (let i = 0; i < 50; i++) {
        console.log(i);
        const myTemplate = `<img src="https://picsum.photos/200/200?random=${i}">`;
        containerEl.insertAdjacentHTML("beforeend", myTemplate);
    }
}

function clearContainer() {
    containerEl.innerHTML = "";
}
