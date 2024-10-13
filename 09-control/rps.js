function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 5);

    if (randomNumber == 0) {
        return 'rock';
    } 
    else if (randomNumber == 1) {
        return 'paper';
    } 
    else if (randomNumber == 2) {
        return 'scissors';
    }
    else if (randomNumber == 3) {
        return 'lizard';
    }
    else if (randomNumber == 4) {
        return 'spock';
    }
}

function playRound (playerSelection) {
    let computerSelection = computerPlay();

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock') {
        if (computerSelection == 'lizard') {
            return 'You win!';
        }
        else if (computerSelection == 'scissors') {
            return 'You win!';
        }
        else if (computerSelection == 'rock') {
            return 'You tie!';
        }
        else if (computerSelection == 'spock') {
            return 'You lose!';
        }
        else if (computerSelection == 'paper') {
            return 'You win!';
        }

    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'lizard') {
            return 'You win!';
        }
        else if (computerSelection == 'scissors') {
            return 'You tie!';
        }
        else if (computerSelection == 'rock') {
            return 'You lose!';
        }
        else if (computerSelection == 'spock') {
            return 'You lose!';
        }
        else if (computerSelection == 'paper') {
            return 'You win!';
        }

    }
    else if (playerSelection == 'lizard') {
        if (computerSelection == 'lizard') {
            return 'You tie!';
        }
        else if (computerSelection == 'scissors') {
            return 'You lose!';
        }
        else if (computerSelection == 'rock') {
            return 'You lose!';
        }
        else if (computerSelection == 'spock') {
            return 'You win!';
        }
        else if (computerSelection == 'paper') {
            return 'You win!';
        }

    }
    else if (playerSelection == 'spock') {
        if (computerSelection == 'lizard') {
            return 'You lose!';
        }
        else if (computerSelection == 'scissors') {
            return 'You win!';
        }
        else if (computerSelection == 'rock') {
            return 'You win!';
        }
        else if (computerSelection == 'spock') {
            return 'You tie!';
        }
        else if (computerSelection == 'paper') {
            return 'You lose!';
        }

    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'lizard') {
            return 'You lose!';
        }
        else if (computerSelection == 'scissors') {
            return 'You lose!';
        }
        else if (computerSelection == 'rock') {
            return 'You win!';
        }
        else if (computerSelection == 'spock') {
            return 'You win!';
        }
        else if (computerSelection == 'paper') {
            return 'You tie!';
        }

    }   
}

function game () {
    let wins = 0;
    let losses = 0;
    let ties = 0;     
    
    for (let i = 0; i < 5; i++) 
        {
        let playerSelection = prompt('Rock, Paper, Scissors, Lizard, Spock? Or type exit to quit.');
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors" || playerSelection == "lizard" || playerSelection == "spock") 
            {  const state = playRound(playerSelection);
                console.log(state);
                if (state=="You lose!") {
                    losses += 1;
                }
                else if (state=="You win!") {
                    wins += 1;
                } 
                else {
                    ties += 1;
                }
            }
        else if 
        (playerSelection == "exit"){
            console.log("You've selected the exit option, the game has finished!")
            return;
        }
        else {
            console.log("Invalid input. Please try again with a valid option (Rock, Paper, Scissors, Lizard, Spock).");
            i--;
        }
        }
    const score = `Your overall score is ${losses} losses, ${ties} ties and ${wins} wins.`;
    const result = (losses > wins) ? "Unlucky, you've lost the game" : (wins > losses) ? "You've won the game, congratulations you're escaping the simulation now..." : "Against all odds, you've managed to tie that gotta take skill!";
    console.log(`${score} ${result}`);
}
game();
