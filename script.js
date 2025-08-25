const buttons = document.querySelectorAll("button");
const messagesContainer = document.getElementById("messages")

const playerSelectionMessage = document.createElement("div");
playerSelectionMessage.classList.add("player-selection");
messagesContainer.appendChild(playerSelectionMessage);

const computerSelectionMessage = document.createElement("div");
computerSelectionMessage.classList.add("computer-selection");
messagesContainer.appendChild(computerSelectionMessage);

const gameWinner = document.createElement("div");
gameWinner.classList.add("round-winner")
messagesContainer.appendChild(gameWinner);

const gameOver = document.createElement("div");
gameOver.classList.add("game-over");
messagesContainer.appendChild(gameOver);

const roundWinner = document.createElement("div");
roundWinner.classList.add("round-winner");
messagesContainer.appendChild(roundWinner);

const scoreBoard = document.createElement("div");
scoreBoard.classList.add("scoreboard");
messagesContainer.appendChild(scoreBoard);

const maxRounds = 5;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * 3)];
    computerSelectionMessage.textContent = `Computer chose: ${choice}`;
    return choice;
};

function playRound(playerSelection) {
    if (humanScore === maxRounds || computerScore === maxRounds) {
        return;
    }

    const computerChoice = getComputerChoice();

    if (playerSelection === computerChoice) {
        roundWinner.textContent = "Tie!";
    } else if (
        (playerSelection === "rock" && computerChoice === "scissors") ||
        (playerSelection === "paper" && computerChoice === "rock") ||
        (playerSelection === "scissors" && computerChoice === "paper")
    ) {
        roundWinner.textContent = `You win this round! ${playerSelection} beats ${computerChoice}.`;
        humanScore++;
    } else {
        roundWinner.textContent = `You lose this round! ${computerChoice} beats ${playerSelection}.`;
        computerScore++;
    }

    scoreBoard.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

    if (humanScore === maxRounds || computerScore === maxRounds) {
        gameOver.textContent = "Game Over";
        buttons.forEach(btn => btn.disabled = true);

        roundWinner.textContent = "";
        playerSelectionMessage.textContent = "";
        computerSelectionMessage.textContent = "";
        scoreBoard.textContent = "";
            
        if (computerScore > humanScore) {
        gameWinner.textContent = `Computer won the game! Score: ${computerScore} - ${humanScore}.`;
        } else {
        gameWinner.textContent = `You won the game! Score: ${humanScore} - ${computerScore}.`;
        }
    }
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;  
        playerSelectionMessage.textContent = `You chose: ${playerSelection}.`;
        playRound(playerSelection);
    });
});