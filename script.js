function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Tie"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Lose"
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        return "Win"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Win"
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "Tie"
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        return "Lose"
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        return "Lose"
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        return "Win"
    } else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
        return "Tie"
    }
}

function getPlayerChoice() {
    const choose = prompt("What do you pick? r for rock, p for paper, s for scissor")

    if (choose === "r") {
        return "Rock"
    } else if (choose === "p") {
        return "Paper"
    } else if (choose === "s") {
        return "Scissor"
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) return "Rock";
    if (random === 1) return "Paper";
    if (random === 2) return "Scissor";
}

function scoreSystem(worl) {
    if (worl === "Win") {
        playerScore += 1
        return `${playerScore} - ${opponentScore}`
    } else if (worl === "Lose") {
        opponentScore += 1
        return `${playerScore} - ${opponentScore}`
    } else if (worl === "Tie") {
        return `${playerScore} - ${opponentScore}`
    }
}

let playerScore = 0
let opponentScore = 0

for (i = 0; i < 11; i--) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(`You picked ${playerSelection}, your opponent picked ${computerSelection}`)
    const worl = playRound(playerSelection, computerSelection)
    console.log(worl);
    console.log(scoreSystem(worl))
    
    if (playerScore === 5) {
        console.log("Youve Win")
        document.getElementById("celebration").innerHTML = "You've Win"
        break
    } else if (opponentScore === 5) {
        console.log("Youve Lose")
        document.getElementById("celebration").innerHTML = "You've Lose"
        break
    }
}