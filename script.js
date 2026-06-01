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

function playGame() {
  let computerWins = 0;
  let playerWins = 0;

  function playRound(humanChoice, computerChoice) {
    let lowerCaseHumanChoice = humanChoice.toLowerCase();
    let lowerCaseComputerChoice = computerChoice.toLowerCase();

    let humanSelection;
    let computerSelection;

    if (
      (lowerCaseHumanChoice === 'scissors' &&
        lowerCaseComputerChoice === 'scissors') ||
      (lowerCaseHumanChoice === 'paper' &&
        lowerCaseComputerChoice === 'paper') ||
      (lowerCaseHumanChoice === 'rock' && lowerCaseComputerChoice === 'rock')
    ) {
      console.log("It's a draw!");
      return;
    } else if (
      lowerCaseHumanChoice === 'scissors' &&
      lowerCaseComputerChoice === 'paper'
    ) {
      playerWins++;
      console.log('Scissors cuts paper, you win!');
      return;
    } else if (
      lowerCaseHumanChoice === 'scissors' &&
      lowerCaseComputerChoice === 'rock'
    ) {
      computerWins++;
      console.log('Rock beats scissors, you lose!');
      return;
    } else if (
      lowerCaseHumanChoice === 'paper' &&
      lowerCaseComputerChoice === 'scissors'
    ) {
      computerWins++;
      console.log('Scissors cuts paper, you lose!');
      return;
    } else if (
      lowerCaseComputerChoice === 'paper' &&
      lowerCaseComputerChoice === 'rock'
    ) {
      playerWins++;
      console.log('Paper wraps rock, you win!');
      return;
    } else if (
      lowerCaseHumanChoice === 'rock' &&
      lowerCaseComputerChoice === 'scissors'
    ) {
      playerWins++;
      console.log('Rock beats scissors, you win!');
      return;
    } else if (
      lowerCaseHumanChoice === 'rock' &&
      lowerCaseComputerChoice === 'paper'
    ) {
      computerWins++;
      console.log('Paper wraps rock, you lose!');
      return;
    }
  }

  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (playerWins > computerWins) {
    console.log('Congratulations! You won!');
    return;
  } else if (playerWins < computerWins) {
    console.log('You lose, sorry!');
    return;
  } else {
    console.log("It's a draw!");
    return;
  }
}

playGame();
