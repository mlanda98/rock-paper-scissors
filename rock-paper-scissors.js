//make a function that will randomly return rock, paper, or scissors from the computer//
let randomNumber = Math.floor((Math.random() * 4));
function getComputerChoice(){
  if (randomNumber === 0){
    return 'rock';
  } else if(randomNumber === 1){
    return 'paper';
  } else {
    return 'scissors';
  } 
};


let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock'){
      return "Tie! You both chose rock";
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
      computerScore++;
      playRound(playerScore, computerScore);
      return "You lost! Paper beats rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
      playerScore++;
      playRound(playerScore, computerScore);
      return "You win! Rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
      return "Tie! You both chose paper";
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
      playerScore++;
      playRound(playerScore, computerScore);
      return "You win! Paper beats rock";
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
      computerScore++
      playRound(playerScore, computerScore);
      return "You lost! Scissors beats paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
      return "Tie! You both chose scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
      playerScore++;
      playRound(playerScore, computerScore);
      return "You win! Scissors beats paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
      computerScore++;
      playRound(playerScore, computerScore);
      return "You lost! Rock beats scissors";
    } else return "Choose between rock, paper or scissors";
    

};


let i = 0;
  while (i < 5){
    const playerSelection = prompt('what will you play?');
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    i++;
  };


function playGame(playerScore, computerScore) {
  let winningScore = 3;
  if (playerScore === winningScore){
    return alert("You won the game!");
  } else if (computerScore === winningScore){
    return alert("You lost the game");
  } else {
    console.log('Player score: ', playerScore, 'Computer score: ', computerScore);
    return playerScore, computerScore;
    
   
  };
  
 
};



   














