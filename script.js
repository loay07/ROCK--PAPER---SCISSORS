// assigning elements

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("rock");
const buttons = document.querySelectorAll(".btn");
const playerPick = document.querySelector(".you-pick");
const computerPick = document.querySelector(".computer-pick");
const computerScoreDisplay = document.querySelector(".score-computer");
const playerScoreDisplay = document.querySelector(".score-you");
const winnerDisplay = document.querySelector(".winner");
const containerPick = document.querySelector(".container-pick");

// map for each play
const plays = new Map([
  [1, "Rock🪨"],
  [2, "Paper📃"],
  [3, "Scissors✂️"],
]);
//removing hidden
const removeHidden = function () {
  winnerDisplay.classList.remove("hidden");
  containerPick.classList.remove("hidden");
};
//pick message logic

const pickMessage = function (playerChoice, computerChoice) {
  playerPick.textContent = `You Picked ${plays.get(playerChoice)}`;
  computerPick.textContent = `Computer Picked ${plays.get(computerChoice)}`;
};
// initializing score
let playerScore = 0;
let computerScore = 0;

//function for randomizer

const randomizer = function () {
  return Math.trunc(Math.random() * 3) + 1;
};

// logic

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const playerChoice = index + 1;
    const computerChoice = randomizer();
    removeHidden();
    pickMessage(playerChoice, computerChoice);
    //determining the winner
    if (computerChoice === playerChoice) {
      //draw
      winnerDisplay.textContent = `It's a draw!🤝`;
    } else if (
      //rock vs scissors
      (playerChoice === 1 && computerChoice === 3) ||
      //papers vs rock
      (playerChoice === 2 && computerChoice === 1) ||
      //scissors vs paper
      (playerChoice === 3 && computerChoice === 2)
    ) {
      //player win
      winnerDisplay.textContent = `You Won!🏆`;
      playerScore++;
      playerScoreDisplay.textContent = `You🧑: ${playerScore}`;
    } else {
      //player lose
      winnerDisplay.textContent = `You lost!😞`;
      computerScore++;
      computerScoreDisplay.textContent = `Computer💻: ${computerScore}`;
    }
  });
});
