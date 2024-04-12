const containerEl = document.querySelector("#output_container");

async function showSong() {
    const searchTerm = "Bob Dylan";
    const url = `https://www.apitutor.org/spotify/simple/one/v1/search?q=${searchTerm}&type=track`;
    const response = await fetch(url);
    const song = await response.json();
    console.log(song);

    // your code goes here. Figure out how to output something like this to the screen,
    // but with the song data returned from the server...
    // <section class="song">
    //     <h2>Blowin' in the Wind</h2>
    //     <img src="https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573">
    //     <p>Bob Dylan</p>
    //     <audio controls src="https://p.scdn.co/mp3-preview/669fd8752..."></audio>
    // </section>
}

function clearContainer() {
    containerEl.innerHTML = "";
}
