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
 
 const bunttons = document.querySelector('.buttons')
 
 bunttons.addEventListener('click', (event) => {
 
 let target = event.target
 let playerSelection = target.textContent
 
     switch(target.className) {
         case 'rock': 
            
            playRound(playerSelection, computerSelection)
            computerSelection = getComputerChoice()
             break;
         
         case 'paper': 
          
            playRound(playerSelection, computerSelection)
            computerSelection = getComputerChoice()
             break;
         
         case 'scissors': 
        
            playRound(playerSelection, computerSelection)
            computerSelection = getComputerChoice()
             break;
         }
     }
 )
 

    
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

//  function game() {
//      let count;
     
 
//      for (let index = 1; index < 6; index++) {
//          console.log(count = index);
         
//          playRound(playerSelection, computerSelection);
//          computerSelection = getComputerChoice();
//      }
 
//      return "Конец игры";
//  }
 
//  console.log(game());
 
