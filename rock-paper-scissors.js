function getComputerChoice(){
  let randomNumber = Math.floor((Math.random() * 4));
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
let tie = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector('#scissors');
const pScore = document.querySelector("#player-score");
const cScore = document.querySelector("#computer-score");
const tieText = document.querySelector("#result-tie");



rockButton.addEventListener("click", function(){
 let playerSelection = "rock";
 let computerSelection = getComputerChoice();
 playRound (playerSelection, computerSelection);
});

paperButton.addEventListener("click", function(){
 let playerSelection = "paper";
 let computerSelection = getComputerChoice();
 playRound (playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", function(){
 let playerSelection = "scissors";
 let computerSelection = getComputerChoice();
 playRound (playerSelection, computerSelection);
});

function playerWin(){
  ++playerScore;
  pScore.innerHTML = "Your score is: " + playerScore;
};

function computerWin(){
  ++computerScore;
  cScore.innerHTML = "The computer score is: " + computerScore;
};

function tieWin(){
  ++tie;
  tieText.innerHTML = "Tie rounds: " + tie;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock'){
      tieWin();
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
      computerWin();
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
      playerWin();
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
      playerWin();
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
      computerWin();
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
      tieWin();
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
      playerWin();
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
      tieWin();
    } else  if (playerSelection === 'scissors' && computerSelection === 'rock'){
      computerWin();
    }

    if (playerScore === 5){
      alert("You won!");
    } else if (computerScore === 5){
      alert("You lost!");
    }
  };

   
 













