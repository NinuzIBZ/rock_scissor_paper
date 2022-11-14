const options = ['rock','scissor','paper']

let playerSelection = 
let computerSelection = 

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}

function playerInput() {
    let playerChoice = prompt('Rock,Scissor or Paper?')
    return playerChoice.toLowerCase()
}

