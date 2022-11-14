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

    alert('You wrote some bullshit nub!')
}

//playRound()

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
        else {
            i
        }
    }

    winner(playerScore,computerScore)
}

function winner(playerScore,computerScore) {
    if(playerScore > computerScore) {
        alert('You win!')
    }
    else {
        alert('You lost!')
    }
}

game()
winner()

