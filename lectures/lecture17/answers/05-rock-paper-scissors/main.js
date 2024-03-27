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

    if (player === computer) {
        // tie!
        resultDiv.innerHTML = "It's a tie!";
    } else if (player === "rock" && computer === "scissors") {
        // rock beats scissors
        resultDiv.innerHTML = "You win!";
    } else if (player === "paper" && computer === "rock") {
        // paper beats rock
        resultDiv.innerHTML = "You win!";
    } else if (player === "scissors" && computer === "paper") {
        // scissors beats paper
        resultDiv.innerHTML = "You win!";
    } else {
        // if it's not a tie and you didn't win, it means you lost!
        resultDiv.innerHTML = "You lose!";
    }

    playerDiv.innerHTML = "You chose " + player;
    computerDiv.innerHTML = "Computer chose " + computer;
}
