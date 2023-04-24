let result;
function getComputerChoice() {
  //math.random()*max no and math.floor is used to round up numbers otherwise 
  //answer will be given in decimals. we need 

  let randomNumber;
  let computerChoice;
  randomNumber = Math.floor(Math.random() * 3);

  //the if-else is to decide what computer chose based on the number produced on random between 0,1 or 2
  if (randomNumber == 0) {
    return computerChoice = 'Rock'
  }
  else if (randomNumber == 1) {
    return computerChoice = 'Paper'
  }
  else {
    return computerChoice = 'Scissor'
  }


}




function singleRound(playerSelection, computerSelection) {
  //player input
  let playerInput = prompt('What are you going for? Rock, Paper or Scissor?')
  playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
  console.log('The player chose ' + playerSelection)
  //computerSelection is whatever the result of getComputerChoice function will be
  computerSelection = getComputerChoice();
  console.log(`the computer chose ${computerSelection}`)

  //if conditions to determine the winner of a single round

  if (playerSelection == computerSelection) {
    return result = 'Ends up in draw'
  }

  else if (playerSelection == 'Rock' && computerSelection == 'Scissor'
    || playerSelection == 'Paper' && computerSelection == 'Rock'
    || playerSelection == 'Scissor' && computerSelection == 'Paper') {
    return result = 'You win'
  }

  else if (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissor') {

    return console.log(result = 'Invalid Choice. Pick again')
  }
  else { return result = 'You lose' }

}

function game() {
  //initialising variables that will be incremented depending on if player wins or computer
  let playerWin = 0;
  let computerWin = 0;
  let drawMatch = 0;
  //for loop to run the singleRound() 5 times
  for (let i = 0; i < 5; i++) {
    singleRound()
    console.log('singleRound result:', result)
    //result variable is the value we get everytime we invoke singleRound()
    //   if conditions where the number count goes up depending on win or lose 
    if (result == 'You lose') {
      console.log(computerWin++)
    }
    else if (result == 'You win') {
      console.log(playerWin++)
    }
    else if (result == 'Ends up in draw') {
      console.log(drawMatch++)

    }
    //look at else. it counteracts the increment if the result isnt win lose or draw so the round is stuck until we put the right input

    else {
      i--

    }
  }

  // if conditions that declare winner of the round after checking the total wins and losses
  if (playerWin > computerWin) {
    console.log('Congratulations! You won the match')
  }
  else if (playerWin < computerWin) {
    console.log('You lost. Better luck next time :(')
  }
  else if (playerWin = computerWin) {
    console.log('The match is tied(')

  }
  else { game() }

}

game()

