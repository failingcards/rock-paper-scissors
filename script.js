const buttons = document.querySelectorAll("button");

const playerSelectionMessage = document.createElement("div");
document.body.appendChild(playerSelectionMessage);

const computerSelectionMessage = document.createElement("div");
document.body.appendChild(computerSelectionMessage);


let humanScore = 0;
let computerScore = 0;

function playGame() {
    function getHumanChoice() {
        return playerSelection;
    };
    

    if (computerScore > humanScore) {
        console.log(`Computer wins! Score: ${computerScore} - ${humanScore}.`);
    } else if (humanScore > computerScore) {
        console.log(`You win! Score: ${humanScore} - ${computerScore}.`);
    } else {
        console.log("It's a tie!")
    };
};

playGame();

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
    });
});

