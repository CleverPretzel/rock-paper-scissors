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
  let humanChoice = prompt('rock, paper or scissors?');
  console.log(humanChoice);
}

getHumanChoice();