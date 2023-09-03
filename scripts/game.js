//Javascript structure
//game {object}     store the game state
//newGame()         Reset everything and start a new turn
//addTurn()         Add a random move to the sequence
//showTurns()       Play the sequence and uses jvascript interval to call the lightsUp function which will light up the appropiate circle
//playerTurn()      will check i the player clicked the right circle in the sequence
//showScore()       update the score in the DOM

let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"],
    turnNumber : 0
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };