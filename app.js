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


