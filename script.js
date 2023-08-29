const choices = ["rock", "paper", "scissors"];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

const choiceButtons = document.querySelectorAll(".choice");
const resultDisplay = document.getElementById("result");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const compChoice = computerChoice();
    const result = determineWinner(playerChoice, compChoice);
    resultDisplay.textContent = `Player chose ${playerChoice}, Computer chose ${compChoice}. ${result}`;
  });
});
