let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => playRound("rock"))
paperBtn.addEventListener("click", () => playRound("paper"))
scissorsBtn.addEventListener("click", () => playRound("scissors"))


function playRound(humanChoice) {
  
    const computerChoice = getComputerChoice();
    let result = getResult(humanChoice, computerChoice);

    const resultDisplay = document.querySelector("#result");
    const runningScore = document.querySelector("#runningScore")

    if (result === "Win"){
        playerScore++;
        resultDisplay.textContent = `You Win! ${humanChoice} beats ${computerChoice}`
    }
    else if (result === "Lose")
    {
        computerScore++;
        resultDisplay.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`
    }
    else  resultDisplay.textContent = 'It was a draw!'

    checkWinner();

    return result;
}

function checkWinner(){
    if (playerScore >= 5 || computerScore >= 5){

        runningScore.textContent = `Game over! Final score: player ${playerScore} - ${computerScore} computer`
    }
    else 
    {
        runningScore.textContent = `Current score is you ${playerScore} - ${computerScore} computer`
    }
}

function getResult(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

  if (human === computer) return "Draw";

  if (human === "rock" && computer === "scissors") return "Win";
  if (human === "paper" && computer === "rock") return "Win";
  if (human === "scissors" && computer === "paper") return "Win";

  return "Lose";
}


function getComputerChoice(){
    let x = Math.random();

    if (x > 0.66)
        return "Rock"
    else if (x> 0.33)
        return "Paper"
    else
        return "Scissors"
}

