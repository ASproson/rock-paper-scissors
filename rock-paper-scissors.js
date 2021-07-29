// Create RPS in JS

// Secure user input and enforce rules

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  }
  else {
    console.log('Error!')
  }
}

// Generate AI choice

function getComputerChoice () {
  let compChoice = Math.floor(Math.random() * 3);
  switch (compChoice) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
    return 'scissors'
  }
}

// Determine winner

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'User wins!';
    }
  } if (userChoice === 'scissors') {
     if (computerChoice === 'rock') {
       return 'Computer wins!';
     } else {
       return 'User wins!';
     }
  } if (userChoice === 'paper') {
     if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'Computer wins!'
    }
  }
}

// Game function to tie the above together

function playGame () {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

// Call game function

playGame()
