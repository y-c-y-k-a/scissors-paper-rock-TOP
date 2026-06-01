function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    return 'scissors';
  } else if (choice > 0.33 && choice < 0.66) {
    return 'paper';
  } else {
    return 'rock';
  }
}

function getHumanChoice() {
  return prompt('What is your choice?', 'Scissors');
}

function playRound(humanChoice, computerChoice) {
  let lowerCaseHumanChoice = humanChoice.toLowerCase();
  let lowerCaseComputerChoice = computerChoice.toLowerCase();

  if (lowerCaseHumanChoice === 'scissors' && lowerCaseComputerChoice === 'scissors'
    || lowerCaseHumanChoice === 'paper' && lowerCaseComputerChoice === 'paper'
    || lowerCaseHumanChoice === 'rock' && lowerCaseComputerChoice === 'rock'
  ) {
    return "It's a draw!";
  } else if (lowerCaseHumanChoice === 'scissors' && lowerCaseComputerChoice === 'paper') {
    playerWins++;
    return 'Scissors cuts paper, you win!';
  } else if (lowerCaseHumanChoice === 'scissors' && lowerCaseComputerChoice === 'rock') {
    computerWins++;
    return 'Rock beats scissors, you lose!';
  } else if (lowerCaseHumanChoice === 'paper' && lowerCaseComputerChoice === 'scissors') {
    computerWins++;
    return 'Scissors cuts paper, you lose!';
  } else if (lowerCaseComputerChoice === 'paper' && lowerCaseComputerChoice === 'rock') {
    playerWins++;
    return 'Paper wraps rock, you win!';
  } else if (lowerCaseHumanChoice === 'rock' && lowerCaseComputerChoice === 'scissors') {
    playerWins++;
    return 'Rock beats scissors, you win!';
  } else if (lowerCaseHumanChoice === 'rock' && lowerCaseComputerChoice === 'paper') {
    computerWins++;
    return 'Paper wraps rock, you lose!';
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();