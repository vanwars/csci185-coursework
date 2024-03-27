const drawerEl = document.querySelector("#drawer");

function openDrawer() {
    drawerEl.className = "open";
    drawerEl.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
    drawerEl.className = "";
    drawerEl.setAttribute("aria-hidden", "true");
}
