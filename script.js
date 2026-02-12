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

function getHumanChoice() {
  return prompt('rock, paper or scissors?').toLowerCase();
}

function playGame() {

  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === 'rock' && computerChoice === 'paper') ||
      (humanChoice === 'paper' && computerChoice === 'scissors') ||
      (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper') ||
      (humanChoice === 'rock' && computerChoice === 'scissors')
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`Draw! Both chose ${humanChoice}`);
    }
  }

  for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Computer: ${computerScore} Human: ${humanScore}`);
  }

}

playGame();