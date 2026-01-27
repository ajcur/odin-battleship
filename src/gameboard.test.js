import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";

test("Gameboard can be created", () => {
  let test = new Gameboard();
  expect(test).toBeTruthy();
});

test("Board positions can be accessed", () => {
  let test = new Gameboard();
  expect(test.board[0][0].ship).toBeNull();
});

test("Ship can be placed", () => {
  let test = new Gameboard();
  test.placeShip(3, [0, 0], "horizontal");
  expect(test.isOccupied([0, 2])).toBe(true);
});
