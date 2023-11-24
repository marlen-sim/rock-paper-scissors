function getComputerChoice() {
  let randomChoice = Math.round(Math.random() * 10);

  if (randomChoice < 3) {
    return "rock";
  } else if (randomChoice <= 6 && randomChoice >= 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerWins =0
let computerWins =0

function playRound(playerSelection, computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return playerWins++;
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) {
      return computerWins++;
    } else {
      return "Ничья";
    }
  }

let computerSelection = getComputerChoice();

const bunttons = document.querySelector(".buttons");
const rounds = document.querySelector(".rounds");
const moves = document.querySelector(".moves");
const winner = document.querySelector(".winner");
let totalRoundsLeft = 5;


bunttons.addEventListener("click", (event) => {
  let target = event.target;
  let playerSelection = target.textContent;
  let para = document.createElement("p");
  
  para.textContent = `Игрок выбрал: ${playerSelection} Компютер выбрал ${computerSelection}`;
  moves.appendChild(para);
 
  if (playerWins === 5) {
    winner.textContent = "Игрок победил";
    
  } else if (computerWins === 5) {
    winner.textContent = "Компютер победил";
    
  } else {
    ("Ничья");
  }

  switch (target.className) {
    case "rock":
      playRound(playerSelection, computerSelection);
      computerSelection = getComputerChoice();
      break;

    case "paper":
      playRound(playerSelection, computerSelection);
      computerSelection = getComputerChoice();
      break;

    case "scissors":
      playRound(playerSelection, computerSelection);
      computerSelection = getComputerChoice();
      break;
  }

  rounds.textContent = `Игрок: ${playerWins} Компютер: ${computerWins}`;

});






