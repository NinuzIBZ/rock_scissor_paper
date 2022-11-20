const player = document.querySelector('.player-name')

const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');

const computer = document.querySelector('.comp');
const container = document.querySelector('.container')

const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const rstButton = document.querySelector('.reset')
const printScore = document.querySelector('.score')

const options = ['rock','scissor','paper']

function getName() {
    let pName = 'Player Name';
        pName = prompt("Hi there! What's your name?");
    if(pName === null) {
        player.innerText = 'No Name';
    } else {
        player.innerText = pName;
    }
};
//getName();

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
}

computer.addEventListener('click', function() {
    alert('Mind your business!');
},
{ once: true });

let playerScore = parseInt(document.querySelector('.player-score').innerHTML);
let computerScore = parseInt(document.querySelector('.computer-score').innerHTML);

function playRound(playerSelection,computerSelection) {

    if(computerSelection == playerSelection) {    
        printScore.innerText = `Tie! You had ${playerSelection} & Computer ${computerSelection}`
        return;
    } else if(
        (computerSelection == 'rock' && playerSelection == 'scissor') || 
        (computerSelection == 'scissor' && playerSelection == 'paper') || 
        (computerSelection == 'paper' && playerSelection == 'rock') 
    ) {
        computerScore++;
        cScore.innerText = computerScore;
        printScore.innerText = `Ops! ${computerSelection} beat ${playerSelection}. You lost!`
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissor') || 
        (playerSelection == 'scissor' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock') 
    ) {
        playerScore++;
        pScore.innerText = playerScore;
        printScore.innerText = `Lucky Man! ${playerSelection} beat ${computerSelection}. You Win!`
    }
    winner()
}

function winner() {
    if(playerScore === 5) {
        rock.disabled = 'disabled';
        scissor.disabled = 'disabled';
        paper.disabled = 'disabled';
        computer.disabled = 'disabled';
        pScore.innerText = playerScore;
        printScore.innerText = 'YOU WIN!';
        setTimeout(() => {
            printScore.innerText = 'PRESS RESET TO START A NEW ROUND!' 
        }, 300);
    } else if(computerScore === 5) {
        rock.disabled = 'disabled';
        scissor.disabled = 'disabled';
        paper.disabled = 'disabled';
        computer.disabled = 'disabled';
        cScore.innerText = computerScore;
        printScore.innerText = 'YOU LOST!';
        setTimeout(() => {
            printScore.innerText = 'PRESS RESET TO START A NEW ROUND!'
        }, 300);
    }
}

function resetRound() {
    playerScore = 0;
    pScore.innerText = 0;
    computerScore = 0;
    cScore.innerText = 0;
}

rstButton.addEventListener('click', resetRound);