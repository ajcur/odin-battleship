import { Gameboard } from "./gameboard";

class Player {
  constructor(name, type, createGameboard = Gameboard) {
    this.name = name;
    this.type = type;
    this.gameboard = new createGameboard();
  }
}

export { Player };
