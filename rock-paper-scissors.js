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



console.log(getComputerChoice());
let playerScore = 0;
let computerScore = 0;
let score = "";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock'){
      return score = "Tie!";
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
      computerScore += 1;
      return score = "You lost! Paper beats rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
      playerScore += 1;
      return score = "You win! Rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
      playerScore += 1;
      return score = "You win! Paper beats rock";
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
      computerScore += 1;
      return score = "You lost! Scissors beats paper";
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return score = "Tie!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
      playerScore += 1;
      return score = "You win! Scissors beats paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return score = "Tie!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
      computerScore += 1;
      return score = "You lost! Rock beats scissors";
    } else return "Choose between rock, paper or scissors";


};

  let i = 0; 
  while (i < 5){
    let playerSelection = prompt('what will you play?');
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    i++;
    console.log('Player score: ', playerScore, 'Computer score: ', computerScore, score);
  };
 
  function playGame(playerScore, computerScore) {
    let winningScore = 3;
    if (playerScore === winningScore){
      alert("You won the game!");
    } else {
      alert("You lost the game!");
    };
 
    

  };

  

playGame();












