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
      return 'It\'s a tie!';
    } else if((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
      return 'You win!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerSelection + '.'; 
    } else {
      return 'You lose!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + playerSelection + '.';
    };
  };

const body = document.querySelector('body');

const board = document.createElement('div');
const display = document.createElement('span');
board.appendChild(display);
body.appendChild(board);

  let pscore = 0;
  let cscore = 0;

  const game = function(ply, chlng) {
    let result = playRound(ply, chlng);
    
    if(pscore === 4 && result.includes('You win')){
      if(pscore > cscore) {
        pscore += 1;
      display.textContent = result + ' ' + pscore + ' ' + cscore + ' ' + 'Player wins game!';
      } else if(pscore < cscore) {
        pscore += 1;
      display.textContent = result + ' ' + pscore + ' ' + cscore + ' ' + 'Computer wins game!';
      } else {
        pscore += 1;
      display.textContent = result + ' ' + pscore + ' ' + cscore + ' ' + 'Tie game!';
      };
      pscore -= pscore;
      cscore -= cscore;
    } else if(result.includes('You win')) {
      pscore += 1;
      display.textContent = result + ' ' + pscore + ' ' + cscore;
    } else if(result.includes('You lose')) {
      cscore += 1;
      display.textContent = result + ' ' + pscore + ' ' + cscore;
    } else if(result.includes('It\'s a tie!')) {
      display.textContent = result + ' ' + pscore + ' ' + cscore;
    };
  };
  
const btn1 = document.createElement('button');
btn1.addEventListener('click', () => {
    game('rock', getComputerChoice());
});
btn1.textContent = 'Rock';
body.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.addEventListener('click', () => {
  game('paper', getComputerChoice());
});
btn2.textContent ='Paper';
body.appendChild(btn2);

const btn3 = document.createElement('button');
btn3.addEventListener('click', () => {
  game('scissors', getComputerChoice());
});
btn3.textContent = 'Scissors';
body.appendChild(btn3);

  


  