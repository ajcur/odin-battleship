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
  expect(test.board[0][0]).toBeNull();
});

test("Ship can be placed", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.placeShip(3, 0, 0, "horizontal");
  expect(test.isOccupied(0, 2)).toBe(true);
});

test("Attacks on unoccupied positions record as missedAttack", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.receiveAttack(0, 4);
  expect(test.board[0][4]).toBe("miss");
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
  expect(test.board[1][4].hit).toHaveBeenCalled();
});

test("Gameboard can report if all its ships are sunk", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.placeShip(1, 0, 0, "horizontal");
  test.placeShip(2, 4, 2, "vertical");
  test.board[0][0].sunk = true;
  test.board[4][2].sunk = true;
  expect(test.allSunk()).toBe(true);
});

test("Gameboard throws an Error if a ship is placed in an occupied position", () => {
  let test = new Gameboard(fakeCreateShipFn);
  test.placeShip(3, 0, 0, "horizontal");
  expect(() => test.placeShip(2, 0, 1, "horizontal")).toThrow(Error);
});

test.todo("Gameboard throws an Error if a ship is placed outside of bounds");

test.todo("Positions immediately surrounding a ship are marked as boundary");
