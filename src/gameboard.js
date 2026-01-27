import { Ship } from "./ship.js";

function createShip(length) {
  return new Ship(length);
}

class Gameboard {
  constructor(createShipFn = createShip) {
    this.board = Array(10)
      .fill()
      .map(() => Array(10).fill(null));
    this.createShipFn = createShipFn;
    this.ships = [];
  }

  placeShip(length, x, y, direction) {
    let newShip = this.createShipFn(length);

    if (direction === "horizontal") {
      for (let i = x; i < x + length; i++) {
        if (this.isOccupied(i, y)) {
          throw new Error("At least one of these spaces is already occupied!");
        }
      }
      for (let i = x; i < x + length; i++) {
        this.board[x][y] = newShip;
      }
    } else if (direction === "vertical") {
      for (let i = y; i < y + length; i++) {
        if (this.isOccupied(x, i)) {
          throw new Error("At least one of these spaces is already occupied!");
        }
      }
      for (let i = y; i < y + length; i++) {
        this.board[x][y] = newShip;
      }
    }

    // for (let i = 0; i < length; i++) {
    //   if (this.isOccupied(x, y)) {
    //     throw new Error("At least one of these spaces is already occupied!");
    //   }
    //   if (direction === "horizontal") {
    //     y++;
    //   } else x++;
    // }

    // let newShip = this.createShipFn(length);

    for (let j = 0; j < length; j++) {
      this.board[x][y] = newShip;
      if (direction === "horizontal") {
        y++;
      } else x++;
    }

    this.ships.push(newShip);
  }

  isOccupied(x, y) {
    return this.board[x][y] !== null && this.board[x][y] !== "miss";
  }

  receiveAttack(x, y) {
    if (this.board[x][y] === "miss") {
      throw new Error("This field has already been hit.");
    }
    if (this.isOccupied(x, y)) {
      this.board[x][y].hit();
    } else this.board[x][y] = "miss";
  }

  allSunk() {
    return this.ships.every((ship) => ship.sunk === true);
  }
}

export { Gameboard };
