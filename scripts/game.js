//Javascript structure
//game {object}     store the game state
//newGame()         Reset everything and start a new turn
//addTurn()         Add a random move to the sequence
//showTurns()       Play the sequence and uses jvascript interval to call the lightsUp function which will light up the appropiate circle
//playerTurn()      will check i the player clicked the right circle in the sequence
//showScore()       update the score in the DOM

let game = {
    score : 0,
    currentGame : [],
    playerMoves : [],
    choices : ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
}

module.exports = { newGame, game };