
playGame();

function playGame(){
    let humanScore = 0
    let computerScore = 0

    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);
        if (result === "Win"){
            humanScore++
        }
        else if (result === "Lose"){
            computerScore++
        }
        else{

        }
    }

    console.log(`Final score: Human ${humanScore} - ${computerScore} Computer`)
}

function playRound(humanChoice, computerChoice) {
  
    let result = getResult(humanChoice, computerChoice);

    if (result === "Win"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    }
    else if (result === "Lose")
    {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
    else console.log('It was a draw!')

    return result;
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

function getHumanChoice(){
    let humanChoice = prompt("Rock, paper or scissors?");
    
    return humanChoice
}

