let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    return 'Scissors';
  } else if (choice > 0.33 && choice < 0.66) {
    return 'Paper';
  } else {
    return 'Rock';
  }
}