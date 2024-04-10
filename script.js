function getComputerChoice(){
    let number = Math.floor(Math.random() * (4 - 1) + 1);
    if (number == 1){
        return 'Paper';
    } else if (number == 2){
        return 'Rock'
    }else{
        return "Scissors"
    }
}

function playRound(playerChoice, computerChoice){
    let playerChoiceLower = playerChoice.toLowerCase();
    if ((playerChoiceLower == 'rock' && computerChoice == 'Rock') || (playerChoiceLower == 'paper' && computerChoice == 'Paper') || (playerChoiceLower == 'scissors' && computerChoice == 'Scissors')){
        return 'Draw!';
    } else if((playerChoiceLower == 'rock' && computerChoice == 'Scissors') || (playerChoiceLower == 'paper' && computerChoice == 'Rock') || (playerChoiceLower == 'scissors' && computerChoice == 'Paper')){
        return 'Player Wins!'
    }else{
        return 'Computer Wins!'
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    
    while (playerScore != 5 && computerScore != 5){
        let computerChoice = getComputerChoice();
        playerChoice = prompt('Choose Rock, Paper or Scissors');

        console.log("Computer: " + computerChoice);
        console.log("Player: " + playerChoice);
        let result = playRound(playerChoice, computerChoice);
        console.log(result);

        if(result.charAt(0) == 'P'){
            playerScore++;
            console.log(playerScore);
        }else if(result.charAt(0) == 'C'){
            computerScore++;
            console.log(computerScore);
        }

        if(playerScore == 5){
            return 'Player Wins The Game!';
        }else if(computerScore == 5){
            return 'Computer Wins The Game!';
        }

    }
}

console.log(playGame());

