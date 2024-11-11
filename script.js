let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function getHumanChoice() {
    let choose = prompt("Choose rock, paper or scissors to play this game").toLowerCase();
    return choose; 
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`You're tied, You both picked the same.!!`)
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "paper" && computerChoice === "rock" ||
               humanChoice === "scissors" && computerChoice === "paper"
    ){
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else{
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}


function playGame() {
    playRound();

    for (let i = 0; i < 4; i++){
        playRound(getHumanChoice(),getComputerChoice())
    }

    if (humanScore > computerScore) {
        console.log(`You win the game. Congratulations.......`);
    } else if (computerScore > humanScore) {
        console.log( `You lose the game. Sadddd for You.......`);
    } else {
        console.log(`You both tied the game.......`);
    }
}
    

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame(humanSelection, computerSelection);