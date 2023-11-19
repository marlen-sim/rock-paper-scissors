let playerChoise = prompt("Выбери вариант: ");
let playerSelection = playerChoise.toLowerCase()


function getComputerChoice() {
   randomChoise = Math.round(Math.random() * 10)
   console.log(randomChoise)

   if (randomChoise < 3) {
    return "rock"
   } else if (randomChoise <= 6 && randomChoise >= 3) {
    return "paper"
   } else {
    return "scissors"
   }

}


let computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    console.log('Игрок: ',playerSelection);
    console.log('Компютер: ',computerSelection);

    if (
        playerSelection ==='rock' && computerSelection ==='scissors' 
    || playerSelection ==='scissors' && computerSelection === 'paper' 
    || playerSelection ==='paper' && computerSelection ==='rock')
    {
        return 'Ты победил'
    } else if ((
        playerSelection ==='rock' && computerSelection ==='paper' 
    || playerSelection ==='scissors' && computerSelection === 'rock' 
    || playerSelection ==='paper' && computerSelection ==='scissors')) {
        return 'Ты проиграл'
    } else {
        return 'Ничья'
    }

}

console.log(playRound(playerSelection,computerSelection))