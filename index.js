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

let computerSelection = getComputerChoice();
// let playerSelection = prompt('Rock, paper, scissors?').toLowerCase();

function win(playerSelection, computerSelection) {
    return (
        'You chose ' +
        playerSelection +
        ' and the computer chose ' +
        computerSelection +
        '. You win!'
    );
}

function tie(playerSelection, computerSelection) {
    return (
        'You chose ' +
        playerSelection +
        ' and the computer chose ' +
        computerSelection +
        ". It's a tie!"
    );
}

function lose(playerSelection, computerSelection) {
    return (
        'You chose ' +
        playerSelection +
        ' and the computer chose ' +
        computerSelection +
        '. You lose!'
    );
}

function playRound(playerSelection, computerSelection) {
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

// console.log(playRound(playerSelection, computerSelection));

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', () =>
    console.log(playRound('rock', computerSelection))
);
paperBtn.addEventListener('click', () =>
    console.log(playRound('paper', computerSelection))
);
scissorsBtn.addEventListener('click', () =>
    console.log(playRound('scissors', computerSelection))
);
