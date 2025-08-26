// Create DOM elements
const gameButtons = document.querySelectorAll(".button");
const messagesContainer = document.querySelector("#messages");
const playAgainPopup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const playAgainYes = document.querySelector(".play-again-yes");
const playAgainNo = document.querySelector(".play-again-no");

// Create message containers
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

// Define game variables
const maxRounds = 5;
let humanScore = 0;
let computerScore = 0;

// Define helper functions
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * 3)];
    computerSelectionMessage.textContent = `Computer chose: ${choice}`;
    return choice;
};

function handleGameOver() {
    if (humanScore === maxRounds || computerScore === maxRounds) {
        gameOver.textContent = "Game Over";
        gameButtons.forEach(button => {
            button.disabled = true;
            button.classList.add("disabled");
        });

        overlay.style.display = "block"

        playAgainPopup.style.display = "flex";
        playAgainPopup.style.flexDirection = "column";
        playAgainPopup.style.gap = "1rem"
        
        roundWinner.textContent = "";
        playerSelectionMessage.textContent = "";
        computerSelectionMessage.textContent = "";
        scoreBoard.textContent = "";
            
        if (computerScore > humanScore) {
            gameWinner.textContent = `Computer won the game! Score: ${computerScore} - ${humanScore}.`;
        } else {
            gameWinner.textContent = `You won the game! Score: ${humanScore} - ${computerScore}.`;
        }
    };
};

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    playerSelectionMessage.textContent = "";
    computerSelectionMessage.textContent = "";
    gameWinner.textContent = "";
    gameOver.textContent = "";
    roundWinner.textContent = "";
    scoreBoard.textContent = "";

    playAgainPopup.style.display = "none";
    overlay.style.display = "none";

    gameButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove("disabled");
    });
};

// Define playRound()
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

    handleGameOver();
};

// Add event listeners for game buttons
gameButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;  
        playerSelectionMessage.textContent = `You chose: ${playerSelection}.`;
        playRound(playerSelection);
    });
});

// Add event listeners for play-again buttons
playAgainNo.addEventListener("click", function() {
    playAgainPopup.style.display = "none";
    overlay.style.display = "none";
});

playAgainYes.addEventListener("click", resetGame);