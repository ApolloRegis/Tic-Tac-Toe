function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) { playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } 
    else if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}






