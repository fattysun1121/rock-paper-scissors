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

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());

/**
 * Starts one round of P v C rock paper scissors and returns a string that
 * states the winner.
 */
function playRound(playerSelection, computerSelection) {
    // Modifies playerSelection so it becomes case insensitive.
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
/**
 * Starts a 5-round game that keeps score and records the winner or loser
 * at the end.
 */
function game() {

}
