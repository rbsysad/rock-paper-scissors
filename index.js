function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let wins = 0;
let ties = 0;
let losses = 0;

function win(playerSelection, computerSelection) {
    wins += 1;
    winResult.textContent = 'Wins: ' + wins;
    if (wins === 5) {
        alert('You win!');
    }

    return (
        'You chose ' +
        playerSelection +
        ' and the computer chose ' +
        computerSelection +
        '. You win!'
    );
}

function tie(playerSelection, computerSelection) {
    ties += 1;
    tieResult.textContent = 'Ties: ' + ties;

    return (
        'You chose ' +
        playerSelection +
        ' and the computer chose ' +
        computerSelection +
        ". It's a tie!"
    );
}

function lose(playerSelection, computerSelection) {
    losses += 1;
    lossResult.textContent = 'Losses: ' + losses;
    if (losses === 5) {
        alert('You lose!');
    }

    return (
        'You chose ' +
        playerSelection +
        ' and the computer chose ' +
        computerSelection +
        '. You lose!'
    );
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    return playerSelection === computerSelection
        ? tie(playerSelection, computerSelection)
        : playerSelection === 'rock' && computerSelection === 'paper'
        ? lose(playerSelection, computerSelection)
        : playerSelection === 'rock' && computerSelection === 'scissors'
        ? win(playerSelection, computerSelection)
        : playerSelection === 'paper' && computerSelection === 'rock'
        ? lose(playerSelection, computerSelection)
        : playerSelection === 'paper' && computerSelection === 'scissors'
        ? lose(playerSelection, computerSelection)
        : playerSelection === 'scissors' && computerSelection === 'rock'
        ? lose(playerSelection, computerSelection)
        : playerSelection === 'scissors' && computerSelection === 'paper'
        ? win(playerSelection, computerSelection)
        : '';
}

const resultsDiv = document.querySelector('#results-div');
const counterDiv = document.querySelector('#counter-div');

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const winResult = document.querySelector('.wins');
const lossResult = document.querySelector('.losses');
const tieResult = document.querySelector('.ties');

rockBtn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = playRound('rock');
    resultsDiv.appendChild(p);
});

paperBtn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = playRound('paper');
    resultsDiv.appendChild(p);
});

scissorsBtn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = playRound('scissors');
    resultsDiv.appendChild(p);
});
