import { Gameboard } from "./gameboard";

class Player {
  constructor(type, createGameboard = Gameboard) {
    this.type = type;
    this.gameboard = new createGameboard();
  }
}

export { Player };
