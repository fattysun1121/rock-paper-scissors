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
        const letter = document.querySelector(`.you-break-block > .${breakArr[playerScore++]}`);
        letter.classList.add('letter-shown');
    } else if (roundText.textContent.charAt(4) === 'L') {
        const letter = document.querySelector(`.machine-break-block > .${breakArr[computerScore++]}`);
        letter.classList.add('letter-shown');
    }

    checkScore(div);
}

/**
 * Deactivate the rock, paper, and scissors buttons.
 */
 function deactivateButtons() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    rock.onclick = null;
    paper.onclick = null;
    scissors.onclick = null;
 }
/**
 * Activate the rock, paper, and scissors buttons.
 */
function activateButtons() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    rock.onclick = () => playRound('rock', computerPlay());
    paper.onclick = () => playRound('paper', computerPlay());
    scissors.onclick = () => playRound('scissors', computerPlay());
}

/**
 * Helper function for hiding every letter to reset the game.
 */
function hideLetters() {
    for (const char of breakArr) {
        const playerLetter = document.querySelector(`.you-break-block > .${char}`);
        const computerLetter = document.querySelector(`.machine-break-block > .${char}`);
        playerLetter.classList.remove('letter-shown');
        computerLetter.classList.remove('letter-shown');
    }

}
/**
 * Helper function to check the score and declare winner of a 5-point game.
 */
function checkScore(board) {
    const gameText = document.createElement('p');
    let keepPlaying = true;
    if (playerScore === 5) {
        gameText.textContent = 'The player is the winner of the game.';
        keepPlaying = false;
    } else if (computerScore === 5) {
        gameText.textContent = 'The computer is the winner of the game.';
        keepPlaying = false;
    }
    if (!keepPlaying) {
        board.appendChild(gameText);
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset!';
        resetButton.addEventListener('click', reset);
        board.appendChild(resetButton);
        deactivateButtons();
    }

}

function reset() {
    hideLetters();
    playerScore = 0;
    computerScore = 0;
    activateButtons();
    const result = document.querySelector('.result');
    result.innerHTML = '';
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
let breakArr = ['B', 'R', 'E', 'A', 'K'];

/**
 * Shows text one by one on the screen like a typewriter.
 */
function typeWriter() {
    if (i < loaderText.length) {
        loaderPara.innerHTML += loaderText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

/**
 * Hides the loader after it's loaded.
 */
function showLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
}

/**
 * Sets up five boxes for scoring.
 */
function setUpBreak() {
    const you = document.querySelector('.you > .you-break-block');
    const machine = document.querySelector('.machine > .machine-break-block');
    for (const char of breakArr) {
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        span1.textContent = char;
        span1.classList.add('break');
        span1.classList.add(char);
        span2.textContent = char;
        span2.classList.add('break');
        span2.classList.add(char);
        you.appendChild(span1);
        machine.appendChild(span2);
    }
}

window.addEventListener('load', () => {
    typeWriter();
    showLoader();
    setUpBreak();
});

// actual game
let playerScore = 0;
let computerScore = 0;

activateButtons();






