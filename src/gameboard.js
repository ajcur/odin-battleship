import { Ship } from "./ship.js";

class Position {
  constructor() {
    this.ship = null;
    this.occupied = false;
    this.hit = false;
  }

  set ship(newShip) {
    this._ship = newShip;
    this.occupied = true;
  }

  get ship() {
    return this._ship;
  }
}

class Gameboard {
  constructor() {
    this.board = (function () {
      let board = [];
      for (let i = 0; i < 10; i++) {
        board[i] = [];
        for (let j = 0; j < 10; j++) {
          board[i][j] = new Position();
        }
      }
      return board;
    })();
  }

  placeShip(length, position, direction) {
    let horizontalCoordinate = position[0];
    let verticalCoordinate = position[1];

    let newShip = new Ship(length);

    for (let i = 0; i < length; i++) {
      this.board[horizontalCoordinate][verticalCoordinate].ship = newShip;
      if (direction === "horizontal") {
        verticalCoordinate++;
      } else {
        horizontalCoordinate++;
      }
    }
  }

  isOccupied(position) {
    let horizontalCoordinate = position[0];
    let verticalCoordinate = position[1];

    return this.board[horizontalCoordinate][verticalCoordinate].occupied;
  }
}

export { Gameboard };
