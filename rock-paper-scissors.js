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



let playRound = (playerSelection, computerSelection) =>{
  let score = "";
    if (playerSelection === 'rock' && computerSelection === 'rock'){
      score = "Tie! You both chose rock";
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
      score = "You loose! Paper beats rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
      score = "You win! Rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
      score = "Tie! You both chose paper"
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
      score = "You win! Paper beats rock"
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
      score = "You loose! Scissors beats paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
      score = "Tie! You both chose scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
      score = "You win! Scissors beats paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
      score = "You loose! Rock beats scissors";
    } else score = "Choose between rock, paper or scissors";
    
    return console.log(score);
};






  let i = 0;
  while (i < 5){
    const playerSelection = prompt('what will you play?');
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    i++;
  };
  













