//make a function that will randomly return rock, paper, or scissors from the computer//

let randomNumber = Math.floor((Math.random() * 4));
function getComputerChoice(){
  if (randomNumber === 0){
    getComputerChoice = 'rock';
  } else if(randomNumber === 1){
    getComputerChoice = 'paper';
  } else {
    getComputerChoice = 'scissors';
  }
 
}

console.log(getComputerChoice());
