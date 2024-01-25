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



function playRound(playerSelection, computerSelection){
  if (playerSelection === 'rock' && computerSelection === 'rock'){
    return 'Tie! You both chose rock';
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
    return 'You loose! Paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    return 'You win! Rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
    return 'Tie! You both chose paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    return 'You win! Paper beats rock'
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    return 'You loose! Scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
    return 'Tie! You both chose scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    return 'You win! Scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    return 'You loose! Rock beats scissors';
    } else return 'Choose between rock, paper or scissors';
  
};

let playerSelection = prompt('what will you play?');
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game
