console.log("~ Welcome to The RPS game in JavaScript ~");

let round = 1;
let playerScore = 0;
let botScore = 0;

function rpsGame() {
    var bot = Math.floor(Math.random() * 3);
    var player = prompt("Enter your choice [ 0 = Rock, 1 = Paper, 2 = Scissors ]: ");
    
    switch (player) {
        case "0":
            console.log("Player : Rock" );
            break;
        case "1":
            console.log("Player : Paper");
            break;
        case "2":
            console.log("Player : Scissors");
            break;
        default:
            console.log("Invalid input!");
            return;
    }

    switch (bot) {
        case 0:
            console.log( "Bot    : Rock" );
            break;
        case 1:
            console.log( "Bot    : Paper");
            break;
        case 2:
            console.log( "Bot    : Scissors");
            break;
    }

    if (bot == player) {
        console.log("It's a tie!");
        return "It's a tie!";
    } else {
        if (bot == 0) {
            if (player == 1) {
                console.log("You win!");
                return "You win!";
            } else {
                console.log("You Lose!");
                return "You Lose!";
            }
        } else if (bot == 1) {
            if (player == 2) {
                console.log("You win!");
                return "You win!";
            } else {
                console.log("You Lose!");
                return "You Lose!";
            }
        } else {
            if (player == 0) {
                console.log("You win!");
                return "You win!";
            } else {
                console.log("You Lose!");
                return "You Lose!";
            }
        }
    }
}

while (round < 6) {
    console.log("Round " + round);
    //rpsGame();
    if (rpsGame() == "You win!") {
        playerScore++;
    } else{
        botScore++;
    }
    console.log("Player : " + playerScore + " Bot : " + botScore);
    console.log(" ");
    round++;
}

if (playerScore > botScore) {
    console.log("Player wins the game!");
} else if (playerScore < botScore) {
    console.log("Bot wins the game!");
} else {    
    console.log("It's a tie!");
}