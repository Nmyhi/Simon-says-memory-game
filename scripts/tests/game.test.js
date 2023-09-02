/**
 * @jest-environment jsdom
 */

const { newGame, game } = require("../game");



beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains the correct IDs", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        newGame();
    })
    test("Should set the gamescore to zero", () => {
        expect(game.score).toEqual(0);
    })
    test("Should clear the playerMove array", () => {
        expect(game.playerMoves.length).toBe(0);
    })
    test("Should clear the currentGame array", () => {
        expect(game.currentGame.length).toBe(0);
    })
})