const rock = document.querySelector('.rock');
const scissor = document.querySelector('.scissor');
const paper = document.querySelector('.paper');
const computer = document.querySelector('.comp');
const container = document.querySelector('.container')
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');

const options = ['rock','scissor','paper']

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}

rock.addEventListener('click', function() {
    playRound('rock',getComputerChoice());
    console.log(playRound('rock'),getComputerChoice())
});

scissor.addEventListener('click', function() {
    playRound('scissor',getComputerChoice());
    console.log(playRound(),getComputerChoice())
});

paper.addEventListener('click', function() {
    playRound('paper',getComputerChoice());
    console.log(playRound(),getComputerChoice())
});

computer.addEventListener('click', function() {
    alert('I do my own things! Dont you worry!')
})

function playRound(playerSelection,computerSelection) {

    let playerScore = parseInt(document.querySelector('.player-score').innerHTML);
    let computerScore = parseInt(document.querySelector('.computer-score').innerHTML);

    if(computerSelection == playerSelection) {
        roundWinner = 'tie';
        alert('Was a Tie! Keep going!')
    } else if(
        (computerSelection == 'rock' && playerSelection == 'scissor') || 
        (computerSelection == 'scissor' && playerSelection == 'paper') || 
        (computerSelection == 'paper' && playerSelection == 'rock') 
    ) {
        //display the result on the div.
        computerScore++;
        cScore.innerText = computerScore;
        roundWinner = 'computer';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissor') || 
        (playerSelection == 'scissor' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock') 
    ) {
        //display the result on the div.
        playerScore++;
        pScore.innerText = playerScore;
        roundWinner = 'player';
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for(let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        const playerSelection = playerInput()

        let winner = playRound(playerSelection,computerSelection)

        if(winner === 'playerScore') {
            playerScore++
        }
        else if(winner === 'computerScore') {
            computerScore++
        }
    }

    winner(playerScore,computerScore)
}

function winner(playerScore,computerScore) {
    if(playerScore > computerScore) {
        alert('You Win!');
    } else if (computerScore > playerScore) {
        alert('You Lost!')
    } else {
        alert('Draw!')
    }
}

//game();

