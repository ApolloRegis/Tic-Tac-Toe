function getComputerChoice() {
    let choice = Math.random();
    if(choice<0.33) {
        return('Rock');
    } else if(choice<0.66) {
        return('Paper');
    } else {
        return('Scissors');
    };
  };

  const playRound = function(playerSelection, computerSelection){
    let picked = playerSelection.toLowerCase();
    let chlng = computerSelection.toLowerCase();
    let plyrp = picked.charAt(0).toUpperCase() + picked.slice(1);
    let cmptrp = chlng.charAt(0).toUpperCase() + chlng.slice(1);
  
    if(picked === chlng){
      return 'It\'s a tie!';
    } else if((picked === 'rock' && chlng === 'scissors') || 
    (picked === 'paper' && chlng === 'rock') || 
    (picked === 'scissors' && chlng === 'paper')) {
      return 'You win!' + ' ' + plyrp + ' ' + 'beats' + ' ' + cmptrp + '.'; 
    } else {
      return 'You lose!' + ' ' + cmptrp + ' ' + 'beats' + ' ' + plyrp + '.';
    };
  };

  function game() {
    let pscore = 0;
    let cscore = 0;
    
    for(i=0; i<5; i++) {
        let input = window.prompt();
        let input2 = getComputerChoice();
        let result = playRound(input, input2);
  
      if(result.includes('You win!')) {
        pscore += 1;
        console.log(result);
      } else if(result.includes('You lose!')) {
        cscore += 1;
        console.log(result);
      } else {
        console.log(result);
      };
    };
    if(pscore === cscore) {
      console.log('Tie game, no winner');
    } else if(pscore > cscore) {
      console.log('Player wins game!');
    } else {
      console.log('Computer wins game!');
    };
  };