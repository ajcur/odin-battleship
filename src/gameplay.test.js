// import { player1, player2 } from "./index";

describe("Test game logic", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("Hits register correctly on player1", () => {
    const { player1 } = require("./gameplay.js");
    player1.gameboard.receiveAttack(7, 0);
    player1.gameboard.receiveAttack(2, 6);
    expect(player1.gameboard.board[7][1].timesHit).toBe(1);
    expect(player1.gameboard.board[2][6].sunk).toBe(true);
  });

  test("Hits register correctly on player2", () => {
    const { player2 } = require("./gameplay.js");
    player2.gameboard.receiveAttack(2, 2);
    player2.gameboard.receiveAttack(5, 5);
    player2.gameboard.receiveAttack(5, 6);
    expect(player2.gameboard.board[2][2].timesHit).toBe(1);
    expect(player2.gameboard.board[5][5].sunk).toBe(true);
  });

  test("Misses register correctly on player1", () => {
    const { player1 } = require("./gameplay.js");
    player1.gameboard.receiveAttack(3, 0);
    expect(player1.gameboard.board[3][0]).toBe("miss");
  });

  test("Tests don't interfere with each other", () => {
    const { player1 } = require("./gameplay.js");
    expect(player1.gameboard.board[2][6].sunk).toBe(false);
  });

  test("Gameboard reports correctly when all ships are sunk", () => {
    const { player1 } = require("./gameplay.js");
    expect(player1.gameboard.allSunk()).toBe(false);
    player1.gameboard.board.forEach((row) => {
      row.forEach((position) => {
        let x = player1.gameboard.board.indexOf(row);
        let y = row.indexOf(position);
        if (player1.gameboard.isOccupied(x, y)) {
          player1.gameboard.receiveAttack(x, y);
        }
      });
    });
    expect(player1.gameboard.allSunk()).toBe(true);
  });
});
