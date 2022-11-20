const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');

const computer = document.querySelector('.comp');
const container = document.querySelector('.container')

const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const rstButton = document.querySelector('.reset')

const options = ['rock','scissor','paper']

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}

document.getElementById('rock').onclick = getPlayerChoice;
document.getElementById('scissor').onclick = getPlayerChoice;
document.getElementById('paper').onclick = getPlayerChoice;

function getPlayerChoice() {
    let playerSelection = this.id
    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    console.log(`${playerSelection} & ${computerSelection}`);
}

computer.addEventListener('click', function() {
    alert('I do my own things! Dont you worry!')
})
let playerScore = parseInt(document.querySelector('.player-score').innerHTML);
let computerScore = parseInt(document.querySelector('.computer-score').innerHTML);

function playRound(playerSelection,computerSelection) {

    if(computerSelection == playerSelection) {    
        return;
    } else if(
        (computerSelection == 'rock' && playerSelection == 'scissor') || 
        (computerSelection == 'scissor' && playerSelection == 'paper') || 
        (computerSelection == 'paper' && playerSelection == 'rock') 
    ) {
        computerScore++;
        cScore.innerText = computerScore;
        roundWinner = 'computer';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissor') || 
        (playerSelection == 'scissor' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock') 
    ) {
        playerScore++;
        pScore.innerText = playerScore;
        roundWinner = 'player';
    }
    winner()
}

function winner() {
    if(playerScore === 5) {
        alert('You Win!');
        return resetRound();
    } else if(computerScore === 5) {
        alert('You Lost!');
        return resetRound();
    }
}

function resetRound() {
    playerScore = 0;
    pScore.innerText = 0;
    computerScore = 0;
    cScore.innerText = 0;
}

rstButton.addEventListener('click', resetRound);