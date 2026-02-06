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
          boundary: false,
        };
        row.push(field);
      }
      board.push(row);
    }
    return board;
  }

  placeShip(length, x, y, direction) {
    if (!this.#placementPossible(length, x, y, direction)) {
      return false;
    }
    let newShip = new this.createShip(length);

    for (let i = 0; i < length; i++) {
      this.board[x][y].ship = newShip;
      this.board[x][y].boundary = false;

      if (x >= 1 && this.board[x - 1][y].ship === null) {
        this.board[x - 1][y].boundary = true;
      }
      if (y >= 1 && this.board[x][y - 1].ship === null) {
        this.board[x][y - 1].boundary = true;
      }
      if (x <= 8) {
        this.board[x + 1][y].boundary = true;
      }
      if (y <= 8) {
        this.board[x][y + 1].boundary = true;
      }

      if (direction === "horizontal") {
        y++;
      } else x++;
    }

    this.ships.push(newShip);

    return true;
  }

  placeShipsRandomly() {
    this.board = this.#createBoard();

    let shipsToPlace = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

    while (shipsToPlace.length >= 1) {
      let freeSpaces = [];

      let biggestShipIndex = shipsToPlace.length - 1;

      let length = shipsToPlace[biggestShipIndex];
      let direction = Math.random() < 0.5 ? "horizontal" : "vertical";

      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
          if (this.#placementPossible(length, x, y, direction)) {
            freeSpaces.push([x, y]);
          }
        }
      }
      if (freeSpaces.length >= 1) {
        let chosenSpotIndex = Math.floor(Math.random() * freeSpaces.length);
        let x = freeSpaces[chosenSpotIndex][0];
        let y = freeSpaces[chosenSpotIndex][1];

        if (this.placeShip(length, x, y, direction)) {
          shipsToPlace.splice(-1, 1);
        }
      }
    }
  }

  #placementPossible(length, x, y, direction) {
    // if (
    //   (x >= 1 && this.isOccupied(x - 1, y)) ||
    //   (y >= 1 && this.isOccupied(x, y - 1))
    // ) {
    //   return false;
    // }
    for (let i = 0; i < length; i++) {
      if (x > 9 || y > 9 || x < 0 || y < 0) {
        return false;
      }
      if (
        this.isOccupied(x, y) ||
        this.board[x][y].boundary
        // this.isOccupied(x + 1, y) ||
        // this.isOccupied(x, y + 1)
      ) {
        return false;
      }
      if (direction === "horizontal") {
        y++;
      } else x++;
    }
    return true;
  }

  isOccupied(x, y) {
    return this.board[x][y].ship != null;
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
