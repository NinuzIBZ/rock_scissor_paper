const options = ['rock','scissor','paper']

let playerSelection = playerInput()
let computerSelection = getComputerChoice()

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}

function playerInput() {
    let playerChoice = prompt('Rock,Scissor or Paper?')
    return playerChoice.toLowerCase()
}

function playRound(playerSelection,computerSelection) {
    if(computerSelection == playerSelection) {
        return alert(`Computer had ${computerSelection} & you had ${playerSelection}. It's a draw!`)
    }
    else if(computerSelection == 'rock' && playerSelection == 'scissor' || computerSelection == 'scissor' && playerSelection == 'paper' || computerSelection == 'paper' && playerSelection == 'rock' ) {
        return alert(`Computer had ${computerSelection} & you had ${playerSelection}. You lost!`)
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissor' || playerSelection == 'scissor' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock' ) {
        return alert(`Computer had ${computerSelection} & you had ${playerSelection}. You win!`)
    }
}


