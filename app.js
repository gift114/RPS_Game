let userScore = 0;
let computerScore = 0;
let timeleft = 30;
const msg = document.getElementById('message');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const scoreBoard = document.getElementById('score');
const gameDiv = document.getElementById('choice');
const restartBtn = document.getElementById('restart');
const timerDiv = document.getElementById('timer');
const name = document.getElementById('name');
const start = document.getElementById('start');
const play = document.getElementById('how');
const rule = document.getElementById('rule');
const close = document.getAnimations('close');
const intro = document.getElementById('intro');
const container = document.getElementById('container')

function startGame() {
    container.style.display = "block";
    intro.style.display = "none";
    startTimer(); 
}

function howToPlay() {
    rule.style.display = "block";
    intro.style.display = "none";
}

function closeHowToPlayPage() {
    rule.style.display = "none";
    intro.style.display = "block";
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function user(usersChoice) {

    const computerChoice = getComputerChoice();

    switch (usersChoice + computerChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(usersChoice, computerChoice);
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(usersChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(usersChoice, computerChoice);
            break;
    }
}

function win(usersChoice, computerChoice) {
    userScore++;
    updateScore();
    msg.innerText = `You clicked ${usersChoice}, comp clicked ${computerChoice}, you won`;
    msg.style.color = "green";
}

function lose(usersChoice, computerChoice) {
    computerScore++;
    updateScore();
    msg.innerText = `You clicked ${usersChoice}, comp clicked ${computerChoice}, oops! you lost`;;
    msg.style.color = "red";
}

function draw(usersChoice, computerChoice) {
    updateScore();
    msg.innerText = `You clicked ${usersChoice}, comp clicked ${computerChoice}, it's a draw`;
    msg.style.color = "black"
}

function disableRPSBtns() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function updateScore() {
    let userId = document.getElementById('userId');
    let userID = userId.value || "User";
    let compId = "comp";    
    scoreBoard.innerText = `${userID} : ${userScore}   -   ${compId} : ${computerScore}`;
}

function restartGame() {
    userScore = 0;
    computerScore = 0;
    timeleft = 30;
    updateScore();
    msg.innerText = '';
    msg.style.color = 'black';
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    restartBtn.style.display = 'none'
}

function finalResult()
{
    if (userScore > computerScore) {
        msg.innerText = "Game Over, you won.";
        msg.style.color = 'green';
    } else if (userScore < computerScore) {
        msg.innerText = "Game Over, you lost.";
        msg.style.color = 'orange';
    } else {
        msg.innerText = "Game Over, it's a draw.";
        msg.style.color = '#428bca';
    }
}


function startTimer() {
    setInterval(() => {

        if (timeleft <= 0) {
            timerDiv.innerText = "Finished";
            finalResult();
            restartBtn.style.display = "inline";
            disableRPSBtns();
        } else {
            timerDiv.innerText = `Time left: ${timeleft}`;
        }

        timeleft -= 1;
    }, 1000);
}

function main() {
    rock.addEventListener('click', () => user('rock'));
    paper.addEventListener('click', () => user("paper"));
    scissors.addEventListener('click', () => user("scissors"));
    restartBtn.addEventListener('click', restartGame);
    close.addEventListener('click', closeHowToPLayPage);
    // startTimer();
}

main();