import { Gameboard } from "./gameboard.js";

const fakeCreateShipFn = jest.fn((length) => {
  return {
    length,
    hit: jest.fn(),
    sunk: false,
  };
});

test("Gameboard can be created", () => {
  let test = new Gameboard(fakeCreateShipFn);
  expect(test).toBeTruthy();
});

test("Board positions can be accessed", () => {
  let test = new Gameboard(fakeCreateShipFn);
  expect(test.board[0][0].ship).toBeNull();
  expect(test.board[0][0].hit).toBe(false);
});

test("Ship can be placed", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.placeShip(3, 0, 0, "horizontal");
  expect(test.isOccupied(0, 2)).toBe(true);
});

test("Attacks on unoccupied positions record as missedAttack", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.receiveAttack(0, 4);
  expect(test.board[0][4].ship).toBeNull();
  expect(test.board[0][4].hit).toBe(true);
});

test("Attacks on previously attacked positions throw an Error", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.receiveAttack(0, 2);
  expect(() => test.receiveAttack([0, 2])).toThrow(Error);
});

test("Attacks on occupied positions send an attack to that ship", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.placeShip(3, 0, 4, "vertical");
  test.receiveAttack(2, 4);
  expect(test.board[1][4].ship.hit).toHaveBeenCalled();
});

test("Gameboard can report if all its ships are sunk", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.placeShip(1, 0, 0, "horizontal");
  test.placeShip(2, 4, 2, "vertical");
  test.board[0][0].ship.sunk = true;
  test.board[5][2].ship.sunk = true;
  expect(test.allSunk()).toBe(true);
});

test("Gameboard throws an Error if a ship is placed in an occupied position", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.placeShip(3, 0, 0, "horizontal");
  expect(() => test.placeShip(2, 0, 1, "horizontal")).toThrow(
    "At least one of these spaces is already occupied.",
  );
});

test("Gameboard throws an Error if a ship is placed out of bounds", () => {
  let test = new Gameboard(fakeCreateShipFn);
  expect(() => test.placeShip(3, 8, 2, "vertical")).toThrow(
    "Ship cannot be placed out of bounds.",
  );
});
