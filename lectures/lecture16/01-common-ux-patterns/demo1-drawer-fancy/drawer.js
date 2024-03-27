const drawerEl = document.querySelector("#drawer");

function openDrawer(title) {
    const h2 = document.querySelector("#drawer h2");
    h2.innerHTML = title;
    drawerEl.className = "open";
    drawerEl.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
    drawerEl.className = "";
    drawerEl.setAttribute("aria-hidden", "true");
}
