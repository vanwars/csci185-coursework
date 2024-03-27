const modalBg = document.querySelector("#my-modal .bg");
const modalContent = document.querySelector("#my-modal .content");

function openModal() {
    modalBg.classList.add("open");
    modalBg.setAttribute("aria-hidden", "false");
    modalContent.classList.add("open");
    modalContent.setAttribute("aria-hidden", "false");
}

function closeModal() {
    setTimeout(function () {
        modalBg.classList.remove("open");
    }, 250);
    modalBg.setAttribute("aria-hidden", "true");
    modalContent.classList.remove("open");
    modalContent.setAttribute("aria-hidden", "true");
}
