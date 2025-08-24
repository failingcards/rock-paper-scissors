const buttons = document.querySelectorAll("button");
let playerSelection;
const playerSelectionMessage = document.createElement("div");
document.body.appendChild(playerSelectionMessage);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;  
        playerSelectionMessage.textContent = `You chose: ${playerSelection}.`;
    });
});

function playGame() {
    function getHumanChoice() {
        return playerSelection;
    };
    
    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0) {
            return "scissors";
        } else if (computerChoice === 1) {
            return "paper";
        } else {
            return "rock";
        }
    };

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("Tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
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