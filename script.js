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
 * Starts one round of rock paper scissors.
 */
function playRound(playerSelection, computerSelection) {

}

/**
 * Starts a 5-round game that keeps score and records the winner or loser
 * at the end.
 */
function game() {

}
