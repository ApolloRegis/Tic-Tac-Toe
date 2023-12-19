function getComputerChoice() {
    let choice = Math.random();
    if(choice<0.33) {
        return('rock');
    } else if(choice<0.66) {
        return('paper');
    } else {
        return('scissors');
    };
  };

  const playRound = function(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
      console.log('It\'s a tie!');
    } else if((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
      console.log('You win!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerSelection + '.'); 
    } else {
      console.log('You lose!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + playerSelection + '.');
    };
  };
  
  const body = document.querySelector('body');
  
const btn1 = document.createElement('button');
btn1.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
btn1.textContent = 'Rock';
body.appendChild(btn1);
const btn2 = document.createElement('button');
btn2.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});
btn2.textContent ='Paper';
body.appendChild(btn2);
const btn3 = document.createElement('button');
btn3.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});
btn3.textContent = 'Scissors';
body.appendChild(btn3);
  