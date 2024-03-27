function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

// Your task:
function check() {
    // your code here
}
