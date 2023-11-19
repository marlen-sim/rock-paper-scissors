function getComputerChoice() {
    let randomChoice = Math.round(Math.random() * 10)
 
    if (randomChoice < 3) {
     return "rock";
    } else if (randomChoice <= 6 && randomChoice >= 3) {
     return "paper";
    } else {
     return "scissors";
    }
 }
 
 let computerSelection = getComputerChoice();
 
 function game() {
     let count;
     function playRound(playerSelection, computerSelection) {
         if (playerSelection === 'rock' && computerSelection === 'scissors' 
             || playerSelection === 'scissors' && computerSelection === 'paper' 
             || playerSelection === 'paper' && computerSelection === 'rock') {
             return console.log('Ты победил');
         } else if (playerSelection === 'rock' && computerSelection === 'paper' 
             || playerSelection === 'scissors' && computerSelection === 'rock' 
             || playerSelection === 'paper' && computerSelection === 'scissors') {
             return console.log('Ты проиграл');
         } else {
             return console.log('Ничья');
         }
     }
 
     for (let index = 1; index < 6; index++) {
         console.log(count = index);
         let playerSelection = prompt("Выбери вариант: ").toLowerCase();
         playRound(playerSelection, computerSelection);
         computerSelection = getComputerChoice();
     }
 
     return "Конец игры";
 }
 
 console.log(game());
 