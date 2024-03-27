const choices = ["rock", "paper", "scissors"];

function randomChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function play(playerChoice) {
    const computerChoice = randomChoice();
    displayResult(playerChoice, computerChoice);
}

function displayResult(player, computer) {
    const resultDiv = document.querySelector("#result");
    const computerDiv = document.querySelector("#computer-choice");
    const playerDiv = document.querySelector("#player-choice");

    // logic here to figure out who won!
    resultDiv.innerHTML = "Your task: Figure out who won!";
    // add your code here:







    
    // Extra credit: instead of displaying the word,
    // try to display an image instead (either a rock, a piece of paper,
    // or a scissors).
    playerDiv.innerHTML = "You chose " + player;
    computerDiv.innerHTML = "Computer chose " + computer;
}
