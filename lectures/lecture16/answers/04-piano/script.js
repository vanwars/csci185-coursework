function getPath(note) {
    const folder = document.querySelector("#folder").value;
    return "scales/" + folder + "/" + note + ".mp3";
}

function playNote(note) {
    const audio = document.querySelector("audio");
    audio.src = getPath(note);
    audio.play();
}
