const containerEl = document.querySelector("#output_container");

function drawImagesSame() {
    for (let i = 0; i < 50; i++) {
        const myTemplate = `<img src="https://picsum.photos/200/200?random=1">`;
        containerEl.insertAdjacentHTML("beforeend", myTemplate);
    }
}

function clearContainer() {
    containerEl.innerHTML = "";
}
