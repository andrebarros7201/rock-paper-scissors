const buttons = document.querySelectorAll('button');
console.log(buttons);

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector('#playerScore');
const computer = document.querySelector('#computerScore');

player.textContent = `Player: ${playerScore}`;
computer.textContent = `${playerScore} :Computer`;

function getComputerChoice(){
    let number = Math.floor(Math.random() * (4 - 1) + 1);
    if (number == 1){
        return 'paper';
    } else if (number == 2){
        return 'rock'
    }else{
        return "scissors"
    }
}

function checkWinner() {
    if (playerScore === 5) {
        alert('Player Wins!');
        resetScore();
    }else if (computerScore === 5){
        alert('Computer Wins!');
        resetScore();
    }
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;

    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `${playerScore} :Computer`;
}

function playRound(playerChoice, computerChoice){
    if ((playerChoice == 'rock' && computerChoice == 'rock') || (playerChoice == 'paper' && computerChoice == 'paper') || (playerChoice == 'scissors' && computerChoice == 'scissors')){
        return 'Draw!';
    } else if((playerChoice == 'rock' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissors' && computerChoice == 'paper')){ 
        playerScore++;
        player.textContent = `Player: ${playerScore}`;
    }else{
        computerScore++;
        computer.textContent = `${computerScore} :Computer`;
    }
    checkWinner();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        playRound(playerChoice, computerChoice);
    });
});

