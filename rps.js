console.log("~ Welcome to The RPS game in JavaScript ~");

const legends = {
    "rock": 0,
    "paper": 1,
    "scissors": 2,
};

function rpsGame() {
    return new Promise((resolve) => {
        // Get references to the buttons
        const rockBtn = document.getElementById('rock');
        const paperBtn = document.getElementById('paper');
        const scissorsBtn = document.getElementById('scissors');
    
        // Add click event listeners to the buttons
        rockBtn.addEventListener('click', () => {
          console.log('Ply : rock');
          resolve(legends["rock"]);
        });
    
        paperBtn.addEventListener('click', () => {
          console.log('Ply : paper');
          resolve(legends["paper"]);
        });
    
        scissorsBtn.addEventListener('click', () => {
          console.log('Ply : Scissors');
          resolve(legends["scissors"]);
        });
    });
}

const start = document.querySelector("#start");
start.addEventListener("click", () => {
    console.clear();
    let round = 1;
    let playerScore = 0;
    let botScore = 0;

    const roundcount = document.querySelector("#round");
    roundcount.innerHTML = "<p>Round " + round + "</p>";

    const logger = document.querySelector("#result");
    logger.innerHTML = "<p>Player : " + playerScore + " Bot : " + botScore + "</p>";

    const final = document.querySelector("#final");
    final.innerHTML = "<p></p>";

    (async () => {
        while (round < 6) {
            console.log("Round " + round);
            const roundcount = document.querySelector("#round");
            roundcount.innerHTML = "<p>Round " + round + "</p>";

            let bot = Math.floor(Math.random() * 3);
            let bot1 = Object.keys(legends)[bot]

            let player = await rpsGame();
            let player1 = Object.keys(legends)[player];
            console.log("Bot : " + bot1);
            
            if (bot == player) {
                console.log("It's a tie!");
                const logger = document.querySelector("#result");
                logger.innerHTML = "<p>You chose: " + player1 + "</p><p>Bot chose: " + bot1 + "</p><p></p><p>It's a tie!</p><p>Player : " + playerScore + " Bot : " + botScore + "</p>";
            }
            else if (legends[player1]>legends[bot1] || (player1 == "rock" && bot1 == "scissors")) {
                console.log("You win!");
                playerScore++;
                const logger = document.querySelector("#result");
                logger.innerHTML = "<p>You chose: " + player1 + "</p><p>Bot chose: " + bot1 + "</p><p></p><p>You win!</p><p>Player : " + playerScore + " Bot : " + botScore + "</p>";
            }
            else {
                console.log("You Lose!");
                botScore++;
                const logger = document.querySelector("#result");
                logger.innerHTML = "<p>You chose: " + player1 + "</p><p>Bot chose: " + bot1 + "</p><p></p><p>You Lose!</p><p>Player : " + playerScore + " Bot : " + botScore + "</p>";
            }
            round++;
        }
        
        if (playerScore > botScore) {
            console.log("Player wins the game!");
            const final = document.querySelector("#final");
            final.innerHTML = "<p>Player wins the game!</p>";
        } else if (playerScore < botScore) {
            console.log("Bot wins the game!");
            const final = document.querySelector("#final");
            final.innerHTML = "<p>Bot wins the game!</p>";
        } else {    
            console.log("It's a tie!");
            const final = document.querySelector("#final");
            final.innerHTML = "<p>It's a tie!</p>";
        }
    })();
});