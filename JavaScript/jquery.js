function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; 
}

getComputerChoice();
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) { 
    playerSelection = playerSelection.toLowerCase();
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

playRound(playerSelection, computerSelection);

function game() {
    let round1 = playRound(prompt("Enter Rock, Paper, or Scissors"), getComputerChoice());
    let round2 = playRound(prompt("Enter Rock, Paper, or Scissors"), getComputerChoice());
    let round3 = playRound(prompt("Enter Rock, Paper, or Scissors"), getComputerChoice());
    let round4 = playRound(prompt("Enter Rock, Paper, or Scissors"), getComputerChoice());
    let round5 = playRound(prompt("Enter Rock, Paper, or Scissors"), getComputerChoice());
    console.log(round1);
    console.log(round2);
    console.log(round3);
    console.log(round4);
    console.log(round5);
}

game();





