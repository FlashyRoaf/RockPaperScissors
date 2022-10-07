const pickedUi = document.getElementById("picked");
const enemyPickedUi = document.getElementById("enemyPicked");
const worlDisplay = document.querySelectorAll("#worl");
const scoreDisplay = document.getElementById("scoreDisplay");
const enemyScoreDisplay = document.getElementById("enemyScoreDisplay");
const worlScreen = document.getElementById("worlScreen");
const picker = document.querySelectorAll("button");

let playerScore = 0;
let opponentScore = 0;

picker.forEach((button) => {
    button.addEventListener("click", () => {
        const picked = getPlayerChoiceUi(button.id);
        const enemyPicked = getComputerChoiceUi();
        const worl = playRound(picked, enemyPicked);
        playRoundUi(worl);
        scoreSystem(worl);
        scoreSystemUi();

        if (playerScore === 5 || opponentScore === 5) {
            worlScreen.style.height = "100%";
        }
    });
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Tie";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Lose";
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        return "Win";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Win";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "Tie";
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        return "Lose";
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        return "Lose";
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        return "Win";
    } else if (
        playerSelection === "Scissor" &&
        computerSelection === "Scissor"
    ) {
        return "Tie";
    }
}

function playRoundUi(playRound) {
    if (playRound === "Win") {
        worlDisplay.forEach((worlDisplay) => {
            worlDisplay.src = "./Assets/win.png";
        });
    }
    if (playRound === "Lose") {
        worlDisplay.forEach((worlDisplay) => {
            worlDisplay.src = "./Assets/lose.png";
        });
    }
    if (playRound === "Tie") {
        worlDisplay.forEach((worlDisplay) => {
            worlDisplay.src = "./Assets/tie.png";
        });
    }
}

function scoreSystem(worl) {
    if (worl === "Win") {
        playerScore += 1;
        return `${playerScore} - ${opponentScore}`;
    } else if (worl === "Lose") {
        opponentScore += 1;
        return `${playerScore} - ${opponentScore}`;
    } else if (worl === "Tie") {
        return `${playerScore} - ${opponentScore}`;
    }
}

function scoreSystemUi() {
    if (playerScore === 1) scoreDisplay.src = "./Assets/1.png";
    else if (playerScore === 2) scoreDisplay.src = "./Assets/2.png";
    else if (playerScore === 3) scoreDisplay.src = "./Assets/3.png";
    else if (playerScore === 4) scoreDisplay.src = "./Assets/4.png";
    else if (playerScore === 5) scoreDisplay.src = "./Assets/5.png";

    if (opponentScore === 1) enemyScoreDisplay.src = "./Assets/1.png";
    else if (opponentScore === 2) enemyScoreDisplay.src = "./Assets/2.png";
    else if (opponentScore === 3) enemyScoreDisplay.src = "./Assets/3.png";
    else if (opponentScore === 4) enemyScoreDisplay.src = "./Assets/4.png";
    else if (opponentScore === 5) enemyScoreDisplay.src = "./Assets/5.png";
}

function getPlayerChoiceUi(choose) {
    if (choose === "rock") {
        pickedUi.src = "./Assets/rock.png";
        return "Rock";
    } else if (choose === "paper") {
        pickedUi.src = "./Assets/paper.png";
        return "Paper";
    } else if (choose === "scissor") {
        pickedUi.src = "./Assets/scissor.png";
        return "Scissor";
    }
}

function getComputerChoiceUi() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        enemyPickedUi.src = "./Assets/rock.png";
        return "Rock";
    }
    if (random === 1) {
        enemyPickedUi.src = "./Assets/paper.png";
        return "Paper";
    }
    if (random === 2) {
        enemyPickedUi.src = "./Assets/scissor.png";
        return "Scissor";
    }
}
