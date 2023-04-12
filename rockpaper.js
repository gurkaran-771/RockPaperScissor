
function getComputerChoice(){
  //math.random()*max no and math.floor is used to round up numbers otherwise 
  //answer will be given in decimals. we need 

  let randomNumber;
  let computerChoice;
  randomNumber=  Math.floor(Math.random()*3);
  
  //the if-else is to decide what computer chose based on the number produced on random between 0,1 or 2
  if (randomNumber ==0){
       return computerChoice =  'Rock'
  }
  else if (randomNumber==1) {
      return computerChoice = 'Paper'
  }
  else {
      return computerChoice =  'Scissor'
  }


}
console.log(getComputerChoice())



function singleRound (playerSelection, computerSelection) {

let playerInput= prompt ('What are you going for? Rock, Paper or Scissor?')
playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
console.log('The player chose '  + playerSelection)
computerSelection = getComputerChoice()  ;
console.log (`the computer chose ${computerSelection}`)



if (playerSelection == computerSelection) { 
 return  result = 'It\'s a draw'
}
  
 else if (playerSelection == 'Rock' && computerSelection == 'Scissor'
  || playerSelection == 'Paper' && computerSelection == 'Rock'
  || playerSelection == 'Scissor' && computerSelection == 'Paper') {
 return result  = 'You win'
 }
 
   else if (playerSelection != 'Rock' && playerSelection!=  'Paper' && playerSelection!= 'Scissor') {
     
     return false
   }
else {return result = 'You lose'}
  
}



function game() {
for (let i = 0; i < 5; i++) {
  singleRound();
 ;
}
}

game();

game()