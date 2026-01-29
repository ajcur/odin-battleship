// import { player1, player2 } from "./index";

const gameArea = document.querySelector("#game-area");

function createGameboardElement() {
  let newGameboardElement = document.createElement("div");
  newGameboardElement.classList.add("gameboard");
  gameArea.appendChild(newGameboardElement);
  return newGameboardElement;
}

class DOMGameboard {
  constructor(player, gameboardElement = createGameboardElement()) {
    this.player = player;
    this.gameboardElement = gameboardElement;
    this.board = this.#populateBoard();
  }

  #createSquare() {
    let newSquare = document.createElement("div");
    newSquare.classList.add("gameboard-square");
    this.gameboardElement.appendChild(newSquare);
    return newSquare;
  }

  #populateBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        let square = this.#createSquare();
        row.push(square);
      }
      board.push(row);
    }
    // this.board.forEach((row) => {
    //   row.forEach((position) => {
    //     this.board[row][position] = this.#createSquare();
    //   });
    // });
    return board;
  }
}

export { DOMGameboard };
