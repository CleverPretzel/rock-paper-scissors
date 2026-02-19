const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const humanScoreEl = document.querySelector('#human-score');
const computerScoreEl = document.querySelector('#computer-score');
const resultsText = document.querySelector('#results-text');

let computerScore = 0;
let humanScore = 0;

rockButton.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
})

paperButton.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
})

scissorsButton.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
})

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  switch(randomNum) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }

}

function updateScores () {
  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')
  ) {
    resultsText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
    updateScores();
    if (checkForWinner()) announceWinner();
  } else if (
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'rock' && computerChoice === 'scissors')
  ) {
    resultsText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
    updateScores();
    if (checkForWinner()) announceWinner();
  } else {
    resultsText.textContent = `Draw! Both chose ${humanChoice}.`;
  }
}

function checkForWinner () {
  return (humanScore === 5 || computerScore === 5);
}

function announceWinner () {
  const winner = humanScore > computerScore ? 'Human' : 'Computer';
  resultsText.textContent += ` ${winner} wins!`;
}