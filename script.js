const buttons = document.querySelectorAll("button");

const playerSelectionMessage = document.createElement("div");
document.body.appendChild(playerSelectionMessage);

const computerSelectionMessage = document.createElement("div");
document.body.appendChild(computerSelectionMessage);

const roundWinner = document.createElement("div");
document.body.appendChild(roundWinner);


let humanScore = 0;
let computerScore = 0;

function playGame() {
    function getHumanChoice() {
        return playerSelection;
    };
    

    if (computerScore > humanScore) {
        roundWinner.textContent = `Computer wins! Score: ${computerScore} - ${humanScore}.`;
    } else if (humanScore > computerScore) {
        roundWinner.textContent = `You win! Score: ${humanScore} - ${computerScore}.`;
    } else {
        roundWinner.textContent = "It's a tie!";
    };
};

function playRound(playerSelection, computerChoice) {
    computerChoice = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerChoice) {
        console.log("Tie!");
    } else if (
        (playerSelection === "rock" && computerChoice === "scissors") ||
        (playerSelection === "paper" && computerChoice === "rock") ||
        (playerSelection === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerSelection}.`);
        computerScore++;
    }
};

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerSelectionMessage.textContent = "Computer chose: scissors";
        return "scissors";
    } else if (computerChoice === 1) {
        computerSelectionMessage.textContent = "Computer chose: paper";
        return "paper";
    } else {
        computerSelectionMessage.textContent = "Computer chose: rock";
        return "rock";
    }
};


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;  
        playerSelectionMessage.textContent = `You chose: ${playerSelection}.`;

        playRound(playerSelection, getComputerChoice());

        playGame();
    });
});

