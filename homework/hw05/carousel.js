const photos = [
    "images/img1-600x400.jpg", // 0
    "images/img2-600x400.jpg", // 1
    "images/img3-600x400.jpg", // 2
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg", // 5
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg", // 9
];
let idx = 0;

function showImage() {
    console.log("Show image:", idx);
    const img = document.querySelector("#the_image");
    img.src = photos[idx];

    // TODO: also target the caption text and change it too!
}

function forward() {
    // if it gets to 9, set it to 0
    idx += 1;
    showImage();
}

function back() {
    // if it gets less than 0, set it to 9
    idx -= 1;
    showImage();
}
