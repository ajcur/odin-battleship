// import { player1, player2 } from "./index";

const p1NameDisplay = document.querySelector("#p1-name");
const p2NameDisplay = document.querySelector("#p2-name");
const p1GameboardDisplay = document.querySelector("#p1-gameboard");
const p2GameboardDisplay = document.querySelector("#p2-gameboard");

function createGameboardElement() {
  let newGameboardElement = document.createElement("div");
  newGameboardElement.classList.add("gameboard");
  document.appendChild(newGameboardElement);
  return newGameboardElement;
}

class DOMGameboard {
  constructor(player, gameboardElement = createGameboardElement()) {
    this.player = player;
    this.gameboardElement = gameboardElement;
    this.board = Array(10)
      .fill()
      .map(() => Array(10).fill(this.#createSquare()));
  }
  #createSquare() {
    let newSquare = document.createElement("div");
    newSquare.classList.add("gameboard-square");
    this.gameboardElement.appendChild(newSquare);
    return newSquare;
  }
}

export { DOMGameboard };
