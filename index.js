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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return playerScore++;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    return computerScore++;
  } else {
    return "Ничья";
  }
}

let computerSelection = getComputerChoice();

const bunttons = document.querySelector(".buttons");
const rounds = document.querySelector(".rounds");
const moves = document.querySelector(".moves");
const winner = document.querySelector(".winner");

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

bunttons.addEventListener("click", (event) => {
  let target = event.target;
  let playerSelection = target.textContent;
  let para = document.createElement("p");

  function playGame() {
    if (isGameOver()) {
      return;
    }
    playRound(playerSelection, computerSelection);
    computerSelection = getComputerChoice();
  }
  if (!isGameOver()) {
    para.textContent = `Игрок выбрал: ${playerSelection} Компютер выбрал ${computerSelection}`;
    moves.appendChild(para);
  }

  if (playerScore === 5) {
    winner.textContent = "Игрок победил";
  } else if (computerScore === 5) {
    winner.textContent = "Компютер победил";
  } else {
    ("Ничья");
  }

  switch (target.className) {
    case "rock":
      playGame();
      break;

    case "paper":
      playGame();
      break;

    case "scissors":
      playGame();
      break;
  }

  rounds.textContent = `Игрок: ${playerScore} Компютер: ${computerScore}`;
});
