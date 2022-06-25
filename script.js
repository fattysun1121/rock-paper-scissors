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
    const roundText = document.createElement('p');
    const div = document.querySelector('.result');

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        roundText.textContent = "You Win! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        roundText.textContent = "You Win! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        roundText.textContent = "You Win! Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
        roundText.textContent = `You picked ${playerSelection} and the computer picked ${computerSelection}. It's a tie!`;
    } else {
        roundText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    div.innerHTML = '';
    div.appendChild(roundText);

    if (roundText.textContent.charAt(4) === 'W') {
        playerScore++;
    } else if (roundText.textContent.charAt(4) === 'L') {
        computerScore++;
    }

    recordScore(div);
}

/**
 * Starts a 5-round game that keeps score and records the winner or loser
 * at the end.
 */
function game() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    rock.addEventListener('click', () => playRound('rock', computerPlay()));
    paper.addEventListener('click', () => playRound('paper', computerPlay()));
    scissors.addEventListener('click', () => playRound('scissors', computerPlay()));
}

/**
 * Helper function to record the score and declare winner of a 5-point game.
 */
function recordScore(board) {
    const gameText = document.createElement('p');
    if (playerScore === 5) {
        gameText.textContent = 'The player is the winner of the game.';

        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        gameText.textContent = 'The computer is the winner of the game.';

        playerScore = 0;
        computerScore = 0;
    } else {
        gameText.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
    board.appendChild(gameText);
}


// set up webpage
const loaderPara = document.querySelector('.loader > p');
const loaderText = `Break The Game is a breakdance game similar to the game HORSE in
       basketball. This game is usually played by two players, each of
       which throws a small round and the other one duplicates it.
       Players get a letter of the word "break" when they
       fail to duplicate a round. The first one to obtain all five
       letters of "break" loses.`
const speed = 50;
let i = 0;

function typeWriter() {
    if (i < loaderText.length) {
        loaderPara.innerHTML += loaderText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
function showLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
}

window.addEventListener('load', () => {
    typeWriter();
    showLoader();
});


// actual game
let playerScore = 0;
let computerScore = 0;

game();






