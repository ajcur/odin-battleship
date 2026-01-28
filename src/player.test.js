import { Player } from "./player.js";

const fakeCreateGameboardFn = jest.fn(() => {
  return {
    board: Array(10)
      .fill()
      .map(() => Array(10).fill(null)),
    ships: [],
  };
});

test("Player can be created", () => {
  let test = new Player();
  expect(test).toBeTruthy();
});

test("Player type can be set", () => {
  let test = new Player("human");
  expect(test.type).toBe("human");
});

test("Player has a gameboard object", () => {
  let test = new Player("human", fakeCreateGameboardFn);
  expect(test.gameboard.board[0][0]).toBeNull();
});
