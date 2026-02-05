import { Ship } from "./ship.js";

class Gameboard {
  constructor(createShip = Ship) {
    this.createShip = createShip;
    this.board = this.#createBoard();
    this.ships = [];
  }

  #createBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        let field = {
          ship: null,
          hit: false,
        };
        row.push(field);
      }
      board.push(row);
    }
    return board;
  }

  placeShip(length, x, y, direction) {
    this.#checkPlacement(length, x, y, direction);
    let newShip = new this.createShip(length);

    for (let i = 0; i < length; i++) {
      this.board[x][y].ship = newShip;
      if (direction === "horizontal") {
        y++;
      } else x++;
    }

    this.ships.push(newShip);
  }

  #checkPlacement(length, x, y, direction) {
    for (let i = 0; i < length; i++) {
      if (x > 9 || y > 9 || x < 0 || y < 0) {
        throw new Error("Ship cannot be placed out of bounds.");
      }
      if (this.isOccupied(x, y)) {
        throw new Error("At least one of these spaces is already occupied.");
      }
      if (direction === "horizontal") {
        y++;
      } else x++;
    }
  }

  isOccupied(x, y) {
    return this.board[x][y].ship !== null;
  }

  receiveAttack(x, y) {
    if (this.board[x][y].hit) {
      throw new Error("This field has already been hit.");
    }
    if (this.isOccupied(x, y)) {
      this.board[x][y].ship.hit();
    }
    this.board[x][y].hit = true;
  }

  allSunk() {
    return this.ships.every((ship) => ship.sunk === true);
  }
}

export { Gameboard };
