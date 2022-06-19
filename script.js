/**
 * Returns "Rock", "Paper", or "Scissors" randomly.
 */
function computerPlay() {
    // Generates either 0, 1, or 2.
    let computerChoice = Math.floor(Math.random() * 3);

    // Translates the choice to rock, paper, or scissors.
    switch (computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

/**
 * Starts one round of P v C rock paper scissors and returns a string that
 * states the winner.
 */
function playRound(playerSelection, computerSelection) {
    // Modifies playerSelection so it becomes case insensitive.
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());

    // Guards the game against false input from player.
    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        return playRound(prompt("Please enter Rock, Paper, or Scissors! "), computerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
        return `You picked ${playerSelection} and the computer picked ${computerSelection}. It's a tie!`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

/**
 * Starts a 5-round game that keeps score and records the winner or loser
 * at the end.
 */
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let gameMessage = playRound(prompt("Rock, Paper, or Scissors? "), computerPlay());
        console.log(gameMessage);
        if (gameMessage.charAt(4) === 'W') {
            playerScore++;
        } else if (gameMessage.charAt(4) === 'L') {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You won the 5-round game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the 5-round game");
    } else {
        console.log("The 5-round game is a tie!");
    }
}

game();
